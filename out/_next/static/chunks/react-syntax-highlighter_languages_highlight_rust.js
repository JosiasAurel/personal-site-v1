(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_rust"],{

/***/ "./node_modules/highlight.js/lib/languages/rust.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/rust.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Rust
Author: Andrey Vlasovskikh <andrey.vlasovskikh@gmail.com>
Contributors: Roman Shmatov <romanshmatov@gmail.com>, Kasper Andersen <kma_untrusted@protonmail.com>
Website: https://www.rust-lang.org
Category: common, system
*/

function rust(hljs) {
  var NUM_SUFFIX = '([ui](8|16|32|64|128|size)|f(32|64))\?';
  var KEYWORDS =
    'abstract as async await become box break const continue crate do dyn ' +
    'else enum extern false final fn for if impl in let loop macro match mod ' +
    'move mut override priv pub ref return self Self static struct super ' +
    'trait true try type typeof unsafe unsized use virtual where while yield';
  var BUILTINS =
    // functions
    'drop ' +
    // types
    'i8 i16 i32 i64 i128 isize ' +
    'u8 u16 u32 u64 u128 usize ' +
    'f32 f64 ' +
    'str char bool ' +
    'Box Option Result String Vec ' +
    // traits
    'Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug ' +
    'PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator ' +
    'Extend IntoIterator DoubleEndedIterator ExactSizeIterator ' +
    'SliceConcatExt ToString ' +
    // macros
    'assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! ' +
    'debug_assert! debug_assert_eq! env! panic! file! format! format_args! ' +
    'include_bin! include_str! line! local_data_key! module_path! ' +
    'option_env! print! println! select! stringify! try! unimplemented! ' +
    'unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!';
  return {
    name: 'Rust',
    aliases: ['rs'],
    keywords: {
      $pattern: hljs.IDENT_RE + '!?',
      keyword:
        KEYWORDS,
      literal:
        'true false Some None Ok Err',
      built_in:
        BUILTINS
    },
    illegal: '</',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.COMMENT('/\\*', '\\*/', {contains: ['self']}),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {begin: /b?"/, illegal: null}),
      {
        className: 'string',
        variants: [
           { begin: /r(#*)"(.|\n)*?"\1(?!#)/ },
           { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ }
        ]
      },
      {
        className: 'symbol',
        begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
      },
      {
        className: 'number',
        variants: [
          { begin: '\\b0b([01_]+)' + NUM_SUFFIX },
          { begin: '\\b0o([0-7_]+)' + NUM_SUFFIX },
          { begin: '\\b0x([A-Fa-f0-9_]+)' + NUM_SUFFIX },
          { begin: '\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)' +
                   NUM_SUFFIX
          }
        ],
        relevance: 0
      },
      {
        className: 'function',
        beginKeywords: 'fn', end: '(\\(|<)', excludeEnd: true,
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      },
      {
        className: 'meta',
        begin: '#\\!?\\[', end: '\\]',
        contains: [
          {
            className: 'meta-string',
            begin: /"/, end: /"/
          }
        ]
      },
      {
        className: 'class',
        beginKeywords: 'type', end: ';',
        contains: [
          hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, {endsParent: true})
        ],
        illegal: '\\S'
      },
      {
        className: 'class',
        beginKeywords: 'trait enum struct union', end: '{',
        contains: [
          hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, {endsParent: true})
        ],
        illegal: '[\\w\\d]'
      },
      {
        begin: hljs.IDENT_RE + '::',
        keywords: {built_in: BUILTINS}
      },
      {
        begin: '->'
      }
    ]
  };
}

module.exports = rust;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3J1c3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQW1CO0FBQ3ZELDRDQUE0Qyw0QkFBNEI7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrQ0FBa0M7QUFDOUMsWUFBWSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ2hEO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNDQUFzQztBQUNqRCxXQUFXLHVDQUF1QztBQUNsRCxXQUFXLDZDQUE2QztBQUN4RCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSxvREFBb0QsaUJBQWlCO0FBQ3JFO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBLG9EQUFvRCxpQkFBaUI7QUFDckU7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9ydXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBSdXN0XG5BdXRob3I6IEFuZHJleSBWbGFzb3Zza2lraCA8YW5kcmV5LnZsYXNvdnNraWtoQGdtYWlsLmNvbT5cbkNvbnRyaWJ1dG9yczogUm9tYW4gU2htYXRvdiA8cm9tYW5zaG1hdG92QGdtYWlsLmNvbT4sIEthc3BlciBBbmRlcnNlbiA8a21hX3VudHJ1c3RlZEBwcm90b25tYWlsLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vd3d3LnJ1c3QtbGFuZy5vcmdcbkNhdGVnb3J5OiBjb21tb24sIHN5c3RlbVxuKi9cblxuZnVuY3Rpb24gcnVzdChobGpzKSB7XG4gIHZhciBOVU1fU1VGRklYID0gJyhbdWldKDh8MTZ8MzJ8NjR8MTI4fHNpemUpfGYoMzJ8NjQpKVxcPyc7XG4gIHZhciBLRVlXT1JEUyA9XG4gICAgJ2Fic3RyYWN0IGFzIGFzeW5jIGF3YWl0IGJlY29tZSBib3ggYnJlYWsgY29uc3QgY29udGludWUgY3JhdGUgZG8gZHluICcgK1xuICAgICdlbHNlIGVudW0gZXh0ZXJuIGZhbHNlIGZpbmFsIGZuIGZvciBpZiBpbXBsIGluIGxldCBsb29wIG1hY3JvIG1hdGNoIG1vZCAnICtcbiAgICAnbW92ZSBtdXQgb3ZlcnJpZGUgcHJpdiBwdWIgcmVmIHJldHVybiBzZWxmIFNlbGYgc3RhdGljIHN0cnVjdCBzdXBlciAnICtcbiAgICAndHJhaXQgdHJ1ZSB0cnkgdHlwZSB0eXBlb2YgdW5zYWZlIHVuc2l6ZWQgdXNlIHZpcnR1YWwgd2hlcmUgd2hpbGUgeWllbGQnO1xuICB2YXIgQlVJTFRJTlMgPVxuICAgIC8vIGZ1bmN0aW9uc1xuICAgICdkcm9wICcgK1xuICAgIC8vIHR5cGVzXG4gICAgJ2k4IGkxNiBpMzIgaTY0IGkxMjggaXNpemUgJyArXG4gICAgJ3U4IHUxNiB1MzIgdTY0IHUxMjggdXNpemUgJyArXG4gICAgJ2YzMiBmNjQgJyArXG4gICAgJ3N0ciBjaGFyIGJvb2wgJyArXG4gICAgJ0JveCBPcHRpb24gUmVzdWx0IFN0cmluZyBWZWMgJyArXG4gICAgLy8gdHJhaXRzXG4gICAgJ0NvcHkgU2VuZCBTaXplZCBTeW5jIERyb3AgRm4gRm5NdXQgRm5PbmNlIFRvT3duZWQgQ2xvbmUgRGVidWcgJyArXG4gICAgJ1BhcnRpYWxFcSBQYXJ0aWFsT3JkIEVxIE9yZCBBc1JlZiBBc011dCBJbnRvIEZyb20gRGVmYXVsdCBJdGVyYXRvciAnICtcbiAgICAnRXh0ZW5kIEludG9JdGVyYXRvciBEb3VibGVFbmRlZEl0ZXJhdG9yIEV4YWN0U2l6ZUl0ZXJhdG9yICcgK1xuICAgICdTbGljZUNvbmNhdEV4dCBUb1N0cmluZyAnICtcbiAgICAvLyBtYWNyb3NcbiAgICAnYXNzZXJ0ISBhc3NlcnRfZXEhIGJpdGZsYWdzISBieXRlcyEgY2ZnISBjb2whIGNvbmNhdCEgY29uY2F0X2lkZW50cyEgJyArXG4gICAgJ2RlYnVnX2Fzc2VydCEgZGVidWdfYXNzZXJ0X2VxISBlbnYhIHBhbmljISBmaWxlISBmb3JtYXQhIGZvcm1hdF9hcmdzISAnICtcbiAgICAnaW5jbHVkZV9iaW4hIGluY2x1ZGVfc3RyISBsaW5lISBsb2NhbF9kYXRhX2tleSEgbW9kdWxlX3BhdGghICcgK1xuICAgICdvcHRpb25fZW52ISBwcmludCEgcHJpbnRsbiEgc2VsZWN0ISBzdHJpbmdpZnkhIHRyeSEgdW5pbXBsZW1lbnRlZCEgJyArXG4gICAgJ3VucmVhY2hhYmxlISB2ZWMhIHdyaXRlISB3cml0ZWxuISBtYWNyb19ydWxlcyEgYXNzZXJ0X25lISBkZWJ1Z19hc3NlcnRfbmUhJztcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnUnVzdCcsXG4gICAgYWxpYXNlczogWydycyddLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAkcGF0dGVybjogaGxqcy5JREVOVF9SRSArICchPycsXG4gICAgICBrZXl3b3JkOlxuICAgICAgICBLRVlXT1JEUyxcbiAgICAgIGxpdGVyYWw6XG4gICAgICAgICd0cnVlIGZhbHNlIFNvbWUgTm9uZSBPayBFcnInLFxuICAgICAgYnVpbHRfaW46XG4gICAgICAgIEJVSUxUSU5TXG4gICAgfSxcbiAgICBpbGxlZ2FsOiAnPC8nLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNPTU1FTlQoJy9cXFxcKicsICdcXFxcKi8nLCB7Y29udGFpbnM6IFsnc2VsZiddfSksXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge2JlZ2luOiAvYj9cIi8sIGlsbGVnYWw6IG51bGx9KSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgeyBiZWdpbjogL3IoIyopXCIoLnxcXG4pKj9cIlxcMSg/ISMpLyB9LFxuICAgICAgICAgICB7IGJlZ2luOiAvYj8nXFxcXD8oeFxcd3syfXx1XFx3ezR9fFVcXHd7OH18LiknLyB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIGJlZ2luOiAvJ1thLXpBLVpfXVthLXpBLVowLTlfXSovXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHsgYmVnaW46ICdcXFxcYjBiKFswMV9dKyknICsgTlVNX1NVRkZJWCB9LFxuICAgICAgICAgIHsgYmVnaW46ICdcXFxcYjBvKFswLTdfXSspJyArIE5VTV9TVUZGSVggfSxcbiAgICAgICAgICB7IGJlZ2luOiAnXFxcXGIweChbQS1GYS1mMC05X10rKScgKyBOVU1fU1VGRklYIH0sXG4gICAgICAgICAgeyBiZWdpbjogJ1xcXFxiKFxcXFxkW1xcXFxkX10qKFxcXFwuWzAtOV9dKyk/KFtlRV1bKy1dP1swLTlfXSspPyknICtcbiAgICAgICAgICAgICAgICAgICBOVU1fU1VGRklYXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2ZuJywgZW5kOiAnKFxcXFwofDwpJywgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJyNcXFxcIT9cXFxcWycsIGVuZDogJ1xcXFxdJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhLXN0cmluZycsXG4gICAgICAgICAgICBiZWdpbjogL1wiLywgZW5kOiAvXCIvXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICd0eXBlJywgZW5kOiAnOycsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFLCB7ZW5kc1BhcmVudDogdHJ1ZX0pXG4gICAgICAgIF0sXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcUydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ3RyYWl0IGVudW0gc3RydWN0IHVuaW9uJywgZW5kOiAneycsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFLCB7ZW5kc1BhcmVudDogdHJ1ZX0pXG4gICAgICAgIF0sXG4gICAgICAgIGlsbGVnYWw6ICdbXFxcXHdcXFxcZF0nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogaGxqcy5JREVOVF9SRSArICc6OicsXG4gICAgICAgIGtleXdvcmRzOiB7YnVpbHRfaW46IEJVSUxUSU5TfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICctPidcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcnVzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=