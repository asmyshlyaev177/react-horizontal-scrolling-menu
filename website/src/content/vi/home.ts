// Vietnamese (vi) — translation of en/home.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=vi source=en/home.ts source-blob=732c3dd50b5369701d5eea6813f6b1f5c2c05ab4 status=translated
import { INTENT, REACT_STATUS, STORIES } from '../../lib/links.ts';
import type { HomeCopy } from '../types.ts';

// Deep-links the import, not the repo root: the claim is that they render
// this component in production, and the line proves it. Commit-pinned so a
// refactor on their side can't turn it into a 404.
const OWID =
  'https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/gdocs/components/KeyInsights.tsx#L3';

export const home: HomeCopy = {
  jsonLdDescription:
    'Component menu cuộn ngang cho React với theo dõi khả năng hiển thị theo từng mục, xây trên cuộn gốc của trình duyệt.',

  hero: {
    titleLead: 'Menu ngang mà ',
    titleHighlight: 'biết cái gì đang hiển thị',
    sub: 'Một menu cuộn React được xây trên chính cuộn của trình duyệt — theo dõi khả năng hiển thị theo từng mục, mũi tên, kéo và một API mệnh lệnh đầy đủ. `5.7 kB` gzip.',
    primaryCta: 'Bắt đầu',
    secondaryCta: 'Duyệt ví dụ',
    storybookCta: 'Mở Storybook',
  },

  install: {
    ariaLabel: 'Cài đặt',
    copyLabel: 'Sao chép lệnh cài đặt',
    shadcnNote:
      'Hoặc component [shadcn/ui](https://ui.shadcn.com) dựng sẵn — mũi tên, kéo để cuộn, đã style',
    shadcnCopyLabel: 'Sao chép lệnh shadcn',
    facts: [
      '**347k** lượt tải/tháng',
      '**5.7 kB** min+gzip',
      'React **16.8 – 19**',
      '**MIT**',
    ],
  },

  autoplay: {
    heading: 'Tự phát, không cần engine carousel',
    lede: 'Không có prop `autoplay` — ray này là một recipe trên API công khai: hàng được nhân bản ra hai đầu, một cú nhảy `scrollLeft` tại đường nối và một bộ hẹn giờ gọi `scrollNext()`. Nó tạm dừng khi hover, focus và trên các tab bị ẩn, đứng yên dưới chế độ giảm chuyển động — và bạn có thể kéo nó, thậm chí ngược lại, qua đường nối.',
    recipeLink: 'Đọc recipe đầy đủ',
    storybookLink: 'Chỉnh sửa trực tiếp trong Storybook',
  },

  positioning: {
    heading: 'Một *menu*, không phải carousel',
    scope: [
      'Embla, Swiper và keen-slider triển khai lại việc cuộn bằng JavaScript để xây slider ảnh — điểm snap, vật lý lò xo, một vòng lặp render. Thư viện này không gửi kèm bất cứ thứ gì trong số đó. Nó dùng cuộn gốc của trình duyệt và thêm thứ duy nhất trình duyệt không cho bạn: biết chính xác mục nào đang trên màn hình.',
      '**Sai công cụ** cho một slider ảnh toàn màn hình — hãy dùng Embla hoặc Swiper ở đó. **Đúng công cụ** cho các hàng danh mục, dải tab, bộ lọc chip và bất kỳ hàng nội dung nào mà ứng dụng của bạn cần xử lý.',
    ],
    pillars: [
      {
        title: 'Cuộn gốc',
        body: 'Quán tính, thanh cuộn, cảm ứng, con lăn và khả năng tiếp cận đến từ trình duyệt, không phải một engine vật lý. Hàng cuộn trước khi JavaScript của bạn hydrate — mọi bản demo trên trang này được render trên server.',
      },
      {
        title: 'Theo dõi khả năng hiển thị',
        body: 'IntersectionObserver báo cáo mục nào đang trên màn hình. `useIsVisible(itemId)` đăng ký một component với một mục — không tính toán vị trí cuộn, và chỉ các mục bị ảnh hưởng mới render lại.',
      },
      {
        title: 'Mệnh lệnh khi bạn cần',
        body: '`scrollToItem`, `scrollNext`, `scrollPrev`, tra cứu theo id hoặc index — qua context trong menu, hoặc `apiRef` từ bên ngoài.',
      },
      {
        title: 'Component của bạn, CSS của bạn',
        body: 'Mũi tên, header, footer và mọi mục là component bạn viết. Chiều rộng mục là CSS của bạn. Thư viện gửi kèm 210 byte style bố cục và tránh ra khỏi đường.',
      },
    ],
  },

  quickStart: {
    heading: 'Bắt đầu nhanh',
    lede: 'Một file, không cấu hình: các mục với `itemId`, hai mũi tên đọc `VisibilityContext` và import stylesheet.',
    notes: [
      '`itemId` bắt buộc trên mọi mục — đó là cách theo dõi hoạt động. `key` của React hoạt động như một phương án dự phòng.',
      '`styles.css` là một import riêng; bundle JS không bao giờ tiêm CSS.',
      'Chiều rộng mục đến từ CSS của riêng bạn — menu không đo lường gì cả.',
    ],
    link: 'Đọc ví dụ bắt đầu đầy đủ',
  },

  aiSkills: {
    heading: 'Hoặc giao cho coding agent của bạn',
    body: `Các mô hình được huấn luyện trên các phiên bản cũ vẫn tìm đến \`visibleElements\`, các mục \`Separator\` và một prop \`Arrows\` — tất cả đã bị xóa nhiều năm trước — và bịa ra một prop \`autoplay\` chưa từng tồn tại. Để ngăn điều đó, gói này gửi kèm tám file \`SKILL.md\`: hướng dẫn theo nhiệm vụ mà agent của bạn tải theo yêu cầu qua [TanStack Intent](${INTENT}), được lập phiên bản cùng thư viện thay vì cùng trang này.`,
    copyLabel: 'Sao chép lệnh Intent',
    note: 'Chạy một lần trong dự án đã cài gói. Agent của bạn sau đó khám phá các kỹ năng từ `node_modules/react-horizontal-scrolling-menu/skills/`.',
    // The SKILL.md files published inside the package, and the one line each
    // that tells an agent — or a reader deciding whether this is worth a
    // command — when it is the one to load. Kept in the same order as
    // public/llms.txt, which is the machine-readable version of this table.
    skills: [
      {
        id: 'menu-setup',
        when: 'Menu đầu tiên hoạt động, mũi tên, import CSS bắt buộc',
      },
      {
        id: 'menu-visibility',
        when: 'Cái gì đang trên màn hình và trạng thái mũi tên ở hai đầu',
      },
      {
        id: 'menu-scrolling',
        when: 'scrollToItem, apiRef, phân trang từng trang',
      },
      {
        id: 'menu-interactions',
        when: 'Kéo, con lăn và cảm ứng — và các factory xử lý của chúng',
      },
      {
        id: 'menu-recipes',
        when: 'Tự phát, vòng lặp vô hạn, tải thêm: recipe, không phải props',
      },
      {
        id: 'menu-transitions-rtl',
        when: 'Thời gian hoạt ảnh, easing tùy chỉnh, phải sang trái',
      },
      {
        id: 'menu-testing-ssr',
        when: 'Next.js và RSC, mock Jest, Playwright',
      },
      {
        id: 'menu-migration',
        when: 'Nâng cấp code trước v8 và các API mà mô hình vẫn bịa ra',
      },
    ],
    skillsLink: 'Đọc các kỹ năng trên GitHub',
    llmsLink: 'llms.txt — cùng các thông tin, cô đọng',
  },

  gallery: {
    heading: 'Những recipe bạn sẽ thực sự đưa lên',
    lede: 'Bốn pattern phổ biến, trực tiếp, với những dòng quan trọng.',
    tabs: {
      title: 'Một dải tab căn giữa tab đang hoạt động',
      body: "Bấm một tab: `scrollToItem` với `inline: 'center'` đưa nó ra giữa hàng. Cùng lệnh đó xử lý `start`, `end` và phân trang.",
      link: 'Xem ví dụ đầy đủ',
    },
    chips: {
      title: 'Thêm một chip, cuộn đến nó',
      body: 'Trạng thái nằm ngoài menu; `apiRef` với vào trong. Thêm một bộ lọc và hàng theo nó.',
      link: 'Xem ví dụ đầy đủ',
    },
    infinite: {
      title: 'Tải thêm khi thấy điểm cuối',
      body: '`onUpdate` cho bạn biết khi mục cuối trở nên hiển thị — thêm trang kế tiếp ngay tại đó. Không có listener cuộn, không có ngưỡng pixel phải chỉnh.',
      link: 'Xem ví dụ đầy đủ',
    },
    rtl: {
      title: 'Phải sang trái, một prop',
      body: '`RTL` lật hướng của container cuộn; mũi tên và logic phân trang theo sau.',
      link: 'Xem ví dụ đầy đủ',
    },
  },

  features: {
    heading: 'Có gì trong hộp',
    included: [
      'Hook khả năng hiển thị theo từng mục — `useIsVisible(itemId)`',
      'Helper `first` / `last` cho trạng thái mũi tên',
      '`scrollToItem` · `scrollNext` · `scrollPrev`',
      '`apiRef` để điều khiển từ ngoài menu',
      'Đầu vào kéo, con lăn, cảm ứng và thanh cuộn',
      'Phát hiện thêm/xóa động',
      'Slot Header và Footer',
      'Helper phân trang `slidingWindow` + `getItemsPos`',
      'Hỗ trợ phải sang trái',
      'Hàm chuyển tiếp tùy chỉnh',
      'An toàn với SSR — trang này chứng minh',
      'TypeScript-first — `publicApiType` được export',
      'Một API ổn định qua React 16.8 – 19',
    ],
    notIncludedHeading: 'Không có trong hộp',
    notIncluded: [
      'Vật lý snap và lò xo',
      'Slider ảnh toàn màn hình',
      'Lightbox',
    ],
    note: `Đó thuộc về thế giới slider ảnh — Embla và Swiper làm tốt. [Vòng lặp vô hạn](${STORIES.infiniteLoop}) và [tự phát](${STORIES.autoplay}) cũng không phải props — chúng là recipe: khoảng sáu mươi dòng của API công khai mỗi cái, có thể chỉnh sửa trực tiếp trong Storybook. Ray gần đầu trang này chính là recipe đó đang chạy. Cái này vẫn là một menu.`,
  },

  proof: {
    statement:
      'Được tải **347,516 lần** tháng trước bởi khoảng **20,000 kho lưu trữ** — được bảo trì từ **2018**.',
    notes: [
      '788 sao trên GitHub',
      `Được giới thiệu trên [React Status #257](${REACT_STATUS})`,
      `Đang dùng trong sản phẩm tại [Our World in Data](${OWID})`,
    ],
  },

  storybook: {
    heading: 'Mọi ví dụ đều có thể chỉnh sửa, trong trình duyệt của bạn',
    body: 'Storybook kiêm vai trò sân chơi: mỗi story gửi kèm một trình soạn thảo Monaco được nạp các định nghĩa kiểu thực của thư viện. Thay đổi code, xem nó render lại — không cần tài khoản sandbox, không cần thiết lập cục bộ.',
    primaryCta: 'Mở Storybook',
    secondaryCta: 'Tham chiếu API',
  },

  author: {
    heading: 'Được xây dựng và duy trì bởi Aleksandr Smyshliaev',
    body: 'Xuất bản lần đầu năm 2018, cùng API công khai qua React 16.8 đến 19. Aleksandr là kỹ sư frontend — React, Next.js, TypeScript — hiện sẵn sàng cho công việc theo hợp đồng và toàn thời gian.',
    siteLink: 'asmyshlyaev177.dev',
    githubLink: 'GitHub',
    linkedinLink: 'LinkedIn',
  },
};
