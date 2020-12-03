(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_prolog"],{

/***/ "./node_modules/highlight.js/lib/languages/prolog.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/prolog.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Prolog
Description: Prolog is a general purpose logic programming language associated with artificial intelligence and computational linguistics.
Author: Raivo Laanemets <raivo@infdot.com>
Website: https://en.wikipedia.org/wiki/Prolog
*/

function prolog(hljs) {

  var ATOM = {

    begin: /[a-z][A-Za-z0-9_]*/,
    relevance: 0
  };

  var VAR = {

    className: 'symbol',
    variants: [
      {begin: /[A-Z][a-zA-Z0-9_]*/},
      {begin: /_[A-Za-z0-9_]*/},
    ],
    relevance: 0
  };

  var PARENTED = {

    begin: /\(/,
    end: /\)/,
    relevance: 0
  };

  var LIST = {

    begin: /\[/,
    end: /\]/
  };

  var LINE_COMMENT = {

    className: 'comment',
    begin: /%/, end: /$/,
    contains: [hljs.PHRASAL_WORDS_MODE]
  };

  var BACKTICK_STRING = {

    className: 'string',
    begin: /`/, end: /`/,
    contains: [hljs.BACKSLASH_ESCAPE]
  };

  var CHAR_CODE = {

    className: 'string', // 0'a etc.
    begin: /0\'(\\\'|.)/
  };

  var SPACE_CODE = {

    className: 'string',
    begin: /0\'\\s/ // 0'\s
  };

  var PRED_OP = { // relevance booster
    begin: /:-/
  };

  var inner = [

    ATOM,
    VAR,
    PARENTED,
    PRED_OP,
    LIST,
    LINE_COMMENT,
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.APOS_STRING_MODE,
    BACKTICK_STRING,
    CHAR_CODE,
    SPACE_CODE,
    hljs.C_NUMBER_MODE
  ];

  PARENTED.contains = inner;
  LIST.contains = inner;

  return {
    name: 'Prolog',
    contains: inner.concat([
      {begin: /\.$/} // relevance booster
    ])
  };
}

module.exports = prolog;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3Byb2xvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLDRCQUE0QjtBQUNuQyxPQUFPLHdCQUF3QjtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sYUFBYTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9wcm9sb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFByb2xvZ1xuRGVzY3JpcHRpb246IFByb2xvZyBpcyBhIGdlbmVyYWwgcHVycG9zZSBsb2dpYyBwcm9ncmFtbWluZyBsYW5ndWFnZSBhc3NvY2lhdGVkIHdpdGggYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgYW5kIGNvbXB1dGF0aW9uYWwgbGluZ3Vpc3RpY3MuXG5BdXRob3I6IFJhaXZvIExhYW5lbWV0cyA8cmFpdm9AaW5mZG90LmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1Byb2xvZ1xuKi9cblxuZnVuY3Rpb24gcHJvbG9nKGhsanMpIHtcblxuICB2YXIgQVRPTSA9IHtcblxuICAgIGJlZ2luOiAvW2Etel1bQS1aYS16MC05X10qLyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICB2YXIgVkFSID0ge1xuXG4gICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge2JlZ2luOiAvW0EtWl1bYS16QS1aMC05X10qL30sXG4gICAgICB7YmVnaW46IC9fW0EtWmEtejAtOV9dKi99LFxuICAgIF0sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgdmFyIFBBUkVOVEVEID0ge1xuXG4gICAgYmVnaW46IC9cXCgvLFxuICAgIGVuZDogL1xcKS8sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgdmFyIExJU1QgPSB7XG5cbiAgICBiZWdpbjogL1xcWy8sXG4gICAgZW5kOiAvXFxdL1xuICB9O1xuXG4gIHZhciBMSU5FX0NPTU1FTlQgPSB7XG5cbiAgICBjbGFzc05hbWU6ICdjb21tZW50JyxcbiAgICBiZWdpbjogLyUvLCBlbmQ6IC8kLyxcbiAgICBjb250YWluczogW2hsanMuUEhSQVNBTF9XT1JEU19NT0RFXVxuICB9O1xuXG4gIHZhciBCQUNLVElDS19TVFJJTkcgPSB7XG5cbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvYC8sIGVuZDogL2AvLFxuICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXVxuICB9O1xuXG4gIHZhciBDSEFSX0NPREUgPSB7XG5cbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLCAvLyAwJ2EgZXRjLlxuICAgIGJlZ2luOiAvMFxcJyhcXFxcXFwnfC4pL1xuICB9O1xuXG4gIHZhciBTUEFDRV9DT0RFID0ge1xuXG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogLzBcXCdcXFxccy8gLy8gMCdcXHNcbiAgfTtcblxuICB2YXIgUFJFRF9PUCA9IHsgLy8gcmVsZXZhbmNlIGJvb3N0ZXJcbiAgICBiZWdpbjogLzotL1xuICB9O1xuXG4gIHZhciBpbm5lciA9IFtcblxuICAgIEFUT00sXG4gICAgVkFSLFxuICAgIFBBUkVOVEVELFxuICAgIFBSRURfT1AsXG4gICAgTElTVCxcbiAgICBMSU5FX0NPTU1FTlQsXG4gICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICBCQUNLVElDS19TVFJJTkcsXG4gICAgQ0hBUl9DT0RFLFxuICAgIFNQQUNFX0NPREUsXG4gICAgaGxqcy5DX05VTUJFUl9NT0RFXG4gIF07XG5cbiAgUEFSRU5URUQuY29udGFpbnMgPSBpbm5lcjtcbiAgTElTVC5jb250YWlucyA9IGlubmVyO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1Byb2xvZycsXG4gICAgY29udGFpbnM6IGlubmVyLmNvbmNhdChbXG4gICAgICB7YmVnaW46IC9cXC4kL30gLy8gcmVsZXZhbmNlIGJvb3N0ZXJcbiAgICBdKVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb2xvZztcbiJdLCJzb3VyY2VSb290IjoiIn0=