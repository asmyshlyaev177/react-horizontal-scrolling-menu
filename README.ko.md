<!-- i18n:start -->

[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · 한국어 · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ko source=README.md source-blob=50880d72225fafe98e028fa9a69b354d4966a176 status=translated -->
<!-- i18n:end -->

# React horizontal scrolling menu

[![npm](https://img.shields.io/npm/v/react-horizontal-scrolling-menu.svg)](https://www.npmjs.com/package/react-horizontal-scrolling-menu)
![NPM 다운로드 수](https://img.shields.io/npm/dm/react-horizontal-scrolling-menu)
![npm 번들 크기 (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-horizontal-scrolling-menu.svg)
[![CI](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/main.yml/badge.svg)](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/main.yml)
[![채용 가능](https://img.shields.io/badge/available%20for%20hire-senior%20react%20engineer-2ea44f?style=flat-square)](https://asmyshlyaev177.dev)

브라우저 네이티브 스크롤과 항목별 가시성 추적 위에 구축된 React용 가로 스크롤
메뉴 컴포넌트입니다. 카테고리 행, 탭 스트립, 칩 필터, 갤러리 등 앱이 파악해야
하는 모든 행에 적합합니다. 항목은 여러분의 컴포넌트와 CSS로 만들 수 있고,
메뉴는 부모 너비에 반응하며, 스크롤바, 터치, 마우스 휠, 드래그 또는 제공한
화살표 컴포넌트로 탐색합니다. min+gzip 5.7 kB.

![예제](/sample.gif)

### [랜딩 페이지](https://react-horizontal-scrolling-menu.dev) · [라이브 예제 (Storybook, 브라우저에서 편집 가능)](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu) · [API](#프로퍼티와-콜백) · [AI 에이전트 스킬](#ai-코딩-에이전트와-함께-사용)

### 사용처

2만 개 이상의 리포지토리가 이 라이브러리에 의존합니다. 직접 살펴볼 수 있는 다섯 곳 —
각 링크는 `package.json`이 아니라 이 라이브러리를 사용하는 컴포넌트의 `import` 줄로
연결되며, 커밋에 고정되어 있습니다:

- [Our World in Data](https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/gdocs/components/KeyInsights.tsx#L3) — 아티클 렌더러의 핵심 인사이트 슬라이더. [토픽 패싯](https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/latest/LatestTopicFacets.tsx#L10)에서는 react-aria `ToggleButton`을 감쌉니다. `^8.2.0`
- [Precious Plastic / ONE ARMY](https://github.com/ONEARMY/community-platform/blob/90c1be6be0ad450a92d9483577433fdc8b09f477/packages/components/src/VerticalList/VerticalList.client.tsx#L6-L7) — 공용 컴포넌트 패키지의 `VerticalList`. 이 라이브러리 문서를 그대로 참고해 만들어졌습니다. `^8.2.0`
- [erxes](https://github.com/erxes/erxes/blob/efef0252d390f4072e21c0a188d289f01866b188/apps/posclient-front/components/ui/horizontalScrollMenu.tsx#L6) — POS 클라이언트의 카테고리 메뉴. `^4.0.4`
- [Reapit](https://github.com/reapit/foundations/blob/9edda57691befd398547bcdf4013916b85face52/packages/app-builder/src/components/ui/viewport/tab-bar.tsx#L4) — 앱 빌더의 뷰포트 탭 바. `^3.2.5`
- [AWS Performance Dashboard](https://github.com/aws-solutions/performance-dashboard-on-aws/blob/cffa9c822ac8288a44d13a9394a2255e574c7592/frontend/src/components/Tabs.tsx#L8) — 대시보드의 `Tabs` 컴포넌트. [`Arrows`](https://github.com/aws-solutions/performance-dashboard-on-aws/blob/cffa9c822ac8288a44d13a9394a2255e574c7592/frontend/src/components/Arrows.tsx#L9)는 `VisibilityContext`를 직접 사용합니다. 2024년 아카이브됨, `^2.1.1` 고정.

또한 [React Status #257](https://react.statuscode.com/issues/257)에서 소개되었습니다.

## 빠른 시작

```bash
npm install react-horizontal-scrolling-menu
```

[shadcn/ui](https://ui.shadcn.com)를 사용하시나요? 명령어 하나로 스타일이 적용된 컴포넌트(가장자리 인식 화살표 버튼, 드래그 스크롤, 숨김 스크롤바)를 `components/ui/`에 바로 설치할 수 있습니다:

```bash
npx shadcn@latest add https://react-horizontal-scrolling-menu.dev/r/scroll-menu.json
```

```tsx
import React from 'react';
import {
  ScrollMenu,
  VisibilityContext,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const items = Array.from({ length: 10 }, (_, i) => `item-${i + 1}`);

export function App() {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map((id) => (
        <Card itemId={id} key={id} title={id} />
      ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isFirstVisible = visibility.useIsVisible('first', true);
  return (
    <button disabled={isFirstVisible} onClick={() => visibility.scrollPrev()}>
      ←
    </button>
  );
}

function RightArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isLastVisible = visibility.useIsVisible('last', false);
  return (
    <button disabled={isLastVisible} onClick={() => visibility.scrollNext()}>
      →
    </button>
  );
}

function Card({ itemId, title }: { itemId: string; title: string }) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isVisible = visibility.useIsVisible(itemId);
  return (
    <div style={{ width: '160px' }} data-visible={isVisible}>
      {title}
    </div>
  );
}
```

예제가 의존하는 세 가지:

- 모든 항목에는 고유한 `itemId` 프로퍼티가 필요합니다. 가시성 추적이 이를 기반으로
  동작합니다. React의 `key`는 폴백으로 동작합니다.
- `styles.css`는 별도로 임포트합니다. JS 번들이 CSS를 주입하는 일은 없습니다.
- 항목 너비는 여러분의 CSS에서 나옵니다. 메뉴가 측정하는 것은 없습니다.

일반 JavaScript를 쓰시나요? 타입 임포트를 빼고 평소처럼
`React.useContext(VisibilityContext)`를 사용하세요.

## AI 코딩 에이전트와 함께 사용

구버전으로 학습한 모델은 모두 제거된 `visibleElements`, `Separator` 항목,
`Arrows` 프로퍼티를 여전히 사용하려 하고, 존재한 적 없는 `autoplay` 프로퍼티를
만들어 냅니다. 이 패키지에는 이를 막기 위한 8개의 `SKILL.md` 파일이 포함되어
있습니다. [TanStack Intent](https://tanstack.com/intent/latest/docs/overview)를
통해 온디맨드로 로드되는 작업 범위 가이드로, 웹 페이지가 아니라 라이브러리와
함께 버전이 관리됩니다.

```bash
npm install react-horizontal-scrolling-menu
npx @tanstack/intent@latest install   # 프로젝트당 한 번
```

`install`은 스킬 발견 기능을 에이전트 설정(`CLAUDE.md`, `.cursorrules` 등)에
추가합니다. 이후 에이전트는 `node_modules/react-horizontal-scrolling-menu/skills/`
에서 필요할 때 스킬을 로드합니다. `npx @tanstack/intent@latest list`와
`npx @tanstack/intent@latest load react-horizontal-scrolling-menu#menu-setup`으로
직접 나열하거나 로드할 수 있습니다.

| 스킬                   | 로드되는 시점                                                 |
| ---------------------- | ------------------------------------------------------------- |
| `menu-setup`           | 처음 동작하는 메뉴, 화살표, 필수 CSS 임포트                   |
| `menu-visibility`      | 화면에 무엇이 있는지, 그리고 양 끝의 화살표 상태              |
| `menu-scrolling`       | `scrollToItem`, `apiRef`, 한 번에 한 페이지씩 페이징          |
| `menu-interactions`    | 드래그, 휠, 터치 — 그리고 해당 핸들러 팩토리                  |
| `menu-recipes`         | 자동 재생, 무한 루프, 더 불러오기: 프로퍼티가 아니라 레시피   |
| `menu-transitions-rtl` | 애니메이션 타이밍, 커스텀 이징, 오른쪽에서 왼쪽               |
| `menu-testing-ssr`     | Next.js와 RSC, Jest 목, Playwright                            |
| `menu-migration`       | v8 이전 코드 업그레이드, 그리고 모델이 여전히 만들어 내는 API |

소스는 [`skills/`](skills/)에 있습니다. Intent 스킬을 로드할 수 없는 에이전트는
대신 [llms.txt](https://react-horizontal-scrolling-menu.dev/llms.txt)를 읽어야
합니다. 같은 사실을 한 파일로 압축한 것입니다.

## 하는 일과 하지 않는 일

브라우저 네이티브 스크롤 위에 구축되었습니다. 관성, 스크롤바, 터치, 휠,
접근성은 물리 재구현이 아니라 브라우저에서 나옵니다. 그 위에 IntersectionObserver를
통한 항목별 가시성, `scrollToItem` / `scrollNext` / `scrollPrev`, 외부 제어를
위한 `apiRef`, Header와 Footer 슬롯, RTL, 동적 추가/제거 감지, 그리고 전반에
걸친 TypeScript 타입이 있습니다. SSR 안전 — [랜딩 페이지](https://react-horizontal-scrolling-menu.dev)는
모든 데모를 서버 렌더링합니다.

스냅이나 스프링 물리는 내장되어 있지 않습니다 — 슬라이드 효과(페이드, 큐브,
커버플로우)는 전용 효과 라이브러리가 더 잘 해내는 유일한 영역이며, 요즘은 그런
라이브러리를 시도해 보는 데 몇 분이면 충분합니다. [비교 페이지](https://react-horizontal-scrolling-menu.dev/compare)는 그 트레이드오프를 솔직하게 다루며, [Embla vs Swiper](https://react-horizontal-scrolling-menu.dev/compare/embla-vs-swiper), [react-slick 대안](https://react-horizontal-scrolling-menu.dev/compare/react-slick-alternatives), [Swiper 대안](https://react-horizontal-scrolling-menu.dev/compare/swiper-alternatives) 심층 페이지도 있습니다. 자동 재생과 무한 루프도
프로퍼티가 아닙니다. 공개 API 위에 각각 약 60줄로 작성하는 레시피로,
Storybook에서 라이브 편집할 수 있습니다
([무한 루프](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-infiniteloop--infinite-loop),
[자동 재생](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-autoplay--autoplay)).
무엇이 보이는지 아는 행이 필요하다면, 바로 이것입니다.

## 예제

목적별 완성 패턴 — 각각 서버 렌더링 라이브 데모, 코드, 대응하는 shadcn 설치 명령 포함: [Netflix 스타일 행](https://react-horizontal-scrolling-menu.dev/netflix-row) · [스크롤 가능한 탭](https://react-horizontal-scrolling-menu.dev/scrollable-tabs) · [필터 칩](https://react-horizontal-scrolling-menu.dev/filter-chips) · [카테고리 레일](https://react-horizontal-scrolling-menu.dev/category-rail).

모든 예제는
[Storybook](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu)에서
라이브 편집할 수 있습니다. 각 스토리에는 라이브러리의 실제 타입 정의를 로드한
Monaco 에디터가 함께 제공됩니다. 다룹니다: 기본 사용법, 한 번에 한 항목 스크롤,
마우스 드래그, 마운트 시 항목으로 스크롤, 클릭 시 가운데 정렬, 동적 항목 추가,
위치 저장/복원, 항목 애니메이션, 진행 점, 본문 스크롤 방지, 커스텀 전환,
무한 루프, 자동 재생, 세로 레이아웃, 푸터의 화살표, 모바일 스와이프, RTL,
그리고 5000개 항목 스트레스 테스트.

<!-- DOCS_START -->

### 헬퍼와 API

ScrollMenu 메인 컴포넌트의 자식(화살표, 헤더, 푸터, 항목)은 **VisibilityContext**를
사용해 상태와 콜백에 접근할 수 있습니다. 함수 콜백도 컨텍스트를 받습니다(예:
`onWheel`, `onScroll`).

## 프로퍼티와 콜백

| 프로퍼티                 | 시그니처                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| LeftArrow                | 왼쪽 화살표용 React 컴포넌트                                                               |
| RightArrow               | 오른쪽 화살표용 React 컴포넌트                                                             |
| Header                   | Header React 컴포넌트                                                                      |
| Footer                   | Footer React 컴포넌트                                                                      |
| onWheel                  | (VisibilityContext, event) => void                                                         |
| onScroll                 | (VisibilityContext, event) => void, 스크롤이 _안정되기 전에_ 발화                          |
| onInit                   | (VisibilityContext) => void                                                                |
| onUpdate                 | (VisibilityContext) => void                                                                |
| apiRef                   | React.RefObject \| React.RefCallback                                                       |
| options                  | IntersectionObserver 옵션 — 요소를 보이는 것으로 간주할 `rootMargin`, `threshold`, `ratio` |
| containerRef             | 스크롤 컨테이너용 React.RefObject \| React.RefCallback                                     |
| onMouseDown              | (VisibilityContext) => (React.MouseEventHandler) => void                                   |
| onMouseLeave             | (VisibilityContext) => (React.MouseEventHandler) => void                                   |
| onMouseUp                | (VisibilityContext) => (React.MouseEventHandler) => void                                   |
| onMouseMove              | (VisibilityContext) => (React.MouseEventHandler) => void                                   |
| onTouchMove              | (VisibilityContext) => (React.TouchEventHandler) => void                                   |
| onTouchStart             | (VisibilityContext) => (React.TouchEventHandler) => void                                   |
| onTouchEnd               | (VisibilityContext) => (React.TouchEventHandler) => void                                   |
| itemClassName            | Item의 ClassName                                                                           |
| scrollContainerClassName | scrollContainer의 ClassName                                                                |
| wrapperClassName         | 가장 바깥쪽 div의 ClassName                                                                |
| transitionDuration       | 전환 시간(밀리초), 기본값 `500`, `noPolyfill={false}` 필요                                 |
| transitionBehavior       | 'smooth' \| 'auto' \| 커스텀 함수, `noPolyfill={false}` 필요                               |
| RTL                      | 오른쪽에서 왼쪽 방향 활성화                                                                |
| noPolyfill               | 기본값 `true`(네이티브 scrollIntoView); `false`로 설정하면 전환 프로퍼티 활성화            |

두 가지 콜백 형태에 유의하세요. `onWheel`과 `onScroll`은 단순한
`(context, event) => void`인 반면, 마우스와 터치 프로퍼티는 핸들러 팩토리, 즉
`(context) => (event) => void`입니다. 팩토리 패턴의 실제 사용은
[MouseDrag 스토리](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-mousedrag--mouse-drag)를
참조하세요.

### VisibilityContext

훅(훅 규칙에 따라 ScrollMenu 아래에서 렌더링되는 컴포넌트 안에서만 호출하세요):

| 훅                   | 시그니처                                                                 |
| -------------------- | ------------------------------------------------------------------------ |
| useIsVisible         | (itemId: string \| 'first' \| 'last', defaultValue?: boolean) => boolean |
| useLeftArrowVisible  | () => boolean                                                            |
| useRightArrowVisible | () => boolean                                                            |

값과 함수:

| 프로퍼티              | 시그니처                                               |
| --------------------- | ------------------------------------------------------ |
| getItemById           | itemId => IOItem \| undefined                          |
| getItemElementById    | itemId => DOM Element \| null                          |
| getItemByIndex        | index => IOItem \| undefined                           |
| getItemElementByIndex | index => DOM Element \| null                           |
| getNextElement        | () => IOItem \| undefined                              |
| getPrevElement        | () => IOItem \| undefined                              |
| isFirstItemVisible    | boolean                                                |
| isItemVisible         | itemId => boolean                                      |
| isLastItem            | boolean                                                |
| isLastItemVisible     | boolean                                                |
| menuVisible           | { current: boolean }                                   |
| scrollNext            | (behavior, inline, block, ScrollOptions) => void       |
| scrollPrev            | (behavior, inline, block, ScrollOptions) => void       |
| scrollToItem          | (item, behavior, inline, block, ScrollOptions) => void |
| items                 | ItemsMap 클래스 인스턴스                               |
| scrollContainer       | Ref<OuterContainer>                                    |

### items 클래스 인스턴스

ItemsMap은 모든 항목에 대한 정보를 저장하며, 현재 보이는 항목과 이전/다음 항목을
가져오는 메서드를 제공합니다. 업데이트를 구독할 수도 있습니다.

| 프로퍼티/메서드 | 설명                                                                                                                                |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| subscribe       | `itemId` 또는 `first`, `last`, `onInit`, `onUpdate` 이벤트 구독. 예: `items.subscribe('item5', (item) => setVisible(item.visible))` |
| unsubscribe     | useEffect에서 정리용으로 사용, 동일한 콜백 인스턴스를 전달                                                                          |
| getVisible      | 보이는 항목만 반환                                                                                                                  |
| toItems         | 모든 항목의 id 반환                                                                                                                 |
| toArr           | 모든 항목 반환                                                                                                                      |
| first           | 첫 번째 항목 반환                                                                                                                   |
| last            | 마지막 항목 반환                                                                                                                    |
| prev            | (itemId \| Item) => 이전 항목 \| undefined                                                                                          |
| next            | (itemId \| Item) => 다음 항목 \| undefined                                                                                          |

### 전환과 애니메이션

`transitionDuration`과 `transitionBehavior`(`'smooth'`, `'auto'`, 또는 커스텀
함수)는 `scrollToItem`과 스크롤 헬퍼의 애니메이션 방식을 제어합니다. 둘 다
`noPolyfill={false}`가 필요합니다. 기본 네이티브 스크롤은 이를 무시합니다.
`RTL` 프로퍼티와는 함께 사용할 수 없습니다.

커스텀 이징 함수는
[CustomTransition 스토리](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-customtransition--custom-transition)를
참조하세요.

#### ScrollOptions

`scrollToItem`, `scrollPrev`, `scrollNext`의 마지막 인자는 해당 호출 한 번에
대해 전환 프로퍼티를 덮어씁니다:

```tsx
scrollToItem(getItemElementById('item-5'), 'smooth', 'center', 'nearest', {
  duration: 800, // 밀리초
});
```

### 기타 헬퍼

#### slidingWindow

이전 또는 다음 보이는 항목 그룹을 가져옵니다:

```tsx
slidingWindow(allItems, visibleItems).prev();
// 또는 .next()
```

#### getItemsPos

그룹의 첫 번째, 가운데, 마지막 항목을 가져옵니다. 예: 이전 페이지의 중앙으로
스크롤:

```tsx
const prevGroup = slidingWindow(allItems, visibleItems).prev();
const { center } = getItemsPos(prevGroup);
scrollToItem(getItemById(center), 'smooth', 'center');
```

### apiRef

ScrollMenu에 ref를 전달하면 전체 VisibilityContext 값이 할당됩니다. `scrollToItem`
같은 함수를 메뉴 밖에서 발화하는 데 유용합니다. ref의 데이터 값은 오래될 수
있으므로 함수를 호출하는 편을 권장합니다:

```tsx
apiRef.current.scrollToItem(apiRef.current.getItemElementById('item-3'));
```

항목의 DOM 요소에는 ``document.querySelector(`[data-key='${itemId}']`)``로 직접
접근할 수도 있습니다.
[ScrollToItem 스토리](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-scrolltoitem--scroll-to-item)와
[AddItemAndScrollToIt 스토리](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-additemandscrolltoit--add-item-and-scroll-to-it)를
참조하세요.

<!-- DOCS_END -->

## SSR

이 라이브러리는 SSR 안전합니다. 첫 렌더링은 일반 마크업을 내보내고
IntersectionObserver는 클라이언트 측에서만 연결됩니다. `useIsVisible`의
`defaultValue` 인자가 서버 렌더링 상태를 제어합니다. 표준 화살표 패턴
(`('first', true)` / `('last', false)`)은 왼쪽 화살표는 비활성, 오른쪽 화살표는
활성으로 렌더링해 시작 위치로 스크롤된 행과 일치합니다.

### Next.js 참고

이 패키지는 ESM 우선입니다. 구형 Next.js 설정에서는
[“Cannot use import statement outside a module”](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/240)을
만날 수 있습니다. 패키지를
[`transpilePackages`](https://nextjs.org/docs/app/api-reference/config/next-config-js/transpilePackages)에
추가하면 해결됩니다.

## 브라우저 지원

**IntersectionObserver**와 **requestAnimationFrame**이 필요합니다. 모든 최신
브라우저입니다. IE 없음.

## 개발

```bash
git clone https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
cd react-horizontal-scrolling-menu
pnpm run setup
pnpm run demo        # 예제 앱 (Next.js, 포트 3003), 라이브러리를 watch 모드로
pnpm run demo-tanstack  # 예제 앱 (TanStack Start SSR, 포트 3004)
pnpm run storybook   # 예제
pnpm test            # 유닛 + e2e + storybook 테스트
```

리포지토리에는 두 개의 통합 예제 앱(`example-nextjs`와 `example-tanstack`, 후자는
workerd에서 서버 렌더링되는 TanStack Start)이 있습니다. 둘 다 동일한 데모(마우스
드래그, 본문 스크롤 잠금, 컨트롤 패널이 있는 커스텀 애니메이션)를 렌더링하므로,
`e2e/`의 단일 e2e 스위트가 두 프레임워크 모두에서 라이브러리에 대해 실행되며,
서버 렌더링된 HTML에 메뉴가 이미 존재한다는 단언도 포함합니다.

기여와 수정을 환영합니다. 포크하고, 커밋하고, PR을 열고, 테스트를 잊지 마세요.
[CONTRIBUTING](./CONTRIBUTING.md)과 [CHANGELOG](./CHANGELOG.md)을 참조하세요.

레거시 [v1 API](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/tree/v1) 문서.

## 소개

2018년부터 **Aleksandr Smyshliaev**가 구축하고 유지합니다. 제 첫 npm 패키지이며,
React 16.8부터 19까지 동일한 공개 API를 유지하고 있습니다. 저는 프런트엔드
엔지니어(React / Next.js / TypeScript)이며 **계약 및 정규직 일을 받고 있습니다**.

- **연락처** —— [asmyshlyaev177.dev](https://asmyshlyaev177.dev) ·
  [asmyshlyaev177@gmail.com](mailto:asmyshlyaev177@gmail.com) ·
  [LinkedIn](https://linkedin.com/in/asmyshlyaev177) · Telegram @asmyshlyaev177
- **다른 프로젝트** —— [state-in-url](https://github.com/asmyshlyaev177/state-in-url)
  (타입이 있는 URL 상태),
  [test-proxy-recorder](https://github.com/asmyshlyaev177/test-proxy-recorder)
  (Playwright용 기록/재생)

리포지토리에 ⭐️를 주면 더 많은 사람이 이 라이브러리를 찾을 수 있습니다.
