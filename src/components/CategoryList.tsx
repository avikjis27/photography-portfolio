import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Image as ImageIcon, Sparkles, Compass, ChevronLeft, ChevronRight, Map as MapIcon } from 'lucide-react';
import { Category } from '../types';
import IndiaMap, { INDIA_STATES } from './IndiaMap';
import { stripMarkdown } from '../utils/markdown';
import { getResponsiveImageProps } from '../utils/cloudinary';

interface CategoryListProps {
  categories: Category[];
  onSelectCategory: (id: string) => void;
}

type FilterType = 'all' | 'travel' | 'milestone';

export default function CategoryList({ categories = [], onSelectCategory }: CategoryListProps) {
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedStateFilter, setSelectedStateFilter] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');

  const START_YEAR = 2022;
  const CURRENT_YEAR = new Date().getFullYear();

  const handlePrevYear = () => {
    if (selectedYear === 'all') return;
    if (selectedYear === START_YEAR) {
      setSelectedYear('all');
    } else {
      setSelectedYear(selectedYear - 1);
    }
  };

  const handleNextYear = () => {
    if (selectedYear === 'all') {
      setSelectedYear(START_YEAR);
    } else if (selectedYear < CURRENT_YEAR) {
      setSelectedYear(selectedYear + 1);
    }
  };

  const getSliderValues = () => {
    if (selectedYear === 'all') {
      return { left: '—', middle: 'All', right: '2022' };
    }
    
    const yearNum = selectedYear;
    const left = yearNum === START_YEAR ? 'All' : String(yearNum - 1);
    const middle = String(yearNum);
    const right = yearNum === CURRENT_YEAR ? '—' : String(yearNum + 1);
    
    return { left, middle, right };
  };
  
  const { middle: middleVal } = getSliderValues();

  const getCategoryYear = (cat: Category): number | null => {
    if (!cat) return null;
    const idStr = cat.id || '';
    const dateStr = cat.dateRange || '';

    const idMatch = idStr.match(/^(\d{4})/);
    if (idMatch) return parseInt(idMatch[1]);
    
    const dateMatch = dateStr.match(/(\d{4})/);
    if (dateMatch) return parseInt(dateMatch[1]);
    
    return null;
  };

  // Active Indian states map calculation with safe null/undefined checks
  const activeStateMap = useMemo(() => {
    const map = new Map<string, string>();
    if (!Array.isArray(categories)) return map;

    categories.forEach(cat => {
      if (!cat) return;

      const catState = (cat.state || '').toLowerCase();
      const catId = (cat.id || '').toLowerCase();
      const catTitle = (cat.title || '').toLowerCase();
      const catLocation = (cat.location || '').toLowerCase();

      let state = catState
        ? INDIA_STATES.find(s =>
            catState === s.id.toLowerCase() ||
            catState === s.name.toLowerCase()
          )
        : null;

      if (!state) {
        state = INDIA_STATES.find(s => {
          const stateId = s.id.toLowerCase();
          const stateName = s.name.toLowerCase();
          const stateSlug = stateName.replace(/\s+/g, '-');

          return (
            catId === stateId ||
            catId === stateSlug ||
            (catTitle && catTitle.includes(stateName)) ||
            (catLocation && catLocation.includes(stateName))
          );
        });
      }

      if (state) {
        map.set(state.id, cat.id);
      }
    });
    return map;
  }, [categories]);

  const activeStateIds = Array.from(activeStateMap.keys()) as string[];

  const handleStateClick = (stateId: string) => {
    if (activeStateIds.includes(stateId)) {
      if (selectedStateFilter === stateId) {
        setSelectedStateFilter(null);
      } else {
        setSelectedStateFilter(stateId);
      }
    }
  };

  const filteredCategories = useMemo(() => {
    if (!Array.isArray(categories)) return [];

    return categories.filter((cat) => {
      if (!cat) return false;
      if (filter !== 'all' && cat.type !== filter) return false;

      if (selectedStateFilter) {
        const catState = (cat.state || '').toLowerCase();
        const catId = (cat.id || '').toLowerCase();
        const catTitle = (cat.title || '').toLowerCase();
        const catLocation = (cat.location || '').toLowerCase();

        const state = INDIA_STATES.find(s => {
          const stateId = s.id.toLowerCase();
          const stateName = s.name.toLowerCase();
          const stateSlug = stateName.replace(/\s+/g, '-');

          return (
            catState === stateId ||
            catId === stateId ||
            catId === stateSlug ||
            (catTitle && catTitle.includes(stateName)) ||
            (catLocation && catLocation.includes(stateName))
          );
        });

        if (state?.id !== selectedStateFilter) return false;
      }

      if (selectedYear !== 'all') {
        const catYear = getCategoryYear(cat);
        if (catYear !== selectedYear) return false;
      }

      return true;
    });
  }, [categories, filter, selectedStateFilter, selectedYear]);

  const totalPhotos = useMemo(() => {
    if (!Array.isArray(categories)) return 0;
    return categories.reduce((sum, cat) => sum + ((cat && Array.isArray(cat.photos)) ? cat.photos.length : 0), 0);
  }, [categories]);

  return (
    <div id="india-chronicles-section" className="space-y-12 pb-16">
      
      {/* UPPER SECTION: CENTERED INTRO WRITE-UP (MATCHES HOME PAGE AESTHETIC) */}
      <section id="chronicles-intro-section" className="text-center max-w-3xl mx-auto space-y-5 pt-4 sm:pt-8 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-[10px] font-sans font-bold uppercase tracking-widest border border-zinc-200">
          <Compass className="h-3.5 w-3.5 text-rose-500" />
          <span>Regional Travelogues & Interactive Map</span>
        </div>

        <h1 className="font-sans text-4xl sm:text-5xl font-black tracking-tight text-zinc-950 uppercase leading-none">
          India Chronicles
        </h1>

        <p className="font-sans text-xs tracking-widest text-zinc-500 font-bold uppercase">
          Visual Records & Travel Journals across Indian States
        </p>

        <div className="w-12 h-0.5 bg-zinc-950 mx-auto opacity-80 my-3" />

        <p className="font-serif text-base sm:text-lg text-zinc-700 italic leading-relaxed">
          "A photographic journey through the tapestry of India—from the rainforests of Maharashtra and quiet coastal riverbanks of West Bengal to the spring hills of Odisha and high snow ridges of Sikkim. Click any series or interactive state to immerse yourself in its full travelogue."
        </p>
      </section>

      {/* LOWER SECTION: GRID & MAP EXPLORATION */}
      <section id="chronicles-main-content" className="space-y-8">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-200 pb-4 gap-3">
          <div className="flex items-center gap-2">
            <MapIcon className="h-4 w-4 text-zinc-900" />
            <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-zinc-900">
              Exploration Collections — {categories.length} Series ({totalPhotos} Frames)
            </h2>
          </div>

          <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            Click collection for Full Story Gallery
          </span>
        </div>

        {/* Filter Toolbar */}
        <div id="filter-controls" className="flex flex-wrap items-center justify-between gap-4 bg-zinc-50/80 p-3 rounded-2xl border border-zinc-200/80">
          
          <div className="flex flex-wrap items-center gap-2">
            {/* Collection Type Filter Pills */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-zinc-200">
              <button
                onClick={() => setFilter('all')}
                className={`px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all ${
                  filter === 'all'
                    ? 'bg-zinc-900 text-white shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                All Series
              </button>
              
              <button
                onClick={() => setFilter('travel')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all ${
                  filter === 'travel'
                    ? 'bg-zinc-900 text-white shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                <Compass className="h-3 w-3" />
                Travel
              </button>
              
              <button
                onClick={() => setFilter('milestone')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all ${
                  filter === 'milestone'
                    ? 'bg-zinc-900 text-white shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                <Sparkles className="h-3 w-3" />
                Milestones
              </button>
            </div>

            {/* Year Selector */}
            <div className="flex items-center gap-1 bg-white border border-zinc-200 px-2 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-zinc-700">
              <span className="text-zinc-400 pl-1">Year:</span>
              <button
                onClick={handlePrevYear}
                disabled={selectedYear === 'all'}
                className="p-1 text-zinc-400 hover:text-zinc-900 disabled:opacity-30 transition-colors"
                aria-label="Previous year"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <span className="font-mono text-zinc-900 font-bold px-2 py-0.5 bg-zinc-100 rounded text-[9.5px]">
                {middleVal}
              </span>
              <button
                onClick={handleNextYear}
                disabled={selectedYear === CURRENT_YEAR}
                className="p-1 text-zinc-400 hover:text-zinc-900 disabled:opacity-30 transition-colors"
                aria-label="Next year"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-zinc-400 px-2">
            Showing {filteredCategories.length} series
          </span>

        </div>

        {selectedStateFilter && (
          <div className="flex items-center justify-between border border-amber-200/80 p-3 bg-amber-50/50 rounded-xl text-amber-900">
            <span className="font-sans text-xs uppercase tracking-wider font-bold">
              Filtered by State: <strong>{INDIA_STATES.find(s => s.id === selectedStateFilter)?.name}</strong>
            </span>
            <button
              onClick={() => setSelectedStateFilter(null)}
              className="text-[10px] uppercase tracking-widest font-bold text-amber-900 hover:text-black border border-amber-300 px-3 py-1 bg-white rounded-full shadow-xs"
            >
              Clear State Filter ✕
            </button>
          </div>
        )}

        {/* Grid & Sticky Map Container */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* Left Grid Column: Collection Cards */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            <div id="categories-grid" className="grid gap-6 sm:grid-cols-2">
              {filteredCategories.map((cat, idx) => {
                const photoCount = Array.isArray(cat.photos) ? cat.photos.length : 0;
                const coverUrl = cat.coverUrl || '';
                const title = cat.title || 'Untitled Collection';
                const location = cat.location || 'India';
                const dateRange = cat.dateRange || '';
                const description = cat.description ? stripMarkdown(cat.description) : '';

                return (
                  <motion.div
                    key={cat.id || `cat-${idx}`}
                    id={`category-card-${cat.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.04 }}
                    onClick={() => onSelectCategory(cat.id)}
                    className="group relative cursor-pointer overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {/* Image Frame */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                      {coverUrl ? (
                        <img
                          {...getResponsiveImageProps(
                            coverUrl,
                            [400, 600, 800, 1000],
                            '(max-width: 640px) 100vw, 50vw',
                            { aspectRatio: '4:3' }
                          )}
                          alt={title}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-zinc-200 text-zinc-400">
                          <ImageIcon className="h-8 w-8" />
                        </div>
                      )}
                      
                      {/* Badges Overlay */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-md text-white border border-white/20 px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase rounded-full">
                          {cat.type === 'travel' ? <Compass className="h-3 w-3 text-amber-400" /> : <Sparkles className="h-3 w-3 text-amber-400" />}
                          {cat.type === 'travel' ? 'Travel' : 'Milestone'}
                        </span>
                      </div>

                      <div className="absolute right-3 bottom-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-md border border-white/20 px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase text-white rounded-full">
                        <ImageIcon className="h-3 w-3 text-emerald-400" />
                        <span>{photoCount} Frames</span>
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className="p-5 space-y-3">
                      <div className="space-y-1">
                        <h3 className="font-sans text-lg font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-zinc-600">
                          {title}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] uppercase tracking-widest text-zinc-400 font-sans font-bold">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-rose-500 shrink-0" />
                            <span className="truncate">{location}</span>
                          </div>
                          {dateRange && (
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3 text-amber-500 shrink-0" />
                              <span>{dateRange}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {description && (
                        <p className="line-clamp-2 font-serif text-xs text-zinc-600 italic leading-relaxed">
                          "{description}"
                        </p>
                      )}

                      <div className="pt-2 flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-zinc-900 border-t border-zinc-100">
                        <span>Enter Full Gallery & Story</span>
                        <span className="font-mono text-zinc-400 group-hover:text-zinc-900 transition-colors">→</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {filteredCategories.length === 0 && (
                <div className="col-span-full py-16 text-center border border-dashed border-zinc-200 bg-zinc-50 rounded-xl">
                  <ImageIcon className="mx-auto h-8 w-8 text-zinc-300" />
                  <h4 className="mt-4 font-sans text-sm font-bold uppercase tracking-widest text-zinc-800">
                    No matching collections found
                  </h4>
                  <p className="mt-2 text-xs text-zinc-500 max-w-sm mx-auto">
                    Try adjusting the state or year filter controls above.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Sticky Interactive India Map */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24 w-full space-y-4">
            <div className="border border-zinc-200/90 rounded-2xl p-6 bg-zinc-50/70 shadow-sm space-y-4">
              <div className="border-b border-zinc-200 pb-3">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold block">Interactive Map</span>
                <h3 className="font-sans text-base font-bold text-zinc-950 uppercase">State Chronicles Navigator</h3>
              </div>
              <p className="font-sans text-xs text-zinc-500 leading-normal">
                Tap any highlighted state on the map to filter travel journals by region.
              </p>
              
              <IndiaMap 
                activeStateIds={activeStateIds} 
                selectedStateId={selectedStateFilter} 
                onStateClick={handleStateClick} 
              />
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
