(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_dockerfile"],{

/***/ "./node_modules/highlight.js/lib/languages/dockerfile.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dockerfile.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Dockerfile
Requires: bash.js
Author: Alexis Hénaut <alexis@henaut.net>
Description: language definition for Dockerfile files
Website: https://docs.docker.com/engine/reference/builder/
Category: config
*/

function dockerfile(hljs) {
  return {
    name: 'Dockerfile',
    aliases: ['docker'],
    case_insensitive: true,
    keywords: 'from maintainer expose env arg user onbuild stopsignal',
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.NUMBER_MODE,
      {
        beginKeywords: 'run cmd entrypoint volume add copy workdir label healthcheck shell',
        starts: {
          end: /[^\\]$/,
          subLanguage: 'bash'
        }
      }
    ],
    illegal: '</'
  }
}

module.exports = dockerfile;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2RvY2tlcmZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2RvY2tlcmZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IERvY2tlcmZpbGVcblJlcXVpcmVzOiBiYXNoLmpzXG5BdXRob3I6IEFsZXhpcyBIw6luYXV0IDxhbGV4aXNAaGVuYXV0Lm5ldD5cbkRlc2NyaXB0aW9uOiBsYW5ndWFnZSBkZWZpbml0aW9uIGZvciBEb2NrZXJmaWxlIGZpbGVzXG5XZWJzaXRlOiBodHRwczovL2RvY3MuZG9ja2VyLmNvbS9lbmdpbmUvcmVmZXJlbmNlL2J1aWxkZXIvXG5DYXRlZ29yeTogY29uZmlnXG4qL1xuXG5mdW5jdGlvbiBkb2NrZXJmaWxlKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnRG9ja2VyZmlsZScsXG4gICAgYWxpYXNlczogWydkb2NrZXInXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiAnZnJvbSBtYWludGFpbmVyIGV4cG9zZSBlbnYgYXJnIHVzZXIgb25idWlsZCBzdG9wc2lnbmFsJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLk5VTUJFUl9NT0RFLFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAncnVuIGNtZCBlbnRyeXBvaW50IHZvbHVtZSBhZGQgY29weSB3b3JrZGlyIGxhYmVsIGhlYWx0aGNoZWNrIHNoZWxsJyxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kOiAvW15cXFxcXSQvLFxuICAgICAgICAgIHN1Ykxhbmd1YWdlOiAnYmFzaCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgaWxsZWdhbDogJzwvJ1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9ja2VyZmlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=