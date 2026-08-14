import type * as React from 'react';

import { copyFor } from '../content';
import { codeOfDir } from '../i18n';
import { exampleBySlug, EXAMPLES } from '../lib/examples-manifest';
import { AUTHOR_SITE, SITE_URL, STORIES } from '../lib/links';
import { CopyButton } from './CodeBlock';
import { ArrowUpRight } from './Icons';
import { SiteFooter, SiteHeader } from './SiteChrome';

interface ExamplePageProps {
  /**
   * Content-directory name of the language being rendered (`en`, `ja`, …).
   * Every in-site link below is prefixed with it, so a reader following the
   * breadcrumb or a related example stays in the language they were reading.
   */
  locale: string;
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

/**
 * Every URL and every name here is the reader's language: a Japanese page
 * whose structured data points at `/examples/simple` and calls it "Getting
 * started" is describing a different page than the one it is on.
 */
const buildJsonLd = ({
  prefix,
  slug,
  title,
  entryName,
  examplesLabel,
}: {
  prefix: string;
  slug: string;
  title: string;
  entryName: string;
  examplesLabel: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: title,
  url: `${SITE_URL}${prefix}/examples/${slug}`,
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
        name: examplesLabel,
        item: `${SITE_URL}${prefix}/examples`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: entryName,
        item: `${SITE_URL}${prefix}/examples/${slug}`,
      },
    ],
  },
});

export function ExamplePage({
  locale,
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
  // `''` for English, `/ja` for the rest — every in-site href below is
  // built from it so a reader stays in the language they were reading.
  const prefix = locale === 'en' ? '' : `/${locale}`;
  if (!entry) throw new Error(`Unknown example slug: ${slug}`);
  const site = copyFor(codeOfDir(locale));
  const chrome = site.examplePage;
  // `EXAMPLES` carries the English names — it is the structural manifest, and
  // vite.config reads it at build. The visible name of an example is copy, so
  // it comes from the locale's own manifest module.
  const nameOf = (s: string) => site.manifest.examples[s]?.name ?? s;
  const storyUrl = STORIES[entry.storyKey];
  const relatedEntries = related
    .map(exampleBySlug)
    .filter((e): e is NonNullable<typeof e> => Boolean(e));
  const jsonLd = buildJsonLd({
    prefix,
    slug,
    title,
    entryName: nameOf(slug),
    examplesLabel: chrome.breadcrumbExamples,
  });

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main" className="site-container pt-10 pb-20">
        <nav aria-label={chrome.breadcrumbLabel} className="text-sm text-muted">
          {/* A plain anchor, not <Link>: the target path is built from the
              locale prefix at runtime and TanStack's `to` is typed against the
              literal route table, which a template string cannot satisfy. The
              related-example links below are anchors for the same reason. */}
          <a href={`${prefix}/examples`} className="hover:text-ink">
            {chrome.breadcrumbExamples}
          </a>
          <span aria-hidden className="mx-2">
            /
          </span>
          <span className="text-ink">{nameOf(slug)}</span>
        </nav>

        <h1 className="mt-4 max-w-3xl text-4xl/tight font-bold tracking-tight text-balance">
          {title}
        </h1>
        <div className="mt-4 max-w-2xl text-lg text-muted [&_code]:text-base">
          {lede}
        </div>

        {/* Demos bring their own panel (.example-demo or an existing
            demo wrapper) — nesting two panels doubles the border. The slot
            caps the width so a rail of ~10 items actually overflows. */}
        <div className="example-demo-slot mt-8">{demo}</div>
        {demoHint ? (
          <p className="mt-3 text-sm text-muted">{demoHint}</p>
        ) : null}

        <p className="links-row mt-4">
          <a className="gallery-link" href={storyUrl}>
            {chrome.storybookCta} <ArrowUpRight />
          </a>
        </p>

        <div className="mt-10 max-w-2xl [&_h2]:mt-9 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_p]:mt-3 [&_p]:text-muted [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1.5 [&_li]:text-muted">
          {children}
        </div>

        <section aria-label={chrome.fullSource} className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            {chrome.fullSource}
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            {chrome.fullSourceLede}{' '}
            <a href={storyUrl}>{chrome.fullSourceLedeLink}</a>.
          </p>
          <div className="code-panel mt-5">
            <div className="code-panel-bar">
              <span>{codeTitle}</span>
              <CopyButton text={code.code} label={chrome.copyFullSource} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: code.html }} />
          </div>
        </section>

        {relatedEntries.length > 0 && (
          <section aria-label={chrome.relatedExamples} className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight">
              {chrome.relatedExamples}
            </h2>
            <ul className="mt-4 grid list-none gap-3 pl-0 sm:grid-cols-2 lg:grid-cols-3">
              {relatedEntries.map((rel) => (
                <li key={rel.slug}>
                  <a
                    href={`${prefix}/examples/${rel.slug}`}
                    className="block h-full rounded-lg border border-border bg-surface p-4 text-ink no-underline hover:border-border-strong"
                  >
                    <span className="font-semibold">{nameOf(rel.slug)}</span>
                    <span className="mt-1 block text-sm text-muted">
                      {site.manifest.examples[rel.slug]?.blurb}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <p className="mt-12">
          <a className="gallery-link" href={`${prefix}/examples`}>
            {chrome.allExamples.replace('{count}', String(EXAMPLES.length))}
          </a>
        </p>
      </main>
      <SiteFooter locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
