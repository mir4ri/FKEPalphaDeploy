webpackHotUpdate_N_E("pages/entrants",{

/***/ "./pages/entrants/index.jsx":
/*!**********************************!*\
  !*** ./pages/entrants/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout/index.jsx\");\n/* harmony import */ var _components_NavButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NavButton */ \"./components/NavButton/index.jsx\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Card */ \"./components/Card/index.jsx\");\n/* harmony import */ var _api_course_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/course.json */ \"./api/course.json\");\nvar _api_course_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../api/course.json */ \"./api/course.json\", 1);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ \"./pages/entrants/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/client/pages/entrants/index.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar Entrants = function Entrants(_ref) {\n  var className = _ref.className;\n  return __jsx(\"main\", {\n    className: className,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 3\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, \"\\u0424\\u041A\\u0415\\u041F - \\u0410\\u0431\\u0456\\u0442\\u0443\\u0440\\u0456\\u0454\\u043D\\u0442\\u0430\\u043C\")), __jsx(\"h2\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_6___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, \"\\u0410\\u0431\\u0456\\u0442\\u0443\\u0440\\u0456\\u0454\\u043D\\u0442\\u0430\\u043C\"), __jsx(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_6___default.a.linkBtns,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(_components_NavButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    text: \"Підготовчі курси\",\n    NavLink: \"/entrants/preparatoryCourses\",\n    textColor: \"#00C0FF\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }), __jsx(_components_NavButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    text: \"Правила прийому та інші нормативні документи\",\n    NavLink: \"/entrants/rules\",\n    textColor: \"#141414\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), __jsx(_components_NavButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    text: \"Програми вступних випробувань\",\n    NavLink: \"/entrants/examinationPrograms\",\n    textColor: \"#141414\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  })), __jsx(\"h3\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_6___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, \"\\u0421\\u043F\\u0435\\u0446\\u0456\\u0430\\u043B\\u044C\\u043D\\u043E\\u0441\\u0442\\u0456\"), __jsx(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_6___default.a.about,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, _api_course_json__WEBPACK_IMPORTED_MODULE_5__.map(function (course, index) {\n    return __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      course: course,\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }\n    });\n  })));\n};\n\n_c = Entrants;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Entrants));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Entrants\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW50cmFudHMvaW5kZXguanN4PzNiM2MiXSwibmFtZXMiOlsiRW50cmFudHMiLCJjbGFzc05hbWUiLCJlbnRyYW50cyIsInRpdGxlIiwibGlua0J0bnMiLCJhYm91dCIsIm1hcCIsImNvdXJzZSIsImluZGV4Iiwid2l0aExheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxTQUNmO0FBQU0sYUFBUyxFQUFFQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyR0FERixDQURGLEVBSUU7QUFBSSxhQUFTLEVBQUVDLGtEQUFRLENBQUNDLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0ZBSkYsRUFLRTtBQUFLLGFBQVMsRUFBRUQsa0RBQVEsQ0FBQ0UsUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFDRSxRQUFJLEVBQUUsa0JBRFI7QUFFRSxXQUFPLEVBQUUsOEJBRlg7QUFHRSxhQUFTLEVBQUUsU0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRSxNQUFDLDZEQUFEO0FBQ0UsUUFBSSxFQUFFLDhDQURSO0FBRUUsV0FBTyxFQUFFLGlCQUZYO0FBR0UsYUFBUyxFQUFFLFNBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBV0UsTUFBQyw2REFBRDtBQUNFLFFBQUksRUFBRSwrQkFEUjtBQUVFLFdBQU8sRUFBRSwrQkFGWDtBQUdFLGFBQVMsRUFBRSxTQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQUxGLEVBMkJFO0FBQUksYUFBUyxFQUFFRixrREFBUSxDQUFDQyxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNGQTNCRixFQTRCRTtBQUFLLGFBQVMsRUFBRUQsa0RBQVEsQ0FBQ0csS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSw2Q0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsTUFBRCxFQUFTQyxLQUFUO0FBQUEsV0FDVCxNQUFDLHdEQUFEO0FBQU0sWUFBTSxFQUFFRCxNQUFkO0FBQXNCLFNBQUcsRUFBRUMsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURTO0FBQUEsR0FBVixDQURILENBNUJGLENBRGU7QUFBQSxDQUFqQjs7S0FBTVIsUTtBQXFDUyxxRUFBQVMsa0VBQVUsQ0FBQ1QsUUFBRCxDQUF6QiIsImZpbGUiOiIuL3BhZ2VzL2VudHJhbnRzL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB3aXRoTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IE5hdkJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZCdXR0b25cIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhcmRcIjtcblxuaW1wb3J0IGFib3V0IGZyb20gXCIuLi8uLi9hcGkvY291cnNlLmpzb25cIjtcblxuaW1wb3J0IGVudHJhbnRzIGZyb20gXCIuL3N0eWxlLnNjc3NcIjtcblxuY29uc3QgRW50cmFudHMgPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxuICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+0KTQmtCV0J8gLSDQkNCx0ZbRgtGD0YDRltGU0L3RgtCw0Lw8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8aDIgY2xhc3NOYW1lPXtlbnRyYW50cy50aXRsZX0+0JDQsdGW0YLRg9GA0ZbRlNC90YLQsNC8PC9oMj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17ZW50cmFudHMubGlua0J0bnN9PlxuICAgICAgPE5hdkJ1dHRvblxuICAgICAgICB0ZXh0PXtcItCf0ZbQtNCz0L7RgtC+0LLRh9GWINC60YPRgNGB0LhcIn1cbiAgICAgICAgTmF2TGluaz17XCIvZW50cmFudHMvcHJlcGFyYXRvcnlDb3Vyc2VzXCJ9XG4gICAgICAgIHRleHRDb2xvcj17XCIjMDBDMEZGXCJ9XG4gICAgICAvPlxuICAgICAgPE5hdkJ1dHRvblxuICAgICAgICB0ZXh0PXtcItCf0YDQsNCy0LjQu9CwINC/0YDQuNC50L7QvNGDINGC0LAg0ZbQvdGI0ZYg0L3QvtGA0LzQsNGC0LjQstC90ZYg0LTQvtC60YPQvNC10L3RgtC4XCJ9XG4gICAgICAgIE5hdkxpbms9e1wiL2VudHJhbnRzL3J1bGVzXCJ9XG4gICAgICAgIHRleHRDb2xvcj17XCIjMTQxNDE0XCJ9XG4gICAgICAvPlxuICAgICAgPE5hdkJ1dHRvblxuICAgICAgICB0ZXh0PXtcItCf0YDQvtCz0YDQsNC80Lgg0LLRgdGC0YPQv9C90LjRhSDQstC40L/RgNC+0LHRg9Cy0LDQvdGMXCJ9XG4gICAgICAgIE5hdkxpbms9e1wiL2VudHJhbnRzL2V4YW1pbmF0aW9uUHJvZ3JhbXNcIn1cbiAgICAgICAgdGV4dENvbG9yPXtcIiMxNDE0MTRcIn1cbiAgICAgIC8+XG4gICAgICB7LyogPE5hdkJ1dHRvblxuICAgICAgICB0ZXh0PXtcItCG0L3RhNC+0YDQvNCw0YbRltGPINC/0YDQviDQt9Cw0YDQsNGF0YPQstCw0L3QvdGPXCJ9XG4gICAgICAgIE5hdkxpbms9e1wiI1wifVxuICAgICAgICB0ZXh0Q29sb3I9e1wiIzE0MTQxNFwifVxuICAgICAgLz4gKi99XG4gICAgPC9kaXY+XG4gICAgPGgzIGNsYXNzTmFtZT17ZW50cmFudHMudGl0bGV9PtCh0L/QtdGG0ZbQsNC70YzQvdC+0YHRgtGWPC9oMz5cbiAgICA8ZGl2IGNsYXNzTmFtZT17ZW50cmFudHMuYWJvdXR9PlxuICAgICAge2Fib3V0Lm1hcCgoY291cnNlLCBpbmRleCkgPT4gKFxuICAgICAgICA8Q2FyZCBjb3Vyc2U9e2NvdXJzZX0ga2V5PXtpbmRleH0gLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICA8L21haW4+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoTGF5b3V0KEVudHJhbnRzKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/entrants/index.jsx\n");

/***/ })

})