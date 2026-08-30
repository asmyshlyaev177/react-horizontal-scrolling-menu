import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import { cities, type City } from '../../lib/demo-data';
import { LeftArrow, RightArrow } from '../Arrows';
import { useDragToScroll } from '../useDragToScroll';

// Storefront category rail: round department tiles, edge-aware arrows.

export function CategoryRailDemo() {
  const { dragProps } = useDragToScroll();
  return (
    <div className="gallery-demo">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} {...dragProps}>
        {cities.map((city) => (
          <CategoryTile itemId={city.id} key={city.id} city={city} />
        ))}
      </ScrollMenu>
    </div>
  );
}

function CategoryTile({ itemId, city }: { itemId: string; city: City }) {
  return (
    <div
      className="flex w-20 shrink-0 flex-col items-center gap-2 select-none"
      aria-label={itemId}
    >
      <span
        className={`flex size-16 items-center justify-center rounded-full text-xl font-bold ${city.darkText ? 'text-black/80' : 'text-white/90'}`}
        style={{ background: city.color }}
      >
        {city.name[0]}
      </span>
      <span className="text-xs font-medium text-muted">{city.name}</span>
    </div>
  );
}
