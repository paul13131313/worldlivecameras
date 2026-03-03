import { useEffect, useRef, useState, useCallback } from 'react';
import type { CameraGroup, ActiveCamera } from '../data/cameras';
import { categoryLabels } from '../data/cameras';

const INITIAL_PLAY_TIMEOUT = 20000;
const STATE_CHANGE_TIMEOUT = 10000;
const OFFLINE_RETRY_INTERVAL = 30 * 60 * 1000;
const OFFLINE_RETRY_INTERVAL_HIGH = 5 * 60 * 1000;

type SlotStatus = 'loading' | 'live' | 'stream' | 'switching' | 'offline';

interface CameraCardProps {
  group: CameraGroup;
  onSelect: (camera: ActiveCamera) => void;
  initialIndex?: number;
  isAudioOn?: boolean;
  onAudioToggle?: (slot: number) => void;
  onIndexChange?: (slot: number, index: number) => void;
}

function useLocalTime(timezone: string) {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => {
      try {
        setTime(
          new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          }).format(new Date())
        );
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

// Wait for YouTube IFrame API
function waitForYT(): Promise<void> {
  return new Promise((resolve) => {
    if ((window as any).YT?.Player) {
      resolve();
      return;
    }
    const prev = (window as any).onYouTubeIframeAPIReady;
    (window as any).onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };
  });
}

