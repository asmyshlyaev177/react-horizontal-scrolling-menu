'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type SnapCarouselProps = Omit<
  React.ComponentProps<typeof ScrollMenu>,
  | 'LeftArrow'
  | 'RightArrow'
  | 'Footer'
  | 'itemClassName'
  | 'scrollContainerClassName'
  | 'onScroll'
  | 'onMouseDown'
  | 'onMouseMove'
  | 'onMouseUp'
  | 'onMouseLeave'
> & {
  /** Width of every card, any CSS length; padding and fan derive from it. */
  cardWidth?: string;
  /** Space between cards, any CSS length. */
  gap?: string;
  /** Degrees each neighbour turns, per card away from the center. */
  tilt?: number;
  className?: string;
};

/**
 * Snapping card carousel: CSS scroll-snap centers each card and a CSS
 * scroll-driven animation fans the neighbours out (flat where the platform
 * lacks it — Firefox still flags it). Arrows step one card, dots jump to
 * one, a mouse drag releases onto the closest card; touch is native.
 * Every child needs a unique `itemId` prop and fills its slot.
 * Docs: https://react-horizontal-scrolling-menu.dev/testimonial-carousel
 */
function SnapCarousel({
  cardWidth = 'min(17.5rem, 78vw)',
  gap = '1rem',
  tilt = 8,
  className,
  children,
  ...props
}: SnapCarouselProps) {
  const ids = React.Children.toArray(children).map(
    (child) => (child as React.ReactElement<{ itemId: string }>).props.itemId,
  );
  const [activeIndex, setActiveIndex] = React.useState(0);
  const drag = React.useRef({ position: 0, clicked: false });
  const snapTimer = React.useRef(0);

  // A mandatory snap container snaps every scrollLeft write, so snapping is
  // off for the gesture and returns 150ms after the rail last moved:
  // re-enabling it mid-glide jumps to the snap point instead of gliding.
  const restoreSnapWhenSettled = (api: publicApiType) => {
    window.clearTimeout(snapTimer.current);
    snapTimer.current = window.setTimeout(() => {
      const rail = api.scrollContainer.current;
      if (rail && !drag.current.clicked) rail.style.scrollSnapType = '';
    }, 150);
  };
  React.useEffect(() => () => window.clearTimeout(snapTimer.current), []);

  // Released between cards: glide to the closest one. The timer is armed
  // here too, so a release that needs no glide still restores snap.
  const dragStop = (api: publicApiType) => () => {
    if (!drag.current.clicked) return;
    drag.current.clicked = false;
    scrollToIndex(api, ids, nearestIndex(api, ids));
    restoreSnapWhenSettled(api);
  };

  return (
    <div
      className={cn(
        'relative max-w-full',
        // The library's stylesheet as utilities — a CSS side-effect import
        // is a TS error in fresh TypeScript 6 projects.
        '[&_.react-horizontal-scrolling-menu--inner-wrapper]:relative',
        '[&_.react-horizontal-scrolling-menu--inner-wrapper]:flex',
        '[&_.react-horizontal-scrolling-menu--inner-wrapper]:overflow-y-hidden',
        // Arrows float over the rail, so its 50% padding centers the edge
        // cards exactly.
        '[&_.react-horizontal-scrolling-menu--arrow-left]:absolute',
        '[&_.react-horizontal-scrolling-menu--arrow-left]:top-1/2',
        '[&_.react-horizontal-scrolling-menu--arrow-left]:left-1',
        '[&_.react-horizontal-scrolling-menu--arrow-left]:z-10',
        '[&_.react-horizontal-scrolling-menu--arrow-left]:-translate-y-1/2',
        '[&_.react-horizontal-scrolling-menu--arrow-right]:absolute',
        '[&_.react-horizontal-scrolling-menu--arrow-right]:top-1/2',
        '[&_.react-horizontal-scrolling-menu--arrow-right]:right-1',
        '[&_.react-horizontal-scrolling-menu--arrow-right]:z-10',
        '[&_.react-horizontal-scrolling-menu--arrow-right]:-translate-y-1/2',
        className,
      )}
      style={
        {
          '--card': cardWidth,
          '--gap': gap,
          '--tilt': `${tilt}deg`,
          '--pitch': `calc(${cardWidth} + ${gap})`,
        } as React.CSSProperties
      }
    >
      {/* React hoists and dedupes a keyed <style>, so many carousels share
          one keyframes rule. */}
      <style href="snap-carousel-tilt" precedence="default">
        {TILT_KEYFRAMES}
      </style>
      <ScrollMenu
        LeftArrow={
          <SnapCarouselArrow
            ids={ids}
            target={activeIndex - 1}
            direction="left"
          />
        }
        RightArrow={
          <SnapCarouselArrow
            ids={ids}
            target={activeIndex + 1}
            direction="right"
          />
        }
        Footer={<SnapCarouselDots ids={ids} activeIndex={activeIndex} />}
        wrapperClassName="flex flex-col"
        scrollContainerClassName={cn(
          'relative flex w-full overflow-y-hidden snap-x snap-mandatory',
          // Side padding equal to the space beside a centered card lets the
          // first and last card reach the middle; the bottom room is for the fan.
          '[gap:var(--gap)] [padding-inline:calc(50%_-_var(--card)_/_2)] pt-4 pb-10',
          'cursor-grab select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
        )}
        // The slot is the animated subject and your card fills it, so the
        // fan needs no styles of its own. Its position in the rail is the
        // timeline: flat in the middle, one --tilt further per neighbour.
        itemClassName={cn(
          'shrink-0 snap-center [width:var(--card)] origin-bottom [&>*]:h-full [&>*]:w-full',
          'supports-[animation-timeline:view()]:[animation:snap-tilt_linear_both]',
          'supports-[animation-timeline:view()]:[animation-timeline:view(inline)]',
          'supports-[animation-timeline:view()]:[animation-range:cover_calc(50%_-_2_*_var(--pitch))_cover_calc(50%_+_2_*_var(--pitch))]',
          'motion-reduce:[animation:none]',
        )}
        onScroll={(api) => {
          setActiveIndex(nearestIndex(api, ids));
          restoreSnapWhenSettled(api);
        }}
        onMouseDown={(api) => (ev) => {
          const rail = api.scrollContainer.current;
          if (rail) rail.style.scrollSnapType = 'none';
          drag.current = { position: ev.clientX, clicked: true };
        }}
        onMouseMove={(api) => (ev) => {
          const rail = api.scrollContainer.current;
          const delta = drag.current.position - ev.clientX;
          // 5px of slack keeps a plain click from nudging the rail.
          if (!drag.current.clicked || !rail || Math.abs(delta) <= 5) return;
          drag.current.position = ev.clientX;
          rail.scrollLeft += delta;
        }}
        onMouseUp={dragStop}
        onMouseLeave={dragStop}
        {...props}
      >
        {children}
      </ScrollMenu>
    </div>
  );
}

