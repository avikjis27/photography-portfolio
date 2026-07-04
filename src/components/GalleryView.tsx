import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, BookOpen, MapPin, Calendar, Compass, Sparkles, Filter, SlidersHorizontal, Eye } from 'lucide-react';
import { Category, Photo } from '../types';

interface GalleryViewProps {
  category: Category;
  onBack: () => void;
  onPhotoClick: (photo: Photo) => void;
}

export default function GalleryView({ category, onBack, onPhotoClick }: GalleryViewProps) {
  const [isStoryExpanded, setIsStoryExpanded] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'date-asc' | 'date-desc'>('default');

  // Compute available tag filter buttons
  const uniqueTags = useMemo(() => {
    const tags = new Set<string>();
    category.photos.forEach(p => {
      tags.add(p.tag || 'General');
    });
    return ['all', ...Array.from(tags)];
  }, [category]);

  // Compute filtered & sorted photos
  const processedPhotos = useMemo(() => {
    let result = [...category.photos];
    
    // Filter by tag
    if (selectedTag !== 'all') {
      result = result.filter(p => (p.tag || 'General') === selectedTag);
    }

    // Sort
    if (sortBy === 'date-asc') {
      result.sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    } else if (sortBy === 'date-desc') {
      result.sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    }

    return result;
  }, [category.photos, selectedTag, sortBy]);

  // Estimate reading time for the story
  const readingTime = useMemo(() => {
    const words = category.description.split(/\s+/).length;
    const minutes = Math.ceil(words / 200); // 200 words per minute average
    return `${minutes} min read`;
  }, [category.description]);

  // Determine layout columns classes dynamically to prevent empty columns and support masonry packing
  const gridClassName = useMemo(() => {
    const count = processedPhotos.length;
    if (count === 1) {
      return "columns-1 max-w-3xl mx-auto gap-6 w-full";
    }
    if (count === 2) {
      return "columns-1 sm:columns-2 gap-6 w-full";
    }
    if (count === 4) {
      return "columns-1 sm:columns-2 gap-6 w-full";
    }
    return "columns-1 sm:columns-2 md:columns-3 gap-6 w-full";
  }, [processedPhotos]);

  return (
    <div id={`gallery-view-${category.id}`} className="space-y-8 pb-16">
      
      {/* Back & Breadcrumb navigation */}
      <div className="flex items-center justify-between">
        <button
          id="gallery-back-button"
          onClick={onBack}
          className="group flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-zinc-400 uppercase transition-colors hover:text-zinc-900"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Chronicles</span>
        </button>

        <span className="font-sans text-[10px] uppercase tracking-widest font-bold text-zinc-400">
          Series: {category.title}
        </span>
      </div>

      {/* Collection Hero Header */}
      <div id="gallery-cover-hero" className="relative h-64 sm:h-96 w-full overflow-hidden bg-zinc-950 border border-zinc-200">
        <img
          src={category.coverUrl}
          alt={category.title}
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full object-cover opacity-50 filter saturate-50 brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        
        {/* Hero content overlays */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 space-y-4 text-white">
          <div>
            <span className={`inline-flex items-center gap-1.5 bg-white text-zinc-900 px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase border border-zinc-200 shadow-xs`}>
              {category.type === 'travel' ? <Compass className="h-3 w-3 text-zinc-500" /> : <Sparkles className="h-3 w-3 text-zinc-500" />}
              {category.type === 'travel' ? 'Travel Destination' : 'Milestone Chronicles'}
            </span>
          </div>

          <h2 className="font-sans text-3xl font-light tracking-tight sm:text-5xl uppercase">
            {category.title}
          </h2>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 font-sans text-[10px] uppercase tracking-widest font-bold text-zinc-300">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 shrink-0 text-zinc-400" />
              <span>{category.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 shrink-0 text-zinc-400" />
              <span>{category.dateRange}</span>
            </div>
            <div className="h-1.5 w-1.5 bg-zinc-400 hidden sm:block" />
            <div className="font-mono text-[9px] text-zinc-400">
              {category.photos.length} Captured Frames
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Story Section */}
      <div id="gallery-story-panel" className="border border-zinc-150 bg-zinc-50/50 p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-200/60 pb-3">
          <button
            id="read-story-button"
            onClick={() => setIsStoryExpanded(!isStoryExpanded)}
            className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-bold text-zinc-900 transition-opacity hover:opacity-85"
          >
            <BookOpen className="h-4 w-4 text-zinc-500" />
            <span>Read Collection Story</span>
          </button>
          
          <div className="flex items-center gap-3">
            <span className="font-sans text-[10px] uppercase tracking-widest text-zinc-400 font-bold">{readingTime}</span>
            <button
              onClick={() => setIsStoryExpanded(!isStoryExpanded)}
              className="px-4 py-1.5 text-[9px] uppercase tracking-widest font-bold bg-zinc-900 text-white transition-all hover:bg-white hover:text-zinc-900 border border-zinc-900"
            >
              {isStoryExpanded ? 'Collapse' : 'Expand Story'}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isStoryExpanded ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="font-serif text-zinc-800 leading-relaxed text-base sm:text-lg max-w-4xl mx-auto py-4 whitespace-pre-wrap selection:bg-zinc-100">
                {/* Visual Editorial Dropcap */}
                <span className="float-left mr-3 text-5xl sm:text-6xl font-bold font-serif text-zinc-900 leading-[0.8] pt-1">
                  {category.description.trim().charAt(0)}
                </span>
                {category.description.trim().slice(1)}
              </div>
            </motion.div>
          ) : (
            <p className="line-clamp-2 font-serif text-zinc-500 text-sm leading-relaxed max-w-4xl italic">
              "{category.description.trim()}"
            </p>
          )}
        </AnimatePresence>
      </div>

      {/* Gallery Filter Tools & Sidebar Layout */}
      <div id="gallery-controls-toolbar" className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-150 pb-4">
        
        {/* Tag Filter */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 text-zinc-400 mr-2 text-[10px] uppercase tracking-widest font-bold font-sans">
            <Filter className="h-3 w-3" />
            <span>Tags:</span>
          </div>
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 text-[10px] uppercase font-sans tracking-wider border transition-all ${
                selectedTag === tag
                  ? 'bg-zinc-900 text-white border-zinc-900'
                  : 'bg-zinc-50 text-zinc-500 border-zinc-200 hover:text-zinc-900 hover:bg-white'
              }`}
            >
              {tag === 'all' ? 'All Tags' : tag}
            </button>
          ))}
        </div>

        {/* Sorting Tools */}
        <div className="flex items-center gap-3 justify-end self-end md:self-auto">
          <div className="flex items-center gap-1.5 text-zinc-400 text-[10px] uppercase tracking-widest font-bold font-sans">
            <SlidersHorizontal className="h-3 w-3" />
            <span>Sort:</span>
          </div>
          <select
            id="gallery-sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="border border-zinc-200 bg-white px-3 py-1.5 font-sans text-[10px] uppercase tracking-widest font-bold text-zinc-700 outline-none hover:border-zinc-400 focus:border-zinc-900"
          >
            <option value="default">Default Order</option>
            <option value="date-desc">Newest First</option>
            <option value="date-asc">Oldest First</option>
          </select>
        </div>
      </div>

      {/* Dynamic Grid View */}
      <div 
        id="photos-masonry-container" 
        className={gridClassName}
      >
        {processedPhotos.map((photo, idx) => (
          <motion.div
            key={photo.id}
            id={`photo-frame-${photo.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(idx * 0.03, 0.4), duration: 0.4 }}
            onClick={() => onPhotoClick(photo)}
            className="group relative cursor-pointer break-inside-avoid mb-6 overflow-hidden border border-zinc-150 bg-zinc-50 transition-all duration-350 hover:border-zinc-400"
          >
            {/* Dynamic Sized Image */}
            <img
              src={photo.url}
              alt={photo.title}
              referrerPolicy="no-referrer"
              className="w-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.01]"
              loading="lazy"
            />

            {/* Subtle Gradient Cover on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Quick Hover Overlay Details */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-transform translate-y-3 duration-300 group-hover:opacity-100 group-hover:translate-y-0 space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="font-sans text-xs uppercase tracking-wider font-bold truncate pr-2">
                  {photo.title}
                </h4>
                <div className="flex items-center gap-1 border border-white/20 bg-black/40 px-2 py-0.5 font-sans text-[8px] uppercase tracking-widest font-bold">
                  <Eye className="h-2.5 w-2.5" />
                  <span>Inspect</span>
                </div>
              </div>
              
              {photo.description && (
                <p className="font-serif text-[10px] text-zinc-300 leading-normal line-clamp-2">
                  {photo.description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-1 border-t border-white/10 text-[9px] text-zinc-400 font-sans">
                <span className="bg-white/10 px-1.5 py-0.5 text-white uppercase tracking-wider font-bold">
                  {photo.tag || 'General'}
                </span>
                {photo.date && (
                  <span className="uppercase tracking-wider font-bold">
                    {photo.date}
                  </span>
                )}
                {photo.location && (
                  <span className="flex items-center gap-0.5 uppercase tracking-wider font-bold text-zinc-300">
                    · <MapPin className="h-2 w-2 shrink-0" />
                    <span>{photo.location}</span>
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {processedPhotos.length === 0 && (
        <div className="py-20 text-center border border-zinc-200 bg-zinc-50">
          <SlidersHorizontal className="mx-auto h-8 w-8 text-zinc-300" />
          <h4 className="mt-4 font-sans text-xs uppercase tracking-widest font-bold text-zinc-900">No photos match filter criteria</h4>
          <p className="mt-2 text-xs text-zinc-500 max-w-xs mx-auto">
            Try resetting your tag filter back to "All Tags" to see your complete photography collection.
          </p>
        </div>
      )}
    </div>
  );
}
