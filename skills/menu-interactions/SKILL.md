---
name: 'menu-interactions'
description: >-
  Wire mouse, wheel and touch input for react-horizontal-scrolling-menu:
  onWheel/onScroll are plain (api, event) => void callbacks, while ALL
  mouse/touch props (onMouseDown, onMouseUp, onMouseMove, onMouseLeave,
  onTouchStart, onTouchMove, onTouchEnd) are handler factories
  (api) => (event) => void. Covers mouse drag-to-scroll with the DragDealer
  pattern and dragging guard, onMouseLeave to stop drags, body-scroll
  locking, touchpad-vs-wheel detection, desktop swipe. Load when adding
  drag-to-scroll or custom wheel behavior, or when fixing clicks firing
  after drags or "Unable to preventDefault inside passive event listener".
metadata:
  type: core
  library: 'react-horizontal-scrolling-menu'
  library_version: '8.2.3'
sources:
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:README.md'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:src/index.tsx'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:stories/MouseDrag/MouseDrag.source.tsx'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:stories/PreventBodyScroll/PreventBodyScroll.source.tsx'
---

# Pointer, Wheel and Touch Interactions

ScrollMenu has two callback shapes. Getting this wrong is the #1 input bug:

- `onWheel` / `onScroll` are **plain callbacks**: `(api, event) => void`
- **ALL** mouse and touch props (`onMouseDown`, `onMouseUp`, `onMouseMove`,
  `onMouseLeave`, `onTouchStart`, `onTouchMove`, `onTouchEnd`) are
  **handler factories**: `(api) => (event) => void`. ScrollMenu invokes the
  factory with the api during render and attaches the returned function as
  the DOM handler.

All wheel/mouse/touch handlers attach to the outermost wrapper div (so they
also fire over arrows, Header and Footer); `onScroll` attaches to the scroll
container itself (src/index.tsx:319-347). `api` is the same `publicApiType`
object that `VisibilityContext` provides.

Touch devices scroll the menu natively — no touch props are needed for basic
mobile swipe. Drag-to-scroll below is the desktop "swipe" equivalent.

## Setup

Both shapes wired on a minimal menu:

```tsx
import React from 'react';
import {
  ScrollMenu,
  VisibilityContext,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

function Card({ itemId }: { itemId: string }) {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const visible = api.useIsVisible(itemId, true);
  return <div style={{ width: 160, opacity: visible ? 1 : 0.5 }}>{itemId}</div>;
}

// Plain shape — (api, event) => void
const onWheel = (api: publicApiType, ev: React.WheelEvent): void => {
  if (ev.deltaY < 0) api.scrollNext();
  else api.scrollPrev();
};

// Factory shape — (api) => (event) => void
const onMouseDown =
  (_api: publicApiType) =>
  (ev: React.MouseEvent): void => {
    ev.preventDefault(); // block native image/link drag inside items
  };

const ids = ['a', 'b', 'c', 'd', 'e', 'f'];

export function Menu() {
  return (
    <ScrollMenu onWheel={onWheel} onMouseDown={onMouseDown}>
      {ids.map((id) => (
        <Card itemId={id} key={id} />
      ))}
    </ScrollMenu>
  );
}
```

## Core Patterns

### Mouse drag-to-scroll (DragDealer)

The complete pattern from the MouseDrag story: track pointer position, flip a
`dragging` flag once movement exceeds 5px, scroll the container by the delta,
clear the flag in `requestAnimationFrame` after mouseup so item `onClick`
(which fires after the drag ends) can still see it and bail, and stop the
drag via `onMouseLeave` so the menu does not keep following a cursor that
left it.

