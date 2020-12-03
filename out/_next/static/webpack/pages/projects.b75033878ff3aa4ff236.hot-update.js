webpackHotUpdate_N_E("pages/projects",{

/***/ "./pages/projects.jsx":
/*!****************************!*\
  !*** ./pages/projects.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ColorMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ColorMode */ "./components/ColorMode.jsx");
/* harmony import */ var _styles_projects_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/projects.module.css */ "./styles/projects.module.css");
/* harmony import */ var _styles_projects_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_projects_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_projectsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/projectsCard */ "./components/projectsCard.jsx");
var _this = undefined,
    _jsxFileName = "C:\\josias\\josiasaureldev\\pages\\projects.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Projects = function Projects() {
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

  return __jsx("div", {
    className: Mode === "Light" ? _styles_projects_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.homeLightBody : _styles_projects_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.homeDarkBody,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: _styles_projects_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: _styles_projects_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 8
    }
  }, "JA"))), __jsx("span", {
    className: _styles_projects_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerLinks,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, "Blog")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, "Projects")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, "About"))), __jsx(_components_ColorMode__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Snippet Ski",
    label: "At Work",
    description: "A code snippet sharing app.",
    code: "https://github.com/JosiasAurel/Ski",
    liveApp: "https://snippet-ski.herokuapp.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 16
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Pika",
    label: "At Work",
    description: "A URL shortening app.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "GraphQL Book API",
    description: "A simple GraphQL Books API.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Paint App",
    description: "A minimalistic basic painting app.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "RGB To Hex Color Converter",
    description: "An ap that can convert RGB color codes to hexadecimal color codes. Supports multiple conversions.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Palindrome Checker",
    description: "A simple python script that can determine if a word is a palindrome or not.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Subdomain Scanner",
    description: "A python app that can determine all the subdomains on a root domain. Uses BruteForce method.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Steganography Program",
    description: "A simple python program to encode and decode text in imgaes.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Rock Paper Scissors",
    description: "A rock paper scissors CLI game in python.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "NextJS",
    description: "A minimal NextJS markdown blog template.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Face Detection",
    description: "A face detection program using OpenCV and a pretrained face classifier.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Covid19 Info App",
    description: "A simple web app to provide Covid19 Info in Cameroon and the whole world.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Location detector",
    description: "A simple web app that shows you your current location through the web loaction API.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "QR code encryption and decryption",
    description: "A simple python program to gemerate and decode QR codes.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Color generator",
    description: "A web app that generates colors in RGB for you.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Device Detection",
    description: "A web API that detects the device/system the client runs.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Nega Calculator",
    description: "The first big program i made as a beginner in Python XD.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Password Generator",
    description: "A password generator app.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Peasy Notes",
    description: "An app that helps you take notes and encode them in a URL.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "An image classifier Tensorflow",
    description: "A tensorflow model to clessfify images and numbers.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Word Counter",
    description: "A simple python program to count the number of words in a text.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "word to PDF converter",
    description: "A python program to convert word documents into PDF documents using an API.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "GraphQL Book API",
    description: "A simple GraphQL Books API",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Notes API",
    description: "A simple notes API with NodeJS and MongoDB",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  })));
};

_s(Projects, "MVwvnkGb7BZxXm4wt97cxB3mKlg=");

_c = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

