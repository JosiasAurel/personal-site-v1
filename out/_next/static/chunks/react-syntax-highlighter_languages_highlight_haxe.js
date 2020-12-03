(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_haxe"],{

/***/ "./node_modules/highlight.js/lib/languages/haxe.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/haxe.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Haxe
Description: Haxe is an open source toolkit based on a modern, high level, strictly typed programming language.
Author: Christopher Kaster <ikasoki@gmail.com> (Based on the actionscript.js language file by Alexander Myadzel)
Contributors: Kenton Hamaluik <kentonh@gmail.com>
Website: https://haxe.org
*/

function haxe(hljs) {

  var HAXE_BASIC_TYPES = 'Int Float String Bool Dynamic Void Array ';

  return {
    name: 'Haxe',
    aliases: ['hx'],
    keywords: {
      keyword: 'break case cast catch continue default do dynamic else enum extern ' +
               'for function here if import in inline never new override package private get set ' +
               'public return static super switch this throw trace try typedef untyped using var while ' +
               HAXE_BASIC_TYPES,
      built_in:
        'trace this',
      literal:
        'true false null _'
    },
    contains: [
      { className: 'string', // interpolate-able strings
        begin: '\'', end: '\'',
        contains: [
          hljs.BACKSLASH_ESCAPE,
          { className: 'subst', // interpolation
            begin: '\\$\\{', end: '\\}'
          },
          { className: 'subst', // interpolation
            begin: '\\$', end: '\\W}'
          }
        ]
      },
      hljs.QUOTE_STRING_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_NUMBER_MODE,
      { className: 'meta', // compiler meta
        begin: '@:', end: '$'
      },
      { className: 'meta', // compiler conditionals
        begin: '#', end: '$',
        keywords: {'meta-keyword': 'if else elseif end error'}
      },
      { className: 'type', // function types
        begin: ':[ \t]*', end: '[^A-Za-z0-9_ \t\\->]',
        excludeBegin: true, excludeEnd: true,
        relevance: 0
      },
      { className: 'type', // types
        begin: ':[ \t]*', end: '\\W',
        excludeBegin: true, excludeEnd: true
      },
      { className: 'type', // instantiation
        begin: 'new *', end: '\\W',
        excludeBegin: true, excludeEnd: true
      },
      { className: 'class', // enums
        beginKeywords: 'enum', end: '\\{',
        contains: [
          hljs.TITLE_MODE
        ]
      },
      { className: 'class', // abstracts
        beginKeywords: 'abstract', end: '[\\{$]',
        contains: [
          { className: 'type',
            begin: '\\(', end: '\\)',
            excludeBegin: true, excludeEnd: true
          },
          { className: 'type',
            begin: 'from +', end: '\\W',
            excludeBegin: true, excludeEnd: true
          },
          { className: 'type',
            begin: 'to +', end: '\\W',
            excludeBegin: true, excludeEnd: true
          },
          hljs.TITLE_MODE
        ],
        keywords: {
          keyword: 'abstract from to'
        }
      },
      { className: 'class', // classes
        begin: '\\b(class|interface) +', end: '[\\{$]',  excludeEnd: true,
        keywords: 'class interface',
        contains: [
          { className: 'keyword',
            begin: '\\b(extends|implements) +',
            keywords: 'extends implements',
            contains: [
              {
                className: 'type',
                begin: hljs.IDENT_RE,
                relevance: 0
              }
            ]
          },
          hljs.TITLE_MODE
        ]
      },
      { className: 'function',
        beginKeywords: 'function', end: '\\(', excludeEnd: true,
        illegal: '\\S',
        contains: [
          hljs.TITLE_MODE
        ]
      }
    ],
    illegal: /<\//
  };
}

module.exports = haxe;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2hheGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCwwQkFBMEIsWUFBWTtBQUN0QyxXQUFXO0FBQ1gsV0FBVztBQUNYLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBLG1CQUFtQjtBQUNuQixPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxPQUFPO0FBQ1Asd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxPQUFPO0FBQ1AsNkNBQTZDO0FBQzdDO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxPQUFPO0FBQ1AsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfaGF4ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogSGF4ZVxuRGVzY3JpcHRpb246IEhheGUgaXMgYW4gb3BlbiBzb3VyY2UgdG9vbGtpdCBiYXNlZCBvbiBhIG1vZGVybiwgaGlnaCBsZXZlbCwgc3RyaWN0bHkgdHlwZWQgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UuXG5BdXRob3I6IENocmlzdG9waGVyIEthc3RlciA8aWthc29raUBnbWFpbC5jb20+IChCYXNlZCBvbiB0aGUgYWN0aW9uc2NyaXB0LmpzIGxhbmd1YWdlIGZpbGUgYnkgQWxleGFuZGVyIE15YWR6ZWwpXG5Db250cmlidXRvcnM6IEtlbnRvbiBIYW1hbHVpayA8a2VudG9uaEBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwczovL2hheGUub3JnXG4qL1xuXG5mdW5jdGlvbiBoYXhlKGhsanMpIHtcblxuICB2YXIgSEFYRV9CQVNJQ19UWVBFUyA9ICdJbnQgRmxvYXQgU3RyaW5nIEJvb2wgRHluYW1pYyBWb2lkIEFycmF5ICc7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnSGF4ZScsXG4gICAgYWxpYXNlczogWydoeCddLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOiAnYnJlYWsgY2FzZSBjYXN0IGNhdGNoIGNvbnRpbnVlIGRlZmF1bHQgZG8gZHluYW1pYyBlbHNlIGVudW0gZXh0ZXJuICcgK1xuICAgICAgICAgICAgICAgJ2ZvciBmdW5jdGlvbiBoZXJlIGlmIGltcG9ydCBpbiBpbmxpbmUgbmV2ZXIgbmV3IG92ZXJyaWRlIHBhY2thZ2UgcHJpdmF0ZSBnZXQgc2V0ICcgK1xuICAgICAgICAgICAgICAgJ3B1YmxpYyByZXR1cm4gc3RhdGljIHN1cGVyIHN3aXRjaCB0aGlzIHRocm93IHRyYWNlIHRyeSB0eXBlZGVmIHVudHlwZWQgdXNpbmcgdmFyIHdoaWxlICcgK1xuICAgICAgICAgICAgICAgSEFYRV9CQVNJQ19UWVBFUyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAndHJhY2UgdGhpcycsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAndHJ1ZSBmYWxzZSBudWxsIF8nXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgeyBjbGFzc05hbWU6ICdzdHJpbmcnLCAvLyBpbnRlcnBvbGF0ZS1hYmxlIHN0cmluZ3NcbiAgICAgICAgYmVnaW46ICdcXCcnLCBlbmQ6ICdcXCcnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3N1YnN0JywgLy8gaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgYmVnaW46ICdcXFxcJFxcXFx7JywgZW5kOiAnXFxcXH0nXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3N1YnN0JywgLy8gaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgYmVnaW46ICdcXFxcJCcsIGVuZDogJ1xcXFxXfSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIHsgY2xhc3NOYW1lOiAnbWV0YScsIC8vIGNvbXBpbGVyIG1ldGFcbiAgICAgICAgYmVnaW46ICdAOicsIGVuZDogJyQnXG4gICAgICB9LFxuICAgICAgeyBjbGFzc05hbWU6ICdtZXRhJywgLy8gY29tcGlsZXIgY29uZGl0aW9uYWxzXG4gICAgICAgIGJlZ2luOiAnIycsIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3JkczogeydtZXRhLWtleXdvcmQnOiAnaWYgZWxzZSBlbHNlaWYgZW5kIGVycm9yJ31cbiAgICAgIH0sXG4gICAgICB7IGNsYXNzTmFtZTogJ3R5cGUnLCAvLyBmdW5jdGlvbiB0eXBlc1xuICAgICAgICBiZWdpbjogJzpbIFxcdF0qJywgZW5kOiAnW15BLVphLXowLTlfIFxcdFxcXFwtPl0nLFxuICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHsgY2xhc3NOYW1lOiAndHlwZScsIC8vIHR5cGVzXG4gICAgICAgIGJlZ2luOiAnOlsgXFx0XSonLCBlbmQ6ICdcXFxcVycsXG4gICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSwgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHsgY2xhc3NOYW1lOiAndHlwZScsIC8vIGluc3RhbnRpYXRpb25cbiAgICAgICAgYmVnaW46ICduZXcgKicsIGVuZDogJ1xcXFxXJyxcbiAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLCBleGNsdWRlRW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgeyBjbGFzc05hbWU6ICdjbGFzcycsIC8vIGVudW1zXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdlbnVtJywgZW5kOiAnXFxcXHsnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuVElUTEVfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgeyBjbGFzc05hbWU6ICdjbGFzcycsIC8vIGFic3RyYWN0c1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnYWJzdHJhY3QnLCBlbmQ6ICdbXFxcXHskXScsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKScsXG4gICAgICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgICAgICBiZWdpbjogJ2Zyb20gKycsIGVuZDogJ1xcXFxXJyxcbiAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSwgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgIGJlZ2luOiAndG8gKycsIGVuZDogJ1xcXFxXJyxcbiAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSwgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5USVRMRV9NT0RFXG4gICAgICAgIF0sXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAga2V5d29yZDogJ2Fic3RyYWN0IGZyb20gdG8nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IGNsYXNzTmFtZTogJ2NsYXNzJywgLy8gY2xhc3Nlc1xuICAgICAgICBiZWdpbjogJ1xcXFxiKGNsYXNzfGludGVyZmFjZSkgKycsIGVuZDogJ1tcXFxceyRdJywgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGtleXdvcmRzOiAnY2xhc3MgaW50ZXJmYWNlJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICAgICAgYmVnaW46ICdcXFxcYihleHRlbmRzfGltcGxlbWVudHMpICsnLFxuICAgICAgICAgICAga2V5d29yZHM6ICdleHRlbmRzIGltcGxlbWVudHMnLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiBobGpzLklERU5UX1JFLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLlRJVExFX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHsgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24nLCBlbmQ6ICdcXFxcKCcsIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcUycsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5USVRMRV9NT0RFXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuICAgIGlsbGVnYWw6IC88XFwvL1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhheGU7XG4iXSwic291cmNlUm9vdCI6IiJ9