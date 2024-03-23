"use strict";(globalThis.webpackChunkreact_horizontal_scrolling_menu=globalThis.webpackChunkreact_horizontal_scrolling_menu||[]).push([[808],{"./stories/99_performance/Performance.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Performance:()=>Performance_stories_Performance,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Performance_stories});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/storybook-addon-code-editor/dist/es/index.js"),setupEditor=__webpack_require__("./stories/setupEditor.ts"),availableImports=__webpack_require__("./stories/availableImports.ts");var dist=__webpack_require__("./dist/index.mjs"),styled_jss=(__webpack_require__("./dist/styles.css"),__webpack_require__("./node_modules/styled-jss/index.js"));function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Performance(){var items=_sliced_to_array(react.useState((function(){return getItems(5e3)})),1)[0],_React_useState1=_sliced_to_array(react.useState([]),2),selected=_React_useState1[0],setSelected=_React_useState1[1],dragState=react.useRef(new DragManager),handleDrag=react.useCallback((function(param){var scrollContainer=param.scrollContainer;return function(ev){return dragState.current.dragMove(ev,(function(posDiff){scrollContainer.current&&(scrollContainer.current.scrollLeft+=posDiff)}))}}),[]),onMouseDown=react.useCallback((function(){return dragState.current.dragStart}),[dragState]),onMouseUp=react.useCallback((function(){return dragState.current.dragStop}),[dragState]),handleItemClick=react.useCallback((function(itemId){if(dragState.current.dragging)return!1;setSelected((function(currentSelected){return currentSelected.includes(itemId)?currentSelected.filter((function(el){return el!==itemId})):currentSelected.concat(itemId)}))}),[]);return react.createElement(react.Fragment,null,react.createElement("div",{style:{marginBottom:"50px"}},5e3," items and still fast!"),react.createElement("div",{onMouseLeave:dragState.current.dragStop},react.createElement(dist.sD,{LeftArrow,RightArrow,onMouseDown,onMouseUp,onMouseMove:handleDrag,onWheel},items.map((function(param){var id=param.id;return react.createElement(Card,{title:id,itemId:id,key:id,onClick:handleItemClick,selected:selected.includes(id)})})))))}const Performance_source=Performance;var DragManager=function DragManager(){var _this=this;!function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DragManager),_define_property(this,"clicked",void 0),_define_property(this,"dragging",void 0),_define_property(this,"position",void 0),_define_property(this,"dragStart",(function(ev){_this.position=ev.clientX,_this.clicked=!0})),_define_property(this,"dragStop",(function(){window.requestAnimationFrame((function(){_this.dragging=!1,_this.clicked=!1}))})),_define_property(this,"dragMove",(function(ev,cb){var newDiff=_this.position-ev.clientX,movedEnough=Math.abs(newDiff)>5;_this.clicked&&movedEnough&&(_this.dragging=!0),_this.dragging&&movedEnough&&(_this.position=ev.clientX,cb(newDiff))})),this.clicked=!1,this.dragging=!1,this.position=0},LeftArrow=react.memo((function(){var visibility=react.useContext(dist.CI),isFirstItemVisible=visibility.useIsVisible("first",!0);return react.createElement(Arrow,{disabled:isFirstItemVisible,onClick:function(){return visibility.scrollPrev()},testId:"left-arrow"},"Left")})),RightArrow=react.memo((function(){var visibility=react.useContext(dist.CI),isLastItemVisible=visibility.useIsVisible("last",!1);return react.createElement(Arrow,{disabled:isLastItemVisible,onClick:function(){return visibility.scrollNext()},testId:"right-arrow"},"Right")}));function Arrow(param){var children=param.children,disabled=param.disabled,onClick=param.onClick,testId=param.testId;return react.createElement(ArrowButton,{disabled,onClick,"data-testid":testId},children)}var ArrowButton=(0,styled_jss.cp)("button")({cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"2px",opacity:function(props){return props.disabled?"0":"1"},userSelect:"none",borderRadius:"6px",borderWidth:"1px"}),Card=react.memo((function(param){var onClick=param.onClick,selected=param.selected,title=param.title,itemId=param.itemId,isVisible=react.useContext(dist.CI).useIsVisible(itemId,!0),handleClick=react.useCallback((function(){return onClick(itemId)}),[itemId,onClick]),onKeyDown=react.useCallback((function(ev){"Enter"===ev.code&&handleClick()}),[handleClick]);return react.createElement(CardBody,{"data-cy":itemId,onClick:handleClick,onKeyDown,"data-testid":"card",role:"button",tabIndex:0,className:"card",visible:isVisible,selected},react.createElement("div",{className:"header"},react.createElement("div",null,title),react.createElement("div",{className:"visible"},"visible: ",JSON.stringify(isVisible)),react.createElement("div",{className:"selected"},"selected: ",JSON.stringify(!!selected))),react.createElement("div",{className:"background"}))}),(function(prevProps,nextProps){return prevProps.selected===nextProps.selected&&prevProps.title===nextProps.title})),CardBody=(0,styled_jss.cp)("div")({border:"1px solid",display:"inline-block",margin:"0 10px",width:"160px",userSelect:"none",borderRadius:"8px",overflow:"hidden","& .header":{backgroundColor:"white"},"& .visible":{backgroundColor:function(props){return props.visible?"transparent":"gray"}},"& .background":{backgroundColor:function(props){return props.selected?"green":"bisque"},height:"200px"}}),getItems=function(count){return Array(count).fill(0).map((function(_,ind){return{id:(index=ind,"test".concat(index))};var index}))};function onWheel(apiObj,ev){0!==Math.abs(ev.deltaX)||Math.abs(ev.deltaY)<15?ev.stopPropagation():ev.deltaY<0?apiObj.scrollNext():apiObj.scrollPrev()}Performance.__docgenInfo={description:"",methods:[],displayName:"Performance"};const Performance_stories={title:"Examples/Performance",component:Performance_source,decorators:[function(Story){return react.createElement(Story,null)}]};var Performance_stories_Performance=(0,es.IV)({code:'function _array_like_to_array(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _array_with_holes(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _class_call_check(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError("Cannot call a class as a function");\n    }\n}\nfunction _define_property(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterable_to_array_limit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i["return"] != null) _i["return"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _non_iterable_rest() {\n    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");\n}\nfunction _sliced_to_array(arr, i) {\n    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();\n}\nfunction _unsupported_iterable_to_array(o, minLen) {\n    if (!o) return;\n    if (typeof o === "string") return _array_like_to_array(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === "Object" && o.constructor) n = o.constructor.name;\n    if (n === "Map" || n === "Set") return Array.from(n);\n    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);\n}\nimport React from "react";\nimport { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";\nimport "react-horizontal-scrolling-menu/dist/styles.css";\nimport styled from "styled-jss";\nvar ITEMS = 5000;\nexport function Performance() {\n    var _React_useState = _sliced_to_array(React.useState(function() {\n        return getItems(ITEMS);\n    }), 1), items = _React_useState[0];\n    var _React_useState1 = _sliced_to_array(React.useState([]), 2), selected = _React_useState1[0], setSelected = _React_useState1[1];\n    // NOTE: for drag by mouse\n    var dragState = React.useRef(new DragManager());\n    var handleDrag = React.useCallback(function(param) {\n        var scrollContainer = param.scrollContainer;\n        return function(ev) {\n            return dragState.current.dragMove(ev, function(posDiff) {\n                if (scrollContainer.current) {\n                    scrollContainer.current.scrollLeft += posDiff;\n                }\n            });\n        };\n    }, []);\n    var onMouseDown = React.useCallback(function() {\n        return dragState.current.dragStart;\n    }, [\n        dragState\n    ]);\n    var onMouseUp = React.useCallback(function() {\n        return dragState.current.dragStop;\n    }, [\n        dragState\n    ]);\n    var handleItemClick = React.useCallback(function(itemId) {\n        if (dragState.current.dragging) {\n            return false;\n        }\n        setSelected(function(currentSelected) {\n            return currentSelected.includes(itemId) ? currentSelected.filter(function(el) {\n                return el !== itemId;\n            }) : currentSelected.concat(itemId);\n        });\n    }, []);\n    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", {\n        style: {\n            marginBottom: "50px"\n        }\n    }, ITEMS, " items and still fast!"), /*#__PURE__*/ React.createElement("div", {\n        onMouseLeave: dragState.current.dragStop\n    }, /*#__PURE__*/ React.createElement(ScrollMenu, {\n        LeftArrow: LeftArrow,\n        RightArrow: RightArrow,\n        onMouseDown: onMouseDown,\n        onMouseUp: onMouseUp,\n        onMouseMove: handleDrag,\n        onWheel: onWheel\n    }, items.map(function(param) {\n        var id = param.id;\n        return /*#__PURE__*/ React.createElement(Card, {\n            title: id,\n            itemId: id,\n            key: id,\n            onClick: handleItemClick,\n            selected: selected.includes(id)\n        });\n    }))));\n}\nexport default Performance;\nvar DragManager = function DragManager() {\n    "use strict";\n    var _this = this;\n    _class_call_check(this, DragManager);\n    _define_property(this, "clicked", void 0);\n    _define_property(this, "dragging", void 0);\n    _define_property(this, "position", void 0);\n    _define_property(this, "dragStart", function(ev) {\n        _this.position = ev.clientX;\n        _this.clicked = true;\n    });\n    _define_property(this, "dragStop", function() {\n        window.requestAnimationFrame(function() {\n            _this.dragging = false;\n            _this.clicked = false;\n        });\n    });\n    _define_property(this, "dragMove", function(ev, cb) {\n        var newDiff = _this.position - ev.clientX;\n        var movedEnough = Math.abs(newDiff) > 5;\n        if (_this.clicked && movedEnough) {\n            _this.dragging = true;\n        }\n        if (_this.dragging && movedEnough) {\n            _this.position = ev.clientX;\n            cb(newDiff);\n        }\n    });\n    this.clicked = false;\n    this.dragging = false;\n    this.position = 0;\n};\nvar LeftArrow = /*#__PURE__*/ React.memo(function() {\n    var visibility = React.useContext(VisibilityContext);\n    var isFirstItemVisible = visibility.useIsVisible("first", true);\n    return /*#__PURE__*/ React.createElement(Arrow, {\n        disabled: isFirstItemVisible,\n        onClick: function() {\n            return visibility.scrollPrev();\n        },\n        testId: "left-arrow"\n    }, "Left");\n});\nvar RightArrow = /*#__PURE__*/ React.memo(function() {\n    var visibility = React.useContext(VisibilityContext);\n    var isLastItemVisible = visibility.useIsVisible("last", false);\n    return /*#__PURE__*/ React.createElement(Arrow, {\n        disabled: isLastItemVisible,\n        onClick: function() {\n            return visibility.scrollNext();\n        },\n        testId: "right-arrow"\n    }, "Right");\n});\nfunction Arrow(param) {\n    var children = param.children, disabled = param.disabled, onClick = param.onClick, testId = param.testId;\n    return /*#__PURE__*/ React.createElement(ArrowButton, {\n        disabled: disabled,\n        onClick: onClick,\n        "data-testid": testId\n    }, children);\n}\nvar ArrowButton = styled("button")({\n    cursor: "pointer",\n    display: "flex",\n    flexDirection: "column",\n    justifyContent: "center",\n    marginBottom: "2px",\n    opacity: function(props) {\n        return props.disabled ? "0" : "1";\n    },\n    userSelect: "none",\n    borderRadius: "6px",\n    borderWidth: "1px"\n});\nvar Card = /*#__PURE__*/ React.memo(function(param) {\n    var onClick = param.onClick, selected = param.selected, title = param.title, itemId = param.itemId;\n    var visibility = React.useContext(VisibilityContext);\n    var isVisible = visibility.useIsVisible(itemId, true);\n    var handleClick = React.useCallback(function() {\n        return onClick(itemId);\n    }, [\n        itemId,\n        onClick\n    ]);\n    var onKeyDown = React.useCallback(function(ev) {\n        ev.code === "Enter" && handleClick();\n    }, [\n        handleClick\n    ]);\n    return /*#__PURE__*/ React.createElement(CardBody, {\n        "data-cy": itemId,\n        onClick: handleClick,\n        onKeyDown: onKeyDown,\n        "data-testid": "card",\n        role: "button",\n        tabIndex: 0,\n        className: "card",\n        visible: isVisible,\n        selected: selected\n    }, /*#__PURE__*/ React.createElement("div", {\n        className: "header"\n    }, /*#__PURE__*/ React.createElement("div", null, title), /*#__PURE__*/ React.createElement("div", {\n        className: "visible"\n    }, "visible: ", JSON.stringify(isVisible)), /*#__PURE__*/ React.createElement("div", {\n        className: "selected"\n    }, "selected: ", JSON.stringify(!!selected))), /*#__PURE__*/ React.createElement("div", {\n        className: "background"\n    }));\n}, function(prevProps, nextProps) {\n    return prevProps.selected === nextProps.selected && prevProps.title === nextProps.title;\n});\nvar CardBody = styled("div")({\n    border: "1px solid",\n    display: "inline-block",\n    margin: "0 10px",\n    width: "160px",\n    userSelect: "none",\n    borderRadius: "8px",\n    overflow: "hidden",\n    "& .header": {\n        backgroundColor: "white"\n    },\n    "& .visible": {\n        backgroundColor: function(props) {\n            return props.visible ? "transparent" : "gray";\n        }\n    },\n    "& .background": {\n        backgroundColor: function(props) {\n            return props.selected ? "green" : "bisque";\n        },\n        height: "200px"\n    }\n});\nvar getId = function(index) {\n    return "test".concat(index);\n};\nvar getItems = function(count) {\n    return Array(count).fill(0).map(function(_, ind) {\n        return {\n            id: getId(ind)\n        };\n    });\n};\nfunction onWheel(apiObj, ev) {\n    // NOTE: no good standart way to distinguish touchpad scrolling gestures\n    // but can assume that gesture will affect X axis, mouse scroll only Y axis\n    // of if deltaY too small probably is it touchpad\n    var isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;\n    if (isThouchpad) {\n        ev.stopPropagation();\n        return;\n    }\n    if (ev.deltaY < 0) {\n        apiObj.scrollNext();\n    } else {\n        apiObj.scrollPrev();\n    }\n}\n',availableImports:availableImports.S,modifyEditor:setupEditor.M});Performance_stories_Performance.parameters={...Performance_stories_Performance.parameters,docs:{...Performance_stories_Performance.parameters?.docs,source:{originalSource:"createLiveEditStory({\n  code: ExampleRaw,\n  availableImports,\n  modifyEditor: setupEditor\n})",...Performance_stories_Performance.parameters?.docs?.source}}};const __namedExportsOrder=["Performance"]}}]);