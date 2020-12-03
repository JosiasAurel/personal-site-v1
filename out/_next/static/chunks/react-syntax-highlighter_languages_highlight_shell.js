(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_shell"],{

/***/ "./node_modules/highlight.js/lib/languages/shell.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/shell.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Shell Session
Requires: bash.js
Author: TSUYUSATO Kitsune <make.just.on@gmail.com>
Category: common
*/

function shell(hljs) {
  return {
    name: 'Shell Session',
    aliases: ['console'],
    contains: [
      {
        className: 'meta',
        begin: '^\\s{0,3}[/\\w\\d\\[\\]()@-]*[>%$#]',
        starts: {
          end: '$', subLanguage: 'bash'
        }
      }
    ]
  }
}

module.exports = shell;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3NoZWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixJQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfc2hlbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFNoZWxsIFNlc3Npb25cblJlcXVpcmVzOiBiYXNoLmpzXG5BdXRob3I6IFRTVVlVU0FUTyBLaXRzdW5lIDxtYWtlLmp1c3Qub25AZ21haWwuY29tPlxuQ2F0ZWdvcnk6IGNvbW1vblxuKi9cblxuZnVuY3Rpb24gc2hlbGwoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdTaGVsbCBTZXNzaW9uJyxcbiAgICBhbGlhc2VzOiBbJ2NvbnNvbGUnXSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdeXFxcXHN7MCwzfVsvXFxcXHdcXFxcZFxcXFxbXFxcXF0oKUAtXSpbPiUkI10nLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBlbmQ6ICckJywgc3ViTGFuZ3VhZ2U6ICdiYXNoJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hlbGw7XG4iXSwic291cmNlUm9vdCI6IiJ9