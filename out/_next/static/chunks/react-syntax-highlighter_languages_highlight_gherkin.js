(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_gherkin"],{

/***/ "./node_modules/highlight.js/lib/languages/gherkin.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/gherkin.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Language: Gherkin
 Author: Sam Pikesley (@pikesley) <sam.pikesley@theodi.org>
 Description: Gherkin is the format for cucumber specifications. It is a domain specific language which helps you to describe business behavior without the need to go into detail of implementation.
 Website: https://cucumber.io/docs/gherkin/
 */

function gherkin (hljs) {
  return {
    name: 'Gherkin',
    aliases: ['feature'],
    keywords: 'Feature Background Ability Business\ Need Scenario Scenarios Scenario\ Outline Scenario\ Template Examples Given And Then But When',
    contains: [
      {
        className: 'symbol',
        begin: '\\*',
        relevance: 0
      },
      {
        className: 'meta',
        begin: '@[^@\\s]+'
      },
      {
        begin: '\\|', end: '\\|\\w*$',
        contains: [
          {
            className: 'string',
            begin: '[^|]+'
          }
        ]
      },
      {
        className: 'variable',
        begin: '<', end: '>'
      },
      hljs.HASH_COMMENT_MODE,
      {
        className: 'string',
        begin: '"""', end: '"""'
      },
      hljs.QUOTE_STRING_MODE
    ]
  };
}

module.exports = gherkin;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2doZXJraW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2doZXJraW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIExhbmd1YWdlOiBHaGVya2luXG4gQXV0aG9yOiBTYW0gUGlrZXNsZXkgKEBwaWtlc2xleSkgPHNhbS5waWtlc2xleUB0aGVvZGkub3JnPlxuIERlc2NyaXB0aW9uOiBHaGVya2luIGlzIHRoZSBmb3JtYXQgZm9yIGN1Y3VtYmVyIHNwZWNpZmljYXRpb25zLiBJdCBpcyBhIGRvbWFpbiBzcGVjaWZpYyBsYW5ndWFnZSB3aGljaCBoZWxwcyB5b3UgdG8gZGVzY3JpYmUgYnVzaW5lc3MgYmVoYXZpb3Igd2l0aG91dCB0aGUgbmVlZCB0byBnbyBpbnRvIGRldGFpbCBvZiBpbXBsZW1lbnRhdGlvbi5cbiBXZWJzaXRlOiBodHRwczovL2N1Y3VtYmVyLmlvL2RvY3MvZ2hlcmtpbi9cbiAqL1xuXG5mdW5jdGlvbiBnaGVya2luIChobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0doZXJraW4nLFxuICAgIGFsaWFzZXM6IFsnZmVhdHVyZSddLFxuICAgIGtleXdvcmRzOiAnRmVhdHVyZSBCYWNrZ3JvdW5kIEFiaWxpdHkgQnVzaW5lc3NcXCBOZWVkIFNjZW5hcmlvIFNjZW5hcmlvcyBTY2VuYXJpb1xcIE91dGxpbmUgU2NlbmFyaW9cXCBUZW1wbGF0ZSBFeGFtcGxlcyBHaXZlbiBBbmQgVGhlbiBCdXQgV2hlbicsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgYmVnaW46ICdcXFxcKicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnQFteQFxcXFxzXSsnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFx8JywgZW5kOiAnXFxcXHxcXFxcdyokJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYmVnaW46ICdbXnxdKydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgYmVnaW46ICc8JywgZW5kOiAnPidcbiAgICAgIH0sXG4gICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1wiXCJcIicsIGVuZDogJ1wiXCJcIidcbiAgICAgIH0sXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdoZXJraW47XG4iXSwic291cmNlUm9vdCI6IiJ9