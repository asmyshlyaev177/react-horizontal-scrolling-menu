// Vietnamese (vi) — translation of en/manifest.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=vi source=en/manifest.ts source-blob=ed8adc8ba4ca3539df6b5d03d2463ff01904c27a status=translated
import type { ManifestCopy } from '../types.ts';

/**
 * Chữ của thẻ hub cho các trang ví dụ. Các slug và id nhóm là cấu trúc —
 * chúng nằm trong `lib/examples-manifest.ts` và ở đây là khóa, không phải chữ.
 */
export const manifest: ManifestCopy = {
  groups: {
    Basics: 'Cơ bản',
    'Position & scrolling': 'Vị trí và cuộn',
    'Input & gestures': 'Đầu vào và cử chỉ',
    'Dynamic items': 'Mục động',
    Layout: 'Bố cục',
    Recipes: 'Recipe',
  },
  examples: {
    simple: {
      name: 'Bắt đầu',
      blurb: 'Menu tối giản: các mục, hai mũi tên, khả năng hiển thị sẵn sàng.',
    },
    'one-item': {
      name: 'Một mục mỗi view',
      blurb: 'Menu rộng một mục — một thẻ lấp đầy hàng.',
    },
    'one-item-scroll': {
      name: 'Cuộn từng mục một',
      blurb: 'Các mũi tên tiến một mục thay vì cả trang.',
    },
    'bottom-arrows': {
      name: 'Mũi tên dưới menu',
      blurb: 'Mũi tên là component của bạn — đặt chúng ở đâu cũng được.',
    },
    'center-on-click': {
      name: 'Căn giữa mục được bấm',
      blurb: 'scrollToItem với inline: center — pattern tab cuộn được.',
    },
    'scroll-to-item': {
      name: 'Cuộn đến một mục theo id',
      blurb: 'Với vào trong menu từ bên ngoài bằng apiRef.',
    },
    'save-restore-position': {
      name: 'Lưu và khôi phục vị trí cuộn',
      blurb: 'Giữ độ lệch cuộn qua các lần unmount và tải lại trang.',
    },
    'custom-transition': {
      name: 'Hoạt ảnh cuộn tùy chỉnh',
      blurb:
        'Mang easing và thời lượng của riêng bạn cho các lần cuộn lập trình.',
    },
    progress: {
      name: 'Chỉ báo tiến độ cuộn',
      blurb: 'Một thanh tiến độ chạy theo mục nào đang hiển thị.',
    },
    'mouse-drag': {
      name: 'Kéo để cuộn bằng chuột',
      blurb: 'Kéo chuột mà vẫn để các cú bấm mục hoạt động.',
    },
    'swipe-desktop': {
      name: 'Vuốt trên desktop',
      blurb: 'Vuốt theo quán tính cho người dùng chuột.',
    },
    'mobile-swipe-only': {
      name: 'Ẩn mũi tên trên di động',
      blurb: 'Chỉ cuộn bằng cảm ứng trên màn hình nhỏ, mũi tên trên desktop.',
    },
    'prevent-body-scroll': {
      name: 'Ngăn cuộn body',
      blurb: 'Con lăn trên menu cuộn menu, không phải trang.',
    },
    'add-items': {
      name: 'Tải thêm khi thấy điểm cuối',
      blurb: 'Thêm vô hạn chạy theo khả năng hiển thị của mục cuối.',
    },
    'add-item-and-scroll-to-it': {
      name: 'Thêm một mục và cuộn đến nó',
      blurb: 'Pattern chip bộ lọc: thêm vào, rồi đưa vào view.',
    },
    'items-animation': {
      name: 'Hoạt ảnh mục vào và ra',
      blurb: 'Hoạt ảnh thêm/xóa với @formkit/auto-animate.',
    },
    performance: {
      name: '5,000 mục và vẫn nhanh',
      blurb: 'Cuộn gốc mở rộng được — không cần ảo hóa ở đây.',
    },
    vertical: {
      name: 'Menu dọc',
      blurb: 'Cùng một menu, cuộn từ trên xuống dưới.',
    },
    rtl: {
      name: 'Phải sang trái',
      blurb: 'RTL lật hướng; mũi tên và phân trang theo sau.',
    },
    'infinite-loop': {
      name: 'Vòng lặp vô hạn',
      blurb: 'Vòng lặp liền mạch từ API công khai — không thay đổi thư viện.',
    },
    autoplay: {
      name: 'Tự phát',
      blurb: 'Một vòng lặp tự tiến với hành vi tạm dừng dễ tiếp cận.',
    },
    'mui-scrollable-tabs': {
      name: 'Tab cuộn được vượt ra ngoài MUI',
      blurb: 'Giữ hợp đồng value/onChange của MUI; đổi dải bên dưới.',
    },
  },
};