```tsx
import React from 'react';
import {
  ScrollMenu,
  VisibilityContext,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

class DragDealer {
  clicked = false;
  dragging = false;
  position = 0;

  dragStart = (ev: React.MouseEvent) => {
    this.position = ev.clientX;
    this.clicked = true;
  };

  // Clear flags one frame later: item onClick fires after mouseup and must
  // still be able to read `dragging` to skip selection.
  dragStop = () => {
    window.requestAnimationFrame(() => {
      this.dragging = false;
      this.clicked = false;
    });
  };

  dragMove = (ev: React.MouseEvent, cb: (posDiff: number) => void) => {
    const newDiff = this.position - ev.clientX;
    const movedEnough = Math.abs(newDiff) > 5;

    if (this.clicked && movedEnough) {
      this.dragging = true;
    }
    if (this.dragging && movedEnough) {
      this.position = ev.clientX;
      cb(newDiff);
    }
  };
}

function Card({
  itemId,
  onClick,
  selected,
}: {
  itemId: string;
  onClick: () => void;
  selected: boolean;
}) {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const visible = api.useIsVisible(itemId, true);
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      style={{
        width: 160,
        height: 120,
        userSelect: 'none', // no text selection while dragging
        opacity: visible ? 1 : 0.5,
        background: selected ? 'lightgreen' : 'bisque',
      }}
    >
      {itemId}
    </div>
  );
}

const ids = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export function MouseDragMenu() {
  const [selected, setSelected] = React.useState<string[]>([]);
  const dragState = React.useRef(new DragDealer());

  const handleDrag =
    ({ scrollContainer }: publicApiType) =>
    (ev: React.MouseEvent) =>
      dragState.current.dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const handleItemClick = (itemId: string) => {
    if (dragState.current.dragging) {
      return; // a drag just ended — not a real click
    }
    setSelected((cur) =>
      cur.includes(itemId)
        ? cur.filter((el) => el !== itemId)
        : [...cur, itemId],
    );
  };

  return (
    <ScrollMenu
      onMouseDown={() => dragState.current.dragStart}
      onMouseUp={() => dragState.current.dragStop}
      onMouseMove={handleDrag}
      onMouseLeave={() => dragState.current.dragStop}
    >
      {ids.map((id) => (
        <Card
          itemId={id}
          key={id}
          selected={selected.includes(id)}
          onClick={() => handleItemClick(id)}
        />
      ))}
    </ScrollMenu>
  );
}
```

### Touchpad vs mouse-wheel detection

One menu page per wheel tick, while touchpad gestures fall through to native
horizontal scrolling. There is no standard way to distinguish the two; the
heuristic is that touchpads emit `deltaX` (or small `deltaY`), a mouse wheel
emits large `deltaY` only.

```tsx
import React from 'react';
import {
  ScrollMenu,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

function onWheel(api: publicApiType, ev: React.WheelEvent): void {
  const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isTouchpad) {
    ev.stopPropagation(); // let native scroll handle the gesture
    return;
  }

  if (ev.deltaY < 0) {
    api.scrollNext();
  } else {
    api.scrollPrev();
  }
}

function Item({ itemId }: { itemId: string }) {
  return <div style={{ width: 160, height: 80 }}>{itemId}</div>;
}

const ids = ['a', 'b', 'c', 'd', 'e', 'f'];

export function WheelMenu() {
  return (
    <ScrollMenu onWheel={onWheel}>
      {ids.map((id) => (
        <Item itemId={id} key={id} />
      ))}
    </ScrollMenu>
  );
}
```

### Locking body scroll while over the menu

React attaches wheel listeners as passive, so `ev.preventDefault()` inside
the `onWheel` prop throws. Lock the page with a non-passive document-level
listener toggled on hover instead. ScrollMenu has no `onMouseEnter` prop, so
the toggle lives on a wrapper div.

```tsx
import React from 'react';
import {
  ScrollMenu,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

function usePreventBodyScroll() {
  const preventDefault = React.useCallback((ev: Event) => {
    ev.preventDefault();
  }, []);

  const enableScroll = React.useCallback(() => {
    document.removeEventListener('wheel', preventDefault, false);
  }, [preventDefault]);

  const disableScroll = React.useCallback(() => {
    document.addEventListener('wheel', preventDefault, { passive: false });
  }, [preventDefault]);

  // re-enable body scroll on unmount
  React.useEffect(() => enableScroll, [enableScroll]);

  return { disableScroll, enableScroll };
}

const onWheel = (api: publicApiType, ev: React.WheelEvent): void => {
  const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
  if (isTouchpad) {
    ev.stopPropagation();
    return;
  }
  if (ev.deltaY < 0) api.scrollNext();
  else api.scrollPrev();
};

function Item({ itemId }: { itemId: string }) {
  return <div style={{ width: 160, height: 80 }}>{itemId}</div>;
}

const ids = ['a', 'b', 'c', 'd', 'e', 'f'];

export function LockedMenu() {
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
      <ScrollMenu onWheel={onWheel}>
        {ids.map((id) => (
          <Item itemId={id} key={id} />
        ))}
      </ScrollMenu>
    </div>
  );
}
```

