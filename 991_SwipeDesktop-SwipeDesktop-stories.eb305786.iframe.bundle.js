"use strict";(globalThis.webpackChunkreact_horizontal_scrolling_menu=globalThis.webpackChunkreact_horizontal_scrolling_menu||[]).push([[424],{"./stories/991_SwipeDesktop/SwipeDesktop.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SwipeDesktop:()=>SwipeDesktop_stories_SwipeDesktop,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SwipeDesktop_stories});var dist=__webpack_require__("./node_modules/@storybook/jest/dist/index.mjs"),testing_library_dist=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/storybook-addon-code-editor/dist/es/index.js"),SizeWrapper=__webpack_require__("./stories/SizeWrapper.tsx"),availableImports=__webpack_require__("./stories/availableImports.ts"),setupEditor=__webpack_require__("./stories/setupEditor.ts"),test=__webpack_require__("./stories/test.tsx"),styled_jss=__webpack_require__("./node_modules/styled-jss/index.js"),dist_0=__webpack_require__("./dist/index.mjs");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}__webpack_require__("./dist/styles.css");var useSwipe=function(){var pos=react.useRef({start:{x:0,y:0},end:{x:0,y:0}});return{onMouseDown:function(){return function(ev){pos.current.start={x:ev.clientX,y:ev.clientY}}},onMouseMove:function(){return function(ev){pos.current.end={x:ev.clientX,y:ev.clientY}}},onMouseUp:function(apiObj){return function(){var horDiff=pos.current.end.x-pos.current.start.x;horDiff<0&&Math.abs(horDiff)>50&&apiObj.scrollNext(),horDiff>0&&Math.abs(horDiff)>50&&apiObj.scrollPrev()}}}},NoScrollbar=(0,styled_jss.cp)("div")({"&":{position:"relative"},"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:"none"},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:"none","-ms-overflow-style":"none"}});function LeftArrow(){var visibility=react.useContext(dist_0.CI),isFirstItemVisible=visibility.useIsVisible("first",!0);return react.createElement(Arrow,{disabled:isFirstItemVisible,onClick:function(){return visibility.scrollPrev()},testId:"left-arrow"},"Left")}function RightArrow(){var visibility=react.useContext(dist_0.CI),isLastItemVisible=visibility.useIsVisible("last",!1);return react.createElement(Arrow,{disabled:isLastItemVisible,onClick:function(){return visibility.scrollNext()},testId:"right-arrow"},"Right")}function Arrow(param){var children=param.children,disabled=param.disabled,onClick=param.onClick,className=param.className,testId=param.testId;return react.createElement(ArrowButton,{disabled:disabled,onClick:onClick,className:"arrow"+"-".concat(className),"data-testid":testId},children)}var ArrowButton=(0,styled_jss.cp)("button")({cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"2px",opacity:function(props){return props.disabled?"0":"1"},userSelect:"none",borderRadius:"6px",borderWidth:"1px"});function Card(param){var onClick=param.onClick,selected=param.selected,title=param.title,itemId=param.itemId,visibility=react.useContext(dist_0.CI),isVisible=visibility.useIsVisible(itemId,!0);return react.createElement(CardBody,{"data-cy":itemId,onClick:function(){return onClick(visibility)},onKeyDown:function(ev){"Enter"===ev.code&&onClick(visibility)},"data-testid":"card",role:"button",tabIndex:0,className:"card",visible:isVisible,selected:selected},react.createElement("div",{className:"header"},react.createElement("div",null,title),react.createElement("div",{className:"visible"},"visible: ",JSON.stringify(isVisible)),react.createElement("div",{className:"selected"},"selected: ",JSON.stringify(!!selected))),react.createElement("div",{className:"background"}))}var CardBody=(0,styled_jss.cp)("div")({border:"1px solid",display:"inline-block",margin:"0 10px",width:"160px",userSelect:"none",borderRadius:"8px",overflow:"hidden","& .header":{backgroundColor:"white"},"& .visible":{backgroundColor:function(props){return props.visible?"transparent":"gray"}},"& .background":{backgroundColor:function(props){return props.selected?"green":"bisque"},height:"200px"}});function onWheel(apiObj,ev){if(0!==Math.abs(ev.deltaX)||15>Math.abs(ev.deltaY)){ev.stopPropagation();return}ev.deltaY<0?apiObj.scrollNext():apiObj.scrollPrev()}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error);return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)})}}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=(t=_.trys).length>0&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}let SwipeDesktop_stories={title:"Examples/SwipeDesktop",component:function(){var items=_sliced_to_array(react.useState(function(){return Array(20).fill(0).map(function(_,ind){return{id:"test".concat(ind)}})}),1)[0],_React_useState1=_sliced_to_array(react.useState([]),2),selected=_React_useState1[0],setSelected=_React_useState1[1],isItemSelected=function(id){return!!selected.find(function(el){return el===id})},handleItemClick=function(itemId){var itemSelected=isItemSelected(itemId);setSelected(function(currentSelected){return itemSelected?currentSelected.filter(function(el){return el!==itemId}):currentSelected.concat(itemId)})},_useSwipe=useSwipe(),onMouseDown=_useSwipe.onMouseDown,onMouseMove=_useSwipe.onMouseMove,onMouseUp=_useSwipe.onMouseUp,ref=react.useRef(null);return react.useEffect(function(){var onTouchMove=function(ev){ev.preventDefault()},node=ref.current.scrollContainer.current;return null==node||node.addEventListener("touchmove",onTouchMove,{passive:!1}),function(){return null==node?void 0:node.removeEventListener("touchmove",onTouchMove)}},[ref]),react.createElement(NoScrollbar,null,react.createElement(dist_0.sD,{LeftArrow:LeftArrow,RightArrow:RightArrow,onWheel:onWheel,onMouseDown:onMouseDown,onMouseMove:onMouseMove,onMouseUp:onMouseUp,apiRef:ref},items.map(function(param){var id=param.id;return react.createElement(Card,{title:id,itemId:id,key:id,onClick:function(){return handleItemClick(id)},selected:isItemSelected(id)})})))},decorators:[function(Story){return react.createElement(SizeWrapper.q,null,react.createElement(Story,null))}]};var SwipeDesktop_stories_SwipeDesktop=(0,es.IV)({code:"import React from 'react';\nimport styled from 'styled-jss';\n\nimport {\n  ScrollMenu,\n  VisibilityContext,\n  type publicApiType,\n} from 'react-horizontal-scrolling-menu';\n\nimport 'react-horizontal-scrolling-menu/dist/styles.css';\n\nexport function SwipeDesktop() {\n  const [items] = React.useState(() => getItems());\n  const [selected, setSelected] = React.useState<string[]>([]);\n\n  const isItemSelected = (id: string): boolean =>\n    !!selected.find((el) => el === id);\n\n  const handleItemClick = (itemId: string) => {\n    const itemSelected = isItemSelected(itemId);\n\n    setSelected((currentSelected: string[]) =>\n      itemSelected\n        ? currentSelected.filter((el) => el !== itemId)\n        : currentSelected.concat(itemId),\n    );\n  };\n\n  const { onMouseDown, onMouseMove, onMouseUp } = useSwipe();\n\n  const ref = React.useRef<publicApiType>(null);\n\n  // NOTE: that ugly hack needed cause React v18 changed how it handle events\n  React.useEffect(() => {\n    const onTouchMove = (ev: TouchEvent) => {\n      ev.preventDefault();\n    };\n    const node = ref.current.scrollContainer.current;\n    node?.addEventListener('touchmove', onTouchMove, { passive: false });\n\n    return () => node?.removeEventListener('touchmove', onTouchMove);\n  }, [ref]);\n\n  return (\n    <NoScrollbar>\n      <ScrollMenu\n        LeftArrow={LeftArrow}\n        RightArrow={RightArrow}\n        onWheel={onWheel}\n        onMouseDown={onMouseDown}\n        onMouseMove={onMouseMove}\n        onMouseUp={onMouseUp}\n        apiRef={ref}\n      >\n        {items.map(({ id }) => (\n          <Card\n            title={id}\n            itemId={id} // NOTE: itemId is required for track items\n            key={id}\n            onClick={() => handleItemClick(id)}\n            selected={isItemSelected(id)}\n          />\n        ))}\n      </ScrollMenu>\n    </NoScrollbar>\n  );\n}\n\nexport default SwipeDesktop;\n\nexport const useSwipe = () => {\n  const pos = React.useRef({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 } });\n\n  // the required distance between touchStart and touchEnd to be detected as a swipe\n  const minSwipeDistance = 50;\n\n  const onMouseDown = () => (ev: React.MouseEvent) => {\n    pos.current.start = { x: ev.clientX, y: ev.clientY };\n  };\n\n  const onMouseMove = () => (ev: React.MouseEvent) => {\n    pos.current.end = { x: ev.clientX, y: ev.clientY };\n  };\n\n  const onMouseUp = (apiObj: publicApiType) => () => {\n    // disable it for native touch screen devices\n    // if ('ontouchstart' in window) { return false }\n\n    const horDiff = pos.current.end.x - pos.current.start.x;\n    // const vertDiff = pos.current.end.y - pos.current.start.y;\n    const toLeft = horDiff < 0 && Math.abs(horDiff) > minSwipeDistance;\n    const toRight = horDiff > 0 && Math.abs(horDiff) > minSwipeDistance;\n\n    // for vertical menu\n    // const toTop =  vertDiff < 0 && Math.abs(vertDiff) > minSwipeDistance;\n    // const toBottom = vertDiff > 0 && Math.abs(vertDiff) > minSwipeDistance;\n\n    if (toLeft) {\n      apiObj.scrollNext();\n    }\n    if (toRight) {\n      apiObj.scrollPrev();\n    }\n  };\n\n  return { onMouseDown, onMouseMove, onMouseUp };\n};\n\nconst NoScrollbar = styled('div')({\n  '&': {\n    position: 'relative',\n  },\n  '& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar': {\n    display: 'none',\n  },\n  '& .react-horizontal-scrolling-menu--scroll-container': {\n    scrollbarWidth: 'none',\n    '-ms-overflow-style': 'none',\n  },\n});\n\nfunction LeftArrow() {\n  const visibility = React.useContext<publicApiType>(VisibilityContext);\n  const isFirstItemVisible = visibility.useIsVisible('first', true);\n\n  return (\n    <Arrow\n      disabled={isFirstItemVisible}\n      onClick={() => visibility.scrollPrev()}\n      testId=\"left-arrow\"\n    >\n      Left\n    </Arrow>\n  );\n}\n\nfunction RightArrow() {\n  const visibility = React.useContext<publicApiType>(VisibilityContext);\n  const isLastItemVisible = visibility.useIsVisible('last', false);\n\n  return (\n    <Arrow\n      disabled={isLastItemVisible}\n      onClick={() => visibility.scrollNext()}\n      testId=\"right-arrow\"\n    >\n      Right\n    </Arrow>\n  );\n}\n\nfunction Arrow({\n  children,\n  disabled,\n  onClick,\n  className,\n  testId,\n}: {\n  children: React.ReactNode;\n  disabled: boolean;\n  onClick: VoidFunction;\n  className?: string;\n  testId: string;\n}) {\n  return (\n    <ArrowButton\n      disabled={disabled}\n      onClick={onClick}\n      className={'arrow' + `-${className}`}\n      data-testid={testId}\n    >\n      {children}\n    </ArrowButton>\n  );\n}\nconst ArrowButton = styled('button')({\n  cursor: 'pointer',\n  display: 'flex',\n  flexDirection: 'column',\n  justifyContent: 'center',\n  marginBottom: '2px',\n  opacity: (props) => (props.disabled ? '0' : '1'),\n  userSelect: 'none',\n  borderRadius: '6px',\n  borderWidth: '1px',\n});\n\nfunction Card({\n  onClick,\n  selected,\n  title,\n  itemId,\n}: {\n  onClick: (context: publicApiType) => void;\n  selected: boolean;\n  title: string;\n  itemId: string;\n}) {\n  const visibility = React.useContext<publicApiType>(VisibilityContext);\n  const isVisible = visibility.useIsVisible(itemId, true);\n\n  return (\n    <CardBody\n      data-cy={itemId}\n      onClick={() => onClick(visibility)}\n      onKeyDown={(ev: React.KeyboardEvent) => {\n        ev.code === 'Enter' && onClick(visibility);\n      }}\n      data-testid=\"card\"\n      role=\"button\"\n      tabIndex={0}\n      className=\"card\"\n      visible={isVisible}\n      selected={selected}\n    >\n      <div className=\"header\">\n        <div>{title}</div>\n        <div className=\"visible\">visible: {JSON.stringify(isVisible)}</div>\n        <div className=\"selected\">selected: {JSON.stringify(!!selected)}</div>\n      </div>\n      <div className=\"background\" />\n    </CardBody>\n  );\n}\nconst CardBody = styled('div')({\n  border: '1px solid',\n  display: 'inline-block',\n  margin: '0 10px',\n  width: '160px',\n  userSelect: 'none',\n  borderRadius: '8px',\n  overflow: 'hidden',\n\n  '& .header': {\n    backgroundColor: 'white',\n  },\n\n  '& .visible': {\n    backgroundColor: (props) => (props.visible ? 'transparent' : 'gray'),\n  },\n\n  '& .background': {\n    backgroundColor: (props) => (props.selected ? 'green' : 'bisque'),\n    height: '200px',\n  },\n});\n\nconst getId = (index: number) => `${'test'}${index}`;\n\nconst getItems = () =>\n  Array(20)\n    .fill(0)\n    .map((_, ind) => ({ id: getId(ind) }));\n\nfunction onWheel(apiObj: publicApiType, ev: React.WheelEvent): void {\n  // NOTE: no good standart way to distinguish touchpad scrolling gestures\n  // but can assume that gesture will affect X axis, mouse scroll only Y axis\n  // of if deltaY too small probably is it touchpad\n  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;\n\n  if (isThouchpad) {\n    ev.stopPropagation();\n    return;\n  }\n\n  if (ev.deltaY < 0) {\n    apiObj.scrollNext();\n  } else {\n    apiObj.scrollPrev();\n  }\n}\n",availableImports:availableImports.S,modifyEditor:setupEditor.M}),Test={play:function(){var _ref=_async_to_generator(function(param){var canvasElement,canvas,testObj,lastCard;return _ts_generator(this,function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,canvas=(0,testing_library_dist.Cu)(canvasElement),[4,(testObj=new test.KB(canvas,{leftArrow:"",rightArrow:""})).wait()];case 1:return _state.sent(),[4,testObj.getVisibleCards()];case 2:return lastCard=_state.sent().slice(-1)[0],[4,(0,test.YP)(lastCard,{delta:{x:-100,y:0},duration:150,steps:5})];case 3:case 6:return _state.sent(),[4,testObj.wait()];case 4:case 7:return _state.sent(),[4,testObj.getVisibleCardsKeys()];case 5:return dist.c.apply(void 0,[_state.sent()]).toEqual(["test3","test4","test5"]),[4,(0,test.YP)(lastCard,{delta:{x:100,y:0},duration:150,steps:5})];case 8:return dist.c.apply(void 0,[_state.sent()]).toEqual(["test0","test1","test2"]),[2]}})});return function(_){return _ref.apply(this,arguments)}}()};SwipeDesktop_stories_SwipeDesktop.parameters={...SwipeDesktop_stories_SwipeDesktop.parameters,docs:{...SwipeDesktop_stories_SwipeDesktop.parameters?.docs,source:{originalSource:"createLiveEditStory({\n  code: ExampleRaw,\n  availableImports,\n  modifyEditor: setupEditor\n})",...SwipeDesktop_stories_SwipeDesktop.parameters?.docs?.source}}},Test.parameters={...Test.parameters,docs:{...Test.parameters?.docs,source:{originalSource:"{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const testObj = new TestObj(canvas, {\n      leftArrow: '',\n      rightArrow: ''\n    });\n    await testObj.wait();\n    const lastCard = (await testObj.getVisibleCards()).slice(-1)[0];\n    await drag(lastCard, {\n      delta: {\n        x: -100,\n        y: 0\n      },\n      duration: 150,\n      steps: 5\n    });\n    await testObj.wait();\n    expect(await testObj.getVisibleCardsKeys()).toEqual(['test3', 'test4', 'test5']);\n    await drag(lastCard, {\n      delta: {\n        x: 100,\n        y: 0\n      },\n      duration: 150,\n      steps: 5\n    });\n    await testObj.wait();\n    expect(await testObj.getVisibleCardsKeys()).toEqual(['test0', 'test1', 'test2']);\n  }\n}",...Test.parameters?.docs?.source}}};let __namedExportsOrder=["SwipeDesktop","Test"];try{SwipeDesktop_stories_SwipeDesktop.displayName="SwipeDesktop",SwipeDesktop_stories_SwipeDesktop.__docgenInfo={description:"",displayName:"SwipeDesktop",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/991_SwipeDesktop/SwipeDesktop.stories.tsx#SwipeDesktop"]={docgenInfo:SwipeDesktop_stories_SwipeDesktop.__docgenInfo,name:"SwipeDesktop",path:"stories/991_SwipeDesktop/SwipeDesktop.stories.tsx#SwipeDesktop"})}catch(__react_docgen_typescript_loader_error){}},"./stories/SizeWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>SizeWrapper});var SizeWrapper=(0,__webpack_require__("./node_modules/styled-jss/index.js").cp)("div")({maxWidth:"650px",maxHeight:"400px"})}}]);