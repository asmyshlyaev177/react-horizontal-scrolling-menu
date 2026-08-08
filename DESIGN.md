---
name: react-horizontal-scrolling-menu
description: Landing-page world for the React scrolling menu that knows what's visible — flat, product-polished, engineering-honest, with the library demoing itself live.
colors:
  bg: 'oklch(1 0 0)'
  surface: 'oklch(0.965 0.004 15)'
  surface-2: 'oklch(0.93 0.006 15)'
  ink: 'oklch(0.21 0.015 15)'
  muted: 'oklch(0.45 0.015 15)'
  border: 'color-mix(in oklab, var(--ink) 14%, transparent)'
  border-strong: 'color-mix(in oklab, var(--ink) 26%, transparent)'
  primary: 'oklch(0.55 0.21 15)'
  primary-strong: 'oklch(0.48 0.2 15)'
  btn-bg: 'oklch(0.51 0.2 15)'
  btn-bg-hover: 'oklch(0.45 0.19 15)'
  primary-soft: 'color-mix(in oklab, var(--primary) 8%, var(--bg))'
  on-primary: 'oklch(0.99 0.005 15)'
  accent: 'oklch(0.38 0.14 265)'
  ok: 'oklch(0.5 0.14 150)'
  demo-red: 'oklch(0.55 0.19 15)'
  demo-amber: 'oklch(0.78 0.13 75)'
  demo-green: 'oklch(0.66 0.14 150)'
  demo-cyan: 'oklch(0.75 0.1 210)'
  demo-blue: 'oklch(0.52 0.16 262)'
  demo-violet: 'oklch(0.51 0.17 305)'
typography:
  display:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: 'clamp(2.4rem, 5.4vw, 4rem)'
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: '-0.025em'
  headline:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: 'clamp(1.7rem, 3vw, 2.3rem)'
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: '-0.02em'
  title:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: '1.35rem'
    fontWeight: 650
    lineHeight: 1.12
    letterSpacing: '-0.015em'
  body:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: '1.0625rem'
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: '0.95rem'
    fontWeight: 500
    lineHeight: 1.4
  mono:
    fontFamily: "'JetBrains Mono Variable', 'JetBrains Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace"
    fontSize: '0.85rem'
    fontWeight: 400
    lineHeight: 1.6
rounded:
  s: '8px'
  m: '12px'
  l: '18px'
  pill: '999px'
spacing:
  pad: 'clamp(1.25rem, 4vw, 2rem)'
  container: '72rem'
  section: 'clamp(3rem, 7vw, 5.5rem)'
  section-major: 'clamp(3.5rem, 8vw, 6rem)'
components:
  button-primary:
    backgroundColor: '{colors.btn-bg}'
    textColor: '{colors.on-primary}'
    rounded: '10px'
    padding: '0.72rem 1.35rem'
  button-primary-hover:
    backgroundColor: '{colors.btn-bg-hover}'
    textColor: '{colors.on-primary}'
  button-ghost:
    backgroundColor: 'transparent'
    textColor: '{colors.ink}'
    rounded: '10px'
    padding: '0.72rem 1.35rem'
  arrow-button:
    backgroundColor: '{colors.bg}'
    textColor: '{colors.ink}'
    rounded: '50%'
    size: '2.6rem'
  tab-pill:
    backgroundColor: '{colors.bg}'
    textColor: '{colors.ink}'
    rounded: '{rounded.pill}'
    padding: '0.5rem 1.1rem'
  tab-pill-active:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.bg}'
    rounded: '{rounded.pill}'
    padding: '0.5rem 1.1rem'
  chip:
    rounded: '{rounded.pill}'
    padding: '0.42rem 0.65rem 0.42rem 0.95rem'
  install-command:
    backgroundColor: '{colors.surface}'
    rounded: '{rounded.m}'
    padding: '0.7rem 1rem'
  code-panel:
    backgroundColor: '{colors.surface}'
    rounded: '{rounded.m}'
  genre-tile:
    rounded: '{rounded.l}'
    padding: '1rem 1.1rem'
    width: 'clamp(9.5rem, 17vw, 11.5rem)'
---

