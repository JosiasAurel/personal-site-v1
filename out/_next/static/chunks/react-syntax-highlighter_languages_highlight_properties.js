(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_properties"],{

/***/ "./node_modules/highlight.js/lib/languages/properties.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/properties.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: .properties
Contributors: Valentin Aitken <valentin@nalisbg.com>, Egor Rogov <e.rogov@postgrespro.ru>
Website: https://en.wikipedia.org/wiki/.properties
Category: common, config
*/

function properties(hljs) {

  // whitespaces: space, tab, formfeed
  var WS0 = '[ \\t\\f]*';
  var WS1 = '[ \\t\\f]+';
  // delimiter
  var DELIM = '(' + WS0+'[:=]'+WS0+ '|' + WS1 + ')';
  var KEY_ALPHANUM = '([^\\\\\\W:= \\t\\f\\n]|\\\\.)+';
  var KEY_OTHER = '([^\\\\:= \\t\\f\\n]|\\\\.)+';

  var DELIM_AND_VALUE = {
          // skip DELIM
          end: DELIM,
          relevance: 0,
          starts: {
            // value: everything until end of line (again, taking into account backslashes)
            className: 'string',
            end: /$/,
            relevance: 0,
            contains: [
              { begin: '\\\\\\n' }
            ]
          }
        };

  return {
    name: '.properties',
    case_insensitive: true,
    illegal: /\S/,
    contains: [
      hljs.COMMENT('^\\s*[!#]', '$'),
      // key: everything until whitespace or = or : (taking into account backslashes)
      // case of a "normal" key
      {
        begin: KEY_ALPHANUM + DELIM,
        returnBegin: true,
        contains: [
          {
            className: 'attr',
            begin: KEY_ALPHANUM,
            endsParent: true,
            relevance: 0
          }
        ],
        starts: DELIM_AND_VALUE
      },
      // case of key containing non-alphanumeric chars => relevance = 0
      {
        begin: KEY_OTHER + DELIM,
        returnBegin: true,
        relevance: 0,
        contains: [
          {
            className: 'meta',
            begin: KEY_OTHER,
            endsParent: true,
            relevance: 0
          }
        ],
        starts: DELIM_AND_VALUE
      },
      // case of an empty key
      {
        className: 'attr',
        relevance: 0,
        begin: KEY_OTHER + WS0 + '$'
      }
    ]
  };
}

module.exports = properties;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3Byb3BlcnRpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfcHJvcGVydGllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogLnByb3BlcnRpZXNcbkNvbnRyaWJ1dG9yczogVmFsZW50aW4gQWl0a2VuIDx2YWxlbnRpbkBuYWxpc2JnLmNvbT4sIEVnb3IgUm9nb3YgPGUucm9nb3ZAcG9zdGdyZXNwcm8ucnU+XG5XZWJzaXRlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS8ucHJvcGVydGllc1xuQ2F0ZWdvcnk6IGNvbW1vbiwgY29uZmlnXG4qL1xuXG5mdW5jdGlvbiBwcm9wZXJ0aWVzKGhsanMpIHtcblxuICAvLyB3aGl0ZXNwYWNlczogc3BhY2UsIHRhYiwgZm9ybWZlZWRcbiAgdmFyIFdTMCA9ICdbIFxcXFx0XFxcXGZdKic7XG4gIHZhciBXUzEgPSAnWyBcXFxcdFxcXFxmXSsnO1xuICAvLyBkZWxpbWl0ZXJcbiAgdmFyIERFTElNID0gJygnICsgV1MwKydbOj1dJytXUzArICd8JyArIFdTMSArICcpJztcbiAgdmFyIEtFWV9BTFBIQU5VTSA9ICcoW15cXFxcXFxcXFxcXFxXOj0gXFxcXHRcXFxcZlxcXFxuXXxcXFxcXFxcXC4pKyc7XG4gIHZhciBLRVlfT1RIRVIgPSAnKFteXFxcXFxcXFw6PSBcXFxcdFxcXFxmXFxcXG5dfFxcXFxcXFxcLikrJztcblxuICB2YXIgREVMSU1fQU5EX1ZBTFVFID0ge1xuICAgICAgICAgIC8vIHNraXAgREVMSU1cbiAgICAgICAgICBlbmQ6IERFTElNLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgIC8vIHZhbHVlOiBldmVyeXRoaW5nIHVudGlsIGVuZCBvZiBsaW5lIChhZ2FpbiwgdGFraW5nIGludG8gYWNjb3VudCBiYWNrc2xhc2hlcylcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHsgYmVnaW46ICdcXFxcXFxcXFxcXFxuJyB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJy5wcm9wZXJ0aWVzJyxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGlsbGVnYWw6IC9cXFMvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNPTU1FTlQoJ15cXFxccypbISNdJywgJyQnKSxcbiAgICAgIC8vIGtleTogZXZlcnl0aGluZyB1bnRpbCB3aGl0ZXNwYWNlIG9yID0gb3IgOiAodGFraW5nIGludG8gYWNjb3VudCBiYWNrc2xhc2hlcylcbiAgICAgIC8vIGNhc2Ugb2YgYSBcIm5vcm1hbFwiIGtleVxuICAgICAge1xuICAgICAgICBiZWdpbjogS0VZX0FMUEhBTlVNICsgREVMSU0sXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICAgICAgYmVnaW46IEtFWV9BTFBIQU5VTSxcbiAgICAgICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXJ0czogREVMSU1fQU5EX1ZBTFVFXG4gICAgICB9LFxuICAgICAgLy8gY2FzZSBvZiBrZXkgY29udGFpbmluZyBub24tYWxwaGFudW1lcmljIGNoYXJzID0+IHJlbGV2YW5jZSA9IDBcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IEtFWV9PVEhFUiArIERFTElNLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgICAgYmVnaW46IEtFWV9PVEhFUixcbiAgICAgICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXJ0czogREVMSU1fQU5EX1ZBTFVFXG4gICAgICB9LFxuICAgICAgLy8gY2FzZSBvZiBhbiBlbXB0eSBrZXlcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYXR0cicsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgYmVnaW46IEtFWV9PVEhFUiArIFdTMCArICckJ1xuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9wZXJ0aWVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==