webpackHotUpdate_N_E("pages/about",{

/***/ "./pages/about.jsx":
/*!*************************!*\
  !*** ./pages/about.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/about.module.css */ "./styles/about.module.css");
/* harmony import */ var _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ColorMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ColorMode */ "./components/ColorMode.jsx");
var _this = undefined,
    _jsxFileName = "C:\\josias\\josiasaureldev\\pages\\about.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var About = function About() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Dark"),
      Mode = _useState[0],
      setMode = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Dark"),
      colorText = _useState2[0],
      setColorText = _useState2[1];

  function toggleColor() {
    if (Mode === "Light") {
      setMode("Dark");
      setColorText("Dark");
    } else if (Mode === "Dark") {
      setMode("Light");
      setColorText("Light");
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: Mode === "Light" ? _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.homeLightBody : _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.homeDarkBody,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 8
    }
  }, "JA"))), __jsx("span", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.headerLinks,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 6
    }
  }, "Blog")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/projects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  }, "Projects")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }, "About"))), __jsx(_components_ColorMode__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return toggleColor();
    },
    value: colorText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Hi i am Josias Aurel"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "I am a self-taught software developer. I can code in ", __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 74
    }
  }, "Python"), ", ", __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 113
    }
  }, "Java"), " and ", __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 153
    }
  }, "JavaScript"), "."), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, " My Technology Stack is :"), __jsx("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.stack,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tech,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, "Django")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, "Flask")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, "NextJS")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  }, "ReactJS")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, "NodeJS")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, "FastAPI")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, "SQLite")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }, "MongoDB")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  }, "APIs and JAMStack")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }, "SCripting"))))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, " What i use"), __jsx("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.stack,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tech,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 53
    }
  }, "VSCode with Atom One Dark Theme")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }, "Termux (for coding on phone)")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }, "PowerLevel10K terminal theme")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 29
    }
  }, "SPCK Editor ")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  }, "Git and GitHub")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, "Post Man (for api testing)")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, "Lenovo K5 Play Phone"))))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, "I learn some new things everyday and i am open to learning more. I am interested in Game Developent, App Development and making Open Source Contributions. I like experimenting with stuff."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, "Coding is my hobby and it makes me happy most. Anything coding ? I am interested in XD."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, "If you wish to contact me, my DMs are open on Twitter and my Mail Box too. Don't just spam me ;)")))), __jsx("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://github.com/JosiasAurel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/github.png",
    alt: "github",
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.social,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "mailto:%20ndjosiasaurel@gmail.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/gmail.png",
    alt: "github",
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.social,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 48
    }
  })), __jsx("a", {
    href: "https://twitter.com/JosiasWing?s=09",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/twitter.png",
    alt: "github",
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.social,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 50
    }
  })), __jsx("a", {
    href: "https://josiasaurel.itch.io/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/itchio.png",
    alt: "github",
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.social,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 43
    }
  }))), __jsx("h2", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.c,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 4
    }
  }, " \xA9 2020 Josias Aurel "));
};

_s(About, "MVwvnkGb7BZxXm4wt97cxB3mKlg=");

_c = About;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c;

