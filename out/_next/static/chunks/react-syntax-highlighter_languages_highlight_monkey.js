(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_monkey"],{

/***/ "./node_modules/highlight.js/lib/languages/monkey.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/monkey.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Monkey
Description: Monkey2 is an easy to use, cross platform, games oriented programming language from Blitz Research.
Author: Arthur Bikmullin <devolonter@gmail.com>
Website: https://blitzresearch.itch.io/monkey2
*/

function monkey(hljs) {
  var NUMBER = {
    className: 'number', relevance: 0,
    variants: [
      {
        begin: '[$][a-fA-F0-9]+'
      },
      hljs.NUMBER_MODE
    ]
  };

  return {
    name: 'Monkey',
    case_insensitive: true,
    keywords: {
      keyword: 'public private property continue exit extern new try catch ' +
        'eachin not abstract final select case default const local global field ' +
        'end if then else elseif endif while wend repeat until forever for ' +
        'to step next return module inline throw import',

      built_in: 'DebugLog DebugStop Error Print ACos ACosr ASin ASinr ATan ATan2 ATan2r ATanr Abs Abs Ceil ' +
        'Clamp Clamp Cos Cosr Exp Floor Log Max Max Min Min Pow Sgn Sgn Sin Sinr Sqrt Tan Tanr Seed PI HALFPI TWOPI',

      literal: 'true false null and or shl shr mod'
    },
    illegal: /\/\*/,
    contains: [
      hljs.COMMENT('#rem', '#end'),
      hljs.COMMENT(
        "'",
        '$',
        {
          relevance: 0
        }
      ),
      {
        className: 'function',
        beginKeywords: 'function method', end: '[(=:]|$',
        illegal: /\n/,
        contains: [
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        className: 'class',
        beginKeywords: 'class interface', end: '$',
        contains: [
          {
            beginKeywords: 'extends implements'
          },
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        className: 'built_in',
        begin: '\\b(self|super)\\b'
      },
      {
        className: 'meta',
        begin: '\\s*#', end: '$',
        keywords: {'meta-keyword': 'if else elseif endif end then'}
      },
      {
        className: 'meta',
        begin: '^\\s*strict\\b'
      },
      {
        beginKeywords: 'alias', end: '=',
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      },
      hljs.QUOTE_STRING_MODE,
      NUMBER
    ]
  }
}

module.exports = monkey;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL21vbmtleS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9tb25rZXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IE1vbmtleVxuRGVzY3JpcHRpb246IE1vbmtleTIgaXMgYW4gZWFzeSB0byB1c2UsIGNyb3NzIHBsYXRmb3JtLCBnYW1lcyBvcmllbnRlZCBwcm9ncmFtbWluZyBsYW5ndWFnZSBmcm9tIEJsaXR6IFJlc2VhcmNoLlxuQXV0aG9yOiBBcnRodXIgQmlrbXVsbGluIDxkZXZvbG9udGVyQGdtYWlsLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vYmxpdHpyZXNlYXJjaC5pdGNoLmlvL21vbmtleTJcbiovXG5cbmZ1bmN0aW9uIG1vbmtleShobGpzKSB7XG4gIHZhciBOVU1CRVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJywgcmVsZXZhbmNlOiAwLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnWyRdW2EtZkEtRjAtOV0rJ1xuICAgICAgfSxcbiAgICAgIGhsanMuTlVNQkVSX01PREVcbiAgICBdXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnTW9ua2V5JyxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOiAncHVibGljIHByaXZhdGUgcHJvcGVydHkgY29udGludWUgZXhpdCBleHRlcm4gbmV3IHRyeSBjYXRjaCAnICtcbiAgICAgICAgJ2VhY2hpbiBub3QgYWJzdHJhY3QgZmluYWwgc2VsZWN0IGNhc2UgZGVmYXVsdCBjb25zdCBsb2NhbCBnbG9iYWwgZmllbGQgJyArXG4gICAgICAgICdlbmQgaWYgdGhlbiBlbHNlIGVsc2VpZiBlbmRpZiB3aGlsZSB3ZW5kIHJlcGVhdCB1bnRpbCBmb3JldmVyIGZvciAnICtcbiAgICAgICAgJ3RvIHN0ZXAgbmV4dCByZXR1cm4gbW9kdWxlIGlubGluZSB0aHJvdyBpbXBvcnQnLFxuXG4gICAgICBidWlsdF9pbjogJ0RlYnVnTG9nIERlYnVnU3RvcCBFcnJvciBQcmludCBBQ29zIEFDb3NyIEFTaW4gQVNpbnIgQVRhbiBBVGFuMiBBVGFuMnIgQVRhbnIgQWJzIEFicyBDZWlsICcgK1xuICAgICAgICAnQ2xhbXAgQ2xhbXAgQ29zIENvc3IgRXhwIEZsb29yIExvZyBNYXggTWF4IE1pbiBNaW4gUG93IFNnbiBTZ24gU2luIFNpbnIgU3FydCBUYW4gVGFuciBTZWVkIFBJIEhBTEZQSSBUV09QSScsXG5cbiAgICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlIG51bGwgYW5kIG9yIHNobCBzaHIgbW9kJ1xuICAgIH0sXG4gICAgaWxsZWdhbDogL1xcL1xcKi8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ09NTUVOVCgnI3JlbScsICcjZW5kJyksXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgIFwiJ1wiLFxuICAgICAgICAnJCcsXG4gICAgICAgIHtcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24gbWV0aG9kJywgZW5kOiAnWyg9Ol18JCcsXG4gICAgICAgIGlsbGVnYWw6IC9cXG4vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzIGludGVyZmFjZScsIGVuZDogJyQnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdleHRlbmRzIGltcGxlbWVudHMnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIGJlZ2luOiAnXFxcXGIoc2VsZnxzdXBlcilcXFxcYidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ1xcXFxzKiMnLCBlbmQ6ICckJyxcbiAgICAgICAga2V5d29yZHM6IHsnbWV0YS1rZXl3b3JkJzogJ2lmIGVsc2UgZWxzZWlmIGVuZGlmIGVuZCB0aGVuJ31cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ15cXFxccypzdHJpY3RcXFxcYidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdhbGlhcycsIGVuZDogJz0nLFxuICAgICAgICBjb250YWluczogW2hsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXVxuICAgICAgfSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBOVU1CRVJcbiAgICBdXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtb25rZXk7XG4iXSwic291cmNlUm9vdCI6IiJ9