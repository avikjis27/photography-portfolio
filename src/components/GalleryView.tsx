import React, { useState, useMemo } from 'react';
import { ChevronLeft, BookOpen, MapPin, Calendar, Compass, Sparkles, Filter, SlidersHorizontal, Eye } from 'lucide-react';
import { Category, Photo } from '../types';
import { renderMarkdown, stripMarkdown } from '../utils/markdown';
import { getResponsiveImageProps } from '../utils/cloudinary';

interface GalleryViewProps {
  category: Category;
  onBack: () => void;
  onPhotoClick: (photo: Photo) => void;
}

export default function GalleryView({ category, onBack, onPhotoClick }: GalleryViewProps) {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'date-asc' | 'date-desc'>('default');

  // Compute available tag filter buttons
  const uniqueTags = useMemo(() => {
    const tags = new Set<string>();
    category.photos.forEach(p => {
      tags.add(p.tag || 'General');
    });
    return ['all', ...Array.from(tags)];
  }, [category]);

  // Compute available states and years in the photos
  const uniqueStates = useMemo(() => {
    const states = new Set<string>();
    category.photos.forEach(p => {
      const st = p.context?.state || p.metadata?.state;
      if (st) states.add(st);
    });
    return Array.from(states);
  }, [category.photos]);

  const uniqueYears = useMemo(() => {
    const years = new Set<string>();
    category.photos.forEach(p => {
      const yr = p.context?.year || p.metadata?.year;
      if (yr) years.add(String(yr));
    });
    return Array.from(years);
  }, [category.photos]);

  // Process filters and sorting
  const processedPhotos = useMemo(() => {
    let result = [...category.photos];

    // 1. Tag filter
    if (selectedTag !== 'all') {
      result = result.filter(p => (p.tag || 'General') === selectedTag);
    }

    // 2. State filter
    if (selectedState !== 'all') {
      result = result.filter(p => (p.context?.state || p.metadata?.state) === selectedState);
    }

    // 3. Year filter
    if (selectedYear !== 'all') {
      result = result.filter(p => String(p.context?.year || p.metadata?.year) === selectedYear);
    }

    // 4. Sort
    if (sortBy === 'date-asc') {
      result.sort((a, b) => {
        if (!a.date) return -1;
        if (!b.date) return 1;
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
  }, [category.photos, selectedTag, selectedState, selectedYear, sortBy]);

  // Estimate reading time for the story
  const readingTime = useMemo(() => {
    const words = category.description.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  }, [category.description]);

  // Determine layout columns classes dynamically for masonry grid
  const gridClassName = useMemo(() => {
    const count = processedPhotos.length;
    if (count === 1) return "columns-1 max-w-2xl gap-6 w-full";
    return "columns-1 sm:columns-2 gap-6 w-full";
  }, [processedPhotos]);

  return (
    <div id={`gallery-view-${category.id}`} className="space-y-8 pb-16">
      
      {/* Back & Breadcrumb navigation */}
      <div className="flex items-center justify-between border-b border-zinc-150 pb-4">
        <button
          id="gallery-back-button"
          onClick={onBack}
          className="group flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-zinc-400 uppercase transition-colors hover:text-zinc-900"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Chronicles</span>
        </button>

        <span className="font-sans text-[10px] tracking-widest font-bold text-zinc-400">
          <span className="uppercase">Series:</span> <span className="font-normal">{category.title}</span>
        </span>
      </div>

      {/* Split Layout */}
      <div className="grid gap-8 lg:grid-cols-12 items-start">
        
        {/* Left Side: Photo Grid & Filters */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">
          
          {/* Gallery Filter Tools */}
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

            {/* Filtering & Sorting Tools */}
            <div className="flex flex-wrap items-center gap-4 justify-end self-end md:self-auto">
              {uniqueStates.length > 0 && (
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-1 text-zinc-400 text-[10px] uppercase tracking-widest font-bold font-sans">
                    <span>State:</span>
                  </div>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="border border-zinc-200 bg-white px-2.5 py-1.5 font-sans text-[10px] uppercase tracking-widest font-bold text-zinc-700 outline-none hover:border-zinc-400 focus:border-zinc-900"
                  >
                    <option value="all">All States</option>
                    {uniqueStates.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
              )}

              {uniqueYears.length > 0 && (
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-1 text-zinc-400 text-[10px] uppercase tracking-widest font-bold font-sans">
                    <span>Year:</span>
                  </div>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="border border-zinc-200 bg-white px-2.5 py-1.5 font-sans text-[10px] uppercase tracking-widest font-bold text-zinc-700 outline-none hover:border-zinc-400 focus:border-zinc-900"
                  >
                    <option value="all">All Years</option>
                    {uniqueYears.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              )}

              <div className="flex items-center gap-1.5">
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
          </div>

          {/* Dynamic Grid View */}
          <div 
            id="photos-masonry-container" 
            className={gridClassName}
          >
            {processedPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                id={`photo-frame-${photo.id}`}
                onClick={() => onPhotoClick(photo)}
                className="group relative cursor-pointer break-inside-avoid mb-6 overflow-hidden border border-zinc-150 bg-zinc-50 transition-all duration-350 hover:border-zinc-400"
              >
                <img
                  {...getResponsiveImageProps(
                    photo.url,
                    [400, 600, 800, 1000, 1200],
                    '(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(50vw - 24px), 400px'
                  )}
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
                    {(photo.context?.state || photo.metadata?.state) && (
                      <span className="bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 px-1.5 py-0.5 uppercase tracking-widest font-bold font-sans">
                        State: {photo.context?.state || photo.metadata?.state}
                      </span>
                    )}
                    {(photo.context?.year || photo.metadata?.year) && (
                      <span className="bg-amber-500/20 text-amber-200 border border-amber-500/30 px-1.5 py-0.5 uppercase tracking-widest font-bold font-sans">
                        Year: {photo.context?.year || photo.metadata?.year}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {processedPhotos.length === 0 && (
            <div className="py-20 text-center border border-zinc-200 bg-zinc-50">
              <SlidersHorizontal className="mx-auto h-8 w-8 text-zinc-300" />
              <h4 className="mt-4 font-sans text-xs uppercase tracking-widest font-bold text-zinc-900">No photos match filter criteria</h4>
              <p className="mt-2 text-xs text-zinc-500 max-w-xs mx-auto">
                Try resetting your filters to see your complete photography collection.
              </p>
            </div>
          )}
        </div>

        {/* Right Side: Title, Cover & Description Story (Sticky) */}
        <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24 space-y-6">
          
          {/* Mini Cover Hero */}
          <div id="gallery-cover-hero" className="relative h-48 sm:h-64 lg:h-48 xl:h-56 w-full overflow-hidden bg-zinc-950 border border-zinc-200">
            <img
              {...getResponsiveImageProps(
                category.coverUrl,
                [400, 600, 800, 1000, 1200, 1600],
                '(max-width: 1024px) calc(100vw - 32px), 420px',
                { aspectRatio: '16:9' }
              )}
              alt={category.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover opacity-60 filter saturate-50 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className={`inline-flex items-center gap-1.5 bg-white text-zinc-900 px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase border border-zinc-200 shadow-xs`}>
                {category.type === 'travel' ? <Compass className="h-3 w-3 text-zinc-500" /> : <Sparkles className="h-3 w-3 text-zinc-500" />}
                {category.type === 'travel' ? 'Travel' : 'Milestone'}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="font-mono text-[9px] text-zinc-400">
                {category.photos.length} Captured Frames
              </div>
            </div>
          </div>

          {/* Series Meta Info & Title */}
          <div className="border border-zinc-150 bg-white p-6 space-y-4">
            <div className="space-y-2">
              <h2 className="font-sans text-xl sm:text-2xl font-light tracking-tight text-zinc-900">
                {category.title}
              </h2>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-[10px] uppercase tracking-widest font-bold text-zinc-400">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
                  <span>{category.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
                  <span>{category.dateRange}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Story Section */}
          <div id="gallery-story-panel" className="border border-zinc-150 bg-zinc-50/50 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-200/60 pb-3">
              <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-bold text-zinc-900">
                <BookOpen className="h-4 w-4 text-zinc-500" />
                <span>Collection Story</span>
              </div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-zinc-400 font-bold">{readingTime}</span>
            </div>

            <div className="font-serif text-zinc-800 leading-relaxed text-sm sm:text-base selection:bg-zinc-100 space-y-4">
              {renderMarkdown(category.description)}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
