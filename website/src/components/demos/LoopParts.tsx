import * as React from 'react';
import {
  type publicApiType,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

import { type City } from '../../lib/demo-data';
import { ChevronLeft, ChevronRight } from '../Icons';

// Always enabled: the stock first/last hooks track the outermost items —
// clones here — and would flash disabled at the seam.
export function LoopLeftArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  return (
    <button
      type="button"
      className="arrow-btn"
      onClick={() => visibility.scrollPrev()}
      aria-label="Scroll left"
    >
      <ChevronLeft />
    </button>
  );
}

export function LoopRightArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  return (
    <button
      type="button"
      className="arrow-btn"
      onClick={() => visibility.scrollNext()}
      aria-label="Scroll right"
    >
      <ChevronRight />
    </button>
  );
}

export function CityCard({ city }: { itemId: string; city: City }) {
  return (
    <div
      className="loop-card"
      style={{
        background: city.color,
        color: city.darkText ? 'oklch(0.22 0.02 60)' : 'oklch(0.99 0.005 15)',
      }}
    >
      <span className="initial" aria-hidden>
        {city.name[0]}
      </span>
      <span className="name">{city.name}</span>
    </div>
  );
}
