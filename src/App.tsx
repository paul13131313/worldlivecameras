import { useState, useMemo } from 'react';
import { cameras } from './data/cameras';
import type { Category, Camera } from './data/cameras';
import { CameraCard } from './components/CameraCard';
import { CategoryFilter } from './components/CategoryFilter';
import { Modal } from './components/Modal';

function App() {
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const [selected, setSelected] = useState<Camera | null>(null);

  const filtered = useMemo(
    () => filter === 'all' ? cameras : cameras.filter((c) => c.category === filter),
    [filter]
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="pt-10 pb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-[0.3em] text-white font-mono">
          WORLD LIVE CAMERAS
        </h1>
        <p className="mt-2 text-sm text-neutral-500 tracking-widest uppercase">
          See the world. Right now.
        </p>
      </header>

      {/* Filter */}
      <div className="px-4 pb-8">
        <CategoryFilter selected={filter} onChange={setFilter} />
      </div>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((cam) => (
            <CameraCard key={cam.id} camera={cam} onSelect={setSelected} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1e1e1e] py-6 text-center text-xs text-neutral-600">
        <p>Powered by YouTube Live</p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          {cameras.map((cam) => (
            <a
              key={cam.id}
              href={cam.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              {cam.channel}
            </a>
          ))}
        </div>
      </footer>

      {/* Modal */}
      <Modal camera={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export default App;
