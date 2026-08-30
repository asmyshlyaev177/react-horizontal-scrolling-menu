// Korean (ko) — translation of en/manifest.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=ko source=en/manifest.ts source-blob=ed8adc8ba4ca3539df6b5d03d2463ff01904c27a status=translated
import type { ManifestCopy } from '../types.ts';

/**
 * 예제 페이지의 허브 카드 복사본. 슬러그와 그룹 id는 구조입니다 —
 * `lib/examples-manifest.ts`에 있으며, 여기서는 복사본이 아니라 키입니다.
 */
export const manifest: ManifestCopy = {
  groups: {
    Basics: '기본',
    'Position & scrolling': '위치와 스크롤',
    'Input & gestures': '입력과 제스처',
    'Dynamic items': '동적 항목',
    Layout: '레이아웃',
    Recipes: '레시피',
  },
  examples: {
    simple: {
      name: '시작하기',
      blurb: '최소 메뉴: 항목, 두 개의 화살표, 바로 쓸 수 있는 가시성.',
    },
    'one-item': {
      name: '화면당 항목 하나',
      blurb: '항목 하나 너비의 메뉴 — 카드 하나가 행을 채웁니다.',
    },
    'one-item-scroll': {
      name: '한 번에 한 항목 스크롤',
      blurb: '화살표가 전체 페이지가 아니라 항목 하나를 전진시킵니다.',
    },
    'bottom-arrows': {
      name: '메뉴 아래의 화살표',
      blurb: '화살표는 여러분의 컴포넌트 — 어디에든 놓을 수 있습니다.',
    },
    'center-on-click': {
      name: '클릭한 항목 가운데 정렬',
      blurb: 'scrollToItem에 inline: center — 스크롤 가능한 탭 패턴.',
    },
    'scroll-to-item': {
      name: 'id로 항목에 스크롤',
      blurb: 'apiRef로 메뉴 외부에서 내부에 접근합니다.',
    },
    'save-restore-position': {
      name: '스크롤 위치 저장과 복원',
      blurb: '언마운트와 페이지 새로고침을 넘어 스크롤 오프셋을 유지.',
    },
    'custom-transition': {
      name: '커스텀 스크롤 애니메이션',
      blurb: '프로그래밍적 스크롤에 나만의 이징과 시간을 가져옵니다.',
    },
    progress: {
      name: '스크롤 진행 표시기',
      blurb: '어떤 항목이 보이는지에 따라 움직이는 진행 바.',
    },
    'mouse-drag': {
      name: '마우스로 드래그해 스크롤',
      blurb: '항목 클릭은 여전히 동작하게 하는 마우스 드래그.',
    },
    'swipe-desktop': {
      name: '데스크톱에서 스와이프',
      blurb: '마우스 사용자를 위한 관성 스와이프.',
    },
    'mobile-swipe-only': {
      name: '모바일에서 화살표 숨기기',
      blurb: '작은 화면에서는 터치만으로 스크롤, 데스크톱에서는 화살표.',
    },
    'prevent-body-scroll': {
      name: '본문 스크롤 방지',
      blurb: '메뉴 위의 휠은 페이지가 아니라 메뉴를 스크롤합니다.',
    },
    'add-items': {
      name: '끝이 보이면 더 불러오기',
      blurb: '마지막 항목 가시성으로 움직이는 무한 추가.',
    },
    'add-item-and-scroll-to-it': {
      name: '항목 추가하고 스크롤',
      blurb: '필터 칩 패턴: 추가한 다음, 보이게 끌어옵니다.',
    },
    'items-animation': {
      name: '항목 들고 나기 애니메이션',
      blurb: '@formkit/auto-animate로 추가/제거 애니메이션.',
    },
    performance: {
      name: '5000개 항목도 빠름',
      blurb: '네이티브 스크롤은 확장됩니다 — 여기 가상화는 필요 없습니다.',
    },
    vertical: {
      name: '세로 메뉴',
      blurb: '같은 메뉴를, 위에서 아래로 스크롤.',
    },
    rtl: {
      name: '오른쪽에서 왼쪽',
      blurb: 'RTL이 방향을 뒤집고, 화살표와 페이징이 따릅니다.',
    },
    'infinite-loop': {
      name: '무한 루프',
      blurb: '공개 API에서 나오는 매끄러운 루프 — 라이브러리 변경 없음.',
    },
    autoplay: {
      name: '자동 재생',
      blurb: '접근 가능한 일시정지 동작을 갖춘 자동 전진 루프.',
    },
    'mui-scrollable-tabs': {
      name: 'MUI 너머의 스크롤 가능 탭',
      blurb:
        'MUI의 value/onChange 계약은 유지하고, 그 아래 스트립만 교체합니다.',
    },
  },
};
