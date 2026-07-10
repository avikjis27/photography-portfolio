/**
 * Utility functions for parsing, optimizing, and creating responsive
 * image sources from Cloudinary URLs.
 */

export interface CloudinaryUrlParts {
  baseUrl: string; // e.g. "https://res.cloudinary.com/dqwd7rzmz/image/upload"
  transformations: string[]; // e.g. ["w_200", "h_200", "c_fill"]
  remainder: string; // e.g. "v1783541679/_DSC0043_zmq2jv.jpg"
}

export interface CloudinaryOptions {
  width?: number;
  height?: number;
  crop?: string;
  quality?: string;
  format?: string;
  aspectRatio?: string; // e.g. "4:3", "16:9", "1.33"
}

/**
 * Parses a Cloudinary URL to extract base URL, existing transformations, and remainder path.
 */
export function parseCloudinaryUrl(url: string): CloudinaryUrlParts | null {
  if (!url || typeof url !== 'string' || !url.includes('/image/upload/')) {
    return null;
  }
  
  const [baseUrlPart, rest] = url.split('/image/upload/');
  const baseUrl = `${baseUrlPart}/image/upload`;
  const segments = rest.split('/');
  
  if (segments.length === 0) {
    return null;
  }
  
  const firstSegment = segments[0];
  const isVersion = /^v\d+$/.test(firstSegment);
  const isFilename = firstSegment.includes('.');
  
  let transformations: string[] = [];
  let remainderIndex = 0;
  
  if (!isVersion && !isFilename) {
    transformations = firstSegment.split(',');
    remainderIndex = 1;
  }
  
  const remainder = segments.slice(remainderIndex).join('/');
  
  return {
    baseUrl,
    transformations,
    remainder
  };
}

/**
 * Generates an optimized Cloudinary URL based on options.
 */
export function getOptimizedCloudinaryUrl(url: string, options: CloudinaryOptions = {}): string {
  const parts = parseCloudinaryUrl(url);
  if (!parts) {
    return url;
  }
  
  // Create a map of existing transformations
  const txMap: Record<string, string> = {};
  parts.transformations.forEach(tx => {
    const underscoreIndex = tx.indexOf('_');
    if (underscoreIndex !== -1) {
      const key = tx.substring(0, underscoreIndex);
      const val = tx.substring(underscoreIndex + 1);
      txMap[key] = val;
    } else {
      txMap[tx] = '';
    }
  });
  
  // Set options in map and handle deletion of conflicting transformations
  if (options.width !== undefined) {
    txMap['w'] = String(options.width);
    if (options.height === undefined && options.aspectRatio === undefined) {
      delete txMap['h'];
      delete txMap['ar'];
    }
  }
  
  if (options.height !== undefined) {
    txMap['h'] = String(options.height);
    if (options.width === undefined && options.aspectRatio === undefined) {
      delete txMap['w'];
      delete txMap['ar'];
    }
  }
  
  if (options.aspectRatio !== undefined) {
    txMap['ar'] = options.aspectRatio;
    if (options.height === undefined) {
      delete txMap['h'];
    }
    if (options.width === undefined) {
      delete txMap['w'];
    }
  }
  
  if (options.crop !== undefined) {
    txMap['c'] = options.crop;
  } else if (options.width !== undefined || options.height !== undefined || options.aspectRatio !== undefined) {
    // If we specify dimensions or aspect ratio but no crop mode,
    // use 'fill' for cover-like images (if aspect ratio/height specified), otherwise 'scale'.
    if (options.aspectRatio !== undefined || (options.width !== undefined && options.height !== undefined)) {
      txMap['c'] = 'fill';
      txMap['g'] = 'auto'; // Gravity auto for smart cropping
    } else {
      txMap['c'] = 'scale';
      delete txMap['g']; // Scale doesn't need gravity
    }
  }
  
  // Always default to auto format and auto quality for performance
  if (options.format !== undefined) {
    txMap['f'] = options.format;
  } else if (!txMap['f']) {
    txMap['f'] = 'auto';
  }
  
  if (options.quality !== undefined) {
    txMap['q'] = options.quality;
  } else if (!txMap['q']) {
    txMap['q'] = 'auto';
  }
  
  // Construct the transformation string
  const txList: string[] = [];
  const order = ['w', 'h', 'ar', 'c', 'g', 'q', 'f'];
  order.forEach(key => {
    if (txMap[key] !== undefined) {
      if (txMap[key] !== '') {
        txList.push(`${key}_${txMap[key]}`);
      } else {
        txList.push(key);
      }
      delete txMap[key];
    }
  });
  
  // Append any other transformations
  Object.entries(txMap).forEach(([key, val]) => {
    if (val !== '') {
      txList.push(`${key}_${val}`);
    } else {
      txList.push(key);
    }
  });
  
  const txString = txList.join(',');
  return `${parts.baseUrl}/${txString}/${parts.remainder}`;
}

/**
 * Returns attributes (src, srcSet, sizes) for a responsive image.
 */
export function getResponsiveImageProps(
  url: string,
  widths: number[] = [400, 600, 800, 1000, 1200, 1600, 2000],
  sizes: string = '100vw',
  options: Omit<CloudinaryOptions, 'width'> = {}
) {
  if (!url || !url.includes('/image/upload/')) {
    return { src: url };
  }
  
  // Default fallback size for src attribute is 1000px width
  const src = getOptimizedCloudinaryUrl(url, { ...options, width: 1000 });
  
  const srcSet = widths
    .map(width => {
      const optimizedUrl = getOptimizedCloudinaryUrl(url, { ...options, width });
      return `${optimizedUrl} ${width}w`;
    })
    .join(', ');
    
  return {
    src,
    srcSet,
    sizes
  };
}
