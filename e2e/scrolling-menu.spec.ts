import { expect, type Locator, type Page, test } from '@playwright/test';

/**
 * 650px is what makes the expectations below meaningful: exactly three of the
 * demo's 180px cards fit on screen, so one arrow click advances the visible
 * window by three ids and the arrows disable themselves at either end.
 */
test.use({ viewport: { width: 650, height: 768 } });

/**
 * One IntersectionObserver callback. Card and arrow state is asserted with
 * auto-retrying expectations, but "the menu scrolled off screen and the arrows
 * must therefore NOT change" has no positive signal to wait for — without a
 * pause the assertion would pass before the observer had a chance to fire.
 */
const OBSERVER_MS = 300;

const leftArrow = (page: Page) =>
  page.getByRole('button', { name: 'Left', exact: true });

const rightArrow = (page: Page) =>
  page.getByRole('button', { name: 'Right', exact: true });

/**
 * The same spec runs against every example app — same demo page, same DOM
 * contract, different framework/bundler. Relative URLs resolve against
 * baseURL (example-nextjs on 3003); the rest are absolute per-app ports.
 * Servers for all apps run simultaneously, booted by the wireit graph.
 */
const APPS = [
  { name: 'nextjs', url: '/' },
  { name: 'tanstack', url: 'http://localhost:3004/' },
] as const;

for (const app of APPS) {
  test.describe(`Scrolling menu [${app.name}]`, () => {
    /**
     * Both apps server-render — Next.js prerenders the 'use client' page,
     * TanStack Start renders in workerd on every request. The raw payload,
     * fetched without a browser, must already contain the whole menu: this is
     * what catches an SSR regression (window/document access during render),
     * which the browser tests can't — hydration would repaint the page before
     * the first assertion looks at it.
     */
    test('server-renders the menu into the HTML payload', async ({
      request,
    }) => {
      const response = await request.get(app.url);
      expect(response.ok()).toBe(true);

      const html = await response.text();
      for (let i = 0; i < 10; i++) {
        expect(html).toContain(`data-cy="test${i}"`);
      }
      expect(html).toContain('>Left<');
      expect(html).toContain('>Right<');
    });

    test('scrolls forward and backward, tracking cards and arrows', async ({
      page,
    }) => {
      await openDemo(page, app.url);

      await expectArrow(leftArrow(page), { active: false });
      await expectArrow(rightArrow(page), { active: true });
      await expectVisibleCards(page, [0, 1, 2]);

      await rightArrow(page).click();
      await expectVisibleCards(page, [3, 4, 5]);

      await rightArrow(page).click();
      await expectVisibleCards(page, [6, 7, 8]);

      // Last page: the menu can only scroll far enough to show the tail.
      await rightArrow(page).click();
      await expectVisibleCards(page, [7, 8, 9]);

      await leftArrow(page).click();
      await expectVisibleCards(page, [4, 5, 6]);

      await leftArrow(page).click();
      await expectVisibleCards(page, [1, 2, 3]);

      // Back to the first page.
      await leftArrow(page).click();
      await expectVisibleCards(page, [0, 1, 2]);
    });

    test.describe('menu visibility', () => {
      test('does not update arrows while the menu is off screen', async ({
        page,
      }) => {
        await openDemo(page, app.url);
        await expectArrow(leftArrow(page), { active: false });

        await scrollWindowTo(page, 400);

        await page.waitForTimeout(OBSERVER_MS);
        await expectArrow(leftArrow(page), { active: false });
      });

      test('handles scrolling while the menu is partially hidden', async ({
        page,
      }) => {
        await openDemo(page, app.url);
        await expectArrow(leftArrow(page), { active: false });

        await scrollWindowTo(page, 450);
        await page.waitForTimeout(OBSERVER_MS);

        await rightArrow(page).click();
        await expectVisibleCards(page, [3, 4, 5]);
        await expectArrow(leftArrow(page), { active: true });
        await expectArrow(rightArrow(page), { active: true });

        await rightArrow(page).click();
        await expectVisibleCards(page, [6, 7, 8]);
        await expectArrow(leftArrow(page), { active: true });
        await expectArrow(rightArrow(page), { active: true });

        await rightArrow(page).click();
        await expectVisibleCards(page, [7, 8, 9]);
        await expectArrow(leftArrow(page), { active: true });
        await expectArrow(rightArrow(page), { active: false });
      });
    });
  });
}

async function openDemo(page: Page, url: string) {
  await page.goto(url);
  await expect(page.locator('[data-cy="test0"]')).toBeVisible();
}

/** `cy.scrollTo(0, y)` — the demo page is 200vh tall so the menu scrolls away. */
async function scrollWindowTo(page: Page, y: number) {
  await page.evaluate((top) => window.scrollTo(0, top), y);
}

/**
 * Asserts the exact set of cards the menu reports as on screen, in DOM order.
 * The demo publishes that through `data-visible`, and `expect.poll` retries the
 * whole comparison, so this replaces both the count check and the per-card
 * `waitUntil` loop the Cypress spec needed.
 */
async function expectVisibleCards(page: Page, ids: number[]) {
  await expect
    .poll(() =>
      page
        .locator('.card[data-visible="true"]')
        .evaluateAll((cards) => cards.map((card) => card.dataset.cy)),
    )
    .toEqual(ids.map((id) => `test${id}`));
}

/**
 * Both arrows stay mounted and the inactive one is faded out rather than
 * removed, so `toBeVisible()` — which ignores opacity — cannot tell the two
 * states apart. Cypress' `be.visible` did treat `opacity: 0` as hidden;
 * asserting the computed opacity together with `disabled` checks the same
 * behaviour without depending on any runner's visibility heuristic.
 */
async function expectArrow(arrow: Locator, { active }: { active: boolean }) {
  await expect(arrow).toHaveCSS('opacity', active ? '1' : '0');
  await (active ? expect(arrow).toBeEnabled() : expect(arrow).toBeDisabled());
}
