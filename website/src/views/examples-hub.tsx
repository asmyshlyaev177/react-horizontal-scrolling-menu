import { ArrowUpRight } from '../components/Icons';
import { SiteFooter, SiteHeader } from '../components/SiteChrome';
import type { SiteCopy } from '../content/types';
import { EXAMPLE_GROUPS, EXAMPLES } from '../lib/examples-manifest';
import { STORYBOOK } from '../lib/links';

/**
 * The /examples listing, independent of which language it renders in.
 * Mounted by `/examples` for English and `/$locale/examples` for the rest.
 */
export function View({
  copy: site,
  locale,
}: {
  copy: SiteCopy;
  locale: string;
}) {
  const copy = site.examplesHub;
  // `''` for English, `/ja` for the rest.
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main" className="site-container pt-10 pb-20">
        <h1 className="max-w-3xl text-4xl/tight font-bold tracking-tight text-balance">
          {copy.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{copy.lede}</p>

        {EXAMPLE_GROUPS.map((group) => {
          const entries = EXAMPLES.filter((example) => example.group === group);
          if (entries.length === 0) return null;
          return (
            <section
              key={group}
              aria-label={site.manifest.groups[group]}
              className="mt-10"
            >
              <h2 className="text-2xl font-semibold tracking-tight">
                {site.manifest.groups[group]}
              </h2>
              <ul className="mt-4 grid list-none gap-3 pl-0 sm:grid-cols-2 lg:grid-cols-3">
                {entries.map((example) => (
                  <li key={example.slug}>
                    <a
                      href={`${prefix}/examples/${example.slug}`}
                      className="block h-full rounded-lg border border-border bg-surface p-4 text-ink no-underline hover:border-border-strong"
                    >
                      {/* Not `example.name`/`example.blurb`: EXAMPLES is the
                          structural manifest and carries the English copy that
                          vite.config reads at build. The card is copy. */}
                      <span className="font-semibold">
                        {site.manifest.examples[example.slug]?.name}
                      </span>
                      <span className="mt-1 block text-sm text-muted">
                        {site.manifest.examples[example.slug]?.blurb}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        <p className="links-row mt-12">
          <a className="gallery-link" href={STORYBOOK}>
            {copy.storybookCta} <ArrowUpRight />
          </a>
        </p>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
