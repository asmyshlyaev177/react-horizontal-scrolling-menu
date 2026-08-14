// Korean (ko) — translation of en/chrome.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=ko source=en/chrome.ts source-blob=e86bc9540d77af5985f5d8e97914a12de59d182a status=translated
import type { ChromeCopy } from '../types.ts';

export const chrome: ChromeCopy = {
  meta: {
    // ≤60 chars, package name first — the SERP truncates around 60.
    title: 'react-horizontal-scrolling-menu — React 가로 메뉴',
    // ~155 chars — the SERP snippet cuts around 160.
    description:
      '브라우저 네이티브 스크롤 위에 구축된 React 가로 스크롤 메뉴, 항목별 가시성 추적 포함. gzip 5.7 kB, TypeScript 우선, 월 34.7만 다운로드.',
  },
  siteName: 'react-horizontal-scrolling-menu',
  ogImageAlt:
    '화면 밖 카드가 흐릿해진 카테고리 카드 행. 그 위에 라이브 getVisible() 판독값.',
  skipToContent: '콘텐츠로 건너뛰기',
  brand: {
    name: 'react-horizontal-scrolling-menu',
    ariaLabel: 'react-horizontal-scrolling-menu — 홈',
  },
  nav: {
    ariaLabel: '사이트',
    examples: '예제',
    compare: '비교',
    npm: 'npm',
    github: 'GitHub',
    themeToggle: '색상 테마 전환',
    languageLabel: '언어',
  },
  footer: {
    examples: '예제',
    compare: '비교',
    github: 'GitHub',
    npm: 'npm',
    storybook: 'Storybook',
    changelog: '변경 로그',
    issues: '이슈',
    llmsTxt: 'llms.txt',
    license: 'MIT © Aleksandr Smyshliaev',
  },
  links: {
    markdownAlternate: '이 페이지를 Markdown으로',
    llmsTxt: 'LLM 친화적 참조 (llms.txt)',
  },
};
