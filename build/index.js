module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/defautSettings.ts":
/*!*******************************!*\
  !*** ./src/defautSettings.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultMenuStyle = {
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none'
};
exports.defaultMenuStyle = defaultMenuStyle;
var defaultWrapperStyle = {
  overflow: 'hidden',
  userSelect: 'none'
};
exports.defaultWrapperStyle = defaultWrapperStyle;
var defaultProps = {
  alignCenter: true,
  arrowClass: 'scroll-menu-arrow',
  arrowLeft: null,
  arrowRight: null,
  arrowDisabledClass: 'scroll-menu-arrow--disabled',
  clickWhenDrag: false,
  dragging: true,
  data: [],
  forwardClick: false,
  innerWrapperClass: 'menu-wrapper--inner',
  itemClass: 'menu-item-wrapper',
  itemClassActive: 'active',
  hideArrows: false,
  hideSingleArrow: false,
  menuClass: 'horizontal-menu',
  menuStyle: defaultMenuStyle,
  onSelect: function onSelect() {
    return false;
  },
  onUpdate: function onUpdate() {
    return false;
  },
  scrollToSelected: false,
  selected: '',
  translate: 0.0,
  transition: 0.4,
  wrapperClass: 'menu-wrapper',
  wrapperStyle: defaultWrapperStyle,
  wheel: true,
  xPoint: 0
};
exports.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUvc3JjL2RlZmF1dFNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEsSUFBTSxnQkFBZ0IsR0FBa0I7QUFDdEMsRUFBQSxPQUFPLEVBQUUsTUFENkI7QUFFdEMsRUFBQSxVQUFVLEVBQUUsUUFGMEI7QUFHdEMsRUFBQSxVQUFVLEVBQUU7QUFIMEIsQ0FBeEM7QUFzRXNCLE9BQUEsQ0FBQSxnQkFBQSxHQUFBLGdCQUFBO0FBN0R0QixJQUFNLG1CQUFtQixHQUFrQjtBQUN6QyxFQUFBLFFBQVEsRUFBRSxRQUQrQjtBQUV6QyxFQUFBLFVBQVUsRUFBRTtBQUY2QixDQUEzQztBQTZEd0MsT0FBQSxDQUFBLG1CQUFBLEdBQUEsbUJBQUE7QUFyRHhDLElBQU0sWUFBWSxHQUFjO0FBRTlCLEVBQUEsV0FBVyxFQUFFLElBRmlCO0FBSTlCLEVBQUEsVUFBVSxFQUFFLG1CQUprQjtBQU05QixFQUFBLFNBQVMsRUFBRSxJQU5tQjtBQU85QixFQUFBLFVBQVUsRUFBRSxJQVBrQjtBQVM5QixFQUFBLGtCQUFrQixFQUFFLDZCQVRVO0FBVzlCLEVBQUEsYUFBYSxFQUFFLEtBWGU7QUFhOUIsRUFBQSxRQUFRLEVBQUUsSUFib0I7QUFlOUIsRUFBQSxJQUFJLEVBQUUsRUFmd0I7QUFnQjlCLEVBQUEsWUFBWSxFQUFFLEtBaEJnQjtBQWtCOUIsRUFBQSxpQkFBaUIsRUFBRSxxQkFsQlc7QUFvQjlCLEVBQUEsU0FBUyxFQUFFLG1CQXBCbUI7QUFzQjlCLEVBQUEsZUFBZSxFQUFFLFFBdEJhO0FBd0I5QixFQUFBLFVBQVUsRUFBRSxLQXhCa0I7QUEwQjlCLEVBQUEsZUFBZSxFQUFFLEtBMUJhO0FBNEI5QixFQUFBLFNBQVMsRUFBRSxpQkE1Qm1CO0FBOEI5QixFQUFBLFNBQVMsRUFBRSxnQkE5Qm1CO0FBZ0M5QixFQUFBLFFBQVEsRUFBRSxvQkFBQTtBQUFNLFdBQUEsS0FBQTtBQUFLLEdBaENTO0FBa0M5QixFQUFBLFFBQVEsRUFBRSxvQkFBQTtBQUFNLFdBQUEsS0FBQTtBQUFLLEdBbENTO0FBb0M5QixFQUFBLGdCQUFnQixFQUFFLEtBcENZO0FBc0M5QixFQUFBLFFBQVEsRUFBRSxFQXRDb0I7QUF3QzlCLEVBQUEsU0FBUyxFQUFFLEdBeENtQjtBQTBDOUIsRUFBQSxVQUFVLEVBQUUsR0ExQ2tCO0FBNEM5QixFQUFBLFlBQVksRUFBRSxjQTVDZ0I7QUE4QzlCLEVBQUEsWUFBWSxFQUFFLG1CQTlDZ0I7QUFnRDlCLEVBQUEsS0FBSyxFQUFFLElBaER1QjtBQWtEOUIsRUFBQSxNQUFNLEVBQUU7QUFsRHNCLENBQWhDO0FBcURRLE9BQUEsQ0FBQSxZQUFBLEdBQUEsWUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENTU1Byb3BlcnRpZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1lbnVQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIERlZmF1bHQgc3R5bGVzIGZvciBTY3JvbGxNZW51IGNvbXBvbmVudFxuICovXG5jb25zdCBkZWZhdWx0TWVudVN0eWxlOiBDU1NQcm9wZXJ0aWVzID0ge1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB1c2VyU2VsZWN0OiAnbm9uZScsXG59O1xuXG4vKipcbiAqIERlZmF1bHQgc3R5bGVzIGZvciBJbm5lcldyYXBwZXIgY29tcG9uZW50XG4gKi9cbmNvbnN0IGRlZmF1bHRXcmFwcGVyU3R5bGU6IENTU1Byb3BlcnRpZXMgPSB7XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgdXNlclNlbGVjdDogJ25vbmUnLFxufTtcblxuLyoqXG4gKiBEZWZhdWx0IHByb3BzIGZvciBTY3JvbGxNZW51IGNvbXBvbmVudFxuICovXG5jb25zdCBkZWZhdWx0UHJvcHM6IE1lbnVQcm9wcyA9IHtcbiAgLyoqIGFsaWduIG1lbnUgaXRlbXMgdG8gY2VudGVyLCBzbyBpbiBsZWZ0IGFuZCByaWdodCB3aWxsIGJlIGVtcHR5IHNwYWNlICovXG4gIGFsaWduQ2VudGVyOiB0cnVlLFxuICAvKiogY2xhc3MgZm9yIEFycm93IGNvbXBvbmVudCAqL1xuICBhcnJvd0NsYXNzOiAnc2Nyb2xsLW1lbnUtYXJyb3cnLFxuICAvKiogQXJyb3dzIGNvbXBvbmVudHMgKi9cbiAgYXJyb3dMZWZ0OiBudWxsLFxuICBhcnJvd1JpZ2h0OiBudWxsLFxuICAvKiogY2xhc3MgZm9yIGFycm93IHdoZW4gaXQncyBkaXNhYmxlZCAqL1xuICBhcnJvd0Rpc2FibGVkQ2xhc3M6ICdzY3JvbGwtbWVudS1hcnJvdy0tZGlzYWJsZWQnLFxuICAvKiogd2hlbiBkcmFnIGl0ZW0gYW5kIG1vdXNlIGJ1dHRvbiBtb3VzZXVwIGNob29zZSBtZW51IGl0ZW0gdW5kZXIgY3Vyc29yICAqL1xuICBjbGlja1doZW5EcmFnOiBmYWxzZSxcbiAgLyoqIGVuYWJsZS9kaXNhYmxlIGRyYWdnaW5nIHdpdGggbW91c2UgKi9cbiAgZHJhZ2dpbmc6IHRydWUsXG4gIC8qKiBhcnJheSBvZiBNZW51SXRlbSBlbGVtZW50cyAqL1xuICBkYXRhOiBbXSxcbiAgZm9yd2FyZENsaWNrOiBmYWxzZSxcbiAgLyoqIGNsYXNzIGZvciBJbm5lcldyYXBwZXIgKi9cbiAgaW5uZXJXcmFwcGVyQ2xhc3M6ICdtZW51LXdyYXBwZXItLWlubmVyJyxcbiAgLyoqIGNsYXNzIGZvciBNZW51SXRlbSAqL1xuICBpdGVtQ2xhc3M6ICdtZW51LWl0ZW0td3JhcHBlcicsXG4gIC8qKiBjbGFzcyBmb3Igc2VsZWN0ZWQgTWVudUl0ZW0gKi9cbiAgaXRlbUNsYXNzQWN0aXZlOiAnYWN0aXZlJyxcbiAgLyoqIGFkZCBkaXNhYmxlZCBjbGFzcyB0byBhcnJvd3MgKi9cbiAgaGlkZUFycm93czogZmFsc2UsXG4gIC8qKiBoaWRlIGxlZnQvcmlnaHQgYXJyb3cgb24gbGVmdC9yaWdodCBlZGdlICovXG4gIGhpZGVTaW5nbGVBcnJvdzogZmFsc2UsXG4gIC8qKiBjbGFzcyBmb3IgU2Nyb2xsTWVudSAqL1xuICBtZW51Q2xhc3M6ICdob3Jpem9udGFsLW1lbnUnLFxuICAvKiogc3R5bGVzIGZvciBTY3JvbGxNZW51ICovXG4gIG1lbnVTdHlsZTogZGVmYXVsdE1lbnVTdHlsZSxcbiAgLyoqIGNiIHdoZW4gaXRlbSBzZWxlY3RlZCAqL1xuICBvblNlbGVjdDogKCkgPT4gZmFsc2UsXG4gIC8qKiBjYiB3aGVuIHBvc2l0aW9uIHVwZGF0ZWQgKi9cbiAgb25VcGRhdGU6ICgpID0+IGZhbHNlLFxuICAvKiogYXV0b21hdGljYWxseSBzY3JvbGwgdG8gc2VsZWN0ZWQgaXRlbSBvbiBpbml0aWFsaXphdGlvbiAqL1xuICBzY3JvbGxUb1NlbGVjdGVkOiBmYWxzZSxcbiAgLyoqIHNlbGVjdGVkIG1lbnUgaXRlbSAqL1xuICBzZWxlY3RlZDogJycsXG4gIC8qKiBwb3NpdGlvbiBvZiBlbGVtZW50cyAqL1xuICB0cmFuc2xhdGU6IDAuMCxcbiAgLyoqIGFuaW1hdGlvbiBzcGVlZCAqL1xuICB0cmFuc2l0aW9uOiAwLjQsXG4gIC8qKiBjbGFzcyBmb3Igd3JhcHBlciAqL1xuICB3cmFwcGVyQ2xhc3M6ICdtZW51LXdyYXBwZXInLFxuICAvKiogc3R5bGVzIGZvciB3cmFwcGVyICovXG4gIHdyYXBwZXJTdHlsZTogZGVmYXVsdFdyYXBwZXJTdHlsZSxcbiAgLyoqIHNjcm9sbCB3aXRoIG1vdXNlIHdoZWVsICovXG4gIHdoZWVsOiB0cnVlLFxuICAvKiogdGhpcyBub3QgdXNlZCAqL1xuICB4UG9pbnQ6IDAsXG59O1xuXG5leHBvcnQge2RlZmF1bHRQcm9wcywgZGVmYXVsdE1lbnVTdHlsZSwgZGVmYXVsdFdyYXBwZXJTdHlsZX07XG4iXSwic291cmNlUm9vdCI6IiJ9

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var scrollMenu_1 = __importDefault(__webpack_require__(/*! ./scrollMenu */ "./src/scrollMenu.tsx"));

exports.default = scrollMenu_1.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQUEsWUFBQSxHQUFBLGVBQUEsQ0FBQSxPQUFBLENBQUEsY0FBQSxDQUFBLENBQUE7O0FBRUEsT0FBQSxDQUFBLE9BQUEsR0FBZSxZQUFBLENBQUEsT0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTY3JvbGxNZW51IGZyb20gJy4vc2Nyb2xsTWVudSc7XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbE1lbnU7XG4iXSwic291cmNlUm9vdCI6IiJ9

/***/ }),

/***/ "./src/scrollMenu.tsx":
/*!****************************!*\
  !*** ./src/scrollMenu.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");

var defautSettings_1 = __webpack_require__(/*! ./defautSettings */ "./src/defautSettings.ts");

var wrapper_1 = __webpack_require__(/*! ./wrapper */ "./src/wrapper.tsx");

