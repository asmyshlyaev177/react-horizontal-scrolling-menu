import 'react-horizontal-scrolling-menu/dist/styles.css';

import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';
import { useDebounceCallback, useUnmount } from 'usehooks-ts';

// A testimonial carousel on native scrolling. CSS scroll-snap lands every
// swipe on a card and a CSS scroll-driven animation fans the neighbours
// out, so the browser draws the whole effect. JavaScript only tracks which
// card is centered, drives the arrows and dots through scrollToItem, and
// adds mouse drag — touch needs none, the rail is a real scroll container.

export function ScrollSnap() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  // NOTE: for drag by mouse
  const [dragManager] = React.useState(() => new DragDealer());

  // A drag writes scrollLeft directly, and a mandatory snap container snaps
  // every such write, so snapping is switched off for the gesture. It comes
  // back once the rail has settled: re-enabling it mid-glide jumps instead.
  const restoreSnap = useDebounceCallback((api: publicApiType) => {
    const rail = api.scrollContainer.current;
    if (rail && !dragManager.clicked) {
      rail.style.scrollSnapType = '';
    }
  }, 150);
  useUnmount(() => restoreSnap.cancel());

  const handleScroll = (api: publicApiType) => {
    setActiveIndex(nearestIndex(api));
    restoreSnap(api);
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

  // Released between cards: glide to the closest one. The debounce above
  // is armed here too, so a release that needs no glide still restores snap.
  const handleDragStop = (api: publicApiType) => () => {
    if (!dragManager.clicked) {
      return;
    }
    dragManager.dragStop();
    scrollToIndex(api, nearestIndex(api));
    restoreSnap(api);
  };

  return (
    <div className="reviews">
      <style>{styles}</style>
      <ScrollMenu
        LeftArrow={<Arrow label="Previous review" target={activeIndex - 1} />}
        RightArrow={<Arrow label="Next review" target={activeIndex + 1} />}
        Footer={<Dots activeIndex={activeIndex} />}
        scrollContainerClassName="reviews-rail"
        itemClassName="review-slot"
        onScroll={handleScroll}
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleDragStop}
        onMouseLeave={handleDragStop}
      >
        {REVIEWS.map((review, index) => (
          <Card
            itemId={review.id} // NOTE: itemId is required for track items
            key={review.id}
            review={review}
            active={index === activeIndex}
          />
        ))}
      </ScrollMenu>
    </div>
  );
}

export default ScrollSnap;

interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
}

const REVIEWS: Review[] = [
  {
    id: 'mia',
    name: 'Mia Chen',
    role: 'Product designer',
    rating: 5,
    quote:
      'Setup took an afternoon and the first report landed in my inbox the next morning. I have not opened the old spreadsheet since.',
  },
  {
    id: 'tomas',
    name: 'Tomás Reyes',
    role: 'Engineering manager',
    rating: 5,
    quote:
      'The weekly digest is the only email my team reads end to end. Short, specific, and it names the person who unblocked you.',
  },
  {
    id: 'aisha',
    name: 'Aisha Okafor',
    role: 'Founder',
    rating: 4,
    quote:
      'I wanted numbers I could defend in a board meeting. Every figure links back to the source, so nobody has to take my word for it.',
  },
  {
    id: 'jonas',
    name: 'Jonas Lindqvist',
    role: 'Data analyst',
    rating: 5,
    quote:
      'Exports are plain CSV with sane column names. That alone saved me a script I had been maintaining for two years.',
  },
  {
    id: 'priya',
    name: 'Priya Natarajan',
    role: 'Operations lead',
    rating: 5,
    quote:
      'Support answered a Sunday question in twenty minutes with a fix, not a ticket number. That is what I pay for.',
  },
  {
    id: 'lucas',
    name: 'Lucas Moreau',
    role: 'Freelance developer',
    rating: 4,
    quote:
      'The API does exactly what the docs say, and the docs are one page. I shipped the integration before lunch.',
  },
];

// Index of the card whose center is closest to the rail's center. Item
// wrappers are positioned inside the rail, so offsetLeft and scrollLeft
// share one coordinate space.
function nearestIndex(api: publicApiType): number {
  const rail = api.scrollContainer.current;
  if (!rail) {
    return 0;
  }
  const middle = rail.scrollLeft + rail.clientWidth / 2;
  const distances = REVIEWS.map(({ id }) => {
    const slot = api.getItemElementById(id) as HTMLElement | null;
    return slot
      ? Math.abs(slot.offsetLeft + slot.offsetWidth / 2 - middle)
      : Infinity;
  });
  return distances.indexOf(Math.min(...distances));
}

