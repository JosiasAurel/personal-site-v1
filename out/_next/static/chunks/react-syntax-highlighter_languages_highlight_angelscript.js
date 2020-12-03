(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_angelscript"],{

/***/ "./node_modules/highlight.js/lib/languages/angelscript.js":
/*!****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/angelscript.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: AngelScript
Author: Melissa Geels <melissa@nimble.tools>
Category: scripting
Website: https://www.angelcode.com/angelscript/
*/

/** @type LanguageFn */
function angelscript(hljs) {
  var builtInTypeMode = {
    className: 'built_in',
    begin: '\\b(void|bool|int|int8|int16|int32|int64|uint|uint8|uint16|uint32|uint64|string|ref|array|double|float|auto|dictionary)'
  };

  var objectHandleMode = {
    className: 'symbol',
    begin: '[a-zA-Z0-9_]+@'
  };

  var genericMode = {
    className: 'keyword',
    begin: '<', end: '>',
    contains: [ builtInTypeMode, objectHandleMode ]
  };

  builtInTypeMode.contains = [ genericMode ];
  objectHandleMode.contains = [ genericMode ];

  return {
    name: 'AngelScript',
    aliases: ['asc'],

    keywords:
      'for in|0 break continue while do|0 return if else case switch namespace is cast ' +
      'or and xor not get|0 in inout|10 out override set|0 private public const default|0 ' +
      'final shared external mixin|10 enum typedef funcdef this super import from interface ' +
      'abstract|0 try catch protected explicit property',

    // avoid close detection with C# and JS
    illegal: '(^using\\s+[A-Za-z0-9_\\.]+;$|\\bfunction\s*[^\\(])',

    contains: [
      { // 'strings'
        className: 'string',
        begin: '\'', end: '\'',
        illegal: '\\n',
        contains: [ hljs.BACKSLASH_ESCAPE ],
        relevance: 0
      },

      // """heredoc strings"""
      {
        className: 'string',
        begin: '"""', end: '"""'
      },

      { // "strings"
        className: 'string',
        begin: '"', end: '"',
        illegal: '\\n',
        contains: [ hljs.BACKSLASH_ESCAPE ],
        relevance: 0
      },

      hljs.C_LINE_COMMENT_MODE, // single-line comments
      hljs.C_BLOCK_COMMENT_MODE, // comment blocks

      { // metadata
        className: 'string',
        begin: '^\\s*\\[', end: '\\]',
      },

      { // interface or namespace declaration
        beginKeywords: 'interface namespace', end: '{',
        illegal: '[;.\\-]',
        contains: [
          { // interface or namespace name
            className: 'symbol',
            begin: '[a-zA-Z0-9_]+'
          }
        ]
      },

      { // class declaration
        beginKeywords: 'class', end: '{',
        illegal: '[;.\\-]',
        contains: [
          { // class name
            className: 'symbol',
            begin: '[a-zA-Z0-9_]+',
            contains: [
              {
                begin: '[:,]\\s*',
                contains: [
                  {
                    className: 'symbol',
                    begin: '[a-zA-Z0-9_]+'
                  }
                ]
              }
            ]
          }
        ]
      },

      builtInTypeMode, // built-in types
      objectHandleMode, // object handles

      { // literals
        className: 'literal',
        begin: '\\b(null|true|false)'
      },

      { // numbers
        className: 'number',
        begin: '(-?)(\\b0[xXbBoOdD][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?f?|\\.\\d+f?)([eE][-+]?\\d+f?)?)'
      }
    ]
  };
}

module.exports = angelscript;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FuZ2Vsc2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVAsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPOztBQUVQLE9BQU87QUFDUCxxREFBcUQ7QUFDckQsb0JBQW9CO0FBQ3BCO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxPQUFPO0FBQ1AsdUNBQXVDO0FBQ3ZDLG9CQUFvQjtBQUNwQjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPOztBQUVQLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9hbmdlbHNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQW5nZWxTY3JpcHRcbkF1dGhvcjogTWVsaXNzYSBHZWVscyA8bWVsaXNzYUBuaW1ibGUudG9vbHM+XG5DYXRlZ29yeTogc2NyaXB0aW5nXG5XZWJzaXRlOiBodHRwczovL3d3dy5hbmdlbGNvZGUuY29tL2FuZ2Vsc2NyaXB0L1xuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGFuZ2Vsc2NyaXB0KGhsanMpIHtcbiAgdmFyIGJ1aWx0SW5UeXBlTW9kZSA9IHtcbiAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgYmVnaW46ICdcXFxcYih2b2lkfGJvb2x8aW50fGludDh8aW50MTZ8aW50MzJ8aW50NjR8dWludHx1aW50OHx1aW50MTZ8dWludDMyfHVpbnQ2NHxzdHJpbmd8cmVmfGFycmF5fGRvdWJsZXxmbG9hdHxhdXRvfGRpY3Rpb25hcnkpJ1xuICB9O1xuXG4gIHZhciBvYmplY3RIYW5kbGVNb2RlID0ge1xuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgYmVnaW46ICdbYS16QS1aMC05X10rQCdcbiAgfTtcblxuICB2YXIgZ2VuZXJpY01vZGUgPSB7XG4gICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgYmVnaW46ICc8JywgZW5kOiAnPicsXG4gICAgY29udGFpbnM6IFsgYnVpbHRJblR5cGVNb2RlLCBvYmplY3RIYW5kbGVNb2RlIF1cbiAgfTtcblxuICBidWlsdEluVHlwZU1vZGUuY29udGFpbnMgPSBbIGdlbmVyaWNNb2RlIF07XG4gIG9iamVjdEhhbmRsZU1vZGUuY29udGFpbnMgPSBbIGdlbmVyaWNNb2RlIF07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQW5nZWxTY3JpcHQnLFxuICAgIGFsaWFzZXM6IFsnYXNjJ10sXG5cbiAgICBrZXl3b3JkczpcbiAgICAgICdmb3IgaW58MCBicmVhayBjb250aW51ZSB3aGlsZSBkb3wwIHJldHVybiBpZiBlbHNlIGNhc2Ugc3dpdGNoIG5hbWVzcGFjZSBpcyBjYXN0ICcgK1xuICAgICAgJ29yIGFuZCB4b3Igbm90IGdldHwwIGluIGlub3V0fDEwIG91dCBvdmVycmlkZSBzZXR8MCBwcml2YXRlIHB1YmxpYyBjb25zdCBkZWZhdWx0fDAgJyArXG4gICAgICAnZmluYWwgc2hhcmVkIGV4dGVybmFsIG1peGlufDEwIGVudW0gdHlwZWRlZiBmdW5jZGVmIHRoaXMgc3VwZXIgaW1wb3J0IGZyb20gaW50ZXJmYWNlICcgK1xuICAgICAgJ2Fic3RyYWN0fDAgdHJ5IGNhdGNoIHByb3RlY3RlZCBleHBsaWNpdCBwcm9wZXJ0eScsXG5cbiAgICAvLyBhdm9pZCBjbG9zZSBkZXRlY3Rpb24gd2l0aCBDIyBhbmQgSlNcbiAgICBpbGxlZ2FsOiAnKF51c2luZ1xcXFxzK1tBLVphLXowLTlfXFxcXC5dKzskfFxcXFxiZnVuY3Rpb25cXHMqW15cXFxcKF0pJyxcblxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7IC8vICdzdHJpbmdzJ1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1xcJycsIGVuZDogJ1xcJycsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgIGNvbnRhaW5zOiBbIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSBdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG5cbiAgICAgIC8vIFwiXCJcImhlcmVkb2Mgc3RyaW5nc1wiXCJcIlxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1wiXCJcIicsIGVuZDogJ1wiXCJcIidcbiAgICAgIH0sXG5cbiAgICAgIHsgLy8gXCJzdHJpbmdzXCJcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46ICdcIicsIGVuZDogJ1wiJyxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgY29udGFpbnM6IFsgaGxqcy5CQUNLU0xBU0hfRVNDQVBFIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcblxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLCAvLyBzaW5nbGUtbGluZSBjb21tZW50c1xuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSwgLy8gY29tbWVudCBibG9ja3NcblxuICAgICAgeyAvLyBtZXRhZGF0YVxuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ15cXFxccypcXFxcWycsIGVuZDogJ1xcXFxdJyxcbiAgICAgIH0sXG5cbiAgICAgIHsgLy8gaW50ZXJmYWNlIG9yIG5hbWVzcGFjZSBkZWNsYXJhdGlvblxuICAgICAgICBiZWdpbktleXdvcmRzOiAnaW50ZXJmYWNlIG5hbWVzcGFjZScsIGVuZDogJ3snLFxuICAgICAgICBpbGxlZ2FsOiAnWzsuXFxcXC1dJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7IC8vIGludGVyZmFjZSBvciBuYW1lc3BhY2UgbmFtZVxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgICAgIGJlZ2luOiAnW2EtekEtWjAtOV9dKydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG5cbiAgICAgIHsgLy8gY2xhc3MgZGVjbGFyYXRpb25cbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzJywgZW5kOiAneycsXG4gICAgICAgIGlsbGVnYWw6ICdbOy5cXFxcLV0nLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHsgLy8gY2xhc3MgbmFtZVxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgICAgIGJlZ2luOiAnW2EtekEtWjAtOV9dKycsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46ICdbOixdXFxcXHMqJyxcbiAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICAgICAgICAgICAgICBiZWdpbjogJ1thLXpBLVowLTlfXSsnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuXG4gICAgICBidWlsdEluVHlwZU1vZGUsIC8vIGJ1aWx0LWluIHR5cGVzXG4gICAgICBvYmplY3RIYW5kbGVNb2RlLCAvLyBvYmplY3QgaGFuZGxlc1xuXG4gICAgICB7IC8vIGxpdGVyYWxzXG4gICAgICAgIGNsYXNzTmFtZTogJ2xpdGVyYWwnLFxuICAgICAgICBiZWdpbjogJ1xcXFxiKG51bGx8dHJ1ZXxmYWxzZSknXG4gICAgICB9LFxuXG4gICAgICB7IC8vIG51bWJlcnNcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46ICcoLT8pKFxcXFxiMFt4WGJCb09kRF1bYS1mQS1GMC05XSt8KFxcXFxiXFxcXGQrKFxcXFwuXFxcXGQqKT9mP3xcXFxcLlxcXFxkK2Y/KShbZUVdWy0rXT9cXFxcZCtmPyk/KSdcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYW5nZWxzY3JpcHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9