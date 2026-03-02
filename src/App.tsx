import { useState, useMemo, useEffect, useCallback } from 'react';
import { cameraGroups } from './data/cameras';
import type { Category, ActiveCamera } from './data/cameras';
import { CameraCard } from './components/CameraCard';
import { CategoryFilter } from './components/CategoryFilter';
import { Modal } from './components/Modal';

function App() {
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const [selected, setSelected] = useState<ActiveCamera | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const filtered = useMemo(
    () => filter === 'all' ? cameraGroups : cameraGroups.filter((g) => g.category === filter),
    [filter]
  );

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  // Listen for fullscreenchange (handles both F key and ESC)
  useEffect(() => {
    const handleChange = () => {
      const fs = !!document.fullscreenElement;
      setIsFullscreen(fs);
      if (fs) {
        setShowHint(true);
      }
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

  // F key handler
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== 'f' && e.key !== 'F') return;
      // Ignore when modal is open
      if (selected) return;
      // Ignore when typing in input/textarea
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      e.preventDefault();
      toggleFullscreen();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [selected, toggleFullscreen]);

  return (
    <div className="h-screen bg-black flex flex-col overflow-hidden">
      {/* Header + Filter (hidden in fullscreen) */}
      {!isFullscreen && (
        <header className="shrink-0 pt-6 pb-4 text-center">
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide text-white italic">
            World Live Cameras
          </h1>
          <div className="mt-3 px-4">
            <CategoryFilter selected={filter} onChange={setFilter} />
          </div>
        </header>
      )}

      {/* Grid — fills remaining viewport */}
      <main className={`flex-1 min-h-0 ${isFullscreen ? 'p-0' : 'px-2 pb-2'}`}>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full auto-rows-fr ${isFullscreen ? 'gap-1' : 'gap-1.5'}`}>
          {filtered.map((group) => (
            <CameraCard key={group.slot} group={group} onSelect={setSelected} />
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