$RefreshReg$(_c, "Projects");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanN4Il0sIm5hbWVzIjpbIlByb2plY3RzIiwidXNlU3RhdGUiLCJNb2RlIiwic2V0TW9kZSIsImNvbG9yVGV4dCIsInNldENvbG9yVGV4dCIsInRvZ2dsZUNvbG9yIiwic3R5bGVzIiwiaG9tZUxpZ2h0Qm9keSIsImhvbWVEYXJrQm9keSIsImhlYWRlciIsIm5hbWUiLCJoZWFkZXJMaW5rcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsTUFBRCxDQURkO0FBQUEsTUFDWEMsSUFEVztBQUFBLE1BQ0xDLE9BREs7O0FBQUEsbUJBRVlGLHNEQUFRLENBQUMsTUFBRCxDQUZwQjtBQUFBLE1BRWZHLFNBRmU7QUFBQSxNQUVKQyxZQUZJOztBQUd0QixXQUFTQyxXQUFULEdBQXVCO0FBQ2hCLFFBQUlKLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQzNCQyxhQUFPLENBQUMsTUFBRCxDQUFQO0FBQ0FFLGtCQUFZLENBQUMsTUFBRCxDQUFaO0FBQ00sS0FIRCxNQUdPLElBQUlILElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ2pDQyxhQUFPLENBQUMsT0FBRCxDQUFQO0FBQ1NFLGtCQUFZLENBQUMsT0FBRCxDQUFaO0FBQ0g7QUFDSjs7QUFFRCxTQUNJO0FBQUssYUFBUyxFQUFJSCxJQUFJLEtBQUssT0FBVixHQUFzQkssa0VBQU0sQ0FBQ0MsYUFBN0IsR0FBK0NELGtFQUFNLENBQUNFLFlBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLGFBQVMsRUFBRUYsa0VBQU0sQ0FBQ0csTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNULE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQUksYUFBUyxFQUFFSCxrRUFBTSxDQUFDSSxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUgsQ0FERCxDQURTLEVBS1I7QUFBTSxhQUFTLEVBQUVKLGtFQUFNLENBQUNLLFdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxDQURELEVBS0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLENBTEQsRUFTQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxDQVRELENBTFEsRUFrQlIsTUFBQyw2REFBRDtBQUNDLFdBQU8sRUFBRTtBQUFBLGFBQU1OLFdBQVcsRUFBakI7QUFBQSxLQURWO0FBRUMsU0FBSyxFQUFFRixTQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQlEsQ0FESixFQXlCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csTUFBQyxnRUFBRDtBQUFhLGVBQVcsRUFBQyxhQUF6QjtBQUF1QyxTQUFLLEVBQUMsU0FBN0M7QUFBdUQsZUFBVyxFQUFDLDZCQUFuRTtBQUFpRyxRQUFJLEVBQUMsb0NBQXRHO0FBQTJJLFdBQU8sRUFBQyxvQ0FBbko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURILEVBRU4sTUFBQyxnRUFBRDtBQUFhLGVBQVcsRUFBQyxNQUF6QjtBQUFnQyxTQUFLLEVBQUMsU0FBdEM7QUFBZ0QsZUFBVyxFQUFDLHVCQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRk0sRUFHUixNQUFDLGdFQUFEO0FBQWEsZUFBVyxFQUFDLGtCQUF6QjtBQUE0QyxlQUFXLEVBQUMsNkJBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIUSxFQUlSLE1BQUMsZ0VBQUQ7QUFBYSxlQUFXLEVBQUMsV0FBekI7QUFBcUMsZUFBVyxFQUFDLG9DQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSlEsRUFLUixNQUFDLGdFQUFEO0FBQWEsZUFBVyxFQUFDLDRCQUF6QjtBQUFzRCxlQUFXLEVBQUMsbUdBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMUSxFQU1SLE1BQUMsZ0VBQUQ7QUFBYSxlQUFXLEVBQUMsb0JBQXpCO0FBQThDLGVBQVcsRUFBQyw2RUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5RLEVBT1IsTUFBQyxnRUFBRDtBQUFhLGVBQVcsRUFBQyxtQkFBekI7QUFBNkMsZUFBVyxFQUFDLDhGQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUFEsRUFRUixNQUFDLGdFQUFEO0FBQWEsZUFBVyxFQUFDLHVCQUF6QjtBQUFpRCxlQUFXLEVBQUMsOERBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSUSxFQVNSLE1BQUMsZ0VBQUQ7QUFBYSxlQUFXLEVBQUMscUJBQXpCO0FBQStDLGVBQVcsRUFBQywyQ0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRRLEVBVVIsTUFBQyxnRUFBRDtBQUFhLGVBQVcsRUFBQyxRQUF6QjtBQUFrQyxlQUFXLEVBQUMsMENBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWUSxFQVdSLE1BQUMsZ0VBQUQ7QUFBYSxlQUFXLEVBQUMsZ0JBQXpCO0FBQTBDLGVBQVcsRUFBQyx5RUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhRLEVBWVIsTUFBQyxnRUFBRDtBQUFhLGVBQVcsRUFBQyxrQkFBekI7QUFBNEMsZUFBVyxFQUFDLDJFQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWlEsRUFhUixNQUFDLGdFQUFEO0FBQWEsZUFBVyxFQUFDLG1CQUF6QjtBQUE2QyxlQUFXLEVBQUMscUZBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiUSxFQWNSLE1BQUMsZ0VBQUQ7QUFBYSxlQUFXLEVBQUMsbUNBQXpCO0FBQTZELGVBQVcsRUFBQywwREFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRRLEVBZVIsTUFBQyxnRUFBRDtBQUFhLGVBQVcsRUFBQyxpQkFBekI7QUFBMkMsZUFBVyxFQUFDLGlEQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZlEsRUFnQlIsTUFBQyxnRUFBRDtBQUFhLGVBQVcsRUFBQyxrQkFBekI7QUFBNEMsZUFBVyxFQUFDLDJEQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJRLEVBaUJSLE1BQUMsZ0VBQUQ7QUFBYSxlQUFXLEVBQUMsaUJBQXpCO0FBQTJDLGVBQVcsRUFBQywwREFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCUSxFQWtCUixNQUFDLGdFQUFEO0FBQWEsZUFBVyxFQUFDLG9CQUF6QjtBQUE4QyxlQUFXLEVBQUMsMkJBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQlEsRUFtQlIsTUFBQyxnRUFBRDtBQUFhLGVBQVcsRUFBQyxhQUF6QjtBQUF1QyxlQUFXLEVBQUMsNERBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQlEsRUFvQlIsTUFBQyxnRUFBRDtBQUFhLGVBQVcsRUFBQyxnQ0FBekI7QUFBMEQsZUFBVyxFQUFDLHFEQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJRLEVBcUJSLE1BQUMsZ0VBQUQ7QUFBYSxlQUFXLEVBQUMsY0FBekI7QUFBd0MsZUFBVyxFQUFDLGlFQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJRLEVBc0JSLE1BQUMsZ0VBQUQ7QUFBYSxlQUFXLEVBQUMsdUJBQXpCO0FBQWlELGVBQVcsRUFBQyw2RUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCUSxFQXVCUixNQUFDLGdFQUFEO0FBQWEsZUFBVyxFQUFDLGtCQUF6QjtBQUE0QyxlQUFXLEVBQUMsNEJBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QlEsRUF3QlIsTUFBQyxnRUFBRDtBQUFhLGVBQVcsRUFBQyxXQUF6QjtBQUFxQyxlQUFXLEVBQUMsNENBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4QlEsQ0F6QkosQ0FESjtBQXNESCxDQW5FRDs7R0FBTUosUTs7S0FBQUEsUTtBQXFFU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMuYjc1MDMzODc4ZmYzYWE0ZmYyMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQ29sb3JNb2RlIGZyb20gJy4uL2NvbXBvbmVudHMvQ29sb3JNb2RlJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcHJvamVjdHMubW9kdWxlLmNzc1wiXHJcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9qZWN0c0NhcmRcIlxyXG5cclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgIFtNb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKFwiRGFya1wiKTtcclxuXHRjb25zdCBbY29sb3JUZXh0LCBzZXRDb2xvclRleHRdID0gdXNlU3RhdGUoXCJEYXJrXCIpXHJcblx0ZnVuY3Rpb24gdG9nZ2xlQ29sb3IoKSB7XHJcbiAgICAgICAgaWYgKE1vZGUgPT09IFwiTGlnaHRcIikge1xyXG5cdFx0XHRzZXRNb2RlKFwiRGFya1wiKVxyXG5cdFx0XHRzZXRDb2xvclRleHQoXCJEYXJrXCIpXHJcbiAgICAgICAgfSBlbHNlIGlmIChNb2RlID09PSBcIkRhcmtcIikge1xyXG5cdFx0XHRzZXRNb2RlKFwiTGlnaHRcIilcclxuICAgICAgICAgICAgc2V0Q29sb3JUZXh0KFwiTGlnaHRcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAoTW9kZSA9PT0gXCJMaWdodFwiKSA/IChzdHlsZXMuaG9tZUxpZ2h0Qm9keSkgOiAoc3R5bGVzLmhvbWVEYXJrQm9keSkgfT5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG5cdFx0XHQ8TGluayBocmVmPVwiL1wiPlxyXG5cdFx0XHRcdDxhPjxoMiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5KQTwvaDI+PC9hPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyTGlua3N9PlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9ibG9nXCI+XHJcblx0XHRcdFx0XHQ8YSA+QmxvZzwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XHJcblx0XHRcdFx0XHQ8YSA+UHJvamVjdHM8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG5cdFx0XHRcdFx0PGEgPkFib3V0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8Q29sb3JNb2RlXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0b2dnbGVDb2xvcigpfVxyXG5cdFx0XHRcdFx0dmFsdWU9e2NvbG9yVGV4dH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIlNuaXBwZXQgU2tpXCIgbGFiZWw9XCJBdCBXb3JrXCIgZGVzY3JpcHRpb249XCJBIGNvZGUgc25pcHBldCBzaGFyaW5nIGFwcC5cIiBjb2RlPVwiaHR0cHM6Ly9naXRodWIuY29tL0pvc2lhc0F1cmVsL1NraVwiIGxpdmVBcHA9XCJodHRwczovL3NuaXBwZXQtc2tpLmhlcm9rdWFwcC5jb20vXCIgLz5cclxuXHRcdFx0ICAgPFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiUGlrYVwiIGxhYmVsPVwiQXQgV29ya1wiIGRlc2NyaXB0aW9uPVwiQSBVUkwgc2hvcnRlbmluZyBhcHAuXCIvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIkdyYXBoUUwgQm9vayBBUElcIiBkZXNjcmlwdGlvbj1cIkEgc2ltcGxlIEdyYXBoUUwgQm9va3MgQVBJLlwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiUGFpbnQgQXBwXCIgZGVzY3JpcHRpb249XCJBIG1pbmltYWxpc3RpYyBiYXNpYyBwYWludGluZyBhcHAuXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJSR0IgVG8gSGV4IENvbG9yIENvbnZlcnRlclwiIGRlc2NyaXB0aW9uPVwiQW4gYXAgdGhhdCBjYW4gY29udmVydCBSR0IgY29sb3IgY29kZXMgdG8gaGV4YWRlY2ltYWwgY29sb3IgY29kZXMuIFN1cHBvcnRzIG11bHRpcGxlIGNvbnZlcnNpb25zLlwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiUGFsaW5kcm9tZSBDaGVja2VyXCIgZGVzY3JpcHRpb249XCJBIHNpbXBsZSBweXRob24gc2NyaXB0IHRoYXQgY2FuIGRldGVybWluZSBpZiBhIHdvcmQgaXMgYSBwYWxpbmRyb21lIG9yIG5vdC5cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIlN1YmRvbWFpbiBTY2FubmVyXCIgZGVzY3JpcHRpb249XCJBIHB5dGhvbiBhcHAgdGhhdCBjYW4gZGV0ZXJtaW5lIGFsbCB0aGUgc3ViZG9tYWlucyBvbiBhIHJvb3QgZG9tYWluLiBVc2VzIEJydXRlRm9yY2UgbWV0aG9kLlwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiU3RlZ2Fub2dyYXBoeSBQcm9ncmFtXCIgZGVzY3JpcHRpb249XCJBIHNpbXBsZSBweXRob24gcHJvZ3JhbSB0byBlbmNvZGUgYW5kIGRlY29kZSB0ZXh0IGluIGltZ2Flcy5cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIlJvY2sgUGFwZXIgU2Npc3NvcnNcIiBkZXNjcmlwdGlvbj1cIkEgcm9jayBwYXBlciBzY2lzc29ycyBDTEkgZ2FtZSBpbiBweXRob24uXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJOZXh0SlNcIiBkZXNjcmlwdGlvbj1cIkEgbWluaW1hbCBOZXh0SlMgbWFya2Rvd24gYmxvZyB0ZW1wbGF0ZS5cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIkZhY2UgRGV0ZWN0aW9uXCIgZGVzY3JpcHRpb249XCJBIGZhY2UgZGV0ZWN0aW9uIHByb2dyYW0gdXNpbmcgT3BlbkNWIGFuZCBhIHByZXRyYWluZWQgZmFjZSBjbGFzc2lmaWVyLlwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiQ292aWQxOSBJbmZvIEFwcFwiIGRlc2NyaXB0aW9uPVwiQSBzaW1wbGUgd2ViIGFwcCB0byBwcm92aWRlIENvdmlkMTkgSW5mbyBpbiBDYW1lcm9vbiBhbmQgdGhlIHdob2xlIHdvcmxkLlwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiTG9jYXRpb24gZGV0ZWN0b3JcIiBkZXNjcmlwdGlvbj1cIkEgc2ltcGxlIHdlYiBhcHAgdGhhdCBzaG93cyB5b3UgeW91ciBjdXJyZW50IGxvY2F0aW9uIHRocm91Z2ggdGhlIHdlYiBsb2FjdGlvbiBBUEkuXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJRUiBjb2RlIGVuY3J5cHRpb24gYW5kIGRlY3J5cHRpb25cIiBkZXNjcmlwdGlvbj1cIkEgc2ltcGxlIHB5dGhvbiBwcm9ncmFtIHRvIGdlbWVyYXRlIGFuZCBkZWNvZGUgUVIgY29kZXMuXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJDb2xvciBnZW5lcmF0b3JcIiBkZXNjcmlwdGlvbj1cIkEgd2ViIGFwcCB0aGF0IGdlbmVyYXRlcyBjb2xvcnMgaW4gUkdCIGZvciB5b3UuXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJEZXZpY2UgRGV0ZWN0aW9uXCIgZGVzY3JpcHRpb249XCJBIHdlYiBBUEkgdGhhdCBkZXRlY3RzIHRoZSBkZXZpY2Uvc3lzdGVtIHRoZSBjbGllbnQgcnVucy5cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIk5lZ2EgQ2FsY3VsYXRvclwiIGRlc2NyaXB0aW9uPVwiVGhlIGZpcnN0IGJpZyBwcm9ncmFtIGkgbWFkZSBhcyBhIGJlZ2lubmVyIGluIFB5dGhvbiBYRC5cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIlBhc3N3b3JkIEdlbmVyYXRvclwiIGRlc2NyaXB0aW9uPVwiQSBwYXNzd29yZCBnZW5lcmF0b3IgYXBwLlwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiUGVhc3kgTm90ZXNcIiBkZXNjcmlwdGlvbj1cIkFuIGFwcCB0aGF0IGhlbHBzIHlvdSB0YWtlIG5vdGVzIGFuZCBlbmNvZGUgdGhlbSBpbiBhIFVSTC5cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIkFuIGltYWdlIGNsYXNzaWZpZXIgVGVuc29yZmxvd1wiIGRlc2NyaXB0aW9uPVwiQSB0ZW5zb3JmbG93IG1vZGVsIHRvIGNsZXNzZmlmeSBpbWFnZXMgYW5kIG51bWJlcnMuXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJXb3JkIENvdW50ZXJcIiBkZXNjcmlwdGlvbj1cIkEgc2ltcGxlIHB5dGhvbiBwcm9ncmFtIHRvIGNvdW50IHRoZSBudW1iZXIgb2Ygd29yZHMgaW4gYSB0ZXh0LlwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwid29yZCB0byBQREYgY29udmVydGVyXCIgZGVzY3JpcHRpb249XCJBIHB5dGhvbiBwcm9ncmFtIHRvIGNvbnZlcnQgd29yZCBkb2N1bWVudHMgaW50byBQREYgZG9jdW1lbnRzIHVzaW5nIGFuIEFQSS5cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIkdyYXBoUUwgQm9vayBBUElcIiBkZXNjcmlwdGlvbj1cIkEgc2ltcGxlIEdyYXBoUUwgQm9va3MgQVBJXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJOb3RlcyBBUElcIiBkZXNjcmlwdGlvbj1cIkEgc2ltcGxlIG5vdGVzIEFQSSB3aXRoIE5vZGVKUyBhbmQgTW9uZ29EQlwiIC8+XHQgIFxyXG5cdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cyJdLCJzb3VyY2VSb290IjoiIn0=