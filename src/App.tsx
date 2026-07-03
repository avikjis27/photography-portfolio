import React, { useState, useEffect } from 'react';
import { defaultCategories } from './data/defaultCategories';
import { Category, Photo } from './types';
import Header from './components/Header';
import CategoryList from './components/CategoryList';
import GalleryView from './components/GalleryView';
import Lightbox from './components/Lightbox';
import AboutView from './components/AboutView';

const LOCAL_STORAGE_CAT_KEY = 'aperture_ink_categories_v1';
const LOCAL_STORAGE_CLOUD_KEY = 'aperture_ink_cloudinary_v1';

export default function App() {
  // Load initial categories from local storage or default to curated preset
  const [categories, setCategories] = useState<Category[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_CAT_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved portfolio state, resetting.", e);
      }
    }
    return defaultCategories;
  });

  // View & selection states
  const [currentView, setView] = useState<'portfolio' | 'about'>('portfolio');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CAT_KEY, JSON.stringify(categories));
  }, [categories]);

  // Handle resetting to preset default stories & photos
  const handleResetToDefaults = () => {
    if (confirm("This will overwrite all custom categories, stories, and uploads with the factory-curated travel and milestone portfolio collections. Continue?")) {
      setCategories(defaultCategories);
      setSelectedCategoryId(null);
      setActivePhoto(null);
      setView('portfolio');
    }
  };

  // Find the selected category object
  const activeCategory = categories.find((c) => c.id === selectedCategoryId) || null;

  // Next and Prev handlers for Lightbox cycling
  const handleNextPhoto = () => {
    if (!activePhoto || !activeCategory) return;
    const currentIndex = activeCategory.photos.findIndex((p) => p.id === activePhoto.id);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % activeCategory.photos.length;
      setActivePhoto(activeCategory.photos[nextIndex]);
    }
  };

  const handlePrevPhoto = () => {
    if (!activePhoto || !activeCategory) return;
    const currentIndex = activeCategory.photos.findIndex((p) => p.id === activePhoto.id);
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + activeCategory.photos.length) % activeCategory.photos.length;
      setActivePhoto(activeCategory.photos[prevIndex]);
    }
  };

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-100 selection:text-zinc-950 font-sans antialiased flex flex-col">
      
      {/* Editorial Navigation Header */}
      <Header 
        currentView={currentView} 
        setView={setView} 
        onHomeClick={() => {
          setView('portfolio');
          setSelectedCategoryId(null);
        }}
      />

      {/* Main Exhibition Stage */}
      <main id="main-content-area" className="flex-1 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {currentView === 'portfolio' ? (
          activeCategory ? (
            <GalleryView
              category={activeCategory}
              onBack={() => setSelectedCategoryId(null)}
              onPhotoClick={(photo) => setActivePhoto(photo)}
            />
          ) : (
            <CategoryList
              categories={categories}
              onSelectCategory={(id) => setSelectedCategoryId(id)}
            />
          )
        ) : (
          <AboutView />
        )}
      </main>

      {/* Immersive Lightbox overlay */}
      {activePhoto && (
        <Lightbox
          photo={activePhoto}
          onClose={() => setActivePhoto(null)}
          onNext={handleNextPhoto}
          onPrev={handlePrevPhoto}
        />
      )}

      {/* Aesthetic exhibition footer */}
      <footer id="app-footer" className="border-t border-zinc-100 bg-white py-12 text-center text-[10px] font-sans text-zinc-400 tracking-widest uppercase">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-3">
          <p className="font-serif italic text-sm normal-case text-zinc-500">"A photograph has to speak of a moment that was, that will never be again, but lives on forever." — Raghu Rai</p>
          <div className="flex justify-center items-center gap-4 pt-1">
            <span>Stills in Time © 2026</span>
            <span className="text-zinc-200">|</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-950 transition-colors normal-case">Instagram</a>
            <span className="text-zinc-200">|</span>
            <a href="https://flickr.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-950 transition-colors normal-case">Flickr</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
