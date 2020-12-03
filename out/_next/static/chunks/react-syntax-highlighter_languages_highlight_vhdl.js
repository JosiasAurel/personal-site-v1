(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_vhdl"],{

/***/ "./node_modules/highlight.js/lib/languages/vhdl.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/vhdl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: VHDL
Author: Igor Kalnitsky <igor@kalnitsky.org>
Contributors: Daniel C.K. Kho <daniel.kho@tauhop.com>, Guillaume Savaton <guillaume.savaton@eseo.fr>
Description: VHDL is a hardware description language used in electronic design automation to describe digital and mixed-signal systems.
Website: https://en.wikipedia.org/wiki/VHDL
*/

function vhdl(hljs) {
  // Regular expression for VHDL numeric literals.

  // Decimal literal:
  var INTEGER_RE = '\\d(_|\\d)*';
  var EXPONENT_RE = '[eE][-+]?' + INTEGER_RE;
  var DECIMAL_LITERAL_RE = INTEGER_RE + '(\\.' + INTEGER_RE + ')?' + '(' + EXPONENT_RE + ')?';
  // Based literal:
  var BASED_INTEGER_RE = '\\w+';
  var BASED_LITERAL_RE = INTEGER_RE + '#' + BASED_INTEGER_RE + '(\\.' + BASED_INTEGER_RE + ')?' + '#' + '(' + EXPONENT_RE + ')?';

  var NUMBER_RE = '\\b(' + BASED_LITERAL_RE + '|' + DECIMAL_LITERAL_RE + ')';

  return {
    name: 'VHDL',
    case_insensitive: true,
    keywords: {
      keyword:
        'abs access after alias all and architecture array assert assume assume_guarantee attribute ' +
        'begin block body buffer bus case component configuration constant context cover disconnect ' +
        'downto default else elsif end entity exit fairness file for force function generate ' +
        'generic group guarded if impure in inertial inout is label library linkage literal ' +
        'loop map mod nand new next nor not null of on open or others out package parameter port ' +
        'postponed procedure process property protected pure range record register reject ' +
        'release rem report restrict restrict_guarantee return rol ror select sequence ' +
        'severity shared signal sla sll sra srl strong subtype then to transport type ' +
        'unaffected units until use variable view vmode vprop vunit wait when while with xnor xor',
      built_in:
        'boolean bit character ' +
        'integer time delay_length natural positive ' +
        'string bit_vector file_open_kind file_open_status ' +
        'std_logic std_logic_vector unsigned signed boolean_vector integer_vector ' +
        'std_ulogic std_ulogic_vector unresolved_unsigned u_unsigned unresolved_signed u_signed ' +
        'real_vector time_vector',
      literal:
        'false true note warning error failure ' +  // severity_level
        'line text side width'                      // textio
    },
    illegal: '{',
    contains: [
      hljs.C_BLOCK_COMMENT_MODE,      // VHDL-2008 block commenting.
      hljs.COMMENT('--', '$'),
      hljs.QUOTE_STRING_MODE,
      {
        className: 'number',
        begin: NUMBER_RE,
        relevance: 0
      },
      {
        className: 'string',
        begin: '\'(U|X|0|1|Z|W|L|H|-)\'',
        contains: [hljs.BACKSLASH_ESCAPE]
      },
      {
        className: 'symbol',
        begin: '\'[A-Za-z](_?[A-Za-z0-9])*',
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
}

module.exports = vhdl;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3ZoZGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X3ZoZGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFZIRExcbkF1dGhvcjogSWdvciBLYWxuaXRza3kgPGlnb3JAa2Fsbml0c2t5Lm9yZz5cbkNvbnRyaWJ1dG9yczogRGFuaWVsIEMuSy4gS2hvIDxkYW5pZWwua2hvQHRhdWhvcC5jb20+LCBHdWlsbGF1bWUgU2F2YXRvbiA8Z3VpbGxhdW1lLnNhdmF0b25AZXNlby5mcj5cbkRlc2NyaXB0aW9uOiBWSERMIGlzIGEgaGFyZHdhcmUgZGVzY3JpcHRpb24gbGFuZ3VhZ2UgdXNlZCBpbiBlbGVjdHJvbmljIGRlc2lnbiBhdXRvbWF0aW9uIHRvIGRlc2NyaWJlIGRpZ2l0YWwgYW5kIG1peGVkLXNpZ25hbCBzeXN0ZW1zLlxuV2Vic2l0ZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVkhETFxuKi9cblxuZnVuY3Rpb24gdmhkbChobGpzKSB7XG4gIC8vIFJlZ3VsYXIgZXhwcmVzc2lvbiBmb3IgVkhETCBudW1lcmljIGxpdGVyYWxzLlxuXG4gIC8vIERlY2ltYWwgbGl0ZXJhbDpcbiAgdmFyIElOVEVHRVJfUkUgPSAnXFxcXGQoX3xcXFxcZCkqJztcbiAgdmFyIEVYUE9ORU5UX1JFID0gJ1tlRV1bLStdPycgKyBJTlRFR0VSX1JFO1xuICB2YXIgREVDSU1BTF9MSVRFUkFMX1JFID0gSU5URUdFUl9SRSArICcoXFxcXC4nICsgSU5URUdFUl9SRSArICcpPycgKyAnKCcgKyBFWFBPTkVOVF9SRSArICcpPyc7XG4gIC8vIEJhc2VkIGxpdGVyYWw6XG4gIHZhciBCQVNFRF9JTlRFR0VSX1JFID0gJ1xcXFx3Kyc7XG4gIHZhciBCQVNFRF9MSVRFUkFMX1JFID0gSU5URUdFUl9SRSArICcjJyArIEJBU0VEX0lOVEVHRVJfUkUgKyAnKFxcXFwuJyArIEJBU0VEX0lOVEVHRVJfUkUgKyAnKT8nICsgJyMnICsgJygnICsgRVhQT05FTlRfUkUgKyAnKT8nO1xuXG4gIHZhciBOVU1CRVJfUkUgPSAnXFxcXGIoJyArIEJBU0VEX0xJVEVSQUxfUkUgKyAnfCcgKyBERUNJTUFMX0xJVEVSQUxfUkUgKyAnKSc7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnVkhETCcsXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDpcbiAgICAgICAgJ2FicyBhY2Nlc3MgYWZ0ZXIgYWxpYXMgYWxsIGFuZCBhcmNoaXRlY3R1cmUgYXJyYXkgYXNzZXJ0IGFzc3VtZSBhc3N1bWVfZ3VhcmFudGVlIGF0dHJpYnV0ZSAnICtcbiAgICAgICAgJ2JlZ2luIGJsb2NrIGJvZHkgYnVmZmVyIGJ1cyBjYXNlIGNvbXBvbmVudCBjb25maWd1cmF0aW9uIGNvbnN0YW50IGNvbnRleHQgY292ZXIgZGlzY29ubmVjdCAnICtcbiAgICAgICAgJ2Rvd250byBkZWZhdWx0IGVsc2UgZWxzaWYgZW5kIGVudGl0eSBleGl0IGZhaXJuZXNzIGZpbGUgZm9yIGZvcmNlIGZ1bmN0aW9uIGdlbmVyYXRlICcgK1xuICAgICAgICAnZ2VuZXJpYyBncm91cCBndWFyZGVkIGlmIGltcHVyZSBpbiBpbmVydGlhbCBpbm91dCBpcyBsYWJlbCBsaWJyYXJ5IGxpbmthZ2UgbGl0ZXJhbCAnICtcbiAgICAgICAgJ2xvb3AgbWFwIG1vZCBuYW5kIG5ldyBuZXh0IG5vciBub3QgbnVsbCBvZiBvbiBvcGVuIG9yIG90aGVycyBvdXQgcGFja2FnZSBwYXJhbWV0ZXIgcG9ydCAnICtcbiAgICAgICAgJ3Bvc3Rwb25lZCBwcm9jZWR1cmUgcHJvY2VzcyBwcm9wZXJ0eSBwcm90ZWN0ZWQgcHVyZSByYW5nZSByZWNvcmQgcmVnaXN0ZXIgcmVqZWN0ICcgK1xuICAgICAgICAncmVsZWFzZSByZW0gcmVwb3J0IHJlc3RyaWN0IHJlc3RyaWN0X2d1YXJhbnRlZSByZXR1cm4gcm9sIHJvciBzZWxlY3Qgc2VxdWVuY2UgJyArXG4gICAgICAgICdzZXZlcml0eSBzaGFyZWQgc2lnbmFsIHNsYSBzbGwgc3JhIHNybCBzdHJvbmcgc3VidHlwZSB0aGVuIHRvIHRyYW5zcG9ydCB0eXBlICcgK1xuICAgICAgICAndW5hZmZlY3RlZCB1bml0cyB1bnRpbCB1c2UgdmFyaWFibGUgdmlldyB2bW9kZSB2cHJvcCB2dW5pdCB3YWl0IHdoZW4gd2hpbGUgd2l0aCB4bm9yIHhvcicsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgJ2Jvb2xlYW4gYml0IGNoYXJhY3RlciAnICtcbiAgICAgICAgJ2ludGVnZXIgdGltZSBkZWxheV9sZW5ndGggbmF0dXJhbCBwb3NpdGl2ZSAnICtcbiAgICAgICAgJ3N0cmluZyBiaXRfdmVjdG9yIGZpbGVfb3Blbl9raW5kIGZpbGVfb3Blbl9zdGF0dXMgJyArXG4gICAgICAgICdzdGRfbG9naWMgc3RkX2xvZ2ljX3ZlY3RvciB1bnNpZ25lZCBzaWduZWQgYm9vbGVhbl92ZWN0b3IgaW50ZWdlcl92ZWN0b3IgJyArXG4gICAgICAgICdzdGRfdWxvZ2ljIHN0ZF91bG9naWNfdmVjdG9yIHVucmVzb2x2ZWRfdW5zaWduZWQgdV91bnNpZ25lZCB1bnJlc29sdmVkX3NpZ25lZCB1X3NpZ25lZCAnICtcbiAgICAgICAgJ3JlYWxfdmVjdG9yIHRpbWVfdmVjdG9yJyxcbiAgICAgIGxpdGVyYWw6XG4gICAgICAgICdmYWxzZSB0cnVlIG5vdGUgd2FybmluZyBlcnJvciBmYWlsdXJlICcgKyAgLy8gc2V2ZXJpdHlfbGV2ZWxcbiAgICAgICAgJ2xpbmUgdGV4dCBzaWRlIHdpZHRoJyAgICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0aW9cbiAgICB9LFxuICAgIGlsbGVnYWw6ICd7JyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSwgICAgICAvLyBWSERMLTIwMDggYmxvY2sgY29tbWVudGluZy5cbiAgICAgIGhsanMuQ09NTUVOVCgnLS0nLCAnJCcpLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46IE5VTUJFUl9SRSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1xcJyhVfFh8MHwxfFp8V3xMfEh8LSlcXCcnLFxuICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIGJlZ2luOiAnXFwnW0EtWmEtel0oXz9bQS1aYS16MC05XSkqJyxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZoZGw7XG4iXSwic291cmNlUm9vdCI6IiJ9