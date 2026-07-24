import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Maximize2, Sparkles, Camera, ArrowRight } from 'lucide-react';
import { bestPhotos, BestPhoto } from '../data/bestPhotos';
import { Photo } from '../types';
import { getResponsiveImageProps } from '../utils/cloudinary';

interface BestPhotosViewProps {
  onPhotoClick: (photo: Photo) => void;
  onSelectCategory?: (categoryId: string) => void;
}

export default function BestPhotosView({ onPhotoClick, onSelectCategory }: BestPhotosViewProps) {
  // Home page 4x4 grid displays the first 16 featured frames
  const gridPhotos = bestPhotos.slice(0, 16);
  const totalFrames = bestPhotos.length;

  return (
    <div id="best-photos-showcase" className="space-y-12 pb-16">
      
      {/* UPPER SECTION: CLEAN, ELEGANT WRITE-UP */}
      <section id="home-intro-section" className="text-center max-w-3xl mx-auto space-y-5 pt-4 sm:pt-8 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-[10px] font-sans font-bold uppercase tracking-widest border border-zinc-200">
          <Sparkles className="h-3 w-3 text-amber-500" />
          <span>Curated Photography Exhibition</span>
        </div>

        <h1 className="font-sans text-4xl sm:text-5xl font-black tracking-tight text-zinc-950 uppercase leading-none">
          Stills in Time
        </h1>

        <p className="font-sans text-xs tracking-widest text-zinc-500 font-bold uppercase">
          Photographic Works by Avik & Anwesha
        </p>

        <div className="w-12 h-0.5 bg-zinc-950 mx-auto opacity-80 my-3" />

        <p className="font-serif text-base sm:text-lg text-zinc-700 italic leading-relaxed">
          "We travel across India seeking moments suspended in light—from early monsoon mist drifting over the Western Ghats to quiet riverbank erosion along the Rupnarayan, spring blossoms of Mayurbhanj, and silent snow ridges of West Sikkim. Photography, for us, is an unhurried endeavor to preserve memories that will never be again."
        </p>
      </section>

      {/* LOWER SECTION: 4x4 GRID (16 FEATURED PHOTOS + DYNAMIC TOTAL COUNT) */}
      <section id="home-photo-grid-section" className="space-y-6">
        
        {/* Section Header Bar */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
          <div className="flex items-center gap-2">
            <Camera className="h-4 w-4 text-zinc-900" />
            <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-zinc-900">
              Signature Collection — {totalFrames} Curated Frames
            </h2>
          </div>
          <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            Click frame for Full Gallery View
          </span>
        </div>

        {/* 4x4 Column Grid Container (16 Frames) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {gridPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              onClick={() => onPhotoClick(photo)}
              className="group relative aspect-square rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200/90 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image element */}
              <img
                {...getResponsiveImageProps(
                  photo.url,
                  [400, 600, 800],
                  '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                )}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />

              {/* Hover Dark Overlay & Title Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-sans font-bold uppercase tracking-wider text-amber-300">
                    {photo.categoryTag}
                  </span>
                  <div className="p-1.5 rounded-full bg-black/50 border border-white/20 text-white">
                    <Maximize2 className="h-3 w-3 text-amber-400" />
                  </div>
                </div>

                {/* Bottom Title & Details */}
                <div className="space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-sans text-sm font-bold tracking-tight text-white line-clamp-1">
                    {photo.title}
                  </h3>
                  {photo.location && (
                    <p className="font-sans text-[11px] text-zinc-300 flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-rose-400 flex-shrink-0" />
                      <span className="truncate">{photo.location}</span>
                    </p>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note showing total frames info */}
        {totalFrames > 16 && (
          <div className="text-center pt-4">
            <button
              onClick={() => onPhotoClick(gridPhotos[0])}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-300 bg-zinc-50 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 font-sans text-xs font-bold uppercase tracking-wider text-zinc-700 transition-all shadow-sm"
            >
              <span>Explore All {totalFrames} Frames in Gallery View</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

      </section>

    </div>
  );
}
