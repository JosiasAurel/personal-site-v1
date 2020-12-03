(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_htmlbars"],{

/***/ "./node_modules/highlight.js/lib/languages/htmlbars.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/htmlbars.js ***!
  \*************************************************************/
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
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/*
Language: Handlebars
Requires: xml.js
Author: Robin Ward <robin.ward@gmail.com>
Description: Matcher for Handlebars as well as EmberJS additions.
Website: https://handlebarsjs.com
Category: template
*/

function handlebars(hljs) {
  const BUILT_INS = {
    'builtin-name': [
      'action',
      'bindattr',
      'collection',
      'component',
      'concat',
      'debugger',
      'each',
      'each-in',
      'get',
      'hash',
      'if',
      'in',
      'input',
      'link-to',
      'loc',
      'log',
      'lookup',
      'mut',
      'outlet',
      'partial',
      'query-params',
      'render',
      'template',
      'textarea',
      'unbound',
      'unless',
      'view',
      'with',
      'yield'
    ].join(" ")
  };

  const LITERALS = {
    literal: [
      'true',
      'false',
      'undefined',
      'null'
    ].join(" ")
  };

  // as defined in https://handlebarsjs.com/guide/expressions.html#literal-segments
  // this regex matches literal segments like ' abc ' or [ abc ] as well as helpers and paths
  // like a/b, ./abc/cde, and abc.bcd

  const DOUBLE_QUOTED_ID_REGEX=/".*?"/;
  const SINGLE_QUOTED_ID_REGEX=/'.*?'/;
  const BRACKET_QUOTED_ID_REGEX=/\[.*?\]/;
  const PLAIN_ID_REGEX=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/;
  const PATH_DELIMITER_REGEX=/\.|\//;

  const IDENTIFIER_REGEX = concat(
    '(',
    SINGLE_QUOTED_ID_REGEX, '|',
    DOUBLE_QUOTED_ID_REGEX, '|',
    BRACKET_QUOTED_ID_REGEX, '|',
    PLAIN_ID_REGEX, '|',
    PATH_DELIMITER_REGEX,
    ')+'
  );

  // identifier followed by a equal-sign (without the equal sign)
  const HASH_PARAM_REGEX = concat(
    '(',
    BRACKET_QUOTED_ID_REGEX, '|',
    PLAIN_ID_REGEX,
    ')(?==)'
  );

  const HELPER_NAME_OR_PATH_EXPRESSION = {
    begin: IDENTIFIER_REGEX,
    lexemes: /[\w.\/]+/
  };

  const HELPER_PARAMETER = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
    keywords: LITERALS
  });

  const SUB_EXPRESSION = {
    begin: /\(/,
    end: /\)/
    // the "contains" is added below when all necessary sub-modes are defined
  };

  const HASH = {
    // fka "attribute-assignment", parameters of the form 'key=value'
    className: 'attr',
    begin: HASH_PARAM_REGEX,
    relevance: 0,
    starts: {
      begin: /=/,
      end: /=/,
      starts: {
        contains: [
          hljs.NUMBER_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          HELPER_PARAMETER,
          SUB_EXPRESSION
        ]
      }
    }
  };

  const BLOCK_PARAMS = {
    // parameters of the form '{{#with x as | y |}}...{{/with}}'
    begin: /as\s+\|/,
    keywords: { keyword: 'as' },
    end: /\|/,
    contains: [
      {
        // define sub-mode in order to prevent highlighting of block-parameter named "as"
        begin: /\w+/
      }
    ]
  };

  const HELPER_PARAMETERS = {
    contains: [
      hljs.NUMBER_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      BLOCK_PARAMS,
      HASH,
      HELPER_PARAMETER,
      SUB_EXPRESSION
    ],
    returnEnd: true
    // the property "end" is defined through inheritance when the mode is used. If depends
    // on the surrounding mode, but "endsWithParent" does not work here (i.e. it includes the
    // end-token of the surrounding mode)
  };

  const SUB_EXPRESSION_CONTENTS = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
    className: 'name',
    keywords: BUILT_INS,
    starts: hljs.inherit(HELPER_PARAMETERS, {
      end: /\)/,
    })
  });

  SUB_EXPRESSION.contains = [
    SUB_EXPRESSION_CONTENTS
  ];

  const OPENING_BLOCK_MUSTACHE_CONTENTS = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
    keywords: BUILT_INS,
    className: 'name',
    starts: hljs.inherit(HELPER_PARAMETERS, {
      end: /}}/,
    })
  });

  const CLOSING_BLOCK_MUSTACHE_CONTENTS = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
    keywords: BUILT_INS,
    className: 'name'
  });

  const BASIC_MUSTACHE_CONTENTS = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
    className: 'name',
    keywords: BUILT_INS,
    starts: hljs.inherit(HELPER_PARAMETERS, {
      end: /}}/,
    })
  });

  const ESCAPE_MUSTACHE_WITH_PRECEEDING_BACKSLASH = {begin: /\\\{\{/, skip: true};
  const PREVENT_ESCAPE_WITH_ANOTHER_PRECEEDING_BACKSLASH = {begin: /\\\\(?=\{\{)/, skip: true};

  return {
    name: 'Handlebars',
    aliases: ['hbs', 'html.hbs', 'html.handlebars', 'htmlbars'],
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [
      ESCAPE_MUSTACHE_WITH_PRECEEDING_BACKSLASH,
      PREVENT_ESCAPE_WITH_ANOTHER_PRECEEDING_BACKSLASH,
      hljs.COMMENT(/\{\{!--/, /--\}\}/),
      hljs.COMMENT(/\{\{!/, /\}\}/),
      {
        // open raw block "{{{{raw}}}} content not evaluated {{{{/raw}}}}"
        className: 'template-tag',
        begin: /\{\{\{\{(?!\/)/,
        end: /\}\}\}\}/,
        contains: [OPENING_BLOCK_MUSTACHE_CONTENTS],
        starts: {end: /\{\{\{\{\//, returnEnd: true, subLanguage: 'xml'}
      },
      {
        // close raw block
        className: 'template-tag',
        begin: /\{\{\{\{\//,
        end: /\}\}\}\}/,
        contains: [CLOSING_BLOCK_MUSTACHE_CONTENTS]
      },
      {
        // open block statement
        className: 'template-tag',
        begin: /\{\{#/,
        end: /\}\}/,
        contains: [OPENING_BLOCK_MUSTACHE_CONTENTS],
      },
      {
        className: 'template-tag',
        begin: /\{\{(?=else\}\})/,
        end: /\}\}/,
        keywords: 'else'
      },
      {
        className: 'template-tag',
        begin: /\{\{(?=else if)/,
        end: /\}\}/,
        keywords: 'else if'
      },
      {
        // closing block statement
        className: 'template-tag',
        begin: /\{\{\//,
        end: /\}\}/,
        contains: [CLOSING_BLOCK_MUSTACHE_CONTENTS],
      },
      {
        // template variable or helper-call that is NOT html-escaped
        className: 'template-variable',
        begin: /\{\{\{/,
        end: /\}\}\}/,
        contains: [BASIC_MUSTACHE_CONTENTS]
      },
      {
        // template variable or helper-call that is html-escaped
        className: 'template-variable',
        begin: /\{\{/,
        end: /\}\}/,
        contains: [BASIC_MUSTACHE_CONTENTS]
      }
    ]
  };
}

/*
 Language: HTMLBars (legacy)
 Requires: xml.js
 Description: Matcher for Handlebars as well as EmberJS additions.
 Website: https://github.com/tildeio/htmlbars
 Category: template
 */

function htmlbars(hljs) {
  const definition = handlebars(hljs);

  definition.name = "HTMLbars";

  // HACK: This lets handlebars do the auto-detection if it's been loaded (by
  // default the build script will load in alphabetical order) and if not (perhaps
  // an install is only using `htmlbars`, not `handlebars`) then this will still
  // allow HTMLBars to participate in the auto-detection

  // worse case someone will have HTMLbars and handlebars competing for the same
  // content and will need to change their setup to only require handlebars, but
  // I don't consider this a breaking change
  if (hljs.getLanguage("handlebars")) {
    definition.disableAutodetect = true;
  }

  return definition
}

module.exports = htmlbars;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2h0bWxiYXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsYUFBYSxFQUFFO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLGtCQUFrQixLQUFLLE9BQU87QUFDL0Q7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLEdBQUc7O0FBRUgscURBQXFELFlBQVksRUFBRTtBQUNuRSw0REFBNEQsaUJBQWlCLEVBQUU7O0FBRS9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsRUFBRSxXQUFXLEVBQUU7QUFDckMsc0JBQXNCLEVBQUUsT0FBTyxFQUFFO0FBQ2pDO0FBQ0EsK0JBQStCLE9BQU8sMkJBQTJCLFFBQVE7QUFDekU7QUFDQSxrQkFBa0IsRUFBRSxFQUFFLEVBQUU7QUFDeEIsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFO0FBQ3RCO0FBQ0EsaUJBQWlCLFFBQVEsRUFBRSxFQUFFLEVBQUU7QUFDL0IsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixFQUFFLEVBQUUsRUFBRTtBQUN4QixnQkFBZ0IsRUFBRSxFQUFFLEVBQUU7QUFDdEI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLEVBQUU7QUFDcEIsZ0JBQWdCLEVBQUU7QUFDbEI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQixFQUFFLFNBQVMsRUFBRTtBQUMvQixnQkFBZ0IsRUFBRTtBQUNsQjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esa0JBQWtCLEVBQUU7QUFDcEIsZ0JBQWdCLEVBQUU7QUFDbEI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLEVBQUU7QUFDcEIsZ0JBQWdCLEVBQUU7QUFDbEI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLEVBQUUsRUFBRTtBQUN0QixnQkFBZ0IsRUFBRSxFQUFFO0FBQ3BCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixFQUFFO0FBQ3BCLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2h0bWxiYXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtSZWdFeHB9XG4gKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNvdXJjZShyZSkge1xuICBpZiAoIXJlKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiByZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHJlO1xuXG4gIHJldHVybiByZS5zb3VyY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHsuLi4oUmVnRXhwIHwgc3RyaW5nKSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9IGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJcIik7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qXG5MYW5ndWFnZTogSGFuZGxlYmFyc1xuUmVxdWlyZXM6IHhtbC5qc1xuQXV0aG9yOiBSb2JpbiBXYXJkIDxyb2Jpbi53YXJkQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBNYXRjaGVyIGZvciBIYW5kbGViYXJzIGFzIHdlbGwgYXMgRW1iZXJKUyBhZGRpdGlvbnMuXG5XZWJzaXRlOiBodHRwczovL2hhbmRsZWJhcnNqcy5jb21cbkNhdGVnb3J5OiB0ZW1wbGF0ZVxuKi9cblxuZnVuY3Rpb24gaGFuZGxlYmFycyhobGpzKSB7XG4gIGNvbnN0IEJVSUxUX0lOUyA9IHtcbiAgICAnYnVpbHRpbi1uYW1lJzogW1xuICAgICAgJ2FjdGlvbicsXG4gICAgICAnYmluZGF0dHInLFxuICAgICAgJ2NvbGxlY3Rpb24nLFxuICAgICAgJ2NvbXBvbmVudCcsXG4gICAgICAnY29uY2F0JyxcbiAgICAgICdkZWJ1Z2dlcicsXG4gICAgICAnZWFjaCcsXG4gICAgICAnZWFjaC1pbicsXG4gICAgICAnZ2V0JyxcbiAgICAgICdoYXNoJyxcbiAgICAgICdpZicsXG4gICAgICAnaW4nLFxuICAgICAgJ2lucHV0JyxcbiAgICAgICdsaW5rLXRvJyxcbiAgICAgICdsb2MnLFxuICAgICAgJ2xvZycsXG4gICAgICAnbG9va3VwJyxcbiAgICAgICdtdXQnLFxuICAgICAgJ291dGxldCcsXG4gICAgICAncGFydGlhbCcsXG4gICAgICAncXVlcnktcGFyYW1zJyxcbiAgICAgICdyZW5kZXInLFxuICAgICAgJ3RlbXBsYXRlJyxcbiAgICAgICd0ZXh0YXJlYScsXG4gICAgICAndW5ib3VuZCcsXG4gICAgICAndW5sZXNzJyxcbiAgICAgICd2aWV3JyxcbiAgICAgICd3aXRoJyxcbiAgICAgICd5aWVsZCdcbiAgICBdLmpvaW4oXCIgXCIpXG4gIH07XG5cbiAgY29uc3QgTElURVJBTFMgPSB7XG4gICAgbGl0ZXJhbDogW1xuICAgICAgJ3RydWUnLFxuICAgICAgJ2ZhbHNlJyxcbiAgICAgICd1bmRlZmluZWQnLFxuICAgICAgJ251bGwnXG4gICAgXS5qb2luKFwiIFwiKVxuICB9O1xuXG4gIC8vIGFzIGRlZmluZWQgaW4gaHR0cHM6Ly9oYW5kbGViYXJzanMuY29tL2d1aWRlL2V4cHJlc3Npb25zLmh0bWwjbGl0ZXJhbC1zZWdtZW50c1xuICAvLyB0aGlzIHJlZ2V4IG1hdGNoZXMgbGl0ZXJhbCBzZWdtZW50cyBsaWtlICcgYWJjICcgb3IgWyBhYmMgXSBhcyB3ZWxsIGFzIGhlbHBlcnMgYW5kIHBhdGhzXG4gIC8vIGxpa2UgYS9iLCAuL2FiYy9jZGUsIGFuZCBhYmMuYmNkXG5cbiAgY29uc3QgRE9VQkxFX1FVT1RFRF9JRF9SRUdFWD0vXCIuKj9cIi87XG4gIGNvbnN0IFNJTkdMRV9RVU9URURfSURfUkVHRVg9LycuKj8nLztcbiAgY29uc3QgQlJBQ0tFVF9RVU9URURfSURfUkVHRVg9L1xcWy4qP1xcXS87XG4gIGNvbnN0IFBMQUlOX0lEX1JFR0VYPS9bXlxccyFcIiMlJicoKSorLC5cXC87PD0+QFxcW1xcXFxcXF1eYHt8fX5dKy87XG4gIGNvbnN0IFBBVEhfREVMSU1JVEVSX1JFR0VYPS9cXC58XFwvLztcblxuICBjb25zdCBJREVOVElGSUVSX1JFR0VYID0gY29uY2F0KFxuICAgICcoJyxcbiAgICBTSU5HTEVfUVVPVEVEX0lEX1JFR0VYLCAnfCcsXG4gICAgRE9VQkxFX1FVT1RFRF9JRF9SRUdFWCwgJ3wnLFxuICAgIEJSQUNLRVRfUVVPVEVEX0lEX1JFR0VYLCAnfCcsXG4gICAgUExBSU5fSURfUkVHRVgsICd8JyxcbiAgICBQQVRIX0RFTElNSVRFUl9SRUdFWCxcbiAgICAnKSsnXG4gICk7XG5cbiAgLy8gaWRlbnRpZmllciBmb2xsb3dlZCBieSBhIGVxdWFsLXNpZ24gKHdpdGhvdXQgdGhlIGVxdWFsIHNpZ24pXG4gIGNvbnN0IEhBU0hfUEFSQU1fUkVHRVggPSBjb25jYXQoXG4gICAgJygnLFxuICAgIEJSQUNLRVRfUVVPVEVEX0lEX1JFR0VYLCAnfCcsXG4gICAgUExBSU5fSURfUkVHRVgsXG4gICAgJykoPz09KSdcbiAgKTtcblxuICBjb25zdCBIRUxQRVJfTkFNRV9PUl9QQVRIX0VYUFJFU1NJT04gPSB7XG4gICAgYmVnaW46IElERU5USUZJRVJfUkVHRVgsXG4gICAgbGV4ZW1lczogL1tcXHcuXFwvXSsvXG4gIH07XG5cbiAgY29uc3QgSEVMUEVSX1BBUkFNRVRFUiA9IGhsanMuaW5oZXJpdChIRUxQRVJfTkFNRV9PUl9QQVRIX0VYUFJFU1NJT04sIHtcbiAgICBrZXl3b3JkczogTElURVJBTFNcbiAgfSk7XG5cbiAgY29uc3QgU1VCX0VYUFJFU1NJT04gPSB7XG4gICAgYmVnaW46IC9cXCgvLFxuICAgIGVuZDogL1xcKS9cbiAgICAvLyB0aGUgXCJjb250YWluc1wiIGlzIGFkZGVkIGJlbG93IHdoZW4gYWxsIG5lY2Vzc2FyeSBzdWItbW9kZXMgYXJlIGRlZmluZWRcbiAgfTtcblxuICBjb25zdCBIQVNIID0ge1xuICAgIC8vIGZrYSBcImF0dHJpYnV0ZS1hc3NpZ25tZW50XCIsIHBhcmFtZXRlcnMgb2YgdGhlIGZvcm0gJ2tleT12YWx1ZSdcbiAgICBjbGFzc05hbWU6ICdhdHRyJyxcbiAgICBiZWdpbjogSEFTSF9QQVJBTV9SRUdFWCxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgc3RhcnRzOiB7XG4gICAgICBiZWdpbjogLz0vLFxuICAgICAgZW5kOiAvPS8sXG4gICAgICBzdGFydHM6IHtcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLk5VTUJFUl9NT0RFLFxuICAgICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICAgIEhFTFBFUl9QQVJBTUVURVIsXG4gICAgICAgICAgU1VCX0VYUFJFU1NJT05cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBCTE9DS19QQVJBTVMgPSB7XG4gICAgLy8gcGFyYW1ldGVycyBvZiB0aGUgZm9ybSAne3sjd2l0aCB4IGFzIHwgeSB8fX0uLi57ey93aXRofX0nXG4gICAgYmVnaW46IC9hc1xccytcXHwvLFxuICAgIGtleXdvcmRzOiB7IGtleXdvcmQ6ICdhcycgfSxcbiAgICBlbmQ6IC9cXHwvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIC8vIGRlZmluZSBzdWItbW9kZSBpbiBvcmRlciB0byBwcmV2ZW50IGhpZ2hsaWdodGluZyBvZiBibG9jay1wYXJhbWV0ZXIgbmFtZWQgXCJhc1wiXG4gICAgICAgIGJlZ2luOiAvXFx3Ky9cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgSEVMUEVSX1BBUkFNRVRFUlMgPSB7XG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuTlVNQkVSX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgQkxPQ0tfUEFSQU1TLFxuICAgICAgSEFTSCxcbiAgICAgIEhFTFBFUl9QQVJBTUVURVIsXG4gICAgICBTVUJfRVhQUkVTU0lPTlxuICAgIF0sXG4gICAgcmV0dXJuRW5kOiB0cnVlXG4gICAgLy8gdGhlIHByb3BlcnR5IFwiZW5kXCIgaXMgZGVmaW5lZCB0aHJvdWdoIGluaGVyaXRhbmNlIHdoZW4gdGhlIG1vZGUgaXMgdXNlZC4gSWYgZGVwZW5kc1xuICAgIC8vIG9uIHRoZSBzdXJyb3VuZGluZyBtb2RlLCBidXQgXCJlbmRzV2l0aFBhcmVudFwiIGRvZXMgbm90IHdvcmsgaGVyZSAoaS5lLiBpdCBpbmNsdWRlcyB0aGVcbiAgICAvLyBlbmQtdG9rZW4gb2YgdGhlIHN1cnJvdW5kaW5nIG1vZGUpXG4gIH07XG5cbiAgY29uc3QgU1VCX0VYUFJFU1NJT05fQ09OVEVOVFMgPSBobGpzLmluaGVyaXQoSEVMUEVSX05BTUVfT1JfUEFUSF9FWFBSRVNTSU9OLCB7XG4gICAgY2xhc3NOYW1lOiAnbmFtZScsXG4gICAga2V5d29yZHM6IEJVSUxUX0lOUyxcbiAgICBzdGFydHM6IGhsanMuaW5oZXJpdChIRUxQRVJfUEFSQU1FVEVSUywge1xuICAgICAgZW5kOiAvXFwpLyxcbiAgICB9KVxuICB9KTtcblxuICBTVUJfRVhQUkVTU0lPTi5jb250YWlucyA9IFtcbiAgICBTVUJfRVhQUkVTU0lPTl9DT05URU5UU1xuICBdO1xuXG4gIGNvbnN0IE9QRU5JTkdfQkxPQ0tfTVVTVEFDSEVfQ09OVEVOVFMgPSBobGpzLmluaGVyaXQoSEVMUEVSX05BTUVfT1JfUEFUSF9FWFBSRVNTSU9OLCB7XG4gICAga2V5d29yZHM6IEJVSUxUX0lOUyxcbiAgICBjbGFzc05hbWU6ICduYW1lJyxcbiAgICBzdGFydHM6IGhsanMuaW5oZXJpdChIRUxQRVJfUEFSQU1FVEVSUywge1xuICAgICAgZW5kOiAvfX0vLFxuICAgIH0pXG4gIH0pO1xuXG4gIGNvbnN0IENMT1NJTkdfQkxPQ0tfTVVTVEFDSEVfQ09OVEVOVFMgPSBobGpzLmluaGVyaXQoSEVMUEVSX05BTUVfT1JfUEFUSF9FWFBSRVNTSU9OLCB7XG4gICAga2V5d29yZHM6IEJVSUxUX0lOUyxcbiAgICBjbGFzc05hbWU6ICduYW1lJ1xuICB9KTtcblxuICBjb25zdCBCQVNJQ19NVVNUQUNIRV9DT05URU5UUyA9IGhsanMuaW5oZXJpdChIRUxQRVJfTkFNRV9PUl9QQVRIX0VYUFJFU1NJT04sIHtcbiAgICBjbGFzc05hbWU6ICduYW1lJyxcbiAgICBrZXl3b3JkczogQlVJTFRfSU5TLFxuICAgIHN0YXJ0czogaGxqcy5pbmhlcml0KEhFTFBFUl9QQVJBTUVURVJTLCB7XG4gICAgICBlbmQ6IC99fS8sXG4gICAgfSlcbiAgfSk7XG5cbiAgY29uc3QgRVNDQVBFX01VU1RBQ0hFX1dJVEhfUFJFQ0VFRElOR19CQUNLU0xBU0ggPSB7YmVnaW46IC9cXFxcXFx7XFx7Lywgc2tpcDogdHJ1ZX07XG4gIGNvbnN0IFBSRVZFTlRfRVNDQVBFX1dJVEhfQU5PVEhFUl9QUkVDRUVESU5HX0JBQ0tTTEFTSCA9IHtiZWdpbjogL1xcXFxcXFxcKD89XFx7XFx7KS8sIHNraXA6IHRydWV9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0hhbmRsZWJhcnMnLFxuICAgIGFsaWFzZXM6IFsnaGJzJywgJ2h0bWwuaGJzJywgJ2h0bWwuaGFuZGxlYmFycycsICdodG1sYmFycyddLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgc3ViTGFuZ3VhZ2U6ICd4bWwnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBFU0NBUEVfTVVTVEFDSEVfV0lUSF9QUkVDRUVESU5HX0JBQ0tTTEFTSCxcbiAgICAgIFBSRVZFTlRfRVNDQVBFX1dJVEhfQU5PVEhFUl9QUkVDRUVESU5HX0JBQ0tTTEFTSCxcbiAgICAgIGhsanMuQ09NTUVOVCgvXFx7XFx7IS0tLywgLy0tXFx9XFx9LyksXG4gICAgICBobGpzLkNPTU1FTlQoL1xce1xceyEvLCAvXFx9XFx9LyksXG4gICAgICB7XG4gICAgICAgIC8vIG9wZW4gcmF3IGJsb2NrIFwie3t7e3Jhd319fX0gY29udGVudCBub3QgZXZhbHVhdGVkIHt7e3svcmF3fX19fVwiXG4gICAgICAgIGNsYXNzTmFtZTogJ3RlbXBsYXRlLXRhZycsXG4gICAgICAgIGJlZ2luOiAvXFx7XFx7XFx7XFx7KD8hXFwvKS8sXG4gICAgICAgIGVuZDogL1xcfVxcfVxcfVxcfS8sXG4gICAgICAgIGNvbnRhaW5zOiBbT1BFTklOR19CTE9DS19NVVNUQUNIRV9DT05URU5UU10sXG4gICAgICAgIHN0YXJ0czoge2VuZDogL1xce1xce1xce1xce1xcLy8sIHJldHVybkVuZDogdHJ1ZSwgc3ViTGFuZ3VhZ2U6ICd4bWwnfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gY2xvc2UgcmF3IGJsb2NrXG4gICAgICAgIGNsYXNzTmFtZTogJ3RlbXBsYXRlLXRhZycsXG4gICAgICAgIGJlZ2luOiAvXFx7XFx7XFx7XFx7XFwvLyxcbiAgICAgICAgZW5kOiAvXFx9XFx9XFx9XFx9LyxcbiAgICAgICAgY29udGFpbnM6IFtDTE9TSU5HX0JMT0NLX01VU1RBQ0hFX0NPTlRFTlRTXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gb3BlbiBibG9jayBzdGF0ZW1lbnRcbiAgICAgICAgY2xhc3NOYW1lOiAndGVtcGxhdGUtdGFnJyxcbiAgICAgICAgYmVnaW46IC9cXHtcXHsjLyxcbiAgICAgICAgZW5kOiAvXFx9XFx9LyxcbiAgICAgICAgY29udGFpbnM6IFtPUEVOSU5HX0JMT0NLX01VU1RBQ0hFX0NPTlRFTlRTXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RlbXBsYXRlLXRhZycsXG4gICAgICAgIGJlZ2luOiAvXFx7XFx7KD89ZWxzZVxcfVxcfSkvLFxuICAgICAgICBlbmQ6IC9cXH1cXH0vLFxuICAgICAgICBrZXl3b3JkczogJ2Vsc2UnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0ZW1wbGF0ZS10YWcnLFxuICAgICAgICBiZWdpbjogL1xce1xceyg/PWVsc2UgaWYpLyxcbiAgICAgICAgZW5kOiAvXFx9XFx9LyxcbiAgICAgICAga2V5d29yZHM6ICdlbHNlIGlmJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gY2xvc2luZyBibG9jayBzdGF0ZW1lbnRcbiAgICAgICAgY2xhc3NOYW1lOiAndGVtcGxhdGUtdGFnJyxcbiAgICAgICAgYmVnaW46IC9cXHtcXHtcXC8vLFxuICAgICAgICBlbmQ6IC9cXH1cXH0vLFxuICAgICAgICBjb250YWluczogW0NMT1NJTkdfQkxPQ0tfTVVTVEFDSEVfQ09OVEVOVFNdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gdGVtcGxhdGUgdmFyaWFibGUgb3IgaGVscGVyLWNhbGwgdGhhdCBpcyBOT1QgaHRtbC1lc2NhcGVkXG4gICAgICAgIGNsYXNzTmFtZTogJ3RlbXBsYXRlLXZhcmlhYmxlJyxcbiAgICAgICAgYmVnaW46IC9cXHtcXHtcXHsvLFxuICAgICAgICBlbmQ6IC9cXH1cXH1cXH0vLFxuICAgICAgICBjb250YWluczogW0JBU0lDX01VU1RBQ0hFX0NPTlRFTlRTXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gdGVtcGxhdGUgdmFyaWFibGUgb3IgaGVscGVyLWNhbGwgdGhhdCBpcyBodG1sLWVzY2FwZWRcbiAgICAgICAgY2xhc3NOYW1lOiAndGVtcGxhdGUtdmFyaWFibGUnLFxuICAgICAgICBiZWdpbjogL1xce1xcey8sXG4gICAgICAgIGVuZDogL1xcfVxcfS8sXG4gICAgICAgIGNvbnRhaW5zOiBbQkFTSUNfTVVTVEFDSEVfQ09OVEVOVFNdXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG4vKlxuIExhbmd1YWdlOiBIVE1MQmFycyAobGVnYWN5KVxuIFJlcXVpcmVzOiB4bWwuanNcbiBEZXNjcmlwdGlvbjogTWF0Y2hlciBmb3IgSGFuZGxlYmFycyBhcyB3ZWxsIGFzIEVtYmVySlMgYWRkaXRpb25zLlxuIFdlYnNpdGU6IGh0dHBzOi8vZ2l0aHViLmNvbS90aWxkZWlvL2h0bWxiYXJzXG4gQ2F0ZWdvcnk6IHRlbXBsYXRlXG4gKi9cblxuZnVuY3Rpb24gaHRtbGJhcnMoaGxqcykge1xuICBjb25zdCBkZWZpbml0aW9uID0gaGFuZGxlYmFycyhobGpzKTtcblxuICBkZWZpbml0aW9uLm5hbWUgPSBcIkhUTUxiYXJzXCI7XG5cbiAgLy8gSEFDSzogVGhpcyBsZXRzIGhhbmRsZWJhcnMgZG8gdGhlIGF1dG8tZGV0ZWN0aW9uIGlmIGl0J3MgYmVlbiBsb2FkZWQgKGJ5XG4gIC8vIGRlZmF1bHQgdGhlIGJ1aWxkIHNjcmlwdCB3aWxsIGxvYWQgaW4gYWxwaGFiZXRpY2FsIG9yZGVyKSBhbmQgaWYgbm90IChwZXJoYXBzXG4gIC8vIGFuIGluc3RhbGwgaXMgb25seSB1c2luZyBgaHRtbGJhcnNgLCBub3QgYGhhbmRsZWJhcnNgKSB0aGVuIHRoaXMgd2lsbCBzdGlsbFxuICAvLyBhbGxvdyBIVE1MQmFycyB0byBwYXJ0aWNpcGF0ZSBpbiB0aGUgYXV0by1kZXRlY3Rpb25cblxuICAvLyB3b3JzZSBjYXNlIHNvbWVvbmUgd2lsbCBoYXZlIEhUTUxiYXJzIGFuZCBoYW5kbGViYXJzIGNvbXBldGluZyBmb3IgdGhlIHNhbWVcbiAgLy8gY29udGVudCBhbmQgd2lsbCBuZWVkIHRvIGNoYW5nZSB0aGVpciBzZXR1cCB0byBvbmx5IHJlcXVpcmUgaGFuZGxlYmFycywgYnV0XG4gIC8vIEkgZG9uJ3QgY29uc2lkZXIgdGhpcyBhIGJyZWFraW5nIGNoYW5nZVxuICBpZiAoaGxqcy5nZXRMYW5ndWFnZShcImhhbmRsZWJhcnNcIikpIHtcbiAgICBkZWZpbml0aW9uLmRpc2FibGVBdXRvZGV0ZWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBkZWZpbml0aW9uXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaHRtbGJhcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9