// Vietnamese (vi) — translation of en/examples-hub.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=vi source=en/examples-hub.ts source-blob=8127bcad7814c2b0afd352822f229d8a3c1783ff status=translated
import type { ExamplePageCopy, ExamplesHubCopy } from '../types.ts';

/** Trang danh sách /examples. */
export const examplesHub: ExamplesHubCopy = {
  meta: {
    title: 'Ví dụ menu cuộn ngang React — trực tiếp, kèm code',
    description:
      'Các ví dụ về react-horizontal-scrolling-menu: mũi tên, kéo để cuộn, tab cuộn được, RTL, dọc, vòng lặp vô hạn, tự phát — mỗi cái có nguồn sao chép-dán.',
  },
  title: 'Ví dụ: mọi pattern, trực tiếp, với nguồn đầy đủ',
  lede: 'Mỗi ví dụ là một bản demo hoạt động của gói npm đã xuất bản cộng với file đầy đủ phía sau nó: sẵn sàng sao chép-dán, và có thể chỉnh sửa trực tiếp trong Storybook. Được render trên server như mọi thứ khác trên trang web này.',
  storybookCta: 'Thích một sân chơi hơn? Mở Storybook',
};

/** Đồ nội thất chung cho tất cả hai mươi mốt trang ví dụ. */
export const examplePage: ExamplePageCopy = {
  breadcrumbLabel: 'Đường dẫn',
  breadcrumbExamples: 'Ví dụ',
  storybookCta: 'Chỉnh sửa ví dụ này trực tiếp trong Storybook',
  fullSource: 'Nguồn đầy đủ',
  fullSourceLede:
    'Đầy đủ và sẵn sàng sao chép-dán — đây là file chính xác phía sau',
  fullSourceLedeLink: 'phiên bản Storybook có thể chỉnh sửa trực tiếp',
  copyFullSource: 'Sao chép nguồn đầy đủ',
  relatedExamples: 'Các ví dụ liên quan',
  allExamples: 'Tất cả {count} ví dụ',
};
