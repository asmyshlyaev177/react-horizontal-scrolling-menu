// Chinese (Simplified) (zh-CN) — translation of en/manifest.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=zh-CN source=en/manifest.ts source-blob=269945541172d5f4f06823bd0d6393dfc44a3fb2 status=translated
import type { ManifestCopy } from '../types.ts';

/**
 * 示例页面的中心卡片文案。slug 与分组 id 是结构——它们位于
 * `lib/examples-manifest.ts`，此处是键，而非文案。
 */
export const manifest: ManifestCopy = {
  groups: {
    Basics: '基础',
    'Position & scrolling': '位置与滚动',
    'Input & gestures': '输入与手势',
    'Dynamic items': '动态项目',
    Layout: '布局',
    Recipes: '配方',
  },
  examples: {
    simple: {
      name: '快速入门',
      blurb: '最小菜单：项目、两个箭头，开箱即用的可见性。',
    },
    'one-item': {
      name: '每屏一个项目',
      blurb: '单项宽的菜单——一张卡片占满整行。',
    },
    'one-item-scroll': {
      name: '一次滚动一个项目',
      blurb: '箭头一次前进一个项目，而非一整页。',
    },
    'bottom-arrows': {
      name: '箭头置于菜单下方',
      blurb: '箭头是你的组件——放在哪里都行。',
    },
    'center-on-click': {
      name: '让点击的项目居中',
      blurb: 'scrollToItem 配 inline: center——可滚动标签页模式。',
    },
    'scroll-to-item': {
      name: '按 id 滚动到项目',
      blurb: '用 apiRef 从外部触达菜单。',
    },
    'save-restore-position': {
      name: '保存与恢复滚动位置',
      blurb: '在卸载与页面重载之间保持滚动偏移。',
    },
    'custom-transition': {
      name: '自定义滚动动画',
      blurb: '为程序化滚动自备缓动与时长。',
    },
    progress: {
      name: '滚动进度指示器',
      blurb: '由可见项目驱动的进度条。',
    },
    'mouse-drag': {
      name: '用鼠标拖拽滚动',
      blurb: '鼠标拖拽的同时不破坏项目点击。',
    },
    'swipe-desktop': {
      name: '桌面端滑动',
      blurb: '面向鼠标用户的惯性滑动。',
    },
    'mobile-swipe-only': {
      name: '移动端隐藏箭头',
      blurb: '小屏仅触摸滚动，桌面端保留箭头。',
    },
    'prevent-body-scroll': {
      name: '阻止页面滚动',
      blurb: '滚轮划过菜单时滚动菜单，而非页面。',
    },
    'add-items': {
      name: '到达末尾时加载更多',
      blurb: '由最后一个项目的可见性驱动的无限追加。',
    },
    'add-item-and-scroll-to-it': {
      name: '添加项目并滚动到它',
      blurb: '筛选标签模式：先追加，再滚入可视区。',
    },
    'items-animation': {
      name: '项目的进出动画',
      blurb: '用 @formkit/auto-animate 实现增删动画。',
    },
    performance: {
      name: '5000 个项目依然流畅',
      blurb: '原生滚动可扩展——这里无需虚拟化。',
    },
    vertical: {
      name: '垂直菜单',
      blurb: '同一个菜单，自上而下滚动。',
    },
    rtl: {
      name: '从右到左',
      blurb: 'RTL 翻转方向；箭头与分页随之改变。',
    },
    'infinite-loop': {
      name: '无限循环',
      blurb: '来自公开 API 的无缝循环——无需改动库。',
    },
    autoplay: {
      name: '自动播放',
      blurb: '带无障碍暂停行为的自动前进循环。',
    },
  },
};
