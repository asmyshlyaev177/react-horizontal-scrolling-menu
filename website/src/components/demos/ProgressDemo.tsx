import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

import { feedColors } from '../../lib/demo-data';
import { LeftArrow, RightArrow } from '../Arrows';
import { useDragToScroll } from '../useDragToScroll';

// The Progress story's footer, distilled to a bar: subscribe to the items
// map's 'onUpdate', count visible items to get a page size, and fill the
// track to currentPage / totalPages.

const CARDS = Array.from({ length: 20 }, (_, index) => ({
  id: `card-${index}`,
  color: feedColors[index % feedColors.length],
}));

export function ProgressDemo() {
  const { dragProps } = useDragToScroll();

  return (
    <div className="example-demo">
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        Footer={ProgressBar}
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
    </div>
  );
}

function ProgressBar() {
  const { items } = React.useContext<publicApiType>(VisibilityContext);
  const [pages, setPages] = React.useState({ current: 0, total: 0 });

  React.useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const cb = () => {
      // onUpdate fires per IntersectionObserver callback — debounce it.
      clearTimeout(timer);
      timer = setTimeout(() => {
        const visible = items.getVisible();
        if (!visible.length) return;
        const perPage = visible.length;
        const lastIndex = Number(visible[visible.length - 1][1].index);
        setPages({
          current: Math.ceil(lastIndex / perPage),
          total: Math.ceil(items.size / perPage),
        });
      }, 150);
    };
    items.subscribe('onUpdate', cb);

    return () => {
      clearTimeout(timer);
      items.unsubscribe('onUpdate', cb);
    };
  }, [items]);

  const pct = pages.total ? Math.round((pages.current / pages.total) * 100) : 0;

  return (
    <div className="mt-3 flex items-center gap-3 px-1">
      <div
        className="h-1.5 flex-1 overflow-hidden rounded-md bg-border"
        role="progressbar"
        aria-label="Scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
      >
        <div
          className="h-full rounded-md bg-primary"
          style={{ width: `${pct}%`, transition: 'width 250ms ease' }}
        />
      </div>
      <span className="min-w-8 text-right font-mono text-xs text-muted">
        {pages.total ? `${pages.current}/${pages.total}` : ''}
      </span>
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
