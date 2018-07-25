/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = exports.ScrollMenu = exports.InnerWrapper = exports.innerStyle = exports.Arrow = exports.defaultSetting = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// if (process.env.NODE_ENV !== 'production') {
//   const {whyDidYouUpdate} = require('why-did-you-update');
//   whyDidYouUpdate(React);
// }

var defaultSetting = exports.defaultSetting = {
  alignCenter: true,
  clickWhenDrag: false,
  dragging: true,
  data: [],
  xPoint: 0,
  translate: 0,
  selected: 0,
  menuItems: [],
  menuPos: 0,
  menuWidth: 0,
  firstPageOffset: 0,
  lastPageOffset: 0,
  menuClass: 'horizontal-menu',
  wrapperClass: 'menu-wrapper',
  innerWrapperClass: 'menu-wrapper--inner',
  itemClass: 'menu-item-wrapper',
  itemClassActive: 'active',
  arrowClass: 'scroll-menu-arrow',
  wheel: true
};

var Arrow = exports.Arrow = function Arrow(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      children = _ref.children;

  return _react2.default.createElement(
    'div',
    {
      className: className,
      onClick: onClick
    },
    children
  );
};
Arrow.propTypes = {
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.object.isRequired
};

var menuStyle = {
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none'
};

var wrapperStyle = {
  overflow: 'hidden',
  userSelect: 'none'
};

var innerStyle = exports.innerStyle = function innerStyle(_ref2) {
  var translate = _ref2.translate,
      dragging = _ref2.dragging,
      mounted = _ref2.mounted,
      transition = _ref2.transition;

  return {
    width: '9000px',
    transform: 'translate3d(' + translate + 'px, 0px, 0px)',
    transition: 'transform ' + (dragging || !mounted ? '0' : transition) + 's',
    whiteSpace: 'nowrap',
    textAlign: 'left',
    userSelect: 'none'
  };
};

var InnerWrapper = exports.InnerWrapper = function (_React$Component) {
  _inherits(InnerWrapper, _React$Component);

  function InnerWrapper(props) {
    _classCallCheck(this, InnerWrapper);

    var _this = _possibleConstructorReturn(this, (InnerWrapper.__proto__ || Object.getPrototypeOf(InnerWrapper)).call(this, props));

    _this.setRef = function (key, value) {
      var setRef = _this.props.setRef;

      _this.ref[key] = value;
      setRef(_this.ref);
    };

    _this.ref = {};
    return _this;
  }

  _createClass(InnerWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          data = _props.data,
          translate = _props.translate,
          dragging = _props.dragging,
          mounted = _props.mounted,
          transition = _props.transition,
          selected = _props.selected,
          _onClick = _props.onClick,
          innerWrapperClass = _props.innerWrapperClass,
          itemClass = _props.itemClass,
          itemClassActive = _props.itemClassActive;

      var isActive = function isActive(itemId, selected) {
        return itemId === selected;
      };
      var items = data.map(function (el) {
        return _react2.default.cloneElement(el, { selected: isActive(el.key, selected) });
      });
      return _react2.default.createElement(
        'div',
        {
          className: innerWrapperClass,
          style: innerStyle({ translate: translate, dragging: dragging, mounted: mounted, transition: transition }),
          ref: function ref(inst) {
            return _this2.setRef('menuInner', inst);
          }
        },
        items.map(function (Item, i) {
          return _react2.default.createElement(
            'div',
            {
              ref: function ref(inst) {
                return _this2.setRef('menuitem-' + i, inst);
              },
              className: itemClass + ' ' + (isActive(Item.key, selected) ? itemClassActive : ''),
              key: 'menuItem-' + Item.key,
              style: {
                display: 'inline-block'
              },
              onClick: function onClick() {
                return _onClick(Item.key);
              }
            },
            Item
          );
        })
      );
    }
  }]);

  return InnerWrapper;
}(_react2.default.Component);

