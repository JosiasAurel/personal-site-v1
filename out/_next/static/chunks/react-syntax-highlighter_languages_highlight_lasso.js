(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_lasso"],{

/***/ "./node_modules/highlight.js/lib/languages/lasso.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/lasso.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Lasso
Author: Eric Knibbe <eric@lassosoft.com>
Description: Lasso is a language and server platform for database-driven web applications. This definition handles Lasso 9 syntax and LassoScript for Lasso 8.6 and earlier.
Website: http://www.lassosoft.com/What-Is-Lasso
*/

function lasso(hljs) {
  var LASSO_IDENT_RE = '[a-zA-Z_][\\w.]*';
  var LASSO_ANGLE_RE = '<\\?(lasso(script)?|=)';
  var LASSO_CLOSE_RE = '\\]|\\?>';
  var LASSO_KEYWORDS = {
    $pattern: LASSO_IDENT_RE + '|&[lg]t;',
    literal:
      'true false none minimal full all void and or not ' +
      'bw nbw ew new cn ncn lt lte gt gte eq neq rx nrx ft',
    built_in:
      'array date decimal duration integer map pair string tag xml null ' +
      'boolean bytes keyword list locale queue set stack staticarray ' +
      'local var variable global data self inherited currentcapture givenblock',
    keyword:
      'cache database_names database_schemanames database_tablenames ' +
      'define_tag define_type email_batch encode_set html_comment handle ' +
      'handle_error header if inline iterate ljax_target link ' +
      'link_currentaction link_currentgroup link_currentrecord link_detail ' +
      'link_firstgroup link_firstrecord link_lastgroup link_lastrecord ' +
      'link_nextgroup link_nextrecord link_prevgroup link_prevrecord log ' +
      'loop namespace_using output_none portal private protect records ' +
      'referer referrer repeating resultset rows search_args ' +
      'search_arguments select sort_args sort_arguments thread_atomic ' +
      'value_list while abort case else fail_if fail_ifnot fail if_empty ' +
      'if_false if_null if_true loop_abort loop_continue loop_count params ' +
      'params_up return return_value run_children soap_definetag ' +
      'soap_lastrequest soap_lastresponse tag_name ascending average by ' +
      'define descending do equals frozen group handle_failure import in ' +
      'into join let match max min on order parent protected provide public ' +
      'require returnhome skip split_thread sum take thread to trait type ' +
      'where with yield yieldhome'
  };
  var HTML_COMMENT = hljs.COMMENT(
    '<!--',
    '-->',
    {
      relevance: 0
    }
  );
  var LASSO_NOPROCESS = {
    className: 'meta',
    begin: '\\[noprocess\\]',
    starts: {
      end: '\\[/noprocess\\]',
      returnEnd: true,
      contains: [HTML_COMMENT]
    }
  };
  var LASSO_START = {
    className: 'meta',
    begin: '\\[/noprocess|' + LASSO_ANGLE_RE
  };
  var LASSO_DATAMEMBER = {
    className: 'symbol',
    begin: '\'' + LASSO_IDENT_RE + '\''
  };
  var LASSO_CODE = [
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.inherit(hljs.C_NUMBER_MODE, {begin: hljs.C_NUMBER_RE + '|(-?infinity|NaN)\\b'}),
    hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
    hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
    {
      className: 'string',
      begin: '`', end: '`'
    },
    { // variables
      variants: [
        {
          begin: '[#$]' + LASSO_IDENT_RE
        },
        {
          begin: '#', end: '\\d+',
          illegal: '\\W'
        }
      ]
    },
    {
      className: 'type',
      begin: '::\\s*', end: LASSO_IDENT_RE,
      illegal: '\\W'
    },
    {
      className: 'params',
      variants: [
        {
          begin: '-(?!infinity)' + LASSO_IDENT_RE,
          relevance: 0
        },
        {
          begin: '(\\.\\.\\.)'
        }
      ]
    },
    {
      begin: /(->|\.)\s*/,
      relevance: 0,
      contains: [LASSO_DATAMEMBER]
    },
    {
      className: 'class',
      beginKeywords: 'define',
      returnEnd: true, end: '\\(|=>',
      contains: [
        hljs.inherit(hljs.TITLE_MODE, {begin: LASSO_IDENT_RE + '(=(?!>))?|[-+*/%](?!>)'})
      ]
    }
  ];
  return {
    name: 'Lasso',
    aliases: ['ls', 'lassoscript'],
    case_insensitive: true,
    keywords: LASSO_KEYWORDS,
    contains: [
      {
        className: 'meta',
        begin: LASSO_CLOSE_RE,
        relevance: 0,
        starts: { // markup
          end: '\\[|' + LASSO_ANGLE_RE,
          returnEnd: true,
          relevance: 0,
          contains: [HTML_COMMENT]
        }
      },
      LASSO_NOPROCESS,
      LASSO_START,
      {
        className: 'meta',
        begin: '\\[no_square_brackets',
        starts: {
          end: '\\[/no_square_brackets\\]', // not implemented in the language
          keywords: LASSO_KEYWORDS,
          contains: [
            {
              className: 'meta',
              begin: LASSO_CLOSE_RE,
              relevance: 0,
              starts: {
                end: '\\[noprocess\\]|' + LASSO_ANGLE_RE,
                returnEnd: true,
                contains: [HTML_COMMENT]
              }
            },
            LASSO_NOPROCESS,
            LASSO_START
          ].concat(LASSO_CODE)
        }
      },
      {
        className: 'meta',
        begin: '\\[',
        relevance: 0
      },
      {
        className: 'meta',
        begin: '^#!', end:'lasso9$',
        relevance: 10
      }
    ].concat(LASSO_CODE)
  };
}

module.exports = lasso;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2xhc3NvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsaURBQWlEO0FBQ3ZGLHlDQUF5QyxjQUFjO0FBQ3ZELDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsaURBQWlEO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9sYXNzby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogTGFzc29cbkF1dGhvcjogRXJpYyBLbmliYmUgPGVyaWNAbGFzc29zb2Z0LmNvbT5cbkRlc2NyaXB0aW9uOiBMYXNzbyBpcyBhIGxhbmd1YWdlIGFuZCBzZXJ2ZXIgcGxhdGZvcm0gZm9yIGRhdGFiYXNlLWRyaXZlbiB3ZWIgYXBwbGljYXRpb25zLiBUaGlzIGRlZmluaXRpb24gaGFuZGxlcyBMYXNzbyA5IHN5bnRheCBhbmQgTGFzc29TY3JpcHQgZm9yIExhc3NvIDguNiBhbmQgZWFybGllci5cbldlYnNpdGU6IGh0dHA6Ly93d3cubGFzc29zb2Z0LmNvbS9XaGF0LUlzLUxhc3NvXG4qL1xuXG5mdW5jdGlvbiBsYXNzbyhobGpzKSB7XG4gIHZhciBMQVNTT19JREVOVF9SRSA9ICdbYS16QS1aX11bXFxcXHcuXSonO1xuICB2YXIgTEFTU09fQU5HTEVfUkUgPSAnPFxcXFw/KGxhc3NvKHNjcmlwdCk/fD0pJztcbiAgdmFyIExBU1NPX0NMT1NFX1JFID0gJ1xcXFxdfFxcXFw/Pic7XG4gIHZhciBMQVNTT19LRVlXT1JEUyA9IHtcbiAgICAkcGF0dGVybjogTEFTU09fSURFTlRfUkUgKyAnfCZbbGdddDsnLFxuICAgIGxpdGVyYWw6XG4gICAgICAndHJ1ZSBmYWxzZSBub25lIG1pbmltYWwgZnVsbCBhbGwgdm9pZCBhbmQgb3Igbm90ICcgK1xuICAgICAgJ2J3IG5idyBldyBuZXcgY24gbmNuIGx0IGx0ZSBndCBndGUgZXEgbmVxIHJ4IG5yeCBmdCcsXG4gICAgYnVpbHRfaW46XG4gICAgICAnYXJyYXkgZGF0ZSBkZWNpbWFsIGR1cmF0aW9uIGludGVnZXIgbWFwIHBhaXIgc3RyaW5nIHRhZyB4bWwgbnVsbCAnICtcbiAgICAgICdib29sZWFuIGJ5dGVzIGtleXdvcmQgbGlzdCBsb2NhbGUgcXVldWUgc2V0IHN0YWNrIHN0YXRpY2FycmF5ICcgK1xuICAgICAgJ2xvY2FsIHZhciB2YXJpYWJsZSBnbG9iYWwgZGF0YSBzZWxmIGluaGVyaXRlZCBjdXJyZW50Y2FwdHVyZSBnaXZlbmJsb2NrJyxcbiAgICBrZXl3b3JkOlxuICAgICAgJ2NhY2hlIGRhdGFiYXNlX25hbWVzIGRhdGFiYXNlX3NjaGVtYW5hbWVzIGRhdGFiYXNlX3RhYmxlbmFtZXMgJyArXG4gICAgICAnZGVmaW5lX3RhZyBkZWZpbmVfdHlwZSBlbWFpbF9iYXRjaCBlbmNvZGVfc2V0IGh0bWxfY29tbWVudCBoYW5kbGUgJyArXG4gICAgICAnaGFuZGxlX2Vycm9yIGhlYWRlciBpZiBpbmxpbmUgaXRlcmF0ZSBsamF4X3RhcmdldCBsaW5rICcgK1xuICAgICAgJ2xpbmtfY3VycmVudGFjdGlvbiBsaW5rX2N1cnJlbnRncm91cCBsaW5rX2N1cnJlbnRyZWNvcmQgbGlua19kZXRhaWwgJyArXG4gICAgICAnbGlua19maXJzdGdyb3VwIGxpbmtfZmlyc3RyZWNvcmQgbGlua19sYXN0Z3JvdXAgbGlua19sYXN0cmVjb3JkICcgK1xuICAgICAgJ2xpbmtfbmV4dGdyb3VwIGxpbmtfbmV4dHJlY29yZCBsaW5rX3ByZXZncm91cCBsaW5rX3ByZXZyZWNvcmQgbG9nICcgK1xuICAgICAgJ2xvb3AgbmFtZXNwYWNlX3VzaW5nIG91dHB1dF9ub25lIHBvcnRhbCBwcml2YXRlIHByb3RlY3QgcmVjb3JkcyAnICtcbiAgICAgICdyZWZlcmVyIHJlZmVycmVyIHJlcGVhdGluZyByZXN1bHRzZXQgcm93cyBzZWFyY2hfYXJncyAnICtcbiAgICAgICdzZWFyY2hfYXJndW1lbnRzIHNlbGVjdCBzb3J0X2FyZ3Mgc29ydF9hcmd1bWVudHMgdGhyZWFkX2F0b21pYyAnICtcbiAgICAgICd2YWx1ZV9saXN0IHdoaWxlIGFib3J0IGNhc2UgZWxzZSBmYWlsX2lmIGZhaWxfaWZub3QgZmFpbCBpZl9lbXB0eSAnICtcbiAgICAgICdpZl9mYWxzZSBpZl9udWxsIGlmX3RydWUgbG9vcF9hYm9ydCBsb29wX2NvbnRpbnVlIGxvb3BfY291bnQgcGFyYW1zICcgK1xuICAgICAgJ3BhcmFtc191cCByZXR1cm4gcmV0dXJuX3ZhbHVlIHJ1bl9jaGlsZHJlbiBzb2FwX2RlZmluZXRhZyAnICtcbiAgICAgICdzb2FwX2xhc3RyZXF1ZXN0IHNvYXBfbGFzdHJlc3BvbnNlIHRhZ19uYW1lIGFzY2VuZGluZyBhdmVyYWdlIGJ5ICcgK1xuICAgICAgJ2RlZmluZSBkZXNjZW5kaW5nIGRvIGVxdWFscyBmcm96ZW4gZ3JvdXAgaGFuZGxlX2ZhaWx1cmUgaW1wb3J0IGluICcgK1xuICAgICAgJ2ludG8gam9pbiBsZXQgbWF0Y2ggbWF4IG1pbiBvbiBvcmRlciBwYXJlbnQgcHJvdGVjdGVkIHByb3ZpZGUgcHVibGljICcgK1xuICAgICAgJ3JlcXVpcmUgcmV0dXJuaG9tZSBza2lwIHNwbGl0X3RocmVhZCBzdW0gdGFrZSB0aHJlYWQgdG8gdHJhaXQgdHlwZSAnICtcbiAgICAgICd3aGVyZSB3aXRoIHlpZWxkIHlpZWxkaG9tZSdcbiAgfTtcbiAgdmFyIEhUTUxfQ09NTUVOVCA9IGhsanMuQ09NTUVOVChcbiAgICAnPCEtLScsXG4gICAgJy0tPicsXG4gICAge1xuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfVxuICApO1xuICB2YXIgTEFTU09fTk9QUk9DRVNTID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAnXFxcXFtub3Byb2Nlc3NcXFxcXScsXG4gICAgc3RhcnRzOiB7XG4gICAgICBlbmQ6ICdcXFxcWy9ub3Byb2Nlc3NcXFxcXScsXG4gICAgICByZXR1cm5FbmQ6IHRydWUsXG4gICAgICBjb250YWluczogW0hUTUxfQ09NTUVOVF1cbiAgICB9XG4gIH07XG4gIHZhciBMQVNTT19TVEFSVCA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICBiZWdpbjogJ1xcXFxbL25vcHJvY2Vzc3wnICsgTEFTU09fQU5HTEVfUkVcbiAgfTtcbiAgdmFyIExBU1NPX0RBVEFNRU1CRVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICBiZWdpbjogJ1xcJycgKyBMQVNTT19JREVOVF9SRSArICdcXCcnXG4gIH07XG4gIHZhciBMQVNTT19DT0RFID0gW1xuICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuaW5oZXJpdChobGpzLkNfTlVNQkVSX01PREUsIHtiZWdpbjogaGxqcy5DX05VTUJFUl9SRSArICd8KC0/aW5maW5pdHl8TmFOKVxcXFxiJ30pLFxuICAgIGhsanMuaW5oZXJpdChobGpzLkFQT1NfU1RSSU5HX01PREUsIHtpbGxlZ2FsOiBudWxsfSksXG4gICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtpbGxlZ2FsOiBudWxsfSksXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgIGJlZ2luOiAnYCcsIGVuZDogJ2AnXG4gICAgfSxcbiAgICB7IC8vIHZhcmlhYmxlc1xuICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnWyMkXScgKyBMQVNTT19JREVOVF9SRVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICcjJywgZW5kOiAnXFxcXGQrJyxcbiAgICAgICAgICBpbGxlZ2FsOiAnXFxcXFcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgYmVnaW46ICc6OlxcXFxzKicsIGVuZDogTEFTU09fSURFTlRfUkUsXG4gICAgICBpbGxlZ2FsOiAnXFxcXFcnXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnLSg/IWluZmluaXR5KScgKyBMQVNTT19JREVOVF9SRSxcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnKFxcXFwuXFxcXC5cXFxcLiknXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGJlZ2luOiAvKC0+fFxcLilcXHMqLyxcbiAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgIGNvbnRhaW5zOiBbTEFTU09fREFUQU1FTUJFUl1cbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgIGJlZ2luS2V5d29yZHM6ICdkZWZpbmUnLFxuICAgICAgcmV0dXJuRW5kOiB0cnVlLCBlbmQ6ICdcXFxcKHw9PicsXG4gICAgICBjb250YWluczogW1xuICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7YmVnaW46IExBU1NPX0lERU5UX1JFICsgJyg9KD8hPikpP3xbLSsqLyVdKD8hPiknfSlcbiAgICAgIF1cbiAgICB9XG4gIF07XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0xhc3NvJyxcbiAgICBhbGlhc2VzOiBbJ2xzJywgJ2xhc3Nvc2NyaXB0J10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3JkczogTEFTU09fS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiBMQVNTT19DTE9TRV9SRSxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBzdGFydHM6IHsgLy8gbWFya3VwXG4gICAgICAgICAgZW5kOiAnXFxcXFt8JyArIExBU1NPX0FOR0xFX1JFLFxuICAgICAgICAgIHJldHVybkVuZDogdHJ1ZSxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgY29udGFpbnM6IFtIVE1MX0NPTU1FTlRdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBMQVNTT19OT1BST0NFU1MsXG4gICAgICBMQVNTT19TVEFSVCxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnXFxcXFtub19zcXVhcmVfYnJhY2tldHMnLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBlbmQ6ICdcXFxcWy9ub19zcXVhcmVfYnJhY2tldHNcXFxcXScsIC8vIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGUgbGFuZ3VhZ2VcbiAgICAgICAgICBrZXl3b3JkczogTEFTU09fS0VZV09SRFMsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgICAgIGJlZ2luOiBMQVNTT19DTE9TRV9SRSxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgICAgICBlbmQ6ICdcXFxcW25vcHJvY2Vzc1xcXFxdfCcgKyBMQVNTT19BTkdMRV9SRSxcbiAgICAgICAgICAgICAgICByZXR1cm5FbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFtIVE1MX0NPTU1FTlRdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBMQVNTT19OT1BST0NFU1MsXG4gICAgICAgICAgICBMQVNTT19TVEFSVFxuICAgICAgICAgIF0uY29uY2F0KExBU1NPX0NPREUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ1xcXFxbJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdeIyEnLCBlbmQ6J2xhc3NvOSQnLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9XG4gICAgXS5jb25jYXQoTEFTU09fQ09ERSlcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsYXNzbztcbiJdLCJzb3VyY2VSb290IjoiIn0=