(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_xml"],{

/***/ "./node_modules/highlight.js/lib/languages/xml.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/xml.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: HTML, XML
Website: https://www.w3.org/XML/
Category: common
*/

function xml(hljs) {
  var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
  var XML_ENTITIES = {
    className: 'symbol',
    begin: '&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;'
  };
  var XML_META_KEYWORDS = {
	  begin: '\\s',
	  contains:[
	    {
	      className: 'meta-keyword',
	      begin: '#?[a-z_][a-z1-9_-]+',
	      illegal: '\\n',
      }
	  ]
  };
  var XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {begin: '\\(', end: '\\)'});
  var APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, {className: 'meta-string'});
  var QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {className: 'meta-string'});
  var TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: 'attr',
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: 'string',
            endsParent: true,
            variants: [
              {begin: /"/, end: /"/, contains: [XML_ENTITIES]},
              {begin: /'/, end: /'/, contains: [XML_ENTITIES]},
              {begin: /[^\s"'=<>`]+/}
            ]
          }
        ]
      }
    ]
  };
  return {
    name: 'HTML, XML',
    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf', 'svg'],
    case_insensitive: true,
    contains: [
      {
        className: 'meta',
        begin: '<![a-z]', end: '>',
        relevance: 10,
        contains: [
				  XML_META_KEYWORDS,
				  QUOTE_META_STRING_MODE,
				  APOS_META_STRING_MODE,
					XML_META_PAR_KEYWORDS,
					{
					  begin: '\\[', end: '\\]',
					  contains:[
						  {
					      className: 'meta',
					      begin: '<![a-z]', end: '>',
					      contains: [
					        XML_META_KEYWORDS,
					        XML_META_PAR_KEYWORDS,
					        QUOTE_META_STRING_MODE,
					        APOS_META_STRING_MODE
						    ]
			        }
					  ]
				  }
				]
      },
      hljs.COMMENT(
        '<!--',
        '-->',
        {
          relevance: 10
        }
      ),
      {
        begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
        relevance: 10
      },
      XML_ENTITIES,
      {
        className: 'meta',
        begin: /<\?xml/, end: /\?>/, relevance: 10
      },
      {
        className: 'tag',
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending braket. The '$' is needed for the lexeme to be recognized
        by hljs.subMode() that tests lexemes outside the stream.
        */
        begin: '<style(?=\\s|>)', end: '>',
        keywords: {name: 'style'},
        contains: [TAG_INTERNALS],
        starts: {
          end: '</style>', returnEnd: true,
          subLanguage: ['css', 'xml']
        }
      },
      {
        className: 'tag',
        // See the comment in the <style tag about the lookahead pattern
        begin: '<script(?=\\s|>)', end: '>',
        keywords: {name: 'script'},
        contains: [TAG_INTERNALS],
        starts: {
          end: '\<\/script\>', returnEnd: true,
          subLanguage: ['javascript', 'handlebars', 'xml']
        }
      },
      {
        className: 'tag',
        begin: '</?', end: '/?>',
        contains: [
          {
            className: 'name', begin: /[^\/><\s]+/, relevance: 0
          },
          TAG_INTERNALS
        ]
      }
    ]
  };
}

