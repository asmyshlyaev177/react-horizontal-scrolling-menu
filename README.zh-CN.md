<!-- i18n:start -->

[English](./README.md) · 简体中文 · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=zh-CN source=README.md source-blob=8958730422d74e17cb64c668f1e52d7eeee19c63 status=translated -->
<!-- i18n:end -->

# React horizontal scrolling menu

[![npm](https://img.shields.io/npm/v/react-horizontal-scrolling-menu.svg)](https://www.npmjs.com/package/react-horizontal-scrolling-menu)
![NPM 下载量](https://img.shields.io/npm/dm/react-horizontal-scrolling-menu)
![npm 包体积（压缩 + gzip）](https://img.shields.io/bundlephobia/minzip/react-horizontal-scrolling-menu.svg)
[![CI](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/main.yml/badge.svg)](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/main.yml)
[![可接受雇佣](https://img.shields.io/badge/available%20for%20hire-senior%20react%20engineer-2ea44f?style=flat-square)](https://asmyshlyaev177.dev)

一个构建于浏览器原生滚动之上、并对每个项目进行可见性追踪的 React
横向滚动菜单组件。适用于分类栏、标签页条、筛选标签、画廊——任何你的应用
需要感知的一行内容。项目是你自己的组件，配以你自己的 CSS；菜单会响应其
父容器的宽度；导航可通过滚动条、触摸、鼠标滚轮、拖拽或你提供的箭头组件
进行。压缩 + gzip 后 5.7 kB。

![示例](/sample.gif)

### [落地页](https://react-horizontal-scrolling-menu.dev) · [在线示例（Storybook，可在浏览器中编辑）](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu) · [API](#属性与回调) · [AI 代理技能](#与-ai-编程代理配合使用)

### 谁在使用

超过 20,000 个仓库依赖此库。以下五个可以直接查看——每个链接都指向使用它的组件中的 `import` 那一行，
并固定到某个提交，而不是指向 `package.json`：

- [Our World in Data](https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/gdocs/components/KeyInsights.tsx#L3)——他们文章渲染器中的核心洞见滑块；还有[主题分面](https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/latest/LatestTopicFacets.tsx#L10)，其中包裹了一个 react-aria `ToggleButton`。`^8.2.0`
- [Precious Plastic / ONE ARMY](https://github.com/ONEARMY/community-platform/blob/90c1be6be0ad450a92d9483577433fdc8b09f477/packages/components/src/VerticalList/VerticalList.client.tsx#L6-L7)——共享组件包中的 `VerticalList`，直接依照本库文档构建。`^8.2.0`
- [erxes](https://github.com/erxes/erxes/blob/efef0252d390f4072e21c0a188d289f01866b188/apps/posclient-front/components/ui/horizontalScrollMenu.tsx#L6)——POS 客户端中的分类菜单。`^4.0.4`
- [Reapit](https://github.com/reapit/foundations/blob/9edda57691befd398547bcdf4013916b85face52/packages/app-builder/src/components/ui/viewport/tab-bar.tsx#L4)——应用构建器中的视口标签栏。`^3.2.5`
- [AWS Performance Dashboard](https://github.com/aws-solutions/performance-dashboard-on-aws/blob/cffa9c822ac8288a44d13a9394a2255e574c7592/frontend/src/components/Tabs.tsx#L8)——仪表板的 `Tabs` 组件；其 [`Arrows`](https://github.com/aws-solutions/performance-dashboard-on-aws/blob/cffa9c822ac8288a44d13a9394a2255e574c7592/frontend/src/components/Arrows.tsx#L9) 直接使用 `VisibilityContext`。2024 年已归档，固定在 `^2.1.1`。

还登上了 [React Status #257](https://react.statuscode.com/issues/257)。

## 快速开始

```bash
npm install react-horizontal-scrolling-menu
```

```tsx
import React from 'react';
import {
  ScrollMenu,
  VisibilityContext,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const items = Array.from({ length: 10 }, (_, i) => `item-${i + 1}`);

export function App() {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map((id) => (
        <Card itemId={id} key={id} title={id} />
      ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isFirstVisible = visibility.useIsVisible('first', true);
  return (
    <button disabled={isFirstVisible} onClick={() => visibility.scrollPrev()}>
      ←
    </button>
  );
}

function RightArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isLastVisible = visibility.useIsVisible('last', false);
  return (
    <button disabled={isLastVisible} onClick={() => visibility.scrollNext()}>
      →
    </button>
  );
}

function Card({ itemId, title }: { itemId: string; title: string }) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isVisible = visibility.useIsVisible(itemId);
  return (
    <div style={{ width: '160px' }} data-visible={isVisible}>
      {title}
    </div>
  );
}
```

示例依赖的三点：

- 每个项目都需要一个唯一的 `itemId` 属性——可见性追踪正是依赖它。React 的
  `key` 作为后备方案。
- `styles.css` 是一个单独的 import；JS 包绝不会注入 CSS。
- 项目的宽度来自你自己的 CSS——菜单本身不做任何测量。

使用纯 JavaScript？去掉类型导入，照常使用 `React.useContext(VisibilityContext)`
即可。

## 与 AI 编程代理配合使用

基于旧版本训练的模型仍然会去使用 `visibleElements`、`Separator` 项目以及
`Arrows` 属性——这些都已被移除——并凭空捏造一个从未存在过的 `autoplay`
属性。本包随附八个 `SKILL.md` 文件来阻止这种情况：按需通过
[TanStack Intent](https://tanstack.com/intent/latest/docs/overview) 加载的、
按任务划分的指导，它与库一起发布版本，而不随任何网页更新。

```bash
npm install react-horizontal-scrolling-menu
npx @tanstack/intent@latest install   # 每个项目一次
```

`install` 会把技能发现机制加入你的代理的配置（`CLAUDE.md`、`.cursorrules`
等）；之后代理会按需从 `node_modules/react-horizontal-scrolling-menu/skills/`
加载技能。也可以直接用 `npx @tanstack/intent@latest list` 与
`npx @tanstack/intent@latest load react-horizontal-scrolling-menu#menu-setup`
来列出或加载它们。

| 技能                   | 何时加载                                       |
| ---------------------- | ---------------------------------------------- |
| `menu-setup`           | 第一个可用的菜单、箭头、必需的 CSS 导入        |
| `menu-visibility`      | 屏幕上有什么，以及两端的箭头状态               |
| `menu-scrolling`       | `scrollToItem`、`apiRef`、一次一页的分页       |
| `menu-interactions`    | 拖拽、滚轮与触摸——以及它们的事件处理工厂       |
| `menu-recipes`         | 自动播放、无限循环、加载更多：是配方，不是属性 |
| `menu-transitions-rtl` | 动画时长、自定义缓动、从右到左                 |
| `menu-testing-ssr`     | Next.js 与 RSC、Jest 模拟、Playwright          |
| `menu-migration`       | 升级 v8 之前的代码，以及模型仍在凭空捏造的 API |

源码位于 [`skills/`](skills/)。无法加载 Intent 技能的代理应改为阅读
[llms.txt](https://react-horizontal-scrolling-menu.dev/llms.txt)——同样的事实，
浓缩进一个文件。

## 它做什么——又不做什么

构建于浏览器原生滚动之上：惯性、滚动条、触摸、滚轮与无障碍都来自浏览器，
而非一套重新实现的物理模拟。在此之上还有：通过 IntersectionObserver 实现的
逐项可见性、`scrollToItem` / `scrollNext` / `scrollPrev`、用于外部控制的
`apiRef`、Header 与 Footer 插槽、RTL、动态增删检测，以及贯穿始终的 TypeScript
类型。SSR 安全——[落地页](https://react-horizontal-scrolling-menu.dev)
会服务端渲染每一个示例。

没有轮播引擎：没有吸附或弹簧物理——如果你想要全屏图片滑块，请使用 Embla 或
Swiper。自动播放与无限循环也不是属性；它们是在公开 API 上各约六十行的配方，
可在 Storybook 中实时编辑
（[无限循环](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-infiniteloop--infinite-loop)、
[自动播放](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-autoplay--autoplay)）。
如果你需要一行知道什么可见的内容，就是它了。

## 示例

每个示例都可以在
[Storybook](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu)
中实时编辑——每个 story 都附带一个加载了库的真实类型定义的 Monaco 编辑器。
涵盖：基本用法、一次滚动一个项目、鼠标拖拽、挂载时滚动到项目、点击居中、
动态添加项目、保存/恢复位置、项目动画、进度圆点、阻止页面滚动、自定义过渡、
无限循环、自动播放、垂直布局、底部的箭头、移动端滑动、RTL，以及 5000 项
压力测试。

<!-- DOCS_START -->

### 辅助工具与 API

ScrollMenu 主组件的子组件（箭头、header、footer、项目）都可以使用
**VisibilityContext** 访问状态与回调。函数式回调也会收到上下文，例如
`onWheel`、`onScroll`。

## 属性与回调

| 属性                     | 签名                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------ |
| LeftArrow                | 左箭头的 React 组件                                                                  |
| RightArrow               | 右箭头的 React 组件                                                                  |
| Header                   | Header 的 React 组件                                                                 |
| Footer                   | Footer 的 React 组件                                                                 |
| onWheel                  | (VisibilityContext, event) => void                                                   |
| onScroll                 | (VisibilityContext, event) => void，在滚动*稳定之前*触发                             |
| onInit                   | (VisibilityContext) => void                                                          |
| onUpdate                 | (VisibilityContext) => void                                                          |
| apiRef                   | React.RefObject \| React.RefCallback                                                 |
| options                  | IntersectionObserver 的选项——用于判定元素可见的 `rootMargin`、`threshold` 与 `ratio` |
| containerRef             | 滚动容器的 React.RefObject \| React.RefCallback                                      |
| onMouseDown              | (VisibilityContext) => (React.MouseEventHandler) => void                             |
| onMouseLeave             | (VisibilityContext) => (React.MouseEventHandler) => void                             |
| onMouseUp                | (VisibilityContext) => (React.MouseEventHandler) => void                             |
| onMouseMove              | (VisibilityContext) => (React.MouseEventHandler) => void                             |
| onTouchMove              | (VisibilityContext) => (React.TouchEventHandler) => void                             |
| onTouchStart             | (VisibilityContext) => (React.TouchEventHandler) => void                             |
| onTouchEnd               | (VisibilityContext) => (React.TouchEventHandler) => void                             |
| itemClassName            | Item 的 ClassName                                                                    |
| scrollContainerClassName | scrollContainer 的 ClassName                                                         |
| wrapperClassName         | 最外层 div 的 ClassName                                                              |
| transitionDuration       | 过渡时长（毫秒），默认 `500`，需要 `noPolyfill={false}`                              |
| transitionBehavior       | 'smooth' \| 'auto' \| 自定义函数，需要 `noPolyfill={false}`                          |
| RTL                      | 启用从右到左的方向                                                                   |
| noPolyfill               | 默认 `true`（原生 scrollIntoView）；设为 `false` 以启用过渡属性                      |

请注意两种回调形态：`onWheel` 与 `onScroll` 是简单的 `(context, event) =>
void`，而鼠标与触摸属性则是事件处理工厂——`(context) => (event) => void`。
请参阅
[MouseDrag story](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-mousedrag--mouse-drag)
了解工厂模式的实际用法。

### VisibilityContext

Hook（只能按照 Hook 的规则，在 ScrollMenu 之下渲染的组件内部调用它们）：

| Hook                 | 签名                                                                     |
| -------------------- | ------------------------------------------------------------------------ |
| useIsVisible         | (itemId: string \| 'first' \| 'last', defaultValue?: boolean) => boolean |
| useLeftArrowVisible  | () => boolean                                                            |
| useRightArrowVisible | () => boolean                                                            |

值与函数：

| 属性                  | 签名                                                   |
| --------------------- | ------------------------------------------------------ |
| getItemById           | itemId => IOItem \| undefined                          |
| getItemElementById    | itemId => DOM Element \| null                          |
| getItemByIndex        | index => IOItem \| undefined                           |
| getItemElementByIndex | index => DOM Element \| null                           |
| getNextElement        | () => IOItem \| undefined                              |
| getPrevElement        | () => IOItem \| undefined                              |
| isFirstItemVisible    | boolean                                                |
| isItemVisible         | itemId => boolean                                      |
| isLastItem            | boolean                                                |
| isLastItemVisible     | boolean                                                |
| menuVisible           | { current: boolean }                                   |
| scrollNext            | (behavior, inline, block, ScrollOptions) => void       |
| scrollPrev            | (behavior, inline, block, ScrollOptions) => void       |
| scrollToItem          | (item, behavior, inline, block, ScrollOptions) => void |
| items                 | ItemsMap 类实例                                        |
| scrollContainer       | Ref<OuterContainer>                                    |

### items 类实例

ItemsMap 存储所有项目的相关信息，并提供获取当前可见项目以及前一个或下一个
项目的方法。你也可以订阅更新。

| 属性/方法   | 描述                                                                                                                               |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| subscribe   | 订阅 `itemId` 或 `first`、`last`、`onInit`、`onUpdate` 的事件，例如 `items.subscribe('item5', (item) => setVisible(item.visible))` |
| unsubscribe | 在 useEffect 中用于清理，传入同一个回调实例                                                                                        |
| getVisible  | 只返回可见项目                                                                                                                     |
| toItems     | 返回所有项目的 id                                                                                                                  |
| toArr       | 返回所有项目                                                                                                                       |
| first       | 返回第一个项目                                                                                                                     |
| last        | 返回最后一个项目                                                                                                                   |
| prev        | (itemId \| Item) => 上一项 \| undefined                                                                                            |
| next        | (itemId \| Item) => 下一项 \| undefined                                                                                            |

### 过渡与动画

`transitionDuration` 与 `transitionBehavior`（`'smooth'`、`'auto'` 或自定义
函数）控制 `scrollToItem` 及滚动辅助函数的动画方式。两者都需要
`noPolyfill={false}`——默认的原生滚动会忽略它们。它们不能与 `RTL` 属性
组合使用。

请参阅
[CustomTransition story](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-customtransition--custom-transition)
了解自定义缓动函数。

#### ScrollOptions

`scrollToItem`、`scrollPrev` 和 `scrollNext` 的最后一个参数会覆盖该次调用的
过渡属性：

```tsx
scrollToItem(getItemElementById('item-5'), 'smooth', 'center', 'nearest', {
  duration: 800, // 毫秒
});
```

### 其他辅助工具

#### slidingWindow

获取上一组或下一组可见项目：

```tsx
slidingWindow(allItems, visibleItems).prev();
// 或 .next()
```

#### getItemsPos

获取一组项目的第一个、中间和最后一个——例如滚动到上一页中间：

```tsx
const prevGroup = slidingWindow(allItems, visibleItems).prev();
const { center } = getItemsPos(prevGroup);
scrollToItem(getItemById(center), 'smooth', 'center');
```

### apiRef

向 ScrollMenu 传入一个 ref，完整的 VisibilityContext 值便会被赋给它——这对于
从菜单外部触发 `scrollToItem` 等函数很有用。ref 上的数据值可能过期，因此
建议调用函数：

```tsx
apiRef.current.scrollToItem(apiRef.current.getItemElementById('item-3'));
```

你也可以直接通过 ``document.querySelector(`[data-key='${itemId}']`)`` 访问
某个项目的 DOM 元素。请参阅
[ScrollToItem story](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-scrolltoitem--scroll-to-item)
与
[AddItemAndScrollToIt story](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-additemandscrolltoit--add-item-and-scroll-to-it)。

<!-- DOCS_END -->

## SSR

该库是 SSR 安全的：首次渲染会输出普通标记，IntersectionObserver 只在客户端
挂载。`useIsVisible` 的 `defaultValue` 参数控制服务端渲染的状态——典型的箭头
模式（`('first', true)` / `('last', false)`）会渲染一个禁用状态的左箭头和
启用状态的右箭头，与滚动到起点的行保持一致。

### Next.js 注意事项

该包以 ESM 为先。在较旧的 Next.js 配置上，你可能会遇到
[“Cannot use import statement outside a module”](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/240)——将该包加入
[`transpilePackages`](https://nextjs.org/docs/app/api-reference/config/next-config-js/transpilePackages)
即可解决。

## 浏览器支持

需要 **IntersectionObserver** 与 **requestAnimationFrame**——所有现代浏览器均
支持。不支持 IE。

## 开发

```bash
git clone https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
cd react-horizontal-scrolling-menu
pnpm run setup
pnpm run demo        # 示例应用（Next.js，端口 3003），库以 watch 模式运行
pnpm run demo-tanstack  # 示例应用（TanStack Start SSR，端口 3004）
pnpm run storybook   # 示例
pnpm test            # 单元 + e2e + storybook 测试
```

仓库里有两个集成示例应用——`example-nextjs` 与 `example-tanstack`（TanStack
Start，在 workerd 中服务端渲染）——两者渲染同一个演示（鼠标拖拽、正文滚动
锁定、带控制面板的自定义动画），因此 `e2e/` 中的同一套 e2e 测试会在两种框架
下对库进行测试，其中包含一条断言：菜单已经存在于服务端渲染的 HTML 中。

欢迎贡献与修正——fork、commit、发起 PR，也别忘了测试。请参阅
[CONTRIBUTING](./CONTRIBUTING.md) 与 [CHANGELOG](./CHANGELOG.md)。

旧版 [v1 API](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/tree/v1) 的文档。

## 关于

由 **Aleksandr Smyshliaev** 自 2018 年起构建并维护——我的第一个 npm 包，并且
从 React 16.8 到 19 始终保持相同的公开 API。我是一名前端工程师（React /
Next.js / TypeScript），**目前接受外包与全职工作**。

- **联系我** —— [asmyshlyaev177.dev](https://asmyshlyaev177.dev) ·
  [asmyshlyaev177@gmail.com](mailto:asmyshlyaev177@gmail.com) ·
  [LinkedIn](https://linkedin.com/in/asmyshlyaev177) · Telegram @asmyshlyaev177
- **我的其他项目** —— [state-in-url](https://github.com/asmyshlyaev177/state-in-url)
  （类型化 URL 状态）、
  [test-proxy-recorder](https://github.com/asmyshlyaev177/test-proxy-recorder)
  （供 Playwright 录制/回放）

给仓库一个 ⭐️，能帮助更多人发现这个库。
