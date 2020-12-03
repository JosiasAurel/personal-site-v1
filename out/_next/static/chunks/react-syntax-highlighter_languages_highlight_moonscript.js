(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_moonscript"],{

/***/ "./node_modules/highlight.js/lib/languages/moonscript.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/moonscript.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: MoonScript
Author: Billy Quith <chinbillybilbo@gmail.com>
Description: MoonScript is a programming language that transcompiles to Lua.
Origin: coffeescript.js
Website: http://moonscript.org/
Category: scripting
*/

function moonscript(hljs) {
  var KEYWORDS = {
    keyword:
      // Moonscript keywords
      'if then not for in while do return else elseif break continue switch and or ' +
      'unless when class extends super local import export from using',
    literal:
      'true false nil',
    built_in:
      '_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load ' +
      'loadfile loadstring module next pairs pcall print rawequal rawget rawset require ' +
      'select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug ' +
      'io math os package string table'
  };
  var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  var SUBST = {
    className: 'subst',
    begin: /#\{/, end: /}/,
    keywords: KEYWORDS
  };
  var EXPRESSIONS = [
    hljs.inherit(hljs.C_NUMBER_MODE,
      {starts: {end: '(\\s*/)?', relevance: 0}}), // a number tries to eat the following slash to prevent treating it as a regexp
    {
      className: 'string',
      variants: [
        {
          begin: /'/, end: /'/,
          contains: [hljs.BACKSLASH_ESCAPE]
        },
        {
          begin: /"/, end: /"/,
          contains: [hljs.BACKSLASH_ESCAPE, SUBST]
        }
      ]
    },
    {
      className: 'built_in',
      begin: '@__' + hljs.IDENT_RE
    },
    {
      begin: '@' + hljs.IDENT_RE // relevance booster on par with CoffeeScript
    },
    {
      begin: hljs.IDENT_RE + '\\\\' + hljs.IDENT_RE // inst\method
    }
  ];
  SUBST.contains = EXPRESSIONS;

  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: JS_IDENT_RE});
  var PARAMS_RE = '(\\(.*\\))?\\s*\\B[-=]>';
  var PARAMS = {
    className: 'params',
    begin: '\\([^\\(]', returnBegin: true,
    /* We need another contained nameless mode to not have every nested
    pair of parens to be called "params" */
    contains: [{
      begin: /\(/, end: /\)/,
      keywords: KEYWORDS,
      contains: ['self'].concat(EXPRESSIONS)
    }]
  };

  return {
    name: 'MoonScript',
    aliases: ['moon'],
    keywords: KEYWORDS,
    illegal: /\/\*/,
    contains: EXPRESSIONS.concat([
      hljs.COMMENT('--', '$'),
      {
        className: 'function',  // function: -> =>
        begin: '^\\s*' + JS_IDENT_RE + '\\s*=\\s*' + PARAMS_RE, end: '[-=]>',
        returnBegin: true,
        contains: [TITLE, PARAMS]
      },
      {
        begin: /[\(,:=]\s*/, // anonymous function start
        relevance: 0,
        contains: [
          {
            className: 'function',
            begin: PARAMS_RE, end: '[-=]>',
            returnBegin: true,
            contains: [PARAMS]
          }
        ]
      },
      {
        className: 'class',
        beginKeywords: 'class',
        end: '$',
        illegal: /[:="\[\]]/,
        contains: [
          {
            beginKeywords: 'extends',
            endsWithParent: true,
            illegal: /[:="\[\]]/,
            contains: [TITLE]
          },
          TITLE
        ]
      },
      {
        className: 'name',    // table
        begin: JS_IDENT_RE + ':', end: ':',
        returnBegin: true, returnEnd: true,
        relevance: 0
      }
    ])
  };
}

module.exports = moonscript;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL21vb25zY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxTQUFTLCtCQUErQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE2QyxtQkFBbUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X21vb25zY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IE1vb25TY3JpcHRcbkF1dGhvcjogQmlsbHkgUXVpdGggPGNoaW5iaWxseWJpbGJvQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBNb29uU2NyaXB0IGlzIGEgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgdGhhdCB0cmFuc2NvbXBpbGVzIHRvIEx1YS5cbk9yaWdpbjogY29mZmVlc2NyaXB0LmpzXG5XZWJzaXRlOiBodHRwOi8vbW9vbnNjcmlwdC5vcmcvXG5DYXRlZ29yeTogc2NyaXB0aW5nXG4qL1xuXG5mdW5jdGlvbiBtb29uc2NyaXB0KGhsanMpIHtcbiAgdmFyIEtFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6XG4gICAgICAvLyBNb29uc2NyaXB0IGtleXdvcmRzXG4gICAgICAnaWYgdGhlbiBub3QgZm9yIGluIHdoaWxlIGRvIHJldHVybiBlbHNlIGVsc2VpZiBicmVhayBjb250aW51ZSBzd2l0Y2ggYW5kIG9yICcgK1xuICAgICAgJ3VubGVzcyB3aGVuIGNsYXNzIGV4dGVuZHMgc3VwZXIgbG9jYWwgaW1wb3J0IGV4cG9ydCBmcm9tIHVzaW5nJyxcbiAgICBsaXRlcmFsOlxuICAgICAgJ3RydWUgZmFsc2UgbmlsJyxcbiAgICBidWlsdF9pbjpcbiAgICAgICdfRyBfVkVSU0lPTiBhc3NlcnQgY29sbGVjdGdhcmJhZ2UgZG9maWxlIGVycm9yIGdldGZlbnYgZ2V0bWV0YXRhYmxlIGlwYWlycyBsb2FkICcgK1xuICAgICAgJ2xvYWRmaWxlIGxvYWRzdHJpbmcgbW9kdWxlIG5leHQgcGFpcnMgcGNhbGwgcHJpbnQgcmF3ZXF1YWwgcmF3Z2V0IHJhd3NldCByZXF1aXJlICcgK1xuICAgICAgJ3NlbGVjdCBzZXRmZW52IHNldG1ldGF0YWJsZSB0b251bWJlciB0b3N0cmluZyB0eXBlIHVucGFjayB4cGNhbGwgY29yb3V0aW5lIGRlYnVnICcgK1xuICAgICAgJ2lvIG1hdGggb3MgcGFja2FnZSBzdHJpbmcgdGFibGUnXG4gIH07XG4gIHZhciBKU19JREVOVF9SRSA9ICdbQS1aYS16JF9dWzAtOUEtWmEteiRfXSonO1xuICB2YXIgU1VCU1QgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIGJlZ2luOiAvI1xcey8sIGVuZDogL30vLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEU1xuICB9O1xuICB2YXIgRVhQUkVTU0lPTlMgPSBbXG4gICAgaGxqcy5pbmhlcml0KGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIHtzdGFydHM6IHtlbmQ6ICcoXFxcXHMqLyk/JywgcmVsZXZhbmNlOiAwfX0pLCAvLyBhIG51bWJlciB0cmllcyB0byBlYXQgdGhlIGZvbGxvd2luZyBzbGFzaCB0byBwcmV2ZW50IHRyZWF0aW5nIGl0IGFzIGEgcmVnZXhwXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogLycvLCBlbmQ6IC8nLyxcbiAgICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAvXCIvLCBlbmQ6IC9cIi8sXG4gICAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEUsIFNVQlNUXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICBiZWdpbjogJ0BfXycgKyBobGpzLklERU5UX1JFXG4gICAgfSxcbiAgICB7XG4gICAgICBiZWdpbjogJ0AnICsgaGxqcy5JREVOVF9SRSAvLyByZWxldmFuY2UgYm9vc3RlciBvbiBwYXIgd2l0aCBDb2ZmZWVTY3JpcHRcbiAgICB9LFxuICAgIHtcbiAgICAgIGJlZ2luOiBobGpzLklERU5UX1JFICsgJ1xcXFxcXFxcJyArIGhsanMuSURFTlRfUkUgLy8gaW5zdFxcbWV0aG9kXG4gICAgfVxuICBdO1xuICBTVUJTVC5jb250YWlucyA9IEVYUFJFU1NJT05TO1xuXG4gIHZhciBUSVRMRSA9IGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtiZWdpbjogSlNfSURFTlRfUkV9KTtcbiAgdmFyIFBBUkFNU19SRSA9ICcoXFxcXCguKlxcXFwpKT9cXFxccypcXFxcQlstPV0+JztcbiAgdmFyIFBBUkFNUyA9IHtcbiAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgIGJlZ2luOiAnXFxcXChbXlxcXFwoXScsIHJldHVybkJlZ2luOiB0cnVlLFxuICAgIC8qIFdlIG5lZWQgYW5vdGhlciBjb250YWluZWQgbmFtZWxlc3MgbW9kZSB0byBub3QgaGF2ZSBldmVyeSBuZXN0ZWRcbiAgICBwYWlyIG9mIHBhcmVucyB0byBiZSBjYWxsZWQgXCJwYXJhbXNcIiAqL1xuICAgIGNvbnRhaW5zOiBbe1xuICAgICAgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvLFxuICAgICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgICAgY29udGFpbnM6IFsnc2VsZiddLmNvbmNhdChFWFBSRVNTSU9OUylcbiAgICB9XVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ01vb25TY3JpcHQnLFxuICAgIGFsaWFzZXM6IFsnbW9vbiddLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICBpbGxlZ2FsOiAvXFwvXFwqLyxcbiAgICBjb250YWluczogRVhQUkVTU0lPTlMuY29uY2F0KFtcbiAgICAgIGhsanMuQ09NTUVOVCgnLS0nLCAnJCcpLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsICAvLyBmdW5jdGlvbjogLT4gPT5cbiAgICAgICAgYmVnaW46ICdeXFxcXHMqJyArIEpTX0lERU5UX1JFICsgJ1xcXFxzKj1cXFxccyonICsgUEFSQU1TX1JFLCBlbmQ6ICdbLT1dPicsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1RJVExFLCBQQVJBTVNdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1tcXCgsOj1dXFxzKi8sIC8vIGFub255bW91cyBmdW5jdGlvbiBzdGFydFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgYmVnaW46IFBBUkFNU19SRSwgZW5kOiAnWy09XT4nLFxuICAgICAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgICAgICBjb250YWluczogW1BBUkFNU11cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzJyxcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIGlsbGVnYWw6IC9bOj1cIlxcW1xcXV0vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdleHRlbmRzJyxcbiAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgaWxsZWdhbDogL1s6PVwiXFxbXFxdXS8sXG4gICAgICAgICAgICBjb250YWluczogW1RJVExFXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgVElUTEVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbmFtZScsICAgIC8vIHRhYmxlXG4gICAgICAgIGJlZ2luOiBKU19JREVOVF9SRSArICc6JywgZW5kOiAnOicsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLCByZXR1cm5FbmQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF0pXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbW9vbnNjcmlwdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=