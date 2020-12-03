webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/home.module.css */ "./styles/home.module.css");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_tech__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/tech */ "./components/tech.js");
/* harmony import */ var _components_projectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/projectCard */ "./components/projectCard.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ColorMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ColorMode */ "./components/ColorMode.jsx");
var _this = undefined,
    _jsxFileName = "C:\\josias\\josiasaureldev\\pages\\index.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;







var Home = function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("Light"),
      Mode = _useState[0],
      setMode = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("Light"),
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

  return __jsx("div", {
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: Mode === "Light" ? _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.homeLightBody : _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.homeDarkBody,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 3
    }
  }, __jsx("header", {
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 8
    }
  }, "JA"))), __jsx("span", {
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.headerLinks,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  }, "Blog")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/projects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 6
    }
  }, "Projects")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }, "About"))), __jsx(_components_ColorMode__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: function onClick() {
      return toggleColor();
    },
    value: colorText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  })), __jsx("span", {
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.imgc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 3
    }
  }, __jsx("img", {
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.logo,
    src: "/josias-profile.png",
    alt: "josias-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }
  })), __jsx("h2", {
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.pre,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }
  }, "Hi, I'm Josias Aurel"), __jsx(_components_tech__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 4
    }
  }, " Projects I work On "), __jsx(_components_projectCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "CropBoard",
    alt: "CropBoard",
    imgsrc: "/cropb.png",
    target: "https://cropboard.vercel.app",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, " Find More on ", __jsx("a", {
    href: "https://github.com/JosiasAurel?tab=repositories",
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.git,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 23
    }
  }, "GitHub"), " "), __jsx("div", {
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.footer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "https://github.com/JosiasAurel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/github.png",
    alt: "github",
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.social,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "mailto:%20ndjosiasaurel@gmail.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/gmail.png",
    alt: "github",
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.social,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 48
    }
  })), __jsx("a", {
    href: "https://twitter.com/JosiasWing?s=09",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/twitter.png",
    alt: "github",
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.social,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 50
    }
  })), __jsx("a", {
    href: "https://josiasaurel.itch.io/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/itchio.png",
    alt: "github",
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.social,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 43
    }
  }))), __jsx("h2", {
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.c,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 4
    }
  }, " \xA9 2020 Josias Aurel ")));
};

