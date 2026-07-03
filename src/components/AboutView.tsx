import React from 'react';
import { Camera, Compass, Layers, ShieldCheck, Heart, Sparkles, BookOpen } from 'lucide-react';

export default function AboutView() {
  return (
    <div id="about-view-root" className="space-y-16 py-4 animate-fade-in">
      
      {/* Profile Header */}
      <section className="grid gap-8 md:grid-cols-12 items-center border-b border-zinc-100 pb-12">
        <div className="md:col-span-8 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-1.5">
              <Sparkles className="h-3 w-3" /> Behind The Lens
            </span>
            <h2 className="font-sans text-4xl font-light tracking-tight text-zinc-950 sm:text-5xl">
              Avik & Anwesha
            </h2>
            <p className="font-sans text-lg text-zinc-500 font-light italic">
              "Capturing the fleeting moments of stillness in time."
            </p>
          </div>
          
          <div className="space-y-4 font-sans text-sm text-zinc-650 leading-relaxed max-w-3xl">
            <p>
              Welcome to our photography portfolio. We are Avik and Anwesha, travel photographers based in India, dedicated to documenting the diverse landscapes, rich cultures, and unique state-wise narratives across the subcontinent. By day, we navigate the structured world of logic and algorithms as IT professionals. But when we step away from our screens, we seek a different kind of architecture—the fluid, organic designs of nature and the heartbeats of quiet streets.
            </p>
            <p>
              Our philosophy centers around simplicity, authenticity, and visual wonder. We believe that a camera is merely a tool of translation; ultimately, it is not the complexity of the gadget, but the patience of one's own eyes searching for beauty that is a must to capture a true moment in time. Every journey we take is guided by our two pairs of eyes, scanning the horizon, light, and hidden details, collaborating together to discover the perfect frames within nature. This website acts as a minimalist exhibition index of our shared travels, where each frame captures a story of place and time.
            </p>
          </div>
        </div>

        {/* Decorative Quote Panel */}
        <div className="md:col-span-4 border border-zinc-150 p-6 bg-zinc-50/50 space-y-4">
          <div className="flex items-center gap-2 border-b border-zinc-200 pb-2">
            <Compass className="h-4 w-4 text-zinc-800" />
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Focus Area</span>
          </div>
          <p className="font-sans text-xs text-zinc-600 leading-relaxed">
            Specializing in travel documentaries, landscape textures, environmental portraiture, and architectural geometry.
          </p>
          <div className="flex items-center gap-1 text-[9px] uppercase tracking-widest font-bold text-zinc-900">
            <span>India State Diaries</span>
            <span className="font-mono">→</span>
          </div>
        </div>
      </section>

      {/* Photography Gear Showcase */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-1.5">
            <Camera className="h-3 w-3" /> The Gadgets
          </span>
          <h3 className="font-sans text-2xl font-light tracking-tight text-zinc-950">
            My Camera Gear & Setup
          </h3>
          <p className="font-sans text-xs text-zinc-500 max-w-2xl leading-normal">
            The equipment I carry on my wanderlust journeys. Each piece is chosen for its specific rendering characteristics, reliability, and weight considerations when trekking.
          </p>
        </div>

        {/* Gear Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Column 1: Nikon Camera & Mobile */}
          <div className="border border-zinc-150 bg-white p-6 space-y-6">
            <div className="flex items-center gap-2 border-b border-zinc-200 pb-3">
              <Camera className="h-4 w-4 text-zinc-800" />
              <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-zinc-900">Nikon & Samsung Gear</h4>
            </div>
            
            <div className="space-y-6">
              {/* Animated camera & mobile preview container */}
              <div className="group relative overflow-hidden border border-zinc-150 bg-zinc-50/50 aspect-square transition-all duration-350 hover:bg-zinc-50 hover:border-zinc-250">
                <img
                  src="/camera_mobile.jpg"
                  alt="Nikon Z50 & Samsung S23 Ultra"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] group-hover:translate-y-[-4px]"
                  loading="lazy"
                />
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <span className="font-mono text-xs font-bold text-zinc-950">Nikon Z50</span>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                    Our primary mirrorless camera body. The compact DX-format design, excellent ergonomics, and 20.9 MP sensor deliver prime sharpness and rich tonal quality for travel documentaries.
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-zinc-100">
                  <span className="font-mono text-xs font-bold text-zinc-950">Samsung Galaxy S23 Ultra</span>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                    Our pocket-sized camera powerhouse. The 200MP sensor, versatile focal ranges, and advanced computational RAW processing allow us to frame and capture spontaneous moments on the move.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Lens Selection */}
          <div className="border border-zinc-150 bg-white p-6 space-y-6">
            <div className="flex items-center gap-2 border-b border-zinc-200 pb-3">
              <Layers className="h-4 w-4 text-zinc-800" />
              <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-zinc-900">Optics & Perspectives</h4>
            </div>
            
            <div className="space-y-6">
              {/* Animated lenses preview container */}
              <div className="group relative overflow-hidden border border-zinc-150 bg-zinc-50/50 aspect-square transition-all duration-350 hover:bg-zinc-50 hover:border-zinc-250">
                <img
                  src="/lenses.jpg"
                  alt="NIKKOR Z Lenses"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] group-hover:translate-y-[-4px]"
                  loading="lazy"
                />
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <span className="font-mono text-xs font-bold text-zinc-950">NIKKOR Z DX 16-50 mm f/3.5-6.3 VR</span>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                    Ultra-compact pancake zoom lens. Extremely portable with built-in vibration reduction, perfect for wide-angle landscape framing and casual street snapshots.
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-zinc-100">
                  <span className="font-mono text-xs font-bold text-zinc-950">NIKKOR Z DX 18-140mm f/3.5-6.3 VR</span>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                    All-in-one travel zoom. Covers a massive wide-to-telephoto range, allowing me to isolate distant details and landscape landmarks without changing lenses in dusty outdoor trails.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Travel Essentials */}
          <div className="border border-zinc-150 bg-white p-6 space-y-6">
            <div className="flex items-center gap-2 border-b border-zinc-200 pb-3">
              <ShieldCheck className="h-4 w-4 text-zinc-800" />
              <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-zinc-900">Travel Essentials</h4>
            </div>
            
            <div className="space-y-6">
              {/* Animated travel essentials preview container */}
              <div className="group relative overflow-hidden border border-zinc-150 bg-zinc-50/50 aspect-square transition-all duration-350 hover:bg-zinc-50 hover:border-zinc-250">
                <img
                  src="/travel.jpg"
                  alt="Travel Essentials & Philosophy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] group-hover:translate-y-[-4px]"
                  loading="lazy"
                />
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <span className="font-mono text-xs font-bold text-zinc-950">1. Love & Respect Nature</span>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                    Leave no trace behind. Treat every mountain, river, and forest with the deep reverence and care they deserve.
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-zinc-100">
                  <span className="font-mono text-xs font-bold text-zinc-950">2. Be a Responsible Traveller</span>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                    Respect local communities, traditions, and habitats. Support local livelihoods and minimize environmental impact.
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-zinc-100">
                  <span className="font-mono text-xs font-bold text-zinc-950">3. Embrace Good & Bad Experiences</span>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                    Welcome detours, weather changes, and unexpected delays with the same open spirit; the best visual stories hide in the unplanned moments.
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-zinc-100">
                  <span className="font-mono text-xs font-bold text-zinc-950">4. Amaze Like a Baby</span>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                    Retain a sense of pure wonder. Approach every new city, sunrise, and local custom with fresh, curious, and open eyes.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Note */}
      <div className="border-t border-zinc-100 pt-8 text-center space-y-2">
        <style>{`
          @keyframes heartbeat {
            0% { transform: scale(1); }
            14% { transform: scale(1.18); }
            28% { transform: scale(1); }
            42% { transform: scale(1.18); }
            70% { transform: scale(1); }
          }
          .animate-heartbeat {
            animation: heartbeat 1.3s infinite ease-in-out;
            transform-origin: center;
            display: inline-block;
          }
        `}</style>
        <p className="font-sans text-[9px] uppercase tracking-widest text-zinc-400 flex items-center justify-center gap-1.5">
          <span>Crafted with</span>
          <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-heartbeat" />
          <span>by Avik & Anwesha, coded side-by-side with Antigravity AI</span>
        </p>
      </div>

    </div>
  );
}
