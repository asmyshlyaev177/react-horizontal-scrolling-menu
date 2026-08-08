---
version: 1
slug: 'website-src-routes-index-tsx'
primary_target: 'website/src/routes/index.tsx'
related_targets: ['website/src/routes/__root.tsx']
---

# Surface: landing page (website/src/routes/index.tsx)

Scope: the library's landing page, a TanStack Start route SSR'd on Cloudflare Workers, prerendered. Visitor mode: Persuade.

Audience & job: React developers evaluating a horizontal-scroll/menu library, arriving from npm/GitHub mid-task; secondary, hiring managers vetting the maintainer. Primary action: Get started (install + quick-start). Secondary: Browse examples (Storybook on GitHub Pages).

Proof/content: real numbers only — 347k downloads/mo, 788 stars, ~20k dependent repos, since 2018, React Status #257. No fabricated logos/testimonials. Honest scope stated on the page: no autoplay, no loop, no physics; Embla/Swiper named for image sliders.

Chosen direction (user-pinned): "Product + Deno + a bit of engineering." Pure-white / near-black grounds via prefers-color-scheme, scarlet primary (OKLCH hue ~10), playful flat-color palette confined to demo card content, Schibsted Grotesk display/body, JetBrains Mono for code only. Every demo is a live ScrollMenu (dogfooding); the memorable moment is the hero where cards visibly light up/dim as they enter/leave view while dragging — useIsVisible dramatized.

Constraints: demos honor the real API (itemId, VisibilityContext arrows, useIsVisible('first', true)/('last', false) SSR defaults, handler-factory pointer props); no transitionDuration demo (polyfill weight); no body-scroll hijack on the hero; code highlighting at build time (shiki via vite virtual module), never in the worker.

Unresolved: canonical URL (workers.dev now, custom domain later) — keep links centralized; OG image produced in a later visuals pass.
