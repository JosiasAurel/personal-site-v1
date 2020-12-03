(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_pony"],{

/***/ "./node_modules/highlight.js/lib/languages/pony.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/pony.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Pony
Author: Joe Eli McIlvain <joe.eli.mac@gmail.com>
Description: Pony is an open-source, object-oriented, actor-model,
             capabilities-secure, high performance programming language.
Website: https://www.ponylang.io
*/

function pony(hljs) {
  var KEYWORDS = {
    keyword:
      'actor addressof and as be break class compile_error compile_intrinsic ' +
      'consume continue delegate digestof do else elseif embed end error ' +
      'for fun if ifdef in interface is isnt lambda let match new not object ' +
      'or primitive recover repeat return struct then trait try type until ' +
      'use var where while with xor',
    meta:
      'iso val tag trn box ref',
    literal:
      'this false true'
  };

  var TRIPLE_QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"""', end: '"""',
    relevance: 10
  };

  var QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    contains: [hljs.BACKSLASH_ESCAPE]
  };

  var SINGLE_QUOTE_CHAR_MODE = {
    className: 'string',
    begin: '\'', end: '\'',
    contains: [hljs.BACKSLASH_ESCAPE],
    relevance: 0
  };

  var TYPE_NAME = {
    className: 'type',
    begin: '\\b_?[A-Z][\\w]*',
    relevance: 0
  };

  var PRIMED_NAME = {
    begin: hljs.IDENT_RE + '\'', relevance: 0
  };

  var NUMBER_MODE = {
    className: 'number',
    begin: '(-?)(\\b0[xX][a-fA-F0-9]+|\\b0[bB][01]+|(\\b\\d+(_\\d+)?(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
    relevance: 0
  };

  /**
   * The `FUNCTION` and `CLASS` modes were intentionally removed to simplify
   * highlighting and fix cases like
   * ```
   * interface Iterator[A: A]
   *   fun has_next(): Bool
   *   fun next(): A?
   * ```
   * where it is valid to have a function head without a body
   */

  return {
    name: 'Pony',
    keywords: KEYWORDS,
    contains: [
      TYPE_NAME,
      TRIPLE_QUOTE_STRING_MODE,
      QUOTE_STRING_MODE,
      SINGLE_QUOTE_CHAR_MODE,
      PRIMED_NAME,
      NUMBER_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE
    ]
  };
}

module.exports = pony;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3BvbnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X3BvbnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFBvbnlcbkF1dGhvcjogSm9lIEVsaSBNY0lsdmFpbiA8am9lLmVsaS5tYWNAZ21haWwuY29tPlxuRGVzY3JpcHRpb246IFBvbnkgaXMgYW4gb3Blbi1zb3VyY2UsIG9iamVjdC1vcmllbnRlZCwgYWN0b3ItbW9kZWwsXG4gICAgICAgICAgICAgY2FwYWJpbGl0aWVzLXNlY3VyZSwgaGlnaCBwZXJmb3JtYW5jZSBwcm9ncmFtbWluZyBsYW5ndWFnZS5cbldlYnNpdGU6IGh0dHBzOi8vd3d3LnBvbnlsYW5nLmlvXG4qL1xuXG5mdW5jdGlvbiBwb255KGhsanMpIHtcbiAgdmFyIEtFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6XG4gICAgICAnYWN0b3IgYWRkcmVzc29mIGFuZCBhcyBiZSBicmVhayBjbGFzcyBjb21waWxlX2Vycm9yIGNvbXBpbGVfaW50cmluc2ljICcgK1xuICAgICAgJ2NvbnN1bWUgY29udGludWUgZGVsZWdhdGUgZGlnZXN0b2YgZG8gZWxzZSBlbHNlaWYgZW1iZWQgZW5kIGVycm9yICcgK1xuICAgICAgJ2ZvciBmdW4gaWYgaWZkZWYgaW4gaW50ZXJmYWNlIGlzIGlzbnQgbGFtYmRhIGxldCBtYXRjaCBuZXcgbm90IG9iamVjdCAnICtcbiAgICAgICdvciBwcmltaXRpdmUgcmVjb3ZlciByZXBlYXQgcmV0dXJuIHN0cnVjdCB0aGVuIHRyYWl0IHRyeSB0eXBlIHVudGlsICcgK1xuICAgICAgJ3VzZSB2YXIgd2hlcmUgd2hpbGUgd2l0aCB4b3InLFxuICAgIG1ldGE6XG4gICAgICAnaXNvIHZhbCB0YWcgdHJuIGJveCByZWYnLFxuICAgIGxpdGVyYWw6XG4gICAgICAndGhpcyBmYWxzZSB0cnVlJ1xuICB9O1xuXG4gIHZhciBUUklQTEVfUVVPVEVfU1RSSU5HX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1wiXCJcIicsIGVuZDogJ1wiXCJcIicsXG4gICAgcmVsZXZhbmNlOiAxMFxuICB9O1xuXG4gIHZhciBRVU9URV9TVFJJTkdfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnXCInLCBlbmQ6ICdcIicsXG4gICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gIH07XG5cbiAgdmFyIFNJTkdMRV9RVU9URV9DSEFSX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1xcJycsIGVuZDogJ1xcJycsXG4gICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIHZhciBUWVBFX05BTUUgPSB7XG4gICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgYmVnaW46ICdcXFxcYl8/W0EtWl1bXFxcXHddKicsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgdmFyIFBSSU1FRF9OQU1FID0ge1xuICAgIGJlZ2luOiBobGpzLklERU5UX1JFICsgJ1xcJycsIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIHZhciBOVU1CRVJfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIGJlZ2luOiAnKC0/KShcXFxcYjBbeFhdW2EtZkEtRjAtOV0rfFxcXFxiMFtiQl1bMDFdK3woXFxcXGJcXFxcZCsoX1xcXFxkKyk/KFxcXFwuXFxcXGQqKT98XFxcXC5cXFxcZCspKFtlRV1bLStdP1xcXFxkKyk/KScsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgLyoqXG4gICAqIFRoZSBgRlVOQ1RJT05gIGFuZCBgQ0xBU1NgIG1vZGVzIHdlcmUgaW50ZW50aW9uYWxseSByZW1vdmVkIHRvIHNpbXBsaWZ5XG4gICAqIGhpZ2hsaWdodGluZyBhbmQgZml4IGNhc2VzIGxpa2VcbiAgICogYGBgXG4gICAqIGludGVyZmFjZSBJdGVyYXRvcltBOiBBXVxuICAgKiAgIGZ1biBoYXNfbmV4dCgpOiBCb29sXG4gICAqICAgZnVuIG5leHQoKTogQT9cbiAgICogYGBgXG4gICAqIHdoZXJlIGl0IGlzIHZhbGlkIHRvIGhhdmUgYSBmdW5jdGlvbiBoZWFkIHdpdGhvdXQgYSBib2R5XG4gICAqL1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1BvbnknLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAgVFlQRV9OQU1FLFxuICAgICAgVFJJUExFX1FVT1RFX1NUUklOR19NT0RFLFxuICAgICAgUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBTSU5HTEVfUVVPVEVfQ0hBUl9NT0RFLFxuICAgICAgUFJJTUVEX05BTUUsXG4gICAgICBOVU1CRVJfTU9ERSxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREVcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcG9ueTtcbiJdLCJzb3VyY2VSb290IjoiIn0=