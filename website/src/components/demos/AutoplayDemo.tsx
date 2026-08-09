import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu,
} from 'react-horizontal-scrolling-menu';

import { cities } from '../../lib/demo-data';
import { DragManager } from '../DragManager';
import { useInfiniteLoop } from '../useInfiniteLoop';
import { CityCard, LoopLeftArrow, LoopRightArrow } from './LoopParts';

// The autoplay recipe from the Storybook, running on the published
// package: the row cloned onto both ends, one scrollLeft jump when
// scrolling settles inside a clone zone, and a timer calling
// scrollNext(). Public API only — no library changes.

const INTERVAL_MS = 3000;

// The clone zones must cover a viewport plus the two slots a forward step
// can land past the seam; with ten items, a full copy per side clears
// every width this rail renders at.
const CLONES_PER_SIDE = cities.length;

const IDS = cities.map((city) => city.id);
const cityById = Object.fromEntries(cities.map((city) => [city.id, city]));

export function AutoplayDemo() {
  const [dragManager] = React.useState(() => new DragManager());
  const [dragging, setDragging] = React.useState(false);
  const apiRef = React.useRef<publicApiType | null>(null);

  const loop = useInfiniteLoop(IDS, CLONES_PER_SIDE);

  const reducedMotion = useReducedMotion();
  const [userPaused, setUserPaused] = React.useState(false);
  const [hoverPaused, setHoverPaused] = React.useState(false);
  const [focusPaused, setFocusPaused] = React.useState(false);
  const active = !userPaused && !hoverPaused && !focusPaused && !reducedMotion;

  useInterval(
    () => {
      const api = apiRef.current;
      // A hidden tab freezes IntersectionObserver, and a rail scrolled off
      // the page shouldn't move — skip the tick, don't scroll blind.
      if (!api?.menuVisible.current || document.visibilityState !== 'visible') {
        return;
      }
      api.scrollNext();
    },
    active ? INTERVAL_MS : null,
  );

  // normalize() inside the drag keeps the seam crossable mid-gesture.
  const handleDrag =
    ({ scrollContainer }: publicApiType) =>
    (ev: React.MouseEvent) =>
      dragManager.dragMove(ev, (delta) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += delta;
          loop.normalize();
        }
      });

  return (
    <div className="autoplay-demo">
      <div className="autoplay-bar">
        {/* Outside the hover wrapper, so clicking it can't hover-pause. */}
        <button
          type="button"
          className="btn btn-ghost autoplay-toggle"
          aria-pressed={userPaused}
          onClick={() => setUserPaused((paused) => !paused)}
        >
          {userPaused ? 'Play' : 'Pause'}
        </button>
      </div>
      <div
        className="autoplay-rail"
        onMouseEnter={() => setHoverPaused(true)}
        onMouseLeave={() => {
          dragManager.dragStop();
          setDragging(false);
          setHoverPaused(false);
        }}
        onTouchStart={() => setHoverPaused(true)}
        onTouchEnd={() => setHoverPaused(false)}
        onFocusCapture={() => setFocusPaused(true)}
        onBlurCapture={() => setFocusPaused(false)}
      >
        <ScrollMenu
          {...loop.menuProps}
          LeftArrow={LoopLeftArrow}
          RightArrow={LoopRightArrow}
          apiRef={apiRef}
          onMouseDown={() => (ev: React.MouseEvent) => {
            dragManager.dragStart(ev);
            setDragging(true);
          }}
          onMouseUp={() => () => {
            dragManager.dragStop();
            setDragging(false);
          }}
          onMouseMove={handleDrag}
          scrollContainerClassName={dragging ? 'dragging' : ''}
        >
          {loop.slides.map(({ itemId, realId }) => (
            <CityCard itemId={itemId} key={itemId} city={cityById[realId]} />
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
}

function useInterval(callback: () => void, delayMs: number | null) {
  const saved = React.useRef(callback);
  React.useEffect(() => {
    saved.current = callback;
  }, [callback]);

  // `null` removes the timer, so resuming starts a fresh, full interval.
  React.useEffect(() => {
    if (delayMs === null) {
      return;
    }
    const id = window.setInterval(() => saved.current(), delayMs);
    return () => window.clearInterval(id);
  }, [delayMs]);
}

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

const subscribeReducedMotion = (onChange: () => void) => {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
};

function useReducedMotion() {
  // Server snapshot false: autoplay assumes motion is fine until the
  // client media query says otherwise.
  return React.useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}
