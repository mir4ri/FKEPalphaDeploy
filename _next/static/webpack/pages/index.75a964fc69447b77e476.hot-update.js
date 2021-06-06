webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Pagination/index.jsx":
/*!*****************************************!*\
  !*** ./components/Pagination/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pagination_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.module.scss */ \"./components/Pagination/pagination.module.scss\");\n/* harmony import */ var _pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pagination_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/components/Pagination/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Pagination = function Pagination(_ref) {\n  _s();\n\n  var totalPosts = _ref.totalPosts;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      currentPage = _useState[0],\n      setCurrentPage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(4),\n      itemsPerPage = _useState2[0],\n      setItemsPerPage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(3),\n      pageNumberLimit = _useState3[0];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(5),\n      maxPageNumberLimit = _useState4[0],\n      setmaxPageNumberLimit = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      minPageNumberLimit = _useState5[0],\n      setminPageNumberLimit = _useState5[1];\n\n  var handleClick = function handleClick(event) {\n    setCurrentPage(Number(event.target.id));\n  };\n\n  var pages = [];\n\n  for (var i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {\n    pages.push(i);\n  }\n\n  console.log(Math.ceil(totalPosts / itemsPerPage));\n  var indexOfLastItem = currentPage * itemsPerPage;\n  var indexOfFirstItem = indexOfLastItem - itemsPerPage;\n  var renderPageNumbers = pages.map(function (number) {\n    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        id: number,\n        onClick: handleClick,\n        className: currentPage == number ? \"active\" : null,\n        children: number\n      }, number, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this);\n    } else {\n      return null;\n    }\n  }); // useEffect(() => {\n  //   fetch(\"https://jsonplaceholder.typicode.com/todos\")\n  //     .then((response) => response.json())\n  //     .then((json) => setData(json));\n  // }, []);\n\n  var handleNextbtn = function handleNextbtn() {\n    setCurrentPage(currentPage + 1);\n\n    if (currentPage + 1 > maxPageNumberLimit) {\n      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);\n      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);\n    }\n  };\n\n  var handlePrevbtn = function handlePrevbtn() {\n    setCurrentPage(currentPage - 1);\n\n    if ((currentPage - 1) % pageNumberLimit == 0) {\n      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);\n      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);\n    }\n  };\n\n  var pageIncrementBtn = null;\n\n  if (pages.length > maxPageNumberLimit) {\n    pageIncrementBtn = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      onClick: handleNextbtn,\n      children: \" \\u2026 \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 24\n    }, _this);\n  }\n\n  var pageDecrementBtn = null;\n\n  if (minPageNumberLimit >= 1) {\n    pageDecrementBtn = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      onClick: handlePrevbtn,\n      children: \" \\u2026 \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 24\n    }, _this);\n  }\n\n  var handleLoadMore = function handleLoadMore() {\n    setItemsPerPage(itemsPerPage + 5);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      className: _pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pageNumbers,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: handlePrevbtn,\n          disabled: currentPage == pages[0] ? true : false,\n          children: \"\\u041F\\u043E\\u043F\\u0435\\u0440\\u0435\\u0434\\u043D\\u044F\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this), pageDecrementBtn, renderPageNumbers, pageIncrementBtn, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: handleNextbtn,\n          disabled: currentPage == pages[pages.length - 1] ? true : false,\n          children: \"\\u041D\\u0430\\u0441\\u0442\\u0443\\u043F\\u043D\\u0430\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Pagination, \"H9LE8tHAu2OFS0NDikPUyBxXfG0=\");\n\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\n\nvar _c;\n\n$RefreshReg$(_c, \"Pagination\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uL2luZGV4LmpzeD81MjFmIl0sIm5hbWVzIjpbIlBhZ2luYXRpb24iLCJ0b3RhbFBvc3RzIiwidXNlU3RhdGUiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiaXRlbXNQZXJQYWdlIiwic2V0SXRlbXNQZXJQYWdlIiwicGFnZU51bWJlckxpbWl0IiwibWF4UGFnZU51bWJlckxpbWl0Iiwic2V0bWF4UGFnZU51bWJlckxpbWl0IiwibWluUGFnZU51bWJlckxpbWl0Iiwic2V0bWluUGFnZU51bWJlckxpbWl0IiwiaGFuZGxlQ2xpY2siLCJldmVudCIsIk51bWJlciIsInRhcmdldCIsImlkIiwicGFnZXMiLCJpIiwiTWF0aCIsImNlaWwiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImluZGV4T2ZMYXN0SXRlbSIsImluZGV4T2ZGaXJzdEl0ZW0iLCJyZW5kZXJQYWdlTnVtYmVycyIsIm1hcCIsIm51bWJlciIsImhhbmRsZU5leHRidG4iLCJoYW5kbGVQcmV2YnRuIiwicGFnZUluY3JlbWVudEJ0biIsImxlbmd0aCIsInBhZ2VEZWNyZW1lbnRCdG4iLCJoYW5kbGVMb2FkTW9yZSIsInN0eWxlcyIsInBhZ2VOdW1iZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLGtCQUNDQyxzREFBUSxDQUFDLENBQUQsQ0FEVDtBQUFBLE1BQzlCQyxXQUQ4QjtBQUFBLE1BQ2pCQyxjQURpQjs7QUFBQSxtQkFFR0Ysc0RBQVEsQ0FBQyxDQUFELENBRlg7QUFBQSxNQUU5QkcsWUFGOEI7QUFBQSxNQUVoQkMsZUFGZ0I7O0FBQUEsbUJBSVhKLHNEQUFRLENBQUMsQ0FBRCxDQUpHO0FBQUEsTUFJOUJLLGVBSjhCOztBQUFBLG1CQUtl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R0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQjVCLG1CQUFlLENBQUNELFlBQVksR0FBRyxDQUFoQixDQUFmO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUksZUFBUyxFQUFFOEIsOERBQU0sQ0FBQ0MsV0FBdEI7QUFBQSw4QkFDRTtBQUFBLCtCQUNFO0FBQ0UsaUJBQU8sRUFBRU4sYUFEWDtBQUVFLGtCQUFRLEVBQUUzQixXQUFXLElBQUljLEtBQUssQ0FBQyxDQUFELENBQXBCLEdBQTBCLElBQTFCLEdBQWlDLEtBRjdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBU0dnQixnQkFUSCxFQVVHUCxpQkFWSCxFQVdHSyxnQkFYSCxlQWFFO0FBQUEsK0JBQ0U7QUFDRSxpQkFBTyxFQUFFRixhQURYO0FBRUUsa0JBQVEsRUFBRTFCLFdBQVcsSUFBSWMsS0FBSyxDQUFDQSxLQUFLLENBQUNlLE1BQU4sR0FBZSxDQUFoQixDQUFwQixHQUF5QyxJQUF6QyxHQUFnRCxLQUY1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTBCRCxDQXZHRDs7R0FBTWhDLFU7O0tBQUFBLFU7QUF5R1NBLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QYWdpbmF0aW9uL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnaW5hdGlvbi5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBQYWdpbmF0aW9uID0gKHsgdG90YWxQb3N0cyB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtpdGVtc1BlclBhZ2UsIHNldEl0ZW1zUGVyUGFnZV0gPSB1c2VTdGF0ZSg0KTtcblxuICBjb25zdCBbcGFnZU51bWJlckxpbWl0XSA9IHVzZVN0YXRlKDMpO1xuICBjb25zdCBbbWF4UGFnZU51bWJlckxpbWl0LCBzZXRtYXhQYWdlTnVtYmVyTGltaXRdID0gdXNlU3RhdGUoNSk7XG4gIGNvbnN0IFttaW5QYWdlTnVtYmVyTGltaXQsIHNldG1pblBhZ2VOdW1iZXJMaW1pdF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgIHNldEN1cnJlbnRQYWdlKE51bWJlcihldmVudC50YXJnZXQuaWQpKTtcbiAgfTtcblxuICBjb25zdCBwYWdlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBNYXRoLmNlaWwodG90YWxQb3N0cyAvIGl0ZW1zUGVyUGFnZSk7IGkrKykge1xuICAgIHBhZ2VzLnB1c2goaSk7XG4gIH1cblxuICBjb25zb2xlLmxvZyhNYXRoLmNlaWwodG90YWxQb3N0cyAvIGl0ZW1zUGVyUGFnZSkpO1xuXG4gIGNvbnN0IGluZGV4T2ZMYXN0SXRlbSA9IGN1cnJlbnRQYWdlICogaXRlbXNQZXJQYWdlO1xuICBjb25zdCBpbmRleE9mRmlyc3RJdGVtID0gaW5kZXhPZkxhc3RJdGVtIC0gaXRlbXNQZXJQYWdlO1xuXG4gIGNvbnN0IHJlbmRlclBhZ2VOdW1iZXJzID0gcGFnZXMubWFwKChudW1iZXIpID0+IHtcbiAgICBpZiAobnVtYmVyIDwgbWF4UGFnZU51bWJlckxpbWl0ICsgMSAmJiBudW1iZXIgPiBtaW5QYWdlTnVtYmVyTGltaXQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaVxuICAgICAgICAgIGtleT17bnVtYmVyfVxuICAgICAgICAgIGlkPXtudW1iZXJ9XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjdXJyZW50UGFnZSA9PSBudW1iZXIgPyBcImFjdGl2ZVwiIDogbnVsbH1cbiAgICAgICAgPlxuICAgICAgICAgIHtudW1iZXJ9XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3NcIilcbiAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAvLyAgICAgLnRoZW4oKGpzb24pID0+IHNldERhdGEoanNvbikpO1xuICAvLyB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTmV4dGJ0biA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSArIDEpO1xuXG4gICAgaWYgKGN1cnJlbnRQYWdlICsgMSA+IG1heFBhZ2VOdW1iZXJMaW1pdCkge1xuICAgICAgc2V0bWF4UGFnZU51bWJlckxpbWl0KG1heFBhZ2VOdW1iZXJMaW1pdCArIHBhZ2VOdW1iZXJMaW1pdCk7XG4gICAgICBzZXRtaW5QYWdlTnVtYmVyTGltaXQobWluUGFnZU51bWJlckxpbWl0ICsgcGFnZU51bWJlckxpbWl0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJldmJ0biA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSAtIDEpO1xuXG4gICAgaWYgKChjdXJyZW50UGFnZSAtIDEpICUgcGFnZU51bWJlckxpbWl0ID09IDApIHtcbiAgICAgIHNldG1heFBhZ2VOdW1iZXJMaW1pdChtYXhQYWdlTnVtYmVyTGltaXQgLSBwYWdlTnVtYmVyTGltaXQpO1xuICAgICAgc2V0bWluUGFnZU51bWJlckxpbWl0KG1pblBhZ2VOdW1iZXJMaW1pdCAtIHBhZ2VOdW1iZXJMaW1pdCk7XG4gICAgfVxuICB9O1xuXG4gIGxldCBwYWdlSW5jcmVtZW50QnRuID0gbnVsbDtcbiAgaWYgKHBhZ2VzLmxlbmd0aCA+IG1heFBhZ2VOdW1iZXJMaW1pdCkge1xuICAgIHBhZ2VJbmNyZW1lbnRCdG4gPSA8bGkgb25DbGljaz17aGFuZGxlTmV4dGJ0bn0+ICZoZWxsaXA7IDwvbGk+O1xuICB9XG5cbiAgbGV0IHBhZ2VEZWNyZW1lbnRCdG4gPSBudWxsO1xuICBpZiAobWluUGFnZU51bWJlckxpbWl0ID49IDEpIHtcbiAgICBwYWdlRGVjcmVtZW50QnRuID0gPGxpIG9uQ2xpY2s9e2hhbmRsZVByZXZidG59PiAmaGVsbGlwOyA8L2xpPjtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUxvYWRNb3JlID0gKCkgPT4ge1xuICAgIHNldEl0ZW1zUGVyUGFnZShpdGVtc1BlclBhZ2UgKyA1KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMucGFnZU51bWJlcnN9PlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldmJ0bn1cbiAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PSBwYWdlc1swXSA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDQn9C+0L/QtdGA0LXQtNC90Y9cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAge3BhZ2VEZWNyZW1lbnRCdG59XG4gICAgICAgIHtyZW5kZXJQYWdlTnVtYmVyc31cbiAgICAgICAge3BhZ2VJbmNyZW1lbnRCdG59XG5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHRidG59XG4gICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV0gPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAg0J3QsNGB0YLRg9C/0L3QsFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Pagination/index.jsx\n");

/***/ })

})