export function CameraCard({ group, onSelect, initialIndex, isAudioOn, onAudioToggle, onIndexChange }: CameraCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(initialIndex ?? 0);
  const [status, setStatus] = useState<SlotStatus>('loading');
  const [showTooltip, setShowTooltip] = useState(false);

  const statusRef = useRef<SlotStatus>('loading');
  const isLiveRef = useRef(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const camera = group.cameras[currentIndex];
  const localTime = useLocalTime(camera.timezone);
  const divId = `yt-player-${group.slot}`;

  const updateStatus = useCallback((s: SlotStatus) => {
    statusRef.current = s;
    setStatus(s);
  }, []);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const addTimer = useCallback((cb: () => void, ms: number) => {
    const id = setTimeout(cb, ms);
    timersRef.current.push(id);
    return id;
  }, []);

  const switchToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      if (next < group.cameras.length) {
        updateStatus('switching');
        onIndexChange?.(group.slot, next);
        return next;
      }
      updateStatus('offline');
      return prev;
    });
  }, [group.cameras.length, group.slot, updateStatus, onIndexChange]);

  // Main effect: create YT.Player
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cam = group.cameras[currentIndex];

    // Destroy previous player
    if (playerRef.current) {
      try { playerRef.current.destroy(); } catch { /* ignore */ }
      playerRef.current = null;
    }
    clearTimers();
    isLiveRef.current = false;
    updateStatus('loading');

    // Create iframe FIRST with allow="autoplay" (must be set before content loads)
    container.innerHTML = '';
    const origin = window.location.origin;
    const iframe = document.createElement('iframe');
    iframe.id = divId;
    iframe.src = `https://www.youtube.com/embed/${cam.videoId}?enablejsapi=1&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&origin=${origin}`;
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:none;pointer-events:none;';
    container.appendChild(iframe);

    let stateTimer: ReturnType<typeof setTimeout> | null = null;
    let destroyed = false;

    const attachPlayer = () => {
      if (destroyed) return;
      const YT = (window as any).YT;
      if (!YT?.Player) return;

      try {
        // Attach YT.Player to the EXISTING iframe (pass iframe ID)
        playerRef.current = new YT.Player(divId, {
          events: {
            onReady: (event: any) => {
              if (destroyed) return;
              event.target.mute();
              event.target.playVideo();
            },
            onStateChange: (event: any) => {
              if (destroyed) return;
              const state = event.data;
              if (state === 1 || state === 3) {
                // PLAYING or BUFFERING — mark as live/stream, clear switch timer
                if (state === 1) {
                  isLiveRef.current = true;
                  // Check if actual live broadcast via player duration
                  try {
                    const duration = event.target.getDuration();
                    // Live streams report 0 or very large duration
                    if (duration === 0 || duration > 86400) {
                      updateStatus('live');
                    } else {
                      updateStatus('stream');
                    }
                  } catch {
                    updateStatus('live');
                  }
                }
                clearTimers();
                if (stateTimer) { clearTimeout(stateTimer); stateTimer = null; }
              } else if (state === 2 && !isLiveRef.current) {
                // PAUSED but never played — autoplay blocked, retry
                try { event.target.playVideo(); } catch { /* ignore */ }
              } else if (state === 0 && isLiveRef.current) {
                // ENDED — stream ended, switch after delay
                if (!stateTimer) {
                  stateTimer = setTimeout(() => {
                    if (!destroyed) switchToNext();
                  }, STATE_CHANGE_TIMEOUT);
                }
              }
            },
            onError: () => {
              if (destroyed) return;
              if (!isLiveRef.current) {
                switchToNext();
              }
            },
          },
        });
      } catch {
        if (!destroyed) switchToNext();
      }
    };

    // Staggered start
    const stagger = (group.slot - 1) * 500;

    waitForYT().then(() => {
      if (!destroyed) {
        addTimer(attachPlayer, stagger);
      }
    });

    // Fallback: if not playing within timeout, switch
    addTimer(() => {
      if (!destroyed && !isLiveRef.current) switchToNext();
    }, INITIAL_PLAY_TIMEOUT + stagger);

    return () => {
      destroyed = true;
      clearTimers();
      if (stateTimer) clearTimeout(stateTimer);
      if (playerRef.current) {
        try { playerRef.current.destroy(); } catch { /* ignore */ }
        playerRef.current = null;
      }
    };
  }, [currentIndex, group.cameras, group.slot, divId, clearTimers, addTimer, switchToNext, updateStatus]);

  // Audio control: mute/unmute based on isAudioOn prop
  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    try {
      if (isAudioOn) {
        player.unMute();
        player.setVolume(100);
      } else {
        player.mute();
      }
    } catch { /* player not ready */ }
  }, [isAudioOn]);

  // Retry for OFFLINE slots (5min for high-availability, 30min for others)
  useEffect(() => {
    if (status !== 'offline') return;
    const interval = !!group.highAvailability ? OFFLINE_RETRY_INTERVAL_HIGH : OFFLINE_RETRY_INTERVAL;
    const id = setTimeout(() => {
      setCurrentIndex(0);
      updateStatus('loading');
    }, interval);
    return () => clearTimeout(id);
  }, [status, updateStatus, group.highAvailability]);

  const handleClick = () => {
    if (status === 'live' || status === 'stream') {
      // Single click toggles audio
      if (onAudioToggle) {
        onAudioToggle(group.slot);
      } else {
        // Fallback: open modal if no audio toggle handler
        onSelect({ ...camera, category: group.category });
      }
    }
  };

  const handleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (status === 'live' || status === 'stream') {
      onSelect({ ...camera, category: group.category });
    }
  };

  return (
    <div
      className={`group relative cursor-pointer overflow-hidden bg-black border transition-all duration-500 ${
        isAudioOn
          ? 'audio-glow'
          : status === 'offline'
            ? 'border-white/[0.03]'
            : status === 'stream'
              ? 'border-blue-400/10 hover:border-blue-400/30'
              : 'border-white/[0.06] hover:border-white/20'
      }`}
      onClick={handleClick}
    >
      {/* YT.Player container */}
      <div ref={containerRef} className="absolute inset-0" />

      {/* OFFLINE overlay with static noise */}
      {status === 'offline' && (
        <div className="absolute inset-0 static-noise flex flex-col items-center justify-center z-20">
          <span className="text-white/15 text-[10px] tracking-[0.4em] uppercase z-10">
            NO SIGNAL
          </span>
        </div>
      )}

      {/* Loading/Switching spinner */}
      {(status === 'loading' || status === 'switching') && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/40">
          <div className="slot-spinner" />
        </div>
      )}

      {/* Status badge (top-left) */}
      <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2 py-0.5 text-[9px] tracking-widest z-30">
        {status === 'live' ? (
          <>
            <span className="live-dot w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
            <span className="text-white/80 font-medium">LIVE</span>
          </>
        ) : status === 'stream' ? (
          <>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
            <span className="text-blue-300/80 font-medium">STREAM</span>
          </>
        ) : status === 'offline' ? (
          <>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600 inline-block" />
            <span className="text-white/30 font-medium">OFFLINE</span>
          </>
        ) : (
          <>
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80 inline-block animate-pulse" />
            <span className="text-white/50 font-medium">
              {status === 'switching' ? 'SWITCHING' : 'CONNECTING'}
            </span>
          </>
        )}
      </div>

      {/* Audio indicator */}
      {isAudioOn && (status === 'live' || status === 'stream') && (
        <div className="absolute top-2 left-20 z-30 text-[12px]">
          🔊
        </div>
      )}

      {/* Signal indicator with tooltip */}
      <div
        className="absolute top-2 right-14 z-30"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <span className="text-[10px] cursor-help opacity-40 hover:opacity-80 transition-opacity">
          📡
        </span>
        {showTooltip && (
          <div className="absolute top-5 right-0 bg-black/95 backdrop-blur-md border border-white/10 p-2.5 min-w-[200px] text-[9px] rounded-sm shadow-xl">
            <div className="text-white/40 text-[8px] tracking-widest uppercase mb-1.5">
              Candidates
            </div>
            {group.cameras.map((cam, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 py-0.5 ${
                  i === currentIndex ? 'text-white/90' : i < currentIndex ? 'text-white/20 line-through' : 'text-white/40'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    i === currentIndex
                      ? status === 'live' ? 'bg-red-500' : status === 'stream' ? 'bg-blue-400' : 'bg-yellow-500'
                      : i < currentIndex ? 'bg-gray-700' : 'bg-gray-600'
                  }`}
                />
                <span className="truncate">{cam.flag} {cam.name}</span>
                {i === currentIndex && (
                  <span className="ml-auto text-[7px] tracking-wider uppercase shrink-0 opacity-60">
                    {status}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Time (top-right) */}
      <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-0.5 text-[9px] font-light text-white/50 tracking-wider z-30">
        {localTime}
      </div>

      {/* Bottom overlay — location info */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 pb-2 pt-6 z-30 ${
          status === 'offline' ? 'opacity-40' : ''
        }`}
      >
        <div className="flex items-end justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-display text-xs lg:text-sm font-normal text-white/90 truncate italic">
              {camera.flag} {camera.name}
            </h3>
            <p className="text-[8px] lg:text-[9px] text-white/30 mt-0.5 tracking-wider uppercase font-light">
              {camera.country}
            </p>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[7px] lg:text-[8px] px-1.5 py-0.5 border border-white/10 text-white/30 tracking-widest uppercase font-light">
              {categoryLabels[group.category]}
            </span>
            {/* Expand button */}
            {(status === 'live' || status === 'stream') && (
              <button
                onClick={handleExpand}
                className="text-[10px] text-white/30 hover:text-white/70 transition-colors cursor-pointer px-1"
                title="Expand"
              >
                ⛶
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
