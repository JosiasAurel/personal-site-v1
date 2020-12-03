(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_cal"],{

/***/ "./node_modules/highlight.js/lib/languages/cal.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/cal.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: C/AL
Author: Kenneth Fuglsang Christensen <kfuglsang@gmail.com>
Description: Provides highlighting of Microsoft Dynamics NAV C/AL code files
Website: https://docs.microsoft.com/en-us/dynamics-nav/programming-in-c-al
*/

/** @type LanguageFn */
function cal(hljs) {
  var KEYWORDS =
    'div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to ' +
    'until while with var';
  var LITERALS = 'false true';
  var COMMENT_MODES = [
    hljs.C_LINE_COMMENT_MODE,
    hljs.COMMENT(
      /\{/,
      /\}/,
      {
        relevance: 0
      }
    ),
    hljs.COMMENT(
      /\(\*/,
      /\*\)/,
      {
        relevance: 10
      }
    )
  ];
  var STRING = {
    className: 'string',
    begin: /'/, end: /'/,
    contains: [{begin: /''/}]
  };
  var CHAR_STRING = {
    className: 'string', begin: /(#\d+)+/
  };
  var DATE = {
      className: 'number',
      begin: '\\b\\d+(\\.\\d+)?(DT|D|T)',
      relevance: 0
  };
  var DBL_QUOTED_VARIABLE = {
      className: 'string', // not a string technically but makes sense to be highlighted in the same style
      begin: '"',
      end: '"'
  };

  var PROCEDURE = {
    className: 'function',
    beginKeywords: 'procedure', end: /[:;]/,
    keywords: 'procedure|10',
    contains: [
      hljs.TITLE_MODE,
      {
        className: 'params',
        begin: /\(/, end: /\)/,
        keywords: KEYWORDS,
        contains: [STRING, CHAR_STRING]
      }
    ].concat(COMMENT_MODES)
  };

  var OBJECT = {
    className: 'class',
    begin: 'OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)',
    returnBegin: true,
    contains: [
      hljs.TITLE_MODE,
        PROCEDURE
    ]
  };

  return {
    name: 'C/AL',
    case_insensitive: true,
    keywords: { keyword: KEYWORDS, literal: LITERALS },
    illegal: /\/\*/,
    contains: [
      STRING, CHAR_STRING,
      DATE, DBL_QUOTED_VARIABLE,
      hljs.NUMBER_MODE,
      OBJECT,
      PROCEDURE
    ]
  };
}

module.exports = cal;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1Q0FBdUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9jYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEMvQUxcbkF1dGhvcjogS2VubmV0aCBGdWdsc2FuZyBDaHJpc3RlbnNlbiA8a2Z1Z2xzYW5nQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBQcm92aWRlcyBoaWdobGlnaHRpbmcgb2YgTWljcm9zb2Z0IER5bmFtaWNzIE5BViBDL0FMIGNvZGUgZmlsZXNcbldlYnNpdGU6IGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2R5bmFtaWNzLW5hdi9wcm9ncmFtbWluZy1pbi1jLWFsXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gY2FsKGhsanMpIHtcbiAgdmFyIEtFWVdPUkRTID1cbiAgICAnZGl2IG1vZCBpbiBhbmQgb3Igbm90IHhvciBhc3NlcnRlcnJvciBiZWdpbiBjYXNlIGRvIGRvd250byBlbHNlIGVuZCBleGl0IGZvciBpZiBvZiByZXBlYXQgdGhlbiB0byAnICtcbiAgICAndW50aWwgd2hpbGUgd2l0aCB2YXInO1xuICB2YXIgTElURVJBTFMgPSAnZmFsc2UgdHJ1ZSc7XG4gIHZhciBDT01NRU5UX01PREVTID0gW1xuICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLkNPTU1FTlQoXG4gICAgICAvXFx7LyxcbiAgICAgIC9cXH0vLFxuICAgICAge1xuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICApLFxuICAgIGhsanMuQ09NTUVOVChcbiAgICAgIC9cXChcXCovLFxuICAgICAgL1xcKlxcKS8sXG4gICAgICB7XG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH1cbiAgICApXG4gIF07XG4gIHZhciBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogLycvLCBlbmQ6IC8nLyxcbiAgICBjb250YWluczogW3tiZWdpbjogLycnL31dXG4gIH07XG4gIHZhciBDSEFSX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLCBiZWdpbjogLygjXFxkKykrL1xuICB9O1xuICB2YXIgREFURSA9IHtcbiAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICBiZWdpbjogJ1xcXFxiXFxcXGQrKFxcXFwuXFxcXGQrKT8oRFR8RHxUKScsXG4gICAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgdmFyIERCTF9RVU9URURfVkFSSUFCTEUgPSB7XG4gICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLCAvLyBub3QgYSBzdHJpbmcgdGVjaG5pY2FsbHkgYnV0IG1ha2VzIHNlbnNlIHRvIGJlIGhpZ2hsaWdodGVkIGluIHRoZSBzYW1lIHN0eWxlXG4gICAgICBiZWdpbjogJ1wiJyxcbiAgICAgIGVuZDogJ1wiJ1xuICB9O1xuXG4gIHZhciBQUk9DRURVUkUgPSB7XG4gICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgIGJlZ2luS2V5d29yZHM6ICdwcm9jZWR1cmUnLCBlbmQ6IC9bOjtdLyxcbiAgICBrZXl3b3JkczogJ3Byb2NlZHVyZXwxMCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuVElUTEVfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvLFxuICAgICAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgICAgIGNvbnRhaW5zOiBbU1RSSU5HLCBDSEFSX1NUUklOR11cbiAgICAgIH1cbiAgICBdLmNvbmNhdChDT01NRU5UX01PREVTKVxuICB9O1xuXG4gIHZhciBPQkpFQ1QgPSB7XG4gICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgIGJlZ2luOiAnT0JKRUNUIChUYWJsZXxGb3JtfFJlcG9ydHxEYXRhcG9ydHxDb2RldW5pdHxYTUxwb3J0fE1lbnVTdWl0ZXxQYWdlfFF1ZXJ5KSAoXFxcXGQrKSAoW15cXFxcclxcXFxuXSspJyxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5USVRMRV9NT0RFLFxuICAgICAgICBQUk9DRURVUkVcbiAgICBdXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQy9BTCcsXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3JkczogeyBrZXl3b3JkOiBLRVlXT1JEUywgbGl0ZXJhbDogTElURVJBTFMgfSxcbiAgICBpbGxlZ2FsOiAvXFwvXFwqLyxcbiAgICBjb250YWluczogW1xuICAgICAgU1RSSU5HLCBDSEFSX1NUUklORyxcbiAgICAgIERBVEUsIERCTF9RVU9URURfVkFSSUFCTEUsXG4gICAgICBobGpzLk5VTUJFUl9NT0RFLFxuICAgICAgT0JKRUNULFxuICAgICAgUFJPQ0VEVVJFXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=