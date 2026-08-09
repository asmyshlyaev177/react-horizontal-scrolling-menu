import { createFileRoute, Link } from '@tanstack/react-router';

import { CodeBlock, CopyButton } from '../components/CodeBlock';
import { AutoplayDemo } from '../components/demos/AutoplayDemo';
import { ChipsDemo } from '../components/demos/ChipsDemo';
import { HeroDemo } from '../components/demos/HeroDemo';
import { InfiniteDemo } from '../components/demos/InfiniteDemo';
import { QuickStartDemo } from '../components/demos/QuickStartDemo';
import { RTLDemo } from '../components/demos/RTLDemo';
import { TabsDemo } from '../components/demos/TabsDemo';
import { ArrowUpRight, Check, Minus } from '../components/Icons';
import { SiteFooter, SiteHeader } from '../components/SiteChrome';
import {
  API_DOCS,
  AUTHOR_GITHUB,
  AUTHOR_LINKEDIN,
  AUTHOR_SITE,
  GITHUB,
  REACT_STATUS,
  SITE_URL,
  STORIES,
  STORYBOOK,
} from '../lib/links';

export const Route = createFileRoute('/')({
  head: () => ({
    links: [{ rel: 'canonical', href: SITE_URL }],
  }),
  component: Home,
});

const INSTALL_CMD = 'npm install react-horizontal-scrolling-menu';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  name: 'react-horizontal-scrolling-menu',
  description:
    'Horizontal scrolling menu component for React with per-item visibility tracking, built on native browser scrolling.',
  url: SITE_URL,
  codeRepository: GITHUB,
  programmingLanguage: 'TypeScript',
  runtimePlatform: 'React',
  license: 'https://opensource.org/licenses/MIT',
  author: {
    '@type': 'Person',
    name: 'Aleksandr Smyshliaev',
    url: AUTHOR_SITE,
  },
};

