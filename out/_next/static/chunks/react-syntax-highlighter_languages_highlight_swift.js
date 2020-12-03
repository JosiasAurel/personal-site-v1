(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_swift"],{

/***/ "./node_modules/highlight.js/lib/languages/swift.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/swift.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Swift
Description: Swift is a general-purpose programming language built using a modern approach to safety, performance, and software design patterns.
Author: Chris Eidhof <chris@eidhof.nl>
Contributors: Nate Cook <natecook@gmail.com>, Alexander Lichter <manniL@gmx.net>
Website: https://swift.org
Category: common, system
*/


function swift(hljs) {
  var SWIFT_KEYWORDS = {
      keyword: '#available #colorLiteral #column #else #elseif #endif #file ' +
        '#fileLiteral #function #if #imageLiteral #line #selector #sourceLocation ' +
        '_ __COLUMN__ __FILE__ __FUNCTION__ __LINE__ Any as as! as? associatedtype ' +
        'associativity break case catch class continue convenience default defer deinit didSet do ' +
        'dynamic dynamicType else enum extension fallthrough false fileprivate final for func ' +
        'get guard if import in indirect infix init inout internal is lazy left let ' +
        'mutating nil none nonmutating open operator optional override postfix precedence ' +
        'prefix private protocol Protocol public repeat required rethrows return ' +
        'right self Self set static struct subscript super switch throw throws true ' +
        'try try! try? Type typealias unowned var weak where while willSet',
      literal: 'true false nil',
      built_in: 'abs advance alignof alignofValue anyGenerator assert assertionFailure ' +
        'bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC ' +
        'bridgeToObjectiveCUnconditional c compactMap contains count countElements countLeadingZeros ' +
        'debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords ' +
        'enumerate equal fatalError filter find getBridgedObjectiveCType getVaList ' +
        'indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC ' +
        'isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare ' +
        'map max maxElement min minElement numericCast overlaps partition posix ' +
        'precondition preconditionFailure print println quickSort readLine reduce reflect ' +
        'reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split ' +
        'startsWith stride strideof strideofValue swap toString transcode ' +
        'underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap ' +
        'unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer ' +
        'withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers ' +
        'withUnsafePointer withUnsafePointers withVaList zip'
    };

  var TYPE = {
    className: 'type',
    begin: '\\b[A-Z][\\w\u00C0-\u02B8\']*',
    relevance: 0
  };
  // slightly more special to swift
  var OPTIONAL_USING_TYPE = {
    className: 'type',
    begin: '\\b[A-Z][\\w\u00C0-\u02B8\']*[!?]'
  };
  var BLOCK_COMMENT = hljs.COMMENT(
    '/\\*',
    '\\*/',
    {
      contains: ['self']
    }
  );
  var SUBST = {
    className: 'subst',
    begin: /\\\(/, end: '\\)',
    keywords: SWIFT_KEYWORDS,
    contains: [] // assigned later
  };
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
    variants: [
      {begin: /"""/, end: /"""/},
      {begin: /"/, end: /"/},
    ]
  };
  var NUMBERS = {
      className: 'number',
      begin: '\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b',
      relevance: 0
  };
  SUBST.contains = [NUMBERS];

  return {
    name: 'Swift',
    keywords: SWIFT_KEYWORDS,
    contains: [
      STRING,
      hljs.C_LINE_COMMENT_MODE,
      BLOCK_COMMENT,
      OPTIONAL_USING_TYPE,
      TYPE,
      NUMBERS,
      {
        className: 'function',
        beginKeywords: 'func', end: '{', excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {
            begin: /[A-Za-z$_][0-9A-Za-z$_]*/
          }),
          {
            begin: /</, end: />/
          },
          {
            className: 'params',
            begin: /\(/, end: /\)/, endsParent: true,
            keywords: SWIFT_KEYWORDS,
            contains: [
              'self',
              NUMBERS,
              STRING,
              hljs.C_BLOCK_COMMENT_MODE,
              {begin: ':'} // relevance booster
            ],
            illegal: /["']/
          }
        ],
        illegal: /\[|%/
      },
      {
        className: 'class',
        beginKeywords: 'struct protocol class extension enum',
        keywords: SWIFT_KEYWORDS,
        end: '\\{',
        excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/})
        ]
      },
      {
        className: 'meta', // @attributes
        begin: '(@discardableResult|@warn_unused_result|@exported|@lazy|@noescape|' +
                  '@NSCopying|@NSManaged|@objc|@objcMembers|@convention|@required|' +
                  '@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|' +
                  '@infix|@prefix|@postfix|@autoclosure|@testable|@available|' +
                  '@nonobjc|@NSApplicationMain|@UIApplicationMain|@dynamicMemberLookup|' +
                  '@propertyWrapper)\\b'

      },
      {
        beginKeywords: 'import', end: /$/,
        contains: [hljs.C_LINE_COMMENT_MODE, BLOCK_COMMENT]
      }
    ]
  };
}

