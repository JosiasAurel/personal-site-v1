(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_dsconfig"],{

/***/ "./node_modules/highlight.js/lib/languages/dsconfig.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dsconfig.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Language: dsconfig
 Description: dsconfig batch configuration language for LDAP directory servers
 Contributors: Jacob Childress <jacobc@gmail.com>
 Category: enterprise, config
 */
function dsconfig(hljs) {
  var QUOTED_PROPERTY = {
    className: 'string',
    begin: /"/, end: /"/
  };
  var APOS_PROPERTY = {
    className: 'string',
    begin: /'/, end: /'/
  };
  var UNQUOTED_PROPERTY = {
    className: 'string',
    begin: '[\\w-?]+:\\w+', end: '\\W',
    relevance: 0
  };
  var VALUELESS_PROPERTY = {
    className: 'string',
    begin: '\\w+-?\\w+', end: '\\W',
    relevance: 0
  };

  return {
    keywords: 'dsconfig',
    contains: [
      {
        className: 'keyword',
        begin: '^dsconfig', end: '\\s', excludeEnd: true,
        relevance: 10
      },
      {
        className: 'built_in',
        begin: '(list|create|get|set|delete)-(\\w+)', end: '\\s', excludeEnd: true,
        illegal: '!@#$%^&*()',
        relevance: 10
      },
      {
        className: 'built_in',
        begin: '--(\\w+)', end: '\\s', excludeEnd: true
      },
      QUOTED_PROPERTY,
      APOS_PROPERTY,
      UNQUOTED_PROPERTY,
      VALUELESS_PROPERTY,
      hljs.HASH_COMMENT_MODE
    ]
  };
}

module.exports = dsconfig;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2RzY29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9kc2NvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gTGFuZ3VhZ2U6IGRzY29uZmlnXG4gRGVzY3JpcHRpb246IGRzY29uZmlnIGJhdGNoIGNvbmZpZ3VyYXRpb24gbGFuZ3VhZ2UgZm9yIExEQVAgZGlyZWN0b3J5IHNlcnZlcnNcbiBDb250cmlidXRvcnM6IEphY29iIENoaWxkcmVzcyA8amFjb2JjQGdtYWlsLmNvbT5cbiBDYXRlZ29yeTogZW50ZXJwcmlzZSwgY29uZmlnXG4gKi9cbmZ1bmN0aW9uIGRzY29uZmlnKGhsanMpIHtcbiAgdmFyIFFVT1RFRF9QUk9QRVJUWSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvXCIvLCBlbmQ6IC9cIi9cbiAgfTtcbiAgdmFyIEFQT1NfUFJPUEVSVFkgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogLycvLCBlbmQ6IC8nL1xuICB9O1xuICB2YXIgVU5RVU9URURfUFJPUEVSVFkgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1tcXFxcdy0/XSs6XFxcXHcrJywgZW5kOiAnXFxcXFcnLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICB2YXIgVkFMVUVMRVNTX1BST1BFUlRZID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdcXFxcdystP1xcXFx3KycsIGVuZDogJ1xcXFxXJyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGtleXdvcmRzOiAnZHNjb25maWcnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICBiZWdpbjogJ15kc2NvbmZpZycsIGVuZDogJ1xcXFxzJywgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgICAgICBiZWdpbjogJyhsaXN0fGNyZWF0ZXxnZXR8c2V0fGRlbGV0ZSktKFxcXFx3KyknLCBlbmQ6ICdcXFxccycsIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGlsbGVnYWw6ICchQCMkJV4mKigpJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgICAgICBiZWdpbjogJy0tKFxcXFx3KyknLCBlbmQ6ICdcXFxccycsIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBRVU9URURfUFJPUEVSVFksXG4gICAgICBBUE9TX1BST1BFUlRZLFxuICAgICAgVU5RVU9URURfUFJPUEVSVFksXG4gICAgICBWQUxVRUxFU1NfUFJPUEVSVFksXG4gICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRzY29uZmlnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==