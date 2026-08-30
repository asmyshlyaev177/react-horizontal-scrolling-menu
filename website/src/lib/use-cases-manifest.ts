// Structural slug ↔ copy-key map for the use-case pages. The visible name
// and blurb are copy and live in content/<locale>/use-cases.ts.

import type { UseCasesCopy } from '../content/types.ts';

export const USE_CASES: {
  slug: string;
  key: Exclude<keyof UseCasesCopy, 'hub'>;
}[] = [
  { slug: 'netflix-row', key: 'netflixRow' },
  { slug: 'scrollable-tabs', key: 'scrollableTabs' },
  { slug: 'filter-chips', key: 'filterChips' },
  { slug: 'category-rail', key: 'categoryRail' },
];