$RefreshReg$(_c, "About");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanN4Il0sIm5hbWVzIjpbIkFib3V0IiwidXNlU3RhdGUiLCJNb2RlIiwic2V0TW9kZSIsImNvbG9yVGV4dCIsInNldENvbG9yVGV4dCIsInRvZ2dsZUNvbG9yIiwic3R5bGVzIiwiaG9tZUxpZ2h0Qm9keSIsImhvbWVEYXJrQm9keSIsImhlYWRlciIsIm5hbWUiLCJoZWFkZXJMaW5rcyIsImxhbmciLCJzdGFjayIsInRlY2giLCJsaXN0IiwiZm9vdGVyIiwic29jaWFsIiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsTUFBRCxDQURqQjtBQUFBLE1BQ1JDLElBRFE7QUFBQSxNQUNGQyxPQURFOztBQUFBLG1CQUVlRixzREFBUSxDQUFDLE1BQUQsQ0FGdkI7QUFBQSxNQUVaRyxTQUZZO0FBQUEsTUFFREMsWUFGQzs7QUFHbkIsV0FBU0MsV0FBVCxHQUF1QjtBQUNoQixRQUFJSixJQUFJLEtBQUssT0FBYixFQUFzQjtBQUMzQkMsYUFBTyxDQUFDLE1BQUQsQ0FBUDtBQUNBRSxrQkFBWSxDQUFDLE1BQUQsQ0FBWjtBQUNNLEtBSEQsTUFHTyxJQUFJSCxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNqQ0MsYUFBTyxDQUFDLE9BQUQsQ0FBUDtBQUNTRSxrQkFBWSxDQUFDLE9BQUQsQ0FBWjtBQUNIO0FBQ1A7O0FBQ0UsU0FDUSxtRUFDQTtBQUFLLGFBQVMsRUFBSUgsSUFBSSxLQUFLLE9BQVYsR0FBc0JLLCtEQUFNLENBQUNDLGFBQTdCLEdBQStDRCwrREFBTSxDQUFDRSxZQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBUSxhQUFTLEVBQUVGLCtEQUFNLENBQUNHLE1BQTFCO0FBQUE7QUFBQTtB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Q0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThDO0FBQUssT0FBRyxFQUFDLGNBQVQ7QUFBd0IsT0FBRyxFQUFDLFFBQTVCO0FBQXFDLGFBQVMsRUFBRVgsK0RBQU0sQ0FBQ1csTUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUE5QyxDQUhTLEVBSVQ7QUFBRyxRQUFJLEVBQUMsOEJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QztBQUFLLE9BQUcsRUFBQyxhQUFUO0FBQXVCLE9BQUcsRUFBQyxRQUEzQjtBQUFvQyxhQUFTLEVBQUVYLCtEQUFNLENBQUNXLE1BQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBdkMsQ0FKUyxDQXBGQSxFQTJGVDtBQUFJLGFBQVMsRUFBRVgsK0RBQU0sQ0FBQ1ksQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0EzRlMsQ0FEUjtBQStGSCxDQTNHRDs7R0FBTW5CLEs7O0tBQUFBLEs7QUE0R1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjdmYzQ3N2I1OTcyMzMyYzk5NWMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2Fib3V0Lm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgQ29sb3JNb2RlIGZyb20gJy4uL2NvbXBvbmVudHMvQ29sb3JNb2RlJ1xyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCAgW01vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoXCJEYXJrXCIpO1xyXG5cdGNvbnN0IFtjb2xvclRleHQsIHNldENvbG9yVGV4dF0gPSB1c2VTdGF0ZShcIkRhcmtcIilcclxuXHRmdW5jdGlvbiB0b2dnbGVDb2xvcigpIHtcclxuICAgICAgICBpZiAoTW9kZSA9PT0gXCJMaWdodFwiKSB7XHJcblx0XHRcdHNldE1vZGUoXCJEYXJrXCIpXHJcblx0XHRcdHNldENvbG9yVGV4dChcIkRhcmtcIilcclxuICAgICAgICB9IGVsc2UgaWYgKE1vZGUgPT09IFwiRGFya1wiKSB7XHJcblx0XHRcdHNldE1vZGUoXCJMaWdodFwiKVxyXG4gICAgICAgICAgICBzZXRDb2xvclRleHQoXCJMaWdodFwiKVxyXG4gICAgICAgIH1cclxuXHR9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IChNb2RlID09PSBcIkxpZ2h0XCIpID8gKHN0eWxlcy5ob21lTGlnaHRCb2R5KSA6IChzdHlsZXMuaG9tZURhcmtCb2R5KSB9ID5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG5cdFx0XHQ8TGluayBocmVmPVwiL1wiPlxyXG5cdFx0XHRcdDxhPjxoMiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5KQTwvaDI+PC9hPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJMaW5rc30+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Jsb2dcIj5cclxuXHRcdFx0XHRcdDxhID5CbG9nPC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuXHRcdFx0XHRcdDxhID5Qcm9qZWN0czwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcblx0XHRcdFx0XHQ8YSA+QWJvdXQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxDb2xvck1vZGVcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNvbG9yKCl9XHJcblx0XHRcdFx0XHR2YWx1ZT17Y29sb3JUZXh0fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICBIaSBpIGFtIEpvc2lhcyBBdXJlbFxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBJIGFtIGEgc2VsZi10YXVnaHQgc29mdHdhcmUgZGV2ZWxvcGVyLiBJIGNhbiBjb2RlIGluIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxhbmd9PlB5dGhvbjwvYT4sIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxhbmd9PkphdmE8L2E+IGFuZCA8YSBjbGFzc05hbWU9e3N0eWxlcy5sYW5nfT5KYXZhU2NyaXB0PC9hPi5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz4gTXkgVGVjaG5vbG9neSBTdGFjayBpcyA6PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YWNrfT5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMudGVjaH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9e3N0eWxlcy5sYW5nfT5EamFuZ288L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxhbmd9PkZsYXNrPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9e3N0eWxlcy5sYW5nfT5OZXh0SlM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxhbmd9PlJlYWN0SlM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxhbmd9Pk5vZGVKUzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ30+RmFzdEFQSTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ30+U1FMaXRlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9e3N0eWxlcy5sYW5nfT5Nb25nb0RCPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9e3N0eWxlcy5sYW5nfT5BUElzIGFuZCBKQU1TdGFjazwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ30+U0NyaXB0aW5nPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPiBXaGF0IGkgdXNlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YWNrfT5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMudGVjaH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT48YSBjbGFzc05hbWU9e3N0eWxlcy5sYW5nfT5WU0NvZGUgd2l0aCBBdG9tIE9uZSBEYXJrIFRoZW1lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9e3N0eWxlcy5sYW5nfT5UZXJtdXggKGZvciBjb2Rpbmcgb24gcGhvbmUpPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9e3N0eWxlcy5sYW5nfT5Qb3dlckxldmVsMTBLIHRlcm1pbmFsIHRoZW1lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9e3N0eWxlcy5sYW5nfT5TUENLIEVkaXRvciA8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxhbmd9PkdpdCBhbmQgR2l0SHViPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9e3N0eWxlcy5sYW5nfT5Qb3N0IE1hbiAoZm9yIGFwaSB0ZXN0aW5nKTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ30+TGVub3ZvIEs1IFBsYXkgUGhvbmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSSBsZWFybiBzb21lIG5ldyB0aGluZ3MgZXZlcnlkYXkgYW5kIGkgYW0gb3BlbiB0byBsZWFybmluZyBtb3JlLiBJIGFtIGludGVyZXN0ZWQgaW4gR2FtZSBEZXZlbG9wZW50LCBBcHAgRGV2ZWxvcG1lbnQgYW5kIG1ha2luZyBPcGVuIFNvdXJjZSBDb250cmlidXRpb25zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJIGxpa2UgZXhwZXJpbWVudGluZyB3aXRoIHN0dWZmLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29kaW5nIGlzIG15IGhvYmJ5IGFuZCBpdCBtYWtlcyBtZSBoYXBweSBtb3N0LiBBbnl0aGluZyBjb2RpbmcgPyBJIGFtIGludGVyZXN0ZWQgaW4gWEQuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSWYgeW91IHdpc2ggdG8gY29udGFjdCBtZSwgbXkgRE1zIGFyZSBvcGVuIG9uIFR3aXR0ZXIgYW5kIG15IE1haWwgQm94IHRvby4gRG9uJ3QganVzdCBzcGFtIG1lIDspXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuXHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NpYXNBdXJlbFwiPjxpbWcgc3JjPVwiL2dpdGh1Yi5wbmdcIiBhbHQ9XCJnaXRodWJcIiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWx9IC8+PC9hPlx0XHQgXHJcblx0XHRcdDxhIGhyZWY9XCJtYWlsdG86JTIwbmRqb3NpYXNhdXJlbEBnbWFpbC5jb21cIj48aW1nIHNyYz1cIi9nbWFpbC5wbmdcIiBhbHQ9XCJnaXRodWJcIiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWx9IC8+PC9hPlx0XHQgXHJcblx0XHRcdDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL0pvc2lhc1dpbmc/cz0wOVwiPjxpbWcgc3JjPVwiL3R3aXR0ZXIucG5nXCIgYWx0PVwiZ2l0aHViXCIgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsfSAvPjwvYT5cdFx0IFxyXG5cdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9qb3NpYXNhdXJlbC5pdGNoLmlvL1wiPjxpbWcgc3JjPVwiL2l0Y2hpby5wbmdcIiBhbHQ9XCJnaXRodWJcIiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWx9IC8+PC9hPlx0XHQgXHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGgyIGNsYXNzTmFtZT17c3R5bGVzLmN9PiDCqSAyMDIwIEpvc2lhcyBBdXJlbCA8L2gyPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBYm91dCJdLCJzb3VyY2VSb290IjoiIn0=