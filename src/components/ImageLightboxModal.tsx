import React, { useEffect } from 'react';
import { GalleryImage } from '../types';
import { X, MapPin, Calendar, Camera, Download } from 'lucide-react';

interface ImageLightboxModalProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/90 backdrop-blur-2xl animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 max-w-5xl w-full bg-emerald-950 border border-emerald-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header bar */}
        <div className="p-4 bg-emerald-950 border-b border-emerald-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="text-xs font-mono text-amber-300 font-bold">AURA LIGHTBOX VIEW</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-emerald-900 hover:bg-amber-400 hover:text-emerald-950 text-emerald-100 transition-colors"
            title="Đóng (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Frame */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] max-h-[60vh]">
          <img
            src={image.url}
            alt={image.alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Caption & Metadata Footer */}
        <div className="p-6 bg-emerald-950 border-t border-emerald-900 space-y-3">
          <p className="text-base sm:text-lg font-medium text-slate-100">{image.caption}</p>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300 pt-2 border-t border-emerald-900">
            <div className="flex flex-wrap items-center gap-4">
              {image.location && (
                <span className="flex items-center gap-1.5 text-amber-300 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {image.location}
                </span>
              )}

              {image.date && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  {image.date}
                </span>
              )}

              {image.photographer && (
                <span className="flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-emerald-400" />
                  {image.photographer}
                </span>
              )}
            </div>

            <a
              href={image.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-amber-400 text-emerald-950 font-bold hover:bg-amber-300 transition-all flex items-center gap-1.5 shadow"
            >
              <Download className="w-3.5 h-3.5" />
              Tải ảnh gốc
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
