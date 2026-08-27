import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

import { cities, type City } from '../../lib/demo-data';
import { ChevronRight } from '../Icons';

// Vertical is a CSS recipe, not a prop: flip the scroll container to a
// column scrolling on Y, bound by the wrapper's 100% height inside a
// fixed-height panel. The `!` utilities out-cascade the library's own
// unlayered stylesheet (height: max-content, overflow-y: hidden).
// A column is bound by height, not width — max-w-sm keeps the rows reading
// as menu rows rather than table rows.

export function VerticalDemo() {
  return (
    <div className="example-demo flex max-w-sm" style={{ height: 380 }}>
      <ScrollMenu
        Header={UpArrow}
        Footer={DownArrow}
        // Native scrollIntoView walks every scrollable ancestor, so a
        // block-aligned scroll drags the page along with the column. Only the
        // polyfill takes a `boundary` to stop that walk — see the arrows.
        noPolyfill={false}
        wrapperClassName="h-full grow"
        scrollContainerClassName="flex-col overflow-y-auto! h-auto! cursor-default!"
      >
        {cities.map((city, index) => (
          <Row itemId={city.id} key={city.id} city={city} index={index} />
        ))}
      </ScrollMenu>
    </div>
  );
}

// `boundary` stops scroll-into-view at the column itself, so a page-down
// moves the rows and nothing else. Without it the walk continues to the
// document and the whole page jumps to put the row at the viewport's edge.
function UpArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible('first', true);
  return (
    <div className="flex justify-center pb-2">
      <button
        type="button"
        className="arrow-btn"
        disabled={isFirstItemVisible}
        onClick={() =>
          visibility.scrollPrev(undefined, undefined, 'end', {
            boundary: visibility.scrollContainer.current,
          })
        }
        aria-label="Scroll up"
      >
        <span className="inline-flex -rotate-90">
          <ChevronRight />
        </span>
      </button>
    </div>
  );
}

function DownArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible('last', false);
  return (
    <div className="flex justify-center pt-2">
      <button
        type="button"
        className="arrow-btn"
        disabled={isLastItemVisible}
        onClick={() =>
          visibility.scrollNext(undefined, undefined, 'start', {
            boundary: visibility.scrollContainer.current,
          })
        }
        aria-label="Scroll down"
      >
        <span className="inline-flex rotate-90">
          <ChevronRight />
        </span>
      </button>
    </div>
  );
}

function Row({ city, index }: { itemId: string; city: City; index: number }) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  // ~4 rows fit the 380px panel — server-paint those as visible.
  const isVisible = visibility.useIsVisible(city.id, index < 4);
  return (
    <div
      className="flex items-center gap-3 rounded-md border border-border bg-bg px-4 font-mono text-sm"
      data-visible={isVisible}
      style={{
        height: 52,
        opacity: isVisible ? 1 : 0.35,
        transition: 'opacity 0.25s',
      }}
    >
      <span
        aria-hidden
        style={{
          width: 10,
          height: 10,
          borderRadius: 3,
          background: city.color,
        }}
      />
      {city.name}
    </div>
  );
}
