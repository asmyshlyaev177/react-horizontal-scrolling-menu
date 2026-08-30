// What both specs need to ask the site a question and read the answer.
//
// Not a `.spec.ts`, so Playwright never collects it as a suite — it is the one
// definition of the route list and the four response readers, shared by
// smoke.spec.ts (English, plus the homepage's negotiation) and
// locales.spec.ts (the same surfaces in a language that is not English).

import { expect } from '@playwright/test';

import { EXAMPLES } from '../src/lib/examples-manifest';

/** A real browser: HTML, always, on every path. */
export const BROWSER = {
  'user-agent':
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
  accept:
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
};

/** Every route that ships HTML, and so must advertise a Markdown mirror. */
export const HTML_ROUTES = [
  '/',
  '/examples',
  '/compare',
  '/compare/embla-vs-swiper',
  '/compare/react-slick-alternatives',
  '/compare/swiper-alternatives',
  '/netflix-row',
  '/scrollable-tabs',
  '/filter-chips',
  '/category-rail',
  ...EXAMPLES.map((example) => `/examples/${example.slug}`),
];

/** hrefs of the `rel="alternate" type="text/markdown"` links, in document order. */
export function markdownAlternates(html: string): string[] {
  const head = html.slice(0, html.indexOf('</head>'));
  return [...head.matchAll(/<link\b[^>]*>/g)]
    .map(([tag]) => tag)
    .filter(
      (tag) => tag.includes('rel="alternate"') && tag.includes('text/markdown'),
    )
    .map((tag) => /href="([^"]+)"/.exec(tag)?.[1] ?? tag);
}

/**
 * The YAML frontmatter of a mirror, as a plain object.
 *
 * Deliberately strict rather than a real YAML parse: every value the build
 * writes is a quoted scalar, so anything else here means the generator emitted
 * something a parser would choke on — which is the failure this guards.
 */
export function frontmatterOf(markdown: string): Record<string, string> {
  const block = /^---\n([\s\S]*?)\n---\n/.exec(markdown);
  if (!block) return {};
  return Object.fromEntries(
    block[1].split('\n').map((line) => {
      const field = /^([a-z]+): "((?:[^"\\]|\\.)*)"$/.exec(line);
      expect(field, `unparseable frontmatter line: ${line}`).not.toBeNull();
      return [field![1], field![2].replace(/\\(["\\])/g, '$1')];
    }),
  );
}

/** Targets of a `Link:` header, in order. RFC 8288 lists them comma-separated. */
export const linkHeaderTargets = (header: string | undefined) =>
  (header ?? '')
    .split(',')
    .map((entry) => /<([^>]+)>/.exec(entry)?.[1])
    .filter((target): target is string => Boolean(target));

/** The `<main>` of a rendered page — the chrome is the same on all of them. */
export const mainOf = (html: string) =>
  /<main[^>]*>([\s\S]*?)<\/main>/.exec(html)?.[1] ?? '';
