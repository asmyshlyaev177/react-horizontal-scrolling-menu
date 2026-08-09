import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

import { cities, type City } from '../../lib/demo-data';
import { LeftArrow, RightArrow } from '../Arrows';

// The story's one rule, ported from its emotion wrapper to an arbitrary
// variant: the library's item wrapper gets min-width 100%, so a single
// slide fills the view and the stock paging arrows advance one item.

const SLIDES = cities.slice(0, 6);

export function OneItemDemo() {
  return (
    <div className="example-demo [&_.react-horizontal-scrolling-menu--item]:min-w-full">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {SLIDES.map((city, index) => (
          <Slide itemId={city.id} key={city.id} city={city} index={index} />
        ))}
      </ScrollMenu>
    </div>
  );
}

function Slide({ city, index }: { itemId: string; city: City; index: number }) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  // One slide per view: only the first is on screen at SSR time.
  const isVisible = visibility.useIsVisible(city.id, index === 0);
  return (
    <div
      className="flex h-44 w-full select-none flex-col justify-between rounded-md p-5"
      style={{
        background: city.color,
        color: city.darkText ? 'oklch(0.22 0.02 60)' : 'oklch(0.99 0.005 15)',
      }}
    >
      <span className="font-mono text-sm opacity-80">
        {index + 1} / {SLIDES.length} · visible: {String(isVisible)}
      </span>
      <span className="text-3xl font-bold tracking-tight">{city.name}</span>
    </div>
  );
}
