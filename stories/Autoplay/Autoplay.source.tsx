import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';
import {
  useDebounceCallback,
  useInterval,
  useMediaQuery,
  useUnmount,
} from 'usehooks-ts';

// Autoplay on top of the InfiniteLoop recipe: a timer calls scrollNext()
// through apiRef, and the same useInfiniteLoop clone-and-teleport hook
// makes it endless. Pauses on hover, touch, focus and the Pause button,
// skips ticks in hidden tabs or when offscreen, and stays off under
// reduced motion (WCAG 2.2.2). The animation is the browser's native
// smooth scroll — `transitionDuration` has no effect with the default
// noPolyfill.

const CLONES_PER_SIDE = 6;

export function Autoplay({ interval = 2000 }: { interval?: number }) {
  // NOTE: for drag by mouse; the hover pause already covers dragging.
  const [dragManager] = React.useState(() => new DragDealer());

  const apiRef = React.useRef<publicApiType | null>(null);

  const loop = useInfiniteLoop(getItemIds());

  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)', {
    initializeWithValue: false,
  });
  const [userPaused, setUserPaused] = React.useState(false);
  const [hoverPaused, setHoverPaused] = React.useState(false);
  const [focusPaused, setFocusPaused] = React.useState(false);

  const active = !userPaused && !hoverPaused && !focusPaused && !reducedMotion;

  // normalize() inside the drag keeps the seam crossable mid-gesture.
  const handleDrag =
    ({ scrollContainer }: publicApiType) =>
    (ev: React.MouseEvent) =>
      dragManager.dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
          loop.normalize();
        }
      });

  // `null` removes the timer, so resuming starts a fresh, full interval.
  useInterval(
    () => {
      const api = apiRef.current;
      // A hidden tab freezes IntersectionObserver — skip, don't scroll blind.
      if (!api?.menuVisible.current || document.visibilityState !== 'visible') {
        return;
      }
      api.scrollNext();
    },
    active ? interval : null,
  );

  return (
    <div>
      <Toolbar>
        {/* Outside the hover wrapper, so clicking it can't hover-pause. */}
        <button
          type="button"
          data-testid="autoplay-toggle"
          onClick={() => setUserPaused((paused) => !paused)}
        >
          {userPaused ? 'Play' : 'Pause'}
        </button>
      </Toolbar>
      <NoScrollbar
        onMouseEnter={() => setHoverPaused(true)}
        onMouseLeave={() => {
          dragManager.dragStop();
          setHoverPaused(false);
        }}
        onTouchStart={() => setHoverPaused(true)}
        onTouchEnd={() => setHoverPaused(false)}
        onFocusCapture={() => setFocusPaused(true)}
        onBlurCapture={() => setFocusPaused(false)}
      >
        <ScrollMenu
          {...loop.menuProps}
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          apiRef={apiRef}
          onMouseDown={() => dragManager.dragStart}
          onMouseUp={() => dragManager.dragStop}
          onMouseMove={handleDrag}
        >
          {loop.slides.map(({ itemId, realId }) => (
            <Card
              realId={realId}
              itemId={itemId} // NOTE: must be unique — clones get a suffix
              key={itemId}
            />
          ))}
        </ScrollMenu>
      </NoScrollbar>
    </div>
  );
}
export default Autoplay;

// The loop, packaged: cloned slides, the pre-paint start jump and the
// seam teleport. Spread `menuProps` onto ScrollMenu, render `slides`,
// and call `normalize()` after moving scrollLeft by hand (e.g. inside a
// drag). `itemIds` are read once, on the first render.
function useInfiniteLoop(
  itemIds: string[],
  clonesPerSide: number = CLONES_PER_SIDE,
) {
  const [slides] = React.useState(() => getSlides(itemIds, clonesPerSide));

  // Receives the scroll container div itself.
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  // Seam markers come from the data — itemId can be anything.
  const firstRealId = slides[clonesPerSide].itemId;
  const firstRightCloneId = slides[slides.length - clonesPerSide].itemId;

  // Shift by one loop length when settled inside a clone zone. Pure
  // geometry and idempotent — visibility flags lag and must not gate it.
  const normalize = React.useCallback(() => {
    const el = containerRef.current;
    const first = el?.querySelector<HTMLElement>(`[data-key='${firstRealId}']`);
    const firstClone = el?.querySelector<HTMLElement>(
      `[data-key='${firstRightCloneId}']`,
    );
    if (!el || !first || !firstClone) {
      return;
    }

    const realStart = first.offsetLeft;
    const loopLength = firstClone.offsetLeft - realStart;
    const x = el.scrollLeft;

    if (x >= realStart + loopLength) {
      el.scrollLeft = x - loopLength;
    } else if (x < realStart) {
      el.scrollLeft = x + loopLength;
    }
  }, [firstRealId, firstRightCloneId]);

  // 'scrollend' fires when scrolling truly ends; debounce covers Safari.
  const settle = useDebounceCallback(normalize, 150);
  useUnmount(() => settle.cancel());

  const hasScrollEnd = typeof window !== 'undefined' && 'onscrollend' in window;
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el || !hasScrollEnd) {
      return;
    }
    el.addEventListener('scrollend', normalize);
    return () => el.removeEventListener('scrollend', normalize);
  }, [normalize, hasScrollEnd]);

  // Start on the first real item, before first paint.
  React.useLayoutEffect(() => {
    const el = containerRef.current;
    const first = el?.querySelector<HTMLElement>(`[data-key='${firstRealId}']`);
    if (el && first) {
      el.scrollLeft = first.offsetLeft;
    }
  }, [firstRealId]);

  return {
    slides,
    normalize,
    menuProps: {
      containerRef,
      onScroll: hasScrollEnd ? undefined : () => settle(),
    },
  };
}

