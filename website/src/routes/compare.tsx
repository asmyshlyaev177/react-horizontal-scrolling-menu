import { createFileRoute, Link } from '@tanstack/react-router';

import { ArrowUpRight } from '../components/Icons';
import { SiteFooter, SiteHeader } from '../components/SiteChrome';
import { AUTHOR_SITE, GITHUB, SITE_URL, STORIES } from '../lib/links';
import { pageHead } from '../lib/seo';

export const Route = createFileRoute('/compare')({
  head: () =>
    pageHead({
      path: '/compare',
      title: 'react-horizontal-scrolling-menu vs Swiper, Embla, react-slick',
      description:
        'An honest comparison: when a horizontal scrolling menu beats a carousel library, and when it does not. Swiper, Embla, keen-slider and react-slick, side by side.',
    }),
  component: ComparePage,
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline:
    'Carousel or scrolling menu? react-horizontal-scrolling-menu vs Swiper, Embla, keen-slider and react-slick',
  url: `${SITE_URL}/compare`,
  author: {
    '@type': 'Person',
    name: 'Aleksandr Smyshliaev',
    url: AUTHOR_SITE,
  },
};

const MATRIX: Array<[string, string, string, string, string, string]> = [
  [
    'What it is',
    'Scrolling menu with visibility tracking',
    'Full slider/carousel framework',
    'Headless carousel engine',
    'Framework-agnostic slider engine',
    'React port of the jQuery slick slider',
  ],
  [
    'Scroll engine',
    'Native browser scrolling',
    'JS transforms + physics',
    'JS transforms + physics',
    'JS transforms + physics',
    'JS transforms (CSS transitions)',
  ],
  [
    'Bundle (core, min+gzip)',
    '≈5.7 kB',
    '≈40 kB',
    '≈8 kB',
    '≈7 kB',
    '≈15 kB + slick CSS',
  ],
  [
    'Which items are on screen',
    'Built in — per-item useIsVisible',
    'Slide-index based',
    'Slide-index events',
    'Slide-index events',
    'Slide-index based',
  ],
  [
    'Snap, effects, physics',
    'None — deliberately',
    'Rich (fade, cube, coverflow…)',
    'Plugin-based, tweenable',
    'Yes, incl. free mode',
    'Fade, center mode',
  ],
  [
    'Loop / autoplay',
    'Recipes on the public API',
    'Built-in props',
    'Plugins',
    'Built-in options',
    'Built-in props',
  ],
  [
    'Scrollbar, wheel, keyboard focus',
    'Native — free from the browser',
    'Emulated / opt-in modules',
    'DIY (headless)',
    'DIY',
    'Limited',
  ],
  [
    'Best for',
    'Category rows, tab strips, chip filters',
    'Fullscreen sliders, galleries',
    'Custom carousels (shadcn default)',
    'Minimal custom sliders',
    'Legacy slick migrations',
  ],
];

const HEADERS = [
  '',
  'this library',
  'Swiper',
  'Embla',
  'keen-slider',
  'react-slick',
];

function ComparePage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="container pt-10 pb-20">
        <h1 className="max-w-3xl text-4xl/tight font-bold tracking-tight text-balance">
          Carousel or scrolling menu? An honest comparison
        </h1>
        <div className="mt-4 max-w-2xl text-lg text-muted">
          <p>
            Swiper, Embla, keen-slider and react-slick are carousel engines:
            they re-implement scrolling in JavaScript to get slide semantics,
            snap physics and effects. react-horizontal-scrolling-menu is not one
            of them — it rides native browser scrolling and adds per-item
            visibility tracking. Which one you want depends on what you&rsquo;re
            building, and for a real slice of carousel usage the honest answer
            is: you were building a menu all along.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-3xl border-collapse text-sm">
            <thead>
              <tr className="bg-surface text-left">
                {HEADERS.map((header, i) => (
                  <th
                    key={i}
                    className={`border-b border-border p-3 font-semibold ${i === 1 ? 'text-primary' : ''}`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MATRIX.map((row, i) => (
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
        <p className="mt-2 text-sm text-muted">
          Bundle sizes are approximate cores — check bundlephobia for current
          numbers before deciding on size alone.
        </p>

        <div className="mt-10 max-w-2xl [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:mt-3 [&_p]:text-muted [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1.5 [&_li]:text-muted">
          <h2>First, the real question</h2>
          <p>
            A <strong>carousel</strong> presents slides: one thing (or one page
            of things) at a time, with snapping, effects and a sense of
            &ldquo;position 3 of 8&rdquo;. A <strong>menu</strong> presents a
            row your user scans and picks from: a category rail, a tab strip, a
            chip bar. Carousels want slide semantics; menus want native
            scrolling — momentum, scrollbar, wheel, touch and keyboard focus
            behaving exactly like the rest of the page — plus one thing the
            browser doesn&rsquo;t give you: knowing which items are on screen.
          </p>
          <p>
            If you&rsquo;re building a fullscreen image slider, a hero gallery,
            or anything with snap-to-slide physics,{' '}
            <strong>
              use a carousel library — Embla or Swiper are excellent
            </strong>
            . This page exists for the other case, the one every carousel FAQ
            quietly ignores: rows of clickable things that were never really
            slides.
          </p>

          <h2>vs Swiper</h2>
          <p>
            Swiper is the most complete slider framework there is: effects
            (fade, cube, coverflow), virtual slides, zoom, parallax, pagination,
            and a mature ecosystem. It earns its ~40 kB when you use what it
            ships. It re-implements scrolling with transforms, so the native
            scrollbar, wheel behavior and scroll accessibility are emulations
            you configure rather than defaults you inherit.
          </p>
          <ul>
            <li>
              <strong>Choose Swiper</strong> for image-first sliders, effects,
              or anything that must feel like slides.
            </li>
            <li>
              <strong>Choose this library</strong> when the
              &ldquo;carousel&rdquo; is a YouTube-style chip bar or a
              Netflix-style category row: you get native scroll for ~34 kB less,
              plus <code>useIsVisible</code> per item — which Swiper
              doesn&rsquo;t model, because slides aren&rsquo;t items.
            </li>
          </ul>

          <h2>vs Embla</h2>
          <p>
            Embla is a headless carousel engine with beautiful physics and a
            first-class React adapter — it&rsquo;s what shadcn/ui builds its
            carousel on, and the right default when you want full visual control
            over a real carousel. Headless cuts both ways for menus:
            scroll-into-view on selection, per-item visibility, arrow disabling
            and focus management are all yours to hand-build.
          </p>
          <ul>
            <li>
              <strong>Choose Embla</strong> for custom-designed carousels and
              snap physics with small size.
            </li>
            <li>
              <strong>Choose this library</strong> when those hand-built parts
              are the whole point: <code>scrollToItem</code>,{' '}
              <code>useIsVisible</code>, first/last arrow state and{' '}
              <code>apiRef</code> ship working.
            </li>
          </ul>

          <h2>vs keen-slider</h2>
          <p>
            keen-slider is a lean, framework-agnostic slider engine — a good
            pick for minimal custom sliders when you want one dependency across
            frameworks. Like the others it owns the gesture layer with
            transforms, and its API is slide-index-shaped: fine for slides,
            awkward for &ldquo;scroll the selected chip into view and tell me
            what&rsquo;s visible&rdquo;.
          </p>

          <h2>vs react-slick</h2>
          <p>
            react-slick ports the jQuery-era slick carousel to React. It still
            works, but it drags in a separate CSS file, its architecture
            predates hooks, and maintenance is sparse. Teams leaving it usually
            fall into two camps: real carousels (go to Embla or Swiper) — and
            navigation rows that were bent into <code>centerMode</code> because
            slick was already installed. That second camp is this
            library&rsquo;s exact shape:{' '}
            <Link to="/examples/center-on-click">centered selection</Link>,{' '}
            <Link to="/examples/one-item-scroll">one-item stepping</Link> and{' '}
            <Link to="/examples/mouse-drag">drag to scroll</Link> without a
            slider engine.
          </p>

          <h2>What the menu side looks like</h2>
          <p>
            Every pattern on this site is live and server-rendered, each with
            its complete source:{' '}
            <Link to="/examples/center-on-click">scrollable tabs</Link>,{' '}
            <Link to="/examples/add-item-and-scroll-to-it">filter chips</Link>,{' '}
            <Link to="/examples/add-items">load-more rows</Link>, and — the two
            features people assume need a carousel engine —{' '}
            <Link to="/examples/infinite-loop">infinite loop</Link> and{' '}
            <Link to="/examples/autoplay">autoplay</Link>, each about sixty
            lines on the public API.
          </p>
          <ul>
            <li>
              5.7 kB min+gzip, TypeScript-first, MIT, ~347k downloads/month,
              maintained since 2018 with one stable API across React 16.8–19.
            </li>
            <li>
              SSR-friendly: the row scrolls before your JavaScript hydrates —
              this page and every demo on this site prove it.
            </li>
          </ul>
        </div>

        <p className="links-row mt-10">
          <Link className="gallery-link" to="/examples">
            Browse all examples
          </Link>
          <a className="gallery-link" href={STORIES.simple}>
            Try it in Storybook <ArrowUpRight />
          </a>
          <a className="gallery-link" href={GITHUB}>
            GitHub <ArrowUpRight />
          </a>
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