# Design System: react-horizontal-scrolling-menu

**Scope.** This file documents the landing-page world in `website/` only (styles in `website/src/styles/app.css`, shell in `website/src/routes/__root.tsx`). The Storybook and the example apps are separate surfaces with their own, undocumented styling — do not extend this system onto them, and do not import their conventions here.

## Overview

**Creative North Star: "The Component Sells Itself"**

This is a product page where the product is the page. Every demo is a real `ScrollMenu` instance, server-rendered and hydrated, and the hero dramatizes the library's one mechanism — per-item visibility tracking — by dimming tiles the moment `IntersectionObserver` reports them off-screen. The visual world serves that thesis: flat, quiet, engineering-honest chrome (pure white or near-black grounds, hairline borders, one scarlet) that stays out of the way so the moving, colorful thing in the middle of it is unmistakably the library, not the page design.

The tone is product-polished with the friendly confidence of deno.com and the honesty of a changelog: real numbers set as prose, an explicit "Not in the box" panel, code as the primary copy. Density is generous — wide whitespace between sections, hairline dividers instead of boxed backgrounds — and everything is flat color; there is not a single gradient in the world.

Two directions were considered and refused at inception: the generic gradient-hero SaaS template, and stat-tile proof walls (proof is a single large typographic sentence instead).

**Key Characteristics:**

