(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_ini"],{

/***/ "./node_modules/highlight.js/lib/languages/ini.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/ini.js ***!
  \********************************************************/
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

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] } args
 * @returns {string}
 */
function either(...args) {
  const joined = '(' + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

/*
Language: TOML, also INI
Description: TOML aims to be a minimal configuration file format that's easy to read due to obvious semantics.
Contributors: Guillaume Gomez <guillaume1.gomez@gmail.com>
Category: common, config
Website: https://github.com/toml-lang/toml
*/

function ini(hljs) {
  var NUMBERS = {
    className: 'number',
    relevance: 0,
    variants: [
      { begin: /([\+\-]+)?[\d]+_[\d_]+/ },
      { begin: hljs.NUMBER_RE }
    ]
  };
  var COMMENTS = hljs.COMMENT();
  COMMENTS.variants = [
    {begin: /;/, end: /$/},
    {begin: /#/, end: /$/},
  ];
  var VARIABLES = {
    className: 'variable',
    variants: [
      { begin: /\$[\w\d"][\w\d_]*/ },
      { begin: /\$\{(.*?)}/ }
    ]
  };
  var LITERALS = {
    className: 'literal',
    begin: /\bon|off|true|false|yes|no\b/
  };
  var STRINGS = {
    className: "string",
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [
      { begin: "'''", end: "'''", relevance: 10 },
      { begin: '"""', end: '"""', relevance: 10 },
      { begin: '"', end: '"' },
      { begin: "'", end: "'" }
    ]
  };
  var ARRAY = {
    begin: /\[/, end: /\]/,
    contains: [
      COMMENTS,
      LITERALS,
      VARIABLES,
      STRINGS,
      NUMBERS,
      'self'
    ],
    relevance:0
  };

  var BARE_KEY = /[A-Za-z0-9_-]+/;
  var QUOTED_KEY_DOUBLE_QUOTE = /"(\\"|[^"])*"/;
  var QUOTED_KEY_SINGLE_QUOTE = /'[^']*'/;
  var ANY_KEY = either(
    BARE_KEY, QUOTED_KEY_DOUBLE_QUOTE, QUOTED_KEY_SINGLE_QUOTE
  );
  var DOTTED_KEY = concat(
    ANY_KEY, '(\\s*\\.\\s*', ANY_KEY, ')*',
    lookahead(/\s*=\s*[^#\s]/)
  );

  return {
    name: 'TOML, also INI',
    aliases: ['toml'],
    case_insensitive: true,
    illegal: /\S/,
    contains: [
      COMMENTS,
      {
        className: 'section',
        begin: /\[+/, end: /\]+/
      },
      {
        begin: DOTTED_KEY,
        className: 'attr',
        starts: {
          end: /$/,
          contains: [
            COMMENTS,
            ARRAY,
            LITERALS,
            VARIABLES,
            STRINGS,
            NUMBERS
          ]
        }
      }
    ]
  };
}

module.exports = ini;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2luaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sa0NBQWtDO0FBQ3pDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyxZQUFZO0FBQzFCLEtBQUsscUJBQXFCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw2QkFBNkI7QUFDcEMsT0FBTyxhQUFhLE1BQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDBDQUEwQztBQUNqRCxPQUFPLDBDQUEwQztBQUNqRCxPQUFPLHVCQUF1QjtBQUM5QixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9pbmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb29rYWhlYWQocmUpIHtcbiAgcmV0dXJuIGNvbmNhdCgnKD89JywgcmUsICcpJyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHsuLi4oUmVnRXhwIHwgc3RyaW5nKSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9IGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJcIik7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qKlxuICogQW55IG9mIHRoZSBwYXNzZWQgZXhwcmVzc3Npb25zIG1heSBtYXRjaFxuICpcbiAqIENyZWF0ZXMgYSBodWdlIHRoaXMgfCB0aGlzIHwgdGhhdCB8IHRoYXQgbWF0Y2hcbiAqIEBwYXJhbSB7KFJlZ0V4cCB8IHN0cmluZylbXSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVpdGhlciguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9ICcoJyArIGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJ8XCIpICsgXCIpXCI7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qXG5MYW5ndWFnZTogVE9NTCwgYWxzbyBJTklcbkRlc2NyaXB0aW9uOiBUT01MIGFpbXMgdG8gYmUgYSBtaW5pbWFsIGNvbmZpZ3VyYXRpb24gZmlsZSBmb3JtYXQgdGhhdCdzIGVhc3kgdG8gcmVhZCBkdWUgdG8gb2J2aW91cyBzZW1hbnRpY3MuXG5Db250cmlidXRvcnM6IEd1aWxsYXVtZSBHb21leiA8Z3VpbGxhdW1lMS5nb21lekBnbWFpbC5jb20+XG5DYXRlZ29yeTogY29tbW9uLCBjb25maWdcbldlYnNpdGU6IGh0dHBzOi8vZ2l0aHViLmNvbS90b21sLWxhbmcvdG9tbFxuKi9cblxuZnVuY3Rpb24gaW5pKGhsanMpIHtcbiAgdmFyIE5VTUJFUlMgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHsgYmVnaW46IC8oW1xcK1xcLV0rKT9bXFxkXStfW1xcZF9dKy8gfSxcbiAgICAgIHsgYmVnaW46IGhsanMuTlVNQkVSX1JFIH1cbiAgICBdXG4gIH07XG4gIHZhciBDT01NRU5UUyA9IGhsanMuQ09NTUVOVCgpO1xuICBDT01NRU5UUy52YXJpYW50cyA9IFtcbiAgICB7YmVnaW46IC87LywgZW5kOiAvJC99LFxuICAgIHtiZWdpbjogLyMvLCBlbmQ6IC8kL30sXG4gIF07XG4gIHZhciBWQVJJQUJMRVMgPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7IGJlZ2luOiAvXFwkW1xcd1xcZFwiXVtcXHdcXGRfXSovIH0sXG4gICAgICB7IGJlZ2luOiAvXFwkXFx7KC4qPyl9LyB9XG4gICAgXVxuICB9O1xuICB2YXIgTElURVJBTFMgPSB7XG4gICAgY2xhc3NOYW1lOiAnbGl0ZXJhbCcsXG4gICAgYmVnaW46IC9cXGJvbnxvZmZ8dHJ1ZXxmYWxzZXx5ZXN8bm9cXGIvXG4gIH07XG4gIHZhciBTVFJJTkdTID0ge1xuICAgIGNsYXNzTmFtZTogXCJzdHJpbmdcIixcbiAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV0sXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHsgYmVnaW46IFwiJycnXCIsIGVuZDogXCInJydcIiwgcmVsZXZhbmNlOiAxMCB9LFxuICAgICAgeyBiZWdpbjogJ1wiXCJcIicsIGVuZDogJ1wiXCJcIicsIHJlbGV2YW5jZTogMTAgfSxcbiAgICAgIHsgYmVnaW46ICdcIicsIGVuZDogJ1wiJyB9LFxuICAgICAgeyBiZWdpbjogXCInXCIsIGVuZDogXCInXCIgfVxuICAgIF1cbiAgfTtcbiAgdmFyIEFSUkFZID0ge1xuICAgIGJlZ2luOiAvXFxbLywgZW5kOiAvXFxdLyxcbiAgICBjb250YWluczogW1xuICAgICAgQ09NTUVOVFMsXG4gICAgICBMSVRFUkFMUyxcbiAgICAgIFZBUklBQkxFUyxcbiAgICAgIFNUUklOR1MsXG4gICAgICBOVU1CRVJTLFxuICAgICAgJ3NlbGYnXG4gICAgXSxcbiAgICByZWxldmFuY2U6MFxuICB9O1xuXG4gIHZhciBCQVJFX0tFWSA9IC9bQS1aYS16MC05Xy1dKy87XG4gIHZhciBRVU9URURfS0VZX0RPVUJMRV9RVU9URSA9IC9cIihcXFxcXCJ8W15cIl0pKlwiLztcbiAgdmFyIFFVT1RFRF9LRVlfU0lOR0xFX1FVT1RFID0gLydbXiddKicvO1xuICB2YXIgQU5ZX0tFWSA9IGVpdGhlcihcbiAgICBCQVJFX0tFWSwgUVVPVEVEX0tFWV9ET1VCTEVfUVVPVEUsIFFVT1RFRF9LRVlfU0lOR0xFX1FVT1RFXG4gICk7XG4gIHZhciBET1RURURfS0VZID0gY29uY2F0KFxuICAgIEFOWV9LRVksICcoXFxcXHMqXFxcXC5cXFxccyonLCBBTllfS0VZLCAnKSonLFxuICAgIGxvb2thaGVhZCgvXFxzKj1cXHMqW14jXFxzXS8pXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnVE9NTCwgYWxzbyBJTkknLFxuICAgIGFsaWFzZXM6IFsndG9tbCddLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgaWxsZWdhbDogL1xcUy8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIENPTU1FTlRTLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzZWN0aW9uJyxcbiAgICAgICAgYmVnaW46IC9cXFsrLywgZW5kOiAvXFxdKy9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBET1RURURfS0VZLFxuICAgICAgICBjbGFzc05hbWU6ICdhdHRyJyxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIENPTU1FTlRTLFxuICAgICAgICAgICAgQVJSQVksXG4gICAgICAgICAgICBMSVRFUkFMUyxcbiAgICAgICAgICAgIFZBUklBQkxFUyxcbiAgICAgICAgICAgIFNUUklOR1MsXG4gICAgICAgICAgICBOVU1CRVJTXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaTtcbiJdLCJzb3VyY2VSb290IjoiIn0=