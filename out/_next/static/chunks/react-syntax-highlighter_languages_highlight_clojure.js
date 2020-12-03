(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_clojure"],{

/***/ "./node_modules/highlight.js/lib/languages/clojure.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/clojure.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Clojure
Description: Clojure syntax (based on lisp.js)
Author: mfornos
Website: https://clojure.org
Category: lisp
*/

/** @type LanguageFn */
function clojure(hljs) {
  var SYMBOLSTART = 'a-zA-Z_\\-!.?+*=<>&#\'';
  var SYMBOL_RE = '[' + SYMBOLSTART + '][' + SYMBOLSTART + '0-9/;:]*';
  var globals = 'def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord';
  var keywords = {
    $pattern: SYMBOL_RE,
    'builtin-name':
      // Clojure keywords
      globals + ' ' +
      'cond apply if-not if-let if not not= = < > <= >= == + / * - rem ' +
      'quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? ' +
      'set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? ' +
      'class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? ' +
      'string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . ' +
      'inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last ' +
      'drop-while while intern condp case reduced cycle split-at split-with repeat replicate ' +
      'iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext ' +
      'nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends ' +
      'add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler ' +
      'set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter ' +
      'monitor-exit macroexpand macroexpand-1 for dosync and or ' +
      'when when-not when-let comp juxt partial sequence memoize constantly complement identity assert ' +
      'peek pop doto proxy first rest cons cast coll last butlast ' +
      'sigs reify second ffirst fnext nfirst nnext meta with-meta ns in-ns create-ns import ' +
      'refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! ' +
      'assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger ' +
      'bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline ' +
      'flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking ' +
      'assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! ' +
      'reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! ' +
      'new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty ' +
      'hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list ' +
      'disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer ' +
      'chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate ' +
      'unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta ' +
      'lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize'
  };

  var SIMPLE_NUMBER_RE = '[-+]?\\d+(\\.\\d+)?';

  var SYMBOL = {
    begin: SYMBOL_RE,
    relevance: 0
  };
  var NUMBER = {
    className: 'number', begin: SIMPLE_NUMBER_RE,
    relevance: 0
  };
  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null});
  var COMMENT = hljs.COMMENT(
    ';',
    '$',
    {
      relevance: 0
    }
  );
  var LITERAL = {
    className: 'literal',
    begin: /\b(true|false|nil)\b/
  };
  var COLLECTION = {
    begin: '[\\[\\{]', end: '[\\]\\}]'
  };
  var HINT = {
    className: 'comment',
    begin: '\\^' + SYMBOL_RE
  };
  var HINT_COL = hljs.COMMENT('\\^\\{', '\\}');
  var KEY = {
    className: 'symbol',
    begin: '[:]{1,2}' + SYMBOL_RE
  };
  var LIST = {
    begin: '\\(', end: '\\)'
  };
  var BODY = {
    endsWithParent: true,
    relevance: 0
  };
  var NAME = {
    keywords: keywords,
    className: 'name', begin: SYMBOL_RE,
    starts: BODY
  };
  var DEFAULT_CONTAINS = [LIST, STRING, HINT, HINT_COL, COMMENT, KEY, COLLECTION, NUMBER, LITERAL, SYMBOL];

  var GLOBAL = {
    beginKeywords: globals,
    lexemes: SYMBOL_RE,
    end: '(\\[|\\#|\\d|"|:|\\{|\\)|\\(|$)',
    contains: [
      {
        className: 'title',
        begin: SYMBOL_RE,
        relevance: 0,
        excludeEnd: true,
        // we can only have a single title
        endsParent: true
      },
    ].concat(DEFAULT_CONTAINS)
  };

  LIST.contains = [hljs.COMMENT('comment', ''), GLOBAL, NAME, BODY];
  BODY.contains = DEFAULT_CONTAINS;
  COLLECTION.contains = DEFAULT_CONTAINS;
  HINT_COL.contains = [COLLECTION];

  return {
    name: 'Clojure',
    aliases: ['clj'],
    illegal: /\S/,
    contains: [LIST, STRING, HINT, HINT_COL, COMMENT, KEY, COLLECTION, NUMBER, LITERAL]
  };
}

