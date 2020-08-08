webpackHotUpdate("static/development/pages/post/[id].js",{

/***/ "./api/news.json":
/*!***********************!*\
  !*** ./api/news.json ***!
  \***********************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":4,\"photo\":\"\",\"title\":\"Старт першої альфи та план розвитку\",\"text\":\"🥳 Перша стадія альфи запущена 🥳. В ній хочу продемонструвати своє бачення сайту та розуміти як подалі розвивати його. Зібрав на мою думку найважливішу інформацію та постарався подати її максимально зручно, звичайно сайт не ідеальний, тут є ще над чим працювати, як-не-як це альфа і сподіваюся ви допоможете мені з цим. Є бот в телеграмі якому ви можете висловити свою думку як в позитивному так і в негативному ключі або особисто мені у приватні повідомлення(всюди юзернейм @mir4ri). Всі посилання для зв’язку присутні на головній сторінці. Приймається будь-яка критика бажано в конструктивному вигляді.\",\"paragraph\":\"Альфу планую поділити на 2-3 етапи. На 2-му етапі буду додавати, вдосконалювати або випилювати функціонал на основі вашого фідбеку. Також планую до кінця альфи реалізувати підсвітку поточної пари, відображення поточного тижня (1, 2, 3, 4) та зробити маску для пошуку груп в розкладі.\",\"end\":\"Сподіваюся на потужний фідбек, який допоможе збудувати зручний та потужний сайт про який всі коледжі та університети будуть мріяти 😎. Всім гарного та продуктивного дня.\",\"date\":\"2020-08-08T20:00:00\",\"category\":\"оновлення\"},{\"id\":3,\"photo\":\"/static/img/post.jpg\",\"title\":\"Перехід на дистанційне навчання\",\"text\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nullam enim eget sit eget praesent turpis. Egestas volutpat malesuada dictum nascetur orci, nibh cras neque. Vel leo a ultricies elementum. Sem maecenas quam lectus odio.\",\"date\":\"2020-08-04T14:15:57\",\"category\":\"важливо\"},{\"id\":2,\"photo\":\"/static/img/post.jpg\",\"title\":\"Новина 3\",\"text\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nullam enim eget sit eget praesent turpis. Egestas volutpat malesuada dictum nascetur orci, nibh cras neque. Vel leo a ultricies elementum. Sem maecenas quam lectus odio.\",\"date\":\"2020-07-24T20:43:45\",\"category\":\"новина\"},{\"id\":1,\"photo\":\"/static/img/post.jpg\",\"title\":\"Новина 4\",\"text\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nullam enim eget sit eget praesent turpis. Egestas volutpat malesuada dictum nascetur orci, nibh cras neque. Vel leo a ultricies elementum. Sem maecenas quam lectus odio.\",\"date\":\"2020-06-22T20:43:45\",\"category\":\"новина\"}]");

/***/ }),

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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.jsx");
/* harmony import */ var _api_news_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/news.json */ "./api/news.json");
var _api_news_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../api/news.json */ "./api/news.json", 1);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ "./pages/post/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/kep/pages/post/[id].jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Post = function Post(_ref) {
  var className = _ref.className,
      posts = _ref.posts;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  posts[router.query.id];
  if (!post) return __jsx("p", {
    style: {
      textAlign: "center",
      fontWeight: "bold"
    },
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "\u0423\u043F\u0441... \u0422\u0430\u043A\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0443 \u0449\u0435 \u043D\u0435 \u0456\u0441\u043D\u0443\u0454", " ", __jsx("button", {
    onClick: function onClick() {
      return router.back();
    },
    style: {
      display: "block",
      margin: "10px auto",
      border: "none",
      background: "none",
      color: "#19b5fe",
      fontSize: "16px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "\u0412\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044F \u043D\u0430\u0437\u0430\u0434"));
  return __jsx("div", {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "\u0424\u041A\u0415\u041F - ", post.title), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  })), post.photo ? __jsx("img", {
    src: post.photo,
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.photo,
    alt: post.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }) : undefined, __jsx("h2", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, post.title), __jsx("p", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, post.text), __jsx("p", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, post.paragraph), __jsx("p", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, post.end), __jsx("span", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.date,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, moment__WEBPACK_IMPORTED_MODULE_3___default()(post.date).locale("uk").fromNow()));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"])(Post));

/***/ })

})
//# sourceMappingURL=[id].js.6538ea90eb2f322f00b7.hot-update.js.map