InnerWrapper.propTypes = {
  data: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  setRef: _propTypes2.default.func.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  translate: _propTypes2.default.number,
  dragging: _propTypes2.default.bool,
  mounted: _propTypes2.default.bool,
  transition: _propTypes2.default.number,
  selected: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  innerWrapperClass: _propTypes2.default.string,
  itemClass: _propTypes2.default.string,
  itemClassActive: _propTypes2.default.string
};
InnerWrapper.defaultProps = {
  data: [],
  translate: defaultSetting.translate,
  dragging: true,
  mounted: false,
  transition: defaultSetting.transition,
  selected: defaultSetting.selected
};

var ScrollMenu = exports.ScrollMenu = function (_React$Component2) {
  _inherits(ScrollMenu, _React$Component2);

  function ScrollMenu(props) {
    _classCallCheck(this, ScrollMenu);

    var _this3 = _possibleConstructorReturn(this, (ScrollMenu.__proto__ || Object.getPrototypeOf(ScrollMenu)).call(this, props));

    _this3.state = {
      initialized: false,
      mounted: false,
      dragging: false,
      xPoint: defaultSetting.xPoint,
      translate: _this3.props.translate,
      selected: _this3.props.selected,
      menuItems: [],
      menuPos: defaultSetting.menuPos,
      menuWidth: defaultSetting.menuWidth,
      firstPageOffset: defaultSetting.firstPageOffset,
      lastPageOffset: defaultSetting.lastPageOffset,
      startDragTranslate: null,
      stopDragTranslate: null
    };

    _this3.setInitial = function () {
      var _this3$props = _this3.props,
          selected = _this3$props.selected,
          data = _this3$props.data;

      if (!data || !data.length) return false;

      var menuItems = _this3.getMenuItems();
      var width = _this3.updateWidth({ items: menuItems });
      var selectedItem = data.find(function (el) {
        return el.key === selected;
      });
      _this3.setState(_extends({
        menuItems: menuItems,
        selected: selectedItem && selectedItem !== -1 ? selectedItem.key : defaultSetting.selected
      }, width));
    };

    _this3.getMenuItems = function () {
      var menuItems = Object.entries(_this3.ref).filter(function (el) {
        return el[0].includes('menuitem');
      });
      return menuItems;
    };

    _this3.setMounted = function () {
      var _this3$state = _this3.state,
          initialized = _this3$state.initialized,
          mounted = _this3$state.mounted;

      if (!initialized) {
        _this3.setState({ initialized: true });
      } else if (!mounted) {
        _this3.setState({ mounted: true });
      }
    };

    _this3.getWidth = function (_ref3) {
      var items = _ref3.items;

      var wWidth = window && window.innerWidth;

      var _this3$ref$menuWrappe = _this3.ref.menuWrapper.getBoundingClientRect(),
          menuPos = _this3$ref$menuWrappe.x,
          menuWidth = _this3$ref$menuWrappe.width;

      var allItemsWidth = _this3.getItemsWidth({ items: items });
      return { wWidth: wWidth, menuPos: menuPos, menuWidth: menuWidth, allItemsWidth: allItemsWidth };
    };

    _this3.updateWidth = function (_ref4) {
      var _ref4$items = _ref4.items,
          items = _ref4$items === undefined ? _this3.state.menuItems : _ref4$items;
      var alignCenter = _this3.props.alignCenter;

      var width = _this3.getWidth({ items: items });
      return _extends({}, width, alignCenter ? _this3.getPagesOffsets(_extends({ items: items }, width)) : {});
    };

    _this3.getPagesOffsets = function (_ref5) {
      var _ref5$items = _ref5.items,
          items = _ref5$items === undefined ? _this3.state.menuItems : _ref5$items,
          _ref5$allItemsWidth = _ref5.allItemsWidth,
          allItemsWidth = _ref5$allItemsWidth === undefined ? _this3.state.allItemsWidth : _ref5$allItemsWidth,
          _ref5$wWidth = _ref5.wWidth,
          wWidth = _ref5$wWidth === undefined ? _this3.state.wWidth : _ref5$wWidth,
          _ref5$menuPos = _ref5.menuPos,
          menuPos = _ref5$menuPos === undefined ? _this3.state.menuPos : _ref5$menuPos,
          _ref5$menuWidth = _ref5.menuWidth,
          menuWidth = _ref5$menuWidth === undefined ? _this3.state.menuWidth : _ref5$menuWidth,
          _ref5$translate = _ref5.translate,
          translate = _ref5$translate === undefined ? _this3.state.translate : _ref5$translate;
      var alignCenter = _this3.props.alignCenter;

      var visibleItemsStart = _this3.getVisibleItems({ items: items, wWidth: wWidth, menuPos: menuPos, menuWidth: menuWidth });
      var firstPageOffset = _this3.getCenterOffset({ items: visibleItemsStart, menuWidth: menuWidth });
      var visibleItemsEnd = _this3.getVisibleItems({
        items: items,
        offset: -allItemsWidth + menuWidth,
        wWidth: wWidth,
        menuPos: menuPos,
        menuWidth: menuWidth
      });
      var lastPageOffset = _this3.getCenterOffset({ items: visibleItemsEnd, menuWidth: menuWidth });
      var trans = translate === 0 && alignCenter ? firstPageOffset : translate;
      _this3.setState({ firstPageOffset: firstPageOffset, lastPageOffset: lastPageOffset, translate: trans });
      return { firstPageOffset: firstPageOffset, lastPageOffset: lastPageOffset };
    };

    _this3.getItemsWidth = function (_ref6) {
      var _ref6$items = _ref6.items,
          items = _ref6$items === undefined ? _this3.state.menuItems : _ref6$items;

      var data = items.items || items;
      return data.map(function (el) {
        return el[1];
      }).reduce(function (acc, el) {
        return acc += el.getBoundingClientRect().width;
      }, 0);
    };

    _this3.onItemClick = function (id) {
      var dragging = _this3.state.dragging;
      var _this3$props2 = _this3.props,
          clickWhenDrag = _this3$props2.clickWhenDrag,
          onSelect = _this3$props2.onSelect;
      var _this3$state2 = _this3.state,
          startDragTranslate = _this3$state2.startDragTranslate,
          stopDragTranslate = _this3$state2.stopDragTranslate;

      var diff = Math.abs((startDragTranslate || 0) - (stopDragTranslate || 0));
      var afterScroll = startDragTranslate === null || stopDragTranslate === null;

      if (dragging || !afterScroll && !clickWhenDrag && diff > 5) return false;

      _this3.setState({ selected: id }, function () {
        if (onSelect) onSelect(id);
      });
    };

    _this3.getVisibleItems = function (_ref7) {
      var _ref7$items = _ref7.items,
          items = _ref7$items === undefined ? _this3.state.menuItems : _ref7$items,
          _ref7$wWidth = _ref7.wWidth,
          wWidth = _ref7$wWidth === undefined ? _this3.state.wWidth : _ref7$wWidth,
          _ref7$menuPos = _ref7.menuPos,
          menuPos = _ref7$menuPos === undefined ? _this3.state.menuPos : _ref7$menuPos,
          _ref7$menuWidth = _ref7.menuWidth,
          menuWidth = _ref7$menuWidth === undefined ? _this3.state.menuWidth : _ref7$menuWidth,
          _ref7$offset = _ref7.offset,
          offset = _ref7$offset === undefined ? _this3.state.translate : _ref7$offset,
          _ref7$firstPageOffset = _ref7.firstPageOffset,
          firstPageOffset = _ref7$firstPageOffset === undefined ? _this3.state.firstPageOffset : _ref7$firstPageOffset,
          _ref7$translate = _ref7.translate,
          translate = _ref7$translate === undefined ? _this3.state.translate : _ref7$translate;

      var data = items.items || items;
      return data.filter(function (el) {
        var _el$1$getBoundingClie = el[1].getBoundingClientRect(),
            elWidth = _el$1$getBoundingClie.width;

        var id = _this3.getItemInd(items, el);
        var x = _this3.getOffsetToItem({ itemId: id, menuItems: items, translate: translate, firstPageOffset: firstPageOffset });
        return _this3.elemVisible({ x: x, elWidth: elWidth, wWidth: wWidth, menuPos: menuPos, menuWidth: menuWidth, offset: offset });
      });
    };

    _this3.elemVisible = function (_ref8) {
      var x = _ref8.x,
          _ref8$offset = _ref8.offset,
          offset = _ref8$offset === undefined ? 0 : _ref8$offset,
          elWidth = _ref8.elWidth,
          _ref8$wWidth = _ref8.wWidth,
          wWidth = _ref8$wWidth === undefined ? _this3.state.wWidth : _ref8$wWidth,
          _ref8$menuPos = _ref8.menuPos,
          menuPos = _ref8$menuPos === undefined ? _this3.state.menuPos : _ref8$menuPos,
          _ref8$menuWidth = _ref8.menuWidth,
          menuWidth = _ref8$menuWidth === undefined ? _this3.state.menuWidth : _ref8$menuWidth;

      var leftEdge = menuPos - 1;
      var rightEdge = wWidth - (wWidth - (menuPos + menuWidth)) + 1;
      var pos = x + offset;
      var posWithWidth = pos + elWidth;
      return pos >= leftEdge && posWithWidth <= rightEdge;
    };

    _this3.getItemInd = function (menuItems, item) {
      if (!menuItems || !item) return 0;
      return menuItems.findIndex(function (el) {
        return el[0] === item[0];
      });
    };

    _this3.getNextItemInd = function (left, visibleItems) {
      var menuItems = _this3.state.menuItems;

      if (left) {
        if (!visibleItems.length) return 0;
      } else {
        if (!visibleItems.length) return menuItems.length;
      }
      var ind = left ? _this3.getItemInd(menuItems, visibleItems[0]) - 1 : _this3.getItemInd(menuItems, visibleItems.slice(-1)[0]) + 1;
      return ind < 0 ? 0 : ind;
    };

    _this3.getOffsetToItem = function (_ref9) {
      var itemId = _ref9.itemId,
          _ref9$menuItems = _ref9.menuItems,
          menuItems = _ref9$menuItems === undefined ? _this3.state.menuItems : _ref9$menuItems,
          _ref9$translate = _ref9.translate,
          translate = _ref9$translate === undefined ? _this3.state.translate : _ref9$translate;

      if (!menuItems.length) return 0;
      var id = itemId >= menuItems.length ? menuItems.length - 1 : itemId;

      var _menuItems$id$1$getBo = menuItems[id][1].getBoundingClientRect(),
          x = _menuItems$id$1$getBo.x;

      var position = x - translate;
      return position;
    };

    _this3.getScrollRightOffset = function (visibleItems, items) {
      var alignCenter = _this3.props.alignCenter;
      var _this3$state3 = _this3.state,
          menuPos = _this3$state3.menuPos,
          lastPageOffset = _this3$state3.lastPageOffset;


      var nextItem = _this3.getNextItem(visibleItems && visibleItems.slice(-1)[0] ? visibleItems.slice(-1)[0][0] : items.slice(-1)[0][0]);
      var nextItemIndex = items.findIndex(function (el) {
        return el[0] === nextItem[0];
      });

      var offsetToItem = _this3.getOffsetToItem({ itemId: nextItemIndex, menuItems: items });
      var offsetToItemOnStart = offsetToItem - menuPos;

      var nextVisibleItems = _this3.getVisibleItems({
        items: items,
        offset: -offsetToItemOnStart
      });

      if (nextVisibleItems.includes(items.slice(-1)[0])) {
        return alignCenter ? offsetToItemOnStart + lastPageOffset : offsetToItemOnStart;
      }

      var centerOffset = _this3.getCenterOffset({ items: nextVisibleItems });

      var newOffset = alignCenter ? offsetToItemOnStart - centerOffset : offsetToItemOnStart;
      return newOffset;
    };

    _this3.getScrollLeftOffset = function (visibleItems, items) {
      var alignCenter = _this3.props.alignCenter;
      var _this3$state4 = _this3.state,
          menuPos = _this3$state4.menuPos,
          menuWidth = _this3$state4.menuWidth,
          firstPageOffset = _this3$state4.firstPageOffset;


      var prevItem = _this3.getPrevItem(visibleItems && visibleItems[0] ? visibleItems[0][0] : items[0][0]);
      var prevItemIndex = items.findIndex(function (el) {
        return el[0] === prevItem[0];
      });

      var offsetToItem = _this3.getOffsetToItem({ itemId: prevItemIndex, menuItems: items });
      var itemWidth = _this3.getItemsWidth({ items: [prevItem] });
      var offsetToItemOnEnd = offsetToItem - menuPos - (menuWidth - itemWidth);

      var nextVisibleItems = _this3.getVisibleItems({
        items: items,
        offset: -offsetToItemOnEnd
      });

      if (nextVisibleItems.includes(items[0])) {
        return alignCenter ? -firstPageOffset : 0;
      }

      var centerOffset = _this3.getCenterOffset({ items: nextVisibleItems });

      var newOffset = alignCenter ? offsetToItemOnEnd + centerOffset : offsetToItemOnEnd;
      return newOffset;
    };

    _this3.getNextItem = function (key) {
      var menuItems = _this3.state.menuItems;

      var itemIndex = menuItems.findIndex(function (el) {
        return el[0] === key;
      });
      var nextItemIndex = itemIndex + 1;
      var nextItem = menuItems[nextItemIndex] || menuItems.slice(-1)[0];
      return nextItem;
    };

    _this3.getPrevItem = function (key) {
      var menuItems = _this3.state.menuItems;

      var itemIndex = menuItems.findIndex(function (el) {
        return el[0] === key;
      });
      var prevItemIndex = itemIndex - 1;
      var prevItem = menuItems[prevItemIndex] || menuItems[0];
      return prevItem;
    };

    _this3.getOffset = function (left) {
      var items = _this3.state.menuItems;

      var visibleItems = _this3.getVisibleItems({ items: items });
      var newOffset = left ? _this3.getScrollLeftOffset(visibleItems, items) : _this3.getScrollRightOffset(visibleItems, items);

      return newOffset;
    };

    _this3.getCenterOffset = function (_ref10) {
      var _ref10$items = _ref10.items,
          items = _ref10$items === undefined ? _this3.state.menuItems : _ref10$items,
          _ref10$menuWidth = _ref10.menuWidth,
          menuWidth = _ref10$menuWidth === undefined ? _this3.state.menuWidth : _ref10$menuWidth;

      if (!items.length) {
        return 0;
      }
      var itemsWidth = _this3.getItemsWidth({ items: items });
      var offset = (menuWidth - itemsWidth) / 2;
      return offset;
    };

    _this3.handleWheel = function (e) {
      var wheel = _this3.props.wheel;

      if (!wheel) return false;
      e.stopPropagation();
      e.preventDefault();
      if (e.deltaY < 0) {
        _this3.handleArrowClick();
      } else {
        _this3.handleArrowClick(false);
      }
    };

    _this3.handleArrowClick = function () {
      var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var alignCenter = _this3.props.alignCenter;
      var _this3$state5 = _this3.state,
          allItemsWidth = _this3$state5.allItemsWidth,
          menuWidth = _this3$state5.menuWidth,
          firstPageOffset = _this3$state5.firstPageOffset,
          lastPageOffset = _this3$state5.lastPageOffset;


      var offset = _this3.getOffset(left);
      var transl = -offset;

      if (left && _this3.itBeforeStart(transl)) {
        transl = alignCenter ? firstPageOffset : defaultSetting.translate;
      }
      if (!left && _this3.itAfterEnd(transl)) {
        var _offset = allItemsWidth - menuWidth;
        transl = alignCenter ? -_offset - lastPageOffset : -_offset;
      }

      _this3.setState({
        translate: transl,
        xPoint: defaultSetting.xPoint,
        startDragTranslate: null,
        stopDragTranslate: null
      }, function () {
        return _this3.onUpdate({});
      });
    };

    _this3.itBeforeStart = function (trans) {
      var alignCenter = _this3.props.alignCenter;
      var firstPageOffset = _this3.state.firstPageOffset;

      return alignCenter ? trans > firstPageOffset : trans > defaultSetting.translate;
    };

    _this3.itAfterEnd = function (trans) {
      var alignCenter = _this3.props.alignCenter;
      var _this3$state6 = _this3.state,
          menuWidth = _this3$state6.menuWidth,
          allItemsWidth = _this3$state6.allItemsWidth,
          lastPageOffset = _this3$state6.lastPageOffset;

      return alignCenter ? trans < defaultSetting.translate && Math.abs(trans) > allItemsWidth - menuWidth + lastPageOffset : trans < defaultSetting.translate && Math.abs(trans) > allItemsWidth - menuWidth;
    };

    _this3.getPoint = function (e) {
      return e.touches && e.touches.length ? e.touches[0] : e.clientX;
    };

    _this3.handleDragStart = function () {
      var draggingEnable = _this3.props.dragging;

      if (!draggingEnable) return false;
      var startDragTranslate = _this3.state.translate;

      _this3.setState({ dragging: true, xPoint: 0, startDragTranslate: startDragTranslate });
    };

    _this3.handleDrag = function (e) {
      var draggingEnable = _this3.props.dragging;
      var _this3$state7 = _this3.state,
          dragging = _this3$state7.dragging,
          xPoint = _this3$state7.xPoint,
          translate = _this3$state7.translate;

      if (!draggingEnable || !dragging) return false;

      var point = _this3.getPoint(e);
      var diff = xPoint === defaultSetting.xPoint ? defaultSetting.xPoint : xPoint - point;
      var result = translate - diff;

      // don't let scroll over start and end
      if (_this3.itBeforeStart(result)) {
        result = result - Math.abs(diff) / 2;
      }
      if (_this3.itAfterEnd(result)) {
        result = result + Math.abs(diff) / 2;
      }

      _this3.setState({
        xPoint: point,
        translate: result || defaultSetting.translate,
        stopDragTranslate: result || defaultSetting.translate
      });
    };

    _this3.handleDragStop = function (e) {
      var _this3$state8 = _this3.state,
          dragging = _this3$state8.dragging,
          allItemsWidth = _this3$state8.allItemsWidth,
          translate = _this3$state8.translate,
          menuWidth = _this3$state8.menuWidth,
          _this3$state8$xPoint = _this3$state8.xPoint,
          xPoint = _this3$state8$xPoint === undefined ? _this3.getPoint(e) : _this3$state8$xPoint,
          firstPageOffset = _this3$state8.firstPageOffset,
          lastPageOffset = _this3$state8.lastPageOffset;
      var draggingEnable = _this3.props.dragging;

      if (!draggingEnable || !dragging) return false;
      var alignCenter = _this3.props.alignCenter;


      if (_this3.itBeforeStart(translate)) {
        translate = alignCenter ? firstPageOffset : 0;
        xPoint = defaultSetting.xPoint;
      }
      if (_this3.itAfterEnd(translate)) {
        var offset = allItemsWidth - menuWidth;
        translate = alignCenter ? -offset - lastPageOffset : -offset;
        xPoint = defaultSetting.xPoint;
      }

      _this3.setState({ dragging: false, xPoint: xPoint, translate: translate }, function () {
        return _this3.onUpdate({});
      });
    };

    _this3.onUpdate = function (_ref11) {
      var _ref11$selected = _ref11.selected,
          selected = _ref11$selected === undefined ? _this3.state.selected : _ref11$selected,
          _ref11$translate = _ref11.translate,
          translate = _ref11$translate === undefined ? _this3.state.translate : _ref11$translate;
      var onUpdate = _this3.props.onUpdate;

      if (onUpdate) {
        onUpdate({ selected: selected, translate: translate });
      }
    };

    _this3.setRef = function (ref) {
      _this3.ref = ref;
    };

    _this3.ref = {};
    return _this3;
  }

  _createClass(ScrollMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setInitial();

      window.addEventListener('resize', this.setInitial);
      document.addEventListener('mousemove', this.handleDrag);
      document.addEventListener('mouseup', this.handleDragStop);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _state = this.state,
          wWidth = _state.wWidth,
          translate = _state.translate,
          selected = _state.selected,
          mounted = _state.mounted,
          menuWidth = _state.menuWidth,
          dragging = _state.dragging;
      var translateNew = nextState.translate,
          wWidthNew = nextState.wWidth,
          mountedNew = nextState.mounted,
          selectedNew = nextState.selected,
          menuWidthNew = nextState.menuWidth,
          draggingNew = nextState.dragging;


      return menuWidth !== menuWidthNew || wWidth !== wWidthNew || translate !== translateNew || selected !== selectedNew || mounted !== mountedNew || dragging !== draggingNew;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setMounted();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setInitial);
      document.removeEventListener('mousemove', this.handleDrag);
      document.removeEventListener('mouseup', this.handleDragStop);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          data = _props2.data,
          arrowLeft = _props2.arrowLeft,
          arrowRight = _props2.arrowRight,
          transition = _props2.transition,
          arrowClass = _props2.arrowClass,
          menuClass = _props2.menuClass,
          wrapperClass = _props2.wrapperClass,
          innerWrapperClass = _props2.innerWrapperClass,
          itemClass = _props2.itemClass,
          itemClassActive = _props2.itemClassActive;
      var _state2 = this.state,
          translate = _state2.translate,
          selected = _state2.selected,
          dragging = _state2.dragging,
          mounted = _state2.mounted;


      if (!data || !data.length) return null;

      return _react2.default.createElement(
        'div',
        {
          className: menuClass,
          style: menuStyle,
          onWheel: function onWheel(e) {
            return _this4.handleWheel(e);
          }
        },
        arrowLeft && _react2.default.createElement(
          Arrow,
          {
            className: arrowClass,
            onClick: function onClick() {
              return _this4.handleArrowClick();
            }
          },
          arrowLeft
        ),
        _react2.default.createElement(
          'div',
          {
            className: wrapperClass,
            style: wrapperStyle,
            ref: function ref(inst) {
              return _this4.ref.menuWrapper = inst;
            },
            onMouseDown: this.handleDragStart,
            onTouchStart: this.handleDragStart,
            onTouchEnd: this.handleDragStop,
            onMouseMove: this.handleDrag,
            onTouchMove: this.handleDrag
          },
          _react2.default.createElement(InnerWrapper, {
            data: data,
            translate: translate,
            dragging: dragging,
            mounted: mounted,
            transition: transition,
            selected: selected,
            setRef: this.setRef,
            onClick: this.onItemClick,
            innerWrapperClass: innerWrapperClass,
            itemClass: itemClass,
            itemClassActive: itemClassActive
          })
        ),
        arrowRight && _react2.default.createElement(
          Arrow,
          {
            className: arrowClass,
            onClick: function onClick() {
              return _this4.handleArrowClick(false);
            }
          },
          arrowRight
        )
      );
    }
  }]);

  return ScrollMenu;
}(_react2.default.Component);

