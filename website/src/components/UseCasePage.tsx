import type * as React from 'react';

import { copyFor } from '../content';
import type { UseCaseCopy } from '../content/types';
import { codeOfDir } from '../i18n';
import { exampleBySlug, EXAMPLES } from '../lib/examples-manifest';
import { AUTHOR_SITE, SITE_URL, STORIES } from '../lib/links';
import { Inline, ProseSections } from '../lib/prose';
import type { SnippetKey } from '../lib/snippets';
import { CodeBlock } from './CodeBlock';
import { ArrowUpRight } from './Icons';
import { SiteFooter, SiteHeader } from './SiteChrome';

interface UseCasePageProps {
  locale: string;
  /** Locale-independent route, e.g. `/netflix-row`. */
  path: string;
  copy: UseCaseCopy;
  demo: React.ReactNode;
  snippet: SnippetKey;
  /** Displayed file name over the snippet, e.g. "NetflixRow.tsx". */
  snippetTitle: string;
  /** The matching registry item's install command. */
  shadcnSnippet: SnippetKey;
  storyKey: keyof typeof STORIES;
  related: string[];
}

/**
 * The shared frame of the use-case pages (`/netflix-row`, …): outcome-named
 * landings that wrap existing demos and link into the example pages. Furniture
 * labels are reused from `examplePage` copy, so the pages add no chrome keys.
 */
export function UseCasePage({
  locale,
  path,
  copy,
  demo,
  snippet,
  snippetTitle,
  shadcnSnippet,
  storyKey,
  related,
}: UseCasePageProps) {
  // `''` for English, `/ja` for the rest — in-site hrefs are built from it
  // so a reader stays in the language they were reading.
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const site = copyFor(codeOfDir(locale));
  const chrome = site.examplePage;
  const relatedEntries = related
    .map(exampleBySlug)
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: copy.jsonLdHeadline,
    url: `${SITE_URL}${prefix}${path}`,
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
  };

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main" className="site-container pt-10 pb-20">
        <h1 className="max-w-3xl text-4xl/tight font-bold tracking-tight text-balance">
          {copy.title}
        </h1>
        <div className="mt-4 max-w-2xl text-lg text-muted [&_code]:text-base">
          <p>
            <Inline text={copy.lede} />
          </p>
        </div>

        <div className="example-demo-slot mt-8">{demo}</div>
        <p className="mt-3 text-sm text-muted">
          <Inline text={copy.demoHint} />
        </p>

        <p className="links-row mt-4">
          <a className="gallery-link" href={STORIES[storyKey]}>
            {chrome.storybookCta} <ArrowUpRight />
          </a>
        </p>

        <div className="mt-10 max-w-2xl [&_h2]:mt-9 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_p]:mt-3 [&_p]:text-muted [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1.5 [&_li]:text-muted">
          <ProseSections sections={copy.prose} />
        </div>

        <section aria-label={copy.snippet.heading} className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            {copy.snippet.heading}
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            <Inline text={copy.snippet.lede} />
          </p>
          <div className="mt-5 max-w-3xl">
            <CodeBlock snippet={snippet} title={snippetTitle} />
          </div>
        </section>

        <section aria-label={copy.shadcn.heading} className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            {copy.shadcn.heading}
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            <Inline text={copy.shadcn.body} />
          </p>
          <div className="mt-5 max-w-3xl">
            <CodeBlock snippet={shadcnSnippet} title="shadcn" />
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
                    <span className="font-semibold">
                      {site.manifest.examples[rel.slug]?.name ?? rel.slug}
                    </span>
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
