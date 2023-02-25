module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Ze/":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "/2BR":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "/twb":
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "1nAM":
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2yjL":
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3vLF":
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RXBc");


/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "CmuN":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "DIZZ":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "EOAO":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "FGX+":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "Ff4V":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "GbIV":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "I/1N":
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "LVL8":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "Mg6N":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "N48c":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "NHqu":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "Nj/y":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Q6z8":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "Qd2A":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "QedB":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "RCtr":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "RXBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ IndexPage; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__("zqBN");

// CONCATENATED MODULE: ./src/contexts/create-context.js
var __jsx = external_react_default.a.createElement;

function useCreateContext(defaultValue, reducer) {
  const defaultDispatch = () => defaultValue;

  const stateCtx = /*#__PURE__*/Object(external_react_["createContext"])(defaultValue);
  const dispatchCtx = /*#__PURE__*/Object(external_react_["createContext"])(defaultDispatch);

  function useStateCtx(property) {
    const state = Object(external_react_["useContext"])(stateCtx);
    return state[property]; // only one depth selector for comparison
  }

  function useDispatchCtx() {
    return Object(external_react_["useContext"])(dispatchCtx);
  }

  function Provider({
    children
  }) {
    const [state, dispatch] = external_react_default.a.useReducer(reducer, defaultValue);
    return __jsx(dispatchCtx.Provider, {
      value: dispatch
    }, __jsx(stateCtx.Provider, {
      value: state
    }, children));
  }

  return [useStateCtx, useDispatchCtx, Provider];
}
// CONCATENATED MODULE: ./src/contexts/app/app.reducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  isSticky: false,
  isSidebarSticky: true
};
function app_reducer_reducer(state, {
  type
}) {
  switch (type) {
    case 'SET_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: true
      });

    case 'REMOVE_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: false
      });

    case 'SET_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: true
      });

    case 'REMOVE_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: false
      });

    default:
      {
        throw new Error(`Unsupported action type: ${type}`);
      }
  }
}
// CONCATENATED MODULE: ./src/contexts/app/app.provider.js


const [app_provider_state, useDispatch, provider] = useCreateContext(initialState, app_reducer_reducer);
const useStickyState = app_provider_state;
const useStickyDispatch = useDispatch;
const StickyProvider = provider;
// CONCATENATED MODULE: ./src/theme/index.js
/* harmony default export */ var theme = ({
  // example colors with dark mode
  breakpoints: ['376px', '576px', '768px', '992px', '1200px', '1600px'],
  colors: {
    text: '#343D48',
    // body color and primary color
    text_secondary: '#02073E',
    // secondary body color
    heading: '#02073E',
    // primary heading color
    heading_secondary: '#343D48',
    // heading color
    background: '#FFFFFF',
    // body background color
    background_secondary: '#F9FBFD',
    // secondary background color
    border_color: '#E9EDF5',
    // border color
    primary: '#8D448B',
    // primary button and link color
    secondary: '#793677',
    // secondary color - can be used for hover states
    black: '#0F2137',
    // black color
    gray: '#F8FAFC',
    muted: '#7B8188',
    // muted color
    accent: '#609' // a contrast color for emphasizing UI

  },
  fonts: {
    body: 'DM Sans',
    // body:
    //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'DM Sans',
    special: 'Playfair Display',
    // heading: 'Bree Serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [15, 15, 16, 18, 20, 21, 30, 36, 48, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: '30px',
    heading: '50px'
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px'
  },
  // space: [0, 4, 8, 16, 32, 64],
  sizes: {
    container: ['1230px']
  },
  // variants can use custom, user-defined names
  layout: {
    container: {
      px: ['15px', null, null, '30px']
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center' // justifyContent: 'space-between',

    },
    main: {},
    footer: {
      backgroundColor: 'background_secondary'
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
      letterSpacing: 'heading',
      color: 'heading'
    },
    heroPrimary: {
      fontSize: [5, 55],
      fontWeight: 'normal',
      lineHeight: ['40px', '80px'],
      letterSpacing: '-1px',
      textAlign: ['center', 'left']
    },
    title: {
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: '30px',
      color: '#0F2137'
    },
    heroSecondary: {
      color: 'text_secondary',
      lineHeight: ['30px', '42px'],
      letterSpacing: '0.1em',
      textAlign: ['center', 'left']
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137'
    },
    muted: {
      lineHeight: '26px',
      color: 'muted'
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px'
    }
  },
  links: {
    bold: {
      fontWeight: 'bold'
    },
    nav: {
      display: ['none', null, 'inline-block'],
      p: 2
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none'
    }
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none']
    },
    // default variant for MenuButton
    // you can reference other values defined in the theme
    primary: {
      fontWeight: 'bold',
      color: 'white',
      bg: 'primary',
      cursor: 'pointer',
      transition: '500ms',
      fontSize: 2,
      '&:hover': {
        bg: 'secondary'
      }
    }
  },
  blockTitle: {
    marginBottom: [45, null, null, null, 70],
    p: {
      color: 'primary',
      fontSize: [0, null, null, null, 3],
      lineHeight: 1,
      marginBottom: [10, null, null, null, 10]
    },
    h2: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: [5, null, null, null, '32px', null, 7],
      lineHeight: [1.24, null, null, null, 1.83],
      letterSpacing: ['-1px', null, null, null, '-1.5px']
    }
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      WebkitFontSmoothing: 'antialiased',
      '@media(max-width: 479px)': {
        WebkitTextSizeAdjust: '100%'
      },
      a: {
        textDecoration: 'none',
        color: 'inherit'
      },
      button: {
        cursor: 'pointer'
      }
    },
    a: {
      cursor: 'pointer',
      textDecoration: 'none'
    },
    button: {
      cursor: 'pointer'
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7'
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none'
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important'
    }
  }
});
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./src/components/seo.js
var seo_jsx = external_react_default.a.createElement;


function SEO({
  description = 'Ideas Digitalized',
  author = 'Digita Solutions',
  meta,
  title = 'Digita Solutions'
}) {
  const metaData = [{
    name: `description`,
    content: description
  }, {
    property: `og:title`,
    content: title
  }, {
    property: `og:description`,
    content: description
  }, {
    property: `og:type`,
    content: `website`
  }, {
    name: `twitter:card`,
    content: `summary`
  }, {
    name: `twitter:creator`,
    content: author
  }, {
    name: `twitter:title`,
    content: title
  }, {
    name: `twitter:description`,
    content: description
  }].concat(meta);
  return seo_jsx(head_default.a, null, seo_jsx("title", null, title), metaData.map(({
    name,
    content
  }, i) => seo_jsx("meta", {
    key: i,
    name: name,
    content: content
  })));
}
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};
// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__("3vLF");

// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__("2yjL");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/components/link.js

var link_jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


function NavLink(_ref) {
  let {
    path,
    label,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["path", "label", "children"]);

  return Object(external_theme_ui_["jsx"])(link_default.a, {
    href: path
  }, Object(external_theme_ui_["jsx"])(external_theme_ui_["NavLink"], rest, children ? children : label));
}
function Link(_ref2) {
  let {
    path,
    label,
    children
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["path", "label", "children"]);

  return Object(external_theme_ui_["jsx"])(link_default.a, {
    href: path
  }, Object(external_theme_ui_["jsx"])(external_theme_ui_["Link"], rest, children ? children : label));
}
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__("I/1N");

// EXTERNAL MODULE: ./src/assets/logo.png
var logo = __webpack_require__("zwU1");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// CONCATENATED MODULE: ./src/components/logo.js

var logo_jsx = external_react_default.a.createElement;

/** @jsx jsx */



function Logo() {
  return Object(external_theme_ui_["jsx"])(Link, {
    path: "/",
    sx: {
      variant: 'links.logo'
    }
  }, Object(external_theme_ui_["jsx"])(external_theme_ui_["Image"], {
    src: logo_default.a,
    sx: {
      display: 'flex',
      height: '35px'
    },
    alt: "digita solutions logo"
  }));
}
// CONCATENATED MODULE: ./src/contexts/drawer/drawer.context.js

const DrawerContext = /*#__PURE__*/Object(external_react_["createContext"])({});
// CONCATENATED MODULE: ./src/contexts/drawer/drawer.provider.js
var drawer_provider_jsx = external_react_default.a.createElement;

