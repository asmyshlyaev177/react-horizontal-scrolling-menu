# publicApiType member reference — react-horizontal-scrolling-menu 8.2.3

The complete api object surface, verified against `src/createApi.ts`,
`src/ItemsMap/ItemsMap.ts`, `src/helpers.tsx` and `src/types.ts`.

How to obtain the api:

- Inside items/arrows/Header/Footer:
  `const api = React.useContext<publicApiType>(VisibilityContext);`
- Outside the menu: the `apiRef` prop (populated in an effect after mount —
  fire methods only, never read data values from it)
- Callbacks: `onInit`/`onUpdate` receive it as their only argument,
  `onWheel`/`onScroll` as the first argument, and every mouse/touch prop is
  a factory receiving it: `(api) => (event) => void`

## Shared types (src/types.ts)

```ts
type ItemId = string;

interface IOItem {
  index: string; // render order as a numeric string
  key: ItemId; // the itemId
  entry: IntersectionObserverEntry;
  visible: boolean;
}

type Item = [itemId: ItemId, observerEntry: IOItem];
type visibleElements = ItemId[]; // plain array of ids

type ItemOrElement = IOItem | Element | undefined; // note: never a bare string

// 'auto' | 'instant' | 'smooth', or a custom function (polyfill mode only)
type ScrollBehaviorArg = ScrollBehavior | CustomScrollBehavior;

interface scrollToItemOptions {
  boundary?: HTMLElement | null; // polyfill mode only
  duration?: number; // ms, polyfill mode only
  behavior: ScrollBehaviorArg; // required by the type but ALWAYS overridden
  // by the positional behavior argument — do not rely on it
}
```

## Getters

| Member                  | Signature                                          | Notes                                                                                                                        |
| ----------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `getItemById`           | `(id: ItemId) => IOItem \| undefined`              | `String()`-coerces id. Reads the ItemsMap, which lags children by one render — returns undefined for items added this render |
| `getItemByIndex`        | `(index: number \| string) => IOItem \| undefined` | Compares `String(index)` against `IOItem.index`                                                                              |
| `getItemElementById`    | `(id: ItemId) => Element \| null`                  | `document.querySelector("[data-key='<id>']")` — DOM truth, stale-proof for just-added items                                  |
| `getItemElementByIndex` | `(index: ItemId) => Element \| null`               | `document.querySelector("[data-index='<index>']")`                                                                           |
| `getNextElement`        | `() => IOItem \| undefined`                        | The item after the last currently visible one; undefined when nothing is visible yet                                         |
| `getPrevElement`        | `() => IOItem \| undefined`                        | The item before the first currently visible one; undefined when nothing is visible yet                                       |
| `isItemVisible`         | `(id: ItemId) => boolean`                          | Checks membership in `items.getVisible()`                                                                                    |
| `isLastItem`            | `(id: ItemId) => boolean`                          | Whether id is the last item in the row                                                                                       |

## Scroll methods

```ts
scrollToItem(
  target?: ItemOrElement, // api.getItemById(id) or api.getItemElementById(id)
  behavior?: ScrollBehaviorArg, // default 'smooth' (or the transitionBehavior prop)
  inline?: ScrollLogicalPosition, // default 'end'
  block?: ScrollLogicalPosition, // default 'nearest'
  options?: scrollToItemOptions, // { duration, boundary } — noPolyfill={false} only;
): void //                            options.behavior is ignored (positional arg wins)
```

A bare string target is a silent no-op — the JSDoc example showing
`'itemId'` is wrong. Undefined target returns without scrolling.

```ts
scrollPrev(
  behavior?: ScrollBehaviorArg, // default 'smooth'
  inline?: ScrollLogicalPosition, // default 'end'
  block?: ScrollLogicalPosition, // default 'nearest'
  options?: { duration?: number; boundary?: HTMLElement | null },
): void

scrollNext(
  behavior?: ScrollBehaviorArg, // default 'smooth'
  inline?: ScrollLogicalPosition, // default 'start'
  block?: ScrollLogicalPosition, // default 'nearest'
  options?: { duration?: number; boundary?: HTMLElement | null },
): void
```

`scrollPrev` targets `getPrevElement()`, `scrollNext` targets
`getNextElement()` — one visible-group per call. Both are no-ops while no
item has been seen yet (e.g. menu below the fold). All three drag ancestor
scroll containers when the menu is off screen — gate on
`menuVisible.current`.

## Hooks

Call only inside components rendered under ScrollMenu, following the rules
of hooks.

| Hook                   | Signature                                                                  | Notes                                                                                                            |
| ---------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `useIsVisible`         | `(itemId: ItemId \| 'first' \| 'last', defaultValue?: boolean) => boolean` | `defaultValue` defaults to `false` and is the SSR/first-paint value                                              |
| `useLeftArrowVisible`  | `() => boolean`                                                            | True when the first item is visible (disable the left arrow); latched — updates only while `menuVisible.current` |
| `useRightArrowVisible` | `() => boolean`                                                            | Same for the last item / right arrow                                                                             |

