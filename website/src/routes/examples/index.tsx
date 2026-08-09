import { createFileRoute } from '@tanstack/react-router';

import { ArrowUpRight } from '../../components/Icons';
import { SiteFooter, SiteHeader } from '../../components/SiteChrome';
import { EXAMPLE_GROUPS, EXAMPLES } from '../../lib/examples-manifest';
import { STORYBOOK } from '../../lib/links';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/')({
  head: () =>
    pageHead({
      path: '/examples',
      title: 'React horizontal scroll menu examples — live, with code',
      description:
        'Examples of react-horizontal-scrolling-menu: arrows, drag to scroll, scrollable tabs, RTL, vertical, infinite loop, autoplay — each with copy-paste source.',
    }),
  component: ExamplesHub,
});

function ExamplesHub() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="site-container pt-10 pb-20">
        <h1 className="max-w-3xl text-4xl/tight font-bold tracking-tight text-balance">
          Examples: every pattern, live, with the full source
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Each example is a working demo of the published npm package plus the
          complete file behind it — copy-paste ready, and editable live in
          Storybook. Server-rendered like everything else on this site.
        </p>

        {EXAMPLE_GROUPS.map((group) => {
          const entries = EXAMPLES.filter((example) => example.group === group);
          if (entries.length === 0) return null;
          return (
            <section key={group} aria-label={group} className="mt-10">
              <h2 className="text-2xl font-semibold tracking-tight">{group}</h2>
              <ul className="mt-4 grid list-none gap-3 pl-0 sm:grid-cols-2 lg:grid-cols-3">
                {entries.map((example) => (
                  <li key={example.slug}>
                    <a
                      href={`/examples/${example.slug}`}
                      className="block h-full rounded-lg border border-border bg-surface p-4 text-ink no-underline hover:border-border-strong"
                    >
                      <span className="font-semibold">{example.name}</span>
                      <span className="mt-1 block text-sm text-muted">
                        {example.blurb}
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
            Prefer a playground? Open the Storybook <ArrowUpRight />
          </a>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
