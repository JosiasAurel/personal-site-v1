(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_r"],{

/***/ "./node_modules/highlight.js/lib/languages/r.js":
/*!******************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/r.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: R
Description: R is a free software environment for statistical computing and graphics.
Author: Joe Cheng <joe@rstudio.org>
Contributors: Konrad Rudolph <konrad.rudolph@gmail.com>
Website: https://www.r-project.org
Category: scientific
*/

function r(hljs) {
  // Identifiers in R cannot start with `_`, but they can start with `.` if it
  // is not immediately followed by a digit.
  // R also supports quoted identifiers, which are near-arbitrary sequences
  // delimited by backticks (`…`), which may contain escape sequences. These are
  // handled in a separate mode. See `test/markup/r/names.txt` for examples.
  // FIXME: Support Unicode identifiers.
  const IDENT_RE = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/;

  return {
    name: 'R',

    keywords: {
      $pattern: IDENT_RE,
      keyword:
        'function if in break next repeat else for while',
      literal:
        'NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 ' +
        'NA_character_|10 NA_complex_|10',
      built_in:
        // Builtin constants
        'LETTERS letters month.abb month.name pi T F ' +
        // Primitive functions
        // These are all the functions in `base` that are implemented as a
        // `.Primitive`, minus those functions that are also keywords.
        'abs acos acosh all any anyNA Arg as.call as.character' +
        'as.complex as.double as.environment as.integer as.logical' +
        'as.null.default as.numeric as.raw asin asinh atan atanh attr' +
        'attributes baseenv browser c call ceiling class Conj cos cosh' +
        'cospi cummax cummin cumprod cumsum digamma dim dimnames' +
        'emptyenv exp expression floor forceAndCall gamma gc.time' +
        'globalenv Im interactive invisible is.array is.atomic is.call' +
        'is.character is.complex is.double is.environment is.expression' +
        'is.finite is.function is.infinite is.integer is.language' +
        'is.list is.logical is.matrix is.na is.name is.nan is.null' +
        'is.numeric is.object is.pairlist is.raw is.recursive is.single' +
        'is.symbol lazyLoadDBfetch length lgamma list log max min' +
        'missing Mod names nargs nzchar oldClass on.exit pos.to.env' +
        'proc.time prod quote range Re rep retracemem return round' +
        'seq_along seq_len seq.int sign signif sin sinh sinpi sqrt' +
        'standardGeneric substitute sum switch tan tanh tanpi tracemem' +
        'trigamma trunc unclass untracemem UseMethod xtfrm',
    },

    contains: [
      // Roxygen comments
      hljs.COMMENT(
        /#'/,
        /$/,
        {
          contains: [
            {
              // Handle `@examples` separately to cause all subsequent code
              // until the next `@`-tag on its own line to be kept as-is,
              // preventing highlighting. This code is example R code, so nested
              // doctags shouldn’t be treated as such. See
              // `test/markup/r/roxygen.txt` for an example.
              className: 'doctag',
              begin: '@examples',
              starts: {
                contains: [
                  { begin: /\n/ },
                  {
                    begin: /#'\s*(?=@[a-zA-Z]+)/,
                    endsParent: true,
                  },
                  {
                    begin: /#'/,
                    end: /$/,
                    excludeBegin: true,
                  }
                ]
              }
            },
            {
              // Handle `@param` to highlight the parameter name following
              // after.
              className: 'doctag',
              begin: '@param',
              end: /$/,
              contains: [
                {
                  className: 'variable',
                  variants: [
                    { begin: IDENT_RE },
                    { begin: /`(?:\\.|[^`])+`/ }
                  ],
                  endsParent: true
                }
              ]
            },
            {
              className: 'doctag',
              begin: /@[a-zA-Z]+/
            },
            {
              className: 'meta-keyword',
              begin: /\\[a-zA-Z]+/,
            }
          ]
        }
      ),

      hljs.HASH_COMMENT_MODE,

      {
        className: 'string',
        contains: [hljs.BACKSLASH_ESCAPE],
        variants: [
          hljs.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\(/, end: /\)(-*)"/ }),
          hljs.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\{/, end: /\}(-*)"/ }),
          hljs.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\[/, end: /\](-*)"/ }),
          hljs.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\(/, end: /\)(-*)'/ }),
          hljs.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\{/, end: /\}(-*)'/ }),
          hljs.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\[/, end: /\](-*)'/ }),
          {begin: '"', end: '"', relevance: 0},
          {begin: "'", end: "'", relevance: 0}
        ],
      },
      {
        className: 'number',
        variants: [
          // TODO: replace with negative look-behind when available
          // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/ },
          // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/ },
          // { begin: /(?<![a-zA-Z0-9._])(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/ }

          // The below rules all eat an extra character in front (for the
          // look-behind check) and then exclude it from the match, but I think
          // in many cases this will work out just fine.
          {
            // Special case: only hexadecimal binary powers can contain fractions.
            begin: /([^a-zA-Z0-9._])(?=0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?)/,
            end: /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
            excludeBegin: true
          },
          {
            begin: /([^a-zA-Z0-9._])(?=0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?)/,
            end: /0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/ ,
            excludeBegin: true
          },
          {
            begin: /([^a-zA-Z0-9._])(?=(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?)/,
            end: /(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/,
            excludeBegin: true
          }
        ],
        // "on:begin": (match, response) => {
        //   if (match.index > 0) {
        //     let priorChar = match.input[match.index - 1];
        //     if (priorChar.match(/[a-zA-Z0-9._]/)) response.ignoreMatch();
        //   }
        // },
        relevance: 0
      },

      {
        // infix operator
        begin: '%',
        end: '%'
      },

      {
        // escaped identifier
        begin: '`',
        end: '`',
        contains: [
          { begin: /\\./ }
        ]
      }
    ]
  };
}

module.exports = r;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QyxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHVDQUF1QztBQUN6RSxrQ0FBa0Msb0JBQW9CLFdBQVcsUUFBUTtBQUN6RSxrQ0FBa0MsdUNBQXVDO0FBQ3pFLGtDQUFrQyx1Q0FBdUM7QUFDekUsa0NBQWtDLG9CQUFvQixXQUFXLFFBQVE7QUFDekUsa0NBQWtDLHVDQUF1QztBQUN6RSxXQUFXLG1DQUFtQztBQUM5QyxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDJFQUEyRTtBQUN6RixjQUFjLG1FQUFtRTtBQUNqRixjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFJcbkRlc2NyaXB0aW9uOiBSIGlzIGEgZnJlZSBzb2Z0d2FyZSBlbnZpcm9ubWVudCBmb3Igc3RhdGlzdGljYWwgY29tcHV0aW5nIGFuZCBncmFwaGljcy5cbkF1dGhvcjogSm9lIENoZW5nIDxqb2VAcnN0dWRpby5vcmc+XG5Db250cmlidXRvcnM6IEtvbnJhZCBSdWRvbHBoIDxrb25yYWQucnVkb2xwaEBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwczovL3d3dy5yLXByb2plY3Qub3JnXG5DYXRlZ29yeTogc2NpZW50aWZpY1xuKi9cblxuZnVuY3Rpb24gcihobGpzKSB7XG4gIC8vIElkZW50aWZpZXJzIGluIFIgY2Fubm90IHN0YXJ0IHdpdGggYF9gLCBidXQgdGhleSBjYW4gc3RhcnQgd2l0aCBgLmAgaWYgaXRcbiAgLy8gaXMgbm90IGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IGEgZGlnaXQuXG4gIC8vIFIgYWxzbyBzdXBwb3J0cyBxdW90ZWQgaWRlbnRpZmllcnMsIHdoaWNoIGFyZSBuZWFyLWFyYml0cmFyeSBzZXF1ZW5jZXNcbiAgLy8gZGVsaW1pdGVkIGJ5IGJhY2t0aWNrcyAoYOKApmApLCB3aGljaCBtYXkgY29udGFpbiBlc2NhcGUgc2VxdWVuY2VzLiBUaGVzZSBhcmVcbiAgLy8gaGFuZGxlZCBpbiBhIHNlcGFyYXRlIG1vZGUuIFNlZSBgdGVzdC9tYXJrdXAvci9uYW1lcy50eHRgIGZvciBleGFtcGxlcy5cbiAgLy8gRklYTUU6IFN1cHBvcnQgVW5pY29kZSBpZGVudGlmaWVycy5cbiAgY29uc3QgSURFTlRfUkUgPSAvKD86KD86W2EtekEtWl18XFwuWy5fYS16QS1aXSlbLl9hLXpBLVowLTldKil8XFwuKD8hXFxkKS87XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnUicsXG5cbiAgICBrZXl3b3Jkczoge1xuICAgICAgJHBhdHRlcm46IElERU5UX1JFLFxuICAgICAga2V5d29yZDpcbiAgICAgICAgJ2Z1bmN0aW9uIGlmIGluIGJyZWFrIG5leHQgcmVwZWF0IGVsc2UgZm9yIHdoaWxlJyxcbiAgICAgIGxpdGVyYWw6XG4gICAgICAgICdOVUxMIE5BIFRSVUUgRkFMU0UgSW5mIE5hTiBOQV9pbnRlZ2VyX3wxMCBOQV9yZWFsX3wxMCAnICtcbiAgICAgICAgJ05BX2NoYXJhY3Rlcl98MTAgTkFfY29tcGxleF98MTAnLFxuICAgICAgYnVpbHRfaW46XG4gICAgICAgIC8vIEJ1aWx0aW4gY29uc3RhbnRzXG4gICAgICAgICdMRVRURVJTIGxldHRlcnMgbW9udGguYWJiIG1vbnRoLm5hbWUgcGkgVCBGICcgK1xuICAgICAgICAvLyBQcmltaXRpdmUgZnVuY3Rpb25zXG4gICAgICAgIC8vIFRoZXNlIGFyZSBhbGwgdGhlIGZ1bmN0aW9ucyBpbiBgYmFzZWAgdGhhdCBhcmUgaW1wbGVtZW50ZWQgYXMgYVxuICAgICAgICAvLyBgLlByaW1pdGl2ZWAsIG1pbnVzIHRob3NlIGZ1bmN0aW9ucyB0aGF0IGFyZSBhbHNvIGtleXdvcmRzLlxuICAgICAgICAnYWJzIGFjb3MgYWNvc2ggYWxsIGFueSBhbnlOQSBBcmcgYXMuY2FsbCBhcy5jaGFyYWN0ZXInICtcbiAgICAgICAgJ2FzLmNvbXBsZXggYXMuZG91YmxlIGFzLmVudmlyb25tZW50IGFzLmludGVnZXIgYXMubG9naWNhbCcgK1xuICAgICAgICAnYXMubnVsbC5kZWZhdWx0IGFzLm51bWVyaWMgYXMucmF3IGFzaW4gYXNpbmggYXRhbiBhdGFuaCBhdHRyJyArXG4gICAgICAgICdhdHRyaWJ1dGVzIGJhc2VlbnYgYnJvd3NlciBjIGNhbGwgY2VpbGluZyBjbGFzcyBDb25qIGNvcyBjb3NoJyArXG4gICAgICAgICdjb3NwaSBjdW1tYXggY3VtbWluIGN1bXByb2QgY3Vtc3VtIGRpZ2FtbWEgZGltIGRpbW5hbWVzJyArXG4gICAgICAgICdlbXB0eWVudiBleHAgZXhwcmVzc2lvbiBmbG9vciBmb3JjZUFuZENhbGwgZ2FtbWEgZ2MudGltZScgK1xuICAgICAgICAnZ2xvYmFsZW52IEltIGludGVyYWN0aXZlIGludmlzaWJsZSBpcy5hcnJheSBpcy5hdG9taWMgaXMuY2FsbCcgK1xuICAgICAgICAnaXMuY2hhcmFjdGVyIGlzLmNvbXBsZXggaXMuZG91YmxlIGlzLmVudmlyb25tZW50IGlzLmV4cHJlc3Npb24nICtcbiAgICAgICAgJ2lzLmZpbml0ZSBpcy5mdW5jdGlvbiBpcy5pbmZpbml0ZSBpcy5pbnRlZ2VyIGlzLmxhbmd1YWdlJyArXG4gICAgICAgICdpcy5saXN0IGlzLmxvZ2ljYWwgaXMubWF0cml4IGlzLm5hIGlzLm5hbWUgaXMubmFuIGlzLm51bGwnICtcbiAgICAgICAgJ2lzLm51bWVyaWMgaXMub2JqZWN0IGlzLnBhaXJsaXN0IGlzLnJhdyBpcy5yZWN1cnNpdmUgaXMuc2luZ2xlJyArXG4gICAgICAgICdpcy5zeW1ib2wgbGF6eUxvYWREQmZldGNoIGxlbmd0aCBsZ2FtbWEgbGlzdCBsb2cgbWF4IG1pbicgK1xuICAgICAgICAnbWlzc2luZyBNb2QgbmFtZXMgbmFyZ3MgbnpjaGFyIG9sZENsYXNzIG9uLmV4aXQgcG9zLnRvLmVudicgK1xuICAgICAgICAncHJvYy50aW1lIHByb2QgcXVvdGUgcmFuZ2UgUmUgcmVwIHJldHJhY2VtZW0gcmV0dXJuIHJvdW5kJyArXG4gICAgICAgICdzZXFfYWxvbmcgc2VxX2xlbiBzZXEuaW50IHNpZ24gc2lnbmlmIHNpbiBzaW5oIHNpbnBpIHNxcnQnICtcbiAgICAgICAgJ3N0YW5kYXJkR2VuZXJpYyBzdWJzdGl0dXRlIHN1bSBzd2l0Y2ggdGFuIHRhbmggdGFucGkgdHJhY2VtZW0nICtcbiAgICAgICAgJ3RyaWdhbW1hIHRydW5jIHVuY2xhc3MgdW50cmFjZW1lbSBVc2VNZXRob2QgeHRmcm0nLFxuICAgIH0sXG5cbiAgICBjb250YWluczogW1xuICAgICAgLy8gUm94eWdlbiBjb21tZW50c1xuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAvIycvLFxuICAgICAgICAvJC8sXG4gICAgICAgIHtcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvLyBIYW5kbGUgYEBleGFtcGxlc2Agc2VwYXJhdGVseSB0byBjYXVzZSBhbGwgc3Vic2VxdWVudCBjb2RlXG4gICAgICAgICAgICAgIC8vIHVudGlsIHRoZSBuZXh0IGBAYC10YWcgb24gaXRzIG93biBsaW5lIHRvIGJlIGtlcHQgYXMtaXMsXG4gICAgICAgICAgICAgIC8vIHByZXZlbnRpbmcgaGlnaGxpZ2h0aW5nLiBUaGlzIGNvZGUgaXMgZXhhbXBsZSBSIGNvZGUsIHNvIG5lc3RlZFxuICAgICAgICAgICAgICAvLyBkb2N0YWdzIHNob3VsZG7igJl0IGJlIHRyZWF0ZWQgYXMgc3VjaC4gU2VlXG4gICAgICAgICAgICAgIC8vIGB0ZXN0L21hcmt1cC9yL3JveHlnZW4udHh0YCBmb3IgYW4gZXhhbXBsZS5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICAgICAgICAgICAgYmVnaW46ICdAZXhhbXBsZXMnLFxuICAgICAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAgeyBiZWdpbjogL1xcbi8gfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IC8jJ1xccyooPz1AW2EtekEtWl0rKS8sXG4gICAgICAgICAgICAgICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogLyMnLyxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIEhhbmRsZSBgQHBhcmFtYCB0byBoaWdobGlnaHQgdGhlIHBhcmFtZXRlciBuYW1lIGZvbGxvd2luZ1xuICAgICAgICAgICAgICAvLyBhZnRlci5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICAgICAgICAgICAgYmVnaW46ICdAcGFyYW0nLFxuICAgICAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgICAgICB7IGJlZ2luOiBJREVOVF9SRSB9LFxuICAgICAgICAgICAgICAgICAgICB7IGJlZ2luOiAvYCg/OlxcXFwufFteYF0pK2AvIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBlbmRzUGFyZW50OiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICAgICAgICBiZWdpbjogL0BbYS16QS1aXSsvXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhLWtleXdvcmQnLFxuICAgICAgICAgICAgICBiZWdpbjogL1xcXFxbYS16QS1aXSsvLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgKSxcblxuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcblxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV0sXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgaGxqcy5FTkRfU0FNRV9BU19CRUdJTih7IGJlZ2luOiAvW3JSXVwiKC0qKVxcKC8sIGVuZDogL1xcKSgtKilcIi8gfSksXG4gICAgICAgICAgaGxqcy5FTkRfU0FNRV9BU19CRUdJTih7IGJlZ2luOiAvW3JSXVwiKC0qKVxcey8sIGVuZDogL1xcfSgtKilcIi8gfSksXG4gICAgICAgICAgaGxqcy5FTkRfU0FNRV9BU19CRUdJTih7IGJlZ2luOiAvW3JSXVwiKC0qKVxcWy8sIGVuZDogL1xcXSgtKilcIi8gfSksXG4gICAgICAgICAgaGxqcy5FTkRfU0FNRV9BU19CRUdJTih7IGJlZ2luOiAvW3JSXScoLSopXFwoLywgZW5kOiAvXFwpKC0qKScvIH0pLFxuICAgICAgICAgIGhsanMuRU5EX1NBTUVfQVNfQkVHSU4oeyBiZWdpbjogL1tyUl0nKC0qKVxcey8sIGVuZDogL1xcfSgtKiknLyB9KSxcbiAgICAgICAgICBobGpzLkVORF9TQU1FX0FTX0JFR0lOKHsgYmVnaW46IC9bclJdJygtKilcXFsvLCBlbmQ6IC9cXF0oLSopJy8gfSksXG4gICAgICAgICAge2JlZ2luOiAnXCInLCBlbmQ6ICdcIicsIHJlbGV2YW5jZTogMH0sXG4gICAgICAgICAge2JlZ2luOiBcIidcIiwgZW5kOiBcIidcIiwgcmVsZXZhbmNlOiAwfVxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAvLyBUT0RPOiByZXBsYWNlIHdpdGggbmVnYXRpdmUgbG9vay1iZWhpbmQgd2hlbiBhdmFpbGFibGVcbiAgICAgICAgICAvLyB7IGJlZ2luOiAvKD88IVthLXpBLVowLTkuX10pMFt4WF1bMC05YS1mQS1GXStcXC5bMC05YS1mQS1GXSpbcFBdWystXT9cXGQraT8vIH0sXG4gICAgICAgICAgLy8geyBiZWdpbjogLyg/PCFbYS16QS1aMC05Ll9dKTBbeFhdWzAtOWEtZkEtRl0rKFtwUF1bKy1dP1xcZCspP1tMaV0/LyB9LFxuICAgICAgICAgIC8vIHsgYmVnaW46IC8oPzwhW2EtekEtWjAtOS5fXSkoXFxkKyhcXC5cXGQqKT98XFwuXFxkKykoW2VFXVsrLV0/XFxkKyk/W0xpXT8vIH1cblxuICAgICAgICAgIC8vIFRoZSBiZWxvdyBydWxlcyBhbGwgZWF0IGFuIGV4dHJhIGNoYXJhY3RlciBpbiBmcm9udCAoZm9yIHRoZVxuICAgICAgICAgIC8vIGxvb2stYmVoaW5kIGNoZWNrKSBhbmQgdGhlbiBleGNsdWRlIGl0IGZyb20gdGhlIG1hdGNoLCBidXQgSSB0aGlua1xuICAgICAgICAgIC8vIGluIG1hbnkgY2FzZXMgdGhpcyB3aWxsIHdvcmsgb3V0IGp1c3QgZmluZS5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2U6IG9ubHkgaGV4YWRlY2ltYWwgYmluYXJ5IHBvd2VycyBjYW4gY29udGFpbiBmcmFjdGlvbnMuXG4gICAgICAgICAgICBiZWdpbjogLyhbXmEtekEtWjAtOS5fXSkoPz0wW3hYXVswLTlhLWZBLUZdK1xcLlswLTlhLWZBLUZdKltwUF1bKy1dP1xcZCtpPykvLFxuICAgICAgICAgICAgZW5kOiAvMFt4WF1bMC05YS1mQS1GXStcXC5bMC05YS1mQS1GXSpbcFBdWystXT9cXGQraT8vLFxuICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogLyhbXmEtekEtWjAtOS5fXSkoPz0wW3hYXVswLTlhLWZBLUZdKyhbcFBdWystXT9cXGQrKT9bTGldPykvLFxuICAgICAgICAgICAgZW5kOiAvMFt4WF1bMC05YS1mQS1GXSsoW3BQXVsrLV0/XFxkKyk/W0xpXT8vICxcbiAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC8oW15hLXpBLVowLTkuX10pKD89KFxcZCsoXFwuXFxkKik/fFxcLlxcZCspKFtlRV1bKy1dP1xcZCspP1tMaV0/KS8sXG4gICAgICAgICAgICBlbmQ6IC8oXFxkKyhcXC5cXGQqKT98XFwuXFxkKykoW2VFXVsrLV0/XFxkKyk/W0xpXT8vLFxuICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICAvLyBcIm9uOmJlZ2luXCI6IChtYXRjaCwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gICBpZiAobWF0Y2guaW5kZXggPiAwKSB7XG4gICAgICAgIC8vICAgICBsZXQgcHJpb3JDaGFyID0gbWF0Y2guaW5wdXRbbWF0Y2guaW5kZXggLSAxXTtcbiAgICAgICAgLy8gICAgIGlmIChwcmlvckNoYXIubWF0Y2goL1thLXpBLVowLTkuX10vKSkgcmVzcG9uc2UuaWdub3JlTWF0Y2goKTtcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICAvLyBpbmZpeCBvcGVyYXRvclxuICAgICAgICBiZWdpbjogJyUnLFxuICAgICAgICBlbmQ6ICclJ1xuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICAvLyBlc2NhcGVkIGlkZW50aWZpZXJcbiAgICAgICAgYmVnaW46ICdgJyxcbiAgICAgICAgZW5kOiAnYCcsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgeyBiZWdpbjogL1xcXFwuLyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=