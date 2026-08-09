// Single source of truth for the example pages: slugs, story ids, source
// files (read by vite.config for build-time highlighting and the sitemap)
// and the hub listing. Route files own their titles, meta and prose.

import type { STORIES } from './links';

export interface ExampleEntry {
  slug: string;
  /** Human name for hub cards and related-example links. */
  name: string;
  /** One-liner for the hub listing. */
  blurb: string;
  group: string;
  /** Key into STORIES (links.ts) for the Storybook deep link. */
  storyKey: keyof typeof STORIES;
  /** Story source path relative to the repo root. */
  sourceFile: string;
}

export const EXAMPLE_GROUPS = [
  'Basics',
  'Position & scrolling',
  'Input & gestures',
  'Dynamic items',
  'Layout',
  'Recipes',
] as const;

export const EXAMPLES: ExampleEntry[] = [
  {
    slug: 'simple',
    name: 'Getting started',
    blurb: 'The minimal menu: items, two arrows, visibility out of the box.',
    group: 'Basics',
    storyKey: 'simple',
    sourceFile: 'stories/Simple/Simple.source.tsx',
  },
  {
    slug: 'one-item',
    name: 'One item per view',
    blurb: 'A single-item-wide menu — one card fills the row.',
    group: 'Basics',
    storyKey: 'oneItem',
    sourceFile: 'stories/OneItem/OneItem.source.tsx',
  },
  {
    slug: 'one-item-scroll',
    name: 'Scroll one item at a time',
    blurb: 'Arrows advance a single item instead of a full page.',
    group: 'Basics',
    storyKey: 'oneItemScroll',
    sourceFile: 'stories/OneItemScroll/OneItemScroll.source.tsx',
  },
  {
    slug: 'bottom-arrows',
    name: 'Arrows below the menu',
    blurb: 'Arrows are your components — place them anywhere.',
    group: 'Basics',
    storyKey: 'bottomArrows',
    sourceFile: 'stories/BottomArrows/BottomArrows.source.tsx',
  },
  {
    slug: 'center-on-click',
    name: 'Center the clicked item',
    blurb: 'scrollToItem with inline: center — the scrollable-tabs pattern.',
    group: 'Position & scrolling',
    storyKey: 'centerOnClick',
    sourceFile: 'stories/CenterOnClick/CenterOnClick.source.tsx',
  },
  {
    slug: 'scroll-to-item',
    name: 'Scroll to an item by id',
    blurb: 'Reach into the menu from outside with apiRef.',
    group: 'Position & scrolling',
    storyKey: 'scrollToItem',
    sourceFile: 'stories/ScrollToItem/ScrollToItem.source.tsx',
  },
  {
    slug: 'save-restore-position',
    name: 'Save and restore scroll position',
    blurb: 'Keep the scroll offset across unmounts and page reloads.',
    group: 'Position & scrolling',
    storyKey: 'saveRestorePosition',
    sourceFile: 'stories/SaveRestorePosition/Position.source.tsx',
  },
  {
    slug: 'custom-transition',
    name: 'Custom scroll animation',
    blurb: 'Bring your own easing and duration for programmatic scrolls.',
    group: 'Position & scrolling',
    storyKey: 'customTransition',
    sourceFile: 'stories/CustomTransition/CustomTransition.source.tsx',
  },
  {
    slug: 'progress',
    name: 'Scroll progress indicator',
    blurb: 'A progress bar driven by which items are visible.',
    group: 'Position & scrolling',
    storyKey: 'progress',
    sourceFile: 'stories/Progress/Progress.source.tsx',
  },
  {
    slug: 'mouse-drag',
    name: 'Drag to scroll with the mouse',
    blurb: 'Mouse drag that still lets item clicks work.',
    group: 'Input & gestures',
    storyKey: 'mouseDrag',
    sourceFile: 'stories/MouseDrag/MouseDrag.source.tsx',
  },
  {
    slug: 'swipe-desktop',
    name: 'Swipe on desktop',
    blurb: 'Momentum swiping for mouse users.',
    group: 'Input & gestures',
    storyKey: 'swipeDesktop',
    sourceFile: 'stories/SwipeDesktop/SwipeDesktop.source.tsx',
  },
  {
    slug: 'mobile-swipe-only',
    name: 'Hide arrows on mobile',
    blurb: 'Touch-only scrolling on small screens, arrows on desktop.',
    group: 'Input & gestures',
    storyKey: 'mobileSwipeOnly',
    sourceFile: 'stories/MobileSwipeOnly/MobileSwipeOnly.source.tsx',
  },
  {
    slug: 'prevent-body-scroll',
    name: 'Prevent body scroll',
    blurb: 'Wheel over the menu scrolls the menu, not the page.',
    group: 'Input & gestures',
    storyKey: 'preventBodyScroll',
    sourceFile: 'stories/PreventBodyScroll/PreventBodyScroll.source.tsx',
  },
  {
    slug: 'add-items',
    name: 'Load more when the end shows up',
    blurb: 'Infinite append driven by last-item visibility.',
    group: 'Dynamic items',
    storyKey: 'addItems',
    sourceFile: 'stories/AddItems/AddItems.source.tsx',
  },
  {
    slug: 'add-item-and-scroll-to-it',
    name: 'Add an item and scroll to it',
    blurb: 'The filter-chips pattern: append, then bring into view.',
    group: 'Dynamic items',
    storyKey: 'addItemScrollTo',
    sourceFile: 'stories/AddItemAndScrollToIt/AddItemAndScrollToIt.source.tsx',
  },
  {
    slug: 'items-animation',
    name: 'Animate items in and out',
    blurb: 'Add/remove animations with @formkit/auto-animate.',
    group: 'Dynamic items',
    storyKey: 'itemsAnimation',
    sourceFile: 'stories/ItemsAnimation/Items_animation.source.tsx',
  },
  {
    slug: 'performance',
    name: '5,000 items and still fast',
    blurb: 'Native scrolling scales — no virtualization needed here.',
    group: 'Dynamic items',
    storyKey: 'performance',
    sourceFile: 'stories/Performance/Performance.source.tsx',
  },
  {
    slug: 'vertical',
    name: 'Vertical menu',
    blurb: 'The same menu, scrolling top to bottom.',
    group: 'Layout',
    storyKey: 'vertical',
    sourceFile: 'stories/Vertical/Vertical.source.tsx',
  },
  {
    slug: 'rtl',
    name: 'Right-to-left',
    blurb: 'RTL flips direction; arrows and paging follow.',
    group: 'Layout',
    storyKey: 'rtl',
    sourceFile: 'stories/RTL/RTL.source.tsx',
  },
  {
    slug: 'infinite-loop',
    name: 'Infinite loop',
    blurb: 'Seamless looping from the public API — no library changes.',
    group: 'Recipes',
    storyKey: 'infiniteLoop',
    sourceFile: 'stories/InfiniteLoop/InfiniteLoop.source.tsx',
  },
  {
    slug: 'autoplay',
    name: 'Autoplay',
    blurb: 'A self-advancing loop with accessible pause behavior.',
    group: 'Recipes',
    storyKey: 'autoplay',
    sourceFile: 'stories/Autoplay/Autoplay.source.tsx',
  },
];

export const exampleBySlug = (slug: string) =>
  EXAMPLES.find((example) => example.slug === slug);