const TILT_KEYFRAMES =
  '@keyframes snap-tilt{from{transform:translateY(1.5rem) rotate(calc(2 * var(--tilt))) scale(.88)}50%{transform:none}to{transform:translateY(1.5rem) rotate(calc(-2 * var(--tilt))) scale(.88)}}';

/** Index of the card whose center is closest to the rail's center. */
function nearestIndex(api: publicApiType, ids: string[]) {
  const rail = api.scrollContainer.current;
  if (!rail) return 0;
  const middle = rail.scrollLeft + rail.clientWidth / 2;
  const distances = ids.map((id) => {
    const slot = api.getItemElementById(id) as HTMLElement | null;
    return slot
      ? Math.abs(slot.offsetLeft + slot.offsetWidth / 2 - middle)
      : Infinity;
  });
  return distances.indexOf(Math.min(...distances));
}

function scrollToIndex(api: publicApiType, ids: string[], index: number) {
  const slot =
    ids[index] === undefined ? null : api.getItemElementById(ids[index]);
  if (slot) api.scrollToItem(slot, 'smooth', 'center');
}

/** Steps one card, not one page; disabled when the neighbour does not exist. */
function SnapCarouselArrow({
  ids,
  target,
  direction,
}: {
  ids: string[];
  target: number;
  direction: 'left' | 'right';
}) {
  const api = React.useContext<publicApiType>(VisibilityContext);
  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="rounded-full disabled:opacity-30"
      aria-label={direction === 'left' ? 'Previous card' : 'Next card'}
      disabled={ids[target] === undefined}
      onClick={() => scrollToIndex(api, ids, target)}
    >
      {direction === 'left' ? <ChevronLeft /> : <ChevronRight />}
    </Button>
  );
}

/** 24px targets (WCAG 2.5.8) drawing 10px dots; aria-current marks the centered card. */
function SnapCarouselDots({
  ids,
  activeIndex,
}: {
  ids: string[];
  activeIndex: number;
}) {
  const api = React.useContext<publicApiType>(VisibilityContext);
  return (
    <div role="group" aria-label="Cards" className="flex justify-center pt-2">
      {ids.map((id, index) => (
        <button
          type="button"
          key={id}
          aria-label={`Card ${index + 1} of ${ids.length}`}
          aria-current={index === activeIndex}
          className={cn(
            'grid size-6 cursor-pointer place-items-center',
            'before:size-2.5 before:rounded-full before:bg-muted-foreground/40 before:content-[""]',
            'aria-[current=true]:before:bg-primary',
          )}
          onClick={() => scrollToIndex(api, ids, index)}
        />
      ))}
    </div>
  );
}

export { SnapCarousel };
