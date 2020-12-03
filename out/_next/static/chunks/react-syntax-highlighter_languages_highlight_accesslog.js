(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_accesslog"],{

/***/ "./node_modules/highlight.js/lib/languages/accesslog.js":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/accesslog.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Language: Apache Access Log
 Author: Oleg Efimov <efimovov@gmail.com>
 Description: Apache/Nginx Access Logs
 Website: https://httpd.apache.org/docs/2.4/logs.html#accesslog
 */

 /** @type LanguageFn */
function accesslog(hljs) {
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
  var HTTP_VERBS = [
    "GET", "POST", "HEAD", "PUT", "DELETE", "CONNECT", "OPTIONS", "PATCH", "TRACE"
  ];
  return {
    name: 'Apache Access Log',
    contains: [
      // IP
      {
        className: 'number',
        begin: '^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b',
        relevance:5
      },
      // Other numbers
      {
        className: 'number',
        begin: '\\b\\d+\\b',
        relevance: 0
      },
      // Requests
      {
        className: 'string',
        begin: '"(' + HTTP_VERBS.join("|") + ')', end: '"',
        keywords: HTTP_VERBS.join(" "),
        illegal: '\\n',
        relevance: 5,
        contains: [{
          begin: 'HTTP/[12]\\.\\d',
          relevance:5
        }]
      },
      // Dates
      {
        className: 'string',
        // dates must have a certain length, this prevents matching
        // simple array accesses a[123] and [] and other common patterns
        // found in other languages
        begin: /\[\d[^\]\n]{8,}\]/,
        illegal: '\\n',
        relevance: 1
      },
      {
        className: 'string',
        begin: /\[/, end: /\]/,
        illegal: '\\n',
        relevance: 0
      },
      // User agent / relevance boost
      {
        className: 'string',
        begin: '"Mozilla/\\d\\.\\d \\\(', end: '"',
        illegal: '\\n',
        relevance: 3
      },
      // Strings
      {
        className: 'string',
        begin: '"', end: '"',
        illegal: '\\n',
        relevance: 0
      }
    ]
  };
}

module.exports = accesslog;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FjY2Vzc2xvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLElBQUksT0FBTyxJQUFJLE9BQU8sSUFBSSxPQUFPLElBQUksTUFBTSxJQUFJO0FBQ3BFO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixHQUFHO0FBQy9CO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9hY2Nlc3Nsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIExhbmd1YWdlOiBBcGFjaGUgQWNjZXNzIExvZ1xuIEF1dGhvcjogT2xlZyBFZmltb3YgPGVmaW1vdm92QGdtYWlsLmNvbT5cbiBEZXNjcmlwdGlvbjogQXBhY2hlL05naW54IEFjY2VzcyBMb2dzXG4gV2Vic2l0ZTogaHR0cHM6Ly9odHRwZC5hcGFjaGUub3JnL2RvY3MvMi40L2xvZ3MuaHRtbCNhY2Nlc3Nsb2dcbiAqL1xuXG4gLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGFjY2Vzc2xvZyhobGpzKSB7XG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvTWV0aG9kc1xuICB2YXIgSFRUUF9WRVJCUyA9IFtcbiAgICBcIkdFVFwiLCBcIlBPU1RcIiwgXCJIRUFEXCIsIFwiUFVUXCIsIFwiREVMRVRFXCIsIFwiQ09OTkVDVFwiLCBcIk9QVElPTlNcIiwgXCJQQVRDSFwiLCBcIlRSQUNFXCJcbiAgXTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQXBhY2hlIEFjY2VzcyBMb2cnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICAvLyBJUFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogJ15cXFxcZHsxLDN9XFxcXC5cXFxcZHsxLDN9XFxcXC5cXFxcZHsxLDN9XFxcXC5cXFxcZHsxLDN9KDpcXFxcZHsxLDV9KT9cXFxcYicsXG4gICAgICAgIHJlbGV2YW5jZTo1XG4gICAgICB9LFxuICAgICAgLy8gT3RoZXIgbnVtYmVyc1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogJ1xcXFxiXFxcXGQrXFxcXGInLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICAvLyBSZXF1ZXN0c1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1wiKCcgKyBIVFRQX1ZFUkJTLmpvaW4oXCJ8XCIpICsgJyknLCBlbmQ6ICdcIicsXG4gICAgICAgIGtleXdvcmRzOiBIVFRQX1ZFUkJTLmpvaW4oXCIgXCIpLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgICByZWxldmFuY2U6IDUsXG4gICAgICAgIGNvbnRhaW5zOiBbe1xuICAgICAgICAgIGJlZ2luOiAnSFRUUC9bMTJdXFxcXC5cXFxcZCcsXG4gICAgICAgICAgcmVsZXZhbmNlOjVcbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICAvLyBEYXRlc1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAvLyBkYXRlcyBtdXN0IGhhdmUgYSBjZXJ0YWluIGxlbmd0aCwgdGhpcyBwcmV2ZW50cyBtYXRjaGluZ1xuICAgICAgICAvLyBzaW1wbGUgYXJyYXkgYWNjZXNzZXMgYVsxMjNdIGFuZCBbXSBhbmQgb3RoZXIgY29tbW9uIHBhdHRlcm5zXG4gICAgICAgIC8vIGZvdW5kIGluIG90aGVyIGxhbmd1YWdlc1xuICAgICAgICBiZWdpbjogL1xcW1xcZFteXFxdXFxuXXs4LH1cXF0vLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgICByZWxldmFuY2U6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAvXFxbLywgZW5kOiAvXFxdLyxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgLy8gVXNlciBhZ2VudCAvIHJlbGV2YW5jZSBib29zdFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1wiTW96aWxsYS9cXFxcZFxcXFwuXFxcXGQgXFxcXFxcKCcsIGVuZDogJ1wiJyxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgcmVsZXZhbmNlOiAzXG4gICAgICB9LFxuICAgICAgLy8gU3RyaW5nc1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1wiJywgZW5kOiAnXCInLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWNjZXNzbG9nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==