function drawer_provider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function drawer_provider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { drawer_provider_ownKeys(Object(source), true).forEach(function (key) { drawer_provider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { drawer_provider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function drawer_provider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const drawer_provider_initialState = {
  isOpen: false
};

function drawer_provider_reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return drawer_provider_objectSpread(drawer_provider_objectSpread({}, state), {}, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

const DrawerProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(external_react_["useReducer"])(drawer_provider_reducer, drawer_provider_initialState);
  return drawer_provider_jsx(DrawerContext.Provider, {
    value: {
      state,
      dispatch
    }
  }, children);
};
// EXTERNAL MODULE: external "react-custom-scrollbars"
var external_react_custom_scrollbars_ = __webpack_require__("qC9r");

// EXTERNAL MODULE: external "rc-drawer"
var external_rc_drawer_ = __webpack_require__("ik7d");
var external_rc_drawer_default = /*#__PURE__*/__webpack_require__.n(external_rc_drawer_);

// CONCATENATED MODULE: ./src/components/drawer.js
var drawer_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function drawer_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = drawer_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function drawer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Drawer = _ref => {
  let {
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open,
    width,
    placement,
    drawerStyle,
    closeBtnStyle
  } = _ref,
      props = drawer_objectWithoutProperties(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open", "width", "placement", "drawerStyle", "closeBtnStyle"]);

  return drawer_jsx(external_react_["Fragment"], null, drawer_jsx(external_rc_drawer_default.a, _extends({
    open: open,
    onClose: toggleHandler,
    className: `drawer ${className ? className : ''}`.trim(),
    width: width,
    placement: placement,
    handler: false,
    level: null,
    duration: "0.4s"
  }, props), closeButton && drawer_jsx(external_theme_ui_["Box"], {
    as: "div",
    onClick: toggleHandler,
    sx: closeBtnStyle
  }, closeButton), drawer_jsx(external_theme_ui_["Box"], {
    sx: drawerStyle
  }, children)), drawer_jsx(external_theme_ui_["Box"], {
    className: "drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler
  }, drawerHandler));
};

Drawer.defaultProps = {
  width: '320px',
  placement: 'left'
};
/* harmony default export */ var drawer = (Drawer);
// CONCATENATED MODULE: ./src/components/customIcon.js
var customIcon_jsx = external_react_default.a.createElement;

const Facebook = ({
  color = 'currentColor',
  fontColor = '#191919',
  width = '15px',
  height = '15px'
}) => {
  return customIcon_jsx("svg", {
    width: width,
    height: height,
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, customIcon_jsx("path", {
    d: "M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z",
    fill: color
  }), customIcon_jsx("path", {
    d: "M9.38516 7.79367H8.04688V12.6965H6.01927V7.79367H5.05493V6.07061H6.01927V4.9556C6.01927 4.15824 6.39803 2.90967 8.06493 2.90967L9.56685 2.91595V4.58847H8.47711C8.29836 4.58847 8.04702 4.67778 8.04702 5.05814V6.07221H9.56231L9.38516 7.79367Z",
    fill: fontColor
  }));
};
const Twitter = ({
  color = 'currentColor',
  width = '15px',
  height = '13px'
}) => {
  return customIcon_jsx("svg", {
    width: width,
    height: height,
    viewBox: "0 0 15 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, customIcon_jsx("path", {
    d: "M15 1.44305C14.4481 1.68781 13.855 1.85323 13.2325 1.92763C13.8679 1.54675 14.3558 0.943652 14.5856 0.225063C13.991 0.577691 13.3324 0.833809 12.6314 0.971853C12.07 0.373752 11.2702 0 10.3851 0C8.6855 0 7.30758 1.37787 7.30758 3.07736C7.30758 3.31856 7.33485 3.55344 7.3873 3.77867C4.82964 3.65034 2.56205 2.42516 1.04422 0.563316C0.779326 1.01783 0.627565 1.54647 0.627565 2.11045C0.627565 3.1781 1.17091 4.12005 1.99665 4.6719C1.49215 4.65593 1.01767 4.5175 0.60271 4.28701C0.602491 4.29985 0.602491 4.31274 0.602491 4.32569C0.602491 5.81675 1.66328 7.06057 3.07111 7.34325C2.81285 7.41359 2.54099 7.45117 2.26029 7.45117C2.062 7.45117 1.8692 7.43191 1.68133 7.39597C2.07292 8.61862 3.20943 9.50834 4.55607 9.53319C3.50285 10.3586 2.1759 10.8505 0.734116 10.8505C0.485735 10.8505 0.240755 10.836 0 10.8076C1.3619 11.6807 2.97953 12.1902 4.71744 12.1902C10.3779 12.1902 13.4733 7.50088 13.4733 3.43422C13.4733 3.30078 13.4703 3.16806 13.4644 3.0361C14.0656 2.60222 14.5874 2.06019 15 1.44305Z",
    fill: color
  }));
};
const Github = ({
  color = 'currentColor',
  width = '15px',
  height = '15px'
}) => {
  return customIcon_jsx("svg", {
    width: width,
    height: height,
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, customIcon_jsx("path", {
    d: "M7.50006 0C3.35843 0 0 3.35781 0 7.50006C0 10.8138 2.149 13.6251 5.129 14.6168C5.50383 14.6863 5.64144 14.4541 5.64144 14.2561C5.64144 14.0772 5.63449 13.4864 5.63126 12.8597C3.54473 13.3134 3.10445 11.9748 3.10445 11.9748C2.76328 11.1079 2.2717 10.8774 2.2717 10.8774C1.59122 10.4119 2.323 10.4214 2.323 10.4214C3.07613 10.4744 3.4727 11.1943 3.4727 11.1943C4.14163 12.3409 5.22724 12.0094 5.65523 11.8178C5.72254 11.3331 5.91691 11.0022 6.1314 10.8149C4.46554 10.6253 2.71434 9.98216 2.71434 7.10834C2.71434 6.28951 3.00733 5.62045 3.4871 5.09522C3.40923 4.90631 3.15251 4.14349 3.55976 3.11041C3.55976 3.11041 4.18957 2.90884 5.62281 3.8792C6.22107 3.71302 6.86268 3.62968 7.50006 3.62683C8.13745 3.62968 8.77955 3.71302 9.37893 3.8792C10.8104 2.90884 11.4394 3.11041 11.4394 3.11041C11.8476 4.14349 11.5908 4.90631 11.5129 5.09522C11.9938 5.62045 12.2848 6.28951 12.2848 7.10834C12.2848 9.98899 10.5302 10.6233 8.86015 10.8089C9.12917 11.0417 9.36887 11.4981 9.36887 12.1978C9.36887 13.2014 9.36017 14.009 9.36017 14.2561C9.36017 14.4556 9.49518 14.6895 9.87535 14.6159C12.8537 13.623 15 10.8127 15 7.50006C15 3.35781 11.6421 0 7.50006 0ZM2.80902 10.684C2.7925 10.7213 2.73388 10.7324 2.68047 10.7068C2.62607 10.6824 2.59552 10.6316 2.61316 10.5942C2.6293 10.5558 2.68805 10.5451 2.74232 10.5709C2.79685 10.5953 2.8279 10.6466 2.80902 10.684ZM3.17794 11.0132C3.14217 11.0463 3.07224 11.0309 3.0248 10.9785C2.97574 10.9262 2.96655 10.8563 3.00282 10.8227C3.0397 10.7895 3.10752 10.805 3.1567 10.8573C3.20576 10.9102 3.21532 10.9796 3.17794 11.0132ZM3.43103 11.4344C3.38508 11.4663 3.30994 11.4363 3.26349 11.3696C3.21753 11.303 3.21753 11.223 3.26448 11.1909C3.31105 11.1589 3.38508 11.1877 3.43215 11.2539C3.47798 11.3217 3.47798 11.4017 3.43103 11.4344ZM3.85906 11.9221C3.81795 11.9675 3.73039 11.9553 3.66631 11.8934C3.60073 11.833 3.58248 11.7471 3.62371 11.7018C3.66532 11.6564 3.75337 11.6691 3.81795 11.7305C3.88303 11.7909 3.90291 11.8773 3.85906 11.9221ZM4.41226 12.0868C4.39412 12.1456 4.30979 12.1723 4.22484 12.1473C4.14002 12.1216 4.0845 12.0528 4.10164 11.9934C4.11927 11.9343 4.20398 11.9065 4.28955 11.9332C4.37425 11.9588 4.42989 12.0271 4.41226 12.0868ZM5.04181 12.1567C5.04392 12.2185 4.97189 12.2698 4.88272 12.2709C4.79304 12.2729 4.72051 12.2229 4.71952 12.162C4.71952 12.0995 4.78994 12.0487 4.87961 12.0472C4.96879 12.0455 5.04181 12.0952 5.04181 12.1567ZM5.66028 12.1329C5.67096 12.1933 5.60899 12.2553 5.52044 12.2718C5.43337 12.2877 5.35277 12.2504 5.34171 12.1906C5.33091 12.1287 5.394 12.0668 5.48094 12.0507C5.56962 12.0353 5.64898 12.0716 5.66028 12.1329Z",
    fill: color
  }));
};
const Dribbble = ({
  color = 'currentColor',
  fontColor = '#191919',
  width = '15px',
  height = '15px'
}) => {
  return customIcon_jsx("svg", {
    width: width,
    height: height,
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, customIcon_jsx("path", {
    d: "M7.50024 0.498047C11.3674 0.498047 14.4963 3.62695 14.4963 7.48828C14.4963 11.3496 11.3674 14.4844 7.50024 14.4844C3.63306 14.4844 0.50415 11.3555 0.50415 7.49414C0.50415 3.63281 3.63306 0.498047 7.50024 0.498047Z",
    fill: color
  }), customIcon_jsx("path", {
    d: "M7.5 14.9824C3.36328 14.9824 0 11.625 0 7.49414C0 3.35742 3.36328 0 7.5 0C11.6367 0 15 3.35742 15 7.48828C15 11.6191 11.6367 14.9824 7.5 14.9824ZM13.8223 8.51367C13.6055 8.44336 11.8418 7.92188 9.83203 8.23828C10.6699 10.5352 11.0098 12.4102 11.0742 12.7969C12.5156 11.8301 13.541 10.2949 13.8223 8.51367ZM10.002 13.3887C9.9082 12.8262 9.5332 10.8691 8.63672 8.53711C8.625 8.54297 8.60742 8.54883 8.5957 8.54883C4.98047 9.80859 3.68555 12.3105 3.56836 12.5449C4.65234 13.3887 6.01758 13.8926 7.5 13.8926C8.38477 13.8984 9.23438 13.7168 10.002 13.3887ZM2.74219 11.7773C2.88867 11.5312 4.64648 8.625 7.95117 7.55273C8.0332 7.52344 8.12109 7.5 8.20312 7.47656C8.04492 7.11328 7.86914 6.75 7.68164 6.39258C4.48242 7.34766 1.37695 7.30664 1.0957 7.30078C1.0957 7.36523 1.08984 7.42969 1.08984 7.49414C1.0957 9.14062 1.7168 10.6406 2.74219 11.7773ZM1.23047 6.1875C1.51758 6.19336 4.1543 6.20508 7.1543 5.4082C6.09375 3.52148 4.94531 1.93945 4.78125 1.71094C2.98242 2.55469 1.64648 4.20703 1.23047 6.1875ZM6 1.27734C6.17578 1.51172 7.3418 3.09375 8.39062 5.02148C10.6699 4.16602 11.6309 2.87695 11.748 2.71289C10.6172 1.71094 9.12891 1.10156 7.5 1.10156C6.98438 1.10156 6.48047 1.16602 6 1.27734ZM12.457 3.45117C12.3223 3.63281 11.25 5.00977 8.88281 5.97656C9.0293 6.28125 9.17578 6.5918 9.31055 6.90234C9.35742 7.01367 9.4043 7.125 9.45117 7.23047C11.584 6.96094 13.6992 7.39453 13.9102 7.43555C13.8926 5.92969 13.3535 4.54102 12.457 3.45117Z",
    fill: fontColor
  }));
};
// CONCATENATED MODULE: ./src/components/header/header.data.js
/* harmony default export */ var header_data = ([{
  path: 'banner',
  label: 'Home'
}, {
  path: 'services',
  label: 'Services'
}, {
  path: 'testimonials',
  label: 'Testimonials'
}]);
// EXTERNAL MODULE: ./src/assets/logo.svg
var assets_logo = __webpack_require__("mxmt");
var assets_logo_default = /*#__PURE__*/__webpack_require__.n(assets_logo);

// CONCATENATED MODULE: ./src/components/header/mobileDrawer.js
var mobileDrawer_jsx = external_react_default.a.createElement;












const social = [{
  path: '/',
  icon: mobileDrawer_jsx(Facebook, null)
}, {
  path: '/',
  icon: mobileDrawer_jsx(Twitter, null)
}, {
  path: '/',
  icon: mobileDrawer_jsx(Github, null)
}, {
  path: '/',
  icon: mobileDrawer_jsx(Dribbble, null)
}];

const MobileDrawer = () => {
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(DrawerContext); // Toggle drawer

  const toggleHandler = external_react_default.a.useCallback(() => {
    dispatch({
      type: 'TOGGLE'
    });
  }, [dispatch]);
  return mobileDrawer_jsx(drawer, {
    width: "320px",
    drawerHandler: mobileDrawer_jsx(external_theme_ui_["Box"], {
      sx: styles.handler
    }, mobileDrawer_jsx(io_["IoMdMenu"], {
      size: "22px"
    })),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    closeButton: mobileDrawer_jsx(io_["IoMdClose"], {
      size: "24px",
      color: "#02073E"
    }),
    drawerStyle: styles.drawer,
    closeBtnStyle: styles.close
  }, mobileDrawer_jsx(external_react_custom_scrollbars_["Scrollbars"], {
    autoHide: true
  }, mobileDrawer_jsx(external_theme_ui_["Box"], {
    sx: styles.content
  }, mobileDrawer_jsx(Logo, {
    src: assets_logo_default.a
  }), mobileDrawer_jsx(external_theme_ui_["Box"], {
    sx: styles.menu
  }, header_data.map(({
    path,
    label
  }, i) => mobileDrawer_jsx(external_react_scroll_["Link"], {
    activeClass: "active",
    to: path,
    spy: true,
    smooth: true,
    offset: 10,
    duration: 500,
    key: i
  }, label))), mobileDrawer_jsx(external_theme_ui_["Box"], {
    sx: styles.menuFooter
  }, mobileDrawer_jsx(external_theme_ui_["Button"], {
    variant: "primary",
    sx: styles.button
  }, mobileDrawer_jsx(external_react_scroll_["Link"], {
    smooth: true,
    duration: 800,
    to: "contact",
    ml: 2,
    label: "Contact Now",
    sx: styles.headerBtn,
    variant: "buttons.primary"
  }, "Contact Now"))))));
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    '@media screen and (min-width: 960px)': {
      display: 'none'
    }
  },
  drawer: {
    width: '100%',
    height: '100%',
    background: '#fff'
  },
  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '30px',
    right: '30px',
    zIndex: '1'
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '30px',
    pb: '40px',
    px: '30px'
  },
  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',
    a: {
      fontSize: '16px',
      fontWeight: '400',
      color: 'black',
      py: '5px',
      cursor: 'pointer'
    }
  },
  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto'
  },
  button: {
    fontSize: '15px',
    fw: '700',
    height: '48px',
    borderRadius: '3px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
    backgroundColor: 'primary',
    color: '#fff'
  }
};
/* harmony default export */ var mobileDrawer = (MobileDrawer);
// CONCATENATED MODULE: ./src/components/header/header.js

var header_jsx = external_react_default.a.createElement;

/** @jsx jsx */









function Header({
  className
}) {
  return Object(external_theme_ui_["jsx"])(DrawerProvider, null, Object(external_theme_ui_["jsx"])("header", {
    sx: header_styles.header,
    className: className
  }, Object(external_theme_ui_["jsx"])(external_theme_ui_["Container"], {
    sx: header_styles.container
  }, Object(external_theme_ui_["jsx"])(Logo, null), Object(external_theme_ui_["jsx"])(external_theme_ui_["Flex"], {
    as: "nav",
    sx: header_styles.nav
  }, header_data.map(({
    path,
    label
  }, i) => Object(external_theme_ui_["jsx"])(external_react_scroll_["Link"], {
    activeClass: "active",
    sx: header_styles.nav.navLink,
    to: path,
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    key: i
  }, label))), Object(external_theme_ui_["jsx"])(external_react_scroll_["Link"], {
    smooth: true,
    duration: 800,
    to: "contact",
    ml: 2,
    label: "Contact Now",
    sx: header_styles.headerBtn,
    variant: "buttons.primary"
  }, "Contact Now"), Object(external_theme_ui_["jsx"])(mobileDrawer, null))));
}
const header_styles = {
  headerBtn: {
    cursor: 'pointer',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '-0.16px',
    borderRadius: '5px',
    border: '2px solid',
    borderColor: 'primary',
    color: 'primary',
    padding: '8px 24px',
    display: ['none', null, null, null, 'inline-block'],
    ml: ['0', null, null, 'auto', '0'],
    mr: ['0', null, null, '20px', '0'],
    '&:hover': {
      backgroundColor: 'primary',
      color: '#FFF'
    }
  },
  header: {
    color: 'text_white',
    fontWeight: 'normal',
    py: '25px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    '&.sticky': {
      backgroundColor: 'background',
      color: 'text',
      py: '15px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)'
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: [null, null, null, null, null, null, '1390px'],
    '@media screen and (max-width: 960px)': {
      justifyContent: 'space-between'
    }
  },
  nav: {
    mx: 'auto',
    '@media screen and (max-width: 960px)': {
      display: 'none'
    },
    navLink: {
      fontSize: '16px',
      color: '#02073E',
      fontWeight: '400',
      cursor: 'pointer',
      lineHeight: '1.2',
      mr: '48px',
      transition: '500ms',
      ':last-child': {
        mr: '0'
      },
      '&:hover, &.active': {
        color: 'primary'
      }
    }
  }
};
// CONCATENATED MODULE: ./src/components/footer/footer.js

var footer_jsx = external_react_default.a.createElement;

/** @jsx jsx */



function Footer() {
  return Object(external_theme_ui_["jsx"])("footer", {
    sx: {
      variant: 'layout.footer',
      backgroundColor: '#fff'
    }
  }, Object(external_theme_ui_["jsx"])(external_theme_ui_["Container"], {
    sx: {
      variant: 'layout.toolbar',
      alignItems: "center",
      justifyContent: ['center', null, null, 'space-between'],
      flexDirection: ['column', null, null, null, 'column'],
      paddingTop: [30, 40],
      paddingBottom: [30, 65]
    }
  }, Object(external_theme_ui_["jsx"])(external_theme_ui_["Box"], {
    sx: footer_styles.left
  }, Object(external_theme_ui_["jsx"])(Logo, null), Object(external_theme_ui_["jsx"])(external_theme_ui_["Text"], {
    as: "p"
  }, "\xA9 ", new Date().getFullYear(), " All right reserved"))));
}
const footer_styles = {
  left: {
    display: 'flex',
    flexDirection: ['column', null, 'column'],
    alignItems: 'center',
    p: {
      fontSize: [0, 1],
      color: 'black',
      opacity: 0.6,
      mt: ['10px', null, '10px']
    }
  },
  right: {
    display: ['none', null, null, null, 'flex'],
    fontSize: 2,
    alignItems: 'center',
    color: 'black',
    a: {
      transition: '500ms',
      '&:hover': {
        color: 'primary'
      }
    },
    'a+a': {
      marginLeft: '30px'
    }
  }
};
// EXTERNAL MODULE: external "react-waypoint"
var external_react_waypoint_ = __webpack_require__("/twb");

// CONCATENATED MODULE: ./src/components/layout.js
var layout_jsx = external_react_default.a.createElement;

/** @jsx jsx */








function Layout({
  children
}) {
  const isSticky = useStickyState('isSticky');
  const dispatch = useStickyDispatch();
  const setSticky = Object(external_react_["useCallback"])(() => dispatch({
    type: 'SET_STICKY'
  }), [dispatch]);
  const removeSticky = Object(external_react_["useCallback"])(() => dispatch({
    type: 'REMOVE_STICKY'
  }), [dispatch]);

  const onWaypointPositionChange = ({
    currentPosition
  }) => {
    if (currentPosition === 'above') {
      setSticky();
    }

    if (currentPosition === 'below') {
      removeSticky();
    }
  };

  return Object(external_theme_ui_["jsx"])(external_react_default.a.Fragment, null, Object(external_theme_ui_["jsx"])(external_react_stickynode_default.a, {
    enabled: isSticky,
    innerZ: 1000
  }, Object(external_theme_ui_["jsx"])(Header, {
    className: `${isSticky ? 'sticky' : 'unSticky'}`
  })), Object(external_theme_ui_["jsx"])(external_react_waypoint_["Waypoint"], {
    onEnter: removeSticky,
    onPositionChange: onWaypointPositionChange
  }), Object(external_theme_ui_["jsx"])("main", {
    sx: {
      variant: 'layout.main'
    }
  }, children), Object(external_theme_ui_["jsx"])(Footer, null));
}
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// CONCATENATED MODULE: ./src/components/image.js
var image_jsx = external_react_default.a.createElement;

function image_extends() { image_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return image_extends.apply(this, arguments); }

function image_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = image_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function image_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Image(_ref) {
  let {
    src
  } = _ref,
      rest = image_objectWithoutProperties(_ref, ["src"]);

  return image_jsx(external_theme_ui_["Image"], image_extends({
    src: src
  }, rest));
}
// EXTERNAL MODULE: ./src/assets/partner-1-1.png
var partner_1_1 = __webpack_require__("NHqu");
var partner_1_1_default = /*#__PURE__*/__webpack_require__.n(partner_1_1);

// EXTERNAL MODULE: ./src/assets/partner-1-2.png
var partner_1_2 = __webpack_require__("ZSuG");
var partner_1_2_default = /*#__PURE__*/__webpack_require__.n(partner_1_2);

// EXTERNAL MODULE: ./src/assets/partner-1-3.png
var partner_1_3 = __webpack_require__("CmuN");
var partner_1_3_default = /*#__PURE__*/__webpack_require__.n(partner_1_3);

// EXTERNAL MODULE: ./src/assets/skype.png
var skype = __webpack_require__("GbIV");

// EXTERNAL MODULE: ./src/assets/banner-image-1-1.png
var banner_image_1_1 = __webpack_require__("nRzR");
var banner_image_1_1_default = /*#__PURE__*/__webpack_require__.n(banner_image_1_1);

// CONCATENATED MODULE: ./src/sections/banner.js
var banner_jsx = external_react_default.a.createElement;











const Banner = () => {
  return banner_jsx(external_framer_motion_["motion"].div, {
    whileInView: {
      y: [100, 50, 0],
      opacity: [0, 0, 1]
    },
    transition: {
      duration: 1
    }
  }, banner_jsx(external_theme_ui_["Box"], {
    sx: banner_styles.banner,
    id: "banner"
  }, banner_jsx(external_theme_ui_["Container"], {
    sx: banner_styles.container
  }, banner_jsx(external_theme_ui_["Grid"], {
    sx: banner_styles.grid
  }, banner_jsx(external_theme_ui_["Box"], {
    sx: banner_styles.content
  }, banner_jsx(external_theme_ui_["Heading"], {
    as: "h3"
  }, "Great Companies are built by Amazing Developers"), banner_jsx(external_theme_ui_["Text"], {
    as: "p"
  }, "Digita Solutions is a one-stop source for custom software development. We provide startups and fast-growing tech companies with dedicated engineering teams, delivering scalable products that users love."), banner_jsx(external_theme_ui_["Box"], {
    as: "form",
    sx: banner_styles.form
  }, banner_jsx(external_theme_ui_["Button"], {
    variant: "primary",
    sx: banner_styles.button
  }, banner_jsx(external_react_scroll_["Link"], {
    smooth: true,
    duration: 800,
    to: "contact",
    ml: 2,
    label: "Contact Now",
    sx: banner_styles.headerBtn,
    variant: "buttons.primary"
  }, "Contact Now"))), banner_jsx(external_theme_ui_["Box"], {
    sx: banner_styles.partner
  }, banner_jsx(external_theme_ui_["Box"], {
    as: "div"
  }, banner_jsx("img", {
    src: partner_1_1_default.a,
    alt: ""
  })), banner_jsx(external_theme_ui_["Box"], {
    as: "div"
  }, banner_jsx("img", {
    src: partner_1_2_default.a,
    alt: ""
  })), banner_jsx(external_theme_ui_["Box"], {
    as: "div"
  }, banner_jsx("img", {
    src: partner_1_3_default.a,
    alt: ""
  })))), banner_jsx(external_theme_ui_["Box"], {
    sx: banner_styles.image
  }, banner_jsx(Image, {
    src: banner_image_1_1_default.a,
    alt: ""
  }))))));
};

/* harmony default export */ var banner = (Banner);
const banner_styles = {
  banner: {
    pt: ['110px', null, null, null, '150px', '200px'],
    pb: ['50px', null, null, null, '60px', null, '0'],
    backgroundColor: '#F6F8FB',
    overflow: 'hidden'
  },
  container: {
    width: [null, null, null, null, null, null, '1390px']
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
    gridGap: '0'
  },
  content: {
    h3: {
      color: 'black',
      fontWeight: 'bold',
      lineHeight: [1.39],
      letterSpacing: ['-.7px', '-1.5px'],
      mb: ['15px', null, null, null, '20px'],
      width: ['100%'],
      maxWidth: ['100%', null, null, '90%', '100%', '540px'],
      fontSize: [6, null, null, '36px', null, '55px', 9]
    },
    p: {
      fontSize: [1, null, null, 2, null, 3],
      lineHeight: ['26px', null, null, null, 2.33],
      color: 'text_secondary',
      mb: ['20px', null, null, null, null, '30px'],
      width: ['100%'],
      maxWidth: ['100%', null, null, null, null, '410px'],
      br: {
        display: ['none', null, null, null, 'inherit']
      }
    }
  },
  form: {
    mb: ['30px', null, null, null, null, '60px'],
    display: ['flex'],
    input: {
      borderRadius: ['4px'],
      backgroundColor: '#fff',
      width: ['240px', null, null, null, '315px', null, '375px'],
      height: ['45px', null, null, '55px', null, null, '65px'],
      padding: ['0 15px', null, null, '0 25px'],
      fontSize: [1, null, null, 2],
      border: 'none',
      outline: 'none',
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)'
    },
    button: {
      fontSize: [2, null, null, null, 4, '20px'],
      borderRadius: ['4px'],
      padding: ['8px 20px'],
      ml: ['10px'],
      width: ['auto', null, null, null, '180px']
    }
  },
  image: {
    img: {
      display: 'flex',
      mixBlendMode: 'darken',
      position: 'relative',
      top: ['0', null, null, null, null, '-40px'],
      maxWidth: ['100%', null, null, null, null, null, 'none']
    }
  },
  partner: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    mb: ['40px'],
    '> div + div': {
      ml: ['10px', null, null, '20px', null, '30px']
    },
    img: {
      display: 'flex'
    },
    span: {
      fontSize: [1, null, null, null, 2],
      color: '#566272',
      lineHeight: [1],
      opacity: 0.6,
      display: 'block',
      mb: ['20px', null, null, null, '0px'],
      mr: [null, null, null, null, '20px'],
      flex: ['0 0 100%', null, null, null, '0 0 auto']
    }
  }
};
// CONCATENATED MODULE: ./src/components/block-title.js
var block_title_jsx = external_react_default.a.createElement;



const BlockTitle = props => {
  return block_title_jsx(external_theme_ui_["Box"], {
    variant: "blockTitle",
    className: "blockTitle",
    sx: props.styles
  }, block_title_jsx(external_theme_ui_["Text"], {
    as: "p"
  }, props.slogan), block_title_jsx(external_theme_ui_["Heading"], {
    as: "h2"
  }, props.title));
};

/* harmony default export */ var block_title = (BlockTitle);
// EXTERNAL MODULE: ./src/assets/solution.jpg
var solution = __webpack_require__("Qd2A");
var solution_default = /*#__PURE__*/__webpack_require__.n(solution);

// EXTERNAL MODULE: ./src/assets/cloud.jpg
var cloud = __webpack_require__("Ff4V");
var cloud_default = /*#__PURE__*/__webpack_require__.n(cloud);

// EXTERNAL MODULE: ./src/assets/mobile.jpg
var mobile = __webpack_require__("DIZZ");
var mobile_default = /*#__PURE__*/__webpack_require__.n(mobile);

// EXTERNAL MODULE: ./src/assets/devops.jpg
var devops = __webpack_require__("LVL8");
var devops_default = /*#__PURE__*/__webpack_require__.n(devops);

// EXTERNAL MODULE: ./src/assets/agile.jpeg
var agile = __webpack_require__("dH34");
var agile_default = /*#__PURE__*/__webpack_require__.n(agile);

// EXTERNAL MODULE: ./src/assets/webdev.jpg
var webdev = __webpack_require__("N48c");
var webdev_default = /*#__PURE__*/__webpack_require__.n(webdev);

// CONCATENATED MODULE: ./src/sections/services.js
var services_jsx = external_react_default.a.createElement;










const SERVICES_DATA = [{
  icon: solution_default.a,
  title: 'Solutions for Startups',
  text: 'Hire Digita to rapidly build and test new software ideas. We’ll help you decrease time-to-market and enable you to focus on core competencies.'
}, {
  icon: webdev_default.a,
  title: 'Web Application Development',
  text: 'Our custom application development firm delivers stable and responsive web applications from scratch that smoothly integrate with existing environments. We create a broad spectrum of web solutions.'
}, {
  icon: cloud_default.a,
  title: 'Cloud Based Application Development',
  text: 'Digita Solutions will help you leverage the potential of AWS, Azure, and other cloud platforms and build scalable digital solutions with reduced IT costs and added agility.'
}, {
  icon: mobile_default.a,
  title: 'Mobile App Development',
  text: 'Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery, and to ongoing ongoing support.'
}, {
  icon: devops_default.a,
  title: 'DevOps',
  text: 'Our DevOps Services help you align development and operations teams. You’ll improve code quality, adopt continuous integration, and deliver faster.'
}, {
  icon: agile_default.a,
  title: 'Agile Services',
  text: "Our experts follow an agile development process through agile methodology to make all the team are on the same page. Our team has significant experience in designing, conceptualizing, sustaining, and implementing the agile processes through agile approach for you, as well as our project."
}];

const Services = () => {
  return services_jsx(external_theme_ui_["Box"], {
    sx: services_styles.services,
    id: "services"
  }, services_jsx(external_theme_ui_["Container"], null, services_jsx(block_title // slogan="Our Services"
  , {
    title: "What We Offer",
    styles: services_styles.blockTitle
  }), services_jsx(external_theme_ui_["Grid"], {
    sx: services_styles.grid
  }, SERVICES_DATA.map((service, index) => services_jsx(external_theme_ui_["Box"], {
    className: "service-card",
    sx: services_styles.serviceCard,
    key: `service-post-${index}`
  }, services_jsx(external_theme_ui_["Box"], {
    className: "service-icon",
    sx: services_styles.icon
  }, services_jsx(Image, {
    src: service.icon,
    alt: "service"
  })), services_jsx(external_theme_ui_["Heading"], {
    as: "h3"
  }, service.title), services_jsx(external_theme_ui_["Text"], {
    as: "p"
  }, service.text))))));
};

/* harmony default export */ var services = (Services);
const services_styles = {
  services: {
    pt: ['80px', null, null, null, null, null, '140px'],
    '.service-card:nth-of-type(2)': {
      '.service-icon': {
        backgroundImage: 'linear-gradient(320.89deg, #25D9D9 10.83%, rgba(37, 217, 217, 0.5) 88.7%)'
      }
    },
    '.service-card:nth-of-type(3)': {
      '.service-icon': {
        backgroundImage: 'linear-gradient(319.4deg, #0898E7 5.17%, rgba(8, 152, 231, 0.5) 94.34%)'
      }
    },
    '.service-card:nth-of-type(4)': {
      '.service-icon': {
        backgroundImage: 'linear-gradient(322.63deg, #FF9066 9.94%, rgba(255, 144, 102, 0.5) 91.14%)'
      }
    }
  },
  blockTitle: {
    textAlign: 'center'
  },
  grid: {
    display: 'grid',
    gridGap: ['30px', null, null, null, null, '60px'],
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr']
  },
  icon: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['90px', null, null, '120px'],
    height: ['90px', null, null, '120px'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ['20px', null, null, '40px'],
    backgroundImage: 'linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)'
  },
  serviceCard: {
    borderRadius: '5px',
    borderColor: 'primary',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    padding: '15px',
    h3: {
      margin: 0,
      fontSize: ['18px', null, null, 3],
      fontWeight: 'bold',
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
      mb: ['20px', null, null]
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, '15px'],
      color: 'heading_secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0']
    }
  }
};
// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__("1nAM");
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__("mNWG");

