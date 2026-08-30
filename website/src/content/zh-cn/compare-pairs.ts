// Chinese (Simplified) (zh-CN) — translation of en/compare-pairs.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=zh-CN source=en/compare-pairs.ts source-blob=0fb5673892e901be3f7c39eba5eb45e00488b9a5 status=translated
import type { ComparePairsCopy } from '../types.ts';

// Neutral-pair comparison pages. The voice is a referee's, not a vendor's:
// each page recommends the right carousel for carousel jobs and claims only
// the menu-shaped slice. Overselling here burns the credibility the pages
// exist to earn.
export const comparePairs: ComparePairsCopy = {
  hub: {
    heading: '更多对比',
    lede: '针对人们实际权衡的具体选择，提供更深入的对比页面。',
  },

  emblaVsSwiper: {
    meta: {
      title: 'Embla 与 Swiper：React 轮播库该怎么选',
      description:
        '客观对比 Embla 与 Swiper：包体积、功能、无头架构与内置一切之别——以及当你的“轮播图”其实是菜单时的第三个选择。',
    },
    jsonLdHeadline:
      'Embla 与 Swiper 的 React 对比：一份客观评测，外加两者都不需要的情况',
    name: 'Embla vs Swiper',
    blurb: '无头引擎还是内置一切——以及两者都不需要的情况。',
    title: 'Embla 与 Swiper：按你要构建的东西来选',
    lede: '两者都是出色且维护活跃的轮播引擎，二者之间的选择确实相当接近。归结起来是一个维度：Swiper 内置了所有功能；Embla 提供一个供你在其上构建的小型无头引擎。本页由一个与两者都不构成竞争的库的维护者撰写——而这也正是文末给出的第三个答案，留给那些其实根本算不上轮播图的场景。',
    table: {
      headers: ['', 'Embla', 'Swiper'],
      rows: [
        ['是什么', '无头轮播引擎', '完整的滑块/轮播框架'],
        ['包体积（核心，min+gzip）', '≈8 kB', '≈40 kB（随模块增加而增长）'],
        [
          '样式与标记',
          '完全由你自己提供——它本身不带任何样式',
          '有自己的 DOM 结构和 CSS，可主题化',
        ],
        [
          '特效（渐隐、立方体、coverflow 等）',
          '社区插件，或自行实现',
          '内置，成熟稳定',
        ],
        ['自动播放、分页、缩略图', '官方插件', '内置模块'],
        [
          'React 集成',
          '一等公民 hook（useEmblaCarousel）',
          '在原生核心之上封装的组件',
        ],
        [
          '生态位置',
          'shadcn/ui 轮播组件底层使用的引擎',
          'Web 上使用最广泛的滑块库',
        ],
        [
          '最适合',
          '自定义设计的轮播图、设计体系',
          '以图片为主的滑块、功能丰富的画廊',
        ],
      ],
      note: '包体积均为核心部分的近似值——最新数字请查阅 bundlephobia；Swiper 的体积会随你引入的模块增长。',
    },
    prose: [
      {
        heading: '当设计控制权是关键时，选择 Embla',
        body: `Embla 提供吸附物理效果、拖拽处理和幻灯片模型，仅此而已——没有标记、没有 CSS、没有箭头。这正是它的优势所在：在一个设计体系中，所有可见的东西都由你掌控，引擎也绝不会与你的样式打架。shadcn/ui 的轮播组件正是构建在它之上，这也说明了它的最佳定位：那些希望轮播图看起来像*自家*产品、而不是像某个轮播库的团队。

代价是，滑动之外的每一项功能都要靠插件或手工实现：自动播放和 class 名由官方插件提供；分页圆点、缩略图和特效都得自己写。`,
      },
      {
        heading: '当你想要功能开箱即用时，选择 Swiper',
        body: `Swiper 是内置一切的答案：渐隐、立方体、coverflow 特效，虚拟幻灯片，缩放，视差，缩略图画廊，a11y 模块，多种样式的分页——只需配置，无需自己构建。如果你的产品这个季度就需要用到其中三项，Swiper 的体积很快就能物有所值。

代价则与 Embla 相反：你会继承 Swiper 的 DOM 结构、需要主题化的 CSS，以及一个为 React 封装的原生 JS 核心——无论是 KB 数还是表面积都更重。`,
      },
      {
        heading: '在选择两者之前该先问的问题',
        body: `这两个库都假定你展示的是*幻灯片*——一次一个，或一页一组，带有吸附对齐和明确的位置感。而现实中相当一部分“轮播图”根本不是这样：分类行、logo 条、标签栏、筛选标签——这些都是供用户浏览、点选的可点击项目行。它们需要的是原生滚动（免费获得惯性、滚动条、滚轮、无障碍支持），再加上知道哪些项目在屏幕上——而 Embla 和 Swiper 都没有对逐项可见性建模，因为幻灯片不是项目。

对于这种形态，还有第三个选择：[react-horizontal-scrolling-menu](/)（≈5.7 kB）依靠原生滚动，并提供 \`useIsVisible\`、\`scrollToItem\` 和边缘感知箭头。可以在 [Netflix 风格行](/netflix-row)、[标签栏](/scrollable-tabs) 或 [筛选标签栏](/filter-chips) 中看到它的应用，也可以查看与两者的 [完整对比表](/compare)。`,
      },
    ],
  },

  reactSlickAlternatives: {
    meta: {
      title: '2026 年的 react-slick 替代方案',
      description:
        '从 react-slick 迁移：真正的轮播图用 Embla 或 Swiper，用 centerMode 伪装成导航的行则用 react-horizontal-scrolling-menu。一份客观的迁移指南。',
    },
    jsonLdHeadline:
      'react-slick 的替代方案：真正的轮播图该迁去哪里，你的 centerMode 行又该何去何从',
    name: 'react-slick alternatives',
    blurb: '真正的轮播图该迁去哪里——centerMode 行又该何去何从。',
    title: 'react-slick 替代方案：按你用它构建了什么来决定迁移方向',
    lede: 'react-slick 把 jQuery 时代的 slick 轮播图移植到了 React。它依然能用，但其架构早于 hooks 出现，发布也不频繁，还会给每次构建都带来一个独立的 CSS 文件。正确的替代方案与其说取决于功能，不如说取决于你的用法属于下面两个阵营中的哪一个。',
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
          '是什么',
          'jQuery slick 的 React 移植版',
          '无头轮播引擎',
          '完整滑块框架',
          '滚动菜单，原生滚动',
        ],
        ['维护状态', '零星', '活跃', '活跃', '自 2018 年起持续维护'],
        [
          '包体积（min+gzip）',
          '≈15 kB + slick CSS',
          '≈8 kB',
          '≈40 kB',
          '≈5.7 kB',
        ],
        [
          '是否需要额外 CSS 文件',
          '需要（两个）',
          '不需要',
          '需要（核心）',
          '一个，或通过 shadcn 条目使用 Tailwind',
        ],
        ['幻灯片语义（吸附、圆点、渐隐）', '有', '有', '有', '没有——刻意为之'],
        [
          '可点击项目行',
          '通过 centerMode 硬掰出来',
          '需要在引擎之上手工搭建',
          '需要反其道而行地配置',
          '核心使用场景',
        ],
      ],
      note: '体积均为核心部分的近似值。最后一列是本站自己的库——表格如实说明这一点，而不是假装并非如此。',
    },
    prose: [
      {
        heading: '阵营一：它本来就是真正的轮播图',
        body: `主视觉滑块、图片画廊、评价轮播——凡是设计依赖 slick 的圆点、渐隐和自动播放的场景，都属于这一类。迁移到真正的轮播引擎：

- 如果你自己负责所有样式，并且想要一个精简的无头核心，选 **[Embla](/compare/embla-vs-swiper)**——从理念上说它最接近“现代化版的 slick”。
- 如果你大量使用了 slick 的功能列表，选 **Swiper**；slick 的每一项功能在 Swiper 中都有对应实现，通常还更好。

把 \`slidesToShow\`/\`slidesToScroll\` 对应到 Embla 的 \`slidesInView\`/\`slidesToScroll\`，或 Swiper 的 \`slidesPerView\`/\`slidesPerGroup\`，并准备好删除你自己写的箭头定位 CSS 覆盖——这两个继任者都允许你渲染自己的按钮。`,
      },
      {
        heading: '阵营二：它其实是披着 centerMode 外衣的导航',
        body: `另一种 slick 用法则更隐蔽：一行分类、logo、日期或筛选项，因为 slick 已经在包里了，就被 \`centerMode\`、\`focusOnSelect\` 和 \`variableWidth\` 硬生生掰成了一个轮播图。破绽就在于你一直在和什么较劲：拖拽之后误触发点击、箭头在错误的时机出现、无法测量的项目、不想要的吸附对齐。

那一行其实就是一个菜单。[react-horizontal-scrolling-menu](/) 做到了 centerMode 一直在假装做的三件事——[让点击的项目居中](/examples/center-on-click)、依靠原生滚动并[支持拖拽](/examples/mouse-drag)、以及报告[哪些项目可见](/examples/simple)——体积约 ≈5.7 kB，且不需要任何滑块引擎。这两种最常见的形态可参见 [可滚动标签栏](/scrollable-tabs) 和 [分类栏](/category-rail) 页面。`,
      },
      {
        heading: '无论属于哪个阵营：迁移都比看起来要小',
        body: 'slick 的 API 表面很大，但对真实配置的审查会很快发现：大多数项目只用到了少数几个 prop。列出你实际用到的那些，判断每处用法属于哪个阵营，然后逐实例迁移——这两个阵营经常在同一个代码库中共存，也没有规定两者必须迁到同一个库。',
      },
    ],
  },

  swiperAlternatives: {
    meta: {
      title: 'React 中更轻量的 Swiper 替代方案',
      description:
        '想在 React 中寻找更轻量的 Swiper 替代方案？真正的轮播图用 Embla 或 keen-slider，菜单形态的行用 react-horizontal-scrolling-menu。附带体积对比。',
    },
    jsonLdHeadline:
      'React 的 Swiper 替代方案：更轻量的轮播图，以及菜单形态的退路',
    name: 'Swiper alternatives',
    blurb: '当 ≈40 kB 成为槽点时：更轻量的引擎，以及菜单形态的退路。',
    title: 'React 的 Swiper 替代方案：按你真正想摆脱的东西来选',
    lede: '没有人是因为 Swiper 不好才离开它的——它是目前功能最完整的滑块库。人们离开的原因是体积（未加模块前就有 ≈40 kB）、要继承它的 DOM 和 CSS，或者是因为自己的“滑块”其实从来就不是幻灯片。每一种诉求都有各自最合适的答案。',
    table: {
      headers: [
        '',
        'Swiper',
        'Embla',
        'keen-slider',
        'react-horizontal-scrolling-menu',
      ],
      rows: [
        ['包体积（核心，min+gzip）', '≈40 kB', '≈8 kB', '≈7 kB', '≈5.7 kB'],
        [
          '模型',
          '幻灯片，内置一切',
          '幻灯片，无头',
          '幻灯片，精简引擎',
          '原生滚动行中的项目',
        ],
        [
          '特效与模块',
          '现有方案中最丰富',
          '插件 / 自行实现',
          '部分内置',
          '没有——提供方案而非特效',
        ],
        [
          '接管手势层',
          '是（transform）',
          '是（transform）',
          '是（transform）',
          '否——由浏览器滚动',
        ],
        [
          '逐项可见性',
          '幻灯片索引事件',
          '幻灯片索引事件',
          '幻灯片索引事件',
          '内置（useIsVisible）',
        ],
        [
          '适合替换的情况',
          '—',
          '反正你会自己写所有样式',
          '需要精简滑块，且不想被锁定在 React',
          '“幻灯片”其实是可点击的项目',
        ],
      ],
      note: '体积均为核心部分的近似值——Swiper 的体积会随导入的模块增长，这也意味着精简后的 Swiper 构建其实比它的“名声”要小。',
    },
    prose: [
      {
        heading: '摆脱体积负担：Embla 或 keen-slider',
        body: `如果你的产品确实是一个真正的轮播图——带吸附对齐、一次展示一页幻灯片——这些轻量引擎几乎可以直接替换：

- **[Embla](/compare/embla-vs-swiper)**（≈8 kB）：无头架构，物理效果出色，拥有一等公民级别的 React hook，也是 shadcn/ui 轮播组件底层使用的引擎。所有标记和 CSS 都由你自己提供——这正是它的意义所在。
- **keen-slider**（≈7 kB）：一个精简的、与框架无关的引擎，适合同一个滑块既要用在 React 又要用在非 React 场景的情况。

两者都保留了基于 transform 的幻灯片模型，因此渐隐或 coverflow 之类的特效仍需自行实现——如果你依赖这些特效，坦白说精简后的 Swiper 构建比重新实现它们更划算。`,
      },
      {
        heading: '摆脱幻灯片模型：菜单形态的情况',
        body: `另一条退路适用于那些 Swiper 的幻灯片语义从一开始就不承重的场景：分类行、logo 墙、标签栏、筛选标签栏、商品栏。破绽就在于像 \`slidesPerView: 'auto'\` 加上 \`freeMode: true\` 这样的配置组合——这正是在让 Swiper 假扮原生滚动。

[react-horizontal-scrolling-menu](/)（≈5.7 kB）就是那种原生滚动，外加浏览器本身不提供的部分：[逐项可见性](/examples/simple)、[滚动到指定项](/examples/scroll-to-item)、边缘感知箭头，以及[不会破坏点击的拖拽](/examples/mouse-drag)。没有特效，没有吸附对齐，没有手势模拟——可查看 [Netflix 行](/netflix-row)、[标签栏](/scrollable-tabs) 和 [筛选标签栏](/filter-chips) 页面，或 [完整对比表](/compare)。`,
      },
      {
        heading: '双向的一句公道提醒',
        body: '为了省体积而放弃 Swiper，结果却要自己手工实现自动播放、分页、无障碍播报和各种特效，这正是一个 40 kB 的问题演变成一个人月级问题的过程。只有当你的用法真的只是 Swiper 的一个子集时，才该换成更轻量的引擎；只有当幻灯片语义从一开始就是伪装出来的时，才该换成滚动菜单。如果你确实用到了 Swiper 的深度功能，那就继续用 Swiper。',
      },
    ],
  },
};
