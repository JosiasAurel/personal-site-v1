(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_erlangRepl"],{

/***/ "./node_modules/highlight.js/lib/languages/erlang-repl.js":
/*!****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/erlang-repl.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Erlang REPL
Author: Sergey Ignatov <sergey@ignatov.spb.su>
Website: https://www.erlang.org
Category: functional
*/

function erlangRepl(hljs) {
  return {
    name: 'Erlang REPL',
    keywords: {
      built_in:
        'spawn spawn_link self',
      keyword:
        'after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if ' +
        'let not of or orelse|10 query receive rem try when xor'
    },
    contains: [
      {
        className: 'meta', begin: '^[0-9]+> ',
        relevance: 10
      },
      hljs.COMMENT('%', '$'),
      {
        className: 'number',
        begin: '\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)',
        relevance: 0
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        begin: '\\?(::)?([A-Z]\\w*(::)?)+'
      },
      {
        begin: '->'
      },
      {
        begin: 'ok'
      },
      {
        begin: '!'
      },
      {
        begin: '(\\b[a-z\'][a-zA-Z0-9_\']*:[a-z\'][a-zA-Z0-9_\']*)|(\\b[a-z\'][a-zA-Z0-9_\']*)',
        relevance: 0
      },
      {
        begin: '[A-Z][a-zA-Z0-9_\']*',
        relevance: 0
      }
    ]
  };
}

module.exports = erlangRepl;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2VybGFuZy1yZXBsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9lcmxhbmdSZXBsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBFcmxhbmcgUkVQTFxuQXV0aG9yOiBTZXJnZXkgSWduYXRvdiA8c2VyZ2V5QGlnbmF0b3Yuc3BiLnN1PlxuV2Vic2l0ZTogaHR0cHM6Ly93d3cuZXJsYW5nLm9yZ1xuQ2F0ZWdvcnk6IGZ1bmN0aW9uYWxcbiovXG5cbmZ1bmN0aW9uIGVybGFuZ1JlcGwoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdFcmxhbmcgUkVQTCcsXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAnc3Bhd24gc3Bhd25fbGluayBzZWxmJyxcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdhZnRlciBhbmQgYW5kYWxzb3wxMCBiYW5kIGJlZ2luIGJub3QgYm9yIGJzbCBic3IgYnhvciBjYXNlIGNhdGNoIGNvbmQgZGl2IGVuZCBmdW4gaWYgJyArXG4gICAgICAgICdsZXQgbm90IG9mIG9yIG9yZWxzZXwxMCBxdWVyeSByZWNlaXZlIHJlbSB0cnkgd2hlbiB4b3InXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJywgYmVnaW46ICdeWzAtOV0rPiAnLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAgaGxqcy5DT01NRU5UKCclJywgJyQnKSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYihcXFxcZCsoX1xcXFxkKykqI1thLWZBLUYwLTldKyhfW2EtZkEtRjAtOV0rKSp8XFxcXGQrKF9cXFxcZCspKihcXFxcLlxcXFxkKyhfXFxcXGQrKSopPyhbZUVdWy0rXT9cXFxcZCspPyknLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFw/KDo6KT8oW0EtWl1cXFxcdyooOjopPykrJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICctPidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnb2snXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJyEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJyhcXFxcYlthLXpcXCddW2EtekEtWjAtOV9cXCddKjpbYS16XFwnXVthLXpBLVowLTlfXFwnXSopfChcXFxcYlthLXpcXCddW2EtekEtWjAtOV9cXCddKiknLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnW0EtWl1bYS16QS1aMC05X1xcJ10qJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVybGFuZ1JlcGw7XG4iXSwic291cmNlUm9vdCI6IiJ9