// EXTERNAL MODULE: ./src/assets/alsharpe.jpeg
var alsharpe = __webpack_require__("EOAO");
var alsharpe_default = /*#__PURE__*/__webpack_require__.n(alsharpe);

// EXTERNAL MODULE: ./src/assets/manuel.jpeg
var manuel = __webpack_require__("adYA");
var manuel_default = /*#__PURE__*/__webpack_require__.n(manuel);

// EXTERNAL MODULE: ./src/assets/testi-1-3.png
var testi_1_3 = __webpack_require__("Mg6N");

// CONCATENATED MODULE: ./src/sections/testimonials.js
var testimonials_jsx = external_react_default.a.createElement;

function testimonials_extends() { testimonials_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return testimonials_extends.apply(this, arguments); }










external_swiper_default.a.use([external_swiper_["Thumbs"], external_swiper_["Autoplay"]]);
const TESTIMONIALS_DATA = [{
  image: alsharpe_default.a,
  heading: 'Algernon Sharpe',
  designation: 'CEO REECETECH',
  content: 'Digita Solutions has provided very talented engineers across web UI, mobile, backend APIs, and system designs, to data integrations and beyond. Their staff integrated quickly and were dedicated to the internal teams throughout the relationship, acting as long term partners in our strategic digital efforts.'
}, {
  image: manuel_default.a,
  heading: 'Manuel',
  designation: 'Head of Technology',
  content: 'They are doing amazing job with hundred percent customer satisfaction, Love their work and would like to work with them again.'
}];