const leftCloneId = (id: string) => `${id}-lc`;
const rightCloneId = (id: string) => `${id}-rc`;

// Clones render exactly like their twins; unique itemId is the only
// difference.
const getSlides = (ids: string[], clonesPerSide: number) => {
  const left = ids
    .slice(-clonesPerSide)
    .map((id) => ({ itemId: leftCloneId(id), realId: id }));
  const right = ids
    .slice(0, clonesPerSide)
    .map((id) => ({ itemId: rightCloneId(id), realId: id }));
  const real = ids.map((id) => ({ itemId: id, realId: id }));

  return [...left, ...real, ...right];
};

// An item is visible when any twin is: the raw per-element flag goes
// stale for a frame right after a teleport and would blink the header.
function useLoopItemVisible(realId: string) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const realVisible = visibility.useIsVisible(realId, true);
  const leftTwinVisible = visibility.useIsVisible(leftCloneId(realId), false);
  const rightTwinVisible = visibility.useIsVisible(rightCloneId(realId), false);
  return realVisible || leftTwinVisible || rightTwinVisible;
}

class DragDealer {
  clicked: boolean;
  dragging: boolean;
  position: number;
  resetId: number;

  constructor() {
    this.clicked = false;
    this.dragging = false;
    this.position = 0;
    this.resetId = 0;
  }

  public dragStart = (ev: React.MouseEvent) => {
    // A pending reset from the previous drag would kill this one.
    window.cancelAnimationFrame(this.resetId);
    this.position = ev.clientX;
    this.clicked = true;
  };

  public dragStop = () => {
    // Stop applying immediately; clear `dragging` a frame later so item
    // onClick (which fires after mouseup) still sees it and suppresses
    // the click.
    this.clicked = false;
    this.resetId = window.requestAnimationFrame(() => {
      this.dragging = false;
    });
  };

  public dragMove = (ev: React.MouseEvent, cb: (posDiff: number) => void) => {
    const newDiff = this.position - ev.clientX;

    if (this.clicked && Math.abs(newDiff) > 5) {
      this.dragging = true;
      this.position = ev.clientX;
      cb(newDiff);
    }
  };
}

const getId = (index: number) => `${'test'}${index}`;

const getItemIds = () =>
  Array(10)
    .fill(0)
    .map((_, ind) => getId(ind));

const Toolbar = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '8px',
});

const NoScrollbar = styled('div')({
  '& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar': {
    display: 'none',
  },
  '& .react-horizontal-scrolling-menu--scroll-container': {
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
  },
});

// Always enabled: the stock arrow hooks track the outermost items — here
// those are clones, so they'd flash disabled at the seam.
function LeftArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);

  return (
    <Arrow onClick={() => visibility.scrollPrev()} testId="left-arrow">
      Left
    </Arrow>
  );
}

function RightArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);

  return (
    <Arrow onClick={() => visibility.scrollNext()} testId="right-arrow">
      Right
    </Arrow>
  );
}

function Arrow({
  children,
  onClick,
  testId,
}: {
  children: React.ReactNode;
  onClick: VoidFunction;
  testId: string;
}) {
  return (
    <ArrowButton onClick={onClick} data-testid={testId}>
      {children}
    </ArrowButton>
  );
}
const ArrowButton = styled('button')({
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: '2px',
  userSelect: 'none',
  borderRadius: '6px',
  borderWidth: '1px',
});

function Card({ realId, itemId }: { realId: string; itemId: string }) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  // Raw flag of this element — kept on data-visible for the play tests.
  const ownVisible = visibility.useIsVisible(itemId, true);
  const isVisible = useLoopItemVisible(realId);

  return (
    <CardBody
      data-cy={itemId}
      data-visible={ownVisible}
      data-testid="card"
      className="card"
      visible={isVisible}
    >
      <div className="header">
        <div>{realId}</div>
        <div className="visible">visible: {JSON.stringify(isVisible)}</div>
      </div>
      <div className="background" />
    </CardBody>
  );
}
const CardBody = styled('div')<{ visible?: boolean }>((props) => ({
  border: '1px solid',
  display: 'inline-block',
  margin: '0 10px',
  width: '160px',
  userSelect: 'none',
  borderRadius: '8px',
  overflow: 'hidden',

  '& .header': {
    backgroundColor: 'white',
  },

  '& .visible': {
    backgroundColor: props.visible ? 'transparent' : 'gray',
  },

  '& .background': {
    backgroundColor: 'bisque',
    height: '200px',
  },
}));
