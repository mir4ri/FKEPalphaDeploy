webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_client_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_News__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/News */ \"./components/News/index.jsx\");\n/* harmony import */ var _index_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index/index.scss */ \"./pages/index/index.scss\");\n/* harmony import */ var _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_index_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _index_slider_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index/slider.scss */ \"./pages/index/slider.scss\");\n/* harmony import */ var _index_slider_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_slider_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ \"./components/Header/index.jsx\");\n/* harmony import */ var _components_MobileNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MobileNav */ \"./components/MobileNav/index.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer/index.jsx\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav/index.jsx\");\n/* harmony import */ var _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout/layout.scss */ \"./components/Layout/layout.scss\");\n/* harmony import */ var _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_12__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/client/pages/index.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n// lib\n\n\n\n // components\n// import withLayout from \"../components/Layout\";\n\n // styles\n\n\n // * hello hoc in next :)\n\n\n\n\n\n //! поки Next.js не пофіксить HOC\n// custom lib\n\nvar Index = function Index(_ref) {\n  _s();\n\n  var allPostsData = _ref.allPostsData;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_index_slider_scss__WEBPACK_IMPORTED_MODULE_7___default.a.animateIn),\n      activeSlide = _useState[0],\n      setNewSlide = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      sliderPos = _useState2[0],\n      setSliderPos = _useState2[1]; // settings for slider\n\n\n  var settings = {\n    useCSS: true,\n    dots: true,\n    infinite: true,\n    speed: 1250,\n    easing: \"easeout\",\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    autoplay: true,\n    autoplaySpeed: 7000,\n    pauseOnHover: true,\n    touchMove: false,\n    arrows: false,\n    beforeChange: function beforeChange() {\n      return setNewSlide(_index_slider_scss__WEBPACK_IMPORTED_MODULE_7___default.a.animateOut);\n    },\n    afterChange: function afterChange(current) {\n      {\n        setNewSlide(_index_slider_scss__WEBPACK_IMPORTED_MODULE_7___default.a.animateIn);\n        setSliderPos(current);\n      }\n    }\n  }; // slider content\n\n  var slides = [{\n    title: \"ФКЕП\",\n    text: \"Фаховий коледж електронних приладів ІФНТУНГу – це сучасний навчальний заклад в якому створено всі умови для підготовки молодшого бакалавра, який здатен витримати конкуренцію на ринку праці.\",\n    img: \"/static/img/slide1.jpg\"\n  }, // {\n  //   title: \"Стоп корупція\",\n  //   text:\n  //     \"Телефон гарячої лінії для повідомлення про можливі факти корупційних правопорушень або пов'язаних з корупцією правопорушень (0342) 783 046\",\n  //   img: \"/static/img/slide3.jpg\",\n  // },\n  {\n    title: \"Програмна інженерія\",\n    text: \"...\",\n    img: \"/static/img/slide2.jpg\"\n  }, {\n    title: \"Комп'ютерна інженерія\",\n    text: \"...\",\n    img: \"/static/img/slide3.jpg\"\n  }];\n  return __jsx(\"div\", {\n    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_12___default.a.alignContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, \"\\u0424\\u041A\\u0415\\u041F - \\u0413\\u043E\\u043B\\u043E\\u0432\\u043D\\u0430\"), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    type: \"text/css\",\n    href: \"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    type: \"text/css\",\n    href: \"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }), __jsx(\"main\", {\n    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_12___default.a.layoutContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_client_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, settings, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }), slides.map(function (slide, index) {\n    return __jsx(\"div\", {\n      key: index,\n      className: _index_slider_scss__WEBPACK_IMPORTED_MODULE_7___default.a.slide,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 13\n      }\n    }, __jsx(\"h2\", {\n      className: \"\".concat(sliderPos === index ? activeSlide : \" \", \" \").concat(_index_slider_scss__WEBPACK_IMPORTED_MODULE_7___default.a.title),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 15\n      }\n    }, slide.title), __jsx(\"p\", {\n      className: \"\".concat(sliderPos === index ? activeSlide : \" \", \" \").concat(_index_slider_scss__WEBPACK_IMPORTED_MODULE_7___default.a.text),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 15\n      }\n    }, slide.text), __jsx(\"img\", {\n      src: slide.img,\n      alt: \"slide\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 15\n      }\n    }));\n  })), __jsx(\"div\", {\n    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_12___default.a.content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.newsAndSidebar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.news,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.newsTitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 15\n    }\n  }, \"\\u041D\\u043E\\u0432\\u0438\\u043D\\u0438\"), allPostsData.map(function (_ref2) {\n    var slug = _ref2.slug,\n        category = _ref2.category,\n        date = _ref2.date,\n        title = _ref2.title,\n        excerpt = _ref2.excerpt;\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      key: slug,\n      href: \"/post/[slug]\",\n      as: \"/post/\".concat(slug),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.link,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 19\n      }\n    }, __jsx(_components_News__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      category: category,\n      date: date,\n      title: title,\n      excerpt: excerpt,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 21\n      }\n    })));\n  })), __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.sidebar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.events,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 15\n    }\n  }, __jsx(\"h3\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.subtitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 17\n    }\n  }, \"\\u041F\\u043E\\u0434\\u0456\\u0457\"), __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.event,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 17\n    }\n  }, __jsx(\"h4\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.eventTitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 19\n    }\n  }, \"\\u0417\\u043C\\u0430\\u0433\\u0430\\u043D\\u043D\\u044F \\u043F\\u043E \\u0442\\u0435\\u0441\\u0442\\u0443\\u0432\\u0430\\u043D\\u043D\\u044E\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.eventPlace,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 19\n    }\n  }, \"\\u0410\\u043A\\u0442\\u043E\\u0432\\u0438\\u0439 \\u0437\\u0430\\u043B\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.eventDate,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 19\n    }\n  }, \"9 \\u0432\\u0435\\u0440\\u0435\\u0441\\u043D\\u044F\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.eventTime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 19\n    }\n  }, \"14:10\")), __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.event,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 17\n    }\n  }, __jsx(\"h4\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.eventTitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 19\n    }\n  }, \"\\u0414\\u0435\\u043C\\u043E\\u043D\\u0441\\u0442\\u0440\\u0430\\u0446\\u0456\\u044F \\u043F\\u0435\\u0442 \\u043F\\u0440\\u043E\\u0434\\u0436\\u0435\\u043A\\u0442\\u0456\\u0432\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.eventPlace,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 19\n    }\n  }, \"\\u0410\\u043A\\u0442\\u043E\\u0432\\u0438\\u0439 \\u0437\\u0430\\u043B\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.eventDate,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 19\n    }\n  }, \"12 \\u0432\\u0435\\u0440\\u0435\\u0441\\u043D\\u044F\"), __jsx(\"span\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.eventTime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 19\n    }\n  }, \"14:00\"))), __jsx(\"div\", {\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.feedback,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    href: \"https://forms.gle/hyLLUHdFYqrQ6QiB6\",\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.feedbackLink,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 17\n    }\n  }, \"\\u0413\\u0443\\u0433\\u043B \\u0444\\u043E\\u0440\\u043C\\u0430 \\u0434\\u043B\\u044F \\u0444\\u0456\\u0434\\u0431\\u0435\\u043A\\u0443\"), __jsx(\"a\", {\n    href: \"https://t.me/mir4ri\",\n    className: _index_index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.feedbackLink,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 17\n    }\n  }, \"Telegram: @mir4ri\"))), __jsx(_components_MobileNav__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 13\n    }\n  })))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Index, \"rNqMfT5TabVLHET6QcNr1T2KgcE=\");\n\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiSW5kZXgiLCJhbGxQb3N0c0RhdGEiLCJ1c2VTdGF0ZSIsInNsaWRlclN0eWxlcyIsImFuaW1hdGVJbiIsImFjdGl2ZVNsaWRlIiwic2V0TmV3U2xpZGUiLCJzbGlkZXJQb3MiLCJzZXRTbGlkZXJQb3MiLCJzZXR0aW5ncyIsInVzZUNTUyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwiZWFzaW5nIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJwYXVzZU9uSG92ZXIiLCJ0b3VjaE1vdmUiLCJhcnJvd3MiLCJiZWZvcmVDaGFuZ2UiLCJhbmltYXRlT3V0IiwiYWZ0ZXJDaGFuZ2UiLCJjdXJyZW50Iiwic2xpZGVzIiwidGl0bGUiLCJ0ZXh0IiwiaW1nIiwiY29udGFpbmVyIiwiYWxpZ25Db250YWluZXIiLCJsYXlvdXRDb250YWluZXIiLCJtYXAiLCJzbGlkZSIsImluZGV4IiwiY29udGVudCIsIm5ld3NBbmRTaWRlYmFyIiwibmV3cyIsIm5ld3NUaXRsZSIsInNsdWciLCJjYXRlZ29yeSIsImRhdGUiLCJleGNlcnB0IiwibGluayIsInNpZGViYXIiLCJldmVudHMiLCJzdWJ0aXRsZSIsImV2ZW50IiwiZXZlbnRUaXRsZSIsImV2ZW50UGxhY2UiLCJldmVudERhdGUiLCJldmVudFRpbWUiLCJmZWVkYmFjayIsImZlZWRiYWNrTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBOztDQUVBOztBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FDMEQ7QUFDMUQ7O0FBR0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBc0I7QUFBQTs7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1COztBQUFBLGtC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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbi8vIGNvbXBvbmVudHNcbi8vIGltcG9ydCB3aXRoTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IE5ld3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmV3c1wiO1xuLy8gc3R5bGVzXG5pbXBvcnQgaW5kZXggZnJvbSBcIi4vaW5kZXgvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHNsaWRlclN0eWxlcyBmcm9tIFwiLi9pbmRleC9zbGlkZXIuc2Nzc1wiO1xuLy8gKiBoZWxsbyBob2MgaW4gbmV4dCA6KVxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBNb2JpbGVOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9iaWxlTmF2XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZcIjtcbmltcG9ydCBjb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L2xheW91dC5zY3NzXCI7IC8vISDQv9C+0LrQuCBOZXh0LmpzINC90LUg0L/QvtGE0ZbQutGB0LjRgtGMIEhPQ1xuLy8gY3VzdG9tIGxpYlxuaW1wb3J0IHsgZ2V0U29ydGVkUG9zdHMgfSBmcm9tIFwiLi4vbGliL3Bvc3RzXCI7XG5cbmNvbnN0IEluZGV4ID0gKHsgYWxsUG9zdHNEYXRhIH0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZVNsaWRlLCBzZXROZXdTbGlkZV0gPSB1c2VTdGF0ZShzbGlkZXJTdHlsZXMuYW5pbWF0ZUluKTtcbiAgY29uc3QgW3NsaWRlclBvcywgc2V0U2xpZGVyUG9zXSA9IHVzZVN0YXRlKDApO1xuXG4gIC8vIHNldHRpbmdzIGZvciBzbGlkZXJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgdXNlQ1NTOiB0cnVlLFxuICAgIGRvdHM6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDEyNTAsXG4gICAgZWFzaW5nOiBcImVhc2VvdXRcIixcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgYXV0b3BsYXlTcGVlZDogNzAwMCxcbiAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgdG91Y2hNb3ZlOiBmYWxzZSxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGJlZm9yZUNoYW5nZTogKCkgPT4gc2V0TmV3U2xpZGUoc2xpZGVyU3R5bGVzLmFuaW1hdGVPdXQpLFxuICAgIGFmdGVyQ2hhbmdlOiAoY3VycmVudCkgPT4ge1xuICAgICAge1xuICAgICAgICBzZXROZXdTbGlkZShzbGlkZXJTdHlsZXMuYW5pbWF0ZUluKTtcbiAgICAgICAgc2V0U2xpZGVyUG9zKGN1cnJlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG5cbiAgLy8gc2xpZGVyIGNvbnRlbnRcbiAgY29uc3Qgc2xpZGVzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcItCk0JrQldCfXCIsXG4gICAgICB0ZXh0OlxuICAgICAgICBcItCk0LDRhdC+0LLQuNC5INC60L7Qu9C10LTQtiDQtdC70LXQutGC0YDQvtC90L3QuNGFINC/0YDQuNC70LDQtNGW0LIg0IbQpNCd0KLQo9Cd0JPRgyDigJMg0YbQtSDRgdGD0YfQsNGB0L3QuNC5INC90LDQstGH0LDQu9GM0L3QuNC5INC30LDQutC70LDQtCDQsiDRj9C60L7QvNGDINGB0YLQstC+0YDQtdC90L4g0LLRgdGWINGD0LzQvtCy0Lgg0LTQu9GPINC/0ZbQtNCz0L7RgtC+0LLQutC4INC80L7Qu9C+0LTRiNC+0LPQviDQsdCw0LrQsNC70LDQstGA0LAsINGP0LrQuNC5INC30LTQsNGC0LXQvSDQstC40YLRgNC40LzQsNGC0Lgg0LrQvtC90LrRg9GA0LXQvdGG0ZbRjiDQvdCwINGA0LjQvdC60YMg0L/RgNCw0YbRli5cIixcbiAgICAgIGltZzogXCIvc3RhdGljL2ltZy9zbGlkZTEuanBnXCIsXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICB0aXRsZTogXCLQodGC0L7QvyDQutC+0YDRg9C/0YbRltGPXCIsXG4gICAgLy8gICB0ZXh0OlxuICAgIC8vICAgICBcItCi0LXQu9C10YTQvtC9INCz0LDRgNGP0YfQvtGXINC70ZbQvdGW0Zcg0LTQu9GPINC/0L7QstGW0LTQvtC80LvQtdC90L3RjyDQv9GA0L4g0LzQvtC20LvQuNCy0ZYg0YTQsNC60YLQuCDQutC+0YDRg9C/0YbRltC50L3QuNGFINC/0YDQsNCy0L7Qv9C+0YDRg9GI0LXQvdGMINCw0LHQviDQv9C+0LIn0Y/Qt9Cw0L3QuNGFINC3INC60L7RgNGD0L/RhtGW0ZTRjiDQv9GA0LDQstC+0L/QvtGA0YPRiNC10L3RjCAoMDM0MikgNzgzIDA0NlwiLFxuICAgIC8vICAgaW1nOiBcIi9zdGF0aWMvaW1nL3NsaWRlMy5qcGdcIixcbiAgICAvLyB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcItCf0YDQvtCz0YDQsNC80L3QsCDRltC90LbQtdC90LXRgNGW0Y9cIixcbiAgICAgIHRleHQ6IFwiLi4uXCIsXG4gICAgICBpbWc6IFwiL3N0YXRpYy9pbWcvc2xpZGUyLmpwZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwi0JrQvtC80L8n0Y7RgtC10YDQvdCwINGW0L3QttC10L3QtdGA0ZbRj1wiLFxuICAgICAgdGV4dDogXCIuLi5cIixcbiAgICAgIGltZzogXCIvc3RhdGljL2ltZy9zbGlkZTMuanBnXCIsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXIuYWxpZ25Db250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT7QpNCa0JXQnyAtINCT0L7Qu9C+0LLQvdCwPC90aXRsZT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17Y29udGFpbmVyLmxheW91dENvbnRhaW5lcn0+XG4gICAgICAgIHsvKiA8TmF2IC8+ICovfVxuICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4gICAgICAgICAge3NsaWRlcy5tYXAoKHNsaWRlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3NsaWRlclN0eWxlcy5zbGlkZX0+XG4gICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c2xpZGVyUG9zID09PSBpbmRleCA/IGFjdGl2ZVNsaWRlIDogXCIgXCJ9ICR7XG4gICAgICAgICAgICAgICAgICBzbGlkZXJTdHlsZXMudGl0bGVcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzbGlkZS50aXRsZX1cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3NsaWRlclBvcyA9PT0gaW5kZXggPyBhY3RpdmVTbGlkZSA6IFwiIFwifSAke1xuICAgICAgICAgICAgICAgICAgc2xpZGVyU3R5bGVzLnRleHRcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzbGlkZS50ZXh0fVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtzbGlkZS5pbWd9IGFsdD1cInNsaWRlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lci5jb250ZW50fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aW5kZXgubmV3c0FuZFNpZGViYXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2luZGV4Lm5ld3N9PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtpbmRleC5uZXdzVGl0bGV9PtCd0L7QstC40L3QuDwvaDI+XG4gICAgICAgICAgICAgIHthbGxQb3N0c0RhdGEubWFwKCh7IHNsdWcsIGNhdGVnb3J5LCBkYXRlLCB0aXRsZSwgZXhjZXJwdCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtzbHVnfSBocmVmPXtgL3Bvc3QvW3NsdWddYH0gYXM9e2AvcG9zdC8ke3NsdWd9YH0+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2luZGV4Lmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICA8TmV3c1xuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtkYXRlfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICBleGNlcnB0PXtleGNlcnB0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbmRleC5zaWRlYmFyfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2luZGV4LmV2ZW50c30+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17aW5kZXguc3VidGl0bGV9PtCf0L7QtNGW0Zc8L2gzPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbmRleC5ldmVudH0+XG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtpbmRleC5ldmVudFRpdGxlfT7Ql9C80LDQs9Cw0L3QvdGPINC/0L4g0YLQtdGB0YLRg9Cy0LDQvdC90Y48L2g0PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpbmRleC5ldmVudFBsYWNlfT7QkNC60YLQvtCy0LjQuSDQt9Cw0Ls8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2luZGV4LmV2ZW50RGF0ZX0+OSDQstC10YDQtdGB0L3Rjzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aW5kZXguZXZlbnRUaW1lfT4xNDoxMDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aW5kZXguZXZlbnR9PlxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17aW5kZXguZXZlbnRUaXRsZX0+XG4gICAgICAgICAgICAgICAgICAgINCU0LXQvNC+0L3RgdGC0YDQsNGG0ZbRjyDQv9C10YIg0L/RgNC+0LTQttC10LrRgtGW0LJcbiAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2luZGV4LmV2ZW50UGxhY2V9PtCQ0LrRgtC+0LLQuNC5INC30LDQuzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aW5kZXguZXZlbnREYXRlfT4xMiDQstC10YDQtdGB0L3Rjzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aW5kZXguZXZlbnRUaW1lfT4xNDowMDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbmRleC5mZWVkYmFja30+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e1wiaHR0cHM6Ly9mb3Jtcy5nbGUvaHlMTFVIZEZZcXJRNlFpQjZcIn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aW5kZXguZmVlZGJhY2tMaW5rfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgINCT0YPQs9C7INGE0L7RgNC80LAg0LTQu9GPINGE0ZbQtNCx0LXQutGDXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e1wiaHR0cHM6Ly90Lm1lL21pcjRyaVwifSBjbGFzc05hbWU9e2luZGV4LmZlZWRiYWNrTGlua30+XG4gICAgICAgICAgICAgICAgICBUZWxlZ3JhbTogQG1pcjRyaVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxNb2JpbGVOYXYgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0cygpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxQb3N0c0RhdGEsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})