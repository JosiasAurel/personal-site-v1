(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_autohotkey"],{

/***/ "./node_modules/highlight.js/lib/languages/autohotkey.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/autohotkey.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: AutoHotkey
Author: Seongwon Lee <dlimpid@gmail.com>
Description: AutoHotkey language definition
Category: scripting
*/

/** @type LanguageFn */
function autohotkey(hljs) {
  var BACKTICK_ESCAPE = {
    begin: '`[\\s\\S]'
  };

  return {
    name: 'AutoHotkey',
    case_insensitive: true,
    aliases: ['ahk'],
    keywords: {
      keyword: 'Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group',
      literal: 'true false NOT AND OR',
      built_in: 'ComSpec Clipboard ClipboardAll ErrorLevel',
    },
    contains: [
      BACKTICK_ESCAPE,
      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [BACKTICK_ESCAPE]}),
      hljs.COMMENT(';', '$', {relevance: 0}),
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'number',
        begin: hljs.NUMBER_RE,
        relevance: 0
      },
      {
        className: 'variable', //subst would be the most accurate however fails the point of highlighting. variable is comparably the most accurate that actually has some effect
        begin: '%[a-zA-Z0-9#_$@]+%'
      },
      {
        className: 'built_in',
        begin: '^\\s*\\w+\\s*(,|%)'
        //I don't really know if this is totally relevant
      },
      {
        className: 'title', //symbol would be most accurate however is highlighted just like built_in and that makes up a lot of AutoHotkey code
		                        //meaning that it would fail to highlight anything
        variants: [
          {begin: '^[^\\n";]+::(?!=)'},
          {begin: '^[^\\n";]+:(?!=)', relevance: 0} // zero relevance as it catches a lot of things
                                                    // followed by a single ':' in many languages
        ]
      },
      {
        className: 'meta',
        begin: '^\\s*#\\w+', end:'$',
        relevance: 0
      },
	    {
        className: 'built_in',
        begin: 'A_[a-zA-Z0-9]+'
      },
      {
        // consecutive commas, not for highlighting but just for relevance
        begin: ',\\s*,'
      }
    ]
  }
}

module.exports = autohotkey;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2F1dG9ob3RrZXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNENBQTRDLDRCQUE0QjtBQUN4RSxxQkFBcUIsU0FBUyxhQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0IsV0FBVztBQUN0QyxXQUFXLGdCQUFnQix3QkFBd0I7QUFDbkQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9hdXRvaG90a2V5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBBdXRvSG90a2V5XG5BdXRob3I6IFNlb25nd29uIExlZSA8ZGxpbXBpZEBnbWFpbC5jb20+XG5EZXNjcmlwdGlvbjogQXV0b0hvdGtleSBsYW5ndWFnZSBkZWZpbml0aW9uXG5DYXRlZ29yeTogc2NyaXB0aW5nXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gYXV0b2hvdGtleShobGpzKSB7XG4gIHZhciBCQUNLVElDS19FU0NBUEUgPSB7XG4gICAgYmVnaW46ICdgW1xcXFxzXFxcXFNdJ1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0F1dG9Ib3RrZXknLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgYWxpYXNlczogWydhaGsnXSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDogJ0JyZWFrIENvbnRpbnVlIENyaXRpY2FsIEV4aXQgRXhpdEFwcCBHb3N1YiBHb3RvIE5ldyBPbkV4aXQgUGF1c2UgcmV0dXJuIFNldEJhdGNoTGluZXMgU2V0VGltZXIgU3VzcGVuZCBUaHJlYWQgVGhyb3cgVW50aWwgYWhrX2lkIGFoa19jbGFzcyBhaGtfcGlkIGFoa19leGUgYWhrX2dyb3VwJyxcbiAgICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlIE5PVCBBTkQgT1InLFxuICAgICAgYnVpbHRfaW46ICdDb21TcGVjIENsaXBib2FyZCBDbGlwYm9hcmRBbGwgRXJyb3JMZXZlbCcsXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgQkFDS1RJQ0tfRVNDQVBFLFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtjb250YWluczogW0JBQ0tUSUNLX0VTQ0FQRV19KSxcbiAgICAgIGhsanMuQ09NTUVOVCgnOycsICckJywge3JlbGV2YW5jZTogMH0pLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46IGhsanMuTlVNQkVSX1JFLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJywgLy9zdWJzdCB3b3VsZCBiZSB0aGUgbW9zdCBhY2N1cmF0ZSBob3dldmVyIGZhaWxzIHRoZSBwb2ludCBvZiBoaWdobGlnaHRpbmcuIHZhcmlhYmxlIGlzIGNvbXBhcmFibHkgdGhlIG1vc3QgYWNjdXJhdGUgdGhhdCBhY3R1YWxseSBoYXMgc29tZSBlZmZlY3RcbiAgICAgICAgYmVnaW46ICclW2EtekEtWjAtOSNfJEBdKyUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIGJlZ2luOiAnXlxcXFxzKlxcXFx3K1xcXFxzKigsfCUpJ1xuICAgICAgICAvL0kgZG9uJ3QgcmVhbGx5IGtub3cgaWYgdGhpcyBpcyB0b3RhbGx5IHJlbGV2YW50XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsIC8vc3ltYm9sIHdvdWxkIGJlIG1vc3QgYWNjdXJhdGUgaG93ZXZlciBpcyBoaWdobGlnaHRlZCBqdXN0IGxpa2UgYnVpbHRfaW4gYW5kIHRoYXQgbWFrZXMgdXAgYSBsb3Qgb2YgQXV0b0hvdGtleSBjb2RlXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgLy9tZWFuaW5nIHRoYXQgaXQgd291bGQgZmFpbCB0byBoaWdobGlnaHQgYW55dGhpbmdcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7YmVnaW46ICdeW15cXFxcblwiO10rOjooPyE9KSd9LFxuICAgICAgICAgIHtiZWdpbjogJ15bXlxcXFxuXCI7XSs6KD8hPSknLCByZWxldmFuY2U6IDB9IC8vIHplcm8gcmVsZXZhbmNlIGFzIGl0IGNhdGNoZXMgYSBsb3Qgb2YgdGhpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9sbG93ZWQgYnkgYSBzaW5nbGUgJzonIGluIG1hbnkgbGFuZ3VhZ2VzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ15cXFxccyojXFxcXHcrJywgZW5kOickJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuXHQgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIGJlZ2luOiAnQV9bYS16QS1aMC05XSsnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBjb25zZWN1dGl2ZSBjb21tYXMsIG5vdCBmb3IgaGlnaGxpZ2h0aW5nIGJ1dCBqdXN0IGZvciByZWxldmFuY2VcbiAgICAgICAgYmVnaW46ICcsXFxcXHMqLCdcbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhdXRvaG90a2V5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==