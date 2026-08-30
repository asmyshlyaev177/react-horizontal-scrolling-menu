// Shape of the site's copy. Every user-facing English string lives in a
// content module under `content/<lang>/`; the components read from it and
// never spell a sentence themselves. English is the source language, so
// `content/en` is the reference implementation of `SiteCopy`.
//
// Rich prose is authored as Markdown strings, not JSX — see `lib/prose.tsx`
// for the supported subset (paragraphs, unordered lists, inline code, links,
// strong, emphasis). The library's own API names (`ScrollMenu`,
// `useIsVisible`, `scrollToItem`, …) stay inside backticks and are never
// reworded in a translation.

/** One `<h2>` plus the Markdown body that follows it, in document order. */
export interface ProseSection {
  heading: string;
  body: string;
}

/** The two head() strings a route owns. */
export interface PageMeta {
  title: string;
  description: string;
}

/** Header, footer and the site-wide document metadata. */
export interface ChromeCopy {
  /** Root-level defaults — a route without its own `meta` inherits these. */
  meta: PageMeta;
  /** og:site_name. The package name; not translated. */
  siteName: string;
  /** Alt text for the shared Open Graph card. */
  ogImageAlt: string;
  skipToContent: string;
  brand: {
    name: string;
    ariaLabel: string;
  };
  nav: {
    ariaLabel: string;
    examples: string;
    compare: string;
    npm: string;
    github: string;
    themeToggle: string;
    /** `aria-label` of the language switcher. */
    languageLabel: string;
  };
  footer: {
    examples: string;
    compare: string;
    github: string;
    npm: string;
    storybook: string;
    changelog: string;
    issues: string;
    llmsTxt: string;
    license: string;
  };
  /** Titles on the `rel="alternate"` links every page declares. */
  links: {
    markdownAlternate: string;
    llmsTxt: string;
  };
}

/** One live pattern in the homepage gallery. */
export interface GalleryItem {
  title: string;
  body: string;
  link: string;
}

/** One of the four claims in the "why this, not a carousel" grid. */
export interface Pillar {
  title: string;
  body: string;
}

/** One published SKILL.md and the line that says when to load it. */
export interface SkillListing {
  /** File name of the skill — an identifier, not copy. */
  id: string;
  when: string;
}

