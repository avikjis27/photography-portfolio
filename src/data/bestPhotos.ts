import { Photo } from '../types';
import { parsedBestPhotos } from '../utils/contentLoader';

export interface BestPhoto extends Photo {
  categoryId?: string;
  categoryTag: 'Monsoon & Rivers' | 'Himalayan Vistas' | 'Spring & Flora' | 'Rural & Heritage';
  storySnippet?: string;
}

export const bestPhotos: BestPhoto[] = parsedBestPhotos;
