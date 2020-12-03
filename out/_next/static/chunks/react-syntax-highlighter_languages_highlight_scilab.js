(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_scilab"],{

/***/ "./node_modules/highlight.js/lib/languages/scilab.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/scilab.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Scilab
Author: Sylvestre Ledru <sylvestre.ledru@scilab-enterprises.com>
Origin: matlab.js
Description: Scilab is a port from Matlab
Website: https://www.scilab.org
Category: scientific
*/

function scilab(hljs) {

  var COMMON_CONTAINS = [
    hljs.C_NUMBER_MODE,
    {
      className: 'string',
      begin: '\'|\"', end: '\'|\"',
      contains: [hljs.BACKSLASH_ESCAPE, {begin: '\'\''}]
    }
  ];

  return {
    name: 'Scilab',
    aliases: ['sci'],
    keywords: {
      $pattern: /%?\w+/,
      keyword: 'abort break case clear catch continue do elseif else endfunction end for function '+
        'global if pause return resume select try then while',
      literal:
        '%f %F %t %T %pi %eps %inf %nan %e %i %z %s',
      built_in: // Scilab has more than 2000 functions. Just list the most commons
       'abs and acos asin atan ceil cd chdir clearglobal cosh cos cumprod deff disp error '+
       'exec execstr exists exp eye gettext floor fprintf fread fsolve imag isdef isempty '+
       'isinfisnan isvector lasterror length load linspace list listfiles log10 log2 log '+
       'max min msprintf mclose mopen ones or pathconvert poly printf prod pwd rand real '+
       'round sinh sin size gsort sprintf sqrt strcat strcmps tring sum system tanh tan '+
       'type typename warning zeros matrix'
    },
    illegal: '("|#|/\\*|\\s+/\\w+)',
    contains: [
      {
        className: 'function',
        beginKeywords: 'function', end: '$',
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          {
            className: 'params',
            begin: '\\(', end: '\\)'
          }
        ]
      },
      {
        begin: '[a-zA-Z_][a-zA-Z_0-9]*(\'+[\\.\']*|[\\.\']+)', end: '',
        relevance: 0
      },
      {
        begin: '\\[', end: '\\]\'*[\\.\']*',
        relevance: 0,
        contains: COMMON_CONTAINS
      },
      hljs.COMMENT('//', '$')
    ].concat(COMMON_CONTAINS)
  };
}

module.exports = scilab;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3NjaWxhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9zY2lsYWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFNjaWxhYlxuQXV0aG9yOiBTeWx2ZXN0cmUgTGVkcnUgPHN5bHZlc3RyZS5sZWRydUBzY2lsYWItZW50ZXJwcmlzZXMuY29tPlxuT3JpZ2luOiBtYXRsYWIuanNcbkRlc2NyaXB0aW9uOiBTY2lsYWIgaXMgYSBwb3J0IGZyb20gTWF0bGFiXG5XZWJzaXRlOiBodHRwczovL3d3dy5zY2lsYWIub3JnXG5DYXRlZ29yeTogc2NpZW50aWZpY1xuKi9cblxuZnVuY3Rpb24gc2NpbGFiKGhsanMpIHtcblxuICB2YXIgQ09NTU9OX0NPTlRBSU5TID0gW1xuICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgYmVnaW46ICdcXCd8XFxcIicsIGVuZDogJ1xcJ3xcXFwiJyxcbiAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFLCB7YmVnaW46ICdcXCdcXCcnfV1cbiAgICB9XG4gIF07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnU2NpbGFiJyxcbiAgICBhbGlhc2VzOiBbJ3NjaSddLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAkcGF0dGVybjogLyU/XFx3Ky8sXG4gICAgICBrZXl3b3JkOiAnYWJvcnQgYnJlYWsgY2FzZSBjbGVhciBjYXRjaCBjb250aW51ZSBkbyBlbHNlaWYgZWxzZSBlbmRmdW5jdGlvbiBlbmQgZm9yIGZ1bmN0aW9uICcrXG4gICAgICAgICdnbG9iYWwgaWYgcGF1c2UgcmV0dXJuIHJlc3VtZSBzZWxlY3QgdHJ5IHRoZW4gd2hpbGUnLFxuICAgICAgbGl0ZXJhbDpcbiAgICAgICAgJyVmICVGICV0ICVUICVwaSAlZXBzICVpbmYgJW5hbiAlZSAlaSAleiAlcycsXG4gICAgICBidWlsdF9pbjogLy8gU2NpbGFiIGhhcyBtb3JlIHRoYW4gMjAwMCBmdW5jdGlvbnMuIEp1c3QgbGlzdCB0aGUgbW9zdCBjb21tb25zXG4gICAgICAgJ2FicyBhbmQgYWNvcyBhc2luIGF0YW4gY2VpbCBjZCBjaGRpciBjbGVhcmdsb2JhbCBjb3NoIGNvcyBjdW1wcm9kIGRlZmYgZGlzcCBlcnJvciAnK1xuICAgICAgICdleGVjIGV4ZWNzdHIgZXhpc3RzIGV4cCBleWUgZ2V0dGV4dCBmbG9vciBmcHJpbnRmIGZyZWFkIGZzb2x2ZSBpbWFnIGlzZGVmIGlzZW1wdHkgJytcbiAgICAgICAnaXNpbmZpc25hbiBpc3ZlY3RvciBsYXN0ZXJyb3IgbGVuZ3RoIGxvYWQgbGluc3BhY2UgbGlzdCBsaXN0ZmlsZXMgbG9nMTAgbG9nMiBsb2cgJytcbiAgICAgICAnbWF4IG1pbiBtc3ByaW50ZiBtY2xvc2UgbW9wZW4gb25lcyBvciBwYXRoY29udmVydCBwb2x5IHByaW50ZiBwcm9kIHB3ZCByYW5kIHJlYWwgJytcbiAgICAgICAncm91bmQgc2luaCBzaW4gc2l6ZSBnc29ydCBzcHJpbnRmIHNxcnQgc3RyY2F0IHN0cmNtcHMgdHJpbmcgc3VtIHN5c3RlbSB0YW5oIHRhbiAnK1xuICAgICAgICd0eXBlIHR5cGVuYW1lIHdhcm5pbmcgemVyb3MgbWF0cml4J1xuICAgIH0sXG4gICAgaWxsZWdhbDogJyhcInwjfC9cXFxcKnxcXFxccysvXFxcXHcrKScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24nLCBlbmQ6ICckJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgYmVnaW46ICdcXFxcKCcsIGVuZDogJ1xcXFwpJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdbYS16QS1aX11bYS16QS1aXzAtOV0qKFxcJytbXFxcXC5cXCddKnxbXFxcXC5cXCddKyknLCBlbmQ6ICcnLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFxcXFsnLCBlbmQ6ICdcXFxcXVxcJypbXFxcXC5cXCddKicsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IENPTU1PTl9DT05UQUlOU1xuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVCgnLy8nLCAnJCcpXG4gICAgXS5jb25jYXQoQ09NTU9OX0NPTlRBSU5TKVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNjaWxhYjtcbiJdLCJzb3VyY2VSb290IjoiIn0=