(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_handlebars"],{

/***/ "./node_modules/highlight.js/lib/languages/handlebars.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/handlebars.js ***!
  \***************************************************************/
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

module.exports = handlebars;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2hhbmRsZWJhcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiOztBQUVBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxhQUFhLEVBQUU7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsa0JBQWtCLEtBQUssT0FBTztBQUMvRDtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsR0FBRzs7QUFFSCxxREFBcUQsWUFBWSxFQUFFO0FBQ25FLDREQUE0RCxpQkFBaUIsRUFBRTs7QUFFL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixFQUFFLFdBQVcsRUFBRTtBQUNyQyxzQkFBc0IsRUFBRSxPQUFPLEVBQUU7QUFDakM7QUFDQSwrQkFBK0IsT0FBTywyQkFBMkIsUUFBUTtBQUN6RTtBQUNBLGtCQUFrQixFQUFFLEVBQUUsRUFBRTtBQUN4QixnQkFBZ0IsRUFBRSxFQUFFLEVBQUU7QUFDdEI7QUFDQSxpQkFBaUIsUUFBUSxFQUFFLEVBQUUsRUFBRTtBQUMvQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLEVBQUUsRUFBRSxFQUFFO0FBQ3hCLGdCQUFnQixFQUFFLEVBQUUsRUFBRTtBQUN0QjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsRUFBRTtBQUNwQixnQkFBZ0IsRUFBRTtBQUNsQjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esa0JBQWtCLEVBQUUsU0FBUyxFQUFFO0FBQy9CLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxrQkFBa0IsRUFBRTtBQUNwQixnQkFBZ0IsRUFBRTtBQUNsQjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsRUFBRTtBQUNwQixnQkFBZ0IsRUFBRTtBQUNsQjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsRUFBRSxFQUFFO0FBQ3RCLGdCQUFnQixFQUFFLEVBQUU7QUFDcEI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLEVBQUU7QUFDcEIsZ0JBQWdCLEVBQUU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2hhbmRsZWJhcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbkxhbmd1YWdlOiBIYW5kbGViYXJzXG5SZXF1aXJlczogeG1sLmpzXG5BdXRob3I6IFJvYmluIFdhcmQgPHJvYmluLndhcmRAZ21haWwuY29tPlxuRGVzY3JpcHRpb246IE1hdGNoZXIgZm9yIEhhbmRsZWJhcnMgYXMgd2VsbCBhcyBFbWJlckpTIGFkZGl0aW9ucy5cbldlYnNpdGU6IGh0dHBzOi8vaGFuZGxlYmFyc2pzLmNvbVxuQ2F0ZWdvcnk6IHRlbXBsYXRlXG4qL1xuXG5mdW5jdGlvbiBoYW5kbGViYXJzKGhsanMpIHtcbiAgY29uc3QgQlVJTFRfSU5TID0ge1xuICAgICdidWlsdGluLW5hbWUnOiBbXG4gICAgICAnYWN0aW9uJyxcbiAgICAgICdiaW5kYXR0cicsXG4gICAgICAnY29sbGVjdGlvbicsXG4gICAgICAnY29tcG9uZW50JyxcbiAgICAgICdjb25jYXQnLFxuICAgICAgJ2RlYnVnZ2VyJyxcbiAgICAgICdlYWNoJyxcbiAgICAgICdlYWNoLWluJyxcbiAgICAgICdnZXQnLFxuICAgICAgJ2hhc2gnLFxuICAgICAgJ2lmJyxcbiAgICAgICdpbicsXG4gICAgICAnaW5wdXQnLFxuICAgICAgJ2xpbmstdG8nLFxuICAgICAgJ2xvYycsXG4gICAgICAnbG9nJyxcbiAgICAgICdsb29rdXAnLFxuICAgICAgJ211dCcsXG4gICAgICAnb3V0bGV0JyxcbiAgICAgICdwYXJ0aWFsJyxcbiAgICAgICdxdWVyeS1wYXJhbXMnLFxuICAgICAgJ3JlbmRlcicsXG4gICAgICAndGVtcGxhdGUnLFxuICAgICAgJ3RleHRhcmVhJyxcbiAgICAgICd1bmJvdW5kJyxcbiAgICAgICd1bmxlc3MnLFxuICAgICAgJ3ZpZXcnLFxuICAgICAgJ3dpdGgnLFxuICAgICAgJ3lpZWxkJ1xuICAgIF0uam9pbihcIiBcIilcbiAgfTtcblxuICBjb25zdCBMSVRFUkFMUyA9IHtcbiAgICBsaXRlcmFsOiBbXG4gICAgICAndHJ1ZScsXG4gICAgICAnZmFsc2UnLFxuICAgICAgJ3VuZGVmaW5lZCcsXG4gICAgICAnbnVsbCdcbiAgICBdLmpvaW4oXCIgXCIpXG4gIH07XG5cbiAgLy8gYXMgZGVmaW5lZCBpbiBodHRwczovL2hhbmRsZWJhcnNqcy5jb20vZ3VpZGUvZXhwcmVzc2lvbnMuaHRtbCNsaXRlcmFsLXNlZ21lbnRzXG4gIC8vIHRoaXMgcmVnZXggbWF0Y2hlcyBsaXRlcmFsIHNlZ21lbnRzIGxpa2UgJyBhYmMgJyBvciBbIGFiYyBdIGFzIHdlbGwgYXMgaGVscGVycyBhbmQgcGF0aHNcbiAgLy8gbGlrZSBhL2IsIC4vYWJjL2NkZSwgYW5kIGFiYy5iY2RcblxuICBjb25zdCBET1VCTEVfUVVPVEVEX0lEX1JFR0VYPS9cIi4qP1wiLztcbiAgY29uc3QgU0lOR0xFX1FVT1RFRF9JRF9SRUdFWD0vJy4qPycvO1xuICBjb25zdCBCUkFDS0VUX1FVT1RFRF9JRF9SRUdFWD0vXFxbLio/XFxdLztcbiAgY29uc3QgUExBSU5fSURfUkVHRVg9L1teXFxzIVwiIyUmJygpKissLlxcLzs8PT5AXFxbXFxcXFxcXV5ge3x9fl0rLztcbiAgY29uc3QgUEFUSF9ERUxJTUlURVJfUkVHRVg9L1xcLnxcXC8vO1xuXG4gIGNvbnN0IElERU5USUZJRVJfUkVHRVggPSBjb25jYXQoXG4gICAgJygnLFxuICAgIFNJTkdMRV9RVU9URURfSURfUkVHRVgsICd8JyxcbiAgICBET1VCTEVfUVVPVEVEX0lEX1JFR0VYLCAnfCcsXG4gICAgQlJBQ0tFVF9RVU9URURfSURfUkVHRVgsICd8JyxcbiAgICBQTEFJTl9JRF9SRUdFWCwgJ3wnLFxuICAgIFBBVEhfREVMSU1JVEVSX1JFR0VYLFxuICAgICcpKydcbiAgKTtcblxuICAvLyBpZGVudGlmaWVyIGZvbGxvd2VkIGJ5IGEgZXF1YWwtc2lnbiAod2l0aG91dCB0aGUgZXF1YWwgc2lnbilcbiAgY29uc3QgSEFTSF9QQVJBTV9SRUdFWCA9IGNvbmNhdChcbiAgICAnKCcsXG4gICAgQlJBQ0tFVF9RVU9URURfSURfUkVHRVgsICd8JyxcbiAgICBQTEFJTl9JRF9SRUdFWCxcbiAgICAnKSg/PT0pJ1xuICApO1xuXG4gIGNvbnN0IEhFTFBFUl9OQU1FX09SX1BBVEhfRVhQUkVTU0lPTiA9IHtcbiAgICBiZWdpbjogSURFTlRJRklFUl9SRUdFWCxcbiAgICBsZXhlbWVzOiAvW1xcdy5cXC9dKy9cbiAgfTtcblxuICBjb25zdCBIRUxQRVJfUEFSQU1FVEVSID0gaGxqcy5pbmhlcml0KEhFTFBFUl9OQU1FX09SX1BBVEhfRVhQUkVTU0lPTiwge1xuICAgIGtleXdvcmRzOiBMSVRFUkFMU1xuICB9KTtcblxuICBjb25zdCBTVUJfRVhQUkVTU0lPTiA9IHtcbiAgICBiZWdpbjogL1xcKC8sXG4gICAgZW5kOiAvXFwpL1xuICAgIC8vIHRoZSBcImNvbnRhaW5zXCIgaXMgYWRkZWQgYmVsb3cgd2hlbiBhbGwgbmVjZXNzYXJ5IHN1Yi1tb2RlcyBhcmUgZGVmaW5lZFxuICB9O1xuXG4gIGNvbnN0IEhBU0ggPSB7XG4gICAgLy8gZmthIFwiYXR0cmlidXRlLWFzc2lnbm1lbnRcIiwgcGFyYW1ldGVycyBvZiB0aGUgZm9ybSAna2V5PXZhbHVlJ1xuICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgIGJlZ2luOiBIQVNIX1BBUkFNX1JFR0VYLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBzdGFydHM6IHtcbiAgICAgIGJlZ2luOiAvPS8sXG4gICAgICBlbmQ6IC89LyxcbiAgICAgIHN0YXJ0czoge1xuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuTlVNQkVSX01PREUsXG4gICAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgSEVMUEVSX1BBUkFNRVRFUixcbiAgICAgICAgICBTVUJfRVhQUkVTU0lPTlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IEJMT0NLX1BBUkFNUyA9IHtcbiAgICAvLyBwYXJhbWV0ZXJzIG9mIHRoZSBmb3JtICd7eyN3aXRoIHggYXMgfCB5IHx9fS4uLnt7L3dpdGh9fSdcbiAgICBiZWdpbjogL2FzXFxzK1xcfC8sXG4gICAga2V5d29yZHM6IHsga2V5d29yZDogJ2FzJyB9LFxuICAgIGVuZDogL1xcfC8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgLy8gZGVmaW5lIHN1Yi1tb2RlIGluIG9yZGVyIHRvIHByZXZlbnQgaGlnaGxpZ2h0aW5nIG9mIGJsb2NrLXBhcmFtZXRlciBuYW1lZCBcImFzXCJcbiAgICAgICAgYmVnaW46IC9cXHcrL1xuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBIRUxQRVJfUEFSQU1FVEVSUyA9IHtcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5OVU1CRVJfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICBCTE9DS19QQVJBTVMsXG4gICAgICBIQVNILFxuICAgICAgSEVMUEVSX1BBUkFNRVRFUixcbiAgICAgIFNVQl9FWFBSRVNTSU9OXG4gICAgXSxcbiAgICByZXR1cm5FbmQ6IHRydWVcbiAgICAvLyB0aGUgcHJvcGVydHkgXCJlbmRcIiBpcyBkZWZpbmVkIHRocm91Z2ggaW5oZXJpdGFuY2Ugd2hlbiB0aGUgbW9kZSBpcyB1c2VkLiBJZiBkZXBlbmRzXG4gICAgLy8gb24gdGhlIHN1cnJvdW5kaW5nIG1vZGUsIGJ1dCBcImVuZHNXaXRoUGFyZW50XCIgZG9lcyBub3Qgd29yayBoZXJlIChpLmUuIGl0IGluY2x1ZGVzIHRoZVxuICAgIC8vIGVuZC10b2tlbiBvZiB0aGUgc3Vycm91bmRpbmcgbW9kZSlcbiAgfTtcblxuICBjb25zdCBTVUJfRVhQUkVTU0lPTl9DT05URU5UUyA9IGhsanMuaW5oZXJpdChIRUxQRVJfTkFNRV9PUl9QQVRIX0VYUFJFU1NJT04sIHtcbiAgICBjbGFzc05hbWU6ICduYW1lJyxcbiAgICBrZXl3b3JkczogQlVJTFRfSU5TLFxuICAgIHN0YXJ0czogaGxqcy5pbmhlcml0KEhFTFBFUl9QQVJBTUVURVJTLCB7XG4gICAgICBlbmQ6IC9cXCkvLFxuICAgIH0pXG4gIH0pO1xuXG4gIFNVQl9FWFBSRVNTSU9OLmNvbnRhaW5zID0gW1xuICAgIFNVQl9FWFBSRVNTSU9OX0NPTlRFTlRTXG4gIF07XG5cbiAgY29uc3QgT1BFTklOR19CTE9DS19NVVNUQUNIRV9DT05URU5UUyA9IGhsanMuaW5oZXJpdChIRUxQRVJfTkFNRV9PUl9QQVRIX0VYUFJFU1NJT04sIHtcbiAgICBrZXl3b3JkczogQlVJTFRfSU5TLFxuICAgIGNsYXNzTmFtZTogJ25hbWUnLFxuICAgIHN0YXJ0czogaGxqcy5pbmhlcml0KEhFTFBFUl9QQVJBTUVURVJTLCB7XG4gICAgICBlbmQ6IC99fS8sXG4gICAgfSlcbiAgfSk7XG5cbiAgY29uc3QgQ0xPU0lOR19CTE9DS19NVVNUQUNIRV9DT05URU5UUyA9IGhsanMuaW5oZXJpdChIRUxQRVJfTkFNRV9PUl9QQVRIX0VYUFJFU1NJT04sIHtcbiAgICBrZXl3b3JkczogQlVJTFRfSU5TLFxuICAgIGNsYXNzTmFtZTogJ25hbWUnXG4gIH0pO1xuXG4gIGNvbnN0IEJBU0lDX01VU1RBQ0hFX0NPTlRFTlRTID0gaGxqcy5pbmhlcml0KEhFTFBFUl9OQU1FX09SX1BBVEhfRVhQUkVTU0lPTiwge1xuICAgIGNsYXNzTmFtZTogJ25hbWUnLFxuICAgIGtleXdvcmRzOiBCVUlMVF9JTlMsXG4gICAgc3RhcnRzOiBobGpzLmluaGVyaXQoSEVMUEVSX1BBUkFNRVRFUlMsIHtcbiAgICAgIGVuZDogL319LyxcbiAgICB9KVxuICB9KTtcblxuICBjb25zdCBFU0NBUEVfTVVTVEFDSEVfV0lUSF9QUkVDRUVESU5HX0JBQ0tTTEFTSCA9IHtiZWdpbjogL1xcXFxcXHtcXHsvLCBza2lwOiB0cnVlfTtcbiAgY29uc3QgUFJFVkVOVF9FU0NBUEVfV0lUSF9BTk9USEVSX1BSRUNFRURJTkdfQkFDS1NMQVNIID0ge2JlZ2luOiAvXFxcXFxcXFwoPz1cXHtcXHspLywgc2tpcDogdHJ1ZX07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnSGFuZGxlYmFycycsXG4gICAgYWxpYXNlczogWydoYnMnLCAnaHRtbC5oYnMnLCAnaHRtbC5oYW5kbGViYXJzJywgJ2h0bWxiYXJzJ10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBzdWJMYW5ndWFnZTogJ3htbCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIEVTQ0FQRV9NVVNUQUNIRV9XSVRIX1BSRUNFRURJTkdfQkFDS1NMQVNILFxuICAgICAgUFJFVkVOVF9FU0NBUEVfV0lUSF9BTk9USEVSX1BSRUNFRURJTkdfQkFDS1NMQVNILFxuICAgICAgaGxqcy5DT01NRU5UKC9cXHtcXHshLS0vLCAvLS1cXH1cXH0vKSxcbiAgICAgIGhsanMuQ09NTUVOVCgvXFx7XFx7IS8sIC9cXH1cXH0vKSxcbiAgICAgIHtcbiAgICAgICAgLy8gb3BlbiByYXcgYmxvY2sgXCJ7e3t7cmF3fX19fSBjb250ZW50IG5vdCBldmFsdWF0ZWQge3t7ey9yYXd9fX19XCJcbiAgICAgICAgY2xhc3NOYW1lOiAndGVtcGxhdGUtdGFnJyxcbiAgICAgICAgYmVnaW46IC9cXHtcXHtcXHtcXHsoPyFcXC8pLyxcbiAgICAgICAgZW5kOiAvXFx9XFx9XFx9XFx9LyxcbiAgICAgICAgY29udGFpbnM6IFtPUEVOSU5HX0JMT0NLX01VU1RBQ0hFX0NPTlRFTlRTXSxcbiAgICAgICAgc3RhcnRzOiB7ZW5kOiAvXFx7XFx7XFx7XFx7XFwvLywgcmV0dXJuRW5kOiB0cnVlLCBzdWJMYW5ndWFnZTogJ3htbCd9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBjbG9zZSByYXcgYmxvY2tcbiAgICAgICAgY2xhc3NOYW1lOiAndGVtcGxhdGUtdGFnJyxcbiAgICAgICAgYmVnaW46IC9cXHtcXHtcXHtcXHtcXC8vLFxuICAgICAgICBlbmQ6IC9cXH1cXH1cXH1cXH0vLFxuICAgICAgICBjb250YWluczogW0NMT1NJTkdfQkxPQ0tfTVVTVEFDSEVfQ09OVEVOVFNdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBvcGVuIGJsb2NrIHN0YXRlbWVudFxuICAgICAgICBjbGFzc05hbWU6ICd0ZW1wbGF0ZS10YWcnLFxuICAgICAgICBiZWdpbjogL1xce1xceyMvLFxuICAgICAgICBlbmQ6IC9cXH1cXH0vLFxuICAgICAgICBjb250YWluczogW09QRU5JTkdfQkxPQ0tfTVVTVEFDSEVfQ09OVEVOVFNdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGVtcGxhdGUtdGFnJyxcbiAgICAgICAgYmVnaW46IC9cXHtcXHsoPz1lbHNlXFx9XFx9KS8sXG4gICAgICAgIGVuZDogL1xcfVxcfS8sXG4gICAgICAgIGtleXdvcmRzOiAnZWxzZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RlbXBsYXRlLXRhZycsXG4gICAgICAgIGJlZ2luOiAvXFx7XFx7KD89ZWxzZSBpZikvLFxuICAgICAgICBlbmQ6IC9cXH1cXH0vLFxuICAgICAgICBrZXl3b3JkczogJ2Vsc2UgaWYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBjbG9zaW5nIGJsb2NrIHN0YXRlbWVudFxuICAgICAgICBjbGFzc05hbWU6ICd0ZW1wbGF0ZS10YWcnLFxuICAgICAgICBiZWdpbjogL1xce1xce1xcLy8sXG4gICAgICAgIGVuZDogL1xcfVxcfS8sXG4gICAgICAgIGNvbnRhaW5zOiBbQ0xPU0lOR19CTE9DS19NVVNUQUNIRV9DT05URU5UU10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyB0ZW1wbGF0ZSB2YXJpYWJsZSBvciBoZWxwZXItY2FsbCB0aGF0IGlzIE5PVCBodG1sLWVzY2FwZWRcbiAgICAgICAgY2xhc3NOYW1lOiAndGVtcGxhdGUtdmFyaWFibGUnLFxuICAgICAgICBiZWdpbjogL1xce1xce1xcey8sXG4gICAgICAgIGVuZDogL1xcfVxcfVxcfS8sXG4gICAgICAgIGNvbnRhaW5zOiBbQkFTSUNfTVVTVEFDSEVfQ09OVEVOVFNdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyB0ZW1wbGF0ZSB2YXJpYWJsZSBvciBoZWxwZXItY2FsbCB0aGF0IGlzIGh0bWwtZXNjYXBlZFxuICAgICAgICBjbGFzc05hbWU6ICd0ZW1wbGF0ZS12YXJpYWJsZScsXG4gICAgICAgIGJlZ2luOiAvXFx7XFx7LyxcbiAgICAgICAgZW5kOiAvXFx9XFx9LyxcbiAgICAgICAgY29udGFpbnM6IFtCQVNJQ19NVVNUQUNIRV9DT05URU5UU11cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFuZGxlYmFycztcbiJdLCJzb3VyY2VSb290IjoiIn0=