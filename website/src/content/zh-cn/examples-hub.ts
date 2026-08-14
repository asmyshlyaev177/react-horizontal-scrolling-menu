// Chinese (Simplified) (zh-CN) — translation of en/examples-hub.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=zh-CN source=en/examples-hub.ts source-blob=8127bcad7814c2b0afd352822f229d8a3c1783ff status=translated
import type { ExamplePageCopy, ExamplesHubCopy } from '../types.ts';

/** /examples 列表页。 */
export const examplesHub: ExamplesHubCopy = {
  meta: {
    title: 'React 横向滚动菜单示例——在线可运行，附代码',
    description:
      'react-horizontal-scrolling-menu 的示例：箭头、拖拽滚动、可滚动标签页、RTL、垂直、无限循环、自动播放——每个都附可复制粘贴的源码。',
  },
  title: '示例：每种模式，在线运行，附完整源码',
  lede: '每个示例都是已发布 npm 包的可运行演示，外加背后的完整文件——可直接复制粘贴，并可在 Storybook 中实时编辑。与本网站其他内容一样服务端渲染。',
  storybookCta: '更喜欢沙盒？打开 Storybook',
};

/** 全部二十一个示例页面共用的家具元素。 */
export const examplePage: ExamplePageCopy = {
  breadcrumbLabel: '面包屑',
  breadcrumbExamples: '示例',
  storybookCta: '在 Storybook 中实时编辑此示例',
  fullSource: '完整源码',
  fullSourceLede: '完整且可直接复制粘贴——这正是背后这份文件的',
  fullSourceLedeLink: '可在 Storybook 中实时编辑的版本',
  copyFullSource: '复制完整源码',
  relatedExamples: '相关示例',
  allExamples: '全部 {count} 个示例',
};
