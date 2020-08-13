webpackHotUpdate("static/development/pages/schedule.js",{

/***/ "./pages/schedule/components/Students/index.jsx":
/*!******************************************************!*\
  !*** ./pages/schedule/components/Students/index.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _students_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./students.scss */ "./pages/schedule/components/Students/students.scss");
/* harmony import */ var _students_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_students_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_schedule_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/schedule.json */ "./api/schedule.json");
var _api_schedule_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../api/schedule.json */ "./api/schedule.json", 1);
var _this = undefined,
    _jsxFileName = "/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/kep/pages/schedule/components/Students/index.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Students = function Students() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      courseBtn = _useState[0],
      setCourse = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      specialty = _useState2[0],
      setSpecialty = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      day = _useState3[0],
      setDay = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      search = _useState4[0],
      updateSearch = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(5),
      visible = _useState5[0],
      increaseVisible = _useState5[1];

  var scheduleDay = []; // бере дані з локалки

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var specialty = localStorage.getItem("specialty");
    specialty ? setSpecialty(specialty) : setSpecialty("");
    var day = localStorage.getItem("day");
    day ? setDay(day) : setDay("");
    var search = localStorage.getItem("search");
    search ? updateSearch(search) : updateSearch("");
  }, []); // зберігають дані в локалку

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.localStorage.setItem("specialty", specialty);
  }, [specialty]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.localStorage.setItem("day", day);
  }, [day]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.localStorage.setItem("search", search);
  }, [search]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    filteredSchedule;
  }); // Фільтр даних по курсу, спеціальності, дню та пошук

  var filteredSchedule = _api_schedule_json__WEBPACK_IMPORTED_MODULE_2__.map(function (course) {
    return course.filter(function (schoolDay) {
      var byCourse = schoolDay.course === courseBtn;
      var bySpecialty = schoolDay.specialty.indexOf(specialty) !== -1;
      var byDay = schoolDay.day.indexOf(day) !== -1;
      var bySearch = schoolDay.group.indexOf(search.toUpperCase()) !== -1 || schoolDay.specialty.indexOf(search.toUpperCase()) !== -1;

      if (search === "" && courseBtn != 0) {
        return byCourse && bySpecialty && byDay;
      } else {
        return byDay && bySearch;
      }
    });
  }); // Всі вхідні дані заносяться у масив. За допомогою масиву і слайсу реалізовується пагінація

  filteredSchedule.map(function (course) {
    return course.map(function (group) {
      return scheduleDay.push(group);
    });
  }); // Маска вводу для пошуку групи

  var mask = function mask(value) {
    var regExp1 = /^[а-яА-ЯіІa-zA-Z]{2}/g;
    var regExp2 = /^([а-яА-ЯіІa-zA-Z]{2})?[-]?([0-9]{2})/g; // const regExp3 = /^([а-яА-ЯіІa-zA-Z]{2})?[-]?([0-9]{2})?[-]?([0-4]{2})/g;

    while (value.length <= 8) {
      if (value.length <= 2) {
        return updateSearch(value.replace(regExp1, "$&-").toUpperCase());
      } else if (value.length >= 3 && value.length <= 5) {
        return updateSearch(value.replace(regExp2, "$&-0"));
      } else if (value.length >= 6 && value.length <= 8) {
        return updateSearch(value);
      }
    }
  };

  return __jsx("div", {
    className: _students_scss__WEBPACK_IMPORTED_MODULE_1___default.a.students,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _students_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _students_scss__WEBPACK_IMPORTED_MODULE_1___default.a.radios,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, "\u041A\u0443\u0440\u0441:", " ", __jsx("span", {
    className: _students_scss__WEBPACK_IMPORTED_MODULE_1___default.a.radio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "firstCourse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "1"), __jsx("input", {
    type: "radio",
    name: "course",
    id: "firstCourse",
    defaultChecked: true,
    onChange: function onChange() {
      return setCourse(1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  })), __jsx("span", {
    className: _students_scss__WEBPACK_IMPORTED_MODULE_1___default.a.radio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, "2", __jsx("input", {
    type: "radio",
    name: "course",
    onChange: function onChange() {
      return setCourse(2);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }))), __jsx("span", {
    className: _students_scss__WEBPACK_IMPORTED_MODULE_1___default.a.radio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, "3", __jsx("input", {
    type: "radio",
    name: "course",
    onChange: function onChange() {
      return setCourse(3);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }))), __jsx("span", {
    className: _students_scss__WEBPACK_IMPORTED_MODULE_1___default.a.radio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "fourthCourse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "4"), __jsx("input", {
    type: "radio",
    name: "course",
    id: "fourthCourse",
    onChange: function onChange() {
      return setCourse(4);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }))), __jsx("select", {
    id: _students_scss__WEBPACK_IMPORTED_MODULE_1___default.a.specialty,
    name: "specialty",
    value: specialty,
    onChange: function onChange() {
      return setSpecialty(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx("option", {
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C"), __jsx("option", {
    value: "PI",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u0430 \u0456\u043D\u0436\u0435\u043D\u0435\u0440\u0456\u044F"), __jsx("option", {
    value: "KI",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, "\u041A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u043D\u0430 \u0456\u043D\u0436\u0435\u043D\u0435\u0440\u0456\u044F"), __jsx("option", {
    value: "AK",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u044F \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u043D\u043E-\u0456\u043D\u0442\u0435\u0433\u0440\u043E\u0432\u0430\u043D\u0456 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0457"), __jsx("option", {
    value: "L",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0456\u043A\u0430")), __jsx("select", {
    id: "days",
    name: "days",
    value: day,
    onChange: function onChange() {
      return setDay(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx("option", {
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0434\u0435\u043D\u044C"), __jsx("option", {
    value: "\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, "\u041F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A"), __jsx("option", {
    value: "\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, "\u0412\u0456\u0432\u0442\u043E\u0440\u043E\u043A"), __jsx("option", {
    value: "\u0441\u0435\u0440\u0435\u0434\u0430",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, "\u0421\u0435\u0440\u0435\u0434\u0430"), __jsx("option", {
    value: "\u0447\u0435\u0442\u0432\u0435\u0440",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, "\u0427\u0435\u0442\u0432\u0435\u0440"), __jsx("option", {
    value: "\u043F'\u044F\u0442\u043D\u0438\u0446\u044F",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, "\u041F'\u044F\u0442\u043D\u0438\u0446\u044F")), __jsx("input", {
    type: "search",
    name: "search",
    id: "search",
    value: search // onChange={() => mask(event.target.value)}
    ,
    onChange: function onChange() {
      return updateSearch(event.target.value);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043D\u0430\u0437\u0432\u0443 \u0433\u0440\u0443\u043F\u0438",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _students_scss__WEBPACK_IMPORTED_MODULE_1___default.a.schedule,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }, scheduleDay.slice(0, visible).map(function (lessonDay, key) {
    return __jsx(Schedule, {
      day: lessonDay,
      key: key,
      selectedDay: day,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 11
      }
    });
  })), scheduleDay.length > visible ? __jsx("button", {
    className: _students_scss__WEBPACK_IMPORTED_MODULE_1___default.a.pagination,
    onClick: function onClick() {
      return increaseVisible(visible + 5);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0438 \u0431\u0456\u043B\u044C\u0448\u0435") : undefined);
}; // Розклад студентів


var Schedule = function Schedule(props) {
  return __jsx("div", {
    className: _students_scss__WEBPACK_IMPORTED_MODULE_1___default.a.day,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _students_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, props.day.day), props.day.day === "понеділок" ? props.day.group : undefined, props.day.day !== "понеділок" && props.selectedDay !== "понеділок" && props.selectedDay !== "" ? props.day.group : undefined), props.day.lessons.map(function (lesson) {
    return __jsx("div", {
      className: _students_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lesson,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: _students_scss__WEBPACK_IMPORTED_MODULE_1___default.a.start,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _students_scss__WEBPACK_IMPORTED_MODULE_1___default.a.num,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 13
      }
    }, lesson.num, " \u043F\u0430\u0440\u0430"), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 13
      }
    }, lesson.start)), __jsx("div", {
      className: _students_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subjectAndLecturer,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _students_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subject,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 13
      }
    }, lesson.subject), __jsx("span", {
      className: _students_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lecturer,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 13
      }
    }, lesson.lecturer), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 13
      }
    }, lesson.audience)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Students);

/***/ })

})
//# sourceMappingURL=schedule.js.8ca3eae0325a438bf647.hot-update.js.map