module.exports = swift;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3N3aWZ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5QkFBeUI7QUFDaEMsT0FBTyxxQkFBcUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHlDQUF5QywrQ0FBK0M7QUFDeEY7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9zd2lmdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogU3dpZnRcbkRlc2NyaXB0aW9uOiBTd2lmdCBpcyBhIGdlbmVyYWwtcHVycG9zZSBwcm9ncmFtbWluZyBsYW5ndWFnZSBidWlsdCB1c2luZyBhIG1vZGVybiBhcHByb2FjaCB0byBzYWZldHksIHBlcmZvcm1hbmNlLCBhbmQgc29mdHdhcmUgZGVzaWduIHBhdHRlcm5zLlxuQXV0aG9yOiBDaHJpcyBFaWRob2YgPGNocmlzQGVpZGhvZi5ubD5cbkNvbnRyaWJ1dG9yczogTmF0ZSBDb29rIDxuYXRlY29va0BnbWFpbC5jb20+LCBBbGV4YW5kZXIgTGljaHRlciA8bWFubmlMQGdteC5uZXQ+XG5XZWJzaXRlOiBodHRwczovL3N3aWZ0Lm9yZ1xuQ2F0ZWdvcnk6IGNvbW1vbiwgc3lzdGVtXG4qL1xuXG5cbmZ1bmN0aW9uIHN3aWZ0KGhsanMpIHtcbiAgdmFyIFNXSUZUX0tFWVdPUkRTID0ge1xuICAgICAga2V5d29yZDogJyNhdmFpbGFibGUgI2NvbG9yTGl0ZXJhbCAjY29sdW1uICNlbHNlICNlbHNlaWYgI2VuZGlmICNmaWxlICcgK1xuICAgICAgICAnI2ZpbGVMaXRlcmFsICNmdW5jdGlvbiAjaWYgI2ltYWdlTGl0ZXJhbCAjbGluZSAjc2VsZWN0b3IgI3NvdXJjZUxvY2F0aW9uICcgK1xuICAgICAgICAnXyBfX0NPTFVNTl9fIF9fRklMRV9fIF9fRlVOQ1RJT05fXyBfX0xJTkVfXyBBbnkgYXMgYXMhIGFzPyBhc3NvY2lhdGVkdHlwZSAnICtcbiAgICAgICAgJ2Fzc29jaWF0aXZpdHkgYnJlYWsgY2FzZSBjYXRjaCBjbGFzcyBjb250aW51ZSBjb252ZW5pZW5jZSBkZWZhdWx0IGRlZmVyIGRlaW5pdCBkaWRTZXQgZG8gJyArXG4gICAgICAgICdkeW5hbWljIGR5bmFtaWNUeXBlIGVsc2UgZW51bSBleHRlbnNpb24gZmFsbHRocm91Z2ggZmFsc2UgZmlsZXByaXZhdGUgZmluYWwgZm9yIGZ1bmMgJyArXG4gICAgICAgICdnZXQgZ3VhcmQgaWYgaW1wb3J0IGluIGluZGlyZWN0IGluZml4IGluaXQgaW5vdXQgaW50ZXJuYWwgaXMgbGF6eSBsZWZ0IGxldCAnICtcbiAgICAgICAgJ211dGF0aW5nIG5pbCBub25lIG5vbm11dGF0aW5nIG9wZW4gb3BlcmF0b3Igb3B0aW9uYWwgb3ZlcnJpZGUgcG9zdGZpeCBwcmVjZWRlbmNlICcgK1xuICAgICAgICAncHJlZml4IHByaXZhdGUgcHJvdG9jb2wgUHJvdG9jb2wgcHVibGljIHJlcGVhdCByZXF1aXJlZCByZXRocm93cyByZXR1cm4gJyArXG4gICAgICAgICdyaWdodCBzZWxmIFNlbGYgc2V0IHN0YXRpYyBzdHJ1Y3Qgc3Vic2NyaXB0IHN1cGVyIHN3aXRjaCB0aHJvdyB0aHJvd3MgdHJ1ZSAnICtcbiAgICAgICAgJ3RyeSB0cnkhIHRyeT8gVHlwZSB0eXBlYWxpYXMgdW5vd25lZCB2YXIgd2VhayB3aGVyZSB3aGlsZSB3aWxsU2V0JyxcbiAgICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlIG5pbCcsXG4gICAgICBidWlsdF9pbjogJ2FicyBhZHZhbmNlIGFsaWdub2YgYWxpZ25vZlZhbHVlIGFueUdlbmVyYXRvciBhc3NlcnQgYXNzZXJ0aW9uRmFpbHVyZSAnICtcbiAgICAgICAgJ2JyaWRnZUZyb21PYmplY3RpdmVDIGJyaWRnZUZyb21PYmplY3RpdmVDVW5jb25kaXRpb25hbCBicmlkZ2VUb09iamVjdGl2ZUMgJyArXG4gICAgICAgICdicmlkZ2VUb09iamVjdGl2ZUNVbmNvbmRpdGlvbmFsIGMgY29tcGFjdE1hcCBjb250YWlucyBjb3VudCBjb3VudEVsZW1lbnRzIGNvdW50TGVhZGluZ1plcm9zICcgK1xuICAgICAgICAnZGVidWdQcmludCBkZWJ1Z1ByaW50bG4gZGlzdGFuY2UgZHJvcEZpcnN0IGRyb3BMYXN0IGR1bXAgZW5jb2RlQml0c0FzV29yZHMgJyArXG4gICAgICAgICdlbnVtZXJhdGUgZXF1YWwgZmF0YWxFcnJvciBmaWx0ZXIgZmluZCBnZXRCcmlkZ2VkT2JqZWN0aXZlQ1R5cGUgZ2V0VmFMaXN0ICcgK1xuICAgICAgICAnaW5kaWNlcyBpbnNlcnRpb25Tb3J0IGlzQnJpZGdlZFRvT2JqZWN0aXZlQyBpc0JyaWRnZWRWZXJiYXRpbVRvT2JqZWN0aXZlQyAnICtcbiAgICAgICAgJ2lzVW5pcXVlbHlSZWZlcmVuY2VkIGlzVW5pcXVlbHlSZWZlcmVuY2VkTm9uT2JqQyBqb2luIGxhenkgbGV4aWNvZ3JhcGhpY2FsQ29tcGFyZSAnICtcbiAgICAgICAgJ21hcCBtYXggbWF4RWxlbWVudCBtaW4gbWluRWxlbWVudCBudW1lcmljQ2FzdCBvdmVybGFwcyBwYXJ0aXRpb24gcG9zaXggJyArXG4gICAgICAgICdwcmVjb25kaXRpb24gcHJlY29uZGl0aW9uRmFpbHVyZSBwcmludCBwcmludGxuIHF1aWNrU29ydCByZWFkTGluZSByZWR1Y2UgcmVmbGVjdCAnICtcbiAgICAgICAgJ3JlaW50ZXJwcmV0Q2FzdCByZXZlcnNlIHJvdW5kVXBUb0FsaWdubWVudCBzaXplb2Ygc2l6ZW9mVmFsdWUgc29ydCBzcGxpdCAnICtcbiAgICAgICAgJ3N0YXJ0c1dpdGggc3RyaWRlIHN0cmlkZW9mIHN0cmlkZW9mVmFsdWUgc3dhcCB0b1N0cmluZyB0cmFuc2NvZGUgJyArXG4gICAgICAgICd1bmRlcmVzdGltYXRlQ291bnQgdW5zYWZlQWRkcmVzc09mIHVuc2FmZUJpdENhc3QgdW5zYWZlRG93bmNhc3QgdW5zYWZlVW53cmFwICcgK1xuICAgICAgICAndW5zYWZlUmVmbGVjdCB3aXRoRXh0ZW5kZWRMaWZldGltZSB3aXRoT2JqZWN0QXRQbHVzWmVybyB3aXRoVW5zYWZlUG9pbnRlciAnICtcbiAgICAgICAgJ3dpdGhVbnNhZmVQb2ludGVyVG9PYmplY3Qgd2l0aFVuc2FmZU11dGFibGVQb2ludGVyIHdpdGhVbnNhZmVNdXRhYmxlUG9pbnRlcnMgJyArXG4gICAgICAgICd3aXRoVW5zYWZlUG9pbnRlciB3aXRoVW5zYWZlUG9pbnRlcnMgd2l0aFZhTGlzdCB6aXAnXG4gICAgfTtcblxuICB2YXIgVFlQRSA9IHtcbiAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICBiZWdpbjogJ1xcXFxiW0EtWl1bXFxcXHdcXHUwMEMwLVxcdTAyQjhcXCddKicsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIC8vIHNsaWdodGx5IG1vcmUgc3BlY2lhbCB0byBzd2lmdFxuICB2YXIgT1BUSU9OQUxfVVNJTkdfVFlQRSA9IHtcbiAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICBiZWdpbjogJ1xcXFxiW0EtWl1bXFxcXHdcXHUwMEMwLVxcdTAyQjhcXCddKlshP10nXG4gIH07XG4gIHZhciBCTE9DS19DT01NRU5UID0gaGxqcy5DT01NRU5UKFxuICAgICcvXFxcXConLFxuICAgICdcXFxcKi8nLFxuICAgIHtcbiAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnXVxuICAgIH1cbiAgKTtcbiAgdmFyIFNVQlNUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICBiZWdpbjogL1xcXFxcXCgvLCBlbmQ6ICdcXFxcKScsXG4gICAga2V5d29yZHM6IFNXSUZUX0tFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXSAvLyBhc3NpZ25lZCBsYXRlclxuICB9O1xuICB2YXIgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEUsIFNVQlNUXSxcbiAgICB2YXJpYW50czogW1xuICAgICAge2JlZ2luOiAvXCJcIlwiLywgZW5kOiAvXCJcIlwiL30sXG4gICAgICB7YmVnaW46IC9cIi8sIGVuZDogL1wiL30sXG4gICAgXVxuICB9O1xuICB2YXIgTlVNQkVSUyA9IHtcbiAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICBiZWdpbjogJ1xcXFxiKFtcXFxcZF9dKyhcXFxcLltcXFxcZGVFX10rKT98MHhbYS1mQS1GMC05X10rKFxcXFwuW2EtZkEtRjAtOXBfXSspP3wwYlswMV9dK3wwb1swLTdfXSspXFxcXGInLFxuICAgICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIFNVQlNULmNvbnRhaW5zID0gW05VTUJFUlNdO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1N3aWZ0JyxcbiAgICBrZXl3b3JkczogU1dJRlRfS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIFNUUklORyxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIEJMT0NLX0NPTU1FTlQsXG4gICAgICBPUFRJT05BTF9VU0lOR19UWVBFLFxuICAgICAgVFlQRSxcbiAgICAgIE5VTUJFUlMsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2Z1bmMnLCBlbmQ6ICd7JywgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7XG4gICAgICAgICAgICBiZWdpbjogL1tBLVphLXokX11bMC05QS1aYS16JF9dKi9cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogLzwvLCBlbmQ6IC8+L1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLywgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgIGtleXdvcmRzOiBTV0lGVF9LRVlXT1JEUyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICdzZWxmJyxcbiAgICAgICAgICAgICAgTlVNQkVSUyxcbiAgICAgICAgICAgICAgU1RSSU5HLFxuICAgICAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgICB7YmVnaW46ICc6J30gLy8gcmVsZXZhbmNlIGJvb3N0ZXJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBpbGxlZ2FsOiAvW1wiJ10vXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBpbGxlZ2FsOiAvXFxbfCUvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdzdHJ1Y3QgcHJvdG9jb2wgY2xhc3MgZXh0ZW5zaW9uIGVudW0nLFxuICAgICAgICBrZXl3b3JkczogU1dJRlRfS0VZV09SRFMsXG4gICAgICAgIGVuZDogJ1xcXFx7JyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7YmVnaW46IC9bQS1aYS16JF9dW1xcdTAwQzAtXFx1MDJCODAtOUEtWmEteiRfXSovfSlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsIC8vIEBhdHRyaWJ1dGVzXG4gICAgICAgIGJlZ2luOiAnKEBkaXNjYXJkYWJsZVJlc3VsdHxAd2Fybl91bnVzZWRfcmVzdWx0fEBleHBvcnRlZHxAbGF6eXxAbm9lc2NhcGV8JyArXG4gICAgICAgICAgICAgICAgICAnQE5TQ29weWluZ3xATlNNYW5hZ2VkfEBvYmpjfEBvYmpjTWVtYmVyc3xAY29udmVudGlvbnxAcmVxdWlyZWR8JyArXG4gICAgICAgICAgICAgICAgICAnQG5vcmV0dXJufEBJQkFjdGlvbnxASUJEZXNpZ25hYmxlfEBJQkluc3BlY3RhYmxlfEBJQk91dGxldHwnICtcbiAgICAgICAgICAgICAgICAgICdAaW5maXh8QHByZWZpeHxAcG9zdGZpeHxAYXV0b2Nsb3N1cmV8QHRlc3RhYmxlfEBhdmFpbGFibGV8JyArXG4gICAgICAgICAgICAgICAgICAnQG5vbm9iamN8QE5TQXBwbGljYXRpb25NYWlufEBVSUFwcGxpY2F0aW9uTWFpbnxAZHluYW1pY01lbWJlckxvb2t1cHwnICtcbiAgICAgICAgICAgICAgICAgICdAcHJvcGVydHlXcmFwcGVyKVxcXFxiJ1xuXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnaW1wb3J0JywgZW5kOiAvJC8sXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLCBCTE9DS19DT01NRU5UXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzd2lmdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=