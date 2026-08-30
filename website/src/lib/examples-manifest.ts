// Single source of truth for the example pages: slugs, story ids, source
// files (read by vite.config for build-time highlighting and the sitemap)
// and the hub listing. Route files own their titles, meta and prose.
//
// The visible strings — each entry's name and blurb, and the group labels —
// live in content/en/manifest.ts, keyed by the slugs and group ids below.
// Those keys are structure and never change with the language.

import { manifest } from '../content/en/manifest.ts';
import type { STORIES } from './links.ts';

export const EXAMPLE_GROUPS = [
  'Basics',
  'Position & scrolling',
  'Input & gestures',
  'Dynamic items',
  'Layout',
  'Recipes',
] as const;

export type ExampleGroup = (typeof EXAMPLE_GROUPS)[number];

/** Everything about an example that isn't copy. */
interface ExampleSource {
  slug: string;
  group: ExampleGroup;
  /** Key into STORIES (links.ts) for the Storybook deep link. */
  storyKey: keyof typeof STORIES;
  /** Story source path relative to the repo root. */
  sourceFile: string;
}

export interface ExampleEntry extends ExampleSource {
  /** Human name for hub cards and related-example links. */
  name: string;
  /** One-liner for the hub listing. */
  blurb: string;
}

const SOURCES: ExampleSource[] = [
  {
    slug: 'simple',
    group: 'Basics',
    storyKey: 'simple',
    sourceFile: 'stories/Simple/Simple.source.tsx',
  },
  {
    slug: 'one-item',
    group: 'Basics',
    storyKey: 'oneItem',
    sourceFile: 'stories/OneItem/OneItem.source.tsx',
  },
  {
    slug: 'one-item-scroll',
    group: 'Basics',
    storyKey: 'oneItemScroll',
    sourceFile: 'stories/OneItemScroll/OneItemScroll.source.tsx',
  },
  {
    slug: 'bottom-arrows',
    group: 'Basics',
    storyKey: 'bottomArrows',
    sourceFile: 'stories/BottomArrows/BottomArrows.source.tsx',
  },
  {
    slug: 'center-on-click',
    group: 'Position & scrolling',
    storyKey: 'centerOnClick',
    sourceFile: 'stories/CenterOnClick/CenterOnClick.source.tsx',
  },
  {
    slug: 'scroll-to-item',
    group: 'Position & scrolling',
    storyKey: 'scrollToItem',
    sourceFile: 'stories/ScrollToItem/ScrollToItem.source.tsx',
  },
  {
    slug: 'save-restore-position',
    group: 'Position & scrolling',
    storyKey: 'saveRestorePosition',
    sourceFile: 'stories/SaveRestorePosition/Position.source.tsx',
  },
  {
    slug: 'custom-transition',
    group: 'Position & scrolling',
    storyKey: 'customTransition',
    sourceFile: 'stories/CustomTransition/CustomTransition.source.tsx',
  },
  {
    slug: 'progress',
    group: 'Position & scrolling',
    storyKey: 'progress',
    sourceFile: 'stories/Progress/Progress.source.tsx',
  },
  {
    slug: 'mouse-drag',
    group: 'Input & gestures',
    storyKey: 'mouseDrag',
    sourceFile: 'stories/MouseDrag/MouseDrag.source.tsx',
  },
  {
    slug: 'swipe-desktop',
    group: 'Input & gestures',
    storyKey: 'swipeDesktop',
    sourceFile: 'stories/SwipeDesktop/SwipeDesktop.source.tsx',
  },
  {
    slug: 'mobile-swipe-only',
    group: 'Input & gestures',
    storyKey: 'mobileSwipeOnly',
    sourceFile: 'stories/MobileSwipeOnly/MobileSwipeOnly.source.tsx',
  },
  {
    slug: 'prevent-body-scroll',
    group: 'Input & gestures',
    storyKey: 'preventBodyScroll',
    sourceFile: 'stories/PreventBodyScroll/PreventBodyScroll.source.tsx',
  },
  {
    slug: 'add-items',
    group: 'Dynamic items',
    storyKey: 'addItems',
    sourceFile: 'stories/AddItems/AddItems.source.tsx',
  },
  {
    slug: 'add-item-and-scroll-to-it',
    group: 'Dynamic items',
    storyKey: 'addItemScrollTo',
    sourceFile: 'stories/AddItemAndScrollToIt/AddItemAndScrollToIt.source.tsx',
  },
  {
    slug: 'items-animation',
    group: 'Dynamic items',
    storyKey: 'itemsAnimation',
    sourceFile: 'stories/ItemsAnimation/Items_animation.source.tsx',
  },
  {
    slug: 'performance',
    group: 'Dynamic items',
    storyKey: 'performance',
    sourceFile: 'stories/Performance/Performance.source.tsx',
  },
  {
    slug: 'vertical',
    group: 'Layout',
    storyKey: 'vertical',
    sourceFile: 'stories/Vertical/Vertical.source.tsx',
  },
  {
    slug: 'rtl',
    group: 'Layout',
    storyKey: 'rtl',
    sourceFile: 'stories/RTL/RTL.source.tsx',
  },
  {
    slug: 'infinite-loop',
    group: 'Recipes',
    storyKey: 'infiniteLoop',
    sourceFile: 'stories/InfiniteLoop/InfiniteLoop.source.tsx',
  },
  {
    slug: 'autoplay',
    group: 'Recipes',
    storyKey: 'autoplay',
    sourceFile: 'stories/Autoplay/Autoplay.source.tsx',
  },
  {
    slug: 'mui-scrollable-tabs',
    group: 'Recipes',
    storyKey: 'muiTabs',
    sourceFile: 'stories/MuiTabs/MuiTabs.source.tsx',
  },
];

export const EXAMPLES: ExampleEntry[] = SOURCES.map((source) => {
  const listing = manifest.examples[source.slug];
  if (!listing) {
    throw new Error(`Missing example copy for slug: ${source.slug}`);
  }
  return { ...source, name: listing.name, blurb: listing.blurb };
});

/** Visible label for a group id — the id itself if a locale omits it. */
export const exampleGroupLabel = (group: string) =>
  manifest.groups[group] ?? group;

export const exampleBySlug = (slug: string) =>
  EXAMPLES.find((example) => example.slug === slug);