var ScrollMenu = function (_super) {
  __extends(ScrollMenu, _super);

  function ScrollMenu(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      dragging: false,
      xPoint: 0,
      translate: _this.props.translate,
      startDragTranslate: 0,
      xDraggedDistance: 0,
      leftArrowVisible: false,
      rightArrowVisible: true
    };

    _this.setRef = function (ref) {
      var _a = Object.entries(ref)[0],
          key = _a[0],
          value = _a[1];
      value.elem ? _this.ref[key] = value : false;
    };

    _this.setMenuInnerRef = function (ref) {
      _this.menuInner = ref;
    };

    _this.setWrapperRef = function (ref) {
      _this.menuWrapper = ref;
    };

    _this.checkSingleArrowVisibility = function (_a) {
      var _b = _a.translate,
          translate = _b === void 0 ? _this.state.translate : _b;
      var hideSingleArrow = _this.props.hideSingleArrow;
      var _c = [true, true],
          leftArrowVisible = _c[0],
          rightArrowVisible = _c[1];
      var items = _this.menuItems;

      if (hideSingleArrow && items) {
        var visibleItems = _this.getVisibleItems({
          offset: translate
        });

        var firstItemVisible = visibleItems.includes(items[0]);
        var lastItemVisible = visibleItems.includes(items.slice(-1)[0]);
        leftArrowVisible = !firstItemVisible;
        rightArrowVisible = !lastItemVisible;
      }

      return {
        leftArrowVisible: leftArrowVisible,
        rightArrowVisible: rightArrowVisible
      };
    };

    _this.setSingleArrowVisibility = function () {
      var _a = _this.state,
          leftArrowVisible = _a.leftArrowVisible,
          rightArrowVisible = _a.rightArrowVisible;

      var _b = _this.checkSingleArrowVisibility({}),
          leftArrowVisibleNew = _b.leftArrowVisible,
          rightArrowVisibleNew = _b.rightArrowVisible;

      if (leftArrowVisible !== leftArrowVisibleNew || rightArrowVisible !== rightArrowVisibleNew) {
        _this.setState({
          leftArrowVisible: leftArrowVisibleNew,
          rightArrowVisible: rightArrowVisibleNew
        });
      }
    };

    _this.onLoad = function () {
      _this.setInitial();

      _this.mounted = true;
    };

    _this.resizeHandler = function () {
      clearTimeout(_this.resizeTimer);
      _this.resizeTimer = setTimeout(function () {
        return _this.resize();
      }, 200);
    };

    _this.resize = function () {
      var _a = _this.updateWidth({}),
          wWidth = _a.wWidth,
          menuPos = _a.menuPos,
          menuWidth = _a.menuWidth,
          allItemsWidth = _a.allItemsWidth,
          firstPageOffset = _a.firstPageOffset,
          lastPageOffset = _a.lastPageOffset;

      _this.menuPos = menuPos;
      _this.wWidth = wWidth;
      _this.allItemsWidth = allItemsWidth;
      _this.menuWidth = menuWidth;
      _this.firstPageOffset = firstPageOffset;
      _this.lastPageOffset = lastPageOffset;
    };

    _this.setInitial = function () {
      var _a = _this.props,
          selected = _a.selected,
          data = _a.data,
          translateProps = _a.translate,
          scrollToSelected = _a.scrollToSelected;
      var translateState = _this.state.translate;
      if (!data || !data.length) return false;
      var translateProp = translateProps;

      var menuItems = _this.getMenuItems();

      var selectedItem = data.find(function (el) {
        return el.key === selected;
      });
      _this.menuItems = menuItems;
      _this.selected = selectedItem ? String(selectedItem.key || '') : defautSettings_1.defaultProps.selected;

      var _b = _this.updateWidth({}),
          wWidth = _b.wWidth,
          menuPos = _b.menuPos,
          menuWidth = _b.menuWidth,
          allItemsWidth = _b.allItemsWidth,
          firstPageOffset = _b.firstPageOffset,
          lastPageOffset = _b.lastPageOffset;

      _this.menuPos = menuPos;
      _this.wWidth = wWidth;
      _this.allItemsWidth = allItemsWidth;
      _this.menuWidth = menuWidth;
      _this.firstPageOffset = firstPageOffset;
      _this.lastPageOffset = lastPageOffset;

      var newState = __assign({}, _this.state);

      var firstMountAndDefaultTranslate = !_this.mounted && translateProp === defautSettings_1.defaultProps.translate;

      if (firstMountAndDefaultTranslate || !utils_1.translateIsValid(translateProp) && !utils_1.translateIsValid(translateState)) {
        newState.translate = _this.firstPageOffset;
      }

      var _c = _this.checkSingleArrowVisibility({
        translate: translateProp
      }),
          leftArrowVisible = _c.leftArrowVisible,
          rightArrowVisible = _c.rightArrowVisible;

      newState.leftArrowVisible = leftArrowVisible;
      newState.rightArrowVisible = rightArrowVisible;

      if (scrollToSelected) {
        var needScroll = _this.isScrollNeeded({
          itemId: selected,
          translate: newState.translate
        });

        if (needScroll) {
          newState.translate = _this.getOffsetToItemByKey(selected);
        }
      }

      _this.setState(__assign({}, newState));
    };

    _this.isScrollNeeded = function (_a) {
      var itemId = _a.itemId,
          _b = _a.translate,
          translate = _b === void 0 ? _this.state.translate : _b;
      var menuItems = _this.menuItems;

      var item = _this.getItemByKey(itemId);

      var visibleItems = _this.getVisibleItems({
        offset: translate
      });

      return !visibleItems.includes(item);
    };

    _this.scrollTo = function (itemKey) {
      var translate = _this.state.translate;

      var newTranslate = _this.getOffsetToItemByKey(itemKey);

      _this.selected = itemKey;
      if (translate === newTranslate) return false;

      _this.setState({
        translate: newTranslate
      });
    };

    _this.getMenuItems = function () {
      return Object.entries(_this.ref).slice(0, _this.props.data.length || 0);
    };

    _this.getItemsWidth = function (_a) {
      var _b = _a.items,
          items = _b === void 0 ? _this.menuItems : _b;
      return items.map(function (el) {
        return el[1].elem;
      }).filter(Boolean).reduce(function (acc, el) {
        return acc += utils_1.getClientRect(el).width;
      }, 0);
    };

    _this.getWidth = function (_a) {
      var items = _a.items;
      var wWidth = window && window.innerWidth;

      var _b = utils_1.getClientRect(_this.menuWrapper),
          menuPos = _b.x,
          menuWidth = _b.width;

      var allItemsWidth = _this.getItemsWidth({
        items: items
      });

      return {
        wWidth: wWidth,
        menuPos: menuPos,
        menuWidth: menuWidth,
        allItemsWidth: allItemsWidth
      };
    };

    _this.updateWidth = function (_a) {
      var _b = _a.items,
          items = _b === void 0 ? _this.menuItems : _b;

      var width = _this.getWidth({
        items: items
      });

      return __assign({}, width, _this.getPagesOffsets(__assign({
        items: items
      }, width)));
    };

    _this.getFirstPageOffset = function (_a) {
      var _b = _a.items,
          items = _b === void 0 ? _this.menuItems : _b,
          _c = _a.offset,
          offset = _c === void 0 ? _this.state.translate : _c,
          _d = _a.wWidth,
          wWidth = _d === void 0 ? _this.wWidth : _d,
          _e = _a.menuPos,
          menuPos = _e === void 0 ? _this.menuPos : _e,
          _f = _a.menuWidth,
          menuWidth = _f === void 0 ? _this.menuWidth : _f;

      var visibleItemsStart = _this.getVisibleItems({
        offset: offset,
        items: items,
        wWidth: wWidth,
        menuPos: menuPos,
        menuWidth: menuWidth
      });

      var firstPageOffset = _this.getCenterOffset({
        items: visibleItemsStart,
        menuWidth: menuWidth
      });

      return firstPageOffset;
    };

    _this.getLastPageOffset = function (_a) {
      var _b = _a.items,
          items = _b === void 0 ? _this.menuItems : _b,
          _c = _a.allItemsWidth,
          allItemsWidth = _c === void 0 ? _this.allItemsWidth : _c,
          _d = _a.wWidth,
          wWidth = _d === void 0 ? _this.wWidth : _d,
          _e = _a.menuPos,
          menuPos = _e === void 0 ? _this.menuPos : _e,
          _f = _a.menuWidth,
          menuWidth = _f === void 0 ? _this.menuWidth : _f;

      var visibleItemsEnd = _this.getVisibleItems({
        items: items,
        offset: -allItemsWidth + menuWidth,
        wWidth: wWidth,
        menuPos: menuPos,
        menuWidth: menuWidth
      });

      var lastPageOffset = _this.getCenterOffset({
        items: visibleItemsEnd,
        menuWidth: menuWidth
      });

      return lastPageOffset;
    };

    _this.getPagesOffsets = function (_a) {
      var _b = _a.items,
          items = _b === void 0 ? _this.menuItems : _b,
          _c = _a.allItemsWidth,
          allItemsWidth = _c === void 0 ? _this.allItemsWidth : _c,
          _d = _a.wWidth,
          wWidth = _d === void 0 ? _this.wWidth : _d,
          _e = _a.menuPos,
          menuPos = _e === void 0 ? _this.menuPos : _e,
          _f = _a.menuWidth,
          menuWidth = _f === void 0 ? _this.menuWidth : _f,
          _g = _a.offset,
          offset = _g === void 0 ? _this.state.translate : _g;

      var firstPageOffset = _this.getFirstPageOffset({
        items: items,
        menuWidth: menuWidth,
        offset: offset,
        wWidth: wWidth,
        menuPos: menuPos
      });

      var lastPageOffset = _this.getLastPageOffset({
        items: items,
        menuWidth: menuWidth,
        menuPos: menuPos,
        wWidth: wWidth,
        allItemsWidth: allItemsWidth
      });

      return {
        firstPageOffset: firstPageOffset,
        lastPageOffset: lastPageOffset
      };
    };

    _this.onItemClick = function (id) {
      var _a = _this.props,
          clickWhenDrag = _a.clickWhenDrag,
          onSelect = _a.onSelect;
      var xDraggedDistance = _this.state.xDraggedDistance;
      var afterScroll = xDraggedDistance > 5;
      if (afterScroll && !clickWhenDrag) return false;
      _this.selected = id;
      if (onSelect) onSelect(id);
    };

    _this.getVisibleItems = function (_a) {
      var _b = _a.items,
          items = _b === void 0 ? _this.menuItems : _b,
          _c = _a.wWidth,
          wWidth = _c === void 0 ? _this.wWidth : _c,
          _d = _a.menuPos,
          menuPos = _d === void 0 ? _this.menuPos : _d,
          _e = _a.menuWidth,
          menuWidth = _e === void 0 ? _this.menuWidth : _e,
          _f = _a.offset,
          offset = _f === void 0 ? _this.state.translate : _f,
          _g = _a.translate,
          translate = _g === void 0 ? _this.state.translate || defautSettings_1.defaultProps.translate : _g;
      return items.filter(function (el) {
        var elWidth = utils_1.getClientRect(el[1].elem).width;

        var id = _this.getItemInd(items, el);

        var x = _this.getOffsetToItemByIndex({
          index: id,
          menuItems: items,
          translate: translate
        });

        return _this.elemVisible({
          x: x,
          elWidth: elWidth,
          wWidth: wWidth,
          menuPos: menuPos,
          menuWidth: menuWidth,
          offset: offset
        });
      });
    };

    _this.elemVisible = function (_a) {
      var x = _a.x,
          _b = _a.offset,
          offset = _b === void 0 ? 0 : _b,
          elWidth = _a.elWidth,
          _c = _a.wWidth,
          wWidth = _c === void 0 ? _this.wWidth : _c,
          _d = _a.menuPos,
          menuPos = _d === void 0 ? _this.menuPos : _d,
          _e = _a.menuWidth,
          menuWidth = _e === void 0 ? _this.menuWidth : _e;
      var leftEdge = menuPos - 1;
      var rightEdge = wWidth - (wWidth - (menuPos + menuWidth)) + 1;
      var pos = x + offset;
      var posWithWidth = pos + elWidth;
      return pos >= leftEdge && posWithWidth <= rightEdge;
    };

    _this.getItemInd = function (menuItems, item) {
      if (menuItems === void 0) {
        menuItems = _this.menuItems;
      }

      if (!menuItems || !item) return 0;
      return menuItems.findIndex(function (el) {
        return el[0] === item[0];
      });
    };

    _this.getNextItemInd = function (left, visibleItems) {
      var menuItems = _this.menuItems;

      if (left) {
        if (!visibleItems.length) return 0;
      } else {
        if (!visibleItems.length) return menuItems.length;
      }

      var ind = left ? _this.getItemInd(menuItems, visibleItems[0]) - 1 : _this.getItemInd(menuItems, visibleItems.slice(-1)[0]) + 1;
      return ind < 0 ? 0 : ind;
    };

    _this.getOffsetToItemByKey = function (key) {
      var translate = _this.state.translate;

      var itemIndex = _this.getItemIndexByKey(key);

      if (itemIndex === -1) return translate;
      var menuPos = _this.menuPos;
      var alignCenter = _this.props.alignCenter;
      translate = _this.getOffsetToItemByIndex({
        index: itemIndex
      });

      var visibleItemsWithNewTranslate = _this.getVisibleItems({
        offset: -translate
      });

      var offset = alignCenter ? _this.getCenterOffset({
        items: visibleItemsWithNewTranslate
      }) : defautSettings_1.defaultProps.translate;
      translate = -(translate - menuPos - offset);

      if (_this.itBeforeStart(translate)) {
        translate = _this.getOffsetAtStart();
      } else if (_this.itAfterEnd(translate)) {
        translate = _this.getOffsetAtEnd();
      }

      return translate;
    };

    _this.getItemByKey = function (key) {
      return _this.menuItems.find(function (el) {
        return el[1].key === key;
      }) || ['null', {
        key: 'n',
        elem: null
      }];
    };

    _this.getItemIndexByKey = function (itemKey) {
      if (!itemKey) return -1;
      return _this.props.data.findIndex(function (el) {
        return el.key === itemKey;
      });
    };

    _this.getOffsetToItemByIndex = function (_a) {
      var index = _a.index,
          _b = _a.menuItems,
          menuItems = _b === void 0 ? _this.menuItems : _b,
          _c = _a.translate,
          translate = _c === void 0 ? _this.state.translate : _c;
      if (!menuItems.length) return 0;
      var ind = index >= menuItems.length ? menuItems.length - 1 : index;
      var x = utils_1.getClientRect(menuItems[ind][1].elem).x;
      var position = +x - translate;
      return position;
    };

    _this.getScrollRightOffset = function (visibleItems, items) {
      var alignCenter = _this.props.alignCenter;
      var _a = _this,
          menuPos = _a.menuPos,
          lastPageOffset = _a.lastPageOffset;

      var nextItem = _this.getNextItem(visibleItems && visibleItems.slice(-1)[0] ? visibleItems.slice(-1)[0][0] : items.slice(-1)[0][0]);

      var nextItemIndex = items.findIndex(function (el) {
        return el[0] === nextItem[0];
      });

      var offsetToItem = _this.getOffsetToItemByIndex({
        index: nextItemIndex,
        menuItems: items
      });

      var offsetToItemOnStart = offsetToItem - menuPos;

      var nextVisibleItems = _this.getVisibleItems({
        items: items,
        offset: -offsetToItemOnStart
      });

      if (nextVisibleItems.includes(items.slice(-1)[0])) {
        return alignCenter ? offsetToItemOnStart + lastPageOffset : offsetToItemOnStart;
      }

      var centerOffset = function centerOffset() {
        return _this.getCenterOffset({
          items: nextVisibleItems
        });
      };

      var newOffset = alignCenter ? offsetToItemOnStart - centerOffset() : offsetToItemOnStart;
      return newOffset;
    };

    _this.getScrollLeftOffset = function (visibleItems, items) {
      var alignCenter = _this.props.alignCenter;
      var _a = _this,
          menuPos = _a.menuPos,
          menuWidth = _a.menuWidth,
          firstPageOffset = _a.firstPageOffset;

      var prevItem = _this.getPrevItem(visibleItems && visibleItems[0] ? visibleItems[0][0] : items[0][0]);

      var prevItemIndex = items.findIndex(function (el) {
        return el[0] === prevItem[0];
      });

      var offsetToItem = _this.getOffsetToItemByIndex({
        index: prevItemIndex,
        menuItems: items
      });

      var itemWidth = _this.getItemsWidth({
        items: [prevItem]
      });

      var offsetToItemOnEnd = offsetToItem - menuPos - (menuWidth - itemWidth);

      var nextVisibleItems = _this.getVisibleItems({
        items: items,
        offset: -offsetToItemOnEnd
      });

      if (nextVisibleItems.includes(items[0])) {
        return alignCenter ? -firstPageOffset : defautSettings_1.defaultProps.translate;
      }

      var centerOffset = function centerOffset() {
        return _this.getCenterOffset({
          items: nextVisibleItems
        });
      };

      var newOffset = alignCenter ? offsetToItemOnEnd + centerOffset() : offsetToItemOnEnd;
      return newOffset;
    };

    _this.getNextItem = function (key) {
      var menuItems = _this.menuItems;
      var itemIndex = menuItems.findIndex(function (el) {
        return el[0] === key;
      });
      var nextItemIndex = itemIndex + 1;
      var nextItem = menuItems[nextItemIndex] || menuItems.slice(-1)[0];
      return nextItem;
    };

    _this.getPrevItem = function (key) {
      var menuItems = _this.menuItems;
      var itemIndex = menuItems.findIndex(function (el) {
        return el[0] === key;
      });
      var prevItemIndex = itemIndex - 1;
      var prevItem = menuItems[prevItemIndex] || menuItems[0];
      return prevItem;
    };

    _this.getOffset = function (left) {
      var items = _this.menuItems;

      var visibleItems = _this.getVisibleItems({
        items: items
      });

      var newOffset = left ? _this.getScrollLeftOffset(visibleItems, items) : _this.getScrollRightOffset(visibleItems, items);
      return newOffset;
    };

    _this.getCenterOffset = function (_a) {
      var _b = _a.items,
          items = _b === void 0 ? _this.menuItems : _b,
          _c = _a.menuWidth,
          menuWidth = _c === void 0 ? _this.menuWidth : _c;

      if (!items.length) {
        return 0;
      }

      var itemsWidth = _this.getItemsWidth({
        items: items
      });

      var offset = (menuWidth - itemsWidth) / 2;
      return offset;
    };

    _this.handleWheel = function (e) {
      var wheel = _this.props.wheel;
      if (!wheel) return false;

      if (e.deltaY < 0) {
        _this.handleArrowClick();
      } else {
        _this.handleArrowClick(false);
      }
    };

    _this.getOffsetAtStart = function () {
      var firstPageOffset = _this.firstPageOffset;
      var alignCenter = _this.props.alignCenter;
      return alignCenter ? firstPageOffset : defautSettings_1.defaultProps.translate;
    };

    _this.getOffsetAtEnd = function () {
      var alignCenter = _this.props.alignCenter;
      var _a = _this,
          allItemsWidth = _a.allItemsWidth,
          menuWidth = _a.menuWidth,
          lastPageOffset = _a.lastPageOffset;
      var offset = allItemsWidth - menuWidth;
      return alignCenter ? -offset - lastPageOffset : -offset;
    };

    _this.handleArrowClickRight = function () {
      _this.handleArrowClick(false);
    };

    _this.handleArrowClick = function (left) {
      if (left === void 0) {
        left = true;
      }

      var alignCenter = _this.props.alignCenter;
      var _a = _this,
          allItemsWidth = _a.allItemsWidth,
          menuWidth = _a.menuWidth;

      if (!alignCenter && !left && allItemsWidth < menuWidth) {
        return false;
      }

      var offset = _this.getOffset(left);

      var transl = -offset;

      if (left && _this.itBeforeStart(transl)) {
        transl = _this.getOffsetAtStart();
      } else if (!left && _this.itAfterEnd(transl)) {
        transl = _this.getOffsetAtEnd();
      }

      var newTranslate = transl;

      _this.setState({
        translate: newTranslate,
        xPoint: defautSettings_1.defaultProps.xPoint,
        startDragTranslate: 0,
        xDraggedDistance: 0
      });
    };

    _this.itBeforeStart = function (trans) {
      var alignCenter = _this.props.alignCenter;
      var _a = _this,
          menuWidth = _a.menuWidth,
          allItemsWidth = _a.allItemsWidth,
          firstPageOffset = _a.firstPageOffset;
      if (allItemsWidth < menuWidth) return true;
      return alignCenter ? trans > firstPageOffset : trans > defautSettings_1.defaultProps.translate;
    };

    _this.itAfterEnd = function (trans) {
      var alignCenter = _this.props.alignCenter;
      var _a = _this,
          menuWidth = _a.menuWidth,
          allItemsWidth = _a.allItemsWidth,
          lastPageOffset = _a.lastPageOffset;
      if (allItemsWidth < menuWidth) return true;
      return alignCenter ? trans < defautSettings_1.defaultProps.translate && Math.abs(trans) > allItemsWidth - menuWidth + lastPageOffset : trans < defautSettings_1.defaultProps.translate && Math.abs(trans) > allItemsWidth - menuWidth;
    };

    _this.getPoint = function (ev) {
      if ('touches' in ev) {
        return ev.touches[0].clientX;
      } else if ('clientX' in ev) {
        return ev.clientX;
      } else {
        return 0;
      }
    };

    _this.handleDragStart = function (ev) {
      if (ev && 'buttons' in ev && ev.buttons === 2) return false;
      var draggingEnable = _this.props.dragging;
      if (!draggingEnable) return false;
      var startDragTranslate = _this.state.translate;

      _this.setState({
        dragging: true,
        xPoint: 0,
        startDragTranslate: startDragTranslate,
        xDraggedDistance: 0
      });
    };

    _this.handleDrag = function (e) {
      var draggingEnable = _this.props.dragging;
      var _a = _this.state,
          translate = _a.translate,
          dragging = _a.dragging,
          xPoint = _a.xPoint,
          xDraggedDistance = _a.xDraggedDistance;
      if (!draggingEnable || !dragging) return false;

      var point = _this.getPoint(e);

      var diff = xPoint === defautSettings_1.defaultProps.xPoint ? defautSettings_1.defaultProps.xPoint : xPoint - point;
      var result = translate - diff;

      if (_this.itBeforeStart(result)) {
        result = result - Math.abs(diff) / 2;
      } else if (_this.itAfterEnd(result)) {
        result = result + Math.abs(diff) / 2;
      }

      var newTranslate = result;

      _this.setState({
        xPoint: point,
        translate: newTranslate,
        xDraggedDistance: xDraggedDistance + Math.abs(diff)
      });
    };

    _this.handleDragStop = function (e) {
      var _a = _this,
          allItemsWidth = _a.allItemsWidth,
          menuWidth = _a.menuWidth,
          firstPageOffset = _a.firstPageOffset,
          lastPageOffset = _a.lastPageOffset;
      var _b = _this.state,
          dragging = _b.dragging,
          _c = _b.xPoint,
          xPoint = _c === void 0 ? _this.getPoint(e) : _c,
          translate = _b.translate,
          startDragTranslate = _b.startDragTranslate;
      var _d = _this.props,
          draggingEnable = _d.dragging,
          alignCenter = _d.alignCenter;
      if (!draggingEnable || !dragging) return false;
      var newTranslate = translate;

      if (_this.itBeforeStart(translate)) {
        newTranslate = _this.getOffsetAtStart();
        xPoint = defautSettings_1.defaultProps.xPoint;
      } else if (_this.itAfterEnd(translate)) {
        newTranslate = _this.getOffsetAtEnd();
        xPoint = defautSettings_1.defaultProps.xPoint;
      }

      if (!alignCenter && allItemsWidth <= menuWidth) {
        newTranslate = defautSettings_1.defaultProps.translate;
        xPoint = defautSettings_1.defaultProps.xPoint;
      }

      newTranslate = newTranslate;

      _this.setState({
        dragging: false,
        xPoint: xPoint,
        translate: newTranslate
      }, function () {
        return _this.onUpdate({
          translate: newTranslate,
          translateOld: startDragTranslate
        });
      });
    };

    _this.isArrowsVisible = function () {
      var _a = _this,
          allItemsWidth = _a.allItemsWidth,
          menuWidth = _a.menuWidth,
          hideArrows = _a.props.hideArrows;
      var hide = Boolean(hideArrows && allItemsWidth <= menuWidth);
      return !hide;
    };

    _this.onUpdate = function (_a) {
      var _b = _a.translate,
          translate = _b === void 0 ? _this.state.translate : _b,
          _c = _a.translateOld,
          translateOld = _c === void 0 ? _this.state.translate : _c;
      var onUpdate = _this.props.onUpdate;
      var lastTranslateUpdate = _this.lastTranslateUpdate;

      if (onUpdate && translate !== translateOld && translate !== lastTranslateUpdate) {
        _this.lastTranslateUpdate = translate;
        onUpdate({
          translate: translate
        });
      }
    };

    _this.ref = {};
    _this.menuWrapper = null;
    _this.menuInner = null;
    _this.mounted = false;
    _this.needUpdate = false;
    _this.allItemsWidth = 0;
    _this.menuPos = 0;
    _this.menuWidth = 0;
    _this.wWidth = 0;
    _this.firstPageOffset = 0;
    _this.lastPageOffset = 0;
    _this.lastTranslateUpdate = 0;
    _this.menuItems = [];
    _this.selected = '';
    _this.onLoadTimer = 0;
    _this.rafTimer = 0;
    _this.resizeTimer = 0;
    checkVersion(_this);
    return _this;
  }

  ScrollMenu.prototype.componentDidMount = function () {
    var _this = this;

    this.setInitial();

    window.requestAnimationFrame = window.requestAnimationFrame || function () {};

    var passiveEvents = utils_1.testPassiveEventSupport();
    var optionsCapture = passiveEvents ? {
      passive: true,
      capture: true
    } : true;
    var optionsNoCapture = passiveEvents ? {
      passive: true,
      capture: false
    } : false;
    window.addEventListener('load', this.onLoad, optionsNoCapture);
    window.addEventListener('resize', this.resizeHandler, optionsNoCapture);
    document.addEventListener('mousemove', this.handleDrag, optionsCapture);
    document.addEventListener('mouseup', this.handleDragStop, optionsCapture);
    this.onLoadTimer = setTimeout(function () {
      return _this.onLoad(), _this.forceUpdate();
    }, 0);
  };

  ScrollMenu.prototype.shouldComponentUpdate = function (nextProps, nextState) {
    var _a = this.state,
        translate = _a.translate,
        dragging = _a.dragging,
        leftArrowVisible = _a.leftArrowVisible,
        rightArrowVisible = _a.rightArrowVisible;
    var translateNew = nextState.translate,
        draggingNew = nextState.dragging,
        leftArrowVisibleNew = nextState.leftArrowVisible,
        rightArrowVisibleNew = nextState.rightArrowVisible;
    var _b = this.props,
        translateProps = _b.translate,
        selectedProps = _b.selected,
        scrollToSelected = _b.scrollToSelected;
    var translatePropsNew = nextProps.translate,
        selectedPropsNew = nextProps.selected;
    var translatePropsNotNull = utils_1.notUndefOrNull(translatePropsNew);
    var translateStateDiff = translate !== translateNew;
    var translatePropsDiff = translatePropsNotNull && translateProps !== translatePropsNew;
    var translateDiff = translatePropsNew !== translateNew || translateStateDiff || translatePropsDiff;
    var selectedPropsDiff = utils_1.notUndefOrNull(selectedPropsNew) && selectedProps !== selectedPropsNew;
    var selectedDiff = selectedPropsDiff;
    var propsDiff = translateDiff || selectedDiff;
    var leftArrowVisibleDiff = leftArrowVisible !== leftArrowVisibleNew;
    var rightArrowVisibleDiff = rightArrowVisible !== rightArrowVisibleNew;
    var translateResult = translateNew;
    var newMenuItems = this.props.data !== nextProps.data || this.props.data.length !== nextProps.data.length;
    var newTranslateProps = utils_1.translateIsValid(translatePropsNew) && translatePropsDiff && !newMenuItems;

    if (newMenuItems || scrollToSelected && selectedPropsDiff) {
      this.needUpdate = true;
    }

    if (propsDiff) {
      if (selectedPropsDiff) {
        this.selected = selectedPropsNew;
      }

      if (newTranslateProps) {
        translateResult = translatePropsNew;
      }
    }

    if (newTranslateProps) {
      this.setState({
        translate: +translateResult
      });
    }

    return newMenuItems || translateDiff || dragging !== draggingNew || propsDiff || leftArrowVisibleDiff || rightArrowVisibleDiff;
  };

  ScrollMenu.prototype.componentDidUpdate = function (prevProps, prevState) {
    var _this = this;

    if (this.needUpdate) {
      this.needUpdate = false;
      this.onLoad();
    }

    var translateOld = prevState.translate;
    var _a = this.state,
        translateNew = _a.translate,
        dragging = _a.dragging;

    if (!dragging && translateOld !== translateNew) {
      this.onUpdate({
        translate: translateNew,
        translateOld: translateOld
      });
    }

    var _b = this.props,
        hideSingleArrow = _b.hideSingleArrow,
        transition = _b.transition;

    if (hideSingleArrow) {
      requestAnimationFrame(this.setSingleArrowVisibility);
      this.rafTimer = setTimeout(function () {
        return requestAnimationFrame(_this.setSingleArrowVisibility);
      }, transition * 1000 + 10);
    }
  };

  ScrollMenu.prototype.componentWillUnmount = function () {
    window.removeEventListener('resize', this.resizeHandler);
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.handleDragStop);
    clearTimeout(this.rafTimer);
    clearTimeout(this.onLoadTimer);
    clearTimeout(this.resizeTimer);
  };

  ScrollMenu.prototype.render = function () {
    var _a = this.props,
        arrowClass = _a.arrowClass,
        arrowDisabledClass = _a.arrowDisabledClass,
        arrowLeft = _a.arrowLeft,
        arrowRight = _a.arrowRight,
        data = _a.data,
        innerWrapperClass = _a.innerWrapperClass,
        itemClass = _a.itemClass,
        itemClassActive = _a.itemClassActive,
        hideArrows = _a.hideArrows,
        menuStyle = _a.menuStyle,
        menuClass = _a.menuClass,
        transition = _a.transition,
        wrapperClass = _a.wrapperClass,
        wrapperStyle = _a.wrapperStyle,
        forwardClick = _a.forwardClick;
    var _b = this.state,
        translate = _b.translate,
        dragging = _b.dragging,
        leftArrowVisible = _b.leftArrowVisible,
        rightArrowVisible = _b.rightArrowVisible;

    var _c = this,
        selected = _c.selected,
        mounted = _c.mounted;

    if (!data || !data.length) return null;
    var arrowsVisible = mounted ? this.isArrowsVisible() : true;

    var menuStyles = __assign({}, defautSettings_1.defaultMenuStyle, menuStyle);

    var wrapperStyles = __assign({}, defautSettings_1.defaultWrapperStyle, wrapperStyle);

    var arrowProps = {
      className: arrowClass,
      hideArrows: hideArrows,
      onClick: this.handleArrowClick,
      disabledClass: arrowDisabledClass,
      forwardClick: forwardClick
    };
    return react_1.default.createElement("div", {
      className: menuClass,
      style: menuStyles,
      onWheel: this.handleWheel
    }, arrowLeft && react_1.default.createElement(wrapper_1.ArrowWrapper, __assign({}, arrowProps, {
      isDisabled: !arrowsVisible || !leftArrowVisible
    }), arrowLeft), react_1.default.createElement("div", {
      className: wrapperClass,
      style: wrapperStyles,
      ref: this.setWrapperRef,
      onMouseDown: this.handleDragStart,
      onTouchStart: this.handleDragStart,
      onTouchEnd: this.handleDragStop,
      onMouseMove: this.handleDrag,
      onTouchMove: this.handleDrag
    }, react_1.default.createElement(wrapper_1.InnerWrapper, {
      data: data,
      translate: translate,
      dragging: dragging,
      mounted: mounted,
      transition: mounted ? transition : 0,
      selected: selected,
      setRef: this.setRef,
      setMenuInnerRef: this.setMenuInnerRef,
      onClick: this.onItemClick,
      innerWrapperClass: innerWrapperClass,
      itemClass: itemClass,
      itemClassActive: itemClassActive,
      forwardClick: forwardClick
    })), arrowRight && react_1.default.createElement(wrapper_1.ArrowWrapper, __assign({}, arrowProps, {
      isDisabled: !arrowsVisible || !rightArrowVisible
    }), arrowRight));
  };

  ScrollMenu.defaultProps = defautSettings_1.defaultProps;
  return ScrollMenu;
}(react_1.default.Component);

