# react-horizontal-scrolling-menu — Skill Spec

react-horizontal-scrolling-menu is a horizontal scrolling menu component for
React built on native browser scrolling with per-item visibility tracking via
IntersectionObserver. Items are the consumer's own components (unique `itemId`
per child), navigation works by scrollbar/touch/wheel/drag or user-provided
arrow components, and a full imperative API is exposed through
`VisibilityContext` (inside) or `apiRef` (outside). Explicitly a menu, not a
carousel: no snap/spring physics, autoplay and infinite loop are recipes.

Targets v8.2.3. Status: reviewed (maintainer interview 2026-08-09).

## Domains

| Domain                  | Description                                                     | Skills                               |
| ----------------------- | --------------------------------------------------------------- | ------------------------------------ |
| building-the-menu       | Constructing menu, items, arrows, stylesheet, CSS customization | menu-setup                           |
| tracking-visibility     | IntersectionObserver model, hooks, observer options             | menu-visibility                      |
| controlling-scroll      | Imperative scrolling, apiRef, paging, transitions gate, RTL     | menu-scrolling, menu-transitions-rtl |
| handling-input          | Pointer/wheel/touch wiring, drag, body-scroll locking           | menu-interactions                    |
| integrating-and-testing | SSR, framework wiring, testing strategy                         | menu-testing-ssr                     |
| composing-features      | Userland recipes on the public API                              | menu-recipes                         |
| staying-current         | Migrating pre-v8 patterns agents still generate                 | menu-migration                       |

## Skill Inventory

| Skill                | Type      | Domain                  | What it covers                                                      | Failure modes |
| -------------------- | --------- | ----------------------- | ------------------------------------------------------------------- | ------------- |
| menu-setup           | lifecycle | building-the-menu       | Install, styles.css, itemId contract, arrows, CSS customization     | 7             |
| menu-visibility      | core      | tracking-visibility     | useIsVisible, arrow hooks, options, async IO truth, latch pattern   | 6             |
| menu-scrolling       | core      | controlling-scroll      | scrollToItem/Next/Prev, apiRef, dynamic items, slidingWindow paging | 7             |
| menu-interactions    | core      | handling-input          | Callback shapes, mouse drag, wheel, body-scroll locking, swipe      | 5             |
| menu-transitions-rtl | core      | controlling-scroll      | noPolyfill gate, transitionDuration/Behavior, ScrollOptions, RTL    | 4             |
| menu-testing-ssr     | core      | integrating-and-testing | 'use client', hydration defaults, Jest ESM/IO mocks, async asserts  | 5             |
| menu-recipes         | core      | composing-features      | Autoplay, infinite loop, center-on-click, save/restore, load-more   | 5             |
| menu-migration       | lifecycle | staying-current         | Era detection, v3–v8 breaking changes, 8.1.0 changelog replay       | 6             |

## Failure Mode Inventory

### menu-setup (7)

| #   | Mistake                                           | Priority | Source                  | Cross-skill?   |
| --- | ------------------------------------------------- | -------- | ----------------------- | -------------- |
| 1   | styles.css import omitted, menu stacks vertically | CRITICAL | README, CHANGELOG v4    | —              |
| 2   | itemId missing or miscased on children            | CRITICAL | #205 #185 #187, src     | —              |
| 3   | renaming itemId→itemID to silence DOM warning     | HIGH     | #196                    | —              |
| 4   | duplicate itemId values silently collide          | HIGH     | src ItemsMap, interview | —              |
| 5   | expecting arrow components to receive props       | HIGH     | src helpers.tsx         | —              |
| 6   | items without fixed width / percent widths        | MEDIUM   | README, #288            | —              |
| 7   | looking for a separator/gap prop for spacing      | MEDIUM   | interview, CHANGELOG v7 | menu-migration |

### menu-visibility (6)

| #   | Mistake                                         | Priority | Source                      | Cross-skill?   |
| --- | ----------------------------------------------- | -------- | --------------------------- | -------------- |
| 1   | isFirstItemVisible read as reactive (frozen)    | CRITICAL | src createApi.ts:91         | menu-migration |
| 2   | assuming visibility before items seen once      | HIGH     | #286 #289                   | —              |
| 3   | arrow flicker on vertical page scroll (latch)   | HIGH     | #284 #275 #147 #298         | —              |
| 4   | oversized items never visible (ratio edge case) | MEDIUM   | #287 #279                   | —              |
| 5   | options.root silently ignored                   | MEDIUM   | src useIntersectionObserver | —              |
| 6   | subscribe without unsubscribe cleanup           | MEDIUM   | README, src ItemsMap        | —              |

