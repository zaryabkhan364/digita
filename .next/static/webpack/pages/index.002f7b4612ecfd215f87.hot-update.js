webpackHotUpdate_N_E("pages/index",{

/***/ "./src/assets/construction.png":
/*!*************************************!*\
  !*** ./src/assets/construction.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/construction-6c72488cbd3f7bd0b7b630248eda5fd0.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9jb25zdHJ1Y3Rpb24ucG5nP2YxOTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2NvbnN0cnVjdGlvbi5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvY29uc3RydWN0aW9uLTZjNzI0ODhjYmQzZjdiZDBiN2I2MzAyNDhlZGE1ZmQwLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/construction.png\n");

/***/ }),

/***/ "./src/sections/customer-support.js":
/*!******************************************!*\
  !*** ./src/sections/customer-support.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_block_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/block-title */ \"./src/components/block-title.js\");\n/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/image */ \"./src/components/image.js\");\n/* harmony import */ var assets_healthcare_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/healthcare.png */ \"./src/assets/healthcare.png\");\n/* harmony import */ var assets_healthcare_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_healthcare_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var assets_factory_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/factory.png */ \"./src/assets/factory.png\");\n/* harmony import */ var assets_factory_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_factory_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var assets_construction_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/construction.png */ \"./src/assets/construction.png\");\n/* harmony import */ var assets_construction_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_construction_png__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/zaryab/Desktop/DigitaSolutions/src/sections/customer-support.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar SERVICES_DATA = [{\n  icon: assets_healthcare_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n  title: 'Healthcare'\n}, {\n  icon: assets_factory_png__WEBPACK_IMPORTED_MODULE_5___default.a,\n  title: 'Manufacturing'\n}, {\n  icon: assets_construction_png__WEBPACK_IMPORTED_MODULE_6___default.a,\n  title: 'Construction'\n}, {\n  icon: assets_healthcare_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n  title: 'Retail'\n}, {\n  icon: assets_healthcare_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n  title: 'Financial Services'\n}, {\n  icon: assets_healthcare_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n  title: 'Real Estate'\n}];\n\nvar CustomerSupport = function CustomerSupport() {\n  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.services,\n    id: \"services\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(components_block_title__WEBPACK_IMPORTED_MODULE_2__[\"default\"] // slogan=\"Our Services\"\n  , {\n    title: \"Industries We Work with\",\n    styles: styles.blockTitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    sx: styles.grid,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, SERVICES_DATA.map(function (service, index) {\n    return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      className: \"service-card\",\n      sx: styles.serviceCard,\n      key: \"service-post-\".concat(index),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 13\n      }\n    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      className: \"service-icon\",\n      sx: styles.icon,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 15\n      }\n    }, __jsx(components_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      src: service.icon,\n      alt: \"service\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }\n    })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      as: \"h3\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 15\n      }\n    }, service.title));\n  }))));\n};\n\n_c = CustomerSupport;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerSupport);\nvar styles = {\n  services: {\n    pt: ['80px', null, null, null, null, null, '140px'],\n    '.service-card:nth-of-type(2)': {\n      '.service-icon': {\n        backgroundImage: 'linear-gradient(320.89deg, #25D9D9 10.83%, rgba(37, 217, 217, 0.5) 88.7%)'\n      }\n    },\n    '.service-card:nth-of-type(3)': {\n      '.service-icon': {\n        backgroundImage: 'linear-gradient(319.4deg, #0898E7 5.17%, rgba(8, 152, 231, 0.5) 94.34%)'\n      }\n    },\n    '.service-card:nth-of-type(4)': {\n      '.service-icon': {\n        backgroundImage: 'linear-gradient(322.63deg, #FF9066 9.94%, rgba(255, 144, 102, 0.5) 91.14%)'\n      }\n    }\n  },\n  blockTitle: {\n    textAlign: 'center'\n  },\n  grid: {\n    display: 'grid',\n    gridGap: ['30px', null, null, null, null, '60px'],\n    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr 1fr']\n  },\n  icon: {\n    display: 'flex',\n    ml: 'auto',\n    mr: 'auto',\n    width: ['80px', null, null, '110px'],\n    height: ['80px', null, null, '110px'],\n    justifyContent: 'center',\n    alignItems: 'center',\n    borderRadius: ['20px', null, null, '40px'],\n    backgroundImage: 'linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)'\n  },\n  serviceCard: {\n    textAlign: 'center',\n    h3: {\n      margin: 0,\n      fontSize: ['18px', null, null, 3],\n      fontWeight: 'bold',\n      lineHeight: 1,\n      color: 'black',\n      mt: ['30px', null, null],\n      mb: ['20px', null, null]\n    },\n    p: {\n      margin: 0,\n      fontSize: [0, null, null, '15px'],\n      color: 'heading_secondary',\n      width: '100%',\n      maxWidth: [null, null, null, null, '84%', '100%'],\n      mx: [null, null, null, null, 'auto', '0']\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"CustomerSupport\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2N1c3RvbWVyLXN1cHBvcnQuanM/MTRkZCJdLCJuYW1lcyI6WyJTRVJWSUNFU19EQVRBIiwiaWNvbiIsImljb24xIiwidGl0bGUiLCJpY29uMiIsImljb24zIiwiQ3VzdG9tZXJTdXBwb3J0Iiwic3R5bGVzIiwic2VydmljZXMiLCJibG9ja1RpdGxlIiwiZ3JpZCIsIm1hcCIsInNlcnZpY2UiLCJpbmRleCIsInNlcnZpY2VDYXJkIiwicHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtbCIsIm1yIiwid2lkdGgiLCJoZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJib3JkZXJSYWRpdXMiLCJoMyIsIm1hcmdpbiIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJjb2xvciIsIm10IiwibWIiLCJwIiwibWF4V2lkdGgiLCJteCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0EsSUFBTUEsYUFBYSxHQUFHLENBQ3BCO0FBQ0VDLE1BQUksRUFBRUMsNERBRFI7QUFFRUMsT0FBSyxFQUFFO0FBRlQsQ0FEb0IsRUFLcEI7QUFDRUYsTUFBSSxFQUFFRyx5REFEUjtBQUVFRCxPQUFLLEVBQUU7QUFGVCxDQUxvQixFQVNwQjtBQUNFRixNQUFJLEVBQUVJLDhEQURSO0FBRUVGLE9BQUssRUFBRTtBQUZULENBVG9CLEVBYXBCO0FBQ0VGLE1BQUksRUFBRUMsNERBRFI7QUFFRUMsT0FBSyxFQUFFO0FBRlQsQ0Fib0IsRUFpQnBCO0FBQ0VGLE1BQUksRUFBRUMsNERBRFI7QUFFRUMsT0FBSyxFQUFFO0FBRlQsQ0FqQm9CLEVBcUJwQjtBQUNFRixNQUFJLEVBQUVDLDREQURSO0FBRUVDLE9BQUssRUFBRTtBQUZULENB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a0JBQWMsRUFBRSxRQU5aO0FBT0pDLGNBQVUsRUFBRSxRQVBSO0FBUUpDLGdCQUFZLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsTUFBckIsQ0FSVjtBQVNKWCxtQkFBZSxFQUNiO0FBVkUsR0FyQ087QUFpRGJGLGFBQVcsRUFBRTtBQUNYRyxhQUFTLEVBQUUsUUFEQTtBQUVYVyxNQUFFLEVBQUU7QUFDRkMsWUFBTSxFQUFFLENBRE47QUFFRkMsY0FBUSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLENBQXJCLENBRlI7QUFHRkMsZ0JBQVUsRUFBRSxNQUhWO0FBSUZDLGdCQUFVLEVBQUUsQ0FKVjtBQUtGQyxXQUFLLEVBQUUsT0FMTDtBQU1GQyxRQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsQ0FORjtBQU9GQyxRQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWY7QUFQRixLQUZPO0FBV1hDLEtBQUMsRUFBRTtBQUNEUCxZQUFNLEVBQUUsQ0FEUDtBQUVEQyxjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsTUFBaEIsQ0FGVDtBQUdERyxXQUFLLEVBQUUsbUJBSE47QUFJRFYsV0FBSyxFQUFFLE1BSk47QUFLRGMsY0FBUSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLEtBQXpCLEVBQWdDLE1BQWhDLENBTFQ7QUFNREMsUUFBRSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLE1BQXpCLEVBQWlDLEdBQWpDO0FBTkg7QUFYUTtBQWpEQSxDQUFmIiwiZmlsZSI6Ii4vc3JjL3NlY3Rpb25zL2N1c3RvbWVyLXN1cHBvcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEdyaWQsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgQmxvY2tUaXRsZSBmcm9tICdjb21wb25lbnRzL2Jsb2NrLXRpdGxlJztcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcblxuaW1wb3J0IGljb24xIGZyb20gJ2Fzc2V0cy9oZWFsdGhjYXJlLnBuZyc7XG5pbXBvcnQgaWNvbjIgZnJvbSAnYXNzZXRzL2ZhY3RvcnkucG5nJztcbmltcG9ydCBpY29uMyBmcm9tICdhc3NldHMvY29uc3RydWN0aW9uLnBuZyc7XG5cblxuY29uc3QgU0VSVklDRVNfREFUQSA9IFtcbiAge1xuICAgIGljb246IGljb24xLFxuICAgIHRpdGxlOiAnSGVhbHRoY2FyZScsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBpY29uMixcbiAgICB0aXRsZTogJ01hbnVmYWN0dXJpbmcnLFxuICB9LFxuICB7XG4gICAgaWNvbjogaWNvbjMsXG4gICAgdGl0bGU6ICdDb25zdHJ1Y3Rpb24nLFxuICB9LFxuICB7XG4gICAgaWNvbjogaWNvbjEsXG4gICAgdGl0bGU6ICdSZXRhaWwnLFxuICB9LFxuICB7XG4gICAgaWNvbjogaWNvbjEsXG4gICAgdGl0bGU6ICdGaW5hbmNpYWwgU2VydmljZXMnLFxuICB9LFxuICB7XG4gICAgaWNvbjogaWNvbjEsXG4gICAgdGl0bGU6ICdSZWFsIEVzdGF0ZScsXG4gIH0sXG4gIFxuXTtcblxuY29uc3QgQ3VzdG9tZXJTdXBwb3J0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5zZXJ2aWNlc30gaWQ9XCJzZXJ2aWNlc1wiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJsb2NrVGl0bGVcbiAgICAgICAgICAvLyBzbG9nYW49XCJPdXIgU2VydmljZXNcIlxuICAgICAgICAgIHRpdGxlPVwiSW5kdXN0cmllcyBXZSBXb3JrIHdpdGhcIlxuICAgICAgICAgIHN0eWxlcz17c3R5bGVzLmJsb2NrVGl0bGV9XG4gICAgICAgIC8+XG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAge1NFUlZJQ0VTX0RBVEEubWFwKChzZXJ2aWNlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXJ2aWNlLWNhcmRcIlxuICAgICAgICAgICAgICBzeD17c3R5bGVzLnNlcnZpY2VDYXJkfVxuICAgICAgICAgICAgICBrZXk9e2BzZXJ2aWNlLXBvc3QtJHtpbmRleH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cInNlcnZpY2UtaWNvblwiIHN4PXtzdHlsZXMuaWNvbn0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17c2VydmljZS5pY29ufSBhbHQ9XCJzZXJ2aWNlXCIgLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj57c2VydmljZS50aXRsZX08L0hlYWRpbmc+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lclN1cHBvcnQ7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc2VydmljZXM6IHtcbiAgICBwdDogWyc4MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzE0MHB4J10sXG4gICAgJy5zZXJ2aWNlLWNhcmQ6bnRoLW9mLXR5cGUoMiknOiB7XG4gICAgICAnLnNlcnZpY2UtaWNvbic6IHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICdsaW5lYXItZ3JhZGllbnQoMzIwLjg5ZGVnLCAjMjVEOUQ5IDEwLjgzJSwgcmdiYSgzNywgMjE3LCAyMTcsIDAuNSkgODguNyUpJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnLnNlcnZpY2UtY2FyZDpudGgtb2YtdHlwZSgzKSc6IHtcbiAgICAgICcuc2VydmljZS1pY29uJzoge1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICAgJ2xpbmVhci1ncmFkaWVudCgzMTkuNGRlZywgIzA4OThFNyA1LjE3JSwgcmdiYSg4LCAxNTIsIDIzMSwgMC41KSA5NC4zNCUpJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnLnNlcnZpY2UtY2FyZDpudGgtb2YtdHlwZSg0KSc6IHtcbiAgICAgICcuc2VydmljZS1pY29uJzoge1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICAgJ2xpbmVhci1ncmFkaWVudCgzMjIuNjNkZWcsICNGRjkwNjYgOS45NCUsIHJnYmEoMjU1LCAxNDQsIDEwMiwgMC41KSA5MS4xNCUpJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgYmxvY2tUaXRsZToge1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIH0sXG4gIGdyaWQ6IHtcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgZ3JpZEdhcDogWyczMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzYwcHgnXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gICAgICAnMWZyJyxcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgJzFmciAxZnInLFxuICAgICAgbnVsbCxcbiAgICAgICcxZnIgMWZyIDFmciAxZnInLFxuICAgIF0sXG4gIH0sXG4gIGljb246IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbWw6ICdhdXRvJyxcbiAgICBtcjogJ2F1dG8nLFxuICAgIHdpZHRoOiBbJzgwcHgnLCBudWxsLCBudWxsLCAnMTEwcHgnXSxcbiAgICBoZWlnaHQ6IFsnODBweCcsIG51bGwsIG51bGwsICcxMTBweCddLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBib3JkZXJSYWRpdXM6IFsnMjBweCcsIG51bGwsIG51bGwsICc0MHB4J10sXG4gICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgJ2xpbmVhci1ncmFkaWVudCgzMjMuOTFkZWcsICNGRkNDNDAgNy4wOSUsIHJnYmEoMjU1LCAyMDQsIDY0LCAwLjUpIDg4LjgyJSknLFxuICB9LFxuICBzZXJ2aWNlQ2FyZDoge1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgaDM6IHtcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGZvbnRTaXplOiBbJzE4cHgnLCBudWxsLCBudWxsLCAzXSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgIG10OiBbJzMwcHgnLCBudWxsLCBudWxsXSxcbiAgICAgIG1iOiBbJzIwcHgnLCBudWxsLCBudWxsXSxcbiAgICB9LFxuICAgIHA6IHtcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGZvbnRTaXplOiBbMCwgbnVsbCwgbnVsbCwgJzE1cHgnXSxcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1heFdpZHRoOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzg0JScsICcxMDAlJ10sXG4gICAgICBteDogW251bGwsIG51bGwsIG51bGwsIG51bGwsICdhdXRvJywgJzAnXSxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sections/customer-support.js\n");

/***/ })

})