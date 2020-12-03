(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_pythonRepl"],{

/***/ "./node_modules/highlight.js/lib/languages/python-repl.js":
/*!****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/python-repl.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Python REPL
Requires: python.js
Author: Josh Goebel <hello@joshgoebel.com>
Category: common
*/

function pythonRepl(hljs) {
  return {
    aliases: ['pycon'],
    contains: [
      {
        className: 'meta',
        starts: {
          // a space separates the REPL prefix from the actual code
          // this is purely for cleaner HTML output
          end: / |$/,
          starts: {
            end: '$', subLanguage: 'python'
          }
        },
        variants: [
          { begin: /^>>>(?=[ ]|$)/ },
          { begin: /^\.\.\.(?=[ ]|$)/ }
        ]
      },
    ]
  }
}

module.exports = pythonRepl;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3B5dGhvbi1yZXBsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFdBQVcseUJBQXlCO0FBQ3BDLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9weXRob25SZXBsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBQeXRob24gUkVQTFxuUmVxdWlyZXM6IHB5dGhvbi5qc1xuQXV0aG9yOiBKb3NoIEdvZWJlbCA8aGVsbG9Aam9zaGdvZWJlbC5jb20+XG5DYXRlZ29yeTogY29tbW9uXG4qL1xuXG5mdW5jdGlvbiBweXRob25SZXBsKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ3B5Y29uJ10sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIC8vIGEgc3BhY2Ugc2VwYXJhdGVzIHRoZSBSRVBMIHByZWZpeCBmcm9tIHRoZSBhY3R1YWwgY29kZVxuICAgICAgICAgIC8vIHRoaXMgaXMgcHVyZWx5IGZvciBjbGVhbmVyIEhUTUwgb3V0cHV0XG4gICAgICAgICAgZW5kOiAvIHwkLyxcbiAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgIGVuZDogJyQnLCBzdWJMYW5ndWFnZTogJ3B5dGhvbidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgeyBiZWdpbjogL14+Pj4oPz1bIF18JCkvIH0sXG4gICAgICAgICAgeyBiZWdpbjogL15cXC5cXC5cXC4oPz1bIF18JCkvIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBweXRob25SZXBsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==