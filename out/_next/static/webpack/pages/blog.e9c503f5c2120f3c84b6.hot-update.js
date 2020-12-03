webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog.jsx":
/*!************************!*\
  !*** ./pages/blog.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_postCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/postCard */ "./components/postCard.jsx");
/* harmony import */ var _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/posts.module.css */ "./styles/posts.module.css");
/* harmony import */ var _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_posts_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ColorMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ColorMode */ "./components/ColorMode.jsx");
var _this = undefined,
    _jsxFileName = "C:\\josias\\josiasaureldev\\pages\\blog.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Posts = function Posts() {
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
    className: Mode === "Light" ? _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.homeLightBody : _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.homeDarkBody,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 1
    }
  }, __jsx("header", {
    className: _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 1
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 1
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 8
    }
  }, "JA"))), __jsx("span", {
    className: _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.headerLinks,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  }, "Blog")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/projects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  }, "Projects")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 6
    }
  }, "About"))), __jsx(_components_ColorMode__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return toggleColor();
    },
    value: colorText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  })), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "Welcome to the posts page"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_components_postCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    postName: "Install VSCode on Android",
    link: "/post/install-vscode-on-android",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }
  }), __jsx(_components_postCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    postName: "Handle Browser Load events in JavaScript",
    link: "/post/install-vscode-on-android",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }
  })), __jsx("div", {
    className: _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "https://github.com/JosiasAurel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/github.png",
    alt: "github",
    className: _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.social,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "mailto:%20ndjosiasaurel@gmail.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/gmail.png",
    alt: "github",
    className: _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.social,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 48
    }
  })), __jsx("a", {
    href: "https://twitter.com/JosiasWing?s=09",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/twitter.png",
    alt: "github",
    className: _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.social,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 50
    }
  })), __jsx("a", {
    href: "https://josiasaurel.itch.io/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/itchio.png",
    alt: "github",
    className: _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.social,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 43
    }
  }))), __jsx("h2", {
    className: _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.c,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }
  }, " \xA9 2020 Josias Aurel ")));
};

_s(Posts, "MVwvnkGb7BZxXm4wt97cxB3mKlg=");

_c = Posts;
/* harmony default export */ __webpack_exports__["default"] = (Posts);

var _c;

