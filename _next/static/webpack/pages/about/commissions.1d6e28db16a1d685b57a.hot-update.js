webpackHotUpdate_N_E("pages/about/commissions",{

/***/ "./components/Nav/ActiveLink.jsx":
/*!***************************************!*\
  !*** ./components/Nav/ActiveLink.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/gtag */ \"./lib/gtag.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/components/Nav/ActiveLink.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar ActiveLink = function ActiveLink(_ref) {\n  var children = _ref.children,\n      router = _ref.router,\n      href = _ref.href;\n  var style = {\n    color: router.pathname === href ? \"#00C0FF\" : router.pathname.slice(1).includes(href.slice(1)) && href.slice(1) !== \"\" ? \"#00C0FF\" : \"none\",\n    background: router.pathname === href ? \"#e4e4e4\" : router.pathname.includes(href, 1) && href.slice(1) !== \"\" ? \"#e4e4e4\" : \"none\"\n  };\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n\n    var handleRouteChange = function handleRouteChange(href) {\n      _lib_gtag__WEBPACK_IMPORTED_MODULE_2__[\"pageview\"](href);\n    };\n\n    router.push(href);\n    router.events.on(\"routeChangeComplete\", function () {\n      window.scroll({\n        top: 0,\n        left: 0\n      });\n      handleRouteChange;\n    });\n    return function () {\n      router.events.off(\"routeChangeComplete\", handleRouteChange);\n    };\n  };\n\n  return __jsx(\"a\", {\n    href: href,\n    onClick: handleClick,\n    style: style,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_c = ActiveLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(ActiveLink));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ActiveLink\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvQWN0aXZlTGluay5qc3g/ZWIzZSJdLCJuYW1lcyI6WyJBY3RpdmVMaW5rIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJocmVmIiwic3R5bGUiLCJjb2xvciIsInBhdGhuYW1lIiwic2xpY2UiLCJpbmNsdWRlcyIsImJhY2tncm91bmQiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVJvdXRlQ2hhbmdlIiwiZ3RhZyIsInB1c2giLCJldmVudHMiLCJvbiIsIndpbmRvdyIsInNjcm9sbCIsInRvcCIsImxlZnQiLCJvZmYiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBZ0M7QUFBQSxNQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsTUFBbkJDLE1BQW1CLFFBQW5CQSxNQUFtQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUVqRCxNQUFNQyxLQUFLLEdBQUc7QUFDWkMsU0FBSyxFQUFFSCxNQUFNLENBQUNJLFFBQVAsS0FBb0JILElBQXBCLEdBQTJCLFNBQTNCLEdBQXVDRCxNQUFNLENBQUNJLFFBQVAsQ0FBZ0JDLEtBQWhCLENBQXNCLENBQXRCLEVBQXlCQyxRQUF6QixDQUFrQ0wsSUFBSSxDQUFDSSxLQUFMLENBQVcsQ0FBWCxDQUFsQyxLQUFvREosSUFBSSxDQUFDSSxLQUFMLENBQVcsQ0FBWCxNQUFrQixFQUF0RSxHQUE0RSxTQUE1RSxHQUF3RixNQUQxSDtBQUVaRSxjQUFVLEVBQUVQLE1BQU0sQ0FBQ0ksUUFBUCxLQUFvQkgsSUFBcEIsR0FBMkIsU0FBM0IsR0FBdUNELE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQkUsUUFBaEIsQ0FBeUJMLElBQXpCLEVBQStCLENBQS9CLEtBQXFDQSxJQUFJLENBQUNJLEtBQUwsQ0FBVyxDQUFYLE1BQWtCLEVBQXZELEdBQTZELFNBQTdELEdBQXlFO0FBRmhILEdBQWQ7O0FBS0EsTUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCQSxLQUFDLENBQUNDLGNBQUY7O0FBQ0EsUUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDVixJQUFELEVBQVU7QUFDbENXLHdEQUFBLENBQWNYLElBQWQ7QUFDRCxLQUZEOztBQUdBRCxVQUFNLENBQUNhLElBQVAsQ0FBWVosSUFBWjtBQUNBRCxVQUFNLENBQUNjLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0MsWUFBTTtBQUM1Q0MsWUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDWkMsV0FBRyxFQUFFLENBRE87QUFFWkMsWUFBSSxFQUFFO0FBRk0sT0FBZDtBQUlBUix1QkFBaUI7QUFDbEIsS0FORDtBQU9BLFdBQU8sWUFBTTtBQUNYWCxZQUFNLENBQUNjLE1BQVAsQ0FBY00sR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNULGlCQUF6QztBQUNELEtBRkQ7QUFHRCxHQWhCRDs7QUFpQkEsU0FDRTtBQUFHLFFBQUksRUFBRVYsSUFBVDtBQUFlLFdBQU8sRUFBRU8sV0FBeEI7QUFBcUMsU0FBSyxFQUFFTixLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILFFBREgsQ0FERjtBQUtELENBN0JEOztLQUFNRCxVO0FBK0JTLHFFQUFBdUIsOERBQVUsQ0FBQ3ZCLFVBQUQsQ0FBekIiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9BY3RpdmVMaW5rLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGd0YWcgZnJvbSBcIi4uLy4uL2xpYi9ndGFnXCI7XG5cbmNvbnN0IEFjdGl2ZUxpbmsgPSAoeyBjaGlsZHJlbiwgcm91dGVyLCBocmVmIH0pID0+IHtcbiAgXG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGNvbG9yOiByb3V0ZXIucGF0aG5hbWUgPT09IGhyZWYgPyBcIiMwMEMwRkZcIiA6IHJvdXRlci5wYXRobmFtZS5zbGljZSgxKS5pbmNsdWRlcyhocmVmLnNsaWNlKDEpKSAmJiBocmVmLnNsaWNlKDEpICE9PSBcIlwiICA/IFwiIzAwQzBGRlwiIDogXCJub25lXCIsXG4gICAgYmFja2dyb3VuZDogcm91dGVyLnBhdGhuYW1lID09PSBocmVmID8gXCIjZTRlNGU0XCIgOiByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoaHJlZiwgMSkgJiYgaHJlZi5zbGljZSgxKSAhPT0gXCJcIiAgPyBcIiNlNGU0ZTRcIiA6IFwibm9uZVwiLFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAoaHJlZikgPT4ge1xuICAgICAgZ3RhZy5wYWdldmlldyhocmVmKTtcbiAgICB9O1xuICAgIHJvdXRlci5wdXNoKGhyZWYpO1xuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IHtcbiAgICAgIHdpbmRvdy5zY3JvbGwoe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICB9KTtcbiAgICAgIGhhbmRsZVJvdXRlQ2hhbmdlO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIH07XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGEgaHJlZj17aHJlZn0gb25DbGljaz17aGFuZGxlQ2xpY2t9IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9hPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBY3RpdmVMaW5rKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav/ActiveLink.jsx\n");

/***/ })

})