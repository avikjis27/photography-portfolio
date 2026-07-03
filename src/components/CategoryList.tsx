import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Image as ImageIcon, Sparkles, Compass } from 'lucide-react';
import { Category } from '../types';
import IndiaMap, { INDIA_STATES } from './IndiaMap';

interface CategoryListProps {
  categories: Category[];
  onSelectCategory: (id: string) => void;
}

type FilterType = 'all' | 'travel' | 'milestone';

export default function CategoryList({ categories, onSelectCategory }: CategoryListProps) {
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedStateFilter, setSelectedStateFilter] = useState<string | null>(null);

  // Find which Indian states have active galleries
  const activeStateMap = useMemo(() => {
    const map = new Map<string, string>(); // stateId -> categoryId
    categories.forEach(cat => {
      // Prioritize explicit state matching
      let state = cat.state
        ? INDIA_STATES.find(s =>
            cat.state!.toLowerCase() === s.id.toLowerCase() ||
            cat.state!.toLowerCase() === s.name.toLowerCase()
          )
        : null;

      // Fallback to fuzzy text search
      if (!state) {
        state = INDIA_STATES.find(s =>
          cat.id.toLowerCase() === s.id.toLowerCase() ||
          cat.id.toLowerCase() === s.name.toLowerCase().replace(/\s+/g, '-') ||
          cat.title.toLowerCase().includes(s.name.toLowerCase()) ||
          cat.location.toLowerCase().includes(s.name.toLowerCase())
        );
      }

      if (state) {
        map.set(state.id, cat.id);
      }
    });
    return map;
  }, [categories]);

  const activeStateIds = Array.from(activeStateMap.keys()) as string[];

  const handleStateClick = (stateId: string, stateName: string) => {
    if (activeStateIds.includes(stateId)) {
      if (selectedStateFilter === stateId) {
        setSelectedStateFilter(null);
      } else {
        setSelectedStateFilter(stateId);
      }
    } else {
      alert(`No entries captured in ${stateName} yet. Head over to the Creator Desk to add a collection for this state!`);
    }
  };

  const filteredCategories = categories.filter((cat) => {
    // Check main tab type filter
    if (filter !== 'all' && cat.type !== filter) return false;

    // Check map state filter
    if (selectedStateFilter) {
      const state = INDIA_STATES.find(s => 
        cat.state?.toLowerCase() === s.id.toLowerCase() ||
        cat.id.toLowerCase() === s.id.toLowerCase() ||
        cat.id.toLowerCase() === s.name.toLowerCase().replace(/\s+/g, '-') ||
        cat.title.toLowerCase().includes(s.name.toLowerCase()) ||
        cat.location.toLowerCase().includes(s.name.toLowerCase())
      );
      return state?.id === selectedStateFilter;
    }

    return true;
  });

  const totalPhotos = categories.reduce((sum, cat) => sum + cat.photos.length, 0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  };

  return (
    <div id="category-section" className="space-y-8">
      
      {/* Banner / Intro */}
      <div id="portfolio-hero" className="border-b border-zinc-100 pb-8 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-2xl space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">India Series</span>
            <h2 className="font-sans text-3xl font-light tracking-tight text-zinc-900 sm:text-4xl">
              Visual Chronicles of India
            </h2>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed">
              A photographic journey through the tapestry of a land where unity in diversity forms the fundamental baseline of existence. These frames capture how closely our daily lives are intertwined with the rhythms of nature. Traveling through India reveals this sacred bond—a raw landscape and quiet sanctuary that has inspired legendary philosophers, poets, and thinkers for millennia. Click any collection to immerse yourself in its narrative and full-screen gallery.
            </p>
          </div>
          
          {/* Quick Stats */}
          <div id="exhibition-stats" className="flex items-center justify-center sm:justify-start gap-6 border-l-0 sm:border-l border-zinc-200 pl-0 sm:pl-6 text-zinc-500">
            <div className="text-center sm:text-left">
              <span className="block font-sans text-xl font-light text-zinc-900">{categories.length}</span>
              <span className="font-sans text-[9px] tracking-widest text-zinc-400 uppercase font-bold">Series</span>
            </div>
            <div className="text-center sm:text-left">
              <span className="block font-sans text-xl font-light text-zinc-900">{totalPhotos}</span>
              <span className="font-sans text-[9px] tracking-widest text-zinc-400 uppercase font-bold">Frames</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Layout */}
      <div className="grid gap-12 lg:grid-cols-12 items-start">
        
        {/* Left Side: Categories Index */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-8">
          
          {/* Filter Tabs */}
          <div id="filter-controls" className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-1 border border-zinc-200 p-1 bg-zinc-50">
              <button
                id="filter-all-btn"
                onClick={() => setFilter('all')}
                className={`px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold transition-all ${
                  filter === 'all'
                    ? 'bg-zinc-900 text-white'
                    : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                All Collections
              </button>
              
              <button
                id="filter-travel-btn"
                onClick={() => setFilter('travel')}
                className={`flex items-center gap-1.5 px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold transition-all ${
                  filter === 'travel'
                    ? 'bg-zinc-900 text-white'
                    : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                <Compass className="h-3 w-3" />
                Travel
              </button>
              
              <button
                id="filter-milestone-btn"
                onClick={() => setFilter('milestone')}
                className={`flex items-center gap-1.5 px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold transition-all ${
                  filter === 'milestone'
                    ? 'bg-zinc-900 text-white'
                    : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                <Sparkles className="h-3 w-3" />
                Milestones
              </button>
            </div>

            <span className="font-sans text-[10px] uppercase tracking-wider text-zinc-400">
              Showing {filteredCategories.length} collections
            </span>
          </div>

          {selectedStateFilter && (
            <div className="flex items-center justify-between border border-zinc-200 p-3 bg-zinc-50">
              <span className="font-sans text-[10px] uppercase tracking-wider text-zinc-650">
                Filtered by State: <strong className="text-zinc-900">{INDIA_STATES.find(s => s.id === selectedStateFilter)?.name}</strong>
              </span>
              <button
                onClick={() => setSelectedStateFilter(null)}
                className="text-[9px] uppercase tracking-widest font-bold text-zinc-500 hover:text-zinc-950 transition-colors border border-zinc-300 px-2 py-1 bg-white hover:border-zinc-500"
              >
                Clear Filter ✕
              </button>
            </div>
          )}

          {/* Categories Grid */}
          <motion.div
            id="categories-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid gap-8 sm:grid-cols-2"
          >
            {filteredCategories.map((cat) => (
              <motion.div
                key={cat.id}
                id={`category-card-${cat.id}`}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                onClick={() => onSelectCategory(cat.id)}
                className="group relative cursor-pointer overflow-hidden border border-zinc-150 bg-white transition-all duration-350 hover:border-zinc-400"
              >
                {/* Aspect Ratio Box */}
                <div className="relative aspect-4/3 overflow-hidden bg-zinc-50">
                  <img
                    src={cat.coverUrl}
                    alt={cat.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 bg-white/95 text-zinc-800 border border-zinc-200 px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase">
                      {cat.type === 'travel' ? <Compass className="h-2.5 w-2.5 text-zinc-500" /> : <Sparkles className="h-2.5 w-2.5 text-zinc-500" />}
                      {cat.type === 'travel' ? 'Travel' : 'Milestone'}
                    </span>
                  </div>

                  {/* Photo Count Tag */}
                  <div className="absolute right-4 bottom-4 flex items-center gap-1.5 bg-zinc-950/90 border border-zinc-800/50 px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase text-white">
                    <ImageIcon className="h-3 w-3" />
                    <span>{cat.photos.length} Frames</span>
                  </div>
                </div>

                {/* Info Footer */}
                <div className="p-5 space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-sans text-xl font-light tracking-tight text-zinc-900 transition-colors group-hover:text-zinc-600">
                      {cat.title}
                    </h3>
                    
                    {/* Meta details */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] uppercase tracking-widest text-zinc-400 font-sans font-bold">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 shrink-0" />
                        <span className="truncate max-w-[140px] sm:max-w-none">{cat.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 shrink-0" />
                        <span>{cat.dateRange}</span>
                      </div>
                    </div>
                  </div>

                  {/* Truncated description snippet */}
                  <p className="line-clamp-2 font-sans text-xs text-zinc-500 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Dynamic hover reveal indicator */}
                  <div className="pt-2 flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-zinc-900 transition-all group-hover:translate-x-1">
                    <span>Enter Collection</span>
                    <span className="font-mono">→</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {filteredCategories.length === 0 && (
              <div className="col-span-full py-16 text-center border border-dashed border-zinc-200 bg-zinc-50">
                <ImageIcon className="mx-auto h-8 w-8 text-zinc-300" />
                <h4 className="mt-4 font-sans text-sm font-bold uppercase tracking-widest text-zinc-800">No collections created yet</h4>
                <p className="mt-2 text-xs text-zinc-500 max-w-sm mx-auto">
                  Head over to the Creator Desk to create your first travel destination or milestone portfolio series.
                </p>
              </div>
            )}
          </motion.div>

        </div>

        {/* Right Side: Sticky Map Exploration */}
        <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-8 w-full space-y-4">
          <div className="border border-zinc-150 p-6 bg-zinc-50/50 space-y-4">
            <div className="border-b border-zinc-200 pb-2">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Interactive Navigator</span>
              <h3 className="font-sans text-lg font-light text-zinc-950">Exploration Map of India</h3>
            </div>
            <p className="font-sans text-xs text-zinc-500 leading-normal">
              Click on highlighted states to jump straight into their corresponding travel chronicles.
            </p>
            
            <IndiaMap 
              activeStateIds={activeStateIds} 
              selectedStateId={selectedStateFilter} 
              onStateClick={handleStateClick} 
            />
          </div>
        </div>

      </div>
    </div>
  );
}
