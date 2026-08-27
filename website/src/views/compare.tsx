import { ArrowUpRight } from '../components/Icons';
import { SiteFooter, SiteHeader } from '../components/SiteChrome';
import type { CompareCopy } from '../content/types';
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

export function View({ copy, locale }: { copy: CompareCopy; locale: string }) {
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

        <div className="mt-8 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-3xl border-collapse text-sm">
            <thead>
              <tr className="bg-surface text-left">
                {copy.table.headers.map((header, i) =>
                  // The blank corner labels nothing, and an empty <th> is a
                  // header that announces itself with no name.
                  header ? (
                    <th
                      key={i}
                      className={`border-b border-border p-3 font-semibold ${i === 1 ? 'text-accent-on-soft' : ''}`}
                    >
                      {header}
                    </th>
                  ) : (
                    <td key={i} className="border-b border-border p-3" />
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {copy.table.rows.map((row, i) => (
                <tr key={i} className="align-top">
                  <th className="border-b border-border p-3 text-left font-semibold whitespace-nowrap">
                    {row[0]}
                  </th>
                  {row.slice(1).map((cell, j) => (
                    <td
                      key={j}
                      className={`border-b border-border p-3 text-muted ${j === 0 ? 'text-ink' : ''}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-sm text-muted">{copy.table.note}</p>

        <div className="mt-10 max-w-2xl [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:mt-3 [&_p]:text-muted [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1.5 [&_li]:text-muted">
          <ProseSections sections={copy.prose} />
        </div>

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
