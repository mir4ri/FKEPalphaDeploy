webpackHotUpdate("static/development/pages/schedule.js",{

/***/ "./pages/schedule/components/Lecturer/index.jsx":
/*!******************************************************!*\
  !*** ./pages/schedule/components/Lecturer/index.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lecturer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lecturer.scss */ "./pages/schedule/components/Lecturer/lecturer.scss");
/* harmony import */ var _lecturer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lecturer_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_scheduleL_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/scheduleL.json */ "./api/scheduleL.json");
var _api_scheduleL_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../api/scheduleL.json */ "./api/scheduleL.json", 1);
var _this = undefined,
    _jsxFileName = "/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/kep build/pages/schedule/components/Lecturer/index.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Lecturer = function Lecturer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      department = _useState[0],
      setDepartment = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      day = _useState2[0],
      setDay = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      search = _useState3[0],
      updateSearch = _useState3[1];

  var scheduleDay = [];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    filteredSchedule;
  }); // Фільтр даних по цикловій комісії, дню та пошуку

  var filteredSchedule = _api_scheduleL_json__WEBPACK_IMPORTED_MODULE_2__.map(function (arr) {
    return arr.filter(function (schoolDay) {
      console.log();
      var byDepartment = schoolDay.department.indexOf(department) !== -1;
      var byDay = schoolDay.day.indexOf(day) !== -1;
      var bySearch = schoolDay.lecturer.indexOf(search.toUpperCase()) !== -1;

      if (search === "") {
        return byDepartment && byDay;
      } else {
        return byDay && bySearch;
      }
    });
  }); // Всі вхідні дані заносяться у масив. За допомогою масиву і слайсу реалізовується пагінація

  filteredSchedule.map(function (department) {
    return department.map(function (group) {
      return scheduleDay.push(group);
    });
  });
  return __jsx("div", {
    className: _lecturer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lecturer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _lecturer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("select", {
    className: _lecturer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.department,
    name: "departament",
    value: department,
    onChange: function onChange() {
      return setDepartment(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("option", {
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0446\u0438\u043A\u043B\u043E\u0432\u0443 \u043A\u043E\u043C\u0456\u0441\u0456\u044E"), __jsx("option", {
    value: "\u041F\u0440\u0438\u0440\u043E\u0434\u043D\u0438\u0447\u0456 \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0456\u043D\u0438",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "\u041F\u0440\u0438\u0440\u043E\u0434\u043D\u0438\u0447\u0456 \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0456\u043D\u0438"), __jsx("option", {
    value: "\u0424\u0456\u0437\u0438\u0447\u043D\u0456 \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0456\u043D\u0438",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "\u0424\u0456\u0437\u0438\u0447\u043D\u0456 \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0456\u043D\u0438"), __jsx("option", {
    value: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 \u0442\u0430 \u0441\u0432\u0456\u0442\u043E\u0432\u0456 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0438",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 \u0442\u0430 \u0441\u0432\u0456\u0442\u043E\u0432\u0456 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0438"), __jsx("option", {
    value: "\u0421\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u043E-\u0433\u0443\u043C\u0430\u043D\u0456\u0442\u0430\u0440\u043D\u0456 \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0456\u043D\u0438",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "\u0421\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u043E-\u0433\u0443\u043C\u0430\u043D\u0456\u0442\u0430\u0440\u043D\u0456 \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0456\u043D\u0438"), __jsx("option", {
    value: "\u0406\u043D\u043E\u0437\u0435\u043C\u043D\u0456 \u043C\u043E\u0432\u0438",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "\u0406\u043D\u043E\u0437\u0435\u043C\u043D\u0456 \u043C\u043E\u0432\u0438"), __jsx("option", {
    value: "\u0417\u0434\u043E\u0440\u043E\u0432'\u044F \u0442\u0430 \u0444\u0456\u0437\u0432\u0438\u0445\u043E\u0432\u0430\u043D\u043D\u044F",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "\u0417\u0434\u043E\u0440\u043E\u0432'\u044F \u0442\u0430 \u0444\u0456\u0437\u0432\u0438\u0445\u043E\u0432\u0430\u043D\u043D\u044F"), __jsx("option", {
    value: "\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u043D\u0456 \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0456\u043D\u0438",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u043D\u0456 \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0456\u043D\u0438"), __jsx("option", {
    value: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u0430 \u0456\u043D\u0436\u0435\u043D\u0435\u0440\u0456\u044F",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u0430 \u0456\u043D\u0436\u0435\u043D\u0435\u0440\u0456\u044F"), __jsx("option", {
    value: "\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u0430 \u0456\u043D\u0436\u0435\u043D\u0435\u0440\u0456\u044F",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, "\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u0430 \u0456\u043D\u0436\u0435\u043D\u0435\u0440\u0456\u044F"), __jsx("option", {
    value: "\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0438 \u0442\u0430 \u043A\u043E\u043C\u043F\u044E\u0442\u0435\u0440\u043D\u043E\u0457 \u0456\u043D\u0436\u0435\u043D\u0435\u0440\u0456\u0457",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0438 \u0442\u0430 \u043A\u043E\u043C\u043F\u044E\u0442\u0435\u0440\u043D\u043E\u0457 \u0456\u043D\u0436\u0435\u043D\u0435\u0440\u0456\u0457"), __jsx("option", {
    value: "\u041E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0435\u0440\u0441\u0442\u0430\u0442\u0456\u0432 \u0437 \u041F\u0423 \u0456 \u0440\u043E\u0431\u043E\u0442\u043E\u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0438\u0445 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0456\u0432",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "\u041E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0435\u0440\u0441\u0442\u0430\u0442\u0456\u0432 \u0437 \u041F\u0423 \u0456 \u0440\u043E\u0431\u043E\u0442\u043E\u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0438\u0445 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0456\u0432"), __jsx("option", {
    value: "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0456\u043A\u0430 \u0442\u0430 \u0442\u0435\u043B\u0435\u043A\u043E\u043C\u0443\u043D\u0456\u043A\u0430\u0446\u0456\u0457",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0456\u043A\u0430 \u0442\u0430 \u0442\u0435\u043B\u0435\u043A\u043E\u043C\u0443\u043D\u0456\u043A\u0430\u0446\u0456\u0457"), __jsx("option", {
    value: "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u043F\u043B\u043E\u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0456 \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u044F",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u043F\u043B\u043E\u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0456 \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u044F"), __jsx("option", {
    value: "\u0415\u043A\u043E\u043D\u043E\u043C\u0456\u0447\u043D\u0430 \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0456\u043D\u0430",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, "\u0415\u043A\u043E\u043D\u043E\u043C\u0456\u0447\u043D\u0430 \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0456\u043D\u0430")), __jsx("select", {
    id: "days",
    name: "days",
    value: day,
    onChange: function onChange() {
      return setDay(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("option", {
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0434\u0435\u043D\u044C"), __jsx("option", {
    value: "\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, "\u041F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A"), __jsx("option", {
    value: "\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, "\u0412\u0456\u0432\u0442\u043E\u0440\u043E\u043A"), __jsx("option", {
    value: "\u0441\u0435\u0440\u0435\u0434\u0430",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, "\u0421\u0435\u0440\u0435\u0434\u0430"), __jsx("option", {
    value: "\u0447\u0435\u0442\u0432\u0435\u0440",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, "\u0427\u0435\u0442\u0432\u0435\u0440"), __jsx("option", {
    value: "\u043F'\u044F\u0442\u043D\u0438\u0446\u044F",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, "\u041F'\u044F\u0442\u043D\u0438\u0446\u044F")), __jsx("input", {
    type: "search",
    name: "search",
    id: "search",
    value: search,
    onChange: function onChange() {
      return updateSearch(event.target.value);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u0447\u0430",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  })), scheduleDay.map(function (lessonDay, key) {
    return __jsx(Schedule, {
      day: lessonDay,
      key: key,
      selectedDay: day,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }
    });
  }));
};

var Schedule = function Schedule(props) {
  return __jsx("div", {
    className: _lecturer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.day,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _lecturer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: _lecturer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.weekday,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, props.day.day), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, props.day.department)), __jsx("div", {
    className: _lecturer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lecturer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, props.day.lecturer), props.day.lessons.map(function (lesson) {
    return __jsx("div", {
      className: _lecturer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lesson,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: _lecturer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.start,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 11
      }
    }, lesson.start), __jsx("div", {
      className: _lecturer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.groupAndAudience,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: _lecturer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.group,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }, lesson.group), __jsx("span", {
      className: _lecturer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.group,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }
    }, lesson.subject, ","), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }
    }, lesson.audience)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Lecturer);

/***/ })

})
//# sourceMappingURL=schedule.js.393cdb07107e0f406adb.hot-update.js.map