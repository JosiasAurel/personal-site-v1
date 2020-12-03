(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_clean"],{

/***/ "./node_modules/highlight.js/lib/languages/clean.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/clean.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Clean
Author: Camil Staps <info@camilstaps.nl>
Category: functional
Website: http://clean.cs.ru.nl
*/

/** @type LanguageFn */
function clean(hljs) {
  return {
    name: 'Clean',
    aliases: ['clean','icl','dcl'],
    keywords: {
      keyword:
        'if let in with where case of class instance otherwise ' +
        'implementation definition system module from import qualified as ' +
        'special code inline foreign export ccall stdcall generic derive ' +
        'infix infixl infixr',
      built_in:
        'Int Real Char Bool',
      literal:
        'True False'
    },
    contains: [

      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,

      {begin: '->|<-[|:]?|#!?|>>=|\\{\\||\\|\\}|:==|=:|<>'} // relevance booster
    ]
  };
}

module.exports = clean;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NsZWFuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLDhCQUE4QixVQUFVLFlBQVk7QUFDM0Q7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfY2xlYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IENsZWFuXG5BdXRob3I6IENhbWlsIFN0YXBzIDxpbmZvQGNhbWlsc3RhcHMubmw+XG5DYXRlZ29yeTogZnVuY3Rpb25hbFxuV2Vic2l0ZTogaHR0cDovL2NsZWFuLmNzLnJ1Lm5sXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gY2xlYW4oaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDbGVhbicsXG4gICAgYWxpYXNlczogWydjbGVhbicsJ2ljbCcsJ2RjbCddLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOlxuICAgICAgICAnaWYgbGV0IGluIHdpdGggd2hlcmUgY2FzZSBvZiBjbGFzcyBpbnN0YW5jZSBvdGhlcndpc2UgJyArXG4gICAgICAgICdpbXBsZW1lbnRhdGlvbiBkZWZpbml0aW9uIHN5c3RlbSBtb2R1bGUgZnJvbSBpbXBvcnQgcXVhbGlmaWVkIGFzICcgK1xuICAgICAgICAnc3BlY2lhbCBjb2RlIGlubGluZSBmb3JlaWduIGV4cG9ydCBjY2FsbCBzdGRjYWxsIGdlbmVyaWMgZGVyaXZlICcgK1xuICAgICAgICAnaW5maXggaW5maXhsIGluZml4cicsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgJ0ludCBSZWFsIENoYXIgQm9vbCcsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAnVHJ1ZSBGYWxzZSdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG5cbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuXG4gICAgICB7YmVnaW46ICctPnw8LVt8Ol0/fCMhP3w+Pj18XFxcXHtcXFxcfHxcXFxcfFxcXFx9fDo9PXw9Onw8Pid9IC8vIHJlbGV2YW5jZSBib29zdGVyXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsZWFuO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==