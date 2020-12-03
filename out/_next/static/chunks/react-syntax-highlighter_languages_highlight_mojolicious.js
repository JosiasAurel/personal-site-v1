(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_mojolicious"],{

/***/ "./node_modules/highlight.js/lib/languages/mojolicious.js":
/*!****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/mojolicious.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Mojolicious
Requires: xml.js, perl.js
Author: Dotan Dimet <dotan@corky.net>
Description: Mojolicious .ep (Embedded Perl) templates
Website: https://mojolicious.org
Category: template
*/
function mojolicious(hljs) {
  return {
    name: 'Mojolicious',
    subLanguage: 'xml',
    contains: [
      {
        className: 'meta',
        begin: '^__(END|DATA)__$'
      },
    // mojolicious line
      {
        begin: "^\\s*%{1,2}={0,2}", end: '$',
        subLanguage: 'perl'
      },
    // mojolicious block
      {
        begin: "<%{1,2}={0,2}",
        end: "={0,1}%>",
        subLanguage: 'perl',
        excludeBegin: true,
        excludeEnd: true
      }
    ]
  };
}

module.exports = mojolicious;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL21vam9saWNpb3VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx1QkFBdUIsSUFBSSxFQUFFLElBQUk7QUFDakM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLG1CQUFtQixJQUFJLEVBQUUsSUFBSTtBQUM3QixnQkFBZ0IsSUFBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X21vam9saWNpb3VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBNb2pvbGljaW91c1xuUmVxdWlyZXM6IHhtbC5qcywgcGVybC5qc1xuQXV0aG9yOiBEb3RhbiBEaW1ldCA8ZG90YW5AY29ya3kubmV0PlxuRGVzY3JpcHRpb246IE1vam9saWNpb3VzIC5lcCAoRW1iZWRkZWQgUGVybCkgdGVtcGxhdGVzXG5XZWJzaXRlOiBodHRwczovL21vam9saWNpb3VzLm9yZ1xuQ2F0ZWdvcnk6IHRlbXBsYXRlXG4qL1xuZnVuY3Rpb24gbW9qb2xpY2lvdXMoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdNb2pvbGljaW91cycsXG4gICAgc3ViTGFuZ3VhZ2U6ICd4bWwnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ15fXyhFTkR8REFUQSlfXyQnXG4gICAgICB9LFxuICAgIC8vIG1vam9saWNpb3VzIGxpbmVcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IFwiXlxcXFxzKiV7MSwyfT17MCwyfVwiLCBlbmQ6ICckJyxcbiAgICAgICAgc3ViTGFuZ3VhZ2U6ICdwZXJsJ1xuICAgICAgfSxcbiAgICAvLyBtb2pvbGljaW91cyBibG9ja1xuICAgICAge1xuICAgICAgICBiZWdpbjogXCI8JXsxLDJ9PXswLDJ9XCIsXG4gICAgICAgIGVuZDogXCI9ezAsMX0lPlwiLFxuICAgICAgICBzdWJMYW5ndWFnZTogJ3BlcmwnLFxuICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbW9qb2xpY2lvdXM7XG4iXSwic291cmNlUm9vdCI6IiJ9