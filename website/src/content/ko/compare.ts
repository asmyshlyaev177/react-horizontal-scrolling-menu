// Korean (ko) — translation of en/compare.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=ko source=en/compare.ts source-blob=c29839efeb7de75a4cfbad0342c7bfb7266a0666 status=translated
import type { CompareCopy } from '../types.ts';

export const compare: CompareCopy = {
  meta: {
    title: 'react-horizontal-scrolling-menu vs Swiper, Embla, react-slick',
    description:
      '솔직한 비교: 가로 스크롤 메뉴가 캐러셀 라이브러리를 이기는 경우와 그렇지 않은 경우. Swiper, Embla, keen-slider, react-slick을 나란히.',
  },
  jsonLdHeadline:
    '캐러셀인가 스크롤 메뉴인가? react-horizontal-scrolling-menu vs Swiper, Embla, keen-slider, react-slick',

  title: '캐러셀인가 스크롤 메뉴인가? 솔직한 비교',
  lede: 'Swiper, Embla, keen-slider, react-slick은 캐러셀 엔진입니다. 슬라이드 의미론, 스냅 물리, 효과를 얻기 위해 JavaScript로 스크롤을 다시 구현합니다. react-horizontal-scrolling-menu는 그중 하나가 아닙니다. 브라우저 네이티브 스크롤을 타고 항목별 가시성 추적을 더합니다. 어느 쪽을 원하는지는 무엇을 만드는지에 달려 있습니다. 그리고 캐러셀 사용의 상당 부분에 대한 솔직한 답은, 애초에 메뉴를 만들고 있었다는 것입니다.',

  table: {
    headers: [
      '',
      '이 라이브러리',
      'Swiper',
      'Embla',
      'keen-slider',
      'react-slick',
    ],
    rows: [
      [
        '무엇인가',
        '가시성 추적이 있는 스크롤 메뉴',
        '완전한 슬라이더/캐러셀 프레임워크',
        '헤드리스 캐러셀 엔진',
        '프레임워크 독립적 슬라이더 엔진',
        'jQuery slick 슬라이더의 React 포트',
      ],
      [
        '스크롤 엔진',
        '브라우저 네이티브 스크롤',
        'JS 트랜스폼 + 물리',
        'JS 트랜스폼 + 물리',
        'JS 트랜스폼 + 물리',
        'JS 트랜스폼 (CSS 전환)',
      ],
      [
        '번들 (코어, min+gzip)',
        '≈5.7 kB',
        '≈40 kB',
        '≈8 kB',
        '≈7 kB',
        '≈15 kB + slick CSS',
      ],
      [
        '화면에 어떤 항목이 있는가',
        '내장 — 항목별 useIsVisible',
        '슬라이드 인덱스 기반',
        '슬라이드 인덱스 이벤트',
        '슬라이드 인덱스 이벤트',
        '슬라이드 인덱스 기반',
      ],
      [
        '스냅, 효과, 물리',
        '없음 — 의도적으로',
        '풍부함 (fade, cube, coverflow…)',
        '플러그인 기반, 트윈 가능',
        '있음, 프리 모드 포함',
        'Fade, 센터 모드',
      ],
      [
        '루프 / 자동 재생',
        '공개 API 위의 레시피',
        '내장 프로퍼티',
        '플러그인',
        '내장 옵션',
        '내장 프로퍼티',
      ],
      [
        '스크롤바, 휠, 키보드 포커스',
        '네이티브 — 브라우저에서 무료로',
        '에뮬레이트 / 옵트인 모듈',
        '직접 구현 (헤드리스)',
        '직접 구현',
        '제한적',
      ],
      [
        '최적의 용도',
        '카테고리 행, 탭 스트립, 칩 필터',
        '전체 화면 슬라이더, 갤러리',
        '커스텀 캐러셀 (shadcn 기본값)',
        '최소한의 커스텀 슬라이더',
        '레거시 slick 마이그레이션',
      ],
    ],
    note: '번들 크기는 대략적인 코어 크기입니다. 크기만으로 결정하기 전에 최신 수치는 bundlephobia에서 확인하세요.',
  },

  prose: [
    {
      heading: '먼저, 진짜 질문',
      body: `**캐러셀**은 슬라이드를 보여줍니다. 한 번에 하나(또는 한 페이지)의 것을, 스냅, 효과, 그리고 "8개 중 3번째"라는 위치 감각과 함께요. **메뉴**는 사용자가 훑어보고 고르는 행을 보여줍니다. 카테고리 레일, 탭 스트립, 칩 바입니다. 캐러셀은 슬라이드 의미론을 원하고, 메뉴는 네이티브 스크롤을 원합니다 — 관성, 스크롤바, 휠, 터치, 키보드 포커스가 페이지의 나머지와 정확히 같게 동작하는 것 — 그리고 브라우저가 주지 않는 한 가지, 어떤 항목이 화면에 있는지 아는 것을 더한 것입니다.

전체 화면 이미지 슬라이더, 히어로 갤러리, 또는 스냅-투-슬라이드 물리가 있는 무언가를 만든다면, **캐러셀 라이브러리를 사용하세요 — Embla나 Swiper가 훌륭합니다**. 이 페이지는 다른 경우, 즉 모든 캐러셀 FAQ가 조용히 무시하는 경우를 위한 것입니다. 실제로는 결코 슬라이드가 아니었던, 클릭 가능한 것들의 행 말입니다.`,
    },
    {
      heading: 'vs Swiper',
      body: `Swiper는 현존하는 가장 완전한 슬라이더 프레임워크입니다. 효과(fade, cube, coverflow), 가상 슬라이드, 줌, 패럴랙스, 페이지네이션, 그리고 성숙한 생태계. 제공하는 것을 사용한다면 그 약 40 kB는 값을 합니다. 트랜스폼으로 스크롤을 다시 구현하므로, 네이티브 스크롤바, 휠 동작, 스크롤 접근성은 상속되는 기본값이 아니라 설정하는 에뮬레이션입니다.

- **Swiper를 선택**하세요. 이미지 중심 슬라이더, 효과, 또는 슬라이드처럼 느껴야 하는 것.
- **이 라이브러리를 선택**하세요. 그 "캐러셀"이 YouTube 스타일 칩 바나 Netflix 스타일 카테고리 행일 때. 약 34 kB 덜 쓰고 네이티브 스크롤을 얻으며, 항목별 \`useIsVisible\`까지 있습니다 — Swiper는 슬라이드가 항목이 아니기 때문에 이를 모델링하지 않습니다.`,
    },
    {
      heading: 'vs Embla',
      body: `Embla는 아름다운 물리와 일류 React 어댑터를 갖춘 헤드리스 캐러셀 엔진입니다. shadcn/ui가 캐러셀을 구축하는 토대이며, 진짜 캐러셀을 완전히 시각적으로 제어하고 싶을 때 올바른 기본값입니다. 헤드리스는 메뉴에는 양날의 검입니다. 선택 시 스크롤 인, 항목별 가시성, 화살표 비활성화, 포커스 관리를 모두 직접 조립해야 합니다.

- **Embla를 선택**하세요. 커스텀 디자인 캐러셀과 작은 크기의 스냅 물리.
- **이 라이브러리를 선택**하세요. 그 손수 만든 부분이 바로 핵심일 때. \`scrollToItem\`, \`useIsVisible\`, first/last 화살표 상태, \`apiRef\`가 동작 상태로 함께 제공됩니다.`,
    },
    {
      heading: 'vs keen-slider',
      body: 'keen-slider는 가볍고 프레임워크 독립적인 슬라이더 엔진입니다. 프레임워크 전반에서 의존성 하나로 끝내고 싶을 때 최소한의 커스텀 슬라이더로 좋은 선택입니다. 다른 것들과 마찬가지로 트랜스폼으로 제스처 레이어를 소유하며, API는 슬라이드 인덱스 중심입니다. 슬라이드에는 괜찮지만 "선택한 칩을 스크롤해 보이게 하고 무엇이 보이는지 알려줘"에는 어색합니다.',
    },
    {
      heading: 'vs react-slick',
      body: 'react-slick은 jQuery 시대의 slick 캐러셀을 React로 포팅한 것입니다. 여전히 동작하지만 별도의 CSS 파일을 끌어들이고, 아키텍처는 hooks 이전의 것이며, 유지보수도 드뭅니다. 이를 떠나는 팀은 대체로 두 진영으로 나뉩니다. 진짜 캐러셀(Embla나 Swiper로)과, slick이 이미 설치되어 있어 `centerMode`로 구부려진 내비게이션 행입니다. 후자 진영이 바로 이 라이브러리의 정확한 모양입니다. [가운데 정렬 선택](/examples/center-on-click), [한 번에 한 항목 이동](/examples/one-item-scroll), [드래그로 스크롤](/examples/mouse-drag)을 슬라이더 엔진 없이.',
    },
    {
      heading: '메뉴 쪽은 어떤 모습인가',
      body: `이 사이트의 모든 패턴은 라이브이며 서버 렌더링되고, 각각 완전한 소스가 함께 제공됩니다. [스크롤 가능한 탭](/examples/center-on-click), [필터 칩](/examples/add-item-and-scroll-to-it), [더 불러오기 행](/examples/add-items), 그리고 — 캐러셀 엔진이 필요하다고 여겨지는 두 기능 — [무한 루프](/examples/infinite-loop)와 [자동 재생](/examples/autoplay)은 각각 공개 API 위에서 약 60줄입니다.

- min+gzip 5.7 kB, TypeScript 우선, MIT, 월 약 34.7만 다운로드, 2018년부터 유지보수, React 16.8–19에서 하나의 안정적인 API.
- SSR 친화적: JavaScript가 하이드레이트되기 전에 이 행은 스크롤됩니다 — 이 페이지와 이 사이트의 모든 데모가 그 증명입니다.`,
    },
  ],

  links: {
    examples: '모든 예제 보기',
    storybook: 'Storybook에서 시험',
    github: 'GitHub',
  },
};
