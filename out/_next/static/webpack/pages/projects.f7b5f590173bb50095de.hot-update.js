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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanN4Il0sIm5hbWVzIjpbIlByb2plY3RzIiwidXNlU3RhdGUiLCJNb2RlIiwic2V0TW9kZSIsImNvbG9yVGV4dCIsInNldENvbG9yVGV4dCIsInRvZ2dsZUNvbG9yIiwic3R5bGVzIiwiaG9tZUxpZ2h0Qm9keSIsImhvbWVEYXJrQm9keSIsImhlYWRlciIsIm5hbWUiLCJoZWFkZXJMaW5rcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsTUFBRCxDQURkO0FBQUEsTUFDWEMsSUFEVztBQUFBLE1BQ0xDLE9BREs7O0FBQUEsbUJBRVlGLHNEQUFRLENBQUMsTUFBRCxDQUZwQjtBQUFBLE1BRWZHLFNBRmU7QUFBQSxNQUVKQyxZQUZJOztBQUd0QixXQUFTQyxXQUFULEdBQXVCO0FBQ2hCLFFBQUlKLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQzNCQyxhQUFPLENBQUMsTUFBRCxDQUFQO0FBQ0FFLGtCQUFZLENBQUMsTUFBRCxDQUFaO0FBQ00sS0FIRCxNQUdPLElBQUlILElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ2pDQyxhQUFPLENBQUMsT0FBRCxDQUFQO0FBQ1NFLGtCQUFZLENBQUMsT0FBRCxDQUFaO0FBQ0g7QUFDSjs7QUFFRCxTQUNJO0FBQUssYUFBUyxFQUFJSCxJQUFJLEtBQUssT0FBVixHQUFzQkssa0VBQU0sQ0FBQ0MsYUFBN0IsR0FBK0NELGtFQUFNLENBQUNFLFlBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLGFBQVMsRUFBRUYsa0VBQU0sQ0FBQ0csTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNULE1BQUMsZ0RBQUQ7QUFBTSxR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YSxlQUFXLEVBQUMsYUFBekI7QUFBdUMsZUFBVyxFQUFDLDREQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJRLEVBb0JSLE1BQUMsZ0VBQUQ7QUFBYSxlQUFXLEVBQUMsZ0NBQXpCO0FBQTBELGVBQVcsRUFBQyxxREFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBCUSxFQXFCUixNQUFDLGdFQUFEO0FBQWEsZUFBVyxFQUFDLGNBQXpCO0FBQXdDLGVBQVcsRUFBQyxpRUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCUSxFQXNCUixNQUFDLGdFQUFEO0FBQWEsZUFBVyxFQUFDLHVCQUF6QjtBQUFpRCxlQUFXLEVBQUMsNkVBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QlEsRUF1QlIsTUFBQyxnRUFBRDtBQUFhLGVBQVcsRUFBQyxrQkFBekI7QUFBNEMsZUFBVyxFQUFDLDRCQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJRLEVBd0JSLE1BQUMsZ0VBQUQ7QUFBYSxlQUFXLEVBQUMsV0FBekI7QUFBcUMsZUFBVyxFQUFDLDRDQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeEJRLENBekJKLENBREo7QUFzREgsQ0FuRUQ7O0dBQU1KLFE7O0tBQUFBLFE7QUFxRVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLmY3YjVmNTkwMTczYmI1MDA5NWRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IENvbG9yTW9kZSBmcm9tICcuLi9jb21wb25lbnRzL0NvbG9yTW9kZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3Byb2plY3RzLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvamVjdHNDYXJkXCJcclxuXHJcblxyXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0ICBbTW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZShcIkRhcmtcIik7XHJcblx0Y29uc3QgW2NvbG9yVGV4dCwgc2V0Q29sb3JUZXh0XSA9IHVzZVN0YXRlKFwiRGFya1wiKVxyXG5cdGZ1bmN0aW9uIHRvZ2dsZUNvbG9yKCkge1xyXG4gICAgICAgIGlmIChNb2RlID09PSBcIkxpZ2h0XCIpIHtcclxuXHRcdFx0c2V0TW9kZShcIkRhcmtcIilcclxuXHRcdFx0c2V0Q29sb3JUZXh0KFwiRGFya1wiKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoTW9kZSA9PT0gXCJEYXJrXCIpIHtcclxuXHRcdFx0c2V0TW9kZShcIkxpZ2h0XCIpXHJcbiAgICAgICAgICAgIHNldENvbG9yVGV4dChcIkxpZ2h0XCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgKE1vZGUgPT09IFwiTGlnaHRcIikgPyAoc3R5bGVzLmhvbWVMaWdodEJvZHkpIDogKHN0eWxlcy5ob21lRGFya0JvZHkpIH0+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuXHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cclxuXHRcdFx0XHQ8YT48aDIgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+SkE8L2gyPjwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckxpbmtzfT5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxyXG5cdFx0XHRcdFx0PGEgPkJsb2c8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxyXG5cdFx0XHRcdFx0PGEgPlByb2plY3RzPC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuXHRcdFx0XHRcdDxhID5BYm91dDwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PENvbG9yTW9kZVxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gdG9nZ2xlQ29sb3IoKX1cclxuXHRcdFx0XHRcdHZhbHVlPXtjb2xvclRleHR9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICA8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJTbmlwcGV0IFNraVwiIGxhYmVsPVwiQXQgV29ya1wiIGRlc2NyaXB0aW9uPVwiQSBjb2RlIHNuaXBwZXQgc2hhcmluZyBhcHAuXCIgY29kZT1cImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NpYXNBdXJlbC9Ta2lcIiAvPlxyXG5cdFx0XHQgICA8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJQaWthXCIgbGFiZWw9XCJBdCBXb3JrXCIgZGVzY3JpcHRpb249XCJBIFVSTCBzaG9ydGVuaW5nIGFwcC5cIi8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiR3JhcGhRTCBCb29rIEFQSVwiIGRlc2NyaXB0aW9uPVwiQSBzaW1wbGUgR3JhcGhRTCBCb29rcyBBUEkuXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJQYWludCBBcHBcIiBkZXNjcmlwdGlvbj1cIkEgbWluaW1hbGlzdGljIGJhc2ljIHBhaW50aW5nIGFwcC5cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIlJHQiBUbyBIZXggQ29sb3IgQ29udmVydGVyXCIgZGVzY3JpcHRpb249XCJBbiBhcCB0aGF0IGNhbiBjb252ZXJ0IFJHQiBjb2xvciBjb2RlcyB0byBoZXhhZGVjaW1hbCBjb2xvciBjb2Rlcy4gU3VwcG9ydHMgbXVsdGlwbGUgY29udmVyc2lvbnMuXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJQYWxpbmRyb21lIENoZWNrZXJcIiBkZXNjcmlwdGlvbj1cIkEgc2ltcGxlIHB5dGhvbiBzY3JpcHQgdGhhdCBjYW4gZGV0ZXJtaW5lIGlmIGEgd29yZCBpcyBhIHBhbGluZHJvbWUgb3Igbm90LlwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiU3ViZG9tYWluIFNjYW5uZXJcIiBkZXNjcmlwdGlvbj1cIkEgcHl0aG9uIGFwcCB0aGF0IGNhbiBkZXRlcm1pbmUgYWxsIHRoZSBzdWJkb21haW5zIG9uIGEgcm9vdCBkb21haW4uIFVzZXMgQnJ1dGVGb3JjZSBtZXRob2QuXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJTdGVnYW5vZ3JhcGh5IFByb2dyYW1cIiBkZXNjcmlwdGlvbj1cIkEgc2ltcGxlIHB5dGhvbiBwcm9ncmFtIHRvIGVuY29kZSBhbmQgZGVjb2RlIHRleHQgaW4gaW1nYWVzLlwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiUm9jayBQYXBlciBTY2lzc29yc1wiIGRlc2NyaXB0aW9uPVwiQSByb2NrIHBhcGVyIHNjaXNzb3JzIENMSSBnYW1lIGluIHB5dGhvbi5cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIk5leHRKU1wiIGRlc2NyaXB0aW9uPVwiQSBtaW5pbWFsIE5leHRKUyBtYXJrZG93biBibG9nIHRlbXBsYXRlLlwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiRmFjZSBEZXRlY3Rpb25cIiBkZXNjcmlwdGlvbj1cIkEgZmFjZSBkZXRlY3Rpb24gcHJvZ3JhbSB1c2luZyBPcGVuQ1YgYW5kIGEgcHJldHJhaW5lZCBmYWNlIGNsYXNzaWZpZXIuXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJDb3ZpZDE5IEluZm8gQXBwXCIgZGVzY3JpcHRpb249XCJBIHNpbXBsZSB3ZWIgYXBwIHRvIHByb3ZpZGUgQ292aWQxOSBJbmZvIGluIENhbWVyb29uIGFuZCB0aGUgd2hvbGUgd29ybGQuXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJMb2NhdGlvbiBkZXRlY3RvclwiIGRlc2NyaXB0aW9uPVwiQSBzaW1wbGUgd2ViIGFwcCB0aGF0IHNob3dzIHlvdSB5b3VyIGN1cnJlbnQgbG9jYXRpb24gdGhyb3VnaCB0aGUgd2ViIGxvYWN0aW9uIEFQSS5cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIlFSIGNvZGUgZW5jcnlwdGlvbiBhbmQgZGVjcnlwdGlvblwiIGRlc2NyaXB0aW9uPVwiQSBzaW1wbGUgcHl0aG9uIHByb2dyYW0gdG8gZ2VtZXJhdGUgYW5kIGRlY29kZSBRUiBjb2Rlcy5cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIkNvbG9yIGdlbmVyYXRvclwiIGRlc2NyaXB0aW9uPVwiQSB3ZWIgYXBwIHRoYXQgZ2VuZXJhdGVzIGNvbG9ycyBpbiBSR0IgZm9yIHlvdS5cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIkRldmljZSBEZXRlY3Rpb25cIiBkZXNjcmlwdGlvbj1cIkEgd2ViIEFQSSB0aGF0IGRldGVjdHMgdGhlIGRldmljZS9zeXN0ZW0gdGhlIGNsaWVudCBydW5zLlwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiTmVnYSBDYWxjdWxhdG9yXCIgZGVzY3JpcHRpb249XCJUaGUgZmlyc3QgYmlnIHByb2dyYW0gaSBtYWRlIGFzIGEgYmVnaW5uZXIgaW4gUHl0aG9uIFhELlwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiUGFzc3dvcmQgR2VuZXJhdG9yXCIgZGVzY3JpcHRpb249XCJBIHBhc3N3b3JkIGdlbmVyYXRvciBhcHAuXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJQZWFzeSBOb3Rlc1wiIGRlc2NyaXB0aW9uPVwiQW4gYXBwIHRoYXQgaGVscHMgeW91IHRha2Ugbm90ZXMgYW5kIGVuY29kZSB0aGVtIGluIGEgVVJMLlwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiQW4gaW1hZ2UgY2xhc3NpZmllciBUZW5zb3JmbG93XCIgZGVzY3JpcHRpb249XCJBIHRlbnNvcmZsb3cgbW9kZWwgdG8gY2xlc3NmaWZ5IGltYWdlcyBhbmQgbnVtYmVycy5cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIldvcmQgQ291bnRlclwiIGRlc2NyaXB0aW9uPVwiQSBzaW1wbGUgcHl0aG9uIHByb2dyYW0gdG8gY291bnQgdGhlIG51bWJlciBvZiB3b3JkcyBpbiBhIHRleHQuXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJ3b3JkIHRvIFBERiBjb252ZXJ0ZXJcIiBkZXNjcmlwdGlvbj1cIkEgcHl0aG9uIHByb2dyYW0gdG8gY29udmVydCB3b3JkIGRvY3VtZW50cyBpbnRvIFBERiBkb2N1bWVudHMgdXNpbmcgYW4gQVBJLlwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiR3JhcGhRTCBCb29rIEFQSVwiIGRlc2NyaXB0aW9uPVwiQSBzaW1wbGUgR3JhcGhRTCBCb29rcyBBUElcIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIk5vdGVzIEFQSVwiIGRlc2NyaXB0aW9uPVwiQSBzaW1wbGUgbm90ZXMgQVBJIHdpdGggTm9kZUpTIGFuZCBNb25nb0RCXCIgLz5cdCAgXHJcblx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzIl0sInNvdXJjZVJvb3QiOiIifQ==