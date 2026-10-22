import React, { useEffect, useRef, useState } from 'react';
import { HERO_DATA } from '../data/bridgeData';

interface HeroSectionProps {
  onOpenFullscreen3D?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string>('/video-mobile.mp4');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      setVideoSrc('/video-desktop.mp4');
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force strict mute & playsinline on DOM node for iOS WebKit
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.controls = false;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('x-webkit-airplay', 'deny');
    video.setAttribute('disablePictureInPicture', 'true');
    video.setAttribute('disableRemotePlayback', 'true');
    video.setAttribute('tabindex', '-1');

    const safePlay = () => {
      if (!video) return;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    };

    safePlay();

    const onCanPlay = () => safePlay();
    const onLoaded = () => safePlay();
    const onPause = () => safePlay(); // Auto-resume if iOS tries to pause

    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('loadeddata', onLoaded);
    video.addEventListener('pause', onPause);

    const handleFirstInteraction = () => {
      safePlay();
    };
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true, once: true });
    window.addEventListener('scroll', handleFirstInteraction, { passive: true, once: true });

    return () => {
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('loadeddata', onLoaded);
      video.removeEventListener('pause', onPause);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };
  }, [videoSrc]);

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
      {/* Background Video - Pure visual background, strictly non-interactive, auto-playing & looping */}
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        poster="/hero-poster.webp"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 50%',
          pointerEvents: 'none',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          touchAction: 'none',
        }}
      />

      {/* Reduced Bright Dark Gradient Overlay & Pointer Shield */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-10"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(8,8,10,0.35) 0%, rgba(8,8,10,0.08) 35%, rgba(8,8,10,0.15) 65%, rgba(8,8,10,0.65) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Title Container - Positioned in the Top 1/4 of the Hero Area */}
      <div className="relative z-20 max-w-5xl mx-auto w-full text-center flex flex-col items-center justify-start space-y-1 sm:space-y-1.5 pt-6 sm:pt-8 lg:pt-10">
        {/* Line 1: CẦU ĐI BỘ (UPPERCASE, Bold) */}
        <h1
          className="font-display font-black text-white uppercase tracking-tight leading-none text-balance drop-shadow-2xl"
          style={{
            fontSize: 'clamp(2.75rem, 6vw + 1rem, 5.5rem)',
          }}
        >
          CẦU ĐI BỘ
        </h1>

        {/* Line 2: BẮC QUA SÔNG SÀI GÒN (UPPERCASE, Bolder Font) */}
        <h2
          className="font-display font-extrabold text-slate-100 uppercase tracking-widest leading-none drop-shadow-lg"
          style={{
            fontSize: 'clamp(1.5rem, 3.5vw + 0.5rem, 3.25rem)',
          }}
        >
          BẮC QUA SÔNG SÀI GÒN
        </h2>

        {/* Subtitle Badge: [Điểm nhấn kiến trúc mới của TPHCM] in Ultra-Transparent Glassmorphism showing Video */}
        <div className="pt-2">
          <div className="inline-block bg-black/15 backdrop-blur-sm border border-white/20 px-7 py-2.5 rounded-2xl shadow-xl">
            <p
              className="font-sans font-extrabold text-amber-300 tracking-tight drop-shadow-md"
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw + 0.5rem, 2.25rem)',
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
