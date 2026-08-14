# Glossary — react-horizontal-scrolling-menu

Hand this to any model or person translating this repo, together with
[TRANSLATING.md](./TRANSLATING.md).

## 1. Never translate, never transliterate, never inflect

These are identifiers a reader will type or search for. Copy them character for
character, keep their backticks, keep their capitalisation. If a sentence reads
awkwardly around one, rewrite the sentence — not the identifier.

**Component and context**
`ScrollMenu` · `VisibilityContext` · `Header` · `Footer` · `LeftArrow` ·
`RightArrow` · `Props`

**Hooks and API**
`useIsVisible` · `apiRef` · `publicApiType` · `getItemById` · `getItemByIndex` ·
`scrollToItem` · `scrollPrev` · `scrollNext` · `visibleElements` ·
`isFirstItemVisible` · `isLastItemVisible` · `initComplete` · `slidingWindow` ·
`getItemsPos` · `constants`

**Props and options**
`itemId` · `ItemId` · `transitionDuration` · `transitionEase` ·
`transitionBehavior` · `noPolyfill` · `wrapperClassName` ·
`scrollContainerClassName` · `itemClassName` · `separatorClassName` ·
`onWheel` · `onScroll` · `onInit` · `onUpdate` · `RTL` · `children`

**Platform names appearing as identifiers**
`IntersectionObserver` · `scrollIntoView` · `boundary` · `block` · `inline` ·
`nearest` · `start` · `end` · `overflow-y` · `flex-direction` · `height`

## 2. Product and project names — keep in Latin script

`react-horizontal-scrolling-menu` · React · Next.js · TanStack · TanStack Start ·
Storybook · Playwright · Jest · npm · TypeScript · MIT · GitHub · Tailwind ·
`@tanstack/intent` · SKILL.md

Do not translate the package name in prose, in headings or in install commands.

**The README's H1 is the name, not a description.** `# React horizontal
scrolling menu` is the package spelled in words, and every one of the eight
translations rendered it in its own language on the first pass — "Menú de
desplazamiento horizontal para React", "Горизонтальное меню прокрутки для
React" — because it reads like a sentence. It is not one. Copy the H1 across
verbatim; the paragraph directly beneath it is the description, and that is
what gets translated. `pnpm i18n:check` fails on a translated H1.

## 3. Terms of art — translate, but pick one rendering and keep it

Use your language's established front-end vocabulary. The only hard rule is
internal consistency: the same English term gets the same translation
everywhere in the file.

| English             | Note                                                                |
| ------------------- | ------------------------------------------------------------------- |
| menu / rail         | The horizontal strip of items. Keep one word for it throughout.     |
| item                | A single child of the menu.                                         |
| arrow               | The previous/next control. Distinct from "button".                  |
| visibility tracking | The library's headline feature — per-item, not viewport.            |
| scroll container    | The native-scrolling element. A DOM concept; use the standard term. |
| drag                | Pointer-drag scrolling, not drag-and-drop.                          |
| infinite loop       | The recipe that wraps around, not an error condition.               |
| right-to-left (RTL) | Keep the `RTL` abbreviation as-is on first use.                     |

## 4. Traps specific to this repo

- **`useIsVisible('first', true)`** and similar calls appear inside prose. The
  quoted arguments (`'first'`, `'last'`) are literal values — not words.
- The **RTL demo uses Arabic labels** as sample data. They are demo content and
  stay exactly as they are in every language.
- Prose frequently references **the story source files** rendered on the same
  page. File names like `Vertical.source.tsx` are literals.
- `5.7 kB` and similar figures are measured values. Localise the decimal
  separator if your language requires it, but never change the number.