const Testimonials = () => {
  // store thumbs swiper instance
  const {
    0: thumbsSwiper,
    1: setThumbsSwiper
  } = Object(external_react_["useState"])(null);
  const infoParams = {
    spaceBetween: 15,
    slidesPerView: 2,
    autoplay: {
      delay: 5000
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 60
      }
    }
  };
  const contentParams = {
    spaceBetween: 0,
    slidesPerView: 1,
    autoHeight: true,
    autoplay: {
      delay: 5000
    }
  };
  return testimonials_jsx(external_theme_ui_["Box"], {
    as: "section",
    id: "testimonials",
    sx: testimonials_styles.testimonials
  }, testimonials_jsx(external_theme_ui_["Container"], null, testimonials_jsx(block_title // slogan="Customer Comments"
  , {
    title: "Why customers love us",
    styles: testimonials_styles.blockTitle
  }), testimonials_jsx(react_["Swiper"], testimonials_extends({
    id: "testimonialsContent",
    thumbs: {
      swiper: thumbsSwiper
    }
  }, contentParams), TESTIMONIALS_DATA.map((testimonialText, index) => testimonials_jsx(react_["SwiperSlide"], {
    key: `testimonial-content-${index}`
  }, testimonials_jsx(external_theme_ui_["Text"], {
    sx: testimonials_styles.testimonialsContent,
    as: "p"
  }, testimonialText.content)))), testimonials_jsx(react_["Swiper"], testimonials_extends({
    id: "testimonialsInfo",
    onSwiper: setThumbsSwiper,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
  }, infoParams), TESTIMONIALS_DATA.map((testimonial, index) => testimonials_jsx(react_["SwiperSlide"], {
    key: `testimonial-info-${index}`
  }, testimonials_jsx(Image, {
    src: testimonial.image,
    alt: "testimonials image"
  }), testimonials_jsx(external_theme_ui_["Heading"], {
    as: "h3"
  }, testimonial.heading), testimonials_jsx(external_theme_ui_["Text"], {
    as: "span"
  }, testimonial.designation))))));
};

