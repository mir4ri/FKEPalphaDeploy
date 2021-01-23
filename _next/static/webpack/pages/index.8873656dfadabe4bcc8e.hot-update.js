webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_client_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout/index.jsx\");\n/* harmony import */ var _components_News__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/News */ \"./components/News/index.jsx\");\n/* harmony import */ var _index_index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index/index.scss */ \"./pages/index/index.scss\");\n/* harmony import */ var _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_index_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _index_slider_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index/slider.scss */ \"./pages/index/slider.scss\");\n/* harmony import */ var _index_slider_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_slider_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _api_news_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/news.json */ \"./api/news.json\");\nvar _api_news_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/news.json */ \"./api/news.json\", 1);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/client/pages/index.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar Index = function Index(_ref) {\n  _s();\n\n  var className = _ref.className;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_index_slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.animateIn),\n      activeSlide = _useState[0],\n      setNewSlide = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      sliderPos = _useState2[0],\n      setSliderPos = _useState2[1];\n\n  var settings = {\n    useCSS: true,\n    dots: true,\n    infinite: true,\n    speed: 1250,\n    easing: \"easeout\",\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    autoplay: true,\n    autoplaySpeed: 7000,\n    pauseOnHover: true,\n    touchMove: false,\n    arrows: false,\n    beforeChange: function beforeChange() {\n      return setNewSlide(_index_slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.animateOut);\n    },\n    afterChange: function afterChange(current) {\n      {\n        setNewSlide(_index_slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.animateIn);\n        setSliderPos(current);\n      }\n    }\n  };\n  var slides = [{\n    title: \"ФКЕП\",\n    text: \"Фаховий коледж електронних приладів ІФНТУНГу – це сучасний навчальний заклад в якому створено всі умови для підготовки молодшого бакалавра, який здатен витримати конкуренцію на ринку праці.\",\n    img: \"/static/img/slide1.jpg\"\n  }, {\n    title: \"Стоп корупція\",\n    text: \"Телефон гарячої лінії для повідомлення про можливі факти корупційних правопорушень або пов'язаних з корупцією правопорушень (0342) 783 046\",\n    img: \"/static/img/slide3.jpg\"\n  }, {\n    title: \"Програмна інженерія\",\n    text: \"...\",\n    img: \"/static/img/slide2.jpg\"\n  }, {\n    title: \"Комп'ютерна інженерія\",\n    text: \"...\",\n    img: \"/static/img/post.jpg\"\n  }];\n  return __jsx(\"main\", {\n    className: (_index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.index, className),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, \"\\u0424\\u041A\\u0415\\u041F - \\u0413\\u043E\\u043B\\u043E\\u0432\\u043D\\u0430\"), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    type: \"text/css\",\n    href: \"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    type: \"text/css\",\n    href: \"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  })), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_client_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, settings, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }), slides.map(function (slide, index) {\n    return __jsx(\"div\", {\n      key: index,\n      className: _index_slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.slide,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 11\n      }\n    }, __jsx(\"h2\", {\n      className: \"\".concat(sliderPos === index ? activeSlide : \" \", \" \").concat(_index_slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.title),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 13\n      }\n    }, slide.title), __jsx(\"p\", {\n      className: \"\".concat(sliderPos === index ? activeSlide : \" \", \" \").concat(_index_slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.text),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 13\n      }\n    }, slide.text), __jsx(\"img\", {\n      src: slide.img,\n      alt: \"slide\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 13\n      }\n    }));\n  })), __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.newsAndSidebar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.news,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.newsTitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 11\n    }\n  }, \"\\u041D\\u043E\\u0432\\u0438\\u043D\\u0438\"), _api_news_json__WEBPACK_IMPORTED_MODULE_9__.map(function (post) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      key: post.id,\n      href: \"/post/[id]\",\n      as: \"/post/\".concat(post.id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.link,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 15\n      }\n    }, __jsx(_components_News__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      post: post,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 17\n      }\n    })));\n  })), __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.sidebar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.events,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.subtitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }, \"\\u041F\\u043E\\u0434\\u0456\\u0457\"), __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.event,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }\n  }, __jsx(\"h4\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.eventTitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 15\n    }\n  }, \"\\u0417\\u043C\\u0430\\u0433\\u0430\\u043D\\u043D\\u044F \\u043F\\u043E \\u0442\\u0435\\u0441\\u0442\\u0443\\u0432\\u0430\\u043D\\u043D\\u044E\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.eventPlace,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 15\n    }\n  }, \"\\u0410\\u043A\\u0442\\u043E\\u0432\\u0438\\u0439 \\u0437\\u0430\\u043B\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.eventDate,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 15\n    }\n  }, \"9 \\u0432\\u0435\\u0440\\u0435\\u0441\\u043D\\u044F\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.eventTime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 15\n    }\n  }, \"14:10\")), __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.event,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 13\n    }\n  }, __jsx(\"h4\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.eventTitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 15\n    }\n  }, \"\\u0414\\u0435\\u043C\\u043E\\u043D\\u0441\\u0442\\u0440\\u0430\\u0446\\u0456\\u044F \\u043F\\u0435\\u0442 \\u043F\\u0440\\u043E\\u0434\\u0436\\u0435\\u043A\\u0442\\u0456\\u0432\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.eventPlace,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 15\n    }\n  }, \"\\u0410\\u043A\\u0442\\u043E\\u0432\\u0438\\u0439 \\u0437\\u0430\\u043B\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.eventDate,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 15\n    }\n  }, \"12 \\u0432\\u0435\\u0440\\u0435\\u0441\\u043D\\u044F\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.eventTime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 15\n    }\n  }, \"14:00\"))), __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.feedback,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: \"https://forms.gle/hyLLUHdFYqrQ6QiB6\",\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.feedbackLink,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 13\n    }\n  }, \"\\u0413\\u0443\\u0433\\u043B \\u0444\\u043E\\u0440\\u043C\\u0430 \\u0434\\u043B\\u044F \\u0444\\u0456\\u0434\\u0431\\u0435\\u043A\\u0443\"), __jsx(\"a\", {\n    href: \"https://t.me/mir4ri\",\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.feedbackLink,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 13\n    }\n  }, \"\\u041C\\u0456\\u0439 telegram: \", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 29\n    }\n  }), \" @mir4ri\")))));\n}; // Index.getInitialProps = async ctx => {\n//   const res = await fetch(posts);\n//   const json = await res.json();\n//   return { posts: data };\n// };\n\n\n_s(Index, \"rNqMfT5TabVLHET6QcNr1T2KgcE=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Index));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Index\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiSW5kZXgiLCJjbGFzc05hbWUiLCJ1c2VTdGF0ZSIsInNsaWRlclN0eWxlcyIsImFuaW1hdGVJbiIsImFjdGl2ZVNsaWRlIiwic2V0TmV3U2xpZGUiLCJzbGlkZXJQb3MiLCJzZXRTbGlkZXJQb3MiLCJzZXR0aW5ncyIsInVzZUNTUyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwiZWFzaW5nIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJwYXVzZU9uSG92ZXIiLCJ0b3VjaE1vdmUiLCJhcnJvd3MiLCJiZWZvcmVDaGFuZ2UiLCJhbmltYXRlT3V0IiwiYWZ0ZXJDaGFuZ2UiLCJjdXJyZW50Iiwic2xpZGVzIiwidGl0bGUiLCJ0ZXh0IiwiaW1nIiwiaW5kZXgiLCJtYXAiLCJzbGlkZSIsIm5ld3NBbmRTaWRlYmFyIiwibmV3cyIsIm5ld3NUaXRsZSIsInBvc3RzIiwicG9zdCIsImlkIiwibGluayIsInNpZGViYXIiLCJldmVudHMiLCJzdWJ0aXRsZSIsImV2ZW50IiwiZXZlbnRUaXRsZSIsImV2ZW50UGxhY2UiLCJldmVudERhdGUiLCJldmVudFRpbWUiLCJmZWVkYmFjayIsImZlZWRiYWNrTGluayIsIndpdGhMYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQW1CO0FBQUE7O0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQ0MseURBQVksQ0FBQ0MsU0FBZCxDQURaO0FBQUEsTUFDeEJDLFdBRHdCO0FBQUEsTUFDWEMsV0FEVzs7QUFBQSxtQkFFR0osc0RBQVEsQ0FBQyxDQUFE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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUUscUNBRFI7QUFFRSxhQUFTLEVBQUVsQix3REFBSyxDQUFDbUIsWUFGbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2SEFERixFQU9FO0FBQUcsUUFBSSxFQUFFLHFCQUFUO0FBQWdDLGFBQVMsRUFBRW5CLHdEQUFLLENBQUNtQixZQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUNnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRGhCLGFBUEYsQ0FoQkYsQ0FYRixDQW5DRixDQURGO0FBOEVELENBaklELEMsQ0FtSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0dBeElNakQsSzs7S0FBQUEsSztBQTBJUyxxRUFBQWtELGtFQUFVLENBQUNsRCxLQUFELENBQXpCIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgd2l0aExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBOZXdzIGZyb20gXCIuLi9jb21wb25lbnRzL05ld3NcIjtcbmltcG9ydCBpbmRleCBmcm9tIFwiLi9pbmRleC9pbmRleC5zY3NzXCI7XG5pbXBvcnQgc2xpZGVyU3R5bGVzIGZyb20gXCIuL2luZGV4L3NsaWRlci5zY3NzXCI7XG5pbXBvcnQgcG9zdHMgZnJvbSBcIi4uL2FwaS9uZXdzLmpzb25cIjtcblxuY29uc3QgSW5kZXggPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlU2xpZGUsIHNldE5ld1NsaWRlXSA9IHVzZVN0YXRlKHNsaWRlclN0eWxlcy5hbmltYXRlSW4pO1xuICBjb25zdCBbc2xpZGVyUG9zLCBzZXRTbGlkZXJQb3NdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgdXNlQ1NTOiB0cnVlLFxuICAgIGRvdHM6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDEyNTAsXG4gICAgZWFzaW5nOiBcImVhc2VvdXRcIixcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgYXV0b3BsYXlTcGVlZDogNzAwMCxcbiAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgdG91Y2hNb3ZlOiBmYWxzZSxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGJlZm9yZUNoYW5nZTogKCkgPT4gc2V0TmV3U2xpZGUoc2xpZGVyU3R5bGVzLmFuaW1hdGVPdXQpLFxuICAgIGFmdGVyQ2hhbmdlOiAoY3VycmVudCkgPT4ge1xuICAgICAge1xuICAgICAgICBzZXROZXdTbGlkZShzbGlkZXJTdHlsZXMuYW5pbWF0ZUluKTtcbiAgICAgICAgc2V0U2xpZGVyUG9zKGN1cnJlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG5cbiAgY29uc3Qgc2xpZGVzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcItCk0JrQldCfXCIsXG4gICAgICB0ZXh0OlxuICAgICAgICBcItCk0LDRhdC+0LLQuNC5INC60L7Qu9C10LTQtiDQtdC70LXQutGC0YDQvtC90L3QuNGFINC/0YDQuNC70LDQtNGW0LIg0IbQpNCd0KLQo9Cd0JPRgyDigJMg0YbQtSDRgdGD0YfQsNGB0L3QuNC5INC90LDQstGH0LDQu9GM0L3QuNC5INC30LDQutC70LDQtCDQsiDRj9C60L7QvNGDINGB0YLQstC+0YDQtdC90L4g0LLRgdGWINGD0LzQvtCy0Lgg0LTQu9GPINC/0ZbQtNCz0L7RgtC+0LLQutC4INC80L7Qu9C+0LTRiNC+0LPQviDQsdCw0LrQsNC70LDQstGA0LAsINGP0LrQuNC5INC30LTQsNGC0LXQvSDQstC40YLRgNC40LzQsNGC0Lgg0LrQvtC90LrRg9GA0LXQvdGG0ZbRjiDQvdCwINGA0LjQvdC60YMg0L/RgNCw0YbRli5cIixcbiAgICAgIGltZzogXCIvc3RhdGljL2ltZy9zbGlkZTEuanBnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCLQodGC0L7QvyDQutC+0YDRg9C/0YbRltGPXCIsXG4gICAgICB0ZXh0OlxuICAgICAgICBcItCi0LXQu9C10YTQvtC9INCz0LDRgNGP0YfQvtGXINC70ZbQvdGW0Zcg0LTQu9GPINC/0L7QstGW0LTQvtC80LvQtdC90L3RjyDQv9GA0L4g0LzQvtC20LvQuNCy0ZYg0YTQsNC60YLQuCDQutC+0YDRg9C/0YbRltC50L3QuNGFINC/0YDQsNCy0L7Qv9C+0YDRg9GI0LXQvdGMINCw0LHQviDQv9C+0LIn0Y/Qt9Cw0L3QuNGFINC3INC60L7RgNGD0L/RhtGW0ZTRjiDQv9GA0LDQstC+0L/QvtGA0YPRiNC10L3RjCAoMDM0MikgNzgzIDA0NlwiLFxuICAgICAgaW1nOiBcIi9zdGF0aWMvaW1nL3NsaWRlMy5qcGdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcItCf0YDQvtCz0YDQsNC80L3QsCDRltC90LbQtdC90LXRgNGW0Y9cIixcbiAgICAgIHRleHQ6IFwiLi4uXCIsXG4gICAgICBpbWc6IFwiL3N0YXRpYy9pbWcvc2xpZGUyLmpwZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwi0JrQvtC80L8n0Y7RgtC10YDQvdCwINGW0L3QttC10L3QtdGA0ZbRj1wiLFxuICAgICAgdGV4dDogXCIuLi5cIixcbiAgICAgIGltZzogXCIvc3RhdGljL2ltZy9wb3N0LmpwZ1wiLFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9eyhpbmRleC5pbmRleCwgY2xhc3NOYW1lKX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPtCk0JrQldCfIC0g0JPQvtC70L7QstC90LA8L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICB7c2xpZGVzLm1hcCgoc2xpZGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3NsaWRlclN0eWxlcy5zbGlkZX0+XG4gICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzbGlkZXJQb3MgPT09IGluZGV4ID8gYWN0aXZlU2xpZGUgOiBcIiBcIn0gJHtcbiAgICAgICAgICAgICAgICBzbGlkZXJTdHlsZXMudGl0bGVcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzbGlkZS50aXRsZX1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3NsaWRlclBvcyA9PT0gaW5kZXggPyBhY3RpdmVTbGlkZSA6IFwiIFwifSAke1xuICAgICAgICAgICAgICAgIHNsaWRlclN0eWxlcy50ZXh0XG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2xpZGUudGV4dH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtzbGlkZS5pbWd9IGFsdD1cInNsaWRlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L1NsaWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbmRleC5uZXdzQW5kU2lkZWJhcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbmRleC5uZXdzfT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtpbmRleC5uZXdzVGl0bGV9PtCd0L7QstC40L3QuDwvaDI+XG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPExpbmsga2V5PXtwb3N0LmlkfSBocmVmPXtgL3Bvc3QvW2lkXWB9IGFzPXtgL3Bvc3QvJHtwb3N0LmlkfWB9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2luZGV4Lmxpbmt9PlxuICAgICAgICAgICAgICAgIDxOZXdzIHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbmRleC5zaWRlYmFyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aW5kZXguZXZlbnRzfT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2luZGV4LnN1YnRpdGxlfT7Qn9C+0LTRltGXPC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbmRleC5ldmVudH0+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2luZGV4LmV2ZW50VGl0bGV9PtCX0LzQsNCz0LDQvdC90Y8g0L/QviDRgtC10YHRgtGD0LLQsNC90L3RjjwvaDQ+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aW5kZXguZXZlbnRQbGFjZX0+0JDQutGC0L7QstC40Lkg0LfQsNC7PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2luZGV4LmV2ZW50RGF0ZX0+OSDQstC10YDQtdGB0L3Rjzwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpbmRleC5ldmVudFRpbWV9PjE0OjEwPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aW5kZXguZXZlbnR9PlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtpbmRleC5ldmVudFRpdGxlfT7QlNC10LzQvtC90YHRgtGA0LDRhtGW0Y8g0L/QtdGCINC/0YDQvtC00LbQtdC60YLRltCyPC9oND5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpbmRleC5ldmVudFBsYWNlfT7QkNC60YLQvtCy0LjQuSDQt9Cw0Ls8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aW5kZXguZXZlbnREYXRlfT4xMiDQstC10YDQtdGB0L3Rjzwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpbmRleC5ldmVudFRpbWV9PjE0OjAwPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2luZGV4LmZlZWRiYWNrfT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9e1wiaHR0cHM6Ly9mb3Jtcy5nbGUvaHlMTFVIZEZZcXJRNlFpQjZcIn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbmRleC5mZWVkYmFja0xpbmt9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgINCT0YPQs9C7INGE0L7RgNC80LAg0LTQu9GPINGE0ZbQtNCx0LXQutGDXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPXtcImh0dHBzOi8vdC5tZS9taXI0cmlcIn0gY2xhc3NOYW1lPXtpbmRleC5mZWVkYmFja0xpbmt9PlxuICAgICAgICAgICAgICDQnNGW0LkgdGVsZWdyYW06IDxiciAvPiBAbWlyNHJpXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocG9zdHMpO1xuLy8gICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuLy8gICByZXR1cm4geyBwb3N0czogZGF0YSB9O1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aExheW91dChJbmRleCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})