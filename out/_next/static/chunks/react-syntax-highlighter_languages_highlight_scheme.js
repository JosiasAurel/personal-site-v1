(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_scheme"],{

/***/ "./node_modules/highlight.js/lib/languages/scheme.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/scheme.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Scheme
Description: Scheme is a programming language in the Lisp family.
             (keywords based on http://community.schemewiki.org/?scheme-keywords)
Author: JP Verkamp <me@jverkamp.com>
Contributors: Ivan Sagalaev <maniac@softwaremaniacs.org>
Origin: clojure.js
Website: http://community.schemewiki.org/?what-is-scheme
Category: lisp
*/

function scheme(hljs) {
  var SCHEME_IDENT_RE = '[^\\(\\)\\[\\]\\{\\}",\'`;#|\\\\\\s]+';
  var SCHEME_SIMPLE_NUMBER_RE = '(\\-|\\+)?\\d+([./]\\d+)?';
  var SCHEME_COMPLEX_NUMBER_RE = SCHEME_SIMPLE_NUMBER_RE + '[+\\-]' + SCHEME_SIMPLE_NUMBER_RE + 'i';
  var KEYWORDS = {
    $pattern: SCHEME_IDENT_RE,
    'builtin-name':
      'case-lambda call/cc class define-class exit-handler field import ' +
      'inherit init-field interface let*-values let-values let/ec mixin ' +
      'opt-lambda override protect provide public rename require ' +
      'require-for-syntax syntax syntax-case syntax-error unit/sig unless ' +
      'when with-syntax and begin call-with-current-continuation ' +
      'call-with-input-file call-with-output-file case cond define ' +
      'define-syntax delay do dynamic-wind else for-each if lambda let let* ' +
      'let-syntax letrec letrec-syntax map or syntax-rules \' * + , ,@ - ... / ' +
      '; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan ' +
      'boolean? caar cadr call-with-input-file call-with-output-file ' +
      'call-with-values car cdddar cddddr cdr ceiling char->integer ' +
      'char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? ' +
      'char-downcase char-lower-case? char-numeric? char-ready? char-upcase ' +
      'char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? ' +
      'char? close-input-port close-output-port complex? cons cos ' +
      'current-input-port current-output-port denominator display eof-object? ' +
      'eq? equal? eqv? eval even? exact->inexact exact? exp expt floor ' +
      'force gcd imag-part inexact->exact inexact? input-port? integer->char ' +
      'integer? interaction-environment lcm length list list->string ' +
      'list->vector list-ref list-tail list? load log magnitude make-polar ' +
      'make-rectangular make-string make-vector max member memq memv min ' +
      'modulo negative? newline not null-environment null? number->string ' +
      'number? numerator odd? open-input-file open-output-file output-port? ' +
      'pair? peek-char port? positive? procedure? quasiquote quote quotient ' +
      'rational? rationalize read read-char real-part real? remainder reverse ' +
      'round scheme-report-environment set! set-car! set-cdr! sin sqrt string ' +
      'string->list string->number string->symbol string-append string-ci<=? ' +
      'string-ci<? string-ci=? string-ci>=? string-ci>? string-copy ' +
      'string-fill! string-length string-ref string-set! string<=? string<? ' +
      'string=? string>=? string>? string? substring symbol->string symbol? ' +
      'tan transcript-off transcript-on truncate values vector ' +
      'vector->list vector-fill! vector-length vector-ref vector-set! ' +
      'with-input-from-file with-output-to-file write write-char zero?'
  };

  var LITERAL = {
    className: 'literal',
    begin: '(#t|#f|#\\\\' + SCHEME_IDENT_RE + '|#\\\\.)'
  };

  var NUMBER = {
    className: 'number',
    variants: [
      { begin: SCHEME_SIMPLE_NUMBER_RE, relevance: 0 },
      { begin: SCHEME_COMPLEX_NUMBER_RE, relevance: 0 },
      { begin: '#b[0-1]+(/[0-1]+)?' },
      { begin: '#o[0-7]+(/[0-7]+)?' },
      { begin: '#x[0-9a-f]+(/[0-9a-f]+)?' }
    ]
  };

  var STRING = hljs.QUOTE_STRING_MODE;

  var COMMENT_MODES = [
    hljs.COMMENT(
      ';',
      '$',
      {
        relevance: 0
      }
    ),
    hljs.COMMENT('#\\|', '\\|#')
  ];

  var IDENT = {
    begin: SCHEME_IDENT_RE,
    relevance: 0
  };

  var QUOTED_IDENT = {
    className: 'symbol',
    begin: '\'' + SCHEME_IDENT_RE
  };

  var BODY = {
    endsWithParent: true,
    relevance: 0
  };

  var QUOTED_LIST = {
    variants: [
      { begin: /'/ },
      { begin: '`' }
    ],
    contains: [
      {
        begin: '\\(', end: '\\)',
        contains: ['self', LITERAL, STRING, NUMBER, IDENT, QUOTED_IDENT]
      }
    ]
  };

  var NAME = {
    className: 'name',
    begin: SCHEME_IDENT_RE,
    keywords: KEYWORDS
  };

  var LAMBDA = {
    begin: /lambda/, endsWithParent: true, returnBegin: true,
    contains: [
      NAME,
      {
        begin: /\(/, end: /\)/, endsParent: true,
        contains: [IDENT],
      }
    ]
  };

  var LIST = {
    variants: [
      { begin: '\\(', end: '\\)' },
      { begin: '\\[', end: '\\]' }
    ],
    contains: [LAMBDA, NAME, BODY]
  };

  BODY.contains = [LITERAL, NUMBER, STRING, IDENT, QUOTED_IDENT, QUOTED_LIST, LIST].concat(COMMENT_MODES);

  return {
    name: 'Scheme',
    illegal: /\S/,
    contains: [hljs.SHEBANG(), NUMBER, STRING, QUOTED_IDENT, QUOTED_LIST, LIST].concat(COMMENT_MODES)
  };
}

module.exports = scheme;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3NjaGVtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxHQUFHLE1BQU07QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTyw4QkFBOEI7QUFDckMsT0FBTyw4QkFBOEI7QUFDckMsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyxhQUFhO0FBQ3BCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfc2NoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBTY2hlbWVcbkRlc2NyaXB0aW9uOiBTY2hlbWUgaXMgYSBwcm9ncmFtbWluZyBsYW5ndWFnZSBpbiB0aGUgTGlzcCBmYW1pbHkuXG4gICAgICAgICAgICAgKGtleXdvcmRzIGJhc2VkIG9uIGh0dHA6Ly9jb21tdW5pdHkuc2NoZW1ld2lraS5vcmcvP3NjaGVtZS1rZXl3b3JkcylcbkF1dGhvcjogSlAgVmVya2FtcCA8bWVAanZlcmthbXAuY29tPlxuQ29udHJpYnV0b3JzOiBJdmFuIFNhZ2FsYWV2IDxtYW5pYWNAc29mdHdhcmVtYW5pYWNzLm9yZz5cbk9yaWdpbjogY2xvanVyZS5qc1xuV2Vic2l0ZTogaHR0cDovL2NvbW11bml0eS5zY2hlbWV3aWtpLm9yZy8/d2hhdC1pcy1zY2hlbWVcbkNhdGVnb3J5OiBsaXNwXG4qL1xuXG5mdW5jdGlvbiBzY2hlbWUoaGxqcykge1xuICB2YXIgU0NIRU1FX0lERU5UX1JFID0gJ1teXFxcXChcXFxcKVxcXFxbXFxcXF1cXFxce1xcXFx9XCIsXFwnYDsjfFxcXFxcXFxcXFxcXHNdKyc7XG4gIHZhciBTQ0hFTUVfU0lNUExFX05VTUJFUl9SRSA9ICcoXFxcXC18XFxcXCspP1xcXFxkKyhbLi9dXFxcXGQrKT8nO1xuICB2YXIgU0NIRU1FX0NPTVBMRVhfTlVNQkVSX1JFID0gU0NIRU1FX1NJTVBMRV9OVU1CRVJfUkUgKyAnWytcXFxcLV0nICsgU0NIRU1FX1NJTVBMRV9OVU1CRVJfUkUgKyAnaSc7XG4gIHZhciBLRVlXT1JEUyA9IHtcbiAgICAkcGF0dGVybjogU0NIRU1FX0lERU5UX1JFLFxuICAgICdidWlsdGluLW5hbWUnOlxuICAgICAgJ2Nhc2UtbGFtYmRhIGNhbGwvY2MgY2xhc3MgZGVmaW5lLWNsYXNzIGV4aXQtaGFuZGxlciBmaWVsZCBpbXBvcnQgJyArXG4gICAgICAnaW5oZXJpdCBpbml0LWZpZWxkIGludGVyZmFjZSBsZXQqLXZhbHVlcyBsZXQtdmFsdWVzIGxldC9lYyBtaXhpbiAnICtcbiAgICAgICdvcHQtbGFtYmRhIG92ZXJyaWRlIHByb3RlY3QgcHJvdmlkZSBwdWJsaWMgcmVuYW1lIHJlcXVpcmUgJyArXG4gICAgICAncmVxdWlyZS1mb3Itc3ludGF4IHN5bnRheCBzeW50YXgtY2FzZSBzeW50YXgtZXJyb3IgdW5pdC9zaWcgdW5sZXNzICcgK1xuICAgICAgJ3doZW4gd2l0aC1zeW50YXggYW5kIGJlZ2luIGNhbGwtd2l0aC1jdXJyZW50LWNvbnRpbnVhdGlvbiAnICtcbiAgICAgICdjYWxsLXdpdGgtaW5wdXQtZmlsZSBjYWxsLXdpdGgtb3V0cHV0LWZpbGUgY2FzZSBjb25kIGRlZmluZSAnICtcbiAgICAgICdkZWZpbmUtc3ludGF4IGRlbGF5IGRvIGR5bmFtaWMtd2luZCBlbHNlIGZvci1lYWNoIGlmIGxhbWJkYSBsZXQgbGV0KiAnICtcbiAgICAgICdsZXQtc3ludGF4IGxldHJlYyBsZXRyZWMtc3ludGF4IG1hcCBvciBzeW50YXgtcnVsZXMgXFwnICogKyAsICxAIC0gLi4uIC8gJyArXG4gICAgICAnOyA8IDw9ID0gPT4gPiA+PSBgIGFicyBhY29zIGFuZ2xlIGFwcGVuZCBhcHBseSBhc2luIGFzc29jIGFzc3EgYXNzdiBhdGFuICcgK1xuICAgICAgJ2Jvb2xlYW4/IGNhYXIgY2FkciBjYWxsLXdpdGgtaW5wdXQtZmlsZSBjYWxsLXdpdGgtb3V0cHV0LWZpbGUgJyArXG4gICAgICAnY2FsbC13aXRoLXZhbHVlcyBjYXIgY2RkZGFyIGNkZGRkciBjZHIgY2VpbGluZyBjaGFyLT5pbnRlZ2VyICcgK1xuICAgICAgJ2NoYXItYWxwaGFiZXRpYz8gY2hhci1jaTw9PyBjaGFyLWNpPD8gY2hhci1jaT0/IGNoYXItY2k+PT8gY2hhci1jaT4/ICcgK1xuICAgICAgJ2NoYXItZG93bmNhc2UgY2hhci1sb3dlci1jYXNlPyBjaGFyLW51bWVyaWM/IGNoYXItcmVhZHk/IGNoYXItdXBjYXNlICcgK1xuICAgICAgJ2NoYXItdXBwZXItY2FzZT8gY2hhci13aGl0ZXNwYWNlPyBjaGFyPD0/IGNoYXI8PyBjaGFyPT8gY2hhcj49PyBjaGFyPj8gJyArXG4gICAgICAnY2hhcj8gY2xvc2UtaW5wdXQtcG9ydCBjbG9zZS1vdXRwdXQtcG9ydCBjb21wbGV4PyBjb25zIGNvcyAnICtcbiAgICAgICdjdXJyZW50LWlucHV0LXBvcnQgY3VycmVudC1vdXRwdXQtcG9ydCBkZW5vbWluYXRvciBkaXNwbGF5IGVvZi1vYmplY3Q/ICcgK1xuICAgICAgJ2VxPyBlcXVhbD8gZXF2PyBldmFsIGV2ZW4/IGV4YWN0LT5pbmV4YWN0IGV4YWN0PyBleHAgZXhwdCBmbG9vciAnICtcbiAgICAgICdmb3JjZSBnY2QgaW1hZy1wYXJ0IGluZXhhY3QtPmV4YWN0IGluZXhhY3Q/IGlucHV0LXBvcnQ/IGludGVnZXItPmNoYXIgJyArXG4gICAgICAnaW50ZWdlcj8gaW50ZXJhY3Rpb24tZW52aXJvbm1lbnQgbGNtIGxlbmd0aCBsaXN0IGxpc3QtPnN0cmluZyAnICtcbiAgICAgICdsaXN0LT52ZWN0b3IgbGlzdC1yZWYgbGlzdC10YWlsIGxpc3Q/IGxvYWQgbG9nIG1hZ25pdHVkZSBtYWtlLXBvbGFyICcgK1xuICAgICAgJ21ha2UtcmVjdGFuZ3VsYXIgbWFrZS1zdHJpbmcgbWFrZS12ZWN0b3IgbWF4IG1lbWJlciBtZW1xIG1lbXYgbWluICcgK1xuICAgICAgJ21vZHVsbyBuZWdhdGl2ZT8gbmV3bGluZSBub3QgbnVsbC1lbnZpcm9ubWVudCBudWxsPyBudW1iZXItPnN0cmluZyAnICtcbiAgICAgICdudW1iZXI/IG51bWVyYXRvciBvZGQ/IG9wZW4taW5wdXQtZmlsZSBvcGVuLW91dHB1dC1maWxlIG91dHB1dC1wb3J0PyAnICtcbiAgICAgICdwYWlyPyBwZWVrLWNoYXIgcG9ydD8gcG9zaXRpdmU/IHByb2NlZHVyZT8gcXVhc2lxdW90ZSBxdW90ZSBxdW90aWVudCAnICtcbiAgICAgICdyYXRpb25hbD8gcmF0aW9uYWxpemUgcmVhZCByZWFkLWNoYXIgcmVhbC1wYXJ0IHJlYWw/IHJlbWFpbmRlciByZXZlcnNlICcgK1xuICAgICAgJ3JvdW5kIHNjaGVtZS1yZXBvcnQtZW52aXJvbm1lbnQgc2V0ISBzZXQtY2FyISBzZXQtY2RyISBzaW4gc3FydCBzdHJpbmcgJyArXG4gICAgICAnc3RyaW5nLT5saXN0IHN0cmluZy0+bnVtYmVyIHN0cmluZy0+c3ltYm9sIHN0cmluZy1hcHBlbmQgc3RyaW5nLWNpPD0/ICcgK1xuICAgICAgJ3N0cmluZy1jaTw/IHN0cmluZy1jaT0/IHN0cmluZy1jaT49PyBzdHJpbmctY2k+PyBzdHJpbmctY29weSAnICtcbiAgICAgICdzdHJpbmctZmlsbCEgc3RyaW5nLWxlbmd0aCBzdHJpbmctcmVmIHN0cmluZy1zZXQhIHN0cmluZzw9PyBzdHJpbmc8PyAnICtcbiAgICAgICdzdHJpbmc9PyBzdHJpbmc+PT8gc3RyaW5nPj8gc3RyaW5nPyBzdWJzdHJpbmcgc3ltYm9sLT5zdHJpbmcgc3ltYm9sPyAnICtcbiAgICAgICd0YW4gdHJhbnNjcmlwdC1vZmYgdHJhbnNjcmlwdC1vbiB0cnVuY2F0ZSB2YWx1ZXMgdmVjdG9yICcgK1xuICAgICAgJ3ZlY3Rvci0+bGlzdCB2ZWN0b3ItZmlsbCEgdmVjdG9yLWxlbmd0aCB2ZWN0b3ItcmVmIHZlY3Rvci1zZXQhICcgK1xuICAgICAgJ3dpdGgtaW5wdXQtZnJvbS1maWxlIHdpdGgtb3V0cHV0LXRvLWZpbGUgd3JpdGUgd3JpdGUtY2hhciB6ZXJvPydcbiAgfTtcblxuICB2YXIgTElURVJBTCA9IHtcbiAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICBiZWdpbjogJygjdHwjZnwjXFxcXFxcXFwnICsgU0NIRU1FX0lERU5UX1JFICsgJ3wjXFxcXFxcXFwuKSdcbiAgfTtcblxuICB2YXIgTlVNQkVSID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHsgYmVnaW46IFNDSEVNRV9TSU1QTEVfTlVNQkVSX1JFLCByZWxldmFuY2U6IDAgfSxcbiAgICAgIHsgYmVnaW46IFNDSEVNRV9DT01QTEVYX05VTUJFUl9SRSwgcmVsZXZhbmNlOiAwIH0sXG4gICAgICB7IGJlZ2luOiAnI2JbMC0xXSsoL1swLTFdKyk/JyB9LFxuICAgICAgeyBiZWdpbjogJyNvWzAtN10rKC9bMC03XSspPycgfSxcbiAgICAgIHsgYmVnaW46ICcjeFswLTlhLWZdKygvWzAtOWEtZl0rKT8nIH1cbiAgICBdXG4gIH07XG5cbiAgdmFyIFNUUklORyA9IGhsanMuUVVPVEVfU1RSSU5HX01PREU7XG5cbiAgdmFyIENPTU1FTlRfTU9ERVMgPSBbXG4gICAgaGxqcy5DT01NRU5UKFxuICAgICAgJzsnLFxuICAgICAgJyQnLFxuICAgICAge1xuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICApLFxuICAgIGhsanMuQ09NTUVOVCgnI1xcXFx8JywgJ1xcXFx8IycpXG4gIF07XG5cbiAgdmFyIElERU5UID0ge1xuICAgIGJlZ2luOiBTQ0hFTUVfSURFTlRfUkUsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgdmFyIFFVT1RFRF9JREVOVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgIGJlZ2luOiAnXFwnJyArIFNDSEVNRV9JREVOVF9SRVxuICB9O1xuXG4gIHZhciBCT0RZID0ge1xuICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIHZhciBRVU9URURfTElTVCA9IHtcbiAgICB2YXJpYW50czogW1xuICAgICAgeyBiZWdpbjogLycvIH0sXG4gICAgICB7IGJlZ2luOiAnYCcgfVxuICAgIF0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcKCcsIGVuZDogJ1xcXFwpJyxcbiAgICAgICAgY29udGFpbnM6IFsnc2VsZicsIExJVEVSQUwsIFNUUklORywgTlVNQkVSLCBJREVOVCwgUVVPVEVEX0lERU5UXVxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICB2YXIgTkFNRSA9IHtcbiAgICBjbGFzc05hbWU6ICduYW1lJyxcbiAgICBiZWdpbjogU0NIRU1FX0lERU5UX1JFLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEU1xuICB9O1xuXG4gIHZhciBMQU1CREEgPSB7XG4gICAgYmVnaW46IC9sYW1iZGEvLCBlbmRzV2l0aFBhcmVudDogdHJ1ZSwgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIE5BTUUsXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLywgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtJREVOVF0sXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHZhciBMSVNUID0ge1xuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7IGJlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKScgfSxcbiAgICAgIHsgYmVnaW46ICdcXFxcWycsIGVuZDogJ1xcXFxdJyB9XG4gICAgXSxcbiAgICBjb250YWluczogW0xBTUJEQSwgTkFNRSwgQk9EWV1cbiAgfTtcblxuICBCT0RZLmNvbnRhaW5zID0gW0xJVEVSQUwsIE5VTUJFUiwgU1RSSU5HLCBJREVOVCwgUVVPVEVEX0lERU5ULCBRVU9URURfTElTVCwgTElTVF0uY29uY2F0KENPTU1FTlRfTU9ERVMpO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1NjaGVtZScsXG4gICAgaWxsZWdhbDogL1xcUy8sXG4gICAgY29udGFpbnM6IFtobGpzLlNIRUJBTkcoKSwgTlVNQkVSLCBTVFJJTkcsIFFVT1RFRF9JREVOVCwgUVVPVEVEX0xJU1QsIExJU1RdLmNvbmNhdChDT01NRU5UX01PREVTKVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNjaGVtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=