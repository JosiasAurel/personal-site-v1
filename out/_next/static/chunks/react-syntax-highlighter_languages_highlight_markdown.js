(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_markdown"],{

/***/ "./node_modules/highlight.js/lib/languages/markdown.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/markdown.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Markdown
Requires: xml.js
Author: John Crepezzi <john.crepezzi@gmail.com>
Website: https://daringfireball.net/projects/markdown/
Category: common, markup
*/

function markdown(hljs) {
  const INLINE_HTML = {
    begin: '<', end: '>',
    subLanguage: 'xml',
    relevance: 0
  };
  const HORIZONTAL_RULE = {
    begin: '^[-\\*]{3,}', end: '$'
  };
  const CODE = {
    className: 'code',
    variants: [
      // TODO: fix to allow these to work with sublanguage also
      { begin: '(`{3,})(.|\\n)*?\\1`*[ ]*', },
      { begin: '(~{3,})(.|\\n)*?\\1~*[ ]*', },
      // needed to allow markdown as a sublanguage to work
      { begin: '```', end: '```+[ ]*$' },
      { begin: '~~~', end: '~~~+[ ]*$' },
      { begin: '`.+?`' },
      {
        begin: '(?=^( {4}|\\t))',
        // use contains to gobble up multiple lines to allow the block to be whatever size
        // but only have a single open/close tag vs one per line
        contains: [
          { begin: '^( {4}|\\t)', end: '(\\n)$' }
        ],
        relevance: 0
      }
    ]
  };
  const LIST = {
    className: 'bullet',
    begin: '^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)',
    end: '\\s+',
    excludeEnd: true
  };
  const LINK_REFERENCE = {
    begin: /^\[[^\n]+\]:/,
    returnBegin: true,
    contains: [
      {
        className: 'symbol',
        begin: /\[/, end: /\]/,
        excludeBegin: true, excludeEnd: true
      },
      {
        className: 'link',
        begin: /:\s*/, end: /$/,
        excludeBegin: true
      }
    ]
  };
  const LINK = {
    begin: '\\[.+?\\][\\(\\[].*?[\\)\\]]',
    returnBegin: true,
    contains: [
      {
        className: 'string',
        begin: '\\[', end: '\\]',
        excludeBegin: true,
        returnEnd: true,
        relevance: 0
      },
      {
        className: 'link',
        begin: '\\]\\(', end: '\\)',
        excludeBegin: true, excludeEnd: true
      },
      {
        className: 'symbol',
        begin: '\\]\\[', end: '\\]',
        excludeBegin: true, excludeEnd: true
      }
    ],
    relevance: 10
  };
  const BOLD = {
    className: 'strong',
    contains: [],
    variants: [
      {begin: /_{2}/, end: /_{2}/ },
      {begin: /\*{2}/, end: /\*{2}/ }
    ]
  };
  const ITALIC = {
    className: 'emphasis',
    contains: [],
    variants: [
      { begin: /\*(?!\*)/, end: /\*/ },
      { begin: /_(?!_)/, end: /_/, relevance: 0},
    ]
  };
  BOLD.contains.push(ITALIC);
  ITALIC.contains.push(BOLD);

  var CONTAINABLE = [
    INLINE_HTML,
    LINK
  ];

  BOLD.contains = BOLD.contains.concat(CONTAINABLE);
  ITALIC.contains = ITALIC.contains.concat(CONTAINABLE);

  CONTAINABLE = CONTAINABLE.concat(BOLD,ITALIC);

  const HEADER = {
    className: 'section',
    variants: [
      {
        begin: '^#{1,6}',
        end: '$',
        contains: CONTAINABLE
       },
      {
        begin: '(?=^.+?\\n[=-]{2,}$)',
        contains: [
          { begin: '^[=-]*$' },
          { begin: '^', end: "\\n", contains: CONTAINABLE },
        ]
       }
    ]
  };

  const BLOCKQUOTE = {
    className: 'quote',
    begin: '^>\\s+',
    contains: CONTAINABLE,
    end: '$',
  };

  return {
    name: 'Markdown',
    aliases: ['md', 'mkdown', 'mkd'],
    contains: [
      HEADER,
      INLINE_HTML,
      LIST,
      BOLD,
      ITALIC,
      BLOCKQUOTE,
      CODE,
      HORIZONTAL_RULE,
      LINK,
      LINK_REFERENCE
    ]
  };
}

module.exports = markdown;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL21hcmtkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEdBQUc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sWUFBWSxHQUFHLHVCQUF1QjtBQUM3QyxPQUFPLFlBQVksR0FBRyx1QkFBdUI7QUFDN0M7QUFDQSxPQUFPLGlDQUFpQztBQUN4QyxPQUFPLGlDQUFpQztBQUN4QyxPQUFPLGlCQUFpQjtBQUN4QjtBQUNBLHVCQUF1QixFQUFFO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYSxFQUFFO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxVQUFVLEVBQUUsV0FBVyxFQUFFLEdBQUc7QUFDbkMsT0FBTyxXQUFXLEVBQUUsWUFBWSxFQUFFO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sK0JBQStCO0FBQ3RDLE9BQU8seUNBQXlDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsSUFBSTtBQUN2QjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsK0JBQStCLEdBQUc7QUFDbEM7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLGdEQUFnRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X21hcmtkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBNYXJrZG93blxuUmVxdWlyZXM6IHhtbC5qc1xuQXV0aG9yOiBKb2huIENyZXBlenppIDxqb2huLmNyZXBlenppQGdtYWlsLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vZGFyaW5nZmlyZWJhbGwubmV0L3Byb2plY3RzL21hcmtkb3duL1xuQ2F0ZWdvcnk6IGNvbW1vbiwgbWFya3VwXG4qL1xuXG5mdW5jdGlvbiBtYXJrZG93bihobGpzKSB7XG4gIGNvbnN0IElOTElORV9IVE1MID0ge1xuICAgIGJlZ2luOiAnPCcsIGVuZDogJz4nLFxuICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgY29uc3QgSE9SSVpPTlRBTF9SVUxFID0ge1xuICAgIGJlZ2luOiAnXlstXFxcXCpdezMsfScsIGVuZDogJyQnXG4gIH07XG4gIGNvbnN0IENPREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnY29kZScsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIC8vIFRPRE86IGZpeCB0byBhbGxvdyB0aGVzZSB0byB3b3JrIHdpdGggc3VibGFuZ3VhZ2UgYWxzb1xuICAgICAgeyBiZWdpbjogJyhgezMsfSkoLnxcXFxcbikqP1xcXFwxYCpbIF0qJywgfSxcbiAgICAgIHsgYmVnaW46ICcofnszLH0pKC58XFxcXG4pKj9cXFxcMX4qWyBdKicsIH0sXG4gICAgICAvLyBuZWVkZWQgdG8gYWxsb3cgbWFya2Rvd24gYXMgYSBzdWJsYW5ndWFnZSB0byB3b3JrXG4gICAgICB7IGJlZ2luOiAnYGBgJywgZW5kOiAnYGBgK1sgXSokJyB9LFxuICAgICAgeyBiZWdpbjogJ35+ficsIGVuZDogJ35+fitbIF0qJCcgfSxcbiAgICAgIHsgYmVnaW46ICdgLis/YCcgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICcoPz1eKCB7NH18XFxcXHQpKScsXG4gICAgICAgIC8vIHVzZSBjb250YWlucyB0byBnb2JibGUgdXAgbXVsdGlwbGUgbGluZXMgdG8gYWxsb3cgdGhlIGJsb2NrIHRvIGJlIHdoYXRldmVyIHNpemVcbiAgICAgICAgLy8gYnV0IG9ubHkgaGF2ZSBhIHNpbmdsZSBvcGVuL2Nsb3NlIHRhZyB2cyBvbmUgcGVyIGxpbmVcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7IGJlZ2luOiAnXiggezR9fFxcXFx0KScsIGVuZDogJyhcXFxcbikkJyB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgY29uc3QgTElTVCA9IHtcbiAgICBjbGFzc05hbWU6ICdidWxsZXQnLFxuICAgIGJlZ2luOiAnXlsgXFx0XSooWyorLV18KFxcXFxkK1xcXFwuKSkoPz1cXFxccyspJyxcbiAgICBlbmQ6ICdcXFxccysnLFxuICAgIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgfTtcbiAgY29uc3QgTElOS19SRUZFUkVOQ0UgPSB7XG4gICAgYmVnaW46IC9eXFxbW15cXG5dK1xcXTovLFxuICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIGJlZ2luOiAvXFxbLywgZW5kOiAvXFxdLyxcbiAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLCBleGNsdWRlRW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdsaW5rJyxcbiAgICAgICAgYmVnaW46IC86XFxzKi8sIGVuZDogLyQvLFxuICAgICAgICBleGNsdWRlQmVnaW46IHRydWVcbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIGNvbnN0IExJTksgPSB7XG4gICAgYmVnaW46ICdcXFxcWy4rP1xcXFxdW1xcXFwoXFxcXFtdLio/W1xcXFwpXFxcXF1dJyxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1xcXFxbJywgZW5kOiAnXFxcXF0nLFxuICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgIHJldHVybkVuZDogdHJ1ZSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdsaW5rJyxcbiAgICAgICAgYmVnaW46ICdcXFxcXVxcXFwoJywgZW5kOiAnXFxcXCknLFxuICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIGJlZ2luOiAnXFxcXF1cXFxcWycsIGVuZDogJ1xcXFxdJyxcbiAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLCBleGNsdWRlRW5kOiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICByZWxldmFuY2U6IDEwXG4gIH07XG4gIGNvbnN0IEJPTEQgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Ryb25nJyxcbiAgICBjb250YWluczogW10sXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtiZWdpbjogL197Mn0vLCBlbmQ6IC9fezJ9LyB9LFxuICAgICAge2JlZ2luOiAvXFwqezJ9LywgZW5kOiAvXFwqezJ9LyB9XG4gICAgXVxuICB9O1xuICBjb25zdCBJVEFMSUMgPSB7XG4gICAgY2xhc3NOYW1lOiAnZW1waGFzaXMnLFxuICAgIGNvbnRhaW5zOiBbXSxcbiAgICB2YXJpYW50czogW1xuICAgICAgeyBiZWdpbjogL1xcKig/IVxcKikvLCBlbmQ6IC9cXCovIH0sXG4gICAgICB7IGJlZ2luOiAvXyg/IV8pLywgZW5kOiAvXy8sIHJlbGV2YW5jZTogMH0sXG4gICAgXVxuICB9O1xuICBCT0xELmNvbnRhaW5zLnB1c2goSVRBTElDKTtcbiAgSVRBTElDLmNvbnRhaW5zLnB1c2goQk9MRCk7XG5cbiAgdmFyIENPTlRBSU5BQkxFID0gW1xuICAgIElOTElORV9IVE1MLFxuICAgIExJTktcbiAgXTtcblxuICBCT0xELmNvbnRhaW5zID0gQk9MRC5jb250YWlucy5jb25jYXQoQ09OVEFJTkFCTEUpO1xuICBJVEFMSUMuY29udGFpbnMgPSBJVEFMSUMuY29udGFpbnMuY29uY2F0KENPTlRBSU5BQkxFKTtcblxuICBDT05UQUlOQUJMRSA9IENPTlRBSU5BQkxFLmNvbmNhdChCT0xELElUQUxJQyk7XG5cbiAgY29uc3QgSEVBREVSID0ge1xuICAgIGNsYXNzTmFtZTogJ3NlY3Rpb24nLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXiN7MSw2fScsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICBjb250YWluczogQ09OVEFJTkFCTEVcbiAgICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJyg/PV4uKz9cXFxcbls9LV17Mix9JCknLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHsgYmVnaW46ICdeWz0tXSokJyB9LFxuICAgICAgICAgIHsgYmVnaW46ICdeJywgZW5kOiBcIlxcXFxuXCIsIGNvbnRhaW5zOiBDT05UQUlOQUJMRSB9LFxuICAgICAgICBdXG4gICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBCTE9DS1FVT1RFID0ge1xuICAgIGNsYXNzTmFtZTogJ3F1b3RlJyxcbiAgICBiZWdpbjogJ14+XFxcXHMrJyxcbiAgICBjb250YWluczogQ09OVEFJTkFCTEUsXG4gICAgZW5kOiAnJCcsXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnTWFya2Rvd24nLFxuICAgIGFsaWFzZXM6IFsnbWQnLCAnbWtkb3duJywgJ21rZCddLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBIRUFERVIsXG4gICAgICBJTkxJTkVfSFRNTCxcbiAgICAgIExJU1QsXG4gICAgICBCT0xELFxuICAgICAgSVRBTElDLFxuICAgICAgQkxPQ0tRVU9URSxcbiAgICAgIENPREUsXG4gICAgICBIT1JJWk9OVEFMX1JVTEUsXG4gICAgICBMSU5LLFxuICAgICAgTElOS19SRUZFUkVOQ0VcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFya2Rvd247XG4iXSwic291cmNlUm9vdCI6IiJ9