import React, { useRef, useState } from 'react';
import { TIMELINE_PHASE_1 } from '../data/bridgeData';
import { GalleryImage } from '../types';
import { Calendar, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineSection1Props {
  onOpenImageModal: (image: GalleryImage) => void;
}

const Timeline1ImageCarousel: React.FC<{
  images: GalleryImage[];
  onOpenImageModal: (image: GalleryImage) => void;
}> = ({ images, onOpenImageModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  if (!images || images.length === 0) return null;
  const currentImg = images[currentIndex] || images[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 40) {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    } else if (deltaX < -40) {
      setCurrentIndex((currentIndex + 1) % images.length);
    }
    touchStartX.current = null;
  };

  return (
    <div>
      {/* Mobile & Tablet: 1 single image at a time with Left/Right navigation, swipe & counter */}
      <div
        className="block lg:hidden relative rounded-2xl overflow-hidden border border-emerald-200 bg-emerald-950 shadow-md select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative aspect-[16/10] sm:aspect-[21/9] max-h-56 sm:max-h-64 w-full overflow-hidden flex items-center justify-center bg-black">
          <img
            key={currentImg.id || currentIndex}
            src={currentImg.url}
            alt={currentImg.alt || ''}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 ease-out"
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

          {/* Bottom Dots & Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 backdrop-blur border border-emerald-700/80 z-20 shadow-md">
              {images.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(dotIdx);
                  }}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    dotIdx === currentIndex ? 'w-6 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/80'
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

        {currentImg.caption && (
          <div className="p-2.5 sm:p-3 bg-emerald-950 text-xs sm:text-sm text-slate-200 font-medium border-t border-emerald-900 leading-relaxed">
            {currentImg.caption}
          </div>
        )}
      </div>

      {/* Desktop (lg:): Side-by-side Grid */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-4">
        {images.map((img, imgIdx) => (
          <div
            key={img.id || imgIdx}
            className="relative rounded-2xl overflow-hidden border border-emerald-200 bg-emerald-950 group/img shadow-md hover:border-amber-400 transition-all"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-70" />
              <button
                type="button"
                onClick={() => onOpenImageModal(img)}
                className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-emerald-950/80 border border-emerald-700 text-amber-300 hover:bg-amber-400 hover:text-emerald-950 transition-all shadow-md"
                title="Phóng to hình ảnh"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
            {img.caption && (
              <div className="p-3 sm:p-3.5 bg-emerald-950 text-xs sm:text-sm text-slate-200 border-t border-emerald-900">
                <p className="font-medium leading-relaxed">{img.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const TimelineSection1: React.FC<TimelineSection1Props> = ({ onOpenImageModal }) => {
  return (
    <section id="timeline-1" className="pt-8 sm:pt-48 lg:pt-52 pb-16 px-4 sm:px-6 lg:px-8 bg-[#eef8f2] border-b border-emerald-200/80 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-14 text-center max-w-4xl mx-auto">
          <h2
            className="font-display font-black text-emerald-950 tracking-tight leading-tight text-balance"
            style={{ fontSize: 'clamp(2rem, 4vw + 0.5rem, 3.25rem)' }}
          >
            Từ ý tưởng lá dừa nước đến công trình biểu tượng
          </h2>
        </div>

        {/* Timeline Layout: Vertical Axis on LEFT, Content & Images on RIGHT */}
        <div className="relative pr-0 pl-6 sm:pl-10 lg:pl-16">
          {/* Vertical Timeline Axis Line on the LEFT */}
          <div className="absolute left-3 sm:left-6 lg:left-8 top-2 bottom-2 w-1 bg-gradient-to-b from-emerald-600 via-emerald-700 to-amber-500 rounded-full" />

          <div className="space-y-12">
            {TIMELINE_PHASE_1.map((item) => {
              const hasImages = item.images && item.images.length > 0;

              return (
                <div key={item.id} className="relative group">
                  {/* Node Marker on Left Axis */}
                  <div className="absolute -left-[24px] sm:-left-[36px] lg:-left-[44px] top-2.5 w-7 h-7 rounded-full bg-amber-400 border-4 border-emerald-900 flex items-center justify-center shadow-md group-hover:scale-125 transition-all duration-300 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-950 animate-pulse" />
                  </div>

                  {/* Main Card (Right side) */}
                  <div className="ml-6 sm:ml-10 lg:ml-12 bg-white/95 border border-emerald-200 rounded-3xl p-6 sm:p-8 hover:border-amber-400 transition-all duration-300 shadow-md">
                    {/* Time Badge */}
                    <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-2xl bg-emerald-100/80 border border-emerald-300 text-emerald-950 font-mono text-base sm:text-lg font-extrabold mb-5 shadow-sm">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-800" />
                      <span>{item.timeLabel}</span>
                    </div>

                    {/* Content Text */}
                    <p className="text-emerald-950 text-base sm:text-lg font-sans leading-relaxed font-medium">
                      {item.content}
                    </p>

                    {item.subContent && (
                      <p className="text-emerald-900 text-sm sm:text-base font-sans leading-relaxed mt-4 pt-4 border-t border-emerald-100">
                        {item.subContent}
                      </p>
                    )}

                    {/* Image presentation: 1 image on mobile/tablet with left/right buttons, 2 on desktop */}
                    {hasImages && (
                      <div className="mt-6 pt-6 border-t border-emerald-100">
                        <Timeline1ImageCarousel
                          images={item.images!}
                          onOpenImageModal={onOpenImageModal}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
