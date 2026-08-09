import * as React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import { feedColors } from '../../lib/demo-data';
import { LeftArrow, RightArrow } from '../Arrows';
import { useDragToScroll } from '../useDragToScroll';

// Desktop-first paint: the server renders arrows, then a
// matchMedia('(pointer: coarse)') effect unmounts them on touch devices,
// where native swiping already does the work. LeftArrow/RightArrow are
// optional props — pass undefined and the slot simply isn't rendered.

const CARDS = Array.from({ length: 14 }, (_, index) => ({
  id: `card-${index}`,
  color: feedColors[index % feedColors.length],
}));

export function MobileSwipeOnlyDemo() {
  const { dragProps } = useDragToScroll();
  // false = the SSR default: arrows in until a coarse pointer is confirmed.
  const [touchOnly, setTouchOnly] = React.useState(false);

  React.useEffect(() => {
    const query = window.matchMedia('(pointer: coarse)');
    const update = () => setTouchOnly(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return (
    <div className="example-demo">
      <ScrollMenu
        LeftArrow={touchOnly ? undefined : LeftArrow}
        RightArrow={touchOnly ? undefined : RightArrow}
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
