module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=require("react")},function(e,t,n){e.exports=n(5)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={alignCenter:!0,arrowClass:"scroll-menu-arrow",clickWhenDrag:!1,dragging:!0,data:[],firstPageOffset:0,innerWrapperClass:"menu-wrapper--inner",itemClass:"menu-item-wrapper",itemClassActive:"active",hideArrows:!1,hideSingleArrow:!1,lastPageOffset:0,menuItems:[],menuPos:0,menuWidth:0,menuClass:"horizontal-menu",scrollToSelected:!1,selected:0,startDragTranslate:null,translate:0,transition:.4,wrapperClass:"menu-wrapper",wheel:!0,xPoint:0,xDraggedDistance:null},a={alignCenter:r.alignCenter,arrowClass:r.arrowClass,innerWrapperClass:r.innerWrapperClass,itemClass:r.itemClass,itemClassActive:r.itemClassActive,hideArrows:r.hideArrows,hideSingleArrow:r.hideSingleArrow,clickWhenDrag:r.clickWhenDrag,data:r.data,dragging:r.dragging,scrollToSelected:r.scrollToSelected,selected:r.selected,transition:r.transition,translate:r.translate,menuClass:r.menuClass,wheel:r.wheel,wrapperClass:r.wrapperClass};t.defaultSetting=r,t.defaultProps=a,t.defaultMenuStyle={display:"flex",alignItems:"center",userSelect:"none"},t.defaultWrapperStyle={overflow:"hidden",userSelect:"none"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(4));t.default=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.propTypes=t.ScrollMenu=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n(0)),s=f(n(1)),l=n(7),o=n(2),u=n(8);function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var c=t.ScrollMenu=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={dragging:!1,xPoint:o.defaultSetting.xPoint,translate:(0,l.validateTranslate)(n.props.translate,o.defaultSetting.translate),startDragTranslate:o.defaultSetting.startDragTranslate,xDraggedDistance:o.defaultSetting.xDraggedDistance,leftArrowVisible:!1,rightArrowVisible:!0},n.setRef=function(e){n.ref=e},n.setWrapperRef=function(e){n.ref.menuWrapper=e},n.checkSingleArrowVisibility=function(e){var t=e.translate,r=void 0===t?n.state.translate:t,a=n.props.hideSingleArrow,i=!0,s=!0,l=n.menuItems;if(a&&l){var o=n.getVisibleItems({offset:r});i=!o.includes(l[0]),s=!o.includes(l.slice(-1)[0])}return{leftArrowVisible:i,rightArrowVisible:s}},n.setSingleArrowVisibility=function(){var e=n.state,t=e.leftArrowVisible,r=e.rightArrowVisible,a=n.checkSingleArrowVisibility({}),i=a.leftArrowVisible,s=a.rightArrowVisible;t===i&&r===s||n.setState({leftArrowVisible:i,rightArrowVisible:s})},n.onLoad=function(){n.setInitial(),n.mounted=!0},n.setInitial=function(){var e=n.props,t=e.selected,a=e.data,i=e.translate,s=e.scrollToSelected;if(!a||!a.length)return!1;var u=n.getMenuItems(a.length),f=a.find(function(e){return e.key===t}),c={menuItems:u,selected:f&&-1!==f?f.key:o.defaultSetting.selected};for(var g in c)n[g]=c[g];var m=n.updateWidth({items:u,offset:0,translate:0}),p=(m.translate,d(m,["translate"]));for(var h in p)n[h]=p[h];var v=n.getAlignItemsOffset(),w=!!(0,l.translateIsValid)(v)&&(0,l.formatTranslate)(v),b=r({},n.state),y=n.checkSingleArrowVisibility({translate:w}),C=y.leftArrowVisible,I=y.rightArrowVisible;(b.leftArrowVisible=C,b.rightArrowVisible=I,(0,l.translateIsValid)(i)||(b.translate=w),s)&&(n.isScrollNeeded({itemId:t,translate:b.translate})&&(b.translate=(0,l.formatTranslate)(n.getOffsetToItemByKey(t))));n.setState(r({},b))},n.isScrollNeeded=function(e){var t=e.itemId,r=e.translate,a=void 0===r?n.state.translate:r,i=n.getItemIndexByKey(t);if(-1===i)return!1;var s=n.menuItems,l=n.getVisibleItems({items:s,offset:a}),o=s[i];return!l.includes(o)},n.scrollTo=function(e){var t=n.state.translate,r=n.getOffsetToItemByKey(e);if(n.selected=e,t===r)return!1;n.setState({translate:r})},n.getMenuItems=function(e){return Object.entries(n.ref).filter(function(e){return e[0].includes("menuitem")}).slice(0,e).filter(Boolean)},n.getItemsWidth=function(e){var t=e.items,r=void 0===t?n.menuItems:t;return(r&&r.items||r).map(function(e){return e[1]}).filter(Boolean).reduce(function(e,t){return e+(0,l.getClientRect)(t).width},0)},n.getWidth=function(e){var t=e.items,r=window&&window.innerWidth,a=(0,l.getClientRect)(n.ref.menuWrapper);return{wWidth:r,menuPos:a.x,menuWidth:a.width,allItemsWidth:n.getItemsWidth({items:t})}},n.updateWidth=function(e){var t=e.items,a=void 0===t?n.menuItems:t,i=d(e,["items"]),s=n.props.alignCenter,l=n.getWidth({items:a});return r({},l,s?n.getPagesOffsets(r({items:a},l,i)):{})},n.getPagesOffsets=function(e){var t=e.items,r=void 0===t?n.menuItems:t,a=e.allItemsWidth,i=void 0===a?n.allItemsWidth:a,s=e.wWidth,o=void 0===s?n.wWidth:s,u=e.menuPos,f=void 0===u?n.menuPos:u,d=e.menuWidth,c=void 0===d?n.menuWidth:d,g=e.translate,m=void 0===g?n.state.translate:g,p=e.offset,h=void 0===p?n.state.translate:p,v=n.props.alignCenter,w=n.getVisibleItems({offset:h,items:r,wWidth:o,menuPos:f,menuWidth:c}),b=(0,l.formatTranslate)(n.getCenterOffset({items:w,menuWidth:c})),y=n.getVisibleItems({items:r,offset:-i+c,wWidth:o,menuPos:f,menuWidth:c}),C=(0,l.formatTranslate)(n.getCenterOffset({items:y,menuWidth:c})),I=0===m&&v?b:m;return n.firstPageOffset=b,n.lastPageOffset=C,{firstPageOffset:b,lastPageOffset:C,translate:(0,l.formatTranslate)(I)}},n.onItemClick=function(e){var t=n.props,r=t.clickWhenDrag,a=t.onSelect;if(n.state.xDraggedDistance>5&&!r)return!1;n.selected=e,a&&a(e)},n.getVisibleItems=function(e){var t=e.items,r=void 0===t?n.menuItems:t,a=e.wWidth,i=void 0===a?n.wWidth:a,s=e.menuPos,o=void 0===s?n.menuPos:s,u=e.menuWidth,f=void 0===u?n.menuWidth:u,d=e.offset,c=void 0===d?n.state.translate:d,g=e.translate,m=void 0===g?n.state.translate:g;return(r.items||r).filter(function(e){var t=(0,l.getClientRect)(e[1]).width,a=n.getItemInd(r,e),s=n.getOffsetToItemByIndex({index:a,menuItems:r,translate:m});return n.elemVisible({x:s,elWidth:t,wWidth:i,menuPos:o,menuWidth:f,offset:c})})},n.elemVisible=function(e){var t=e.x,r=e.offset,a=void 0===r?0:r,i=e.elWidth,s=e.wWidth,l=void 0===s?n.wWidth:s,o=e.menuPos,u=void 0===o?n.menuPos:o,f=e.menuWidth,d=void 0===f?n.menuWidth:f,c=t+a;return c>=u-1&&c+i<=l-(l-(u+d))+1},n.getItemInd=function(e,t){return e&&t?e.findIndex(function(e){return e[0]===t[0]}):0},n.getNextItemInd=function(e,t){var r=n.menuItems;if(e){if(!t.length)return 0}else if(!t.length)return r.length;var a=e?n.getItemInd(r,t[0])-1:n.getItemInd(r,t.slice(-1)[0])+1;return a<0?0:a},n.getOffsetToItemByKey=function(e){var t=n.state.translate;if(!e)return t;var r=n.getItemIndexByKey(e);if(-1===r)return t;var a=n.menuPos,i=n.props.alignCenter;t=n.getOffsetToItemByIndex({index:r});var s=n.getVisibleItems({offset:-t});return t=-(t-a-(i?n.getCenterOffset({items:s}):o.defaultSetting.translate)),n.itBeforeStart(t)&&(t=n.getOffsetAtStart()),n.itAfterEnd(t)&&(t=n.getOffsetAtEnd()),(0,l.formatTranslate)(t)},n.getItemIndexByKey=function(e){return e?n.props.data.findIndex(function(t){return t.key===e}):-1},n.getOffsetToItemByIndex=function(e){var t=e.index,r=e.menuItems,a=void 0===r?n.menuItems:r,i=e.translate,s=void 0===i?n.state.translate:i;if(!a.length)return 0;var o=t>=a.length?a.length-1:t;return+(0,l.getClientRect)(a[o][1]).x-s},n.getScrollRightOffset=function(e,t){var r=n.props.alignCenter,a=n.menuPos,i=n.lastPageOffset,s=n.getNextItem(e&&e.slice(-1)[0]?e.slice(-1)[0][0]:t.slice(-1)[0][0]),l=t.findIndex(function(e){return e[0]===s[0]}),o=n.getOffsetToItemByIndex({index:l,menuItems:t})-a,u=n.getVisibleItems({items:t,offset:-o});if(u.includes(t.slice(-1)[0]))return r?o+i:o;return r?o-n.getCenterOffset({items:u}):o},n.getScrollLeftOffset=function(e,t){var r=n.props.alignCenter,a=n.menuPos,i=n.menuWidth,s=n.firstPageOffset,l=n.getPrevItem(e&&e[0]?e[0][0]:t[0][0]),o=t.findIndex(function(e){return e[0]===l[0]}),u=n.getOffsetToItemByIndex({index:o,menuItems:t})-a-(i-n.getItemsWidth({items:[l]})),f=n.getVisibleItems({items:t,offset:-u});if(f.includes(t[0]))return r?-s:0;return r?u+n.getCenterOffset({items:f}):u},n.getAlignItemsOffset=function(){var e=n.menuWidth,t=n.allItemsWidth,r=n.menuItems,a=n.firstPageOffset,i=n.lastPageOffset,s=n.props.alignCenter,u=n.state.translate;if(t<e)return n.handleArrowClick(!s);var f=n.getVisibleItems({})||[],d=f.includes(r[0]),c=f.includes(r.slice(-1)[0]);if(!d&&!c)return(0,l.formatTranslate)(u);if(d){var g=s?a:o.defaultSetting.translate;return(0,l.formatTranslate)(g)}var m=t-e,p=s?-m-i:-m;return(0,l.formatTranslate)(p)},n.getNextItem=function(e){var t=n.menuItems;return t[t.findIndex(function(t){return t[0]===e})+1]||t.slice(-1)[0]},n.getPrevItem=function(e){var t=n.menuItems;return t[t.findIndex(function(t){return t[0]===e})-1]||t[0]},n.getOffset=function(e){var t=n.menuItems,r=n.getVisibleItems({items:t});return e?n.getScrollLeftOffset(r,t):n.getScrollRightOffset(r,t)},n.getCenterOffset=function(e){var t=e.items,r=void 0===t?n.menuItems:t,a=e.menuWidth,i=void 0===a?n.menuWidth:a;if(!r.length)return 0;var s=(i-n.getItemsWidth({items:r}))/2;return(0,l.formatTranslate)(s)},n.handleWheel=function(e){if(!n.props.wheel)return!1;e.deltaY<0?n.handleArrowClick():n.handleArrowClick(!1)},n.handleArrowClickRight=function(){n.handleArrowClick(!1)},n.getOffsetAtStart=function(){var e=n.firstPageOffset;return n.props.alignCenter?e:o.defaultSetting.translate},n.getOffsetAtEnd=function(){var e=n.props.alignCenter,t=n.allItemsWidth,r=n.menuWidth,a=n.lastPageOffset,i=t-r;return e?-i-a:-i},n.handleArrowClick=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=n.props.alignCenter,r=n.allItemsWidth,a=n.menuWidth;if(!t&&!e&&a>r)return!1;var i=-n.getOffset(e);e&&n.itBeforeStart(i)&&(i=n.getOffsetAtStart()),!e&&n.itAfterEnd(i)&&(i=n.getOffsetAtEnd());var s=(0,l.formatTranslate)(i);n.setState({translate:s,xPoint:o.defaultSetting.xPoint,startDragTranslate:null,xDraggedDistance:null})},n.itBeforeStart=function(e){var t=n.props.alignCenter,r=n.firstPageOffset;return t?e>r:e>o.defaultSetting.translate},n.itAfterEnd=function(e){var t=n.props.alignCenter,r=n.menuWidth,a=n.allItemsWidth,i=n.lastPageOffset;return t?e<o.defaultSetting.translate&&Math.abs(e)>a-r+i:e<o.defaultSetting.translate&&Math.abs(e)>a-r},n.getPoint=function(e){return e.touches&&e.touches.length?e.touches[0].clientX:e.clientX},n.handleDragStart=function(e){if(e&&2===e.buttons)return!1;if(!n.props.dragging)return!1;var t=n.state.translate;n.setState({dragging:!0,xPoint:0,startDragTranslate:t,xDraggedDistance:0})},n.handleDrag=function(e){var t=n.props.dragging,r=n.state,a=r.translate,i=r.dragging,s=r.xPoint,u=r.xDraggedDistance;if(!t||!i)return!1;var f=n.getPoint(e),d=s===o.defaultSetting.xPoint?o.defaultSetting.xPoint:s-f,c=a-d;n.itBeforeStart(c)&&(c-=Math.abs(d)/2),n.itAfterEnd(c)&&(c+=Math.abs(d)/2);var g=(0,l.formatTranslate)(c);n.setState({xPoint:f,translate:g,xDraggedDistance:u+Math.abs(d)})},n.handleDragStop=function(e){var t=n.allItemsWidth,r=n.menuWidth,a=n.firstPageOffset,i=n.lastPageOffset,s=n.state,u=s.dragging,f=s.xPoint,d=void 0===f?n.getPoint(e):f,c=s.translate,g=s.startDragTranslate,m=n.props,p=m.dragging,h=m.alignCenter;if(!p||!u)return!1;var v=c;if(n.itBeforeStart(c)&&(v=h?a:o.defaultSetting.translate,d=o.defaultSetting.xPoint),n.itAfterEnd(c)){var w=t-r;v=h?-w-i:-w,d=o.defaultSetting.xPoint}!h&&r>=t&&(v=o.defaultSetting.translate,d=o.defaultSetting.xPoint),v=(0,l.formatTranslate)(v),n.setState({dragging:!1,xPoint:d,translate:v},function(){return n.onUpdate({translate:v,translateOld:g})})},n.isArrowsVisible=function(){var e=n.allItemsWidth,t=n.menuWidth,r=n.props.hideArrows;return!Boolean(r&&e<=t)},n.onUpdate=function(e){var t=e.translate,r=void 0===t?n.state.translate:t,a=e.translateOld,i=void 0===a?n.state.translate:a,s=n.props.onUpdate,l=n.lastTranslateUpdate;s&&r!==i&&r!==l&&(n.lastTranslateUpdate=r,s({translate:r}))},n.ref={},n.mounted=!1,n.needUpdate=!1,n.allItemsWidth=0,n.menuPos=0,n.menuWidth=0,n.wWidth=0,n.firstPageOffset=0,n.lastPageOffset=0,n.lastTranslateUpdate=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),a(t,[{key:"componentDidMount",value:function(){var e=this;this.setInitial(),window.requestAnimationFrame=window.requestAnimationFrame||function(){};var t=(0,l.testPassiveEventSupport)(),n=!t||{passive:!0,capture:!0},r=!!t&&{passive:!0,capture:!1};window.addEventListener("load",this.onLoad,r),window.addEventListener("resize",this.setInitial,r),document.addEventListener("mousemove",this.handleDrag,n),document.addEventListener("mouseup",this.handleDragStop,n),setTimeout(function(){return e.onLoad()},0)}},{key:"shouldComponentUpdate",value:function(e,t){var n=this.state,r=n.selected,a=n.translate,i=n.dragging,s=n.leftArrowVisible,o=n.rightArrowVisible,u=t.selected,f=t.translate,d=t.dragging,c=t.leftArrowVisible,g=t.rightArrowVisible,m=this.props,p=m.translate,h=m.selected,v=m.scrollToSelected,w=e.translate,b=e.selected,y=(0,l.notUndefOrNull)(w)&&p!==w,C=w!==f&&(a!==f||y),I=(0,l.notUndefOrNull)(b)&&h!==b,S=C||b!==u&&(I||r!==u),O=s!==c,P=o!==g,W=f,A=this.props.data!==e.data||this.props.data.length!==e.data.length,x=(0,l.translateIsValid)(w)&&y&&!A;return(A||v&&I)&&(this.needUpdate=!0),S&&(I&&(this.selected=b),x&&(W=w)),x&&this.setState({translate:(0,l.formatTranslate)(W)}),A||C||i!==d||S||O||P}},{key:"componentDidUpdate",value:function(e,t){var n=this;this.needUpdate&&(this.needUpdate=!1,this.onLoad());var r=t.translate,a=this.state,i=a.translate;a.dragging||r===i||this.onUpdate({translate:i,translateOld:r});var s=this.props,l=s.hideSingleArrow,o=s.transition;l&&(requestAnimationFrame(this.setSingleArrowVisibility),setTimeout(function(){return requestAnimationFrame(n.setSingleArrowVisibility)},1e3*o+10))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setInitial),document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleDragStop)}},{key:"render",value:function(){var e=this.props,t=e.arrowClass,n=e.arrowDisabledClass,a=e.arrowLeft,s=e.arrowRight,l=e.data,f=e.innerWrapperClass,d=e.itemClass,c=e.itemClassActive,g=e.hideArrows,m=e.menuStyle,p=e.menuClass,h=e.transition,v=e.wrapperClass,w=e.wrapperStyle,b=e.forwardClick,y=this.state,C=y.translate,I=y.dragging,S=y.leftArrowVisible,O=y.rightArrowVisible,P=this.selected,W=this.mounted;if(!l||!l.length)return null;var A=!W||this.isArrowsVisible(),x=r({},o.defaultMenuStyle,m),T=r({},o.defaultWrapperStyle,w);return i.default.createElement("div",{className:p,style:x,onWheel:this.handleWheel},a&&i.default.createElement(u.ArrowWrapper,{className:t,isDisabled:!A||!S,hideArrows:g,onClick:this.handleArrowClick,disabledClass:n,forwardClick:b},a),i.default.createElement("div",{className:v,style:T,ref:this.setWrapperRef,onMouseDown:this.handleDragStart,onTouchStart:this.handleDragStart,onTouchEnd:this.handleDragStop,onMouseMove:this.handleDrag,onTouchMove:this.handleDrag},i.default.createElement(u.InnerWrapper,{data:l,translate:C,dragging:I,mounted:W,transition:h,selected:P,setRef:this.setRef,onClick:this.onItemClick,innerWrapperClass:f,itemClass:d,itemClassActive:c,forwardClick:b})),s&&i.default.createElement(u.ArrowWrapper,{className:t,isDisabled:!A||!O,hideArrows:g,onClick:this.handleArrowClickRight,disabledClass:n,forwardClick:b},s))}}]),t}(),g=t.propTypes={alignCenter:s.default.bool,arrowClass:s.default.string,arrowDisabledClass:s.default.string,arrowLeft:s.default.object,arrowRight:s.default.object,clickWhenDrag:s.default.bool,data:s.default.array.isRequired,dragging:s.default.bool,innerWrapperClass:s.default.string,itemClass:s.default.string,itemClassActive:s.default.string,hideArrows:s.default.bool,hideSingleArrow:s.default.bool,onSelect:s.default.func,onClick:s.default.func,selected:s.default.oneOfType([s.default.number,s.default.string]),translate:s.default.number,transition:s.default.number,onUpdate:s.default.func,menuClass:s.default.string,menuStyle:s.default.object,scrollToSelected:s.default.bool,wrapperStyle:s.default.object,wheel:s.default.bool,wrapperClass:s.default.string,forwardClick:s.default.bool};c.defaultProps=o.defaultProps,c.propTypes=g,t.default=c},function(e,t,n){"use strict";var r=n(6);function a(){}e.exports=function(){function e(e,t,n,a,i,s){if(s!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=a,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return+parseFloat(e).toFixed(3)},a=function(e){return"number"==typeof e&&!isNaN(parseFloat(e))};t.formatTranslate=r,t.notUndefOrNull=function(e){return void 0!==e&&null!==e},t.getClientRect=function(e){if(!e||!e.getBoundingClientRect||"function"!=typeof e.getBoundingClientRect)return{width:0,x:0};var t=e.getBoundingClientRect(),n=t.x,r=t.left,a=void 0===r?0:r,i=t.width;return{width:void 0===i?0:i,x:isNaN(n)?+a:+n}},t.testPassiveEventSupport=function(){var e=!1;try{var t={get passive(){return e=!0,!1}};window.addEventListener("testPassiveEventSupport",t,t),window.removeEventListener("testPassiveEventSupport",t,t)}catch(t){e=!1}return e},t.validateTranslate=function(e,t){return a(e)?r(e):r(t)},t.translateIsValid=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InnerWrapper=t.innerStyle=t.ArrowWrapper=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=o(n(0)),s=o(n(1)),l=n(2);function o(e){return e&&e.__esModule?e:{default:e}}(t.ArrowWrapper=function(e){var t=e.className,n=e.onClick,r=e.children,s=e.isDisabled,l=e.hideArrows,o=e.disabledClass,u=e.forwardClick,f=t+" "+(l?s?o||t+"--disabled":"":""),d=a({},r.props,{onClick:function(){return u?n():null}});return i.default.createElement("div",{className:f,onClick:u?null:n},i.default.cloneElement(r,d))}).propTypes={children:s.default.object.isRequired,className:s.default.string,disabledClass:s.default.string,forwardClick:s.default.bool,hideArrows:s.default.bool,isDisabled:s.default.bool,onClick:s.default.func.isRequired};var u=t.innerStyle=function(e){var t=e.translate,n=e.dragging,r=e.mounted,a=e.transition;return{width:"9900px",transform:"translate3d("+t+"px, 0px, 0px)",transition:"transform "+(n||!r?"0":a)+"s",whiteSpace:"nowrap",textAlign:"left",userSelect:"none"}},f=t.InnerWrapper=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setRef=function(e,t){var r=n.props.setRef;n.ref[e]=t,r(n.ref)},n.ref={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.translate,a=t.dragging,s=t.mounted,l=t.transition,o=t.selected,f=t.innerWrapperClass,d=t.itemClass,c=t.onClick,g=t.itemClassActive,m=t.forwardClick,p=function(e,t){return String(e)===String(t)},h=n.map(function(e){var t={selected:p(e.key,o),onClick:function(){return m?c(e.key):null}};return i.default.cloneElement(e,t)});return i.default.createElement("div",{className:f,style:u({translate:r,dragging:a,mounted:s,transition:l}),ref:function(t){return e.setRef("menuInner",t)}},h.map(function(t,n){return i.default.createElement("div",{ref:function(t){return e.setRef("menuitem-"+n,t)},className:d+" "+(p(t.key,o)?g:""),key:"menuItem-"+t.key,style:{display:"inline-block"},onClick:function(){return m?null:c(t.key)}},t)}))}}]),t}();f.propTypes={data:s.default.arrayOf(s.default.object).isRequired,setRef:s.default.func.isRequired,onClick:s.default.func.isRequired,translate:s.default.number,dragging:s.default.bool,mounted:s.default.bool,transition:s.default.number,selected:s.default.oneOfType([s.default.string,s.default.number]),innerWrapperClass:s.default.string,itemClass:s.default.string,itemClassActive:s.default.string,forwardClick:s.default.bool},f.defaultProps={data:[],translate:l.defaultSetting.translate,dragging:!0,mounted:!1,transition:l.defaultSetting.transition,selected:l.defaultSetting.selected}}]);