exports.ScrollMenu = ScrollMenu;

var checkVersion = function checkVersion(that) {
  var version = react_1.default.version.match(/^(\d{1,2})\./);

  if (+version[1] >= 16) {
    that.componentDidCatch = function (err, info) {
      console.log('ScrollMenu catched error: ', err, info);
    };
  }
};

exports.default = ScrollMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUvc3JjL3Njcm9sbE1lbnUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUEsT0FBQSxHQUFBLGVBQUEsQ0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLENBQUE7O0FBRUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQTs7QUFNQSxJQUFBLGdCQUFBLEdBQUEsT0FBQSxDQUFBLGtCQUFBLENBQUE7O0FBTUEsSUFBQSxTQUFBLEdBQUEsT0FBQSxDQUFBLFdBQUEsQ0FBQTs7QUFZQSxJQUFBLFVBQUEsR0FBQSxVQUFBLE1BQUEsRUFBQTtBQUFnQyxFQUFBLFNBQUEsQ0FBQSxVQUFBLEVBQUEsTUFBQSxDQUFBOztBQXVCOUIsV0FBQSxVQUFBLENBQVksS0FBWixFQUE0QjtBQUE1QixRQUFBLEtBQUEsR0FDRSxNQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsRUFBTSxLQUFOLEtBQVksSUFEZDs7QUF3QkEsSUFBQSxLQUFBLENBQUEsS0FBQSxHQUFRO0FBQ04sTUFBQSxRQUFRLEVBQUUsS0FESjtBQUVOLE1BQUEsTUFBTSxFQUFFLENBRkY7QUFHTixNQUFBLFNBQVMsRUFBRSxLQUFJLENBQUMsS0FBTCxDQUFXLFNBSGhCO0FBSU4sTUFBQSxrQkFBa0IsRUFBRSxDQUpkO0FBS04sTUFBQSxnQkFBZ0IsRUFBRSxDQUxaO0FBTU4sTUFBQSxnQkFBZ0IsRUFBRSxLQU5aO0FBT04sTUFBQSxpQkFBaUIsRUFBRTtBQVBiLEtBQVI7O0FBcUpBLElBQUEsS0FBQSxDQUFBLE1BQUEsR0FBUyxVQUFDLEdBQUQsRUFBZTtBQUNoQixVQUFBLEVBQUEsR0FBQSxNQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUE7QUFBQSxVQUFDLEdBQUEsR0FBQSxFQUFBLENB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T0FBQSxDQUFBLE9BQUEsR0FBZSxVQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFdoZWVsRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIHRyYW5zbGF0ZUlzVmFsaWQsXG4gIG5vdFVuZGVmT3JOdWxsLFxuICBnZXRDbGllbnRSZWN0LFxuICB0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCxcbn0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge1xuICBkZWZhdWx0UHJvcHMsXG4gIGRlZmF1bHRNZW51U3R5bGUsXG4gIGRlZmF1bHRXcmFwcGVyU3R5bGUsXG59IGZyb20gJy4vZGVmYXV0U2V0dGluZ3MnO1xuaW1wb3J0IHsgTWVudVByb3BzLCBSZWYsIFJlZk9iamVjdCwgVm9pZCwgTWVudUl0ZW0sIE1lbnVJdGVtcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgQXJyb3dXcmFwcGVyLCBJbm5lcldyYXBwZXIgfSBmcm9tICcuL3dyYXBwZXInO1xuXG5pbnRlcmZhY2UgTWVudVN0YXRlIHtcbiAgZHJhZ2dpbmc6IGJvb2xlYW47XG4gIHhQb2ludDogbnVtYmVyO1xuICB0cmFuc2xhdGU6IG51bWJlcjtcbiAgc3RhcnREcmFnVHJhbnNsYXRlOiBudW1iZXI7XG4gIHhEcmFnZ2VkRGlzdGFuY2U6IG51bWJlcjtcbiAgbGVmdEFycm93VmlzaWJsZTogYm9vbGVhbjtcbiAgcmlnaHRBcnJvd1Zpc2libGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBTY3JvbGxNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE1lbnVQcm9wcywgTWVudVN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IE1lbnVQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuICBwcml2YXRlIHJlZjogUmVmT2JqZWN0O1xuICBwcml2YXRlIG1lbnVXcmFwcGVyOiBSZWY7XG4gIHByaXZhdGUgbWVudUlubmVyOiBSZWY7XG4gIHByaXZhdGUgbW91bnRlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBuZWVkVXBkYXRlOiBib29sZWFuO1xuICBwcml2YXRlIGFsbEl0ZW1zV2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBtZW51UG9zOiBudW1iZXI7XG4gIHByaXZhdGUgbWVudVdpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgd1dpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgZmlyc3RQYWdlT2Zmc2V0OiBudW1iZXI7XG4gIHByaXZhdGUgbGFzdFBhZ2VPZmZzZXQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBsYXN0VHJhbnNsYXRlVXBkYXRlOiBudW1iZXI7XG4gIHByaXZhdGUgbWVudUl0ZW1zOiBNZW51SXRlbXM7XG4gIHByaXZhdGUgc2VsZWN0ZWQ6IHN0cmluZztcblxuICAvKiogdGltZXJzIGZvciBzZXRUaW1lb3V0IGlmIFJBRiBub3Qgc3VwcG9ydGVkICovXG4gIHByaXZhdGUgb25Mb2FkVGltZXI6IGFueTtcbiAgcHJpdmF0ZSByYWZUaW1lcjogYW55O1xuICBwcml2YXRlIHJlc2l6ZVRpbWVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IE1lbnVQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnJlZiA9IHt9O1xuICAgIHRoaXMubWVudVdyYXBwZXIgPSBudWxsO1xuICAgIHRoaXMubWVudUlubmVyID0gbnVsbDtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLm5lZWRVcGRhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmFsbEl0ZW1zV2lkdGggPSAwO1xuICAgIHRoaXMubWVudVBvcyA9IDA7XG4gICAgdGhpcy5tZW51V2lkdGggPSAwO1xuICAgIHRoaXMud1dpZHRoID0gMDtcbiAgICB0aGlzLmZpcnN0UGFnZU9mZnNldCA9IDA7XG4gICAgdGhpcy5sYXN0UGFnZU9mZnNldCA9IDA7XG4gICAgdGhpcy5sYXN0VHJhbnNsYXRlVXBkYXRlID0gMDtcbiAgICB0aGlzLm1lbnVJdGVtcyA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSAnJztcblxuICAgIHRoaXMub25Mb2FkVGltZXIgPSAwO1xuICAgIHRoaXMucmFmVGltZXIgPSAwO1xuICAgIHRoaXMucmVzaXplVGltZXIgPSAwO1xuXG4gICAgY2hlY2tWZXJzaW9uKHRoaXMpO1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgIHhQb2ludDogMCxcbiAgICB0cmFuc2xhdGU6IHRoaXMucHJvcHMudHJhbnNsYXRlLFxuICAgIHN0YXJ0RHJhZ1RyYW5zbGF0ZTogMCxcbiAgICB4RHJhZ2dlZERpc3RhbmNlOiAwLFxuICAgIGxlZnRBcnJvd1Zpc2libGU6IGZhbHNlLFxuICAgIHJpZ2h0QXJyb3dWaXNpYmxlOiB0cnVlLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IFZvaWQge1xuICAgIHRoaXMuc2V0SW5pdGlhbCgpO1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uKCkge307XG5cbiAgICBjb25zdCBwYXNzaXZlRXZlbnRzID0gdGVzdFBhc3NpdmVFdmVudFN1cHBvcnQoKTtcbiAgICBjb25zdCBvcHRpb25zQ2FwdHVyZSA9IHBhc3NpdmVFdmVudHNcbiAgICAgID8geyBwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiB0cnVlIH1cbiAgICAgIDogdHJ1ZTtcbiAgICBjb25zdCBvcHRpb25zTm9DYXB0dXJlID0gcGFzc2l2ZUV2ZW50c1xuICAgICAgPyB7IHBhc3NpdmU6IHRydWUsIGNhcHR1cmU6IGZhbHNlIH1cbiAgICAgIDogZmFsc2U7XG5cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgdGhpcy5vbkxvYWQsIG9wdGlvbnNOb0NhcHR1cmUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUhhbmRsZXIsIG9wdGlvbnNOb0NhcHR1cmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlRHJhZywgb3B0aW9uc0NhcHR1cmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZURyYWdTdG9wLCBvcHRpb25zQ2FwdHVyZSk7XG5cbiAgICAvLyBpZiBzdHlsZXMgbG9hZGVkIGJlZm9yZSBqcyBidW5kbGUgbmVlZCB3YWl0IGZvciBpdFxuICAgIHRoaXMub25Mb2FkVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLm9uTG9hZCgpLCB0aGlzLmZvcmNlVXBkYXRlKCkpLCAwKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHM6IE1lbnVQcm9wcywgbmV4dFN0YXRlOiBNZW51U3RhdGUpOiBib29sZWFuIHtcbiAgICAvLyBUT0RPOiBuZWVkIHJlZmFjdG9yIGFsbCB0aGlzIG9yIHJlbW92ZVxuICAgIC8vIGl0J3MgdG9vIGNvbXBsaWNhdGVkIGFscmVhZHlcbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2xhdGUsXG4gICAgICBkcmFnZ2luZyxcbiAgICAgIGxlZnRBcnJvd1Zpc2libGUsXG4gICAgICByaWdodEFycm93VmlzaWJsZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2xhdGU6IHRyYW5zbGF0ZU5ldyxcbiAgICAgIGRyYWdnaW5nOiBkcmFnZ2luZ05ldyxcbiAgICAgIGxlZnRBcnJvd1Zpc2libGU6IGxlZnRBcnJvd1Zpc2libGVOZXcsXG4gICAgICByaWdodEFycm93VmlzaWJsZTogcmlnaHRBcnJvd1Zpc2libGVOZXcsXG4gICAgfSA9IG5leHRTdGF0ZTtcblxuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlUHJvcHMsXG4gICAgICBzZWxlY3RlZDogc2VsZWN0ZWRQcm9wcyxcbiAgICAgIHNjcm9sbFRvU2VsZWN0ZWQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNsYXRlOiB0cmFuc2xhdGVQcm9wc05ldyxcbiAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZFByb3BzTmV3LFxuICAgIH0gPSBuZXh0UHJvcHM7XG5cbiAgICBjb25zdCB0cmFuc2xhdGVQcm9wc05vdE51bGwgPSBub3RVbmRlZk9yTnVsbCh0cmFuc2xhdGVQcm9wc05ldyk7XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGVEaWZmID0gdHJhbnNsYXRlICE9PSB0cmFuc2xhdGVOZXc7XG4gICAgY29uc3QgdHJhbnNsYXRlUHJvcHNEaWZmID1cbiAgICAgIHRyYW5zbGF0ZVByb3BzTm90TnVsbCAmJiB0cmFuc2xhdGVQcm9wcyAhPT0gdHJhbnNsYXRlUHJvcHNOZXc7XG4gICAgY29uc3QgdHJhbnNsYXRlRGlmZiA9XG4gICAgICB0cmFuc2xhdGVQcm9wc05ldyAhPT0gdHJhbnNsYXRlTmV3IHx8XG4gICAgICAodHJhbnNsYXRlU3RhdGVEaWZmIHx8IHRyYW5zbGF0ZVByb3BzRGlmZik7XG5cbiAgICBjb25zdCBzZWxlY3RlZFByb3BzRGlmZiA9XG4gICAgICBub3RVbmRlZk9yTnVsbChzZWxlY3RlZFByb3BzTmV3KSAmJiBzZWxlY3RlZFByb3BzICE9PSBzZWxlY3RlZFByb3BzTmV3O1xuICAgIGNvbnN0IHNlbGVjdGVkRGlmZiA9IHNlbGVjdGVkUHJvcHNEaWZmO1xuXG4gICAgY29uc3QgcHJvcHNEaWZmID0gdHJhbnNsYXRlRGlmZiB8fCBzZWxlY3RlZERpZmY7XG5cbiAgICBjb25zdCBsZWZ0QXJyb3dWaXNpYmxlRGlmZiA9IGxlZnRBcnJvd1Zpc2libGUgIT09IGxlZnRBcnJvd1Zpc2libGVOZXc7XG4gICAgY29uc3QgcmlnaHRBcnJvd1Zpc2libGVEaWZmID0gcmlnaHRBcnJvd1Zpc2libGUgIT09IHJpZ2h0QXJyb3dWaXNpYmxlTmV3O1xuXG4gICAgbGV0IHRyYW5zbGF0ZVJlc3VsdCA9IHRyYW5zbGF0ZU5ldztcblxuICAgIGNvbnN0IG5ld01lbnVJdGVtcyA9XG4gICAgICB0aGlzLnByb3BzLmRhdGEgIT09IG5leHRQcm9wcy5kYXRhIHx8XG4gICAgICB0aGlzLnByb3BzLmRhdGEubGVuZ3RoICE9PSBuZXh0UHJvcHMuZGF0YS5sZW5ndGg7XG4gICAgY29uc3QgbmV3VHJhbnNsYXRlUHJvcHMgPVxuICAgICAgdHJhbnNsYXRlSXNWYWxpZCh0cmFuc2xhdGVQcm9wc05ldykgJiZcbiAgICAgIHRyYW5zbGF0ZVByb3BzRGlmZiAmJlxuICAgICAgIW5ld01lbnVJdGVtcztcblxuICAgIGlmIChuZXdNZW51SXRlbXMgfHwgKHNjcm9sbFRvU2VsZWN0ZWQgJiYgc2VsZWN0ZWRQcm9wc0RpZmYpKSB7XG4gICAgICB0aGlzLm5lZWRVcGRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9wc0RpZmYpIHtcbiAgICAgIGlmIChzZWxlY3RlZFByb3BzRGlmZikge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWRQcm9wc05ldztcbiAgICAgIH1cblxuICAgICAgaWYgKG5ld1RyYW5zbGF0ZVByb3BzKSB7XG4gICAgICAgIHRyYW5zbGF0ZVJlc3VsdCA9IHRyYW5zbGF0ZVByb3BzTmV3O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdUcmFuc2xhdGVQcm9wcykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRyYW5zbGF0ZTogK3RyYW5zbGF0ZVJlc3VsdCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgbmV3TWVudUl0ZW1zIHx8XG4gICAgICB0cmFuc2xhdGVEaWZmIHx8XG4gICAgICBkcmFnZ2luZyAhPT0gZHJhZ2dpbmdOZXcgfHxcbiAgICAgIHByb3BzRGlmZiB8fFxuICAgICAgbGVmdEFycm93VmlzaWJsZURpZmYgfHxcbiAgICAgIHJpZ2h0QXJyb3dWaXNpYmxlRGlmZlxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBNZW51UHJvcHMsIHByZXZTdGF0ZTogTWVudVN0YXRlKTogVm9pZCB7XG4gICAgLy8gdXBkYXRlIGlmIGhhdmUgbmV3IG1lbnUgaXRlbXMgb3Igc2VsZWN0ZWQgdmFsdWVcbiAgICBpZiAodGhpcy5uZWVkVXBkYXRlKSB7XG4gICAgICB0aGlzLm5lZWRVcGRhdGUgPSBmYWxzZTtcbiAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyB0cmFuc2xhdGU6IHRyYW5zbGF0ZU9sZCB9ID0gcHJldlN0YXRlO1xuICAgIGxldCB7IHRyYW5zbGF0ZTogdHJhbnNsYXRlTmV3LCBkcmFnZ2luZyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICghZHJhZ2dpbmcgJiYgdHJhbnNsYXRlT2xkICE9PSB0cmFuc2xhdGVOZXcpIHtcbiAgICAgIHRoaXMub25VcGRhdGUoeyB0cmFuc2xhdGU6IHRyYW5zbGF0ZU5ldywgdHJhbnNsYXRlT2xkIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHsgaGlkZVNpbmdsZUFycm93LCB0cmFuc2l0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChoaWRlU2luZ2xlQXJyb3cpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnNldFNpbmdsZUFycm93VmlzaWJpbGl0eSk7XG4gICAgICB0aGlzLnJhZlRpbWVyID0gc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuc2V0U2luZ2xlQXJyb3dWaXNpYmlsaXR5KSxcbiAgICAgICAgdHJhbnNpdGlvbiAqIDEwMDAgKyAxMFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiBWb2lkIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemVIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZURyYWcpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZURyYWdTdG9wKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5yYWZUaW1lcik7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMub25Mb2FkVGltZXIpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVyKTtcbiAgfVxuXG4gIC8qKiBzZXQgcmVmIGZvciBNZW51SXRlbXMgKi9cbiAgc2V0UmVmID0gKHJlZjogUmVmT2JqZWN0KTogVm9pZCA9PiB7XG4gICAgY29uc3QgW2tleSwgdmFsdWVdID0gT2JqZWN0LmVudHJpZXMocmVmKVswXTtcbiAgICB2YWx1ZS5lbGVtID8gKHRoaXMucmVmW2tleV0gPSB2YWx1ZSkgOiBmYWxzZTtcbiAgfTtcblxuICBzZXRNZW51SW5uZXJSZWYgPSAocmVmOiBSZWYpID0+IHtcbiAgICB0aGlzLm1lbnVJbm5lciA9IHJlZjtcbiAgfTtcblxuICAvKiogc2V0IHJlZiBmb3Igd3JhcHBlciAqL1xuICBzZXRXcmFwcGVyUmVmID0gKHJlZjogUmVmKTogVm9pZCA9PiB7XG4gICAgdGhpcy5tZW51V3JhcHBlciA9IHJlZjtcbiAgfTtcblxuICAvKiogY2hlY2sgaWYgYXJyb3dzIHZpc2libGUgKi9cbiAgY2hlY2tTaW5nbGVBcnJvd1Zpc2liaWxpdHkgPSAoe1xuICAgIHRyYW5zbGF0ZSA9IHRoaXMuc3RhdGUudHJhbnNsYXRlLFxuICB9OiB7XG4gICAgdHJhbnNsYXRlPzogbnVtYmVyO1xuICB9KTogeyBsZWZ0QXJyb3dWaXNpYmxlOiBib29sZWFuOyByaWdodEFycm93VmlzaWJsZTogYm9vbGVhbiB9ID0+IHtcbiAgICBjb25zdCB7IGhpZGVTaW5nbGVBcnJvdyB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgW2xlZnRBcnJvd1Zpc2libGUsIHJpZ2h0QXJyb3dWaXNpYmxlXSA9IFt0cnVlLCB0cnVlXTtcbiAgICBjb25zdCB7IG1lbnVJdGVtczogaXRlbXMgfSA9IHRoaXM7XG5cbiAgICBpZiAoaGlkZVNpbmdsZUFycm93ICYmIGl0ZW1zKSB7XG4gICAgICBjb25zdCB2aXNpYmxlSXRlbXMgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7IG9mZnNldDogdHJhbnNsYXRlIH0pO1xuICAgICAgY29uc3QgZmlyc3RJdGVtVmlzaWJsZSA9IHZpc2libGVJdGVtcy5pbmNsdWRlcyhpdGVtc1swXSk7XG4gICAgICBjb25zdCBsYXN0SXRlbVZpc2libGUgPSB2aXNpYmxlSXRlbXMuaW5jbHVkZXMoaXRlbXMuc2xpY2UoLTEpWzBdKTtcbiAgICAgIGxlZnRBcnJvd1Zpc2libGUgPSAhZmlyc3RJdGVtVmlzaWJsZTtcbiAgICAgIHJpZ2h0QXJyb3dWaXNpYmxlID0gIWxhc3RJdGVtVmlzaWJsZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBsZWZ0QXJyb3dWaXNpYmxlLCByaWdodEFycm93VmlzaWJsZSB9O1xuICB9O1xuXG4gIC8qKiBjaGVjayBhcnJvd3MgdmlzaWJsZSBvciBub3QgYW5kIHNldFN0YXRlICovXG4gIHNldFNpbmdsZUFycm93VmlzaWJpbGl0eSA9ICgpOiBWb2lkID0+IHtcbiAgICBjb25zdCB7IGxlZnRBcnJvd1Zpc2libGUsIHJpZ2h0QXJyb3dWaXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIGxlZnRBcnJvd1Zpc2libGU6IGxlZnRBcnJvd1Zpc2libGVOZXcsXG4gICAgICByaWdodEFycm93VmlzaWJsZTogcmlnaHRBcnJvd1Zpc2libGVOZXcsXG4gICAgfSA9IHRoaXMuY2hlY2tTaW5nbGVBcnJvd1Zpc2liaWxpdHkoe30pO1xuICAgIGlmIChcbiAgICAgIGxlZnRBcnJvd1Zpc2libGUgIT09IGxlZnRBcnJvd1Zpc2libGVOZXcgfHxcbiAgICAgIHJpZ2h0QXJyb3dWaXNpYmxlICE9PSByaWdodEFycm93VmlzaWJsZU5ld1xuICAgICkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxlZnRBcnJvd1Zpc2libGU6IGxlZnRBcnJvd1Zpc2libGVOZXcsXG4gICAgICAgIHJpZ2h0QXJyb3dWaXNpYmxlOiByaWdodEFycm93VmlzaWJsZU5ldyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBvbkxvYWQgPSAoKTogVm9pZCA9PiB7XG4gICAgdGhpcy5zZXRJbml0aWFsKCk7XG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgfTtcblxuICAvKioga2luZGEgZGVib3VuY2UgKi9cbiAgcmVzaXplSGFuZGxlciA9ICgpOiBWb2lkID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lcik7XG4gICAgdGhpcy5yZXNpemVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXNpemUoKSwgMjAwKTtcbiAgfTtcblxuICAvKiogU2V0IHZhbHVlcyBvbiByZXNpemUgKi9cbiAgcmVzaXplID0gKCk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHdXaWR0aCxcbiAgICAgIG1lbnVQb3MsXG4gICAgICBtZW51V2lkdGgsXG4gICAgICBhbGxJdGVtc1dpZHRoLFxuICAgICAgZmlyc3RQYWdlT2Zmc2V0LFxuICAgICAgbGFzdFBhZ2VPZmZzZXQsXG4gICAgfSA9IHRoaXMudXBkYXRlV2lkdGgoe30pO1xuICAgIHRoaXMubWVudVBvcyA9IG1lbnVQb3M7XG4gICAgdGhpcy53V2lkdGggPSB3V2lkdGg7XG4gICAgdGhpcy5hbGxJdGVtc1dpZHRoID0gYWxsSXRlbXNXaWR0aDtcbiAgICB0aGlzLm1lbnVXaWR0aCA9IG1lbnVXaWR0aDtcbiAgICB0aGlzLmZpcnN0UGFnZU9mZnNldCA9IGZpcnN0UGFnZU9mZnNldDtcbiAgICB0aGlzLmxhc3RQYWdlT2Zmc2V0ID0gbGFzdFBhZ2VPZmZzZXQ7XG4gIH07XG5cbiAgLyoqIHNldCBpbml0aWFsIHZhbHVlcyBhbmQgZm9yIHVwZGF0ZXMgKi9cbiAgc2V0SW5pdGlhbCA9ICgpOiBWb2lkID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzZWxlY3RlZCxcbiAgICAgIGRhdGEsXG4gICAgICB0cmFuc2xhdGU6IHRyYW5zbGF0ZVByb3BzLFxuICAgICAgc2Nyb2xsVG9TZWxlY3RlZCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRyYW5zbGF0ZTogdHJhbnNsYXRlU3RhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKCFkYXRhIHx8ICFkYXRhLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGxldCB0cmFuc2xhdGVQcm9wID0gdHJhbnNsYXRlUHJvcHM7XG5cbiAgICBjb25zdCBtZW51SXRlbXMgPSB0aGlzLmdldE1lbnVJdGVtcygpO1xuICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IGRhdGEuZmluZChlbCA9PiBlbC5rZXkgPT09IHNlbGVjdGVkKTtcbiAgICB0aGlzLm1lbnVJdGVtcyA9IG1lbnVJdGVtcztcbiAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWRJdGVtXG4gICAgICA/IFN0cmluZyhzZWxlY3RlZEl0ZW0ua2V5IHx8ICcnKVxuICAgICAgOiBkZWZhdWx0UHJvcHMuc2VsZWN0ZWQ7XG5cbiAgICAvLyBhbGlnbiBpdGVtIG9uIGluaXRpYWwgbG9hZFxuICAgIGNvbnN0IHtcbiAgICAgIHdXaWR0aCxcbiAgICAgIG1lbnVQb3MsXG4gICAgICBtZW51V2lkdGgsXG4gICAgICBhbGxJdGVtc1dpZHRoLFxuICAgICAgZmlyc3RQYWdlT2Zmc2V0LFxuICAgICAgbGFzdFBhZ2VPZmZzZXQsXG4gICAgfSA9IHRoaXMudXBkYXRlV2lkdGgoe30pO1xuICAgIHRoaXMubWVudVBvcyA9IG1lbnVQb3M7XG4gICAgdGhpcy53V2lkdGggPSB3V2lkdGg7XG4gICAgdGhpcy5hbGxJdGVtc1dpZHRoID0gYWxsSXRlbXNXaWR0aDtcbiAgICB0aGlzLm1lbnVXaWR0aCA9IG1lbnVXaWR0aDtcbiAgICB0aGlzLmZpcnN0UGFnZU9mZnNldCA9IGZpcnN0UGFnZU9mZnNldDtcbiAgICB0aGlzLmxhc3RQYWdlT2Zmc2V0ID0gbGFzdFBhZ2VPZmZzZXQ7XG5cbiAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuXG4gICAgLy8gc2V0IHRyYW5zbGF0ZSBvbiBmaXJzdCBsb2FkXG4gICAgY29uc3QgZmlyc3RNb3VudEFuZERlZmF1bHRUcmFuc2xhdGUgPVxuICAgICAgIXRoaXMubW91bnRlZCAmJiB0cmFuc2xhdGVQcm9wID09PSBkZWZhdWx0UHJvcHMudHJhbnNsYXRlO1xuICAgIGlmIChcbiAgICAgIGZpcnN0TW91bnRBbmREZWZhdWx0VHJhbnNsYXRlIHx8XG4gICAgICAoIXRyYW5zbGF0ZUlzVmFsaWQodHJhbnNsYXRlUHJvcCkgJiYgIXRyYW5zbGF0ZUlzVmFsaWQodHJhbnNsYXRlU3RhdGUpKVxuICAgICkge1xuICAgICAgbmV3U3RhdGUudHJhbnNsYXRlID0gdGhpcy5maXJzdFBhZ2VPZmZzZXQ7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgYXJyb3dzXG4gICAgY29uc3Qge1xuICAgICAgbGVmdEFycm93VmlzaWJsZSxcbiAgICAgIHJpZ2h0QXJyb3dWaXNpYmxlLFxuICAgIH0gPSB0aGlzLmNoZWNrU2luZ2xlQXJyb3dWaXNpYmlsaXR5KHsgdHJhbnNsYXRlOiB0cmFuc2xhdGVQcm9wIH0pO1xuICAgIG5ld1N0YXRlLmxlZnRBcnJvd1Zpc2libGUgPSBsZWZ0QXJyb3dWaXNpYmxlO1xuICAgIG5ld1N0YXRlLnJpZ2h0QXJyb3dWaXNpYmxlID0gcmlnaHRBcnJvd1Zpc2libGU7XG5cbiAgICAvLyBzY3JvbGxUb1NlbGVjdGVkXG4gICAgaWYgKHNjcm9sbFRvU2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IG5lZWRTY3JvbGwgPSB0aGlzLmlzU2Nyb2xsTmVlZGVkKHtcbiAgICAgICAgaXRlbUlkOiBzZWxlY3RlZCxcbiAgICAgICAgdHJhbnNsYXRlOiBuZXdTdGF0ZS50cmFuc2xhdGUsXG4gICAgICB9KTtcbiAgICAgIGlmIChuZWVkU2Nyb2xsKSB7XG4gICAgICAgIG5ld1N0YXRlLnRyYW5zbGF0ZSA9IHRoaXMuZ2V0T2Zmc2V0VG9JdGVtQnlLZXkoc2VsZWN0ZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyAuLi5uZXdTdGF0ZSB9KTtcbiAgfTtcblxuICAvKiogY2hlY2sgaWYgc2VsZWN0ZWQgaXRlbSB2aXNpYmxlIG9uIHNjcmVlbiBvciBuZWVkIHNjcm9sbCB0byBpdCAqL1xuICBpc1Njcm9sbE5lZWRlZCA9ICh7XG4gICAgaXRlbUlkLFxuICAgIHRyYW5zbGF0ZSA9IHRoaXMuc3RhdGUudHJhbnNsYXRlLFxuICB9OiB7XG4gICAgaXRlbUlkOiBzdHJpbmc7XG4gICAgdHJhbnNsYXRlPzogbnVtYmVyO1xuICB9KTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgeyBtZW51SXRlbXMgfSA9IHRoaXM7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0SXRlbUJ5S2V5KGl0ZW1JZCk7XG5cbiAgICBjb25zdCB2aXNpYmxlSXRlbXMgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7XG4gICAgICBvZmZzZXQ6IHRyYW5zbGF0ZSxcbiAgICB9KTtcbiAgICByZXR1cm4gIXZpc2libGVJdGVtcy5pbmNsdWRlcyhpdGVtKTtcbiAgfTtcblxuICAvKiogZXh0ZXJuYWwgYXBpLCBzY3JvbGwgdG8gaXRlbSBieSBpdCBrZXkgKi9cbiAgc2Nyb2xsVG8gPSAoaXRlbUtleTogc3RyaW5nKTogVm9pZCA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgbmV3VHJhbnNsYXRlID0gdGhpcy5nZXRPZmZzZXRUb0l0ZW1CeUtleShpdGVtS2V5KTtcbiAgICB0aGlzLnNlbGVjdGVkID0gaXRlbUtleTtcbiAgICBpZiAodHJhbnNsYXRlID09PSBuZXdUcmFuc2xhdGUpIHJldHVybiBmYWxzZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyB0cmFuc2xhdGU6IG5ld1RyYW5zbGF0ZSB9KTtcbiAgfTtcblxuICAvKiogZ2V0IE1lbnVJdGVtcyBmcm9tIHJlZnMgKi9cbiAgZ2V0TWVudUl0ZW1zID0gKCk6IE1lbnVJdGVtcyA9PlxuICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucmVmKS5zbGljZSgwLCB0aGlzLnByb3BzLmRhdGEubGVuZ3RoIHx8IDApO1xuXG4gIC8qKiBnZXQgd2lkdGggb2YgYWxsIG1lbnUgaXRlbXMgKi9cbiAgZ2V0SXRlbXNXaWR0aCA9ICh7XG4gICAgaXRlbXMgPSB0aGlzLm1lbnVJdGVtcyxcbiAgfToge1xuICAgIGl0ZW1zPzogTWVudUl0ZW1zO1xuICB9KTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gaXRlbXNcbiAgICAgIC5tYXAoZWwgPT4gZWxbMV0uZWxlbSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgIC5yZWR1Y2UoKGFjYywgZWwpID0+IChhY2MgKz0gZ2V0Q2xpZW50UmVjdChlbCkud2lkdGgpLCAwKTtcbiAgfTtcblxuICAvKiogZ2V0IHdpZHRoIG9mIGl0ZW1zLCB3aW5kb3cgYW5kIHBvcyBvZiBtZW51ICovXG4gIGdldFdpZHRoID0gKHtcbiAgICBpdGVtcyxcbiAgfToge1xuICAgIGl0ZW1zOiBNZW51SXRlbXM7XG4gIH0pOiB7XG4gICAgd1dpZHRoOiBudW1iZXI7XG4gICAgbWVudVBvczogbnVtYmVyO1xuICAgIG1lbnVXaWR0aDogbnVtYmVyO1xuICAgIGFsbEl0ZW1zV2lkdGg6IG51bWJlcjtcbiAgfSA9PiB7XG4gICAgY29uc3Qgd1dpZHRoID0gd2luZG93ICYmIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IHsgeDogbWVudVBvcywgd2lkdGg6IG1lbnVXaWR0aCB9ID0gZ2V0Q2xpZW50UmVjdCh0aGlzLm1lbnVXcmFwcGVyKTtcbiAgICBjb25zdCBhbGxJdGVtc1dpZHRoID0gdGhpcy5nZXRJdGVtc1dpZHRoKHsgaXRlbXMgfSk7XG4gICAgcmV0dXJuIHsgd1dpZHRoLCBtZW51UG9zLCBtZW51V2lkdGgsIGFsbEl0ZW1zV2lkdGggfTtcbiAgfTtcblxuICAvKiogdmFsdWVzIGZyb20gMiBmdW5jdGlvbnMgYWJvdmUgKi9cbiAgdXBkYXRlV2lkdGggPSAoe1xuICAgIGl0ZW1zID0gdGhpcy5tZW51SXRlbXMsXG4gIH06IHtcbiAgICBpdGVtcz86IE1lbnVJdGVtcztcbiAgfSk6IHtcbiAgICB3V2lkdGg6IG51bWJlcjtcbiAgICBtZW51UG9zOiBudW1iZXI7XG4gICAgbWVudVdpZHRoOiBudW1iZXI7XG4gICAgYWxsSXRlbXNXaWR0aDogbnVtYmVyO1xuICAgIGZpcnN0UGFnZU9mZnNldDogbnVtYmVyO1xuICAgIGxhc3RQYWdlT2Zmc2V0OiBudW1iZXI7XG4gIH0gPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCh7IGl0ZW1zIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAuLi53aWR0aCxcbiAgICAgIC4uLnRoaXMuZ2V0UGFnZXNPZmZzZXRzKHsgaXRlbXMsIC4uLndpZHRoIH0pLFxuICAgIH07XG4gIH07XG5cbiAgLyoqIGdldCBmaXJzdFBhZ2VPZmZzZXQgKi9cbiAgZ2V0Rmlyc3RQYWdlT2Zmc2V0ID0gKHtcbiAgICBpdGVtcyA9IHRoaXMubWVudUl0ZW1zLFxuICAgIG9mZnNldCA9IHRoaXMuc3RhdGUudHJhbnNsYXRlLFxuICAgIHdXaWR0aCA9IHRoaXMud1dpZHRoLFxuICAgIG1lbnVQb3MgPSB0aGlzLm1lbnVQb3MsXG4gICAgbWVudVdpZHRoID0gdGhpcy5tZW51V2lkdGgsXG4gIH06IHtcbiAgICBpdGVtczogTWVudUl0ZW1zO1xuICAgIG9mZnNldDogbnVtYmVyO1xuICAgIHdXaWR0aDogbnVtYmVyO1xuICAgIG1lbnVQb3M6IG51bWJlcjtcbiAgICBtZW51V2lkdGg6IG51bWJlcjtcbiAgfSk6IG51bWJlciA9PiB7XG4gICAgY29uc3QgdmlzaWJsZUl0ZW1zU3RhcnQgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7XG4gICAgICBvZmZzZXQsXG4gICAgICBpdGVtcyxcbiAgICAgIHdXaWR0aCxcbiAgICAgIG1lbnVQb3MsXG4gICAgICBtZW51V2lkdGgsXG4gICAgfSk7XG4gICAgY29uc3QgZmlyc3RQYWdlT2Zmc2V0ID0gdGhpcy5nZXRDZW50ZXJPZmZzZXQoe1xuICAgICAgaXRlbXM6IHZpc2libGVJdGVtc1N0YXJ0LFxuICAgICAgbWVudVdpZHRoLFxuICAgIH0pO1xuICAgIHJldHVybiBmaXJzdFBhZ2VPZmZzZXQ7XG4gIH07XG5cbiAgLyoqIGdldCBsYXN0UGFnZU9mZnNldCAqL1xuICBnZXRMYXN0UGFnZU9mZnNldCA9ICh7XG4gICAgaXRlbXMgPSB0aGlzLm1lbnVJdGVtcyxcbiAgICBhbGxJdGVtc1dpZHRoID0gdGhpcy5hbGxJdGVtc1dpZHRoLFxuICAgIHdXaWR0aCA9IHRoaXMud1dpZHRoLFxuICAgIG1lbnVQb3MgPSB0aGlzLm1lbnVQb3MsXG4gICAgbWVudVdpZHRoID0gdGhpcy5tZW51V2lkdGgsXG4gIH06IHtcbiAgICBpdGVtczogTWVudUl0ZW1zO1xuICAgIGFsbEl0ZW1zV2lkdGg6IG51bWJlcjtcbiAgICB3V2lkdGg6IG51bWJlcjtcbiAgICBtZW51UG9zOiBudW1iZXI7XG4gICAgbWVudVdpZHRoOiBudW1iZXI7XG4gIH0pOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHZpc2libGVJdGVtc0VuZCA9IHRoaXMuZ2V0VmlzaWJsZUl0ZW1zKHtcbiAgICAgIGl0ZW1zLFxuICAgICAgb2Zmc2V0OiAtYWxsSXRlbXNXaWR0aCArIG1lbnVXaWR0aCxcbiAgICAgIHdXaWR0aCxcbiAgICAgIG1lbnVQb3MsXG4gICAgICBtZW51V2lkdGgsXG4gICAgfSk7XG4gICAgY29uc3QgbGFzdFBhZ2VPZmZzZXQgPSB0aGlzLmdldENlbnRlck9mZnNldCh7XG4gICAgICBpdGVtczogdmlzaWJsZUl0ZW1zRW5kLFxuICAgICAgbWVudVdpZHRoLFxuICAgIH0pO1xuICAgIHJldHVybiBsYXN0UGFnZU9mZnNldDtcbiAgfTtcblxuICAvKiogZ2V0IG9mZnNldHMgdG8gZmlyc3QgYW5kIGxhc3QgaXRlbSAqL1xuICBnZXRQYWdlc09mZnNldHMgPSAoe1xuICAgIGl0ZW1zID0gdGhpcy5tZW51SXRlbXMsXG4gICAgYWxsSXRlbXNXaWR0aCA9IHRoaXMuYWxsSXRlbXNXaWR0aCxcbiAgICB3V2lkdGggPSB0aGlzLndXaWR0aCxcbiAgICBtZW51UG9zID0gdGhpcy5tZW51UG9zLFxuICAgIG1lbnVXaWR0aCA9IHRoaXMubWVudVdpZHRoLFxuICAgIG9mZnNldCA9IHRoaXMuc3RhdGUudHJhbnNsYXRlLFxuICB9KToge1xuICAgIGZpcnN0UGFnZU9mZnNldDogbnVtYmVyO1xuICAgIGxhc3RQYWdlT2Zmc2V0OiBudW1iZXI7XG4gIH0gPT4ge1xuICAgIGNvbnN0IGZpcnN0UGFnZU9mZnNldCA9IHRoaXMuZ2V0Rmlyc3RQYWdlT2Zmc2V0KHtcbiAgICAgIGl0ZW1zLFxuICAgICAgbWVudVdpZHRoLFxuICAgICAgb2Zmc2V0LFxuICAgICAgd1dpZHRoLFxuICAgICAgbWVudVBvcyxcbiAgICB9KTtcbiAgICBjb25zdCBsYXN0UGFnZU9mZnNldCA9IHRoaXMuZ2V0TGFzdFBhZ2VPZmZzZXQoe1xuICAgICAgaXRlbXMsXG4gICAgICBtZW51V2lkdGgsXG4gICAgICBtZW51UG9zLFxuICAgICAgd1dpZHRoLFxuICAgICAgYWxsSXRlbXNXaWR0aCxcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBmaXJzdFBhZ2VPZmZzZXQsXG4gICAgICBsYXN0UGFnZU9mZnNldCxcbiAgICB9O1xuICB9O1xuXG4gIC8qKiBpdGVtIGNsaWNrIGhhbmRsZXIgKi9cbiAgb25JdGVtQ2xpY2sgPSAoaWQ6IHN0cmluZyk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHsgY2xpY2tXaGVuRHJhZywgb25TZWxlY3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB4RHJhZ2dlZERpc3RhbmNlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgYWZ0ZXJTY3JvbGwgPSB4RHJhZ2dlZERpc3RhbmNlID4gNTtcblxuICAgIGlmIChhZnRlclNjcm9sbCAmJiAhY2xpY2tXaGVuRHJhZykgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy5zZWxlY3RlZCA9IGlkO1xuICAgIGlmIChvblNlbGVjdCkgb25TZWxlY3QoaWQpO1xuICB9O1xuXG4gIC8qKiBnZXQgaXRlbSB2aXNpYmxlIHdpdGggY3VycmVudC9wcm92aWRlZCB0cmFuc2xhdGUgKi9cbiAgZ2V0VmlzaWJsZUl0ZW1zID0gKHtcbiAgICBpdGVtcyA9IHRoaXMubWVudUl0ZW1zLFxuICAgIHdXaWR0aCA9IHRoaXMud1dpZHRoLFxuICAgIG1lbnVQb3MgPSB0aGlzLm1lbnVQb3MsXG4gICAgbWVudVdpZHRoID0gdGhpcy5tZW51V2lkdGgsXG4gICAgb2Zmc2V0ID0gdGhpcy5zdGF0ZS50cmFuc2xhdGUsXG4gICAgdHJhbnNsYXRlID0gdGhpcy5zdGF0ZS50cmFuc2xhdGUgfHwgZGVmYXVsdFByb3BzLnRyYW5zbGF0ZSxcbiAgfSk6IE1lbnVJdGVtcyA9PiB7XG4gICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihlbCA9PiB7XG4gICAgICBjb25zdCB7IHdpZHRoOiBlbFdpZHRoIH0gPSBnZXRDbGllbnRSZWN0KGVsWzFdLmVsZW0pO1xuICAgICAgY29uc3QgaWQgPSB0aGlzLmdldEl0ZW1JbmQoaXRlbXMsIGVsKTtcbiAgICAgIGNvbnN0IHggPSB0aGlzLmdldE9mZnNldFRvSXRlbUJ5SW5kZXgoe1xuICAgICAgICBpbmRleDogaWQsXG4gICAgICAgIG1lbnVJdGVtczogaXRlbXMsXG4gICAgICAgIHRyYW5zbGF0ZSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5lbGVtVmlzaWJsZSh7XG4gICAgICAgIHgsXG4gICAgICAgIGVsV2lkdGgsXG4gICAgICAgIHdXaWR0aCxcbiAgICAgICAgbWVudVBvcyxcbiAgICAgICAgbWVudVdpZHRoLFxuICAgICAgICBvZmZzZXQsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvKiogY2hlY2sgaWYgc2luZ2xlIG1lbnUgaXRlbSB2aXNpYmxlIGJ5IGl0J3MgcG9zaXRpb24gYW5kIHdpZHRoKi9cbiAgZWxlbVZpc2libGUgPSAoe1xuICAgIHgsXG4gICAgb2Zmc2V0ID0gMCxcbiAgICBlbFdpZHRoLFxuICAgIHdXaWR0aCA9IHRoaXMud1dpZHRoLFxuICAgIG1lbnVQb3MgPSB0aGlzLm1lbnVQb3MsXG4gICAgbWVudVdpZHRoID0gdGhpcy5tZW51V2lkdGgsXG4gIH06IHtcbiAgICB4OiBudW1iZXI7XG4gICAgb2Zmc2V0OiBudW1iZXI7XG4gICAgZWxXaWR0aDogbnVtYmVyO1xuICAgIHdXaWR0aD86IG51bWJlcjtcbiAgICBtZW51UG9zPzogbnVtYmVyO1xuICAgIG1lbnVXaWR0aD86IG51bWJlcjtcbiAgfSk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGxlZnRFZGdlID0gbWVudVBvcyAtIDE7XG4gICAgY29uc3QgcmlnaHRFZGdlID0gd1dpZHRoIC0gKHdXaWR0aCAtIChtZW51UG9zICsgbWVudVdpZHRoKSkgKyAxO1xuICAgIGNvbnN0IHBvcyA9IHggKyBvZmZzZXQ7XG4gICAgY29uc3QgcG9zV2l0aFdpZHRoID0gcG9zICsgZWxXaWR0aDtcbiAgICByZXR1cm4gcG9zID49IGxlZnRFZGdlICYmIHBvc1dpdGhXaWR0aCA8PSByaWdodEVkZ2U7XG4gIH07XG5cbiAgLyoqIGdldCBpbmRleCBvZiBpdGVtICovXG4gIGdldEl0ZW1JbmQgPSAoXG4gICAgbWVudUl0ZW1zOiBNZW51SXRlbXMgPSB0aGlzLm1lbnVJdGVtcyxcbiAgICBpdGVtOiBNZW51SXRlbVxuICApOiBudW1iZXIgPT4ge1xuICAgIGlmICghbWVudUl0ZW1zIHx8ICFpdGVtKSByZXR1cm4gMDtcbiAgICByZXR1cm4gbWVudUl0ZW1zLmZpbmRJbmRleChlbCA9PiBlbFswXSA9PT0gaXRlbVswXSk7XG4gIH07XG5cbiAgLyoqIGdldCBuZXh0IGl0ZW0gaW4gZGF0YSAqL1xuICBnZXROZXh0SXRlbUluZCA9IChsZWZ0OiBib29sZWFuLCB2aXNpYmxlSXRlbXM6IE1lbnVJdGVtcyk6IG51bWJlciA9PiB7XG4gICAgY29uc3QgeyBtZW51SXRlbXMgfSA9IHRoaXM7XG4gICAgaWYgKGxlZnQpIHtcbiAgICAgIGlmICghdmlzaWJsZUl0ZW1zLmxlbmd0aCkgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdmlzaWJsZUl0ZW1zLmxlbmd0aCkgcmV0dXJuIG1lbnVJdGVtcy5sZW5ndGg7XG4gICAgfVxuICAgIGNvbnN0IGluZCA9IGxlZnRcbiAgICAgID8gdGhpcy5nZXRJdGVtSW5kKG1lbnVJdGVtcywgdmlzaWJsZUl0ZW1zWzBdKSAtIDFcbiAgICAgIDogdGhpcy5nZXRJdGVtSW5kKG1lbnVJdGVtcywgdmlzaWJsZUl0ZW1zLnNsaWNlKC0xKVswXSkgKyAxO1xuICAgIHJldHVybiBpbmQgPCAwID8gMCA6IGluZDtcbiAgfTtcblxuICAvKiogZ2V0IG9mZnNldCBmcm9tIHN0YXJ0IHRvIGl0ZW0gYnkgaXQncyBrZXkgKi9cbiAgZ2V0T2Zmc2V0VG9JdGVtQnlLZXkgPSAoa2V5OiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuICAgIGxldCB7IHRyYW5zbGF0ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4QnlLZXkoa2V5KTtcbiAgICBpZiAoaXRlbUluZGV4ID09PSAtMSkgcmV0dXJuIHRyYW5zbGF0ZTtcblxuICAgIGNvbnN0IHsgbWVudVBvcyB9ID0gdGhpcztcbiAgICBjb25zdCB7IGFsaWduQ2VudGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdHJhbnNsYXRlID0gdGhpcy5nZXRPZmZzZXRUb0l0ZW1CeUluZGV4KHsgaW5kZXg6IGl0ZW1JbmRleCB9KTtcblxuICAgIGNvbnN0IHZpc2libGVJdGVtc1dpdGhOZXdUcmFuc2xhdGUgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7XG4gICAgICBvZmZzZXQ6IC10cmFuc2xhdGUsXG4gICAgfSk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gYWxpZ25DZW50ZXJcbiAgICAgID8gdGhpcy5nZXRDZW50ZXJPZmZzZXQoeyBpdGVtczogdmlzaWJsZUl0ZW1zV2l0aE5ld1RyYW5zbGF0ZSB9KVxuICAgICAgOiBkZWZhdWx0UHJvcHMudHJhbnNsYXRlO1xuXG4gICAgdHJhbnNsYXRlID0gLSh0cmFuc2xhdGUgLSBtZW51UG9zIC0gb2Zmc2V0KTtcblxuICAgIGlmICh0aGlzLml0QmVmb3JlU3RhcnQodHJhbnNsYXRlKSkge1xuICAgICAgdHJhbnNsYXRlID0gdGhpcy5nZXRPZmZzZXRBdFN0YXJ0KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLml0QWZ0ZXJFbmQodHJhbnNsYXRlKSkge1xuICAgICAgdHJhbnNsYXRlID0gdGhpcy5nZXRPZmZzZXRBdEVuZCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNsYXRlO1xuICB9O1xuXG4gIC8qKiBnZXQgaXRlbSBmcm9tIGtleSAqL1xuICBnZXRJdGVtQnlLZXkgPSAoa2V5OiBzdHJpbmcpOiBNZW51SXRlbSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMubWVudUl0ZW1zLmZpbmQoZWwgPT4gZWxbMV0ua2V5ID09PSBrZXkpIHx8IFtcbiAgICAgICAgJ251bGwnLFxuICAgICAgICB7IGtleTogJ24nLCBlbGVtOiBudWxsIH0sXG4gICAgICBdXG4gICAgKTtcbiAgfTtcblxuICAvKiogZ2V0IGluZGV4IG9mIGl0ZW0gZnJvbSBpdCdzIGtleSAqL1xuICBnZXRJdGVtSW5kZXhCeUtleSA9IChpdGVtS2V5OiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuICAgIGlmICghaXRlbUtleSkgcmV0dXJuIC0xO1xuICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGEuZmluZEluZGV4KGVsID0+IGVsLmtleSA9PT0gaXRlbUtleSk7XG4gIH07XG5cbiAgLyoqIG9mZnNldCBmcm9tIHN0YXJ0IHRvIGl0ZW0gKi9cbiAgZ2V0T2Zmc2V0VG9JdGVtQnlJbmRleCA9ICh7XG4gICAgaW5kZXgsXG4gICAgbWVudUl0ZW1zID0gdGhpcy5tZW51SXRlbXMsXG4gICAgdHJhbnNsYXRlID0gdGhpcy5zdGF0ZS50cmFuc2xhdGUsXG4gIH06IHtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIG1lbnVJdGVtcz86IE1lbnVJdGVtcztcbiAgICB0cmFuc2xhdGU/OiBudW1iZXI7XG4gIH0pOiBudW1iZXIgPT4ge1xuICAgIGlmICghbWVudUl0ZW1zLmxlbmd0aCkgcmV0dXJuIDA7XG4gICAgY29uc3QgaW5kID0gaW5kZXggPj0gbWVudUl0ZW1zLmxlbmd0aCA/IG1lbnVJdGVtcy5sZW5ndGggLSAxIDogaW5kZXg7XG4gICAgY29uc3QgeyB4IH0gPSBnZXRDbGllbnRSZWN0KG1lbnVJdGVtc1tpbmRdWzFdLmVsZW0pO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gK3ggLSB0cmFuc2xhdGU7XG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9O1xuXG4gIC8qKiBnZXQgbmV3IG9mZnNldCB2YWx1ZSB3aGVuIHNjcm9sbCByaWdodCAqL1xuICBnZXRTY3JvbGxSaWdodE9mZnNldCA9IChcbiAgICB2aXNpYmxlSXRlbXM6IE1lbnVJdGVtcyxcbiAgICBpdGVtczogTWVudUl0ZW1zXG4gICk6IG51bWJlciA9PiB7XG4gICAgY29uc3QgeyBhbGlnbkNlbnRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG1lbnVQb3MsIGxhc3RQYWdlT2Zmc2V0IH0gPSB0aGlzO1xuXG4gICAgY29uc3QgbmV4dEl0ZW0gPSB0aGlzLmdldE5leHRJdGVtKFxuICAgICAgdmlzaWJsZUl0ZW1zICYmIHZpc2libGVJdGVtcy5zbGljZSgtMSlbMF1cbiAgICAgICAgPyB2aXNpYmxlSXRlbXMuc2xpY2UoLTEpWzBdWzBdXG4gICAgICAgIDogaXRlbXMuc2xpY2UoLTEpWzBdWzBdXG4gICAgKTtcbiAgICBjb25zdCBuZXh0SXRlbUluZGV4ID0gaXRlbXMuZmluZEluZGV4KGVsID0+IGVsWzBdID09PSBuZXh0SXRlbVswXSk7XG5cbiAgICBjb25zdCBvZmZzZXRUb0l0ZW0gPSB0aGlzLmdldE9mZnNldFRvSXRlbUJ5SW5kZXgoe1xuICAgICAgaW5kZXg6IG5leHRJdGVtSW5kZXgsXG4gICAgICBtZW51SXRlbXM6IGl0ZW1zLFxuICAgIH0pO1xuICAgIGNvbnN0IG9mZnNldFRvSXRlbU9uU3RhcnQgPSBvZmZzZXRUb0l0ZW0gLSBtZW51UG9zO1xuXG4gICAgY29uc3QgbmV4dFZpc2libGVJdGVtcyA9IHRoaXMuZ2V0VmlzaWJsZUl0ZW1zKHtcbiAgICAgIGl0ZW1zLFxuICAgICAgb2Zmc2V0OiAtb2Zmc2V0VG9JdGVtT25TdGFydCxcbiAgICB9KTtcblxuICAgIGlmIChuZXh0VmlzaWJsZUl0ZW1zLmluY2x1ZGVzKGl0ZW1zLnNsaWNlKC0xKVswXSkpIHtcbiAgICAgIHJldHVybiBhbGlnbkNlbnRlclxuICAgICAgICA/IG9mZnNldFRvSXRlbU9uU3RhcnQgKyBsYXN0UGFnZU9mZnNldFxuICAgICAgICA6IG9mZnNldFRvSXRlbU9uU3RhcnQ7XG4gICAgfVxuXG4gICAgY29uc3QgY2VudGVyT2Zmc2V0ID0gKCkgPT5cbiAgICAgIHRoaXMuZ2V0Q2VudGVyT2Zmc2V0KHsgaXRlbXM6IG5leHRWaXNpYmxlSXRlbXMgfSk7XG5cbiAgICBjb25zdCBuZXdPZmZzZXQgPSBhbGlnbkNlbnRlclxuICAgICAgPyBvZmZzZXRUb0l0ZW1PblN0YXJ0IC0gY2VudGVyT2Zmc2V0KClcbiAgICAgIDogb2Zmc2V0VG9JdGVtT25TdGFydDtcbiAgICByZXR1cm4gbmV3T2Zmc2V0O1xuICB9O1xuXG4gIC8qKiBnZXQgbmV3IG9mZnNldCB2YWx1ZSB3aGVuIHNjcm9sbCBsZWZ0ICovXG4gIGdldFNjcm9sbExlZnRPZmZzZXQgPSAodmlzaWJsZUl0ZW1zOiBNZW51SXRlbXMsIGl0ZW1zOiBNZW51SXRlbXMpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHsgYWxpZ25DZW50ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBtZW51UG9zLCBtZW51V2lkdGgsIGZpcnN0UGFnZU9mZnNldCB9ID0gdGhpcztcblxuICAgIGNvbnN0IHByZXZJdGVtID0gdGhpcy5nZXRQcmV2SXRlbShcbiAgICAgIHZpc2libGVJdGVtcyAmJiB2aXNpYmxlSXRlbXNbMF0gPyB2aXNpYmxlSXRlbXNbMF1bMF0gOiBpdGVtc1swXVswXVxuICAgICk7XG4gICAgY29uc3QgcHJldkl0ZW1JbmRleCA9IGl0ZW1zLmZpbmRJbmRleChlbCA9PiBlbFswXSA9PT0gcHJldkl0ZW1bMF0pO1xuXG4gICAgY29uc3Qgb2Zmc2V0VG9JdGVtID0gdGhpcy5nZXRPZmZzZXRUb0l0ZW1CeUluZGV4KHtcbiAgICAgIGluZGV4OiBwcmV2SXRlbUluZGV4LFxuICAgICAgbWVudUl0ZW1zOiBpdGVtcyxcbiAgICB9KTtcbiAgICBjb25zdCBpdGVtV2lkdGggPSB0aGlzLmdldEl0ZW1zV2lkdGgoeyBpdGVtczogW3ByZXZJdGVtXSB9KTtcbiAgICBjb25zdCBvZmZzZXRUb0l0ZW1PbkVuZCA9IG9mZnNldFRvSXRlbSAtIG1lbnVQb3MgLSAobWVudVdpZHRoIC0gaXRlbVdpZHRoKTtcblxuICAgIGNvbnN0IG5leHRWaXNpYmxlSXRlbXMgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7XG4gICAgICBpdGVtcyxcbiAgICAgIG9mZnNldDogLW9mZnNldFRvSXRlbU9uRW5kLFxuICAgIH0pO1xuXG4gICAgaWYgKG5leHRWaXNpYmxlSXRlbXMuaW5jbHVkZXMoaXRlbXNbMF0pKSB7XG4gICAgICByZXR1cm4gYWxpZ25DZW50ZXIgPyAtZmlyc3RQYWdlT2Zmc2V0IDogZGVmYXVsdFByb3BzLnRyYW5zbGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjZW50ZXJPZmZzZXQgPSAoKSA9PlxuICAgICAgdGhpcy5nZXRDZW50ZXJPZmZzZXQoeyBpdGVtczogbmV4dFZpc2libGVJdGVtcyB9KTtcblxuICAgIGNvbnN0IG5ld09mZnNldCA9IGFsaWduQ2VudGVyXG4gICAgICA/IG9mZnNldFRvSXRlbU9uRW5kICsgY2VudGVyT2Zmc2V0KClcbiAgICAgIDogb2Zmc2V0VG9JdGVtT25FbmQ7XG4gICAgcmV0dXJuIG5ld09mZnNldDtcbiAgfTtcblxuICAvKiogZ2V0IG5leHQgaXRlbSBieSBrZXkgKi9cbiAgZ2V0TmV4dEl0ZW0gPSAoa2V5OiBzdHJpbmcpOiBNZW51SXRlbSA9PiB7XG4gICAgY29uc3QgeyBtZW51SXRlbXMgfSA9IHRoaXM7XG4gICAgY29uc3QgaXRlbUluZGV4ID0gbWVudUl0ZW1zLmZpbmRJbmRleChlbCA9PiBlbFswXSA9PT0ga2V5KTtcbiAgICBjb25zdCBuZXh0SXRlbUluZGV4ID0gaXRlbUluZGV4ICsgMTtcbiAgICBjb25zdCBuZXh0SXRlbSA9IG1lbnVJdGVtc1tuZXh0SXRlbUluZGV4XSB8fCBtZW51SXRlbXMuc2xpY2UoLTEpWzBdO1xuICAgIHJldHVybiBuZXh0SXRlbTtcbiAgfTtcblxuICAvKiogZ2V0IHBycmV2IGl0ZW0gYnkga2V5ICovXG4gIGdldFByZXZJdGVtID0gKGtleTogc3RyaW5nKTogTWVudUl0ZW0gPT4ge1xuICAgIGNvbnN0IHsgbWVudUl0ZW1zIH0gPSB0aGlzO1xuICAgIGNvbnN0IGl0ZW1JbmRleCA9IG1lbnVJdGVtcy5maW5kSW5kZXgoZWwgPT4gZWxbMF0gPT09IGtleSk7XG4gICAgY29uc3QgcHJldkl0ZW1JbmRleCA9IGl0ZW1JbmRleCAtIDE7XG4gICAgY29uc3QgcHJldkl0ZW0gPSBtZW51SXRlbXNbcHJldkl0ZW1JbmRleF0gfHwgbWVudUl0ZW1zWzBdO1xuICAgIHJldHVybiBwcmV2SXRlbTtcbiAgfTtcblxuICAvKiogZ2V0IG5ldyBvZmZzZXQgdmFsdWUgd2hlbiBzY3JvbGwgbGVmdC9yaWdodCAqL1xuICBnZXRPZmZzZXQgPSAobGVmdDogYm9vbGVhbik6IG51bWJlciA9PiB7XG4gICAgY29uc3QgeyBtZW51SXRlbXM6IGl0ZW1zIH0gPSB0aGlzO1xuICAgIGNvbnN0IHZpc2libGVJdGVtcyA9IHRoaXMuZ2V0VmlzaWJsZUl0ZW1zKHsgaXRlbXMgfSk7XG4gICAgY29uc3QgbmV3T2Zmc2V0ID0gbGVmdFxuICAgICAgPyB0aGlzLmdldFNjcm9sbExlZnRPZmZzZXQodmlzaWJsZUl0ZW1zLCBpdGVtcylcbiAgICAgIDogdGhpcy5nZXRTY3JvbGxSaWdodE9mZnNldCh2aXNpYmxlSXRlbXMsIGl0ZW1zKTtcbiAgICByZXR1cm4gbmV3T2Zmc2V0O1xuICB9O1xuXG4gIC8qKiBvZmZzZXQgZnJvbSAwIHRvIGZpcnN0IG1lbnUgaXRlbSB3aGVuIHNjcm9sbCxcbiAgICogbmVlZCBwYXNzIGl0ZW1zIHZpc2libGUgb24gc2NyZWVuXG4gICAqL1xuICBnZXRDZW50ZXJPZmZzZXQgPSAoe1xuICAgIGl0ZW1zID0gdGhpcy5tZW51SXRlbXMsXG4gICAgbWVudVdpZHRoID0gdGhpcy5tZW51V2lkdGgsXG4gIH06IHtcbiAgICBpdGVtcz86IE1lbnVJdGVtcztcbiAgICBtZW51V2lkdGg/OiBudW1iZXI7XG4gIH0pOiBudW1iZXIgPT4ge1xuICAgIGlmICghaXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgaXRlbXNXaWR0aCA9IHRoaXMuZ2V0SXRlbXNXaWR0aCh7IGl0ZW1zIH0pO1xuICAgIGNvbnN0IG9mZnNldCA9IChtZW51V2lkdGggLSBpdGVtc1dpZHRoKSAvIDI7XG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfTtcblxuICAvKiogbW91c2Ugd2hlZWwgaGFuZGxlciAqL1xuICBoYW5kbGVXaGVlbCA9IChlOiBXaGVlbEV2ZW50KTogVm9pZCA9PiB7XG4gICAgY29uc3QgeyB3aGVlbCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXdoZWVsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGUuZGVsdGFZIDwgMCkge1xuICAgICAgdGhpcy5oYW5kbGVBcnJvd0NsaWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlQXJyb3dDbGljayhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKiBvZmZzZXQgYXQgc3RhcnQgKi9cbiAgZ2V0T2Zmc2V0QXRTdGFydCA9ICgpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHsgZmlyc3RQYWdlT2Zmc2V0IH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgYWxpZ25DZW50ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIGFsaWduQ2VudGVyID8gZmlyc3RQYWdlT2Zmc2V0IDogZGVmYXVsdFByb3BzLnRyYW5zbGF0ZTtcbiAgfTtcblxuICAvKiogb2Zmc2V0IGF0IGVuZCAqL1xuICBnZXRPZmZzZXRBdEVuZCA9ICgpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHsgYWxpZ25DZW50ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBhbGxJdGVtc1dpZHRoLCBtZW51V2lkdGgsIGxhc3RQYWdlT2Zmc2V0IH0gPSB0aGlzO1xuICAgIGNvbnN0IG9mZnNldCA9IGFsbEl0ZW1zV2lkdGggLSBtZW51V2lkdGg7XG4gICAgcmV0dXJuIGFsaWduQ2VudGVyID8gLW9mZnNldCAtIGxhc3RQYWdlT2Zmc2V0IDogLW9mZnNldDtcbiAgfTtcblxuICAvKiogY2xpY2sgcmlnaHQgYXJyb3cgKi9cbiAgaGFuZGxlQXJyb3dDbGlja1JpZ2h0ID0gKCk6IFZvaWQgPT4ge1xuICAgIHRoaXMuaGFuZGxlQXJyb3dDbGljayhmYWxzZSk7XG4gIH07XG5cbiAgLyoqIGNsaWNrIGFycm93L3Njcm9sbCAqL1xuICBoYW5kbGVBcnJvd0NsaWNrID0gKGxlZnQgPSB0cnVlKTogVm9pZCA9PiB7XG4gICAgY29uc3QgeyBhbGlnbkNlbnRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGFsbEl0ZW1zV2lkdGgsIG1lbnVXaWR0aCB9ID0gdGhpcztcblxuICAgIGlmICghYWxpZ25DZW50ZXIgJiYgIWxlZnQgJiYgYWxsSXRlbXNXaWR0aCA8IG1lbnVXaWR0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuZ2V0T2Zmc2V0KGxlZnQpO1xuICAgIGxldCB0cmFuc2wgPSAtb2Zmc2V0O1xuXG4gICAgaWYgKGxlZnQgJiYgdGhpcy5pdEJlZm9yZVN0YXJ0KHRyYW5zbCkpIHtcbiAgICAgIHRyYW5zbCA9IHRoaXMuZ2V0T2Zmc2V0QXRTdGFydCgpO1xuICAgIH0gZWxzZSBpZiAoIWxlZnQgJiYgdGhpcy5pdEFmdGVyRW5kKHRyYW5zbCkpIHtcbiAgICAgIHRyYW5zbCA9IHRoaXMuZ2V0T2Zmc2V0QXRFbmQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdUcmFuc2xhdGUgPSB0cmFuc2w7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRyYW5zbGF0ZTogbmV3VHJhbnNsYXRlLFxuICAgICAgeFBvaW50OiBkZWZhdWx0UHJvcHMueFBvaW50LFxuICAgICAgc3RhcnREcmFnVHJhbnNsYXRlOiAwLFxuICAgICAgeERyYWdnZWREaXN0YW5jZTogMCxcbiAgICB9KTtcbiAgfTtcblxuICAvKiogY2hlY2sgaWYgcG9zaXRpb24gYmVmb3JlIGZpcnN0IGVsZW1lbnQgKi9cbiAgaXRCZWZvcmVTdGFydCA9ICh0cmFuczogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgeyBhbGlnbkNlbnRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG1lbnVXaWR0aCwgYWxsSXRlbXNXaWR0aCwgZmlyc3RQYWdlT2Zmc2V0IH0gPSB0aGlzO1xuICAgIGlmIChhbGxJdGVtc1dpZHRoIDwgbWVudVdpZHRoKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gYWxpZ25DZW50ZXJcbiAgICAgID8gdHJhbnMgPiBmaXJzdFBhZ2VPZmZzZXRcbiAgICAgIDogdHJhbnMgPiBkZWZhdWx0UHJvcHMudHJhbnNsYXRlO1xuICB9O1xuICAvKiogY2hlY2sgaWYgcG9zaXRpb24gYWZ0ZXIgbGFzdCBlbGVtZW50ICovXG4gIGl0QWZ0ZXJFbmQgPSAodHJhbnM6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHsgYWxpZ25DZW50ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBtZW51V2lkdGgsIGFsbEl0ZW1zV2lkdGgsIGxhc3RQYWdlT2Zmc2V0IH0gPSB0aGlzO1xuICAgIGlmIChhbGxJdGVtc1dpZHRoIDwgbWVudVdpZHRoKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gYWxpZ25DZW50ZXJcbiAgICAgID8gdHJhbnMgPCBkZWZhdWx0UHJvcHMudHJhbnNsYXRlICYmXG4gICAgICAgICAgTWF0aC5hYnModHJhbnMpID4gYWxsSXRlbXNXaWR0aCAtIG1lbnVXaWR0aCArIGxhc3RQYWdlT2Zmc2V0XG4gICAgICA6IHRyYW5zIDwgZGVmYXVsdFByb3BzLnRyYW5zbGF0ZSAmJlxuICAgICAgICAgIE1hdGguYWJzKHRyYW5zKSA+IGFsbEl0ZW1zV2lkdGggLSBtZW51V2lkdGg7XG4gIH07XG5cbiAgLyoqIGdldCBjb29yZHMgZnJvbSBtb3VzZSBldmVudCAqL1xuICBnZXRQb2ludCA9IChldjogUmVhY3QuTW91c2VFdmVudCB8IFJlYWN0LlRvdWNoRXZlbnQgfCBFdmVudCk6IG51bWJlciA9PiB7XG4gICAgaWYgKCd0b3VjaGVzJyBpbiBldikge1xuICAgICAgcmV0dXJuIGV2LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICB9IGVsc2UgaWYgKCdjbGllbnRYJyBpbiBldikge1xuICAgICAgcmV0dXJuIGV2LmNsaWVudFg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfTtcblxuICAvKiogZXZlbnQgaGFuZGxlciB3aGVuIHN0YXJ0IGRyYWcgYW5kIG1vdXNlIGRvd24gICovXG4gIGhhbmRsZURyYWdTdGFydCA9IChldjogUmVhY3QuTW91c2VFdmVudCB8IFJlYWN0LlRvdWNoRXZlbnQpOiBWb2lkID0+IHtcbiAgICAvLyAxIGxlZnQgYnV0dG9uLCAyIHJpZ2h0IGJ1dHRvblxuICAgIGlmIChldiAmJiAnYnV0dG9ucycgaW4gZXYgJiYgZXYuYnV0dG9ucyA9PT0gMikgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IHsgZHJhZ2dpbmc6IGRyYWdnaW5nRW5hYmxlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghZHJhZ2dpbmdFbmFibGUpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCB7IHRyYW5zbGF0ZTogc3RhcnREcmFnVHJhbnNsYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZHJhZ2dpbmc6IHRydWUsXG4gICAgICB4UG9pbnQ6IDAsXG4gICAgICBzdGFydERyYWdUcmFuc2xhdGUsXG4gICAgICB4RHJhZ2dlZERpc3RhbmNlOiAwLFxuICAgIH0pO1xuICB9O1xuXG4gIC8qKiBkcmFnIGV2ZW50IGhhbmRsZXIgKi9cbiAgaGFuZGxlRHJhZyA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50IHwgUmVhY3QuVG91Y2hFdmVudCB8IEV2ZW50KTogVm9pZCA9PiB7XG4gICAgY29uc3QgeyBkcmFnZ2luZzogZHJhZ2dpbmdFbmFibGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB0cmFuc2xhdGUsIGRyYWdnaW5nLCB4UG9pbnQsIHhEcmFnZ2VkRGlzdGFuY2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKCFkcmFnZ2luZ0VuYWJsZSB8fCAhZHJhZ2dpbmcpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5nZXRQb2ludChlKTtcbiAgICBjb25zdCBkaWZmID1cbiAgICAgIHhQb2ludCA9PT0gZGVmYXVsdFByb3BzLnhQb2ludCA/IGRlZmF1bHRQcm9wcy54UG9pbnQgOiB4UG9pbnQgLSBwb2ludDtcbiAgICBsZXQgcmVzdWx0ID0gdHJhbnNsYXRlIC0gZGlmZjtcblxuICAgIC8vIGRvbid0IGxldCBzY3JvbGwgb3ZlciBzdGFydCBhbmQgZW5kXG4gICAgaWYgKHRoaXMuaXRCZWZvcmVTdGFydChyZXN1bHQpKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQgLSBNYXRoLmFicyhkaWZmKSAvIDI7XG4gICAgfSBlbHNlIGlmICh0aGlzLml0QWZ0ZXJFbmQocmVzdWx0KSkge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgTWF0aC5hYnMoZGlmZikgLyAyO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1RyYW5zbGF0ZSA9IHJlc3VsdDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgeFBvaW50OiBwb2ludCxcbiAgICAgIHRyYW5zbGF0ZTogbmV3VHJhbnNsYXRlLFxuICAgICAgeERyYWdnZWREaXN0YW5jZTogeERyYWdnZWREaXN0YW5jZSArIE1hdGguYWJzKGRpZmYpLFxuICAgIH0pO1xuICB9O1xuXG4gIC8qKiBldmVudCBoYW5kbGVyIHdoZW4gZHJhZyBhbmQgbW91c2UgdXAgICovXG4gIGhhbmRsZURyYWdTdG9wID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQgfCBSZWFjdC5Ub3VjaEV2ZW50IHwgRXZlbnQpOiBWb2lkID0+IHtcbiAgICBjb25zdCB7IGFsbEl0ZW1zV2lkdGgsIG1lbnVXaWR0aCwgZmlyc3RQYWdlT2Zmc2V0LCBsYXN0UGFnZU9mZnNldCB9ID0gdGhpcztcbiAgICBsZXQge1xuICAgICAgZHJhZ2dpbmcsXG4gICAgICB4UG9pbnQgPSB0aGlzLmdldFBvaW50KGUpLFxuICAgICAgdHJhbnNsYXRlLFxuICAgICAgc3RhcnREcmFnVHJhbnNsYXRlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZHJhZ2dpbmc6IGRyYWdnaW5nRW5hYmxlLCBhbGlnbkNlbnRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWRyYWdnaW5nRW5hYmxlIHx8ICFkcmFnZ2luZykgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IG5ld1RyYW5zbGF0ZSA9IHRyYW5zbGF0ZTtcblxuICAgIGlmICh0aGlzLml0QmVmb3JlU3RhcnQodHJhbnNsYXRlKSkge1xuICAgICAgbmV3VHJhbnNsYXRlID0gdGhpcy5nZXRPZmZzZXRBdFN0YXJ0KCk7XG4gICAgICB4UG9pbnQgPSBkZWZhdWx0UHJvcHMueFBvaW50O1xuICAgIH0gZWxzZSBpZiAodGhpcy5pdEFmdGVyRW5kKHRyYW5zbGF0ZSkpIHtcbiAgICAgIG5ld1RyYW5zbGF0ZSA9IHRoaXMuZ2V0T2Zmc2V0QXRFbmQoKVxuICAgICAgeFBvaW50ID0gZGVmYXVsdFByb3BzLnhQb2ludDtcbiAgICB9XG5cbiAgICBpZiAoIWFsaWduQ2VudGVyICYmIGFsbEl0ZW1zV2lkdGggPD0gbWVudVdpZHRoICkge1xuICAgICAgbmV3VHJhbnNsYXRlID0gZGVmYXVsdFByb3BzLnRyYW5zbGF0ZTtcbiAgICAgIHhQb2ludCA9IGRlZmF1bHRQcm9wcy54UG9pbnQ7XG4gICAgfVxuXG4gICAgbmV3VHJhbnNsYXRlID0gbmV3VHJhbnNsYXRlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICB4UG9pbnQsXG4gICAgICAgIHRyYW5zbGF0ZTogbmV3VHJhbnNsYXRlLFxuICAgICAgfSxcbiAgICAgICgpID0+XG4gICAgICAgIHRoaXMub25VcGRhdGUoe1xuICAgICAgICAgIHRyYW5zbGF0ZTogbmV3VHJhbnNsYXRlLFxuICAgICAgICAgIHRyYW5zbGF0ZU9sZDogc3RhcnREcmFnVHJhbnNsYXRlLFxuICAgICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgLyoqIGNoZWNrIGlmIG5vIG5lZWQgc2hvdyBhcnJvd3MgKi9cbiAgaXNBcnJvd3NWaXNpYmxlID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGFsbEl0ZW1zV2lkdGgsXG4gICAgICBtZW51V2lkdGgsXG4gICAgICBwcm9wczogeyBoaWRlQXJyb3dzIH0sXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgaGlkZSA9IEJvb2xlYW4oaGlkZUFycm93cyAmJiBhbGxJdGVtc1dpZHRoIDw9IG1lbnVXaWR0aCk7XG4gICAgcmV0dXJuICFoaWRlO1xuICB9O1xuXG4gIC8qKiBjYiBmb3IgcG9zaXRpb24gdXBkYXRlICovXG4gIG9uVXBkYXRlID0gKHtcbiAgICB0cmFuc2xhdGUgPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZSxcbiAgICB0cmFuc2xhdGVPbGQgPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZSxcbiAgfToge1xuICAgIHRyYW5zbGF0ZT86IG51bWJlcjtcbiAgICB0cmFuc2xhdGVPbGQ/OiBudW1iZXI7XG4gIH0pOiBWb2lkID0+IHtcbiAgICBjb25zdCB7IG9uVXBkYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbGFzdFRyYW5zbGF0ZVVwZGF0ZSB9ID0gdGhpcztcbiAgICBpZiAoXG4gICAgICBvblVwZGF0ZSAmJlxuICAgICAgdHJhbnNsYXRlICE9PSB0cmFuc2xhdGVPbGQgJiZcbiAgICAgIHRyYW5zbGF0ZSAhPT0gbGFzdFRyYW5zbGF0ZVVwZGF0ZVxuICAgICkge1xuICAgICAgdGhpcy5sYXN0VHJhbnNsYXRlVXBkYXRlID0gdHJhbnNsYXRlO1xuICAgICAgb25VcGRhdGUoeyB0cmFuc2xhdGUgfSk7XG4gICAgfVxuICB9O1xuXG4gIHB1YmxpYyByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHwgbnVsbCB7XG4gICAgY29uc3Qge1xuICAgICAgYXJyb3dDbGFzcyxcbiAgICAgIGFycm93RGlzYWJsZWRDbGFzcyxcbiAgICAgIGFycm93TGVmdCxcbiAgICAgIGFycm93UmlnaHQsXG4gICAgICBkYXRhLFxuICAgICAgaW5uZXJXcmFwcGVyQ2xhc3MsXG4gICAgICBpdGVtQ2xhc3MsXG4gICAgICBpdGVtQ2xhc3NBY3RpdmUsXG4gICAgICBoaWRlQXJyb3dzLFxuICAgICAgbWVudVN0eWxlLFxuICAgICAgbWVudUNsYXNzLFxuICAgICAgdHJhbnNpdGlvbixcbiAgICAgIHdyYXBwZXJDbGFzcyxcbiAgICAgIHdyYXBwZXJTdHlsZSxcbiAgICAgIGZvcndhcmRDbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2xhdGUsXG4gICAgICBkcmFnZ2luZyxcbiAgICAgIGxlZnRBcnJvd1Zpc2libGUsXG4gICAgICByaWdodEFycm93VmlzaWJsZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHNlbGVjdGVkLCBtb3VudGVkIH0gPSB0aGlzO1xuXG4gICAgaWYgKCFkYXRhIHx8ICFkYXRhLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBhcnJvd3NWaXNpYmxlID0gbW91bnRlZCA/IHRoaXMuaXNBcnJvd3NWaXNpYmxlKCkgOiB0cnVlO1xuXG4gICAgY29uc3QgbWVudVN0eWxlcyA9IHsgLi4uZGVmYXVsdE1lbnVTdHlsZSwgLi4ubWVudVN0eWxlIH07XG4gICAgY29uc3Qgd3JhcHBlclN0eWxlcyA9IHsgLi4uZGVmYXVsdFdyYXBwZXJTdHlsZSwgLi4ud3JhcHBlclN0eWxlIH07XG5cbiAgICBjb25zdCBhcnJvd1Byb3BzID0ge1xuICAgICAgY2xhc3NOYW1lOiBhcnJvd0NsYXNzLFxuICAgICAgaGlkZUFycm93cyxcbiAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQXJyb3dDbGljayxcbiAgICAgIGRpc2FibGVkQ2xhc3M6IGFycm93RGlzYWJsZWRDbGFzcyxcbiAgICAgIGZvcndhcmRDbGljayxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttZW51Q2xhc3N9IHN0eWxlPXttZW51U3R5bGVzfSBvbldoZWVsPXt0aGlzLmhhbmRsZVdoZWVsfT5cbiAgICAgICAge2Fycm93TGVmdCAmJiAoXG4gICAgICAgICAgPEFycm93V3JhcHBlciB7Li4uYXJyb3dQcm9wc31cbiAgICAgICAgICAgIGlzRGlzYWJsZWQ9eyFhcnJvd3NWaXNpYmxlIHx8ICFsZWZ0QXJyb3dWaXNpYmxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthcnJvd0xlZnR9XG4gICAgICAgICAgPC9BcnJvd1dyYXBwZXI+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17d3JhcHBlckNsYXNzfVxuICAgICAgICAgIHN0eWxlPXt3cmFwcGVyU3R5bGVzfVxuICAgICAgICAgIHJlZj17dGhpcy5zZXRXcmFwcGVyUmVmfVxuICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZURyYWdTdGFydH1cbiAgICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMuaGFuZGxlRHJhZ1N0YXJ0fVxuICAgICAgICAgIG9uVG91Y2hFbmQ9e3RoaXMuaGFuZGxlRHJhZ1N0b3B9XG4gICAgICAgICAgb25Nb3VzZU1vdmU9e3RoaXMuaGFuZGxlRHJhZ31cbiAgICAgICAgICBvblRvdWNoTW92ZT17dGhpcy5oYW5kbGVEcmFnfVxuICAgICAgICA+XG4gICAgICAgICAgPElubmVyV3JhcHBlclxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgIHRyYW5zbGF0ZT17dHJhbnNsYXRlfVxuICAgICAgICAgICAgZHJhZ2dpbmc9e2RyYWdnaW5nfVxuICAgICAgICAgICAgbW91bnRlZD17bW91bnRlZH1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e21vdW50ZWQgPyB0cmFuc2l0aW9uIDogMH1cbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgICAgIHNldFJlZj17dGhpcy5zZXRSZWZ9XG4gICAgICAgICAgICBzZXRNZW51SW5uZXJSZWY9e3RoaXMuc2V0TWVudUlubmVyUmVmfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkl0ZW1DbGlja31cbiAgICAgICAgICAgIGlubmVyV3JhcHBlckNsYXNzPXtpbm5lcldyYXBwZXJDbGFzc31cbiAgICAgICAgICAgIGl0ZW1DbGFzcz17aXRlbUNsYXNzfVxuICAgICAgICAgICAgaXRlbUNsYXNzQWN0aXZlPXtpdGVtQ2xhc3NBY3RpdmV9XG4gICAgICAgICAgICBmb3J3YXJkQ2xpY2s9e2ZvcndhcmRDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7YXJyb3dSaWdodCAmJiAoXG4gICAgICAgICAgPEFycm93V3JhcHBlciB7Li4uYXJyb3dQcm9wc31cbiAgICAgICAgICAgIGlzRGlzYWJsZWQ9eyFhcnJvd3NWaXNpYmxlIHx8ICFyaWdodEFycm93VmlzaWJsZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YXJyb3dSaWdodH1cbiAgICAgICAgICA8L0Fycm93V3JhcHBlcj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgY2hlY2tWZXJzaW9uID0gKHRoYXQ6IGFueSk6IFZvaWQgPT4ge1xuICBjb25zdCB2ZXJzaW9uID0gKFJlYWN0LnZlcnNpb24pLm1hdGNoKC9eKFxcZHsxLDJ9KVxcLi8pO1xuICBpZiAoKyh2ZXJzaW9uIVsxXSkgPj0gMTYpIHtcbiAgICB0aGF0LmNvbXBvbmVudERpZENhdGNoID0gKGVycjogYW55LCBpbmZvOiBhbnkpOiBWb2lkID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdTY3JvbGxNZW51IGNhdGNoZWQgZXJyb3I6ICcsIGVyciwgaW5mbyk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxNZW51O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var notUndefOrNull = function notUndefOrNull(val) {
  return val !== undefined && val !== null;
};

