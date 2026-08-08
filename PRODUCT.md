# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

TanStack Start (React, SSR) deployed on Cloudflare Workers — user's explicit choice for the landing page in `website/`. The library itself is the existing React package in this repo.

## Users

React developers who need a horizontal scrolling row — category cards, tab strips, chip filters, media rails — and are evaluating libraries. They arrive from npm, GitHub, or a search result, usually mid-task, and decide within a minute whether the API shape fits. Secondary audience: hiring managers and engineers checking out the maintainer's work through his portfolio; the page doubles as proof of craft.

## Product Purpose

react-horizontal-scrolling-menu is a horizontal scrolling menu component for React with per-item visibility tracking. The site exists to demonstrate the library live (the page itself runs on it), convert evaluating developers into users ("Get started" is the primary CTA), and give the library a public face that matches its actual adoption (347k downloads/month, ~20k dependent repos, maintained since 2018). Success: a visitor understands what the library does within seconds, can copy a working example, and finds the deep-dive examples (Storybook) in one click.

## Positioning

A menu, not a carousel: built on native browser scrolling with IntersectionObserver visibility tracking — the app always knows exactly which items are on screen (`useIsVisible(itemId)`), with a full imperative API (`scrollToItem`, `apiRef`) and bring-your-own components for arrows, header, footer, and items. Competitors (Embla, Swiper, keen-slider) re-implement scroll physics in JS for image sliders; this library rides the browser's own scrolling and owns the visibility-tracking niche.

## Operating Context

Developers evaluate from a code editor or GitHub/npm tab, often in dark-mode tooling, on desktop; they judge by dragging the demos and reading the quick-start code. The library ships its layout CSS separately (`dist/styles.css`), requires a unique `itemId` per child, and is SSR-safe (verified: first render emits plain divs; IntersectionObserver only attaches client-side). Deep-dive examples live in the deployed Storybook (GitHub Pages) with an in-browser Monaco live editor. Honest scope is a product fact: no autoplay, no infinite loop, no spring physics — image-slider use cases are deliberately out of scope.

## Capabilities and Constraints

Landing page must dogfood the library: every demo is a real `ScrollMenu` instance, server-rendered and hydrated. Demos must respect the API's real contract (itemId on every child, arrows via `VisibilityContext`, `useIsVisible('first', true)` / `useIsVisible('last', false)` first-paint defaults, pointer props are handler factories). No `transitionDuration` demo on the landing (would pull the scroll polyfill into the bundle). Canonical URL is undecided: deploys to workers.dev now, custom domain may be attached later — links must be easy to update.

## Brand Commitments

User-pinned direction: "combination of Product and Deno, with a bit of engineering" — polished product surface with the friendly, confident tone of deno.com, and engineering-honest details (code-first sections, honest scope, real numbers). Both light and dark themes via `prefers-color-scheme`, each fully finished. Primary CTA "Get started"; secondary "Browse examples" (Storybook). A visible but tasteful author section: built and maintained by Aleksandr Smyshliaev (asmyshlyaev177.dev), open to work — provenance after product, never competing with it.

## Evidence on Hand

Real, verifiable numbers: 347k npm downloads/month, 788 GitHub stars, ~20k dependent repos (GitHub "used by"), maintained since 2018, featured in React Status #257. Named production users (Our World in Data, AWS Performance Dashboard, erxes, Reapit) are listed in the README with version pins — verify before printing on the page. No testimonials, no logos cleared for use; do not fabricate any.

## Product Principles

- The component is the proof: every demo on the page is the library running live — never a screenshot or a mock.
- Honest scope builds trust: say plainly what the library does not do and name the alternatives.
- Code is the copy: developers decide from the shape of the API, so runnable snippets carry the argument.
- Proof before ask: adoption numbers and longevity appear before any conversion push.
- Product first, author present: the maintainer is visible as provenance, not as the pitch.

## Accessibility & Inclusion

WCAG AA contrast in both themes. Demos remain keyboard-operable (arrows are real buttons; items focusable where interactive) and the page degrades gracefully before hydration — native scroll containers work without JS. `prefers-reduced-motion` respected for all authored motion.
