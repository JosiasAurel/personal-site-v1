(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_roboconf"],{

/***/ "./node_modules/highlight.js/lib/languages/roboconf.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/roboconf.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Roboconf
Author: Vincent Zurczak <vzurczak@linagora.com>
Description: Syntax highlighting for Roboconf's DSL
Website: http://roboconf.net
Category: config
*/

function roboconf(hljs) {
  var IDENTIFIER = '[a-zA-Z-_][^\\n{]+\\{';

  var PROPERTY = {
    className: 'attribute',
    begin: /[a-zA-Z-_]+/, end: /\s*:/, excludeEnd: true,
    starts: {
      end: ';',
      relevance: 0,
      contains: [
        {
          className: 'variable',
          begin: /\.[a-zA-Z-_]+/
        },
        {
          className: 'keyword',
          begin: /\(optional\)/
        }
      ]
    }
  };

  return {
    name: 'Roboconf',
    aliases: ['graph', 'instances'],
    case_insensitive: true,
    keywords: 'import',
    contains: [
      // Facet sections
      {
        begin: '^facet ' + IDENTIFIER,
        end: '}',
        keywords: 'facet',
        contains: [
          PROPERTY,
          hljs.HASH_COMMENT_MODE
        ]
      },

      // Instance sections
      {
        begin: '^\\s*instance of ' + IDENTIFIER,
        end: '}',
        keywords: 'name count channels instance-data instance-state instance of',
        illegal: /\S/,
        contains: [
          'self',
          PROPERTY,
          hljs.HASH_COMMENT_MODE
        ]
      },

      // Component sections
      {
        begin: '^' + IDENTIFIER,
        end: '}',
        contains: [
          PROPERTY,
          hljs.HASH_COMMENT_MODE
        ]
      },

      // Comments
      hljs.HASH_COMMENT_MODE
    ]
  };
}

module.exports = roboconf;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3JvYm9jb25mLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLEtBQUs7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfcm9ib2NvbmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFJvYm9jb25mXG5BdXRob3I6IFZpbmNlbnQgWnVyY3phayA8dnp1cmN6YWtAbGluYWdvcmEuY29tPlxuRGVzY3JpcHRpb246IFN5bnRheCBoaWdobGlnaHRpbmcgZm9yIFJvYm9jb25mJ3MgRFNMXG5XZWJzaXRlOiBodHRwOi8vcm9ib2NvbmYubmV0XG5DYXRlZ29yeTogY29uZmlnXG4qL1xuXG5mdW5jdGlvbiByb2JvY29uZihobGpzKSB7XG4gIHZhciBJREVOVElGSUVSID0gJ1thLXpBLVotX11bXlxcXFxue10rXFxcXHsnO1xuXG4gIHZhciBQUk9QRVJUWSA9IHtcbiAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLFxuICAgIGJlZ2luOiAvW2EtekEtWi1fXSsvLCBlbmQ6IC9cXHMqOi8sIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgc3RhcnRzOiB7XG4gICAgICBlbmQ6ICc7JyxcbiAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgICAgYmVnaW46IC9cXC5bYS16QS1aLV9dKy9cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICAgIGJlZ2luOiAvXFwob3B0aW9uYWxcXCkvXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnUm9ib2NvbmYnLFxuICAgIGFsaWFzZXM6IFsnZ3JhcGgnLCAnaW5zdGFuY2VzJ10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3JkczogJ2ltcG9ydCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIC8vIEZhY2V0IHNlY3Rpb25zXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXmZhY2V0ICcgKyBJREVOVElGSUVSLFxuICAgICAgICBlbmQ6ICd9JyxcbiAgICAgICAga2V5d29yZHM6ICdmYWNldCcsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgUFJPUEVSVFksXG4gICAgICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuXG4gICAgICAvLyBJbnN0YW5jZSBzZWN0aW9uc1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ15cXFxccyppbnN0YW5jZSBvZiAnICsgSURFTlRJRklFUixcbiAgICAgICAgZW5kOiAnfScsXG4gICAgICAgIGtleXdvcmRzOiAnbmFtZSBjb3VudCBjaGFubmVscyBpbnN0YW5jZS1kYXRhIGluc3RhbmNlLXN0YXRlIGluc3RhbmNlIG9mJyxcbiAgICAgICAgaWxsZWdhbDogL1xcUy8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgJ3NlbGYnLFxuICAgICAgICAgIFBST1BFUlRZLFxuICAgICAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcblxuICAgICAgLy8gQ29tcG9uZW50IHNlY3Rpb25zXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXicgKyBJREVOVElGSUVSLFxuICAgICAgICBlbmQ6ICd9JyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBQUk9QRVJUWSxcbiAgICAgICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG5cbiAgICAgIC8vIENvbW1lbnRzXG4gICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvYm9jb25mO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==