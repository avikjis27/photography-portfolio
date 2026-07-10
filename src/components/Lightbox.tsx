import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Photo } from '../types';
import { getResponsiveImageProps } from '../utils/cloudinary';

interface LightboxProps {
  photo: Photo;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ photo, onClose, onNext, onPrev }: LightboxProps) {
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

  return (
    <div id="lightbox-overlay" className="fixed inset-0 z-50 flex flex-col md:flex-row bg-zinc-950/98 text-zinc-100 animate-fade-in select-none">
      
      {/* Left side: Image and navigation */}
      <div className="relative flex-1 flex flex-col justify-between h-[65vh] md:h-screen p-4 md:p-8">
        
        {/* Top Header Row with Close Button (Visible on mobile/left side) */}
        <div className="flex items-center justify-between w-full z-50 md:hidden">
          <span className="font-sans text-[10px] uppercase tracking-widest text-zinc-400 font-bold truncate max-w-[200px]">
            {photo.title}
          </span>
          <button
            id="lightbox-close-btn-mobile"
            onClick={onClose}
            className="border border-white/10 bg-black/40 hover:bg-white hover:text-zinc-950 p-2 transition-all rounded-full"
            aria-label="Close lightbox"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Main Image Stage */}
        <div className="relative flex-1 flex items-center justify-center">
          {/* Navigation arrow buttons */}
          <button
            id="lightbox-prev-btn"
            onClick={onPrev}
            className="absolute left-2 md:left-6 z-40 p-3 bg-black/40 backdrop-blur-md text-white border border-white/15 transition-all hover:bg-white hover:text-zinc-950 rounded-full"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Image Container */}
          <div className="relative overflow-hidden max-h-full max-w-full flex items-center justify-center p-2">
            <img
              {...getResponsiveImageProps(
                photo.url,
                [600, 800, 1200, 1600, 2000, 2400],
                '(max-width: 768px) 80vw, 75vw'
              )}
              alt={photo.title}
              referrerPolicy="no-referrer"
              onContextMenu={(e) => e.preventDefault()}
              className="max-h-[50vh] md:max-h-[85vh] max-w-[80vw] md:max-w-[70vw] lg:max-w-[75vw] object-contain transition-all duration-300"
            />
          </div>

          <button
            id="lightbox-next-btn"
            onClick={onNext}
            className="absolute right-2 md:right-6 z-40 p-3 bg-black/40 backdrop-blur-md text-white border border-white/15 transition-all hover:bg-white hover:text-zinc-950 rounded-full"
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Simple caption footer on mobile only */}
        <div className="text-center pt-2 md:hidden pb-2">
          {photo.description && (
            <p className="font-serif text-[11px] text-zinc-400 line-clamp-2 max-w-md mx-auto px-4 italic">
              {photo.description}
            </p>
          )}
        </div>
      </div>

      {/* Right side: Sidebar with details (Desktop & Styled sidebar) */}
      <div className="w-full md:w-80 lg:w-96 border-t md:border-t-0 md:border-l border-zinc-800 bg-zinc-950/60 backdrop-blur-md p-6 flex flex-col justify-between overflow-y-auto select-text">
        <div className="space-y-6">
          {/* Header Row with Close Button on desktop */}
          <div className="hidden md:flex items-center justify-between pb-4 border-b border-zinc-800">
            <span className="font-sans text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
              Inspect Frame
            </span>
            <button
              id="lightbox-close-btn"
              onClick={onClose}
              className="border border-white/10 bg-black/40 hover:bg-white hover:text-zinc-950 p-2 transition-all rounded-full"
              aria-label="Close lightbox"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Title and Metadata */}
          <div className="space-y-3">
            <h3 className="font-sans text-lg lg:text-xl font-bold tracking-tight text-white leading-snug">
              {photo.title}
            </h3>
            
            {/* Metadata Tags */}
            <div className="flex flex-wrap gap-2 text-[9px] font-sans font-bold uppercase tracking-wider text-zinc-400">
              <span className="bg-zinc-900 px-2 py-1 border border-zinc-800 text-zinc-300">
                {photo.tag || 'General'}
              </span>
              {photo.date && (
                <span className="bg-zinc-900 px-2 py-1 border border-zinc-800 text-zinc-300">
                  {photo.date}
                </span>
              )}
              {photo.location && (
                <span className="bg-zinc-900 px-2 py-1 border border-zinc-800 text-zinc-300">
                  {photo.location}
                </span>
              )}
              {(photo.context?.state || photo.metadata?.state) && (
                <span className="bg-emerald-950/40 text-emerald-300 border border-emerald-900/50 px-2 py-1">
                  State: {photo.context?.state || photo.metadata?.state}
                </span>
              )}
              {(photo.context?.year || photo.metadata?.year) && (
                <span className="bg-amber-950/40 text-amber-300 border border-amber-900/50 px-2 py-1">
                  Year: {photo.context?.year || photo.metadata?.year}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          {photo.description && (
            <div className="space-y-2 pt-4 border-t border-zinc-900">
              <h4 className="font-sans text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                Frame Context
              </h4>
              <p className="font-serif text-sm text-zinc-300 leading-relaxed italic">
                "{photo.description}"
              </p>
            </div>
          )}
        </div>

        {/* Footer copyright protection */}
        <div className="pt-6 border-t border-zinc-900 mt-6 md:mt-auto">
          <p className="font-sans text-[9px] tracking-wide text-zinc-500 leading-normal">
            © {new Date().getFullYear()} Avik & Anwesha. All rights reserved. 
            Copying, downloading, or reproducing this image for commercial or non-commercial purposes 
            is strictly prohibited without prior written permission. Contact <a href="mailto:avik.chakbty.photos@gmail.com" className="text-zinc-400 underline hover:text-white transition-colors">avik.chakbty.photos@gmail.com</a>.
          </p>
        </div>
      </div>

    </div>
  );
}
