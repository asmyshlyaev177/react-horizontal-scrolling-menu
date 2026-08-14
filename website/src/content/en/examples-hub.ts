import type { ExamplePageCopy, ExamplesHubCopy } from '../types.ts';

/** The /examples listing page. */
export const examplesHub: ExamplesHubCopy = {
  meta: {
    title: 'React horizontal scroll menu examples — live, with code',
    description:
      'Examples of react-horizontal-scrolling-menu: arrows, drag to scroll, scrollable tabs, RTL, vertical, infinite loop, autoplay — each with copy-paste source.',
  },
  title: 'Examples: every pattern, live, with the full source',
  lede: 'Each example is a working demo of the published npm package plus the complete file behind it — copy-paste ready, and editable live in Storybook. Server-rendered like everything else on this site.',
  storybookCta: 'Prefer a playground? Open the Storybook',
};

/** The furniture shared by all twenty-one example pages. */
export const examplePage: ExamplePageCopy = {
  breadcrumbLabel: 'Breadcrumb',
  breadcrumbExamples: 'Examples',
  storybookCta: 'Edit this example live in Storybook',
  fullSource: 'Full source',
  fullSourceLede:
    'Complete and copy-paste ready — this is the exact file behind the',
  fullSourceLedeLink: 'live-editable Storybook version',
  copyFullSource: 'Copy full source',
  relatedExamples: 'Related examples',
  allExamples: 'All {count} examples',
};
