// Portuguese (Brazil) (pt-BR) — translation of en/chrome.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=pt-BR source=en/chrome.ts source-blob=e86bc9540d77af5985f5d8e97914a12de59d182a status=translated
import type { ChromeCopy } from '../types.ts';

export const chrome: ChromeCopy = {
  meta: {
    // ≤60 chars, package name first — the SERP truncates around 60.
    title: 'react-horizontal-scrolling-menu — menu horizontal para React',
    // ~155 chars — the SERP snippet cuts around 160.
    description:
      'Menu de rolagem horizontal para React sobre a rolagem nativa do navegador, com rastreamento de visibilidade por item. 5,7 kB gzip, TypeScript-first, 347k downloads/mês.',
  },
  siteName: 'react-horizontal-scrolling-menu',
  ogImageAlt:
    'Uma linha de cartões de categoria com os fora da tela esmaecidos, acima de uma leitura ao vivo de getVisible().',
  skipToContent: 'Pular para o conteúdo',
  brand: {
    name: 'react-horizontal-scrolling-menu',
    ariaLabel: 'react-horizontal-scrolling-menu — início',
  },
  nav: {
    ariaLabel: 'Site',
    examples: 'Exemplos',
    compare: 'Comparar',
    npm: 'npm',
    github: 'GitHub',
    themeToggle: 'Alternar tema de cor',
    languageLabel: 'Idioma',
  },
  footer: {
    examples: 'Exemplos',
    compare: 'Comparar',
    github: 'GitHub',
    npm: 'npm',
    storybook: 'Storybook',
    changelog: 'Registro de alterações',
    issues: 'Issues',
    llmsTxt: 'llms.txt',
    license: 'MIT © Aleksandr Smyshliaev',
  },
  links: {
    markdownAlternate: 'Esta página em Markdown',
    llmsTxt: 'Referência amigável para LLM (llms.txt)',
  },
};