exports.notUndefOrNull = notUndefOrNull;

var getClientRect = function getClientRect(elem) {
  if (!elem || !elem.getBoundingClientRect || typeof elem.getBoundingClientRect !== 'function') return {
    width: 0,
    x: 0
  };

  var _a = elem.getBoundingClientRect(),
      _b = _a.left,
      left = _b === void 0 ? 0 : _b,
      _c = _a.width,
      width = _c === void 0 ? 0 : _c;

  return {
    width: width,
    x: +left
  };
};

exports.getClientRect = getClientRect;

var translateIsValid = function translateIsValid(val) {
  return typeof val === 'number' && !isNaN(+val);
};

exports.translateIsValid = translateIsValid;

var validateTranslate = function validateTranslate(value, defaultValue) {
  return translateIsValid(value) ? +value : defaultValue;
};

exports.validateTranslate = validateTranslate;

var testPassiveEventSupport = function testPassiveEventSupport() {
  var passiveSupported = false;

  try {
    var options = {
      get passive() {
        passiveSupported = true;
        return false;
      }

    };
    window.addEventListener('testPassiveEventSupport', options, options);
    window.removeEventListener('testPassiveEventSupport', options, options);
  } catch (err) {
    passiveSupported = false;
  }

  return passiveSupported;
};

