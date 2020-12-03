(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_elixir"],{

/***/ "./node_modules/highlight.js/lib/languages/elixir.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/elixir.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Elixir
Author: Josh Adams <josh@isotope11.com>
Description: language definition for Elixir source code files (.ex and .exs).  Based on ruby language support.
Category: functional
Website: https://elixir-lang.org
*/

function elixir(hljs) {
  var ELIXIR_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9_.]*(\\!|\\?)?';
  var ELIXIR_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?';
  var ELIXIR_KEYWORDS = {
    $pattern: ELIXIR_IDENT_RE,
    keyword: 'and false then defined module in return redo retry end for true self when ' +
    'next until do begin unless nil break not case cond alias while ensure or ' +
    'include use alias fn quote require import with|0'
  };
  var SUBST = {
    className: 'subst',
    begin: '#\\{', end: '}',
    keywords: ELIXIR_KEYWORDS
  };
  var NUMBER = {
    className: 'number',
    begin: '(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[1-9][0-9_]*(.[0-9_]+([eE][-+]?[0-9]+)?)?)',
    relevance: 0
  };
  var SIGIL_DELIMITERS = '[/|([{<"\']';
  var LOWERCASE_SIGIL = {
    className: 'string',
    begin: '~[a-z]' + '(?=' + SIGIL_DELIMITERS + ')',
    contains: [
      {
        endsParent:true,
        contains: [{
          contains: [hljs.BACKSLASH_ESCAPE, SUBST],
          variants: [
            { begin: /"/, end: /"/ },
            { begin: /'/, end: /'/ },
            { begin: /\//, end: /\// },
            { begin: /\|/, end: /\|/ },
            { begin: /\(/, end: /\)/ },
            { begin: /\[/, end: /\]/ },
            { begin: /\{/, end: /\}/ },
            { begin: /</, end: />/ }
          ]
        }]
      },
    ],
  };

  var UPCASE_SIGIL = {
    className: 'string',
    begin: '~[A-Z]' + '(?=' + SIGIL_DELIMITERS + ')',
    contains: [
      { begin: /"/, end: /"/ },
      { begin: /'/, end: /'/ },
      { begin: /\//, end: /\// },
      { begin: /\|/, end: /\|/ },
      { begin: /\(/, end: /\)/ },
      { begin: /\[/, end: /\]/ },
      { begin: /\{/, end: /\}/ },
      { begin: /\</, end: /\>/ }
    ]
  };

  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
    variants: [
      {
        begin: /"""/, end: /"""/,
      },
      {
        begin: /'''/, end: /'''/,
      },
      {
        begin: /~S"""/, end: /"""/,
        contains: []
      },
      {
        begin: /~S"/, end: /"/,
        contains: []
      },
      {
        begin: /~S'''/, end: /'''/,
        contains: []
      },
      {
        begin: /~S'/, end: /'/,
        contains: []
      },
      {
        begin: /'/, end: /'/
      },
      {
        begin: /"/, end: /"/
      },
    ]
  };
  var FUNCTION = {
    className: 'function',
    beginKeywords: 'def defp defmacro', end: /\B\b/, // the mode is ended by the title
    contains: [
      hljs.inherit(hljs.TITLE_MODE, {
        begin: ELIXIR_IDENT_RE,
        endsParent: true
      })
    ]
  };
  var CLASS = hljs.inherit(FUNCTION, {
    className: 'class',
    beginKeywords: 'defimpl defmodule defprotocol defrecord', end: /\bdo\b|$|;/
  });
  var ELIXIR_DEFAULT_CONTAINS = [
    STRING,
    UPCASE_SIGIL,
    LOWERCASE_SIGIL,
    hljs.HASH_COMMENT_MODE,
    CLASS,
    FUNCTION,
    {
      begin: '::'
    },
    {
      className: 'symbol',
      begin: ':(?![\\s:])',
      contains: [STRING, {begin: ELIXIR_METHOD_RE}],
      relevance: 0
    },
    {
      className: 'symbol',
      begin: ELIXIR_IDENT_RE + ':(?!:)',
      relevance: 0
    },
    NUMBER,
    {
      className: 'variable',
      begin: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))'
    },
    {
      begin: '->'
    },
    { // regexp container
      begin: '(' + hljs.RE_STARTERS_RE + ')\\s*',
      contains: [
        hljs.HASH_COMMENT_MODE,
        {
          // to prevent false regex triggers for the division function:
          // /:
          begin: /\/: (?=\d+\s*[,\]])/,
          relevance: 0,
          contains: [
            NUMBER
          ]
        },
        {
          className: 'regexp',
          illegal: '\\n',
          contains: [hljs.BACKSLASH_ESCAPE, SUBST],
          variants: [
            {
              begin: '/', end: '/[a-z]*'
            },
            {
              begin: '%r\\[', end: '\\][a-z]*'
            }
          ]
        }
      ],
      relevance: 0
    }
  ];
  SUBST.contains = ELIXIR_DEFAULT_CONTAINS;

  return {
    name: 'Elixir',
    keywords: ELIXIR_KEYWORDS,
    contains: ELIXIR_DEFAULT_CONTAINS
  };
}

