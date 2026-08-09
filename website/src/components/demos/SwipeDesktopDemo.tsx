import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu,
} from 'react-horizontal-scrolling-menu';

import { feedColors } from '../../lib/demo-data';
import { LeftArrow, RightArrow } from '../Arrows';

// The SwipeDesktop story's flick gesture: anchor the pointer on mousedown,
// track it on mousemove, and on release compare the distance — past 50px
// the menu pages with scrollNext/scrollPrev. The row itself never moves
// during the gesture; the motion is the library's smooth scroll.

const MIN_SWIPE_DISTANCE = 50;

const CARDS = Array.from({ length: 16 }, (_, index) => ({
  id: `card-${index}`,
  color: feedColors[index % feedColors.length],
}));

function useSwipe() {
  const pos = React.useRef({ start: 0, end: 0 });

  const onMouseDown = () => (ev: React.MouseEvent) => {
    // Re-anchor both so a leftover end from the last gesture can't count.
    pos.current = { start: ev.clientX, end: ev.clientX };
  };

  const onMouseMove = () => (ev: React.MouseEvent) => {
    pos.current.end = ev.clientX;
  };

  const onMouseUp = (apiObj: publicApiType) => () => {
    const horDiff = pos.current.end - pos.current.start;
    if (Math.abs(horDiff) < MIN_SWIPE_DISTANCE) return;
    if (horDiff < 0) {
      apiObj.scrollNext();
    } else {
      apiObj.scrollPrev();
    }
  };

  return { onMouseDown, onMouseMove, onMouseUp };
}

export function SwipeDesktopDemo() {
  const { onMouseDown, onMouseMove, onMouseUp } = useSwipe();

  return (
    <div className="example-demo">
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
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
