"use strict";(globalThis.webpackChunkreact_horizontal_scrolling_menu=globalThis.webpackChunkreact_horizontal_scrolling_menu||[]).push([[72],{"./stories/7_progress/Progress.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Progress:()=>Progress_stories_Progress,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Progress_stories});var dist=__webpack_require__("./node_modules/@storybook/jest/dist/index.mjs"),testing_library_dist=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/storybook-addon-code-editor/dist/es/index.js"),SizeWrapper=__webpack_require__("./stories/SizeWrapper.tsx"),availableImports=__webpack_require__("./stories/availableImports.ts"),setupEditor=__webpack_require__("./stories/setupEditor.ts"),test=__webpack_require__("./stories/test.tsx"),styled_jss=__webpack_require__("./node_modules/styled-jss/index.js"),dist_0=__webpack_require__("./dist/index.mjs");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function Progress(){var items=_sliced_to_array(react.useState(function(){return getItems(30)}),1)[0],_React_useState1=_sliced_to_array(react.useState([]),2),selected=_React_useState1[0],setSelected=_React_useState1[1],isItemSelected=function(id){return!!selected.find(function(el){return el===id})},handleItemClick=function(itemId){var itemSelected=isItemSelected(itemId);setSelected(function(currentSelected){return itemSelected?currentSelected.filter(function(el){return el!==itemId}):currentSelected.concat(itemId)})};return react.createElement("div",null,react.createElement(NoScrollbar,null,react.createElement(dist_0.sD,{LeftArrow:LeftArrow,RightArrow:RightArrow,onWheel:onWheel,Footer:Footer},items.map(function(param){var id=param.id;return react.createElement(Card,{title:id,itemId:id,key:id,onClick:function(){return handleItemClick(id)},selected:isItemSelected(id)})}))))}__webpack_require__("./dist/styles.css");var Footer=function(){var visibility=react.useContext(dist_0.CI),items=visibility.items,_React_useState=_sliced_to_array(react.useState([]),2),visible=_React_useState[0],setVisible=_React_useState[1];if(react.useEffect(function(){if(items){var timer,cb=function(){clearTimeout(timer),timer=setTimeout(function(){return requestAnimationFrame(function(){return setVisible(items.getVisible())})},200)};return items.subscribe("onUpdate",cb),function(){clearTimeout(timer),items.unsubscribe("onUpdate",cb)}}},[items]),!visible.length)return null;var total=null==items?void 0:items.size,visibleItemsLen=visible.length,currentPage=Math.ceil(+visible.slice(-1)[0][1].index/visibleItemsLen),pages=Array(Math.ceil(total/visibleItemsLen)).fill(1).map(function(_,ind){return ind+1}),scrollToPage=function(page){visibility.scrollToItem(visibility.getItemByIndex(page*visibleItemsLen-1))};return react.createElement(react.Fragment,null,react.createElement(FooterContainer,null,pages.map(function(page){return react.createElement("button",{key:page,"data-testid":"page-".concat(page),onClick:function(){return scrollToPage(page)},onKeyDown:function(ev){"Space"===ev.code&&scrollToPage(page)},className:"page-btn ".concat(page===currentPage?"active":"")},page)})),react.createElement(FooterContainer,null,react.createElement("div",null,react.createElement("div",null,"Items on the left: ",react.createElement("span",{"data-testid":"items-left"},(currentPage-1)*visibleItemsLen)),react.createElement("div",null,"Items on the right:"," ",react.createElement("span",{"data-testid":"items-right"},total-visibleItemsLen*currentPage)))))},FooterContainer=(0,styled_jss.cp)("div")({"&":{display:"flex",justifyContent:"center",gap:"5px",margin:"10px"},"& button.active":{color:"red"}});let Progress_source=Progress;var NoScrollbar=(0,styled_jss.cp)("div")({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:"none"},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:"none","-ms-overflow-style":"none"}});function LeftArrow(){var visibility=react.useContext(dist_0.CI),disabled=visibility.useLeftArrowVisible();return react.createElement(Arrow,{disabled:disabled,onClick:function(){return visibility.scrollPrev()},testId:"left-arrow"},"Left")}function RightArrow(){var visibility=react.useContext(dist_0.CI),disabled=visibility.useRightArrowVisible();return react.createElement(Arrow,{disabled:disabled,onClick:function(){return visibility.scrollNext()},testId:"right-arrow"},"Right")}function Arrow(param){var children=param.children,disabled=param.disabled,onClick=param.onClick,className=param.className,testId=param.testId;return react.createElement(ArrowButton,{disabled:disabled,onClick:onClick,className:"arrow"+"-".concat(className),"data-testid":testId},children)}var ArrowButton=(0,styled_jss.cp)("button")({cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"2px",opacity:function(props){return props.disabled?"0":"1"},userSelect:"none",borderRadius:"6px",borderWidth:"1px"});function Card(param){var onClick=param.onClick,selected=param.selected,title=param.title,itemId=param.itemId,visibility=react.useContext(dist_0.CI),isVisible=visibility.useIsVisible(itemId,!0);return react.createElement(CardBody,{"data-cy":itemId,onClick:function(){return onClick(visibility)},onKeyDown:function(ev){"Enter"===ev.code&&onClick(visibility)},"data-testid":"card",role:"button",tabIndex:0,className:"card",visible:isVisible,selected:selected},react.createElement("div",{className:"header"},react.createElement("div",null,title),react.createElement("div",{className:"visible"},"visible: ",JSON.stringify(isVisible)),react.createElement("div",{className:"selected"},"selected: ",JSON.stringify(!!selected))),react.createElement("div",{className:"background"}))}var CardBody=(0,styled_jss.cp)("div")({border:"1px solid",display:"inline-block",margin:"0 10px",width:"160px",userSelect:"none",borderRadius:"8px",overflow:"hidden","& .header":{backgroundColor:"white"},"& .visible":{backgroundColor:function(props){return props.visible?"transparent":"gray"}},"& .background":{backgroundColor:function(props){return props.selected?"green":"bisque"},height:"200px"}}),getItems=function(){var count=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return Array(count).fill(0).map(function(_,ind){return{id:"test".concat(ind)}})};function onWheel(apiObj,ev){if(0!==Math.abs(ev.deltaX)||15>Math.abs(ev.deltaY)){ev.stopPropagation();return}ev.deltaY<0?apiObj.scrollNext():apiObj.scrollPrev()}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error);return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)})}}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=(t=_.trys).length>0&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}let Progress_stories={title:"Examples/Progress",component:Progress_source,decorators:[function(Story){return react.createElement(SizeWrapper.q,null,react.createElement(Story,null))}]};var Progress_stories_Progress=(0,es.IV)({code:"import React from 'react';\nimport styled from 'styled-jss';\n\nimport {\n  ScrollMenu,\n  VisibilityContext,\n  type publicApiType,\n} from 'react-horizontal-scrolling-menu';\n\nimport 'react-horizontal-scrolling-menu/dist/styles.css';\n\nexport function Progress() {\n  const [items] = React.useState(() => getItems(30));\n  const [selected, setSelected] = React.useState<string[]>([]);\n\n  const isItemSelected = (id: string): boolean =>\n    !!selected.find((el) => el === id);\n\n  const handleItemClick = (itemId: string) => {\n    const itemSelected = isItemSelected(itemId);\n\n    setSelected((currentSelected: string[]) =>\n      itemSelected\n        ? currentSelected.filter((el) => el !== itemId)\n        : currentSelected.concat(itemId),\n    );\n  };\n\n  return (\n    <div>\n      <NoScrollbar>\n        <ScrollMenu\n          LeftArrow={LeftArrow}\n          RightArrow={RightArrow}\n          onWheel={onWheel}\n          Footer={Footer}\n        >\n          {items.map(({ id }) => (\n            <Card\n              title={id}\n              itemId={id} // NOTE: itemId is required for track items\n              key={id}\n              onClick={() => handleItemClick(id)}\n              selected={isItemSelected(id)}\n            />\n          ))}\n        </ScrollMenu>\n      </NoScrollbar>\n    </div>\n  );\n}\n\nconst Footer = () => {\n  const visibility = React.useContext<publicApiType>(VisibilityContext);\n  const { items } = visibility;\n  const [visible, setVisible] = React.useState<[string, { index: string }][]>(\n    [],\n  );\n\n  // Need to update this component\n  // listening to 'onUpdate' event with some debounce\n  React.useEffect(() => {\n    if (items) {\n      let timer: NodeJS.Timeout;\n      const cb = () => {\n        clearTimeout(timer);\n        timer = setTimeout(\n          () => requestAnimationFrame(() => setVisible(items.getVisible())),\n          200,\n        );\n      };\n      items.subscribe('onUpdate', cb);\n\n      return () => {\n        clearTimeout(timer);\n        items.unsubscribe('onUpdate', cb);\n      };\n    }\n  }, [items]);\n\n  if (!visible.length) {\n    return null;\n  }\n\n  const total = items?.size;\n  const visibleItemsLen = visible.length;\n  const totalPages = Math.ceil(total / visibleItemsLen);\n  const lastVisibleInd = +visible.slice(-1)[0][1].index;\n  const currentPage = Math.ceil(lastVisibleInd / visibleItemsLen);\n  const pages = Array(totalPages)\n    .fill(1)\n    .map((_, ind) => ind + 1);\n  const itemsLeft = (currentPage - 1) * visibleItemsLen;\n  const itemsRight = total - visibleItemsLen * currentPage;\n\n  const scrollToPage = (page: number) => {\n    const itemInd = page * visibleItemsLen - 1;\n    visibility.scrollToItem(visibility.getItemByIndex(itemInd));\n  };\n\n  return (\n    <>\n      <FooterContainer>\n        {pages.map((page) => (\n          <button\n            key={page}\n            data-testid={`page-${page}`}\n            onClick={() => scrollToPage(page)}\n            onKeyDown={(ev) => {\n              if (ev.code === 'Space') {\n                scrollToPage(page);\n              }\n            }}\n            className={`page-btn ${page === currentPage ? 'active' : ''}`}\n          >\n            {page}\n          </button>\n        ))}\n      </FooterContainer>\n      <FooterContainer>\n        <div>\n          <div>\n            Items on the left: <span data-testid=\"items-left\">{itemsLeft}</span>\n          </div>\n          <div>\n            Items on the right:{' '}\n            <span data-testid=\"items-right\">{itemsRight}</span>\n          </div>\n        </div>\n      </FooterContainer>\n    </>\n  );\n};\n\nconst FooterContainer = styled('div')({\n  '&': {\n    display: 'flex',\n    justifyContent: 'center',\n    gap: '5px',\n    margin: '10px',\n  },\n  '& button.active': {\n    color: 'red',\n  },\n});\n\nexport default Progress;\n\nconst NoScrollbar = styled('div')({\n  '& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar': {\n    display: 'none',\n  },\n  '& .react-horizontal-scrolling-menu--scroll-container': {\n    scrollbarWidth: 'none',\n    '-ms-overflow-style': 'none',\n  },\n});\n\nfunction LeftArrow() {\n  const visibility = React.useContext<publicApiType>(VisibilityContext);\n\n  const disabled = visibility.useLeftArrowVisible();\n\n  return (\n    <Arrow\n      disabled={disabled}\n      onClick={() => visibility.scrollPrev()}\n      testId=\"left-arrow\"\n    >\n      Left\n    </Arrow>\n  );\n}\n\nfunction RightArrow() {\n  const visibility = React.useContext<publicApiType>(VisibilityContext);\n\n  const disabled = visibility.useRightArrowVisible();\n\n  return (\n    <Arrow\n      disabled={disabled}\n      onClick={() => visibility.scrollNext()}\n      testId=\"right-arrow\"\n    >\n      Right\n    </Arrow>\n  );\n}\n\nfunction Arrow({\n  children,\n  disabled,\n  onClick,\n  className,\n  testId,\n}: {\n  children: React.ReactNode;\n  disabled: boolean;\n  onClick: VoidFunction;\n  className?: string;\n  testId: string;\n}) {\n  return (\n    <ArrowButton\n      disabled={disabled}\n      onClick={onClick}\n      className={'arrow' + `-${className}`}\n      data-testid={testId}\n    >\n      {children}\n    </ArrowButton>\n  );\n}\nconst ArrowButton = styled('button')({\n  cursor: 'pointer',\n  display: 'flex',\n  flexDirection: 'column',\n  justifyContent: 'center',\n  marginBottom: '2px',\n  opacity: (props) => (props.disabled ? '0' : '1'),\n  userSelect: 'none',\n  borderRadius: '6px',\n  borderWidth: '1px',\n});\n\nfunction Card({\n  onClick,\n  selected,\n  title,\n  itemId,\n}: {\n  onClick: (context: publicApiType) => void;\n  selected: boolean;\n  title: string;\n  itemId: string;\n}) {\n  const visibility = React.useContext<publicApiType>(VisibilityContext);\n  const isVisible = visibility.useIsVisible(itemId, true);\n\n  return (\n    <CardBody\n      data-cy={itemId}\n      onClick={() => onClick(visibility)}\n      onKeyDown={(ev: React.KeyboardEvent) => {\n        ev.code === 'Enter' && onClick(visibility);\n      }}\n      data-testid=\"card\"\n      role=\"button\"\n      tabIndex={0}\n      className=\"card\"\n      visible={isVisible}\n      selected={selected}\n    >\n      <div className=\"header\">\n        <div>{title}</div>\n        <div className=\"visible\">visible: {JSON.stringify(isVisible)}</div>\n        <div className=\"selected\">selected: {JSON.stringify(!!selected)}</div>\n      </div>\n      <div className=\"background\" />\n    </CardBody>\n  );\n}\nconst CardBody = styled('div')({\n  border: '1px solid',\n  display: 'inline-block',\n  margin: '0 10px',\n  width: '160px',\n  userSelect: 'none',\n  borderRadius: '8px',\n  overflow: 'hidden',\n\n  '& .header': {\n    backgroundColor: 'white',\n  },\n\n  '& .visible': {\n    backgroundColor: (props) => (props.visible ? 'transparent' : 'gray'),\n  },\n\n  '& .background': {\n    backgroundColor: (props) => (props.selected ? 'green' : 'bisque'),\n    height: '200px',\n  },\n});\n\nconst getId = (index: number) => `${'test'}${index}`;\n\nconst getItems = (count: number = 10) =>\n  Array(count)\n    .fill(0)\n    .map((_, ind) => ({ id: getId(ind) }));\n\nfunction onWheel(apiObj: publicApiType, ev: React.WheelEvent): void {\n  // NOTE: no good standart way to distinguish touchpad scrolling gestures\n  // but can assume that gesture will affect X axis, mouse scroll only Y axis\n  // of if deltaY too small probably is it touchpad\n  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;\n\n  if (isThouchpad) {\n    ev.stopPropagation();\n    return;\n  }\n\n  if (ev.deltaY < 0) {\n    apiObj.scrollNext();\n  } else {\n    apiObj.scrollPrev();\n  }\n}\n",availableImports:availableImports.S,modifyEditor:setupEditor.M}),Test={play:function(){var _ref=_async_to_generator(function(param){var canvasElement,canvas,testObj,activePages,activePages1,activePages2;return _ts_generator(this,function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,canvas=(0,testing_library_dist.Cu)(canvasElement),[4,(testObj=new test.KB(canvas,{leftArrow:test.y8,rightArrow:test.S0})).wait()];case 1:return _state.sent(),[4,testObj.getVisibleCardsKeys()];case 2:return dist.c.apply(void 0,[_state.sent()]).toEqual(["test0","test1","test2"]),[4,canvas.getByTestId("items-left").textContent];case 3:return dist.c.apply(void 0,[_state.sent()]).toEqual("0"),[4,canvas.getByTestId("items-right").textContent];case 4:return dist.c.apply(void 0,[_state.sent()]).toEqual("27"),[4,canvas.queryAllByTestId(/page-/)];case 5:return dist.c.apply(void 0,[_state.sent()]).toHaveLength(10),[4,testObj.wait()];case 6:return _state.sent(),[4,canvas.queryAllByTestId(/page-/).filter(function(el){return el.className.includes("active")})];case 7:return activePages=_state.sent(),(0,dist.c)(activePages[0].textContent).toEqual("1"),[4,testing_library_dist.gr.click(canvas.getByTestId("page-5"))];case 8:case 9:case 17:return _state.sent(),[4,testObj.wait()];case 10:case 18:return _state.sent(),[4,canvas.queryAllByTestId(/page-/)];case 11:case 19:return dist.c.apply(void 0,[_state.sent()]).toHaveLength(10),[4,testObj.getVisibleCardsKeys()];case 12:return dist.c.apply(void 0,[_state.sent()]).toEqual(["test12","test13","test14"]),[4,canvas.queryAllByTestId(/page-/).filter(function(el){return el.className.includes("active")})];case 13:return activePages1=_state.sent(),(0,dist.c)(activePages1[0].textContent).toEqual("5"),[4,canvas.getByTestId("items-left").textContent];case 14:return dist.c.apply(void 0,[_state.sent()]).toEqual("12"),[4,canvas.getByTestId("items-right").textContent];case 15:return dist.c.apply(void 0,[_state.sent()]).toEqual("15"),[4,testObj.wait()];case 16:return _state.sent(),[4,testing_library_dist.gr.click(canvas.getByTestId("page-10"))];case 20:return dist.c.apply(void 0,[_state.sent()]).toEqual(["test27","test28","test29"]),[4,testObj.wait(1200)];case 21:return _state.sent(),[4,canvas.queryAllByTestId(/page-/).filter(function(el){return el.className.includes("active")})];case 22:return activePages2=_state.sent(),(0,dist.c)(activePages2[0].textContent).toEqual("10"),[4,canvas.getByTestId("items-left").textContent];case 23:return dist.c.apply(void 0,[_state.sent()]).toEqual("27"),[4,canvas.getByTestId("items-right").textContent];case 24:return dist.c.apply(void 0,[_state.sent()]).toEqual("0"),[2]}})});return function(_){return _ref.apply(this,arguments)}}()};Progress_stories_Progress.parameters={...Progress_stories_Progress.parameters,docs:{...Progress_stories_Progress.parameters?.docs,source:{originalSource:"createLiveEditStory({\n  code: ExampleRaw,\n  availableImports,\n  modifyEditor: setupEditor\n})",...Progress_stories_Progress.parameters?.docs?.source}}},Test.parameters={...Test.parameters,docs:{...Test.parameters?.docs,source:{originalSource:"{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const testObj = new TestObj(canvas, {\n      leftArrow: leftArrowSelector,\n      rightArrow: rightArrowSelector\n    });\n    await testObj.wait();\n    expect(await testObj.getVisibleCardsKeys()).toEqual(['test0', 'test1', 'test2']);\n    expect(await canvas.getByTestId('items-left').textContent).toEqual('0');\n    expect(await canvas.getByTestId('items-right').textContent).toEqual('27');\n    expect(await canvas.queryAllByTestId(/page-/)).toHaveLength(10);\n    await testObj.wait();\n    const activePages = await canvas.queryAllByTestId(/page-/).filter(el => el.className.includes('active'));\n    expect(activePages[0].textContent).toEqual('1');\n    await userEvent.click(canvas.getByTestId('page-5'));\n    await testObj.wait();\n    await testObj.wait();\n    expect(await canvas.queryAllByTestId(/page-/)).toHaveLength(10);\n    expect(await testObj.getVisibleCardsKeys()).toEqual(['test12', 'test13', 'test14']);\n    const activePages1 = await canvas.queryAllByTestId(/page-/).filter(el => el.className.includes('active'));\n    expect(activePages1[0].textContent).toEqual('5');\n    expect(await canvas.getByTestId('items-left').textContent).toEqual('12');\n    expect(await canvas.getByTestId('items-right').textContent).toEqual('15');\n    await testObj.wait();\n    await userEvent.click(canvas.getByTestId('page-10'));\n    await testObj.wait();\n    expect(await canvas.queryAllByTestId(/page-/)).toHaveLength(10);\n    expect(await testObj.getVisibleCardsKeys()).toEqual(['test27', 'test28', 'test29']);\n    await testObj.wait(1200);\n    const activePages2 = await canvas.queryAllByTestId(/page-/).filter(el => el.className.includes('active'));\n    expect(activePages2[0].textContent).toEqual('10');\n    expect(await canvas.getByTestId('items-left').textContent).toEqual('27');\n    expect(await canvas.getByTestId('items-right').textContent).toEqual('0');\n  }\n}",...Test.parameters?.docs?.source}}};let __namedExportsOrder=["Progress","Test"];try{Progress_stories_Progress.displayName="Progress",Progress_stories_Progress.__docgenInfo={description:"",displayName:"Progress",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/7_progress/Progress.stories.tsx#Progress"]={docgenInfo:Progress_stories_Progress.__docgenInfo,name:"Progress",path:"stories/7_progress/Progress.stories.tsx#Progress"})}catch(__react_docgen_typescript_loader_error){}},"./stories/SizeWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>SizeWrapper});var SizeWrapper=(0,__webpack_require__("./node_modules/styled-jss/index.js").cp)("div")({maxWidth:"650px",maxHeight:"400px"})}}]);