exports.testPassiveEventSupport = testPassiveEventSupport;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUvc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLElBQU0sY0FBYyxHQUFHLFNBQWpCLGNBQWlCLENBQUMsR0FBRCxFQUFTO0FBQUssU0FBQSxHQUFHLEtBQUssU0FBUixJQUFxQixHQUFHLEtBQXhCLElBQUE7QUFBaUMsQ0FBdEU7O0FBMENFLE9BQUEsQ0FBQSxjQUFBLEdBQUEsY0FBQTs7QUF4Q0YsSUFBTSxhQUFhLEdBQUcsU0FBaEIsYUFBZ0IsQ0FBQyxJQUFELEVBQVU7QUFDOUIsTUFBSSxDQUFDLElBQUQsSUFBUyxDQUFDLElBQUksQ0FBQyxxQkFBZixJQUF3QyxPQUFPLElBQUksQ0FBQyxxQkFBWixLQUFzQyxVQUFsRixFQUE4RixPQUFPO0FBQUMsSUFBQSxLQUFLLEVBQUUsQ0FBUjtBQUFXLElBQUEsQ0FBQyxFQUFFO0FBQWQsR0FBUDs7QUFFeEYsTUFBQSxFQUFBLEdBQUEsSUFBQSxDQUFBLHFCQUFBLEVBQUE7QUFBQSxNQUFDLEVBQUEsR0FBQSxFQUFBLENBQUEsSUFBRDtBQUFBLE1BQUMsSUFBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsRUFBRDtBQUFBLE1BQVcsRUFBQSxHQUFBLEVBQUEsQ0FBQSxLQUFYO0FBQUEsTUFBVyxLQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxFQUFYOztBQUNOLFNBQU87QUFBQyxJQUFBLEtBQUssRUFBQSxLQUFOO0FBQVEsSUFBQSxDQUFDLEVBQUUsQ0FBQztBQUFaLEdBQVA7QUFDRCxDQUxEOztBQXlDRSxPQUFBLENBQUEsYUFBQSxHQUFBLGFBQUE7O0FBakNGLElBQU0sZ0JBQWdCLEdBQUcsU0FBbkIsZ0JBQW1CLENBQUMsR0FBRCxFQUFTO0FBQ2hDLFNBQUEsT0FBTyxHQUFQLEtBQWUsUUFBZixJQUEyQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUYsQ0FBakM7QUFBdUMsQ0FEekM7O0FBb0NFLE9BQUEsQ0FBQSxnQkFBQSxHQUFBLGdCQUFBOztBQWpDRixJQUFNLGlCQUFpQixHQUFHLFNBQXBCLGlCQUFvQixDQUFDLEtBQUQsRUFBYSxZQUFiLEVBQWlDO0FBQ3pELFNBQUEsZ0JBQWdCLENBQUMsS0FBRCxDQUFoQixHQUNJLENBQUMsS0FETCxHQUVJLFlBRko7QUFFZ0IsQ0FIbEI7O0FBZ0NFLE9BQUEsQ0FBQSxpQkFBQSxHQUFBLGlCQUFBOztBQXpCRixJQUFNLHVCQUF1QixHQUFHLFNBQTFCLHVCQUEwQixHQUFBO0FBQzlCLE1BQUksZ0JBQWdCLEdBQUcsS0FBdkI7O0FBRUEsTUFBSTtBQUNGLFFBQUksT0FBTyxHQUFHO0FBQ1osVUFBSSxPQUFKLEdBQVc7QUFHVCxRQUFBLGdCQUFnQixHQUFHLElBQW5CO0FBQ0EsZUFBTyxLQUFQO0FBQ0Q7O0FBTlcsS0FBZDtBQVNBLElBQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLHlCQUF4QixFQUFtRCxPQUFuRCxFQUFtRSxPQUFuRTtBQUNBLElBQUEsTUFBTSxDQUFDLG1CQUFQLENBQTJCLHlCQUEzQixFQUFzRCxPQUF0RCxFQUFzRSxPQUF0RTtBQUNELEdBWkQsQ0FZRSxPQUFPLEdBQVAsRUFBWTtBQUNaLElBQUEsZ0JBQWdCLEdBQUcsS0FBbkI7QUFDRDs7QUFDRCxTQUFPLGdCQUFQO0FBQ0QsQ0FuQkQ7O0FBd0JFLE9BQUEsQ0FBQSx1QkFBQSxHQUFBLHVCQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVmIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuLyoqIGNoZWNrIGlmIHZhbHVlIG5vdCBlbXB0eSAqL1xuY29uc3Qgbm90VW5kZWZPck51bGwgPSAodmFsOiBhbnkpID0+IHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbDtcbi8qKiBnZXRDbGllbnRSZWN0ICovXG5jb25zdCBnZXRDbGllbnRSZWN0ID0gKGVsZW06IFJlZik6IHt3aWR0aDogbnVtYmVyLCB4OiBudW1iZXJ9ID0+IHtcbiAgaWYgKCFlbGVtIHx8ICFlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCB8fCB0eXBlb2YgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09ICdmdW5jdGlvbicpIHJldHVybiB7d2lkdGg6IDAsIHg6IDB9O1xuXG4gIGNvbnN0IHtsZWZ0ID0gMCwgd2lkdGggPSAwfSA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7d2lkdGgsIHg6ICtsZWZ0fTtcbn07XG5cbi8qKiBjaGVjayBpZiB0cmFuc2xhdGUgaXMgdmFsaWQgKi9cbmNvbnN0IHRyYW5zbGF0ZUlzVmFsaWQgPSAodmFsOiBhbnkpOiBib29sZWFuID0+XG4gIHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmICFpc05hTigrdmFsKTtcbi8qKiBwYXNzIHRyYW5zbGF0ZSB2YWx1ZSBhbmQgZGVmYXVsdCwgdmFsaWQgLSByZXR1cm4gZm9ybWF0dGVkIHZhbHVlLCBub3QgdmFsaWQgLSByZXR1cm4gZGVmYXVsdCAqL1xuY29uc3QgdmFsaWRhdGVUcmFuc2xhdGUgPSAodmFsdWU6IGFueSwgZGVmYXVsdFZhbHVlOiBudW1iZXIpOiBudW1iZXIgPT5cbiAgdHJhbnNsYXRlSXNWYWxpZCh2YWx1ZSlcbiAgICA/ICt2YWx1ZVxuICAgIDogZGVmYXVsdFZhbHVlO1xuXG4vKiogdGVzdCBwYXNzaXZlIGV2ZW50IHN1cHBvcnQsIGZvciBwZXJmb3JtYW5jZSAqL1xuLy8gbWF5YmUgdXNlIHNlcGFyYXRlIHBhY2thZ2UgZGV0ZWN0LXBhc3NpdmUtZXZlbnRzXG5jb25zdCB0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCA9ICgpOiBib29sZWFuID0+IHtcbiAgbGV0IHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcblxuICB0cnkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgYnJvd3NlclxuICAgICAgICAvLyBhdHRlbXB0cyB0byBhY2Nlc3MgdGhlIHBhc3NpdmUgcHJvcGVydHkuXG4gICAgICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmVFdmVudFN1cHBvcnQnLCBvcHRpb25zIGFzIGFueSwgb3B0aW9ucyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlRXZlbnRTdXBwb3J0Jywgb3B0aW9ucyBhcyBhbnksIG9wdGlvbnMgYXMgYW55KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuICB9XG4gIHJldHVybiBwYXNzaXZlU3VwcG9ydGVkO1xufTtcblxuZXhwb3J0IHtcbiAgbm90VW5kZWZPck51bGwsXG4gIGdldENsaWVudFJlY3QsXG4gIHRlc3RQYXNzaXZlRXZlbnRTdXBwb3J0LFxuICB2YWxpZGF0ZVRyYW5zbGF0ZSxcbiAgdHJhbnNsYXRlSXNWYWxpZCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9

