(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_groovy"],{

/***/ "./node_modules/highlight.js/lib/languages/groovy.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/groovy.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function lookahead(re) {
  return concat('(?=', re, ')');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/*
 Language: Groovy
 Author: Guillaume Laforge <glaforge@gmail.com>
 Description: Groovy programming language implementation inspired from Vsevolod's Java mode
 Website: https://groovy-lang.org
 */

function variants(variants, obj = {}) {
  obj.variants = variants;
  return obj;
}

function groovy(hljs) {
  const IDENT_RE = '[A-Za-z0-9_$]+';
  const COMMENT = variants([
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.COMMENT(
      '/\\*\\*',
      '\\*/',
      {
        relevance : 0,
        contains : [
          {
            // eat up @'s in emails to prevent them to be recognized as doctags
            begin: /\w+@/, relevance: 0
          }, {
            className : 'doctag',
            begin : '@[A-Za-z]+'
          }
        ]
      }
    )
  ]);
  const REGEXP = {
    className: 'regexp',
    begin: /~?\/[^\/\n]+\//,
    contains: [
      hljs.BACKSLASH_ESCAPE
    ]
  };
  const NUMBER = variants([
    hljs.BINARY_NUMBER_MODE,
    hljs.C_NUMBER_MODE,
  ]);
  const STRING = variants([
    {
      begin: /"""/,
      end: /"""/
    }, {
      begin: /'''/,
      end: /'''/
    }, {
      begin: "\\$/",
      end: "/\\$",
      relevance: 10
    },
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    ],
    { className: "string" }
  );

    return {
        name: 'Groovy',
        keywords: {
            built_in: 'this super',
            literal: 'true false null',
            keyword:
            'byte short char int long boolean float double void ' +
            // groovy specific keywords
            'def as in assert trait ' +
            // common keywords with Java
            'abstract static volatile transient public private protected synchronized final ' +
            'class interface enum if else for while switch case break default continue ' +
            'throw throws try catch finally implements extends new import package return instanceof'
        },
        contains: [
            hljs.SHEBANG(),
            COMMENT,
            STRING,
            REGEXP,
            NUMBER,
            {
                className: 'class',
                beginKeywords: 'class interface trait enum', end: '{',
                illegal: ':',
                contains: [
                    {beginKeywords: 'extends implements'},
                    hljs.UNDERSCORE_TITLE_MODE
                ]
            },
            {
                className: 'meta', begin: '@[A-Za-z]+'
            },
            {
              // highlight map keys and named parameters as attrs
              className: 'attr', begin: IDENT_RE + '[ \t]*:'
            },
            {
              // catch middle element of the ternary operator
              // to avoid highlight it as a label, named parameter, or map key
              begin: /\?/,
              end: /:/,
              contains: [
                COMMENT,
                STRING,
                REGEXP,
                NUMBER,
                'self'
              ]
            },
            {
                // highlight labeled statements
                className: 'symbol',
                begin: '^[ \t]*' + lookahead(IDENT_RE + ':'),
                excludeBegin: true,
                end: IDENT_RE + ':',
                relevance: 0
            }
        ],
        illegal: /#|<\//
    };
}

module.exports = groovy;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2dyb292eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTtBQUNBLHFCQUFxQixvQ0FBb0M7QUFDekQ7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfZ3Jvb3Z5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtSZWdFeHB9XG4gKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNvdXJjZShyZSkge1xuICBpZiAoIXJlKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiByZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHJlO1xuXG4gIHJldHVybiByZS5zb3VyY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbG9va2FoZWFkKHJlKSB7XG4gIHJldHVybiBjb25jYXQoJyg/PScsIHJlLCAnKScpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Li4uKFJlZ0V4cCB8IHN0cmluZykgfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjb25jYXQoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwiXCIpO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG4vKlxuIExhbmd1YWdlOiBHcm9vdnlcbiBBdXRob3I6IEd1aWxsYXVtZSBMYWZvcmdlIDxnbGFmb3JnZUBnbWFpbC5jb20+XG4gRGVzY3JpcHRpb246IEdyb292eSBwcm9ncmFtbWluZyBsYW5ndWFnZSBpbXBsZW1lbnRhdGlvbiBpbnNwaXJlZCBmcm9tIFZzZXZvbG9kJ3MgSmF2YSBtb2RlXG4gV2Vic2l0ZTogaHR0cHM6Ly9ncm9vdnktbGFuZy5vcmdcbiAqL1xuXG5mdW5jdGlvbiB2YXJpYW50cyh2YXJpYW50cywgb2JqID0ge30pIHtcbiAgb2JqLnZhcmlhbnRzID0gdmFyaWFudHM7XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGdyb292eShobGpzKSB7XG4gIGNvbnN0IElERU5UX1JFID0gJ1tBLVphLXowLTlfJF0rJztcbiAgY29uc3QgQ09NTUVOVCA9IHZhcmlhbnRzKFtcbiAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLkNPTU1FTlQoXG4gICAgICAnL1xcXFwqXFxcXConLFxuICAgICAgJ1xcXFwqLycsXG4gICAgICB7XG4gICAgICAgIHJlbGV2YW5jZSA6IDAsXG4gICAgICAgIGNvbnRhaW5zIDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIGVhdCB1cCBAJ3MgaW4gZW1haWxzIHRvIHByZXZlbnQgdGhlbSB0byBiZSByZWNvZ25pemVkIGFzIGRvY3RhZ3NcbiAgICAgICAgICAgIGJlZ2luOiAvXFx3K0AvLCByZWxldmFuY2U6IDBcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBjbGFzc05hbWUgOiAnZG9jdGFnJyxcbiAgICAgICAgICAgIGJlZ2luIDogJ0BbQS1aYS16XSsnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgKVxuICBdKTtcbiAgY29uc3QgUkVHRVhQID0ge1xuICAgIGNsYXNzTmFtZTogJ3JlZ2V4cCcsXG4gICAgYmVnaW46IC9+P1xcL1teXFwvXFxuXStcXC8vLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEVcbiAgICBdXG4gIH07XG4gIGNvbnN0IE5VTUJFUiA9IHZhcmlhbnRzKFtcbiAgICBobGpzLkJJTkFSWV9OVU1CRVJfTU9ERSxcbiAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gIF0pO1xuICBjb25zdCBTVFJJTkcgPSB2YXJpYW50cyhbXG4gICAge1xuICAgICAgYmVnaW46IC9cIlwiXCIvLFxuICAgICAgZW5kOiAvXCJcIlwiL1xuICAgIH0sIHtcbiAgICAgIGJlZ2luOiAvJycnLyxcbiAgICAgIGVuZDogLycnJy9cbiAgICB9LCB7XG4gICAgICBiZWdpbjogXCJcXFxcJC9cIixcbiAgICAgIGVuZDogXCIvXFxcXCRcIixcbiAgICAgIHJlbGV2YW5jZTogMTBcbiAgICB9LFxuICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgIF0sXG4gICAgeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfVxuICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ0dyb292eScsXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgICBidWlsdF9pbjogJ3RoaXMgc3VwZXInLFxuICAgICAgICAgICAgbGl0ZXJhbDogJ3RydWUgZmFsc2UgbnVsbCcsXG4gICAgICAgICAgICBrZXl3b3JkOlxuICAgICAgICAgICAgJ2J5dGUgc2hvcnQgY2hhciBpbnQgbG9uZyBib29sZWFuIGZsb2F0IGRvdWJsZSB2b2lkICcgK1xuICAgICAgICAgICAgLy8gZ3Jvb3Z5IHNwZWNpZmljIGtleXdvcmRzXG4gICAgICAgICAgICAnZGVmIGFzIGluIGFzc2VydCB0cmFpdCAnICtcbiAgICAgICAgICAgIC8vIGNvbW1vbiBrZXl3b3JkcyB3aXRoIEphdmFcbiAgICAgICAgICAgICdhYnN0cmFjdCBzdGF0aWMgdm9sYXRpbGUgdHJhbnNpZW50IHB1YmxpYyBwcml2YXRlIHByb3RlY3RlZCBzeW5jaHJvbml6ZWQgZmluYWwgJyArXG4gICAgICAgICAgICAnY2xhc3MgaW50ZXJmYWNlIGVudW0gaWYgZWxzZSBmb3Igd2hpbGUgc3dpdGNoIGNhc2UgYnJlYWsgZGVmYXVsdCBjb250aW51ZSAnICtcbiAgICAgICAgICAgICd0aHJvdyB0aHJvd3MgdHJ5IGNhdGNoIGZpbmFsbHkgaW1wbGVtZW50cyBleHRlbmRzIG5ldyBpbXBvcnQgcGFja2FnZSByZXR1cm4gaW5zdGFuY2VvZidcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIGhsanMuU0hFQkFORygpLFxuICAgICAgICAgICAgQ09NTUVOVCxcbiAgICAgICAgICAgIFNUUklORyxcbiAgICAgICAgICAgIFJFR0VYUCxcbiAgICAgICAgICAgIE5VTUJFUixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzIGludGVyZmFjZSB0cmFpdCBlbnVtJywgZW5kOiAneycsXG4gICAgICAgICAgICAgICAgaWxsZWdhbDogJzonLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtiZWdpbktleXdvcmRzOiAnZXh0ZW5kcyBpbXBsZW1lbnRzJ30sXG4gICAgICAgICAgICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJywgYmVnaW46ICdAW0EtWmEtel0rJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IG1hcCBrZXlzIGFuZCBuYW1lZCBwYXJhbWV0ZXJzIGFzIGF0dHJzXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLCBiZWdpbjogSURFTlRfUkUgKyAnWyBcXHRdKjonXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvLyBjYXRjaCBtaWRkbGUgZWxlbWVudCBvZiB0aGUgdGVybmFyeSBvcGVyYXRvclxuICAgICAgICAgICAgICAvLyB0byBhdm9pZCBoaWdobGlnaHQgaXQgYXMgYSBsYWJlbCwgbmFtZWQgcGFyYW1ldGVyLCBvciBtYXAga2V5XG4gICAgICAgICAgICAgIGJlZ2luOiAvXFw/LyxcbiAgICAgICAgICAgICAgZW5kOiAvOi8sXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgQ09NTUVOVCxcbiAgICAgICAgICAgICAgICBTVFJJTkcsXG4gICAgICAgICAgICAgICAgUkVHRVhQLFxuICAgICAgICAgICAgICAgIE5VTUJFUixcbiAgICAgICAgICAgICAgICAnc2VsZidcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBoaWdobGlnaHQgbGFiZWxlZCBzdGF0ZW1lbnRzXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogJ15bIFxcdF0qJyArIGxvb2thaGVhZChJREVOVF9SRSArICc6JyksXG4gICAgICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVuZDogSURFTlRfUkUgKyAnOicsXG4gICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGlsbGVnYWw6IC8jfDxcXC8vXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBncm9vdnk7XG4iXSwic291cmNlUm9vdCI6IiJ9