### menu-scrolling (7)

| #   | Mistake                                        | Priority | Source           | Cross-skill? |
| --- | ---------------------------------------------- | -------- | ---------------- | ------------ |
| 1   | itemId string passed to scrollToItem (no-op)   | CRITICAL | src, #157        | —            |
| 2   | reading data values from apiRef (stale)        | HIGH     | README, #167     | —            |
| 3   | getItemById undefined right after adding item  | HIGH     | #167, disc #295  | menu-recipes |
| 4   | scroll methods drag the whole page to the menu | HIGH     | #276 #277 #174   | menu-recipes |
| 5   | numeric itemIds compared as numbers            | MEDIUM   | CHANGELOG v3.1.1 | —            |
| 6   | apiRef.current methods called before mount     | MEDIUM   | src index.tsx    | —            |
| 7   | hand-rolled paging instead of slidingWindow    | MEDIUM   | README, stories  | —            |

### menu-interactions (5)

| #   | Mistake                                         | Priority | Source          | Cross-skill? |
| --- | ----------------------------------------------- | -------- | --------------- | ------------ |
| 1   | plain handler where factory expected            | CRITICAL | README, src     | —            |
| 2   | drag fires item clicks on release               | HIGH     | MouseDrag story | —            |
| 3   | drag continues after cursor leaves              | HIGH     | #278            | —            |
| 4   | preventDefault in passive wheel/touch listeners | MEDIUM   | stories         | —            |
| 5   | onScroll read before scroll settles             | MEDIUM   | README          | —            |

### menu-transitions-rtl (4)

| #   | Mistake                                           | Priority | Source         | Cross-skill?   |
| --- | ------------------------------------------------- | -------- | -------------- | -------------- |
| 1   | transition props silently ignored (noPolyfill)    | CRITICAL | src, CHANGELOG | menu-migration |
| 2   | custom behavior function without noPolyfill=false | HIGH     | src, story     | —              |
| 3   | transitions combined with RTL                     | HIGH     | README, #230   | —              |
| 4   | ScrollOptions.behavior required-but-ignored       | MEDIUM   | src types.ts   | —              |

### menu-testing-ssr (5)

| #   | Mistake                                     | Priority | Source            | Cross-skill?    |
| --- | ------------------------------------------- | -------- | ----------------- | --------------- |
| 1   | ScrollMenu imported in a Server Component   | CRITICAL | #280              | —               |
| 2   | wrong useIsVisible defaultValue (hydration) | HIGH     | README, interview | menu-visibility |
| 3   | Jest chokes on ESM package                  | HIGH     | #240              | —               |
| 4   | synchronous visibility assertions in tests  | HIGH     | stories/test.tsx  | —               |
| 5   | old Next.js without transpilePackages       | MEDIUM   | README, #240      | —               |

### menu-recipes (5)

| #   | Mistake                                    | Priority | Source          | Cross-skill? |
| --- | ------------------------------------------ | -------- | --------------- | ------------ |
| 1   | hallucinated autoplay/loop/snap props      | CRITICAL | README, stories | —            |
| 2   | autoplay interval scrolls page to the menu | HIGH     | #276, story     | —            |
| 3   | seamless loop promised without clones      | MEDIUM   | #213, story     | —            |
| 4   | tab switching with stale menu state        | MEDIUM   | disc #294, #204 | —            |
| 5   | load-more without a loader item            | MEDIUM   | AddItems story  | —            |

### menu-migration (6)