- Live demos are the imagery; there are no screenshots, mocks, or illustrations.
- Flat color only — solid fills, hairline borders, two soft shadows; no gradients anywhere.
- One scarlet primary (OKLCH hue 15) threads through everything, including a whisper of hue-15 chroma (0.004–0.015) in every "neutral" surface and ink.
- Playful flat color exists but is caged inside demo card content.
- Both themes ship fully finished via `prefers-color-scheme` alone — no toggle, no `data-theme` attribute; `color-scheme: light dark` is declared on `:root`, and `theme-color` metas are `#ffffff` / `#0a0a0a` per scheme.
- Motion is a response to input, with exactly one authored exception (the hero rail's peek).

## Colors

A near-monochrome warm-neutral world with one scarlet voice, one indigo link color, one success green, and a caged six-color demo palette; everything is defined in OKLCH and derived borders use `color-mix` off the ink.

### Primary

- **Scarlet** (`--primary`, oklch(0.55 0.21 15); dark: oklch(0.63 0.195 15)): the single brand voice. Used sparingly and precisely: the key phrase inside the H1, `em` highlights in headlines, `strong` numbers in the proof statement, the `$` prompt in the install command, the focus-visible outline, the selection tint (at 24% via `color-mix`), the spinner's live edge, the checked switch, and the lit middle bar of the logo Mark. In dark it lifts to 0.63 lightness so it reads as text on near-black.
- **Scarlet Deep** (`--primary-strong`, oklch(0.48 0.2 15); dark: oklch(0.7 0.185 15)): the emphasis step of primary (note it inverts direction in dark — brighter, not deeper).
- **Button Scarlet** (`--btn-bg`, oklch(0.51 0.2 15), hover `--btn-bg-hover` oklch(0.45 0.19 15)): the fill for solid buttons, identical in both themes. It exists as its own token because white-on-`--primary` passes AA in light but fails in dark, where primary lifts to 0.63 lightness; pinning button fills at 0.51 keeps `--on-primary` (oklch(0.99 0.005 15)) passing AA in both themes. This was verified, not assumed.
- **Scarlet Wash** (`--primary-soft`, primary mixed 8% into bg; 14% in dark): reserved tint for soft-primary surfaces.

### Secondary

- **Link Indigo** (`--accent`, oklch(0.38 0.14 265); dark: oklch(0.74 0.11 265)): every text link, plus the `getVisible()` function name in the hero readout. Deliberately not scarlet, so links never compete with the brand voice.
- **Confirm Green** (`--ok`, oklch(0.5 0.14 150); dark: oklch(0.72 0.14 150)): success and "visible" states — the copied-checkmark, feature-list checks, and the quick-start card's `visible: true` readout.

### Neutral

- **Paper** (`--bg`, oklch(1 0 0) — pure white; dark: oklch(0.125 0 0) — near-black): the page ground and the fill of elements that must sit "above" it (arrow buttons, tab pills, cards inside surface panels). The only achromatic tokens in the system.
- **Warm Surface** (`--surface`, oklch(0.965 0.004 15); dark: oklch(0.175 0.005 15)): panels, code panels, the install command, hover fills. One step deeper: `--surface-2` (oklch(0.93 0.006 15); dark oklch(0.225 0.006 15)) for hover-on-surface.
- **Ink** (`--ink`, oklch(0.21 0.015 15); dark: oklch(0.93 0.004 15)): all headings and primary text; also the fill of the active tab pill (ink-on-bg inverts to bg-on-ink).
- **Muted Ink** (`--muted`, oklch(0.45 0.015 15); dark: oklch(0.7 0.008 15)): secondary copy, ledes, captions, footer. AA on its grounds in both themes.
- **Hairline / Hairline Strong** (`--border` = ink at 14% via color-mix, `--border-strong` = 26%; dark: 17% / 30%): all structure. Borders are always 1px and always derived from ink, so they re-tint automatically per theme.

### Demo palette (caged)

Six flat voices used only inside demo content: **demo-red** (oklch(0.55 0.19 15)), **demo-amber** (oklch(0.78 0.13 75)), **demo-green** (oklch(0.66 0.14 150)), **demo-cyan** (oklch(0.75 0.1 210)), **demo-blue** (oklch(0.52 0.16 262)), **demo-violet** (oklch(0.51 0.17 305)). Near-identical in both themes (only green/cyan/amber shift ≤0.02 lightness in dark). Assignments live in `website/src/lib/demo-data.ts`.

### Named Rules

**The Demo Cage Rule.** The six `--demo-*` colors appear only inside demo card content — genre tiles, filter chips, feed-card bars. Page chrome never borrows them, which is itself the sales pitch: items are your components, styled by your CSS; the library's chrome stays neutral.

**The Button Ink Rule.** Filled controls use `--btn-bg` / `--btn-bg-hover`, never `--primary`. `--primary` is for text, strokes, and focus rings; it changes lightness per theme and white text on it fails AA in dark. `--btn-bg` is theme-invariant precisely so `--on-primary` always passes.

**The Fixed Ink Rule.** Each demo color carries its own theme-independent text ink, set inline where the color is applied: near-black `oklch(0.22 0.02 60)` on the light trio (amber, green, cyan — flagged `darkText: true` in demo-data), near-white `oklch(0.99 0.005 15)` on the dark trio (red, blue, violet). AA holds in both themes because neither the fill nor the ink changes with the theme.

**Contrast commitment.** WCAG AA in both themes is a verified floor, not an aspiration — the live deploy audits 100 on accessibility, and the `--btn-bg` split above is the scar tissue proving the check was real.

## Typography

**Display + Body Font:** Schibsted Grotesk Variable (fallback: Schibsted Grotesk, system-ui, sans-serif)
**Mono Font:** JetBrains Mono Variable (fallback: JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace)

Both are self-hosted variable fonts via `@fontsource-variable` (imported in `__root.tsx`); `font-optical-sizing: auto` is on. One grotesk does every job from hero to caption — the variable axis makes the in-between weights (650, 550) real, and they are used deliberately.

**Character:** A confident, slightly characterful grotesk set tight at display sizes (negative tracking scales with size, from -0.025em on the hero down to -0.01em on titles), paired with an unmistakably technical mono. Friendly product voice, engineering accent.

### Hierarchy

- **Display** (700, clamp(2.4rem, 5.4vw, 4rem), 1.12, -0.025em): the hero H1 only, capped at 21ch, with the key phrase in scarlet.
- **Headline** (700, clamp(1.7rem, 3vw, 2.3rem), 1.12, -0.02em): section headings. The positioning manifesto runs one notch larger (clamp(1.9rem, 3.4vw, 2.6rem)); the proof statement is its own beast — clamp(1.5rem, 3.2vw, 2.4rem) at weight 650, line-height 1.25, max 26ch, numbers bolded in scarlet.
- **Title** (650, 1.15–1.35rem, -0.01 to -0.015em): card and gallery H3s, pillar headings, the author heading.
- **Body** (400, 1.0625rem, 1.65): default copy. Secondary copy drops to 0.95–0.99rem in `--muted`. Measures are capped everywhere: 65ch prose, 56–60ch ledes and subs, 48–58ch card copy.
- **Label** (500–550, 0.9–0.95rem): nav links, demo labels, hints, toggles. Never uppercase, never letterspaced — this world has no kickers or eyebrows.
- **Mono** (400, 0.72–0.98rem): code panels at 0.8–0.83rem/1.6; the hero readout at 0.85rem; the install command at 0.98rem; tiny data (card ids, feed numbers) at 0.72–0.78rem. Inline `code` in prose runs at 0.88em of its parent in `--ink`.

### Named Rules

**The Mono Is Data Rule.** JetBrains Mono appears only where the content is genuinely machine-facing: code, the install command, filename bars, the `getVisible()` readout, item ids, feed indices. It is never used decoratively, and sans never renders code.

**The Weight Ladder Rule.** Emphasis moves in half-steps on the variable axis: 400 body → 500 labels → 550 pills/chips → 600 buttons and `strong` facts → 650 titles → 700 display/headline. Bold-for-emphasis inside body copy is 600, not 700.

## Layout

A single centered column, `--container` 72rem, with `--pad` clamp(1.25rem, 4vw, 2rem) inline padding. Sections breathe with `padding-block` clamp(3rem, 7vw, 5.5rem) (the positioning and proof sections go up to clamp(3.5rem, 8vw, 6rem)); structure between and within sections is drawn with 1px hairlines (`border-block` on the install strip, `border-top` between pillars, top rules on author and footer), never with boxed background bands — `--surface` fills belong to components (panels, code, demos), not to section backgrounds.

Grids are asymmetric and editorial: positioning is 5fr/7fr, quick start 7fr/5fr, gallery items 5fr/7fr with copy and demo alternating sides per row (`nth-of-type(even)` flips order). Everything collapses to one column between 860–980px depending on density; the header drops its wordmark under 640px; the hero rail hides its arrows under 720px (touch scrolls).

The signature layout move is the full-bleed hero rail: the scroll container spans the viewport while `padding-inline: max(var(--pad), calc((100% - var(--container)) / 2 + var(--pad)))` snaps its first tile to the container's text edge, and the overlay arrows use the same `max()` calc to hang just outside it. Content aligns; the rail bleeds.

## Elevation & Depth

Flat by conviction. Depth is conveyed by hairline borders and the bg/surface/surface-2 ladder; shadows exist only as a two-step vocabulary for interactive elements that float or invite pressing, and they are hue-15-tinted in light, pure black at higher alpha in dark.

### Shadow Vocabulary

- **Rest** (`--shadow-1`: `0 1px 2px oklch(0.2 0.01 15 / 0.06), 0 4px 12px oklch(0.2 0.01 15 / 0.07)`; dark: `0 1px 2px oklch(0 0 0 / 0.4), 0 4px 12px oklch(0 0 0 / 0.35)`): primary buttons and arrow buttons at rest.
- **Hover** (`--shadow-2`: `0 2px 4px oklch(0.2 0.01 15 / 0.08), 0 12px 28px oklch(0.2 0.01 15 / 0.12)`; dark: `0 2px 4px oklch(0 0 0 / 0.45), 0 12px 28px oklch(0 0 0 / 0.5)`): the same elements on hover — the only elevation change in the system.

### Named Rules

**The Borders Structure, Shadows Respond Rule.** Static containers (code panels, demo frames, the not-included card, the Storybook panel) get a 1px `--border` and no shadow, ever. Shadows belong exclusively to interactive floaters — the primary button and the circular arrow buttons that overlay the hero rail — and step from `--shadow-1` to `--shadow-2` on hover. A disabled arrow loses its shadow entirely.

## Shapes

Rounded rectangles on a three-step radius scale that grows with element size: 8px (`--radius-s`) for small chrome (nav-link hover, skip link), 12px (`--radius-m`) for panels, cards and the install command, 18px (`--radius-l`) for the biggest surfaces (genre tiles, gallery demo frames, the Storybook panel). Buttons sit between steps at 10px; tiny elements shrink proportionally (7px copy button, 6px inline code, 4px focus-ring corners and feed bars).

Full pills (999px) mark the selectable and removable: tab pills, filter chips, the RTL switch. Perfect circles mark the icon-only and the human: arrow buttons, chip-remove buttons, the visibility dot, the spinner, the author avatar. Demo content uses portrait cards — genre tiles at 4/5, feed cards at 3/4.

## Components

All interactive transitions run on the single easing token `--ease-out` (`cubic-bezier(0.22, 1, 0.36, 1)`) — fast micro-feedback at 0.15s (buttons, copy, nav), toggles at 0.18–0.2s (pills, switch), visibility and entrances at 0.25–0.35s (tile dim, chip-in, arrow fade). A global `prefers-reduced-motion: reduce` block zeroes every animation and transition duration.

**The One Authored Moment Rule.** The page initiates motion exactly once: ~900ms after the hero rail mounts, it peeks — `scrollBy` 96px smooth, then back 620ms later — announcing "this scrolls" without a word (`HeroDemo.tsx` `onInit`). It resets `scrollLeft` first (Chrome restores scroll positions across reloads), bails if the user already scrolled, and is skipped entirely under `prefers-reduced-motion`. Every other motion on the page is a direct response to user input. Do not add a second authored moment.

### Buttons

- **Shape:** softly rounded (10px), 0.72rem × 1.35rem padding, weight 600, inline-flex with 0.5rem icon gap.
- **Primary:** `--btn-bg` fill with `--on-primary` text and `--shadow-1`; hover deepens to `--btn-bg-hover` and lifts to `--shadow-2`. Never filled with `--primary` (see the Button Ink Rule).
- **Ghost:** transparent with a `--border-strong` hairline and `--ink` text; hover fills `--surface`.
- **Press:** `:active` nudges `translateY(1px)` — a physical click, no scale.
- **Focus:** global `:focus-visible` — 2px `--primary` outline, 2px offset, 4px radius.

### Arrow Buttons (library arrows)

The canonical `ScrollMenu` arrow (`Arrows.tsx` + `.arrow-btn`): a 2.6rem circle (2.2rem inside gallery demos), `--bg` fill, `--border-strong` hairline, `--shadow-1`, holding a chevron icon. Hover fills `--surface` and lifts the shadow. Disabled — which means `useIsVisible('first'/'last')` says you're at the row's edge — drops to opacity 0.28 and loses its shadow; the fade runs at 0.25s. SSR renders left-disabled/right-enabled (`useIsVisible('first', true)` / `('last', false)`), matching a row at its start so hydration confirms rather than flips. Always a real `<button>` with an `aria-label`.

### Code Panels

A `--surface` box (12px radius, `--border` hairline) with a title bar: mono filename at 0.8rem `--muted`, hairline underneath, copy button pushed right. Code is Shiki-highlighted at build time with dual themes — spans carry both `--shiki-light` and `--shiki-dark` colors and the dark one activates under `prefers-color-scheme: dark`. Pre scrolls both axes (`overscroll-behavior: contain`), max-height 34rem (16rem in gallery). The **copy button** (2rem, 7px radius, ghost) swaps its drawn Copy icon for a Check in `--ok` green for 1.6s after copying.

### Install Command

The mono one-liner as a chip: `--surface`, 12px radius, hairline, `0.7rem 1rem` padding, scarlet `$` prompt (aria-hidden), copy button inline. Facts sit beside it as prose — muted text with 600-weight `--ink` numbers, separated by flex gap, never tiles.

### Tab Pills

Pill (999px), `--bg` fill, `--border-strong` hairline, weight 550 at 0.95rem. Hover darkens the border to `--ink`; the active tab inverts completely — `--ink` fill, `--bg` text — the strongest state signal in the system, and it uses no color at all.

### Chips

Pill, flat `--demo-*` fill with its Fixed-Ink text color, weight 550 at 0.92rem, asymmetric padding (0.95rem text side, 0.65rem button side). Enter with `chip-in` (0.3s scale from 0.85 + fade). The nested remove button is a 1.25rem circle tinted from the chip's own ink via `color-mix(in oklab, currentColor 14%, transparent)` (26% on hover) — demo color stays self-contained, no new tokens.

### Switch

A 2.6rem × 1.5rem pill with `--surface-2` track and a `--bg` circular thumb that translates 1.05rem in 0.2s. Checked state (driven by `aria-checked`, it is a real `<button role="switch">` pattern) fills the track `--primary`. Used for the RTL toggle.

### Navigation

Text-only links at 0.95rem/500 in `--ink`, 8px-radius `--surface` hover fill, no underline; the brand is the Mark plus wordmark at 650 with -0.01em. Footer links are `--muted` underlined, warming to `--ink` on hover.

### Genre Tile (signature)

The hero's dramatization of visibility tracking: a portrait 4/5 tile, 18px radius, flat `--demo-*` fill with Fixed-Ink text, an oversized 4.4rem/700 initial at 55% opacity behind a 650-weight name. `data-visible="false"` — fed live by `useIsVisible` — dims to opacity 0.38, desaturates (`filter: saturate(0.25)`), and scales to 0.96 over 0.35s; a `currentColor` dot in the corner appears only while visible. The state change _is_ the product demo. Beneath the rail, the mono readout prints the live `getVisible()` array.

### Icons

One drawn system (`Icons.tsx`): 16px grid (`viewBox="0 0 16 16"`), `fill="none"`, `stroke="currentColor"`, stroke-width 1.75, round caps and joins, `aria-hidden`, rendered at 12–18px. Never emoji, never icon fonts, never mixed icon packs. Two sanctioned exceptions, both filled: the GitHub logo (a brand glyph, `fill="currentColor"`) and the library's own Mark — three rounded bars on a 32 grid, outer two at 32% opacity, the middle lit `--primary`: a scrolling row with one item visible, the thesis as a logo.

## Do's and Don'ts

### Do:

- **Do** make every demo a real `ScrollMenu` — server-rendered, hydrated, keyboard-operable. If it can't run live, it doesn't go on the page.
- **Do** keep all color in tokens and all borders derived from `--ink` via `color-mix`, so dark theme stays a token swap under `prefers-color-scheme` with zero component overrides.
- **Do** use `--btn-bg`/`--btn-bg-hover` for any filled control carrying `--on-primary` text (the Button Ink Rule), and re-verify AA in _both_ themes when touching any color pair.
- **Do** draw new icons on the 16px grid at stroke 1.75 with round caps, in `currentColor`.
- **Do** show row edges by disabling arrows (opacity 0.28, shadow off) from `useIsVisible('first'/'last')`, with SSR defaults left-disabled/right-enabled.
- **Do** hide native scrollbars on demo rails (`scrollbar-width: none`) — drag, wheel, touch, and arrows carry the interaction.
- **Do** cap measures: 65ch prose, 56–60ch ledes, 21ch hero H1.
- **Do** honor `prefers-reduced-motion` twice over: the global duration kill-switch, plus an explicit `matchMedia` guard on any authored (self-initiated) motion.

### Don't:

- **Don't** use gradients, glass blurs, or glow effects anywhere — this is a flat-color world (refused at inception: the gradient-hero SaaS template).
- **Don't** build stat-tile or logo-wall proof sections; proof is set as a large typographic sentence with scarlet numbers.
- **Don't** let `--demo-*` colors escape demo card content into page chrome, and don't invent new accent hues — chrome speaks neutral + scarlet, links speak indigo, success speaks green, and that is the whole cast.
- **Don't** set `--on-primary` text on `--primary` fills — it fails AA in dark; that's what `--btn-bg` is for.
- **Don't** use emoji, icon fonts, or third-party icon packs; every glyph is drawn in `Icons.tsx`.
- **Don't** add uppercase, letterspaced kickers or eyebrow labels; sections open with the headline itself.
- **Don't** put shadows on static panels or add self-playing motion beyond the hero rail's single peek.
- **Don't** use mono for anything that isn't genuinely code, commands, or machine output.
