import React, { useRef } from 'react';
import { SECTION3_GRID_IMAGES, GRAND_FINAL_IMAGE } from '../data/bridgeData';
import { GalleryImage } from '../types';
import { ZoomIn } from 'lucide-react';

interface Section3Props {
  onOpenImageModal: (image: GalleryImage) => void;
}

export const Section3ConnectingBores: React.FC<Section3Props> = ({ onOpenImageModal }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="section-3" ref={sectionRef} className="pt-8 sm:pt-12 pb-20 bg-[#eef8f2] border-b border-emerald-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 6 hình (3 trên 3 dưới) nằm phía trên title [Nhịp cầu nối những...] */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {SECTION3_GRID_IMAGES.map((img) => (
              <div
                key={img.id}
                className="relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-emerald-300/90 bg-emerald-950 group shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <button
                  type="button"
                  onClick={() => onOpenImageModal(img)}
                  className="absolute top-2.5 right-2.5 p-1.5 sm:p-2 rounded-full bg-emerald-950/80 border border-emerald-700 text-amber-300 hover:bg-amber-400 hover:text-emerald-950 transition-all shadow-md z-10 cursor-pointer"
                  title="Phóng to hình ảnh"
                >
                  <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2
            className="font-display font-extrabold text-emerald-950 tracking-tight leading-tight text-balance"
            style={{ fontSize: 'clamp(2rem, 4vw + 0.5rem, 3.5rem)' }}
          >
            Nhịp cầu nối những bờ vui
          </h2>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-8 text-emerald-950 font-sans text-base sm:text-lg leading-relaxed">
        <div className="p-6 sm:p-8 rounded-3xl bg-white/95 border border-emerald-200 shadow-md space-y-6">
          <p className="text-justify sm:text-left font-medium">
            Sau hơn một năm nỗ lực thi công, cầu đi bộ đầu tiên bắc qua sông Sài Gòn đã dần lộ diện.
          </p>

          <p className="text-justify sm:text-left font-medium">
            Công trình không chỉ nối liền Bến Bạch Đằng với Khu đô thị mới Thủ Thiêm, mà còn kết nối những nhịp đập tự hào của trái tim hàng triệu người dân TPHCM.
          </p>

          <p className="text-justify sm:text-left font-medium">
            “Lá dừa nước" bằng thép khổng lồ ấy không chỉ là nét gạch nối giữa văn hóa truyền thống Nam bộ và tương lai hiện đại, mà còn là minh chứng cho một TPHCM năng động, nghĩa tình, luôn lấy người dân làm trung tâm của sự phát triển.
          </p>

          <p className="text-justify sm:text-left font-medium">
            Công trình dự kiến hoàn thành, đưa vào vận hành trước Tết Nguyên đán 2027, góp phần tăng cường kết nối giữa khu vực trung tâm TPHCM và Khu đô thị mới Thủ Thiêm, đồng thời mở thêm không gian sinh hoạt cộng đồng gắn với cảnh quan sông Sài Gòn.
          </p>
        </div>
      </div>

      {/* 1 Large Final Image (Clean image only, no hotspots) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div 
          onClick={() => onOpenImageModal(GRAND_FINAL_IMAGE)}
          className="relative rounded-3xl overflow-hidden border-2 border-emerald-300/90 bg-emerald-950 shadow-xl group cursor-pointer"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={GRAND_FINAL_IMAGE.url}
              alt={GRAND_FINAL_IMAGE.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
            />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenImageModal(GRAND_FINAL_IMAGE);
              }}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-emerald-950/80 border border-emerald-700 text-amber-300 hover:bg-amber-400 hover:text-emerald-950 transition-all shadow-xl cursor-pointer"
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
