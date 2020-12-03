(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_less"],{

/***/ "./node_modules/highlight.js/lib/languages/less.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/less.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Less
Description: It's CSS, with just a little more.
Author:   Max Mikhailov <seven.phases.max@gmail.com>
Website: http://lesscss.org
Category: common, css
*/

function less(hljs) {
  var IDENT_RE        = '[\\w-]+'; // yes, Less identifiers may begin with a digit
  var INTERP_IDENT_RE = '(' + IDENT_RE + '|@{' + IDENT_RE + '})';

  /* Generic Modes */

  var RULES = [], VALUE = []; // forward def. for recursive modes

  var STRING_MODE = function(c) { return {
    // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
    className: 'string', begin: '~?' + c + '.*?' + c
  };};

  var IDENT_MODE = function(name, begin, relevance) { return {
    className: name, begin: begin, relevance: relevance
  };};

  var PARENS_MODE = {
    // used only to properly balance nested parens inside mixin call, def. arg list
    begin: '\\(', end: '\\)', contains: VALUE, relevance: 0
  };

  // generic Less highlighter (used almost everywhere except selectors):
  VALUE.push(
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    STRING_MODE("'"),
    STRING_MODE('"'),
    hljs.CSS_NUMBER_MODE, // fixme: it does not include dot for numbers like .5em :(
    {
      begin: '(url|data-uri)\\(',
      starts: {className: 'string', end: '[\\)\\n]', excludeEnd: true}
    },
    IDENT_MODE('number', '#[0-9A-Fa-f]+\\b'),
    PARENS_MODE,
    IDENT_MODE('variable', '@@?' + IDENT_RE, 10),
    IDENT_MODE('variable', '@{'  + IDENT_RE + '}'),
    IDENT_MODE('built_in', '~?`[^`]*?`'), // inline javascript (or whatever host language) *multiline* string
    { // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
      className: 'attribute', begin: IDENT_RE + '\\s*:', end: ':', returnBegin: true, excludeEnd: true
    },
    {
      className: 'meta',
      begin: '!important'
    }
  );

  var VALUE_WITH_RULESETS = VALUE.concat({
    begin: '{', end: '}', contains: RULES
  });

  var MIXIN_GUARD_MODE = {
    beginKeywords: 'when', endsWithParent: true,
    contains: [{beginKeywords: 'and not'}].concat(VALUE) // using this form to override VALUE’s 'function' match
  };

  /* Rule-Level Modes */

  var RULE_MODE = {
    begin: INTERP_IDENT_RE + '\\s*:', returnBegin: true, end: '[;}]',
    relevance: 0,
    contains: [
      {
        className: 'attribute',
        begin: INTERP_IDENT_RE, end: ':', excludeEnd: true,
        starts: {
          endsWithParent: true, illegal: '[<=$]',
          relevance: 0,
          contains: VALUE
        }
      }
    ]
  };

  var AT_RULE_MODE = {
    className: 'keyword',
    begin: '@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b',
    starts: {end: '[;{}]', returnEnd: true, contains: VALUE, relevance: 0}
  };

  // variable definitions and calls
  var VAR_RULE_MODE = {
    className: 'variable',
    variants: [
      // using more strict pattern for higher relevance to increase chances of Less detection.
      // this is *the only* Less specific statement used in most of the sources, so...
      // (we’ll still often loose to the css-parser unless there's '//' comment,
      // simply because 1 variable just can't beat 99 properties :)
      {begin: '@' + IDENT_RE + '\\s*:', relevance: 15},
      {begin: '@' + IDENT_RE}
    ],
    starts: {end: '[;}]', returnEnd: true, contains: VALUE_WITH_RULESETS}
  };

  var SELECTOR_MODE = {
    // first parse unambiguous selectors (i.e. those not starting with tag)
    // then fall into the scary lookahead-discriminator variant.
    // this mode also handles mixin definitions and calls
    variants: [{
      begin: '[\\.#:&\\[>]', end: '[;{}]'  // mixin calls end with ';'
      }, {
      begin: INTERP_IDENT_RE, end: '{'
    }],
    returnBegin: true,
    returnEnd:   true,
    illegal: '[<=\'$"]',
    relevance: 0,
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      MIXIN_GUARD_MODE,
      IDENT_MODE('keyword',  'all\\b'),
      IDENT_MODE('variable', '@{'  + IDENT_RE + '}'),     // otherwise it’s identified as tag
      IDENT_MODE('selector-tag',  INTERP_IDENT_RE + '%?', 0), // '%' for more consistent coloring of @keyframes "tags"
      IDENT_MODE('selector-id', '#' + INTERP_IDENT_RE),
      IDENT_MODE('selector-class', '\\.' + INTERP_IDENT_RE, 0),
      IDENT_MODE('selector-tag',  '&', 0),
      {className: 'selector-attr', begin: '\\[', end: '\\]'},
      {className: 'selector-pseudo', begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},
      {begin: '\\(', end: '\\)', contains: VALUE_WITH_RULESETS}, // argument list of parametric mixins
      {begin: '!important'} // eat !important after mixin call or it will be colored as tag
    ]
  };

  RULES.push(
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    AT_RULE_MODE,
    VAR_RULE_MODE,
    RULE_MODE,
    SELECTOR_MODE
  );

  return {
    name: 'Less',
    case_insensitive: true,
    illegal: '[=>\'/<($"]',
    contains: RULES
  };
}

