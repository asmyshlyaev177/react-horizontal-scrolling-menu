import { Link } from '@tanstack/react-router';
import type * as React from 'react';

import { exampleBySlug, EXAMPLES } from '../lib/examples-manifest';
import { AUTHOR_SITE, SITE_URL, STORIES } from '../lib/links';
import { CopyButton } from './CodeBlock';
import { ArrowUpRight } from './Icons';
import { SiteFooter, SiteHeader } from './SiteChrome';

interface ExamplePageProps {
  slug: string;
  /** Task-phrased h1. */
  title: string;
  lede: React.ReactNode;
  demo: React.ReactNode;
  /** One line under the demo (what to try). */
  demoHint?: React.ReactNode;
  /** Prose sections: h2 + p, already JSX. */
  children: React.ReactNode;
  code: { code: string; html: string };
  /** Displayed file name, e.g. "MouseDrag.source.tsx". */
  codeTitle: string;
  related?: string[];
}

const buildJsonLd = (slug: string, title: string, entryName: string) => ({
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: title,
  url: `${SITE_URL}/examples/${slug}`,
  author: {
    '@type': 'Person',
    name: 'Aleksandr Smyshliaev',
    url: AUTHOR_SITE,
  },
  about: {
    '@type': 'SoftwareSourceCode',
    name: 'react-horizontal-scrolling-menu',
    url: SITE_URL,
    programmingLanguage: 'TypeScript',
    runtimePlatform: 'React',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Examples',
        item: `${SITE_URL}/examples`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: entryName,
        item: `${SITE_URL}/examples/${slug}`,
      },
    ],
  },
});

export function ExamplePage({
  slug,
  title,
  lede,
  demo,
  demoHint,
  children,
  code,
  codeTitle,
  related = [],
}: ExamplePageProps) {
  const entry = exampleBySlug(slug);
  if (!entry) throw new Error(`Unknown example slug: ${slug}`);
  const storyUrl = STORIES[entry.storyKey];
  const relatedEntries = related
    .map(exampleBySlug)
    .filter((e): e is NonNullable<typeof e> => Boolean(e));
  const jsonLd = buildJsonLd(slug, title, entry.name);

  return (
    <>
      <SiteHeader />
      <main id="main" className="container pt-10 pb-20">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link to="/examples" className="hover:text-ink">
            Examples
          </Link>
          <span aria-hidden className="mx-2">
            /
          </span>
          <span className="text-ink">{entry.name}</span>
        </nav>

        <h1 className="mt-4 max-w-3xl text-4xl/tight font-bold tracking-tight text-balance">
          {title}
        </h1>
        <div className="mt-4 max-w-2xl text-lg text-muted [&_code]:text-base">
          {lede}
        </div>

        {/* Demos bring their own panel (.example-demo or an existing
            demo wrapper) — nesting two panels doubles the border. */}
        <div className="mt-8">{demo}</div>
        {demoHint ? (
          <p className="mt-3 text-sm text-muted">{demoHint}</p>
        ) : null}

        <p className="links-row mt-4">
          <a className="gallery-link" href={storyUrl}>
            Edit this example live in Storybook <ArrowUpRight />
          </a>
        </p>

        <div className="mt-10 max-w-2xl [&_h2]:mt-9 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_p]:mt-3 [&_p]:text-muted [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1.5 [&_li]:text-muted">
          {children}
        </div>

        <section aria-label="Full source" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight">Full source</h2>
          <p className="mt-2 max-w-2xl text-muted">
            Complete and copy-paste ready — this is the exact file behind the{' '}
            <a href={storyUrl}>live-editable Storybook version</a>.
          </p>
          <div className="code-panel mt-5">
            <div className="code-panel-bar">
              <span>{codeTitle}</span>
              <CopyButton text={code.code} label="Copy full source" />
            </div>
            <div dangerouslySetInnerHTML={{ __html: code.html }} />
          </div>
        </section>

        {relatedEntries.length > 0 && (
          <section aria-label="Related examples" className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight">
              Related examples
            </h2>
            <ul className="mt-4 grid list-none gap-3 pl-0 sm:grid-cols-2 lg:grid-cols-3">
              {relatedEntries.map((rel) => (
                <li key={rel.slug}>
                  <a
                    href={`/examples/${rel.slug}`}
                    className="block h-full rounded-lg border border-border bg-surface p-4 text-ink no-underline hover:border-border-strong"
                  >
                    <span className="font-semibold">{rel.name}</span>
                    <span className="mt-1 block text-sm text-muted">
                      {rel.blurb}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <p className="mt-12">
          <Link className="gallery-link" to="/examples">
            All {EXAMPLES.length} examples
          </Link>
        </p>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
