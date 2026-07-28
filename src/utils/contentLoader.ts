import { Category, Photo } from '../types';
import { BestPhoto } from '../data/bestPhotos';

// Use Vite's eager raw glob import for all markdown files in yearwise folders under src/content/series/
const markdownModules = import.meta.glob('../content/series/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

interface RawPhotoFrontmatter {
  id: string;
  url: string;
  title: string;
  description?: string;
  storySnippet?: string;
  location?: string;
  date?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  tag?: string;
  categoryTag?: 'Monsoon & Rivers' | 'Himalayan Vistas' | 'Spring & Flora' | 'Rural & Heritage';
  camera?: string;
  lens?: string;
  shutter?: string;
  aperture?: string;
  iso?: string;
  focalLength?: string;
}

interface RawSeriesFrontmatter {
  id: string;
  title: string;
  state?: string;
  type?: 'travel' | 'milestone';
  location: string;
  dateRange: string;
  coverUrl: string;
  photos: RawPhotoFrontmatter[];
}

/**
 * Lightweight zero-dependency YAML & Frontmatter parser for series Markdown files.
 */
function parseFrontmatter(rawContent: string): { data: Partial<RawSeriesFrontmatter>; content: string } {
  if (!rawContent) return { data: {}, content: '' };

  const matches = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!matches) {
    return { data: {}, content: rawContent.trim() };
  }

  const yamlBlock = matches[1];
  const bodyContent = matches[2].trim();

  const data: Record<string, any> = {};
  const lines = yamlBlock.split('\n');

  let currentKey = '';
  let inPhotosList = false;
  let currentPhoto: Record<string, any> | null = null;
  let photosList: Record<string, any>[] = [];

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed || trimmed.startsWith('#')) continue;

    // Check if entering photos list
    if (trimmed.startsWith('photos:')) {
      inPhotosList = true;
      data['photos'] = photosList;
      continue;
    }

    if (inPhotosList) {
      // Photo item start `- id: ...` or `- url: ...`
      if (trimmed.startsWith('- ')) {
        if (currentPhoto) {
          photosList.push(currentPhoto);
        }
        currentPhoto = {};
        const itemLine = trimmed.substring(2).trim();
        const colonIdx = itemLine.indexOf(':');
        if (colonIdx !== -1) {
          const k = itemLine.substring(0, colonIdx).trim();
          let v = itemLine.substring(colonIdx + 1).trim();
          v = v.replace(/^["'](.*)["']$/, '$1');
          currentPhoto[k] = v;
        }
      } else if (currentPhoto && rawLine.startsWith('    ')) {
        // Indented property of photo item
        const colonIdx = trimmed.indexOf(':');
        if (colonIdx !== -1) {
          const k = trimmed.substring(0, colonIdx).trim();
          let v = trimmed.substring(colonIdx + 1).trim();
          v = v.replace(/^["'](.*)["']$/, '$1');
          currentPhoto[k] = v;
        }
      } else if (!rawLine.startsWith('  ') && !rawLine.startsWith('    ')) {
        // Exited photos list
        if (currentPhoto) {
          photosList.push(currentPhoto);
          currentPhoto = null;
        }
        inPhotosList = false;
      }
    }

    if (!inPhotosList) {
      const colonIdx = trimmed.indexOf(':');
      if (colonIdx !== -1) {
        const k = trimmed.substring(0, colonIdx).trim();
        let v = trimmed.substring(colonIdx + 1).trim();
        v = v.replace(/^["'](.*)["']$/, '$1');
        data[k] = v;
      }
    }
  }

  if (currentPhoto) {
    photosList.push(currentPhoto);
  }

  return { data, content: bodyContent };
}

/**
 * Loads all series dynamically from Markdown files.
 */
export function loadContentFromMarkdown(): { categories: Category[]; bestPhotos: BestPhoto[] } {
  const categories: Category[] = [];
  const bestPhotosList: BestPhoto[] = [];

  const filePaths = Object.keys(markdownModules);

  for (const filePath of filePaths) {
    const rawContent = markdownModules[filePath];
    const { data, content } = parseFrontmatter(rawContent);

    if (!data.id || !data.title) continue;

    const parsedPhotos: Photo[] = (data.photos || []).map((p: any) => {
      const exifData = (p.camera || p.lens || p.shutter || p.aperture || p.iso || p.focalLength) ? {
        camera: p.camera || 'Nikon Z Series',
        lens: p.lens || 'NIKKOR Z Optics',
        shutter: p.shutter || '1/250s',
        aperture: p.aperture || 'f/5.6',
        iso: p.iso || 'ISO 100',
        focalLength: p.focalLength || '35mm'
      } : undefined;

      const photoObj: Photo = {
        id: p.id,
        url: p.url,
        title: p.title,
        description: p.description || '',
        location: p.location || data.location,
        date: p.date || data.dateRange,
        aspectRatio: p.aspectRatio || 'landscape',
        tag: p.tag || p.categoryTag || 'General',
        exif: exifData,
        context: {
          state: data.state,
          year: data.dateRange
        }
      };

      // Also register into bestPhotos list
      const bestPhotoObj: BestPhoto = {
        ...photoObj,
        categoryId: data.id,
        categoryTag: (p.categoryTag || p.tag || 'Monsoon & Rivers') as any,
        storySnippet: p.storySnippet || p.description
      };
      bestPhotosList.push(bestPhotoObj);

      return photoObj;
    });

    const categoryObj: Category = {
      id: data.id,
      title: data.title,
      state: data.state,
      type: (data.type as any) || 'travel',
      coverUrl: data.coverUrl || '',
      location: data.location || '',
      dateRange: data.dateRange || '',
      description: content,
      photos: parsedPhotos
    };

    categories.push(categoryObj);
  }

  return { categories, bestPhotos: bestPhotosList };
}

// Execute and export parsed content
const loaded = loadContentFromMarkdown();
export const parsedCategories = loaded.categories;
export const parsedBestPhotos = loaded.bestPhotos;
