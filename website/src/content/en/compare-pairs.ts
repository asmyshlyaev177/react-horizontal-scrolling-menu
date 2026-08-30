import type { ComparePairsCopy } from '../types.ts';

// Neutral-pair comparison pages. The voice is a referee's, not a vendor's:
// each page recommends the right carousel for carousel jobs and claims only
// the menu-shaped slice. Overselling here burns the credibility the pages
// exist to earn.
export const comparePairs: ComparePairsCopy = {
  hub: {
    heading: 'More comparisons',
    lede: 'Deeper pages on the specific choices people actually weigh.',
  },

  emblaVsSwiper: {
    meta: {
      title: 'Embla vs Swiper: which React carousel to pick',
      description:
        'Embla vs Swiper compared honestly: bundle size, features, headless vs batteries-included — and the third option when your carousel is really a menu.',
    },
    jsonLdHeadline:
      'Embla vs Swiper for React: an honest comparison, plus the case where you need neither',
    name: 'Embla vs Swiper',
    blurb:
      'Headless engine or batteries included — and the case where you need neither.',
    title: 'Embla vs Swiper: pick by what you’re building',
    lede: 'Both are excellent, actively maintained carousel engines, and the choice between them is genuinely close. It comes down to one axis: Swiper ships every feature built in; Embla ships a small headless engine you build on. This page is written by the maintainer of a library that competes with neither — which is also the third answer at the bottom, for the builds that turn out not to be carousels at all.',
    table: {
      headers: ['', 'Embla', 'Swiper'],
      rows: [
        [
          'What it is',
          'Headless carousel engine',
          'Full slider/carousel framework',
        ],
        ['Bundle (core, min+gzip)', '≈8 kB', '≈40 kB (grows with modules)'],
        [
          'Styling & markup',
          'Yours entirely — it ships none',
          'Its own DOM structure and CSS, themed',
        ],
        [
          'Effects (fade, cube, coverflow…)',
          'Community plugins, or DIY',
          'Built in, mature',
        ],
        [
          'Autoplay, pagination, thumbs',
          'Official plugins',
          'Built-in modules',
        ],
        [
          'React integration',
          'First-class hook (useEmblaCarousel)',
          'Wrapper components over a vanilla core',
        ],
        [
          'Ecosystem note',
          'The engine under the shadcn/ui carousel',
          'The most-used slider on the web',
        ],
        [
          'Best for',
          'Custom-designed carousels, design systems',
          'Image-first sliders, feature-heavy galleries',
        ],
      ],
      note: 'Bundle sizes are approximate cores — check bundlephobia for current numbers; Swiper’s grows with the modules you import.',
    },
    prose: [
      {
        heading: 'Choose Embla when design control is the point',
        body: `Embla gives you snap physics, drag handling and a slide model, and nothing else — no markup, no CSS, no arrows. That is its strength: in a design system, everything visible is yours, and the engine never fights your styles. It is what shadcn/ui builds its carousel on, which tells you the sweet spot: teams that want a carousel to look like *their* product, not like a carousel library.

The cost is that every feature beyond sliding is an add-on or hand-built: autoplay and class-names are official plugins; pagination dots, thumbnails and effects are yours to write.`,
      },
      {
        heading: 'Choose Swiper when you want the features shipped',
        body: `Swiper is the batteries-included answer: fade, cube and coverflow effects, virtual slides, zoom, parallax, thumbs galleries, a11y module, pagination in several styles — configured, not built. If your product needs three of those this quarter, Swiper earns its size many times over.

The cost is the inverse of Embla's: you inherit Swiper's DOM, its CSS to theme, and a vanilla-JS core wrapped for React — heavier both in kilobytes and in surface area.`,
      },
      {
        heading: 'The question to ask before either',
        body: `Both libraries assume you are presenting *slides* — one thing, or one page of things, at a time, with snapping and a sense of position. A large share of real "carousels" are nothing like that: category rows, logo strips, tab bars, chip filters — rows of clickable items your user scans and picks from. Those want native scrolling (momentum, scrollbar, wheel, accessibility for free) plus knowing which items are on screen — and neither Embla nor Swiper models per-item visibility, because slides aren't items.

For that shape there is a third option: [react-horizontal-scrolling-menu](/) (≈5.7 kB) rides native scroll and ships \`useIsVisible\`, \`scrollToItem\` and edge-aware arrows. See it as a [Netflix-style row](/netflix-row), a [tab strip](/scrollable-tabs) or a [chip bar](/filter-chips), or the [full comparison table](/compare) against both.`,
      },
    ],
  },

  reactSlickAlternatives: {
    meta: {
      title: 'react-slick alternatives in 2026',
      description:
        'Migrating off react-slick: Embla and Swiper for real carousels, react-horizontal-scrolling-menu for centerMode-as-navigation rows. Honest migration guide.',
    },
    jsonLdHeadline:
      'react-slick alternatives: where to migrate real carousels, and where your centerMode row should go',
    name: 'react-slick alternatives',
    blurb:
      'Where to migrate real carousels — and where the centerMode rows should go.',
    title: 'react-slick alternatives: migrate by what you built with it',
    lede: 'react-slick ports the jQuery-era slick carousel to React. It still works, but the architecture predates hooks, releases are sparse, and it drags a separate CSS file into every build. The right replacement depends less on features than on which of two camps your usage falls into.',
    table: {
      headers: [
        '',
        'react-slick',
        'Embla',
        'Swiper',
        'react-horizontal-scrolling-menu',
      ],
      rows: [
        [
          'What it is',
          'React port of jQuery slick',
          'Headless carousel engine',
          'Full slider framework',
          'Scrolling menu, native scroll',
        ],
        ['Maintenance', 'Sparse', 'Active', 'Active', 'Active since 2018'],
        [
          'Bundle (min+gzip)',
          '≈15 kB + slick CSS',
          '≈8 kB',
          '≈40 kB',
          '≈5.7 kB',
        ],
        [
          'Extra CSS file required',
          'Yes (two)',
          'No',
          'Yes (core)',
          'One, or Tailwind via shadcn item',
        ],
        [
          'Slide semantics (snap, dots, fade)',
          'Yes',
          'Yes',
          'Yes',
          'No — deliberately',
        ],
        [
          'Rows of clickable items',
          'Bent via centerMode',
          'Hand-built on the engine',
          'Configured against the grain',
          'The core use case',
        ],
      ],
      note: 'Sizes are approximate cores. The last column is this site’s own library — the table says so rather than pretending otherwise.',
    },
    prose: [
      {
        heading: 'Camp one: it was a real carousel',
        body: `Hero sliders, image galleries, testimonial rotators — anything where slick's dots, fade and autoplay carried the design. Migrate to a real carousel engine:

- **[Embla](/compare/embla-vs-swiper)** if you style everything yourself and want a small headless core — the closest to "slick, modernized" in spirit.
- **Swiper** if you used slick's feature list heavily; every slick feature has a Swiper equivalent, usually better.

Map \`slidesToShow\`/\`slidesToScroll\` to Embla's \`slidesInView\`/\`slidesToScroll\` or Swiper's \`slidesPerView\`/\`slidesPerGroup\`, and expect to delete your arrow-positioning CSS overrides — both successors let you render your own buttons.`,
      },
      {
        heading: 'Camp two: it was navigation wearing centerMode',
        body: `The other slick install is the quiet one: a row of categories, logos, dates or filters, bent into a carousel with \`centerMode\`, \`focusOnSelect\` and \`variableWidth\` because slick was already in the bundle. The tell is what you fought: clicks firing after drags, arrows at the wrong times, items you couldn't measure, snap you didn't want.

That row was a menu. [react-horizontal-scrolling-menu](/) does the three things centerMode was faking — [center the clicked item](/examples/center-on-click), scroll natively with [drag support](/examples/mouse-drag), and report [which items are visible](/examples/simple) — in ≈5.7 kB with no slider engine. See the [scrollable tabs](/scrollable-tabs) and [category rail](/category-rail) pages for the two most common shapes.`,
      },
      {
        heading: 'Whichever camp: the migration is smaller than it looks',
        body: 'slick’s API surface is large, but audits of real configs shrink fast: most projects use a handful of props. List the ones you actually set, decide which camp each usage is in, and migrate per-instance — the two camps often coexist in one codebase, and there is no rule both must land on the same library.',
      },
    ],
  },

  swiperAlternatives: {
    meta: {
      title: 'Lighter Swiper alternatives for React',
      description:
        'Looking for a lighter Swiper alternative in React? Embla and keen-slider for real carousels, react-horizontal-scrolling-menu for menu-shaped rows. Sizes compared.',
    },
    jsonLdHeadline:
      'Swiper alternatives for React: lighter carousels, and the menu-shaped escape hatch',
    name: 'Swiper alternatives',
    blurb:
      'When ≈40 kB is the complaint: lighter engines, and the menu-shaped escape hatch.',
    title: 'Swiper alternatives for React, by what you’re actually escaping',
    lede: 'Nobody leaves Swiper because it is bad — it is the most complete slider there is. People leave over weight (≈40 kB before modules), over inheriting its DOM and CSS, or because their "slider" was never really slides. Each complaint has a different best answer.',
    table: {
      headers: [
        '',
        'Swiper',
        'Embla',
        'keen-slider',
        'react-horizontal-scrolling-menu',
      ],
      rows: [
        ['Bundle (core, min+gzip)', '≈40 kB', '≈8 kB', '≈7 kB', '≈5.7 kB'],
        [
          'Model',
          'Slides, batteries included',
          'Slides, headless',
          'Slides, minimal engine',
          'Items in a native scroll row',
        ],
        [
          'Effects & modules',
          'Richest available',
          'Plugins / DIY',
          'Some built in',
          'None — recipes instead',
        ],
        [
          'Owns the gesture layer',
          'Yes (transforms)',
          'Yes (transforms)',
          'Yes (transforms)',
          'No — browser scrolls',
        ],
        [
          'Per-item visibility',
          'Slide-index events',
          'Slide-index events',
          'Slide-index events',
          'Built in (useIsVisible)',
        ],
        [
          'Best swap when',
          '—',
          'You style everything anyway',
          'Minimal slider, no React lock-in',
          'The "slides" are clickable items',
        ],
      ],
      note: 'Sizes are approximate cores — Swiper’s grows with imported modules, which also means a trimmed Swiper build is smaller than its reputation.',
    },
    prose: [
      {
        heading: 'Escaping the kilobytes: Embla or keen-slider',
        body: `If the product is a real carousel — snapping, one page of slides at a time — the lightweight engines are drop-in-close:

- **[Embla](/compare/embla-vs-swiper)** (≈8 kB): headless, superb physics, first-class React hook, the engine under shadcn/ui's carousel. You bring all markup and CSS — which is the point.
- **keen-slider** (≈7 kB): a minimal framework-agnostic engine, good when the same slider must ship to React and non-React surfaces.

Both keep the transform-based slide model, so effects like fade or coverflow stay DIY — if you rely on those, a trimmed Swiper build is honestly the better answer than re-implementing them.`,
      },
      {
        heading: 'Escaping the slide model: the menu-shaped case',
        body: `The other exit is for builds where Swiper's slide semantics were never load-bearing: category rows, logo walls, tab strips, chip bars, product rails. The tells are configuration like \`slidesPerView: 'auto'\` plus \`freeMode: true\` — that pair is Swiper being asked to impersonate native scrolling.

[react-horizontal-scrolling-menu](/) (≈5.7 kB) is that native scrolling, plus the parts the browser doesn't ship: [per-item visibility](/examples/simple), [scroll-to-item](/examples/scroll-to-item), edge-aware arrows and [drag that doesn't break clicks](/examples/mouse-drag). No effects, no snapping, no gesture emulation — see the [Netflix-row](/netflix-row), [tabs](/scrollable-tabs) and [chip-bar](/filter-chips) pages, or the [full table](/compare).`,
      },
      {
        heading: 'A fair warning in both directions',
        body: 'Migrating off Swiper to save weight and then hand-building autoplay, pagination, a11y announcements and effects is how a 40 kB problem becomes a person-month problem. Swap to a lighter engine when your usage is genuinely a subset — and to a scrolling menu only when the slide semantics were fake all along. If you use Swiper’s depth, keep Swiper.',
      },
    ],
  },
};