/***/ }),

/***/ "./src/wrapper.tsx":
/*!*************************!*\
  !*** ./src/wrapper.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var defautSettings_1 = __webpack_require__(/*! ./defautSettings */ "./src/defautSettings.ts");

;
var ArrowDefaultProps = {
  disabledClass: defautSettings_1.defaultProps.arrowDisabledClass
};

var ArrowWrapper = function (_super) {
  __extends(ArrowWrapper, _super);

  function ArrowWrapper() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ArrowWrapper.prototype.render = function () {
    var _a = this.props,
        isDisabled = _a.isDisabled,
        clsName = _a.className,
        disabledClass = _a.disabledClass,
        hideArrows = _a.hideArrows,
        forwardClick = _a.forwardClick,
        _onClick = _a.onClick,
        children = _a.children;
    var disabledClassName = isDisabled ? disabledClass || clsName + "--disabled" : '';
    var className = clsName + " " + (hideArrows ? disabledClassName : '');

    var childProps = __assign({}, children.props, {
      onClick: function onClick() {
        return forwardClick ? _onClick() : null;
      }
    });

    var clickHandler = function clickHandler() {
      _onClick();
    };

    return react_1.default.createElement("div", {
      className: className,
      onClick: clickHandler
    }, react_1.default.cloneElement(children, childProps));
  };

  ;
  ArrowWrapper.defaultProps = ArrowDefaultProps;
  return ArrowWrapper;
}(react_1.default.PureComponent);