module.exports = elixir;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2VsaXhpci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFVBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEMsYUFBYSx1QkFBdUI7QUFDcEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSxXQUFXLFdBQVcsR0FBRztBQUN0QyxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVCQUF1QjtBQUM5QixPQUFPLHVCQUF1QjtBQUM5QixPQUFPLHlCQUF5QjtBQUNoQyxPQUFPLHlCQUF5QjtBQUNoQyxPQUFPLHlCQUF5QjtBQUNoQyxPQUFPLHlCQUF5QjtBQUNoQyxPQUFPLFdBQVcsV0FBVyxHQUFHO0FBQ2hDLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFO0FBQzlFLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdCQUF3QjtBQUNsRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2VsaXhpci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogRWxpeGlyXG5BdXRob3I6IEpvc2ggQWRhbXMgPGpvc2hAaXNvdG9wZTExLmNvbT5cbkRlc2NyaXB0aW9uOiBsYW5ndWFnZSBkZWZpbml0aW9uIGZvciBFbGl4aXIgc291cmNlIGNvZGUgZmlsZXMgKC5leCBhbmQgLmV4cykuICBCYXNlZCBvbiBydWJ5IGxhbmd1YWdlIHN1cHBvcnQuXG5DYXRlZ29yeTogZnVuY3Rpb25hbFxuV2Vic2l0ZTogaHR0cHM6Ly9lbGl4aXItbGFuZy5vcmdcbiovXG5cbmZ1bmN0aW9uIGVsaXhpcihobGpzKSB7XG4gIHZhciBFTElYSVJfSURFTlRfUkUgPSAnW2EtekEtWl9dW2EtekEtWjAtOV8uXSooXFxcXCF8XFxcXD8pPyc7XG4gIHZhciBFTElYSVJfTUVUSE9EX1JFID0gJ1thLXpBLVpfXVxcXFx3KlshPz1dP3xbLSt+XVxcXFxAfDw8fD4+fD1+fD09PT98PD0+fFs8Pl09P3xcXFxcKlxcXFwqfFstLyslXiYqfmB8XXxcXFxcW1xcXFxdPT8nO1xuICB2YXIgRUxJWElSX0tFWVdPUkRTID0ge1xuICAgICRwYXR0ZXJuOiBFTElYSVJfSURFTlRfUkUsXG4gICAga2V5d29yZDogJ2FuZCBmYWxzZSB0aGVuIGRlZmluZWQgbW9kdWxlIGluIHJldHVybiByZWRvIHJldHJ5IGVuZCBmb3IgdHJ1ZSBzZWxmIHdoZW4gJyArXG4gICAgJ25leHQgdW50aWwgZG8gYmVnaW4gdW5sZXNzIG5pbCBicmVhayBub3QgY2FzZSBjb25kIGFsaWFzIHdoaWxlIGVuc3VyZSBvciAnICtcbiAgICAnaW5jbHVkZSB1c2UgYWxpYXMgZm4gcXVvdGUgcmVxdWlyZSBpbXBvcnQgd2l0aHwwJ1xuICB9O1xuICB2YXIgU1VCU1QgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIGJlZ2luOiAnI1xcXFx7JywgZW5kOiAnfScsXG4gICAga2V5d29yZHM6IEVMSVhJUl9LRVlXT1JEU1xuICB9O1xuICB2YXIgTlVNQkVSID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgYmVnaW46ICcoXFxcXGIwb1swLTdfXSspfChcXFxcYjBiWzAxX10rKXwoXFxcXGIweFswLTlhLWZBLUZfXSspfCgtP1xcXFxiWzEtOV1bMC05X10qKC5bMC05X10rKFtlRV1bLStdP1swLTldKyk/KT8pJyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgdmFyIFNJR0lMX0RFTElNSVRFUlMgPSAnWy98KFt7PFwiXFwnXSc7XG4gIHZhciBMT1dFUkNBU0VfU0lHSUwgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ35bYS16XScgKyAnKD89JyArIFNJR0lMX0RFTElNSVRFUlMgKyAnKScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgZW5kc1BhcmVudDp0cnVlLFxuICAgICAgICBjb250YWluczogW3tcbiAgICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRSwgU1VCU1RdLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7IGJlZ2luOiAvXCIvLCBlbmQ6IC9cIi8gfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC8nLywgZW5kOiAvJy8gfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC9cXC8vLCBlbmQ6IC9cXC8vIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvXFx8LywgZW5kOiAvXFx8LyB9LFxuICAgICAgICAgICAgeyBiZWdpbjogL1xcKC8sIGVuZDogL1xcKS8gfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC9cXFsvLCBlbmQ6IC9cXF0vIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvXFx7LywgZW5kOiAvXFx9LyB9LFxuICAgICAgICAgICAgeyBiZWdpbjogLzwvLCBlbmQ6IC8+LyB9XG4gICAgICAgICAgXVxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHZhciBVUENBU0VfU0lHSUwgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ35bQS1aXScgKyAnKD89JyArIFNJR0lMX0RFTElNSVRFUlMgKyAnKScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHsgYmVnaW46IC9cIi8sIGVuZDogL1wiLyB9LFxuICAgICAgeyBiZWdpbjogLycvLCBlbmQ6IC8nLyB9LFxuICAgICAgeyBiZWdpbjogL1xcLy8sIGVuZDogL1xcLy8gfSxcbiAgICAgIHsgYmVnaW46IC9cXHwvLCBlbmQ6IC9cXHwvIH0sXG4gICAgICB7IGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLyB9LFxuICAgICAgeyBiZWdpbjogL1xcWy8sIGVuZDogL1xcXS8gfSxcbiAgICAgIHsgYmVnaW46IC9cXHsvLCBlbmQ6IC9cXH0vIH0sXG4gICAgICB7IGJlZ2luOiAvXFw8LywgZW5kOiAvXFw+LyB9XG4gICAgXVxuICB9O1xuXG4gIHZhciBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRSwgU1VCU1RdLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXCJcIlwiLywgZW5kOiAvXCJcIlwiLyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvJycnLywgZW5kOiAvJycnLyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvflNcIlwiXCIvLCBlbmQ6IC9cIlwiXCIvLFxuICAgICAgICBjb250YWluczogW11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvflNcIi8sIGVuZDogL1wiLyxcbiAgICAgICAgY29udGFpbnM6IFtdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL35TJycnLywgZW5kOiAvJycnLyxcbiAgICAgICAgY29udGFpbnM6IFtdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL35TJy8sIGVuZDogLycvLFxuICAgICAgICBjb250YWluczogW11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvJy8sIGVuZDogLycvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1wiLywgZW5kOiAvXCIvXG4gICAgICB9LFxuICAgIF1cbiAgfTtcbiAgdmFyIEZVTkNUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICBiZWdpbktleXdvcmRzOiAnZGVmIGRlZnAgZGVmbWFjcm8nLCBlbmQ6IC9cXEJcXGIvLCAvLyB0aGUgbW9kZSBpcyBlbmRlZCBieSB0aGUgdGl0bGVcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge1xuICAgICAgICBiZWdpbjogRUxJWElSX0lERU5UX1JFLFxuICAgICAgICBlbmRzUGFyZW50OiB0cnVlXG4gICAgICB9KVxuICAgIF1cbiAgfTtcbiAgdmFyIENMQVNTID0gaGxqcy5pbmhlcml0KEZVTkNUSU9OLCB7XG4gICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgIGJlZ2luS2V5d29yZHM6ICdkZWZpbXBsIGRlZm1vZHVsZSBkZWZwcm90b2NvbCBkZWZyZWNvcmQnLCBlbmQ6IC9cXGJkb1xcYnwkfDsvXG4gIH0pO1xuICB2YXIgRUxJWElSX0RFRkFVTFRfQ09OVEFJTlMgPSBbXG4gICAgU1RSSU5HLFxuICAgIFVQQ0FTRV9TSUdJTCxcbiAgICBMT1dFUkNBU0VfU0lHSUwsXG4gICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICBDTEFTUyxcbiAgICBGVU5DVElPTixcbiAgICB7XG4gICAgICBiZWdpbjogJzo6J1xuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgIGJlZ2luOiAnOig/IVtcXFxcczpdKScsXG4gICAgICBjb250YWluczogW1NUUklORywge2JlZ2luOiBFTElYSVJfTUVUSE9EX1JFfV0sXG4gICAgICByZWxldmFuY2U6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICBiZWdpbjogRUxJWElSX0lERU5UX1JFICsgJzooPyE6KScsXG4gICAgICByZWxldmFuY2U6IDBcbiAgICB9LFxuICAgIE5VTUJFUixcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICBiZWdpbjogJyhcXFxcJFxcXFxXKXwoKFxcXFwkfFxcXFxAXFxcXEA/KShcXFxcdyspKSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGJlZ2luOiAnLT4nXG4gICAgfSxcbiAgICB7IC8vIHJlZ2V4cCBjb250YWluZXJcbiAgICAgIGJlZ2luOiAnKCcgKyBobGpzLlJFX1NUQVJURVJTX1JFICsgJylcXFxccyonLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgICAge1xuICAgICAgICAgIC8vIHRvIHByZXZlbnQgZmFsc2UgcmVnZXggdHJpZ2dlcnMgZm9yIHRoZSBkaXZpc2lvbiBmdW5jdGlvbjpcbiAgICAgICAgICAvLyAvOlxuICAgICAgICAgIGJlZ2luOiAvXFwvOiAoPz1cXGQrXFxzKlssXFxdXSkvLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgTlVNQkVSXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAncmVnZXhwJyxcbiAgICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFLCBTVUJTVF0sXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46ICcvJywgZW5kOiAnL1thLXpdKidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnJXJcXFxcWycsIGVuZDogJ1xcXFxdW2Etel0qJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHJlbGV2YW5jZTogMFxuICAgIH1cbiAgXTtcbiAgU1VCU1QuY29udGFpbnMgPSBFTElYSVJfREVGQVVMVF9DT05UQUlOUztcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdFbGl4aXInLFxuICAgIGtleXdvcmRzOiBFTElYSVJfS0VZV09SRFMsXG4gICAgY29udGFpbnM6IEVMSVhJUl9ERUZBVUxUX0NPTlRBSU5TXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZWxpeGlyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==