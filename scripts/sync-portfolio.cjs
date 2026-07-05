// scripts/sync-portfolio.cjs
const fs = require('fs');
const path = require('path');

// Try loading dotenv if present
try {
  require('dotenv').config();
} catch (e) {
  // Dotenv optional, fallback to environment variables
}

let cloudinary;
try {
  cloudinary = require('cloudinary').v2;
} catch (e) {
  console.error('Error: "cloudinary" package is not installed.');
  console.error('Please run: npm install cloudinary');
  process.exit(1);
}

// Configure credentials
const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error('Error: Missing Cloudinary credentials.');
  console.error('Please set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET as environment variables or inside a .env file.');
  process.exit(1);
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true
});

// Helper to generate clean slugs for category IDs
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start
    .replace(/-+$/, '');            // Trim - from end
}

async function run() {
  console.log('Starting Cloudinary Portfolio Sync...');
  console.log('Querying recursive folder contents under "portfolio/"...');
  
  try {
    // Search recursively for all images under 'portfolio' folder and its nested subfolders
    const response = await cloudinary.search
      .expression('folder:portfolio/* AND resource_type:image')
      .with_field('context')
      .with_field('tags')
      .with_field('image_metadata')
      .with_field('metadata')
      .max_results(500)
      .execute();

    if (!response.resources || response.resources.length === 0) {
      console.log('No images found under "portfolio/". Please check folder path.');
      process.exit(0);
    }

    console.log(`Found ${response.resources.length} total images. Processing metadata...`);

    const syncData = {};
    const albumStats = {};

    response.resources.forEach((resource, index) => {
      const publicId = resource.public_id;
      const folderPath = resource.asset_folder || resource.folder || (publicId.includes('/') ? publicId.substring(0, publicId.lastIndexOf('/')) : '');
      
      // Remove the root "portfolio/" prefix to parse relative subfolders
      let relativePath = '';
      if (folderPath.startsWith('portfolio/')) {
        relativePath = folderPath.substring('portfolio/'.length);
      } else if (folderPath === 'portfolio') {
        relativePath = '';
      } else {
        relativePath = folderPath;
      }

      const pathParts = relativePath ? relativePath.split('/') : [];
      
      let year = '';
      let albumName = '';
      let categoryId = '';
      
      if (pathParts.length >= 2) {
        // e.g. ["2026", "Spring Kumayun"]
        year = pathParts[0];
        albumName = pathParts[1];
        categoryId = `${slugify(year)}-${slugify(albumName)}`;
      } else if (pathParts.length === 1) {
        // e.g. ["Kerala"]
        albumName = pathParts[0];
        categoryId = slugify(albumName);
      } else {
        albumName = 'General';
        categoryId = 'general';
      }

      // Auto-calculate Aspect Ratio
      const width = resource.width;
      const height = resource.height;
      let aspectRatio = 'landscape';
      if (width < height) aspectRatio = 'portrait';
      if (width === height) aspectRatio = 'square';

      // Extract context and structured metadata
      const context = resource.context || {};
      const structMeta = resource.metadata || {};
      
      // Helper to find key in custom metadata case-insensitively
      const getMetaVal = (obj, keyName) => {
        const key = Object.keys(obj).find(k => k.toLowerCase() === keyName.toLowerCase());
        return key ? obj[key] : undefined;
      };

      const title = context.caption || context.alt || getMetaVal(structMeta, 'title') || getMetaVal(structMeta, 'caption') || `${albumName} Frame #${index + 1}`;
      const description = context.description || getMetaVal(structMeta, 'description') || '';
      const location = context.location || getMetaVal(structMeta, 'location') || albumName;
      const date = context.date || getMetaVal(structMeta, 'date') || (resource.created_at ? resource.created_at.split('T')[0] : new Date().toISOString().split('T')[0]);

      // Extract tag filter
      const tag = resource.tags && resource.tags.length > 0 ? resource.tags[0] : 'General';

      // Parse camera EXIF details
      const metadata = resource.image_metadata || {};
      let exif = undefined;
      
      const cameraMake = metadata.Make || getMetaVal(structMeta, 'make') || getMetaVal(structMeta, 'camera_make') || '';
      const cameraModel = metadata.Model || getMetaVal(structMeta, 'model') || getMetaVal(structMeta, 'camera_model') || getMetaVal(structMeta, 'camera') || '';
      const lensModel = metadata.LensModel || metadata.Lens || getMetaVal(structMeta, 'lens') || getMetaVal(structMeta, 'lens_model') || 'Prime Lens';
      const shutter = metadata.ExposureTime || getMetaVal(structMeta, 'shutter') || getMetaVal(structMeta, 'shutter_speed') || getMetaVal(structMeta, 'exposure_time') || '1/125s';
      const aperture = (metadata.FNumber ? `f/${metadata.FNumber}` : undefined) || getMetaVal(structMeta, 'aperture') || getMetaVal(structMeta, 'f_number') || 'f/4';
      const iso = (metadata.ISO ? `ISO ${metadata.ISO}` : undefined) || getMetaVal(structMeta, 'iso') || getMetaVal(structMeta, 'iso_speed') || 'ISO 100';
      const focalLength = (metadata.FocalLength ? `${metadata.FocalLength}mm` : undefined) || getMetaVal(structMeta, 'focal_length') || '50mm';

      if (cameraModel || cameraMake) {
        exif = {
          camera: `${cameraMake} ${cameraModel}`.trim(),
          lens: lensModel,
          shutter,
          aperture,
          iso,
          focalLength
        };
      }

      const photoObject = {
        id: publicId.split('/').pop(),
        url: resource.secure_url,
        title,
        description,
        location,
        date,
        aspectRatio,
        tag,
        exif
      };

      // Group photos in the output nested object by year and album slug
      const yearKey = slugify(year) || 'general';
      const albumSlug = slugify(albumName) || 'general';

      if (!syncData[yearKey]) {
        syncData[yearKey] = {};
      }
      if (!syncData[yearKey][albumSlug]) {
        syncData[yearKey][albumSlug] = [];
        
        albumStats[`${yearKey}/${albumSlug}`] = {
          name: albumName,
          year: year || 'N/A',
          folder: folderPath,
          count: 0
        };
      }

      syncData[yearKey][albumSlug].push(photoObject);
      albumStats[`${yearKey}/${albumSlug}`].count++;
    });

    // Write the output file using nested Record type
    const fileContent = `// Auto-generated Cloudinary photo database. Do not edit manually.
import { Photo } from '../types';

export const cloudinaryPhotos: Record<string, Record<string, Photo[]>> = ${JSON.stringify(syncData, null, 2)};
`;

    const outputPath = path.join(__dirname, '../src/data/cloudinaryPhotos.ts');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, fileContent, 'utf-8');

    console.log('\n=======================================');
    console.log('SYNC COMPLETE - DISCOVERED ALBUMS:');
    console.log('=======================================');
    Object.keys(albumStats).forEach(id => {
      const stats = albumStats[id];
      console.log(`- ${stats.year} / ${stats.name}`);
      console.log(`  Folder:      "${stats.folder}"`);
      console.log(`  Category ID: "${id}"`);
      console.log(`  Sync Count:  ${stats.count} photos`);
      console.log('---------------------------------------');
    });

    console.log(`\nOutput file written to: src/data/cloudinaryPhotos.ts`);

  } catch (error) {
    console.error('Error executing portfolio sync:', error);
    process.exit(1);
  }
}

run();
