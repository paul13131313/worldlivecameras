import { channels } from '../data/channels';
import type { ChannelId } from '../data/channels';

interface ChannelBarProps {
  active: ChannelId;
  onChange: (id: ChannelId) => void;
}

export function ChannelBar({ active, onChange }: ChannelBarProps) {
  return (
    <div className="flex gap-2 justify-center">
      {channels.map((ch) => {
        const isActive = active === ch.id;
        return (
          <button
            key={ch.id}
            onClick={() => onChange(ch.id)}
            className={`px-4 py-1.5 text-[11px] tracking-[0.2em] uppercase font-light transition-all duration-300 cursor-pointer border ${
              isActive
                ? 'bg-white text-black border-white/60'
                : 'bg-transparent text-white/25 border-white/[0.06] hover:border-white/15 hover:text-white/50'
            }`}
          >
            {ch.emoji} {ch.label}
          </button>
        );
      })}
    </div>
  );
}
