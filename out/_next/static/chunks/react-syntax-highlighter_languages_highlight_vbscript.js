(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_vbscript"],{

/***/ "./node_modules/highlight.js/lib/languages/vbscript.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/vbscript.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: VBScript
Description: VBScript ("Microsoft Visual Basic Scripting Edition") is an Active Scripting language developed by Microsoft that is modeled on Visual Basic.
Author: Nikita Ledyaev <lenikita@yandex.ru>
Contributors: Michal Gabrukiewicz <mgabru@gmail.com>
Website: https://en.wikipedia.org/wiki/VBScript
Category: scripting
*/

function vbscript(hljs) {
  return {
    name: 'VBScript',
    aliases: ['vbs'],
    case_insensitive: true,
    keywords: {
      keyword:
        'call class const dim do loop erase execute executeglobal exit for each next function ' +
        'if then else on error option explicit new private property let get public randomize ' +
        'redim rem select case set stop sub while wend with end to elseif is or xor and not ' +
        'class_initialize class_terminate default preserve in me byval byref step resume goto',
      built_in:
        'lcase month vartype instrrev ubound setlocale getobject rgb getref string ' +
        'weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency ' +
        'conversions csng timevalue second year space abs clng timeserial fixs len asc ' +
        'isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate ' +
        'instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex ' +
        'chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim ' +
        'strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion ' +
        'scriptengine split scriptengineminorversion cint sin datepart ltrim sqr ' +
        'scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw ' +
        'chrw regexp server response request cstr err',
      literal:
        'true false null nothing empty'
    },
    illegal: '//',
    contains: [
      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [{begin: '""'}]}),
      hljs.COMMENT(
        /'/,
        /$/,
        {
          relevance: 0
        }
      ),
      hljs.C_NUMBER_MODE
    ]
  };
}

module.exports = vbscript;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3Zic2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBWSxZQUFZLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X3Zic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBWQlNjcmlwdFxuRGVzY3JpcHRpb246IFZCU2NyaXB0IChcIk1pY3Jvc29mdCBWaXN1YWwgQmFzaWMgU2NyaXB0aW5nIEVkaXRpb25cIikgaXMgYW4gQWN0aXZlIFNjcmlwdGluZyBsYW5ndWFnZSBkZXZlbG9wZWQgYnkgTWljcm9zb2Z0IHRoYXQgaXMgbW9kZWxlZCBvbiBWaXN1YWwgQmFzaWMuXG5BdXRob3I6IE5pa2l0YSBMZWR5YWV2IDxsZW5pa2l0YUB5YW5kZXgucnU+XG5Db250cmlidXRvcnM6IE1pY2hhbCBHYWJydWtpZXdpY3ogPG1nYWJydUBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9WQlNjcmlwdFxuQ2F0ZWdvcnk6IHNjcmlwdGluZ1xuKi9cblxuZnVuY3Rpb24gdmJzY3JpcHQoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdWQlNjcmlwdCcsXG4gICAgYWxpYXNlczogWyd2YnMnXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOlxuICAgICAgICAnY2FsbCBjbGFzcyBjb25zdCBkaW0gZG8gbG9vcCBlcmFzZSBleGVjdXRlIGV4ZWN1dGVnbG9iYWwgZXhpdCBmb3IgZWFjaCBuZXh0IGZ1bmN0aW9uICcgK1xuICAgICAgICAnaWYgdGhlbiBlbHNlIG9uIGVycm9yIG9wdGlvbiBleHBsaWNpdCBuZXcgcHJpdmF0ZSBwcm9wZXJ0eSBsZXQgZ2V0IHB1YmxpYyByYW5kb21pemUgJyArXG4gICAgICAgICdyZWRpbSByZW0gc2VsZWN0IGNhc2Ugc2V0IHN0b3Agc3ViIHdoaWxlIHdlbmQgd2l0aCBlbmQgdG8gZWxzZWlmIGlzIG9yIHhvciBhbmQgbm90ICcgK1xuICAgICAgICAnY2xhc3NfaW5pdGlhbGl6ZSBjbGFzc190ZXJtaW5hdGUgZGVmYXVsdCBwcmVzZXJ2ZSBpbiBtZSBieXZhbCBieXJlZiBzdGVwIHJlc3VtZSBnb3RvJyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAnbGNhc2UgbW9udGggdmFydHlwZSBpbnN0cnJldiB1Ym91bmQgc2V0bG9jYWxlIGdldG9iamVjdCByZ2IgZ2V0cmVmIHN0cmluZyAnICtcbiAgICAgICAgJ3dlZWtkYXluYW1lIHJuZCBkYXRlYWRkIG1vbnRobmFtZSBub3cgZGF5IG1pbnV0ZSBpc2FycmF5IGNib29sIHJvdW5kIGZvcm1hdGN1cnJlbmN5ICcgK1xuICAgICAgICAnY29udmVyc2lvbnMgY3NuZyB0aW1ldmFsdWUgc2Vjb25kIHllYXIgc3BhY2UgYWJzIGNsbmcgdGltZXNlcmlhbCBmaXhzIGxlbiBhc2MgJyArXG4gICAgICAgICdpc2VtcHR5IG1hdGhzIGRhdGVzZXJpYWwgYXRuIHRpbWVyIGlzb2JqZWN0IGZpbHRlciB3ZWVrZGF5IGRhdGV2YWx1ZSBjY3VyIGlzZGF0ZSAnICtcbiAgICAgICAgJ2luc3RyIGRhdGVkaWZmIGZvcm1hdGRhdGV0aW1lIHJlcGxhY2UgaXNudWxsIHJpZ2h0IHNnbiBhcnJheSBzbnVtZXJpYyBsb2cgY2RibCBoZXggJyArXG4gICAgICAgICdjaHIgbGJvdW5kIG1zZ2JveCB1Y2FzZSBnZXRsb2NhbGUgY29zIGNkYXRlIGNieXRlIHJ0cmltIGpvaW4gaG91ciBvY3QgdHlwZW5hbWUgdHJpbSAnICtcbiAgICAgICAgJ3N0cmNvbXAgaW50IGNyZWF0ZW9iamVjdCBsb2FkcGljdHVyZSB0YW4gZm9ybWF0bnVtYmVyIG1pZCBzY3JpcHRlbmdpbmVidWlsZHZlcnNpb24gJyArXG4gICAgICAgICdzY3JpcHRlbmdpbmUgc3BsaXQgc2NyaXB0ZW5naW5lbWlub3J2ZXJzaW9uIGNpbnQgc2luIGRhdGVwYXJ0IGx0cmltIHNxciAnICtcbiAgICAgICAgJ3NjcmlwdGVuZ2luZW1ham9ydmVyc2lvbiB0aW1lIGRlcml2ZWQgZXZhbCBkYXRlIGZvcm1hdHBlcmNlbnQgZXhwIGlucHV0Ym94IGxlZnQgYXNjdyAnICtcbiAgICAgICAgJ2NocncgcmVnZXhwIHNlcnZlciByZXNwb25zZSByZXF1ZXN0IGNzdHIgZXJyJyxcbiAgICAgIGxpdGVyYWw6XG4gICAgICAgICd0cnVlIGZhbHNlIG51bGwgbm90aGluZyBlbXB0eSdcbiAgICB9LFxuICAgIGlsbGVnYWw6ICcvLycsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7Y29udGFpbnM6IFt7YmVnaW46ICdcIlwiJ31dfSksXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgIC8nLyxcbiAgICAgICAgLyQvLFxuICAgICAgICB7XG4gICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBobGpzLkNfTlVNQkVSX01PREVcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmJzY3JpcHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9