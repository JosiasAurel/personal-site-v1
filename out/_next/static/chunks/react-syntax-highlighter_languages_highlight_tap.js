(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_tap"],{

/***/ "./node_modules/highlight.js/lib/languages/tap.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/tap.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Test Anything Protocol
Description: TAP, the Test Anything Protocol, is a simple text-based interface between testing modules in a test harness.
Requires: yaml.js
Author: Sergey Bronnikov <sergeyb@bronevichok.ru>
Website: https://testanything.org
*/

function tap(hljs) {
  return {
    name: 'Test Anything Protocol',
    case_insensitive: true,
    contains: [
      hljs.HASH_COMMENT_MODE,
      // version of format and total amount of testcases
      {
        className: 'meta',
        variants: [
          { begin: '^TAP version (\\d+)$' },
          { begin: '^1\\.\\.(\\d+)$' }
        ],
      },
      // YAML block
      {
        begin: '(\s+)?---$', end: '\\.\\.\\.$',
        subLanguage: 'yaml',
        relevance: 0
      },
	  // testcase number
      {
        className: 'number',
        begin: ' (\\d+) '
      },
	  // testcase status and description
      {
        className: 'symbol',
        variants: [
          { begin: '^ok' },
          { begin: '^not ok' }
        ],
      },
    ]
  };
}

module.exports = tap;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3RhcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0NBQWdDO0FBQzNDLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF90YXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFRlc3QgQW55dGhpbmcgUHJvdG9jb2xcbkRlc2NyaXB0aW9uOiBUQVAsIHRoZSBUZXN0IEFueXRoaW5nIFByb3RvY29sLCBpcyBhIHNpbXBsZSB0ZXh0LWJhc2VkIGludGVyZmFjZSBiZXR3ZWVuIHRlc3RpbmcgbW9kdWxlcyBpbiBhIHRlc3QgaGFybmVzcy5cblJlcXVpcmVzOiB5YW1sLmpzXG5BdXRob3I6IFNlcmdleSBCcm9ubmlrb3YgPHNlcmdleWJAYnJvbmV2aWNob2sucnU+XG5XZWJzaXRlOiBodHRwczovL3Rlc3Rhbnl0aGluZy5vcmdcbiovXG5cbmZ1bmN0aW9uIHRhcChobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1Rlc3QgQW55dGhpbmcgUHJvdG9jb2wnLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICAvLyB2ZXJzaW9uIG9mIGZvcm1hdCBhbmQgdG90YWwgYW1vdW50IG9mIHRlc3RjYXNlc1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7IGJlZ2luOiAnXlRBUCB2ZXJzaW9uIChcXFxcZCspJCcgfSxcbiAgICAgICAgICB7IGJlZ2luOiAnXjFcXFxcLlxcXFwuKFxcXFxkKykkJyB9XG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgLy8gWUFNTCBibG9ja1xuICAgICAge1xuICAgICAgICBiZWdpbjogJyhcXHMrKT8tLS0kJywgZW5kOiAnXFxcXC5cXFxcLlxcXFwuJCcsXG4gICAgICAgIHN1Ykxhbmd1YWdlOiAneWFtbCcsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcblx0ICAvLyB0ZXN0Y2FzZSBudW1iZXJcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46ICcgKFxcXFxkKykgJ1xuICAgICAgfSxcblx0ICAvLyB0ZXN0Y2FzZSBzdGF0dXMgYW5kIGRlc2NyaXB0aW9uXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgeyBiZWdpbjogJ15vaycgfSxcbiAgICAgICAgICB7IGJlZ2luOiAnXm5vdCBvaycgfVxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGFwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==