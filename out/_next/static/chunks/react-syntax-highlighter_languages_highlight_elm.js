(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_elm"],{

/***/ "./node_modules/highlight.js/lib/languages/elm.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/elm.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Elm
Author: Janis Voigtlaender <janis.voigtlaender@gmail.com>
Website: https://elm-lang.org
Category: functional
*/

function elm(hljs) {
  var COMMENT = {
    variants: [
      hljs.COMMENT('--', '$'),
      hljs.COMMENT(
        '{-',
        '-}',
        {
          contains: ['self']
        }
      )
    ]
  };

  var CONSTRUCTOR = {
    className: 'type',
    begin: '\\b[A-Z][\\w\']*', // TODO: other constructors (built-in, infix).
    relevance: 0
  };

  var LIST = {
    begin: '\\(', end: '\\)',
    illegal: '"',
    contains: [
      {className: 'type', begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'},
      COMMENT
    ]
  };

  var RECORD = {
    begin: '{', end: '}',
    contains: LIST.contains
  };

  var CHARACTER = {
    className: 'string',
    begin: '\'\\\\?.', end: '\'',
    illegal: '.'
  };

  return {
    name: 'Elm',
    keywords:
      'let in if then else case of where module import exposing ' +
      'type alias as infix infixl infixr port effect command subscription',
    contains: [

      // Top-level constructions.

      {
        beginKeywords: 'port effect module', end: 'exposing',
        keywords: 'port effect module where command subscription exposing',
        contains: [LIST, COMMENT],
        illegal: '\\W\\.|;'
      },
      {
        begin: 'import', end: '$',
        keywords: 'import as exposing',
        contains: [LIST, COMMENT],
        illegal: '\\W\\.|;'
      },
      {
        begin: 'type', end: '$',
        keywords: 'type alias',
        contains: [CONSTRUCTOR, LIST, RECORD, COMMENT]
      },
      {
        beginKeywords: 'infix infixl infixr', end: '$',
        contains: [hljs.C_NUMBER_MODE, COMMENT]
      },
      {
        begin: 'port', end: '$',
        keywords: 'port',
        contains: [COMMENT]
      },

      // Literals and names.

      CHARACTER,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      CONSTRUCTOR,
      hljs.inherit(hljs.TITLE_MODE, {begin: '^[_a-z][\\w\']*'}),
      COMMENT,

      {begin: '->|<-'} // No markup, relevance booster
    ],
    illegal: /;/
  };
}

module.exports = elm;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2VsbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG1FQUFtRTtBQUMxRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFVBQVU7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMseUJBQXlCO0FBQzlEOztBQUVBLE9BQU8sZUFBZTtBQUN0QjtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfZWxtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBFbG1cbkF1dGhvcjogSmFuaXMgVm9pZ3RsYWVuZGVyIDxqYW5pcy52b2lndGxhZW5kZXJAZ21haWwuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly9lbG0tbGFuZy5vcmdcbkNhdGVnb3J5OiBmdW5jdGlvbmFsXG4qL1xuXG5mdW5jdGlvbiBlbG0oaGxqcykge1xuICB2YXIgQ09NTUVOVCA9IHtcbiAgICB2YXJpYW50czogW1xuICAgICAgaGxqcy5DT01NRU5UKCctLScsICckJyksXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgICd7LScsXG4gICAgICAgICctfScsXG4gICAgICAgIHtcbiAgICAgICAgICBjb250YWluczogWydzZWxmJ11cbiAgICAgICAgfVxuICAgICAgKVxuICAgIF1cbiAgfTtcblxuICB2YXIgQ09OU1RSVUNUT1IgPSB7XG4gICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgYmVnaW46ICdcXFxcYltBLVpdW1xcXFx3XFwnXSonLCAvLyBUT0RPOiBvdGhlciBjb25zdHJ1Y3RvcnMgKGJ1aWx0LWluLCBpbmZpeCkuXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgdmFyIExJU1QgPSB7XG4gICAgYmVnaW46ICdcXFxcKCcsIGVuZDogJ1xcXFwpJyxcbiAgICBpbGxlZ2FsOiAnXCInLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7Y2xhc3NOYW1lOiAndHlwZScsIGJlZ2luOiAnXFxcXGJbQS1aXVtcXFxcd10qKFxcXFwoKFxcXFwuXFxcXC58LHxcXFxcdyspXFxcXCkpPyd9LFxuICAgICAgQ09NTUVOVFxuICAgIF1cbiAgfTtcblxuICB2YXIgUkVDT1JEID0ge1xuICAgIGJlZ2luOiAneycsIGVuZDogJ30nLFxuICAgIGNvbnRhaW5zOiBMSVNULmNvbnRhaW5zXG4gIH07XG5cbiAgdmFyIENIQVJBQ1RFUiA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnXFwnXFxcXFxcXFw/LicsIGVuZDogJ1xcJycsXG4gICAgaWxsZWdhbDogJy4nXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnRWxtJyxcbiAgICBrZXl3b3JkczpcbiAgICAgICdsZXQgaW4gaWYgdGhlbiBlbHNlIGNhc2Ugb2Ygd2hlcmUgbW9kdWxlIGltcG9ydCBleHBvc2luZyAnICtcbiAgICAgICd0eXBlIGFsaWFzIGFzIGluZml4IGluZml4bCBpbmZpeHIgcG9ydCBlZmZlY3QgY29tbWFuZCBzdWJzY3JpcHRpb24nLFxuICAgIGNvbnRhaW5zOiBbXG5cbiAgICAgIC8vIFRvcC1sZXZlbCBjb25zdHJ1Y3Rpb25zLlxuXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdwb3J0IGVmZmVjdCBtb2R1bGUnLCBlbmQ6ICdleHBvc2luZycsXG4gICAgICAgIGtleXdvcmRzOiAncG9ydCBlZmZlY3QgbW9kdWxlIHdoZXJlIGNvbW1hbmQgc3Vic2NyaXB0aW9uIGV4cG9zaW5nJyxcbiAgICAgICAgY29udGFpbnM6IFtMSVNULCBDT01NRU5UXSxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxXXFxcXC58OydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnaW1wb3J0JywgZW5kOiAnJCcsXG4gICAgICAgIGtleXdvcmRzOiAnaW1wb3J0IGFzIGV4cG9zaW5nJyxcbiAgICAgICAgY29udGFpbnM6IFtMSVNULCBDT01NRU5UXSxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxXXFxcXC58OydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAndHlwZScsIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3JkczogJ3R5cGUgYWxpYXMnLFxuICAgICAgICBjb250YWluczogW0NPTlNUUlVDVE9SLCBMSVNULCBSRUNPUkQsIENPTU1FTlRdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnaW5maXggaW5maXhsIGluZml4cicsIGVuZDogJyQnLFxuICAgICAgICBjb250YWluczogW2hsanMuQ19OVU1CRVJfTU9ERSwgQ09NTUVOVF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAncG9ydCcsIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3JkczogJ3BvcnQnLFxuICAgICAgICBjb250YWluczogW0NPTU1FTlRdXG4gICAgICB9LFxuXG4gICAgICAvLyBMaXRlcmFscyBhbmQgbmFtZXMuXG5cbiAgICAgIENIQVJBQ1RFUixcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICBDT05TVFJVQ1RPUixcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtiZWdpbjogJ15bX2Etel1bXFxcXHdcXCddKid9KSxcbiAgICAgIENPTU1FTlQsXG5cbiAgICAgIHtiZWdpbjogJy0+fDwtJ30gLy8gTm8gbWFya3VwLCByZWxldmFuY2UgYm9vc3RlclxuICAgIF0sXG4gICAgaWxsZWdhbDogLzsvXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZWxtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==