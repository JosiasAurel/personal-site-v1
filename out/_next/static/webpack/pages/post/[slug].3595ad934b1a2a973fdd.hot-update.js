webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostTemplate; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gray-matter */ "./node_modules/gray-matter/index.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_mdHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/mdHandler */ "./components/mdHandler.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_postTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/postTitle */ "./components/postTitle.js");
/* harmony import */ var _styles_postPage_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/postPage.module.css */ "./styles/postPage.module.css");
/* harmony import */ var _styles_postPage_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_postPage_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/post */ "./components/post.js");
/* harmony import */ var _components_ColorMode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ColorMode */ "./components/ColorMode.jsx");




var _jsxFileName = "C:\\josias\\josiasaureldev\\pages\\post\\[slug].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function PostTemplate(_ref) {
  _s();

  var content = _ref.content,
      data = _ref.data;
  var frontmatter = data; // Make frontmatter the data

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
    className: Mode === "Light" ? _styles_postPage_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.homeLightBody : _styles_postPage_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.homeDarkBody,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 10
    }
  }, __jsx("header", {
    className: _styles_postPage_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 10
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: _styles_postPage_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 8
    }
  }, "JA"))), __jsx("span", {
    className: _styles_postPage_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headerLinks,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/blog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 6
    }
  }, "Blog")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, "Projects")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  }, "About"))), __jsx(_components_ColorMode__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: function onClick() {
      return toggleColor();
    },
    value: colorText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  })), __jsx(_components_postTitle__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: frontmatter.title,
    date: "@JosiasWing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 10
    }
  }), __jsx(_components_post__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
    source: content,
    renderers: {
      code: _components_mdHandler__WEBPACK_IMPORTED_MODULE_5__["default"]
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 10
    }
  })), __jsx("div", {
    className: _styles_postPage_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 3
    }
  }, __jsx("a", {
    href: "https://github.com/JosiasAurel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/github.png",
    alt: "github",
    className: _styles_postPage_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.social,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "mailto:%20ndjosiasaurel@gmail.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/gmail.png",
    alt: "github",
    className: _styles_postPage_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.social,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 48
    }
  })), __jsx("a", {
    href: "https://twitter.com/JosiasWing?s=09",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/twitter.png",
    alt: "github",
    className: _styles_postPage_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.social,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 50
    }
  })), __jsx("a", {
    href: "https://josiasaurel.itch.io/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/itchio.png",
    alt: "github",
    className: _styles_postPage_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.social,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 43
    }
  }))), __jsx("h2", {
    className: _styles_postPage_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.c,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, " \xA9 2020 Josias Aurel "));
}

_s(PostTemplate, "MVwvnkGb7BZxXm4wt97cxB3mKlg=");

_c = PostTemplate;

PostTemplate.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var slug, content, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            slug = ctx.query.slug;
            _context.next = 3;
            return __webpack_require__("./content lazy recursive ^\\.\\/.*\\.md$")("./".concat(slug, ".md"));

          case 3:
            content = _context.sent;
            data = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(content["default"]); //console.log(data)

            return _context.abrupt("return", _objectSpread({}, data));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _c;