/* harmony default export */ var testimonials = (Testimonials);
const testimonials_styles = {
  testimonials: {
    pt: ['65px', null, null, null, null, '80px', '170px'],
    '.blockTitle': {
      textAlign: 'center',
      marginBottom: ['25px', null, null, null, null, '50px']
    },
    '#testimonialsInfo': {
      textAlign: ['center', null, null, null, null, 'left'],
      marginTop: ['30px', null, null, null, '40px', '50px'],
      width: '100%',
      maxWidth: '820px',
      '.swiper-slide': {
        cursor: 'pointer',
        borderTop: ['5px solid transparent', null, null, null, null, '5px solid transparent'],
        position: 'relative',
        paddingLeft: ['0', null, null, null, null, '75px'],
        paddingTop: ['0', null, null, null, null, '25px'],
        paddingBottom: ['0', null, null, null, null, '15px'],
        minHeight: ['auto', null, null, null, null, '50px'],
        '&.swiper-slide-thumb-active': {
          borderColor: '#8D448B'
        }
      },
      img: {
        height: "50px",
        width: "50px",
        borderRadius: '50%',
        display: 'block',
        marginLeft: ['auto', null, null, null, null, '0'],
        marginRight: ['auto', null, null, null, null, '0'],
        marginBottom: ['15px', null, null, null, null, '0'],
        position: ['relative', null, null, null, null, 'absolute'],
        top: ['auto', null, null, null, null, '50%'],
        left: ['auto', null, null, null, null, '10px'],
        mt: ['10px', null, null, null, null, 0],
        transform: ['translateY(0)', null, null, null, null, 'translateY(calc(-50% + 8px))']
      },
      h3: {
        fontSize: ['18px', null, 2, null, 3],
        lineHeight: 1,
        color: 'black',
        display: ['none', null, 'block']
      },
      span: {
        color: 'text',
        opacity: '0.8',
        fontSize: [15, null, '15px'],
        lineHeight: 1,
        display: 'block',
        display: ['none', null, 'block'],
        marginTop: '10px'
      }
    }
  },
  testimonialsContent: {
    margin: 0,
    fontSize: [2, null, 3, null, 4, '32px', 7],
    color: 'black',
    lineHeight: [2.3, null, 1.8],
    textAlign: 'center',
    fontFamily: 'special',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '820px',
    marginTop: ['0', null, null, null, null, '-15px']
  }
};
// EXTERNAL MODULE: ./src/assets/healthcare.png
var healthcare = __webpack_require__("/2BR");
var healthcare_default = /*#__PURE__*/__webpack_require__.n(healthcare);

// EXTERNAL MODULE: ./src/assets/factory.png
var factory = __webpack_require__("TNdT");
var factory_default = /*#__PURE__*/__webpack_require__.n(factory);

// EXTERNAL MODULE: ./src/assets/construction.png
var construction = __webpack_require__("ehBB");
var construction_default = /*#__PURE__*/__webpack_require__.n(construction);

// EXTERNAL MODULE: ./src/assets/supermarket.png
var supermarket = __webpack_require__("+Ze/");
var supermarket_default = /*#__PURE__*/__webpack_require__.n(supermarket);

// EXTERNAL MODULE: ./src/assets/saving.png
var saving = __webpack_require__("Nj/y");
var saving_default = /*#__PURE__*/__webpack_require__.n(saving);

// EXTERNAL MODULE: ./src/assets/deal.png
var deal = __webpack_require__("bHNg");
var deal_default = /*#__PURE__*/__webpack_require__.n(deal);

