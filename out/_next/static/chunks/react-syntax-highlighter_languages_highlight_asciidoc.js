(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_asciidoc"],{

/***/ "./node_modules/highlight.js/lib/languages/asciidoc.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/asciidoc.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: AsciiDoc
Requires: xml.js
Author: Dan Allen <dan.j.allen@gmail.com>
Website: http://asciidoc.org
Description: A semantic, text-based document format that can be exported to HTML, DocBook and other backends.
Category: markup
*/

/** @type LanguageFn */
function asciidoc(hljs) {
  return {
    name: 'AsciiDoc',
    aliases: ['adoc'],
    contains: [
      // block comment
      hljs.COMMENT(
        '^/{4,}\\n',
        '\\n/{4,}$',
        // can also be done as...
        //'^/{4,}$',
        //'^/{4,}$',
        {
          relevance: 10
        }
      ),
      // line comment
      hljs.COMMENT(
        '^//',
        '$',
        {
          relevance: 0
        }
      ),
      // title
      {
        className: 'title',
        begin: '^\\.\\w.*$'
      },
      // example, admonition & sidebar blocks
      {
        begin: '^[=\\*]{4,}\\n',
        end: '\\n^[=\\*]{4,}$',
        relevance: 10
      },
      // headings
      {
        className: 'section',
        relevance: 10,
        variants: [
          {begin: '^(={1,5}) .+?( \\1)?$'},
          {begin: '^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$'},
        ]
      },
      // document attributes
      {
        className: 'meta',
        begin: '^:.+?:',
        end: '\\s',
        excludeEnd: true,
        relevance: 10
      },
      // block attributes
      {
        className: 'meta',
        begin: '^\\[.+?\\]$',
        relevance: 0
      },
      // quoteblocks
      {
        className: 'quote',
        begin: '^_{4,}\\n',
        end: '\\n_{4,}$',
        relevance: 10
      },
      // listing and literal blocks
      {
        className: 'code',
        begin: '^[\\-\\.]{4,}\\n',
        end: '\\n[\\-\\.]{4,}$',
        relevance: 10
      },
      // passthrough blocks
      {
        begin: '^\\+{4,}\\n',
        end: '\\n\\+{4,}$',
        contains: [
          {
            begin: '<', end: '>',
            subLanguage: 'xml',
            relevance: 0
          }
        ],
        relevance: 10
      },
      // lists (can only capture indicators)
      {
        className: 'bullet',
        begin: '^(\\*+|\\-+|\\.+|[^\\n]+?::)\\s+'
      },
      // admonition
      {
        className: 'symbol',
        begin: '^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+',
        relevance: 10
      },
      // inline strong
      {
        className: 'strong',
        // must not follow a word character or be followed by an asterisk or space
        begin: '\\B\\*(?![\\*\\s])',
        end: '(\\n{2}|\\*)',
        // allow escaped asterisk followed by word char
        contains: [
          {
            begin: '\\\\*\\w',
            relevance: 0
          }
        ]
      },
      // inline emphasis
      {
        className: 'emphasis',
        // must not follow a word character or be followed by a single quote or space
        begin: '\\B\'(?![\'\\s])',
        end: '(\\n{2}|\')',
        // allow escaped single quote followed by word char
        contains: [
          {
            begin: '\\\\\'\\w',
            relevance: 0
          }
        ],
        relevance: 0
      },
      // inline emphasis (alt)
      {
        className: 'emphasis',
        // must not follow a word character or be followed by an underline or space
        begin: '_(?![_\\s])',
        end: '(\\n{2}|_)',
        relevance: 0
      },
      // inline smart quotes
      {
        className: 'string',
        variants: [
          {begin: "``.+?''"},
          {begin: "`.+?'"}
        ]
      },
      // inline code snippets (TODO should get same treatment as strong and emphasis)
      {
        className: 'code',
        begin: '(`.+?`|\\+.+?\\+)',
        relevance: 0
      },
      // indented literal block
      {
        className: 'code',
        begin: '^[ \\t]',
        end: '$',
        relevance: 0
      },
      // horizontal rules
      {
        begin: '^\'{3,}[ \\t]*$',
        relevance: 10
      },
      // images and links
      {
        begin: '(link:)?(http|https|ftp|file|irc|image:?):\\S+\\[.*?\\]',
        returnBegin: true,
        contains: [
          {
            begin: '(link|image:?):',
            relevance: 0
          },
          {
            className: 'link',
            begin: '\\w',
            end: '[^\\[]+',
            relevance: 0
          },
          {
            className: 'string',
            begin: '\\[',
            end: '\\]',
            excludeBegin: true,
            excludeEnd: true,
            relevance: 0
          }
        ],
        relevance: 10
      }
    ]
  };
}

module.exports = asciidoc;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FzY2lpZG9jLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksR0FBRztBQUNmLGNBQWMsR0FBRztBQUNqQjtBQUNBLGNBQWMsR0FBRztBQUNqQixjQUFjLEdBQUc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHdCQUF3QixHQUFHO0FBQzNCLHlCQUF5QixHQUFHO0FBQzVCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVksSUFBSSxlQUFlO0FBQzFDLFdBQVcsd0NBQXdDLEdBQUcsR0FBRztBQUN6RDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixHQUFHO0FBQ3RCLG1CQUFtQixHQUFHO0FBQ3RCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixHQUFHO0FBQzdCLDBCQUEwQixHQUFHO0FBQzdCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxxQkFBcUIsR0FBRztBQUN4QixxQkFBcUIsR0FBRztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixFQUFFO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsRUFBRTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsRUFBRTtBQUNyQjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esb0JBQW9CLEdBQUc7QUFDdkI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9hc2NpaWRvYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQXNjaWlEb2NcblJlcXVpcmVzOiB4bWwuanNcbkF1dGhvcjogRGFuIEFsbGVuIDxkYW4uai5hbGxlbkBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwOi8vYXNjaWlkb2Mub3JnXG5EZXNjcmlwdGlvbjogQSBzZW1hbnRpYywgdGV4dC1iYXNlZCBkb2N1bWVudCBmb3JtYXQgdGhhdCBjYW4gYmUgZXhwb3J0ZWQgdG8gSFRNTCwgRG9jQm9vayBhbmQgb3RoZXIgYmFja2VuZHMuXG5DYXRlZ29yeTogbWFya3VwXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gYXNjaWlkb2MoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdBc2NpaURvYycsXG4gICAgYWxpYXNlczogWydhZG9jJ10sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIC8vIGJsb2NrIGNvbW1lbnRcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJ14vezQsfVxcXFxuJyxcbiAgICAgICAgJ1xcXFxuL3s0LH0kJyxcbiAgICAgICAgLy8gY2FuIGFsc28gYmUgZG9uZSBhcy4uLlxuICAgICAgICAvLydeL3s0LH0kJyxcbiAgICAgICAgLy8nXi97NCx9JCcsXG4gICAgICAgIHtcbiAgICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICAvLyBsaW5lIGNvbW1lbnRcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJ14vLycsXG4gICAgICAgICckJyxcbiAgICAgICAge1xuICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgLy8gdGl0bGVcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICBiZWdpbjogJ15cXFxcLlxcXFx3LiokJ1xuICAgICAgfSxcbiAgICAgIC8vIGV4YW1wbGUsIGFkbW9uaXRpb24gJiBzaWRlYmFyIGJsb2Nrc1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ15bPVxcXFwqXXs0LH1cXFxcbicsXG4gICAgICAgIGVuZDogJ1xcXFxuXls9XFxcXCpdezQsfSQnLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAgLy8gaGVhZGluZ3NcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VjdGlvbicsXG4gICAgICAgIHJlbGV2YW5jZTogMTAsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge2JlZ2luOiAnXig9ezEsNX0pIC4rPyggXFxcXDEpPyQnfSxcbiAgICAgICAgICB7YmVnaW46ICdeW15cXFxcW1xcXFxdXFxcXG5dKz9cXFxcbls9XFxcXC1+XFxcXF5cXFxcK117Mix9JCd9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgLy8gZG9jdW1lbnQgYXR0cmlidXRlc1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdeOi4rPzonLFxuICAgICAgICBlbmQ6ICdcXFxccycsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICAvLyBibG9jayBhdHRyaWJ1dGVzXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ15cXFxcWy4rP1xcXFxdJCcsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIC8vIHF1b3RlYmxvY2tzXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3F1b3RlJyxcbiAgICAgICAgYmVnaW46ICdeX3s0LH1cXFxcbicsXG4gICAgICAgIGVuZDogJ1xcXFxuX3s0LH0kJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIC8vIGxpc3RpbmcgYW5kIGxpdGVyYWwgYmxvY2tzXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NvZGUnLFxuICAgICAgICBiZWdpbjogJ15bXFxcXC1cXFxcLl17NCx9XFxcXG4nLFxuICAgICAgICBlbmQ6ICdcXFxcbltcXFxcLVxcXFwuXXs0LH0kJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIC8vIHBhc3N0aHJvdWdoIGJsb2Nrc1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ15cXFxcK3s0LH1cXFxcbicsXG4gICAgICAgIGVuZDogJ1xcXFxuXFxcXCt7NCx9JCcsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICc8JywgZW5kOiAnPicsXG4gICAgICAgICAgICBzdWJMYW5ndWFnZTogJ3htbCcsXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICAvLyBsaXN0cyAoY2FuIG9ubHkgY2FwdHVyZSBpbmRpY2F0b3JzKVxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWxsZXQnLFxuICAgICAgICBiZWdpbjogJ14oXFxcXCorfFxcXFwtK3xcXFxcLit8W15cXFxcbl0rPzo6KVxcXFxzKydcbiAgICAgIH0sXG4gICAgICAvLyBhZG1vbml0aW9uXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIGJlZ2luOiAnXihOT1RFfFRJUHxJTVBPUlRBTlR8V0FSTklOR3xDQVVUSU9OKTpcXFxccysnLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAgLy8gaW5saW5lIHN0cm9uZ1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJvbmcnLFxuICAgICAgICAvLyBtdXN0IG5vdCBmb2xsb3cgYSB3b3JkIGNoYXJhY3RlciBvciBiZSBmb2xsb3dlZCBieSBhbiBhc3RlcmlzayBvciBzcGFjZVxuICAgICAgICBiZWdpbjogJ1xcXFxCXFxcXCooPyFbXFxcXCpcXFxcc10pJyxcbiAgICAgICAgZW5kOiAnKFxcXFxuezJ9fFxcXFwqKScsXG4gICAgICAgIC8vIGFsbG93IGVzY2FwZWQgYXN0ZXJpc2sgZm9sbG93ZWQgYnkgd29yZCBjaGFyXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdcXFxcXFxcXCpcXFxcdycsXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICAvLyBpbmxpbmUgZW1waGFzaXNcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZW1waGFzaXMnLFxuICAgICAgICAvLyBtdXN0IG5vdCBmb2xsb3cgYSB3b3JkIGNoYXJhY3RlciBvciBiZSBmb2xsb3dlZCBieSBhIHNpbmdsZSBxdW90ZSBvciBzcGFjZVxuICAgICAgICBiZWdpbjogJ1xcXFxCXFwnKD8hW1xcJ1xcXFxzXSknLFxuICAgICAgICBlbmQ6ICcoXFxcXG57Mn18XFwnKScsXG4gICAgICAgIC8vIGFsbG93IGVzY2FwZWQgc2luZ2xlIHF1b3RlIGZvbGxvd2VkIGJ5IHdvcmQgY2hhclxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXFxcXFxcXCdcXFxcdycsXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIC8vIGlubGluZSBlbXBoYXNpcyAoYWx0KVxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdlbXBoYXNpcycsXG4gICAgICAgIC8vIG11c3Qgbm90IGZvbGxvdyBhIHdvcmQgY2hhcmFjdGVyIG9yIGJlIGZvbGxvd2VkIGJ5IGFuIHVuZGVybGluZSBvciBzcGFjZVxuICAgICAgICBiZWdpbjogJ18oPyFbX1xcXFxzXSknLFxuICAgICAgICBlbmQ6ICcoXFxcXG57Mn18XyknLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICAvLyBpbmxpbmUgc21hcnQgcXVvdGVzXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge2JlZ2luOiBcImBgLis/JydcIn0sXG4gICAgICAgICAge2JlZ2luOiBcImAuKz8nXCJ9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICAvLyBpbmxpbmUgY29kZSBzbmlwcGV0cyAoVE9ETyBzaG91bGQgZ2V0IHNhbWUgdHJlYXRtZW50IGFzIHN0cm9uZyBhbmQgZW1waGFzaXMpXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NvZGUnLFxuICAgICAgICBiZWdpbjogJyhgLis/YHxcXFxcKy4rP1xcXFwrKScsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIC8vIGluZGVudGVkIGxpdGVyYWwgYmxvY2tcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY29kZScsXG4gICAgICAgIGJlZ2luOiAnXlsgXFxcXHRdJyxcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIC8vIGhvcml6b250YWwgcnVsZXNcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdeXFwnezMsfVsgXFxcXHRdKiQnLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAgLy8gaW1hZ2VzIGFuZCBsaW5rc1xuICAgICAge1xuICAgICAgICBiZWdpbjogJyhsaW5rOik/KGh0dHB8aHR0cHN8ZnRwfGZpbGV8aXJjfGltYWdlOj8pOlxcXFxTK1xcXFxbLio/XFxcXF0nLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJyhsaW5rfGltYWdlOj8pOicsXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2xpbmsnLFxuICAgICAgICAgICAgYmVnaW46ICdcXFxcdycsXG4gICAgICAgICAgICBlbmQ6ICdbXlxcXFxbXSsnLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYmVnaW46ICdcXFxcWycsXG4gICAgICAgICAgICBlbmQ6ICdcXFxcXScsXG4gICAgICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpZG9jO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==