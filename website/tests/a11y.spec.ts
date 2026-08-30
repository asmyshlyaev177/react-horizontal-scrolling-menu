/**
 * axe for structure and semantics, `auditContrast` for colour, both against one
 * loaded page per theme. `pnpm test:tokens` proves the token file is sound;
 * this proves the pages reached for the right token. Both floors come from
 * `@asmyshlyaev177/design-tokens`, so a retuned ramp moves this suite with it.
 */
import {
  auditA11y,
  COMPREHENSIVE_TAGS,
  describeViolation,
} from '@asmyshlyaev177/design-tokens/axe';
import {
  auditContrast,
  contrastFailures,
  describeContrast,
} from '@asmyshlyaev177/design-tokens/contrast';
import { expect, type Page, test } from '@playwright/test';

/**
 * One page per template. All 21 example routes render from one component, so
 * only the three whose content the audit can tell apart are here — default,
 * RTL, vertical. English only: the locale changes strings, not pixels.
 */
const PAGES = [
  '/',
  '/examples',
  '/compare',
  '/examples/simple',
  '/examples/rtl',
  '/examples/mui-scrollable-tabs',
  '/examples/vertical',
];

/**
 * The demos show `useIsVisible` by fading scrolled-out items — the subject
 * being demonstrated, not the site's text. It cannot both clear the floor and
 * read as faded (Lc 60 needs opacity 0.65 light / 0.75 dark). Each of these is
 * measured at full opacity on the same page.
 */
const CONTRAST_IGNORE = ['[data-visible="false"]'];

/** Rules axe declines to decide. Anything unlisted fails, so a new one gets a
 *  decision once instead of living unread in the report. */
const REVIEWED_INCOMPLETE: string[] = [];

/** Every assertion soft, so one half cannot hide the other. */
async function auditBoth(page: Page) {
  const axe = await auditA11y(page, { tags: COMPREHENSIVE_TAGS });
  // A selector typo that scoped the scan to nothing would otherwise pass.
  expect.soft(axe.passes).toBeGreaterThan(0);
  expect.soft(axe.violations.map(describeViolation).join('\n')).toBe('');
  expect
    .soft(
      [...new Set(axe.incomplete.map((r) => r.id))].filter(
        (id) => !REVIEWED_INCOMPLETE.includes(id),
      ),
    )
    .toEqual([]);

  const { findings, unresolved } = await auditContrast(page, {
    ignore: CONTRAST_IGNORE,
  });
  // A gradient over the page would otherwise leave the suite green having
  // measured nothing.
  expect.soft(findings.length).toBeGreaterThan(20);
  expect.soft(unresolved).toBeLessThan(findings.length);
  expect
    .soft(contrastFailures(findings).map(describeContrast).join('\n'))
    .toBe('');
}

for (const colorScheme of ['light', 'dark'] as const) {
  test.describe(`accessibility (${colorScheme})`, () => {
    test.use({ colorScheme });

    for (const path of PAGES) {
      test(`${path} clears axe, WCAG 2 AA and the APCA floor`, async ({
        page,
      }) => {
        await page.goto(path);
        await auditBoth(page);
      });
    }
  });
}
