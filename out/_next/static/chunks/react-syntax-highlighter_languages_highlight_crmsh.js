(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_crmsh"],{

/***/ "./node_modules/highlight.js/lib/languages/crmsh.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/crmsh.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: crmsh
Author: Kristoffer Gronlund <kgronlund@suse.com>
Website: http://crmsh.github.io
Description: Syntax Highlighting for the crmsh DSL
Category: config
*/

/** @type LanguageFn */
function crmsh(hljs) {
  var RESOURCES = 'primitive rsc_template';

  var COMMANDS = 'group clone ms master location colocation order fencing_topology ' +
      'rsc_ticket acl_target acl_group user role ' +
      'tag xml';

  var PROPERTY_SETS = 'property rsc_defaults op_defaults';

  var KEYWORDS = 'params meta operations op rule attributes utilization';

  var OPERATORS = 'read write deny defined not_defined in_range date spec in ' +
      'ref reference attribute type xpath version and or lt gt tag ' +
      'lte gte eq ne \\';

  var TYPES = 'number string';

  var LITERALS = 'Master Started Slave Stopped start promote demote stop monitor true false';

  return {
    name: 'crmsh',
    aliases: ['crm', 'pcmk'],
    case_insensitive: true,
    keywords: {
      keyword: KEYWORDS + ' ' + OPERATORS + ' ' + TYPES,
      literal: LITERALS
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      {
        beginKeywords: 'node',
        starts: {
          end: '\\s*([\\w_-]+:)?',
          starts: {
            className: 'title',
            end: '\\s*[\\$\\w_][\\w_-]*'
          }
        }
      },
      {
        beginKeywords: RESOURCES,
        starts: {
          className: 'title',
          end: '\\s*[\\$\\w_][\\w_-]*',
          starts: {
            end: '\\s*@?[\\w_][\\w_\\.:-]*'
          }
        }
      },
      {
        begin: '\\b(' + COMMANDS.split(' ').join('|') + ')\\s+',
        keywords: COMMANDS,
        starts: {
          className: 'title',
          end: '[\\$\\w_][\\w_-]*'
        }
      },
      {
        beginKeywords: PROPERTY_SETS,
        starts: {
          className: 'title',
          end: '\\s*([\\w_-]+:)?'
        }
      },
      hljs.QUOTE_STRING_MODE,
      {
        className: 'meta',
        begin: '(ocf|systemd|service|lsb):[\\w_:-]+',
        relevance: 0
      },
      {
        className: 'number',
        begin: '\\b\\d+(\\.\\d+)?(ms|s|h|m)?',
        relevance: 0
      },
      {
        className: 'literal',
        begin: '[-]?(infinity|inf)',
        relevance: 0
      },
      {
        className: 'attr',
        begin: /([A-Za-z\$_\#][\w_-]+)=/,
        relevance: 0
      },
      {
        className: 'tag',
        begin: '</?',
        end: '/?>',
        relevance: 0
      }
    ]
  };
}

module.exports = crmsh;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NybXNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2NybXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBjcm1zaFxuQXV0aG9yOiBLcmlzdG9mZmVyIEdyb25sdW5kIDxrZ3Jvbmx1bmRAc3VzZS5jb20+XG5XZWJzaXRlOiBodHRwOi8vY3Jtc2guZ2l0aHViLmlvXG5EZXNjcmlwdGlvbjogU3ludGF4IEhpZ2hsaWdodGluZyBmb3IgdGhlIGNybXNoIERTTFxuQ2F0ZWdvcnk6IGNvbmZpZ1xuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGNybXNoKGhsanMpIHtcbiAgdmFyIFJFU09VUkNFUyA9ICdwcmltaXRpdmUgcnNjX3RlbXBsYXRlJztcblxuICB2YXIgQ09NTUFORFMgPSAnZ3JvdXAgY2xvbmUgbXMgbWFzdGVyIGxvY2F0aW9uIGNvbG9jYXRpb24gb3JkZXIgZmVuY2luZ190b3BvbG9neSAnICtcbiAgICAgICdyc2NfdGlja2V0IGFjbF90YXJnZXQgYWNsX2dyb3VwIHVzZXIgcm9sZSAnICtcbiAgICAgICd0YWcgeG1sJztcblxuICB2YXIgUFJPUEVSVFlfU0VUUyA9ICdwcm9wZXJ0eSByc2NfZGVmYXVsdHMgb3BfZGVmYXVsdHMnO1xuXG4gIHZhciBLRVlXT1JEUyA9ICdwYXJhbXMgbWV0YSBvcGVyYXRpb25zIG9wIHJ1bGUgYXR0cmlidXRlcyB1dGlsaXphdGlvbic7XG5cbiAgdmFyIE9QRVJBVE9SUyA9ICdyZWFkIHdyaXRlIGRlbnkgZGVmaW5lZCBub3RfZGVmaW5lZCBpbl9yYW5nZSBkYXRlIHNwZWMgaW4gJyArXG4gICAgICAncmVmIHJlZmVyZW5jZSBhdHRyaWJ1dGUgdHlwZSB4cGF0aCB2ZXJzaW9uIGFuZCBvciBsdCBndCB0YWcgJyArXG4gICAgICAnbHRlIGd0ZSBlcSBuZSBcXFxcJztcblxuICB2YXIgVFlQRVMgPSAnbnVtYmVyIHN0cmluZyc7XG5cbiAgdmFyIExJVEVSQUxTID0gJ01hc3RlciBTdGFydGVkIFNsYXZlIFN0b3BwZWQgc3RhcnQgcHJvbW90ZSBkZW1vdGUgc3RvcCBtb25pdG9yIHRydWUgZmFsc2UnO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2NybXNoJyxcbiAgICBhbGlhc2VzOiBbJ2NybScsICdwY21rJ10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDogS0VZV09SRFMgKyAnICcgKyBPUEVSQVRPUlMgKyAnICcgKyBUWVBFUyxcbiAgICAgIGxpdGVyYWw6IExJVEVSQUxTXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ25vZGUnLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBlbmQ6ICdcXFxccyooW1xcXFx3Xy1dKzopPycsXG4gICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgICAgICBlbmQ6ICdcXFxccypbXFxcXCRcXFxcd19dW1xcXFx3Xy1dKidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6IFJFU09VUkNFUyxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICAgIGVuZDogJ1xcXFxzKltcXFxcJFxcXFx3X11bXFxcXHdfLV0qJyxcbiAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgIGVuZDogJ1xcXFxzKkA/W1xcXFx3X11bXFxcXHdfXFxcXC46LV0qJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcYignICsgQ09NTUFORFMuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKVxcXFxzKycsXG4gICAgICAgIGtleXdvcmRzOiBDT01NQU5EUyxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICAgIGVuZDogJ1tcXFxcJFxcXFx3X11bXFxcXHdfLV0qJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiBQUk9QRVJUWV9TRVRTLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgICAgZW5kOiAnXFxcXHMqKFtcXFxcd18tXSs6KT8nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICcob2NmfHN5c3RlbWR8c2VydmljZXxsc2IpOltcXFxcd186LV0rJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogJ1xcXFxiXFxcXGQrKFxcXFwuXFxcXGQrKT8obXN8c3xofG0pPycsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbGl0ZXJhbCcsXG4gICAgICAgIGJlZ2luOiAnWy1dPyhpbmZpbml0eXxpbmYpJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhdHRyJyxcbiAgICAgICAgYmVnaW46IC8oW0EtWmEtelxcJF9cXCNdW1xcd18tXSspPS8sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGFnJyxcbiAgICAgICAgYmVnaW46ICc8Lz8nLFxuICAgICAgICBlbmQ6ICcvPz4nLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3Jtc2g7XG4iXSwic291cmNlUm9vdCI6IiJ9