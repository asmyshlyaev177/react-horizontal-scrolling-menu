import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

import { feedColors } from '../../lib/demo-data';
import { ChevronLeft, ChevronRight } from '../Icons';

// The story's arrows, ported: instead of scrollPrev/scrollNext (a full
// page), each click targets getPrevElement/getNextElement — the one item
// just outside the view — so the row advances a single card.

const CARDS = Array.from({ length: 12 }, (_, index) => ({
  id: `card-${index}`,
  color: feedColors[index % feedColors.length],
}));

export function OneItemScrollDemo() {
  return (
    <div className="example-demo">
      <ScrollMenu LeftArrow={StepLeftArrow} RightArrow={StepRightArrow}>
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

function StepLeftArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible('first', true);
  return (
    <button
      type="button"
      className="arrow-btn"
      disabled={isFirstItemVisible}
      onClick={() =>
        visibility.scrollToItem(visibility.getPrevElement(), 'smooth', 'start')
      }
      aria-label="Scroll one item left"
    >
      <ChevronLeft />
    </button>
  );
}

function StepRightArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible('last', false);
  return (
    <button
      type="button"
      className="arrow-btn"
      disabled={isLastItemVisible}
      onClick={() =>
        visibility.scrollToItem(visibility.getNextElement(), 'smooth', 'end')
      }
      aria-label="Scroll one item right"
    >
      <ChevronRight />
    </button>
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
