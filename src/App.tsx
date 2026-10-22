import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { TimelineSection1 } from './components/TimelineSection1';
import { TimelineSection2 } from './components/TimelineSection2';
import { Section3ConnectingBores } from './components/Section3ConnectingBores';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { Interactive3DViewer } from './components/Interactive3DViewer';
import { GalleryImage } from './types';
import { X, Sparkles } from 'lucide-react';

export default function App() {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [isFullscreen3DOpen, setIsFullscreen3DOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#f0fdf4] text-[#0f291e] font-sans selection:bg-amber-400 selection:text-emerald-950">
      {/* Main Content Sections */}
      <main className="relative">
        {/* 1. Hero Section */}
        <HeroSection onOpenFullscreen3D={() => setIsFullscreen3DOpen(true)} />

        {/* 2. Timeline Phase 1: From Water Coconut Leaf Idea to Symbol */}
        <TimelineSection1 onOpenImageModal={(img) => setLightboxImage(img)} />

        {/* 3. Timeline Phase 2: Journey Crossing Waves Connecting Both Banks */}
        <TimelineSection2 onOpenImageModal={(img) => setLightboxImage(img)} />

        {/* 4. Section 3: Bridge Connecting Joyful Shores */}
        <Section3ConnectingBores onOpenImageModal={(img) => setLightboxImage(img)} />
      </main>

      {/* Fullscreen Image Lightbox Modal */}
      <ImageLightboxModal
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      {/* Fullscreen 3D Studio Modal */}
      {isFullscreen3DOpen && (
        <div className="fixed inset-0 z-50 bg-emerald-950/95 backdrop-blur-2xl flex flex-col p-4 sm:p-6 animate-fadeIn text-slate-100">
          <div className="flex items-center justify-between pb-4 border-b border-emerald-900">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="font-mono text-xs text-amber-300 font-bold">AURA 3D FULLSCREEN STUDIO</span>
            </div>
            <button
              onClick={() => setIsFullscreen3DOpen(false)}
              className="p-2 rounded-full bg-emerald-900 border border-emerald-800 text-slate-300 hover:text-white hover:bg-emerald-800 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 mt-4">
            <Interactive3DViewer />
          </div>
        </div>
      )}
    </div>
  );
}
