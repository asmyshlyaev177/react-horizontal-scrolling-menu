// Chinese (Simplified) (zh-CN) — translation of en/use-cases.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=zh-CN source=en/use-cases.ts source-blob=90fca8a33a3a26de44d29e981f98e2a5cd248922 status=translated
import type { UseCasesCopy } from '../types.ts';

export const useCases: UseCasesCopy = {
  hub: {
    heading: '使用场景',
    lede: '按目标整理的完整模式——每个都有在线演示、代码和 shadcn 安装命令。',
  },

  netflixRow: {
    name: 'Netflix 风格行',
    blurb: '海报卡片、悬停时出现的边缘箭头、边缘渐隐、支持拖拽。',
    meta: {
      title: 'React 中的 Netflix 风格横向滚动行',
      description:
        '使用原生滚动，在 React 中构建 Netflix 风格的分类行：悬停显示箭头、边缘渐隐、拖拽滚动、可见性跟踪。附带实时演示和完整源码。',
    },
    jsonLdHeadline: '如何在 React 中构建 Netflix 风格的横向滚动行——无需轮播库',
    title: 'React 中的 Netflix 风格横向滚动行',
    lede: '你在每个流媒体网站上滑动浏览的那一排海报，其实不是轮播图——而是一个菜单。它不会吸附对齐，也不会自动播放；它依靠原生的惯性滚动，箭头则叠加在上层。这正是 `react-horizontal-scrolling-menu` 提供的能力：你的卡片、原生滚动，以及逐项可见性检测，让箭头知道何时该隐藏。',
    demoHint:
      '拖拽它，或者悬停在这一行上——箭头会在边缘处渐显，当到达该行的相应端点时，对应箭头就会消失。',
    prose: [
      {
        heading: '为什么这不是轮播图该做的事',
        body: `Netflix 风格的行从不会一次只显示一张幻灯片。边缘处的项目故意被部分裁切——被裁切的海报正是在提示“还有更多”。轮播引擎则与此背道而驰：它们用 JavaScript 变换接管手势层，吸附到幻灯片边界，并重新实现用户浏览器本就具备的惯性滚动。对于一排可点击的卡片来说，这些都是多余的开销。

原生滚动免费为你提供了惯性、触摸、触控板和滚动条支持。它没有提供的两样东西是叠加箭头和感知屏幕上有哪些卡片——而这正是本库通过逐项 [\`useIsVisible\`](/examples/simple) 和边缘感知箭头状态所补上的两件事。`,
      },
      {
        heading: '成就这种效果的三个细节',
        body: `- **箭头叠加在内容之上**，而不是并排放置。将它们绝对定位在行的两端渲染（上方演示中它们通过 \`Header\` 传入，以便保留在菜单的上下文内），悬停时显示，并在 [\`useLeftArrowVisible\` / \`useRightArrowVisible\`](/examples/simple) 报告该端已到达时将对应箭头隐藏。
- **边缘渐隐。** 只需一行 CSS——在滚动容器上加一个 \`mask-image\` 渐变——就替代了轮播插件为此专门实现的“窥视”逻辑。
- **拖拽不能触发点击。** 鼠标拖拽如果结束在某张海报上，不应打开它。[拖拽滚动方案](/examples/mouse-drag) 会跟踪拖拽状态，并精准吞掉那一次点击。`,
      },
      {
        heading: '扩展规模：懒加载的行与超长的栏',
        body: `流媒体界面会堆叠数十行、数百张卡片。由于每个项目都只是原生滚动容器内的普通 DOM，滚动时不会触发任何重新渲染——[性能示例](/examples/performance) 在不做虚拟化的情况下也能运行 300 个项目。逐项可见性检测还能免费带来图片懒加载：在 \`useIsVisible\` 报告卡片进入屏幕之前，先渲染一个占位符。

如果你的行需要在末尾循环回绕，这正是幻灯片语义真正有用的地方——在转向轮播引擎之前，可以先看看 [无限循环方案](/examples/infinite-loop) 中约 60 行的用户态实现。`,
      },
    ],
    snippet: {
      heading: '最简模式',
      lede: '在原生滚动行上叠加箭头——上方演示就是这个结构再加上样式。下方的 shadcn 组件提供了包含拖拽和边缘渐隐效果的完整可直接使用的源码。',
    },
    shadcn: {
      heading: '或者以 shadcn 组件的形式安装',
      body: '[media-row](https://react-horizontal-scrolling-menu.dev/r/media-row.json) 注册表条目正是这个模式——悬停箭头、渐变边缘渐隐、拖拽滚动——以 Tailwind 样式组件的形式安装进你的 `components/ui/`，可自由编辑：',
    },
  },

  scrollableTabs: {
    name: '可滚动标签栏',
    blurb: '溢出时优雅滚动、并将活动标签居中的标签栏。',
    meta: {
      title: 'React 可滚动标签栏——无需 Material UI',
      description:
        '使用原生滚动在 React 中实现可滚动标签栏：激活的标签会自动居中，箭头仅在需要时出现，标签内容形式自由。附带实时演示和源码。',
    },
    jsonLdHeadline:
      'React 中的可滚动标签栏：原生滚动、选中居中、无需 Material UI',
    title: '像浏览器一样滚动的 React 可滚动标签栏',
    lede: '一旦你的产品的标签数量超过六个，标签栏就会装不下。解决办法不是缩小字号——而是让整条标签栏可以滚动：溢出交给浏览器处理，点击某个标签会使其居中，箭头只在还有地方可去时才出现。',
    demoHint: '点击靠近边缘的标签——它会自动滚动到中间位置。',
    prose: [
      {
        heading: '唯一重要的行为：选中即居中',
        body: `一个可滚动标签栏是否好用，取决于点击边缘标签时会发生什么：它应当平滑滑动到中间，将两侧的相邻标签露出来。这里只需一次调用——\`scrollToItem(el, 'smooth', 'center')\`——已经在 [选中即居中示例](/examples/center-on-click) 中接好。挂载时恢复激活标签用的是同一个调用，只是把参数换成 \`'auto'\`，见 [保存与恢复位置](/examples/save-restore-position)。

箭头来自同一份可见性数据：只有当第一个标签移出屏幕时，\`useLeftArrowVisible\` 才会为 false，因此左箭头恰好只在有用时才渲染。不需要自己写测量代码，也不需要自己的 resize observer。`,
      },
      {
        heading: '如果你正在超出 MUI 可滚动标签栏的能力范围',
        body: `在 Material 设计体系内，Material UI 的 \`variant="scrollable"\` 标签是正确答案——直到你的“标签”不再是标签为止。MUI 把这条栏牢牢焊死在 Tabs 语义上：一对 \`value\`/\`onChange\`、标签面板，以及 MUI 在移动端默认隐藏的滚动按钮。一旦你的这一行需要容纳纸片、卡片、头像或混合内容，或者需要拖拽滚动，或者需要知道哪些项目可见，你就是在和这个组件较劲，而不是在使用它。

本库处于更底层：一个带可见性跟踪的可滚动行，对“标签”是什么不做任何假设。你的标签可以是任何带有 \`itemId\` 的组件——用 Tailwind、MUI 自己的 \`styled\`，或纯 CSS 来设置样式都可以。选中状态始终由你掌控，就像上方演示那样，只用一个 \`useState\` 保存。`,
      },
      {
        heading: '无障碍访问基本是免费的——但要留意两处空白',
        body: `因为这条栏本身就是一个原生滚动容器，键盘焦点、屏幕阅读器的阅读顺序以及 RTL 都由平台自动处理——焦点在标签间移动时会自动滚动进入可视区域，无需任何代码，[RTL](/examples/rtl) 也无需额外配置。有两件事仍需你自己处理，这和其他任何标签 UI 一样：选择合适的 ARIA 模式（如果确实会切换面板，用 \`role="tablist"\`；如果这些“标签”实际是导航，用 \`aria-current\`），并沿用 [拖拽滚动](/examples/mouse-drag) 方案中的点击抑制逻辑，以确保松开拖拽时不会误触发某个标签。`,
      },
    ],
    snippet: {
      heading: '最简模式',
      lede: '标签就是带有 `itemId` 的普通按钮；选中一个会使其居中。这就是全部思路——上方演示只是额外加上了样式和拖拽。',
    },
    shadcn: {
      heading: '或者以 shadcn 组件的形式安装',
      body: '[scroll-tabs](https://react-horizontal-scrolling-menu.dev/r/scroll-tabs.json) 注册表条目以数据驱动的方式提供这一模式——传入 `tabs`、`value`、`onValueChange` 即可——作为可编辑组件安装进你的 `components/ui/`：',
    },
  },

  filterChips: {
    name: '筛选标签',
    blurb: '将新筛选项滚动到可见区域、且不影响点击的标签栏。',
    meta: {
      title: 'React 可滚动栏中的筛选标签',
      description:
        'React 中的横向筛选标签栏：标签原生滚动，新增标签会自动滚动进入视图，拖拽滚动且不影响点击。附带实时演示和源码。',
    },
    jsonLdHeadline: '如何用原生滚动在 React 中构建可滚动的筛选标签栏',
    title: 'React 中的可滚动筛选标签栏',
    lede: '几乎每个搜索栏下方都有这样一行标签——YouTube 的话题、商店筛选项、标签选择器——本质上是一个装满切换按钮的单行滚动容器。难的那 10% 在于边缘处发生的事：新增的标签出现在屏幕外、拖拽绝不能触发任何切换、以及箭头要知道自己何时已经没用了。',
    demoHint: '添加一个筛选项——该行会自动将新标签滚动进入可视区域。',
    prose: [
      {
        heading: '边缘情况才是这个组件的价值所在',
        body: `任何带 \`overflow-x: auto\` 的 flex 行都能滚动。而一个筛选标签栏的价值恰恰体现在这些细节上：

- **在屏幕外新增的标签必须让自己被看到。** 演示中在渲染后会用 \`apiRef.current.scrollToItem(el, 'smooth', 'end')\` 滚动到每一个新标签——[新增项并滚动到该项示例](/examples/add-item-and-scroll-to-it) 就是这套接线方式。
- **拖拽用于滚动，点击用于切换——二者绝不能混淆。** 桌面用户会像操作触控面板一样拖拽这一行；在某个标签上松开时不能将其翻转。[拖拽方案](/examples/mouse-drag) 会跟踪手势，并精确抑制那一次点击。
- **箭头只在有用时出现。** \`useLeftArrowVisible\` / \`useRightArrowVisible\` 接到了与其他一切相同的 IntersectionObserver 上，因此箭头会在真正的边缘处禁用——即便是在标签被新增或移除之后也是如此。`,
      },
      {
        heading: '状态始终掌握在你手中',
        body: `本库负责滚动，不负责选中状态。标签是你自己的按钮——多选切换用 \`aria-pressed\`，单选用普通 state——菜单只要求每一个标签携带一个 \`itemId\`。这意味着标签状态可以与你已有的任何东西组合：URL 查询参数、表单库，或服务端驱动的筛选模型。删除一个标签就是 [移除一个项目](/examples/add-items)；为其加上退场动画则参见 [项目动画示例](/examples/items-animation)。`,
      },
      {
        heading: '移动端：关于页面滚动的一个提醒',
        body: `在触屏设备上，某些浏览器中在该栏内的横向滑动可能会连带把整个页面也一起拖动。如果你遇到这种情况，[阻止页面滚动示例](/examples/prevent-body-scroll) 展示了如何用 \`touch-action\` 和 overscroll 约束来锁定这一行为——纯 CSS，不需要任何手势库。`,
      },
    ],
    snippet: {
      heading: '最简模式',
      lede: '标签就是带有 `itemId` 的切换按钮；通过菜单 API 的 ref 可以将新增的标签滚动进入视图。',
    },
    shadcn: {
      heading: '或者以 shadcn 组件的形式安装',
      body: '[chip-bar](https://react-horizontal-scrolling-menu.dev/r/chip-bar.json) 注册表条目以受控组件的形式提供——`options`、`selected`、`onSelectedChange`——以 Tailwind 样式安装进你的 `components/ui/`：',
    },
  },

  categoryRail: {
    name: '分类栏',
    blurb: '商店部门行：感知边缘的箭头、图片懒加载、埋点分析。',
    meta: {
      title: '面向电商的 React 分类栏',
      description:
        'React 中的横向分类栏：原生滚动、到达边缘时箭头自动禁用、逐项可见性检测支持图片懒加载和数据分析。附带演示和源码。',
    },
    jsonLdHeadline: '如何基于原生滚动在 React 中构建电商分类栏',
    title: 'React 中面向你的商店的分类栏',
    lede: '分类栏——位于店铺商品网格上方、可点击的部门分类行——是电商场景中流量最高的滚动容器，而它们本质是菜单，不是轮播图：每个方块都是一个链接，没有吸附对齐，而边缘处露出半个方块正是在邀请用户继续滚动。',
    demoHint: '拖拽这一栏，或使用箭头——它们会在该行真正的端点处禁用。',
    prose: [
      {
        heading: '为什么原生滚动在店铺页面上更胜一筹',
        body: `店铺分类栏位于首屏之内，而首屏正是你为每一分 Lighthouse 分数拼尽全力的地方。轮播引擎需要用几十 KB 的手势模拟代码，去实现浏览器原生就能做到的事；本库压缩后（min+gzip）大约只有 ≈5.7 kB，并把滚动完全交给平台处理，因此没有 hydration 卡顿——这一栏在你的 JavaScript 加载完成之前就能滚动，也就意味着它在爬虫看到的服务端渲染 HTML 中同样可用。这个页面本身就是服务端渲染的证明：上方的演示在禁用 JavaScript 的情况下依然可以滚动。

[对比页面](/compare) 提供了与 Swiper、Embla、keen-slider 和 react-slick 的完整对比表格。`,
      },
      {
        heading: '可见性跟踪是一项店铺场景功能',
        body: `逐项可见性听起来像是一个实现细节，直到你把它对应到商品运营场景：

- **懒加载图片**——在 \`useIsVisible\` 报告该方块进入屏幕之前，先渲染一个占位方块。
- **曝光分析**——\`getVisible()\`（在首页的 [首屏演示](/) 中实时运行）能准确告诉你哪些分类被用户看到过，而不只是知道这一栏被渲染过。
- **边缘感知箭头**——即便分类是异步加载进来的，也能在真正的端点处禁用或隐藏，如 [新增项目示例](/examples/add-items) 所示。`,
      },
      {
        heading: '融入你自己的设计体系',
        body: `方块是你自己的组件——图片卡片、圆形头像、文字胶囊——每一个都携带一个 \`itemId\`。高度和宽度由你的 CSS 决定；菜单本身不强加任何尺寸。可以借助 [单项滚动](/examples/one-item-scroll) 像商品滑块一样每次移动一项，也可以显示一个滚动 [进度指示器](/examples/progress)，或者用 [RTL 示例](/examples/rtl) 为阿拉伯语、希伯来语商店提供 RTL 支持——这条分类栏是组合出来的，而不是配置出来的。`,
      },
    ],
    snippet: {
      heading: '最简模式',
      lede: '带有 `itemId` 的方块，箭头来自可见性 hooks——整条分类栏的代码不到四十行。',
    },
    shadcn: {
      heading: '或者以 shadcn 组件的形式安装',
      body: '基础的 [scroll-menu](https://react-horizontal-scrolling-menu.dev/r/scroll-menu.json) 注册表条目就是这条分类栏——shadcn 样式的箭头、拖拽滚动、隐藏滚动条——安装进你的 `components/ui/`，并由你自己的 tokens 定义样式：',
    },
  },
};
