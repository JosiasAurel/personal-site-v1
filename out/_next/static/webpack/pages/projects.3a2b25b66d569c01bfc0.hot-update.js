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
  })) : "", __jsx("a", {
    href: liveApp,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _styles_projectcard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.social,
    src: "/live.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 27
    }
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0c0NhcmQuanN4Il0sIm5hbWVzIjpbIlByb2plY3RDYXJkIiwicHJvamVjdE5hbWUiLCJsYWJlbCIsImRlc2NyaXB0aW9uIiwiY29kZSIsImxpdmVBcHAiLCJzdHlsZXMiLCJjYXJkIiwiaW5mbyIsImZsZXgiLCJzb2NpYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXdEO0FBQUEsTUFBckRDLFdBQXFELFFBQXJEQSxXQUFxRDtBQUFBLE1BQXhDQyxLQUF3QyxRQUF4Q0EsS0FBd0M7QUFBQSxNQUFqQ0MsV0FBaUMsUUFBakNBLFdBQWlDO0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUN4RSxTQUNJO0FBQUssYUFBUyxFQUFFQyxxRUFBTSxDQUFDQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLTixXQUFMLENBREksRUFHSjtBQUFNLGFBQVMsRUFBRUsscUVBQU0sQ0FBQ0UsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4QjtBQUFHLGFBQVMsRUFBRUYscUVBQU0sQ0FBQ0osS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2QkEsS0FBN0IsQ0FBOUIsT0FBc0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJQyxXQUFKLENBQXRFLENBSEksRUFJSjtBQUFNLGFBQVMsRUFBRUcscUVBQU0sQ0FBQ0csSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNTCxJQUFJLEdBQUc7QUFBRyxRQUFJLEVBQUVBLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFlO0FBQUssYUFBUyxFQUFFRSxxRUFBTSxDQUFDSSxNQUF2QjtBQUErQixPQUFHLEVBQUMsYUFBbkM7QUFBaUQsT0FBRyxFQUFDLEVBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBZixDQUFILEdBQWtGLEVBRDVGLEVBRUk7QUFBRyxRQUFJLEVBQUVMLE9BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQjtBQUFLLGFBQVMsRUFBRUMscUVBQU0sQ0FBQ0ksTUFBdkI7QUFBK0IsT0FBRyxFQUFDLFdBQW5DO0FBQStDLE9BQUcsRUFBQyxFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWxCLENBRkosQ0FKSSxDQURKO0FBV0gsQ0FaRDs7S0FBTVYsVztBQWNTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy4zYTJiMjViNjZkNTY5YzAxYmZjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9wcm9qZWN0Y2FyZC5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUHJvamVjdENhcmQgPSAoeyBwcm9qZWN0TmFtZSwgbGFiZWwsIGRlc2NyaXB0aW9uLCBjb2RlLCBsaXZlQXBwIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgIDxoMj57cHJvamVjdE5hbWV9PC9oMj5cclxuXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT48cCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+e2xhYmVsfTwvcD4gPHA+e2Rlc2NyaXB0aW9ufTwvcD48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4fT5cclxuICAgICAgICB7IGNvZGUgPyA8YSBocmVmPXtjb2RlfT48aW1nIGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbH0gc3JjPVwiL2dpdGh1Yi5wbmdcIiBhbHQ9XCJcIi8+PC9hPiA6IFwiXCIgfVxyXG4gICAgICAgIDxhIGhyZWY9e2xpdmVBcHB9PjxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsfSBzcmM9XCIvbGl2ZS5wbmdcIiBhbHQ9XCJcIi8+PC9hPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQiXSwic291cmNlUm9vdCI6IiJ9