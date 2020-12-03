(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_oxygene"],{

/***/ "./node_modules/highlight.js/lib/languages/oxygene.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/oxygene.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Oxygene
Author: Carlo Kok <ck@remobjects.com>
Description: Oxygene is built on the foundation of Object Pascal, revamped and extended to be a modern language for the twenty-first century.
Website: https://www.elementscompiler.com/elements/default.aspx
*/

function oxygene(hljs) {
  var OXYGENE_KEYWORDS = {
    $pattern: /\.?\w+/,
    keyword: 'abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue '+
    'create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false '+
    'final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited '+
    'inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of '+
    'old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly '+
    'record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple '+
    'type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal '+
    'register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained'
  };
  var CURLY_COMMENT = hljs.COMMENT(
    '{',
    '}',
    {
      relevance: 0
    }
  );
  var PAREN_COMMENT = hljs.COMMENT(
    '\\(\\*',
    '\\*\\)',
    {
      relevance: 10
    }
  );
  var STRING = {
    className: 'string',
    begin: '\'', end: '\'',
    contains: [{begin: '\'\''}]
  };
  var CHAR_STRING = {
    className: 'string', begin: '(#\\d+)+'
  };
  var FUNCTION = {
    className: 'function',
    beginKeywords: 'function constructor destructor procedure method', end: '[:;]',
    keywords: 'function constructor|10 destructor|10 procedure|10 method|10',
    contains: [
      hljs.TITLE_MODE,
      {
        className: 'params',
        begin: '\\(', end: '\\)',
        keywords: OXYGENE_KEYWORDS,
        contains: [STRING, CHAR_STRING]
      },
      CURLY_COMMENT, PAREN_COMMENT
    ]
  };
  return {
    name: 'Oxygene',
    case_insensitive: true,
    keywords: OXYGENE_KEYWORDS,
    illegal: '("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',
    contains: [
      CURLY_COMMENT, PAREN_COMMENT, hljs.C_LINE_COMMENT_MODE,
      STRING, CHAR_STRING,
      hljs.NUMBER_MODE,
      FUNCTION,
      {
        className: 'class',
        begin: '=\\bclass\\b', end: 'end;',
        keywords: OXYGENE_KEYWORDS,
        contains: [
          STRING, CHAR_STRING,
          CURLY_COMMENT, PAREN_COMMENT, hljs.C_LINE_COMMENT_MODE,
          FUNCTION
        ]
      }
    ]
  };
}

module.exports = oxygene;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL294eWdlbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGNBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfb3h5Z2VuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogT3h5Z2VuZVxuQXV0aG9yOiBDYXJsbyBLb2sgPGNrQHJlbW9iamVjdHMuY29tPlxuRGVzY3JpcHRpb246IE94eWdlbmUgaXMgYnVpbHQgb24gdGhlIGZvdW5kYXRpb24gb2YgT2JqZWN0IFBhc2NhbCwgcmV2YW1wZWQgYW5kIGV4dGVuZGVkIHRvIGJlIGEgbW9kZXJuIGxhbmd1YWdlIGZvciB0aGUgdHdlbnR5LWZpcnN0IGNlbnR1cnkuXG5XZWJzaXRlOiBodHRwczovL3d3dy5lbGVtZW50c2NvbXBpbGVyLmNvbS9lbGVtZW50cy9kZWZhdWx0LmFzcHhcbiovXG5cbmZ1bmN0aW9uIG94eWdlbmUoaGxqcykge1xuICB2YXIgT1hZR0VORV9LRVlXT1JEUyA9IHtcbiAgICAkcGF0dGVybjogL1xcLj9cXHcrLyxcbiAgICBrZXl3b3JkOiAnYWJzdHJhY3QgYWRkIGFuZCBhcnJheSBhcyBhc2MgYXNwZWN0IGFzc2VtYmx5IGFzeW5jIGJlZ2luIGJyZWFrIGJsb2NrIGJ5IGNhc2UgY2xhc3MgY29uY2F0IGNvbnN0IGNvcHkgY29uc3RydWN0b3IgY29udGludWUgJytcbiAgICAnY3JlYXRlIGRlZmF1bHQgZGVsZWdhdGUgZGVzYyBkaXN0aW5jdCBkaXYgZG8gZG93bnRvIGR5bmFtaWMgZWFjaCBlbHNlIGVtcHR5IGVuZCBlbnN1cmUgZW51bSBlcXVhbHMgZXZlbnQgZXhjZXB0IGV4aXQgZXh0ZW5zaW9uIGV4dGVybmFsIGZhbHNlICcrXG4gICAgJ2ZpbmFsIGZpbmFsaXplIGZpbmFsaXplciBmaW5hbGx5IGZsYWdzIGZvciBmb3J3YXJkIGZyb20gZnVuY3Rpb24gZnV0dXJlIGdsb2JhbCBncm91cCBoYXMgaWYgaW1wbGVtZW50YXRpb24gaW1wbGVtZW50cyBpbXBsaWVzIGluIGluZGV4IGluaGVyaXRlZCAnK1xuICAgICdpbmxpbmUgaW50ZXJmYWNlIGludG8gaW52YXJpYW50cyBpcyBpdGVyYXRvciBqb2luIGxvY2tlZCBsb2NraW5nIGxvb3AgbWF0Y2hpbmcgbWV0aG9kIG1vZCBtb2R1bGUgbmFtZXNwYWNlIG5lc3RlZCBuZXcgbmlsIG5vdCBub3RpZnkgbnVsbGFibGUgb2YgJytcbiAgICAnb2xkIG9uIG9wZXJhdG9yIG9yIG9yZGVyIG91dCBvdmVycmlkZSBwYXJhbGxlbCBwYXJhbXMgcGFydGlhbCBwaW5uZWQgcHJpdmF0ZSBwcm9jZWR1cmUgcHJvcGVydHkgcHJvdGVjdGVkIHB1YmxpYyBxdWVyeWFibGUgcmFpc2UgcmVhZCByZWFkb25seSAnK1xuICAgICdyZWNvcmQgcmVpbnRyb2R1Y2UgcmVtb3ZlIHJlcGVhdCByZXF1aXJlIHJlc3VsdCByZXZlcnNlIHNlYWxlZCBzZWxlY3Qgc2VsZiBzZXF1ZW5jZSBzZXQgc2hsIHNociBza2lwIHN0YXRpYyBzdGVwIHNvZnQgdGFrZSB0aGVuIHRvIHRydWUgdHJ5IHR1cGxlICcrXG4gICAgJ3R5cGUgdW5pb24gdW5pdCB1bnNhZmUgdW50aWwgdXNlcyB1c2luZyB2YXIgdmlydHVhbCByYWlzZXMgdm9sYXRpbGUgd2hlcmUgd2hpbGUgd2l0aCB3cml0ZSB4b3IgeWllbGQgYXdhaXQgbWFwcGVkIGRlcHJlY2F0ZWQgc3RkY2FsbCBjZGVjbCBwYXNjYWwgJytcbiAgICAncmVnaXN0ZXIgc2FmZWNhbGwgb3ZlcmxvYWQgbGlicmFyeSBwbGF0Zm9ybSByZWZlcmVuY2UgcGFja2VkIHN0cmljdCBwdWJsaXNoZWQgYXV0b3JlbGVhc2Vwb29sIHNlbGVjdG9yIHN0cm9uZyB3ZWFrIHVucmV0YWluZWQnXG4gIH07XG4gIHZhciBDVVJMWV9DT01NRU5UID0gaGxqcy5DT01NRU5UKFxuICAgICd7JyxcbiAgICAnfScsXG4gICAge1xuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfVxuICApO1xuICB2YXIgUEFSRU5fQ09NTUVOVCA9IGhsanMuQ09NTUVOVChcbiAgICAnXFxcXChcXFxcKicsXG4gICAgJ1xcXFwqXFxcXCknLFxuICAgIHtcbiAgICAgIHJlbGV2YW5jZTogMTBcbiAgICB9XG4gICk7XG4gIHZhciBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1xcJycsIGVuZDogJ1xcJycsXG4gICAgY29udGFpbnM6IFt7YmVnaW46ICdcXCdcXCcnfV1cbiAgfTtcbiAgdmFyIENIQVJfU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsIGJlZ2luOiAnKCNcXFxcZCspKydcbiAgfTtcbiAgdmFyIEZVTkNUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24gY29uc3RydWN0b3IgZGVzdHJ1Y3RvciBwcm9jZWR1cmUgbWV0aG9kJywgZW5kOiAnWzo7XScsXG4gICAga2V5d29yZHM6ICdmdW5jdGlvbiBjb25zdHJ1Y3RvcnwxMCBkZXN0cnVjdG9yfDEwIHByb2NlZHVyZXwxMCBtZXRob2R8MTAnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLlRJVExFX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgIGJlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKScsXG4gICAgICAgIGtleXdvcmRzOiBPWFlHRU5FX0tFWVdPUkRTLFxuICAgICAgICBjb250YWluczogW1NUUklORywgQ0hBUl9TVFJJTkddXG4gICAgICB9LFxuICAgICAgQ1VSTFlfQ09NTUVOVCwgUEFSRU5fQ09NTUVOVFxuICAgIF1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnT3h5Z2VuZScsXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3JkczogT1hZR0VORV9LRVlXT1JEUyxcbiAgICBpbGxlZ2FsOiAnKFwifFxcXFwkW0ctWmctel18XFxcXC9cXFxcKnw8L3w9PnwtPiknLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBDVVJMWV9DT01NRU5ULCBQQVJFTl9DT01NRU5ULCBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBTVFJJTkcsIENIQVJfU1RSSU5HLFxuICAgICAgaGxqcy5OVU1CRVJfTU9ERSxcbiAgICAgIEZVTkNUSU9OLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luOiAnPVxcXFxiY2xhc3NcXFxcYicsIGVuZDogJ2VuZDsnLFxuICAgICAgICBrZXl3b3JkczogT1hZR0VORV9LRVlXT1JEUyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBTVFJJTkcsIENIQVJfU1RSSU5HLFxuICAgICAgICAgIENVUkxZX0NPTU1FTlQsIFBBUkVOX0NPTU1FTlQsIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBGVU5DVElPTlxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG94eWdlbmU7XG4iXSwic291cmNlUm9vdCI6IiJ9