---
name: 'menu-testing-ssr'
description: >
  Server rendering and testing for react-horizontal-scrolling-menu: the
  library is client-only ('use client' required in React Server Components,
  else "createContext is not a function"), SSR first paint is controlled by
  the useIsVisible defaultValue argument (canonical ('first', true) /
  ('last', false)), transpilePackages for older Next.js, Jest
  moduleNameMapper to dist/index.cjs for "Cannot use import statement
  outside a module" plus an IntersectionObserver class mock for jsdom
  (ReferenceError on mount without it), and async poll-based assertions
  (Playwright preferred). Load when integrating with Next.js / TanStack
  Start, fixing hydration flicker, or writing tests for the menu.
metadata:
  type: core
  library: 'react-horizontal-scrolling-menu'
  library_version: '8.2.3'
sources:
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:README.md'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:example-nextjs/app/page.tsx'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:example-tanstack/src/routes/index.tsx'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:e2e/scrolling-menu.spec.ts'
  - 'asmyshlyaev177/react-horizontal-scrolling-menu:stories/test.tsx'
---

# Testing and SSR

The library is SSR-safe but client-only: the first render emits plain
markup and IntersectionObserver attaches client-side. What the server
paints is whatever `useIsVisible`'s `defaultValue` argument says; real
visibility exists only after the observer fires in the browser. Every
integration and testing decision below follows from that.

## Setup

An SSR-safe menu page for Next.js App Router. The `data-cy` /
`data-visible` attributes double as the test contract used by the
Playwright patterns below.

```tsx
// app/menu/page.tsx
'use client';
import React from 'react';
import {
  ScrollMenu,
  VisibilityContext,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const items = Array.from({ length: 10 }, (_, i) => `item-${i}`);

function LeftArrow() {
  const api = React.useContext<publicApiType>(VisibilityContext);
  // Bakes useIsVisible('first', true): the server paints a DISABLED left
  // arrow — correct for a row scrolled to its start.
  const disabled = api.useLeftArrowVisible();
  return (
    <button disabled={disabled} onClick={() => api.scrollPrev()}>
      Left
    </button>
  );
}

function RightArrow() {
  const api = React.useContext<publicApiType>(VisibilityContext);
  // Bakes useIsVisible('last', false): the server paints an ENABLED right arrow.
  const disabled = api.useRightArrowVisible();
  return (
    <button disabled={disabled} onClick={() => api.scrollNext()}>
      Right
    </button>
  );
}

function Card({ itemId }: { itemId: string }) {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const visible = api.useIsVisible(itemId, false);
  return (
    <div data-cy={itemId} data-visible={visible} style={{ width: '160px' }}>
      {itemId}
    </div>
  );
}

export default function Page() {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map((id) => (
        <Card itemId={id} key={id} />
      ))}
    </ScrollMenu>
  );
}
```

TanStack Start needs no directive — it has no React Server Component
boundary, so the identical component body server-renders as-is (the repo's
`example-tanstack` route is a 1:1 port of the Next.js page without
`'use client'`, server-rendered in workerd on every request).

## Core Patterns

### SSR first paint = useIsVisible defaultValue

The signature is `useIsVisible(itemId: ItemId | 'first' | 'last', defaultValue = false)`
(src/createApi.ts:31). `defaultValue` is the state on the server AND on the
first client frame — visibility only becomes real when IntersectionObserver
fires. The canonical arrow values model a row at its start:

```tsx
const isFirstVisible = api.useIsVisible('first', true); // left arrow disabled on SSR
const isLastVisible = api.useIsVisible('last', false); // right arrow enabled on SSR
```

Prefer `api.useLeftArrowVisible()` / `api.useRightArrowVisible()`: they use
exactly these defaults internally and additionally latch updates behind
`menuVisible` so arrows do not flicker when the page scrolls the menu out
of the viewport (src/createApi.ts:65-89).

### Jest: map to the CJS build and mock IntersectionObserver

The package is ESM-first (`type: module`); the `require` condition of its
exports map points at `./dist/index.cjs`. Jest in jsdom needs both a
moduleNameMapper and an IntersectionObserver mock — the library constructs
`new IntersectionObserver(...)` with no feature detection
(src/hooks/useIntersectionObserver.ts:42), so mounting `ScrollMenu`
without the mock throws `ReferenceError: IntersectionObserver is not defined`.