| #   | Mistake                                      | Priority | Source             | Cross-skill?    |
| --- | -------------------------------------------- | -------- | ------------------ | --------------- |
| 1   | destructuring removed v5-era visibility API  | CRITICAL | CHANGELOG v6, #282 | menu-visibility |
| 2   | Separator items / getPrevItem/getNextItem    | HIGH     | CHANGELOG v7       | —               |
| 3   | assuming polyfilled smooth scroll by default | HIGH     | CHANGELOG v8       | —               |
| 4   | 8.1.0 changelog replay read as new breakage  | MEDIUM   | CHANGELOG.md       | —               |
| 5   | v2-era Arrows wrapper prop                   | MEDIUM   | CHANGELOG v3       | —               |
| 6   | TS types unresolvable on 8.2.0/8.2.1         | MEDIUM   | CHANGELOG 8.2.2    | —               |

## Tensions

| Tension                                  | Skills                                        | Agent implication                                                      |
| ---------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------- |
| trivial quick start vs total silence     | menu-setup ↔ menu-visibility ↔ menu-scrolling | Ships code that renders but silently does not work (no error to debug) |
| imperative convenience vs reactive truth | menu-scrolling ↔ menu-visibility              | Reads stale snapshots, or calls context hooks outside the provider     |
| native scroll correctness vs animation   | menu-transitions-rtl ↔ menu-scrolling         | transitionDuration silently no-ops; flipping noPolyfill breaks RTL     |
| SSR first paint vs async browser truth   | menu-testing-ssr ↔ menu-visibility            | Reads visibility at mount / asserts synchronously instead of polling   |

## Cross-References

| From                 | To                | Reason                                                     |
| -------------------- | ----------------- | ---------------------------------------------------------- |
| menu-setup           | menu-visibility   | Canonical arrows are visibility-driven                     |
| menu-scrolling       | menu-visibility   | Paging consumes getVisible; scroll gating uses menuVisible |
| menu-recipes         | menu-scrolling    | Recipes are built from the imperative API                  |
| menu-recipes         | menu-interactions | Drag/wheel recipes wire the callback shapes                |
| menu-testing-ssr     | menu-visibility   | Hydration first paint = useIsVisible defaultValue          |
| menu-migration       | menu-visibility   | Removed APIs land on the v8 visibility hooks               |
| menu-transitions-rtl | menu-scrolling    | Transition props modify the scroll methods                 |

## Subsystems & Reference Candidates

| Skill          | Subsystems | Reference candidates                           |
| -------------- | ---------- | ---------------------------------------------- |
| menu-scrolling | —          | publicApiType member reference (25+ members)   |
| menu-recipes   | —          | infinite-loop hook in full; live story/URL map |
| all others     | —          | —                                              |

## Recommended Skill File Structure

- **Core skills:** menu-visibility, menu-scrolling, menu-interactions,
  menu-transitions-rtl, menu-testing-ssr, menu-recipes (all React —
  the library is React-only, no framework adapter split)
- **Lifecycle skills:** menu-setup (getting started), menu-migration
  (upgrade/era detection)
- **Composition skills:** none — framework wiring (Next.js, TanStack Start)
  fits inside menu-testing-ssr; no companion-library seams
- **Reference files:** menu-scrolling/references/api.md if the inline
  publicApiType table pushes the skill past 500 lines;
  menu-recipes/references/{infinite-loop,stories}.md — the loop hook is the
  one recipe too long to inline, and the story URL table is pure lookup

## Composition Opportunities

| Library              | Integration points                         | Composition skill needed?        |
| -------------------- | ------------------------------------------ | -------------------------------- |
| Next.js (App Router) | 'use client', transpilePackages, hydration | No — covered in menu-testing-ssr |
| TanStack Start       | styles.css in __root.tsx, SSR in workerd   | No — covered in menu-testing-ssr |
| Embla / Swiper       | Out of scope by design (carousel physics)  | No — named as non-goals          |

## Interview Notes (2026-08-09)

- Skill list confirmed as proposed; recipes included as its own skill.
- Migration ships as a separate skill (v6-era is old but agents still generate it).
- Autoplay/infinite-loop recipes are blessed content (Storybook stories, post-8.2.3).
- Oversized items = unrealistic edge case; teach `options={{ ratio: 0.5 }}` at MEDIUM.
- Element getters (getItemElementById) are advanced/edge-case; `scrollToItem(getItemById(id))` is the default teaching form.
- Most-missed knowledge per maintainer: CSS customization (item spacing) and SSR issues.
- Maintainer would add `console.warn` for duplicate itemIds / TS static checks if breaking compat were free — until then, agents must self-check uniqueness.
