import React from 'react';
import { HERO_DATA } from '../data/bridgeData';

interface HeroSectionProps {
  onOpenFullscreen3D?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100vh] sm:min-h-[110vh] overflow-visible bg-[#0a0a0b] flex flex-col justify-between items-center pt-4 pb-0 px-4 sm:px-6 lg:px-8 font-sans select-none"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'visible',
        background: '#0a0a0b',
      }}
    >
      {/* Background Image - Responsive Crisp Aerial View of Pedestrian Bridge */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <source
          media="(max-width: 768px)"
          srcSet="/assets/aistudio/hero_mobile.webp"
          type="image/webp"
        />
        <source
          media="(max-width: 768px)"
          srcSet="/assets/aistudio/hero_mobile.jpg"
          type="image/jpeg"
        />
        <source
          srcSet="/assets/aistudio/hero_optimized.webp"
          type="image/webp"
        />
        <img
          src="/assets/aistudio/hero_optimized.jpg"
          alt="Toàn cảnh vị trí cầu đi bộ qua sông Sài Gòn"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            pointerEvents: 'none',
            userSelect: 'none',
            WebkitUserSelect: 'none',
          }}
        />
      </picture>

      {/* Title Container - Positioned in the Top 1/4 of the Hero Area */}
      <div className="relative z-20 max-w-5xl mx-auto w-full text-center flex flex-col items-center justify-start space-y-1 sm:space-y-1.5 pt-14 sm:pt-20 lg:pt-28">
        {/* Line 1: CẦU ĐI BỘ (UPPERCASE, Bold) */}
        <h1
          className="font-display font-black text-white uppercase tracking-tight leading-none text-balance"
          style={{
            fontSize: 'clamp(2.75rem, 6vw + 1rem, 5.5rem)',
            textShadow: '0 2px 14px rgba(0, 0, 0, 0.85), 0 4px 28px rgba(0, 0, 0, 0.7)',
          }}
        >
          CẦU ĐI BỘ
        </h1>

        {/* Line 2: BẮC QUA SÔNG SÀI GÒN (UPPERCASE, Bolder Font) */}
        <h2
          className="font-display font-extrabold text-slate-100 uppercase tracking-widest leading-none"
          style={{
            fontSize: 'clamp(1.5rem, 3.5vw + 0.5rem, 3.25rem)',
            textShadow: '0 2px 12px rgba(0, 0, 0, 0.85), 0 4px 24px rgba(0, 0, 0, 0.7)',
          }}
        >
          BẮC QUA SÔNG SÀI GÒN
        </h2>

        {/* Subtitle Badge: [Điểm nhấn kiến trúc mới của TPHCM] */}
        <div className="pt-2">
          <div className="inline-block bg-black/20 backdrop-blur-[2px] border border-white/30 px-6 sm:px-7 py-2 sm:py-2.5 rounded-2xl shadow-lg">
            <p
              className="font-sans font-extrabold text-amber-300 tracking-tight"
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw + 0.5rem, 2.25rem)',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.95), 0 4px 20px rgba(0, 0, 0, 0.85)',
              }}
            >
              {HERO_DATA.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Sapo White Card - Positioned at Bottom Overlapping Light Green Below */}
      <div className="relative z-30 max-w-4xl mx-auto w-full px-2 sm:px-4 mt-auto -mb-36 sm:-mb-44">
        <div className="bg-white border-2 border-amber-500 rounded-t-[32px] rounded-b-none p-6 sm:p-10 shadow-2xl relative">
          <div className="space-y-4 text-emerald-950 font-sans leading-relaxed text-base sm:text-lg italic font-normal text-justify sm:text-left">
            {HERO_DATA.sapo.split('\n\n').map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  idx === 1
                    ? 'font-semibold text-emerald-900 not-italic border-t border-emerald-100 pt-3 mt-3 text-center'
                    : 'text-emerald-950 font-medium'
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
