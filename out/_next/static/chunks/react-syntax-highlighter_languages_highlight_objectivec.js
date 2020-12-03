(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_objectivec"],{

/***/ "./node_modules/highlight.js/lib/languages/objectivec.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/objectivec.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Objective-C
Author: Valerii Hiora <valerii.hiora@gmail.com>
Contributors: Angel G. Olloqui <angelgarcia.mail@gmail.com>, Matt Diephouse <matt@diephouse.com>, Andrew Farmer <ahfarmer@gmail.com>, Minh Nguyễn <mxn@1ec5.org>
Website: https://developer.apple.com/documentation/objectivec
Category: common
*/

function objectivec(hljs) {
  var API_CLASS = {
    className: 'built_in',
    begin: '\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+',
  };
  var IDENTIFIER_RE = /[a-zA-Z@][a-zA-Z0-9_]*/;
  var OBJC_KEYWORDS = {
    $pattern: IDENTIFIER_RE,
    keyword:
      'int float while char export sizeof typedef const struct for union ' +
      'unsigned long volatile static bool mutable if do return goto void ' +
      'enum else break extern asm case short default double register explicit ' +
      'signed typename this switch continue wchar_t inline readonly assign ' +
      'readwrite self @synchronized id typeof ' +
      'nonatomic super unichar IBOutlet IBAction strong weak copy ' +
      'in out inout bycopy byref oneway __strong __weak __block __autoreleasing ' +
      '@private @protected @public @try @property @end @throw @catch @finally ' +
      '@autoreleasepool @synthesize @dynamic @selector @optional @required ' +
      '@encode @package @import @defs @compatibility_alias ' +
      '__bridge __bridge_transfer __bridge_retained __bridge_retain ' +
      '__covariant __contravariant __kindof ' +
      '_Nonnull _Nullable _Null_unspecified ' +
      '__FUNCTION__ __PRETTY_FUNCTION__ __attribute__ ' +
      'getter setter retain unsafe_unretained ' +
      'nonnull nullable null_unspecified null_resettable class instancetype ' +
      'NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER ' +
      'NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED ' +
      'NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE ' +
      'NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END ' +
      'NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW ' +
      'NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN',
    literal:
      'false true FALSE TRUE nil YES NO NULL',
    built_in:
      'BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once'
  };
  var CLASS_KEYWORDS = {
    $pattern: IDENTIFIER_RE,
    keyword: '@interface @class @protocol @implementation'
  };
  return {
    name: 'Objective-C',
    aliases: ['mm', 'objc', 'obj-c', 'obj-c++', 'objective-c++'],
    keywords: OBJC_KEYWORDS,
    illegal: '</',
    contains: [
      API_CLASS,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_NUMBER_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      {
        className: 'string',
        variants: [
          {
            begin: '@"', end: '"',
            illegal: '\\n',
            contains: [hljs.BACKSLASH_ESCAPE]
          }
        ]
      },
      {
        className: 'meta',
        begin: /#\s*[a-z]+\b/, end: /$/,
        keywords: {
          'meta-keyword':
            'if else elif endif define undef warning error line ' +
            'pragma ifdef ifndef include'
        },
        contains: [
          {
            begin: /\\\n/, relevance: 0
          },
          hljs.inherit(hljs.QUOTE_STRING_MODE, {className: 'meta-string'}),
          {
            className: 'meta-string',
            begin: /<.*?>/, end: /$/,
            illegal: '\\n',
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        className: 'class',
        begin: '(' + CLASS_KEYWORDS.keyword.split(' ').join('|') + ')\\b', end: '({|$)', excludeEnd: true,
        keywords: CLASS_KEYWORDS,
        contains: [
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        begin: '\\.'+hljs.UNDERSCORE_IDENT_RE,
        relevance: 0
      }
    ]
  };
}

module.exports = objectivec;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL29iamVjdGl2ZWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLGdEQUFnRCx5QkFBeUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9vYmplY3RpdmVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBPYmplY3RpdmUtQ1xuQXV0aG9yOiBWYWxlcmlpIEhpb3JhIDx2YWxlcmlpLmhpb3JhQGdtYWlsLmNvbT5cbkNvbnRyaWJ1dG9yczogQW5nZWwgRy4gT2xsb3F1aSA8YW5nZWxnYXJjaWEubWFpbEBnbWFpbC5jb20+LCBNYXR0IERpZXBob3VzZSA8bWF0dEBkaWVwaG91c2UuY29tPiwgQW5kcmV3IEZhcm1lciA8YWhmYXJtZXJAZ21haWwuY29tPiwgTWluaCBOZ3V54buFbiA8bXhuQDFlYzUub3JnPlxuV2Vic2l0ZTogaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vb2JqZWN0aXZlY1xuQ2F0ZWdvcnk6IGNvbW1vblxuKi9cblxuZnVuY3Rpb24gb2JqZWN0aXZlYyhobGpzKSB7XG4gIHZhciBBUElfQ0xBU1MgPSB7XG4gICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgIGJlZ2luOiAnXFxcXGIoQVZ8Q0F8Q0Z8Q0d8Q0l8Q0x8Q018Q058Q1R8TUt8TVB8TVRLfE1UTHxOU3xTQ058U0t8VUl8V0t8WEMpXFxcXHcrJyxcbiAgfTtcbiAgdmFyIElERU5USUZJRVJfUkUgPSAvW2EtekEtWkBdW2EtekEtWjAtOV9dKi87XG4gIHZhciBPQkpDX0tFWVdPUkRTID0ge1xuICAgICRwYXR0ZXJuOiBJREVOVElGSUVSX1JFLFxuICAgIGtleXdvcmQ6XG4gICAgICAnaW50IGZsb2F0IHdoaWxlIGNoYXIgZXhwb3J0IHNpemVvZiB0eXBlZGVmIGNvbnN0IHN0cnVjdCBmb3IgdW5pb24gJyArXG4gICAgICAndW5zaWduZWQgbG9uZyB2b2xhdGlsZSBzdGF0aWMgYm9vbCBtdXRhYmxlIGlmIGRvIHJldHVybiBnb3RvIHZvaWQgJyArXG4gICAgICAnZW51bSBlbHNlIGJyZWFrIGV4dGVybiBhc20gY2FzZSBzaG9ydCBkZWZhdWx0IGRvdWJsZSByZWdpc3RlciBleHBsaWNpdCAnICtcbiAgICAgICdzaWduZWQgdHlwZW5hbWUgdGhpcyBzd2l0Y2ggY29udGludWUgd2NoYXJfdCBpbmxpbmUgcmVhZG9ubHkgYXNzaWduICcgK1xuICAgICAgJ3JlYWR3cml0ZSBzZWxmIEBzeW5jaHJvbml6ZWQgaWQgdHlwZW9mICcgK1xuICAgICAgJ25vbmF0b21pYyBzdXBlciB1bmljaGFyIElCT3V0bGV0IElCQWN0aW9uIHN0cm9uZyB3ZWFrIGNvcHkgJyArXG4gICAgICAnaW4gb3V0IGlub3V0IGJ5Y29weSBieXJlZiBvbmV3YXkgX19zdHJvbmcgX193ZWFrIF9fYmxvY2sgX19hdXRvcmVsZWFzaW5nICcgK1xuICAgICAgJ0Bwcml2YXRlIEBwcm90ZWN0ZWQgQHB1YmxpYyBAdHJ5IEBwcm9wZXJ0eSBAZW5kIEB0aHJvdyBAY2F0Y2ggQGZpbmFsbHkgJyArXG4gICAgICAnQGF1dG9yZWxlYXNlcG9vbCBAc3ludGhlc2l6ZSBAZHluYW1pYyBAc2VsZWN0b3IgQG9wdGlvbmFsIEByZXF1aXJlZCAnICtcbiAgICAgICdAZW5jb2RlIEBwYWNrYWdlIEBpbXBvcnQgQGRlZnMgQGNvbXBhdGliaWxpdHlfYWxpYXMgJyArXG4gICAgICAnX19icmlkZ2UgX19icmlkZ2VfdHJhbnNmZXIgX19icmlkZ2VfcmV0YWluZWQgX19icmlkZ2VfcmV0YWluICcgK1xuICAgICAgJ19fY292YXJpYW50IF9fY29udHJhdmFyaWFudCBfX2tpbmRvZiAnICtcbiAgICAgICdfTm9ubnVsbCBfTnVsbGFibGUgX051bGxfdW5zcGVjaWZpZWQgJyArXG4gICAgICAnX19GVU5DVElPTl9fIF9fUFJFVFRZX0ZVTkNUSU9OX18gX19hdHRyaWJ1dGVfXyAnICtcbiAgICAgICdnZXR0ZXIgc2V0dGVyIHJldGFpbiB1bnNhZmVfdW5yZXRhaW5lZCAnICtcbiAgICAgICdub25udWxsIG51bGxhYmxlIG51bGxfdW5zcGVjaWZpZWQgbnVsbF9yZXNldHRhYmxlIGNsYXNzIGluc3RhbmNldHlwZSAnICtcbiAgICAgICdOU19ERVNJR05BVEVEX0lOSVRJQUxJWkVSIE5TX1VOQVZBSUxBQkxFIE5TX1JFUVVJUkVTX1NVUEVSICcgK1xuICAgICAgJ05TX1JFVFVSTlNfSU5ORVJfUE9JTlRFUiBOU19JTkxJTkUgTlNfQVZBSUxBQkxFIE5TX0RFUFJFQ0FURUQgJyArXG4gICAgICAnTlNfRU5VTSBOU19PUFRJT05TIE5TX1NXSUZUX1VOQVZBSUxBQkxFICcgK1xuICAgICAgJ05TX0FTU1VNRV9OT05OVUxMX0JFR0lOIE5TX0FTU1VNRV9OT05OVUxMX0VORCAnICtcbiAgICAgICdOU19SRUZJTkVEX0ZPUl9TV0lGVCBOU19TV0lGVF9OQU1FIE5TX1NXSUZUX05PVEhST1cgJyArXG4gICAgICAnTlNfRFVSSU5HIE5TX0hBTkRMRVIgTlNfRU5ESEFORExFUiBOU19WQUxVRVJFVFVSTiBOU19WT0lEUkVUVVJOJyxcbiAgICBsaXRlcmFsOlxuICAgICAgJ2ZhbHNlIHRydWUgRkFMU0UgVFJVRSBuaWwgWUVTIE5PIE5VTEwnLFxuICAgIGJ1aWx0X2luOlxuICAgICAgJ0JPT0wgZGlzcGF0Y2hfb25jZV90IGRpc3BhdGNoX3F1ZXVlX3QgZGlzcGF0Y2hfc3luYyBkaXNwYXRjaF9hc3luYyBkaXNwYXRjaF9vbmNlJ1xuICB9O1xuICB2YXIgQ0xBU1NfS0VZV09SRFMgPSB7XG4gICAgJHBhdHRlcm46IElERU5USUZJRVJfUkUsXG4gICAga2V5d29yZDogJ0BpbnRlcmZhY2UgQGNsYXNzIEBwcm90b2NvbCBAaW1wbGVtZW50YXRpb24nXG4gIH07XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ09iamVjdGl2ZS1DJyxcbiAgICBhbGlhc2VzOiBbJ21tJywgJ29iamMnLCAnb2JqLWMnLCAnb2JqLWMrKycsICdvYmplY3RpdmUtYysrJ10sXG4gICAga2V5d29yZHM6IE9CSkNfS0VZV09SRFMsXG4gICAgaWxsZWdhbDogJzwvJyxcbiAgICBjb250YWluczogW1xuICAgICAgQVBJX0NMQVNTLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdAXCInLCBlbmQ6ICdcIicsXG4gICAgICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46IC8jXFxzKlthLXpdK1xcYi8sIGVuZDogLyQvLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICdtZXRhLWtleXdvcmQnOlxuICAgICAgICAgICAgJ2lmIGVsc2UgZWxpZiBlbmRpZiBkZWZpbmUgdW5kZWYgd2FybmluZyBlcnJvciBsaW5lICcgK1xuICAgICAgICAgICAgJ3ByYWdtYSBpZmRlZiBpZm5kZWYgaW5jbHVkZSdcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1xcXFxcXG4vLCByZWxldmFuY2U6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7Y2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnfSksXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnLFxuICAgICAgICAgICAgYmVnaW46IC88Lio/Pi8sIGVuZDogLyQvLFxuICAgICAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW46ICcoJyArIENMQVNTX0tFWVdPUkRTLmtleXdvcmQuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKVxcXFxiJywgZW5kOiAnKHt8JCknLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBrZXl3b3JkczogQ0xBU1NfS0VZV09SRFMsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcLicraGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0aXZlYztcbiJdLCJzb3VyY2VSb290IjoiIn0=