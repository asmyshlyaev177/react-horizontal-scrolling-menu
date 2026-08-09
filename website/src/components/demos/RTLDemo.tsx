import * as React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import { rtlItems } from '../../lib/demo-data';
import { LeftArrow, RightArrow } from '../Arrows';
import { useDragToScroll } from '../useDragToScroll';

// The RTL prop flips the scroll container's direction; arrows and
// scrolling logic follow. Toggle it live.

export function RTLDemo() {
  const { dragProps } = useDragToScroll();
  const [rtl, setRtl] = React.useState(true);

  return (
    <div className="gallery-demo">
      <div className="rtl-toggle">
        <button
          type="button"
          className="switch"
          role="switch"
          aria-checked={rtl}
          aria-label="Right-to-left"
          onClick={() => setRtl((v) => !v)}
        />
        <span>{rtl ? 'RTL' : 'LTR'}</span>
      </div>
      <ScrollMenu
        key={String(rtl)}
        RTL={rtl}
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        {...dragProps}
      >
        {rtlItems.map((item) => (
          <RtlItem itemId={item.id} key={item.id} label={item.label} />
        ))}
      </ScrollMenu>
    </div>
  );
}

function RtlItem({ label }: { itemId: string; label: string }) {
  return (
    <div className="rtl-item" dir="rtl">
      {label}
    </div>
  );
}