module.exports = xml;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3htbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVUsY0FBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELHlCQUF5QjtBQUN4RixtRUFBbUUseUJBQXlCO0FBQzVGLHFFQUFxRSx5QkFBeUI7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtDQUErQztBQUM5RCxlQUFlLCtDQUErQztBQUM5RCxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF94bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEhUTUwsIFhNTFxuV2Vic2l0ZTogaHR0cHM6Ly93d3cudzMub3JnL1hNTC9cbkNhdGVnb3J5OiBjb21tb25cbiovXG5cbmZ1bmN0aW9uIHhtbChobGpzKSB7XG4gIHZhciBYTUxfSURFTlRfUkUgPSAnW0EtWmEtejAtOVxcXFwuXzotXSsnO1xuICB2YXIgWE1MX0VOVElUSUVTID0ge1xuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgYmVnaW46ICcmW2Etel0rO3wmI1swLTldKzt8JiN4W2EtZjAtOV0rOydcbiAgfTtcbiAgdmFyIFhNTF9NRVRBX0tFWVdPUkRTID0ge1xuXHQgIGJlZ2luOiAnXFxcXHMnLFxuXHQgIGNvbnRhaW5zOltcblx0ICAgIHtcblx0ICAgICAgY2xhc3NOYW1lOiAnbWV0YS1rZXl3b3JkJyxcblx0ICAgICAgYmVnaW46ICcjP1thLXpfXVthLXoxLTlfLV0rJyxcblx0ICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgIH1cblx0ICBdXG4gIH07XG4gIHZhciBYTUxfTUVUQV9QQVJfS0VZV09SRFMgPSBobGpzLmluaGVyaXQoWE1MX01FVEFfS0VZV09SRFMsIHtiZWdpbjogJ1xcXFwoJywgZW5kOiAnXFxcXCknfSk7XG4gIHZhciBBUE9TX01FVEFfU1RSSU5HX01PREUgPSBobGpzLmluaGVyaXQoaGxqcy5BUE9TX1NUUklOR19NT0RFLCB7Y2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnfSk7XG4gIHZhciBRVU9URV9NRVRBX1NUUklOR19NT0RFID0gaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtjbGFzc05hbWU6ICdtZXRhLXN0cmluZyd9KTtcbiAgdmFyIFRBR19JTlRFUk5BTFMgPSB7XG4gICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgaWxsZWdhbDogLzwvLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhdHRyJyxcbiAgICAgICAgYmVnaW46IFhNTF9JREVOVF9SRSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogLz1cXHMqLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAge2JlZ2luOiAvXCIvLCBlbmQ6IC9cIi8sIGNvbnRhaW5zOiBbWE1MX0VOVElUSUVTXX0sXG4gICAgICAgICAgICAgIHtiZWdpbjogLycvLCBlbmQ6IC8nLywgY29udGFpbnM6IFtYTUxfRU5USVRJRVNdfSxcbiAgICAgICAgICAgICAge2JlZ2luOiAvW15cXHNcIic9PD5gXSsvfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnSFRNTCwgWE1MJyxcbiAgICBhbGlhc2VzOiBbJ2h0bWwnLCAneGh0bWwnLCAncnNzJywgJ2F0b20nLCAneGpiJywgJ3hzZCcsICd4c2wnLCAncGxpc3QnLCAnd3NmJywgJ3N2ZyddLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnPCFbYS16XScsIGVuZDogJz4nLFxuICAgICAgICByZWxldmFuY2U6IDEwLFxuICAgICAgICBjb250YWluczogW1xuXHRcdFx0XHQgIFhNTF9NRVRBX0tFWVdPUkRTLFxuXHRcdFx0XHQgIFFVT1RFX01FVEFfU1RSSU5HX01PREUsXG5cdFx0XHRcdCAgQVBPU19NRVRBX1NUUklOR19NT0RFLFxuXHRcdFx0XHRcdFhNTF9NRVRBX1BBUl9LRVlXT1JEUyxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ICBiZWdpbjogJ1xcXFxbJywgZW5kOiAnXFxcXF0nLFxuXHRcdFx0XHRcdCAgY29udGFpbnM6W1xuXHRcdFx0XHRcdFx0ICB7XG5cdFx0XHRcdFx0ICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG5cdFx0XHRcdFx0ICAgICAgYmVnaW46ICc8IVthLXpdJywgZW5kOiAnPicsXG5cdFx0XHRcdFx0ICAgICAgY29udGFpbnM6IFtcblx0XHRcdFx0XHQgICAgICAgIFhNTF9NRVRBX0tFWVdPUkRTLFxuXHRcdFx0XHRcdCAgICAgICAgWE1MX01FVEFfUEFSX0tFWVdPUkRTLFxuXHRcdFx0XHRcdCAgICAgICAgUVVPVEVfTUVUQV9TVFJJTkdfTU9ERSxcblx0XHRcdFx0XHQgICAgICAgIEFQT1NfTUVUQV9TVFJJTkdfTU9ERVxuXHRcdFx0XHRcdFx0ICAgIF1cblx0XHRcdCAgICAgICAgfVxuXHRcdFx0XHRcdCAgXVxuXHRcdFx0XHQgIH1cblx0XHRcdFx0XVxuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJzwhLS0nLFxuICAgICAgICAnLS0+JyxcbiAgICAgICAge1xuICAgICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICc8XFxcXCFcXFxcW0NEQVRBXFxcXFsnLCBlbmQ6ICdcXFxcXVxcXFxdPicsXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICBYTUxfRU5USVRJRVMsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogLzxcXD94bWwvLCBlbmQ6IC9cXD8+LywgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGFnJyxcbiAgICAgICAgLypcbiAgICAgICAgVGhlIGxvb2thaGVhZCBwYXR0ZXJuICg/PS4uLikgZW5zdXJlcyB0aGF0ICdiZWdpbicgb25seSBtYXRjaGVzXG4gICAgICAgICc8c3R5bGUnIGFzIGEgc2luZ2xlIHdvcmQsIGZvbGxvd2VkIGJ5IGEgd2hpdGVzcGFjZSBvciBhblxuICAgICAgICBlbmRpbmcgYnJha2V0LiBUaGUgJyQnIGlzIG5lZWRlZCBmb3IgdGhlIGxleGVtZSB0byBiZSByZWNvZ25pemVkXG4gICAgICAgIGJ5IGhsanMuc3ViTW9kZSgpIHRoYXQgdGVzdHMgbGV4ZW1lcyBvdXRzaWRlIHRoZSBzdHJlYW0uXG4gICAgICAgICovXG4gICAgICAgIGJlZ2luOiAnPHN0eWxlKD89XFxcXHN8PiknLCBlbmQ6ICc+JyxcbiAgICAgICAga2V5d29yZHM6IHtuYW1lOiAnc3R5bGUnfSxcbiAgICAgICAgY29udGFpbnM6IFtUQUdfSU5URVJOQUxTXSxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kOiAnPC9zdHlsZT4nLCByZXR1cm5FbmQ6IHRydWUsXG4gICAgICAgICAgc3ViTGFuZ3VhZ2U6IFsnY3NzJywgJ3htbCddXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RhZycsXG4gICAgICAgIC8vIFNlZSB0aGUgY29tbWVudCBpbiB0aGUgPHN0eWxlIHRhZyBhYm91dCB0aGUgbG9va2FoZWFkIHBhdHRlcm5cbiAgICAgICAgYmVnaW46ICc8c2NyaXB0KD89XFxcXHN8PiknLCBlbmQ6ICc+JyxcbiAgICAgICAga2V5d29yZHM6IHtuYW1lOiAnc2NyaXB0J30sXG4gICAgICAgIGNvbnRhaW5zOiBbVEFHX0lOVEVSTkFMU10sXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIGVuZDogJ1xcPFxcL3NjcmlwdFxcPicsIHJldHVybkVuZDogdHJ1ZSxcbiAgICAgICAgICBzdWJMYW5ndWFnZTogWydqYXZhc2NyaXB0JywgJ2hhbmRsZWJhcnMnLCAneG1sJ11cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGFnJyxcbiAgICAgICAgYmVnaW46ICc8Lz8nLCBlbmQ6ICcvPz4nLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ25hbWUnLCBiZWdpbjogL1teXFwvPjxcXHNdKy8sIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgVEFHX0lOVEVSTkFMU1xuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHhtbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=