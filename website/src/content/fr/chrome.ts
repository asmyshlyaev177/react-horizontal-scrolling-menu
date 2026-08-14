// French (fr) — translation of en/chrome.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=fr source=en/chrome.ts source-blob=e86bc9540d77af5985f5d8e97914a12de59d182a status=translated
import type { ChromeCopy } from '../types.ts';

export const chrome: ChromeCopy = {
  meta: {
    // ≤60 chars, package name first — the SERP truncates around 60.
    title: 'react-horizontal-scrolling-menu — menu horizontal pour React',
    // ~155 chars — the SERP snippet cuts around 160.
    description:
      'Menu à défilement horizontal pour React sur le défilement natif du navigateur, avec suivi de visibilité par élément. 5,7 kB gzip, TypeScript-first, 347k téléchargements/mois.',
  },
  siteName: 'react-horizontal-scrolling-menu',
  ogImageAlt:
    'Une rangée de cartes de catégories, celles hors écran estompées, au-dessus d’une lecture en direct de getVisible().',
  skipToContent: 'Aller au contenu',
  brand: {
    name: 'react-horizontal-scrolling-menu',
    ariaLabel: 'react-horizontal-scrolling-menu — accueil',
  },
  nav: {
    ariaLabel: 'Site',
    examples: 'Exemples',
    compare: 'Comparer',
    npm: 'npm',
    github: 'GitHub',
    themeToggle: 'Basculer le thème de couleur',
    languageLabel: 'Langue',
  },
  footer: {
    examples: 'Exemples',
    compare: 'Comparer',
    github: 'GitHub',
    npm: 'npm',
    storybook: 'Storybook',
    changelog: 'Journal des modifications',
    issues: 'Issues',
    llmsTxt: 'llms.txt',
    license: 'MIT © Aleksandr Smyshliaev',
  },
  links: {
    markdownAlternate: 'Cette page en Markdown',
    llmsTxt: 'Référence conviviale pour les LLM (llms.txt)',
  },
};
