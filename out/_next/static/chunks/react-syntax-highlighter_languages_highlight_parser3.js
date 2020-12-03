(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_parser3"],{

/***/ "./node_modules/highlight.js/lib/languages/parser3.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/parser3.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Parser3
Requires: xml.js
Author: Oleg Volchkov <oleg@volchkov.net>
Website: https://www.parser.ru/en/
Category: template
*/

function parser3(hljs) {
  var CURLY_SUBCOMMENT = hljs.COMMENT(
    '{',
    '}',
    {
      contains: ['self']
    }
  );
  return {
    name: 'Parser3',
    subLanguage: 'xml', relevance: 0,
    contains: [
      hljs.COMMENT('^#', '$'),
      hljs.COMMENT(
        '\\^rem{',
        '}',
        {
          relevance: 10,
          contains: [
            CURLY_SUBCOMMENT
          ]
        }
      ),
      {
        className: 'meta',
        begin: '^@(?:BASE|USE|CLASS|OPTIONS)$',
        relevance: 10
      },
      {
        className: 'title',
        begin: '@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$'
      },
      {
        className: 'variable',
        begin: '\\$\\{?[\\w\\-\\.\\:]+\\}?'
      },
      {
        className: 'keyword',
        begin: '\\^[\\w\\-\\.\\:]+'
      },
      {
        className: 'number',
        begin: '\\^#[0-9a-fA-F]+'
      },
      hljs.C_NUMBER_MODE
    ]
  };
}

module.exports = parser3;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3BhcnNlcjMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLG1DQUFtQyxvQkFBb0I7QUFDdkQsT0FBTztBQUNQO0FBQ0E7QUFDQSxzQkFBc0IsbUJBQW1CO0FBQ3pDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfcGFyc2VyMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogUGFyc2VyM1xuUmVxdWlyZXM6IHhtbC5qc1xuQXV0aG9yOiBPbGVnIFZvbGNoa292IDxvbGVnQHZvbGNoa292Lm5ldD5cbldlYnNpdGU6IGh0dHBzOi8vd3d3LnBhcnNlci5ydS9lbi9cbkNhdGVnb3J5OiB0ZW1wbGF0ZVxuKi9cblxuZnVuY3Rpb24gcGFyc2VyMyhobGpzKSB7XG4gIHZhciBDVVJMWV9TVUJDT01NRU5UID0gaGxqcy5DT01NRU5UKFxuICAgICd7JyxcbiAgICAnfScsXG4gICAge1xuICAgICAgY29udGFpbnM6IFsnc2VsZiddXG4gICAgfVxuICApO1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdQYXJzZXIzJyxcbiAgICBzdWJMYW5ndWFnZTogJ3htbCcsIHJlbGV2YW5jZTogMCxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DT01NRU5UKCdeIycsICckJyksXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgICdcXFxcXnJlbXsnLFxuICAgICAgICAnfScsXG4gICAgICAgIHtcbiAgICAgICAgICByZWxldmFuY2U6IDEwLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICBDVVJMWV9TVUJDT01NRU5UXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICApLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdeQCg/OkJBU0V8VVNFfENMQVNTfE9QVElPTlMpJCcsXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgICAgICAgYmVnaW46ICdAW1xcXFx3XFxcXC1dK1xcXFxbW1xcXFx3XjtcXFxcLV0qXFxcXF0oPzpcXFxcW1tcXFxcd147XFxcXC1dKlxcXFxdKT8oPzouKikkJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICBiZWdpbjogJ1xcXFwkXFxcXHs/W1xcXFx3XFxcXC1cXFxcLlxcXFw6XStcXFxcfT8nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgYmVnaW46ICdcXFxcXltcXFxcd1xcXFwtXFxcXC5cXFxcOl0rJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46ICdcXFxcXiNbMC05YS1mQS1GXSsnXG4gICAgICB9LFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlcjM7XG4iXSwic291cmNlUm9vdCI6IiJ9