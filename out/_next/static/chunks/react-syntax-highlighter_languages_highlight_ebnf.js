(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_ebnf"],{

/***/ "./node_modules/highlight.js/lib/languages/ebnf.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/ebnf.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Extended Backus-Naur Form
Author: Alex McKibben <alex@nullscope.net>
Website: https://en.wikipedia.org/wiki/Extended_Backus–Naur_form
*/

function ebnf(hljs) {
    var commentMode = hljs.COMMENT(/\(\*/, /\*\)/);

    var nonTerminalMode = {
        className: "attribute",
        begin: /^[ ]*[a-zA-Z][a-zA-Z-_]*([\s-_]+[a-zA-Z][a-zA-Z]*)*/
    };

    var specialSequenceMode = {
        className: "meta",
        begin: /\?.*\?/
    };

    var ruleBodyMode = {
        begin: /=/, end: /[.;]/,
        contains: [
            commentMode,
            specialSequenceMode,
            {
              // terminals
              className: 'string',
              variants: [
                hljs.APOS_STRING_MODE,
                hljs.QUOTE_STRING_MODE,
                {begin: '`', end: '`'},
              ]
            },
        ]
    };

    return {
        name: 'Extended Backus-Naur Form',
        illegal: /\S/,
        contains: [
            commentMode,
            nonTerminalMode,
            ruleBodyMode
        ]
    };
}

module.exports = ebnf;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2VibmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2VibmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEV4dGVuZGVkIEJhY2t1cy1OYXVyIEZvcm1cbkF1dGhvcjogQWxleCBNY0tpYmJlbiA8YWxleEBudWxsc2NvcGUubmV0PlxuV2Vic2l0ZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRXh0ZW5kZWRfQmFja3Vz4oCTTmF1cl9mb3JtXG4qL1xuXG5mdW5jdGlvbiBlYm5mKGhsanMpIHtcbiAgICB2YXIgY29tbWVudE1vZGUgPSBobGpzLkNPTU1FTlQoL1xcKFxcKi8sIC9cXCpcXCkvKTtcblxuICAgIHZhciBub25UZXJtaW5hbE1vZGUgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJhdHRyaWJ1dGVcIixcbiAgICAgICAgYmVnaW46IC9eWyBdKlthLXpBLVpdW2EtekEtWi1fXSooW1xccy1fXStbYS16QS1aXVthLXpBLVpdKikqL1xuICAgIH07XG5cbiAgICB2YXIgc3BlY2lhbFNlcXVlbmNlTW9kZSA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIm1ldGFcIixcbiAgICAgICAgYmVnaW46IC9cXD8uKlxcPy9cbiAgICB9O1xuXG4gICAgdmFyIHJ1bGVCb2R5TW9kZSA9IHtcbiAgICAgICAgYmVnaW46IC89LywgZW5kOiAvWy47XS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICBjb21tZW50TW9kZSxcbiAgICAgICAgICAgIHNwZWNpYWxTZXF1ZW5jZU1vZGUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIHRlcm1pbmFsc1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICAgIHtiZWdpbjogJ2AnLCBlbmQ6ICdgJ30sXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ0V4dGVuZGVkIEJhY2t1cy1OYXVyIEZvcm0nLFxuICAgICAgICBpbGxlZ2FsOiAvXFxTLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIGNvbW1lbnRNb2RlLFxuICAgICAgICAgICAgbm9uVGVybWluYWxNb2RlLFxuICAgICAgICAgICAgcnVsZUJvZHlNb2RlXG4gICAgICAgIF1cbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVibmY7XG4iXSwic291cmNlUm9vdCI6IiJ9