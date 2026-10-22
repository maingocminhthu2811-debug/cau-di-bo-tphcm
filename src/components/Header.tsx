import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Compass, Share2, Sparkles } from 'lucide-react';
import { audioEngine } from '../utils/audioSynth';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const playing = audioEngine.toggle();
    setIsAudioPlaying(playing);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Cầu đi bộ bắc qua sông Sài Gòn — Điểm nhấn kiến trúc mới của TPHCM",
        text: "Hành trình kiến tạo công trình biểu tượng vòm thép lá dừa nước bắc qua sông Sài Gòn.",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const navLinks = [
    { id: 'hero', label: 'Tổng Quan' },
    { id: 'timeline-1', label: '01. Ý Tưởng Thiết Kế' },
    { id: 'timeline-2', label: '02. Hành Trình Vượt Sóng' },
    { id: 'section-3', label: '03. Bờ Vui TPHCM' }
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#f0fdf4]/95 backdrop-blur-xl border-b border-emerald-200/90 py-3 shadow-md shadow-emerald-900/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & Editorial Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 via-green-700 to-amber-500 p-0.5 flex items-center justify-center shadow-md shadow-emerald-600/20">
            <div className="w-full h-full bg-[#f0fdf4] rounded-[10px] flex items-center justify-center">
              <Compass className="w-5 h-5 text-emerald-800 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-widest text-emerald-800 uppercase font-bold">
                SGGP • AURA DIGITAL
              </span>
              <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 border border-amber-500/40 text-amber-900 font-mono font-semibold">
                3D Studio
              </span>
            </div>
            <h1 className="text-sm font-bold text-emerald-950 tracking-tight font-display">
              Cầu Đi Bộ Sông Sài Gòn
            </h1>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 border border-emerald-200/90 rounded-full px-4 py-1.5 backdrop-blur-md shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-emerald-800 text-amber-300 shadow-md shadow-emerald-900/20'
                    : 'text-emerald-900 hover:text-emerald-950 hover:bg-emerald-100/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Actions (Audio Ambience & Share & Mobile menu) */}
        <div className="flex items-center gap-2">
          {/* River Ambience Audio Toggle */}
          <button
            onClick={toggleAudio}
            className={`px-3.5 py-1.5 rounded-full border text-xs font-mono font-medium flex items-center gap-2 transition-all duration-300 ${
              isAudioPlaying
                ? 'bg-amber-400 border-amber-500 text-amber-950 font-bold shadow-md shadow-amber-500/20 animate-pulse'
                : 'bg-white/90 border-emerald-300 text-emerald-900 hover:bg-emerald-100 hover:border-emerald-400'
            }`}
            title="Bật/Tắt âm thanh sóng sông Sài Gòn"
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-950" />
                <span className="hidden sm:inline">Âm Thanh Sông</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-emerald-700" />
                <span className="hidden sm:inline">Âm Thanh</span>
              </>
            )}
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="p-2 rounded-full bg-white/90 border border-emerald-300 text-emerald-900 hover:bg-emerald-800 hover:text-amber-300 transition-all relative shadow-sm"
            title="Chia sẻ tác phẩm"
          >
            <Share2 className="w-4 h-4" />
            {copied && (
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] bg-emerald-900 text-amber-300 px-2 py-0.5 rounded font-mono whitespace-nowrap shadow-md">
                Đã sao chép!
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white border border-emerald-300 text-emerald-900"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f0fdf4]/98 border-b border-emerald-200 px-4 py-4 space-y-2 backdrop-blur-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="w-full text-left px-4 py-3 rounded-xl bg-white border border-emerald-200 text-sm font-semibold text-emerald-950 hover:bg-emerald-800 hover:text-amber-300 transition-all flex items-center justify-between shadow-sm"
            >
              <span>{link.label}</span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