// CONCATENATED MODULE: ./src/sections/Industries.js
var Industries_jsx = external_react_default.a.createElement;










const Industries_SERVICES_DATA = [{
  icon: healthcare_default.a,
  title: 'Healthcare'
}, {
  icon: factory_default.a,
  title: 'Manufacturing'
}, {
  icon: construction_default.a,
  title: 'Construction'
}, {
  icon: supermarket_default.a,
  title: 'Retail'
}, {
  icon: saving_default.a,
  title: 'Financial Services'
}, {
  icon: deal_default.a,
  title: 'Real Estate'
}];

const Industries = () => {
  return Industries_jsx(external_theme_ui_["Box"], {
    sx: Industries_styles.services,
    id: "services"
  }, Industries_jsx(external_theme_ui_["Container"], null, Industries_jsx(block_title // slogan="Our Services"
  , {
    title: "Industries We Work with",
    styles: Industries_styles.blockTitle
  }), Industries_jsx(external_theme_ui_["Grid"], {
    sx: Industries_styles.grid
  }, Industries_SERVICES_DATA.map((service, index) => Industries_jsx(external_theme_ui_["Box"], {
    className: "service-card",
    sx: Industries_styles.serviceCard,
    key: `service-post-${index}`
  }, Industries_jsx(external_theme_ui_["Box"], {
    className: "service-icon",
    sx: Industries_styles.icon
  }, Industries_jsx(Image, {
    src: service.icon,
    alt: "service"
  })), Industries_jsx(external_theme_ui_["Heading"], {
    as: "h3"
  }, service.title))))));
};

/* harmony default export */ var sections_Industries = (Industries);
const Industries_styles = {
  services: {
    pt: ['80px', null, null, null, null, null, '140px'],
    pb: ['80px', null, null, null, null, null, '140px'],
    mt: '5rem',
    backgroundColor: '#F6F8FB',
    '.service-card:nth-of-type(2)': {
      '.service-icon': {
        backgroundImage: 'linear-gradient(320.89deg, #25D9D9 10.83%, rgba(37, 217, 217, 0.5) 88.7%)'
      }
    },
    '.service-card:nth-of-type(3)': {
      '.service-icon': {
        backgroundImage: 'linear-gradient(319.4deg, #0898E7 5.17%, rgba(8, 152, 231, 0.5) 94.34%)'
      }
    },
    '.service-card:nth-of-type(4)': {
      '.service-icon': {
        backgroundImage: 'linear-gradient(322.63deg, #FF9066 9.94%, rgba(255, 144, 102, 0.5) 91.14%)'
      }
    }
  },
  blockTitle: {
    textAlign: 'center'
  },
  grid: {
    display: 'grid',
    gridGap: ['30px', null, null, null, null, '60px'],
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr']
  },
  icon: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['80px', null, null, '110px'],
    height: ['80px', null, null, '110px'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ['20px', null, null, '40px'],
    backgroundImage: 'linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)'
  },
  serviceCard: {
    textAlign: 'center',
    h3: {
      margin: 0,
      fontSize: ['18px', null, null, 3],
      fontWeight: 'bold',
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
      mb: ['20px', null, null]
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, '15px'],
      color: 'heading_secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0']
    }
  }
};
// EXTERNAL MODULE: ./src/assets/light.png
var light = __webpack_require__("tEjL");
var light_default = /*#__PURE__*/__webpack_require__.n(light);

// EXTERNAL MODULE: ./src/assets/growing.png
var growing = __webpack_require__("ll+K");
var growing_default = /*#__PURE__*/__webpack_require__.n(growing);

// EXTERNAL MODULE: ./src/assets/velocity.png
var velocity = __webpack_require__("Z/9t");
var velocity_default = /*#__PURE__*/__webpack_require__.n(velocity);

// CONCATENATED MODULE: ./src/sections/HowWorks.js
var HowWorks_jsx = external_react_default.a.createElement;







const HowWorks_SERVICES_DATA = [{
  icon: light_default.a,
  title: 'Your Idea',
  text: 'After digging deep to understand holistically your challenges and business objectives, we chart your technology path that will keep your business future-proof.'
}, {
  icon: growing_default.a,
  title: 'Starting small',
  text: 'At the beginning of the transformation journey, we start with simple use cases that bring you immediate results.'
}, {
  icon: velocity_default.a,
  title: 'Innovating at scale',
  text: 'We are expanding the functionality of your system, keeping it flexible on the tech stack, hugely adaptable to humans, and easily scalable to evolve along with your business growth.'
}];

const HowWorks_Services = () => {
  return HowWorks_jsx(external_theme_ui_["Box"], {
    sx: HowWorks_styles.services,
    id: "services"
  }, HowWorks_jsx(external_theme_ui_["Container"], null, HowWorks_jsx(block_title // slogan="Our Services"
  , {
    title: "How It Works",
    styles: HowWorks_styles.blockTitle
  }), HowWorks_jsx(external_theme_ui_["Grid"], {
    sx: HowWorks_styles.grid
  }, HowWorks_SERVICES_DATA.map((service, index) => HowWorks_jsx(external_theme_ui_["Box"], {
    className: "service-card",
    sx: HowWorks_styles.serviceCard,
    key: `service-post-${index}`
  }, HowWorks_jsx(external_theme_ui_["Box"], {
    className: "service-icon",
    sx: HowWorks_styles.icon
  }, HowWorks_jsx(Image, {
    src: service.icon,
    alt: "service"
  })), HowWorks_jsx(external_theme_ui_["Heading"], {
    as: "h3"
  }, service.title), HowWorks_jsx(external_theme_ui_["Text"], {
    as: "p"
  }, service.text))))));
};

/* harmony default export */ var HowWorks = (HowWorks_Services);
const HowWorks_styles = {
  services: {
    pt: ['80px', null, null, null, null, null, '140px'],
    pb: ['80px', null, null, null, null, null, '140px'],
    mt: '2rem',
    backgroundColor: '#F6F8FB',
    '.service-card:nth-of-type(2)': {
      '.service-icon': {
        backgroundImage: 'linear-gradient(320.89deg, #25D9D9 10.83%, rgba(37, 217, 217, 0.5) 88.7%)'
      }
    },
    '.service-card:nth-of-type(3)': {
      '.service-icon': {
        backgroundImage: 'linear-gradient(319.4deg, #0898E7 5.17%, rgba(8, 152, 231, 0.5) 94.34%)'
      }
    },
    '.service-card:nth-of-type(4)': {
      '.service-icon': {
        backgroundImage: 'linear-gradient(322.63deg, #FF9066 9.94%, rgba(255, 144, 102, 0.5) 91.14%)'
      }
    }
  },
  blockTitle: {
    textAlign: 'center'
  },
  grid: {
    display: 'grid',
    gridGap: ['30px', null, null, null, null, '60px'],
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr 1fr', null, '1fr 1fr 1fr']
  },
  icon: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['80px', null, null, '110px'],
    height: ['80px', null, null, '110px'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ['20px', null, null, '40px'],
    backgroundImage: 'linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)'
  },
  serviceCard: {
    textAlign: 'center',
    h3: {
      margin: 0,
      fontSize: ['18px', null, null, 3],
      fontWeight: 'bold',
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
      mb: ['20px', null, null]
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, '15px'],
      color: 'heading_secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0']
    }
  }
};
// EXTERNAL MODULE: ./src/assets/cta-shape-1.svg
var cta_shape_1 = __webpack_require__("YjHu");
var cta_shape_1_default = /*#__PURE__*/__webpack_require__.n(cta_shape_1);

// EXTERNAL MODULE: ./src/assets/cta-btn-shape-1.svg
var cta_btn_shape_1 = __webpack_require__("gSaG");
var cta_btn_shape_1_default = /*#__PURE__*/__webpack_require__.n(cta_btn_shape_1);

// CONCATENATED MODULE: ./src/sections/call-to-action.js
var call_to_action_jsx = external_react_default.a.createElement;






const CallToAction = () => {
  return call_to_action_jsx(external_theme_ui_["Box"], {
    sx: call_to_action_styles.wrapper
  }, call_to_action_jsx(external_theme_ui_["Container"], {
    sx: call_to_action_styles.container
  }, call_to_action_jsx(external_theme_ui_["Box"], {
    sx: call_to_action_styles.inner
  }, call_to_action_jsx(external_theme_ui_["Heading"], {
    as: "h3"
  }, "Hire the world\u2019s best developers ", call_to_action_jsx("br", null), "and designers around!"), call_to_action_jsx(external_theme_ui_["Box"], {
    sx: call_to_action_styles.btnWrapper
  }, call_to_action_jsx(external_theme_ui_["Button"], {
    variant: "primary",
    sx: call_to_action_styles.btn
  }, call_to_action_jsx(external_react_scroll_["Link"], {
    smooth: true,
    duration: 800,
    to: "contact",
    ml: 2,
    label: "Contact Now",
    sx: call_to_action_styles.btn,
    variant: "buttons.primary"
  }, "BOOST NOW"))))));
};

