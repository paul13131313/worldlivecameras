import { useState, useEffect, useCallback, useRef } from 'react';
import type { ActiveCamera } from './data/cameras';
import { channels, getChannel } from './data/channels';
import type { ChannelId } from './data/channels';
import { CameraCard } from './components/CameraCard';
import type { SlotStatus } from './components/CameraCard';
import { ChannelBar } from './components/ChannelBar';
import { Modal } from './components/Modal';
import { CastButton } from './components/CastButton';
import { useCast } from './hooks/useCast';
import type { CastCamera } from './hooks/useCast';

const channelIds: ChannelId[] = channels.map((ch) => ch.id);

interface SlotInfo {
  status: SlotStatus;
  cameraName: string;
}

function App() {
  const [activeChannel, setActiveChannel] = useState<ChannelId>('earth');
  const [selected, setSelected] = useState<ActiveCamera | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [audioSlot, setAudioSlot] = useState<number | null>(null);
  const [showHealthModal, setShowHealthModal] = useState(false);

  // Health status: channelId -> Map(slot -> SlotInfo)
  const healthRef = useRef<Map<ChannelId, Map<number, SlotInfo>>>(new Map());
  const [healthCount, setHealthCount] = useState({ live: 0, total: 12 });

  // Cache: channelId -> Map(slot -> currentIndex)
  const cacheRef = useRef<Map<ChannelId, Map<number, number>>>(new Map());

  const { isAvailable: castAvailable, isConnected: castConnected, deviceName: castDevice, sendChannel } = useCast();

  const channel = getChannel(activeChannel);

  const groups = channel.groups;

  // チャンネルデータからCast用のカメラリストを生成
  const getCastCameras = useCallback((chId: ChannelId): CastCamera[] => {
    const ch = getChannel(chId);
    return ch.groups.slice(0, 4).map((g) => ({
      videoId: g.cameras[0]?.videoId ?? '',
      label: g.cameras[0]?.name ?? '',
    }));
  }, []);

  // Cast接続時・チャンネル変更時にReceiverへ送信
  useEffect(() => {
    if (castConnected) {
      sendChannel(activeChannel, getCastCameras(activeChannel));
    }
  }, [castConnected, activeChannel, sendChannel, getCastCameras]);

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

  // Listen for camera status events from CameraCard via CustomEvent
  useEffect(() => {
    const handler = (e: Event) => {
      const { slot, status, cameraName, channelId: eventChannel } = (e as CustomEvent).detail;
      if (eventChannel !== activeChannel) return;
      if (!healthRef.current.has(activeChannel)) {
        healthRef.current.set(activeChannel, new Map());
      }
      healthRef.current.get(activeChannel)!.set(slot, { status, cameraName });

      const channelHealth = healthRef.current.get(activeChannel)!;
      let live = 0;
      channelHealth.forEach((info) => {
        if (info.status === 'live' || info.status === 'stream') live++;
      });
      setHealthCount({ live, total: groups.length });
    };
    window.addEventListener('camera-status', handler);
    return () => window.removeEventListener('camera-status', handler);
  }, [activeChannel, groups.length]);

  // Recalculate health count when switching channels
  useEffect(() => {
    const channelHealth = healthRef.current.get(activeChannel);
    if (channelHealth) {
      let live = 0;
      channelHealth.forEach((info) => {
        if (info.status === 'live' || info.status === 'stream') live++;
      });
      setHealthCount({ live, total: groups.length });
    } else {
      setHealthCount({ live: 0, total: groups.length });
    }
  }, [activeChannel, groups.length]);

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

  // Keyboard handler: F (fullscreen), ← → (channel), 1/2/3 (direct), M (mute), H (health)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      // F key — fullscreen toggle (skip when modal open)
      if ((e.key === 'f' || e.key === 'F') && !selected && !showHealthModal) {
        e.preventDefault();
        toggleFullscreen();
        return;
      }

      // H key — health modal toggle
      if (e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        setShowHealthModal((prev) => !prev);
        return;
      }

      // Escape — close health modal
      if (e.key === 'Escape' && showHealthModal) {
        e.preventDefault();
        setShowHealthModal(false);
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
  }, [selected, showHealthModal, toggleFullscreen, activeChannel, switchChannel]);

  // Get health data for modal
  const getHealthData = useCallback(() => {
    const channelHealth = healthRef.current.get(activeChannel);
    if (!channelHealth) return [];
    return groups.map((group) => {
      const info = channelHealth.get(group.slot);
      return {
        slot: group.slot,
        status: info?.status ?? 'loading' as SlotStatus,
        cameraName: info?.cameraName ?? group.cameras[0]?.name ?? 'unknown',
        totalCandidates: group.cameras.length,
      };
    });
  }, [activeChannel, groups]);

  return (
    <div className="h-screen bg-black flex flex-col overflow-hidden">
      {/* Header + ChannelBar + Filter (hidden in fullscreen) */}
      {!isFullscreen && (
        <header className="shrink-0 pt-6 pb-4 text-center relative">
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide text-white italic">
            World Live Cameras
          </h1>
          <div className="absolute top-6 right-4">
            <CastButton isAvailable={castAvailable} isConnected={castConnected} deviceName={castDevice} />
          </div>
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
              channelId={activeChannel}
            />
          ))}
        </div>
      </main>

      {/* Health status counter + Fullscreen toggle button */}
      <div className="fixed bottom-3 right-3 z-50 flex items-center gap-1.5">
        <button
          onClick={() => setShowHealthModal(true)}
          className="bg-black/50 backdrop-blur-sm border border-white/10 hover:border-white/30 px-2 py-1 text-[9px] tracking-widest cursor-pointer transition-all flex items-center gap-1.5"
          title="Health Status (H)"
        >
          <span
            className={`w-1.5 h-1.5 rounded-full inline-block ${
              healthCount.live === healthCount.total
                ? 'bg-green-500'
                : healthCount.live >= healthCount.total * 0.7
                  ? 'bg-yellow-500'
                  : 'bg-red-500'
            }`}
          />
          <span className="text-white/50">
            {healthCount.live}/{healthCount.total}
          </span>
        </button>
        <button
          onClick={toggleFullscreen}
          className="bg-black/50 backdrop-blur-sm border border-white/10 hover:border-white/30 text-white/40 hover:text-white/80 px-2.5 py-1 text-[9px] tracking-widest uppercase cursor-pointer transition-all"
        >
          {isFullscreen ? '✕ EXIT' : '⛶ FULL'}
        </button>
      </div>
      {isFullscreen && (
        <div
          className={`fixed bottom-3 right-32 text-[10px] text-white/40 tracking-wider z-50 transition-opacity duration-700 ${
            showHint ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          Press F to exit
        </div>
      )}

      {/* Health Debug Modal */}
      {showHealthModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setShowHealthModal(false)}
        >
          <div
            className="bg-black/95 border border-white/10 p-5 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white/80 text-sm tracking-widest uppercase font-light">
                Health Status — {channel.emoji} {channel.label}
              </h2>
              <button
                onClick={() => setShowHealthModal(false)}
                className="text-white/30 hover:text-white/80 text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex items-center gap-3 mb-4 text-[10px] text-white/40">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" /> LIVE
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" /> STREAM
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 inline-block" /> CONNECTING
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 inline-block" /> OFFLINE
              </span>
            </div>

            <div className="space-y-1">
              {getHealthData().map((item) => (
                <div
                  key={item.slot}
                  className="flex items-center gap-2 py-1.5 px-2 border-b border-white/5 text-[10px]"
                >
                  <span className="text-white/20 w-4 text-right shrink-0">{item.slot}</span>
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      item.status === 'live'
                        ? 'bg-red-500'
                        : item.status === 'stream'
                          ? 'bg-blue-400'
                          : item.status === 'offline'
                            ? 'bg-gray-600'
                            : 'bg-yellow-500 animate-pulse'
                    }`}
                  />
                  <span
                    className={`flex-1 truncate ${
                      item.status === 'live' || item.status === 'stream'
                        ? 'text-white/70'
                        : 'text-white/30'
                    }`}
                  >
                    {item.cameraName}
                  </span>
                  <span className="text-white/20 text-[8px] tracking-wider uppercase shrink-0">
                    {item.status}
                  </span>
                  <span className="text-white/15 text-[8px] shrink-0">
                    ({item.totalCandidates})
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-[9px] text-white/20 tracking-wider">
              <p>LIVE: {healthCount.live} / {healthCount.total} slots</p>
              <p className="mt-1">Timeout: 10s connect, 5s state change</p>
              <p className="mt-1">Retry: 5min (HA) / 30min (normal)</p>
              <p className="mt-2 text-white/15">Press H to toggle this panel</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      <Modal camera={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export default App;
