(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_yaml"],{

/***/ "./node_modules/highlight.js/lib/languages/yaml.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/yaml.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: YAML
Description: Yet Another Markdown Language
Author: Stefan Wienert <stwienert@gmail.com>
Contributors: Carl Baxter <carl@cbax.tech>
Requires: ruby.js
Website: https://yaml.org
Category: common, config
*/
function yaml(hljs) {
  var LITERALS = 'true false yes no null';

  // YAML spec allows non-reserved URI characters in tags.
  var URI_CHARACTERS = '[\\w#;/?:@&=+$,.~*\\\'()[\\]]+';

  // Define keys as starting with a word character
  // ...containing word chars, spaces, colons, forward-slashes, hyphens and periods
  // ...and ending with a colon followed immediately by a space, tab or newline.
  // The YAML spec allows for much more than this, but this covers most use-cases.
  var KEY = {
    className: 'attr',
    variants: [
      { begin: '\\w[\\w :\\/.-]*:(?=[ \t]|$)' },
      { begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)' }, // double quoted keys
      { begin: '\'\\w[\\w :\\/.-]*\':(?=[ \t]|$)' } // single quoted keys
    ]
  };

  var TEMPLATE_VARIABLES = {
    className: 'template-variable',
    variants: [
      { begin: '{{', end: '}}' }, // jinja templates Ansible
      { begin: '%{', end: '}' } // Ruby i18n
    ]
  };
  var STRING = {
    className: 'string',
    relevance: 0,
    variants: [
      { begin: /'/, end: /'/ },
      { begin: /"/, end: /"/ },
      { begin: /\S+/ }
    ],
    contains: [
      hljs.BACKSLASH_ESCAPE,
      TEMPLATE_VARIABLES
    ]
  };

  // Strings inside of value containers (objects) can't contain braces,
  // brackets, or commas
  var CONTAINER_STRING = hljs.inherit(STRING, {
    variants: [
      { begin: /'/, end: /'/ },
      { begin: /"/, end: /"/ },
      { begin: /[^\s,{}[\]]+/ }
    ]
  });

  var DATE_RE = '[0-9]{4}(-[0-9][0-9]){0,2}';
  var TIME_RE = '([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?';
  var FRACTION_RE = '(\\.[0-9]*)?';
  var ZONE_RE = '([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?';
  var TIMESTAMP = {
    className: 'number',
    begin: '\\b' + DATE_RE + TIME_RE + FRACTION_RE + ZONE_RE + '\\b'
  };

  var VALUE_CONTAINER = {
    end: ',',
    endsWithParent: true,
    excludeEnd: true,
    contains: [],
    keywords: LITERALS,
    relevance: 0
  };
  var OBJECT = {
    begin: '{',
    end: '}',
    contains: [VALUE_CONTAINER],
    illegal: '\\n',
    relevance: 0
  };
  var ARRAY = {
    begin: '\\[',
    end: '\\]',
    contains: [VALUE_CONTAINER],
    illegal: '\\n',
    relevance: 0
  };

  var MODES = [
    KEY,
    {
      className: 'meta',
      begin: '^---\s*$',
      relevance: 10
    },
    { // multi line string
      // Blocks start with a | or > followed by a newline
      //
      // Indentation of subsequent lines must be the same to
      // be considered part of the block
      className: 'string',
      begin: '[\\|>]([0-9]?[+-])?[ ]*\\n( *)[\\S ]+\\n(\\2[\\S ]+\\n?)*'
    },
    { // Ruby/Rails erb
      begin: '<%[%=-]?',
      end: '[%-]?%>',
      subLanguage: 'ruby',
      excludeBegin: true,
      excludeEnd: true,
      relevance: 0
    },
    { // named tags
      className: 'type',
      begin: '!\\w+!' + URI_CHARACTERS
    },
    // https://yaml.org/spec/1.2/spec.html#id2784064
    { // verbatim tags
      className: 'type',
      begin: '!<' + URI_CHARACTERS + ">"
    },
    { // primary tags
      className: 'type',
      begin: '!' + URI_CHARACTERS
    },
    { // secondary tags
      className: 'type',
      begin: '!!' + URI_CHARACTERS
    },
    { // fragment id &ref
      className: 'meta',
      begin: '&' + hljs.UNDERSCORE_IDENT_RE + '$'
    },
    { // fragment reference *ref
      className: 'meta',
      begin: '\\*' + hljs.UNDERSCORE_IDENT_RE + '$'
    },
    { // array listing
      className: 'bullet',
      // TODO: remove |$ hack when we have proper look-ahead support
      begin: '\\-(?=[ ]|$)',
      relevance: 0
    },
    hljs.HASH_COMMENT_MODE,
    {
      beginKeywords: LITERALS,
      keywords: { literal: LITERALS }
    },
    TIMESTAMP,
    // numbers are any valid C-style number that
    // sit isolated from other words
    {
      className: 'number',
      begin: hljs.C_NUMBER_RE + '\\b'
    },
    OBJECT,
    ARRAY,
    STRING
  ];

  var VALUE_MODES = [...MODES];
  VALUE_MODES.pop();
  VALUE_MODES.push(CONTAINER_STRING);
  VALUE_CONTAINER.contains = VALUE_MODES;

  return {
    name: 'YAML',
    case_insensitive: true,
    aliases: ['yml', 'YAML'],
    contains: MODES
  };
}

module.exports = yaml;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3lhbWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdDQUF3QztBQUMvQyxPQUFPLDBDQUEwQztBQUNqRCxPQUFPLDRDQUE0QztBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sV0FBVyxXQUFXLEdBQUc7QUFDaEMsT0FBTyxXQUFXLFVBQVUsR0FBRztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVCQUF1QjtBQUM5QixPQUFPLHVCQUF1QjtBQUM5QixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTyxnQkFBZ0I7QUFDdkI7QUFDQSxHQUFHOztBQUVILHVCQUF1QixFQUFFLGNBQWMsSUFBSTtBQUMzQyxtREFBbUQsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF95YW1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBZQU1MXG5EZXNjcmlwdGlvbjogWWV0IEFub3RoZXIgTWFya2Rvd24gTGFuZ3VhZ2VcbkF1dGhvcjogU3RlZmFuIFdpZW5lcnQgPHN0d2llbmVydEBnbWFpbC5jb20+XG5Db250cmlidXRvcnM6IENhcmwgQmF4dGVyIDxjYXJsQGNiYXgudGVjaD5cblJlcXVpcmVzOiBydWJ5LmpzXG5XZWJzaXRlOiBodHRwczovL3lhbWwub3JnXG5DYXRlZ29yeTogY29tbW9uLCBjb25maWdcbiovXG5mdW5jdGlvbiB5YW1sKGhsanMpIHtcbiAgdmFyIExJVEVSQUxTID0gJ3RydWUgZmFsc2UgeWVzIG5vIG51bGwnO1xuXG4gIC8vIFlBTUwgc3BlYyBhbGxvd3Mgbm9uLXJlc2VydmVkIFVSSSBjaGFyYWN0ZXJzIGluIHRhZ3MuXG4gIHZhciBVUklfQ0hBUkFDVEVSUyA9ICdbXFxcXHcjOy8/OkAmPSskLC5+KlxcXFxcXCcoKVtcXFxcXV0rJztcblxuICAvLyBEZWZpbmUga2V5cyBhcyBzdGFydGluZyB3aXRoIGEgd29yZCBjaGFyYWN0ZXJcbiAgLy8gLi4uY29udGFpbmluZyB3b3JkIGNoYXJzLCBzcGFjZXMsIGNvbG9ucywgZm9yd2FyZC1zbGFzaGVzLCBoeXBoZW5zIGFuZCBwZXJpb2RzXG4gIC8vIC4uLmFuZCBlbmRpbmcgd2l0aCBhIGNvbG9uIGZvbGxvd2VkIGltbWVkaWF0ZWx5IGJ5IGEgc3BhY2UsIHRhYiBvciBuZXdsaW5lLlxuICAvLyBUaGUgWUFNTCBzcGVjIGFsbG93cyBmb3IgbXVjaCBtb3JlIHRoYW4gdGhpcywgYnV0IHRoaXMgY292ZXJzIG1vc3QgdXNlLWNhc2VzLlxuICB2YXIgS0VZID0ge1xuICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7IGJlZ2luOiAnXFxcXHdbXFxcXHcgOlxcXFwvLi1dKjooPz1bIFxcdF18JCknIH0sXG4gICAgICB7IGJlZ2luOiAnXCJcXFxcd1tcXFxcdyA6XFxcXC8uLV0qXCI6KD89WyBcXHRdfCQpJyB9LCAvLyBkb3VibGUgcXVvdGVkIGtleXNcbiAgICAgIHsgYmVnaW46ICdcXCdcXFxcd1tcXFxcdyA6XFxcXC8uLV0qXFwnOig/PVsgXFx0XXwkKScgfSAvLyBzaW5nbGUgcXVvdGVkIGtleXNcbiAgICBdXG4gIH07XG5cbiAgdmFyIFRFTVBMQVRFX1ZBUklBQkxFUyA9IHtcbiAgICBjbGFzc05hbWU6ICd0ZW1wbGF0ZS12YXJpYWJsZScsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHsgYmVnaW46ICd7eycsIGVuZDogJ319JyB9LCAvLyBqaW5qYSB0ZW1wbGF0ZXMgQW5zaWJsZVxuICAgICAgeyBiZWdpbjogJyV7JywgZW5kOiAnfScgfSAvLyBSdWJ5IGkxOG5cbiAgICBdXG4gIH07XG4gIHZhciBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHsgYmVnaW46IC8nLywgZW5kOiAvJy8gfSxcbiAgICAgIHsgYmVnaW46IC9cIi8sIGVuZDogL1wiLyB9LFxuICAgICAgeyBiZWdpbjogL1xcUysvIH1cbiAgICBdLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICBURU1QTEFURV9WQVJJQUJMRVNcbiAgICBdXG4gIH07XG5cbiAgLy8gU3RyaW5ncyBpbnNpZGUgb2YgdmFsdWUgY29udGFpbmVycyAob2JqZWN0cykgY2FuJ3QgY29udGFpbiBicmFjZXMsXG4gIC8vIGJyYWNrZXRzLCBvciBjb21tYXNcbiAgdmFyIENPTlRBSU5FUl9TVFJJTkcgPSBobGpzLmluaGVyaXQoU1RSSU5HLCB7XG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHsgYmVnaW46IC8nLywgZW5kOiAvJy8gfSxcbiAgICAgIHsgYmVnaW46IC9cIi8sIGVuZDogL1wiLyB9LFxuICAgICAgeyBiZWdpbjogL1teXFxzLHt9W1xcXV0rLyB9XG4gICAgXVxuICB9KTtcblxuICB2YXIgREFURV9SRSA9ICdbMC05XXs0fSgtWzAtOV1bMC05XSl7MCwyfSc7XG4gIHZhciBUSU1FX1JFID0gJyhbVHQgXFxcXHRdWzAtOV1bMC05XT8oOlswLTldWzAtOV0pezJ9KT8nO1xuICB2YXIgRlJBQ1RJT05fUkUgPSAnKFxcXFwuWzAtOV0qKT8nO1xuICB2YXIgWk9ORV9SRSA9ICcoWyBcXFxcdF0pKihafFstK11bMC05XVswLTldPyg6WzAtOV1bMC05XSk/KT8nO1xuICB2YXIgVElNRVNUQU1QID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgYmVnaW46ICdcXFxcYicgKyBEQVRFX1JFICsgVElNRV9SRSArIEZSQUNUSU9OX1JFICsgWk9ORV9SRSArICdcXFxcYidcbiAgfTtcblxuICB2YXIgVkFMVUVfQ09OVEFJTkVSID0ge1xuICAgIGVuZDogJywnLFxuICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgY29udGFpbnM6IFtdLFxuICAgIGtleXdvcmRzOiBMSVRFUkFMUyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgdmFyIE9CSkVDVCA9IHtcbiAgICBiZWdpbjogJ3snLFxuICAgIGVuZDogJ30nLFxuICAgIGNvbnRhaW5zOiBbVkFMVUVfQ09OVEFJTkVSXSxcbiAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICB2YXIgQVJSQVkgPSB7XG4gICAgYmVnaW46ICdcXFxcWycsXG4gICAgZW5kOiAnXFxcXF0nLFxuICAgIGNvbnRhaW5zOiBbVkFMVUVfQ09OVEFJTkVSXSxcbiAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIHZhciBNT0RFUyA9IFtcbiAgICBLRVksXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICBiZWdpbjogJ14tLS1cXHMqJCcsXG4gICAgICByZWxldmFuY2U6IDEwXG4gICAgfSxcbiAgICB7IC8vIG11bHRpIGxpbmUgc3RyaW5nXG4gICAgICAvLyBCbG9ja3Mgc3RhcnQgd2l0aCBhIHwgb3IgPiBmb2xsb3dlZCBieSBhIG5ld2xpbmVcbiAgICAgIC8vXG4gICAgICAvLyBJbmRlbnRhdGlvbiBvZiBzdWJzZXF1ZW50IGxpbmVzIG11c3QgYmUgdGhlIHNhbWUgdG9cbiAgICAgIC8vIGJlIGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgYmxvY2tcbiAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICBiZWdpbjogJ1tcXFxcfD5dKFswLTldP1srLV0pP1sgXSpcXFxcbiggKilbXFxcXFMgXStcXFxcbihcXFxcMltcXFxcUyBdK1xcXFxuPykqJ1xuICAgIH0sXG4gICAgeyAvLyBSdWJ5L1JhaWxzIGVyYlxuICAgICAgYmVnaW46ICc8JVslPS1dPycsXG4gICAgICBlbmQ6ICdbJS1dPyU+JyxcbiAgICAgIHN1Ykxhbmd1YWdlOiAncnVieScsXG4gICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfSxcbiAgICB7IC8vIG5hbWVkIHRhZ3NcbiAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgYmVnaW46ICchXFxcXHcrIScgKyBVUklfQ0hBUkFDVEVSU1xuICAgIH0sXG4gICAgLy8gaHR0cHM6Ly95YW1sLm9yZy9zcGVjLzEuMi9zcGVjLmh0bWwjaWQyNzg0MDY0XG4gICAgeyAvLyB2ZXJiYXRpbSB0YWdzXG4gICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgIGJlZ2luOiAnITwnICsgVVJJX0NIQVJBQ1RFUlMgKyBcIj5cIlxuICAgIH0sXG4gICAgeyAvLyBwcmltYXJ5IHRhZ3NcbiAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgYmVnaW46ICchJyArIFVSSV9DSEFSQUNURVJTXG4gICAgfSxcbiAgICB7IC8vIHNlY29uZGFyeSB0YWdzXG4gICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgIGJlZ2luOiAnISEnICsgVVJJX0NIQVJBQ1RFUlNcbiAgICB9LFxuICAgIHsgLy8gZnJhZ21lbnQgaWQgJnJlZlxuICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICBiZWdpbjogJyYnICsgaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFICsgJyQnXG4gICAgfSxcbiAgICB7IC8vIGZyYWdtZW50IHJlZmVyZW5jZSAqcmVmXG4gICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgIGJlZ2luOiAnXFxcXConICsgaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFICsgJyQnXG4gICAgfSxcbiAgICB7IC8vIGFycmF5IGxpc3RpbmdcbiAgICAgIGNsYXNzTmFtZTogJ2J1bGxldCcsXG4gICAgICAvLyBUT0RPOiByZW1vdmUgfCQgaGFjayB3aGVuIHdlIGhhdmUgcHJvcGVyIGxvb2stYWhlYWQgc3VwcG9ydFxuICAgICAgYmVnaW46ICdcXFxcLSg/PVsgXXwkKScsXG4gICAgICByZWxldmFuY2U6IDBcbiAgICB9LFxuICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAge1xuICAgICAgYmVnaW5LZXl3b3JkczogTElURVJBTFMsXG4gICAgICBrZXl3b3JkczogeyBsaXRlcmFsOiBMSVRFUkFMUyB9XG4gICAgfSxcbiAgICBUSU1FU1RBTVAsXG4gICAgLy8gbnVtYmVycyBhcmUgYW55IHZhbGlkIEMtc3R5bGUgbnVtYmVyIHRoYXRcbiAgICAvLyBzaXQgaXNvbGF0ZWQgZnJvbSBvdGhlciB3b3Jkc1xuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICBiZWdpbjogaGxqcy5DX05VTUJFUl9SRSArICdcXFxcYidcbiAgICB9LFxuICAgIE9CSkVDVCxcbiAgICBBUlJBWSxcbiAgICBTVFJJTkdcbiAgXTtcblxuICB2YXIgVkFMVUVfTU9ERVMgPSBbLi4uTU9ERVNdO1xuICBWQUxVRV9NT0RFUy5wb3AoKTtcbiAgVkFMVUVfTU9ERVMucHVzaChDT05UQUlORVJfU1RSSU5HKTtcbiAgVkFMVUVfQ09OVEFJTkVSLmNvbnRhaW5zID0gVkFMVUVfTU9ERVM7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnWUFNTCcsXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBhbGlhc2VzOiBbJ3ltbCcsICdZQU1MJ10sXG4gICAgY29udGFpbnM6IE1PREVTXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0geWFtbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=