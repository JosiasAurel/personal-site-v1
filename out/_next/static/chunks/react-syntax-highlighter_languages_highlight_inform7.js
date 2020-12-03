(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_inform7"],{

/***/ "./node_modules/highlight.js/lib/languages/inform7.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/inform7.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Inform 7
Author: Bruno Dias <bruno.r.dias@gmail.com>
Description: Language definition for Inform 7, a DSL for writing parser interactive fiction.
Website: http://inform7.com
*/

function inform7(hljs) {
  var START_BRACKET = '\\[';
  var END_BRACKET = '\\]';
  return {
    name: 'Inform 7',
    aliases: ['i7'],
    case_insensitive: true,
    keywords: {
      // Some keywords more or less unique to I7, for relevance.
      keyword:
        // kind:
        'thing room person man woman animal container ' +
        'supporter backdrop door ' +
        // characteristic:
        'scenery open closed locked inside gender ' +
        // verb:
        'is are say understand ' +
        // misc keyword:
        'kind of rule'
    },
    contains: [
      {
        className: 'string',
        begin: '"', end: '"',
        relevance: 0,
        contains: [
          {
            className: 'subst',
            begin: START_BRACKET, end: END_BRACKET
          }
        ]
      },
      {
        className: 'section',
        begin: /^(Volume|Book|Part|Chapter|Section|Table)\b/,
        end: '$'
      },
      {
        // Rule definition
        // This is here for relevance.
        begin: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\b/,
        end: ':',
        contains: [
          {
            //Rule name
            begin: '\\(This', end: '\\)'
          }
        ]
      },
      {
        className: 'comment',
        begin: START_BRACKET, end: END_BRACKET,
        contains: ['self']
      }
    ]
  };
}

module.exports = inform7;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2luZm9ybTcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfaW5mb3JtNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogSW5mb3JtIDdcbkF1dGhvcjogQnJ1bm8gRGlhcyA8YnJ1bm8uci5kaWFzQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBMYW5ndWFnZSBkZWZpbml0aW9uIGZvciBJbmZvcm0gNywgYSBEU0wgZm9yIHdyaXRpbmcgcGFyc2VyIGludGVyYWN0aXZlIGZpY3Rpb24uXG5XZWJzaXRlOiBodHRwOi8vaW5mb3JtNy5jb21cbiovXG5cbmZ1bmN0aW9uIGluZm9ybTcoaGxqcykge1xuICB2YXIgU1RBUlRfQlJBQ0tFVCA9ICdcXFxcWyc7XG4gIHZhciBFTkRfQlJBQ0tFVCA9ICdcXFxcXSc7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0luZm9ybSA3JyxcbiAgICBhbGlhc2VzOiBbJ2k3J10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgLy8gU29tZSBrZXl3b3JkcyBtb3JlIG9yIGxlc3MgdW5pcXVlIHRvIEk3LCBmb3IgcmVsZXZhbmNlLlxuICAgICAga2V5d29yZDpcbiAgICAgICAgLy8ga2luZDpcbiAgICAgICAgJ3RoaW5nIHJvb20gcGVyc29uIG1hbiB3b21hbiBhbmltYWwgY29udGFpbmVyICcgK1xuICAgICAgICAnc3VwcG9ydGVyIGJhY2tkcm9wIGRvb3IgJyArXG4gICAgICAgIC8vIGNoYXJhY3RlcmlzdGljOlxuICAgICAgICAnc2NlbmVyeSBvcGVuIGNsb3NlZCBsb2NrZWQgaW5zaWRlIGdlbmRlciAnICtcbiAgICAgICAgLy8gdmVyYjpcbiAgICAgICAgJ2lzIGFyZSBzYXkgdW5kZXJzdGFuZCAnICtcbiAgICAgICAgLy8gbWlzYyBrZXl3b3JkOlxuICAgICAgICAna2luZCBvZiBydWxlJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46ICdcIicsIGVuZDogJ1wiJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICAgICAgICAgIGJlZ2luOiBTVEFSVF9CUkFDS0VULCBlbmQ6IEVORF9CUkFDS0VUXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzZWN0aW9uJyxcbiAgICAgICAgYmVnaW46IC9eKFZvbHVtZXxCb29rfFBhcnR8Q2hhcHRlcnxTZWN0aW9ufFRhYmxlKVxcYi8sXG4gICAgICAgIGVuZDogJyQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBSdWxlIGRlZmluaXRpb25cbiAgICAgICAgLy8gVGhpcyBpcyBoZXJlIGZvciByZWxldmFuY2UuXG4gICAgICAgIGJlZ2luOiAvXihDaGVja3xDYXJyeSBvdXR8UmVwb3J0fEluc3RlYWQgb2Z8VG98UnVsZXxXaGVufEJlZm9yZXxBZnRlcilcXGIvLFxuICAgICAgICBlbmQ6ICc6JyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvL1J1bGUgbmFtZVxuICAgICAgICAgICAgYmVnaW46ICdcXFxcKFRoaXMnLCBlbmQ6ICdcXFxcKSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgICAgICBiZWdpbjogU1RBUlRfQlJBQ0tFVCwgZW5kOiBFTkRfQlJBQ0tFVCxcbiAgICAgICAgY29udGFpbnM6IFsnc2VsZiddXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluZm9ybTc7XG4iXSwic291cmNlUm9vdCI6IiJ9