var defaultProps = exports.defaultProps = {
  data: defaultSetting.data,
  translate: defaultSetting.translate,
  selected: defaultSetting.selected,
  transition: defaultSetting.transition,
  dragging: defaultSetting.dragging,
  clickWhenDrag: defaultSetting.clickWhenDrag,
  alignCenter: defaultSetting.alignCenter,
  wrapperClass: defaultSetting.wrapperClass,
  innerWrapperClass: defaultSetting.innerWrapperClass,
  itemClass: defaultSetting.itemClass,
  itemClassActive: defaultSetting.itemClassActive,
  arrowClass: defaultSetting.arrowClass,
  menuClass: defaultSetting.menuClass,
  wheel: defaultSetting.wheel
};

var propTypes = exports.propTypes = {
  data: _propTypes2.default.array.isRequired,
  selected: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  translate: _propTypes2.default.number,
  transition: _propTypes2.default.number,
  arrowLeft: _propTypes2.default.object,
  arrowRight: _propTypes2.default.object,
  alignCenter: _propTypes2.default.bool,
  onSelect: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func,
  dragging: _propTypes2.default.bool,
  clickWhenDrag: _propTypes2.default.bool,
  wrapperClass: _propTypes2.default.string,
  innerWrapperClass: _propTypes2.default.string,
  itemClass: _propTypes2.default.string,
  itemClassActive: _propTypes2.default.string,
  arrowClass: _propTypes2.default.string,
  menuClass: _propTypes2.default.string,
  wheel: _propTypes2.default.bool
};
ScrollMenu.defaultProps = defaultProps;
ScrollMenu.propTypes = propTypes;

exports.default = ScrollMenu;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(1);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(2)();
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),
/* 5 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scrollMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["default"] = (_scrollMenu__WEBPACK_IMPORTED_MODULE_0__);


/***/ })
/******/ ]);