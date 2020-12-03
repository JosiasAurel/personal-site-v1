(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_c"],{

/***/ "./node_modules/highlight.js/lib/languages/c.js":
/*!******************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/c.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: C
Category: common, system
Website: https://en.wikipedia.org/wiki/C_(programming_language)
Requires: c-like.js
*/

/** @type LanguageFn */
function c(hljs) {
  var lang = hljs.requireLanguage('c-like').rawDefinition();
  // Until C is actually different than C++ there is no reason to auto-detect C
  // as it's own language since it would just fail auto-detect testing or
  // simply match with C++.
  //
  // See further comments in c-like.js.

  // lang.disableAutodetect = false;
  lang.name = 'C';
  lang.aliases = ['c', 'h'];
  return lang;
}

module.exports = c;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IENcbkNhdGVnb3J5OiBjb21tb24sIHN5c3RlbVxuV2Vic2l0ZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ18ocHJvZ3JhbW1pbmdfbGFuZ3VhZ2UpXG5SZXF1aXJlczogYy1saWtlLmpzXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gYyhobGpzKSB7XG4gIHZhciBsYW5nID0gaGxqcy5yZXF1aXJlTGFuZ3VhZ2UoJ2MtbGlrZScpLnJhd0RlZmluaXRpb24oKTtcbiAgLy8gVW50aWwgQyBpcyBhY3R1YWxseSBkaWZmZXJlbnQgdGhhbiBDKysgdGhlcmUgaXMgbm8gcmVhc29uIHRvIGF1dG8tZGV0ZWN0IENcbiAgLy8gYXMgaXQncyBvd24gbGFuZ3VhZ2Ugc2luY2UgaXQgd291bGQganVzdCBmYWlsIGF1dG8tZGV0ZWN0IHRlc3Rpbmcgb3JcbiAgLy8gc2ltcGx5IG1hdGNoIHdpdGggQysrLlxuICAvL1xuICAvLyBTZWUgZnVydGhlciBjb21tZW50cyBpbiBjLWxpa2UuanMuXG5cbiAgLy8gbGFuZy5kaXNhYmxlQXV0b2RldGVjdCA9IGZhbHNlO1xuICBsYW5nLm5hbWUgPSAnQyc7XG4gIGxhbmcuYWxpYXNlcyA9IFsnYycsICdoJ107XG4gIHJldHVybiBsYW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGM7XG4iXSwic291cmNlUm9vdCI6IiJ9