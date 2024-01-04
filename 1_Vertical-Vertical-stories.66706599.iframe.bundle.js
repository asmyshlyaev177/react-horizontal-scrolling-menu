"use strict";(globalThis.webpackChunkreact_horizontal_scrolling_menu=globalThis.webpackChunkreact_horizontal_scrolling_menu||[]).push([[156],{"./stories/1_Vertical/Vertical.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Test:()=>Test,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Vertical_stories});var _Vertical_parameters,_Vertical_parameters_docs,_Vertical_parameters1,_Test_parameters,_Test_parameters_docs,_Test_parameters1,react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/storybook-addon-code-editor/dist/es/index.js"),styled_jss=__webpack_require__("./node_modules/styled-jss/index.js"),setupEditor=__webpack_require__("./stories/setupEditor.ts"),src=__webpack_require__("./src/index.tsx"),test=__webpack_require__("./stories/test.tsx"),dist=__webpack_require__("./dist/index.mjs");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var NoScrollbar=(0,styled_jss.ZP)("div")({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:"none"},"& .react-horizontal-scrolling-menu--wrapper":{height:"100%"},"& .react-horizontal-scrolling-menu--scroll-container":{height:"initial",scrollbarWidth:"none","-ms-overflow-style":"none",overflowY:"auto",flexDirection:"column"}});function UpArrow(){var _React_useContext=react.useContext(dist.$8),initComplete=_React_useContext.initComplete,isFirstItemVisible=_React_useContext.isFirstItemVisible,scrollPrev=_React_useContext.scrollPrev;return react.createElement(Arrow,{disabled:!initComplete||initComplete&&isFirstItemVisible,onClick:function(){return scrollPrev(void 0,void 0,"end")},testId:"up-arrow"},"Up")}function DownArrow(){var _React_useContext=react.useContext(dist.$8),initComplete=_React_useContext.initComplete,isLastItemVisible=_React_useContext.isLastItemVisible,scrollNext=_React_useContext.scrollNext;return react.createElement(Arrow,{disabled:initComplete&&isLastItemVisible,onClick:function(){return scrollNext(void 0,void 0,"start")},testId:"down-arrow"},"Down")}function Arrow(param){var children=param.children,disabled=param.disabled,onClick=param.onClick,className=param.className,testId=param.testId;return react.createElement(ArrowButton,{disabled:disabled,onClick:onClick,className:"arrow"+"-".concat(className),"data-testid":testId},children)}var ArrowButton=(0,styled_jss.ZP)("button")({cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"2px",opacity:function(props){return props.disabled?"0":"1"},userSelect:"none",borderRadius:"6px"});function Card(param){var onClick=param.onClick,selected=param.selected,title=param.title,itemId=param.itemId,visibility=react.useContext(dist.$8),visible=!visibility.initComplete||visibility.initComplete&&visibility.isItemVisible(itemId);return react.createElement(CardBody,{"data-cy":itemId,onClick:function(){return onClick(visibility)},onKeyDown:function(ev){"Enter"===ev.code&&onClick(visibility)},"data-testid":"card",role:"button",tabIndex:0,className:"card",visible:visible,selected:selected},react.createElement("div",{className:"header"},react.createElement("div",null,title),react.createElement("div",{className:"visible"},"visible: ",JSON.stringify(visible)),react.createElement("div",{className:"selected"},"selected: ",JSON.stringify(!!selected))),react.createElement("div",{className:"background"}))}var CardBody=(0,styled_jss.ZP)("div")({border:"1px solid",display:"inline-block",margin:"0 10px",width:"160px",userSelect:"none",borderRadius:"8px",overflow:"hidden","& .header":{backgroundColor:"white"},"& .visible":{backgroundColor:function(props){return props.visible?"transparent":"gray"}},"& .background":{backgroundColor:function(props){return props.selected?"green":"bisque"},height:"125px"}});function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var SizeWrapper=(0,styled_jss.ZP)("div")({maxWidth:"300px",maxHeight:"670px",display:"flex",position:"relative"});let Vertical_stories={title:"ScrollMenu/Vertical",component:function(){var items=_sliced_to_array(react.useState(function(){return Array(10).fill(0).map(function(_,ind){return{id:"test".concat(ind)}})}),1)[0],_React_useState1=_sliced_to_array(react.useState([]),2),selected=_React_useState1[0],setSelected=_React_useState1[1],isItemSelected=function(id){return!!selected.find(function(el){return el===id})},handleItemClick=function(itemId){var itemSelected=isItemSelected(itemId);setSelected(function(currentSelected){return itemSelected?currentSelected.filter(function(el){return el!==itemId}):currentSelected.concat(itemId)})};return react.createElement(NoScrollbar,null,react.createElement(dist.lS,{Header:UpArrow,Footer:DownArrow},items.map(function(param){var id=param.id;return react.createElement(Card,{title:id,itemId:id,key:id,onClick:function(){return handleItemClick(id)},selected:isItemSelected(id)})})))},decorators:[function(Story){return react.createElement(SizeWrapper,null,react.createElement(Story,null))}]};var Vertical=(0,es.cj)({code:"import React from 'react';\nimport {\n  ScrollMenu,\n  VisibilityContext,\n  publicApiType,\n} from 'react-horizontal-scrolling-menu';\nimport styled from 'styled-jss';\n\nconst NoScrollbar = styled('div')({\n  '& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar': {\n    display: 'none',\n  },\n  // NOTE: also need to set on parent:\n  // display: 'flex' and position: 'relative'\n  '& .react-horizontal-scrolling-menu--wrapper': {\n    height: '100%',\n  },\n\n  '& .react-horizontal-scrolling-menu--scroll-container': {\n    height: 'initial',\n    scrollbarWidth: 'none',\n    '-ms-overflow-style': 'none',\n    overflowY: 'auto',\n    flexDirection: 'column',\n  },\n});\n\nexport function VerticalExample() {\n  const [items] = React.useState(() => getItems());\n  const [selected, setSelected] = React.useState<string[]>([]);\n\n  const isItemSelected = (id: string): boolean =>\n    !!selected.find((el) => el === id);\n\n  const handleItemClick = (itemId: string) => {\n    const itemSelected = isItemSelected(itemId);\n\n    setSelected((currentSelected: string[]) =>\n      itemSelected\n        ? currentSelected.filter((el) => el !== itemId)\n        : currentSelected.concat(itemId)\n    );\n  };\n\n  return (\n    <NoScrollbar>\n      <ScrollMenu Header={UpArrow} Footer={DownArrow}>\n        {items.map(({ id }) => (\n          <Card\n            title={id}\n            itemId={id} // NOTE: itemId is required for track items\n            key={id}\n            onClick={() => handleItemClick(id)}\n            selected={isItemSelected(id)}\n          />\n        ))}\n      </ScrollMenu>\n    </NoScrollbar>\n  );\n}\n\nexport default VerticalExample;\n\nfunction UpArrow() {\n  const { initComplete, isFirstItemVisible, scrollPrev } =\n    React.useContext<publicApiType>(VisibilityContext);\n  // NOTE initComplete is a hack for  prevent blinking on init\n  // Can get visibility of item only after it's rendered\n\n  return (\n    <Arrow\n      disabled={!initComplete || (initComplete && isFirstItemVisible)}\n      onClick={() => scrollPrev(undefined, undefined, 'end')}\n      testId=\"up-arrow\"\n    >\n      Up\n    </Arrow>\n  );\n}\n\nfunction DownArrow() {\n  const { initComplete, isLastItemVisible, scrollNext } =\n    React.useContext<publicApiType>(VisibilityContext);\n\n  return (\n    <Arrow\n      disabled={initComplete && isLastItemVisible}\n      onClick={() => scrollNext(undefined, undefined, 'start')}\n      testId=\"down-arrow\"\n    >\n      Down\n    </Arrow>\n  );\n}\n\nfunction Arrow({\n  children,\n  disabled,\n  onClick,\n  className,\n  testId,\n}: {\n  children: React.ReactNode;\n  disabled: boolean;\n  onClick: VoidFunction;\n  className?: String;\n  testId: String;\n}) {\n  return (\n    <ArrowButton\n      disabled={disabled}\n      onClick={onClick}\n      className={'arrow' + `-${className}`}\n      data-testid={testId}\n    >\n      {children}\n    </ArrowButton>\n  );\n}\nconst ArrowButton = styled('button')({\n  cursor: 'pointer',\n  display: 'flex',\n  flexDirection: 'column',\n  justifyContent: 'center',\n  marginBottom: '2px',\n  opacity: (props) => (props.disabled ? '0' : '1'),\n  userSelect: 'none',\n  borderRadius: '6px',\n});\n\nfunction Card({\n  onClick,\n  selected,\n  title,\n  itemId,\n}: {\n  disabled?: boolean;\n  onClick: Function;\n  selected: boolean;\n  title: string;\n  itemId: string;\n}) {\n  const visibility = React.useContext<publicApiType>(VisibilityContext);\n\n  const visible =\n    !visibility.initComplete ||\n    (visibility.initComplete && visibility.isItemVisible(itemId));\n\n  return (\n    <CardBody\n      data-cy={itemId}\n      onClick={() => onClick(visibility)}\n      onKeyDown={(ev) => {\n        ev.code === 'Enter' && onClick(visibility);\n      }}\n      data-testid=\"card\"\n      role=\"button\"\n      tabIndex={0}\n      className=\"card\"\n      visible={visible}\n      selected={selected}\n    >\n      <div className=\"header\">\n        <div>{title}</div>\n        <div className=\"visible\">visible: {JSON.stringify(visible)}</div>\n        <div className=\"selected\">selected: {JSON.stringify(!!selected)}</div>\n      </div>\n      <div className=\"background\" />\n    </CardBody>\n  );\n}\nconst CardBody = styled('div')({\n  border: '1px solid',\n  display: 'inline-block',\n  margin: '0 10px',\n  width: '160px',\n  userSelect: 'none',\n  borderRadius: '8px',\n  overflow: 'hidden',\n\n  '& .header': {\n    backgroundColor: 'white',\n  },\n\n  '& .visible': {\n    backgroundColor: (props) => (props.visible ? 'transparent' : 'gray'),\n  },\n\n  '& .background': {\n    backgroundColor: (props) => (props.selected ? 'green' : 'bisque'),\n    height: '125px',\n  },\n});\n\nconst getId = (index: number) => `${'test'}${index}`;\n\nconst getItems = () =>\n  Array(10)\n    .fill(0)\n    .map((_, ind) => ({ id: getId(ind) }));\n",availableImports:{react:react,"react-horizontal-scrolling-menu":src,"styled-jss":styled_jss.ZP},modifyEditor:setupEditor.T}),Test=(0,test.eM)({leftArrow:test.aM,rightArrow:test.wB});Vertical.parameters=_object_spread_props(_object_spread({},Vertical.parameters),{docs:_object_spread_props(_object_spread({},null===(_Vertical_parameters=Vertical.parameters)||void 0===_Vertical_parameters?void 0:_Vertical_parameters.docs),{source:_object_spread({originalSource:"createLiveEditStory({\n  code: ExampleRaw,\n  availableImports: {\n    react: React,\n    'react-horizontal-scrolling-menu': Lib,\n    'styled-jss': styled\n  },\n  modifyEditor: setupEditor\n})"},null===(_Vertical_parameters1=Vertical.parameters)||void 0===_Vertical_parameters1?void 0:null===(_Vertical_parameters_docs=_Vertical_parameters1.docs)||void 0===_Vertical_parameters_docs?void 0:_Vertical_parameters_docs.source)})}),Test.parameters=_object_spread_props(_object_spread({},Test.parameters),{docs:_object_spread_props(_object_spread({},null===(_Test_parameters=Test.parameters)||void 0===_Test_parameters?void 0:_Test_parameters.docs),{source:_object_spread({originalSource:"ScrollTest({\n  leftArrow: upArrowSelector,\n  rightArrow: downArrowSelector\n})"},null===(_Test_parameters1=Test.parameters)||void 0===_Test_parameters1?void 0:null===(_Test_parameters_docs=_Test_parameters1.docs)||void 0===_Test_parameters_docs?void 0:_Test_parameters_docs.source)})});let __namedExportsOrder=["Vertical","Test"];try{Vertical.displayName="Vertical",Vertical.__docgenInfo={description:"",displayName:"Vertical",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1_Vertical/Vertical.stories.tsx#Vertical"]={docgenInfo:Vertical.__docgenInfo,name:"Vertical",path:"stories/1_Vertical/Vertical.stories.tsx#Vertical"})}catch(__react_docgen_typescript_loader_error){}}}]);