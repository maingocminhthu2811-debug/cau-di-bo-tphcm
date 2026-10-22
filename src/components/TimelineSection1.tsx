import React, { useState } from 'react';
import { TIMELINE_PHASE_1 } from '../data/bridgeData';
import { GalleryImage } from '../types';
import { ChevronLeft, ChevronRight, Calendar, MapPin, ZoomIn } from 'lucide-react';

interface TimelineSection1Props {
  onOpenImageModal: (image: GalleryImage) => void;
}

export const TimelineSection1: React.FC<TimelineSection1Props> = ({ onOpenImageModal }) => {
  const [activeImageIndexes, setActiveImageIndexes] = useState<{ [key: string]: number }>({
    'm-2023-10': 0,
    'm-2023-12': 0,
    'm-2025-03': 0,
  });

  const toggleNextImage = (milestoneId: string, totalImages: number) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [milestoneId]: ((prev[milestoneId] || 0) + 1) % totalImages,
    }));
  };

  const togglePrevImage = (milestoneId: string, totalImages: number) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [milestoneId]: ((prev[milestoneId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  return (
    <section id="timeline-1" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#eef8f2] border-b border-emerald-200/80 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 text-left max-w-3xl">
          <h2
            className="font-display font-extrabold text-emerald-950 tracking-tight leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw + 0.5rem, 3rem)' }}
          >
            Từ ý tưởng lá dừa nước đến công trình biểu tượng
          </h2>
        </div>

        {/* Timeline Layout: Axis on RIGHT, Date & Content on LEFT */}
        <div className="relative pl-0 pr-6 sm:pr-10 lg:pr-16">
          {/* Vertical Timeline Axis Line on the RIGHT */}
          <div className="absolute right-3 sm:right-6 lg:right-8 top-2 bottom-2 w-1 bg-gradient-to-b from-emerald-600 via-emerald-700 to-amber-500 rounded-full" />

          <div className="space-y-12">
            {TIMELINE_PHASE_1.map((item) => {
              const currentImageIndex = activeImageIndexes[item.id] || 0;
              const hasImages = item.images && item.images.length > 0;
              const activeImage = hasImages ? item.images![currentImageIndex] : null;

              return (
                <div key={item.id} className="relative group">
                  {/* Node Marker on Right Axis */}
                  <div className="absolute -right-[24px] sm:-right-[36px] lg:-right-[44px] top-1.5 w-7 h-7 rounded-full bg-amber-400 border-4 border-emerald-900 flex items-center justify-center shadow-md group-hover:scale-125 transition-all duration-300 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-950 animate-pulse" />
                  </div>

                  {/* Main Card (Left side) */}
                  <div className="mr-6 sm:mr-10 lg:mr-12 bg-white/95 border border-emerald-200 rounded-3xl p-6 sm:p-8 hover:border-amber-400 transition-all duration-300 shadow-md">
                    {/* Time Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-950 font-mono text-xs font-bold mb-4">
                      <Calendar className="w-3.5 h-3.5 text-emerald-800" />
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

                    {/* Image Viewer Container (1 image with toggle buttons) */}
                    {hasImages && activeImage && (
                      <div className="mt-6 pt-6 border-t border-emerald-100">
                        <div className="relative rounded-2xl overflow-hidden border border-emerald-200 bg-emerald-950 group/img shadow-lg">
                          <div className="relative aspect-[16/9] w-full overflow-hidden">
                            <img
                              src={activeImage.url}
                              alt={activeImage.alt}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-80" />

                            <button
                              onClick={() => onOpenImageModal(activeImage)}
                              className="absolute top-3 right-3 p-2 rounded-full bg-emerald-950/80 border border-emerald-700 text-amber-300 hover:bg-amber-400 hover:text-emerald-950 transition-all shadow-md"
                              title="Phóng to hình ảnh"
                            >
                              <ZoomIn className="w-4 h-4" />
                            </button>

                            {/* Prev / Next buttons */}
                            <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
                              <button
                                onClick={() => togglePrevImage(item.id, item.images!.length)}
                                className="pointer-events-auto p-2 rounded-full bg-emerald-950/80 border border-emerald-700 text-white hover:bg-amber-400 hover:text-emerald-950 transition-all shadow-md"
                                title="Hình trước"
                              >
                                <ChevronLeft className="w-5 h-5" />
                              </button>

                              <button
                                onClick={() => toggleNextImage(item.id, item.images!.length)}
                                className="pointer-events-auto p-2 rounded-full bg-emerald-950/80 border border-emerald-700 text-white hover:bg-amber-400 hover:text-emerald-950 transition-all shadow-md"
                                title="Hình kế tiếp"
                              >
                                <ChevronRight className="w-5 h-5" />
                              </button>
                            </div>

                            {/* Dots */}
                            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 z-10">
                              {item.images!.map((_, imgIdx) => (
                                <button
                                  key={imgIdx}
                                  onClick={() =>
                                    setActiveImageIndexes((prev) => ({
                                      ...prev,
                                      [item.id]: imgIdx,
                                    }))
                                  }
                                  className={`h-1.5 rounded-full transition-all ${
                                    imgIdx === currentImageIndex
                                      ? 'w-6 bg-amber-400'
                                      : 'w-2 bg-emerald-600 hover:bg-emerald-400'
                                  }`}
                                  title={`Hình ${imgIdx + 1}`}
                                />
                              ))}
                            </div>
                          </div>

                          <div className="p-4 bg-emerald-950 text-xs text-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-emerald-900">
                            <p className="font-medium">{activeImage.caption}</p>
                            <div className="flex items-center gap-3 text-amber-300 text-[11px] font-mono shrink-0">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-amber-400" />
                                {activeImage.location}
                              </span>
                              <span>Hình {currentImageIndex + 1}/2</span>
                            </div>
                          </div>
                        </div>
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
