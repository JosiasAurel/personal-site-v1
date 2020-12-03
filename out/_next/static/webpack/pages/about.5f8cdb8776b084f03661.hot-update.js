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
      columnNumber: 29
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanN4Il0sIm5hbWVzIjpbIkFib3V0IiwidXNlU3RhdGUiLCJNb2RlIiwic2V0TW9kZSIsImNvbG9yVGV4dCIsInNldENvbG9yVGV4dCIsInRvZ2dsZUNvbG9yIiwic3R5bGVzIiwiaG9tZUxpZ2h0Qm9keSIsImhvbWVEYXJrQm9keSIsImhlYWRlciIsIm5hbWUiLCJoZWFkZXJMaW5rcyIsImxhbmciLCJzdGFjayIsInRlY2giLCJmb290ZXIiLCJzb2NpYWwiLCJjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxNQUFELENBRGpCO0FBQUEsTUFDUkMsSUFEUTtBQUFBLE1BQ0ZDLE9BREU7O0FBQUEsbUJBRWVGLHNEQUFRLENBQUMsTUFBRCxDQUZ2QjtBQUFBLE1BRVpHLFNBRlk7QUFBQSxNQUVEQyxZQUZDOztBQUduQixXQUFTQyxXQUFULEdBQXVCO0FBQ2hCLFFBQUlKLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQzNCQyxhQUFPLENBQUMsTUFBRCxDQUFQO0FBQ0FFLGtCQUFZLENBQUMsTUFBRCxDQUFaO0FBQ00sS0FIRCxNQUdPLElBQUlILElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ2pDQyxhQUFPLENBQUMsT0FBRCxDQUFQO0FBQ1NFLGtCQUFZLENBQUMsT0FBRCxDQUFaO0FBQ0g7QUFDUDs7QUFDRSxTQUNRLG1FQUNBO0FBQUssYUFBUyxFQUFJSCxJQUFJLEtBQUssT0FBVixHQUFzQkssK0RBQU0sQ0FBQ0MsYUFBN0IsR0FBK0NELCtEQUFNLENBQUNFLFlBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFRLGFBQVMsRUFBRUYsK0RBQU0sQ0FBQ0csTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFB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OEM7QUFBSyxPQUFHLEVBQUMsY0FBVDtBQUF3QixPQUFHLEVBQUMsUUFBNUI7QUFBcUMsYUFBUyxFQUFFViwrREFBTSxDQUFDVSxNQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTlDLENBSFMsRUFJVDtBQUFHLFFBQUksRUFBQyw4QkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDO0FBQUssT0FBRyxFQUFDLGFBQVQ7QUFBdUIsT0FBRyxFQUFDLFFBQTNCO0FBQW9DLGFBQVMsRUFBRVYsK0RBQU0sQ0FBQ1UsTUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUF2QyxDQUpTLENBcEZBLEVBMkZUO0FBQUksYUFBUyxFQUFFViwrREFBTSxDQUFDVyxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQTNGUyxDQURSO0FBK0ZILENBM0dEOztHQUFNbEIsSzs7S0FBQUEsSztBQTRHU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuNWY4Y2RiODc3NmIwODRmMDM2NjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvYWJvdXQubW9kdWxlLmNzc1wiXHJcbmltcG9ydCBDb2xvck1vZGUgZnJvbSAnLi4vY29tcG9uZW50cy9Db2xvck1vZGUnXHJcblxyXG5jb25zdCBBYm91dCA9ICgpID0+IHtcclxuICAgIGNvbnN0ICBbTW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZShcIkRhcmtcIik7XHJcblx0Y29uc3QgW2NvbG9yVGV4dCwgc2V0Q29sb3JUZXh0XSA9IHVzZVN0YXRlKFwiRGFya1wiKVxyXG5cdGZ1bmN0aW9uIHRvZ2dsZUNvbG9yKCkge1xyXG4gICAgICAgIGlmIChNb2RlID09PSBcIkxpZ2h0XCIpIHtcclxuXHRcdFx0c2V0TW9kZShcIkRhcmtcIilcclxuXHRcdFx0c2V0Q29sb3JUZXh0KFwiRGFya1wiKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoTW9kZSA9PT0gXCJEYXJrXCIpIHtcclxuXHRcdFx0c2V0TW9kZShcIkxpZ2h0XCIpXHJcbiAgICAgICAgICAgIHNldENvbG9yVGV4dChcIkxpZ2h0XCIpXHJcbiAgICAgICAgfVxyXG5cdH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgKE1vZGUgPT09IFwiTGlnaHRcIikgPyAoc3R5bGVzLmhvbWVMaWdodEJvZHkpIDogKHN0eWxlcy5ob21lRGFya0JvZHkpIH0gPlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcblx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XHJcblx0XHRcdFx0PGE+PGgyIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PkpBPC9oMj48L2E+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckxpbmtzfT5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxyXG5cdFx0XHRcdFx0PGEgPkJsb2c8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxyXG5cdFx0XHRcdFx0PGEgPlByb2plY3RzPC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuXHRcdFx0XHRcdDxhID5BYm91dDwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PENvbG9yTW9kZVxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gdG9nZ2xlQ29sb3IoKX1cclxuXHRcdFx0XHRcdHZhbHVlPXtjb2xvclRleHR9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgIEhpIGkgYW0gSm9zaWFzIEF1cmVsXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIEkgYW0gYSBzZWxmLXRhdWdodCBzb2Z0d2FyZSBkZXZlbG9wZXIuIEkgY2FuIGNvZGUgaW4gPGEgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ30+UHl0aG9uPC9hPiwgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ30+SmF2YTwvYT4gYW5kIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxhbmd9PkphdmFTY3JpcHQ8L2E+LlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPiBNeSBUZWNobm9sb2d5IFN0YWNrIGlzIDo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy50ZWNofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxhbmd9PkRqYW5nbzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ30+Rmxhc2s8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxhbmd9Pk5leHRKUzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ30+UmVhY3RKUzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ30+Tm9kZUpTPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9e3N0eWxlcy5sYW5nfT5GYXN0QVBJPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9e3N0eWxlcy5sYW5nfT5TUUxpdGU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxhbmd9Pk1vbmdvREI8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxhbmd9PkFQSXMgYW5kIEpBTVN0YWNrPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9e3N0eWxlcy5sYW5nfT5TQ3JpcHRpbmc8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+IFdoYXQgaSB1c2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy50ZWNofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxhbmd9PlZTQ29kZSB3aXRoIEF0b20gT25lIERhcmsgVGhlbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxhbmd9PlRlcm11eCAoZm9yIGNvZGluZyBvbiBwaG9uZSk8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxhbmd9PlBvd2VyTGV2ZWwxMEsgdGVybWluYWwgdGhlbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxhbmd9PlNQQ0sgRWRpdG9yIDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ30+R2l0IGFuZCBHaXRIdWI8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxhbmd9PlBvc3QgTWFuIChmb3IgYXBpIHRlc3RpbmcpPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9e3N0eWxlcy5sYW5nfT5MZW5vdm8gSzUgUGxheSBQaG9uZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJIGxlYXJuIHNvbWUgbmV3IHRoaW5ncyBldmVyeWRheSBhbmQgaSBhbSBvcGVuIHRvIGxlYXJuaW5nIG1vcmUuIEkgYW0gaW50ZXJlc3RlZCBpbiBHYW1lIERldmVsb3BlbnQsIEFwcCBEZXZlbG9wbWVudCBhbmQgbWFraW5nIE9wZW4gU291cmNlIENvbnRyaWJ1dGlvbnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEkgbGlrZSBleHBlcmltZW50aW5nIHdpdGggc3R1ZmYuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb2RpbmcgaXMgbXkgaG9iYnkgYW5kIGl0IG1ha2VzIG1lIGhhcHB5IG1vc3QuIEFueXRoaW5nIGNvZGluZyA/IEkgYW0gaW50ZXJlc3RlZCBpbiBYRC5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJZiB5b3Ugd2lzaCB0byBjb250YWN0IG1lLCBteSBETXMgYXJlIG9wZW4gb24gVHdpdHRlciBhbmQgbXkgTWFpbCBCb3ggdG9vLiBEb24ndCBqdXN0IHNwYW0gbWUgOylcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG5cdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0pvc2lhc0F1cmVsXCI+PGltZyBzcmM9XCIvZ2l0aHViLnBuZ1wiIGFsdD1cImdpdGh1YlwiIGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbH0gLz48L2E+XHRcdCBcclxuXHRcdFx0PGEgaHJlZj1cIm1haWx0bzolMjBuZGpvc2lhc2F1cmVsQGdtYWlsLmNvbVwiPjxpbWcgc3JjPVwiL2dtYWlsLnBuZ1wiIGFsdD1cImdpdGh1YlwiIGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbH0gLz48L2E+XHRcdCBcclxuXHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vSm9zaWFzV2luZz9zPTA5XCI+PGltZyBzcmM9XCIvdHdpdHRlci5wbmdcIiBhbHQ9XCJnaXRodWJcIiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWx9IC8+PC9hPlx0XHQgXHJcblx0XHRcdDxhIGhyZWY9XCJodHRwczovL2pvc2lhc2F1cmVsLml0Y2guaW8vXCI+PGltZyBzcmM9XCIvaXRjaGlvLnBuZ1wiIGFsdD1cImdpdGh1YlwiIGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbH0gLz48L2E+XHRcdCBcclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY30+IMKpIDIwMjAgSm9zaWFzIEF1cmVsIDwvaDI+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0Il0sInNvdXJjZVJvb3QiOiIifQ==