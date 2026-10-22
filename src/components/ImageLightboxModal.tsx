import React, { useEffect } from 'react';
import { GalleryImage } from '../types';
import { X } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Nút X ở góc phải */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-black/95 text-white hover:text-amber-400 border border-white/20 transition-all shadow-2xl cursor-pointer"
        title="Đóng (ESC)"
      >
        <X className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Chỉ hiển thị hình to */}
      <div className="relative z-10 max-w-[95vw] max-h-[92vh] flex items-center justify-center select-none">
        <img
          src={image.url}
          alt={image.alt || 'Hình ảnh phóng to'}
          decoding="async"
          className="max-w-full max-h-[92vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};
