(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_ocaml"],{

/***/ "./node_modules/highlight.js/lib/languages/ocaml.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/ocaml.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: OCaml
Author: Mehdi Dogguy <mehdi@dogguy.org>
Contributors: Nicolas Braud-Santoni <nicolas.braud-santoni@ens-cachan.fr>, Mickael Delahaye <mickael.delahaye@gmail.com>
Description: OCaml language definition.
Website: https://ocaml.org
Category: functional
*/

function ocaml(hljs) {
  /* missing support for heredoc-like string (OCaml 4.0.2+) */
  return {
    name: 'OCaml',
    aliases: ['ml'],
    keywords: {
      $pattern: '[a-z_]\\w*!?',
      keyword:
        'and as assert asr begin class constraint do done downto else end ' +
        'exception external for fun function functor if in include ' +
        'inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method ' +
        'mod module mutable new object of open! open or private rec sig struct ' +
        'then to try type val! val virtual when while with ' +
        /* camlp4 */
        'parser value',
      built_in:
        /* built-in types */
        'array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit ' +
        /* (some) types in Pervasives */
        'in_channel out_channel ref',
      literal:
        'true false'
    },
    illegal: /\/\/|>>/,
    contains: [
      {
        className: 'literal',
        begin: '\\[(\\|\\|)?\\]|\\(\\)',
        relevance: 0
      },
      hljs.COMMENT(
        '\\(\\*',
        '\\*\\)',
        {
          contains: ['self']
        }
      ),
      { /* type variable */
        className: 'symbol',
        begin: '\'[A-Za-z_](?!\')[\\w\']*'
        /* the grammar is ambiguous on how 'a'b should be interpreted but not the compiler */
      },
      { /* polymorphic variant */
        className: 'type',
        begin: '`[A-Z][\\w\']*'
      },
      { /* module or constructor */
        className: 'type',
        begin: '\\b[A-Z][\\w\']*',
        relevance: 0
      },
      { /* don't color identifiers, but safely catch all identifiers with '*/
        begin: '[a-z_]\\w*\'[\\w\']*', relevance: 0
      },
      hljs.inherit(hljs.APOS_STRING_MODE, {className: 'string', relevance: 0}),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
      {
        className: 'number',
        begin:
          '\\b(0[xX][a-fA-F0-9_]+[Lln]?|' +
          '0[oO][0-7_]+[Lln]?|' +
          '0[bB][01_]+[Lln]?|' +
          '[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)',
        relevance: 0
      },
      {
        begin: /[-=]>/ // relevance booster
      }
    ]
  }
}

module.exports = ocaml;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL29jYW1sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCwyQ0FBMkMsa0NBQWtDO0FBQzdFLDRDQUE0QyxjQUFjO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfb2NhbWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IE9DYW1sXG5BdXRob3I6IE1laGRpIERvZ2d1eSA8bWVoZGlAZG9nZ3V5Lm9yZz5cbkNvbnRyaWJ1dG9yczogTmljb2xhcyBCcmF1ZC1TYW50b25pIDxuaWNvbGFzLmJyYXVkLXNhbnRvbmlAZW5zLWNhY2hhbi5mcj4sIE1pY2thZWwgRGVsYWhheWUgPG1pY2thZWwuZGVsYWhheWVAZ21haWwuY29tPlxuRGVzY3JpcHRpb246IE9DYW1sIGxhbmd1YWdlIGRlZmluaXRpb24uXG5XZWJzaXRlOiBodHRwczovL29jYW1sLm9yZ1xuQ2F0ZWdvcnk6IGZ1bmN0aW9uYWxcbiovXG5cbmZ1bmN0aW9uIG9jYW1sKGhsanMpIHtcbiAgLyogbWlzc2luZyBzdXBwb3J0IGZvciBoZXJlZG9jLWxpa2Ugc3RyaW5nIChPQ2FtbCA0LjAuMispICovXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ09DYW1sJyxcbiAgICBhbGlhc2VzOiBbJ21sJ10sXG4gICAga2V5d29yZHM6IHtcbiAgICAgICRwYXR0ZXJuOiAnW2Etel9dXFxcXHcqIT8nLFxuICAgICAga2V5d29yZDpcbiAgICAgICAgJ2FuZCBhcyBhc3NlcnQgYXNyIGJlZ2luIGNsYXNzIGNvbnN0cmFpbnQgZG8gZG9uZSBkb3dudG8gZWxzZSBlbmQgJyArXG4gICAgICAgICdleGNlcHRpb24gZXh0ZXJuYWwgZm9yIGZ1biBmdW5jdGlvbiBmdW5jdG9yIGlmIGluIGluY2x1ZGUgJyArXG4gICAgICAgICdpbmhlcml0ISBpbmhlcml0IGluaXRpYWxpemVyIGxhbmQgbGF6eSBsZXQgbG9yIGxzbCBsc3IgbHhvciBtYXRjaCBtZXRob2QhfDEwIG1ldGhvZCAnICtcbiAgICAgICAgJ21vZCBtb2R1bGUgbXV0YWJsZSBuZXcgb2JqZWN0IG9mIG9wZW4hIG9wZW4gb3IgcHJpdmF0ZSByZWMgc2lnIHN0cnVjdCAnICtcbiAgICAgICAgJ3RoZW4gdG8gdHJ5IHR5cGUgdmFsISB2YWwgdmlydHVhbCB3aGVuIHdoaWxlIHdpdGggJyArXG4gICAgICAgIC8qIGNhbWxwNCAqL1xuICAgICAgICAncGFyc2VyIHZhbHVlJyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAvKiBidWlsdC1pbiB0eXBlcyAqL1xuICAgICAgICAnYXJyYXkgYm9vbCBieXRlcyBjaGFyIGV4bnw1IGZsb2F0IGludCBpbnQzMiBpbnQ2NCBsaXN0IGxhenlfdHw1IG5hdGl2ZWludHw1IHN0cmluZyB1bml0ICcgK1xuICAgICAgICAvKiAoc29tZSkgdHlwZXMgaW4gUGVydmFzaXZlcyAqL1xuICAgICAgICAnaW5fY2hhbm5lbCBvdXRfY2hhbm5lbCByZWYnLFxuICAgICAgbGl0ZXJhbDpcbiAgICAgICAgJ3RydWUgZmFsc2UnXG4gICAgfSxcbiAgICBpbGxlZ2FsOiAvXFwvXFwvfD4+LyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICAgICAgYmVnaW46ICdcXFxcWyhcXFxcfFxcXFx8KT9cXFxcXXxcXFxcKFxcXFwpJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAnXFxcXChcXFxcKicsXG4gICAgICAgICdcXFxcKlxcXFwpJyxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnXVxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgeyAvKiB0eXBlIHZhcmlhYmxlICovXG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIGJlZ2luOiAnXFwnW0EtWmEtel9dKD8hXFwnKVtcXFxcd1xcJ10qJ1xuICAgICAgICAvKiB0aGUgZ3JhbW1hciBpcyBhbWJpZ3VvdXMgb24gaG93ICdhJ2Igc2hvdWxkIGJlIGludGVycHJldGVkIGJ1dCBub3QgdGhlIGNvbXBpbGVyICovXG4gICAgICB9LFxuICAgICAgeyAvKiBwb2x5bW9ycGhpYyB2YXJpYW50ICovXG4gICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICBiZWdpbjogJ2BbQS1aXVtcXFxcd1xcJ10qJ1xuICAgICAgfSxcbiAgICAgIHsgLyogbW9kdWxlIG9yIGNvbnN0cnVjdG9yICovXG4gICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICBiZWdpbjogJ1xcXFxiW0EtWl1bXFxcXHdcXCddKicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHsgLyogZG9uJ3QgY29sb3IgaWRlbnRpZmllcnMsIGJ1dCBzYWZlbHkgY2F0Y2ggYWxsIGlkZW50aWZpZXJzIHdpdGggJyovXG4gICAgICAgIGJlZ2luOiAnW2Etel9dXFxcXHcqXFwnW1xcXFx3XFwnXSonLCByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5BUE9TX1NUUklOR19NT0RFLCB7Y2xhc3NOYW1lOiAnc3RyaW5nJywgcmVsZXZhbmNlOiAwfSksXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge2lsbGVnYWw6IG51bGx9KSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46XG4gICAgICAgICAgJ1xcXFxiKDBbeFhdW2EtZkEtRjAtOV9dK1tMbG5dP3wnICtcbiAgICAgICAgICAnMFtvT11bMC03X10rW0xsbl0/fCcgK1xuICAgICAgICAgICcwW2JCXVswMV9dK1tMbG5dP3wnICtcbiAgICAgICAgICAnWzAtOV1bMC05X10qKFtMbG5dfChcXFxcLlswLTlfXSopPyhbZUVdWy0rXT9bMC05X10rKT8pPyknLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvWy09XT4vIC8vIHJlbGV2YW5jZSBib29zdGVyXG4gICAgICB9XG4gICAgXVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2NhbWw7XG4iXSwic291cmNlUm9vdCI6IiJ9