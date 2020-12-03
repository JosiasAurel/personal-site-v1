(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_axapta"],{

/***/ "./node_modules/highlight.js/lib/languages/axapta.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/axapta.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Microsoft X++
Description: X++ is a language used in Microsoft Dynamics 365, Dynamics AX, and Axapta.
Author: Dmitri Roudakov <dmitri@roudakov.ru>
Website: https://dynamics.microsoft.com/en-us/ax-overview/
Category: enterprise
*/

/** @type LanguageFn */
function axapta(hljs) {
  const BUILT_IN_KEYWORDS = [
    'anytype',
    'boolean',
    'byte',
    'char',
    'container',
    'date',
    'double',
    'enum',
    'guid',
    'int',
    'int64',
    'long',
    'real',
    'short',
    'str',
    'utcdatetime',
    'var'
  ];

  const LITERAL_KEYWORDS = [
    'default',
    'false',
    'null',
    'true',
  ];

  const NORMAL_KEYWORDS = [
    'abstract',
    'as',
    'asc',
    'avg',
    'break',
    'breakpoint',
    'by',
    'byref',
    'case',
    'catch',
    'changecompany',
    'class',
    'client',
    'client',
    'common',
    'const',
    'continue',
    'count',
    'crosscompany',
    'delegate',
    'delete_from',
    'desc',
    'display',
    'div',
    'do',
    'edit',
    'else',
    'eventhandler',
    'exists',
    'extends',
    'final',
    'finally',
    'firstfast',
    'firstonly',
    'firstonly1',
    'firstonly10',
    'firstonly100',
    'firstonly1000',
    'flush',
    'for', 
    'forceliterals',
    'forcenestedloop',
    'forceplaceholders',
    'forceselectorder',
    'forupdate',
    'from',
    'generateonly',
    'group', 
    'hint',
    'if',
    'implements',
    'in',
    'index',
    'insert_recordset',
    'interface',
    'internal',
    'is',
    'join',
    'like',
    'maxof',
    'minof',
    'mod',
    'namespace',
    'new',
    'next',
    'nofetch',
    'notexists',
    'optimisticlock',
    'order',
    'outer',
    'pessimisticlock',
    'print',
    'private',
    'protected',
    'public',
    'readonly',
    'repeatableread',
    'retry',
    'return',
    'reverse',
    'select',
    'server',
    'setting',
    'static', 
    'sum',
    'super',
    'switch',
    'this',
    'throw',
    'try',
    'ttsabort',
    'ttsbegin',
    'ttscommit',
    'unchecked',
    'update_recordset',
    'using',
    'validtimestate',
    'void',
    'where',
    'while',
  ];

  const KEYWORDS = {
    keyword: NORMAL_KEYWORDS.join(' '),
    built_in: BUILT_IN_KEYWORDS.join(' '),
    literal: LITERAL_KEYWORDS.join(' ')
  };

  return {
    name: 'X++',
    aliases: ['x++'],
    keywords: KEYWORDS,
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      {
        className: 'meta',
        begin: '#', end: '$'
      },
      {
        className: 'class',
        beginKeywords: 'class interface', end: '{', excludeEnd: true,
        illegal: ':',
        contains: [
          {beginKeywords: 'extends implements'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      }
    ]
  };
}

module.exports = axapta;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2F4YXB0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBLFdBQVcsb0NBQW9DO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2F4YXB0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogTWljcm9zb2Z0IFgrK1xuRGVzY3JpcHRpb246IFgrKyBpcyBhIGxhbmd1YWdlIHVzZWQgaW4gTWljcm9zb2Z0IER5bmFtaWNzIDM2NSwgRHluYW1pY3MgQVgsIGFuZCBBeGFwdGEuXG5BdXRob3I6IERtaXRyaSBSb3VkYWtvdiA8ZG1pdHJpQHJvdWRha292LnJ1PlxuV2Vic2l0ZTogaHR0cHM6Ly9keW5hbWljcy5taWNyb3NvZnQuY29tL2VuLXVzL2F4LW92ZXJ2aWV3L1xuQ2F0ZWdvcnk6IGVudGVycHJpc2VcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBheGFwdGEoaGxqcykge1xuICBjb25zdCBCVUlMVF9JTl9LRVlXT1JEUyA9IFtcbiAgICAnYW55dHlwZScsXG4gICAgJ2Jvb2xlYW4nLFxuICAgICdieXRlJyxcbiAgICAnY2hhcicsXG4gICAgJ2NvbnRhaW5lcicsXG4gICAgJ2RhdGUnLFxuICAgICdkb3VibGUnLFxuICAgICdlbnVtJyxcbiAgICAnZ3VpZCcsXG4gICAgJ2ludCcsXG4gICAgJ2ludDY0JyxcbiAgICAnbG9uZycsXG4gICAgJ3JlYWwnLFxuICAgICdzaG9ydCcsXG4gICAgJ3N0cicsXG4gICAgJ3V0Y2RhdGV0aW1lJyxcbiAgICAndmFyJ1xuICBdO1xuXG4gIGNvbnN0IExJVEVSQUxfS0VZV09SRFMgPSBbXG4gICAgJ2RlZmF1bHQnLFxuICAgICdmYWxzZScsXG4gICAgJ251bGwnLFxuICAgICd0cnVlJyxcbiAgXTtcblxuICBjb25zdCBOT1JNQUxfS0VZV09SRFMgPSBbXG4gICAgJ2Fic3RyYWN0JyxcbiAgICAnYXMnLFxuICAgICdhc2MnLFxuICAgICdhdmcnLFxuICAgICdicmVhaycsXG4gICAgJ2JyZWFrcG9pbnQnLFxuICAgICdieScsXG4gICAgJ2J5cmVmJyxcbiAgICAnY2FzZScsXG4gICAgJ2NhdGNoJyxcbiAgICAnY2hhbmdlY29tcGFueScsXG4gICAgJ2NsYXNzJyxcbiAgICAnY2xpZW50JyxcbiAgICAnY2xpZW50JyxcbiAgICAnY29tbW9uJyxcbiAgICAnY29uc3QnLFxuICAgICdjb250aW51ZScsXG4gICAgJ2NvdW50JyxcbiAgICAnY3Jvc3Njb21wYW55JyxcbiAgICAnZGVsZWdhdGUnLFxuICAgICdkZWxldGVfZnJvbScsXG4gICAgJ2Rlc2MnLFxuICAgICdkaXNwbGF5JyxcbiAgICAnZGl2JyxcbiAgICAnZG8nLFxuICAgICdlZGl0JyxcbiAgICAnZWxzZScsXG4gICAgJ2V2ZW50aGFuZGxlcicsXG4gICAgJ2V4aXN0cycsXG4gICAgJ2V4dGVuZHMnLFxuICAgICdmaW5hbCcsXG4gICAgJ2ZpbmFsbHknLFxuICAgICdmaXJzdGZhc3QnLFxuICAgICdmaXJzdG9ubHknLFxuICAgICdmaXJzdG9ubHkxJyxcbiAgICAnZmlyc3Rvbmx5MTAnLFxuICAgICdmaXJzdG9ubHkxMDAnLFxuICAgICdmaXJzdG9ubHkxMDAwJyxcbiAgICAnZmx1c2gnLFxuICAgICdmb3InLCBcbiAgICAnZm9yY2VsaXRlcmFscycsXG4gICAgJ2ZvcmNlbmVzdGVkbG9vcCcsXG4gICAgJ2ZvcmNlcGxhY2Vob2xkZXJzJyxcbiAgICAnZm9yY2VzZWxlY3RvcmRlcicsXG4gICAgJ2ZvcnVwZGF0ZScsXG4gICAgJ2Zyb20nLFxuICAgICdnZW5lcmF0ZW9ubHknLFxuICAgICdncm91cCcsIFxuICAgICdoaW50JyxcbiAgICAnaWYnLFxuICAgICdpbXBsZW1lbnRzJyxcbiAgICAnaW4nLFxuICAgICdpbmRleCcsXG4gICAgJ2luc2VydF9yZWNvcmRzZXQnLFxuICAgICdpbnRlcmZhY2UnLFxuICAgICdpbnRlcm5hbCcsXG4gICAgJ2lzJyxcbiAgICAnam9pbicsXG4gICAgJ2xpa2UnLFxuICAgICdtYXhvZicsXG4gICAgJ21pbm9mJyxcbiAgICAnbW9kJyxcbiAgICAnbmFtZXNwYWNlJyxcbiAgICAnbmV3JyxcbiAgICAnbmV4dCcsXG4gICAgJ25vZmV0Y2gnLFxuICAgICdub3RleGlzdHMnLFxuICAgICdvcHRpbWlzdGljbG9jaycsXG4gICAgJ29yZGVyJyxcbiAgICAnb3V0ZXInLFxuICAgICdwZXNzaW1pc3RpY2xvY2snLFxuICAgICdwcmludCcsXG4gICAgJ3ByaXZhdGUnLFxuICAgICdwcm90ZWN0ZWQnLFxuICAgICdwdWJsaWMnLFxuICAgICdyZWFkb25seScsXG4gICAgJ3JlcGVhdGFibGVyZWFkJyxcbiAgICAncmV0cnknLFxuICAgICdyZXR1cm4nLFxuICAgICdyZXZlcnNlJyxcbiAgICAnc2VsZWN0JyxcbiAgICAnc2VydmVyJyxcbiAgICAnc2V0dGluZycsXG4gICAgJ3N0YXRpYycsIFxuICAgICdzdW0nLFxuICAgICdzdXBlcicsXG4gICAgJ3N3aXRjaCcsXG4gICAgJ3RoaXMnLFxuICAgICd0aHJvdycsXG4gICAgJ3RyeScsXG4gICAgJ3R0c2Fib3J0JyxcbiAgICAndHRzYmVnaW4nLFxuICAgICd0dHNjb21taXQnLFxuICAgICd1bmNoZWNrZWQnLFxuICAgICd1cGRhdGVfcmVjb3Jkc2V0JyxcbiAgICAndXNpbmcnLFxuICAgICd2YWxpZHRpbWVzdGF0ZScsXG4gICAgJ3ZvaWQnLFxuICAgICd3aGVyZScsXG4gICAgJ3doaWxlJyxcbiAgXTtcblxuICBjb25zdCBLRVlXT1JEUyA9IHtcbiAgICBrZXl3b3JkOiBOT1JNQUxfS0VZV09SRFMuam9pbignICcpLFxuICAgIGJ1aWx0X2luOiBCVUlMVF9JTl9LRVlXT1JEUy5qb2luKCcgJyksXG4gICAgbGl0ZXJhbDogTElURVJBTF9LRVlXT1JEUy5qb2luKCcgJylcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdYKysnLFxuICAgIGFsaWFzZXM6IFsneCsrJ10sXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnIycsIGVuZDogJyQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UnLCBlbmQ6ICd7JywgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgaWxsZWdhbDogJzonLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtiZWdpbktleXdvcmRzOiAnZXh0ZW5kcyBpbXBsZW1lbnRzJ30sXG4gICAgICAgICAgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBheGFwdGE7XG4iXSwic291cmNlUm9vdCI6IiJ9