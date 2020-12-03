(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_smalltalk"],{

/***/ "./node_modules/highlight.js/lib/languages/smalltalk.js":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/smalltalk.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Smalltalk
Description: Smalltalk is an object-oriented, dynamically typed reflective programming language.
Author: Vladimir Gubarkov <xonixx@gmail.com>
Website: https://en.wikipedia.org/wiki/Smalltalk
*/

function smalltalk(hljs) {
  var VAR_IDENT_RE = '[a-z][a-zA-Z0-9_]*';
  var CHAR = {
    className: 'string',
    begin: '\\$.{1}'
  };
  var SYMBOL = {
    className: 'symbol',
    begin: '#' + hljs.UNDERSCORE_IDENT_RE
  };
  return {
    name: 'Smalltalk',
    aliases: ['st'],
    keywords: 'self super nil true false thisContext', // only 6
    contains: [
      hljs.COMMENT('"', '"'),
      hljs.APOS_STRING_MODE,
      {
        className: 'type',
        begin: '\\b[A-Z][A-Za-z0-9_]*',
        relevance: 0
      },
      {
        begin: VAR_IDENT_RE + ':',
        relevance: 0
      },
      hljs.C_NUMBER_MODE,
      SYMBOL,
      CHAR,
      {
        // This looks more complicated than needed to avoid combinatorial
        // explosion under V8. It effectively means `| var1 var2 ... |` with
        // whitespace adjacent to `|` being optional.
        begin: '\\|[ ]*' + VAR_IDENT_RE + '([ ]+' + VAR_IDENT_RE + ')*[ ]*\\|',
        returnBegin: true, end: /\|/,
        illegal: /\S/,
        contains: [{begin: '(\\|[ ]*)?' + VAR_IDENT_RE}]
      },
      {
        begin: '\\#\\(', end: '\\)',
        contains: [
          hljs.APOS_STRING_MODE,
          CHAR,
          hljs.C_NUMBER_MODE,
          SYMBOL
        ]
      }
    ]
  };
}

module.exports = smalltalk;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3NtYWxsdGFsay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9zbWFsbHRhbGsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFNtYWxsdGFsa1xuRGVzY3JpcHRpb246IFNtYWxsdGFsayBpcyBhbiBvYmplY3Qtb3JpZW50ZWQsIGR5bmFtaWNhbGx5IHR5cGVkIHJlZmxlY3RpdmUgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UuXG5BdXRob3I6IFZsYWRpbWlyIEd1YmFya292IDx4b25peHhAZ21haWwuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU21hbGx0YWxrXG4qL1xuXG5mdW5jdGlvbiBzbWFsbHRhbGsoaGxqcykge1xuICB2YXIgVkFSX0lERU5UX1JFID0gJ1thLXpdW2EtekEtWjAtOV9dKic7XG4gIHZhciBDSEFSID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdcXFxcJC57MX0nXG4gIH07XG4gIHZhciBTWU1CT0wgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICBiZWdpbjogJyMnICsgaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFXG4gIH07XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1NtYWxsdGFsaycsXG4gICAgYWxpYXNlczogWydzdCddLFxuICAgIGtleXdvcmRzOiAnc2VsZiBzdXBlciBuaWwgdHJ1ZSBmYWxzZSB0aGlzQ29udGV4dCcsIC8vIG9ubHkgNlxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNPTU1FTlQoJ1wiJywgJ1wiJyksXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICBiZWdpbjogJ1xcXFxiW0EtWl1bQS1aYS16MC05X10qJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogVkFSX0lERU5UX1JFICsgJzonLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICBTWU1CT0wsXG4gICAgICBDSEFSLFxuICAgICAge1xuICAgICAgICAvLyBUaGlzIGxvb2tzIG1vcmUgY29tcGxpY2F0ZWQgdGhhbiBuZWVkZWQgdG8gYXZvaWQgY29tYmluYXRvcmlhbFxuICAgICAgICAvLyBleHBsb3Npb24gdW5kZXIgVjguIEl0IGVmZmVjdGl2ZWx5IG1lYW5zIGB8IHZhcjEgdmFyMiAuLi4gfGAgd2l0aFxuICAgICAgICAvLyB3aGl0ZXNwYWNlIGFkamFjZW50IHRvIGB8YCBiZWluZyBvcHRpb25hbC5cbiAgICAgICAgYmVnaW46ICdcXFxcfFsgXSonICsgVkFSX0lERU5UX1JFICsgJyhbIF0rJyArIFZBUl9JREVOVF9SRSArICcpKlsgXSpcXFxcfCcsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLCBlbmQ6IC9cXHwvLFxuICAgICAgICBpbGxlZ2FsOiAvXFxTLyxcbiAgICAgICAgY29udGFpbnM6IFt7YmVnaW46ICcoXFxcXHxbIF0qKT8nICsgVkFSX0lERU5UX1JFfV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFxcXCNcXFxcKCcsIGVuZDogJ1xcXFwpJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgQ0hBUixcbiAgICAgICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICAgICAgU1lNQk9MXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc21hbGx0YWxrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==