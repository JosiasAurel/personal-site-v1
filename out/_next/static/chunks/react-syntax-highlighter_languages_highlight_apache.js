(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_apache"],{

/***/ "./node_modules/highlight.js/lib/languages/apache.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/apache.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Apache config
Author: Ruslan Keba <rukeba@gmail.com>
Contributors: Ivan Sagalaev <maniac@softwaremaniacs.org>
Website: https://httpd.apache.org
Description: language definition for Apache configuration files (httpd.conf & .htaccess)
Category: common, config
*/

/** @type LanguageFn */
function apache(hljs) {
  var NUMBER_REF = {className: 'number', begin: '[\\$%]\\d+'};
  var NUMBER = {className: 'number', begin: '\\d+'};
  var IP_ADDRESS = {
    className: "number",
    begin: '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?'
  };
  var PORT_NUMBER = {
    className: "number",
    begin: ":\\d{1,5}"
  };
  return {
    name: 'Apache config',
    aliases: ['apacheconf'],
    case_insensitive: true,
    contains: [
      hljs.HASH_COMMENT_MODE,
      {className: 'section', begin: '</?', end: '>',
      contains: [
        IP_ADDRESS,
        PORT_NUMBER,
        // low relevance prevents us from claming XML/HTML where this rule would
        // match strings inside of XML tags
        hljs.inherit(hljs.QUOTE_STRING_MODE, { relevance:0 })
      ]
    },
      {
        className: 'attribute',
        begin: /\w+/,
        relevance: 0,
        // keywords aren’t needed for highlighting per se, they only boost relevance
        // for a very generally defined mode (starts with a word, ends with line-end
        keywords: {
          nomarkup:
            'order deny allow setenv rewriterule rewriteengine rewritecond documentroot ' +
            'sethandler errordocument loadmodule options header listen serverroot ' +
            'servername'
        },
        starts: {
          end: /$/,
          relevance: 0,
          keywords: {
            literal: 'on off all deny allow'
          },
          contains: [
            {
              className: 'meta',
              begin: '\\s\\[', end: '\\]$'
            },
            {
              className: 'variable',
              begin: '[\\$%]\\{', end: '\\}',
              contains: ['self', NUMBER_REF]
            },
            IP_ADDRESS,
            NUMBER,
            hljs.QUOTE_STRING_MODE
          ]
        }
      }
    ],
    illegal: /\S/
  };
}

module.exports = apache;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FwYWNoZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBSSxPQUFPLElBQUksT0FBTyxJQUFJLE9BQU8sSUFBSSxNQUFNLElBQUk7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLElBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsK0JBQStCLFlBQVk7QUFDM0M7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9hcGFjaGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEFwYWNoZSBjb25maWdcbkF1dGhvcjogUnVzbGFuIEtlYmEgPHJ1a2ViYUBnbWFpbC5jb20+XG5Db250cmlidXRvcnM6IEl2YW4gU2FnYWxhZXYgPG1hbmlhY0Bzb2Z0d2FyZW1hbmlhY3Mub3JnPlxuV2Vic2l0ZTogaHR0cHM6Ly9odHRwZC5hcGFjaGUub3JnXG5EZXNjcmlwdGlvbjogbGFuZ3VhZ2UgZGVmaW5pdGlvbiBmb3IgQXBhY2hlIGNvbmZpZ3VyYXRpb24gZmlsZXMgKGh0dHBkLmNvbmYgJiAuaHRhY2Nlc3MpXG5DYXRlZ29yeTogY29tbW9uLCBjb25maWdcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBhcGFjaGUoaGxqcykge1xuICB2YXIgTlVNQkVSX1JFRiA9IHtjbGFzc05hbWU6ICdudW1iZXInLCBiZWdpbjogJ1tcXFxcJCVdXFxcXGQrJ307XG4gIHZhciBOVU1CRVIgPSB7Y2xhc3NOYW1lOiAnbnVtYmVyJywgYmVnaW46ICdcXFxcZCsnfTtcbiAgdmFyIElQX0FERFJFU1MgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm51bWJlclwiLFxuICAgIGJlZ2luOiAnXFxcXGR7MSwzfVxcXFwuXFxcXGR7MSwzfVxcXFwuXFxcXGR7MSwzfVxcXFwuXFxcXGR7MSwzfSg6XFxcXGR7MSw1fSk/J1xuICB9O1xuICB2YXIgUE9SVF9OVU1CRVIgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm51bWJlclwiLFxuICAgIGJlZ2luOiBcIjpcXFxcZHsxLDV9XCJcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQXBhY2hlIGNvbmZpZycsXG4gICAgYWxpYXNlczogWydhcGFjaGVjb25mJ10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtjbGFzc05hbWU6ICdzZWN0aW9uJywgYmVnaW46ICc8Lz8nLCBlbmQ6ICc+JyxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIElQX0FERFJFU1MsXG4gICAgICAgIFBPUlRfTlVNQkVSLFxuICAgICAgICAvLyBsb3cgcmVsZXZhbmNlIHByZXZlbnRzIHVzIGZyb20gY2xhbWluZyBYTUwvSFRNTCB3aGVyZSB0aGlzIHJ1bGUgd291bGRcbiAgICAgICAgLy8gbWF0Y2ggc3RyaW5ncyBpbnNpZGUgb2YgWE1MIHRhZ3NcbiAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHsgcmVsZXZhbmNlOjAgfSlcbiAgICAgIF1cbiAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLFxuICAgICAgICBiZWdpbjogL1xcdysvLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIC8vIGtleXdvcmRzIGFyZW7igJl0IG5lZWRlZCBmb3IgaGlnaGxpZ2h0aW5nIHBlciBzZSwgdGhleSBvbmx5IGJvb3N0IHJlbGV2YW5jZVxuICAgICAgICAvLyBmb3IgYSB2ZXJ5IGdlbmVyYWxseSBkZWZpbmVkIG1vZGUgKHN0YXJ0cyB3aXRoIGEgd29yZCwgZW5kcyB3aXRoIGxpbmUtZW5kXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgbm9tYXJrdXA6XG4gICAgICAgICAgICAnb3JkZXIgZGVueSBhbGxvdyBzZXRlbnYgcmV3cml0ZXJ1bGUgcmV3cml0ZWVuZ2luZSByZXdyaXRlY29uZCBkb2N1bWVudHJvb3QgJyArXG4gICAgICAgICAgICAnc2V0aGFuZGxlciBlcnJvcmRvY3VtZW50IGxvYWRtb2R1bGUgb3B0aW9ucyBoZWFkZXIgbGlzdGVuIHNlcnZlcnJvb3QgJyArXG4gICAgICAgICAgICAnc2VydmVybmFtZSdcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgICBsaXRlcmFsOiAnb24gb2ZmIGFsbCBkZW55IGFsbG93J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgICAgIGJlZ2luOiAnXFxcXHNcXFxcWycsIGVuZDogJ1xcXFxdJCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgICAgICAgYmVnaW46ICdbXFxcXCQlXVxcXFx7JywgZW5kOiAnXFxcXH0nLFxuICAgICAgICAgICAgICBjb250YWluczogWydzZWxmJywgTlVNQkVSX1JFRl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBJUF9BRERSRVNTLFxuICAgICAgICAgICAgTlVNQkVSLFxuICAgICAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgaWxsZWdhbDogL1xcUy9cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcGFjaGU7XG4iXSwic291cmNlUm9vdCI6IiJ9