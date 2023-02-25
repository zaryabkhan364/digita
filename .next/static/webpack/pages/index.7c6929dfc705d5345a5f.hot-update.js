webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/HowWorks.js":
/*!**********************************!*\
  !*** ./src/sections/HowWorks.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_block_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/block-title */ \"./src/components/block-title.js\");\n/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/image */ \"./src/components/image.js\");\n/* harmony import */ var assets_light_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/light.png */ \"./src/assets/light.png\");\n/* harmony import */ var assets_light_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_light_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var assets_growing_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/growing.png */ \"./src/assets/growing.png\");\n/* harmony import */ var assets_growing_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_growing_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var assets_velocity_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/velocity.png */ \"./src/assets/velocity.png\");\n/* harmony import */ var assets_velocity_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_velocity_png__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/zaryab/Desktop/DigitaSolutions/src/sections/HowWorks.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar SERVICES_DATA = [{\n  icon: assets_light_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n  title: 'Your Idea',\n  text: 'After digging deep to understand holistically your challenges and business objectives, we chart your technology path that will keep your business future-proof.'\n}, {\n  icon: assets_growing_png__WEBPACK_IMPORTED_MODULE_5___default.a,\n  title: 'Starting small',\n  text: 'At the beginning of the transformation journey, we start with simple use cases that bring you immediate results.'\n}, {\n  icon: assets_velocity_png__WEBPACK_IMPORTED_MODULE_6___default.a,\n  title: 'Innovating at scale',\n  text: 'We are expanding the functionality of your system, keeping it flexible on the tech stack, hugely adaptable to humans, and easily scalable to evolve along with your business growth.'\n}];\n\nvar Services = function Services() {\n  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.services,\n    id: \"services\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(components_block_title__WEBPACK_IMPORTED_MODULE_2__[\"default\"] // slogan=\"Our Services\"\n  , {\n    title: \"How It Works\",\n    styles: styles.blockTitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    sx: styles.grid,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, SERVICES_DATA.map(function (service, index) {\n    return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      className: \"service-card\",\n      sx: styles.serviceCard,\n      key: \"service-post-\".concat(index),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }\n    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      className: \"service-icon\",\n      sx: styles.icon,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 15\n      }\n    }, __jsx(components_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      src: service.icon,\n      alt: \"service\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }\n    })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      as: \"h3\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 15\n      }\n    }, service.title), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n      as: \"p\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 15\n      }\n    }, service.text));\n  }))));\n};\n\n_c = Services;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Services);\nvar styles = {\n  services: {\n    pt: ['80px', null, null, null, null, null, '140px'],\n    '.service-card:nth-of-type(2)': {\n      '.service-icon': {\n        backgroundImage: 'linear-gradient(320.89deg, #25D9D9 10.83%, rgba(37, 217, 217, 0.5) 88.7%)'\n      }\n    },\n    '.service-card:nth-of-type(3)': {\n      '.service-icon': {\n        backgroundImage: 'linear-gradient(319.4deg, #0898E7 5.17%, rgba(8, 152, 231, 0.5) 94.34%)'\n      }\n    },\n    '.service-card:nth-of-type(4)': {\n      '.service-icon': {\n        backgroundImage: 'linear-gradient(322.63deg, #FF9066 9.94%, rgba(255, 144, 102, 0.5) 91.14%)'\n      }\n    }\n  },\n  blockTitle: {\n    textAlign: 'center'\n  },\n  grid: {\n    display: 'grid',\n    gridGap: ['30px', null, null, null, null, '60px'],\n    gridTemplateColumns: ['1fr', null, null, '1fr 1fr 1fr', null, '1fr 1fr 1fr']\n  },\n  icon: {\n    display: 'flex',\n    ml: 'auto',\n    mr: 'auto',\n    width: ['80px', null, null, '110px'],\n    height: ['80px', null, null, '110px'],\n    justifyContent: 'center',\n    alignItems: 'center',\n    borderRadius: ['20px', null, null, '40px'],\n    backgroundImage: 'linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)'\n  },\n  serviceCard: {\n    textAlign: 'center',\n    h3: {\n      margin: 0,\n      fontSize: ['18px', null, null, 3],\n      fontWeight: 'bold',\n      lineHeight: 1,\n      color: 'black',\n      mt: ['30px', null, null],\n      mb: ['20px', null, null]\n    },\n    p: {\n      margin: 0,\n      fontSize: [0, null, null, '15px'],\n      color: 'heading_secondary',\n      width: '100%',\n      maxWidth: [null, null, null, null, '84%', '100%'],\n      mx: [null, null, null, null, 'auto', '0']\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Services\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL0hvd1dvcmtzLmpzPzdhOGMiXSwibmFtZXMiOlsiU0VSVklDRVNfREFUQSIsImljb24iLCJpY29uMSIsInRpdGxlIiwidGV4dCIsImljb24yIiwiaWNvbjMiLCJTZXJ2aWNlcyIsInN0eWxlcyIsInNlcnZpY2VzIiwiYmxvY2tUaXRsZSIsImdyaWQiLCJtYXAiLCJzZXJ2aWNlIiwiaW5kZXgiLCJzZXJ2aWNlQ2FyZCIsInB0IiwiYmFja2dyb3VuZEltYWdlIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibWwiLCJtciIsIndpZHRoIiwiaGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYm9yZGVyUmFkaXVzIiwiaDMiLCJtYXJnaW4iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJtdCIsIm1iIiwicCIsIm1heFdpZHRoIiwibXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLGFBQWEsR0FBRyxDQUNwQjtBQUNFQyxNQUFJLEVBQUVDLHVEQURSO0FBRUVDLE9BQUssRUFBRSxXQUZUO0FBR0VDLE1BQUksRUFDRjtBQUpKLENBRG9CLEVBT3BCO0FBQ0VILE1BQUksRUFBRUkseURBRFI7QUFFRUYsT0FBSyxFQUFFLGdCQUZUO0FBR0VDLE1BQUksRUFDRjtBQUpKLENBUG9CLEVBYXBCO0FBQ0VILE1BQUksRUFBRUssMERBRFI7QUFFRUgsT0FBSyxFQUFFLHFCQUZUO0FBR0VDLE1BQUksRUFDRjtBQUpKLENBYm9CLENBQXRCOztBQXFCQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLFNBQ0UsTUFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxRQUFoQjtBQUEwQixNQUFF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QyxjQUFVLEVBQUUsUUFQUjtBQVFKQyxnQkFBWSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLE1BQXJCLENBUlY7QUFTSlgsbUJBQWUsRUFDYjtBQVZFLEdBckNPO0FBaURiRixhQUFXLEVBQUU7QUFDWEcsYUFBUyxFQUFFLFFBREE7QUFFWFcsTUFBRSxFQUFFO0FBQ0ZDLFlBQU0sRUFBRSxDQUROO0FBRUZDLGNBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixDQUFyQixDQUZSO0FBR0ZDLGdCQUFVLEVBQUUsTUFIVjtBQUlGQyxnQkFBVSxFQUFFLENBSlY7QUFLRkMsV0FBSyxFQUFFLE9BTEw7QUFNRkMsUUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLENBTkY7QUFPRkMsUUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmO0FBUEYsS0FGTztBQVdYQyxLQUFDLEVBQUU7QUFDRFAsWUFBTSxFQUFFLENBRFA7QUFFREMsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLE1BQWhCLENBRlQ7QUFHREcsV0FBSyxFQUFFLG1CQUhOO0FBSURWLFdBQUssRUFBRSxNQUpOO0FBS0RjLGNBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixLQUF6QixFQUFnQyxNQUFoQyxDQUxUO0FBTURDLFFBQUUsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixNQUF6QixFQUFpQyxHQUFqQztBQU5IO0FBWFE7QUFqREEsQ0FBZiIsImZpbGUiOiIuL3NyYy9zZWN0aW9ucy9Ib3dXb3Jrcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgR3JpZCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBCbG9ja1RpdGxlIGZyb20gJ2NvbXBvbmVudHMvYmxvY2stdGl0bGUnO1xuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xuXG5pbXBvcnQgaWNvbjEgZnJvbSAnYXNzZXRzL2xpZ2h0LnBuZyc7XG5pbXBvcnQgaWNvbjIgZnJvbSAnYXNzZXRzL2dyb3dpbmcucG5nJztcbmltcG9ydCBpY29uMyBmcm9tICdhc3NldHMvdmVsb2NpdHkucG5nJztcblxuXG5jb25zdCBTRVJWSUNFU19EQVRBID0gW1xuICB7XG4gICAgaWNvbjogaWNvbjEsXG4gICAgdGl0bGU6ICdZb3VyIElkZWEnLFxuICAgIHRleHQ6XG4gICAgICAnQWZ0ZXIgZGlnZ2luZyBkZWVwIHRvIHVuZGVyc3RhbmQgaG9saXN0aWNhbGx5IHlvdXIgY2hhbGxlbmdlcyBhbmQgYnVzaW5lc3Mgb2JqZWN0aXZlcywgd2UgY2hhcnQgeW91ciB0ZWNobm9sb2d5IHBhdGggdGhhdCB3aWxsIGtlZXAgeW91ciBidXNpbmVzcyBmdXR1cmUtcHJvb2YuJyxcbiAgfSxcbiAge1xuICAgIGljb246IGljb24yLFxuICAgIHRpdGxlOiAnU3RhcnRpbmcgc21hbGwnLFxuICAgIHRleHQ6XG4gICAgICAnQXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgdHJhbnNmb3JtYXRpb24gam91cm5leSwgd2Ugc3RhcnQgd2l0aCBzaW1wbGUgdXNlIGNhc2VzIHRoYXQgYnJpbmcgeW91IGltbWVkaWF0ZSByZXN1bHRzLicsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBpY29uMyxcbiAgICB0aXRsZTogJ0lubm92YXRpbmcgYXQgc2NhbGUnLFxuICAgIHRleHQ6XG4gICAgICAnV2UgYXJlIGV4cGFuZGluZyB0aGUgZnVuY3Rpb25hbGl0eSBvZiB5b3VyIHN5c3RlbSwga2VlcGluZyBpdCBmbGV4aWJsZSBvbiB0aGUgdGVjaCBzdGFjaywgaHVnZWx5IGFkYXB0YWJsZSB0byBodW1hbnMsIGFuZCBlYXNpbHkgc2NhbGFibGUgdG8gZXZvbHZlIGFsb25nIHdpdGggeW91ciBidXNpbmVzcyBncm93dGguJyxcbiAgfSxcbl07XG5cbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5zZXJ2aWNlc30gaWQ9XCJzZXJ2aWNlc1wiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJsb2NrVGl0bGVcbiAgICAgICAgICAvLyBzbG9nYW49XCJPdXIgU2VydmljZXNcIlxuICAgICAgICAgIHRpdGxlPVwiSG93IEl0IFdvcmtzXCJcbiAgICAgICAgICBzdHlsZXM9e3N0eWxlcy5ibG9ja1RpdGxlfVxuICAgICAgICAvPlxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIHtTRVJWSUNFU19EQVRBLm1hcCgoc2VydmljZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VydmljZS1jYXJkXCJcbiAgICAgICAgICAgICAgc3g9e3N0eWxlcy5zZXJ2aWNlQ2FyZH1cbiAgICAgICAgICAgICAga2V5PXtgc2VydmljZS1wb3N0LSR7aW5kZXh9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJzZXJ2aWNlLWljb25cIiBzeD17c3R5bGVzLmljb259PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3NlcnZpY2UuaWNvbn0gYWx0PVwic2VydmljZVwiIC8+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCI+e3NlcnZpY2UudGl0bGV9PC9IZWFkaW5nPlxuICAgICAgICAgICAgICA8VGV4dCBhcz1cInBcIj57c2VydmljZS50ZXh0fTwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNlcnZpY2VzOiB7XG4gICAgcHQ6IFsnODBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxNDBweCddLFxuICAgICcuc2VydmljZS1jYXJkOm50aC1vZi10eXBlKDIpJzoge1xuICAgICAgJy5zZXJ2aWNlLWljb24nOiB7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTpcbiAgICAgICAgICAnbGluZWFyLWdyYWRpZW50KDMyMC44OWRlZywgIzI1RDlEOSAxMC44MyUsIHJnYmEoMzcsIDIxNywgMjE3LCAwLjUpIDg4LjclKScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJy5zZXJ2aWNlLWNhcmQ6bnRoLW9mLXR5cGUoMyknOiB7XG4gICAgICAnLnNlcnZpY2UtaWNvbic6IHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICdsaW5lYXItZ3JhZGllbnQoMzE5LjRkZWcsICMwODk4RTcgNS4xNyUsIHJnYmEoOCwgMTUyLCAyMzEsIDAuNSkgOTQuMzQlKScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJy5zZXJ2aWNlLWNhcmQ6bnRoLW9mLXR5cGUoNCknOiB7XG4gICAgICAnLnNlcnZpY2UtaWNvbic6IHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICdsaW5lYXItZ3JhZGllbnQoMzIyLjYzZGVnLCAjRkY5MDY2IDkuOTQlLCByZ2JhKDI1NSwgMTQ0LCAxMDIsIDAuNSkgOTEuMTQlKScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGJsb2NrVGl0bGU6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB9LFxuICBncmlkOiB7XG4gICAgZGlzcGxheTogJ2dyaWQnLFxuICAgIGdyaWRHYXA6IFsnMzBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc2MHB4J10sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xuICAgICAgJzFmcicsXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgICcxZnIgMWZyIDFmcicsXG4gICAgICBudWxsLFxuICAgICAgJzFmciAxZnIgMWZyJyxcbiAgICBdLFxuICB9LFxuICBpY29uOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG1sOiAnYXV0bycsXG4gICAgbXI6ICdhdXRvJyxcbiAgICB3aWR0aDogWyc4MHB4JywgbnVsbCwgbnVsbCwgJzExMHB4J10sXG4gICAgaGVpZ2h0OiBbJzgwcHgnLCBudWxsLCBudWxsLCAnMTEwcHgnXSxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYm9yZGVyUmFkaXVzOiBbJzIwcHgnLCBudWxsLCBudWxsLCAnNDBweCddLFxuICAgIGJhY2tncm91bmRJbWFnZTpcbiAgICAgICdsaW5lYXItZ3JhZGllbnQoMzIzLjkxZGVnLCAjRkZDQzQwIDcuMDklLCByZ2JhKDI1NSwgMjA0LCA2NCwgMC41KSA4OC44MiUpJyxcbiAgfSxcbiAgc2VydmljZUNhcmQ6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGgzOiB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICBmb250U2l6ZTogWycxOHB4JywgbnVsbCwgbnVsbCwgM10sXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICBtdDogWyczMHB4JywgbnVsbCwgbnVsbF0sXG4gICAgICBtYjogWycyMHB4JywgbnVsbCwgbnVsbF0sXG4gICAgfSxcbiAgICBwOiB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICBmb250U2l6ZTogWzAsIG51bGwsIG51bGwsICcxNXB4J10sXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXhXaWR0aDogW251bGwsIG51bGwsIG51bGwsIG51bGwsICc4NCUnLCAnMTAwJSddLFxuICAgICAgbXg6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCAnYXV0bycsICcwJ10sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/HowWorks.js\n");

/***/ })

})