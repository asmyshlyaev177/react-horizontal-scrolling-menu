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
      _this.ref.menuWrapper = ref;
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

      var _b = utils_1.getClientRect(_this.ref.menuWrapper),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUvc3JjL3Njcm9sbE1lbnUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBLE9BQUEsR0FBQSxlQUFBLENBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBOztBQUVBLElBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUE7O0FBUUEsSUFBQSxnQkFBQSxHQUFBLE9BQUEsQ0FBQSxrQkFBQSxDQUFBOztBQU1BLElBQUEsU0FBQSxHQUFBLE9BQUEsQ0FBQSxXQUFBLENBQUE7O0FBVUM7O0FBRUQsSUFBQSxVQUFBLEdBQUEsVUFBQSxNQUFBLEVBQUE7QUFBZ0MsRUFBQSxTQUFBLENBQUEsVUFBQSxFQUFBLE1BQUEsQ0FBQTs7QUFvQjlCLFdBQUEsVUFBQSxDQUFZLEtBQVosRUFBNEI7QUFBNUIsUUFBQSxLQUFBLEdBQ0UsTUFBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLEVBQU0sS0FBTixLQUFZLElBRGQ7O0FBbUJBLElBQUEsS0FBQSxDQUFBLEtBQUEsR0FBUTtBQUNOLE1BQUEsUUFBUSxFQUFFLEtBREo7QUFFTixNQUFBLE1BQU0sRUFBRSxDQUZGO0FBR04sTUFBQSxTQUFTLEVBQUUsS0FBSSxDQUFDLEtBQUwsQ0FBVyxTQUhoQjtBQUlOLE1BQUEsa0JBQWtCLEVBQUUsQ0FKZDtBQUtOLE1BQUEsZ0JBQWdCLEVBQUUsQ0FMWjtBQU1OLE1BQUEsZ0JBQWdCLEVBQUUsS0FOWjtBQU9OLE1BQUEsaUJBQWlCLEVBQUU7QUFQYixLQUFSOztBQW9KQSxJQUFBLEtBQUEsQ0FBQSxNQUFBLEdBQVMsVUFBQyxHQUFELEVBQWU7QUFDdEIsTUFBQSxLQUFJLENBQUMsR0FBTCxHQUFXLEdBQVg7QUFDRCxLQUZEOztBQUtBLElBQUEsS0FBQSxDQUFBLGFB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LEdBQUcsVUFBSCxHQUFnQixDQUx4QjtBQU1YLE1BQUEsUUFBUSxFQUFFLFFBTkM7QUFPWCxNQUFBLE1BQU0sRUFBRSxLQUFLLE1BUEY7QUFRWCxNQUFBLE9BQU8sRUFBRSxLQUFLLFdBUkg7QUFTWCxNQUFBLGlCQUFpQixFQUFFLGlCQVRSO0FBVVgsTUFBQSxTQUFTLEVBQUUsU0FWQTtBQVdYLE1BQUEsZUFBZSxFQUFFLGVBWE47QUFZWCxNQUFBLFlBQVksRUFBRTtBQVpILEtBQWIsQ0FURixDQWJGLEVBc0NHLFVBQVUsSUFDVCxPQUFBLENBQUEsT0FBQSxDQUFBLGFBQUEsQ0FBQyxTQUFBLENBQUEsWUFBRCxFQUFhO0FBQ1gsTUFBQSxTQUFTLEVBQUUsVUFEQTtBQUVYLE1BQUEsVUFBVSxFQUFFLENBQUMsYUFBRCxJQUFrQixDQUFDLGlCQUZwQjtBQUdYLE1BQUEsVUFBVSxFQUFFLFVBSEQ7QUFJWCxNQUFBLE9BQU8sRUFBRSxLQUFLLHFCQUpIO0FBS1gsTUFBQSxhQUFhLEVBQUUsa0JBTEo7QUFNWCxNQUFBLFlBQVksRUFBRTtBQU5ILEtBQWIsRUFPRyxVQVBILENBdkNKLENBREY7QUFvREQsR0FyRk07O0FBbjRCQSxFQUFBLFVBQUEsQ0FBQSxZQUFBLEdBQTBCLGdCQUFBLENBQUEsWUFBMUI7QUF5OUJULFNBQUEsVUFBQTtBQUFDLENBMTlCRCxDQUFnQyxPQUFBLENBQUEsT0FBQSxDQUFNLFNBQXRDLENBQUE7O0FBQWEsT0FBQSxDQUFBLFVBQUEsR0FBQSxVQUFBO0FBNDlCYixPQUFBLENBQUEsT0FBQSxHQUFlLFVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgV2hlZWxFdmVudCB9ICBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIHRyYW5zbGF0ZUlzVmFsaWQsXG4gIHZhbGlkYXRlVHJhbnNsYXRlLFxuICBmb3JtYXRUcmFuc2xhdGUsXG4gIG5vdFVuZGVmT3JOdWxsLFxuICBnZXRDbGllbnRSZWN0LFxuICB0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCxcbn0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge1xuICBkZWZhdWx0UHJvcHMsXG4gIGRlZmF1bHRNZW51U3R5bGUsXG4gIGRlZmF1bHRXcmFwcGVyU3R5bGUsXG59IGZyb20gJy4vZGVmYXV0U2V0dGluZ3MnO1xuaW1wb3J0IHsgTWVudVByb3BzLCBSZWYsIFJlZk9iamVjdCwgVm9pZCwgTWVudUl0ZW0sIE1lbnVJdGVtcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtBcnJvd1dyYXBwZXIsIElubmVyV3JhcHBlcn0gZnJvbSAnLi93cmFwcGVyJztcblxuaW50ZXJmYWNlIE1lbnVTdGF0ZSB7XG4gIGRyYWdnaW5nOiBib29sZWFuLFxuICB4UG9pbnQ6IG51bWJlcixcbiAgdHJhbnNsYXRlOiBudW1iZXIsXG4gIHN0YXJ0RHJhZ1RyYW5zbGF0ZTogbnVtYmVyLFxuICB4RHJhZ2dlZERpc3RhbmNlOiBudW1iZXIsXG4gIGxlZnRBcnJvd1Zpc2libGU6IGJvb2xlYW4sXG4gIHJpZ2h0QXJyb3dWaXNpYmxlOiBib29sZWFuLFxufTtcblxuZXhwb3J0IGNsYXNzIFNjcm9sbE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TWVudVByb3BzLCBNZW51U3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wczogTWVudVByb3BzID0gZGVmYXVsdFByb3BzO1xuXG4gIHByaXZhdGUgcmVmOiBSZWZPYmplY3Q7XG4gIHByaXZhdGUgbW91bnRlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBuZWVkVXBkYXRlOiBib29sZWFuO1xuICBwcml2YXRlIGFsbEl0ZW1zV2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBtZW51UG9zOiBudW1iZXI7XG4gIHByaXZhdGUgbWVudVdpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgd1dpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgZmlyc3RQYWdlT2Zmc2V0OiBudW1iZXI7XG4gIHByaXZhdGUgbGFzdFBhZ2VPZmZzZXQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBsYXN0VHJhbnNsYXRlVXBkYXRlOiBudW1iZXI7XG4gIHByaXZhdGUgbWVudUl0ZW1zOiBNZW51SXRlbXM7XG4gIHByaXZhdGUgc2VsZWN0ZWQ6IHN0cmluZztcblxuICAvKiogdGltZXJzIGZvciBzZXRUaW1lb3V0IGlmIFJBRiBub3Qgc3VwcG9ydGVkICovXG4gIHByaXZhdGUgb25Mb2FkVGltZXI6IGFueTtcbiAgcHJpdmF0ZSByYWZUaW1lcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBNZW51UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5yZWYgPSB7fTtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLm5lZWRVcGRhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmFsbEl0ZW1zV2lkdGggPSAwO1xuICAgIHRoaXMubWVudVBvcyA9IDA7XG4gICAgdGhpcy5tZW51V2lkdGggPSAwO1xuICAgIHRoaXMud1dpZHRoID0gMDtcbiAgICB0aGlzLmZpcnN0UGFnZU9mZnNldCA9IDA7XG4gICAgdGhpcy5sYXN0UGFnZU9mZnNldCA9IDA7XG4gICAgdGhpcy5sYXN0VHJhbnNsYXRlVXBkYXRlID0gMDtcbiAgICB0aGlzLm1lbnVJdGVtcyA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSAnJztcblxuICAgIHRoaXMub25Mb2FkVGltZXIgPSAwO1xuICAgIHRoaXMucmFmVGltZXIgPSAwO1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgIHhQb2ludDogMCxcbiAgICB0cmFuc2xhdGU6IHRoaXMucHJvcHMudHJhbnNsYXRlLFxuICAgIHN0YXJ0RHJhZ1RyYW5zbGF0ZTogMCxcbiAgICB4RHJhZ2dlZERpc3RhbmNlOiAwLFxuICAgIGxlZnRBcnJvd1Zpc2libGU6IGZhbHNlLFxuICAgIHJpZ2h0QXJyb3dWaXNpYmxlOiB0cnVlLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IFZvaWQge1xuICAgIHRoaXMuc2V0SW5pdGlhbCgpO1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uKCkge307XG5cbiAgICBjb25zdCBwYXNzaXZlRXZlbnRzID0gdGVzdFBhc3NpdmVFdmVudFN1cHBvcnQoKTtcbiAgICBjb25zdCBvcHRpb25zQ2FwdHVyZSA9IHBhc3NpdmVFdmVudHNcbiAgICAgID8ge3Bhc3NpdmU6IHRydWUsIGNhcHR1cmU6IHRydWV9XG4gICAgICA6IHRydWU7XG4gICAgY29uc3Qgb3B0aW9uc05vQ2FwdHVyZSA9IHBhc3NpdmVFdmVudHNcbiAgICAgID8ge3Bhc3NpdmU6IHRydWUsIGNhcHR1cmU6IGZhbHNlfVxuICAgICAgOiBmYWxzZTtcblxuICAgIC8vIFRPRE86IHNlcGFyYXRlIGZ1bmN0aW9uIGZvciByZXNpemVcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRoaXMub25Mb2FkLCBvcHRpb25zTm9DYXB0dXJlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUsIG9wdGlvbnNOb0NhcHR1cmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlRHJhZywgb3B0aW9uc0NhcHR1cmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZURyYWdTdG9wLCBvcHRpb25zQ2FwdHVyZSk7XG5cbiAgICAvLyBpZiBzdHlsZXMgbG9hZGVkIGJlZm9yZSBqcyBidW5kbGUgbmVlZCB3YWl0IGZvciBpdFxuICAgIHRoaXMub25Mb2FkVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLm9uTG9hZCgpLCB0aGlzLmZvcmNlVXBkYXRlKCkpLCAwKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHM6IE1lbnVQcm9wcywgbmV4dFN0YXRlOiBNZW51U3RhdGUpOiBib29sZWFuIHtcbiAgICAvLyBUT0RPOiBuZWVkIHJlZmFjdG9yIGFsbCB0aGlzIG9yIHJlbW92ZVxuICAgIC8vIGl0J3MgdG9vIGNvbXBsaWNhdGVkIGFscmVhZHlcbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2xhdGUsXG4gICAgICBkcmFnZ2luZyxcbiAgICAgIGxlZnRBcnJvd1Zpc2libGUsXG4gICAgICByaWdodEFycm93VmlzaWJsZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2xhdGU6IHRyYW5zbGF0ZU5ldyxcbiAgICAgIGRyYWdnaW5nOiBkcmFnZ2luZ05ldyxcbiAgICAgIGxlZnRBcnJvd1Zpc2libGU6IGxlZnRBcnJvd1Zpc2libGVOZXcsXG4gICAgICByaWdodEFycm93VmlzaWJsZTogcmlnaHRBcnJvd1Zpc2libGVOZXcsXG4gICAgfSA9IG5leHRTdGF0ZTtcblxuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlUHJvcHMsXG4gICAgICBzZWxlY3RlZDogc2VsZWN0ZWRQcm9wcyxcbiAgICAgIHNjcm9sbFRvU2VsZWN0ZWQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNsYXRlOiB0cmFuc2xhdGVQcm9wc05ldyxcbiAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZFByb3BzTmV3LFxuICAgIH0gPSBuZXh0UHJvcHM7XG5cbiAgICBjb25zdCB0cmFuc2xhdGVQcm9wc05vdE51bGwgPSBub3RVbmRlZk9yTnVsbCh0cmFuc2xhdGVQcm9wc05ldyk7XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGVEaWZmID0gdHJhbnNsYXRlICE9PSB0cmFuc2xhdGVOZXc7XG4gICAgY29uc3QgdHJhbnNsYXRlUHJvcHNEaWZmID1cbiAgICAgIHRyYW5zbGF0ZVByb3BzTm90TnVsbCAmJiB0cmFuc2xhdGVQcm9wcyAhPT0gdHJhbnNsYXRlUHJvcHNOZXc7XG4gICAgY29uc3QgdHJhbnNsYXRlRGlmZiA9XG4gICAgICB0cmFuc2xhdGVQcm9wc05ldyAhPT0gdHJhbnNsYXRlTmV3IHx8XG4gICAgICAodHJhbnNsYXRlU3RhdGVEaWZmIHx8IHRyYW5zbGF0ZVByb3BzRGlmZik7XG5cbiAgICBjb25zdCBzZWxlY3RlZFByb3BzRGlmZiA9XG4gICAgICBub3RVbmRlZk9yTnVsbChzZWxlY3RlZFByb3BzTmV3KSAmJiBzZWxlY3RlZFByb3BzICE9PSBzZWxlY3RlZFByb3BzTmV3O1xuICAgIGNvbnN0IHNlbGVjdGVkRGlmZiA9IHNlbGVjdGVkUHJvcHNEaWZmO1xuXG4gICAgY29uc3QgcHJvcHNEaWZmID0gdHJhbnNsYXRlRGlmZiB8fCBzZWxlY3RlZERpZmY7XG5cbiAgICBjb25zdCBsZWZ0QXJyb3dWaXNpYmxlRGlmZiA9IGxlZnRBcnJvd1Zpc2libGUgIT09IGxlZnRBcnJvd1Zpc2libGVOZXc7XG4gICAgY29uc3QgcmlnaHRBcnJvd1Zpc2libGVEaWZmID0gcmlnaHRBcnJvd1Zpc2libGUgIT09IHJpZ2h0QXJyb3dWaXNpYmxlTmV3O1xuXG4gICAgbGV0IHRyYW5zbGF0ZVJlc3VsdCA9IHRyYW5zbGF0ZU5ldztcblxuICAgIGNvbnN0IG5ld01lbnVJdGVtcyA9XG4gICAgICB0aGlzLnByb3BzLmRhdGEgIT09IG5leHRQcm9wcy5kYXRhIHx8XG4gICAgICB0aGlzLnByb3BzLmRhdGEubGVuZ3RoICE9PSBuZXh0UHJvcHMuZGF0YS5sZW5ndGg7XG4gICAgY29uc3QgbmV3VHJhbnNsYXRlUHJvcHMgPVxuICAgICAgdHJhbnNsYXRlSXNWYWxpZCh0cmFuc2xhdGVQcm9wc05ldykgJiZcbiAgICAgIHRyYW5zbGF0ZVByb3BzRGlmZiAmJlxuICAgICAgIW5ld01lbnVJdGVtcztcblxuICAgIGlmIChuZXdNZW51SXRlbXMgfHwgKHNjcm9sbFRvU2VsZWN0ZWQgJiYgc2VsZWN0ZWRQcm9wc0RpZmYpKSB7XG4gICAgICB0aGlzLm5lZWRVcGRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9wc0RpZmYpIHtcbiAgICAgIGlmIChzZWxlY3RlZFByb3BzRGlmZikge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWRQcm9wc05ldztcbiAgICAgIH1cblxuICAgICAgaWYgKG5ld1RyYW5zbGF0ZVByb3BzKSB7XG4gICAgICAgIHRyYW5zbGF0ZVJlc3VsdCA9IHRyYW5zbGF0ZVByb3BzTmV3O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdUcmFuc2xhdGVQcm9wcykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dHJhbnNsYXRlOiBmb3JtYXRUcmFuc2xhdGUodHJhbnNsYXRlUmVzdWx0KX0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBuZXdNZW51SXRlbXMgfHxcbiAgICAgIHRyYW5zbGF0ZURpZmYgfHxcbiAgICAgIGRyYWdnaW5nICE9PSBkcmFnZ2luZ05ldyB8fFxuICAgICAgcHJvcHNEaWZmIHx8XG4gICAgICBsZWZ0QXJyb3dWaXNpYmxlRGlmZiB8fFxuICAgICAgcmlnaHRBcnJvd1Zpc2libGVEaWZmXG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IE1lbnVQcm9wcywgcHJldlN0YXRlOiBNZW51U3RhdGUpOiBWb2lkIHtcbiAgICAvLyB1cGRhdGUgaWYgaGF2ZSBuZXcgbWVudSBpdGVtcyBvciBzZWxlY3RlZCB2YWx1ZVxuICAgIGlmICh0aGlzLm5lZWRVcGRhdGUpIHtcbiAgICAgIHRoaXMubmVlZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5vbkxvYWQoKTtcbiAgICB9XG5cbiAgICBjb25zdCB7dHJhbnNsYXRlOiB0cmFuc2xhdGVPbGR9ID0gcHJldlN0YXRlO1xuICAgIGxldCB7dHJhbnNsYXRlOiB0cmFuc2xhdGVOZXcsIGRyYWdnaW5nfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoIWRyYWdnaW5nICYmIHRyYW5zbGF0ZU9sZCAhPT0gdHJhbnNsYXRlTmV3KSB7XG4gICAgICB0aGlzLm9uVXBkYXRlKHt0cmFuc2xhdGU6IHRyYW5zbGF0ZU5ldywgdHJhbnNsYXRlT2xkfSk7XG4gICAgfVxuXG4gICAgY29uc3Qge2hpZGVTaW5nbGVBcnJvdywgdHJhbnNpdGlvbn0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChoaWRlU2luZ2xlQXJyb3cpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnNldFNpbmdsZUFycm93VmlzaWJpbGl0eSk7XG4gICAgICB0aGlzLnJhZlRpbWVyID0gc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuc2V0U2luZ2xlQXJyb3dWaXNpYmlsaXR5KSxcbiAgICAgICAgdHJhbnNpdGlvbiAqIDEwMDAgKyAxMCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogVm9pZCB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZURyYWcpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZURyYWdTdG9wKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5yYWZUaW1lcik7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMub25Mb2FkVGltZXIpO1xuICB9XG5cbiAgLyoqIHNldCByZWYgZm9yIE1lbnVJdGVtcyAqL1xuICBzZXRSZWYgPSAocmVmOiBSZWZPYmplY3QpOiBWb2lkID0+IHtcbiAgICB0aGlzLnJlZiA9IHJlZjtcbiAgfTtcblxuICAvKiogc2V0IHJlZiBmb3Igd3JhcHBlciAqL1xuICBzZXRXcmFwcGVyUmVmID0gKHJlZjogUmVmKTogVm9pZCA9PiB7XG4gICAgdGhpcy5yZWYubWVudVdyYXBwZXIgPSByZWY7XG4gIH07XG5cbiAgLyoqIGNoZWNrIGlmIGFycm93cyB2aXNpYmxlICovXG4gIGNoZWNrU2luZ2xlQXJyb3dWaXNpYmlsaXR5ID0gKHt0cmFuc2xhdGUgPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZX0gOiB7dHJhbnNsYXRlPzogbnVtYmVyfSlcbiAgOiB7bGVmdEFycm93VmlzaWJsZTogYm9vbGVhbiwgcmlnaHRBcnJvd1Zpc2libGU6IGJvb2xlYW59ID0+IHtcbiAgICBjb25zdCB7aGlkZVNpbmdsZUFycm93fSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IFtsZWZ0QXJyb3dWaXNpYmxlLCByaWdodEFycm93VmlzaWJsZV0gPSBbdHJ1ZSwgdHJ1ZV07XG4gICAgY29uc3Qge21lbnVJdGVtczogaXRlbXN9ID0gdGhpcztcblxuICAgIGlmIChoaWRlU2luZ2xlQXJyb3cgJiYgaXRlbXMpIHtcbiAgICAgIGNvbnN0IHZpc2libGVJdGVtcyA9IHRoaXMuZ2V0VmlzaWJsZUl0ZW1zKHtvZmZzZXQ6IHRyYW5zbGF0ZX0pO1xuICAgICAgY29uc3QgZmlyc3RJdGVtVmlzaWJsZSA9IHZpc2libGVJdGVtcy5pbmNsdWRlcyhpdGVtc1swXSk7XG4gICAgICBjb25zdCBsYXN0SXRlbVZpc2libGUgPSB2aXNpYmxlSXRlbXMuaW5jbHVkZXMoaXRlbXMuc2xpY2UoLTEpWzBdKTtcbiAgICAgIGxlZnRBcnJvd1Zpc2libGUgPSAhZmlyc3RJdGVtVmlzaWJsZTtcbiAgICAgIHJpZ2h0QXJyb3dWaXNpYmxlID0gIWxhc3RJdGVtVmlzaWJsZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2xlZnRBcnJvd1Zpc2libGUsIHJpZ2h0QXJyb3dWaXNpYmxlfTtcbiAgfTtcblxuICAvKiogY2hlY2sgYXJyb3dzIHZpc2libGUgb3Igbm90IGFuZCBzZXRTdGF0ZSAqL1xuICBzZXRTaW5nbGVBcnJvd1Zpc2liaWxpdHkgPSAoKTogVm9pZCA9PiB7XG4gICAgY29uc3Qge2xlZnRBcnJvd1Zpc2libGUsIHJpZ2h0QXJyb3dWaXNpYmxlfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgbGVmdEFycm93VmlzaWJsZTogbGVmdEFycm93VmlzaWJsZU5ldyxcbiAgICAgIHJpZ2h0QXJyb3dWaXNpYmxlOiByaWdodEFycm93VmlzaWJsZU5ldyxcbiAgICB9ID0gdGhpcy5jaGVja1NpbmdsZUFycm93VmlzaWJpbGl0eSh7fSk7XG4gICAgaWYgKFxuICAgICAgbGVmdEFycm93VmlzaWJsZSAhPT0gbGVmdEFycm93VmlzaWJsZU5ldyB8fFxuICAgICAgcmlnaHRBcnJvd1Zpc2libGUgIT09IHJpZ2h0QXJyb3dWaXNpYmxlTmV3XG4gICAgKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGVmdEFycm93VmlzaWJsZTogbGVmdEFycm93VmlzaWJsZU5ldyxcbiAgICAgICAgcmlnaHRBcnJvd1Zpc2libGU6IHJpZ2h0QXJyb3dWaXNpYmxlTmV3LFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uTG9hZCA9ICgpOiBWb2lkID0+IHtcbiAgICB0aGlzLnNldEluaXRpYWwoKTtcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuICB9O1xuXG4gIC8qKiBTZXQgdmFsdWVzIG9uIHJlc2l6ZSAqL1xuICByZXNpemUgPSAoKTogVm9pZCA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgd1dpZHRoLFxuICAgICAgbWVudVBvcyxcbiAgICAgIG1lbnVXaWR0aCxcbiAgICAgIGFsbEl0ZW1zV2lkdGgsXG4gICAgICBmaXJzdFBhZ2VPZmZzZXQsXG4gICAgICBsYXN0UGFnZU9mZnNldCxcbiAgICB9ID0gdGhpcy51cGRhdGVXaWR0aCh7fSk7XG4gICAgdGhpcy5tZW51UG9zID0gbWVudVBvcztcbiAgICB0aGlzLndXaWR0aCA9IHdXaWR0aDtcbiAgICB0aGlzLmFsbEl0ZW1zV2lkdGggPSBhbGxJdGVtc1dpZHRoO1xuICAgIHRoaXMubWVudVdpZHRoID0gbWVudVdpZHRoO1xuICAgIHRoaXMuZmlyc3RQYWdlT2Zmc2V0ID0gZmlyc3RQYWdlT2Zmc2V0O1xuICAgIHRoaXMubGFzdFBhZ2VPZmZzZXQgPSBsYXN0UGFnZU9mZnNldDtcblxuICAgIC8vIGNvbnN0IGZpcnN0VmlzaWJsZUl0ZW0gPSB0aGlzLmdldFZpc2libGVJdGVtcyh7fSlbMF0gfHwgdGhpcy5tZW51SXRlbXNbMF07XG5cbiAgICAvLyBjb25zdCBuZWVkU2Nyb2xsID0gdGhpcy5pc1Njcm9sbE5lZWRlZCh7XG4gICAgLy8gICBpdGVtSWQ6IHNlbGVjdGVkLFxuICAgIC8vICAgdHJhbnNsYXRlOiBuZXdTdGF0ZS50cmFuc2xhdGUsXG4gICAgLy8gfSk7XG4gICAgLy8gaWYgKG5lZWRTY3JvbGwpIHtcbiAgICAvLyAgIG5ld1N0YXRlLnRyYW5zbGF0ZSA9IGZvcm1hdFRyYW5zbGF0ZShcbiAgICAvLyAgICAgdGhpcy5nZXRPZmZzZXRUb0l0ZW1CeUtleShzZWxlY3RlZCksXG4gICAgLy8gICApO1xuICAgIC8vIH1cblxuICAgIC8vIGlmICh0cmFuc2xhdGUgIT09IGZpcnN0UGFnZU9mZnNldCkge1xuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7IHRyYW5zbGF0ZTogZmlyc3RQYWdlT2Zmc2V0IH0pO1xuICAgIC8vIH1cbiAgfTtcblxuICAvKiogc2V0IGluaXRpYWwgdmFsdWVzIGFuZCBmb3IgdXBkYXRlcyAqL1xuICBzZXRJbml0aWFsID0gKCk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgZGF0YSxcbiAgICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlUHJvcHMsXG4gICAgICBzY3JvbGxUb1NlbGVjdGVkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlOiB0cmFuc2xhdGVTdGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IHRyYW5zbGF0ZVByb3AgPSB0cmFuc2xhdGVQcm9wcztcblxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IHRoaXMuZ2V0TWVudUl0ZW1zKGRhdGEubGVuZ3RoKTtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBkYXRhLmZpbmQoZWwgPT4gZWwua2V5ID09PSBzZWxlY3RlZCk7XG4gICAgdGhpcy5tZW51SXRlbXMgPSBtZW51SXRlbXM7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkSXRlbVxuICAgICAgPyBTdHJpbmcoc2VsZWN0ZWRJdGVtLmtleSB8fCAnJylcbiAgICAgIDogZGVmYXVsdFByb3BzLnNlbGVjdGVkO1xuXG4gICAgLy8gYWxpZ24gaXRlbSBvbiBpbml0aWFsIGxvYWRcbiAgICBjb25zdCB7XG4gICAgICB3V2lkdGgsXG4gICAgICBtZW51UG9zLFxuICAgICAgbWVudVdpZHRoLFxuICAgICAgYWxsSXRlbXNXaWR0aCxcbiAgICAgIGZpcnN0UGFnZU9mZnNldCxcbiAgICAgIGxhc3RQYWdlT2Zmc2V0LFxuICAgIH0gPSB0aGlzLnVwZGF0ZVdpZHRoKHt9KTtcbiAgICB0aGlzLm1lbnVQb3MgPSBtZW51UG9zO1xuICAgIHRoaXMud1dpZHRoID0gd1dpZHRoO1xuICAgIHRoaXMuYWxsSXRlbXNXaWR0aCA9IGFsbEl0ZW1zV2lkdGg7XG4gICAgdGhpcy5tZW51V2lkdGggPSBtZW51V2lkdGg7XG4gICAgdGhpcy5maXJzdFBhZ2VPZmZzZXQgPSBmaXJzdFBhZ2VPZmZzZXQ7XG4gICAgdGhpcy5sYXN0UGFnZU9mZnNldCA9IGxhc3RQYWdlT2Zmc2V0O1xuXG4gICAgY29uc3QgbmV3U3RhdGUgPSB7Li4udGhpcy5zdGF0ZX07XG5cbiAgICAvLyBzZXQgdHJhbnNsYXRlIG9uIGZpcnN0IGxvYWRcbiAgICBjb25zdCBmaXJzdE1vdW50QW5kRGVmYXVsdFRyYW5zbGF0ZSA9ICF0aGlzLm1vdW50ZWQgJiYgdHJhbnNsYXRlUHJvcCA9PT0gZGVmYXVsdFByb3BzLnRyYW5zbGF0ZTtcbiAgICBpZiAoZmlyc3RNb3VudEFuZERlZmF1bHRUcmFuc2xhdGUgfHwgIXRyYW5zbGF0ZUlzVmFsaWQodHJhbnNsYXRlUHJvcCkgJiYgIXRyYW5zbGF0ZUlzVmFsaWQodHJhbnNsYXRlU3RhdGUpKSB7XG4gICAgICBuZXdTdGF0ZS50cmFuc2xhdGUgPSB0aGlzLmZpcnN0UGFnZU9mZnNldDtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBhcnJvd3NcbiAgICBjb25zdCB7XG4gICAgICBsZWZ0QXJyb3dWaXNpYmxlLFxuICAgICAgcmlnaHRBcnJvd1Zpc2libGUsXG4gICAgfSA9IHRoaXMuY2hlY2tTaW5nbGVBcnJvd1Zpc2liaWxpdHkoe3RyYW5zbGF0ZTogdHJhbnNsYXRlUHJvcH0pO1xuICAgIG5ld1N0YXRlLmxlZnRBcnJvd1Zpc2libGUgPSBsZWZ0QXJyb3dWaXNpYmxlO1xuICAgIG5ld1N0YXRlLnJpZ2h0QXJyb3dWaXNpYmxlID0gcmlnaHRBcnJvd1Zpc2libGU7XG5cbiAgICAvLyBzY3JvbGxUb1NlbGVjdGVkXG4gICAgaWYgKHNjcm9sbFRvU2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IG5lZWRTY3JvbGwgPSB0aGlzLmlzU2Nyb2xsTmVlZGVkKHtcbiAgICAgICAgaXRlbUlkOiBzZWxlY3RlZCxcbiAgICAgICAgdHJhbnNsYXRlOiBuZXdTdGF0ZS50cmFuc2xhdGUsXG4gICAgICB9KTtcbiAgICAgIGlmIChuZWVkU2Nyb2xsKSB7XG4gICAgICAgIG5ld1N0YXRlLnRyYW5zbGF0ZSA9IGZvcm1hdFRyYW5zbGF0ZShcbiAgICAgICAgICB0aGlzLmdldE9mZnNldFRvSXRlbUJ5S2V5KHNlbGVjdGVkKSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsuLi5uZXdTdGF0ZX0pO1xuICB9O1xuXG4gIC8qKiBjaGVjayBpZiBzZWxlY3RlZCBpdGVtIHZpc2libGUgb24gc2NyZWVuIG9yIG5lZWQgc2Nyb2xsIHRvIGl0ICovXG4gIGlzU2Nyb2xsTmVlZGVkID0gKHtpdGVtSWQsIHRyYW5zbGF0ZSA9IHRoaXMuc3RhdGUudHJhbnNsYXRlfVxuICAgIDoge1xuICAgICAgaXRlbUlkOiBzdHJpbmcsXG4gICAgICB0cmFuc2xhdGU/OiBudW1iZXJcbiAgICB9KTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgaXRlbUluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXhCeUtleShpdGVtSWQpO1xuICAgIGlmIChpdGVtSW5kZXggPT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCB7bWVudUl0ZW1zfSA9IHRoaXM7XG4gICAgY29uc3QgdmlzaWJsZUl0ZW1zID0gdGhpcy5nZXRWaXNpYmxlSXRlbXMoe1xuICAgICAgaXRlbXM6IG1lbnVJdGVtcyxcbiAgICAgIG9mZnNldDogdHJhbnNsYXRlLFxuICAgIH0pO1xuICAgIGNvbnN0IGl0ZW0gPSBtZW51SXRlbXNbaXRlbUluZGV4XTtcbiAgICByZXR1cm4gIXZpc2libGVJdGVtcy5pbmNsdWRlcyhpdGVtKTtcbiAgfTtcblxuICAvKiogZXh0ZXJuYWwgYXBpLCBzY3JvbGwgdG8gaXRlbSBieSBpdCBrZXkgKi9cbiAgc2Nyb2xsVG8gPSAoaXRlbUtleTogc3RyaW5nKTogVm9pZCA9PiB7XG4gICAgY29uc3Qge3RyYW5zbGF0ZX0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IG5ld1RyYW5zbGF0ZSA9IHRoaXMuZ2V0T2Zmc2V0VG9JdGVtQnlLZXkoaXRlbUtleSk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGl0ZW1LZXk7XG4gICAgaWYgKHRyYW5zbGF0ZSA9PT0gbmV3VHJhbnNsYXRlKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLnNldFN0YXRlKHt0cmFuc2xhdGU6IG5ld1RyYW5zbGF0ZX0pO1xuICB9O1xuXG4gIC8qKiBnZXQgTWVudUl0ZW1zIGZyb20gcmVmcyAqL1xuICBnZXRNZW51SXRlbXMgPSAoZGF0YUxlbmd0aDogbnVtYmVyKTogTWVudUl0ZW1zID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5yZWYpXG4gICAgICAuZmlsdGVyKGVsID0+IGVsWzBdLmluY2x1ZGVzKCdtZW51aXRlbScpKVxuICAgICAgLnNsaWNlKDAsIGRhdGFMZW5ndGgpXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICB9O1xuXG4gIC8qKiBnZXQgd2lkdGggb2YgYWxsIG1lbnUgaXRlbXMgKi9cbiAgZ2V0SXRlbXNXaWR0aCA9ICh7aXRlbXMgPSB0aGlzLm1lbnVJdGVtc30gOiB7aXRlbXM/OiBNZW51SXRlbXN9KTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gaXRlbXNcbiAgICAgIC5tYXAoZWwgPT4gZWxbMV0pXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAucmVkdWNlKChhY2MsIGVsKSA9PiAoYWNjICs9IGdldENsaWVudFJlY3QoZWwpLndpZHRoKSwgMCk7XG4gIH07XG5cbiAgLyoqIGdldCB3aWR0aCBvZiBpdGVtcywgd2luZG93IGFuZCBwb3Mgb2YgbWVudSAqL1xuICBnZXRXaWR0aCA9ICh7aXRlbXN9IDoge2l0ZW1zOiBNZW51SXRlbXN9KSA6IHt3V2lkdGg6IG51bWJlciwgbWVudVBvczogbnVtYmVyLCBtZW51V2lkdGg6IG51bWJlciwgYWxsSXRlbXNXaWR0aDogbnVtYmVyfSA9PiB7XG4gICAgY29uc3Qgd1dpZHRoID0gd2luZG93ICYmIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IHt4OiBtZW51UG9zLCB3aWR0aDogbWVudVdpZHRofSA9IGdldENsaWVudFJlY3QodGhpcy5yZWYubWVudVdyYXBwZXIpO1xuICAgIGNvbnN0IGFsbEl0ZW1zV2lkdGggPSB0aGlzLmdldEl0ZW1zV2lkdGgoe2l0ZW1zfSk7XG4gICAgcmV0dXJuIHt3V2lkdGgsIG1lbnVQb3MsIG1lbnVXaWR0aCwgYWxsSXRlbXNXaWR0aH07XG4gIH07XG5cbiAgLyoqIHZhbHVlcyBmcm9tIDIgZnVuY3Rpb25zIGFib3ZlICovXG4gIHVwZGF0ZVdpZHRoID0gKHtpdGVtcyA9IHRoaXMubWVudUl0ZW1zLCAuLi5hcmdzfSkgOiB7XG4gICAgd1dpZHRoOiBudW1iZXIsXG4gICAgbWVudVBvczogbnVtYmVyLFxuICAgIG1lbnVXaWR0aDogbnVtYmVyLFxuICAgIGFsbEl0ZW1zV2lkdGg6IG51bWJlcixcbiAgICBmaXJzdFBhZ2VPZmZzZXQ6IG51bWJlcixcbiAgICBsYXN0UGFnZU9mZnNldDogbnVtYmVyLFxuICB9ID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoe2l0ZW1zfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLndpZHRoLFxuICAgICAgLi4udGhpcy5nZXRQYWdlc09mZnNldHMoe2l0ZW1zLCAuLi53aWR0aCwgLi4uYXJnc30pLFxuICAgIH07XG4gIH07XG5cbiAgLyoqIGdldCBvZmZzZXRzIHRvIGZpcnN0IGFuZCBsYXN0IGl0ZW0gKi9cbiAgZ2V0UGFnZXNPZmZzZXRzID0gKHtcbiAgICBpdGVtcyA9IHRoaXMubWVudUl0ZW1zLFxuICAgIGFsbEl0ZW1zV2lkdGggPSB0aGlzLmFsbEl0ZW1zV2lkdGgsXG4gICAgd1dpZHRoID0gdGhpcy53V2lkdGgsXG4gICAgbWVudVBvcyA9IHRoaXMubWVudVBvcyxcbiAgICBtZW51V2lkdGggPSB0aGlzLm1lbnVXaWR0aCxcbiAgICBvZmZzZXQgPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZSxcbiAgfSkgOiB7XG4gICAgZmlyc3RQYWdlT2Zmc2V0OiBudW1iZXIsXG4gICAgbGFzdFBhZ2VPZmZzZXQ6IG51bWJlcixcbiAgfSA9PiB7XG4gICAgY29uc3QgdmlzaWJsZUl0ZW1zU3RhcnQgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7XG4gICAgICBvZmZzZXQsXG4gICAgICBpdGVtcyxcbiAgICAgIHdXaWR0aCxcbiAgICAgIG1lbnVQb3MsXG4gICAgICBtZW51V2lkdGgsXG4gICAgfSk7XG4gICAgY29uc3QgZmlyc3RQYWdlT2Zmc2V0ID0gZm9ybWF0VHJhbnNsYXRlKFxuICAgICAgdGhpcy5nZXRDZW50ZXJPZmZzZXQoe1xuICAgICAgICBpdGVtczogdmlzaWJsZUl0ZW1zU3RhcnQsXG4gICAgICAgIG1lbnVXaWR0aCxcbiAgICAgIH0pLFxuICAgICk7XG4gICAgY29uc3QgdmlzaWJsZUl0ZW1zRW5kID0gdGhpcy5nZXRWaXNpYmxlSXRlbXMoe1xuICAgICAgaXRlbXMsXG4gICAgICBvZmZzZXQ6IC1hbGxJdGVtc1dpZHRoICsgbWVudVdpZHRoLFxuICAgICAgd1dpZHRoLFxuICAgICAgbWVudVBvcyxcbiAgICAgIG1lbnVXaWR0aCxcbiAgICB9KTtcbiAgICBjb25zdCBsYXN0UGFnZU9mZnNldCA9IGZvcm1hdFRyYW5zbGF0ZShcbiAgICAgIHRoaXMuZ2V0Q2VudGVyT2Zmc2V0KHtcbiAgICAgICAgaXRlbXM6IHZpc2libGVJdGVtc0VuZCxcbiAgICAgICAgbWVudVdpZHRoLFxuICAgICAgfSksXG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBmaXJzdFBhZ2VPZmZzZXQsXG4gICAgICBsYXN0UGFnZU9mZnNldCxcbiAgICB9O1xuICB9O1xuXG4gIC8qKiBpdGVtIGNsaWNrIGhhbmRsZXIgKi9cbiAgb25JdGVtQ2xpY2sgPSAoaWQ6IHN0cmluZyk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHtjbGlja1doZW5EcmFnLCBvblNlbGVjdH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHt4RHJhZ2dlZERpc3RhbmNlfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBhZnRlclNjcm9sbCA9IHhEcmFnZ2VkRGlzdGFuY2UgPiA1O1xuXG4gICAgaWYgKGFmdGVyU2Nyb2xsICYmICFjbGlja1doZW5EcmFnKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLnNlbGVjdGVkID0gaWQ7XG4gICAgaWYgKG9uU2VsZWN0KSBvblNlbGVjdChpZCk7XG4gIH07XG5cbiAgLyoqIGdldCBpdGVtIHZpc2libGUgd2l0aCBjdXJyZW50L3Byb3ZpZGVkIHRyYW5zbGF0ZSAqL1xuICBnZXRWaXNpYmxlSXRlbXMgPSAoe1xuICAgIGl0ZW1zID0gdGhpcy5tZW51SXRlbXMsXG4gICAgd1dpZHRoID0gdGhpcy53V2lkdGgsXG4gICAgbWVudVBvcyA9IHRoaXMubWVudVBvcyxcbiAgICBtZW51V2lkdGggPSB0aGlzLm1lbnVXaWR0aCxcbiAgICBvZmZzZXQgPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZSxcbiAgICB0cmFuc2xhdGUgPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZSB8fCBkZWZhdWx0UHJvcHMudHJhbnNsYXRlLFxuICB9KTogTWVudUl0ZW1zID0+IHtcbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGVsID0+IHtcbiAgICAgIGNvbnN0IHt3aWR0aDogZWxXaWR0aH0gPSBnZXRDbGllbnRSZWN0KGVsWzFdKTtcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJdGVtSW5kKGl0ZW1zLCBlbCk7XG4gICAgICBjb25zdCB4ID0gdGhpcy5nZXRPZmZzZXRUb0l0ZW1CeUluZGV4KHtcbiAgICAgICAgaW5kZXg6IGlkLFxuICAgICAgICBtZW51SXRlbXM6IGl0ZW1zLFxuICAgICAgICB0cmFuc2xhdGUsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuZWxlbVZpc2libGUoe3gsIGVsV2lkdGgsIHdXaWR0aCwgbWVudVBvcywgbWVudVdpZHRoLCBvZmZzZXR9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvKiogY2hlY2sgaWYgc2luZ2xlIG1lbnUgaXRlbSB2aXNpYmxlIGJ5IGl0J3MgcG9zaXRpb24gYW5kIHdpZHRoKi9cbiAgZWxlbVZpc2libGUgPSAoe1xuICAgIHgsXG4gICAgb2Zmc2V0ID0gMCxcbiAgICBlbFdpZHRoLFxuICAgIHdXaWR0aCA9IHRoaXMud1dpZHRoLFxuICAgIG1lbnVQb3MgPSB0aGlzLm1lbnVQb3MsXG4gICAgbWVudVdpZHRoID0gdGhpcy5tZW51V2lkdGgsXG4gIH0pOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBsZWZ0RWRnZSA9IG1lbnVQb3MgLSAxO1xuICAgIGNvbnN0IHJpZ2h0RWRnZSA9IHdXaWR0aCAtICh3V2lkdGggLSAobWVudVBvcyArIG1lbnVXaWR0aCkpICsgMTtcbiAgICBjb25zdCBwb3MgPSB4ICsgb2Zmc2V0O1xuICAgIGNvbnN0IHBvc1dpdGhXaWR0aCA9IHBvcyArIGVsV2lkdGg7XG4gICAgcmV0dXJuIHBvcyA+PSBsZWZ0RWRnZSAmJiBwb3NXaXRoV2lkdGggPD0gcmlnaHRFZGdlO1xuICB9O1xuXG4gIC8qKiBnZXQgaW5kZXggb2YgaXRlbSAqL1xuICBnZXRJdGVtSW5kID0gKG1lbnVJdGVtczogTWVudUl0ZW1zLCBpdGVtOiBNZW51SXRlbSk6IG51bWJlciA9PiB7XG4gICAgaWYgKCFtZW51SXRlbXMgfHwgIWl0ZW0pIHJldHVybiAwO1xuICAgIHJldHVybiBtZW51SXRlbXMuZmluZEluZGV4KGVsID0+IGVsWzBdID09PSBpdGVtWzBdKTtcbiAgfTtcblxuICAvKiogZ2V0IG5leHQgaXRlbSBpbiBkYXRhICovXG4gIGdldE5leHRJdGVtSW5kID0gKGxlZnQ6IGJvb2xlYW4sIHZpc2libGVJdGVtczogTWVudUl0ZW1zKTogbnVtYmVyID0+IHtcbiAgICBjb25zdCB7bWVudUl0ZW1zfSA9IHRoaXM7XG4gICAgaWYgKGxlZnQpIHtcbiAgICAgIGlmICghdmlzaWJsZUl0ZW1zLmxlbmd0aCkgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdmlzaWJsZUl0ZW1zLmxlbmd0aCkgcmV0dXJuIG1lbnVJdGVtcy5sZW5ndGg7XG4gICAgfVxuICAgIGNvbnN0IGluZCA9IGxlZnRcbiAgICAgID8gdGhpcy5nZXRJdGVtSW5kKG1lbnVJdGVtcywgdmlzaWJsZUl0ZW1zWzBdKSAtIDFcbiAgICAgIDogdGhpcy5nZXRJdGVtSW5kKG1lbnVJdGVtcywgdmlzaWJsZUl0ZW1zLnNsaWNlKC0xKVswXSkgKyAxO1xuICAgIHJldHVybiBpbmQgPCAwID8gMCA6IGluZDtcbiAgfTtcblxuICAvKiogZ2V0IG9mZnNldCBmcm9tIHN0YXJ0IHRvIGl0ZW0gYnkgaXQncyBrZXkgKi9cbiAgZ2V0T2Zmc2V0VG9JdGVtQnlLZXkgPSAoa2V5OiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuICAgIGxldCB7dHJhbnNsYXRlfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoIWtleSkgcmV0dXJuIHRyYW5zbGF0ZTtcblxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4QnlLZXkoa2V5KTtcbiAgICBpZiAoaXRlbUluZGV4ID09PSAtMSkgcmV0dXJuIHRyYW5zbGF0ZTtcblxuICAgIGNvbnN0IHttZW51UG9zfSA9IHRoaXM7XG4gICAgY29uc3Qge2FsaWduQ2VudGVyfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0cmFuc2xhdGUgPSB0aGlzLmdldE9mZnNldFRvSXRlbUJ5SW5kZXgoe2luZGV4OiBpdGVtSW5kZXh9KTtcblxuICAgIGNvbnN0IHZpc2libGVJdGVtc1dpdGhOZXdUcmFuc2xhdGUgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7XG4gICAgICBvZmZzZXQ6IC10cmFuc2xhdGUsXG4gICAgfSk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gYWxpZ25DZW50ZXJcbiAgICAgID8gdGhpcy5nZXRDZW50ZXJPZmZzZXQoe2l0ZW1zOiB2aXNpYmxlSXRlbXNXaXRoTmV3VHJhbnNsYXRlfSlcbiAgICAgIDogZGVmYXVsdFByb3BzLnRyYW5zbGF0ZTtcblxuICAgIHRyYW5zbGF0ZSA9IC0odHJhbnNsYXRlIC0gbWVudVBvcyAtIG9mZnNldCk7XG5cbiAgICBpZiAodGhpcy5pdEJlZm9yZVN0YXJ0KHRyYW5zbGF0ZSkpIHtcbiAgICAgIHRyYW5zbGF0ZSA9IHRoaXMuZ2V0T2Zmc2V0QXRTdGFydCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pdEFmdGVyRW5kKHRyYW5zbGF0ZSkpIHtcbiAgICAgIHRyYW5zbGF0ZSA9IHRoaXMuZ2V0T2Zmc2V0QXRFbmQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm1hdFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICB9O1xuXG4gIC8qKiBnZXQgaW5kZXggb2YgaXRlbSBmcm9tIGl0J3Mga2V5ICovXG4gIGdldEl0ZW1JbmRleEJ5S2V5ID0gKGl0ZW1LZXk6IHN0cmluZyk6IG51bWJlciA9PiB7XG4gICAgaWYgKCFpdGVtS2V5KSByZXR1cm4gLTE7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YS5maW5kSW5kZXgoZWwgPT4gZWwua2V5ID09PSBpdGVtS2V5KTtcbiAgfTtcblxuICAvKiogb2Zmc2V0IGZyb20gc3RhcnQgdG8gaXRlbSAqL1xuICBnZXRPZmZzZXRUb0l0ZW1CeUluZGV4ID0gKHtcbiAgICBpbmRleCxcbiAgICBtZW51SXRlbXMgPSB0aGlzLm1lbnVJdGVtcyxcbiAgICB0cmFuc2xhdGUgPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZSxcbiAgfSk6IG51bWJlciA9PiB7XG4gICAgaWYgKCFtZW51SXRlbXMubGVuZ3RoKSByZXR1cm4gMDtcbiAgICBjb25zdCBpbmQgPSBpbmRleCA+PSBtZW51SXRlbXMubGVuZ3RoID8gbWVudUl0ZW1zLmxlbmd0aCAtIDEgOiBpbmRleDtcbiAgICBjb25zdCB7eH0gPSBnZXRDbGllbnRSZWN0KG1lbnVJdGVtc1tpbmRdWzFdKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9ICt4IC0gdHJhbnNsYXRlO1xuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfTtcblxuICAvKiogZ2V0IG5ldyBvZmZzZXQgdmFsdWUgd2hlbiBzY3JvbGwgcmlnaHQgKi9cbiAgLy8gVE9ETzogbWF5YmUgcmVmYWN0b3IgaXRcbiAgZ2V0U2Nyb2xsUmlnaHRPZmZzZXQgPSAodmlzaWJsZUl0ZW1zOiBNZW51SXRlbXMsIGl0ZW1zOiBNZW51SXRlbXMpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHthbGlnbkNlbnRlcn0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHttZW51UG9zLCBsYXN0UGFnZU9mZnNldH0gPSB0aGlzO1xuXG4gICAgY29uc3QgbmV4dEl0ZW0gPSB0aGlzLmdldE5leHRJdGVtKFxuICAgICAgdmlzaWJsZUl0ZW1zICYmIHZpc2libGVJdGVtcy5zbGljZSgtMSlbMF1cbiAgICAgICAgPyB2aXNpYmxlSXRlbXMuc2xpY2UoLTEpWzBdWzBdXG4gICAgICAgIDogaXRlbXMuc2xpY2UoLTEpWzBdWzBdLFxuICAgICk7XG4gICAgY29uc3QgbmV4dEl0ZW1JbmRleCA9IGl0ZW1zLmZpbmRJbmRleChlbCA9PiBlbFswXSA9PT0gbmV4dEl0ZW1bMF0pO1xuXG4gICAgY29uc3Qgb2Zmc2V0VG9JdGVtID0gdGhpcy5nZXRPZmZzZXRUb0l0ZW1CeUluZGV4KHtcbiAgICAgIGluZGV4OiBuZXh0SXRlbUluZGV4LFxuICAgICAgbWVudUl0ZW1zOiBpdGVtcyxcbiAgICB9KTtcbiAgICBjb25zdCBvZmZzZXRUb0l0ZW1PblN0YXJ0ID0gb2Zmc2V0VG9JdGVtIC0gbWVudVBvcztcblxuICAgIGNvbnN0IG5leHRWaXNpYmxlSXRlbXMgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7XG4gICAgICBpdGVtcyxcbiAgICAgIG9mZnNldDogLW9mZnNldFRvSXRlbU9uU3RhcnQsXG4gICAgfSk7XG5cbiAgICBpZiAobmV4dFZpc2libGVJdGVtcy5pbmNsdWRlcyhpdGVtcy5zbGljZSgtMSlbMF0pKSB7XG4gICAgICByZXR1cm4gYWxpZ25DZW50ZXJcbiAgICAgICAgPyBvZmZzZXRUb0l0ZW1PblN0YXJ0ICsgbGFzdFBhZ2VPZmZzZXRcbiAgICAgICAgOiBvZmZzZXRUb0l0ZW1PblN0YXJ0O1xuICAgIH1cblxuICAgIGNvbnN0IGNlbnRlck9mZnNldCA9ICgpID0+IHRoaXMuZ2V0Q2VudGVyT2Zmc2V0KHtpdGVtczogbmV4dFZpc2libGVJdGVtc30pO1xuXG4gICAgY29uc3QgbmV3T2Zmc2V0ID0gYWxpZ25DZW50ZXJcbiAgICAgID8gb2Zmc2V0VG9JdGVtT25TdGFydCAtIGNlbnRlck9mZnNldCgpXG4gICAgICA6IG9mZnNldFRvSXRlbU9uU3RhcnQ7XG4gICAgcmV0dXJuIG5ld09mZnNldDtcbiAgfTtcblxuICAvKiogZ2V0IG5ldyBvZmZzZXQgdmFsdWUgd2hlbiBzY3JvbGwgbGVmdCAqL1xuICBnZXRTY3JvbGxMZWZ0T2Zmc2V0ID0gKHZpc2libGVJdGVtczogTWVudUl0ZW1zLCBpdGVtczogTWVudUl0ZW1zKTogbnVtYmVyID0+IHtcbiAgICBjb25zdCB7YWxpZ25DZW50ZXJ9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7bWVudVBvcywgbWVudVdpZHRoLCBmaXJzdFBhZ2VPZmZzZXR9ID0gdGhpcztcblxuICAgIGNvbnN0IHByZXZJdGVtID0gdGhpcy5nZXRQcmV2SXRlbShcbiAgICAgIHZpc2libGVJdGVtcyAmJiB2aXNpYmxlSXRlbXNbMF0gPyB2aXNpYmxlSXRlbXNbMF1bMF0gOiBpdGVtc1swXVswXSxcbiAgICApO1xuICAgIGNvbnN0IHByZXZJdGVtSW5kZXggPSBpdGVtcy5maW5kSW5kZXgoZWwgPT4gZWxbMF0gPT09IHByZXZJdGVtWzBdKTtcblxuICAgIGNvbnN0IG9mZnNldFRvSXRlbSA9IHRoaXMuZ2V0T2Zmc2V0VG9JdGVtQnlJbmRleCh7XG4gICAgICBpbmRleDogcHJldkl0ZW1JbmRleCxcbiAgICAgIG1lbnVJdGVtczogaXRlbXMsXG4gICAgfSk7XG4gICAgY29uc3QgaXRlbVdpZHRoID0gdGhpcy5nZXRJdGVtc1dpZHRoKHtpdGVtczogW3ByZXZJdGVtXX0pO1xuICAgIGNvbnN0IG9mZnNldFRvSXRlbU9uRW5kID0gb2Zmc2V0VG9JdGVtIC0gbWVudVBvcyAtIChtZW51V2lkdGggLSBpdGVtV2lkdGgpO1xuXG4gICAgY29uc3QgbmV4dFZpc2libGVJdGVtcyA9IHRoaXMuZ2V0VmlzaWJsZUl0ZW1zKHtcbiAgICAgIGl0ZW1zLFxuICAgICAgb2Zmc2V0OiAtb2Zmc2V0VG9JdGVtT25FbmQsXG4gICAgfSk7XG5cbiAgICBpZiAobmV4dFZpc2libGVJdGVtcy5pbmNsdWRlcyhpdGVtc1swXSkpIHtcbiAgICAgIHJldHVybiBhbGlnbkNlbnRlciA/IC1maXJzdFBhZ2VPZmZzZXQgOiAwO1xuICAgIH1cblxuICAgIGNvbnN0IGNlbnRlck9mZnNldCA9ICgpID0+IHRoaXMuZ2V0Q2VudGVyT2Zmc2V0KHtpdGVtczogbmV4dFZpc2libGVJdGVtc30pO1xuXG4gICAgY29uc3QgbmV3T2Zmc2V0ID0gYWxpZ25DZW50ZXJcbiAgICAgID8gb2Zmc2V0VG9JdGVtT25FbmQgKyBjZW50ZXJPZmZzZXQoKVxuICAgICAgOiBvZmZzZXRUb0l0ZW1PbkVuZDtcbiAgICByZXR1cm4gbmV3T2Zmc2V0O1xuICB9O1xuXG4gIC8qKiBnZXQgbmV4dCBpdGVtIGJ5IGtleSAqL1xuICBnZXROZXh0SXRlbSA9IChrZXk6IHN0cmluZyk6IE1lbnVJdGVtID0+IHtcbiAgICBjb25zdCB7bWVudUl0ZW1zfSA9IHRoaXM7XG4gICAgY29uc3QgaXRlbUluZGV4ID0gbWVudUl0ZW1zLmZpbmRJbmRleChlbCA9PiBlbFswXSA9PT0ga2V5KTtcbiAgICBjb25zdCBuZXh0SXRlbUluZGV4ID0gaXRlbUluZGV4ICsgMTtcbiAgICBjb25zdCBuZXh0SXRlbSA9IG1lbnVJdGVtc1tuZXh0SXRlbUluZGV4XSB8fCBtZW51SXRlbXMuc2xpY2UoLTEpWzBdO1xuICAgIHJldHVybiBuZXh0SXRlbTtcbiAgfTtcblxuICAvKiogZ2V0IHBycmV2IGl0ZW0gYnkga2V5ICovXG4gIGdldFByZXZJdGVtID0gKGtleTogc3RyaW5nKTogTWVudUl0ZW0gPT4ge1xuICAgIGNvbnN0IHttZW51SXRlbXN9ID0gdGhpcztcbiAgICBjb25zdCBpdGVtSW5kZXggPSBtZW51SXRlbXMuZmluZEluZGV4KGVsID0+IGVsWzBdID09PSBrZXkpO1xuICAgIGNvbnN0IHByZXZJdGVtSW5kZXggPSBpdGVtSW5kZXggLSAxO1xuICAgIGNvbnN0IHByZXZJdGVtID0gbWVudUl0ZW1zW3ByZXZJdGVtSW5kZXhdIHx8IG1lbnVJdGVtc1swXTtcbiAgICByZXR1cm4gcHJldkl0ZW07XG4gIH07XG5cbiAgLyoqIGdldCBuZXcgb2Zmc2V0IHZhbHVlIHdoZW4gc2Nyb2xsIGxlZnQvcmlnaHQgKi9cbiAgZ2V0T2Zmc2V0ID0gKGxlZnQ6IGJvb2xlYW4pOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHttZW51SXRlbXM6IGl0ZW1zfSA9IHRoaXM7XG4gICAgY29uc3QgdmlzaWJsZUl0ZW1zID0gdGhpcy5nZXRWaXNpYmxlSXRlbXMoe2l0ZW1zfSk7XG4gICAgY29uc3QgbmV3T2Zmc2V0ID0gbGVmdFxuICAgICAgPyB0aGlzLmdldFNjcm9sbExlZnRPZmZzZXQodmlzaWJsZUl0ZW1zLCBpdGVtcylcbiAgICAgIDogdGhpcy5nZXRTY3JvbGxSaWdodE9mZnNldCh2aXNpYmxlSXRlbXMsIGl0ZW1zKTtcbiAgICByZXR1cm4gbmV3T2Zmc2V0O1xuICB9O1xuXG4gIC8qKiBvZmZzZXQgZnJvbSAwIHRvIGZpcnN0IG1lbnUgaXRlbSB3aGVuIHNjcm9sbCxcbiAgICogbmVlZCBwYXNzIGl0ZW1zIHZpc2libGUgb24gc2NyZWVuXG4gICovXG4gIGdldENlbnRlck9mZnNldCA9IChcbiAgICB7aXRlbXMgPSB0aGlzLm1lbnVJdGVtcywgbWVudVdpZHRoID0gdGhpcy5tZW51V2lkdGh9XG4gICAgOiB7aXRlbXM/OiBNZW51SXRlbXMsIG1lbnVXaWR0aD86IG51bWJlcn0pOiBudW1iZXIgPT4ge1xuICAgIGlmICghaXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgaXRlbXNXaWR0aCA9IHRoaXMuZ2V0SXRlbXNXaWR0aCh7aXRlbXN9KTtcbiAgICBjb25zdCBvZmZzZXQgPSAobWVudVdpZHRoIC0gaXRlbXNXaWR0aCkgLyAyO1xuICAgIHJldHVybiBmb3JtYXRUcmFuc2xhdGUob2Zmc2V0KTtcbiAgfTtcblxuICAvKiogbW91c2Ugd2hlZWwgaGFuZGxlciAqL1xuICBoYW5kbGVXaGVlbCA9IChlOiBXaGVlbEV2ZW50KTogVm9pZCA9PiB7XG4gICAgY29uc3Qge3doZWVsfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCF3aGVlbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChlLmRlbHRhWSA8IDApIHtcbiAgICAgIHRoaXMuaGFuZGxlQXJyb3dDbGljaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZUFycm93Q2xpY2soZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICAvKiogb2Zmc2V0IGF0IHN0YXJ0ICovXG4gIGdldE9mZnNldEF0U3RhcnQgPSAoKTogbnVtYmVyID0+IHtcbiAgICBjb25zdCB7Zmlyc3RQYWdlT2Zmc2V0fSA9IHRoaXM7XG4gICAgY29uc3Qge2FsaWduQ2VudGVyfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIGFsaWduQ2VudGVyID8gZmlyc3RQYWdlT2Zmc2V0IDogZGVmYXVsdFByb3BzLnRyYW5zbGF0ZTtcbiAgfTtcblxuICAvKiogb2Zmc2V0IGF0IGVuZCAqL1xuICBnZXRPZmZzZXRBdEVuZCA9ICgpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHthbGlnbkNlbnRlcn0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHthbGxJdGVtc1dpZHRoLCBtZW51V2lkdGgsIGxhc3RQYWdlT2Zmc2V0fSA9IHRoaXM7XG4gICAgY29uc3Qgb2Zmc2V0ID0gYWxsSXRlbXNXaWR0aCAtIG1lbnVXaWR0aDtcbiAgICByZXR1cm4gYWxpZ25DZW50ZXIgPyAtb2Zmc2V0IC0gbGFzdFBhZ2VPZmZzZXQgOiAtb2Zmc2V0O1xuICB9O1xuXG5cbiAgLyoqIGNsaWNrIHJpZ2h0IGFycm93ICovXG4gIGhhbmRsZUFycm93Q2xpY2tSaWdodCA9ICgpOiBWb2lkID0+IHtcbiAgICB0aGlzLmhhbmRsZUFycm93Q2xpY2soZmFsc2UpO1xuICB9O1xuXG4gIC8qKiBjbGljayBhcnJvdy9zY3JvbGwgKi9cbiAgaGFuZGxlQXJyb3dDbGljayA9IChsZWZ0ID0gdHJ1ZSk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHthbGlnbkNlbnRlcn0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHthbGxJdGVtc1dpZHRoLCBtZW51V2lkdGh9ID0gdGhpcztcblxuICAgIGlmICghYWxpZ25DZW50ZXIgJiYgIWxlZnQgJiYgYWxsSXRlbXNXaWR0aCA8IG1lbnVXaWR0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuZ2V0T2Zmc2V0KGxlZnQpO1xuICAgIGxldCB0cmFuc2wgPSAtb2Zmc2V0O1xuXG4gICAgaWYgKGxlZnQgJiYgdGhpcy5pdEJlZm9yZVN0YXJ0KHRyYW5zbCkpIHtcbiAgICAgIHRyYW5zbCA9IHRoaXMuZ2V0T2Zmc2V0QXRTdGFydCgpO1xuICAgIH1cbiAgICBpZiAoIWxlZnQgJiYgdGhpcy5pdEFmdGVyRW5kKHRyYW5zbCkpIHtcbiAgICAgIHRyYW5zbCA9IHRoaXMuZ2V0T2Zmc2V0QXRFbmQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdUcmFuc2xhdGUgPSBmb3JtYXRUcmFuc2xhdGUodHJhbnNsKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdHJhbnNsYXRlOiBuZXdUcmFuc2xhdGUsXG4gICAgICB4UG9pbnQ6IGRlZmF1bHRQcm9wcy54UG9pbnQsXG4gICAgICBzdGFydERyYWdUcmFuc2xhdGU6IDAsXG4gICAgICB4RHJhZ2dlZERpc3RhbmNlOiAwLFxuICAgIH0pO1xuICB9O1xuXG4gIC8qKiBjaGVjayBpZiBwb3NpdGlvbiBiZWZvcmUgZmlyc3QgZWxlbWVudCAqL1xuICBpdEJlZm9yZVN0YXJ0ID0gKHRyYW5zOiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCB7YWxpZ25DZW50ZXJ9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7bWVudVdpZHRoLCBhbGxJdGVtc1dpZHRoLCBmaXJzdFBhZ2VPZmZzZXR9ID0gdGhpcztcbiAgICBpZiAoYWxsSXRlbXNXaWR0aCA8IG1lbnVXaWR0aCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGFsaWduQ2VudGVyXG4gICAgICA/IHRyYW5zID4gZmlyc3RQYWdlT2Zmc2V0XG4gICAgICA6IHRyYW5zID4gZGVmYXVsdFByb3BzLnRyYW5zbGF0ZTtcbiAgfTtcbiAgLyoqIGNoZWNrIGlmIHBvc2l0aW9uIGFmdGVyIGxhc3QgZWxlbWVudCAqL1xuICBpdEFmdGVyRW5kID0gKHRyYW5zOiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCB7YWxpZ25DZW50ZXJ9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7bWVudVdpZHRoLCBhbGxJdGVtc1dpZHRoLCBsYXN0UGFnZU9mZnNldH0gPSB0aGlzO1xuICAgIGlmIChhbGxJdGVtc1dpZHRoIDwgbWVudVdpZHRoKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gYWxpZ25DZW50ZXJcbiAgICAgID8gdHJhbnMgPCBkZWZhdWx0UHJvcHMudHJhbnNsYXRlICYmXG4gICAgICAgICAgTWF0aC5hYnModHJhbnMpID4gYWxsSXRlbXNXaWR0aCAtIG1lbnVXaWR0aCArIGxhc3RQYWdlT2Zmc2V0XG4gICAgICA6IHRyYW5zIDwgZGVmYXVsdFByb3BzLnRyYW5zbGF0ZSAmJlxuICAgICAgICAgIE1hdGguYWJzKHRyYW5zKSA+IGFsbEl0ZW1zV2lkdGggLSBtZW51V2lkdGg7XG4gIH07XG5cbiAgLyoqIGdldCBjb29yZHMgZnJvbSBtb3VzZSBldmVudCAqL1xuICBnZXRQb2ludCA9IChldjogUmVhY3QuTW91c2VFdmVudHxSZWFjdC5Ub3VjaEV2ZW50fEV2ZW50KTogbnVtYmVyID0+IHtcbiAgICBpZiAoJ3RvdWNoZXMnIGluIGV2KSB7XG4gICAgICByZXR1cm4gZXYudG91Y2hlc1swXS5jbGllbnRYO1xuICAgIH0gZWxzZSBpZiAoJ2NsaWVudFgnIGluIGV2KSB7XG4gICAgICByZXR1cm4gZXYuY2xpZW50WDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgfTtcblxuICAvKiogZXZlbnQgaGFuZGxlciB3aGVuIHN0YXJ0IGRyYWcgYW5kIG1vdXNlIGRvd24gICovXG4gIGhhbmRsZURyYWdTdGFydCA9IChldjogUmVhY3QuTW91c2VFdmVudHxSZWFjdC5Ub3VjaEV2ZW50KTogVm9pZCA9PiB7XG4gICAgLy8gMSBsZWZ0IGJ1dHRvbiwgMiByaWdodCBidXR0b25cbiAgICBpZiAoZXYgJiYgJ2J1dHRvbnMnIGluIGV2ICYmIGV2LmJ1dHRvbnMgPT09IDIpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCB7ZHJhZ2dpbmc6IGRyYWdnaW5nRW5hYmxlfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFkcmFnZ2luZ0VuYWJsZSkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IHt0cmFuc2xhdGU6IHN0YXJ0RHJhZ1RyYW5zbGF0ZX0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZHJhZ2dpbmc6IHRydWUsXG4gICAgICB4UG9pbnQ6IDAsXG4gICAgICBzdGFydERyYWdUcmFuc2xhdGUsXG4gICAgICB4RHJhZ2dlZERpc3RhbmNlOiAwLFxuICAgIH0pO1xuICB9O1xuXG4gIC8qKiBkcmFnIGV2ZW50IGhhbmRsZXIgKi9cbiAgaGFuZGxlRHJhZyA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50fFJlYWN0LlRvdWNoRXZlbnR8RXZlbnQpOiBWb2lkID0+IHtcbiAgICBjb25zdCB7ZHJhZ2dpbmc6IGRyYWdnaW5nRW5hYmxlfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge3RyYW5zbGF0ZSwgZHJhZ2dpbmcsIHhQb2ludCwgeERyYWdnZWREaXN0YW5jZX0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICghZHJhZ2dpbmdFbmFibGUgfHwgIWRyYWdnaW5nKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBwb2ludCA9IHRoaXMuZ2V0UG9pbnQoZSk7XG4gICAgY29uc3QgZGlmZiA9XG4gICAgICB4UG9pbnQgPT09IGRlZmF1bHRQcm9wcy54UG9pbnQgPyBkZWZhdWx0UHJvcHMueFBvaW50IDogeFBvaW50IC0gcG9pbnQ7XG4gICAgbGV0IHJlc3VsdCA9IHRyYW5zbGF0ZSAtIGRpZmY7XG5cbiAgICAvLyBkb24ndCBsZXQgc2Nyb2xsIG92ZXIgc3RhcnQgYW5kIGVuZFxuICAgIGlmICh0aGlzLml0QmVmb3JlU3RhcnQocmVzdWx0KSkge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0IC0gTWF0aC5hYnMoZGlmZikgLyAyO1xuICAgIH1cbiAgICBpZiAodGhpcy5pdEFmdGVyRW5kKHJlc3VsdCkpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdCArIE1hdGguYWJzKGRpZmYpIC8gMjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdUcmFuc2xhdGUgPSBmb3JtYXRUcmFuc2xhdGUocmVzdWx0KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgeFBvaW50OiBwb2ludCxcbiAgICAgIHRyYW5zbGF0ZTogbmV3VHJhbnNsYXRlLFxuICAgICAgeERyYWdnZWREaXN0YW5jZTogeERyYWdnZWREaXN0YW5jZSArIE1hdGguYWJzKGRpZmYpLFxuICAgIH0pO1xuICB9O1xuXG4gIC8qKiBldmVudCBoYW5kbGVyIHdoZW4gZHJhZyBhbmQgbW91c2UgdXAgICovXG4gIGhhbmRsZURyYWdTdG9wID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnR8UmVhY3QuVG91Y2hFdmVudHxFdmVudCk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHthbGxJdGVtc1dpZHRoLCBtZW51V2lkdGgsIGZpcnN0UGFnZU9mZnNldCwgbGFzdFBhZ2VPZmZzZXR9ID0gdGhpcztcbiAgICBsZXQge1xuICAgICAgZHJhZ2dpbmcsXG4gICAgICB4UG9pbnQgPSB0aGlzLmdldFBvaW50KGUpLFxuICAgICAgdHJhbnNsYXRlLFxuICAgICAgc3RhcnREcmFnVHJhbnNsYXRlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtkcmFnZ2luZzogZHJhZ2dpbmdFbmFibGUsIGFsaWduQ2VudGVyfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFkcmFnZ2luZ0VuYWJsZSB8fCAhZHJhZ2dpbmcpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBuZXdUcmFuc2xhdGUgPSB0cmFuc2xhdGU7XG5cbiAgICBpZiAodGhpcy5pdEJlZm9yZVN0YXJ0KHRyYW5zbGF0ZSkpIHtcbiAgICAgIG5ld1RyYW5zbGF0ZSA9IGFsaWduQ2VudGVyID8gZmlyc3RQYWdlT2Zmc2V0IDogZGVmYXVsdFByb3BzLnRyYW5zbGF0ZTtcbiAgICAgIHhQb2ludCA9IGRlZmF1bHRQcm9wcy54UG9pbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLml0QWZ0ZXJFbmQodHJhbnNsYXRlKSkge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gYWxsSXRlbXNXaWR0aCAtIG1lbnVXaWR0aDtcbiAgICAgIG5ld1RyYW5zbGF0ZSA9IGFsaWduQ2VudGVyID8gLW9mZnNldCAtIGxhc3RQYWdlT2Zmc2V0IDogLW9mZnNldDtcbiAgICAgIHhQb2ludCA9IGRlZmF1bHRQcm9wcy54UG9pbnQ7XG4gICAgfVxuXG4gICAgaWYgKCFhbGlnbkNlbnRlciAmJiBtZW51V2lkdGggPj0gYWxsSXRlbXNXaWR0aCkge1xuICAgICAgbmV3VHJhbnNsYXRlID0gZGVmYXVsdFByb3BzLnRyYW5zbGF0ZTtcbiAgICAgIHhQb2ludCA9IGRlZmF1bHRQcm9wcy54UG9pbnQ7XG4gICAgfVxuXG4gICAgbmV3VHJhbnNsYXRlID0gZm9ybWF0VHJhbnNsYXRlKG5ld1RyYW5zbGF0ZSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgIHhQb2ludCxcbiAgICAgICAgdHJhbnNsYXRlOiBuZXdUcmFuc2xhdGUsXG4gICAgICB9LFxuICAgICAgKCkgPT5cbiAgICAgICAgdGhpcy5vblVwZGF0ZSh7XG4gICAgICAgICAgdHJhbnNsYXRlOiBuZXdUcmFuc2xhdGUsXG4gICAgICAgICAgdHJhbnNsYXRlT2xkOiBzdGFydERyYWdUcmFuc2xhdGUsXG4gICAgICAgIH0pLFxuICAgICk7XG4gIH07XG5cbiAgLyoqIGNoZWNrIGlmIG5vIG5lZWQgc2hvdyBhcnJvd3MgKi9cbiAgaXNBcnJvd3NWaXNpYmxlID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGFsbEl0ZW1zV2lkdGgsXG4gICAgICBtZW51V2lkdGgsXG4gICAgICBwcm9wczoge2hpZGVBcnJvd3N9LFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGhpZGUgPSBCb29sZWFuKGhpZGVBcnJvd3MgJiYgYWxsSXRlbXNXaWR0aCA8PSBtZW51V2lkdGgpO1xuICAgIHJldHVybiAhaGlkZTtcbiAgfTtcblxuICAvKiogY2IgZm9yIHBvc2l0aW9uIHVwZGF0ZSAqL1xuICBvblVwZGF0ZSA9ICh7XG4gICAgdHJhbnNsYXRlID0gdGhpcy5zdGF0ZS50cmFuc2xhdGUsXG4gICAgdHJhbnNsYXRlT2xkID0gdGhpcy5zdGF0ZS50cmFuc2xhdGUsXG4gIH0gOiB7XG4gICAgdHJhbnNsYXRlPzogbnVtYmVyLFxuICAgIHRyYW5zbGF0ZU9sZD86IG51bWJlclxuICB9KTogVm9pZCA9PiB7XG4gICAgY29uc3Qge29uVXBkYXRlfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge2xhc3RUcmFuc2xhdGVVcGRhdGV9ID0gdGhpcztcbiAgICBpZiAoXG4gICAgICBvblVwZGF0ZSAmJlxuICAgICAgdHJhbnNsYXRlICE9PSB0cmFuc2xhdGVPbGQgJiZcbiAgICAgIHRyYW5zbGF0ZSAhPT0gbGFzdFRyYW5zbGF0ZVVwZGF0ZVxuICAgICkge1xuICAgICAgdGhpcy5sYXN0VHJhbnNsYXRlVXBkYXRlID0gdHJhbnNsYXRlO1xuICAgICAgb25VcGRhdGUoe3RyYW5zbGF0ZX0pO1xuICAgIH1cbiAgfTtcblxuICBwdWJsaWMgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZXxudWxsIHtcbiAgICBjb25zdCB7XG4gICAgICBhcnJvd0NsYXNzLFxuICAgICAgYXJyb3dEaXNhYmxlZENsYXNzLFxuICAgICAgYXJyb3dMZWZ0LFxuICAgICAgYXJyb3dSaWdodCxcbiAgICAgIGRhdGEsXG4gICAgICBpbm5lcldyYXBwZXJDbGFzcyxcbiAgICAgIGl0ZW1DbGFzcyxcbiAgICAgIGl0ZW1DbGFzc0FjdGl2ZSxcbiAgICAgIGhpZGVBcnJvd3MsXG4gICAgICBtZW51U3R5bGUsXG4gICAgICBtZW51Q2xhc3MsXG4gICAgICB0cmFuc2l0aW9uLFxuICAgICAgd3JhcHBlckNsYXNzLFxuICAgICAgd3JhcHBlclN0eWxlLFxuICAgICAgZm9yd2FyZENsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0ZSxcbiAgICAgIGRyYWdnaW5nLFxuICAgICAgbGVmdEFycm93VmlzaWJsZSxcbiAgICAgIHJpZ2h0QXJyb3dWaXNpYmxlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtzZWxlY3RlZCwgbW91bnRlZH0gPSB0aGlzO1xuXG4gICAgaWYgKCFkYXRhIHx8ICFkYXRhLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBhcnJvd3NWaXNpYmxlID0gbW91bnRlZCA/IHRoaXMuaXNBcnJvd3NWaXNpYmxlKCkgOiB0cnVlO1xuXG4gICAgY29uc3QgbWVudVN0eWxlcyA9IHsuLi5kZWZhdWx0TWVudVN0eWxlLCAuLi5tZW51U3R5bGV9O1xuICAgIGNvbnN0IHdyYXBwZXJTdHlsZXMgPSB7Li4uZGVmYXVsdFdyYXBwZXJTdHlsZSwgLi4ud3JhcHBlclN0eWxlfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bWVudUNsYXNzfSBzdHlsZT17bWVudVN0eWxlc30gb25XaGVlbD17dGhpcy5oYW5kbGVXaGVlbH0+XG4gICAgICAgIHthcnJvd0xlZnQgJiYgKFxuICAgICAgICAgIDxBcnJvd1dyYXBwZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dDbGFzc31cbiAgICAgICAgICAgIGlzRGlzYWJsZWQ9eyFhcnJvd3NWaXNpYmxlIHx8ICFsZWZ0QXJyb3dWaXNpYmxlfVxuICAgICAgICAgICAgaGlkZUFycm93cz17aGlkZUFycm93c31cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXJyb3dDbGlja31cbiAgICAgICAgICAgIGRpc2FibGVkQ2xhc3M9e2Fycm93RGlzYWJsZWRDbGFzc31cbiAgICAgICAgICAgIGZvcndhcmRDbGljaz17Zm9yd2FyZENsaWNrfT5cbiAgICAgICAgICAgIHthcnJvd0xlZnR9XG4gICAgICAgICAgPC9BcnJvd1dyYXBwZXI+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17d3JhcHBlckNsYXNzfVxuICAgICAgICAgIHN0eWxlPXt3cmFwcGVyU3R5bGVzfVxuICAgICAgICAgIHJlZj17dGhpcy5zZXRXcmFwcGVyUmVmfVxuICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZURyYWdTdGFydH1cbiAgICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMuaGFuZGxlRHJhZ1N0YXJ0fVxuICAgICAgICAgIG9uVG91Y2hFbmQ9e3RoaXMuaGFuZGxlRHJhZ1N0b3B9XG4gICAgICAgICAgb25Nb3VzZU1vdmU9e3RoaXMuaGFuZGxlRHJhZ31cbiAgICAgICAgICBvblRvdWNoTW92ZT17dGhpcy5oYW5kbGVEcmFnfT5cbiAgICAgICAgICA8SW5uZXJXcmFwcGVyXG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgdHJhbnNsYXRlPXt0cmFuc2xhdGV9XG4gICAgICAgICAgICBkcmFnZ2luZz17ZHJhZ2dpbmd9XG4gICAgICAgICAgICBtb3VudGVkPXttb3VudGVkfVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17bW91bnRlZCA/IHRyYW5zaXRpb24gOiAwfVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICAgICAgc2V0UmVmPXt0aGlzLnNldFJlZn1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25JdGVtQ2xpY2t9XG4gICAgICAgICAgICBpbm5lcldyYXBwZXJDbGFzcz17aW5uZXJXcmFwcGVyQ2xhc3N9XG4gICAgICAgICAgICBpdGVtQ2xhc3M9e2l0ZW1DbGFzc31cbiAgICAgICAgICAgIGl0ZW1DbGFzc0FjdGl2ZT17aXRlbUNsYXNzQWN0aXZlfVxuICAgICAgICAgICAgZm9yd2FyZENsaWNrPXtmb3J3YXJkQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2Fycm93UmlnaHQgJiYgKFxuICAgICAgICAgIDxBcnJvd1dyYXBwZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dDbGFzc31cbiAgICAgICAgICAgIGlzRGlzYWJsZWQ9eyFhcnJvd3NWaXNpYmxlIHx8ICFyaWdodEFycm93VmlzaWJsZX1cbiAgICAgICAgICAgIGhpZGVBcnJvd3M9e2hpZGVBcnJvd3N9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFycm93Q2xpY2tSaWdodH1cbiAgICAgICAgICAgIGRpc2FibGVkQ2xhc3M9e2Fycm93RGlzYWJsZWRDbGFzc31cbiAgICAgICAgICAgIGZvcndhcmRDbGljaz17Zm9yd2FyZENsaWNrfT5cbiAgICAgICAgICAgIHthcnJvd1JpZ2h0fVxuICAgICAgICAgIDwvQXJyb3dXcmFwcGVyPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxNZW51O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==

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