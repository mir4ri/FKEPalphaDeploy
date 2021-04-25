webpackHotUpdate_N_E("pages/about",{

/***/ "./components/Nav/ActiveLink.jsx":
/*!***************************************!*\
  !*** ./components/Nav/ActiveLink.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/gtag */ \"./lib/gtag.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/components/Nav/ActiveLink.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar ActiveLink = function ActiveLink(_ref) {\n  var children = _ref.children,\n      router = _ref.router,\n      href = _ref.href;\n  var style = {\n    color: router.pathname === \"/\" ? \"#00C0FF\" : router.pathname.slice(1).includes(href.slice(1)) && href.slice(1) !== \"\" ? \"#00C0FF\" : \"none\",\n    background: router.pathname === \"/\" ? \"#e4e4e4\" : router.pathname.includes(href, 1) && href.slice(1) !== \"\" ? \"#e4e4e4\" : \"none\"\n  };\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n\n    var handleRouteChange = function handleRouteChange(href) {\n      _lib_gtag__WEBPACK_IMPORTED_MODULE_2__[\"pageview\"](href);\n    };\n\n    router.push(href);\n    router.events.on(\"routeChangeComplete\", function () {\n      window.scroll({\n        top: 0,\n        left: 0\n      });\n      handleRouteChange;\n    });\n    return function () {\n      router.events.off(\"routeChangeComplete\", handleRouteChange);\n    };\n  };\n\n  console.log(router.pathname === \"/\");\n  return __jsx(\"a\", {\n    href: href,\n    onClick: handleClick,\n    style: style,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_c = ActiveLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(ActiveLink));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ActiveLink\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvQWN0aXZlTGluay5qc3g/ZWIzZSJdLCJuYW1lcyI6WyJBY3RpdmVMaW5rIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJocmVmIiwic3R5bGUiLCJjb2xvciIsInBhdGhuYW1lIiwic2xpY2UiLCJpbmNsdWRlcyIsImJhY2tncm91bmQiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVJvdXRlQ2hhbmdlIiwiZ3RhZyIsInB1c2giLCJldmVudHMiLCJvbiIsIndpbmRvdyIsInNjcm9sbCIsInRvcCIsImxlZnQiLCJvZmYiLCJjb25zb2xlIiwibG9nIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWdDO0FBQUEsTUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLE1BQW5CQyxNQUFtQixRQUFuQkEsTUFBbUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFFakQsTUFBTUMsS0FBSyxHQUFHO0FBQ1pDLFNBQUssRUFBRUgsTUFBTSxDQUFDSSxRQUFQLEtBQW9CLEdBQXBCLEdBQTBCLFNBQTFCLEdBQXNDSixNQUFNLENBQUNJLFFBQVAsQ0FBZ0JDLEtBQWhCLENBQXNCLENBQXRCLEVBQXlCQyxRQUF6QixDQUFrQ0wsSUFBSSxDQUFDSSxLQUFMLENBQVcsQ0FBWCxDQUFsQyxLQUFvREosSUFBSSxDQUFDSSxLQUFMLENBQVcsQ0FBWCxNQUFrQixFQUF0RSxHQUE0RSxTQUE1RSxHQUF3RixNQUR6SDtBQUVaRSxjQUFVLEVBQUVQLE1BQU0sQ0FBQ0ksUUFBUCxLQUFvQixHQUFwQixHQUEwQixTQUExQixHQUFzQ0osTUFBTSxDQUFDSSxRQUFQLENBQWdCRSxRQUFoQixDQUF5QkwsSUFBekIsRUFBK0IsQ0FBL0IsS0FBcUNBLElBQUksQ0FBQ0ksS0FBTCxDQUFXLENBQVgsTUFBa0IsRUFBdkQsR0FBNkQsU0FBN0QsR0FBeUU7QUFGL0csR0FBZDs7QUFLQSxNQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekJBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxRQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNWLElBQUQsRUFBVTtBQUNsQ1csd0RBQUEsQ0FBY1gsSUFBZDtBQUNELEtBRkQ7O0FBR0FELFVBQU0sQ0FBQ2EsSUFBUCxDQUFZWixJQUFaO0FBQ0FELFVBQU0sQ0FBQ2MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3QyxZQUFNO0FBQzVDQyxZQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNaQyxXQUFHLEVBQUUsQ0FETztBQUVaQyxZQUFJLEVBQUU7QUFGTSxPQUFkO0FBSUFSLHVCQUFpQjtBQUNsQixLQU5EO0FBT0EsV0FBTyxZQUFNO0FBQ1hYLFlBQU0sQ0FBQ2MsTUFBUCxDQUFjTSxHQUFkLENBQWtCLHFCQUFsQixFQUF5Q1QsaUJBQXpDO0FBQ0QsS0FGRDtBQUdELEdBaEJEOztBQWtCRlUsU0FBTyxDQUFDQyxHQUFSLENBQWF0QixNQUFNLENBQUNJLFFBQVAsS0FBb0IsR0FBakM7QUFDRSxTQUNFO0FBQUcsUUFBSSxFQUFFSCxJQUFUO0FBQWUsV0FBTyxFQUFFTyxXQUF4QjtBQUFxQyxTQUFLLEVBQUVOLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsUUFESCxDQURGO0FBS0QsQ0EvQkQ7O0tBQU1ELFU7QUFpQ1MscUVBQUF5Qiw4REFBVSxDQUFDekIsVUFBRCxDQUF6QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2L0FjdGl2ZUxpbmsuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0ICogYXMgZ3RhZyBmcm9tIFwiLi4vLi4vbGliL2d0YWdcIjtcblxuY29uc3QgQWN0aXZlTGluayA9ICh7IGNoaWxkcmVuLCByb3V0ZXIsIGhyZWYgfSkgPT4ge1xuICBcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgY29sb3I6IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgPyBcIiMwMEMwRkZcIiA6IHJvdXRlci5wYXRobmFtZS5zbGljZSgxKS5pbmNsdWRlcyhocmVmLnNsaWNlKDEpKSAmJiBocmVmLnNsaWNlKDEpICE9PSBcIlwiICA/IFwiIzAwQzBGRlwiIDogXCJub25lXCIsXG4gICAgYmFja2dyb3VuZDogcm91dGVyLnBhdGhuYW1lID09PSBcIi9cIiA/IFwiI2U0ZTRlNFwiIDogcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKGhyZWYsIDEpICYmIGhyZWYuc2xpY2UoMSkgIT09IFwiXCIgID8gXCIjZTRlNGU0XCIgOiBcIm5vbmVcIixcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKGhyZWYpID0+IHtcbiAgICAgIGd0YWcucGFnZXZpZXcoaHJlZik7XG4gICAgfTtcbiAgICByb3V0ZXIucHVzaChocmVmKTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiB7XG4gICAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgfSk7XG4gICAgICBoYW5kbGVSb3V0ZUNoYW5nZTtcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcbiAgICB9O1xuICB9O1xuXG5jb25zb2xlLmxvZyggcm91dGVyLnBhdGhuYW1lID09PSBcIi9cIiApO1xuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9e2hyZWZ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBzdHlsZT17c3R5bGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQWN0aXZlTGluayk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav/ActiveLink.jsx\n");

/***/ })

})