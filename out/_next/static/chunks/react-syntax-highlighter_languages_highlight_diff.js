(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_diff"],{

/***/ "./node_modules/highlight.js/lib/languages/diff.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/diff.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Diff
Description: Unified and context diff
Author: Vasily Polovnyov <vast@whiteants.net>
Website: https://www.gnu.org/software/diffutils/
Category: common
*/

/** @type LanguageFn */
function diff(hljs) {
  return {
    name: 'Diff',
    aliases: ['patch'],
    contains: [
      {
        className: 'meta',
        relevance: 10,
        variants: [
          {begin: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/},
          {begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/},
          {begin: /^\-\-\- +\d+,\d+ +\-\-\-\-$/}
        ]
      },
      {
        className: 'comment',
        variants: [
          {begin: /Index: /, end: /$/},
          {begin: /={3,}/, end: /$/},
          {begin: /^\-{3}/, end: /$/},
          {begin: /^\*{3} /, end: /$/},
          {begin: /^\+{3}/, end: /$/},
          {begin: /^\*{15}$/ }
        ]
      },
      {
        className: 'addition',
        begin: '^\\+', end: '$'
      },
      {
        className: 'deletion',
        begin: '^\\-', end: '$'
      },
      {
        className: 'addition',
        begin: '^\\!', end: '$'
      }
    ]
  };
}

module.exports = diff;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2RpZmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHdDQUF3QztBQUNuRCxXQUFXLHFDQUFxQztBQUNoRCxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEMsV0FBVyxVQUFVLEdBQUcsWUFBWTtBQUNwQyxXQUFXLFlBQVksRUFBRSxZQUFZO0FBQ3JDLFdBQVcsWUFBWSxFQUFFLGFBQWE7QUFDdEMsV0FBVyxZQUFZLEVBQUUsWUFBWTtBQUNyQyxXQUFXLFlBQVksR0FBRztBQUMxQjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfZGlmZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogRGlmZlxuRGVzY3JpcHRpb246IFVuaWZpZWQgYW5kIGNvbnRleHQgZGlmZlxuQXV0aG9yOiBWYXNpbHkgUG9sb3ZueW92IDx2YXN0QHdoaXRlYW50cy5uZXQ+XG5XZWJzaXRlOiBodHRwczovL3d3dy5nbnUub3JnL3NvZnR3YXJlL2RpZmZ1dGlscy9cbkNhdGVnb3J5OiBjb21tb25cbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBkaWZmKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnRGlmZicsXG4gICAgYWxpYXNlczogWydwYXRjaCddLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICByZWxldmFuY2U6IDEwLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtiZWdpbjogL15AQCArXFwtXFxkKyxcXGQrICtcXCtcXGQrLFxcZCsgK0BAJC99LFxuICAgICAgICAgIHtiZWdpbjogL15cXCpcXCpcXCogK1xcZCssXFxkKyArXFwqXFwqXFwqXFwqJC99LFxuICAgICAgICAgIHtiZWdpbjogL15cXC1cXC1cXC0gK1xcZCssXFxkKyArXFwtXFwtXFwtXFwtJC99XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtiZWdpbjogL0luZGV4OiAvLCBlbmQ6IC8kL30sXG4gICAgICAgICAge2JlZ2luOiAvPXszLH0vLCBlbmQ6IC8kL30sXG4gICAgICAgICAge2JlZ2luOiAvXlxcLXszfS8sIGVuZDogLyQvfSxcbiAgICAgICAgICB7YmVnaW46IC9eXFwqezN9IC8sIGVuZDogLyQvfSxcbiAgICAgICAgICB7YmVnaW46IC9eXFwrezN9LywgZW5kOiAvJC99LFxuICAgICAgICAgIHtiZWdpbjogL15cXCp7MTV9JC8gfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhZGRpdGlvbicsXG4gICAgICAgIGJlZ2luOiAnXlxcXFwrJywgZW5kOiAnJCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2RlbGV0aW9uJyxcbiAgICAgICAgYmVnaW46ICdeXFxcXC0nLCBlbmQ6ICckJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYWRkaXRpb24nLFxuICAgICAgICBiZWdpbjogJ15cXFxcIScsIGVuZDogJyQnXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpZmY7XG4iXSwic291cmNlUm9vdCI6IiJ9