(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_dart"],{

/***/ "./node_modules/highlight.js/lib/languages/dart.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dart.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Dart
Requires: markdown.js
Author: Maxim Dikun <dikmax@gmail.com>
Description: Dart a modern, object-oriented language developed by Google. For more information see https://www.dartlang.org/
Website: https://dart.dev
Category: scripting
*/

function dart(hljs) {
  const SUBST = {
    className: 'subst',
    variants: [{
      begin: '\\$[A-Za-z0-9_]+'
    }],
  };

  const BRACED_SUBST = {
    className: 'subst',
    variants: [{
      begin: '\\${',
      end: '}'
    }],
    keywords: 'true false null this is new super',
  };

  const STRING = {
    className: 'string',
    variants: [{
        begin: 'r\'\'\'',
        end: '\'\'\''
      },
      {
        begin: 'r"""',
        end: '"""'
      },
      {
        begin: 'r\'',
        end: '\'',
        illegal: '\\n'
      },
      {
        begin: 'r"',
        end: '"',
        illegal: '\\n'
      },
      {
        begin: '\'\'\'',
        end: '\'\'\'',
        contains: [hljs.BACKSLASH_ESCAPE, SUBST, BRACED_SUBST]
      },
      {
        begin: '"""',
        end: '"""',
        contains: [hljs.BACKSLASH_ESCAPE, SUBST, BRACED_SUBST]
      },
      {
        begin: '\'',
        end: '\'',
        illegal: '\\n',
        contains: [hljs.BACKSLASH_ESCAPE, SUBST, BRACED_SUBST]
      },
      {
        begin: '"',
        end: '"',
        illegal: '\\n',
        contains: [hljs.BACKSLASH_ESCAPE, SUBST, BRACED_SUBST]
      }
    ]
  };
  BRACED_SUBST.contains = [
    hljs.C_NUMBER_MODE, STRING
  ];

  const BUILT_IN_TYPES = [
    // dart:core
    'Comparable',
    'DateTime',
    'Duration',
    'Function',
    'Iterable',
    'Iterator',
    'List',
    'Map',
    'Match',
    'Object',
    'Pattern',
    'RegExp',
    'Set',
    'Stopwatch',
    'String',
    'StringBuffer',
    'StringSink',
    'Symbol',
    'Type',
    'Uri',
    'bool',
    'double',
    'int',
    'num',
    // dart:html
    'Element',
    'ElementList',
  ];
  const NULLABLE_BUILT_IN_TYPES = BUILT_IN_TYPES.map((e) => `${e}?`);

  const KEYWORDS = {
    keyword: 'abstract as assert async await break case catch class const continue covariant default deferred do ' +
      'dynamic else enum export extends extension external factory false final finally for Function get hide if ' +
      'implements import in inferface is late library mixin new null on operator part required rethrow return set ' +
      'show static super switch sync this throw true try typedef var void while with yield',
    built_in:
      BUILT_IN_TYPES
        .concat(NULLABLE_BUILT_IN_TYPES)
        .concat([
          // dart:core
          'Never',
          'Null',
          'dynamic',
          'print',
          // dart:html
          'document',
          'querySelector',
          'querySelectorAll',
          'window',
      ]).join(' '),
    $pattern: /[A-Za-z][A-Za-z0-9_]*\??/
  };

  return {
    name: 'Dart',
    keywords: KEYWORDS,
    contains: [
      STRING,
      hljs.COMMENT(
        '/\\*\\*',
        '\\*/', {
          subLanguage: 'markdown',
          relevance:0
        }
      ),
      hljs.COMMENT(
        '///+\\s*',
        '$', {
          contains: [{
            subLanguage: 'markdown',
            begin: '.',
            end: '$',
            relevance:0
          }]
        }
      ),
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'class',
        beginKeywords: 'class interface',
        end: '{',
        excludeEnd: true,
        contains: [{
            beginKeywords: 'extends implements'
          },
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      hljs.C_NUMBER_MODE,
      {
        className: 'meta',
        begin: '@[A-Za-z]+'
      },
      {
        begin: '=>' // No markup, just a relevance booster
      }
    ]
  };
}

module.exports = dart;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2RhcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixhQUFhO0FBQ2IsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxFQUFFOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2RhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IERhcnRcblJlcXVpcmVzOiBtYXJrZG93bi5qc1xuQXV0aG9yOiBNYXhpbSBEaWt1biA8ZGlrbWF4QGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBEYXJ0IGEgbW9kZXJuLCBvYmplY3Qtb3JpZW50ZWQgbGFuZ3VhZ2UgZGV2ZWxvcGVkIGJ5IEdvb2dsZS4gRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlIGh0dHBzOi8vd3d3LmRhcnRsYW5nLm9yZy9cbldlYnNpdGU6IGh0dHBzOi8vZGFydC5kZXZcbkNhdGVnb3J5OiBzY3JpcHRpbmdcbiovXG5cbmZ1bmN0aW9uIGRhcnQoaGxqcykge1xuICBjb25zdCBTVUJTVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgdmFyaWFudHM6IFt7XG4gICAgICBiZWdpbjogJ1xcXFwkW0EtWmEtejAtOV9dKydcbiAgICB9XSxcbiAgfTtcblxuICBjb25zdCBCUkFDRURfU1VCU1QgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIHZhcmlhbnRzOiBbe1xuICAgICAgYmVnaW46ICdcXFxcJHsnLFxuICAgICAgZW5kOiAnfSdcbiAgICB9XSxcbiAgICBrZXl3b3JkczogJ3RydWUgZmFsc2UgbnVsbCB0aGlzIGlzIG5ldyBzdXBlcicsXG4gIH07XG5cbiAgY29uc3QgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgdmFyaWFudHM6IFt7XG4gICAgICAgIGJlZ2luOiAnclxcJ1xcJ1xcJycsXG4gICAgICAgIGVuZDogJ1xcJ1xcJ1xcJydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnclwiXCJcIicsXG4gICAgICAgIGVuZDogJ1wiXCJcIidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnclxcJycsXG4gICAgICAgIGVuZDogJ1xcJycsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnclwiJyxcbiAgICAgICAgZW5kOiAnXCInLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcJ1xcJ1xcJycsXG4gICAgICAgIGVuZDogJ1xcJ1xcJ1xcJycsXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFLCBTVUJTVCwgQlJBQ0VEX1NVQlNUXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcIlwiXCInLFxuICAgICAgICBlbmQ6ICdcIlwiXCInLFxuICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRSwgU1VCU1QsIEJSQUNFRF9TVUJTVF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFwnJyxcbiAgICAgICAgZW5kOiAnXFwnJyxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEUsIFNVQlNULCBCUkFDRURfU1VCU1RdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1wiJyxcbiAgICAgICAgZW5kOiAnXCInLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRSwgU1VCU1QsIEJSQUNFRF9TVUJTVF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIEJSQUNFRF9TVUJTVC5jb250YWlucyA9IFtcbiAgICBobGpzLkNfTlVNQkVSX01PREUsIFNUUklOR1xuICBdO1xuXG4gIGNvbnN0IEJVSUxUX0lOX1RZUEVTID0gW1xuICAgIC8vIGRhcnQ6Y29yZVxuICAgICdDb21wYXJhYmxlJyxcbiAgICAnRGF0ZVRpbWUnLFxuICAgICdEdXJhdGlvbicsXG4gICAgJ0Z1bmN0aW9uJyxcbiAgICAnSXRlcmFibGUnLFxuICAgICdJdGVyYXRvcicsXG4gICAgJ0xpc3QnLFxuICAgICdNYXAnLFxuICAgICdNYXRjaCcsXG4gICAgJ09iamVjdCcsXG4gICAgJ1BhdHRlcm4nLFxuICAgICdSZWdFeHAnLFxuICAgICdTZXQnLFxuICAgICdTdG9wd2F0Y2gnLFxuICAgICdTdHJpbmcnLFxuICAgICdTdHJpbmdCdWZmZXInLFxuICAgICdTdHJpbmdTaW5rJyxcbiAgICAnU3ltYm9sJyxcbiAgICAnVHlwZScsXG4gICAgJ1VyaScsXG4gICAgJ2Jvb2wnLFxuICAgICdkb3VibGUnLFxuICAgICdpbnQnLFxuICAgICdudW0nLFxuICAgIC8vIGRhcnQ6aHRtbFxuICAgICdFbGVtZW50JyxcbiAgICAnRWxlbWVudExpc3QnLFxuICBdO1xuICBjb25zdCBOVUxMQUJMRV9CVUlMVF9JTl9UWVBFUyA9IEJVSUxUX0lOX1RZUEVTLm1hcCgoZSkgPT4gYCR7ZX0/YCk7XG5cbiAgY29uc3QgS0VZV09SRFMgPSB7XG4gICAga2V5d29yZDogJ2Fic3RyYWN0IGFzIGFzc2VydCBhc3luYyBhd2FpdCBicmVhayBjYXNlIGNhdGNoIGNsYXNzIGNvbnN0IGNvbnRpbnVlIGNvdmFyaWFudCBkZWZhdWx0IGRlZmVycmVkIGRvICcgK1xuICAgICAgJ2R5bmFtaWMgZWxzZSBlbnVtIGV4cG9ydCBleHRlbmRzIGV4dGVuc2lvbiBleHRlcm5hbCBmYWN0b3J5IGZhbHNlIGZpbmFsIGZpbmFsbHkgZm9yIEZ1bmN0aW9uIGdldCBoaWRlIGlmICcgK1xuICAgICAgJ2ltcGxlbWVudHMgaW1wb3J0IGluIGluZmVyZmFjZSBpcyBsYXRlIGxpYnJhcnkgbWl4aW4gbmV3IG51bGwgb24gb3BlcmF0b3IgcGFydCByZXF1aXJlZCByZXRocm93IHJldHVybiBzZXQgJyArXG4gICAgICAnc2hvdyBzdGF0aWMgc3VwZXIgc3dpdGNoIHN5bmMgdGhpcyB0aHJvdyB0cnVlIHRyeSB0eXBlZGVmIHZhciB2b2lkIHdoaWxlIHdpdGggeWllbGQnLFxuICAgIGJ1aWx0X2luOlxuICAgICAgQlVJTFRfSU5fVFlQRVNcbiAgICAgICAgLmNvbmNhdChOVUxMQUJMRV9CVUlMVF9JTl9UWVBFUylcbiAgICAgICAgLmNvbmNhdChbXG4gICAgICAgICAgLy8gZGFydDpjb3JlXG4gICAgICAgICAgJ05ldmVyJyxcbiAgICAgICAgICAnTnVsbCcsXG4gICAgICAgICAgJ2R5bmFtaWMnLFxuICAgICAgICAgICdwcmludCcsXG4gICAgICAgICAgLy8gZGFydDpodG1sXG4gICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAncXVlcnlTZWxlY3RvcicsXG4gICAgICAgICAgJ3F1ZXJ5U2VsZWN0b3JBbGwnLFxuICAgICAgICAgICd3aW5kb3cnLFxuICAgICAgXSkuam9pbignICcpLFxuICAgICRwYXR0ZXJuOiAvW0EtWmEtel1bQS1aYS16MC05X10qXFw/Py9cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdEYXJ0JyxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIFNUUklORyxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJy9cXFxcKlxcXFwqJyxcbiAgICAgICAgJ1xcXFwqLycsIHtcbiAgICAgICAgICBzdWJMYW5ndWFnZTogJ21hcmtkb3duJyxcbiAgICAgICAgICByZWxldmFuY2U6MFxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAnLy8vK1xcXFxzKicsXG4gICAgICAgICckJywge1xuICAgICAgICAgIGNvbnRhaW5zOiBbe1xuICAgICAgICAgICAgc3ViTGFuZ3VhZ2U6ICdtYXJrZG93bicsXG4gICAgICAgICAgICBiZWdpbjogJy4nLFxuICAgICAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgICAgICByZWxldmFuY2U6MFxuICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UnLFxuICAgICAgICBlbmQ6ICd7JyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFt7XG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZXh0ZW5kcyBpbXBsZW1lbnRzJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnQFtBLVphLXpdKydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnPT4nIC8vIE5vIG1hcmt1cCwganVzdCBhIHJlbGV2YW5jZSBib29zdGVyXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRhcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9