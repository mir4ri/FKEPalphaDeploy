webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_client_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout/index.jsx\");\n/* harmony import */ var _components_News__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/News */ \"./components/News/index.jsx\");\n/* harmony import */ var _index_index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index/index.scss */ \"./pages/index/index.scss\");\n/* harmony import */ var _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_index_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _index_slider_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index/slider.scss */ \"./pages/index/slider.scss\");\n/* harmony import */ var _index_slider_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_slider_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _api_news_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/news.json */ \"./api/news.json\");\nvar _api_news_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/news.json */ \"./api/news.json\", 1);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/client/pages/index.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar Index = function Index(_ref) {\n  _s();\n\n  var className = _ref.className;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_index_slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.animateIn),\n      activeSlide = _useState[0],\n      setNewSlide = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      sliderPos = _useState2[0],\n      setSliderPos = _useState2[1];\n\n  var settings = {\n    useCSS: true,\n    dots: true,\n    infinite: true,\n    speed: 1250,\n    easing: \"easeout\",\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    autoplay: true,\n    autoplaySpeed: 7000,\n    pauseOnHover: true,\n    touchMove: false,\n    arrows: false,\n    beforeChange: function beforeChange() {\n      return setNewSlide(_index_slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.animateOut);\n    },\n    afterChange: function afterChange(current) {\n      {\n        setNewSlide(_index_slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.animateIn);\n        setSliderPos(current);\n      }\n    }\n  };\n  var slides = [{\n    title: \"ФКЕП\",\n    text: \"Фаховий коледж електронних приладів ІФНТУНГу – це сучасний навчальний заклад в якому створено всі умови для підготовки молодшого бакалавра, який здатен витримати конкуренцію на ринку праці.\",\n    img: \"/static/img/slide1.jpg\"\n  }, {\n    title: \"Програмна інженерія\",\n    text: \"Телефон гарячої лінії для повідомлення про можливі факти корупційни правопорушень або пов'язаних з корупцією правопорушень\",\n    img: \"/static/img/slide3.jpg\"\n  }, {\n    title: \"Програмна інженерія\",\n    text: \"...\",\n    img: \"/static/img/slide2.jpg\"\n  }, {\n    title: \"Комп'ютерна інженерія\",\n    text: \"...\",\n    img: \"/static/img/post.jpg\"\n  }];\n  return __jsx(\"main\", {\n    className: (_index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.index, className),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, \"\\u0424\\u041A\\u0415\\u041F - \\u0413\\u043E\\u043B\\u043E\\u0432\\u043D\\u0430\"), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    type: \"text/css\",\n    href: \"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    type: \"text/css\",\n    href: \"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  })), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_client_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, settings, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }), slides.map(function (slide, index) {\n    return __jsx(\"div\", {\n      key: index,\n      className: _index_slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.slide,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 11\n      }\n    }, __jsx(\"h2\", {\n      className: \"\".concat(sliderPos === index ? activeSlide : \" \", \" \").concat(_index_slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.title),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 13\n      }\n    }, slide.title), __jsx(\"p\", {\n      className: \"\".concat(sliderPos === index ? activeSlide : \" \", \" \").concat(_index_slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.text),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 13\n      }\n    }, slide.text), __jsx(\"img\", {\n      src: slide.img,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 13\n      }\n    }));\n  })), __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.newsAndSidebar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.news,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.newsTitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 11\n    }\n  }, \"\\u041D\\u043E\\u0432\\u0438\\u043D\\u0438\"), _api_news_json__WEBPACK_IMPORTED_MODULE_9__.map(function (post) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      key: post.id,\n      href: \"/post/[id]\",\n      as: \"/post/\".concat(post.id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.link,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 15\n      }\n    }, __jsx(_components_News__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      post: post,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 17\n      }\n    })));\n  })), __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.sidebar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.events,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.subtitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }, \"\\u041F\\u043E\\u0434\\u0456\\u0457\"), __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.event,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }\n  }, __jsx(\"h4\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.eventTitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 15\n    }\n  }, \"\\u0417\\u043C\\u0430\\u0433\\u0430\\u043D\\u043D\\u044F \\u043F\\u043E \\u0442\\u0435\\u0441\\u0442\\u0443\\u0432\\u0430\\u043D\\u043D\\u044E\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.eventPlace,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 15\n    }\n  }, \"\\u0410\\u043A\\u0442\\u043E\\u0432\\u0438\\u0439 \\u0437\\u0430\\u043B\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.eventDate,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 15\n    }\n  }, \"9 \\u0432\\u0435\\u0440\\u0435\\u0441\\u043D\\u044F\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.eventTime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 15\n    }\n  }, \"14:10\")), __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.event,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 13\n    }\n  }, __jsx(\"h4\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.eventTitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 15\n    }\n  }, \"\\u0414\\u0435\\u043C\\u043E\\u043D\\u0441\\u0442\\u0440\\u0430\\u0446\\u0456\\u044F \\u043F\\u0435\\u0442 \\u043F\\u0440\\u043E\\u0434\\u0436\\u0435\\u043A\\u0442\\u0456\\u0432\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.eventPlace,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 15\n    }\n  }, \"\\u0410\\u043A\\u0442\\u043E\\u0432\\u0438\\u0439 \\u0437\\u0430\\u043B\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.eventDate,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 15\n    }\n  }, \"12 \\u0432\\u0435\\u0440\\u0435\\u0441\\u043D\\u044F\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.eventTime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 15\n    }\n  }, \"14:00\"))), __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.feedback,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: \"https://forms.gle/hyLLUHdFYqrQ6QiB6\",\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.feedbackLink,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 13\n    }\n  }, \"\\u0413\\u0443\\u0433\\u043B \\u0444\\u043E\\u0440\\u043C\\u0430 \\u0434\\u043B\\u044F \\u0444\\u0456\\u0434\\u0431\\u0435\\u043A\\u0443\"), __jsx(\"a\", {\n    href: \"https://t.me/mir4ri\",\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.feedbackLink,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 13\n    }\n  }, \"\\u041C\\u0456\\u0439 telegram: \", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 29\n    }\n  }), \" @mir4ri\")), __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.attetion,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 11\n    }\n  }, \" \", __jsx(\"a\", {\n    href: \"tel:(0342)783046\",\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.attetionLink,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 13\n    }\n  }, \"(0342) 783 046\")))));\n}; // Index.getInitialProps = async ctx => {\n//   const res = await fetch(posts);\n//   const json = await res.json();\n//   return { posts: data };\n// };\n\n\n_s(Index, \"rNqMfT5TabVLHET6QcNr1T2KgcE=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Index));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Index\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiSW5kZXgiLCJjbGFzc05hbWUiLCJ1c2VTdGF0ZSIsInNsaWRlclN0eWxlcyIsImFuaW1hdGVJbiIsImFjdGl2ZVNsaWRlIiwic2V0TmV3U2xpZGUiLCJzbGlkZXJQb3MiLCJzZXRTbGlkZXJQb3MiLCJzZXR0aW5ncyIsInVzZUNTUyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwiZWFzaW5nIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJwYXVzZU9uSG92ZXIiLCJ0b3VjaE1vdmUiLCJhcnJvd3MiLCJiZWZvcmVDaGFuZ2UiLCJhbmltYXRlT3V0IiwiYWZ0ZXJDaGFuZ2UiLCJjdXJyZW50Iiwic2xpZGVzIiwidGl0bGUiLCJ0ZXh0IiwiaW1nIiwiaW5kZXgiLCJtYXAiLCJzbGlkZSIsIm5ld3NBbmRTaWRlYmFyIiwibmV3cyIsIm5ld3NUaXRsZSIsInBvc3RzIiwicG9zdCIsImlkIiwibGluayIsInNpZGViYXIiLCJldmVudHMiLCJzdWJ0aXRsZSIsImV2ZW50IiwiZXZlbnRUaXRsZSIsImV2ZW50UGxhY2UiLCJldmVudERhdGUiLCJldmVudFRpbWUiLCJmZWVkYmFjayIsImZlZWRiYWNrTGluayIsImF0dGV0aW9uIiwiYXR0ZXRpb25MaW5rIiwid2l0aExheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBbUI7QUFBQTs7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDQyx5REFBWSxDQUFDQyxTQUFkLENBRFo7QUFBQSxNQUN4QkMsV0FEd0I7QUFBQSxNQUNYQyxXQURXOztB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBRSxxQ0FEUjtBQUVFLGFBQVMsRUFBRWxCLHdEQUFLLENBQUNtQixZQUZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZIQURGLEVBT0U7QUFBRyxRQUFJLEVBQUUscUJBQVQ7QUFBZ0MsYUFBUyxFQUFFbkIsd0RBQUssQ0FBQ21CLFlBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBQ2dCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEaEIsYUFQRixDQWhCRixFQTJCRTtBQUFLLGFBQVMsRUFBRW5CLHdEQUFLLENBQUNvQixRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csR0FESCxFQUVFO0FBQUcsUUFBSSxFQUFDLGtCQUFSO0FBQTJCLGFBQVMsRUFBRXBCLHdEQUFLLENBQUNxQixZQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLENBM0JGLENBWEYsQ0FuQ0YsQ0FERjtBQW9GRCxDQXZJRCxDLENBeUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztHQTlJTW5ELEs7O0tBQUFBLEs7QUFnSlMscUVBQUFvRCxrRUFBVSxDQUFDcEQsS0FBRCxDQUF6QiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IHdpdGhMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTmV3cyBmcm9tIFwiLi4vY29tcG9uZW50cy9OZXdzXCI7XG5pbXBvcnQgaW5kZXggZnJvbSBcIi4vaW5kZXgvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHNsaWRlclN0eWxlcyBmcm9tIFwiLi9pbmRleC9zbGlkZXIuc2Nzc1wiO1xuaW1wb3J0IHBvc3RzIGZyb20gXCIuLi9hcGkvbmV3cy5qc29uXCI7XG5cbmNvbnN0IEluZGV4ID0gKHsgY2xhc3NOYW1lIH0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZVNsaWRlLCBzZXROZXdTbGlkZV0gPSB1c2VTdGF0ZShzbGlkZXJTdHlsZXMuYW5pbWF0ZUluKTtcbiAgY29uc3QgW3NsaWRlclBvcywgc2V0U2xpZGVyUG9zXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIHVzZUNTUzogdHJ1ZSxcbiAgICBkb3RzOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiAxMjUwLFxuICAgIGVhc2luZzogXCJlYXNlb3V0XCIsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGF1dG9wbGF5U3BlZWQ6IDcwMDAsXG4gICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgIHRvdWNoTW92ZTogZmFsc2UsXG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICBiZWZvcmVDaGFuZ2U6ICgpID0+IHNldE5ld1NsaWRlKHNsaWRlclN0eWxlcy5hbmltYXRlT3V0KSxcbiAgICBhZnRlckNoYW5nZTogKGN1cnJlbnQpID0+IHtcbiAgICAgIHtcbiAgICAgICAgc2V0TmV3U2xpZGUoc2xpZGVyU3R5bGVzLmFuaW1hdGVJbik7XG4gICAgICAgIHNldFNsaWRlclBvcyhjdXJyZW50KTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHNsaWRlcyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCLQpNCa0JXQn1wiLFxuICAgICAgdGV4dDpcbiAgICAgICAgXCLQpNCw0YXQvtCy0LjQuSDQutC+0LvQtdC00LYg0LXQu9C10LrRgtGA0L7QvdC90LjRhSDQv9GA0LjQu9Cw0LTRltCyINCG0KTQndCi0KPQndCT0YMg4oCTINGG0LUg0YHRg9GH0LDRgdC90LjQuSDQvdCw0LLRh9Cw0LvRjNC90LjQuSDQt9Cw0LrQu9Cw0LQg0LIg0Y/QutC+0LzRgyDRgdGC0LLQvtGA0LXQvdC+INCy0YHRliDRg9C80L7QstC4INC00LvRjyDQv9GW0LTQs9C+0YLQvtCy0LrQuCDQvNC+0LvQvtC00YjQvtCz0L4g0LHQsNC60LDQu9Cw0LLRgNCwLCDRj9C60LjQuSDQt9C00LDRgtC10L0g0LLQuNGC0YDQuNC80LDRgtC4INC60L7QvdC60YPRgNC10L3RhtGW0Y4g0L3QsCDRgNC40L3QutGDINC/0YDQsNGG0ZYuXCIsXG4gICAgICBpbWc6IFwiL3N0YXRpYy9pbWcvc2xpZGUxLmpwZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwi0J/RgNC+0LPRgNCw0LzQvdCwINGW0L3QttC10L3QtdGA0ZbRj1wiLFxuICAgICAgdGV4dDpcbiAgICAgICAgXCLQotC10LvQtdGE0L7QvSDQs9Cw0YDRj9GH0L7RlyDQu9GW0L3RltGXINC00LvRjyDQv9C+0LLRltC00L7QvNC70LXQvdC90Y8g0L/RgNC+INC80L7QttC70LjQstGWINGE0LDQutGC0Lgg0LrQvtGA0YPQv9GG0ZbQudC90Lgg0L/RgNCw0LLQvtC/0L7RgNGD0YjQtdC90Ywg0LDQsdC+INC/0L7QsifRj9C30LDQvdC40YUg0Lcg0LrQvtGA0YPQv9GG0ZbRlNGOINC/0YDQsNCy0L7Qv9C+0YDRg9GI0LXQvdGMXCIsXG4gICAgICBpbWc6IFwiL3N0YXRpYy9pbWcvc2xpZGUzLmpwZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwi0J/RgNC+0LPRgNCw0LzQvdCwINGW0L3QttC10L3QtdGA0ZbRj1wiLFxuICAgICAgdGV4dDogXCIuLi5cIixcbiAgICAgIGltZzogXCIvc3RhdGljL2ltZy9zbGlkZTIuanBnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCLQmtC+0LzQvyfRjtGC0LXRgNC90LAg0ZbQvdC20LXQvdC10YDRltGPXCIsXG4gICAgICB0ZXh0OiBcIi4uLlwiLFxuICAgICAgaW1nOiBcIi9zdGF0aWMvaW1nL3Bvc3QuanBnXCIsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17KGluZGV4LmluZGV4LCBjbGFzc05hbWUpfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+0KTQmtCV0J8gLSDQk9C+0LvQvtCy0L3QsDwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4gICAgICAgIHtzbGlkZXMubWFwKChzbGlkZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c2xpZGVyU3R5bGVzLnNsaWRlfT5cbiAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3NsaWRlclBvcyA9PT0gaW5kZXggPyBhY3RpdmVTbGlkZSA6IFwiIFwifSAke1xuICAgICAgICAgICAgICAgIHNsaWRlclN0eWxlcy50aXRsZVxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3NsaWRlLnRpdGxlfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c2xpZGVyUG9zID09PSBpbmRleCA/IGFjdGl2ZVNsaWRlIDogXCIgXCJ9ICR7XG4gICAgICAgICAgICAgICAgc2xpZGVyU3R5bGVzLnRleHRcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzbGlkZS50ZXh0fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGltZyBzcmM9e3NsaWRlLmltZ30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L1NsaWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbmRleC5uZXdzQW5kU2lkZWJhcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbmRleC5uZXdzfT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtpbmRleC5uZXdzVGl0bGV9PtCd0L7QstC40L3QuDwvaDI+XG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPExpbmsga2V5PXtwb3N0LmlkfSBocmVmPXtgL3Bvc3QvW2lkXWB9IGFzPXtgL3Bvc3QvJHtwb3N0LmlkfWB9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2luZGV4Lmxpbmt9PlxuICAgICAgICAgICAgICAgIDxOZXdzIHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbmRleC5zaWRlYmFyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aW5kZXguZXZlbnRzfT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2luZGV4LnN1YnRpdGxlfT7Qn9C+0LTRltGXPC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbmRleC5ldmVudH0+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2luZGV4LmV2ZW50VGl0bGV9PtCX0LzQsNCz0LDQvdC90Y8g0L/QviDRgtC10YHRgtGD0LLQsNC90L3RjjwvaDQ+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aW5kZXguZXZlbnRQbGFjZX0+0JDQutGC0L7QstC40Lkg0LfQsNC7PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2luZGV4LmV2ZW50RGF0ZX0+OSDQstC10YDQtdGB0L3Rjzwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpbmRleC5ldmVudFRpbWV9PjE0OjEwPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aW5kZXguZXZlbnR9PlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtpbmRleC5ldmVudFRpdGxlfT7QlNC10LzQvtC90YHRgtGA0LDRhtGW0Y8g0L/QtdGCINC/0YDQvtC00LbQtdC60YLRltCyPC9oND5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpbmRleC5ldmVudFBsYWNlfT7QkNC60YLQvtCy0LjQuSDQt9Cw0Ls8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aW5kZXguZXZlbnREYXRlfT4xMiDQstC10YDQtdGB0L3Rjzwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpbmRleC5ldmVudFRpbWV9PjE0OjAwPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2luZGV4LmZlZWRiYWNrfT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9e1wiaHR0cHM6Ly9mb3Jtcy5nbGUvaHlMTFVIZEZZcXJRNlFpQjZcIn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbmRleC5mZWVkYmFja0xpbmt9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgINCT0YPQs9C7INGE0L7RgNC80LAg0LTQu9GPINGE0ZbQtNCx0LXQutGDXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPXtcImh0dHBzOi8vdC5tZS9taXI0cmlcIn0gY2xhc3NOYW1lPXtpbmRleC5mZWVkYmFja0xpbmt9PlxuICAgICAgICAgICAgICDQnNGW0LkgdGVsZWdyYW06IDxiciAvPiBAbWlyNHJpXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2luZGV4LmF0dGV0aW9ufT5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KDAzNDIpNzgzMDQ2XCIgY2xhc3NOYW1lPXtpbmRleC5hdHRldGlvbkxpbmt9PlxuICAgICAgICAgICAgICAoMDM0MikgNzgzIDA0NlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbi8vIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHBvc3RzKTtcbi8vICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbi8vICAgcmV0dXJuIHsgcG9zdHM6IGRhdGEgfTtcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhMYXlvdXQoSW5kZXgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})