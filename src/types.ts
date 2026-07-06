export interface ExifData {
  camera: string;
  lens: string;
  shutter: string;
  aperture: string;
  iso: string;
  focalLength: string;
}

export interface Photo {
  id: string;
  url: string;
  title: string;
  description?: string;
  location?: string;
  date?: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  tag?: string;
  exif?: ExifData;
  metadata?: Record<string, any>;
  context?: Record<string, any>;
}

export interface Category {
  id: string;
  title: string;
  type: 'travel' | 'milestone';
  coverUrl: string;
  description: string; // The rich short story describing the destination or milestone
  location: string;
  dateRange: string;
  state?: string; // Optional Indian state ID (e.g. 'kl', 'rj') for map link
  photos: Photo[];
}

