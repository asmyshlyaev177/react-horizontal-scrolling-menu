import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu,
} from 'react-horizontal-scrolling-menu';

import { feedColors } from '../../lib/demo-data';
import { LeftArrow, RightArrow } from '../Arrows';

// The story's usePreventBodyScroll, ported as-is. React registers wheel
// listeners as passive, so preventDefault inside onWheel is a no-op — the
// page lock needs a NATIVE non-passive listener on document, added on
// mouseenter and removed on mouseleave.

const CARDS = Array.from({ length: 12 }, (_, index) => ({
  id: `card-${index}`,
  color: feedColors[index % feedColors.length],
}));

function usePreventBodyScroll() {
  const preventDefault = React.useCallback((ev: Event) => {
    ev.preventDefault();
  }, []);

  const disableScroll = React.useCallback(() => {
    document.addEventListener('wheel', preventDefault, { passive: false });
  }, [preventDefault]);
  const enableScroll = React.useCallback(() => {
    document.removeEventListener('wheel', preventDefault, false);
  }, [preventDefault]);

  // Never leave the page locked if the demo unmounts mid-hover.
  React.useEffect(() => enableScroll, [enableScroll]);

  return { disableScroll, enableScroll };
}

function onWheel(apiObj: publicApiType, ev: React.WheelEvent): void {
  // Touchpads pan on X or send small Y deltas; stopPropagation keeps those
  // events away from the document listener so native panning survives. A
  // real mouse wheel is Y-only with coarse steps — page the row instead.
  const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isTouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else {
    apiObj.scrollPrev();
  }
}

export function PreventBodyScrollDemo() {
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <div
      className="example-demo"
      onMouseEnter={disableScroll}
      onMouseLeave={enableScroll}
    >
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onWheel={onWheel}
        // No drag wiring here — the wheel is the input, so no grab cursor.
        scrollContainerClassName="cursor-default!"
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
