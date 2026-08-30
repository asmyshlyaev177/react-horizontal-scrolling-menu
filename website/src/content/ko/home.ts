// Korean (ko) — translation of en/home.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=ko source=en/home.ts source-blob=1da4a2b83ec7a4e233dae7ab5c335622de7edad4 status=translated
import { INTENT, REACT_STATUS, STORIES } from '../../lib/links.ts';
import type { HomeCopy } from '../types.ts';

// Deep-links the import, not the repo root: the claim is that they render
// this component in production, and the line proves it. Commit-pinned so a
// refactor on their side can't turn it into a 404.
const OWID =
  'https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/gdocs/components/KeyInsights.tsx#L3';

export const home: HomeCopy = {
  jsonLdDescription:
    '항목별 가시성 추적을 갖춘, 브라우저 네이티브 스크롤 위에 구축된 React 가로 스크롤 메뉴 컴포넌트.',

  hero: {
    titleLead: '이 가로 메뉴는,',
    titleHighlight: '무엇이 보이는지 압니다',
    sub: '브라우저 자체 스크롤 위에 구축된 React 스크롤 메뉴 — 항목별 가시성 추적, 화살표, 드래그, 그리고 완전한 명령형 API. gzip `5.7 kB`.',
    primaryCta: '시작하기',
    secondaryCta: '예제 둘러보기',
    storybookCta: 'Storybook 열기',
  },

  install: {
    ariaLabel: '설치',
    copyLabel: '설치 명령 복사',
    shadcnNote:
      '또는 [shadcn/ui](https://ui.shadcn.com) 스타일 적용 컴포넌트 — 화살표, 드래그 스크롤 포함',
    shadcnCopyLabel: 'shadcn 명령 복사',
    facts: [
      '**347k** 다운로드/월',
      '**5.7 kB** min+gzip',
      'React **16.8 – 19**',
      '**MIT**',
    ],
  },

  autoplay: {
    heading: '캐러셀 엔진 없이 자동 재생',
    lede: '`autoplay` 프로퍼티는 없습니다. 이 레일은 공개 API 위의 레시피입니다. 행을 양 끝으로 복제하고, 이음새에서 `scrollLeft`를 한 번 점프시키고, `scrollNext()`를 호출하는 타이머를 돌립니다. 호버, 포커스, 숨은 탭에서 일시정지하고, 동작 줄이기 설정에서는 가만히 있으며 — 이음새를 넘어 거꾸로라도 드래그할 수 있습니다.',
    recipeLink: '전체 레시피 읽기',
    storybookLink: 'Storybook에서 라이브 편집',
  },

  positioning: {
    heading: '캐러셀이 아니라 *메뉴*',
    scope: [
      'Embla, Swiper, keen-slider는 이미지 슬라이더를 만들기 위해 JavaScript로 스크롤을 다시 구현합니다 — 스냅 포인트, 스프링 물리, 렌더 루프. 이 라이브러리는 그중 어느 것도 제공하지 않습니다. 브라우저 네이티브 스크롤을 타고, 브라우저가 주지 않는 한 가지 — 어떤 항목이 화면에 있는지 정확히 아는 것을 더합니다.',
      '전체 화면 이미지 슬라이더에는 **잘못된 도구** — 거기서는 Embla나 Swiper를 쓰세요. 카테고리 행, 탭 스트립, 칩 필터, 그리고 앱이 파악해야 하는 모든 행에는 **올바른 도구**.',
    ],
    pillars: [
      {
        title: '네이티브 스크롤',
        body: '관성, 스크롤바, 터치, 휠, 접근성은 물리 엔진이 아니라 브라우저에서 나옵니다. JavaScript가 하이드레이트되기 전에 이 행은 스크롤됩니다 — 이 페이지의 모든 데모는 서버 렌더링됩니다.',
      },
      {
        title: '가시성 추적',
        body: 'IntersectionObserver가 어떤 항목이 화면에 있는지 보고합니다. `useIsVisible(itemId)`는 컴포넌트 하나를 항목 하나에 구독시킵니다 — 스크롤 위치 계산도 없고, 영향받은 항목만 다시 렌더링됩니다.',
      },
      {
        title: '필요할 때 명령형',
        body: '`scrollToItem`, `scrollNext`, `scrollPrev`, id나 인덱스로 조회 — 메뉴 내부의 컨텍스트를 통해서, 또는 외부에서 `apiRef`로.',
      },
      {
        title: '여러분의 컴포넌트, 여러분의 CSS',
        body: '화살표, 헤더, 푸터, 그리고 모든 항목은 여러분이 작성하는 컴포넌트입니다. 항목 너비는 여러분의 CSS. 라이브러리는 210바이트의 레이아웃 스타일만 제공하고 비켜 서 있습니다.',
      },
    ],
  },

  quickStart: {
    heading: '빠른 시작',
    lede: '파일 하나, 설정 없음: `itemId`가 있는 항목, `VisibilityContext`를 읽는 두 개의 화살표, 그리고 스타일시트 임포트.',
    notes: [
      '`itemId`는 모든 항목에 필수입니다 — 추적이 이렇게 동작합니다. React의 `key`는 폴백으로 동작합니다.',
      '`styles.css`는 별도 임포트입니다. JS 번들이 CSS를 주입하는 일은 없습니다.',
      '항목 너비는 여러분의 CSS에서 나옵니다 — 메뉴가 측정하는 것은 없습니다.',
    ],
    link: '전체 시작하기 예제 읽기',
  },

  aiSkills: {
    heading: '또는 코딩 에이전트에게 맡기세요',
    body: `구버전으로 학습한 모델은 \`visibleElements\`, \`Separator\` 항목, \`Arrows\` 프로퍼티 — 모두 수년 전에 제거됨 — 에 여전히 손을 뻗고, 존재한 적 없는 \`autoplay\` 프로퍼티를 만들어 냅니다. 이 패키지는 이를 막기 위한 8개의 \`SKILL.md\` 파일을 제공합니다. 에이전트가 [TanStack Intent](${INTENT})를 통해 온디맨드로 로드하는 작업 범위 가이드로, 이 페이지가 아니라 라이브러리와 함께 버전이 관리됩니다.`,
    copyLabel: 'Intent 명령 복사',
    note: '패키지가 이미 설치된 프로젝트에서 한 번 실행하세요. 이후 에이전트는 `node_modules/react-horizontal-scrolling-menu/skills/`에서 스킬을 발견합니다.',
    // The SKILL.md files published inside the package, and the one line each
    // that tells an agent — or a reader deciding whether this is worth a
    // command — when it is the one to load. Kept in the same order as
    // public/llms.txt, which is the machine-readable version of this table.
    skills: [
      {
        id: 'menu-setup',
        when: '처음 동작하는 메뉴, 화살표, 필수 CSS 임포트',
      },
      {
        id: 'menu-visibility',
        when: '화면에 무엇이 있는지, 그리고 양 끝의 화살표 상태',
      },
      {
        id: 'menu-scrolling',
        when: 'scrollToItem, apiRef, 한 번에 한 페이지씩 페이징',
      },
      {
        id: 'menu-interactions',
        when: '드래그, 휠, 터치 — 그리고 해당 핸들러 팩토리',
      },
      {
        id: 'menu-recipes',
        when: '자동 재생, 무한 루프, 더 불러오기: 프로퍼티가 아니라 레시피',
      },
      {
        id: 'menu-transitions-rtl',
        when: '애니메이션 타이밍, 커스텀 이징, 오른쪽에서 왼쪽',
      },
      {
        id: 'menu-testing-ssr',
        when: 'Next.js와 RSC, Jest 목, Playwright',
      },
      {
        id: 'menu-migration',
        when: 'v8 이전 코드 업그레이드, 그리고 모델이 여전히 만들어 내는 API',
      },
    ],
    skillsLink: 'GitHub에서 스킬 읽기',
    llmsLink: 'llms.txt — 같은 사실을 압축',
  },

  gallery: {
    heading: '실제로 배포할 레시피',
    lede: '네 가지 일반 패턴을, 핵심 줄과 함께 라이브로.',
    tabs: {
      title: '활성 탭을 가운데 정렬하는 탭 스트립',
      body: "탭을 클릭: `scrollToItem`에 `inline: 'center'`를 넘기면 행의 중앙으로 가져옵니다. 같은 호출로 `start`, `end`, 페이징도 처리합니다.",
      link: '전체 예제 보기',
    },
    chips: {
      title: '칩 추가하고 스크롤',
      body: '상태는 메뉴 밖에 두고 `apiRef`가 내부에 접근합니다. 필터를 추가하면 행이 그것을 따릅니다.',
      link: '전체 예제 보기',
    },
    infinite: {
      title: '끝이 보이면 더 불러오기',
      body: '`onUpdate`가 마지막 항목이 보이게 되면 알려줍니다 — 바로 거기서 다음 페이지를 추가하세요. 스크롤 리스너도, 조정할 픽셀 임계값도 없습니다.',
      link: '전체 예제 보기',
    },
    rtl: {
      title: '오른쪽에서 왼쪽, 프로퍼티 하나',
      body: '`RTL`이 스크롤 컨테이너의 방향을 뒤집고, 화살표와 페이징 로직이 따릅니다.',
      link: '전체 예제 보기',
    },
  },

  features: {
    heading: '상자 안에 있는 것',
    included: [
      '항목별 가시성 훅 — `useIsVisible(itemId)`',
      '화살표 상태를 위한 `first` / `last` 헬퍼',
      '`scrollToItem` · `scrollNext` · `scrollPrev`',
      '메뉴 외부에서 제어하는 `apiRef`',
      '드래그, 휠, 터치, 스크롤바 입력',
      '동적 추가/제거 감지',
      'Header와 Footer 슬롯',
      '`slidingWindow` + `getItemsPos` 페이징 헬퍼',
      '오른쪽에서 왼쪽 지원',
      '커스텀 전환 함수',
      'SSR 안전 — 이 페이지가 증명',
      'TypeScript 우선 — `publicApiType` 내보냄',
      'React 16.8 – 19에서 하나의 안정적인 API',
    ],
    notIncludedHeading: '상자 안에 없는 것',
    notIncluded: [
      '스냅과 스프링 물리',
      '전체 화면 이미지 슬라이더',
      '라이트박스',
    ],
    note: `그것은 이미지 슬라이더의 영역입니다 — Embla와 Swiper가 잘 합니다. [무한 루프](${STORIES.infiniteLoop})와 [자동 재생](${STORIES.autoplay})도 프로퍼티가 아닙니다 — 레시피입니다. 각각 공개 API의 약 60줄이며, Storybook에서 라이브 편집할 수 있습니다. 이 페이지 위쪽의 레일은 바로 그 레시피가 돌고 있는 것입니다. 이것은 메뉴로 남습니다.`,
  },

  proof: {
    statement:
      '지난달 약 **20,000개 리포지토리**에서 **347,516회** 다운로드 — **2018년**부터 유지보수.',
    notes: [
      'GitHub 스타 788개',
      `[React Status #257](${REACT_STATUS})에서 소개`,
      `[Our World in Data](${OWID})에서 프로덕션 사용`,
    ],
  },

  storybook: {
    heading: '모든 예제를 브라우저에서 편집 가능',
    body: 'Storybook은 플레이그라운드를 겸합니다. 각 스토리에는 라이브러리의 실제 타입 정의를 로드한 Monaco 에디터가 함께 제공됩니다. 코드를 바꾸고 다시 렌더링되는 것을 보세요 — 샌드박스 계정도, 로컬 설정도 없습니다.',
    primaryCta: 'Storybook 열기',
    secondaryCta: 'API 레퍼런스',
  },

  author: {
    heading: 'Aleksandr Smyshliaev가 구축하고 유지',
    body: '2018년 첫 공개, React 16.8부터 19까지 같은 공개 API. Aleksandr는 프런트엔드 엔지니어(React, Next.js, TypeScript)이며, 현재 계약 및 정규직 일에 열려 있습니다.',
    siteLink: 'asmyshlyaev177.dev',
    githubLink: 'GitHub',
    linkedinLink: 'LinkedIn',
  },
};
