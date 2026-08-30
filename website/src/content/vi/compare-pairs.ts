// Vietnamese (vi) — translation of en/compare-pairs.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=vi source=en/compare-pairs.ts source-blob=0fb5673892e901be3f7c39eba5eb45e00488b9a5 status=translated
import type { ComparePairsCopy } from '../types.ts';

// Neutral-pair comparison pages. The voice is a referee's, not a vendor's:
// each page recommends the right carousel for carousel jobs and claims only
// the menu-shaped slice. Overselling here burns the credibility the pages
// exist to earn.
export const comparePairs: ComparePairsCopy = {
  hub: {
    heading: 'Thêm so sánh',
    lede: 'Các trang chuyên sâu hơn về những lựa chọn cụ thể mà mọi người thực sự cân nhắc.',
  },

  emblaVsSwiper: {
    meta: {
      title: 'Embla so với Swiper: nên chọn carousel React nào',
      description:
        'So sánh trung thực Embla và Swiper: kích thước bundle, tính năng, headless so với đầy đủ sẵn — và lựa chọn thứ ba khi carousel của bạn thực chất là một menu.',
    },
    jsonLdHeadline:
      'Embla so với Swiper cho React: một so sánh trung thực, cùng trường hợp bạn không cần cái nào cả',
    name: 'Embla so với Swiper',
    blurb:
      'Engine headless hay đầy đủ sẵn — và trường hợp bạn không cần cái nào cả.',
    title: 'Embla so với Swiper: chọn theo những gì bạn đang xây dựng',
    lede: 'Cả hai đều là các engine carousel xuất sắc, được bảo trì tích cực, và lựa chọn giữa chúng thực sự rất sát nhau. Nó quy về một trục duy nhất: Swiper cung cấp sẵn mọi tính năng; Embla cung cấp một engine headless nhỏ để bạn xây dựng trên đó. Trang này được viết bởi người bảo trì một thư viện không cạnh tranh với cả hai — đó cũng chính là câu trả lời thứ ba ở cuối trang, dành cho những công trình hóa ra không phải là carousel chút nào.',
    table: {
      headers: ['', 'Embla', 'Swiper'],
      rows: [
        [
          'Đó là gì',
          'Engine carousel headless',
          'Framework slider/carousel đầy đủ',
        ],
        ['Bundle (core, min+gzip)', '≈8 kB', '≈40 kB (tăng theo module)'],
        [
          'Styling & markup',
          'Hoàn toàn của bạn — nó không cung cấp gì',
          'Cấu trúc DOM và CSS riêng, có theme',
        ],
        [
          'Hiệu ứng (fade, cube, coverflow…)',
          'Plugin cộng đồng, hoặc tự làm',
          'Có sẵn, đã hoàn thiện',
        ],
        [
          'Autoplay, phân trang, thumbnail',
          'Plugin chính thức',
          'Module có sẵn',
        ],
        [
          'Tích hợp React',
          'Hook hạng nhất (useEmblaCarousel)',
          'Component bao bọc trên lõi vanilla',
        ],
        [
          'Ghi chú hệ sinh thái',
          'Engine bên dưới carousel của shadcn/ui',
          'Slider được dùng nhiều nhất trên web',
        ],
        [
          'Phù hợp nhất cho',
          'Carousel thiết kế tùy chỉnh, hệ thống thiết kế',
          'Slider ưu tiên ảnh, gallery nhiều tính năng',
        ],
      ],
      note: 'Kích thước bundle là các con số lõi gần đúng — kiểm tra bundlephobia để có số liệu hiện tại; kích thước của Swiper tăng theo các module bạn import.',
    },
    prose: [
      {
        heading: 'Chọn Embla khi kiểm soát thiết kế là trọng tâm',
        body: `Embla cho bạn vật lý snap, xử lý kéo và một mô hình slide, không gì khác — không markup, không CSS, không mũi tên. Đó là sức mạnh của nó: trong một hệ thống thiết kế, mọi thứ hiển thị đều là của bạn, và engine không bao giờ chống lại style của bạn. Đây là nền tảng mà shadcn/ui xây dựng carousel của mình, điều đó cho bạn biết điểm ngọt: các đội muốn một carousel trông giống *sản phẩm của họ*, không giống một thư viện carousel.

Cái giá phải trả là mọi tính năng ngoài việc trượt đều là tiện ích bổ sung hoặc phải tự xây: autoplay và class-name là các plugin chính thức; các chấm phân trang, thumbnail và hiệu ứng là thứ bạn phải tự viết.`,
      },
      {
        heading: 'Chọn Swiper khi bạn muốn các tính năng có sẵn',
        body: `Swiper là câu trả lời đầy đủ sẵn: hiệu ứng fade, cube và coverflow, slide ảo, zoom, parallax, gallery thumbnail, module a11y, phân trang theo nhiều kiểu — chỉ cần cấu hình, không cần xây. Nếu sản phẩm của bạn cần ba trong số đó ở quý này, Swiper xứng đáng với kích thước của nó gấp nhiều lần.

Cái giá phải trả ngược lại với Embla: bạn kế thừa DOM của Swiper, CSS của nó để tạo theme, và một lõi vanilla-JS được bọc cho React — nặng hơn cả về kilobyte lẫn diện tích bề mặt.`,
      },
      {
        heading: 'Câu hỏi cần đặt ra trước khi chọn bất kỳ cái nào',
        body: `Cả hai thư viện đều giả định rằng bạn đang trình bày *slide* — một thứ, hoặc một trang các thứ, tại một thời điểm, với snap và cảm giác về vị trí. Một phần lớn "carousel" thực tế không giống vậy chút nào: dải danh mục, dải logo, thanh tab, bộ lọc chip — các dải item có thể nhấp mà người dùng quét mắt qua và chọn. Những thứ đó cần cuộn gốc (quán tính, thanh cuộn, wheel, khả năng truy cập miễn phí) cộng với việc biết item nào đang trên màn hình — và cả Embla lẫn Swiper đều không mô hình hóa khả năng hiển thị theo từng item, vì slide không phải là item.

Với hình dạng đó có một lựa chọn thứ ba: [react-horizontal-scrolling-menu](/) (≈5.7 kB) chạy trên cuộn gốc và cung cấp \`useIsVisible\`, \`scrollToItem\` và mũi tên nhận biết cạnh. Xem nó như một [dải kiểu Netflix](/netflix-row), một [dải tab](/scrollable-tabs) hoặc một [thanh chip](/filter-chips), hoặc [bảng so sánh đầy đủ](/compare) đối chiếu với cả hai.`,
      },
    ],
  },

  reactSlickAlternatives: {
    meta: {
      title: 'Các lựa chọn thay thế react-slick năm 2026',
      description:
        'Di chuyển khỏi react-slick: Embla và Swiper cho carousel thực sự, react-horizontal-scrolling-menu cho các dải dùng centerMode làm điều hướng. Hướng dẫn di chuyển trung thực.',
    },
    jsonLdHeadline:
      'Các lựa chọn thay thế react-slick: di chuyển carousel thực sự đi đâu, và dải centerMode của bạn nên đi đâu',
    name: 'Các lựa chọn thay thế react-slick',
    blurb:
      'Di chuyển carousel thực sự đi đâu — và các dải centerMode nên đi đâu.',
    title:
      'Các lựa chọn thay thế react-slick: di chuyển theo những gì bạn đã xây bằng nó',
    lede: 'react-slick chuyển carousel slick thời jQuery sang React. Nó vẫn hoạt động, nhưng kiến trúc có trước hooks, các bản phát hành thưa thớt, và nó kéo theo một file CSS riêng vào mỗi build. Lựa chọn thay thế đúng phụ thuộc ít vào tính năng hơn là vào việc cách dùng của bạn thuộc phe nào trong hai phe.',
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
          'Đó là gì',
          'Bản chuyển React của jQuery slick',
          'Engine carousel headless',
          'Framework slider đầy đủ',
          'Menu cuộn, cuộn gốc',
        ],
        ['Bảo trì', 'Thưa thớt', 'Tích cực', 'Tích cực', 'Tích cực từ 2018'],
        [
          'Bundle (min+gzip)',
          '≈15 kB + CSS slick',
          '≈8 kB',
          '≈40 kB',
          '≈5.7 kB',
        ],
        [
          'Cần file CSS bổ sung',
          'Có (hai file)',
          'Không',
          'Có (core)',
          'Một file, hoặc Tailwind qua shadcn item',
        ],
        [
          'Ngữ nghĩa slide (snap, chấm, fade)',
          'Có',
          'Có',
          'Có',
          'Không — có chủ ý',
        ],
        [
          'Dải item có thể nhấp',
          'Uốn ép qua centerMode',
          'Tự xây trên engine',
          'Cấu hình ngược ý đồ thiết kế',
          'Trường hợp sử dụng cốt lõi',
        ],
      ],
      note: 'Kích thước là các con số lõi gần đúng. Cột cuối cùng là thư viện riêng của trang này — bảng nói rõ điều đó thay vì giả vờ khác đi.',
    },
    prose: [
      {
        heading: 'Phe một: đó là một carousel thực sự',
        body: `Slider hero, gallery ảnh, bộ xoay vòng testimonial — bất cứ thứ gì mà chấm, fade và autoplay của slick gánh vác thiết kế. Di chuyển sang một engine carousel thực sự:

- **[Embla](/compare/embla-vs-swiper)** nếu bạn tự style mọi thứ và muốn một lõi headless nhỏ gọn — gần nhất với tinh thần "slick, hiện đại hóa".
- **Swiper** nếu bạn dùng nhiều tính năng của slick; mọi tính năng của slick đều có phiên bản tương đương trong Swiper, thường là tốt hơn.

Ánh xạ \`slidesToShow\`/\`slidesToScroll\` sang \`slidesInView\`/\`slidesToScroll\` của Embla hoặc \`slidesPerView\`/\`slidesPerGroup\` của Swiper, và chuẩn bị xóa các override CSS định vị mũi tên của bạn — cả hai bên kế thừa đều cho bạn render nút riêng.`,
      },
      {
        heading: 'Phe hai: đó là điều hướng khoác áo centerMode',
        body: `Kiểu cài đặt slick còn lại thì âm thầm hơn: một dải danh mục, logo, ngày tháng hoặc bộ lọc, bị uốn ép thành carousel bằng \`centerMode\`, \`focusOnSelect\` và \`variableWidth\` chỉ vì slick đã có sẵn trong bundle. Dấu hiệu nhận biết là những gì bạn phải vật lộn: click kích hoạt sau khi kéo, mũi tên xuất hiện sai thời điểm, item bạn không đo được, snap bạn không hề muốn.

Dải đó vốn là một menu. [react-horizontal-scrolling-menu](/) làm ba việc mà centerMode đang giả vờ làm — [căn giữa item được click](/examples/center-on-click), cuộn theo cách gốc với [hỗ trợ kéo](/examples/mouse-drag), và báo cáo [item nào đang hiển thị](/examples/simple) — trong ≈5.7 kB mà không cần engine slider nào. Xem các trang [tab cuộn](/scrollable-tabs) và [rail danh mục](/category-rail) cho hai hình dạng phổ biến nhất.`,
      },
      {
        heading: 'Dù thuộc phe nào: việc di chuyển nhỏ hơn vẻ ngoài của nó',
        body: 'Diện tích API của slick rất lớn, nhưng kiểm tra các cấu hình thực tế cho thấy nó thu hẹp nhanh chóng: hầu hết dự án chỉ dùng một số ít prop. Liệt kê những prop bạn thực sự đặt, quyết định mỗi cách dùng thuộc phe nào, và di chuyển theo từng instance — hai phe thường cùng tồn tại trong một codebase, và không có quy tắc nào bắt cả hai phải cùng đích đến một thư viện.',
      },
    ],
  },

  swiperAlternatives: {
    meta: {
      title: 'Các lựa chọn thay thế Swiper nhẹ hơn cho React',
      description:
        'Đang tìm một lựa chọn thay thế Swiper nhẹ hơn trong React? Embla và keen-slider cho carousel thực sự, react-horizontal-scrolling-menu cho các dải hình dạng menu. So sánh kích thước.',
    },
    jsonLdHeadline:
      'Các lựa chọn thay thế Swiper cho React: carousel nhẹ hơn, và lối thoát hình dạng menu',
    name: 'Các lựa chọn thay thế Swiper',
    blurb:
      'Khi ≈40 kB là lời phàn nàn: các engine nhẹ hơn, và lối thoát hình dạng menu.',
    title:
      'Các lựa chọn thay thế Swiper cho React, theo những gì bạn thực sự đang muốn thoát khỏi',
    lede: 'Không ai rời bỏ Swiper vì nó tệ — nó là slider đầy đủ nhất hiện có. Người ta rời bỏ vì trọng lượng (≈40 kB trước khi tính module), vì phải kế thừa DOM và CSS của nó, hoặc vì "slider" của họ chưa bao giờ thực sự là slide. Mỗi lời phàn nàn có một câu trả lời tốt nhất khác nhau.',
    table: {
      headers: [
        '',
        'Swiper',
        'Embla',
        'keen-slider',
        'react-horizontal-scrolling-menu',
      ],
      rows: [
        ['Bundle (core, min+gzip)', '≈40 kB', '≈8 kB', '≈7 kB', '≈5.7 kB'],
        [
          'Mô hình',
          'Slide, đầy đủ sẵn',
          'Slide, headless',
          'Slide, engine tối giản',
          'Item trong một dải cuộn gốc',
        ],
        [
          'Hiệu ứng & module',
          'Phong phú nhất hiện có',
          'Plugin / tự làm',
          'Một số có sẵn',
          'Không có — thay bằng công thức',
        ],
        [
          'Chiếm tầng cử chỉ',
          'Có (transform)',
          'Có (transform)',
          'Có (transform)',
          'Không — trình duyệt tự cuộn',
        ],
        [
          'Khả năng hiển thị theo item',
          'Sự kiện chỉ số slide',
          'Sự kiện chỉ số slide',
          'Sự kiện chỉ số slide',
          'Có sẵn (useIsVisible)',
        ],
        [
          'Nên đổi khi',
          '—',
          'Đằng nào bạn cũng tự style mọi thứ',
          'Slider tối giản, không khóa chặt vào React',
          '"Slide" thực chất là các item có thể nhấp',
        ],
      ],
      note: 'Kích thước là các con số lõi gần đúng — kích thước của Swiper tăng theo các module được import, điều đó cũng có nghĩa là một bản build Swiper đã cắt gọn có thể nhỏ hơn danh tiếng của nó.',
    },
    prose: [
      {
        heading: 'Thoát khỏi số kilobyte: Embla hoặc keen-slider',
        body: `Nếu sản phẩm là một carousel thực sự — snap, một trang slide tại một thời điểm — các engine nhẹ gần như có thể thay thế trực tiếp:

- **[Embla](/compare/embla-vs-swiper)** (≈8 kB): headless, vật lý xuất sắc, hook React hạng nhất, engine bên dưới carousel của shadcn/ui. Bạn tự mang toàn bộ markup và CSS — đó chính là trọng tâm.
- **keen-slider** (≈7 kB): một engine tối giản không phụ thuộc framework, tốt khi cùng một slider phải chạy trên cả bề mặt React và không phải React.

Cả hai vẫn giữ mô hình slide dựa trên transform, vì vậy các hiệu ứng như fade hay coverflow vẫn phải tự làm — nếu bạn phụ thuộc vào những thứ đó, một bản build Swiper đã cắt gọn thành thật là câu trả lời tốt hơn việc tự triển khai lại chúng.`,
      },
      {
        heading: 'Thoát khỏi mô hình slide: trường hợp hình dạng menu',
        body: `Lối thoát còn lại dành cho các công trình mà ngữ nghĩa slide của Swiper chưa bao giờ thực sự cần thiết: dải danh mục, tường logo, dải tab, thanh chip, rail sản phẩm. Dấu hiệu nhận biết là cấu hình như \`slidesPerView: 'auto'\` kết hợp \`freeMode: true\` — cặp đó là Swiper đang bị bắt giả làm cuộn gốc.

[react-horizontal-scrolling-menu](/) (≈5.7 kB) chính là cuộn gốc đó, cộng thêm những phần trình duyệt không cung cấp sẵn: [khả năng hiển thị theo item](/examples/simple), [scroll-to-item](/examples/scroll-to-item), mũi tên nhận biết cạnh và [kéo mà không phá vỡ click](/examples/mouse-drag). Không hiệu ứng, không snap, không mô phỏng cử chỉ — xem các trang [Netflix-row](/netflix-row), [tabs](/scrollable-tabs) và [chip-bar](/filter-chips), hoặc [bảng đầy đủ](/compare).`,
      },
      {
        heading: 'Một lời cảnh báo công bằng cho cả hai hướng',
        body: 'Di chuyển khỏi Swiper để giảm trọng lượng rồi sau đó phải tự xây autoplay, phân trang, thông báo a11y và hiệu ứng là cách một vấn đề 40 kB trở thành một vấn đề tốn cả tháng công. Chỉ đổi sang một engine nhẹ hơn khi cách dùng của bạn thực sự là một tập con — và chỉ đổi sang scrolling menu khi ngữ nghĩa slide vốn dĩ chỉ là giả tạo từ đầu. Nếu bạn dùng đến chiều sâu của Swiper, hãy giữ Swiper.',
      },
    ],
  },
};
