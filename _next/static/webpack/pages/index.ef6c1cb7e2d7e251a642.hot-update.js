webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_client_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_News__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/News */ \"./components/News/index.jsx\");\n/* harmony import */ var _index_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index/index.scss */ \"./pages/index/index.scss\");\n/* harmony import */ var _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_index_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _index_slider_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index/slider.scss */ \"./pages/index/slider.scss\");\n/* harmony import */ var _index_slider_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_slider_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ \"./components/Header/index.jsx\");\n/* harmony import */ var _components_MobileNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MobileNav */ \"./components/MobileNav/index.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer/index.jsx\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav/index.jsx\");\n/* harmony import */ var _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout/layout.scss */ \"./components/Layout/layout.scss\");\n/* harmony import */ var _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Container */ \"./components/Container/index.jsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/client/pages/index.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n// lib\n\n\n\n // components\n// import withLayout from \"../components/Layout\";\n\n // styles\n\n\n // * hello hoc in next :)\n\n\n\n\n\n //! поки Next.js не пофіксить HOC\n// custom lib\n\n\n\nvar Index = function Index(_ref) {\n  _s();\n\n  var allPostsData = _ref.allPostsData;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_index_slider_scss__WEBPACK_IMPORTED_MODULE_7___default.a.animateIn),\n      activeSlide = _useState[0],\n      setNewSlide = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      sliderPos = _useState2[0],\n      setSliderPos = _useState2[1]; // settings for slider\n\n\n  var settings = {\n    useCSS: true,\n    dots: true,\n    infinite: true,\n    speed: 1250,\n    easing: \"easeout\",\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    autoplay: true,\n    autoplaySpeed: 7000,\n    pauseOnHover: true,\n    touchMove: false,\n    arrows: false,\n    beforeChange: function beforeChange() {\n      return setNewSlide(_index_slider_scss__WEBPACK_IMPORTED_MODULE_7___default.a.animateOut);\n    },\n    afterChange: function afterChange(current) {\n      {\n        setNewSlide(_index_slider_scss__WEBPACK_IMPORTED_MODULE_7___default.a.animateIn);\n        setSliderPos(current);\n      }\n    }\n  }; // slider content\n\n  var slides = [{\n    title: \"ФКЕП\",\n    text: \"Фаховий коледж електронних приладів ІФНТУНГу – це сучасний навчальний заклад в якому створено всі умови для підготовки молодшого бакалавра, який здатен витримати конкуренцію на ринку праці.\",\n    img: \"/static/img/slide1.jpg\"\n  }, // {\n  //   title: \"Стоп корупція\",\n  //   text:\n  //     \"Телефон гарячої лінії для повідомлення про можливі факти корупційних правопорушень або пов'язаних з корупцією правопорушень (0342) 783 046\",\n  //   img: \"/static/img/slide3.jpg\",\n  // },\n  {\n    title: \"Програмна інженерія\",\n    text: \"...\",\n    img: \"/static/img/slide2.jpg\"\n  }, {\n    title: \"Комп'ютерна інженерія\",\n    text: \"...\",\n    img: \"/static/img/slide3.jpg\"\n  }];\n  return __jsx(\"div\", {\n    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_12___default.a.alignContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, \"\\u0424\\u041A\\u0415\\u041F - \\u0413\\u043E\\u043B\\u043E\\u0432\\u043D\\u0430\"), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    type: \"text/css\",\n    href: \"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    type: \"text/css\",\n    href: \"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/static/img/fav.svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 10\n    }\n  })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_client_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, settings, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }), slides.map(function (slide, index) {\n    return __jsx(\"div\", {\n      key: index,\n      className: _index_slider_scss__WEBPACK_IMPORTED_MODULE_7___default.a.slide,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 15\n      }\n    }, __jsx(\"h2\", {\n      className: \"\".concat(sliderPos === index ? activeSlide : \" \", \" \").concat(_index_slider_scss__WEBPACK_IMPORTED_MODULE_7___default.a.title),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 17\n      }\n    }, slide.title), __jsx(\"p\", {\n      className: \"\".concat(sliderPos === index ? activeSlide : \" \", \" \").concat(_index_slider_scss__WEBPACK_IMPORTED_MODULE_7___default.a.text),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 17\n      }\n    }, slide.text), __jsx(\"img\", {\n      src: slide.img,\n      alt: \"slide\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 17\n      }\n    }));\n  })), __jsx(\"div\", {\n    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_12___default.a.content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.events,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.subtitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 13\n    }\n  }, \"\\u041F\\u043E\\u0434\\u0456\\u0457\"), __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.event,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 17\n    }\n  }, __jsx(\"h4\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.eventTitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 19\n    }\n  }, \"\\u0417\\u043C\\u0430\\u0433\\u0430\\u043D\\u043D\\u044F \\u043F\\u043E \\u0442\\u0435\\u0441\\u0442\\u0443\\u0432\\u0430\\u043D\\u043D\\u044E\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.eventPlace,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 19\n    }\n  }, \"\\u0410\\u043A\\u0442\\u043E\\u0432\\u0438\\u0439 \\u0437\\u0430\\u043B\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.eventDate,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 19\n    }\n  }, \"9 \\u0432\\u0435\\u0440\\u0435\\u0441\\u043D\\u044F\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.eventTime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 19\n    }\n  }, \"14:10\")), __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.event,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 17\n    }\n  }, __jsx(\"h4\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.eventTitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 19\n    }\n  }, \"\\u0414\\u0435\\u043C\\u043E\\u043D\\u0441\\u0442\\u0440\\u0430\\u0446\\u0456\\u044F \\u043F\\u0435\\u0442 \\u043F\\u0440\\u043E\\u0434\\u0436\\u0435\\u043A\\u0442\\u0456\\u0432\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.eventPlace,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 19\n    }\n  }, \"\\u0410\\u043A\\u0442\\u043E\\u0432\\u0438\\u0439 \\u0437\\u0430\\u043B\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.eventDate,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 19\n    }\n  }, \"12 \\u0432\\u0435\\u0440\\u0435\\u0441\\u043D\\u044F\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.eventTime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 19\n    }\n  }, \"14:00\")), __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.feedback,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    href: \"https://forms.gle/hyLLUHdFYqrQ6QiB6\",\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.feedbackLink,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 17\n    }\n  }, \"\\u0413\\u0443\\u0433\\u043B \\u0444\\u043E\\u0440\\u043C\\u0430 \\u0434\\u043B\\u044F \\u0444\\u0456\\u0434\\u0431\\u0435\\u043A\\u0443\"), __jsx(\"a\", {\n    href: \"https://t.me/mir4ri\",\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.feedbackLink,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 17\n    }\n  }, \"Telegram: @mir4ri\"))), __jsx(\"section\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.news,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.newsTitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 15\n    }\n  }, \"\\u041D\\u043E\\u0432\\u0438\\u043D\\u0438\"), allPostsData.map(function (_ref2) {\n    var slug = _ref2.slug,\n        category = _ref2.category,\n        date = _ref2.date,\n        title = _ref2.title,\n        excerpt = _ref2.excerpt;\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      key: slug,\n      href: \"/post/[slug]\",\n      as: \"/post/\".concat(slug),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.link,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 148,\n        columnNumber: 19\n      }\n    }, __jsx(_components_News__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      category: category,\n      date: date,\n      title: title,\n      excerpt: excerpt,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 21\n      }\n    })));\n  })), __jsx(_components_MobileNav__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 13\n    }\n  }))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Index, \"rNqMfT5TabVLHET6QcNr1T2KgcE=\");\n\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiSW5kZXgiLCJhbGxQb3N0c0RhdGEiLCJ1c2VTdGF0ZSIsInNsaWRlclN0eWxlcyIsImFuaW1hdGVJbiIsImFjdGl2ZVNsaWRlIiwic2V0TmV3U2xpZGUiLCJzbGlkZXJQb3MiLCJzZXRTbGlkZXJQb3MiLCJzZXR0aW5ncyIsInVzZUNTUyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwiZWFzaW5nIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJwYXVzZU9uSG92ZXIiLCJ0b3VjaE1vdmUiLCJhcnJvd3MiLCJiZWZvcmVDaGFuZ2UiLCJhbmltYXRlT3V0IiwiYWZ0ZXJDaGFuZ2UiLCJjdXJyZW50Iiwic2xpZGVzIiwidGl0bGUiLCJ0ZXh0IiwiaW1nIiwiY29udGFpbmVyIiwiYWxpZ25Db250YWluZXIiLCJtYXAiLCJzbGlkZSIsImluZGV4IiwiY29udGVudCIsImV2ZW50cyIsInN1YnRpdGxlIiwiZXZlbnQiLCJldmVudFRpdGxlIiwiZXZlbnRQbGFjZSIsImV2ZW50RGF0ZSIsImV2ZW50VGltZSIsImZlZWRiYWNrIiwiZmVlZGJhY2tMaW5rIiwibmV3cyIsIm5ld3NUaXRsZSIsInNsdWciLCJjYXRlZ29yeSIsImRhdGUiLCJleGNlcnB0IiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTs7Q0FFQTs7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBQzBEO0FBQzFEOztBQUVBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXNCO0FBQUE7O0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjs7QUFBQSxrQkFDQ0Msc0RBQVEsQ0FBQ0MseURBQVksQ0FBQ0MsU0FBZCxDQURU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REYsRUFFRzdDLFlBQVksQ0FBQytCLEdBQWIsQ0FBaUI7QUFBQSxRQUFHZSxJQUFILFNBQUdBLElBQUg7QUFBQSxRQUFTQyxRQUFULFNBQVNBLFFBQVQ7QUFBQSxRQUFtQkMsSUFBbkIsU0FBbUJBLElBQW5CO0FBQUEsUUFBeUJ0QixLQUF6QixTQUF5QkEsS0FBekI7QUFBQSxRQUFnQ3VCLE9BQWhDLFNBQWdDQSxPQUFoQztBQUFBLFdBQ2hCLE1BQUMsZ0RBQUQ7QUFBTSxTQUFHLEVBQUVILElBQVg7QUFBaUIsVUFBSSxnQkFBckI7QUFBdUMsUUFBRSxrQkFBV0EsSUFBWCxDQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUViLHdEQUFLLENBQUNpQixJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx3REFBRDtBQUNFLGNBQVEsRUFBRUgsUUFEWjtBQUVFLFVBQUksRUFBRUMsSUFGUjtBQUdFLFdBQUssRUFBRXRCLEtBSFQ7QUFJRSxhQUFPLEVBQUV1QixPQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLENBRGdCO0FBQUEsR0FBakIsQ0FGSCxDQTdCSixFQTZDSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3Q0osQ0F2QkYsQ0FoQkYsRUF1RkUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkZGLENBREY7QUEyRkQsQ0FoSkQ7O0dBQU1sRCxLOztLQUFBQSxLOztBQWtKU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuLy8gY29tcG9uZW50c1xuLy8gaW1wb3J0IHdpdGhMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTmV3cyBmcm9tIFwiLi4vY29tcG9uZW50cy9OZXdzXCI7XG4vLyBzdHlsZXNcbmltcG9ydCBpbmRleCBmcm9tIFwiLi9pbmRleC9pbmRleC5zY3NzXCI7XG5pbXBvcnQgc2xpZGVyU3R5bGVzIGZyb20gXCIuL2luZGV4L3NsaWRlci5zY3NzXCI7XG4vLyAqIGhlbGxvIGhvYyBpbiBuZXh0IDopXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IE1vYmlsZU5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2JpbGVOYXZcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL05hdlwiO1xuaW1wb3J0IGNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvbGF5b3V0LnNjc3NcIjsgLy8hINC/0L7QutC4IE5leHQuanMg0L3QtSDQv9C+0YTRltC60YHQuNGC0YwgSE9DXG4vLyBjdXN0b20gbGliXG5pbXBvcnQgeyBnZXRTb3J0ZWRQb3N0cyB9IGZyb20gXCIuLi9saWIvcG9zdHNcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XG5cbmNvbnN0IEluZGV4ID0gKHsgYWxsUG9zdHNEYXRhIH0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZVNsaWRlLCBzZXROZXdTbGlkZV0gPSB1c2VTdGF0ZShzbGlkZXJTdHlsZXMuYW5pbWF0ZUluKTtcbiAgY29uc3QgW3NsaWRlclBvcywgc2V0U2xpZGVyUG9zXSA9IHVzZVN0YXRlKDApO1xuXG4gIC8vIHNldHRpbmdzIGZvciBzbGlkZXJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgdXNlQ1NTOiB0cnVlLFxuICAgIGRvdHM6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDEyNTAsXG4gICAgZWFzaW5nOiBcImVhc2VvdXRcIixcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgYXV0b3BsYXlTcGVlZDogNzAwMCxcbiAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgdG91Y2hNb3ZlOiBmYWxzZSxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGJlZm9yZUNoYW5nZTogKCkgPT4gc2V0TmV3U2xpZGUoc2xpZGVyU3R5bGVzLmFuaW1hdGVPdXQpLFxuICAgIGFmdGVyQ2hhbmdlOiAoY3VycmVudCkgPT4ge1xuICAgICAge1xuICAgICAgICBzZXROZXdTbGlkZShzbGlkZXJTdHlsZXMuYW5pbWF0ZUluKTtcbiAgICAgICAgc2V0U2xpZGVyUG9zKGN1cnJlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG5cbiAgLy8gc2xpZGVyIGNvbnRlbnRcbiAgY29uc3Qgc2xpZGVzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcItCk0JrQldCfXCIsXG4gICAgICB0ZXh0OlxuICAgICAgICBcItCk0LDRhdC+0LLQuNC5INC60L7Qu9C10LTQtiDQtdC70LXQutGC0YDQvtC90L3QuNGFINC/0YDQuNC70LDQtNGW0LIg0IbQpNCd0KLQo9Cd0JPRgyDigJMg0YbQtSDRgdGD0YfQsNGB0L3QuNC5INC90LDQstGH0LDQu9GM0L3QuNC5INC30LDQutC70LDQtCDQsiDRj9C60L7QvNGDINGB0YLQstC+0YDQtdC90L4g0LLRgdGWINGD0LzQvtCy0Lgg0LTQu9GPINC/0ZbQtNCz0L7RgtC+0LLQutC4INC80L7Qu9C+0LTRiNC+0LPQviDQsdCw0LrQsNC70LDQstGA0LAsINGP0LrQuNC5INC30LTQsNGC0LXQvSDQstC40YLRgNC40LzQsNGC0Lgg0LrQvtC90LrRg9GA0LXQvdGG0ZbRjiDQvdCwINGA0LjQvdC60YMg0L/RgNCw0YbRli5cIixcbiAgICAgIGltZzogXCIvc3RhdGljL2ltZy9zbGlkZTEuanBnXCIsXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICB0aXRsZTogXCLQodGC0L7QvyDQutC+0YDRg9C/0YbRltGPXCIsXG4gICAgLy8gICB0ZXh0OlxuICAgIC8vICAgICBcItCi0LXQu9C10YTQvtC9INCz0LDRgNGP0YfQvtGXINC70ZbQvdGW0Zcg0LTQu9GPINC/0L7QstGW0LTQvtC80LvQtdC90L3RjyDQv9GA0L4g0LzQvtC20LvQuNCy0ZYg0YTQsNC60YLQuCDQutC+0YDRg9C/0YbRltC50L3QuNGFINC/0YDQsNCy0L7Qv9C+0YDRg9GI0LXQvdGMINCw0LHQviDQv9C+0LIn0Y/Qt9Cw0L3QuNGFINC3INC60L7RgNGD0L/RhtGW0ZTRjiDQv9GA0LDQstC+0L/QvtGA0YPRiNC10L3RjCAoMDM0MikgNzgzIDA0NlwiLFxuICAgIC8vICAgaW1nOiBcIi9zdGF0aWMvaW1nL3NsaWRlMy5qcGdcIixcbiAgICAvLyB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcItCf0YDQvtCz0YDQsNC80L3QsCDRltC90LbQtdC90LXRgNGW0Y9cIixcbiAgICAgIHRleHQ6IFwiLi4uXCIsXG4gICAgICBpbWc6IFwiL3N0YXRpYy9pbWcvc2xpZGUyLmpwZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwi0JrQvtC80L8n0Y7RgtC10YDQvdCwINGW0L3QttC10L3QtdGA0ZbRj1wiLFxuICAgICAgdGV4dDogXCIuLi5cIixcbiAgICAgIGltZzogXCIvc3RhdGljL2ltZy9zbGlkZTMuanBnXCIsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXIuYWxpZ25Db250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT7QpNCa0JXQnyAtINCT0L7Qu9C+0LLQvdCwPC90aXRsZT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9pbWcvZmF2LnN2Z1wiPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4gICAgICAgICAgICB7c2xpZGVzLm1hcCgoc2xpZGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzbGlkZXJTdHlsZXMuc2xpZGV9PlxuICAgICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzbGlkZXJQb3MgPT09IGluZGV4ID8gYWN0aXZlU2xpZGUgOiBcIiBcIn0gJHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyU3R5bGVzLnRpdGxlXG4gICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7c2xpZGUudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzbGlkZXJQb3MgPT09IGluZGV4ID8gYWN0aXZlU2xpZGUgOiBcIiBcIn0gJHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyU3R5bGVzLnRleHRcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtzbGlkZS50ZXh0fVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2xpZGUuaW1nfSBhbHQ9XCJzbGlkZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvU2xpZGVyPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lci5jb250ZW50fT5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2luZGV4LmV2ZW50c30+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtpbmRleC5zdWJ0aXRsZX0+0J/QvtC00ZbRlzwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2luZGV4LmV2ZW50fT5cbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2luZGV4LmV2ZW50VGl0bGV9PtCX0LzQsNCz0LDQvdC90Y8g0L/QviDRgtC10YHRgtGD0LLQsNC90L3RjjwvaDQ+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2luZGV4LmV2ZW50UGxhY2V9PtCQ0LrRgtC+0LLQuNC5INC30LDQuzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aW5kZXguZXZlbnREYXRlfT45INCy0LXRgNC10YHQvdGPPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpbmRleC5ldmVudFRpbWV9PjE0OjEwPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbmRleC5ldmVudH0+XG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtpbmRleC5ldmVudFRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAg0JTQtdC80L7QvdGB0YLRgNCw0YbRltGPINC/0LXRgiDQv9GA0L7QtNC20LXQutGC0ZbQslxuICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aW5kZXguZXZlbnRQbGFjZX0+0JDQutGC0L7QstC40Lkg0LfQsNC7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpbmRleC5ldmVudERhdGV9PjEyINCy0LXRgNC10YHQvdGPPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpbmRleC5ldmVudFRpbWV9PjE0OjAwPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aW5kZXguZmVlZGJhY2t9PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtcImh0dHBzOi8vZm9ybXMuZ2xlL2h5TExVSGRGWXFyUTZRaUI2XCJ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2luZGV4LmZlZWRiYWNrTGlua31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDQk9GD0LPQuyDRhNC+0YDQvNCwINC00LvRjyDRhNGW0LTQsdC10LrRg1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtcImh0dHBzOi8vdC5tZS9taXI0cmlcIn0gY2xhc3NOYW1lPXtpbmRleC5mZWVkYmFja0xpbmt9PlxuICAgICAgICAgICAgICAgICAgVGVsZWdyYW06IEBtaXI0cmlcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2luZGV4Lm5ld3N9PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtpbmRleC5uZXdzVGl0bGV9PtCd0L7QstC40L3QuDwvaDI+XG4gICAgICAgICAgICAgIHthbGxQb3N0c0RhdGEubWFwKCh7IHNsdWcsIGNhdGVnb3J5LCBkYXRlLCB0aXRsZSwgZXhjZXJwdCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtzbHVnfSBocmVmPXtgL3Bvc3QvW3NsdWddYH0gYXM9e2AvcG9zdC8ke3NsdWd9YH0+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2luZGV4Lmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICA8TmV3c1xuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtkYXRlfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICBleGNlcnB0PXtleGNlcnB0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgIFxuICAgICAgICAgICAgPE1vYmlsZU5hdiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0cygpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxQb3N0c0RhdGEsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})