```js
// jest.config.cjs
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^react-horizontal-scrolling-menu$':
      'react-horizontal-scrolling-menu/dist/index.cjs',
    '\\.css$': '<rootDir>/test/styleMock.cjs',
  },
};
```

```js
// test/styleMock.cjs — stub for the mandatory styles.css import
module.exports = {};
```

```ts
// jest.setup.ts
import '@testing-library/jest-dom'; // registers toBeInTheDocument/toBeDisabled

class IntersectionObserverMock {
  readonly root: Element | null = null;
  readonly rootMargin = '0px';
  readonly thresholds: ReadonlyArray<number> = [0];
  constructor(
    public callback: IntersectionObserverCallback,
    public options?: IntersectionObserverInit,
  ) {}
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
});
```

Scope of this setup: the no-op mock never delivers entries, so every
`useIsVisible` stays at its `defaultValue` forever. jsdom tests can assert
mounting and markup only — scrolling and visibility behavior belongs in a
real browser (next pattern). That is the maintainer's stance, not a
workaround.

```tsx
// menu.test.tsx — structure assertions only under jsdom
import { render, screen } from '@testing-library/react';
import Page from '../app/menu/page';

test('renders all items and both arrows', () => {
  render(<Page />);
  expect(screen.getByText('item-0')).toBeInTheDocument();
  expect(screen.getByText('item-9')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Left' })).toBeDisabled();
  expect(screen.getByRole('button', { name: 'Right' })).toBeEnabled();
});
```

### Playwright e2e: assert the SSR payload, then poll

Scrolling is animated (500ms default) and visibility is
IntersectionObserver-driven — nothing about the menu is true the moment a
click returns. Assertions must poll (`expect.poll` / auto-retrying
locators), never sleep-then-read. This is the contract the repo's own
suite follows (e2e/scrolling-menu.spec.ts, stories/test.tsx).

```ts
// e2e/menu.spec.ts
import { expect, test } from '@playwright/test';

// 650px viewport: exactly three 160px cards (plus margins) fit, so one
// arrow click advances the visible window by three ids.
test.use({ viewport: { width: 650, height: 768 } });

test('server-renders the menu into the HTML payload', async ({ request }) => {
  // Fetch WITHOUT a browser: catches SSR regressions (window/document access
  // during render) that browser tests miss — hydration would repaint the
  // page before the first assertion looks at it.
  const response = await request.get('/menu');
  expect(response.ok()).toBe(true);
  const html = await response.text();
  for (let i = 0; i < 10; i++) {
    expect(html).toContain(`data-cy="item-${i}"`);
  }
});

test('arrow click advances the visible window', async ({ page }) => {
  await page.goto('/menu');
  await expect(page.locator('[data-cy="item-0"]')).toBeVisible();

  await page.getByRole('button', { name: 'Right', exact: true }).click();

  await expect
    .poll(() =>
      page
        .locator('[data-visible="true"]')
        .evaluateAll((cards) => cards.map((c) => c.getAttribute('data-cy'))),
    )
    .toEqual(['item-3', 'item-4', 'item-5']);
});
```

Negative assertions ("state must NOT change") have no signal to poll for —
give the observer one window to fire before asserting:

```ts
test('arrows do not update while the menu is off screen', async ({ page }) => {
  const OBSERVER_MS = 300;
  await page.goto('/menu');
  const left = page.getByRole('button', { name: 'Left', exact: true });
  await expect(left).toBeDisabled();

  await page.evaluate(() => window.scrollTo(0, 400));
  await page.waitForTimeout(OBSERVER_MS);
  await expect(left).toBeDisabled();
});
```

## Common Mistakes

### CRITICAL Importing ScrollMenu in a React Server Component

Wrong:

```tsx
// app/page.tsx (server component, no directive)
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
```

Correct:

```tsx
// app/page.tsx
'use client';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
```

The library calls `React.createContext` at module scope and ships no
`'use client'` banner of its own, so evaluating it in a Server Component
throws "createContext is not a function" — the directive must come from
your file.

