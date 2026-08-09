import * as React from 'react';
import { type publicApiType } from 'react-horizontal-scrolling-menu';

import { DragManager } from './DragManager';

/**
 * Mouse drag-to-scroll wiring for a ScrollMenu, shared by every demo on the
 * page. Spread `dragProps` onto the ScrollMenu; touch devices need none of
 * this — the container is a real scroll container, so touch panning is
 * native. Demos with clickable items must check `dragManager.dragging` in
 * their click handlers, or releasing a drag over an item activates it.
 */
export function useDragToScroll() {
  // Lazy state init, not useRef(new …).current: same stable instance, but
  // without constructing a throwaway manager every render or reading a ref
  // during render (react-hooks/refs).
  const [dragManager] = React.useState(() => new DragManager());
  const [dragging, setDragging] = React.useState(false);

  const handleDrag =
    ({ scrollContainer }: publicApiType) =>
    (ev: React.MouseEvent) =>
      dragManager.dragMove(ev, (delta) => {
        if (scrollContainer.current) {
          // Also correct under RTL: scrollLeft runs 0 → negative there, and
          // the browser clamps at both ends, so content follows the cursor
          // in either direction mode.
          scrollContainer.current.scrollLeft += delta;
        }
      });

  const dragProps = {
    onMouseDown: () => (ev: React.MouseEvent) => {
      dragManager.dragStart(ev);
      setDragging(true);
    },
    onMouseUp: () => () => {
      dragManager.dragStop();
      setDragging(false);
    },
    onMouseLeave: () => () => {
      dragManager.dragStop();
      setDragging(false);
    },
    onMouseMove: handleDrag,
    scrollContainerClassName: dragging ? 'dragging' : '',
  };

  return { dragProps, dragManager };
}
