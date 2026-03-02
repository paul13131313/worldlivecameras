import { useEffect, useState } from 'react';
import type { Camera } from '../data/cameras';
import { categoryLabels, categoryColors } from '../data/cameras';

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
      className="group cursor-pointer rounded-lg overflow-hidden bg-[#141414] border border-[#2a2a2a] hover:border-[#444] transition-all duration-300 hover:scale-[1.02]"
      onClick={() => onSelect(camera)}
    >
      <div className="relative aspect-video bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${camera.videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute inset-0 w-full h-full pointer-events-none"
          loading="lazy"
        />

        <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono">
          <span className="live-dot w-2 h-2 rounded-full bg-red-500 inline-block" />
          <span className="text-red-400 font-bold tracking-wider">LIVE</span>
        </div>

        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono text-neutral-300">
          {localTime}
        </div>
      </div>

      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-white truncate">
              {camera.flag} {camera.name}
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">{camera.country}</p>
          </div>
          <span className={`shrink-0 text-[10px] px-2 py-0.5 rounded-full font-medium ${categoryColors[camera.category]}`}>
            {categoryLabels[camera.category]}
          </span>
        </div>
      </div>
    </div>
  );
}
