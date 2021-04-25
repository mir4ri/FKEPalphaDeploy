webpackHotUpdate_N_E("pages/about",{

/***/ "./components/Nav/ActiveLink.jsx":
/*!***************************************!*\
  !*** ./components/Nav/ActiveLink.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/gtag */ \"./lib/gtag.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/components/Nav/ActiveLink.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar ActiveLink = function ActiveLink(_ref) {\n  var children = _ref.children,\n      router = _ref.router,\n      href = _ref.href;\n  var style = {\n    color: router.pathname.includes(href, 1) ? \"#00C0FF\" : \"none\",\n    background: router.pathname.includes(href, 1) ? \"#e4e4e4\" : \"none\"\n  };\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n    console.log(href);\n\n    var handleRouteChange = function handleRouteChange(href) {\n      _lib_gtag__WEBPACK_IMPORTED_MODULE_2__[\"pageview\"](href);\n    };\n\n    router.push(href);\n    router.events.on(\"routeChangeComplete\", function () {\n      window.scroll({\n        top: 0,\n        left: 0\n      });\n      handleRouteChange;\n    });\n    return function () {\n      router.events.off(\"routeChangeComplete\", handleRouteChange);\n    };\n  };\n\n  console.log([router.pathname, href, router.pathname.startsWith(href.slice(1), 1)]);\n  return __jsx(\"a\", {\n    href: href,\n    onClick: handleClick,\n    style: style,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_c = ActiveLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(ActiveLink));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ActiveLink\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvQWN0aXZlTGluay5qc3g/ZWIzZSJdLCJuYW1lcyI6WyJBY3RpdmVMaW5rIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJocmVmIiwic3R5bGUiLCJjb2xvciIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJiYWNrZ3JvdW5kIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJndGFnIiwicHVzaCIsImV2ZW50cyIsIm9uIiwid2luZG93Iiwic2Nyb2xsIiwidG9wIiwibGVmdCIsIm9mZiIsInN0YXJ0c1dpdGgiLCJzbGljZSIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFnQztBQUFBLE1BQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxNQUFuQkMsTUFBbUIsUUFBbkJBLE1BQW1CO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBRWpELE1BQU1DLEtBQUssR0FBRztBQUNaQyxTQUFLLEVBQUVILE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJKLElBQXpCLEVBQStCLENBQS9CLElBQW9DLFNBQXBDLEdBQWdELE1BRDNDO0FBRVpLLGNBQVUsRUFBRU4sTUFBTSxDQUFDSSxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkosSUFBekIsRUFBK0IsQ0FBL0IsSUFBcUMsU0FBckMsR0FBaUQ7QUFGakQsR0FBZDs7QUFLQSxNQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVYsSUFBWjs7QUFDQSxRQUFNVyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNYLElBQUQsRUFBVTtBQUNsQ1ksd0RBQUEsQ0FBY1osSUFBZDtBQUNELEtBRkQ7O0FBR0FELFVBQU0sQ0FBQ2MsSUFBUCxDQUFZYixJQUFaO0FBQ0FELFVBQU0sQ0FBQ2UsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3QyxZQUFNO0FBQzVDQyxZQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNaQyxXQUFHLEVBQUUsQ0FETztBQUVaQyxZQUFJLEVBQUU7QUFGTSxPQUFkO0FBSUFSLHVCQUFpQjtBQUNsQixLQU5EO0FBT0EsV0FBTyxZQUFNO0FBQ1haLFlBQU0sQ0FBQ2UsTUFBUCxDQUFjTSxHQUFkLENBQWtCLHFCQUFsQixFQUF5Q1QsaUJBQXpDO0FBQ0QsS0FGRDtBQUdELEdBakJEOztBQW1CQUYsU0FBTyxDQUFDQyxHQUFSLENBQVksQ0FBQ1gsTUFBTSxDQUFDSSxRQUFSLEVBQWtCSCxJQUFsQixFQUF3QkQsTUFBTSxDQUFDSSxRQUFQLENBQWdCa0IsVUFBaEIsQ0FBMkJyQixJQUFJLENBQUNzQixLQUFMLENBQVcsQ0FBWCxDQUEzQixFQUEwQyxDQUExQyxDQUF4QixDQUFaO0FBRUEsU0FDRTtBQUFHLFFBQUksRUFBRXRCLElBQVQ7QUFBZSxXQUFPLEVBQUVNLFdBQXhCO0FBQXFDLFNBQUssRUFBRUwsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxRQURILENBREY7QUFLRCxDQWpDRDs7S0FBTUQsVTtBQW1DUyxxRUFBQTBCLDhEQUFVLENBQUMxQixVQUFELENBQXpCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXYvQWN0aXZlTGluay5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBndGFnIGZyb20gXCIuLi8uLi9saWIvZ3RhZ1wiO1xuXG5jb25zdCBBY3RpdmVMaW5rID0gKHsgY2hpbGRyZW4sIHJvdXRlciwgaHJlZiB9KSA9PiB7XG4gIFxuICBjb25zdCBzdHlsZSA9IHtcbiAgICBjb2xvcjogcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKGhyZWYsIDEpID8gXCIjMDBDMEZGXCIgOiBcIm5vbmVcIixcbiAgICBiYWNrZ3JvdW5kOiByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoaHJlZiwgMSkgID8gXCIjZTRlNGU0XCIgOiBcIm5vbmVcIixcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGhyZWYpO1xuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKGhyZWYpID0+IHtcbiAgICAgIGd0YWcucGFnZXZpZXcoaHJlZik7XG4gICAgfTtcbiAgICByb3V0ZXIucHVzaChocmVmKTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiB7XG4gICAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgfSk7XG4gICAgICBoYW5kbGVSb3V0ZUNoYW5nZTtcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcbiAgICB9O1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKFtyb3V0ZXIucGF0aG5hbWUsIGhyZWYsIHJvdXRlci5wYXRobmFtZS5zdGFydHNXaXRoKGhyZWYuc2xpY2UoMSksIDEpXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPXtocmVmfSBvbkNsaWNrPXtoYW5kbGVDbGlja30gc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFjdGl2ZUxpbmspO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav/ActiveLink.jsx\n");

/***/ })

})