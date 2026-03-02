import type { Category } from '../data/cameras';
import { categoryLabels } from '../data/cameras';

interface CategoryFilterProps {
  selected: Category | 'all';
  onChange: (cat: Category | 'all') => void;
}

const allCategories: (Category | 'all')[] = [
  'all', 'wildlife', 'aurora', 'ocean', 'mountain', 'city', 'zoo', 'scenic',
];

export function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {allCategories.map((cat) => {
        const isActive = selected === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`px-4 py-1.5 text-[11px] tracking-[0.2em] uppercase font-light transition-all duration-300 cursor-pointer border ${
              isActive
                ? 'border-white/40 text-white bg-white/5'
                : 'border-white/[0.06] text-white/25 hover:border-white/15 hover:text-white/50'
            }`}
          >
            {cat === 'all' ? 'All' : categoryLabels[cat]}
          </button>
        );
      })}
    </div>
  );
}
