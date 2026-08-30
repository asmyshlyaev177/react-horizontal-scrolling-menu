import type { UseCasesCopy } from '../types.ts';

export const useCases: UseCasesCopy = {
  hub: {
    heading: 'Use cases',
    lede: 'Complete patterns by outcome — live demo, the code, and a shadcn install for each.',
  },

  netflixRow: {
    meta: {
      title: 'Netflix-style horizontal row in React',
      description:
        'Build a Netflix-style category row in React with native scrolling: hover arrows, edge fade, drag to scroll, visibility tracking. Live demo and full source.',
    },
    jsonLdHeadline:
      'How to build a Netflix-style horizontal row in React — without a carousel library',
    name: 'Netflix-style row',
    blurb: 'Poster cards, hover arrows over the edges, edge fade, drag.',
    title: 'Netflix-style horizontal row in React',
    lede: 'The row of posters you scrub through on every streaming site rides native momentum scrolling with arrows overlaid on top. That is exactly what `react-horizontal-scrolling-menu` ships: your cards, native scroll, and per-item visibility so the arrows know when to hide.',
    demoHint:
      'Drag it, or hover the row — the arrows fade in over the edges, and each disappears when its end of the row is reached.',
    prose: [
      {
        heading: 'Why native scrolling fits',
        body: `A Netflix row never shows one slide at a time. Items are partially cut off at the edges on purpose — the cut-off poster is the affordance that says "there's more". Carousel engines fight this: they own the gesture layer with JavaScript transforms, snap to slide boundaries, and re-implement the momentum your users' browsers already have. On a row of clickable cards all of that is overhead.

Native scrolling gives you momentum, touch, trackpad and scrollbar for free. The two things it does not give you are the overlay arrows and knowing which cards are on screen — and those are the two things this library adds, via [\`useIsVisible\`](/examples/simple) per item and edge-aware arrow state.`,
      },
      {
        heading: 'The three details that sell the effect',
        body: `- **Arrows overlay the content**, they don't sit beside it. Render them absolutely positioned over the row ends (the demo above passes them through \`Header\` so they stay inside the menu's context), show them on hover, and hide each one when [\`useLeftArrowVisible\` / \`useRightArrowVisible\`](/examples/simple) report that end of the row is reached.
- **Edges fade.** One line of CSS — a \`mask-image\` gradient on the scroll container — replaces the "peek" logic carousel plugins ship for this.
- **Drag must not fire clicks.** A mouse drag that ends on a poster must not open it. The [drag-to-scroll recipe](/examples/mouse-drag) tracks drag state and swallows exactly that click.`,
      },
      {
        heading: 'Scaling it: lazy rows and long rails',
        body: `Streaming UIs stack dozens of rows with hundreds of cards. Because items are plain DOM in a native scroll container, nothing re-renders on scroll — the [performance example](/examples/performance) runs 300 items without virtualization. Per-item visibility also gives you image lazy-loading for free: render a placeholder until \`useIsVisible\` reports the card on screen.

If your row should wrap around at the end, that is the one place slide semantics genuinely help — see the [infinite loop recipe](/examples/infinite-loop) for the ~60-line userland version before reaching for a carousel engine.`,
      },
    ],
    snippet: {
      heading: 'The pattern, minimal',
      lede: 'Overlay arrows over a native-scroll row — the demo above is this structure plus styling. Complete drop-in source, with drag and edge fade, ships as the shadcn component below.',
    },
    shadcn: {
      heading: 'Or install it as a shadcn component',
      body: 'The [media-row](https://react-horizontal-scrolling-menu.dev/r/media-row.json) registry item is this exact pattern — hover arrows, gradient edge fade, drag to scroll — as a Tailwind-styled component in your `components/ui/`, yours to edit:',
    },
  },

  scrollableTabs: {
    meta: {
      title: 'React scrollable tabs — no Material UI required',
      description:
        'Scrollable tabs in React with native scrolling: the active tab centers itself, arrows appear only when needed, free-form tab content. Live demo and source.',
    },
    jsonLdHeadline:
      'Scrollable tabs in React: native scrolling, centered selection, no Material UI',
    name: 'Scrollable tabs',
    blurb: 'A tab strip that overflows gracefully and centers the active tab.',
    title: 'React scrollable tabs that scroll like the browser',
    lede: 'A tab strip stops fitting the moment your product grows past six tabs. The fix is not a smaller font — it is a strip that scrolls: overflow rides the browser, clicking a tab centers it, and arrows show up only when there is somewhere to go.',
    demoHint: 'Click a tab near the edge — it scrolls itself to the center.',
    prose: [
      {
        heading: 'The one behavior that matters: center on select',
        body: `A scrollable tab strip lives or dies on what happens when you click a tab at the edge: it should glide to the middle, revealing its neighbors on both sides. That is one call here — \`scrollToItem(el, 'smooth', 'center')\` — wired in the [center-on-click example](/examples/center-on-click). Restoring the active tab on mount is the same call with \`'auto'\`, shown in [save & restore position](/examples/save-restore-position).

The arrows come from the same visibility data: \`useLeftArrowVisible\` is false only while the first tab is off screen, so the left arrow renders exactly when it is useful. No measurement code, no resize observers of your own.`,
      },
      {
        heading: 'If you are outgrowing MUI scrollable tabs',
        body: `Material UI's \`variant="scrollable"\` tabs are the right answer inside Material's design system — until your "tabs" stop being tabs. MUI welds the strip to Tabs semantics: a \`value\`/\`onChange\` pair, tab panels, and scroll buttons that MUI hides on mobile by default. The moment your row holds chips, cards, avatars or mixed content, or needs drag-to-scroll, or needs to know which items are visible, you are fighting the component rather than using it.

This library is the layer below that: a scrolling row with visibility tracking, no opinion about what a "tab" is. Your tab is any component with an \`itemId\` — style it with Tailwind, MUI's own \`styled\`, or plain CSS. Selection state stays yours, exactly like the demo above keeps it in one \`useState\`.`,
      },
      {
        heading: 'Accessibility is mostly free — mind the two gaps',
        body: `Because the strip is a native scroll container, keyboard focus, screen-reader reading order and RTL come from the platform — moving focus through tabs scrolls them into view with zero code, and [RTL](/examples/rtl) needs no configuration. Two things stay on you, same as any tab UI: pick your ARIA pattern (\`role="tablist"\` if real panels switch, \`aria-current\` if the "tabs" are navigation), and keep the [drag-to-scroll](/examples/mouse-drag) recipe's click suppression so a drag release never activates a tab.`,
      },
    ],
    snippet: {
      heading: 'The pattern, minimal',
      lede: 'Tabs are plain buttons with an `itemId`; selecting one centers it. This is the whole idea — the demo above adds styling and drag.',
    },
    shadcn: {
      heading: 'Or install it as a shadcn component',
      body: 'The [scroll-tabs](https://react-horizontal-scrolling-menu.dev/r/scroll-tabs.json) registry item ships this pattern data-driven — pass `tabs`, `value`, `onValueChange` — as an editable component in your `components/ui/`:',
    },
  },

  filterChips: {
    meta: {
      title: 'React filter chips in a scrollable bar',
      description:
        'A horizontal filter-chip bar in React: chips scroll natively, adding a chip scrolls it into view, drag to scroll without breaking clicks. Live demo and source.',
    },
    jsonLdHeadline:
      'Building a scrollable filter-chip bar in React with native scrolling',
    name: 'Filter chips',
    blurb:
      'A chip bar that scrolls new filters into view without breaking clicks.',
    title: 'A filter-chip bar that scrolls, in React',
    lede: 'The chip row under every search bar — YouTube topics, store filters, tag pickers — is a single-line scroll container full of toggle buttons. The hard 10% is what happens at the edges: new chips appearing off-screen, drags that must not toggle anything, and arrows that know when they are pointless.',
    demoHint:
      'Add a filter — the row scrolls the new chip into view by itself.',
    prose: [
      {
        heading: 'The edge cases are the feature',
        body: `Any flex row with \`overflow-x: auto\` scrolls. A chip bar earns its keep on the details:

- **A chip added off-screen must announce itself.** The demo scrolls to every new chip with \`apiRef.current.scrollToItem(el, 'smooth', 'end')\` after render — the [add-item-and-scroll-to-it example](/examples/add-item-and-scroll-to-it) is exactly this wiring.
- **Drag to scroll, click to toggle — never both.** Desktop users drag the row like a touch surface; releasing over a chip must not flip it. The [drag recipe](/examples/mouse-drag) tracks the gesture and suppresses that one click.
- **Arrows only when useful.** \`useLeftArrowVisible\` / \`useRightArrowVisible\` are wired to the same IntersectionObserver as everything else, so arrows disable at the real edges — including after chips are added or removed.`,
      },
      {
        heading: 'State stays in your hands',
        body: `The library scrolls; it does not own selection. Chips are your buttons — \`aria-pressed\` for multi-select toggles, plain state for single-select — and the menu only needs each one to carry an \`itemId\`. That means chip state composes with whatever you already have: URL search params, a form library, a server-driven filter model. Deleting a chip is [removing an item](/examples/add-items); animating it out is the [items-animation example](/examples/items-animation).`,
      },
      {
        heading: 'Mobile: one warning about body scroll',
        body: `On touch screens a horizontal swipe inside the bar can drag the page sideways with it on some browsers. If you see that, the [prevent-body-scroll example](/examples/prevent-body-scroll) shows the \`touch-action\` and overscroll containment to lock it down — CSS only, no gesture library.`,
      },
    ],
    snippet: {
      heading: 'The pattern, minimal',
      lede: 'Chips are toggle buttons with an `itemId`; a ref to the menu API scrolls a newly added chip into view.',
    },
    shadcn: {
      heading: 'Or install it as a shadcn component',
      body: 'The [chip-bar](https://react-horizontal-scrolling-menu.dev/r/chip-bar.json) registry item ships this as a controlled component — `options`, `selected`, `onSelectedChange` — Tailwind-styled in your `components/ui/`:',
    },
  },

  categoryRail: {
    meta: {
      title: 'React category rail for e-commerce',
      description:
        'A horizontal category rail in React: native scrolling, arrows that disable at the edges, per-item visibility for lazy images and analytics. Demo and source.',
    },
    jsonLdHeadline:
      'Building an e-commerce category rail in React on native scrolling',
    name: 'Category rail',
    blurb:
      'A storefront department row: edge-aware arrows, lazy images, analytics.',
    title: 'A category rail for your store, in React',
    lede: 'Category rails — the tappable row of departments over a storefront grid — are the highest-traffic scroll containers in e-commerce: every tile is a link, nothing snaps, and half a tile peeking at the edge is what invites the scroll.',
    demoHint:
      'Drag the rail or use the arrows — they disable at the real ends of the row.',
    prose: [
      {
        heading: 'Why native scroll wins on a storefront',
        body: `Storefront rails live above the fold on pages you fight for every Lighthouse point on. A carousel engine ships tens of kilobytes of gesture emulation to do what the browser does natively; this library is ≈5.7 kB min+gzip and leaves scrolling to the platform, so there is no hydration jank — the rail scrolls before your JavaScript loads, which also means it works in the server-rendered HTML your crawlers see. This page is itself server-rendered proof: the demo above scrolls with JavaScript disabled.

The [comparison page](/compare) has the full table against Swiper, Embla, keen-slider and react-slick.`,
      },
      {
        heading: 'Visibility tracking is a storefront feature',
        body: `Per-item visibility sounds like an implementation detail until you map it to merchandising:

- **Lazy images** — render a placeholder tile until \`useIsVisible\` reports it on screen.
- **Impression analytics** — \`getVisible()\` (live in the [hero demo](/) on the homepage) tells you exactly which categories were seen, not just that the rail rendered.
- **Edge-aware arrows** — disable or hide at the true ends, even after categories load in async, as in the [add-items example](/examples/add-items).`,
      },
      {
        heading: 'Fit it to your design system',
        body: `Tiles are your components — image cards, circles, text pills — each carrying an \`itemId\`. Height and width come from your CSS; the menu imposes no dimensions. Step one item at a time like a product slider with [one-item-scroll](/examples/one-item-scroll), show a scroll [progress indicator](/examples/progress), or ship it RTL for Arabic and Hebrew stores with the [RTL example](/examples/rtl) — the rail is composition, not configuration.`,
      },
    ],
    snippet: {
      heading: 'The pattern, minimal',
      lede: 'Tiles with an `itemId`, arrows from the visibility hooks — the whole rail is under forty lines.',
    },
    shadcn: {
      heading: 'Or install it as a shadcn component',
      body: 'The base [scroll-menu](https://react-horizontal-scrolling-menu.dev/r/scroll-menu.json) registry item is this rail — shadcn-styled arrows, drag to scroll, hidden scrollbar — installed into your `components/ui/` and styled by your tokens:',
    },
  },
};
