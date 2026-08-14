// Spanish (es) — translation of en/chrome.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=es source=en/chrome.ts source-blob=e86bc9540d77af5985f5d8e97914a12de59d182a status=translated
import type { ChromeCopy } from '../types.ts';

export const chrome: ChromeCopy = {
  meta: {
    // ≤60 chars, package name first — the SERP truncates around 60.
    title: 'react-horizontal-scrolling-menu — menú horizontal para React',
    // ~155 chars — the SERP snippet cuts around 160.
    description:
      'Menú de desplazamiento horizontal para React sobre el desplazamiento nativo del navegador, con seguimiento de visibilidad por elemento. 5,7 kB en gzip, TypeScript-first, 347k descargas/mes.',
  },
  siteName: 'react-horizontal-scrolling-menu',
  ogImageAlt:
    'Una fila de tarjetas de categoría con las fuera de pantalla atenuadas, sobre una lectura en vivo de getVisible().',
  skipToContent: 'Saltar al contenido',
  brand: {
    name: 'react-horizontal-scrolling-menu',
    ariaLabel: 'react-horizontal-scrolling-menu — inicio',
  },
  nav: {
    ariaLabel: 'Sitio',
    examples: 'Ejemplos',
    compare: 'Comparativa',
    npm: 'npm',
    github: 'GitHub',
    themeToggle: 'Alternar tema de color',
    languageLabel: 'Idioma',
  },
  footer: {
    examples: 'Ejemplos',
    compare: 'Comparativa',
    github: 'GitHub',
    npm: 'npm',
    storybook: 'Storybook',
    changelog: 'Registro de cambios',
    issues: 'Issues',
    llmsTxt: 'llms.txt',
    license: 'MIT © Aleksandr Smyshliaev',
  },
  links: {
    markdownAlternate: 'Esta página en Markdown',
    llmsTxt: 'Referencia amigable para LLM (llms.txt)',
  },
};