/* harmony default export */ var call_to_action = (CallToAction);
const call_to_action_styles = {
  wrapper: {},
  inner: {
    padding: ['45px 30px 50px', null, null, '45px 50px', null, '45px 70px'],
    mt: ['80px', null, null, null],
    position: 'relative',
    zIndex: '10',
    backgroundColor: 'primary',
    backgroundImage: ['none', null, null, null, null, `url(${cta_shape_1_default.a})`],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60% center',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    textAlign: ['center', null, null, 'left'],
    flexDirection: ['column', null, null, 'row'],
    justifyContent: ['center', null, null, 'space-between'],
    h3: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: [5, null, 4, null, null, 6, 7],
      lineHeight: [1.24, null, 1.53],
      padding: ['0 15px', '0'],
      marginBottom: ['50px', null, null, '0'],
      br: {
        display: ['none', null, null, 'inherit']
      }
    }
  },
  btn: {
    backgroundColor: '#fff',
    color: 'primary',
    borderRadius: '5px',
    fontSize: [0, 1, null, null, null, null, '17px'],
    fontWeight: '700',
    letterSpacing: '0.1em',
    fontFamily: 'body',
    padding: ['10px 24px', null, null, null, null, '15px 44px'],
    position: 'relative',
    outline: 'none',
    webkitAppearance: 'none',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      width: '73px',
      height: '26px',
      backgroundImage: `url(${cta_btn_shape_1_default.a})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      bottom: 'calc(100% + 10px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    '&:after': {
      bottom: 'auto',
      top: 'calc(100% + 10px)',
      transform: 'translateX(-50%) rotate(180deg)'
    },
    '&:hover': {
      backgroundColor: 'black',
      color: '#fff'
    }
  }
};
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: ./src/assets/boost-1-1.png
var boost_1_1 = __webpack_require__("pvwL");
var boost_1_1_default = /*#__PURE__*/__webpack_require__.n(boost_1_1);

// CONCATENATED MODULE: ./src/sections/boost-agencies.js
var boost_agencies_jsx = external_react_default.a.createElement;








const BoostAgencies = () => {
  return boost_agencies_jsx(external_theme_ui_["Box"], {
    sx: boost_agencies_styles.boostAgencies
  }, boost_agencies_jsx(external_theme_ui_["Container"], null, boost_agencies_jsx(external_theme_ui_["Box"], {
    sx: boost_agencies_styles.row
  }, boost_agencies_jsx(external_theme_ui_["Flex"], {
    sx: boost_agencies_styles.col
  }, boost_agencies_jsx(external_theme_ui_["Box"], {
    sx: boost_agencies_styles.content
  }, boost_agencies_jsx(external_theme_ui_["Box"], {
    sx: boost_agencies_styles.titleBox
  }, boost_agencies_jsx(external_theme_ui_["Heading"], {
    as: "h3"
  }, "Boost your Company by Digita Developers"), boost_agencies_jsx(external_theme_ui_["Text"], {
    as: "p"
  }, "Let us take care of your business from building your web application to getting more leeds.")), boost_agencies_jsx(external_theme_ui_["Box"], {
    as: "ul",
    sx: boost_agencies_styles.list
  }, boost_agencies_jsx(external_theme_ui_["Text"], {
    as: "li"
  }, boost_agencies_jsx(io_["IoIosCheckmarkCircle"], null), "Cost-effective Solutions"), boost_agencies_jsx(external_theme_ui_["Text"], {
    as: "li"
  }, boost_agencies_jsx(io_["IoIosCheckmarkCircle"], null), "Easy Contracting Process"), boost_agencies_jsx(external_theme_ui_["Text"], {
    as: "li"
  }, boost_agencies_jsx(io_["IoIosCheckmarkCircle"], null), "Time Zone Aligned"), boost_agencies_jsx(external_theme_ui_["Text"], {
    as: "li"
  }, boost_agencies_jsx(io_["IoIosCheckmarkCircle"], null), "Cost-effective Solutions"), boost_agencies_jsx(external_theme_ui_["Text"], {
    as: "li"
  }, boost_agencies_jsx(io_["IoIosCheckmarkCircle"], null), "\"In-house\" Engineers in Your Backyard")))), boost_agencies_jsx(external_theme_ui_["Flex"], {
    sx: boost_agencies_styles.col
  }, boost_agencies_jsx(Image, {
    src: boost_1_1_default.a,
    sx: boost_agencies_styles.image,
    alt: ""
  })))));
};

/* harmony default export */ var boost_agencies = (BoostAgencies);
const boost_agencies_styles = {
  boostAgencies: {
    pt: ['70px', null, null, '80px', '120px', null, '130px']
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, 'row-reverse']
  },
  col: {
    flex: ['0 0 100%', null, null, '0 0 50%']
  },
  image: {
    mt: ['25px', null, null, '0'],
    display: 'flex',
    marginLeft: ['0', null, null, null, 'auto'],
    marginRight: ['0', null, null, null, 'auto'],
    height: ['385px', null, null, 'auto'],
    position: 'relative',
    top: [null, null, null, '-20px', '-45px', 'auto']
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    ml: ['25px', null, null, '0'],
    mb: ['10px'],
    mt: ['30px'],
    li: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ['flex-start', null, null, null, null, 'flex-start'],
      fontSize: [1, null, 2, null, '18px'],
      color: 'text_secondary',
      lineHeight: [2.56],
      svg: {
        width: [17, null, null, 23],
        height: [17, null, null, 23],
        color: '#DADADA',
        borderRadius: '50%',
        marginRight: ['10px']
      }
    }
  },
  titleBox: {
    textAlign: ['center', null, null, 'left'],
    h3: {
      color: 'black',
      fontSize: [5, null, null, '21px', '36px', '32px', 8],
      lineHeight: [1.6, null, null, '1.5'],
      fontWeight: 'bold',
      letterSpacing: ['-0.5px', null, null, null, null, null, '-1.5px']
    },
    p: {
      fontSize: [0, null, 2, null, '17px'],
      color: 'text_secondary',
      opacity: '.6',
      lineHeight: ['26px', null, null, 1.8, null, 2.06],
      padding: ['0 20px', null, null, '0'],
      mt: ['15px']
    }
  },
  link: {
    color: 'primary',
    fontSize: [1, null, 2],
    display: 'inline-block',
    verticalAlign: 'middle',
    fontWeight: 'bold',
    pl: ['30px', null, null, '4px', null, '4px'],
    mt: ['5px', null, null, null, '10px'],
    svg: {
      position: 'relative',
      top: '3px'
    }
  },
  content: {
    width: '100%',
    textAlign: ['left', null, null, null, 'left'],
    pt: [null, null, null, null, null, '100px'],
    pl: [null, null, null, null, null, '60px', '140px']
  }
};
// CONCATENATED MODULE: ./src/sections/contact.js
var contact_jsx = external_react_default.a.createElement;





const Contact = () => {
  return contact_jsx(external_theme_ui_["Box"], {
    id: "contact",
    sx: contact_styles.wrapper
  }, contact_jsx(external_theme_ui_["Container"], {
    sx: contact_styles.container
  }, contact_jsx(external_theme_ui_["Box"], {
    sx: contact_styles.inner
  }, contact_jsx(external_theme_ui_["Heading"], {
    as: "h3"
  }, "Contact Now"), contact_jsx(external_theme_ui_["Box"], {
    sx: contact_styles.btnWrapper
  }, contact_jsx(external_theme_ui_["Button"], {
    sx: contact_styles.btn
  }, contact_jsx("a", {
    href: "mailto:khanzaryab007@gmail.com",
    className: "p-text"
  }, "info@digitasolutions.com"))), contact_jsx(external_theme_ui_["Box"], {
    sx: contact_styles.btnWrapper
  }, contact_jsx(external_theme_ui_["Button"], {
    sx: contact_styles.btn
  }, contact_jsx("a", {
    href: "tel:+923006052364",
    className: "p-text"
  }, "+923006052364"))))));
};

/* harmony default export */ var contact = (Contact);
const contact_styles = {
  wrapper: {},
  inner: {
    padding: ['45px 30px 50px', null, null, '45px 50px', null, '45px 70px'],
    mt: ['100px', null, null, null],
    mb: ['80px', null, null, null],
    position: 'relative',
    zIndex: '10',
    backgroundColor: 'primary',
    backgroundImage: ['none', null, null, null, null, `url(${cta_shape_1_default.a})`],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60% center',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    textAlign: ['center', null, null, 'left'],
    flexDirection: ['column', null, null, 'row'],
    justifyContent: ['center', null, null, 'space-between'],
    h3: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: [5, null, 4, null, null, 6, 7],
      lineHeight: [1.24, null, 1.53],
      padding: ['0 15px', '0'],
      marginBottom: ['50px', null, null, '0'],
      br: {
        display: ['none', null, null, 'inherit']
      }
    }
  },
  btn: {
    mt: '10px',
    backgroundColor: '#fff',
    color: 'primary',
    borderRadius: '5px',
    fontSize: [0, 1, null, null, null, null, '17px'],
    fontWeight: '700',
    letterSpacing: '0.1em',
    fontFamily: 'body',
    padding: ['10px 24px', null, null, null, null, '15px 44px'],
    position: 'relative',
    outline: 'none',
    webkitAppearance: 'none',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      width: '73px',
      height: '26px',
      backgroundImage: `url(${cta_btn_shape_1_default.a})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      bottom: 'calc(100% + 10px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    '&:after': {
      bottom: 'auto',
      top: 'calc(100% + 10px)',
      transform: 'translateX(-50%) rotate(180deg)'
    },
    '&:hover': {
      backgroundColor: 'black',
      color: '#fff'
    }
  }
};
// EXTERNAL MODULE: ./src/assets/javascript.png
var javascript = __webpack_require__("ljoG");
var javascript_default = /*#__PURE__*/__webpack_require__.n(javascript);

// EXTERNAL MODULE: ./src/assets/mu5.png
var mu5 = __webpack_require__("QedB");
var mu5_default = /*#__PURE__*/__webpack_require__.n(mu5);

// EXTERNAL MODULE: ./src/assets/node.png
var node = __webpack_require__("FGX+");
var node_default = /*#__PURE__*/__webpack_require__.n(node);

// EXTERNAL MODULE: ./src/assets/react.png
var react = __webpack_require__("Ww3b");
var assets_react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/assets/redux.png
var redux = __webpack_require__("f+xh");
var redux_default = /*#__PURE__*/__webpack_require__.n(redux);

