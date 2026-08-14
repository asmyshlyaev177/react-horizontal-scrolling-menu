// Chinese (Simplified) (zh-CN) — translation of en/compare.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=zh-CN source=en/compare.ts source-blob=c29839efeb7de75a4cfbad0342c7bfb7266a0666 status=translated
import type { CompareCopy } from '../types.ts';

export const compare: CompareCopy = {
  meta: {
    title: 'react-horizontal-scrolling-menu 对比 Swiper、Embla、react-slick',
    description:
      '一次坦诚的对比：横向滚动菜单何时胜过轮播库，何时不会。Swiper、Embla、keen-slider 与 react-slick 同台比拼。',
  },
  jsonLdHeadline:
    '轮播还是滚动菜单？react-horizontal-scrolling-menu 对比 Swiper、Embla、keen-slider 与 react-slick',

  title: '轮播还是滚动菜单？一次坦诚的对比',
  lede: 'Swiper、Embla、keen-slider 与 react-slick 都是轮播引擎：它们用 JavaScript 重新实现滚动，以获得幻灯片语义、吸附物理与各种效果。react-horizontal-scrolling-menu 并非其中之一——它依托浏览器原生滚动，并加上逐项可见性追踪。你想要哪一个取决于你在构建什么；而对相当一部分轮播的实际用途而言，坦诚的答案是：你从一开始就在构建一个菜单。',

  table: {
    headers: ['', '本库', 'Swiper', 'Embla', 'keen-slider', 'react-slick'],
    rows: [
      [
        '它是什么',
        '带可见性追踪的滚动菜单',
        '完整的滑块/轮播框架',
        '无头轮播引擎',
        '框架无关的滑块引擎',
        'jQuery slick 滑块的 React 移植',
      ],
      [
        '滚动引擎',
        '浏览器原生滚动',
        'JS 变换 + 物理',
        'JS 变换 + 物理',
        'JS 变换 + 物理',
        'JS 变换（CSS 过渡）',
      ],
      [
        '体积（核心，压缩+gzip）',
        '≈5.7 kB',
        '≈40 kB',
        '≈8 kB',
        '≈7 kB',
        '≈15 kB + slick CSS',
      ],
      [
        '哪些项目在屏幕上',
        '内置——逐项 useIsVisible',
        '基于幻灯片索引',
        '幻灯片索引事件',
        '幻灯片索引事件',
        '基于幻灯片索引',
      ],
      [
        '吸附、效果、物理',
        '无——刻意为之',
        '丰富（fade、cube、coverflow…）',
        '基于插件，可补间',
        '有，含自由模式',
        'Fade、居中模式',
      ],
      [
        '循环 / 自动播放',
        '公开 API 上的配方',
        '内置属性',
        '插件',
        '内置选项',
        '内置属性',
      ],
      [
        '滚动条、滚轮、键盘焦点',
        '原生——浏览器自带',
        '模拟 / 需启用的模块',
        '自行实现（无头）',
        '自行实现',
        '有限',
      ],
      [
        '最适合',
        '分类栏、标签页条、筛选标签',
        '全屏滑块、画廊',
        '自定义轮播（shadcn 默认）',
        '极简自定义滑块',
        '旧版 slick 迁移',
      ],
    ],
    note: '体积为近似核心大小——在仅凭大小做决定前，请先查 bundlephobia 获得当前数字。',
  },

  prose: [
    {
      heading: '首先，真正的问题',
      body: `**轮播**展示的是幻灯片：一次一个（或一页）内容，带有吸附、效果，以及"第 3 个，共 8 个"的位置感。**菜单**展示的是一行供用户扫视和挑选的内容：分类轨道、标签页条、筛选标签栏。轮播需要幻灯片语义；菜单需要原生滚动——惯性、滚动条、滚轮、触摸与键盘焦点都与页面其余部分表现一致——外加浏览器无法提供的一样东西：知道哪些项目在屏幕上。

如果你在构建全屏图片滑块、首屏画廊，或任何带吸附到幻灯片物理效果的东西，**请使用轮播库——Embla 或 Swiper 都很出色**。本页是为另一种情况准备的：那行可点击的内容，其实从来都不是真正的幻灯片——这是每个轮播 FAQ 都悄悄忽略的情形。`,
    },
    {
      heading: '对比 Swiper',
      body: `Swiper 是最完整的滑块框架：效果（fade、cube、coverflow）、虚拟幻灯片、缩放、视差、分页，以及成熟的生态。当你用得上它所提供的功能时，它那约 40 kB 的体积物有所值。它用变换重新实现了滚动，因此原生滚动条、滚轮行为与滚动无障碍都是你需要配置的模拟，而非默认继承的行为。

- **选择 Swiper**：用于以图片为主的滑块、效果，或任何必须感觉像幻灯片的东西。
- **选择本库**：当那个"轮播"其实是一个 YouTube 风格标签栏或 Netflix 风格分类栏时——你用少约 34 kB 的体积获得原生滚动，外加每个项目的 \`useIsVisible\`——而 Swiper 无法建模这一点，因为幻灯片不是项目。`,
    },
    {
      heading: '对比 Embla',
      body: `Embla 是一个无头轮播引擎，有着出色的物理效果和一流的 React 适配器——shadcn/ui 就在它之上构建自己的轮播；当你希望对真正的轮播拥有完整视觉控制时，它是正确的默认选择。无头对菜单而言是一把双刃剑：选择时的滚动进可视区、逐项可见性、箭头禁用与焦点管理，都需要你自己动手实现。

- **选择 Embla**：用于自定义设计的轮播，以及体积小巧的吸附物理。
- **选择本库**：当那些需要手工构建的部分正是重点时——\`scrollToItem\`、\`useIsVisible\`、first/last 箭头状态和 \`apiRef\` 开箱即用。`,
    },
    {
      heading: '对比 keen-slider',
      body: 'keen-slider 是一个精简、框架无关的滑块引擎——当你希望跨框架只用一个依赖时，它是极简自定义滑块的好选择。和其他库一样，它用变换掌控手势层，且其 API 以幻灯片索引为主：对幻灯片很合适，但对"把选中的标签滚动进可视区，并告诉我什么可见"却很不顺手。',
    },
    {
      heading: '对比 react-slick',
      body: 'react-slick 把 jQuery 时代的 slick 轮播移植到了 React。它依然能用，但它会拖进一个单独的 CSS 文件，其架构早于 hooks，维护也很稀疏。离开它的团队通常分成两派：真正的轮播（转向 Embla 或 Swiper）——以及因为已经装了 slick 而把导航行硬塞进 `centerMode` 的那类。后一类正是本库的用武之地：[居中选中](/examples/center-on-click)、[一次前进一项](/examples/one-item-scroll) 与 [拖拽滚动](/examples/mouse-drag)，无需滑块引擎。',
    },
    {
      heading: '菜单这一侧的样子',
      body: `本网站的每个模式都是活的、服务端渲染的，且各自附有完整源码：[可滚动标签页](/examples/center-on-click)、[筛选标签](/examples/add-item-and-scroll-to-it)、[加载更多行](/examples/add-items)，以及——人们以为需要轮播引擎的两个功能——[无限循环](/examples/infinite-loop) 与 [自动播放](/examples/autoplay)，每个都在公开 API 上约六十行。

- 压缩+gzip 后 5.7 kB，TypeScript 优先，MIT，每月约 34.7 万次下载，自 2018 年维护至今，在 React 16.8–19 之间保持一套稳定的 API。
- 对 SSR 友好：这一行在你的 JavaScript hydrate 之前就能滚动——本页及本站的每个示例都证明了这一点。`,
    },
  ],

  links: {
    examples: '浏览全部示例',
    storybook: '在 Storybook 中试用',
    github: 'GitHub',
  },
};
