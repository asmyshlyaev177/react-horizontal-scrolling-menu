// Japanese (ja) — translation of en/chrome.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=ja source=en/chrome.ts source-blob=e86bc9540d77af5985f5d8e97914a12de59d182a status=translated
import type { ChromeCopy } from '../types.ts';

export const chrome: ChromeCopy = {
  meta: {
    // ≤60 chars, package name first — the SERP truncates around 60.
    title: 'react-horizontal-scrolling-menu — React 用横メニュー',
    // ~155 chars — the SERP snippet cuts around 160.
    description:
      'ブラウザネイティブのスクロール上に構築された React 用横スクロールメニュー。項目ごとの可視性追跡付き。gzip 5.7 kB、TypeScript ファースト、月間 34.7 万ダウンロード。',
  },
  siteName: 'react-horizontal-scrolling-menu',
  ogImageAlt:
    '画面外のカードが薄暗くなったカテゴリーカードの行。その上にライブの getVisible() 表示。',
  skipToContent: 'コンテンツへスキップ',
  brand: {
    name: 'react-horizontal-scrolling-menu',
    ariaLabel: 'react-horizontal-scrolling-menu — ホーム',
  },
  nav: {
    ariaLabel: 'サイト',
    examples: '例',
    compare: '比較',
    npm: 'npm',
    github: 'GitHub',
    themeToggle: 'カラーテーマを切り替え',
    languageLabel: '言語',
  },
  footer: {
    examples: '例',
    compare: '比較',
    github: 'GitHub',
    npm: 'npm',
    storybook: 'Storybook',
    changelog: '変更履歴',
    issues: 'Issues',
    llmsTxt: 'llms.txt',
    license: 'MIT © Aleksandr Smyshliaev',
  },
  links: {
    markdownAlternate: 'このページを Markdown で見る',
    llmsTxt: 'LLM 向けリファレンス（llms.txt）',
  },
};