$RefreshReg$(_c, "Posts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qc3giXSwibmFtZXMiOlsiUG9zdHMiLCJ1c2VTdGF0ZSIsIk1vZGUiLCJzZXRNb2RlIiwiY29sb3JUZXh0Iiwic2V0Q29sb3JUZXh0IiwidG9nZ2xlQ29sb3IiLCJzdHlsZXMiLCJob21lTGlnaHRCb2R5IiwiaG9tZURhcmtCb2R5IiwiaGVhZGVyIiwibmFtZSIsImhlYWRlckxpbmtzIiwiZm9vdGVyIiwic29jaWFsIiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsTUFBRCxDQURqQjtBQUFBLE1BQ1JDLElBRFE7QUFBQSxNQUNGQyxPQURFOztBQUFBLG1CQUVlRixzREFBUSxDQUFDLE1BQUQsQ0FGdkI7QUFBQSxNQUVaRyxTQUZZO0FBQUEsTUFFREMsWUFGQzs7QUFHbkIsV0FBU0MsV0FBVCxHQUF1QjtBQUNoQixRQUFJSixJQUFJLEtBQUssT0FBYixFQUFzQjtBQUMzQkMsYUFBTyxDQUFDLE1BQUQsQ0FBUDtBQUNBRSxrQkFBWSxDQUFDLE1BQUQsQ0FBWjtBQUNNLEtBSEQsTUFHTyxJQUFJSCxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNqQ0MsYUFBTyxDQUFDLE9BQUQsQ0FBUDtBQUNTRSxrQkFBWSxDQUFDLE9BQUQsQ0FBWjtBQUNIO0FBQ1A7O0FBQ0UsU0FDSixtRUFDQTtBQUFLLGFBQVMsRUFBSUgsSUFBSSxLQUFLLE9BQVYsR0FBc0JLLCtEQUFNLENBQUNDLGFBQTdCLEdBQStDRCwrREFBTSxDQUFDRSxZQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBUSxhQUFTLEVBQUVGLCtEQUFNLENBQUNHLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEs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QUF1QixPQUFHLEVBQUMsUUFBM0I7QUFBb0MsYUFBUyxFQUFFUCwrREFBTSxDQUFDTyxNQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXZDLENBSkMsQ0FuQ0osRUEwQ0c7QUFBSSxhQUFTLEVBQUVQLCtEQUFNLENBQUNRLENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBMUNILENBREEsQ0FESTtBQWdESCxDQTVERDs7R0FBTWYsSzs7S0FBQUEsSztBQThEU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy5lOWM1MDNmNWMyMTIwZjNjODRiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0Q2FyZCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvcG9zdHMubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQ29sb3JNb2RlIGZyb20gJy4uL2NvbXBvbmVudHMvQ29sb3JNb2RlJ1xyXG5cclxuXHJcbmNvbnN0IFBvc3RzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgIFtNb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKFwiRGFya1wiKTtcclxuXHRjb25zdCBbY29sb3JUZXh0LCBzZXRDb2xvclRleHRdID0gdXNlU3RhdGUoXCJEYXJrXCIpXHJcblx0ZnVuY3Rpb24gdG9nZ2xlQ29sb3IoKSB7XHJcbiAgICAgICAgaWYgKE1vZGUgPT09IFwiTGlnaHRcIikge1xyXG5cdFx0XHRzZXRNb2RlKFwiRGFya1wiKVxyXG5cdFx0XHRzZXRDb2xvclRleHQoXCJEYXJrXCIpXHJcbiAgICAgICAgfSBlbHNlIGlmIChNb2RlID09PSBcIkRhcmtcIikge1xyXG5cdFx0XHRzZXRNb2RlKFwiTGlnaHRcIilcclxuICAgICAgICAgICAgc2V0Q29sb3JUZXh0KFwiTGlnaHRcIilcclxuICAgICAgICB9XHJcblx0fVxyXG4gICAgcmV0dXJuIChcclxuPD5cclxuPGRpdiBjbGFzc05hbWU9eyAoTW9kZSA9PT0gXCJMaWdodFwiKSA/IChzdHlsZXMuaG9tZUxpZ2h0Qm9keSkgOiAoc3R5bGVzLmhvbWVEYXJrQm9keSkgfT5cclxuPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG48TGluayBocmVmPVwiL1wiPlxyXG5cdFx0XHRcdDxhPjxoMiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5KQTwvaDI+PC9hPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJMaW5rc30+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Jsb2dcIj5cclxuXHRcdFx0XHRcdDxhID5CbG9nPC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuXHRcdFx0XHRcdDxhID5Qcm9qZWN0czwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcblx0XHRcdFx0XHQ8YSA+QWJvdXQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxDb2xvck1vZGVcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNvbG9yKCl9XHJcblx0XHRcdFx0XHR2YWx1ZT17Y29sb3JUZXh0fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvaGVhZGVyPlxyXG5cclxuICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgIFdlbGNvbWUgdG8gdGhlIHBvc3RzIHBhZ2VcclxuICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG5cdFx0XHQ8UG9zdENhcmQgcG9zdE5hbWU9XCJJbnN0YWxsIFZTQ29kZSBvbiBBbmRyb2lkXCJcclxuXHRcdFx0ICAgICAgICAgIGxpbms9XCIvcG9zdC9pbnN0YWxsLXZzY29kZS1vbi1hbmRyb2lkXCIgLz5cclxuXHRcdFx0PFBvc3RDYXJkIHBvc3ROYW1lPVwiSGFuZGxlIEJyb3dzZXIgTG9hZCBldmVudHMgaW4gSmF2YVNjcmlwdFwiXHJcblx0XHRcdCAgICAgICAgICBsaW5rPVwiL3Bvc3QvaW5zdGFsbC12c2NvZGUtb24tYW5kcm9pZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHQgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG5cdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0pvc2lhc0F1cmVsXCI+PGltZyBzcmM9XCIvZ2l0aHViLnBuZ1wiIGFsdD1cImdpdGh1YlwiIGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbH0gLz48L2E+XHRcdCBcclxuXHRcdFx0PGEgaHJlZj1cIm1haWx0bzolMjBuZGpvc2lhc2F1cmVsQGdtYWlsLmNvbVwiPjxpbWcgc3JjPVwiL2dtYWlsLnBuZ1wiIGFsdD1cImdpdGh1YlwiIGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbH0gLz48L2E+XHRcdCBcclxuXHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vSm9zaWFzV2luZz9zPTA5XCI+PGltZyBzcmM9XCIvdHdpdHRlci5wbmdcIiBhbHQ9XCJnaXRodWJcIiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWx9IC8+PC9hPlx0XHQgXHJcblx0XHRcdDxhIGhyZWY9XCJodHRwczovL2pvc2lhc2F1cmVsLml0Y2guaW8vXCI+PGltZyBzcmM9XCIvaXRjaGlvLnBuZ1wiIGFsdD1cImdpdGh1YlwiIGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbH0gLz48L2E+XHRcdCBcclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY30+IMKpIDIwMjAgSm9zaWFzIEF1cmVsIDwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0cyJdLCJzb3VyY2VSb290IjoiIn0=