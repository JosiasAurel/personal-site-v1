(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_flix"],{

/***/ "./node_modules/highlight.js/lib/languages/flix.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/flix.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Language: Flix
 Category: functional
 Author: Magnus Madsen <mmadsen@uwaterloo.ca>
 Website: https://flix.dev/
 */

function flix (hljs) {

    var CHAR = {
        className: 'string',
        begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
    };

    var STRING = {
        className: 'string',
        variants: [
            {
                begin: '"', end: '"'
            }
        ]
    };

    var NAME = {
        className: 'title',
        begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/
    };

    var METHOD = {
        className: 'function',
        beginKeywords: 'def',
        end: /[:={\[(\n;]/,
        excludeEnd: true,
        contains: [NAME]
    };

    return {
        name: 'Flix',
        keywords: {
            literal: 'true false',
            keyword: 'case class def else enum if impl import in lat rel index let match namespace switch type yield with'
        },
        contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            CHAR,
            STRING,
            METHOD,
            hljs.C_NUMBER_MODE
        ]
    };
}

module.exports = flix;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2ZsaXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLGlCQUFpQixNQUFNLHNCQUFzQixNQUFNO0FBQzVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixNQUFNO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfZmxpeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gTGFuZ3VhZ2U6IEZsaXhcbiBDYXRlZ29yeTogZnVuY3Rpb25hbFxuIEF1dGhvcjogTWFnbnVzIE1hZHNlbiA8bW1hZHNlbkB1d2F0ZXJsb28uY2E+XG4gV2Vic2l0ZTogaHR0cHM6Ly9mbGl4LmRldi9cbiAqL1xuXG5mdW5jdGlvbiBmbGl4IChobGpzKSB7XG5cbiAgICB2YXIgQ0hBUiA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46IC8nKC58XFxcXFt4WHVVXVthLXpBLVowLTldKyknL1xuICAgIH07XG5cbiAgICB2YXIgU1RSSU5HID0ge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAnXCInLCBlbmQ6ICdcIidcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH07XG5cbiAgICB2YXIgTkFNRSA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICBiZWdpbjogL1teMC05XFxuXFx0IFwiJygpLC5ge31cXFtcXF06O11bXlxcblxcdCBcIicoKSwuYHt9XFxbXFxdOjtdK3xbXjAtOVxcblxcdCBcIicoKSwuYHt9XFxbXFxdOjs9XS9cbiAgICB9O1xuXG4gICAgdmFyIE1FVEhPRCA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZGVmJyxcbiAgICAgICAgZW5kOiAvWzo9e1xcWyhcXG47XS8sXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbTkFNRV1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ0ZsaXgnLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICAgbGl0ZXJhbDogJ3RydWUgZmFsc2UnLFxuICAgICAgICAgICAga2V5d29yZDogJ2Nhc2UgY2xhc3MgZGVmIGVsc2UgZW51bSBpZiBpbXBsIGltcG9ydCBpbiBsYXQgcmVsIGluZGV4IGxldCBtYXRjaCBuYW1lc3BhY2Ugc3dpdGNoIHR5cGUgeWllbGQgd2l0aCdcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgICBDSEFSLFxuICAgICAgICAgICAgU1RSSU5HLFxuICAgICAgICAgICAgTUVUSE9ELFxuICAgICAgICAgICAgaGxqcy5DX05VTUJFUl9NT0RFXG4gICAgICAgIF1cbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZsaXg7XG4iXSwic291cmNlUm9vdCI6IiJ9