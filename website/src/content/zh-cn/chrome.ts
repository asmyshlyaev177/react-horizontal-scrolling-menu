// Chinese (Simplified) (zh-CN) — translation of en/chrome.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=zh-CN source=en/chrome.ts source-blob=e86bc9540d77af5985f5d8e97914a12de59d182a status=translated
import type { ChromeCopy } from '../types.ts';

export const chrome: ChromeCopy = {
  meta: {
    // ≤60 chars, package name first — the SERP truncates around 60.
    title: 'react-horizontal-scrolling-menu — React 横向菜单',
    // ~155 chars — the SERP snippet cuts around 160.
    description:
      '基于浏览器原生滚动的 React 横向滚动菜单，带逐项可见性追踪。gzip 后 5.7 kB，TypeScript 优先，每月 34.7 万次下载。',
  },
  siteName: 'react-horizontal-scrolling-menu',
  ogImageAlt:
    '一行分类卡片，屏幕之外的卡片被淡化，上方是即时的 getVisible() 读数。',
  skipToContent: '跳到内容',
  brand: {
    name: 'react-horizontal-scrolling-menu',
    ariaLabel: 'react-horizontal-scrolling-menu — 首页',
  },
  nav: {
    ariaLabel: '站点',
    examples: '示例',
    compare: '对比',
    npm: 'npm',
    github: 'GitHub',
    themeToggle: '切换颜色主题',
    languageLabel: '语言',
  },
  footer: {
    examples: '示例',
    compare: '对比',
    github: 'GitHub',
    npm: 'npm',
    storybook: 'Storybook',
    changelog: '变更日志',
    issues: '问题',
    llmsTxt: 'llms.txt',
    license: 'MIT © Aleksandr Smyshliaev',
  },
  links: {
    markdownAlternate: '本页面的 Markdown 版本',
    llmsTxt: '适合 LLM 的参考（llms.txt）',
  },
};
