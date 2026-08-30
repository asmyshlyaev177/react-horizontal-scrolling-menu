// Korean (ko) — translation of en/use-cases.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=ko source=en/use-cases.ts source-blob=90fca8a33a3a26de44d29e981f98e2a5cd248922 status=translated
import type { UseCasesCopy } from '../types.ts';

export const useCases: UseCasesCopy = {
  hub: {
    heading: '사용 사례',
    lede: '목적별 완성 패턴 — 라이브 데모, 코드, shadcn 설치 명령 포함.',
  },

  netflixRow: {
    name: 'Netflix 스타일 행',
    blurb: '포스터 카드, 가장자리 위 호버 화살표, 에지 페이드, 드래그 지원.',
    meta: {
      title: 'React용 Netflix 스타일 가로 스크롤 행',
      description:
        'React와 네이티브 스크롤로 Netflix 스타일 카테고리 행을 만듭니다: 호버 화살표, 가장자리 페이드, 드래그 스크롤, 가시성 추적. 라이브 데모와 전체 소스 제공.',
    },
    jsonLdHeadline:
      'React에서 캐러셀 라이브러리 없이 Netflix 스타일 가로 스크롤 행을 만드는 방법',
    title: 'React의 Netflix 스타일 가로 스크롤 행',
    lede: '모든 스트리밍 사이트에서 넘겨보는 포스터 행은 캐러셀이 아니라 메뉴입니다. 아무것도 스냅되지 않고 자동 재생도 없습니다. 위에 화살표를 겹쳐 놓은 채 네이티브 모멘텀 스크롤을 그대로 사용합니다. `react-horizontal-scrolling-menu`가 제공하는 것이 정확히 이것입니다: 여러분의 카드, 네이티브 스크롤, 그리고 화살표가 언제 숨어야 하는지 아는 항목별 가시성.',
    demoHint:
      '드래그하거나 행에 마우스를 올려보세요 — 화살표가 가장자리 위로 서서히 나타나고, 행의 끝에 도달하면 각각 사라집니다.',
    prose: [
      {
        heading: '캐러셀로 풀 문제가 아닌 이유',
        body: `Netflix 행은 한 번에 하나의 슬라이드만 보여주지 않습니다. 항목은 일부러 가장자리에서 잘려 보이는데, 이 잘린 포스터가 "더 있다"는 것을 알려주는 어포던스입니다. 캐러셀 엔진은 이와 반대로 동작합니다: JavaScript 트랜스폼으로 제스처 레이어를 직접 소유하고, 슬라이드 경계에 스냅하며, 사용자 브라우저가 이미 가지고 있는 모멘텀을 다시 구현합니다. 클릭 가능한 카드 행에서는 이 모든 것이 오버헤드일 뿐입니다.

네이티브 스크롤은 모멘텀, 터치, 트랙패드, 스크롤바를 공짜로 제공합니다. 다만 오버레이 화살표와 어떤 카드가 화면에 보이는지 아는 것, 이 두 가지는 제공하지 않습니다 — 이 라이브러리가 추가하는 것이 바로 이 두 가지로, 항목별 [\`useIsVisible\`](/examples/simple)과 가장자리 인식 화살표 상태로 구현됩니다.`,
      },
      {
        heading: '효과를 완성하는 세 가지 디테일',
        body: `- **화살표는 콘텐츠 옆이 아니라 위에 겹쳐집니다.** 행 끝부분에 절대 위치로 렌더링하고(위 데모는 메뉴의 컨텍스트 안에 머물도록 \`Header\`를 통해 전달합니다), 호버 시 표시하며, [\`useLeftArrowVisible\` / \`useRightArrowVisible\`](/examples/simple)가 해당 끝에 도달했다고 알릴 때 각각 숨깁니다.
- **가장자리는 페이드됩니다.** 스크롤 컨테이너에 적용한 \`mask-image\` 그라디언트 한 줄이, 캐러셀 플러그인들이 이를 위해 제공하는 "peek" 로직을 대신합니다.
- **드래그는 클릭을 발생시켜서는 안 됩니다.** 포스터 위에서 끝나는 마우스 드래그가 해당 포스터를 열어서는 안 됩니다. [드래그 스크롤 레시피](/examples/mouse-drag)가 드래그 상태를 추적해 바로 그 클릭을 흡수합니다.`,
      },
      {
        heading: '확장하기: 지연 로딩 행과 긴 레일',
        body: `스트리밍 UI는 수백 개의 카드가 담긴 행을 수십 개씩 쌓습니다. 항목이 네이티브 스크롤 컨테이너 안의 평범한 DOM이기 때문에 스크롤 시 아무것도 다시 렌더링되지 않습니다 — [성능 예제](/examples/performance)는 가상화 없이 300개 항목을 실행합니다. 항목별 가시성은 이미지 지연 로딩도 공짜로 제공합니다: \`useIsVisible\`이 카드가 화면에 보인다고 알릴 때까지 플레이스홀더를 렌더링하면 됩니다.

행이 끝에서 순환해야 한다면, 그것이 슬라이드 시맨틱이 정말로 도움이 되는 유일한 지점입니다 — 캐러셀 엔진에 손을 뻗기 전에 [무한 루프 레시피](/examples/infinite-loop)에서 ~60줄짜리 유저랜드 버전을 확인하세요.`,
      },
    ],
    snippet: {
      heading: '패턴, 최소 구성',
      lede: '네이티브 스크롤 행 위에 화살표를 겹칩니다 — 위 데모는 이 구조에 스타일링을 더한 것입니다. 드래그와 가장자리 페이드까지 포함한 완전한 드롭인 소스는 아래 shadcn 컴포넌트로 제공됩니다.',
    },
    shadcn: {
      heading: '또는 shadcn 컴포넌트로 설치하기',
      body: '[media-row](https://react-horizontal-scrolling-menu.dev/r/media-row.json) 레지스트리 아이템은 이 패턴 그대로입니다 — 호버 화살표, 그라디언트 가장자리 페이드, 드래그 스크롤 — `components/ui/`에 Tailwind 스타일 컴포넌트로 설치되어 자유롭게 수정할 수 있습니다:',
    },
  },

  scrollableTabs: {
    name: '스크롤 가능한 탭',
    blurb:
      '넘쳐도 자연스럽게 스크롤되고 활성 탭을 가운데로 정렬하는 탭 스트립.',
    meta: {
      title: 'React 스크롤 탭 — Material UI 불필요',
      description:
        'React에서 네이티브 스크롤로 만드는 스크롤 탭: 활성 탭이 스스로 중앙 정렬되고, 화살표는 필요할 때만 나타나며, 탭 콘텐츠는 자유 형식입니다. 라이브 데모와 소스 제공.',
    },
    jsonLdHeadline:
      'React의 스크롤 탭: 네이티브 스크롤, 중앙 정렬 선택, Material UI 불필요',
    title: '브라우저처럼 스크롤되는 React 스크롤 탭',
    lede: '탭 스트립은 제품이 탭 6개를 넘어서는 순간 더 이상 맞지 않게 됩니다. 해결책은 폰트를 줄이는 것이 아니라 스크롤되는 스트립입니다: 오버플로는 브라우저가 처리하고, 탭을 클릭하면 중앙으로 정렬되며, 화살표는 갈 곳이 있을 때만 나타납니다.',
    demoHint:
      '가장자리 근처의 탭을 클릭해보세요 — 스스로 중앙으로 스크롤됩니다.',
    prose: [
      {
        heading: '중요한 단 하나의 동작: 선택 시 중앙 정렬',
        body: `스크롤 탭 스트립의 성패는 가장자리에 있는 탭을 클릭했을 때 일어나는 일에 달려 있습니다: 양옆의 이웃 탭이 드러나도록 가운데로 부드럽게 이동해야 합니다. 여기서는 호출 하나로 끝납니다 — \`scrollToItem(el, 'smooth', 'center')\` — [center-on-click 예제](/examples/center-on-click)에 연결되어 있습니다. 마운트 시 활성 탭을 복원하는 것도 같은 호출에 \`'auto'\`를 사용하며, [위치 저장 및 복원](/examples/save-restore-position)에서 보여줍니다.

화살표는 같은 가시성 데이터에서 나옵니다: \`useLeftArrowVisible\`은 첫 번째 탭이 화면 밖에 있을 때만 false이므로, 왼쪽 화살표는 정확히 필요할 때 렌더링됩니다. 별도의 측정 코드도, 직접 만든 리사이즈 옵저버도 필요 없습니다.`,
      },
      {
        heading: 'MUI 스크롤 탭이 부족해지고 있다면',
        body: `Material UI의 \`variant="scrollable"\` 탭은 Material 디자인 시스템 안에서는 올바른 답입니다 — 여러분의 "탭"이 더 이상 탭이 아니게 되기 전까지는요. MUI는 스트립을 Tabs 시맨틱에 용접해 놓았습니다: \`value\`/\`onChange\` 쌍, 탭 패널, 그리고 MUI가 모바일에서 기본으로 숨기는 스크롤 버튼까지. 행에 칩, 카드, 아바타 또는 혼합 콘텐츠가 들어가거나 드래그 스크롤이 필요하거나 어떤 항목이 보이는지 알아야 하는 순간, 여러분은 컴포넌트를 사용하는 게 아니라 컴포넌트와 싸우게 됩니다.

이 라이브러리는 그 아래 계층입니다: 가시성 추적이 있는 스크롤 행이며, "탭"이 무엇이어야 하는지에 대한 의견이 없습니다. 여러분의 탭은 \`itemId\`를 가진 모든 컴포넌트일 수 있습니다 — Tailwind, MUI 자체의 \`styled\`, 또는 순수 CSS로 스타일링하세요. 선택 상태는 위 데모가 하나의 \`useState\`에 보관하는 것처럼 온전히 여러분의 몫입니다.`,
      },
      {
        heading: '접근성은 대부분 공짜입니다 — 두 가지 빈틈만 주의하세요',
        body: `스트립이 네이티브 스크롤 컨테이너이기 때문에 키보드 포커스, 스크린 리더 읽기 순서, RTL은 모두 플랫폼에서 제공됩니다 — 탭 사이로 포커스를 이동하면 코드 한 줄 없이도 해당 탭이 화면에 스크롤되어 들어오고, [RTL](/examples/rtl)도 별도 설정이 필요 없습니다. 다른 탭 UI와 마찬가지로 두 가지는 여전히 여러분의 몫입니다: ARIA 패턴을 직접 선택하고(실제 패널이 전환된다면 \`role="tablist"\`, "탭"이 내비게이션이라면 \`aria-current\`), [드래그 스크롤](/examples/mouse-drag) 레시피의 클릭 억제 로직을 유지해 드래그를 놓았을 때 탭이 활성화되지 않도록 해야 합니다.`,
      },
    ],
    snippet: {
      heading: '패턴, 최소 구성',
      lede: '탭은 `itemId`를 가진 평범한 버튼이며, 선택하면 중앙으로 정렬됩니다. 이것이 전부입니다 — 위 데모는 여기에 스타일링과 드래그를 더한 것입니다.',
    },
    shadcn: {
      heading: '또는 shadcn 컴포넌트로 설치하기',
      body: '[scroll-tabs](https://react-horizontal-scrolling-menu.dev/r/scroll-tabs.json) 레지스트리 아이템은 이 패턴을 데이터 기반으로 제공합니다 — `tabs`, `value`, `onValueChange`를 전달하면 됩니다 — `components/ui/`에 수정 가능한 컴포넌트로 설치됩니다:',
    },
  },

  filterChips: {
    name: '필터 칩',
    blurb:
      '새 필터를 화면 안으로 스크롤해 보여주고 클릭을 깨뜨리지 않는 칩 바.',
    meta: {
      title: '스크롤 바 안의 React 필터 칩',
      description:
        'React의 가로 필터 칩 바: 칩은 네이티브로 스크롤되고, 칩을 추가하면 화면에 보이도록 스크롤되며, 클릭을 깨뜨리지 않는 드래그 스크롤을 지원합니다. 라이브 데모와 소스 제공.',
    },
    jsonLdHeadline: 'React와 네이티브 스크롤로 스크롤 가능한 필터 칩 바 만들기',
    title: 'React로 만드는 스크롤되는 필터 칩 바',
    lede: '검색 바 아래에 있는 칩 행 — YouTube 주제, 스토어 필터, 태그 선택기 — 은 토글 버튼으로 가득한 한 줄짜리 스크롤 컨테이너입니다. 어려운 10%는 가장자리에서 일어나는 일들입니다: 화면 밖에 새로 나타나는 칩, 아무것도 토글해서는 안 되는 드래그, 그리고 스스로 무의미해질 때를 아는 화살표.',
    demoHint:
      '필터를 추가해보세요 — 새 칩이 보이도록 행이 스스로 스크롤됩니다.',
    prose: [
      {
        heading: '엣지 케이스가 곧 기능입니다',
        body: `\`overflow-x: auto\`가 걸린 flex 행은 무엇이든 스크롤됩니다. 칩 바의 진가는 디테일에서 드러납니다:

- **화면 밖에 추가된 칩은 스스로 존재를 알려야 합니다.** 데모는 렌더링 후 \`apiRef.current.scrollToItem(el, 'smooth', 'end')\`로 새로 추가된 모든 칩으로 스크롤합니다 — [add-item-and-scroll-to-it 예제](/examples/add-item-and-scroll-to-it)가 정확히 이 연결을 보여줍니다.
- **드래그하면 스크롤, 클릭하면 토글 — 절대 둘 다는 아닙니다.** 데스크톱 사용자는 행을 터치 표면처럼 드래그하는데, 칩 위에서 손을 떼도 그 칩이 뒤집혀서는 안 됩니다. [드래그 레시피](/examples/mouse-drag)가 제스처를 추적해 그 한 번의 클릭만 억제합니다.
- **화살표는 쓸모 있을 때만.** \`useLeftArrowVisible\` / \`useRightArrowVisible\`은 다른 모든 것과 같은 IntersectionObserver에 연결되어 있으므로, 칩이 추가되거나 제거된 뒤에도 진짜 가장자리에서 화살표가 비활성화됩니다.`,
      },
      {
        heading: '상태는 여러분의 손안에 있습니다',
        body: `라이브러리는 스크롤을 담당할 뿐 선택 상태를 소유하지 않습니다. 칩은 여러분의 버튼입니다 — 다중 선택 토글에는 \`aria-pressed\`, 단일 선택에는 일반 상태를 사용하세요 — 메뉴가 필요로 하는 것은 각 칩이 \`itemId\`를 갖는다는 것뿐입니다. 즉 칩 상태는 이미 가지고 있는 무엇과도 조합될 수 있습니다: URL 검색 매개변수, 폼 라이브러리, 서버 기반 필터 모델까지. 칩을 삭제하는 것은 [항목 제거](/examples/add-items)이고, 사라지는 애니메이션을 주는 것은 [items-animation 예제](/examples/items-animation)입니다.`,
      },
      {
        heading: '모바일: body 스크롤에 관한 한 가지 경고',
        body: `터치 스크린에서는 바 안에서의 가로 스와이프가 일부 브라우저에서 페이지 전체를 함께 옆으로 끌고 갈 수 있습니다. 이런 현상이 보인다면 [prevent-body-scroll 예제](/examples/prevent-body-scroll)에서 이를 막는 \`touch-action\`과 오버스크롤 컨테인먼트를 확인하세요 — CSS만으로 해결되며 제스처 라이브러리는 필요 없습니다.`,
      },
    ],
    snippet: {
      heading: '패턴, 최소 구성',
      lede: '칩은 `itemId`를 가진 토글 버튼이며, 메뉴 API에 대한 ref가 새로 추가된 칩을 화면에 보이도록 스크롤합니다.',
    },
    shadcn: {
      heading: '또는 shadcn 컴포넌트로 설치하기',
      body: '[chip-bar](https://react-horizontal-scrolling-menu.dev/r/chip-bar.json) 레지스트리 아이템은 이를 제어 컴포넌트로 제공합니다 — `options`, `selected`, `onSelectedChange` — `components/ui/`에 Tailwind로 스타일링되어 설치됩니다:',
    },
  },

  categoryRail: {
    name: '카테고리 레일',
    blurb: '스토어 부문 행: 가장자리를 아는 화살표, 지연 로딩 이미지, 분석.',
    meta: {
      title: '이커머스를 위한 React 카테고리 레일',
      description:
        'React의 가로 카테고리 레일: 네이티브 스크롤, 가장자리에서 비활성화되는 화살표, 이미지 지연 로딩과 분석을 위한 항목별 가시성. 데모와 소스 제공.',
    },
    jsonLdHeadline: 'React와 네이티브 스크롤로 이커머스 카테고리 레일 만들기',
    title: 'React로 만드는 스토어용 카테고리 레일',
    lede: '카테고리 레일 — 스토어 그리드 위에 놓인, 탭할 수 있는 부서 행 — 은 이커머스에서 트래픽이 가장 높은 스크롤 컨테이너이며, 캐러셀이 아니라 메뉴입니다: 모든 타일이 링크이고, 스냅되는 것은 없으며, 가장자리에 반쯤 걸쳐 보이는 타일이 스크롤을 유도합니다.',
    demoHint:
      '레일을 드래그하거나 화살표를 사용해보세요 — 행의 진짜 끝에서 비활성화됩니다.',
    prose: [
      {
        heading: '스토어프론트에서 네이티브 스크롤이 승리하는 이유',
        body: `스토어프론트 레일은 Lighthouse 점수 1점까지 다투는 페이지에서 접히지 않는 영역(above the fold)에 놓입니다. 캐러셀 엔진은 브라우저가 네이티브로 하는 일을 대신하려고 수십 킬로바이트짜리 제스처 에뮬레이션을 실어 나릅니다. 반면 이 라이브러리는 min+gzip 기준 ≈5.7 kB이며 스크롤을 플랫폼에 맡기므로 하이드레이션 버벅임이 없습니다 — JavaScript가 로드되기 전에도 레일은 스크롤되며, 이는 크롤러가 보는 서버 렌더링 HTML에서도 동작한다는 뜻입니다. 이 페이지 자체가 서버 렌더링의 증거입니다: 위 데모는 JavaScript가 꺼진 상태에서도 스크롤됩니다.

[비교 페이지](/compare)에는 Swiper, Embla, keen-slider, react-slick과 비교한 전체 표가 있습니다.`,
      },
      {
        heading: '가시성 추적은 스토어프론트의 기능입니다',
        body: `항목별 가시성은 상품 진열(merchandising)에 대응시켜 보기 전까지는 구현 디테일처럼 들립니다:

- **지연 이미지** — \`useIsVisible\`이 화면에 보인다고 알릴 때까지 플레이스홀더 타일을 렌더링합니다.
- **노출(impression) 분석** — (홈페이지의 [히어로 데모](/)에서 실제로 동작하는) \`getVisible()\`은 레일이 렌더링됐다는 사실뿐 아니라 정확히 어떤 카테고리가 보였는지 알려줍니다.
- **가장자리를 인식하는 화살표** — [add-items 예제](/examples/add-items)처럼 카테고리가 비동기로 로드된 뒤에도 진짜 끝에서 비활성화되거나 숨겨집니다.`,
      },
      {
        heading: '디자인 시스템에 맞추기',
        body: `타일은 여러분의 컴포넌트입니다 — 이미지 카드, 원형, 텍스트 필 등 — 각각이 \`itemId\`를 가집니다. 높이와 너비는 여러분의 CSS에서 나오며, 메뉴는 어떤 크기도 강요하지 않습니다. [one-item-scroll](/examples/one-item-scroll)로 상품 슬라이더처럼 한 번에 한 항목씩 이동하거나, 스크롤 [진행 표시기](/examples/progress)를 보여주거나, [RTL 예제](/examples/rtl)로 아랍어와 히브리어 스토어용 RTL을 적용해보세요 — 레일은 설정이 아니라 조합입니다.`,
      },
    ],
    snippet: {
      heading: '패턴, 최소 구성',
      lede: '`itemId`를 가진 타일과 가시성 훅에서 나오는 화살표 — 레일 전체가 40줄이 채 되지 않습니다.',
    },
    shadcn: {
      heading: '또는 shadcn 컴포넌트로 설치하기',
      body: '기본 [scroll-menu](https://react-horizontal-scrolling-menu.dev/r/scroll-menu.json) 레지스트리 아이템이 바로 이 레일입니다 — shadcn 스타일의 화살표, 드래그 스크롤, 숨겨진 스크롤바 — `components/ui/`에 설치되어 여러분의 토큰으로 스타일링됩니다:',
    },
  },
};
