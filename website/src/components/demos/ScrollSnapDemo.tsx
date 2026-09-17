import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

import { type Review, reviews } from '../../lib/demo-data';
import { DragManager } from '../DragManager';
import { ChevronLeft, ChevronRight, Star } from '../Icons';

// The scroll-snap recipe on the published package. The snap and the fan are
// CSS (`.snap-demo` in app.css); JavaScript tracks the centered card for
// the dots and arrows, steps with scrollToItem, and adds mouse drag.

export function ScrollSnapDemo() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [dragManager] = React.useState(() => new DragManager());

  // A mandatory snap container snaps every scrollLeft write, so snapping is
  // off for the gesture and returns 150ms after the rail last moved:
  // re-enabling it mid-glide jumps to the snap point instead of gliding.
  const snapTimer = React.useRef(0);
  const restoreSnapWhenSettled = (api: publicApiType) => {
    window.clearTimeout(snapTimer.current);
    snapTimer.current = window.setTimeout(() => {
      const rail = api.scrollContainer.current;
      if (rail && !dragManager.clicked) {
        rail.style.scrollSnapType = '';
      }
    }, 150);
  };
  React.useEffect(() => () => window.clearTimeout(snapTimer.current), []);

  const handleScroll = (api: publicApiType) => {
    setActiveIndex(nearestIndex(api));
    restoreSnapWhenSettled(api);
  };

  const handleDragStart = (api: publicApiType) => (ev: React.MouseEvent) => {
    const rail = api.scrollContainer.current;
    if (rail) {
      rail.style.scrollSnapType = 'none';
    }
    dragManager.dragStart(ev);
  };

  const handleDrag = (api: publicApiType) => (ev: React.MouseEvent) =>
    dragManager.dragMove(ev, (delta) => {
      const rail = api.scrollContainer.current;
      if (rail) {
        rail.scrollLeft += delta;
      }
    });

  // Released between cards: glide to the closest one. The timer is armed
  // here too, so a release that needs no glide still restores snap.
  const handleDragStop = (api: publicApiType) => () => {
    if (!dragManager.clicked) {
      return;
    }
    dragManager.dragStop();
    scrollToIndex(api, nearestIndex(api));
    restoreSnapWhenSettled(api);
  };

  return (
    <div className="snap-demo">
      <ScrollMenu
        LeftArrow={<Arrow direction="left" target={activeIndex - 1} />}
        RightArrow={<Arrow direction="right" target={activeIndex + 1} />}
        Footer={<Dots activeIndex={activeIndex} />}
        onScroll={handleScroll}
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleDragStop}
        onMouseLeave={handleDragStop}
      >
        {reviews.map((review, index) => (
          <ReviewCard
            key={review.id}
            itemId={review.id}
            review={review}
            active={index === activeIndex}
          />
        ))}
      </ScrollMenu>
    </div>
  );
}

// Index of the card whose center is closest to the rail's center. Item
// wrappers are positioned inside the rail, so offsetLeft and scrollLeft
// share one coordinate space.
function nearestIndex(api: publicApiType): number {
  const rail = api.scrollContainer.current;
  if (!rail) {
    return 0;
  }
  const middle = rail.scrollLeft + rail.clientWidth / 2;
  const distances = reviews.map(({ id }) => {
    const slot = api.getItemElementById(id) as HTMLElement | null;
    return slot
      ? Math.abs(slot.offsetLeft + slot.offsetWidth / 2 - middle)
      : Infinity;
  });
  return distances.indexOf(Math.min(...distances));
}

function scrollToIndex(api: publicApiType, index: number) {
  const review = reviews[index];
  if (!review) {
    return;
  }
  const slot = api.getItemElementById(review.id);
  if (slot) {
    api.scrollToItem(slot, 'smooth', 'center');
  }
}

// Arrows step one card, not one page: the target is the neighbour of the
// centered card, and the arrow is disabled when there is none.
function Arrow({
  direction,
  target,
}: {
  direction: 'left' | 'right';
  target: number;
}) {
  const api = React.useContext<publicApiType>(VisibilityContext);

  return (
    <button
      type="button"
      className="arrow-btn"
      aria-label={direction === 'left' ? 'Previous review' : 'Next review'}
      disabled={!reviews[target]}
      onClick={() => scrollToIndex(api, target)}
    >
      {direction === 'left' ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
}

function Dots({ activeIndex }: { activeIndex: number }) {
  const api = React.useContext<publicApiType>(VisibilityContext);

  return (
    <div className="snap-dots" role="group" aria-label="Reviews">
      {reviews.map((review, index) => (
        <button
          type="button"
          key={review.id}
          className="snap-dot"
          aria-label={`Review ${index + 1} of ${reviews.length}`}
          aria-current={index === activeIndex}
          onClick={() => scrollToIndex(api, index)}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  active,
}: {
  itemId: string;
  review: Review;
  active: boolean;
}) {
  return (
    <article className="snap-card" data-active={active}>
      <div className="snap-card-head">
        <span
          className="snap-avatar"
          style={{
            background: review.color,
            color: review.darkText
              ? 'oklch(0.22 0.02 60)'
              : 'oklch(0.99 0.005 15)',
          }}
          aria-hidden
        >
          {review.name[0]}
        </span>
        <span>
          <strong className="snap-name">{review.name}</strong>
          <span className="snap-role">{review.role}</span>
        </span>
      </div>
      <span
        className="snap-stars"
        role="img"
        aria-label={`${review.rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={i < review.rating ? 'is-filled' : undefined}
          />
        ))}
      </span>
      <p className="snap-quote">“{review.quote}”</p>
    </article>
  );
}
