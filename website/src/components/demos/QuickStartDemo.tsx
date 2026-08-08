import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

import { LeftArrow, RightArrow } from '../Arrows';
import { useDragToScroll } from '../useDragToScroll';

// Renders exactly what the quick-start snippet describes: ten cards, two
// arrows, per-card visibility readout. The styling hooks (.qs-card) are
// the page's, the structure is the snippet's.

const items = Array.from({ length: 10 }, (_, i) => `item-${i + 1}`);

export function QuickStartDemo() {
  const { dragProps } = useDragToScroll();
  return (
    <div className="qs-demo">
      <p className="qs-demo-label">The code on the left, running:</p>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} {...dragProps}>
        {items.map((id, index) => (
          <Card itemId={id} key={id} title={id} index={index} />
        ))}
      </ScrollMenu>
    </div>
  );
}

function Card({
  itemId,
  title,
  index,
}: {
  itemId: string;
  title: string;
  index: number;
}) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  // First three cards fit the panel at typical widths — server-render them
  // as visible so the demo doesn't contradict the SSR claim.
  const isVisible = visibility.useIsVisible(itemId, index < 3);
  return (
    <div className="qs-card" data-visible={isVisible}>
      <div className="t">{title}</div>
      <div className="v">visible: {String(isVisible)}</div>
    </div>
  );
}
