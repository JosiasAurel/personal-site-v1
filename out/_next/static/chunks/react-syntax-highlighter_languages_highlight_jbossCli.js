(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_jbossCli"],{

/***/ "./node_modules/highlight.js/lib/languages/jboss-cli.js":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/jboss-cli.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Language: JBoss CLI
 Author: Raphaël Parrëe <rparree@edc4it.com>
 Description: language definition jboss cli
 Website: https://docs.jboss.org/author/display/WFLY/Command+Line+Interface
 Category: config
 */

function jbossCli (hljs) {
  var PARAM = {
    begin: /[\w-]+ *=/, returnBegin: true,
    relevance: 0,
    contains: [{className: 'attr', begin: /[\w-]+/}]
  };
  var PARAMSBLOCK = {
    className: 'params',
    begin: /\(/,
    end: /\)/,
    contains: [PARAM],
    relevance : 0
  };
  var OPERATION = {
    className: 'function',
    begin: /:[\w\-.]+/,
    relevance: 0
  };
  var PATH = {
    className: 'string',
    begin: /\B(([\/.])[\w\-.\/=]+)+/,
  };
  var COMMAND_PARAMS = {
    className: 'params',
    begin: /--[\w\-=\/]+/,
  };
  return {
    name: 'JBoss CLI',
    aliases: ['wildfly-cli'],
    keywords: {
      $pattern: '[a-z\-]+',
      keyword: 'alias batch cd clear command connect connection-factory connection-info data-source deploy ' +
      'deployment-info deployment-overlay echo echo-dmr help history if jdbc-driver-info jms-queue|20 jms-topic|20 ls ' +
      'patch pwd quit read-attribute read-operation reload rollout-plan run-batch set shutdown try unalias ' +
      'undeploy unset version xa-data-source', // module
      literal: 'true false'
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      COMMAND_PARAMS,
      OPERATION,
      PATH,
      PARAMSBLOCK
    ]
  }
}

module.exports = jbossCli;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2pib3NzLWNsaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQ0FBbUM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9qYm9zc0NsaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gTGFuZ3VhZ2U6IEpCb3NzIENMSVxuIEF1dGhvcjogUmFwaGHDq2wgUGFycsOrZSA8cnBhcnJlZUBlZGM0aXQuY29tPlxuIERlc2NyaXB0aW9uOiBsYW5ndWFnZSBkZWZpbml0aW9uIGpib3NzIGNsaVxuIFdlYnNpdGU6IGh0dHBzOi8vZG9jcy5qYm9zcy5vcmcvYXV0aG9yL2Rpc3BsYXkvV0ZMWS9Db21tYW5kK0xpbmUrSW50ZXJmYWNlXG4gQ2F0ZWdvcnk6IGNvbmZpZ1xuICovXG5cbmZ1bmN0aW9uIGpib3NzQ2xpIChobGpzKSB7XG4gIHZhciBQQVJBTSA9IHtcbiAgICBiZWdpbjogL1tcXHctXSsgKj0vLCByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFt7Y2xhc3NOYW1lOiAnYXR0cicsIGJlZ2luOiAvW1xcdy1dKy99XVxuICB9O1xuICB2YXIgUEFSQU1TQkxPQ0sgPSB7XG4gICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICBiZWdpbjogL1xcKC8sXG4gICAgZW5kOiAvXFwpLyxcbiAgICBjb250YWluczogW1BBUkFNXSxcbiAgICByZWxldmFuY2UgOiAwXG4gIH07XG4gIHZhciBPUEVSQVRJT04gPSB7XG4gICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgIGJlZ2luOiAvOltcXHdcXC0uXSsvLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICB2YXIgUEFUSCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvXFxCKChbXFwvLl0pW1xcd1xcLS5cXC89XSspKy8sXG4gIH07XG4gIHZhciBDT01NQU5EX1BBUkFNUyA9IHtcbiAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgIGJlZ2luOiAvLS1bXFx3XFwtPVxcL10rLyxcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnSkJvc3MgQ0xJJyxcbiAgICBhbGlhc2VzOiBbJ3dpbGRmbHktY2xpJ10sXG4gICAga2V5d29yZHM6IHtcbiAgICAgICRwYXR0ZXJuOiAnW2EtelxcLV0rJyxcbiAgICAgIGtleXdvcmQ6ICdhbGlhcyBiYXRjaCBjZCBjbGVhciBjb21tYW5kIGNvbm5lY3QgY29ubmVjdGlvbi1mYWN0b3J5IGNvbm5lY3Rpb24taW5mbyBkYXRhLXNvdXJjZSBkZXBsb3kgJyArXG4gICAgICAnZGVwbG95bWVudC1pbmZvIGRlcGxveW1lbnQtb3ZlcmxheSBlY2hvIGVjaG8tZG1yIGhlbHAgaGlzdG9yeSBpZiBqZGJjLWRyaXZlci1pbmZvIGptcy1xdWV1ZXwyMCBqbXMtdG9waWN8MjAgbHMgJyArXG4gICAgICAncGF0Y2ggcHdkIHF1aXQgcmVhZC1hdHRyaWJ1dGUgcmVhZC1vcGVyYXRpb24gcmVsb2FkIHJvbGxvdXQtcGxhbiBydW4tYmF0Y2ggc2V0IHNodXRkb3duIHRyeSB1bmFsaWFzICcgK1xuICAgICAgJ3VuZGVwbG95IHVuc2V0IHZlcnNpb24geGEtZGF0YS1zb3VyY2UnLCAvLyBtb2R1bGVcbiAgICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgQ09NTUFORF9QQVJBTVMsXG4gICAgICBPUEVSQVRJT04sXG4gICAgICBQQVRILFxuICAgICAgUEFSQU1TQkxPQ0tcbiAgICBdXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBqYm9zc0NsaTtcbiJdLCJzb3VyY2VSb290IjoiIn0=