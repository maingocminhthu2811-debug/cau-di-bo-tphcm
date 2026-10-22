import React, { useEffect, useRef, useState } from 'react';
import { TIMELINE_PHASE_2 } from '../data/bridgeData';
import { GalleryImage } from '../types';
import { Calendar, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineSection2Props {
  onOpenImageModal: (image: GalleryImage) => void;
}

interface SingleImageCarouselProps {
  images: GalleryImage[];
  currentIndex: number;
  onIndexChange: (newIndex: number) => void;
  onOpenImageModal: (image: GalleryImage) => void;
  aspectRatioClass?: string;
}

const SingleImageCarousel: React.FC<SingleImageCarouselProps> = ({
  images,
  currentIndex,
  onIndexChange,
  onOpenImageModal,
  aspectRatioClass = 'aspect-[16/10] sm:aspect-[21/9] max-h-56 sm:max-h-64',
}) => {
  const touchStartX = useRef<number | null>(null);

  if (!images || images.length === 0) return null;
  const currentImg = images[currentIndex] || images[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onIndexChange((currentIndex + 1) % images.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 40) {
      onIndexChange((currentIndex - 1 + images.length) % images.length);
    } else if (deltaX < -40) {
      onIndexChange((currentIndex + 1) % images.length);
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-emerald-200 bg-emerald-950 shadow-md group/slider select-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className={`relative ${aspectRatioClass} w-full overflow-hidden flex items-center justify-center bg-black`}>
        <img
          key={currentImg.id || currentIndex}
          src={currentImg.url}
          alt={currentImg.alt || ''}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover animate-fadeIn transition-transform duration-500 ease-out"
        />

        {/* Left Navigation Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-emerald-950/85 hover:bg-amber-400 text-amber-300 hover:text-emerald-950 border border-emerald-600 transition-all shadow-lg z-20 flex items-center justify-center cursor-pointer active:scale-95"
            title="Hình trước đó"
            aria-label="Hình trước đó"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Right Navigation Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-emerald-950/85 hover:bg-amber-400 text-amber-300 hover:text-emerald-950 border border-emerald-600 transition-all shadow-lg z-20 flex items-center justify-center cursor-pointer active:scale-95"
            title="Hình kế tiếp"
            aria-label="Hình kế tiếp"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Zoom In Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenImageModal(currentImg);
          }}
          className="absolute top-2.5 right-2.5 p-2 rounded-full bg-emerald-950/85 border border-emerald-700 text-amber-300 hover:bg-amber-400 hover:text-emerald-950 transition-all shadow-md z-20 cursor-pointer active:scale-95"
          title="Phóng to hình ảnh"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        {/* Bottom Dots & Counter Bar */}
        {images.length > 1 && (
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 backdrop-blur border border-emerald-700/80 z-20 shadow-md">
            {images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onIndexChange(dotIdx);
                }}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  dotIdx === currentIndex
                    ? 'w-6 bg-amber-400'
                    : 'w-2 bg-white/40 hover:bg-white/80'
                }`}
                title={`Ảnh ${dotIdx + 1}`}
                aria-label={`Chuyển tới ảnh ${dotIdx + 1}`}
              />
            ))}
            <span className="text-[11px] font-mono font-bold text-amber-300 ml-1.5">
              {currentIndex + 1}/{images.length}
            </span>
          </div>
        )}
      </div>

      {/* Caption Bar */}
      {currentImg.caption && (
        <div className="p-2.5 sm:p-3 bg-emerald-950 text-xs sm:text-sm text-slate-200 font-medium border-t border-emerald-900 leading-relaxed">
          {currentImg.caption}
        </div>
      )}
    </div>
  );
};

export const TimelineSection2: React.FC<TimelineSection2Props> = ({ onOpenImageModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardScales, setCardScales] = useState<number[]>([1, 1, 1]);
  const [card1Index, setCard1Index] = useState<number>(0);
  const [card2Index, setCard2Index] = useState<number>(0);
  const [card3Index, setCard3Index] = useState<number>(0);

  const totalCards = TIMELINE_PHASE_2.length;
  const card3Images = TIMELINE_PHASE_2[2]?.images || [];

  // 10s auto-rotation for Card 3 image carousel
  useEffect(() => {
    if (card3Images.length <= 1) return;
    const interval = setInterval(() => {
      setCard3Index((prev) => (prev + 1) % card3Images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [card3Images.length]);

  useEffect(() => {
    const handleScroll = () => {
      const newScales = cardRefs.current.map((card, index) => {
        if (!card) return 1;

        // The last card stays at scale 1
        if (index === totalCards - 1) return 1;

        const nextCard = cardRefs.current[index + 1];
        if (nextCard) {
          const nextRect = nextCard.getBoundingClientRect();
          if (nextRect.top < window.innerHeight) {
            const travelDistance = window.innerHeight;
            const progress = Math.min(1, Math.max(0, 1 - Math.max(0, nextRect.top) / travelDistance));
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
    <section id="timeline-2" className="pt-16 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-[#f0fdf4] border-b border-emerald-200/80 relative overflow-visible">
      <div className="max-w-7xl mx-auto overflow-visible">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-4xl mx-auto">
          <h2
            className="font-display font-black text-emerald-950 tracking-tight leading-tight text-balance"
            style={{ fontSize: 'clamp(2rem, 4vw + 0.5rem, 3.25rem)' }}
          >
            Hành trình vượt sóng, nối đôi bờ
          </h2>
        </div>

        {/* Common Stacking Container with height allowing cards to scroll */}
        <div
          ref={containerRef}
          className="max-w-6xl mx-auto relative pb-12 sm:pb-16 min-h-[190vh] overflow-visible"
        >
          {TIMELINE_PHASE_2.map((card, index) => {
            const currentScale = cardScales[index] || 1;
            const images = card.images || [];
            const zIndexVal = (index + 1) * 10; // 10, 20, 30

            return (
              <div
                key={card.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                style={{
                  position: 'sticky',
                  top: '20px',
                  zIndex: zIndexVal,
                  transform: `scale(${currentScale})`,
                  transformOrigin: 'top center',
                  transition: 'transform 0.1s ease-out',
                }}
                className={`bg-white border-2 border-emerald-300 rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 lg:p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.22)] relative mb-48 sm:mb-80 last:mb-0 group ${
                  index === 0 ? 'z-10' : index === 1 ? 'z-20' : 'z-30'
                }`}
              >
                {/* Time Badge - Always visible at top */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-100/95 border border-emerald-300 text-emerald-950 font-mono text-sm sm:text-base font-extrabold mb-4 shadow-sm">
                  <Calendar className="w-4 h-4 text-emerald-800" />
                  <span>{card.timeLabel}</span>
                </div>

                {/* Primary Content Paragraph */}
                <p className="text-emerald-950 text-base sm:text-lg font-sans leading-relaxed font-normal">
                  {card.content}
                </p>

                {/* SubContent Paragraphs */}
                {card.subContent && (
                  <div className="space-y-3 text-emerald-950 text-base sm:text-lg font-sans leading-relaxed font-normal mt-3">
                    {card.subContent.split('\n\n').map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>
                )}

                {/* Specific Inline Photo Layouts for Each Card */}

                {/* CARD 1: Mobile/Tablet has 1-image carousel with left/right buttons. Desktop (lg:) has 2 photos side-by-side */}
                {index === 0 && images.length >= 2 && (
                  <div className="mt-6 pt-5 border-t border-emerald-100">
                    {/* Mobile & Tablet: 1 image at a time with left/right buttons */}
                    <div className="block lg:hidden">
                      <SingleImageCarousel
                        images={images.slice(0, 2)}
                        currentIndex={card1Index}
                        onIndexChange={setCard1Index}
                        onOpenImageModal={onOpenImageModal}
                        aspectRatioClass="aspect-[16/10] sm:aspect-[21/9] max-h-56 sm:max-h-64"
                      />
                    </div>

                    {/* Desktop (lg:): 2 Photos side-by-side */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-4">
                      {images.slice(0, 2).map((img) => (
                        <div
                          key={img.id}
                          className="relative rounded-2xl overflow-hidden border border-emerald-200 bg-emerald-950 group/img shadow-sm"
                        >
                          <div className="relative aspect-[16/10] max-h-64 w-full overflow-hidden">
                            <img
                              src={img.url}
                              alt={img.alt}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                            />
                            <button
                              type="button"
                              onClick={() => onOpenImageModal(img)}
                              className="absolute top-2.5 right-2.5 p-2 rounded-full bg-emerald-950/80 border border-emerald-700 text-amber-300 hover:bg-amber-400 hover:text-emerald-950 transition-all shadow-md"
                              title="Phóng to hình ảnh"
                            >
                              <ZoomIn className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          {img.caption && (
                            <div className="p-3 bg-emerald-950 text-sm text-slate-200 font-medium leading-relaxed border-t border-emerald-900">
                              {img.caption}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CARD 2: Mobile/Tablet has 1-image carousel with left/right buttons. Desktop (lg:) has 2 photos side-by-side */}
                {index === 1 && images.length >= 2 && (
                  <div className="mt-6 pt-5 border-t border-emerald-100">
                    {/* Mobile & Tablet: 1 image at a time with left/right buttons */}
                    <div className="block lg:hidden">
                      <SingleImageCarousel
                        images={images.slice(0, 2)}
                        currentIndex={card2Index}
                        onIndexChange={setCard2Index}
                        onOpenImageModal={onOpenImageModal}
                        aspectRatioClass="aspect-[16/10] sm:aspect-[21/9] max-h-56 sm:max-h-64"
                      />
                    </div>

                    {/* Desktop (lg:): 2 Photos side-by-side */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-4">
                      {images.slice(0, 2).map((img) => (
                        <div
                          key={img.id}
                          className="relative rounded-2xl overflow-hidden border border-emerald-200 bg-emerald-950 group/img shadow-sm"
                        >
                          <div className="relative aspect-[16/10] max-h-64 w-full overflow-hidden">
                            <img
                              src={img.url}
                              alt={img.alt}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                            />
                            <button
                              type="button"
                              onClick={() => onOpenImageModal(img)}
                              className="absolute top-2.5 right-2.5 p-2 rounded-full bg-emerald-950/80 border border-emerald-700 text-amber-300 hover:bg-amber-400 hover:text-emerald-950 transition-all shadow-md"
                              title="Phóng to hình ảnh"
                            >
                              <ZoomIn className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          {img.caption && (
                            <div className="p-3 bg-emerald-950 text-sm text-slate-200 font-medium leading-relaxed border-t border-emerald-900">
                              {img.caption}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CARD 3: Chỉ 1 khung lớn, tự động 10s đổi ảnh, có nút qua trái/phải */}
                {index === 2 && images.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-emerald-100">
                    <SingleImageCarousel
                      images={images}
                      currentIndex={card3Index}
                      onIndexChange={setCard3Index}
                      onOpenImageModal={onOpenImageModal}
                      aspectRatioClass="aspect-[16/10] sm:aspect-[21/9] max-h-72 sm:max-h-[380px]"
                    />
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


