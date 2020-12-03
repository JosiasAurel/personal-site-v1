(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_csp"],{

/***/ "./node_modules/highlight.js/lib/languages/csp.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/csp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: CSP
Description: Content Security Policy definition highlighting
Author: Taras <oxdef@oxdef.info>
Website: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

vim: ts=2 sw=2 st=2
*/

/** @type LanguageFn */
function csp(hljs) {
  return {
    name: 'CSP',
    case_insensitive: false,
    keywords: {
      $pattern: '[a-zA-Z][a-zA-Z0-9_-]*',
      keyword: 'base-uri child-src connect-src default-src font-src form-action ' +
        'frame-ancestors frame-src img-src media-src object-src plugin-types ' +
        'report-uri sandbox script-src style-src',
    },
    contains: [
    {
      className: 'string',
      begin: "'", end: "'"
    },
    {
      className: 'attribute',
      begin: '^Content', end: ':', excludeEnd: true,
    },
    ]
  };
}

module.exports = csp;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NzcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2NzcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQ1NQXG5EZXNjcmlwdGlvbjogQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZGVmaW5pdGlvbiBoaWdobGlnaHRpbmdcbkF1dGhvcjogVGFyYXMgPG94ZGVmQG94ZGVmLmluZm8+XG5XZWJzaXRlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0NTUFxuXG52aW06IHRzPTIgc3c9MiBzdD0yXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gY3NwKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQ1NQJyxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiBmYWxzZSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgJHBhdHRlcm46ICdbYS16QS1aXVthLXpBLVowLTlfLV0qJyxcbiAgICAgIGtleXdvcmQ6ICdiYXNlLXVyaSBjaGlsZC1zcmMgY29ubmVjdC1zcmMgZGVmYXVsdC1zcmMgZm9udC1zcmMgZm9ybS1hY3Rpb24gJyArXG4gICAgICAgICdmcmFtZS1hbmNlc3RvcnMgZnJhbWUtc3JjIGltZy1zcmMgbWVkaWEtc3JjIG9iamVjdC1zcmMgcGx1Z2luLXR5cGVzICcgK1xuICAgICAgICAncmVwb3J0LXVyaSBzYW5kYm94IHNjcmlwdC1zcmMgc3R5bGUtc3JjJyxcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgIGJlZ2luOiBcIidcIiwgZW5kOiBcIidcIlxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyxcbiAgICAgIGJlZ2luOiAnXkNvbnRlbnQnLCBlbmQ6ICc6JywgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICB9LFxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjc3A7XG4iXSwic291cmNlUm9vdCI6IiJ9