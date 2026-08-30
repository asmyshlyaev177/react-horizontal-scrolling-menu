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
import type { HomeCopy } from '../content/types';
import {
  API_DOCS,
  AUTHOR_GITHUB,
  AUTHOR_LINKEDIN,
  AUTHOR_SITE,
  GITHUB,
  LLMS_TXT,
  SITE_URL,
  SKILLS,
  STORIES,
  STORYBOOK,
} from '../lib/links';
import { Inline } from '../lib/prose';

/**
 * The home page, independent of which language it renders in.
 * Mounted by `/` for English and `/$locale/` for the translations.
 */
const INSTALL_CMD = 'npm install react-horizontal-scrolling-menu';
const INTENT_CMD = 'npx @tanstack/intent@latest install';
const SHADCN_CMD =
  'npx shadcn@latest add https://react-horizontal-scrolling-menu.dev/r/scroll-menu.json';

// Built per render: the structured description is copy, so it is a
// different string in every language.
const jsonLdFor = (copy: HomeCopy) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  name: 'react-horizontal-scrolling-menu',
  description: copy.jsonLdDescription,
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
});

export function View({ copy, locale }: { copy: HomeCopy; locale: string }) {
  // `''` for English, `/ja` for the rest — in-site hrefs are built from it
  // so a reader stays in the language they were reading.
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return (
    <>
      <SiteHeader locale={locale} />

      <main id="main">
        {/* ---------------- hero ---------------- */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="site-container">
            <h1 id="hero-title">
              {copy.hero.titleLead}
              <span className="knows">{copy.hero.titleHighlight}</span>
            </h1>
            <p className="hero-sub">
              <Inline text={copy.hero.sub} />
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#quick-start">
                {copy.hero.primaryCta}
              </a>
              <a className="btn btn-ghost" href={`${prefix}/examples`}>
                {copy.hero.secondaryCta}
              </a>
              <a className="btn btn-ghost" href={STORYBOOK}>
                {copy.hero.storybookCta}
              </a>
            </div>
          </div>
          <HeroDemo />
        </section>

        {/* ---------------- install ---------------- */}
        <section
          className="install site-container"
          aria-label={copy.install.ariaLabel}
        >
          <div className="install-row">
            <span className="install-cmd">
              <span className="dollar" aria-hidden>
                $
              </span>
              {INSTALL_CMD}
              <CopyButton text={INSTALL_CMD} label={copy.install.copyLabel} />
            </span>
            <span className="install-facts">
              {copy.install.facts.map((fact, i) => (
                <span key={i}>
                  <Inline text={fact} />
                </span>
              ))}
            </span>
          </div>
          <div className="install-row install-row--alt">
            <span className="install-cmd">
              <span className="dollar" aria-hidden>
                $
              </span>
              {SHADCN_CMD}
              <CopyButton
                text={SHADCN_CMD}
                label={copy.install.shadcnCopyLabel}
              />
            </span>
            <span className="install-facts">
              <span>
                <Inline text={copy.install.shadcnNote} />
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
            {copy.autoplay.heading}
          </h2>
          <p className="section-lede">
            <Inline text={copy.autoplay.lede} />
          </p>
          <AutoplayDemo />
          <p className="links-row">
            <a className="gallery-link" href={`${prefix}/examples/autoplay`}>
              {copy.autoplay.recipeLink}
            </a>
            <a className="gallery-link" href={STORIES.autoplay}>
              {copy.autoplay.storybookLink} <ArrowUpRight />
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
                <Inline text={copy.positioning.heading} />
              </h2>
              {copy.positioning.scope.map((paragraph, i) => (
                <p className="honest-scope" key={i}>
                  <Inline text={paragraph} />
                </p>
              ))}
            </div>
            <div>
              {copy.positioning.pillars.map((pillar) => (
                <div className="pillar" key={pillar.title}>
                  <h3>{pillar.title}</h3>
                  <p>
                    <Inline text={pillar.body} />
                  </p>
                </div>
              ))}
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
            {copy.quickStart.heading}
          </h2>
          <p className="section-lede">
            <Inline text={copy.quickStart.lede} />
          </p>
          <div className="qs-grid">
            <CodeBlock snippet="quickStart" title="App.tsx" />
            <div className="qs-side">
              <QuickStartDemo />
              <div className="qs-notes">
                {copy.quickStart.notes.map((note, i) => (
                  <p className="qs-note" key={i}>
                    <Check />
                    <span>
                      <Inline text={note} />
                    </span>
                  </p>
                ))}
              </div>
              <a className="gallery-link" href={`${prefix}/examples/simple`}>
                {copy.quickStart.link}
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- ai skills ---------------- */}
        <section
          className="ai-skills site-container"
          aria-labelledby="ai-skills-title"
        >
          <div className="ai-panel">
            <div className="ai-copy">
              <h2 id="ai-skills-title">{copy.aiSkills.heading}</h2>
              <p>
                <Inline text={copy.aiSkills.body} />
              </p>
              <span className="install-cmd">
                <span className="dollar" aria-hidden>
                  $
                </span>
                {INTENT_CMD}
                <CopyButton text={INTENT_CMD} label={copy.aiSkills.copyLabel} />
              </span>
              <p className="ai-note">
                <Inline text={copy.aiSkills.note} />
              </p>
            </div>

            <ul className="skill-list">
              {copy.aiSkills.skills.map(({ id, when }) => (
                <li key={id}>
                  <code>{id}</code>
                  <span>{when}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="links-row">
            <a className="gallery-link" href={SKILLS}>
              {copy.aiSkills.skillsLink} <ArrowUpRight />
            </a>
            <a className="gallery-link" href={LLMS_TXT}>
              {copy.aiSkills.llmsLink}
            </a>
          </p>
        </section>

        {/* ---------------- gallery ---------------- */}
        <section
          className="gallery site-container"
          aria-labelledby="gallery-title"
        >
          <h2 className="section-heading" id="gallery-title">
            {copy.gallery.heading}
          </h2>
          <p className="section-lede">{copy.gallery.lede}</p>

          <div className="gallery-item">
            <div className="gallery-copy">
              <h3>{copy.gallery.tabs.title}</h3>
              <p>
                <Inline text={copy.gallery.tabs.body} />
              </p>
              <CodeBlock snippet="tabs" title="Tab.tsx" />
              <a className="gallery-link" href={`${prefix}/scrollable-tabs`}>
                {copy.gallery.tabs.link}
              </a>
            </div>
            <TabsDemo />
          </div>

          <div className="gallery-item">
            <div className="gallery-copy">
              <h3>{copy.gallery.chips.title}</h3>
              <p>
                <Inline text={copy.gallery.chips.body} />
              </p>
              <CodeBlock snippet="chips" title="Filters.tsx" />
              <a className="gallery-link" href={`${prefix}/filter-chips`}>
                {copy.gallery.chips.link}
              </a>
            </div>
            <ChipsDemo />
          </div>

          <div className="gallery-item">
            <div className="gallery-copy">
              <h3>{copy.gallery.infinite.title}</h3>
              <p>
                <Inline text={copy.gallery.infinite.body} />
              </p>
              <CodeBlock snippet="infinite" title="Feed.tsx" />
              <a className="gallery-link" href={`${prefix}/examples/add-items`}>
                {copy.gallery.infinite.link}
              </a>
            </div>
            <InfiniteDemo />
          </div>

          <div className="gallery-item">
            <div className="gallery-copy">
              <h3>{copy.gallery.rtl.title}</h3>
              <p>
                <Inline text={copy.gallery.rtl.body} />
              </p>
              <CodeBlock snippet="rtl" title="Menu.tsx" />
              <a className="gallery-link" href={`${prefix}/examples/rtl`}>
                {copy.gallery.rtl.link}
              </a>
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
            {copy.features.heading}
          </h2>
          <div className="features-grid">
            <ul className="feature-list">
              {copy.features.included.map((item, i) => (
                <li key={i}>
                  <Check />
                  <span>
                    <Inline text={item} />
                  </span>
                </li>
              ))}
            </ul>
            <div className="not-included">
              <h3>{copy.features.notIncludedHeading}</h3>
              <ul>
                {copy.features.notIncluded.map((item) => (
                  <li key={item}>
                    <Minus />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                <Inline text={copy.features.note} />
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- proof ---------------- */}
        <section className="proof site-container" aria-labelledby="proof-title">
          <h2 className="proof-statement" id="proof-title">
            <Inline text={copy.proof.statement} />
          </h2>
          <div className="proof-notes">
            {copy.proof.notes.map((note, i) => (
              <span key={i}>
                <Inline text={note} />
              </span>
            ))}
          </div>
        </section>

        {/* ---------------- storybook cta ---------------- */}
        <section className="sb-cta site-container" aria-labelledby="sb-title">
          <div className="sb-panel">
            <div>
              <h2 id="sb-title">{copy.storybook.heading}</h2>
              <p>
                <Inline text={copy.storybook.body} />
              </p>
            </div>
            <div className="sb-actions">
              <a className="btn btn-primary" href={STORYBOOK}>
                {copy.storybook.primaryCta}
              </a>
              <a href={API_DOCS}>{copy.storybook.secondaryCta}</a>
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
              <h2 id="author-title">{copy.author.heading}</h2>
              <p>
                <Inline text={copy.author.body} />
              </p>
              <div className="author-links">
                <a href={AUTHOR_SITE}>{copy.author.siteLink}</a>
                <a href={AUTHOR_GITHUB}>{copy.author.githubLink}</a>
                <a href={AUTHOR_LINKEDIN}>{copy.author.linkedinLink}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFor(copy)) }}
      />
    </>
  );
}