module.exports = clojure;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Nsb2p1cmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9jbG9qdXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBDbG9qdXJlXG5EZXNjcmlwdGlvbjogQ2xvanVyZSBzeW50YXggKGJhc2VkIG9uIGxpc3AuanMpXG5BdXRob3I6IG1mb3Jub3NcbldlYnNpdGU6IGh0dHBzOi8vY2xvanVyZS5vcmdcbkNhdGVnb3J5OiBsaXNwXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gY2xvanVyZShobGpzKSB7XG4gIHZhciBTWU1CT0xTVEFSVCA9ICdhLXpBLVpfXFxcXC0hLj8rKj08PiYjXFwnJztcbiAgdmFyIFNZTUJPTF9SRSA9ICdbJyArIFNZTUJPTFNUQVJUICsgJ11bJyArIFNZTUJPTFNUQVJUICsgJzAtOS87Ol0qJztcbiAgdmFyIGdsb2JhbHMgPSAnZGVmIGRlZm9uY2UgZGVmcHJvdG9jb2wgZGVmc3RydWN0IGRlZm11bHRpIGRlZm1ldGhvZCBkZWZuLSBkZWZuIGRlZm1hY3JvIGRlZnR5cGUgZGVmcmVjb3JkJztcbiAgdmFyIGtleXdvcmRzID0ge1xuICAgICRwYXR0ZXJuOiBTWU1CT0xfUkUsXG4gICAgJ2J1aWx0aW4tbmFtZSc6XG4gICAgICAvLyBDbG9qdXJlIGtleXdvcmRzXG4gICAgICBnbG9iYWxzICsgJyAnICtcbiAgICAgICdjb25kIGFwcGx5IGlmLW5vdCBpZi1sZXQgaWYgbm90IG5vdD0gPSA8ID4gPD0gPj0gPT0gKyAvICogLSByZW0gJyArXG4gICAgICAncXVvdCBuZWc/IHBvcz8gZGVsYXk/IHN5bWJvbD8ga2V5d29yZD8gdHJ1ZT8gZmFsc2U/IGludGVnZXI/IGVtcHR5PyBjb2xsPyBsaXN0PyAnICtcbiAgICAgICdzZXQ/IGlmbj8gZm4/IGFzc29jaWF0aXZlPyBzZXF1ZW50aWFsPyBzb3J0ZWQ/IGNvdW50ZWQ/IHJldmVyc2libGU/IG51bWJlcj8gZGVjaW1hbD8gJyArXG4gICAgICAnY2xhc3M/IGRpc3RpbmN0PyBpc2E/IGZsb2F0PyByYXRpb25hbD8gcmVkdWNlZD8gcmF0aW8/IG9kZD8gZXZlbj8gY2hhcj8gc2VxPyB2ZWN0b3I/ICcgK1xuICAgICAgJ3N0cmluZz8gbWFwPyBuaWw/IGNvbnRhaW5zPyB6ZXJvPyBpbnN0YW5jZT8gbm90LWV2ZXJ5PyBub3QtYW55PyBsaWJzcGVjPyAtPiAtPj4gLi4gLiAnICtcbiAgICAgICdpbmMgY29tcGFyZSBkbyBkb3RpbWVzIG1hcGNhdCB0YWtlIHJlbW92ZSB0YWtlLXdoaWxlIGRyb3AgbGV0Zm4gZHJvcC1sYXN0IHRha2UtbGFzdCAnICtcbiAgICAgICdkcm9wLXdoaWxlIHdoaWxlIGludGVybiBjb25kcCBjYXNlIHJlZHVjZWQgY3ljbGUgc3BsaXQtYXQgc3BsaXQtd2l0aCByZXBlYXQgcmVwbGljYXRlICcgK1xuICAgICAgJ2l0ZXJhdGUgcmFuZ2UgbWVyZ2UgemlwbWFwIGRlY2xhcmUgbGluZS1zZXEgc29ydCBjb21wYXJhdG9yIHNvcnQtYnkgZG9ydW4gZG9hbGwgbnRobmV4dCAnICtcbiAgICAgICdudGhyZXN0IHBhcnRpdGlvbiBldmFsIGRvc2VxIGF3YWl0IGF3YWl0LWZvciBsZXQgYWdlbnQgYXRvbSBzZW5kIHNlbmQtb2ZmIHJlbGVhc2UtcGVuZGluZy1zZW5kcyAnICtcbiAgICAgICdhZGQtd2F0Y2ggbWFwdiBmaWx0ZXJ2IHJlbW92ZS13YXRjaCBhZ2VudC1lcnJvciByZXN0YXJ0LWFnZW50IHNldC1lcnJvci1oYW5kbGVyIGVycm9yLWhhbmRsZXIgJyArXG4gICAgICAnc2V0LWVycm9yLW1vZGUhIGVycm9yLW1vZGUgc2h1dGRvd24tYWdlbnRzIHF1b3RlIHZhciBmbiBsb29wIHJlY3VyIHRocm93IHRyeSBtb25pdG9yLWVudGVyICcgK1xuICAgICAgJ21vbml0b3ItZXhpdCBtYWNyb2V4cGFuZCBtYWNyb2V4cGFuZC0xIGZvciBkb3N5bmMgYW5kIG9yICcgK1xuICAgICAgJ3doZW4gd2hlbi1ub3Qgd2hlbi1sZXQgY29tcCBqdXh0IHBhcnRpYWwgc2VxdWVuY2UgbWVtb2l6ZSBjb25zdGFudGx5IGNvbXBsZW1lbnQgaWRlbnRpdHkgYXNzZXJ0ICcgK1xuICAgICAgJ3BlZWsgcG9wIGRvdG8gcHJveHkgZmlyc3QgcmVzdCBjb25zIGNhc3QgY29sbCBsYXN0IGJ1dGxhc3QgJyArXG4gICAgICAnc2lncyByZWlmeSBzZWNvbmQgZmZpcnN0IGZuZXh0IG5maXJzdCBubmV4dCBtZXRhIHdpdGgtbWV0YSBucyBpbi1ucyBjcmVhdGUtbnMgaW1wb3J0ICcgK1xuICAgICAgJ3JlZmVyIGtleXMgc2VsZWN0LWtleXMgdmFscyBrZXkgdmFsIHJzZXEgbmFtZSBuYW1lc3BhY2UgcHJvbWlzZSBpbnRvIHRyYW5zaWVudCBwZXJzaXN0ZW50ISBjb25qISAnICtcbiAgICAgICdhc3NvYyEgZGlzc29jISBwb3AhIGRpc2ohIHVzZSBjbGFzcyB0eXBlIG51bSBmbG9hdCBkb3VibGUgc2hvcnQgYnl0ZSBib29sZWFuIGJpZ2ludCBiaWdpbnRlZ2VyICcgK1xuICAgICAgJ2JpZ2RlYyBwcmludC1tZXRob2QgcHJpbnQtZHVwIHRocm93LWlmIHByaW50ZiBmb3JtYXQgbG9hZCBjb21waWxlIGdldC1pbiB1cGRhdGUtaW4gcHIgcHItb24gbmV3bGluZSAnICtcbiAgICAgICdmbHVzaCByZWFkIHNsdXJwIHJlYWQtbGluZSBzdWJ2ZWMgd2l0aC1vcGVuIG1lbWZuIHRpbWUgcmUtZmluZCByZS1ncm91cHMgcmFuZC1pbnQgcmFuZCBtb2QgbG9ja2luZyAnICtcbiAgICAgICdhc3NlcnQtdmFsaWQtZmRlY2wgYWxpYXMgcmVzb2x2ZSByZWYgZGVyZWYgcmVmc2V0IHN3YXAhIHJlc2V0ISBzZXQtdmFsaWRhdG9yISBjb21wYXJlLWFuZC1zZXQhIGFsdGVyLW1ldGEhICcgK1xuICAgICAgJ3Jlc2V0LW1ldGEhIGNvbW11dGUgZ2V0LXZhbGlkYXRvciBhbHRlciByZWYtc2V0IHJlZi1oaXN0b3J5LWNvdW50IHJlZi1taW4taGlzdG9yeSByZWYtbWF4LWhpc3RvcnkgZW5zdXJlIHN5bmMgaW8hICcgK1xuICAgICAgJ25ldyBuZXh0IGNvbmogc2V0ISB0by1hcnJheSBmdXR1cmUgZnV0dXJlLWNhbGwgaW50by1hcnJheSBhc2V0IGdlbi1jbGFzcyByZWR1Y2UgbWFwIGZpbHRlciBmaW5kIGVtcHR5ICcgK1xuICAgICAgJ2hhc2gtbWFwIGhhc2gtc2V0IHNvcnRlZC1tYXAgc29ydGVkLW1hcC1ieSBzb3J0ZWQtc2V0IHNvcnRlZC1zZXQtYnkgdmVjIHZlY3RvciBzZXEgZmxhdHRlbiByZXZlcnNlIGFzc29jIGRpc3NvYyBsaXN0ICcgK1xuICAgICAgJ2Rpc2ogZ2V0IHVuaW9uIGRpZmZlcmVuY2UgaW50ZXJzZWN0aW9uIGV4dGVuZCBleHRlbmQtdHlwZSBleHRlbmQtcHJvdG9jb2wgaW50IG50aCBkZWxheSBjb3VudCBjb25jYXQgY2h1bmsgY2h1bmstYnVmZmVyICcgK1xuICAgICAgJ2NodW5rLWFwcGVuZCBjaHVuay1maXJzdCBjaHVuay1yZXN0IG1heCBtaW4gZGVjIHVuY2hlY2tlZC1pbmMtaW50IHVuY2hlY2tlZC1pbmMgdW5jaGVja2VkLWRlYy1pbmMgdW5jaGVja2VkLWRlYyB1bmNoZWNrZWQtbmVnYXRlICcgK1xuICAgICAgJ3VuY2hlY2tlZC1hZGQtaW50IHVuY2hlY2tlZC1hZGQgdW5jaGVja2VkLXN1YnRyYWN0LWludCB1bmNoZWNrZWQtc3VidHJhY3QgY2h1bmstbmV4dCBjaHVuay1jb25zIGNodW5rZWQtc2VxPyBwcm4gdmFyeS1tZXRhICcgK1xuICAgICAgJ2xhenktc2VxIHNwcmVhZCBsaXN0KiBzdHIgZmluZC1rZXl3b3JkIGtleXdvcmQgc3ltYm9sIGdlbnN5bSBmb3JjZSByYXRpb25hbGl6ZSdcbiAgfTtcblxuICB2YXIgU0lNUExFX05VTUJFUl9SRSA9ICdbLStdP1xcXFxkKyhcXFxcLlxcXFxkKyk/JztcblxuICB2YXIgU1lNQk9MID0ge1xuICAgIGJlZ2luOiBTWU1CT0xfUkUsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIHZhciBOVU1CRVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJywgYmVnaW46IFNJTVBMRV9OVU1CRVJfUkUsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIHZhciBTVFJJTkcgPSBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge2lsbGVnYWw6IG51bGx9KTtcbiAgdmFyIENPTU1FTlQgPSBobGpzLkNPTU1FTlQoXG4gICAgJzsnLFxuICAgICckJyxcbiAgICB7XG4gICAgICByZWxldmFuY2U6IDBcbiAgICB9XG4gICk7XG4gIHZhciBMSVRFUkFMID0ge1xuICAgIGNsYXNzTmFtZTogJ2xpdGVyYWwnLFxuICAgIGJlZ2luOiAvXFxiKHRydWV8ZmFsc2V8bmlsKVxcYi9cbiAgfTtcbiAgdmFyIENPTExFQ1RJT04gPSB7XG4gICAgYmVnaW46ICdbXFxcXFtcXFxce10nLCBlbmQ6ICdbXFxcXF1cXFxcfV0nXG4gIH07XG4gIHZhciBISU5UID0ge1xuICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgIGJlZ2luOiAnXFxcXF4nICsgU1lNQk9MX1JFXG4gIH07XG4gIHZhciBISU5UX0NPTCA9IGhsanMuQ09NTUVOVCgnXFxcXF5cXFxceycsICdcXFxcfScpO1xuICB2YXIgS0VZID0ge1xuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgYmVnaW46ICdbOl17MSwyfScgKyBTWU1CT0xfUkVcbiAgfTtcbiAgdmFyIExJU1QgPSB7XG4gICAgYmVnaW46ICdcXFxcKCcsIGVuZDogJ1xcXFwpJ1xuICB9O1xuICB2YXIgQk9EWSA9IHtcbiAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgdmFyIE5BTUUgPSB7XG4gICAga2V5d29yZHM6IGtleXdvcmRzLFxuICAgIGNsYXNzTmFtZTogJ25hbWUnLCBiZWdpbjogU1lNQk9MX1JFLFxuICAgIHN0YXJ0czogQk9EWVxuICB9O1xuICB2YXIgREVGQVVMVF9DT05UQUlOUyA9IFtMSVNULCBTVFJJTkcsIEhJTlQsIEhJTlRfQ09MLCBDT01NRU5ULCBLRVksIENPTExFQ1RJT04sIE5VTUJFUiwgTElURVJBTCwgU1lNQk9MXTtcblxuICB2YXIgR0xPQkFMID0ge1xuICAgIGJlZ2luS2V5d29yZHM6IGdsb2JhbHMsXG4gICAgbGV4ZW1lczogU1lNQk9MX1JFLFxuICAgIGVuZDogJyhcXFxcW3xcXFxcI3xcXFxcZHxcInw6fFxcXFx7fFxcXFwpfFxcXFwofCQpJyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgIGJlZ2luOiBTWU1CT0xfUkUsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgLy8gd2UgY2FuIG9ubHkgaGF2ZSBhIHNpbmdsZSB0aXRsZVxuICAgICAgICBlbmRzUGFyZW50OiB0cnVlXG4gICAgICB9LFxuICAgIF0uY29uY2F0KERFRkFVTFRfQ09OVEFJTlMpXG4gIH07XG5cbiAgTElTVC5jb250YWlucyA9IFtobGpzLkNPTU1FTlQoJ2NvbW1lbnQnLCAnJyksIEdMT0JBTCwgTkFNRSwgQk9EWV07XG4gIEJPRFkuY29udGFpbnMgPSBERUZBVUxUX0NPTlRBSU5TO1xuICBDT0xMRUNUSU9OLmNvbnRhaW5zID0gREVGQVVMVF9DT05UQUlOUztcbiAgSElOVF9DT0wuY29udGFpbnMgPSBbQ09MTEVDVElPTl07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQ2xvanVyZScsXG4gICAgYWxpYXNlczogWydjbGonXSxcbiAgICBpbGxlZ2FsOiAvXFxTLyxcbiAgICBjb250YWluczogW0xJU1QsIFNUUklORywgSElOVCwgSElOVF9DT0wsIENPTU1FTlQsIEtFWSwgQ09MTEVDVElPTiwgTlVNQkVSLCBMSVRFUkFMXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb2p1cmU7XG4iXSwic291cmNlUm9vdCI6IiJ9