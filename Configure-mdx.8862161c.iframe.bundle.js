(globalThis.webpackChunkreact_horizontal_scrolling_menu=globalThis.webpackChunkreact_horizontal_scrolling_menu||[]).push([[765],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/Configure.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RightArrow:()=>RightArrow,default:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_w_react_horizontal_scrolling_menu_react_horizontal_scrolling_menu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");let RightArrow=()=>{let _components=Object.assign({svg:"svg",path:"path"},(0,_w_react_horizontal_scrolling_menu_react_horizontal_scrolling_menu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)());return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.svg,{viewBox:"0 0 14 14",width:"8px",height:"14px",style:{marginLeft:"4px",display:"inline-block",shapeRendering:"inherit",verticalAlign:"middle",fill:"currentColor"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.path,{d:"m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"})})};function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code"},(0,_w_react_horizontal_scrolling_menu_react_horizontal_scrolling_menu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{title:"Configure your project"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-title",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"configure-your-project",children:"Configure your project"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup. Below, explore guides for configuring Storybook with popular frameworks and tools. If you get stuck, learn how you can ask for help from our community."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{alt:"A wall of logos representing different styling technologies"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:"sb-section-item-heading",children:"Add styling and CSS"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"sb-section-item-paragraph",children:"Like with web applications, there are many ways to include CSS within Storybook. Learn more about setting up styling within Storybook."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank",children:["Learn more",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{alt:"An abstraction representing the composition of data for a component"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:"sb-section-item-heading",children:"Provide context and mocking"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"sb-section-item-paragraph",children:"Often when a story doesn't render, it's because your component is expecting a specific environment or context (like a theme provider) to be available."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/docs/react/writing-stories/decorators#context-for-mocking",target:"_blank",children:["Learn more",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{alt:"A representation of typography and image assets"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:"sb-section-item-heading",children:"Load assets and resources"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p",{className:"sb-section-item-paragraph",children:["To link static files (like fonts) to your projects and stories, use the\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"staticDirs"})," configuration option to specify folders to load when\nstarting Storybook."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/docs/react/configure/images-and-assets",target:"_blank",children:["Learn more",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-title",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"do-more-with-storybook",children:"Do more with Storybook"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Now that you know the basics, let's explore other parts of Storybook that will improve your experience. This list is just to get you started. You can customise Storybook in many ways to fit your needs."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"sb-section",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-features-grid",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-grid-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:"sb-section-item-heading",children:"Autodocs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"sb-section-item-paragraph",children:"Auto-generate living,\ninteractive reference documentation from your components and stories."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/docs/react/writing-docs/autodocs",target:"_blank",children:["Learn more",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-grid-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:"sb-section-item-heading",children:"Publish to Chromatic"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"sb-section-item-paragraph",children:"Publish your Storybook to review and collaborate with your entire team."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/docs/react/sharing/publish-storybook#publish-storybook-with-chromatic",target:"_blank",children:["Learn more",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-grid-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:"sb-section-item-heading",children:"Figma Plugin"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"sb-section-item-paragraph",children:"Embed your stories into Figma to cross-reference the design and live\nimplementation in one place."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/docs/react/sharing/design-integrations#embed-storybook-in-figma-with-the-plugin",target:"_blank",children:["Learn more",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-grid-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:"sb-section-item-heading",children:"Testing"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"sb-section-item-paragraph",children:"Use stories to test a component in all its variations, no matter how\ncomplex."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/docs/react/writing-tests",target:"_blank",children:["Learn more",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-grid-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:"sb-section-item-heading",children:"Accessibility"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"sb-section-item-paragraph",children:"Automatically test your components for a11y issues as you develop."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/docs/react/writing-tests/accessibility-testing",target:"_blank",children:["Learn more",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-grid-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:"sb-section-item-heading",children:"Theming"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"sb-section-item-paragraph",children:"Theme Storybook's UI to personalize it to your project."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/docs/react/configure/theming",target:"_blank",children:["Learn more",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]})]})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-addon",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-addon-text",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{children:"Addons"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"sb-section-item-paragraph",children:"Integrate your tools with Storybook to connect workflows."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/integrations/",target:"_blank",children:["Discover all addons",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"sb-addon-img"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section sb-socials",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Join our contributors building the future of UI development."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://github.com/storybookjs/storybook",target:"_blank",children:["Star on GitHub",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"sb-section-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Get support and chat with frontend developers."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://discord.gg/storybook",target:"_blank",children:["Join Discord server",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"sb-section-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Watch tutorials, feature previews and interviews."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://www.youtube.com/@chromaticui",target:"_blank",children:["Watch on YouTube",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"Follow guided walkthroughs on for key workflows."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",children:["Discover tutorials",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style",{children:`
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  img {
    object-fit: cover;
  }

  .sb-section-title {
    margin-bottom: 32px;
  }

  .sb-section a:not(h1 a, h2 a, h3 a) {
    font-size: 14px;
  }

  .sb-section-item, .sb-grid-item {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .sb-section-item-heading {
    padding-top: 20px !important;
    padding-bottom: 5px !important;
    margin: 0 !important;
  }
  .sb-section-item-paragraph {
    margin: 0;
    padding-bottom: 10px;
  }

  .sb-chevron {
    margin-left: 5px;
  }

  .sb-features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px 20px;
  }

  .sb-socials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .sb-socials p {
    margin-bottom: 10px;
  }

  .sb-explore-image {
    max-height: 32px;
    align-self: flex-start;
  }

  .sb-addon {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #EEF3F8;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #EEF3F8;
    height: 180px;
    margin-bottom: 48px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 48px;
    max-width: 240px;
  }

  .sb-addon-text h4 {
    padding-top: 0px;
  }

  .sb-addon-img {
    position: absolute;
    left: 345px;
    top: 0;
    height: 100%;
    width: 200%;
    overflow: hidden;
  }

  .sb-addon-img img {
    width: 650px;
    transform: rotate(-15deg);
    margin-left: 40px;
    margin-top: -72px;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0);
    backface-visibility: hidden;
  }

  @media screen and (max-width: 800px) {
    .sb-addon-img {
      left: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    .sb-section {
      flex-direction: column;
    }

    .sb-features-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .sb-socials {
      grid-template-columns: repeat(2, 1fr);
    }

    .sb-addon {
      height: 280px;
      align-items: flex-start;
      padding-top: 32px;
      overflow: hidden;
    }

    .sb-addon-text {
      padding-left: 24px;
    }

    .sb-addon-img {
      right: 0;
      left: 0;
      top: 130px;
      bottom: 0;
      overflow: hidden;
      height: auto;
      width: 124%;
    }

    .sb-addon-img img {
      width: 1200px;
      transform: rotate(-12deg);
      margin-left: 0;
      margin-top: 48px;
      margin-bottom: -40px;
      margin-left: -24px;
    }
  }
  `})]})}let __WEBPACK_DEFAULT_EXPORT__=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,_w_react_horizontal_scrolling_menu_react_horizontal_scrolling_menu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=Configure-mdx.8862161c.iframe.bundle.js.map