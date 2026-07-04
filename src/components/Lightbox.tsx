import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Cpu, Camera, Sliders } from 'lucide-react';
import { Photo } from '../types';

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

        <div className="relative group overflow-hidden max-h-[75vh] md:max-h-[90vh] max-w-full flex items-center justify-center">
          <img
            src={photo.url}
            alt={photo.title}
            referrerPolicy="no-referrer"
            onContextMenu={(e) => e.preventDefault()}
            className="max-h-[75vh] md:max-h-[90vh] max-w-full object-contain border border-zinc-800/80 transition-all duration-300 select-none"
          />

          {/* Translucent Copyright Overlay on Hover */}
          <div className="absolute bottom-0 left-0 right-0 bg-zinc-950/40 backdrop-blur-lg border-t border-zinc-800/40 p-4 translate-y-[80%] transition-transform duration-300 ease-out group-hover:translate-y-0 select-none pointer-events-auto">
            <p className="font-sans text-[10px] tracking-wide text-zinc-300 leading-relaxed max-w-lg mx-auto text-center">
              © {new Date().getFullYear()} Avik & Anwesha. All rights reserved. 
              Copying, downloading, or reproducing this image for commercial or non-commercial purposes 
              is strictly prohibited without prior written permission. Contact <a href="mailto:avik.chakbty.photos@gmail.com" className="text-white underline hover:text-zinc-200 transition-colors">avik.chakbty.photos@gmail.com</a>.
            </p>
          </div>
        </div>

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
