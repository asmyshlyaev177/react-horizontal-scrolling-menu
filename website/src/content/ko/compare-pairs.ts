// Korean (ko) — translation of en/compare-pairs.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=ko source=en/compare-pairs.ts source-blob=0fb5673892e901be3f7c39eba5eb45e00488b9a5 status=translated
import type { ComparePairsCopy } from '../types.ts';

// Neutral-pair comparison pages. The voice is a referee's, not a vendor's:
// each page recommends the right carousel for carousel jobs and claims only
// the menu-shaped slice. Overselling here burns the credibility the pages
// exist to earn.
export const comparePairs: ComparePairsCopy = {
  hub: {
    heading: '더 많은 비교',
    lede: '사람들이 실제로 저울질하는 구체적인 선택들을 더 깊이 다루는 페이지입니다.',
  },

  emblaVsSwiper: {
    meta: {
      title: 'Embla vs Swiper: 어떤 React 캐러셀을 선택할까',
      description:
        'Embla와 Swiper를 정직하게 비교합니다: 번들 크기, 기능, 헤드리스 vs 배터리 포함형 — 그리고 캐러셀이 사실은 메뉴일 때의 세 번째 선택지까지.',
    },
    jsonLdHeadline:
      'React용 Embla vs Swiper: 정직한 비교, 그리고 둘 다 필요 없는 경우',
    name: 'Embla vs Swiper',
    blurb: '헤드리스 엔진이냐 배터리 포함형이냐 — 그리고 둘 다 필요 없는 경우.',
    title: 'Embla vs Swiper: 무엇을 만드는지에 따라 선택하세요',
    lede: '둘 다 훌륭하고 활발히 관리되는 캐러셀 엔진이며, 둘 사이의 선택은 정말로 막상막하입니다. 결국 하나의 축으로 귀결됩니다: Swiper는 모든 기능을 내장한 채로 제공하고, Embla는 그 위에 쌓아 올릴 작은 헤드리스 엔진을 제공합니다. 이 페이지는 둘 중 어느 쪽과도 경쟁하지 않는 라이브러리의 메인테이너가 작성했습니다 — 그리고 그것이 맨 아래에 있는 세 번째 답이기도 합니다, 알고 보니 애초에 캐러셀이 아니었던 구성을 위한.',
    table: {
      headers: ['', 'Embla', 'Swiper'],
      rows: [
        [
          '이것은 무엇인가',
          '헤드리스 캐러셀 엔진',
          '완전한 슬라이더/캐러셀 프레임워크',
        ],
        ['번들 (코어, min+gzip)', '≈8 kB', '≈40 kB (모듈에 따라 증가)'],
        [
          '스타일링과 마크업',
          '전적으로 여러분의 몫 — 아무것도 제공하지 않음',
          '자체 DOM 구조와 CSS, 테마 가능',
        ],
        [
          '이펙트 (페이드, 큐브, 커버플로 등)',
          '커뮤니티 플러그인 또는 직접 구현',
          '내장, 성숙한 상태',
        ],
        ['자동재생, 페이지네이션, 썸네일', '공식 플러그인', '내장 모듈'],
        [
          'React 통합',
          '퍼스트클래스 훅 (useEmblaCarousel)',
          '순수 JS 코어를 감싼 래퍼 컴포넌트',
        ],
        [
          '생태계 참고',
          'shadcn/ui 캐러셀이 내부적으로 쓰는 엔진',
          '웹에서 가장 많이 쓰이는 슬라이더',
        ],
        [
          '적합한 경우',
          '커스텀 디자인 캐러셀, 디자인 시스템',
          '이미지 중심 슬라이더, 기능이 풍부한 갤러리',
        ],
      ],
      note: '번들 크기는 대략적인 코어 기준입니다 — 최신 수치는 bundlephobia에서 확인하세요. Swiper는 가져오는 모듈에 따라 커집니다.',
    },
    prose: [
      {
        heading: '디자인 제어가 핵심이라면 Embla를 선택하세요',
        body: `Embla는 스냅 물리, 드래그 처리, 슬라이드 모델만 제공하고 그 외에는 아무것도 주지 않습니다 — 마크업도, CSS도, 화살표도 없습니다. 그것이 강점입니다: 디자인 시스템 안에서는 눈에 보이는 모든 것이 여러분의 것이고, 엔진이 여러분의 스타일과 절대 부딪히지 않습니다. shadcn/ui가 자신의 캐러셀을 구축하는 기반이 바로 이것이며, 이는 이 라이브러리의 적정 지점을 말해줍니다: 캐러셀 라이브러리처럼 보이는 게 아니라 *자기* 제품처럼 보이는 캐러셀을 원하는 팀들 말이죠.

대가는 슬라이딩을 넘어서는 모든 기능이 애드온이거나 직접 구현해야 한다는 점입니다: 자동재생과 클래스명은 공식 플러그인으로 제공되지만, 페이지네이션 점, 썸네일, 이펙트는 직접 작성해야 합니다.`,
      },
      {
        heading: '기능이 미리 갖춰지길 원한다면 Swiper를 선택하세요',
        body: `Swiper는 배터리 포함형 답입니다: 페이드, 큐브, 커버플로 이펙트, 가상 슬라이드, 줌, 패럴랙스, 썸네일 갤러리, a11y 모듈, 여러 스타일의 페이지네이션까지 — 직접 만드는 게 아니라 설정만 하면 됩니다. 이번 분기에 제품이 이 중 세 가지가 필요하다면 Swiper는 그 크기값을 몇 배로 뽑아냅니다.

대가는 Embla와 정반대입니다: Swiper의 DOM, 테마를 입혀야 할 CSS, React용으로 감싼 순수 JS 코어를 그대로 물려받아야 하며, 킬로바이트로도 표면적으로도 더 무겁습니다.`,
      },
      {
        heading: '둘 중 하나를 고르기 전에 던져야 할 질문',
        body: `두 라이브러리 모두 여러분이 *슬라이드*를 보여준다고 가정합니다 — 스냅과 위치 감각을 갖춘 채 한 번에 하나, 또는 한 페이지 분량씩. 진짜 "캐러셀"의 상당수는 전혀 그렇지 않습니다: 카테고리 행, 로고 스트립, 탭 바, 칩 필터 — 사용자가 훑어보며 고르는 클릭 가능한 항목의 행들입니다. 이런 것들은 네이티브 스크롤(모멘텀, 스크롤바, 휠, 접근성까지 공짜로)과 함께 어떤 항목이 화면에 보이는지 아는 것을 원합니다 — 그리고 Embla도 Swiper도 항목별 가시성을 모델링하지 않습니다, 슬라이드는 항목이 아니기 때문입니다.

이런 형태를 위한 세 번째 선택지가 있습니다: [react-horizontal-scrolling-menu](/) (≈5.7 kB)는 네이티브 스크롤을 그대로 타면서 \`useIsVisible\`, \`scrollToItem\`, 그리고 가장자리를 인식하는 화살표를 제공합니다. [Netflix 스타일 행](/netflix-row), [탭 스트립](/scrollable-tabs), [칩 바](/filter-chips)로 확인하거나, 둘과 비교한 [전체 비교표](/compare)를 확인하세요.`,
      },
    ],
  },

  reactSlickAlternatives: {
    meta: {
      title: '2026년 react-slick 대안',
      description:
        'react-slick에서 벗어나기: 진짜 캐러셀에는 Embla와 Swiper를, centerMode로 내비게이션을 흉내 낸 행에는 react-horizontal-scrolling-menu를. 정직한 마이그레이션 가이드.',
    },
    jsonLdHeadline:
      'react-slick 대안: 진짜 캐러셀은 어디로, centerMode 행은 어디로 옮겨야 하는가',
    name: 'react-slick 대안',
    blurb:
      '진짜 캐러셀은 어디로 옮길지 — 그리고 centerMode 행은 어디로 가야 할지.',
    title: 'react-slick 대안: 무엇을 만들었는지에 따라 이전하세요',
    lede: 'react-slick은 jQuery 시대의 slick 캐러셀을 React로 포팅한 것입니다. 여전히 동작은 하지만, 아키텍처가 훅보다 이전 세대이고, 릴리스가 뜸하며, 모든 빌드에 별도의 CSS 파일을 끌고 들어옵니다. 올바른 대체재는 기능보다 여러분의 사용 방식이 두 진영 중 어디에 속하는지에 더 좌우됩니다.',
    table: {
      headers: [
        '',
        'react-slick',
        'Embla',
        'Swiper',
        'react-horizontal-scrolling-menu',
      ],
      rows: [
        [
          '이것은 무엇인가',
          'jQuery slick의 React 포트',
          '헤드리스 캐러셀 엔진',
          '완전한 슬라이더 프레임워크',
          '네이티브 스크롤 기반 스크롤 메뉴',
        ],
        ['유지보수', '뜸함', '활발함', '활발함', '2018년부터 활발함'],
        ['번들 (min+gzip)', '≈15 kB + slick CSS', '≈8 kB', '≈40 kB', '≈5.7 kB'],
        [
          '별도 CSS 파일 필요',
          '필요 (2개)',
          '불필요',
          '필요 (코어)',
          '1개, 또는 shadcn 아이템을 통한 Tailwind',
        ],
        [
          '슬라이드 시맨틱 (스냅, 점, 페이드)',
          '있음',
          '있음',
          '있음',
          '없음 — 의도적으로',
        ],
        [
          '클릭 가능한 항목의 행',
          'centerMode로 억지로 구현',
          '엔진 위에 직접 구현',
          '결을 거슬러 설정',
          '핵심 사용 사례',
        ],
      ],
      note: '크기는 대략적인 코어 기준입니다. 마지막 열은 이 사이트 자체의 라이브러리입니다 — 표는 이를 숨기지 않고 그대로 밝힙니다.',
    },
    prose: [
      {
        heading: '진영 1: 진짜 캐러셀이었던 경우',
        body: `히어로 슬라이더, 이미지 갤러리, 후기 로테이터 등 slick의 점, 페이드, 자동재생이 디자인을 지탱하던 모든 곳. 진짜 캐러셀 엔진으로 이전하세요:

- **[Embla](/compare/embla-vs-swiper)** — 모든 것을 직접 스타일링하고 작은 헤드리스 코어를 원한다면. 정신적으로 "현대화된 slick"에 가장 가깝습니다.
- **Swiper** — slick의 기능 목록을 많이 활용했다면. slick의 모든 기능에는 대개 더 나은 Swiper 대응 기능이 있습니다.

\`slidesToShow\`/\`slidesToScroll\`은 Embla의 \`slidesInView\`/\`slidesToScroll\` 또는 Swiper의 \`slidesPerView\`/\`slidesPerGroup\`에 대응시키고, 화살표 위치를 잡는 CSS 오버라이드는 삭제해도 됩니다 — 두 후계자 모두 직접 버튼을 렌더링할 수 있게 해줍니다.`,
      },
      {
        heading: '진영 2: centerMode를 뒤집어쓴 내비게이션이었던 경우',
        body: `또 다른 slick 설치 사례는 조용한 쪽입니다: 카테고리, 로고, 날짜, 필터의 행을, slick이 이미 번들에 들어 있다는 이유만으로 \`centerMode\`, \`focusOnSelect\`, \`variableWidth\`로 캐러셀처럼 억지로 구부린 경우입니다. 신호는 여러분이 싸워야 했던 것들입니다: 드래그 후에 발생하는 클릭, 엉뚱한 타이밍의 화살표, 측정할 수 없던 항목, 원치 않던 스냅.

그 행은 사실 메뉴였습니다. [react-horizontal-scrolling-menu](/)는 centerMode가 흉내 내던 세 가지를 — [클릭한 항목을 중앙 정렬](/examples/center-on-click)하고, [드래그 지원](/examples/mouse-drag)과 함께 네이티브로 스크롤하며, [어떤 항목이 보이는지](/examples/simple) 알려주는 것을 — 슬라이더 엔진 없이 ≈5.7 kB로 해냅니다. 가장 흔한 두 가지 형태는 [스크롤 탭](/scrollable-tabs)과 [카테고리 레일](/category-rail) 페이지에서 확인하세요.`,
      },
      {
        heading: '어느 진영이든: 마이그레이션은 보기보다 작습니다',
        body: 'slick의 API 표면은 넓지만, 실제 설정을 감사해보면 빠르게 줄어듭니다: 대부분의 프로젝트는 손에 꼽을 정도의 prop만 사용합니다. 실제로 설정한 것들을 나열하고, 각 사용처가 어느 진영에 속하는지 판단한 뒤, 인스턴스 단위로 이전하세요 — 두 진영은 종종 하나의 코드베이스 안에 공존하며, 둘이 반드시 같은 라이브러리로 귀결되어야 한다는 규칙은 없습니다.',
      },
    ],
  },

  swiperAlternatives: {
    meta: {
      title: 'React를 위한 더 가벼운 Swiper 대안',
      description:
        'React에서 더 가벼운 Swiper 대안을 찾고 있나요? 진짜 캐러셀에는 Embla와 keen-slider를, 메뉴 형태의 행에는 react-horizontal-scrolling-menu를. 크기까지 비교했습니다.',
    },
    jsonLdHeadline:
      'React용 Swiper 대안: 더 가벼운 캐러셀, 그리고 메뉴 형태의 탈출구',
    name: 'Swiper 대안',
    blurb: '≈40 kB가 불만이라면: 더 가벼운 엔진, 그리고 메뉴 형태의 탈출구.',
    title: 'React용 Swiper 대안, 실제로 무엇을 피하려는지에 따라',
    lede: 'Swiper가 나빠서 떠나는 사람은 없습니다 — 존재하는 슬라이더 중 가장 완전하니까요. 사람들이 떠나는 이유는 무게(모듈 적용 전 기준 ≈40 kB) 때문이거나, DOM과 CSS를 그대로 물려받아야 하기 때문이거나, 애초에 자신의 "슬라이더"가 진짜 슬라이드가 아니었기 때문입니다. 각 불만에는 저마다 다른 최선의 답이 있습니다.',
    table: {
      headers: [
        '',
        'Swiper',
        'Embla',
        'keen-slider',
        'react-horizontal-scrolling-menu',
      ],
      rows: [
        ['번들 (코어, min+gzip)', '≈40 kB', '≈8 kB', '≈7 kB', '≈5.7 kB'],
        [
          '모델',
          '슬라이드, 배터리 포함형',
          '슬라이드, 헤드리스',
          '슬라이드, 최소 엔진',
          '네이티브 스크롤 행 안의 항목',
        ],
        [
          '이펙트와 모듈',
          '가장 풍부함',
          '플러그인 / 직접 구현',
          '일부 내장',
          '없음 — 대신 레시피 제공',
        ],
        [
          '제스처 레이어 소유 여부',
          '있음 (transform)',
          '있음 (transform)',
          '있음 (transform)',
          '없음 — 브라우저가 스크롤',
        ],
        [
          '항목별 가시성',
          '슬라이드 인덱스 이벤트',
          '슬라이드 인덱스 이벤트',
          '슬라이드 인덱스 이벤트',
          '내장 (useIsVisible)',
        ],
        [
          '교체하기 좋은 경우',
          '—',
          '어차피 모든 것을 직접 스타일링한다면',
          '최소한의 슬라이더, React 종속 없음',
          '"슬라이드"가 사실 클릭 가능한 항목이라면',
        ],
      ],
      note: '크기는 대략적인 코어 기준입니다 — Swiper는 가져오는 모듈에 따라 커지며, 이는 곧 다이어트한 Swiper 빌드가 평판보다 작을 수 있다는 뜻이기도 합니다.',
    },
    prose: [
      {
        heading: '킬로바이트에서 벗어나기: Embla 또는 keen-slider',
        body: `제품이 진짜 캐러셀이라면 — 스냅되고, 한 번에 한 페이지의 슬라이드만 보여준다면 — 가벼운 엔진들이 거의 그대로 대체될 수 있습니다:

- **[Embla](/compare/embla-vs-swiper)** (≈8 kB): 헤드리스, 뛰어난 물리 엔진, 퍼스트클래스 React 훅, shadcn/ui 캐러셀이 내부적으로 쓰는 엔진입니다. 모든 마크업과 CSS는 여러분이 직접 가져오는데, 그것이 바로 핵심입니다.
- **keen-slider** (≈7 kB): 프레임워크에 종속되지 않는 최소한의 엔진으로, 같은 슬라이더를 React와 비React 환경에 모두 배포해야 할 때 좋습니다.

둘 다 transform 기반 슬라이드 모델을 유지하므로 페이드나 커버플로 같은 이펙트는 직접 구현해야 합니다 — 그런 이펙트에 의존한다면, 다시 구현하는 것보다는 다이어트한 Swiper 빌드가 정직하게 더 나은 답입니다.`,
      },
      {
        heading: '슬라이드 모델에서 벗어나기: 메뉴 형태인 경우',
        body: `또 다른 탈출구는 Swiper의 슬라이드 시맨틱이 애초에 구조를 떠받치고 있지 않았던 구성을 위한 것입니다: 카테고리 행, 로고 월, 탭 스트립, 칩 바, 상품 레일. 신호는 \`slidesPerView: 'auto'\`와 \`freeMode: true\`를 함께 쓰는 설정입니다 — 이 조합은 Swiper에게 네이티브 스크롤을 흉내 내라고 요구하는 것입니다.

[react-horizontal-scrolling-menu](/) (≈5.7 kB)는 바로 그 네이티브 스크롤에, 브라우저가 제공하지 않는 부분들을 더한 것입니다: [항목별 가시성](/examples/simple), [scroll-to-item](/examples/scroll-to-item), 가장자리를 인식하는 화살표, 그리고 [클릭을 깨뜨리지 않는 드래그](/examples/mouse-drag). 이펙트도, 스냅도, 제스처 에뮬레이션도 없습니다 — [Netflix 행](/netflix-row), [탭](/scrollable-tabs), [칩 바](/filter-chips) 페이지, 또는 [전체 표](/compare)를 확인하세요.`,
      },
      {
        heading: '양쪽 방향 모두를 향한 공정한 경고',
        body: 'Swiper에서 벗어나 무게를 줄이려다가 자동재생, 페이지네이션, a11y 안내, 이펙트를 직접 구현하게 되면, 40 kB짜리 문제가 사람 한 달치 공수 문제로 바뀌는 셈입니다. 사용 범위가 정말로 부분집합일 때만 더 가벼운 엔진으로 교체하고, 슬라이드 시맨틱이 애초에 가짜였을 때만 스크롤 메뉴로 바꾸세요. Swiper의 깊이를 쓰고 있다면 Swiper를 유지하세요.',
      },
    ],
  },
};
