(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_php"],{

/***/ "./node_modules/highlight.js/lib/languages/php.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/php.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: PHP
Author: Victor Karamzin <Victor.Karamzin@enterra-inc.com>
Contributors: Evgeny Stepanischev <imbolk@gmail.com>, Ivan Sagalaev <maniac@softwaremaniacs.org>
Website: https://www.php.net
Category: common
*/

/**
 * @param {HLJSApi} hljs
 * @returns {LanguageDetail}
 * */
function php(hljs) {
  var VARIABLE = {
    begin: '\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*'
  };
  var PREPROCESSOR = {
    className: 'meta',
    variants: [
      { begin: /<\?php/, relevance: 10 }, // boost for obvious PHP
      { begin: /<\?[=]?/ },
      { begin: /\?>/ } // end php tag
    ]
  };
  var SUBST = {
    className: 'subst',
    variants: [
      { begin: /\$\w+/ },
      { begin: /\{\$/, end: /\}/ }
    ]
  };
  var SINGLE_QUOTED = hljs.inherit(hljs.APOS_STRING_MODE, {
    illegal: null,
  });
  var DOUBLE_QUOTED = hljs.inherit(hljs.QUOTE_STRING_MODE, {
    illegal: null,
    contains: hljs.QUOTE_STRING_MODE.contains.concat(SUBST),
  });
  var HEREDOC = hljs.END_SAME_AS_BEGIN({
    begin: /<<<[ \t]*(\w+)\n/,
    end: /[ \t]*(\w+)\b/,
    contains: hljs.QUOTE_STRING_MODE.contains.concat(SUBST),
  });
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, PREPROCESSOR],
    variants: [
      hljs.inherit(SINGLE_QUOTED, {
        begin: "b'", end: "'",
      }),
      hljs.inherit(DOUBLE_QUOTED, {
        begin: 'b"', end: '"',
      }),
      DOUBLE_QUOTED,
      SINGLE_QUOTED,
      HEREDOC
    ]
  };
  var NUMBER = {variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]};
  var KEYWORDS = {
    keyword:
    // Magic constants:
    // <https://www.php.net/manual/en/language.constants.predefined.php>
    '__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ ' +
    // Function that look like language construct or language construct that look like function:
    // List of keywords that may not require parenthesis
    'die echo exit include include_once print require require_once ' +
    // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
    // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
    // Other keywords:
    // <https://www.php.net/manual/en/reserved.php>
    // <https://www.php.net/manual/en/language.types.type-juggling.php>
    'array abstract and as binary bool boolean break callable case catch class clone const continue declare default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile eval extends final finally float for foreach from global goto if implements instanceof insteadof int integer interface isset iterable list match new object or private protected public real return string switch throw trait try unset use var void while xor yield',
    literal: 'false null true',
    built_in:
    // Standard PHP library:
    // <https://www.php.net/manual/en/book.spl.php>
    'Error|0 ' + // error is too common a name esp since PHP is case in-sensitive
    'AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException ' +
    // Reserved interfaces:
    // <https://www.php.net/manual/en/reserved.interfaces.php>
    'ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Throwable Traversable WeakReference ' +
    // Reserved classes:
    // <https://www.php.net/manual/en/reserved.classes.php>
    'Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass'
  };
  return {
    aliases: ['php', 'php3', 'php4', 'php5', 'php6', 'php7', 'php8'],
    case_insensitive: true,
    keywords: KEYWORDS,
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.COMMENT('//', '$', {contains: [PREPROCESSOR]}),
      hljs.COMMENT(
        '/\\*',
        '\\*/',
        {
          contains: [
            {
              className: 'doctag',
              begin: '@[A-Za-z]+'
            }
          ]
        }
      ),
      hljs.COMMENT(
        '__halt_compiler.+?;',
        false,
        {
          endsWithParent: true,
          keywords: '__halt_compiler'
        }
      ),
      PREPROCESSOR,
      {
        className: 'keyword', begin: /\$this\b/
      },
      VARIABLE,
      {
        // swallow composed identifiers to avoid parsing them as keywords
        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
      },
      {
        className: 'function',
        beginKeywords: 'fn function', end: /[;{]/, excludeEnd: true,
        illegal: '[$%\\[]',
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          {
            className: 'params',
            begin: '\\(', end: '\\)',
            excludeBegin: true,
            excludeEnd: true,
            keywords: KEYWORDS,
            contains: [
              'self',
              VARIABLE,
              hljs.C_BLOCK_COMMENT_MODE,
              STRING,
              NUMBER
            ]
          }
        ]
      },
      {
        className: 'class',
        beginKeywords: 'class interface', end: '{', excludeEnd: true,
        illegal: /[:\(\$"]/,
        contains: [
          {beginKeywords: 'extends implements'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        beginKeywords: 'namespace', end: ';',
        illegal: /[\.']/,
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      },
      {
        beginKeywords: 'use', end: ';',
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      },
      {
        begin: '=>' // No markup, just a relevance booster
      },
      STRING,
      NUMBER
    ]
  };
}

module.exports = php;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3BocC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUNBQWlDO0FBQ3hDLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sZUFBZTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxXQUFXLGFBQWE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHlCQUF5QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0EsV0FBVyxvQ0FBb0M7QUFDL0M7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X3BocC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogUEhQXG5BdXRob3I6IFZpY3RvciBLYXJhbXppbiA8VmljdG9yLkthcmFtemluQGVudGVycmEtaW5jLmNvbT5cbkNvbnRyaWJ1dG9yczogRXZnZW55IFN0ZXBhbmlzY2hldiA8aW1ib2xrQGdtYWlsLmNvbT4sIEl2YW4gU2FnYWxhZXYgPG1hbmlhY0Bzb2Z0d2FyZW1hbmlhY3Mub3JnPlxuV2Vic2l0ZTogaHR0cHM6Ly93d3cucGhwLm5ldFxuQ2F0ZWdvcnk6IGNvbW1vblxuKi9cblxuLyoqXG4gKiBAcGFyYW0ge0hMSlNBcGl9IGhsanNcbiAqIEByZXR1cm5zIHtMYW5ndWFnZURldGFpbH1cbiAqICovXG5mdW5jdGlvbiBwaHAoaGxqcykge1xuICB2YXIgVkFSSUFCTEUgPSB7XG4gICAgYmVnaW46ICdcXFxcJCtbYS16QS1aX1xceDdmLVxceGZmXVthLXpBLVowLTlfXFx4N2YtXFx4ZmZdKidcbiAgfTtcbiAgdmFyIFBSRVBST0NFU1NPUiA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICB2YXJpYW50czogW1xuICAgICAgeyBiZWdpbjogLzxcXD9waHAvLCByZWxldmFuY2U6IDEwIH0sIC8vIGJvb3N0IGZvciBvYnZpb3VzIFBIUFxuICAgICAgeyBiZWdpbjogLzxcXD9bPV0/LyB9LFxuICAgICAgeyBiZWdpbjogL1xcPz4vIH0gLy8gZW5kIHBocCB0YWdcbiAgICBdXG4gIH07XG4gIHZhciBTVUJTVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHsgYmVnaW46IC9cXCRcXHcrLyB9LFxuICAgICAgeyBiZWdpbjogL1xce1xcJC8sIGVuZDogL1xcfS8gfVxuICAgIF1cbiAgfTtcbiAgdmFyIFNJTkdMRV9RVU9URUQgPSBobGpzLmluaGVyaXQoaGxqcy5BUE9TX1NUUklOR19NT0RFLCB7XG4gICAgaWxsZWdhbDogbnVsbCxcbiAgfSk7XG4gIHZhciBET1VCTEVfUVVPVEVEID0gaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtcbiAgICBpbGxlZ2FsOiBudWxsLFxuICAgIGNvbnRhaW5zOiBobGpzLlFVT1RFX1NUUklOR19NT0RFLmNvbnRhaW5zLmNvbmNhdChTVUJTVCksXG4gIH0pO1xuICB2YXIgSEVSRURPQyA9IGhsanMuRU5EX1NBTUVfQVNfQkVHSU4oe1xuICAgIGJlZ2luOiAvPDw8WyBcXHRdKihcXHcrKVxcbi8sXG4gICAgZW5kOiAvWyBcXHRdKihcXHcrKVxcYi8sXG4gICAgY29udGFpbnM6IGhsanMuUVVPVEVfU1RSSU5HX01PREUuY29udGFpbnMuY29uY2F0KFNVQlNUKSxcbiAgfSk7XG4gIHZhciBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRSwgUFJFUFJPQ0VTU09SXSxcbiAgICB2YXJpYW50czogW1xuICAgICAgaGxqcy5pbmhlcml0KFNJTkdMRV9RVU9URUQsIHtcbiAgICAgICAgYmVnaW46IFwiYidcIiwgZW5kOiBcIidcIixcbiAgICAgIH0pLFxuICAgICAgaGxqcy5pbmhlcml0KERPVUJMRV9RVU9URUQsIHtcbiAgICAgICAgYmVnaW46ICdiXCInLCBlbmQ6ICdcIicsXG4gICAgICB9KSxcbiAgICAgIERPVUJMRV9RVU9URUQsXG4gICAgICBTSU5HTEVfUVVPVEVELFxuICAgICAgSEVSRURPQ1xuICAgIF1cbiAgfTtcbiAgdmFyIE5VTUJFUiA9IHt2YXJpYW50czogW2hsanMuQklOQVJZX05VTUJFUl9NT0RFLCBobGpzLkNfTlVNQkVSX01PREVdfTtcbiAgdmFyIEtFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6XG4gICAgLy8gTWFnaWMgY29uc3RhbnRzOlxuICAgIC8vIDxodHRwczovL3d3dy5waHAubmV0L21hbnVhbC9lbi9sYW5ndWFnZS5jb25zdGFudHMucHJlZGVmaW5lZC5waHA+XG4gICAgJ19fQ0xBU1NfXyBfX0RJUl9fIF9fRklMRV9fIF9fRlVOQ1RJT05fXyBfX0xJTkVfXyBfX01FVEhPRF9fIF9fTkFNRVNQQUNFX18gX19UUkFJVF9fICcgK1xuICAgIC8vIEZ1bmN0aW9uIHRoYXQgbG9vayBsaWtlIGxhbmd1YWdlIGNvbnN0cnVjdCBvciBsYW5ndWFnZSBjb25zdHJ1Y3QgdGhhdCBsb29rIGxpa2UgZnVuY3Rpb246XG4gICAgLy8gTGlzdCBvZiBrZXl3b3JkcyB0aGF0IG1heSBub3QgcmVxdWlyZSBwYXJlbnRoZXNpc1xuICAgICdkaWUgZWNobyBleGl0IGluY2x1ZGUgaW5jbHVkZV9vbmNlIHByaW50IHJlcXVpcmUgcmVxdWlyZV9vbmNlICcgK1xuICAgIC8vIFRoZXNlIGFyZSBub3QgbGFuZ3VhZ2UgY29uc3RydWN0IChmdW5jdGlvbikgYnV0IG9wZXJhdGUgb24gdGhlIGN1cnJlbnRseS1leGVjdXRpbmcgZnVuY3Rpb24gYW5kIGNhbiBhY2Nlc3MgdGhlIGN1cnJlbnQgc3ltYm9sIHRhYmxlXG4gICAgLy8gJ2NvbXBhY3QgZXh0cmFjdCBmdW5jX2dldF9hcmcgZnVuY19nZXRfYXJncyBmdW5jX251bV9hcmdzIGdldF9jYWxsZWRfY2xhc3MgZ2V0X3BhcmVudF9jbGFzcyAnICtcbiAgICAvLyBPdGhlciBrZXl3b3JkczpcbiAgICAvLyA8aHR0cHM6Ly93d3cucGhwLm5ldC9tYW51YWwvZW4vcmVzZXJ2ZWQucGhwPlxuICAgIC8vIDxodHRwczovL3d3dy5waHAubmV0L21hbnVhbC9lbi9sYW5ndWFnZS50eXBlcy50eXBlLWp1Z2dsaW5nLnBocD5cbiAgICAnYXJyYXkgYWJzdHJhY3QgYW5kIGFzIGJpbmFyeSBib29sIGJvb2xlYW4gYnJlYWsgY2FsbGFibGUgY2FzZSBjYXRjaCBjbGFzcyBjbG9uZSBjb25zdCBjb250aW51ZSBkZWNsYXJlIGRlZmF1bHQgZG8gZG91YmxlIGVsc2UgZWxzZWlmIGVtcHR5IGVuZGRlY2xhcmUgZW5kZm9yIGVuZGZvcmVhY2ggZW5kaWYgZW5kc3dpdGNoIGVuZHdoaWxlIGV2YWwgZXh0ZW5kcyBmaW5hbCBmaW5hbGx5IGZsb2F0IGZvciBmb3JlYWNoIGZyb20gZ2xvYmFsIGdvdG8gaWYgaW1wbGVtZW50cyBpbnN0YW5jZW9mIGluc3RlYWRvZiBpbnQgaW50ZWdlciBpbnRlcmZhY2UgaXNzZXQgaXRlcmFibGUgbGlzdCBtYXRjaCBuZXcgb2JqZWN0IG9yIHByaXZhdGUgcHJvdGVjdGVkIHB1YmxpYyByZWFsIHJldHVybiBzdHJpbmcgc3dpdGNoIHRocm93IHRyYWl0IHRyeSB1bnNldCB1c2UgdmFyIHZvaWQgd2hpbGUgeG9yIHlpZWxkJyxcbiAgICBsaXRlcmFsOiAnZmFsc2UgbnVsbCB0cnVlJyxcbiAgICBidWlsdF9pbjpcbiAgICAvLyBTdGFuZGFyZCBQSFAgbGlicmFyeTpcbiAgICAvLyA8aHR0cHM6Ly93d3cucGhwLm5ldC9tYW51YWwvZW4vYm9vay5zcGwucGhwPlxuICAgICdFcnJvcnwwICcgKyAvLyBlcnJvciBpcyB0b28gY29tbW9uIGEgbmFtZSBlc3Agc2luY2UgUEhQIGlzIGNhc2UgaW4tc2Vuc2l0aXZlXG4gICAgJ0FwcGVuZEl0ZXJhdG9yIEFyZ3VtZW50Q291bnRFcnJvciBBcml0aG1ldGljRXJyb3IgQXJyYXlJdGVyYXRvciBBcnJheU9iamVjdCBBc3NlcnRpb25FcnJvciBCYWRGdW5jdGlvbkNhbGxFeGNlcHRpb24gQmFkTWV0aG9kQ2FsbEV4Y2VwdGlvbiBDYWNoaW5nSXRlcmF0b3IgQ2FsbGJhY2tGaWx0ZXJJdGVyYXRvciBDb21waWxlRXJyb3IgQ291bnRhYmxlIERpcmVjdG9yeUl0ZXJhdG9yIERpdmlzaW9uQnlaZXJvRXJyb3IgRG9tYWluRXhjZXB0aW9uIEVtcHR5SXRlcmF0b3IgRXJyb3JFeGNlcHRpb24gRXhjZXB0aW9uIEZpbGVzeXN0ZW1JdGVyYXRvciBGaWx0ZXJJdGVyYXRvciBHbG9iSXRlcmF0b3IgSW5maW5pdGVJdGVyYXRvciBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24gSXRlcmF0b3JJdGVyYXRvciBMZW5ndGhFeGNlcHRpb24gTGltaXRJdGVyYXRvciBMb2dpY0V4Y2VwdGlvbiBNdWx0aXBsZUl0ZXJhdG9yIE5vUmV3aW5kSXRlcmF0b3IgT3V0T2ZCb3VuZHNFeGNlcHRpb24gT3V0T2ZSYW5nZUV4Y2VwdGlvbiBPdXRlckl0ZXJhdG9yIE92ZXJmbG93RXhjZXB0aW9uIFBhcmVudEl0ZXJhdG9yIFBhcnNlRXJyb3IgUmFuZ2VFeGNlcHRpb24gUmVjdXJzaXZlQXJyYXlJdGVyYXRvciBSZWN1cnNpdmVDYWNoaW5nSXRlcmF0b3IgUmVjdXJzaXZlQ2FsbGJhY2tGaWx0ZXJJdGVyYXRvciBSZWN1cnNpdmVEaXJlY3RvcnlJdGVyYXRvciBSZWN1cnNpdmVGaWx0ZXJJdGVyYXRvciBSZWN1cnNpdmVJdGVyYXRvciBSZWN1cnNpdmVJdGVyYXRvckl0ZXJhdG9yIFJlY3Vyc2l2ZVJlZ2V4SXRlcmF0b3IgUmVjdXJzaXZlVHJlZUl0ZXJhdG9yIFJlZ2V4SXRlcmF0b3IgUnVudGltZUV4Y2VwdGlvbiBTZWVrYWJsZUl0ZXJhdG9yIFNwbERvdWJseUxpbmtlZExpc3QgU3BsRmlsZUluZm8gU3BsRmlsZU9iamVjdCBTcGxGaXhlZEFycmF5IFNwbEhlYXAgU3BsTWF4SGVhcCBTcGxNaW5IZWFwIFNwbE9iamVjdFN0b3JhZ2UgU3BsT2JzZXJ2ZXIgU3BsT2JzZXJ2ZXIgU3BsUHJpb3JpdHlRdWV1ZSBTcGxRdWV1ZSBTcGxTdGFjayBTcGxTdWJqZWN0IFNwbFN1YmplY3QgU3BsVGVtcEZpbGVPYmplY3QgVHlwZUVycm9yIFVuZGVyZmxvd0V4Y2VwdGlvbiBVbmV4cGVjdGVkVmFsdWVFeGNlcHRpb24gJyArXG4gICAgLy8gUmVzZXJ2ZWQgaW50ZXJmYWNlczpcbiAgICAvLyA8aHR0cHM6Ly93d3cucGhwLm5ldC9tYW51YWwvZW4vcmVzZXJ2ZWQuaW50ZXJmYWNlcy5waHA+XG4gICAgJ0FycmF5QWNjZXNzIENsb3N1cmUgR2VuZXJhdG9yIEl0ZXJhdG9yIEl0ZXJhdG9yQWdncmVnYXRlIFNlcmlhbGl6YWJsZSBUaHJvd2FibGUgVHJhdmVyc2FibGUgV2Vha1JlZmVyZW5jZSAnICtcbiAgICAvLyBSZXNlcnZlZCBjbGFzc2VzOlxuICAgIC8vIDxodHRwczovL3d3dy5waHAubmV0L21hbnVhbC9lbi9yZXNlcnZlZC5jbGFzc2VzLnBocD5cbiAgICAnRGlyZWN0b3J5IF9fUEhQX0luY29tcGxldGVfQ2xhc3MgcGFyZW50IHBocF91c2VyX2ZpbHRlciBzZWxmIHN0YXRpYyBzdGRDbGFzcydcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ3BocCcsICdwaHAzJywgJ3BocDQnLCAncGhwNScsICdwaHA2JywgJ3BocDcnLCAncGhwOCddLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DT01NRU5UKCcvLycsICckJywge2NvbnRhaW5zOiBbUFJFUFJPQ0VTU09SXX0pLFxuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAnL1xcXFwqJyxcbiAgICAgICAgJ1xcXFwqLycsXG4gICAgICAgIHtcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICAgICAgICBiZWdpbjogJ0BbQS1aYS16XSsnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAnX19oYWx0X2NvbXBpbGVyLis/OycsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICB7XG4gICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgICAga2V5d29yZHM6ICdfX2hhbHRfY29tcGlsZXInXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBQUkVQUk9DRVNTT1IsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLCBiZWdpbjogL1xcJHRoaXNcXGIvXG4gICAgICB9LFxuICAgICAgVkFSSUFCTEUsXG4gICAgICB7XG4gICAgICAgIC8vIHN3YWxsb3cgY29tcG9zZWQgaWRlbnRpZmllcnMgdG8gYXZvaWQgcGFyc2luZyB0aGVtIGFzIGtleXdvcmRzXG4gICAgICAgIGJlZ2luOiAvKDo6fC0+KStbYS16QS1aX1xceDdmLVxceGZmXVthLXpBLVowLTlfXFx4N2YtXFx4ZmZdKi9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2ZuIGZ1bmN0aW9uJywgZW5kOiAvWzt7XS8sIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGlsbGVnYWw6ICdbJCVcXFxcW10nLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgICBiZWdpbjogJ1xcXFwoJywgZW5kOiAnXFxcXCknLFxuICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICdzZWxmJyxcbiAgICAgICAgICAgICAgVkFSSUFCTEUsXG4gICAgICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgIFNUUklORyxcbiAgICAgICAgICAgICAgTlVNQkVSXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UnLCBlbmQ6ICd7JywgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgaWxsZWdhbDogL1s6XFwoXFwkXCJdLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7YmVnaW5LZXl3b3JkczogJ2V4dGVuZHMgaW1wbGVtZW50cyd9LFxuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICduYW1lc3BhY2UnLCBlbmQ6ICc7JyxcbiAgICAgICAgaWxsZWdhbDogL1tcXC4nXS8sXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAndXNlJywgZW5kOiAnOycsXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJz0+JyAvLyBObyBtYXJrdXAsIGp1c3QgYSByZWxldmFuY2UgYm9vc3RlclxuICAgICAgfSxcbiAgICAgIFNUUklORyxcbiAgICAgIE5VTUJFUlxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwaHA7XG4iXSwic291cmNlUm9vdCI6IiJ9