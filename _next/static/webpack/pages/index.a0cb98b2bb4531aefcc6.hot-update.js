webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Nav/ActiveLink.jsx":
/*!***************************************!*\
  !*** ./components/Nav/ActiveLink.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/client/components/Nav/ActiveLink.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar ActiveLink = function ActiveLink(_ref) {\n  _s();\n\n  var children = _ref.children,\n      router = _ref.router,\n      href = _ref.href;\n  var style = {\n    color: router.pathname === href ? \"#00C0FF\" : \"none\",\n    background: router.pathname === href ? \"#e4e4e4\" : \"none\"\n  };\n  useEffect(function () {}, [router.events]);\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n\n    var handleRouteChange = function handleRouteChange(href) {\n      gtag.pageview(href);\n    };\n\n    router.push(href);\n    router.events.on(\"routeChangeComplete\", function () {\n      window.scroll({\n        top: 0,\n        left: 0\n      });\n      handleRouteChange;\n    });\n    return function () {\n      router.events.off(\"routeChangeComplete\", handleRouteChange);\n    };\n  };\n\n  return __jsx(\"a\", {\n    href: href,\n    onClick: handleClick,\n    style: style,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_s(ActiveLink, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = ActiveLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(ActiveLink));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ActiveLink\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvQWN0aXZlTGluay5qc3g/ZWIzZSJdLCJuYW1lcyI6WyJBY3RpdmVMaW5rIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJocmVmIiwic3R5bGUiLCJjb2xvciIsInBhdGhuYW1lIiwiYmFja2dyb3VuZCIsInVzZUVmZmVjdCIsImV2ZW50cyIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJndGFnIiwicGFnZXZpZXciLCJwdXNoIiwib24iLCJ3aW5kb3ciLCJzY3JvbGwiLCJ0b3AiLCJsZWZ0Iiwib2ZmIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFnQztBQUFBOztBQUFBLE1BQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxNQUFuQkMsTUFBbUIsUUFBbkJBLE1BQW1CO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2pELE1BQU1DLEtBQUssR0FBRztBQUNaQyxTQUFLLEVBQUVILE1BQU0sQ0FBQ0ksUUFBUCxLQUFvQkgsSUFBcEIsR0FBMkIsU0FBM0IsR0FBdUMsTUFEbEM7QUFFWkksY0FBVSxFQUFFTCxNQUFNLENBQUNJLFFBQVAsS0FBb0JILElBQXBCLEdBQTJCLFNBQTNCLEdBQXVDO0FBRnZDLEdBQWQ7QUFLQUssV0FBUyxDQUFDLFlBQU0sQ0FBRSxDQUFULEVBQVcsQ0FBQ04sTUFBTSxDQUFDTyxNQUFSLENBQVgsQ0FBVDs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekJBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxRQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNWLElBQUQsRUFBVTtBQUNsQ1csVUFBSSxDQUFDQyxRQUFMLENBQWNaLElBQWQ7QUFDRCxLQUZEOztBQUdBRCxVQUFNLENBQUNjLElBQVAsQ0FBWWIsSUFBWjtBQUNBRCxVQUFNLENBQUNPLE1BQVAsQ0FBY1EsRUFBZCxDQUFpQixxQkFBakIsRUFBd0MsWUFBTTtBQUM1Q0MsWUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDWkMsV0FBRyxFQUFFLENBRE87QUFFWkMsWUFBSSxFQUFFO0FBRk0sT0FBZDtBQUlBUix1QkFBaUI7QUFDbEIsS0FORDtBQU9BLFdBQU8sWUFBTTtBQUNYWCxZQUFNLENBQUNPLE1BQVAsQ0FBY2EsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNULGlCQUF6QztBQUNELEtBRkQ7QUFHRCxHQWhCRDs7QUFrQkEsU0FDRTtBQUFHLFFBQUksRUFBRVYsSUFBVDtBQUFlLFdBQU8sRUFBRU8sV0FBeEI7QUFBcUMsU0FBSyxFQUFFTixLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILFFBREgsQ0FERjtBQUtELENBL0JEOztHQUFNRCxVOztLQUFBQSxVO0FBaUNTLHFFQUFBdUIsOERBQVUsQ0FBQ3ZCLFVBQUQsQ0FBekIiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9BY3RpdmVMaW5rLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgQWN0aXZlTGluayA9ICh7IGNoaWxkcmVuLCByb3V0ZXIsIGhyZWYgfSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBjb2xvcjogcm91dGVyLnBhdGhuYW1lID09PSBocmVmID8gXCIjMDBDMEZGXCIgOiBcIm5vbmVcIixcbiAgICBiYWNrZ3JvdW5kOiByb3V0ZXIucGF0aG5hbWUgPT09IGhyZWYgPyBcIiNlNGU0ZTRcIiA6IFwibm9uZVwiLFxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSwgW3JvdXRlci5ldmVudHNdKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKGhyZWYpID0+IHtcbiAgICAgIGd0YWcucGFnZXZpZXcoaHJlZik7XG4gICAgfTtcbiAgICByb3V0ZXIucHVzaChocmVmKTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiB7XG4gICAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgfSk7XG4gICAgICBoYW5kbGVSb3V0ZUNoYW5nZTtcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGEgaHJlZj17aHJlZn0gb25DbGljaz17aGFuZGxlQ2xpY2t9IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9hPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBY3RpdmVMaW5rKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav/ActiveLink.jsx\n");

/***/ })

})