(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_taggerscript"],{

/***/ "./node_modules/highlight.js/lib/languages/taggerscript.js":
/*!*****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/taggerscript.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Tagger Script
Author: Philipp Wolfer <ph.wolfer@gmail.com>
Description: Syntax Highlighting for the Tagger Script as used by MusicBrainz Picard.
Website: https://picard.musicbrainz.org
 */
function taggerscript(hljs) {

  var COMMENT = {
    className: 'comment',
    begin: /\$noop\(/,
    end: /\)/,
    contains: [{
      begin: /\(/,
      end: /\)/,
      contains: ['self', {
        begin: /\\./
      }]
    }],
    relevance: 10
  };

  var FUNCTION = {
    className: 'keyword',
    begin: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,
    end: /\(/,
    excludeEnd: true
  };

  var VARIABLE = {
    className: 'variable',
    begin: /%[_a-zA-Z0-9:]*/,
    end: '%'
  };

  var ESCAPE_SEQUENCE = {
    className: 'symbol',
    begin: /\\./
  };

  return {
    name: 'Tagger Script',
    contains: [
      COMMENT,
      FUNCTION,
      VARIABLE,
      ESCAPE_SEQUENCE
    ]
  };
}

module.exports = taggerscript;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3RhZ2dlcnNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF90YWdnZXJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFRhZ2dlciBTY3JpcHRcbkF1dGhvcjogUGhpbGlwcCBXb2xmZXIgPHBoLndvbGZlckBnbWFpbC5jb20+XG5EZXNjcmlwdGlvbjogU3ludGF4IEhpZ2hsaWdodGluZyBmb3IgdGhlIFRhZ2dlciBTY3JpcHQgYXMgdXNlZCBieSBNdXNpY0JyYWlueiBQaWNhcmQuXG5XZWJzaXRlOiBodHRwczovL3BpY2FyZC5tdXNpY2JyYWluei5vcmdcbiAqL1xuZnVuY3Rpb24gdGFnZ2Vyc2NyaXB0KGhsanMpIHtcblxuICB2YXIgQ09NTUVOVCA9IHtcbiAgICBjbGFzc05hbWU6ICdjb21tZW50JyxcbiAgICBiZWdpbjogL1xcJG5vb3BcXCgvLFxuICAgIGVuZDogL1xcKS8sXG4gICAgY29udGFpbnM6IFt7XG4gICAgICBiZWdpbjogL1xcKC8sXG4gICAgICBlbmQ6IC9cXCkvLFxuICAgICAgY29udGFpbnM6IFsnc2VsZicsIHtcbiAgICAgICAgYmVnaW46IC9cXFxcLi9cbiAgICAgIH1dXG4gICAgfV0sXG4gICAgcmVsZXZhbmNlOiAxMFxuICB9O1xuXG4gIHZhciBGVU5DVElPTiA9IHtcbiAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICBiZWdpbjogL1xcJCg/IW5vb3ApW2EtekEtWl1bX2EtekEtWjAtOV0qLyxcbiAgICBlbmQ6IC9cXCgvLFxuICAgIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgfTtcblxuICB2YXIgVkFSSUFCTEUgPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIGJlZ2luOiAvJVtfYS16QS1aMC05Ol0qLyxcbiAgICBlbmQ6ICclJ1xuICB9O1xuXG4gIHZhciBFU0NBUEVfU0VRVUVOQ0UgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICBiZWdpbjogL1xcXFwuL1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1RhZ2dlciBTY3JpcHQnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBDT01NRU5ULFxuICAgICAgRlVOQ1RJT04sXG4gICAgICBWQVJJQUJMRSxcbiAgICAgIEVTQ0FQRV9TRVFVRU5DRVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0YWdnZXJzY3JpcHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9