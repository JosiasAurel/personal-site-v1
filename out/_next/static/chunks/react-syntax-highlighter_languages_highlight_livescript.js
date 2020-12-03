(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_livescript"],{

/***/ "./node_modules/highlight.js/lib/languages/livescript.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/livescript.js ***!
  \***************************************************************/
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
Language: LiveScript
Author: Taneli Vatanen <taneli.vatanen@gmail.com>
Contributors: Jen Evers-Corvina <jen@sevvie.net>
Origin: coffeescript.js
Description: LiveScript is a programming language that transcompiles to JavaScript. For info about language see http://livescript.net/
Website: https://livescript.net
Category: scripting
*/

function livescript(hljs) {
  var LIVESCRIPT_BUILT_INS = [
    'npm',
    'print'
  ];
  var LIVESCRIPT_LITERALS = [
    'yes',
    'no',
    'on',
    'off',
    'it',
    'that',
    'void'
  ];
  var LIVESCRIPT_KEYWORDS = [
    'then',
    'unless',
    'until',
    'loop',
    'of',
    'by',
    'when',
    'and',
    'or',
    'is',
    'isnt',
    'not',
    'it',
    'that',
    'otherwise',
    'from',
    'to',
    'til',
    'fallthrough',
    'case',
    'enum',
    'native',
    'list',
    'map',
    '__hasProp',
    '__extends',
    '__slice',
    '__bind',
    '__indexOf'
  ];
  var KEYWORDS$1 = {
    keyword: KEYWORDS.concat(LIVESCRIPT_KEYWORDS).join(" "),
    literal: LITERALS.concat(LIVESCRIPT_LITERALS).join(" "),
    built_in: BUILT_INS.concat(LIVESCRIPT_BUILT_INS).join(" ")
  };
  var JS_IDENT_RE = '[A-Za-z$_](?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*';
  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: JS_IDENT_RE});
  var SUBST = {
    className: 'subst',
    begin: /#\{/, end: /}/,
    keywords: KEYWORDS$1
  };
  var SUBST_SIMPLE = {
    className: 'subst',
    begin: /#[A-Za-z$_]/, end: /(?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
    keywords: KEYWORDS$1
  };
  var EXPRESSIONS = [
    hljs.BINARY_NUMBER_MODE,
    {
      className: 'number',
      begin: '(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)',
      relevance: 0,
      starts: {end: '(\\s*/)?', relevance: 0} // a number tries to eat the following slash to prevent treating it as a regexp
    },
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
          contains: [hljs.BACKSLASH_ESCAPE, SUBST, SUBST_SIMPLE]
        },
        {
          begin: /"/, end: /"/,
          contains: [hljs.BACKSLASH_ESCAPE, SUBST, SUBST_SIMPLE]
        },
        {
          begin: /\\/, end: /(\s|$)/,
          excludeEnd: true
        }
      ]
    },
    {
      className: 'regexp',
      variants: [
        {
          begin: '//', end: '//[gim]*',
          contains: [SUBST, hljs.HASH_COMMENT_MODE]
        },
        {
          // regex can't start with space to parse x / 2 / 3 as two divisions
          // regex can't start with *, and it supports an "illegal" in the main mode
          begin: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W)/
        }
      ]
    },
    {
      begin: '@' + JS_IDENT_RE
    },
    {
      begin: '``', end: '``',
      excludeBegin: true, excludeEnd: true,
      subLanguage: 'javascript'
    }
  ];
  SUBST.contains = EXPRESSIONS;

  var PARAMS = {
    className: 'params',
    begin: '\\(', returnBegin: true,
    /* We need another contained nameless mode to not have every nested
    pair of parens to be called "params" */
    contains: [
      {
        begin: /\(/, end: /\)/,
        keywords: KEYWORDS$1,
        contains: ['self'].concat(EXPRESSIONS)
      }
    ]
  };

  var SYMBOLS = {
    begin: '(#=>|=>|\\|>>|-?->|\\!->)'
  };

  return {
    name: 'LiveScript',
    aliases: ['ls'],
    keywords: KEYWORDS$1,
    illegal: /\/\*/,
    contains: EXPRESSIONS.concat([
      hljs.COMMENT('\\/\\*', '\\*\\/'),
      hljs.HASH_COMMENT_MODE,
      SYMBOLS, // relevance booster
      {
        className: 'function',
        contains: [TITLE, PARAMS],
        returnBegin: true,
        variants: [
          {
            begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B\\->\\*?', end: '\\->\\*?'
          },
          {
            begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?!?(\\(.*\\))?\\s*\\B[-~]{1,2}>\\*?', end: '[-~]{1,2}>\\*?'
          },
          {
            begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B!?[-~]{1,2}>\\*?', end: '!?[-~]{1,2}>\\*?'
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

module.exports = livescript;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2xpdmVzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLG1CQUFtQjtBQUNoRTtBQUNBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4QkFBOEI7QUFDN0MsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxtRkFBbUYsSUFBSSxtQkFBbUIsSUFBSTtBQUM5RyxXQUFXO0FBQ1g7QUFDQSxtRkFBbUYsSUFBSSxxQkFBcUIsSUFBSTtBQUNoSDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfbGl2ZXNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEtFWVdPUkRTID0gW1xuICBcImFzXCIsIC8vIGZvciBleHBvcnRzXG4gIFwiaW5cIixcbiAgXCJvZlwiLFxuICBcImlmXCIsXG4gIFwiZm9yXCIsXG4gIFwid2hpbGVcIixcbiAgXCJmaW5hbGx5XCIsXG4gIFwidmFyXCIsXG4gIFwibmV3XCIsXG4gIFwiZnVuY3Rpb25cIixcbiAgXCJkb1wiLFxuICBcInJldHVyblwiLFxuICBcInZvaWRcIixcbiAgXCJlbHNlXCIsXG4gIFwiYnJlYWtcIixcbiAgXCJjYXRjaFwiLFxuICBcImluc3RhbmNlb2ZcIixcbiAgXCJ3aXRoXCIsXG4gIFwidGhyb3dcIixcbiAgXCJjYXNlXCIsXG4gIFwiZGVmYXVsdFwiLFxuICBcInRyeVwiLFxuICBcInN3aXRjaFwiLFxuICBcImNvbnRpbnVlXCIsXG4gIFwidHlwZW9mXCIsXG4gIFwiZGVsZXRlXCIsXG4gIFwibGV0XCIsXG4gIFwieWllbGRcIixcbiAgXCJjb25zdFwiLFxuICBcImNsYXNzXCIsXG4gIC8vIEpTIGhhbmRsZXMgdGhlc2Ugd2l0aCBhIHNwZWNpYWwgcnVsZVxuICAvLyBcImdldFwiLFxuICAvLyBcInNldFwiLFxuICBcImRlYnVnZ2VyXCIsXG4gIFwiYXN5bmNcIixcbiAgXCJhd2FpdFwiLFxuICBcInN0YXRpY1wiLFxuICBcImltcG9ydFwiLFxuICBcImZyb21cIixcbiAgXCJleHBvcnRcIixcbiAgXCJleHRlbmRzXCJcbl07XG5jb25zdCBMSVRFUkFMUyA9IFtcbiAgXCJ0cnVlXCIsXG4gIFwiZmFsc2VcIixcbiAgXCJudWxsXCIsXG4gIFwidW5kZWZpbmVkXCIsXG4gIFwiTmFOXCIsXG4gIFwiSW5maW5pdHlcIlxuXTtcblxuY29uc3QgVFlQRVMgPSBbXG4gIFwiSW50bFwiLFxuICBcIkRhdGFWaWV3XCIsXG4gIFwiTnVtYmVyXCIsXG4gIFwiTWF0aFwiLFxuICBcIkRhdGVcIixcbiAgXCJTdHJpbmdcIixcbiAgXCJSZWdFeHBcIixcbiAgXCJPYmplY3RcIixcbiAgXCJGdW5jdGlvblwiLFxuICBcIkJvb2xlYW5cIixcbiAgXCJFcnJvclwiLFxuICBcIlN5bWJvbFwiLFxuICBcIlNldFwiLFxuICBcIk1hcFwiLFxuICBcIldlYWtTZXRcIixcbiAgXCJXZWFrTWFwXCIsXG4gIFwiUHJveHlcIixcbiAgXCJSZWZsZWN0XCIsXG4gIFwiSlNPTlwiLFxuICBcIlByb21pc2VcIixcbiAgXCJGbG9hdDY0QXJyYXlcIixcbiAgXCJJbnQxNkFycmF5XCIsXG4gIFwiSW50MzJBcnJheVwiLFxuICBcIkludDhBcnJheVwiLFxuICBcIlVpbnQxNkFycmF5XCIsXG4gIFwiVWludDMyQXJyYXlcIixcbiAgXCJGbG9hdDMyQXJyYXlcIixcbiAgXCJBcnJheVwiLFxuICBcIlVpbnQ4QXJyYXlcIixcbiAgXCJVaW50OENsYW1wZWRBcnJheVwiLFxuICBcIkFycmF5QnVmZmVyXCJcbl07XG5cbmNvbnN0IEVSUk9SX1RZUEVTID0gW1xuICBcIkV2YWxFcnJvclwiLFxuICBcIkludGVybmFsRXJyb3JcIixcbiAgXCJSYW5nZUVycm9yXCIsXG4gIFwiUmVmZXJlbmNlRXJyb3JcIixcbiAgXCJTeW50YXhFcnJvclwiLFxuICBcIlR5cGVFcnJvclwiLFxuICBcIlVSSUVycm9yXCJcbl07XG5cbmNvbnN0IEJVSUxUX0lOX0dMT0JBTFMgPSBbXG4gIFwic2V0SW50ZXJ2YWxcIixcbiAgXCJzZXRUaW1lb3V0XCIsXG4gIFwiY2xlYXJJbnRlcnZhbFwiLFxuICBcImNsZWFyVGltZW91dFwiLFxuXG4gIFwicmVxdWlyZVwiLFxuICBcImV4cG9ydHNcIixcblxuICBcImV2YWxcIixcbiAgXCJpc0Zpbml0ZVwiLFxuICBcImlzTmFOXCIsXG4gIFwicGFyc2VGbG9hdFwiLFxuICBcInBhcnNlSW50XCIsXG4gIFwiZGVjb2RlVVJJXCIsXG4gIFwiZGVjb2RlVVJJQ29tcG9uZW50XCIsXG4gIFwiZW5jb2RlVVJJXCIsXG4gIFwiZW5jb2RlVVJJQ29tcG9uZW50XCIsXG4gIFwiZXNjYXBlXCIsXG4gIFwidW5lc2NhcGVcIlxuXTtcblxuY29uc3QgQlVJTFRfSU5fVkFSSUFCTEVTID0gW1xuICBcImFyZ3VtZW50c1wiLFxuICBcInRoaXNcIixcbiAgXCJzdXBlclwiLFxuICBcImNvbnNvbGVcIixcbiAgXCJ3aW5kb3dcIixcbiAgXCJkb2N1bWVudFwiLFxuICBcImxvY2FsU3RvcmFnZVwiLFxuICBcIm1vZHVsZVwiLFxuICBcImdsb2JhbFwiIC8vIE5vZGUuanNcbl07XG5cbmNvbnN0IEJVSUxUX0lOUyA9IFtdLmNvbmNhdChcbiAgQlVJTFRfSU5fR0xPQkFMUyxcbiAgQlVJTFRfSU5fVkFSSUFCTEVTLFxuICBUWVBFUyxcbiAgRVJST1JfVFlQRVNcbik7XG5cbi8qXG5MYW5ndWFnZTogTGl2ZVNjcmlwdFxuQXV0aG9yOiBUYW5lbGkgVmF0YW5lbiA8dGFuZWxpLnZhdGFuZW5AZ21haWwuY29tPlxuQ29udHJpYnV0b3JzOiBKZW4gRXZlcnMtQ29ydmluYSA8amVuQHNldnZpZS5uZXQ+XG5PcmlnaW46IGNvZmZlZXNjcmlwdC5qc1xuRGVzY3JpcHRpb246IExpdmVTY3JpcHQgaXMgYSBwcm9ncmFtbWluZyBsYW5ndWFnZSB0aGF0IHRyYW5zY29tcGlsZXMgdG8gSmF2YVNjcmlwdC4gRm9yIGluZm8gYWJvdXQgbGFuZ3VhZ2Ugc2VlIGh0dHA6Ly9saXZlc2NyaXB0Lm5ldC9cbldlYnNpdGU6IGh0dHBzOi8vbGl2ZXNjcmlwdC5uZXRcbkNhdGVnb3J5OiBzY3JpcHRpbmdcbiovXG5cbmZ1bmN0aW9uIGxpdmVzY3JpcHQoaGxqcykge1xuICB2YXIgTElWRVNDUklQVF9CVUlMVF9JTlMgPSBbXG4gICAgJ25wbScsXG4gICAgJ3ByaW50J1xuICBdO1xuICB2YXIgTElWRVNDUklQVF9MSVRFUkFMUyA9IFtcbiAgICAneWVzJyxcbiAgICAnbm8nLFxuICAgICdvbicsXG4gICAgJ29mZicsXG4gICAgJ2l0JyxcbiAgICAndGhhdCcsXG4gICAgJ3ZvaWQnXG4gIF07XG4gIHZhciBMSVZFU0NSSVBUX0tFWVdPUkRTID0gW1xuICAgICd0aGVuJyxcbiAgICAndW5sZXNzJyxcbiAgICAndW50aWwnLFxuICAgICdsb29wJyxcbiAgICAnb2YnLFxuICAgICdieScsXG4gICAgJ3doZW4nLFxuICAgICdhbmQnLFxuICAgICdvcicsXG4gICAgJ2lzJyxcbiAgICAnaXNudCcsXG4gICAgJ25vdCcsXG4gICAgJ2l0JyxcbiAgICAndGhhdCcsXG4gICAgJ290aGVyd2lzZScsXG4gICAgJ2Zyb20nLFxuICAgICd0bycsXG4gICAgJ3RpbCcsXG4gICAgJ2ZhbGx0aHJvdWdoJyxcbiAgICAnY2FzZScsXG4gICAgJ2VudW0nLFxuICAgICduYXRpdmUnLFxuICAgICdsaXN0JyxcbiAgICAnbWFwJyxcbiAgICAnX19oYXNQcm9wJyxcbiAgICAnX19leHRlbmRzJyxcbiAgICAnX19zbGljZScsXG4gICAgJ19fYmluZCcsXG4gICAgJ19faW5kZXhPZidcbiAgXTtcbiAgdmFyIEtFWVdPUkRTJDEgPSB7XG4gICAga2V5d29yZDogS0VZV09SRFMuY29uY2F0KExJVkVTQ1JJUFRfS0VZV09SRFMpLmpvaW4oXCIgXCIpLFxuICAgIGxpdGVyYWw6IExJVEVSQUxTLmNvbmNhdChMSVZFU0NSSVBUX0xJVEVSQUxTKS5qb2luKFwiIFwiKSxcbiAgICBidWlsdF9pbjogQlVJTFRfSU5TLmNvbmNhdChMSVZFU0NSSVBUX0JVSUxUX0lOUykuam9pbihcIiBcIilcbiAgfTtcbiAgdmFyIEpTX0lERU5UX1JFID0gJ1tBLVphLXokX10oPzpcXC1bMC05QS1aYS16JF9dfFswLTlBLVphLXokX10pKic7XG4gIHZhciBUSVRMRSA9IGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtiZWdpbjogSlNfSURFTlRfUkV9KTtcbiAgdmFyIFNVQlNUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICBiZWdpbjogLyNcXHsvLCBlbmQ6IC99LyxcbiAgICBrZXl3b3JkczogS0VZV09SRFMkMVxuICB9O1xuICB2YXIgU1VCU1RfU0lNUExFID0ge1xuICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICBiZWdpbjogLyNbQS1aYS16JF9dLywgZW5kOiAvKD86XFwtWzAtOUEtWmEteiRfXXxbMC05QS1aYS16JF9dKSovLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyQxXG4gIH07XG4gIHZhciBFWFBSRVNTSU9OUyA9IFtcbiAgICBobGpzLkJJTkFSWV9OVU1CRVJfTU9ERSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgYmVnaW46ICcoXFxcXGIwW3hYXVthLWZBLUYwLTlfXSspfChcXFxcYlxcXFxkKFxcXFxkfF9cXFxcZCkqKFxcXFwuKFxcXFxkKFxcXFxkfF9cXFxcZCkqKT8pPyhfKltlRV0oWy0rXVxcXFxkKF9cXFxcZHxcXFxcZCkqKT8pP1tfYS16XSopJyxcbiAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgIHN0YXJ0czoge2VuZDogJyhcXFxccyovKT8nLCByZWxldmFuY2U6IDB9IC8vIGEgbnVtYmVyIHRyaWVzIHRvIGVhdCB0aGUgZm9sbG93aW5nIHNsYXNoIHRvIHByZXZlbnQgdHJlYXRpbmcgaXQgYXMgYSByZWdleHBcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICB2YXJpYW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46IC8nJycvLCBlbmQ6IC8nJycvLFxuICAgICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46IC8nLywgZW5kOiAvJy8sXG4gICAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogL1wiXCJcIi8sIGVuZDogL1wiXCJcIi8sXG4gICAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEUsIFNVQlNULCBTVUJTVF9TSU1QTEVdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogL1wiLywgZW5kOiAvXCIvLFxuICAgICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFLCBTVUJTVCwgU1VCU1RfU0lNUExFXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46IC9cXFxcLywgZW5kOiAvKFxcc3wkKS8sXG4gICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdyZWdleHAnLFxuICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnLy8nLCBlbmQ6ICcvL1tnaW1dKicsXG4gICAgICAgICAgY29udGFpbnM6IFtTVUJTVCwgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC8vIHJlZ2V4IGNhbid0IHN0YXJ0IHdpdGggc3BhY2UgdG8gcGFyc2UgeCAvIDIgLyAzIGFzIHR3byBkaXZpc2lvbnNcbiAgICAgICAgICAvLyByZWdleCBjYW4ndCBzdGFydCB3aXRoICosIGFuZCBpdCBzdXBwb3J0cyBhbiBcImlsbGVnYWxcIiBpbiB0aGUgbWFpbiBtb2RlXG4gICAgICAgICAgYmVnaW46IC9cXC8oPyFbICpdKShcXFxcXFwvfC4pKj9cXC9bZ2ltXSooPz1cXFcpL1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBiZWdpbjogJ0AnICsgSlNfSURFTlRfUkVcbiAgICB9LFxuICAgIHtcbiAgICAgIGJlZ2luOiAnYGAnLCBlbmQ6ICdgYCcsXG4gICAgICBleGNsdWRlQmVnaW46IHRydWUsIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICBzdWJMYW5ndWFnZTogJ2phdmFzY3JpcHQnXG4gICAgfVxuICBdO1xuICBTVUJTVC5jb250YWlucyA9IEVYUFJFU1NJT05TO1xuXG4gIHZhciBQQVJBTVMgPSB7XG4gICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICBiZWdpbjogJ1xcXFwoJywgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgLyogV2UgbmVlZCBhbm90aGVyIGNvbnRhaW5lZCBuYW1lbGVzcyBtb2RlIHRvIG5vdCBoYXZlIGV2ZXJ5IG5lc3RlZFxuICAgIHBhaXIgb2YgcGFyZW5zIHRvIGJlIGNhbGxlZCBcInBhcmFtc1wiICovXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvLFxuICAgICAgICBrZXl3b3JkczogS0VZV09SRFMkMSxcbiAgICAgICAgY29udGFpbnM6IFsnc2VsZiddLmNvbmNhdChFWFBSRVNTSU9OUylcbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgdmFyIFNZTUJPTFMgPSB7XG4gICAgYmVnaW46ICcoIz0+fD0+fFxcXFx8Pj58LT8tPnxcXFxcIS0+KSdcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdMaXZlU2NyaXB0JyxcbiAgICBhbGlhc2VzOiBbJ2xzJ10sXG4gICAga2V5d29yZHM6IEtFWVdPUkRTJDEsXG4gICAgaWxsZWdhbDogL1xcL1xcKi8sXG4gICAgY29udGFpbnM6IEVYUFJFU1NJT05TLmNvbmNhdChbXG4gICAgICBobGpzLkNPTU1FTlQoJ1xcXFwvXFxcXConLCAnXFxcXCpcXFxcLycpLFxuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIFNZTUJPTFMsIC8vIHJlbGV2YW5jZSBib29zdGVyXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgY29udGFpbnM6IFtUSVRMRSwgUEFSQU1TXSxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICcoJyArIEpTX0lERU5UX1JFICsgJ1xcXFxzKig/Oj18Oj0pXFxcXHMqKT8oXFxcXCguKlxcXFwpKT9cXFxccypcXFxcQlxcXFwtPlxcXFwqPycsIGVuZDogJ1xcXFwtPlxcXFwqPydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnKCcgKyBKU19JREVOVF9SRSArICdcXFxccyooPzo9fDo9KVxcXFxzKik/IT8oXFxcXCguKlxcXFwpKT9cXFxccypcXFxcQlstfl17MSwyfT5cXFxcKj8nLCBlbmQ6ICdbLX5dezEsMn0+XFxcXCo/J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICcoJyArIEpTX0lERU5UX1JFICsgJ1xcXFxzKig/Oj18Oj0pXFxcXHMqKT8oXFxcXCguKlxcXFwpKT9cXFxccypcXFxcQiE/Wy1+XXsxLDJ9PlxcXFwqPycsIGVuZDogJyE/Wy1+XXsxLDJ9PlxcXFwqPydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzJyxcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIGlsbGVnYWw6IC9bOj1cIlxcW1xcXV0vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdleHRlbmRzJyxcbiAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgaWxsZWdhbDogL1s6PVwiXFxbXFxdXS8sXG4gICAgICAgICAgICBjb250YWluczogW1RJVExFXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgVElUTEVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IEpTX0lERU5UX1JFICsgJzonLCBlbmQ6ICc6JyxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsIHJldHVybkVuZDogdHJ1ZSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XG4gICAgXSlcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXZlc2NyaXB0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==