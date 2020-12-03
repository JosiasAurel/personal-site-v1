(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_erb"],{

/***/ "./node_modules/highlight.js/lib/languages/erb.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/erb.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: ERB (Embedded Ruby)
Requires: xml.js, ruby.js
Author: Lucas Mazza <lucastmazza@gmail.com>
Contributors: Kassio Borges <kassioborgesm@gmail.com>
Description: "Bridge" language defining fragments of Ruby in HTML within <% .. %>
Website: https://ruby-doc.org/stdlib-2.6.5/libdoc/erb/rdoc/ERB.html
Category: template
*/

function erb(hljs) {
  return {
    name: 'ERB',
    subLanguage: 'xml',
    contains: [
      hljs.COMMENT('<%#', '%>'),
      {
        begin: '<%[%=-]?', end: '[%-]?%>',
        subLanguage: 'ruby',
        excludeBegin: true,
        excludeEnd: true
      }
    ]
  };
}

module.exports = erb;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2VyYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfZXJiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBFUkIgKEVtYmVkZGVkIFJ1YnkpXG5SZXF1aXJlczogeG1sLmpzLCBydWJ5LmpzXG5BdXRob3I6IEx1Y2FzIE1henphIDxsdWNhc3RtYXp6YUBnbWFpbC5jb20+XG5Db250cmlidXRvcnM6IEthc3NpbyBCb3JnZXMgPGthc3Npb2Jvcmdlc21AZ21haWwuY29tPlxuRGVzY3JpcHRpb246IFwiQnJpZGdlXCIgbGFuZ3VhZ2UgZGVmaW5pbmcgZnJhZ21lbnRzIG9mIFJ1YnkgaW4gSFRNTCB3aXRoaW4gPCUgLi4gJT5cbldlYnNpdGU6IGh0dHBzOi8vcnVieS1kb2Mub3JnL3N0ZGxpYi0yLjYuNS9saWJkb2MvZXJiL3Jkb2MvRVJCLmh0bWxcbkNhdGVnb3J5OiB0ZW1wbGF0ZVxuKi9cblxuZnVuY3Rpb24gZXJiKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnRVJCJyxcbiAgICBzdWJMYW5ndWFnZTogJ3htbCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ09NTUVOVCgnPCUjJywgJyU+JyksXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnPCVbJT0tXT8nLCBlbmQ6ICdbJS1dPyU+JyxcbiAgICAgICAgc3ViTGFuZ3VhZ2U6ICdydWJ5JyxcbiAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVyYjtcbiJdLCJzb3VyY2VSb290IjoiIn0=