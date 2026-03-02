import { useEffect } from 'react';
import type { Camera } from '../data/cameras';
import { categoryLabels, categoryColors } from '../data/cameras';

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-[95vw] max-w-[1400px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-neutral-400 hover:text-white text-2xl font-mono cursor-pointer"
        >
          ✕
        </button>

        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${camera.videoId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">
              {camera.flag} {camera.name}
            </h2>
            <p className="text-sm text-neutral-400">
              {camera.country} · {camera.channel}
            </p>
          </div>
          <span className={`text-xs px-3 py-1 rounded-full font-medium ${categoryColors[camera.category]}`}>
            {categoryLabels[camera.category]}
          </span>
        </div>
      </div>
    </div>
  );
}
