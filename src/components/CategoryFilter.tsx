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
    <div className="flex flex-wrap gap-2 justify-center">
      {allCategories.map((cat) => {
        const isActive = selected === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
              isActive
                ? 'bg-white text-black'
                : 'bg-[#1e1e1e] text-neutral-400 hover:bg-[#2a2a2a] hover:text-neutral-200'
            }`}
          >
            {cat === 'all' ? 'ALL' : categoryLabels[cat]}
          </button>
        );
      })}
    </div>
  );
}
