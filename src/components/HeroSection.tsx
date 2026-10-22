import React from 'react';
import { HERO_DATA } from '../data/bridgeData';
import { Interactive3DViewer } from './Interactive3DViewer';

interface HeroSectionProps {
  onOpenFullscreen3D?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenFullscreen3D }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-center pt-12 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f0fdf4] via-[#ecfdf5] to-[#e6f4ea] overflow-hidden border-b border-emerald-200/80"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-300/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-300/25 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10">
        {/* Hero Title & Subtitle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-auto">
          <div className="lg:col-span-7 space-y-6">
            {/* Main Title */}
            <h1
              className="font-display font-black tracking-tight leading-[1.1] text-emerald-950"
              style={{
                fontSize: 'clamp(2.25rem, 5vw + 1rem, 4.25rem)'
              }}
            >
              {HERO_DATA.title}
            </h1>

            {/* Subtitle / Headline */}
            <div className="border-l-4 border-amber-500 pl-4 py-1 bg-emerald-100/60 rounded-r-2xl">
              <h2
                className="font-sans font-bold text-emerald-900 tracking-tight leading-snug"
                style={{
                  fontSize: 'clamp(1.25rem, 2.5vw + 0.5rem, 2rem)'
                }}
              >
                {HERO_DATA.subtitle}
              </h2>
            </div>

            {/* Sapo Paragraph */}
            <div className="space-y-4 text-emerald-950 font-sans leading-relaxed text-base sm:text-lg max-w-2xl text-justify sm:text-left font-normal">
              {HERO_DATA.sapo.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className={idx === 1 ? 'font-medium text-emerald-900 italic border-t border-emerald-300/80 pt-3 mt-3' : ''}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Architectural Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {HERO_DATA.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/90 border border-emerald-200 rounded-2xl p-4 shadow-sm hover:border-amber-400 hover:shadow-md transition-all group"
                >
                  <p className="text-[11px] font-mono font-bold text-emerald-800 uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className="text-xl sm:text-2xl font-extrabold font-display text-emerald-950 group-hover:text-amber-600 transition-colors">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-emerald-700 font-medium mt-1">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Interactive Model Studio Container */}
          <div className="lg:col-span-5 w-full">
            <Interactive3DViewer onOpenFullscreen={onOpenFullscreen3D} />
          </div>
        </div>
      </div>
    </section>
  );
};
