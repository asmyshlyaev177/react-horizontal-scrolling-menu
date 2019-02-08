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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
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

/***/ "./src/defautSettings.js":
/*!*******************************!*\
  !*** ./src/defautSettings.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultSetting = {
  alignCenter: true,
  arrowClass: 'scroll-menu-arrow',
  clickWhenDrag: false,
  dragging: true,
  data: [],
  firstPageOffset: 0,
  innerWrapperClass: 'menu-wrapper--inner',
  itemClass: 'menu-item-wrapper',
  itemClassActive: 'active',
  hideArrows: false,
  hideSingleArrow: false,
  lastPageOffset: 0,
  menuItems: [],
  menuPos: 0,
  menuWidth: 0,
  menuClass: 'horizontal-menu',
  scrollToSelected: false,
  selected: 0,
  startDragTranslate: null,
  translate: 0.0,
  transition: 0.4,
  wrapperClass: 'menu-wrapper',
  wheel: true,
  xPoint: 0,
  xDraggedDistance: null
};

var defaultProps = {
  alignCenter: defaultSetting.alignCenter,
  arrowClass: defaultSetting.arrowClass,
  innerWrapperClass: defaultSetting.innerWrapperClass,
  itemClass: defaultSetting.itemClass,
  itemClassActive: defaultSetting.itemClassActive,
  hideArrows: defaultSetting.hideArrows,
  hideSingleArrow: defaultSetting.hideSingleArrow,
  clickWhenDrag: defaultSetting.clickWhenDrag,
  data: defaultSetting.data,
  dragging: defaultSetting.dragging,
  scrollToSelected: defaultSetting.scrollToSelected,
  selected: defaultSetting.selected,
  transition: defaultSetting.transition,
  translate: defaultSetting.translate,
  menuClass: defaultSetting.menuClass,
  wheel: defaultSetting.wheel,
  wrapperClass: defaultSetting.wrapperClass
};

var defaultMenuStyle = {
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none'
};

var defaultWrapperStyle = {
  overflow: 'hidden',
  userSelect: 'none'
};

exports.defaultSetting = defaultSetting;
exports.defaultProps = defaultProps;
exports.defaultMenuStyle = defaultMenuStyle;
exports.defaultWrapperStyle = defaultWrapperStyle;

/***/ }),

/***/ "./src/index.mjs":
/*!***********************!*\
  !*** ./src/index.mjs ***!
  \***********************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scrollMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollMenu */ "./src/scrollMenu.js");


/* harmony default export */ __webpack_exports__["default"] = (_scrollMenu__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/scrollMenu.js":
/*!***************************!*\
  !*** ./src/scrollMenu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.ScrollMenu = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var _defautSettings = __webpack_require__(/*! ./defautSettings */ "./src/defautSettings.js");

