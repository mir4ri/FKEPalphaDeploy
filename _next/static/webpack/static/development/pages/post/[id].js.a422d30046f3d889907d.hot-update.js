webpackHotUpdate("static/development/pages/post/[id].js",{

/***/ "./pages/post/[id].jsx":
/*!*****************************!*\
  !*** ./pages/post/[id].jsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ "./components/Header/index.jsx");
/* harmony import */ var _components_MobileNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MobileNav */ "./components/MobileNav/index.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer/index.jsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Nav */ "./components/Nav/index.jsx");
/* harmony import */ var _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout/layout.scss */ "./components/Layout/layout.scss");
/* harmony import */ var _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.jsx");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.scss */ "./pages/post/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_10__);
var _this = undefined,
    _jsxFileName = "/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/kep/pages/post/[id].jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var Post = function Post(_ref) {
  var className = _ref.className,
      post = _ref.post;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  console.log("props:" + " " + post); // if (!id)
  //   return (
  //     <p
  //       style={{ textAlign: "center", fontWeight: "bold" }}
  //       className={className}
  //     >
  //       Упс... Такого посту ще не існує{" "}
  //       <button
  //         onClick={() => router.back()}
  //         style={{
  //           display: "block",
  //           margin: "10px auto",
  //           border: "none",
  //           background: "none",
  //           color: "#19b5fe",
  //           fontSize: "16px",
  //         }}
  //       >
  //         Вернутися назад
  //       </button>
  //     </p>
  //   );

  return __jsx("div", {
    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_7___default.a.alignContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "\u0424\u041A\u0415\u041F - ", post.title), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_7___default.a.layoutContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_7___default.a.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), post.photo ? __jsx("img", {
    src: post.photo,
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.photo,
    alt: post.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }) : undefined, __jsx("h2", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, post.title), __jsx("p", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, post.text), __jsx("p", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, post.paragraph), __jsx("p", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, post.end), __jsx("span", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.date,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, moment__WEBPACK_IMPORTED_MODULE_8___default()(post.date).locale("uk").fromNow()), __jsx(_components_MobileNav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[id].js.a422d30046f3d889907d.hot-update.js.map