module.exports = less;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2xlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEMsNkNBQTZDLGlCQUFpQjs7QUFFOUQ7O0FBRUEsNkJBQTZCOztBQUU3QixpQ0FBaUM7QUFDakM7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQjtBQUNoRDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGdCQUFnQix5QkFBeUI7QUFDekM7O0FBRUE7O0FBRUE7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtDQUErQztBQUN0RCxPQUFPO0FBQ1A7QUFDQSxhQUFhLFNBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyw4QkFBOEI7QUFDckUsT0FBTztBQUNQLHFDQUFxQztBQUNyQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGtCQUFrQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8scURBQXFEO0FBQzVELE9BQU8sc0VBQXNFO0FBQzdFLE9BQU8sd0RBQXdEO0FBQy9ELE9BQU8sb0JBQW9CO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2xlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IExlc3NcbkRlc2NyaXB0aW9uOiBJdCdzIENTUywgd2l0aCBqdXN0IGEgbGl0dGxlIG1vcmUuXG5BdXRob3I6ICAgTWF4IE1pa2hhaWxvdiA8c2V2ZW4ucGhhc2VzLm1heEBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwOi8vbGVzc2Nzcy5vcmdcbkNhdGVnb3J5OiBjb21tb24sIGNzc1xuKi9cblxuZnVuY3Rpb24gbGVzcyhobGpzKSB7XG4gIHZhciBJREVOVF9SRSAgICAgICAgPSAnW1xcXFx3LV0rJzsgLy8geWVzLCBMZXNzIGlkZW50aWZpZXJzIG1heSBiZWdpbiB3aXRoIGEgZGlnaXRcbiAgdmFyIElOVEVSUF9JREVOVF9SRSA9ICcoJyArIElERU5UX1JFICsgJ3xAeycgKyBJREVOVF9SRSArICd9KSc7XG5cbiAgLyogR2VuZXJpYyBNb2RlcyAqL1xuXG4gIHZhciBSVUxFUyA9IFtdLCBWQUxVRSA9IFtdOyAvLyBmb3J3YXJkIGRlZi4gZm9yIHJlY3Vyc2l2ZSBtb2Rlc1xuXG4gIHZhciBTVFJJTkdfTU9ERSA9IGZ1bmN0aW9uKGMpIHsgcmV0dXJuIHtcbiAgICAvLyBMZXNzIHN0cmluZ3MgYXJlIG5vdCBtdWx0aWxpbmUgKGFsc28gaW5jbHVkZSAnficgZm9yIG1vcmUgY29uc2lzdGVudCBjb2xvcmluZyBvZiBcImVzY2FwZWRcIiBzdHJpbmdzKVxuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsIGJlZ2luOiAnfj8nICsgYyArICcuKj8nICsgY1xuICB9O307XG5cbiAgdmFyIElERU5UX01PREUgPSBmdW5jdGlvbihuYW1lLCBiZWdpbiwgcmVsZXZhbmNlKSB7IHJldHVybiB7XG4gICAgY2xhc3NOYW1lOiBuYW1lLCBiZWdpbjogYmVnaW4sIHJlbGV2YW5jZTogcmVsZXZhbmNlXG4gIH07fTtcblxuICB2YXIgUEFSRU5TX01PREUgPSB7XG4gICAgLy8gdXNlZCBvbmx5IHRvIHByb3Blcmx5IGJhbGFuY2UgbmVzdGVkIHBhcmVucyBpbnNpZGUgbWl4aW4gY2FsbCwgZGVmLiBhcmcgbGlzdFxuICAgIGJlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKScsIGNvbnRhaW5zOiBWQUxVRSwgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgLy8gZ2VuZXJpYyBMZXNzIGhpZ2hsaWdodGVyICh1c2VkIGFsbW9zdCBldmVyeXdoZXJlIGV4Y2VwdCBzZWxlY3RvcnMpOlxuICBWQUxVRS5wdXNoKFxuICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgIFNUUklOR19NT0RFKFwiJ1wiKSxcbiAgICBTVFJJTkdfTU9ERSgnXCInKSxcbiAgICBobGpzLkNTU19OVU1CRVJfTU9ERSwgLy8gZml4bWU6IGl0IGRvZXMgbm90IGluY2x1ZGUgZG90IGZvciBudW1iZXJzIGxpa2UgLjVlbSA6KFxuICAgIHtcbiAgICAgIGJlZ2luOiAnKHVybHxkYXRhLXVyaSlcXFxcKCcsXG4gICAgICBzdGFydHM6IHtjbGFzc05hbWU6ICdzdHJpbmcnLCBlbmQ6ICdbXFxcXClcXFxcbl0nLCBleGNsdWRlRW5kOiB0cnVlfVxuICAgIH0sXG4gICAgSURFTlRfTU9ERSgnbnVtYmVyJywgJyNbMC05QS1GYS1mXStcXFxcYicpLFxuICAgIFBBUkVOU19NT0RFLFxuICAgIElERU5UX01PREUoJ3ZhcmlhYmxlJywgJ0BAPycgKyBJREVOVF9SRSwgMTApLFxuICAgIElERU5UX01PREUoJ3ZhcmlhYmxlJywgJ0B7JyAgKyBJREVOVF9SRSArICd9JyksXG4gICAgSURFTlRfTU9ERSgnYnVpbHRfaW4nLCAnfj9gW15gXSo/YCcpLCAvLyBpbmxpbmUgamF2YXNjcmlwdCAob3Igd2hhdGV2ZXIgaG9zdCBsYW5ndWFnZSkgKm11bHRpbGluZSogc3RyaW5nXG4gICAgeyAvLyBAbWVkaWEgZmVhdHVyZXMgKGl04oCZcyBoZXJlIHRvIG5vdCBkdXBsaWNhdGUgdGhpbmdzIGluIEFUX1JVTEVfTU9ERSB3aXRoIGV4dHJhIFBBUkVOU19NT0RFIG92ZXJyaWRpbmcpOlxuICAgICAgY2xhc3NOYW1lOiAnYXR0cmlidXRlJywgYmVnaW46IElERU5UX1JFICsgJ1xcXFxzKjonLCBlbmQ6ICc6JywgcmV0dXJuQmVnaW46IHRydWUsIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgYmVnaW46ICchaW1wb3J0YW50J1xuICAgIH1cbiAgKTtcblxuICB2YXIgVkFMVUVfV0lUSF9SVUxFU0VUUyA9IFZBTFVFLmNvbmNhdCh7XG4gICAgYmVnaW46ICd7JywgZW5kOiAnfScsIGNvbnRhaW5zOiBSVUxFU1xuICB9KTtcblxuICB2YXIgTUlYSU5fR1VBUkRfTU9ERSA9IHtcbiAgICBiZWdpbktleXdvcmRzOiAnd2hlbicsIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgIGNvbnRhaW5zOiBbe2JlZ2luS2V5d29yZHM6ICdhbmQgbm90J31dLmNvbmNhdChWQUxVRSkgLy8gdXNpbmcgdGhpcyBmb3JtIHRvIG92ZXJyaWRlIFZBTFVF4oCZcyAnZnVuY3Rpb24nIG1hdGNoXG4gIH07XG5cbiAgLyogUnVsZS1MZXZlbCBNb2RlcyAqL1xuXG4gIHZhciBSVUxFX01PREUgPSB7XG4gICAgYmVnaW46IElOVEVSUF9JREVOVF9SRSArICdcXFxccyo6JywgcmV0dXJuQmVnaW46IHRydWUsIGVuZDogJ1s7fV0nLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLFxuICAgICAgICBiZWdpbjogSU5URVJQX0lERU5UX1JFLCBlbmQ6ICc6JywgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsIGlsbGVnYWw6ICdbPD0kXScsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIGNvbnRhaW5zOiBWQUxVRVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHZhciBBVF9SVUxFX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgYmVnaW46ICdAKGltcG9ydHxtZWRpYXxjaGFyc2V0fGZvbnQtZmFjZXwoLVthLXpdKy0pP2tleWZyYW1lc3xzdXBwb3J0c3xkb2N1bWVudHxuYW1lc3BhY2V8cGFnZXx2aWV3cG9ydHxob3N0KVxcXFxiJyxcbiAgICBzdGFydHM6IHtlbmQ6ICdbO3t9XScsIHJldHVybkVuZDogdHJ1ZSwgY29udGFpbnM6IFZBTFVFLCByZWxldmFuY2U6IDB9XG4gIH07XG5cbiAgLy8gdmFyaWFibGUgZGVmaW5pdGlvbnMgYW5kIGNhbGxzXG4gIHZhciBWQVJfUlVMRV9NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICB2YXJpYW50czogW1xuICAgICAgLy8gdXNpbmcgbW9yZSBzdHJpY3QgcGF0dGVybiBmb3IgaGlnaGVyIHJlbGV2YW5jZSB0byBpbmNyZWFzZSBjaGFuY2VzIG9mIExlc3MgZGV0ZWN0aW9uLlxuICAgICAgLy8gdGhpcyBpcyAqdGhlIG9ubHkqIExlc3Mgc3BlY2lmaWMgc3RhdGVtZW50IHVzZWQgaW4gbW9zdCBvZiB0aGUgc291cmNlcywgc28uLi5cbiAgICAgIC8vICh3ZeKAmWxsIHN0aWxsIG9mdGVuIGxvb3NlIHRvIHRoZSBjc3MtcGFyc2VyIHVubGVzcyB0aGVyZSdzICcvLycgY29tbWVudCxcbiAgICAgIC8vIHNpbXBseSBiZWNhdXNlIDEgdmFyaWFibGUganVzdCBjYW4ndCBiZWF0IDk5IHByb3BlcnRpZXMgOilcbiAgICAgIHtiZWdpbjogJ0AnICsgSURFTlRfUkUgKyAnXFxcXHMqOicsIHJlbGV2YW5jZTogMTV9LFxuICAgICAge2JlZ2luOiAnQCcgKyBJREVOVF9SRX1cbiAgICBdLFxuICAgIHN0YXJ0czoge2VuZDogJ1s7fV0nLCByZXR1cm5FbmQ6IHRydWUsIGNvbnRhaW5zOiBWQUxVRV9XSVRIX1JVTEVTRVRTfVxuICB9O1xuXG4gIHZhciBTRUxFQ1RPUl9NT0RFID0ge1xuICAgIC8vIGZpcnN0IHBhcnNlIHVuYW1iaWd1b3VzIHNlbGVjdG9ycyAoaS5lLiB0aG9zZSBub3Qgc3RhcnRpbmcgd2l0aCB0YWcpXG4gICAgLy8gdGhlbiBmYWxsIGludG8gdGhlIHNjYXJ5IGxvb2thaGVhZC1kaXNjcmltaW5hdG9yIHZhcmlhbnQuXG4gICAgLy8gdGhpcyBtb2RlIGFsc28gaGFuZGxlcyBtaXhpbiBkZWZpbml0aW9ucyBhbmQgY2FsbHNcbiAgICB2YXJpYW50czogW3tcbiAgICAgIGJlZ2luOiAnW1xcXFwuIzomXFxcXFs+XScsIGVuZDogJ1s7e31dJyAgLy8gbWl4aW4gY2FsbHMgZW5kIHdpdGggJzsnXG4gICAgICB9LCB7XG4gICAgICBiZWdpbjogSU5URVJQX0lERU5UX1JFLCBlbmQ6ICd7J1xuICAgIH1dLFxuICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgIHJldHVybkVuZDogICB0cnVlLFxuICAgIGlsbGVnYWw6ICdbPD1cXCckXCJdJyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBNSVhJTl9HVUFSRF9NT0RFLFxuICAgICAgSURFTlRfTU9ERSgna2V5d29yZCcsICAnYWxsXFxcXGInKSxcbiAgICAgIElERU5UX01PREUoJ3ZhcmlhYmxlJywgJ0B7JyAgKyBJREVOVF9SRSArICd9JyksICAgICAvLyBvdGhlcndpc2UgaXTigJlzIGlkZW50aWZpZWQgYXMgdGFnXG4gICAgICBJREVOVF9NT0RFKCdzZWxlY3Rvci10YWcnLCAgSU5URVJQX0lERU5UX1JFICsgJyU/JywgMCksIC8vICclJyBmb3IgbW9yZSBjb25zaXN0ZW50IGNvbG9yaW5nIG9mIEBrZXlmcmFtZXMgXCJ0YWdzXCJcbiAgICAgIElERU5UX01PREUoJ3NlbGVjdG9yLWlkJywgJyMnICsgSU5URVJQX0lERU5UX1JFKSxcbiAgICAgIElERU5UX01PREUoJ3NlbGVjdG9yLWNsYXNzJywgJ1xcXFwuJyArIElOVEVSUF9JREVOVF9SRSwgMCksXG4gICAgICBJREVOVF9NT0RFKCdzZWxlY3Rvci10YWcnLCAgJyYnLCAwKSxcbiAgICAgIHtjbGFzc05hbWU6ICdzZWxlY3Rvci1hdHRyJywgYmVnaW46ICdcXFxcWycsIGVuZDogJ1xcXFxdJ30sXG4gICAgICB7Y2xhc3NOYW1lOiAnc2VsZWN0b3ItcHNldWRvJywgYmVnaW46IC86KDopP1thLXpBLVowLTlcXF9cXC1cXCtcXChcXClcIicuXSsvfSxcbiAgICAgIHtiZWdpbjogJ1xcXFwoJywgZW5kOiAnXFxcXCknLCBjb250YWluczogVkFMVUVfV0lUSF9SVUxFU0VUU30sIC8vIGFyZ3VtZW50IGxpc3Qgb2YgcGFyYW1ldHJpYyBtaXhpbnNcbiAgICAgIHtiZWdpbjogJyFpbXBvcnRhbnQnfSAvLyBlYXQgIWltcG9ydGFudCBhZnRlciBtaXhpbiBjYWxsIG9yIGl0IHdpbGwgYmUgY29sb3JlZCBhcyB0YWdcbiAgICBdXG4gIH07XG5cbiAgUlVMRVMucHVzaChcbiAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICBBVF9SVUxFX01PREUsXG4gICAgVkFSX1JVTEVfTU9ERSxcbiAgICBSVUxFX01PREUsXG4gICAgU0VMRUNUT1JfTU9ERVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0xlc3MnLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgaWxsZWdhbDogJ1s9PlxcJy88KCRcIl0nLFxuICAgIGNvbnRhaW5zOiBSVUxFU1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxlc3M7XG4iXSwic291cmNlUm9vdCI6IiJ9