function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* ---------------- hero ---------------- */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="site-container">
            <h1 id="hero-title">
              The horizontal menu that{' '}
              <span className="knows">knows what’s visible</span>
            </h1>
            <p className="hero-sub">
              A React scrolling menu built on the browser’s own scroll —
              per-item visibility tracking, arrows, drag, and a full imperative
              API. <code>5.7 kB</code> gzipped.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#quick-start">
                Get started
              </a>
              <a className="btn btn-ghost" href={STORYBOOK}>
                Browse examples
              </a>
            </div>
          </div>
          <HeroDemo />
        </section>

        {/* ---------------- install ---------------- */}
        <section className="install site-container" aria-label="Install">
          <div className="install-row">
            <span className="install-cmd">
              <span className="dollar" aria-hidden>
                $
              </span>
              {INSTALL_CMD}
              <CopyButton text={INSTALL_CMD} label="Copy install command" />
            </span>
            <span className="install-facts">
              <span>
                <strong>347k</strong> downloads/month
              </span>
              <span>
                <strong>5.7 kB</strong> min+gzip
              </span>
              <span>
                React <strong>16.8 – 19</strong>
              </span>
              <span>
                <strong>MIT</strong>
              </span>
            </span>
          </div>
        </section>

        {/* ---------------- autoplay ---------------- */}
        <section
          className="autoplay site-container"
          aria-labelledby="autoplay-title"
        >
          <h2 className="section-heading" id="autoplay-title">
            Autoplay, without a carousel engine
          </h2>
          <p className="section-lede">
            There’s no <code>autoplay</code> prop — this rail is a recipe on the
            public API: the row cloned onto both ends, one{' '}
            <code>scrollLeft</code> jump at the seam, and a timer calling{' '}
            <code>scrollNext()</code>. It pauses on hover, focus and hidden
            tabs, sits still under reduced motion — and you can drag it, even
            backwards, across the seam.
          </p>
          <AutoplayDemo />
          <p className="links-row">
            <Link className="gallery-link" to="/examples/autoplay">
              Read the full recipe
            </Link>
            <a className="gallery-link" href={STORIES.autoplay}>
              Edit it live in Storybook <ArrowUpRight />
            </a>
          </p>
        </section>

        {/* ---------------- positioning ---------------- */}
        <section
          className="positioning site-container"
          aria-labelledby="positioning-title"
        >
          <div className="positioning-grid">
            <div>
              <h2 id="positioning-title">
                A <em>menu</em>, not a carousel
              </h2>
              <p className="honest-scope">
                Embla, Swiper and keen-slider re-implement scrolling in
                JavaScript to build image sliders — snap points, spring physics,
                a render loop. This library ships none of that. It rides native
                browser scrolling and adds the one thing the browser doesn’t
                give you: knowing exactly which items are on screen.
              </p>
              <p className="honest-scope">
                <strong>The wrong tool</strong> for a fullscreen image slider —
                use Embla or Swiper there. <strong>The right tool</strong> for
                category rows, tab strips, chip filters, and any row of things
                your app needs to reason about.
              </p>
            </div>
            <div>
              <div className="pillar">
                <h3>Native scrolling</h3>
                <p>
                  Momentum, scrollbar, touch, wheel and accessibility come from
                  the browser, not a physics engine. The row scrolls before your
                  JavaScript hydrates — every demo on this page is
                  server-rendered.
                </p>
              </div>
              <div className="pillar">
                <h3>Visibility tracking</h3>
                <p>
                  IntersectionObserver reports which items are on screen.{' '}
                  <code>useIsVisible(itemId)</code> subscribes one component to
                  one item — no scroll-position math, and only the affected
                  items re-render.
                </p>
              </div>
              <div className="pillar">
                <h3>Imperative when you need it</h3>
                <p>
                  <code>scrollToItem</code>, <code>scrollNext</code>,{' '}
                  <code>scrollPrev</code>, lookup by id or index — through
                  context inside the menu, or <code>apiRef</code> from outside
                  it.
                </p>
              </div>
              <div className="pillar">
                <h3>Your components, your CSS</h3>
                <p>
                  Arrows, header, footer and every item are components you
                  write. Item width is your CSS. The library ships 210 bytes of
                  layout styles and stays out of the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- quick start ---------------- */}
        <section
          className="quickstart site-container"
          id="quick-start"
          aria-labelledby="qs-title"
        >
          <h2 className="section-heading" id="qs-title">
            Quick start
          </h2>
          <p className="section-lede">
            One file, no configuration: items with an <code>itemId</code>, two
            arrows reading <code>VisibilityContext</code>, and the stylesheet
            import.
          </p>
          <div className="qs-grid">
            <CodeBlock snippet="quickStart" title="App.tsx" />
            <div className="qs-side">
              <QuickStartDemo />
              <div className="qs-notes">
                <p className="qs-note">
                  <Check />
                  <span>
                    <code>itemId</code> is required on every item — it’s how
                    tracking works. The React <code>key</code> works as a
                    fallback.
                  </span>
                </p>
                <p className="qs-note">
                  <Check />
                  <span>
                    <code>styles.css</code> is a separate import; the JS bundle
                    never injects CSS.
                  </span>
                </p>
                <p className="qs-note">
                  <Check />
                  <span>
                    Item width comes from your own CSS — the menu measures
                    nothing.
                  </span>
                </p>
              </div>
              <Link className="gallery-link" to="/examples/simple">
                Read the full getting-started example
              </Link>
            </div>
          </div>
        </section>

        {/* ---------------- gallery ---------------- */}
        <section
          className="gallery site-container"
          aria-labelledby="gallery-title"
        >
          <h2 className="section-heading" id="gallery-title">
            Recipes you’ll actually ship
          </h2>
          <p className="section-lede">
            Four common patterns, live, with the lines that matter.
          </p>

          <div className="gallery-item">
            <div className="gallery-copy">
              <h3>A tab strip that centers the active tab</h3>
              <p>
                Click a tab: <code>scrollToItem</code> with{' '}
                <code>inline: {"'center'"}</code> brings it to the middle of the
                row. The same call handles <code>start</code>, <code>end</code>{' '}
                and paging.
              </p>
              <CodeBlock snippet="tabs" title="Tab.tsx" />
              <Link className="gallery-link" to="/examples/center-on-click">
                See the full example
              </Link>
            </div>
            <TabsDemo />
          </div>

          <div className="gallery-item">
            <div className="gallery-copy">
              <h3>Add a chip, scroll to it</h3>
              <p>
                State lives outside the menu; <code>apiRef</code> reaches in.
                Add a filter and the row follows it.
              </p>
              <CodeBlock snippet="chips" title="Filters.tsx" />
              <Link
                className="gallery-link"
                to="/examples/add-item-and-scroll-to-it"
              >
                See the full example
              </Link>
            </div>
            <ChipsDemo />
          </div>

          <div className="gallery-item">
            <div className="gallery-copy">
              <h3>Load more when the end shows up</h3>
              <p>
                <code>onUpdate</code> tells you when the last item becomes
                visible — append the next page right there. No scroll listeners,
                no pixel thresholds to tune.
              </p>
              <CodeBlock snippet="infinite" title="Feed.tsx" />
              <Link className="gallery-link" to="/examples/add-items">
                See the full example
              </Link>
            </div>
            <InfiniteDemo />
          </div>

          <div className="gallery-item">
            <div className="gallery-copy">
              <h3>Right-to-left, one prop</h3>
              <p>
                <code>RTL</code> flips the scroll container’s direction; arrows
                and paging logic follow.
              </p>
              <CodeBlock snippet="rtl" title="Menu.tsx" />
              <Link className="gallery-link" to="/examples/rtl">
                See the full example
              </Link>
            </div>
            <RTLDemo />
          </div>
        </section>

        {/* ---------------- features ---------------- */}
        <section
          className="features site-container"
          aria-labelledby="features-title"
        >
          <h2 className="section-heading" id="features-title">
            What’s in the box
          </h2>
          <div className="features-grid">
            <ul className="feature-list">
              {[
                <>
                  Per-item visibility hooks — <code>useIsVisible(itemId)</code>
                </>,
                <>
                  <code>first</code> / <code>last</code> helpers for arrow state
                </>,
                <>
                  <code>scrollToItem</code> · <code>scrollNext</code> ·{' '}
                  <code>scrollPrev</code>
                </>,
                <>
                  <code>apiRef</code> for control from outside the menu
                </>,
                'Drag, wheel, touch and scrollbar input',
                'Dynamic add/remove detection',
                'Header and Footer slots',
                <>
                  <code>slidingWindow</code> + <code>getItemsPos</code> paging
                  helpers
                </>,
                'Right-to-left support',
                'Custom transition functions',
                'SSR-safe — this page proves it',
                <>
                  TypeScript-first — <code>publicApiType</code> exported
                </>,
                'One stable API across React 16.8 – 19',
              ].map((item, i) => (
                <li key={i}>
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="not-included">
              <h3>Not in the box</h3>
              <ul>
                {[
                  'Snap and spring physics',
                  'Fullscreen image sliders',
                  'Lightboxes',
                ].map((item) => (
                  <li key={item}>
                    <Minus />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Those belong to image-slider land — Embla and Swiper do them
                well. <a href={STORIES.infiniteLoop}>Infinite loop</a> and{' '}
                <a href={STORIES.autoplay}>autoplay</a> aren’t props either —
                they’re recipes: about sixty lines of the public API each,
                live-editable in Storybook. The rail near the top of this page
                is exactly that recipe, running. This stays a menu.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- proof ---------------- */}
        <section className="proof site-container" aria-labelledby="proof-title">
          <h2 className="proof-statement" id="proof-title">
            Downloaded <strong>347,516 times</strong> last month by some{' '}
            <strong>20,000 repositories</strong> — maintained since{' '}
            <strong>2018</strong>.
          </h2>
          <div className="proof-notes">
            <span>788 stars on GitHub</span>
            <span>
              Featured in <a href={REACT_STATUS}>React Status #257</a>
            </span>
            <span>
              In production at{' '}
              <a href="https://github.com/owid/owid-grapher">
                Our World in Data
              </a>
            </span>
          </div>
        </section>

        {/* ---------------- storybook cta ---------------- */}
        <section className="sb-cta site-container" aria-labelledby="sb-title">
          <div className="sb-panel">
            <div>
              <h2 id="sb-title">Every example is editable, in your browser</h2>
              <p>
                The Storybook doubles as a playground: each story ships with a
                Monaco editor loaded with the library’s real type definitions.
                Change the code, watch it re-render — no sandbox account, no
                local setup.
              </p>
            </div>
            <div className="sb-actions">
              <a className="btn btn-primary" href={STORYBOOK}>
                Open Storybook
              </a>
              <a href={API_DOCS}>API reference</a>
            </div>
          </div>
        </section>

        {/* ---------------- author ---------------- */}
        <section
          className="author site-container"
          aria-labelledby="author-title"
        >
          <div className="author-card">
            <img src="/author.png" alt="" width="72" height="72" />
            <div className="author-body">
              <h2 id="author-title">
                Built and maintained by Aleksandr Smyshliaev
              </h2>
              <p>
                First published in 2018, same public API across React 16.8 to
                19. Aleksandr is a frontend engineer — React, Next.js,
                TypeScript — currently open to contract and full-time work.
              </p>
              <div className="author-links">
                <a href={AUTHOR_SITE}>asmyshlyaev177.dev</a>
                <a href={AUTHOR_GITHUB}>GitHub</a>
                <a href={AUTHOR_LINKEDIN}>LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
