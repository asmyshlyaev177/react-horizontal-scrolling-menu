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

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
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

;

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
      _this.ref[key] = value;
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
      }, 250);
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

      var menuItems = _this.getMenuItems(data.length);

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

    _this.getMenuItems = function (dataLength) {
      return Object.entries(_this.ref).filter(function (el) {
        return el[0].includes('menuitem');
      }).slice(0, dataLength).filter(Boolean);
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
          items = _b === void 0 ? _this.menuItems : _b,
          args = __rest(_a, ["items"]);

      var width = _this.getWidth({
        items: items
      });

      return __assign({}, width, _this.getPagesOffsets(__assign({
        items: items
      }, width, args)));
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
      if (!key) return translate;

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
      }

      if (_this.itAfterEnd(translate)) {
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
        return alignCenter ? -firstPageOffset : 0;
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
      }

      if (!left && _this.itAfterEnd(transl)) {
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

      ;
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
      }

      if (_this.itAfterEnd(result)) {
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
        newTranslate = alignCenter ? firstPageOffset : defautSettings_1.defaultProps.translate;
        xPoint = defautSettings_1.defaultProps.xPoint;
      }

      if (_this.itAfterEnd(translate)) {
        var offset = allItemsWidth - menuWidth;
        newTranslate = alignCenter ? -offset - lastPageOffset : -offset;
        xPoint = defautSettings_1.defaultProps.xPoint;
      }

      if (!alignCenter && menuWidth >= allItemsWidth) {
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

    return react_1.default.createElement("div", {
      className: menuClass,
      style: menuStyles,
      onWheel: this.handleWheel
    }, arrowLeft && react_1.default.createElement(wrapper_1.ArrowWrapper, {
      className: arrowClass,
      isDisabled: !arrowsVisible || !leftArrowVisible,
      hideArrows: hideArrows,
      onClick: this.handleArrowClick,
      disabledClass: arrowDisabledClass,
      forwardClick: forwardClick
    }, arrowLeft), react_1.default.createElement("div", {
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
      onClick: this.onItemClick,
      innerWrapperClass: innerWrapperClass,
      itemClass: itemClass,
      itemClassActive: itemClassActive,
      forwardClick: forwardClick
    })), arrowRight && react_1.default.createElement(wrapper_1.ArrowWrapper, {
      className: arrowClass,
      isDisabled: !arrowsVisible || !rightArrowVisible,
      hideArrows: hideArrows,
      onClick: this.handleArrowClickRight,
      disabledClass: arrowDisabledClass,
      forwardClick: forwardClick
    }, arrowRight));
  };

  ScrollMenu.defaultProps = defautSettings_1.defaultProps;
  return ScrollMenu;
}(react_1.default.Component);

