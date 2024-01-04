"use strict";(globalThis.webpackChunkreact_horizontal_scrolling_menu=globalThis.webpackChunkreact_horizontal_scrolling_menu||[]).push([[681],{"./stories/MouseDrag/MouseDrag.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MouseDrag:()=>MouseDrag_stories_MouseDrag,Test:()=>Test,TestDrag:()=>TestDrag,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MouseDrag_stories});var _MouseDrag_parameters,_MouseDrag_parameters_docs,_MouseDrag_parameters1,_Test_parameters,_Test_parameters_docs,_Test_parameters1,_TestDrag_parameters,_TestDrag_parameters_docs,_TestDrag_parameters1,react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/storybook-addon-code-editor/dist/es/index.js"),styled_jss=__webpack_require__("./node_modules/styled-jss/index.js"),dist=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),jest_dist=__webpack_require__("./node_modules/@storybook/jest/dist/index.mjs"),setupEditor=__webpack_require__("./stories/setupEditor.ts"),src=__webpack_require__("./src/index.tsx"),test=__webpack_require__("./stories/test.tsx"),SizeWrapper=__webpack_require__("./stories/SizeWrapper.tsx"),dist_0=__webpack_require__("./dist/index.mjs");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var NoScrollbar=(0,styled_jss.ZP)("div")({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:"none"},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:"none","-ms-overflow-style":"none"}});function useDrag(){var _React_useState=_sliced_to_array(react.useState(!1),2),clicked=_React_useState[0],setClicked=_React_useState[1],_React_useState1=_sliced_to_array(react.useState(!1),2),dragging=_React_useState1[0],setDragging=_React_useState1[1],position=react.useRef(0);return{dragStart:react.useCallback(function(ev){position.current=ev.clientX,setClicked(!0)},[]),dragStop:react.useCallback(function(){return window.requestAnimationFrame(function(){setDragging(!1),setClicked(!1)})},[]),dragMove:function(ev,cb){var newDiff=position.current-ev.clientX,movedEnough=Math.abs(newDiff)>5;clicked&&movedEnough&&setDragging(!0),dragging&&movedEnough&&(position.current=ev.clientX,cb(newDiff))},dragging:dragging,position:position,setDragging:setDragging}}function LeftArrow(){var _React_useContext=react.useContext(dist_0.$8),initComplete=_React_useContext.initComplete,isFirstItemVisible=_React_useContext.isFirstItemVisible,scrollPrev=_React_useContext.scrollPrev;return react.createElement(Arrow,{disabled:!initComplete||initComplete&&isFirstItemVisible,onClick:function(){return scrollPrev()},testId:"left-arrow"},"Left")}function RightArrow(){var _React_useContext=react.useContext(dist_0.$8),initComplete=_React_useContext.initComplete,isLastItemVisible=_React_useContext.isLastItemVisible,scrollNext=_React_useContext.scrollNext;return react.createElement(Arrow,{disabled:initComplete&&isLastItemVisible,onClick:function(){return scrollNext()},testId:"right-arrow"},"Right")}function Arrow(param){var children=param.children,disabled=param.disabled,onClick=param.onClick,className=param.className,testId=param.testId;return react.createElement(ArrowButton,{disabled:disabled,onClick:onClick,className:"arrow"+"-".concat(className),"data-testid":testId},children)}var ArrowButton=(0,styled_jss.ZP)("button")({cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"2px",opacity:function(props){return props.disabled?"0":"1"},userSelect:"none",borderRadius:"6px"});function Card(param){var onClick=param.onClick,selected=param.selected,title=param.title,itemId=param.itemId,visibility=react.useContext(dist_0.$8),visible=!visibility.initComplete||visibility.initComplete&&visibility.isItemVisible(itemId);return react.createElement(CardBody,{"data-cy":itemId,onClick:function(){return onClick(visibility)},onKeyDown:function(ev){"Enter"===ev.code&&onClick(visibility)},"data-testid":"card",role:"button",tabIndex:0,className:"card",visible:visible,selected:selected},react.createElement("div",{className:"header"},react.createElement("div",null,title),react.createElement("div",{className:"visible"},"visible: ",JSON.stringify(visible)),react.createElement("div",{className:"selected"},"selected: ",JSON.stringify(!!selected))),react.createElement("div",{className:"background"}))}var CardBody=(0,styled_jss.ZP)("div")({border:"1px solid",display:"inline-block",margin:"0 10px",width:"160px",userSelect:"none",borderRadius:"8px",overflow:"hidden","& .header":{backgroundColor:"white"},"& .visible":{backgroundColor:function(props){return props.visible?"transparent":"gray"}},"& .background":{backgroundColor:function(props){return props.selected?"green":"bisque"},height:"200px"}});function onWheel(apiObj,ev){if(0!==Math.abs(ev.deltaX)||15>Math.abs(ev.deltaY)){ev.stopPropagation();return}ev.deltaY<0?apiObj.scrollNext():ev.deltaY>0&&apiObj.scrollPrev()}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error);return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)})}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=(t=_.trys).length>0&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}let MouseDrag_stories={title:"ScrollMenu/MouseDrag",component:function(){var items=_sliced_to_array(react.useState(function(){return Array(10).fill(0).map(function(_,ind){return{id:"test".concat(ind)}})}),1)[0],_React_useState1=_sliced_to_array(react.useState([]),2),selected=_React_useState1[0],setSelected=_React_useState1[1],_useDrag=useDrag(),dragStart=_useDrag.dragStart,dragStop=_useDrag.dragStop,dragMove=_useDrag.dragMove,dragging=_useDrag.dragging,isItemSelected=function(id){return!!selected.find(function(el){return el===id})},handleItemClick=function(itemId){if(dragging)return!1;var itemSelected=isItemSelected(itemId);setSelected(function(currentSelected){return itemSelected?currentSelected.filter(function(el){return el!==itemId}):currentSelected.concat(itemId)})};return react.createElement(NoScrollbar,{onMouseLeave:dragStop},react.createElement(dist_0.lS,{LeftArrow:LeftArrow,RightArrow:RightArrow,onMouseDown:function(){return dragStart},onMouseUp:function(){return dragStop},onMouseMove:function(param){var scrollContainer=param.scrollContainer;return function(ev){return dragMove(ev,function(posDiff){scrollContainer.current&&(scrollContainer.current.scrollLeft+=posDiff)})}},onWheel:onWheel},items.map(function(param){var id=param.id;return react.createElement(Card,{title:id,itemId:id,key:id,onClick:function(){return handleItemClick(id)},selected:isItemSelected(id)})})))},decorators:[function(Story){return react.createElement(SizeWrapper.N,null,react.createElement(Story,null))}]};var MouseDrag_stories_MouseDrag=(0,es.cj)({code:"import React from 'react';\nimport {\n  ScrollMenu,\n  VisibilityContext,\n  publicApiType,\n} from 'react-horizontal-scrolling-menu';\nimport styled from 'styled-jss';\n\nconst NoScrollbar = styled('div')({\n  '& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar': {\n    display: 'none',\n  },\n  '& .react-horizontal-scrolling-menu--scroll-container': {\n    scrollbarWidth: 'none',\n    '-ms-overflow-style': 'none',\n  },\n});\n\nexport function MouseDrag() {\n  const [items] = React.useState(() => getItems());\n  const [selected, setSelected] = React.useState<string[]>([]);\n  // NOTE: for drag by mouse\n  const { dragStart, dragStop, dragMove, dragging } = useDrag();\n  const handleDrag =\n    ({ scrollContainer }: typeof VisibilityContext) =>\n    (ev: React.MouseEvent) =>\n      dragMove(ev, (posDiff) => {\n        if (scrollContainer.current) {\n          scrollContainer.current.scrollLeft += posDiff;\n        }\n      });\n\n  const isItemSelected = (id: string): boolean =>\n    !!selected.find((el) => el === id);\n\n  const handleItemClick = (itemId: string) => {\n    if (dragging) {\n      return false;\n    }\n    const itemSelected = isItemSelected(itemId);\n\n    setSelected((currentSelected: string[]) =>\n      itemSelected\n        ? currentSelected.filter((el) => el !== itemId)\n        : currentSelected.concat(itemId)\n    );\n  };\n\n  return (\n    <NoScrollbar onMouseLeave={dragStop}>\n      <ScrollMenu\n        LeftArrow={LeftArrow}\n        RightArrow={RightArrow}\n        onMouseDown={() => dragStart}\n        onMouseUp={() => dragStop}\n        onMouseMove={handleDrag}\n        onWheel={onWheel}\n      >\n        {items.map(({ id }) => (\n          <Card\n            title={id}\n            itemId={id} // NOTE: itemId is required for track items\n            key={id}\n            onClick={() => handleItemClick(id)}\n            selected={isItemSelected(id)}\n          />\n        ))}\n      </ScrollMenu>\n    </NoScrollbar>\n  );\n}\nexport default MouseDrag;\n\nfunction useDrag() {\n  const [clicked, setClicked] = React.useState(false);\n  const [dragging, setDragging] = React.useState(false);\n  const position = React.useRef(0);\n\n  const dragStart = React.useCallback((ev: React.MouseEvent) => {\n    position.current = ev.clientX;\n    setClicked(true);\n  }, []);\n\n  const dragStop = React.useCallback(\n    () =>\n      // NOTE: need some delay so item under cursor won't be clicked\n      window.requestAnimationFrame(() => {\n        setDragging(false);\n        setClicked(false);\n      }),\n    []\n  );\n\n  const dragMove = (ev: React.MouseEvent, cb: (posDif: number) => void) => {\n    const newDiff = position.current - ev.clientX;\n\n    const movedEnough = Math.abs(newDiff) > 5;\n\n    if (clicked && movedEnough) {\n      setDragging(true);\n    }\n\n    if (dragging && movedEnough) {\n      position.current = ev.clientX;\n      cb(newDiff);\n    }\n  };\n\n  return {\n    dragStart,\n    dragStop,\n    dragMove,\n    dragging,\n    position,\n    setDragging,\n  };\n}\n\nfunction LeftArrow() {\n  const { initComplete, isFirstItemVisible, scrollPrev } =\n    React.useContext<publicApiType>(VisibilityContext);\n  // NOTE initComplete is a hack for  prevent blinking on init\n  // Can get visibility of item only after it's rendered\n\n  return (\n    <Arrow\n      disabled={!initComplete || (initComplete && isFirstItemVisible)}\n      onClick={() => scrollPrev()}\n      testId=\"left-arrow\"\n    >\n      Left\n    </Arrow>\n  );\n}\n\nfunction RightArrow() {\n  const { initComplete, isLastItemVisible, scrollNext } =\n    React.useContext<publicApiType>(VisibilityContext);\n\n  return (\n    <Arrow\n      disabled={initComplete && isLastItemVisible}\n      onClick={() => scrollNext()}\n      testId=\"right-arrow\"\n    >\n      Right\n    </Arrow>\n  );\n}\n\nfunction Arrow({\n  children,\n  disabled,\n  onClick,\n  className,\n  testId,\n}: {\n  children: React.ReactNode;\n  disabled: boolean;\n  onClick: VoidFunction;\n  className?: String;\n  testId: String;\n}) {\n  return (\n    <ArrowButton\n      disabled={disabled}\n      onClick={onClick}\n      className={'arrow' + `-${className}`}\n      data-testid={testId}\n    >\n      {children}\n    </ArrowButton>\n  );\n}\nconst ArrowButton = styled('button')({\n  cursor: 'pointer',\n  display: 'flex',\n  flexDirection: 'column',\n  justifyContent: 'center',\n  marginBottom: '2px',\n  opacity: (props) => (props.disabled ? '0' : '1'),\n  userSelect: 'none',\n  borderRadius: '6px',\n});\n\nfunction Card({\n  onClick,\n  selected,\n  title,\n  itemId,\n}: {\n  disabled?: boolean;\n  onClick: Function;\n  selected: boolean;\n  title: string;\n  itemId: string;\n}) {\n  const visibility = React.useContext<publicApiType>(VisibilityContext);\n\n  const visible =\n    !visibility.initComplete ||\n    (visibility.initComplete && visibility.isItemVisible(itemId));\n\n  return (\n    <CardBody\n      data-cy={itemId}\n      onClick={() => onClick(visibility)}\n      onKeyDown={(ev) => {\n        ev.code === 'Enter' && onClick(visibility);\n      }}\n      data-testid=\"card\"\n      role=\"button\"\n      tabIndex={0}\n      className=\"card\"\n      visible={visible}\n      selected={selected}\n    >\n      <div className=\"header\">\n        <div>{title}</div>\n        <div className=\"visible\">visible: {JSON.stringify(visible)}</div>\n        <div className=\"selected\">selected: {JSON.stringify(!!selected)}</div>\n      </div>\n      <div className=\"background\" />\n    </CardBody>\n  );\n}\nconst CardBody = styled('div')({\n  border: '1px solid',\n  display: 'inline-block',\n  margin: '0 10px',\n  width: '160px',\n  userSelect: 'none',\n  borderRadius: '8px',\n  overflow: 'hidden',\n\n  '& .header': {\n    backgroundColor: 'white',\n  },\n\n  '& .visible': {\n    backgroundColor: (props) => (props.visible ? 'transparent' : 'gray'),\n  },\n\n  '& .background': {\n    backgroundColor: (props) => (props.selected ? 'green' : 'bisque'),\n    height: '200px',\n  },\n});\n\nconst getId = (index: number) => `${'test'}${index}`;\n\nconst getItems = () =>\n  Array(10)\n    .fill(0)\n    .map((_, ind) => ({ id: getId(ind) }));\n\nfunction onWheel(apiObj: publicApiType, ev: React.WheelEvent): void {\n  // NOTE: no good standart way to distinguish touchpad scrolling gestures\n  // but can assume that gesture will affect X axis, mouse scroll only Y axis\n  // of if deltaY too small probably is it touchpad\n  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;\n\n  if (isThouchpad) {\n    ev.stopPropagation();\n    return;\n  }\n\n  if (ev.deltaY < 0) {\n    apiObj.scrollNext();\n  } else if (ev.deltaY > 0) {\n    apiObj.scrollPrev();\n  }\n}\n",availableImports:{react:react,"react-horizontal-scrolling-menu":src,"styled-jss":styled_jss.ZP},modifyEditor:setupEditor.T}),Test=(0,test.eM)(),TestDrag={play:function(){var _ref=_async_to_generator(function(param){var canvasElement,canvas,testObj;return _ts_generator(this,function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,canvas=(0,dist.uh)(canvasElement),[4,(testObj=new test.Rw(canvas,{leftArrow:"",rightArrow:""})).wait()];case 1:return _state.sent(),[4,testObj.getCards()];case 2:return[4,drag(_state.sent().slice(-1)[0],{delta:{x:-530,y:0}})];case 3:return _state.sent(),[4,testObj.wait()];case 4:return _state.sent(),[4,testObj.getVisibleCards()];case 5:return jest_dist.l.apply(void 0,[_state.sent()]).toEqual(["test3","test4","test5"]),[2]}})});return function(_){return _ref.apply(this,arguments)}}()};function isElement(obj){var prototypeStr,prototype;if("object"!=typeof obj)return!1;do{if(prototype=Object.getPrototypeOf(obj),"[object Element]"===(prototypeStr=Object.prototype.toString.call(prototype))||"[object Document]"===prototypeStr)return!0;obj=prototype}while(null!==prototype)return!1}function getElementClientCenter(element){var _element_getBoundingClientRect=element.getBoundingClientRect(),left=_element_getBoundingClientRect.left,top=_element_getBoundingClientRect.top;return{x:left+_element_getBoundingClientRect.width/2,y:top+_element_getBoundingClientRect.height/2}}function drag(element,_){return _drag.apply(this,arguments)}function _drag(){return(_drag=_async_to_generator(function(element,param){var tmp,inTo,_param_delta,delta,_param_steps,steps,_param_duration,duration,from,to,step,current,i;return _ts_generator(this,function(_state){var ms;switch(_state.label){case 0:inTo=void 0===(tmp=param.to)?void 0:tmp,delta=void 0===(_param_delta=param.delta)?void 0:_param_delta,steps=void 0===(_param_steps=param.steps)?20:_param_steps,duration=void 0===(_param_duration=param.duration)?300:_param_duration,from=getElementClientCenter(element),step={x:((to=delta?{x:from.x+delta.x,y:from.y+delta.y}:isElement(inTo)?getElementClientCenter(inTo):{x:0,y:0}).x-from.x)/steps,y:(to.y-from.y)/steps},current={clientX:from.x,clientY:from.y},dist.BX.mouseEnter(element,current),dist.BX.mouseOver(element,current),dist.BX.mouseMove(element,current),dist.BX.mouseDown(element,current),i=0,_state.label=1;case 1:if(!(i<steps))return[3,4];return current.clientX+=step.x,current.clientY+=step.y,[4,(ms=duration/steps,new Promise(function(resolve){setTimeout(resolve,ms)}))];case 2:_state.sent(),dist.BX.mouseMove(element,current),_state.label=3;case 3:return i++,[3,1];case 4:return dist.BX.mouseUp(element,current),[2]}})})).apply(this,arguments)}MouseDrag_stories_MouseDrag.parameters=_object_spread_props(_object_spread({},MouseDrag_stories_MouseDrag.parameters),{docs:_object_spread_props(_object_spread({},null===(_MouseDrag_parameters=MouseDrag_stories_MouseDrag.parameters)||void 0===_MouseDrag_parameters?void 0:_MouseDrag_parameters.docs),{source:_object_spread({originalSource:"createLiveEditStory({\n  code: ExampleRaw,\n  availableImports: {\n    react: React,\n    'react-horizontal-scrolling-menu': Lib,\n    'styled-jss': styled\n  },\n  modifyEditor: setupEditor\n})"},null===(_MouseDrag_parameters1=MouseDrag_stories_MouseDrag.parameters)||void 0===_MouseDrag_parameters1?void 0:null===(_MouseDrag_parameters_docs=_MouseDrag_parameters1.docs)||void 0===_MouseDrag_parameters_docs?void 0:_MouseDrag_parameters_docs.source)})}),Test.parameters=_object_spread_props(_object_spread({},Test.parameters),{docs:_object_spread_props(_object_spread({},null===(_Test_parameters=Test.parameters)||void 0===_Test_parameters?void 0:_Test_parameters.docs),{source:_object_spread({originalSource:"ScrollTest()"},null===(_Test_parameters1=Test.parameters)||void 0===_Test_parameters1?void 0:null===(_Test_parameters_docs=_Test_parameters1.docs)||void 0===_Test_parameters_docs?void 0:_Test_parameters_docs.source)})}),TestDrag.parameters=_object_spread_props(_object_spread({},TestDrag.parameters),{docs:_object_spread_props(_object_spread({},null===(_TestDrag_parameters=TestDrag.parameters)||void 0===_TestDrag_parameters?void 0:_TestDrag_parameters.docs),{source:_object_spread({originalSource:"{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const testObj = new TestObj(canvas, {\n      leftArrow: '',\n      rightArrow: ''\n    });\n    await testObj.wait();\n    const lastCard = (await testObj.getCards()).slice(-1)[0];\n    await drag(lastCard, {\n      delta: {\n        x: -530,\n        y: 0\n      }\n    });\n    await testObj.wait();\n    expect(await testObj.getVisibleCards()).toEqual(['test3', 'test4', 'test5']);\n  }\n}"},null===(_TestDrag_parameters1=TestDrag.parameters)||void 0===_TestDrag_parameters1?void 0:null===(_TestDrag_parameters_docs=_TestDrag_parameters1.docs)||void 0===_TestDrag_parameters_docs?void 0:_TestDrag_parameters_docs.source)})});let __namedExportsOrder=["MouseDrag","Test","TestDrag"];try{MouseDrag_stories_MouseDrag.displayName="MouseDrag",MouseDrag_stories_MouseDrag.__docgenInfo={description:"",displayName:"MouseDrag",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/MouseDrag/MouseDrag.stories.tsx#MouseDrag"]={docgenInfo:MouseDrag_stories_MouseDrag.__docgenInfo,name:"MouseDrag",path:"stories/MouseDrag/MouseDrag.stories.tsx#MouseDrag"})}catch(__react_docgen_typescript_loader_error){}},"./stories/SizeWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SizeWrapper});var SizeWrapper=(0,__webpack_require__("./node_modules/styled-jss/index.js").ZP)("div")({maxWidth:"650px",maxHeight:"400px"})}}]);