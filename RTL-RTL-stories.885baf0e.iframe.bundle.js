"use strict";(globalThis.webpackChunkreact_horizontal_scrolling_menu=globalThis.webpackChunkreact_horizontal_scrolling_menu||[]).push([[936],{"./stories/RTL/RTL.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RTL:()=>RTL_stories_RTL,TestNonRTL:()=>TestNonRTL,TestRTL:()=>TestRTL,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RTL_stories});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/storybook-addon-code-editor/dist/es/index.js"),dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),setupEditor=__webpack_require__("./stories/setupEditor.ts"),availableImports=__webpack_require__("./stories/availableImports.ts"),test=__webpack_require__("./stories/test.tsx"),SizeWrapper=__webpack_require__("./stories/SizeWrapper.tsx");var _navigator_userAgent_toLowerCase,_navigator_userAgent_toLowerCase1,_navigator_userAgent,_navigator,dist_0=__webpack_require__("./dist/index.mjs"),styled_jss=(__webpack_require__("./dist/styles.css"),__webpack_require__("./node_modules/styled-jss/index.js"));function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function RTL(){var _React_useState=_sliced_to_array(react.useState(!0),2),_$RTL=_React_useState[0],setRTL=_React_useState[1],items=_sliced_to_array(react.useState((function(){return getItems()})),1)[0],_React_useState2=_sliced_to_array(react.useState([]),2),selected=_React_useState2[0],setSelected=_React_useState2[1],isItemSelected=function(id){return!!selected.find((function(el){return el===id}))},onWheelHandler=react.useCallback((function(apiObj,ev){return function onWheel(apiObj,ev,RTL){var isThouchpad=0!==Math.abs(ev.deltaX)||Math.abs(ev.deltaY)<15;if(isThouchpad)return void ev.stopPropagation();ev.deltaY<0?apiObj.scrollPrev("smooth",RTL&&isFirefox?"start":"end"):apiObj.scrollNext("smooth",RTL&&isFirefox?"end":"start")}(apiObj,ev,_$RTL)}),[_$RTL]);return react.createElement(react.Fragment,null,react.createElement(NoScrollbar,null,react.createElement(dist_0.sD,{LeftArrow:_$RTL?react.createElement(RightArrow,{RTL:_$RTL}):react.createElement(LeftArrow,{RTL:_$RTL}),RightArrow:_$RTL?react.createElement(LeftArrow,{RTL:_$RTL}):react.createElement(RightArrow,{RTL:_$RTL}),onWheel:onWheelHandler,RTL:_$RTL,noPolyfill:!0},items.map((function(param){var id=param.id;return react.createElement(Card,{title:id,itemId:id,key:id,onClick:function(){return itemSelected=isItemSelected(itemId=id),void setSelected((function(currentSelected){return itemSelected?currentSelected.filter((function(el){return el!==itemId})):currentSelected.concat(itemId)}));var itemId,itemSelected},selected:isItemSelected(id)})})))),react.createElement(Checkbox,{label:"RTL",value:_$RTL,onClick:setRTL}))}const RTL_source=RTL;var isFirefox=(null===(_navigator=navigator)||void 0===_navigator||null===(_navigator_userAgent=_navigator.userAgent)||void 0===_navigator_userAgent||null===(_navigator_userAgent_toLowerCase1=_navigator_userAgent.toLowerCase)||void 0===_navigator_userAgent_toLowerCase1||null===(_navigator_userAgent_toLowerCase=_navigator_userAgent_toLowerCase1.call(_navigator_userAgent))||void 0===_navigator_userAgent_toLowerCase?void 0:_navigator_userAgent_toLowerCase.indexOf("firefox"))>-1;function LeftArrow(param){var _$RTL=param.RTL,visibility=react.useContext(dist_0.CI),isFirstItemVisible=visibility.useIsVisible("first",!0);return react.createElement(Arrow,{disabled:isFirstItemVisible,onClick:function(){return visibility.scrollPrev("smooth",_$RTL&&isFirefox?"start":"end")},testId:_$RTL?"right-arrow":"left-arrow"},_$RTL?"Right":"Left")}function RightArrow(param){var _$RTL=param.RTL,visibility=react.useContext(dist_0.CI),isLastItemVisible=visibility.useIsVisible("last",!1);return react.createElement(Arrow,{disabled:isLastItemVisible,onClick:function(){return visibility.scrollNext("smooth",_$RTL&&isFirefox?"end":"start")},testId:_$RTL?"left-arrow":"right-arrow"},_$RTL?"Left":"Right")}function Arrow(param){var children=param.children,disabled=param.disabled,onClick=param.onClick,className=param.className,testId=param.testId;return react.createElement(ArrowButton,{disabled,onClick,className:"arrow"+"-".concat(className),"data-testid":testId},children)}var ArrowButton=(0,styled_jss.cp)("button")({cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"2px",opacity:function(props){return props.disabled?"0":"1"},userSelect:"none",borderRadius:"6px",borderWidth:"1px"}),Checkbox=function(param){var onClick=param.onClick,value=param.value,label=param.label;return react.createElement(CheckboxWrapper,null,react.createElement(BigCheckbox,{type:"checkbox",id:label,onChange:function(ev){var _ev_target;return onClick(null==ev||null===(_ev_target=ev.target)||void 0===_ev_target?void 0:_ev_target.checked)},checked:value,defaultChecked:value}),react.createElement("label",{htmlFor:label},label))},CheckboxWrapper=(0,styled_jss.cp)("div")({display:"flex",alignItems:"center",margin:"16px","& *:first-child":{marginRight:"4px"}}),BigCheckbox=(0,styled_jss.cp)("input")({height:"24px",width:"24px",cursor:"pointer"});function Card(param){var onClick=param.onClick,selected=param.selected,title=param.title,itemId=param.itemId,visibility=react.useContext(dist_0.CI),isVisible=visibility.useIsVisible(itemId,!0);return react.createElement(CardBody,{"data-cy":itemId,onClick:function(){return onClick(visibility)},onKeyDown:function(ev){"Enter"===ev.code&&onClick(visibility)},"data-testid":"card",role:"button",tabIndex:0,className:"card",visible:isVisible,selected},react.createElement("div",{className:"header"},react.createElement("div",null,title),react.createElement("div",{className:"visible"},"visible: ",JSON.stringify(isVisible)),react.createElement("div",{className:"selected"},"selected: ",JSON.stringify(!!selected))),react.createElement("div",{className:"background"}))}var CardBody=(0,styled_jss.cp)("div")({border:"1px solid",display:"inline-block",margin:"0 10px",width:"160px",userSelect:"none",borderRadius:"8px",overflow:"hidden","& .header":{backgroundColor:"white"},"& .visible":{backgroundColor:function(props){return props.visible?"transparent":"gray"}},"& .background":{backgroundColor:function(props){return props.selected?"green":"bisque"},height:"200px"}}),NoScrollbar=(0,styled_jss.cp)("div")({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:"none"},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:"none","-ms-overflow-style":"none"}}),getItems=function(){return Array(10).fill(0).map((function(_,ind){return{id:(index=ind,"test".concat(index))};var index}))};function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}RTL.__docgenInfo={description:"",methods:[],displayName:"RTL"};const RTL_stories={title:"Examples/RTL",component:RTL_source,decorators:[function(Story){return react.createElement(SizeWrapper.q,null,react.createElement(Story,null))}]};var _ref,RTL_stories_RTL=(0,es.IV)({code:'function _array_like_to_array(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _array_with_holes(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterable_to_array_limit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i["return"] != null) _i["return"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _non_iterable_rest() {\n    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");\n}\nfunction _sliced_to_array(arr, i) {\n    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();\n}\nfunction _unsupported_iterable_to_array(o, minLen) {\n    if (!o) return;\n    if (typeof o === "string") return _array_like_to_array(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === "Object" && o.constructor) n = o.constructor.name;\n    if (n === "Map" || n === "Set") return Array.from(n);\n    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);\n}\nvar _navigator_userAgent_toLowerCase, _navigator_userAgent_toLowerCase1, _navigator_userAgent, _navigator;\nimport React from "react";\nimport { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";\nimport "react-horizontal-scrolling-menu/dist/styles.css";\nimport styled from "styled-jss";\nexport function RTL() {\n    var _React_useState = _sliced_to_array(React.useState(true), 2), _$RTL = _React_useState[0], setRTL = _React_useState[1];\n    var _React_useState1 = _sliced_to_array(React.useState(function() {\n        return getItems();\n    }), 1), items = _React_useState1[0];\n    var _React_useState2 = _sliced_to_array(React.useState([]), 2), selected = _React_useState2[0], setSelected = _React_useState2[1];\n    var isItemSelected = function(id) {\n        return !!selected.find(function(el) {\n            return el === id;\n        });\n    };\n    var handleItemClick = function(itemId) {\n        var itemSelected = isItemSelected(itemId);\n        setSelected(function(currentSelected) {\n            return itemSelected ? currentSelected.filter(function(el) {\n                return el !== itemId;\n            }) : currentSelected.concat(itemId);\n        });\n    };\n    var onWheelHandler = React.useCallback(function(apiObj, ev) {\n        return onWheel(apiObj, ev, _$RTL);\n    }, [\n        _$RTL\n    ]);\n    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(NoScrollbar, null, /*#__PURE__*/ React.createElement(ScrollMenu, {\n        LeftArrow: _$RTL ? /*#__PURE__*/ React.createElement(RightArrow, {\n            RTL: _$RTL\n        }) : /*#__PURE__*/ React.createElement(LeftArrow, {\n            RTL: _$RTL\n        }),\n        RightArrow: _$RTL ? /*#__PURE__*/ React.createElement(LeftArrow, {\n            RTL: _$RTL\n        }) : /*#__PURE__*/ React.createElement(RightArrow, {\n            RTL: _$RTL\n        }),\n        onWheel: onWheelHandler,\n        RTL: _$RTL,\n        noPolyfill: true\n    }, items.map(function(param) {\n        var id = param.id;\n        return /*#__PURE__*/ React.createElement(Card, {\n            title: id,\n            itemId: id,\n            key: id,\n            onClick: function() {\n                return handleItemClick(id);\n            },\n            selected: isItemSelected(id)\n        });\n    }))), /*#__PURE__*/ React.createElement(Checkbox, {\n        label: "RTL",\n        value: _$RTL,\n        onClick: setRTL\n    }));\n}\nexport default RTL;\nexport var isFirefox = ((_navigator = navigator) === null || _navigator === void 0 ? void 0 : (_navigator_userAgent = _navigator.userAgent) === null || _navigator_userAgent === void 0 ? void 0 : (_navigator_userAgent_toLowerCase1 = _navigator_userAgent.toLowerCase) === null || _navigator_userAgent_toLowerCase1 === void 0 ? void 0 : (_navigator_userAgent_toLowerCase = _navigator_userAgent_toLowerCase1.call(_navigator_userAgent)) === null || _navigator_userAgent_toLowerCase === void 0 ? void 0 : _navigator_userAgent_toLowerCase.indexOf("firefox")) > -1;\nfunction LeftArrow(param) {\n    var _$RTL = param.RTL;\n    var visibility = React.useContext(VisibilityContext);\n    var isFirstItemVisible = visibility.useIsVisible("first", true);\n    return /*#__PURE__*/ React.createElement(Arrow, {\n        disabled: isFirstItemVisible,\n        onClick: function() {\n            return visibility.scrollPrev("smooth", _$RTL && isFirefox ? "start" : "end");\n        },\n        testId: _$RTL ? "right-arrow" : "left-arrow"\n    }, _$RTL ? "Right" : "Left");\n}\nfunction RightArrow(param) {\n    var _$RTL = param.RTL;\n    var visibility = React.useContext(VisibilityContext);\n    var isLastItemVisible = visibility.useIsVisible("last", false);\n    return /*#__PURE__*/ React.createElement(Arrow, {\n        disabled: isLastItemVisible,\n        onClick: function() {\n            return visibility.scrollNext("smooth", _$RTL && isFirefox ? "end" : "start");\n        },\n        testId: _$RTL ? "left-arrow" : "right-arrow"\n    }, _$RTL ? "Left" : "Right");\n}\nfunction Arrow(param) {\n    var children = param.children, disabled = param.disabled, onClick = param.onClick, className = param.className, testId = param.testId;\n    return /*#__PURE__*/ React.createElement(ArrowButton, {\n        disabled: disabled,\n        onClick: onClick,\n        className: "arrow" + "-".concat(className),\n        "data-testid": testId\n    }, children);\n}\nvar ArrowButton = styled("button")({\n    cursor: "pointer",\n    display: "flex",\n    flexDirection: "column",\n    justifyContent: "center",\n    marginBottom: "2px",\n    opacity: function(props) {\n        return props.disabled ? "0" : "1";\n    },\n    userSelect: "none",\n    borderRadius: "6px",\n    borderWidth: "1px"\n});\nvar Checkbox = function(param) {\n    var onClick = param.onClick, value = param.value, label = param.label;\n    return /*#__PURE__*/ React.createElement(CheckboxWrapper, null, /*#__PURE__*/ React.createElement(BigCheckbox, {\n        type: "checkbox",\n        id: label,\n        onChange: function(ev) {\n            var _ev_target;\n            return onClick(ev === null || ev === void 0 ? void 0 : (_ev_target = ev.target) === null || _ev_target === void 0 ? void 0 : _ev_target.checked);\n        },\n        checked: value,\n        defaultChecked: value\n    }), /*#__PURE__*/ React.createElement("label", {\n        htmlFor: label\n    }, label));\n};\nvar CheckboxWrapper = styled("div")({\n    display: "flex",\n    alignItems: "center",\n    margin: "16px",\n    "& *:first-child": {\n        marginRight: "4px"\n    }\n});\nvar BigCheckbox = styled("input")({\n    height: "24px",\n    width: "24px",\n    cursor: "pointer"\n});\nfunction Card(param) {\n    var onClick = param.onClick, selected = param.selected, title = param.title, itemId = param.itemId;\n    var visibility = React.useContext(VisibilityContext);\n    var isVisible = visibility.useIsVisible(itemId, true);\n    return /*#__PURE__*/ React.createElement(CardBody, {\n        "data-cy": itemId,\n        onClick: function() {\n            return onClick(visibility);\n        },\n        onKeyDown: function(ev) {\n            ev.code === "Enter" && onClick(visibility);\n        },\n        "data-testid": "card",\n        role: "button",\n        tabIndex: 0,\n        className: "card",\n        visible: isVisible,\n        selected: selected\n    }, /*#__PURE__*/ React.createElement("div", {\n        className: "header"\n    }, /*#__PURE__*/ React.createElement("div", null, title), /*#__PURE__*/ React.createElement("div", {\n        className: "visible"\n    }, "visible: ", JSON.stringify(isVisible)), /*#__PURE__*/ React.createElement("div", {\n        className: "selected"\n    }, "selected: ", JSON.stringify(!!selected))), /*#__PURE__*/ React.createElement("div", {\n        className: "background"\n    }));\n}\nvar CardBody = styled("div")({\n    border: "1px solid",\n    display: "inline-block",\n    margin: "0 10px",\n    width: "160px",\n    userSelect: "none",\n    borderRadius: "8px",\n    overflow: "hidden",\n    "& .header": {\n        backgroundColor: "white"\n    },\n    "& .visible": {\n        backgroundColor: function(props) {\n            return props.visible ? "transparent" : "gray";\n        }\n    },\n    "& .background": {\n        backgroundColor: function(props) {\n            return props.selected ? "green" : "bisque";\n        },\n        height: "200px"\n    }\n});\nvar NoScrollbar = styled("div")({\n    "& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar": {\n        display: "none"\n    },\n    "& .react-horizontal-scrolling-menu--scroll-container": {\n        scrollbarWidth: "none",\n        "-ms-overflow-style": "none"\n    }\n});\nvar getId = function(index) {\n    return "test".concat(index);\n};\nvar getItems = function() {\n    return Array(10).fill(0).map(function(_, ind) {\n        return {\n            id: getId(ind)\n        };\n    });\n};\nfunction onWheel(apiObj, ev, RTL) {\n    var isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;\n    if (isThouchpad) {\n        ev.stopPropagation();\n        return;\n    }\n    if (ev.deltaY < 0) {\n        apiObj.scrollPrev("smooth", RTL && isFirefox ? "start" : "end");\n    } else {\n        apiObj.scrollNext("smooth", RTL && isFirefox ? "end" : "start");\n    }\n}\n',availableImports:availableImports.S,modifyEditor:setupEditor.M}),TestRTL={play:(_ref=_async_to_generator((function(param){var canvasElement,canvas,testObj;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,canvas=(0,dist.Cu)(canvasElement),testObj=new test.KB(canvas,{leftArrow:test.S0,rightArrow:test.y8}),[4,canvas.getByLabelText("RTL")];case 1:return dist.ct.apply(void 0,[_state.sent()]).toBeChecked(),[4,testObj.isReady()];case 2:return _state.sent(),[4,(0,test.Mp)(testObj)];case 3:return _state.sent(),[2]}}))})),function(_){return _ref.apply(this,arguments)})},TestNonRTL={play:function(){var _ref=_async_to_generator((function(param){var canvasElement,canvas,testObj;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,canvas=(0,dist.Cu)(canvasElement),testObj=new test.KB(canvas,{leftArrow:test.y8,rightArrow:test.S0}),[4,canvas.getByLabelText("RTL").click()];case 1:return _state.sent(),[4,canvas.getByLabelText("RTL")];case 2:return dist.ct.apply(void 0,[_state.sent()]).not.toBeChecked(),[4,testObj.isReady()];case 3:return _state.sent(),[4,(0,test.Mp)(testObj)];case 4:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()};RTL_stories_RTL.parameters={...RTL_stories_RTL.parameters,docs:{...RTL_stories_RTL.parameters?.docs,source:{originalSource:"createLiveEditStory({\n  code: ExampleRaw,\n  availableImports,\n  modifyEditor: setupEditor\n})",...RTL_stories_RTL.parameters?.docs?.source}}},TestRTL.parameters={...TestRTL.parameters,docs:{...TestRTL.parameters?.docs,source:{originalSource:"{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = (within(canvasElement) as Canvas);\n    const testObj = new TestObj(canvas, {\n      leftArrow: rightArrowSelector,\n      rightArrow: leftArrowSelector\n    });\n    expect(await canvas.getByLabelText('RTL')).toBeChecked();\n    await testObj.isReady();\n    await scrollSmokeTest(testObj);\n  }\n}",...TestRTL.parameters?.docs?.source}}},TestNonRTL.parameters={...TestNonRTL.parameters,docs:{...TestNonRTL.parameters?.docs,source:{originalSource:"{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = (within(canvasElement) as Canvas);\n    const testObj = new TestObj(canvas, {\n      leftArrow: leftArrowSelector,\n      rightArrow: rightArrowSelector\n    });\n    await canvas.getByLabelText('RTL').click();\n    expect(await canvas.getByLabelText('RTL')).not.toBeChecked();\n    await testObj.isReady();\n    await scrollSmokeTest(testObj);\n  }\n}",...TestNonRTL.parameters?.docs?.source}}};const __namedExportsOrder=["RTL","TestRTL","TestNonRTL"]},"./stories/SizeWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>SizeWrapper});var SizeWrapper=(0,__webpack_require__("./node_modules/styled-jss/index.js").cp)("div")({maxWidth:"650px",maxHeight:"400px"})}}]);