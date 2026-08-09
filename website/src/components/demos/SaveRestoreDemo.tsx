import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu,
} from 'react-horizontal-scrolling-menu';

import { feedColors } from '../../lib/demo-data';
import { LeftArrow, RightArrow } from '../Arrows';
import { useDragToScroll } from '../useDragToScroll';

// Ports Position.source: onUpdate saves scrollLeft to sessionStorage,
// onInit writes it back — the offset survives an unmount/remount.

const STORAGE_KEY = 'rhsm-demo-position';

const CARDS = Array.from({ length: 14 }, (_, index) => ({
  id: `card-${index}`,
  color: feedColors[index % feedColors.length],
}));

export function SaveRestoreDemo() {
  const { dragProps } = useDragToScroll();
  const [mounted, setMounted] = React.useState(true);

  const savePosition = (api: publicApiType) => {
    const position = api.scrollContainer.current?.scrollLeft ?? 0;
    sessionStorage.setItem(STORAGE_KEY, String(position));
  };

  const restorePosition = (api: publicApiType) => {
    const node = api.scrollContainer.current;
    if (node) node.scrollLeft = +(sessionStorage.getItem(STORAGE_KEY) || 0);
  };

  return (
    <div className="example-demo">
      <div className="px-2 pb-4">
        <button
          type="button"
          className="btn btn-ghost"
          style={{ padding: '0.45rem 0.95rem', fontSize: '0.92rem' }}
          onClick={() => setMounted((current) => !current)}
        >
          {mounted ? 'Unmount the menu' : 'Mount it again'}
        </button>
      </div>
      {mounted ? (
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          onUpdate={savePosition}
          onInit={restorePosition}
          {...dragProps}
        >
          {CARDS.map((card, index) => (
            <Card
              itemId={card.id}
              key={card.id}
              color={card.color}
              index={index}
            />
          ))}
        </ScrollMenu>
      ) : (
        <p
          className="text-sm text-muted"
          style={{ minHeight: '12rem', display: 'grid', placeItems: 'center' }}
        >
          Unmounted — the menu&rsquo;s DOM and its scroll offset are gone.
        </p>
      )}
    </div>
  );
}

function Card({
  color,
  index,
}: {
  itemId: string;
  color: string;
  index: number;
}) {
  return (
    <div className="feed-card">
      <span className="num">#{String(index + 1).padStart(2, '0')}</span>
      <span className="bar" style={{ background: color }} aria-hidden />
    </div>
  );
}
