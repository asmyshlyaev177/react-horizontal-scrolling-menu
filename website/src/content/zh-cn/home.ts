// Chinese (Simplified) (zh-CN) — translation of en/home.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=zh-CN source=en/home.ts source-blob=1da4a2b83ec7a4e233dae7ab5c335622de7edad4 status=translated
import { INTENT, REACT_STATUS, STORIES } from '../../lib/links.ts';
import type { HomeCopy } from '../types.ts';

// Deep-links the import, not the repo root: the claim is that they render
// this component in production, and the line proves it. Commit-pinned so a
// refactor on their side can't turn it into a 404.
const OWID =
  'https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/gdocs/components/KeyInsights.tsx#L3';

export const home: HomeCopy = {
  jsonLdDescription:
    '基于浏览器原生滚动的 React 横向滚动菜单组件，带逐项可见性追踪。',

  hero: {
    titleLead: '这个横向菜单',
    titleHighlight: '知道什么可见',
    sub: '一个基于浏览器自身滚动的 React 滚动菜单——逐项可见性追踪、箭头、拖拽，以及完整的命令式 API。gzip 后 `5.7 kB`。',
    primaryCta: '开始使用',
    secondaryCta: '浏览示例',
    storybookCta: '打开 Storybook',
  },

  install: {
    ariaLabel: '安装',
    copyLabel: '复制安装命令',
    shadcnNote:
      '或使用 [shadcn/ui](https://ui.shadcn.com) 现成组件 — 箭头、拖拽滚动、自带样式',
    shadcnCopyLabel: '复制 shadcn 命令',
    facts: [
      '每月下载 **34.7 万**次',
      '**5.7 kB** 压缩+gzip',
      'React **16.8 – 19**',
      '**MIT**',
    ],
  },

  autoplay: {
    heading: '自动播放，无需轮播引擎',
    lede: '没有 `autoplay` 属性——这条轨道是公开 API 上的一道配方：把行克隆到两端、在接缝处跳转一次 `scrollLeft`，再用一个定时器调用 `scrollNext()`。它在悬停、聚焦及隐藏的标签页下暂停，在减少动态效果偏好下保持静止——你甚至可以跨接缝反向拖拽它。',
    recipeLink: '阅读完整配方',
    storybookLink: '在 Storybook 中实时编辑',
  },

  positioning: {
    heading: '是 *菜单*，不是轮播',
    scope: [
      'Embla、Swiper 和 keen-slider 用 JavaScript 重新实现滚动来构建图片滑块——吸附点、弹簧物理、渲染循环。本库不提供其中任何一样。它依托浏览器原生滚动，并加上浏览器无法提供的那一样东西：确切知道哪些项目在屏幕上。',
      '对全屏图片滑块而言是 **错误的工具**——那里请用 Embla 或 Swiper。对分类栏、标签页条、筛选标签，以及任何你的应用需要感知的一行内容，它则是 **正确的工具**。',
    ],
    pillars: [
      {
        title: '原生滚动',
        body: '惯性、滚动条、触摸、滚轮与无障碍都来自浏览器，而非物理引擎。这一行在你的 JavaScript hydrate 之前就能滚动——本页每个演示都是服务端渲染的。',
      },
      {
        title: '可见性追踪',
        body: 'IntersectionObserver 报告哪些项目在屏幕上。`useIsVisible(itemId)` 让一个组件订阅一个项目——无需滚动位置计算，并且只有受影响的那些项目会重新渲染。',
      },
      {
        title: '需要时命令式',
        body: '`scrollToItem`、`scrollNext`、`scrollPrev`、按 id 或索引查找——通过菜单内部的 context，或来自外部的 `apiRef`。',
      },
      {
        title: '你的组件，你的 CSS',
        body: '箭头、header、footer 与每个项目都是你编写的组件。项目宽度是你的 CSS。本库只附带 210 字节的布局样式，绝不碍事。',
      },
    ],
  },

  quickStart: {
    heading: '快速开始',
    lede: '一个文件，零配置：带 `itemId` 的项目、读取 `VisibilityContext` 的两个箭头，以及样式表导入。',
    notes: [
      '每个项目都必须有 `itemId`——追踪正是靠它。React 的 `key` 作为后备方案。',
      '`styles.css` 是单独的导入；JS 包绝不会注入 CSS。',
      '项目宽度来自你自己的 CSS——菜单不做任何测量。',
    ],
    link: '阅读完整的快速入门示例',
  },

  aiSkills: {
    heading: '或者交给你的编程代理',
    body: `基于旧版本训练的模型仍会伸手去要 \`visibleElements\`、\`Separator\` 项目和一个 \`Arrows\` 属性——这些多年前就已移除——并凭空捏造一个从未存在过的 \`autoplay\` 属性。本包随附八个 \`SKILL.md\` 文件来阻止这种情况：按任务划分的指导，你的代理通过 [TanStack Intent](${INTENT}) 按需加载，随库一起发布版本，而不随本页更新。`,
    copyLabel: '复制 Intent 命令',
    note: '在已安装该包的项目里运行一次。你的代理随即会从 `node_modules/react-horizontal-scrolling-menu/skills/` 发现这些技能。',
    // The SKILL.md files published inside the package, and the one line each
    // that tells an agent — or a reader deciding whether this is worth a
    // command — when it is the one to load. Kept in the same order as
    // public/llms.txt, which is the machine-readable version of this table.
    skills: [
      {
        id: 'menu-setup',
        when: '第一个可用的菜单、箭头、必需的 CSS 导入',
      },
      {
        id: 'menu-visibility',
        when: '屏幕上有什么，以及两端的箭头状态',
      },
      {
        id: 'menu-scrolling',
        when: 'scrollToItem、apiRef、一次一页的分页',
      },
      {
        id: 'menu-interactions',
        when: '拖拽、滚轮与触摸——以及它们的事件处理工厂',
      },
      {
        id: 'menu-recipes',
        when: '自动播放、无限循环、加载更多：是配方，不是属性',
      },
      {
        id: 'menu-transitions-rtl',
        when: '动画时长、自定义缓动、从右到左',
      },
      {
        id: 'menu-testing-ssr',
        when: 'Next.js 与 RSC、Jest 模拟、Playwright',
      },
      {
        id: 'menu-migration',
        when: '升级 v8 之前的代码，以及模型仍在凭空捏造的 API',
      },
    ],
    skillsLink: '在 GitHub 上阅读技能',
    llmsLink: 'llms.txt——同样的事实，浓缩版',
  },

  gallery: {
    heading: '你会真正上线的配方',
    lede: '四种常见模式，在线演示，附关键代码。',
    tabs: {
      title: '让活动标签页居中的标签页条',
      body: "点击一个标签页：`scrollToItem` 配 `inline: 'center'` 会把它带到行的中间。同一个调用也能处理 `start`、`end` 与分页。",
      link: '查看完整示例',
    },
    chips: {
      title: '添加一个标签，滚动到它',
      body: '状态位于菜单之外；`apiRef` 可以触达。添加一个筛选器，这一行就跟着它走。',
      link: '查看完整示例',
    },
    infinite: {
      title: '到达末尾时加载更多',
      body: '`onUpdate` 会在最后一个项目变为可见时通知你——就在那里追加下一页。无需滚动监听、无需调节像素阈值。',
      link: '查看完整示例',
    },
    rtl: {
      title: '从右到左，一个属性',
      body: '`RTL` 翻转滚动容器的方向；箭头与分页逻辑随之改变。',
      link: '查看完整示例',
    },
  },

  features: {
    heading: '盒子里有什么',
    included: [
      '逐项可见性 hook——`useIsVisible(itemId)`',
      '用于箭头状态的 `first` / `last` 辅助函数',
      '`scrollToItem` · `scrollNext` · `scrollPrev`',
      '用于从菜单外部控制的 `apiRef`',
      '拖拽、滚轮、触摸与滚动条输入',
      '动态增删检测',
      'Header 与 Footer 插槽',
      '`slidingWindow` + `getItemsPos` 分页辅助函数',
      '从右到左支持',
      '自定义过渡函数',
      'SSR 安全——本页就是证明',
      'TypeScript 优先——导出 `publicApiType`',
      '在 React 16.8 – 19 之间保持一套稳定的 API',
    ],
    notIncludedHeading: '盒子里没有的',
    notIncluded: ['吸附与弹簧物理', '全屏图片滑块', '灯箱'],
    note: `那些属于图片滑块的领域——Embla 和 Swiper 做得很好。[无限循环](${STORIES.infiniteLoop}) 与 [自动播放](${STORIES.autoplay}) 也不是属性——它们是配方：每个都在公开 API 上约六十行，可在 Storybook 中实时编辑。本页顶部那条轨道正是这个配方在运行。这里始终是个菜单。`,
  },

  proof: {
    statement:
      '上个月被约 **20,000 个仓库**下载了 **347,516 次**——自 **2018 年**维护至今。',
    notes: [
      'GitHub 上 788 颗星',
      `登上 [React Status #257](${REACT_STATUS})`,
      `在 [Our World in Data](${OWID}) 中生产使用`,
    ],
  },

  storybook: {
    heading: '每个示例都可以在浏览器里编辑',
    body: '这个 Storybook 同时也是一个沙盒：每个 story 都附带一个加载了库的真实类型定义的 Monaco 编辑器。改代码，看它重新渲染——无需沙盒账号，也无需本地搭建。',
    primaryCta: '打开 Storybook',
    secondaryCta: 'API 参考',
  },

  author: {
    heading: '由 Aleksandr Smyshliaev 构建并维护',
    body: '2018 年首次发布，在 React 16.8 到 19 之间保持相同的公开 API。Aleksandr 是一名前端工程师——React、Next.js、TypeScript——目前接受外包与全职工作。',
    siteLink: 'asmyshlyaev177.dev',
    githubLink: 'GitHub',
    linkedinLink: 'LinkedIn',
  },
};
