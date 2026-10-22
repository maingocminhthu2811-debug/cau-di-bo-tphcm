import React, { useState } from 'react';
import { TIMELINE_PHASE_2, PHASE_2_GALLERY_IMAGES } from '../data/bridgeData';
import { GalleryImage } from '../types';
import { ChevronLeft, ChevronRight, Calendar, Ship, MapPin, ZoomIn } from 'lucide-react';

interface TimelineSection2Props {
  onOpenImageModal: (image: GalleryImage) => void;
}

export const TimelineSection2: React.FC<TimelineSection2Props> = ({ onOpenImageModal }) => {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState<number>(0);

  const activeImage = PHASE_2_GALLERY_IMAGES[currentGalleryIndex];

  const handleNextPhoto = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % PHASE_2_GALLERY_IMAGES.length);
  };

  const handlePrevPhoto = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + PHASE_2_GALLERY_IMAGES.length) % PHASE_2_GALLERY_IMAGES.length);
  };

  return (
    <section id="timeline-2" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f0fdf4] border-b border-emerald-200/80 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <h2
            className="font-display font-extrabold text-emerald-950 tracking-tight leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw + 0.5rem, 3rem)' }}
          >
            Hành trình vượt sóng, nối đôi bờ
          </h2>
        </div>

        {/* 12 Column Layout: Left 5/12 Image Box (5 images), Right 7/12 Milestone Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5/12 width): Photo Display Box showing 1 photo with controls */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-300 bg-emerald-950 shadow-xl group">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] w-full overflow-hidden">
                <img
                  src={activeImage.url}
                  alt={activeImage.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent" />

                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-700 text-amber-300 font-mono text-xs font-bold backdrop-blur-md">
                  <Ship className="w-3.5 h-3.5 text-amber-400" />
                  <span>Hình {currentGalleryIndex + 1} / 5</span>
                </div>

                <button
                  onClick={() => onOpenImageModal(activeImage)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-emerald-950/80 border border-emerald-700 text-amber-300 hover:bg-amber-400 hover:text-emerald-950 transition-all shadow-lg"
                  title="Xem ảnh phóng to"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
                  <button
                    onClick={handlePrevPhoto}
                    className="pointer-events-auto p-2.5 rounded-full bg-emerald-950/80 border border-emerald-700 text-white hover:bg-amber-400 hover:text-emerald-950 transition-all shadow-lg"
                    title="Hình trước"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNextPhoto}
                    className="pointer-events-auto p-2.5 rounded-full bg-emerald-950/80 border border-emerald-700 text-white hover:bg-amber-400 hover:text-emerald-950 transition-all shadow-lg"
                    title="Hình tiếp theo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-4 bg-emerald-950 border-t border-emerald-900 space-y-2">
                <p className="text-sm font-medium text-slate-100 leading-snug">{activeImage.caption}</p>
                <div className="flex flex-wrap items-center justify-between text-xs text-slate-300 font-mono gap-2 pt-1 border-t border-emerald-900">
                  <span className="flex items-center gap-1 text-amber-300">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {activeImage.location}
                  </span>
                  <span>{activeImage.date}</span>
                </div>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="grid grid-cols-5 gap-2">
              {PHASE_2_GALLERY_IMAGES.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setCurrentGalleryIndex(idx)}
                  className={`relative aspect-square rounded-2xl overflow-hidden border transition-all ${
                    idx === currentGalleryIndex
                      ? 'border-amber-400 ring-4 ring-amber-400/30 scale-105 opacity-100'
                      : 'border-emerald-300 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column (7/12 width): Detailed Milestone Cards */}
          <div className="lg:col-span-7 space-y-6">
            {TIMELINE_PHASE_2.map((card, idx) => (
              <div
                key={card.id}
                className="bg-white/95 border border-emerald-200 rounded-3xl p-6 sm:p-8 hover:border-amber-400 transition-all duration-300 shadow-md group"
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-950 font-mono text-xs font-bold">
                    <Calendar className="w-3.5 h-3.5 text-emerald-800" />
                    <span>{card.timeLabel}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-600">Mốc {idx + 1}/4</span>
                </div>

                {card.title && (
                  <h3 className="text-lg sm:text-xl font-bold font-display text-emerald-950 mb-3 group-hover:text-amber-600 transition-colors">
                    {card.title}
                  </h3>
                )}

                <p className="text-emerald-950 text-base font-sans leading-relaxed font-medium">
                  {card.content}
                </p>

                {card.subContent && (
                  <p className="text-emerald-900 text-sm font-sans leading-relaxed mt-4 pt-4 border-t border-emerald-100 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200">
                    {card.subContent}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
