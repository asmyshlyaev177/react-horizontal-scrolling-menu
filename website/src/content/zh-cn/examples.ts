// Chinese (Simplified) (zh-CN) — translation of en/examples.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=zh-CN source=en/examples.ts source-blob=ffe3d71c21e3e6e545b59fae6bf1db09ad72e4ee status=translated
import type { ExamplesCopy } from '../types.ts';

/** Copy for the example pages, keyed by the slugs in `examples-manifest.ts`. */
export const examples: ExamplesCopy = {
  'add-item-and-scroll-to-it': {
    meta: {
      title: 'React 筛选标签：添加项目并滚动到它',
      description:
        'React 横向滚动器中的筛选标签：追加一个项目，等它渲染后用 apiRef 与 scrollToItem 滚动到它。附在线演示与完整源码。',
    },
    title: '添加项目并滚动到它——筛选标签模式',
    lede: '用户选择一个筛选器时，标签栏会增长，而新标签应当出现在屏幕上，而不是藏在右边缘之外。难点在于：你无法滚动到一个尚未渲染的元素。此示例把工作拆分为一个点击处理器和一个副作用。',
    demoHint:
      '点击添加筛选器——标签出现在末尾，这一行滚动以把它显示出来。点 x 可移除标签。',
    prose: [
      {
        heading: '工作原理',
        body: '菜单接收到一个 `apiRef`，它在组件树之外暴露完整 API。`addItem` 做两件事：把新 id 存入 `lastAdded` 这个 ref，然后把项目追加到 state。它有意不去滚动——此刻标签还只是 state，不是 DOM。',
      },
      {
        heading: '为什么滚动放在副作用里',
        body: '`getItemElementById` 会在 DOM 中查找项目，因此滚动只能在 React 提交新项目之后发生。一个以 `items` 为依赖的 `useEffect` 恰好在此时运行：它读取 `lastAdded`、清除它，然后调用 `apiRef.current.scrollToItem(el, ’smooth’, ’end’)`。清除 ref 很重要——任何其他原因（选中、箭头）引起的重新渲染也会触达该副作用，绝不能再次滚动。',
      },
      {
        heading: '注意',
        body: `
          - \`lastAdded\` 是 ref，不是 state：写入它本身不应触发渲染，其值只对紧随其后的那次副作用有意义。
          - \`’end’\` 让新标签对齐这一行的右边缘；如果你想让它位于中间，\`’center’\` 的工作方式相同。
          - 这里的箭头使用 \`useLeftArrowVisible()\` 与 \`useRightArrowVisible()\` 这两个 hook——是 \`useIsVisible(’first’/’last’)\` 这一对的更简写法。
          - 滚动条通过库的 \`scroll-container\` 类上的普通 CSS 来隐藏；滚动本身仍是原生的。
        `,
      },
    ],
  },

  'bottom-arrows': {
    meta: {
      title: '菜单下方的轮播箭头：React 中的自定义位置',
      description:
        '在 React 中将轮播箭头放在行下方：ScrollMenu 的 Footer 属性可在菜单下方渲染任意布局，包括箭头。附在线演示与完整源码。',
    },
    title: '把箭头放在菜单下方——或布局中的任何位置',
    lede: '箭头不是内置装饰——它们是你传入的组件，因此摆放位置是布局决策，而非库的设置。此示例完全不传入 `LeftArrow` 或 `RightArrow`，而是在行下方的 `Footer` 插槽中渲染两个按钮，就在普通内容旁边。',
    demoHint:
      '箭头位于行下方——它们读取同一个 VisibilityContext，因此在两端仍会禁用。',
    prose: [
      {
        heading: '工作原理',
        body: '`ScrollMenu` 接受一个 `Footer` 组件，并在滚动容器下方渲染它，与项目同处一个 `VisibilityContext.Provider` 之内。该 story 的 footer 是一个普通的 flex div，里面有一些文本和这两个箭头按钮。因为 context 能抵达它，每个按钮都会调用 `React.useContext(VisibilityContext)`，并得到与侧边插槽完全相同的 API——箭头本身没有任何改变。',
      },
      {
        heading: '箭头状态，一如既往',
        body: '`useLeftArrowVisible()` 与 `useRightArrowVisible()` 报告这一行是否已经位于该端；story 把结果映射到 `disabled` 并将按钮淡出。点击调用 `scrollPrev()` 与 `scrollNext()`。这些逻辑对按钮挂载在哪里一无所知，也不关心。',
      },
      {
        heading: '注意',
        body: `
          - \`Header\` 是行上方的镜像插槽，契约相同。
          - 侧边的 \`LeftArrow\`/\`RightArrow\` 属性只是预先摆放好的变体——同样的箭头组件放哪个位置都能用。
          - footer 并不仅限箭头：任何读取 \`VisibilityContext\` 的组件在那里都有完整 API。
          - 该 story 的 \`onWheel\` 处理器用鼠标滚轮分页，把触控板手势留给原生滚动。
        `,
      },
    ],
  },

  autoplay: {
    meta: {
      title: '带无障碍暂停行为的 React 轮播自动播放',
      description:
        'React 滚动菜单的自动播放：useInterval 通过 apiRef 调用 scrollNext，在悬停、聚焦、触摸及减少动态效果偏好时暂停。附在线演示与完整源码。',
    },
    title: '带无障碍暂停行为的自动播放',
    lede: '前进部分只有一行——一个通过 `apiRef` 调用 `scrollNext()` 的定时器，搭建在同一套无限循环内核之上。真正的工程在于何时*不*前进：悬停、触摸、键盘焦点、暂停按钮、隐藏的标签页、屏幕外的轨道以及减少动态效果偏好，都会让定时器停下来，各有各的原因。',
    demoHint:
      '悬停、触摸或按 Tab 进入轨道都会让它暂停；暂停按钮会停住它，直到你按下播放。',
    prose: [
      {
        heading: '工作原理',
        body: '`useInterval(cb, active ? interval : null)` 就是整个调度器。`active` 合并了四个标志——用户暂停、悬停暂停、聚焦暂停与 `prefers-reduced-motion`——传入 `null` 会彻底移除定时器，因此恢复时会开启一个全新且完整的间隔，而不是在指针刚离开后的半途中触发。',
      },
      {
        heading: '拒绝运行的节拍',
        body: '即便是活跃的定时器也会在滚动前检查：这个节拍读取 `api.menuVisible.current` 与 `document.visibilityState`，只要有一个说“不”就跳过。隐藏的标签页会冻结 IntersectionObserver，因此在那里滚动意味着盲目前进、传送记账开始漂移；滚出页面的轨道本就不该移动。被跳过的节拍没有任何代价——下一个节拍会重新检查。',
      },
      {
        heading: '暂停的各个层面',
        body: '悬停与触摸通过包装器处理器暂停，键盘焦点通过 `onFocusCapture`/`onBlurCapture`，而 `prefers-reduced-motion` 则让自动播放完全关闭。明确的暂停按钮才是 WCAG 2.2.2 对自动前进内容真正要求的——仅靠悬停暂停不算。',
      },
      {
        heading: '注意',
        body: `
          - 暂停开关位于悬停包装器之外——若放在内部，点击暂停也会触发悬停暂停，这个按钮就永远看不出在做任何事。
          - 循环来自与无限循环示例相同的 \`useInfiniteLoop\` 克隆加传送 hook；自动播放只增加了定时器与暂停标志。
          - 滚动动画是浏览器原生的平滑滚动——在默认的 \`noPolyfill\` 下，\`transitionDuration\` 不起作用。
        `,
      },
    ],
  },

  'mouse-drag': {
    meta: {
      title: 'React 拖拽滚动：不破坏点击的横向菜单',
      description:
        'React 横向列表的鼠标拖拽滚动：5px 阈值区分拖拽与点击，让项目保持可点击。附在线演示与完整源码。',
    },
    title: '用鼠标拖拽滚动——而不破坏点击',
    lede: '触摸用户原生就能滚动横向列表，但鼠标用户需要接线：按住、拖拽、松开。难点不在于移动这一行——而在于一个天真的实现会把每次松开拖拽都变成一次意外的项目点击。此示例用一个小型 `DragDealer` 类和三个鼠标属性把二者分开。',
    demoHint: '按住这一行任意位置拖拽。项目仍可点击——拖拽之后的点击会被抑制。',
    prose: [
      {
        heading: '工作原理',
        body: '`ScrollMenu` 暴露了柯里化的鼠标处理器——`onMouseDown`、`onMouseUp` 与 `onMouseMove` 各自接收 API 对象并返回一个普通的事件处理器。`DragDealer` 实例跟踪一个锚点坐标：每次移动时把增量直接应用到 `scrollContainer.current.scrollLeft`。剩下的交给原生滚动——没有变换、没有物理，滚动条也依然真实。',
      },
      {
        heading: '为什么点击仍能生效',
        body: '只有当指针移动超过 5px 时，拖拽才会开始，因此普通点击绝不会触发滚动。另一个方向是经典 bug：项目的 `onClick` 在 `mouseup` 之后触发，所以在卡片上方松开拖拽会选中它。`dragStop` 立即清除 applying 标志，但再保留 `dragging` 一帧——点击处理器检查它并退出。',
      },
      {
        heading: '值得借鉴的细节',
        body: `
          - \`dragStart\` 会取消上一次手势遗留的待处理重置——没有它，快速的第二次拖拽可能应用过期的增量。
          - 包装器上的 \`onMouseLeave\` 也会调用 \`dragStop\`，这样拖拽中途离开这一行也不会让拖拽状态卡住。
          - 触摸完全不需要这些——容器是真正的滚动容器，滑动本身就能滚动。
        `,
      },
    ],
  },

  'save-restore-position': {
    meta: {
      title: 'React 保持滚动位置：重新挂载或返回时恢复',
      description:
        '在每次 onUpdate 时把滚动偏移保存到 sessionStorage，并在 onInit 中恢复，让位置在重新挂载与重载后依然保留。附在线演示与完整源码。',
    },
    title: '保存并恢复滚动位置',
    lede: '横向轨道每次卸载都会忘记自己的偏移：路由离开再返回、折叠某个区块，它就跳回起点。此示例在用户滚动时保存偏移，并在挂载时写回，让菜单精确地回到他们离开时的位置。',
    demoHint:
      '把这一行滚到某处，卸载菜单，再重新挂载——轨道会以同样的偏移回来。',
    prose: [
      {
        heading: '工作原理',
        body: '整个功能由两个回调承担。`onUpdate` 在用户滚动、菜单可见性状态变化时触发；`savePos` 读取 `api.scrollContainer.current.scrollLeft` 并写入 `sessionStorage`。在下一次挂载时，`onInit` 把保存的值直接赋回 `scrollLeft`——一次普通的属性写入，因此恢复是即时的，而不是在用户面前重播动画。',
      },
      {
        heading: '在重新挂载、重载与返回导航下存续',
        body: '`sessionStorage` 比组件更长寿：客户端路由切换、条件渲染与整页重载都会回到保存的偏移，且该值按标签页隔离，两个标签页不会互相覆盖。对于历史导航，该 story 还设置了 `window.history.scrollRestoration = ’manual’`，避免在后退与前进时浏览器自己的滚动恢复与手动恢复互相冲突。',
      },
      {
        heading: '注意',
        body: `
          - 用原始 \`scrollLeft\` 恢复是像素级精确的，且不关心存在哪些项目——无需记住 id，也无需查找。
          - 该 story 的重新加载按钮会替换菜单的 \`key\` 以强制重新挂载；演示里的卸载/重新挂载开关只是把这个测试明确化。
          - 重置只是移除存储键——下一次挂载会从零开始，就像首次访问一样。
        `,
      },
    ],
  },

  'one-item': {
    meta: {
      title: 'React 每屏一个项目滑块：全宽滚动项目',
      description:
        'React 横向滚动菜单中的全宽项目：在项目包装器上设置 min-width 100% 即可得到每屏一个项目的滑块。附在线演示与完整源码。',
    },
    title: '每屏一个项目：来自同一个菜单的全宽滑块',
    lede: '没有任何需要开启的滑块模式。菜单会按你的 CSS 布局，因此一条规则——在库的项目包装器上设置 `min-width: 100%`——就能把同一个组件变成滑块：每张卡片占满一屏，而普通的分页箭头恰好一次前进一个项目。',
    demoHint:
      '用箭头翻页——每张幻灯片恰好一屏宽，并且每张幻灯片都报告自己的可见性。',
    prose: [
      {
        heading: '工作原理',
        body: '该 story 用一个带样式的容器包裹菜单，目标是 `.react-horizontal-scrolling-menu--item`——库在每个子元素周围渲染出的那个 div——并给它 `minWidth: ’100%’` 外加 flex 居中。现在每个包装器都横跨整个滚动容器，单张卡片刚好填满一屏。箭头是现成的：`scrollPrev()` 与 `scrollNext()` 按可见组翻页，而当可见组只有一个项目时，一页与一个项目是同一回事。',
      },
      {
        heading: '箭头与滚轮',
        body: '箭头状态来自 `useLeftArrowVisible()` 与 `useRightArrowVisible()`——一旦这一行位于某端，各自就返回 true，story 把它喂给 `disabled` 并把按钮淡出。`onWheel` 属性会连同事件一起收到 API 对象，因此垂直鼠标滚轮按 `deltaY` 的符号给这一行翻页。它先嗅探触控板：任何水平增量，或小于 15 的垂直增量，都被视为触控板手势而交给原生滚动。',
      },
      {
        heading: '注意',
        body: [
          '- 每个子元素上的 `itemId` 是唯一硬性要求——项目正是靠它被追踪和滚动到。',
          '- 卡片仍会调用 `useIsVisible(itemId, true)`；在每屏一个项目的情况下，每张屏幕外的幻灯片都会报告 `visible: false`。',
          '- 滚动条通过在滚动容器上的普通 CSS（`scrollbar-width: none` 加 WebKit 伪元素）隐藏——那是你的选择，不是库的。',
          '- 宽度完全在你的样式表里。把 100% 换成 50% 就是一个每屏两个的滑块；库不做任何测量。',
        ].join('\n'),
      },
    ],
  },

  performance: {
    meta: {
      title: 'React 横向列表性能：5000 个项目',
      description:
        '用原生滚动渲染 5000 个项目的 React 横向菜单：记忆化卡片、单个 IntersectionObserver、无虚拟化。附在线演示与完整源码。',
    },
    title: '一行 5000 个项目——无需虚拟化',
    lede: '通常的建议是，一有几百个项目就该上虚拟化。此示例把 5000 个真实 DOM 节点渲染进同一个 `ScrollMenu` 并保持流畅——原生 overflow 滚动负责移动，IntersectionObserver 负责观察，而 React 基本什么都不用做。',
    demoHint:
      '拖拽轨道或用箭头翻页——5000 张卡片每一个都是真实 DOM 节点；没有任何窗口化。',
    prose: [
      {
        heading: '哪些工作没有发生',
        body: '滚动从不进入 React。这条轨道是真正的 overflow 容器：滚轮与触摸原生地滚动它，而拖拽接线只是给 `scrollContainer.current.scrollLeft` 赋值——没有 state，也没有每帧重新渲染。可见性由单个 IntersectionObserver 实例观察全部 5000 个项目元素；回调批量到达，只有用 `useIsVisible` 订阅了的组件会在它们自己的项目翻转变动时更新。任何地方都没有逐项的滚动计算。',
      },
      {
        heading: '这个 story 调了什么',
        body: '`Card` 被 `React.memo` 包裹，带一个基于 `selected` 与 `title` 的比较器，这样选中一张卡片就不会协调其余 4999 张。可见性读数经过 `useDeferredValue`：在一次翻页跳转后，数百个项目同时翻转状态，延迟处理让这波更新避开引发它的那次交互的关键路径。`noPolyfill={true}` 让程序化滚动使用浏览器自身的 `scrollIntoView`，而不是平滑滚动补丁。拖拽用的是与鼠标拖拽示例相同的 `DragDealer` 模式。',
      },
      {
        heading: '本页坦言的一个取舍',
        body: '上面的演示轨道没有服务端渲染：5000 张卡片大约会序列化成 1 MB 的 HTML，所以轨道只以客户端方式挂载，隐藏在一个高度匹配的占位符后面，由此没有布局偏移。这才是这个规模真正的代价——浏览器能轻松处理 5000 个活跃节点，但把它们作为 SSR 载荷送出是另一回事。在几万节点的某个量级，内存与初次渲染成本也会追上来；从那里开始，窗口化就不再是可选项了。',
      },
      {
        heading: '注意',
        body: [
          '- 5000 张卡片的 DOM 只在挂载时构建一次——`React.memo` 让之后父组件的渲染对每张卡片都成为空操作。',
          '- 箭头大约一次翻一个视口，因此纯靠箭头横穿整条轨道本来就慢——拖拽轻拂或 `scrollToItem` 跳转更适合这个规模。',
          "- 箭头仍运行在 `useIsVisible('first')` 与 `useIsVisible('last')` 上——与十项的菜单相同的观察机制，只是项目数是它的 500 倍。",
        ].join('\n'),
      },
    ],
  },

  progress: {
    meta: {
      title: '面向轮播的 React 横向滚动进度指示器',
      description:
        'React 横向菜单的进度条：订阅 onUpdate、统计可见项目、推导当前页。附在线演示与完整 story 源码。',
    },
    title: '给横向菜单添加滚动进度指示器',
    lede: '隐藏了滚动条的轮播仍然欠用户一个“还剩多少？”的答案。菜单其实已经知道：它追踪每个项目的可见性，因此位置只是一个计数问题。该 story 用这些数据渲染编号的页码按钮以及左右剩余项目数；这个演示则把同样的数学浓缩成一条进度条。',
    demoHint:
      '滚动、拖拽这一行或用箭头——进度条一页页地填满，计数器显示你的位置。',
    prose: [
      {
        heading: '工作原理',
        body: '指示器作为 `Footer` 属性传入，因此 `ScrollMenu` 把它渲染在菜单内部、`VisibilityContext` 可用之处。它从 context 取出 `items`——可见性追踪背后的映射——并用 `items.subscribe(’onUpdate’, cb)` 订阅。该事件在每次 IntersectionObserver 回调时触发，所以 story 在读取 `items.getVisible()` 之前先对它做防抖（一个 timeout 加 `requestAnimationFrame`）。',
      },
      {
        heading: '从可见项目到页码',
        body: '可见项目的数量就是页大小。总页数是 `Math.ceil(items.size / visibleItemsLen)`；当前页来自最后一个可见条目的 `index`。story 把它们变成可点击的页码按钮——每个都调用 `scrollToItem(getItemByIndex(itemInd))`，只按位置寻址项目而不必知道它的 id——并从同样的数字推导出左侧与右侧的项目数。演示中的进度条只是把 `currentPage / totalPages` 作为宽度百分比。',
      },
      {
        heading: '注意',
        body: [
          '- 没有任何东西用像素测量——数学完全基于可见性数据运行，因此即便项目宽度不同也能正常工作。',
          '- 调整视口大小，页大小会随之变化：能容纳更多项目，`getVisible()` 返回更多条目，页数在下一次更新时重新计算。',
          '- 该副作用返回一个清理函数，调用 `items.unsubscribe` 并清掉待处理的定时器——跳过它，一个已卸载的 footer 会一直被调用。',
          '- 在第一次观察报告之前 `getVisible()` 是空的；story 在此之前返回 `null`，演示则画出一条空轨道。',
        ].join('\n'),
      },
    ],
  },

  'scroll-to-item': {
    meta: {
      title: 'React 在横向列表中滚动到元素：scrollToItem',
      description:
        '按 id 把 React 横向列表滚动到任意项目：onInit 交付 api，scrollToItem 把目标带入可视区。附在线演示与完整源码。',
    },
    title: '滚动到横向列表中的特定项目',
    lede: '深度链接到某一行：聊天打开在正在进行的会话上，画廊打开在你分享的那张照片上。滚动容器位于库内部，但你不需要指向它 DOM 的 ref——`onInit` 把 api 交给你，由 `scrollToItem` 负责定位。',
    demoHint:
      '轨道不会停在 Tokyo 挂载——onInit 会直接跳到 quito。拖到别处，再重新挂载，看它再次落在那里。',
    prose: [
      {
        heading: '工作原理',
        body: '`ScrollMenu` 接受一个 `onInit` 回调，并在菜单渲染完毕、测量过项目之后调用它，传入与内部 `VisibilityContext` 所提供的同一个 api 对象。处理器用 `getItemElementById(id)` 查找元素，再交给 `scrollToItem(item, ’auto’, ’start’)`。因为 `onInit` 只在测量之后触发，对于已渲染的项目，查找不可能落空——无需 `setTimeout`，也无需重试循环。',
      },
      {
        heading: '行为与对齐',
        body: '该 story 传入 `’auto’` 与 `’start’`：`’auto’` 不带动画地跳转，这正是初始位置所需要的——用户不会看到轨道停在第一个项目。`’start’` 把项目的左边缘与轨道对齐。对于点击驱动的滚动，同一调用则使用 `’smooth’` 与 `’center’`——就是下面的点击居中示例。',
      },
      {
        heading: '注意',
        body: [
          '- 当你只知道位置而不知道 id 时，`getItemElementByIndex` 是按位置使用的替代方案。',
          '- 你传入的 id 是项目的 `itemId`——与菜单用于可见性追踪的同一个键。',
          '- 演示通过用新的 `key` 重新挂载菜单来重放行为；每次全新挂载都会再次运行 `onInit`。',
        ].join('\n'),
      },
    ],
  },
  'center-on-click': {
    meta: {
      title: 'React 可滚动标签页：点击让活动标签居中',
      description:
        '不用 Material UI 的 React 可滚动标签页：点击标签用 scrollToItem(el, "smooth", "center") 让它居中。附在线演示与完整 story 源码。',
    },
    title: '让点击的项目居中——可滚动标签页模式',
    lede: '每个标签页条都需要、却没有哪个滚动容器会免费给你的行为：点击一个靠近边缘的标签，它滑到中间，露出两边的邻居。这里只需一次 API 调用——无需 Material UI、无需测量、无需滚动数学。',
    demoHint: '点击靠近任一边缘的标签——它被激活并在这一行里居中。',
    prose: [
      {
        heading: '工作原理',
        body: '`handleItemClick` 是柯里化的：它接收 `itemId`，返回一个期待 API 对象的函数。点击先把这个 id 存进 `selected` state，再调用 `api.getItemElementById(itemId)` 找到真实 DOM 元素，交给 `api.scrollToItem(item, ’smooth’, ’center’)`。一次点击，两种效果：标签被选中并居中。',
      },
      {
        heading: 'API 从何而来',
        body: '父组件从不持有 API ref。每个 `Card` 从 `VisibilityContext` 读取完整 API——`ScrollMenu` 的任何子组件都可获得——并把它传入点击处理器：`onClick(visibility)`。如果你反而需要从菜单外部滚动，那是滚动到项目示例中的 `apiRef` 模式。',
      },
      {
        heading: '注意',
        body: [
          '- `scrollToItem` 的第三个参数取与 `scrollIntoView` 的 `inline` 选项相同的值——`’start’`、`’center’` 或 `’end’`。',
          '- 卡片可聚焦（`role="button"`、`tabIndex=0`），并在 `onKeyDown` 中处理回车，因此键盘用户也能获得同样的选中加居中。',
          '- `onWheel` 处理器把鼠标滚轮增量映射到 `scrollNext`/`scrollPrev`，但对触控板让步——水平增量或极小的垂直增量被视为手势而保持原生。',
          '- 箭头用 `useIsVisible(’first’)` 与 `useIsVisible(’last’)` 这两个简写来自行禁用。',
        ].join('\n'),
      },
    ],
  },

  'swipe-desktop': {
    meta: {
      title: '桌面端用鼠标滑动：React 轮播的轻拂手势',
      description:
        'React 横向菜单的桌面端滑动：跟踪鼠标按下/抬起，超过 50px 的松开以平滑滑行轻拂到下一页。附演示与完整源码。',
    },
    title: '桌面端滑动：一个给菜单翻页的鼠标轻拂',
    lede: '拖拽滚动让这一行 1:1 地跟随光标。这是另一种鼠标手势：轻拂。按下、移动至少 50px、松开——菜单便通过 `scrollNext` 或 `scrollPrev` 朝那个方向滑行一页。这一行完全不会跟随指针；滑行是库的平滑程序化滚动，正是它让松开的动作带有惯性感。',
    demoHint:
      '在这一行任意位置按下，向左或向右移动至少 50px 再松开——菜单滑行一页。更短的移动不会产生效果。',
    prose: [
      {
        heading: '工作原理',
        body: '一个 `useSwipe` hook 返回 `ScrollMenu` 期待的三个柯里化鼠标属性——每个都接收 API 对象并返回普通的事件处理器。`onMouseDown` 把指针的 `clientX` 锚定到一个 ref 里，`onMouseMove` 不断覆盖结束坐标，`onMouseUp` 则比较二者：超过 `minSwipeDistance`（50px）的水平差值，向左轻拂调用 `apiObj.scrollNext()`，向右则调用 `apiObj.scrollPrev()`。',
      },
      {
        heading: '为什么点击无需特殊处理',
        body: '在拖拽滚动示例里，在卡片上松开拖拽会点击它，所以 `dragging` 标志必须比手势多存活一帧。轻拂把整个问题绕开了：低于 50px 阈值时 `onMouseUp` 什么都不做，点击就只是点击——超过阈值时指针反正也已经离开了它按下的那张卡片。没有标志，没有受抑制的处理器。',
      },
      {
        heading: '这个 story 为触摸与滚轮补充了什么',
        body: '该 story 也敲定了原生触摸平移：React 18+ 以被动方式注册 `touchmove` 监听器，因此 `preventDefault` 只能从非被动监听器里生效。一个副作用通过 `apiRef`（`ref.current.scrollContainer.current`）拿到滚动容器，并以 `{ passive: false }` 附加一个监听器。它的 `onWheel` 处理器也会给菜单翻页，并带一条启发式规则——非零 `deltaX` 或较小的 `deltaY` 被视为触控板而放行。',
      },
      {
        heading: '注意',
        body: [
          '- 坐标放在 ref 而不是 state 里——若在 state 中跟踪 `mousemove`，每个像素都会触发重新渲染。',
          '- 演示会在 `mousedown` 时重新锚定结束坐标，这样上一次手势遗留的位置绝不会计入新的滑动。',
          '- 按口味调 `minSwipeDistance`：越小越灵敏，越大越容忍手抖的点击。此配方的触摸版本用的是 20px。',
        ].join('\n'),
      },
    ],
  },

  'mobile-swipe-only': {
    meta: {
      title: '在移动端隐藏轮播箭头：仅触摸的 React 滚动',
      description:
        'React 横向菜单：桌面端有箭头，移动端仅触摸滚动——一个 pointer: coarse 的 matchMedia 检查将其隐藏。附在线演示与完整源码。',
    },
    title: '在移动端隐藏箭头——小屏只用触摸滚动',
    lede: '在触屏上，箭头按钮是累赘：滑动是原生的，拇指会挡住点击目标，且每个箭头都吃掉一行的宽度。演示为鼠标用户保留箭头，并在指针是手指时卸载它们；story 更进一步，用显式的滑动翻页手势取代原生平移。',
    demoHint:
      '在手机上打开它，或在 DevTools 里开启触摸模拟——箭头消失，滑动承担全部工作。',
    prose: [
      {
        heading: '演示如何隐藏箭头',
        body: '`LeftArrow` 与 `RightArrow` 都是可选属性——传入 `undefined` 时插槽根本不会渲染，因此无需用 CSS 隐藏，tab 顺序里也不会残留按钮。开关是副作用里的一个 `matchMedia(’(pointer: coarse)’)` 检查：服务端无法知道指针类型，所以首次绘制以桌面优先、带箭头，待确认指针为粗精度后 hydration 再移除它们。一个 `change` 监听器让它保持实时——DevTools 的设备模拟无需刷新即可翻转。',
      },
      {
        heading: 'story 在触摸下做了什么',
        body: 'story 的 `useSwipe` hook 把自由平移变成翻页。柯里化的 `onTouchStart`、`onTouchMove` 与 `onTouchEnd` 属性各自接收 API 对象；start 重置结束坐标并记录 `targetTouches[0].clientX`，move 持续跟踪，end 测量移动的距离。超过 `minSwipeDistance`（20px）后就调用 `apiObj.scrollPrev()` 或 `apiObj.scrollNext()`——每次滑动平稳地翻一页，无论手指速度如何。',
      },
      {
        heading: '抑制原生触摸滚动',
        body: '为了让翻页成为唯一的运动，浏览器自身的平移必须停下，而 React 18+ 以被动方式注册 `touchmove` 监听器，`preventDefault` 在那里会被忽略。story 的副作用通过 `apiRef`（`ref.current.scrollContainer.current`）拿到真实的滚动元素，并以 `{ passive: false }` 附加自己的监听器，在那里这个调用才有效。',
      },
      {
        heading: '注意',
        body: [
          '- 要有意选择 SSR 默认值：先渲染箭头有利于爬虫与桌面用户，而触摸设备在 hydration 之后随即移除它们。',
          '- `(pointer: coarse)` 针对的是输入方式而非屏幕尺寸——窄的桌面窗口保留箭头，平板则不会。',
          '- 如果你只想隐藏箭头并保留原生滑动（演示的行为），跳过 story 的 `touchmove` 副作用即可——自由平移与隐藏的箭头可以良好共存。',
          '- 触摸阈值是 20px，而桌面轻拂是 50px——鼠标变体见桌面端滑动示例。',
        ].join('\n'),
      },
    ],
  },

  'infinite-loop': {
    meta: {
      title: 'React 无限循环滚动菜单：无缝轮播',
      description:
        '不用轮播库的 React 无缝循环轮播：两端克隆，滚动停下时跳转一次 scrollLeft。附演示与完整源码。',
    },
    title: '构建在公开 API 之上的无限循环菜单',
    lede: '经典的克隆加传送轮播技巧，零库改动即可实现：这一行被克隆到两端，当滚动停在克隆区域内时，`scrollLeft` 恰好跳动一个循环的长度。跳动两边的画面完全相同，因此看起来什么都没动。箭头、滚轮、触摸与鼠标拖拽都能跨过接缝。',
    demoHint: '朝任意方向一直走——箭头、滚轮、触摸或拖拽——这一行永无尽头。',
    prose: [
      {
        heading: '工作原理',
        body: '`getSlides` 把项目复制到这一行的两端。因为 `itemId` 必须唯一，克隆会带上后缀——左边 `-lc`、右边 `-rc`——同时把真实 id 保存为 `realId`，用于标题、选中与点击。`useInfiniteLoop` 负责其余部分：`normalize()` 从第一个真实项目与其右侧克隆的 `offsetLeft` 测量循环长度，并在位置落入克隆区域时，`scrollLeft` 恰好移动这个距离。纯几何，且幂等——在不需要修正时调用它什么也不会做。',
      },
      {
        heading: '传送何时触发',
        body: '在滚动中途跳转会与浏览器明显打架，所以 `normalize` 在滚动停下时运行：容器上（通过 `containerRef` 属性获取）的一个原生 `scrollend` 监听器，以及一个 150ms 防抖的 `onScroll` 兜底，给不触发 `scrollend` 的 Safari 用。在任何人看到任何东西之前还有一次跳动：一个布局副作用在绘制前把初始 `scrollLeft` 设到第一个真实项目，因此页面绝不会一打开就停在左侧克隆上。',
      },
      {
        heading: '拖拽中途跨越接缝',
        body: '鼠标拖拽回调把每个增量加到 `scrollLeft` 上，并在手势内部、就在那时调用 `loop.normalize()`。没有它，拖进克隆区域就得等拖拽结束才传送——有了它，你可以无限地拖过接缝而毫无察觉。',
      },
      {
        heading: '注意',
        body: [
          '- 这里的箭头是自定义且始终启用的：现成的 `first`/`last` hook 跟踪最外面的项目，而这里它们是克隆——会在接缝处闪现禁用。',
          '- 卡片显示的是双联可见性——当项目本身或任一克隆可见时就算可见——因为每一次传送后，逐元素的标志会失效一帧，从而让 header 闪烁。',
          '- 每侧两页克隆：该区域必须覆盖整个视口（跳动两侧的画面完全相同）并留有余量，这样从横跨接缝的那一页点一下 Next，也不会卡在这一行的末尾。',
          '- 这里用到的所有东西——`containerRef`、`onScroll`、`itemId`、柯里化的鼠标属性——都是公开 API。',
        ].join('\n'),
      },
    ],
  },

  simple: {
    meta: {
      title: 'React 横向滚动菜单：快速入门示例',
      description:
        '最小化的 react-horizontal-scrolling-menu 配置：带 itemId 的项目、读取 VisibilityContext 的两个箭头，以及逐项可见性追踪。附完整源码。',
    },
    title: '快速入门：React 中的横向滚动菜单',
    lede: '最小的可用配置：一行卡片、两个箭头按钮，以及本库真正要做的——每张卡片都知道自己是否在屏幕上。一个组件、一个必需属性、一次样式表导入。',
    demoHint: '滚动这一行——箭头在两端禁用，每张卡片都追踪自己的可见性。',
    prose: [
      {
        heading: '工作原理',
        body: '`ScrollMenu` 在一个原生滚动容器里渲染你的子元素，并用 IntersectionObserver 观察每一个。唯一的契约是 `itemId`——每个子元素上的唯一属性，项目正是靠它被追踪、找到和滚动到。在任何子元素或箭头内部，`VisibilityContext` 都会把完整 API 交给你。',
      },
      {
        heading: '可见性 hook',
        body: '卡片调用 `useIsVisible(itemId)` 订阅自己的在屏状态——没有滚动监听、没有位置计算，可见性变化时只有受影响的卡片会重新渲染。箭头用 `first` 与 `last` 这两个简写在行的两端自行禁用。',
      },
      {
        heading: '注意',
        body: [
          '- `styles.css` 是单独的导入——JS 包绝不会注入 CSS。',
          '- 项目的宽度是你自己的 CSS；菜单不做任何测量，只附带 210 字节的布局样式。',
          '- `useIsVisible(itemId, true)` 的第二个参数是观察器报告之前使用的值——如果你服务端渲染这个菜单，它就是服务端渲染出的值。',
        ].join('\n'),
      },
    ],
  },

  vertical: {
    meta: {
      title: '带箭头的 React 垂直滚动菜单',
      description:
        '把 react-horizontal-scrolling-menu 变成垂直：flex-column 滚动容器、有界高度、通过 Header/Footer 把箭头放在上方和下方。附在线演示与源码。',
    },
    title: '垂直滚动菜单——同一个组件，靠 CSS 翻转',
    lede: '没有 `vertical` 属性，也不需要：菜单是原生滚动容器里的一行 flex，所以让它朝下只需几条 CSS 覆盖。可见性追踪、箭头 hook 与 `scrollPrev`/`scrollNext` 在新轴上都能继续工作。',
    demoHint:
      '在列上滚动滚轮或用箭头——Up 与 Down 是 ScrollMenu 的 Header 与 Footer。行离开视图时会变暗。',
    prose: [
      {
        heading: '两条覆盖和一个高度界限',
        body: '该 story 重设了库的两个类名样式。滚动容器获得 `flex-direction: column`、`overflow-y: auto` 与 `height: initial`，取代默认的 `max-content`；包装器获得 `height: 100%`，于是父容器任何固定的高度都成为滚动界限。这就是完整的垂直模式。story 用 emotion 应用这些覆盖；本页的演示则改经 `wrapperClassName` 与 `scrollContainerClassName` 属性传入 Tailwind 工具类——任何样式途径都可以，类名是稳定的。',
      },
      {
        heading: '箭头变成 Header 与 Footer',
        body: "`LeftArrow`/`RightArrow` 插槽渲染在轨道两侧——对一列来说位置不对。`ScrollMenu` 还接受渲染在上方与下方的 `Header` 和 `Footer` 组件，story 把它的 Up 与 Down 按钮挂在那里。它们是普通的 `VisibilityContext` 消费者：`useIsVisible('first', true)` 在顶部禁用 Up，`useIsVisible('last', false)` 在底部禁用 Down。点击会传入第三个参数——`scrollPrev(undefined, undefined, 'end')` 与 `scrollNext(undefined, undefined, 'start')`——即 `scrollIntoView` 的 `block` 位置。`'end'` 把上一个项目放到下边缘（整页向上）；`'start'` 把下一个项目放到顶部（整页向下）。在默认的 `'nearest'` 下，每次点击只会把下一行刚刚推进可视区。",
      },
      {
        heading: '把滚动留在列内',
        body: "`scrollIntoView` 会移动目标的所有可滚动祖先，而页面正是其中之一——因此列内一次 `block` 对齐的跳转会把整个文档一起带走。能阻止这种蔓延的选项是 `boundary`，作为第四个参数传入：`scrollNext(undefined, undefined, 'start', { boundary })` 用菜单自身的 `scrollContainer.current`，只滚动行、不滚动别的。它需要在 `ScrollMenu` 上设置 `noPolyfill={false}`，因为只有补丁才理解 `boundary`——上面的演示两者都传了。横向菜单很少遇到这种情况：它们默认的 `block: 'nearest'` 从一开始就不会要求页面做任何垂直移动。",
      },
      {
        heading: '可见性没有轴',
        body: '`useIsVisible` 由 IntersectionObserver 支撑，而相交在两个维度都有测量——行在跨越上下边缘时报告自己的状态，与横向项目在两侧所做的完全一样。演示把视图之外的行变暗来展示这一点，并用 hook 的 `defaultValue` 参数让前四行在服务端就被绘制为可见。',
      },
      {
        heading: '注意',
        body: [
          '- 唯一固定的尺寸是面板的行内高度；包装器的 `height: 100%` 把它一路传到滚动容器。',
          '- 滚轮与触摸原生地滚动这一列——`overflow-y: auto` 让它成为真正的滚动容器；箭头是便利，不是机制。',
          '- `scrollPrev`/`scrollNext` 的第二个参数是 `inline`（水平）位置——垂直菜单关心的是 `block`，所以 story 显式地传它。',
        ].join('\n'),
      },
    ],
  },

  rtl: {
    meta: {
      title: 'React 横向滚动 RTL：从右到左的菜单',
      description:
        'React 中从右到左的横向滚动菜单：RTL 属性翻转滚动方向与分页，箭头交换两侧。附在线演示与完整源码。',
    },
    title: '从右到左的横向菜单',
    lede: '对于阿拉伯语或希伯来语界面，这一行必须从右边缘开始、向左延伸。一个布尔属性就能翻转滚动容器；留给你的唯一真正工作，就是决定当“前进”指向左边时箭头该如何理解。',
    demoHint: '拨动开关——这一行从相反边缘重新开始，箭头互换角色。',
    prose: [
      {
        heading: '工作原理',
        body: '`RTL={true}` 让滚动容器进入从右到左模式：第一个项目位于右边缘，滚动向左前进。所有逻辑依然保持逻辑——`useIsVisible(’first’)` 仍指数据中的第一个项目，`scrollNext()` 仍朝最后一个移动——翻转的只是屏幕上的方向。',
      },
      {
        heading: '箭头交换插槽，不交换逻辑',
        body: '`LeftArrow` 属性总是渲染在屏幕左侧。在 RTL 下，那一侧正是“前进”所在之处，所以 story 给插槽喂入交换过的元素：`LeftArrow={RTL ? <RightArrow /> : <LeftArrow />}`。组件本身保持自己的逻辑——接到 `scrollPrev` 的那个仍通过 `useIsVisible(’first’)` 禁用——改变的只是它们的屏幕位置与标签。',
      },
      {
        heading: '注意',
        body: [
          '- 该 story 传入 `noPolyfill={true}`，因此程序化滚动使用浏览器原生的平滑滚动，而非内置的补丁。',
          '- `scrollPrev(’smooth’, ’end’)` 与 `scrollNext(’smooth’, ’start’)` 传入显式对齐——第二个参数是与 `scrollToItem` 相同的 `start/center/end` 集合。',
          '- 该 story 通过复选框实时切换 `RTL`——这个属性只是 state，菜单没有任何东西是在构建时配置的。',
        ].join('\n'),
      },
    ],
  },

  'add-items': {
    meta: {
      title: 'React 横向无限滚动：到末尾加载更多',
      description:
        'React 中的横向无限滚动：onUpdate 检查 api.items.last().visible，并用一个加载项目追加下一批。附在线演示与完整源码。',
    },
    title: '当末尾滚入可视区时加载更多项目',
    lede: '没有滚动监听器的横向无限滚动：菜单已经知道哪些项目可见，因此“用户到了末尾”只是一个问题——最后一个项目在屏上吗？`onUpdate` 在每次滚动后提出这个问题，答案为是时就追加下一批。',
    demoHint:
      '滚到右端——一张加载卡片出现，下一批随后到达。演示在 30 个项目处停止。',
    prose: [
      {
        heading: '工作原理',
        body: '`onUpdate` 在项目可见性变化时触发。处理器读取 `api.items.last()?.visible`——库按 `itemId` 追踪每一个项目，并为每个项目维护一个可见性标志，因此检测末尾只花一次查找，无需自己的 IntersectionObserver，也无需滚动位置计算。`pushNewItems` 随即模拟一次请求：一秒超时、再加五个项目，完成。',
      },
      {
        heading: '保护请求',
        body: '可见性更新是成批到达的，因此处理器必须能被反复调用而不出错。一个 `loading` 标志让它幂等：`onUpdate` 与 `pushNewItems` 都检查它，只有第一次触发会开启请求。同一个标志把 `Loader` 组件渲染成一个真正的菜单项目（带自己的 `itemId`），它在挂载时调用 `scrollIntoView()`，在批次加载期间把这一行的末尾保持在可视区里。',
      },
      {
        heading: '注意',
        body: [
          '- 右箭头是作为元素传入的，`RightArrow={<RightArrow disabled={...} />}`——组件形式与元素形式都能用，而元素形式让父组件可以传入诸如项目上限之类的属性。',
          '- 那个箭头只在达到上限且最后一个项目可见时才禁用——在上限之前，到达末尾意味着还有更多项目要来。',
          '- `newItemsLimit` 让这个演示停在 24 个项目；在实际代码中，等价的信号是你的 API 已经用完页数。',
        ].join('\n'),
      },
    ],
  },
  'custom-transition': {
    meta: {
      title: 'React 中的自定义滚动动画：缓动与时长',
      description:
        'React 中程序化滚动的自定义缓动与时长：transitionBehavior 把目标位置交给你，由你动画 scrollLeft。附在线演示与源码。',
    },
    title: '自定义滚动动画：你自己的缓动与时长',
    lede: '原生平滑滚动只给你一种速度、一条曲线，都由浏览器决定。当程序化滚动需要与你其余动效设计保持一致时，`noPolyfill={false}` 让你接管——菜单算出轨道要去哪里，由你的代码把 `scrollLeft` 驱动到那里。',
    demoHint:
      '点击箭头并切换时长——在 2500 ms 下，ease-in-out-cubic 曲线清晰可见。动画中途点击会取消前一次动画。',
    prose: [
      {
        heading: '工作原理',
        body: '默认情况下，菜单用原生 `scrollIntoView` 滚动，并忽略这两个过渡属性。设置 `noPolyfill={false}` 后，程序化滚动改走 scroll-into-view-if-needed 补丁，后者算出目标并把它们作为指令交给你的 `transitionBehavior`：每个需要移动的可滚动祖先对应一个 `{ el, top, left }` 动作——这里始终只有滚动容器，因为菜单把它作为边界传入。从那以后，`animateScroll` 在每个 `requestAnimationFrame` 里让 `el.scrollLeft` 一步步逼近目标，在所选时长内用 `easeInOutCubic` 映射进度。',
      },
      {
        heading: '打断进行中的动画',
        body: '第二次点击箭头可能落在动画中途。这个 story 用 `WeakMap` 按元素保存待处理的帧，因此新调用会取消旧的 `requestAnimationFrame` 循环，而不是让两个循环争抢 `scrollLeft`。又因为每个动画都从元素当前的 `scrollLeft` 读取起点，新动画恰好会从被中断的那个停下的地方接上。',
      },
      {
        heading: '注意',
        body: [
          '- 这里没有任何东西与缓动函数绑定——一旦你有了目标位置，任何曲线或动画库都能工作。',
          '- 类型把 `transitionBehavior` 描述为 `ScrollBehavior` 字符串，但该值会直接作为 `behavior` 回调传给 scroll-into-view-if-needed——源码里因此有一处类型转换。',
          '- 该 story 把同一个时长 state 同时接到 `transitionDuration` 与动画本身，这样两者就不会脱节。',
        ].join('\n'),
      },
    ],
  },

  'prevent-body-scroll': {
    meta: {
      title: '阻止滚轮滚动页面：React 横向菜单',
      description:
        '用鼠标滚轮滚动 React 横向菜单而页面不动：一个在悬停时启用的原生非被动滚轮监听器。附在线演示与完整源码。',
    },
    title: '用滚轮滚动菜单——而不滚动页面',
    lede: '鼠标滚轮下的横向菜单很别扭：滚轮滚动的是页面，这一行却纹丝不动。修复分两半——一个把滚轮刻度变成翻页的 `onWheel` 处理器，以及一个防止底下页面移动的原生非被动监听器。后一半单靠 React 做不到。',
    demoHint:
      '把指针停在这一行上转滚轮：这一行翻页，页面保持不动。移出这一行，滚轮就又滚动页面了。',
    prose: [
      {
        heading: '把滚轮变成翻页',
        body: '`ScrollMenu` 的 `onWheel` 属性会连同 API 对象与滚轮事件一起被调用。真正的鼠标滚轮以粗细步长报告仅 Y 轴的增量，所以处理器在 `deltaY` 为负时调用 `scrollNext`，否则调用 `scrollPrev`——每个刻度给这一行翻页。在此之前，它先检查事件是否像触控板手势：只要有任何 `deltaX`，或 `deltaY` 小于 15。',
      },
      {
        heading: '为什么锁定页面需要原生监听器',
        body: "在 React 处理器里调用 `preventDefault` 是阻止页面的显而易见的办法——但它在静默地什么都不做，因为 React 以被动方式注册滚轮监听器，而被动监听器被禁止取消事件。所以 `usePreventBodyScroll` 绕过 React：在 `mouseenter` 时运行 `document.addEventListener('wheel', preventDefault, { passive: false })`，在 `mouseleave` 时再次移除监听器。当指针在菜单上方时，每个滚轮事件冒泡到 `document`，其默认动作——滚动页面——在那里被取消。一个 `useEffect` 清理在卸载时调用 `enableScroll`，因此页面绝不会被遗留在锁定状态。",
      },
      {
        heading: '触控板逃生口',
        body: '双指平移也会以滚轮事件抵达，而容器会原生地从它们滚动——document 监听器会杀掉这一点。对于符合触控板启发式规则的事件，处理器调用 `stopPropagation` 并返回：事件永远到不了 document 监听器，原生平移得以幸存。没有可靠办法检测触控板；这条增量启发式规则是 story 的诚实猜测，且在实践中站得住脚。',
      },
      {
        heading: '注意',
        body: [
          '- 浏览器默认把 document 级别的滚轮监听器设为被动，正是为了页面不会卡顿滚动——`passive: false` 是让 `preventDefault` 重新合法的显式退出方式。',
          '- 滚轮向上向前翻页、滚轮向下向后翻页——这是 story 的映射；互换 `scrollNext` / `scrollPrev` 分支即可反转。',
          '- 触摸设备从不运行这些：没有 `mouseenter`，而且从一开始滑动这一行就是原生滚动。',
          '- 锁定只存在于 `mouseenter` 与 `mouseleave` 之间，因此指针一离开轨道，页面其余部分就照常滚动。',
        ].join('\n'),
      },
    ],
  },

  'one-item-scroll': {
    meta: {
      title: 'React 一次滚动一个项目：精确的轮播箭头',
      description:
        '每次点击箭头让 React 轮播前进一个项目：scrollToItem 配 getNextElement 一张卡片一张卡片地前进，而非整页。附在线演示与完整源码。',
    },
    title: '一次滚动一个项目，而非整页',
    lede: '默认情况下箭头是翻页的：所有可见项滑出、下一组滑入。此示例把它们改接成一卡一步——每点一下一张卡——而整个改动就是箭头 `onClick` 所调用的内容。同样的菜单、同样的项目，不同的滚动目标。',
    demoHint: '点击箭头——这一行前进一张卡，而非一页。箭头在两端禁用。',
    prose: [
      {
        heading: '工作原理',
        body: '`getNextElement()` 返回可见组之后的第一个项目；`getPrevElement()` 返回它前面的那个。右箭头调用 `scrollToItem(visibility.getNextElement(), ’smooth’, ’end’)`——把那个项目对齐到容器的末尾边缘，滚动的距离恰好足以把它带进可视区，也就让这一行正好移动一张卡。左箭头与之对称：上一个元素，对齐到 `’start’`。',
      },
      {
        heading: '对齐就是全部诀窍',
        body: '现成的 `scrollNext()` 内部解析出同一个下一个元素，但把它对齐到起始边缘——视图会滚过整个可见组，把那个项目放到最前。一个 `ScrollLogicalPosition` 参数就区别了翻页与逐步。`scrollToItem` 的第三个参数是标准的 scroll-into-view `inline` 对齐；第二个是行为，这里是 `’smooth’`。',
      },
      {
        heading: '注意',
        body: [
          '- 箭头状态用 `’first’` 与 `’last’` 两个简写：`useIsVisible(’first’, true)` 在起点禁用左箭头，`useIsVisible(’last’, false)` 在末尾禁用右箭头。',
          '- 在两端 `getNextElement()` 返回 undefined，`scrollToItem` 会静默地不做事，因此启用的箭头仍不会滚动过头。',
          '- story 的 `onWheel` 处理器仍是每个滚轮刻度翻一整屏——逐步是箭头的行为，不是全局模式。',
          '- 项目点击不受影响：卡片通过自己的 `onClick` 切换选中，与箭头如何滚动无关。',
        ].join('\n'),
      },
    ],
  },

  'items-animation': {
    meta: {
      title: '在 React 中动画列表项目的添加与移除',
      description:
        '在 React 横向列表中添加、移除并打乱项目，通过 ScrollMenu 的 containerRef 属性用 @formkit/auto-animate 呈现动画。附在线演示与完整源码。',
    },
    title: '用 auto-animate 让项目进入、离开并滑入位置',
    lede: '向横向列表追加会让新项目突然冒出；移除一个又会让它的邻居猛地并拢。`@formkit/auto-animate` 用一个父级 ref 就把两者都解决了——而 `ScrollMenu` 的 `containerRef` 属性恰好把它需要的那个元素交给它。',
    demoHint:
      '添加、移除和打乱——每一次进入、离开与重排都有动画。菜单本身没有任何动画代码。',
    prose: [
      {
        heading: '工作原理',
        body: '`useAutoAnimate()` 返回一个 ref，它必须落在所动画元素的直接父级上。在 `ScrollMenu` 内部，那个父级就是滚动容器：你传入的每个子元素都被包进一个 item div，而这些 item div 正是容器的直接子元素。story 把这个 ref 直接穿过——`<ScrollMenu containerRef={parent}>`——auto-animate 接手余下工作：新增的项目缓入，移除的项目动画退出，重排的项目滑到自己的新位置。菜单自身完全不知道自己在被动画。',
      },
      {
        heading: '添加、移除、打乱',
        body: '三个控制都是对 items 数组的普通 `setState` 调用——`addItems` 追加一个，`removeItems` 丢掉最后一个，`shuffle` 是对副本做一遍 Fisher–Yates。动画完全来自这些更新引发的 DOM 变更。有一条规则值得牢记：`itemId` 身兼二职，既是 React key，也是菜单追踪映射中项目的句柄，因此 id 必须保持唯一——story 甚至会回头填补移除留下的编号空档，而不是冒险重复造一个。',
      },
      {
        heading: '滚动与追踪继续工作',
        body: '菜单会在子元素变化时重新观察它们，因此新增项目的 `useIsVisible` 立刻就能正确报告，箭头也继续翻页。不过新项目通常会落在屏幕外——如果入场真的要被看见，就按 add-item-and-scroll-to-it 示例那样把它与 `scrollToItem` 搭配。',
      },
      {
        heading: '注意',
        body: [
          '- `containerRef` 接受 ref 对象或回调 ref——`useAutoAnimate` 的回调可直接接入。',
          '- auto-animate 零配置且与框架无关；React 绑定就是那个 `useAutoAnimate` hook。',
          '- 上面的演示把 id 管理简化为一个单调计数器；代码面板展示的是 story 补空档的版本。',
        ].join('\n'),
      },
    ],
  },
};
