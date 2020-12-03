(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_ruby"],{

/***/ "./node_modules/highlight.js/lib/languages/ruby.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/ruby.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Ruby
Description: Ruby is a dynamic, open source programming language with a focus on simplicity and productivity.
Website: https://www.ruby-lang.org/
Author: Anton Kovalyov <anton@kovalyov.net>
Contributors: Peter Leonov <gojpeg@yandex.ru>, Vasily Polovnyov <vast@whiteants.net>, Loren Segal <lsegal@soen.ca>, Pascal Hurni <phi@ruby-reactive.org>, Cedric Sohrauer <sohrauer@googlemail.com>
Category: common
*/

function ruby(hljs) {
  var RUBY_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?';
  var RUBY_KEYWORDS = {
    keyword:
      'and then defined module in return redo if BEGIN retry end for self when ' +
      'next until do begin unless END rescue else break undef not super class case ' +
      'require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor',
    literal:
      'true false nil'
  };
  var YARDOCTAG = {
    className: 'doctag',
    begin: '@[A-Za-z]+'
  };
  var IRB_OBJECT = {
    begin: '#<', end: '>'
  };
  var COMMENT_MODES = [
    hljs.COMMENT(
      '#',
      '$',
      {
        contains: [YARDOCTAG]
      }
    ),
    hljs.COMMENT(
      '^\\=begin',
      '^\\=end',
      {
        contains: [YARDOCTAG],
        relevance: 10
      }
    ),
    hljs.COMMENT('^__END__', '\\n$')
  ];
  var SUBST = {
    className: 'subst',
    begin: '#\\{', end: '}',
    keywords: RUBY_KEYWORDS
  };
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
    variants: [
      {begin: /'/, end: /'/},
      {begin: /"/, end: /"/},
      {begin: /`/, end: /`/},
      {begin: '%[qQwWx]?\\(', end: '\\)'},
      {begin: '%[qQwWx]?\\[', end: '\\]'},
      {begin: '%[qQwWx]?{', end: '}'},
      {begin: '%[qQwWx]?<', end: '>'},
      {begin: '%[qQwWx]?/', end: '/'},
      {begin: '%[qQwWx]?%', end: '%'},
      {begin: '%[qQwWx]?-', end: '-'},
      {begin: '%[qQwWx]?\\|', end: '\\|'},
      {
        // \B in the beginning suppresses recognition of ?-sequences where ?
        // is the last character of a preceding identifier, as in: `func?4`
        begin: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
      },
      { // heredocs
        begin: /<<[-~]?'?(\w+)(?:.|\n)*?\n\s*\1\b/,
        returnBegin: true,
        contains: [
          { begin: /<<[-~]?'?/ },
          hljs.END_SAME_AS_BEGIN({
            begin: /(\w+)/, end: /(\w+)/,
            contains: [hljs.BACKSLASH_ESCAPE, SUBST],
          })
        ]
      }
    ]
  };
  var PARAMS = {
    className: 'params',
    begin: '\\(', end: '\\)', endsParent: true,
    keywords: RUBY_KEYWORDS
  };

  var RUBY_DEFAULT_CONTAINS = [
    STRING,
    IRB_OBJECT,
    {
      className: 'class',
      beginKeywords: 'class module', end: '$|;',
      illegal: /=/,
      contains: [
        hljs.inherit(hljs.TITLE_MODE, {begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?'}),
        {
          begin: '<\\s*',
          contains: [{
            begin: '(' + hljs.IDENT_RE + '::)?' + hljs.IDENT_RE
          }]
        }
      ].concat(COMMENT_MODES)
    },
    {
      className: 'function',
      beginKeywords: 'def', end: '$|;',
      contains: [
        hljs.inherit(hljs.TITLE_MODE, {begin: RUBY_METHOD_RE}),
        PARAMS
      ].concat(COMMENT_MODES)
    },
    {
      // swallow namespace qualifiers before symbols
      begin: hljs.IDENT_RE + '::'
    },
    {
      className: 'symbol',
      begin: hljs.UNDERSCORE_IDENT_RE + '(\\!|\\?)?:',
      relevance: 0
    },
    {
      className: 'symbol',
      begin: ':(?!\\s)',
      contains: [STRING, {begin: RUBY_METHOD_RE}],
      relevance: 0
    },
    {
      className: 'number',
      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
      relevance: 0
    },
    {
      begin: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))' // variables
    },
    {
      className: 'params',
      begin: /\|/, end: /\|/,
      keywords: RUBY_KEYWORDS
    },
    { // regexp container
      begin: '(' + hljs.RE_STARTERS_RE + '|unless)\\s*',
      keywords: 'unless',
      contains: [
        IRB_OBJECT,
        {
          className: 'regexp',
          contains: [hljs.BACKSLASH_ESCAPE, SUBST],
          illegal: /\n/,
          variants: [
            {begin: '/', end: '/[a-z]*'},
            {begin: '%r{', end: '}[a-z]*'},
            {begin: '%r\\(', end: '\\)[a-z]*'},
            {begin: '%r!', end: '![a-z]*'},
            {begin: '%r\\[', end: '\\][a-z]*'}
          ]
        }
      ].concat(COMMENT_MODES),
      relevance: 0
    }
  ].concat(COMMENT_MODES);

  SUBST.contains = RUBY_DEFAULT_CONTAINS;
  PARAMS.contains = RUBY_DEFAULT_CONTAINS;

  var SIMPLE_PROMPT = "[>?]>";
  var DEFAULT_PROMPT = "[\\w#]+\\(\\w+\\):\\d+:\\d+>";
  var RVM_PROMPT = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>";

  var IRB_DEFAULT = [
    {
      begin: /^\s*=>/,
      starts: {
        end: '$', contains: RUBY_DEFAULT_CONTAINS
      }
    },
    {
      className: 'meta',
      begin: '^('+SIMPLE_PROMPT+"|"+DEFAULT_PROMPT+'|'+RVM_PROMPT+')',
      starts: {
        end: '$', contains: RUBY_DEFAULT_CONTAINS
      }
    }
  ];

  return {
    name: 'Ruby',
    aliases: ['rb', 'gemspec', 'podspec', 'thor', 'irb'],
    keywords: RUBY_KEYWORDS,
    illegal: /\/\*/,
    contains: COMMENT_MODES.concat(IRB_DEFAULT).concat(RUBY_DEFAULT_CONTAINS)
  };
}

module.exports = ruby;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3J1YnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixVQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sa0NBQWtDO0FBQ3pDLE9BQU8sa0NBQWtDO0FBQ3pDLE9BQU8sa0JBQWtCLFVBQVUsRUFBRTtBQUNyQyxPQUFPLDhCQUE4QjtBQUNyQyxPQUFPLDhCQUE4QjtBQUNyQyxPQUFPLDhCQUE4QjtBQUNyQyxPQUFPLDhCQUE4QjtBQUNyQyxPQUFPLGtDQUFrQztBQUN6QztBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsSUFBSSxnQkFBZ0IsSUFBSSxnQkFBZ0IsRUFBRTtBQUNwRSxPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0EsdUNBQXVDLDBDQUEwQztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSx1Q0FBdUMsc0JBQXNCO0FBQzdEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzQkFBc0I7QUFDaEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwyQkFBMkI7QUFDeEMsYUFBYSxXQUFXLFVBQVUsUUFBUTtBQUMxQyxhQUFhLGlDQUFpQztBQUM5QyxhQUFhLDZCQUE2QjtBQUMxQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9ydWJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBSdWJ5XG5EZXNjcmlwdGlvbjogUnVieSBpcyBhIGR5bmFtaWMsIG9wZW4gc291cmNlIHByb2dyYW1taW5nIGxhbmd1YWdlIHdpdGggYSBmb2N1cyBvbiBzaW1wbGljaXR5IGFuZCBwcm9kdWN0aXZpdHkuXG5XZWJzaXRlOiBodHRwczovL3d3dy5ydWJ5LWxhbmcub3JnL1xuQXV0aG9yOiBBbnRvbiBLb3ZhbHlvdiA8YW50b25Aa292YWx5b3YubmV0PlxuQ29udHJpYnV0b3JzOiBQZXRlciBMZW9ub3YgPGdvanBlZ0B5YW5kZXgucnU+LCBWYXNpbHkgUG9sb3ZueW92IDx2YXN0QHdoaXRlYW50cy5uZXQ+LCBMb3JlbiBTZWdhbCA8bHNlZ2FsQHNvZW4uY2E+LCBQYXNjYWwgSHVybmkgPHBoaUBydWJ5LXJlYWN0aXZlLm9yZz4sIENlZHJpYyBTb2hyYXVlciA8c29ocmF1ZXJAZ29vZ2xlbWFpbC5jb20+XG5DYXRlZ29yeTogY29tbW9uXG4qL1xuXG5mdW5jdGlvbiBydWJ5KGhsanMpIHtcbiAgdmFyIFJVQllfTUVUSE9EX1JFID0gJ1thLXpBLVpfXVxcXFx3KlshPz1dP3xbLSt+XVxcXFxAfDw8fD4+fD1+fD09PT98PD0+fFs8Pl09P3xcXFxcKlxcXFwqfFstLyslXiYqfmB8XXxcXFxcW1xcXFxdPT8nO1xuICB2YXIgUlVCWV9LRVlXT1JEUyA9IHtcbiAgICBrZXl3b3JkOlxuICAgICAgJ2FuZCB0aGVuIGRlZmluZWQgbW9kdWxlIGluIHJldHVybiByZWRvIGlmIEJFR0lOIHJldHJ5IGVuZCBmb3Igc2VsZiB3aGVuICcgK1xuICAgICAgJ25leHQgdW50aWwgZG8gYmVnaW4gdW5sZXNzIEVORCByZXNjdWUgZWxzZSBicmVhayB1bmRlZiBub3Qgc3VwZXIgY2xhc3MgY2FzZSAnICtcbiAgICAgICdyZXF1aXJlIHlpZWxkIGFsaWFzIHdoaWxlIGVuc3VyZSBlbHNpZiBvciBpbmNsdWRlIGF0dHJfcmVhZGVyIGF0dHJfd3JpdGVyIGF0dHJfYWNjZXNzb3InLFxuICAgIGxpdGVyYWw6XG4gICAgICAndHJ1ZSBmYWxzZSBuaWwnXG4gIH07XG4gIHZhciBZQVJET0NUQUcgPSB7XG4gICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICBiZWdpbjogJ0BbQS1aYS16XSsnXG4gIH07XG4gIHZhciBJUkJfT0JKRUNUID0ge1xuICAgIGJlZ2luOiAnIzwnLCBlbmQ6ICc+J1xuICB9O1xuICB2YXIgQ09NTUVOVF9NT0RFUyA9IFtcbiAgICBobGpzLkNPTU1FTlQoXG4gICAgICAnIycsXG4gICAgICAnJCcsXG4gICAgICB7XG4gICAgICAgIGNvbnRhaW5zOiBbWUFSRE9DVEFHXVxuICAgICAgfVxuICAgICksXG4gICAgaGxqcy5DT01NRU5UKFxuICAgICAgJ15cXFxcPWJlZ2luJyxcbiAgICAgICdeXFxcXD1lbmQnLFxuICAgICAge1xuICAgICAgICBjb250YWluczogW1lBUkRPQ1RBR10sXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH1cbiAgICApLFxuICAgIGhsanMuQ09NTUVOVCgnXl9fRU5EX18nLCAnXFxcXG4kJylcbiAgXTtcbiAgdmFyIFNVQlNUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICBiZWdpbjogJyNcXFxceycsIGVuZDogJ30nLFxuICAgIGtleXdvcmRzOiBSVUJZX0tFWVdPUkRTXG4gIH07XG4gIHZhciBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRSwgU1VCU1RdLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7YmVnaW46IC8nLywgZW5kOiAvJy99LFxuICAgICAge2JlZ2luOiAvXCIvLCBlbmQ6IC9cIi99LFxuICAgICAge2JlZ2luOiAvYC8sIGVuZDogL2AvfSxcbiAgICAgIHtiZWdpbjogJyVbcVF3V3hdP1xcXFwoJywgZW5kOiAnXFxcXCknfSxcbiAgICAgIHtiZWdpbjogJyVbcVF3V3hdP1xcXFxbJywgZW5kOiAnXFxcXF0nfSxcbiAgICAgIHtiZWdpbjogJyVbcVF3V3hdP3snLCBlbmQ6ICd9J30sXG4gICAgICB7YmVnaW46ICclW3FRd1d4XT88JywgZW5kOiAnPid9LFxuICAgICAge2JlZ2luOiAnJVtxUXdXeF0/LycsIGVuZDogJy8nfSxcbiAgICAgIHtiZWdpbjogJyVbcVF3V3hdPyUnLCBlbmQ6ICclJ30sXG4gICAgICB7YmVnaW46ICclW3FRd1d4XT8tJywgZW5kOiAnLSd9LFxuICAgICAge2JlZ2luOiAnJVtxUXdXeF0/XFxcXHwnLCBlbmQ6ICdcXFxcfCd9LFxuICAgICAge1xuICAgICAgICAvLyBcXEIgaW4gdGhlIGJlZ2lubmluZyBzdXBwcmVzc2VzIHJlY29nbml0aW9uIG9mID8tc2VxdWVuY2VzIHdoZXJlID9cbiAgICAgICAgLy8gaXMgdGhlIGxhc3QgY2hhcmFjdGVyIG9mIGEgcHJlY2VkaW5nIGlkZW50aWZpZXIsIGFzIGluOiBgZnVuYz80YFxuICAgICAgICBiZWdpbjogL1xcQlxcPyhcXFxcXFxkezEsM318XFxcXHhbQS1GYS1mMC05XXsxLDJ9fFxcXFx1W0EtRmEtZjAtOV17NH18XFxcXD9cXFMpXFxiL1xuICAgICAgfSxcbiAgICAgIHsgLy8gaGVyZWRvY3NcbiAgICAgICAgYmVnaW46IC88PFstfl0/Jz8oXFx3KykoPzoufFxcbikqP1xcblxccypcXDFcXGIvLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7IGJlZ2luOiAvPDxbLX5dPyc/LyB9LFxuICAgICAgICAgIGhsanMuRU5EX1NBTUVfQVNfQkVHSU4oe1xuICAgICAgICAgICAgYmVnaW46IC8oXFx3KykvLCBlbmQ6IC8oXFx3KykvLFxuICAgICAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEUsIFNVQlNUXSxcbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xuICB2YXIgUEFSQU1TID0ge1xuICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgYmVnaW46ICdcXFxcKCcsIGVuZDogJ1xcXFwpJywgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICBrZXl3b3JkczogUlVCWV9LRVlXT1JEU1xuICB9O1xuXG4gIHZhciBSVUJZX0RFRkFVTFRfQ09OVEFJTlMgPSBbXG4gICAgU1RSSU5HLFxuICAgIElSQl9PQkpFQ1QsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzIG1vZHVsZScsIGVuZDogJyR8OycsXG4gICAgICBpbGxlZ2FsOiAvPS8sXG4gICAgICBjb250YWluczogW1xuICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7YmVnaW46ICdbQS1aYS16X11cXFxcdyooOjpcXFxcdyspKihcXFxcP3xcXFxcISk/J30pLFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICc8XFxcXHMqJyxcbiAgICAgICAgICBjb250YWluczogW3tcbiAgICAgICAgICAgIGJlZ2luOiAnKCcgKyBobGpzLklERU5UX1JFICsgJzo6KT8nICsgaGxqcy5JREVOVF9SRVxuICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICAgIF0uY29uY2F0KENPTU1FTlRfTU9ERVMpXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICBiZWdpbktleXdvcmRzOiAnZGVmJywgZW5kOiAnJHw7JyxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtiZWdpbjogUlVCWV9NRVRIT0RfUkV9KSxcbiAgICAgICAgUEFSQU1TXG4gICAgICBdLmNvbmNhdChDT01NRU5UX01PREVTKVxuICAgIH0sXG4gICAge1xuICAgICAgLy8gc3dhbGxvdyBuYW1lc3BhY2UgcXVhbGlmaWVycyBiZWZvcmUgc3ltYm9sc1xuICAgICAgYmVnaW46IGhsanMuSURFTlRfUkUgKyAnOjonXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgYmVnaW46IGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSArICcoXFxcXCF8XFxcXD8pPzonLFxuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgYmVnaW46ICc6KD8hXFxcXHMpJyxcbiAgICAgIGNvbnRhaW5zOiBbU1RSSU5HLCB7YmVnaW46IFJVQllfTUVUSE9EX1JFfV0sXG4gICAgICByZWxldmFuY2U6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICBiZWdpbjogJyhcXFxcYjBbMC03X10rKXwoXFxcXGIweFswLTlhLWZBLUZfXSspfChcXFxcYlsxLTldWzAtOV9dKihcXFxcLlswLTlfXSspPyl8WzBfXVxcXFxiJyxcbiAgICAgIHJlbGV2YW5jZTogMFxuICAgIH0sXG4gICAge1xuICAgICAgYmVnaW46ICcoXFxcXCRcXFxcVyl8KChcXFxcJHxcXFxcQFxcXFxAPykoXFxcXHcrKSknIC8vIHZhcmlhYmxlc1xuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgIGJlZ2luOiAvXFx8LywgZW5kOiAvXFx8LyxcbiAgICAgIGtleXdvcmRzOiBSVUJZX0tFWVdPUkRTXG4gICAgfSxcbiAgICB7IC8vIHJlZ2V4cCBjb250YWluZXJcbiAgICAgIGJlZ2luOiAnKCcgKyBobGpzLlJFX1NUQVJURVJTX1JFICsgJ3x1bmxlc3MpXFxcXHMqJyxcbiAgICAgIGtleXdvcmRzOiAndW5sZXNzJyxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIElSQl9PQkpFQ1QsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdyZWdleHAnLFxuICAgICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFLCBTVUJTVF0sXG4gICAgICAgICAgaWxsZWdhbDogL1xcbi8sXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtiZWdpbjogJy8nLCBlbmQ6ICcvW2Etel0qJ30sXG4gICAgICAgICAgICB7YmVnaW46ICclcnsnLCBlbmQ6ICd9W2Etel0qJ30sXG4gICAgICAgICAgICB7YmVnaW46ICclclxcXFwoJywgZW5kOiAnXFxcXClbYS16XSonfSxcbiAgICAgICAgICAgIHtiZWdpbjogJyVyIScsIGVuZDogJyFbYS16XSonfSxcbiAgICAgICAgICAgIHtiZWdpbjogJyVyXFxcXFsnLCBlbmQ6ICdcXFxcXVthLXpdKid9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdLmNvbmNhdChDT01NRU5UX01PREVTKSxcbiAgICAgIHJlbGV2YW5jZTogMFxuICAgIH1cbiAgXS5jb25jYXQoQ09NTUVOVF9NT0RFUyk7XG5cbiAgU1VCU1QuY29udGFpbnMgPSBSVUJZX0RFRkFVTFRfQ09OVEFJTlM7XG4gIFBBUkFNUy5jb250YWlucyA9IFJVQllfREVGQVVMVF9DT05UQUlOUztcblxuICB2YXIgU0lNUExFX1BST01QVCA9IFwiWz4/XT5cIjtcbiAgdmFyIERFRkFVTFRfUFJPTVBUID0gXCJbXFxcXHcjXStcXFxcKFxcXFx3K1xcXFwpOlxcXFxkKzpcXFxcZCs+XCI7XG4gIHZhciBSVk1fUFJPTVBUID0gXCIoXFxcXHcrLSk/XFxcXGQrXFxcXC5cXFxcZCtcXFxcLlxcXFxkKHBcXFxcZCspP1tePl0rPlwiO1xuXG4gIHZhciBJUkJfREVGQVVMVCA9IFtcbiAgICB7XG4gICAgICBiZWdpbjogL15cXHMqPT4vLFxuICAgICAgc3RhcnRzOiB7XG4gICAgICAgIGVuZDogJyQnLCBjb250YWluczogUlVCWV9ERUZBVUxUX0NPTlRBSU5TXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgIGJlZ2luOiAnXignK1NJTVBMRV9QUk9NUFQrXCJ8XCIrREVGQVVMVF9QUk9NUFQrJ3wnK1JWTV9QUk9NUFQrJyknLFxuICAgICAgc3RhcnRzOiB7XG4gICAgICAgIGVuZDogJyQnLCBjb250YWluczogUlVCWV9ERUZBVUxUX0NPTlRBSU5TXG4gICAgICB9XG4gICAgfVxuICBdO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1J1YnknLFxuICAgIGFsaWFzZXM6IFsncmInLCAnZ2Vtc3BlYycsICdwb2RzcGVjJywgJ3Rob3InLCAnaXJiJ10sXG4gICAga2V5d29yZHM6IFJVQllfS0VZV09SRFMsXG4gICAgaWxsZWdhbDogL1xcL1xcKi8sXG4gICAgY29udGFpbnM6IENPTU1FTlRfTU9ERVMuY29uY2F0KElSQl9ERUZBVUxUKS5jb25jYXQoUlVCWV9ERUZBVUxUX0NPTlRBSU5TKVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJ1Ynk7XG4iXSwic291cmNlUm9vdCI6IiJ9