(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_fix"],{

/***/ "./node_modules/highlight.js/lib/languages/fix.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/fix.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: FIX
Author: Brent Bradbury <brent@brentium.com>
*/

function fix(hljs) {
  return {
    name: 'FIX',
    contains: [
    {
      begin: /[^\u2401\u0001]+/,
      end: /[\u2401\u0001]/,
      excludeEnd: true,
      returnBegin: true,
      returnEnd: false,
      contains: [
      {
        begin: /([^\u2401\u0001=]+)/,
        end: /=([^\u2401\u0001=]+)/,
        returnEnd: true,
        returnBegin: false,
        className: 'attr'
      },
      {
        begin: /=/,
        end: /([\u2401\u0001])/,
        excludeEnd: true,
        excludeBegin: true,
        className: 'string'
      }]
    }],
    case_insensitive: true
  };
}

module.exports = fix;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2ZpeC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfZml4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBGSVhcbkF1dGhvcjogQnJlbnQgQnJhZGJ1cnkgPGJyZW50QGJyZW50aXVtLmNvbT5cbiovXG5cbmZ1bmN0aW9uIGZpeChobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0ZJWCcsXG4gICAgY29udGFpbnM6IFtcbiAgICB7XG4gICAgICBiZWdpbjogL1teXFx1MjQwMVxcdTAwMDFdKy8sXG4gICAgICBlbmQ6IC9bXFx1MjQwMVxcdTAwMDFdLyxcbiAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgIHJldHVybkVuZDogZmFsc2UsXG4gICAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogLyhbXlxcdTI0MDFcXHUwMDAxPV0rKS8sXG4gICAgICAgIGVuZDogLz0oW15cXHUyNDAxXFx1MDAwMT1dKykvLFxuICAgICAgICByZXR1cm5FbmQ6IHRydWUsXG4gICAgICAgIHJldHVybkJlZ2luOiBmYWxzZSxcbiAgICAgICAgY2xhc3NOYW1lOiAnYXR0cidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvPS8sXG4gICAgICAgIGVuZDogLyhbXFx1MjQwMVxcdTAwMDFdKS8sXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJ1xuICAgICAgfV1cbiAgICB9XSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZml4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==