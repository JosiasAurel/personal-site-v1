(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_phpTemplate"],{

/***/ "./node_modules/highlight.js/lib/languages/php-template.js":
/*!*****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/php-template.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: PHP Template
Requires: xml.js, php.js
Author: Josh Goebel <hello@joshgoebel.com>
Website: https://www.php.net
Category: common
*/

function phpTemplate(hljs) {
  return {
    name: "PHP template",
    subLanguage: 'xml',
    contains: [
      {
        begin: /<\?(php|=)?/,
        end: /\?>/,
        subLanguage: 'php',
        contains: [
          // We don't want the php closing tag ?> to close the PHP block when
          // inside any of the following blocks:
          {begin: '/\\*', end: '\\*/', skip: true},
          {begin: 'b"', end: '"', skip: true},
          {begin: 'b\'', end: '\'', skip: true},
          hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null, className: null, contains: null, skip: true}),
          hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null, className: null, contains: null, skip: true})
        ]
      }
    ]
  };
}

module.exports = phpTemplate;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3BocC10ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHVDQUF1QztBQUNsRCxXQUFXLGtDQUFrQztBQUM3QyxXQUFXLG9DQUFvQztBQUMvQywrQ0FBK0MsMkRBQTJEO0FBQzFHLGdEQUFnRCwyREFBMkQ7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X3BocFRlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBQSFAgVGVtcGxhdGVcblJlcXVpcmVzOiB4bWwuanMsIHBocC5qc1xuQXV0aG9yOiBKb3NoIEdvZWJlbCA8aGVsbG9Aam9zaGdvZWJlbC5jb20+XG5XZWJzaXRlOiBodHRwczovL3d3dy5waHAubmV0XG5DYXRlZ29yeTogY29tbW9uXG4qL1xuXG5mdW5jdGlvbiBwaHBUZW1wbGF0ZShobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJQSFAgdGVtcGxhdGVcIixcbiAgICBzdWJMYW5ndWFnZTogJ3htbCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC88XFw/KHBocHw9KT8vLFxuICAgICAgICBlbmQ6IC9cXD8+LyxcbiAgICAgICAgc3ViTGFuZ3VhZ2U6ICdwaHAnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIC8vIFdlIGRvbid0IHdhbnQgdGhlIHBocCBjbG9zaW5nIHRhZyA/PiB0byBjbG9zZSB0aGUgUEhQIGJsb2NrIHdoZW5cbiAgICAgICAgICAvLyBpbnNpZGUgYW55IG9mIHRoZSBmb2xsb3dpbmcgYmxvY2tzOlxuICAgICAgICAgIHtiZWdpbjogJy9cXFxcKicsIGVuZDogJ1xcXFwqLycsIHNraXA6IHRydWV9LFxuICAgICAgICAgIHtiZWdpbjogJ2JcIicsIGVuZDogJ1wiJywgc2tpcDogdHJ1ZX0sXG4gICAgICAgICAge2JlZ2luOiAnYlxcJycsIGVuZDogJ1xcJycsIHNraXA6IHRydWV9LFxuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLkFQT1NfU1RSSU5HX01PREUsIHtpbGxlZ2FsOiBudWxsLCBjbGFzc05hbWU6IG51bGwsIGNvbnRhaW5zOiBudWxsLCBza2lwOiB0cnVlfSksXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtpbGxlZ2FsOiBudWxsLCBjbGFzc05hbWU6IG51bGwsIGNvbnRhaW5zOiBudWxsLCBza2lwOiB0cnVlfSlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwaHBUZW1wbGF0ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=