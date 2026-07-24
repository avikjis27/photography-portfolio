import React from 'react';
import { Camera, Compass, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentView: 'best' | 'portfolio' | 'about';
  setView: (view: 'best' | 'portfolio' | 'about') => void;
  onHomeClick: () => void;
}

export default function Header({ currentView, setView, onHomeClick }: HeaderProps) {
  return (
    <header id="app-header" className="sticky top-0 z-40 w-full border-b border-zinc-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo / Branding */}
        <button
          id="logo-button"
          onClick={onHomeClick}
          className="flex items-center gap-3 text-left transition-opacity hover:opacity-85 flex-shrink-0"
          aria-label="Stills in Time Home"
        >
          {/* Logo Frame Box */}
          <div className="flex h-9 w-9 items-center justify-center border border-zinc-900 text-zinc-900 font-mono text-sm font-bold tracking-tighter bg-white">
            ST
          </div>
          
          {/* Brand Name Text: Strictly hidden on mobile & small screens, visible only on medium desktop screens (md:block) */}
          <div className="hidden md:block">
            <h1 className="font-sans text-base font-bold tracking-tighter text-zinc-900 uppercase leading-none">
              Stills in Time
            </h1>
            <p className="font-sans text-[9px] tracking-widest text-zinc-400 font-bold uppercase mt-0.5">
              Avik & Anwesha
            </p>
          </div>
        </button>

        {/* Navigation */}
        <nav id="main-navigation" className="flex items-center gap-3 sm:gap-6 lg:gap-8">
          <button
            id="nav-best-button"
            onClick={() => setView('best')}
            className={`flex items-center gap-1.5 border-b-2 py-1.5 text-[10px] uppercase tracking-widest font-bold transition-all ${
              currentView === 'best'
                ? 'border-zinc-900 text-zinc-900'
                : 'border-transparent text-zinc-400 hover:text-zinc-900'
            }`}
          >
            <Sparkles className="h-3 w-3 text-amber-500 flex-shrink-0" />
            <span>Best Shots</span>
          </button>

          <button
            id="nav-portfolio-button"
            onClick={() => setView('portfolio')}
            className={`flex items-center gap-1.5 border-b-2 py-1.5 text-[10px] uppercase tracking-widest font-bold transition-all ${
              currentView === 'portfolio'
                ? 'border-zinc-900 text-zinc-900'
                : 'border-transparent text-zinc-400 hover:text-zinc-900'
            }`}
          >
            <Compass className="h-3 w-3 flex-shrink-0" />
            <span>India Chronicles</span>
          </button>

          <button
            id="nav-about-button"
            onClick={() => setView('about')}
            className={`flex items-center gap-1.5 border-b-2 py-1.5 text-[10px] uppercase tracking-widest font-bold transition-all ${
              currentView === 'about'
                ? 'border-zinc-900 text-zinc-900'
                : 'border-transparent text-zinc-400 hover:text-zinc-900'
            }`}
          >
            <Camera className="h-3 w-3 flex-shrink-0" />
            <span className="hidden min-[400px]:inline">About & Gear</span>
            <span className="inline min-[400px]:hidden">About</span>
          </button>
        </nav>

      </div>
    </header>
  );
}
