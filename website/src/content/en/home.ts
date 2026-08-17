import { INTENT, REACT_STATUS, STORIES } from '../../lib/links.ts';
import type { HomeCopy } from '../types.ts';

const OWID = 'https://github.com/owid/owid-grapher';

export const home: HomeCopy = {
  jsonLdDescription:
    'Horizontal scrolling menu component for React with per-item visibility tracking, built on native browser scrolling.',

  hero: {
    titleLead: 'The horizontal menu that ',
    titleHighlight: 'knows what’s visible',
    sub: 'A React scrolling menu built on the browser’s own scroll — per-item visibility tracking, arrows, drag, and a full imperative API. `5.7 kB` gzipped.',
    primaryCta: 'Get started',
    secondaryCta: 'Browse examples',
    storybookCta: 'Open Storybook',
  },

  install: {
    ariaLabel: 'Install',
    copyLabel: 'Copy install command',
    facts: [
      '**347k** downloads/month',
      '**5.7 kB** min+gzip',
      'React **16.8 – 19**',
      '**MIT**',
    ],
  },

  autoplay: {
    heading: 'Autoplay, without a carousel engine',
    lede: 'There’s no `autoplay` prop — this rail is a recipe on the public API: the row cloned onto both ends, one `scrollLeft` jump at the seam, and a timer calling `scrollNext()`. It pauses on hover, focus and hidden tabs, sits still under reduced motion — and you can drag it, even backwards, across the seam.',
    recipeLink: 'Read the full recipe',
    storybookLink: 'Edit it live in Storybook',
  },

  positioning: {
    heading: 'A *menu*, not a carousel',
    scope: [
      'Embla, Swiper and keen-slider re-implement scrolling in JavaScript to build image sliders — snap points, spring physics, a render loop. This library ships none of that. It rides native browser scrolling and adds the one thing the browser doesn’t give you: knowing exactly which items are on screen.',
      '**The wrong tool** for a fullscreen image slider — use Embla or Swiper there. **The right tool** for category rows, tab strips, chip filters, and any row of things your app needs to reason about.',
    ],
    pillars: [
      {
        title: 'Native scrolling',
        body: 'Momentum, scrollbar, touch, wheel and accessibility come from the browser, not a physics engine. The row scrolls before your JavaScript hydrates — every demo on this page is server-rendered.',
      },
      {
        title: 'Visibility tracking',
        body: 'IntersectionObserver reports which items are on screen. `useIsVisible(itemId)` subscribes one component to one item — no scroll-position math, and only the affected items re-render.',
      },
      {
        title: 'Imperative when you need it',
        body: '`scrollToItem`, `scrollNext`, `scrollPrev`, lookup by id or index — through context inside the menu, or `apiRef` from outside it.',
      },
      {
        title: 'Your components, your CSS',
        body: 'Arrows, header, footer and every item are components you write. Item width is your CSS. The library ships 210 bytes of layout styles and stays out of the way.',
      },
    ],
  },

  quickStart: {
    heading: 'Quick start',
    lede: 'One file, no configuration: items with an `itemId`, two arrows reading `VisibilityContext`, and the stylesheet import.',
    notes: [
      '`itemId` is required on every item — it’s how tracking works. The React `key` works as a fallback.',
      '`styles.css` is a separate import; the JS bundle never injects CSS.',
      'Item width comes from your own CSS — the menu measures nothing.',
    ],
    link: 'Read the full getting-started example',
  },

  aiSkills: {
    heading: 'Or hand it to your coding agent',
    body: `Models trained on older releases still reach for \`visibleElements\`, \`Separator\` items and an \`Arrows\` prop — all removed years ago — and invent an \`autoplay\` prop that never existed. The package ships eight \`SKILL.md\` files to stop that: task-scoped guidance your agent loads on demand through [TanStack Intent](${INTENT}), versioned with the library instead of with this page.`,
    copyLabel: 'Copy Intent command',
    note: 'Run once in a project that already has the package installed. Your agent then discovers the skills from `node_modules/react-horizontal-scrolling-menu/skills/`.',
    // The SKILL.md files published inside the package, and the one line each
    // that tells an agent — or a reader deciding whether this is worth a
    // command — when it is the one to load. Kept in the same order as
    // public/llms.txt, which is the machine-readable version of this table.
    skills: [
      {
        id: 'menu-setup',
        when: 'A first working menu, arrows, the required CSS import',
      },
      {
        id: 'menu-visibility',
        when: 'What’s on screen, and arrow state at the edges',
      },
      {
        id: 'menu-scrolling',
        when: 'scrollToItem, apiRef, page-at-a-time paging',
      },
      {
        id: 'menu-interactions',
        when: 'Drag, wheel and touch — and their handler factories',
      },
      {
        id: 'menu-recipes',
        when: 'Autoplay, infinite loop, load-more: recipes, not props',
      },
      {
        id: 'menu-transitions-rtl',
        when: 'Animation timing, custom easing, right-to-left',
      },
      {
        id: 'menu-testing-ssr',
        when: 'Next.js and RSC, Jest mocks, Playwright',
      },
      {
        id: 'menu-migration',
        when: 'Upgrading pre-v8 code, and the APIs models still invent',
      },
    ],
    skillsLink: 'Read the skills on GitHub',
    llmsLink: 'llms.txt — the same facts, condensed',
  },

  gallery: {
    heading: 'Recipes you’ll actually ship',
    lede: 'Four common patterns, live, with the lines that matter.',
    tabs: {
      title: 'A tab strip that centers the active tab',
      body: "Click a tab: `scrollToItem` with `inline: 'center'` brings it to the middle of the row. The same call handles `start`, `end` and paging.",
      link: 'See the full example',
    },
    chips: {
      title: 'Add a chip, scroll to it',
      body: 'State lives outside the menu; `apiRef` reaches in. Add a filter and the row follows it.',
      link: 'See the full example',
    },
    infinite: {
      title: 'Load more when the end shows up',
      body: '`onUpdate` tells you when the last item becomes visible — append the next page right there. No scroll listeners, no pixel thresholds to tune.',
      link: 'See the full example',
    },
    rtl: {
      title: 'Right-to-left, one prop',
      body: '`RTL` flips the scroll container’s direction; arrows and paging logic follow.',
      link: 'See the full example',
    },
  },

  features: {
    heading: 'What’s in the box',
    included: [
      'Per-item visibility hooks — `useIsVisible(itemId)`',
      '`first` / `last` helpers for arrow state',
      '`scrollToItem` · `scrollNext` · `scrollPrev`',
      '`apiRef` for control from outside the menu',
      'Drag, wheel, touch and scrollbar input',
      'Dynamic add/remove detection',
      'Header and Footer slots',
      '`slidingWindow` + `getItemsPos` paging helpers',
      'Right-to-left support',
      'Custom transition functions',
      'SSR-safe — this page proves it',
      'TypeScript-first — `publicApiType` exported',
      'One stable API across React 16.8 – 19',
    ],
    notIncludedHeading: 'Not in the box',
    notIncluded: [
      'Snap and spring physics',
      'Fullscreen image sliders',
      'Lightboxes',
    ],
    note: `Those belong to image-slider land — Embla and Swiper do them well. [Infinite loop](${STORIES.infiniteLoop}) and [autoplay](${STORIES.autoplay}) aren’t props either — they’re recipes: about sixty lines of the public API each, live-editable in Storybook. The rail near the top of this page is exactly that recipe, running. This stays a menu.`,
  },

  proof: {
    statement:
      'Downloaded **347,516 times** last month by some **20,000 repositories** — maintained since **2018**.',
    notes: [
      '788 stars on GitHub',
      `Featured in [React Status #257](${REACT_STATUS})`,
      `In production at [Our World in Data](${OWID})`,
    ],
  },

  storybook: {
    heading: 'Every example is editable, in your browser',
    body: 'The Storybook doubles as a playground: each story ships with a Monaco editor loaded with the library’s real type definitions. Change the code, watch it re-render — no sandbox account, no local setup.',
    primaryCta: 'Open Storybook',
    secondaryCta: 'API reference',
  },

  author: {
    heading: 'Built and maintained by Aleksandr Smyshliaev',
    body: 'First published in 2018, same public API across React 16.8 to 19. Aleksandr is a frontend engineer — React, Next.js, TypeScript — currently open to contract and full-time work.',
    siteLink: 'asmyshlyaev177.dev',
    githubLink: 'GitHub',
    linkedinLink: 'LinkedIn',
  },
};