$RefreshReg$(_c, "PostTemplate");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanMiXSwibmFtZXMiOlsiUG9zdFRlbXBsYXRlIiwiY29udGVudCIsImRhdGEiLCJmcm9udG1hdHRlciIsInVzZVN0YXRlIiwiTW9kZSIsInNldE1vZGUiLCJjb2xvclRleHQiLCJzZXRDb2xvclRleHQiLCJ0b2dnbGVDb2xvciIsInN0eWxlcyIsImhvbWVMaWdodEJvZHkiLCJob21lRGFya0JvZHkiLCJoZWFkZXIiLCJuYW1lIiwiaGVhZGVyTGlua3MiLCJ0aXRsZSIsImNvZGUiLCJDb2RlQmxvY2siLCJmb290ZXIiLCJzb2NpYWwiLCJjIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwic2x1ZyIsInF1ZXJ5IiwibWF0dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsWUFBVCxPQUF1QztBQUFBOztBQUFBLE1BQWhCQyxPQUFnQixRQUFoQkEsT0FBZ0I7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFFbEQsTUFBTUMsV0FBVyxHQUFHRCxJQUFwQixDQUZrRCxDQUV6Qjs7QUFGeUIsa0JBSXpCRSxzREFBUSxDQUFDLE1BQUQsQ0FKaUI7QUFBQSxNQUkxQ0MsSUFKMEM7QUFBQSxNQUlwQ0MsT0FKb0M7O0FBQUEsbUJBS25CRixzREFBUSxDQUFDLE1BQUQsQ0FMVztBQUFBLE1BSzlDRyxTQUw4QztBQUFBLE1BS25DQyxZQUxtQzs7QUFNckQsV0FBU0MsV0FBVCxHQUF1QjtBQUNoQixRQUFJSixJQUFJLEtBQUssT0FBYixFQUFzQjtBQUMzQkMsYUFBTyxDQUFDLE1BQUQsQ0FBUDtBQUNBRSxrQkFBWSxDQUFDLE1BQUQsQ0FBWjtBQUNNLEtBSEQsTUFHTyxJQUFJSCxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNqQ0MsYUFBTyxDQUFDLE9BQUQsQ0FBUDtBQUNTRSxrQkFBWSxDQUFDLE9BQUQsQ0FBWjtBQUNIO0FBQ1A7O0FBR0UsU0FDSztBQUFLLGFBQVMsRUFBSUgsSUFBSSxLQUFLLE9BQVYsR0FBc0JLLGtFQUFNLENBQUNDLGFBQTdCLEdBQStDRCxrRUFBTSxDQUFDRSxZQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBUSxhQUFTLEVBQUVGLGtFQUFNLENBQUNHLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTixNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFJLGFBQVMsRUFBRUgsa0VBQU0sQ0FBQ0ksSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFILENBREQsQ0FETSxFQUtMO0FBQU0sYUFBUyxFQUFFSixrRUFBTSxDQUFDSyxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsQ0FERCxFQUtDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxDQUxELEVBU0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsQ0FURCxDQUxLLEVBa0JMLE1BQUMsOERBQUQ7QUFDQyxXQUFPLEVBQUU7QUFBQSxhQUFNTixXQUFXLEVBQWpCO0FBQUEsS0FEVjtBQUVDLFNBQUssRUFBRUYsU0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEJLLENBREEsRUF3QkEsTUFBQyw2REFBRDtBQUNLLFNBQUssRUFBRUosV0FBVyxDQUFDYSxLQUR4QjtBQUVLLFFBQUksRUFBQyxhQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4QkEsRUE2QkMsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0QsTUFBQyxxREFBRDtBQUNHLFVBQU0sRUFBRWYsT0FEWDtBQUVHLGFBQVMsRUFBRTtBQUFDZ0IsVUFBSSxFQUFFQyw2REFBU0E7QUFBaEIsS0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREMsQ0E3QkQsRUFxQ1A7QUFBSyxhQUFTLEVBQUVSLGtFQUFNLENBQUNTLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLFFBQUksRUFBQyxnQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlDO0FBQUssT0FBRyxFQUFDLGFBQVQ7QUFBdUIsT0FBRyxFQUFDLFFBQTNCO0FBQW9DLGFBQVMsRUFBRVQsa0VBQU0sQ0FBQ1UsTUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUF6QyxDQURELEVBRUM7QUFBRyxRQUFJLEVBQUMsbUNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QztBQUFLLE9BQUcsRUFBQyxZQUFUO0FBQXNCLE9BQUcsRUFBQyxRQUExQjtBQUFtQyxhQUFTLEVBQUVWLGtFQUFNLENBQUNVLE1BQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBNUMsQ0FGRCxFQUdDO0FBQUcsUUFBSSxFQUFDLHFDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOEM7QUFBSyxPQUFHLEVBQUMsY0FBVDtBQUF3QixPQUFHLEVBQUMsUUFBNUI7QUFBcUMsYUFBUyxFQUFFVixrRUFBTSxDQUFDVSxNQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTlDLENBSEQsRUFJQztBQUFHLFFBQUksRUFBQyw4QkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDO0FBQUssT0FBRyxFQUFDLGFBQVQ7QUFBdUIsT0FBRyxFQUFDLFFBQTNCO0FBQW9DLGFBQVMsRUFBRVYsa0VBQU0sQ0FBQ1UsTUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUF2QyxDQUpELENBckNPLEVBNENDO0FBQUksYUFBUyxFQUFFVixrRUFBTSxDQUFDVyxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQTVDRCxDQURMO0FBZ0RIOztHQWpFdUJyQixZOztLQUFBQSxZOztBQW1FeEJBLFlBQVksQ0FBQ3NCLGVBQWI7QUFBQSwrTEFBK0IsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CQyxnQkFEbUIsR0FDVkQsR0FBRyxDQUFDRSxLQURNLENBQ25CRCxJQURtQjtBQUFBO0FBQUEsbUJBR0wsZ0VBQU8sWUFBaUJBLElBQXhCLFNBSEs7O0FBQUE7QUFHckJ2QixtQkFIcUI7QUFLckJDLGdCQUxxQixHQUtkd0Isa0RBQU0sQ0FBQ3pCLE9BQU8sV0FBUixDQUxRLEVBTTNCOztBQU4yQiwrREFPZkMsSUFQZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS4zNTk1YWQ5MzRiMWEyYTk3M2ZkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcidcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWRIYW5kbGVyJ1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcclxuaW1wb3J0IFBvc3RUaXRsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3RUaXRsZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvcG9zdFBhZ2UubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QnXHJcbmltcG9ydCBDb2xvck1vZGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db2xvck1vZGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0VGVtcGxhdGUoe2NvbnRlbnQsIGRhdGF9KSB7XHJcblxyXG4gICAgY29uc3QgZnJvbnRtYXR0ZXIgPSBkYXRhIC8vIE1ha2UgZnJvbnRtYXR0ZXIgdGhlIGRhdGFcclxuXHJcbiAgICBjb25zdCAgW01vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoXCJEYXJrXCIpO1xyXG5cdGNvbnN0IFtjb2xvclRleHQsIHNldENvbG9yVGV4dF0gPSB1c2VTdGF0ZShcIkRhcmtcIilcclxuXHRmdW5jdGlvbiB0b2dnbGVDb2xvcigpIHtcclxuICAgICAgICBpZiAoTW9kZSA9PT0gXCJMaWdodFwiKSB7XHJcblx0XHRcdHNldE1vZGUoXCJEYXJrXCIpXHJcblx0XHRcdHNldENvbG9yVGV4dChcIkRhcmtcIilcclxuICAgICAgICB9IGVsc2UgaWYgKE1vZGUgPT09IFwiRGFya1wiKSB7XHJcblx0XHRcdHNldE1vZGUoXCJMaWdodFwiKVxyXG4gICAgICAgICAgICBzZXRDb2xvclRleHQoXCJMaWdodFwiKVxyXG4gICAgICAgIH1cclxuXHR9XHJcblx0XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAoTW9kZSA9PT0gXCJMaWdodFwiKSA/IChzdHlsZXMuaG9tZUxpZ2h0Qm9keSkgOiAoc3R5bGVzLmhvbWVEYXJrQm9keSkgfT5cclxuICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG5cdFx0IDxMaW5rIGhyZWY9XCIvXCI+XHJcblx0XHRcdFx0PGE+PGgyIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PkpBPC9oMj48L2E+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJMaW5rc30+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Jsb2dcIj5cclxuXHRcdFx0XHRcdDxhID5CbG9nPC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuXHRcdFx0XHRcdDxhID5Qcm9qZWN0czwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcblx0XHRcdFx0XHQ8YSA+QWJvdXQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxDb2xvck1vZGVcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNvbG9yKCl9XHJcblx0XHRcdFx0XHR2YWx1ZT17Y29sb3JUZXh0fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvaGVhZGVyPlxyXG4gICAgICAgICA8UG9zdFRpdGxlXHJcbiAgICAgICAgICAgICAgdGl0bGU9e2Zyb250bWF0dGVyLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGRhdGU9XCJASm9zaWFzV2luZ1wiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxQb3N0PlxyXG4gICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICBzb3VyY2U9e2NvbnRlbnR9XHJcbiAgICAgICAgICAgIHJlbmRlcmVycz17e2NvZGU6IENvZGVCbG9ja319XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDwvUG9zdD5cclxuXHJcblx0IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuXHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NpYXNBdXJlbFwiPjxpbWcgc3JjPVwiL2dpdGh1Yi5wbmdcIiBhbHQ9XCJnaXRodWJcIiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWx9IC8+PC9hPlx0XHQgXHJcblx0XHRcdDxhIGhyZWY9XCJtYWlsdG86JTIwbmRqb3NpYXNhdXJlbEBnbWFpbC5jb21cIj48aW1nIHNyYz1cIi9nbWFpbC5wbmdcIiBhbHQ9XCJnaXRodWJcIiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWx9IC8+PC9hPlx0XHQgXHJcblx0XHRcdDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL0pvc2lhc1dpbmc/cz0wOVwiPjxpbWcgc3JjPVwiL3R3aXR0ZXIucG5nXCIgYWx0PVwiZ2l0aHViXCIgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsfSAvPjwvYT5cdFx0IFxyXG5cdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9qb3NpYXNhdXJlbC5pdGNoLmlvL1wiPjxpbWcgc3JjPVwiL2l0Y2hpby5wbmdcIiBhbHQ9XCJnaXRodWJcIiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWx9IC8+PC9hPlx0XHQgXHJcblx0XHRcdDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jfT4gwqkgMjAyMCBKb3NpYXMgQXVyZWwgPC9oMj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5Qb3N0VGVtcGxhdGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgeyBzbHVnIH0gPSBjdHgucXVlcnlcclxuICAgIFxyXG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IGltcG9ydChgLi4vLi4vY29udGVudC8ke3NsdWd9Lm1kYClcclxuICAgIFxyXG4gICAgY29uc3QgZGF0YSA9IG1hdHRlcihjb250ZW50LmRlZmF1bHQpXHJcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByZXR1cm4geyAuLi5kYXRhIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9