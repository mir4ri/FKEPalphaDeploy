webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Nav/ActiveLink.jsx":
/*!***************************************!*\
  !*** ./components/Nav/ActiveLink.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/kep/components/Nav/ActiveLink.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ActiveLink = function ActiveLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      href = _ref.href;
  var style = {
    color: router.pathname === href ? "#00C0FF" : "none",
    background: router.pathname === href ? "#e4e4e4" : "none"
  };

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
    Router.events.on("routeChangeComplete", function () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });
  };

  return __jsx("a", {
    href: href,
    onClick: handleClick,
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ })

})
//# sourceMappingURL=index.js.0215753b7a5e4fb5dc48.hot-update.js.map