exports.ArrowWrapper = ArrowWrapper;
;
;

exports.innerStyle = function (_a) {
  var translate = _a.translate,
      dragging = _a.dragging,
      mounted = _a.mounted,
      transition = _a.transition;
  return {
    width: '9900px',
    transform: "translate3d(" + translate + "px, 0px, 0px)",
    transition: "transform " + (dragging || !mounted ? '0' : transition) + "s",
    whiteSpace: 'nowrap',
    textAlign: 'left',
    userSelect: 'none'
  };
};

;

var InnerWrapper = function (_super) {
  __extends(InnerWrapper, _super);

  function InnerWrapper() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.setMenuInnerRef = function (value) {
      var setMenuInnerRef = _this.props.setMenuInnerRef;
      setMenuInnerRef({
        'menuInner': {
          key: 'menuInner',
          elem: value
        }
      });
    };

    _this.setRef = function (key, elKey, value) {
      var _a;

      var setRef = _this.props.setRef;
      setRef((_a = {}, _a[key] = {
        key: elKey,
        elem: value
      }, _a));
    };

    _this.isElementActive = function (itemId, selected) {
      return String(itemId) === String(selected);
    };

    _this.setItems = function (arr, selected) {
      var items = arr.map(function (el) {
        var props = {
          selected: _this.isElementActive(el.key, selected),
          onClick: _this.forwardClickHandler(el.key)
        };
        return react_1.default.cloneElement(el, props);
      });
      return items;
    };

    _this.forwardClickHandler = function (key, reverse) {
      if (reverse === void 0) {
        reverse = false;
      }

      return function () {
        var _a = _this.props,
            forwardClick = _a.forwardClick,
            onClick = _a.onClick;
        if (reverse ? !forwardClick : forwardClick) onClick(key);
      };
    };

    return _this;
  }

  InnerWrapper.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        translate = _a.translate,
        dragging = _a.dragging,
        mounted = _a.mounted,
        transition = _a.transition,
        innerWrapperClass = _a.innerWrapperClass,
        itemClass = _a.itemClass,
        itemClassActive = _a.itemClassActive,
        data = _a.data,
        selected = _a.selected;
    var items = this.setItems(data, selected);
    var style = exports.innerStyle({
      translate: translate,
      dragging: dragging,
      mounted: mounted,
      transition: transition
    });
    return react_1.default.createElement("div", {
      className: innerWrapperClass,
      style: style,
      ref: function ref(inst) {
        return _this.setMenuInnerRef(inst);
      }
    }, items.map(function (Item, i) {
      return react_1.default.createElement("div", {
        ref: function ref(inst) {
          return _this.setRef("menuitem-" + i, String(Item.key || ''), inst);
        },
        className: itemClass + " " + (Item.props.selected ? itemClassActive : ''),
        key: 'menuItem-' + Item.key,
        style: {
          display: 'inline-block'
        },
        onClick: _this.forwardClickHandler(Item.key, true),
        tabIndex: 1,
        role: "button"
      }, Item);
    }));
  };

  InnerWrapper.defaultProps = {
    data: [],
    translate: defautSettings_1.defaultProps.translate,
    dragging: true,
    mounted: false,
    transition: defautSettings_1.defaultProps.transition,
    selected: defautSettings_1.defaultProps.selected
  };
  return InnerWrapper;
}(react_1.default.PureComponent);

