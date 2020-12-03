(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_makefile"],{

/***/ "./node_modules/highlight.js/lib/languages/makefile.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/makefile.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Makefile
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Contributors: Joël Porquet <joel@porquet.org>
Website: https://www.gnu.org/software/make/manual/html_node/Introduction.html
Category: common
*/

function makefile(hljs) {
  /* Variables: simple (eg $(var)) and special (eg $@) */
  var VARIABLE = {
    className: 'variable',
    variants: [
      {
        begin: '\\$\\(' + hljs.UNDERSCORE_IDENT_RE + '\\)',
        contains: [hljs.BACKSLASH_ESCAPE],
      },
      {
        begin: /\$[@%<?\^\+\*]/
      },
    ]
  };
  /* Quoted string with variables inside */
  var QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VARIABLE,
    ]
  };
  /* Function: $(func arg,...) */
  var FUNC = {
    className: 'variable',
    begin: /\$\([\w-]+\s/, end: /\)/,
    keywords: {
      built_in:
        'subst patsubst strip findstring filter filter-out sort ' +
        'word wordlist firstword lastword dir notdir suffix basename ' +
        'addsuffix addprefix join wildcard realpath abspath error warning ' +
        'shell origin flavor foreach if or and call eval file value',
    },
    contains: [
      VARIABLE,
    ]
  };
  /* Variable assignment */
  var ASSIGNMENT = {
    begin: '^' + hljs.UNDERSCORE_IDENT_RE + '\\s*(?=[:+?]?=)'
  };
  /* Meta targets (.PHONY) */
  var META = {
    className: 'meta',
    begin: /^\.PHONY:/, end: /$/,
    keywords: {
      $pattern: /[\.\w]+/,
      'meta-keyword': '.PHONY'
    }
  };
  /* Targets */
  var TARGET = {
    className: 'section',
    begin: /^[^\s]+:/, end: /$/,
    contains: [VARIABLE,]
  };
  return {
    name: 'Makefile',
    aliases: ['mk', 'mak'],
    keywords: {
      $pattern: /[\w-]+/,
      keyword: 'define endef undefine ifdef ifndef ifeq ifneq else endif ' +
      'include -include sinclude override export unexport private vpath'
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      VARIABLE,
      QUOTE_STRING,
      FUNC,
      ASSIGNMENT,
      META,
      TARGET,
    ]
  };
}

module.exports = makefile;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL21ha2VmaWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9tYWtlZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogTWFrZWZpbGVcbkF1dGhvcjogSXZhbiBTYWdhbGFldiA8bWFuaWFjQHNvZnR3YXJlbWFuaWFjcy5vcmc+XG5Db250cmlidXRvcnM6IEpvw6tsIFBvcnF1ZXQgPGpvZWxAcG9ycXVldC5vcmc+XG5XZWJzaXRlOiBodHRwczovL3d3dy5nbnUub3JnL3NvZnR3YXJlL21ha2UvbWFudWFsL2h0bWxfbm9kZS9JbnRyb2R1Y3Rpb24uaHRtbFxuQ2F0ZWdvcnk6IGNvbW1vblxuKi9cblxuZnVuY3Rpb24gbWFrZWZpbGUoaGxqcykge1xuICAvKiBWYXJpYWJsZXM6IHNpbXBsZSAoZWcgJCh2YXIpKSBhbmQgc3BlY2lhbCAoZWcgJEApICovXG4gIHZhciBWQVJJQUJMRSA9IHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcJFxcXFwoJyArIGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSArICdcXFxcKScsXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwkW0AlPD9cXF5cXCtcXCpdL1xuICAgICAgfSxcbiAgICBdXG4gIH07XG4gIC8qIFF1b3RlZCBzdHJpbmcgd2l0aCB2YXJpYWJsZXMgaW5zaWRlICovXG4gIHZhciBRVU9URV9TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogL1wiLywgZW5kOiAvXCIvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICBWQVJJQUJMRSxcbiAgICBdXG4gIH07XG4gIC8qIEZ1bmN0aW9uOiAkKGZ1bmMgYXJnLC4uLikgKi9cbiAgdmFyIEZVTkMgPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIGJlZ2luOiAvXFwkXFwoW1xcdy1dK1xccy8sIGVuZDogL1xcKS8sXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAnc3Vic3QgcGF0c3Vic3Qgc3RyaXAgZmluZHN0cmluZyBmaWx0ZXIgZmlsdGVyLW91dCBzb3J0ICcgK1xuICAgICAgICAnd29yZCB3b3JkbGlzdCBmaXJzdHdvcmQgbGFzdHdvcmQgZGlyIG5vdGRpciBzdWZmaXggYmFzZW5hbWUgJyArXG4gICAgICAgICdhZGRzdWZmaXggYWRkcHJlZml4IGpvaW4gd2lsZGNhcmQgcmVhbHBhdGggYWJzcGF0aCBlcnJvciB3YXJuaW5nICcgK1xuICAgICAgICAnc2hlbGwgb3JpZ2luIGZsYXZvciBmb3JlYWNoIGlmIG9yIGFuZCBjYWxsIGV2YWwgZmlsZSB2YWx1ZScsXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgVkFSSUFCTEUsXG4gICAgXVxuICB9O1xuICAvKiBWYXJpYWJsZSBhc3NpZ25tZW50ICovXG4gIHZhciBBU1NJR05NRU5UID0ge1xuICAgIGJlZ2luOiAnXicgKyBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUgKyAnXFxcXHMqKD89WzorP10/PSknXG4gIH07XG4gIC8qIE1ldGEgdGFyZ2V0cyAoLlBIT05ZKSAqL1xuICB2YXIgTUVUQSA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICBiZWdpbjogL15cXC5QSE9OWTovLCBlbmQ6IC8kLyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgJHBhdHRlcm46IC9bXFwuXFx3XSsvLFxuICAgICAgJ21ldGEta2V5d29yZCc6ICcuUEhPTlknXG4gICAgfVxuICB9O1xuICAvKiBUYXJnZXRzICovXG4gIHZhciBUQVJHRVQgPSB7XG4gICAgY2xhc3NOYW1lOiAnc2VjdGlvbicsXG4gICAgYmVnaW46IC9eW15cXHNdKzovLCBlbmQ6IC8kLyxcbiAgICBjb250YWluczogW1ZBUklBQkxFLF1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnTWFrZWZpbGUnLFxuICAgIGFsaWFzZXM6IFsnbWsnLCAnbWFrJ10sXG4gICAga2V5d29yZHM6IHtcbiAgICAgICRwYXR0ZXJuOiAvW1xcdy1dKy8sXG4gICAgICBrZXl3b3JkOiAnZGVmaW5lIGVuZGVmIHVuZGVmaW5lIGlmZGVmIGlmbmRlZiBpZmVxIGlmbmVxIGVsc2UgZW5kaWYgJyArXG4gICAgICAnaW5jbHVkZSAtaW5jbHVkZSBzaW5jbHVkZSBvdmVycmlkZSBleHBvcnQgdW5leHBvcnQgcHJpdmF0ZSB2cGF0aCdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAgVkFSSUFCTEUsXG4gICAgICBRVU9URV9TVFJJTkcsXG4gICAgICBGVU5DLFxuICAgICAgQVNTSUdOTUVOVCxcbiAgICAgIE1FVEEsXG4gICAgICBUQVJHRVQsXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1ha2VmaWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==