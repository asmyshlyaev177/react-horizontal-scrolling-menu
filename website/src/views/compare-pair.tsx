import { CompareTable } from '../components/CompareTable';
import { ArrowUpRight } from '../components/Icons';
import { SiteFooter, SiteHeader } from '../components/SiteChrome';
import type { ComparePairCopy, SiteCopy } from '../content/types';
import { AUTHOR_SITE, GITHUB, SITE_URL } from '../lib/links';
import { Inline, ProseSections } from '../lib/prose';

/**
 * One neutral comparison page (`/compare/embla-vs-swiper`, …), independent of
 * which language and which pair it renders. The pair pages funnel honestly:
 * each recommends the right carousel for carousel jobs and claims only the
 * menu-shaped slice.
 */
export function View({
  site,
  copy,
  slug,
  locale,
}: {
  site: SiteCopy;
  copy: ComparePairCopy;
  slug: string;
  locale: string;
}) {
  // `''` for English, `/ja` for the rest — in-site hrefs are built from it
  // so a reader stays in the language they were reading.
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: copy.jsonLdHeadline,
    url: `${SITE_URL}${prefix}/compare/${slug}`,
    author: {
      '@type': 'Person',
      name: 'Aleksandr Smyshliaev',
      url: AUTHOR_SITE,
    },
  };

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main" className="site-container pt-10 pb-20">
        <nav
          aria-label={site.examplePage.breadcrumbLabel}
          className="text-sm text-muted"
        >
          <a href={`${prefix}/compare`} className="hover:text-ink">
            {site.chrome.nav.compare}
          </a>
          <span aria-hidden className="mx-2">
            /
          </span>
          <span className="text-ink">{copy.name}</span>
        </nav>

        <h1 className="mt-4 max-w-3xl text-4xl/tight font-bold tracking-tight text-balance">
          {copy.title}
        </h1>
        <div className="mt-4 max-w-2xl text-lg text-muted">
          <p>
            <Inline text={copy.lede} />
          </p>
        </div>

        <CompareTable
          headers={copy.table.headers}
          rows={copy.table.rows}
          note={copy.table.note}
        />

        <div className="mt-10 max-w-2xl [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:mt-3 [&_p]:text-muted [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1.5 [&_li]:text-muted">
          <ProseSections sections={copy.prose} />
        </div>

        <p className="links-row mt-10">
          <a className="gallery-link" href={`${prefix}/compare`}>
            {site.chrome.nav.compare}
          </a>
          <a className="gallery-link" href={`${prefix}/examples`}>
            {site.compare.links.examples}
          </a>
          <a className="gallery-link" href={GITHUB}>
            {site.compare.links.github} <ArrowUpRight />
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
