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
      _this.ref = ref;
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

    _this.resize = function () {
      var translate = _this.state.translate;

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
          newState.translate = utils_1.formatTranslate(_this.getOffsetToItemByKey(selected));
        }
      }

      _this.setState(__assign({}, newState));
    };

    _this.isScrollNeeded = function (_a) {
      var itemId = _a.itemId,
          _b = _a.translate,
          translate = _b === void 0 ? _this.state.translate : _b;

      var itemIndex = _this.getItemIndexByKey(itemId);

      if (itemIndex === -1) return false;
      var menuItems = _this.menuItems;

      var visibleItems = _this.getVisibleItems({
        items: menuItems,
        offset: translate
      });

      var item = menuItems[itemIndex];
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
        return el[1];
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

      var firstPageOffset = utils_1.formatTranslate(_this.getCenterOffset({
        items: visibleItemsStart,
        menuWidth: menuWidth
      }));

      var visibleItemsEnd = _this.getVisibleItems({
        items: items,
        offset: -allItemsWidth + menuWidth,
        wWidth: wWidth,
        menuPos: menuPos,
        menuWidth: menuWidth
      });

      var lastPageOffset = utils_1.formatTranslate(_this.getCenterOffset({
        items: visibleItemsEnd,
        menuWidth: menuWidth
      }));
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
        var elWidth = utils_1.getClientRect(el[1]).width;

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

      return utils_1.formatTranslate(translate);
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
      var x = utils_1.getClientRect(menuItems[ind][1]).x;
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
      return utils_1.formatTranslate(offset);
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

      var newTranslate = utils_1.formatTranslate(transl);

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

      var newTranslate = utils_1.formatTranslate(result);

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

      newTranslate = utils_1.formatTranslate(newTranslate);

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
    window.addEventListener('resize', this.resize, optionsNoCapture);
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
        translate: utils_1.formatTranslate(translateResult)
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
    window.removeEventListener('resize', this.resize);
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.handleDragStop);
    clearTimeout(this.rafTimer);
    clearTimeout(this.onLoadTimer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUvc3JjL3Njcm9sbE1lbnUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBLE9BQUEsR0FBQSxlQUFBLENBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBOztBQUVBLElBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUE7O0FBUUEsSUFBQSxnQkFBQSxHQUFBLE9BQUEsQ0FBQSxrQkFBQSxDQUFBOztBQU1BLElBQUEsU0FBQSxHQUFBLE9BQUEsQ0FBQSxXQUFBLENBQUE7O0FBVUM7O0FBRUQsSUFBQSxVQUFBLEdBQUEsVUFBQSxNQUFBLEVBQUE7QUFBZ0MsRUFBQSxTQUFBLENBQUEsVUFBQSxFQUFBLE1BQUEsQ0FBQTs7QUFxQjlCLFdBQUEsVUFBQSxDQUFZLEtBQVosRUFBNEI7QUFBNUIsUUFBQSxLQUFBLEdBQ0UsTUFBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLEVBQU0sS0FBTixLQUFZLElBRGQ7O0FBb0JBLElBQUEsS0FBQSxDQUFBLEtBQUEsR0FBUTtBQUNOLE1BQUEsUUFBUSxFQUFFLEtBREo7QUFFTixNQUFBLE1BQU0sRUFBRSxDQUZGO0FBR04sTUFBQSxTQUFTLEVBQUUsS0FBSSxDQUFDLEtBQUwsQ0FBVyxTQUhoQjtBQUlOLE1BQUEsa0JBQWtCLEVBQUUsQ0FKZDtBQUtOLE1BQUEsZ0JBQWdCLEVBQUUsQ0FMWjtBQU1OLE1BQUEsZ0JBQWdCLEVBQUUsS0FOWjtBQU9OLE1BQUEsaUJBQWlCLEVBQUU7QUFQYixLQUFSOztBQW9KQSxJQUFBLEtBQUEsQ0FBQSxNQUFBLEdBQVMsVUFBQyxHQUFELEVBQWU7QUFDdEIsTUFBQSxLQUFJLENBQUMsR0FBTCxHQUFXLEdBQVg7QUFDRCxLQUZEOztBQUtBLElBQUEsS0FBQSxDQUFBLGFB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QUEsVUFBVSxFQUFFLE9BQU8sR0FBRyxVQUFILEdBQWdCLENBTHhCO0FBTVgsTUFBQSxRQUFRLEVBQUUsUUFOQztBQU9YLE1BQUEsTUFBTSxFQUFFLEtBQUssTUFQRjtBQVFYLE1BQUEsT0FBTyxFQUFFLEtBQUssV0FSSDtBQVNYLE1BQUEsaUJBQWlCLEVBQUUsaUJBVFI7QUFVWCxNQUFBLFNBQVMsRUFBRSxTQVZBO0FBV1gsTUFBQSxlQUFlLEVBQUUsZUFYTjtBQVlYLE1BQUEsWUFBWSxFQUFFO0FBWkgsS0FBYixDQVRGLENBYkYsRUFzQ0csVUFBVSxJQUNULE9BQUEsQ0FBQSxPQUFBLENBQUEsYUFBQSxDQUFDLFNBQUEsQ0FBQSxZQUFELEVBQWE7QUFDWCxNQUFBLFNBQVMsRUFBRSxVQURBO0FBRVgsTUFBQSxVQUFVLEVBQUUsQ0FBQyxhQUFELElBQWtCLENBQUMsaUJBRnBCO0FBR1gsTUFBQSxVQUFVLEVBQUUsVUFIRDtBQUlYLE1BQUEsT0FBTyxFQUFFLEtBQUsscUJBSkg7QUFLWCxNQUFBLGFBQWEsRUFBRSxrQkFMSjtBQU1YLE1BQUEsWUFBWSxFQUFFO0FBTkgsS0FBYixFQU9HLFVBUEgsQ0F2Q0osQ0FERjtBQW9ERCxHQXJGTTs7QUFyNEJBLEVBQUEsVUFBQSxDQUFBLFlBQUEsR0FBMEIsZ0JBQUEsQ0FBQSxZQUExQjtBQTI5QlQsU0FBQSxVQUFBO0FBQUMsQ0E1OUJELENBQWdDLE9BQUEsQ0FBQSxPQUFBLENBQU0sU0FBdEMsQ0FBQTs7QUFBYSxPQUFBLENBQUEsVUFBQSxHQUFBLFVBQUE7QUE4OUJiLE9BQUEsQ0FBQSxPQUFBLEdBQWUsVUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBXaGVlbEV2ZW50IH0gIGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgdHJhbnNsYXRlSXNWYWxpZCxcbiAgdmFsaWRhdGVUcmFuc2xhdGUsXG4gIGZvcm1hdFRyYW5zbGF0ZSxcbiAgbm90VW5kZWZPck51bGwsXG4gIGdldENsaWVudFJlY3QsXG4gIHRlc3RQYXNzaXZlRXZlbnRTdXBwb3J0LFxufSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7XG4gIGRlZmF1bHRQcm9wcyxcbiAgZGVmYXVsdE1lbnVTdHlsZSxcbiAgZGVmYXVsdFdyYXBwZXJTdHlsZSxcbn0gZnJvbSAnLi9kZWZhdXRTZXR0aW5ncyc7XG5pbXBvcnQgeyBNZW51UHJvcHMsIFJlZiwgUmVmT2JqZWN0LCBWb2lkLCBNZW51SXRlbSwgTWVudUl0ZW1zIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge0Fycm93V3JhcHBlciwgSW5uZXJXcmFwcGVyfSBmcm9tICcuL3dyYXBwZXInO1xuXG5pbnRlcmZhY2UgTWVudVN0YXRlIHtcbiAgZHJhZ2dpbmc6IGJvb2xlYW4sXG4gIHhQb2ludDogbnVtYmVyLFxuICB0cmFuc2xhdGU6IG51bWJlcixcbiAgc3RhcnREcmFnVHJhbnNsYXRlOiBudW1iZXIsXG4gIHhEcmFnZ2VkRGlzdGFuY2U6IG51bWJlcixcbiAgbGVmdEFycm93VmlzaWJsZTogYm9vbGVhbixcbiAgcmlnaHRBcnJvd1Zpc2libGU6IGJvb2xlYW4sXG59O1xuXG5leHBvcnQgY2xhc3MgU2Nyb2xsTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxNZW51UHJvcHMsIE1lbnVTdGF0ZT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzOiBNZW51UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbiAgcHJpdmF0ZSByZWY6IFJlZk9iamVjdDtcbiAgcHJpdmF0ZSBtZW51V3JhcHBlcjogUmVmO1xuICBwcml2YXRlIG1vdW50ZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgbmVlZFVwZGF0ZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBhbGxJdGVtc1dpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgbWVudVBvczogbnVtYmVyO1xuICBwcml2YXRlIG1lbnVXaWR0aDogbnVtYmVyO1xuICBwcml2YXRlIHdXaWR0aDogbnVtYmVyO1xuICBwcml2YXRlIGZpcnN0UGFnZU9mZnNldDogbnVtYmVyO1xuICBwcml2YXRlIGxhc3RQYWdlT2Zmc2V0OiBudW1iZXI7XG4gIHByaXZhdGUgbGFzdFRyYW5zbGF0ZVVwZGF0ZTogbnVtYmVyO1xuICBwcml2YXRlIG1lbnVJdGVtczogTWVudUl0ZW1zO1xuICBwcml2YXRlIHNlbGVjdGVkOiBzdHJpbmc7XG5cbiAgLyoqIHRpbWVycyBmb3Igc2V0VGltZW91dCBpZiBSQUYgbm90IHN1cHBvcnRlZCAqL1xuICBwcml2YXRlIG9uTG9hZFRpbWVyOiBhbnk7XG4gIHByaXZhdGUgcmFmVGltZXI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTWVudVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucmVmID0ge307XG4gICAgdGhpcy5tZW51V3JhcHBlciA9IG51bGw7XG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5uZWVkVXBkYXRlID0gZmFsc2U7XG4gICAgdGhpcy5hbGxJdGVtc1dpZHRoID0gMDtcbiAgICB0aGlzLm1lbnVQb3MgPSAwO1xuICAgIHRoaXMubWVudVdpZHRoID0gMDtcbiAgICB0aGlzLndXaWR0aCA9IDA7XG4gICAgdGhpcy5maXJzdFBhZ2VPZmZzZXQgPSAwO1xuICAgIHRoaXMubGFzdFBhZ2VPZmZzZXQgPSAwO1xuICAgIHRoaXMubGFzdFRyYW5zbGF0ZVVwZGF0ZSA9IDA7XG4gICAgdGhpcy5tZW51SXRlbXMgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkID0gJyc7XG5cbiAgICB0aGlzLm9uTG9hZFRpbWVyID0gMDtcbiAgICB0aGlzLnJhZlRpbWVyID0gMDtcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICB4UG9pbnQ6IDAsXG4gICAgdHJhbnNsYXRlOiB0aGlzLnByb3BzLnRyYW5zbGF0ZSxcbiAgICBzdGFydERyYWdUcmFuc2xhdGU6IDAsXG4gICAgeERyYWdnZWREaXN0YW5jZTogMCxcbiAgICBsZWZ0QXJyb3dWaXNpYmxlOiBmYWxzZSxcbiAgICByaWdodEFycm93VmlzaWJsZTogdHJ1ZSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpOiBWb2lkIHtcbiAgICB0aGlzLnNldEluaXRpYWwoKTtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbigpIHt9O1xuXG4gICAgY29uc3QgcGFzc2l2ZUV2ZW50cyA9IHRlc3RQYXNzaXZlRXZlbnRTdXBwb3J0KCk7XG4gICAgY29uc3Qgb3B0aW9uc0NhcHR1cmUgPSBwYXNzaXZlRXZlbnRzXG4gICAgICA/IHtwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiB0cnVlfVxuICAgICAgOiB0cnVlO1xuICAgIGNvbnN0IG9wdGlvbnNOb0NhcHR1cmUgPSBwYXNzaXZlRXZlbnRzXG4gICAgICA/IHtwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiBmYWxzZX1cbiAgICAgIDogZmFsc2U7XG5cbiAgICAvLyBUT0RPOiBzZXBhcmF0ZSBmdW5jdGlvbiBmb3IgcmVzaXplXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLm9uTG9hZCwgb3B0aW9uc05vQ2FwdHVyZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplLCBvcHRpb25zTm9DYXB0dXJlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZURyYWcsIG9wdGlvbnNDYXB0dXJlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVEcmFnU3RvcCwgb3B0aW9uc0NhcHR1cmUpO1xuXG4gICAgLy8gaWYgc3R5bGVzIGxvYWRlZCBiZWZvcmUganMgYnVuZGxlIG5lZWQgd2FpdCBmb3IgaXRcbiAgICB0aGlzLm9uTG9hZFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiAodGhpcy5vbkxvYWQoKSwgdGhpcy5mb3JjZVVwZGF0ZSgpKSwgMCk7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzOiBNZW51UHJvcHMsIG5leHRTdGF0ZTogTWVudVN0YXRlKTogYm9vbGVhbiB7XG4gICAgLy8gVE9ETzogbmVlZCByZWZhY3RvciBhbGwgdGhpcyBvciByZW1vdmVcbiAgICAvLyBpdCdzIHRvbyBjb21wbGljYXRlZCBhbHJlYWR5XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNsYXRlLFxuICAgICAgZHJhZ2dpbmcsXG4gICAgICBsZWZ0QXJyb3dWaXNpYmxlLFxuICAgICAgcmlnaHRBcnJvd1Zpc2libGUsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNsYXRlOiB0cmFuc2xhdGVOZXcsXG4gICAgICBkcmFnZ2luZzogZHJhZ2dpbmdOZXcsXG4gICAgICBsZWZ0QXJyb3dWaXNpYmxlOiBsZWZ0QXJyb3dWaXNpYmxlTmV3LFxuICAgICAgcmlnaHRBcnJvd1Zpc2libGU6IHJpZ2h0QXJyb3dWaXNpYmxlTmV3LFxuICAgIH0gPSBuZXh0U3RhdGU7XG5cbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2xhdGU6IHRyYW5zbGF0ZVByb3BzLFxuICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkUHJvcHMsXG4gICAgICBzY3JvbGxUb1NlbGVjdGVkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlUHJvcHNOZXcsXG4gICAgICBzZWxlY3RlZDogc2VsZWN0ZWRQcm9wc05ldyxcbiAgICB9ID0gbmV4dFByb3BzO1xuXG4gICAgY29uc3QgdHJhbnNsYXRlUHJvcHNOb3ROdWxsID0gbm90VW5kZWZPck51bGwodHJhbnNsYXRlUHJvcHNOZXcpO1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlRGlmZiA9IHRyYW5zbGF0ZSAhPT0gdHJhbnNsYXRlTmV3O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVByb3BzRGlmZiA9XG4gICAgICB0cmFuc2xhdGVQcm9wc05vdE51bGwgJiYgdHJhbnNsYXRlUHJvcHMgIT09IHRyYW5zbGF0ZVByb3BzTmV3O1xuICAgIGNvbnN0IHRyYW5zbGF0ZURpZmYgPVxuICAgICAgdHJhbnNsYXRlUHJvcHNOZXcgIT09IHRyYW5zbGF0ZU5ldyB8fFxuICAgICAgKHRyYW5zbGF0ZVN0YXRlRGlmZiB8fCB0cmFuc2xhdGVQcm9wc0RpZmYpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9wc0RpZmYgPVxuICAgICAgbm90VW5kZWZPck51bGwoc2VsZWN0ZWRQcm9wc05ldykgJiYgc2VsZWN0ZWRQcm9wcyAhPT0gc2VsZWN0ZWRQcm9wc05ldztcbiAgICBjb25zdCBzZWxlY3RlZERpZmYgPSBzZWxlY3RlZFByb3BzRGlmZjtcblxuICAgIGNvbnN0IHByb3BzRGlmZiA9IHRyYW5zbGF0ZURpZmYgfHwgc2VsZWN0ZWREaWZmO1xuXG4gICAgY29uc3QgbGVmdEFycm93VmlzaWJsZURpZmYgPSBsZWZ0QXJyb3dWaXNpYmxlICE9PSBsZWZ0QXJyb3dWaXNpYmxlTmV3O1xuICAgIGNvbnN0IHJpZ2h0QXJyb3dWaXNpYmxlRGlmZiA9IHJpZ2h0QXJyb3dWaXNpYmxlICE9PSByaWdodEFycm93VmlzaWJsZU5ldztcblxuICAgIGxldCB0cmFuc2xhdGVSZXN1bHQgPSB0cmFuc2xhdGVOZXc7XG5cbiAgICBjb25zdCBuZXdNZW51SXRlbXMgPVxuICAgICAgdGhpcy5wcm9wcy5kYXRhICE9PSBuZXh0UHJvcHMuZGF0YSB8fFxuICAgICAgdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCAhPT0gbmV4dFByb3BzLmRhdGEubGVuZ3RoO1xuICAgIGNvbnN0IG5ld1RyYW5zbGF0ZVByb3BzID1cbiAgICAgIHRyYW5zbGF0ZUlzVmFsaWQodHJhbnNsYXRlUHJvcHNOZXcpICYmXG4gICAgICB0cmFuc2xhdGVQcm9wc0RpZmYgJiZcbiAgICAgICFuZXdNZW51SXRlbXM7XG5cbiAgICBpZiAobmV3TWVudUl0ZW1zIHx8IChzY3JvbGxUb1NlbGVjdGVkICYmIHNlbGVjdGVkUHJvcHNEaWZmKSkge1xuICAgICAgdGhpcy5uZWVkVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHNEaWZmKSB7XG4gICAgICBpZiAoc2VsZWN0ZWRQcm9wc0RpZmYpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkUHJvcHNOZXc7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdUcmFuc2xhdGVQcm9wcykge1xuICAgICAgICB0cmFuc2xhdGVSZXN1bHQgPSB0cmFuc2xhdGVQcm9wc05ldztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3VHJhbnNsYXRlUHJvcHMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RyYW5zbGF0ZTogZm9ybWF0VHJhbnNsYXRlKHRyYW5zbGF0ZVJlc3VsdCl9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgbmV3TWVudUl0ZW1zIHx8XG4gICAgICB0cmFuc2xhdGVEaWZmIHx8XG4gICAgICBkcmFnZ2luZyAhPT0gZHJhZ2dpbmdOZXcgfHxcbiAgICAgIHByb3BzRGlmZiB8fFxuICAgICAgbGVmdEFycm93VmlzaWJsZURpZmYgfHxcbiAgICAgIHJpZ2h0QXJyb3dWaXNpYmxlRGlmZlxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBNZW51UHJvcHMsIHByZXZTdGF0ZTogTWVudVN0YXRlKTogVm9pZCB7XG4gICAgLy8gdXBkYXRlIGlmIGhhdmUgbmV3IG1lbnUgaXRlbXMgb3Igc2VsZWN0ZWQgdmFsdWVcbiAgICBpZiAodGhpcy5uZWVkVXBkYXRlKSB7XG4gICAgICB0aGlzLm5lZWRVcGRhdGUgPSBmYWxzZTtcbiAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgfVxuXG4gICAgY29uc3Qge3RyYW5zbGF0ZTogdHJhbnNsYXRlT2xkfSA9IHByZXZTdGF0ZTtcbiAgICBsZXQge3RyYW5zbGF0ZTogdHJhbnNsYXRlTmV3LCBkcmFnZ2luZ30gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFkcmFnZ2luZyAmJiB0cmFuc2xhdGVPbGQgIT09IHRyYW5zbGF0ZU5ldykge1xuICAgICAgdGhpcy5vblVwZGF0ZSh7dHJhbnNsYXRlOiB0cmFuc2xhdGVOZXcsIHRyYW5zbGF0ZU9sZH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHtoaWRlU2luZ2xlQXJyb3csIHRyYW5zaXRpb259ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaGlkZVNpbmdsZUFycm93KSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zZXRTaW5nbGVBcnJvd1Zpc2liaWxpdHkpO1xuICAgICAgdGhpcy5yYWZUaW1lciA9IHNldFRpbWVvdXQoXG4gICAgICAgICgpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnNldFNpbmdsZUFycm93VmlzaWJpbGl0eSksXG4gICAgICAgIHRyYW5zaXRpb24gKiAxMDAwICsgMTAsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IFZvaWQge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVEcmFnKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVEcmFnU3RvcCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucmFmVGltZXIpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLm9uTG9hZFRpbWVyKTtcbiAgfVxuXG4gIC8qKiBzZXQgcmVmIGZvciBNZW51SXRlbXMgKi9cbiAgc2V0UmVmID0gKHJlZjogUmVmT2JqZWN0KTogVm9pZCA9PiB7XG4gICAgdGhpcy5yZWYgPSByZWY7XG4gIH07XG5cbiAgLyoqIHNldCByZWYgZm9yIHdyYXBwZXIgKi9cbiAgc2V0V3JhcHBlclJlZiA9IChyZWY6IFJlZik6IFZvaWQgPT4ge1xuICAgIHRoaXMubWVudVdyYXBwZXIgPSByZWY7XG4gIH07XG5cbiAgLyoqIGNoZWNrIGlmIGFycm93cyB2aXNpYmxlICovXG4gIGNoZWNrU2luZ2xlQXJyb3dWaXNpYmlsaXR5ID0gKHt0cmFuc2xhdGUgPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZX0gOiB7dHJhbnNsYXRlPzogbnVtYmVyfSlcbiAgOiB7bGVmdEFycm93VmlzaWJsZTogYm9vbGVhbiwgcmlnaHRBcnJvd1Zpc2libGU6IGJvb2xlYW59ID0+IHtcbiAgICBjb25zdCB7aGlkZVNpbmdsZUFycm93fSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IFtsZWZ0QXJyb3dWaXNpYmxlLCByaWdodEFycm93VmlzaWJsZV0gPSBbdHJ1ZSwgdHJ1ZV07XG4gICAgY29uc3Qge21lbnVJdGVtczogaXRlbXN9ID0gdGhpcztcblxuICAgIGlmIChoaWRlU2luZ2xlQXJyb3cgJiYgaXRlbXMpIHtcbiAgICAgIGNvbnN0IHZpc2libGVJdGVtcyA9IHRoaXMuZ2V0VmlzaWJsZUl0ZW1zKHtvZmZzZXQ6IHRyYW5zbGF0ZX0pO1xuICAgICAgY29uc3QgZmlyc3RJdGVtVmlzaWJsZSA9IHZpc2libGVJdGVtcy5pbmNsdWRlcyhpdGVtc1swXSk7XG4gICAgICBjb25zdCBsYXN0SXRlbVZpc2libGUgPSB2aXNpYmxlSXRlbXMuaW5jbHVkZXMoaXRlbXMuc2xpY2UoLTEpWzBdKTtcbiAgICAgIGxlZnRBcnJvd1Zpc2libGUgPSAhZmlyc3RJdGVtVmlzaWJsZTtcbiAgICAgIHJpZ2h0QXJyb3dWaXNpYmxlID0gIWxhc3RJdGVtVmlzaWJsZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2xlZnRBcnJvd1Zpc2libGUsIHJpZ2h0QXJyb3dWaXNpYmxlfTtcbiAgfTtcblxuICAvKiogY2hlY2sgYXJyb3dzIHZpc2libGUgb3Igbm90IGFuZCBzZXRTdGF0ZSAqL1xuICBzZXRTaW5nbGVBcnJvd1Zpc2liaWxpdHkgPSAoKTogVm9pZCA9PiB7XG4gICAgY29uc3Qge2xlZnRBcnJvd1Zpc2libGUsIHJpZ2h0QXJyb3dWaXNpYmxlfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgbGVmdEFycm93VmlzaWJsZTogbGVmdEFycm93VmlzaWJsZU5ldyxcbiAgICAgIHJpZ2h0QXJyb3dWaXNpYmxlOiByaWdodEFycm93VmlzaWJsZU5ldyxcbiAgICB9ID0gdGhpcy5jaGVja1NpbmdsZUFycm93VmlzaWJpbGl0eSh7fSk7XG4gICAgaWYgKFxuICAgICAgbGVmdEFycm93VmlzaWJsZSAhPT0gbGVmdEFycm93VmlzaWJsZU5ldyB8fFxuICAgICAgcmlnaHRBcnJvd1Zpc2libGUgIT09IHJpZ2h0QXJyb3dWaXNpYmxlTmV3XG4gICAgKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGVmdEFycm93VmlzaWJsZTogbGVmdEFycm93VmlzaWJsZU5ldyxcbiAgICAgICAgcmlnaHRBcnJvd1Zpc2libGU6IHJpZ2h0QXJyb3dWaXNpYmxlTmV3LFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uTG9hZCA9ICgpOiBWb2lkID0+IHtcbiAgICB0aGlzLnNldEluaXRpYWwoKTtcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuICB9O1xuXG4gIC8qKiBTZXQgdmFsdWVzIG9uIHJlc2l6ZSAqL1xuICByZXNpemUgPSAoKTogVm9pZCA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgd1dpZHRoLFxuICAgICAgbWVudVBvcyxcbiAgICAgIG1lbnVXaWR0aCxcbiAgICAgIGFsbEl0ZW1zV2lkdGgsXG4gICAgICBmaXJzdFBhZ2VPZmZzZXQsXG4gICAgICBsYXN0UGFnZU9mZnNldCxcbiAgICB9ID0gdGhpcy51cGRhdGVXaWR0aCh7fSk7XG4gICAgdGhpcy5tZW51UG9zID0gbWVudVBvcztcbiAgICB0aGlzLndXaWR0aCA9IHdXaWR0aDtcbiAgICB0aGlzLmFsbEl0ZW1zV2lkdGggPSBhbGxJdGVtc1dpZHRoO1xuICAgIHRoaXMubWVudVdpZHRoID0gbWVudVdpZHRoO1xuICAgIHRoaXMuZmlyc3RQYWdlT2Zmc2V0ID0gZmlyc3RQYWdlT2Zmc2V0O1xuICAgIHRoaXMubGFzdFBhZ2VPZmZzZXQgPSBsYXN0UGFnZU9mZnNldDtcblxuICAgIC8vIGNvbnN0IGZpcnN0VmlzaWJsZUl0ZW0gPSB0aGlzLmdldFZpc2libGVJdGVtcyh7fSlbMF0gfHwgdGhpcy5tZW51SXRlbXNbMF07XG5cbiAgICAvLyBjb25zdCBuZWVkU2Nyb2xsID0gdGhpcy5pc1Njcm9sbE5lZWRlZCh7XG4gICAgLy8gICBpdGVtSWQ6IHNlbGVjdGVkLFxuICAgIC8vICAgdHJhbnNsYXRlOiBuZXdTdGF0ZS50cmFuc2xhdGUsXG4gICAgLy8gfSk7XG4gICAgLy8gaWYgKG5lZWRTY3JvbGwpIHtcbiAgICAvLyAgIG5ld1N0YXRlLnRyYW5zbGF0ZSA9IGZvcm1hdFRyYW5zbGF0ZShcbiAgICAvLyAgICAgdGhpcy5nZXRPZmZzZXRUb0l0ZW1CeUtleShzZWxlY3RlZCksXG4gICAgLy8gICApO1xuICAgIC8vIH1cblxuICAgIC8vIGlmICh0cmFuc2xhdGUgIT09IGZpcnN0UGFnZU9mZnNldCkge1xuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7IHRyYW5zbGF0ZTogZmlyc3RQYWdlT2Zmc2V0IH0pO1xuICAgIC8vIH1cbiAgfTtcblxuICAvKiogc2V0IGluaXRpYWwgdmFsdWVzIGFuZCBmb3IgdXBkYXRlcyAqL1xuICBzZXRJbml0aWFsID0gKCk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgZGF0YSxcbiAgICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlUHJvcHMsXG4gICAgICBzY3JvbGxUb1NlbGVjdGVkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlOiB0cmFuc2xhdGVTdGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IHRyYW5zbGF0ZVByb3AgPSB0cmFuc2xhdGVQcm9wcztcblxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IHRoaXMuZ2V0TWVudUl0ZW1zKGRhdGEubGVuZ3RoKTtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBkYXRhLmZpbmQoZWwgPT4gZWwua2V5ID09PSBzZWxlY3RlZCk7XG4gICAgdGhpcy5tZW51SXRlbXMgPSBtZW51SXRlbXM7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkSXRlbVxuICAgICAgPyBTdHJpbmcoc2VsZWN0ZWRJdGVtLmtleSB8fCAnJylcbiAgICAgIDogZGVmYXVsdFByb3BzLnNlbGVjdGVkO1xuXG4gICAgLy8gYWxpZ24gaXRlbSBvbiBpbml0aWFsIGxvYWRcbiAgICBjb25zdCB7XG4gICAgICB3V2lkdGgsXG4gICAgICBtZW51UG9zLFxuICAgICAgbWVudVdpZHRoLFxuICAgICAgYWxsSXRlbXNXaWR0aCxcbiAgICAgIGZpcnN0UGFnZU9mZnNldCxcbiAgICAgIGxhc3RQYWdlT2Zmc2V0LFxuICAgIH0gPSB0aGlzLnVwZGF0ZVdpZHRoKHt9KTtcbiAgICB0aGlzLm1lbnVQb3MgPSBtZW51UG9zO1xuICAgIHRoaXMud1dpZHRoID0gd1dpZHRoO1xuICAgIHRoaXMuYWxsSXRlbXNXaWR0aCA9IGFsbEl0ZW1zV2lkdGg7XG4gICAgdGhpcy5tZW51V2lkdGggPSBtZW51V2lkdGg7XG4gICAgdGhpcy5maXJzdFBhZ2VPZmZzZXQgPSBmaXJzdFBhZ2VPZmZzZXQ7XG4gICAgdGhpcy5sYXN0UGFnZU9mZnNldCA9IGxhc3RQYWdlT2Zmc2V0O1xuXG4gICAgY29uc3QgbmV3U3RhdGUgPSB7Li4udGhpcy5zdGF0ZX07XG5cbiAgICAvLyBzZXQgdHJhbnNsYXRlIG9uIGZpcnN0IGxvYWRcbiAgICBjb25zdCBmaXJzdE1vdW50QW5kRGVmYXVsdFRyYW5zbGF0ZSA9ICF0aGlzLm1vdW50ZWQgJiYgdHJhbnNsYXRlUHJvcCA9PT0gZGVmYXVsdFByb3BzLnRyYW5zbGF0ZTtcbiAgICBpZiAoZmlyc3RNb3VudEFuZERlZmF1bHRUcmFuc2xhdGUgfHwgIXRyYW5zbGF0ZUlzVmFsaWQodHJhbnNsYXRlUHJvcCkgJiYgIXRyYW5zbGF0ZUlzVmFsaWQodHJhbnNsYXRlU3RhdGUpKSB7XG4gICAgICBuZXdTdGF0ZS50cmFuc2xhdGUgPSB0aGlzLmZpcnN0UGFnZU9mZnNldDtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBhcnJvd3NcbiAgICBjb25zdCB7XG4gICAgICBsZWZ0QXJyb3dWaXNpYmxlLFxuICAgICAgcmlnaHRBcnJvd1Zpc2libGUsXG4gICAgfSA9IHRoaXMuY2hlY2tTaW5nbGVBcnJvd1Zpc2liaWxpdHkoe3RyYW5zbGF0ZTogdHJhbnNsYXRlUHJvcH0pO1xuICAgIG5ld1N0YXRlLmxlZnRBcnJvd1Zpc2libGUgPSBsZWZ0QXJyb3dWaXNpYmxlO1xuICAgIG5ld1N0YXRlLnJpZ2h0QXJyb3dWaXNpYmxlID0gcmlnaHRBcnJvd1Zpc2libGU7XG5cbiAgICAvLyBzY3JvbGxUb1NlbGVjdGVkXG4gICAgaWYgKHNjcm9sbFRvU2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IG5lZWRTY3JvbGwgPSB0aGlzLmlzU2Nyb2xsTmVlZGVkKHtcbiAgICAgICAgaXRlbUlkOiBzZWxlY3RlZCxcbiAgICAgICAgdHJhbnNsYXRlOiBuZXdTdGF0ZS50cmFuc2xhdGUsXG4gICAgICB9KTtcbiAgICAgIGlmIChuZWVkU2Nyb2xsKSB7XG4gICAgICAgIG5ld1N0YXRlLnRyYW5zbGF0ZSA9IGZvcm1hdFRyYW5zbGF0ZShcbiAgICAgICAgICB0aGlzLmdldE9mZnNldFRvSXRlbUJ5S2V5KHNlbGVjdGVkKSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsuLi5uZXdTdGF0ZX0pO1xuICB9O1xuXG4gIC8qKiBjaGVjayBpZiBzZWxlY3RlZCBpdGVtIHZpc2libGUgb24gc2NyZWVuIG9yIG5lZWQgc2Nyb2xsIHRvIGl0ICovXG4gIGlzU2Nyb2xsTmVlZGVkID0gKHtpdGVtSWQsIHRyYW5zbGF0ZSA9IHRoaXMuc3RhdGUudHJhbnNsYXRlfVxuICAgIDoge1xuICAgICAgaXRlbUlkOiBzdHJpbmcsXG4gICAgICB0cmFuc2xhdGU/OiBudW1iZXJcbiAgICB9KTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgaXRlbUluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXhCeUtleShpdGVtSWQpO1xuICAgIGlmIChpdGVtSW5kZXggPT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCB7bWVudUl0ZW1zfSA9IHRoaXM7XG4gICAgY29uc3QgdmlzaWJsZUl0ZW1zID0gdGhpcy5nZXRWaXNpYmxlSXRlbXMoe1xuICAgICAgaXRlbXM6IG1lbnVJdGVtcyxcbiAgICAgIG9mZnNldDogdHJhbnNsYXRlLFxuICAgIH0pO1xuICAgIGNvbnN0IGl0ZW0gPSBtZW51SXRlbXNbaXRlbUluZGV4XTtcbiAgICByZXR1cm4gIXZpc2libGVJdGVtcy5pbmNsdWRlcyhpdGVtKTtcbiAgfTtcblxuICAvKiogZXh0ZXJuYWwgYXBpLCBzY3JvbGwgdG8gaXRlbSBieSBpdCBrZXkgKi9cbiAgc2Nyb2xsVG8gPSAoaXRlbUtleTogc3RyaW5nKTogVm9pZCA9PiB7XG4gICAgY29uc3Qge3RyYW5zbGF0ZX0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IG5ld1RyYW5zbGF0ZSA9IHRoaXMuZ2V0T2Zmc2V0VG9JdGVtQnlLZXkoaXRlbUtleSk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGl0ZW1LZXk7XG4gICAgaWYgKHRyYW5zbGF0ZSA9PT0gbmV3VHJhbnNsYXRlKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLnNldFN0YXRlKHt0cmFuc2xhdGU6IG5ld1RyYW5zbGF0ZX0pO1xuICB9O1xuXG4gIC8qKiBnZXQgTWVudUl0ZW1zIGZyb20gcmVmcyAqL1xuICBnZXRNZW51SXRlbXMgPSAoZGF0YUxlbmd0aDogbnVtYmVyKTogTWVudUl0ZW1zID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5yZWYpXG4gICAgICAuZmlsdGVyKGVsID0+IGVsWzBdLmluY2x1ZGVzKCdtZW51aXRlbScpKVxuICAgICAgLnNsaWNlKDAsIGRhdGFMZW5ndGgpXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICB9O1xuXG4gIC8qKiBnZXQgd2lkdGggb2YgYWxsIG1lbnUgaXRlbXMgKi9cbiAgZ2V0SXRlbXNXaWR0aCA9ICh7aXRlbXMgPSB0aGlzLm1lbnVJdGVtc30gOiB7aXRlbXM/OiBNZW51SXRlbXN9KTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gaXRlbXNcbiAgICAgIC5tYXAoZWwgPT4gZWxbMV0pXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAucmVkdWNlKChhY2MsIGVsKSA9PiAoYWNjICs9IGdldENsaWVudFJlY3QoZWwpLndpZHRoKSwgMCk7XG4gIH07XG5cbiAgLyoqIGdldCB3aWR0aCBvZiBpdGVtcywgd2luZG93IGFuZCBwb3Mgb2YgbWVudSAqL1xuICBnZXRXaWR0aCA9ICh7aXRlbXN9IDoge2l0ZW1zOiBNZW51SXRlbXN9KSA6IHt3V2lkdGg6IG51bWJlciwgbWVudVBvczogbnVtYmVyLCBtZW51V2lkdGg6IG51bWJlciwgYWxsSXRlbXNXaWR0aDogbnVtYmVyfSA9PiB7XG4gICAgY29uc3Qgd1dpZHRoID0gd2luZG93ICYmIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IHt4OiBtZW51UG9zLCB3aWR0aDogbWVudVdpZHRofSA9IGdldENsaWVudFJlY3QodGhpcy5tZW51V3JhcHBlcik7XG4gICAgY29uc3QgYWxsSXRlbXNXaWR0aCA9IHRoaXMuZ2V0SXRlbXNXaWR0aCh7aXRlbXN9KTtcbiAgICByZXR1cm4ge3dXaWR0aCwgbWVudVBvcywgbWVudVdpZHRoLCBhbGxJdGVtc1dpZHRofTtcbiAgfTtcblxuICAvKiogdmFsdWVzIGZyb20gMiBmdW5jdGlvbnMgYWJvdmUgKi9cbiAgdXBkYXRlV2lkdGggPSAoe2l0ZW1zID0gdGhpcy5tZW51SXRlbXMsIC4uLmFyZ3N9KSA6IHtcbiAgICB3V2lkdGg6IG51bWJlcixcbiAgICBtZW51UG9zOiBudW1iZXIsXG4gICAgbWVudVdpZHRoOiBudW1iZXIsXG4gICAgYWxsSXRlbXNXaWR0aDogbnVtYmVyLFxuICAgIGZpcnN0UGFnZU9mZnNldDogbnVtYmVyLFxuICAgIGxhc3RQYWdlT2Zmc2V0OiBudW1iZXIsXG4gIH0gPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCh7aXRlbXN9KTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ud2lkdGgsXG4gICAgICAuLi50aGlzLmdldFBhZ2VzT2Zmc2V0cyh7aXRlbXMsIC4uLndpZHRoLCAuLi5hcmdzfSksXG4gICAgfTtcbiAgfTtcblxuICAvKiogZ2V0IG9mZnNldHMgdG8gZmlyc3QgYW5kIGxhc3QgaXRlbSAqL1xuICBnZXRQYWdlc09mZnNldHMgPSAoe1xuICAgIGl0ZW1zID0gdGhpcy5tZW51SXRlbXMsXG4gICAgYWxsSXRlbXNXaWR0aCA9IHRoaXMuYWxsSXRlbXNXaWR0aCxcbiAgICB3V2lkdGggPSB0aGlzLndXaWR0aCxcbiAgICBtZW51UG9zID0gdGhpcy5tZW51UG9zLFxuICAgIG1lbnVXaWR0aCA9IHRoaXMubWVudVdpZHRoLFxuICAgIG9mZnNldCA9IHRoaXMuc3RhdGUudHJhbnNsYXRlLFxuICB9KSA6IHtcbiAgICBmaXJzdFBhZ2VPZmZzZXQ6IG51bWJlcixcbiAgICBsYXN0UGFnZU9mZnNldDogbnVtYmVyLFxuICB9ID0+IHtcbiAgICBjb25zdCB2aXNpYmxlSXRlbXNTdGFydCA9IHRoaXMuZ2V0VmlzaWJsZUl0ZW1zKHtcbiAgICAgIG9mZnNldCxcbiAgICAgIGl0ZW1zLFxuICAgICAgd1dpZHRoLFxuICAgICAgbWVudVBvcyxcbiAgICAgIG1lbnVXaWR0aCxcbiAgICB9KTtcbiAgICBjb25zdCBmaXJzdFBhZ2VPZmZzZXQgPSBmb3JtYXRUcmFuc2xhdGUoXG4gICAgICB0aGlzLmdldENlbnRlck9mZnNldCh7XG4gICAgICAgIGl0ZW1zOiB2aXNpYmxlSXRlbXNTdGFydCxcbiAgICAgICAgbWVudVdpZHRoLFxuICAgICAgfSksXG4gICAgKTtcbiAgICBjb25zdCB2aXNpYmxlSXRlbXNFbmQgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7XG4gICAgICBpdGVtcyxcbiAgICAgIG9mZnNldDogLWFsbEl0ZW1zV2lkdGggKyBtZW51V2lkdGgsXG4gICAgICB3V2lkdGgsXG4gICAgICBtZW51UG9zLFxuICAgICAgbWVudVdpZHRoLFxuICAgIH0pO1xuICAgIGNvbnN0IGxhc3RQYWdlT2Zmc2V0ID0gZm9ybWF0VHJhbnNsYXRlKFxuICAgICAgdGhpcy5nZXRDZW50ZXJPZmZzZXQoe1xuICAgICAgICBpdGVtczogdmlzaWJsZUl0ZW1zRW5kLFxuICAgICAgICBtZW51V2lkdGgsXG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZpcnN0UGFnZU9mZnNldCxcbiAgICAgIGxhc3RQYWdlT2Zmc2V0LFxuICAgIH07XG4gIH07XG5cbiAgLyoqIGl0ZW0gY2xpY2sgaGFuZGxlciAqL1xuICBvbkl0ZW1DbGljayA9IChpZDogc3RyaW5nKTogVm9pZCA9PiB7XG4gICAgY29uc3Qge2NsaWNrV2hlbkRyYWcsIG9uU2VsZWN0fSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge3hEcmFnZ2VkRGlzdGFuY2V9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGFmdGVyU2Nyb2xsID0geERyYWdnZWREaXN0YW5jZSA+IDU7XG5cbiAgICBpZiAoYWZ0ZXJTY3JvbGwgJiYgIWNsaWNrV2hlbkRyYWcpIHJldHVybiBmYWxzZTtcblxuICAgIHRoaXMuc2VsZWN0ZWQgPSBpZDtcbiAgICBpZiAob25TZWxlY3QpIG9uU2VsZWN0KGlkKTtcbiAgfTtcblxuICAvKiogZ2V0IGl0ZW0gdmlzaWJsZSB3aXRoIGN1cnJlbnQvcHJvdmlkZWQgdHJhbnNsYXRlICovXG4gIGdldFZpc2libGVJdGVtcyA9ICh7XG4gICAgaXRlbXMgPSB0aGlzLm1lbnVJdGVtcyxcbiAgICB3V2lkdGggPSB0aGlzLndXaWR0aCxcbiAgICBtZW51UG9zID0gdGhpcy5tZW51UG9zLFxuICAgIG1lbnVXaWR0aCA9IHRoaXMubWVudVdpZHRoLFxuICAgIG9mZnNldCA9IHRoaXMuc3RhdGUudHJhbnNsYXRlLFxuICAgIHRyYW5zbGF0ZSA9IHRoaXMuc3RhdGUudHJhbnNsYXRlIHx8IGRlZmF1bHRQcm9wcy50cmFuc2xhdGUsXG4gIH0pOiBNZW51SXRlbXMgPT4ge1xuICAgIHJldHVybiBpdGVtcy5maWx0ZXIoZWwgPT4ge1xuICAgICAgY29uc3Qge3dpZHRoOiBlbFdpZHRofSA9IGdldENsaWVudFJlY3QoZWxbMV0pO1xuICAgICAgY29uc3QgaWQgPSB0aGlzLmdldEl0ZW1JbmQoaXRlbXMsIGVsKTtcbiAgICAgIGNvbnN0IHggPSB0aGlzLmdldE9mZnNldFRvSXRlbUJ5SW5kZXgoe1xuICAgICAgICBpbmRleDogaWQsXG4gICAgICAgIG1lbnVJdGVtczogaXRlbXMsXG4gICAgICAgIHRyYW5zbGF0ZSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5lbGVtVmlzaWJsZSh7eCwgZWxXaWR0aCwgd1dpZHRoLCBtZW51UG9zLCBtZW51V2lkdGgsIG9mZnNldH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKiBjaGVjayBpZiBzaW5nbGUgbWVudSBpdGVtIHZpc2libGUgYnkgaXQncyBwb3NpdGlvbiBhbmQgd2lkdGgqL1xuICBlbGVtVmlzaWJsZSA9ICh7XG4gICAgeCxcbiAgICBvZmZzZXQgPSAwLFxuICAgIGVsV2lkdGgsXG4gICAgd1dpZHRoID0gdGhpcy53V2lkdGgsXG4gICAgbWVudVBvcyA9IHRoaXMubWVudVBvcyxcbiAgICBtZW51V2lkdGggPSB0aGlzLm1lbnVXaWR0aCxcbiAgfSk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGxlZnRFZGdlID0gbWVudVBvcyAtIDE7XG4gICAgY29uc3QgcmlnaHRFZGdlID0gd1dpZHRoIC0gKHdXaWR0aCAtIChtZW51UG9zICsgbWVudVdpZHRoKSkgKyAxO1xuICAgIGNvbnN0IHBvcyA9IHggKyBvZmZzZXQ7XG4gICAgY29uc3QgcG9zV2l0aFdpZHRoID0gcG9zICsgZWxXaWR0aDtcbiAgICByZXR1cm4gcG9zID49IGxlZnRFZGdlICYmIHBvc1dpdGhXaWR0aCA8PSByaWdodEVkZ2U7XG4gIH07XG5cbiAgLyoqIGdldCBpbmRleCBvZiBpdGVtICovXG4gIGdldEl0ZW1JbmQgPSAobWVudUl0ZW1zOiBNZW51SXRlbXMsIGl0ZW06IE1lbnVJdGVtKTogbnVtYmVyID0+IHtcbiAgICBpZiAoIW1lbnVJdGVtcyB8fCAhaXRlbSkgcmV0dXJuIDA7XG4gICAgcmV0dXJuIG1lbnVJdGVtcy5maW5kSW5kZXgoZWwgPT4gZWxbMF0gPT09IGl0ZW1bMF0pO1xuICB9O1xuXG4gIC8qKiBnZXQgbmV4dCBpdGVtIGluIGRhdGEgKi9cbiAgZ2V0TmV4dEl0ZW1JbmQgPSAobGVmdDogYm9vbGVhbiwgdmlzaWJsZUl0ZW1zOiBNZW51SXRlbXMpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHttZW51SXRlbXN9ID0gdGhpcztcbiAgICBpZiAobGVmdCkge1xuICAgICAgaWYgKCF2aXNpYmxlSXRlbXMubGVuZ3RoKSByZXR1cm4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF2aXNpYmxlSXRlbXMubGVuZ3RoKSByZXR1cm4gbWVudUl0ZW1zLmxlbmd0aDtcbiAgICB9XG4gICAgY29uc3QgaW5kID0gbGVmdFxuICAgICAgPyB0aGlzLmdldEl0ZW1JbmQobWVudUl0ZW1zLCB2aXNpYmxlSXRlbXNbMF0pIC0gMVxuICAgICAgOiB0aGlzLmdldEl0ZW1JbmQobWVudUl0ZW1zLCB2aXNpYmxlSXRlbXMuc2xpY2UoLTEpWzBdKSArIDE7XG4gICAgcmV0dXJuIGluZCA8IDAgPyAwIDogaW5kO1xuICB9O1xuXG4gIC8qKiBnZXQgb2Zmc2V0IGZyb20gc3RhcnQgdG8gaXRlbSBieSBpdCdzIGtleSAqL1xuICBnZXRPZmZzZXRUb0l0ZW1CeUtleSA9IChrZXk6IHN0cmluZyk6IG51bWJlciA9PiB7XG4gICAgbGV0IHt0cmFuc2xhdGV9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICgha2V5KSByZXR1cm4gdHJhbnNsYXRlO1xuXG4gICAgY29uc3QgaXRlbUluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXhCeUtleShrZXkpO1xuICAgIGlmIChpdGVtSW5kZXggPT09IC0xKSByZXR1cm4gdHJhbnNsYXRlO1xuXG4gICAgY29uc3Qge21lbnVQb3N9ID0gdGhpcztcbiAgICBjb25zdCB7YWxpZ25DZW50ZXJ9ID0gdGhpcy5wcm9wcztcblxuICAgIHRyYW5zbGF0ZSA9IHRoaXMuZ2V0T2Zmc2V0VG9JdGVtQnlJbmRleCh7aW5kZXg6IGl0ZW1JbmRleH0pO1xuXG4gICAgY29uc3QgdmlzaWJsZUl0ZW1zV2l0aE5ld1RyYW5zbGF0ZSA9IHRoaXMuZ2V0VmlzaWJsZUl0ZW1zKHtcbiAgICAgIG9mZnNldDogLXRyYW5zbGF0ZSxcbiAgICB9KTtcbiAgICBjb25zdCBvZmZzZXQgPSBhbGlnbkNlbnRlclxuICAgICAgPyB0aGlzLmdldENlbnRlck9mZnNldCh7aXRlbXM6IHZpc2libGVJdGVtc1dpdGhOZXdUcmFuc2xhdGV9KVxuICAgICAgOiBkZWZhdWx0UHJvcHMudHJhbnNsYXRlO1xuXG4gICAgdHJhbnNsYXRlID0gLSh0cmFuc2xhdGUgLSBtZW51UG9zIC0gb2Zmc2V0KTtcblxuICAgIGlmICh0aGlzLml0QmVmb3JlU3RhcnQodHJhbnNsYXRlKSkge1xuICAgICAgdHJhbnNsYXRlID0gdGhpcy5nZXRPZmZzZXRBdFN0YXJ0KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLml0QWZ0ZXJFbmQodHJhbnNsYXRlKSkge1xuICAgICAgdHJhbnNsYXRlID0gdGhpcy5nZXRPZmZzZXRBdEVuZCgpO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0VHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gIH07XG5cbiAgLyoqIGdldCBpbmRleCBvZiBpdGVtIGZyb20gaXQncyBrZXkgKi9cbiAgZ2V0SXRlbUluZGV4QnlLZXkgPSAoaXRlbUtleTogc3RyaW5nKTogbnVtYmVyID0+IHtcbiAgICBpZiAoIWl0ZW1LZXkpIHJldHVybiAtMTtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhLmZpbmRJbmRleChlbCA9PiBlbC5rZXkgPT09IGl0ZW1LZXkpO1xuICB9O1xuXG4gIC8qKiBvZmZzZXQgZnJvbSBzdGFydCB0byBpdGVtICovXG4gIGdldE9mZnNldFRvSXRlbUJ5SW5kZXggPSAoe1xuICAgIGluZGV4LFxuICAgIG1lbnVJdGVtcyA9IHRoaXMubWVudUl0ZW1zLFxuICAgIHRyYW5zbGF0ZSA9IHRoaXMuc3RhdGUudHJhbnNsYXRlLFxuICB9KTogbnVtYmVyID0+IHtcbiAgICBpZiAoIW1lbnVJdGVtcy5sZW5ndGgpIHJldHVybiAwO1xuICAgIGNvbnN0IGluZCA9IGluZGV4ID49IG1lbnVJdGVtcy5sZW5ndGggPyBtZW51SXRlbXMubGVuZ3RoIC0gMSA6IGluZGV4O1xuICAgIGNvbnN0IHt4fSA9IGdldENsaWVudFJlY3QobWVudUl0ZW1zW2luZF1bMV0pO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gK3ggLSB0cmFuc2xhdGU7XG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9O1xuXG4gIC8qKiBnZXQgbmV3IG9mZnNldCB2YWx1ZSB3aGVuIHNjcm9sbCByaWdodCAqL1xuICAvLyBUT0RPOiBtYXliZSByZWZhY3RvciBpdFxuICBnZXRTY3JvbGxSaWdodE9mZnNldCA9ICh2aXNpYmxlSXRlbXM6IE1lbnVJdGVtcywgaXRlbXM6IE1lbnVJdGVtcyk6IG51bWJlciA9PiB7XG4gICAgY29uc3Qge2FsaWduQ2VudGVyfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge21lbnVQb3MsIGxhc3RQYWdlT2Zmc2V0fSA9IHRoaXM7XG5cbiAgICBjb25zdCBuZXh0SXRlbSA9IHRoaXMuZ2V0TmV4dEl0ZW0oXG4gICAgICB2aXNpYmxlSXRlbXMgJiYgdmlzaWJsZUl0ZW1zLnNsaWNlKC0xKVswXVxuICAgICAgICA/IHZpc2libGVJdGVtcy5zbGljZSgtMSlbMF1bMF1cbiAgICAgICAgOiBpdGVtcy5zbGljZSgtMSlbMF1bMF0sXG4gICAgKTtcbiAgICBjb25zdCBuZXh0SXRlbUluZGV4ID0gaXRlbXMuZmluZEluZGV4KGVsID0+IGVsWzBdID09PSBuZXh0SXRlbVswXSk7XG5cbiAgICBjb25zdCBvZmZzZXRUb0l0ZW0gPSB0aGlzLmdldE9mZnNldFRvSXRlbUJ5SW5kZXgoe1xuICAgICAgaW5kZXg6IG5leHRJdGVtSW5kZXgsXG4gICAgICBtZW51SXRlbXM6IGl0ZW1zLFxuICAgIH0pO1xuICAgIGNvbnN0IG9mZnNldFRvSXRlbU9uU3RhcnQgPSBvZmZzZXRUb0l0ZW0gLSBtZW51UG9zO1xuXG4gICAgY29uc3QgbmV4dFZpc2libGVJdGVtcyA9IHRoaXMuZ2V0VmlzaWJsZUl0ZW1zKHtcbiAgICAgIGl0ZW1zLFxuICAgICAgb2Zmc2V0OiAtb2Zmc2V0VG9JdGVtT25TdGFydCxcbiAgICB9KTtcblxuICAgIGlmIChuZXh0VmlzaWJsZUl0ZW1zLmluY2x1ZGVzKGl0ZW1zLnNsaWNlKC0xKVswXSkpIHtcbiAgICAgIHJldHVybiBhbGlnbkNlbnRlclxuICAgICAgICA/IG9mZnNldFRvSXRlbU9uU3RhcnQgKyBsYXN0UGFnZU9mZnNldFxuICAgICAgICA6IG9mZnNldFRvSXRlbU9uU3RhcnQ7XG4gICAgfVxuXG4gICAgY29uc3QgY2VudGVyT2Zmc2V0ID0gKCkgPT4gdGhpcy5nZXRDZW50ZXJPZmZzZXQoe2l0ZW1zOiBuZXh0VmlzaWJsZUl0ZW1zfSk7XG5cbiAgICBjb25zdCBuZXdPZmZzZXQgPSBhbGlnbkNlbnRlclxuICAgICAgPyBvZmZzZXRUb0l0ZW1PblN0YXJ0IC0gY2VudGVyT2Zmc2V0KClcbiAgICAgIDogb2Zmc2V0VG9JdGVtT25TdGFydDtcbiAgICByZXR1cm4gbmV3T2Zmc2V0O1xuICB9O1xuXG4gIC8qKiBnZXQgbmV3IG9mZnNldCB2YWx1ZSB3aGVuIHNjcm9sbCBsZWZ0ICovXG4gIGdldFNjcm9sbExlZnRPZmZzZXQgPSAodmlzaWJsZUl0ZW1zOiBNZW51SXRlbXMsIGl0ZW1zOiBNZW51SXRlbXMpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHthbGlnbkNlbnRlcn0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHttZW51UG9zLCBtZW51V2lkdGgsIGZpcnN0UGFnZU9mZnNldH0gPSB0aGlzO1xuXG4gICAgY29uc3QgcHJldkl0ZW0gPSB0aGlzLmdldFByZXZJdGVtKFxuICAgICAgdmlzaWJsZUl0ZW1zICYmIHZpc2libGVJdGVtc1swXSA/IHZpc2libGVJdGVtc1swXVswXSA6IGl0ZW1zWzBdWzBdLFxuICAgICk7XG4gICAgY29uc3QgcHJldkl0ZW1JbmRleCA9IGl0ZW1zLmZpbmRJbmRleChlbCA9PiBlbFswXSA9PT0gcHJldkl0ZW1bMF0pO1xuXG4gICAgY29uc3Qgb2Zmc2V0VG9JdGVtID0gdGhpcy5nZXRPZmZzZXRUb0l0ZW1CeUluZGV4KHtcbiAgICAgIGluZGV4OiBwcmV2SXRlbUluZGV4LFxuICAgICAgbWVudUl0ZW1zOiBpdGVtcyxcbiAgICB9KTtcbiAgICBjb25zdCBpdGVtV2lkdGggPSB0aGlzLmdldEl0ZW1zV2lkdGgoe2l0ZW1zOiBbcHJldkl0ZW1dfSk7XG4gICAgY29uc3Qgb2Zmc2V0VG9JdGVtT25FbmQgPSBvZmZzZXRUb0l0ZW0gLSBtZW51UG9zIC0gKG1lbnVXaWR0aCAtIGl0ZW1XaWR0aCk7XG5cbiAgICBjb25zdCBuZXh0VmlzaWJsZUl0ZW1zID0gdGhpcy5nZXRWaXNpYmxlSXRlbXMoe1xuICAgICAgaXRlbXMsXG4gICAgICBvZmZzZXQ6IC1vZmZzZXRUb0l0ZW1PbkVuZCxcbiAgICB9KTtcblxuICAgIGlmIChuZXh0VmlzaWJsZUl0ZW1zLmluY2x1ZGVzKGl0ZW1zWzBdKSkge1xuICAgICAgcmV0dXJuIGFsaWduQ2VudGVyID8gLWZpcnN0UGFnZU9mZnNldCA6IDA7XG4gICAgfVxuXG4gICAgY29uc3QgY2VudGVyT2Zmc2V0ID0gKCkgPT4gdGhpcy5nZXRDZW50ZXJPZmZzZXQoe2l0ZW1zOiBuZXh0VmlzaWJsZUl0ZW1zfSk7XG5cbiAgICBjb25zdCBuZXdPZmZzZXQgPSBhbGlnbkNlbnRlclxuICAgICAgPyBvZmZzZXRUb0l0ZW1PbkVuZCArIGNlbnRlck9mZnNldCgpXG4gICAgICA6IG9mZnNldFRvSXRlbU9uRW5kO1xuICAgIHJldHVybiBuZXdPZmZzZXQ7XG4gIH07XG5cbiAgLyoqIGdldCBuZXh0IGl0ZW0gYnkga2V5ICovXG4gIGdldE5leHRJdGVtID0gKGtleTogc3RyaW5nKTogTWVudUl0ZW0gPT4ge1xuICAgIGNvbnN0IHttZW51SXRlbXN9ID0gdGhpcztcbiAgICBjb25zdCBpdGVtSW5kZXggPSBtZW51SXRlbXMuZmluZEluZGV4KGVsID0+IGVsWzBdID09PSBrZXkpO1xuICAgIGNvbnN0IG5leHRJdGVtSW5kZXggPSBpdGVtSW5kZXggKyAxO1xuICAgIGNvbnN0IG5leHRJdGVtID0gbWVudUl0ZW1zW25leHRJdGVtSW5kZXhdIHx8IG1lbnVJdGVtcy5zbGljZSgtMSlbMF07XG4gICAgcmV0dXJuIG5leHRJdGVtO1xuICB9O1xuXG4gIC8qKiBnZXQgcHJyZXYgaXRlbSBieSBrZXkgKi9cbiAgZ2V0UHJldkl0ZW0gPSAoa2V5OiBzdHJpbmcpOiBNZW51SXRlbSA9PiB7XG4gICAgY29uc3Qge21lbnVJdGVtc30gPSB0aGlzO1xuICAgIGNvbnN0IGl0ZW1JbmRleCA9IG1lbnVJdGVtcy5maW5kSW5kZXgoZWwgPT4gZWxbMF0gPT09IGtleSk7XG4gICAgY29uc3QgcHJldkl0ZW1JbmRleCA9IGl0ZW1JbmRleCAtIDE7XG4gICAgY29uc3QgcHJldkl0ZW0gPSBtZW51SXRlbXNbcHJldkl0ZW1JbmRleF0gfHwgbWVudUl0ZW1zWzBdO1xuICAgIHJldHVybiBwcmV2SXRlbTtcbiAgfTtcblxuICAvKiogZ2V0IG5ldyBvZmZzZXQgdmFsdWUgd2hlbiBzY3JvbGwgbGVmdC9yaWdodCAqL1xuICBnZXRPZmZzZXQgPSAobGVmdDogYm9vbGVhbik6IG51bWJlciA9PiB7XG4gICAgY29uc3Qge21lbnVJdGVtczogaXRlbXN9ID0gdGhpcztcbiAgICBjb25zdCB2aXNpYmxlSXRlbXMgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7aXRlbXN9KTtcbiAgICBjb25zdCBuZXdPZmZzZXQgPSBsZWZ0XG4gICAgICA/IHRoaXMuZ2V0U2Nyb2xsTGVmdE9mZnNldCh2aXNpYmxlSXRlbXMsIGl0ZW1zKVxuICAgICAgOiB0aGlzLmdldFNjcm9sbFJpZ2h0T2Zmc2V0KHZpc2libGVJdGVtcywgaXRlbXMpO1xuICAgIHJldHVybiBuZXdPZmZzZXQ7XG4gIH07XG5cbiAgLyoqIG9mZnNldCBmcm9tIDAgdG8gZmlyc3QgbWVudSBpdGVtIHdoZW4gc2Nyb2xsLFxuICAgKiBuZWVkIHBhc3MgaXRlbXMgdmlzaWJsZSBvbiBzY3JlZW5cbiAgKi9cbiAgZ2V0Q2VudGVyT2Zmc2V0ID0gKFxuICAgIHtpdGVtcyA9IHRoaXMubWVudUl0ZW1zLCBtZW51V2lkdGggPSB0aGlzLm1lbnVXaWR0aH1cbiAgICA6IHtpdGVtcz86IE1lbnVJdGVtcywgbWVudVdpZHRoPzogbnVtYmVyfSk6IG51bWJlciA9PiB7XG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCBpdGVtc1dpZHRoID0gdGhpcy5nZXRJdGVtc1dpZHRoKHtpdGVtc30pO1xuICAgIGNvbnN0IG9mZnNldCA9IChtZW51V2lkdGggLSBpdGVtc1dpZHRoKSAvIDI7XG4gICAgcmV0dXJuIGZvcm1hdFRyYW5zbGF0ZShvZmZzZXQpO1xuICB9O1xuXG4gIC8qKiBtb3VzZSB3aGVlbCBoYW5kbGVyICovXG4gIGhhbmRsZVdoZWVsID0gKGU6IFdoZWVsRXZlbnQpOiBWb2lkID0+IHtcbiAgICBjb25zdCB7d2hlZWx9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXdoZWVsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGUuZGVsdGFZIDwgMCkge1xuICAgICAgdGhpcy5oYW5kbGVBcnJvd0NsaWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlQXJyb3dDbGljayhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKiBvZmZzZXQgYXQgc3RhcnQgKi9cbiAgZ2V0T2Zmc2V0QXRTdGFydCA9ICgpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHtmaXJzdFBhZ2VPZmZzZXR9ID0gdGhpcztcbiAgICBjb25zdCB7YWxpZ25DZW50ZXJ9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gYWxpZ25DZW50ZXIgPyBmaXJzdFBhZ2VPZmZzZXQgOiBkZWZhdWx0UHJvcHMudHJhbnNsYXRlO1xuICB9O1xuXG4gIC8qKiBvZmZzZXQgYXQgZW5kICovXG4gIGdldE9mZnNldEF0RW5kID0gKCk6IG51bWJlciA9PiB7XG4gICAgY29uc3Qge2FsaWduQ2VudGVyfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge2FsbEl0ZW1zV2lkdGgsIG1lbnVXaWR0aCwgbGFzdFBhZ2VPZmZzZXR9ID0gdGhpcztcbiAgICBjb25zdCBvZmZzZXQgPSBhbGxJdGVtc1dpZHRoIC0gbWVudVdpZHRoO1xuICAgIHJldHVybiBhbGlnbkNlbnRlciA/IC1vZmZzZXQgLSBsYXN0UGFnZU9mZnNldCA6IC1vZmZzZXQ7XG4gIH07XG5cblxuICAvKiogY2xpY2sgcmlnaHQgYXJyb3cgKi9cbiAgaGFuZGxlQXJyb3dDbGlja1JpZ2h0ID0gKCk6IFZvaWQgPT4ge1xuICAgIHRoaXMuaGFuZGxlQXJyb3dDbGljayhmYWxzZSk7XG4gIH07XG5cbiAgLyoqIGNsaWNrIGFycm93L3Njcm9sbCAqL1xuICBoYW5kbGVBcnJvd0NsaWNrID0gKGxlZnQgPSB0cnVlKTogVm9pZCA9PiB7XG4gICAgY29uc3Qge2FsaWduQ2VudGVyfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge2FsbEl0ZW1zV2lkdGgsIG1lbnVXaWR0aH0gPSB0aGlzO1xuXG4gICAgaWYgKCFhbGlnbkNlbnRlciAmJiAhbGVmdCAmJiBhbGxJdGVtc1dpZHRoIDwgbWVudVdpZHRoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5nZXRPZmZzZXQobGVmdCk7XG4gICAgbGV0IHRyYW5zbCA9IC1vZmZzZXQ7XG5cbiAgICBpZiAobGVmdCAmJiB0aGlzLml0QmVmb3JlU3RhcnQodHJhbnNsKSkge1xuICAgICAgdHJhbnNsID0gdGhpcy5nZXRPZmZzZXRBdFN0YXJ0KCk7XG4gICAgfVxuICAgIGlmICghbGVmdCAmJiB0aGlzLml0QWZ0ZXJFbmQodHJhbnNsKSkge1xuICAgICAgdHJhbnNsID0gdGhpcy5nZXRPZmZzZXRBdEVuZCgpO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1RyYW5zbGF0ZSA9IGZvcm1hdFRyYW5zbGF0ZSh0cmFuc2wpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0cmFuc2xhdGU6IG5ld1RyYW5zbGF0ZSxcbiAgICAgIHhQb2ludDogZGVmYXVsdFByb3BzLnhQb2ludCxcbiAgICAgIHN0YXJ0RHJhZ1RyYW5zbGF0ZTogMCxcbiAgICAgIHhEcmFnZ2VkRGlzdGFuY2U6IDAsXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqIGNoZWNrIGlmIHBvc2l0aW9uIGJlZm9yZSBmaXJzdCBlbGVtZW50ICovXG4gIGl0QmVmb3JlU3RhcnQgPSAodHJhbnM6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHthbGlnbkNlbnRlcn0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHttZW51V2lkdGgsIGFsbEl0ZW1zV2lkdGgsIGZpcnN0UGFnZU9mZnNldH0gPSB0aGlzO1xuICAgIGlmIChhbGxJdGVtc1dpZHRoIDwgbWVudVdpZHRoKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gYWxpZ25DZW50ZXJcbiAgICAgID8gdHJhbnMgPiBmaXJzdFBhZ2VPZmZzZXRcbiAgICAgIDogdHJhbnMgPiBkZWZhdWx0UHJvcHMudHJhbnNsYXRlO1xuICB9O1xuICAvKiogY2hlY2sgaWYgcG9zaXRpb24gYWZ0ZXIgbGFzdCBlbGVtZW50ICovXG4gIGl0QWZ0ZXJFbmQgPSAodHJhbnM6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHthbGlnbkNlbnRlcn0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHttZW51V2lkdGgsIGFsbEl0ZW1zV2lkdGgsIGxhc3RQYWdlT2Zmc2V0fSA9IHRoaXM7XG4gICAgaWYgKGFsbEl0ZW1zV2lkdGggPCBtZW51V2lkdGgpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBhbGlnbkNlbnRlclxuICAgICAgPyB0cmFucyA8IGRlZmF1bHRQcm9wcy50cmFuc2xhdGUgJiZcbiAgICAgICAgICBNYXRoLmFicyh0cmFucykgPiBhbGxJdGVtc1dpZHRoIC0gbWVudVdpZHRoICsgbGFzdFBhZ2VPZmZzZXRcbiAgICAgIDogdHJhbnMgPCBkZWZhdWx0UHJvcHMudHJhbnNsYXRlICYmXG4gICAgICAgICAgTWF0aC5hYnModHJhbnMpID4gYWxsSXRlbXNXaWR0aCAtIG1lbnVXaWR0aDtcbiAgfTtcblxuICAvKiogZ2V0IGNvb3JkcyBmcm9tIG1vdXNlIGV2ZW50ICovXG4gIGdldFBvaW50ID0gKGV2OiBSZWFjdC5Nb3VzZUV2ZW50fFJlYWN0LlRvdWNoRXZlbnR8RXZlbnQpOiBudW1iZXIgPT4ge1xuICAgIGlmICgndG91Y2hlcycgaW4gZXYpIHtcbiAgICAgIHJldHVybiBldi50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgfSBlbHNlIGlmICgnY2xpZW50WCcgaW4gZXYpIHtcbiAgICAgIHJldHVybiBldi5jbGllbnRYO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuICB9O1xuXG4gIC8qKiBldmVudCBoYW5kbGVyIHdoZW4gc3RhcnQgZHJhZyBhbmQgbW91c2UgZG93biAgKi9cbiAgaGFuZGxlRHJhZ1N0YXJ0ID0gKGV2OiBSZWFjdC5Nb3VzZUV2ZW50fFJlYWN0LlRvdWNoRXZlbnQpOiBWb2lkID0+IHtcbiAgICAvLyAxIGxlZnQgYnV0dG9uLCAyIHJpZ2h0IGJ1dHRvblxuICAgIGlmIChldiAmJiAnYnV0dG9ucycgaW4gZXYgJiYgZXYuYnV0dG9ucyA9PT0gMikgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IHtkcmFnZ2luZzogZHJhZ2dpbmdFbmFibGV9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWRyYWdnaW5nRW5hYmxlKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3Qge3RyYW5zbGF0ZTogc3RhcnREcmFnVHJhbnNsYXRlfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkcmFnZ2luZzogdHJ1ZSxcbiAgICAgIHhQb2ludDogMCxcbiAgICAgIHN0YXJ0RHJhZ1RyYW5zbGF0ZSxcbiAgICAgIHhEcmFnZ2VkRGlzdGFuY2U6IDAsXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqIGRyYWcgZXZlbnQgaGFuZGxlciAqL1xuICBoYW5kbGVEcmFnID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnR8UmVhY3QuVG91Y2hFdmVudHxFdmVudCk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHtkcmFnZ2luZzogZHJhZ2dpbmdFbmFibGV9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7dHJhbnNsYXRlLCBkcmFnZ2luZywgeFBvaW50LCB4RHJhZ2dlZERpc3RhbmNlfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKCFkcmFnZ2luZ0VuYWJsZSB8fCAhZHJhZ2dpbmcpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5nZXRQb2ludChlKTtcbiAgICBjb25zdCBkaWZmID1cbiAgICAgIHhQb2ludCA9PT0gZGVmYXVsdFByb3BzLnhQb2ludCA/IGRlZmF1bHRQcm9wcy54UG9pbnQgOiB4UG9pbnQgLSBwb2ludDtcbiAgICBsZXQgcmVzdWx0ID0gdHJhbnNsYXRlIC0gZGlmZjtcblxuICAgIC8vIGRvbid0IGxldCBzY3JvbGwgb3ZlciBzdGFydCBhbmQgZW5kXG4gICAgaWYgKHRoaXMuaXRCZWZvcmVTdGFydChyZXN1bHQpKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQgLSBNYXRoLmFicyhkaWZmKSAvIDI7XG4gICAgfVxuICAgIGlmICh0aGlzLml0QWZ0ZXJFbmQocmVzdWx0KSkge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgTWF0aC5hYnMoZGlmZikgLyAyO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1RyYW5zbGF0ZSA9IGZvcm1hdFRyYW5zbGF0ZShyZXN1bHQpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB4UG9pbnQ6IHBvaW50LFxuICAgICAgdHJhbnNsYXRlOiBuZXdUcmFuc2xhdGUsXG4gICAgICB4RHJhZ2dlZERpc3RhbmNlOiB4RHJhZ2dlZERpc3RhbmNlICsgTWF0aC5hYnMoZGlmZiksXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqIGV2ZW50IGhhbmRsZXIgd2hlbiBkcmFnIGFuZCBtb3VzZSB1cCAgKi9cbiAgaGFuZGxlRHJhZ1N0b3AgPSAoZTogUmVhY3QuTW91c2VFdmVudHxSZWFjdC5Ub3VjaEV2ZW50fEV2ZW50KTogVm9pZCA9PiB7XG4gICAgY29uc3Qge2FsbEl0ZW1zV2lkdGgsIG1lbnVXaWR0aCwgZmlyc3RQYWdlT2Zmc2V0LCBsYXN0UGFnZU9mZnNldH0gPSB0aGlzO1xuICAgIGxldCB7XG4gICAgICBkcmFnZ2luZyxcbiAgICAgIHhQb2ludCA9IHRoaXMuZ2V0UG9pbnQoZSksXG4gICAgICB0cmFuc2xhdGUsXG4gICAgICBzdGFydERyYWdUcmFuc2xhdGUsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge2RyYWdnaW5nOiBkcmFnZ2luZ0VuYWJsZSwgYWxpZ25DZW50ZXJ9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWRyYWdnaW5nRW5hYmxlIHx8ICFkcmFnZ2luZykgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IG5ld1RyYW5zbGF0ZSA9IHRyYW5zbGF0ZTtcblxuICAgIGlmICh0aGlzLml0QmVmb3JlU3RhcnQodHJhbnNsYXRlKSkge1xuICAgICAgbmV3VHJhbnNsYXRlID0gYWxpZ25DZW50ZXIgPyBmaXJzdFBhZ2VPZmZzZXQgOiBkZWZhdWx0UHJvcHMudHJhbnNsYXRlO1xuICAgICAgeFBvaW50ID0gZGVmYXVsdFByb3BzLnhQb2ludDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXRBZnRlckVuZCh0cmFuc2xhdGUpKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBhbGxJdGVtc1dpZHRoIC0gbWVudVdpZHRoO1xuICAgICAgbmV3VHJhbnNsYXRlID0gYWxpZ25DZW50ZXIgPyAtb2Zmc2V0IC0gbGFzdFBhZ2VPZmZzZXQgOiAtb2Zmc2V0O1xuICAgICAgeFBvaW50ID0gZGVmYXVsdFByb3BzLnhQb2ludDtcbiAgICB9XG5cbiAgICBpZiAoIWFsaWduQ2VudGVyICYmIG1lbnVXaWR0aCA+PSBhbGxJdGVtc1dpZHRoKSB7XG4gICAgICBuZXdUcmFuc2xhdGUgPSBkZWZhdWx0UHJvcHMudHJhbnNsYXRlO1xuICAgICAgeFBvaW50ID0gZGVmYXVsdFByb3BzLnhQb2ludDtcbiAgICB9XG5cbiAgICBuZXdUcmFuc2xhdGUgPSBmb3JtYXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgeFBvaW50LFxuICAgICAgICB0cmFuc2xhdGU6IG5ld1RyYW5zbGF0ZSxcbiAgICAgIH0sXG4gICAgICAoKSA9PlxuICAgICAgICB0aGlzLm9uVXBkYXRlKHtcbiAgICAgICAgICB0cmFuc2xhdGU6IG5ld1RyYW5zbGF0ZSxcbiAgICAgICAgICB0cmFuc2xhdGVPbGQ6IHN0YXJ0RHJhZ1RyYW5zbGF0ZSxcbiAgICAgICAgfSksXG4gICAgKTtcbiAgfTtcblxuICAvKiogY2hlY2sgaWYgbm8gbmVlZCBzaG93IGFycm93cyAqL1xuICBpc0Fycm93c1Zpc2libGUgPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgYWxsSXRlbXNXaWR0aCxcbiAgICAgIG1lbnVXaWR0aCxcbiAgICAgIHByb3BzOiB7aGlkZUFycm93c30sXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgaGlkZSA9IEJvb2xlYW4oaGlkZUFycm93cyAmJiBhbGxJdGVtc1dpZHRoIDw9IG1lbnVXaWR0aCk7XG4gICAgcmV0dXJuICFoaWRlO1xuICB9O1xuXG4gIC8qKiBjYiBmb3IgcG9zaXRpb24gdXBkYXRlICovXG4gIG9uVXBkYXRlID0gKHtcbiAgICB0cmFuc2xhdGUgPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZSxcbiAgICB0cmFuc2xhdGVPbGQgPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZSxcbiAgfSA6IHtcbiAgICB0cmFuc2xhdGU/OiBudW1iZXIsXG4gICAgdHJhbnNsYXRlT2xkPzogbnVtYmVyXG4gIH0pOiBWb2lkID0+IHtcbiAgICBjb25zdCB7b25VcGRhdGV9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7bGFzdFRyYW5zbGF0ZVVwZGF0ZX0gPSB0aGlzO1xuICAgIGlmIChcbiAgICAgIG9uVXBkYXRlICYmXG4gICAgICB0cmFuc2xhdGUgIT09IHRyYW5zbGF0ZU9sZCAmJlxuICAgICAgdHJhbnNsYXRlICE9PSBsYXN0VHJhbnNsYXRlVXBkYXRlXG4gICAgKSB7XG4gICAgICB0aGlzLmxhc3RUcmFuc2xhdGVVcGRhdGUgPSB0cmFuc2xhdGU7XG4gICAgICBvblVwZGF0ZSh7dHJhbnNsYXRlfSk7XG4gICAgfVxuICB9O1xuXG4gIHB1YmxpYyByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlfG51bGwge1xuICAgIGNvbnN0IHtcbiAgICAgIGFycm93Q2xhc3MsXG4gICAgICBhcnJvd0Rpc2FibGVkQ2xhc3MsXG4gICAgICBhcnJvd0xlZnQsXG4gICAgICBhcnJvd1JpZ2h0LFxuICAgICAgZGF0YSxcbiAgICAgIGlubmVyV3JhcHBlckNsYXNzLFxuICAgICAgaXRlbUNsYXNzLFxuICAgICAgaXRlbUNsYXNzQWN0aXZlLFxuICAgICAgaGlkZUFycm93cyxcbiAgICAgIG1lbnVTdHlsZSxcbiAgICAgIG1lbnVDbGFzcyxcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICB3cmFwcGVyQ2xhc3MsXG4gICAgICB3cmFwcGVyU3R5bGUsXG4gICAgICBmb3J3YXJkQ2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNsYXRlLFxuICAgICAgZHJhZ2dpbmcsXG4gICAgICBsZWZ0QXJyb3dWaXNpYmxlLFxuICAgICAgcmlnaHRBcnJvd1Zpc2libGUsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge3NlbGVjdGVkLCBtb3VudGVkfSA9IHRoaXM7XG5cbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGFycm93c1Zpc2libGUgPSBtb3VudGVkID8gdGhpcy5pc0Fycm93c1Zpc2libGUoKSA6IHRydWU7XG5cbiAgICBjb25zdCBtZW51U3R5bGVzID0gey4uLmRlZmF1bHRNZW51U3R5bGUsIC4uLm1lbnVTdHlsZX07XG4gICAgY29uc3Qgd3JhcHBlclN0eWxlcyA9IHsuLi5kZWZhdWx0V3JhcHBlclN0eWxlLCAuLi53cmFwcGVyU3R5bGV9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttZW51Q2xhc3N9IHN0eWxlPXttZW51U3R5bGVzfSBvbldoZWVsPXt0aGlzLmhhbmRsZVdoZWVsfT5cbiAgICAgICAge2Fycm93TGVmdCAmJiAoXG4gICAgICAgICAgPEFycm93V3JhcHBlclxuICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd0NsYXNzfVxuICAgICAgICAgICAgaXNEaXNhYmxlZD17IWFycm93c1Zpc2libGUgfHwgIWxlZnRBcnJvd1Zpc2libGV9XG4gICAgICAgICAgICBoaWRlQXJyb3dzPXtoaWRlQXJyb3dzfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBcnJvd0NsaWNrfVxuICAgICAgICAgICAgZGlzYWJsZWRDbGFzcz17YXJyb3dEaXNhYmxlZENsYXNzfVxuICAgICAgICAgICAgZm9yd2FyZENsaWNrPXtmb3J3YXJkQ2xpY2t9PlxuICAgICAgICAgICAge2Fycm93TGVmdH1cbiAgICAgICAgICA8L0Fycm93V3JhcHBlcj5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXt3cmFwcGVyQ2xhc3N9XG4gICAgICAgICAgc3R5bGU9e3dyYXBwZXJTdHlsZXN9XG4gICAgICAgICAgcmVmPXt0aGlzLnNldFdyYXBwZXJSZWZ9XG4gICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlRHJhZ1N0YXJ0fVxuICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5oYW5kbGVEcmFnU3RhcnR9XG4gICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5oYW5kbGVEcmFnU3RvcH1cbiAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5oYW5kbGVEcmFnfVxuICAgICAgICAgIG9uVG91Y2hNb3ZlPXt0aGlzLmhhbmRsZURyYWd9PlxuICAgICAgICAgIDxJbm5lcldyYXBwZXJcbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICB0cmFuc2xhdGU9e3RyYW5zbGF0ZX1cbiAgICAgICAgICAgIGRyYWdnaW5nPXtkcmFnZ2luZ31cbiAgICAgICAgICAgIG1vdW50ZWQ9e21vdW50ZWR9XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXttb3VudGVkID8gdHJhbnNpdGlvbiA6IDB9XG4gICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICBzZXRSZWY9e3RoaXMuc2V0UmVmfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkl0ZW1DbGlja31cbiAgICAgICAgICAgIGlubmVyV3JhcHBlckNsYXNzPXtpbm5lcldyYXBwZXJDbGFzc31cbiAgICAgICAgICAgIGl0ZW1DbGFzcz17aXRlbUNsYXNzfVxuICAgICAgICAgICAgaXRlbUNsYXNzQWN0aXZlPXtpdGVtQ2xhc3NBY3RpdmV9XG4gICAgICAgICAgICBmb3J3YXJkQ2xpY2s9e2ZvcndhcmRDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7YXJyb3dSaWdodCAmJiAoXG4gICAgICAgICAgPEFycm93V3JhcHBlclxuICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd0NsYXNzfVxuICAgICAgICAgICAgaXNEaXNhYmxlZD17IWFycm93c1Zpc2libGUgfHwgIXJpZ2h0QXJyb3dWaXNpYmxlfVxuICAgICAgICAgICAgaGlkZUFycm93cz17aGlkZUFycm93c31cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXJyb3dDbGlja1JpZ2h0fVxuICAgICAgICAgICAgZGlzYWJsZWRDbGFzcz17YXJyb3dEaXNhYmxlZENsYXNzfVxuICAgICAgICAgICAgZm9yd2FyZENsaWNrPXtmb3J3YXJkQ2xpY2t9PlxuICAgICAgICAgICAge2Fycm93UmlnaHR9XG4gICAgICAgICAgPC9BcnJvd1dyYXBwZXI+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbE1lbnU7XG4iXSwic291cmNlUm9vdCI6IiJ9

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

var formatTranslate = function formatTranslate(val) {
  return +(+val).toFixed(3);
};

exports.formatTranslate = formatTranslate;

var translateIsValid = function translateIsValid(val) {
  return typeof val === 'number' && !isNaN(+val);
};

exports.translateIsValid = translateIsValid;

var validateTranslate = function validateTranslate(value, defaultValue) {
  return translateIsValid(value) ? formatTranslate(value) : formatTranslate(defaultValue);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUvc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLElBQU0sY0FBYyxHQUFHLFNBQWpCLGNBQWlCLENBQUMsR0FBRCxFQUFTO0FBQUssU0FBQSxHQUFHLEtBQUssU0FBUixJQUFxQixHQUFHLEtBQXhCLElBQUE7QUFBaUMsQ0FBdEU7O0FBOENFLE9BQUEsQ0FBQSxjQUFBLEdBQUEsY0FBQTs7QUE1Q0YsSUFBTSxhQUFhLEdBQUcsU0FBaEIsYUFBZ0IsQ0FBQyxJQUFELEVBQVU7QUFDOUIsTUFBSSxDQUFDLElBQUQsSUFBUyxDQUFDLElBQUksQ0FBQyxxQkFBZixJQUF3QyxPQUFPLElBQUksQ0FBQyxxQkFBWixLQUFzQyxVQUFsRixFQUE4RixPQUFPO0FBQUMsSUFBQSxLQUFLLEVBQUUsQ0FBUjtBQUFXLElBQUEsQ0FBQyxFQUFFO0FBQWQsR0FBUDs7QUFFeEYsTUFBQSxFQUFBLEdBQUEsSUFBQSxDQUFBLHFCQUFBLEVBQUE7QUFBQSxNQUFDLEVBQUEsR0FBQSxFQUFBLENBQUEsSUFBRDtBQUFBLE1BQUMsSUFBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsRUFBRDtBQUFBLE1BQVcsRUFBQSxHQUFBLEVBQUEsQ0FBQSxLQUFYO0FBQUEsTUFBVyxLQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxFQUFYOztBQUNOLFNBQU87QUFBQyxJQUFBLEtBQUssRUFBQSxLQUFOO0FBQVEsSUFBQSxDQUFDLEVBQUUsQ0FBQztBQUFaLEdBQVA7QUFDRCxDQUxEOztBQTZDRSxPQUFBLENBQUEsYUFBQSxHQUFBLGFBQUE7O0FBcENGLElBQU0sZUFBZSxHQUFHLFNBQWxCLGVBQWtCLENBQUMsR0FBRCxFQUFtQjtBQUFhLFNBQUEsQ0FBQyxDQUFDLENBQUMsR0FBRixFQUFPLE9BQVAsQ0FBRCxDQUFDLENBQUQ7QUFBa0IsQ0FBMUU7O0FBa0NFLE9BQUEsQ0FBQSxlQUFBLEdBQUEsZUFBQTs7QUFoQ0YsSUFBTSxnQkFBZ0IsR0FBRyxTQUFuQixnQkFBbUIsQ0FBQyxHQUFELEVBQVM7QUFDaEMsU0FBQSxPQUFPLEdBQVAsS0FBZSxRQUFmLElBQTJCLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRixDQUFqQztBQUF1QyxDQUR6Qzs7QUFxQ0UsT0FBQSxDQUFBLGdCQUFBLEdBQUEsZ0JBQUE7O0FBbENGLElBQU0saUJBQWlCLEdBQUcsU0FBcEIsaUJBQW9CLENBQUMsS0FBRCxFQUFhLFlBQWIsRUFBaUM7QUFDekQsU0FBQSxnQkFBZ0IsQ0FBQyxLQUFELENBQWhCLEdBQ0ksZUFBZSxDQUFDLEtBQUQsQ0FEbkIsR0FFSSxlQUFlLENBQUMsWUFBRCxDQUZuQjtBQUVpQyxDQUhuQzs7QUFpQ0UsT0FBQSxDQUFBLGlCQUFBLEdBQUEsaUJBQUE7O0FBMUJGLElBQU0sdUJBQXVCLEdBQUcsU0FBMUIsdUJBQTBCLEdBQUE7QUFDOUIsTUFBSSxnQkFBZ0IsR0FBRyxLQUF2Qjs7QUFFQSxNQUFJO0FBQ0YsUUFBSSxPQUFPLEdBQUc7QUFDWixVQUFJLE9BQUosR0FBVztBQUdULFFBQUEsZ0JBQWdCLEdBQUcsSUFBbkI7QUFDQSxlQUFPLEtBQVA7QUFDRDs7QUFOVyxLQUFkO0FBU0EsSUFBQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IseUJBQXhCLEVBQW1ELE9BQW5ELEVBQW1FLE9BQW5FO0FBQ0EsSUFBQSxNQUFNLENBQUMsbUJBQVAsQ0FBMkIseUJBQTNCLEVBQXNELE9BQXRELEVBQXNFLE9BQXRFO0FBQ0QsR0FaRCxDQVlFLE9BQU8sR0FBUCxFQUFZO0FBQ1osSUFBQSxnQkFBZ0IsR0FBRyxLQUFuQjtBQUNEOztBQUNELFNBQU8sZ0JBQVA7QUFDRCxDQW5CRDs7QUF5QkUsT0FBQSxDQUFBLHVCQUFBLEdBQUEsdUJBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWYgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG4vKiogY2hlY2sgaWYgdmFsdWUgbm90IGVtcHR5ICovXG5jb25zdCBub3RVbmRlZk9yTnVsbCA9ICh2YWw6IGFueSkgPT4gdmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsO1xuLyoqIGdldENsaWVudFJlY3QgKi9cbmNvbnN0IGdldENsaWVudFJlY3QgPSAoZWxlbTogUmVmKToge3dpZHRoOiBudW1iZXIsIHg6IG51bWJlcn0gPT4ge1xuICBpZiAoIWVsZW0gfHwgIWVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0IHx8IHR5cGVvZiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHt3aWR0aDogMCwgeDogMH07XG5cbiAgY29uc3Qge2xlZnQgPSAwLCB3aWR0aCA9IDB9ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHt3aWR0aCwgeDogK2xlZnR9O1xufTtcblxuLyoqIGZvcm1hdCB0cmFuc2xhdGUgdmFsdWUgKi9cbi8vVE9ETzogRG8gaSByZWFsbHkgbmVlZCB0aGlzP1xuY29uc3QgZm9ybWF0VHJhbnNsYXRlID0gKHZhbDogbnVtYmVyfHN0cmluZyk6IG51bWJlciA9PiArKCt2YWwpLnRvRml4ZWQoMyk7XG4vKiogY2hlY2sgaWYgdHJhbnNsYXRlIGlzIHZhbGlkICovXG5jb25zdCB0cmFuc2xhdGVJc1ZhbGlkID0gKHZhbDogYW55KTogYm9vbGVhbiA9PlxuICB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyAmJiAhaXNOYU4oK3ZhbCk7XG4vKiogcGFzcyB0cmFuc2xhdGUgdmFsdWUgYW5kIGRlZmF1bHQsIHZhbGlkIC0gcmV0dXJuIGZvcm1hdHRlZCB2YWx1ZSwgbm90IHZhbGlkIC0gcmV0dXJuIGRlZmF1bHQgKi9cbmNvbnN0IHZhbGlkYXRlVHJhbnNsYXRlID0gKHZhbHVlOiBhbnksIGRlZmF1bHRWYWx1ZTogbnVtYmVyKTogbnVtYmVyID0+XG4gIHRyYW5zbGF0ZUlzVmFsaWQodmFsdWUpXG4gICAgPyBmb3JtYXRUcmFuc2xhdGUodmFsdWUpXG4gICAgOiBmb3JtYXRUcmFuc2xhdGUoZGVmYXVsdFZhbHVlKTtcblxuLyoqIHRlc3QgcGFzc2l2ZSBldmVudCBzdXBwb3J0LCBmb3IgcGVyZm9ybWFuY2UgKi9cbi8vIG1heWJlIHVzZSBzZXBhcmF0ZSBwYWNrYWdlIGRldGVjdC1wYXNzaXZlLWV2ZW50c1xuY29uc3QgdGVzdFBhc3NpdmVFdmVudFN1cHBvcnQgPSAoKTogYm9vbGVhbiA9PiB7XG4gIGxldCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2U7XG5cbiAgdHJ5IHtcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIGdldCBwYXNzaXZlKCkge1xuICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGJyb3dzZXJcbiAgICAgICAgLy8gYXR0ZW1wdHMgdG8gYWNjZXNzIHRoZSBwYXNzaXZlIHByb3BlcnR5LlxuICAgICAgICBwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlRXZlbnRTdXBwb3J0Jywgb3B0aW9ucyBhcyBhbnksIG9wdGlvbnMpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCcsIG9wdGlvbnMgYXMgYW55LCBvcHRpb25zIGFzIGFueSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZDtcbn07XG5cbmV4cG9ydCB7XG4gIGZvcm1hdFRyYW5zbGF0ZSxcbiAgbm90VW5kZWZPck51bGwsXG4gIGdldENsaWVudFJlY3QsXG4gIHRlc3RQYXNzaXZlRXZlbnRTdXBwb3J0LFxuICB2YWxpZGF0ZVRyYW5zbGF0ZSxcbiAgdHJhbnNsYXRlSXNWYWxpZCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9

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

    _this.setRef = function (key, value) {
      var setRef = _this.props.setRef;
      _this.ref[key] = value;
      setRef(_this.ref);
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
        return _this.setRef('menuInner', inst);
      }
    }, items.map(function (Item, i) {
      return react_1.default.createElement("div", {
        ref: function ref(inst) {
          return _this.setRef("menuitem-" + i, inst);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUvc3JjL3dyYXBwZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUEsT0FBQSxHQUFBLGVBQUEsQ0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLENBQUE7O0FBQ0EsSUFBQSxnQkFBQSxHQUFBLE9BQUEsQ0FBQSxrQkFBQSxDQUFBOztBQVdDO0FBRUQsSUFBTSxpQkFBaUIsR0FBRztBQUN4QixFQUFBLGFBQWEsRUFBRSxnQkFBQSxDQUFBLFlBQUEsQ0FBYTtBQURKLENBQTFCOztBQUlBLElBQUEsWUFBQSxHQUFBLFVBQUEsTUFBQSxFQUFBO0FBQWtDLEVBQUEsU0FBQSxDQUFBLFlBQUEsRUFBQSxNQUFBLENBQUE7O0FBQWxDLFdBQUEsWUFBQSxHQUFBOztBQWdDQzs7QUE5QlEsRUFBQSxZQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsR0FBUCxZQUFBO0FBQ1EsUUFBQSxFQUFBLEdBQUEsS0FBQSxLQUFBO0FBQUEsUUFDSixVQUFBLEdBQUEsRUFBQSxDQUFBLFVBREk7QUFBQSxRQUVKLE9BQUEsR0FBQSxFQUFBLENBQUEsU0FGSTtBQUFBLFFBR0osYUFBQSxHQUFBLEVBQUEsQ0FBQSxhQUhJO0FBQUEsUUFJSixVQUFBLEdBQUEsRUFBQSxDQUFBLFVBSkk7QUFBQSxRQUtKLFlBQUEsR0FBQSxFQUFBLENBQUEsWUFMSTtBQUFBLFFBTUosUUFBQSxHQUFBLEVBQUEsQ0FBQSxPQU5JO0FBQUEsUUFPSixRQUFBLEdBQUEsRUFBQSxDQUFBLFFBUEk7QUFTTixRQUFNLGlCQUFpQixHQUFHLFVBQVUsR0FDaEMsYUFBYSxJQUFPLE9BQU8sR0FBQSxZQURLLEdBRWhDLEVBRko7QUFHQSxRQUFNLFNBQVMsR0FBTSxPQUFPLEdBQUEsR0FBUCxJQUFXLFVBQVUsR0FBRyxpQkFBSCxHQUF1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LEVBQUUsS0FBSSxDQUFDLG1CQUFMLENBQXlCLElBQUksQ0FBQyxHQUE5QixFQUFtQyxJQUFuQyxDQVRYO0FBVUUsUUFBQSxRQUFRLEVBQUUsQ0FWWjtBQVdFLFFBQUEsSUFBSSxFQUFDO0FBWFAsT0FBQSxFQURzQixJQUN0QixDQURzQjtBQWdCdkIsS0FoQkEsQ0FKSCxDQURGO0FBd0JELEdBM0NEOztBQXRDTyxFQUFBLFlBQUEsQ0FBQSxZQUFBLEdBQWU7QUFDcEIsSUFBQSxJQUFJLEVBQUUsRUFEYztBQUVwQixJQUFBLFNBQVMsRUFBRSxnQkFBQSxDQUFBLFlBQUEsQ0FBYSxTQUZKO0FBR3BCLElBQUEsUUFBUSxFQUFFLElBSFU7QUFJcEIsSUFBQSxPQUFPLEVBQUUsS0FKVztBQUtwQixJQUFBLFVBQVUsRUFBRSxnQkFBQSxDQUFBLFlBQUEsQ0FBYSxVQUxMO0FBTXBCLElBQUEsUUFBUSxFQUFFLGdCQUFBLENBQUEsWUFBQSxDQUFhO0FBTkgsR0FBZjtBQWtGVCxTQUFBLFlBQUE7QUFBQyxDQW5GRCxDQUFrQyxPQUFBLENBQUEsT0FBQSxDQUFNLGFBQXhDLENBQUE7O0FBQWEsT0FBQSxDQUFBLFlBQUEsR0FBQSxZQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2RlZmF1bHRQcm9wc30gZnJvbSAnLi9kZWZhdXRTZXR0aW5ncyc7XG5pbXBvcnQgeyBEYXRhLCBSZWZPYmplY3QsIFZvaWQgfSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIEFycm93V3JhcHBlclByb3BzIHtcbiAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gIG9uQ2xpY2s6IEZ1bmN0aW9uLFxuICBjaGlsZHJlbjogSlNYLkVsZW1lbnQsXG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW4sXG4gIGhpZGVBcnJvd3M6IGJvb2xlYW4sXG4gIGRpc2FibGVkQ2xhc3M6IHN0cmluZyxcbiAgZm9yd2FyZENsaWNrOiBib29sZWFuXG59O1xuXG5jb25zdCBBcnJvd0RlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWRDbGFzczogZGVmYXVsdFByb3BzLmFycm93RGlzYWJsZWRDbGFzcyxcbn07XG5cbmV4cG9ydCBjbGFzcyBBcnJvd1dyYXBwZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEFycm93V3JhcHBlclByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBBcnJvd0RlZmF1bHRQcm9wcztcbiAgcHVibGljIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzRGlzYWJsZWQsXG4gICAgICBjbGFzc05hbWU6IGNsc05hbWUsXG4gICAgICBkaXNhYmxlZENsYXNzLFxuICAgICAgaGlkZUFycm93cyxcbiAgICAgIGZvcndhcmRDbGljayxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBjaGlsZHJlblxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRpc2FibGVkQ2xhc3NOYW1lID0gaXNEaXNhYmxlZFxuICAgICAgPyBkaXNhYmxlZENsYXNzIHx8IGAke2Nsc05hbWV9LS1kaXNhYmxlZGBcbiAgICAgIDogJyc7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gYCR7Y2xzTmFtZX0gJHtoaWRlQXJyb3dzID8gZGlzYWJsZWRDbGFzc05hbWUgOiAnJ31gO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAuLi5jaGlsZHJlbi5wcm9wcyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IChmb3J3YXJkQ2xpY2sgPyBvbkNsaWNrKCkgOiBudWxsKSxcbiAgICB9O1xuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9ICgpOiBWb2lkID0+IHtcbiAgICAgIG9uQ2xpY2soKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuICg8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgID5cbiAgICAgICAge1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgY2hpbGRQcm9wcyl9XG4gICAgICA8L2Rpdj4pO1xuICB9O1xuXG59O1xuXG5pbnRlcmZhY2UgaW5uZXJTdHlsZVByb3BzIHtcbiAgdHJhbnNsYXRlOiBudW1iZXIsXG4gIGRyYWdnaW5nOiBib29sZWFuLFxuICBtb3VudGVkOiBib29sZWFuLFxuICB0cmFuc2l0aW9uOiBudW1iZXIsXG59O1xuXG5leHBvcnQgY29uc3QgaW5uZXJTdHlsZSA9ICh7dHJhbnNsYXRlLCBkcmFnZ2luZywgbW91bnRlZCwgdHJhbnNpdGlvbn0gOiBpbm5lclN0eWxlUHJvcHMpOiBDU1NQcm9wZXJ0aWVzID0+IHtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogJzk5MDBweCcsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHt0cmFuc2xhdGV9cHgsIDBweCwgMHB4KWAsXG4gICAgdHJhbnNpdGlvbjogYHRyYW5zZm9ybSAke2RyYWdnaW5nIHx8ICFtb3VudGVkID8gJzAnIDogdHJhbnNpdGlvbn1zYCxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIH07XG59O1xuXG5pbnRlcmZhY2UgSW5uZXJXcmFwcGVyUHJvcHMge1xuICBkYXRhOiBEYXRhLFxuICBzZXRSZWY6IEZ1bmN0aW9uLFxuICBvbkNsaWNrOiBGdW5jdGlvbixcbiAgdHJhbnNsYXRlOiBudW1iZXIsXG4gIGRyYWdnaW5nOiBib29sZWFuLFxuICBtb3VudGVkOiBib29sZWFuLFxuICB0cmFuc2l0aW9uOiBudW1iZXIsXG4gIHNlbGVjdGVkOiBzdHJpbmd8bnVtYmVyLFxuICBpbm5lcldyYXBwZXJDbGFzczogc3RyaW5nLFxuICBpdGVtQ2xhc3M6IHN0cmluZyxcbiAgaXRlbUNsYXNzQWN0aXZlOiBzdHJpbmcsXG4gIGZvcndhcmRDbGljazogYm9vbGVhbixcbn07XG5cbmV4cG9ydCBjbGFzcyBJbm5lcldyYXBwZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElubmVyV3JhcHBlclByb3BzLCB7fT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRhdGE6IFtdLFxuICAgIHRyYW5zbGF0ZTogZGVmYXVsdFByb3BzLnRyYW5zbGF0ZSxcbiAgICBkcmFnZ2luZzogdHJ1ZSxcbiAgICBtb3VudGVkOiBmYWxzZSxcbiAgICB0cmFuc2l0aW9uOiBkZWZhdWx0UHJvcHMudHJhbnNpdGlvbixcbiAgICBzZWxlY3RlZDogZGVmYXVsdFByb3BzLnNlbGVjdGVkLFxuICB9O1xuICBwcml2YXRlIHJlZjogUmVmT2JqZWN0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogSW5uZXJXcmFwcGVyUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5yZWYgPSB7fTtcbiAgfVxuXG4gIHNldFJlZiA9IChrZXk6IHN0cmluZywgdmFsdWU6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHtzZXRSZWZ9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnJlZltrZXldID0gdmFsdWU7XG4gICAgc2V0UmVmKHRoaXMucmVmKTtcbiAgfTtcblxuICBpc0VsZW1lbnRBY3RpdmUgPSAoaXRlbUlkOiBzdHJpbmd8bnVtYmVyfG51bGwsIHNlbGVjdGVkOiBzdHJpbmd8bnVtYmVyKTogYm9vbGVhbiA9PiBTdHJpbmcoaXRlbUlkKSA9PT0gU3RyaW5nKHNlbGVjdGVkKTtcblxuICBzZXRJdGVtcyA9IChhcnI6IEpTWC5FbGVtZW50W10sIHNlbGVjdGVkOiBSZWFjdC5SZWFjdFRleHQsIGZvcndhcmRDbGljazogYm9vbGVhbiwgb25DbGljazogRnVuY3Rpb24pOiBKU1guRWxlbWVudFtdID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IGFyci5tYXAoZWwgPT4ge1xuICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIHNlbGVjdGVkOiB0aGlzLmlzRWxlbWVudEFjdGl2ZShlbC5rZXksIHNlbGVjdGVkKSxcbiAgICAgICAgb25DbGljazogdGhpcy5mb3J3YXJkQ2xpY2tIYW5kbGVyKGVsLmtleSksXG4gICAgICB9O1xuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChlbCwgcHJvcHMpO1xuICAgIH0pO1xuICAgIHJldHVybiBpdGVtcztcbiAgfTtcblxuICBmb3J3YXJkQ2xpY2tIYW5kbGVyID0gKGtleTogYW55LCByZXZlcnNlOiBib29sZWFuID0gZmFsc2UpID0+ICgpOiBWb2lkID0+IHtcbiAgICBjb25zdCB7IGZvcndhcmRDbGljaywgb25DbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAocmV2ZXJzZSA/ICFmb3J3YXJkQ2xpY2sgOiBmb3J3YXJkQ2xpY2spIG9uQ2xpY2soa2V5KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNsYXRlLFxuICAgICAgZHJhZ2dpbmcsXG4gICAgICBtb3VudGVkLFxuICAgICAgdHJhbnNpdGlvbixcbiAgICAgIGlubmVyV3JhcHBlckNsYXNzLFxuICAgICAgaXRlbUNsYXNzLFxuICAgICAgaXRlbUNsYXNzQWN0aXZlLFxuICAgICAgZGF0YSxcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgZm9yd2FyZENsaWNrLFxuICAgICAgb25DbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zZXRJdGVtcyhkYXRhLCBzZWxlY3RlZCwgZm9yd2FyZENsaWNrLCBvbkNsaWNrKTtcblxuICAgIGNvbnN0IHN0eWxlOiBDU1NQcm9wZXJ0aWVzID0gaW5uZXJTdHlsZSh7IHRyYW5zbGF0ZSwgZHJhZ2dpbmcsIG1vdW50ZWQsIHRyYW5zaXRpb24gfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2lubmVyV3JhcHBlckNsYXNzfVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIHJlZj17aW5zdCA9PiB0aGlzLnNldFJlZignbWVudUlubmVyJywgaW5zdCl9PlxuICAgICAgICB7aXRlbXMubWFwKChJdGVtLCBpKSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXtpbnN0ID0+IHRoaXMuc2V0UmVmKGBtZW51aXRlbS0ke2l9YCwgaW5zdCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2l0ZW1DbGFzc30gJHtcbiAgICAgICAgICAgICAgSXRlbS5wcm9wcy5zZWxlY3RlZCA/IGl0ZW1DbGFzc0FjdGl2ZSA6ICcnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIGtleT17J21lbnVJdGVtLScgKyBJdGVtLmtleX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZm9yd2FyZENsaWNrSGFuZGxlcihJdGVtLmtleSwgdHJ1ZSl9XG4gICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAge0l0ZW19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==

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