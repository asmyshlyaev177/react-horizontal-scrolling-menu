// Vietnamese (vi) — translation of en/chrome.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=vi source=en/chrome.ts source-blob=e86bc9540d77af5985f5d8e97914a12de59d182a status=translated
import type { ChromeCopy } from '../types.ts';

export const chrome: ChromeCopy = {
  meta: {
    // ≤60 chars, package name first — the SERP truncates around 60.
    title: 'react-horizontal-scrolling-menu — menu ngang cho React',
    // ~155 chars — the SERP snippet cuts around 160.
    description:
      'Menu cuộn ngang cho React trên cuộn gốc của trình duyệt, với theo dõi khả năng hiển thị theo từng mục. 5.7 kB gzip, TypeScript-first, 347k lượt tải/tháng.',
  },
  siteName: 'react-horizontal-scrolling-menu',
  ogImageAlt:
    'Một hàng thẻ danh mục với các thẻ ngoài màn hình bị làm mờ, phía trên là chỉ số getVisible() trực tiếp.',
  skipToContent: 'Chuyển đến nội dung',
  brand: {
    name: 'react-horizontal-scrolling-menu',
    ariaLabel: 'react-horizontal-scrolling-menu — trang chủ',
  },
  nav: {
    ariaLabel: 'Trang web',
    examples: 'Ví dụ',
    compare: 'So sánh',
    npm: 'npm',
    github: 'GitHub',
    themeToggle: 'Chuyển đổi chủ đề màu',
    languageLabel: 'Ngôn ngữ',
  },
  footer: {
    examples: 'Ví dụ',
    compare: 'So sánh',
    github: 'GitHub',
    npm: 'npm',
    storybook: 'Storybook',
    changelog: 'Nhật ký thay đổi',
    issues: 'Issues',
    llmsTxt: 'llms.txt',
    license: 'MIT © Aleksandr Smyshliaev',
  },
  links: {
    markdownAlternate: 'Trang này dưới dạng Markdown',
    llmsTxt: 'Tham chiếu thân thiện với LLM (llms.txt)',
  },
};
