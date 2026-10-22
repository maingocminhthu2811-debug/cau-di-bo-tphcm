import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#052e20] text-emerald-100 border-t border-emerald-900 py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Branding Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-emerald-900/80 pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-emerald-950 flex items-center justify-center font-mono font-extrabold text-xs shadow">
                SGGP
              </div>
              <span className="text-xs font-mono text-amber-300 font-bold tracking-widest uppercase">
                BÁO SÀI GÒN GIẢI PHÓNG Longform
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Cầu đi bộ bắc qua sông Sài Gòn — Điểm nhấn kiến trúc mới của TPHCM
            </h3>
            <p className="text-xs text-emerald-300 font-mono">
              AURA — 3D Visuals & Interactive Digital Experiences • 2026 Edition
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-emerald-900 border border-emerald-700 text-amber-300 hover:bg-amber-400 hover:text-emerald-950 transition-all shadow-lg flex items-center gap-2 text-xs font-mono font-bold"
            title="Trở về đầu trang"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Đầu trang</span>
          </button>
        </div>

        {/* Editorial Credit Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs font-sans">
          <div className="space-y-2">
            <p className="text-amber-300 font-bold uppercase font-mono tracking-wider text-[11px]">
              Cơ quan chủ quản
            </p>
            <p className="text-emerald-100 leading-relaxed font-medium">
              Báo Sài Gòn Giải Phóng (SGGP Online)
            </p>
            <p className="text-emerald-300 text-[11px]">
              Chuyên trang multimedia đồ họa 3D kiến trúc đô thị TPHCM.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-amber-300 font-bold uppercase font-mono tracking-wider text-[11px]">
              Thông tin dự án
            </p>
            <p className="text-emerald-100 font-medium">Chủ đầu tư / Tài trợ: Nutifood (1.000 Tỷ ĐT)</p>
            <p className="text-emerald-100 font-medium">Tư vấn thiết kế: Chodai - Takashi Niwa Architects</p>
            <p className="text-emerald-100 font-medium">Chế tạo & Lai dắt: Đại Dũng Shipyard</p>
          </div>

          <div className="space-y-2">
            <p className="text-amber-300 font-bold uppercase font-mono tracking-wider text-[11px]">
              Trải nghiệm kỹ thuật số
            </p>
            <p className="text-emerald-100 font-medium">Công nghệ 3D Studio & WebGL Canvas</p>
            <p className="text-emerald-100 font-medium">Audio Synthesizer sóng sông Sài Gòn</p>
            <p className="text-emerald-100 font-medium">Font tiếng Việt hiện đại Be Vietnam Pro</p>
          </div>

          <div className="space-y-2">
            <p className="text-amber-300 font-bold uppercase font-mono tracking-wider text-[11px]">
              Tiến độ vận hành
            </p>
            <p className="text-white font-bold">Khai thác: Trước Tết Nguyên đán 2027</p>
            <p className="text-emerald-300 text-[11px]">Kết nối Bến Bạch Đằng (Q.1) với KĐT Mới Thủ Thiêm.</p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-emerald-900/80 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-emerald-300 gap-4">
          <p>© 2026 Báo Sài Gòn Giải Phóng (SGGP). Tất cả quyền được bảo lưu.</p>
          <p className="flex items-center gap-1">
            Thiết kế bởi <span className="text-amber-300 font-bold">AURA Studio</span> với
            <Heart className="w-3 h-3 text-rose-400 fill-rose-400 inline" /> cho TPHCM
          </p>
        </div>
      </div>
    </footer>
  );
};
