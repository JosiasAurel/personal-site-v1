(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_brainfuck"],{

/***/ "./node_modules/highlight.js/lib/languages/brainfuck.js":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/brainfuck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Brainfuck
Author: Evgeny Stepanischev <imbolk@gmail.com>
Website: https://esolangs.org/wiki/Brainfuck
*/

/** @type LanguageFn */
function brainfuck(hljs) {
  var LITERAL = {
    className: 'literal',
    begin: '[\\+\\-]',
    relevance: 0
  };
  return {
    name: 'Brainfuck',
    aliases: ['bf'],
    contains: [
      hljs.COMMENT(
        '[^\\[\\]\\.,\\+\\-<> \r\n]',
        '[\\[\\]\\.,\\+\\-<> \r\n]',
        {
          returnEnd: true,
          relevance: 0
        }
      ),
      {
        className: 'title',
        begin: '[\\[\\]]',
        relevance: 0
      },
      {
        className: 'string',
        begin: '[\\.,]',
        relevance: 0
      },
      {
        // this mode works as the only relevance counter
        begin: /(?:\+\+|\-\-)/,
        contains: [LITERAL]
      },
      LITERAL
    ]
  };
}

module.exports = brainfuck;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2JyYWluZnVjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9icmFpbmZ1Y2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEJyYWluZnVja1xuQXV0aG9yOiBFdmdlbnkgU3RlcGFuaXNjaGV2IDxpbWJvbGtAZ21haWwuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly9lc29sYW5ncy5vcmcvd2lraS9CcmFpbmZ1Y2tcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBicmFpbmZ1Y2soaGxqcykge1xuICB2YXIgTElURVJBTCA9IHtcbiAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICBiZWdpbjogJ1tcXFxcK1xcXFwtXScsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0JyYWluZnVjaycsXG4gICAgYWxpYXNlczogWydiZiddLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgICdbXlxcXFxbXFxcXF1cXFxcLixcXFxcK1xcXFwtPD4gXFxyXFxuXScsXG4gICAgICAgICdbXFxcXFtcXFxcXVxcXFwuLFxcXFwrXFxcXC08PiBcXHJcXG5dJyxcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybkVuZDogdHJ1ZSxcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICBiZWdpbjogJ1tcXFxcW1xcXFxdXScsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46ICdbXFxcXC4sXScsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gdGhpcyBtb2RlIHdvcmtzIGFzIHRoZSBvbmx5IHJlbGV2YW5jZSBjb3VudGVyXG4gICAgICAgIGJlZ2luOiAvKD86XFwrXFwrfFxcLVxcLSkvLFxuICAgICAgICBjb250YWluczogW0xJVEVSQUxdXG4gICAgICB9LFxuICAgICAgTElURVJBTFxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBicmFpbmZ1Y2s7XG4iXSwic291cmNlUm9vdCI6IiJ9