(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_capnproto"],{

/***/ "./node_modules/highlight.js/lib/languages/capnproto.js":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/capnproto.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Cap’n Proto
Author: Oleg Efimov <efimovov@gmail.com>
Description: Cap’n Proto message definition format
Website: https://capnproto.org/capnp-tool.html
Category: protocols
*/

/** @type LanguageFn */
function capnproto(hljs) {
  return {
    name: 'Cap’n Proto',
    aliases: ['capnp'],
    keywords: {
      keyword:
        'struct enum interface union group import using const annotation extends in of on as with from fixed',
      built_in:
        'Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 ' +
        'Text Data AnyPointer AnyStruct Capability List',
      literal:
        'true false'
    },
    contains: [
      hljs.QUOTE_STRING_MODE,
      hljs.NUMBER_MODE,
      hljs.HASH_COMMENT_MODE,
      {
        className: 'meta',
        begin: /@0x[\w\d]{16};/,
        illegal: /\n/
      },
      {
        className: 'symbol',
        begin: /@\d+\b/
      },
      {
        className: 'class',
        beginKeywords: 'struct enum', end: /\{/,
        illegal: /\n/,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {
            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title
          })
        ]
      },
      {
        className: 'class',
        beginKeywords: 'interface', end: /\{/,
        illegal: /\n/,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {
            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title
          })
        ]
      }
    ]
  };
}

module.exports = capnproto;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NhcG5wcm90by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsSUFBSTtBQUM5QjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdUNBQXVDO0FBQzVELFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix1Q0FBdUM7QUFDNUQsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9jYXBucHJvdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IENhcOKAmW4gUHJvdG9cbkF1dGhvcjogT2xlZyBFZmltb3YgPGVmaW1vdm92QGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBDYXDigJluIFByb3RvIG1lc3NhZ2UgZGVmaW5pdGlvbiBmb3JtYXRcbldlYnNpdGU6IGh0dHBzOi8vY2FwbnByb3RvLm9yZy9jYXBucC10b29sLmh0bWxcbkNhdGVnb3J5OiBwcm90b2NvbHNcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBjYXBucHJvdG8oaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDYXDigJluIFByb3RvJyxcbiAgICBhbGlhc2VzOiBbJ2NhcG5wJ10sXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdzdHJ1Y3QgZW51bSBpbnRlcmZhY2UgdW5pb24gZ3JvdXAgaW1wb3J0IHVzaW5nIGNvbnN0IGFubm90YXRpb24gZXh0ZW5kcyBpbiBvZiBvbiBhcyB3aXRoIGZyb20gZml4ZWQnLFxuICAgICAgYnVpbHRfaW46XG4gICAgICAgICdWb2lkIEJvb2wgSW50OCBJbnQxNiBJbnQzMiBJbnQ2NCBVSW50OCBVSW50MTYgVUludDMyIFVJbnQ2NCBGbG9hdDMyIEZsb2F0NjQgJyArXG4gICAgICAgICdUZXh0IERhdGEgQW55UG9pbnRlciBBbnlTdHJ1Y3QgQ2FwYWJpbGl0eSBMaXN0JyxcbiAgICAgIGxpdGVyYWw6XG4gICAgICAgICd0cnVlIGZhbHNlJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLk5VTUJFUl9NT0RFLFxuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAvQDB4W1xcd1xcZF17MTZ9Oy8sXG4gICAgICAgIGlsbGVnYWw6IC9cXG4vXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICBiZWdpbjogL0BcXGQrXFxiL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnc3RydWN0IGVudW0nLCBlbmQ6IC9cXHsvLFxuICAgICAgICBpbGxlZ2FsOiAvXFxuLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7XG4gICAgICAgICAgICBzdGFydHM6IHtlbmRzV2l0aFBhcmVudDogdHJ1ZSwgZXhjbHVkZUVuZDogdHJ1ZX0gLy8gaGFjazogZWF0aW5nIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IHRpdGxlXG4gICAgICAgICAgfSlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnaW50ZXJmYWNlJywgZW5kOiAvXFx7LyxcbiAgICAgICAgaWxsZWdhbDogL1xcbi8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge1xuICAgICAgICAgICAgc3RhcnRzOiB7ZW5kc1dpdGhQYXJlbnQ6IHRydWUsIGV4Y2x1ZGVFbmQ6IHRydWV9IC8vIGhhY2s6IGVhdGluZyBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCB0aXRsZVxuICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FwbnByb3RvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==