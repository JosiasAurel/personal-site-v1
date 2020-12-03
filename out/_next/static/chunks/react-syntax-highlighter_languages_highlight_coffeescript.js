(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_coffeescript"],{

/***/ "./node_modules/highlight.js/lib/languages/coffeescript.js":
/*!*****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/coffeescript.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const KEYWORDS = [
  "as", // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
];
const LITERALS = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
];

const TYPES = [
  "Intl",
  "DataView",
  "Number",
  "Math",
  "Date",
  "String",
  "RegExp",
  "Object",
  "Function",
  "Boolean",
  "Error",
  "Symbol",
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  "Proxy",
  "Reflect",
  "JSON",
  "Promise",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Float32Array",
  "Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "ArrayBuffer"
];

const ERROR_TYPES = [
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
];

const BUILT_IN_GLOBALS = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",

  "require",
  "exports",

  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
];

const BUILT_IN_VARIABLES = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "module",
  "global" // Node.js
];

const BUILT_INS = [].concat(
  BUILT_IN_GLOBALS,
  BUILT_IN_VARIABLES,
  TYPES,
  ERROR_TYPES
);

/*
Language: CoffeeScript
Author: Dmytrii Nagirniak <dnagir@gmail.com>
Contributors: Oleg Efimov <efimovov@gmail.com>, Cédric Néhémie <cedric.nehemie@gmail.com>
Description: CoffeeScript is a programming language that transcompiles to JavaScript. For info about language see http://coffeescript.org/
Category: common, scripting
Website: https://coffeescript.org
*/

/** @type LanguageFn */
function coffeescript(hljs) {
  var COFFEE_BUILT_INS = [
    'npm',
    'print'
  ];
  var COFFEE_LITERALS = [
    'yes',
    'no',
    'on',
    'off'
  ];
  var COFFEE_KEYWORDS = [
    'then',
    'unless',
    'until',
    'loop',
    'by',
    'when',
    'and',
    'or',
    'is',
    'isnt',
    'not'
  ];
  var NOT_VALID_KEYWORDS = [
    "var",
    "const",
    "let",
    "function",
    "static"
  ];
  var excluding = (list) =>
    (kw) => !list.includes(kw);
  var KEYWORDS$1 = {
    keyword: KEYWORDS.concat(COFFEE_KEYWORDS).filter(excluding(NOT_VALID_KEYWORDS)).join(" "),
    literal: LITERALS.concat(COFFEE_LITERALS).join(" "),
    built_in: BUILT_INS.concat(COFFEE_BUILT_INS).join(" ")
  };
  var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  var SUBST = {
    className: 'subst',
    begin: /#\{/, end: /}/,
    keywords: KEYWORDS$1
  };
  var EXPRESSIONS = [
    hljs.BINARY_NUMBER_MODE,
    hljs.inherit(hljs.C_NUMBER_MODE, {starts: {end: '(\\s*/)?', relevance: 0}}), // a number tries to eat the following slash to prevent treating it as a regexp
    {
      className: 'string',
      variants: [
        {
          begin: /'''/, end: /'''/,
          contains: [hljs.BACKSLASH_ESCAPE]
        },
        {
          begin: /'/, end: /'/,
          contains: [hljs.BACKSLASH_ESCAPE]
        },
        {
          begin: /"""/, end: /"""/,
          contains: [hljs.BACKSLASH_ESCAPE, SUBST]
        },
        {
          begin: /"/, end: /"/,
          contains: [hljs.BACKSLASH_ESCAPE, SUBST]
        }
      ]
    },
    {
      className: 'regexp',
      variants: [
        {
          begin: '///', end: '///',
          contains: [SUBST, hljs.HASH_COMMENT_MODE]
        },
        {
          begin: '//[gim]{0,3}(?=\\W)',
          relevance: 0
        },
        {
          // regex can't start with space to parse x / 2 / 3 as two divisions
          // regex can't start with *, and it supports an "illegal" in the main mode
          begin: /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/
        }
      ]
    },
    {
      begin: '@' + JS_IDENT_RE // relevance booster
    },
    {
      subLanguage: 'javascript',
      excludeBegin: true, excludeEnd: true,
      variants: [
        {
          begin: '```', end: '```',
        },
        {
          begin: '`', end: '`',
        }
      ]
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
      keywords: KEYWORDS$1,
      contains: ['self'].concat(EXPRESSIONS)
    }]
  };

  return {
    name: 'CoffeeScript',
    aliases: ['coffee', 'cson', 'iced'],
    keywords: KEYWORDS$1,
    illegal: /\/\*/,
    contains: EXPRESSIONS.concat([
      hljs.COMMENT('###', '###'),
      hljs.HASH_COMMENT_MODE,
      {
        className: 'function',
        begin: '^\\s*' + JS_IDENT_RE + '\\s*=\\s*' + PARAMS_RE, end: '[-=]>',
        returnBegin: true,
        contains: [TITLE, PARAMS]
      },
      {
        // anonymous function start
        begin: /[:\(,=]\s*/,
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
        begin: JS_IDENT_RE + ':', end: ':',
        returnBegin: true, returnEnd: true,
        relevance: 0
      }
    ])
  };
}

module.exports = coffeescript;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NvZmZlZXNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFNBQVMsK0JBQStCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMEJBQTBCLElBQUk7QUFDOUI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELElBQUk7QUFDcEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkMsbUJBQW1CO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2NvZmZlZXNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEtFWVdPUkRTID0gW1xuICBcImFzXCIsIC8vIGZvciBleHBvcnRzXG4gIFwiaW5cIixcbiAgXCJvZlwiLFxuICBcImlmXCIsXG4gIFwiZm9yXCIsXG4gIFwid2hpbGVcIixcbiAgXCJmaW5hbGx5XCIsXG4gIFwidmFyXCIsXG4gIFwibmV3XCIsXG4gIFwiZnVuY3Rpb25cIixcbiAgXCJkb1wiLFxuICBcInJldHVyblwiLFxuICBcInZvaWRcIixcbiAgXCJlbHNlXCIsXG4gIFwiYnJlYWtcIixcbiAgXCJjYXRjaFwiLFxuICBcImluc3RhbmNlb2ZcIixcbiAgXCJ3aXRoXCIsXG4gIFwidGhyb3dcIixcbiAgXCJjYXNlXCIsXG4gIFwiZGVmYXVsdFwiLFxuICBcInRyeVwiLFxuICBcInN3aXRjaFwiLFxuICBcImNvbnRpbnVlXCIsXG4gIFwidHlwZW9mXCIsXG4gIFwiZGVsZXRlXCIsXG4gIFwibGV0XCIsXG4gIFwieWllbGRcIixcbiAgXCJjb25zdFwiLFxuICBcImNsYXNzXCIsXG4gIC8vIEpTIGhhbmRsZXMgdGhlc2Ugd2l0aCBhIHNwZWNpYWwgcnVsZVxuICAvLyBcImdldFwiLFxuICAvLyBcInNldFwiLFxuICBcImRlYnVnZ2VyXCIsXG4gIFwiYXN5bmNcIixcbiAgXCJhd2FpdFwiLFxuICBcInN0YXRpY1wiLFxuICBcImltcG9ydFwiLFxuICBcImZyb21cIixcbiAgXCJleHBvcnRcIixcbiAgXCJleHRlbmRzXCJcbl07XG5jb25zdCBMSVRFUkFMUyA9IFtcbiAgXCJ0cnVlXCIsXG4gIFwiZmFsc2VcIixcbiAgXCJudWxsXCIsXG4gIFwidW5kZWZpbmVkXCIsXG4gIFwiTmFOXCIsXG4gIFwiSW5maW5pdHlcIlxuXTtcblxuY29uc3QgVFlQRVMgPSBbXG4gIFwiSW50bFwiLFxuICBcIkRhdGFWaWV3XCIsXG4gIFwiTnVtYmVyXCIsXG4gIFwiTWF0aFwiLFxuICBcIkRhdGVcIixcbiAgXCJTdHJpbmdcIixcbiAgXCJSZWdFeHBcIixcbiAgXCJPYmplY3RcIixcbiAgXCJGdW5jdGlvblwiLFxuICBcIkJvb2xlYW5cIixcbiAgXCJFcnJvclwiLFxuICBcIlN5bWJvbFwiLFxuICBcIlNldFwiLFxuICBcIk1hcFwiLFxuICBcIldlYWtTZXRcIixcbiAgXCJXZWFrTWFwXCIsXG4gIFwiUHJveHlcIixcbiAgXCJSZWZsZWN0XCIsXG4gIFwiSlNPTlwiLFxuICBcIlByb21pc2VcIixcbiAgXCJGbG9hdDY0QXJyYXlcIixcbiAgXCJJbnQxNkFycmF5XCIsXG4gIFwiSW50MzJBcnJheVwiLFxuICBcIkludDhBcnJheVwiLFxuICBcIlVpbnQxNkFycmF5XCIsXG4gIFwiVWludDMyQXJyYXlcIixcbiAgXCJGbG9hdDMyQXJyYXlcIixcbiAgXCJBcnJheVwiLFxuICBcIlVpbnQ4QXJyYXlcIixcbiAgXCJVaW50OENsYW1wZWRBcnJheVwiLFxuICBcIkFycmF5QnVmZmVyXCJcbl07XG5cbmNvbnN0IEVSUk9SX1RZUEVTID0gW1xuICBcIkV2YWxFcnJvclwiLFxuICBcIkludGVybmFsRXJyb3JcIixcbiAgXCJSYW5nZUVycm9yXCIsXG4gIFwiUmVmZXJlbmNlRXJyb3JcIixcbiAgXCJTeW50YXhFcnJvclwiLFxuICBcIlR5cGVFcnJvclwiLFxuICBcIlVSSUVycm9yXCJcbl07XG5cbmNvbnN0IEJVSUxUX0lOX0dMT0JBTFMgPSBbXG4gIFwic2V0SW50ZXJ2YWxcIixcbiAgXCJzZXRUaW1lb3V0XCIsXG4gIFwiY2xlYXJJbnRlcnZhbFwiLFxuICBcImNsZWFyVGltZW91dFwiLFxuXG4gIFwicmVxdWlyZVwiLFxuICBcImV4cG9ydHNcIixcblxuICBcImV2YWxcIixcbiAgXCJpc0Zpbml0ZVwiLFxuICBcImlzTmFOXCIsXG4gIFwicGFyc2VGbG9hdFwiLFxuICBcInBhcnNlSW50XCIsXG4gIFwiZGVjb2RlVVJJXCIsXG4gIFwiZGVjb2RlVVJJQ29tcG9uZW50XCIsXG4gIFwiZW5jb2RlVVJJXCIsXG4gIFwiZW5jb2RlVVJJQ29tcG9uZW50XCIsXG4gIFwiZXNjYXBlXCIsXG4gIFwidW5lc2NhcGVcIlxuXTtcblxuY29uc3QgQlVJTFRfSU5fVkFSSUFCTEVTID0gW1xuICBcImFyZ3VtZW50c1wiLFxuICBcInRoaXNcIixcbiAgXCJzdXBlclwiLFxuICBcImNvbnNvbGVcIixcbiAgXCJ3aW5kb3dcIixcbiAgXCJkb2N1bWVudFwiLFxuICBcImxvY2FsU3RvcmFnZVwiLFxuICBcIm1vZHVsZVwiLFxuICBcImdsb2JhbFwiIC8vIE5vZGUuanNcbl07XG5cbmNvbnN0IEJVSUxUX0lOUyA9IFtdLmNvbmNhdChcbiAgQlVJTFRfSU5fR0xPQkFMUyxcbiAgQlVJTFRfSU5fVkFSSUFCTEVTLFxuICBUWVBFUyxcbiAgRVJST1JfVFlQRVNcbik7XG5cbi8qXG5MYW5ndWFnZTogQ29mZmVlU2NyaXB0XG5BdXRob3I6IERteXRyaWkgTmFnaXJuaWFrIDxkbmFnaXJAZ21haWwuY29tPlxuQ29udHJpYnV0b3JzOiBPbGVnIEVmaW1vdiA8ZWZpbW92b3ZAZ21haWwuY29tPiwgQ8OpZHJpYyBOw6low6ltaWUgPGNlZHJpYy5uZWhlbWllQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBDb2ZmZWVTY3JpcHQgaXMgYSBwcm9ncmFtbWluZyBsYW5ndWFnZSB0aGF0IHRyYW5zY29tcGlsZXMgdG8gSmF2YVNjcmlwdC4gRm9yIGluZm8gYWJvdXQgbGFuZ3VhZ2Ugc2VlIGh0dHA6Ly9jb2ZmZWVzY3JpcHQub3JnL1xuQ2F0ZWdvcnk6IGNvbW1vbiwgc2NyaXB0aW5nXG5XZWJzaXRlOiBodHRwczovL2NvZmZlZXNjcmlwdC5vcmdcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBjb2ZmZWVzY3JpcHQoaGxqcykge1xuICB2YXIgQ09GRkVFX0JVSUxUX0lOUyA9IFtcbiAgICAnbnBtJyxcbiAgICAncHJpbnQnXG4gIF07XG4gIHZhciBDT0ZGRUVfTElURVJBTFMgPSBbXG4gICAgJ3llcycsXG4gICAgJ25vJyxcbiAgICAnb24nLFxuICAgICdvZmYnXG4gIF07XG4gIHZhciBDT0ZGRUVfS0VZV09SRFMgPSBbXG4gICAgJ3RoZW4nLFxuICAgICd1bmxlc3MnLFxuICAgICd1bnRpbCcsXG4gICAgJ2xvb3AnLFxuICAgICdieScsXG4gICAgJ3doZW4nLFxuICAgICdhbmQnLFxuICAgICdvcicsXG4gICAgJ2lzJyxcbiAgICAnaXNudCcsXG4gICAgJ25vdCdcbiAgXTtcbiAgdmFyIE5PVF9WQUxJRF9LRVlXT1JEUyA9IFtcbiAgICBcInZhclwiLFxuICAgIFwiY29uc3RcIixcbiAgICBcImxldFwiLFxuICAgIFwiZnVuY3Rpb25cIixcbiAgICBcInN0YXRpY1wiXG4gIF07XG4gIHZhciBleGNsdWRpbmcgPSAobGlzdCkgPT5cbiAgICAoa3cpID0+ICFsaXN0LmluY2x1ZGVzKGt3KTtcbiAgdmFyIEtFWVdPUkRTJDEgPSB7XG4gICAga2V5d29yZDogS0VZV09SRFMuY29uY2F0KENPRkZFRV9LRVlXT1JEUykuZmlsdGVyKGV4Y2x1ZGluZyhOT1RfVkFMSURfS0VZV09SRFMpKS5qb2luKFwiIFwiKSxcbiAgICBsaXRlcmFsOiBMSVRFUkFMUy5jb25jYXQoQ09GRkVFX0xJVEVSQUxTKS5qb2luKFwiIFwiKSxcbiAgICBidWlsdF9pbjogQlVJTFRfSU5TLmNvbmNhdChDT0ZGRUVfQlVJTFRfSU5TKS5qb2luKFwiIFwiKVxuICB9O1xuICB2YXIgSlNfSURFTlRfUkUgPSAnW0EtWmEteiRfXVswLTlBLVphLXokX10qJztcbiAgdmFyIFNVQlNUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICBiZWdpbjogLyNcXHsvLCBlbmQ6IC99LyxcbiAgICBrZXl3b3JkczogS0VZV09SRFMkMVxuICB9O1xuICB2YXIgRVhQUkVTU0lPTlMgPSBbXG4gICAgaGxqcy5CSU5BUllfTlVNQkVSX01PREUsXG4gICAgaGxqcy5pbmhlcml0KGhsanMuQ19OVU1CRVJfTU9ERSwge3N0YXJ0czoge2VuZDogJyhcXFxccyovKT8nLCByZWxldmFuY2U6IDB9fSksIC8vIGEgbnVtYmVyIHRyaWVzIHRvIGVhdCB0aGUgZm9sbG93aW5nIHNsYXNoIHRvIHByZXZlbnQgdHJlYXRpbmcgaXQgYXMgYSByZWdleHBcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAvJycnLywgZW5kOiAvJycnLyxcbiAgICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAvJy8sIGVuZDogLycvLFxuICAgICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46IC9cIlwiXCIvLCBlbmQ6IC9cIlwiXCIvLFxuICAgICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFLCBTVUJTVF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAvXCIvLCBlbmQ6IC9cIi8sXG4gICAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEUsIFNVQlNUXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdyZWdleHAnLFxuICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnLy8vJywgZW5kOiAnLy8vJyxcbiAgICAgICAgICBjb250YWluczogW1NVQlNULCBobGpzLkhBU0hfQ09NTUVOVF9NT0RFXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICcvL1tnaW1dezAsM30oPz1cXFxcVyknLFxuICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLy8gcmVnZXggY2FuJ3Qgc3RhcnQgd2l0aCBzcGFjZSB0byBwYXJzZSB4IC8gMiAvIDMgYXMgdHdvIGRpdmlzaW9uc1xuICAgICAgICAgIC8vIHJlZ2V4IGNhbid0IHN0YXJ0IHdpdGggKiwgYW5kIGl0IHN1cHBvcnRzIGFuIFwiaWxsZWdhbFwiIGluIHRoZSBtYWluIG1vZGVcbiAgICAgICAgICBiZWdpbjogL1xcLyg/IVsgKl0pLio/KD8hW1xcXFxdKS5cXC9bZ2ltXXswLDN9KD89XFxXKS9cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgYmVnaW46ICdAJyArIEpTX0lERU5UX1JFIC8vIHJlbGV2YW5jZSBib29zdGVyXG4gICAgfSxcbiAgICB7XG4gICAgICBzdWJMYW5ndWFnZTogJ2phdmFzY3JpcHQnLFxuICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnYGBgJywgZW5kOiAnYGBgJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnYCcsIGVuZDogJ2AnLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdO1xuICBTVUJTVC5jb250YWlucyA9IEVYUFJFU1NJT05TO1xuXG4gIHZhciBUSVRMRSA9IGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtiZWdpbjogSlNfSURFTlRfUkV9KTtcbiAgdmFyIFBBUkFNU19SRSA9ICcoXFxcXCguKlxcXFwpKT9cXFxccypcXFxcQlstPV0+JztcbiAgdmFyIFBBUkFNUyA9IHtcbiAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgIGJlZ2luOiAnXFxcXChbXlxcXFwoXScsIHJldHVybkJlZ2luOiB0cnVlLFxuICAgIC8qIFdlIG5lZWQgYW5vdGhlciBjb250YWluZWQgbmFtZWxlc3MgbW9kZSB0byBub3QgaGF2ZSBldmVyeSBuZXN0ZWRcbiAgICBwYWlyIG9mIHBhcmVucyB0byBiZSBjYWxsZWQgXCJwYXJhbXNcIiAqL1xuICAgIGNvbnRhaW5zOiBbe1xuICAgICAgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvLFxuICAgICAga2V5d29yZHM6IEtFWVdPUkRTJDEsXG4gICAgICBjb250YWluczogWydzZWxmJ10uY29uY2F0KEVYUFJFU1NJT05TKVxuICAgIH1dXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQ29mZmVlU2NyaXB0JyxcbiAgICBhbGlhc2VzOiBbJ2NvZmZlZScsICdjc29uJywgJ2ljZWQnXSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMkMSxcbiAgICBpbGxlZ2FsOiAvXFwvXFwqLyxcbiAgICBjb250YWluczogRVhQUkVTU0lPTlMuY29uY2F0KFtcbiAgICAgIGhsanMuQ09NTUVOVCgnIyMjJywgJyMjIycpLFxuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbjogJ15cXFxccyonICsgSlNfSURFTlRfUkUgKyAnXFxcXHMqPVxcXFxzKicgKyBQQVJBTVNfUkUsIGVuZDogJ1stPV0+JyxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbVElUTEUsIFBBUkFNU11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIGFub255bW91cyBmdW5jdGlvbiBzdGFydFxuICAgICAgICBiZWdpbjogL1s6XFwoLD1dXFxzKi8sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICBiZWdpbjogUEFSQU1TX1JFLCBlbmQ6ICdbLT1dPicsXG4gICAgICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbUEFSQU1TXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MnLFxuICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAgaWxsZWdhbDogL1s6PVwiXFxbXFxdXS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2V4dGVuZHMnLFxuICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICBpbGxlZ2FsOiAvWzo9XCJcXFtcXF1dLyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbVElUTEVdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBUSVRMRVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogSlNfSURFTlRfUkUgKyAnOicsIGVuZDogJzonLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSwgcmV0dXJuRW5kOiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdKVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvZmZlZXNjcmlwdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=