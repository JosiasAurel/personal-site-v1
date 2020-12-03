(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_typescript"],{

/***/ "./node_modules/highlight.js/lib/languages/typescript.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/typescript.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
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
 * @param {RegExp | string } re
 * @returns {string}
 */
function optional(re) {
  return concat('(', re, ')?');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/* eslint-disable no-unreachable */

/** @type LanguageFn */
function javascript(hljs) {
  /**
   * Takes a string like "<Booger" and checks to see
   * if we can find a matching "</Booger" later in the
   * content.
   * @param {RegExpMatchArray} match
   * @param {{after:number}} param1
   */
  const hasClosingTag = (match, { after }) => {
    const tag = match[0].replace("<", "</");
    const pos = match.input.indexOf(tag, after);
    return pos !== -1;
  };

  const IDENT_RE$1 = IDENT_RE;
  const FRAGMENT = {
    begin: '<>',
    end: '</>'
  };
  const XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      // nested type?
      // HTML should not include another raw `<` inside a tag
      // But a type might: `<Array<Array<number>>`, etc.
      if (nextChar === "<") {
        response.ignoreMatch();
        return;
      }
      // <something>
      // This is now either a tag or a type.
      if (nextChar === ">") {
        // if we cannot find a matching closing tag, then we
        // will ignore it
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }
    }
  };
  const KEYWORDS$1 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS.join(" "),
    literal: LITERALS.join(" "),
    built_in: BUILT_INS.join(" ")
  };
  const nonDecimalLiterals = (prefixLetters, validChars) =>
    `\\b0[${prefixLetters}][${validChars}]([${validChars}_]*[${validChars}])?n?`;
  const noLeadingZeroDecimalDigits = /[1-9]([0-9_]*\d)?/;
  const decimalDigits = /\d([0-9_]*\d)?/;
  const exponentPart = concat(/[eE][+-]?/, decimalDigits);
  const NUMBER = {
    className: 'number',
    variants: [
      { begin: nonDecimalLiterals('bB', '01') }, // Binary literals
      { begin: nonDecimalLiterals('oO', '0-7') }, // Octal literals
      { begin: nonDecimalLiterals('xX', '0-9a-fA-F') }, // Hexadecimal literals
      { begin: concat(/\b/, noLeadingZeroDecimalDigits, 'n') }, // Non-zero BigInt literals
      { begin: concat(/(\b0)?\./, decimalDigits, optional(exponentPart)) }, // Decimal literals between 0 and 1
      { begin: concat(
        /\b/,
        noLeadingZeroDecimalDigits,
        optional(concat(/\./, optional(decimalDigits))), // fractional part
        optional(exponentPart)
        ) }, // Decimal literals >= 1
      { begin: /\b0[\.n]?/ }, // Zero literals (`0`, `0.`, `0n`)
    ],
    relevance: 0
  };
  const SUBST = {
    className: 'subst',
    begin: '\\$\\{',
    end: '\\}',
    keywords: KEYWORDS$1,
    contains: [] // defined later
  };
  const HTML_TEMPLATE = {
    begin: 'html`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'xml'
    }
  };
  const CSS_TEMPLATE = {
    begin: 'css`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'css'
    }
  };
  const TEMPLATE_STRING = {
    className: 'string',
    begin: '`',
    end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const JSDOC_COMMENT = hljs.COMMENT(
    '/\\*\\*',
    '\\*/',
    {
      relevance: 0,
      contains: [
        {
          className: 'doctag',
          begin: '@[A-Za-z]+',
          contains: [
            {
              className: 'type',
              begin: '\\{',
              end: '\\}',
              relevance: 0
            },
            {
              className: 'variable',
              begin: IDENT_RE$1 + '(?=\\s*(-)|$)',
              endsParent: true,
              relevance: 0
            },
            // eat spaces (not newlines) so we can find
            // types or variables
            {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }
          ]
        }
      ]
    }
  );
  const COMMENT = {
    className: "comment",
    variants: [
      JSDOC_COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE
    ]
  };
  const SUBST_INTERNALS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    TEMPLATE_STRING,
    NUMBER,
    hljs.REGEXP_MODE
  ];
  SUBST.contains = SUBST_INTERNALS
    .concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /{/,
      end: /}/,
      keywords: KEYWORDS$1,
      contains: [
        "self"
      ].concat(SUBST_INTERNALS)
    });
  const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    // eat recursive parens in sub expressions
    {
      begin: /\(/,
      end: /\)/,
      keywords: KEYWORDS$1,
      contains: ["self"].concat(SUBST_AND_COMMENTS)
    }
  ]);
  const PARAMS = {
    className: 'params',
    begin: /\(/,
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS$1,
    contains: PARAMS_CONTAINS
  };

  return {
    name: 'Javascript',
    aliases: ['js', 'jsx', 'mjs', 'cjs'],
    keywords: KEYWORDS$1,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      {
        label: "use_strict",
        className: 'meta',
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT,
      NUMBER,
      { // object attr container
        begin: concat(/[{,\n]\s*/,
          // we need to look ahead to make sure that we actually have an
          // attribute coming up so we don't steal a comma from a potential
          // "value" container
          //
          // NOTE: this might not work how you think.  We don't actually always
          // enter this mode and stay.  Instead it might merely match `,
          // <comments up next>` and then immediately end after the , because it
          // fails to find any actual attrs. But this still does the job because
          // it prevents the value contain rule from grabbing this instead and
          // prevening this rule from firing when we actually DO have keys.
          lookahead(concat(
            // we also need to allow for multiple possible comments inbetween
            // the first key:value pairing
            /(\/\/.*$)*/,
            /(\/\*(.|\n)*\*\/)*/,
            /\s*/,
            IDENT_RE$1 + '\\s*:'))),
        relevance: 0,
        contains: [
          {
            className: 'attr',
            begin: IDENT_RE$1 + lookahead('\\s*:'),
            relevance: 0
          }
        ]
      },
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [
          COMMENT,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: '(\\(' +
            '[^()]*(\\(' +
            '[^()]*(\\(' +
            '[^()]*' +
            '\\))*[^()]*' +
            '\\))*[^()]*' +
            '\\)|' + hljs.UNDERSCORE_IDENT_RE + ')\\s*=>',
            returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: hljs.UNDERSCORE_IDENT_RE
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS$1,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          { // could be a comma delimited list of params to a function call
            begin: /,/, relevance: 0
          },
          {
            className: '',
            begin: /\s/,
            end: /\s*/,
            skip: true
          },
          { // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              {
                begin: XML_TAG.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                'on:begin': XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }
            ],
            subLanguage: 'xml',
            contains: [
              {
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ['self']
              }
            ]
          }
        ],
        relevance: 0
      },
      {
        className: 'function',
        beginKeywords: 'function',
        end: /[{;]/,
        excludeEnd: true,
        keywords: KEYWORDS$1,
        contains: [
          'self',
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
          PARAMS
        ],
        illegal: /%/
      },
      {
        className: 'function',
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: hljs.UNDERSCORE_IDENT_RE +
          '\\(' + // first parens
          '[^()]*(\\(' +
            '[^()]*(\\(' +
              '[^()]*' +
            '\\))*[^()]*' +
          '\\))*[^()]*' +
          '\\)\\s*{', // end parens
        returnBegin:true,
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
        ]
      },
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        variants: [
          { begin: '\\.' + IDENT_RE$1 },
          { begin: '\\$' + IDENT_RE$1 }
        ],
        relevance: 0
      },
      { // ES6 class
        className: 'class',
        beginKeywords: 'class',
        end: /[{;=]/,
        excludeEnd: true,
        illegal: /[:"\[\]]/,
        contains: [
          { beginKeywords: 'extends' },
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        begin: /\b(?=constructor)/,
        end: /[\{;]/,
        excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
          'self',
          PARAMS
        ]
      },
      {
        begin: '(get|set)\\s+(?=' + IDENT_RE$1 + '\\()',
        end: /{/,
        keywords: "get set",
        contains: [
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
          { begin: /\(\)/ }, // eat to avoid empty params
          PARAMS
        ]
      },
      {
        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}

/*
Language: TypeScript
Author: Panu Horsmalahti <panu.horsmalahti@iki.fi>
Contributors: Ike Ku <dempfi@yahoo.com>
Description: TypeScript is a strict superset of JavaScript
Website: https://www.typescriptlang.org
Category: common, scripting
*/

/** @type LanguageFn */
function typescript(hljs) {
  const IDENT_RE$1 = IDENT_RE;
  const NAMESPACE = {
    beginKeywords: 'namespace', end: /\{/, excludeEnd: true
  };
  const INTERFACE = {
    beginKeywords: 'interface', end: /\{/, excludeEnd: true,
    keywords: 'interface extends'
  };
  const USE_STRICT = {
    className: 'meta',
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  };
  const TYPES = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "enum"
  ];
  const TS_SPECIFIC_KEYWORDS = [
    "type",
    "namespace",
    "typedef",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly"
  ];
  const KEYWORDS$1 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS.concat(TS_SPECIFIC_KEYWORDS).join(" "),
    literal: LITERALS.join(" "),
    built_in: BUILT_INS.concat(TYPES).join(" ")
  };
  const DECORATOR = {
    className: 'meta',
    begin: '@' + IDENT_RE$1,
  };

  const swapMode = (mode, label, replacement) => {
    const indx = mode.contains.findIndex(m => m.label === label);
    if (indx === -1) { throw new Error("can not find mode to replace"); }
    mode.contains.splice(indx, 1, replacement);
  };

  const tsLanguage = javascript(hljs);

  // this should update anywhere keywords is used since
  // it will be the same actual JS object
  Object.assign(tsLanguage.keywords, KEYWORDS$1);

  tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR);
  tsLanguage.contains = tsLanguage.contains.concat([
    DECORATOR,
    NAMESPACE,
    INTERFACE,
  ]);

  // TS gets a simpler shebang rule than JS
  swapMode(tsLanguage, "shebang", hljs.SHEBANG());
  // JS use strict rule purposely excludes `asm` which makes no sense
  swapMode(tsLanguage, "use_strict", USE_STRICT);

  const functionDeclaration = tsLanguage.contains.find(m => m.className === "function");
  functionDeclaration.relevance = 0; // () => {} is more typical in TypeScript

  Object.assign(tsLanguage, {
    name: 'TypeScript',
    aliases: ['ts']
  });

  return tsLanguage;
}

module.exports = typescript;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3R5cGVzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Es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QWdCO0FBQzNCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFpRDtBQUN2RTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsWUFBWTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfdHlwZXNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IElERU5UX1JFID0gJ1tBLVphLXokX11bMC05QS1aYS16JF9dKic7XG5jb25zdCBLRVlXT1JEUyA9IFtcbiAgXCJhc1wiLCAvLyBmb3IgZXhwb3J0c1xuICBcImluXCIsXG4gIFwib2ZcIixcbiAgXCJpZlwiLFxuICBcImZvclwiLFxuICBcIndoaWxlXCIsXG4gIFwiZmluYWxseVwiLFxuICBcInZhclwiLFxuICBcIm5ld1wiLFxuICBcImZ1bmN0aW9uXCIsXG4gIFwiZG9cIixcbiAgXCJyZXR1cm5cIixcbiAgXCJ2b2lkXCIsXG4gIFwiZWxzZVwiLFxuICBcImJyZWFrXCIsXG4gIFwiY2F0Y2hcIixcbiAgXCJpbnN0YW5jZW9mXCIsXG4gIFwid2l0aFwiLFxuICBcInRocm93XCIsXG4gIFwiY2FzZVwiLFxuICBcImRlZmF1bHRcIixcbiAgXCJ0cnlcIixcbiAgXCJzd2l0Y2hcIixcbiAgXCJjb250aW51ZVwiLFxuICBcInR5cGVvZlwiLFxuICBcImRlbGV0ZVwiLFxuICBcImxldFwiLFxuICBcInlpZWxkXCIsXG4gIFwiY29uc3RcIixcbiAgXCJjbGFzc1wiLFxuICAvLyBKUyBoYW5kbGVzIHRoZXNlIHdpdGggYSBzcGVjaWFsIHJ1bGVcbiAgLy8gXCJnZXRcIixcbiAgLy8gXCJzZXRcIixcbiAgXCJkZWJ1Z2dlclwiLFxuICBcImFzeW5jXCIsXG4gIFwiYXdhaXRcIixcbiAgXCJzdGF0aWNcIixcbiAgXCJpbXBvcnRcIixcbiAgXCJmcm9tXCIsXG4gIFwiZXhwb3J0XCIsXG4gIFwiZXh0ZW5kc1wiXG5dO1xuY29uc3QgTElURVJBTFMgPSBbXG4gIFwidHJ1ZVwiLFxuICBcImZhbHNlXCIsXG4gIFwibnVsbFwiLFxuICBcInVuZGVmaW5lZFwiLFxuICBcIk5hTlwiLFxuICBcIkluZmluaXR5XCJcbl07XG5cbmNvbnN0IFRZUEVTID0gW1xuICBcIkludGxcIixcbiAgXCJEYXRhVmlld1wiLFxuICBcIk51bWJlclwiLFxuICBcIk1hdGhcIixcbiAgXCJEYXRlXCIsXG4gIFwiU3RyaW5nXCIsXG4gIFwiUmVnRXhwXCIsXG4gIFwiT2JqZWN0XCIsXG4gIFwiRnVuY3Rpb25cIixcbiAgXCJCb29sZWFuXCIsXG4gIFwiRXJyb3JcIixcbiAgXCJTeW1ib2xcIixcbiAgXCJTZXRcIixcbiAgXCJNYXBcIixcbiAgXCJXZWFrU2V0XCIsXG4gIFwiV2Vha01hcFwiLFxuICBcIlByb3h5XCIsXG4gIFwiUmVmbGVjdFwiLFxuICBcIkpTT05cIixcbiAgXCJQcm9taXNlXCIsXG4gIFwiRmxvYXQ2NEFycmF5XCIsXG4gIFwiSW50MTZBcnJheVwiLFxuICBcIkludDMyQXJyYXlcIixcbiAgXCJJbnQ4QXJyYXlcIixcbiAgXCJVaW50MTZBcnJheVwiLFxuICBcIlVpbnQzMkFycmF5XCIsXG4gIFwiRmxvYXQzMkFycmF5XCIsXG4gIFwiQXJyYXlcIixcbiAgXCJVaW50OEFycmF5XCIsXG4gIFwiVWludDhDbGFtcGVkQXJyYXlcIixcbiAgXCJBcnJheUJ1ZmZlclwiXG5dO1xuXG5jb25zdCBFUlJPUl9UWVBFUyA9IFtcbiAgXCJFdmFsRXJyb3JcIixcbiAgXCJJbnRlcm5hbEVycm9yXCIsXG4gIFwiUmFuZ2VFcnJvclwiLFxuICBcIlJlZmVyZW5jZUVycm9yXCIsXG4gIFwiU3ludGF4RXJyb3JcIixcbiAgXCJUeXBlRXJyb3JcIixcbiAgXCJVUklFcnJvclwiXG5dO1xuXG5jb25zdCBCVUlMVF9JTl9HTE9CQUxTID0gW1xuICBcInNldEludGVydmFsXCIsXG4gIFwic2V0VGltZW91dFwiLFxuICBcImNsZWFySW50ZXJ2YWxcIixcbiAgXCJjbGVhclRpbWVvdXRcIixcblxuICBcInJlcXVpcmVcIixcbiAgXCJleHBvcnRzXCIsXG5cbiAgXCJldmFsXCIsXG4gIFwiaXNGaW5pdGVcIixcbiAgXCJpc05hTlwiLFxuICBcInBhcnNlRmxvYXRcIixcbiAgXCJwYXJzZUludFwiLFxuICBcImRlY29kZVVSSVwiLFxuICBcImRlY29kZVVSSUNvbXBvbmVudFwiLFxuICBcImVuY29kZVVSSVwiLFxuICBcImVuY29kZVVSSUNvbXBvbmVudFwiLFxuICBcImVzY2FwZVwiLFxuICBcInVuZXNjYXBlXCJcbl07XG5cbmNvbnN0IEJVSUxUX0lOX1ZBUklBQkxFUyA9IFtcbiAgXCJhcmd1bWVudHNcIixcbiAgXCJ0aGlzXCIsXG4gIFwic3VwZXJcIixcbiAgXCJjb25zb2xlXCIsXG4gIFwid2luZG93XCIsXG4gIFwiZG9jdW1lbnRcIixcbiAgXCJsb2NhbFN0b3JhZ2VcIixcbiAgXCJtb2R1bGVcIixcbiAgXCJnbG9iYWxcIiAvLyBOb2RlLmpzXG5dO1xuXG5jb25zdCBCVUlMVF9JTlMgPSBbXS5jb25jYXQoXG4gIEJVSUxUX0lOX0dMT0JBTFMsXG4gIEJVSUxUX0lOX1ZBUklBQkxFUyxcbiAgVFlQRVMsXG4gIEVSUk9SX1RZUEVTXG4pO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb29rYWhlYWQocmUpIHtcbiAgcmV0dXJuIGNvbmNhdCgnKD89JywgcmUsICcpJyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gb3B0aW9uYWwocmUpIHtcbiAgcmV0dXJuIGNvbmNhdCgnKCcsIHJlLCAnKT8nKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5yZWFjaGFibGUgKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGphdmFzY3JpcHQoaGxqcykge1xuICAvKipcbiAgICogVGFrZXMgYSBzdHJpbmcgbGlrZSBcIjxCb29nZXJcIiBhbmQgY2hlY2tzIHRvIHNlZVxuICAgKiBpZiB3ZSBjYW4gZmluZCBhIG1hdGNoaW5nIFwiPC9Cb29nZXJcIiBsYXRlciBpbiB0aGVcbiAgICogY29udGVudC5cbiAgICogQHBhcmFtIHtSZWdFeHBNYXRjaEFycmF5fSBtYXRjaFxuICAgKiBAcGFyYW0ge3thZnRlcjpudW1iZXJ9fSBwYXJhbTFcbiAgICovXG4gIGNvbnN0IGhhc0Nsb3NpbmdUYWcgPSAobWF0Y2gsIHsgYWZ0ZXIgfSkgPT4ge1xuICAgIGNvbnN0IHRhZyA9IG1hdGNoWzBdLnJlcGxhY2UoXCI8XCIsIFwiPC9cIik7XG4gICAgY29uc3QgcG9zID0gbWF0Y2guaW5wdXQuaW5kZXhPZih0YWcsIGFmdGVyKTtcbiAgICByZXR1cm4gcG9zICE9PSAtMTtcbiAgfTtcblxuICBjb25zdCBJREVOVF9SRSQxID0gSURFTlRfUkU7XG4gIGNvbnN0IEZSQUdNRU5UID0ge1xuICAgIGJlZ2luOiAnPD4nLFxuICAgIGVuZDogJzwvPidcbiAgfTtcbiAgY29uc3QgWE1MX1RBRyA9IHtcbiAgICBiZWdpbjogLzxbQS1aYS16MC05XFxcXC5fOi1dKy8sXG4gICAgZW5kOiAvXFwvW0EtWmEtejAtOVxcXFwuXzotXSs+fFxcLz4vLFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7UmVnRXhwTWF0Y2hBcnJheX0gbWF0Y2hcbiAgICAgKiBAcGFyYW0ge0NhbGxiYWNrUmVzcG9uc2V9IHJlc3BvbnNlXG4gICAgICovXG4gICAgaXNUcnVseU9wZW5pbmdUYWc6IChtYXRjaCwgcmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IGFmdGVyTWF0Y2hJbmRleCA9IG1hdGNoWzBdLmxlbmd0aCArIG1hdGNoLmluZGV4O1xuICAgICAgY29uc3QgbmV4dENoYXIgPSBtYXRjaC5pbnB1dFthZnRlck1hdGNoSW5kZXhdO1xuICAgICAgLy8gbmVzdGVkIHR5cGU/XG4gICAgICAvLyBIVE1MIHNob3VsZCBub3QgaW5jbHVkZSBhbm90aGVyIHJhdyBgPGAgaW5zaWRlIGEgdGFnXG4gICAgICAvLyBCdXQgYSB0eXBlIG1pZ2h0OiBgPEFycmF5PEFycmF5PG51bWJlcj4+YCwgZXRjLlxuICAgICAgaWYgKG5leHRDaGFyID09PSBcIjxcIikge1xuICAgICAgICByZXNwb25zZS5pZ25vcmVNYXRjaCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyA8c29tZXRoaW5nPlxuICAgICAgLy8gVGhpcyBpcyBub3cgZWl0aGVyIGEgdGFnIG9yIGEgdHlwZS5cbiAgICAgIGlmIChuZXh0Q2hhciA9PT0gXCI+XCIpIHtcbiAgICAgICAgLy8gaWYgd2UgY2Fubm90IGZpbmQgYSBtYXRjaGluZyBjbG9zaW5nIHRhZywgdGhlbiB3ZVxuICAgICAgICAvLyB3aWxsIGlnbm9yZSBpdFxuICAgICAgICBpZiAoIWhhc0Nsb3NpbmdUYWcobWF0Y2gsIHsgYWZ0ZXI6IGFmdGVyTWF0Y2hJbmRleCB9KSkge1xuICAgICAgICAgIHJlc3BvbnNlLmlnbm9yZU1hdGNoKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IEtFWVdPUkRTJDEgPSB7XG4gICAgJHBhdHRlcm46IElERU5UX1JFLFxuICAgIGtleXdvcmQ6IEtFWVdPUkRTLmpvaW4oXCIgXCIpLFxuICAgIGxpdGVyYWw6IExJVEVSQUxTLmpvaW4oXCIgXCIpLFxuICAgIGJ1aWx0X2luOiBCVUlMVF9JTlMuam9pbihcIiBcIilcbiAgfTtcbiAgY29uc3Qgbm9uRGVjaW1hbExpdGVyYWxzID0gKHByZWZpeExldHRlcnMsIHZhbGlkQ2hhcnMpID0+XG4gICAgYFxcXFxiMFske3ByZWZpeExldHRlcnN9XVske3ZhbGlkQ2hhcnN9XShbJHt2YWxpZENoYXJzfV9dKlske3ZhbGlkQ2hhcnN9XSk/bj9gO1xuICBjb25zdCBub0xlYWRpbmdaZXJvRGVjaW1hbERpZ2l0cyA9IC9bMS05XShbMC05X10qXFxkKT8vO1xuICBjb25zdCBkZWNpbWFsRGlnaXRzID0gL1xcZChbMC05X10qXFxkKT8vO1xuICBjb25zdCBleHBvbmVudFBhcnQgPSBjb25jYXQoL1tlRV1bKy1dPy8sIGRlY2ltYWxEaWdpdHMpO1xuICBjb25zdCBOVU1CRVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICB2YXJpYW50czogW1xuICAgICAgeyBiZWdpbjogbm9uRGVjaW1hbExpdGVyYWxzKCdiQicsICcwMScpIH0sIC8vIEJpbmFyeSBsaXRlcmFsc1xuICAgICAgeyBiZWdpbjogbm9uRGVjaW1hbExpdGVyYWxzKCdvTycsICcwLTcnKSB9LCAvLyBPY3RhbCBsaXRlcmFsc1xuICAgICAgeyBiZWdpbjogbm9uRGVjaW1hbExpdGVyYWxzKCd4WCcsICcwLTlhLWZBLUYnKSB9LCAvLyBIZXhhZGVjaW1hbCBsaXRlcmFsc1xuICAgICAgeyBiZWdpbjogY29uY2F0KC9cXGIvLCBub0xlYWRpbmdaZXJvRGVjaW1hbERpZ2l0cywgJ24nKSB9LCAvLyBOb24temVybyBCaWdJbnQgbGl0ZXJhbHNcbiAgICAgIHsgYmVnaW46IGNvbmNhdCgvKFxcYjApP1xcLi8sIGRlY2ltYWxEaWdpdHMsIG9wdGlvbmFsKGV4cG9uZW50UGFydCkpIH0sIC8vIERlY2ltYWwgbGl0ZXJhbHMgYmV0d2VlbiAwIGFuZCAxXG4gICAgICB7IGJlZ2luOiBjb25jYXQoXG4gICAgICAgIC9cXGIvLFxuICAgICAgICBub0xlYWRpbmdaZXJvRGVjaW1hbERpZ2l0cyxcbiAgICAgICAgb3B0aW9uYWwoY29uY2F0KC9cXC4vLCBvcHRpb25hbChkZWNpbWFsRGlnaXRzKSkpLCAvLyBmcmFjdGlvbmFsIHBhcnRcbiAgICAgICAgb3B0aW9uYWwoZXhwb25lbnRQYXJ0KVxuICAgICAgICApIH0sIC8vIERlY2ltYWwgbGl0ZXJhbHMgPj0gMVxuICAgICAgeyBiZWdpbjogL1xcYjBbXFwubl0/LyB9LCAvLyBaZXJvIGxpdGVyYWxzIChgMGAsIGAwLmAsIGAwbmApXG4gICAgXSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgY29uc3QgU1VCU1QgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIGJlZ2luOiAnXFxcXCRcXFxceycsXG4gICAgZW5kOiAnXFxcXH0nLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyQxLFxuICAgIGNvbnRhaW5zOiBbXSAvLyBkZWZpbmVkIGxhdGVyXG4gIH07XG4gIGNvbnN0IEhUTUxfVEVNUExBVEUgPSB7XG4gICAgYmVnaW46ICdodG1sYCcsXG4gICAgZW5kOiAnJyxcbiAgICBzdGFydHM6IHtcbiAgICAgIGVuZDogJ2AnLFxuICAgICAgcmV0dXJuRW5kOiBmYWxzZSxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgICAgU1VCU1RcbiAgICAgIF0sXG4gICAgICBzdWJMYW5ndWFnZTogJ3htbCdcbiAgICB9XG4gIH07XG4gIGNvbnN0IENTU19URU1QTEFURSA9IHtcbiAgICBiZWdpbjogJ2Nzc2AnLFxuICAgIGVuZDogJycsXG4gICAgc3RhcnRzOiB7XG4gICAgICBlbmQ6ICdgJyxcbiAgICAgIHJldHVybkVuZDogZmFsc2UsXG4gICAgICBjb250YWluczogW1xuICAgICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICAgIFNVQlNUXG4gICAgICBdLFxuICAgICAgc3ViTGFuZ3VhZ2U6ICdjc3MnXG4gICAgfVxuICB9O1xuICBjb25zdCBURU1QTEFURV9TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ2AnLFxuICAgIGVuZDogJ2AnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICBTVUJTVFxuICAgIF1cbiAgfTtcbiAgY29uc3QgSlNET0NfQ09NTUVOVCA9IGhsanMuQ09NTUVOVChcbiAgICAnL1xcXFwqXFxcXConLFxuICAgICdcXFxcKi8nLFxuICAgIHtcbiAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICAgIGJlZ2luOiAnQFtBLVphLXpdKycsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgICAgICAgIGJlZ2luOiAnXFxcXHsnLFxuICAgICAgICAgICAgICBlbmQ6ICdcXFxcfScsXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICAgICAgICBiZWdpbjogSURFTlRfUkUkMSArICcoPz1cXFxccyooLSl8JCknLFxuICAgICAgICAgICAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBlYXQgc3BhY2VzIChub3QgbmV3bGluZXMpIHNvIHdlIGNhbiBmaW5kXG4gICAgICAgICAgICAvLyB0eXBlcyBvciB2YXJpYWJsZXNcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC8oPz1bXlxcbl0pXFxzLyxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICApO1xuICBjb25zdCBDT01NRU5UID0ge1xuICAgIGNsYXNzTmFtZTogXCJjb21tZW50XCIsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIEpTRE9DX0NPTU1FTlQsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFXG4gICAgXVxuICB9O1xuICBjb25zdCBTVUJTVF9JTlRFUk5BTFMgPSBbXG4gICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgSFRNTF9URU1QTEFURSxcbiAgICBDU1NfVEVNUExBVEUsXG4gICAgVEVNUExBVEVfU1RSSU5HLFxuICAgIE5VTUJFUixcbiAgICBobGpzLlJFR0VYUF9NT0RFXG4gIF07XG4gIFNVQlNULmNvbnRhaW5zID0gU1VCU1RfSU5URVJOQUxTXG4gICAgLmNvbmNhdCh7XG4gICAgICAvLyB3ZSBuZWVkIHRvIHBhaXIgdXAge30gaW5zaWRlIG91ciBzdWJzdCB0byBwcmV2ZW50XG4gICAgICAvLyBpdCBmcm9tIGVuZGluZyB0b28gZWFybHkgYnkgbWF0Y2hpbmcgYW5vdGhlciB9XG4gICAgICBiZWdpbjogL3svLFxuICAgICAgZW5kOiAvfS8sXG4gICAgICBrZXl3b3JkczogS0VZV09SRFMkMSxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIFwic2VsZlwiXG4gICAgICBdLmNvbmNhdChTVUJTVF9JTlRFUk5BTFMpXG4gICAgfSk7XG4gIGNvbnN0IFNVQlNUX0FORF9DT01NRU5UUyA9IFtdLmNvbmNhdChDT01NRU5ULCBTVUJTVC5jb250YWlucyk7XG4gIGNvbnN0IFBBUkFNU19DT05UQUlOUyA9IFNVQlNUX0FORF9DT01NRU5UUy5jb25jYXQoW1xuICAgIC8vIGVhdCByZWN1cnNpdmUgcGFyZW5zIGluIHN1YiBleHByZXNzaW9uc1xuICAgIHtcbiAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgIGVuZDogL1xcKS8sXG4gICAgICBrZXl3b3JkczogS0VZV09SRFMkMSxcbiAgICAgIGNvbnRhaW5zOiBbXCJzZWxmXCJdLmNvbmNhdChTVUJTVF9BTkRfQ09NTUVOVFMpXG4gICAgfVxuICBdKTtcbiAgY29uc3QgUEFSQU1TID0ge1xuICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgYmVnaW46IC9cXCgvLFxuICAgIGVuZDogL1xcKS8sXG4gICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTJDEsXG4gICAgY29udGFpbnM6IFBBUkFNU19DT05UQUlOU1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0phdmFzY3JpcHQnLFxuICAgIGFsaWFzZXM6IFsnanMnLCAnanN4JywgJ21qcycsICdjanMnXSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMkMSxcbiAgICAvLyB0aGlzIHdpbGwgYmUgZXh0ZW5kZWQgYnkgVHlwZVNjcmlwdFxuICAgIGV4cG9ydHM6IHsgUEFSQU1TX0NPTlRBSU5TIH0sXG4gICAgaWxsZWdhbDogLyMoPyFbJF9BLXpdKS8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuU0hFQkFORyh7XG4gICAgICAgIGxhYmVsOiBcInNoZWJhbmdcIixcbiAgICAgICAgYmluYXJ5OiBcIm5vZGVcIixcbiAgICAgICAgcmVsZXZhbmNlOiA1XG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwidXNlX3N0cmljdFwiLFxuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMCxcbiAgICAgICAgYmVnaW46IC9eXFxzKlsnXCJddXNlIChzdHJpY3R8YXNtKVsnXCJdL1xuICAgICAgfSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBIVE1MX1RFTVBMQVRFLFxuICAgICAgQ1NTX1RFTVBMQVRFLFxuICAgICAgVEVNUExBVEVfU1RSSU5HLFxuICAgICAgQ09NTUVOVCxcbiAgICAgIE5VTUJFUixcbiAgICAgIHsgLy8gb2JqZWN0IGF0dHIgY29udGFpbmVyXG4gICAgICAgIGJlZ2luOiBjb25jYXQoL1t7LFxcbl1cXHMqLyxcbiAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGxvb2sgYWhlYWQgdG8gbWFrZSBzdXJlIHRoYXQgd2UgYWN0dWFsbHkgaGF2ZSBhblxuICAgICAgICAgIC8vIGF0dHJpYnV0ZSBjb21pbmcgdXAgc28gd2UgZG9uJ3Qgc3RlYWwgYSBjb21tYSBmcm9tIGEgcG90ZW50aWFsXG4gICAgICAgICAgLy8gXCJ2YWx1ZVwiIGNvbnRhaW5lclxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gTk9URTogdGhpcyBtaWdodCBub3Qgd29yayBob3cgeW91IHRoaW5rLiAgV2UgZG9uJ3QgYWN0dWFsbHkgYWx3YXlzXG4gICAgICAgICAgLy8gZW50ZXIgdGhpcyBtb2RlIGFuZCBzdGF5LiAgSW5zdGVhZCBpdCBtaWdodCBtZXJlbHkgbWF0Y2ggYCxcbiAgICAgICAgICAvLyA8Y29tbWVudHMgdXAgbmV4dD5gIGFuZCB0aGVuIGltbWVkaWF0ZWx5IGVuZCBhZnRlciB0aGUgLCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gZmFpbHMgdG8gZmluZCBhbnkgYWN0dWFsIGF0dHJzLiBCdXQgdGhpcyBzdGlsbCBkb2VzIHRoZSBqb2IgYmVjYXVzZVxuICAgICAgICAgIC8vIGl0IHByZXZlbnRzIHRoZSB2YWx1ZSBjb250YWluIHJ1bGUgZnJvbSBncmFiYmluZyB0aGlzIGluc3RlYWQgYW5kXG4gICAgICAgICAgLy8gcHJldmVuaW5nIHRoaXMgcnVsZSBmcm9tIGZpcmluZyB3aGVuIHdlIGFjdHVhbGx5IERPIGhhdmUga2V5cy5cbiAgICAgICAgICBsb29rYWhlYWQoY29uY2F0KFxuICAgICAgICAgICAgLy8gd2UgYWxzbyBuZWVkIHRvIGFsbG93IGZvciBtdWx0aXBsZSBwb3NzaWJsZSBjb21tZW50cyBpbmJldHdlZW5cbiAgICAgICAgICAgIC8vIHRoZSBmaXJzdCBrZXk6dmFsdWUgcGFpcmluZ1xuICAgICAgICAgICAgLyhcXC9cXC8uKiQpKi8sXG4gICAgICAgICAgICAvKFxcL1xcKigufFxcbikqXFwqXFwvKSovLFxuICAgICAgICAgICAgL1xccyovLFxuICAgICAgICAgICAgSURFTlRfUkUkMSArICdcXFxccyo6JykpKSxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICAgICAgYmVnaW46IElERU5UX1JFJDEgKyBsb29rYWhlYWQoJ1xcXFxzKjonKSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHsgLy8gXCJ2YWx1ZVwiIGNvbnRhaW5lclxuICAgICAgICBiZWdpbjogJygnICsgaGxqcy5SRV9TVEFSVEVSU19SRSArICd8XFxcXGIoY2FzZXxyZXR1cm58dGhyb3cpXFxcXGIpXFxcXHMqJyxcbiAgICAgICAga2V5d29yZHM6ICdyZXR1cm4gdGhyb3cgY2FzZScsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgQ09NTUVOVCxcbiAgICAgICAgICBobGpzLlJFR0VYUF9NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gY291bnQgdGhlIHBhcmVucyB0byBtYWtlIHN1cmUgd2UgYWN0dWFsbHkgaGF2ZSB0aGVcbiAgICAgICAgICAgIC8vIGNvcnJlY3QgYm91bmRpbmcgKCApIGJlZm9yZSB0aGUgPT4uICBUaGVyZSBjb3VsZCBiZSBhbnkgbnVtYmVyIG9mXG4gICAgICAgICAgICAvLyBzdWItZXhwcmVzc2lvbnMgaW5zaWRlIGFsc28gc3Vycm91bmRlZCBieSBwYXJlbnMuXG4gICAgICAgICAgICBiZWdpbjogJyhcXFxcKCcgK1xuICAgICAgICAgICAgJ1teKCldKihcXFxcKCcgK1xuICAgICAgICAgICAgJ1teKCldKihcXFxcKCcgK1xuICAgICAgICAgICAgJ1teKCldKicgK1xuICAgICAgICAgICAgJ1xcXFwpKSpbXigpXSonICtcbiAgICAgICAgICAgICdcXFxcKSkqW14oKV0qJyArXG4gICAgICAgICAgICAnXFxcXCl8JyArIGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSArICcpXFxcXHMqPT4nLFxuICAgICAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgICAgICBlbmQ6ICdcXFxccyo9PicsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiAvXFwoXFxzKlxcKS8sXG4gICAgICAgICAgICAgICAgICAgIHNraXA6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBrZXl3b3JkczogS0VZV09SRFMkMSxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbnM6IFBBUkFNU19DT05UQUlOU1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyAvLyBjb3VsZCBiZSBhIGNvbW1hIGRlbGltaXRlZCBsaXN0IG9mIHBhcmFtcyB0byBhIGZ1bmN0aW9uIGNhbGxcbiAgICAgICAgICAgIGJlZ2luOiAvLC8sIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXFxzLyxcbiAgICAgICAgICAgIGVuZDogL1xccyovLFxuICAgICAgICAgICAgc2tpcDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyAvLyBKU1hcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHsgYmVnaW46IEZSQUdNRU5ULmJlZ2luLCBlbmQ6IEZSQUdNRU5ULmVuZCB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IFhNTF9UQUcuYmVnaW4sXG4gICAgICAgICAgICAgICAgLy8gd2UgY2FyZWZ1bGx5IGNoZWNrIHRoZSBvcGVuaW5nIHRhZyB0byBzZWUgaWYgaXQgdHJ1bHlcbiAgICAgICAgICAgICAgICAvLyBpcyBhIHRhZyBhbmQgbm90IGEgZmFsc2UgcG9zaXRpdmVcbiAgICAgICAgICAgICAgICAnb246YmVnaW4nOiBYTUxfVEFHLmlzVHJ1bHlPcGVuaW5nVGFnLFxuICAgICAgICAgICAgICAgIGVuZDogWE1MX1RBRy5lbmRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogWE1MX1RBRy5iZWdpbixcbiAgICAgICAgICAgICAgICBlbmQ6IFhNTF9UQUcuZW5kLFxuICAgICAgICAgICAgICAgIHNraXA6IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFsnc2VsZiddXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24nLFxuICAgICAgICBlbmQ6IC9beztdLyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAga2V5d29yZHM6IEtFWVdPUkRTJDEsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgJ3NlbGYnLFxuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHsgYmVnaW46IElERU5UX1JFJDEgfSksXG4gICAgICAgICAgUEFSQU1TXG4gICAgICAgIF0sXG4gICAgICAgIGlsbGVnYWw6IC8lL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIGNvdW50IHRoZSBwYXJlbnMgdG8gbWFrZSBzdXJlIHdlIGFjdHVhbGx5IGhhdmUgdGhlIGNvcnJlY3RcbiAgICAgICAgLy8gYm91bmRpbmcgKCApLiAgVGhlcmUgY291bGQgYmUgYW55IG51bWJlciBvZiBzdWItZXhwcmVzc2lvbnMgaW5zaWRlXG4gICAgICAgIC8vIGFsc28gc3Vycm91bmRlZCBieSBwYXJlbnMuXG4gICAgICAgIGJlZ2luOiBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUgK1xuICAgICAgICAgICdcXFxcKCcgKyAvLyBmaXJzdCBwYXJlbnNcbiAgICAgICAgICAnW14oKV0qKFxcXFwoJyArXG4gICAgICAgICAgICAnW14oKV0qKFxcXFwoJyArXG4gICAgICAgICAgICAgICdbXigpXSonICtcbiAgICAgICAgICAgICdcXFxcKSkqW14oKV0qJyArXG4gICAgICAgICAgJ1xcXFwpKSpbXigpXSonICtcbiAgICAgICAgICAnXFxcXClcXFxccyp7JywgLy8gZW5kIHBhcmVuc1xuICAgICAgICByZXR1cm5CZWdpbjp0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIFBBUkFNUyxcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7IGJlZ2luOiBJREVOVF9SRSQxIH0pLFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgLy8gaGFjazogcHJldmVudHMgZGV0ZWN0aW9uIG9mIGtleXdvcmRzIGluIHNvbWUgY2lyY3Vtc3RhbmNlc1xuICAgICAgLy8gLmtleXdvcmQoKVxuICAgICAgLy8gJGtleXdvcmQgPSB4XG4gICAgICB7XG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgeyBiZWdpbjogJ1xcXFwuJyArIElERU5UX1JFJDEgfSxcbiAgICAgICAgICB7IGJlZ2luOiAnXFxcXCQnICsgSURFTlRfUkUkMSB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHsgLy8gRVM2IGNsYXNzXG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzJyxcbiAgICAgICAgZW5kOiAvW3s7PV0vLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiAvWzpcIlxcW1xcXV0vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHsgYmVnaW5LZXl3b3JkczogJ2V4dGVuZHMnIH0sXG4gICAgICAgICAgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXGIoPz1jb25zdHJ1Y3RvcikvLFxuICAgICAgICBlbmQ6IC9bXFx7O10vLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHsgYmVnaW46IElERU5UX1JFJDEgfSksXG4gICAgICAgICAgJ3NlbGYnLFxuICAgICAgICAgIFBBUkFNU1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJyhnZXR8c2V0KVxcXFxzKyg/PScgKyBJREVOVF9SRSQxICsgJ1xcXFwoKScsXG4gICAgICAgIGVuZDogL3svLFxuICAgICAgICBrZXl3b3JkczogXCJnZXQgc2V0XCIsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwgeyBiZWdpbjogSURFTlRfUkUkMSB9KSxcbiAgICAgICAgICB7IGJlZ2luOiAvXFwoXFwpLyB9LCAvLyBlYXQgdG8gYXZvaWQgZW1wdHkgcGFyYW1zXG4gICAgICAgICAgUEFSQU1TXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwkWyguXS8gLy8gcmVsZXZhbmNlIGJvb3N0ZXIgZm9yIGEgcGF0dGVybiBjb21tb24gdG8gSlMgbGliczogYCQoc29tZXRoaW5nKWAgYW5kIGAkLnNvbWV0aGluZ2BcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbi8qXG5MYW5ndWFnZTogVHlwZVNjcmlwdFxuQXV0aG9yOiBQYW51IEhvcnNtYWxhaHRpIDxwYW51LmhvcnNtYWxhaHRpQGlraS5maT5cbkNvbnRyaWJ1dG9yczogSWtlIEt1IDxkZW1wZmlAeWFob28uY29tPlxuRGVzY3JpcHRpb246IFR5cGVTY3JpcHQgaXMgYSBzdHJpY3Qgc3VwZXJzZXQgb2YgSmF2YVNjcmlwdFxuV2Vic2l0ZTogaHR0cHM6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnXG5DYXRlZ29yeTogY29tbW9uLCBzY3JpcHRpbmdcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiB0eXBlc2NyaXB0KGhsanMpIHtcbiAgY29uc3QgSURFTlRfUkUkMSA9IElERU5UX1JFO1xuICBjb25zdCBOQU1FU1BBQ0UgPSB7XG4gICAgYmVnaW5LZXl3b3JkczogJ25hbWVzcGFjZScsIGVuZDogL1xcey8sIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgfTtcbiAgY29uc3QgSU5URVJGQUNFID0ge1xuICAgIGJlZ2luS2V5d29yZHM6ICdpbnRlcmZhY2UnLCBlbmQ6IC9cXHsvLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgIGtleXdvcmRzOiAnaW50ZXJmYWNlIGV4dGVuZHMnXG4gIH07XG4gIGNvbnN0IFVTRV9TVFJJQ1QgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgcmVsZXZhbmNlOiAxMCxcbiAgICBiZWdpbjogL15cXHMqWydcIl11c2Ugc3RyaWN0WydcIl0vXG4gIH07XG4gIGNvbnN0IFRZUEVTID0gW1xuICAgIFwiYW55XCIsXG4gICAgXCJ2b2lkXCIsXG4gICAgXCJudW1iZXJcIixcbiAgICBcImJvb2xlYW5cIixcbiAgICBcInN0cmluZ1wiLFxuICAgIFwib2JqZWN0XCIsXG4gICAgXCJuZXZlclwiLFxuICAgIFwiZW51bVwiXG4gIF07XG4gIGNvbnN0IFRTX1NQRUNJRklDX0tFWVdPUkRTID0gW1xuICAgIFwidHlwZVwiLFxuICAgIFwibmFtZXNwYWNlXCIsXG4gICAgXCJ0eXBlZGVmXCIsXG4gICAgXCJpbnRlcmZhY2VcIixcbiAgICBcInB1YmxpY1wiLFxuICAgIFwicHJpdmF0ZVwiLFxuICAgIFwicHJvdGVjdGVkXCIsXG4gICAgXCJpbXBsZW1lbnRzXCIsXG4gICAgXCJkZWNsYXJlXCIsXG4gICAgXCJhYnN0cmFjdFwiLFxuICAgIFwicmVhZG9ubHlcIlxuICBdO1xuICBjb25zdCBLRVlXT1JEUyQxID0ge1xuICAgICRwYXR0ZXJuOiBJREVOVF9SRSxcbiAgICBrZXl3b3JkOiBLRVlXT1JEUy5jb25jYXQoVFNfU1BFQ0lGSUNfS0VZV09SRFMpLmpvaW4oXCIgXCIpLFxuICAgIGxpdGVyYWw6IExJVEVSQUxTLmpvaW4oXCIgXCIpLFxuICAgIGJ1aWx0X2luOiBCVUlMVF9JTlMuY29uY2F0KFRZUEVTKS5qb2luKFwiIFwiKVxuICB9O1xuICBjb25zdCBERUNPUkFUT1IgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46ICdAJyArIElERU5UX1JFJDEsXG4gIH07XG5cbiAgY29uc3Qgc3dhcE1vZGUgPSAobW9kZSwgbGFiZWwsIHJlcGxhY2VtZW50KSA9PiB7XG4gICAgY29uc3QgaW5keCA9IG1vZGUuY29udGFpbnMuZmluZEluZGV4KG0gPT4gbS5sYWJlbCA9PT0gbGFiZWwpO1xuICAgIGlmIChpbmR4ID09PSAtMSkgeyB0aHJvdyBuZXcgRXJyb3IoXCJjYW4gbm90IGZpbmQgbW9kZSB0byByZXBsYWNlXCIpOyB9XG4gICAgbW9kZS5jb250YWlucy5zcGxpY2UoaW5keCwgMSwgcmVwbGFjZW1lbnQpO1xuICB9O1xuXG4gIGNvbnN0IHRzTGFuZ3VhZ2UgPSBqYXZhc2NyaXB0KGhsanMpO1xuXG4gIC8vIHRoaXMgc2hvdWxkIHVwZGF0ZSBhbnl3aGVyZSBrZXl3b3JkcyBpcyB1c2VkIHNpbmNlXG4gIC8vIGl0IHdpbGwgYmUgdGhlIHNhbWUgYWN0dWFsIEpTIG9iamVjdFxuICBPYmplY3QuYXNzaWduKHRzTGFuZ3VhZ2Uua2V5d29yZHMsIEtFWVdPUkRTJDEpO1xuXG4gIHRzTGFuZ3VhZ2UuZXhwb3J0cy5QQVJBTVNfQ09OVEFJTlMucHVzaChERUNPUkFUT1IpO1xuICB0c0xhbmd1YWdlLmNvbnRhaW5zID0gdHNMYW5ndWFnZS5jb250YWlucy5jb25jYXQoW1xuICAgIERFQ09SQVRPUixcbiAgICBOQU1FU1BBQ0UsXG4gICAgSU5URVJGQUNFLFxuICBdKTtcblxuICAvLyBUUyBnZXRzIGEgc2ltcGxlciBzaGViYW5nIHJ1bGUgdGhhbiBKU1xuICBzd2FwTW9kZSh0c0xhbmd1YWdlLCBcInNoZWJhbmdcIiwgaGxqcy5TSEVCQU5HKCkpO1xuICAvLyBKUyB1c2Ugc3RyaWN0IHJ1bGUgcHVycG9zZWx5IGV4Y2x1ZGVzIGBhc21gIHdoaWNoIG1ha2VzIG5vIHNlbnNlXG4gIHN3YXBNb2RlKHRzTGFuZ3VhZ2UsIFwidXNlX3N0cmljdFwiLCBVU0VfU1RSSUNUKTtcblxuICBjb25zdCBmdW5jdGlvbkRlY2xhcmF0aW9uID0gdHNMYW5ndWFnZS5jb250YWlucy5maW5kKG0gPT4gbS5jbGFzc05hbWUgPT09IFwiZnVuY3Rpb25cIik7XG4gIGZ1bmN0aW9uRGVjbGFyYXRpb24ucmVsZXZhbmNlID0gMDsgLy8gKCkgPT4ge30gaXMgbW9yZSB0eXBpY2FsIGluIFR5cGVTY3JpcHRcblxuICBPYmplY3QuYXNzaWduKHRzTGFuZ3VhZ2UsIHtcbiAgICBuYW1lOiAnVHlwZVNjcmlwdCcsXG4gICAgYWxpYXNlczogWyd0cyddXG4gIH0pO1xuXG4gIHJldHVybiB0c0xhbmd1YWdlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVzY3JpcHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9