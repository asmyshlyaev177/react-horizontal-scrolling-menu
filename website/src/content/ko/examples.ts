// Korean (ko) — translation of en/examples.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=ko source=en/examples.ts source-blob=60d5f83e262100978eb4d1dc9565659367d156c4 status=translated
import type { ExamplesCopy } from '../types.ts';

/** Copy for the example pages, keyed by the slugs in `examples-manifest.ts`. */
export const examples: ExamplesCopy = {
  'add-item-and-scroll-to-it': {
    meta: {
      title: 'React 필터 칩: 항목 추가하고 스크롤',
      description:
        'React 가로 스크롤러의 필터 칩: 항목을 추가하고, 렌더링된 뒤 apiRef와 scrollToItem으로 스크롤. 라이브 데모와 전체 소스 포함.',
    },
    title: '항목 추가하고 스크롤 — 필터 칩 패턴',
    lede: '사용자가 필터를 고르면 칩 바가 늘어나고, 새 칩은 오른쪽 끝 너머에 숨지 않고 화면에 나타나야 합니다. 함정은, 아직 렌더링되지 않은 요소로는 스크롤할 수 없다는 점. 이 예제는 작업을 클릭 핸들러와 이펙트로 나눕니다.',
    demoHint:
      '필터 추가를 클릭 — 칩이 끝에 나타나고 행이 스크롤해 보여줍니다. x는 칩을 제거합니다.',
    prose: [
      {
        heading: '동작 방식',
        body: '메뉴는 `apiRef`를 받아 컴포넌트 트리 밖에 완전한 API를 노출합니다. `addItem`은 두 가지를 합니다. 새 id를 `lastAdded` ref에 저장하고, 항목을 state에 추가합니다. 여기서 의도적으로 스크롤하지 않습니다 — 그 시점에 칩은 state일 뿐, DOM이 아니기 때문입니다.',
      },
      {
        heading: '스크롤을 이펙트에 두는 이유',
        body: '`getItemElementById`는 DOM에서 항목을 찾으므로, 스크롤은 React가 새 항목을 커밋한 뒤에만 가능합니다. `items`를 키로 한 `useEffect`가 정확히 그 시점에 실행되어 `lastAdded`를 읽고 지운 뒤 `apiRef.current.scrollToItem(el, ’smooth’, ’end’)`를 호출합니다. ref를 지우는 것이 중요합니다 — 다른 이유(선택, 화살표)의 재렌더링도 같은 이펙트에 도달하므로, 다시 스크롤해서는 안 됩니다.',
      },
      {
        heading: '참고',
        body: `
          - \`lastAdded\`는 state가 아니라 ref입니다. 쓰기 자체가 렌더링을 일으켜선 안 되며, 그 값은 바로 다음 이펙트 실행에만 의미가 있습니다.
          - \`’end’\`는 새 칩을 행의 오른쪽 끝에 맞춥니다. 가운데에 두려면 \`’center’\`도 같은 방식으로 동작합니다.
          - 여기의 화살표는 \`useLeftArrowVisible()\`과 \`useRightArrowVisible()\` 훅을 씁니다 — \`useIsVisible(’first’/’last’)\` 쌍의 짧은 형태입니다.
          - 스크롤바는 라이브러리의 \`scroll-container\` 클래스에 대한 일반 CSS로 숨깁니다. 스크롤 자체는 네이티브로 남습니다.
        `,
      },
    ],
  },

  'bottom-arrows': {
    meta: {
      title: '메뉴 아래의 캐러셀 화살표: React에서 커스텀 배치',
      description:
        'React에서 캐러셀 화살표를 행 아래에 배치: ScrollMenu의 Footer 프로퍼티가 메뉴 아래에 어떤 레이아웃이든(화살표 포함) 렌더링. 라이브 데모와 전체 소스 포함.',
    },
    title: '화살표를 메뉴 아래에 — 또는 레이아웃 어디에든',
    lede: '화살표는 내장 크롬이 아니라 여러분이 전달하는 컴포넌트입니다. 그래서 배치는 라이브러리 설정이 아니라 레이아웃 결정입니다. 이 예제는 `LeftArrow`나 `RightArrow`를 전혀 전달하지 않고, 두 버튼을 행 아래의 `Footer` 슬롯, 일반 콘텐츠 옆에 렌더링합니다.',
    demoHint:
      '화살표는 행 아래에 있습니다 — 같은 VisibilityContext를 읽으므로, 끝에서는 여전히 비활성화됩니다.',
    prose: [
      {
        heading: '동작 방식',
        body: '`ScrollMenu`는 `Footer` 컴포넌트를 받아 스크롤 컨테이너 아래, 항목들과 같은 `VisibilityContext.Provider` 안에 렌더링합니다. 스토리의 푸터는 텍스트와 두 개의 화살표 버튼을 담은 평범한 flex div입니다. 컨텍스트가 닿으므로 각 버튼은 `React.useContext(VisibilityContext)`를 호출해 사이드 슬롯에서 얻는 것과 정확히 같은 API를 받습니다 — 화살표 자체는 아무것도 변하지 않습니다.',
      },
      {
        heading: '화살표 상태, 늘 그대로',
        body: '`useLeftArrowVisible()`과 `useRightArrowVisible()`은 행이 이미 그 끝에 있는지 보고합니다. 스토리는 결과를 `disabled`에 매핑하고 버튼을 페이드아웃합니다. 클릭은 `scrollPrev()`와 `scrollNext()`를 호출합니다. 이 중 어느 것도 버튼이 어디에 마운트되었는지 알지도, 신경 쓰지도 않습니다.',
      },
      {
        heading: '참고',
        body: `
          - \`Header\`는 행 위쪽의 거울 슬롯으로, 계약은 같습니다.
          - 사이드의 \`LeftArrow\`/\`RightArrow\` 프로퍼티는 미리 배치된 변형일 뿐입니다 — 같은 화살표 컴포넌트가 어느 위치에서든 동작합니다.
          - 푸터는 화살표 전용이 아닙니다. \`VisibilityContext\`를 읽는 컴포넌트라면 거기서 완전한 API를 얻습니다.
          - 스토리의 \`onWheel\` 핸들러는 마우스 휠로 페이지를 넘기고, 터치패드 제스처는 네이티브 스크롤에 남겨 둡니다.
        `,
      },
    ],
  },

  autoplay: {
    meta: {
      title: '접근 가능한 일시정지 동작을 갖춘 React 캐러셀 자동 재생',
      description:
        'React 스크롤 메뉴의 자동 재생: useInterval이 apiRef를 통해 scrollNext를 호출하고, 호버·포커스·터치·동작 줄이기에서 일시정지. 라이브 데모와 전체 소스 포함.',
    },
    title: '접근 가능한 일시정지 동작을 갖춘 자동 재생',
    lede: '전진 부분은 한 줄입니다 — `apiRef`를 통해 `scrollNext()`를 호출하는 타이머로, 같은 무한 루프 코어 위에 얹습니다. 공학의 본체는 *언제 전진하지 않을지*에 있습니다. 호버, 터치, 키보드 포커스, 일시정지 버튼, 숨은 탭, 화면 밖 레일, 동작 줄이기 설정 — 모두가 각각 다른 이유로 타이머를 멈춥니다.',
    demoHint:
      '레일에 호버, 터치, 또는 Tab으로 들어가면 일시정지합니다. 일시정지 버튼은 재생을 누를 때까지 멈춥니다.',
    prose: [
      {
        heading: '동작 방식',
        body: '`useInterval(cb, active ? interval : null)`이 스케줄러 전체입니다. `active`는 네 개의 플래그 — 사용자 일시정지, 호버 일시정지, 포커스 일시정지, `prefers-reduced-motion` — 를 묶고, `null`을 넘기면 타이머를 완전히 제거합니다. 그래서 재개하면 포인터가 막 떠난 직후 사이클 중간에 발화하는 대신, 새롭고 완전한 간격이 시작됩니다.',
      },
      {
        heading: '실행을 거부하는 틱',
        body: '활성 타이머조차 스크롤 전에 확인합니다. 틱은 `api.menuVisible.current`와 `document.visibilityState`를 읽고, 어느 하나가 아니오라면 건너뜁니다. 숨은 탭은 IntersectionObserver를 얼리므로, 거기서 스크롤하면 맹목적으로 전진하고 텔레포트 장부가 어긋납니다. 페이지 밖으로 스크롤된 레일은 애초에 움직이면 안 됩니다. 건너뛴 틱은 비용이 없습니다 — 다음 틱이 다시 확인합니다.',
      },
      {
        heading: '일시정지 표면',
        body: '호버와 터치는 래퍼 핸들러로, 키보드 포커스는 `onFocusCapture`/`onBlurCapture`로, `prefers-reduced-motion`은 자동 재생을 완전히 꺼 둡니다. 명시적 일시정지 버튼이야말로 자동 전진 콘텐츠에 WCAG 2.2.2가 실제로 요구하는 것입니다 — 호버 일시정지만으로는 충족되지 않습니다.',
      },
      {
        heading: '참고',
        body: `
          - 일시정지 토글은 호버 래퍼 바깥에 둡니다 — 안에 두면 일시정지 클릭이 호버 일시정지도 일으켜, 버튼이 무언가를 하는 모습을 결코 관찰할 수 없습니다.
          - 루프는 무한 루프 예제와 같은 \`useInfiniteLoop\` 복제-텔레포트 훅에서 옵니다. 자동 재생이 더하는 것은 타이머와 일시정지 플래그뿐입니다.
          - 스크롤 애니메이션은 브라우저의 네이티브 스무스 스크롤입니다 — 기본 \`noPolyfill\`에서는 \`transitionDuration\`이 효과가 없습니다.
        `,
      },
    ],
  },

  'mouse-drag': {
    meta: {
      title: 'React 드래그 스크롤: 클릭을 깨지 않는 가로 메뉴',
      description:
        'React 가로 목록의 마우스 드래그 스크롤: 5px 임계값이 드래그와 클릭을 구분해 항목이 클릭 가능하게 유지. 라이브 데모와 완전한 소스 포함.',
    },
    title: '마우스로 드래그해 스크롤 — 클릭을 깨지 않고',
    lede: '터치 사용자는 가로 목록을 네이티브로 스크롤하지만, 마우스 사용자는 배선이 필요합니다. 누르고, 드래그하고, 놓기. 어려운 부분은 행을 움직이는 게 아닙니다. 순진한 구현이 드래그를 놓을 때마다 우발적 항목 클릭으로 바꾼다는 점입니다. 이 예제는 작은 `DragDealer` 클래스와 세 개의 마우스 프로퍼티로 둘을 분리합니다.',
    demoHint:
      '행의 아무 곳이나 잡고 드래그하세요. 항목은 여전히 클릭 가능합니다 — 드래그 뒤의 클릭은 억제됩니다.',
    prose: [
      {
        heading: '동작 방식',
        body: '`ScrollMenu`는 커링된 마우스 핸들러를 노출합니다 — `onMouseDown`, `onMouseUp`, `onMouseMove`는 각각 API 객체를 받아 일반 이벤트 핸들러를 반환합니다. `DragDealer` 인스턴스는 앵커 좌표 하나를 추적합니다. 이동할 때마다 델타를 곧장 `scrollContainer.current.scrollLeft`에 적용합니다. 나머지는 네이티브 스크롤이 합니다 — 트랜스폼도, 물리도 없고, 스크롤바는 실제로 남습니다.',
      },
      {
        heading: '클릭이 계속 동작하는 이유',
        body: '드래그는 포인터가 5px를 넘게 움직인 뒤에야 시작되므로, 평범한 클릭은 절대 스크롤하지 않습니다. 반대 방향은 고전적인 버그입니다. 항목의 `onClick`은 `mouseup` 뒤에 발화하므로, 카드 위에서 드래그를 놓으면 선택됩니다. `dragStop`은 applying 플래그를 즉시 지우지만 `dragging`은 한 애니메이션 프레임 더 유지합니다 — 클릭 핸들러가 이를 확인하고 빠져나옵니다.',
      },
      {
        heading: '가져갈 가치가 있는 세부',
        body: `
          - \`dragStart\`는 이전 제스처의 보류 중인 리셋을 취소합니다 — 없으면 빠른 두 번째 드래그가 낡은 델타를 적용할 수 있습니다.
          - 래퍼의 \`onMouseLeave\`도 \`dragStop\`을 호출하므로, 드래그 중 행을 떠나도 드래그 상태에 갇히지 않습니다.
          - 터치는 이 중 어느 것도 필요 없습니다 — 컨테이너가 실제 스크롤 컨테이너라 스와이프는 이미 동작합니다.
        `,
      },
    ],
  },

  'save-restore-position': {
    meta: {
      title: 'React 스크롤 위치 보존: 재마운트나 뒤로가기에서 복원',
      description:
        'onUpdate마다 스크롤 오프셋을 sessionStorage에 저장하고 onInit에서 복원해, 재마운트와 새로고침을 넘어 위치를 유지. 라이브 데모와 전체 소스 포함.',
    },
    title: '스크롤 위치 저장과 복원',
    lede: '가로 레일은 언마운트할 때마다 오프셋을 잊습니다. 경로를 떠났다 돌아오거나, 섹션을 접으면 시작 지점으로 튕깁니다. 이 예제는 사용자가 스크롤할 때 오프셋을 저장하고 마운트 시 다시 써서, 메뉴가 떠난 자리에 정확히 다시 나타나게 합니다.',
    demoHint:
      '행을 어딘가로 스크롤하고 메뉴를 언마운트한 뒤 다시 마운트하세요 — 레일이 같은 오프셋으로 돌아옵니다.',
    prose: [
      {
        heading: '동작 방식',
        body: '기능 전체는 두 콜백이 짊어집니다. `onUpdate`는 사용자가 스크롤하며 가시성 상태가 변할 때 발화하고, `savePos`는 `api.scrollContainer.current.scrollLeft`를 읽어 `sessionStorage`에 씁니다. 다음 마운트에서 `onInit`이 저장값을 그대로 `scrollLeft`에 대입합니다 — 평범한 프로퍼티 쓰기라 복원은 사용자 앞에서 애니메이션을 재생하는 대신 즉각적입니다.',
      },
      {
        heading: '재마운트, 새로고침, 뒤로가기 탐색을 견디기',
        body: '`sessionStorage`는 컴포넌트보다 오래 삽니다. 클라이언트 사이드 경로 변경, 조건부 렌더링, 전체 페이지 새로고침 모두 저장된 오프셋으로 돌아오고, 값은 탭별이라 두 탭이 서로 덮어쓰지 않습니다. 히스토리 탐색을 위해 스토리는 `window.history.scrollRestoration = ’manual’`도 설정해, 뒤로/앞으로에서 브라우저 자체의 스크롤 복원이 수동 복원과 싸우지 않게 합니다.',
      },
      {
        heading: '참고',
        body: `
          - 원시 \`scrollLeft\`로 복원하는 것은 픽셀 단위로 정확하고 어떤 항목이 있는지 신경 쓰지 않습니다 — 기억할 id도, 찾을 것도 없습니다.
          - 스토리의 새로고침 버튼은 메뉴의 \`key\`를 바꿔 강제 재마운트합니다. 데모의 언마운트/재마운트 토글은 같은 테스트를 명시한 것입니다.
          - 리셋은 저장 키를 제거할 뿐입니다 — 다음 마운트는 첫 방문처럼 0에서 시작합니다.
        `,
      },
    ],
  },

  'one-item': {
    meta: {
      title: 'React 화면당 항목 하나 슬라이더: 전체 너비 스크롤 항목',
      description:
        'React 가로 스크롤 메뉴의 전체 너비 항목: 항목 래퍼에 min-width 100%가 화면당 항목 하나 슬라이더를 만듦. 라이브 데모와 완전한 소스 포함.',
    },
    title: '화면당 항목 하나: 같은 메뉴에서 나온 전체 너비 슬라이더',
    lede: '켜야 할 슬라이더 모드는 없습니다. 메뉴는 CSS가 말하는 대로 배치하므로, 한 규칙 — 라이브러리 항목 래퍼의 `min-width: 100%` — 이 같은 컴포넌트를 슬라이더로 바꿉니다. 모든 카드가 화면을 채우고, 평범한 페이징 화살표가 정확히 한 항목씩 전진합니다.',
    demoHint:
      '화살표로 페이지 넘기기 — 각 슬라이드는 정확히 한 화면 너비이고, 각 슬라이드가 자신의 가시성을 보고합니다.',
    prose: [
      {
        heading: '동작 방식',
        body: '스토리는 `.react-horizontal-scrolling-menu--item` — 라이브러리가 각 자식 주위에 렌더링하는 div — 을 대상으로 하는 스타일 컨테이너로 메뉴를 감싸고, `minWidth: ’100%’`와 flex 가운데 정렬을 줍니다. 각 래퍼가 스크롤 컨테이너 전체에 걸치므로 카드 하나가 화면에 꼭 맞습니다. 화살표는 표준입니다. `scrollPrev()`와 `scrollNext()`는 가시 그룹만큼 페이지를 넘기고, 가시 그룹이 항목 하나일 때 페이지와 항목은 같은 것입니다.',
      },
      {
        heading: '화살표와 휠',
        body: '화살표 상태는 `useLeftArrowVisible()`과 `useRightArrowVisible()`에서 옵니다 — 행이 그 끝에 있으면 각각 true를 반환하고, 스토리는 `disabled`에 넣고 버튼을 페이드아웃합니다. `onWheel` 프로퍼티는 이벤트와 함께 API 객체를 받으므로, 세로 마우스 휠이 `deltaY`의 부호로 행을 페이지 넘깁니다. 먼저 터치패드를 감지합니다. 수평 델타나 15 미만의 수직 델타는 터치패드 제스처로 보고 네이티브 스크롤에 남깁니다.',
      },
      {
        heading: '참고',
        body: [
          '- 각 자식의 `itemId`가 유일한 하드 요구사항입니다 — 항목이 이걸로 추적되고 스크롤됩니다.',
          '- 카드는 여전히 `useIsVisible(itemId, true)`를 호출합니다. 화면당 항목 하나에서는 화면 밖 슬라이드가 모두 `visible: false`를 보고합니다.',
          '- 스크롤바는 스크롤 컨테이너의 일반 CSS(`scrollbar-width: none` + WebKit 의사 요소)로 숨깁니다 — 그 선택은 라이브러리가 아니라 여러분의 것입니다.',
          '- 너비는 전적으로 스타일시트에 있습니다. 100%를 50%로 바꾸면 화면당 둘 슬라이더입니다. 라이브러리는 아무것도 측정하지 않습니다.',
        ].join('\n'),
      },
    ],
  },

  performance: {
    meta: {
      title: 'React 가로 목록 성능: 5000개 항목',
      description:
        '네이티브 스크롤로 5000개 항목을 렌더링하는 React 가로 메뉴: 메모화된 카드, 하나의 IntersectionObserver, 가상화 없음. 라이브 데모와 전체 소스 포함.',
    },
    title: '한 행에 5000개 항목 — 가상화 불필요',
    lede: '수백 개 항목에서의 통상적인 조언은 가상화입니다. 이 예제는 5000개의 실제 DOM 노드를 하나의 `ScrollMenu`에 렌더링하고 응답성을 유지합니다 — 네이티브 overflow 스크롤이 이동을, IntersectionObserver가 관찰을 맡고, React는 대체로 아무것도 하지 않습니다.',
    demoHint:
      '레일을 드래그하거나 화살표로 페이지 넘기기 — 5000장 카드 모두 실제 DOM 노드입니다. 윈도우잉된 것은 없습니다.',
    prose: [
      {
        heading: '일이 일어나지 않는 곳',
        body: '스크롤은 절대 React에 들어오지 않습니다. 레일은 진짜 overflow 컨테이너입니다. 휠과 터치는 네이티브로 스크롤하고, 드래그 배선은 `scrollContainer.current.scrollLeft`에 대입할 뿐입니다 — state도, 프레임마다 재렌더링도 없습니다. 가시성은 5000개 항목 요소를 모두 관찰하는 단일 IntersectionObserver 인스턴스입니다. 콜백은 배치로 도착하고, `useIsVisible`로 구독한 컴포넌트만 자신의 항목이 뒤집힐 때 갱신합니다. 항목별 스크롤 계산은 어디에도 없습니다.',
      },
      {
        heading: '스토리가 조정하는 것',
        body: '`Card`는 `selected`와 `title`을 비교하는 컴퍼레이터와 함께 `React.memo`로 감싸, 카드 하나를 선택해도 나머지 4999개를 조정하지 않습니다. 가시성 판독은 `useDeferredValue`를 통과합니다. 페이지 점프 뒤에는 수백 개 항목이 한꺼번에 상태를 뒤집는데, 지연시키면 그 폭주를 원인이 된 상호작용의 크리티컬 패스에서 빼냅니다. `noPolyfill={true}`는 프로그램적 스크롤이 스무스 스크롤 폴리필 대신 브라우저의 `scrollIntoView`를 쓰게 합니다. 드래그는 mouse-drag 예제와 같은 `DragDealer` 패턴입니다.',
      },
      {
        heading: '이 페이지가 인정하는 절충',
        body: '위의 데모 레일은 서버 렌더링되지 않습니다. 5000장 카드는 대략 1메가바이트의 HTML로 직렬화되므로, 레일은 높이가 맞춰진 플레이스홀더 뒤에서 클라이언트 전용으로 마운트되고 레이아웃 시프트가 없습니다. 그것이 이 규모의 실제 대가입니다 — 브라우저는 5000개의 라이브 노드를 편안히 다루지만, 그것을 SSR 페이로드로 보내는 것은 별개의 결정입니다. 수만 노드 어딘가에서 메모리와 초기 렌더 비용도 따라잡습니다. 거기서부터 윈도우잉은 선택이 아닙니다.',
      },
      {
        heading: '참고',
        body: [
          '- 5000장 카드의 DOM은 마운트 시 한 번만 구축됩니다 — `React.memo`가 이후 부모 렌더링을 모든 카드의 no-op으로 바꿉니다.',
          '- 화살표는 대략 한 뷰포트씩 페이지를 넘기므로, 화살표로만 레일 전체를 횡단하는 것은 설계상 느립니다 — 드래그 플릭이나 `scrollToItem` 점프가 이 규모에 더 맞습니다.',
          "- 화살표는 여전히 `useIsVisible('first')`와 `useIsVisible('last')`로 동작합니다 — 10개 항목 메뉴와 같은 관찰 메커니즘을, 500배의 항목 수에서.",
        ].join('\n'),
      },
    ],
  },

  progress: {
    meta: {
      title: '캐러셀의 React 가로 스크롤 진행 표시기',
      description:
        'React 가로 메뉴의 진행 바: onUpdate를 구독하고, 가시 항목을 세고, 현재 페이지를 도출. 라이브 데모와 완전한 스토리 소스 포함.',
    },
    title: '가로 메뉴에 스크롤 진행 표시기 추가',
    lede: '스크롤바를 숨긴 캐러셀도 "얼마나 남았나?"라는 답을 사용자에게 빚지고 있습니다. 메뉴는 이미 알고 있습니다. 모든 항목의 가시성을 추적하므로, 위치는 세는 문제입니다. 스토리는 그 데이터로 번호 매긴 페이지 버튼과 좌우 남은 항목 수를 렌더링합니다. 이 데모는 같은 계산을 진행 바로 농축합니다.',
    demoHint:
      '행을 스크롤, 드래그, 또는 화살표로 — 바가 페이지마다 차고 카운터가 현재 위치를 보여줍니다.',
    prose: [
      {
        heading: '동작 방식',
        body: '표시기는 `Footer` 프로퍼티로 전달되어, `ScrollMenu`가 `VisibilityContext`를 쓸 수 있는 메뉴 내부에 렌더링합니다. 컨텍스트에서 `items` — 가시성 추적 뒤의 맵 — 를 꺼내 `items.subscribe(’onUpdate’, cb)`로 구독합니다. 그 이벤트는 IntersectionObserver 콜백마다 발화하므로, 스토리는 `items.getVisible()`을 읽기 전에 디바운스(타임아웃 + `requestAnimationFrame`)합니다.',
      },
      {
        heading: '가시 항목에서 페이지 번호로',
        body: '가시 항목 수가 페이지 크기입니다. 총 페이지 수는 `Math.ceil(items.size / visibleItemsLen)`, 현재 페이지는 마지막 가시 항목의 `index`에서 옵니다. 스토리는 그것을 클릭 가능한 페이지 버튼으로 바꿉니다 — 각각 `scrollToItem(getItemByIndex(itemInd))`를 호출해 id를 모른 채 위치로 항목을 지정하고 — 같은 숫자에서 왼쪽·오른쪽 항목 수를 도출합니다. 데모의 바는 `currentPage / totalPages`를 너비 퍼센트로 한 것뿐입니다.',
      },
      {
        heading: '참고',
        body: [
          '- 픽셀로 측정하는 것은 없습니다 — 계산이 전적으로 가시성 데이터 위에서 돌므로, 항목 너비가 달라도 계속 동작합니다.',
          '- 뷰포트를 리사이즈하면 페이지 크기도 따릅니다. 더 많은 항목이 들어가고, `getVisible()`이 더 많은 항목을 반환하고, 페이지 수는 다음 갱신에서 재계산됩니다.',
          '- 이펙트는 `items.unsubscribe`를 호출하고 보류 중인 타이머를 지우는 정리를 반환합니다 — 빼먹으면 언마운트된 푸터가 계속 호출됩니다.',
          '- 첫 관찰자 보고 전에는 `getVisible()`이 비어 있습니다. 스토리는 그때까지 `null`을 반환하고, 데모는 빈 트랙을 그립니다.',
        ].join('\n'),
      },
    ],
  },

  'scroll-to-item': {
    meta: {
      title: 'React 가로 목록에서 요소로 스크롤: scrollToItem',
      description:
        'id로 React 가로 목록을 임의 항목으로 스크롤: onInit이 api를 건네고 scrollToItem이 대상을 뷰로. 라이브 데모와 완전한 소스 포함.',
    },
    title: '가로 목록의 특정 항목으로 스크롤',
    lede: '행으로 딥링크하기. 채팅은 진행 중인 대화에, 갤러리는 공유한 사진에 열립니다. 스크롤 컨테이너는 라이브러리 내부에 있지만, 그 DOM으로의 ref는 필요 없습니다 — `onInit`이 api를 건네고, `scrollToItem`이 위치를 잡습니다.',
    demoHint:
      '레일은 Tokyo에서 마운트하지 않습니다 — onInit이 곧장 quito로 점프합니다. 다른 곳으로 드래그한 뒤 재마운트해 다시 그곳에 착지하는 것을 보세요.',
    prose: [
      {
        heading: '동작 방식',
        body: '`ScrollMenu`는 `onInit` 콜백을 받아, 메뉴가 렌더링되고 항목을 측정한 뒤, 내부의 `VisibilityContext`가 제공하는 것과 같은 api 객체를 건네며 호출합니다. 핸들러는 `getItemElementById(id)`로 요소를 찾아 `scrollToItem(item, ’auto’, ’start’)`에 넘깁니다. `onInit`은 측정 후에만 발화하므로, 렌더링된 항목에 대한 검색이 비어 돌아올 수 없습니다 — `setTimeout`도, 재시도 루프도 없습니다.',
      },
      {
        heading: '동작과 정렬',
        body: '스토리는 `’auto’`와 `’start’`를 전달합니다. `’auto’`는 애니메이션 없이 점프하는데, 초기 위치에 원하는 것이 바로 그것입니다 — 사용자가 레일을 첫 항목에서 보는 일이 없습니다. `’start’`는 항목의 왼쪽 끝을 레일에 맞춥니다. 클릭 구동 스크롤에서는 같은 호출이 `’smooth’`와 `’center’`를 취합니다 — 그것이 아래의 클릭 가운데 정렬 예제입니다.',
      },
      {
        heading: '참고',
        body: [
          '- 슬롯은 알지만 id는 모를 때, `getItemElementByIndex`가 위치 기반 대안입니다.',
          '- 건네는 id는 항목의 `itemId` — 가시성 추적에 메뉴가 쓰는 것과 같은 키입니다.',
          '- 데모는 새 `key`로 메뉴를 재마운트해 동작을 재생합니다. 새 마운트마다 `onInit`이 다시 실행됩니다.',
        ].join('\n'),
      },
    ],
  },
  'center-on-click': {
    meta: {
      title: 'React 스크롤 가능 탭: 클릭으로 활성 탭 가운데 정렬',
      description:
        'Material UI 없이 React 스크롤 가능 탭: 탭을 클릭하면 scrollToItem(el, "smooth", "center")로 가운데 정렬. 라이브 데모와 완전한 스토리 소스 포함.',
    },
    title: '클릭한 항목 가운데 정렬 — 스크롤 가능 탭 패턴',
    lede: '모든 탭 스트립이 필요로 하고 어떤 스크롤 컨테이너도 공짜로 주지 않는 동작. 가장자리 근처의 탭을 클릭하면 중앙으로 미끄러져 양옆 이웃을 보여줍니다. 여기서는 API 호출 하나 — Material UI도, 측정도, 스크롤 계산도 없습니다.',
    demoHint:
      '어느 쪽 가장자리 근처의 탭을 클릭 — 활성화되고 행의 가운데로 자신을 정렬합니다.',
    prose: [
      {
        heading: '동작 방식',
        body: '`handleItemClick`은 커링되어 있습니다. `itemId`를 받아 API 객체를 기대하는 함수를 반환합니다. 클릭은 먼저 id를 `selected` state에 저장한 뒤, `api.getItemElementById(itemId)`로 실제 DOM 요소를 찾아 `api.scrollToItem(item, ’smooth’, ’center’)`에 넘깁니다. 클릭 하나, 효과 둘: 탭이 선택되고 가운데 정렬됩니다.',
      },
      {
        heading: 'API는 어디서 오나',
        body: '부모 컴포넌트는 API ref를 결코 보유하지 않습니다. 각 `Card`는 `VisibilityContext` — `ScrollMenu`의 어떤 자식에게도 제공 — 에서 완전한 API를 읽어 클릭 핸들러로 넘깁니다: `onClick(visibility)`. 대신 메뉴 외부에서 스크롤해야 한다면, 그것이 scroll-to-item 예제의 `apiRef` 패턴입니다.',
      },
      {
        heading: '참고',
        body: [
          '- `scrollToItem`의 세 번째 인자는 `scrollIntoView`의 `inline` 옵션과 같은 값을 취합니다 — `’start’`, `’center’`, `’end’`.',
          '- 카드는 포커스 가능하고(`role="button"`, `tabIndex=0`) `onKeyDown`에서 Enter를 처리해, 키보드 사용자도 같은 선택과 가운데 정렬을 얻습니다.',
          '- `onWheel` 핸들러는 마우스 휠 델타를 `scrollNext`/`scrollPrev`에 매핑하지만 터치패드에서는 물러납니다 — 수평 델타나 아주 작은 수직 델타는 제스처로 보고 네이티브로 남깁니다.',
          '- 화살표는 `useIsVisible(’first’)`와 `useIsVisible(’last’)` 단축형으로 스스로 비활성화합니다.',
        ].join('\n'),
      },
    ],
  },

  'swipe-desktop': {
    meta: {
      title: '데스크톱에서 마우스 스와이프: React 캐러셀 플릭 제스처',
      description:
        'React 가로 메뉴의 데스크톱 스와이프: 마우스 눌림/놓임을 추적하고, 50px를 넘는 놓임이 스무스한 미끄러짐으로 다음 페이지로 플릭. 데모와 전체 소스 포함.',
    },
    title: '데스크톱에서 스와이프: 메뉴를 페이지 넘기는 마우스 플릭',
    lede: '드래그 스크롤은 행을 커서와 1:1로 움직입니다. 이것은 다른 마우스 제스처, 플릭입니다. 누르고, 최소 50px 움직이고, 놓으면 — 메뉴가 `scrollNext`나 `scrollPrev`로 그 방향으로 한 페이지 미끄러집니다. 행은 포인터를 전혀 따라가지 않습니다. 미끄러짐은 라이브러리의 스무스한 프로그램적 스크롤이며, 그것이 놓는 순간에 관성감을 줍니다.',
    demoHint:
      '행의 아무 곳이나 누르고 왼쪽 또는 오른쪽으로 최소 50px 움직인 뒤 놓으세요 — 메뉴가 한 페이지 미끄러집니다. 짧은 움직임은 아무것도 하지 않습니다.',
    prose: [
      {
        heading: '동작 방식',
        body: '`useSwipe` 훅은 `ScrollMenu`가 기대하는 세 개의 커링된 마우스 프로퍼티를 반환합니다 — 각각 API 객체를 받아 일반 이벤트 핸들러를 반환합니다. `onMouseDown`은 포인터의 `clientX`를 ref에 고정하고, `onMouseMove`는 끝 좌표를 계속 덮어쓰고, `onMouseUp`은 둘을 비교합니다. `minSwipeDistance`(50px)를 넘는 수평 차이라면, 왼쪽 플릭에서 `apiObj.scrollNext()`, 오른쪽에서 `apiObj.scrollPrev()`를 호출합니다.',
      },
      {
        heading: '클릭에 특별한 처리가 필요 없는 이유',
        body: '드래그 스크롤 예제에서는 카드 위에서 드래그를 놓으면 클릭되므로, `dragging` 플래그가 제스처보다 한 프레임 더 오래 살아야 했습니다. 플릭은 문제 전체를 비켜갑니다. 50px 임계값 미만에서 `onMouseUp`은 아무것도 하지 않으므로 클릭은 그냥 클릭입니다 — 그리고 넘어서면 포인터는 어차피 누른 카드를 떠나 있습니다. 플래그도, 억제된 핸들러도 없습니다.',
      },
      {
        heading: '스토리가 터치와 휠에 더하는 것',
        body: '스토리는 네이티브 터치 패닝도 고정합니다. React 18+는 `touchmove` 리스너를 패시브로 등록하므로, `preventDefault`는 비패시브 리스너에서만 동작합니다. 이펙트가 `apiRef`(`ref.current.scrollContainer.current`)를 통해 스크롤 컨테이너에 도달해 `{ passive: false }`로 리스너를 붙입니다. 그 `onWheel` 핸들러도 휴리스틱과 함께 메뉴를 페이지 넘깁니다 — 0이 아닌 `deltaX`나 작은 `deltaY`는 터치패드로 보고 내버려 둡니다.',
      },
      {
        heading: '참고',
        body: [
          '- 좌표는 state가 아니라 ref에 있습니다 — state에서 `mousemove`를 추적하면 픽셀마다 재렌더링됩니다.',
          '- 데모는 `mousedown`에서 끝 좌표를 다시 고정하므로, 이전 제스처의 남은 위치가 새 스와이프에 절대 더해지지 않습니다.',
          '- `minSwipeDistance`는 취향껏 조정하세요. 낮을수록 더 민첩하고, 높을수록 엉성한 클릭을 허용합니다. 이 레시피의 터치 변형은 20px를 씁니다.',
        ].join('\n'),
      },
    ],
  },

  'mobile-swipe-only': {
    meta: {
      title: '모바일에서 캐러셀 화살표 숨기기: 터치 전용 React 스크롤',
      description:
        'React 가로 메뉴에서 데스크톱은 화살표, 모바일은 터치 전용 스크롤: pointer: coarse matchMedia 확인이 숨김. 라이브 데모와 전체 소스 포함.',
    },
    title: '모바일에서 화살표 숨기기 — 작은 화면의 터치 전용 스크롤',
    lede: '터치 화면에서 화살표 버튼은 죽은 무게입니다. 스와이프는 네이티브이고, 엄지가 탭 대상을 가리고, 각 화살표가 행의 너비를 먹습니다. 데모는 마우스 사용자를 위해 화살표를 남기고 포인터가 손가락일 때 언마운트합니다. 스토리는 더 나아가 네이티브 패닝을 명시적인 스와이프-투-페이지 제스처로 대체합니다.',
    demoHint:
      '휴대폰에서 열거나 DevTools에서 터치 에뮬레이션을 켜세요 — 화살표가 사라지고 스와이프가 모든 일을 합니다.',
    prose: [
      {
        heading: '데모가 화살표를 숨기는 방법',
        body: '`LeftArrow`와 `RightArrow`는 선택적 프로퍼티입니다 — `undefined`를 넘기면 슬롯이 전혀 렌더링되지 않아, CSS로 숨길 것도, 탭 순서에 남을 버튼도 없습니다. 전환은 이펙트의 `matchMedia(’(pointer: coarse)’)` 확인입니다. 서버는 포인터 종류를 알 수 없으므로, 첫 페인트는 화살표를 넣은 데스크톱 우선이고, 거친 포인터가 확인되면 하이드레이션이 그것을 제거합니다. `change` 리스너가 라이브로 유지합니다 — DevTools 장치 에뮬레이션은 새로고침 없이 뒤집습니다.',
      },
      {
        heading: '스토리가 터치에서 하는 일',
        body: '스토리의 `useSwipe` 훅은 자유 패닝을 페이지 넘김으로 바꿉니다. 커링된 `onTouchStart`, `onTouchMove`, `onTouchEnd` 프로퍼티는 각각 API 객체를 받습니다. start는 끝 좌표를 리셋하고 `targetTouches[0].clientX`를 기록하며, move는 그것을 추적하고, end는 이동 거리를 잽니다. `minSwipeDistance`(20px)를 넘으면 `apiObj.scrollPrev()`나 `apiObj.scrollNext()`를 호출합니다 — 손가락 속도와 무관하게 스와이프마다 스무스하게 한 페이지입니다.',
      },
      {
        heading: '네이티브 터치 스크롤 억제',
        body: '페이지 넘김이 유일한 움직임이 되려면 브라우저 자체의 패닝을 멈춰야 하고, React 18+는 `touchmove` 리스너를 패시브로 등록해 `preventDefault`가 무시됩니다. 스토리의 이펙트는 `apiRef`(`ref.current.scrollContainer.current`)를 통해 실제 스크롤 요소에 도달해 `{ passive: false }`로 자신의 리스너를 붙입니다. 그곳에서 호출이 동작합니다.',
      },
      {
        heading: '참고',
        body: [
          '- SSR 기본값은 의도적으로 고르세요. 화살표를 먼저 렌더링하는 것은 크롤러와 데스크톱 사용자에게 유리하고, 터치 장치는 하이드레이션 직후 그것을 잃습니다.',
          '- `(pointer: coarse)`는 화면 크기가 아니라 입력을 대상으로 합니다 — 좁은 데스크톱 창은 화살표를 유지하고, 태블릿은 그렇지 않습니다.',
          '- 화살표만 숨기고 네이티브 스와이프를 유지하고 싶다면(데모의 동작), 스토리의 `touchmove` 이펙트를 건너뛰세요 — 자유 패닝과 숨은 화살표는 잘 공존합니다.',
          '- 터치 임계값은 20px, 데스크톱 플릭의 50px에 대비됩니다 — 마우스 변형은 swipe-on-desktop 예제를 보세요.',
        ].join('\n'),
      },
    ],
  },

  'infinite-loop': {
    meta: {
      title: 'React 무한 루프 스크롤 메뉴: 매끄러운 캐러셀',
      description:
        '캐러셀 라이브러리 없이 React 매끄러운 루프 캐러셀: 양 끝 복제와 스크롤 안정 시 scrollLeft 텔레포트 한 번. 데모와 전체 소스 포함.',
    },
    title: '공개 API 위에 지은 무한 루프 메뉴',
    lede: '고전적인 복제-텔레포트 캐러셀 트릭을, 라이브러리 변경 없이 구현합니다. 행을 양 끝으로 복제하고, 스크롤이 복제 영역 안에서 안정되면 `scrollLeft`가 정확히 루프 한 바퀴만큼 점프합니다. 점프 양쪽의 프레임이 동일하므로 아무것도 움직인 것처럼 보이지 않습니다. 화살표, 휠, 터치, 마우스 드래그 모두 이음새를 건넙니다.',
    demoHint:
      '어느 방향으로든 계속 가세요 — 화살표, 휠, 터치, 드래그로 — 행은 결코 끝나지 않습니다.',
    prose: [
      {
        heading: '동작 방식',
        body: '`getSlides`는 항목을 행의 양 끝으로 복사합니다. `itemId`는 유일해야 하므로 복제에는 접미사가 붙습니다 — 왼쪽은 `-lc`, 오른쪽은 `-rc` — 한편 실제 id는 제목·선택·클릭을 위해 `realId`로 유지합니다. `useInfiniteLoop`가 나머지를 묶습니다. `normalize()`는 첫 실제 항목과 그 오른쪽 복제의 `offsetLeft`에서 루프 길이를 재고, 위치가 복제 영역에 들어갈 때마다 `scrollLeft`를 정확히 그 거리만큼 이동합니다. 순수 기하이고, 멱등입니다 — 고칠 것이 없을 때 호출해도 아무것도 하지 않습니다.',
      },
      {
        heading: '텔레포트가 발화하는 때',
        body: '스크롤 중간의 점프는 브라우저와 눈에 띄게 싸우므로, `normalize`는 스크롤이 안정될 때 실행됩니다. 컨테이너의 네이티브 `scrollend` 리스너(`containerRef` 프로퍼티로 도달)에, `scrollend`를 발화하지 않는 Safari를 위한 150ms 디바운스 `onScroll` 폴백을 덧붙입니다. 누가 무엇을 보기 전에 점프가 하나 더 있습니다. 레이아웃 이펙트가 초기 `scrollLeft`를 페인트 전에 첫 실제 항목으로 맞춰, 페이지가 왼쪽 복제에서 열리는 일이 없습니다.',
      },
      {
        heading: '드래그 중 이음새 건너기',
        body: '마우스 드래그 콜백은 각 델타를 `scrollLeft`에 더하고, 제스처 안에서 바로 그 자리에서 `loop.normalize()`를 호출합니다. 그것 없이는 복제 영역으로 드래그하면 텔레포트까지 드래그 끝을 기다려야 합니다 — 있으면, 이음새를 무한히 드래그해도 결코 눈치채지 못합니다.',
      },
      {
        heading: '참고',
        body: [
          '- 여기의 화살표는 커스텀이고 항상 활성입니다. 표준 `first`/`last` 훅은 가장 바깥 항목을 추적하는데, 여기서는 그것이 복제입니다 — 이음새에서 비활성으로 깜빡입니다.',
          '- 카드는 쌍합집합 가시성을 표시합니다 — 항목은 자신이나 어느 한 복제가 보일 때 보이는 것으로 셉니다. 텔레포트 뒤 요소별 플래그가 한 프레임 낡아 헤더를 깜빡이기 때문입니다.',
          '- 한쪽에 두 페이지 분량의 복제. 영역은 전체 뷰포트를(점프 주위의 동일 프레임을) 여유 있게 덮어야 해서, 이음새에 걸친 페이지의 Next 클릭이 행 끝에서 끼는 일이 없습니다.',
          '- 여기 쓰인 모든 것 — `containerRef`, `onScroll`, `itemId`, 커링된 마우스 프로퍼티 — 은 공개 API입니다.',
        ].join('\n'),
      },
    ],
  },

  simple: {
    meta: {
      title: 'React 가로 스크롤 메뉴: 시작하기 예제',
      description:
        '최소한의 react-horizontal-scrolling-menu 구성: itemId가 있는 항목, VisibilityContext를 읽는 두 화살표, 항목별 가시성 추적. 전체 소스 포함.',
    },
    title: '시작하기: React의 가로 스크롤 메뉴',
    lede: '가장 작은 유용한 구성: 카드 행, 화살표 버튼 두 개, 그리고 이 라이브러리의 본질 — 모든 카드가 화면에 있는지 자신을 안다는 것. 컴포넌트 하나, 필수 프로퍼티 하나, 스타일시트 임포트 하나.',
    demoHint:
      '행을 스크롤 — 화살표는 끝에서 비활성화되고, 각 카드가 자신의 가시성을 추적합니다.',
    prose: [
      {
        heading: '동작 방식',
        body: '`ScrollMenu`는 자식을 네이티브 스크롤 컨테이너 안에 렌더링하고 각각을 IntersectionObserver로 관찰합니다. 유일한 계약은 `itemId` — 모든 자식의 유일한 프로퍼티로, 항목을 추적·검색·스크롤하는 방식입니다. 어떤 자식이나 화살표 안에서든 `VisibilityContext`가 완전한 API를 건넵니다.',
      },
      {
        heading: '가시성 훅',
        body: '카드는 `useIsVisible(itemId)`를 호출해 자신의 재화 상태를 구독합니다 — 스크롤 리스너도, 위치 계산도 없고, 가시성이 변할 때 영향받은 카드만 재렌더링됩니다. 화살표는 `first`와 `last` 단축형으로 행의 양 끝에서 자신을 비활성화합니다.',
      },
      {
        heading: '참고',
        body: [
          '- `styles.css`는 별도 임포트입니다 — JS 번들이 CSS를 주입하는 일은 없습니다.',
          '- 항목 너비는 여러분의 CSS입니다. 메뉴는 아무것도 측정하지 않고 210바이트의 레이아웃 스타일만 제공합니다.',
          '- `useIsVisible(itemId, true)`의 두 번째 인자는 관찰자가 보고하기 전에 쓰는 값 — 그리고 메뉴를 서버 렌더링한다면 서버가 렌더링하는 값입니다.',
        ].join('\n'),
      },
    ],
  },

  vertical: {
    meta: {
      title: '화살표가 있는 React 세로 스크롤 메뉴',
      description:
        'react-horizontal-scrolling-menu를 세로로: flex-column 스크롤 컨테이너, 유계 높이, Header/Footer를 통한 위아래 화살표. 라이브 데모와 소스 포함.',
    },
    title: '세로 스크롤 메뉴 — 같은 컴포넌트를 CSS로 돌림',
    lede: '`vertical` 프로퍼티는 없고, 필요도 없습니다. 메뉴는 네이티브 스크롤 컨테이너 안의 flex 행이므로, 아래로 향하게 하는 것은 CSS 오버라이드 몇 개입니다. 가시성 추적, 화살표 훅, `scrollPrev`/`scrollNext` 모두 새 축에서 계속 동작합니다.',
    demoHint:
      '열 위에서 휠을 굴리거나 화살표를 쓰세요 — Up과 Down은 ScrollMenu의 Header와 Footer입니다. 행은 뷰를 떠날 때 흐려집니다.',
    prose: [
      {
        heading: '오버라이드 둘과 높이 경계 하나',
        body: '스토리는 라이브러리의 두 클래스 이름을 재스타일합니다. 스크롤 컨테이너는 기본 `max-content` 대신 `flex-direction: column`, `overflow-y: auto`, `height: initial`을 얻고, 래퍼는 `height: 100%`를 얻어 부모의 고정 높이가 그대로 스크롤 경계가 됩니다. 그것이 세로 모드의 전부입니다. 스토리는 emotion으로 오버라이드를 적용하고, 이 페이지의 데모는 대신 `wrapperClassName`과 `scrollContainerClassName` 프로퍼티로 Tailwind 유틸리티를 넘깁니다 — 어떤 스타일 경로든 동작하고, 클래스 이름은 안정적입니다.',
      },
      {
        heading: '화살표가 Header와 Footer가 됨',
        body: "`LeftArrow`/`RightArrow` 슬롯은 레일 옆에 렌더링됩니다 — 열에는 잘못된 자리입니다. `ScrollMenu`는 위아래에 렌더링되는 `Header`와 `Footer` 컴포넌트도 받고, 스토리는 거기에 Up과 Down 버튼을 마운트합니다. 그것들은 평범한 `VisibilityContext` 소비자입니다. `useIsVisible('first', true)`는 맨 위에서 Up을 비활성화하고, `useIsVisible('last', false)`는 맨 아래에서 Down을 비활성화합니다. 클릭은 세 번째 인자를 넘깁니다 — `scrollPrev(undefined, undefined, 'end')`와 `scrollNext(undefined, undefined, 'start')` — `scrollIntoView`의 `block` 위치입니다. `'end'`는 이전 항목을 아래쪽 끝에 두고(온전한 한 페이지 위로), `'start'`는 다음 항목을 맨 위에 둡니다(온전한 한 페이지 아래로). 기본 `'nearest'`에서는 각 클릭이 다음 행을 겨우 뷰로 밀어 넣을 뿐입니다.",
      },
      {
        heading: '스크롤을 열 안에 유지',
        body: "`scrollIntoView`는 대상의 스크롤 가능한 조상을 모두 움직이고, 페이지도 그중 하나입니다 — 그래서 열 안의 `block` 정렬 점프는 문서 전체를 끌고 갑니다. 그 이동을 멈추는 옵션이 `boundary`로, 네 번째 인자로 넘깁니다: `scrollNext(undefined, undefined, 'start', { boundary })`에 메뉴 자신의 `scrollContainer.current`를 넘기면 행만 스크롤하고 나머지는 움직이지 않습니다. `boundary`를 이해하는 것은 폴리필뿐이므로 `ScrollMenu`에 `noPolyfill={false}`가 필요합니다 — 위의 데모는 둘 다 넘깁니다. 가로 메뉴는 이에 마주치는 일이 드뭅니다. 기본 `block: 'nearest'`는 애초에 페이지에 세로 움직임을 요구하지 않기 때문입니다.",
      },
      {
        heading: '가시성에는 축이 없다',
        body: '`useIsVisible`은 IntersectionObserver가 받치고, 교차는 두 차원에서 측정됩니다 — 행은 위아래 가장자리를 가로지르며, 가로 항목이 양쪽에서 하는 것과 정확히 같은 방식으로 상태를 보고합니다. 데모는 뷰 밖 행을 흐리게 해 이를 보여주고, 훅의 `defaultValue` 인자로 처음 네 행을 서버에서 칠해진 가시 상태로 둡니다.',
      },
      {
        heading: '참고',
        body: [
          '- 고정되는 유일한 치수는 패널의 인라인 높이입니다. 래퍼의 `height: 100%`가 그것을 스크롤 컨테이너까지 내려보냅니다.',
          '- 휠과 터치는 열을 네이티브로 스크롤합니다 — `overflow-y: auto`가 실제 스크롤 컨테이너로 만들기 때문입니다. 화살표는 편의이지 메커니즘이 아닙니다.',
          '- `scrollPrev`/`scrollNext`의 두 번째 인자는 `inline`(수평) 위치입니다 — 세로 메뉴가 신경 쓰는 것은 `block`이며, 스토리가 명시적으로 넘기는 이유입니다.',
        ].join('\n'),
      },
    ],
  },

  rtl: {
    meta: {
      title: 'React 가로 스크롤 RTL: 오른쪽에서 왼쪽 메뉴',
      description:
        'React의 오른쪽에서 왼쪽 가로 스크롤 메뉴: RTL 프로퍼티가 스크롤 방향과 페이징을 뒤집고, 화살표가 양쪽을 맞바꿈. 라이브 데모와 전체 소스 포함.',
    },
    title: '오른쪽에서 왼쪽 가로 메뉴',
    lede: '아랍어나 히브리어 인터페이스에서는 행이 오른쪽 끝에서 시작해 왼쪽으로 자라야 합니다. 불린 프로퍼티 하나가 스크롤 컨테이너를 뒤집습니다. 남은 실제 작업은 "다음"이 왼쪽을 가리킬 때 화살표가 무엇을 의미할지 결정하는 것뿐입니다.',
    demoHint:
      '스위치를 뒤집으세요 — 행이 반대쪽 가장자리에서 다시 시작하고 화살표가 역할을 맞바꿉니다.',
    prose: [
      {
        heading: '동작 방식',
        body: '`RTL={true}`는 스크롤 컨테이너를 오른쪽에서 왼쪽 모드로 둡니다. 첫 항목이 오른쪽 끝에 앉고, 스크롤은 왼쪽으로 전진합니다. 논리는 모두 논리로 남습니다 — `useIsVisible(’first’)`는 여전히 데이터의 첫 항목을 뜻하고, `scrollNext()`는 여전히 마지막을 향해 움직입니다 — 화면 방향만 뒤집힙니다.',
      },
      {
        heading: '화살표는 슬롯을 맞바꾸고, 논리는 맞바꾸지 않음',
        body: '`LeftArrow` 프로퍼티는 항상 화면 왼쪽에 렌더링됩니다. RTL에서는 그쪽이 "다음"이 사는 곳이므로, 스토리는 슬롯에 맞바꾼 요소를 넘깁니다: `LeftArrow={RTL ? <RightArrow /> : <LeftArrow />}`. 컴포넌트 자체는 논리를 유지합니다 — `scrollPrev`에 연결된 쪽은 여전히 `useIsVisible(’first’)`로 비활성화됩니다 — 바뀌는 것은 화면 위치와 라벨뿐입니다.',
      },
      {
        heading: '참고',
        body: [
          '- 스토리는 `noPolyfill={true}`를 넘기므로, 프로그램적 스크롤은 번들된 폴리필 대신 브라우저의 네이티브 스무스 스크롤을 씁니다.',
          '- `scrollPrev(’smooth’, ’end’)`와 `scrollNext(’smooth’, ’start’)`는 명시적 정렬을 넘깁니다 — 두 번째 인자는 `scrollToItem`이 취하는 것과 같은 `start/center/end` 집합입니다.',
          '- 스토리는 체크박스에서 `RTL`을 라이브로 토글합니다 — 프로퍼티는 그냥 state이고, 메뉴에 빌드 시점에 설정되는 것은 없습니다.',
        ].join('\n'),
      },
    ],
  },

  'add-items': {
    meta: {
      title: 'React 가로 무한 스크롤: 끝에서 더 불러오기',
      description:
        'React의 가로 무한 스크롤: onUpdate가 api.items.last().visible을 확인하고 로더 항목으로 다음 배치를 추가. 라이브 데모와 완전한 소스 포함.',
    },
    title: '끝이 뷰로 들어오면 항목을 더 불러오기',
    lede: '스크롤 리스너 없는 가로 무한 스크롤. 메뉴는 이미 어떤 항목이 보이는지 알므로, "사용자가 끝에 도달했나"는 그냥 질문입니다 — 마지막 항목이 화면에 있나? `onUpdate`가 스크롤마다 묻고, 답이 예이면 다음 배치를 추가합니다.',
    demoHint:
      '오른쪽 끝으로 스크롤 — 로더 카드가 나타나고 다음 배치가 도착합니다. 데모는 30개 항목에서 멈춥니다.',
    prose: [
      {
        heading: '동작 방식',
        body: '`onUpdate`는 항목 가시성이 변할 때마다 발화합니다. 핸들러는 `api.items.last()?.visible`을 읽습니다 — 라이브러리가 모든 항목을 `itemId`로 추적하고 항목별 가시성 플래그를 유지하므로, 끝 감지는 조회 한 번이면 되고 자체 IntersectionObserver도 스크롤 위치 계산도 없습니다. `pushNewItems`는 페치를 흉내 냅니다. 1초 타임아웃, 항목 5개 추가, 끝입니다.',
      },
      {
        heading: '페치 지키기',
        body: '가시성 갱신은 몰려서 도착하므로, 핸들러는 반복 호출에 안전해야 합니다. `loading` 플래그가 멱등하게 만듭니다. `onUpdate`와 `pushNewItems` 둘 다 그것을 확인하고, 첫 트리거만 페치를 시작합니다. 같은 플래그가 `Loader` 컴포넌트를 실제 메뉴 항목(자체 `itemId` 포함)으로 렌더링하고, 마운트 시 `scrollIntoView()`를 호출해 배치가 로드되는 동안 행의 끝을 뷰에 유지합니다.',
      },
      {
        heading: '참고',
        body: [
          '- 오른쪽 화살표는 요소로 전달됩니다. `RightArrow={<RightArrow disabled={...} />}` — 컴포넌트와 요소 형태 둘 다 동작하고, 요소 형태는 부모가 항목 상한 같은 프로퍼티를 넘길 수 있게 합니다.',
          '- 그 화살표는 상한에 도달하고 마지막 항목이 보일 때만 비활성화됩니다 — 상한 전에는 끝에 도달한다는 것은 항목이 더 온다는 뜻입니다.',
          '- `newItemsLimit`은 이 데모를 24개 항목에서 멈춥니다. 실제 코드에서 대응하는 신호는 API가 페이지를 소진하는 것입니다.',
        ].join('\n'),
      },
    ],
  },
  'custom-transition': {
    meta: {
      title: 'React의 커스텀 스크롤 애니메이션: 이징과 시간',
      description:
        'React의 프로그램적 스크롤을 위한 커스텀 이징과 시간: transitionBehavior가 목표 위치를 건네고 당신이 scrollLeft를 애니메이션. 라이브 데모와 소스 포함.',
    },
    title: '커스텀 스크롤 애니메이션: 나만의 이징과 시간',
    lede: '네이티브 스무스 스크롤은 브라우저가 고른 하나의 속도와 하나의 곡선만 줍니다. 프로그램적 스크롤을 나머지 모션 디자인에 맞춰야 할 때, `noPolyfill={false}`가 제어를 넘깁니다 — 메뉴가 레일의 행선지를 계산하고, 당신의 코드가 `scrollLeft`를 그곳까지 몰아갑니다.',
    demoHint:
      '화살표를 클릭하고 시간을 바꿔보세요 — 2500ms에서는 ease-in-out-cubic 곡선이 잘 보입니다. 애니메이션 중간의 클릭은 이전 것을 취소합니다.',
    prose: [
      {
        heading: '동작 방식',
        body: '기본적으로 메뉴는 네이티브 `scrollIntoView`로 스크롤하고 두 전환 프로퍼티를 무시합니다. `noPolyfill={false}`로 설정하면 프로그램적 스크롤이 scroll-into-view-if-needed 폴리필을 거칩니다. 폴리필은 목표를 계산해 지시로 당신의 `transitionBehavior`에 넘깁니다 — 움직여야 할 스크롤 가능 조상마다 `{ el, top, left }` 액션 하나입니다. 여기서는 메뉴가 경계로 넘기므로 항상 스크롤 컨테이너뿐입니다. 그다음 `animateScroll`이 매 `requestAnimationFrame`마다 `el.scrollLeft`를 목표로 전진시키며, 선택한 시간에 걸쳐 `easeInOutCubic`으로 진행을 매핑합니다.',
      },
      {
        heading: '진행 중인 애니메이션 중단',
        body: '두 번째 화살표 클릭은 애니메이션 중간에 착지할 수 있습니다. 스토리는 요소별 보류 프레임을 `WeakMap`에 두어, 새 호출이 옛 `requestAnimationFrame` 루프를 취소하고 둘이 `scrollLeft`를 놓고 싸우게 두지 않습니다. 또 각 애니메이션이 시작점을 요소의 현재 `scrollLeft`에서 읽으므로, 새 애니메이션은 중단된 것이 멈춘 곳에서 정확히 이어받습니다.',
      },
      {
        heading: '참고',
        body: [
          '- 여기 이징 함수에 묶인 것은 없습니다 — 목표 위치만 있으면 어떤 곡선이나 애니메이션 라이브러리도 동작합니다.',
          '- 타입은 `transitionBehavior`를 `ScrollBehavior` 문자열로 기술하지만, 값은 그대로 scroll-into-view-if-needed에 `behavior` 콜백으로 전달됩니다 — 그래서 소스에 캐스트가 있습니다.',
          '- 스토리는 같은 시간 state를 `transitionDuration`과 애니메이션 자체 둘 다에 연결해, 둘이 어긋나지 않게 합니다.',
        ].join('\n'),
      },
    ],
  },

  'prevent-body-scroll': {
    meta: {
      title: '휠에서 페이지 스크롤 방지: React 가로 메뉴',
      description:
        '페이지는 그대로 두고 마우스 휠로 React 가로 메뉴를 스크롤: 호버에서 토글되는 네이티브 비패시브 휠 리스너. 라이브 데모와 전체 소스 포함.',
    },
    title: '휠로 메뉴를 스크롤 — 페이지는 스크롤하지 않고',
    lede: '마우스 휠 아래의 가로 메뉴는 어색합니다. 휠은 페이지를 스크롤하고 행은 가만히 있습니다. 수정은 둘로 나뉩니다 — 휠 틱을 페이지 넘김으로 바꾸는 `onWheel` 핸들러와, 아래 페이지가 움직이지 않게 하는 네이티브 비패시브 리스너. 후반부는 React만으로는 할 수 없습니다.',
    demoHint:
      '행 위에 포인터를 두고 휠을 돌리세요 — 행은 페이지를 넘기고, 페이지는 가만히 있습니다. 행을 벗어나면 휠이 다시 페이지를 스크롤합니다.',
    prose: [
      {
        heading: '휠을 페이지 넘김으로 바꾸기',
        body: '`ScrollMenu`의 `onWheel` 프로퍼티는 API 객체와 휠 이벤트와 함께 호출됩니다. 실제 마우스 휠은 거친 단계로 Y만의 델타를 보고하므로, 핸들러는 `deltaY`가 음수면 `scrollNext`, 그렇지 않으면 `scrollPrev`를 호출합니다 — 틱마다 행을 페이지 넘깁니다. 그 전에 이벤트가 터치패드 제스처처럼 보이는지 확인합니다. 조금이라도 `deltaX`가 있거나 `deltaY`가 15 미만인 경우입니다.',
      },
      {
        heading: '페이지 잠금에 네이티브 리스너가 필요한 이유',
        body: "React 핸들러 안에서 `preventDefault`를 호출하는 것이 페이지를 멈추는 자명한 방법처럼 보입니다 — 그러나 그것은 조용히 아무것도 하지 않습니다. React가 휠 리스너를 패시브로 등록하고, 패시브 리스너는 이벤트 취소가 금지되어 있기 때문입니다. 그래서 `usePreventBodyScroll`은 React를 우회합니다. `mouseenter`에서 `document.addEventListener('wheel', preventDefault, { passive: false })`를 실행하고, `mouseleave`에서 리스너를 다시 제거합니다. 포인터가 메뉴 위에 있는 동안 모든 휠 이벤트는 `document`까지 버블링해, 거기서 기본 동작 — 페이지 스크롤 — 이 취소됩니다. `useEffect` 정리는 언마운트에서 `enableScroll`을 호출해 페이지가 잠긴 채 남지 않게 합니다.",
      },
      {
        heading: '터치패드 탈출구',
        body: '두 손가락 패닝도 휠 이벤트로 도착하고, 컨테이너는 그것들로 네이티브로 스크롤합니다 — document 리스너는 그것을 죽여 버립니다. 터치패드 휴리스틱에 맞는 이벤트에서 핸들러는 `stopPropagation`을 호출하고 반환합니다. 이벤트가 document 리스너에 도달하지 않아 네이티브 패닝이 살아남습니다. 터치패드를 감지할 신뢰할 방법은 없습니다. 델타 휴리스틱은 스토리의 정직한 추측이고, 실무에서 버팁니다.',
      },
      {
        heading: '참고',
        body: [
          '- 브라우저가 document 레벨 휠 리스너를 기본으로 패시브로 만든 것은 정확히 페이지가 스크롤을 버벅이지 않게 하기 위함입니다 — `passive: false`는 `preventDefault`를 다시 합법으로 만드는 명시적 옵트아웃입니다.',
          '- 휠 위로는 앞으로, 휠 아래로는 뒤로 페이지를 넘깁니다 — 그것이 스토리의 매핑입니다. 반대로 하려면 `scrollNext` / `scrollPrev` 분기를 맞바꾸세요.',
          '- 터치 장치는 이 중 어느 것도 실행하지 않습니다. `mouseenter`가 없고, 행 스와이프는 처음부터 네이티브 스크롤입니다.',
          '- 잠금은 `mouseenter`와 `mouseleave` 사이에만 존재하므로, 포인터가 레일을 떠나는 순간 페이지 나머지는 정상적으로 스크롤됩니다.',
        ].join('\n'),
      },
    ],
  },

  'one-item-scroll': {
    meta: {
      title: 'React에서 한 번에 한 항목 스크롤: 정밀한 캐러셀 화살표',
      description:
        '화살표 클릭마다 React 캐러셀을 항목 하나 전진: scrollToItem과 getNextElement가 전체 페이지 대신 카드 하나씩 이동. 라이브 데모와 전체 소스 포함.',
    },
    title: '전체 페이지 대신 한 번에 한 항목 스크롤',
    lede: '기본적으로 화살표는 페이지를 넘깁니다. 보이는 모든 것이 미끄러져 나가고 다음 그룹이 미끄러져 들어옵니다. 이 예제는 그것들을 스텝 — 클릭마다 카드 하나 — 으로 재배선하고, 변경 전체는 화살표의 `onClick`이 호출하는 것뿐입니다. 같은 메뉴, 같은 항목, 다른 스크롤 대상.',
    demoHint:
      '화살표를 클릭 — 행은 페이지가 아니라 카드 하나를 전진합니다. 화살표는 끝에서 비활성화됩니다.',
    prose: [
      {
        heading: '동작 방식',
        body: '`getNextElement()`는 가시 그룹을 지난 첫 항목을 반환하고, `getPrevElement()`는 그 바로 앞의 것을 반환합니다. 오른쪽 화살표는 `scrollToItem(visibility.getNextElement(), ’smooth’, ’end’)`를 호출합니다 — 그 항목을 컨테이너의 끝 가장자리에 맞추면 뷰에 들이기에 꼭 필요한 만큼만 스크롤되고, 행이 정확히 카드 하나 움직입니다. 왼쪽 화살표는 그 거울입니다. 이전 요소를 `’start’`에 맞춥니다.',
      },
      {
        heading: '정렬이 트릭의 전부',
        body: '표준 `scrollNext()`는 같은 다음 요소를 내부에서 해결하지만 시작 가장자리에 맞춥니다 — 뷰가 가시 그룹 전체를 지나 그 항목을 맨 앞에 둡니다. `ScrollLogicalPosition` 인자 하나가 페이지 넘김과 스텝의 차이입니다. `scrollToItem`의 세 번째 인자는 표준 scroll-into-view의 `inline` 정렬이고, 두 번째는 동작으로 여기서는 `’smooth’`입니다.',
      },
      {
        heading: '참고',
        body: [
          '- 화살표 상태는 `’first’`와 `’last’` 단축형을 씁니다. `useIsVisible(’first’, true)`가 시작에서 왼쪽 화살표를, `useIsVisible(’last’, false)`가 끝에서 오른쪽 화살표를 비활성화합니다.',
          '- 양 끝에서 `getNextElement()`는 undefined를 반환하고 `scrollToItem`은 조용히 아무것도 하지 않으므로, 활성 화살표도 과스크롤할 수 없습니다.',
          '- 스토리의 `onWheel` 핸들러는 휠 노치마다 여전히 전체 뷰를 페이지 넘깁니다 — 스텝은 화살표의 동작이지, 전역 모드가 아닙니다.',
          '- 항목 클릭은 손대지 않습니다. 카드는 자신의 `onClick`으로 선택을 토글하며, 화살표가 어떻게 스크롤하는지와는 독립적입니다.',
        ].join('\n'),
      },
    ],
  },

  'items-animation': {
    meta: {
      title: 'React에서 목록 항목 추가·제거 애니메이션',
      description:
        'React 가로 목록에서 항목을 추가·제거·셔플하고, ScrollMenu의 containerRef 프로퍼티를 통해 @formkit/auto-animate이 애니메이션. 라이브 데모와 완전한 소스 포함.',
    },
    title: 'auto-animate으로 항목을 들이고 내고 제자리로',
    lede: '가로 목록에 추가하면 새 항목이 톡 튀어나오고, 제거하면 이웃이 탁 붙습니다. `@formkit/auto-animate`은 단일 부모 ref로 둘 다 고칩니다 — 그리고 `ScrollMenu`의 `containerRef` 프로퍼티가 그것이 필요한 바로 그 요소를 건넵니다.',
    demoHint:
      '추가, 제거, 셔플 — 입장, 퇴장, 재정렬 모두 애니메이션됩니다. 메뉴 자체에는 애니메이션 코드가 없습니다.',
    prose: [
      {
        heading: '동작 방식',
        body: '`useAutoAnimate()`는 애니메이션할 요소의 직접 부모에 놓여야 하는 ref를 반환합니다. `ScrollMenu` 안에서 그 부모는 스크롤 컨테이너입니다. 전달한 각 자식은 item div로 감싸이고, 그 item div들이 컨테이너의 직접 자식입니다. 스토리는 ref를 그대로 통과시킵니다 — `<ScrollMenu containerRef={parent}>` — auto-animate이 거기서 이어받습니다. 추가된 항목은 이즈인하고, 제거된 항목은 애니메이션으로 빠져나가고, 재정렬된 항목은 새 자리로 미끄러집니다. 메뉴 자신은 애니메이션되고 있음을 결코 알지 못합니다.',
      },
      {
        heading: '추가, 제거, 셔플',
        body: '세 제어 모두 items 배열에 대한 평범한 `setState` 호출입니다 — `addItems`는 하나를 추가하고, `removeItems`는 마지막을 떨어뜨리고, `shuffle`은 복사본에 대한 Fisher–Yates 패스입니다. 애니메이션은 전적으로 그 갱신이 일으키는 DOM 변이에서 옵니다. 지킬 가치가 있는 한 규칙: `itemId`는 React key와 메뉴의 추적 맵 안의 항목 핸들을 겸하므로, id는 유일을 유지해야 합니다 — 스토리는 중복을 만들 위험을 지느니, 제거가 남긴 번호 빈틈을 되메우기까지 합니다.',
      },
      {
        heading: '스크롤과 추적은 계속 동작',
        body: '메뉴는 자식이 변할 때마다 재관찰하므로, 새로 추가된 항목의 `useIsVisible`은 즉시 올바르게 보고하고 화살표는 페이지 넘김을 계속합니다. 다만 새 항목은 대개 화면 밖에 착지합니다 — 입장을 실제로 보여주려면, add-item-and-scroll-to-it 예제처럼 `scrollToItem`과 짝지으세요.',
      },
      {
        heading: '참고',
        body: [
          '- `containerRef`는 ref 객체나 콜백 ref를 받습니다 — `useAutoAnimate`의 콜백이 곧바로 끼워집니다.',
          '- auto-animate은 무설정이고 프레임워크 독립적입니다. React 바인딩은 `useAutoAnimate` 훅 하나입니다.',
          '- 위의 데모는 id 관리를 단조 카운터로 단순화합니다. 코드 패널은 스토리의 빈틈 메우기 버전을 보여줍니다.',
        ].join('\n'),
      },
    ],
  },

  'mui-scrollable-tabs': {
    meta: {
      title: 'MUI 스크롤 가능 탭 대안: 네이티브 스크롤 탭',
      description:
        'MUI variant="scrollable"의 한계를 넘어섰다면? value/onChange 계약은 그대로 두고 모바일에서도 살아남는 스크롤 버튼을 얻고, 가운데 정렬과 스크롤을 동시에 누리세요. 전체 소스 포함.',
    },
    title: 'MUI 너머의 스크롤 가능 탭',
    lede: 'Material UI의 스크롤 가능 탭은 Tabs 시맨틱에 용접되어 있고, 스크롤 버튼은 기본적으로 모바일에서 사라집니다. 이 레시피는 여러분의 코드가 의존하는 부분 — `value`/`onChange` 계약 — 은 그대로 두고, 그 아래 스트립만 바꿉니다: 네이티브 스크롤, 스스로 가운데 정렬되는 선택, 무엇이든 담을 수 있는 탭.',
    demoHint:
      '어느 쪽 가장자리 근처의 탭을 클릭 — 스스로 가운데로 정렬됩니다. 휴대폰에서처럼 행을 드래그해보세요.',
    prose: [
      {
        heading: 'value/onChange 계약 유지하기',
        body: '소스의 `handleChange`는 MUI와 정확히 같은 시그니처를 갖습니다 — `(event, newValue)`. 마이그레이션은 상태를 다시 배선하는 게 아니라 마크업만 교체하는 것을 뜻합니다: 여러분의 `useState`, 핸들러, 탭 패널은 그대로입니다. 선택은 `api.scrollToItem(el, ’smooth’, ’center’)`로 스스로 가운데 정렬되며, [center-on-click](/examples/center-on-click)과 정확히 같은 방식으로 배선되어 있습니다.',
      },
      {
        heading: '모바일에서도 살아남는 스크롤 버튼',
        body: 'MUI는 `allowScrollButtonsMobile`로 옵트인하지 않는 한 600px 미만에서 스크롤 버튼을 숨기며, 옵트인해도 그 버튼은 Tabs 내부의 것일 뿐입니다. 여기서 화살표는 여러분 자신의 컴포넌트입니다: `useIsVisible(’first’)` / `useIsVisible(’last’)`가 불투명도 페이드를 제어하고, 모든 뷰포트에서 렌더링되며, 화살표가 무엇을 하든 터치 스크롤은 네이티브로 남습니다.',
      },
      {
        heading: '가운데 정렬과 스크롤, 동시에',
        body: 'MUI에서는 `centered` 프로퍼티와 `scrollable` 변형이 상호 배타적입니다 — 문서는 둘 중 하나를 고르라고 말합니다. 여기서 가운데 정렬은 레이아웃 모드가 아니라 클릭마다 일어나는 스크롤이므로, 스트립은 둘 다를 동시에 만족합니다: 네이티브로 오버플로하면서 선택된 탭마다 가운데로 미끄러져 갑니다.',
      },
      {
        heading: '더 이상 탭이 아닌 탭',
        body: '데모의 탭 두 개는 카운트 배지를 달고 있습니다. 칩, 아바타, 혼합 콘텐츠도 똑같이 동작합니다 — 유일한 요구사항은 `itemId`뿐입니다. 소스처럼 `@emotion/styled`로 스타일링하거나, Material 앱에 자연스럽게 어울리도록 MUI 자체의 `styled()`로, 또는 Tailwind로 스타일링하세요. 위 데모는 [드래그 스크롤](/examples/mouse-drag)을 더했고, 마운트 시 선택한 탭을 복원하는 것은 [위치 저장과 복원](/examples/save-restore-position)입니다.',
      },
      {
        heading: '참고',
        body: [
          '- ARIA 패턴을 직접 고르세요: 실제 패널이 전환된다면(여기처럼) `role="tablist"`/`role="tab"`/`aria-selected`를 유지하고, "탭"이 내비게이션 링크라면 `aria-current`를 쓰세요.',
          '- 드래그가 활성화되어 있다면, 놓는 순간 발생하는 클릭을 억제하세요 — 데모는 선택 전에 `dragManager.dragging`을 확인합니다. [드래그 레시피](/examples/mouse-drag)와 같은 방식입니다.',
          '- [RTL](/examples/rtl)은 별도 작업이 필요 없습니다: 스트립은 네이티브 스크롤 컨테이너이므로 `direction: rtl`이 화살표까지 포함해 뒤집어 줍니다.',
        ].join('\n'),
      },
    ],
  },
};
