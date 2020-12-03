(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_nix"],{

/***/ "./node_modules/highlight.js/lib/languages/nix.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/nix.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Nix
Author: Domen Kožar <domen@dev.si>
Description: Nix functional language
Website: http://nixos.org/nix
*/


function nix(hljs) {
  var NIX_KEYWORDS = {
    keyword:
      'rec with let in inherit assert if else then',
    literal:
      'true false or and null',
    built_in:
      'import abort baseNameOf dirOf isNull builtins map removeAttrs throw ' +
      'toString derivation'
  };
  var ANTIQUOTE = {
    className: 'subst',
    begin: /\$\{/,
    end: /}/,
    keywords: NIX_KEYWORDS
  };
  var ATTRS = {
    begin: /[a-zA-Z0-9-_]+(\s*=)/, returnBegin: true,
    relevance: 0,
    contains: [
      {
        className: 'attr',
        begin: /\S+/
      }
    ]
  };
  var STRING = {
    className: 'string',
    contains: [ANTIQUOTE],
    variants: [
      {begin: "''", end: "''"},
      {begin: '"', end: '"'}
    ]
  };
  var EXPRESSIONS = [
    hljs.NUMBER_MODE,
    hljs.HASH_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    STRING,
    ATTRS
  ];
  ANTIQUOTE.contains = EXPRESSIONS;
  return {
    name: 'Nix',
    aliases: ["nixos"],
    keywords: NIX_KEYWORDS,
    contains: EXPRESSIONS
  };
}

module.exports = nix;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL25peC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVCQUF1QjtBQUM5QixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X25peC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogTml4XG5BdXRob3I6IERvbWVuIEtvxb5hciA8ZG9tZW5AZGV2LnNpPlxuRGVzY3JpcHRpb246IE5peCBmdW5jdGlvbmFsIGxhbmd1YWdlXG5XZWJzaXRlOiBodHRwOi8vbml4b3Mub3JnL25peFxuKi9cblxuXG5mdW5jdGlvbiBuaXgoaGxqcykge1xuICB2YXIgTklYX0tFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6XG4gICAgICAncmVjIHdpdGggbGV0IGluIGluaGVyaXQgYXNzZXJ0IGlmIGVsc2UgdGhlbicsXG4gICAgbGl0ZXJhbDpcbiAgICAgICd0cnVlIGZhbHNlIG9yIGFuZCBudWxsJyxcbiAgICBidWlsdF9pbjpcbiAgICAgICdpbXBvcnQgYWJvcnQgYmFzZU5hbWVPZiBkaXJPZiBpc051bGwgYnVpbHRpbnMgbWFwIHJlbW92ZUF0dHJzIHRocm93ICcgK1xuICAgICAgJ3RvU3RyaW5nIGRlcml2YXRpb24nXG4gIH07XG4gIHZhciBBTlRJUVVPVEUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIGJlZ2luOiAvXFwkXFx7LyxcbiAgICBlbmQ6IC99LyxcbiAgICBrZXl3b3JkczogTklYX0tFWVdPUkRTXG4gIH07XG4gIHZhciBBVFRSUyA9IHtcbiAgICBiZWdpbjogL1thLXpBLVowLTktX10rKFxccyo9KS8sIHJldHVybkJlZ2luOiB0cnVlLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhdHRyJyxcbiAgICAgICAgYmVnaW46IC9cXFMrL1xuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgdmFyIFNUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGNvbnRhaW5zOiBbQU5USVFVT1RFXSxcbiAgICB2YXJpYW50czogW1xuICAgICAge2JlZ2luOiBcIicnXCIsIGVuZDogXCInJ1wifSxcbiAgICAgIHtiZWdpbjogJ1wiJywgZW5kOiAnXCInfVxuICAgIF1cbiAgfTtcbiAgdmFyIEVYUFJFU1NJT05TID0gW1xuICAgIGhsanMuTlVNQkVSX01PREUsXG4gICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgIFNUUklORyxcbiAgICBBVFRSU1xuICBdO1xuICBBTlRJUVVPVEUuY29udGFpbnMgPSBFWFBSRVNTSU9OUztcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnTml4JyxcbiAgICBhbGlhc2VzOiBbXCJuaXhvc1wiXSxcbiAgICBrZXl3b3JkczogTklYX0tFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBFWFBSRVNTSU9OU1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5peDtcbiJdLCJzb3VyY2VSb290IjoiIn0=