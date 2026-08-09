import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import { feedColors } from '../../lib/demo-data';
import { LeftArrow, RightArrow } from '../Arrows';
import { useDragToScroll } from '../useDragToScroll';

// Drag-to-scroll, the site-wide wiring: DragManager + the curried mouse
// props. Item clicks still work — dragMove only kicks in past a 5px
// threshold, and dragStop keeps `dragging` readable for one more frame.

const CARDS = Array.from({ length: 14 }, (_, index) => ({
  id: `card-${index}`,
  color: feedColors[index % feedColors.length],
}));

export function MouseDragDemo() {
  const { dragProps } = useDragToScroll();

  return (
    <div className="example-demo">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} {...dragProps}>
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
