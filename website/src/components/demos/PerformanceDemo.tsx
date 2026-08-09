import * as React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import { feedColors } from '../../lib/demo-data';
import { LeftArrow, RightArrow } from '../Arrows';
import { ClientOnly } from '../ClientOnly';
import { useDragToScroll } from '../useDragToScroll';

const COUNT = 5000;
const ITEMS = Array.from({ length: COUNT }, (_, index) => index);

// Card height 72 plus the rail's 0.4rem block padding on both sides —
// the fallback holds this height so hydration causes no layout shift.
const RAIL_HEIGHT = 72 + 12.8;

// The rail mounts client-only: 5,000 server-rendered cards would be about
// 1 MB of HTML. See the route prose — that's the honest trade at this size.

export function PerformanceDemo() {
  const { dragProps } = useDragToScroll();

  return (
    <div className="example-demo">
      <p className="mb-2 px-2 font-mono text-sm text-muted">
        {COUNT.toLocaleString('en-US')} items, no virtualization
      </p>
      <ClientOnly fallback={<div style={{ height: RAIL_HEIGHT }} />}>
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          noPolyfill={true}
          {...dragProps}
        >
          {ITEMS.map((index) => (
            <Bar itemId={`bar-${index}`} key={`bar-${index}`} index={index} />
          ))}
        </ScrollMenu>
      </ClientOnly>
    </div>
  );
}

// Memoized like the story's Card: parent re-renders (drag state flips)
// skip all 5,000 children.
const Bar = React.memo(function Bar({
  index,
}: {
  itemId: string;
  index: number;
}) {
  return (
    <div
      className="flex flex-col items-center justify-between rounded-md border border-border bg-bg"
      style={{ width: 40, height: 72, padding: '6px 0' }}
    >
      <span className="font-mono text-muted" style={{ fontSize: 9 }}>
        {index + 1}
      </span>
      <span
        aria-hidden
        style={{
          width: 14,
          height: 14 + (index % 5) * 7,
          borderRadius: 4,
          background: feedColors[index % feedColors.length],
        }}
      />
    </div>
  );
});