export interface HomeCopy {
  /** `description` on the SoftwareSourceCode JSON-LD. */
  jsonLdDescription: string;
  hero: {
    titleLead: string;
    /** The scarlet key phrase closing the H1. */
    titleHighlight: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    storybookCta: string;
  };
  install: {
    ariaLabel: string;
    copyLabel: string;
    /** Lead-in for the shadcn registry command, rendered by Inline. */
    shadcnNote: string;
    shadcnCopyLabel: string;
    facts: readonly string[];
  };
  autoplay: {
    heading: string;
    lede: string;
    recipeLink: string;
    storybookLink: string;
  };
  positioning: {
    heading: string;
    scope: readonly string[];
    pillars: readonly Pillar[];
  };
  quickStart: {
    heading: string;
    lede: string;
    notes: readonly string[];
    link: string;
  };
  aiSkills: {
    heading: string;
    body: string;
    copyLabel: string;
    note: string;
    skills: readonly SkillListing[];
    skillsLink: string;
    llmsLink: string;
  };
  gallery: {
    heading: string;
    lede: string;
    tabs: GalleryItem;
    chips: GalleryItem;
    infinite: GalleryItem;
    rtl: GalleryItem;
  };
  features: {
    heading: string;
    included: readonly string[];
    notIncludedHeading: string;
    notIncluded: readonly string[];
    note: string;
  };
  proof: {
    statement: string;
    notes: readonly string[];
  };
  storybook: {
    heading: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  author: {
    heading: string;
    body: string;
    siteLink: string;
    githubLink: string;
    linkedinLink: string;
  };
}

export interface CompareCopy {
  meta: PageMeta;
  /** `headline` on the TechArticle JSON-LD. */
  jsonLdHeadline: string;
  title: string;
  lede: string;
  table: {
    /** Six column headers; the first one is intentionally empty. */
    headers: readonly string[];
    /** Row label first, then one cell per library, in header order. */
    rows: readonly (readonly string[])[];
    note: string;
  };
  prose: readonly ProseSection[];
  links: {
    examples: string;
    storybook: string;
    github: string;
  };
}

/**
 * One use-case page: an outcome-named landing (`/netflix-row`, …) that wraps
 * existing demos and examples under the phrasing people search by.
 */
export interface UseCaseCopy {
  meta: PageMeta;
  /** `headline` on the TechArticle JSON-LD. */
  jsonLdHeadline: string;
  /** Card name and one-liner on the /examples hub. */
  name: string;
  blurb: string;
  title: string;
  lede: string;
  /** One line under the demo (what to try). */
  demoHint: string;
  prose: readonly ProseSection[];
  /** Heading + lede above the inline code listing. */
  snippet: {
    heading: string;
    lede: string;
  };
  /** The shadcn-registry install section. */
  shadcn: {
    heading: string;
    body: string;
  };
}

export interface UseCasesCopy {
  /** The "Use cases" section on the /examples hub. */
  hub: {
    heading: string;
    lede: string;
  };
  netflixRow: UseCaseCopy;
  scrollableTabs: UseCaseCopy;
  filterChips: UseCaseCopy;
  categoryRail: UseCaseCopy;
}

/** One neutral comparison page (`/compare/embla-vs-swiper`, …). */
export interface ComparePairCopy {
  meta: PageMeta;
  /** `headline` on the TechArticle JSON-LD. */
  jsonLdHeadline: string;
  /** Hub-card name and one-liner on /compare. */
  name: string;
  blurb: string;
  title: string;
  lede: string;
  table: {
    headers: readonly string[];
    /** Row label first, then one cell per column, in header order. */
    rows: readonly (readonly string[])[];
    note: string;
  };
  prose: readonly ProseSection[];
}

export interface ComparePairsCopy {
  /** The "more comparisons" section on the /compare hub. */
  hub: {
    heading: string;
    lede: string;
  };
  emblaVsSwiper: ComparePairCopy;
  reactSlickAlternatives: ComparePairCopy;
  swiperAlternatives: ComparePairCopy;
}

/** Hub-card name and one-liner for one example. */
export interface ExampleListing {
  name: string;
  blurb: string;
}

export interface ManifestCopy {
  /** Group id (as used in `examples-manifest.ts`) → visible label. */
  groups: Record<string, string>;
  /** Example slug → its card copy. */
  examples: Record<string, ExampleListing>;
}

/** The /examples hub — the page that lists every example. */
export interface ExamplesHubCopy {
  meta: PageMeta;
  title: string;
  lede: string;
  /** Link to Storybook at the foot of the list. */
  storybookCta: string;
}

/**
 * The furniture every example page renders around its own content: the
 * breadcrumb, the source section, the related-examples heading.
 *
 * Separate from `ExampleCopy` because it is the same twenty-one times over —
 * one place to translate rather than twenty-one identical strings.
 */
export interface ExamplePageCopy {
  breadcrumbLabel: string;
  breadcrumbExamples: string;
  storybookCta: string;
  fullSource: string;
  fullSourceLede: string;
  /** Link text inside `fullSourceLede`, which wraps it in an <a>. */
  fullSourceLedeLink: string;
  copyFullSource: string;
  relatedExamples: string;
  /** Link back to the hub at the foot of the page. `{count}` is substituted. */
  allExamples: string;
}

export interface ExampleCopy {
  meta: PageMeta;
  /** Task-phrased h1. */
  title: string;
  lede: string;
  /** One line under the demo (what to try). */
  demoHint?: string;
  prose: ProseSection[];
}

/** Keyed by example slug — the same slugs as `examples-manifest.ts`. */
export type ExamplesCopy = Record<string, ExampleCopy>;

export interface SiteCopy {
  examplesHub: ExamplesHubCopy;
  examplePage: ExamplePageCopy;
  chrome: ChromeCopy;
  home: HomeCopy;
  compare: CompareCopy;
  comparePairs: ComparePairsCopy;
  useCases: UseCasesCopy;
  manifest: ManifestCopy;
  examples: ExamplesCopy;
}
