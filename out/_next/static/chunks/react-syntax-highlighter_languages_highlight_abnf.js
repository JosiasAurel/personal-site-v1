(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_abnf"],{

/***/ "./node_modules/highlight.js/lib/languages/abnf.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/abnf.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Augmented Backus-Naur Form
Author: Alex McKibben <alex@nullscope.net>
Website: https://tools.ietf.org/html/rfc5234
*/

/** @type LanguageFn */
function abnf(hljs) {
    var regexes = {
        ruleDeclaration: "^[a-zA-Z][a-zA-Z0-9-]*",
        unexpectedChars: "[!@#$^&',?+~`|:]"
    };

    var keywords = [
        "ALPHA",
        "BIT",
        "CHAR",
        "CR",
        "CRLF",
        "CTL",
        "DIGIT",
        "DQUOTE",
        "HEXDIG",
        "HTAB",
        "LF",
        "LWSP",
        "OCTET",
        "SP",
        "VCHAR",
        "WSP"
    ];

    var commentMode = hljs.COMMENT(";", "$");

    var terminalBinaryMode = {
        className: "symbol",
        begin: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/
    };

    var terminalDecimalMode = {
        className: "symbol",
        begin: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/
    };

    var terminalHexadecimalMode = {
        className: "symbol",
        begin: /%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/,
    };

    var caseSensitivityIndicatorMode = {
        className: "symbol",
        begin: /%[si]/
    };

    var ruleDeclarationMode = {
        className: "attribute",
        begin: regexes.ruleDeclaration + '(?=\\s*=)',
    };

    return {
      name: 'Augmented Backus-Naur Form',
      illegal: regexes.unexpectedChars,
      keywords: keywords.join(" "),
      contains: [
          ruleDeclarationMode,
          commentMode,
          terminalBinaryMode,
          terminalDecimalMode,
          terminalHexadecimalMode,
          caseSensitivityIndicatorMode,
          hljs.QUOTE_STRING_MODE,
          hljs.NUMBER_MODE
      ]
    };
}

module.exports = abnf;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FibmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBLDhDQUE4QyxJQUFJO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEMsSUFBSTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELElBQUk7QUFDM0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9hYm5mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBBdWdtZW50ZWQgQmFja3VzLU5hdXIgRm9ybVxuQXV0aG9yOiBBbGV4IE1jS2liYmVuIDxhbGV4QG51bGxzY29wZS5uZXQ+XG5XZWJzaXRlOiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTIzNFxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGFibmYoaGxqcykge1xuICAgIHZhciByZWdleGVzID0ge1xuICAgICAgICBydWxlRGVjbGFyYXRpb246IFwiXlthLXpBLVpdW2EtekEtWjAtOS1dKlwiLFxuICAgICAgICB1bmV4cGVjdGVkQ2hhcnM6IFwiWyFAIyReJicsPyt+YHw6XVwiXG4gICAgfTtcblxuICAgIHZhciBrZXl3b3JkcyA9IFtcbiAgICAgICAgXCJBTFBIQVwiLFxuICAgICAgICBcIkJJVFwiLFxuICAgICAgICBcIkNIQVJcIixcbiAgICAgICAgXCJDUlwiLFxuICAgICAgICBcIkNSTEZcIixcbiAgICAgICAgXCJDVExcIixcbiAgICAgICAgXCJESUdJVFwiLFxuICAgICAgICBcIkRRVU9URVwiLFxuICAgICAgICBcIkhFWERJR1wiLFxuICAgICAgICBcIkhUQUJcIixcbiAgICAgICAgXCJMRlwiLFxuICAgICAgICBcIkxXU1BcIixcbiAgICAgICAgXCJPQ1RFVFwiLFxuICAgICAgICBcIlNQXCIsXG4gICAgICAgIFwiVkNIQVJcIixcbiAgICAgICAgXCJXU1BcIlxuICAgIF07XG5cbiAgICB2YXIgY29tbWVudE1vZGUgPSBobGpzLkNPTU1FTlQoXCI7XCIsIFwiJFwiKTtcblxuICAgIHZhciB0ZXJtaW5hbEJpbmFyeU1vZGUgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJzeW1ib2xcIixcbiAgICAgICAgYmVnaW46IC8lYlswLTFdKygtWzAtMV0rfChcXC5bMC0xXSspKyl7MCwxfS9cbiAgICB9O1xuXG4gICAgdmFyIHRlcm1pbmFsRGVjaW1hbE1vZGUgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJzeW1ib2xcIixcbiAgICAgICAgYmVnaW46IC8lZFswLTldKygtWzAtOV0rfChcXC5bMC05XSspKyl7MCwxfS9cbiAgICB9O1xuXG4gICAgdmFyIHRlcm1pbmFsSGV4YWRlY2ltYWxNb2RlID0ge1xuICAgICAgICBjbGFzc05hbWU6IFwic3ltYm9sXCIsXG4gICAgICAgIGJlZ2luOiAvJXhbMC05QS1GXSsoLVswLTlBLUZdK3woXFwuWzAtOUEtRl0rKSspezAsMX0vLFxuICAgIH07XG5cbiAgICB2YXIgY2FzZVNlbnNpdGl2aXR5SW5kaWNhdG9yTW9kZSA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInN5bWJvbFwiLFxuICAgICAgICBiZWdpbjogLyVbc2ldL1xuICAgIH07XG5cbiAgICB2YXIgcnVsZURlY2xhcmF0aW9uTW9kZSA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImF0dHJpYnV0ZVwiLFxuICAgICAgICBiZWdpbjogcmVnZXhlcy5ydWxlRGVjbGFyYXRpb24gKyAnKD89XFxcXHMqPSknLFxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogJ0F1Z21lbnRlZCBCYWNrdXMtTmF1ciBGb3JtJyxcbiAgICAgIGlsbGVnYWw6IHJlZ2V4ZXMudW5leHBlY3RlZENoYXJzLFxuICAgICAga2V5d29yZHM6IGtleXdvcmRzLmpvaW4oXCIgXCIpLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBydWxlRGVjbGFyYXRpb25Nb2RlLFxuICAgICAgICAgIGNvbW1lbnRNb2RlLFxuICAgICAgICAgIHRlcm1pbmFsQmluYXJ5TW9kZSxcbiAgICAgICAgICB0ZXJtaW5hbERlY2ltYWxNb2RlLFxuICAgICAgICAgIHRlcm1pbmFsSGV4YWRlY2ltYWxNb2RlLFxuICAgICAgICAgIGNhc2VTZW5zaXRpdml0eUluZGljYXRvck1vZGUsXG4gICAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICBobGpzLk5VTUJFUl9NT0RFXG4gICAgICBdXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhYm5mO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==