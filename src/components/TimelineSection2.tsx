import React, { useEffect, useRef, useState } from 'react';
import { TIMELINE_PHASE_2 } from '../data/bridgeData';
import { GalleryImage } from '../types';
import { Calendar, ZoomIn } from 'lucide-react';

interface TimelineSection2Props {
  onOpenImageModal: (image: GalleryImage) => void;
}

export const TimelineSection2: React.FC<TimelineSection2Props> = ({ onOpenImageModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardScales, setCardScales] = useState<number[]>([1, 1, 1]);

  const totalCards = TIMELINE_PHASE_2.length;

  useEffect(() => {
    const handleScroll = () => {
      const newScales = cardRefs.current.map((card, index) => {
        if (!card) return 1;

        // The last card never scales down
        if (index === totalCards - 1) return 1;

        const nextCard = cardRefs.current[index + 1];
        if (nextCard) {
          const nextRect = nextCard.getBoundingClientRect();
          const nextStickyTop = 32 + (index + 1) * 28;

          // As the next card moves from 400px away up to its sticky top position
          const travelDistance = 450;
          const distanceToSticky = nextRect.top - nextStickyTop;

          if (distanceToSticky < travelDistance) {
            const progress = Math.min(1, Math.max(0, 1 - distanceToSticky / travelDistance));
            const targetScale = 1 - (totalCards - 1 - index) * 0.03;
            return 1 - progress * (1 - targetScale);
          }
        }
        return 1;
      });

      setCardScales(newScales);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalCards]);

  return (
    <section id="timeline-2" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f0fdf4] border-b border-emerald-200/80 relative overflow-visible">
      <div className="max-w-7xl mx-auto overflow-visible">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2
            className="font-display font-black text-emerald-950 tracking-tight leading-tight text-balance"
            style={{ fontSize: 'clamp(2rem, 4vw + 0.5rem, 3.25rem)' }}
          >
            Hành trình vượt sóng, nối đôi bờ
          </h2>
        </div>

        {/* Common Stacking Container (div:nth-of-type(2)) */}
        <div ref={containerRef} className="max-w-6xl mx-auto relative pb-72 overflow-visible">
          {TIMELINE_PHASE_2.map((card, index) => {
            const currentScale = cardScales[index] || 1;
            const images = card.images || [];
            const stickyTop = 32 + index * 28; // Thẻ 01: 32px, Thẻ 02: 60px, Thẻ 03: 88px (bậc thang 28px)

            return (
              <div
                key={card.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                style={{
                  position: 'sticky',
                  top: `${stickyTop}px`,
                  zIndex: 10 + index,
                  transform: `scale(${currentScale})`,
                  transformOrigin: 'top center',
                  transition: 'transform 0.1s ease-out',
                }}
                className="bg-white border-2 border-emerald-300 rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] relative mb-48 sm:mb-64 last:mb-0 group overflow-hidden"
              >
                {/* Time Badge */}
                <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-2xl bg-emerald-100/80 border border-emerald-300 text-emerald-950 font-mono text-base sm:text-lg font-extrabold mb-5 shadow-sm">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-800" />
                  <span>{card.timeLabel}</span>
                </div>

                {card.title && (
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-emerald-950 mb-4 group-hover:text-amber-600 transition-colors">
                    {card.title}
                  </h3>
                )}

                {/* Primary Content Paragraph */}
                <p className="text-emerald-950 text-base sm:text-lg lg:text-xl font-sans leading-relaxed font-medium">
                  {card.content}
                </p>

                {/* SubContent Paragraphs */}
                {card.subContent && (
                  <div className="space-y-4 text-emerald-950 text-base sm:text-lg font-sans leading-relaxed font-medium mt-4">
                    {card.subContent.split('\n\n').map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>
                )}

                {/* Specific Inline Photo Layouts for Each Card */}
                {/* CARD 1: 3 images (2 small on top, 1 big below) */}
                {index === 0 && images.length >= 3 && (
                  <div className="mt-8 pt-6 border-t border-emerald-100 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {images.slice(0, 2).map((img) => (
                        <div
                          key={img.id}
                          className="relative rounded-2xl overflow-hidden border border-emerald-200 bg-emerald-950 group/img shadow-md"
                        >
                          <div className="relative aspect-[16/10] w-full overflow-hidden">
                            <img
                              src={img.url}
                              alt={img.alt}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                            />
                            <button
                              onClick={() => onOpenImageModal(img)}
                              className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-emerald-950/80 border border-emerald-700 text-amber-300 hover:bg-amber-400 hover:text-emerald-950 transition-all shadow-md"
                              title="Phóng to hình ảnh"
                            >
                              <ZoomIn className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="p-3 bg-emerald-950 text-xs sm:text-sm text-slate-200 font-medium line-clamp-1 border-t border-emerald-900">
                            {img.caption}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 1 Big Photo Below */}
                    {images[2] && (
                      <div className="relative rounded-2xl overflow-hidden border border-emerald-200 bg-emerald-950 group/img shadow-md">
                        <div className="relative aspect-[16/9] w-full overflow-hidden">
                          <img
                            src={images[2].url}
                            alt={images[2].alt}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                          />
                          <button
                            onClick={() => onOpenImageModal(images[2])}
                            className="absolute top-3 right-3 p-2 rounded-full bg-emerald-950/80 border border-emerald-700 text-amber-300 hover:bg-amber-400 hover:text-emerald-950 transition-all shadow-md"
                            title="Phóng to hình ảnh"
                          >
                            <ZoomIn className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="p-3 bg-emerald-950 text-xs sm:text-sm text-slate-200 font-medium border-t border-emerald-900">
                          {images[2].caption}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* CARD 2: 4 images (2x2 grid) */}
                {index === 1 && images.length >= 4 && (
                  <div className="mt-8 pt-6 border-t border-emerald-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {images.map((img) => (
                        <div
                          key={img.id}
                          className="relative rounded-2xl overflow-hidden border border-emerald-200 bg-emerald-950 group/img shadow-md"
                        >
                          <div className="relative aspect-[16/10] w-full overflow-hidden">
                            <img
                              src={img.url}
                              alt={img.alt}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                            />
                            <button
                              onClick={() => onOpenImageModal(img)}
                              className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-emerald-950/80 border border-emerald-700 text-amber-300 hover:bg-amber-400 hover:text-emerald-950 transition-all shadow-md"
                              title="Phóng to hình ảnh"
                            >
                              <ZoomIn className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="p-3 bg-emerald-950 text-xs sm:text-sm text-slate-200 font-medium line-clamp-1 border-t border-emerald-900">
                            {img.caption}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CARD 3: 5 images (1 large main photo + 4 small grid photos) */}
                {index === 2 && images.length >= 5 && (
                  <div className="mt-8 pt-6 border-t border-emerald-100 space-y-4">
                    {/* 1 Large Main Hero Photo */}
                    <div className="relative rounded-2xl overflow-hidden border border-emerald-200 bg-emerald-950 group/img shadow-md">
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <img
                          src={images[0].url}
                          alt={images[0].alt}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                        />
                        <button
                          onClick={() => onOpenImageModal(images[0])}
                          className="absolute top-3 right-3 p-2 rounded-full bg-emerald-950/80 border border-emerald-700 text-amber-300 hover:bg-amber-400 hover:text-emerald-950 transition-all shadow-md"
                          title="Phóng to hình ảnh"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="p-3 bg-emerald-950 text-xs sm:text-sm text-slate-200 font-medium border-t border-emerald-900">
                        {images[0].caption}
                      </div>
                    </div>

                    {/* 4 Small Photos Grid Below */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {images.slice(1, 5).map((img) => (
                        <div
                          key={img.id}
                          onClick={() => onOpenImageModal(img)}
                          className="relative aspect-square rounded-2xl overflow-hidden border border-emerald-200 bg-emerald-950 group/img cursor-pointer shadow-sm hover:border-amber-400 transition-all"
                        >
                          <img
                            src={img.url}
                            alt={img.alt}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-emerald-950/60 opacity-0 group-hover/img:opacity-100 transition-opacity p-2 flex items-center justify-center text-amber-300 text-xs font-medium text-center">
                            Xem ảnh
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
