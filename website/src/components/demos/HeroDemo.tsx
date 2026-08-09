import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

import { type Genre, genres } from '../../lib/demo-data';
import { LeftArrow, RightArrow } from '../Arrows';
import { useDragToScroll } from '../useDragToScroll';

// The flagship demo: a full-bleed category rail you can drag, wheel and
// arrow through. Tiles light up as IntersectionObserver reports them
// visible — the library's core mechanism, made visible itself.

// Tiles the server assumes visible on first paint: at common desktop
// widths six tiles fit; IntersectionObserver corrects the tail on
// hydration. Keeps the server-rendered hero lit, not dimmed.
const SSR_VISIBLE = 6;

// The intro peek: how far the rail scrolls out (about a tile and a half)
// and how long it rests there before easing back.
const PEEK_PX = 240;
const PEEK_HOLD_MS = 1100;

export function HeroDemo() {
  const { dragProps } = useDragToScroll();
  const [visibleIds, setVisibleIds] = React.useState<string[]>(() =>
    genres.slice(0, SSR_VISIBLE).map((genre) => genre.id),
  );

  const onUpdate = React.useCallback((api: publicApiType) => {
    setVisibleIds(api.items.getVisible().map(([id]) => id));
  }, []);

  // One authored motion moment: shortly after init the rail peeks — a
  // slow scroll out, a beat at the far point, and back — announcing "this
  // scrolls" without a word. Skipped for reduced-motion users and anyone
  // who scrolled first.
  const peeked = React.useRef(false);
  const onInit = React.useCallback((api: publicApiType) => {
    if (peeked.current) return;
    peeked.current = true;
    const container = api.scrollContainer.current;
    // Chrome restores scroll-container positions across reloads; the rail
    // should always introduce itself from its start.
    if (container) container.scrollLeft = 0;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    window.setTimeout(() => {
      if (!container || container.scrollLeft !== 0) return;
      container.scrollBy({ left: PEEK_PX, behavior: 'smooth' });
      window.setTimeout(() => {
        if (container.scrollLeft <= PEEK_PX + 60) {
          container.scrollBy({ left: -PEEK_PX, behavior: 'smooth' });
        }
      }, PEEK_HOLD_MS);
    }, 900);
  }, []);

  return (
    <div className="hero-rail">
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onInit={onInit}
        onUpdate={onUpdate}
        {...dragProps}
      >
        {genres.map((genre, index) => (
          <GenreTile
            itemId={genre.id}
            key={genre.id}
            genre={genre}
            index={index}
          />
        ))}
      </ScrollMenu>
      <div className="site-container">
        <p className="hero-readout" aria-live="off">
          <span className="fn">getVisible()</span>
          {' → ['}
          {visibleIds.map((id) => `'${id}'`).join(', ')}
          {']'}
        </p>
        <p className="hero-hint">
          This is the library, live — drag it. Dimmed tiles are the ones{' '}
          <code>useIsVisible</code> reports as off-screen.
        </p>
      </div>
    </div>
  );
}

function GenreTile({
  itemId,
  genre,
  index,
}: {
  itemId: string;
  genre: Genre;
  index: number;
}) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isVisible = visibility.useIsVisible(itemId, index < SSR_VISIBLE);

  return (
    <div
      className="genre-tile"
      data-visible={isVisible}
      style={{
        background: genre.color,
        color: genre.darkText ? 'oklch(0.22 0.02 60)' : 'oklch(0.99 0.005 15)',
      }}
    >
      <span className="dot" />
      <span className="initial" aria-hidden>
        {genre.name[0]}
      </span>
      <span className="name">{genre.name}</span>
    </div>
  );
}
