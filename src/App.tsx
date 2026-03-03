import { useState, useEffect, useCallback, useRef } from 'react';
import type { ActiveCamera } from './data/cameras';
import { channels, getChannel } from './data/channels';
import type { ChannelId } from './data/channels';
import { CameraCard } from './components/CameraCard';
import { ChannelBar } from './components/ChannelBar';
import { Modal } from './components/Modal';

const channelIds: ChannelId[] = channels.map((ch) => ch.id);

function App() {
  const [activeChannel, setActiveChannel] = useState<ChannelId>('earth');
  const [selected, setSelected] = useState<ActiveCamera | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [audioSlot, setAudioSlot] = useState<number | null>(null);

  // Cache: channelId -> Map(slot -> currentIndex)
  const cacheRef = useRef<Map<ChannelId, Map<number, number>>>(new Map());

  const channel = getChannel(activeChannel);

  const groups = channel.groups;

  // Get cached index for a slot
  const getCachedIndex = useCallback((slot: number): number => {
    const channelCache = cacheRef.current.get(activeChannel);
    return channelCache?.get(slot) ?? 0;
  }, [activeChannel]);

  // Update cache when a card switches to next candidate
  const handleIndexChange = useCallback((slot: number, index: number) => {
    if (!cacheRef.current.has(activeChannel)) {
      cacheRef.current.set(activeChannel, new Map());
    }
    cacheRef.current.get(activeChannel)!.set(slot, index);
  }, [activeChannel]);

  // Channel switching (instant)
  const switchChannel = useCallback((newChannel: ChannelId) => {
    if (newChannel === activeChannel) return;
    setAudioSlot(null);
    setActiveChannel(newChannel);
  }, [activeChannel]);

  // Audio toggle: click same slot to unmute/mute, click different slot to switch
  const handleAudioToggle = useCallback((slot: number) => {
    setAudioSlot((prev) => (prev === slot ? null : slot));
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  // Listen for fullscreenchange
  useEffect(() => {
    const handleChange = () => {
      const fs = !!document.fullscreenElement;
      setIsFullscreen(fs);
      if (fs) setShowHint(true);
    };
    document.addEventListener('fullscreenchange', handleChange);
    return () => document.removeEventListener('fullscreenchange', handleChange);
  }, []);

  // Fade out hint after 3 seconds
  useEffect(() => {
    if (!showHint) return;
    const id = setTimeout(() => setShowHint(false), 3000);
    return () => clearTimeout(id);
  }, [showHint]);

  // Keyboard handler: F (fullscreen), ← → (channel), 1/2/3 (direct), M (mute)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      // F key — fullscreen toggle (skip when modal open)
      if ((e.key === 'f' || e.key === 'F') && !selected) {
        e.preventDefault();
        toggleFullscreen();
        return;
      }

      // M key — mute all
      if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        setAudioSlot(null);
        return;
      }

      // ← → arrow keys — channel navigation
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        const currentIdx = channelIds.indexOf(activeChannel);
        let nextIdx: number;
        if (e.key === 'ArrowLeft') {
          nextIdx = currentIdx > 0 ? currentIdx - 1 : channelIds.length - 1;
        } else {
          nextIdx = currentIdx < channelIds.length - 1 ? currentIdx + 1 : 0;
        }
        switchChannel(channelIds[nextIdx]);
        return;
      }

      // Number keys 1-3 — direct channel selection
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= channelIds.length) {
        e.preventDefault();
        switchChannel(channelIds[num - 1]);
        return;
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [selected, toggleFullscreen, activeChannel, switchChannel]);

  return (
    <div className="h-screen bg-black flex flex-col overflow-hidden">
      {/* Header + ChannelBar + Filter (hidden in fullscreen) */}
      {!isFullscreen && (
        <header className="shrink-0 pt-6 pb-4 text-center">
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide text-white italic">
            World Live Cameras
          </h1>
          <div className="mt-3 px-4">
            <ChannelBar active={activeChannel} onChange={switchChannel} />
          </div>
        </header>
      )}

      {/* Floating ChannelBar in fullscreen */}
      {isFullscreen && (
        <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 opacity-0 hover:opacity-100 transition-opacity duration-500">
          <ChannelBar active={activeChannel} onChange={switchChannel} />
        </div>
      )}

      {/* Grid — fills remaining viewport */}
      <main className={`flex-1 min-h-0 ${isFullscreen ? 'p-0' : 'px-2 pb-2'}`}>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full auto-rows-fr ${isFullscreen ? 'gap-1' : 'gap-1.5'}`}
        >
          {groups.map((group) => (
            <CameraCard
              key={`${activeChannel}-${group.slot}`}
              group={group}
              onSelect={setSelected}
              initialIndex={getCachedIndex(group.slot)}
              isAudioOn={audioSlot === group.slot}
              onAudioToggle={handleAudioToggle}
              onIndexChange={handleIndexChange}
            />
          ))}
        </div>
      </main>

      {/* Fullscreen toggle button + hint */}
      <button
        onClick={toggleFullscreen}
        className="fixed bottom-3 right-3 z-50 bg-black/50 backdrop-blur-sm border border-white/10 hover:border-white/30 text-white/40 hover:text-white/80 px-2.5 py-1 text-[9px] tracking-widest uppercase cursor-pointer transition-all"
      >
        {isFullscreen ? '✕ EXIT' : '⛶ FULL'}
      </button>
      {isFullscreen && (
        <div
          className={`fixed bottom-3 right-24 text-[10px] text-white/40 tracking-wider z-50 transition-opacity duration-700 ${
            showHint ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          Press F to exit
        </div>
      )}

      {/* Modal */}
      <Modal camera={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export default App;
