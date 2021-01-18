webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./pages/post/[id].jsx":
/*!*****************************!*\
  !*** ./pages/post/[id].jsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-share */ \"./node_modules/react-share/es/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header/index.jsx\");\n/* harmony import */ var _components_MobileNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/MobileNav */ \"./components/MobileNav/index.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer/index.jsx\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Nav */ \"./components/Nav/index.jsx\");\n/* harmony import */ var _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Layout/layout.scss */ \"./components/Layout/layout.scss\");\n/* harmony import */ var _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.scss */ \"./pages/post/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_10__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/client/pages/post/[id].jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n // поки Next.js не пофіксить HOC\n\n\n\n\nvar Post = function Post(_ref) {\n  _s();\n\n  var className = _ref.className,\n      post = _ref.post;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"https://www.mir4ri.github.io\".concat(router.asPath)),\n      copySuccess = _useState[0],\n      setCopySuccess = _useState[1];\n\n  if (!post.id) return __jsx(\"p\", {\n    style: {\n      textAlign: \"center\",\n      fontWeight: \"bold\"\n    },\n    className: className,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, \"\\u0423\\u043F\\u0441... \\u0422\\u0430\\u043A\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0443 \\u0449\\u0435 \\u043D\\u0435 \\u0456\\u0441\\u043D\\u0443\\u0454\", \" \", __jsx(\"button\", {\n    onClick: function onClick() {\n      return router.back();\n    },\n    style: {\n      display: \"block\",\n      margin: \"10px auto\",\n      border: \"none\",\n      background: \"none\",\n      color: \"#19b5fe\",\n      fontSize: \"16px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"\\u0412\\u0435\\u0440\\u043D\\u0443\\u0442\\u0438\\u0441\\u044F \\u043D\\u0430\\u0437\\u0430\\u0434\"));\n  return __jsx(\"div\", {\n    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_8___default.a.alignContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, \"\\u0424\\u041A\\u0415\\u041F - \", post.title), __jsx(\"meta\", {\n    name: \"theme-color\",\n    content: \"#558af1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"initial-scale=1.0, width=device-width\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/static/img/fav.svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_8___default.a.layoutContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_8___default.a.content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, post.photo ? __jsx(\"img\", {\n    src: post.photo,\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.photo,\n    alt: post.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }) : undefined, __jsx(\"h2\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, post.title), __jsx(\"p\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.text,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, post.text), __jsx(\"p\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.text,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }, post.paragraph), __jsx(\"p\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.text,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, post.end), __jsx(react_share__WEBPACK_IMPORTED_MODULE_3__[\"FacebookShareButton\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }), __jsx(react_share__WEBPACK_IMPORTED_MODULE_3__[\"TwitterShareButton\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }), __jsx(\"span\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.date,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }, moment__WEBPACK_IMPORTED_MODULE_9___default()(post.date).locale(\"uk\").fromNow()), __jsx(_components_MobileNav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 11\n    }\n  }))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Post, \"jQiC48zbvLNwMMBrW221dYing6o=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanN4P2JiZjYiXSwibmFtZXMiOlsiUG9zdCIsImNsYXNzTmFtZSIsInBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImFzUGF0aCIsImNvcHlTdWNjZXNzIiwic2V0Q29weVN1Y2Nlc3MiLCJpZCIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJiYWNrIiwiZGlzcGxheSIsIm1hcmdpbiIsImJvcmRlciIsImJhY2tncm91bmQiLCJjb2xvciIsImZvbnRTaXplIiwiY29udGFpbmVyIiwiYWxpZ25Db250YWluZXIiLCJ0aXRsZSIsImxheW91dENvbnRhaW5lciIsImNvbnRlbnQiLCJwaG90byIsInN0eWxlcyIsInVuZGVmaW5lZCIsInRleHQiLCJwYXJhZ3JhcGgiLCJlbmQiLCJkYXRlIiwibW9tZW50IiwibG9jYWxlIiwiZnJvbU5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7Q0FDNkQ7O0FBRTdEO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsU0FBc0IsUUFBdEJBLFNBQXNCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3BDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG9DLGtCQUVFQyxzREFBUSx1Q0FDYkYsTUFBTSxDQUFDRyxNQURNLEVBRlY7QUFBQSxNQUU3QkMsV0FGNkI7QUFBQSxNQUVoQkMsY0FGZ0I7O0FBTXBDLE1BQUksQ0FBQ04sSUFBSSxDQUFDTyxFQUFWLEVBQ0UsT0FDRTtBQUNFLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUUsUUFBYjtBQUF1QkMsZ0JBQVUsRUFBRTtBQUFuQyxLQURUO0FBRUUsYUFBUyxFQUFFVixTQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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S0FDR0MsNkNBQU0sQ0FBQzdCLElBQUksQ0FBQzRCLElBQU4sQ0FBTixDQUFrQkUsTUFBbEIsQ0FBeUIsSUFBekIsRUFBK0JDLE9BQS9CLEVBREgsQ0ExQkYsRUE2QkUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0JGLENBRkYsQ0FSRixFQTBDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQ0YsQ0FERjtBQThDRCxDQTNFRDs7R0FBTWpDLEk7VUFDV0kscUQ7OztLQURYSixJOztBQXVHU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tpZF0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRmFjZWJvb2tTaGFyZUJ1dHRvbixcbiAgRmFjZWJvb2tNZXNzZW5nZXJTaGFyZUJ1dHRvbixcbiAgVGVsZWdyYW1TaGFyZUJ1dHRvbixcbiAgVHdpdHRlclNoYXJlQnV0dG9uLFxuICBWaWJlclNoYXJlQnV0dG9uLFxufSBmcm9tIFwicmVhY3Qtc2hhcmVcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBNb2JpbGVOYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTW9iaWxlTmF2XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZcIjtcbmltcG9ydCBjb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L2xheW91dC5zY3NzXCI7IC8vINC/0L7QutC4IE5leHQuanMg0L3QtSDQv9C+0YTRltC60YHQuNGC0YwgSE9DXG5cbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xuXG5jb25zdCBQb3N0ID0gKHsgY2xhc3NOYW1lLCBwb3N0IH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtjb3B5U3VjY2Vzcywgc2V0Q29weVN1Y2Nlc3NdID0gdXNlU3RhdGUoXG4gICAgYGh0dHBzOi8vd3d3Lm1pcjRyaS5naXRodWIuaW8ke3JvdXRlci5hc1BhdGh9YFxuICApO1xuXG4gIGlmICghcG9zdC5pZClcbiAgICByZXR1cm4gKFxuICAgICAgPHBcbiAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgID5cbiAgICAgICAg0KPQv9GBLi4uINCi0LDQutC+0LPQviDQv9C+0YHRgtGDINGJ0LUg0L3QtSDRltGB0L3Rg9GUe1wiIFwifVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggYXV0b1wiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwibm9uZVwiLFxuICAgICAgICAgICAgY29sb3I6IFwiIzE5YjVmZVwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICDQktC10YDQvdGD0YLQuNGB0Y8g0L3QsNC30LDQtFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvcD5cbiAgICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lci5hbGlnbkNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPtCk0JrQldCfIC0ge3Bvc3QudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiM1NThhZjFcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9pbWcvZmF2LnN2Z1wiPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXIubGF5b3V0Q29udGFpbmVyfT5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyLmNvbnRlbnR9PlxuICAgICAgICAgIHtwb3N0LnBob3RvID8gKFxuICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QucGhvdG99IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfSBhbHQ9e3Bvc3QudGl0bGV9IC8+XG4gICAgICAgICAgKSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntwb3N0LnRpdGxlfTwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e3Bvc3QudGV4dH08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e3Bvc3QucGFyYWdyYXBofTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT57cG9zdC5lbmR9PC9wPlxuICAgICAgICAgIHsvKiA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29weUJ0bn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoYG1pcjRyaS5naXRodWIuaW8ke3JvdXRlci5hc1BhdGh9YCk7XG4gICAgICAgICAgICAgIHNldENvcHlTdWNjZXNzKFwi0J/QvtGB0LjQu9Cw0L3QvdGPINGB0LrQvtC/0ZbQudC+0LLQsNC90L5cIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e2NvcHlTdWNjZXNzfVxuICAgICAgICAgIC8+ICovfVxuICAgICAgICAgIHsvKiA8U2hhcmVMaXN0PiAqL31cbiAgICAgICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvbj5cbiAgICAgICAgICAgIHsvKiA8RmFjZWJvb2tJY29uIHNpemU9e3NpemV9IC8+ICovfVxuICAgICAgICAgIDwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cblxuICAgICAgICAgIDxUd2l0dGVyU2hhcmVCdXR0b24+XG4gICAgICAgICAgICB7LyogPFR3aXR0ZXJJY29uIHNpemU9e3NpemV9IC8+ICovfVxuICAgICAgICAgIDwvVHdpdHRlclNoYXJlQnV0dG9uPlxuICAgICAgICAgIHsvKiA8L1NoYXJlTGlzdD4gKi99XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XG4gICAgICAgICAgICB7bW9tZW50KHBvc3QuZGF0ZSkubG9jYWxlKFwidWtcIikuZnJvbU5vdygpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8TW9iaWxlTmF2IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBvc3RzID0gKGF3YWl0IGltcG9ydChcIi4uLy4uL2FwaS9uZXdzLmpzb25cIikpLmRlZmF1bHQ7XG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChzbHVnKSA9PiAoeyBwYXJhbXM6IHsgaWQ6IHNsdWcuaWQudG9TdHJpbmcoKSB9IH0pKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBwb3N0cyA9IChhd2FpdCBpbXBvcnQoXCIuLi8uLi9hcGkvbmV3cy5qc29uXCIpKS5kZWZhdWx0O1xuICBjb25zdCBwb3N0ID0gcG9zdHMuZmluZCgoeCkgPT4geC5pZCA9PSBwYXJhbXMuaWQpOyAvLyAqIHguaWQgU3RyaW5nLCBwYXJhbXMuaWQgTnVtYmVyXG5cbiAgaWYgKCFwb3N0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0LFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[id].jsx\n");

/***/ })

})