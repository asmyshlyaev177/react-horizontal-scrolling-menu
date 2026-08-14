// Korean (ko) — translation of en/examples-hub.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=ko source=en/examples-hub.ts source-blob=8127bcad7814c2b0afd352822f229d8a3c1783ff status=translated
import type { ExamplePageCopy, ExamplesHubCopy } from '../types.ts';

/** /examples 목록 페이지. */
export const examplesHub: ExamplesHubCopy = {
  meta: {
    title: 'React 가로 스크롤 메뉴 예제 — 라이브, 코드 포함',
    description:
      'react-horizontal-scrolling-menu 예제: 화살표, 드래그 스크롤, 스크롤 가능한 탭, RTL, 세로, 무한 루프, 자동 재생 — 각각 복사-붙여넣기 가능한 소스 포함.',
  },
  title: '예제: 모든 패턴을 라이브로, 전체 소스와 함께',
  lede: '각 예제는 배포된 npm 패키지의 동작하는 데모와 그 뒤에 있는 완전한 파일입니다. 복사-붙여넣기 가능하고, Storybook에서 라이브 편집할 수 있습니다. 이 사이트의 다른 모든 것과 마찬가지로 서버 렌더링됩니다.',
  storybookCta: '플레이그라운드가 더 좋으신가요? Storybook 열기',
};

/** 스물한 개 예제 페이지가 모두 공유하는 가구. */
export const examplePage: ExamplePageCopy = {
  breadcrumbLabel: '브레드크럼',
  breadcrumbExamples: '예제',
  storybookCta: '이 예제를 Storybook에서 라이브 편집',
  fullSource: '전체 소스',
  fullSourceLede:
    '완전하고 복사-붙여넣기 가능 — 이것이 바로 그 파일입니다. 출처는, 이',
  fullSourceLedeLink: '라이브 편집 가능한 Storybook 버전',
  copyFullSource: '전체 소스 복사',
  relatedExamples: '관련 예제',
  allExamples: '예제 전체 {count}개',
};
