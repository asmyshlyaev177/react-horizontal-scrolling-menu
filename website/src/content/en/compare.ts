import type { CompareCopy } from '../types.ts';

export const compare: CompareCopy = {
  meta: {
    title: 'react-horizontal-scrolling-menu vs Swiper, Embla, react-slick',
    description:
      'An honest comparison: when a horizontal scrolling menu beats a carousel library, and when it does not. Swiper, Embla, keen-slider and react-slick, side by side.',
  },
  jsonLdHeadline:
    'Carousel or scrolling menu? react-horizontal-scrolling-menu vs Swiper, Embla, keen-slider and react-slick',

  title: 'Carousel or scrolling menu? An honest comparison',
  lede: 'Swiper, Embla, keen-slider and react-slick are carousel engines: they re-implement scrolling in JavaScript to get slide semantics, snap physics and effects. react-horizontal-scrolling-menu is not one of them — it rides native browser scrolling and adds per-item visibility tracking. Which one you want depends on what you’re building, and for a real slice of carousel usage the honest answer is: you were building a menu all along.',

  table: {
    headers: [
      '',
      'this library',
      'Swiper',
      'Embla',
      'keen-slider',
      'react-slick',
    ],
    rows: [
      [
        'What it is',
        'Scrolling menu with visibility tracking',
        'Full slider/carousel framework',
        'Headless carousel engine',
        'Framework-agnostic slider engine',
        'React port of the jQuery slick slider',
      ],
      [
        'Scroll engine',
        'Native browser scrolling',
        'JS transforms + physics',
        'JS transforms + physics',
        'JS transforms + physics',
        'JS transforms (CSS transitions)',
      ],
      [
        'Bundle (core, min+gzip)',
        '≈5.7 kB',
        '≈40 kB',
        '≈8 kB',
        '≈7 kB',
        '≈15 kB + slick CSS',
      ],
      [
        'Which items are on screen',
        'Built in — per-item useIsVisible',
        'Slide-index based',
        'Slide-index events',
        'Slide-index events',
        'Slide-index based',
      ],
      [
        'Snap, effects, physics',
        'None — deliberately',
        'Rich (fade, cube, coverflow…)',
        'Plugin-based, tweenable',
        'Yes, incl. free mode',
        'Fade, center mode',
      ],
      [
        'Loop / autoplay',
        'Recipes on the public API',
        'Built-in props',
        'Plugins',
        'Built-in options',
        'Built-in props',
      ],
      [
        'Scrollbar, wheel, keyboard focus',
        'Native — free from the browser',
        'Emulated / opt-in modules',
        'DIY (headless)',
        'DIY',
        'Limited',
      ],
      [
        'Best for',
        'Category rows, tab strips, chip filters',
        'Fullscreen sliders, galleries',
        'Custom carousels (shadcn default)',
        'Minimal custom sliders',
        'Legacy slick migrations',
      ],
    ],
    note: 'Bundle sizes are approximate cores — check bundlephobia for current numbers before deciding on size alone.',
  },

  prose: [
    {
      heading: 'First, the real question',
      body: `A **carousel** presents slides: one thing (or one page of things) at a time, with snapping, effects and a sense of “position 3 of 8”. A **menu** presents a row your user scans and picks from: a category rail, a tab strip, a chip bar. Carousels want slide semantics; menus want native scrolling — momentum, scrollbar, wheel, touch and keyboard focus behaving exactly like the rest of the page — plus one thing the browser doesn’t give you: knowing which items are on screen.

If you’re building a fullscreen image slider, a hero gallery, or anything with snap-to-slide physics, **use a carousel library — Embla or Swiper are excellent**. This page exists for the other case, the one every carousel FAQ quietly ignores: rows of clickable things that were never really slides.`,
    },
    {
      heading: 'vs Swiper',
      body: `Swiper is the most complete slider framework there is: effects (fade, cube, coverflow), virtual slides, zoom, parallax, pagination, and a mature ecosystem. It earns its ~40 kB when you use what it ships. It re-implements scrolling with transforms, so the native scrollbar, wheel behavior and scroll accessibility are emulations you configure rather than defaults you inherit.

- **Choose Swiper** for image-first sliders, effects, or anything that must feel like slides.
- **Choose this library** when the “carousel” is a YouTube-style chip bar or a Netflix-style category row: you get native scroll for ~34 kB less, plus \`useIsVisible\` per item — which Swiper doesn’t model, because slides aren’t items.`,
    },
    {
      heading: 'vs Embla',
      body: `Embla is a headless carousel engine with beautiful physics and a first-class React adapter — it’s what shadcn/ui builds its carousel on, and the right default when you want full visual control over a real carousel. Headless cuts both ways for menus: scroll-into-view on selection, per-item visibility, arrow disabling and focus management are all yours to hand-build.

- **Choose Embla** for custom-designed carousels and snap physics with small size.
- **Choose this library** when those hand-built parts are the whole point: \`scrollToItem\`, \`useIsVisible\`, first/last arrow state and \`apiRef\` ship working.`,
    },
    {
      heading: 'vs keen-slider',
      body: 'keen-slider is a lean, framework-agnostic slider engine — a good pick for minimal custom sliders when you want one dependency across frameworks. Like the others it owns the gesture layer with transforms, and its API is slide-index-shaped: fine for slides, awkward for “scroll the selected chip into view and tell me what’s visible”.',
    },
    {
      heading: 'vs react-slick',
      body: 'react-slick ports the jQuery-era slick carousel to React. It still works, but it drags in a separate CSS file, its architecture predates hooks, and maintenance is sparse. Teams leaving it usually fall into two camps: real carousels (go to Embla or Swiper) — and navigation rows that were bent into `centerMode` because slick was already installed. That second camp is this library’s exact shape: [centered selection](/examples/center-on-click), [one-item stepping](/examples/one-item-scroll) and [drag to scroll](/examples/mouse-drag) without a slider engine.',
    },
    {
      heading: 'What the menu side looks like',
      body: `Every pattern on this site is live and server-rendered, each with its complete source: [scrollable tabs](/examples/center-on-click), [filter chips](/examples/add-item-and-scroll-to-it), [load-more rows](/examples/add-items), and — the two features people assume need a carousel engine — [infinite loop](/examples/infinite-loop) and [autoplay](/examples/autoplay), each about sixty lines on the public API.

- 5.7 kB min+gzip, TypeScript-first, MIT, ~347k downloads/month, maintained since 2018 with one stable API across React 16.8–19.
- SSR-friendly: the row scrolls before your JavaScript hydrates — this page and every demo on this site prove it.`,
    },
  ],

  links: {
    examples: 'Browse all examples',
    storybook: 'Try it in Storybook',
    github: 'GitHub',
  },
};
