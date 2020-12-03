(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_nim"],{

/***/ "./node_modules/highlight.js/lib/languages/nim.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/nim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Nim
Description: Nim is a statically typed compiled systems programming language.
Website: https://nim-lang.org
Category: system
*/

function nim(hljs) {
  return {
    name: 'Nim',
    aliases: ['nim'],
    keywords: {
      keyword:
        'addr and as asm bind block break case cast const continue converter ' +
        'discard distinct div do elif else end enum except export finally ' +
        'for from func generic if import in include interface is isnot iterator ' +
        'let macro method mixin mod nil not notin object of or out proc ptr ' +
        'raise ref return shl shr static template try tuple type using var ' +
        'when while with without xor yield',
      literal:
        'shared guarded stdin stdout stderr result true false',
      built_in:
        'int int8 int16 int32 int64 uint uint8 uint16 uint32 uint64 float ' +
        'float32 float64 bool char string cstring pointer expr stmt void ' +
        'auto any range array openarray varargs seq set clong culong cchar ' +
        'cschar cshort cint csize clonglong cfloat cdouble clongdouble ' +
        'cuchar cushort cuint culonglong cstringarray semistatic'
    },
    contains: [ {
        className: 'meta', // Actually pragma
        begin: /{\./,
        end: /\.}/,
        relevance: 10
      }, {
        className: 'string',
        begin: /[a-zA-Z]\w*"/,
        end: /"/,
        contains: [{begin: /""/}]
      }, {
        className: 'string',
        begin: /([a-zA-Z]\w*)?"""/,
        end: /"""/
      },
      hljs.QUOTE_STRING_MODE,
      {
        className: 'type',
        begin: /\b[A-Z]\w+\b/,
        relevance: 0
      }, {
        className: 'number',
        relevance: 0,
        variants: [
          {begin: /\b(0[xX][0-9a-fA-F][_0-9a-fA-F]*)('?[iIuU](8|16|32|64))?/},
          {begin: /\b(0o[0-7][_0-7]*)('?[iIuUfF](8|16|32|64))?/},
          {begin: /\b(0(b|B)[01][_01]*)('?[iIuUfF](8|16|32|64))?/},
          {begin: /\b(\d[_\d]*)('?[iIuUfF](8|16|32|64))?/}
        ]
      },
      hljs.HASH_COMMENT_MODE
    ]
  }
}

module.exports = nim;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL25pbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrRUFBa0U7QUFDN0UsV0FBVyxxREFBcUQ7QUFDaEUsV0FBVyx1REFBdUQ7QUFDbEUsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfbmltLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBOaW1cbkRlc2NyaXB0aW9uOiBOaW0gaXMgYSBzdGF0aWNhbGx5IHR5cGVkIGNvbXBpbGVkIHN5c3RlbXMgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UuXG5XZWJzaXRlOiBodHRwczovL25pbS1sYW5nLm9yZ1xuQ2F0ZWdvcnk6IHN5c3RlbVxuKi9cblxuZnVuY3Rpb24gbmltKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnTmltJyxcbiAgICBhbGlhc2VzOiBbJ25pbSddLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOlxuICAgICAgICAnYWRkciBhbmQgYXMgYXNtIGJpbmQgYmxvY2sgYnJlYWsgY2FzZSBjYXN0IGNvbnN0IGNvbnRpbnVlIGNvbnZlcnRlciAnICtcbiAgICAgICAgJ2Rpc2NhcmQgZGlzdGluY3QgZGl2IGRvIGVsaWYgZWxzZSBlbmQgZW51bSBleGNlcHQgZXhwb3J0IGZpbmFsbHkgJyArXG4gICAgICAgICdmb3IgZnJvbSBmdW5jIGdlbmVyaWMgaWYgaW1wb3J0IGluIGluY2x1ZGUgaW50ZXJmYWNlIGlzIGlzbm90IGl0ZXJhdG9yICcgK1xuICAgICAgICAnbGV0IG1hY3JvIG1ldGhvZCBtaXhpbiBtb2QgbmlsIG5vdCBub3RpbiBvYmplY3Qgb2Ygb3Igb3V0IHByb2MgcHRyICcgK1xuICAgICAgICAncmFpc2UgcmVmIHJldHVybiBzaGwgc2hyIHN0YXRpYyB0ZW1wbGF0ZSB0cnkgdHVwbGUgdHlwZSB1c2luZyB2YXIgJyArXG4gICAgICAgICd3aGVuIHdoaWxlIHdpdGggd2l0aG91dCB4b3IgeWllbGQnLFxuICAgICAgbGl0ZXJhbDpcbiAgICAgICAgJ3NoYXJlZCBndWFyZGVkIHN0ZGluIHN0ZG91dCBzdGRlcnIgcmVzdWx0IHRydWUgZmFsc2UnLFxuICAgICAgYnVpbHRfaW46XG4gICAgICAgICdpbnQgaW50OCBpbnQxNiBpbnQzMiBpbnQ2NCB1aW50IHVpbnQ4IHVpbnQxNiB1aW50MzIgdWludDY0IGZsb2F0ICcgK1xuICAgICAgICAnZmxvYXQzMiBmbG9hdDY0IGJvb2wgY2hhciBzdHJpbmcgY3N0cmluZyBwb2ludGVyIGV4cHIgc3RtdCB2b2lkICcgK1xuICAgICAgICAnYXV0byBhbnkgcmFuZ2UgYXJyYXkgb3BlbmFycmF5IHZhcmFyZ3Mgc2VxIHNldCBjbG9uZyBjdWxvbmcgY2NoYXIgJyArXG4gICAgICAgICdjc2NoYXIgY3Nob3J0IGNpbnQgY3NpemUgY2xvbmdsb25nIGNmbG9hdCBjZG91YmxlIGNsb25nZG91YmxlICcgK1xuICAgICAgICAnY3VjaGFyIGN1c2hvcnQgY3VpbnQgY3Vsb25nbG9uZyBjc3RyaW5nYXJyYXkgc2VtaXN0YXRpYydcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsIC8vIEFjdHVhbGx5IHByYWdtYVxuICAgICAgICBiZWdpbjogL3tcXC4vLFxuICAgICAgICBlbmQ6IC9cXC59LyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSwge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogL1thLXpBLVpdXFx3KlwiLyxcbiAgICAgICAgZW5kOiAvXCIvLFxuICAgICAgICBjb250YWluczogW3tiZWdpbjogL1wiXCIvfV1cbiAgICAgIH0sIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46IC8oW2EtekEtWl1cXHcqKT9cIlwiXCIvLFxuICAgICAgICBlbmQ6IC9cIlwiXCIvXG4gICAgICB9LFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgIGJlZ2luOiAvXFxiW0EtWl1cXHcrXFxiLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7YmVnaW46IC9cXGIoMFt4WF1bMC05YS1mQS1GXVtfMC05YS1mQS1GXSopKCc/W2lJdVVdKDh8MTZ8MzJ8NjQpKT8vfSxcbiAgICAgICAgICB7YmVnaW46IC9cXGIoMG9bMC03XVtfMC03XSopKCc/W2lJdVVmRl0oOHwxNnwzMnw2NCkpPy99LFxuICAgICAgICAgIHtiZWdpbjogL1xcYigwKGJ8QilbMDFdW18wMV0qKSgnP1tpSXVVZkZdKDh8MTZ8MzJ8NjQpKT8vfSxcbiAgICAgICAgICB7YmVnaW46IC9cXGIoXFxkW19cXGRdKikoJz9baUl1VWZGXSg4fDE2fDMyfDY0KSk/L31cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREVcbiAgICBdXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuaW07XG4iXSwic291cmNlUm9vdCI6IiJ9