_s(Home, "CT/Fmp/2EcXcb3WrPfJjEsdWqC0=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsIk1vZGUiLCJzZXRNb2RlIiwiY29sb3JUZXh0Iiwic2V0Q29sb3JUZXh0IiwidG9nZ2xlQ29sb3IiLCJzdHlsZXMiLCJib2R5IiwiaG9tZUxpZ2h0Qm9keSIsImhvbWVEYXJrQm9keSIsImhlYWRlciIsIm5hbWUiLCJoZWFkZXJMaW5rcyIsImltZ2MiLCJsb2dvIiwicHJlIiwiZ2l0IiwiZm9vdGVyIiwic29jaWFsIiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQUMsT0FBRCxDQURmO0FBQUEsTUFDVkMsSUFEVTtBQUFBLE1BQ0pDLE9BREk7O0FBQUEsbUJBRWdCRixzREFBUSxDQUFDLE9BQUQsQ0FGeEI7QUFBQSxNQUVYRyxTQUZXO0FBQUEsTUFFQUMsWUFGQTs7QUFHbEIsV0FBU0MsV0FBVCxHQUF1QjtBQUNoQixRQUFJSixJQUFJLEtBQUssT0FBYixFQUFzQjtBQUMzQkMsYUFBTyxDQUFDLE1BQUQsQ0FBUDtBQUNBRSxrQkFBWSxDQUFDLE1BQUQsQ0FBWjtBQUNNLEtBSEQsTUFHTyxJQUFJSCxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNqQ0MsYUFBTyxDQUFDLE9BQUQsQ0FBUDtBQUNTRSxrQkFBWSxDQUFDLE9BQUQsQ0FBWjtBQUNIO0FBQ1A7O0FBRUQsU0FDQztBQUFLLGFBQVMsRUFBRUUsOERBQU0sQ0FBQ0MsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFJTixJQUFJLEtBQUssT0FBVixHQUFzQkssOERBQU0sQ0FBQ0UsYUFBN0IsR0FBK0NGLDhEQUFNLENBQUNHLFlBQXZFO0FB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QUE7QUFBQTtBQUFBO0FBQUEsSUFBekMsQ0FEQyxFQUVEO0FBQUcsUUFBSSxFQUFDLG1DQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEM7QUFBSyxPQUFHLEVBQUMsWUFBVDtBQUFzQixPQUFHLEVBQUMsUUFBMUI7QUFBbUMsYUFBUyxFQUFFWiw4REFBTSxDQUFDWSxNQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTVDLENBRkMsRUFHRDtBQUFHLFFBQUksRUFBQyxxQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThDO0FBQUssT0FBRyxFQUFDLGNBQVQ7QUFBd0IsT0FBRyxFQUFDLFFBQTVCO0FBQXFDLGFBQVMsRUFBRVosOERBQU0sQ0FBQ1ksTUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUE5QyxDQUhDLEVBSUQ7QUFBRyxRQUFJLEVBQUMsOEJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QztBQUFLLE9BQUcsRUFBQyxhQUFUO0FBQXVCLE9BQUcsRUFBQyxRQUEzQjtBQUFvQyxhQUFTLEVBQUVaLDhEQUFNLENBQUNZLE1BQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBdkMsQ0FKQyxDQTNDRixFQWtEQztBQUFJLGFBQVMsRUFBRVosOERBQU0sQ0FBQ2EsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FsREQsQ0FEQSxDQUREO0FBd0RBLENBckVEOztHQUFNcEIsSTs7S0FBQUEsSTtBQXVFU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWFlMTFkOGRiODUyYzA2NzQxYzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IFRlY2ggZnJvbSAnLi4vY29tcG9uZW50cy90ZWNoJ1xyXG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0Q2FyZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb2xvck1vZGUgZnJvbSAnLi4vY29tcG9uZW50cy9Db2xvck1vZGUnXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG5cdGNvbnN0ICBbTW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZShcIkxpZ2h0XCIpO1xyXG5cdGNvbnN0IFtjb2xvclRleHQsIHNldENvbG9yVGV4dF0gPSB1c2VTdGF0ZShcIkxpZ2h0XCIpXHJcblx0ZnVuY3Rpb24gdG9nZ2xlQ29sb3IoKSB7XHJcbiAgICAgICAgaWYgKE1vZGUgPT09IFwiTGlnaHRcIikge1xyXG5cdFx0XHRzZXRNb2RlKFwiRGFya1wiKVxyXG5cdFx0XHRzZXRDb2xvclRleHQoXCJEYXJrXCIpXHJcbiAgICAgICAgfSBlbHNlIGlmIChNb2RlID09PSBcIkRhcmtcIikge1xyXG5cdFx0XHRzZXRNb2RlKFwiTGlnaHRcIilcclxuICAgICAgICAgICAgc2V0Q29sb3JUZXh0KFwiTGlnaHRcIilcclxuICAgICAgICB9XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9eyAoTW9kZSA9PT0gXCJMaWdodFwiKSA/IChzdHlsZXMuaG9tZUxpZ2h0Qm9keSkgOiAoc3R5bGVzLmhvbWVEYXJrQm9keSkgfT5cclxuXHRcdFx0PGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG5cdFx0XHQ8TGluayBocmVmPVwiL1wiPlxyXG5cdFx0XHRcdDxhPjxoMiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5KQTwvaDI+PC9hPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJMaW5rc30+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Jsb2dcIj5cclxuXHRcdFx0XHRcdDxhID5CbG9nPC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuXHRcdFx0XHRcdDxhID5Qcm9qZWN0czwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcblx0XHRcdFx0XHQ8YSA+QWJvdXQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxDb2xvck1vZGVcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNvbG9yKCl9XHJcblx0XHRcdFx0XHR2YWx1ZT17Y29sb3JUZXh0fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvaGVhZGVyPlxyXG5cdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW1nY30+XHJcblx0XHQgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBzcmM9XCIvam9zaWFzLXByb2ZpbGUucG5nXCIgYWx0PVwiam9zaWFzLWxvZ29cIiAvPlxyXG48L3NwYW4+XHJcblx0XHQgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnByZX0+XHJcblx0XHQgSGksIEknbSBKb3NpYXMgQXVyZWxcclxuXHRcdCAgPC9oMj5cclxuXHJcblx0XHQgIDxUZWNoIFxyXG5cdFx0XHQvPlxyXG5cclxuXHRcdFx0PGgyPiBQcm9qZWN0cyBJIHdvcmsgT24gPC9oMj5cclxuXHJcblx0XHRcdDxQcm9qZWN0Q2FyZFxyXG5cdFx0XHQgbmFtZT1cIkNyb3BCb2FyZFwiXHJcblx0XHRcdCBhbHQ9XCJDcm9wQm9hcmRcIlxyXG5cdFx0XHQgaW1nc3JjPVwiL2Nyb3BiLnBuZ1wiXHJcblx0XHRcdCB0YXJnZXQ9XCJodHRwczovL2Nyb3Bib2FyZC52ZXJjZWwuYXBwXCJcclxuXHRcdFx0IC8+XHJcblxyXG5cdFx0XHQgPGg0PiBGaW5kIE1vcmUgb24gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NpYXNBdXJlbD90YWI9cmVwb3NpdG9yaWVzXCIgY2xhc3NOYW1lPXtzdHlsZXMuZ2l0fT5HaXRIdWI8L2E+IDwvaDQ+XHJcblx0XHRcdCA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcblx0XHRcdDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWxcIj48aW1nIHNyYz1cIi9naXRodWIucG5nXCIgYWx0PVwiZ2l0aHViXCIgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsfSAvPjwvYT5cdFx0IFxyXG5cdFx0XHQ8YSBocmVmPVwibWFpbHRvOiUyMG5kam9zaWFzYXVyZWxAZ21haWwuY29tXCI+PGltZyBzcmM9XCIvZ21haWwucG5nXCIgYWx0PVwiZ2l0aHViXCIgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsfSAvPjwvYT5cdFx0IFxyXG5cdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9Kb3NpYXNXaW5nP3M9MDlcIj48aW1nIHNyYz1cIi90d2l0dGVyLnBuZ1wiIGFsdD1cImdpdGh1YlwiIGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbH0gLz48L2E+XHRcdCBcclxuXHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vam9zaWFzYXVyZWwuaXRjaC5pby9cIj48aW1nIHNyYz1cIi9pdGNoaW8ucG5nXCIgYWx0PVwiZ2l0aHViXCIgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsfSAvPjwvYT5cdFx0IFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jfT4gwqkgMjAyMCBKb3NpYXMgQXVyZWwgPC9oMj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=