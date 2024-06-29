(globalThis.webpackChunkreact_horizontal_scrolling_menu=globalThis.webpackChunkreact_horizontal_scrolling_menu||[]).push([[232],{"./stories/Docs.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Docs}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),react_markdown_lib=__webpack_require__("./node_modules/react-markdown/lib/index.js"),remark_gfm_lib=__webpack_require__("./node_modules/remark-gfm/lib/index.js");function _createMdxContent(props){let _components=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,lib.MN)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n",(0,jsx_runtime.jsx)(dist.Qb,{title:"Docs"}),"\n",(0,jsx_runtime.jsx)("div",{className:"container",children:(0,jsx_runtime.jsx)("div",{className:"section-title",children:(0,jsx_runtime.jsx)(_components.h1,{id:"docs",children:"Docs"})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"quick-start",children:"Quick start"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Add library to your project"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{children:"npm install --save react-horizontal-scrolling-menu\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Start by ",(0,jsx_runtime.jsx)("a",{href:"/?path=/story/examples-simple",target:"_blank",children:"simple example"})," and use this documentation as a reference"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["You can ask for help or propose improvements at ",(0,jsx_runtime.jsx)("a",{href:"https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu",target:"_blank",children:"library's github"})]}),"\n",(0,jsx_runtime.jsx)(react_markdown_lib.I,{remarkPlugins:[remark_gfm_lib.c],children:"[![For hire](/hireBadge.svg)](https://www.linkedin.com/in/asmyshlyaev177/)\n\n# React horizontal scrolling menu\n\n![example](/sample.gif)\n\n[![npm](https://img.shields.io/npm/v/react-horizontal-scrolling-menu.svg)](https://www.npmjs.com/package/react-horizontal-scrolling-menu)\n[![Tests](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/tests.yml/badge.svg?branch=main)](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/tests.yml)\n[![Codacy Badge](https://app.codacy.com/project/badge/Grade/433d9b4a8a374109a9f96b8faf3c175d)](https://www.codacy.com/gh/asmyshlyaev177/react-horizontal-scrolling-menu/dashboard?utm_source=github.com&utm_medium=referral&utm_content=asmyshlyaev177/react-horizontal-scrolling-menu&utm_campaign=Badge_Grade)\n[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/433d9b4a8a374109a9f96b8faf3c175d)](https://www.codacy.com/gh/asmyshlyaev177/react-horizontal-scrolling-menu/dashboard?utm_source=github.com&utm_medium=referral&utm_content=asmyshlyaev177/react-horizontal-scrolling-menu&utm_campaign=Badge_Coverage)\n[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/)\n![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-horizontal-scrolling-menu.svg)\n[![Donate Bitcoin](https://img.shields.io/badge/donate-$5-orange.svg)](https://asmyshlyaev177.github.io/donate-bitcoin?amount=5&currency=USD)\n\n### [Poll what you like/dislike/need from this library](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/discussions/221)\n\n### Proud corner\n\n[performance-dashboard-on-aws\n](https://github.com/awslabs/performance-dashboard-on-aws/blob/49ce2517a29569a9761dec8f212f25cf85a394af/frontend/src/components/Tabs.tsx#L3) |\n[React status code](https://react.statuscode.com/issues/257)\n\n### [Storybook](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu) (Faster and more convinient, new examples will be here)\n\n### Codesandbox Examples (Deprecated)\n\n[Center items](https://codesandbox.io/s/center-items-on-click-drag-e8cyph?file=/src/index.tsx)\n\n[Dynamically add items when last is visible](https://codesandbox.io/s/react-horizontal-scrolling-menu-v2-dynamically-add-items-38ted?file=/src/index.tsx)\n\n[apiRef - controling component outside](https://codesandbox.io/s/react-horizontal-scrolling-menu-v2-apiref-vdr0d?file=/src/index.tsx)\n\n[Add item and scroll to it](https://codesandbox.io/s/basic-example-forked-3j0xm?file=/src/index.tsx)\n\n[Loop scroll](https://codesandbox.io/s/loop-scroll-4w8ek6?file=/src/index.tsx)\n\n[Custom transition/animation](https://codesandbox.io/p/sandbox/custom-transition-animation-3h4d2y?file=%2Fsrc%2Findex.tsx)\n\n[Swipe on mobile devices(need to run locally, codesandbox has issues)](https://codesandbox.io/s/swipe-on-mobile-qmgqtj)\n\n### Previous version [V1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/tree/v1)\n\nThis is a highly customizable horizontal scrolling menu component for React. Can also use it for Amazon like items block or a Gallery.\nMenu component is responsive, just set width for parent container.\nItems width will be determined from CSS styles.\n\nFor navigation, you can use scrollbar, native touch scroll, mouse wheel or drag by mouse.\n\nComponent provide context with visible items and helpers.\n\nPossible set default position on initialization.\n\nCheck out examples on [Storybook](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu) or codesandbox.\n\n:star: if you like the project :)\n\n### NextJS issues\n\n[Cannot use import statement outside a module](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/240)\n\n## Quick start\n\n```bash\nnpm install --save react-horizontal-scrolling-menu\n```\ntest\nIn project:\n\n```javascript\nimport React from 'react';\nimport { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';\nimport 'react-horizontal-scrolling-menu/dist/styles.css';\n\nconst getItems = () =>\n  Array(20)\n    .fill(0)\n    .map((_, ind) => ({ id: `element-${ind}` }));\n\nfunction App() {\n  const [items, setItems] = React.useState(getItems);\n  const [selected, setSelected] = React.useState([]);\n\n  const isItemSelected = (id) => !!selected.find((el) => el === id);\n\n  const handleClick =\n    (id) =>\n    ({ getItemById, scrollToItem }) => {\n      const itemSelected = isItemSelected(id);\n\n      setSelected((currentSelected) =>\n        itemSelected\n          ? currentSelected.filter((el) => el !== id)\n          : currentSelected.concat(id),\n      );\n    };\n\n  return (\n    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>\n      {items.map(({ id }) => (\n        <Card\n          itemId={id} // NOTE: itemId is required for track items\n          title={id}\n          key={id}\n          onClick={handleClick(id)}\n          selected={isItemSelected(id)}\n        />\n      ))}\n    </ScrollMenu>\n  );\n}\n\nconst LeftArrow = () => {\n  const visibility = React.useContext < publicApiType > VisibilityContext;\n  const isFirstItemVisible = visibility.useIsVisible('first', true);\n  return (\n    <Arrow\n      disabled={isFirstItemVisible}\n      onClick={visibility.scrollPrev}\n      className=\"left\"\n    >\n      Left\n    </Arrow>\n  );\n};\n\nconst RightArrow = () => {\n  const visibility = React.useContext < publicApiType > VisibilityContext;\n  const isLastItemVisible = visibility.useIsVisible('last', false);\n  return (\n    <Arrow\n      disabled={isLastItemVisible}\n      onClick={visibility.scrollNext}\n      className=\"right\"\n    >\n      Right\n    </Arrow>\n  );\n};\n\nfunction Card({ onClick, selected, title, itemId }) {\n  const visibility = React.useContext < publicApiType > VisibilityContext;\n  const visible = visibility.useIsVisible(itemId, true);\n\n  return (\n    <div\n      onClick={() => onClick(visibility)}\n      style={{\n        width: '160px',\n      }}\n      tabIndex={0}\n    >\n      <div className=\"card\">\n        <div>{title}</div>\n        <div>visible: {JSON.stringify(visible)}</div>\n        <div>selected: {JSON.stringify(!!selected)}</div>\n      </div>\n      <div\n        style={{\n          height: '200px',\n        }}\n      />\n    </div>\n  );\n}\n\nexport default App;\n```\n\nCheck out Example in `example-nextjs` folder for info how to implement more features like mouse drag or disable body scroll.\n\n## Example\n\nYou can clone repository and run demo project.\n\n```bash\ngit clone https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu\nnpm run setup\nnpm run demo\n```\n\n## Storybook\n\nCan clone repo and run storybook\n\n```bash\ngit clone https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu\nnpm run setup\nnpm run storybook\n```\n\n<!-- DOCS_START -->\n### Helpers and api\n\nChildren of main ScrollMenu component(arrows, fotter, items) can use **VisibilityContext** to access state and callbacks.\nFunction callbacks also pass context, eg `onWheel`, `onScroll` etc.\n\n## Properties and callbacks\n\n| Prop                     | Signature                                                                                              |\n| ------------------------ | ------------------------------------------------------------------------------------------------------ |\n| LeftArrow                | React component for left arrow                                                                         |\n| RightArrow               | React component for right arrow                                                                        |\n| Header                   | React component Header                                                                                 |\n| Footer                   | React component Footer                                                                                 |\n| onWheel                  | (VisibilityContext, event) => void                                                                     |\n| onScroll                 | (VisibilityContext, event) => void, will fire _before_ scroll                                          |\n| onInit                   | (VisibilityContext) => void                                                                            |\n| apiRef                   | React.RefObject \\| React.RefCallback                                                                   |\n| options                  | options for IntersectionObserver - `rootMargin`, `treshhhold`, and `ratio` to consider element visible |\n| containerRef             | React.RefObject \\| React.RefCallback                                                                   |\n| onUpdate                 | (VisibilityContext) => void                                                                            |\n| onMouseDown              | (VisibilityContext) => (React.MouseEventHandler) => void                                               |\n| onMouseLeave             | (VisibilityContext) => (React.MouseEventHandler) => void                                               |\n| onMouseUp                | (VisibilityContext) => (React.MouseEventHandler) => void                                               |\n| onMouseMove              | (VisibilityContext) => (React.MouseEventHandler) => void                                               |\n| onTouchMove              | (VisibilityContext) => (React.TouchEventHandler) => void                                               |\n| onTouchStart             | (VisibilityContext) => (React.TouchEventHandler) => void                                               |\n| onTouchEnd               | (VisibilityContext) => (React.TouchEventHandler) => void                                               |\n| itemClassName            | ClassName of Item                                                                                      |\n| scrollContainerClassName | ClassName of scrollContainer                                                                           |\n| transitionDuration       | Duration of transitions in ms, default 500                                                             |\n| transitionBehavior       | 'smooth' \\|'auto' \\| customFunction                                                                    |\n| wrapperClassName         | ClassName of the outer-most div                                                                        |\n| RTL                      | Enable Right to left direction                                                                         |\n| noPolyfill               | Don't use polyfill for scroll, no transitions                                                          |\n\n### VisibilityContext\n\n| Prop                  | Signature                                              |\n| --------------------- | ------------------------------------------------------ |\n| useIsVisible          | (itemId: string, defaultValue?: false) => boolean      |\n| getItemById           | itemId => IOItem \\| undefined                          |\n| getItemElementById    | itemId => DOM Element \\| null                          |\n| getItemByIndex        | index => IOItem \\| undefined                           |\n| getItemElementByIndex | index => DOM Element \\| null                           |\n| getNextElement        | () => IOItem \\| undefined                              |\n| getPrevElement        | () => IOItem \\| undefined                              |\n| isFirstItemVisible    | boolean                                                |\n| isItemVisible         | itemId => boolean                                      |\n| isLastItem            | boolean                                                |\n| isLastItemVisible     | boolean                                                |\n| scrollNext            | (behavior, inline, block, ScrollOptions) => void       |\n| scrollPrev            | (behavior, inline, block, ScrollOptions) => void       |\n| scrollToItem          | (item, behavior, inline, block, ScrollOptions) => void |\n| items                 | ItemsMap class instance                                |\n| scrollContainer       | Ref<OuterContainer>                                    |\n\n### items class instance\n\nItemsMap class store info about all items and has methods to get currently visible items, prev/next item. Also, can subscribe to updates.\n\n| Prop/method | Description                                                                                                                                    |\n| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |\n| subscribe   | subscribe for events for `itemId` or `first`, `last`, `onInit`, `onUpdate`, eg. `items.subscribe('item5', (item) => setVisible(item.visible))` |\n| unsubscribe | use in useEffect to cleanup, pass same cb instance                                                                                             |\n| getVisible  | return only visible items                                                                                                                      |\n| toItems     | return ids for all items                                                                                                                       |\n| toArr       | return all items                                                                                                                               |\n| first       | return first item                                                                                                                              |\n| last        | return last item                                                                                                                               |\n| prev        | (itemId \\| Item) => previous item \\| undefined                                                                                                 |\n| next        | (itemId \\| Item) => next item \\| undefined                                                                                                     |\n\n### Transition/Animation\n\nNOTE: won't work with RTL prop\n\nCan use `transitionDuration`, and `transitionBehavior`\nSee [example](https://codesandbox.io/p/sandbox/custom-transition-animation-3h4d2y?file=%2Fsrc%2Findex.tsx)\n\n#### ScrollOptions for scrollToItem, scrollPrev, scrollNext\n\nWill override transition\\* options passed to ScrollMenu\n\n```javascript\n{\n  // target,\n  behavior, // 'smooth', 'auto' or custom function\n    // inline,\n    // block,\n    {\n      duration: number, // number in milliseconds\n    };\n}\n```\n\n### Other helpers\n\n#### slidingWindow\n\nCan get previous or next visible group of items with `slidingWindow(allItems: string[], visibleItems: string[])` helper, e.g\n\n```Javascript\nslidingWindow(allItems, visibleItems)\n.prev()\n//.next()\n```\n\n#### getItemsPos\n\nCan get first, center and last items, e.g.\n\n```Javascript\nconst prevGroup = slidingWindow(allItems, visibleItems).prev()\nconst { first, center: centerItem, last } = getItemsPos(prevGroup)\n\n// and scroll to center item of previous group of items\nscrollToItem(getItemById(centerItem, 'smooth', 'center'))\n\n```\n\nCheck out [examples](#examples)\n\n### apiRef\n\nCan pass Ref object to Menu, current value will assigned as VisibilityContext. But some other values can be staled, so better use it only for firing functions like `scrollToItem`.\n\nFor scrolling use `apiRef.scrollToItem(apiRef.getItemElementById)` instead of `apiRef.scrollToItem(apiRef.getItemById)`.\n\nCan get item outside of context via `apiRef.getItemElementById(id)` or directly via ``document.querySelector(`[data-key='${itemId}']`)``.\nSee [`apiRef` example and `Add item and scroll to it`](#examples)\n\n<!-- DOCS_END -->\n\n## Browser support\n\n- Browser must support **IntersectionObserver API** and **requestAnimationFrame** or use polyfills.\n- Only modern browsers, no IE or smart toasters\n\n## About\n\nMy first npm project. Sorry for my english.\n\nAny contribution and correction appreciated. Just fork repo, commit and make PR, don't forget about tests.\n\n## [Contributing](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/blob/main/CONTRIBUTING.md)\n\n## [Changelog](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/blob/main/CHANGELOG.md)\n".match(/\<\!\-\-\s?DOCS_START\s?\-\-\>(.*)\<\!\-\-\s?DOCS_END\s?\-\-\>/s)[0].replace("<!-- DOCS_START -->","").replace("<!-- DOCS_END -->","")}),"\n",(0,jsx_runtime.jsx)("style",{children:`
  .container {
    margin-bottom: 48px;
  }

  .section {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  `})]})}let Docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);
//# sourceMappingURL=Docs-mdx.fc594ff2.iframe.bundle.js.map