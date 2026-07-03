import React from 'react';
import { Camera, Settings, Compass, Layers } from 'lucide-react';

interface HeaderProps {
  currentView: 'portfolio' | 'about';
  setView: (view: 'portfolio' | 'about') => void;
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
          className="flex items-center gap-3 text-left transition-opacity hover:opacity-85"
        >
          <div className="flex h-9 w-9 items-center justify-center border border-zinc-900 text-zinc-900 font-mono text-sm font-bold tracking-tighter">
            ST
          </div>
          <div>
            <h1 className="font-sans text-base font-bold tracking-tighter text-zinc-900 uppercase">
              Stills in Time
            </h1>
            <p className="font-sans text-[9px] tracking-widest text-zinc-400 font-bold uppercase">
              Avik & Anwesha
            </p>
          </div>
        </button>

        {/* Navigation */}
        <nav id="main-navigation" className="flex items-center gap-6 sm:gap-8">
          <button
            id="nav-portfolio-button"
            onClick={onHomeClick}
            className={`flex items-center gap-1.5 border-b-2 py-1.5 text-[10px] uppercase tracking-widest font-bold transition-all ${
              currentView === 'portfolio'
                ? 'border-zinc-900 text-zinc-900'
                : 'border-transparent text-zinc-400 hover:text-zinc-900'
            }`}
          >
            <Compass className="h-3 w-3" />
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
            <Camera className="h-3 w-3" />
            <span>About & Gear</span>
          </button>
        </nav>

      </div>
    </header>
  );
}
