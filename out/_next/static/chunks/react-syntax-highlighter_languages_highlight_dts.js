(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_dts"],{

/***/ "./node_modules/highlight.js/lib/languages/dts.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dts.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Device Tree
Description: *.dts files used in the Linux kernel
Author: Martin Braun <martin.braun@ettus.com>, Moritz Fischer <moritz.fischer@ettus.com>
Website: https://elinux.org/Device_Tree_Reference
Category: config
*/

function dts(hljs) {
  var STRINGS = {
    className: 'string',
    variants: [
      hljs.inherit(hljs.QUOTE_STRING_MODE, { begin: '((u8?|U)|L)?"' }),
      {
        begin: '(u8?|U)?R"', end: '"',
        contains: [hljs.BACKSLASH_ESCAPE]
      },
      {
        begin: '\'\\\\?.', end: '\'',
        illegal: '.'
      }
    ]
  };

  var NUMBERS = {
    className: 'number',
    variants: [
      { begin: '\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)' },
      { begin: hljs.C_NUMBER_RE }
    ],
    relevance: 0
  };

  var PREPROCESSOR = {
    className: 'meta',
    begin: '#', end: '$',
    keywords: {'meta-keyword': 'if else elif endif define undef ifdef ifndef'},
    contains: [
      {
        begin: /\\\n/, relevance: 0
      },
      {
        beginKeywords: 'include', end: '$',
        keywords: {'meta-keyword': 'include'},
        contains: [
          hljs.inherit(STRINGS, {className: 'meta-string'}),
          {
            className: 'meta-string',
            begin: '<', end: '>',
            illegal: '\\n'
          }
        ]
      },
      STRINGS,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE
    ]
  };

  var DTS_REFERENCE = {
    className: 'variable',
    begin: '\\&[a-z\\d_]*\\b'
  };

  var DTS_KEYWORD = {
    className: 'meta-keyword',
    begin: '/[a-z][a-z\\d-]*/'
  };

  var DTS_LABEL = {
    className: 'symbol',
    begin: '^\\s*[a-zA-Z_][a-zA-Z\\d_]*:'
  };

  var DTS_CELL_PROPERTY = {
    className: 'params',
    begin: '<',
    end: '>',
    contains: [
      NUMBERS,
      DTS_REFERENCE
    ]
  };

  var DTS_NODE = {
    className: 'class',
    begin: /[a-zA-Z_][a-zA-Z\d_@]*\s{/,
    end: /[{;=]/,
    returnBegin: true,
    excludeEnd: true
  };

  var DTS_ROOT_NODE = {
    className: 'class',
    begin: '/\\s*{',
    end: '};',
    relevance: 10,
    contains: [
      DTS_REFERENCE,
      DTS_KEYWORD,
      DTS_LABEL,
      DTS_NODE,
      DTS_CELL_PROPERTY,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      NUMBERS,
      STRINGS
    ]
  };

  return {
    name: 'Device Tree',
    keywords: "",
    contains: [
      DTS_ROOT_NODE,
      DTS_REFERENCE,
      DTS_KEYWORD,
      DTS_LABEL,
      DTS_NODE,
      DTS_CELL_PROPERTY,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      NUMBERS,
      STRINGS,
      PREPROCESSOR,
      {
        begin: hljs.IDENT_RE + '::',
        keywords: ""
      }
    ]
  };
}

module.exports = dts;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2R0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyx5QkFBeUI7QUFDckU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDBEQUEwRDtBQUNqRSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQStEO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBLGlDQUFpQyx5QkFBeUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2R0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogRGV2aWNlIFRyZWVcbkRlc2NyaXB0aW9uOiAqLmR0cyBmaWxlcyB1c2VkIGluIHRoZSBMaW51eCBrZXJuZWxcbkF1dGhvcjogTWFydGluIEJyYXVuIDxtYXJ0aW4uYnJhdW5AZXR0dXMuY29tPiwgTW9yaXR6IEZpc2NoZXIgPG1vcml0ei5maXNjaGVyQGV0dHVzLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vZWxpbnV4Lm9yZy9EZXZpY2VfVHJlZV9SZWZlcmVuY2VcbkNhdGVnb3J5OiBjb25maWdcbiovXG5cbmZ1bmN0aW9uIGR0cyhobGpzKSB7XG4gIHZhciBTVFJJTkdTID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7IGJlZ2luOiAnKCh1OD98VSl8TCk/XCInIH0pLFxuICAgICAge1xuICAgICAgICBiZWdpbjogJyh1OD98VSk/UlwiJywgZW5kOiAnXCInLFxuICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFwnXFxcXFxcXFw/LicsIGVuZDogJ1xcJycsXG4gICAgICAgIGlsbGVnYWw6ICcuJ1xuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICB2YXIgTlVNQkVSUyA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7IGJlZ2luOiAnXFxcXGIoXFxcXGQrKFxcXFwuXFxcXGQqKT98XFxcXC5cXFxcZCspKHV8VXxsfEx8dWx8VUx8ZnxGKScgfSxcbiAgICAgIHsgYmVnaW46IGhsanMuQ19OVU1CRVJfUkUgfVxuICAgIF0sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgdmFyIFBSRVBST0NFU1NPUiA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICBiZWdpbjogJyMnLCBlbmQ6ICckJyxcbiAgICBrZXl3b3JkczogeydtZXRhLWtleXdvcmQnOiAnaWYgZWxzZSBlbGlmIGVuZGlmIGRlZmluZSB1bmRlZiBpZmRlZiBpZm5kZWYnfSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcXFxcXG4vLCByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdpbmNsdWRlJywgZW5kOiAnJCcsXG4gICAgICAgIGtleXdvcmRzOiB7J21ldGEta2V5d29yZCc6ICdpbmNsdWRlJ30sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5pbmhlcml0KFNUUklOR1MsIHtjbGFzc05hbWU6ICdtZXRhLXN0cmluZyd9KSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhLXN0cmluZycsXG4gICAgICAgICAgICBiZWdpbjogJzwnLCBlbmQ6ICc+JyxcbiAgICAgICAgICAgIGlsbGVnYWw6ICdcXFxcbidcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBTVFJJTkdTLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICAgIF1cbiAgfTtcblxuICB2YXIgRFRTX1JFRkVSRU5DRSA9IHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgYmVnaW46ICdcXFxcJlthLXpcXFxcZF9dKlxcXFxiJ1xuICB9O1xuXG4gIHZhciBEVFNfS0VZV09SRCA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhLWtleXdvcmQnLFxuICAgIGJlZ2luOiAnL1thLXpdW2EtelxcXFxkLV0qLydcbiAgfTtcblxuICB2YXIgRFRTX0xBQkVMID0ge1xuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgYmVnaW46ICdeXFxcXHMqW2EtekEtWl9dW2EtekEtWlxcXFxkX10qOidcbiAgfTtcblxuICB2YXIgRFRTX0NFTExfUFJPUEVSVFkgPSB7XG4gICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICBiZWdpbjogJzwnLFxuICAgIGVuZDogJz4nLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBOVU1CRVJTLFxuICAgICAgRFRTX1JFRkVSRU5DRVxuICAgIF1cbiAgfTtcblxuICB2YXIgRFRTX05PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgIGJlZ2luOiAvW2EtekEtWl9dW2EtekEtWlxcZF9AXSpcXHN7LyxcbiAgICBlbmQ6IC9bezs9XS8sXG4gICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgZXhjbHVkZUVuZDogdHJ1ZVxuICB9O1xuXG4gIHZhciBEVFNfUk9PVF9OT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICBiZWdpbjogJy9cXFxccyp7JyxcbiAgICBlbmQ6ICd9OycsXG4gICAgcmVsZXZhbmNlOiAxMCxcbiAgICBjb250YWluczogW1xuICAgICAgRFRTX1JFRkVSRU5DRSxcbiAgICAgIERUU19LRVlXT1JELFxuICAgICAgRFRTX0xBQkVMLFxuICAgICAgRFRTX05PREUsXG4gICAgICBEVFNfQ0VMTF9QUk9QRVJUWSxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBOVU1CRVJTLFxuICAgICAgU1RSSU5HU1xuICAgIF1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdEZXZpY2UgVHJlZScsXG4gICAga2V5d29yZHM6IFwiXCIsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIERUU19ST09UX05PREUsXG4gICAgICBEVFNfUkVGRVJFTkNFLFxuICAgICAgRFRTX0tFWVdPUkQsXG4gICAgICBEVFNfTEFCRUwsXG4gICAgICBEVFNfTk9ERSxcbiAgICAgIERUU19DRUxMX1BST1BFUlRZLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIE5VTUJFUlMsXG4gICAgICBTVFJJTkdTLFxuICAgICAgUFJFUFJPQ0VTU09SLFxuICAgICAge1xuICAgICAgICBiZWdpbjogaGxqcy5JREVOVF9SRSArICc6OicsXG4gICAgICAgIGtleXdvcmRzOiBcIlwiXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGR0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=