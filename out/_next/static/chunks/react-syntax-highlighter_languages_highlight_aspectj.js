(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_aspectj"],{

/***/ "./node_modules/highlight.js/lib/languages/aspectj.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/aspectj.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: AspectJ
Author: Hakan Ozler <ozler.hakan@gmail.com>
Website: https://www.eclipse.org/aspectj/
Description: Syntax Highlighting for the AspectJ Language which is a general-purpose aspect-oriented extension to the Java programming language.
 */

/** @type LanguageFn */
function aspectj(hljs) {
  var KEYWORDS =
    'false synchronized int abstract float private char boolean static null if const ' +
    'for true while long throw strictfp finally protected import native final return void ' +
    'enum else extends implements break transient new catch instanceof byte super volatile case ' +
    'assert short package default double public try this switch continue throws privileged ' +
    'aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization ' +
    'staticinitialization withincode target within execution getWithinTypeName handler ' +
    'thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents '+
    'warning error soft precedence thisAspectInstance';
  var SHORTKEYS = 'get set args call';
  return {
    name: 'AspectJ',
    keywords : KEYWORDS,
    illegal : /<\/|#/,
    contains : [
      hljs.COMMENT(
        '/\\*\\*',
        '\\*/',
        {
          relevance : 0,
          contains : [
            {
              // eat up @'s in emails to prevent them to be recognized as doctags
              begin: /\w+@/, relevance: 0
            },
            {
              className : 'doctag',
              begin : '@[A-Za-z]+'
            }
          ]
        }
      ),
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        className : 'class',
        beginKeywords : 'aspect',
        end : /[{;=]/,
        excludeEnd : true,
        illegal : /[:;"\[\]]/,
        contains : [
          {
            beginKeywords : 'extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton'
          },
          hljs.UNDERSCORE_TITLE_MODE,
          {
            begin : /\([^\)]*/,
            end : /[)]+/,
            keywords : KEYWORDS + ' ' + SHORTKEYS,
            excludeEnd : false
          }
        ]
      },
      {
        className : 'class',
        beginKeywords : 'class interface',
        end : /[{;=]/,
        excludeEnd : true,
        relevance: 0,
        keywords : 'class interface',
        illegal : /[:"\[\]]/,
        contains : [
          {beginKeywords : 'extends implements'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        // AspectJ Constructs
        beginKeywords : 'pointcut after before around throwing returning',
        end : /[)]/,
        excludeEnd : false,
        illegal : /["\[\]]/,
        contains : [
          {
            begin : hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
            returnBegin : true,
            contains : [hljs.UNDERSCORE_TITLE_MODE]
          }
        ]
      },
      {
        begin : /[:]/,
        returnBegin : true,
        end : /[{;]/,
        relevance: 0,
        excludeEnd : false,
        keywords : KEYWORDS,
        illegal : /["\[\]]/,
        contains : [
          {
            begin : hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
            keywords : KEYWORDS + ' ' + SHORTKEYS,
            relevance: 0
          },
          hljs.QUOTE_STRING_MODE
        ]
      },
      {
        // this prevents 'new Name(...), or throw ...' from being recognized as a function definition
        beginKeywords : 'new throw',
        relevance : 0
      },
      {
        // the function class is a bit different for AspectJ compared to the Java language
        className : 'function',
        begin : /\w+ +\w+(\.)?\w+\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,
        returnBegin : true,
        end : /[{;=]/,
        keywords : KEYWORDS,
        excludeEnd : true,
        contains : [
          {
            begin : hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
            returnBegin : true,
            relevance: 0,
            contains : [hljs.UNDERSCORE_TITLE_MODE]
          },
          {
            className : 'params',
            begin : /\(/, end : /\)/,
            relevance: 0,
            keywords : KEYWORDS,
            contains : [
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE,
              hljs.C_NUMBER_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },
      hljs.C_NUMBER_MODE,
      {
        // annotation is also used in this language
        className : 'meta',
        begin : '@[A-Za-z]+'
      }
    ]
  };
}

module.exports = aspectj;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FzcGVjdGouanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUNBQXFDO0FBQ2hEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2FzcGVjdGouanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEFzcGVjdEpcbkF1dGhvcjogSGFrYW4gT3psZXIgPG96bGVyLmhha2FuQGdtYWlsLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vd3d3LmVjbGlwc2Uub3JnL2FzcGVjdGovXG5EZXNjcmlwdGlvbjogU3ludGF4IEhpZ2hsaWdodGluZyBmb3IgdGhlIEFzcGVjdEogTGFuZ3VhZ2Ugd2hpY2ggaXMgYSBnZW5lcmFsLXB1cnBvc2UgYXNwZWN0LW9yaWVudGVkIGV4dGVuc2lvbiB0byB0aGUgSmF2YSBwcm9ncmFtbWluZyBsYW5ndWFnZS5cbiAqL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gYXNwZWN0aihobGpzKSB7XG4gIHZhciBLRVlXT1JEUyA9XG4gICAgJ2ZhbHNlIHN5bmNocm9uaXplZCBpbnQgYWJzdHJhY3QgZmxvYXQgcHJpdmF0ZSBjaGFyIGJvb2xlYW4gc3RhdGljIG51bGwgaWYgY29uc3QgJyArXG4gICAgJ2ZvciB0cnVlIHdoaWxlIGxvbmcgdGhyb3cgc3RyaWN0ZnAgZmluYWxseSBwcm90ZWN0ZWQgaW1wb3J0IG5hdGl2ZSBmaW5hbCByZXR1cm4gdm9pZCAnICtcbiAgICAnZW51bSBlbHNlIGV4dGVuZHMgaW1wbGVtZW50cyBicmVhayB0cmFuc2llbnQgbmV3IGNhdGNoIGluc3RhbmNlb2YgYnl0ZSBzdXBlciB2b2xhdGlsZSBjYXNlICcgK1xuICAgICdhc3NlcnQgc2hvcnQgcGFja2FnZSBkZWZhdWx0IGRvdWJsZSBwdWJsaWMgdHJ5IHRoaXMgc3dpdGNoIGNvbnRpbnVlIHRocm93cyBwcml2aWxlZ2VkICcgK1xuICAgICdhc3BlY3RPZiBhZHZpY2VleGVjdXRpb24gcHJvY2VlZCBjZmxvd2JlbG93IGNmbG93IGluaXRpYWxpemF0aW9uIHByZWluaXRpYWxpemF0aW9uICcgK1xuICAgICdzdGF0aWNpbml0aWFsaXphdGlvbiB3aXRoaW5jb2RlIHRhcmdldCB3aXRoaW4gZXhlY3V0aW9uIGdldFdpdGhpblR5cGVOYW1lIGhhbmRsZXIgJyArXG4gICAgJ3RoaXNKb2luUG9pbnQgdGhpc0pvaW5Qb2ludFN0YXRpY1BhcnQgdGhpc0VuY2xvc2luZ0pvaW5Qb2ludFN0YXRpY1BhcnQgZGVjbGFyZSBwYXJlbnRzICcrXG4gICAgJ3dhcm5pbmcgZXJyb3Igc29mdCBwcmVjZWRlbmNlIHRoaXNBc3BlY3RJbnN0YW5jZSc7XG4gIHZhciBTSE9SVEtFWVMgPSAnZ2V0IHNldCBhcmdzIGNhbGwnO1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdBc3BlY3RKJyxcbiAgICBrZXl3b3JkcyA6IEtFWVdPUkRTLFxuICAgIGlsbGVnYWwgOiAvPFxcL3wjLyxcbiAgICBjb250YWlucyA6IFtcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJy9cXFxcKlxcXFwqJyxcbiAgICAgICAgJ1xcXFwqLycsXG4gICAgICAgIHtcbiAgICAgICAgICByZWxldmFuY2UgOiAwLFxuICAgICAgICAgIGNvbnRhaW5zIDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvLyBlYXQgdXAgQCdzIGluIGVtYWlscyB0byBwcmV2ZW50IHRoZW0gdG8gYmUgcmVjb2duaXplZCBhcyBkb2N0YWdzXG4gICAgICAgICAgICAgIGJlZ2luOiAvXFx3K0AvLCByZWxldmFuY2U6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZSA6ICdkb2N0YWcnLFxuICAgICAgICAgICAgICBiZWdpbiA6ICdAW0EtWmEtel0rJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWUgOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzIDogJ2FzcGVjdCcsXG4gICAgICAgIGVuZCA6IC9bezs9XS8sXG4gICAgICAgIGV4Y2x1ZGVFbmQgOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsIDogL1s6O1wiXFxbXFxdXS8sXG4gICAgICAgIGNvbnRhaW5zIDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHMgOiAnZXh0ZW5kcyBpbXBsZW1lbnRzIHBlcnR5cGV3aXRoaW4gcGVydGhpcyBwZXJ0YXJnZXQgcGVyY2Zsb3diZWxvdyBwZXJjZmxvdyBpc3NpbmdsZXRvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luIDogL1xcKFteXFwpXSovLFxuICAgICAgICAgICAgZW5kIDogL1spXSsvLFxuICAgICAgICAgICAga2V5d29yZHMgOiBLRVlXT1JEUyArICcgJyArIFNIT1JUS0VZUyxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQgOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lIDogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkcyA6ICdjbGFzcyBpbnRlcmZhY2UnLFxuICAgICAgICBlbmQgOiAvW3s7PV0vLFxuICAgICAgICBleGNsdWRlRW5kIDogdHJ1ZSxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBrZXl3b3JkcyA6ICdjbGFzcyBpbnRlcmZhY2UnLFxuICAgICAgICBpbGxlZ2FsIDogL1s6XCJcXFtcXF1dLyxcbiAgICAgICAgY29udGFpbnMgOiBbXG4gICAgICAgICAge2JlZ2luS2V5d29yZHMgOiAnZXh0ZW5kcyBpbXBsZW1lbnRzJ30sXG4gICAgICAgICAgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gQXNwZWN0SiBDb25zdHJ1Y3RzXG4gICAgICAgIGJlZ2luS2V5d29yZHMgOiAncG9pbnRjdXQgYWZ0ZXIgYmVmb3JlIGFyb3VuZCB0aHJvd2luZyByZXR1cm5pbmcnLFxuICAgICAgICBlbmQgOiAvWyldLyxcbiAgICAgICAgZXhjbHVkZUVuZCA6IGZhbHNlLFxuICAgICAgICBpbGxlZ2FsIDogL1tcIlxcW1xcXV0vLFxuICAgICAgICBjb250YWlucyA6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbiA6IGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSArICdcXFxccypcXFxcKCcsXG4gICAgICAgICAgICByZXR1cm5CZWdpbiA6IHRydWUsXG4gICAgICAgICAgICBjb250YWlucyA6IFtobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERV1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luIDogL1s6XS8sXG4gICAgICAgIHJldHVybkJlZ2luIDogdHJ1ZSxcbiAgICAgICAgZW5kIDogL1t7O10vLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGV4Y2x1ZGVFbmQgOiBmYWxzZSxcbiAgICAgICAga2V5d29yZHMgOiBLRVlXT1JEUyxcbiAgICAgICAgaWxsZWdhbCA6IC9bXCJcXFtcXF1dLyxcbiAgICAgICAgY29udGFpbnMgOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW4gOiBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUgKyAnXFxcXHMqXFxcXCgnLFxuICAgICAgICAgICAga2V5d29yZHMgOiBLRVlXT1JEUyArICcgJyArIFNIT1JUS0VZUyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyB0aGlzIHByZXZlbnRzICduZXcgTmFtZSguLi4pLCBvciB0aHJvdyAuLi4nIGZyb20gYmVpbmcgcmVjb2duaXplZCBhcyBhIGZ1bmN0aW9uIGRlZmluaXRpb25cbiAgICAgICAgYmVnaW5LZXl3b3JkcyA6ICduZXcgdGhyb3cnLFxuICAgICAgICByZWxldmFuY2UgOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyB0aGUgZnVuY3Rpb24gY2xhc3MgaXMgYSBiaXQgZGlmZmVyZW50IGZvciBBc3BlY3RKIGNvbXBhcmVkIHRvIHRoZSBKYXZhIGxhbmd1YWdlXG4gICAgICAgIGNsYXNzTmFtZSA6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luIDogL1xcdysgK1xcdysoXFwuKT9cXHcrXFxzKlxcKFteXFwpXSpcXClcXHMqKCh0aHJvd3MpW1xcd1xccyxdKyk/W1xceztdLyxcbiAgICAgICAgcmV0dXJuQmVnaW4gOiB0cnVlLFxuICAgICAgICBlbmQgOiAvW3s7PV0vLFxuICAgICAgICBrZXl3b3JkcyA6IEtFWVdPUkRTLFxuICAgICAgICBleGNsdWRlRW5kIDogdHJ1ZSxcbiAgICAgICAgY29udGFpbnMgOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW4gOiBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUgKyAnXFxcXHMqXFxcXCgnLFxuICAgICAgICAgICAgcmV0dXJuQmVnaW4gOiB0cnVlLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgY29udGFpbnMgOiBbaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWUgOiAncGFyYW1zJyxcbiAgICAgICAgICAgIGJlZ2luIDogL1xcKC8sIGVuZCA6IC9cXCkvLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAga2V5d29yZHMgOiBLRVlXT1JEUyxcbiAgICAgICAgICAgIGNvbnRhaW5zIDogW1xuICAgICAgICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICAgICAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgLy8gYW5ub3RhdGlvbiBpcyBhbHNvIHVzZWQgaW4gdGhpcyBsYW5ndWFnZVxuICAgICAgICBjbGFzc05hbWUgOiAnbWV0YScsXG4gICAgICAgIGJlZ2luIDogJ0BbQS1aYS16XSsnXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzcGVjdGo7XG4iXSwic291cmNlUm9vdCI6IiJ9