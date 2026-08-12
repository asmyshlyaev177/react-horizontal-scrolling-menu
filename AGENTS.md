# AGENTS — react-horizontal-scrolling-menu

A horizontal scrolling menu for React, built on native browser scrolling with
per-item visibility tracking (IntersectionObserver). Published to npm; ~347k
downloads/month; one stable public API across React 16.8–19.

**If you are here to _use_ the library rather than change it, read
`skills/` instead** — those files are written for you, and are more specific
than this one. `npx @tanstack/intent@latest install` wires them into your
agent; `skills/menu-setup/SKILL.md` is the entry point.

## Layout

```text
src/                  # the library
stories/              # Storybook stories; *.source.tsx files are the
                      #   canonical examples, rendered on the website and
                      #   mirrored to /examples/<slug>.md
skills/               # AI agent skills, published with the package
                      #   (package.json `files`), one dir per SKILL.md
website/              # the landing + docs site: TanStack Start, SSR,
                      #   prerendered onto Cloudflare Workers. Its own npm
                      #   project, with its own Playwright suite in
                      #   website/e2e
e2e/                  # Playwright, against the built library
types/                # public type surface
```

## Commands

```bash
pnpm test             # unit + lint + e2e (wireit orchestrates)
pnpm test:unit
pnpm test:e2e
pnpm build            # rollup build of the library
pnpm storybook        # the examples, live

# website/ is its own workspace
cd website && pnpm dev        # vite dev
cd website && pnpm build      # build + prerender every route
cd website && pnpm typecheck
cd website && pnpm test       # build, then the smoke suite (website/e2e)
cd website && pnpm preview    # build, then serve the Worker locally
cd website && pnpm deploy     # wrangler deploy
```

## Things that bite

- **Every child of `ScrollMenu` needs a unique `itemId`.** That is how items
  are tracked, found and scrolled to. The React `key` is only a fallback.
- **`dist/styles.css` is a separate import** — the bundle never injects CSS.
- **Autoplay and infinite loop are not props.** They are ~60-line recipes on
  the public API. Inventing an `autoplay` prop generates dead code; this is
  the single most common thing models get wrong here, and why
  `skills/menu-recipes` exists.
- **`noPolyfill` defaults to `true` since v8**, which silently disables
  `transitionDuration` and custom `transitionBehavior`.
- Removed APIs that models trained on older releases still emit:
  `visibleElements`, `isFirstItemVisible`/`isLastItemVisible` (v6),
  `Separator` items and `getPrevItem`/`getNextItem` (v7), the `Arrows` prop
  (v3). `skills/menu-migration` covers the upgrade.

## The website

TanStack Start, prerendered at build and served from Cloudflare Workers
Assets. Two pieces are less obvious than the rest:

- **`website/src/start.ts`** answers `/` with Markdown when the caller is an
  agent (`Accept: text/markdown`, or a user-agent on the list in
  `website/src/lib/agent-request.ts`), and otherwise replays the request
  against the prerendered `index.html` through the ASSETS binding. It only
  runs because `wrangler.jsonc` sets `assets.run_worker_first: ["/"]`.
  Falling through to `next()` there would quietly turn the homepage into a
  per-request server render.
- **Every route has a `.md` mirror**, from `website/vite.config.ts`.
  `markdownMirrors()` emits `/index.md` (the hand-written llms.txt),
  `/examples.md` and `/examples/<slug>.md` (metadata plus each example's full
  source). Anything else — `/compare` today — is converted from its own
  prerendered HTML by the prerenderer's `onSuccess` hook, so the page is the
  source and the mirror cannot drift from it. Every page declares its own
  mirror in `<head>` ahead of the site-wide `/llms.txt` link, and links
  inside a mirror point at other mirrors rather than back into HTML.

  Each mirror opens with YAML frontmatter — `title`, `description`,
  `canonical`, and `image` or `source` where there is one — so a client can
  identify the page without reading it. A converted mirror takes those from
  the head of the HTML it converted (`metaOf` in
  `website/src/lib/markdown-frontmatter.ts`); an example's come from the
  manifest that also built the page. `/index.md` is the exception and stays
  llms.txt byte for byte, because that format wants its H1 first.

`website/e2e/smoke.spec.ts` covers both, and is the reason a new route can't
quietly ship without a mirror: it reads the `.md` URL each page advertises —
from `<head>` and from the `Link:` header — and then fetches it. The suite
runs against `vite preview`, never `vite dev`, because the mirrors and
`_headers` only exist in a build; `pnpm test` in `website/` builds first, and
`npx playwright test` reuses a build you already have. It launches no browser
(everything is asserted over HTTP through Playwright's `request` fixture), so
CI never downloads one — keep it that way.

**The one rule that matters:** the negotiated Markdown response must stay
`Cache-Control: no-store`. Shared caches key on the URL and Cloudflare's edge
ignores `Vary` for everything but Accept-Encoding, so a cacheable Markdown
variant gets pinned into the entry for `/` by the first agent that asks, and
every human visitor afterwards sees a wall of plain text — a 200 the whole
time, so nothing alerts. It happened on a sibling site. The `.md` mirrors are
a different case: one representation each, so they cache as ordinary assets.
