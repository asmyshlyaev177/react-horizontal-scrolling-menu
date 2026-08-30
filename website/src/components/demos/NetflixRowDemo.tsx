import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

import { type Genre, genres } from '../../lib/demo-data';
import { ChevronLeft, ChevronRight } from '../Icons';
import { useDragToScroll } from '../useDragToScroll';

// Netflix-style media rail: poster tiles, edge fade, full-height overlay
// arrows that appear on hover and vanish at their end of the row.

const EDGE_FADE =
  '[mask-image:linear-gradient(to_right,transparent,black_2.5rem,black_calc(100%-2.5rem),transparent)]';

export function NetflixRowDemo() {
  const { dragProps } = useDragToScroll();
  return (
    <div className="gallery-demo group/nfx">
      <ScrollMenu
        Header={<OverlayArrows />}
        wrapperClassName="relative"
        {...dragProps}
        scrollContainerClassName={`${EDGE_FADE} ${dragProps.scrollContainerClassName}`}
      >
        {genres.map((genre) => (
          <PosterTile itemId={genre.id} key={genre.id} genre={genre} />
        ))}
      </ScrollMenu>
    </div>
  );
}

function PosterTile({ itemId, genre }: { itemId: string; genre: Genre }) {
  return (
    <div
      className="flex h-40 w-28 shrink-0 flex-col justify-end overflow-hidden rounded-lg p-2 select-none"
      style={{ background: genre.color }}
      aria-label={itemId}
    >
      <span
        className={`text-sm font-semibold ${genre.darkText ? 'text-black/80' : 'text-white/90'}`}
      >
        {genre.name}
      </span>
    </div>
  );
}

/** Rendered as the menu Header, so it sits inside VisibilityContext. */
function OverlayArrows() {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const atStart = api.useLeftArrowVisible();
  const atEnd = api.useRightArrowVisible();
  return (
    <>
      <OverlayArrow
        side="left"
        hidden={atStart}
        onClick={() => api.scrollPrev()}
      />
      <OverlayArrow
        side="right"
        hidden={atEnd}
        onClick={() => api.scrollNext()}
      />
    </>
  );
}

function OverlayArrow({
  side,
  hidden,
  onClick,
}: {
  side: 'left' | 'right';
  hidden: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={side === 'left' ? 'Scroll left' : 'Scroll right'}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
      onClick={onClick}
      className={[
        'absolute inset-y-0 z-10 flex w-10 items-center justify-center text-ink',
        side === 'left'
          ? 'left-0 bg-linear-to-r from-surface to-transparent'
          : 'right-0 bg-linear-to-l from-surface to-transparent',
        'opacity-0 transition-opacity focus-visible:opacity-100',
        hidden ? 'pointer-events-none' : 'group-hover/nfx:opacity-100',
      ].join(' ')}
    >
      {side === 'left' ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
}