// EXTERNAL MODULE: ./src/assets/sass.png
var sass = __webpack_require__("cmZq");
var sass_default = /*#__PURE__*/__webpack_require__.n(sass);

// EXTERNAL MODULE: ./src/assets/figma.png
var figma = __webpack_require__("fJRX");
var figma_default = /*#__PURE__*/__webpack_require__.n(figma);

// EXTERNAL MODULE: ./src/assets/flutter.png
var flutter = __webpack_require__("RCtr");
var flutter_default = /*#__PURE__*/__webpack_require__.n(flutter);

// EXTERNAL MODULE: ./src/assets/git.png
var git = __webpack_require__("Q6z8");
var git_default = /*#__PURE__*/__webpack_require__.n(git);

// EXTERNAL MODULE: ./src/assets/python.png
var python = __webpack_require__("XJM9");
var python_default = /*#__PURE__*/__webpack_require__.n(python);

// EXTERNAL MODULE: ./src/assets/typescript.png
var typescript = __webpack_require__("Tzel");
var typescript_default = /*#__PURE__*/__webpack_require__.n(typescript);

// EXTERNAL MODULE: ./src/assets/vue.png
var vue = __webpack_require__("xuuv");
var vue_default = /*#__PURE__*/__webpack_require__.n(vue);

// CONCATENATED MODULE: ./src/sections/techStack.js
var techStack_jsx = external_react_default.a.createElement;
















const techStack_SERVICES_DATA = [{
  icon: javascript_default.a,
  title: 'Healthcare'
}, {
  icon: mu5_default.a,
  title: 'Manufacturing'
}, {
  icon: node_default.a,
  title: 'Construction'
}, {
  icon: assets_react_default.a,
  title: 'Retail'
}, {
  icon: redux_default.a,
  title: 'Financial Services'
}, {
  icon: sass_default.a,
  title: 'Real Estate'
}, {
  icon: figma_default.a,
  title: 'Retail'
}, {
  icon: flutter_default.a,
  title: 'Financial Services'
}, {
  icon: git_default.a,
  title: 'Real Estate'
}, {
  icon: python_default.a,
  title: 'Retail'
}, {
  icon: typescript_default.a,
  title: 'Financial Services'
}, {
  icon: vue_default.a,
  title: 'Real Estate'
}];

const techStack = () => {
  return techStack_jsx(external_theme_ui_["Box"], {
    sx: techStack_styles.services,
    id: "techStack"
  }, techStack_jsx(external_theme_ui_["Container"], null, techStack_jsx(block_title // slogan="Our Services"
  , {
    title: "Technologies We Use",
    styles: techStack_styles.blockTitle
  }), techStack_jsx(external_theme_ui_["Grid"], {
    sx: techStack_styles.grid
  }, techStack_SERVICES_DATA.map((service, index) => techStack_jsx(external_theme_ui_["Box"], {
    className: "service-card",
    sx: techStack_styles.serviceCard,
    key: `service-post-${index}`
  }, techStack_jsx(external_theme_ui_["Box"], {
    className: "service-icon",
    sx: techStack_styles.icon
  }, techStack_jsx(Image, {
    src: service.icon,
    alt: "service"
  })))))));
};

/* harmony default export */ var sections_techStack = (techStack);
const techStack_styles = {
  services: {
    pt: ['80px', null, null, null, null, null, '140px'],
    pb: ['80px', null, null, null, null, null, '140px'],
    mt: '5rem',
    backgroundColor: '#F6F8FB',
    '.service-card:nth-of-type(2)': {
      '.service-icon': {
        backgroundImage: 'linear-gradient(320.89deg, #25D9D9 10.83%, rgba(37, 217, 217, 0.5) 88.7%)'
      }
    },
    '.service-card:nth-of-type(3)': {
      '.service-icon': {
        backgroundImage: 'linear-gradient(319.4deg, #0898E7 5.17%, rgba(8, 152, 231, 0.5) 94.34%)'
      }
    },
    '.service-card:nth-of-type(4)': {
      '.service-icon': {
        backgroundImage: 'linear-gradient(322.63deg, #FF9066 9.94%, rgba(255, 144, 102, 0.5) 91.14%)'
      }
    }
  },
  blockTitle: {
    textAlign: 'center'
  },
  grid: {
    display: 'grid',
    gridGap: ['30px', null, null, null, null, '60px'],
    gridTemplateColumns: ['1fr 1fr 1fr', null, null, '1fr 1fr', '1fr 1fr 1fr 1fr', '1fr 1fr 1fr 1fr']
  },
  icon: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['40px', null, null, '55px'],
    height: ['40px', null, null, '55px'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ['20px', null, null, '40px'],
    backgroundImage: 'linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)'
  },
  serviceCard: {
    textAlign: 'center',
    h3: {
      margin: 0,
      fontSize: ['18px', null, null, 3],
      fontWeight: 'bold',
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
      mb: ['20px', null, null]
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, '15px'],
      color: 'heading_secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0']
    }
  }
};
// CONCATENATED MODULE: ./src/pages/index.js
var pages_jsx = external_react_default.a.createElement;















function IndexPage() {
  return pages_jsx(external_theme_ui_["ThemeProvider"], {
    theme: theme
  }, pages_jsx(StickyProvider, null, pages_jsx(Layout, null, pages_jsx(SEO, {
    title: "Digita Solutions"
  }), pages_jsx(banner, null), pages_jsx(services, null), pages_jsx(boost_agencies, null), pages_jsx(call_to_action, null), pages_jsx(HowWorks, null), pages_jsx(testimonials, null), pages_jsx(sections_Industries, null), pages_jsx(contact, null), pages_jsx(sections_techStack, null))));
}

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TNdT":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Tzel":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "Ww3b":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XJM9":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "YjHu":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <svg width=\"249\" height=\"120\" viewBox=\"0 0 249 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n| <g opacity=\"0.5\">\n| <path d=\"M177.064 29.8921C184.504 25.3248 192.888 22.4751 201.293 21.6699C208.457 20.9683 215.901 21.7457 222.99 23.8917L223.234 21.0445C215.864 18.9164 208.361 18.1759 201.028 18.8771C192.2 19.73 183.413 22.7131 175.605 27.5007C167.796 32.2883 161.17 38.7861 156.416 46.2836C155.074 48.3932 153.895 50.5727 152.864 52.8069C140.681 56.4224 129.84 63.1329 119.9 69.9485C117.479 71.6019 115.038 73.3235 112.686 74.9829C104.07 81.0305 95.1717 87.2777 85.6138 91.9155C74.8302 97.1479 62.7493 100.38 50.6738 101.263C38.2603 102.173 26.2181 100.708 14.8802 96.8969C10.2317 95.3236 5.71495 93.3559 1.43736 91.0449L1.17928 94.0587C5.33111 96.205 9.57971 98.0379 13.9981 99.5215C20.9037 101.848 28.0775 103.329 35.4083 103.957C40.4898 104.392 45.6626 104.416 50.8838 104.037C63.2972 103.128 75.7359 99.7997 86.8405 94.4129C96.5884 89.6795 105.59 83.3711 114.281 77.26C116.633 75.6007 119.073 73.8929 121.479 72.2522C130.631 65.9847 140.515 59.8219 151.456 56.1839C148.152 64.8828 147.27 74.041 149.068 82.4355C150.395 88.6629 153.306 94.5224 157.477 99.3845C161.8 104.428 167.198 108.038 173.101 109.816C179.14 111.649 185.861 111.399 192.038 109.158C198.376 106.846 203.509 102.599 206.516 97.2043C209.838 91.2489 210.591 83.9264 208.631 76.5954C206.777 69.6653 202.574 63.2195 197.083 58.9019C191.763 54.7248 185.295 52.0165 177.898 50.8653C171.204 49.8165 163.946 50.1323 156.911 51.7683C156.754 51.8108 156.598 51.8394 156.44 51.8819C157.146 50.5013 157.933 49.1417 158.774 47.8147C163.304 40.6477 169.624 34.4595 177.064 29.8921ZM157.533 54.4658C164.226 52.9124 171.118 52.6212 177.466 53.6125C184.395 54.6955 190.417 57.2118 195.357 61.0905C200.376 65.032 204.234 70.9445 205.927 77.3013C207.695 83.9303 207.033 90.5191 204.074 95.8339C198.62 105.636 185.356 110.6 173.89 107.142C168.504 105.519 163.558 102.2 159.577 97.5637C155.712 93.0496 153.015 87.6282 151.775 81.8558C149.945 73.3467 151.085 63.9449 154.874 55.1475C155.763 54.8878 156.649 54.6699 157.533 54.4658Z\" fill=\"white\"/>");

/***/ }),

/***/ "Z/9t":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "ZSuG":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "adYA":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "bHNg":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cmZq":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "dH34":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "ehBB":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "f+xh":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "fJRX":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gSaG":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <svg width=\"73\" height=\"26\" viewBox=\"0 0 73 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n| <g opacity=\"0.5\">\n| <rect x=\"2.4718\" y=\"7.89209\" width=\"22.0884\" height=\"3.6814\" rx=\"1.8407\" transform=\"rotate(42.1773 2.4718 7.89209)\" fill=\"white\"/>");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "ik7d":
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "isz7":
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "ljoG":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "ll+K":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "mNWG":
/***/ (function(module, exports) {

module.exports = require("swiper/react");

/***/ }),

/***/ "mxmt":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n| <svg\n|    xmlns:dc=\"http://purl.org/dc/elements/1.1/\"");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nRzR":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "pvwL":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "qC9r":
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "tEjL":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wmQq":
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xuuv":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "zqBN":
/***/ (function(module, exports) {

module.exports = require("theme-ui");

/***/ }),

/***/ "zwU1":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ })

/******/ });