import { useEffect } from 'react';
import type { Camera } from '../data/cameras';
import { categoryLabels } from '../data/cameras';

interface ModalProps {
  camera: Camera | null;
  onClose: () => void;
}

export function Modal({ camera, onClose }: ModalProps) {
  useEffect(() => {
    if (!camera) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [camera, onClose]);

  if (!camera) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-[95vw] max-w-[1400px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/20 hover:text-white/60 text-sm tracking-[0.3em] uppercase cursor-pointer transition-colors"
        >
          Close
        </button>

        <div className="aspect-video bg-black overflow-hidden border border-white/[0.06]">
          <iframe
            src={`https://www.youtube.com/embed/${camera.videoId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <h2 className="font-display text-xl font-normal text-white/90 italic">
              {camera.flag} {camera.name}
            </h2>
            <p className="text-[11px] text-white/25 mt-1 tracking-wider uppercase font-light">
              {camera.country} &mdash; {camera.channel}
            </p>
          </div>
          <span className="text-[10px] px-3 py-1 border border-white/10 text-white/30 tracking-[0.2em] uppercase font-light">
            {categoryLabels[camera.category]}
          </span>
        </div>
      </div>
    </div>
  );
}
