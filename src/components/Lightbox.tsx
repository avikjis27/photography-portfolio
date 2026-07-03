import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Cpu, Camera, Eye, Copy, Check, Sliders } from 'lucide-react';
import { Photo } from '../types';

interface LightboxProps {
  photo: Photo;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ photo, onClose, onNext, onPrev }: LightboxProps) {
  const [copied, setCopied] = React.useState(false);

  // Bind key events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Copy URL with feedback
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(photo.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Analyze if URL is Cloudinary or Unsplash
  const isCloudinary = photo.url.includes('cloudinary.com');
  const isUnsplash = photo.url.includes('unsplash.com');

  // Generate an optimized delivery URL as an educational guide
  const optimizedUrl = (() => {
    if (isCloudinary) {
      // Inject f_auto,q_auto for Cloudinary high-speed delivery
      const splitUrl = photo.url.split('/upload/');
      if (splitUrl.length === 2) {
        return `${splitUrl[0]}/upload/f_auto,q_auto,w_1800/${splitUrl[1]}`;
      }
    } else if (isUnsplash) {
      // Ensure high quality and auto formatting for Unsplash
      return `${photo.url.split('?')[0]}?q=85&w=1800&auto=format&fit=crop`;
    }
    return photo.url;
  })();

  return (
    <div id="lightbox-overlay" className="fixed inset-0 z-50 flex flex-col md:flex-row bg-zinc-950/98 text-zinc-100 animate-fade-in">
      
      {/* Absolute close button on mobile */}
      <button
        id="lightbox-close-top"
        onClick={onClose}
        className="absolute top-4 right-4 z-50 border border-zinc-800 bg-zinc-900/90 p-2.5 text-zinc-300 hover:text-white backdrop-blur-xs md:hidden"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Main Image Stage (Left/Center) */}
      <div className="relative flex flex-1 items-center justify-center p-4 md:p-8 select-none bg-zinc-950">
        
        {/* Navigation arrow buttons */}
        <button
          id="lightbox-prev-btn"
          onClick={onPrev}
          className="absolute left-4 z-40 border border-zinc-800 bg-zinc-900/90 p-3.5 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <img
          src={photo.url}
          alt={photo.title}
          referrerPolicy="no-referrer"
          className="max-h-[75vh] md:max-h-[90vh] max-w-full object-contain border border-zinc-800/80 transition-all duration-300"
        />

        <button
          id="lightbox-next-btn"
          onClick={onNext}
          className="absolute right-4 z-40 border border-zinc-800 bg-zinc-900/90 p-3.5 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Floating location tag */}
        {photo.location && (
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 border border-zinc-850 bg-zinc-950 px-3 py-1.5 text-[9px] uppercase tracking-widest font-bold text-zinc-200">
            <MapPin className="h-3.5 w-3.5 text-zinc-400" />
            <span>{photo.location}</span>
          </div>
        )}
      </div>

      {/* Sidebar Camera Control Console (Right Side) */}
      <aside id="lightbox-sidebar" className="w-full md:w-[400px] bg-zinc-900 border-t md:border-t-0 md:border-l border-zinc-800/80 p-6 flex flex-col justify-between overflow-y-auto max-h-[40vh] md:max-h-screen">
        
        <div className="space-y-6">
          {/* Header & Title */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <span className="font-sans text-[9px] uppercase tracking-widest text-zinc-500 font-bold">
                Active Frame Analysis
              </span>
              <h3 className="font-sans text-xl font-light tracking-tight text-white leading-snug uppercase">
                {photo.title}
              </h3>
              {photo.date && (
                <div className="flex items-center gap-1 font-sans text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Captured: {photo.date}</span>
                </div>
              )}
            </div>
            
            {/* Desktop close button */}
            <button
              id="lightbox-close-desktop"
              onClick={onClose}
              className="hidden md:flex border border-zinc-800 bg-zinc-950 p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Description Story Snippet */}
          {photo.description && (
            <div className="border-l border-zinc-700 pl-4 py-1">
              <p className="font-serif italic text-sm text-zinc-300 leading-relaxed">
                "{photo.description}"
              </p>
            </div>
          )}

          {/* Photo Tag Card */}
          <div className="space-y-3 border border-zinc-800/50 p-4 bg-zinc-950/40">
            <div className="flex items-center justify-between border-b border-zinc-800/50 pb-2">
              <span className="flex items-center gap-1.5 font-sans text-[10px] tracking-wider text-zinc-400 uppercase font-bold">
                <Sliders className="h-3.5 w-3.5 text-zinc-500" />
                Classification
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-sm bg-zinc-800 px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider text-zinc-200 uppercase border border-zinc-700">
                {photo.tag || 'General'}
              </span>
            </div>
          </div>

          {/* Cloudinary Integration Guide */}
          <div className="border border-zinc-800 bg-zinc-950/30 p-4 space-y-3">
            <h4 className="font-sans text-[10px] tracking-widest uppercase text-zinc-400 font-bold flex items-center gap-1.5">
              <Eye className="h-3.5 w-3.5 text-zinc-400" />
              Delivery &amp; CDN Optimization
            </h4>

            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              {isCloudinary 
                ? "This file is served via Cloudinary. Real-time automatic transformation is active to deliver webp formatting and customized dimensions instantly." 
                : "This image is served via high-speed CDN. Below is the active frame delivery URL."}
            </p>

            {/* URL Display Card */}
            <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 p-2">
              <input
                type="text"
                readOnly
                value={optimizedUrl}
                className="flex-1 bg-transparent font-mono text-[10px] text-zinc-400 outline-none select-all truncate"
              />
              <button
                id="copy-url-btn"
                onClick={handleCopyUrl}
                className="p-1 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                title="Copy delivery link"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>

            {/* Transformations description for Cloudinary */}
            {isCloudinary && (
              <div className="text-[10px] font-mono text-zinc-500 leading-tight space-y-1">
                <span className="text-zinc-400">Transformations:</span>
                <div>• <code className="text-zinc-450">f_auto</code>: Auto WebP/AVIF format</div>
                <div>• <code className="text-zinc-450">q_auto</code>: Perceptual compression tuning</div>
                <div>• <code className="text-zinc-450">w_1800</code>: Smart high-res desktop scaling</div>
              </div>
            )}
          </div>

        </div>

        {/* Footer info inside sidebar */}
        <div className="pt-6 border-t border-zinc-800 mt-6 flex justify-between items-center text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
          <span>Stills in Time Portfolio</span>
          <span>SYSTEM VER. 1.1</span>
        </div>

      </aside>

    </div>
  );
}
