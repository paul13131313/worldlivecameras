import { useState, useMemo } from 'react';
import { cameraGroups } from './data/cameras';
import type { Category, ActiveCamera } from './data/cameras';
import { CameraCard } from './components/CameraCard';
import { CategoryFilter } from './components/CategoryFilter';
import { Modal } from './components/Modal';

function App() {
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const [selected, setSelected] = useState<ActiveCamera | null>(null);

  const filtered = useMemo(
    () => filter === 'all' ? cameraGroups : cameraGroups.filter((g) => g.category === filter),
    [filter]
  );

  return (
    <div className="h-screen bg-black flex flex-col overflow-hidden">
      {/* Header + Filter */}
      <header className="shrink-0 pt-6 pb-4 text-center">
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide text-white italic">
          World Live Cameras
        </h1>
        <div className="mt-3 px-4">
          <CategoryFilter selected={filter} onChange={setFilter} />
        </div>
      </header>

      {/* Grid — fills remaining viewport */}
      <main className="flex-1 min-h-0 px-2 pb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1.5 h-full auto-rows-fr">
          {filtered.map((group) => (
            <CameraCard key={group.slot} group={group} onSelect={setSelected} />
          ))}
        </div>
      </main>

      {/* Modal */}
      <Modal camera={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export default App;
