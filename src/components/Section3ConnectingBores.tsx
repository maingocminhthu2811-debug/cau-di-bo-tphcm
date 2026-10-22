import React, { useState, useEffect, useRef } from 'react';
import { MARQUEE_ROW_1, MARQUEE_ROW_2, GRAND_FINAL_IMAGE, ARCHITECTURAL_HOTSPOTS } from '../data/bridgeData';
import { GalleryImage, ArchitecturalSpot } from '../types';
import { ZoomIn, Info } from 'lucide-react';

interface Section3Props {
  onOpenImageModal: (image: GalleryImage) => void;
}

export const Section3ConnectingBores: React.FC<Section3Props> = ({ onOpenImageModal }) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeSpot, setActiveSpot] = useState<ArchitecturalSpot | null>(ARCHITECTURAL_HOTSPOTS[0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalDist = rect.height + windowHeight;
      const currentPos = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, currentPos / totalDist));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const row1Translate = prefersReducedMotion ? 0 : (scrollProgress - 0.5) * 280;
  const row2Translate = prefersReducedMotion ? 0 : (0.5 - scrollProgress) * 280;

  return (
    <section id="section-3" ref={sectionRef} className="py-20 bg-[#eef8f2] border-b border-emerald-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            className="font-display font-extrabold text-emerald-950 tracking-tight leading-tight text-balance"
            style={{ fontSize: 'clamp(2rem, 4vw + 0.5rem, 3.5rem)' }}
          >
            Nhịp cầu nối những bờ vui
          </h2>

          <p className="text-emerald-900 font-bold font-sans text-lg sm:text-xl mt-4 leading-relaxed">
            Sau hơn một năm nỗ lực thi công, cầu đi bộ đầu tiên bắc qua sông Sài Gòn đã dần lộ diện.
          </p>
        </div>
      </div>

      {/* MarqueeSection (2 Horizontal Image Rows moving in opposite directions) */}
      <div className="w-full my-12 space-y-6 overflow-hidden">
        {/* Top Row: Glides Right */}
        <div
          className="flex items-center gap-4 sm:gap-6 w-max transition-transform duration-100 ease-out will-change-transform"
          style={{
            transform: `translate3d(${row1Translate}px, 0, 0)`
          }}
        >
          {MARQUEE_ROW_1.map((img) => (
            <div
              key={img.id}
              onClick={() => onOpenImageModal(img)}
              className="w-72 sm:w-96 aspect-[16/10] rounded-3xl overflow-hidden border border-emerald-300 bg-white shrink-0 cursor-pointer group shadow-md relative"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <p className="text-xs text-amber-300 font-semibold">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row: Glides Left */}
        <div
          className="flex items-center gap-4 sm:gap-6 w-max transition-transform duration-100 ease-out will-change-transform"
          style={{
            transform: `translate3d(${row2Translate}px, 0, 0)`
          }}
        >
          {MARQUEE_ROW_2.map((img) => (
            <div
              key={img.id}
              onClick={() => onOpenImageModal(img)}
              className="w-72 sm:w-96 aspect-[16/10] rounded-3xl overflow-hidden border border-emerald-300 bg-white shrink-0 cursor-pointer group shadow-md relative"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <p className="text-xs text-amber-300 font-semibold">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Narrative Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-12 text-emerald-950 font-sans text-base sm:text-lg leading-relaxed">
        <div className="p-6 sm:p-8 rounded-3xl bg-white/95 border border-emerald-200 shadow-md space-y-6">
          <p className="text-justify sm:text-left font-medium">
            Công trình không chỉ nối liền Bến Bạch Đằng với Khu đô thị mới Thủ Thiêm, mà còn kết nối những nhịp đập tự hào của trái tim hàng triệu người dân TPHCM.
          </p>

          <blockquote className="border-l-4 border-amber-500 pl-4 py-2 my-4 text-emerald-950 italic font-bold bg-amber-100/50 rounded-r-2xl">
            “Lá dừa nước" bằng thép khổng lồ ấy không chỉ là nét gạch nối giữa văn hóa truyền thống Nam bộ và tương lai hiện đại, mà còn là minh chứng cho một TPHCM năng động, nghĩa tình, luôn lấy người dân làm trung tâm của sự phát triển.
          </blockquote>

          <p className="text-justify sm:text-left font-medium">
            Công trình dự kiến hoàn thành, đưa vào vận hành trước Tết Nguyên đán 2027, góp phần tăng cường kết nối giữa khu vực trung tâm TPHCM và Khu đô thị mới Thủ Thiêm, đồng thời mở thêm không gian sinh hoạt cộng đồng gắn với cảnh quan sông Sài Gòn.
          </p>
        </div>
      </div>

      {/* 1 Large Final Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="relative rounded-3xl overflow-hidden border border-emerald-300 bg-emerald-950 shadow-xl group">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={GRAND_FINAL_IMAGE.url}
              alt={GRAND_FINAL_IMAGE.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-60" />

            {/* Hotspots */}
            {ARCHITECTURAL_HOTSPOTS.map((spot) => {
              const isSelected = activeSpot?.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveSpot(spot)}
                  style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border transition-all duration-300 z-10 ${
                    isSelected
                      ? 'bg-amber-400 border-white text-emerald-950 scale-125 shadow-lg shadow-amber-400/50 ring-4 ring-amber-400/40 animate-pulse font-bold'
                      : 'bg-emerald-950/80 border-amber-400 text-amber-300 hover:scale-110 hover:bg-amber-400 hover:text-emerald-950'
                  }`}
                  title={spot.title}
                >
                  <Info className="w-4 h-4" />
                </button>
              );
            })}

            <button
              onClick={() => onOpenImageModal(GRAND_FINAL_IMAGE)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-emerald-950/80 border border-emerald-700 text-amber-300 hover:bg-amber-400 hover:text-emerald-950 transition-all shadow-xl"
              title="Xem ảnh phóng to"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
