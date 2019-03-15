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
      firstItemVisible: true,
      lastItemVisible: false,
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

    _this.checkFirstLastItemVisibility = function (_a) {
      var _b = _a.translate,
          translate = _b === void 0 ? _this.state.translate : _b;
      var menuItems = _this.menuItems;
      var firstItemVisible = true;
      var lastItemVisible = false;

      if (menuItems) {
        var visibleItems = _this.getVisibleItems({
          offset: translate
        });

        firstItemVisible = visibleItems.includes(menuItems[0]);
        lastItemVisible = visibleItems.includes(menuItems.slice(-1)[0]);
      }

      return {
        firstItemVisible: firstItemVisible,
        lastItemVisible: lastItemVisible
      };
    };

    _this.setFirstLastItemVisibility = function () {
      var _a = _this.state,
          firstItemVisibleOld = _a.firstItemVisible,
          lastItemVisibleOld = _a.lastItemVisible;

      var _b = _this.checkFirstLastItemVisibility({}),
          firstItemVisible = _b.firstItemVisible,
          lastItemVisible = _b.lastItemVisible;

      if (firstItemVisibleOld !== firstItemVisible || lastItemVisibleOld !== lastItemVisible) {
        var leftArrowVisible = !firstItemVisible;
        var rightArrowVisible = !lastItemVisible;

        _this.setState({
          firstItemVisible: firstItemVisible,
          lastItemVisible: lastItemVisible,
          leftArrowVisible: leftArrowVisible,
          rightArrowVisible: rightArrowVisible
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
      _this.updateWidth({});
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

      _this.updateWidth({});

      var newState = __assign({}, _this.state);

      var firstMountAndDefaultTranslate = !_this.mounted && translateProp === defautSettings_1.defaultProps.translate;

      if (firstMountAndDefaultTranslate || !utils_1.translateIsValid(translateProp) && !utils_1.translateIsValid(translateState)) {
        newState.translate = _this.firstPageOffset;
      }

      var _b = _this.checkFirstLastItemVisibility({
        translate: translateProp
      }),
          firstItemVisible = _b.firstItemVisible,
          lastItemVisible = _b.lastItemVisible;

      newState.firstItemVisible = firstItemVisible;
      newState.lastItemVisible = lastItemVisible;

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

      var _c = _this.getWidth({
        items: items
      }),
          wWidth = _c.wWidth,
          menuPos = _c.menuPos,
          menuWidth = _c.menuWidth,
          allItemsWidth = _c.allItemsWidth;

      var _d = _this.getPagesOffsets({
        items: items,
        wWidth: wWidth,
        menuPos: menuPos,
        menuWidth: menuWidth,
        allItemsWidth: allItemsWidth
      }),
          firstPageOffset = _d.firstPageOffset,
          lastPageOffset = _d.lastPageOffset;

      _this.menuPos = menuPos;
      _this.wWidth = wWidth;
      _this.allItemsWidth = allItemsWidth;
      _this.menuWidth = menuWidth;
      _this.firstPageOffset = firstPageOffset;
      _this.lastPageOffset = lastPageOffset;
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
          menuWidth = _a.menuWidth;
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
          translateOld = _c === void 0 ? _this.state.translate : _c,
          _d = _a.firstItemVisible,
          firstItemVisible = _d === void 0 ? _this.state.firstItemVisible : _d,
          _e = _a.lastItemVisible,
          lastItemVisible = _e === void 0 ? _this.state.lastItemVisible : _e;
      var onUpdate = _this.props.onUpdate;
      var lastTranslateUpdate = _this.lastTranslateUpdate;

      if (translate !== translateOld && translate !== lastTranslateUpdate) {
        _this.lastTranslateUpdate = translate;
        typeof onUpdate === 'function' && onUpdate({
          translate: translate,
          firstItemVisible: firstItemVisible,
          lastItemVisible: lastItemVisible
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
        firstItemVisible = _a.firstItemVisible,
        lastItemVisible = _a.lastItemVisible;
    var translateNew = nextState.translate,
        draggingNew = nextState.dragging,
        firstItemVisibleNew = nextState.firstItemVisible,
        lastItemVisibleNew = nextState.lastItemVisible;
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
    var firstItemVisibleDiff = firstItemVisible !== firstItemVisibleNew;
    var lastItemVisibleDiff = lastItemVisible !== lastItemVisibleNew;
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

    return newMenuItems || translateDiff || dragging !== draggingNew || propsDiff || firstItemVisibleDiff || lastItemVisibleDiff;
  };

  ScrollMenu.prototype.componentDidUpdate = function (prevProps, prevState) {
    var _this = this;

    if (this.needUpdate) {
      this.needUpdate = false;
      this.onLoad();
    }

    var translateOld = prevState.translate;
    var _a = this.state,
        translate = _a.translate,
        dragging = _a.dragging;

    if (!dragging && translateOld !== translate) {
      this.onUpdate({
        translate: translate,
        translateOld: translateOld
      });
    }

    ;
    var _b = this.props,
        hideSingleArrow = _b.hideSingleArrow,
        transition = _b.transition;

    if (hideSingleArrow) {
      requestAnimationFrame(this.setFirstLastItemVisibility);
      this.rafTimer = setTimeout(function () {
        return requestAnimationFrame(_this.setFirstLastItemVisibility);
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
      disabledClass: arrowDisabledClass,
      forwardClick: forwardClick
    };
    return react_1.default.createElement("div", {
      className: menuClass,
      style: menuStyles,
      onWheel: this.handleWheel
    }, arrowLeft && react_1.default.createElement(wrapper_1.ArrowWrapper, __assign({}, arrowProps, {
      isDisabled: !arrowsVisible || !leftArrowVisible,
      onClick: this.handleArrowClick
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
      isDisabled: !arrowsVisible || !rightArrowVisible,
      onClick: this.handleArrowClickRight
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUvc3JjL3Njcm9sbE1lbnUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUEsT0FBQSxHQUFBLGVBQUEsQ0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLENBQUE7O0FBRUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQTs7QUFNQSxJQUFBLGdCQUFBLEdBQUEsT0FBQSxDQUFBLGtCQUFBLENBQUE7O0FBTUEsSUFBQSxTQUFBLEdBQUEsT0FBQSxDQUFBLFdBQUEsQ0FBQTs7QUFjQSxJQUFBLFVBQUEsR0FBQSxVQUFBLE1BQUEsRUFBQTtBQUFnQyxFQUFBLFNBQUEsQ0FBQSxVQUFBLEVBQUEsTUFBQSxDQUFBOztBQXVCOUIsV0FBQSxVQUFBLENBQVksS0FBWixFQUE0QjtBQUE1QixRQUFBLEtBQUEsR0FDRSxNQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsRUFBTSxLQUFOLEtBQVksSUFEZDs7QUF3QkEsSUFBQSxLQUFBLENBQUEsS0FBQSxHQUFRO0FBQ04sTUFBQSxRQUFRLEVBQUUsS0FESjtBQUVOLE1BQUEsTUFBTSxFQUFFLENBRkY7QUFHTixNQUFBLFNBQVMsRUFBRSxLQUFJLENBQUMsS0FBTCxDQUFXLFNBSGhCO0FBSU4sTUFBQSxrQkFBa0IsRUFBRSxDQUpkO0FBS04sTUFBQSxnQkFBZ0IsRUFBRSxDQUxaO0FBTU4sTUFBQSxnQkFBZ0IsRUFBRSxJQU5aO0FBT04sTUFBQSxlQUFlLEVBQUUsS0FQWDtBQVFOLE1BQUEsZ0JBQWdCLEVBQUUsS0FSWjtBQVNOLE1BQUEsaUJBQWlCLEVBQUU7QUFUYixLQUFSOztBQTZKQSxJQUFBLEtBQUEsQ0FBQSxNQUFBLEdBQVMsVUFBQyxHQUFELEVBQWU7QUFDaEIsVUFBQSxFQUFBLEdBQUEsTUFBQSxDQUFBLE9BQUEs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LENBQUEsRUFBQSxFQUFLLFVBQUwsRUFBZTtBQUMxQixNQUFBLFVBQVUsRUFBRSxDQUFDLGFBQUQsSUFBa0IsQ0FBQyxpQkFETDtBQUUxQixNQUFBLE9BQU8sRUFBRSxLQUFLO0FBRlksS0FBZixDQUFiLEVBSUcsVUFKSCxDQXRDSixDQURGO0FBZ0RELEdBdEZNOztBQTU5QkEsRUFBQSxVQUFBLENBQUEsWUFBQSxHQUEwQixnQkFBQSxDQUFBLFlBQTFCO0FBbWpDVCxTQUFBLFVBQUE7QUFBQyxDQXBqQ0QsQ0FBZ0MsT0FBQSxDQUFBLE9BQUEsQ0FBTSxTQUF0QyxDQUFBOztBQUFhLE9BQUEsQ0FBQSxVQUFBLEdBQUEsVUFBQTs7QUFzakNiLElBQU0sWUFBWSxHQUFHLFNBQWYsWUFBZSxDQUFDLElBQUQsRUFBVTtBQUM3QixNQUFNLE9BQU8sR0FBSSxPQUFBLENBQUEsT0FBQSxDQUFNLE9BQVAsQ0FBZ0IsS0FBaEIsQ0FBc0IsY0FBdEIsQ0FBaEI7O0FBQ0EsTUFBSSxDQUFFLE9BQVEsQ0FBQyxDQUFELENBQVYsSUFBa0IsRUFBdEIsRUFBMEI7QUFDeEIsSUFBQSxJQUFJLENBQUMsaUJBQUwsR0FBeUIsVUFBQyxHQUFELEVBQVcsSUFBWCxFQUFvQjtBQUMzQyxNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksNEJBQVosRUFBMEMsR0FBMUMsRUFBK0MsSUFBL0M7QUFDRCxLQUZEO0FBR0Q7QUFDRixDQVBEOztBQVNBLE9BQUEsQ0FBQSxPQUFBLEdBQWUsVUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBXaGVlbEV2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICB0cmFuc2xhdGVJc1ZhbGlkLFxuICBub3RVbmRlZk9yTnVsbCxcbiAgZ2V0Q2xpZW50UmVjdCxcbiAgdGVzdFBhc3NpdmVFdmVudFN1cHBvcnQsXG59IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtcbiAgZGVmYXVsdFByb3BzLFxuICBkZWZhdWx0TWVudVN0eWxlLFxuICBkZWZhdWx0V3JhcHBlclN0eWxlLFxufSBmcm9tICcuL2RlZmF1dFNldHRpbmdzJztcbmltcG9ydCB7IE1lbnVQcm9wcywgUmVmLCBSZWZPYmplY3QsIFZvaWQsIE1lbnVJdGVtLCBNZW51SXRlbXMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IEFycm93V3JhcHBlciwgSW5uZXJXcmFwcGVyIH0gZnJvbSAnLi93cmFwcGVyJztcblxuaW50ZXJmYWNlIE1lbnVTdGF0ZSB7XG4gIGRyYWdnaW5nOiBib29sZWFuO1xuICB4UG9pbnQ6IG51bWJlcjtcbiAgdHJhbnNsYXRlOiBudW1iZXI7XG4gIHN0YXJ0RHJhZ1RyYW5zbGF0ZTogbnVtYmVyO1xuICB4RHJhZ2dlZERpc3RhbmNlOiBudW1iZXI7XG4gIGZpcnN0SXRlbVZpc2libGU6IGJvb2xlYW47XG4gIGxhc3RJdGVtVmlzaWJsZTogYm9vbGVhbjtcbiAgbGVmdEFycm93VmlzaWJsZTogYm9vbGVhbjtcbiAgcmlnaHRBcnJvd1Zpc2libGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBTY3JvbGxNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE1lbnVQcm9wcywgTWVudVN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IE1lbnVQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuICBwcml2YXRlIHJlZjogUmVmT2JqZWN0O1xuICBwcml2YXRlIG1lbnVXcmFwcGVyOiBSZWY7XG4gIHByaXZhdGUgbWVudUlubmVyOiBSZWY7XG4gIHByaXZhdGUgbW91bnRlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBuZWVkVXBkYXRlOiBib29sZWFuO1xuICBwcml2YXRlIGFsbEl0ZW1zV2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBtZW51UG9zOiBudW1iZXI7XG4gIHByaXZhdGUgbWVudVdpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgd1dpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgZmlyc3RQYWdlT2Zmc2V0OiBudW1iZXI7XG4gIHByaXZhdGUgbGFzdFBhZ2VPZmZzZXQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBsYXN0VHJhbnNsYXRlVXBkYXRlOiBudW1iZXI7XG4gIHByaXZhdGUgbWVudUl0ZW1zOiBNZW51SXRlbXM7XG4gIHByaXZhdGUgc2VsZWN0ZWQ6IHN0cmluZztcblxuICAvKiogdGltZXJzIGZvciBzZXRUaW1lb3V0IGlmIFJBRiBub3Qgc3VwcG9ydGVkICovXG4gIHByaXZhdGUgb25Mb2FkVGltZXI6IGFueTtcbiAgcHJpdmF0ZSByYWZUaW1lcjogYW55O1xuICBwcml2YXRlIHJlc2l6ZVRpbWVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IE1lbnVQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnJlZiA9IHt9O1xuICAgIHRoaXMubWVudVdyYXBwZXIgPSBudWxsO1xuICAgIHRoaXMubWVudUlubmVyID0gbnVsbDtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLm5lZWRVcGRhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmFsbEl0ZW1zV2lkdGggPSAwO1xuICAgIHRoaXMubWVudVBvcyA9IDA7XG4gICAgdGhpcy5tZW51V2lkdGggPSAwO1xuICAgIHRoaXMud1dpZHRoID0gMDtcbiAgICB0aGlzLmZpcnN0UGFnZU9mZnNldCA9IDA7XG4gICAgdGhpcy5sYXN0UGFnZU9mZnNldCA9IDA7XG4gICAgdGhpcy5sYXN0VHJhbnNsYXRlVXBkYXRlID0gMDtcbiAgICB0aGlzLm1lbnVJdGVtcyA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSAnJztcblxuICAgIHRoaXMub25Mb2FkVGltZXIgPSAwO1xuICAgIHRoaXMucmFmVGltZXIgPSAwO1xuICAgIHRoaXMucmVzaXplVGltZXIgPSAwO1xuXG4gICAgY2hlY2tWZXJzaW9uKHRoaXMpO1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgIHhQb2ludDogMCxcbiAgICB0cmFuc2xhdGU6IHRoaXMucHJvcHMudHJhbnNsYXRlLFxuICAgIHN0YXJ0RHJhZ1RyYW5zbGF0ZTogMCxcbiAgICB4RHJhZ2dlZERpc3RhbmNlOiAwLFxuICAgIGZpcnN0SXRlbVZpc2libGU6IHRydWUsXG4gICAgbGFzdEl0ZW1WaXNpYmxlOiBmYWxzZSxcbiAgICBsZWZ0QXJyb3dWaXNpYmxlOiBmYWxzZSxcbiAgICByaWdodEFycm93VmlzaWJsZTogdHJ1ZSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpOiBWb2lkIHtcbiAgICB0aGlzLnNldEluaXRpYWwoKTtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbigpIHt9O1xuXG4gICAgY29uc3QgcGFzc2l2ZUV2ZW50cyA9IHRlc3RQYXNzaXZlRXZlbnRTdXBwb3J0KCk7XG4gICAgY29uc3Qgb3B0aW9uc0NhcHR1cmUgPSBwYXNzaXZlRXZlbnRzXG4gICAgICA/IHsgcGFzc2l2ZTogdHJ1ZSwgY2FwdHVyZTogdHJ1ZSB9XG4gICAgICA6IHRydWU7XG4gICAgY29uc3Qgb3B0aW9uc05vQ2FwdHVyZSA9IHBhc3NpdmVFdmVudHNcbiAgICAgID8geyBwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiBmYWxzZSB9XG4gICAgICA6IGZhbHNlO1xuXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRoaXMub25Mb2FkLCBvcHRpb25zTm9DYXB0dXJlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemVIYW5kbGVyLCBvcHRpb25zTm9DYXB0dXJlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZURyYWcsIG9wdGlvbnNDYXB0dXJlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVEcmFnU3RvcCwgb3B0aW9uc0NhcHR1cmUpO1xuXG4gICAgLy8gaWYgc3R5bGVzIGxvYWRlZCBiZWZvcmUganMgYnVuZGxlIG5lZWQgd2FpdCBmb3IgaXRcbiAgICB0aGlzLm9uTG9hZFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiAodGhpcy5vbkxvYWQoKSwgdGhpcy5mb3JjZVVwZGF0ZSgpKSwgMCk7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzOiBNZW51UHJvcHMsIG5leHRTdGF0ZTogTWVudVN0YXRlKTogYm9vbGVhbiB7XG4gICAgLy8gVE9ETzogbmVlZCByZWZhY3RvciBhbGwgdGhpcyBvciByZW1vdmVcbiAgICAvLyBpdCdzIHRvbyBjb21wbGljYXRlZCBhbHJlYWR5XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNsYXRlLFxuICAgICAgZHJhZ2dpbmcsXG4gICAgICBmaXJzdEl0ZW1WaXNpYmxlLFxuICAgICAgbGFzdEl0ZW1WaXNpYmxlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlTmV3LFxuICAgICAgZHJhZ2dpbmc6IGRyYWdnaW5nTmV3LFxuICAgICAgZmlyc3RJdGVtVmlzaWJsZTogZmlyc3RJdGVtVmlzaWJsZU5ldyxcbiAgICAgIGxhc3RJdGVtVmlzaWJsZTogbGFzdEl0ZW1WaXNpYmxlTmV3LFxuICAgIH0gPSBuZXh0U3RhdGU7XG5cbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2xhdGU6IHRyYW5zbGF0ZVByb3BzLFxuICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkUHJvcHMsXG4gICAgICBzY3JvbGxUb1NlbGVjdGVkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlUHJvcHNOZXcsXG4gICAgICBzZWxlY3RlZDogc2VsZWN0ZWRQcm9wc05ldyxcbiAgICB9ID0gbmV4dFByb3BzO1xuXG4gICAgY29uc3QgdHJhbnNsYXRlUHJvcHNOb3ROdWxsID0gbm90VW5kZWZPck51bGwodHJhbnNsYXRlUHJvcHNOZXcpO1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlRGlmZiA9IHRyYW5zbGF0ZSAhPT0gdHJhbnNsYXRlTmV3O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVByb3BzRGlmZiA9XG4gICAgICB0cmFuc2xhdGVQcm9wc05vdE51bGwgJiYgdHJhbnNsYXRlUHJvcHMgIT09IHRyYW5zbGF0ZVByb3BzTmV3O1xuICAgIGNvbnN0IHRyYW5zbGF0ZURpZmYgPVxuICAgICAgdHJhbnNsYXRlUHJvcHNOZXcgIT09IHRyYW5zbGF0ZU5ldyB8fFxuICAgICAgKHRyYW5zbGF0ZVN0YXRlRGlmZiB8fCB0cmFuc2xhdGVQcm9wc0RpZmYpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9wc0RpZmYgPVxuICAgICAgbm90VW5kZWZPck51bGwoc2VsZWN0ZWRQcm9wc05ldykgJiYgc2VsZWN0ZWRQcm9wcyAhPT0gc2VsZWN0ZWRQcm9wc05ldztcbiAgICBjb25zdCBzZWxlY3RlZERpZmYgPSBzZWxlY3RlZFByb3BzRGlmZjtcblxuICAgIGNvbnN0IHByb3BzRGlmZiA9IHRyYW5zbGF0ZURpZmYgfHwgc2VsZWN0ZWREaWZmO1xuXG4gICAgY29uc3QgZmlyc3RJdGVtVmlzaWJsZURpZmYgPSBmaXJzdEl0ZW1WaXNpYmxlICE9PSBmaXJzdEl0ZW1WaXNpYmxlTmV3O1xuICAgIGNvbnN0IGxhc3RJdGVtVmlzaWJsZURpZmYgPSBsYXN0SXRlbVZpc2libGUgIT09IGxhc3RJdGVtVmlzaWJsZU5ldztcblxuICAgIGxldCB0cmFuc2xhdGVSZXN1bHQgPSB0cmFuc2xhdGVOZXc7XG5cbiAgICBjb25zdCBuZXdNZW51SXRlbXMgPVxuICAgICAgdGhpcy5wcm9wcy5kYXRhICE9PSBuZXh0UHJvcHMuZGF0YSB8fFxuICAgICAgdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCAhPT0gbmV4dFByb3BzLmRhdGEubGVuZ3RoO1xuICAgIGNvbnN0IG5ld1RyYW5zbGF0ZVByb3BzID1cbiAgICAgIHRyYW5zbGF0ZUlzVmFsaWQodHJhbnNsYXRlUHJvcHNOZXcpICYmXG4gICAgICB0cmFuc2xhdGVQcm9wc0RpZmYgJiZcbiAgICAgICFuZXdNZW51SXRlbXM7XG5cbiAgICBpZiAobmV3TWVudUl0ZW1zIHx8IChzY3JvbGxUb1NlbGVjdGVkICYmIHNlbGVjdGVkUHJvcHNEaWZmKSkge1xuICAgICAgdGhpcy5uZWVkVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHNEaWZmKSB7XG4gICAgICBpZiAoc2VsZWN0ZWRQcm9wc0RpZmYpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkUHJvcHNOZXc7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdUcmFuc2xhdGVQcm9wcykge1xuICAgICAgICB0cmFuc2xhdGVSZXN1bHQgPSB0cmFuc2xhdGVQcm9wc05ldztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3VHJhbnNsYXRlUHJvcHMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0cmFuc2xhdGU6ICt0cmFuc2xhdGVSZXN1bHQgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIG5ld01lbnVJdGVtcyB8fFxuICAgICAgdHJhbnNsYXRlRGlmZiB8fFxuICAgICAgZHJhZ2dpbmcgIT09IGRyYWdnaW5nTmV3IHx8XG4gICAgICBwcm9wc0RpZmYgfHxcbiAgICAgIGZpcnN0SXRlbVZpc2libGVEaWZmIHx8XG4gICAgICBsYXN0SXRlbVZpc2libGVEaWZmXG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IE1lbnVQcm9wcywgcHJldlN0YXRlOiBNZW51U3RhdGUpOiBWb2lkIHtcbiAgICAvLyB1cGRhdGUgaWYgaGF2ZSBuZXcgbWVudSBpdGVtcyBvciBzZWxlY3RlZCB2YWx1ZVxuICAgIGlmICh0aGlzLm5lZWRVcGRhdGUpIHtcbiAgICAgIHRoaXMubmVlZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5vbkxvYWQoKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHRyYW5zbGF0ZTogdHJhbnNsYXRlT2xkIH0gPSBwcmV2U3RhdGU7XG4gICAgY29uc3QgeyB0cmFuc2xhdGUsIGRyYWdnaW5nIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFkcmFnZ2luZyAmJiB0cmFuc2xhdGVPbGQgIT09IHRyYW5zbGF0ZSkge1xuICAgICAgLypcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZmlyc3RJdGVtVmlzaWJsZSxcbiAgICAgICAgbGFzdEl0ZW1WaXNpYmxlLFxuICAgICAgfSA9IHRoaXMuY2hlY2tGaXJzdExhc3RJdGVtVmlzaWJpbGl0eSh7IHRyYW5zbGF0ZSB9KTtcbiAgICAgICovXG4gICAgICB0aGlzLm9uVXBkYXRlKHsgdHJhbnNsYXRlLCB0cmFuc2xhdGVPbGQgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHsgaGlkZVNpbmdsZUFycm93LCB0cmFuc2l0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChoaWRlU2luZ2xlQXJyb3cpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnNldEZpcnN0TGFzdEl0ZW1WaXNpYmlsaXR5KTtcbiAgICAgIHRoaXMucmFmVGltZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zZXRGaXJzdExhc3RJdGVtVmlzaWJpbGl0eSksXG4gICAgICAgIHRyYW5zaXRpb24gKiAxMDAwICsgMTBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogVm9pZCB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplSGFuZGxlcik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVEcmFnKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVEcmFnU3RvcCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucmFmVGltZXIpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLm9uTG9hZFRpbWVyKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lcik7XG4gIH1cblxuICAvKiogc2V0IHJlZiBmb3IgTWVudUl0ZW1zICovXG4gIHNldFJlZiA9IChyZWY6IFJlZk9iamVjdCk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IE9iamVjdC5lbnRyaWVzKHJlZilbMF07XG4gICAgdmFsdWUuZWxlbSA/ICh0aGlzLnJlZltrZXldID0gdmFsdWUpIDogZmFsc2U7XG4gIH07XG5cbiAgc2V0TWVudUlubmVyUmVmID0gKHJlZjogUmVmKSA9PiB7XG4gICAgdGhpcy5tZW51SW5uZXIgPSByZWY7XG4gIH07XG5cbiAgLyoqIHNldCByZWYgZm9yIHdyYXBwZXIgKi9cbiAgc2V0V3JhcHBlclJlZiA9IChyZWY6IFJlZik6IFZvaWQgPT4ge1xuICAgIHRoaXMubWVudVdyYXBwZXIgPSByZWY7XG4gIH07XG5cbiAgLyoqIGNoZWNrIGlmIGZpcnN0IGFuZCBsYXN0IGl0ZW1zIHZpc2libGUgKi9cbiAgY2hlY2tGaXJzdExhc3RJdGVtVmlzaWJpbGl0eSA9ICh7XG4gICAgdHJhbnNsYXRlID0gdGhpcy5zdGF0ZS50cmFuc2xhdGUsXG4gIH06IHtcbiAgICB0cmFuc2xhdGU/OiBudW1iZXI7XG4gIH0pOiB7IGZpcnN0SXRlbVZpc2libGU6IGJvb2xlYW47IGxhc3RJdGVtVmlzaWJsZTogYm9vbGVhbiB9ID0+IHtcbiAgICBjb25zdCB7IG1lbnVJdGVtcyB9ID0gdGhpcztcblxuICAgIGxldCBmaXJzdEl0ZW1WaXNpYmxlID0gdHJ1ZTtcbiAgICBsZXQgbGFzdEl0ZW1WaXNpYmxlID0gZmFsc2U7XG4gICAgaWYgKG1lbnVJdGVtcykge1xuICAgICAgY29uc3QgdmlzaWJsZUl0ZW1zID0gdGhpcy5nZXRWaXNpYmxlSXRlbXMoeyBvZmZzZXQ6IHRyYW5zbGF0ZSB9KTtcbiAgICAgIGZpcnN0SXRlbVZpc2libGUgPSB2aXNpYmxlSXRlbXMuaW5jbHVkZXMobWVudUl0ZW1zWzBdKTtcbiAgICAgIGxhc3RJdGVtVmlzaWJsZSA9IHZpc2libGVJdGVtcy5pbmNsdWRlcyhtZW51SXRlbXMuc2xpY2UoLTEpWzBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBmaXJzdEl0ZW1WaXNpYmxlLCBsYXN0SXRlbVZpc2libGUgfTtcbiAgfTtcblxuICAvKiogY2hlY2sgZmlyc3QgYW5kIGxhc3QgaXRlbXMgYW5kIHNldFN0YXRlICovXG4gIHNldEZpcnN0TGFzdEl0ZW1WaXNpYmlsaXR5ID0gKCk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpcnN0SXRlbVZpc2libGU6IGZpcnN0SXRlbVZpc2libGVPbGQsXG4gICAgICBsYXN0SXRlbVZpc2libGU6IGxhc3RJdGVtVmlzaWJsZU9sZFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIGZpcnN0SXRlbVZpc2libGUsXG4gICAgICBsYXN0SXRlbVZpc2libGUsXG4gICAgfSA9IHRoaXMuY2hlY2tGaXJzdExhc3RJdGVtVmlzaWJpbGl0eSh7fSk7XG4gICAgaWYgKFxuICAgICAgZmlyc3RJdGVtVmlzaWJsZU9sZCAhPT0gZmlyc3RJdGVtVmlzaWJsZSB8fFxuICAgICAgbGFzdEl0ZW1WaXNpYmxlT2xkICE9PSBsYXN0SXRlbVZpc2libGVcbiAgICApIHtcbiAgICAgIGNvbnN0IGxlZnRBcnJvd1Zpc2libGUgPSAhZmlyc3RJdGVtVmlzaWJsZTtcbiAgICAgIGNvbnN0IHJpZ2h0QXJyb3dWaXNpYmxlID0gIWxhc3RJdGVtVmlzaWJsZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmaXJzdEl0ZW1WaXNpYmxlLFxuICAgICAgICBsYXN0SXRlbVZpc2libGUsXG4gICAgICAgIGxlZnRBcnJvd1Zpc2libGUsXG4gICAgICAgIHJpZ2h0QXJyb3dWaXNpYmxlLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uTG9hZCA9ICgpOiBWb2lkID0+IHtcbiAgICB0aGlzLnNldEluaXRpYWwoKTtcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuICB9O1xuXG4gIC8qKiBraW5kYSBkZWJvdW5jZSAqL1xuICByZXNpemVIYW5kbGVyID0gKCk6IFZvaWQgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVyKTtcbiAgICB0aGlzLnJlc2l6ZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlc2l6ZSgpLCAyMDApO1xuICB9O1xuXG4gIC8qKiBTZXQgdmFsdWVzIG9uIHJlc2l6ZSAqL1xuICByZXNpemUgPSAoKTogVm9pZCA9PiB7XG4gICAgdGhpcy51cGRhdGVXaWR0aCh7fSk7XG4gIH07XG5cbiAgLyoqIHNldCBpbml0aWFsIHZhbHVlcyBhbmQgZm9yIHVwZGF0ZXMgKi9cbiAgc2V0SW5pdGlhbCA9ICgpOiBWb2lkID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzZWxlY3RlZCxcbiAgICAgIGRhdGEsXG4gICAgICB0cmFuc2xhdGU6IHRyYW5zbGF0ZVByb3BzLFxuICAgICAgc2Nyb2xsVG9TZWxlY3RlZCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRyYW5zbGF0ZTogdHJhbnNsYXRlU3RhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKCFkYXRhIHx8ICFkYXRhLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGxldCB0cmFuc2xhdGVQcm9wID0gdHJhbnNsYXRlUHJvcHM7XG5cbiAgICBjb25zdCBtZW51SXRlbXMgPSB0aGlzLmdldE1lbnVJdGVtcygpO1xuICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IGRhdGEuZmluZChlbCA9PiBlbC5rZXkgPT09IHNlbGVjdGVkKTtcbiAgICB0aGlzLm1lbnVJdGVtcyA9IG1lbnVJdGVtcztcbiAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWRJdGVtXG4gICAgICA/IFN0cmluZyhzZWxlY3RlZEl0ZW0ua2V5IHx8ICcnKVxuICAgICAgOiBkZWZhdWx0UHJvcHMuc2VsZWN0ZWQ7XG5cbiAgICAvLyBhbGlnbiBpdGVtIG9uIGluaXRpYWwgbG9hZFxuICAgIHRoaXMudXBkYXRlV2lkdGgoe30pO1xuXG4gICAgY29uc3QgbmV3U3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUgfTtcblxuICAgIC8vIHNldCB0cmFuc2xhdGUgb24gZmlyc3QgbG9hZFxuICAgIGNvbnN0IGZpcnN0TW91bnRBbmREZWZhdWx0VHJhbnNsYXRlID1cbiAgICAgICF0aGlzLm1vdW50ZWQgJiYgdHJhbnNsYXRlUHJvcCA9PT0gZGVmYXVsdFByb3BzLnRyYW5zbGF0ZTtcbiAgICBpZiAoXG4gICAgICBmaXJzdE1vdW50QW5kRGVmYXVsdFRyYW5zbGF0ZSB8fFxuICAgICAgKCF0cmFuc2xhdGVJc1ZhbGlkKHRyYW5zbGF0ZVByb3ApICYmICF0cmFuc2xhdGVJc1ZhbGlkKHRyYW5zbGF0ZVN0YXRlKSlcbiAgICApIHtcbiAgICAgIG5ld1N0YXRlLnRyYW5zbGF0ZSA9IHRoaXMuZmlyc3RQYWdlT2Zmc2V0O1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGFycm93c1xuICAgIGNvbnN0IHtcbiAgICAgIGZpcnN0SXRlbVZpc2libGUsXG4gICAgICBsYXN0SXRlbVZpc2libGUsXG4gICAgfSA9IHRoaXMuY2hlY2tGaXJzdExhc3RJdGVtVmlzaWJpbGl0eSh7IHRyYW5zbGF0ZTogdHJhbnNsYXRlUHJvcCB9KTtcbiAgICBuZXdTdGF0ZS5maXJzdEl0ZW1WaXNpYmxlID0gZmlyc3RJdGVtVmlzaWJsZTtcbiAgICBuZXdTdGF0ZS5sYXN0SXRlbVZpc2libGUgPSBsYXN0SXRlbVZpc2libGU7XG5cbiAgICAvLyBzY3JvbGxUb1NlbGVjdGVkXG4gICAgaWYgKHNjcm9sbFRvU2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IG5lZWRTY3JvbGwgPSB0aGlzLmlzU2Nyb2xsTmVlZGVkKHtcbiAgICAgICAgaXRlbUlkOiBzZWxlY3RlZCxcbiAgICAgICAgdHJhbnNsYXRlOiBuZXdTdGF0ZS50cmFuc2xhdGUsXG4gICAgICB9KTtcbiAgICAgIGlmIChuZWVkU2Nyb2xsKSB7XG4gICAgICAgIG5ld1N0YXRlLnRyYW5zbGF0ZSA9IHRoaXMuZ2V0T2Zmc2V0VG9JdGVtQnlLZXkoc2VsZWN0ZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyAuLi5uZXdTdGF0ZSB9KTtcbiAgfTtcblxuICAvKiogY2hlY2sgaWYgc2VsZWN0ZWQgaXRlbSB2aXNpYmxlIG9uIHNjcmVlbiBvciBuZWVkIHNjcm9sbCB0byBpdCAqL1xuICBpc1Njcm9sbE5lZWRlZCA9ICh7XG4gICAgaXRlbUlkLFxuICAgIHRyYW5zbGF0ZSA9IHRoaXMuc3RhdGUudHJhbnNsYXRlLFxuICB9OiB7XG4gICAgaXRlbUlkOiBzdHJpbmc7XG4gICAgdHJhbnNsYXRlPzogbnVtYmVyO1xuICB9KTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgeyBtZW51SXRlbXMgfSA9IHRoaXM7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0SXRlbUJ5S2V5KGl0ZW1JZCk7XG5cbiAgICBjb25zdCB2aXNpYmxlSXRlbXMgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7XG4gICAgICBvZmZzZXQ6IHRyYW5zbGF0ZSxcbiAgICB9KTtcbiAgICByZXR1cm4gIXZpc2libGVJdGVtcy5pbmNsdWRlcyhpdGVtKTtcbiAgfTtcblxuICAvKiogZXh0ZXJuYWwgYXBpLCBzY3JvbGwgdG8gaXRlbSBieSBpdCBrZXkgKi9cbiAgc2Nyb2xsVG8gPSAoaXRlbUtleTogc3RyaW5nKTogVm9pZCA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgbmV3VHJhbnNsYXRlID0gdGhpcy5nZXRPZmZzZXRUb0l0ZW1CeUtleShpdGVtS2V5KTtcbiAgICB0aGlzLnNlbGVjdGVkID0gaXRlbUtleTtcbiAgICBpZiAodHJhbnNsYXRlID09PSBuZXdUcmFuc2xhdGUpIHJldHVybiBmYWxzZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyB0cmFuc2xhdGU6IG5ld1RyYW5zbGF0ZSB9KTtcbiAgfTtcblxuICAvKiogZ2V0IE1lbnVJdGVtcyBmcm9tIHJlZnMgKi9cbiAgZ2V0TWVudUl0ZW1zID0gKCk6IE1lbnVJdGVtcyA9PlxuICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucmVmKS5zbGljZSgwLCB0aGlzLnByb3BzLmRhdGEubGVuZ3RoIHx8IDApO1xuXG4gIC8qKiBnZXQgd2lkdGggb2YgYWxsIG1lbnUgaXRlbXMgKi9cbiAgZ2V0SXRlbXNXaWR0aCA9ICh7XG4gICAgaXRlbXMgPSB0aGlzLm1lbnVJdGVtcyxcbiAgfToge1xuICAgIGl0ZW1zPzogTWVudUl0ZW1zO1xuICB9KTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gaXRlbXNcbiAgICAgIC5tYXAoZWwgPT4gZWxbMV0uZWxlbSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgIC5yZWR1Y2UoKGFjYywgZWwpID0+IChhY2MgKz0gZ2V0Q2xpZW50UmVjdChlbCkud2lkdGgpLCAwKTtcbiAgfTtcblxuICAvKiogZ2V0IHdpZHRoIG9mIGl0ZW1zLCB3aW5kb3cgYW5kIHBvcyBvZiBtZW51ICovXG4gIGdldFdpZHRoID0gKHtcbiAgICBpdGVtcyxcbiAgfToge1xuICAgIGl0ZW1zOiBNZW51SXRlbXM7XG4gIH0pOiB7XG4gICAgd1dpZHRoOiBudW1iZXI7XG4gICAgbWVudVBvczogbnVtYmVyO1xuICAgIG1lbnVXaWR0aDogbnVtYmVyO1xuICAgIGFsbEl0ZW1zV2lkdGg6IG51bWJlcjtcbiAgfSA9PiB7XG4gICAgY29uc3Qgd1dpZHRoID0gd2luZG93ICYmIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IHsgeDogbWVudVBvcywgd2lkdGg6IG1lbnVXaWR0aCB9ID0gZ2V0Q2xpZW50UmVjdCh0aGlzLm1lbnVXcmFwcGVyKTtcbiAgICBjb25zdCBhbGxJdGVtc1dpZHRoID0gdGhpcy5nZXRJdGVtc1dpZHRoKHsgaXRlbXMgfSk7XG4gICAgcmV0dXJuIHsgd1dpZHRoLCBtZW51UG9zLCBtZW51V2lkdGgsIGFsbEl0ZW1zV2lkdGggfTtcbiAgfTtcblxuICAvKiogdmFsdWVzIGZyb20gMiBmdW5jdGlvbnMgYWJvdmUgKi9cbiAgdXBkYXRlV2lkdGggPSAoe1xuICAgIGl0ZW1zID0gdGhpcy5tZW51SXRlbXMsXG4gIH06IHtcbiAgICBpdGVtcz86IE1lbnVJdGVtcztcbiAgfSk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHsgd1dpZHRoLCBtZW51UG9zLCBtZW51V2lkdGgsIGFsbEl0ZW1zV2lkdGggfSA9IHRoaXMuZ2V0V2lkdGgoeyBpdGVtcyB9KTtcbiAgICBjb25zdCB7IGZpcnN0UGFnZU9mZnNldCwgbGFzdFBhZ2VPZmZzZXQgfSA9IHRoaXMuZ2V0UGFnZXNPZmZzZXRzKHsgaXRlbXMsIHdXaWR0aCwgbWVudVBvcywgbWVudVdpZHRoLCBhbGxJdGVtc1dpZHRoIH0pO1xuICAgIHRoaXMubWVudVBvcyA9IG1lbnVQb3M7XG4gICAgdGhpcy53V2lkdGggPSB3V2lkdGg7XG4gICAgdGhpcy5hbGxJdGVtc1dpZHRoID0gYWxsSXRlbXNXaWR0aDtcbiAgICB0aGlzLm1lbnVXaWR0aCA9IG1lbnVXaWR0aDtcbiAgICB0aGlzLmZpcnN0UGFnZU9mZnNldCA9IGZpcnN0UGFnZU9mZnNldDtcbiAgICB0aGlzLmxhc3RQYWdlT2Zmc2V0ID0gbGFzdFBhZ2VPZmZzZXQ7XG4gIH07XG5cbiAgLyoqIGdldCBmaXJzdFBhZ2VPZmZzZXQgKi9cbiAgZ2V0Rmlyc3RQYWdlT2Zmc2V0ID0gKHtcbiAgICBpdGVtcyA9IHRoaXMubWVudUl0ZW1zLFxuICAgIG9mZnNldCA9IHRoaXMuc3RhdGUudHJhbnNsYXRlLFxuICAgIHdXaWR0aCA9IHRoaXMud1dpZHRoLFxuICAgIG1lbnVQb3MgPSB0aGlzLm1lbnVQb3MsXG4gICAgbWVudVdpZHRoID0gdGhpcy5tZW51V2lkdGgsXG4gIH06IHtcbiAgICBpdGVtczogTWVudUl0ZW1zO1xuICAgIG9mZnNldDogbnVtYmVyO1xuICAgIHdXaWR0aDogbnVtYmVyO1xuICAgIG1lbnVQb3M6IG51bWJlcjtcbiAgICBtZW51V2lkdGg6IG51bWJlcjtcbiAgfSk6IG51bWJlciA9PiB7XG4gICAgY29uc3QgdmlzaWJsZUl0ZW1zU3RhcnQgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7XG4gICAgICBvZmZzZXQsXG4gICAgICBpdGVtcyxcbiAgICAgIHdXaWR0aCxcbiAgICAgIG1lbnVQb3MsXG4gICAgICBtZW51V2lkdGgsXG4gICAgfSk7XG4gICAgY29uc3QgZmlyc3RQYWdlT2Zmc2V0ID0gdGhpcy5nZXRDZW50ZXJPZmZzZXQoe1xuICAgICAgaXRlbXM6IHZpc2libGVJdGVtc1N0YXJ0LFxuICAgICAgbWVudVdpZHRoLFxuICAgIH0pO1xuICAgIHJldHVybiBmaXJzdFBhZ2VPZmZzZXQ7XG4gIH07XG5cbiAgLyoqIGdldCBsYXN0UGFnZU9mZnNldCAqL1xuICBnZXRMYXN0UGFnZU9mZnNldCA9ICh7XG4gICAgaXRlbXMgPSB0aGlzLm1lbnVJdGVtcyxcbiAgICBhbGxJdGVtc1dpZHRoID0gdGhpcy5hbGxJdGVtc1dpZHRoLFxuICAgIHdXaWR0aCA9IHRoaXMud1dpZHRoLFxuICAgIG1lbnVQb3MgPSB0aGlzLm1lbnVQb3MsXG4gICAgbWVudVdpZHRoID0gdGhpcy5tZW51V2lkdGgsXG4gIH06IHtcbiAgICBpdGVtczogTWVudUl0ZW1zO1xuICAgIGFsbEl0ZW1zV2lkdGg6IG51bWJlcjtcbiAgICB3V2lkdGg6IG51bWJlcjtcbiAgICBtZW51UG9zOiBudW1iZXI7XG4gICAgbWVudVdpZHRoOiBudW1iZXI7XG4gIH0pOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHZpc2libGVJdGVtc0VuZCA9IHRoaXMuZ2V0VmlzaWJsZUl0ZW1zKHtcbiAgICAgIGl0ZW1zLFxuICAgICAgb2Zmc2V0OiAtYWxsSXRlbXNXaWR0aCArIG1lbnVXaWR0aCxcbiAgICAgIHdXaWR0aCxcbiAgICAgIG1lbnVQb3MsXG4gICAgICBtZW51V2lkdGgsXG4gICAgfSk7XG4gICAgY29uc3QgbGFzdFBhZ2VPZmZzZXQgPSB0aGlzLmdldENlbnRlck9mZnNldCh7XG4gICAgICBpdGVtczogdmlzaWJsZUl0ZW1zRW5kLFxuICAgICAgbWVudVdpZHRoLFxuICAgIH0pO1xuICAgIHJldHVybiBsYXN0UGFnZU9mZnNldDtcbiAgfTtcblxuICAvKiogZ2V0IG9mZnNldHMgdG8gZmlyc3QgYW5kIGxhc3QgaXRlbSAqL1xuICBnZXRQYWdlc09mZnNldHMgPSAoe1xuICAgIGl0ZW1zID0gdGhpcy5tZW51SXRlbXMsXG4gICAgYWxsSXRlbXNXaWR0aCA9IHRoaXMuYWxsSXRlbXNXaWR0aCxcbiAgICB3V2lkdGggPSB0aGlzLndXaWR0aCxcbiAgICBtZW51UG9zID0gdGhpcy5tZW51UG9zLFxuICAgIG1lbnVXaWR0aCA9IHRoaXMubWVudVdpZHRoLFxuICAgIG9mZnNldCA9IHRoaXMuc3RhdGUudHJhbnNsYXRlLFxuICB9KToge1xuICAgIGZpcnN0UGFnZU9mZnNldDogbnVtYmVyO1xuICAgIGxhc3RQYWdlT2Zmc2V0OiBudW1iZXI7XG4gIH0gPT4ge1xuICAgIGNvbnN0IGZpcnN0UGFnZU9mZnNldCA9IHRoaXMuZ2V0Rmlyc3RQYWdlT2Zmc2V0KHtcbiAgICAgIGl0ZW1zLFxuICAgICAgbWVudVdpZHRoLFxuICAgICAgb2Zmc2V0LFxuICAgICAgd1dpZHRoLFxuICAgICAgbWVudVBvcyxcbiAgICB9KTtcbiAgICBjb25zdCBsYXN0UGFnZU9mZnNldCA9IHRoaXMuZ2V0TGFzdFBhZ2VPZmZzZXQoe1xuICAgICAgaXRlbXMsXG4gICAgICBtZW51V2lkdGgsXG4gICAgICBtZW51UG9zLFxuICAgICAgd1dpZHRoLFxuICAgICAgYWxsSXRlbXNXaWR0aCxcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBmaXJzdFBhZ2VPZmZzZXQsXG4gICAgICBsYXN0UGFnZU9mZnNldCxcbiAgICB9O1xuICB9O1xuXG4gIC8qKiBpdGVtIGNsaWNrIGhhbmRsZXIgKi9cbiAgb25JdGVtQ2xpY2sgPSAoaWQ6IHN0cmluZyk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHsgY2xpY2tXaGVuRHJhZywgb25TZWxlY3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB4RHJhZ2dlZERpc3RhbmNlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgYWZ0ZXJTY3JvbGwgPSB4RHJhZ2dlZERpc3RhbmNlID4gNTtcblxuICAgIGlmIChhZnRlclNjcm9sbCAmJiAhY2xpY2tXaGVuRHJhZykgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy5zZWxlY3RlZCA9IGlkO1xuICAgIGlmIChvblNlbGVjdCkgb25TZWxlY3QoaWQpO1xuICB9O1xuXG4gIC8qKiBnZXQgaXRlbSB2aXNpYmxlIHdpdGggY3VycmVudC9wcm92aWRlZCB0cmFuc2xhdGUgKi9cbiAgLy8gVE9ETzo6IHdoeSBvZmZzZXQgYW5kIHRyYW5zbGF0ZT9cbiAgZ2V0VmlzaWJsZUl0ZW1zID0gKHtcbiAgICBpdGVtcyA9IHRoaXMubWVudUl0ZW1zLFxuICAgIHdXaWR0aCA9IHRoaXMud1dpZHRoLFxuICAgIG1lbnVQb3MgPSB0aGlzLm1lbnVQb3MsXG4gICAgbWVudVdpZHRoID0gdGhpcy5tZW51V2lkdGgsXG4gICAgb2Zmc2V0ID0gdGhpcy5zdGF0ZS50cmFuc2xhdGUsXG4gICAgdHJhbnNsYXRlID0gdGhpcy5zdGF0ZS50cmFuc2xhdGUgfHwgZGVmYXVsdFByb3BzLnRyYW5zbGF0ZSxcbiAgfSk6IE1lbnVJdGVtcyA9PiB7XG4gICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihlbCA9PiB7XG4gICAgICBjb25zdCB7IHdpZHRoOiBlbFdpZHRoIH0gPSBnZXRDbGllbnRSZWN0KGVsWzFdLmVsZW0pO1xuICAgICAgY29uc3QgaWQgPSB0aGlzLmdldEl0ZW1JbmQoaXRlbXMsIGVsKTtcbiAgICAgIGNvbnN0IHggPSB0aGlzLmdldE9mZnNldFRvSXRlbUJ5SW5kZXgoe1xuICAgICAgICBpbmRleDogaWQsXG4gICAgICAgIG1lbnVJdGVtczogaXRlbXMsXG4gICAgICAgIHRyYW5zbGF0ZSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5lbGVtVmlzaWJsZSh7XG4gICAgICAgIHgsXG4gICAgICAgIGVsV2lkdGgsXG4gICAgICAgIHdXaWR0aCxcbiAgICAgICAgbWVudVBvcyxcbiAgICAgICAgbWVudVdpZHRoLFxuICAgICAgICBvZmZzZXQsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvKiogY2hlY2sgaWYgc2luZ2xlIG1lbnUgaXRlbSB2aXNpYmxlIGJ5IGl0J3MgcG9zaXRpb24gYW5kIHdpZHRoKi9cbiAgZWxlbVZpc2libGUgPSAoe1xuICAgIHgsXG4gICAgb2Zmc2V0ID0gMCxcbiAgICBlbFdpZHRoLFxuICAgIHdXaWR0aCA9IHRoaXMud1dpZHRoLFxuICAgIG1lbnVQb3MgPSB0aGlzLm1lbnVQb3MsXG4gICAgbWVudVdpZHRoID0gdGhpcy5tZW51V2lkdGgsXG4gIH06IHtcbiAgICB4OiBudW1iZXI7XG4gICAgb2Zmc2V0OiBudW1iZXI7XG4gICAgZWxXaWR0aDogbnVtYmVyO1xuICAgIHdXaWR0aD86IG51bWJlcjtcbiAgICBtZW51UG9zPzogbnVtYmVyO1xuICAgIG1lbnVXaWR0aD86IG51bWJlcjtcbiAgfSk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGxlZnRFZGdlID0gbWVudVBvcyAtIDE7XG4gICAgY29uc3QgcmlnaHRFZGdlID0gd1dpZHRoIC0gKHdXaWR0aCAtIChtZW51UG9zICsgbWVudVdpZHRoKSkgKyAxO1xuICAgIGNvbnN0IHBvcyA9IHggKyBvZmZzZXQ7XG4gICAgY29uc3QgcG9zV2l0aFdpZHRoID0gcG9zICsgZWxXaWR0aDtcbiAgICByZXR1cm4gcG9zID49IGxlZnRFZGdlICYmIHBvc1dpdGhXaWR0aCA8PSByaWdodEVkZ2U7XG4gIH07XG5cbiAgLyoqIGdldCBpbmRleCBvZiBpdGVtICovXG4gIGdldEl0ZW1JbmQgPSAoXG4gICAgbWVudUl0ZW1zOiBNZW51SXRlbXMgPSB0aGlzLm1lbnVJdGVtcyxcbiAgICBpdGVtOiBNZW51SXRlbVxuICApOiBudW1iZXIgPT4ge1xuICAgIGlmICghbWVudUl0ZW1zIHx8ICFpdGVtKSByZXR1cm4gMDtcbiAgICByZXR1cm4gbWVudUl0ZW1zLmZpbmRJbmRleChlbCA9PiBlbFswXSA9PT0gaXRlbVswXSk7XG4gIH07XG5cbiAgLyoqIGdldCBuZXh0IGl0ZW0gaW4gZGF0YSAqL1xuICBnZXROZXh0SXRlbUluZCA9IChsZWZ0OiBib29sZWFuLCB2aXNpYmxlSXRlbXM6IE1lbnVJdGVtcyk6IG51bWJlciA9PiB7XG4gICAgY29uc3QgeyBtZW51SXRlbXMgfSA9IHRoaXM7XG4gICAgaWYgKGxlZnQpIHtcbiAgICAgIGlmICghdmlzaWJsZUl0ZW1zLmxlbmd0aCkgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdmlzaWJsZUl0ZW1zLmxlbmd0aCkgcmV0dXJuIG1lbnVJdGVtcy5sZW5ndGg7XG4gICAgfVxuICAgIGNvbnN0IGluZCA9IGxlZnRcbiAgICAgID8gdGhpcy5nZXRJdGVtSW5kKG1lbnVJdGVtcywgdmlzaWJsZUl0ZW1zWzBdKSAtIDFcbiAgICAgIDogdGhpcy5nZXRJdGVtSW5kKG1lbnVJdGVtcywgdmlzaWJsZUl0ZW1zLnNsaWNlKC0xKVswXSkgKyAxO1xuICAgIHJldHVybiBpbmQgPCAwID8gMCA6IGluZDtcbiAgfTtcblxuICAvKiogZ2V0IG9mZnNldCBmcm9tIHN0YXJ0IHRvIGl0ZW0gYnkgaXQncyBrZXkgKi9cbiAgZ2V0T2Zmc2V0VG9JdGVtQnlLZXkgPSAoa2V5OiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuICAgIGxldCB7IHRyYW5zbGF0ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4QnlLZXkoa2V5KTtcbiAgICBpZiAoaXRlbUluZGV4ID09PSAtMSkgcmV0dXJuIHRyYW5zbGF0ZTtcblxuICAgIGNvbnN0IHsgbWVudVBvcyB9ID0gdGhpcztcbiAgICBjb25zdCB7IGFsaWduQ2VudGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdHJhbnNsYXRlID0gdGhpcy5nZXRPZmZzZXRUb0l0ZW1CeUluZGV4KHsgaW5kZXg6IGl0ZW1JbmRleCB9KTtcblxuICAgIGNvbnN0IHZpc2libGVJdGVtc1dpdGhOZXdUcmFuc2xhdGUgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7XG4gICAgICBvZmZzZXQ6IC10cmFuc2xhdGUsXG4gICAgfSk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gYWxpZ25DZW50ZXJcbiAgICAgID8gdGhpcy5nZXRDZW50ZXJPZmZzZXQoeyBpdGVtczogdmlzaWJsZUl0ZW1zV2l0aE5ld1RyYW5zbGF0ZSB9KVxuICAgICAgOiBkZWZhdWx0UHJvcHMudHJhbnNsYXRlO1xuXG4gICAgdHJhbnNsYXRlID0gLSh0cmFuc2xhdGUgLSBtZW51UG9zIC0gb2Zmc2V0KTtcblxuICAgIGlmICh0aGlzLml0QmVmb3JlU3RhcnQodHJhbnNsYXRlKSkge1xuICAgICAgdHJhbnNsYXRlID0gdGhpcy5nZXRPZmZzZXRBdFN0YXJ0KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLml0QWZ0ZXJFbmQodHJhbnNsYXRlKSkge1xuICAgICAgdHJhbnNsYXRlID0gdGhpcy5nZXRPZmZzZXRBdEVuZCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNsYXRlO1xuICB9O1xuXG4gIC8qKiBnZXQgaXRlbSBmcm9tIGtleSAqL1xuICBnZXRJdGVtQnlLZXkgPSAoa2V5OiBzdHJpbmcpOiBNZW51SXRlbSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMubWVudUl0ZW1zLmZpbmQoZWwgPT4gZWxbMV0ua2V5ID09PSBrZXkpIHx8IFtcbiAgICAgICAgJ251bGwnLFxuICAgICAgICB7IGtleTogJ24nLCBlbGVtOiBudWxsIH0sXG4gICAgICBdXG4gICAgKTtcbiAgfTtcblxuICAvKiogZ2V0IGluZGV4IG9mIGl0ZW0gZnJvbSBpdCdzIGtleSAqL1xuICBnZXRJdGVtSW5kZXhCeUtleSA9IChpdGVtS2V5OiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuICAgIGlmICghaXRlbUtleSkgcmV0dXJuIC0xO1xuICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGEuZmluZEluZGV4KGVsID0+IGVsLmtleSA9PT0gaXRlbUtleSk7XG4gIH07XG5cbiAgLyoqIG9mZnNldCBmcm9tIHN0YXJ0IHRvIGl0ZW0gKi9cbiAgZ2V0T2Zmc2V0VG9JdGVtQnlJbmRleCA9ICh7XG4gICAgaW5kZXgsXG4gICAgbWVudUl0ZW1zID0gdGhpcy5tZW51SXRlbXMsXG4gICAgdHJhbnNsYXRlID0gdGhpcy5zdGF0ZS50cmFuc2xhdGUsXG4gIH06IHtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIG1lbnVJdGVtcz86IE1lbnVJdGVtcztcbiAgICB0cmFuc2xhdGU/OiBudW1iZXI7XG4gIH0pOiBudW1iZXIgPT4ge1xuICAgIGlmICghbWVudUl0ZW1zLmxlbmd0aCkgcmV0dXJuIDA7XG4gICAgY29uc3QgaW5kID0gaW5kZXggPj0gbWVudUl0ZW1zLmxlbmd0aCA/IG1lbnVJdGVtcy5sZW5ndGggLSAxIDogaW5kZXg7XG4gICAgY29uc3QgeyB4IH0gPSBnZXRDbGllbnRSZWN0KG1lbnVJdGVtc1tpbmRdWzFdLmVsZW0pO1xuICAgIC8vIFRPRE86IHJlZmFjdG9yXG4gICAgLy8gdHJhbnNsYXRlIC0geCAtIG1lbnVQb3MgLSBmaXJzdFBhZ2VPZmZzZXQvbGFzdFBhZ2VPZmZzZXRcbiAgICBjb25zdCBwb3NpdGlvbiA9ICt4IC0gdHJhbnNsYXRlO1xuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfTtcblxuICAvKiogZ2V0IG5ldyBvZmZzZXQgdmFsdWUgd2hlbiBzY3JvbGwgcmlnaHQgKi9cbiAgZ2V0U2Nyb2xsUmlnaHRPZmZzZXQgPSAoXG4gICAgdmlzaWJsZUl0ZW1zOiBNZW51SXRlbXMsXG4gICAgaXRlbXM6IE1lbnVJdGVtc1xuICApOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHsgYWxpZ25DZW50ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBtZW51UG9zLCBsYXN0UGFnZU9mZnNldCB9ID0gdGhpcztcblxuICAgIGNvbnN0IG5leHRJdGVtID0gdGhpcy5nZXROZXh0SXRlbShcbiAgICAgIHZpc2libGVJdGVtcyAmJiB2aXNpYmxlSXRlbXMuc2xpY2UoLTEpWzBdXG4gICAgICAgID8gdmlzaWJsZUl0ZW1zLnNsaWNlKC0xKVswXVswXVxuICAgICAgICA6IGl0ZW1zLnNsaWNlKC0xKVswXVswXVxuICAgICk7XG4gICAgY29uc3QgbmV4dEl0ZW1JbmRleCA9IGl0ZW1zLmZpbmRJbmRleChlbCA9PiBlbFswXSA9PT0gbmV4dEl0ZW1bMF0pO1xuXG4gICAgY29uc3Qgb2Zmc2V0VG9JdGVtID0gdGhpcy5nZXRPZmZzZXRUb0l0ZW1CeUluZGV4KHtcbiAgICAgIGluZGV4OiBuZXh0SXRlbUluZGV4LFxuICAgICAgbWVudUl0ZW1zOiBpdGVtcyxcbiAgICB9KTtcbiAgICBjb25zdCBvZmZzZXRUb0l0ZW1PblN0YXJ0ID0gb2Zmc2V0VG9JdGVtIC0gbWVudVBvcztcblxuICAgIGNvbnN0IG5leHRWaXNpYmxlSXRlbXMgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7XG4gICAgICBpdGVtcyxcbiAgICAgIG9mZnNldDogLW9mZnNldFRvSXRlbU9uU3RhcnQsXG4gICAgfSk7XG5cbiAgICBpZiAobmV4dFZpc2libGVJdGVtcy5pbmNsdWRlcyhpdGVtcy5zbGljZSgtMSlbMF0pKSB7XG4gICAgICByZXR1cm4gYWxpZ25DZW50ZXJcbiAgICAgICAgPyBvZmZzZXRUb0l0ZW1PblN0YXJ0ICsgbGFzdFBhZ2VPZmZzZXRcbiAgICAgICAgOiBvZmZzZXRUb0l0ZW1PblN0YXJ0O1xuICAgIH1cblxuICAgIGNvbnN0IGNlbnRlck9mZnNldCA9ICgpID0+XG4gICAgICB0aGlzLmdldENlbnRlck9mZnNldCh7IGl0ZW1zOiBuZXh0VmlzaWJsZUl0ZW1zIH0pO1xuXG4gICAgY29uc3QgbmV3T2Zmc2V0ID0gYWxpZ25DZW50ZXJcbiAgICAgID8gb2Zmc2V0VG9JdGVtT25TdGFydCAtIGNlbnRlck9mZnNldCgpXG4gICAgICA6IG9mZnNldFRvSXRlbU9uU3RhcnQ7XG4gICAgcmV0dXJuIG5ld09mZnNldDtcbiAgfTtcblxuICAvKiogZ2V0IG5ldyBvZmZzZXQgdmFsdWUgd2hlbiBzY3JvbGwgbGVmdCAqL1xuICBnZXRTY3JvbGxMZWZ0T2Zmc2V0ID0gKHZpc2libGVJdGVtczogTWVudUl0ZW1zLCBpdGVtczogTWVudUl0ZW1zKTogbnVtYmVyID0+IHtcbiAgICBjb25zdCB7IGFsaWduQ2VudGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbWVudVBvcywgbWVudVdpZHRoLCBmaXJzdFBhZ2VPZmZzZXQgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBwcmV2SXRlbSA9IHRoaXMuZ2V0UHJldkl0ZW0oXG4gICAgICB2aXNpYmxlSXRlbXMgJiYgdmlzaWJsZUl0ZW1zWzBdID8gdmlzaWJsZUl0ZW1zWzBdWzBdIDogaXRlbXNbMF1bMF1cbiAgICApO1xuICAgIGNvbnN0IHByZXZJdGVtSW5kZXggPSBpdGVtcy5maW5kSW5kZXgoZWwgPT4gZWxbMF0gPT09IHByZXZJdGVtWzBdKTtcblxuICAgIGNvbnN0IG9mZnNldFRvSXRlbSA9IHRoaXMuZ2V0T2Zmc2V0VG9JdGVtQnlJbmRleCh7XG4gICAgICBpbmRleDogcHJldkl0ZW1JbmRleCxcbiAgICAgIG1lbnVJdGVtczogaXRlbXMsXG4gICAgfSk7XG4gICAgY29uc3QgaXRlbVdpZHRoID0gdGhpcy5nZXRJdGVtc1dpZHRoKHsgaXRlbXM6IFtwcmV2SXRlbV0gfSk7XG4gICAgY29uc3Qgb2Zmc2V0VG9JdGVtT25FbmQgPSBvZmZzZXRUb0l0ZW0gLSBtZW51UG9zIC0gKG1lbnVXaWR0aCAtIGl0ZW1XaWR0aCk7XG5cbiAgICBjb25zdCBuZXh0VmlzaWJsZUl0ZW1zID0gdGhpcy5nZXRWaXNpYmxlSXRlbXMoe1xuICAgICAgaXRlbXMsXG4gICAgICBvZmZzZXQ6IC1vZmZzZXRUb0l0ZW1PbkVuZCxcbiAgICB9KTtcblxuICAgIGlmIChuZXh0VmlzaWJsZUl0ZW1zLmluY2x1ZGVzKGl0ZW1zWzBdKSkge1xuICAgICAgcmV0dXJuIGFsaWduQ2VudGVyID8gLWZpcnN0UGFnZU9mZnNldCA6IGRlZmF1bHRQcm9wcy50cmFuc2xhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgY2VudGVyT2Zmc2V0ID0gKCkgPT5cbiAgICAgIHRoaXMuZ2V0Q2VudGVyT2Zmc2V0KHsgaXRlbXM6IG5leHRWaXNpYmxlSXRlbXMgfSk7XG5cbiAgICBjb25zdCBuZXdPZmZzZXQgPSBhbGlnbkNlbnRlclxuICAgICAgPyBvZmZzZXRUb0l0ZW1PbkVuZCArIGNlbnRlck9mZnNldCgpXG4gICAgICA6IG9mZnNldFRvSXRlbU9uRW5kO1xuICAgIHJldHVybiBuZXdPZmZzZXQ7XG4gIH07XG5cbiAgLyoqIGdldCBuZXh0IGl0ZW0gYnkga2V5ICovXG4gIGdldE5leHRJdGVtID0gKGtleTogc3RyaW5nKTogTWVudUl0ZW0gPT4ge1xuICAgIGNvbnN0IHsgbWVudUl0ZW1zIH0gPSB0aGlzO1xuICAgIGNvbnN0IGl0ZW1JbmRleCA9IG1lbnVJdGVtcy5maW5kSW5kZXgoZWwgPT4gZWxbMF0gPT09IGtleSk7XG4gICAgY29uc3QgbmV4dEl0ZW1JbmRleCA9IGl0ZW1JbmRleCArIDE7XG4gICAgY29uc3QgbmV4dEl0ZW0gPSBtZW51SXRlbXNbbmV4dEl0ZW1JbmRleF0gfHwgbWVudUl0ZW1zLnNsaWNlKC0xKVswXTtcbiAgICByZXR1cm4gbmV4dEl0ZW07XG4gIH07XG5cbiAgLyoqIGdldCBwcnJldiBpdGVtIGJ5IGtleSAqL1xuICBnZXRQcmV2SXRlbSA9IChrZXk6IHN0cmluZyk6IE1lbnVJdGVtID0+IHtcbiAgICBjb25zdCB7IG1lbnVJdGVtcyB9ID0gdGhpcztcbiAgICBjb25zdCBpdGVtSW5kZXggPSBtZW51SXRlbXMuZmluZEluZGV4KGVsID0+IGVsWzBdID09PSBrZXkpO1xuICAgIGNvbnN0IHByZXZJdGVtSW5kZXggPSBpdGVtSW5kZXggLSAxO1xuICAgIGNvbnN0IHByZXZJdGVtID0gbWVudUl0ZW1zW3ByZXZJdGVtSW5kZXhdIHx8IG1lbnVJdGVtc1swXTtcbiAgICByZXR1cm4gcHJldkl0ZW07XG4gIH07XG5cbiAgLyoqIGdldCBuZXcgb2Zmc2V0IHZhbHVlIHdoZW4gc2Nyb2xsIGxlZnQvcmlnaHQgKi9cbiAgZ2V0T2Zmc2V0ID0gKGxlZnQ6IGJvb2xlYW4pOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHsgbWVudUl0ZW1zOiBpdGVtcyB9ID0gdGhpcztcbiAgICBjb25zdCB2aXNpYmxlSXRlbXMgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7IGl0ZW1zIH0pO1xuICAgIGNvbnN0IG5ld09mZnNldCA9IGxlZnRcbiAgICAgID8gdGhpcy5nZXRTY3JvbGxMZWZ0T2Zmc2V0KHZpc2libGVJdGVtcywgaXRlbXMpXG4gICAgICA6IHRoaXMuZ2V0U2Nyb2xsUmlnaHRPZmZzZXQodmlzaWJsZUl0ZW1zLCBpdGVtcyk7XG4gICAgcmV0dXJuIG5ld09mZnNldDtcbiAgfTtcblxuICAvKiogb2Zmc2V0IGZyb20gMCB0byBmaXJzdCBtZW51IGl0ZW0gd2hlbiBzY3JvbGwsXG4gICAqIG5lZWQgcGFzcyBpdGVtcyB2aXNpYmxlIG9uIHNjcmVlblxuICAgKi9cbiAgZ2V0Q2VudGVyT2Zmc2V0ID0gKHtcbiAgICBpdGVtcyA9IHRoaXMubWVudUl0ZW1zLFxuICAgIG1lbnVXaWR0aCA9IHRoaXMubWVudVdpZHRoLFxuICB9OiB7XG4gICAgaXRlbXM/OiBNZW51SXRlbXM7XG4gICAgbWVudVdpZHRoPzogbnVtYmVyO1xuICB9KTogbnVtYmVyID0+IHtcbiAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW1zV2lkdGggPSB0aGlzLmdldEl0ZW1zV2lkdGgoeyBpdGVtcyB9KTtcbiAgICBjb25zdCBvZmZzZXQgPSAobWVudVdpZHRoIC0gaXRlbXNXaWR0aCkgLyAyO1xuICAgIHJldHVybiBvZmZzZXQ7XG4gIH07XG5cbiAgLyoqIG1vdXNlIHdoZWVsIGhhbmRsZXIgKi9cbiAgaGFuZGxlV2hlZWwgPSAoZTogV2hlZWxFdmVudCk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHsgd2hlZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCF3aGVlbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChlLmRlbHRhWSA8IDApIHtcbiAgICAgIHRoaXMuaGFuZGxlQXJyb3dDbGljaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZUFycm93Q2xpY2soZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICAvKiogb2Zmc2V0IGF0IHN0YXJ0ICovXG4gIGdldE9mZnNldEF0U3RhcnQgPSAoKTogbnVtYmVyID0+IHtcbiAgICBjb25zdCB7IGZpcnN0UGFnZU9mZnNldCB9ID0gdGhpcztcbiAgICBjb25zdCB7IGFsaWduQ2VudGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBhbGlnbkNlbnRlciA/IGZpcnN0UGFnZU9mZnNldCA6IGRlZmF1bHRQcm9wcy50cmFuc2xhdGU7XG4gIH07XG5cbiAgLyoqIG9mZnNldCBhdCBlbmQgKi9cbiAgZ2V0T2Zmc2V0QXRFbmQgPSAoKTogbnVtYmVyID0+IHtcbiAgICBjb25zdCB7IGFsaWduQ2VudGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgYWxsSXRlbXNXaWR0aCwgbWVudVdpZHRoLCBsYXN0UGFnZU9mZnNldCB9ID0gdGhpcztcbiAgICBjb25zdCBvZmZzZXQgPSBhbGxJdGVtc1dpZHRoIC0gbWVudVdpZHRoO1xuICAgIHJldHVybiBhbGlnbkNlbnRlciA/IC1vZmZzZXQgLSBsYXN0UGFnZU9mZnNldCA6IC1vZmZzZXQ7XG4gIH07XG5cbiAgLyoqIGNsaWNrIHJpZ2h0IGFycm93ICovXG4gIGhhbmRsZUFycm93Q2xpY2tSaWdodCA9ICgpOiBWb2lkID0+IHtcbiAgICB0aGlzLmhhbmRsZUFycm93Q2xpY2soZmFsc2UpO1xuICB9O1xuXG4gIC8qKiBjbGljayBhcnJvdy9zY3JvbGwgKi9cbiAgaGFuZGxlQXJyb3dDbGljayA9IChsZWZ0ID0gdHJ1ZSk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHsgYWxpZ25DZW50ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBhbGxJdGVtc1dpZHRoLCBtZW51V2lkdGggfSA9IHRoaXM7XG5cbiAgICBpZiAoIWFsaWduQ2VudGVyICYmICFsZWZ0ICYmIGFsbEl0ZW1zV2lkdGggPCBtZW51V2lkdGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmdldE9mZnNldChsZWZ0KTtcbiAgICBsZXQgdHJhbnNsID0gLW9mZnNldDtcblxuICAgIGlmIChsZWZ0ICYmIHRoaXMuaXRCZWZvcmVTdGFydCh0cmFuc2wpKSB7XG4gICAgICB0cmFuc2wgPSB0aGlzLmdldE9mZnNldEF0U3RhcnQoKTtcbiAgICB9IGVsc2UgaWYgKCFsZWZ0ICYmIHRoaXMuaXRBZnRlckVuZCh0cmFuc2wpKSB7XG4gICAgICB0cmFuc2wgPSB0aGlzLmdldE9mZnNldEF0RW5kKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3VHJhbnNsYXRlID0gdHJhbnNsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0cmFuc2xhdGU6IG5ld1RyYW5zbGF0ZSxcbiAgICAgIHhQb2ludDogZGVmYXVsdFByb3BzLnhQb2ludCxcbiAgICAgIHN0YXJ0RHJhZ1RyYW5zbGF0ZTogMCxcbiAgICAgIHhEcmFnZ2VkRGlzdGFuY2U6IDAsXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqIGNoZWNrIGlmIHBvc2l0aW9uIGJlZm9yZSBmaXJzdCBlbGVtZW50ICovXG4gIGl0QmVmb3JlU3RhcnQgPSAodHJhbnM6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHsgYWxpZ25DZW50ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBtZW51V2lkdGgsIGFsbEl0ZW1zV2lkdGgsIGZpcnN0UGFnZU9mZnNldCB9ID0gdGhpcztcbiAgICBpZiAoYWxsSXRlbXNXaWR0aCA8IG1lbnVXaWR0aCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGFsaWduQ2VudGVyXG4gICAgICA/IHRyYW5zID4gZmlyc3RQYWdlT2Zmc2V0XG4gICAgICA6IHRyYW5zID4gZGVmYXVsdFByb3BzLnRyYW5zbGF0ZTtcbiAgfTtcbiAgLyoqIGNoZWNrIGlmIHBvc2l0aW9uIGFmdGVyIGxhc3QgZWxlbWVudCAqL1xuICBpdEFmdGVyRW5kID0gKHRyYW5zOiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCB7IGFsaWduQ2VudGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbWVudVdpZHRoLCBhbGxJdGVtc1dpZHRoLCBsYXN0UGFnZU9mZnNldCB9ID0gdGhpcztcbiAgICBpZiAoYWxsSXRlbXNXaWR0aCA8IG1lbnVXaWR0aCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGFsaWduQ2VudGVyXG4gICAgICA/IHRyYW5zIDwgZGVmYXVsdFByb3BzLnRyYW5zbGF0ZSAmJlxuICAgICAgICAgIE1hdGguYWJzKHRyYW5zKSA+IGFsbEl0ZW1zV2lkdGggLSBtZW51V2lkdGggKyBsYXN0UGFnZU9mZnNldFxuICAgICAgOiB0cmFucyA8IGRlZmF1bHRQcm9wcy50cmFuc2xhdGUgJiZcbiAgICAgICAgICBNYXRoLmFicyh0cmFucykgPiBhbGxJdGVtc1dpZHRoIC0gbWVudVdpZHRoO1xuICB9O1xuXG4gIC8qKiBnZXQgY29vcmRzIGZyb20gbW91c2UgZXZlbnQgKi9cbiAgZ2V0UG9pbnQgPSAoZXY6IFJlYWN0Lk1vdXNlRXZlbnQgfCBSZWFjdC5Ub3VjaEV2ZW50IHwgRXZlbnQpOiBudW1iZXIgPT4ge1xuICAgIGlmICgndG91Y2hlcycgaW4gZXYpIHtcbiAgICAgIHJldHVybiBldi50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgfSBlbHNlIGlmICgnY2xpZW50WCcgaW4gZXYpIHtcbiAgICAgIHJldHVybiBldi5jbGllbnRYO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH07XG5cbiAgLyoqIGV2ZW50IGhhbmRsZXIgd2hlbiBzdGFydCBkcmFnIGFuZCBtb3VzZSBkb3duICAqL1xuICBoYW5kbGVEcmFnU3RhcnQgPSAoZXY6IFJlYWN0Lk1vdXNlRXZlbnQgfCBSZWFjdC5Ub3VjaEV2ZW50KTogVm9pZCA9PiB7XG4gICAgLy8gMSBsZWZ0IGJ1dHRvbiwgMiByaWdodCBidXR0b25cbiAgICBpZiAoZXYgJiYgJ2J1dHRvbnMnIGluIGV2ICYmIGV2LmJ1dHRvbnMgPT09IDIpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCB7IGRyYWdnaW5nOiBkcmFnZ2luZ0VuYWJsZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWRyYWdnaW5nRW5hYmxlKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgeyB0cmFuc2xhdGU6IHN0YXJ0RHJhZ1RyYW5zbGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRyYWdnaW5nOiB0cnVlLFxuICAgICAgeFBvaW50OiAwLFxuICAgICAgc3RhcnREcmFnVHJhbnNsYXRlLFxuICAgICAgeERyYWdnZWREaXN0YW5jZTogMCxcbiAgICB9KTtcbiAgfTtcblxuICAvKiogZHJhZyBldmVudCBoYW5kbGVyICovXG4gIGhhbmRsZURyYWcgPSAoZTogUmVhY3QuTW91c2VFdmVudCB8IFJlYWN0LlRvdWNoRXZlbnQgfCBFdmVudCk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHsgZHJhZ2dpbmc6IGRyYWdnaW5nRW5hYmxlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlLCBkcmFnZ2luZywgeFBvaW50LCB4RHJhZ2dlZERpc3RhbmNlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICghZHJhZ2dpbmdFbmFibGUgfHwgIWRyYWdnaW5nKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBwb2ludCA9IHRoaXMuZ2V0UG9pbnQoZSk7XG4gICAgY29uc3QgZGlmZiA9XG4gICAgICB4UG9pbnQgPT09IGRlZmF1bHRQcm9wcy54UG9pbnQgPyBkZWZhdWx0UHJvcHMueFBvaW50IDogeFBvaW50IC0gcG9pbnQ7XG4gICAgbGV0IHJlc3VsdCA9IHRyYW5zbGF0ZSAtIGRpZmY7XG5cbiAgICAvLyBkb24ndCBsZXQgc2Nyb2xsIG92ZXIgc3RhcnQgYW5kIGVuZFxuICAgIGlmICh0aGlzLml0QmVmb3JlU3RhcnQocmVzdWx0KSkge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0IC0gTWF0aC5hYnMoZGlmZikgLyAyO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pdEFmdGVyRW5kKHJlc3VsdCkpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdCArIE1hdGguYWJzKGRpZmYpIC8gMjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdUcmFuc2xhdGUgPSByZXN1bHQ7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHhQb2ludDogcG9pbnQsXG4gICAgICB0cmFuc2xhdGU6IG5ld1RyYW5zbGF0ZSxcbiAgICAgIHhEcmFnZ2VkRGlzdGFuY2U6IHhEcmFnZ2VkRGlzdGFuY2UgKyBNYXRoLmFicyhkaWZmKSxcbiAgICB9KTtcbiAgfTtcblxuICAvKiogZXZlbnQgaGFuZGxlciB3aGVuIGRyYWcgYW5kIG1vdXNlIHVwICAqL1xuICBoYW5kbGVEcmFnU3RvcCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50IHwgUmVhY3QuVG91Y2hFdmVudCB8IEV2ZW50KTogVm9pZCA9PiB7XG4gICAgY29uc3QgeyBhbGxJdGVtc1dpZHRoLCBtZW51V2lkdGggfSA9IHRoaXM7XG4gICAgbGV0IHtcbiAgICAgIGRyYWdnaW5nLFxuICAgICAgeFBvaW50ID0gdGhpcy5nZXRQb2ludChlKSxcbiAgICAgIHRyYW5zbGF0ZSxcbiAgICAgIHN0YXJ0RHJhZ1RyYW5zbGF0ZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGRyYWdnaW5nOiBkcmFnZ2luZ0VuYWJsZSwgYWxpZ25DZW50ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFkcmFnZ2luZ0VuYWJsZSB8fCAhZHJhZ2dpbmcpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBuZXdUcmFuc2xhdGUgPSB0cmFuc2xhdGU7XG5cbiAgICBpZiAodGhpcy5pdEJlZm9yZVN0YXJ0KHRyYW5zbGF0ZSkpIHtcbiAgICAgIG5ld1RyYW5zbGF0ZSA9IHRoaXMuZ2V0T2Zmc2V0QXRTdGFydCgpO1xuICAgICAgeFBvaW50ID0gZGVmYXVsdFByb3BzLnhQb2ludDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXRBZnRlckVuZCh0cmFuc2xhdGUpKSB7XG4gICAgICBuZXdUcmFuc2xhdGUgPSB0aGlzLmdldE9mZnNldEF0RW5kKClcbiAgICAgIHhQb2ludCA9IGRlZmF1bHRQcm9wcy54UG9pbnQ7XG4gICAgfVxuXG4gICAgaWYgKCFhbGlnbkNlbnRlciAmJiBhbGxJdGVtc1dpZHRoIDw9IG1lbnVXaWR0aCApIHtcbiAgICAgIG5ld1RyYW5zbGF0ZSA9IGRlZmF1bHRQcm9wcy50cmFuc2xhdGU7XG4gICAgICB4UG9pbnQgPSBkZWZhdWx0UHJvcHMueFBvaW50O1xuICAgIH1cblxuICAgIG5ld1RyYW5zbGF0ZSA9IG5ld1RyYW5zbGF0ZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgeFBvaW50LFxuICAgICAgICB0cmFuc2xhdGU6IG5ld1RyYW5zbGF0ZSxcbiAgICAgIH0sXG4gICAgICAoKSA9PlxuICAgICAgICB0aGlzLm9uVXBkYXRlKHtcbiAgICAgICAgICB0cmFuc2xhdGU6IG5ld1RyYW5zbGF0ZSxcbiAgICAgICAgICB0cmFuc2xhdGVPbGQ6IHN0YXJ0RHJhZ1RyYW5zbGF0ZSxcbiAgICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIC8qKiBjaGVjayBpZiBubyBuZWVkIHNob3cgYXJyb3dzICovXG4gIGlzQXJyb3dzVmlzaWJsZSA9ICgpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBhbGxJdGVtc1dpZHRoLFxuICAgICAgbWVudVdpZHRoLFxuICAgICAgcHJvcHM6IHsgaGlkZUFycm93cyB9LFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGhpZGUgPSBCb29sZWFuKGhpZGVBcnJvd3MgJiYgYWxsSXRlbXNXaWR0aCA8PSBtZW51V2lkdGgpO1xuICAgIHJldHVybiAhaGlkZTtcbiAgfTtcblxuICAvKiogY2IgZm9yIHBvc2l0aW9uIHVwZGF0ZSAqL1xuICBvblVwZGF0ZSA9ICh7XG4gICAgdHJhbnNsYXRlID0gdGhpcy5zdGF0ZS50cmFuc2xhdGUsXG4gICAgdHJhbnNsYXRlT2xkID0gdGhpcy5zdGF0ZS50cmFuc2xhdGUsXG4gICAgZmlyc3RJdGVtVmlzaWJsZSA9IHRoaXMuc3RhdGUuZmlyc3RJdGVtVmlzaWJsZSxcbiAgICBsYXN0SXRlbVZpc2libGUgPSB0aGlzLnN0YXRlLmxhc3RJdGVtVmlzaWJsZSxcbiAgfSA6IHtcbiAgICB0cmFuc2xhdGU/OiBudW1iZXI7XG4gICAgdHJhbnNsYXRlT2xkPzogbnVtYmVyO1xuICAgIGZpcnN0SXRlbVZpc2libGU/OiBib29sZWFuO1xuICAgIGxhc3RJdGVtVmlzaWJsZT86IGJvb2xlYW47XG4gIH0pOiBWb2lkID0+IHtcbiAgICBjb25zdCB7IG9uVXBkYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbGFzdFRyYW5zbGF0ZVVwZGF0ZSB9ID0gdGhpcztcbiAgICAvLyBUT0RPOiByZXR1cm4gZmlyc3QgYW5kIGxhc3QgaXRlbSB2aXNpYmlsaXR5XG4gICAgLy9jb25zdCB7IGZpcnN0SXRlbVZpc2libGUsIGxhc3RJdGVtVmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoXG4gICAgICB0cmFuc2xhdGUgIT09IHRyYW5zbGF0ZU9sZCAmJlxuICAgICAgdHJhbnNsYXRlICE9PSBsYXN0VHJhbnNsYXRlVXBkYXRlXG4gICAgKSB7XG4gICAgICB0aGlzLmxhc3RUcmFuc2xhdGVVcGRhdGUgPSB0cmFuc2xhdGU7XG5cbiAgICAgIHR5cGVvZiAob25VcGRhdGUpID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgIG9uVXBkYXRlKHsgdHJhbnNsYXRlLCBmaXJzdEl0ZW1WaXNpYmxlLCBsYXN0SXRlbVZpc2libGUgfSk7XG4gICAgICAgIC8vb25VcGRhdGUoeyB0cmFuc2xhdGUgfSk7XG4gICAgfVxuICB9O1xuXG4gIHB1YmxpYyByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHwgbnVsbCB7XG4gICAgY29uc3Qge1xuICAgICAgYXJyb3dDbGFzcyxcbiAgICAgIGFycm93RGlzYWJsZWRDbGFzcyxcbiAgICAgIGFycm93TGVmdCxcbiAgICAgIGFycm93UmlnaHQsXG4gICAgICBkYXRhLFxuICAgICAgaW5uZXJXcmFwcGVyQ2xhc3MsXG4gICAgICBpdGVtQ2xhc3MsXG4gICAgICBpdGVtQ2xhc3NBY3RpdmUsXG4gICAgICBtZW51U3R5bGUsXG4gICAgICBtZW51Q2xhc3MsXG4gICAgICB0cmFuc2l0aW9uLFxuICAgICAgd3JhcHBlckNsYXNzLFxuICAgICAgd3JhcHBlclN0eWxlLFxuICAgICAgZm9yd2FyZENsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0ZSxcbiAgICAgIGRyYWdnaW5nLFxuICAgICAgbGVmdEFycm93VmlzaWJsZSxcbiAgICAgIHJpZ2h0QXJyb3dWaXNpYmxlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQsIG1vdW50ZWQgfSA9IHRoaXM7XG5cbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGFycm93c1Zpc2libGUgPSBtb3VudGVkID8gdGhpcy5pc0Fycm93c1Zpc2libGUoKSA6IHRydWU7XG5cbiAgICBjb25zdCBtZW51U3R5bGVzID0geyAuLi5kZWZhdWx0TWVudVN0eWxlLCAuLi5tZW51U3R5bGUgfTtcbiAgICBjb25zdCB3cmFwcGVyU3R5bGVzID0geyAuLi5kZWZhdWx0V3JhcHBlclN0eWxlLCAuLi53cmFwcGVyU3R5bGUgfTtcblxuICAgIGNvbnN0IGFycm93UHJvcHMgPSB7XG4gICAgICBjbGFzc05hbWU6IGFycm93Q2xhc3MsXG4gICAgICBkaXNhYmxlZENsYXNzOiBhcnJvd0Rpc2FibGVkQ2xhc3MsXG4gICAgICBmb3J3YXJkQ2xpY2ssXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bWVudUNsYXNzfSBzdHlsZT17bWVudVN0eWxlc30gb25XaGVlbD17dGhpcy5oYW5kbGVXaGVlbH0+XG4gICAgICAgIHthcnJvd0xlZnQgJiYgKFxuICAgICAgICAgIDxBcnJvd1dyYXBwZXIgey4uLmFycm93UHJvcHN9XG4gICAgICAgICAgICBpc0Rpc2FibGVkPXshYXJyb3dzVmlzaWJsZSB8fCAhbGVmdEFycm93VmlzaWJsZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXJyb3dDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YXJyb3dMZWZ0fVxuICAgICAgICAgIDwvQXJyb3dXcmFwcGVyPlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3dyYXBwZXJDbGFzc31cbiAgICAgICAgICBzdHlsZT17d3JhcHBlclN0eWxlc31cbiAgICAgICAgICByZWY9e3RoaXMuc2V0V3JhcHBlclJlZn1cbiAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVEcmFnU3RhcnR9XG4gICAgICAgICAgb25Ub3VjaFN0YXJ0PXt0aGlzLmhhbmRsZURyYWdTdGFydH1cbiAgICAgICAgICBvblRvdWNoRW5kPXt0aGlzLmhhbmRsZURyYWdTdG9wfVxuICAgICAgICAgIG9uTW91c2VNb3ZlPXt0aGlzLmhhbmRsZURyYWd9XG4gICAgICAgICAgb25Ub3VjaE1vdmU9e3RoaXMuaGFuZGxlRHJhZ31cbiAgICAgICAgPlxuICAgICAgICAgIDxJbm5lcldyYXBwZXJcbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICB0cmFuc2xhdGU9e3RyYW5zbGF0ZX1cbiAgICAgICAgICAgIGRyYWdnaW5nPXtkcmFnZ2luZ31cbiAgICAgICAgICAgIG1vdW50ZWQ9e21vdW50ZWR9XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXttb3VudGVkID8gdHJhbnNpdGlvbiA6IDB9XG4gICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICBzZXRSZWY9e3RoaXMuc2V0UmVmfVxuICAgICAgICAgICAgc2V0TWVudUlubmVyUmVmPXt0aGlzLnNldE1lbnVJbm5lclJlZn1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25JdGVtQ2xpY2t9XG4gICAgICAgICAgICBpbm5lcldyYXBwZXJDbGFzcz17aW5uZXJXcmFwcGVyQ2xhc3N9XG4gICAgICAgICAgICBpdGVtQ2xhc3M9e2l0ZW1DbGFzc31cbiAgICAgICAgICAgIGl0ZW1DbGFzc0FjdGl2ZT17aXRlbUNsYXNzQWN0aXZlfVxuICAgICAgICAgICAgZm9yd2FyZENsaWNrPXtmb3J3YXJkQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2Fycm93UmlnaHQgJiYgKFxuICAgICAgICAgIDxBcnJvd1dyYXBwZXIgey4uLmFycm93UHJvcHN9XG4gICAgICAgICAgICBpc0Rpc2FibGVkPXshYXJyb3dzVmlzaWJsZSB8fCAhcmlnaHRBcnJvd1Zpc2libGV9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFycm93Q2xpY2tSaWdodH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YXJyb3dSaWdodH1cbiAgICAgICAgICA8L0Fycm93V3JhcHBlcj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgY2hlY2tWZXJzaW9uID0gKHRoYXQ6IGFueSk6IFZvaWQgPT4ge1xuICBjb25zdCB2ZXJzaW9uID0gKFJlYWN0LnZlcnNpb24pLm1hdGNoKC9eKFxcZHsxLDJ9KVxcLi8pO1xuICBpZiAoKyh2ZXJzaW9uIVsxXSkgPj0gMTYpIHtcbiAgICB0aGF0LmNvbXBvbmVudERpZENhdGNoID0gKGVycjogYW55LCBpbmZvOiBhbnkpOiBWb2lkID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdTY3JvbGxNZW51IGNhdGNoZWQgZXJyb3I6ICcsIGVyciwgaW5mbyk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxNZW51O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==

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
        forwardClick = _a.forwardClick,
        _onClick = _a.onClick,
        children = _a.children;
    var className = clsName + " " + (isDisabled ? disabledClass : '');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUvc3JjL3dyYXBwZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUEsT0FBQSxHQUFBLGVBQUEsQ0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLENBQUE7O0FBQ0EsSUFBQSxnQkFBQSxHQUFBLE9BQUEsQ0FBQSxrQkFBQSxDQUFBOztBQVVDO0FBRUQsSUFBTSxpQkFBaUIsR0FBRztBQUN4QixFQUFBLGFBQWEsRUFBRSxnQkFBQSxDQUFBLFlBQUEsQ0FBYTtBQURKLENBQTFCOztBQUtBLElBQUEsWUFBQSxHQUFBLFVBQUEsTUFBQSxFQUFBO0FBQWtDLEVBQUEsU0FBQSxDQUFBLFlBQUEsRUFBQSxNQUFBLENBQUE7O0FBQWxDLFdBQUEsWUFBQSxHQUFBOztBQTRCQzs7QUExQlEsRUFBQSxZQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsR0FBUCxZQUFBO0FBQ1EsUUFBQSxFQUFBLEdBQUEsS0FBQSxLQUFBO0FBQUEsUUFDSixVQUFBLEdBQUEsRUFBQSxDQUFBLFVBREk7QUFBQSxRQUVKLE9BQUEsR0FBQSxFQUFBLENBQUEsU0FGSTtBQUFBLFFBR0osYUFBQSxHQUFBLEVBQUEsQ0FBQSxhQUhJO0FBQUEsUUFJSixZQUFBLEdBQUEsRUFBQSxDQUFBLFlBSkk7QUFBQSxRQUtKLFFBQUEsR0FBQSxFQUFBLENBQUEsT0FMSTtBQUFBLFFBTUosUUFBQSxHQUFBLEVBQUEsQ0FBQSxRQU5JO0FBUU4sUUFBTSxTQUFTLEdBQU0sT0FBTyxHQUFBLEdBQVAsSUFBVyxVQUFVLEdBQUcsYUFBSCxHQUFtQixFQUF4QyxDQUFyQjs7QUFDQSxRQUFNLFVBQVUsR0FBQSxRQUFBLENBQUEsRUFBQSxFQUNYLFFBQVEsQ0FBQyxLQURFLEVBQ0c7QUFDakIsTUFBQSxPQUFPLEVBQUUsbUJBQUE7QUFB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UUFBQSxLQUFLLEVBQUU7QUFDTCxVQUFBLE9BQU8sRUFBRTtBQURKLFNBTlQ7QUFTRSxRQUFBLE9BQU8sRUFBRSxLQUFJLENBQUMsbUJBQUwsQ0FBeUIsSUFBSSxDQUFDLEdBQTlCLEVBQW1DLElBQW5DLENBVFg7QUFVRSxRQUFBLFFBQVEsRUFBRSxDQVZaO0FBV0UsUUFBQSxJQUFJLEVBQUM7QUFYUCxPQUFBLEVBRHNCLElBQ3RCLENBRHNCO0FBZ0J2QixLQWhCQSxDQUpILENBREY7QUF3QkQsR0F6Q0Q7O0FBekNPLEVBQUEsWUFBQSxDQUFBLFlBQUEsR0FBZTtBQUNwQixJQUFBLElBQUksRUFBRSxFQURjO0FBRXBCLElBQUEsU0FBUyxFQUFFLGdCQUFBLENBQUEsWUFBQSxDQUFhLFNBRko7QUFHcEIsSUFBQSxRQUFRLEVBQUUsSUFIVTtBQUlwQixJQUFBLE9BQU8sRUFBRSxLQUpXO0FBS3BCLElBQUEsVUFBVSxFQUFFLGdCQUFBLENBQUEsWUFBQSxDQUFhLFVBTEw7QUFNcEIsSUFBQSxRQUFRLEVBQUUsZ0JBQUEsQ0FBQSxZQUFBLENBQWE7QUFOSCxHQUFmO0FBbUZULFNBQUEsWUFBQTtBQUFDLENBcEZELENBQWtDLE9BQUEsQ0FBQSxPQUFBLENBQU0sYUFBeEMsQ0FBQTs7QUFBYSxPQUFBLENBQUEsWUFBQSxHQUFBLFlBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7ZGVmYXVsdFByb3BzfSBmcm9tICcuL2RlZmF1dFNldHRpbmdzJztcbmltcG9ydCB7IERhdGEsIFZvaWQgfSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIEFycm93V3JhcHBlclByb3BzIHtcbiAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gIG9uQ2xpY2s6IEZ1bmN0aW9uLFxuICBjaGlsZHJlbjogSlNYLkVsZW1lbnQsXG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW4sXG4gIGRpc2FibGVkQ2xhc3M/OiBzdHJpbmcsXG4gIGZvcndhcmRDbGljazogYm9vbGVhblxufTtcblxuY29uc3QgQXJyb3dEZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkQ2xhc3M6IGRlZmF1bHRQcm9wcy5hcnJvd0Rpc2FibGVkQ2xhc3MsXG59O1xuXG4vKiogV3JhcHBlciBjb21wb25lbnQgZm9yIGFycm93cyAqL1xuZXhwb3J0IGNsYXNzIEFycm93V3JhcHBlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QXJyb3dXcmFwcGVyUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IEFycm93RGVmYXVsdFByb3BzO1xuICBwdWJsaWMgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNEaXNhYmxlZCxcbiAgICAgIGNsYXNzTmFtZTogY2xzTmFtZSxcbiAgICAgIGRpc2FibGVkQ2xhc3MsXG4gICAgICBmb3J3YXJkQ2xpY2ssXG4gICAgICBvbkNsaWNrLFxuICAgICAgY2hpbGRyZW5cbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc05hbWUgPSBgJHtjbHNOYW1lfSAke2lzRGlzYWJsZWQgPyBkaXNhYmxlZENsYXNzIDogJyd9YDtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgLi4uY2hpbGRyZW4ucHJvcHMsXG4gICAgICBvbkNsaWNrOiAoKSA9PiAoZm9yd2FyZENsaWNrID8gb25DbGljaygpIDogbnVsbCksXG4gICAgfTtcbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoKTogVm9pZCA9PiB7XG4gICAgICBvbkNsaWNrKCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICA+XG4gICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIGNoaWxkUHJvcHMpfVxuICAgICAgPC9kaXY+KTtcbiAgfTtcblxufTtcblxuaW50ZXJmYWNlIGlubmVyU3R5bGVQcm9wcyB7XG4gIHRyYW5zbGF0ZTogbnVtYmVyLFxuICBkcmFnZ2luZzogYm9vbGVhbixcbiAgbW91bnRlZDogYm9vbGVhbixcbiAgdHJhbnNpdGlvbjogbnVtYmVyLFxufTtcblxuLyoqIGZ1bmN0aW9uIHRvIGdldCBkZWZhdWx0IHN0eWxlcyBmb3IgaW5uZXJXcmFwcGVyICovXG5leHBvcnQgY29uc3QgaW5uZXJTdHlsZSA9ICh7dHJhbnNsYXRlLCBkcmFnZ2luZywgbW91bnRlZCwgdHJhbnNpdGlvbn0gOiBpbm5lclN0eWxlUHJvcHMpOiBDU1NQcm9wZXJ0aWVzID0+IHtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogJzk5MDBweCcsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHt0cmFuc2xhdGV9cHgsIDBweCwgMHB4KWAsXG4gICAgdHJhbnNpdGlvbjogYHRyYW5zZm9ybSAke2RyYWdnaW5nIHx8ICFtb3VudGVkID8gJzAnIDogdHJhbnNpdGlvbn1zYCxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIH07XG59O1xuXG5pbnRlcmZhY2UgSW5uZXJXcmFwcGVyUHJvcHMge1xuICBkYXRhOiBEYXRhLFxuICBzZXRSZWY6IEZ1bmN0aW9uLFxuICBzZXRNZW51SW5uZXJSZWY6IEZ1bmN0aW9uLFxuICBvbkNsaWNrOiBGdW5jdGlvbixcbiAgdHJhbnNsYXRlOiBudW1iZXIsXG4gIGRyYWdnaW5nOiBib29sZWFuLFxuICBtb3VudGVkOiBib29sZWFuLFxuICB0cmFuc2l0aW9uOiBudW1iZXIsXG4gIHNlbGVjdGVkOiBzdHJpbmd8bnVtYmVyLFxuICBpbm5lcldyYXBwZXJDbGFzczogc3RyaW5nLFxuICBpdGVtQ2xhc3M6IHN0cmluZyxcbiAgaXRlbUNsYXNzQWN0aXZlOiBzdHJpbmcsXG4gIGZvcndhcmRDbGljazogYm9vbGVhbixcbn07XG5cbi8vKiogaW5uZXJXcmFwcGVyIGNvbXBvbmVudCwgbWVudUl0ZW1zIHdpbGwgYmUgY2hpbGRyZW4gKi9cbmV4cG9ydCBjbGFzcyBJbm5lcldyYXBwZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElubmVyV3JhcHBlclByb3BzLCB7fT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRhdGE6IFtdLFxuICAgIHRyYW5zbGF0ZTogZGVmYXVsdFByb3BzLnRyYW5zbGF0ZSxcbiAgICBkcmFnZ2luZzogdHJ1ZSxcbiAgICBtb3VudGVkOiBmYWxzZSxcbiAgICB0cmFuc2l0aW9uOiBkZWZhdWx0UHJvcHMudHJhbnNpdGlvbixcbiAgICBzZWxlY3RlZDogZGVmYXVsdFByb3BzLnNlbGVjdGVkLFxuICB9O1xuXG4gIC8qKiBzZXQgcmVmIG9mIHRoaXMgY29tcG9uZW50ICovXG4gIHNldE1lbnVJbm5lclJlZiA9ICh2YWx1ZTogSFRNTERpdkVsZW1lbnQgfCBudWxsKTogVm9pZCA9PiB7XG4gICAgY29uc3Qge3NldE1lbnVJbm5lclJlZn0gPSB0aGlzLnByb3BzO1xuICAgIHNldE1lbnVJbm5lclJlZih7J21lbnVJbm5lcic6IHsga2V5OiAnbWVudUlubmVyJywgZWxlbTogdmFsdWV9fSk7XG4gIH07XG5cbiAgLyoqIHNldCByZWYgZm9yIG1lbnVJdGVtcyAqL1xuICBzZXRSZWYgPSAoa2V5OiBzdHJpbmcsIGVsS2V5OiBzdHJpbmcsIHZhbHVlOiBIVE1MRGl2RWxlbWVudCB8IG51bGwpOiBWb2lkID0+IHtcbiAgICBjb25zdCB7c2V0UmVmfSA9IHRoaXMucHJvcHM7XG4gICAgc2V0UmVmKHtba2V5XTogeyBrZXk6IGVsS2V5LCBlbGVtOiB2YWx1ZX19KTtcbiAgfTtcblxuICAvKiogY2hlY2sgaWYgbWVudUl0ZW0gYWN0aXZlICovXG4gIGlzRWxlbWVudEFjdGl2ZSA9IChpdGVtSWQ6IHN0cmluZ3xudW1iZXJ8bnVsbCwgc2VsZWN0ZWQ6IHN0cmluZ3xudW1iZXIpOiBib29sZWFuID0+IFN0cmluZyhpdGVtSWQpID09PSBTdHJpbmcoc2VsZWN0ZWQpO1xuXG4gIC8qKiBtYWtlIGFycmF5IG9mIG1lbnVJdGVtcyAqL1xuICBzZXRJdGVtcyA9IChhcnI6IEpTWC5FbGVtZW50W10sIHNlbGVjdGVkOiBSZWFjdC5SZWFjdFRleHQpOiBKU1guRWxlbWVudFtdID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IGFyci5tYXAoZWwgPT4ge1xuICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIHNlbGVjdGVkOiB0aGlzLmlzRWxlbWVudEFjdGl2ZShlbC5rZXksIHNlbGVjdGVkKSxcbiAgICAgICAgb25DbGljazogdGhpcy5mb3J3YXJkQ2xpY2tIYW5kbGVyKGVsLmtleSksXG4gICAgICB9O1xuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChlbCwgcHJvcHMpO1xuICAgIH0pO1xuICAgIHJldHVybiBpdGVtcztcbiAgfTtcblxuICBmb3J3YXJkQ2xpY2tIYW5kbGVyID0gKGtleTogYW55LCByZXZlcnNlOiBib29sZWFuID0gZmFsc2UpID0+ICgpOiBWb2lkID0+IHtcbiAgICBjb25zdCB7IGZvcndhcmRDbGljaywgb25DbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAocmV2ZXJzZSA/ICFmb3J3YXJkQ2xpY2sgOiBmb3J3YXJkQ2xpY2spIG9uQ2xpY2soa2V5KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNsYXRlLFxuICAgICAgZHJhZ2dpbmcsXG4gICAgICBtb3VudGVkLFxuICAgICAgdHJhbnNpdGlvbixcbiAgICAgIGlubmVyV3JhcHBlckNsYXNzLFxuICAgICAgaXRlbUNsYXNzLFxuICAgICAgaXRlbUNsYXNzQWN0aXZlLFxuICAgICAgZGF0YSxcbiAgICAgIHNlbGVjdGVkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnNldEl0ZW1zKGRhdGEsIHNlbGVjdGVkKTtcblxuICAgIGNvbnN0IHN0eWxlOiBDU1NQcm9wZXJ0aWVzID0gaW5uZXJTdHlsZSh7IHRyYW5zbGF0ZSwgZHJhZ2dpbmcsIG1vdW50ZWQsIHRyYW5zaXRpb24gfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2lubmVyV3JhcHBlckNsYXNzfVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIHJlZj17aW5zdCA9PiB0aGlzLnNldE1lbnVJbm5lclJlZihpbnN0KX0+XG4gICAgICAgIHtpdGVtcy5tYXAoKEl0ZW0sIGkpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9e2luc3QgPT4gdGhpcy5zZXRSZWYoYG1lbnVpdGVtLSR7aX1gLCBTdHJpbmcoSXRlbS5rZXkgfHwgJycpLCBpbnN0KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXRlbUNsYXNzfSAke1xuICAgICAgICAgICAgICBJdGVtLnByb3BzLnNlbGVjdGVkID8gaXRlbUNsYXNzQWN0aXZlIDogJydcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAga2V5PXsnbWVudUl0ZW0tJyArIEl0ZW0ua2V5fVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5mb3J3YXJkQ2xpY2tIYW5kbGVyKEl0ZW0ua2V5LCB0cnVlKX1cbiAgICAgICAgICAgIHRhYkluZGV4PXsxfVxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICB7SXRlbX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9

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