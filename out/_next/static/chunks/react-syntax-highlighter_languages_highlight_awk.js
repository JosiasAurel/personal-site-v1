(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_awk"],{

/***/ "./node_modules/highlight.js/lib/languages/awk.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/awk.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Awk
Author: Matthew Daly <matthewbdaly@gmail.com>
Website: https://www.gnu.org/software/gawk/manual/gawk.html
Description: language definition for Awk scripts
*/

/** @type LanguageFn */
function awk(hljs) {
  var VARIABLE = {
    className: 'variable',
    variants: [
      {begin: /\$[\w\d#@][\w\d_]*/},
      {begin: /\$\{(.*?)}/}
    ]
  };
  var KEYWORDS = 'BEGIN END if else while do for in break continue delete next nextfile function func exit|10';
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /(u|b)?r?'''/, end: /'''/,
        relevance: 10
      },
      {
        begin: /(u|b)?r?"""/, end: /"""/,
        relevance: 10
      },
      {
        begin: /(u|r|ur)'/, end: /'/,
        relevance: 10
      },
      {
        begin: /(u|r|ur)"/, end: /"/,
        relevance: 10
      },
      {
        begin: /(b|br)'/, end: /'/
      },
      {
        begin: /(b|br)"/, end: /"/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ]
  };
  return {
    name: 'Awk',
    keywords: {
      keyword: KEYWORDS
    },
    contains: [
      VARIABLE,
      STRING,
      hljs.REGEXP_MODE,
      hljs.HASH_COMMENT_MODE,
      hljs.NUMBER_MODE
    ]
  }
}

module.exports = awk;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2F3ay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sNEJBQTRCO0FBQ25DLE9BQU8sWUFBWSxNQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2F3ay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQXdrXG5BdXRob3I6IE1hdHRoZXcgRGFseSA8bWF0dGhld2JkYWx5QGdtYWlsLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vd3d3LmdudS5vcmcvc29mdHdhcmUvZ2F3ay9tYW51YWwvZ2F3ay5odG1sXG5EZXNjcmlwdGlvbjogbGFuZ3VhZ2UgZGVmaW5pdGlvbiBmb3IgQXdrIHNjcmlwdHNcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBhd2soaGxqcykge1xuICB2YXIgVkFSSUFCTEUgPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7YmVnaW46IC9cXCRbXFx3XFxkI0BdW1xcd1xcZF9dKi99LFxuICAgICAge2JlZ2luOiAvXFwkXFx7KC4qPyl9L31cbiAgICBdXG4gIH07XG4gIHZhciBLRVlXT1JEUyA9ICdCRUdJTiBFTkQgaWYgZWxzZSB3aGlsZSBkbyBmb3IgaW4gYnJlYWsgY29udGludWUgZGVsZXRlIG5leHQgbmV4dGZpbGUgZnVuY3Rpb24gZnVuYyBleGl0fDEwJztcbiAgdmFyIFNUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXSxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogLyh1fGIpP3I/JycnLywgZW5kOiAvJycnLyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC8odXxiKT9yP1wiXCJcIi8sIGVuZDogL1wiXCJcIi8sXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvKHV8cnx1ciknLywgZW5kOiAvJy8sXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvKHV8cnx1cilcIi8sIGVuZDogL1wiLyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC8oYnxiciknLywgZW5kOiAvJy9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvKGJ8YnIpXCIvLCBlbmQ6IC9cIi9cbiAgICAgIH0sXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFXG4gICAgXVxuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdBd2snLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOiBLRVlXT1JEU1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIFZBUklBQkxFLFxuICAgICAgU1RSSU5HLFxuICAgICAgaGxqcy5SRUdFWFBfTU9ERSxcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICBobGpzLk5VTUJFUl9NT0RFXG4gICAgXVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXdrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==