## Visibility getters — live, but not reactive

| Member               | Type      |
| -------------------- | --------- |
| `isFirstItemVisible` | `boolean` |
| `isLastItemVisible`  | `boolean` |

Live getters over the ItemsMap — correct inside event handlers and timers,
but reading them never subscribes a component, so renders built on them do
not update. (On <= 8.3.1 they were frozen at api creation and always
`false`.) For reactivity use `useLeftArrowVisible`/`useRightArrowVisible` or
`useIsVisible('first' | 'last')`; inside callbacks `api.items.getVisible()`
also works.

## items: ItemsMap

Extends `Map<ItemId, IOItem>` — inherited `get`, `has`, `size`, `keys`,
`values`, `entries`, `forEach` all work — plus:

| Method          | Signature                                                                                           | Notes                                                                          |
| --------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `subscribe`     | `(key: ItemId \| 'first' \| 'last' \| 'onInit' \| 'onUpdate', fn: (item?: IOItem) => void) => void` | Visibility-change events per item or edge                                      |
| `unsubscribe`   | `(key: same, fn: same) => void`                                                                     | Requires the SAME fn instance passed to subscribe; pair in a useEffect cleanup |
| `toArr`         | `() => Item[]`                                                                                      | All items sorted by numeric index                                              |
| `toItems`       | `() => ItemId[]`                                                                                    | All ids in render order                                                        |
| `sort`          | `(arr: Item[]) => Item[]`                                                                           | Sorts an Item array by numeric index in place                                  |
| `first`         | `() => IOItem \| undefined`                                                                         | First item in the row                                                          |
| `last`          | `() => IOItem \| undefined`                                                                         | Last item in the row                                                           |
| `filter`        | `(predicate: (value: Item, index: number, array: Item[]) => boolean) => Item[]`                     |                                                                                |
| `find`          | `(predicate: (value: Item, index: number, obj: Item[]) => boolean) => Item \| undefined`            |                                                                                |
| `findIndex`     | `(predicate: (value: Item, index: number, obj: Item[]) => unknown) => number`                       |                                                                                |
| `getCurrentPos` | `(item: ItemId \| IOItem) => [Item[], number]`                                                      | Sorted array plus the item's position in it (-1 when absent)                   |
| `prev`          | `(item: ItemId \| IOItem) => IOItem \| undefined`                                                   | Item before the given one                                                      |
| `next`          | `(item: ItemId \| IOItem) => IOItem \| undefined`                                                   | Item after the given one                                                       |
| `getVisible`    | `() => Item[]`                                                                                      | Only currently-visible items — ids via `.map(([id]) => id)`                    |
| `set`           | `(key: ItemId, value: IOItem) => this`                                                              | Internal — the observer writes entries; do not call                            |
| `setBatch`      | `(entries: Item[]) => this`                                                                         | Internal — first IntersectionObserver batch; do not call                       |

The map lags children by one render: an item appended this render is not in
it yet — use `getItemElementById`/`getItemElementByIndex` for those.

## scrollContainer

`scrollContainer: React.RefObject<HTMLElement | null>` — the scrollable
container div. Read `scrollContainer.current?.scrollLeft` to save position
(from `onUpdate`, not `onScroll` — onScroll fires before the scroll
settles); assign `scrollLeft` for instant teleports (infinite-loop seams,
position restore).

## menuVisible

`menuVisible: { current: boolean }` — true while the menu itself is on
screen (plain ref object, not reactive). Gate every programmatic scroll on
it: scrollIntoView reaches ancestor scroll containers, so scrolling an
off-screen menu jumps the whole page to it.

## Standalone package exports

```ts
import {
  ScrollMenu,
  VisibilityContext,
  slidingWindow,
  getItemsPos,
  constants,
  type publicApiType,
  type ItemId,
} from 'react-horizontal-scrolling-menu';
```

```ts
slidingWindow(
  allItems: ItemId[], // api.items.toItems()
  visibleElements: ItemId[], // api.items.getVisible().map(([id]) => id)
): { prev: () => ItemId[]; next: () => ItemId[] }
// Returns the previous/next group of ids, same size as the visible set,
// clamped at the row edges.

getItemsPos(items: ItemId[]): { first: ItemId; center: ItemId; last: ItemId }
// First, middle and last id of a group — feed center to
// scrollToItem(getItemById(center), 'smooth', 'center').
```

`constants` exposes the CSS class names
(`react-horizontal-scrolling-menu--item`, `--scroll-container`, `--wrapper`,
`--inner-wrapper`, `--header`, `--footer`, `--arrow-left`, `--arrow-right`),
the `data-key`/`data-index` attribute names, and the event keys
(`first`, `last`, `onInit`, `onUpdate`).
