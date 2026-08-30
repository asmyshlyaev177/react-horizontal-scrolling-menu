// Vietnamese (vi) — translation of en/use-cases.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=vi source=en/use-cases.ts source-blob=0bba3e70db5e9e86a65737d044573e94eae8728e status=translated
import type { UseCasesCopy } from '../types.ts';

export const useCases: UseCasesCopy = {
  hub: {
    heading: 'Trường hợp sử dụng',
    lede: 'Các mẫu hoàn chỉnh theo mục tiêu — demo trực tiếp, mã nguồn và lệnh cài shadcn.',
  },

  netflixRow: {
    name: 'Dải kiểu Netflix',
    blurb:
      'Thẻ poster, mũi tên hiện khi hover ở mép, mờ dần ở mép, kéo để cuộn.',
    meta: {
      title: 'Dải cuộn ngang kiểu Netflix trong React',
      description:
        'Xây dựng dải danh mục kiểu Netflix trong React với cuộn gốc trình duyệt: mũi tên khi hover, mờ dần ở cạnh, kéo để cuộn, theo dõi khả năng hiển thị. Demo trực tiếp và mã nguồn đầy đủ.',
    },
    jsonLdHeadline:
      'Cách xây dựng dải cuộn ngang kiểu Netflix trong React — không cần thư viện carousel',
    title: 'Dải cuộn ngang kiểu Netflix trong React',
    lede: 'Dải áp phích bạn lướt qua trên mọi trang xem phim trực tuyến chạy trên cuộn quán tính gốc của trình duyệt với các mũi tên phủ lên trên. Đó chính xác là những gì `react-horizontal-scrolling-menu` cung cấp: thẻ của bạn, cuộn gốc, và khả năng hiển thị theo từng item để mũi tên biết khi nào cần ẩn.',
    demoHint:
      'Kéo nó, hoặc di chuột qua dải — các mũi tên mờ dần hiện lên ở các cạnh, và mỗi mũi tên biến mất khi đến đầu dải tương ứng.',
    prose: [
      {
        heading: 'Tại sao cuộn gốc phù hợp',
        body: `Dải Netflix không bao giờ hiển thị từng slide một lúc. Các item bị cắt một phần ở các cạnh một cách có chủ ý — tấm áp phích bị cắt là tín hiệu thị giác nói rằng "còn nữa". Các engine carousel chống lại điều này: chúng chiếm lấy tầng cử chỉ bằng các phép biến đổi JavaScript, snap vào ranh giới slide, và tái triển khai quán tính mà trình duyệt của người dùng vốn đã có sẵn. Trên một dải thẻ có thể nhấp, tất cả những điều đó là chi phí thừa.

Cuộn gốc cho bạn quán tính, cảm ứng, trackpad và thanh cuộn miễn phí. Hai thứ nó không cho bạn là mũi tên phủ lên và biết thẻ nào đang trên màn hình — và đó chính là hai thứ thư viện này bổ sung, thông qua [\`useIsVisible\`](/examples/simple) cho từng item và trạng thái mũi tên nhận biết cạnh.`,
      },
      {
        heading: 'Ba chi tiết làm nên hiệu ứng',
        body: `- **Mũi tên phủ lên nội dung**, không nằm cạnh nó. Hiển thị chúng với vị trí tuyệt đối trên các đầu dải (demo ở trên truyền chúng qua \`Header\` để chúng ở trong ngữ cảnh của menu), hiện chúng khi hover, và ẩn từng mũi tên khi [\`useLeftArrowVisible\` / \`useRightArrowVisible\`](/examples/simple) báo rằng đầu dải đó đã đạt tới.
- **Các cạnh mờ dần.** Một dòng CSS — gradient \`mask-image\` trên vùng chứa cuộn — thay thế logic "hé lộ" mà các plugin carousel cung cấp cho việc này.
- **Kéo không được kích hoạt click.** Một thao tác kéo chuột kết thúc trên một áp phích không được mở nó. [Công thức kéo để cuộn](/examples/mouse-drag) theo dõi trạng thái kéo và nuốt chính xác cú click đó.`,
      },
      {
        heading: 'Mở rộng quy mô: dải lười tải và rail dài',
        body: `Giao diện xem phim trực tuyến xếp chồng hàng chục dải với hàng trăm thẻ. Vì các item là DOM thuần trong một vùng chứa cuộn gốc, không có gì render lại khi cuộn — [ví dụ hiệu năng](/examples/performance) chạy 300 item mà không cần virtualization. Khả năng hiển thị theo từng item cũng cho bạn lazy-loading ảnh miễn phí: render một placeholder cho đến khi \`useIsVisible\` báo thẻ đã lên màn hình.

Nếu dải của bạn cần quay vòng ở cuối, đó là nơi duy nhất mà ngữ nghĩa slide thực sự hữu ích — xem [công thức vòng lặp vô hạn](/examples/infinite-loop) cho phiên bản userland ~60 dòng trước khi tìm đến một engine carousel.`,
      },
    ],
    snippet: {
      heading: 'Mẫu hình, tối giản',
      lede: 'Phủ mũi tên lên một dải cuộn gốc — demo ở trên chính là cấu trúc này cộng với styling. Mã nguồn drop-in hoàn chỉnh, có kéo và mờ cạnh, được cung cấp dưới dạng component shadcn bên dưới.',
    },
    shadcn: {
      heading: 'Hoặc cài đặt nó như một component shadcn',
      body: 'Registry item [media-row](https://react-horizontal-scrolling-menu.dev/r/media-row.json) chính là mẫu hình này — mũi tên khi hover, mờ dần cạnh bằng gradient, kéo để cuộn — dưới dạng component được style bằng Tailwind trong `components/ui/` của bạn, sẵn sàng để bạn chỉnh sửa:',
    },
  },

  scrollableTabs: {
    name: 'Tab cuộn được',
    blurb: 'Dải tab tràn một cách mượt mà và tự căn giữa tab đang chọn.',
    meta: {
      title: 'Tab cuộn React — không cần Material UI',
      description:
        'Tab cuộn trong React với cuộn gốc trình duyệt: tab đang chọn tự căn giữa, mũi tên chỉ xuất hiện khi cần, nội dung tab tự do. Demo trực tiếp và mã nguồn.',
    },
    jsonLdHeadline:
      'Tab cuộn trong React: cuộn gốc, lựa chọn được căn giữa, không cần Material UI',
    title: 'Tab cuộn React cuộn giống như trình duyệt',
    lede: 'Một dải tab hết vừa ngay khi sản phẩm của bạn vượt quá sáu tab. Cách khắc phục không phải là font nhỏ hơn — mà là một dải có thể cuộn: phần tràn được xử lý bởi trình duyệt, nhấp vào một tab sẽ căn giữa nó, và mũi tên chỉ hiện lên khi còn chỗ để đi.',
    demoHint: 'Nhấp vào một tab gần cạnh — nó tự cuộn về giữa.',
    prose: [
      {
        heading: 'Hành vi duy nhất quan trọng: căn giữa khi chọn',
        body: `Một dải tab cuộn được sống hay chết dựa vào điều xảy ra khi bạn nhấp vào một tab ở cạnh: nó cần trượt về giữa, để lộ các tab lân cận ở cả hai bên. Đó là một lệnh gọi duy nhất ở đây — \`scrollToItem(el, 'smooth', 'center')\` — được nối trong [ví dụ căn giữa khi click](/examples/center-on-click). Khôi phục tab đang chọn khi mount là cùng lệnh gọi đó với \`'auto'\`, được minh họa trong [lưu & khôi phục vị trí](/examples/save-restore-position).

Các mũi tên đến từ cùng dữ liệu hiển thị: \`useLeftArrowVisible\` chỉ là false khi tab đầu tiên nằm ngoài màn hình, vì vậy mũi tên trái render chính xác khi nó hữu ích. Không cần code đo lường, không cần resize observer của riêng bạn.`,
      },
      {
        heading: 'Nếu bạn đang vượt quá khả năng của tab cuộn MUI',
        body: `Tab \`variant="scrollable"\` của Material UI là câu trả lời đúng bên trong hệ thống thiết kế Material — cho đến khi "tab" của bạn không còn là tab nữa. MUI hàn dải này vào ngữ nghĩa Tabs: một cặp \`value\`/\`onChange\`, các tab panel, và nút cuộn mà MUI mặc định ẩn trên mobile. Ngay khi dải của bạn chứa chip, thẻ, avatar hay nội dung hỗn hợp, hoặc cần kéo để cuộn, hoặc cần biết item nào đang hiển thị, bạn đang chống lại component thay vì sử dụng nó.

Thư viện này là tầng bên dưới điều đó: một dải cuộn có theo dõi khả năng hiển thị, không có quan điểm gì về "tab" là gì. Tab của bạn là bất kỳ component nào có \`itemId\` — style nó bằng Tailwind, \`styled\` của riêng MUI, hoặc CSS thuần. Trạng thái lựa chọn vẫn thuộc về bạn, hệt như demo ở trên giữ nó trong một \`useState\` duy nhất. Công thức [tab cuộn được vượt ra ngoài MUI](/examples/mui-scrollable-tabs) chính là cầu nối đó được viết ra — \`value\`/\`onChange\` giữ nguyên, dải được đổi.`,
      },
      {
        heading: 'Khả năng truy cập gần như miễn phí — chú ý hai lỗ hổng',
        body: `Vì dải này là một vùng chứa cuộn gốc, focus bàn phím, thứ tự đọc của trình đọc màn hình và RTL đều đến từ nền tảng — di chuyển focus qua các tab tự cuộn chúng vào tầm nhìn mà không cần code, và [RTL](/examples/rtl) không cần cấu hình gì. Hai điều vẫn thuộc trách nhiệm của bạn, giống như bất kỳ UI tab nào: chọn mẫu ARIA của bạn (\`role="tablist"\` nếu panel thật sự chuyển đổi, \`aria-current\` nếu "tab" là điều hướng), và giữ việc ngăn click của công thức [kéo để cuộn](/examples/mouse-drag) để một lần thả kéo không bao giờ kích hoạt một tab.`,
      },
    ],
    snippet: {
      heading: 'Mẫu hình, tối giản',
      lede: 'Tab là các nút thuần với `itemId`; chọn một tab sẽ căn giữa nó. Đó là toàn bộ ý tưởng — demo ở trên thêm styling và kéo.',
    },
    shadcn: {
      heading: 'Hoặc cài đặt nó như một component shadcn',
      body: 'Registry item [scroll-tabs](https://react-horizontal-scrolling-menu.dev/r/scroll-tabs.json) cung cấp mẫu hình này theo hướng dữ liệu — truyền `tabs`, `value`, `onValueChange` — dưới dạng component có thể chỉnh sửa trong `components/ui/` của bạn:',
    },
  },

  filterChips: {
    name: 'Chip lọc',
    blurb:
      'Thanh chip tự cuộn bộ lọc mới vào vùng nhìn thấy mà không phá vỡ thao tác nhấp.',
    meta: {
      title: 'Chip lọc React trong thanh cuộn',
      description:
        'Thanh chip lọc ngang trong React: chip cuộn theo cách gốc, thêm một chip sẽ cuộn nó vào tầm nhìn, kéo để cuộn mà không phá vỡ click. Demo trực tiếp và mã nguồn.',
    },
    jsonLdHeadline:
      'Xây dựng một thanh chip lọc có thể cuộn trong React bằng cuộn gốc',
    title: 'Một thanh chip lọc có thể cuộn, trong React',
    lede: 'Dải chip bên dưới mọi thanh tìm kiếm — chủ đề YouTube, bộ lọc cửa hàng, bộ chọn tag — là một vùng chứa cuộn một dòng đầy các nút bật/tắt. 10% khó là những gì xảy ra ở các cạnh: chip mới xuất hiện ngoài màn hình, thao tác kéo không được bật/tắt bất cứ thứ gì, và mũi tên biết khi nào chúng vô nghĩa.',
    demoHint: 'Thêm một bộ lọc — dải sẽ tự cuộn chip mới vào tầm nhìn.',
    prose: [
      {
        heading: 'Trường hợp biên chính là tính năng',
        body: `Bất kỳ dải flex nào với \`overflow-x: auto\` đều cuộn được. Một thanh chip chứng minh giá trị của nó ở các chi tiết:

- **Một chip được thêm ngoài màn hình phải tự thông báo.** Demo cuộn đến mỗi chip mới bằng \`apiRef.current.scrollToItem(el, 'smooth', 'end')\` sau khi render — [ví dụ thêm item và cuộn đến nó](/examples/add-item-and-scroll-to-it) chính là cách nối này.
- **Kéo để cuộn, click để bật/tắt — không bao giờ cả hai.** Người dùng desktop kéo dải như một bề mặt cảm ứng; thả trên một chip không được lật trạng thái nó. [Công thức kéo](/examples/mouse-drag) theo dõi cử chỉ và ngăn chính cú click đó.
- **Mũi tên chỉ khi hữu ích.** \`useLeftArrowVisible\` / \`useRightArrowVisible\` được nối vào cùng một IntersectionObserver như mọi thứ khác, vì vậy mũi tên bị vô hiệu hóa ở các cạnh thật — kể cả sau khi chip được thêm hoặc xóa.`,
      },
      {
        heading: 'Trạng thái vẫn nằm trong tay bạn',
        body: `Thư viện chỉ cuộn; nó không sở hữu lựa chọn. Chip là các nút của bạn — \`aria-pressed\` cho các nút bật/tắt đa lựa chọn, state thuần cho đơn lựa chọn — và menu chỉ cần mỗi chip mang một \`itemId\`. Điều đó nghĩa là trạng thái chip kết hợp được với bất cứ thứ gì bạn đã có: URL search params, một thư viện form, một mô hình lọc do server điều khiển. Xóa một chip là [xóa một item](/examples/add-items); tạo hiệu ứng biến mất là [ví dụ hoạt ảnh item](/examples/items-animation).`,
      },
      {
        heading: 'Di động: một cảnh báo về cuộn body',
        body: `Trên màn hình cảm ứng, một thao tác vuốt ngang bên trong thanh có thể kéo cả trang theo hướng ngang trên một số trình duyệt. Nếu bạn gặp điều đó, [ví dụ ngăn cuộn body](/examples/prevent-body-scroll) trình bày \`touch-action\` và overscroll containment để khóa nó lại — chỉ dùng CSS, không cần thư viện cử chỉ.`,
      },
    ],
    snippet: {
      heading: 'Mẫu hình, tối giản',
      lede: 'Chip là các nút bật/tắt với `itemId`; một ref đến menu API sẽ cuộn chip vừa thêm vào tầm nhìn.',
    },
    shadcn: {
      heading: 'Hoặc cài đặt nó như một component shadcn',
      body: 'Registry item [chip-bar](https://react-horizontal-scrolling-menu.dev/r/chip-bar.json) cung cấp cái này như một controlled component — `options`, `selected`, `onSelectedChange` — được style bằng Tailwind trong `components/ui/` của bạn:',
    },
  },

  categoryRail: {
    name: 'Rail danh mục',
    blurb:
      'Hàng danh mục cửa hàng: mũi tên nhận biết mép, ảnh tải lười, đo lường.',
    meta: {
      title: 'Rail danh mục React cho thương mại điện tử',
      description:
        'Rail danh mục ngang trong React: cuộn gốc, mũi tên vô hiệu hóa ở các cạnh, khả năng hiển thị theo từng item cho lazy image và phân tích. Demo và mã nguồn.',
    },
    jsonLdHeadline:
      'Xây dựng một rail danh mục thương mại điện tử trong React trên nền cuộn gốc',
    title: 'Một rail danh mục cho cửa hàng của bạn, trong React',
    lede: 'Rail danh mục — dải các bộ phận có thể chạm phía trên lưới cửa hàng — là các vùng chứa cuộn có lưu lượng cao nhất trong thương mại điện tử: mỗi ô là một liên kết, không có gì snap, và một nửa ô hé lộ ở cạnh chính là thứ mời gọi người dùng cuộn.',
    demoHint:
      'Kéo rail hoặc dùng mũi tên — chúng vô hiệu hóa ở các đầu thật sự của dải.',
    prose: [
      {
        heading: 'Tại sao cuộn gốc thắng thế trên một trang cửa hàng',
        body: `Rail cửa hàng nằm ở phần trên cùng của trang, nơi bạn tranh giành từng điểm Lighthouse. Một engine carousel cung cấp hàng chục kilobyte mô phỏng cử chỉ để làm điều mà trình duyệt vốn làm sẵn; thư viện này chỉ ≈5.7 kB min+gzip và để việc cuộn cho nền tảng, vì vậy không có hiện tượng giật khi hydrate — rail cuộn được trước khi JavaScript của bạn tải xong, điều đó cũng có nghĩa là nó hoạt động trong HTML được render phía server mà crawler của bạn nhìn thấy. Trang này tự nó là bằng chứng render phía server: demo ở trên vẫn cuộn được khi JavaScript bị tắt.

[Trang so sánh](/compare) có bảng đầy đủ đối chiếu với Swiper, Embla, keen-slider và react-slick.`,
      },
      {
        heading:
          'Theo dõi khả năng hiển thị là một tính năng của trang cửa hàng',
        body: `Khả năng hiển thị theo từng item nghe như một chi tiết triển khai cho đến khi bạn ánh xạ nó vào việc trưng bày hàng hóa:

- **Ảnh lazy** — render một ô placeholder cho đến khi \`useIsVisible\` báo nó đã lên màn hình.
- **Phân tích impression** — \`getVisible()\` (hoạt động trực tiếp trong [demo hero](/) trên trang chủ) cho bạn biết chính xác danh mục nào đã được xem, không chỉ là rail đã render.
- **Mũi tên nhận biết cạnh** — vô hiệu hóa hoặc ẩn ở các đầu thật sự, kể cả sau khi danh mục tải bất đồng bộ, như trong [ví dụ thêm item](/examples/add-items).`,
      },
      {
        heading: 'Điều chỉnh nó theo hệ thống thiết kế của bạn',
        body: `Các ô là component của bạn — thẻ ảnh, hình tròn, pill văn bản — mỗi cái mang một \`itemId\`. Chiều cao và chiều rộng đến từ CSS của bạn; menu không áp đặt kích thước nào. Cuộn từng item một như một slider sản phẩm với [one-item-scroll](/examples/one-item-scroll), hiển thị một [chỉ báo tiến trình](/examples/progress) cuộn, hoặc triển khai RTL cho cửa hàng tiếng Ả Rập và Do Thái với [ví dụ RTL](/examples/rtl) — rail là sự kết hợp, không phải cấu hình.`,
      },
    ],
    snippet: {
      heading: 'Mẫu hình, tối giản',
      lede: 'Các ô có `itemId`, mũi tên đến từ các hook hiển thị — toàn bộ rail chưa đến bốn mươi dòng.',
    },
    shadcn: {
      heading: 'Hoặc cài đặt nó như một component shadcn',
      body: 'Registry item cơ bản [scroll-menu](https://react-horizontal-scrolling-menu.dev/r/scroll-menu.json) chính là rail này — mũi tên được style theo shadcn, kéo để cuộn, thanh cuộn ẩn — được cài vào `components/ui/` của bạn và style theo token của bạn:',
    },
  },
};
