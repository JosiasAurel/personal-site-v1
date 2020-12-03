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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("Dark"),
      Mode = _useState[0],
      setMode = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("Dark"),
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
    target: "https://cropboard.josiasaurel.tech",
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

_s(Home, "MVwvnkGb7BZxXm4wt97cxB3mKlg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsIk1vZGUiLCJzZXRNb2RlIiwiY29sb3JUZXh0Iiwic2V0Q29sb3JUZXh0IiwidG9nZ2xlQ29sb3IiLCJzdHlsZXMiLCJib2R5IiwiaG9tZUxpZ2h0Qm9keSIsImhvbWVEYXJrQm9keSIsImhlYWRlciIsIm5hbWUiLCJoZWFkZXJMaW5rcyIsImltZ2MiLCJsb2dvIiwicHJlIiwiZ2l0IiwiZm9vdGVyIiwic29jaWFsIiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQUMsTUFBRCxDQURmO0FBQUEsTUFDVkMsSUFEVTtBQUFBLE1BQ0pDLE9BREk7O0FBQUEsbUJBRWdCRixzREFBUSxDQUFDLE1BQUQsQ0FGeEI7QUFBQSxNQUVYRyxTQUZXO0FBQUEsTUFFQUMsWUFGQTs7QUFHbEIsV0FBU0MsV0FBVCxHQUF1QjtBQUNoQixRQUFJSixJQUFJLEtBQUssT0FBYixFQUFzQjtBQUMzQkMsYUFBTyxDQUFDLE1BQUQsQ0FBUDtBQUNBRSxrQkFBWSxDQUFDLE1BQUQsQ0FBWjtBQUNNLEtBSEQsTUFHTyxJQUFJSCxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNqQ0MsYUFBTyxDQUFDLE9BQUQsQ0FBUDtBQUNTRSxrQkFBWSxDQUFDLE9BQUQsQ0FBWjtBQUNIO0FBQ1A7O0FBRUQsU0FDQztBQUFLLGFBQVMsRUFBRUUsOERBQU0sQ0FBQ0MsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFJTixJQUFJLEtBQUssT0FBVixHQUFzQkssOERBQU0sQ0FBQ0UsYUFBN0IsR0FBK0NGLDhEQUFNLENBQUNHLFlBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFRLGFBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQUksYUFBUyxFQUFFSiw4REFBTSxDQUFDSyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUgsQ0FERCxDQURBLEVBSUM7QUFBTSxhQUFTLEVBQUVMLDhEQUFNLENBQUNNLFdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxDQURELEVBS0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLENBTEQsRUFTQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxDQVRELENBSkQsRUFpQkMsTUFBQyw2REFBRDtBQUNDLFdBQU8sRUFBRTtBQUFBLGFBQU1QLFdBQVcsRUFBakI7QUFBQSxLQURWO0FBRUMsU0FBSyxFQUFFRixTQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkQsQ0FERCxFQXVCQTtBQUFNLGFBQVMsRUFBRUcsOERBQU0sQ0FBQ08sSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFFUCw4REFBTSxDQUFDUSxJQUF2QjtBQUE2QixPQUFHLEVBQUMscUJBQWpDO0FBQXVELE9BQUcsRUFBQyxhQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0F2QkEsRUEwQkM7QUFBSSxhQUFTLEVBQUVSLDhEQUFNLENBQUNTLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBMUJELEVBOEJFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlCRixFQWlDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQWpDRCxFQW1DQyxNQUFDLCtEQUFEO0FBQ0MsUUFBSSxFQUFDLFdBRE47QUFFQyxPQUFHLEVBQUMsV0FGTDtBQUdDLFVBQU0sRUFBQyxZQUhSO0FBSUMsVUFBTSxFQUFDLG9DQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQ0QsRUEwQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBa0I7QUFBRyxRQUFJLEVBQUMsaURBQVI7QUFBMEQsYUFBUyxFQUFFVCw4REFBTSxDQUFDVSxHQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWxCLE1BMUNGLEVBMkNFO0FBQUssYUFBUyxFQUFFViw4REFBTSxDQUFDVyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0Q7QUFBRyxRQUFJLEVBQUMsZ0NBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5QztBQUFLLE9BQUcsRUFBQyxhQUFUO0FBQXVCLE9BQUcsRUFBQyxRQUEzQjtBQUFvQyxhQUFTLEVBQUVYLDhEQUFNLENBQUNZLE1BQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBekMsQ0FEQyxFQUVEO0FBQUcsUUFBSSxFQUFDLG1DQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEM7QUFBSyxPQUFHLEVBQUMsWUFBVDtBQUFzQixPQUFHLEVBQUMsUUFBMUI7QUFBbUMsYUFBUyxFQUFFWiw4REFBTSxDQUFDWSxNQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTVDLENBRkMsRUFHRDtBQUFHLFFBQUksRUFBQyxxQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThDO0FBQUssT0FBRyxFQUFDLGNBQVQ7QUFBd0IsT0FBRyxFQUFDLFFBQTVCO0FBQXFDLGFBQVMsRUFBRVosOERBQU0sQ0FBQ1ksTUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUE5QyxDQUhDLEVBSUQ7QUFBRyxRQUFJLEVBQUMsOEJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QztBQUFLLE9BQUcsRUFBQyxhQUFUO0FBQXVCLE9BQUcsRUFBQyxRQUEzQjtBQUFvQyxhQUFTLEVBQUVaLDhEQUFNLENBQUNZLE1BQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBdkMsQ0FKQyxDQTNDRixFQWtEQztBQUFJLGFBQVMsRUFBRVosOERBQU0sQ0FBQ2EsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FsREQsQ0FEQSxDQUREO0FBd0RBLENBckVEOztHQUFNcEIsSTs7S0FBQUEsSTtBQXVFU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjgyNjM0MjlmMDE2ZjhlZjViNTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IFRlY2ggZnJvbSAnLi4vY29tcG9uZW50cy90ZWNoJ1xyXG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0Q2FyZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb2xvck1vZGUgZnJvbSAnLi4vY29tcG9uZW50cy9Db2xvck1vZGUnXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG5cdGNvbnN0ICBbTW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZShcIkRhcmtcIik7XHJcblx0Y29uc3QgW2NvbG9yVGV4dCwgc2V0Q29sb3JUZXh0XSA9IHVzZVN0YXRlKFwiRGFya1wiKVxyXG5cdGZ1bmN0aW9uIHRvZ2dsZUNvbG9yKCkge1xyXG4gICAgICAgIGlmIChNb2RlID09PSBcIkxpZ2h0XCIpIHtcclxuXHRcdFx0c2V0TW9kZShcIkRhcmtcIilcclxuXHRcdFx0c2V0Q29sb3JUZXh0KFwiRGFya1wiKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoTW9kZSA9PT0gXCJEYXJrXCIpIHtcclxuXHRcdFx0c2V0TW9kZShcIkxpZ2h0XCIpXHJcbiAgICAgICAgICAgIHNldENvbG9yVGV4dChcIkxpZ2h0XCIpXHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPXsgKE1vZGUgPT09IFwiTGlnaHRcIikgPyAoc3R5bGVzLmhvbWVMaWdodEJvZHkpIDogKHN0eWxlcy5ob21lRGFya0JvZHkpIH0+XHJcblx0XHRcdDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuXHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cclxuXHRcdFx0XHQ8YT48aDIgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+SkE8L2gyPjwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyTGlua3N9PlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9ibG9nXCI+XHJcblx0XHRcdFx0XHQ8YSA+QmxvZzwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XHJcblx0XHRcdFx0XHQ8YSA+UHJvamVjdHM8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG5cdFx0XHRcdFx0PGEgPkFib3V0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8Q29sb3JNb2RlXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0b2dnbGVDb2xvcigpfVxyXG5cdFx0XHRcdFx0dmFsdWU9e2NvbG9yVGV4dH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2hlYWRlcj5cclxuXHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmltZ2N9PlxyXG5cdFx0IDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gc3JjPVwiL2pvc2lhcy1wcm9maWxlLnBuZ1wiIGFsdD1cImpvc2lhcy1sb2dvXCIgLz5cclxuPC9zcGFuPlxyXG5cdFx0IDxoMiBjbGFzc05hbWU9e3N0eWxlcy5wcmV9PlxyXG5cdFx0IEhpLCBJJ20gSm9zaWFzIEF1cmVsXHJcblx0XHQgIDwvaDI+XHJcblxyXG5cdFx0ICA8VGVjaCBcclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdDxoMj4gUHJvamVjdHMgSSB3b3JrIE9uIDwvaDI+XHJcblxyXG5cdFx0XHQ8UHJvamVjdENhcmRcclxuXHRcdFx0IG5hbWU9XCJDcm9wQm9hcmRcIlxyXG5cdFx0XHQgYWx0PVwiQ3JvcEJvYXJkXCJcclxuXHRcdFx0IGltZ3NyYz1cIi9jcm9wYi5wbmdcIlxyXG5cdFx0XHQgdGFyZ2V0PVwiaHR0cHM6Ly9jcm9wYm9hcmQuam9zaWFzYXVyZWwudGVjaFwiXHJcblx0XHRcdCAvPlxyXG5cclxuXHRcdFx0IDxoND4gRmluZCBNb3JlIG9uIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWw/dGFiPXJlcG9zaXRvcmllc1wiIGNsYXNzTmFtZT17c3R5bGVzLmdpdH0+R2l0SHViPC9hPiA8L2g0PlxyXG5cdFx0XHQgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG5cdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0pvc2lhc0F1cmVsXCI+PGltZyBzcmM9XCIvZ2l0aHViLnBuZ1wiIGFsdD1cImdpdGh1YlwiIGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbH0gLz48L2E+XHRcdCBcclxuXHRcdFx0PGEgaHJlZj1cIm1haWx0bzolMjBuZGpvc2lhc2F1cmVsQGdtYWlsLmNvbVwiPjxpbWcgc3JjPVwiL2dtYWlsLnBuZ1wiIGFsdD1cImdpdGh1YlwiIGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbH0gLz48L2E+XHRcdCBcclxuXHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vSm9zaWFzV2luZz9zPTA5XCI+PGltZyBzcmM9XCIvdHdpdHRlci5wbmdcIiBhbHQ9XCJnaXRodWJcIiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWx9IC8+PC9hPlx0XHQgXHJcblx0XHRcdDxhIGhyZWY9XCJodHRwczovL2pvc2lhc2F1cmVsLml0Y2guaW8vXCI+PGltZyBzcmM9XCIvaXRjaGlvLnBuZ1wiIGFsdD1cImdpdGh1YlwiIGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbH0gLz48L2E+XHRcdCBcclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY30+IMKpIDIwMjAgSm9zaWFzIEF1cmVsIDwvaDI+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9