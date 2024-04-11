"use strict";(globalThis.webpackChunkreact_horizontal_scrolling_menu=globalThis.webpackChunkreact_horizontal_scrolling_menu||[]).push([[236],{"./stories/0_Simple/Simple.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Simple:()=>Simple,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Simple_stories});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/storybook-addon-code-editor/dist/es/index.js"),SizeWrapper=__webpack_require__("./stories/SizeWrapper.tsx"),availableImports=__webpack_require__("./stories/availableImports.ts"),setupEditor=__webpack_require__("./stories/setupEditor.ts"),test=__webpack_require__("./stories/test.tsx"),styled_jss=__webpack_require__("./node_modules/styled-jss/index.js"),dist=__webpack_require__("./node_modules/usehooks-ts/dist/index.js"),dist_0=__webpack_require__("./dist/index.mjs");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}__webpack_require__("./dist/styles.css");var OnScreenContext=react.createContext(!0),NoScrollbar=(0,styled_jss.cp)("div")({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:"none"},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:"none","-ms-overflow-style":"none"}});function LeftArrow(){var visibility=react.useContext(dist_0.CI),isFirstItemVisible=visibility.useIsVisible("first",!0),isOnScreen=react.useContext(OnScreenContext),_React_useState=_sliced_to_array(react.useState(isFirstItemVisible),2),disabled=_React_useState[0],setDisabled=_React_useState[1];return react.useEffect(function(){isOnScreen&&setDisabled(isFirstItemVisible)},[isOnScreen,isFirstItemVisible]),react.createElement(Arrow,{disabled:disabled,onClick:function(){return visibility.scrollPrev()},testId:"left-arrow"},"Left")}function RightArrow(){var visibility=react.useContext(dist_0.CI),isLastItemVisible=visibility.useIsVisible("last",!1),isOnScreen=react.useContext(OnScreenContext),_React_useState=_sliced_to_array(react.useState(isLastItemVisible),2),disabled=_React_useState[0],setDisabled=_React_useState[1];return react.useEffect(function(){isOnScreen&&setDisabled(isLastItemVisible)},[isOnScreen,isLastItemVisible]),react.createElement(Arrow,{disabled:disabled,onClick:function(){return visibility.scrollNext()},testId:"right-arrow"},"Right")}function Arrow(param){var children=param.children,disabled=param.disabled,onClick=param.onClick,className=param.className,testId=param.testId;return react.createElement(ArrowButton,{disabled:disabled,onClick:onClick,className:"arrow"+"-".concat(className),"data-testid":testId},children)}var ArrowButton=(0,styled_jss.cp)("button")({cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"2px",opacity:function(props){return props.disabled?"0":"1"},userSelect:"none",borderRadius:"6px",borderWidth:"1px"});function Card(param){var onClick=param.onClick,selected=param.selected,title=param.title,itemId=param.itemId,visibility=react.useContext(dist_0.CI),isVisible=visibility.useIsVisible(itemId,!0);return react.createElement(CardBody,{"data-cy":itemId,onClick:function(){return onClick(visibility)},onKeyDown:function(ev){"Enter"===ev.code&&onClick(visibility)},"data-testid":"card",role:"button",tabIndex:0,className:"card",visible:isVisible,selected:selected},react.createElement("div",{className:"header"},react.createElement("div",null,title),react.createElement("div",{className:"visible"},"visible: ",JSON.stringify(isVisible)),react.createElement("div",{className:"selected"},"selected: ",JSON.stringify(!!selected))),react.createElement("div",{className:"background"}))}var CardBody=(0,styled_jss.cp)("div")({border:"1px solid",display:"inline-block",margin:"0 10px",width:"160px",userSelect:"none",borderRadius:"8px",overflow:"hidden","& .header":{backgroundColor:"white"},"& .visible":{backgroundColor:function(props){return props.visible?"transparent":"gray"}},"& .background":{backgroundColor:function(props){return props.selected?"green":"bisque"},height:"200px"}});function onWheel(apiObj,ev){if(0!==Math.abs(ev.deltaX)||15>Math.abs(ev.deltaY)){ev.stopPropagation();return}ev.deltaY<0?apiObj.scrollNext():apiObj.scrollPrev()}let Simple_stories={title:"Examples/Simple",component:function(){var _useIntersectionObserver=(0,dist.useIntersectionObserver)({threshold:1}),isVisible=_useIntersectionObserver.isIntersecting,ref=_useIntersectionObserver.ref,items=_sliced_to_array(react.useState(function(){return Array(10).fill(0).map(function(_,ind){return{id:"test".concat(ind)}})}),1)[0],_React_useState1=_sliced_to_array(react.useState([]),2),selected=_React_useState1[0],setSelected=_React_useState1[1],isItemSelected=function(id){return!!selected.find(function(el){return el===id})},handleItemClick=function(itemId){var itemSelected=isItemSelected(itemId);setSelected(function(currentSelected){return itemSelected?currentSelected.filter(function(el){return el!==itemId}):currentSelected.concat(itemId)})};return react.createElement("div",{ref:ref},react.createElement(NoScrollbar,null,react.createElement(OnScreenContext.Provider,{value:isVisible},react.createElement(dist_0.sD,{LeftArrow:LeftArrow,RightArrow:RightArrow,onWheel:onWheel},items.map(function(param){var id=param.id;return react.createElement(Card,{title:id,itemId:id,key:id,onClick:function(){return handleItemClick(id)},selected:isItemSelected(id)})})))))},decorators:[function(Story){return react.createElement(SizeWrapper.q,null,react.createElement(Story,null))}]};var Simple=(0,es.IV)({code:"import React from 'react';\nimport styled from 'styled-jss';\nimport { useIntersectionObserver } from 'usehooks-ts';\n\nimport {\n  ScrollMenu,\n  VisibilityContext,\n  type publicApiType,\n} from 'react-horizontal-scrolling-menu';\n\nimport 'react-horizontal-scrolling-menu/dist/styles.css';\n\nconst OnScreenContext = React.createContext(true);\n\nexport function SimpleExample() {\n  // NOTE: to show/hide arrows only when main component is on screen and visible\n  const { isIntersecting: isVisible, ref } = useIntersectionObserver({\n    threshold: 1,\n  });\n\n  const [items] = React.useState(() => getItems());\n  const [selected, setSelected] = React.useState<string[]>([]);\n\n  const isItemSelected = (id: string): boolean =>\n    !!selected.find((el) => el === id);\n\n  const handleItemClick = (itemId: string) => {\n    const itemSelected = isItemSelected(itemId);\n\n    setSelected((currentSelected: string[]) =>\n      itemSelected\n        ? currentSelected.filter((el) => el !== itemId)\n        : currentSelected.concat(itemId),\n    );\n  };\n\n  return (\n    <div ref={ref}>\n      <NoScrollbar>\n        <OnScreenContext.Provider value={isVisible}>\n          <ScrollMenu\n            LeftArrow={LeftArrow}\n            RightArrow={RightArrow}\n            onWheel={onWheel}\n          >\n            {items.map(({ id }) => (\n              <Card\n                title={id}\n                itemId={id} // NOTE: itemId is required for track items\n                key={id}\n                onClick={() => handleItemClick(id)}\n                selected={isItemSelected(id)}\n              />\n            ))}\n          </ScrollMenu>\n        </OnScreenContext.Provider>\n      </NoScrollbar>\n    </div>\n  );\n}\n\nexport default SimpleExample;\n\nconst NoScrollbar = styled('div')({\n  '& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar': {\n    display: 'none',\n  },\n  '& .react-horizontal-scrolling-menu--scroll-container': {\n    scrollbarWidth: 'none',\n    '-ms-overflow-style': 'none',\n  },\n});\n\nfunction LeftArrow() {\n  const visibility = React.useContext<publicApiType>(VisibilityContext);\n  const isFirstItemVisible = visibility.useIsVisible('first', true);\n\n  const isOnScreen = React.useContext(OnScreenContext);\n  const [disabled, setDisabled] = React.useState(isFirstItemVisible);\n  React.useEffect(() => {\n    if (isOnScreen) {\n      setDisabled(isFirstItemVisible);\n    }\n  }, [isOnScreen, isFirstItemVisible]);\n\n  return (\n    <Arrow\n      disabled={disabled}\n      onClick={() => visibility.scrollPrev()}\n      testId=\"left-arrow\"\n    >\n      Left\n    </Arrow>\n  );\n}\n\nfunction RightArrow() {\n  const visibility = React.useContext<publicApiType>(VisibilityContext);\n  const isLastItemVisible = visibility.useIsVisible('last', false);\n\n  const isOnScreen = React.useContext(OnScreenContext);\n  const [disabled, setDisabled] = React.useState(isLastItemVisible);\n  React.useEffect(() => {\n    if (isOnScreen) {\n      setDisabled(isLastItemVisible);\n    }\n  }, [isOnScreen, isLastItemVisible]);\n\n  return (\n    <Arrow\n      disabled={disabled}\n      onClick={() => visibility.scrollNext()}\n      testId=\"right-arrow\"\n    >\n      Right\n    </Arrow>\n  );\n}\n\nfunction Arrow({\n  children,\n  disabled,\n  onClick,\n  className,\n  testId,\n}: {\n  children: React.ReactNode;\n  disabled: boolean;\n  onClick: VoidFunction;\n  className?: string;\n  testId: string;\n}) {\n  return (\n    <ArrowButton\n      disabled={disabled}\n      onClick={onClick}\n      className={'arrow' + `-${className}`}\n      data-testid={testId}\n    >\n      {children}\n    </ArrowButton>\n  );\n}\nconst ArrowButton = styled('button')({\n  cursor: 'pointer',\n  display: 'flex',\n  flexDirection: 'column',\n  justifyContent: 'center',\n  marginBottom: '2px',\n  opacity: (props) => (props.disabled ? '0' : '1'),\n  userSelect: 'none',\n  borderRadius: '6px',\n  borderWidth: '1px',\n});\n\nfunction Card({\n  onClick,\n  selected,\n  title,\n  itemId,\n}: {\n  onClick: (context: publicApiType) => void;\n  selected: boolean;\n  title: string;\n  itemId: string;\n}) {\n  const visibility = React.useContext<publicApiType>(VisibilityContext);\n  const isVisible = visibility.useIsVisible(itemId, true);\n\n  return (\n    <CardBody\n      data-cy={itemId}\n      onClick={() => onClick(visibility)}\n      onKeyDown={(ev: React.KeyboardEvent) => {\n        ev.code === 'Enter' && onClick(visibility);\n      }}\n      data-testid=\"card\"\n      role=\"button\"\n      tabIndex={0}\n      className=\"card\"\n      visible={isVisible}\n      selected={selected}\n    >\n      <div className=\"header\">\n        <div>{title}</div>\n        <div className=\"visible\">visible: {JSON.stringify(isVisible)}</div>\n        <div className=\"selected\">selected: {JSON.stringify(!!selected)}</div>\n      </div>\n      <div className=\"background\" />\n    </CardBody>\n  );\n}\nconst CardBody = styled('div')({\n  border: '1px solid',\n  display: 'inline-block',\n  margin: '0 10px',\n  width: '160px',\n  userSelect: 'none',\n  borderRadius: '8px',\n  overflow: 'hidden',\n\n  '& .header': {\n    backgroundColor: 'white',\n  },\n\n  '& .visible': {\n    backgroundColor: (props) => (props.visible ? 'transparent' : 'gray'),\n  },\n\n  '& .background': {\n    backgroundColor: (props) => (props.selected ? 'green' : 'bisque'),\n    height: '200px',\n  },\n});\n\nconst getId = (index: number) => `${'test'}${index}`;\n\nconst getItems = () =>\n  Array(10)\n    .fill(0)\n    .map((_, ind) => ({ id: getId(ind) }));\n\nfunction onWheel(apiObj: publicApiType, ev: React.WheelEvent): void {\n  // NOTE: no good standart way to distinguish touchpad scrolling gestures\n  // but can assume that gesture will affect X axis, mouse scroll only Y axis\n  // of if deltaY too small probably is it touchpad\n  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;\n\n  if (isThouchpad) {\n    ev.stopPropagation();\n    return;\n  }\n\n  if (ev.deltaY < 0) {\n    apiObj.scrollNext();\n  } else {\n    apiObj.scrollPrev();\n  }\n}\n",availableImports:availableImports.S,modifyEditor:setupEditor.M}),Test=(0,test.EP)();Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:"createLiveEditStory({\n  code: ExampleRaw,\n  availableImports,\n  modifyEditor: setupEditor\n})",...Simple.parameters?.docs?.source}}},Test.parameters={...Test.parameters,docs:{...Test.parameters?.docs,source:{originalSource:"ScrollTest()",...Test.parameters?.docs?.source}}};let __namedExportsOrder=["Simple","Test"];try{Simple.displayName="Simple",Simple.__docgenInfo={description:"",displayName:"Simple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0_Simple/Simple.stories.tsx#Simple"]={docgenInfo:Simple.__docgenInfo,name:"Simple",path:"stories/0_Simple/Simple.stories.tsx#Simple"})}catch(__react_docgen_typescript_loader_error){}},"./stories/SizeWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>SizeWrapper});var SizeWrapper=(0,__webpack_require__("./node_modules/styled-jss/index.js").cp)("div")({maxWidth:"650px",maxHeight:"400px"})}}]);