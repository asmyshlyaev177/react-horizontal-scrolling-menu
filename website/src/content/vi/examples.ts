// Vietnamese (vi) — translation of en/examples.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=vi source=en/examples.ts source-blob=60d5f83e262100978eb4d1dc9565659367d156c4 status=translated
import type { ExamplesCopy } from '../types.ts';

/** Copy for the example pages, keyed by the slugs in `examples-manifest.ts`. */
export const examples: ExamplesCopy = {
  'add-item-and-scroll-to-it': {
    meta: {
      title: 'Chip bộ lọc React: thêm một mục và cuộn đến nó',
      description:
        'Chip bộ lọc trong một scroller ngang React: thêm một mục, rồi cuộn đến nó với apiRef và scrollToItem sau khi nó render. Demo trực tiếp và nguồn đầy đủ.',
    },
    title: 'Thêm một mục và cuộn đến nó — pattern chip bộ lọc',
    lede: 'Một thanh chip lớn lên khi người dùng chọn một bộ lọc, và chip mới nên kết thúc trên màn hình, không bị ẩn sau cạnh phải. Điểm khó: bạn không thể cuộn đến một phần tử chưa render. Ví dụ này chia công việc giữa một handler bấm và một effect.',
    demoHint:
      'Bấm Thêm bộ lọc — chip xuất hiện ở cuối và hàng cuộn để hiện nó. Dấu x xóa một chip.',
    prose: [
      {
        heading: 'Cách hoạt động',
        body: 'Menu nhận một `apiRef`, thứ phơi bày toàn bộ API bên ngoài cây component. `addItem` làm hai việc: lưu id mới vào một ref `lastAdded`, rồi thêm mục vào state. Nó cố ý không cuộn — tại thời điểm đó chip chỉ là state, không phải DOM.',
      },
      {
        heading: 'Vì sao việc cuộn nằm trong một effect',
        body: '`getItemElementById` tra mục trong DOM, nên việc cuộn chỉ có thể xảy ra sau khi React đã commit mục mới. Một `useEffect` phụ thuộc `items` chạy đúng tại thời điểm đó: nó đọc `lastAdded`, xóa nó và gọi `apiRef.current.scrollToItem(el, ’smooth’, ’end’)`. Xóa ref rất quan trọng — các lần render lại vì bất kỳ lý do nào khác (chọn, mũi tên) cũng chạm tới effect và không được cuộn lại.',
      },
      {
        heading: 'Ghi chú',
        body: `
          - \`lastAdded\` là ref, không phải state: ghi vào nó tự thân không được gây render, và giá trị của nó chỉ có ý nghĩa với lần chạy effect ngay sau đó.
          - \`’end’\` căn chip mới với cạnh phải của hàng; \`’center’\` hoạt động tương tự nếu bạn muốn nó ở giữa.
          - Các mũi tên ở đây dùng hook \`useLeftArrowVisible()\` và \`useRightArrowVisible()\` — dạng ngắn hơn của cặp \`useIsVisible(’first’/’last’)\`.
          - Thanh cuộn được ẩn bằng CSS thuần trên lớp \`scroll-container\` của thư viện; bản thân việc cuộn vẫn là gốc.
        `,
      },
    ],
  },

  'bottom-arrows': {
    meta: {
      title: 'Mũi tên carousel dưới menu: đặt vị trí tùy chỉnh trong React',
      description:
        'Đặt mũi tên carousel dưới hàng trong React: prop Footer của ScrollMenu render bất kỳ bố cục nào dưới menu, bao gồm cả mũi tên. Demo trực tiếp và nguồn đầy đủ.',
    },
    title: 'Đặt mũi tên dưới menu — hoặc bất kỳ đâu trong bố cục của bạn',
    lede: 'Mũi tên không phải chrome có sẵn — chúng là component bạn truyền vào, nên vị trí là một quyết định bố cục, không phải cài đặt thư viện. Ví dụ này không truyền `LeftArrow` hay `RightArrow` nào cả và render cả hai nút trong slot `Footer` dưới hàng, cạnh nội dung thông thường.',
    demoHint:
      'Các mũi tên nằm dưới hàng — chúng đọc cùng VisibilityContext, nên vẫn vô hiệu hóa ở hai đầu.',
    prose: [
      {
        heading: 'Cách hoạt động',
        body: '`ScrollMenu` nhận một component `Footer` và render nó dưới container cuộn, bên trong cùng `VisibilityContext.Provider` với các mục. Footer của story là một div flex thường chứa một ít chữ và hai nút mũi tên. Vì context với tới nó, mỗi nút gọi `React.useContext(VisibilityContext)` và nhận đúng API nó sẽ nhận ở các slot cạnh bên — bản thân các mũi tên không có gì thay đổi.',
      },
      {
        heading: 'Trạng thái mũi tên, như mọi khi',
        body: '`useLeftArrowVisible()` và `useRightArrowVisible()` báo liệu hàng đã ở đầu đó chưa; story ánh xạ kết quả sang `disabled` và làm mờ nút. Các cú bấm gọi `scrollPrev()` và `scrollNext()`. Không gì trong số này biết hay bận tâm nút được mount ở đâu.',
      },
      {
        heading: 'Ghi chú',
        body: `
          - \`Header\` là slot gương phía trên hàng, với cùng hợp đồng.
          - Các prop cạnh bên \`LeftArrow\`/\`RightArrow\` chỉ là các biến thể được đặt sẵn — cùng component mũi tên hoạt động ở cả hai chỗ.
          - Footer không chỉ dành cho mũi tên: bất kỳ component nào đọc \`VisibilityContext\` đều có toàn bộ API ở đó.
          - Handler \`onWheel\` của story phân trang bằng con lăn chuột và để cử chỉ touchpad cho cuộn gốc.
        `,
      },
    ],
  },

  autoplay: {
    meta: {
      title: 'Tự phát carousel React với hành vi tạm dừng dễ tiếp cận',
      description:
        'Tự phát cho một menu cuộn React: useInterval gọi scrollNext qua apiRef, tạm dừng khi hover, focus, cảm ứng và giảm chuyển động. Demo trực tiếp và nguồn đầy đủ.',
    },
    title: 'Tự phát với hành vi tạm dừng dễ tiếp cận',
    lede: 'Phần tiến lên là một dòng — một bộ hẹn giờ gọi `scrollNext()` qua `apiRef`, trên cùng lõi vòng lặp vô hạn. Phần kỹ thuật nằm ở chỗ khi nào *không* tiến: hover, cảm ứng, focus bàn phím, nút Tạm dừng, tab bị ẩn, ray ngoài màn hình và tùy chọn giảm chuyển động — tất cả dừng bộ hẹn giờ, mỗi cái vì một lý do riêng.',
    demoHint:
      'Hover, chạm, hoặc tab vào ray và nó tạm dừng; nút Tạm dừng dừng nó cho đến khi bạn bấm Phát.',
    prose: [
      {
        heading: 'Cách hoạt động',
        body: '`useInterval(cb, active ? interval : null)` là toàn bộ bộ lập lịch. `active` gộp bốn cờ — người dùng tạm dừng, hover tạm dừng, focus tạm dừng và `prefers-reduced-motion` — và truyền `null` loại bỏ hẳn bộ hẹn giờ, nên việc tiếp tục bắt đầu một khoảng mới và đầy đủ thay vì kích hoạt giữa chu kỳ ngay sau khi con trỏ rời đi.',
      },
      {
        heading: 'Những tick từ chối chạy',
        body: 'Ngay cả một bộ hẹn giờ đang hoạt động cũng kiểm tra trước khi cuộn: tick đọc `api.menuVisible.current` và `document.visibilityState`, và bỏ qua nếu cái nào nói không. Một tab bị ẩn đóng băng IntersectionObserver, nên cuộn ở đó nghĩa là tiến mù và sổ sách teleport trôi lệch; một ray cuộn ra khỏi trang đơn giản là không nên di chuyển. Các tick bị bỏ qua không tốn gì — tick kế tiếp kiểm tra lại.',
      },
      {
        heading: 'Bề mặt tạm dừng',
        body: 'Hover và cảm ứng tạm dừng qua các handler bao bọc, focus bàn phím qua `onFocusCapture`/`onBlurCapture`, và `prefers-reduced-motion` giữ tự phát tắt hẳn. Nút Tạm dừng tường minh mới là thứ WCAG 2.2.2 thực sự yêu cầu cho nội dung tự tiến — chỉ tạm dừng khi hover là chưa đủ.',
      },
      {
        heading: 'Ghi chú',
        body: `
          - Nút bật tắt Tạm dừng nằm ngoài bao bọc hover — bên trong, bấm Tạm dừng cũng sẽ gây tạm dừng do hover, và nút không bao giờ có thể được quan sát thấy làm gì.
          - Vòng lặp đến từ cùng hook nhân bản-và-teleport \`useInfiniteLoop\` như ví dụ vòng lặp vô hạn; tự phát chỉ thêm bộ hẹn giờ và các cờ tạm dừng.
          - Hoạt ảnh cuộn là cuộn mượt gốc của trình duyệt — \`transitionDuration\` không có hiệu lực với \`noPolyfill\` mặc định.
        `,
      },
    ],
  },

  'mouse-drag': {
    meta: {
      title: 'Kéo để cuộn trong React: menu ngang không làm hỏng cú bấm',
      description:
        'Cuộn bằng kéo chuột cho một danh sách ngang React: ngưỡng 5px tách kéo khỏi bấm, để các mục vẫn bấm được. Demo trực tiếp và nguồn đầy đủ.',
    },
    title: 'Kéo để cuộn bằng chuột — không làm hỏng cú bấm',
    lede: 'Người dùng cảm ứng cuộn một danh sách ngang một cách gốc, nhưng người dùng chuột cần đi dây: giữ, kéo, thả. Phần khó không phải di chuyển hàng — mà là một cách triển khai ngây thơ biến mỗi lần thả kéo thành một cú bấm mục ngoài ý muốn. Ví dụ này tách hai thứ bằng một lớp nhỏ `DragDealer` và ba prop chuột.',
    demoHint:
      'Nắm bất kỳ đâu trên hàng và kéo. Các mục vẫn bấm được — cú bấm sau một lần kéo bị chặn.',
    prose: [
      {
        heading: 'Cách hoạt động',
        body: '`ScrollMenu` phơi bày các handler chuột được curry — `onMouseDown`, `onMouseUp` và `onMouseMove` mỗi cái nhận đối tượng API và trả về một handler sự kiện thường. Thể hiện `DragDealer` theo dõi một tọa độ neo: mỗi lần di chuyển nó áp delta thẳng vào `scrollContainer.current.scrollLeft`. Cuộn gốc làm phần còn lại — không biến đổi, không vật lý, và thanh cuộn vẫn là thật.',
      },
      {
        heading: 'Vì sao cú bấm vẫn hoạt động',
        body: 'Một lần kéo chỉ bắt đầu sau khi con trỏ di chuyển quá 5px, nên cú bấm thường không bao giờ cuộn. Hướng còn lại là bug kinh điển: `onClick` của mục kích hoạt sau `mouseup`, nên thả một lần kéo lên trên một thẻ sẽ chọn nó. `dragStop` xóa cờ áp dụng ngay lập tức nhưng giữ `dragging` thêm một frame hoạt ảnh — handler bấm kiểm tra nó và thoát.',
      },
      {
        heading: 'Chi tiết đáng học',
        body: `
          - \`dragStart\` hủy lần đặt lại đang chờ từ cử chỉ trước — thiếu nó, lần kéo thứ hai nhanh có thể áp một delta cũ.
          - \`onMouseLeave\` trên bao bọc cũng gọi \`dragStop\`, nên rời hàng giữa lúc kéo không thể để nó kẹt trong trạng thái đang kéo.
          - Cảm ứng không cần gì trong số này — container là một container cuộn thật, nên vuốt đã hoạt động.
        `,
      },
    ],
  },

  'save-restore-position': {
    meta: {
      title: 'Giữ vị trí cuộn trong React: khôi phục khi remount hoặc quay lại',
      description:
        'Lưu độ lệch cuộn vào sessionStorage mỗi onUpdate và khôi phục trong onInit, để vị trí sống sót qua các lần remount và tải lại. Demo trực tiếp và nguồn đầy đủ.',
    },
    title: 'Lưu và khôi phục vị trí cuộn',
    lede: 'Một ray ngang quên độ lệch của nó mỗi lần unmount: rời route rồi quay lại, thu gọn một phần, và nó nhảy về đầu. Ví dụ này lưu độ lệch khi người dùng cuộn và ghi lại khi mount, để menu xuất hiện lại đúng nơi họ đã rời đi.',
    demoHint:
      'Cuộn hàng đến đâu đó, unmount menu, rồi mount lại — ray quay lại đúng độ lệch.',
    prose: [
      {
        heading: 'Cách hoạt động',
        body: 'Hai callback gánh toàn bộ tính năng. `onUpdate` kích hoạt khi trạng thái hiển thị của menu thay đổi trong lúc người dùng cuộn; `savePos` đọc `api.scrollContainer.current.scrollLeft` và ghi vào `sessionStorage`. Ở lần mount kế tiếp, `onInit` gán giá trị đã lưu thẳng lại `scrollLeft` — một lần ghi thuộc tính thường, nên việc khôi phục là tức thì thay vì một hoạt ảnh phát lại trước mặt người dùng.',
      },
      {
        heading: 'Sống sót qua remount, tải lại và điều hướng quay lại',
        body: '`sessionStorage` sống lâu hơn component: đổi route phía client, render có điều kiện và tải lại toàn trang đều quay về độ lệch đã lưu, và giá trị theo từng tab, nên hai tab không ghi đè nhau. Với điều hướng lịch sử, story còn đặt `window.history.scrollRestoration = ’manual’`, ngăn việc khôi phục cuộn của trình duyệt tranh chấp với cái thủ công khi quay lại và tiến.',
      },
      {
        heading: 'Ghi chú',
        body: `
          - Khôi phục bằng \`scrollLeft\` thô chính xác đến từng pixel và không bận tâm có những mục nào — không id phải nhớ, không gì phải tra.
          - Nút Tải lại của story đổi \`key\` của menu để ép remount; công tắc unmount/remount của demo là cùng bài kiểm tra đó được làm tường minh.
          - Đặt lại chỉ xóa khóa lưu trữ — lần mount kế tiếp bắt đầu từ số không, như lần ghé đầu.
        `,
      },
    ],
  },

  'one-item': {
    meta: {
      title: 'Slider một mục mỗi view trong React: mục cuộn toàn chiều rộng',
      description:
        'Mục toàn chiều rộng trong một menu cuộn ngang React: min-width 100% trên bao bọc mục tạo slider một mục mỗi view. Demo trực tiếp và nguồn đầy đủ.',
    },
    title: 'Một mục mỗi view: slider toàn chiều rộng từ cùng một menu',
    lede: 'Không có chế độ slider nào để bật. Menu bố trí theo những gì CSS của bạn nói, nên một quy tắc — `min-width: 100%` trên bao bọc mục của thư viện — biến cùng component đó thành slider: mỗi thẻ lấp đầy view, và các mũi tên phân trang thường tiến đúng một mục.',
    demoHint:
      'Phân trang bằng mũi tên — mỗi slide đúng một view rộng, và mỗi slide báo khả năng hiển thị riêng.',
    prose: [
      {
        heading: 'Cách hoạt động',
        body: 'Story bọc menu trong một container có style nhắm tới `.react-horizontal-scrolling-menu--item` — div mà thư viện render quanh mỗi con — và cho nó `minWidth: ’100%’` cộng căn giữa flex. Giờ mỗi bao bọc trải khắp toàn container cuộn, nên một thẻ vừa đầy view. Các mũi tên là chuẩn: `scrollPrev()` và `scrollNext()` phân trang theo nhóm hiển thị, và khi nhóm hiển thị là một mục, một trang và một mục là một.',
      },
      {
        heading: 'Mũi tên và con lăn',
        body: 'Trạng thái mũi tên đến từ `useLeftArrowVisible()` và `useRightArrowVisible()` — mỗi cái trả true khi hàng ở đầu đó, và story đưa nó vào `disabled` và làm mờ nút. Prop `onWheel` nhận đối tượng API cùng sự kiện, nên con lăn dọc phân trang hàng theo dấu của `deltaY`. Trước hết nó đánh hơi touchpad: bất kỳ delta ngang nào, hoặc delta dọc dưới 15, được coi là cử chỉ touchpad và để cho cuộn gốc.',
      },
      {
        heading: 'Ghi chú',
        body: [
          '- `itemId` trên mỗi con là yêu cầu cứng duy nhất — đó là cách các mục được theo dõi và cuộn tới.',
          '- Các thẻ vẫn gọi `useIsVisible(itemId, true)`; với một mục mỗi view, mọi slide ngoài màn hình báo `visible: false`.',
          '- Thanh cuộn được ẩn bằng CSS thuần trên container cuộn (`scrollbar-width: none` cộng pseudo-element WebKit) — lựa chọn đó là của bạn, không phải của thư viện.',
          '- Chiều rộng nằm hoàn toàn trong stylesheet của bạn. Đổi 100% thành 50% và bạn có slider hai-mỗi-view; thư viện không đo gì.',
        ].join('\n'),
      },
    ],
  },

  performance: {
    meta: {
      title: 'Hiệu năng danh sách ngang React: 5,000 mục',
      description:
        'Một menu ngang React render 5,000 mục với cuộn gốc: thẻ memoized, một IntersectionObserver, không ảo hóa. Demo trực tiếp và nguồn đầy đủ.',
    },
    title: '5,000 mục trong một hàng — không cần ảo hóa',
    lede: 'Lời khuyên thông thường với vài trăm mục là dùng ảo hóa. Ví dụ này render 5,000 nút DOM thật vào một `ScrollMenu` và vẫn phản hồi — cuộn overflow gốc làm việc di chuyển, IntersectionObserver làm việc theo dõi, và React hầu như không làm gì.',
    demoHint:
      'Kéo ray hoặc phân trang bằng mũi tên — mỗi thẻ trong 5,000 thẻ là một nút DOM thật; không gì bị windowing.',
    prose: [
      {
        heading: 'Nơi công việc không xảy ra',
        body: 'Việc cuộn không bao giờ đi vào React. Ray là một container overflow đúng nghĩa: con lăn và cảm ứng cuộn nó một cách gốc, và dây kéo chỉ gán vào `scrollContainer.current.scrollLeft` — không state, không render lại theo frame. Khả năng hiển thị là một thể hiện IntersectionObserver duy nhất theo dõi cả 5,000 phần tử mục; callback đến theo lô, và chỉ các component đã đăng ký bằng `useIsVisible` cập nhật khi chính mục của chúng lật. Không có phép tính cuộn theo-mục ở bất kỳ đâu.',
      },
      {
        heading: 'Story điều chỉnh gì',
        body: '`Card` được bọc trong `React.memo` với một bộ so sánh trên `selected` và `title`, nên chọn một thẻ không reconcile 4,999 thẻ còn lại. Chỉ số hiển thị đi qua `useDeferredValue`: sau một cú nhảy trang, hàng trăm mục lật trạng thái cùng lúc, và trì hoãn giữ cơn bùng phát đó khỏi đường tới hạn của tương tác gây ra nó. `noPolyfill={true}` khiến các lần cuộn lập trình dùng `scrollIntoView` của chính trình duyệt thay vì polyfill cuộn mượt. Kéo là cùng pattern `DragDealer` như ví dụ mouse-drag.',
      },
      {
        heading: 'Sự đánh đổi mà trang này thừa nhận',
        body: 'Ray demo phía trên không được render trên server: 5,000 thẻ serialize thành khoảng một megabyte HTML, nên ray chỉ mount ở client phía sau một placeholder khớp chiều cao và không có layout shift. Đó là hóa đơn thật ở kích thước này — trình duyệt xử lý 5,000 nút sống thoải mái, nhưng gửi chúng làm payload SSR là một quyết định riêng. Ở đâu đó trong hàng chục nghìn nút, bộ nhớ và chi phí render ban đầu cũng đuổi kịp; đó là nơi windowing hết là tùy chọn.',
      },
      {
        heading: 'Ghi chú',
        body: [
          '- DOM cho 5,000 thẻ được xây một lần, khi mount — `React.memo` biến các lần render sau của cha thành no-op cho mỗi thẻ.',
          '- Mũi tên phân trang gần một viewport mỗi lần, nên đi qua cả ray bằng mũi tên chậm theo thiết kế — cú hất kéo hay cú nhảy `scrollToItem` hợp với quy mô này hơn.',
          "- Các mũi tên vẫn chạy trên `useIsVisible('first')` và `useIsVisible('last')` — cùng cơ chế observer của menu mười mục, ở 500 lần số mục.",
        ].join('\n'),
      },
    ],
  },

  progress: {
    meta: {
      title: 'Chỉ báo tiến độ cuộn ngang React cho một carousel',
      description:
        'Một thanh tiến độ cho menu ngang React: đăng ký onUpdate, đếm mục hiển thị, suy ra trang hiện tại. Demo trực tiếp và nguồn story đầy đủ.',
    },
    title: 'Thêm chỉ báo tiến độ cuộn vào một menu ngang',
    lede: 'Một carousel ẩn thanh cuộn vẫn nợ người dùng một câu trả lời cho «còn bao nhiêu?». Menu đã biết: nó theo dõi khả năng hiển thị của mọi mục, nên vị trí là chuyện đếm. Story render các nút trang được đánh số cộng số mục còn lại trái/phải từ dữ liệu đó; demo này chưng cất cùng phép toán đó thành một thanh tiến độ.',
    demoHint:
      'Cuộn hàng, kéo nó, hoặc dùng mũi tên — thanh đầy lên từng trang và bộ đếm cho biết bạn đang ở đâu.',
    prose: [
      {
        heading: 'Cách hoạt động',
        body: 'Chỉ báo được truyền dưới dạng prop `Footer`, nên `ScrollMenu` render nó bên trong menu nơi `VisibilityContext` sẵn có. Từ context nó lấy `items` — bản đồ phía sau theo dõi hiển thị — và đăng ký bằng `items.subscribe(’onUpdate’, cb)`. Sự kiện đó kích hoạt trên mỗi callback IntersectionObserver, nên story debounce nó (một timeout cộng `requestAnimationFrame`) trước khi đọc `items.getVisible()`.',
      },
      {
        heading: 'Từ mục hiển thị đến số trang',
        body: 'Số mục hiển thị là kích thước trang. Tổng số trang là `Math.ceil(items.size / visibleItemsLen)`; trang hiện tại đến từ `index` của mục hiển thị cuối. Story biến chúng thành các nút trang bấm được — mỗi nút gọi `scrollToItem(getItemByIndex(itemInd))`, định vị một mục theo vị trí mà không cần biết id — và suy ra số mục bên trái và bên phải từ cùng những con số đó. Thanh của demo chỉ là `currentPage / totalPages` dưới dạng phần trăm chiều rộng.',
      },
      {
        heading: 'Ghi chú',
        body: [
          '- Không gì được đo bằng pixel — phép toán chạy hoàn toàn trên dữ liệu hiển thị, nên vẫn hoạt động khi các mục khác chiều rộng.',
          '- Đổi kích thước viewport và kích thước trang theo sau: nhiều mục vừa hơn, `getVisible()` trả nhiều mục hơn, và số trang tính lại ở lần cập nhật kế.',
          '- Effect trả về một cleanup gọi `items.unsubscribe` và xóa bộ hẹn giờ đang chờ — bỏ nó và một footer đã unmount vẫn bị gọi.',
          '- Trước báo cáo đầu tiên của observer, `getVisible()` rỗng; story trả `null` cho tới lúc đó, và demo vẽ một đường rỗng.',
        ].join('\n'),
      },
    ],
  },

  'scroll-to-item': {
    meta: {
      title: 'Cuộn đến phần tử trong danh sách ngang React: scrollToItem',
      description:
        'Cuộn một danh sách ngang React đến bất kỳ mục nào theo id: onInit trao api và scrollToItem đưa mục tiêu vào view. Demo trực tiếp và nguồn đầy đủ.',
    },
    title: 'Cuộn đến một mục cụ thể trong danh sách ngang',
    lede: 'Deep-link vào một hàng: một chat mở trên cuộc trò chuyện đang hoạt động, một gallery mở trên ảnh bạn đã chia sẻ. Container cuộn nằm trong thư viện, nhưng bạn không cần ref vào DOM của nó — `onInit` trao api cho bạn, và `scrollToItem` làm việc định vị.',
    demoHint:
      'Ray không mount tại Tokyo — onInit nhảy thẳng đến quito. Kéo đi nơi khác rồi remount để thấy nó hạ cánh lại đó.',
    prose: [
      {
        heading: 'Cách hoạt động',
        body: '`ScrollMenu` nhận một callback `onInit` và gọi nó khi menu đã render và đo các mục, truyền cùng đối tượng api mà `VisibilityContext` cung cấp bên trong. Handler tra phần tử bằng `getItemElementById(id)` và đưa cho `scrollToItem(item, ’auto’, ’start’)`. Vì `onInit` chỉ kích hoạt sau khi đo, việc tra không thể trả rỗng cho một mục đã render — không `setTimeout`, không vòng lặp thử lại.',
      },
      {
        heading: 'Hành vi và căn chỉnh',
        body: 'Story truyền `’auto’` và `’start’`: `’auto’` nhảy không hoạt ảnh, đúng thứ bạn muốn cho vị trí ban đầu — người dùng không bao giờ thấy ray ở mục một. `’start’` căn cạnh trái của mục với ray. Với các lần cuộn do bấm, cùng lệnh đó nhận `’smooth’` và `’center’` — đó là ví dụ căn giữa khi bấm phía dưới.',
      },
      {
        heading: 'Ghi chú',
        body: [
          '- `getItemElementByIndex` là phương án theo vị trí khi bạn biết slot nhưng không biết id.',
          '- Id bạn truyền là `itemId` của mục — cùng khóa menu dùng để theo dõi hiển thị.',
          '- Demo phát lại hành vi bằng cách remount menu với một `key` mới; mỗi lần mount mới lại chạy `onInit`.',
        ].join('\n'),
      },
    ],
  },
  'center-on-click': {
    meta: {
      title: 'Tab cuộn được React: căn giữa tab đang hoạt động khi bấm',
      description:
        'Tab cuộn được trong React không cần Material UI: bấm một tab căn giữa nó với scrollToItem(el, "smooth", "center"). Demo trực tiếp và nguồn story đầy đủ.',
    },
    title: 'Căn giữa mục được bấm — pattern tab cuộn được',
    lede: 'Hành vi mọi dải tab cần và không container cuộn nào cho miễn phí: bấm một tab gần cạnh và nó lướt ra giữa, lộ hàng xóm hai bên. Ở đây là một lệnh API — không Material UI, không đo, không phép tính cuộn.',
    demoHint:
      'Bấm một tab gần một trong hai cạnh — nó kích hoạt và tự căn giữa trong hàng.',
    prose: [
      {
        heading: 'Cách hoạt động',
        body: '`handleItemClick` được curry: nó nhận `itemId` và trả về một hàm mong đợi đối tượng API. Cú bấm trước tiên lưu id vào state `selected`, rồi gọi `api.getItemElementById(itemId)` để tìm phần tử DOM thật và đưa cho `api.scrollToItem(item, ’smooth’, ’center’)`. Một cú bấm, hai hiệu ứng: tab được chọn và căn giữa.',
      },
      {
        heading: 'API đến từ đâu',
        body: 'Component cha không bao giờ giữ ref API. Mỗi `Card` đọc toàn bộ API từ `VisibilityContext` — sẵn cho bất kỳ con nào của `ScrollMenu` — và truyền nó vào handler bấm: `onClick(visibility)`. Nếu thay vào đó bạn cần cuộn từ ngoài menu, đó là pattern `apiRef` trong ví dụ scroll-to-item.',
      },
      {
        heading: 'Ghi chú',
        body: [
          '- Đối số thứ ba của `scrollToItem` nhận cùng các giá trị như tùy chọn `inline` của `scrollIntoView` — `’start’`, `’center’` hoặc `’end’`.',
          '- Các thẻ có thể nhận focus (`role="button"`, `tabIndex=0`) và xử lý Enter trong `onKeyDown`, nên người dùng bàn phím nhận cùng thao tác chọn-và-căn-giữa.',
          '- Handler `onWheel` ánh xạ delta con lăn chuột sang `scrollNext`/`scrollPrev`, nhưng nhường cho touchpad — delta ngang hoặc delta dọc rất nhỏ được coi là cử chỉ và để gốc.',
          '- Các mũi tên tự vô hiệu hóa bằng các dạng ngắn `useIsVisible(’first’)` và `useIsVisible(’last’)`.',
        ].join('\n'),
      },
    ],
  },

  'swipe-desktop': {
    meta: {
      title: 'Vuốt bằng chuột trên desktop: cử chỉ hất carousel React',
      description:
        'Vuốt desktop cho một menu ngang React: theo dõi nhấn/nhả chuột, và một cú nhả quá 50px hất sang trang kế với cú lướt mượt. Demo và nguồn đầy đủ.',
    },
    title: 'Vuốt trên desktop: một cú hất chuột phân trang menu',
    lede: 'Kéo để cuộn di chuyển hàng 1:1 với con trỏ. Đây là cử chỉ chuột kia: một cú hất. Nhấn, di chuyển ít nhất 50px, nhả — và menu lướt một trang theo hướng đó qua `scrollNext` hoặc `scrollPrev`. Hàng không theo con trỏ chút nào; cú lướt là cuộn lập trình mượt của thư viện, thứ mang lại cảm giác quán tính cho cú nhả.',
    demoHint:
      'Nhấn bất kỳ đâu trên hàng, di chuyển trái hoặc phải ít nhất 50px và nhả — menu lướt một trang. Các cử động ngắn hơn không làm gì.',
    prose: [
      {
        heading: 'Cách hoạt động',
        body: 'Một hook `useSwipe` trả về ba prop chuột được curry mà `ScrollMenu` mong đợi — mỗi cái nhận đối tượng API và trả về một handler sự kiện thường. `onMouseDown` neo `clientX` của con trỏ vào một ref, `onMouseMove` liên tục ghi đè tọa độ cuối, và `onMouseUp` so sánh hai cái: chênh lệch ngang quá `minSwipeDistance` (50px) gọi `apiObj.scrollNext()` cho cú hất sang trái hoặc `apiObj.scrollPrev()` cho cú sang phải.',
      },
      {
        heading: 'Vì sao cú bấm không cần xử lý đặc biệt',
        body: 'Trong ví dụ kéo để cuộn, nhả một lần kéo trên một thẻ sẽ bấm nó, nên cờ `dragging` phải sống lâu hơn cử chỉ một frame. Cú hất né toàn bộ vấn đề: dưới ngưỡng 50px `onMouseUp` không làm gì, nên cú bấm chỉ là cú bấm — và quá ngưỡng thì con trỏ dù sao cũng đã rời thẻ nó nhấn. Không cờ, không handler bị chặn.',
      },
      {
        heading: 'Story thêm gì cho cảm ứng và con lăn',
        body: 'Story cũng chốt việc pan cảm ứng gốc: React 18+ đăng ký listener `touchmove` là passive, nên `preventDefault` chỉ hoạt động từ một listener không passive. Một effect với tới container cuộn qua `apiRef` (`ref.current.scrollContainer.current`) và gắn một listener với `{ passive: false }`. Handler `onWheel` của nó cũng phân trang menu, với một heuristic — `deltaX` khác không hoặc `deltaY` nhỏ được coi là touchpad và để yên.',
      },
      {
        heading: 'Ghi chú',
        body: [
          '- Tọa độ nằm trong ref, không phải state — theo dõi `mousemove` trong state sẽ render lại mỗi pixel.',
          '- Demo neo lại tọa độ cuối trên `mousedown`, nên vị trí sót lại từ cử chỉ trước không bao giờ tính vào cú vuốt mới.',
          '- Chỉnh `minSwipeDistance` theo ý: thấp hơn là nhạy hơn, cao hơn dung thứ cú bấm cẩu thả hơn. Biến thể cảm ứng của recipe này dùng 20px.',
        ].join('\n'),
      },
    ],
  },

  'mobile-swipe-only': {
    meta: {
      title: 'Ẩn mũi tên carousel trên di động: cuộn React chỉ bằng cảm ứng',
      description:
        'Mũi tên trên desktop, cuộn chỉ bằng cảm ứng trên di động cho một menu ngang React: một kiểm tra matchMedia pointer: coarse ẩn chúng. Demo trực tiếp và nguồn đầy đủ.',
    },
    title: 'Ẩn mũi tên trên di động — cuộn chỉ bằng cảm ứng trên màn hình nhỏ',
    lede: 'Trên màn hình cảm ứng, các nút mũi tên là trọng lượng chết: vuốt là gốc, ngón cái che mục tiêu chạm, và mỗi mũi tên ăn chiều rộng hàng. Demo giữ mũi tên cho người dùng chuột và unmount chúng khi con trỏ là ngón tay; story đi xa hơn và thay pan gốc bằng cử chỉ vuốt-để-phân-trang tường minh.',
    demoHint:
      'Mở trên điện thoại, hoặc bật giả lập cảm ứng trong DevTools — các mũi tên biến mất và vuốt làm toàn bộ công việc.',
    prose: [
      {
        heading: 'Demo ẩn mũi tên thế nào',
        body: '`LeftArrow` và `RightArrow` là các prop tùy chọn — truyền `undefined` và slot không được render chút nào, nên không có gì để ẩn bằng CSS và không còn nút nào trong thứ tự tab. Công tắc là một kiểm tra `matchMedia(’(pointer: coarse)’)` trong một effect: server không thể biết loại con trỏ, nên lần vẽ đầu là desktop-first với mũi tên, và hydration gỡ chúng khi một con trỏ thô được xác nhận. Một listener `change` giữ nó sống — giả lập thiết bị của DevTools lật nó không cần tải lại.',
      },
      {
        heading: 'Story làm gì khi chạm',
        body: 'Hook `useSwipe` của story biến pan tự do thành phân trang. Các prop được curry `onTouchStart`, `onTouchMove` và `onTouchEnd` mỗi cái nhận đối tượng API; start đặt lại tọa độ cuối và ghi `targetTouches[0].clientX`, move theo dõi nó, và end đo khoảng cách đã đi. Quá `minSwipeDistance` (20px) nó gọi `apiObj.scrollPrev()` hoặc `apiObj.scrollNext()` — một trang mượt mỗi lần vuốt, bất kể tốc độ ngón tay.',
      },
      {
        heading: 'Chặn cuộn cảm ứng gốc',
        body: 'Để phân trang là chuyển động duy nhất, việc pan của trình duyệt phải dừng, và React 18+ đăng ký listener `touchmove` là passive, nơi `preventDefault` bị bỏ qua. Effect của story với tới phần tử cuộn thật qua `apiRef` (`ref.current.scrollContainer.current`) và gắn listener riêng với `{ passive: false }`, nơi lời gọi hoạt động.',
      },
      {
        heading: 'Ghi chú',
        body: [
          '- Chọn mặc định SSR có chủ đích: render mũi tên trước có lợi cho crawler và người dùng desktop, và thiết bị cảm ứng mất chúng ngay sau hydration.',
          '- `(pointer: coarse)` nhắm tới đầu vào, không phải kích thước màn hình — một cửa sổ desktop hẹp giữ mũi tên, máy tính bảng thì không.',
          '- Nếu bạn chỉ muốn ẩn mũi tên và giữ vuốt gốc (hành vi của demo), bỏ effect `touchmove` của story — pan tự do và mũi tên ẩn cùng tồn tại tốt.',
          '- Ngưỡng cảm ứng là 20px so với 50px của cú hất desktop — xem ví dụ swipe-on-desktop cho biến thể chuột.',
        ].join('\n'),
      },
    ],
  },

  'infinite-loop': {
    meta: {
      title: 'Menu cuộn vòng lặp vô hạn React: một carousel liền mạch',
      description:
        'Một carousel vòng lặp liền mạch trong React không cần thư viện carousel: nhân bản ở hai đầu và một cú teleport scrollLeft khi cuộn ổn định. Demo và nguồn đầy đủ.',
    },
    title: 'Menu vòng lặp vô hạn, xây trên API công khai',
    lede: 'Mẹo carousel nhân-bản-và-teleport kinh điển, được cài đặt với không thay đổi thư viện: hàng được nhân bản ra hai đầu, và khi cuộn ổn định trong một vùng nhân bản, `scrollLeft` nhảy đúng một độ dài vòng lặp. Các frame hai bên cú nhảy giống hệt nhau, nên không gì có vẻ di chuyển. Mũi tên, con lăn, cảm ứng và kéo chuột đều vượt qua đường nối.',
    demoHint:
      'Tiếp tục theo một trong hai hướng — bằng mũi tên, con lăn, cảm ứng hay kéo — và hàng không bao giờ kết thúc.',
    prose: [
      {
        heading: 'Cách hoạt động',
        body: '`getSlides` sao chép các mục ra hai đầu hàng. Vì `itemId` phải duy nhất, các bản sao nhận một hậu tố — `-lc` bên trái, `-rc` bên phải — trong khi giữ id thật là `realId` cho tiêu đề, chọn và bấm. `useInfiniteLoop` gói phần còn lại: `normalize()` đo độ dài vòng lặp từ `offsetLeft` của mục thật đầu tiên và bản sao phải của nó, và dịch `scrollLeft` đúng khoảng đó mỗi khi vị trí rơi vào một vùng nhân bản. Hình học thuần túy và idempotent — gọi nó khi không có gì cần sửa thì chẳng làm gì.',
      },
      {
        heading: 'Khi teleport kích hoạt',
        body: 'Nhảy giữa lúc cuộn sẽ tranh chấp rõ ràng với trình duyệt, nên `normalize` chạy khi cuộn ổn định: một listener `scrollend` gốc trên container (với tới qua prop `containerRef`), với một fallback `onScroll` debounce 150ms cho Safari, vốn không kích hoạt `scrollend`. Một cú nhảy nữa xảy ra trước khi ai thấy gì: một layout effect đặt `scrollLeft` ban đầu vào mục thật đầu tiên trước khi vẽ, nên trang không bao giờ mở trên các bản sao trái.',
      },
      {
        heading: 'Vượt đường nối giữa lúc kéo',
        body: 'Callback kéo chuột cộng mỗi delta vào `scrollLeft` và gọi `loop.normalize()` ngay tại đó, trong cử chỉ. Thiếu nó, kéo vào một vùng nhân bản sẽ đợi kéo xong mới teleport — có nó, bạn có thể kéo qua đường nối vô hạn mà không bao giờ để ý.',
      },
      {
        heading: 'Ghi chú',
        body: [
          '- Các mũi tên ở đây là tùy chỉnh và luôn bật: hook `first`/`last` chuẩn theo dõi các mục ngoài cùng, mà ở đây là bản sao — chúng sẽ nhấp nháy vô hiệu hóa tại đường nối.',
          '- Các thẻ hiển thị khả năng hiển thị hợp-kép — một mục tính là hiển thị khi nó hoặc một trong các bản sao hiển thị — vì cờ theo-phần-tử trở nên cũ một frame sau teleport và sẽ nhấp nháy header.',
          '- Hai trang bản sao mỗi bên: vùng phải phủ một viewport đầy đủ (frame giống hệt quanh cú nhảy) với chỗ dư, để một cú bấm Kế từ trang cưỡi đường nối không bao giờ kẹt ở cuối hàng.',
          '- Mọi thứ dùng ở đây — `containerRef`, `onScroll`, `itemId`, các prop chuột được curry — là API công khai.',
        ].join('\n'),
      },
    ],
  },

  simple: {
    meta: {
      title: 'Menu cuộn ngang React: ví dụ bắt đầu',
      description:
        'Thiết lập react-horizontal-scrolling-menu tối giản: mục với itemId, hai mũi tên đọc VisibilityContext và theo dõi hiển thị theo mục. Nguồn đầy đủ.',
    },
    title: 'Bắt đầu: một menu cuộn ngang trong React',
    lede: 'Thiết lập hữu ích nhỏ nhất: một hàng thẻ, hai nút mũi tên và điều thư viện này thực sự nói đến — mỗi thẻ biết nó có trên màn hình không. Một component, một prop bắt buộc, một import stylesheet.',
    demoHint:
      'Cuộn hàng — mũi tên vô hiệu hóa ở hai đầu và mỗi thẻ theo dõi khả năng hiển thị riêng.',
    prose: [
      {
        heading: 'Cách hoạt động',
        body: '`ScrollMenu` render các con của bạn trong một container cuộn gốc và theo dõi từng cái bằng IntersectionObserver. Hợp đồng duy nhất là `itemId` — một prop duy nhất trên mỗi con, là cách các mục được theo dõi, tìm thấy và cuộn tới. Trong bất kỳ con hoặc mũi tên nào, `VisibilityContext` trao cho bạn toàn bộ API.',
      },
      {
        heading: 'Hook khả năng hiển thị',
        body: 'Các thẻ gọi `useIsVisible(itemId)` để đăng ký trạng thái trên-màn-hình riêng — không listener cuộn, không phép tính vị trí, và chỉ các thẻ bị ảnh hưởng render lại khi khả năng hiển thị đổi. Mũi tên dùng các dạng ngắn `first` và `last` để tự vô hiệu hóa ở hai đầu hàng.',
      },
      {
        heading: 'Ghi chú',
        body: [
          '- `styles.css` là import riêng — bundle JS không bao giờ tiêm CSS.',
          '- Chiều rộng mục là CSS của bạn; menu không đo gì và gửi kèm 210 byte style bố cục.',
          '- Đối số thứ hai của `useIsVisible(itemId, true)` là giá trị dùng trước khi observer báo — và là giá trị server của bạn render, nếu bạn render menu trên server.',
        ].join('\n'),
      },
    ],
  },

  vertical: {
    meta: {
      title: 'Menu cuộn dọc React với mũi tên',
      description:
        'Làm react-horizontal-scrolling-menu thành dọc: container cuộn flex-column, chiều cao có giới hạn, mũi tên trên và dưới qua Header/Footer. Demo trực tiếp và nguồn.',
    },
    title: 'Menu cuộn dọc — cùng component, xoay bằng CSS',
    lede: 'Không có prop `vertical`, và không cần: menu là một hàng flex trong container cuộn gốc, nên hướng nó xuống dưới là vài ghi đè CSS. Theo dõi hiển thị, hook mũi tên và `scrollPrev`/`scrollNext` đều tiếp tục hoạt động trên trục mới.',
    demoHint:
      'Lăn con lăn trên cột hoặc dùng mũi tên — Lên và Xuống là Header và Footer của ScrollMenu. Các hàng mờ đi khi rời khỏi view.',
    prose: [
      {
        heading: 'Hai ghi đè và một giới hạn chiều cao',
        body: 'Story đổi style hai tên lớp của thư viện. Container cuộn nhận `flex-direction: column`, `overflow-y: auto` và `height: initial` thay cho `max-content` mặc định; bao bọc nhận `height: 100%`, nên bất kỳ chiều cao cố định nào của cha đều thành giới hạn cuộn. Đó là toàn bộ chế độ dọc. Story áp dụng ghi đè bằng emotion; demo trên trang này truyền utility Tailwind qua prop `wrapperClassName` và `scrollContainerClassName` thay vào đó — bất kỳ lối style nào cũng hoạt động, tên lớp ổn định.',
      },
      {
        heading: 'Mũi tên thành Header và Footer',
        body: "Các slot `LeftArrow`/`RightArrow` render cạnh ray — sai chỗ cho một cột. `ScrollMenu` cũng nhận component `Header` và `Footer` render trên và dưới, và story mount các nút Lên và Xuống ở đó. Chúng là những consumer `VisibilityContext` thường: `useIsVisible('first', true)` vô hiệu hóa Lên trên đỉnh, `useIsVisible('last', false)` vô hiệu hóa Xuống dưới đáy. Các cú bấm truyền đối số thứ ba — `scrollPrev(undefined, undefined, 'end')` và `scrollNext(undefined, undefined, 'start')` — vị trí `block` cho `scrollIntoView`. `'end'` đặt mục trước ở cạnh dưới (một trang đầy lên trên); `'start'` đặt mục kế lên đỉnh (một trang đầy xuống dưới). Với `'nearest'` mặc định, mỗi cú bấm chỉ khẽ đẩy hàng kế vào view.",
      },
      {
        heading: 'Giữ cuộn bên trong cột',
        body: "`scrollIntoView` di chuyển mọi tổ tiên cuộn được của mục tiêu, và trang là một trong số đó — nên một cú nhảy căn theo `block` trong cột kéo cả tài liệu theo. Tùy chọn dừng bước đi đó là `boundary`, truyền ở đối số thứ tư: `scrollNext(undefined, undefined, 'start', { boundary })` với `scrollContainer.current` riêng của menu cuộn các hàng và không gì khác. Nó cần `noPolyfill={false}` trên `ScrollMenu`, vì chỉ polyfill hiểu `boundary` — demo phía trên truyền cả hai. Menu ngang hiếm khi vướng điều này: `block: 'nearest'` mặc định của chúng ngay từ đầu không yêu cầu trang di chuyển dọc.",
      },
      {
        heading: 'Khả năng hiển thị không có trục',
        body: '`useIsVisible` được IntersectionObserver chống lưng, và giao cắt được đo ở cả hai chiều — các hàng báo trạng thái khi vượt cạnh trên và dưới đúng như mục ngang làm ở hai bên. Demo làm mờ hàng ngoài view để cho thấy, với bốn hàng đầu được vẽ hiển thị trên server qua đối số `defaultValue` của hook.',
      },
      {
        heading: 'Ghi chú',
        body: [
          '- Chiều duy nhất cố định là chiều cao inline của panel; `height: 100%` của bao bọc mang nó xuống container cuộn.',
          '- Con lăn và cảm ứng cuộn cột một cách gốc — `overflow-y: auto` biến nó thành container cuộn thật; mũi tên là tiện lợi, không phải cơ chế.',
          '- Đối số thứ hai của `scrollPrev`/`scrollNext` là vị trí `inline` (ngang) — menu dọc quan tâm tới `block`, đó là lý do story truyền nó tường minh.',
        ].join('\n'),
      },
    ],
  },

  rtl: {
    meta: {
      title: 'Cuộn ngang RTL trong React: một menu phải sang trái',
      description:
        'Một menu cuộn ngang phải sang trái trong React: prop RTL lật hướng cuộn và phân trang, và mũi tên đổi bên. Demo trực tiếp và nguồn đầy đủ.',
    },
    title: 'Menu ngang phải sang trái',
    lede: 'Với giao diện tiếng Ả Rập hoặc Hebrew, hàng phải bắt đầu ở cạnh phải và lớn sang trái. Một prop boolean lật container cuộn; công việc thật duy nhất còn lại là quyết định mũi tên nghĩa là gì khi «kế tiếp» trỏ sang trái.',
    demoHint:
      'Lật công tắc — hàng khởi động lại từ cạnh đối diện và các mũi tên đổi vai.',
    prose: [
      {
        heading: 'Cách hoạt động',
        body: '`RTL={true}` đặt container cuộn vào chế độ phải-sang-trái: mục đầu ngồi ở cạnh phải và cuộn tiến sang trái. Mọi thứ logic vẫn logic — `useIsVisible(’first’)` vẫn nghĩa là mục đầu trong dữ liệu của bạn, `scrollNext()` vẫn tiến về phía cuối — chỉ hướng trên màn hình lật.',
      },
      {
        heading: 'Mũi tên đổi slot, không đổi logic',
        body: 'Prop `LeftArrow` luôn render ở bên trái màn hình. Trong RTL bên đó là nơi «kế tiếp» sống, nên story nạp các slot với phần tử đã hoán đổi: `LeftArrow={RTL ? <RightArrow /> : <LeftArrow />}`. Bản thân các component giữ logic — cái nối với `scrollPrev` vẫn vô hiệu hóa qua `useIsVisible(’first’)` — chỉ vị trí trên màn hình và nhãn đổi.',
      },
      {
        heading: 'Ghi chú',
        body: [
          '- Story truyền `noPolyfill={true}`, nên cuộn lập trình dùng cuộn mượt gốc của trình duyệt thay vì polyfill đi kèm.',
          '- `scrollPrev(’smooth’, ’end’)` và `scrollNext(’smooth’, ’start’)` truyền một căn chỉnh tường minh — đối số thứ hai là cùng bộ `start/center/end` mà `scrollToItem` nhận.',
          '- Story bật tắt `RTL` trực tiếp từ một checkbox — prop chỉ là state, không gì trong menu được cấu hình lúc build.',
        ].join('\n'),
      },
    ],
  },

  'add-items': {
    meta: {
      title: 'Cuộn ngang vô hạn React: tải thêm ở cuối',
      description:
        'Cuộn ngang vô hạn trong React: onUpdate kiểm tra api.items.last().visible và thêm lô kế với một mục loader. Demo trực tiếp và nguồn đầy đủ.',
    },
    title: 'Tải thêm mục khi điểm cuối vào view',
    lede: 'Cuộn ngang vô hạn không có listener cuộn: menu đã biết mục nào hiển thị, nên «người dùng đã đến cuối chưa?» chỉ là một câu hỏi — mục cuối có trên màn hình không? `onUpdate` hỏi nó sau mỗi lần cuộn và thêm lô kế khi câu trả lời là có.',
    demoHint:
      'Cuộn đến đầu bên phải — một thẻ loader xuất hiện và lô kế đến. Demo dừng ở 30 mục.',
    prose: [
      {
        heading: 'Cách hoạt động',
        body: '`onUpdate` kích hoạt mỗi khi khả năng hiển thị của mục đổi. Handler đọc `api.items.last()?.visible` — thư viện theo dõi mỗi mục theo `itemId` và giữ một cờ hiển thị theo mục, nên phát hiện điểm cuối tốn một lần tra, không cần IntersectionObserver riêng và không cần phép tính vị trí cuộn. Rồi `pushNewItems` giả lập một lần fetch: một timeout một giây, năm mục nữa, xong.',
      },
      {
        heading: 'Bảo vệ lần fetch',
        body: 'Các cập nhật hiển thị đến theo cơn, nên handler phải an toàn để gọi lặp. Cờ `loading` làm nó idempotent: cả `onUpdate` và `pushNewItems` đều kiểm tra nó, và chỉ trigger đầu tiên khởi động fetch. Cùng cờ đó render component `Loader` như một mục menu thật (với `itemId` riêng) gọi `scrollIntoView()` khi mount, giữ đầu cuối của hàng trong view lúc lô đang tải.',
      },
      {
        heading: 'Ghi chú',
        body: [
          '- Mũi tên phải được truyền dưới dạng phần tử, `RightArrow={<RightArrow disabled={...} />}` — cả dạng component lẫn phần tử đều hoạt động, và dạng phần tử cho phép cha truyền prop như mức trần mục.',
          '- Mũi tên đó chỉ vô hiệu hóa khi chạm mức trần và mục cuối hiển thị — trước mức trần, đến cuối nghĩa là còn mục nữa sắp tới.',
          '- `newItemsLimit` dừng demo này ở 24 mục; trong code thật, tín hiệu tương đương là API của bạn hết trang.',
        ].join('\n'),
      },
    ],
  },
  'custom-transition': {
    meta: {
      title: 'Hoạt ảnh cuộn tùy chỉnh trong React: easing và thời lượng',
      description:
        'Easing và thời lượng tùy chỉnh cho cuộn lập trình trong React: transitionBehavior trao cho bạn vị trí mục tiêu và bạn hoạt ảnh scrollLeft. Demo trực tiếp và nguồn.',
    },
    title: 'Hoạt ảnh cuộn tùy chỉnh: easing và thời lượng của riêng bạn',
    lede: 'Cuộn mượt gốc cho bạn một tốc độ và một đường cong, do trình duyệt chọn. Khi một lần cuộn lập trình phải khớp phần còn lại của thiết kế chuyển động, `noPolyfill={false}` để bạn tiếp quản — menu tính ray cần đi đâu, và code của bạn lái `scrollLeft` tới đó.',
    demoHint:
      'Bấm các mũi tên và đổi thời lượng — ở 2500 ms đường cong ease-in-out-cubic dễ thấy. Một cú bấm giữa hoạt ảnh hủy cái trước.',
    prose: [
      {
        heading: 'Cách hoạt động',
        body: 'Mặc định menu cuộn bằng `scrollIntoView` gốc và bỏ qua cả hai prop chuyển tiếp. Đặt `noPolyfill={false}` định tuyến cuộn lập trình qua polyfill scroll-into-view-if-needed, thứ tính mục tiêu và trao cho `transitionBehavior` của bạn như các chỉ dẫn: một hành động `{ el, top, left }` cho mỗi tổ tiên cuộn được phải di chuyển — ở đây luôn chỉ container cuộn, vì menu truyền nó làm ranh giới. Từ đó, `animateScroll` bước `el.scrollLeft` về phía mục tiêu mỗi `requestAnimationFrame`, ánh xạ tiến độ qua `easeInOutCubic` trên thời lượng đã chọn.',
      },
      {
        heading: 'Ngắt một hoạt ảnh đang bay',
        body: 'Một cú bấm mũi tên thứ hai có thể rơi giữa hoạt ảnh. Story giữ frame đang chờ theo phần tử trong một `WeakMap`, nên lời gọi mới hủy vòng `requestAnimationFrame` cũ thay vì để hai vòng tranh `scrollLeft`. Và vì mỗi hoạt ảnh đọc điểm bắt đầu từ `scrollLeft` hiện tại của phần tử, cái mới tiếp quản đúng nơi cái bị ngắt dừng lại.',
      },
      {
        heading: 'Ghi chú',
        body: [
          '- Không gì ở đây buộc vào hàm easing — một khi bạn có vị trí mục tiêu, bất kỳ đường cong hay thư viện hoạt ảnh nào cũng chạy.',
          '- Kiểu mô tả `transitionBehavior` là chuỗi `ScrollBehavior`, nhưng giá trị đi thẳng tới scroll-into-view-if-needed như callback `behavior` của nó — do đó có cast trong nguồn.',
          '- Story nối cùng state thời lượng vào `transitionDuration` và vào chính hoạt ảnh, để hai cái không lệch nhau.',
        ].join('\n'),
      },
    ],
  },

  'prevent-body-scroll': {
    meta: {
      title: 'Ngăn cuộn trang bằng con lăn: menu ngang React',
      description:
        'Cuộn một menu ngang React bằng con lăn chuột trong khi trang đứng yên: một listener con lăn gốc không passive bật khi hover. Demo trực tiếp và nguồn đầy đủ.',
    },
    title: 'Cuộn menu bằng con lăn — không cuộn trang',
    lede: 'Một menu ngang dưới con lăn chuột thật vụng về: con lăn cuộn trang và hàng đứng yên. Cách sửa có hai nửa — một handler `onWheel` biến tíc con lăn thành phân trang, và một listener gốc không passive ngăn trang di chuyển bên dưới. Nửa sau không thể làm bằng mỗi React.',
    demoHint:
      'Đỗ con trỏ trên hàng và xoay con lăn: hàng phân trang, trang đứng yên. Rời khỏi hàng và con lăn lại cuộn trang.',
    prose: [
      {
        heading: 'Biến con lăn thành phân trang',
        body: 'Prop `onWheel` của `ScrollMenu` được gọi với đối tượng API và sự kiện con lăn. Một con lăn chuột thật báo delta chỉ theo Y theo bước thô, nên handler gọi `scrollNext` khi `deltaY` âm và `scrollPrev` nếu không — mỗi tíc phân trang hàng. Trước tất cả, nó kiểm tra sự kiện có giống cử chỉ touchpad không: bất kỳ `deltaX` nào, hoặc `deltaY` dưới 15.',
      },
      {
        heading: 'Vì sao khóa trang cần listener gốc',
        body: "Gọi `preventDefault` trong handler React sẽ là cách hiển nhiên để dừng trang — và nó âm thầm chẳng làm gì, vì React đăng ký listener con lăn là passive, và listener passive bị cấm hủy sự kiện. Nên `usePreventBodyScroll` đi vòng qua React: trên `mouseenter` nó chạy `document.addEventListener('wheel', preventDefault, { passive: false })`, trên `mouseleave` nó gỡ listener. Khi con trỏ trên menu, mỗi sự kiện con lăn nổi lên `document` và bị hủy hành động mặc định — cuộn trang — ở đó. Một cleanup `useEffect` gọi `enableScroll` khi unmount, nên trang không bao giờ bị khóa lại.",
      },
      {
        heading: 'Lối thoát touchpad',
        body: 'Pan hai ngón cũng đến như sự kiện con lăn, và container cuộn gốc từ chúng — listener document sẽ giết điều đó. Với các sự kiện khớp heuristic touchpad, handler gọi `stopPropagation` và trả về: sự kiện không bao giờ tới listener document, nên pan gốc sống sót. Không có cách đáng tin để phát hiện touchpad; heuristic delta là phỏng đoán trung thực của story, và nó đứng vững trong thực tế.',
      },
      {
        heading: 'Ghi chú',
        body: [
          '- Trình duyệt biến listener con lăn cấp document thành passive mặc định chính xác để trang không giật khi cuộn — `passive: false` là lựa chọn thoát tường minh khiến `preventDefault` lại hợp lệ.',
          '- Con lăn lên phân trang tới và con lăn xuống phân trang lui — đó là ánh xạ của story; hoán đổi nhánh `scrollNext` / `scrollPrev` để đảo.',
          '- Thiết bị cảm ứng không chạy gì trong số này: không có `mouseenter`, và vuốt hàng là cuộn gốc từ đầu.',
          '- Khóa chỉ tồn tại giữa `mouseenter` và `mouseleave`, nên phần còn lại của trang cuộn bình thường ngay khi con trỏ rời ray.',
        ].join('\n'),
      },
    ],
  },

  'one-item-scroll': {
    meta: {
      title: 'Cuộn từng mục một trong React: mũi tên carousel chính xác',
      description:
        'Tiến một carousel React một mục mỗi cú bấm mũi tên: scrollToItem với getNextElement bước một thẻ thay vì cả trang. Demo trực tiếp và nguồn đầy đủ.',
    },
    title: 'Cuộn từng mục một thay vì cả trang',
    lede: 'Mặc định các mũi tên phân trang: mọi thứ hiển thị trượt ra và nhóm kế trượt vào. Ví dụ này nối lại chúng để bước — một thẻ mỗi cú bấm — và toàn bộ thay đổi là thứ `onClick` của mũi tên gọi. Cùng menu, cùng mục, khác mục tiêu cuộn.',
    demoHint:
      'Bấm một mũi tên — hàng tiến một thẻ, không phải một trang. Các mũi tên vô hiệu hóa ở hai đầu.',
    prose: [
      {
        heading: 'Cách hoạt động',
        body: '`getNextElement()` trả mục đầu tiên quá nhóm hiển thị; `getPrevElement()` cái ngay trước nó. Mũi tên phải gọi `scrollToItem(visibility.getNextElement(), ’smooth’, ’end’)` — căn mục đó với cạnh cuối của container cuộn vừa đủ để đưa nó vào view, làm hàng di chuyển đúng một thẻ. Mũi tên trái là gương của nó: phần tử trước, căn vào `’start’`.',
      },
      {
        heading: 'Căn chỉnh là toàn bộ mẹo',
        body: '`scrollNext()` chuẩn giải cùng phần tử kế bên trong, nhưng căn nó vào cạnh đầu — view cuộn qua cả nhóm hiển thị để đặt mục đó lên đầu. Một đối số `ScrollLogicalPosition` là khác biệt giữa phân trang và bước. Tham số thứ ba của `scrollToItem` là căn chỉnh `inline` chuẩn của scroll-into-view; cái thứ hai là hành vi, ở đây là `’smooth’`.',
      },
      {
        heading: 'Ghi chú',
        body: [
          '- Trạng thái mũi tên dùng các dạng ngắn `’first’` và `’last’`: `useIsVisible(’first’, true)` vô hiệu hóa mũi tên trái ở đầu, `useIsVisible(’last’, false)` mũi tên phải ở cuối.',
          '- Ở hai đầu `getNextElement()` trả undefined và `scrollToItem` âm thầm no-op, nên mũi tên đang bật vẫn không thể cuộn quá.',
          '- Handler `onWheel` của story vẫn phân trang cả view mỗi nấc con lăn — bước là hành vi của mũi tên, không phải chế độ toàn cục.',
          '- Cú bấm mục không bị đụng: các thẻ bật tắt chọn qua `onClick` riêng, độc lập với cách mũi tên cuộn.',
        ].join('\n'),
      },
    ],
  },

  'items-animation': {
    meta: {
      title: 'Hoạt ảnh thêm và xóa mục danh sách trong React',
      description:
        'Thêm, xóa và trộn các mục trong một danh sách ngang React, được hoạt ảnh bởi @formkit/auto-animate qua prop containerRef của ScrollMenu. Demo trực tiếp và nguồn đầy đủ.',
    },
    title: 'Hoạt ảnh mục vào, ra và vào đúng chỗ với auto-animate',
    lede: 'Thêm vào một danh sách ngang khiến mục mới bật ra đúng chỗ; xóa một mục khiến hàng xóm chụp lại gần nhau. `@formkit/auto-animate` sửa cả hai bằng một ref cha duy nhất — và prop `containerRef` của `ScrollMenu` trao đúng phần tử nó cần.',
    demoHint:
      'Thêm, xóa và trộn — mỗi lần vào, ra và sắp xếp lại đều được hoạt ảnh. Bản thân menu không có code hoạt ảnh.',
    prose: [
      {
        heading: 'Cách hoạt động',
        body: '`useAutoAnimate()` trả một ref phải đặt lên cha trực tiếp của các phần tử cần hoạt ảnh. Trong `ScrollMenu` cha đó là container cuộn: mỗi con bạn truyền được bọc trong một div mục, và các div mục đó là con trực tiếp của container. Story truyền ref xuyên suốt — `<ScrollMenu containerRef={parent}>` — và auto-animate tiếp quản từ đó: mục thêm vào ease in, mục xóa hoạt ảnh ra, và mục sắp xếp lại trượt về slot mới. Bản thân menu không bao giờ biết nó đang bị hoạt ảnh.',
      },
      {
        heading: 'Thêm, xóa, trộn',
        body: 'Ba điều khiển đều là các lời gọi `setState` thường trên mảng items — `addItems` thêm một, `removeItems` bỏ cái cuối, `shuffle` là một lượt Fisher–Yates trên bản sao. Các hoạt ảnh hoàn toàn đến từ các đột biến DOM mà những cập nhật đó gây ra. Một quy tắc đáng giữ: `itemId` kiêm vai key React và vai chốt của mục trong bản đồ theo dõi của menu, nên id phải giữ duy nhất — story thậm chí lấp lại khoảng trống đánh số do xóa để lại thay vì liều đúc ra một bản trùng.',
      },
      {
        heading: 'Cuộn và theo dõi tiếp tục hoạt động',
        body: 'Menu quan sát lại các con mỗi khi chúng đổi, nên `useIsVisible` của một mục mới thêm báo đúng ngay và các mũi tên tiếp tục phân trang. Tuy nhiên, mục mới thường hạ cánh ngoài màn hình — nếu màn vào phải thực sự được thấy, ghép cái này với `scrollToItem` như ví dụ add-item-and-scroll-to-it làm.',
      },
      {
        heading: 'Ghi chú',
        body: [
          '- `containerRef` nhận một đối tượng ref hoặc một ref callback — callback của `useAutoAnimate` cắm thẳng vào.',
          '- auto-animate không cấu hình và độc lập framework; liên kết React là một hook `useAutoAnimate` duy nhất.',
          '- Demo phía trên đơn giản hóa quản lý id thành bộ đếm đơn điệu; panel code cho thấy phiên bản lấp khoảng trống của story.',
        ].join('\n'),
      },
    ],
  },

  'mui-scrollable-tabs': {
    meta: {
      title: 'Lựa chọn thay thế tab cuộn MUI: tab cuộn gốc trình duyệt',
      description:
        'Vượt quá khả năng của MUI variant="scrollable"? Giữ hợp đồng value/onChange, có nút cuộn sống sót qua di động, vừa căn giữa vừa cuộn được. Nguồn đầy đủ.',
    },
    title: 'Tab cuộn được vượt ra ngoài MUI',
    lede: 'Các tab cuộn được của Material UI bị hàn vào ngữ nghĩa Tabs, và các nút cuộn của chúng mặc định biến mất trên di động. Công thức này giữ lại phần mà code của bạn phụ thuộc vào — hợp đồng `value`/`onChange` — và đổi dải bên dưới nó: cuộn gốc, một lựa chọn tự căn giữa, các tab có thể chứa bất kỳ thứ gì.',
    demoHint:
      'Bấm một tab gần một trong hai cạnh — nó tự căn giữa. Kéo hàng, như trên điện thoại.',
    prose: [
      {
        heading: 'Giữ hợp đồng value/onChange',
        body: '`handleChange` trong nguồn có đúng chữ ký của MUI — `(event, newValue)`. Di chuyển nghĩa là đổi markup, không phải nối lại state: `useState`, các handler và tab panel của bạn giữ nguyên không đổi. Lựa chọn tự căn giữa bằng `api.scrollToItem(el, ’smooth’, ’center’)`, được nối chính xác như trong [căn giữa khi bấm](/examples/center-on-click).',
      },
      {
        heading: 'Nút cuộn sống sót qua di động',
        body: 'MUI ẩn nút cuộn của nó dưới 600px trừ khi bạn bật bằng `allowScrollButtonsMobile` — và ngay cả khi đó chúng vẫn là nội bộ của Tabs. Ở đây các mũi tên là component của riêng bạn: `useIsVisible(’first’)` / `useIsVisible(’last’)` điều khiển một hiệu ứng mờ dần bằng opacity, chúng render trên mọi viewport, và cuộn cảm ứng vẫn là gốc bất kể mũi tên làm gì.',
      },
      {
        heading: 'Căn giữa và cuộn được, cùng lúc',
        body: 'Trong MUI, prop `centered` và variant `scrollable` loại trừ lẫn nhau — tài liệu bảo bạn chọn một trong hai. Ở đây căn giữa không phải một chế độ layout mà là một lần cuộn theo từng cú bấm, nên dải này là cả hai cùng lúc: nó tràn một cách gốc và mọi tab được chọn đều lướt về giữa.',
      },
      {
        heading: 'Tab không còn là tab nữa',
        body: 'Hai tab trong demo mang badge đếm số; chip, avatar hay nội dung hỗn hợp cũng hoạt động y hệt — yêu cầu duy nhất là một `itemId`. Style bằng `@emotion/styled` như trong nguồn, bằng `styled()` của riêng MUI để nó phù hợp với một ứng dụng Material, hoặc bằng Tailwind. Demo ở trên thêm [kéo để cuộn](/examples/mouse-drag); khôi phục tab đã chọn khi mount là [lưu và khôi phục vị trí](/examples/save-restore-position).',
      },
      {
        heading: 'Ghi chú',
        body: [
          '- Chọn mẫu ARIA của bạn: giữ `role="tablist"`/`role="tab"`/`aria-selected` khi panel thật sự chuyển đổi (như ở đây), hoặc `aria-current` khi "tab" là liên kết điều hướng.',
          '- Khi bật kéo, chặn cú bấm được kích hoạt lúc thả kéo — demo kiểm tra `dragManager.dragging` trước khi chọn, giống như [công thức kéo để cuộn](/examples/mouse-drag).',
          '- [RTL](/examples/rtl) không cần thêm việc gì: dải này là một vùng chứa cuộn gốc, nên `direction: rtl` lật nó, kể cả mũi tên.',
        ].join('\n'),
      },
    ],
  },
};