exports.InnerWrapper = InnerWrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUvc3JjL3dyYXBwZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUEsT0FBQSxHQUFBLGVBQUEsQ0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLENBQUE7O0FBQ0EsSUFBQSxnQkFBQSxHQUFBLE9BQUEsQ0FBQSxrQkFBQSxDQUFBOztBQVdDO0FBRUQsSUFBTSxpQkFBaUIsR0FBRztBQUN4QixFQUFBLGFBQWEsRUFBRSxnQkFBQSxDQUFBLFlBQUEsQ0FBYTtBQURKLENBQTFCOztBQUtBLElBQUEsWUFBQSxHQUFBLFVBQUEsTUFBQSxFQUFBO0FBQWtDLEVBQUEsU0FBQSxDQUFBLFlBQUEsRUFBQSxNQUFBLENBQUE7O0FBQWxDLFdBQUEsWUFBQSxHQUFBOztBQWdDQzs7QUE5QlEsRUFBQSxZQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsR0FBUCxZQUFBO0FBQ1EsUUFBQSxFQUFBLEdBQUEsS0FBQSxLQUFBO0FBQUEsUUFDSixVQUFBLEdBQUEsRUFBQSxDQUFBLFVBREk7QUFBQSxRQUVKLE9BQUEsR0FBQSxFQUFBLENBQUEsU0FGSTtBQUFBLFFBR0osYUFBQSxHQUFBLEVBQUEsQ0FBQSxhQUhJO0FBQUEsUUFJSixVQUFBLEdBQUEsRUFBQSxDQUFBLFVBSkk7QUFBQSxRQUtKLFlBQUEsR0FBQSxFQUFBLENBQUEsWUFMSTtBQUFBLFFBTUosUUFBQSxHQUFBLEVBQUEsQ0FBQSxPQU5JO0FBQUEsUUFPSixRQUFBLEdBQUEsRUFBQSxDQUFBLFFBUEk7QUFTTixRQUFNLGlCQUFpQixHQUFHLFVBQVUsR0FDaEMsYUFBYSxJQUFPLE9BQU8sR0FBQSxZQURLLEdBRWhDLEVBRko7QUFHQSxRQUFNLFNBQVMsR0FBTSxPQUFPLEdBQUEsR0FBUCxJQUFXLFVBQVUsR0FBRyxpQkFBSCxHQUF1QixFQUE1QyxDQUFyQjs7QUFDQSxRQUFNLFVBQVUsR0FBQSxRQUFBLENBQUEsRUFBQSxFQUNYLFFBQVEsQ0FBQyxLQURFLEVBQ0c7QUFDakIsTUFBQSxPQUFPLEVBQUUsbUJBQUE7QUFBTSxlQUFDLFlBQVksR0FBRyxRQUFPLEVBQVYsR0FBYixJQUFBO0FBQWlDO0FBRC9CLEtBREgsQ0FBaEI7O0FBSUEsUUFBTSxZQUFZLEdBQUcsU0FBZixZQUFlLEdBQUE7QUFDbkIsTUFBQSxRQUFPO0FBQ1IsS0FGRDs7QUFJQSxXQUFRLE9BQUEsQ0FBQSxPQUFBLENBQUEsYUFBQSxDQUFBLEtBQUEsRUFBQTtBQUNOLE1BQUEsU0FBUyxFQUFFLFNBREw7QUFFTixNQUFBLE9BQU8sRUFBRTtBQUZILEtBQUEsRUFJSCxPQUFBLENBQUEsT0FBQSxDQUFNLFlBQU4sQ0FBbUIsUUFBbkIsRUFBNkIsVUFBN0IsQ0FKRyxDQUFSO0FBTUQsR0E1Qk07O0FBNEJOO0FBN0JNLEVBQUEsWUFBQSxDQUFBLFlBQUEsR0FBZSxpQkFBZjtBQStCVCxTQUFBLFlBQUE7QUFBQyxDQWhDRCxDQUFrQyxPQUFBLENBQUEsT0FBQSxDQUFNLGFBQXhDLENBQUE7O0FBQWEsT0FBQSxDQUFBLFlBQUEsR0FBQSxZQUFBO0FBZ0NaO0FBT0E7O0FBR1ksT0FBQSxDQUFBLFVBQUEsR0FBYSxVQUFDLEVBQUQsRUFBNkQ7TUFBM0QsU0FBQSxHQUFBLEVBQUEsQ0FBQSxTO01BQVcsUUFBQSxHQUFBLEVBQUEsQ0FBQSxRO01BQVUsT0FBQSxHQUFBLEVBQUEsQ0FBQSxPO01BQVMsVUFBQSxHQUFBLEVBQUEsQ0FBQSxVO0FBQ3hELFNBQU87QUFDTCxJQUFBLEtBQUssRUFBRSxRQURGO0FBRUwsSUFBQSxTQUFTLEVBQUUsaUJBQWUsU0FBZixHQUF3QixlQUY5QjtBQUdMLElBQUEsVUFBVSxFQUFFLGdCQUFhLFFBQVEsSUFBSSxDQUFDLE9BQWIsR0FBdUIsR0FBdkIsR0FBNkIsVUFBMUMsSUFBb0QsR0FIM0Q7QUFJTCxJQUFBLFVBQVUsRUFBRSxRQUpQO0FBS0wsSUFBQSxTQUFTLEVBQUUsTUFMTjtBQU1MLElBQUEsVUFBVSxFQUFFO0FBTlAsR0FBUDtBQVFELENBVFk7O0FBeUJaOztBQUdELElBQUEsWUFBQSxHQUFBLFVBQUEsTUFBQSxFQUFBO0FBQWtDLEVBQUEsU0FBQSxDQUFBLFlBQUEsRUFBQSxNQUFBLENBQUE7O0FBQWxDLFdBQUEsWUFBQSxHQUFBO0FBQUEsUUFBQSxLQUFBLEdBQUEsTUFBQSxLQUFBLElBQUEsSUFBQSxNQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsRUFBQSxTQUFBLENBQUEsSUFBQSxJQUFBOztBQVdFLElBQUEsS0FBQSxDQUFBLGVBQUEsR0FBa0IsVUFBQyxLQUFELEVBQTZCO0FBQ3RDLFVBQUEsZUFBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsZUFBQTtBQUNQLE1BQUEsZUFBZSxDQUFDO0FBQUMscUJBQWE7QUFBRSxVQUFBLEdBQUcsRUFBRSxXQUFQO0FBQW9CLFVBQUEsSUFBSSxFQUFFO0FBQTFCO0FBQWQsT0FBRCxDQUFmO0FBQ0QsS0FIRDs7QUFNQSxJQUFBLEtBQUEsQ0FBQSxNQUFBLEdBQVMsVUFBQyxHQUFELEVBQWMsS0FBZCxFQUE2QixLQUE3QixFQUF5RDs7O0FBQ3pELFVBQUEsTUFBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsTUFBQTtBQUNQLE1BQUEsTUFBTSxFQUFBLEVBQUEsR0FBQSxFQUFBLEVBQUUsRUFBQSxDQUFDLEdBQUQsQ0FBQSxHQUFPO0FBQUUsUUFBQSxHQUFHLEVBQUUsS0FBUDtBQUFjLFFBQUEsSUFBSSxFQUFFO0FBQXBCLE9BQVQsRUFBbUMsRUFBbkMsRUFBTjtBQUNELEtBSEQ7O0FBTUEsSUFBQSxLQUFBLENBQUEsZUFBQSxHQUFrQixVQUFDLE1BQUQsRUFBNkIsUUFBN0IsRUFBb0Q7QUFBYyxhQUFBLE1BQU0sQ0FBQyxNQUFELENBQU4sS0FBbUIsTUFBTSxDQUF6QixRQUF5QixDQUF6QjtBQUFtQyxLQUF2SDs7QUFHQSxJQUFBLEtBQUEsQ0FBQSxRQUFBLEdBQVcsVUFBQyxHQUFELEVBQXFCLFFBQXJCLEVBQThDO0FBQ3ZELFVBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFKLENBQVEsVUFBQSxFQUFBLEVBQUU7QUFDdEIsWUFBTSxLQUFLLEdBQUc7QUFDWixVQUFBLFFBQVEsRUFBRSxLQUFJLENBQUMsZUFBTCxDQUFxQixFQUFFLENBQUMsR0FBeEIsRUFBNkIsUUFBN0IsQ0FERTtBQUVaLFVBQUEsT0FBTyxFQUFFLEtBQUksQ0FBQyxtQkFBTCxDQUF5QixFQUFFLENBQUMsR0FBNUI7QUFGRyxTQUFkO0FBSUEsZUFBTyxPQUFBLENBQUEsT0FBQSxDQUFNLFlBQU4sQ0FBbUIsRUFBbkIsRUFBdUIsS0FBdkIsQ0FBUDtBQUNELE9BTmEsQ0FBZDtBQU9BLGFBQU8sS0FBUDtBQUNELEtBVEQ7O0FBV0EsSUFBQSxLQUFBLENBQUEsbUJBQUEsR0FBc0IsVUFBQyxHQUFELEVBQVcsT0FBWCxFQUFtQztBQUF4QixVQUFBLE9BQUEsS0FBQSxLQUFBLENBQUEsRUFBQTtBQUFBLFFBQUEsT0FBQSxHQUFBLEtBQUE7QUFBd0I7O0FBQUssYUFBQSxZQUFBO0FBQ3RELFlBQUEsRUFBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBO0FBQUEsWUFBRSxZQUFBLEdBQUEsRUFBQSxDQUFBLFlBQUY7QUFBQSxZQUFnQixPQUFBLEdBQUEsRUFBQSxDQUFBLE9BQWhCO0FBQ04sWUFBSSxPQUFPLEdBQUcsQ0FBQyxZQUFKLEdBQW1CLFlBQTlCLEVBQTRDLE9BQU8sQ0FBQyxHQUFELENBQVA7QUFDN0MsT0FINkQ7QUFHN0QsS0FIRDs7O0FBK0NEOztBQTFDQyxFQUFBLFlBQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxHQUFBLFlBQUE7QUFBQSxRQUFBLEtBQUEsR0FBQSxJQUFBOztBQUNRLFFBQUEsRUFBQSxHQUFBLEtBQUEsS0FBQTtBQUFBLFFBQ0osU0FBQSxHQUFBLEVBQUEsQ0FBQSxTQURJO0FBQUEsUUFFSixRQUFBLEdBQUEsRUFBQSxDQUFBLFFBRkk7QUFBQSxRQUdKLE9BQUEsR0FBQSxFQUFBLENBQUEsT0FISTtBQUFBLFFBSUosVUFBQSxHQUFBLEVBQUEsQ0FBQSxVQUpJO0FBQUEsUUFLSixpQkFBQSxHQUFBLEVBQUEsQ0FBQSxpQkFMSTtBQUFBLFFBTUosU0FBQSxHQUFBLEVBQUEsQ0FBQSxTQU5JO0FBQUEsUUFPSixlQUFBLEdBQUEsRUFBQSxDQUFBLGVBUEk7QUFBQSxRQVFKLElBQUEsR0FBQSxFQUFBLENBQUEsSUFSSTtBQUFBLFFBU0osUUFBQSxHQUFBLEVBQUEsQ0FBQSxRQVRJO0FBWU4sUUFBTSxLQUFLLEdBQUcsS0FBSyxRQUFMLENBQWMsSUFBZCxFQUFvQixRQUFwQixDQUFkO0FBRUEsUUFBTSxLQUFLLEdBQWtCLE9BQUEsQ0FBQSxVQUFBLENBQVc7QUFBRSxNQUFBLFNBQVMsRUFBQSxTQUFYO0FBQWEsTUFBQSxRQUFRLEVBQUEsUUFBckI7QUFBdUIsTUFBQSxPQUFPLEVBQUEsT0FBOUI7QUFBZ0MsTUFBQSxVQUFVLEVBQUE7QUFBMUMsS0FBWCxDQUE3QjtBQUVBLFdBQ0UsT0FBQSxDQUFBLE9BQUEsQ0FBQSxhQUFBLENBQUEsS0FBQSxFQUFBO0FBQ0UsTUFBQSxTQUFTLEVBQUUsaUJBRGI7QUFFRSxNQUFBLEtBQUssRUFBRSxLQUZUO0FBR0UsTUFBQSxHQUFHLEVBQUUsYUFBQSxJQUFBLEVBQUk7QUFBSSxlQUFBLEtBQUksQ0FBQyxlQUFMLENBQUEsSUFBQSxDQUFBO0FBQTBCO0FBSHpDLEtBQUEsRUFJRyxLQUFLLENBQUMsR0FBTixDQUFVLFVBQUMsSUFBRCxFQUFPLENBQVAsRUFBUTtBQUFLLGFBQ3RCLE9BQUEsQ0FBQSxPQUFBLENBQUEsYUFBQSxDQUFBLEtBQUEsRUFBQTtBQUNFLFFBQUEsR0FBRyxFQUFFLGFBQUEsSUFBQSxFQUFJO0FBQUksaUJBQUEsS0FBSSxDQUFDLE1BQUwsQ0FBWSxjQUFZLENBQXhCLEVBQTZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBTCxJQUFZLEVBQWIsQ0FBbkMsRUFBQSxJQUFBLENBQUE7QUFBMEQsU0FEekU7QUFFRSxRQUFBLFNBQVMsRUFBSyxTQUFTLEdBQUEsR0FBVCxJQUNaLElBQUksQ0FBQyxLQUFMLENBQVcsUUFBWCxHQUFzQixlQUF0QixHQUF3QyxFQUQ1QixDQUZoQjtBQUtFLFFBQUEsR0FBRyxFQUFFLGNBQWMsSUFBSSxDQUFDLEdBTDFCO0FBTUUsUUFBQSxLQUFLLEVBQUU7QUFDTCxVQUFBLE9BQU8sRUFBRTtBQURKLFNBTlQ7QUFTRSxRQUFBLE9BQU8sRUFBRSxLQUFJLENBQUMsbUJBQUwsQ0FBeUIsSUFBSSxDQUFDLEdBQTlCLEVBQW1DLElBQW5DLENBVFg7QUFVRSxRQUFBLFFBQVEsRUFBRSxDQVZaO0FBV0UsUUFBQSxJQUFJLEVBQUM7QUFYUCxPQUFBLEVBRHNCLElBQ3RCLENBRHNCO0FBZ0J2QixLQWhCQSxDQUpILENBREY7QUF3QkQsR0F6Q0Q7O0FBekNPLEVBQUEsWUFBQSxDQUFBLFlBQUEsR0FBZTtBQUNwQixJQUFBLElBQUksRUFBRSxFQURjO0FBRXBCLElBQUEsU0FBUyxFQUFFLGdCQUFBLENBQUEsWUFBQSxDQUFhLFNBRko7QUFHcEIsSUFBQSxRQUFRLEVBQUUsSUFIVTtBQUlwQixJQUFBLE9BQU8sRUFBRSxLQUpXO0FBS3BCLElBQUEsVUFBVSxFQUFFLGdCQUFBLENBQUEsWUFBQSxDQUFhLFVBTEw7QUFNcEIsSUFBQSxRQUFRLEVBQUUsZ0JBQUEsQ0FBQSxZQUFBLENBQWE7QUFOSCxHQUFmO0FBbUZULFNBQUEsWUFBQTtBQUFDLENBcEZELENBQWtDLE9BQUEsQ0FBQSxPQUFBLENBQU0sYUFBeEMsQ0FBQTs7QUFBYSxPQUFBLENBQUEsWUFBQSxHQUFBLFlBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7ZGVmYXVsdFByb3BzfSBmcm9tICcuL2RlZmF1dFNldHRpbmdzJztcbmltcG9ydCB7IERhdGEsIFZvaWQgfSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIEFycm93V3JhcHBlclByb3BzIHtcbiAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gIG9uQ2xpY2s6IEZ1bmN0aW9uLFxuICBjaGlsZHJlbjogSlNYLkVsZW1lbnQsXG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW4sXG4gIGhpZGVBcnJvd3M6IGJvb2xlYW4sXG4gIGRpc2FibGVkQ2xhc3M/OiBzdHJpbmcsXG4gIGZvcndhcmRDbGljazogYm9vbGVhblxufTtcblxuY29uc3QgQXJyb3dEZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkQ2xhc3M6IGRlZmF1bHRQcm9wcy5hcnJvd0Rpc2FibGVkQ2xhc3MsXG59O1xuXG4vKiogV3JhcHBlciBjb21wb25lbnQgZm9yIGFycm93cyAqL1xuZXhwb3J0IGNsYXNzIEFycm93V3JhcHBlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QXJyb3dXcmFwcGVyUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IEFycm93RGVmYXVsdFByb3BzO1xuICBwdWJsaWMgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNEaXNhYmxlZCxcbiAgICAgIGNsYXNzTmFtZTogY2xzTmFtZSxcbiAgICAgIGRpc2FibGVkQ2xhc3MsXG4gICAgICBoaWRlQXJyb3dzLFxuICAgICAgZm9yd2FyZENsaWNrLFxuICAgICAgb25DbGljayxcbiAgICAgIGNoaWxkcmVuXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGlzYWJsZWRDbGFzc05hbWUgPSBpc0Rpc2FibGVkXG4gICAgICA/IGRpc2FibGVkQ2xhc3MgfHwgYCR7Y2xzTmFtZX0tLWRpc2FibGVkYFxuICAgICAgOiAnJztcbiAgICBjb25zdCBjbGFzc05hbWUgPSBgJHtjbHNOYW1lfSAke2hpZGVBcnJvd3MgPyBkaXNhYmxlZENsYXNzTmFtZSA6ICcnfWA7XG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgIC4uLmNoaWxkcmVuLnByb3BzLFxuICAgICAgb25DbGljazogKCkgPT4gKGZvcndhcmRDbGljayA/IG9uQ2xpY2soKSA6IG51bGwpLFxuICAgIH07XG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKCk6IFZvaWQgPT4ge1xuICAgICAgb25DbGljaygpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgb25DbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgPlxuICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBjaGlsZFByb3BzKX1cbiAgICAgIDwvZGl2Pik7XG4gIH07XG5cbn07XG5cbmludGVyZmFjZSBpbm5lclN0eWxlUHJvcHMge1xuICB0cmFuc2xhdGU6IG51bWJlcixcbiAgZHJhZ2dpbmc6IGJvb2xlYW4sXG4gIG1vdW50ZWQ6IGJvb2xlYW4sXG4gIHRyYW5zaXRpb246IG51bWJlcixcbn07XG5cbi8qKiBmdW5jdGlvbiB0byBnZXQgZGVmYXVsdCBzdHlsZXMgZm9yIGlubmVyV3JhcHBlciAqL1xuZXhwb3J0IGNvbnN0IGlubmVyU3R5bGUgPSAoe3RyYW5zbGF0ZSwgZHJhZ2dpbmcsIG1vdW50ZWQsIHRyYW5zaXRpb259IDogaW5uZXJTdHlsZVByb3BzKTogQ1NTUHJvcGVydGllcyA9PiB7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6ICc5OTAwcHgnLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7dHJhbnNsYXRlfXB4LCAwcHgsIDBweClgLFxuICAgIHRyYW5zaXRpb246IGB0cmFuc2Zvcm0gJHtkcmFnZ2luZyB8fCAhbW91bnRlZCA/ICcwJyA6IHRyYW5zaXRpb259c2AsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICB9O1xufTtcblxuaW50ZXJmYWNlIElubmVyV3JhcHBlclByb3BzIHtcbiAgZGF0YTogRGF0YSxcbiAgc2V0UmVmOiBGdW5jdGlvbixcbiAgc2V0TWVudUlubmVyUmVmOiBGdW5jdGlvbixcbiAgb25DbGljazogRnVuY3Rpb24sXG4gIHRyYW5zbGF0ZTogbnVtYmVyLFxuICBkcmFnZ2luZzogYm9vbGVhbixcbiAgbW91bnRlZDogYm9vbGVhbixcbiAgdHJhbnNpdGlvbjogbnVtYmVyLFxuICBzZWxlY3RlZDogc3RyaW5nfG51bWJlcixcbiAgaW5uZXJXcmFwcGVyQ2xhc3M6IHN0cmluZyxcbiAgaXRlbUNsYXNzOiBzdHJpbmcsXG4gIGl0ZW1DbGFzc0FjdGl2ZTogc3RyaW5nLFxuICBmb3J3YXJkQ2xpY2s6IGJvb2xlYW4sXG59O1xuXG4vLyoqIGlubmVyV3JhcHBlciBjb21wb25lbnQsIG1lbnVJdGVtcyB3aWxsIGJlIGNoaWxkcmVuICovXG5leHBvcnQgY2xhc3MgSW5uZXJXcmFwcGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJbm5lcldyYXBwZXJQcm9wcywge30+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhOiBbXSxcbiAgICB0cmFuc2xhdGU6IGRlZmF1bHRQcm9wcy50cmFuc2xhdGUsXG4gICAgZHJhZ2dpbmc6IHRydWUsXG4gICAgbW91bnRlZDogZmFsc2UsXG4gICAgdHJhbnNpdGlvbjogZGVmYXVsdFByb3BzLnRyYW5zaXRpb24sXG4gICAgc2VsZWN0ZWQ6IGRlZmF1bHRQcm9wcy5zZWxlY3RlZCxcbiAgfTtcblxuICAvKiogc2V0IHJlZiBvZiB0aGlzIGNvbXBvbmVudCAqL1xuICBzZXRNZW51SW5uZXJSZWYgPSAodmFsdWU6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHtzZXRNZW51SW5uZXJSZWZ9ID0gdGhpcy5wcm9wcztcbiAgICBzZXRNZW51SW5uZXJSZWYoeydtZW51SW5uZXInOiB7IGtleTogJ21lbnVJbm5lcicsIGVsZW06IHZhbHVlfX0pO1xuICB9O1xuXG4gIC8qKiBzZXQgcmVmIGZvciBtZW51SXRlbXMgKi9cbiAgc2V0UmVmID0gKGtleTogc3RyaW5nLCBlbEtleTogc3RyaW5nLCB2YWx1ZTogSFRNTERpdkVsZW1lbnQgfCBudWxsKTogVm9pZCA9PiB7XG4gICAgY29uc3Qge3NldFJlZn0gPSB0aGlzLnByb3BzO1xuICAgIHNldFJlZih7W2tleV06IHsga2V5OiBlbEtleSwgZWxlbTogdmFsdWV9fSk7XG4gIH07XG5cbiAgLyoqIGNoZWNrIGlmIG1lbnVJdGVtIGFjdGl2ZSAqL1xuICBpc0VsZW1lbnRBY3RpdmUgPSAoaXRlbUlkOiBzdHJpbmd8bnVtYmVyfG51bGwsIHNlbGVjdGVkOiBzdHJpbmd8bnVtYmVyKTogYm9vbGVhbiA9PiBTdHJpbmcoaXRlbUlkKSA9PT0gU3RyaW5nKHNlbGVjdGVkKTtcblxuICAvKiogbWFrZSBhcnJheSBvZiBtZW51SXRlbXMgKi9cbiAgc2V0SXRlbXMgPSAoYXJyOiBKU1guRWxlbWVudFtdLCBzZWxlY3RlZDogUmVhY3QuUmVhY3RUZXh0KTogSlNYLkVsZW1lbnRbXSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSBhcnIubWFwKGVsID0+IHtcbiAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICBzZWxlY3RlZDogdGhpcy5pc0VsZW1lbnRBY3RpdmUoZWwua2V5LCBzZWxlY3RlZCksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuZm9yd2FyZENsaWNrSGFuZGxlcihlbC5rZXkpLFxuICAgICAgfTtcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoZWwsIHByb3BzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlbXM7XG4gIH07XG5cbiAgZm9yd2FyZENsaWNrSGFuZGxlciA9IChrZXk6IGFueSwgcmV2ZXJzZTogYm9vbGVhbiA9IGZhbHNlKSA9PiAoKTogVm9pZCA9PiB7XG4gICAgY29uc3QgeyBmb3J3YXJkQ2xpY2ssIG9uQ2xpY2sgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHJldmVyc2UgPyAhZm9yd2FyZENsaWNrIDogZm9yd2FyZENsaWNrKSBvbkNsaWNrKGtleSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0ZSxcbiAgICAgIGRyYWdnaW5nLFxuICAgICAgbW91bnRlZCxcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICBpbm5lcldyYXBwZXJDbGFzcyxcbiAgICAgIGl0ZW1DbGFzcyxcbiAgICAgIGl0ZW1DbGFzc0FjdGl2ZSxcbiAgICAgIGRhdGEsXG4gICAgICBzZWxlY3RlZCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zZXRJdGVtcyhkYXRhLCBzZWxlY3RlZCk7XG5cbiAgICBjb25zdCBzdHlsZTogQ1NTUHJvcGVydGllcyA9IGlubmVyU3R5bGUoeyB0cmFuc2xhdGUsIGRyYWdnaW5nLCBtb3VudGVkLCB0cmFuc2l0aW9uIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtpbm5lcldyYXBwZXJDbGFzc31cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICByZWY9e2luc3QgPT4gdGhpcy5zZXRNZW51SW5uZXJSZWYoaW5zdCl9PlxuICAgICAgICB7aXRlbXMubWFwKChJdGVtLCBpKSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXtpbnN0ID0+IHRoaXMuc2V0UmVmKGBtZW51aXRlbS0ke2l9YCwgU3RyaW5nKEl0ZW0ua2V5IHx8ICcnKSwgaW5zdCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2l0ZW1DbGFzc30gJHtcbiAgICAgICAgICAgICAgSXRlbS5wcm9wcy5zZWxlY3RlZCA/IGl0ZW1DbGFzc0FjdGl2ZSA6ICcnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIGtleT17J21lbnVJdGVtLScgKyBJdGVtLmtleX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZm9yd2FyZENsaWNrSGFuZGxlcihJdGVtLmtleSwgdHJ1ZSl9XG4gICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAge0l0ZW19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "react":
/*!*****************************************************!*\
  !*** external {"root":"React","commonjs2":"react"} ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map