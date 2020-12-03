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
    code: "https://github.com/JosiasAurel/pika",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "GraphQL Book API",
    description: "A simple GraphQL Books API.",
    code: "https://github.com/JosiasAurel/GraphQL-book-api",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Paint App",
    description: "A minimalistic basic painting app.",
    code: "https://github.com/JosiasAurel/paint-app",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "RGB To Hex Color Converter",
    description: "An ap that can convert RGB color codes to hexadecimal color codes. Supports multiple conversions.",
    code: "https://github.com/JosiasAurel/RGB-to-hex-converter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Palindrome Checker",
    description: "A simple python script that can determine if a word is a palindrome or not.",
    code: "https://github.com/JosiasAurel/dummy-project/blob/master/palindrome_checker.py",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Subdomain Scanner",
    description: "A python app that can determine all the subdomains on a root domain. Uses BruteForce method.",
    code: "https://github.com/JosiasAurel/dummy-project/tree/master/subdomain-s-scanner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Steganography Program",
    description: "A simple python program to encode and decode text in images.",
    code: "https://github.com/JosiasAurel/dummy-project/tree/master/steganography",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Rock Paper Scissors",
    description: "A rock paper scissors CLI game in python.",
    code: "https://github.com/JosiasAurel/dummy-project/tree/master/rock-paper-scissors",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "NextJS",
    description: "A minimal NextJS markdown blog template.",
    code: "https://github.com/JosiasAurel/dummy-project/tree/master/nextjs-markdown-blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Face Detection",
    description: "A face detection program using OpenCV and a pretrained face classifier.",
    code: "https://github.com/JosiasAurel/dummy-project/tree/master/face-detection-",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Covid19 Info App",
    description: "A simple web app to provide Covid19 Info in Cameroon and the whole world.",
    code: "https://github.com/JosiasAurel/dummy-project/tree/master/covid19nd",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Location detector",
    description: "A simple web app that shows you your current location through the web location API.",
    code: "https://github.com/JosiasAurel/dummy-project/tree/master/KitsHive",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanN4Il0sIm5hbWVzIjpbIlByb2plY3RzIiwidXNlU3RhdGUiLCJNb2RlIiwic2V0TW9kZSIsImNvbG9yVGV4dCIsInNldENvbG9yVGV4dCIsInRvZ2dsZUNvbG9yIiwic3R5bGVzIiwiaG9tZUxpZ2h0Qm9keSIsImhvbWVEYXJrQm9keSIsImhlYWRlciIsIm5hbWUiLCJoZWFkZXJMaW5rcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsTUFBRCxDQURkO0FBQUEsTUFDWEMsSUFEVztBQUFBLE1BQ0xDLE9BREs7O0FBQUEsbUJBRVlGLHNEQUFRLENBQUMsTUFBRCxDQUZwQjtBQUFBLE1BRWZHLFNBRmU7QUFBQSxNQUVKQyxZQUZJOztBQUd0QixXQUFTQyxXQUFULEdBQXVCO0FBQ2hCLFFBQUlKLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQzNCQyxhQUFPLENBQUMsTUFBRCxDQUFQO0FBQ0FFLGtCQUFZLENBQUMsTUFBRCxDQUFaO0FBQ00sS0FIRCxNQUdPLElBQUlILElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ2pDQyxhQUFPLENBQUMsT0FBRCxDQUFQO0FBQ1NFLGtCQUFZLENBQUMsT0FBRCxDQUFaO0FBQ0g7QUFDSjs7QUFFRCxTQUNJO0FBQUssYUFBUyxFQUFJSCxJQUFJLEtBQUssT0FBVixHQUFzQkssa0VBQU0sQ0FBQ0MsYUFBN0IsR0FBK0NELGtFQUFNLENBQUNFLFlBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLGFBQVMsRUFBRUYsa0VBQU0sQ0FBQ0csTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNULE1BQUMsZ0RBQUQ7QUFBTSxR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Q0FESjtBQXNESCxDQW5FRDs7R0FBTUosUTs7S0FBQUEsUTtBQXFFU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMuOTc3MjAzYzlmZmEzMjdiNWE5ODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQ29sb3JNb2RlIGZyb20gJy4uL2NvbXBvbmVudHMvQ29sb3JNb2RlJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcHJvamVjdHMubW9kdWxlLmNzc1wiXHJcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9qZWN0c0NhcmRcIlxyXG5cclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgIFtNb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKFwiRGFya1wiKTtcclxuXHRjb25zdCBbY29sb3JUZXh0LCBzZXRDb2xvclRleHRdID0gdXNlU3RhdGUoXCJEYXJrXCIpXHJcblx0ZnVuY3Rpb24gdG9nZ2xlQ29sb3IoKSB7XHJcbiAgICAgICAgaWYgKE1vZGUgPT09IFwiTGlnaHRcIikge1xyXG5cdFx0XHRzZXRNb2RlKFwiRGFya1wiKVxyXG5cdFx0XHRzZXRDb2xvclRleHQoXCJEYXJrXCIpXHJcbiAgICAgICAgfSBlbHNlIGlmIChNb2RlID09PSBcIkRhcmtcIikge1xyXG5cdFx0XHRzZXRNb2RlKFwiTGlnaHRcIilcclxuICAgICAgICAgICAgc2V0Q29sb3JUZXh0KFwiTGlnaHRcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAoTW9kZSA9PT0gXCJMaWdodFwiKSA/IChzdHlsZXMuaG9tZUxpZ2h0Qm9keSkgOiAoc3R5bGVzLmhvbWVEYXJrQm9keSkgfT5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG5cdFx0XHQ8TGluayBocmVmPVwiL1wiPlxyXG5cdFx0XHRcdDxhPjxoMiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5KQTwvaDI+PC9hPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyTGlua3N9PlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9ibG9nXCI+XHJcblx0XHRcdFx0XHQ8YSA+QmxvZzwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XHJcblx0XHRcdFx0XHQ8YSA+UHJvamVjdHM8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG5cdFx0XHRcdFx0PGEgPkFib3V0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8Q29sb3JNb2RlXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0b2dnbGVDb2xvcigpfVxyXG5cdFx0XHRcdFx0dmFsdWU9e2NvbG9yVGV4dH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIlNuaXBwZXQgU2tpXCIgbGFiZWw9XCJBdCBXb3JrXCIgZGVzY3JpcHRpb249XCJBIGNvZGUgc25pcHBldCBzaGFyaW5nIGFwcC5cIiBjb2RlPVwiaHR0cHM6Ly9naXRodWIuY29tL0pvc2lhc0F1cmVsL1NraVwiIGxpdmVBcHA9XCJodHRwczovL3NuaXBwZXQtc2tpLmhlcm9rdWFwcC5jb20vXCIgLz5cclxuXHRcdFx0ICAgPFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiUGlrYVwiIGxhYmVsPVwiQXQgV29ya1wiIGRlc2NyaXB0aW9uPVwiQSBVUkwgc2hvcnRlbmluZyBhcHAuXCIgY29kZT1cImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NpYXNBdXJlbC9waWthXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJHcmFwaFFMIEJvb2sgQVBJXCIgZGVzY3JpcHRpb249XCJBIHNpbXBsZSBHcmFwaFFMIEJvb2tzIEFQSS5cIiBjb2RlPVwiaHR0cHM6Ly9naXRodWIuY29tL0pvc2lhc0F1cmVsL0dyYXBoUUwtYm9vay1hcGlcIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIlBhaW50IEFwcFwiIGRlc2NyaXB0aW9uPVwiQSBtaW5pbWFsaXN0aWMgYmFzaWMgcGFpbnRpbmcgYXBwLlwiIGNvZGU9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWwvcGFpbnQtYXBwXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJSR0IgVG8gSGV4IENvbG9yIENvbnZlcnRlclwiIGRlc2NyaXB0aW9uPVwiQW4gYXAgdGhhdCBjYW4gY29udmVydCBSR0IgY29sb3IgY29kZXMgdG8gaGV4YWRlY2ltYWwgY29sb3IgY29kZXMuIFN1cHBvcnRzIG11bHRpcGxlIGNvbnZlcnNpb25zLlwiIGNvZGU9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWwvUkdCLXRvLWhleC1jb252ZXJ0ZXJcIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIlBhbGluZHJvbWUgQ2hlY2tlclwiIGRlc2NyaXB0aW9uPVwiQSBzaW1wbGUgcHl0aG9uIHNjcmlwdCB0aGF0IGNhbiBkZXRlcm1pbmUgaWYgYSB3b3JkIGlzIGEgcGFsaW5kcm9tZSBvciBub3QuXCIgY29kZT1cImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NpYXNBdXJlbC9kdW1teS1wcm9qZWN0L2Jsb2IvbWFzdGVyL3BhbGluZHJvbWVfY2hlY2tlci5weVwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiU3ViZG9tYWluIFNjYW5uZXJcIiBkZXNjcmlwdGlvbj1cIkEgcHl0aG9uIGFwcCB0aGF0IGNhbiBkZXRlcm1pbmUgYWxsIHRoZSBzdWJkb21haW5zIG9uIGEgcm9vdCBkb21haW4uIFVzZXMgQnJ1dGVGb3JjZSBtZXRob2QuXCIgY29kZT1cImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NpYXNBdXJlbC9kdW1teS1wcm9qZWN0L3RyZWUvbWFzdGVyL3N1YmRvbWFpbi1zLXNjYW5uZXJcIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIlN0ZWdhbm9ncmFwaHkgUHJvZ3JhbVwiIGRlc2NyaXB0aW9uPVwiQSBzaW1wbGUgcHl0aG9uIHByb2dyYW0gdG8gZW5jb2RlIGFuZCBkZWNvZGUgdGV4dCBpbiBpbWFnZXMuXCIgY29kZT1cImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NpYXNBdXJlbC9kdW1teS1wcm9qZWN0L3RyZWUvbWFzdGVyL3N0ZWdhbm9ncmFwaHlcIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIlJvY2sgUGFwZXIgU2Npc3NvcnNcIiBkZXNjcmlwdGlvbj1cIkEgcm9jayBwYXBlciBzY2lzc29ycyBDTEkgZ2FtZSBpbiBweXRob24uXCIgY29kZT1cImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NpYXNBdXJlbC9kdW1teS1wcm9qZWN0L3RyZWUvbWFzdGVyL3JvY2stcGFwZXItc2Npc3NvcnNcIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIk5leHRKU1wiIGRlc2NyaXB0aW9uPVwiQSBtaW5pbWFsIE5leHRKUyBtYXJrZG93biBibG9nIHRlbXBsYXRlLlwiIGNvZGU9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWwvZHVtbXktcHJvamVjdC90cmVlL21hc3Rlci9uZXh0anMtbWFya2Rvd24tYmxvZ1wiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiRmFjZSBEZXRlY3Rpb25cIiBkZXNjcmlwdGlvbj1cIkEgZmFjZSBkZXRlY3Rpb24gcHJvZ3JhbSB1c2luZyBPcGVuQ1YgYW5kIGEgcHJldHJhaW5lZCBmYWNlIGNsYXNzaWZpZXIuXCIgY29kZT1cImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NpYXNBdXJlbC9kdW1teS1wcm9qZWN0L3RyZWUvbWFzdGVyL2ZhY2UtZGV0ZWN0aW9uLVwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiQ292aWQxOSBJbmZvIEFwcFwiIGRlc2NyaXB0aW9uPVwiQSBzaW1wbGUgd2ViIGFwcCB0byBwcm92aWRlIENvdmlkMTkgSW5mbyBpbiBDYW1lcm9vbiBhbmQgdGhlIHdob2xlIHdvcmxkLlwiIGNvZGU9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWwvZHVtbXktcHJvamVjdC90cmVlL21hc3Rlci9jb3ZpZDE5bmRcIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIkxvY2F0aW9uIGRldGVjdG9yXCIgZGVzY3JpcHRpb249XCJBIHNpbXBsZSB3ZWIgYXBwIHRoYXQgc2hvd3MgeW91IHlvdXIgY3VycmVudCBsb2NhdGlvbiB0aHJvdWdoIHRoZSB3ZWIgbG9jYXRpb24gQVBJLlwiIGNvZGU9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWwvZHVtbXktcHJvamVjdC90cmVlL21hc3Rlci9LaXRzSGl2ZVwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiUVIgY29kZSBlbmNyeXB0aW9uIGFuZCBkZWNyeXB0aW9uXCIgZGVzY3JpcHRpb249XCJBIHNpbXBsZSBweXRob24gcHJvZ3JhbSB0byBnZW1lcmF0ZSBhbmQgZGVjb2RlIFFSIGNvZGVzLlwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiQ29sb3IgZ2VuZXJhdG9yXCIgZGVzY3JpcHRpb249XCJBIHdlYiBhcHAgdGhhdCBnZW5lcmF0ZXMgY29sb3JzIGluIFJHQiBmb3IgeW91LlwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiRGV2aWNlIERldGVjdGlvblwiIGRlc2NyaXB0aW9uPVwiQSB3ZWIgQVBJIHRoYXQgZGV0ZWN0cyB0aGUgZGV2aWNlL3N5c3RlbSB0aGUgY2xpZW50IHJ1bnMuXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJOZWdhIENhbGN1bGF0b3JcIiBkZXNjcmlwdGlvbj1cIlRoZSBmaXJzdCBiaWcgcHJvZ3JhbSBpIG1hZGUgYXMgYSBiZWdpbm5lciBpbiBQeXRob24gWEQuXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJQYXNzd29yZCBHZW5lcmF0b3JcIiBkZXNjcmlwdGlvbj1cIkEgcGFzc3dvcmQgZ2VuZXJhdG9yIGFwcC5cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIlBlYXN5IE5vdGVzXCIgZGVzY3JpcHRpb249XCJBbiBhcHAgdGhhdCBoZWxwcyB5b3UgdGFrZSBub3RlcyBhbmQgZW5jb2RlIHRoZW0gaW4gYSBVUkwuXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJBbiBpbWFnZSBjbGFzc2lmaWVyIFRlbnNvcmZsb3dcIiBkZXNjcmlwdGlvbj1cIkEgdGVuc29yZmxvdyBtb2RlbCB0byBjbGVzc2ZpZnkgaW1hZ2VzIGFuZCBudW1iZXJzLlwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiV29yZCBDb3VudGVyXCIgZGVzY3JpcHRpb249XCJBIHNpbXBsZSBweXRob24gcHJvZ3JhbSB0byBjb3VudCB0aGUgbnVtYmVyIG9mIHdvcmRzIGluIGEgdGV4dC5cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIndvcmQgdG8gUERGIGNvbnZlcnRlclwiIGRlc2NyaXB0aW9uPVwiQSBweXRob24gcHJvZ3JhbSB0byBjb252ZXJ0IHdvcmQgZG9jdW1lbnRzIGludG8gUERGIGRvY3VtZW50cyB1c2luZyBhbiBBUEkuXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJHcmFwaFFMIEJvb2sgQVBJXCIgZGVzY3JpcHRpb249XCJBIHNpbXBsZSBHcmFwaFFMIEJvb2tzIEFQSVwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiTm90ZXMgQVBJXCIgZGVzY3JpcHRpb249XCJBIHNpbXBsZSBub3RlcyBBUEkgd2l0aCBOb2RlSlMgYW5kIE1vbmdvREJcIiAvPlx0ICBcclxuXHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHMiXSwic291cmNlUm9vdCI6IiJ9