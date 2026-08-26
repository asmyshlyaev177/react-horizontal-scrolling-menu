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
                      #   prerendered onto Cloudflare Workers. A workspace
                      #   member, with its own Playwright suite in website/e2e
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

## Package management

pnpm only, one workspace: `pnpm-workspace.yaml` lists `example-nextjs`,
`example-tanstack` and `website`, and the root `pnpm-lock.yaml` is the only
lockfile. Every member depends on the library as `workspace:*` and is symlinked,
not copied — so their `node_modules` are symlink farms, and the site and
examples build against this checkout's `dist/`, never the published release.
`dist/` must therefore exist first: root `deploy`/`preview` are wireit scripts
depending on `build`, and the website CI job runs `pnpm build` before the site.

There is deliberately no `install-deps` script — `verifyDepsBeforeRun: install`
makes pnpm re-install on lockfile drift. Never reintroduce a wireit script
whose `output` is a `node_modules` directory; that is what grew `.wireit` to
73 GB, and pnpm's store already dedupes across lockfile states.

`npm` survives in two deliberate places. `npm publish` (release job,
`pub`/`beta:pub`) — trusted publishing exchanges an OIDC token, needs
npm >= 11.5.1 and attests provenance with no `NPM_TOKEN`, none of which
`pnpm publish` implements. And `npm install react-horizontal-scrolling-menu` in
the READMEs, which is an instruction for the reader's project, not this one.

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
- **The wireit cache is pruned by an npm `pre` hook, not by wireit.** Wireit
  keeps a full copy of every script's `output` per fingerprint, forever
  ([wireit#71](https://github.com/google/wireit/issues/71)). `prebuild`,
  `pretest` and `predev` run `pnpm prune-cache` first. Keep that call out of the
  wireit graph — see the header of `scripts/prune-wireit-cache.mjs` for why.

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

## Translations

Eight languages besides English: `zh-CN`, `ja`, `ko`, `ru`, `es`, `pt-BR`, `fr`,
`vi`. Declared once in `scripts/i18n/locales.mjs`; the README suffixes and the
language-switcher line both derive from that list, so adding a language is an
edit there plus `pnpm i18n:init`.

`README.md` is the English source and is also what npmjs.com renders. Each
translation is `README.<tag>.md` beside it, keeping BCP 47 case.

```bash
pnpm i18n:check    # structure, links, anchors, drift
pnpm i18n status   # what is translated, what has drifted
pnpm i18n diff ja  # the English diff a stale translation still owes
```

**Every translation records the git blob hash of the English README it came
from**, in the `<!-- i18n:meta … -->` line at the top. Without it a translation
sits a release behind its source and nothing says so. Never hand-edit that
line; `pnpm i18n stamp <locale>` writes it once a translation is current.

This README has no table of contents, but the link row under the title carries
two in-page anchors (`#properties-and-callbacks`,
`#using-with-ai-coding-agents`). Translating those headings changes the anchors
GitHub derives from them, and `pnpm i18n:check` fails on any that no longer
resolve. Note `website/src/lib/links.ts` points `API_DOCS` at the **English**
README's `#properties-and-callbacks` — that stays English on purpose.

### The website

`website/` is localized too, at `/ja/…`, `/zh-cn/…` and six more — 24 routes
times 9 languages, all prerendered.

| Surface     | Where a translation lives        | Tool             |
| ----------- | -------------------------------- | ---------------- |
| `README.md` | `README.<tag>.md` beside it      | `pnpm i18n`      |
| Site copy   | `website/src/content/<dir>/*.ts` | `pnpm i18n:copy` |

Three things about the site are load-bearing:

- **Prose is Markdown strings, not JSX.** `content/<dir>/examples.ts` holds each
  page's sections as `{ heading, body }`, and `website/src/lib/prose.tsx`
  renders the supported subset. Backticks are what keep `ScrollMenu` and
  `useIsVisible` from being translated. In-site links in that Markdown are
  spelled without a locale (`/examples/x`) — a translation copies the English
  module's hrefs — and `prose.tsx` prefixes them from the current pathname.
- **A route file never spells a sentence.** Each page is a `views/` component
  taking `copy`, mounted twice: once by the English route and once by the
  `$locale` one. That is why there are 21 example views and 42 example routes.
- **The prerenderer is given every URL, not left to find them.** `pages` in
  vite.config.ts is the same table the sitemap and `_headers` come from.
  `crawlLinks` stays on as a backstop, but the build no longer depends on 216
  pages being reachable by following hrefs — which it used to, and which is why
  the language switcher had to be nine bare anchors. It is a `<select>` now,
  with those anchors kept in a `<noscript>` for readers without JS and for
  crawlers looking for a page's other language versions.

`_headers` and the sitemap's `xhtml:link` alternates are generated in
`vite.config.ts` from one page table; the two hand-written Markdown mirrors —
the examples hub and one document per example, nine languages of each — are
built in `website/src/lib/mirror-docs.ts`. `_headers` in particular went from 4
hand-written blocks to 36: edit the generator, not `public/_headers`.

**`EXAMPLES` in `lib/examples-manifest.ts` is structure, and it carries the
English names.** vite.config reads it at build, so it has to; every visible use
of an example's name or blurb goes through `copy.manifest.examples[slug]`
instead. Reading a name straight off `EXAMPLES` is how the hub cards, the
breadcrumbs and 168 `.md` mirrors ended up English under translated canonicals.

The homepage routes build their `head()` by hand rather than through
`lib/seo.ts` — their mirror is `/index.md`, not the `/.md` that rule produces —
so anything added to `pageHead` has to be added there twice as well. The
hreflang cluster was missing from exactly those two routes for that reason.

`e2e/locales.spec.ts` runs the whole of `smoke.spec.ts`'s surface checks against
`/ja`, because that suite asserts on English routes only and a locale can be
comprehensively broken while all of it passes.

Two things about the build, both caused by the config importing app source:

- **`src/content/` and the `src/lib` modules `vite.config.ts` pulls in write
  their relative imports with an explicit `.ts`**, and nothing else in the repo
  does. Without it every one of those 69 files is a line of "unsupported by
  `configLoader: 'native'`" on every build — 548 of them. Keep the extensions
  when adding a content module; `tsconfig.json` carries
  `allowImportingTsExtensions` for exactly this.
- **`src/content/index.ts` is all nine languages in one chunk** — ~237 kB
  gzipped, modulepreloaded by every page including the English ones, and the
  only remaining build warning. Splitting it means `copyFor` can no longer be
  a synchronous call, which reaches `lib/seo.ts` (runs inside `head()`, so no
  hooks), `SiteChrome` and every route.

Fonts are latin-subset only, declared in `__root.tsx`. zh/ja/ko/ru fall back
cleanly because every glyph is outside the range; **Vietnamese is the one that
breaks** — base letters inside, diacritics outside, so one word renders in two
faces. `usesWebfont()` in `website/src/i18n.ts` opts those locales out of both
the `@font-face` block and its preloads.

`skills/*/SKILL.md` is **not** translated: it ships inside the npm tarball and
is loaded by name by `@tanstack/intent`, whose format has no locale dimension.

Handing the work to a model: `scripts/i18n/TRANSLATING.md` is the prompt and
`scripts/i18n/GLOSSARY.md` the protected-term list.
