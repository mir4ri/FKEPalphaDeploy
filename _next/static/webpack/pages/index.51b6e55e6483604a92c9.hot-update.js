webpackHotUpdate_N_E("pages/index",{

/***/ "./components/News/index.jsx":
/*!***********************************!*\
  !*** ./components/News/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _news_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news.scss */ \"./components/News/news.scss\");\n/* harmony import */ var _news_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_news_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/kep/components/News/index.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n// import moment from \"moment\";\n\n\nvar News = function News(props) {\n  console.log(props.date);\n  return __jsx(\"div\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, props.post.photo ? __jsx(\"div\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.img,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: props.post.photo,\n    alt: \"titleImg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 11\n    }\n  })) : undefined, __jsx(\"h2\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, props.post.title), __jsx(\"p\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.text,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, props.post.text), __jsx(\"div\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tag,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.category,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, props.post.category), __jsx(\"span\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.date,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, props.date)));\n};\n\n_c = News;\n\nNews.getStaticProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n    var query, moment;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref.query;\n            _context.next = 3;\n            return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! moment */ \"./node_modules/moment/moment.js\", 7));\n\n          case 3:\n            moment = _context.sent[\"default\"]();\n            return _context.abrupt(\"return\", {\n              date: moment.format(\"dddd D MMMM YYYY\"),\n              post: props.post[query.id]\n            });\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}(); // .locale(\"uk\").fromNow()\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\n\nvar _c;\n\n$RefreshReg$(_c, \"News\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdzL2luZGV4LmpzeD9lYjkyIl0sIm5hbWVzIjpbIk5ld3MiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRlIiwicG9zdFN0eWxlIiwicG9zdCIsInBob3RvIiwiaW1nIiwidW5kZWZpbmVkIiwidGl0bGUiLCJ0ZXh0IiwidGFnIiwiY2F0ZWdvcnkiLCJnZXRTdGF0aWNQcm9wcyIsInF1ZXJ5IiwibW9tZW50IiwiZm9ybWF0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUN0QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csSUFBbEI7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFFQyxpREFBUyxDQUFDQyxJQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLEtBQUssQ0FBQ0ssSUFBTixDQUFXQyxLQUFYLEdBQ0M7QUFBSyxhQUFTLEVBQUVGLGlEQUFTLENBQUNHLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRVAsS0FBSyxDQUFDSyxJQUFOLENBQVdDLEtBQXJCO0FBQTRCLE9BQUcsRUFBRSxVQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERCxHQUlHRSxTQUxOLEVBTUU7QUFBSSxhQUFTLEVBQUVKLGlEQUFTLENBQUNLLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUNULEtBQUssQ0FBQ0ssSUFBTixDQUFXSSxLQUE1QyxDQU5GLEVBT0U7QUFBRyxhQUFTLEVBQUVMLGlEQUFTLENBQUNNLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JWLEtBQUssQ0FBQ0ssSUFBTixDQUFXSyxJQUExQyxDQVBGLEVBUUU7QUFBSyxhQUFTLEVBQUVOLGlEQUFTLENBQUNPLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBRVAsaURBQVMsQ0FBQ1EsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ1osS0FBSyxDQUFDSyxJQUFOLENBQVdPLFFBQWpELENBREYsRUFFRTtBQUFNLGFBQVMsRUFBRVIsaURBQVMsQ0FBQ0QsSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQ0gsS0FBSyxDQUFDRyxJQUF4QyxDQUZGLENBUkYsQ0FERjtBQWVELENBakJEOztLQUFNSixJOztBQW1CTkEsSUFBSSxDQUFDYyxjQUFMO0FBQUEsK0xBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxpQkFBVCxRQUFTQSxLQUFUO0FBQUE7QUFBQSxtQkFDRSxtSUFERjs7QUFBQTtBQUNkQyxrQkFEYztBQUFBLDZDQUViO0FBQ0xaLGtCQUFJLEVBQUVZLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLGtCQUFkLENBREQ7QUFFTFgsa0JBQUksRUFBRUwsS0FBSyxDQUFDSyxJQUFOLENBQVdTLEtBQUssQ0FBQ0csRUFBakI7QUFGRCxhQUZhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXRCOztBQUFBO0FBQUE7QUFBQTtBQUFBLEksQ0FRQTs7O0FBRWVsQixtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmV3cy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBwb3N0U3R5bGUgZnJvbSBcIi4vbmV3cy5zY3NzXCI7XG5cbmNvbnN0IE5ld3MgPSAocHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2cocHJvcHMuZGF0ZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZS5wb3N0fT5cbiAgICAgIHtwcm9wcy5wb3N0LnBob3RvID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cG9zdFN0eWxlLmltZ30+XG4gICAgICAgICAgPGltZyBzcmM9e3Byb3BzLnBvc3QucGhvdG99IGFsdD17XCJ0aXRsZUltZ1wifSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiB1bmRlZmluZWR9XG4gICAgICA8aDIgY2xhc3NOYW1lPXtwb3N0U3R5bGUudGl0bGV9Pntwcm9wcy5wb3N0LnRpdGxlfTwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9e3Bvc3RTdHlsZS50ZXh0fT57cHJvcHMucG9zdC50ZXh0fTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3N0U3R5bGUudGFnfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtwb3N0U3R5bGUuY2F0ZWdvcnl9Pntwcm9wcy5wb3N0LmNhdGVnb3J5fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtwb3N0U3R5bGUuZGF0ZX0+e3Byb3BzLmRhdGV9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5OZXdzLmdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zdCBtb21lbnQgPSAoYXdhaXQgaW1wb3J0KFwibW9tZW50XCIpKS5kZWZhdWx0KCk7XG4gIHJldHVybiB7XG4gICAgZGF0ZTogbW9tZW50LmZvcm1hdChcImRkZGQgRCBNTU1NIFlZWVlcIiksXG4gICAgcG9zdDogcHJvcHMucG9zdFtxdWVyeS5pZF1cbiAgfTtcbn07XG5cbi8vIC5sb2NhbGUoXCJ1a1wiKS5mcm9tTm93KClcblxuZXhwb3J0IGRlZmF1bHQgTmV3cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/News/index.jsx\n");

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
false,

/***/ "./node_modules/moment/locale/af.js":
false,

/***/ "./node_modules/moment/locale/ar-dz.js":
false,

/***/ "./node_modules/moment/locale/ar-kw.js":
false,

/***/ "./node_modules/moment/locale/ar-ly.js":
false,

/***/ "./node_modules/moment/locale/ar-ma.js":
false,

/***/ "./node_modules/moment/locale/ar-sa.js":
false,

/***/ "./node_modules/moment/locale/ar-tn.js":
false,

/***/ "./node_modules/moment/locale/ar.js":
false,

/***/ "./node_modules/moment/locale/az.js":
false,

/***/ "./node_modules/moment/locale/be.js":
false,

/***/ "./node_modules/moment/locale/bg.js":
false,

/***/ "./node_modules/moment/locale/bm.js":
false,

/***/ "./node_modules/moment/locale/bn.js":
false,

/***/ "./node_modules/moment/locale/bo.js":
false,

/***/ "./node_modules/moment/locale/br.js":
false,

/***/ "./node_modules/moment/locale/bs.js":
false,

/***/ "./node_modules/moment/locale/ca.js":
false,

/***/ "./node_modules/moment/locale/cs.js":
false,

/***/ "./node_modules/moment/locale/cv.js":
false,

/***/ "./node_modules/moment/locale/cy.js":
false,

/***/ "./node_modules/moment/locale/da.js":
false,

/***/ "./node_modules/moment/locale/de-at.js":
false,

/***/ "./node_modules/moment/locale/de-ch.js":
false,

/***/ "./node_modules/moment/locale/de.js":
false,

/***/ "./node_modules/moment/locale/dv.js":
false,

/***/ "./node_modules/moment/locale/el.js":
false,

/***/ "./node_modules/moment/locale/en-au.js":
false,

/***/ "./node_modules/moment/locale/en-ca.js":
false,

/***/ "./node_modules/moment/locale/en-gb.js":
false,

/***/ "./node_modules/moment/locale/en-ie.js":
false,

/***/ "./node_modules/moment/locale/en-il.js":
false,

/***/ "./node_modules/moment/locale/en-in.js":
false,

/***/ "./node_modules/moment/locale/en-nz.js":
false,

/***/ "./node_modules/moment/locale/en-sg.js":
false,

/***/ "./node_modules/moment/locale/eo.js":
false,

/***/ "./node_modules/moment/locale/es-do.js":
false,

/***/ "./node_modules/moment/locale/es-us.js":
false,

/***/ "./node_modules/moment/locale/es.js":
false,

/***/ "./node_modules/moment/locale/et.js":
false,

/***/ "./node_modules/moment/locale/eu.js":
false,

/***/ "./node_modules/moment/locale/fa.js":
false,

/***/ "./node_modules/moment/locale/fi.js":
false,

/***/ "./node_modules/moment/locale/fil.js":
false,

/***/ "./node_modules/moment/locale/fo.js":
false,

/***/ "./node_modules/moment/locale/fr-ca.js":
false,

/***/ "./node_modules/moment/locale/fr-ch.js":
false,

/***/ "./node_modules/moment/locale/fr.js":
false,

/***/ "./node_modules/moment/locale/fy.js":
false,

/***/ "./node_modules/moment/locale/ga.js":
false,

/***/ "./node_modules/moment/locale/gd.js":
false,

/***/ "./node_modules/moment/locale/gl.js":
false,

/***/ "./node_modules/moment/locale/gom-deva.js":
false,

/***/ "./node_modules/moment/locale/gom-latn.js":
false,

/***/ "./node_modules/moment/locale/gu.js":
false,

/***/ "./node_modules/moment/locale/he.js":
false,

/***/ "./node_modules/moment/locale/hi.js":
false,

/***/ "./node_modules/moment/locale/hr.js":
false,

/***/ "./node_modules/moment/locale/hu.js":
false,

/***/ "./node_modules/moment/locale/hy-am.js":
false,

/***/ "./node_modules/moment/locale/id.js":
false,

/***/ "./node_modules/moment/locale/is.js":
false,

/***/ "./node_modules/moment/locale/it-ch.js":
false,

/***/ "./node_modules/moment/locale/it.js":
false,

/***/ "./node_modules/moment/locale/ja.js":
false,

/***/ "./node_modules/moment/locale/jv.js":
false,

/***/ "./node_modules/moment/locale/ka.js":
false,

/***/ "./node_modules/moment/locale/kk.js":
false,

/***/ "./node_modules/moment/locale/km.js":
false,

/***/ "./node_modules/moment/locale/kn.js":
false,

/***/ "./node_modules/moment/locale/ko.js":
false,

/***/ "./node_modules/moment/locale/ku.js":
false,

/***/ "./node_modules/moment/locale/ky.js":
false,

/***/ "./node_modules/moment/locale/lb.js":
false,

/***/ "./node_modules/moment/locale/lo.js":
false,

/***/ "./node_modules/moment/locale/lt.js":
false,

/***/ "./node_modules/moment/locale/lv.js":
false,

/***/ "./node_modules/moment/locale/me.js":
false,

/***/ "./node_modules/moment/locale/mi.js":
false,

/***/ "./node_modules/moment/locale/mk.js":
false,

/***/ "./node_modules/moment/locale/ml.js":
false,

/***/ "./node_modules/moment/locale/mn.js":
false,

/***/ "./node_modules/moment/locale/mr.js":
false,

/***/ "./node_modules/moment/locale/ms-my.js":
false,

/***/ "./node_modules/moment/locale/ms.js":
false,

/***/ "./node_modules/moment/locale/mt.js":
false,

/***/ "./node_modules/moment/locale/my.js":
false,

/***/ "./node_modules/moment/locale/nb.js":
false,

/***/ "./node_modules/moment/locale/ne.js":
false,

/***/ "./node_modules/moment/locale/nl-be.js":
false,

/***/ "./node_modules/moment/locale/nl.js":
false,

/***/ "./node_modules/moment/locale/nn.js":
false,

/***/ "./node_modules/moment/locale/oc-lnc.js":
false,

/***/ "./node_modules/moment/locale/pa-in.js":
false,

/***/ "./node_modules/moment/locale/pl.js":
false,

/***/ "./node_modules/moment/locale/pt-br.js":
false,

/***/ "./node_modules/moment/locale/pt.js":
false,

/***/ "./node_modules/moment/locale/ro.js":
false,

/***/ "./node_modules/moment/locale/ru.js":
false,

/***/ "./node_modules/moment/locale/sd.js":
false,

/***/ "./node_modules/moment/locale/se.js":
false,

/***/ "./node_modules/moment/locale/si.js":
false,

/***/ "./node_modules/moment/locale/sk.js":
false,

/***/ "./node_modules/moment/locale/sl.js":
false,

/***/ "./node_modules/moment/locale/sq.js":
false,

/***/ "./node_modules/moment/locale/sr-cyrl.js":
false,

/***/ "./node_modules/moment/locale/sr.js":
false,

/***/ "./node_modules/moment/locale/ss.js":
false,

/***/ "./node_modules/moment/locale/sv.js":
false,

/***/ "./node_modules/moment/locale/sw.js":
false,

/***/ "./node_modules/moment/locale/ta.js":
false,

/***/ "./node_modules/moment/locale/te.js":
false,

/***/ "./node_modules/moment/locale/tet.js":
false,

/***/ "./node_modules/moment/locale/tg.js":
false,

/***/ "./node_modules/moment/locale/th.js":
false,

/***/ "./node_modules/moment/locale/tk.js":
false,

/***/ "./node_modules/moment/locale/tl-ph.js":
false,

/***/ "./node_modules/moment/locale/tlh.js":
false,

/***/ "./node_modules/moment/locale/tr.js":
false,

/***/ "./node_modules/moment/locale/tzl.js":
false,

/***/ "./node_modules/moment/locale/tzm-latn.js":
false,

/***/ "./node_modules/moment/locale/tzm.js":
false,

/***/ "./node_modules/moment/locale/ug-cn.js":
false,

/***/ "./node_modules/moment/locale/uk.js":
false,

/***/ "./node_modules/moment/locale/ur.js":
false,

/***/ "./node_modules/moment/locale/uz-latn.js":
false,

/***/ "./node_modules/moment/locale/uz.js":
false,

/***/ "./node_modules/moment/locale/vi.js":
false,

/***/ "./node_modules/moment/locale/x-pseudo.js":
false,

/***/ "./node_modules/moment/locale/yo.js":
false,

/***/ "./node_modules/moment/locale/zh-cn.js":
false,

/***/ "./node_modules/moment/locale/zh-hk.js":
false,

/***/ "./node_modules/moment/locale/zh-mo.js":
false,

/***/ "./node_modules/moment/locale/zh-tw.js":
false,

/***/ "./node_modules/moment/moment.js":
false

})