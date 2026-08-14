import { createFileRoute, notFound, Outlet } from '@tanstack/react-router';

import { LOCALES } from '../../i18n';

/**
 * The gate on the `$locale` segment.
 *
 * `$locale` matches *any* single path segment, so without this `/foo`,
 * `/jp` and `/en` all answered 200 with the English homepage — a soft 404 on
 * an unbounded number of URLs, none of them in the sitemap, and each one a
 * near-duplicate of a page that already has a canonical home. (`/en` too:
 * English is served unprefixed, so `/en` is not one of the nine.)
 *
 * A layout route rather than a check in each of the twenty-four: one file
 * covers every child, and a route added later inherits it.
 */
export const Route = createFileRoute('/$locale')({
  beforeLoad: ({ params }) => {
    if (!LOCALES.some((locale) => locale.dir === params.locale))
      throw notFound();
  },
  component: Outlet,
});
