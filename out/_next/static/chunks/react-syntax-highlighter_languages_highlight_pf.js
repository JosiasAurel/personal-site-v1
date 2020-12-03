(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_pf"],{

/***/ "./node_modules/highlight.js/lib/languages/pf.js":
/*!*******************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/pf.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Packet Filter config
Description: pf.conf — packet filter configuration file (OpenBSD)
Author: Peter Piwowarski <oldlaptop654@aol.com>
Website: http://man.openbsd.org/pf.conf
Category: config
*/

function pf(hljs) {
  var MACRO = {
    className: 'variable',
    begin: /\$[\w\d#@][\w\d_]*/
  };
  var TABLE = {
    className: 'variable',
    begin: /<(?!\/)/, end: />/
  };

  return {
    name: 'Packet Filter config',
    aliases: ['pf.conf'],
    keywords: {
      $pattern: /[a-z0-9_<>-]+/,
      built_in: /* block match pass are "actions" in pf.conf(5), the rest are
                 * lexically similar top-level commands.
                 */
        'block match pass load anchor|5 antispoof|10 set table',
      keyword:
        'in out log quick on rdomain inet inet6 proto from port os to route ' +
        'allow-opts divert-packet divert-reply divert-to flags group icmp-type ' +
        'icmp6-type label once probability recieved-on rtable prio queue ' +
        'tos tag tagged user keep fragment for os drop ' +
        'af-to|10 binat-to|10 nat-to|10 rdr-to|10 bitmask least-stats random round-robin ' +
        'source-hash static-port ' +
        'dup-to reply-to route-to ' +
        'parent bandwidth default min max qlimit ' +
        'block-policy debug fingerprints hostid limit loginterface optimization ' +
        'reassemble ruleset-optimization basic none profile skip state-defaults ' +
        'state-policy timeout ' +
        'const counters persist ' +
        'no modulate synproxy state|5 floating if-bound no-sync pflow|10 sloppy ' +
        'source-track global rule max-src-nodes max-src-states max-src-conn ' +
        'max-src-conn-rate overload flush ' +
        'scrub|5 max-mss min-ttl no-df|10 random-id',
      literal:
        'all any no-route self urpf-failed egress|5 unknown'
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.NUMBER_MODE,
      hljs.QUOTE_STRING_MODE,
      MACRO,
      TABLE
    ]
  };
}

module.exports = pf;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3BmLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9wZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogUGFja2V0IEZpbHRlciBjb25maWdcbkRlc2NyaXB0aW9uOiBwZi5jb25mIOKAlCBwYWNrZXQgZmlsdGVyIGNvbmZpZ3VyYXRpb24gZmlsZSAoT3BlbkJTRClcbkF1dGhvcjogUGV0ZXIgUGl3b3dhcnNraSA8b2xkbGFwdG9wNjU0QGFvbC5jb20+XG5XZWJzaXRlOiBodHRwOi8vbWFuLm9wZW5ic2Qub3JnL3BmLmNvbmZcbkNhdGVnb3J5OiBjb25maWdcbiovXG5cbmZ1bmN0aW9uIHBmKGhsanMpIHtcbiAgdmFyIE1BQ1JPID0ge1xuICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICBiZWdpbjogL1xcJFtcXHdcXGQjQF1bXFx3XFxkX10qL1xuICB9O1xuICB2YXIgVEFCTEUgPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIGJlZ2luOiAvPCg/IVxcLykvLCBlbmQ6IC8+L1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1BhY2tldCBGaWx0ZXIgY29uZmlnJyxcbiAgICBhbGlhc2VzOiBbJ3BmLmNvbmYnXSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgJHBhdHRlcm46IC9bYS16MC05Xzw+LV0rLyxcbiAgICAgIGJ1aWx0X2luOiAvKiBibG9jayBtYXRjaCBwYXNzIGFyZSBcImFjdGlvbnNcIiBpbiBwZi5jb25mKDUpLCB0aGUgcmVzdCBhcmVcbiAgICAgICAgICAgICAgICAgKiBsZXhpY2FsbHkgc2ltaWxhciB0b3AtbGV2ZWwgY29tbWFuZHMuXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICdibG9jayBtYXRjaCBwYXNzIGxvYWQgYW5jaG9yfDUgYW50aXNwb29mfDEwIHNldCB0YWJsZScsXG4gICAgICBrZXl3b3JkOlxuICAgICAgICAnaW4gb3V0IGxvZyBxdWljayBvbiByZG9tYWluIGluZXQgaW5ldDYgcHJvdG8gZnJvbSBwb3J0IG9zIHRvIHJvdXRlICcgK1xuICAgICAgICAnYWxsb3ctb3B0cyBkaXZlcnQtcGFja2V0IGRpdmVydC1yZXBseSBkaXZlcnQtdG8gZmxhZ3MgZ3JvdXAgaWNtcC10eXBlICcgK1xuICAgICAgICAnaWNtcDYtdHlwZSBsYWJlbCBvbmNlIHByb2JhYmlsaXR5IHJlY2lldmVkLW9uIHJ0YWJsZSBwcmlvIHF1ZXVlICcgK1xuICAgICAgICAndG9zIHRhZyB0YWdnZWQgdXNlciBrZWVwIGZyYWdtZW50IGZvciBvcyBkcm9wICcgK1xuICAgICAgICAnYWYtdG98MTAgYmluYXQtdG98MTAgbmF0LXRvfDEwIHJkci10b3wxMCBiaXRtYXNrIGxlYXN0LXN0YXRzIHJhbmRvbSByb3VuZC1yb2JpbiAnICtcbiAgICAgICAgJ3NvdXJjZS1oYXNoIHN0YXRpYy1wb3J0ICcgK1xuICAgICAgICAnZHVwLXRvIHJlcGx5LXRvIHJvdXRlLXRvICcgK1xuICAgICAgICAncGFyZW50IGJhbmR3aWR0aCBkZWZhdWx0IG1pbiBtYXggcWxpbWl0ICcgK1xuICAgICAgICAnYmxvY2stcG9saWN5IGRlYnVnIGZpbmdlcnByaW50cyBob3N0aWQgbGltaXQgbG9naW50ZXJmYWNlIG9wdGltaXphdGlvbiAnICtcbiAgICAgICAgJ3JlYXNzZW1ibGUgcnVsZXNldC1vcHRpbWl6YXRpb24gYmFzaWMgbm9uZSBwcm9maWxlIHNraXAgc3RhdGUtZGVmYXVsdHMgJyArXG4gICAgICAgICdzdGF0ZS1wb2xpY3kgdGltZW91dCAnICtcbiAgICAgICAgJ2NvbnN0IGNvdW50ZXJzIHBlcnNpc3QgJyArXG4gICAgICAgICdubyBtb2R1bGF0ZSBzeW5wcm94eSBzdGF0ZXw1IGZsb2F0aW5nIGlmLWJvdW5kIG5vLXN5bmMgcGZsb3d8MTAgc2xvcHB5ICcgK1xuICAgICAgICAnc291cmNlLXRyYWNrIGdsb2JhbCBydWxlIG1heC1zcmMtbm9kZXMgbWF4LXNyYy1zdGF0ZXMgbWF4LXNyYy1jb25uICcgK1xuICAgICAgICAnbWF4LXNyYy1jb25uLXJhdGUgb3ZlcmxvYWQgZmx1c2ggJyArXG4gICAgICAgICdzY3J1Ynw1IG1heC1tc3MgbWluLXR0bCBuby1kZnwxMCByYW5kb20taWQnLFxuICAgICAgbGl0ZXJhbDpcbiAgICAgICAgJ2FsbCBhbnkgbm8tcm91dGUgc2VsZiB1cnBmLWZhaWxlZCBlZ3Jlc3N8NSB1bmtub3duJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICBobGpzLk5VTUJFUl9NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIE1BQ1JPLFxuICAgICAgVEFCTEVcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGY7XG4iXSwic291cmNlUm9vdCI6IiJ9