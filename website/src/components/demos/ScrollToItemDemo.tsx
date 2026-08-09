import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu,
} from 'react-horizontal-scrolling-menu';

import { cities } from '../../lib/demo-data';
import { LeftArrow, RightArrow } from '../Arrows';
import { useDragToScroll } from '../useDragToScroll';
import { CityCard } from './LoopParts';

// Ports ScrollToItem.source: onInit hands over the api once items are
// rendered and measured, so scrollToItem works right away — no timers.

const TARGET = cities[5]; // Quito, well past the first page

export function ScrollToItemDemo() {
  const { dragProps } = useDragToScroll();
  const [menuKey, setMenuKey] = React.useState(0);

  const scrollToTarget = (api: publicApiType) => {
    const item = api.getItemElementById(TARGET.id);
    if (item) api.scrollToItem(item, 'auto', 'start');
  };

  return (
    <div className="example-demo">
      <div className="flex flex-wrap items-center gap-3 px-2 pb-4">
        <button
          type="button"
          className="btn btn-ghost"
          style={{ padding: '0.45rem 0.95rem', fontSize: '0.92rem' }}
          onClick={() => setMenuKey((current) => current + 1)}
        >
          Remount the menu
        </button>
        <span className="text-sm text-muted">
          onInit scrolls straight to{' '}
          <span className="font-mono">{TARGET.id}</span>
        </span>
      </div>
      <ScrollMenu
        key={menuKey}
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onInit={scrollToTarget}
        {...dragProps}
      >
        {cities.map((city) => (
          <CityCard itemId={city.id} key={city.id} city={city} />
        ))}
      </ScrollMenu>
    </div>
  );
}
