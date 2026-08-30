<!-- i18n:start -->

[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · Tiếng Việt
<!-- i18n:meta locale=vi source=README.md source-blob=8f85dff5e27ce4fdbbe7523f271f45614ffabf1f status=translated -->
<!-- i18n:end -->

# React horizontal scrolling menu

[![npm](https://img.shields.io/npm/v/react-horizontal-scrolling-menu.svg)](https://www.npmjs.com/package/react-horizontal-scrolling-menu)
![Lượt tải npm](https://img.shields.io/npm/dm/react-horizontal-scrolling-menu)
![Kích thước bundle npm (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-horizontal-scrolling-menu.svg)
[![CI](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/main.yml/badge.svg)](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/main.yml)
[![Sẵn sàng nhận việc](https://img.shields.io/badge/available%20for%20hire-senior%20react%20engineer-2ea44f?style=flat-square)](https://asmyshlyaev177.dev)

Một component menu cuộn ngang cho React, được xây dựng trên cuộn gốc của trình
duyệt với tính năng theo dõi khả năng hiển thị theo từng mục. Phù hợp cho các
hàng danh mục, dải tab, bộ lọc chip, thư viện ảnh — bất kỳ hàng nội dung nào mà
ứng dụng của bạn cần xử lý. Các mục là component của riêng bạn với CSS của riêng
bạn; menu đáp ứng theo chiều rộng của phần tử cha; điều hướng hoạt động qua thanh
cuộn, cảm ứng, con lăn chuột, kéo thả hoặc các component mũi tên bạn cung cấp.
5.7 kB min+gzip.

![ví dụ](/sample.gif)

### [Trang chủ](https://react-horizontal-scrolling-menu.dev) · [Ví dụ trực tiếp (Storybook, có thể chỉnh sửa trong trình duyệt)](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu) · [API](#thuộc-tính-và-callback) · [Kỹ năng cho tác nhân AI](#sử-dụng-với-ai-coding-agent)

### Được sử dụng bởi

Hơn 20.000 kho lưu trữ phụ thuộc vào thư viện này. Năm kho bạn có thể đọc —
mỗi liên kết dẫn thẳng đến dòng `import` trong component sử dụng nó, được ghim
vào một commit, chứ không phải `package.json`:

- [Our World in Data](https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/gdocs/components/KeyInsights.tsx#L3) — thanh trượt insight chính trong trình kết xuất bài viết của họ; còn có [bộ lọc chủ đề](https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/latest/LatestTopicFacets.tsx#L10), bao quanh một `ToggleButton` của react-aria. `^8.2.0`
- [Precious Plastic / ONE ARMY](https://github.com/ONEARMY/community-platform/blob/90c1be6be0ad450a92d9483577433fdc8b09f477/packages/components/src/VerticalList/VerticalList.client.tsx#L6-L7) — `VerticalList` trong gói component dùng chung, xây dựng trực tiếp từ tài liệu của thư viện này. `^8.2.0`
- [erxes](https://github.com/erxes/erxes/blob/efef0252d390f4072e21c0a188d289f01866b188/apps/posclient-front/components/ui/horizontalScrollMenu.tsx#L6) — menu danh mục trong ứng dụng bán hàng POS. `^4.0.4`
- [Reapit](https://github.com/reapit/foundations/blob/9edda57691befd398547bcdf4013916b85face52/packages/app-builder/src/components/ui/viewport/tab-bar.tsx#L4) — thanh tab viewport trong trình dựng ứng dụng. `^3.2.5`
- [AWS Performance Dashboard](https://github.com/aws-solutions/performance-dashboard-on-aws/blob/cffa9c822ac8288a44d13a9394a2255e574c7592/frontend/src/components/Tabs.tsx#L8) — component `Tabs` của bảng điều khiển; [`Arrows`](https://github.com/aws-solutions/performance-dashboard-on-aws/blob/cffa9c822ac8288a44d13a9394a2255e574c7592/frontend/src/components/Arrows.tsx#L9) của họ dùng trực tiếp `VisibilityContext`. Lưu trữ năm 2024, ghim `^2.1.1`.

Cũng được giới thiệu trên [React Status #257](https://react.statuscode.com/issues/257).

## Bắt đầu nhanh

```bash
npm install react-horizontal-scrolling-menu
```

Bạn dùng [shadcn/ui](https://ui.shadcn.com)? Một lệnh duy nhất cài đặt component đã được style sẵn — nút mũi tên nhận biết mép, kéo để cuộn, thanh cuộn ẩn — thẳng vào `components/ui/` của bạn:

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

Ba điều mà ví dụ dựa vào:

- Mỗi mục cần một prop `itemId` duy nhất — đó là cách theo dõi khả năng hiển thị
  hoạt động. `key` của React hoạt động như một phương án dự phòng.
- `styles.css` là một import riêng; bundle JS không bao giờ tiêm CSS.
- Chiều rộng mục đến từ CSS của riêng bạn — menu không đo lường gì cả.

Viết JavaScript thuần? Bỏ các import kiểu và dùng `React.useContext(VisibilityContext)`
như bình thường.

## Sử dụng với AI coding agent

Các mô hình được huấn luyện trên các phiên bản cũ vẫn tìm đến `visibleElements`,
các mục `Separator` và prop `Arrows` — tất cả đã bị xóa — và bịa ra một prop
`autoplay` chưa từng tồn tại. Gói này đi kèm tám file `SKILL.md` để ngăn điều đó:
hướng dẫn theo nhiệm vụ được tải theo yêu cầu qua
[TanStack Intent](https://tanstack.com/intent/latest/docs/overview), được lập
phiên bản cùng thư viện thay vì cùng bất kỳ trang web nào.

```bash
npm install react-horizontal-scrolling-menu
npx @tanstack/intent@latest install   # một lần cho mỗi dự án
```

`install` thêm khả năng phát hiện kỹ năng vào cấu hình của tác nhân (`CLAUDE.md`,
`.cursorrules`, …); sau đó tác nhân tải một kỹ năng theo yêu cầu từ
`node_modules/react-horizontal-scrolling-menu/skills/`. Liệt kê hoặc tải trực
tiếp bằng `npx @tanstack/intent@latest list` và
`npx @tanstack/intent@latest load react-horizontal-scrolling-menu#menu-setup`.

| Kỹ năng                | Khi nó được tải                                              |
| ---------------------- | ------------------------------------------------------------ |
| `menu-setup`           | Menu đầu tiên hoạt động, mũi tên, import CSS bắt buộc        |
| `menu-visibility`      | Cái gì đang trên màn hình và trạng thái mũi tên ở hai đầu    |
| `menu-scrolling`       | `scrollToItem`, `apiRef`, phân trang từng trang              |
| `menu-interactions`    | Kéo, con lăn và cảm ứng — và các factory xử lý của chúng     |
| `menu-recipes`         | Tự phát, vòng lặp vô hạn, tải thêm: recipe, không phải props |
| `menu-transitions-rtl` | Thời gian hoạt ảnh, easing tùy chỉnh, phải sang trái         |
| `menu-testing-ssr`     | Next.js và RSC, mock Jest, Playwright                        |
| `menu-migration`       | Nâng cấp code trước v8 và các API mà mô hình vẫn bịa ra      |

Nguồn nằm trong [`skills/`](skills/). Các tác nhân không thể tải kỹ năng Intent
nên đọc [llms.txt](https://react-horizontal-scrolling-menu.dev/llms.txt) — cùng
các thông tin đó, cô đọng trong một file.

## Nó làm gì — và không làm gì

Được xây trên cuộn gốc của trình duyệt: quán tính, thanh cuộn, cảm ứng, con lăn
và khả năng tiếp cận đến từ trình duyệt, không phải từ một sự tái hiện vật lý.
Trên đó: khả năng hiển thị theo từng mục qua IntersectionObserver, `scrollToItem`
/ `scrollNext` / `scrollPrev`, một `apiRef` để điều khiển từ bên ngoài, các slot
Header và Footer, RTL, phát hiện thêm/xóa động và các kiểu TypeScript ở khắp nơi.
An toàn với SSR — [trang chủ](https://react-horizontal-scrolling-menu.dev) render
từng bản demo trên server.

Không có engine carousel: không có vật lý snap hay lò xo — nếu bạn muốn một
slider ảnh toàn màn hình, hãy dùng Embla hoặc Swiper. [Trang so sánh](https://react-horizontal-scrolling-menu.dev/compare) nói thẳng khi nào chúng thắng, kèm các bài phân tích sâu: [Embla vs Swiper](https://react-horizontal-scrolling-menu.dev/compare/embla-vs-swiper), [các lựa chọn thay thế react-slick](https://react-horizontal-scrolling-menu.dev/compare/react-slick-alternatives) và [các lựa chọn thay thế Swiper](https://react-horizontal-scrolling-menu.dev/compare/swiper-alternatives). Tự phát và vòng lặp vô hạn
cũng không phải props; chúng là các recipe khoảng sáu mươi dòng mỗi cái trên API
công khai, có thể chỉnh sửa trực tiếp trong Storybook
([vòng lặp vô hạn](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-infiniteloop--infinite-loop),
[tự phát](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-autoplay--autoplay)).
Nếu bạn cần một hàng biết cái gì đang hiển thị, thì đây chính là nó.

## Ví dụ

Các mẫu hoàn chỉnh theo mục tiêu, mỗi mẫu có demo render phía máy chủ, mã nguồn và lệnh cài shadcn tương ứng: [dải kiểu Netflix](https://react-horizontal-scrolling-menu.dev/netflix-row) · [tab cuộn được](https://react-horizontal-scrolling-menu.dev/scrollable-tabs) · [chip lọc](https://react-horizontal-scrolling-menu.dev/filter-chips) · [rail danh mục](https://react-horizontal-scrolling-menu.dev/category-rail).

Mỗi ví dụ đều có thể chỉnh sửa trực tiếp trong
[Storybook](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu) —
mỗi story đi kèm một trình soạn thảo Monaco được nạp các định nghĩa kiểu thực
của thư viện. Bao gồm: cách dùng cơ bản, cuộn từng mục một, kéo chuột, cuộn đến
mục khi mount, căn giữa khi click, thêm mục động, lưu/khôi phục vị trí, hoạt ảnh
mục, chấm tiến độ, ngăn cuộn body, chuyển tiếp tùy chỉnh, vòng lặp vô hạn, tự
phát, bố cục dọc, mũi tên ở footer, vuốt trên di động, RTL và một bài kiểm tra
tải với 5,000 mục.

<!-- DOCS_START -->

### Các helper và API

Các phần tử con của component chính ScrollMenu (mũi tên, header, footer, mục)
có thể dùng **VisibilityContext** để truy cập trạng thái và callback. Các
callback dạng hàm cũng nhận context, ví dụ `onWheel`, `onScroll`.

## Thuộc tính và callback

| Prop                     | Chữ ký                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------- |
| LeftArrow                | Component React cho mũi tên trái                                                                        |
| RightArrow               | Component React cho mũi tên phải                                                                        |
| Header                   | Component React Header                                                                                  |
| Footer                   | Component React Footer                                                                                  |
| onWheel                  | (VisibilityContext, event) => void                                                                      |
| onScroll                 | (VisibilityContext, event) => void, kích hoạt _trước khi_ cuộn ổn định                                  |
| onInit                   | (VisibilityContext) => void                                                                             |
| onUpdate                 | (VisibilityContext) => void                                                                             |
| apiRef                   | React.RefObject \| React.RefCallback                                                                    |
| options                  | tùy chọn cho IntersectionObserver — `rootMargin`, `threshold` và `ratio` để coi một phần tử là hiển thị |
| containerRef             | React.RefObject \| React.RefCallback cho container cuộn                                                 |
| onMouseDown              | (VisibilityContext) => (React.MouseEventHandler) => void                                                |
| onMouseLeave             | (VisibilityContext) => (React.MouseEventHandler) => void                                                |
| onMouseUp                | (VisibilityContext) => (React.MouseEventHandler) => void                                                |
| onMouseMove              | (VisibilityContext) => (React.MouseEventHandler) => void                                                |
| onTouchMove              | (VisibilityContext) => (React.TouchEventHandler) => void                                                |
| onTouchStart             | (VisibilityContext) => (React.TouchEventHandler) => void                                                |
| onTouchEnd               | (VisibilityContext) => (React.TouchEventHandler) => void                                                |
| itemClassName            | ClassName của Item                                                                                      |
| scrollContainerClassName | ClassName của scrollContainer                                                                           |
| wrapperClassName         | ClassName của div ngoài cùng                                                                            |
| transitionDuration       | Thời lượng chuyển tiếp tính bằng ms, mặc định `500`, cần `noPolyfill={false}`                           |
| transitionBehavior       | 'smooth' \| 'auto' \| hàm tùy chỉnh, cần `noPolyfill={false}`                                           |
| RTL                      | Bật hướng phải sang trái                                                                                |
| noPolyfill               | `true` theo mặc định (scrollIntoView gốc); đặt `false` để bật các prop chuyển tiếp                      |

Lưu ý hai dạng callback: `onWheel` và `onScroll` là `(context, event) => void`
thuần, trong khi các prop chuột và cảm ứng là các factory xử lý — `(context) =>
(event) => void`. Xem
[story MouseDrag](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-mousedrag--mouse-drag)
để thấy pattern factory đang được dùng.

### VisibilityContext

Các hook (chỉ gọi chúng bên trong các component được render dưới ScrollMenu,
tuân theo các quy tắc của hook):

| Hook                 | Chữ ký                                                                   |
| -------------------- | ------------------------------------------------------------------------ |
| useIsVisible         | (itemId: string \| 'first' \| 'last', defaultValue?: boolean) => boolean |
| useLeftArrowVisible  | () => boolean                                                            |
| useRightArrowVisible | () => boolean                                                            |

Giá trị và hàm:

| Prop                  | Chữ ký                                                 |
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
| items                 | thể hiện của lớp ItemsMap                              |
| scrollContainer       | Ref<OuterContainer>                                    |

### thể hiện của lớp items

ItemsMap lưu thông tin về tất cả các mục, với các phương thức để lấy các mục hiện
đang hiển thị và mục trước hoặc sau. Bạn cũng có thể đăng ký nhận cập nhật.

| Prop/phương thức | Mô tả                                                                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| subscribe        | đăng ký nhận sự kiện cho `itemId` hoặc `first`, `last`, `onInit`, `onUpdate`, v.d. `items.subscribe('item5', (item) => setVisible(item.visible))` |
| unsubscribe      | dùng trong useEffect để dọn dẹp, truyền cùng thể hiện callback                                                                                    |
| getVisible       | chỉ trả về các mục hiển thị                                                                                                                       |
| toItems          | trả về id của tất cả các mục                                                                                                                      |
| toArr            | trả về tất cả các mục                                                                                                                             |
| first            | trả về mục đầu tiên                                                                                                                               |
| last             | trả về mục cuối cùng                                                                                                                              |
| prev             | (itemId \| Item) => mục trước \| undefined                                                                                                        |
| next             | (itemId \| Item) => mục sau \| undefined                                                                                                          |

### Chuyển tiếp và hoạt ảnh

`transitionDuration` và `transitionBehavior` (`'smooth'`, `'auto'` hoặc một hàm
tùy chỉnh) điều khiển cách `scrollToItem` và các helper cuộn tạo hoạt ảnh. Cả
hai đều cần `noPolyfill={false}` — cuộn gốc mặc định bỏ qua chúng. Chúng không
kết hợp được với prop `RTL`.

Xem
[story CustomTransition](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-customtransition--custom-transition)
để biết một hàm easing tùy chỉnh.

#### ScrollOptions

Đối số cuối cùng của `scrollToItem`, `scrollPrev` và `scrollNext` ghi đè các
prop chuyển tiếp cho riêng lần gọi đó:

```tsx
scrollToItem(getItemElementById('item-5'), 'smooth', 'center', 'nearest', {
  duration: 800, // mili giây
});
```

### Các helper khác

#### slidingWindow

Lấy nhóm các mục hiển thị trước hoặc sau:

```tsx
slidingWindow(allItems, visibleItems).prev();
// hoặc .next()
```

#### getItemsPos

Lấy mục đầu tiên, chính giữa và cuối cùng của một nhóm — v.d. để cuộn đến chính
giữa trang trước:

```tsx
const prevGroup = slidingWindow(allItems, visibleItems).prev();
const { center } = getItemsPos(prevGroup);
scrollToItem(getItemById(center), 'smooth', 'center');
```

### apiRef

Truyền một ref cho ScrollMenu và giá trị VisibilityContext đầy đủ sẽ được gán
cho nó — hữu ích để kích hoạt các hàm như `scrollToItem` từ bên ngoài menu. Các
giá trị dữ liệu trên ref có thể bị cũ đi, nên hãy ưu tiên gọi các hàm:

```tsx
apiRef.current.scrollToItem(apiRef.current.getItemElementById('item-3'));
```

Bạn cũng có thể truy cập trực tiếp phần tử DOM của một mục qua
``document.querySelector(`[data-key='${itemId}']`)``. Xem
[story ScrollToItem](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-scrolltoitem--scroll-to-item)
và
[story AddItemAndScrollToIt](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-additemandscrolltoit--add-item-and-scroll-to-it).

<!-- DOCS_END -->

## SSR

Thư viện an toàn với SSR: lần render đầu tiên phát ra markup thuần và
IntersectionObserver chỉ gắn ở phía client. Đối số `defaultValue` của
`useIsVisible` điều khiển trạng thái render trên server — pattern mũi tên chuẩn
(`('first', true)` / `('last', false)`) render một mũi tên trái bị vô hiệu hóa
và mũi tên phải được bật, khớp với một hàng được cuộn về đầu.

### Lưu ý về Next.js

Gói này ưu tiên ESM. Trên các thiết lập Next.js cũ, bạn có thể gặp
[“Cannot use import statement outside a module”](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/240) —
thêm gói vào
[`transpilePackages`](https://nextjs.org/docs/app/api-reference/config/next-config-js/transpilePackages)
sẽ giải quyết.

## Hỗ trợ trình duyệt

Yêu cầu **IntersectionObserver** và **requestAnimationFrame** — mọi trình duyệt
hiện đại. Không hỗ trợ IE.

## Phát triển

```bash
git clone https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
cd react-horizontal-scrolling-menu
pnpm run setup
pnpm run demo        # app ví dụ (Next.js, cổng 3003) với thư viện ở chế độ watch
pnpm run demo-tanstack  # app ví dụ (TanStack Start SSR, cổng 3004)
pnpm run storybook   # ví dụ
pnpm test            # kiểm thử unit + e2e + storybook
```

Hai app ví dụ tích hợp nằm trong repo — `example-nextjs` và `example-tanstack`
(TanStack Start, render trên server trong workerd) — cả hai đều render cùng một
bản demo (kéo chuột, khóa cuộn body, hoạt ảnh tùy chỉnh với bảng điều khiển) để
bộ kiểm thử e2e duy nhất trong `e2e/` chạy đối chiếu với thư viện trên cả hai
framework, bao gồm một xác nhận rằng menu đã có mặt trong HTML render trên
server.

Các đóng góp và sửa lỗi đều được hoan nghênh — fork, commit, mở một PR và đừng
quên kiểm thử. Xem [CONTRIBUTING](./CONTRIBUTING.md) và
[CHANGELOG](./CHANGELOG.md).

Tài liệu cho [API v1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/tree/v1) cũ.

## Giới thiệu

Được xây dựng và duy trì bởi **Aleksandr Smyshliaev** từ năm 2018 — gói npm đầu
tiên của tôi, và vẫn cùng một API công khai qua React 16.8 đến 19. Tôi là kỹ sư
frontend (React / Next.js / TypeScript) và **sẵn sàng cho công việc theo hợp
đồng và toàn thời gian**.

- **Liên hệ với tôi** — [asmyshlyaev177.dev](https://asmyshlyaev177.dev) ·
  [asmyshlyaev177@gmail.com](mailto:asmyshlyaev177@gmail.com) ·
  [LinkedIn](https://linkedin.com/in/asmyshlyaev177) · Telegram @asmyshlyaev177
- **Cũng của tôi** — [state-in-url](https://github.com/asmyshlyaev177/state-in-url)
  (trạng thái URL có kiểu),
  [test-proxy-recorder](https://github.com/asmyshlyaev177/test-proxy-recorder)
  (ghi/phát lại cho Playwright)

Một ⭐️ trên repo giúp nhiều người tìm thấy thư viện hơn.
