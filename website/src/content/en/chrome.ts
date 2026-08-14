import type { ChromeCopy } from '../types.ts';

export const chrome: ChromeCopy = {
  meta: {
    // ≤60 chars, package name first — the SERP truncates around 60.
    title: 'react-horizontal-scrolling-menu — horizontal menu for React',
    // ~155 chars — the SERP snippet cuts around 160.
    description:
      'Horizontal scrolling menu for React on native browser scrolling, with per-item visibility tracking. 5.7 kB gzipped, TypeScript-first, 347k downloads/month.',
  },
  siteName: 'react-horizontal-scrolling-menu',
  ogImageAlt:
    'A row of category cards with the off-screen ones dimmed, above a live getVisible() readout.',
  skipToContent: 'Skip to content',
  brand: {
    name: 'react-horizontal-scrolling-menu',
    ariaLabel: 'react-horizontal-scrolling-menu — home',
  },
  nav: {
    ariaLabel: 'Site',
    examples: 'Examples',
    compare: 'Compare',
    npm: 'npm',
    github: 'GitHub',
    themeToggle: 'Toggle color theme',
    languageLabel: 'Language',
  },
  footer: {
    examples: 'Examples',
    compare: 'Compare',
    github: 'GitHub',
    npm: 'npm',
    storybook: 'Storybook',
    changelog: 'Changelog',
    issues: 'Issues',
    llmsTxt: 'llms.txt',
    license: 'MIT © Aleksandr Smyshliaev',
  },
  links: {
    markdownAlternate: 'This page as Markdown',
    llmsTxt: 'LLM-friendly reference (llms.txt)',
  },
};
