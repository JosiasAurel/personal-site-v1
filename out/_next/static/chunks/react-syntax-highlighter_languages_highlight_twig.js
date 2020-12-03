(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_twig"],{

/***/ "./node_modules/highlight.js/lib/languages/twig.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/twig.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Twig
Requires: xml.js
Author: Luke Holder <lukemh@gmail.com>
Description: Twig is a templating language for PHP
Website: https://twig.symfony.com
Category: template
*/

function twig(hljs) {
  var PARAMS = {
    className: 'params',
    begin: '\\(', end: '\\)'
  };

  var FUNCTION_NAMES = 'attribute block constant cycle date dump include ' +
                  'max min parent random range source template_from_string';

  var FUNCTIONS = {
    beginKeywords: FUNCTION_NAMES,
    keywords: {name: FUNCTION_NAMES},
    relevance: 0,
    contains: [
      PARAMS
    ]
  };

  var FILTER = {
    begin: /\|[A-Za-z_]+:?/,
    keywords:
      'abs batch capitalize column convert_encoding date date_modify default ' +
      'escape filter first format inky_to_html inline_css join json_encode keys last ' +
      'length lower map markdown merge nl2br number_format raw reduce replace ' +
      'reverse round slice sort spaceless split striptags title trim upper url_encode',
    contains: [
      FUNCTIONS
    ]
  };

  var TAGS = 'apply autoescape block deprecated do embed extends filter flush for from ' +
    'if import include macro sandbox set use verbatim with';

  TAGS = TAGS + ' ' + TAGS.split(' ').map(function(t){return 'end' + t}).join(' ');

  return {
    name: 'Twig',
    aliases: ['craftcms'],
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [
      hljs.COMMENT(/\{#/, /#}/),
      {
        className: 'template-tag',
        begin: /\{%/, end: /%}/,
        contains: [
          {
            className: 'name',
            begin: /\w+/,
            keywords: TAGS,
            starts: {
              endsWithParent: true,
              contains: [FILTER, FUNCTIONS],
              relevance: 0
            }
          }
        ]
      },
      {
        className: 'template-variable',
        begin: /\{\{/, end: /}}/,
        contains: ['self', FILTER, FUNCTIONS]
      }
    ]
  };
}

module.exports = twig;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3R3aWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUscUJBQXFCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNEQUFzRCxpQkFBaUI7O0FBRXZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQixFQUFFLFdBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X3R3aWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFR3aWdcblJlcXVpcmVzOiB4bWwuanNcbkF1dGhvcjogTHVrZSBIb2xkZXIgPGx1a2VtaEBnbWFpbC5jb20+XG5EZXNjcmlwdGlvbjogVHdpZyBpcyBhIHRlbXBsYXRpbmcgbGFuZ3VhZ2UgZm9yIFBIUFxuV2Vic2l0ZTogaHR0cHM6Ly90d2lnLnN5bWZvbnkuY29tXG5DYXRlZ29yeTogdGVtcGxhdGVcbiovXG5cbmZ1bmN0aW9uIHR3aWcoaGxqcykge1xuICB2YXIgUEFSQU1TID0ge1xuICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgYmVnaW46ICdcXFxcKCcsIGVuZDogJ1xcXFwpJ1xuICB9O1xuXG4gIHZhciBGVU5DVElPTl9OQU1FUyA9ICdhdHRyaWJ1dGUgYmxvY2sgY29uc3RhbnQgY3ljbGUgZGF0ZSBkdW1wIGluY2x1ZGUgJyArXG4gICAgICAgICAgICAgICAgICAnbWF4IG1pbiBwYXJlbnQgcmFuZG9tIHJhbmdlIHNvdXJjZSB0ZW1wbGF0ZV9mcm9tX3N0cmluZyc7XG5cbiAgdmFyIEZVTkNUSU9OUyA9IHtcbiAgICBiZWdpbktleXdvcmRzOiBGVU5DVElPTl9OQU1FUyxcbiAgICBrZXl3b3Jkczoge25hbWU6IEZVTkNUSU9OX05BTUVTfSxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIFBBUkFNU1xuICAgIF1cbiAgfTtcblxuICB2YXIgRklMVEVSID0ge1xuICAgIGJlZ2luOiAvXFx8W0EtWmEtel9dKzo/LyxcbiAgICBrZXl3b3JkczpcbiAgICAgICdhYnMgYmF0Y2ggY2FwaXRhbGl6ZSBjb2x1bW4gY29udmVydF9lbmNvZGluZyBkYXRlIGRhdGVfbW9kaWZ5IGRlZmF1bHQgJyArXG4gICAgICAnZXNjYXBlIGZpbHRlciBmaXJzdCBmb3JtYXQgaW5reV90b19odG1sIGlubGluZV9jc3Mgam9pbiBqc29uX2VuY29kZSBrZXlzIGxhc3QgJyArXG4gICAgICAnbGVuZ3RoIGxvd2VyIG1hcCBtYXJrZG93biBtZXJnZSBubDJiciBudW1iZXJfZm9ybWF0IHJhdyByZWR1Y2UgcmVwbGFjZSAnICtcbiAgICAgICdyZXZlcnNlIHJvdW5kIHNsaWNlIHNvcnQgc3BhY2VsZXNzIHNwbGl0IHN0cmlwdGFncyB0aXRsZSB0cmltIHVwcGVyIHVybF9lbmNvZGUnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBGVU5DVElPTlNcbiAgICBdXG4gIH07XG5cbiAgdmFyIFRBR1MgPSAnYXBwbHkgYXV0b2VzY2FwZSBibG9jayBkZXByZWNhdGVkIGRvIGVtYmVkIGV4dGVuZHMgZmlsdGVyIGZsdXNoIGZvciBmcm9tICcgK1xuICAgICdpZiBpbXBvcnQgaW5jbHVkZSBtYWNybyBzYW5kYm94IHNldCB1c2UgdmVyYmF0aW0gd2l0aCc7XG5cbiAgVEFHUyA9IFRBR1MgKyAnICcgKyBUQUdTLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uKHQpe3JldHVybiAnZW5kJyArIHR9KS5qb2luKCcgJyk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnVHdpZycsXG4gICAgYWxpYXNlczogWydjcmFmdGNtcyddLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgc3ViTGFuZ3VhZ2U6ICd4bWwnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNPTU1FTlQoL1xceyMvLCAvI30vKSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGVtcGxhdGUtdGFnJyxcbiAgICAgICAgYmVnaW46IC9cXHslLywgZW5kOiAvJX0vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgYmVnaW46IC9cXHcrLyxcbiAgICAgICAgICAgIGtleXdvcmRzOiBUQUdTLFxuICAgICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgICBjb250YWluczogW0ZJTFRFUiwgRlVOQ1RJT05TXSxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0ZW1wbGF0ZS12YXJpYWJsZScsXG4gICAgICAgIGJlZ2luOiAvXFx7XFx7LywgZW5kOiAvfX0vLFxuICAgICAgICBjb250YWluczogWydzZWxmJywgRklMVEVSLCBGVU5DVElPTlNdXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHR3aWc7XG4iXSwic291cmNlUm9vdCI6IiJ9