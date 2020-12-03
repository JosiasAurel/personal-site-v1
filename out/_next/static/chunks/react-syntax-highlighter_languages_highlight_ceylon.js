(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_ceylon"],{

/***/ "./node_modules/highlight.js/lib/languages/ceylon.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/ceylon.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Ceylon
Author: Lucas Werkmeister <mail@lucaswerkmeister.de>
Website: https://ceylon-lang.org
*/

/** @type LanguageFn */
function ceylon(hljs) {
  // 2.3. Identifiers and keywords
  var KEYWORDS =
    'assembly module package import alias class interface object given value ' +
    'assign void function new of extends satisfies abstracts in out return ' +
    'break continue throw assert dynamic if else switch case for while try ' +
    'catch finally then let this outer super is exists nonempty';
  // 7.4.1 Declaration Modifiers
  var DECLARATION_MODIFIERS =
    'shared abstract formal default actual variable late native deprecated ' +
    'final sealed annotation suppressWarnings small';
  // 7.4.2 Documentation
  var DOCUMENTATION =
    'doc by license see throws tagged';
  var SUBST = {
    className: 'subst', excludeBegin: true, excludeEnd: true,
    begin: /``/, end: /``/,
    keywords: KEYWORDS,
    relevance: 10
  };
  var EXPRESSIONS = [
    {
      // verbatim string
      className: 'string',
      begin: '"""',
      end: '"""',
      relevance: 10
    },
    {
      // string literal or template
      className: 'string',
      begin: '"', end: '"',
      contains: [SUBST]
    },
    {
      // character literal
      className: 'string',
      begin: "'",
      end: "'"
    },
    {
      // numeric literal
      className: 'number',
      begin: '#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?',
      relevance: 0
    }
  ];
  SUBST.contains = EXPRESSIONS;

  return {
    name: 'Ceylon',
    keywords: {
      keyword: KEYWORDS + ' ' + DECLARATION_MODIFIERS,
      meta: DOCUMENTATION
    },
    illegal: '\\$[^01]|#[^0-9a-fA-F]',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.COMMENT('/\\*', '\\*/', {contains: ['self']}),
      {
        // compiler annotation
        className: 'meta',
        begin: '@[a-z]\\w*(?:\\:\"[^\"]*\")?'
      }
    ].concat(EXPRESSIONS)
  };
}

module.exports = ceylon;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NleWxvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFtQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfY2V5bG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBDZXlsb25cbkF1dGhvcjogTHVjYXMgV2Vya21laXN0ZXIgPG1haWxAbHVjYXN3ZXJrbWVpc3Rlci5kZT5cbldlYnNpdGU6IGh0dHBzOi8vY2V5bG9uLWxhbmcub3JnXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gY2V5bG9uKGhsanMpIHtcbiAgLy8gMi4zLiBJZGVudGlmaWVycyBhbmQga2V5d29yZHNcbiAgdmFyIEtFWVdPUkRTID1cbiAgICAnYXNzZW1ibHkgbW9kdWxlIHBhY2thZ2UgaW1wb3J0IGFsaWFzIGNsYXNzIGludGVyZmFjZSBvYmplY3QgZ2l2ZW4gdmFsdWUgJyArXG4gICAgJ2Fzc2lnbiB2b2lkIGZ1bmN0aW9uIG5ldyBvZiBleHRlbmRzIHNhdGlzZmllcyBhYnN0cmFjdHMgaW4gb3V0IHJldHVybiAnICtcbiAgICAnYnJlYWsgY29udGludWUgdGhyb3cgYXNzZXJ0IGR5bmFtaWMgaWYgZWxzZSBzd2l0Y2ggY2FzZSBmb3Igd2hpbGUgdHJ5ICcgK1xuICAgICdjYXRjaCBmaW5hbGx5IHRoZW4gbGV0IHRoaXMgb3V0ZXIgc3VwZXIgaXMgZXhpc3RzIG5vbmVtcHR5JztcbiAgLy8gNy40LjEgRGVjbGFyYXRpb24gTW9kaWZpZXJzXG4gIHZhciBERUNMQVJBVElPTl9NT0RJRklFUlMgPVxuICAgICdzaGFyZWQgYWJzdHJhY3QgZm9ybWFsIGRlZmF1bHQgYWN0dWFsIHZhcmlhYmxlIGxhdGUgbmF0aXZlIGRlcHJlY2F0ZWQgJyArXG4gICAgJ2ZpbmFsIHNlYWxlZCBhbm5vdGF0aW9uIHN1cHByZXNzV2FybmluZ3Mgc21hbGwnO1xuICAvLyA3LjQuMiBEb2N1bWVudGF0aW9uXG4gIHZhciBET0NVTUVOVEFUSU9OID1cbiAgICAnZG9jIGJ5IGxpY2Vuc2Ugc2VlIHRocm93cyB0YWdnZWQnO1xuICB2YXIgU1VCU1QgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLCBleGNsdWRlQmVnaW46IHRydWUsIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgYmVnaW46IC9gYC8sIGVuZDogL2BgLyxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgcmVsZXZhbmNlOiAxMFxuICB9O1xuICB2YXIgRVhQUkVTU0lPTlMgPSBbXG4gICAge1xuICAgICAgLy8gdmVyYmF0aW0gc3RyaW5nXG4gICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgYmVnaW46ICdcIlwiXCInLFxuICAgICAgZW5kOiAnXCJcIlwiJyxcbiAgICAgIHJlbGV2YW5jZTogMTBcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIHN0cmluZyBsaXRlcmFsIG9yIHRlbXBsYXRlXG4gICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgYmVnaW46ICdcIicsIGVuZDogJ1wiJyxcbiAgICAgIGNvbnRhaW5zOiBbU1VCU1RdXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBjaGFyYWN0ZXIgbGl0ZXJhbFxuICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgIGJlZ2luOiBcIidcIixcbiAgICAgIGVuZDogXCInXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIG51bWVyaWMgbGl0ZXJhbFxuICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgIGJlZ2luOiAnI1swLTlhLWZBLUZfXSt8XFxcXCRbMDFfXSt8WzAtOV9dKyg/OlxcXFwuWzAtOV9dKD86W2VFXVsrLV0/XFxcXGQrKT8pP1trTUdUUG11bnBmXT8nLFxuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfVxuICBdO1xuICBTVUJTVC5jb250YWlucyA9IEVYUFJFU1NJT05TO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0NleWxvbicsXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6IEtFWVdPUkRTICsgJyAnICsgREVDTEFSQVRJT05fTU9ESUZJRVJTLFxuICAgICAgbWV0YTogRE9DVU1FTlRBVElPTlxuICAgIH0sXG4gICAgaWxsZWdhbDogJ1xcXFwkW14wMV18I1teMC05YS1mQS1GXScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ09NTUVOVCgnL1xcXFwqJywgJ1xcXFwqLycsIHtjb250YWluczogWydzZWxmJ119KSxcbiAgICAgIHtcbiAgICAgICAgLy8gY29tcGlsZXIgYW5ub3RhdGlvblxuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdAW2Etel1cXFxcdyooPzpcXFxcOlxcXCJbXlxcXCJdKlxcXCIpPydcbiAgICAgIH1cbiAgICBdLmNvbmNhdChFWFBSRVNTSU9OUylcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjZXlsb247XG4iXSwic291cmNlUm9vdCI6IiJ9