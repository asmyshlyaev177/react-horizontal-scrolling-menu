import * as React from 'react';
import {
  type publicApiType,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

import { ChevronLeft, ChevronRight } from './Icons';

// Canonical arrow pattern. The defaults ('first' → true, 'last' → false)
// also decide the server-rendered state: left starts disabled, right
// enabled — matching a row scrolled to its start, so hydration confirms
// instead of flipping.

export function LeftArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible('first', true);
  return (
    <button
      type="button"
      className="arrow-btn"
      disabled={isFirstItemVisible}
      onClick={() => visibility.scrollPrev()}
      aria-label="Scroll left"
    >
      <ChevronLeft />
    </button>
  );
}

export function RightArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible('last', false);
  return (
    <button
      type="button"
      className="arrow-btn"
      disabled={isLastItemVisible}
      onClick={() => visibility.scrollNext()}
      aria-label="Scroll right"
    >
      <ChevronRight />
    </button>
  );
}
