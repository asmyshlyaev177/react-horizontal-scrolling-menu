import type { ManifestCopy } from '../types.ts';

/**
 * Hub-card copy for the example pages. The slugs and group ids are structure
 * — they live in `lib/examples-manifest.ts` and are keys here, not copy.
 */
export const manifest: ManifestCopy = {
  groups: {
    Basics: 'Basics',
    'Position & scrolling': 'Position & scrolling',
    'Input & gestures': 'Input & gestures',
    'Dynamic items': 'Dynamic items',
    Layout: 'Layout',
    Recipes: 'Recipes',
  },
  examples: {
    simple: {
      name: 'Getting started',
      blurb: 'The minimal menu: items, two arrows, visibility out of the box.',
    },
    'one-item': {
      name: 'One item per view',
      blurb: 'A single-item-wide menu — one card fills the row.',
    },
    'one-item-scroll': {
      name: 'Scroll one item at a time',
      blurb: 'Arrows advance a single item instead of a full page.',
    },
    'bottom-arrows': {
      name: 'Arrows below the menu',
      blurb: 'Arrows are your components — place them anywhere.',
    },
    'center-on-click': {
      name: 'Center the clicked item',
      blurb: 'scrollToItem with inline: center — the scrollable-tabs pattern.',
    },
    'scroll-to-item': {
      name: 'Scroll to an item by id',
      blurb: 'Reach into the menu from outside with apiRef.',
    },
    'save-restore-position': {
      name: 'Save and restore scroll position',
      blurb: 'Keep the scroll offset across unmounts and page reloads.',
    },
    'custom-transition': {
      name: 'Custom scroll animation',
      blurb: 'Bring your own easing and duration for programmatic scrolls.',
    },
    progress: {
      name: 'Scroll progress indicator',
      blurb: 'A progress bar driven by which items are visible.',
    },
    'mouse-drag': {
      name: 'Drag to scroll with the mouse',
      blurb: 'Mouse drag that still lets item clicks work.',
    },
    'swipe-desktop': {
      name: 'Swipe on desktop',
      blurb: 'Momentum swiping for mouse users.',
    },
    'mobile-swipe-only': {
      name: 'Hide arrows on mobile',
      blurb: 'Touch-only scrolling on small screens, arrows on desktop.',
    },
    'prevent-body-scroll': {
      name: 'Prevent body scroll',
      blurb: 'Wheel over the menu scrolls the menu, not the page.',
    },
    'add-items': {
      name: 'Load more when the end shows up',
      blurb: 'Infinite append driven by last-item visibility.',
    },
    'add-item-and-scroll-to-it': {
      name: 'Add an item and scroll to it',
      blurb: 'The filter-chips pattern: append, then bring into view.',
    },
    'items-animation': {
      name: 'Animate items in and out',
      blurb: 'Add/remove animations with @formkit/auto-animate.',
    },
    performance: {
      name: '5,000 items and still fast',
      blurb: 'Native scrolling scales — no virtualization needed here.',
    },
    vertical: {
      name: 'Vertical menu',
      blurb: 'The same menu, scrolling top to bottom.',
    },
    rtl: {
      name: 'Right-to-left',
      blurb: 'RTL flips direction; arrows and paging follow.',
    },
    'infinite-loop': {
      name: 'Infinite loop',
      blurb: 'Seamless looping from the public API — no library changes.',
    },
    autoplay: {
      name: 'Autoplay',
      blurb: 'A self-advancing loop with accessible pause behavior.',
    },
    'mui-scrollable-tabs': {
      name: 'Scrollable tabs beyond MUI',
      blurb: 'Keep MUI’s value/onChange contract; swap the strip underneath.',
    },
  },
};
