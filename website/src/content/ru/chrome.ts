// Russian (ru) — translation of en/chrome.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=ru source=en/chrome.ts source-blob=e86bc9540d77af5985f5d8e97914a12de59d182a status=translated
import type { ChromeCopy } from '../types.ts';

export const chrome: ChromeCopy = {
  meta: {
    // ≤60 chars, package name first — the SERP truncates around 60.
    title: 'react-horizontal-scrolling-menu — горизонтальное меню для React',
    // ~155 chars — the SERP snippet cuts around 160.
    description:
      'Горизонтальное меню прокрутки для React на нативной прокрутке браузера, с отслеживанием видимости каждого элемента. 5,7 КБ в gzip, TypeScript-first, 347 тыс. загрузок в месяц.',
  },
  siteName: 'react-horizontal-scrolling-menu',
  ogImageAlt:
    'Ряд карточек категорий, невидимые приглушены, над ним живой индикатор getVisible().',
  skipToContent: 'Перейти к содержимому',
  brand: {
    name: 'react-horizontal-scrolling-menu',
    ariaLabel: 'react-horizontal-scrolling-menu — главная',
  },
  nav: {
    ariaLabel: 'Сайт',
    examples: 'Примеры',
    compare: 'Сравнение',
    npm: 'npm',
    github: 'GitHub',
    themeToggle: 'Переключить цветовую тему',
    languageLabel: 'Язык',
  },
  footer: {
    examples: 'Примеры',
    compare: 'Сравнение',
    github: 'GitHub',
    npm: 'npm',
    storybook: 'Storybook',
    changelog: 'Журнал изменений',
    issues: 'Issues',
    llmsTxt: 'llms.txt',
    license: 'MIT © Aleksandr Smyshliaev',
  },
  links: {
    markdownAlternate: 'Эта страница в Markdown',
    llmsTxt: 'Справочник для LLM (llms.txt)',
  },
};