function scrollToIndex(api: publicApiType, index: number) {
  const review = REVIEWS[index];
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
function Arrow({ label, target }: { label: string; target: number }) {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const direction = label.startsWith('Prev') ? 'left' : 'right';

  return (
    <button
      type="button"
      className="review-arrow"
      aria-label={label}
      disabled={!REVIEWS[target]}
      onClick={() => scrollToIndex(api, target)}
      data-testid={`${direction}-arrow`}
    >
      {direction === 'left' ? '‹' : '›'}
    </button>
  );
}

function Dots({ activeIndex }: { activeIndex: number }) {
  const api = React.useContext<publicApiType>(VisibilityContext);

  return (
    <div className="review-dots" role="group" aria-label="Reviews">
      {REVIEWS.map((review, index) => (
        <button
          type="button"
          key={review.id}
          className="review-dot"
          aria-label={`Review ${index + 1} of ${REVIEWS.length}`}
          aria-current={index === activeIndex}
          onClick={() => scrollToIndex(api, index)}
        />
      ))}
    </div>
  );
}

function Card({
  review,
  active,
}: {
  itemId: string;
  review: Review;
  active: boolean;
}) {
  const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

  return (
    <article className="review-card" data-active={active}>
      <header className="review-head">
        <span className="review-avatar" aria-hidden>
          {review.name[0]}
        </span>
        <span>
          <strong className="review-name">{review.name}</strong>
          <span className="review-role">{review.role}</span>
        </span>
      </header>
      <span
        className="review-stars"
        role="img"
        aria-label={`${review.rating} out of 5 stars`}
      >
        {stars}
      </span>
      <p className="review-quote">“{review.quote}”</p>
    </article>
  );
}

class DragDealer {
  clicked = false;
  position = 0;

  dragStart = (ev: React.MouseEvent) => {
    this.position = ev.clientX;
    this.clicked = true;
  };

  dragStop = () => {
    this.clicked = false;
  };

  dragMove = (ev: React.MouseEvent, cb: (delta: number) => void) => {
    const delta = this.position - ev.clientX;
    // 5px of slack keeps a plain click from nudging the rail.
    if (this.clicked && Math.abs(delta) > 5) {
      this.position = ev.clientX;
      cb(delta);
    }
  };
}

// Plain CSS on purpose: the snap and the fan are the stylesheet's job, and
// this block pastes into any project unchanged. --card, --gap and --tilt
// are the knobs; every other length derives from them.
const styles = `
.reviews {
  --card: min(280px, 80vw);
  --gap: 16px;
  --tilt: 8deg;
  --pitch: calc(var(--card) + var(--gap));
  font-family: system-ui, sans-serif;
}

.reviews-rail {
  scroll-snap-type: x mandatory;
  gap: var(--gap);
  /* Side padding equal to the space beside a centered card, so the first
     and last card can sit in the middle too. Bottom room is for the fan:
     tilted neighbours hang below the flat card. */
  padding: 16px calc(50% - var(--card) / 2) 40px;
  cursor: grab;
  user-select: none;
  scrollbar-width: none;
}
.reviews-rail::-webkit-scrollbar {
  display: none;
}

.review-slot {
  flex: none;
  scroll-snap-align: center;
}

.review-card {
  box-sizing: border-box;
  width: var(--card);
  height: 100%;
  padding: 20px;
  border: 1px solid #d9dee5;
  border-radius: 16px;
  background: #fff;
  color: #1c2430;
  box-shadow: 0 8px 24px rgba(20, 30, 50, 0.1);
  transform-origin: 50% 100%;
}
.review-card[data-active='true'] {
  border-color: #7c8aa5;
}

/* The tilt is a scroll-driven animation: the card's own position in the
   rail is the timeline. The keyframes span two card pitches either side of
   the rail's center, so the middle card is flat and each neighbour turns
   --tilt further, continuously, while you scroll. Without support the
   cards simply stay flat; the snap and the dots work regardless. */
@supports (animation-timeline: view()) {
  .review-card {
    animation: review-tilt linear both;
    animation-timeline: view(inline);
    animation-range: cover calc(50% - 2 * var(--pitch))
      cover calc(50% + 2 * var(--pitch));
  }
}
@keyframes review-tilt {
  from {
    transform: translateY(24px) rotate(calc(2 * var(--tilt))) scale(0.88);
  }
  50% {
    transform: none;
  }
  to {
    transform: translateY(24px) rotate(calc(-2 * var(--tilt))) scale(0.88);
  }
}
@media (prefers-reduced-motion: reduce) {
  .review-card {
    animation: none;
  }
}

.review-head {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 12px;
}
.review-avatar {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2f6df6;
  color: #fff;
  font-weight: 700;
}
.review-name,
.review-role {
  display: block;
  font-size: 14px;
  line-height: 1.3;
}
.review-role {
  color: #5b6675;
}
.review-stars {
  display: block;
  margin-top: 12px;
  color: #e2a400;
  letter-spacing: 1px;
}
.review-quote {
  margin: 16px 0 0;
  font-size: 15px;
  line-height: 1.5;
}

/* Arrows float over the rail rather than sit beside it, so the rail spans
   the full width and its 50% padding centers the edge cards exactly. */
.reviews .react-horizontal-scrolling-menu--inner-wrapper {
  position: relative;
}
.reviews .react-horizontal-scrolling-menu--arrow-left,
.reviews .react-horizontal-scrolling-menu--arrow-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}
.reviews .react-horizontal-scrolling-menu--arrow-left {
  left: 8px;
}
.reviews .react-horizontal-scrolling-menu--arrow-right {
  right: 8px;
}
.review-arrow {
  width: 36px;
  height: 36px;
  border: 1px solid #d9dee5;
  border-radius: 50%;
  background: #fff;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
}
.review-arrow:disabled {
  opacity: 0.3;
  cursor: default;
}

.review-dots {
  display: flex;
  justify-content: center;
  padding-top: 8px;
}
/* A 24px hit target (WCAG 2.5.8) drawing a 10px dot. */
.review-dot {
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
}
.review-dot::before {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #c7ced8;
}
.review-dot[aria-current='true']::before {
  background: #2f6df6;
}
`;
