webpackHotUpdate_N_E("pages/projects",{

/***/ "./components/projectsCard.jsx":
/*!*************************************!*\
  !*** ./components/projectsCard.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_projectcard_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/projectcard.module.css */ "./styles/projectcard.module.css");
/* harmony import */ var _styles_projectcard_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_projectcard_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\josias\\josiasaureldev\\components\\projectsCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ProjectCard = function ProjectCard(_ref) {
  var projectName = _ref.projectName,
      label = _ref.label,
      description = _ref.description,
      code = _ref.code,
      liveApp = _ref.liveApp;
  return __jsx("div", {
    className: _styles_projectcard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, projectName), __jsx("span", {
    className: _styles_projectcard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.info,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: _styles_projectcard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 35
    }
  }, label), " ", __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 75
    }
  }, description)), __jsx("span", {
    className: _styles_projectcard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.flex,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, code ? __jsx("a", {
    href: code,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 18
    }
  }, __jsx("img", {
    className: _styles_projectcard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.social,
    src: "/github.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 33
    }
  })) : "", liveApp ? __jsx("a", {
    href: liveApp,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: _styles_projectcard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.social,
    src: "/live.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 39
    }
  })) : ""));
};

_c = ProjectCard;
/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

var _c;

$RefreshReg$(_c, "ProjectCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0c0NhcmQuanN4Il0sIm5hbWVzIjpbIlByb2plY3RDYXJkIiwicHJvamVjdE5hbWUiLCJsYWJlbCIsImRlc2NyaXB0aW9uIiwiY29kZSIsImxpdmVBcHAiLCJzdHlsZXMiLCJjYXJkIiwiaW5mbyIsImZsZXgiLCJzb2NpYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXdEO0FBQUEsTUFBckRDLFdBQXFELFFBQXJEQSxXQUFxRDtBQUFBLE1BQXhDQyxLQUF3QyxRQUF4Q0EsS0FBd0M7QUFBQSxNQUFqQ0MsV0FBaUMsUUFBakNBLFdBQWlDO0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUN4RSxTQUNJO0FBQUssYUFBUyxFQUFFQyxxRUFBTSxDQUFDQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLTixXQUFMLENBREksRUFHSjtBQUFNLGFBQVMsRUFBRUsscUVBQU0sQ0FBQ0UsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4QjtBQUFHLGFBQVMsRUFBRUYscUVBQU0sQ0FBQ0osS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2QkEsS0FBN0IsQ0FBOUIsT0FBc0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJQyxXQUFKLENBQXRFLENBSEksRUFJSjtBQUFNLGFBQVMsRUFBRUcscUVBQU0sQ0FBQ0csSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNTCxJQUFJLEdBQUc7QUFBRyxRQUFJLEVBQUVBLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFlO0FBQUssYUFBUyxFQUFFRSxxRUFBTSxDQUFDSSxNQUF2QjtBQUErQixPQUFHLEVBQUMsYUFBbkM7QUFBaUQsT0FBRyxFQUFDLEVBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBZixDQUFILEdBQWtGLEVBRDVGLEVBRU1MLE9BQU8sR0FBRztBQUFHLFFBQUksRUFBRUEsT0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtCO0FBQUssYUFBUyxFQUFFQyxxRUFBTSxDQUFDSSxNQUF2QjtBQUErQixPQUFHLEVBQUMsV0FBbkM7QUFBK0MsT0FBRyxFQUFDLEVBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBbEIsQ0FBSCxHQUFtRixFQUZoRyxDQUpJLENBREo7QUFXSCxDQVpEOztLQUFNVixXO0FBY1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLjlkOTEyYzkzMzMyMTk4YjU2NzIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3Byb2plY3RjYXJkLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBQcm9qZWN0Q2FyZCA9ICh7IHByb2plY3ROYW1lLCBsYWJlbCwgZGVzY3JpcHRpb24sIGNvZGUsIGxpdmVBcHAgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgPGgyPntwcm9qZWN0TmFtZX08L2gyPlxyXG5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmluZm99PjxwIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT57bGFiZWx9PC9wPiA8cD57ZGVzY3JpcHRpb259PC9wPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmZsZXh9PlxyXG4gICAgICAgIHsgY29kZSA/IDxhIGhyZWY9e2NvZGV9PjxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsfSBzcmM9XCIvZ2l0aHViLnBuZ1wiIGFsdD1cIlwiLz48L2E+IDogXCJcIiB9XHJcbiAgICAgICAgeyBsaXZlQXBwID8gPGEgaHJlZj17bGl2ZUFwcH0+PGltZyBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWx9IHNyYz1cIi9saXZlLnBuZ1wiIGFsdD1cIlwiLz48L2E+IDogXCJcIiB9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q2FyZCJdLCJzb3VyY2VSb290IjoiIn0=