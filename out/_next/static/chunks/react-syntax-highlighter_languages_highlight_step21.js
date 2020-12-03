(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_step21"],{

/***/ "./node_modules/highlight.js/lib/languages/step21.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/step21.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: STEP Part 21
Contributors: Adam Joseph Cook <adam.joseph.cook@gmail.com>
Description: Syntax highlighter for STEP Part 21 files (ISO 10303-21).
Website: https://en.wikipedia.org/wiki/ISO_10303-21
*/

function step21(hljs) {
  var STEP21_IDENT_RE = '[A-Z_][A-Z0-9_.]*';
  var STEP21_KEYWORDS = {
    $pattern: STEP21_IDENT_RE,
    keyword: 'HEADER ENDSEC DATA'
  };
  var STEP21_START = {
    className: 'meta',
    begin: 'ISO-10303-21;',
    relevance: 10
  };
  var STEP21_CLOSE = {
    className: 'meta',
    begin: 'END-ISO-10303-21;',
    relevance: 10
  };

  return {
    name: 'STEP Part 21',
    aliases: ['p21', 'step', 'stp'],
    case_insensitive: true, // STEP 21 is case insensitive in theory, in practice all non-comments are capitalized.
    keywords: STEP21_KEYWORDS,
    contains: [
      STEP21_START,
      STEP21_CLOSE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.COMMENT('/\\*\\*!', '\\*/'),
      hljs.C_NUMBER_MODE,
      hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
      {
        className: 'string',
        begin: "'", end: "'"
      },
      {
        className: 'symbol',
        variants: [
          {
            begin: '#', end: '\\d+',
            illegal: '\\W'
          }
        ]
      }
    ]
  };
}

module.exports = step21;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3N0ZXAyMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxjQUFjO0FBQ3pELDRDQUE0QyxjQUFjO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9zdGVwMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFNURVAgUGFydCAyMVxuQ29udHJpYnV0b3JzOiBBZGFtIEpvc2VwaCBDb29rIDxhZGFtLmpvc2VwaC5jb29rQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBTeW50YXggaGlnaGxpZ2h0ZXIgZm9yIFNURVAgUGFydCAyMSBmaWxlcyAoSVNPIDEwMzAzLTIxKS5cbldlYnNpdGU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT18xMDMwMy0yMVxuKi9cblxuZnVuY3Rpb24gc3RlcDIxKGhsanMpIHtcbiAgdmFyIFNURVAyMV9JREVOVF9SRSA9ICdbQS1aX11bQS1aMC05Xy5dKic7XG4gIHZhciBTVEVQMjFfS0VZV09SRFMgPSB7XG4gICAgJHBhdHRlcm46IFNURVAyMV9JREVOVF9SRSxcbiAgICBrZXl3b3JkOiAnSEVBREVSIEVORFNFQyBEQVRBJ1xuICB9O1xuICB2YXIgU1RFUDIxX1NUQVJUID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAnSVNPLTEwMzAzLTIxOycsXG4gICAgcmVsZXZhbmNlOiAxMFxuICB9O1xuICB2YXIgU1RFUDIxX0NMT1NFID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAnRU5ELUlTTy0xMDMwMy0yMTsnLFxuICAgIHJlbGV2YW5jZTogMTBcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdTVEVQIFBhcnQgMjEnLFxuICAgIGFsaWFzZXM6IFsncDIxJywgJ3N0ZXAnLCAnc3RwJ10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSwgLy8gU1RFUCAyMSBpcyBjYXNlIGluc2Vuc2l0aXZlIGluIHRoZW9yeSwgaW4gcHJhY3RpY2UgYWxsIG5vbi1jb21tZW50cyBhcmUgY2FwaXRhbGl6ZWQuXG4gICAga2V5d29yZHM6IFNURVAyMV9LRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAgU1RFUDIxX1NUQVJULFxuICAgICAgU1RFUDIxX0NMT1NFLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ09NTUVOVCgnL1xcXFwqXFxcXCohJywgJ1xcXFwqLycpLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuQVBPU19TVFJJTkdfTU9ERSwge2lsbGVnYWw6IG51bGx9KSxcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7aWxsZWdhbDogbnVsbH0pLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogXCInXCIsIGVuZDogXCInXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICcjJywgZW5kOiAnXFxcXGQrJyxcbiAgICAgICAgICAgIGlsbGVnYWw6ICdcXFxcVydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RlcDIxO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==