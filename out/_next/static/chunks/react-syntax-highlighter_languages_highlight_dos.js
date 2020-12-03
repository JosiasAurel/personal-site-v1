(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_dos"],{

/***/ "./node_modules/highlight.js/lib/languages/dos.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dos.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Batch file (DOS)
Author: Alexander Makarov <sam@rmcreative.ru>
Contributors: Anton Kochkov <anton.kochkov@gmail.com>
Website: https://en.wikipedia.org/wiki/Batch_file
*/

function dos(hljs) {
  var COMMENT = hljs.COMMENT(
    /^\s*@?rem\b/, /$/,
    {
      relevance: 10
    }
  );
  var LABEL = {
    className: 'symbol',
    begin: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)',
    relevance: 0
  };
  return {
    name: 'Batch file (DOS)',
    aliases: ['bat', 'cmd'],
    case_insensitive: true,
    illegal: /\/\*/,
    keywords: {
      keyword:
        'if else goto for in do call exit not exist errorlevel defined ' +
        'equ neq lss leq gtr geq',
      built_in:
        'prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux ' +
        'shift cd dir echo setlocal endlocal set pause copy ' +
        'append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color ' +
        'comp compact convert date dir diskcomp diskcopy doskey erase fs ' +
        'find findstr format ftype graftabl help keyb label md mkdir mode more move path ' +
        'pause print popd pushd promt rd recover rem rename replace restore rmdir shift ' +
        'sort start subst time title tree type ver verify vol ' +
        // winutils
        'ping net ipconfig taskkill xcopy ren del'
    },
    contains: [
      {
        className: 'variable', begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
      },
      {
        className: 'function',
        begin: LABEL.begin, end: 'goto:eof',
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'}),
          COMMENT
        ]
      },
      {
        className: 'number', begin: '\\b\\d+',
        relevance: 0
      },
      COMMENT
    ]
  };
}

module.exports = dos;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Rvcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDJEQUEyRDtBQUNwRztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2Rvcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQmF0Y2ggZmlsZSAoRE9TKVxuQXV0aG9yOiBBbGV4YW5kZXIgTWFrYXJvdiA8c2FtQHJtY3JlYXRpdmUucnU+XG5Db250cmlidXRvcnM6IEFudG9uIEtvY2hrb3YgPGFudG9uLmtvY2hrb3ZAZ21haWwuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmF0Y2hfZmlsZVxuKi9cblxuZnVuY3Rpb24gZG9zKGhsanMpIHtcbiAgdmFyIENPTU1FTlQgPSBobGpzLkNPTU1FTlQoXG4gICAgL15cXHMqQD9yZW1cXGIvLCAvJC8sXG4gICAge1xuICAgICAgcmVsZXZhbmNlOiAxMFxuICAgIH1cbiAgKTtcbiAgdmFyIExBQkVMID0ge1xuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgYmVnaW46ICdeXFxcXHMqW0EtWmEtei5fP11bQS1aYS16MC05XyQjQH4uP10qKDp8XFxcXHMrbGFiZWwpJyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQmF0Y2ggZmlsZSAoRE9TKScsXG4gICAgYWxpYXNlczogWydiYXQnLCAnY21kJ10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBpbGxlZ2FsOiAvXFwvXFwqLyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDpcbiAgICAgICAgJ2lmIGVsc2UgZ290byBmb3IgaW4gZG8gY2FsbCBleGl0IG5vdCBleGlzdCBlcnJvcmxldmVsIGRlZmluZWQgJyArXG4gICAgICAgICdlcXUgbmVxIGxzcyBsZXEgZ3RyIGdlcScsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgJ3BybiBudWwgbHB0MyBscHQyIGxwdDEgY29uIGNvbTQgY29tMyBjb20yIGNvbTEgYXV4ICcgK1xuICAgICAgICAnc2hpZnQgY2QgZGlyIGVjaG8gc2V0bG9jYWwgZW5kbG9jYWwgc2V0IHBhdXNlIGNvcHkgJyArXG4gICAgICAgICdhcHBlbmQgYXNzb2MgYXQgYXR0cmliIGJyZWFrIGNhY2xzIGNkIGNoY3AgY2hkaXIgY2hrZHNrIGNoa250ZnMgY2xzIGNtZCBjb2xvciAnICtcbiAgICAgICAgJ2NvbXAgY29tcGFjdCBjb252ZXJ0IGRhdGUgZGlyIGRpc2tjb21wIGRpc2tjb3B5IGRvc2tleSBlcmFzZSBmcyAnICtcbiAgICAgICAgJ2ZpbmQgZmluZHN0ciBmb3JtYXQgZnR5cGUgZ3JhZnRhYmwgaGVscCBrZXliIGxhYmVsIG1kIG1rZGlyIG1vZGUgbW9yZSBtb3ZlIHBhdGggJyArXG4gICAgICAgICdwYXVzZSBwcmludCBwb3BkIHB1c2hkIHByb210IHJkIHJlY292ZXIgcmVtIHJlbmFtZSByZXBsYWNlIHJlc3RvcmUgcm1kaXIgc2hpZnQgJyArXG4gICAgICAgICdzb3J0IHN0YXJ0IHN1YnN0IHRpbWUgdGl0bGUgdHJlZSB0eXBlIHZlciB2ZXJpZnkgdm9sICcgK1xuICAgICAgICAvLyB3aW51dGlsc1xuICAgICAgICAncGluZyBuZXQgaXBjb25maWcgdGFza2tpbGwgeGNvcHkgcmVuIGRlbCdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJywgYmVnaW46IC8lJVteIF18JVteIF0rPyV8IVteIF0rPyEvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luOiBMQUJFTC5iZWdpbiwgZW5kOiAnZ290bzplb2YnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtiZWdpbjogJyhbX2EtekEtWl1cXFxcdypcXFxcLikqKFtfYS16QS1aXVxcXFx3KjopP1tfYS16QS1aXVxcXFx3Kid9KSxcbiAgICAgICAgICBDT01NRU5UXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsIGJlZ2luOiAnXFxcXGJcXFxcZCsnLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBDT01NRU5UXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvcztcbiJdLCJzb3VyY2VSb290IjoiIn0=