exports.ScrollMenu = ScrollMenu;
exports.default = ScrollMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUvc3JjL3Njcm9sbE1lbnUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBLE9BQUEsR0FBQSxlQUFBLENBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBOztBQUVBLElBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUE7O0FBTUEsSUFBQSxnQkFBQSxHQUFBLE9BQUEsQ0FBQSxrQkFBQSxDQUFBOztBQU1BLElBQUEsU0FBQSxHQUFBLE9BQUEsQ0FBQSxXQUFBLENBQUE7O0FBVUM7O0FBRUQsSUFBQSxVQUFBLEdBQUEsVUFBQSxNQUFBLEVBQUE7QUFBZ0MsRUFBQSxTQUFBLENBQUEsVUFBQSxFQUFBLE1BQUEsQ0FBQTs7QUFzQjlCLFdBQUEsVUFBQSxDQUFZLEtBQVosRUFBNEI7QUFBNUIsUUFBQSxLQUFBLEdBQ0UsTUFBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLEVBQU0sS0FBTixLQUFZLElBRGQ7O0FBcUJBLElBQUEsS0FBQSxDQUFBLEtBQUEsR0FBUTtBQUNOLE1BQUEsUUFBUSxFQUFFLEtBREo7QUFFTixNQUFBLE1BQU0sRUFBRSxDQUZGO0FBR04sTUFBQSxTQUFTLEVBQUUsS0FBSSxDQUFDLEtBQUwsQ0FBVyxTQUhoQjtBQUlOLE1BQUEsa0JBQWtCLEVBQUUsQ0FKZDtBQUtOLE1BQUEsZ0JBQWdCLEVBQUUsQ0FMWjtBQU1OLE1BQUEsZ0JBQWdCLEVBQUUsS0FOWjtBQU9OLE1BQUEsaUJBQWlCLEVBQUU7QUFQYixLQUFSOztBQXFKQSxJQUFBLEtBQUEsQ0FBQSxNQUFBLEdBQVMsVUFBQyxHQUFELEVBQWU7QUFDaEIsVUFBQSxFQUFBLEdBQUEsTUFBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBO0FBQUEsVUFBRSxHQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsQ0FBRjtBQUFBLFVBQU8sS0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLENBQVA7QUFDTixNQUFBLEtBQUksQ0FBQyxHQUFMLENBQVMsR0FBVCxJQUFnQixLQUFoQjtBQUNELEtBSEQ7O0FBTUEsSUFBQSxLQUFBLENBQUEsYUFBQSxHQUFnQixVQUFDLEdBQUQsRUFBUztBQUN2QixNQUFBLEtBQUksQ0FBQyxXQUFMLEdBQW1CLEdBQW5CO0FBQ0QsS0FGRDs7QUFLQSxJQUFBLEtBQUEsQ0FBQSwwQkFBQSxHQUE2QixVQUFDLEVBQUQsRUFBMEQ7VUFBeEQsRUFBQSxHQUFBLEVBQUEsQ0FBQSxTO1VBQUEsU0FBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLFNBQUEsR0FBQSxFO0FBRXRCLFVBQUEsZUFBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsZUFBQTtBQUNILFVBQUEsRUFBQSxHQUFBLENBQUEsSUFBQSxFQUFBLElBQUEsQ0FBQTtBQUFBLFVBQUMsZ0JBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFEO0FBQUEsVUFBbUIsaUJBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFuQjtBQUNHLFVBQUEsS0FBQSxHQUFBLEtBQUEsQ0FBQSxTQUFBOztBQUVQLFVBQUksZUFBZSxJQUFJLEtBQXZCLEVBQThCO0FBQzVCLFlBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxlQUFMLENBQXFCO0FBQUMsVUFBQSxNQUFNLEVBQUU7QUFBVCxTQUFyQixDQUFyQjs7QUFDQSxZQUFNLGdCQUFnQixHQUFHLFlBQVksQ0FBQyxRQUFiLENBQXNCLEtBQUssQ0FBQyxDQUFELENBQTNCLENBQXpCO0FBQ0EsWUFBTSxlQUFlLEdBQUcsWUFBWSxDQUFDLFFBQWIsQ0FBc0IsS0FBSyxDQUFDLEtBQU4sQ0FBWSxDQUFDLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBdEIsQ0FBeEI7QUFDQSxRQUFBLGdCQUFnQixHQUFHLENBQUMsZ0JBQXBCO0FBQ0EsUUFBQSxpQkFBaUIsR0FBRyxDQUFDLGVBQXJCO0FBQ0Q7O0FBRUQsYUFBTztBQUFDLFFBQUEsZ0JBQWdCLEVBQUEsZ0JBQWpCO0FBQW1CLFFBQUEsaUJBQWlCLEVBQUE7QUFBcEMsT0FBUDtBQUNELEtBZkQ7O0FBa0JBLElBQUEsS0FBQSxDQUFBLHdCQUFBLEdBQTJCLFlBQUE7QUFDbkIsVUFBQSxFQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUE7QUFBQSxVQUFDLGdCQUFBLEdBQUEsRUFBQSxDQUFBLGdCQUFEO0FBQUEsVUFBbUIsaUJBQUEsR0FBQSxFQUFBLENBQUEsaUJBQW5COztBQUNBLFVBQUEsRUFBQSxHQUFBLEtBQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFVBQ0osbUJBQUEsR0FBQSxFQUFBLENBQUEsZ0JBREk7QUFBQSxVQUVKLG9CQUFBLEdBQUEsRUFBQSxDQUFBLGlCQUZJOztBQUlOLFVBQ0UsZ0JBQWdCLEtBQUssbUJBQXJCLElBQ0EsaUJBQWlCLEtBQUssb0JBRnhCLEVBR0U7QUFDQSxRQUFBLEtBQUksQ0FBQyxRQUFMLENBQWM7QUFDWixVQUFBLGdCQUFnQixFQUFFLG1CQUROO0FBRVosVUFBQSxpQkFBaUIsRUFBRTtBQUZQLFNBQWQ7QUFJRDtBQUNGLEtBZkQ7O0FBaUJBLElBQUEsS0FBQSxDQUFBLE1BQUEsR0FBUyxZQUFBO0FBQ1AsTUFBQSxLQUFJLENBQUMsVUFBTDs7QUFDQSxNQUFBLEtBQUksQ0FBQyxPQUFMLEdBQWUsSUFBZjtBQUNELEtBSEQ7O0FBS0EsSUFBQSxLQUFBLENBQUEsYUFBQSxHQUFnQixZQUFBO0FBQ2QsTUFBQSxZQUFZLENBQUMsS0FBSSxDQUFDLFdBQU4sQ0FBWjtBQUNBLE1BQUEsS0FBSSxDQUFDLFdBQUwsR0FBbUIsVUFBVSxDQUFDLFlBQUE7QUFBTSxlQUFBLEtBQUksQ0FBSixNQUFBLEVBQUE7QUFBYSxPQUFwQixFQUFzQixHQUF0QixDQUE3QjtBQUNELEtBSEQ7O0FBTUEsSUFBQSxLQUFBLENBQUEsTUFBQSxHQUFTLFlBQUE7QUFDRCxVQUFBLEVBQUEsR0FBQSxLQUFBLENBQUEsV0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFVBQ0osTUFBQSxHQUFBLEVBQUEsQ0FBQSxNQURJO0FBQUEsVUFFSixPQUFBLEdBQUEsRUFBQSxDQUFBLE9BRkk7QUFBQSxVQUdKLFNBQUEsR0FBQSxFQUFBLENBQUEsU0FISTtBQUFBLFVBSUosYUFBQSxHQUFBLEVBQUEsQ0FBQSxhQUpJO0FBQUEsVUFLSixlQUFBLEdBQUEsRUFBQSxDQUFBLGVBTEk7QUFBQSxVQU1KLGNBQUEsR0FBQSxFQUFBLENBQUEsY0FOSTs7QUFRTixNQUFBLEtBQUksQ0FBQyxPQUFMLEdBQWUsT0FBZjtBQUNBLE1BQUEsS0FBSSxDQUFDLE1BQUwsR0FBYyxNQUFkO0FBQ0EsTUFBQSxLQUFJLENBQUMsYUFBTCxHQUFxQixhQUFyQjtBQUNBLE1BQUEsS0FBSSxDQUFDLFNBQUwsR0FBaUIsU0FBakI7QUFDQSxNQUFBLEtBQUksQ0FBQyxlQUFMLEdBQXVCLGVBQXZCO0FBQ0EsTUFBQSxLQUFJLENBQUMsY0FBTCxHQUFzQixjQUF0QjtBQUNELEtBZkQ7O0FBa0JBLElBQUEsS0FBQSxDQUFBLFVBQUEsR0FBYSxZQUFBO0FBQ0wsVUFBQSxFQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUE7QUFBQSxVQUNKLFFBQUEsR0FBQSxFQUFBLENBQUEsUUFESTtBQUFBLFVBRUosSUFBQSxHQUFBLEVBQUEsQ0FBQSxJQUZJO0FBQUEsVUFHSixjQUFBLEdBQUEsRUFBQSxDQUFBLFNBSEk7QUFBQSxVQUlKLGdCQUFBLEdBQUEsRUFBQSxDQUFBLGdCQUpJO0FBTUUsVUFBQSxjQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxTQUFBO0FBQ1IsVUFBSSxDQUFDLElBQUQsSUFBUyxDQUFDLElBQUksQ0FBQyxNQUFuQixFQUEyQixPQUFPLEtBQVA7QUFDM0IsVUFBSSxhQUFhLEdBQUcsY0FBcEI7O0FBRUEsVUFBTSxTQUFTLEdBQUcsS0FBSSxDQUFDLFlBQUwsQ0FBa0IsSUFBSSxDQUFDLE1BQXZCLENBQWxCOztBQUNBLFVBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFMLENBQVUsVUFBQSxFQUFBLEVBQUU7QUFBSSxlQUFBLEVBQUUsQ0FBQyxHQUFILEtBQUEsUUFBQTtBQUFtQixPQUFuQyxDQUFyQjtBQUNBLE1BQUEsS0FBSSxDQUFDLFNBQUwsR0FBaUIsU0FBakI7QUFDQSxNQUFBLEtBQUksQ0FBQyxRQUFMLEdBQWdCLFlBQVksR0FDeEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFiLElBQW9CLEVBQXJCLENBRGtCLEdBRXhCLGdCQUFBLENBQUEsWUFBQSxDQUFhLFFBRmpCOztBQUtNLFVBQUEsRUFBQSxHQUFBLEtBQUEsQ0FBQSxXQUFBLENBQUEsRUFBQSxDQUFBO0FBQUEsVUFDSixNQUFBLEdBQUEsRUFBQSxDQUFBLE1BREk7QUFBQSxVQUVKLE9BQUEsR0FBQSxFQUFBLENBQUEsT0FGSTtBQUFBLFVBR0osU0FBQSxHQUFBLEVBQUEsQ0FBQSxTQUhJO0FBQUEsVUFJSixhQUFBLEdBQUEsRUFBQSxDQUFBLGFBSkk7QUFBQSxVQUtKLGVBQUEsR0FBQSxFQUFBLENBQUEsZUFMSTtBQUFBLFVBTUosY0FBQSxHQUFBLEVBQUEsQ0FBQSxjQU5JOztBQVFOLE1BQUEsS0FBSSxDQUFDLE9BQUwsR0FBZSxPQUFmO0FBQ0EsTUFBQSxLQUFJLENBQUMsTUFBTCxHQUFjLE1BQWQ7QUFDQSxNQUFBLEtBQUksQ0FBQyxhQUFMLEdBQXFCLGFBQXJCO0FBQ0EsTUFBQSxLQUFJLENBQUMsU0FBTCxHQUFpQixTQUFqQjtBQUNBLE1BQUEsS0FBSSxDQUFDLGVBQUwsR0FBdUIsZUFBdkI7QUFDQSxNQUFBLEtBQUksQ0FBQyxjQUFMLEdBQXNCLGNBQXRCOztBQUVBLFVBQU0sUUFBUSxHQUFBLFFBQUEsQ0FBQSxFQUFBLEVBQU8sS0FBSSxDQUFDLEtBQVosQ0FBZDs7QUFHQSxVQUFNLDZCQUE2QixHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU4sSUFBaUIsYUFBYSxLQUFLLGdCQUFBLENBQUEsWUFBQSxDQUFhLFNBQXRGOztBQUNBLFVBQUksNkJBQTZCLElBQUksQ0FBQyxPQUFBLENBQUEsZ0JBQUEsQ0FBaUIsYUFBakIsQ0FBRCxJQUFvQyxDQUFDLE9BQUEsQ0FBQSxnQkFBQSxDQUFpQixjQUFqQixDQUExRSxFQUE0RztBQUMxRyxRQUFBLFFBQVEsQ0FBQyxTQUFULEdBQXFCLEtBQUksQ0FBQyxlQUExQjtBQUNEOztBQUdLLFVBQUEsRUFBQSxHQUFBLEtBQUEsQ0FBQSwwQkFBQSxDQUFBO0FBQUEsUUFBQSxTQUFBLEVBQUE7QUFBQSxPQUFBLENBQUE7QUFBQSxVQUNKLGdCQUFBLEdBQUEsRUFBQSxDQUFBLGdCQURJO0FBQUEsVUFFSixpQkFBQSxHQUFBLEVBQUEsQ0FBQSxpQkFGSTs7QUFJTixNQUFBLFFBQVEsQ0FBQyxnQkFBVCxHQUE0QixnQkFBNUI7QUFDQSxNQUFBLFFBQVEsQ0FBQyxpQkFBVCxHQUE2QixpQkFBN0I7O0FBR0EsVUFBSSxnQkFBSixFQUFzQjtBQUNwQixZQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsY0FBTCxDQUFvQjtBQUNyQyxVQUFBLE1BQU0sRUFBRSxRQUQ2QjtBQUVyQyxVQUFBLFNBQVMsRUFBRSxRQUFRLENBQUM7QUFGaUIsU0FBcEIsQ0FBbkI7O0FBSUEsWUFBSSxVQUFKLEVBQWdCO0FBQ2QsVUFBQSxRQUFRLENBQUMsU0FBVCxHQUFxQixLQUFJLENBQUMsb0JBQUwsQ0FBMEIsUUFBMUIsQ0FBckI7QUFDRDtBQUNGOztBQUVELE1BQUEsS0FBSSxDQUFDLFFBQUwsQ0FBYSxRQUFBLENBQUEsRUFBQSxFQUFLLFFBQUwsQ0FBYjtBQUNELEtBOUREOztBQWlFQSxJQUFBLEtBQUEsQ0FBQSxjQUFBLEdBQWlCLFVBQUMsRUFBRCxFQUlkO1VBSmdCLE1BQUEsR0FBQSxFQUFBLENBQUEsTTtVQUFRLEVBQUEsR0FBQSxFQUFBLENBQUEsUztVQUFBLFNBQUEsR0FBQSxFQUFBLEtBQUEsS0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxTQUFBLEdBQUEsRTtBQUtsQixVQUFBLFNBQUEsR0FBQSxLQUFBLENBQUEsU0FBQTs7QUFDUCxVQUFNLElBQUksR0FBRyxLQUFJLENBQUMsWUFBTCxDQUFrQixNQUFsQixDQUFiOztBQUVBLFVBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxlQUFMLENBQXFCO0FBQ3hDLFFBQUEsTUFBTSxFQUFFO0FBRGdDLE9BQXJCLENBQXJCOztBQUdBLGFBQU8sQ0FBQyxZQUFZLENBQUMsUUFBYixDQUFzQixJQUF0QixDQUFSO0FBQ0QsS0FaRDs7QUFlQSxJQUFBLEtBQUEsQ0FBQSxRQUFBLEdBQVcsVUFBQyxPQUFELEVBQWdCO0FBQ2xCLFVBQUEsU0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsU0FBQTs7QUFDUCxVQUFNLFlBQVksR0FBRyxLQUFJLENBQUMsb0JBQUwsQ0FBMEIsT0FBMUIsQ0FBckI7O0FBQ0EsTUFBQSxLQUFJLENBQUMsUUFBTCxHQUFnQixPQUFoQjtBQUNBLFVBQUksU0FBUyxLQUFLLFlBQWxCLEVBQWdDLE9BQU8sS0FBUDs7QUFFaEMsTUFBQSxLQUFJLENBQUMsUUFBTCxDQUFjO0FBQUMsUUFBQSxTQUFTLEVBQUU7QUFBWixPQUFkO0FBQ0QsS0FQRDs7QUFVQSxJQUFBLEtBQUEsQ0FBQSxZQUFBLEdBQWUsVUFBQyxVQUFELEVBQW1CO0FBQ2hDLGFBQU8sTUFBTSxDQUFDLE9BQVAsQ0FBZSxLQUFJLENBQUMsR0FBcEIsRUFDSixNQURJLENBQ0csVUFBQSxFQUFBLEVBQUU7QUFBSSxlQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsQ0FBTSxRQUFOLENBQUEsVUFBQSxDQUFBO0FBQTBCLE9BRG5DLEVBRUosS0FGSSxDQUVFLENBRkYsRUFFSyxVQUZMLEVBR0osTUFISSxDQUdHLE9BSEgsQ0FBUDtBQUlELEtBTEQ7O0FBUUEsSUFBQSxLQUFBLENBQUEsYUFBQSxHQUFnQixVQUFDLEVBQUQsRUFBK0M7VUFBN0MsRUFBQSxHQUFBLEVBQUEsQ0FBQSxLO1VBQUEsS0FBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLEU7QUFDaEIsYUFBTyxLQUFLLENBQ1QsR0FESSxDQUNBLFVBQUEsRUFBQSxFQUFFO0FBQUksZUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLENBQUEsSUFBQTtBQUFVLE9BRGhCLEVBRUosTUFGSSxDQUVHLE9BRkgsRUFHSixNQUhJLENBR0csVUFBQyxHQUFELEVBQU0sRUFBTixFQUFRO0FBQUssZUFBQyxHQUFHLElBQUksT0FBQSxDQUFBLGFBQUEsQ0FBYyxFQUFkLEVBQVIsS0FBQTtBQUFnQyxPQUhoRCxFQUdrRCxDQUhsRCxDQUFQO0FBSUQsS0FMRDs7QUFRQSxJQUFBLEtBQUEsQ0FBQSxRQUFBLEdBQVcsVUFBQyxFQUFELEVBQTZCO1VBQTNCLEtBQUEsR0FBQSxFQUFBLENBQUEsSztBQUNYLFVBQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsVUFBaEM7O0FBQ00sVUFBQSxFQUFBLEdBQUEsT0FBQSxDQUFBLGFBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQSxDQUFBO0FBQUEsVUFBQyxPQUFBLEdBQUEsRUFBQSxDQUFBLENBQUQ7QUFBQSxVQUFhLFNBQUEsR0FBQSxFQUFBLENBQUEsS0FBYjs7QUFDTixVQUFNLGFBQWEsR0FBRyxLQUFJLENBQUMsYUFBTCxDQUFtQjtBQUFDLFFBQUEsS0FBSyxFQUFBO0FBQU4sT0FBbkIsQ0FBdEI7O0FBQ0EsYUFBTztBQUFDLFFBQUEsTUFBTSxFQUFBLE1BQVA7QUFBUyxRQUFBLE9BQU8sRUFBQSxPQUFoQjtBQUFrQixRQUFBLFNBQVMsRUFBQSxTQUEzQjtBQUE2QixRQUFBLGFBQWEsRUFBQTtBQUExQyxPQUFQO0FBQ0QsS0FMRDs7QUFRQSxJQUFBLEtBQUEsQ0FBQSxXQUFBLEdBQWMsVUFBQyxFQUFELEVBQWtDO0FBQWhDLFVBQUEsRUFBQSxHQUFBLEVBQUEsQ0FBQSxLQUFBO0FBQUEsVUFBQSxLQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxTQUFBLEdBQUEsRUFBQTtBQUFBLFVBQXdCLElBQUEsR0FBQSxNQUFBLENBQUEsRUFBQSxFQUFBLENBQUEsT0FBQSxDQUFBLENBQXhCOztBQVFkLFVBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxRQUFMLENBQWM7QUFBQyxRQUFBLEtBQUssRUFBQTtBQUFOLE9BQWQsQ0FBZDs7QUFDQSxhQUFBLFFBQUEsQ0FBQSxFQUFBLEVBQ0ssS0FETCxFQUVLLEtBQUksQ0FBQyxlQUFMLENBQW9CLFFBQUEsQ0FBQTtBQUFFLFFBQUEsS0FBSyxFQUFBO0FBQVAsT0FBQSxFQUFZLEtBQVosRUFBc0IsSUFBdEIsQ0FBcEIsQ0FGTCxDQUFBO0FBSUQsS0FiRDs7QUFnQkEsSUFBQSxLQUFBLENBQUEsZUFBQSxHQUFrQixVQUFDLEVBQUQsRUFPakI7VUFOQyxFQUFBLEdBQUEsRUFBQSxDQUFBLEs7VUFBQSxLQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxTQUFBLEdBQUEsRTtVQUNBLEVBQUEsR0FBQSxFQUFBLENBQUEsYTtVQUFBLGFBQUEsR0FBQSxFQUFBLEtBQUEsS0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLGFBQUEsR0FBQSxFO1VBQ0EsRUFBQSxHQUFBLEVBQUEsQ0FBQSxNO1VBQUEsTUFBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsTUFBQSxHQUFBLEU7VUFDQSxFQUFBLEdBQUEsRUFBQSxDQUFBLE87VUFBQSxPQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxPQUFBLEdBQUEsRTtVQUNBLEVBQUEsR0FBQSxFQUFBLENBQUEsUztVQUFBLFNBQUEsR0FBQSxFQUFBLEtBQUEsS0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLFNBQUEsR0FBQSxFO1VBQ0EsRUFBQSxHQUFBLEVBQUEsQ0FBQSxNO1VBQUEsTUFBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLFNBQUEsR0FBQSxFOztBQUtBLFVBQU0saUJBQWlCLEdBQUcsS0FBSSxDQUFDLGVBQUwsQ0FBcUI7QUFDN0MsUUFBQSxNQUFNLEVBQUEsTUFEdUM7QUFFN0MsUUFBQSxLQUFLLEVBQUEsS0FGd0M7QUFHN0MsUUFBQSxNQUFNLEVBQUEsTUFIdUM7QUFJN0MsUUFBQSxPQUFPLEVBQUEsT0FKc0M7QUFLN0MsUUFBQSxTQUFTLEVBQUE7QUFMb0MsT0FBckIsQ0FBMUI7O0FBT0EsVUFBTSxlQUFlLEdBQUcsS0FBSSxDQUFDLGVBQUwsQ0FBcUI7QUFDM0MsUUFBQSxLQUFLLEVBQUUsaUJBRG9DO0FBRTNDLFFBQUEsU0FBUyxFQUFBO0FBRmtDLE9BQXJCLENBQXhCOztBQUlBLFVBQU0sZUFBZSxHQUFHLEtBQUksQ0FBQyxlQUFMLENBQXFCO0FBQzNDLFFBQUEsS0FBSyxFQUFBLEtBRHNDO0FBRTNDLFFBQUEsTUFBTSxFQUFFLENBQUMsYUFBRCxHQUFpQixTQUZrQjtBQUczQyxRQUFBLE1BQU0sRUFBQSxNQUhxQztBQUkzQyxRQUFBLE9BQU8sRUFBQSxPQUpvQztBQUszQyxRQUFBLFNBQVMsRUFBQTtBQUxrQyxPQUFyQixDQUF4Qjs7QUFPQSxVQUFNLGNBQWMsR0FBRyxLQUFJLENBQUMsZUFBTCxDQUFxQjtBQUMxQyxRQUFBLEtBQUssRUFBRSxlQURtQztBQUUxQyxRQUFBLFNBQVMsRUFBQTtBQUZpQyxPQUFyQixDQUF2Qjs7QUFLQSxhQUFPO0FBQ0wsUUFBQSxlQUFlLEVBQUEsZUFEVjtBQUVMLFFBQUEsY0FBYyxFQUFBO0FBRlQsT0FBUDtBQUlELEtBdENEOztBQXlDQSxJQUFBLEtBQUEsQ0FBQSxXQUFBLEdBQWMsVUFBQyxFQUFELEVBQVc7QUFDakIsVUFBQSxFQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUE7QUFBQSxVQUFDLGFBQUEsR0FBQSxFQUFBLENBQUEsYUFBRDtBQUFBLFVBQWdCLFFBQUEsR0FBQSxFQUFBLENBQUEsUUFBaEI7QUFDQyxVQUFBLGdCQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxnQkFBQTtBQUVQLFVBQU0sV0FBVyxHQUFHLGdCQUFnQixHQUFHLENBQXZDO0FBRUEsVUFBSSxXQUFXLElBQUksQ0FBQyxhQUFwQixFQUFtQyxPQUFPLEtBQVA7QUFFbkMsTUFBQSxLQUFJLENBQUMsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFVBQUksUUFBSixFQUFjLFFBQVEsQ0FBQyxFQUFELENBQVI7QUFDZixLQVZEOztBQWFBLElBQUEsS0FBQSxDQUFBLGVBQUEsR0FBa0IsVUFBQyxFQUFELEVBT2pCO1VBTkMsRUFBQSxHQUFBLEVBQUEsQ0FBQSxLO1VBQUEsS0FBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLEU7VUFDQSxFQUFBLEdBQUEsRUFBQSxDQUFBLE07VUFBQSxNQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxNQUFBLEdBQUEsRTtVQUNBLEVBQUEsR0FBQSxFQUFBLENBQUEsTztVQUFBLE9BQUEsR0FBQSxFQUFBLEtBQUEsS0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLE9BQUEsR0FBQSxFO1VBQ0EsRUFBQSxHQUFBLEVBQUEsQ0FBQSxTO1VBQUEsU0FBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLEU7VUFDQSxFQUFBLEdBQUEsRUFBQSxDQUFBLE07VUFBQSxNQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLEU7VUFDQSxFQUFBLEdBQUEsRUFBQSxDQUFBLFM7VUFBQSxTQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsU0FBQSxJQUFBLGdCQUFBLENBQUEsWUFBQSxDQUFBLFNBQUEsR0FBQSxFO0FBRUEsYUFBTyxLQUFLLENBQUMsTUFBTixDQUFhLFVBQUEsRUFBQSxFQUFFO0FBQ2IsWUFBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLGFBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxFQUFBLEtBQUE7O0FBQ1AsWUFBTSxFQUFFLEdBQUcsS0FBSSxDQUFDLFVBQUwsQ0FBZ0IsS0FBaEIsRUFBdUIsRUFBdkIsQ0FBWDs7QUFDQSxZQUFNLENBQUMsR0FBRyxLQUFJLENBQUMsc0JBQUwsQ0FBNEI7QUFDcEMsVUFBQSxLQUFLLEVBQUUsRUFENkI7QUFFcEMsVUFBQSxTQUFTLEVBQUUsS0FGeUI7QUFHcEMsVUFBQSxTQUFTLEVBQUE7QUFIMkIsU0FBNUIsQ0FBVjs7QUFNQSxlQUFPLEtBQUksQ0FBQyxXQUFMLENBQWlCO0FBQUMsVUFBQSxDQUFDLEVBQUEsQ0FBRjtBQUFJLFVBQUEsT0FBTyxFQUFBLE9BQVg7QUFBYSxVQUFBLE1BQU0sRUFBQSxNQUFuQjtBQUFxQixVQUFBLE9BQU8sRUFBQSxPQUE1QjtBQUE4QixVQUFBLFNBQVMsRUFBQSxTQUF2QztBQUF5QyxVQUFBLE1BQU0sRUFBQTtBQUEvQyxTQUFqQixDQUFQO0FBQ0QsT0FWTSxDQUFQO0FBV0QsS0FuQkQ7O0FBc0JBLElBQUEsS0FBQSxDQUFBLFdBQUEsR0FBYyxVQUFDLEVBQUQsRUFPYjtVQU5DLENBQUEsR0FBQSxFQUFBLENBQUEsQztVQUNBLEVBQUEsR0FBQSxFQUFBLENBQUEsTTtVQUFBLE1BQUEsR0FBQSxFQUFBLEtBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLEU7VUFDQSxPQUFBLEdBQUEsRUFBQSxDQUFBLE87VUFDQSxFQUFBLEdBQUEsRUFBQSxDQUFBLE07VUFBQSxNQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxNQUFBLEdBQUEsRTtVQUNBLEVBQUEsR0FBQSxFQUFBLENBQUEsTztVQUFBLE9BQUEsR0FBQSxFQUFBLEtBQUEsS0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLE9BQUEsR0FBQSxFO1VBQ0EsRUFBQSxHQUFBLEVBQUEsQ0FBQSxTO1VBQUEsU0FBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLEU7QUFFQSxVQUFNLFFBQVEsR0FBRyxPQUFPLEdBQUcsQ0FBM0I7QUFDQSxVQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksTUFBTSxJQUFJLE9BQU8sR0FBRyxTQUFkLENBQVYsQ0FBTixHQUE0QyxDQUE5RDtBQUNBLFVBQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFoQjtBQUNBLFVBQU0sWUFBWSxHQUFHLEdBQUcsR0FBRyxPQUEzQjtBQUNBLGFBQU8sR0FBRyxJQUFJLFFBQVAsSUFBbUIsWUFBWSxJQUFJLFNBQTFDO0FBQ0QsS0FiRDs7QUFnQkEsSUFBQSxLQUFBLENBQUEsVUFBQSxHQUFhLFVBQUMsU0FBRCxFQUF3QyxJQUF4QyxFQUFzRDtBQUFyRCxVQUFBLFNBQUEsS0FBQSxLQUFBLENBQUEsRUFBQTtBQUFBLFFBQUEsU0FBQSxHQUF1QixLQUFJLENBQUMsU0FBNUI7QUFBcUM7O0FBQ2pELFVBQUksQ0FBQyxTQUFELElBQWMsQ0FBQyxJQUFuQixFQUF5QixPQUFPLENBQVA7QUFDekIsYUFBTyxTQUFTLENBQUMsU0FBVixDQUFvQixVQUFBLEVBQUEsRUFBRTtBQUFJLGVBQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixLQUFVLElBQUksQ0FBZCxDQUFjLENBQWQ7QUFBaUIsT0FBM0MsQ0FBUDtBQUNELEtBSEQ7O0FBTUEsSUFBQSxLQUFBLENBQUEsY0FBQSxHQUFpQixVQUFDLElBQUQsRUFBZ0IsWUFBaEIsRUFBdUM7QUFDL0MsVUFBQSxTQUFBLEdBQUEsS0FBQSxDQUFBLFNBQUE7O0FBQ1AsVUFBSSxJQUFKLEVBQVU7QUFDUixZQUFJLENBQUMsWUFBWSxDQUFDLE1BQWxCLEVBQTBCLE9BQU8sQ0FBUDtBQUMzQixPQUZELE1BRU87QUFDTCxZQUFJLENBQUMsWUFBWSxDQUFDLE1BQWxCLEVBQTBCLE9BQU8sU0FBUyxDQUFDLE1BQWpCO0FBQzNCOztBQUNELFVBQU0sR0FBRyxHQUFHLElBQUksR0FDWixLQUFJLENBQUMsVUFBTCxDQUFnQixTQUFoQixFQUEyQixZQUFZLENBQUMsQ0FBRCxDQUF2QyxJQUE4QyxDQURsQyxHQUVaLEtBQUksQ0FBQyxVQUFMLENBQWdCLFNBQWhCLEVBQTJCLFlBQVksQ0FBQyxLQUFiLENBQW1CLENBQUMsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBM0IsSUFBd0QsQ0FGNUQ7QUFHQSxhQUFPLEdBQUcsR0FBRyxDQUFOLEdBQVUsQ0FBVixHQUFjLEdBQXJCO0FBQ0QsS0FYRDs7QUFjQSxJQUFBLEtBQUEsQ0FBQSxvQkFBQSxHQUF1QixVQUFDLEdBQUQsRUFBWTtBQUM1QixVQUFBLFNBQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLFNBQUE7QUFFTCxVQUFJLENBQUMsR0FBTCxFQUFVLE9BQU8sU0FBUDs7QUFFVixVQUFNLFNBQVMsR0FBRyxLQUFJLENBQUMsaUJBQUwsQ0FBdUIsR0FBdkIsQ0FBbEI7O0FBQ0EsVUFBSSxTQUFTLEtBQUssQ0FBQyxDQUFuQixFQUFzQixPQUFPLFNBQVA7QUFFZixVQUFBLE9BQUEsR0FBQSxLQUFBLENBQUEsT0FBQTtBQUNBLFVBQUEsV0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQTtBQUVQLE1BQUEsU0FBUyxHQUFHLEtBQUksQ0FBQyxzQkFBTCxDQUE0QjtBQUFDLFFBQUEsS0FBSyxFQUFFO0FBQVIsT0FBNUIsQ0FBWjs7QUFFQSxVQUFNLDRCQUE0QixHQUFHLEtBQUksQ0FBQyxlQUFMLENBQXFCO0FBQ3hELFFBQUEsTUFBTSxFQUFFLENBQUM7QUFEK0MsT0FBckIsQ0FBckM7O0FBR0EsVUFBTSxNQUFNLEdBQUcsV0FBVyxHQUN0QixLQUFJLENBQUMsZUFBTCxDQUFxQjtBQUFDLFFBQUEsS0FBSyxFQUFFO0FBQVIsT0FBckIsQ0FEc0IsR0FFdEIsZ0JBQUEsQ0FBQSxZQUFBLENBQWEsU0FGakI7QUFJQSxNQUFBLFNBQVMsR0FBRyxFQUFFLFNBQVMsR0FBRyxPQUFaLEdBQXNCLE1BQXhCLENBQVo7O0FBRUEsVUFBSSxLQUFJLENBQUMsYUFBTCxDQUFtQixTQUFuQixDQUFKLEVBQW1DO0FBQ2pDLFFBQUEsU0FBUyxHQUFHLEtBQUksQ0FBQyxnQkFBTCxFQUFaO0FBQ0Q7O0FBQ0QsVUFBSSxLQUFJLENBQUMsVUFBTCxDQUFnQixTQUFoQixDQUFKLEVBQWdDO0FBQzlCLFFBQUEsU0FBUyxHQUFHLEtBQUksQ0FBQyxjQUFMLEVBQVo7QUFDRDs7QUFDRCxhQUFPLFNBQVA7QUFDRCxLQTdCRDs7QUFnQ0EsSUFBQSxLQUFBLENBQUEsWUFBQSxHQUFlLFVBQUMsR0FBRCxFQUFZO0FBQ3pCLGFBQU8sS0FBSSxDQUFDLFNBQUwsQ0FDSixJQURJLENBQ0MsVUFBQSxFQUFBLEVBQUU7QUFBSSxlQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsQ0FBTSxHQUFOLEtBQUEsR0FBQTtBQUFpQixPQUR4QixLQUM2QixDQUFDLE1BQUQsRUFBUztBQUFDLFFBQUEsR0FBRyxFQUFFLEdBQU47QUFBVyxRQUFBLElBQUksRUFBRTtBQUFqQixPQUFULENBRHBDO0FBRUQsS0FIRDs7QUFNQSxJQUFBLEtBQUEsQ0FBQSxpQkFBQSxHQUFvQixVQUFDLE9BQUQsRUFBZ0I7QUFDbEMsVUFBSSxDQUFDLE9BQUwsRUFBYyxPQUFPLENBQUMsQ0FBUjtBQUNkLGFBQU8sS0FBSSxDQUFDLEtBQUwsQ0FBVyxJQUFYLENBQWdCLFNBQWhCLENBQTBCLFVBQUEsRUFBQSxFQUFFO0FBQUksZUFBQSxFQUFFLENBQUMsR0FBSCxLQUFBLE9BQUE7QUFBa0IsT0FBbEQsQ0FBUDtBQUNELEtBSEQ7O0FBTUEsSUFBQSxLQUFBLENBQUEsc0JBQUEsR0FBeUIsVUFBQyxFQUFELEVBSXhCO1VBSEMsS0FBQSxHQUFBLEVBQUEsQ0FBQSxLO1VBQ0EsRUFBQSxHQUFBLEVBQUEsQ0FBQSxTO1VBQUEsU0FBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLEU7VUFDQSxFQUFBLEdBQUEsRUFBQSxDQUFBLFM7VUFBQSxTQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLEU7QUFFQSxVQUFJLENBQUMsU0FBUyxDQUFDLE1BQWYsRUFBdUIsT0FBTyxDQUFQO0FBQ3ZCLFVBQU0sR0FBRyxHQUFHLEtBQUssSUFBSSxTQUFTLENBQUMsTUFBbkIsR0FBNEIsU0FBUyxDQUFDLE1BQVYsR0FBbUIsQ0FBL0MsR0FBbUQsS0FBL0Q7QUFDTyxVQUFBLENBQUEsR0FBQSxPQUFBLENBQUEsYUFBQSxDQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLENBQUE7QUFDUCxVQUFNLFFBQVEsR0FBRyxDQUFDLENBQUQsR0FBSyxTQUF0QjtBQUNBLGFBQU8sUUFBUDtBQUNELEtBVkQ7O0FBY0EsSUFBQSxLQUFBLENBQUEsb0JBQUEsR0FBdUIsVUFBQyxZQUFELEVBQTBCLEtBQTFCLEVBQTBDO0FBQ3hELFVBQUEsV0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQTtBQUNELFVBQUEsRUFBQSxHQUFBLEtBQUE7QUFBQSxVQUFDLE9BQUEsR0FBQSxFQUFBLENBQUEsT0FBRDtBQUFBLFVBQVUsY0FBQSxHQUFBLEVBQUEsQ0FBQSxjQUFWOztBQUVOLFVBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxXQUFMLENBQ2YsWUFBWSxJQUFJLFlBQVksQ0FBQyxLQUFiLENBQW1CLENBQUMsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBaEIsR0FDSSxZQUFZLENBQUMsS0FBYixDQUFtQixDQUFDLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLENBREosR0FFSSxLQUFLLENBQUMsS0FBTixDQUFZLENBQUMsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUhXLENBQWpCOztBQUtBLFVBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxTQUFOLENBQWdCLFVBQUEsRUFBQSxFQUFFO0FBQUksZUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVUsUUFBUSxDQUFsQixDQUFrQixDQUFsQjtBQUFxQixPQUEzQyxDQUF0Qjs7QUFFQSxVQUFNLFlBQVksR0FBRyxLQUFJLENBQUMsc0JBQUwsQ0FBNEI7QUFDL0MsUUFBQSxLQUFLLEVBQUUsYUFEd0M7QUFFL0MsUUFBQSxTQUFTLEVBQUU7QUFGb0MsT0FBNUIsQ0FBckI7O0FBSUEsVUFBTSxtQkFBbUIsR0FBRyxZQUFZLEdBQUcsT0FBM0M7O0FBRUEsVUFBTSxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsZUFBTCxDQUFxQjtBQUM1QyxRQUFBLEtBQUssRUFBQSxLQUR1QztBQUU1QyxRQUFBLE1BQU0sRUFBRSxDQUFDO0FBRm1DLE9BQXJCLENBQXpCOztBQUtBLFVBQUksZ0JBQWdCLENBQUMsUUFBakIsQ0FBMEIsS0FBSyxDQUFDLEtBQU4sQ0FBWSxDQUFDLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBMUIsQ0FBSixFQUFtRDtBQUNqRCxlQUFPLFdBQVcsR0FDZCxtQkFBbUIsR0FBRyxjQURSLEdBRWQsbUJBRko7QUFHRDs7QUFFRCxVQUFNLFlBQVksR0FBRyxTQUFmLFlBQWUsR0FBQTtBQUFNLGVBQUEsS0FBSSxDQUFDLGVBQUwsQ0FBcUI7QUFBQyxVQUFBLEtBQUssRUFBM0I7QUFBcUIsU0FBckIsQ0FBQTtBQUErQyxPQUExRTs7QUFFQSxVQUFNLFNBQVMsR0FBRyxXQUFXLEdBQ3pCLG1CQUFtQixHQUFHLFlBQVksRUFEVCxHQUV6QixtQkFGSjtBQUdBLGFBQU8sU0FBUDtBQUNELEtBbENEOztBQXFDQSxJQUFBLEtBQUEsQ0FBQSxtQkFBQSxHQUFzQixVQUFDLFlBQUQsRUFBMEIsS0FBMUIsRUFBMEM7QUFDdkQsVUFBQSxXQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxXQUFBO0FBQ0QsVUFBQSxFQUFBLEdBQUEsS0FBQTtBQUFBLFVBQUMsT0FBQSxHQUFBLEVBQUEsQ0FBQSxPQUFEO0FBQUEsVUFBVSxTQUFBLEdBQUEsRUFBQSxDQUFBLFNBQVY7QUFBQSxVQUFxQixlQUFBLEdBQUEsRUFBQSxDQUFBLGVBQXJCOztBQUVOLFVBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxXQUFMLENBQ2YsWUFBWSxJQUFJLFlBQVksQ0FBQyxDQUFELENBQTVCLEdBQWtDLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0IsQ0FBaEIsQ0FBbEMsR0FBdUQsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTLENBQVQsQ0FEeEMsQ0FBakI7O0FBR0EsVUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsVUFBQSxFQUFBLEVBQUU7QUFBSSxlQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsS0FBVSxRQUFRLENBQWxCLENBQWtCLENBQWxCO0FBQXFCLE9BQTNDLENBQXRCOztBQUVBLFVBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxzQkFBTCxDQUE0QjtBQUMvQyxRQUFBLEtBQUssRUFBRSxhQUR3QztBQUUvQyxRQUFBLFNBQVMsRUFBRTtBQUZvQyxPQUE1QixDQUFyQjs7QUFJQSxVQUFNLFNBQVMsR0FBRyxLQUFJLENBQUMsYUFBTCxDQUFtQjtBQUFDLFFBQUEsS0FBSyxFQUFFLENBQUMsUUFBRDtBQUFSLE9BQW5CLENBQWxCOztBQUNBLFVBQU0saUJBQWlCLEdBQUcsWUFBWSxHQUFHLE9BQWYsSUFBMEIsU0FBUyxHQUFHLFNBQXRDLENBQTFCOztBQUVBLFVBQU0sZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLGVBQUwsQ0FBcUI7QUFDNUMsUUFBQSxLQUFLLEVBQUEsS0FEdUM7QUFFNUMsUUFBQSxNQUFNLEVBQUUsQ0FBQztBQUZtQyxPQUFyQixDQUF6Qjs7QUFLQSxVQUFJLGdCQUFnQixDQUFDLFFBQWpCLENBQTBCLEtBQUssQ0FBQyxDQUFELENBQS9CLENBQUosRUFBeUM7QUFDdkMsZUFBTyxXQUFXLEdBQUcsQ0FBQyxlQUFKLEdBQXNCLENBQXhDO0FBQ0Q7O0FBRUQsVUFBTSxZQUFZLEdBQUcsU0FBZixZQUFlLEdBQUE7QUFBTSxlQUFBLEtBQUksQ0FBQyxlQUFMLENBQXFCO0FBQUMsVUFBQSxLQUFLLEVBQTNCO0FBQXFCLFNBQXJCLENBQUE7QUFBK0MsT0FBMUU7O0FBRUEsVUFBTSxTQUFTLEdBQUcsV0FBVyxHQUN6QixpQkFBaUIsR0FBRyxZQUFZLEVBRFAsR0FFekIsaUJBRko7QUFHQSxhQUFPLFNBQVA7QUFDRCxLQS9CRDs7QUFrQ0EsSUFBQSxLQUFBLENBQUEsV0FBQSxHQUFjLFVBQUMsR0FBRCxFQUFZO0FBQ2pCLFVBQUEsU0FBQSxHQUFBLEtBQUEsQ0FBQSxTQUFBO0FBQ1AsVUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVYsQ0FBb0IsVUFBQSxFQUFBLEVBQUU7QUFBSSxlQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsS0FBQSxHQUFBO0FBQWEsT0FBdkMsQ0FBbEI7QUFDQSxVQUFNLGFBQWEsR0FBRyxTQUFTLEdBQUcsQ0FBbEM7QUFDQSxVQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsYUFBRCxDQUFULElBQTRCLFNBQVMsQ0FBQyxLQUFWLENBQWdCLENBQUMsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBN0M7QUFDQSxhQUFPLFFBQVA7QUFDRCxLQU5EOztBQVNBLElBQUEsS0FBQSxDQUFBLFdBQUEsR0FBYyxVQUFDLEdBQUQsRUFBWTtBQUNqQixVQUFBLFNBQUEsR0FBQSxLQUFBLENBQUEsU0FBQTtBQUNQLFVBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFWLENBQW9CLFVBQUEsRUFBQSxFQUFFO0FBQUksZUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQUEsR0FBQTtBQUFhLE9BQXZDLENBQWxCO0FBQ0EsVUFBTSxhQUFhLEdBQUcsU0FBUyxHQUFHLENBQWxDO0FBQ0EsVUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLGFBQUQsQ0FBVCxJQUE0QixTQUFTLENBQUMsQ0FBRCxDQUF0RDtBQUNBLGFBQU8sUUFBUDtBQUNELEtBTkQ7O0FBU0EsSUFBQSxLQUFBLENBQUEsU0FBQSxHQUFZLFVBQUMsSUFBRCxFQUFjO0FBQ2pCLFVBQUEsS0FBQSxHQUFBLEtBQUEsQ0FBQSxTQUFBOztBQUNQLFVBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxlQUFMLENBQXFCO0FBQUMsUUFBQSxLQUFLLEVBQUE7QUFBTixPQUFyQixDQUFyQjs7QUFDQSxVQUFNLFNBQVMsR0FBRyxJQUFJLEdBQ2xCLEtBQUksQ0FBQyxtQkFBTCxDQUF5QixZQUF6QixFQUF1QyxLQUF2QyxDQURrQixHQUVsQixLQUFJLENBQUMsb0JBQUwsQ0FBMEIsWUFBMUIsRUFBd0MsS0FBeEMsQ0FGSjtBQUdBLGFBQU8sU0FBUDtBQUNELEtBUEQ7O0FBWUEsSUFBQSxLQUFBLENBQUEsZUFBQSxHQUFrQixVQUNoQixFQURnQixFQUV5QjtVQUR4QyxFQUFBLEdBQUEsRUFBQSxDQUFBLEs7VUFBQSxLQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxTQUFBLEdBQUEsRTtVQUF3QixFQUFBLEdBQUEsRUFBQSxDQUFBLFM7VUFBQSxTQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxTQUFBLEdBQUEsRTs7QUFFekIsVUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFYLEVBQW1CO0FBQ2pCLGVBQU8sQ0FBUDtBQUNEOztBQUNELFVBQU0sVUFBVSxHQUFHLEtBQUksQ0FBQyxhQUFMLENBQW1CO0FBQUMsUUFBQSxLQUFLLEVBQUE7QUFBTixPQUFuQixDQUFuQjs7QUFDQSxVQUFNLE1BQU0sR0FBRyxDQUFDLFNBQVMsR0FBRyxVQUFiLElBQTJCLENBQTFDO0FBQ0EsYUFBTyxNQUFQO0FBQ0QsS0FURDs7QUFZQSxJQUFBLEtBQUEsQ0FBQSxXQUFBLEdBQWMsVUFBQyxDQUFELEVBQWM7QUFDbkIsVUFBQSxLQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBO0FBQ1AsVUFBSSxDQUFDLEtBQUwsRUFBWSxPQUFPLEtBQVA7O0FBQ1osVUFBSSxDQUFDLENBQUMsTUFBRixHQUFXLENBQWYsRUFBa0I7QUFDaEIsUUFBQSxLQUFJLENBQUMsZ0JBQUw7QUFDRCxPQUZELE1BRU87QUFDTCxRQUFBLEtBQUksQ0FBQyxnQkFBTCxDQUFzQixLQUF0QjtBQUNEO0FBQ0YsS0FSRDs7QUFXQSxJQUFBLEtBQUEsQ0FBQSxnQkFBQSxHQUFtQixZQUFBO0FBQ1YsVUFBQSxlQUFBLEdBQUEsS0FBQSxDQUFBLGVBQUE7QUFDQSxVQUFBLFdBQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLFdBQUE7QUFDUCxhQUFPLFdBQVcsR0FBRyxlQUFILEdBQXFCLGdCQUFBLENBQUEsWUFBQSxDQUFhLFNBQXBEO0FBQ0QsS0FKRDs7QUFPQSxJQUFBLEtBQUEsQ0FBQSxjQUFBLEdBQWlCLFlBQUE7QUFDUixVQUFBLFdBQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLFdBQUE7QUFDRCxVQUFBLEVBQUEsR0FBQSxLQUFBO0FBQUEsVUFBQyxhQUFBLEdBQUEsRUFBQSxDQUFBLGFBQUQ7QUFBQSxVQUFnQixTQUFBLEdBQUEsRUFBQSxDQUFBLFNBQWhCO0FBQUEsVUFBMkIsY0FBQSxHQUFBLEVBQUEsQ0FBQSxjQUEzQjtBQUNOLFVBQU0sTUFBTSxHQUFHLGFBQWEsR0FBRyxTQUEvQjtBQUNBLGFBQU8sV0FBVyxHQUFHLENBQUMsTUFBRCxHQUFVLGNBQWIsR0FBOEIsQ0FBQyxNQUFqRDtBQUNELEtBTEQ7O0FBU0EsSUFBQSxLQUFBLENBQUEscUJBQUEsR0FBd0IsWUFBQTtBQUN0QixNQUFBLEtBQUksQ0FBQyxnQkFBTCxDQUFzQixLQUF0QjtBQUNELEtBRkQ7O0FBS0EsSUFBQSxLQUFBLENBQUEsZ0JBQUEsR0FBbUIsVUFBQyxJQUFELEVBQVk7QUFBWCxVQUFBLElBQUEsS0FBQSxLQUFBLENBQUEsRUFBQTtBQUFBLFFBQUEsSUFBQSxHQUFBLElBQUE7QUFBVzs7QUFDdEIsVUFBQSxXQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxXQUFBO0FBQ0QsVUFBQSxFQUFBLEdBQUEsS0FBQTtBQUFBLFVBQUMsYUFBQSxHQUFBLEVBQUEsQ0FBQSxhQUFEO0FBQUEsVUFBZ0IsU0FBQSxHQUFBLEVBQUEsQ0FBQSxTQUFoQjs7QUFFTixVQUFJLENBQUMsV0FBRCxJQUFnQixDQUFDLElBQWpCLElBQXlCLGFBQWEsR0FBRyxTQUE3QyxFQUF3RDtBQUN0RCxlQUFPLEtBQVA7QUFDRDs7QUFFRCxVQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsU0FBTCxDQUFlLElBQWYsQ0FBZjs7QUFDQSxVQUFJLE1BQU0sR0FBRyxDQUFDLE1BQWQ7O0FBRUEsVUFBSSxJQUFJLElBQUksS0FBSSxDQUFDLGFBQUwsQ0FBbUIsTUFBbkIsQ0FBWixFQUF3QztBQUN0QyxRQUFBLE1BQU0sR0FBRyxLQUFJLENBQUMsZ0JBQUwsRUFBVDtBQUNEOztBQUNELFVBQUksQ0FBQyxJQUFELElBQVMsS0FBSSxDQUFDLFVBQUwsQ0FBZ0IsTUFBaEIsQ0FBYixFQUFzQztBQUNwQyxRQUFBLE1BQU0sR0FBRyxLQUFJLENBQUMsY0FBTCxFQUFUO0FBQ0Q7O0FBRUQsVUFBTSxZQUFZLEdBQUcsTUFBckI7O0FBRUEsTUFBQSxLQUFJLENBQUMsUUFBTCxDQUFjO0FBQ1osUUFBQSxTQUFTLEVBQUUsWUFEQztBQUVaLFFBQUEsTUFBTSxFQUFFLGdCQUFBLENBQUEsWUFBQSxDQUFhLE1BRlQ7QUFHWixRQUFBLGtCQUFrQixFQUFFLENBSFI7QUFJWixRQUFBLGdCQUFnQixFQUFFO0FBSk4sT0FBZDtBQU1ELEtBMUJEOztBQTZCQSxJQUFBLEtBQUEsQ0FBQSxhQUFBLEdBQWdCLFVBQUMsS0FBRCxFQUFjO0FBQ3JCLFVBQUEsV0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQTtBQUNELFVBQUEsRUFBQSxHQUFBLEtBQUE7QUFBQSxVQUFDLFNBQUEsR0FBQSxFQUFBLENBQUEsU0FBRDtBQUFBLFVBQVksYUFBQSxHQUFBLEVBQUEsQ0FBQSxhQUFaO0FBQUEsVUFBMkIsZUFBQSxHQUFBLEVBQUEsQ0FBQSxlQUEzQjtBQUNOLFVBQUksYUFBYSxHQUFHLFNBQXBCLEVBQStCLE9BQU8sSUFBUDtBQUMvQixhQUFPLFdBQVcsR0FDZCxLQUFLLEdBQUcsZUFETSxHQUVkLEtBQUssR0FBRyxnQkFBQSxDQUFBLFlBQUEsQ0FBYSxTQUZ6QjtBQUdELEtBUEQ7O0FBU0EsSUFBQSxLQUFBLENBQUEsVUFBQSxHQUFhLFVBQUMsS0FBRCxFQUFjO0FBQ2xCLFVBQUEsV0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQTtBQUNELFVBQUEsRUFBQSxHQUFBLEtBQUE7QUFBQSxVQUFDLFNBQUEsR0FBQSxFQUFBLENBQUEsU0FBRDtBQUFBLFVBQVksYUFBQSxHQUFBLEVBQUEsQ0FBQSxhQUFaO0FBQUEsVUFBMkIsY0FBQSxHQUFBLEVBQUEsQ0FBQSxjQUEzQjtBQUNOLFVBQUksYUFBYSxHQUFHLFNBQXBCLEVBQStCLE9BQU8sSUFBUDtBQUMvQixhQUFPLFdBQVcsR0FDZCxLQUFLLEdBQUcsZ0JBQUEsQ0FBQSxZQUFBLENBQWEsU0FBckIsSUFDRSxJQUFJLENBQUMsR0FBTCxDQUFTLEtBQVQsSUFBa0IsYUFBYSxHQUFHLFNBQWhCLEdBQTRCLGNBRmxDLEdBR2QsS0FBSyxHQUFHLGdCQUFBLENBQUEsWUFBQSxDQUFhLFNBQXJCLElBQ0UsSUFBSSxDQUFDLEdBQUwsQ0FBUyxLQUFULElBQWtCLGFBQWEsR0FBRyxTQUp4QztBQUtELEtBVEQ7O0FBWUEsSUFBQSxLQUFBLENBQUEsUUFBQSxHQUFXLFVBQUMsRUFBRCxFQUE0QztBQUNyRCxVQUFJLGFBQWEsRUFBakIsRUFBcUI7QUFDbkIsZUFBTyxFQUFFLENBQUMsT0FBSCxDQUFXLENBQVgsRUFBYyxPQUFyQjtBQUNELE9BRkQsTUFFTyxJQUFJLGFBQWEsRUFBakIsRUFBcUI7QUFDMUIsZUFBTyxFQUFFLENBQUMsT0FBVjtBQUNELE9BRk0sTUFFQTtBQUNMLGVBQU8sQ0FBUDtBQUNEOztBQUFBO0FBQ0YsS0FSRDs7QUFXQSxJQUFBLEtBQUEsQ0FBQSxlQUFBLEdBQWtCLFVBQUMsRUFBRCxFQUFzQztBQUV0RCxVQUFJLEVBQUUsSUFBSSxhQUFhLEVBQW5CLElBQXlCLEVBQUUsQ0FBQyxPQUFILEtBQWUsQ0FBNUMsRUFBK0MsT0FBTyxLQUFQO0FBQ3hDLFVBQUEsY0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsUUFBQTtBQUNQLFVBQUksQ0FBQyxjQUFMLEVBQXFCLE9BQU8sS0FBUDtBQUNkLFVBQUEsa0JBQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLFNBQUE7O0FBQ1AsTUFBQSxLQUFJLENBQUMsUUFBTCxDQUFjO0FBQ1osUUFBQSxRQUFRLEVBQUUsSUFERTtBQUVaLFFBQUEsTUFBTSxFQUFFLENBRkk7QUFHWixRQUFBLGtCQUFrQixFQUFBLGtCQUhOO0FBSVosUUFBQSxnQkFBZ0IsRUFBRTtBQUpOLE9BQWQ7QUFNRCxLQVpEOztBQWVBLElBQUEsS0FBQSxDQUFBLFVBQUEsR0FBYSxVQUFDLENBQUQsRUFBMkM7QUFDL0MsVUFBQSxjQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxRQUFBO0FBQ0QsVUFBQSxFQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUE7QUFBQSxVQUFDLFNBQUEsR0FBQSxFQUFBLENBQUEsU0FBRDtBQUFBLFVBQVksUUFBQSxHQUFBLEVBQUEsQ0FBQSxRQUFaO0FBQUEsVUFBc0IsTUFBQSxHQUFBLEVBQUEsQ0FBQSxNQUF0QjtBQUFBLFVBQThCLGdCQUFBLEdBQUEsRUFBQSxDQUFBLGdCQUE5QjtBQUNOLFVBQUksQ0FBQyxjQUFELElBQW1CLENBQUMsUUFBeEIsRUFBa0MsT0FBTyxLQUFQOztBQUVsQyxVQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsUUFBTCxDQUFjLENBQWQsQ0FBZDs7QUFDQSxVQUFNLElBQUksR0FDUixNQUFNLEtBQUssZ0JBQUEsQ0FBQSxZQUFBLENBQWEsTUFBeEIsR0FBaUMsZ0JBQUEsQ0FBQSxZQUFBLENBQWEsTUFBOUMsR0FBdUQsTUFBTSxHQUFHLEtBRGxFO0FBRUEsVUFBSSxNQUFNLEdBQUcsU0FBUyxHQUFHLElBQXpCOztBQUdBLFVBQUksS0FBSSxDQUFDLGFBQUwsQ0FBbUIsTUFBbkIsQ0FBSixFQUFnQztBQUM5QixRQUFBLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxJQUFULElBQWlCLENBQW5DO0FBQ0Q7O0FBQ0QsVUFBSSxLQUFJLENBQUMsVUFBTCxDQUFnQixNQUFoQixDQUFKLEVBQTZCO0FBQzNCLFFBQUEsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBTCxDQUFTLElBQVQsSUFBaUIsQ0FBbkM7QUFDRDs7QUFFRCxVQUFNLFlBQVksR0FBRyxNQUFyQjs7QUFFQSxNQUFBLEtBQUksQ0FBQyxRQUFMLENBQWM7QUFDWixRQUFBLE1BQU0sRUFBRSxLQURJO0FBRVosUUFBQSxTQUFTLEVBQUUsWUFGQztBQUdaLFFBQUEsZ0JBQWdCLEVBQUUsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxJQUFUO0FBSHpCLE9BQWQ7QUFLRCxLQXpCRDs7QUE0QkEsSUFBQSxLQUFBLENBQUEsY0FBQSxHQUFpQixVQUFDLENBQUQsRUFBMkM7QUFDcEQsVUFBQSxFQUFBLEdBQUEsS0FBQTtBQUFBLFVBQUMsYUFBQSxHQUFBLEVBQUEsQ0FBQSxhQUFEO0FBQUEsVUFBZ0IsU0FBQSxHQUFBLEVBQUEsQ0FBQSxTQUFoQjtBQUFBLFVBQTJCLGVBQUEsR0FBQSxFQUFBLENBQUEsZUFBM0I7QUFBQSxVQUE0QyxjQUFBLEdBQUEsRUFBQSxDQUFBLGNBQTVDO0FBQ0YsVUFBQSxFQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUE7QUFBQSxVQUNGLFFBQUEsR0FBQSxFQUFBLENBQUEsUUFERTtBQUFBLFVBRUYsRUFBQSxHQUFBLEVBQUEsQ0FBQSxNQUZFO0FBQUEsVUFFRixNQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFGRTtBQUFBLFVBR0YsU0FBQSxHQUFBLEVBQUEsQ0FBQSxTQUhFO0FBQUEsVUFJRixrQkFBQSxHQUFBLEVBQUEsQ0FBQSxrQkFKRTtBQU1FLFVBQUEsRUFBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBO0FBQUEsVUFBQyxjQUFBLEdBQUEsRUFBQSxDQUFBLFFBQUQ7QUFBQSxVQUEyQixXQUFBLEdBQUEsRUFBQSxDQUFBLFdBQTNCO0FBQ04sVUFBSSxDQUFDLGNBQUQsSUFBbUIsQ0FBQyxRQUF4QixFQUFrQyxPQUFPLEtBQVA7QUFFbEMsVUFBSSxZQUFZLEdBQUcsU0FBbkI7O0FBRUEsVUFBSSxLQUFJLENBQUMsYUFBTCxDQUFtQixTQUFuQixDQUFKLEVBQW1DO0FBQ2pDLFFBQUEsWUFBWSxHQUFHLFdBQVcsR0FBRyxlQUFILEdBQXFCLGdCQUFBLENBQUEsWUFBQSxDQUFhLFNBQTVEO0FBQ0EsUUFBQSxNQUFNLEdBQUcsZ0JBQUEsQ0FBQSxZQUFBLENBQWEsTUFBdEI7QUFDRDs7QUFDRCxVQUFJLEtBQUksQ0FBQyxVQUFMLENBQWdCLFNBQWhCLENBQUosRUFBZ0M7QUFDOUIsWUFBTSxNQUFNLEdBQUcsYUFBYSxHQUFHLFNBQS9CO0FBQ0EsUUFBQSxZQUFZLEdBQUcsV0FBVyxHQUFHLENBQUMsTUFBRCxHQUFVLGNBQWIsR0FBOEIsQ0FBQyxNQUF6RDtBQUNBLFFBQUEsTUFBTSxHQUFHLGdCQUFBLENBQUEsWUFBQSxDQUFhLE1BQXRCO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDLFdBQUQsSUFBZ0IsU0FBUyxJQUFJLGFBQWpDLEVBQWdEO0FBQzlDLFFBQUEsWUFBWSxHQUFHLGdCQUFBLENBQUEsWUFBQSxDQUFhLFNBQTVCO0FBQ0EsUUFBQSxNQUFNLEdBQUcsZ0JBQUEsQ0FBQSxZQUFBLENBQWEsTUFBdEI7QUFDRDs7QUFFRCxNQUFBLFlBQVksR0FBRyxZQUFmOztBQUVBLE1BQUEsS0FBSSxDQUFDLFFBQUwsQ0FDRTtBQUNFLFFBQUEsUUFBUSxFQUFFLEtBRFo7QUFFRSxRQUFBLE1BQU0sRUFBQSxNQUZSO0FBR0UsUUFBQSxTQUFTLEVBQUU7QUFIYixPQURGLEVBTUUsWUFBQTtBQUNFLGVBQUEsS0FBSSxDQUFDLFFBQUwsQ0FBYztBQUNaLFVBQUEsU0FBUyxFQUFFLFlBREM7QUFFWixVQUFBLFlBQVksRUFBRTtBQUZGLFNBQWQsQ0FBQTtBQUdFLE9BVk47QUFZRCxLQTFDRDs7QUE2Q0EsSUFBQSxLQUFBLENBQUEsZUFBQSxHQUFrQixZQUFBO0FBQ1YsVUFBQSxFQUFBLEdBQUEsS0FBQTtBQUFBLFVBQ0osYUFBQSxHQUFBLEVBQUEsQ0FBQSxhQURJO0FBQUEsVUFFSixTQUFBLEdBQUEsRUFBQSxDQUFBLFNBRkk7QUFBQSxVQUdJLFVBQUEsR0FBQSxFQUFBLENBQUEsS0FBQSxDQUFBLFVBSEo7QUFLTixVQUFNLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxJQUFJLGFBQWEsSUFBSSxTQUFoQyxDQUFwQjtBQUNBLGFBQU8sQ0FBQyxJQUFSO0FBQ0QsS0FSRDs7QUFXQSxJQUFBLEtBQUEsQ0FBQSxRQUFBLEdBQVcsVUFBQyxFQUFELEVBTVY7VUFMQyxFQUFBLEdBQUEsRUFBQSxDQUFBLFM7VUFBQSxTQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLEU7VUFDQSxFQUFBLEdBQUEsRUFBQSxDQUFBLFk7VUFBQSxZQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLEU7QUFLTyxVQUFBLFFBQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLFFBQUE7QUFDQSxVQUFBLG1CQUFBLEdBQUEsS0FBQSxDQUFBLG1CQUFBOztBQUNQLFVBQ0UsUUFBUSxJQUNSLFNBQVMsS0FBSyxZQURkLElBRUEsU0FBUyxLQUFLLG1CQUhoQixFQUlFO0FBQ0EsUUFBQSxLQUFJLENBQUMsbUJBQUwsR0FBMkIsU0FBM0I7QUFDQSxRQUFBLFFBQVEsQ0FBQztBQUFDLFVBQUEsU0FBUyxFQUFBO0FBQVYsU0FBRCxDQUFSO0FBQ0Q7QUFDRixLQWpCRDs7QUFoMUJFLElBQUEsS0FBSSxDQUFDLEdBQUwsR0FBVyxFQUFYO0FBQ0EsSUFBQSxLQUFJLENBQUMsV0FBTCxHQUFtQixJQUFuQjtBQUNBLElBQUEsS0FBSSxDQUFDLE9BQUwsR0FBZSxLQUFmO0FBQ0EsSUFBQSxLQUFJLENBQUMsVUFBTCxHQUFrQixLQUFsQjtBQUNBLElBQUEsS0FBSSxDQUFDLGFBQUwsR0FBcUIsQ0FBckI7QUFDQSxJQUFBLEtBQUksQ0FBQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLElBQUEsS0FBSSxDQUFDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxJQUFBLEtBQUksQ0FBQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLElBQUEsS0FBSSxDQUFDLGVBQUwsR0FBdUIsQ0FBdkI7QUFDQSxJQUFBLEtBQUksQ0FBQyxjQUFMLEdBQXNCLENBQXRCO0FBQ0EsSUFBQSxLQUFJLENBQUMsbUJBQUwsR0FBMkIsQ0FBM0I7QUFDQSxJQUFBLEtBQUksQ0FBQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsSUFBQSxLQUFJLENBQUMsUUFBTCxHQUFnQixFQUFoQjtBQUVBLElBQUEsS0FBSSxDQUFDLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxJQUFBLEtBQUksQ0FBQyxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsSUFBQSxLQUFJLENBQUMsV0FBTCxHQUFtQixDQUFuQjs7QUFDRDs7QUFZRCxFQUFBLFVBQUEsQ0FBQSxTQUFBLENBQUEsaUJBQUEsR0FBQSxZQUFBO0FBQUEsUUFBQSxLQUFBLEdBQUEsSUFBQTs7QUFDRSxTQUFLLFVBQUw7O0FBRUEsSUFBQSxNQUFNLENBQUMscUJBQVAsR0FDRSxNQUFNLENBQUMscUJBQVAsSUFBZ0MsWUFBQSxDQUFhLENBRC9DOztBQUdBLFFBQU0sYUFBYSxHQUFHLE9BQUEsQ0FBQSx1QkFBQSxFQUF0QjtBQUNBLFFBQU0sY0FBYyxHQUFHLGFBQWEsR0FDaEM7QUFBQyxNQUFBLE9BQU8sRUFBRSxJQUFWO0FBQWdCLE1BQUEsT0FBTyxFQUFFO0FBQXpCLEtBRGdDLEdBRWhDLElBRko7QUFHQSxRQUFNLGdCQUFnQixHQUFHLGFBQWEsR0FDbEM7QUFBQyxNQUFBLE9BQU8sRUFBRSxJQUFWO0FBQWdCLE1BQUEsT0FBTyxFQUFFO0FBQXpCLEtBRGtDLEdBRWxDLEtBRko7QUFLQSxJQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxLQUFLLE1BQXJDLEVBQTZDLGdCQUE3QztBQUNBLElBQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUssYUFBdkMsRUFBc0QsZ0JBQXREO0FBQ0EsSUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsS0FBSyxVQUE1QyxFQUF3RCxjQUF4RDtBQUNBLElBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLEtBQUssY0FBMUMsRUFBMEQsY0FBMUQ7QUFHQSxTQUFLLFdBQUwsR0FBbUIsVUFBVSxDQUFDLFlBQUE7QUFBTSxhQUFDLEtBQUksQ0FBQyxNQUFMLElBQWUsS0FBSSxDQUFwQixXQUFnQixFQUFoQjtBQUFtQyxLQUExQyxFQUE0QyxDQUE1QyxDQUE3QjtBQUNELEdBdEJEOztBQXdCQSxFQUFBLFVBQUEsQ0FBQSxTQUFBLENBQUEscUJBQUEsR0FBQSxVQUFzQixTQUF0QixFQUE0QyxTQUE1QyxFQUFnRTtBQUd4RCxRQUFBLEVBQUEsR0FBQSxLQUFBLEtBQUE7QUFBQSxRQUNKLFNBQUEsR0FBQSxFQUFBLENBQUEsU0FESTtBQUFBLFFBRUosUUFBQSxHQUFBLEVBQUEsQ0FBQSxRQUZJO0FBQUEsUUFHSixnQkFBQSxHQUFBLEVBQUEsQ0FBQSxnQkFISTtBQUFBLFFBSUosaUJBQUEsR0FBQSxFQUFBLENBQUEsaUJBSkk7QUFPSixRQUFBLFlBQUEsR0FBQSxTQUFBLENBQUEsU0FBQTtBQUFBLFFBQ0EsV0FBQSxHQUFBLFNBQUEsQ0FBQSxRQURBO0FBQUEsUUFFQSxtQkFBQSxHQUFBLFNBQUEsQ0FBQSxnQkFGQTtBQUFBLFFBR0Esb0JBQUEsR0FBQSxTQUFBLENBQUEsaUJBSEE7QUFNSSxRQUFBLEVBQUEsR0FBQSxLQUFBLEtBQUE7QUFBQSxRQUNKLGNBQUEsR0FBQSxFQUFBLENBQUEsU0FESTtBQUFBLFFBRUosYUFBQSxHQUFBLEVBQUEsQ0FBQSxRQUZJO0FBQUEsUUFHSixnQkFBQSxHQUFBLEVBQUEsQ0FBQSxnQkFISTtBQU1KLFFBQUEsaUJBQUEsR0FBQSxTQUFBLENBQUEsU0FBQTtBQUFBLFFBQ0EsZ0JBQUEsR0FBQSxTQUFBLENBQUEsUUFEQTtBQUlGLFFBQU0scUJBQXFCLEdBQUcsT0FBQSxDQUFBLGNBQUEsQ0FBZSxpQkFBZixDQUE5QjtBQUNBLFFBQU0sa0JBQWtCLEdBQUcsU0FBUyxLQUFLLFlBQXpDO0FBQ0EsUUFBTSxrQkFBa0IsR0FDdEIscUJBQXFCLElBQUksY0FBYyxLQUFLLGlCQUQ5QztBQUVBLFFBQU0sYUFBYSxHQUNqQixpQkFBaUIsS0FBSyxZQUF0QixJQUNDLGtCQUFrQixJQUFJLGtCQUZ6QjtBQUlBLFFBQU0saUJBQWlCLEdBQ3JCLE9BQUEsQ0FBQSxjQUFBLENBQWUsZ0JBQWYsS0FBb0MsYUFBYSxLQUFLLGdCQUR4RDtBQUVBLFFBQU0sWUFBWSxHQUFHLGlCQUFyQjtBQUVBLFFBQU0sU0FBUyxHQUFHLGFBQWEsSUFBSSxZQUFuQztBQUVBLFFBQU0sb0JBQW9CLEdBQUcsZ0JBQWdCLEtBQUssbUJBQWxEO0FBQ0EsUUFBTSxxQkFBcUIsR0FBRyxpQkFBaUIsS0FBSyxvQkFBcEQ7QUFFQSxRQUFJLGVBQWUsR0FBRyxZQUF0QjtBQUVBLFFBQU0sWUFBWSxHQUNoQixLQUFLLEtBQUwsQ0FBVyxJQUFYLEtBQW9CLFNBQVMsQ0FBQyxJQUE5QixJQUNBLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsTUFBaEIsS0FBMkIsU0FBUyxDQUFDLElBQVYsQ0FBZSxNQUY1QztBQUdBLFFBQU0saUJBQWlCLEdBQ3JCLE9BQUEsQ0FBQSxnQkFBQSxDQUFpQixpQkFBakIsS0FDQSxrQkFEQSxJQUVBLENBQUMsWUFISDs7QUFLQSxRQUFJLFlBQVksSUFBSyxnQkFBZ0IsSUFBSSxpQkFBekMsRUFBNkQ7QUFDM0QsV0FBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7O0FBRUQsUUFBSSxTQUFKLEVBQWU7QUFDYixVQUFJLGlCQUFKLEVBQXVCO0FBQ3JCLGFBQUssUUFBTCxHQUFnQixnQkFBaEI7QUFDRDs7QUFFRCxVQUFJLGlCQUFKLEVBQXVCO0FBQ3JCLFFBQUEsZUFBZSxHQUFHLGlCQUFsQjtBQUNEO0FBQ0Y7O0FBRUQsUUFBSSxpQkFBSixFQUF1QjtBQUNyQixXQUFLLFFBQUwsQ0FBYztBQUFDLFFBQUEsU0FBUyxFQUFFLENBQUM7QUFBYixPQUFkO0FBQ0Q7O0FBRUQsV0FDRSxZQUFZLElBQ1osYUFEQSxJQUVBLFFBQVEsS0FBSyxXQUZiLElBR0EsU0FIQSxJQUlBLG9CQUpBLElBS0EscUJBTkY7QUFRRCxHQS9FRDs7QUFpRkEsRUFBQSxVQUFBLENBQUEsU0FBQSxDQUFBLGtCQUFBLEdBQUEsVUFBbUIsU0FBbkIsRUFBeUMsU0FBekMsRUFBNkQ7QUFBN0QsUUFBQSxLQUFBLEdBQUEsSUFBQTs7QUFFRSxRQUFJLEtBQUssVUFBVCxFQUFxQjtBQUNuQixXQUFLLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxXQUFLLE1BQUw7QUFDRDs7QUFFTSxRQUFBLFlBQUEsR0FBQSxTQUFBLENBQUEsU0FBQTtBQUNILFFBQUEsRUFBQSxHQUFBLEtBQUEsS0FBQTtBQUFBLFFBQUMsWUFBQSxHQUFBLEVBQUEsQ0FBQSxTQUFEO0FBQUEsUUFBMEIsUUFBQSxHQUFBLEVBQUEsQ0FBQSxRQUExQjs7QUFFSixRQUFJLENBQUMsUUFBRCxJQUFhLFlBQVksS0FBSyxZQUFsQyxFQUFnRDtBQUM5QyxXQUFLLFFBQUwsQ0FBYztBQUFDLFFBQUEsU0FBUyxFQUFFLFlBQVo7QUFBMEIsUUFBQSxZQUFZLEVBQUE7QUFBdEMsT0FBZDtBQUNEOztBQUVLLFFBQUEsRUFBQSxHQUFBLEtBQUEsS0FBQTtBQUFBLFFBQUMsZUFBQSxHQUFBLEVBQUEsQ0FBQSxlQUFEO0FBQUEsUUFBa0IsVUFBQSxHQUFBLEVBQUEsQ0FBQSxVQUFsQjs7QUFDTixRQUFJLGVBQUosRUFBcUI7QUFDbkIsTUFBQSxxQkFBcUIsQ0FBQyxLQUFLLHdCQUFOLENBQXJCO0FBQ0EsV0FBSyxRQUFMLEdBQWdCLFVBQVUsQ0FDeEIsWUFBQTtBQUFNLGVBQUEscUJBQXFCLENBQUMsS0FBSSxDQUExQix3QkFBcUIsQ0FBckI7QUFBb0QsT0FEbEMsRUFFeEIsVUFBVSxHQUFHLElBQWIsR0FBb0IsRUFGSSxDQUExQjtBQUlEO0FBQ0YsR0F0QkQ7O0FBd0JBLEVBQUEsVUFBQSxDQUFBLFNBQUEsQ0FBQSxvQkFBQSxHQUFBLFlBQUE7QUFDRSxJQUFBLE1BQU0sQ0FBQyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLLGFBQTFDO0FBQ0EsSUFBQSxRQUFRLENBQUMsbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMEMsS0FBSyxVQUEvQztBQUNBLElBQUEsUUFBUSxDQUFDLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLEtBQUssY0FBN0M7QUFDQSxJQUFBLFlBQVksQ0FBQyxLQUFLLFFBQU4sQ0FBWjtBQUNBLElBQUEsWUFBWSxDQUFDLEtBQUssV0FBTixDQUFaO0FBQ0EsSUFBQSxZQUFZLENBQUMsS0FBSyxXQUFOLENBQVo7QUFDRCxHQVBEOztBQXFzQk8sRUFBQSxVQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsR0FBUCxZQUFBO0FBQ1EsUUFBQSxFQUFBLEdBQUEsS0FBQSxLQUFBO0FBQUEsUUFDSixVQUFBLEdBQUEsRUFBQSxDQUFBLFVBREk7QUFBQSxRQUVKLGtCQUFBLEdBQUEsRUFBQSxDQUFBLGtCQUZJO0FBQUEsUUFHSixTQUFBLEdBQUEsRUFBQSxDQUFBLFNBSEk7QUFBQSxRQUlKLFVBQUEsR0FBQSxFQUFBLENBQUEsVUFKSTtBQUFBLFFBS0osSUFBQSxHQUFBLEVBQUEsQ0FBQSxJQUxJO0FBQUEsUUFNSixpQkFBQSxHQUFBLEVBQUEsQ0FBQSxpQkFOSTtBQUFBLFFBT0osU0FBQSxHQUFBLEVBQUEsQ0FBQSxTQVBJO0FBQUEsUUFRSixlQUFBLEdBQUEsRUFBQSxDQUFBLGVBUkk7QUFBQSxRQVNKLFVBQUEsR0FBQSxFQUFBLENBQUEsVUFUSTtBQUFBLFFBVUosU0FBQSxHQUFBLEVBQUEsQ0FBQSxTQVZJO0FBQUEsUUFXSixTQUFBLEdBQUEsRUFBQSxDQUFBLFNBWEk7QUFBQSxRQVlKLFVBQUEsR0FBQSxFQUFBLENBQUEsVUFaSTtBQUFBLFFBYUosWUFBQSxHQUFBLEVBQUEsQ0FBQSxZQWJJO0FBQUEsUUFjSixZQUFBLEdBQUEsRUFBQSxDQUFBLFlBZEk7QUFBQSxRQWVKLFlBQUEsR0FBQSxFQUFBLENBQUEsWUFmSTtBQWlCQSxRQUFBLEVBQUEsR0FBQSxLQUFBLEtBQUE7QUFBQSxRQUNKLFNBQUEsR0FBQSxFQUFBLENBQUEsU0FESTtBQUFBLFFBRUosUUFBQSxHQUFBLEVBQUEsQ0FBQSxRQUZJO0FBQUEsUUFHSixnQkFBQSxHQUFBLEVBQUEsQ0FBQSxnQkFISTtBQUFBLFFBSUosaUJBQUEsR0FBQSxFQUFBLENBQUEsaUJBSkk7O0FBTUEsUUFBQSxFQUFBLEdBQUEsSUFBQTtBQUFBLFFBQUMsUUFBQSxHQUFBLEVBQUEsQ0FBQSxRQUFEO0FBQUEsUUFBVyxPQUFBLEdBQUEsRUFBQSxDQUFBLE9BQVg7O0FBRU4sUUFBSSxDQUFDLElBQUQsSUFBUyxDQUFDLElBQUksQ0FBQyxNQUFuQixFQUEyQixPQUFPLElBQVA7QUFFM0IsUUFBTSxhQUFhLEdBQUcsT0FBTyxHQUFHLEtBQUssZUFBTCxFQUFILEdBQTRCLElBQXpEOztBQUVBLFFBQU0sVUFBVSxHQUFBLFFBQUEsQ0FBQSxFQUFBLEVBQU8sZ0JBQUEsQ0FBQSxnQkFBUCxFQUE0QixTQUE1QixDQUFoQjs7QUFDQSxRQUFNLGFBQWEsR0FBQSxRQUFBLENBQUEsRUFBQSxFQUFPLGdCQUFBLENBQUEsbUJBQVAsRUFBK0IsWUFBL0IsQ0FBbkI7O0FBRUEsV0FDRSxPQUFBLENBQUEsT0FBQSxDQUFBLGFBQUEsQ0FBQSxLQUFBLEVBQUE7QUFBSyxNQUFBLFNBQVMsRUFBRSxTQUFoQjtBQUEyQixNQUFBLEtBQUssRUFBRSxVQUFsQztBQUE4QyxNQUFBLE9BQU8sRUFBRSxLQUFLO0FBQTVELEtBQUEsRUFDRyxTQUFTLElBQ1IsT0FBQSxDQUFBLE9BQUEsQ0FBQSxhQUFBLENBQUMsU0FBQSxDQUFBLFlBQUQsRUFBYTtBQUNYLE1BQUEsU0FBUyxFQUFFLFVBREE7QUFFWCxNQUFBLFVBQVUsRUFBRSxDQUFDLGFBQUQsSUFBa0IsQ0FBQyxnQkFGcEI7QUFHWCxNQUFBLFVBQVUsRUFBRSxVQUhEO0FBSVgsTUFBQSxPQUFPLEVBQUUsS0FBSyxnQkFKSDtBQUtYLE1BQUEsYUFBYSxFQUFFLGtCQUxKO0FBTVgsTUFBQSxZQUFZLEVBQUU7QUFOSCxLQUFiLEVBT0csU0FQSCxDQUZKLEVBYUUsT0FBQSxDQUFBLE9BQUEsQ0FBQSxhQUFBLENBQUEsS0FBQSxFQUFBO0FBQ0UsTUFBQSxTQUFTLEVBQUUsWUFEYjtBQUVFLE1BQUEsS0FBSyxFQUFFLGFBRlQ7QUFHRSxNQUFBLEdBQUcsRUFBRSxLQUFLLGFBSFo7QUFJRSxNQUFBLFdBQVcsRUFBRSxLQUFLLGVBSnBCO0FBS0UsTUFBQSxZQUFZLEVBQUUsS0FBSyxlQUxyQjtBQU1FLE1BQUEsVUFBVSxFQUFFLEtBQUssY0FObkI7QUFPRSxNQUFBLFdBQVcsRUFBRSxLQUFLLFVBUHBCO0FBUUUsTUFBQSxXQUFXLEVBQUUsS0FBSztBQVJwQixLQUFBLEVBU0UsT0FBQSxDQUFBLE9BQUEsQ0FBQSxhQUFBLENBQUMsU0FBQSxDQUFBLFlBQUQsRUFBYTtBQUNYLE1BQUEsSUFBSSxFQUFFLElBREs7QUFFWCxNQUFBLFNBQVMsRUFBRSxTQUZBO0FBR1gsTUFBQSxRQUFRLEVBQUUsUUFIQztBQUlYLE1BQUEsT0FBTyxFQUFFLE9BSkU7QUFLWCxNQUFBLFVBQVUsRUFBRSxPQUFPLEdBQUcsVUFBSCxHQUFnQixDQUx4QjtBQU1YLE1BQUEsUUFBUSxFQUFFLFFBTkM7QUFPWCxNQUFBLE1BQU0sRUFBRSxLQUFLLE1BUEY7QUFRWCxNQUFBLE9BQU8sRUFBRSxLQUFLLFdBUkg7QUFTWCxNQUFBLGlCQUFpQixFQUFFLGlCQVRSO0FBVVgsTUFBQSxTQUFTLEVBQUUsU0FWQTtBQVdYLE1BQUEsZUFBZSxFQUFFLGVBWE47QUFZWCxNQUFBLFlBQVksRUFBRTtBQVpILEtBQWIsQ0FURixDQWJGLEVBc0NHLFVBQVUsSUFDVCxPQUFBLENBQUEsT0FBQSxDQUFBLGFBQUEsQ0FBQyxTQUFBLENBQUEsWUFBRCxFQUFhO0FBQ1gsTUFBQSxTQUFTLEVBQUUsVUFEQTtBQUVYLE1BQUEsVUFBVSxFQUFFLENBQUMsYUFBRCxJQUFrQixDQUFDLGlCQUZwQjtBQUdYLE1BQUEsVUFBVSxFQUFFLFVBSEQ7QUFJWCxNQUFBLE9BQU8sRUFBRSxLQUFLLHFCQUpIO0FBS1gsTUFBQSxhQUFhLEVBQUUsa0JBTEo7QUFNWCxNQUFBLFlBQVksRUFBRTtBQU5ILEtBQWIsRUFPRyxVQVBILENBdkNKLENBREY7QUFvREQsR0FyRk07O0FBMTNCQSxFQUFBLFVBQUEsQ0FBQSxZQUFBLEdBQTBCLGdCQUFBLENBQUEsWUFBMUI7QUFnOUJULFNBQUEsVUFBQTtBQUFDLENBajlCRCxDQUFnQyxPQUFBLENBQUEsT0FBQSxDQUFNLFNBQXRDLENBQUE7O0FBQWEsT0FBQSxDQUFBLFVBQUEsR0FBQSxVQUFBO0FBbTlCYixPQUFBLENBQUEsT0FBQSxHQUFlLFVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgV2hlZWxFdmVudCB9ICBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIHRyYW5zbGF0ZUlzVmFsaWQsXG4gIG5vdFVuZGVmT3JOdWxsLFxuICBnZXRDbGllbnRSZWN0LFxuICB0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCxcbn0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge1xuICBkZWZhdWx0UHJvcHMsXG4gIGRlZmF1bHRNZW51U3R5bGUsXG4gIGRlZmF1bHRXcmFwcGVyU3R5bGUsXG59IGZyb20gJy4vZGVmYXV0U2V0dGluZ3MnO1xuaW1wb3J0IHsgTWVudVByb3BzLCBSZWYsIFJlZk9iamVjdCwgVm9pZCwgTWVudUl0ZW0sIE1lbnVJdGVtcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtBcnJvd1dyYXBwZXIsIElubmVyV3JhcHBlcn0gZnJvbSAnLi93cmFwcGVyJztcblxuaW50ZXJmYWNlIE1lbnVTdGF0ZSB7XG4gIGRyYWdnaW5nOiBib29sZWFuLFxuICB4UG9pbnQ6IG51bWJlcixcbiAgdHJhbnNsYXRlOiBudW1iZXIsXG4gIHN0YXJ0RHJhZ1RyYW5zbGF0ZTogbnVtYmVyLFxuICB4RHJhZ2dlZERpc3RhbmNlOiBudW1iZXIsXG4gIGxlZnRBcnJvd1Zpc2libGU6IGJvb2xlYW4sXG4gIHJpZ2h0QXJyb3dWaXNpYmxlOiBib29sZWFuLFxufTtcblxuZXhwb3J0IGNsYXNzIFNjcm9sbE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TWVudVByb3BzLCBNZW51U3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wczogTWVudVByb3BzID0gZGVmYXVsdFByb3BzO1xuXG4gIHByaXZhdGUgcmVmOiBSZWZPYmplY3Q7XG4gIHByaXZhdGUgbWVudVdyYXBwZXI6IFJlZjtcbiAgcHJpdmF0ZSBtb3VudGVkOiBib29sZWFuO1xuICBwcml2YXRlIG5lZWRVcGRhdGU6IGJvb2xlYW47XG4gIHByaXZhdGUgYWxsSXRlbXNXaWR0aDogbnVtYmVyO1xuICBwcml2YXRlIG1lbnVQb3M6IG51bWJlcjtcbiAgcHJpdmF0ZSBtZW51V2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSB3V2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBmaXJzdFBhZ2VPZmZzZXQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBsYXN0UGFnZU9mZnNldDogbnVtYmVyO1xuICBwcml2YXRlIGxhc3RUcmFuc2xhdGVVcGRhdGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBtZW51SXRlbXM6IE1lbnVJdGVtcztcbiAgcHJpdmF0ZSBzZWxlY3RlZDogc3RyaW5nO1xuXG4gIC8qKiB0aW1lcnMgZm9yIHNldFRpbWVvdXQgaWYgUkFGIG5vdCBzdXBwb3J0ZWQgKi9cbiAgcHJpdmF0ZSBvbkxvYWRUaW1lcjogYW55O1xuICBwcml2YXRlIHJhZlRpbWVyOiBhbnk7XG4gIHByaXZhdGUgcmVzaXplVGltZXI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTWVudVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucmVmID0ge307XG4gICAgdGhpcy5tZW51V3JhcHBlciA9IG51bGw7XG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5uZWVkVXBkYXRlID0gZmFsc2U7XG4gICAgdGhpcy5hbGxJdGVtc1dpZHRoID0gMDtcbiAgICB0aGlzLm1lbnVQb3MgPSAwO1xuICAgIHRoaXMubWVudVdpZHRoID0gMDtcbiAgICB0aGlzLndXaWR0aCA9IDA7XG4gICAgdGhpcy5maXJzdFBhZ2VPZmZzZXQgPSAwO1xuICAgIHRoaXMubGFzdFBhZ2VPZmZzZXQgPSAwO1xuICAgIHRoaXMubGFzdFRyYW5zbGF0ZVVwZGF0ZSA9IDA7XG4gICAgdGhpcy5tZW51SXRlbXMgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkID0gJyc7XG5cbiAgICB0aGlzLm9uTG9hZFRpbWVyID0gMDtcbiAgICB0aGlzLnJhZlRpbWVyID0gMDtcbiAgICB0aGlzLnJlc2l6ZVRpbWVyID0gMDtcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICB4UG9pbnQ6IDAsXG4gICAgdHJhbnNsYXRlOiB0aGlzLnByb3BzLnRyYW5zbGF0ZSxcbiAgICBzdGFydERyYWdUcmFuc2xhdGU6IDAsXG4gICAgeERyYWdnZWREaXN0YW5jZTogMCxcbiAgICBsZWZ0QXJyb3dWaXNpYmxlOiBmYWxzZSxcbiAgICByaWdodEFycm93VmlzaWJsZTogdHJ1ZSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpOiBWb2lkIHtcbiAgICB0aGlzLnNldEluaXRpYWwoKTtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbigpIHt9O1xuXG4gICAgY29uc3QgcGFzc2l2ZUV2ZW50cyA9IHRlc3RQYXNzaXZlRXZlbnRTdXBwb3J0KCk7XG4gICAgY29uc3Qgb3B0aW9uc0NhcHR1cmUgPSBwYXNzaXZlRXZlbnRzXG4gICAgICA/IHtwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiB0cnVlfVxuICAgICAgOiB0cnVlO1xuICAgIGNvbnN0IG9wdGlvbnNOb0NhcHR1cmUgPSBwYXNzaXZlRXZlbnRzXG4gICAgICA/IHtwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiBmYWxzZX1cbiAgICAgIDogZmFsc2U7XG5cbiAgICAvLyBUT0RPOiBzZXBhcmF0ZSBmdW5jdGlvbiBmb3IgcmVzaXplXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLm9uTG9hZCwgb3B0aW9uc05vQ2FwdHVyZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplSGFuZGxlciwgb3B0aW9uc05vQ2FwdHVyZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVEcmFnLCBvcHRpb25zQ2FwdHVyZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlRHJhZ1N0b3AsIG9wdGlvbnNDYXB0dXJlKTtcblxuICAgIC8vIGlmIHN0eWxlcyBsb2FkZWQgYmVmb3JlIGpzIGJ1bmRsZSBuZWVkIHdhaXQgZm9yIGl0XG4gICAgdGhpcy5vbkxvYWRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gKHRoaXMub25Mb2FkKCksIHRoaXMuZm9yY2VVcGRhdGUoKSksIDApO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wczogTWVudVByb3BzLCBuZXh0U3RhdGU6IE1lbnVTdGF0ZSk6IGJvb2xlYW4ge1xuICAgIC8vIFRPRE86IG5lZWQgcmVmYWN0b3IgYWxsIHRoaXMgb3IgcmVtb3ZlXG4gICAgLy8gaXQncyB0b28gY29tcGxpY2F0ZWQgYWxyZWFkeVxuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0ZSxcbiAgICAgIGRyYWdnaW5nLFxuICAgICAgbGVmdEFycm93VmlzaWJsZSxcbiAgICAgIHJpZ2h0QXJyb3dWaXNpYmxlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlTmV3LFxuICAgICAgZHJhZ2dpbmc6IGRyYWdnaW5nTmV3LFxuICAgICAgbGVmdEFycm93VmlzaWJsZTogbGVmdEFycm93VmlzaWJsZU5ldyxcbiAgICAgIHJpZ2h0QXJyb3dWaXNpYmxlOiByaWdodEFycm93VmlzaWJsZU5ldyxcbiAgICB9ID0gbmV4dFN0YXRlO1xuXG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNsYXRlOiB0cmFuc2xhdGVQcm9wcyxcbiAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZFByb3BzLFxuICAgICAgc2Nyb2xsVG9TZWxlY3RlZCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2xhdGU6IHRyYW5zbGF0ZVByb3BzTmV3LFxuICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkUHJvcHNOZXcsXG4gICAgfSA9IG5leHRQcm9wcztcblxuICAgIGNvbnN0IHRyYW5zbGF0ZVByb3BzTm90TnVsbCA9IG5vdFVuZGVmT3JOdWxsKHRyYW5zbGF0ZVByb3BzTmV3KTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZURpZmYgPSB0cmFuc2xhdGUgIT09IHRyYW5zbGF0ZU5ldztcbiAgICBjb25zdCB0cmFuc2xhdGVQcm9wc0RpZmYgPVxuICAgICAgdHJhbnNsYXRlUHJvcHNOb3ROdWxsICYmIHRyYW5zbGF0ZVByb3BzICE9PSB0cmFuc2xhdGVQcm9wc05ldztcbiAgICBjb25zdCB0cmFuc2xhdGVEaWZmID1cbiAgICAgIHRyYW5zbGF0ZVByb3BzTmV3ICE9PSB0cmFuc2xhdGVOZXcgfHxcbiAgICAgICh0cmFuc2xhdGVTdGF0ZURpZmYgfHwgdHJhbnNsYXRlUHJvcHNEaWZmKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkUHJvcHNEaWZmID1cbiAgICAgIG5vdFVuZGVmT3JOdWxsKHNlbGVjdGVkUHJvcHNOZXcpICYmIHNlbGVjdGVkUHJvcHMgIT09IHNlbGVjdGVkUHJvcHNOZXc7XG4gICAgY29uc3Qgc2VsZWN0ZWREaWZmID0gc2VsZWN0ZWRQcm9wc0RpZmY7XG5cbiAgICBjb25zdCBwcm9wc0RpZmYgPSB0cmFuc2xhdGVEaWZmIHx8IHNlbGVjdGVkRGlmZjtcblxuICAgIGNvbnN0IGxlZnRBcnJvd1Zpc2libGVEaWZmID0gbGVmdEFycm93VmlzaWJsZSAhPT0gbGVmdEFycm93VmlzaWJsZU5ldztcbiAgICBjb25zdCByaWdodEFycm93VmlzaWJsZURpZmYgPSByaWdodEFycm93VmlzaWJsZSAhPT0gcmlnaHRBcnJvd1Zpc2libGVOZXc7XG5cbiAgICBsZXQgdHJhbnNsYXRlUmVzdWx0ID0gdHJhbnNsYXRlTmV3O1xuXG4gICAgY29uc3QgbmV3TWVudUl0ZW1zID1cbiAgICAgIHRoaXMucHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEgfHxcbiAgICAgIHRoaXMucHJvcHMuZGF0YS5sZW5ndGggIT09IG5leHRQcm9wcy5kYXRhLmxlbmd0aDtcbiAgICBjb25zdCBuZXdUcmFuc2xhdGVQcm9wcyA9XG4gICAgICB0cmFuc2xhdGVJc1ZhbGlkKHRyYW5zbGF0ZVByb3BzTmV3KSAmJlxuICAgICAgdHJhbnNsYXRlUHJvcHNEaWZmICYmXG4gICAgICAhbmV3TWVudUl0ZW1zO1xuXG4gICAgaWYgKG5ld01lbnVJdGVtcyB8fCAoc2Nyb2xsVG9TZWxlY3RlZCAmJiBzZWxlY3RlZFByb3BzRGlmZikpIHtcbiAgICAgIHRoaXMubmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzRGlmZikge1xuICAgICAgaWYgKHNlbGVjdGVkUHJvcHNEaWZmKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZFByb3BzTmV3O1xuICAgICAgfVxuXG4gICAgICBpZiAobmV3VHJhbnNsYXRlUHJvcHMpIHtcbiAgICAgICAgdHJhbnNsYXRlUmVzdWx0ID0gdHJhbnNsYXRlUHJvcHNOZXc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld1RyYW5zbGF0ZVByb3BzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHt0cmFuc2xhdGU6ICt0cmFuc2xhdGVSZXN1bHR9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgbmV3TWVudUl0ZW1zIHx8XG4gICAgICB0cmFuc2xhdGVEaWZmIHx8XG4gICAgICBkcmFnZ2luZyAhPT0gZHJhZ2dpbmdOZXcgfHxcbiAgICAgIHByb3BzRGlmZiB8fFxuICAgICAgbGVmdEFycm93VmlzaWJsZURpZmYgfHxcbiAgICAgIHJpZ2h0QXJyb3dWaXNpYmxlRGlmZlxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBNZW51UHJvcHMsIHByZXZTdGF0ZTogTWVudVN0YXRlKTogVm9pZCB7XG4gICAgLy8gdXBkYXRlIGlmIGhhdmUgbmV3IG1lbnUgaXRlbXMgb3Igc2VsZWN0ZWQgdmFsdWVcbiAgICBpZiAodGhpcy5uZWVkVXBkYXRlKSB7XG4gICAgICB0aGlzLm5lZWRVcGRhdGUgPSBmYWxzZTtcbiAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgfVxuXG4gICAgY29uc3Qge3RyYW5zbGF0ZTogdHJhbnNsYXRlT2xkfSA9IHByZXZTdGF0ZTtcbiAgICBsZXQge3RyYW5zbGF0ZTogdHJhbnNsYXRlTmV3LCBkcmFnZ2luZ30gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFkcmFnZ2luZyAmJiB0cmFuc2xhdGVPbGQgIT09IHRyYW5zbGF0ZU5ldykge1xuICAgICAgdGhpcy5vblVwZGF0ZSh7dHJhbnNsYXRlOiB0cmFuc2xhdGVOZXcsIHRyYW5zbGF0ZU9sZH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHtoaWRlU2luZ2xlQXJyb3csIHRyYW5zaXRpb259ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaGlkZVNpbmdsZUFycm93KSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zZXRTaW5nbGVBcnJvd1Zpc2liaWxpdHkpO1xuICAgICAgdGhpcy5yYWZUaW1lciA9IHNldFRpbWVvdXQoXG4gICAgICAgICgpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnNldFNpbmdsZUFycm93VmlzaWJpbGl0eSksXG4gICAgICAgIHRyYW5zaXRpb24gKiAxMDAwICsgMTAsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IFZvaWQge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUhhbmRsZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlRHJhZyk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnJhZlRpbWVyKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5vbkxvYWRUaW1lcik7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZXIpO1xuICB9XG5cbiAgLyoqIHNldCByZWYgZm9yIE1lbnVJdGVtcyAqL1xuICBzZXRSZWYgPSAocmVmOiBSZWZPYmplY3QpOiBWb2lkID0+IHtcbiAgICBjb25zdCBbIGtleSwgdmFsdWUgXSA9IE9iamVjdC5lbnRyaWVzKHJlZilbMF07XG4gICAgdGhpcy5yZWZba2V5XSA9IHZhbHVlO1xuICB9O1xuXG4gIC8qKiBzZXQgcmVmIGZvciB3cmFwcGVyICovXG4gIHNldFdyYXBwZXJSZWYgPSAocmVmOiBSZWYpOiBWb2lkID0+IHtcbiAgICB0aGlzLm1lbnVXcmFwcGVyID0gcmVmO1xuICB9O1xuXG4gIC8qKiBjaGVjayBpZiBhcnJvd3MgdmlzaWJsZSAqL1xuICBjaGVja1NpbmdsZUFycm93VmlzaWJpbGl0eSA9ICh7dHJhbnNsYXRlID0gdGhpcy5zdGF0ZS50cmFuc2xhdGV9IDoge3RyYW5zbGF0ZT86IG51bWJlcn0pXG4gIDoge2xlZnRBcnJvd1Zpc2libGU6IGJvb2xlYW4sIHJpZ2h0QXJyb3dWaXNpYmxlOiBib29sZWFufSA9PiB7XG4gICAgY29uc3Qge2hpZGVTaW5nbGVBcnJvd30gPSB0aGlzLnByb3BzO1xuICAgIGxldCBbbGVmdEFycm93VmlzaWJsZSwgcmlnaHRBcnJvd1Zpc2libGVdID0gW3RydWUsIHRydWVdO1xuICAgIGNvbnN0IHttZW51SXRlbXM6IGl0ZW1zfSA9IHRoaXM7XG5cbiAgICBpZiAoaGlkZVNpbmdsZUFycm93ICYmIGl0ZW1zKSB7XG4gICAgICBjb25zdCB2aXNpYmxlSXRlbXMgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7b2Zmc2V0OiB0cmFuc2xhdGV9KTtcbiAgICAgIGNvbnN0IGZpcnN0SXRlbVZpc2libGUgPSB2aXNpYmxlSXRlbXMuaW5jbHVkZXMoaXRlbXNbMF0pO1xuICAgICAgY29uc3QgbGFzdEl0ZW1WaXNpYmxlID0gdmlzaWJsZUl0ZW1zLmluY2x1ZGVzKGl0ZW1zLnNsaWNlKC0xKVswXSk7XG4gICAgICBsZWZ0QXJyb3dWaXNpYmxlID0gIWZpcnN0SXRlbVZpc2libGU7XG4gICAgICByaWdodEFycm93VmlzaWJsZSA9ICFsYXN0SXRlbVZpc2libGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtsZWZ0QXJyb3dWaXNpYmxlLCByaWdodEFycm93VmlzaWJsZX07XG4gIH07XG5cbiAgLyoqIGNoZWNrIGFycm93cyB2aXNpYmxlIG9yIG5vdCBhbmQgc2V0U3RhdGUgKi9cbiAgc2V0U2luZ2xlQXJyb3dWaXNpYmlsaXR5ID0gKCk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHtsZWZ0QXJyb3dWaXNpYmxlLCByaWdodEFycm93VmlzaWJsZX0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIGxlZnRBcnJvd1Zpc2libGU6IGxlZnRBcnJvd1Zpc2libGVOZXcsXG4gICAgICByaWdodEFycm93VmlzaWJsZTogcmlnaHRBcnJvd1Zpc2libGVOZXcsXG4gICAgfSA9IHRoaXMuY2hlY2tTaW5nbGVBcnJvd1Zpc2liaWxpdHkoe30pO1xuICAgIGlmIChcbiAgICAgIGxlZnRBcnJvd1Zpc2libGUgIT09IGxlZnRBcnJvd1Zpc2libGVOZXcgfHxcbiAgICAgIHJpZ2h0QXJyb3dWaXNpYmxlICE9PSByaWdodEFycm93VmlzaWJsZU5ld1xuICAgICkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxlZnRBcnJvd1Zpc2libGU6IGxlZnRBcnJvd1Zpc2libGVOZXcsXG4gICAgICAgIHJpZ2h0QXJyb3dWaXNpYmxlOiByaWdodEFycm93VmlzaWJsZU5ldyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBvbkxvYWQgPSAoKTogVm9pZCA9PiB7XG4gICAgdGhpcy5zZXRJbml0aWFsKCk7XG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgfTtcblxuICByZXNpemVIYW5kbGVyID0gKCk6IFZvaWQgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVyKTtcbiAgICB0aGlzLnJlc2l6ZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlc2l6ZSgpLCAyNTApO1xuICB9O1xuXG4gIC8qKiBTZXQgdmFsdWVzIG9uIHJlc2l6ZSAqL1xuICByZXNpemUgPSAoKTogVm9pZCA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgd1dpZHRoLFxuICAgICAgbWVudVBvcyxcbiAgICAgIG1lbnVXaWR0aCxcbiAgICAgIGFsbEl0ZW1zV2lkdGgsXG4gICAgICBmaXJzdFBhZ2VPZmZzZXQsXG4gICAgICBsYXN0UGFnZU9mZnNldCxcbiAgICB9ID0gdGhpcy51cGRhdGVXaWR0aCh7fSk7XG4gICAgdGhpcy5tZW51UG9zID0gbWVudVBvcztcbiAgICB0aGlzLndXaWR0aCA9IHdXaWR0aDtcbiAgICB0aGlzLmFsbEl0ZW1zV2lkdGggPSBhbGxJdGVtc1dpZHRoO1xuICAgIHRoaXMubWVudVdpZHRoID0gbWVudVdpZHRoO1xuICAgIHRoaXMuZmlyc3RQYWdlT2Zmc2V0ID0gZmlyc3RQYWdlT2Zmc2V0O1xuICAgIHRoaXMubGFzdFBhZ2VPZmZzZXQgPSBsYXN0UGFnZU9mZnNldDtcbiAgfTtcblxuICAvKiogc2V0IGluaXRpYWwgdmFsdWVzIGFuZCBmb3IgdXBkYXRlcyAqL1xuICBzZXRJbml0aWFsID0gKCk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgZGF0YSxcbiAgICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlUHJvcHMsXG4gICAgICBzY3JvbGxUb1NlbGVjdGVkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlOiB0cmFuc2xhdGVTdGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IHRyYW5zbGF0ZVByb3AgPSB0cmFuc2xhdGVQcm9wcztcblxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IHRoaXMuZ2V0TWVudUl0ZW1zKGRhdGEubGVuZ3RoKTtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBkYXRhLmZpbmQoZWwgPT4gZWwua2V5ID09PSBzZWxlY3RlZCk7XG4gICAgdGhpcy5tZW51SXRlbXMgPSBtZW51SXRlbXM7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkSXRlbVxuICAgICAgPyBTdHJpbmcoc2VsZWN0ZWRJdGVtLmtleSB8fCAnJylcbiAgICAgIDogZGVmYXVsdFByb3BzLnNlbGVjdGVkO1xuXG4gICAgLy8gYWxpZ24gaXRlbSBvbiBpbml0aWFsIGxvYWRcbiAgICBjb25zdCB7XG4gICAgICB3V2lkdGgsXG4gICAgICBtZW51UG9zLFxuICAgICAgbWVudVdpZHRoLFxuICAgICAgYWxsSXRlbXNXaWR0aCxcbiAgICAgIGZpcnN0UGFnZU9mZnNldCxcbiAgICAgIGxhc3RQYWdlT2Zmc2V0LFxuICAgIH0gPSB0aGlzLnVwZGF0ZVdpZHRoKHt9KTtcbiAgICB0aGlzLm1lbnVQb3MgPSBtZW51UG9zO1xuICAgIHRoaXMud1dpZHRoID0gd1dpZHRoO1xuICAgIHRoaXMuYWxsSXRlbXNXaWR0aCA9IGFsbEl0ZW1zV2lkdGg7XG4gICAgdGhpcy5tZW51V2lkdGggPSBtZW51V2lkdGg7XG4gICAgdGhpcy5maXJzdFBhZ2VPZmZzZXQgPSBmaXJzdFBhZ2VPZmZzZXQ7XG4gICAgdGhpcy5sYXN0UGFnZU9mZnNldCA9IGxhc3RQYWdlT2Zmc2V0O1xuXG4gICAgY29uc3QgbmV3U3RhdGUgPSB7Li4udGhpcy5zdGF0ZX07XG5cbiAgICAvLyBzZXQgdHJhbnNsYXRlIG9uIGZpcnN0IGxvYWRcbiAgICBjb25zdCBmaXJzdE1vdW50QW5kRGVmYXVsdFRyYW5zbGF0ZSA9ICF0aGlzLm1vdW50ZWQgJiYgdHJhbnNsYXRlUHJvcCA9PT0gZGVmYXVsdFByb3BzLnRyYW5zbGF0ZTtcbiAgICBpZiAoZmlyc3RNb3VudEFuZERlZmF1bHRUcmFuc2xhdGUgfHwgIXRyYW5zbGF0ZUlzVmFsaWQodHJhbnNsYXRlUHJvcCkgJiYgIXRyYW5zbGF0ZUlzVmFsaWQodHJhbnNsYXRlU3RhdGUpKSB7XG4gICAgICBuZXdTdGF0ZS50cmFuc2xhdGUgPSB0aGlzLmZpcnN0UGFnZU9mZnNldDtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBhcnJvd3NcbiAgICBjb25zdCB7XG4gICAgICBsZWZ0QXJyb3dWaXNpYmxlLFxuICAgICAgcmlnaHRBcnJvd1Zpc2libGUsXG4gICAgfSA9IHRoaXMuY2hlY2tTaW5nbGVBcnJvd1Zpc2liaWxpdHkoe3RyYW5zbGF0ZTogdHJhbnNsYXRlUHJvcH0pO1xuICAgIG5ld1N0YXRlLmxlZnRBcnJvd1Zpc2libGUgPSBsZWZ0QXJyb3dWaXNpYmxlO1xuICAgIG5ld1N0YXRlLnJpZ2h0QXJyb3dWaXNpYmxlID0gcmlnaHRBcnJvd1Zpc2libGU7XG5cbiAgICAvLyBzY3JvbGxUb1NlbGVjdGVkXG4gICAgaWYgKHNjcm9sbFRvU2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IG5lZWRTY3JvbGwgPSB0aGlzLmlzU2Nyb2xsTmVlZGVkKHtcbiAgICAgICAgaXRlbUlkOiBzZWxlY3RlZCxcbiAgICAgICAgdHJhbnNsYXRlOiBuZXdTdGF0ZS50cmFuc2xhdGUsXG4gICAgICB9KTtcbiAgICAgIGlmIChuZWVkU2Nyb2xsKSB7XG4gICAgICAgIG5ld1N0YXRlLnRyYW5zbGF0ZSA9IHRoaXMuZ2V0T2Zmc2V0VG9JdGVtQnlLZXkoc2VsZWN0ZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoey4uLm5ld1N0YXRlfSk7XG4gIH07XG5cbiAgLyoqIGNoZWNrIGlmIHNlbGVjdGVkIGl0ZW0gdmlzaWJsZSBvbiBzY3JlZW4gb3IgbmVlZCBzY3JvbGwgdG8gaXQgKi9cbiAgaXNTY3JvbGxOZWVkZWQgPSAoe2l0ZW1JZCwgdHJhbnNsYXRlID0gdGhpcy5zdGF0ZS50cmFuc2xhdGV9XG4gICAgOiB7XG4gICAgICBpdGVtSWQ6IHN0cmluZyxcbiAgICAgIHRyYW5zbGF0ZT86IG51bWJlclxuICAgIH0pOiBib29sZWFuID0+IHtcbiAgICBjb25zdCB7bWVudUl0ZW1zfSA9IHRoaXM7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0SXRlbUJ5S2V5KGl0ZW1JZCk7XG5cbiAgICBjb25zdCB2aXNpYmxlSXRlbXMgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7XG4gICAgICBvZmZzZXQ6IHRyYW5zbGF0ZSxcbiAgICB9KTtcbiAgICByZXR1cm4gIXZpc2libGVJdGVtcy5pbmNsdWRlcyhpdGVtKTtcbiAgfTtcblxuICAvKiogZXh0ZXJuYWwgYXBpLCBzY3JvbGwgdG8gaXRlbSBieSBpdCBrZXkgKi9cbiAgc2Nyb2xsVG8gPSAoaXRlbUtleTogc3RyaW5nKTogVm9pZCA9PiB7XG4gICAgY29uc3Qge3RyYW5zbGF0ZX0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IG5ld1RyYW5zbGF0ZSA9IHRoaXMuZ2V0T2Zmc2V0VG9JdGVtQnlLZXkoaXRlbUtleSk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGl0ZW1LZXk7XG4gICAgaWYgKHRyYW5zbGF0ZSA9PT0gbmV3VHJhbnNsYXRlKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLnNldFN0YXRlKHt0cmFuc2xhdGU6IG5ld1RyYW5zbGF0ZX0pO1xuICB9O1xuXG4gIC8qKiBnZXQgTWVudUl0ZW1zIGZyb20gcmVmcyAqL1xuICBnZXRNZW51SXRlbXMgPSAoZGF0YUxlbmd0aDogbnVtYmVyKTogTWVudUl0ZW1zID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5yZWYpXG4gICAgICAuZmlsdGVyKGVsID0+IGVsWzBdLmluY2x1ZGVzKCdtZW51aXRlbScpKVxuICAgICAgLnNsaWNlKDAsIGRhdGFMZW5ndGgpXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICB9O1xuXG4gIC8qKiBnZXQgd2lkdGggb2YgYWxsIG1lbnUgaXRlbXMgKi9cbiAgZ2V0SXRlbXNXaWR0aCA9ICh7aXRlbXMgPSB0aGlzLm1lbnVJdGVtc30gOiB7aXRlbXM/OiBNZW51SXRlbXN9KTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gaXRlbXNcbiAgICAgIC5tYXAoZWwgPT4gZWxbMV0uZWxlbSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgIC5yZWR1Y2UoKGFjYywgZWwpID0+IChhY2MgKz0gZ2V0Q2xpZW50UmVjdChlbCkud2lkdGgpLCAwKTtcbiAgfTtcblxuICAvKiogZ2V0IHdpZHRoIG9mIGl0ZW1zLCB3aW5kb3cgYW5kIHBvcyBvZiBtZW51ICovXG4gIGdldFdpZHRoID0gKHtpdGVtc30gOiB7aXRlbXM6IE1lbnVJdGVtc30pIDoge3dXaWR0aDogbnVtYmVyLCBtZW51UG9zOiBudW1iZXIsIG1lbnVXaWR0aDogbnVtYmVyLCBhbGxJdGVtc1dpZHRoOiBudW1iZXJ9ID0+IHtcbiAgICBjb25zdCB3V2lkdGggPSB3aW5kb3cgJiYgd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3Qge3g6IG1lbnVQb3MsIHdpZHRoOiBtZW51V2lkdGh9ID0gZ2V0Q2xpZW50UmVjdCh0aGlzLm1lbnVXcmFwcGVyKTtcbiAgICBjb25zdCBhbGxJdGVtc1dpZHRoID0gdGhpcy5nZXRJdGVtc1dpZHRoKHtpdGVtc30pO1xuICAgIHJldHVybiB7d1dpZHRoLCBtZW51UG9zLCBtZW51V2lkdGgsIGFsbEl0ZW1zV2lkdGh9O1xuICB9O1xuXG4gIC8qKiB2YWx1ZXMgZnJvbSAyIGZ1bmN0aW9ucyBhYm92ZSAqL1xuICB1cGRhdGVXaWR0aCA9ICh7aXRlbXMgPSB0aGlzLm1lbnVJdGVtcywgLi4uYXJnc30pIDoge1xuICAgIHdXaWR0aDogbnVtYmVyLFxuICAgIG1lbnVQb3M6IG51bWJlcixcbiAgICBtZW51V2lkdGg6IG51bWJlcixcbiAgICBhbGxJdGVtc1dpZHRoOiBudW1iZXIsXG4gICAgZmlyc3RQYWdlT2Zmc2V0OiBudW1iZXIsXG4gICAgbGFzdFBhZ2VPZmZzZXQ6IG51bWJlcixcbiAgfSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKHtpdGVtc30pO1xuICAgIHJldHVybiB7XG4gICAgICAuLi53aWR0aCxcbiAgICAgIC4uLnRoaXMuZ2V0UGFnZXNPZmZzZXRzKHtpdGVtcywgLi4ud2lkdGgsIC4uLmFyZ3N9KSxcbiAgICB9O1xuICB9O1xuXG4gIC8qKiBnZXQgb2Zmc2V0cyB0byBmaXJzdCBhbmQgbGFzdCBpdGVtICovXG4gIGdldFBhZ2VzT2Zmc2V0cyA9ICh7XG4gICAgaXRlbXMgPSB0aGlzLm1lbnVJdGVtcyxcbiAgICBhbGxJdGVtc1dpZHRoID0gdGhpcy5hbGxJdGVtc1dpZHRoLFxuICAgIHdXaWR0aCA9IHRoaXMud1dpZHRoLFxuICAgIG1lbnVQb3MgPSB0aGlzLm1lbnVQb3MsXG4gICAgbWVudVdpZHRoID0gdGhpcy5tZW51V2lkdGgsXG4gICAgb2Zmc2V0ID0gdGhpcy5zdGF0ZS50cmFuc2xhdGUsXG4gIH0pIDoge1xuICAgIGZpcnN0UGFnZU9mZnNldDogbnVtYmVyLFxuICAgIGxhc3RQYWdlT2Zmc2V0OiBudW1iZXIsXG4gIH0gPT4ge1xuICAgIGNvbnN0IHZpc2libGVJdGVtc1N0YXJ0ID0gdGhpcy5nZXRWaXNpYmxlSXRlbXMoe1xuICAgICAgb2Zmc2V0LFxuICAgICAgaXRlbXMsXG4gICAgICB3V2lkdGgsXG4gICAgICBtZW51UG9zLFxuICAgICAgbWVudVdpZHRoLFxuICAgIH0pO1xuICAgIGNvbnN0IGZpcnN0UGFnZU9mZnNldCA9IHRoaXMuZ2V0Q2VudGVyT2Zmc2V0KHtcbiAgICAgIGl0ZW1zOiB2aXNpYmxlSXRlbXNTdGFydCxcbiAgICAgIG1lbnVXaWR0aCxcbiAgICB9KTtcbiAgICBjb25zdCB2aXNpYmxlSXRlbXNFbmQgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7XG4gICAgICBpdGVtcyxcbiAgICAgIG9mZnNldDogLWFsbEl0ZW1zV2lkdGggKyBtZW51V2lkdGgsXG4gICAgICB3V2lkdGgsXG4gICAgICBtZW51UG9zLFxuICAgICAgbWVudVdpZHRoLFxuICAgIH0pO1xuICAgIGNvbnN0IGxhc3RQYWdlT2Zmc2V0ID0gdGhpcy5nZXRDZW50ZXJPZmZzZXQoe1xuICAgICAgaXRlbXM6IHZpc2libGVJdGVtc0VuZCxcbiAgICAgIG1lbnVXaWR0aCxcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBmaXJzdFBhZ2VPZmZzZXQsXG4gICAgICBsYXN0UGFnZU9mZnNldCxcbiAgICB9O1xuICB9O1xuXG4gIC8qKiBpdGVtIGNsaWNrIGhhbmRsZXIgKi9cbiAgb25JdGVtQ2xpY2sgPSAoaWQ6IHN0cmluZyk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHtjbGlja1doZW5EcmFnLCBvblNlbGVjdH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHt4RHJhZ2dlZERpc3RhbmNlfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBhZnRlclNjcm9sbCA9IHhEcmFnZ2VkRGlzdGFuY2UgPiA1O1xuXG4gICAgaWYgKGFmdGVyU2Nyb2xsICYmICFjbGlja1doZW5EcmFnKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLnNlbGVjdGVkID0gaWQ7XG4gICAgaWYgKG9uU2VsZWN0KSBvblNlbGVjdChpZCk7XG4gIH07XG5cbiAgLyoqIGdldCBpdGVtIHZpc2libGUgd2l0aCBjdXJyZW50L3Byb3ZpZGVkIHRyYW5zbGF0ZSAqL1xuICBnZXRWaXNpYmxlSXRlbXMgPSAoe1xuICAgIGl0ZW1zID0gdGhpcy5tZW51SXRlbXMsXG4gICAgd1dpZHRoID0gdGhpcy53V2lkdGgsXG4gICAgbWVudVBvcyA9IHRoaXMubWVudVBvcyxcbiAgICBtZW51V2lkdGggPSB0aGlzLm1lbnVXaWR0aCxcbiAgICBvZmZzZXQgPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZSxcbiAgICB0cmFuc2xhdGUgPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZSB8fCBkZWZhdWx0UHJvcHMudHJhbnNsYXRlLFxuICB9KTogTWVudUl0ZW1zID0+IHtcbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGVsID0+IHtcbiAgICAgIGNvbnN0IHt3aWR0aDogZWxXaWR0aH0gPSBnZXRDbGllbnRSZWN0KGVsWzFdLmVsZW0pO1xuICAgICAgY29uc3QgaWQgPSB0aGlzLmdldEl0ZW1JbmQoaXRlbXMsIGVsKTtcbiAgICAgIGNvbnN0IHggPSB0aGlzLmdldE9mZnNldFRvSXRlbUJ5SW5kZXgoe1xuICAgICAgICBpbmRleDogaWQsXG4gICAgICAgIG1lbnVJdGVtczogaXRlbXMsXG4gICAgICAgIHRyYW5zbGF0ZSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5lbGVtVmlzaWJsZSh7eCwgZWxXaWR0aCwgd1dpZHRoLCBtZW51UG9zLCBtZW51V2lkdGgsIG9mZnNldH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKiBjaGVjayBpZiBzaW5nbGUgbWVudSBpdGVtIHZpc2libGUgYnkgaXQncyBwb3NpdGlvbiBhbmQgd2lkdGgqL1xuICBlbGVtVmlzaWJsZSA9ICh7XG4gICAgeCxcbiAgICBvZmZzZXQgPSAwLFxuICAgIGVsV2lkdGgsXG4gICAgd1dpZHRoID0gdGhpcy53V2lkdGgsXG4gICAgbWVudVBvcyA9IHRoaXMubWVudVBvcyxcbiAgICBtZW51V2lkdGggPSB0aGlzLm1lbnVXaWR0aCxcbiAgfSk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGxlZnRFZGdlID0gbWVudVBvcyAtIDE7XG4gICAgY29uc3QgcmlnaHRFZGdlID0gd1dpZHRoIC0gKHdXaWR0aCAtIChtZW51UG9zICsgbWVudVdpZHRoKSkgKyAxO1xuICAgIGNvbnN0IHBvcyA9IHggKyBvZmZzZXQ7XG4gICAgY29uc3QgcG9zV2l0aFdpZHRoID0gcG9zICsgZWxXaWR0aDtcbiAgICByZXR1cm4gcG9zID49IGxlZnRFZGdlICYmIHBvc1dpdGhXaWR0aCA8PSByaWdodEVkZ2U7XG4gIH07XG5cbiAgLyoqIGdldCBpbmRleCBvZiBpdGVtICovXG4gIGdldEl0ZW1JbmQgPSAobWVudUl0ZW1zOiBNZW51SXRlbXMgPSB0aGlzLm1lbnVJdGVtcywgaXRlbTogTWVudUl0ZW0pOiBudW1iZXIgPT4ge1xuICAgIGlmICghbWVudUl0ZW1zIHx8ICFpdGVtKSByZXR1cm4gMDtcbiAgICByZXR1cm4gbWVudUl0ZW1zLmZpbmRJbmRleChlbCA9PiBlbFswXSA9PT0gaXRlbVswXSk7XG4gIH07XG5cbiAgLyoqIGdldCBuZXh0IGl0ZW0gaW4gZGF0YSAqL1xuICBnZXROZXh0SXRlbUluZCA9IChsZWZ0OiBib29sZWFuLCB2aXNpYmxlSXRlbXM6IE1lbnVJdGVtcyk6IG51bWJlciA9PiB7XG4gICAgY29uc3Qge21lbnVJdGVtc30gPSB0aGlzO1xuICAgIGlmIChsZWZ0KSB7XG4gICAgICBpZiAoIXZpc2libGVJdGVtcy5sZW5ndGgpIHJldHVybiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXZpc2libGVJdGVtcy5sZW5ndGgpIHJldHVybiBtZW51SXRlbXMubGVuZ3RoO1xuICAgIH1cbiAgICBjb25zdCBpbmQgPSBsZWZ0XG4gICAgICA/IHRoaXMuZ2V0SXRlbUluZChtZW51SXRlbXMsIHZpc2libGVJdGVtc1swXSkgLSAxXG4gICAgICA6IHRoaXMuZ2V0SXRlbUluZChtZW51SXRlbXMsIHZpc2libGVJdGVtcy5zbGljZSgtMSlbMF0pICsgMTtcbiAgICByZXR1cm4gaW5kIDwgMCA/IDAgOiBpbmQ7XG4gIH07XG5cbiAgLyoqIGdldCBvZmZzZXQgZnJvbSBzdGFydCB0byBpdGVtIGJ5IGl0J3Mga2V5ICovXG4gIGdldE9mZnNldFRvSXRlbUJ5S2V5ID0gKGtleTogc3RyaW5nKTogbnVtYmVyID0+IHtcbiAgICBsZXQge3RyYW5zbGF0ZX0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFrZXkpIHJldHVybiB0cmFuc2xhdGU7XG5cbiAgICBjb25zdCBpdGVtSW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleEJ5S2V5KGtleSk7XG4gICAgaWYgKGl0ZW1JbmRleCA9PT0gLTEpIHJldHVybiB0cmFuc2xhdGU7XG5cbiAgICBjb25zdCB7bWVudVBvc30gPSB0aGlzO1xuICAgIGNvbnN0IHthbGlnbkNlbnRlcn0gPSB0aGlzLnByb3BzO1xuXG4gICAgdHJhbnNsYXRlID0gdGhpcy5nZXRPZmZzZXRUb0l0ZW1CeUluZGV4KHtpbmRleDogaXRlbUluZGV4fSk7XG5cbiAgICBjb25zdCB2aXNpYmxlSXRlbXNXaXRoTmV3VHJhbnNsYXRlID0gdGhpcy5nZXRWaXNpYmxlSXRlbXMoe1xuICAgICAgb2Zmc2V0OiAtdHJhbnNsYXRlLFxuICAgIH0pO1xuICAgIGNvbnN0IG9mZnNldCA9IGFsaWduQ2VudGVyXG4gICAgICA/IHRoaXMuZ2V0Q2VudGVyT2Zmc2V0KHtpdGVtczogdmlzaWJsZUl0ZW1zV2l0aE5ld1RyYW5zbGF0ZX0pXG4gICAgICA6IGRlZmF1bHRQcm9wcy50cmFuc2xhdGU7XG5cbiAgICB0cmFuc2xhdGUgPSAtKHRyYW5zbGF0ZSAtIG1lbnVQb3MgLSBvZmZzZXQpO1xuXG4gICAgaWYgKHRoaXMuaXRCZWZvcmVTdGFydCh0cmFuc2xhdGUpKSB7XG4gICAgICB0cmFuc2xhdGUgPSB0aGlzLmdldE9mZnNldEF0U3RhcnQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXRBZnRlckVuZCh0cmFuc2xhdGUpKSB7XG4gICAgICB0cmFuc2xhdGUgPSB0aGlzLmdldE9mZnNldEF0RW5kKCk7XG4gICAgfVxuICAgIHJldHVybiB0cmFuc2xhdGU7XG4gIH07XG5cbiAgLyoqIGdldCBpdGVtIGZyb20ga2V5ICovXG4gIGdldEl0ZW1CeUtleSA9IChrZXk6IHN0cmluZyk6IE1lbnVJdGVtID0+IHtcbiAgICByZXR1cm4gdGhpcy5tZW51SXRlbXNcbiAgICAgIC5maW5kKGVsID0+IGVsWzFdLmtleSA9PT0ga2V5KSB8fCBbJ251bGwnLCB7a2V5OiAnbicsIGVsZW06IG51bGx9XTtcbiAgfTtcblxuICAvKiogZ2V0IGluZGV4IG9mIGl0ZW0gZnJvbSBpdCdzIGtleSAqL1xuICBnZXRJdGVtSW5kZXhCeUtleSA9IChpdGVtS2V5OiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuICAgIGlmICghaXRlbUtleSkgcmV0dXJuIC0xO1xuICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGEuZmluZEluZGV4KGVsID0+IGVsLmtleSA9PT0gaXRlbUtleSk7XG4gIH07XG5cbiAgLyoqIG9mZnNldCBmcm9tIHN0YXJ0IHRvIGl0ZW0gKi9cbiAgZ2V0T2Zmc2V0VG9JdGVtQnlJbmRleCA9ICh7XG4gICAgaW5kZXgsXG4gICAgbWVudUl0ZW1zID0gdGhpcy5tZW51SXRlbXMsXG4gICAgdHJhbnNsYXRlID0gdGhpcy5zdGF0ZS50cmFuc2xhdGUsXG4gIH0pOiBudW1iZXIgPT4ge1xuICAgIGlmICghbWVudUl0ZW1zLmxlbmd0aCkgcmV0dXJuIDA7XG4gICAgY29uc3QgaW5kID0gaW5kZXggPj0gbWVudUl0ZW1zLmxlbmd0aCA/IG1lbnVJdGVtcy5sZW5ndGggLSAxIDogaW5kZXg7XG4gICAgY29uc3Qge3h9ID0gZ2V0Q2xpZW50UmVjdChtZW51SXRlbXNbaW5kXVsxXS5lbGVtKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9ICt4IC0gdHJhbnNsYXRlO1xuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfTtcblxuICAvKiogZ2V0IG5ldyBvZmZzZXQgdmFsdWUgd2hlbiBzY3JvbGwgcmlnaHQgKi9cbiAgLy8gVE9ETzogbWF5YmUgcmVmYWN0b3IgaXRcbiAgZ2V0U2Nyb2xsUmlnaHRPZmZzZXQgPSAodmlzaWJsZUl0ZW1zOiBNZW51SXRlbXMsIGl0ZW1zOiBNZW51SXRlbXMpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHthbGlnbkNlbnRlcn0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHttZW51UG9zLCBsYXN0UGFnZU9mZnNldH0gPSB0aGlzO1xuXG4gICAgY29uc3QgbmV4dEl0ZW0gPSB0aGlzLmdldE5leHRJdGVtKFxuICAgICAgdmlzaWJsZUl0ZW1zICYmIHZpc2libGVJdGVtcy5zbGljZSgtMSlbMF1cbiAgICAgICAgPyB2aXNpYmxlSXRlbXMuc2xpY2UoLTEpWzBdWzBdXG4gICAgICAgIDogaXRlbXMuc2xpY2UoLTEpWzBdWzBdLFxuICAgICk7XG4gICAgY29uc3QgbmV4dEl0ZW1JbmRleCA9IGl0ZW1zLmZpbmRJbmRleChlbCA9PiBlbFswXSA9PT0gbmV4dEl0ZW1bMF0pO1xuXG4gICAgY29uc3Qgb2Zmc2V0VG9JdGVtID0gdGhpcy5nZXRPZmZzZXRUb0l0ZW1CeUluZGV4KHtcbiAgICAgIGluZGV4OiBuZXh0SXRlbUluZGV4LFxuICAgICAgbWVudUl0ZW1zOiBpdGVtcyxcbiAgICB9KTtcbiAgICBjb25zdCBvZmZzZXRUb0l0ZW1PblN0YXJ0ID0gb2Zmc2V0VG9JdGVtIC0gbWVudVBvcztcblxuICAgIGNvbnN0IG5leHRWaXNpYmxlSXRlbXMgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7XG4gICAgICBpdGVtcyxcbiAgICAgIG9mZnNldDogLW9mZnNldFRvSXRlbU9uU3RhcnQsXG4gICAgfSk7XG5cbiAgICBpZiAobmV4dFZpc2libGVJdGVtcy5pbmNsdWRlcyhpdGVtcy5zbGljZSgtMSlbMF0pKSB7XG4gICAgICByZXR1cm4gYWxpZ25DZW50ZXJcbiAgICAgICAgPyBvZmZzZXRUb0l0ZW1PblN0YXJ0ICsgbGFzdFBhZ2VPZmZzZXRcbiAgICAgICAgOiBvZmZzZXRUb0l0ZW1PblN0YXJ0O1xuICAgIH1cblxuICAgIGNvbnN0IGNlbnRlck9mZnNldCA9ICgpID0+IHRoaXMuZ2V0Q2VudGVyT2Zmc2V0KHtpdGVtczogbmV4dFZpc2libGVJdGVtc30pO1xuXG4gICAgY29uc3QgbmV3T2Zmc2V0ID0gYWxpZ25DZW50ZXJcbiAgICAgID8gb2Zmc2V0VG9JdGVtT25TdGFydCAtIGNlbnRlck9mZnNldCgpXG4gICAgICA6IG9mZnNldFRvSXRlbU9uU3RhcnQ7XG4gICAgcmV0dXJuIG5ld09mZnNldDtcbiAgfTtcblxuICAvKiogZ2V0IG5ldyBvZmZzZXQgdmFsdWUgd2hlbiBzY3JvbGwgbGVmdCAqL1xuICBnZXRTY3JvbGxMZWZ0T2Zmc2V0ID0gKHZpc2libGVJdGVtczogTWVudUl0ZW1zLCBpdGVtczogTWVudUl0ZW1zKTogbnVtYmVyID0+IHtcbiAgICBjb25zdCB7YWxpZ25DZW50ZXJ9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7bWVudVBvcywgbWVudVdpZHRoLCBmaXJzdFBhZ2VPZmZzZXR9ID0gdGhpcztcblxuICAgIGNvbnN0IHByZXZJdGVtID0gdGhpcy5nZXRQcmV2SXRlbShcbiAgICAgIHZpc2libGVJdGVtcyAmJiB2aXNpYmxlSXRlbXNbMF0gPyB2aXNpYmxlSXRlbXNbMF1bMF0gOiBpdGVtc1swXVswXSxcbiAgICApO1xuICAgIGNvbnN0IHByZXZJdGVtSW5kZXggPSBpdGVtcy5maW5kSW5kZXgoZWwgPT4gZWxbMF0gPT09IHByZXZJdGVtWzBdKTtcblxuICAgIGNvbnN0IG9mZnNldFRvSXRlbSA9IHRoaXMuZ2V0T2Zmc2V0VG9JdGVtQnlJbmRleCh7XG4gICAgICBpbmRleDogcHJldkl0ZW1JbmRleCxcbiAgICAgIG1lbnVJdGVtczogaXRlbXMsXG4gICAgfSk7XG4gICAgY29uc3QgaXRlbVdpZHRoID0gdGhpcy5nZXRJdGVtc1dpZHRoKHtpdGVtczogW3ByZXZJdGVtXX0pO1xuICAgIGNvbnN0IG9mZnNldFRvSXRlbU9uRW5kID0gb2Zmc2V0VG9JdGVtIC0gbWVudVBvcyAtIChtZW51V2lkdGggLSBpdGVtV2lkdGgpO1xuXG4gICAgY29uc3QgbmV4dFZpc2libGVJdGVtcyA9IHRoaXMuZ2V0VmlzaWJsZUl0ZW1zKHtcbiAgICAgIGl0ZW1zLFxuICAgICAgb2Zmc2V0OiAtb2Zmc2V0VG9JdGVtT25FbmQsXG4gICAgfSk7XG5cbiAgICBpZiAobmV4dFZpc2libGVJdGVtcy5pbmNsdWRlcyhpdGVtc1swXSkpIHtcbiAgICAgIHJldHVybiBhbGlnbkNlbnRlciA/IC1maXJzdFBhZ2VPZmZzZXQgOiAwO1xuICAgIH1cblxuICAgIGNvbnN0IGNlbnRlck9mZnNldCA9ICgpID0+IHRoaXMuZ2V0Q2VudGVyT2Zmc2V0KHtpdGVtczogbmV4dFZpc2libGVJdGVtc30pO1xuXG4gICAgY29uc3QgbmV3T2Zmc2V0ID0gYWxpZ25DZW50ZXJcbiAgICAgID8gb2Zmc2V0VG9JdGVtT25FbmQgKyBjZW50ZXJPZmZzZXQoKVxuICAgICAgOiBvZmZzZXRUb0l0ZW1PbkVuZDtcbiAgICByZXR1cm4gbmV3T2Zmc2V0O1xuICB9O1xuXG4gIC8qKiBnZXQgbmV4dCBpdGVtIGJ5IGtleSAqL1xuICBnZXROZXh0SXRlbSA9IChrZXk6IHN0cmluZyk6IE1lbnVJdGVtID0+IHtcbiAgICBjb25zdCB7bWVudUl0ZW1zfSA9IHRoaXM7XG4gICAgY29uc3QgaXRlbUluZGV4ID0gbWVudUl0ZW1zLmZpbmRJbmRleChlbCA9PiBlbFswXSA9PT0ga2V5KTtcbiAgICBjb25zdCBuZXh0SXRlbUluZGV4ID0gaXRlbUluZGV4ICsgMTtcbiAgICBjb25zdCBuZXh0SXRlbSA9IG1lbnVJdGVtc1tuZXh0SXRlbUluZGV4XSB8fCBtZW51SXRlbXMuc2xpY2UoLTEpWzBdO1xuICAgIHJldHVybiBuZXh0SXRlbTtcbiAgfTtcblxuICAvKiogZ2V0IHBycmV2IGl0ZW0gYnkga2V5ICovXG4gIGdldFByZXZJdGVtID0gKGtleTogc3RyaW5nKTogTWVudUl0ZW0gPT4ge1xuICAgIGNvbnN0IHttZW51SXRlbXN9ID0gdGhpcztcbiAgICBjb25zdCBpdGVtSW5kZXggPSBtZW51SXRlbXMuZmluZEluZGV4KGVsID0+IGVsWzBdID09PSBrZXkpO1xuICAgIGNvbnN0IHByZXZJdGVtSW5kZXggPSBpdGVtSW5kZXggLSAxO1xuICAgIGNvbnN0IHByZXZJdGVtID0gbWVudUl0ZW1zW3ByZXZJdGVtSW5kZXhdIHx8IG1lbnVJdGVtc1swXTtcbiAgICByZXR1cm4gcHJldkl0ZW07XG4gIH07XG5cbiAgLyoqIGdldCBuZXcgb2Zmc2V0IHZhbHVlIHdoZW4gc2Nyb2xsIGxlZnQvcmlnaHQgKi9cbiAgZ2V0T2Zmc2V0ID0gKGxlZnQ6IGJvb2xlYW4pOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHttZW51SXRlbXM6IGl0ZW1zfSA9IHRoaXM7XG4gICAgY29uc3QgdmlzaWJsZUl0ZW1zID0gdGhpcy5nZXRWaXNpYmxlSXRlbXMoe2l0ZW1zfSk7XG4gICAgY29uc3QgbmV3T2Zmc2V0ID0gbGVmdFxuICAgICAgPyB0aGlzLmdldFNjcm9sbExlZnRPZmZzZXQodmlzaWJsZUl0ZW1zLCBpdGVtcylcbiAgICAgIDogdGhpcy5nZXRTY3JvbGxSaWdodE9mZnNldCh2aXNpYmxlSXRlbXMsIGl0ZW1zKTtcbiAgICByZXR1cm4gbmV3T2Zmc2V0O1xuICB9O1xuXG4gIC8qKiBvZmZzZXQgZnJvbSAwIHRvIGZpcnN0IG1lbnUgaXRlbSB3aGVuIHNjcm9sbCxcbiAgICogbmVlZCBwYXNzIGl0ZW1zIHZpc2libGUgb24gc2NyZWVuXG4gICovXG4gIGdldENlbnRlck9mZnNldCA9IChcbiAgICB7aXRlbXMgPSB0aGlzLm1lbnVJdGVtcywgbWVudVdpZHRoID0gdGhpcy5tZW51V2lkdGh9XG4gICAgOiB7aXRlbXM/OiBNZW51SXRlbXMsIG1lbnVXaWR0aD86IG51bWJlcn0pOiBudW1iZXIgPT4ge1xuICAgIGlmICghaXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgaXRlbXNXaWR0aCA9IHRoaXMuZ2V0SXRlbXNXaWR0aCh7aXRlbXN9KTtcbiAgICBjb25zdCBvZmZzZXQgPSAobWVudVdpZHRoIC0gaXRlbXNXaWR0aCkgLyAyO1xuICAgIHJldHVybiBvZmZzZXQ7XG4gIH07XG5cbiAgLyoqIG1vdXNlIHdoZWVsIGhhbmRsZXIgKi9cbiAgaGFuZGxlV2hlZWwgPSAoZTogV2hlZWxFdmVudCk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHt3aGVlbH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghd2hlZWwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZS5kZWx0YVkgPCAwKSB7XG4gICAgICB0aGlzLmhhbmRsZUFycm93Q2xpY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVBcnJvd0NsaWNrKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqIG9mZnNldCBhdCBzdGFydCAqL1xuICBnZXRPZmZzZXRBdFN0YXJ0ID0gKCk6IG51bWJlciA9PiB7XG4gICAgY29uc3Qge2ZpcnN0UGFnZU9mZnNldH0gPSB0aGlzO1xuICAgIGNvbnN0IHthbGlnbkNlbnRlcn0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBhbGlnbkNlbnRlciA/IGZpcnN0UGFnZU9mZnNldCA6IGRlZmF1bHRQcm9wcy50cmFuc2xhdGU7XG4gIH07XG5cbiAgLyoqIG9mZnNldCBhdCBlbmQgKi9cbiAgZ2V0T2Zmc2V0QXRFbmQgPSAoKTogbnVtYmVyID0+IHtcbiAgICBjb25zdCB7YWxpZ25DZW50ZXJ9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7YWxsSXRlbXNXaWR0aCwgbWVudVdpZHRoLCBsYXN0UGFnZU9mZnNldH0gPSB0aGlzO1xuICAgIGNvbnN0IG9mZnNldCA9IGFsbEl0ZW1zV2lkdGggLSBtZW51V2lkdGg7XG4gICAgcmV0dXJuIGFsaWduQ2VudGVyID8gLW9mZnNldCAtIGxhc3RQYWdlT2Zmc2V0IDogLW9mZnNldDtcbiAgfTtcblxuXG4gIC8qKiBjbGljayByaWdodCBhcnJvdyAqL1xuICBoYW5kbGVBcnJvd0NsaWNrUmlnaHQgPSAoKTogVm9pZCA9PiB7XG4gICAgdGhpcy5oYW5kbGVBcnJvd0NsaWNrKGZhbHNlKTtcbiAgfTtcblxuICAvKiogY2xpY2sgYXJyb3cvc2Nyb2xsICovXG4gIGhhbmRsZUFycm93Q2xpY2sgPSAobGVmdCA9IHRydWUpOiBWb2lkID0+IHtcbiAgICBjb25zdCB7YWxpZ25DZW50ZXJ9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7YWxsSXRlbXNXaWR0aCwgbWVudVdpZHRofSA9IHRoaXM7XG5cbiAgICBpZiAoIWFsaWduQ2VudGVyICYmICFsZWZ0ICYmIGFsbEl0ZW1zV2lkdGggPCBtZW51V2lkdGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmdldE9mZnNldChsZWZ0KTtcbiAgICBsZXQgdHJhbnNsID0gLW9mZnNldDtcblxuICAgIGlmIChsZWZ0ICYmIHRoaXMuaXRCZWZvcmVTdGFydCh0cmFuc2wpKSB7XG4gICAgICB0cmFuc2wgPSB0aGlzLmdldE9mZnNldEF0U3RhcnQoKTtcbiAgICB9XG4gICAgaWYgKCFsZWZ0ICYmIHRoaXMuaXRBZnRlckVuZCh0cmFuc2wpKSB7XG4gICAgICB0cmFuc2wgPSB0aGlzLmdldE9mZnNldEF0RW5kKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3VHJhbnNsYXRlID0gdHJhbnNsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0cmFuc2xhdGU6IG5ld1RyYW5zbGF0ZSxcbiAgICAgIHhQb2ludDogZGVmYXVsdFByb3BzLnhQb2ludCxcbiAgICAgIHN0YXJ0RHJhZ1RyYW5zbGF0ZTogMCxcbiAgICAgIHhEcmFnZ2VkRGlzdGFuY2U6IDAsXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqIGNoZWNrIGlmIHBvc2l0aW9uIGJlZm9yZSBmaXJzdCBlbGVtZW50ICovXG4gIGl0QmVmb3JlU3RhcnQgPSAodHJhbnM6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHthbGlnbkNlbnRlcn0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHttZW51V2lkdGgsIGFsbEl0ZW1zV2lkdGgsIGZpcnN0UGFnZU9mZnNldH0gPSB0aGlzO1xuICAgIGlmIChhbGxJdGVtc1dpZHRoIDwgbWVudVdpZHRoKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gYWxpZ25DZW50ZXJcbiAgICAgID8gdHJhbnMgPiBmaXJzdFBhZ2VPZmZzZXRcbiAgICAgIDogdHJhbnMgPiBkZWZhdWx0UHJvcHMudHJhbnNsYXRlO1xuICB9O1xuICAvKiogY2hlY2sgaWYgcG9zaXRpb24gYWZ0ZXIgbGFzdCBlbGVtZW50ICovXG4gIGl0QWZ0ZXJFbmQgPSAodHJhbnM6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHthbGlnbkNlbnRlcn0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHttZW51V2lkdGgsIGFsbEl0ZW1zV2lkdGgsIGxhc3RQYWdlT2Zmc2V0fSA9IHRoaXM7XG4gICAgaWYgKGFsbEl0ZW1zV2lkdGggPCBtZW51V2lkdGgpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBhbGlnbkNlbnRlclxuICAgICAgPyB0cmFucyA8IGRlZmF1bHRQcm9wcy50cmFuc2xhdGUgJiZcbiAgICAgICAgICBNYXRoLmFicyh0cmFucykgPiBhbGxJdGVtc1dpZHRoIC0gbWVudVdpZHRoICsgbGFzdFBhZ2VPZmZzZXRcbiAgICAgIDogdHJhbnMgPCBkZWZhdWx0UHJvcHMudHJhbnNsYXRlICYmXG4gICAgICAgICAgTWF0aC5hYnModHJhbnMpID4gYWxsSXRlbXNXaWR0aCAtIG1lbnVXaWR0aDtcbiAgfTtcblxuICAvKiogZ2V0IGNvb3JkcyBmcm9tIG1vdXNlIGV2ZW50ICovXG4gIGdldFBvaW50ID0gKGV2OiBSZWFjdC5Nb3VzZUV2ZW50fFJlYWN0LlRvdWNoRXZlbnR8RXZlbnQpOiBudW1iZXIgPT4ge1xuICAgIGlmICgndG91Y2hlcycgaW4gZXYpIHtcbiAgICAgIHJldHVybiBldi50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgfSBlbHNlIGlmICgnY2xpZW50WCcgaW4gZXYpIHtcbiAgICAgIHJldHVybiBldi5jbGllbnRYO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuICB9O1xuXG4gIC8qKiBldmVudCBoYW5kbGVyIHdoZW4gc3RhcnQgZHJhZyBhbmQgbW91c2UgZG93biAgKi9cbiAgaGFuZGxlRHJhZ1N0YXJ0ID0gKGV2OiBSZWFjdC5Nb3VzZUV2ZW50fFJlYWN0LlRvdWNoRXZlbnQpOiBWb2lkID0+IHtcbiAgICAvLyAxIGxlZnQgYnV0dG9uLCAyIHJpZ2h0IGJ1dHRvblxuICAgIGlmIChldiAmJiAnYnV0dG9ucycgaW4gZXYgJiYgZXYuYnV0dG9ucyA9PT0gMikgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IHtkcmFnZ2luZzogZHJhZ2dpbmdFbmFibGV9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWRyYWdnaW5nRW5hYmxlKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3Qge3RyYW5zbGF0ZTogc3RhcnREcmFnVHJhbnNsYXRlfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkcmFnZ2luZzogdHJ1ZSxcbiAgICAgIHhQb2ludDogMCxcbiAgICAgIHN0YXJ0RHJhZ1RyYW5zbGF0ZSxcbiAgICAgIHhEcmFnZ2VkRGlzdGFuY2U6IDAsXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqIGRyYWcgZXZlbnQgaGFuZGxlciAqL1xuICBoYW5kbGVEcmFnID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnR8UmVhY3QuVG91Y2hFdmVudHxFdmVudCk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHtkcmFnZ2luZzogZHJhZ2dpbmdFbmFibGV9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7dHJhbnNsYXRlLCBkcmFnZ2luZywgeFBvaW50LCB4RHJhZ2dlZERpc3RhbmNlfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKCFkcmFnZ2luZ0VuYWJsZSB8fCAhZHJhZ2dpbmcpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5nZXRQb2ludChlKTtcbiAgICBjb25zdCBkaWZmID1cbiAgICAgIHhQb2ludCA9PT0gZGVmYXVsdFByb3BzLnhQb2ludCA/IGRlZmF1bHRQcm9wcy54UG9pbnQgOiB4UG9pbnQgLSBwb2ludDtcbiAgICBsZXQgcmVzdWx0ID0gdHJhbnNsYXRlIC0gZGlmZjtcblxuICAgIC8vIGRvbid0IGxldCBzY3JvbGwgb3ZlciBzdGFydCBhbmQgZW5kXG4gICAgaWYgKHRoaXMuaXRCZWZvcmVTdGFydChyZXN1bHQpKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQgLSBNYXRoLmFicyhkaWZmKSAvIDI7XG4gICAgfVxuICAgIGlmICh0aGlzLml0QWZ0ZXJFbmQocmVzdWx0KSkge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgTWF0aC5hYnMoZGlmZikgLyAyO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1RyYW5zbGF0ZSA9IHJlc3VsdDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgeFBvaW50OiBwb2ludCxcbiAgICAgIHRyYW5zbGF0ZTogbmV3VHJhbnNsYXRlLFxuICAgICAgeERyYWdnZWREaXN0YW5jZTogeERyYWdnZWREaXN0YW5jZSArIE1hdGguYWJzKGRpZmYpLFxuICAgIH0pO1xuICB9O1xuXG4gIC8qKiBldmVudCBoYW5kbGVyIHdoZW4gZHJhZyBhbmQgbW91c2UgdXAgICovXG4gIGhhbmRsZURyYWdTdG9wID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnR8UmVhY3QuVG91Y2hFdmVudHxFdmVudCk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHthbGxJdGVtc1dpZHRoLCBtZW51V2lkdGgsIGZpcnN0UGFnZU9mZnNldCwgbGFzdFBhZ2VPZmZzZXR9ID0gdGhpcztcbiAgICBsZXQge1xuICAgICAgZHJhZ2dpbmcsXG4gICAgICB4UG9pbnQgPSB0aGlzLmdldFBvaW50KGUpLFxuICAgICAgdHJhbnNsYXRlLFxuICAgICAgc3RhcnREcmFnVHJhbnNsYXRlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtkcmFnZ2luZzogZHJhZ2dpbmdFbmFibGUsIGFsaWduQ2VudGVyfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFkcmFnZ2luZ0VuYWJsZSB8fCAhZHJhZ2dpbmcpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBuZXdUcmFuc2xhdGUgPSB0cmFuc2xhdGU7XG5cbiAgICBpZiAodGhpcy5pdEJlZm9yZVN0YXJ0KHRyYW5zbGF0ZSkpIHtcbiAgICAgIG5ld1RyYW5zbGF0ZSA9IGFsaWduQ2VudGVyID8gZmlyc3RQYWdlT2Zmc2V0IDogZGVmYXVsdFByb3BzLnRyYW5zbGF0ZTtcbiAgICAgIHhQb2ludCA9IGRlZmF1bHRQcm9wcy54UG9pbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLml0QWZ0ZXJFbmQodHJhbnNsYXRlKSkge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gYWxsSXRlbXNXaWR0aCAtIG1lbnVXaWR0aDtcbiAgICAgIG5ld1RyYW5zbGF0ZSA9IGFsaWduQ2VudGVyID8gLW9mZnNldCAtIGxhc3RQYWdlT2Zmc2V0IDogLW9mZnNldDtcbiAgICAgIHhQb2ludCA9IGRlZmF1bHRQcm9wcy54UG9pbnQ7XG4gICAgfVxuXG4gICAgaWYgKCFhbGlnbkNlbnRlciAmJiBtZW51V2lkdGggPj0gYWxsSXRlbXNXaWR0aCkge1xuICAgICAgbmV3VHJhbnNsYXRlID0gZGVmYXVsdFByb3BzLnRyYW5zbGF0ZTtcbiAgICAgIHhQb2ludCA9IGRlZmF1bHRQcm9wcy54UG9pbnQ7XG4gICAgfVxuXG4gICAgbmV3VHJhbnNsYXRlID0gbmV3VHJhbnNsYXRlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICB4UG9pbnQsXG4gICAgICAgIHRyYW5zbGF0ZTogbmV3VHJhbnNsYXRlLFxuICAgICAgfSxcbiAgICAgICgpID0+XG4gICAgICAgIHRoaXMub25VcGRhdGUoe1xuICAgICAgICAgIHRyYW5zbGF0ZTogbmV3VHJhbnNsYXRlLFxuICAgICAgICAgIHRyYW5zbGF0ZU9sZDogc3RhcnREcmFnVHJhbnNsYXRlLFxuICAgICAgICB9KSxcbiAgICApO1xuICB9O1xuXG4gIC8qKiBjaGVjayBpZiBubyBuZWVkIHNob3cgYXJyb3dzICovXG4gIGlzQXJyb3dzVmlzaWJsZSA9ICgpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBhbGxJdGVtc1dpZHRoLFxuICAgICAgbWVudVdpZHRoLFxuICAgICAgcHJvcHM6IHtoaWRlQXJyb3dzfSxcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBoaWRlID0gQm9vbGVhbihoaWRlQXJyb3dzICYmIGFsbEl0ZW1zV2lkdGggPD0gbWVudVdpZHRoKTtcbiAgICByZXR1cm4gIWhpZGU7XG4gIH07XG5cbiAgLyoqIGNiIGZvciBwb3NpdGlvbiB1cGRhdGUgKi9cbiAgb25VcGRhdGUgPSAoe1xuICAgIHRyYW5zbGF0ZSA9IHRoaXMuc3RhdGUudHJhbnNsYXRlLFxuICAgIHRyYW5zbGF0ZU9sZCA9IHRoaXMuc3RhdGUudHJhbnNsYXRlLFxuICB9IDoge1xuICAgIHRyYW5zbGF0ZT86IG51bWJlcixcbiAgICB0cmFuc2xhdGVPbGQ/OiBudW1iZXJcbiAgfSk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHtvblVwZGF0ZX0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtsYXN0VHJhbnNsYXRlVXBkYXRlfSA9IHRoaXM7XG4gICAgaWYgKFxuICAgICAgb25VcGRhdGUgJiZcbiAgICAgIHRyYW5zbGF0ZSAhPT0gdHJhbnNsYXRlT2xkICYmXG4gICAgICB0cmFuc2xhdGUgIT09IGxhc3RUcmFuc2xhdGVVcGRhdGVcbiAgICApIHtcbiAgICAgIHRoaXMubGFzdFRyYW5zbGF0ZVVwZGF0ZSA9IHRyYW5zbGF0ZTtcbiAgICAgIG9uVXBkYXRlKHt0cmFuc2xhdGV9KTtcbiAgICB9XG4gIH07XG5cbiAgcHVibGljIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGV8bnVsbCB7XG4gICAgY29uc3Qge1xuICAgICAgYXJyb3dDbGFzcyxcbiAgICAgIGFycm93RGlzYWJsZWRDbGFzcyxcbiAgICAgIGFycm93TGVmdCxcbiAgICAgIGFycm93UmlnaHQsXG4gICAgICBkYXRhLFxuICAgICAgaW5uZXJXcmFwcGVyQ2xhc3MsXG4gICAgICBpdGVtQ2xhc3MsXG4gICAgICBpdGVtQ2xhc3NBY3RpdmUsXG4gICAgICBoaWRlQXJyb3dzLFxuICAgICAgbWVudVN0eWxlLFxuICAgICAgbWVudUNsYXNzLFxuICAgICAgdHJhbnNpdGlvbixcbiAgICAgIHdyYXBwZXJDbGFzcyxcbiAgICAgIHdyYXBwZXJTdHlsZSxcbiAgICAgIGZvcndhcmRDbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2xhdGUsXG4gICAgICBkcmFnZ2luZyxcbiAgICAgIGxlZnRBcnJvd1Zpc2libGUsXG4gICAgICByaWdodEFycm93VmlzaWJsZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7c2VsZWN0ZWQsIG1vdW50ZWR9ID0gdGhpcztcblxuICAgIGlmICghZGF0YSB8fCAhZGF0YS5sZW5ndGgpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgYXJyb3dzVmlzaWJsZSA9IG1vdW50ZWQgPyB0aGlzLmlzQXJyb3dzVmlzaWJsZSgpIDogdHJ1ZTtcblxuICAgIGNvbnN0IG1lbnVTdHlsZXMgPSB7Li4uZGVmYXVsdE1lbnVTdHlsZSwgLi4ubWVudVN0eWxlfTtcbiAgICBjb25zdCB3cmFwcGVyU3R5bGVzID0gey4uLmRlZmF1bHRXcmFwcGVyU3R5bGUsIC4uLndyYXBwZXJTdHlsZX07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e21lbnVDbGFzc30gc3R5bGU9e21lbnVTdHlsZXN9IG9uV2hlZWw9e3RoaXMuaGFuZGxlV2hlZWx9PlxuICAgICAgICB7YXJyb3dMZWZ0ICYmIChcbiAgICAgICAgICA8QXJyb3dXcmFwcGVyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93Q2xhc3N9XG4gICAgICAgICAgICBpc0Rpc2FibGVkPXshYXJyb3dzVmlzaWJsZSB8fCAhbGVmdEFycm93VmlzaWJsZX1cbiAgICAgICAgICAgIGhpZGVBcnJvd3M9e2hpZGVBcnJvd3N9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFycm93Q2xpY2t9XG4gICAgICAgICAgICBkaXNhYmxlZENsYXNzPXthcnJvd0Rpc2FibGVkQ2xhc3N9XG4gICAgICAgICAgICBmb3J3YXJkQ2xpY2s9e2ZvcndhcmRDbGlja30+XG4gICAgICAgICAgICB7YXJyb3dMZWZ0fVxuICAgICAgICAgIDwvQXJyb3dXcmFwcGVyPlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3dyYXBwZXJDbGFzc31cbiAgICAgICAgICBzdHlsZT17d3JhcHBlclN0eWxlc31cbiAgICAgICAgICByZWY9e3RoaXMuc2V0V3JhcHBlclJlZn1cbiAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVEcmFnU3RhcnR9XG4gICAgICAgICAgb25Ub3VjaFN0YXJ0PXt0aGlzLmhhbmRsZURyYWdTdGFydH1cbiAgICAgICAgICBvblRvdWNoRW5kPXt0aGlzLmhhbmRsZURyYWdTdG9wfVxuICAgICAgICAgIG9uTW91c2VNb3ZlPXt0aGlzLmhhbmRsZURyYWd9XG4gICAgICAgICAgb25Ub3VjaE1vdmU9e3RoaXMuaGFuZGxlRHJhZ30+XG4gICAgICAgICAgPElubmVyV3JhcHBlclxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgIHRyYW5zbGF0ZT17dHJhbnNsYXRlfVxuICAgICAgICAgICAgZHJhZ2dpbmc9e2RyYWdnaW5nfVxuICAgICAgICAgICAgbW91bnRlZD17bW91bnRlZH1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e21vdW50ZWQgPyB0cmFuc2l0aW9uIDogMH1cbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgICAgIHNldFJlZj17dGhpcy5zZXRSZWZ9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uSXRlbUNsaWNrfVxuICAgICAgICAgICAgaW5uZXJXcmFwcGVyQ2xhc3M9e2lubmVyV3JhcHBlckNsYXNzfVxuICAgICAgICAgICAgaXRlbUNsYXNzPXtpdGVtQ2xhc3N9XG4gICAgICAgICAgICBpdGVtQ2xhc3NBY3RpdmU9e2l0ZW1DbGFzc0FjdGl2ZX1cbiAgICAgICAgICAgIGZvcndhcmRDbGljaz17Zm9yd2FyZENsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHthcnJvd1JpZ2h0ICYmIChcbiAgICAgICAgICA8QXJyb3dXcmFwcGVyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93Q2xhc3N9XG4gICAgICAgICAgICBpc0Rpc2FibGVkPXshYXJyb3dzVmlzaWJsZSB8fCAhcmlnaHRBcnJvd1Zpc2libGV9XG4gICAgICAgICAgICBoaWRlQXJyb3dzPXtoaWRlQXJyb3dzfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBcnJvd0NsaWNrUmlnaHR9XG4gICAgICAgICAgICBkaXNhYmxlZENsYXNzPXthcnJvd0Rpc2FibGVkQ2xhc3N9XG4gICAgICAgICAgICBmb3J3YXJkQ2xpY2s9e2ZvcndhcmRDbGlja30+XG4gICAgICAgICAgICB7YXJyb3dSaWdodH1cbiAgICAgICAgICA8L0Fycm93V3JhcHBlcj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsTWVudTtcbiJdLCJzb3VyY2VSb290IjoiIn0=

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

  function InnerWrapper(props) {
    var _this = _super.call(this, props) || this;

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

    _this.setItems = function (arr, selected, forwardClick, onClick) {
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

    _this.ref = {};
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
        selected = _a.selected,
        forwardClick = _a.forwardClick,
        onClick = _a.onClick;
    var items = this.setItems(data, selected, forwardClick, onClick);
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
        return _this.setRef('menuInner', 'menuInner', inst);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUvc3JjL3dyYXBwZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUEsT0FBQSxHQUFBLGVBQUEsQ0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLENBQUE7O0FBQ0EsSUFBQSxnQkFBQSxHQUFBLE9BQUEsQ0FBQSxrQkFBQSxDQUFBOztBQVdDO0FBRUQsSUFBTSxpQkFBaUIsR0FBRztBQUN4QixFQUFBLGFBQWEsRUFBRSxnQkFBQSxDQUFBLFlBQUEsQ0FBYTtBQURKLENBQTFCOztBQUlBLElBQUEsWUFBQSxHQUFBLFVBQUEsTUFBQSxFQUFBO0FBQWtDLEVBQUEsU0FBQSxDQUFBLFlBQUEsRUFBQSxNQUFBLENBQUE7O0FBQWxDLFdBQUEsWUFBQSxHQUFBOztBQWdDQzs7QUE5QlEsRUFBQSxZQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsR0FBUCxZQUFBO0FBQ1EsUUFBQSxFQUFBLEdBQUEsS0FBQSxLQUFBO0FBQUEsUUFDSixVQUFBLEdBQUEsRUFBQSxDQUFBLFVBREk7QUFBQSxRQUVKLE9BQUEsR0FBQSxFQUFBLENBQUEsU0FGSTtBQUFBLFFBR0osYUFBQSxHQUFBLEVBQUEsQ0FBQSxhQUhJO0FBQUEsUUFJSixVQUFBLEdBQUEsRUFBQSxDQUFBLFVBSkk7QUFBQSxRQUtKLFlBQUEsR0FBQSxFQUFBLENBQUEsWUFMSTtBQUFBLFFBTUosUUFBQSxHQUFBLEVBQUEsQ0FBQSxPQU5JO0FBQUEsUUFPSixRQUFBLEdBQUEsRUFBQSxDQUFBLFFBUEk7QUFTTixRQUFNLGlCQUFpQixHQUFHLFVBQVUsR0FDaEMsYUFBYSxJQUFPLE9BQU8sR0FBQSxZQURLLEdBRWhDLEVBRko7QUFHQSxRQUFNLFNBQVMsR0FBTSxPQUFPLEdBQUEsR0FBUCxJQUFXLFVBQVUsR0FBRyxpQkFBSCxHQUF1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LEdBQXdDLEVBRDVCLENBRmhCO0FBS0UsUUFBQSxHQUFHLEVBQUUsY0FBYyxJQUFJLENBQUMsR0FMMUI7QUFNRSxRQUFBLEtBQUssRUFBRTtBQUNMLFVBQUEsT0FBTyxFQUFFO0FBREosU0FOVDtBQVNFLFFBQUEsT0FBTyxFQUFFLEtBQUksQ0FBQyxtQkFBTCxDQUF5QixJQUFJLENBQUMsR0FBOUIsRUFBbUMsSUFBbkMsQ0FUWDtBQVVFLFFBQUEsUUFBUSxFQUFFLENBVlo7QUFXRSxRQUFBLElBQUksRUFBQztBQVhQLE9BQUEsRUFEc0IsSUFDdEIsQ0FEc0I7QUFnQnZCLEtBaEJBLENBSkgsQ0FERjtBQXdCRCxHQTNDRDs7QUFyQ08sRUFBQSxZQUFBLENBQUEsWUFBQSxHQUFlO0FBQ3BCLElBQUEsSUFBSSxFQUFFLEVBRGM7QUFFcEIsSUFBQSxTQUFTLEVBQUUsZ0JBQUEsQ0FBQSxZQUFBLENBQWEsU0FGSjtBQUdwQixJQUFBLFFBQVEsRUFBRSxJQUhVO0FBSXBCLElBQUEsT0FBTyxFQUFFLEtBSlc7QUFLcEIsSUFBQSxVQUFVLEVBQUUsZ0JBQUEsQ0FBQSxZQUFBLENBQWEsVUFMTDtBQU1wQixJQUFBLFFBQVEsRUFBRSxnQkFBQSxDQUFBLFlBQUEsQ0FBYTtBQU5ILEdBQWY7QUFpRlQsU0FBQSxZQUFBO0FBQUMsQ0FsRkQsQ0FBa0MsT0FBQSxDQUFBLE9BQUEsQ0FBTSxhQUF4QyxDQUFBOztBQUFhLE9BQUEsQ0FBQSxZQUFBLEdBQUEsWUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtkZWZhdWx0UHJvcHN9IGZyb20gJy4vZGVmYXV0U2V0dGluZ3MnO1xuaW1wb3J0IHsgRGF0YSwgUmVmT2JqZWN0LCBWb2lkIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBBcnJvd1dyYXBwZXJQcm9wcyB7XG4gIGNsYXNzTmFtZTogc3RyaW5nLFxuICBvbkNsaWNrOiBGdW5jdGlvbixcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50LFxuICBpc0Rpc2FibGVkOiBib29sZWFuLFxuICBoaWRlQXJyb3dzOiBib29sZWFuLFxuICBkaXNhYmxlZENsYXNzOiBzdHJpbmcsXG4gIGZvcndhcmRDbGljazogYm9vbGVhblxufTtcblxuY29uc3QgQXJyb3dEZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkQ2xhc3M6IGRlZmF1bHRQcm9wcy5hcnJvd0Rpc2FibGVkQ2xhc3MsXG59O1xuXG5leHBvcnQgY2xhc3MgQXJyb3dXcmFwcGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBcnJvd1dyYXBwZXJQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gQXJyb3dEZWZhdWx0UHJvcHM7XG4gIHB1YmxpYyByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7XG4gICAgICBpc0Rpc2FibGVkLFxuICAgICAgY2xhc3NOYW1lOiBjbHNOYW1lLFxuICAgICAgZGlzYWJsZWRDbGFzcyxcbiAgICAgIGhpZGVBcnJvd3MsXG4gICAgICBmb3J3YXJkQ2xpY2ssXG4gICAgICBvbkNsaWNrLFxuICAgICAgY2hpbGRyZW5cbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkaXNhYmxlZENsYXNzTmFtZSA9IGlzRGlzYWJsZWRcbiAgICAgID8gZGlzYWJsZWRDbGFzcyB8fCBgJHtjbHNOYW1lfS0tZGlzYWJsZWRgXG4gICAgICA6ICcnO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGAke2Nsc05hbWV9ICR7aGlkZUFycm93cyA/IGRpc2FibGVkQ2xhc3NOYW1lIDogJyd9YDtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgLi4uY2hpbGRyZW4ucHJvcHMsXG4gICAgICBvbkNsaWNrOiAoKSA9PiAoZm9yd2FyZENsaWNrID8gb25DbGljaygpIDogbnVsbCksXG4gICAgfTtcbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoKTogVm9pZCA9PiB7XG4gICAgICBvbkNsaWNrKCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICA+XG4gICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIGNoaWxkUHJvcHMpfVxuICAgICAgPC9kaXY+KTtcbiAgfTtcblxufTtcblxuaW50ZXJmYWNlIGlubmVyU3R5bGVQcm9wcyB7XG4gIHRyYW5zbGF0ZTogbnVtYmVyLFxuICBkcmFnZ2luZzogYm9vbGVhbixcbiAgbW91bnRlZDogYm9vbGVhbixcbiAgdHJhbnNpdGlvbjogbnVtYmVyLFxufTtcblxuZXhwb3J0IGNvbnN0IGlubmVyU3R5bGUgPSAoe3RyYW5zbGF0ZSwgZHJhZ2dpbmcsIG1vdW50ZWQsIHRyYW5zaXRpb259IDogaW5uZXJTdHlsZVByb3BzKTogQ1NTUHJvcGVydGllcyA9PiB7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6ICc5OTAwcHgnLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7dHJhbnNsYXRlfXB4LCAwcHgsIDBweClgLFxuICAgIHRyYW5zaXRpb246IGB0cmFuc2Zvcm0gJHtkcmFnZ2luZyB8fCAhbW91bnRlZCA/ICcwJyA6IHRyYW5zaXRpb259c2AsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICB9O1xufTtcblxuaW50ZXJmYWNlIElubmVyV3JhcHBlclByb3BzIHtcbiAgZGF0YTogRGF0YSxcbiAgc2V0UmVmOiBGdW5jdGlvbixcbiAgb25DbGljazogRnVuY3Rpb24sXG4gIHRyYW5zbGF0ZTogbnVtYmVyLFxuICBkcmFnZ2luZzogYm9vbGVhbixcbiAgbW91bnRlZDogYm9vbGVhbixcbiAgdHJhbnNpdGlvbjogbnVtYmVyLFxuICBzZWxlY3RlZDogc3RyaW5nfG51bWJlcixcbiAgaW5uZXJXcmFwcGVyQ2xhc3M6IHN0cmluZyxcbiAgaXRlbUNsYXNzOiBzdHJpbmcsXG4gIGl0ZW1DbGFzc0FjdGl2ZTogc3RyaW5nLFxuICBmb3J3YXJkQ2xpY2s6IGJvb2xlYW4sXG59O1xuXG5leHBvcnQgY2xhc3MgSW5uZXJXcmFwcGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJbm5lcldyYXBwZXJQcm9wcywge30+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhOiBbXSxcbiAgICB0cmFuc2xhdGU6IGRlZmF1bHRQcm9wcy50cmFuc2xhdGUsXG4gICAgZHJhZ2dpbmc6IHRydWUsXG4gICAgbW91bnRlZDogZmFsc2UsXG4gICAgdHJhbnNpdGlvbjogZGVmYXVsdFByb3BzLnRyYW5zaXRpb24sXG4gICAgc2VsZWN0ZWQ6IGRlZmF1bHRQcm9wcy5zZWxlY3RlZCxcbiAgfTtcbiAgcHJpdmF0ZSByZWY6IFJlZk9iamVjdDtcbiAgY29uc3RydWN0b3IocHJvcHM6IElubmVyV3JhcHBlclByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucmVmID0ge307XG4gIH1cblxuICBzZXRSZWYgPSAoa2V5OiBzdHJpbmcsIGVsS2V5OiBzdHJpbmcsIHZhbHVlOiBIVE1MRGl2RWxlbWVudCB8IG51bGwpOiBWb2lkID0+IHtcbiAgICBjb25zdCB7c2V0UmVmfSA9IHRoaXMucHJvcHM7XG4gICAgc2V0UmVmKHtba2V5XTogeyBrZXk6IGVsS2V5LCBlbGVtOiB2YWx1ZX19KTtcbiAgfTtcblxuICBpc0VsZW1lbnRBY3RpdmUgPSAoaXRlbUlkOiBzdHJpbmd8bnVtYmVyfG51bGwsIHNlbGVjdGVkOiBzdHJpbmd8bnVtYmVyKTogYm9vbGVhbiA9PiBTdHJpbmcoaXRlbUlkKSA9PT0gU3RyaW5nKHNlbGVjdGVkKTtcblxuICBzZXRJdGVtcyA9IChhcnI6IEpTWC5FbGVtZW50W10sIHNlbGVjdGVkOiBSZWFjdC5SZWFjdFRleHQsIGZvcndhcmRDbGljazogYm9vbGVhbiwgb25DbGljazogRnVuY3Rpb24pOiBKU1guRWxlbWVudFtdID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IGFyci5tYXAoZWwgPT4ge1xuICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIHNlbGVjdGVkOiB0aGlzLmlzRWxlbWVudEFjdGl2ZShlbC5rZXksIHNlbGVjdGVkKSxcbiAgICAgICAgb25DbGljazogdGhpcy5mb3J3YXJkQ2xpY2tIYW5kbGVyKGVsLmtleSksXG4gICAgICB9O1xuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChlbCwgcHJvcHMpO1xuICAgIH0pO1xuICAgIHJldHVybiBpdGVtcztcbiAgfTtcblxuICBmb3J3YXJkQ2xpY2tIYW5kbGVyID0gKGtleTogYW55LCByZXZlcnNlOiBib29sZWFuID0gZmFsc2UpID0+ICgpOiBWb2lkID0+IHtcbiAgICBjb25zdCB7IGZvcndhcmRDbGljaywgb25DbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAocmV2ZXJzZSA/ICFmb3J3YXJkQ2xpY2sgOiBmb3J3YXJkQ2xpY2spIG9uQ2xpY2soa2V5KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNsYXRlLFxuICAgICAgZHJhZ2dpbmcsXG4gICAgICBtb3VudGVkLFxuICAgICAgdHJhbnNpdGlvbixcbiAgICAgIGlubmVyV3JhcHBlckNsYXNzLFxuICAgICAgaXRlbUNsYXNzLFxuICAgICAgaXRlbUNsYXNzQWN0aXZlLFxuICAgICAgZGF0YSxcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgZm9yd2FyZENsaWNrLFxuICAgICAgb25DbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zZXRJdGVtcyhkYXRhLCBzZWxlY3RlZCwgZm9yd2FyZENsaWNrLCBvbkNsaWNrKTtcblxuICAgIGNvbnN0IHN0eWxlOiBDU1NQcm9wZXJ0aWVzID0gaW5uZXJTdHlsZSh7IHRyYW5zbGF0ZSwgZHJhZ2dpbmcsIG1vdW50ZWQsIHRyYW5zaXRpb24gfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2lubmVyV3JhcHBlckNsYXNzfVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIHJlZj17aW5zdCA9PiB0aGlzLnNldFJlZignbWVudUlubmVyJywgJ21lbnVJbm5lcicsIGluc3QpfT5cbiAgICAgICAge2l0ZW1zLm1hcCgoSXRlbSwgaSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17aW5zdCA9PiB0aGlzLnNldFJlZihgbWVudWl0ZW0tJHtpfWAsIFN0cmluZyhJdGVtLmtleSB8fCAnJyksIGluc3QpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpdGVtQ2xhc3N9ICR7XG4gICAgICAgICAgICAgIEl0ZW0ucHJvcHMuc2VsZWN0ZWQgPyBpdGVtQ2xhc3NBY3RpdmUgOiAnJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICBrZXk9eydtZW51SXRlbS0nICsgSXRlbS5rZXl9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmZvcndhcmRDbGlja0hhbmRsZXIoSXRlbS5rZXksIHRydWUpfVxuICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIHtJdGVtfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=

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