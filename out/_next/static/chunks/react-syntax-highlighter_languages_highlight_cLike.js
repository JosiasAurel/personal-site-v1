(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_cLike"],{

/***/ "./node_modules/highlight.js/lib/languages/c-like.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/c-like.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: C-like foundation grammar for C/C++ grammars
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Contributors: Evgeny Stepanischev <imbolk@gmail.com>, Zaven Muradyan <megalivoithos@gmail.com>, Roel Deckers <admin@codingcat.nl>, Sam Wu <samsam2310@gmail.com>, Jordi Petit <jordi.petit@gmail.com>, Pieter Vantorre <pietervantorre@gmail.com>, Google Inc. (David Benjamin) <davidben@google.com>
Category: common, system
*/

/* In the future the intention is to split out the C/C++ grammars distinctly
since they are separate languages.  They will likely share a common foundation
though, and this file sets the groundwork for that - so that we get the breaking
change in v10 and don't have to change the requirements again later.

See: https://github.com/highlightjs/highlight.js/issues/2146
*/

/** @type LanguageFn */
function cLike(hljs) {
  function optional(s) {
    return '(?:' + s + ')?';
  }
  // added for historic reasons because `hljs.C_LINE_COMMENT_MODE` does 
  // not include such support nor can we be sure all the grammars depending
  // on it would desire this behavior
  var C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$', {
    contains: [{begin: /\\\n/}]
  });
  var DECLTYPE_AUTO_RE = 'decltype\\(auto\\)';
  var NAMESPACE_RE = '[a-zA-Z_]\\w*::';
  var TEMPLATE_ARGUMENT_RE = '<.*?>';
  var FUNCTION_TYPE_RE = '(' +
    DECLTYPE_AUTO_RE + '|' +
    optional(NAMESPACE_RE) +'[a-zA-Z_]\\w*' + optional(TEMPLATE_ARGUMENT_RE) +
  ')';
  var CPP_PRIMITIVE_TYPES = {
    className: 'keyword',
    begin: '\\b[a-z\\d_]*_t\\b'
  };

  // https://en.cppreference.com/w/cpp/language/escape
  // \\ \x \xFF \u2837 \u00323747 \374
  var CHARACTER_ESCAPES = '\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)';
  var STRINGS = {
    className: 'string',
    variants: [
      {
        begin: '(u8?|U|L)?"', end: '"',
        illegal: '\\n',
        contains: [hljs.BACKSLASH_ESCAPE]
      },
      {
        begin: '(u8?|U|L)?\'(' + CHARACTER_ESCAPES + "|.)", end: '\'',
        illegal: '.'
      },
      hljs.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/,
      })
    ]
  };

  var NUMBERS = {
    className: 'number',
    variants: [
      { begin: '\\b(0b[01\']+)' },
      { begin: '(-?)\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)(u|U|l|L|ul|UL|f|F|b|B)' },
      { begin: '(-?)(\\b0[xX][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)' }
    ],
    relevance: 0
  };

  var PREPROCESSOR =       {
    className: 'meta',
    begin: /#\s*[a-z]+\b/, end: /$/,
    keywords: {
      'meta-keyword':
        'if else elif endif define undef warning error line ' +
        'pragma _Pragma ifdef ifndef include'
    },
    contains: [
      {
        begin: /\\\n/, relevance: 0
      },
      hljs.inherit(STRINGS, {className: 'meta-string'}),
      {
        className: 'meta-string',
        begin: /<.*?>/, end: /$/,
        illegal: '\\n',
      },
      C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE
    ]
  };

  var TITLE_MODE = {
    className: 'title',
    begin: optional(NAMESPACE_RE) + hljs.IDENT_RE,
    relevance: 0
  };

  var FUNCTION_TITLE = optional(NAMESPACE_RE) + hljs.IDENT_RE + '\\s*\\(';

  var CPP_KEYWORDS = {
    keyword: 'int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof ' +
      'dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace ' +
      'unsigned long volatile static protected bool template mutable if public friend ' +
      'do goto auto void enum else break extern using asm case typeid wchar_t ' +
      'short reinterpret_cast|10 default double register explicit signed typename try this ' +
      'switch continue inline delete alignas alignof constexpr consteval constinit decltype ' +
      'concept co_await co_return co_yield requires ' +
      'noexcept static_assert thread_local restrict final override ' +
      'atomic_bool atomic_char atomic_schar ' +
      'atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong ' +
      'atomic_ullong new throw return ' +
      'and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq',
    built_in: 'std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream ' +
      'auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set ' +
      'unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos ' +
      'asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp ' +
      'fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper ' +
      'isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow ' +
      'printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp ' +
      'strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan ' +
      'vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary',
    literal: 'true false nullptr NULL'
  };

  var EXPRESSION_CONTAINS = [
    PREPROCESSOR,
    CPP_PRIMITIVE_TYPES,
    C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    NUMBERS,
    STRINGS
  ];

  var EXPRESSION_CONTEXT = {
    // This mode covers expression context where we can't expect a function
    // definition and shouldn't highlight anything that looks like one:
    // `return some()`, `else if()`, `(x*sum(1, 2))`
    variants: [
      {begin: /=/, end: /;/},
      {begin: /\(/, end: /\)/},
      {beginKeywords: 'new throw return else', end: /;/}
    ],
    keywords: CPP_KEYWORDS,
    contains: EXPRESSION_CONTAINS.concat([
      {
        begin: /\(/, end: /\)/,
        keywords: CPP_KEYWORDS,
        contains: EXPRESSION_CONTAINS.concat(['self']),
        relevance: 0
      }
    ]),
    relevance: 0
  };

  var FUNCTION_DECLARATION = {
    className: 'function',
    begin: '(' + FUNCTION_TYPE_RE + '[\\*&\\s]+)+' + FUNCTION_TITLE,
    returnBegin: true, end: /[{;=]/,
    excludeEnd: true,
    keywords: CPP_KEYWORDS,
    illegal: /[^\w\s\*&:<>]/,
    contains: [

      { // to prevent it from being confused as the function title
        begin: DECLTYPE_AUTO_RE,
        keywords: CPP_KEYWORDS,
        relevance: 0,
      },
      {
        begin: FUNCTION_TITLE, returnBegin: true,
        contains: [TITLE_MODE],
        relevance: 0
      },
      {
        className: 'params',
        begin: /\(/, end: /\)/,
        keywords: CPP_KEYWORDS,
        relevance: 0,
        contains: [
          C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          STRINGS,
          NUMBERS,
          CPP_PRIMITIVE_TYPES,
          // Count matching parentheses.
          {
            begin: /\(/, end: /\)/,
            keywords: CPP_KEYWORDS,
            relevance: 0,
            contains: [
              'self',
              C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              STRINGS,
              NUMBERS,
              CPP_PRIMITIVE_TYPES
            ]
          }
        ]
      },
      CPP_PRIMITIVE_TYPES,
      C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      PREPROCESSOR
    ]
  };

  return {
    aliases: ['c', 'cc', 'h', 'c++', 'h++', 'hpp', 'hh', 'hxx', 'cxx'],
    keywords: CPP_KEYWORDS,
    // the base c-like language will NEVER be auto-detected, rather the
    // derivitives: c, c++, arduino turn auto-detect back on for themselves
    disableAutodetect: true,
    illegal: '</',
    contains: [].concat(
      EXPRESSION_CONTEXT,
      FUNCTION_DECLARATION,
      EXPRESSION_CONTAINS,
      [
      PREPROCESSOR,
      { // containers: ie, `vector <int> rooms (9);`
        begin: '\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<', end: '>',
        keywords: CPP_KEYWORDS,
        contains: ['self', CPP_PRIMITIVE_TYPES]
      },
      {
        begin: hljs.IDENT_RE + '::',
        keywords: CPP_KEYWORDS
      },
      {
        className: 'class',
        beginKeywords: 'enum class struct union', end: /[{;:<>=]/,
        contains: [
          { beginKeywords: "final class struct" },
          hljs.TITLE_MODE
        ]
      }
    ]),
    exports: {
      preprocessor: PREPROCESSOR,
      strings: STRINGS,
      keywords: CPP_KEYWORDS
    }
  };
}

module.exports = cLike;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2MtbGlrZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsY0FBYztBQUM5QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLEVBQUUsY0FBYyxJQUFJLE9BQU8sRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSx3Q0FBd0MsS0FBSztBQUM3QywwQkFBMEIsS0FBSztBQUMvQixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDBCQUEwQjtBQUNqQyxPQUFPLDhFQUE4RTtBQUNyRixPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCw2QkFBNkIseUJBQXlCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sbUJBQW1CLEVBQUU7QUFDNUIsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTywrQ0FBK0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw0Q0FBNEM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0EsV0FBVyxzQ0FBc0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2NMaWtlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBDLWxpa2UgZm91bmRhdGlvbiBncmFtbWFyIGZvciBDL0MrKyBncmFtbWFyc1xuQXV0aG9yOiBJdmFuIFNhZ2FsYWV2IDxtYW5pYWNAc29mdHdhcmVtYW5pYWNzLm9yZz5cbkNvbnRyaWJ1dG9yczogRXZnZW55IFN0ZXBhbmlzY2hldiA8aW1ib2xrQGdtYWlsLmNvbT4sIFphdmVuIE11cmFkeWFuIDxtZWdhbGl2b2l0aG9zQGdtYWlsLmNvbT4sIFJvZWwgRGVja2VycyA8YWRtaW5AY29kaW5nY2F0Lm5sPiwgU2FtIFd1IDxzYW1zYW0yMzEwQGdtYWlsLmNvbT4sIEpvcmRpIFBldGl0IDxqb3JkaS5wZXRpdEBnbWFpbC5jb20+LCBQaWV0ZXIgVmFudG9ycmUgPHBpZXRlcnZhbnRvcnJlQGdtYWlsLmNvbT4sIEdvb2dsZSBJbmMuIChEYXZpZCBCZW5qYW1pbikgPGRhdmlkYmVuQGdvb2dsZS5jb20+XG5DYXRlZ29yeTogY29tbW9uLCBzeXN0ZW1cbiovXG5cbi8qIEluIHRoZSBmdXR1cmUgdGhlIGludGVudGlvbiBpcyB0byBzcGxpdCBvdXQgdGhlIEMvQysrIGdyYW1tYXJzIGRpc3RpbmN0bHlcbnNpbmNlIHRoZXkgYXJlIHNlcGFyYXRlIGxhbmd1YWdlcy4gIFRoZXkgd2lsbCBsaWtlbHkgc2hhcmUgYSBjb21tb24gZm91bmRhdGlvblxudGhvdWdoLCBhbmQgdGhpcyBmaWxlIHNldHMgdGhlIGdyb3VuZHdvcmsgZm9yIHRoYXQgLSBzbyB0aGF0IHdlIGdldCB0aGUgYnJlYWtpbmdcbmNoYW5nZSBpbiB2MTAgYW5kIGRvbid0IGhhdmUgdG8gY2hhbmdlIHRoZSByZXF1aXJlbWVudHMgYWdhaW4gbGF0ZXIuXG5cblNlZTogaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9pc3N1ZXMvMjE0NlxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGNMaWtlKGhsanMpIHtcbiAgZnVuY3Rpb24gb3B0aW9uYWwocykge1xuICAgIHJldHVybiAnKD86JyArIHMgKyAnKT8nO1xuICB9XG4gIC8vIGFkZGVkIGZvciBoaXN0b3JpYyByZWFzb25zIGJlY2F1c2UgYGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERWAgZG9lcyBcbiAgLy8gbm90IGluY2x1ZGUgc3VjaCBzdXBwb3J0IG5vciBjYW4gd2UgYmUgc3VyZSBhbGwgdGhlIGdyYW1tYXJzIGRlcGVuZGluZ1xuICAvLyBvbiBpdCB3b3VsZCBkZXNpcmUgdGhpcyBiZWhhdmlvclxuICB2YXIgQ19MSU5FX0NPTU1FTlRfTU9ERSA9IGhsanMuQ09NTUVOVCgnLy8nLCAnJCcsIHtcbiAgICBjb250YWluczogW3tiZWdpbjogL1xcXFxcXG4vfV1cbiAgfSk7XG4gIHZhciBERUNMVFlQRV9BVVRPX1JFID0gJ2RlY2x0eXBlXFxcXChhdXRvXFxcXCknO1xuICB2YXIgTkFNRVNQQUNFX1JFID0gJ1thLXpBLVpfXVxcXFx3Kjo6JztcbiAgdmFyIFRFTVBMQVRFX0FSR1VNRU5UX1JFID0gJzwuKj8+JztcbiAgdmFyIEZVTkNUSU9OX1RZUEVfUkUgPSAnKCcgK1xuICAgIERFQ0xUWVBFX0FVVE9fUkUgKyAnfCcgK1xuICAgIG9wdGlvbmFsKE5BTUVTUEFDRV9SRSkgKydbYS16QS1aX11cXFxcdyonICsgb3B0aW9uYWwoVEVNUExBVEVfQVJHVU1FTlRfUkUpICtcbiAgJyknO1xuICB2YXIgQ1BQX1BSSU1JVElWRV9UWVBFUyA9IHtcbiAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICBiZWdpbjogJ1xcXFxiW2EtelxcXFxkX10qX3RcXFxcYidcbiAgfTtcblxuICAvLyBodHRwczovL2VuLmNwcHJlZmVyZW5jZS5jb20vdy9jcHAvbGFuZ3VhZ2UvZXNjYXBlXG4gIC8vIFxcXFwgXFx4IFxceEZGIFxcdTI4MzcgXFx1MDAzMjM3NDcgXFwzNzRcbiAgdmFyIENIQVJBQ1RFUl9FU0NBUEVTID0gJ1xcXFxcXFxcKHhbMC05QS1GYS1mXXsyfXx1WzAtOUEtRmEtZl17NCw4fXxbMC03XXszfXxcXFxcUyknO1xuICB2YXIgU1RSSU5HUyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnKHU4P3xVfEwpP1wiJywgZW5kOiAnXCInLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnKHU4P3xVfEwpP1xcJygnICsgQ0hBUkFDVEVSX0VTQ0FQRVMgKyBcInwuKVwiLCBlbmQ6ICdcXCcnLFxuICAgICAgICBpbGxlZ2FsOiAnLidcbiAgICAgIH0sXG4gICAgICBobGpzLkVORF9TQU1FX0FTX0JFR0lOKHtcbiAgICAgICAgYmVnaW46IC8oPzp1OD98VXxMKT9SXCIoW14oKVxcXFwgXXswLDE2fSlcXCgvLFxuICAgICAgICBlbmQ6IC9cXCkoW14oKVxcXFwgXXswLDE2fSlcIi8sXG4gICAgICB9KVxuICAgIF1cbiAgfTtcblxuICB2YXIgTlVNQkVSUyA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7IGJlZ2luOiAnXFxcXGIoMGJbMDFcXCddKyknIH0sXG4gICAgICB7IGJlZ2luOiAnKC0/KVxcXFxiKFtcXFxcZFxcJ10rKFxcXFwuW1xcXFxkXFwnXSopP3xcXFxcLltcXFxcZFxcJ10rKSh1fFV8bHxMfHVsfFVMfGZ8RnxifEIpJyB9LFxuICAgICAgeyBiZWdpbjogJygtPykoXFxcXGIwW3hYXVthLWZBLUYwLTlcXCddK3woXFxcXGJbXFxcXGRcXCddKyhcXFxcLltcXFxcZFxcJ10qKT98XFxcXC5bXFxcXGRcXCddKykoW2VFXVstK10/W1xcXFxkXFwnXSspPyknIH1cbiAgICBdLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIHZhciBQUkVQUk9DRVNTT1IgPSAgICAgICB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46IC8jXFxzKlthLXpdK1xcYi8sIGVuZDogLyQvLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAnbWV0YS1rZXl3b3JkJzpcbiAgICAgICAgJ2lmIGVsc2UgZWxpZiBlbmRpZiBkZWZpbmUgdW5kZWYgd2FybmluZyBlcnJvciBsaW5lICcgK1xuICAgICAgICAncHJhZ21hIF9QcmFnbWEgaWZkZWYgaWZuZGVmIGluY2x1ZGUnXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcXFxcXG4vLCByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBobGpzLmluaGVyaXQoU1RSSU5HUywge2NsYXNzTmFtZTogJ21ldGEtc3RyaW5nJ30pLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhLXN0cmluZycsXG4gICAgICAgIGJlZ2luOiAvPC4qPz4vLCBlbmQ6IC8kLyxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgIH0sXG4gICAgICBDX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICAgIF1cbiAgfTtcblxuICB2YXIgVElUTEVfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgYmVnaW46IG9wdGlvbmFsKE5BTUVTUEFDRV9SRSkgKyBobGpzLklERU5UX1JFLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIHZhciBGVU5DVElPTl9USVRMRSA9IG9wdGlvbmFsKE5BTUVTUEFDRV9SRSkgKyBobGpzLklERU5UX1JFICsgJ1xcXFxzKlxcXFwoJztcblxuICB2YXIgQ1BQX0tFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6ICdpbnQgZmxvYXQgd2hpbGUgcHJpdmF0ZSBjaGFyIGNoYXI4X3QgY2hhcjE2X3QgY2hhcjMyX3QgY2F0Y2ggaW1wb3J0IG1vZHVsZSBleHBvcnQgdmlydHVhbCBvcGVyYXRvciBzaXplb2YgJyArXG4gICAgICAnZHluYW1pY19jYXN0fDEwIHR5cGVkZWYgY29uc3RfY2FzdHwxMCBjb25zdCBmb3Igc3RhdGljX2Nhc3R8MTAgdW5pb24gbmFtZXNwYWNlICcgK1xuICAgICAgJ3Vuc2lnbmVkIGxvbmcgdm9sYXRpbGUgc3RhdGljIHByb3RlY3RlZCBib29sIHRlbXBsYXRlIG11dGFibGUgaWYgcHVibGljIGZyaWVuZCAnICtcbiAgICAgICdkbyBnb3RvIGF1dG8gdm9pZCBlbnVtIGVsc2UgYnJlYWsgZXh0ZXJuIHVzaW5nIGFzbSBjYXNlIHR5cGVpZCB3Y2hhcl90ICcgK1xuICAgICAgJ3Nob3J0IHJlaW50ZXJwcmV0X2Nhc3R8MTAgZGVmYXVsdCBkb3VibGUgcmVnaXN0ZXIgZXhwbGljaXQgc2lnbmVkIHR5cGVuYW1lIHRyeSB0aGlzICcgK1xuICAgICAgJ3N3aXRjaCBjb250aW51ZSBpbmxpbmUgZGVsZXRlIGFsaWduYXMgYWxpZ25vZiBjb25zdGV4cHIgY29uc3RldmFsIGNvbnN0aW5pdCBkZWNsdHlwZSAnICtcbiAgICAgICdjb25jZXB0IGNvX2F3YWl0IGNvX3JldHVybiBjb195aWVsZCByZXF1aXJlcyAnICtcbiAgICAgICdub2V4Y2VwdCBzdGF0aWNfYXNzZXJ0IHRocmVhZF9sb2NhbCByZXN0cmljdCBmaW5hbCBvdmVycmlkZSAnICtcbiAgICAgICdhdG9taWNfYm9vbCBhdG9taWNfY2hhciBhdG9taWNfc2NoYXIgJyArXG4gICAgICAnYXRvbWljX3VjaGFyIGF0b21pY19zaG9ydCBhdG9taWNfdXNob3J0IGF0b21pY19pbnQgYXRvbWljX3VpbnQgYXRvbWljX2xvbmcgYXRvbWljX3Vsb25nIGF0b21pY19sbG9uZyAnICtcbiAgICAgICdhdG9taWNfdWxsb25nIG5ldyB0aHJvdyByZXR1cm4gJyArXG4gICAgICAnYW5kIGFuZF9lcSBiaXRhbmQgYml0b3IgY29tcGwgbm90IG5vdF9lcSBvciBvcl9lcSB4b3IgeG9yX2VxJyxcbiAgICBidWlsdF9pbjogJ3N0ZCBzdHJpbmcgd3N0cmluZyBjaW4gY291dCBjZXJyIGNsb2cgc3RkaW4gc3Rkb3V0IHN0ZGVyciBzdHJpbmdzdHJlYW0gaXN0cmluZ3N0cmVhbSBvc3RyaW5nc3RyZWFtICcgK1xuICAgICAgJ2F1dG9fcHRyIGRlcXVlIGxpc3QgcXVldWUgc3RhY2sgdmVjdG9yIG1hcCBzZXQgcGFpciBiaXRzZXQgbXVsdGlzZXQgbXVsdGltYXAgdW5vcmRlcmVkX3NldCAnICtcbiAgICAgICd1bm9yZGVyZWRfbWFwIHVub3JkZXJlZF9tdWx0aXNldCB1bm9yZGVyZWRfbXVsdGltYXAgcHJpb3JpdHlfcXVldWUgbWFrZV9wYWlyIGFycmF5IHNoYXJlZF9wdHIgYWJvcnQgdGVybWluYXRlIGFicyBhY29zICcgK1xuICAgICAgJ2FzaW4gYXRhbjIgYXRhbiBjYWxsb2MgY2VpbCBjb3NoIGNvcyBleGl0IGV4cCBmYWJzIGZsb29yIGZtb2QgZnByaW50ZiBmcHV0cyBmcmVlIGZyZXhwICcgK1xuICAgICAgJ2ZzY2FuZiBmdXR1cmUgaXNhbG51bSBpc2FscGhhIGlzY250cmwgaXNkaWdpdCBpc2dyYXBoIGlzbG93ZXIgaXNwcmludCBpc3B1bmN0IGlzc3BhY2UgaXN1cHBlciAnICtcbiAgICAgICdpc3hkaWdpdCB0b2xvd2VyIHRvdXBwZXIgbGFicyBsZGV4cCBsb2cxMCBsb2cgbWFsbG9jIHJlYWxsb2MgbWVtY2hyIG1lbWNtcCBtZW1jcHkgbWVtc2V0IG1vZGYgcG93ICcgK1xuICAgICAgJ3ByaW50ZiBwdXRjaGFyIHB1dHMgc2NhbmYgc2luaCBzaW4gc25wcmludGYgc3ByaW50ZiBzcXJ0IHNzY2FuZiBzdHJjYXQgc3RyY2hyIHN0cmNtcCAnICtcbiAgICAgICdzdHJjcHkgc3RyY3NwbiBzdHJsZW4gc3RybmNhdCBzdHJuY21wIHN0cm5jcHkgc3RycGJyayBzdHJyY2hyIHN0cnNwbiBzdHJzdHIgdGFuaCB0YW4gJyArXG4gICAgICAndmZwcmludGYgdnByaW50ZiB2c3ByaW50ZiBlbmRsIGluaXRpYWxpemVyX2xpc3QgdW5pcXVlX3B0ciBfQm9vbCBjb21wbGV4IF9Db21wbGV4IGltYWdpbmFyeSBfSW1hZ2luYXJ5JyxcbiAgICBsaXRlcmFsOiAndHJ1ZSBmYWxzZSBudWxscHRyIE5VTEwnXG4gIH07XG5cbiAgdmFyIEVYUFJFU1NJT05fQ09OVEFJTlMgPSBbXG4gICAgUFJFUFJPQ0VTU09SLFxuICAgIENQUF9QUklNSVRJVkVfVFlQRVMsXG4gICAgQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgIE5VTUJFUlMsXG4gICAgU1RSSU5HU1xuICBdO1xuXG4gIHZhciBFWFBSRVNTSU9OX0NPTlRFWFQgPSB7XG4gICAgLy8gVGhpcyBtb2RlIGNvdmVycyBleHByZXNzaW9uIGNvbnRleHQgd2hlcmUgd2UgY2FuJ3QgZXhwZWN0IGEgZnVuY3Rpb25cbiAgICAvLyBkZWZpbml0aW9uIGFuZCBzaG91bGRuJ3QgaGlnaGxpZ2h0IGFueXRoaW5nIHRoYXQgbG9va3MgbGlrZSBvbmU6XG4gICAgLy8gYHJldHVybiBzb21lKClgLCBgZWxzZSBpZigpYCwgYCh4KnN1bSgxLCAyKSlgXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtiZWdpbjogLz0vLCBlbmQ6IC87L30sXG4gICAgICB7YmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvfSxcbiAgICAgIHtiZWdpbktleXdvcmRzOiAnbmV3IHRocm93IHJldHVybiBlbHNlJywgZW5kOiAvOy99XG4gICAgXSxcbiAgICBrZXl3b3JkczogQ1BQX0tFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBFWFBSRVNTSU9OX0NPTlRBSU5TLmNvbmNhdChbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLyxcbiAgICAgICAga2V5d29yZHM6IENQUF9LRVlXT1JEUyxcbiAgICAgICAgY29udGFpbnM6IEVYUFJFU1NJT05fQ09OVEFJTlMuY29uY2F0KFsnc2VsZiddKSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XG4gICAgXSksXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgdmFyIEZVTkNUSU9OX0RFQ0xBUkFUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICBiZWdpbjogJygnICsgRlVOQ1RJT05fVFlQRV9SRSArICdbXFxcXComXFxcXHNdKykrJyArIEZVTkNUSU9OX1RJVExFLFxuICAgIHJldHVybkJlZ2luOiB0cnVlLCBlbmQ6IC9bezs9XS8sXG4gICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICBrZXl3b3JkczogQ1BQX0tFWVdPUkRTLFxuICAgIGlsbGVnYWw6IC9bXlxcd1xcc1xcKiY6PD5dLyxcbiAgICBjb250YWluczogW1xuXG4gICAgICB7IC8vIHRvIHByZXZlbnQgaXQgZnJvbSBiZWluZyBjb25mdXNlZCBhcyB0aGUgZnVuY3Rpb24gdGl0bGVcbiAgICAgICAgYmVnaW46IERFQ0xUWVBFX0FVVE9fUkUsXG4gICAgICAgIGtleXdvcmRzOiBDUFBfS0VZV09SRFMsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBGVU5DVElPTl9USVRMRSwgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbVElUTEVfTU9ERV0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvLFxuICAgICAgICBrZXl3b3JkczogQ1BQX0tFWVdPUkRTLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIFNUUklOR1MsXG4gICAgICAgICAgTlVNQkVSUyxcbiAgICAgICAgICBDUFBfUFJJTUlUSVZFX1RZUEVTLFxuICAgICAgICAgIC8vIENvdW50IG1hdGNoaW5nIHBhcmVudGhlc2VzLlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgIGtleXdvcmRzOiBDUFBfS0VZV09SRFMsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAnc2VsZicsXG4gICAgICAgICAgICAgIENfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgIFNUUklOR1MsXG4gICAgICAgICAgICAgIE5VTUJFUlMsXG4gICAgICAgICAgICAgIENQUF9QUklNSVRJVkVfVFlQRVNcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBDUFBfUFJJTUlUSVZFX1RZUEVTLFxuICAgICAgQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBQUkVQUk9DRVNTT1JcbiAgICBdXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ2MnLCAnY2MnLCAnaCcsICdjKysnLCAnaCsrJywgJ2hwcCcsICdoaCcsICdoeHgnLCAnY3h4J10sXG4gICAga2V5d29yZHM6IENQUF9LRVlXT1JEUyxcbiAgICAvLyB0aGUgYmFzZSBjLWxpa2UgbGFuZ3VhZ2Ugd2lsbCBORVZFUiBiZSBhdXRvLWRldGVjdGVkLCByYXRoZXIgdGhlXG4gICAgLy8gZGVyaXZpdGl2ZXM6IGMsIGMrKywgYXJkdWlubyB0dXJuIGF1dG8tZGV0ZWN0IGJhY2sgb24gZm9yIHRoZW1zZWx2ZXNcbiAgICBkaXNhYmxlQXV0b2RldGVjdDogdHJ1ZSxcbiAgICBpbGxlZ2FsOiAnPC8nLFxuICAgIGNvbnRhaW5zOiBbXS5jb25jYXQoXG4gICAgICBFWFBSRVNTSU9OX0NPTlRFWFQsXG4gICAgICBGVU5DVElPTl9ERUNMQVJBVElPTixcbiAgICAgIEVYUFJFU1NJT05fQ09OVEFJTlMsXG4gICAgICBbXG4gICAgICBQUkVQUk9DRVNTT1IsXG4gICAgICB7IC8vIGNvbnRhaW5lcnM6IGllLCBgdmVjdG9yIDxpbnQ+IHJvb21zICg5KTtgXG4gICAgICAgIGJlZ2luOiAnXFxcXGIoZGVxdWV8bGlzdHxxdWV1ZXxwcmlvcml0eV9xdWV1ZXxwYWlyfHN0YWNrfHZlY3RvcnxtYXB8c2V0fGJpdHNldHxtdWx0aXNldHxtdWx0aW1hcHx1bm9yZGVyZWRfbWFwfHVub3JkZXJlZF9zZXR8dW5vcmRlcmVkX211bHRpc2V0fHVub3JkZXJlZF9tdWx0aW1hcHxhcnJheSlcXFxccyo8JywgZW5kOiAnPicsXG4gICAgICAgIGtleXdvcmRzOiBDUFBfS0VZV09SRFMsXG4gICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnLCBDUFBfUFJJTUlUSVZFX1RZUEVTXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IGhsanMuSURFTlRfUkUgKyAnOjonLFxuICAgICAgICBrZXl3b3JkczogQ1BQX0tFWVdPUkRTXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdlbnVtIGNsYXNzIHN0cnVjdCB1bmlvbicsIGVuZDogL1t7Ozo8Pj1dLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7IGJlZ2luS2V5d29yZHM6IFwiZmluYWwgY2xhc3Mgc3RydWN0XCIgfSxcbiAgICAgICAgICBobGpzLlRJVExFX01PREVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0pLFxuICAgIGV4cG9ydHM6IHtcbiAgICAgIHByZXByb2Nlc3NvcjogUFJFUFJPQ0VTU09SLFxuICAgICAgc3RyaW5nczogU1RSSU5HUyxcbiAgICAgIGtleXdvcmRzOiBDUFBfS0VZV09SRFNcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY0xpa2U7XG4iXSwic291cmNlUm9vdCI6IiJ9