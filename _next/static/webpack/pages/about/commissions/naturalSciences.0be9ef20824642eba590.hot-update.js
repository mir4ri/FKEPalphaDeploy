webpackHotUpdate_N_E("pages/about/commissions/naturalSciences",{

/***/ "./components/Nav/ActiveLink.jsx":
/*!***************************************!*\
  !*** ./components/Nav/ActiveLink.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/gtag */ \"./lib/gtag.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/components/Nav/ActiveLink.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar ActiveLink = function ActiveLink(_ref) {\n  var children = _ref.children,\n      router = _ref.router,\n      href = _ref.href;\n  var style = {\n    color: router.pathname.includes(href) ? \"#00C0FF\" : \"none\",\n    background: router.pathname.includes(href) ? \"#e4e4e4\" : \"none\"\n  };\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n    console.log(href);\n\n    var handleRouteChange = function handleRouteChange(href) {\n      _lib_gtag__WEBPACK_IMPORTED_MODULE_2__[\"pageview\"](href);\n    };\n\n    router.push(href);\n    router.events.on(\"routeChangeComplete\", function () {\n      window.scroll({\n        top: 0,\n        left: 0\n      });\n      handleRouteChange;\n    });\n    return function () {\n      router.events.off(\"routeChangeComplete\", handleRouteChange);\n    };\n  };\n\n  console.log([router.pathname, href]);\n  return __jsx(\"a\", {\n    href: href,\n    onClick: handleClick,\n    style: style,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_c = ActiveLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(ActiveLink));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ActiveLink\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvQWN0aXZlTGluay5qc3g/ZWIzZSJdLCJuYW1lcyI6WyJBY3RpdmVMaW5rIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJocmVmIiwic3R5bGUiLCJjb2xvciIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJiYWNrZ3JvdW5kIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJndGFnIiwicHVzaCIsImV2ZW50cyIsIm9uIiwid2luZG93Iiwic2Nyb2xsIiwidG9wIiwibGVmdCIsIm9mZiIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFnQztBQUFBLE1BQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxNQUFuQkMsTUFBbUIsUUFBbkJBLE1BQW1CO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBRWpELE1BQU1DLEtBQUssR0FBRztBQUNaQyxTQUFLLEVBQUVILE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJKLElBQXpCLElBQWlDLFNBQWpDLEdBQTZDLE1BRHhDO0FBRVpLLGNBQVUsRUFBRU4sTUFBTSxDQUFDSSxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkosSUFBekIsSUFBaUMsU0FBakMsR0FBNkM7QUFGN0MsR0FBZDs7QUFLQSxNQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVYsSUFBWjs7QUFDQSxRQUFNVyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNYLElBQUQsRUFBVTtBQUNsQ1ksd0RBQUEsQ0FBY1osSUFBZDtBQUNELEtBRkQ7O0FBR0FELFVBQU0sQ0FBQ2MsSUFBUCxDQUFZYixJQUFaO0FBQ0FELFVBQU0sQ0FBQ2UsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3QyxZQUFNO0FBQzVDQyxZQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNaQyxXQUFHLEVBQUUsQ0FETztBQUVaQyxZQUFJLEVBQUU7QUFGTSxPQUFkO0FBSUFSLHVCQUFpQjtBQUNsQixLQU5EO0FBT0EsV0FBTyxZQUFNO0FBQ1haLFlBQU0sQ0FBQ2UsTUFBUCxDQUFjTSxHQUFkLENBQWtCLHFCQUFsQixFQUF5Q1QsaUJBQXpDO0FBQ0QsS0FGRDtBQUdELEdBakJEOztBQW1CQUYsU0FBTyxDQUFDQyxHQUFSLENBQVksQ0FBQ1gsTUFBTSxDQUFDSSxRQUFSLEVBQWtCSCxJQUFsQixDQUFaO0FBRUEsU0FDRTtBQUFHLFFBQUksRUFBRUEsSUFBVDtBQUFlLFdBQU8sRUFBRU0sV0FBeEI7QUFBcUMsU0FBSyxFQUFFTCxLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILFFBREgsQ0FERjtBQUtELENBakNEOztLQUFNRCxVO0FBbUNTLHFFQUFBd0IsOERBQVUsQ0FBQ3hCLFVBQUQsQ0FBekIiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9BY3RpdmVMaW5rLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGd0YWcgZnJvbSBcIi4uLy4uL2xpYi9ndGFnXCI7XG5cbmNvbnN0IEFjdGl2ZUxpbmsgPSAoeyBjaGlsZHJlbiwgcm91dGVyLCBocmVmIH0pID0+IHtcbiAgXG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGNvbG9yOiByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoaHJlZikgPyBcIiMwMEMwRkZcIiA6IFwibm9uZVwiLFxuICAgIGJhY2tncm91bmQ6IHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyhocmVmKSA/IFwiI2U0ZTRlNFwiIDogXCJub25lXCIsXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhocmVmKTtcbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9IChocmVmKSA9PiB7XG4gICAgICBndGFnLnBhZ2V2aWV3KGhyZWYpO1xuICAgIH07XG4gICAgcm91dGVyLnB1c2goaHJlZik7XG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4ge1xuICAgICAgd2luZG93LnNjcm9sbCh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgIH0pO1xuICAgICAgaGFuZGxlUm91dGVDaGFuZ2U7XG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgfTtcbiAgfTtcblxuICBjb25zb2xlLmxvZyhbcm91dGVyLnBhdGhuYW1lLCBocmVmXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPXtocmVmfSBvbkNsaWNrPXtoYW5kbGVDbGlja30gc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFjdGl2ZUxpbmspO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav/ActiveLink.jsx\n");

/***/ })

})