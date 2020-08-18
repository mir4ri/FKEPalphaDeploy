webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/News/index.jsx":
/*!***********************************!*\
  !*** ./components/News/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _news_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.scss */ "./components/News/news.scss");
/* harmony import */ var _news_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_news_scss__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/kep/components/News/index.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var News = function News(props) {
  return __jsx("div", {
    className: _news_scss__WEBPACK_IMPORTED_MODULE_2___default.a.post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, props.post.photo ? __jsx("div", {
    className: _news_scss__WEBPACK_IMPORTED_MODULE_2___default.a.img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: props.post.photo,
    alt: "titleImg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  })) : undefined, __jsx("h2", {
    className: _news_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, props.post.title), __jsx("p", {
    className: _news_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, props.post.text), __jsx("div", {
    className: _news_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tag,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: _news_scss__WEBPACK_IMPORTED_MODULE_2___default.a.category,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, props.post.category), __jsx("span", {
    className: _news_scss__WEBPACK_IMPORTED_MODULE_2___default.a.date,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, moment__WEBPACK_IMPORTED_MODULE_1___default()(props.post.date).locale("uk").fromNow())));
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ })

})
//# sourceMappingURL=index.js.19a8f20d00bb8204cc4d.hot-update.js.map