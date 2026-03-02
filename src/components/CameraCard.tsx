import { useEffect, useState } from 'react';
import type { Camera } from '../data/cameras';
import { categoryLabels } from '../data/cameras';

interface CameraCardProps {
  camera: Camera;
  onSelect: (camera: Camera) => void;
}

function useLocalTime(timezone: string) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      try {
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
        setTime(formatted);
      } catch {
        setTime('--:--:--');
      }
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timezone]);

  return time;
}

export function CameraCard({ camera, onSelect }: CameraCardProps) {
  const localTime = useLocalTime(camera.timezone);

  return (
    <div
      className="group relative cursor-pointer overflow-hidden bg-black border border-white/[0.06] hover:border-white/20 transition-all duration-500"
      onClick={() => onSelect(camera)}
    >
      {/* iframe fills the entire card */}
      <iframe
        src={`https://www.youtube.com/embed/${camera.videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1`}
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="absolute inset-0 w-full h-full pointer-events-none"
        loading="lazy"
      />

      {/* LIVE badge */}
      <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2 py-0.5 text-[9px] tracking-widest z-10">
        <span className="live-dot w-1.5 h-1.5 rounded-full bg-white inline-block" />
        <span className="text-white/80 font-medium">LIVE</span>
      </div>

      {/* Time */}
      <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-0.5 text-[9px] font-light text-white/50 tracking-wider z-10">
        {localTime}
      </div>

      {/* Bottom overlay — location info */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 pb-2 pt-6 z-10">
        <div className="flex items-end justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-display text-xs lg:text-sm font-normal text-white/90 truncate italic">
              {camera.flag} {camera.name}
            </h3>
            <p className="text-[8px] lg:text-[9px] text-white/30 mt-0.5 tracking-wider uppercase font-light">{camera.country}</p>
          </div>
          <span className="shrink-0 text-[7px] lg:text-[8px] px-1.5 py-0.5 border border-white/10 text-white/30 tracking-widest uppercase font-light">
            {categoryLabels[camera.category]}
          </span>
        </div>
      </div>
    </div>
  );
}
