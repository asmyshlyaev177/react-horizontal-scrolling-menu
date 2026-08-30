// Vietnamese (vi) — translation of en/compare.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=vi source=en/compare.ts source-blob=109fc8a1eaa58ebec8e1085289370248a158cabd status=translated
import type { CompareCopy } from '../types.ts';

export const compare: CompareCopy = {
  meta: {
    title: 'react-horizontal-scrolling-menu đấu với Swiper, Embla, react-slick',
    description:
      'Một so sánh trung thực: khi nào menu cuộn ngang thắng một thư viện carousel, và khi nào không. Swiper, Embla, keen-slider và react-slick, cạnh nhau.',
  },
  jsonLdHeadline:
    'Carousel hay menu cuộn? react-horizontal-scrolling-menu đấu với Swiper, Embla, keen-slider và react-slick',

  title: 'Carousel hay menu cuộn? Một so sánh trung thực',
  lede: 'Swiper, Embla, keen-slider và react-slick là các engine carousel: chúng triển khai lại việc cuộn bằng JavaScript để có ngữ nghĩa slide, vật lý snap và các hiệu ứng. react-horizontal-scrolling-menu không nằm trong số đó — nó dùng cuộn gốc của trình duyệt và thêm theo dõi khả năng hiển thị theo từng mục. Bạn muốn cái nào phụ thuộc vào việc bạn đang xây gì — bảng và các ghi chú bên dưới trình bày điều đó một cách trung thực, theo cả hai chiều.',

  table: {
    headers: [
      '',
      'thư viện này',
      'Swiper',
      'Embla',
      'keen-slider',
      'react-slick',
    ],
    rows: [
      [
        'Nó là gì',
        'Menu cuộn với theo dõi khả năng hiển thị',
        'Framework slider/carousel đầy đủ',
        'Engine carousel headless',
        'Engine slider độc lập với framework',
        'Bản port React của slider slick của jQuery',
      ],
      [
        'Engine cuộn',
        'Cuộn gốc của trình duyệt',
        'Biến đổi JS + vật lý',
        'Biến đổi JS + vật lý',
        'Biến đổi JS + vật lý',
        'Biến đổi JS (chuyển tiếp CSS)',
      ],
      [
        'Bundle (lõi, min+gzip)',
        '≈5.7 kB',
        '≈40 kB',
        '≈8 kB',
        '≈7 kB',
        '≈15 kB + slick CSS',
      ],
      [
        'Mục nào đang trên màn hình',
        'Có sẵn — useIsVisible theo từng mục',
        'Dựa trên chỉ số slide',
        'Sự kiện chỉ số slide',
        'Sự kiện chỉ số slide',
        'Dựa trên chỉ số slide',
      ],
      [
        'Snap, hiệu ứng, vật lý',
        'Không — cố ý',
        'Phong phú (fade, cube, coverflow…)',
        'Dựa trên plugin, có tween',
        'Có, bao gồm chế độ tự do',
        'Fade, chế độ căn giữa',
      ],
      [
        'Vòng lặp / tự phát',
        'Recipe trên API công khai',
        'Props có sẵn',
        'Plugin',
        'Tùy chọn có sẵn',
        'Props có sẵn',
      ],
      [
        'Thanh cuộn, con lăn, focus bàn phím',
        'Gốc — miễn phí từ trình duyệt',
        'Mô phỏng / module chọn tham gia',
        'Tự làm (headless)',
        'Tự làm',
        'Hạn chế',
      ],
      [
        'Phù hợp nhất cho',
        'Hàng danh mục, dải tab, bộ lọc chip',
        'Slider toàn màn hình, thư viện ảnh',
        'Carousel tùy chỉnh (mặc định của shadcn)',
        'Slider tùy chỉnh tối giản',
        'Di chuyển từ slick cũ',
      ],
    ],
    note: 'Kích thước bundle là phần lõi xấp xỉ — hãy kiểm tra bundlephobia để lấy con số hiện tại trước khi quyết định chỉ dựa trên kích thước.',
  },

  prose: [
    {
      heading: 'Trước tiên, câu hỏi thực sự',
      body: `Một **carousel** trình bày các slide: một thứ (hoặc một trang các thứ) tại một thời điểm, với snap, hiệu ứng và cảm giác «vị trí 3 trên 8». Một **menu** trình bày một hàng mà người dùng quét qua và chọn: một ray danh mục, một dải tab, một thanh chip. Carousel muốn ngữ nghĩa slide; menu muốn cuộn gốc — quán tính, thanh cuộn, con lăn, cảm ứng và focus bàn phím hoạt động đúng như phần còn lại của trang — cộng với thứ trình duyệt không cho bạn: biết mục nào đang trên màn hình.

Nếu bạn đang xây một slider ảnh toàn màn hình, một gallery hero, hay bất cứ thứ gì có vật lý snap đến slide, **hãy dùng một thư viện carousel — Embla hay Swiper đều xuất sắc**. Trang này tồn tại cho trường hợp còn lại, trường hợp mà mọi FAQ về carousel đều lặng lẽ bỏ qua: các hàng thứ có thể bấm mà chưa bao giờ thực sự là slide.`,
    },
    {
      heading: 'đấu với Swiper',
      body: `Swiper là framework slider đầy đủ nhất hiện có: hiệu ứng (fade, cube, coverflow), slide ảo, zoom, parallax, phân trang và một hệ sinh thái trưởng thành. ≈40 kB của nó xứng đáng khi bạn dùng thứ nó cung cấp. Nó triển khai lại việc cuộn bằng biến đổi, nên thanh cuộn gốc, hành vi con lăn và khả năng tiếp cận khi cuộn là các mô phỏng bạn cấu hình, chứ không phải mặc định bạn thừa hưởng.

- **Chọn Swiper** cho các slider thiên về ảnh, hiệu ứng, hoặc bất cứ thứ gì phải mang cảm giác slide.
- **Chọn thư viện này** khi «carousel» là một thanh chip kiểu YouTube hay một hàng danh mục kiểu Netflix: bạn có cuộn gốc với ≈34 kB ít hơn, cộng \`useIsVisible\` theo từng mục — thứ mà Swiper không mô hình hóa, vì slide không phải là mục.`,
    },
    {
      heading: 'đấu với Embla',
      body: `Embla là một engine carousel headless với vật lý đẹp và một adapter React hạng nhất — đó là thứ shadcn/ui xây carousel của mình trên đó, và là mặc định đúng khi bạn muốn kiểm soát trực quan đầy đủ một carousel thực sự. Headless là con dao hai lưỡi với menu: cuộn-đến-view khi chọn, khả năng hiển thị theo từng mục, vô hiệu hóa mũi tên và quản lý focus đều là của bạn để tự xây.

- **Chọn Embla** cho các carousel thiết kế tùy chỉnh và vật lý snap với kích thước nhỏ.
- **Chọn thư viện này** khi chính những phần tự xây đó mới là điểm mấu chốt: \`scrollToItem\`, \`useIsVisible\`, trạng thái mũi tên first/last và \`apiRef\` được gửi kèm ở dạng hoạt động.`,
    },
    {
      heading: 'đấu với keen-slider',
      body: 'keen-slider là một engine slider gọn nhẹ, độc lập với framework — một lựa chọn tốt cho các slider tùy chỉnh tối giản khi bạn muốn một dependency duy nhất xuyên suốt các framework. Như những cái khác, nó sở hữu lớp cử chỉ bằng biến đổi, và API của nó được định hình theo chỉ số slide: ổn cho slide, gượng gạo cho «cuộn chip đang chọn vào view và cho tôi biết cái gì đang hiển thị».',
    },
    {
      heading: 'đấu với react-slick',
      body: 'react-slick chuyển carousel slick thời jQuery sang React. Nó vẫn hoạt động, nhưng kéo theo một file CSS riêng, kiến trúc có trước hooks và việc bảo trì thưa thớt. Các đội rời bỏ nó thường rơi vào hai phe: carousel thực sự (chuyển sang Embla hoặc Swiper) — và các hàng điều hướng bị bẻ vào `centerMode` vì slick đã được cài sẵn. Phe thứ hai chính là hình dạng của thư viện này: [chọn căn giữa](/examples/center-on-click), [tiến từng mục](/examples/one-item-scroll) và [kéo để cuộn](/examples/mouse-drag) mà không cần engine slider.',
    },
    {
      heading: 'Phía menu trông như thế nào',
      body: `Mọi pattern trên trang này đều trực tiếp và được render trên server, mỗi cái có nguồn đầy đủ: [tab cuộn được](/examples/center-on-click), [chip bộ lọc](/examples/add-item-and-scroll-to-it), [hàng tải thêm](/examples/add-items) và — hai tính năng mà người ta cho là cần engine carousel — [vòng lặp vô hạn](/examples/infinite-loop) và [tự phát](/examples/autoplay), mỗi cái khoảng sáu mươi dòng trên API công khai.

- 5.7 kB min+gzip, TypeScript-first, MIT, ≈347k lượt tải/tháng, được bảo trì từ 2018 với một API ổn định qua React 16.8–19.
- Thân thiện với SSR: hàng cuộn trước khi JavaScript của bạn hydrate — trang này và mọi bản demo trên trang web này chứng minh điều đó.`,
    },
  ],

  links: {
    examples: 'Xem tất cả ví dụ',
    storybook: 'Dùng thử trong Storybook',
    github: 'GitHub',
  },
};
