webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index/index.jsx":
/*!*******************************!*\
  !*** ./pages/index/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.jsx");
/* harmony import */ var _components_News__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/News */ "./components/News/index.jsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./pages/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_news_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/news.json */ "./api/news.json");
var _api_news_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../api/news.json */ "./api/news.json", 1);
var _this = undefined,
    _jsxFileName = "/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/kep/pages/index/index.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Index = function Index(_ref) {
  var className = _ref.className;
  return __jsx("main", {
    className: (_index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.index, className),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "\u0424\u041A\u0415\u041F"), __jsx("meta", {
    name: "theme-color",
    content: "#19b5fe",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.newsAndSidebar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.news,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.newsTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "\u041D\u043E\u0432\u0438\u043D\u0438"), _api_news_json__WEBPACK_IMPORTED_MODULE_6__.map(function (post, position) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/post/[id]",
      as: "/post/".concat(post.id),
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 15
      }
    }, __jsx(_components_News__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    })));
  })), __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.sidebar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.events,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "\u041F\u043E\u0434\u0456\u0457"), __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.event,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.eventTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, "\u0417\u043C\u0430\u0433\u0430\u043D\u043D\u044F \u043F\u043E \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044E"), __jsx("span", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.eventPlace,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, "\u0410\u043A\u0442\u043E\u0432\u0438\u0439 \u0437\u0430\u043B"), __jsx("span", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.eventDate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, "9 \u0432\u0435\u0440\u0435\u0441\u043D\u044F"), __jsx("span", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.eventTime,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "14:10")), __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.event,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.eventTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "\u0414\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043F\u0435\u0442 \u043F\u0440\u043E\u0434\u0436\u0435\u043A\u0442\u0456\u0432"), __jsx("span", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.eventPlace,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "\u0410\u043A\u0442\u043E\u0432\u0438\u0439 \u0437\u0430\u043B"), __jsx("span", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.eventDate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, "12 \u0432\u0435\u0440\u0435\u0441\u043D\u044F"), __jsx("span", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.eventTime,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, "14:00")), __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.event,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.eventTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, "\u041A\u043E\u043D\u0446\u0435\u0440\u0442 \u0434\u043E \u0434\u043D\u044F \u043C\u0438\u0440\u0443"), __jsx("span", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.eventPlace,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, "\u0410\u043A\u0442\u043E\u0432\u0438\u0439 \u0437\u0430\u043B"), __jsx("span", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.eventDate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "21 \u0432\u0435\u0440\u0435\u0441\u043D\u044F"), __jsx("span", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.eventTime,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "14:00"))), __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.feedback,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://t.me/KEPBetabot",
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.feedbackLink,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "Telegram \u0431\u043E\u0442: ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }), " @KEPBetabot"), __jsx("a", {
    href: "https://t.me/mir4ri",
    className: _index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.feedbackLink,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "\u041C\u0456\u0439 telegram: ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }), " @mir4ri")))));
}; // Index.getInitialProps = async ctx => {
//   const res = await fetch(posts);
//   const json = await res.json();
//   return { posts: data };
// };


/* harmony default export */ __webpack_exports__["default"] = (Object(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"])(Index));

/***/ })

})
//# sourceMappingURL=index.js.f37419243327eefac3c7.hot-update.js.map