## Common Mistakes

### CRITICAL Plain handler passed where factory expected

Wrong:

```tsx
<ScrollMenu onMouseMove={(ev) => drag(ev)}>
```

Correct:

```tsx
<ScrollMenu onMouseMove={(api) => (ev) => drag(ev)}>
```

`onWheel`/`onScroll` are plain `(api, event) => void`, but ALL mouse/touch
props are factories `(api) => (event) => void` — ScrollMenu calls the prop
with the api during render, so a plain handler receives the api object as
its "event", runs once per render, and its return value is attached as the
DOM handler, which silently does nothing useful.

Source: src/index.tsx:101-107,322-328; README.md props table note

### HIGH Drag-to-scroll fires item clicks on release

Wrong:

```tsx
<Card onClick={() => select(id)} /> /* fires after every drag */
```

Correct:

```tsx
<Card
  onClick={() => {
    if (!dragState.current.dragging) select(id);
  }}
/>
// dragging is cleared inside requestAnimationFrame after mouseUp,
// so it is still true when the post-drag click fires (DragDealer.dragStop)
```

After a drag ends the browser still dispatches a click on the item under the
cursor; guard click handlers with a dragging flag that is cleared one
animation frame after mouseup.

Source: stories/MouseDrag/MouseDrag.source.tsx (DragDealer class)

### HIGH Drag keeps scrolling after cursor leaves

Wrong:

```tsx
<ScrollMenu
  onMouseDown={() => dragState.current.dragStart}
  onMouseUp={() => dragState.current.dragStop}
  onMouseMove={handleDrag}
>
```

Correct:

```tsx
<ScrollMenu
  onMouseDown={() => dragState.current.dragStart}
  onMouseUp={() => dragState.current.dragStop}
  onMouseMove={handleDrag}
  onMouseLeave={() => dragState.current.dragStop}
>
```

Without wiring `onMouseLeave` to end the drag, the container keeps following
a mouse that is no longer over it (mouseup outside the menu is never seen).

Source: https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/278 (v7.1.0)

### MEDIUM preventDefault in passive wheel/touchmove listeners

Wrong:

```tsx
onWheel={(api, ev) => { ev.preventDefault(); api.scrollNext(); }}
```

Correct:

```tsx
onWheel={(api, ev) => {
  const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
  if (isTouchpad) return; // let native scroll handle it
  ev.deltaY < 0 ? api.scrollPrev() : api.scrollNext();
}}
```

React 17+ attaches wheel/touchmove as passive listeners, so
`ev.preventDefault()` throws "Unable to preventDefault inside passive event
listener" — body-scroll locking needs the non-passive workaround (the
document-level listener pattern above, or CSS `overscroll-behavior`).

Source: stories/PreventBodyScroll/PreventBodyScroll.source.tsx; stories/Simple onWheel recipe

### MEDIUM Reading positions in onScroll mid-animation

Wrong:

```tsx
onScroll={(api) => savePosition(api.scrollContainer.current.scrollLeft)}
```

Correct:

```tsx
onUpdate={(api) => savePosition(api.scrollContainer.current?.scrollLeft ?? 0)}
```

`onScroll` fires before the scroll settles (documented in the props table),
so position reads there are intermediate mid-animation values — save state
from `onUpdate` or poll after the transition finishes.

Source: README.md props table (onScroll fires before scroll settles); stories/SaveRestorePosition

## See also

- `../menu-recipes/SKILL.md` — drag, wheel and body-scroll recipes compose
  these pointer callback shapes into features (autoplay, one item per
  scroll, save/restore position).