Source: src/context.ts:5; example-nextjs/app/page.tsx:3; https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/280

### HIGH Wrong useIsVisible defaultValue causes hydration flicker

Wrong:

```tsx
const disabled = api.useIsVisible('first'); // defaultValue omitted -> false
```

Correct:

```tsx
const disabled = api.useIsVisible('first', true);
// or, better: const disabled = api.useLeftArrowVisible();
```

`defaultValue` defaults to `false` (src/createApi.ts:31) and is what both
the server and the first client frame render; omitting it paints an
enabled left arrow that flips to disabled once the observer fires — a
visible flash on every SSR page load. The canonical pair is
`('first', true)` / `('last', false)`, matching a row at its start.

Source: README.md SSR section; src/createApi.ts:31,66,79; maintainer interview

### HIGH Jest fails with "Cannot use import statement outside a module"

Wrong:

```js
// jest.config.cjs — no mapping; Jest loads the ESM entry and chokes
module.exports = { testEnvironment: 'jsdom' };
```

Correct:

```js
module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^react-horizontal-scrolling-menu$':
      'react-horizontal-scrolling-menu/dist/index.cjs',
  },
};
```

The package is ESM-first since v5; Jest without ESM support cannot parse
`dist/index.mjs`, but the package ships a CJS build the mapper can point
at directly.

Source: https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/240; package.json exports map

### HIGH Mounting in jsdom without an IntersectionObserver mock

Wrong:

```ts
// jest.setup.ts missing — first render throws
// ReferenceError: IntersectionObserver is not defined
```

Correct:

```ts
// jest.setup.ts (registered via setupFilesAfterEnv)
class IntersectionObserverMock {
  readonly root: Element | null = null;
  readonly rootMargin = '0px';
  readonly thresholds: ReadonlyArray<number> = [0];
  constructor(public callback: IntersectionObserverCallback) {}
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}
Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
});
```

The library constructs the observer unconditionally — no feature
detection — so jsdom (which lacks IntersectionObserver) crashes the mount
rather than degrading.

Source: src/hooks/useIntersectionObserver.ts:42; https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/240

### HIGH Asserting visibility synchronously after an action

Wrong:

```tsx
fireEvent.click(nextArrow);
expect(screen.getByTestId('card-3')).toBeVisible(); // IO has not fired yet
```

Correct:

```tsx
await user.click(nextArrow);
await waitFor(() =>
  expect(getVisibleIds()).toEqual(['item-3', 'item-4', 'item-5']),
);
```

Scrolling is animated and visibility is reported asynchronously by the
observer, so the DOM is not settled when the click handler returns —
assertions must re-run until they hold (`waitFor`, `expect.poll`), and the
maintainer's recommendation is to test behavior in a real browser
(Playwright) rather than against Jest mocks.

Source: stories/test.tsx:8-16; e2e/scrolling-menu.spec.ts:146-154; issue #240 discussion

### MEDIUM Older Next.js cannot parse the ESM package

Wrong:

```js
// next.config.js on an older Next.js — build fails with
// "Cannot use import statement outside a module"
module.exports = {};
```

Correct:

```js
module.exports = {
  transpilePackages: ['react-horizontal-scrolling-menu'],
};
```

Older Next.js setups (notably pages router) do not consume ESM
dependencies untransformed; listing the package in `transpilePackages`
makes Next compile it.

Source: README.md Next.js note; https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/240

## Tensions

### HIGH Tension: SSR first paint vs async browser truth

The server paints `defaultValue` guesses; real visibility exists only
after IntersectionObserver fires client-side — until then nothing about
the menu is true. Reading visibility at mount is wrong on both the server
and the first client frame, and test assertions that do not poll race the
observer. The reactive visibility model (hooks, `items.getVisible()`,
`menuVisible` gating) is covered in [menu-visibility](../menu-visibility/SKILL.md).

## See also

- [menu-visibility](../menu-visibility/SKILL.md) — hydration first paint
  is controlled by `useIsVisible` `defaultValue`, and test assertions must
  respect the async visibility model this skill's patterns are built on.
