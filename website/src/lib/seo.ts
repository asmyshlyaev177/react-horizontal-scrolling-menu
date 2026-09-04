import { copyFor } from '../content';
import { en } from '../content/en';
import { indexHead, localeFromPath, stripLocale } from '../i18n';
import { LLMS_TXT, SITE_URL } from './links';

/**
 * The site-wide Markdown summary, declared on every page.
 *
 * Always last among the `text/markdown` alternates: a client that takes the
 * first one it finds should get the page it asked about, and fall back to the
 * whole-site summary only where the page has no mirror of its own.
 */
export const llmsTxtLink = {
  rel: 'alternate',
  type: 'text/markdown',
  href: `${SITE_URL}${LLMS_TXT}`,
  title: en.chrome.links.llmsTxt,
};

// Per-route head: title/description/OG override the root defaults by
// name/property; canonical is a link and must come from here (the root
// deliberately sets none).
export const pageHead = ({
  path,
  title,
  description,
  markdown = true,
}: {
  path: string;
  title: string;
  description: string;
  /**
   * Whether this page has a Markdown mirror at `<path>.md` to advertise.
   *
   * Every route does — vite.config.ts writes one for each, either bespoke
   * (the examples carry their full source) or converted from the page's own
   * prerendered HTML. The flag stays because a page shipped without one
   * would need to say so rather than advertise a 404.
   *
   * Appending `.md` to a URL is the convention agents converged on, but not
   * one they reliably discover unaided, which is what this link is for. It
   * comes before the site-wide llms.txt link, so a client taking the first
   * `rel="alternate" type="text/markdown"` gets this page.
   */
  markdown?: boolean;
}) => ({
  meta: [
    ...indexHead(localeFromPath(path), stripLocale(path)).meta,
    { title },
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: `${SITE_URL}${path}` },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    // The card's image alt is set on the root route, which sits above
    // `$locale` and can only ever state the English one. The path knows.
    {
      property: 'og:image:alt',
      content: copyFor(localeFromPath(path).code).chrome.ogImageAlt,
    },
    {
      name: 'twitter:image:alt',
      content: copyFor(localeFromPath(path).code).chrome.ogImageAlt,
    },
  ],
  links: [
    { rel: 'canonical', href: `${SITE_URL}${path}` },
    // The reciprocal hreflang cluster for this page, or nothing on an
    // unindexed locale. Derived from the path, so a page cannot be added
    // without one.
    ...indexHead(localeFromPath(path), stripLocale(path)).links,
    ...(markdown
      ? [
          {
            rel: 'alternate',
            type: 'text/markdown',
            href: `${SITE_URL}${path}.md`,
            // Describes *this* page, so it is in this page's language. The
            // llms.txt link below is not: that is one English document.
            title: copyFor(localeFromPath(path).code).chrome.links
              .markdownAlternate,
          },
        ]
      : []),
    llmsTxtLink,
  ],
});
