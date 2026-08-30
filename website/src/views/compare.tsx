import { CompareTable } from '../components/CompareTable';
import { ArrowUpRight } from '../components/Icons';
import { SiteFooter, SiteHeader } from '../components/SiteChrome';
import type { CompareCopy, ComparePairsCopy } from '../content/types';
import { AUTHOR_SITE, GITHUB, SITE_URL, STORIES } from '../lib/links';
import { Inline, ProseSections } from '../lib/prose';

/**
 * The compare page, independent of which language it renders in.
 * Mounted by `/compare` for English and `/$locale/compare` for the translations.
 */
// Built per render: the structured description is copy, so it is a
// different string in every language.
const jsonLdFor = (copy: CompareCopy) => ({
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: copy.jsonLdHeadline,
  url: `${SITE_URL}/compare`,
  author: {
    '@type': 'Person',
    name: 'Aleksandr Smyshliaev',
    url: AUTHOR_SITE,
  },
});

const PAIR_SLUGS = {
  emblaVsSwiper: 'embla-vs-swiper',
  reactSlickAlternatives: 'react-slick-alternatives',
  swiperAlternatives: 'swiper-alternatives',
} as const;

export function View({
  copy,
  pairs,
  locale,
}: {
  copy: CompareCopy;
  pairs: ComparePairsCopy;
  locale: string;
}) {
  // `''` for English, `/ja` for the rest — in-site hrefs are built from it
  // so a reader stays in the language they were reading.
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main" className="site-container pt-10 pb-20">
        <h1 className="max-w-3xl text-4xl/tight font-bold tracking-tight text-balance">
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
          accentColumn={1}
        />

        <div className="mt-10 max-w-2xl [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:mt-3 [&_p]:text-muted [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1.5 [&_li]:text-muted">
          <ProseSections sections={copy.prose} />
        </div>

        <section aria-label={pairs.hub.heading} className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            {pairs.hub.heading}
          </h2>
          <p className="mt-2 max-w-2xl text-muted">{pairs.hub.lede}</p>
          <ul className="mt-4 grid list-none gap-3 pl-0 sm:grid-cols-2 lg:grid-cols-3">
            {(Object.keys(PAIR_SLUGS) as (keyof typeof PAIR_SLUGS)[]).map(
              (key) => (
                <li key={key}>
                  <a
                    href={`${prefix}/compare/${PAIR_SLUGS[key]}`}
                    className="block h-full rounded-lg border border-border bg-surface p-4 text-ink no-underline hover:border-border-strong"
                  >
                    <span className="font-semibold">{pairs[key].name}</span>
                    <span className="mt-1 block text-sm text-muted">
                      {pairs[key].blurb}
                    </span>
                  </a>
                </li>
              ),
            )}
          </ul>
        </section>

        <p className="links-row mt-10">
          <a className="gallery-link" href={`${prefix}/examples`}>
            {copy.links.examples}
          </a>
          <a className="gallery-link" href={STORIES.simple}>
            {copy.links.storybook} <ArrowUpRight />
          </a>
          <a className="gallery-link" href={GITHUB}>
            {copy.links.github} <ArrowUpRight />
          </a>
        </p>
      </main>
      <SiteFooter locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFor(copy)) }}
      />
    </>
  );
}
