(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_subunit"],{

/***/ "./node_modules/highlight.js/lib/languages/subunit.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/subunit.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: SubUnit
Author: Sergey Bronnikov <sergeyb@bronevichok.ru>
Website: https://pypi.org/project/python-subunit/
*/

function subunit(hljs) {
  var DETAILS = {
    className: 'string',
    begin: '\\[\n(multipart)?', end: '\\]\n'
  };
  var TIME = {
    className: 'string',
    begin: '\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}\.\\d+Z'
  };
  var PROGRESSVALUE = {
    className: 'string',
    begin: '(\\+|-)\\d+'
  };
  var KEYWORDS = {
    className: 'keyword',
    relevance: 10,
    variants: [
      { begin: '^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?' },
      { begin: '^progress(:?)(\\s+)?(pop|push)?' },
      { begin: '^tags:' },
      { begin: '^time:' }
    ],
  };
  return {
    name: 'SubUnit',
    case_insensitive: true,
    contains: [
      DETAILS,
      TIME,
      PROGRESSVALUE,
      KEYWORDS
    ]
  };
}

module.exports = subunit;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3N1YnVuaXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnR0FBZ0c7QUFDdkcsT0FBTywyQ0FBMkM7QUFDbEQsT0FBTyxrQkFBa0I7QUFDekIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfc3VidW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogU3ViVW5pdFxuQXV0aG9yOiBTZXJnZXkgQnJvbm5pa292IDxzZXJnZXliQGJyb25ldmljaG9rLnJ1PlxuV2Vic2l0ZTogaHR0cHM6Ly9weXBpLm9yZy9wcm9qZWN0L3B5dGhvbi1zdWJ1bml0L1xuKi9cblxuZnVuY3Rpb24gc3VidW5pdChobGpzKSB7XG4gIHZhciBERVRBSUxTID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdcXFxcW1xcbihtdWx0aXBhcnQpPycsIGVuZDogJ1xcXFxdXFxuJ1xuICB9O1xuICB2YXIgVElNRSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnXFxcXGR7NH0tXFxcXGR7Mn0tXFxcXGR7Mn0oXFxcXHMrKVxcXFxkezJ9OlxcXFxkezJ9OlxcXFxkezJ9XFwuXFxcXGQrWidcbiAgfTtcbiAgdmFyIFBST0dSRVNTVkFMVUUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJyhcXFxcK3wtKVxcXFxkKydcbiAgfTtcbiAgdmFyIEtFWVdPUkRTID0ge1xuICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgIHJlbGV2YW5jZTogMTAsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHsgYmVnaW46ICdeKHRlc3R8dGVzdGluZ3xzdWNjZXNzfHN1Y2Nlc3NmdWx8ZmFpbHVyZXxlcnJvcnxza2lwfHhmYWlsfHV4c3VjY2VzcykoOj8pXFxcXHMrKHRlc3QpPycgfSxcbiAgICAgIHsgYmVnaW46ICdecHJvZ3Jlc3MoOj8pKFxcXFxzKyk/KHBvcHxwdXNoKT8nIH0sXG4gICAgICB7IGJlZ2luOiAnXnRhZ3M6JyB9LFxuICAgICAgeyBiZWdpbjogJ150aW1lOicgfVxuICAgIF0sXG4gIH07XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1N1YlVuaXQnLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIERFVEFJTFMsXG4gICAgICBUSU1FLFxuICAgICAgUFJPR1JFU1NWQUxVRSxcbiAgICAgIEtFWVdPUkRTXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN1YnVuaXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9