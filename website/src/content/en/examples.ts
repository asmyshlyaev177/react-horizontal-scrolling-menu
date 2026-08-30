import type { ExamplesCopy } from '../types.ts';

/** Copy for the example pages, keyed by the slugs in `examples-manifest.ts`. */
export const examples: ExamplesCopy = {
  'add-item-and-scroll-to-it': {
    meta: {
      title: 'React filter chips: add an item and scroll to it',
      description:
        'Filter chips in a horizontal React scroller: append an item, then scroll to it with apiRef and scrollToItem after it renders. Live demo and full source.',
    },
    title: 'Add an item and scroll to it — the filter-chips pattern',
    lede: 'A chip bar grows when the user picks a filter, and the new chip should end up on screen, not hidden past the right edge. The catch: you can’t scroll to an element that hasn’t rendered yet. This example splits the work between a click handler and an effect.',
    demoHint:
      'Click Add filter — the chip appears at the end and the row scrolls to reveal it. The x removes a chip.',
    prose: [
      {
        heading: 'How it works',
        body: 'The menu gets an `apiRef`, which exposes the full API outside the component tree. `addItem` does two things: stores the new id in a `lastAdded` ref, then appends the item to state. It deliberately does not scroll — at that moment the chip is only state, not DOM.',
      },
      {
        heading: 'Why the scroll lives in an effect',
        body: '`getItemElementById` looks the item up in the DOM, so the scroll can only happen after React has committed the new item. A `useEffect` keyed on `items` runs at exactly that point: it reads `lastAdded`, clears it, and calls `apiRef.current.scrollToItem(el, ’smooth’, ’end’)`. Clearing the ref matters — re-renders for any other reason (selection, arrows) hit the effect too, and must not scroll again.',
      },
      {
        heading: 'Notes',
        body: `
          - \`lastAdded\` is a ref, not state: writing it must not itself cause a render, and its value is only meaningful to the very next effect run.
          - \`’end’\` aligns the new chip with the row’s right edge; \`’center’\` works the same way if you want it in the middle.
          - The arrows here use the \`useLeftArrowVisible()\` and \`useRightArrowVisible()\` hooks — a shorter form of the \`useIsVisible(’first’/’last’)\` pair.
          - The scrollbar is hidden with plain CSS on the library’s \`scroll-container\` class; scrolling itself stays native.
        `,
      },
    ],
  },

  'bottom-arrows': {
    meta: {
      title: 'Carousel arrows below the menu: custom placement in React',
      description:
        'Place carousel arrows below the row in React: the ScrollMenu Footer prop renders any layout under the menu, arrows included. Live demo and full source.',
    },
    title: 'Put the arrows below the menu — or anywhere in your layout',
    lede: 'Arrows aren’t built-in chrome — they’re components you pass in, so placement is a layout decision, not a library setting. This example passes no `LeftArrow` or `RightArrow` at all and renders both buttons in the `Footer` slot under the row, next to ordinary content.',
    demoHint:
      'The arrows sit under the row — they read the same VisibilityContext, so they still disable at the ends.',
    prose: [
      {
        heading: 'How it works',
        body: '`ScrollMenu` accepts a `Footer` component and renders it below the scroll container, inside the same `VisibilityContext.Provider` as the items. The story’s footer is a plain flex div holding some text and the two arrow buttons. Because context reaches it, each button calls `React.useContext(VisibilityContext)` and gets exactly the API it would get in the side slots — nothing about the arrows themselves changes.',
      },
      {
        heading: 'Arrow state, same as ever',
        body: '`useLeftArrowVisible()` and `useRightArrowVisible()` report whether the row already sits at that end; the story maps the result to `disabled` and fades the button out. Clicks call `scrollPrev()` and `scrollNext()`. None of this knows or cares where the button is mounted.',
      },
      {
        heading: 'Notes',
        body: `
          - \`Header\` is the mirror slot above the row, with the same contract.
          - The side \`LeftArrow\`/\`RightArrow\` props are just the pre-positioned variants — the same arrow components work in either spot.
          - The footer isn’t arrows-only: any component that reads \`VisibilityContext\` has the full API there.
          - The story’s \`onWheel\` handler pages by mouse wheel and leaves touchpad gestures to native scrolling.
        `,
      },
    ],
  },

  autoplay: {
    meta: {
      title: 'React carousel autoplay with accessible pause behavior',
      description:
        'Autoplay for a React scroll menu: useInterval calls scrollNext through apiRef, pausing on hover, focus, touch and reduced motion. Live demo and full source.',
    },
    title: 'Autoplay with accessible pause behavior',
    lede: 'The advancing part is one line — a timer calling `scrollNext()` through `apiRef`, on top of the same infinite-loop core. The engineering is in when *not* to advance: hover, touch, keyboard focus, a Pause button, hidden tabs, offscreen rails and reduced-motion preferences all stop the timer, each for a different reason.',
    demoHint:
      'Hover, touch, or tab into the rail and it pauses; the Pause button stops it until you press Play.',
    prose: [
      {
        heading: 'How it works',
        body: '`useInterval(cb, active ? interval : null)` is the whole scheduler. `active` folds four flags together — user-paused, hover-paused, focus-paused and `prefers-reduced-motion` — and passing `null` removes the timer entirely, so resuming starts a fresh, full interval instead of firing mid-cycle right after the pointer leaves.',
      },
      {
        heading: 'Ticks that refuse to run',
        body: 'Even an active timer checks before scrolling: the tick reads `api.menuVisible.current` and `document.visibilityState`, and skips if either says no. A hidden tab freezes IntersectionObserver, so scrolling there means advancing blind and teleport bookkeeping drifting off; a rail scrolled off the page simply shouldn’t move. Skipped ticks cost nothing — the next one re-checks.',
      },
      {
        heading: 'The pause surface',
        body: 'Hover and touch pause via wrapper handlers, keyboard focus via `onFocusCapture`/`onBlurCapture`, and `prefers-reduced-motion` keeps autoplay off entirely. The explicit Pause button is what WCAG 2.2.2 actually requires for auto-advancing content — hover-pause alone doesn’t count.',
      },
      {
        heading: 'Notes',
        body: `
          - The Pause toggle sits outside the hover wrapper — inside it, clicking Pause would also hover-pause, and the button could never be observed doing anything.
          - Looping comes from the same \`useInfiniteLoop\` clone-and-teleport hook as the infinite loop example; autoplay only adds the timer and the pause flags.
          - The scroll animation is the browser’s native smooth scroll — \`transitionDuration\` has no effect with the default \`noPolyfill\`.
        `,
      },
    ],
  },

  'mouse-drag': {
    meta: {
      title: 'React drag to scroll: horizontal menu without breaking clicks',
      description:
        'Mouse drag-to-scroll for a horizontal React list: a 5px threshold separates drags from clicks, so items stay clickable. Live demo and complete source.',
    },
    title: 'Drag to scroll with the mouse — without breaking clicks',
    lede: 'Touch users scroll a horizontal list natively, but mouse users need wiring: hold, drag, release. The hard part isn’t moving the row — it’s that a naive implementation turns every released drag into an accidental item click. This example separates the two with a small `DragDealer` class and three mouse props.',
    demoHint:
      'Grab anywhere on the row and drag. Items are still clickable — a click after a drag is suppressed.',
    prose: [
      {
        heading: 'How it works',
        body: '`ScrollMenu` exposes curried mouse handlers — `onMouseDown`, `onMouseUp` and `onMouseMove` each receive the API object and return a regular event handler. The `DragDealer` instance tracks one anchor coordinate: on every move it applies the delta straight to `scrollContainer.current.scrollLeft`. Native scrolling does the rest — no transforms, no physics, and the scrollbar stays real.',
      },
      {
        heading: 'Why clicks keep working',
        body: 'A drag only starts after the pointer moves more than 5px, so a plain click never scrolls. The other direction is the classic bug: item `onClick` fires after `mouseup`, so releasing a drag on top of a card would select it. `dragStop` clears the applying flag immediately but keeps `dragging` set for one more animation frame — click handlers check it and bail.',
      },
      {
        heading: 'Details worth stealing',
        body: `
          - \`dragStart\` cancels the pending reset from the previous gesture — without it, a fast second drag can apply a stale delta.
          - \`onMouseLeave\` on the wrapper also calls \`dragStop\`, so leaving the row mid-drag can’t leave it stuck in the dragging state.
          - Touch needs none of this — the container is a real scroll container, so swiping already works.
        `,
      },
    ],
  },

  'save-restore-position': {
    meta: {
      title: 'React preserve scroll position: restore on remount or back',
      description:
        'Save the scroll offset to sessionStorage on every onUpdate and restore it in onInit, so the position survives remounts and reloads. Live demo and full source.',
    },
    title: 'Save and restore the scroll position',
    lede: 'A horizontal rail forgets its offset every time it unmounts: route away and back, collapse a section, and it snaps to the start. This example saves the offset as the user scrolls and writes it back on mount, so the menu reappears exactly where they left it.',
    demoHint:
      'Scroll the row somewhere, unmount the menu, then mount it again — the rail comes back at the same offset.',
    prose: [
      {
        heading: 'How it works',
        body: 'Two callbacks carry the whole feature. `onUpdate` fires as the menu’s visibility state changes while the user scrolls; `savePos` reads `api.scrollContainer.current.scrollLeft` and writes it to `sessionStorage`. On the next mount, `onInit` assigns the saved value straight back to `scrollLeft` — a plain property write, so the restore is instant rather than an animation replaying in front of the user.',
      },
      {
        heading: 'Surviving remounts, reloads and back navigation',
        body: '`sessionStorage` outlives the component: client-side route changes, conditional renders and full page reloads all come back to the saved offset, and the value is per-tab, so two tabs don’t overwrite each other. For history navigation the story also sets `window.history.scrollRestoration = ’manual’`, keeping the browser’s own scroll restoration from fighting the manual one on back and forward.',
      },
      {
        heading: 'Notes',
        body: `
          - Restoring by raw \`scrollLeft\` is pixel-exact and doesn’t care which items exist — no ids to remember, nothing to look up.
          - The story’s Reload button swaps the menu’s \`key\` to force a remount; the demo’s unmount/remount toggle is the same test made explicit.
          - Reset just removes the storage key — the next mount starts from zero like a first visit.
        `,
      },
    ],
  },

  'one-item': {
    meta: {
      title: 'React one item per view slider: full-width scroll items',
      description:
        'Full-width items in a React horizontal scroll menu: min-width 100% on the item wrapper makes a one-item-per-view slider. Live demo and complete source.',
    },
    title: 'One item per view: a full-width slider from the same menu',
    lede: 'There’s no slider mode to switch on. The menu lays out whatever your CSS says, so one rule — `min-width: 100%` on the library’s item wrapper — turns the same component into a slider: every card fills the view, and the ordinary paging arrows advance exactly one item.',
    demoHint:
      'Page with the arrows — each slide is exactly one view wide, and each slide reports its own visibility.',
    prose: [
      {
        heading: 'How it works',
        body: 'The story wraps the menu in a styled container targeting `.react-horizontal-scrolling-menu--item` — the div the library renders around every child — and gives it `minWidth: ’100%’` plus flex centering. Each wrapper now spans the whole scroll container, so a single card fits the view. The arrows are stock: `scrollPrev()` and `scrollNext()` page by the visible group, and when the visible group is one item, a page and an item are the same thing.',
      },
      {
        heading: 'Arrows and the wheel',
        body: 'Arrow state comes from `useLeftArrowVisible()` and `useRightArrowVisible()` — each returns true once the row sits at that end, and the story feeds it into `disabled` and fades the button out. The `onWheel` prop receives the API object along with the event, so a vertical mouse wheel pages the row by the sign of `deltaY`. It first sniffs for touchpads: any horizontal delta, or a vertical one under 15, is assumed to be a touchpad gesture and left to native scrolling.',
      },
      {
        heading: 'Notes',
        body: [
          '- `itemId` on every child is the one hard requirement — it’s how items are tracked and scrolled to.',
          '- Cards still call `useIsVisible(itemId, true)`; with one item per view, every off-screen slide reports `visible: false`.',
          '- The scrollbar is hidden with plain CSS on the scroll container (`scrollbar-width: none` plus the WebKit pseudo-element) — that choice is yours, not the library’s.',
          '- Width lives entirely in your stylesheet. Swap 100% for 50% and you have a two-per-view slider; the library measures nothing.',
        ].join('\n'),
      },
    ],
  },

  performance: {
    meta: {
      title: 'React horizontal list performance: 5,000 items',
      description:
        'A React horizontal menu rendering 5,000 items with native scrolling: memoized cards, one IntersectionObserver, no virtualization. Live demo and full source.',
    },
    title: '5,000 items in one row — no virtualization needed',
    lede: 'The usual advice at a few hundred items is to reach for virtualization. This example renders 5,000 real DOM nodes into one `ScrollMenu` and stays responsive — native overflow scroll does the moving, an IntersectionObserver does the watching, and React mostly does nothing.',
    demoHint:
      'Drag the rail or page with the arrows — every one of the 5,000 cards is a real DOM node; nothing is windowed.',
    prose: [
      {
        heading: 'Where the work doesn’t happen',
        body: 'Scrolling never enters React. The rail is a genuine overflow container: wheel and touch scroll it natively, and the drag wiring only assigns to `scrollContainer.current.scrollLeft` — no state, no re-renders per frame. Visibility is a single IntersectionObserver instance watching all 5,000 item elements; callbacks arrive in batches, and only components that subscribed with `useIsVisible` update when their own item flips. There is no per-item scroll math anywhere.',
      },
      {
        heading: 'What the story tunes',
        body: '`Card` is wrapped in `React.memo` with a comparator over `selected` and `title`, so selecting one card doesn’t reconcile the other 4,999. The visibility readout goes through `useDeferredValue`: after a page jump, hundreds of items flip state at once, and deferring keeps that burst off the critical path of the interaction that caused it. `noPolyfill={true}` makes programmatic scrolls use the browser’s own `scrollIntoView` instead of the smooth-scroll ponyfill. Drag is the same `DragDealer` pattern as the mouse-drag example.',
      },
      {
        heading: 'The trade this page admits to',
        body: 'The demo rail above is not server-rendered: 5,000 cards serialize to roughly a megabyte of HTML, so the rail mounts client-only behind a height-matched placeholder and there’s no layout shift. That is the real bill at this size — the browser handles 5,000 live nodes comfortably, but shipping them as SSR payload is a separate decision. Somewhere in the tens of thousands of nodes, memory and initial render cost catch up too; that’s where windowing stops being optional.',
      },
      {
        heading: 'Notes',
        body: [
          '- The DOM for the 5,000 cards is built once, on mount — `React.memo` turns later parent renders into no-ops for every card.',
          '- Arrows page roughly a viewport at a time, so crossing the whole rail by arrow is slow by design — drag flicks or `scrollToItem` jumps fit this scale better.',
          "- The arrows still run on `useIsVisible('first')` and `useIsVisible('last')` — the same observer mechanism as a ten-item menu, at 500x the item count.",
        ].join('\n'),
      },
    ],
  },

  progress: {
    meta: {
      title: 'React horizontal scroll progress indicator for a carousel',
      description:
        'A progress bar for a horizontal React menu: subscribe to onUpdate, count visible items, derive the current page. Live demo and complete story source.',
    },
    title: 'Add a scroll progress indicator to a horizontal menu',
    lede: 'A carousel that hides its scrollbar still owes the user an answer to “how much is left?”. The menu already knows: it tracks every item’s visibility, so position is a matter of counting. The story renders numbered page buttons plus items-left/right counts from that data; this demo distills the same math into a progress bar.',
    demoHint:
      'Scroll the row, drag it, or use the arrows — the bar fills page by page and the counter shows where you are.',
    prose: [
      {
        heading: 'How it works',
        body: 'The indicator is passed as the `Footer` prop, so `ScrollMenu` renders it inside the menu where `VisibilityContext` is available. From the context it takes `items` — the map behind visibility tracking — and subscribes with `items.subscribe(’onUpdate’, cb)`. That event fires on every IntersectionObserver callback, so the story debounces it (a timeout plus `requestAnimationFrame`) before reading `items.getVisible()`.',
      },
      {
        heading: 'From visible items to a page number',
        body: 'The count of visible items is the page size. Total pages is `Math.ceil(items.size / visibleItemsLen)`; the current page comes from the last visible entry’s `index`. The story turns those into clickable page buttons — each one calls `scrollToItem(getItemByIndex(itemInd))`, addressing an item by position without knowing its id — and derives items-on-the-left and items-on-the-right counts from the same numbers. The demo’s bar is just `currentPage / totalPages` as a width percentage.',
      },
      {
        heading: 'Notes',
        body: [
          '- Nothing is measured in pixels — the math runs entirely on visibility data, so it keeps working when item widths differ.',
          '- Resize the viewport and the page size follows: more items fit, `getVisible()` returns more entries, and the page count recomputes on the next update.',
          '- The effect returns a cleanup that calls `items.unsubscribe` and clears the pending timer — skip it and an unmounted footer keeps getting called.',
          '- Before the first observer report `getVisible()` is empty; the story returns `null` until then, and the demo paints an empty track.',
        ].join('\n'),
      },
    ],
  },

  'scroll-to-item': {
    meta: {
      title: 'React scroll to element in horizontal list: scrollToItem',
      description:
        'Scroll a horizontal React list to any item by id: onInit hands over the api and scrollToItem brings the target into view. Live demo and complete source.',
    },
    title: 'Scroll to a specific item in a horizontal list',
    lede: 'Deep-linking into a row: a chat opens on the active conversation, a gallery on the photo you shared. The scroll container lives inside the library, but you don’t need a ref into its DOM — `onInit` hands you the api, and `scrollToItem` does the positioning.',
    demoHint:
      "The rail doesn't mount at Tokyo — onInit jumps straight to quito. Drag somewhere else, then remount to watch it land there again.",
    prose: [
      {
        heading: 'How it works',
        body: '`ScrollMenu` takes an `onInit` callback and calls it once the menu has rendered and measured its items, passing the same api object that `VisibilityContext` provides inside. The handler looks the element up with `getItemElementById(id)` and hands it to `scrollToItem(item, ’auto’, ’start’)`. Because `onInit` only fires after measurement, the lookup can’t come back empty on a rendered item — no `setTimeout`, no retry loop.',
      },
      {
        heading: 'Behavior and alignment',
        body: 'The story passes `’auto’` and `’start’`: `’auto’` jumps without animation, which is what you want for an initial position — the user never sees the rail at item one. `’start’` lines the item’s left edge up with the rail’s. For click-driven scrolls the same call takes `’smooth’` and `’center’` — that’s the center-on-click example below.',
      },
      {
        heading: 'Notes',
        body: [
          '- `getItemElementByIndex` is the positional alternative when you know the slot but not the id.',
          '- The id you pass is the item’s `itemId` — the same key the menu uses for visibility tracking.',
          '- The demo replays the behavior by remounting the menu with a new `key`; every fresh mount runs `onInit` again.',
        ].join('\n'),
      },
    ],
  },
  'center-on-click': {
    meta: {
      title: 'React scrollable tabs: center the active tab on click',
      description:
        'Scrollable tabs in React without Material UI: clicking a tab centers it with scrollToItem(el, "smooth", "center"). Live demo and full story source.',
    },
    title: 'Center the clicked item — the scrollable-tabs pattern',
    lede: 'The behavior every tab strip needs and no scroll container gives you for free: click a tab near the edge and it glides to the middle, revealing its neighbors on both sides. Here it’s one API call — no Material UI, no measuring, no scroll math.',
    demoHint:
      'Click a tab near either edge — it activates and centers itself in the row.',
    prose: [
      {
        heading: 'How it works',
        body: '`handleItemClick` is curried: it takes the `itemId` and returns a function expecting the API object. The click first stores the id in `selected` state, then calls `api.getItemElementById(itemId)` to find the real DOM element and hands it to `api.scrollToItem(item, ’smooth’, ’center’)`. One click, two effects: the tab is selected and centered.',
      },
      {
        heading: 'Where the API comes from',
        body: 'The parent component never holds an API ref. Each `Card` reads the full API from `VisibilityContext` — available to any child of `ScrollMenu` — and passes it into the click handler: `onClick(visibility)`. If you need to scroll from outside the menu instead, that’s the `apiRef` pattern in the scroll-to-item example.',
      },
      {
        heading: 'Notes',
        body: [
          '- The third argument of `scrollToItem` takes the same values as `scrollIntoView`’s `inline` option — `’start’`, `’center’` or `’end’`.',
          '- Cards are focusable (`role="button"`, `tabIndex=0`) and handle Enter in `onKeyDown`, so keyboard users get the same select-and-center.',
          '- The `onWheel` handler maps mouse-wheel deltas to `scrollNext`/`scrollPrev`, but bails for touchpads — a horizontal delta or a tiny vertical one is assumed to be a gesture and left native.',
          '- Arrows disable themselves with the `useIsVisible(’first’)` and `useIsVisible(’last’)` shorthands.',
        ].join('\n'),
      },
    ],
  },

  'swipe-desktop': {
    meta: {
      title: 'Swipe with mouse on desktop: React carousel flick gesture',
      description:
        'Desktop swipe for a React horizontal menu: track mouse down/up, and a release past 50px flicks to the next page with a smooth glide. Demo and full source.',
    },
    title: 'Swipe on desktop: a mouse flick that pages the menu',
    lede: 'Drag-to-scroll moves the row 1:1 with the cursor. This is the other mouse gesture: a flick. Press, move at least 50px, release — and the menu glides a page in that direction via `scrollNext` or `scrollPrev`. The row doesn’t follow the pointer at all; the glide is the library’s smooth programmatic scroll, which is what gives the release its momentum feel.',
    demoHint:
      'Press anywhere on the row, move left or right at least 50px, and release — the menu glides one page. Shorter moves do nothing.',
    prose: [
      {
        heading: 'How it works',
        body: 'A `useSwipe` hook returns the three curried mouse props `ScrollMenu` expects — each receives the API object and returns a plain event handler. `onMouseDown` anchors the pointer’s `clientX` in a ref, `onMouseMove` keeps overwriting the end coordinate, and `onMouseUp` compares the two: a horizontal difference past `minSwipeDistance` (50px) calls `apiObj.scrollNext()` for a leftward flick or `apiObj.scrollPrev()` for a rightward one.',
      },
      {
        heading: 'Why clicks need no special handling',
        body: 'In the drag-to-scroll example, releasing a drag over a card would click it, so a `dragging` flag has to outlive the gesture by a frame. A flick sidesteps the whole problem: below the 50px threshold `onMouseUp` does nothing, so a click is just a click — and past it the pointer has left the card it pressed on anyway. No flags, no suppressed handlers.',
      },
      {
        heading: 'What the story adds for touch and wheel',
        body: 'The story also pins down native touch panning: React 18+ registers `touchmove` listeners as passive, so `preventDefault` only works from a non-passive listener. An effect reaches the scroll container through `apiRef` (`ref.current.scrollContainer.current`) and attaches one with `{ passive: false }`. Its `onWheel` handler pages the menu too, with a heuristic — nonzero `deltaX` or a small `deltaY` is assumed to be a touchpad and left alone.',
      },
      {
        heading: 'Notes',
        body: [
          '- The coordinates live in a ref, not state — tracking `mousemove` in state would re-render on every pixel.',
          '- The demo re-anchors the end coordinate on `mousedown`, so a leftover position from the previous gesture can never count toward a new swipe.',
          '- Tune `minSwipeDistance` to taste: lower is snappier, higher tolerates sloppier clicks. The touch variant of this recipe uses 20px.',
        ].join('\n'),
      },
    ],
  },

  'mobile-swipe-only': {
    meta: {
      title: 'Hide carousel arrows on mobile: touch-only React scroll',
      description:
        'Arrows on desktop, touch-only scrolling on mobile for a React horizontal menu: a pointer: coarse matchMedia check hides them. Live demo and full source.',
    },
    title: 'Hide the arrows on mobile — touch-only scrolling on small screens',
    lede: 'On a touch screen, arrow buttons are dead weight: swiping is native, thumbs cover the tap targets, and each arrow eats row width. The demo keeps arrows for mouse users and unmounts them when the pointer is a finger; the story goes further and replaces native panning with explicit swipe-to-page gestures.',
    demoHint:
      'Open this on a phone, or flip on touch emulation in DevTools — the arrows disappear and swiping does all the work.',
    prose: [
      {
        heading: 'How the demo hides the arrows',
        body: '`LeftArrow` and `RightArrow` are optional props — pass `undefined` and the slot isn’t rendered at all, so there’s nothing to hide with CSS and no buttons left in the tab order. The switch is a `matchMedia(’(pointer: coarse)’)` check in an effect: the server can’t know the pointer type, so the first paint is desktop-first with arrows in, and hydration removes them once a coarse pointer is confirmed. A `change` listener keeps it live — DevTools device emulation flips it without a reload.',
      },
      {
        heading: 'What the story does on touch',
        body: 'The story’s `useSwipe` hook turns free panning into paging. The curried `onTouchStart`, `onTouchMove` and `onTouchEnd` props each receive the API object; start resets the end coordinate and records `targetTouches[0].clientX`, move tracks it, and end measures the travelled distance. Past `minSwipeDistance` (20px) it calls `apiObj.scrollPrev()` or `apiObj.scrollNext()` — one smooth page per swipe, whatever the finger’s speed.',
      },
      {
        heading: 'Suppressing native touch scrolling',
        body: 'For paging to be the only motion, the browser’s own panning has to stop, and React 18+ registers `touchmove` listeners as passive, where `preventDefault` is ignored. The story’s effect reaches the real scroll element through `apiRef` (`ref.current.scrollContainer.current`) and attaches its own listener with `{ passive: false }`, where the call works.',
      },
      {
        heading: 'Notes',
        body: [
          '- Pick the SSR default deliberately: rendering arrows first favors crawlers and desktop users, and touch devices lose them right after hydration.',
          '- `(pointer: coarse)` targets the input, not the screen size — a narrow desktop window keeps its arrows, a tablet doesn’t.',
          '- If you only want to hide arrows and keep native swiping (the demo’s behavior), skip the story’s `touchmove` effect — free panning and hidden arrows coexist fine.',
          '- The touch threshold is 20px versus the 50px of the desktop flick — see the swipe-on-desktop example for the mouse variant.',
        ].join('\n'),
      },
    ],
  },

  'infinite-loop': {
    meta: {
      title: 'React infinite loop scroll menu: a seamless carousel',
      description:
        'A seamless looping carousel in React without a carousel library: clones on both ends and one scrollLeft teleport when scrolling settles. Demo and full source.',
    },
    title: 'An infinite looping menu, built on the public API',
    lede: 'The classic clone-and-teleport carousel trick, implemented with zero library changes: the row is cloned onto both ends, and when scrolling settles inside a clone zone, `scrollLeft` jumps by exactly one loop length. The frames on both sides of the jump are identical, so nothing appears to move. Arrows, wheel, touch and mouse drag all cross the seam.',
    demoHint:
      'Keep going in either direction — by arrow, wheel, touch or drag — and the row never ends.',
    prose: [
      {
        heading: 'How it works',
        body: '`getSlides` copies items onto both ends of the row. Since `itemId` must be unique, clones get a suffix — `-lc` on the left, `-rc` on the right — while keeping the real id as `realId` for titles, selection and clicks. `useInfiniteLoop` packages the rest: `normalize()` measures the loop length from the `offsetLeft` of the first real item and its right clone, and shifts `scrollLeft` by exactly that distance whenever the position lands inside a clone zone. Pure geometry, and idempotent — calling it when nothing needs fixing does nothing.',
      },
      {
        heading: 'When the teleport fires',
        body: 'Jumping mid-scroll would visibly fight the browser, so `normalize` runs when scrolling settles: a native `scrollend` listener on the container (reached through the `containerRef` prop), with a 150ms-debounced `onScroll` fallback for Safari, which doesn’t fire `scrollend`. One more jump happens before anyone sees anything: a layout effect sets the initial `scrollLeft` to the first real item pre-paint, so the page never opens on the left clones.',
      },
      {
        heading: 'Crossing the seam mid-drag',
        body: 'The mouse-drag callback adds each delta to `scrollLeft` and calls `loop.normalize()` right there, inside the gesture. Without that, dragging into a clone zone would wait for the drag to end before teleporting — with it, you can drag through the seam indefinitely and never notice it.',
      },
      {
        heading: 'Notes',
        body: [
          '- The arrows are custom and always enabled: the stock `first`/`last` hooks track the outermost items, which here are clones — they’d flash disabled at the seam.',
          '- Cards display a twin-union visibility — an item counts as visible when it or either clone is — because the per-element flag goes stale for a frame after a teleport and would blink the header.',
          '- Two pages of clones per side: the zone must cover a full viewport (identical frames around a jump) with room to spare, so a Next click from the page straddling the seam never clamps at the row’s end.',
          '- Everything used here — `containerRef`, `onScroll`, `itemId`, the curried mouse props — is public API.',
        ].join('\n'),
      },
    ],
  },

  simple: {
    meta: {
      title: 'React horizontal scrolling menu: getting-started example',
      description:
        'The minimal react-horizontal-scrolling-menu setup: items with an itemId, two arrows reading VisibilityContext, and per-item visibility tracking. Full source.',
    },
    title: 'Getting started: a horizontal scrolling menu in React',
    lede: 'The smallest useful setup: a row of cards, two arrow buttons, and the thing this library is actually about — every card knows whether it’s on screen. One component, one required prop, one stylesheet import.',
    demoHint:
      'Scroll the row — arrows disable at the ends, and each card tracks its own visibility.',
    prose: [
      {
        heading: 'How it works',
        body: '`ScrollMenu` renders your children inside a native scroll container and watches each one with an IntersectionObserver. The only contract is `itemId` — a unique prop on every child, which is how items are tracked, found and scrolled to. Inside any child or arrow, `VisibilityContext` hands you the full API.',
      },
      {
        heading: 'The visibility hook',
        body: 'Cards call `useIsVisible(itemId)` to subscribe to their own on-screen state — no scroll listeners, no position math, and only the affected cards re-render when visibility changes. Arrows use the `first` and `last` shorthands to disable themselves at the ends of the row.',
      },
      {
        heading: 'Notes',
        body: [
          '- `styles.css` is a separate import — the JS bundle never injects CSS.',
          '- Item width is your own CSS; the menu measures nothing and ships 210 bytes of layout styles.',
          '- The second argument of `useIsVisible(itemId, true)` is the value used before the observer reports — and the value your server renders, if you server-render the menu.',
        ].join('\n'),
      },
    ],
  },

  vertical: {
    meta: {
      title: 'React vertical scrolling menu with arrows',
      description:
        'Make react-horizontal-scrolling-menu vertical: flex-column scroll container, bounded height, arrows above and below via Header/Footer. Live demo and source.',
    },
    title: 'A vertical scrolling menu — the same component, turned by CSS',
    lede: 'There is no `vertical` prop, and none is needed: the menu is a flex row inside a native scroll container, so pointing it downward is a couple of CSS overrides. Visibility tracking, the arrow hooks and `scrollPrev`/`scrollNext` all keep working on the new axis.',
    demoHint:
      "Wheel over the column or use the arrows — Up and Down are ScrollMenu's Header and Footer. Rows dim as they leave the view.",
    prose: [
      {
        heading: 'Two overrides and one height bound',
        body: 'The story restyles two library class names. The scroll container gets `flex-direction: column`, `overflow-y: auto` and `height: initial` in place of the default `max-content`; the wrapper gets `height: 100%`, so whatever fixed height the parent has becomes the scrolling bound. That’s the entire vertical mode. The story applies the overrides with emotion; the demo on this page passes Tailwind utilities through the `wrapperClassName` and `scrollContainerClassName` props instead — any styling route works, the class names are stable.',
      },
      {
        heading: 'Arrows become Header and Footer',
        body: "The `LeftArrow`/`RightArrow` slots render beside the rail — the wrong place for a column. `ScrollMenu` also accepts `Header` and `Footer` components rendered above and below, and the story mounts its Up and Down buttons there. They’re ordinary `VisibilityContext` consumers: `useIsVisible('first', true)` disables Up at the top, `useIsVisible('last', false)` disables Down at the bottom. The clicks pass a third argument — `scrollPrev(undefined, undefined, 'end')` and `scrollNext(undefined, undefined, 'start')` — the `block` position for `scrollIntoView`. `'end'` drops the previous item at the bottom edge (a full page up); `'start'` puts the next item at the top (a full page down). With the default `'nearest'`, each click would only nudge the next row into view.",
      },
      {
        heading: 'Keeping the scroll inside the column',
        body: "`scrollIntoView` moves every scrollable ancestor of its target, and the page is one of them — so a `block`-aligned jump inside a column takes the whole document with it. The option that stops the walk is `boundary`, passed in the fourth argument: `scrollNext(undefined, undefined, 'start', { boundary })` with the menu’s own `scrollContainer.current` scrolls the rows and nothing else. It needs `noPolyfill={false}` on `ScrollMenu`, since only the polyfill understands `boundary` — the demo above passes both. Horizontal menus rarely run into this: their default `block: 'nearest'` asks the page for no vertical movement in the first place.",
      },
      {
        heading: 'Visibility has no axis',
        body: '`useIsVisible` is IntersectionObserver-backed, and intersection is measured in both dimensions — rows report their state as they cross the top and bottom edges exactly the way horizontal items do at the sides. The demo dims out-of-view rows to show it, with the first four server-painted visible via the hook’s `defaultValue` argument.',
      },
      {
        heading: 'Notes',
        body: [
          '- The only fixed dimension is the panel’s inline height; the wrapper’s `height: 100%` carries it down to the scroll container.',
          '- Wheel and touch scroll the column natively — `overflow-y: auto` makes it a real scroll container; the arrows are convenience, not mechanism.',
          '- The second argument of `scrollPrev`/`scrollNext` is the `inline` (horizontal) position — vertical menus care about `block`, which is why the story passes it explicitly.',
        ].join('\n'),
      },
    ],
  },

  rtl: {
    meta: {
      title: 'React horizontal scroll RTL: a right-to-left menu',
      description:
        'A right-to-left horizontal scrolling menu in React: the RTL prop flips the scroll direction and paging, and the arrows swap sides. Live demo and full source.',
    },
    title: 'A right-to-left horizontal menu',
    lede: 'For Arabic or Hebrew interfaces the row has to start at the right edge and grow leftward. One boolean prop flips the scroll container; the only real work left for you is deciding what the arrows mean when “next” points left.',
    demoHint:
      'Flip the switch — the row restarts from the opposite edge and the arrows trade roles.',
    prose: [
      {
        heading: 'How it works',
        body: '`RTL={true}` puts the scroll container into right-to-left mode: the first item sits at the right edge and scrolling advances leftward. Everything logical stays logical — `useIsVisible(’first’)` still means the first item in your data, `scrollNext()` still moves toward the last — only the on-screen direction flips.',
      },
      {
        heading: 'Arrows swap slots, not logic',
        body: 'The `LeftArrow` prop always renders on the left side of the screen. In RTL that side is where “next” lives, so the story feeds the slots swapped elements: `LeftArrow={RTL ? <RightArrow /> : <LeftArrow />}`. The components themselves keep their logic — the one wired to `scrollPrev` still disables via `useIsVisible(’first’)` — only their screen position and label change.',
      },
      {
        heading: 'Notes',
        body: [
          '- The story passes `noPolyfill={true}`, so programmatic scrolls use the browser’s native smooth scrolling instead of the bundled polyfill.',
          '- `scrollPrev(’smooth’, ’end’)` and `scrollNext(’smooth’, ’start’)` pass an explicit alignment — the second argument is the same `start/center/end` set that `scrollToItem` takes.',
          '- The story toggles `RTL` live from a checkbox — the prop is just state, nothing about the menu is configured at build time.',
        ].join('\n'),
      },
    ],
  },

  'add-items': {
    meta: {
      title: 'React horizontal infinite scroll: load more at the end',
      description:
        'Infinite horizontal scroll in React: onUpdate checks api.items.last().visible and appends the next batch with a loader item. Live demo and complete source.',
    },
    title: 'Load more items when the end scrolls into view',
    lede: 'Horizontal infinite scroll without a scroll listener: the menu already knows which items are visible, so “the user reached the end” is just a question — is the last item on screen? `onUpdate` asks it after every scroll and appends the next batch when the answer is yes.',
    demoHint:
      'Scroll to the right end — a loader card appears and the next batch arrives. The demo stops at 30 items.',
    prose: [
      {
        heading: 'How it works',
        body: '`onUpdate` fires whenever item visibility changes. The handler reads `api.items.last()?.visible` — the library tracks every item by its `itemId` and keeps a visibility flag per item, so detecting the end costs one lookup, no IntersectionObserver of your own and no scroll-position math. `pushNewItems` then simulates a fetch: a one-second timeout, five more items, done.',
      },
      {
        heading: 'Guarding the fetch',
        body: 'Visibility updates arrive in bursts, so the handler must be safe to call repeatedly. A `loading` flag makes it idempotent: both `onUpdate` and `pushNewItems` check it, and only the first trigger starts a fetch. The same flag renders a `Loader` component as a real menu item (with its own `itemId`) that calls `scrollIntoView()` on mount, keeping the row’s end in view while the batch loads.',
      },
      {
        heading: 'Notes',
        body: [
          '- The right arrow is passed as an element, `RightArrow={<RightArrow disabled={...} />}` — both component and element forms work, and the element form lets the parent pass props like the item cap.',
          '- That arrow only disables when the cap is reached and the last item is visible — before the cap, reaching the end means more items are coming.',
          '- `newItemsLimit` stops this demo at 24 items; in real code the equivalent signal is your API running out of pages.',
        ].join('\n'),
      },
    ],
  },
  'custom-transition': {
    meta: {
      title: 'Custom scroll animation in React: easing and duration',
      description:
        'Custom easing and duration for programmatic scrolls in React: transitionBehavior hands you the target position and you animate scrollLeft. Live demo and source.',
    },
    title: 'Custom scroll animation: your own easing and duration',
    lede: 'Native smooth scrolling gives you one speed and one curve, chosen by the browser. When a programmatic scroll should match the rest of your motion design, `noPolyfill={false}` lets you take over — the menu computes where the rail needs to go, and your code drives `scrollLeft` there.',
    demoHint:
      'Click the arrows and switch the duration — at 2500 ms the ease-in-out-cubic curve is easy to see. A click mid-animation cancels the previous one.',
    prose: [
      {
        heading: 'How it works',
        body: 'By default the menu scrolls with the native `scrollIntoView` and ignores both transition props. Setting `noPolyfill={false}` routes programmatic scrolls through the scroll-into-view-if-needed polyfill instead, which computes the target and hands it to your `transitionBehavior` as instructions: one `{ el, top, left }` action per scrollable ancestor that has to move — here always just the scroll container, because the menu passes it as the boundary. From there, `animateScroll` steps `el.scrollLeft` toward the target on every `requestAnimationFrame`, mapping progress through `easeInOutCubic` over the chosen duration.',
      },
      {
        heading: 'Interrupting an animation in flight',
        body: 'A second arrow click can land mid-animation. The story keeps the pending frame per element in a `WeakMap`, so a new call cancels the old `requestAnimationFrame` loop instead of letting two of them fight over `scrollLeft`. And because each animation reads its starting point from the element’s current `scrollLeft`, the new one picks up exactly where the interrupted one stopped.',
      },
      {
        heading: 'Notes',
        body: [
          '- Nothing here is tied to the easing function — any curve or animation library works once you have the target position.',
          '- The typings describe `transitionBehavior` as a `ScrollBehavior` string, but the value goes straight to scroll-into-view-if-needed as its `behavior` callback — hence the cast in the source.',
          '- The story wires the same duration state into `transitionDuration` and into the animation itself, so the two can’t drift apart.',
        ].join('\n'),
      },
    ],
  },

  'prevent-body-scroll': {
    meta: {
      title: 'Prevent page scroll on wheel: React horizontal menu',
      description:
        'Scroll a horizontal React menu with the mouse wheel while the page stays put: a native non-passive wheel listener toggled on hover. Live demo and full source.',
    },
    title: 'Scroll the menu with the wheel — without scrolling the page',
    lede: 'A horizontal menu under a mouse wheel is awkward: the wheel scrolls the page and the row stays put. The fix has two halves — an `onWheel` handler that turns wheel ticks into paging, and a native non-passive listener that keeps the page from moving underneath. The second half can’t be done from React alone.',
    demoHint:
      'Park the pointer over the row and spin the wheel: the row pages, the page stays still. Move off the row and the wheel scrolls the page again.',
    prose: [
      {
        heading: 'Turning the wheel into paging',
        body: '`ScrollMenu`’s `onWheel` prop is called with the API object and the wheel event. A real mouse wheel reports Y-only deltas in coarse steps, so the handler calls `scrollNext` when `deltaY` is negative and `scrollPrev` otherwise — each tick pages the row. Before any of that it checks whether the event looks like a touchpad gesture: any `deltaX` at all, or a `deltaY` under 15.',
      },
      {
        heading: 'Why the page lock needs a native listener',
        body: "Calling `preventDefault` inside the React handler would be the obvious way to stop the page — and it silently does nothing, because React registers wheel listeners as passive, and a passive listener is forbidden from cancelling the event. So `usePreventBodyScroll` goes around React: on `mouseenter` it runs `document.addEventListener('wheel', preventDefault, { passive: false })`, on `mouseleave` it removes the listener again. While the pointer is over the menu, every wheel event bubbles up to `document` and has its default action — scrolling the page — cancelled there. A `useEffect` cleanup calls `enableScroll` on unmount, so the page can never be left locked.",
      },
      {
        heading: 'The touchpad escape hatch',
        body: 'Two-finger panning arrives as wheel events too, and the container scrolls natively from them — the document listener would kill that. For events matching the touchpad heuristic the handler calls `stopPropagation` and returns: the event never reaches the document listener, so native panning survives. There’s no reliable way to detect a touchpad; the delta heuristic is the story’s honest guess, and it holds up in practice.',
      },
      {
        heading: 'Notes',
        body: [
          '- Browsers made document-level wheel listeners passive by default precisely so pages can’t jank scrolling — `passive: false` is the explicit opt-out that makes `preventDefault` legal again.',
          '- Wheel-up pages forward and wheel-down pages back — that’s the story’s mapping; swap the `scrollNext` / `scrollPrev` branches for the reverse.',
          '- Touch devices never run any of this: there’s no `mouseenter`, and swiping the row is native scrolling from the start.',
          '- The lock exists only between `mouseenter` and `mouseleave`, so the rest of the page scrolls normally the moment the pointer leaves the rail.',
        ].join('\n'),
      },
    ],
  },

  'one-item-scroll': {
    meta: {
      title: 'React scroll one item at a time: precise carousel arrows',
      description:
        'Advance a React carousel a single item per arrow click: scrollToItem with getNextElement steps one card instead of a full page. Live demo and full source.',
    },
    title: 'Scroll one item at a time instead of a full page',
    lede: 'By default the arrows page: everything visible slides out and the next group slides in. This example rewires them to step — one card per click — and the entire change is what the arrow’s `onClick` calls. Same menu, same items, different scroll target.',
    demoHint:
      'Click an arrow — the row advances one card, not a page. Arrows disable at the ends.',
    prose: [
      {
        heading: 'How it works',
        body: '`getNextElement()` returns the first item past the visible group; `getPrevElement()` the one just before it. The right arrow calls `scrollToItem(visibility.getNextElement(), ’smooth’, ’end’)` — aligning that item to the container’s end edge scrolls just far enough to bring it into view, which moves the row by exactly one card. The left arrow mirrors it: previous element, aligned to `’start’`.',
      },
      {
        heading: 'The alignment is the whole trick',
        body: 'The stock `scrollNext()` resolves the same next element internally, but aligns it to the start edge — the view scrolls past the entire visible group to put that item first. One `ScrollLogicalPosition` argument is the difference between paging and stepping. The third parameter of `scrollToItem` is the standard scroll-into-view `inline` alignment; the second is the behavior, `’smooth’` here.',
      },
      {
        heading: 'Notes',
        body: [
          '- Arrow state uses the `’first’` and `’last’` shorthands: `useIsVisible(’first’, true)` disables the left arrow at the start, `useIsVisible(’last’, false)` the right one at the end.',
          '- At the ends `getNextElement()` returns undefined and `scrollToItem` quietly no-ops, so an enabled arrow still can’t overscroll.',
          '- The story’s `onWheel` handler still pages a full view per wheel notch — stepping is the arrows’ behavior, not a global mode.',
          '- Item clicks are untouched: cards toggle selection through their own `onClick`, independent of how the arrows scroll.',
        ].join('\n'),
      },
    ],
  },

  'items-animation': {
    meta: {
      title: 'Animate adding and removing list items in React',
      description:
        'Add, remove and shuffle items in a horizontal React list, animated by @formkit/auto-animate through the ScrollMenu containerRef prop. Live demo and complete source.',
    },
    title: 'Animate items in, out and into place with auto-animate',
    lede: 'Appending to a horizontal list makes the new item pop into place; removing one snaps its neighbors together. `@formkit/auto-animate` fixes both with a single parent ref — and `ScrollMenu`’s `containerRef` prop hands it exactly the element it needs.',
    demoHint:
      'Add, remove and shuffle — every entry, exit and reorder is animated. The menu itself has no animation code.',
    prose: [
      {
        heading: 'How it works',
        body: '`useAutoAnimate()` returns a ref that must land on the direct parent of the elements it should animate. Inside `ScrollMenu` that parent is the scroll container: each child you pass is wrapped in an item div, and those item divs are the container’s immediate children. The story passes the ref straight through — `<ScrollMenu containerRef={parent}>` — and auto-animate takes it from there: added items ease in, removed items animate out, and reordered items slide to their new slot. The menu itself never knows it’s being animated.',
      },
      {
        heading: 'Add, remove, shuffle',
        body: 'All three controls are plain `setState` calls on the items array — `addItems` appends one, `removeItems` drops the last, `shuffle` is a Fisher–Yates pass over a copy. The animations come entirely from the DOM mutations those updates cause. One rule is worth keeping: `itemId` doubles as the React key and as the item’s handle in the menu’s tracking map, so ids must stay unique — the story even backfills numbering gaps left by removals rather than risk minting a duplicate.',
      },
      {
        heading: 'Scrolling and tracking keep working',
        body: 'The menu re-observes its children whenever they change, so a freshly added item’s `useIsVisible` reports correctly right away and the arrows keep paging. A new item usually lands offscreen, though — if the entrance should actually be seen, pair this with `scrollToItem` the way the add-item-and-scroll-to-it example does.',
      },
      {
        heading: 'Notes',
        body: [
          '- `containerRef` accepts a ref object or a callback ref — `useAutoAnimate`’s callback plugs in directly.',
          '- auto-animate is zero-config and framework-agnostic; the React binding is the one `useAutoAnimate` hook.',
          '- The demo above simplifies id management to a monotonic counter; the code panel shows the story’s gap-filling version.',
        ].join('\n'),
      },
    ],
  },

  'mui-scrollable-tabs': {
    meta: {
      title: 'MUI scrollable tabs alternative: native scrolling tabs',
      description:
        'Outgrowing MUI variant="scrollable"? Keep the value/onChange contract, get scroll buttons that survive mobile, centered and scrollable together. Full source.',
    },
    title: 'Scrollable tabs beyond MUI',
    lede: 'Material UI’s scrollable tabs are welded to Tabs semantics, and their scroll buttons vanish on mobile by default. This recipe keeps the part your code relies on — the `value`/`onChange` contract — and swaps the strip underneath: native scrolling, a selection that centers itself, tabs that can hold anything.',
    demoHint:
      'Click a tab near either edge — it centers itself. Drag the row, like on a phone.',
    prose: [
      {
        heading: 'Keep the value/onChange contract',
        body: 'The `handleChange` in the source has MUI’s exact signature — `(event, newValue)`. Migrating means swapping markup, not rewiring state: your `useState`, handlers and tab panels stay untouched. Selection centers itself with `api.scrollToItem(el, ’smooth’, ’center’)`, wired exactly as in [center-on-click](/examples/center-on-click).',
      },
      {
        heading: 'Scroll buttons that survive mobile',
        body: 'MUI hides its scroll buttons below 600px unless you opt in with `allowScrollButtonsMobile` — and even then they are internal to Tabs. Here the arrows are your own components: `useIsVisible(’first’)` / `useIsVisible(’last’)` drive an opacity fade, they render on every viewport, and touch scrolling is native regardless of what the arrows do.',
      },
      {
        heading: 'Centered and scrollable, together',
        body: 'In MUI the `centered` prop and the `scrollable` variant are mutually exclusive — the docs tell you to pick one. Here centering is not a layout mode but a per-click scroll, so the strip is both at once: it overflows natively and every selected tab glides to the middle.',
      },
      {
        heading: 'Tabs that stop being tabs',
        body: 'Two tabs in the demo carry count badges; chips, avatars or mixed content work the same — the only requirement is an `itemId`. Style with `@emotion/styled` as the source does, with MUI’s own `styled()` so it sits in a Material app, or with Tailwind. The demo above adds [drag-to-scroll](/examples/mouse-drag); restoring the selected tab on mount is [save & restore position](/examples/save-restore-position).',
      },
      {
        heading: 'Notes',
        body: [
          '- Pick your ARIA pattern: keep `role="tablist"`/`role="tab"`/`aria-selected` when real panels switch (as here), or `aria-current` when the “tabs” are navigation links.',
          '- With drag enabled, suppress the click that fires on drag release — the demo checks `dragManager.dragging` before selecting, same as the [drag recipe](/examples/mouse-drag).',
          '- [RTL](/examples/rtl) needs no extra work: the strip is a native scroll container, so `direction: rtl` flips it, arrows included.',
        ].join('\n'),
      },
    ],
  },
};
