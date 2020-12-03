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
    liveApp: "https://paint-app-ja.vercel.app/",
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
    liveApp: "https://rgb-to-hex-converter.vercel.app/",
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
    liveApp: "https://covid19nd.now.sh/",
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
    liveApp: "https://kits-hive.vercel.app/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "QR code encryption and decryption",
    description: "A simple python program to generate and decode QR codes.",
    code: "https://github.com/JosiasAurel/dummy-project/tree/master/QRCode-encryption-and-decryption-",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Color generator",
    description: "A web app that generates colors in RGB for you.",
    liveApp: "https://color-generator-seven.vercel.app/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Device Detection",
    description: "A web API that detects the device/system the client runs.",
    code: "https://github.com/JosiasAurel/dummy-project/tree/master/device-detection-Python",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Nega Calculator",
    description: "The first big program i made as a beginner in Python XD.",
    code: "https://github.com/JosiasAurel/dummy-project/tree/master/NEGA-CALCULATOR-2.1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Password Generator",
    description: "A password generator app.",
    liveApp: "https://ndpassgen.vercel.app/",
    code: "https://github.com/JosiasAurel/dummy-project/tree/master/password-generator",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Peasy Notes",
    description: "An app that helps you take notes and encode them in a URL.",
    code: "https://github.com/JosiasAurel/dummy-project/tree/master/pizynotew",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "An image classifier Tensorflow",
    description: "A tensorflow model to classfify images and numbers.",
    code: "https://github.com/JosiasAurel/dummy-project/tree/master/tfjs-image-classifier",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Word Counter",
    description: "A simple python program to count the number of words in a text.",
    code: "https://github.com/JosiasAurel/dummy-project/tree/master/word-counter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "word to PDF converter",
    description: "A python program to convert word documents into PDF documents using an API.",
    code: "https://github.com/JosiasAurel/dummy-project/tree/master/word_to_pdf_converter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }), __jsx(_components_projectsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projectName: "Notes API",
    description: "A simple notes API with NodeJS and MongoDB",
    code: "https://github.com/JosiasAurel/dummy-project/tree/master/Notes-api",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanN4Il0sIm5hbWVzIjpbIlByb2plY3RzIiwidXNlU3RhdGUiLCJNb2RlIiwic2V0TW9kZSIsImNvbG9yVGV4dCIsInNldENvbG9yVGV4dCIsInRvZ2dsZUNvbG9yIiwic3R5bGVzIiwiaG9tZUxpZ2h0Qm9keSIsImhvbWVEYXJrQm9keSIsImhlYWRlciIsIm5hbWUiLCJoZWFkZXJMaW5rcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsTUFBRCxDQURkO0FBQUEsTUFDWEMsSUFEVztBQUFBLE1BQ0xDLE9BREs7O0FBQUEsbUJBRVlGLHNEQUFRLENBQUMsTUFBRCxDQUZwQjtBQUFBLE1BRWZHLFNBRmU7QUFBQSxNQUVKQyxZQUZJOztBQUd0QixXQUFTQyxXQUFULEdBQXVCO0FBQ2hCLFFBQUlKLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQzNCQyxhQUFPLENBQUMsTUFBRCxDQUFQO0FBQ0FFLGtCQUFZLENBQUMsTUFBRCxDQUFaO0FBQ00sS0FIRCxNQUdPLElBQUlILElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ2pDQyxhQUFPLENBQUMsT0FBRCxDQUFQO0FBQ1NFLGtCQUFZLENBQUMsT0FBRCxDQUFaO0FBQ0g7QUFDSjs7QUFFRCxTQUNJO0FBQUssYUFBUyxFQUFJSCxJQUFJLEtBQUssT0FBVixHQUFzQkssa0VBQU0sQ0FBQ0MsYUFBN0IsR0FBK0NELGtFQUFNLENBQUNFLFlBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLGFBQVMsRUFBRUYsa0VBQU0sQ0FBQ0csTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNULE1BQUMsZ0RBQUQ7QUFBTSxR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RDtBQUFhLGVBQVcsRUFBQyx1QkFBekI7QUFBaUQsZUFBVyxFQUFDLDZFQUE3RDtBQUEySSxRQUFJLEVBQUMsZ0ZBQWhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QlEsRUF1QlIsTUFBQyxnRUFBRDtBQUFhLGVBQVcsRUFBQyxXQUF6QjtBQUFxQyxlQUFXLEVBQUMsNENBQWpEO0FBQThGLFFBQUksRUFBQyxvRUFBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCUSxDQXpCSixDQURKO0FBcURILENBbEVEOztHQUFNSixROztLQUFBQSxRO0FBb0VTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy45NjY4MzcxZmMyNTY5NTMwMmQzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBDb2xvck1vZGUgZnJvbSAnLi4vY29tcG9uZW50cy9Db2xvck1vZGUnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wcm9qZWN0cy5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2plY3RzQ2FyZFwiXHJcblxyXG5cclxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCAgW01vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoXCJEYXJrXCIpO1xyXG5cdGNvbnN0IFtjb2xvclRleHQsIHNldENvbG9yVGV4dF0gPSB1c2VTdGF0ZShcIkRhcmtcIilcclxuXHRmdW5jdGlvbiB0b2dnbGVDb2xvcigpIHtcclxuICAgICAgICBpZiAoTW9kZSA9PT0gXCJMaWdodFwiKSB7XHJcblx0XHRcdHNldE1vZGUoXCJEYXJrXCIpXHJcblx0XHRcdHNldENvbG9yVGV4dChcIkRhcmtcIilcclxuICAgICAgICB9IGVsc2UgaWYgKE1vZGUgPT09IFwiRGFya1wiKSB7XHJcblx0XHRcdHNldE1vZGUoXCJMaWdodFwiKVxyXG4gICAgICAgICAgICBzZXRDb2xvclRleHQoXCJMaWdodFwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IChNb2RlID09PSBcIkxpZ2h0XCIpID8gKHN0eWxlcy5ob21lTGlnaHRCb2R5KSA6IChzdHlsZXMuaG9tZURhcmtCb2R5KSB9PlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcblx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XHJcblx0XHRcdFx0PGE+PGgyIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PkpBPC9oMj48L2E+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJMaW5rc30+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Jsb2dcIj5cclxuXHRcdFx0XHRcdDxhID5CbG9nPC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuXHRcdFx0XHRcdDxhID5Qcm9qZWN0czwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcblx0XHRcdFx0XHQ8YSA+QWJvdXQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxDb2xvck1vZGVcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNvbG9yKCl9XHJcblx0XHRcdFx0XHR2YWx1ZT17Y29sb3JUZXh0fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgPFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiU25pcHBldCBTa2lcIiBsYWJlbD1cIkF0IFdvcmtcIiBkZXNjcmlwdGlvbj1cIkEgY29kZSBzbmlwcGV0IHNoYXJpbmcgYXBwLlwiIGNvZGU9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWwvU2tpXCIgbGl2ZUFwcD1cImh0dHBzOi8vc25pcHBldC1za2kuaGVyb2t1YXBwLmNvbS9cIiAvPlxyXG5cdFx0XHQgICA8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJQaWthXCIgbGFiZWw9XCJBdCBXb3JrXCIgZGVzY3JpcHRpb249XCJBIFVSTCBzaG9ydGVuaW5nIGFwcC5cIiBjb2RlPVwiaHR0cHM6Ly9naXRodWIuY29tL0pvc2lhc0F1cmVsL3Bpa2FcIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIkdyYXBoUUwgQm9vayBBUElcIiBkZXNjcmlwdGlvbj1cIkEgc2ltcGxlIEdyYXBoUUwgQm9va3MgQVBJLlwiIGNvZGU9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWwvR3JhcGhRTC1ib29rLWFwaVwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiUGFpbnQgQXBwXCIgZGVzY3JpcHRpb249XCJBIG1pbmltYWxpc3RpYyBiYXNpYyBwYWludGluZyBhcHAuXCIgY29kZT1cImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NpYXNBdXJlbC9wYWludC1hcHBcIiBsaXZlQXBwPVwiaHR0cHM6Ly9wYWludC1hcHAtamEudmVyY2VsLmFwcC9cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIlJHQiBUbyBIZXggQ29sb3IgQ29udmVydGVyXCIgZGVzY3JpcHRpb249XCJBbiBhcCB0aGF0IGNhbiBjb252ZXJ0IFJHQiBjb2xvciBjb2RlcyB0byBoZXhhZGVjaW1hbCBjb2xvciBjb2Rlcy4gU3VwcG9ydHMgbXVsdGlwbGUgY29udmVyc2lvbnMuXCIgY29kZT1cImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NpYXNBdXJlbC9SR0ItdG8taGV4LWNvbnZlcnRlclwiIGxpdmVBcHA9XCJodHRwczovL3JnYi10by1oZXgtY29udmVydGVyLnZlcmNlbC5hcHAvXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJQYWxpbmRyb21lIENoZWNrZXJcIiBkZXNjcmlwdGlvbj1cIkEgc2ltcGxlIHB5dGhvbiBzY3JpcHQgdGhhdCBjYW4gZGV0ZXJtaW5lIGlmIGEgd29yZCBpcyBhIHBhbGluZHJvbWUgb3Igbm90LlwiIGNvZGU9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWwvZHVtbXktcHJvamVjdC9ibG9iL21hc3Rlci9wYWxpbmRyb21lX2NoZWNrZXIucHlcIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIlN1YmRvbWFpbiBTY2FubmVyXCIgZGVzY3JpcHRpb249XCJBIHB5dGhvbiBhcHAgdGhhdCBjYW4gZGV0ZXJtaW5lIGFsbCB0aGUgc3ViZG9tYWlucyBvbiBhIHJvb3QgZG9tYWluLiBVc2VzIEJydXRlRm9yY2UgbWV0aG9kLlwiIGNvZGU9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWwvZHVtbXktcHJvamVjdC90cmVlL21hc3Rlci9zdWJkb21haW4tcy1zY2FubmVyXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJTdGVnYW5vZ3JhcGh5IFByb2dyYW1cIiBkZXNjcmlwdGlvbj1cIkEgc2ltcGxlIHB5dGhvbiBwcm9ncmFtIHRvIGVuY29kZSBhbmQgZGVjb2RlIHRleHQgaW4gaW1hZ2VzLlwiIGNvZGU9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWwvZHVtbXktcHJvamVjdC90cmVlL21hc3Rlci9zdGVnYW5vZ3JhcGh5XCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJSb2NrIFBhcGVyIFNjaXNzb3JzXCIgZGVzY3JpcHRpb249XCJBIHJvY2sgcGFwZXIgc2Npc3NvcnMgQ0xJIGdhbWUgaW4gcHl0aG9uLlwiIGNvZGU9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWwvZHVtbXktcHJvamVjdC90cmVlL21hc3Rlci9yb2NrLXBhcGVyLXNjaXNzb3JzXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJOZXh0SlNcIiBkZXNjcmlwdGlvbj1cIkEgbWluaW1hbCBOZXh0SlMgbWFya2Rvd24gYmxvZyB0ZW1wbGF0ZS5cIiBjb2RlPVwiaHR0cHM6Ly9naXRodWIuY29tL0pvc2lhc0F1cmVsL2R1bW15LXByb2plY3QvdHJlZS9tYXN0ZXIvbmV4dGpzLW1hcmtkb3duLWJsb2dcIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIkZhY2UgRGV0ZWN0aW9uXCIgZGVzY3JpcHRpb249XCJBIGZhY2UgZGV0ZWN0aW9uIHByb2dyYW0gdXNpbmcgT3BlbkNWIGFuZCBhIHByZXRyYWluZWQgZmFjZSBjbGFzc2lmaWVyLlwiIGNvZGU9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWwvZHVtbXktcHJvamVjdC90cmVlL21hc3Rlci9mYWNlLWRldGVjdGlvbi1cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIkNvdmlkMTkgSW5mbyBBcHBcIiBkZXNjcmlwdGlvbj1cIkEgc2ltcGxlIHdlYiBhcHAgdG8gcHJvdmlkZSBDb3ZpZDE5IEluZm8gaW4gQ2FtZXJvb24gYW5kIHRoZSB3aG9sZSB3b3JsZC5cIiBjb2RlPVwiaHR0cHM6Ly9naXRodWIuY29tL0pvc2lhc0F1cmVsL2R1bW15LXByb2plY3QvdHJlZS9tYXN0ZXIvY292aWQxOW5kXCIgbGl2ZUFwcD1cImh0dHBzOi8vY292aWQxOW5kLm5vdy5zaC9cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIkxvY2F0aW9uIGRldGVjdG9yXCIgZGVzY3JpcHRpb249XCJBIHNpbXBsZSB3ZWIgYXBwIHRoYXQgc2hvd3MgeW91IHlvdXIgY3VycmVudCBsb2NhdGlvbiB0aHJvdWdoIHRoZSB3ZWIgbG9jYXRpb24gQVBJLlwiIGNvZGU9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWwvZHVtbXktcHJvamVjdC90cmVlL21hc3Rlci9LaXRzSGl2ZVwiIGxpdmVBcHA9XCJodHRwczovL2tpdHMtaGl2ZS52ZXJjZWwuYXBwL1wiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiUVIgY29kZSBlbmNyeXB0aW9uIGFuZCBkZWNyeXB0aW9uXCIgZGVzY3JpcHRpb249XCJBIHNpbXBsZSBweXRob24gcHJvZ3JhbSB0byBnZW5lcmF0ZSBhbmQgZGVjb2RlIFFSIGNvZGVzLlwiIGNvZGU9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWwvZHVtbXktcHJvamVjdC90cmVlL21hc3Rlci9RUkNvZGUtZW5jcnlwdGlvbi1hbmQtZGVjcnlwdGlvbi1cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIkNvbG9yIGdlbmVyYXRvclwiIGRlc2NyaXB0aW9uPVwiQSB3ZWIgYXBwIHRoYXQgZ2VuZXJhdGVzIGNvbG9ycyBpbiBSR0IgZm9yIHlvdS5cIiBsaXZlQXBwPVwiaHR0cHM6Ly9jb2xvci1nZW5lcmF0b3Itc2V2ZW4udmVyY2VsLmFwcC9cIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIkRldmljZSBEZXRlY3Rpb25cIiBkZXNjcmlwdGlvbj1cIkEgd2ViIEFQSSB0aGF0IGRldGVjdHMgdGhlIGRldmljZS9zeXN0ZW0gdGhlIGNsaWVudCBydW5zLlwiIGNvZGU9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWwvZHVtbXktcHJvamVjdC90cmVlL21hc3Rlci9kZXZpY2UtZGV0ZWN0aW9uLVB5dGhvblwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiTmVnYSBDYWxjdWxhdG9yXCIgZGVzY3JpcHRpb249XCJUaGUgZmlyc3QgYmlnIHByb2dyYW0gaSBtYWRlIGFzIGEgYmVnaW5uZXIgaW4gUHl0aG9uIFhELlwiIGNvZGU9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWwvZHVtbXktcHJvamVjdC90cmVlL21hc3Rlci9ORUdBLUNBTENVTEFUT1ItMi4xXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJQYXNzd29yZCBHZW5lcmF0b3JcIiBkZXNjcmlwdGlvbj1cIkEgcGFzc3dvcmQgZ2VuZXJhdG9yIGFwcC5cIiBsaXZlQXBwPVwiaHR0cHM6Ly9uZHBhc3NnZW4udmVyY2VsLmFwcC9cIiBjb2RlPVwiaHR0cHM6Ly9naXRodWIuY29tL0pvc2lhc0F1cmVsL2R1bW15LXByb2plY3QvdHJlZS9tYXN0ZXIvcGFzc3dvcmQtZ2VuZXJhdG9yXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJQZWFzeSBOb3Rlc1wiIGRlc2NyaXB0aW9uPVwiQW4gYXBwIHRoYXQgaGVscHMgeW91IHRha2Ugbm90ZXMgYW5kIGVuY29kZSB0aGVtIGluIGEgVVJMLlwiIGNvZGU9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWwvZHVtbXktcHJvamVjdC90cmVlL21hc3Rlci9waXp5bm90ZXdcIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIkFuIGltYWdlIGNsYXNzaWZpZXIgVGVuc29yZmxvd1wiIGRlc2NyaXB0aW9uPVwiQSB0ZW5zb3JmbG93IG1vZGVsIHRvIGNsYXNzZmlmeSBpbWFnZXMgYW5kIG51bWJlcnMuXCIgY29kZT1cImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NpYXNBdXJlbC9kdW1teS1wcm9qZWN0L3RyZWUvbWFzdGVyL3RmanMtaW1hZ2UtY2xhc3NpZmllclwiIC8+XHJcblx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3ROYW1lPVwiV29yZCBDb3VudGVyXCIgZGVzY3JpcHRpb249XCJBIHNpbXBsZSBweXRob24gcHJvZ3JhbSB0byBjb3VudCB0aGUgbnVtYmVyIG9mIHdvcmRzIGluIGEgdGV4dC5cIiBjb2RlPVwiaHR0cHM6Ly9naXRodWIuY29tL0pvc2lhc0F1cmVsL2R1bW15LXByb2plY3QvdHJlZS9tYXN0ZXIvd29yZC1jb3VudGVyXCIgLz5cclxuXHRcdFx0XHQ8UHJvamVjdENhcmQgcHJvamVjdE5hbWU9XCJ3b3JkIHRvIFBERiBjb252ZXJ0ZXJcIiBkZXNjcmlwdGlvbj1cIkEgcHl0aG9uIHByb2dyYW0gdG8gY29udmVydCB3b3JkIGRvY3VtZW50cyBpbnRvIFBERiBkb2N1bWVudHMgdXNpbmcgYW4gQVBJLlwiIGNvZGU9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaWFzQXVyZWwvZHVtbXktcHJvamVjdC90cmVlL21hc3Rlci93b3JkX3RvX3BkZl9jb252ZXJ0ZXJcIiAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZCBwcm9qZWN0TmFtZT1cIk5vdGVzIEFQSVwiIGRlc2NyaXB0aW9uPVwiQSBzaW1wbGUgbm90ZXMgQVBJIHdpdGggTm9kZUpTIGFuZCBNb25nb0RCXCIgY29kZT1cImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NpYXNBdXJlbC9kdW1teS1wcm9qZWN0L3RyZWUvbWFzdGVyL05vdGVzLWFwaVwiIC8+XHQgIFxyXG5cdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cyJdLCJzb3VyY2VSb290IjoiIn0=