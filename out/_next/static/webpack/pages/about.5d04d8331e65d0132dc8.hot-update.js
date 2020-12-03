webpackHotUpdate_N_E("pages/about",{

/***/ "./pages/about.jsx":
/*!*************************!*\
  !*** ./pages/about.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "C:\\josias\\josiasaureldev\\pages\\about.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var About = function About() {
  _s();

  var _useState = useState("Light"),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      Mode = _useState2[0],
      setMode = _useState2[1];

  var _useState3 = useState("Light"),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      colorText = _useState4[0],
      setColorText = _useState4[1];

  function toggleColor() {
    if (Mode === "Light") {
      setMode("Dark");
      setColorText("Dark");
    } else if (Mode === "Dark") {
      setMode("Light");
      setColorText("Light");
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: Mode === "Light" ? styles.homeLightBody : styles.homeDarkBody,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: styles.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(Link, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: styles.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 8
    }
  }, "JA"))), __jsx("span", {
    className: styles.headerLinks,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(Link, {
    href: "/blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }, "Blog")), __jsx(Link, {
    href: "/projects",
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
  }, "Projects")), __jsx(Link, {
    href: "/about",
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
  }, "About"))), __jsx(ColorMode, {
    onClick: function onClick() {
      return toggleColor();
    },
    value: colorText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  })))));
};

_s(About, "CT/Fmp/2EcXcb3WrPfJjEsdWqC0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanN4Il0sIm5hbWVzIjpbIkFib3V0IiwidXNlU3RhdGUiLCJNb2RlIiwic2V0TW9kZSIsImNvbG9yVGV4dCIsInNldENvbG9yVGV4dCIsInRvZ2dsZUNvbG9yIiwic3R5bGVzIiwiaG9tZUxpZ2h0Qm9keSIsImhvbWVEYXJrQm9keSIsImhlYWRlciIsIm5hbWUiLCJoZWFkZXJMaW5rcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNTQyxRQUFRLENBQUMsT0FBRCxDQURqQjtBQUFBO0FBQUEsTUFDUkMsSUFEUTtBQUFBLE1BQ0ZDLE9BREU7O0FBQUEsbUJBRWVGLFFBQVEsQ0FBQyxPQUFELENBRnZCO0FBQUE7QUFBQSxNQUVaRyxTQUZZO0FBQUEsTUFFREMsWUFGQzs7QUFHbkIsV0FBU0MsV0FBVCxHQUF1QjtBQUNoQixRQUFJSixJQUFJLEtBQUssT0FBYixFQUFzQjtBQUMzQkMsYUFBTyxDQUFDLE1BQUQsQ0FBUDtBQUNBRSxrQkFBWSxDQUFDLE1BQUQsQ0FBWjtBQUNNLEtBSEQsTUFHTyxJQUFJSCxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNqQ0MsYUFBTyxDQUFDLE9BQUQsQ0FBUDtBQUNTRSxrQkFBWSxDQUFDLE9BQUQsQ0FBWjtBQUNIO0FBQ1A7O0FBQ0UsU0FDSSxtRUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUlILElBQUksS0FBSyxPQUFWLEdBQXNCSyxNQUFNLENBQUNDLGFBQTdCLEdBQStDRCxNQUFNLENBQUNFLFlBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFRLGFBQVMsRUFBRUYsTUFBTSxDQUFDRyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1QsTUFBQyxJQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFJLGFBQVMsRUFBRUgsTUFBTSxDQUFDSSxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUgsQ0FERCxDQURTLEVBSVI7QUFBTSxhQUFTLEVBQUVKLE1BQU0sQ0FBQ0ssV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsSUFBRDtBQUFNLFFBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsQ0FERCxFQUtDLE1BQUMsSUFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLENBTEQsRUFTQyxNQUFDLElBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLENBVEQsQ0FKUSxFQWlCUixNQUFDLFNBQUQ7QUFDQyxXQUFPLEVBQUU7QUFBQSxhQUFNTixXQUFXLEVBQWpCO0FBQUEsS0FEVjtBQUVDLFNBQUssRUFBRUYsU0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJRLENBREEsQ0FEQSxDQURKLENBREo7QUE4QkgsQ0ExQ0Q7O0dBQU1KLEs7O0tBQUFBLEs7QUEyQ1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjVkMDRkODMzMWU2NWQwMTMyZGM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgIFtNb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKFwiTGlnaHRcIik7XHJcblx0Y29uc3QgW2NvbG9yVGV4dCwgc2V0Q29sb3JUZXh0XSA9IHVzZVN0YXRlKFwiTGlnaHRcIilcclxuXHRmdW5jdGlvbiB0b2dnbGVDb2xvcigpIHtcclxuICAgICAgICBpZiAoTW9kZSA9PT0gXCJMaWdodFwiKSB7XHJcblx0XHRcdHNldE1vZGUoXCJEYXJrXCIpXHJcblx0XHRcdHNldENvbG9yVGV4dChcIkRhcmtcIilcclxuICAgICAgICB9IGVsc2UgaWYgKE1vZGUgPT09IFwiRGFya1wiKSB7XHJcblx0XHRcdHNldE1vZGUoXCJMaWdodFwiKVxyXG4gICAgICAgICAgICBzZXRDb2xvclRleHQoXCJMaWdodFwiKVxyXG4gICAgICAgIH1cclxuXHR9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgKE1vZGUgPT09IFwiTGlnaHRcIikgPyAoc3R5bGVzLmhvbWVMaWdodEJvZHkpIDogKHN0eWxlcy5ob21lRGFya0JvZHkpIH0+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuXHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cclxuXHRcdFx0XHQ8YT48aDIgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+SkE8L2gyPjwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyTGlua3N9PlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9ibG9nXCI+XHJcblx0XHRcdFx0XHQ8YSA+QmxvZzwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XHJcblx0XHRcdFx0XHQ8YSA+UHJvamVjdHM8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG5cdFx0XHRcdFx0PGEgPkFib3V0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8Q29sb3JNb2RlXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0b2dnbGVDb2xvcigpfVxyXG5cdFx0XHRcdFx0dmFsdWU9e2NvbG9yVGV4dH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2hlYWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0Il0sInNvdXJjZVJvb3QiOiIifQ==