var _wrapper = __webpack_require__(/*! ./wrapper */ "./src/wrapper.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollMenu = exports.ScrollMenu = function (_React$Component) {
  _inherits(ScrollMenu, _React$Component);

  function ScrollMenu(props) {
    _classCallCheck(this, ScrollMenu);

    var _this = _possibleConstructorReturn(this, (ScrollMenu.__proto__ || Object.getPrototypeOf(ScrollMenu)).call(this, props));

    _this.state = {
      dragging: false,
      xPoint: _defautSettings.defaultSetting.xPoint,
      translate: (0, _utils.validateTranslate)(_this.props.translate, _defautSettings.defaultSetting.translate),
      startDragTranslate: _defautSettings.defaultSetting.startDragTranslate,
      xDraggedDistance: _defautSettings.defaultSetting.xDraggedDistance,
      leftArrowVisible: false,
      rightArrowVisible: true
    };

    _this.setRef = function (ref) {
      _this.ref = ref;
    };

    _this.setWrapperRef = function (ref) {
      _this.ref.menuWrapper = ref;
    };

    _this.checkSingleArrowVisibility = function (_ref) {
      var _ref$translate = _ref.translate,
          translate = _ref$translate === undefined ? _this.state.translate : _ref$translate;
      var hideSingleArrow = _this.props.hideSingleArrow;
      var leftArrowVisible = true,
          rightArrowVisible = true;
      var items = _this.menuItems;


      if (hideSingleArrow && items) {
        var visibleItems = _this.getVisibleItems({ offset: translate });
        var firstItemVisible = visibleItems.includes(items[0]);
        var lastItemVisible = visibleItems.includes(items.slice(-1)[0]);
        leftArrowVisible = !firstItemVisible;
        rightArrowVisible = !lastItemVisible;
      }

      return { leftArrowVisible: leftArrowVisible, rightArrowVisible: rightArrowVisible };
    };

    _this.setSingleArrowVisibility = function () {
      var _this$state = _this.state,
          leftArrowVisible = _this$state.leftArrowVisible,
          rightArrowVisible = _this$state.rightArrowVisible;

      var _this$checkSingleArro = _this.checkSingleArrowVisibility({}),
          leftArrowVisibleNew = _this$checkSingleArro.leftArrowVisible,
          rightArrowVisibleNew = _this$checkSingleArro.rightArrowVisible;

      if (leftArrowVisible !== leftArrowVisibleNew || rightArrowVisible !== rightArrowVisibleNew) {
        _this.setState({
          leftArrowVisible: leftArrowVisibleNew,
          rightArrowVisible: rightArrowVisibleNew
        });
      }
    };

    _this.onLoad = function () {
      _this.mounted = true;
      _this.setInitial();
    };

    _this.setInitial = function () {
      var _this$props = _this.props,
          selected = _this$props.selected,
          data = _this$props.data,
          translateProps = _this$props.translate,
          scrollToSelected = _this$props.scrollToSelected;

      if (!data || !data.length) return false;

      var menuItems = _this.getMenuItems(data.length);
      var selectedItem = data.find(function (el) {
        return el.key === selected;
      });

      var values = {
        menuItems: menuItems,
        selected: selectedItem && selectedItem !== -1 ? selectedItem.key : _defautSettings.defaultSetting.selected
      };

      for (var key in values) {
        _this[key] = values[key];
      }

      // align item on initial load

      var _this$updateWidth = _this.updateWidth({
        items: menuItems,
        offset: 0,
        translate: 0
      }),
          _ = _this$updateWidth.translate,
          width = _objectWithoutProperties(_this$updateWidth, ['translate']);

      for (var _key in width) {
        _this[_key] = width[_key];
      }
      var translateNewRaw = _this.getAlignItemsOffset();
      var translateNew = (0, _utils.translateIsValid)(translateNewRaw) ? (0, _utils.formatTranslate)(translateNewRaw) : false;

      var newState = _extends({}, _this.state);

      // check arrows

      var _this$checkSingleArro2 = _this.checkSingleArrowVisibility({ translate: translateNew }),
          leftArrowVisible = _this$checkSingleArro2.leftArrowVisible,
          rightArrowVisible = _this$checkSingleArro2.rightArrowVisible;

      newState.leftArrowVisible = leftArrowVisible;
      newState.rightArrowVisible = rightArrowVisible;

      if (!(0, _utils.translateIsValid)(translateProps)) {
        newState.translate = translateNew;
      }
      // scrollToSelected
      if (scrollToSelected) {
        var needScroll = _this.isScrollNeeded({
          itemId: selected,
          translate: newState.translate
        });
        if (needScroll) {
          newState.translate = (0, _utils.formatTranslate)(_this.getOffsetToItemByKey(selected));
        }
      }

      _this.setState(_extends({}, newState));
    };

    _this.isScrollNeeded = function (_ref2) {
      var itemId = _ref2.itemId,
          _ref2$translate = _ref2.translate,
          translate = _ref2$translate === undefined ? _this.state.translate : _ref2$translate;

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

      _this.setState({ translate: newTranslate });
    };

    _this.getMenuItems = function (dataLength) {
      return Object.entries(_this.ref).filter(function (el) {
        return el[0].includes('menuitem');
      }).slice(0, dataLength).filter(Boolean);
    };

    _this.getItemsWidth = function (_ref3) {
      var _ref3$items = _ref3.items,
          items = _ref3$items === undefined ? _this.menuItems : _ref3$items;

      var data = items && items.items || items;
      return data.map(function (el) {
        return el[1];
      }).filter(Boolean).reduce(function (acc, el) {
        return acc += (0, _utils.getClientRect)(el).width;
      }, 0);
    };

    _this.getWidth = function (_ref4) {
      var items = _ref4.items;

      var wWidth = window && window.innerWidth;

      var _getClientRect = (0, _utils.getClientRect)(_this.ref.menuWrapper),
          menuPos = _getClientRect.x,
          menuWidth = _getClientRect.width;

      var allItemsWidth = _this.getItemsWidth({ items: items });
      return { wWidth: wWidth, menuPos: menuPos, menuWidth: menuWidth, allItemsWidth: allItemsWidth };
    };

    _this.updateWidth = function (_ref5) {
      var _ref5$items = _ref5.items,
          items = _ref5$items === undefined ? _this.menuItems : _ref5$items,
          args = _objectWithoutProperties(_ref5, ['items']);

      var alignCenter = _this.props.alignCenter;

      var width = _this.getWidth({ items: items });
      return _extends({}, width, alignCenter ? _this.getPagesOffsets(_extends({ items: items }, width, args)) : {});
    };

    _this.getPagesOffsets = function (_ref6) {
      var _ref6$items = _ref6.items,
          items = _ref6$items === undefined ? _this.menuItems : _ref6$items,
          _ref6$allItemsWidth = _ref6.allItemsWidth,
          allItemsWidth = _ref6$allItemsWidth === undefined ? _this.allItemsWidth : _ref6$allItemsWidth,
          _ref6$wWidth = _ref6.wWidth,
          wWidth = _ref6$wWidth === undefined ? _this.wWidth : _ref6$wWidth,
          _ref6$menuPos = _ref6.menuPos,
          menuPos = _ref6$menuPos === undefined ? _this.menuPos : _ref6$menuPos,
          _ref6$menuWidth = _ref6.menuWidth,
          menuWidth = _ref6$menuWidth === undefined ? _this.menuWidth : _ref6$menuWidth,
          _ref6$translate = _ref6.translate,
          translate = _ref6$translate === undefined ? _this.state.translate : _ref6$translate,
          _ref6$offset = _ref6.offset,
          offset = _ref6$offset === undefined ? _this.state.translate : _ref6$offset;
      var alignCenter = _this.props.alignCenter;

      var visibleItemsStart = _this.getVisibleItems({
        offset: offset,
        items: items,
        wWidth: wWidth,
        menuPos: menuPos,
        menuWidth: menuWidth
      });
      var firstPageOffset = (0, _utils.formatTranslate)(_this.getCenterOffset({
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
      var lastPageOffset = (0, _utils.formatTranslate)(_this.getCenterOffset({
        items: visibleItemsEnd,
        menuWidth: menuWidth
      }));
      var trans = translate === 0 && alignCenter ? firstPageOffset : translate;
      _this.firstPageOffset = firstPageOffset;
      _this.lastPageOffset = lastPageOffset;
      return { firstPageOffset: firstPageOffset, lastPageOffset: lastPageOffset, translate: (0, _utils.formatTranslate)(trans) };
    };

    _this.onItemClick = function (id) {
      var _this$props2 = _this.props,
          clickWhenDrag = _this$props2.clickWhenDrag,
          onSelect = _this$props2.onSelect;
      var xDraggedDistance = _this.state.xDraggedDistance;


      var afterScroll = xDraggedDistance > 5;

      if (afterScroll && !clickWhenDrag) return false;

      _this.selected = id;
      if (onSelect) onSelect(id);
    };

    _this.getVisibleItems = function (_ref7) {
      var _ref7$items = _ref7.items,
          items = _ref7$items === undefined ? _this.menuItems : _ref7$items,
          _ref7$wWidth = _ref7.wWidth,
          wWidth = _ref7$wWidth === undefined ? _this.wWidth : _ref7$wWidth,
          _ref7$menuPos = _ref7.menuPos,
          menuPos = _ref7$menuPos === undefined ? _this.menuPos : _ref7$menuPos,
          _ref7$menuWidth = _ref7.menuWidth,
          menuWidth = _ref7$menuWidth === undefined ? _this.menuWidth : _ref7$menuWidth,
          _ref7$offset = _ref7.offset,
          offset = _ref7$offset === undefined ? _this.state.translate : _ref7$offset,
          _ref7$translate = _ref7.translate,
          translate = _ref7$translate === undefined ? _this.state.translate : _ref7$translate;

      var data = items.items || items;

      return data.filter(function (el) {
        var _getClientRect2 = (0, _utils.getClientRect)(el[1]),
            elWidth = _getClientRect2.width;

        var id = _this.getItemInd(items, el);
        var x = _this.getOffsetToItemByIndex({
          index: id,
          menuItems: items,
          translate: translate
        });

        return _this.elemVisible({ x: x, elWidth: elWidth, wWidth: wWidth, menuPos: menuPos, menuWidth: menuWidth, offset: offset });
      });
    };

    _this.elemVisible = function (_ref8) {
      var x = _ref8.x,
          _ref8$offset = _ref8.offset,
          offset = _ref8$offset === undefined ? 0 : _ref8$offset,
          elWidth = _ref8.elWidth,
          _ref8$wWidth = _ref8.wWidth,
          wWidth = _ref8$wWidth === undefined ? _this.wWidth : _ref8$wWidth,
          _ref8$menuPos = _ref8.menuPos,
          menuPos = _ref8$menuPos === undefined ? _this.menuPos : _ref8$menuPos,
          _ref8$menuWidth = _ref8.menuWidth,
          menuWidth = _ref8$menuWidth === undefined ? _this.menuWidth : _ref8$menuWidth;

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


      translate = _this.getOffsetToItemByIndex({ index: itemIndex });

      var visibleItemsWithNewTranslate = _this.getVisibleItems({
        offset: -translate
      });
      var offset = alignCenter ? _this.getCenterOffset({ items: visibleItemsWithNewTranslate }) : _defautSettings.defaultSetting.translate;

      translate = -(translate - menuPos - offset);

      if (_this.itBeforeStart(translate)) {
        translate = _this.getOffsetAtStart();
      }
      if (_this.itAfterEnd(translate)) {
        translate = _this.getOffsetAtEnd();
      }
      return (0, _utils.formatTranslate)(translate);
    };

    _this.getItemIndexByKey = function (itemKey) {
      if (!itemKey) return -1;
      return _this.props.data.findIndex(function (el) {
        return el.key === itemKey;
      });
    };

    _this.getOffsetToItemByIndex = function (_ref9) {
      var index = _ref9.index,
          _ref9$menuItems = _ref9.menuItems,
          menuItems = _ref9$menuItems === undefined ? _this.menuItems : _ref9$menuItems,
          _ref9$translate = _ref9.translate,
          translate = _ref9$translate === undefined ? _this.state.translate : _ref9$translate;

      if (!menuItems.length) return 0;
      var ind = index >= menuItems.length ? menuItems.length - 1 : index;

      var _getClientRect3 = (0, _utils.getClientRect)(menuItems[ind][1]),
          x = _getClientRect3.x;

      var position = +x - translate;
      return position;
    };

    _this.getScrollRightOffset = function (visibleItems, items) {
      var alignCenter = _this.props.alignCenter;
      var menuPos = _this.menuPos,
          lastPageOffset = _this.lastPageOffset;


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
        return _this.getCenterOffset({ items: nextVisibleItems });
      };

      var newOffset = alignCenter ? offsetToItemOnStart - centerOffset() : offsetToItemOnStart;
      return newOffset;
    };

    _this.getScrollLeftOffset = function (visibleItems, items) {
      var alignCenter = _this.props.alignCenter;
      var menuPos = _this.menuPos,
          menuWidth = _this.menuWidth,
          firstPageOffset = _this.firstPageOffset;


      var prevItem = _this.getPrevItem(visibleItems && visibleItems[0] ? visibleItems[0][0] : items[0][0]);
      var prevItemIndex = items.findIndex(function (el) {
        return el[0] === prevItem[0];
      });

      var offsetToItem = _this.getOffsetToItemByIndex({
        index: prevItemIndex,
        menuItems: items
      });
      var itemWidth = _this.getItemsWidth({ items: [prevItem] });
      var offsetToItemOnEnd = offsetToItem - menuPos - (menuWidth - itemWidth);

      var nextVisibleItems = _this.getVisibleItems({
        items: items,
        offset: -offsetToItemOnEnd
      });

      if (nextVisibleItems.includes(items[0])) {
        return alignCenter ? -firstPageOffset : 0;
      }

      var centerOffset = function centerOffset() {
        return _this.getCenterOffset({ items: nextVisibleItems });
      };

      var newOffset = alignCenter ? offsetToItemOnEnd + centerOffset() : offsetToItemOnEnd;
      return newOffset;
    };

    _this.getAlignItemsOffset = function () {
      var menuWidth = _this.menuWidth,
          allItemsWidth = _this.allItemsWidth,
          menuItems = _this.menuItems,
          firstPageOffset = _this.firstPageOffset,
          lastPageOffset = _this.lastPageOffset;
      var alignCenter = _this.props.alignCenter;
      var translate = _this.state.translate;


      if (allItemsWidth < menuWidth) {
        return _this.handleArrowClick(!alignCenter);
      }

      var visibleItems = _this.getVisibleItems({}) || [];
      var left = visibleItems.includes(menuItems[0]);
      var right = visibleItems.includes(menuItems.slice(-1)[0]);

      // center is visible, do nothing
      if (!left && !right) return (0, _utils.formatTranslate)(translate);

      // left edge visible
      if (left) {
        var transl = alignCenter ? firstPageOffset : _defautSettings.defaultSetting.translate;
        return (0, _utils.formatTranslate)(transl);
      } else {
        var offset = allItemsWidth - menuWidth;
        var _transl = alignCenter ? -offset - lastPageOffset : -offset;
        return (0, _utils.formatTranslate)(_transl);
      }
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

      var visibleItems = _this.getVisibleItems({ items: items });
      var newOffset = left ? _this.getScrollLeftOffset(visibleItems, items) : _this.getScrollRightOffset(visibleItems, items);
      return newOffset;
    };

    _this.getCenterOffset = function (_ref10) {
      var _ref10$items = _ref10.items,
          items = _ref10$items === undefined ? _this.menuItems : _ref10$items,
          _ref10$menuWidth = _ref10.menuWidth,
          menuWidth = _ref10$menuWidth === undefined ? _this.menuWidth : _ref10$menuWidth;

      if (!items.length) {
        return 0;
      }
      var itemsWidth = _this.getItemsWidth({ items: items });
      var offset = (menuWidth - itemsWidth) / 2;
      return (0, _utils.formatTranslate)(offset);
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

    _this.handleArrowClickRight = function () {
      _this.handleArrowClick(false);
    };

    _this.getOffsetAtStart = function () {
      var firstPageOffset = _this.firstPageOffset;
      var alignCenter = _this.props.alignCenter;

      return alignCenter ? firstPageOffset : _defautSettings.defaultSetting.translate;
    };

    _this.getOffsetAtEnd = function () {
      var alignCenter = _this.props.alignCenter;
      var allItemsWidth = _this.allItemsWidth,
          menuWidth = _this.menuWidth,
          lastPageOffset = _this.lastPageOffset;

      var offset = allItemsWidth - menuWidth;
      return alignCenter ? -offset - lastPageOffset : -offset;
    };

    _this.handleArrowClick = function () {
      var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var alignCenter = _this.props.alignCenter;
      var allItemsWidth = _this.allItemsWidth,
          menuWidth = _this.menuWidth;


      if (!alignCenter && !left && menuWidth > allItemsWidth) {
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

      var newTranslate = (0, _utils.formatTranslate)(transl);

      _this.setState({
        translate: newTranslate,
        xPoint: _defautSettings.defaultSetting.xPoint,
        startDragTranslate: null,
        xDraggedDistance: null
      });
    };

    _this.itBeforeStart = function (trans) {
      var alignCenter = _this.props.alignCenter;
      var firstPageOffset = _this.firstPageOffset;

      return alignCenter ? trans > firstPageOffset : trans > _defautSettings.defaultSetting.translate;
    };

    _this.itAfterEnd = function (trans) {
      var alignCenter = _this.props.alignCenter;
      var menuWidth = _this.menuWidth,
          allItemsWidth = _this.allItemsWidth,
          lastPageOffset = _this.lastPageOffset;

      return alignCenter ? trans < _defautSettings.defaultSetting.translate && Math.abs(trans) > allItemsWidth - menuWidth + lastPageOffset : trans < _defautSettings.defaultSetting.translate && Math.abs(trans) > allItemsWidth - menuWidth;
    };

    _this.getPoint = function (e) {
      return e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
    };

    _this.handleDragStart = function (ev) {
      // 1 left button, 2 right button
      if (ev && ev.buttons === 2) return false;
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
      var _this$state2 = _this.state,
          translate = _this$state2.translate,
          dragging = _this$state2.dragging,
          xPoint = _this$state2.xPoint,
          xDraggedDistance = _this$state2.xDraggedDistance;

      if (!draggingEnable || !dragging) return false;

      var point = _this.getPoint(e);
      var diff = xPoint === _defautSettings.defaultSetting.xPoint ? _defautSettings.defaultSetting.xPoint : xPoint - point;
      var result = translate - diff;

      // don't let scroll over start and end
      if (_this.itBeforeStart(result)) {
        result = result - Math.abs(diff) / 2;
      }
      if (_this.itAfterEnd(result)) {
        result = result + Math.abs(diff) / 2;
      }

      var newTranslate = (0, _utils.formatTranslate)(result);

      _this.setState({
        xPoint: point,
        translate: newTranslate,
        xDraggedDistance: xDraggedDistance + Math.abs(diff)
      });
    };

    _this.handleDragStop = function (e) {
      var allItemsWidth = _this.allItemsWidth,
          menuWidth = _this.menuWidth,
          firstPageOffset = _this.firstPageOffset,
          lastPageOffset = _this.lastPageOffset;
      var _this$state3 = _this.state,
          dragging = _this$state3.dragging,
          _this$state3$xPoint = _this$state3.xPoint,
          xPoint = _this$state3$xPoint === undefined ? _this.getPoint(e) : _this$state3$xPoint,
          translate = _this$state3.translate,
          startDragTranslate = _this$state3.startDragTranslate;
      var _this$props3 = _this.props,
          draggingEnable = _this$props3.dragging,
          alignCenter = _this$props3.alignCenter;

      if (!draggingEnable || !dragging) return false;

      var newTranslate = translate;

      if (_this.itBeforeStart(translate)) {
        newTranslate = alignCenter ? firstPageOffset : _defautSettings.defaultSetting.translate;
        xPoint = _defautSettings.defaultSetting.xPoint;
      }
      if (_this.itAfterEnd(translate)) {
        var offset = allItemsWidth - menuWidth;
        newTranslate = alignCenter ? -offset - lastPageOffset : -offset;
        xPoint = _defautSettings.defaultSetting.xPoint;
      }

      if (!alignCenter && menuWidth >= allItemsWidth) {
        newTranslate = _defautSettings.defaultSetting.translate;
        xPoint = _defautSettings.defaultSetting.xPoint;
      }

      newTranslate = (0, _utils.formatTranslate)(newTranslate);

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
      var allItemsWidth = _this.allItemsWidth,
          menuWidth = _this.menuWidth,
          hideArrows = _this.props.hideArrows;

      var hide = Boolean(hideArrows && allItemsWidth <= menuWidth);
      return !hide;
    };

    _this.onUpdate = function (_ref11) {
      var _ref11$translate = _ref11.translate,
          translate = _ref11$translate === undefined ? _this.state.translate : _ref11$translate,
          _ref11$translateOld = _ref11.translateOld,
          translateOld = _ref11$translateOld === undefined ? _this.state.translate : _ref11$translateOld;
      var onUpdate = _this.props.onUpdate;
      var lastTranslateUpdate = _this.lastTranslateUpdate;

      if (onUpdate && translate !== translateOld && translate !== lastTranslateUpdate) {
        _this.lastTranslateUpdate = translate;
        onUpdate({ translate: translate });
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
    _this.lastTranslateUpdate = null;
    return _this;
  }

  _createClass(ScrollMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.setInitial();

      window.requestAnimationFrame = window.requestAnimationFrame || function () {};

      var passiveEvents = (0, _utils.testPassiveEventSupport)();
      var optionsCapture = passiveEvents ? { passive: true, capture: true } : true;
      var optionsNoCapture = passiveEvents ? { passive: true, capture: false } : false;

      // if styles loaded before js bundle need wait for it
      window.addEventListener('load', this.onLoad, optionsNoCapture);
      window.addEventListener('resize', this.setInitial, optionsNoCapture);
      document.addEventListener('mousemove', this.handleDrag, optionsCapture);
      document.addEventListener('mouseup', this.handleDragStop, optionsCapture);
      setTimeout(function () {
        return _this2.onLoad();
      }, 0);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _state = this.state,
          selected = _state.selected,
          translate = _state.translate,
          dragging = _state.dragging,
          leftArrowVisible = _state.leftArrowVisible,
          rightArrowVisible = _state.rightArrowVisible;
      var selectedNew = nextState.selected,
          translateNew = nextState.translate,
          draggingNew = nextState.dragging,
          leftArrowVisibleNew = nextState.leftArrowVisible,
          rightArrowVisibleNew = nextState.rightArrowVisible;
      var _props = this.props,
          translateProps = _props.translate,
          selectedProps = _props.selected,
          scrollToSelected = _props.scrollToSelected;
      var translatePropsNew = nextProps.translate,
          selectedPropsNew = nextProps.selected;


      var translatePropsNotNull = (0, _utils.notUndefOrNull)(translatePropsNew);
      var translateStateDiff = translate !== translateNew;
      var translatePropsDiff = translatePropsNotNull && translateProps !== translatePropsNew;
      var translateDiff = translatePropsNew !== translateNew && (translateStateDiff || translatePropsDiff);

      var selectedPropsDiff = (0, _utils.notUndefOrNull)(selectedPropsNew) && selectedProps !== selectedPropsNew;
      var selectedStateDiff = selected !== selectedNew;
      var selectedDiff = selectedPropsNew !== selectedNew && (selectedPropsDiff || selectedStateDiff);

      var propsDiff = translateDiff || selectedDiff;

      var leftArrowVisibleDiff = leftArrowVisible !== leftArrowVisibleNew;
      var rightArrowVisibleDiff = rightArrowVisible !== rightArrowVisibleNew;

      var translateResult = translateNew;

      var newMenuItems = this.props.data !== nextProps.data || this.props.data.length !== nextProps.data.length;
      var newTranslateProps = (0, _utils.translateIsValid)(translatePropsNew) && translatePropsDiff && !newMenuItems;

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
        this.setState({ translate: (0, _utils.formatTranslate)(translateResult) });
      }

      return newMenuItems || translateDiff || dragging !== draggingNew || propsDiff || leftArrowVisibleDiff || rightArrowVisibleDiff;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

      if (this.needUpdate) {
        this.needUpdate = false;
        this.onLoad();
      }

      var translateOld = prevState.translate;
      var _state2 = this.state,
          translateNew = _state2.translate,
          dragging = _state2.dragging;


      if (!dragging && translateOld !== translateNew) {
        this.onUpdate({ translate: translateNew, translateOld: translateOld });
      }

      var _props2 = this.props,
          hideSingleArrow = _props2.hideSingleArrow,
          transition = _props2.transition;

      if (hideSingleArrow) {
        requestAnimationFrame(this.setSingleArrowVisibility);
        setTimeout(function () {
          return requestAnimationFrame(_this3.setSingleArrowVisibility);
        }, transition * 1000 + 10);
      }
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
      var _props3 = this.props,
          arrowClass = _props3.arrowClass,
          arrowDisabledClass = _props3.arrowDisabledClass,
          arrowLeft = _props3.arrowLeft,
          arrowRight = _props3.arrowRight,
          data = _props3.data,
          innerWrapperClass = _props3.innerWrapperClass,
          itemClass = _props3.itemClass,
          itemClassActive = _props3.itemClassActive,
          hideArrows = _props3.hideArrows,
          menuStyle = _props3.menuStyle,
          menuClass = _props3.menuClass,
          transition = _props3.transition,
          wrapperClass = _props3.wrapperClass,
          wrapperStyle = _props3.wrapperStyle,
          forwardClick = _props3.forwardClick;
      var _state3 = this.state,
          translate = _state3.translate,
          dragging = _state3.dragging,
          leftArrowVisible = _state3.leftArrowVisible,
          rightArrowVisible = _state3.rightArrowVisible;
      var selected = this.selected,
          mounted = this.mounted;


      if (!data || !data.length) return null;

      var arrowsVisible = mounted ? this.isArrowsVisible() : true;

      var menuStyles = _extends({}, _defautSettings.defaultMenuStyle, menuStyle);
      var wrapperStyles = _extends({}, _defautSettings.defaultWrapperStyle, wrapperStyle);

      return _react2.default.createElement(
        'div',
        { className: menuClass, style: menuStyles, onWheel: this.handleWheel },
        arrowLeft && _react2.default.createElement(
          _wrapper.ArrowWrapper,
          {
            className: arrowClass,
            isDisabled: !arrowsVisible || !leftArrowVisible,
            hideArrows: hideArrows,
            onClick: this.handleArrowClick,
            disabledClass: arrowDisabledClass,
            forwardClick: forwardClick },
          arrowLeft
        ),
        _react2.default.createElement(
          'div',
          {
            className: wrapperClass,
            style: wrapperStyles,
            ref: this.setWrapperRef,
            onMouseDown: this.handleDragStart,
            onTouchStart: this.handleDragStart,
            onTouchEnd: this.handleDragStop,
            onMouseMove: this.handleDrag,
            onTouchMove: this.handleDrag },
          _react2.default.createElement(_wrapper.InnerWrapper, {
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
            itemClassActive: itemClassActive,
            forwardClick: forwardClick
          })
        ),
        arrowRight && _react2.default.createElement(
          _wrapper.ArrowWrapper,
          {
            className: arrowClass,
            isDisabled: !arrowsVisible || !rightArrowVisible,
            hideArrows: hideArrows,
            onClick: this.handleArrowClickRight,
            disabledClass: arrowDisabledClass,
            forwardClick: forwardClick },
          arrowRight
        )
      );
    }
  }]);

  return ScrollMenu;
}(_react2.default.Component);

var propTypes = exports.propTypes = {
  alignCenter: _propTypes2.default.bool,
  arrowClass: _propTypes2.default.string,
  arrowDisabledClass: _propTypes2.default.string,
  arrowLeft: _propTypes2.default.object,
  arrowRight: _propTypes2.default.object,
  clickWhenDrag: _propTypes2.default.bool,
  data: _propTypes2.default.array.isRequired,
  dragging: _propTypes2.default.bool,
  innerWrapperClass: _propTypes2.default.string,
  itemClass: _propTypes2.default.string,
  itemClassActive: _propTypes2.default.string,
  hideArrows: _propTypes2.default.bool,
  hideSingleArrow: _propTypes2.default.bool,
  onSelect: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  selected: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  translate: _propTypes2.default.number,
  transition: _propTypes2.default.number,
  onUpdate: _propTypes2.default.func,
  menuClass: _propTypes2.default.string,
  menuStyle: _propTypes2.default.object,
  scrollToSelected: _propTypes2.default.bool,
  wrapperStyle: _propTypes2.default.object,
  wheel: _propTypes2.default.bool,
  wrapperClass: _propTypes2.default.string,
  forwardClick: _propTypes2.default.bool
};
ScrollMenu.defaultProps = _defautSettings.defaultProps;
ScrollMenu.propTypes = propTypes;

exports.default = ScrollMenu;

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
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
var getClientRect = function getClientRect(elem) {
  var _elem$getBoundingClie = elem.getBoundingClientRect(),
      x = _elem$getBoundingClie.x,
      left = _elem$getBoundingClie.left,
      width = _elem$getBoundingClie.width;

  return { width: width, x: !isNaN(x) ? +x : +left };
};

var formatTranslate = function formatTranslate(val) {
  return +parseFloat(val).toFixed(3);
};
var translateIsValid = function translateIsValid(val) {
  return typeof val === 'number' && !isNaN(parseFloat(val));
};
var validateTranslate = function validateTranslate(value, defaultValue) {
  return translateIsValid(value) ? formatTranslate(value) : formatTranslate(defaultValue);
};

var testPassiveEventSupport = function testPassiveEventSupport() {
  var passiveSupported = false;

  try {
    var options = {
      get passive() {
        // This function will be called when the browser
        // attempts to access the passive property.
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

exports.formatTranslate = formatTranslate;
exports.notUndefOrNull = notUndefOrNull;
exports.getClientRect = getClientRect;
exports.testPassiveEventSupport = testPassiveEventSupport;
exports.validateTranslate = validateTranslate;
exports.translateIsValid = translateIsValid;

/***/ }),

/***/ "./src/wrapper.js":
/*!************************!*\
  !*** ./src/wrapper.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerWrapper = exports.innerStyle = exports.ArrowWrapper = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _defautSettings = __webpack_require__(/*! ./defautSettings */ "./src/defautSettings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrowWrapper = exports.ArrowWrapper = function ArrowWrapper(_ref) {
  var clsName = _ref.className,
      _onClick = _ref.onClick,
      children = _ref.children,
      isDisabled = _ref.isDisabled,
      hideArrows = _ref.hideArrows,
      disabledClass = _ref.disabledClass,
      forwardClick = _ref.forwardClick;

  var disabledClassName = isDisabled ? disabledClass || clsName + '--disabled' : '';
  var className = clsName + ' ' + (hideArrows ? disabledClassName : '');
  var childProps = _extends({}, children.props, {
    onClick: function onClick() {
      return forwardClick ? _onClick() : null;
    }
  });

  return _react2.default.createElement(
    'div',
    { className: className, onClick: forwardClick ? null : _onClick },
    _react2.default.cloneElement(children, childProps)
  );
};
ArrowWrapper.propTypes = {
  children: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  disabledClass: _propTypes2.default.string,
  forwardClick: _propTypes2.default.bool,
  hideArrows: _propTypes2.default.bool,
  isDisabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func.isRequired
};

var innerStyle = exports.innerStyle = function innerStyle(_ref2) {
  var translate = _ref2.translate,
      dragging = _ref2.dragging,
      mounted = _ref2.mounted,
      transition = _ref2.transition;

  return {
    width: '9900px',
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
          innerWrapperClass = _props.innerWrapperClass,
          itemClass = _props.itemClass,
          _onClick2 = _props.onClick,
          itemClassActive = _props.itemClassActive,
          forwardClick = _props.forwardClick;

      var isActive = function isActive(itemId, selected) {
        return String(itemId) === String(selected);
      };
      var items = data.map(function (el) {
        var props = {
          selected: isActive(el.key, selected),
          onClick: function onClick() {
            return forwardClick ? _onClick2(el.key) : null;
          }
        };
        return _react2.default.cloneElement(el, props);
      });

      return _react2.default.createElement(
        'div',
        {
          className: innerWrapperClass,
          style: innerStyle({ translate: translate, dragging: dragging, mounted: mounted, transition: transition }),
          ref: function ref(inst) {
            return _this2.setRef('menuInner', inst);
          } },
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
                return forwardClick ? null : _onClick2(Item.key);
              } },
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
  itemClassActive: _propTypes2.default.string,
  forwardClick: _propTypes2.default.bool
};

InnerWrapper.defaultProps = {
  data: [],
  translate: _defautSettings.defaultSetting.translate,
  dragging: true,
  mounted: false,
  transition: _defautSettings.defaultSetting.transition,
  selected: _defautSettings.defaultSetting.selected
};

/***/ }),

/***/ "react":
/*!*****************************************************!*\
  !*** external {"root":"React","commonjs2":"react"} ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ })

/******/ });
//# sourceMappingURL=index.mjs.js.map