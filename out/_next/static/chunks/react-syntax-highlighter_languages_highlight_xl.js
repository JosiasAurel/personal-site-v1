(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_xl"],{

/***/ "./node_modules/highlight.js/lib/languages/xl.js":
/*!*******************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/xl.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: XL
Author: Christophe de Dinechin <christophe@taodyne.com>
Description: An extensible programming language, based on parse tree rewriting
Website: http://xlr.sf.net
*/

function xl(hljs) {
  var BUILTIN_MODULES =
    'ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo ' +
    'StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts';

  var XL_KEYWORDS = {
    $pattern: /[a-zA-Z][a-zA-Z0-9_?]*/,
    keyword:
      'if then else do while until for loop import with is as where when by data constant ' +
      'integer real text name boolean symbol infix prefix postfix block tree',
    literal:
      'true false nil',
    built_in:
      'in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin ' +
      'acos atan exp expm1 log log2 log10 log1p pi at text_length text_range ' +
      'text_find text_replace contains page slide basic_slide title_slide ' +
      'title subtitle fade_in fade_out fade_at clear_color color line_color ' +
      'line_width texture_wrap texture_transform texture scale_?x scale_?y ' +
      'scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y ' +
      'rotate_?z? rectangle circle ellipse sphere path line_to move_to ' +
      'quad_to curve_to theme background contents locally time mouse_?x ' +
      'mouse_?y mouse_buttons ' +
      BUILTIN_MODULES
  };

  var DOUBLE_QUOTE_TEXT = {
    className: 'string',
    begin: '"', end: '"', illegal: '\\n'
  };
  var SINGLE_QUOTE_TEXT = {
    className: 'string',
    begin: '\'', end: '\'', illegal: '\\n'
  };
  var LONG_TEXT = {
    className: 'string',
    begin: '<<', end: '>>'
  };
  var BASED_NUMBER = {
    className: 'number',
    begin: '[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?'
  };
  var IMPORT = {
    beginKeywords: 'import', end: '$',
    keywords: XL_KEYWORDS,
    contains: [DOUBLE_QUOTE_TEXT]
  };
  var FUNCTION_DEFINITION = {
    className: 'function',
    begin: /[a-z][^\n]*->/, returnBegin: true, end: /->/,
    contains: [
      hljs.inherit(hljs.TITLE_MODE, {starts: {
        endsWithParent: true,
        keywords: XL_KEYWORDS
      }})
    ]
  };
  return {
    name: 'XL',
    aliases: ['tao'],
    keywords: XL_KEYWORDS,
    contains: [
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    DOUBLE_QUOTE_TEXT,
    SINGLE_QUOTE_TEXT,
    LONG_TEXT,
    FUNCTION_DEFINITION,
    IMPORT,
    BASED_NUMBER,
    hljs.NUMBER_MODE
    ]
  };
}

module.exports = xl;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3hsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfeGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFhMXG5BdXRob3I6IENocmlzdG9waGUgZGUgRGluZWNoaW4gPGNocmlzdG9waGVAdGFvZHluZS5jb20+XG5EZXNjcmlwdGlvbjogQW4gZXh0ZW5zaWJsZSBwcm9ncmFtbWluZyBsYW5ndWFnZSwgYmFzZWQgb24gcGFyc2UgdHJlZSByZXdyaXRpbmdcbldlYnNpdGU6IGh0dHA6Ly94bHIuc2YubmV0XG4qL1xuXG5mdW5jdGlvbiB4bChobGpzKSB7XG4gIHZhciBCVUlMVElOX01PRFVMRVMgPVxuICAgICdPYmplY3RMb2FkZXIgQW5pbWF0ZSBNb3ZpZUNyZWRpdHMgU2xpZGVzIEZpbHRlcnMgU2hhZGluZyBNYXRlcmlhbHMgTGVuc0ZsYXJlIE1hcHBpbmcgVkxDQXVkaW9WaWRlbyAnICtcbiAgICAnU3RlcmVvRGVjb2RlciBQb2ludENsb3VkIE5ldHdvcmtBY2Nlc3MgUmVtb3RlQ29udHJvbCBSZWdFeHAgQ2hyb21hS2V5IFNub3dmYWxsIE5vZGVKUyBTcGVlY2ggQ2hhcnRzJztcblxuICB2YXIgWExfS0VZV09SRFMgPSB7XG4gICAgJHBhdHRlcm46IC9bYS16QS1aXVthLXpBLVowLTlfP10qLyxcbiAgICBrZXl3b3JkOlxuICAgICAgJ2lmIHRoZW4gZWxzZSBkbyB3aGlsZSB1bnRpbCBmb3IgbG9vcCBpbXBvcnQgd2l0aCBpcyBhcyB3aGVyZSB3aGVuIGJ5IGRhdGEgY29uc3RhbnQgJyArXG4gICAgICAnaW50ZWdlciByZWFsIHRleHQgbmFtZSBib29sZWFuIHN5bWJvbCBpbmZpeCBwcmVmaXggcG9zdGZpeCBibG9jayB0cmVlJyxcbiAgICBsaXRlcmFsOlxuICAgICAgJ3RydWUgZmFsc2UgbmlsJyxcbiAgICBidWlsdF9pbjpcbiAgICAgICdpbiBtb2QgcmVtIGFuZCBvciB4b3Igbm90IGFicyBzaWduIGZsb29yIGNlaWwgc3FydCBzaW4gY29zIHRhbiBhc2luICcgK1xuICAgICAgJ2Fjb3MgYXRhbiBleHAgZXhwbTEgbG9nIGxvZzIgbG9nMTAgbG9nMXAgcGkgYXQgdGV4dF9sZW5ndGggdGV4dF9yYW5nZSAnICtcbiAgICAgICd0ZXh0X2ZpbmQgdGV4dF9yZXBsYWNlIGNvbnRhaW5zIHBhZ2Ugc2xpZGUgYmFzaWNfc2xpZGUgdGl0bGVfc2xpZGUgJyArXG4gICAgICAndGl0bGUgc3VidGl0bGUgZmFkZV9pbiBmYWRlX291dCBmYWRlX2F0IGNsZWFyX2NvbG9yIGNvbG9yIGxpbmVfY29sb3IgJyArXG4gICAgICAnbGluZV93aWR0aCB0ZXh0dXJlX3dyYXAgdGV4dHVyZV90cmFuc2Zvcm0gdGV4dHVyZSBzY2FsZV8/eCBzY2FsZV8/eSAnICtcbiAgICAgICdzY2FsZV8/ej8gdHJhbnNsYXRlXz94IHRyYW5zbGF0ZV8/eSB0cmFuc2xhdGVfP3o/IHJvdGF0ZV8/eCByb3RhdGVfP3kgJyArXG4gICAgICAncm90YXRlXz96PyByZWN0YW5nbGUgY2lyY2xlIGVsbGlwc2Ugc3BoZXJlIHBhdGggbGluZV90byBtb3ZlX3RvICcgK1xuICAgICAgJ3F1YWRfdG8gY3VydmVfdG8gdGhlbWUgYmFja2dyb3VuZCBjb250ZW50cyBsb2NhbGx5IHRpbWUgbW91c2VfP3ggJyArXG4gICAgICAnbW91c2VfP3kgbW91c2VfYnV0dG9ucyAnICtcbiAgICAgIEJVSUxUSU5fTU9EVUxFU1xuICB9O1xuXG4gIHZhciBET1VCTEVfUVVPVEVfVEVYVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnXCInLCBlbmQ6ICdcIicsIGlsbGVnYWw6ICdcXFxcbidcbiAgfTtcbiAgdmFyIFNJTkdMRV9RVU9URV9URVhUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdcXCcnLCBlbmQ6ICdcXCcnLCBpbGxlZ2FsOiAnXFxcXG4nXG4gIH07XG4gIHZhciBMT05HX1RFWFQgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJzw8JywgZW5kOiAnPj4nXG4gIH07XG4gIHZhciBCQVNFRF9OVU1CRVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICBiZWdpbjogJ1swLTldKyNbMC05QS1aX10rKFxcXFwuWzAtOS1BLVpfXSspPyM/KFtFZV1bKy1dP1swLTldKyk/J1xuICB9O1xuICB2YXIgSU1QT1JUID0ge1xuICAgIGJlZ2luS2V5d29yZHM6ICdpbXBvcnQnLCBlbmQ6ICckJyxcbiAgICBrZXl3b3JkczogWExfS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtET1VCTEVfUVVPVEVfVEVYVF1cbiAgfTtcbiAgdmFyIEZVTkNUSU9OX0RFRklOSVRJT04gPSB7XG4gICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgIGJlZ2luOiAvW2Etel1bXlxcbl0qLT4vLCByZXR1cm5CZWdpbjogdHJ1ZSwgZW5kOiAvLT4vLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7c3RhcnRzOiB7XG4gICAgICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgICAgICBrZXl3b3JkczogWExfS0VZV09SRFNcbiAgICAgIH19KVxuICAgIF1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnWEwnLFxuICAgIGFsaWFzZXM6IFsndGFvJ10sXG4gICAga2V5d29yZHM6IFhMX0tFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgRE9VQkxFX1FVT1RFX1RFWFQsXG4gICAgU0lOR0xFX1FVT1RFX1RFWFQsXG4gICAgTE9OR19URVhULFxuICAgIEZVTkNUSU9OX0RFRklOSVRJT04sXG4gICAgSU1QT1JULFxuICAgIEJBU0VEX05VTUJFUixcbiAgICBobGpzLk5VTUJFUl9NT0RFXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHhsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==