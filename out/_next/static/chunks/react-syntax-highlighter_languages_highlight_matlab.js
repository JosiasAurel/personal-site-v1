(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_matlab"],{

/***/ "./node_modules/highlight.js/lib/languages/matlab.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/matlab.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Matlab
Author: Denis Bardadym <bardadymchik@gmail.com>
Contributors: Eugene Nizhibitsky <nizhibitsky@ya.ru>, Egor Rogov <e.rogov@postgrespro.ru>
Website: https://www.mathworks.com/products/matlab.html
Category: scientific
*/

/*
  Formal syntax is not published, helpful link:
  https://github.com/kornilova-l/matlab-IntelliJ-plugin/blob/master/src/main/grammar/Matlab.bnf
*/
function matlab(hljs) {

  var TRANSPOSE_RE = '(\'|\\.\')+';
  var TRANSPOSE = {
    relevance: 0,
    contains: [
      { begin: TRANSPOSE_RE }
    ]
  };

  return {
    name: 'Matlab',
    keywords: {
      keyword:
        'arguments break case catch classdef continue else elseif end enumeration events for function ' +
        'global if methods otherwise parfor persistent properties return spmd switch try while',
      built_in:
        'sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan ' +
        'atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot ' +
        'cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog ' +
        'realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal ' +
        'cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli ' +
        'besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma ' +
        'gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms ' +
        'nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones ' +
        'eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ' +
        'ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril ' +
        'triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute ' +
        'shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan ' +
        'isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal ' +
        'rosser toeplitz vander wilkinson max min nanmax nanmin mean nanmean type table ' +
        'readtable writetable sortrows sort figure plot plot3 scatter scatter3 cellfun ' +
        'legend intersect ismember procrustes hold num2cell '
    },
    illegal: '(//|"|#|/\\*|\\s+/\\w+)',
    contains: [
      {
        className: 'function',
        beginKeywords: 'function', end: '$',
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          {
            className: 'params',
            variants: [
              {begin: '\\(', end: '\\)'},
              {begin: '\\[', end: '\\]'}
            ]
          }
        ]
      },
      {
        className: 'built_in',
        begin: /true|false/,
        relevance: 0,
        starts: TRANSPOSE
      },
      {
        begin: '[a-zA-Z][a-zA-Z_0-9]*' + TRANSPOSE_RE,
        relevance: 0
      },
      {
        className: 'number',
        begin: hljs.C_NUMBER_RE,
        relevance: 0,
        starts: TRANSPOSE
      },
      {
        className: 'string',
        begin: '\'', end: '\'',
        contains: [
          hljs.BACKSLASH_ESCAPE,
          {begin: '\'\''}]
      },
      {
        begin: /\]|}|\)/,
        relevance: 0,
        starts: TRANSPOSE
      },
      {
        className: 'string',
        begin: '"', end: '"',
        contains: [
          hljs.BACKSLASH_ESCAPE,
          {begin: '""'}
        ],
        starts: TRANSPOSE
      },
      hljs.COMMENT('^\\s*\\%\\{\\s*$', '^\\s*\\%\\}\\s*$'),
      hljs.COMMENT('\\%', '$')
    ]
  };
}

module.exports = matlab;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL21hdGxhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUseUJBQXlCO0FBQ3hDLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLE9BQU87QUFDUDtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUCwrQkFBK0Isb0JBQW9CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfbWF0bGFiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBNYXRsYWJcbkF1dGhvcjogRGVuaXMgQmFyZGFkeW0gPGJhcmRhZHltY2hpa0BnbWFpbC5jb20+XG5Db250cmlidXRvcnM6IEV1Z2VuZSBOaXpoaWJpdHNreSA8bml6aGliaXRza3lAeWEucnU+LCBFZ29yIFJvZ292IDxlLnJvZ292QHBvc3RncmVzcHJvLnJ1PlxuV2Vic2l0ZTogaHR0cHM6Ly93d3cubWF0aHdvcmtzLmNvbS9wcm9kdWN0cy9tYXRsYWIuaHRtbFxuQ2F0ZWdvcnk6IHNjaWVudGlmaWNcbiovXG5cbi8qXG4gIEZvcm1hbCBzeW50YXggaXMgbm90IHB1Ymxpc2hlZCwgaGVscGZ1bCBsaW5rOlxuICBodHRwczovL2dpdGh1Yi5jb20va29ybmlsb3ZhLWwvbWF0bGFiLUludGVsbGlKLXBsdWdpbi9ibG9iL21hc3Rlci9zcmMvbWFpbi9ncmFtbWFyL01hdGxhYi5ibmZcbiovXG5mdW5jdGlvbiBtYXRsYWIoaGxqcykge1xuXG4gIHZhciBUUkFOU1BPU0VfUkUgPSAnKFxcJ3xcXFxcLlxcJykrJztcbiAgdmFyIFRSQU5TUE9TRSA9IHtcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHsgYmVnaW46IFRSQU5TUE9TRV9SRSB9XG4gICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ01hdGxhYicsXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdhcmd1bWVudHMgYnJlYWsgY2FzZSBjYXRjaCBjbGFzc2RlZiBjb250aW51ZSBlbHNlIGVsc2VpZiBlbmQgZW51bWVyYXRpb24gZXZlbnRzIGZvciBmdW5jdGlvbiAnICtcbiAgICAgICAgJ2dsb2JhbCBpZiBtZXRob2RzIG90aGVyd2lzZSBwYXJmb3IgcGVyc2lzdGVudCBwcm9wZXJ0aWVzIHJldHVybiBzcG1kIHN3aXRjaCB0cnkgd2hpbGUnLFxuICAgICAgYnVpbHRfaW46XG4gICAgICAgICdzaW4gc2luZCBzaW5oIGFzaW4gYXNpbmQgYXNpbmggY29zIGNvc2QgY29zaCBhY29zIGFjb3NkIGFjb3NoIHRhbiB0YW5kIHRhbmggYXRhbiAnICtcbiAgICAgICAgJ2F0YW5kIGF0YW4yIGF0YW5oIHNlYyBzZWNkIHNlY2ggYXNlYyBhc2VjZCBhc2VjaCBjc2MgY3NjZCBjc2NoIGFjc2MgYWNzY2QgYWNzY2ggY290ICcgK1xuICAgICAgICAnY290ZCBjb3RoIGFjb3QgYWNvdGQgYWNvdGggaHlwb3QgZXhwIGV4cG0xIGxvZyBsb2cxcCBsb2cxMCBsb2cyIHBvdzIgcmVhbHBvdyByZWFsbG9nICcgK1xuICAgICAgICAncmVhbHNxcnQgc3FydCBudGhyb290IG5leHRwb3cyIGFicyBhbmdsZSBjb21wbGV4IGNvbmogaW1hZyByZWFsIHVud3JhcCBpc3JlYWwgJyArXG4gICAgICAgICdjcGx4cGFpciBmaXggZmxvb3IgY2VpbCByb3VuZCBtb2QgcmVtIHNpZ24gYWlyeSBiZXNzZWxqIGJlc3NlbHkgYmVzc2VsaCBiZXNzZWxpICcgK1xuICAgICAgICAnYmVzc2VsayBiZXRhIGJldGFpbmMgYmV0YWxuIGVsbGlwaiBlbGxpcGtlIGVyZiBlcmZjIGVyZmN4IGVyZmludiBleHBpbnQgZ2FtbWEgJyArXG4gICAgICAgICdnYW1tYWluYyBnYW1tYWxuIHBzaSBsZWdlbmRyZSBjcm9zcyBkb3QgZmFjdG9yIGlzcHJpbWUgcHJpbWVzIGdjZCBsY20gcmF0IHJhdHMgcGVybXMgJyArXG4gICAgICAgICduY2hvb3NlayBmYWN0b3JpYWwgY2FydDJzcGggY2FydDJwb2wgcG9sMmNhcnQgc3BoMmNhcnQgaHN2MnJnYiByZ2IyaHN2IHplcm9zIG9uZXMgJyArXG4gICAgICAgICdleWUgcmVwbWF0IHJhbmQgcmFuZG4gbGluc3BhY2UgbG9nc3BhY2UgZnJlcXNwYWNlIG1lc2hncmlkIGFjY3VtYXJyYXkgc2l6ZSBsZW5ndGggJyArXG4gICAgICAgICduZGltcyBudW1lbCBkaXNwIGlzZW1wdHkgaXNlcXVhbCBpc2VxdWFsd2l0aGVxdWFsbmFucyBjYXQgcmVzaGFwZSBkaWFnIGJsa2RpYWcgdHJpbCAnICtcbiAgICAgICAgJ3RyaXUgZmxpcGxyIGZsaXB1ZCBmbGlwZGltIHJvdDkwIGZpbmQgc3ViMmluZCBpbmQyc3ViIGJzeGZ1biBuZGdyaWQgcGVybXV0ZSBpcGVybXV0ZSAnICtcbiAgICAgICAgJ3NoaWZ0ZGltIGNpcmNzaGlmdCBzcXVlZXplIGlzc2NhbGFyIGlzdmVjdG9yIGFucyBlcHMgcmVhbG1heCByZWFsbWluIHBpIGkgaW5mIG5hbiAnICtcbiAgICAgICAgJ2lzbmFuIGlzaW5mIGlzZmluaXRlIGogd2h5IGNvbXBhbiBnYWxsZXJ5IGhhZGFtYXJkIGhhbmtlbCBoaWxiIGludmhpbGIgbWFnaWMgcGFzY2FsICcgK1xuICAgICAgICAncm9zc2VyIHRvZXBsaXR6IHZhbmRlciB3aWxraW5zb24gbWF4IG1pbiBuYW5tYXggbmFubWluIG1lYW4gbmFubWVhbiB0eXBlIHRhYmxlICcgK1xuICAgICAgICAncmVhZHRhYmxlIHdyaXRldGFibGUgc29ydHJvd3Mgc29ydCBmaWd1cmUgcGxvdCBwbG90MyBzY2F0dGVyIHNjYXR0ZXIzIGNlbGxmdW4gJyArXG4gICAgICAgICdsZWdlbmQgaW50ZXJzZWN0IGlzbWVtYmVyIHByb2NydXN0ZXMgaG9sZCBudW0yY2VsbCAnXG4gICAgfSxcbiAgICBpbGxlZ2FsOiAnKC8vfFwifCN8L1xcXFwqfFxcXFxzKy9cXFxcdyspJyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdmdW5jdGlvbicsIGVuZDogJyQnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICB7YmVnaW46ICdcXFxcKCcsIGVuZDogJ1xcXFwpJ30sXG4gICAgICAgICAgICAgIHtiZWdpbjogJ1xcXFxbJywgZW5kOiAnXFxcXF0nfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgICAgICBiZWdpbjogL3RydWV8ZmFsc2UvLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIHN0YXJ0czogVFJBTlNQT1NFXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1thLXpBLVpdW2EtekEtWl8wLTldKicgKyBUUkFOU1BPU0VfUkUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46IGhsanMuQ19OVU1CRVJfUkUsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgc3RhcnRzOiBUUkFOU1BPU0VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnXFwnJywgZW5kOiAnXFwnJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICAgICAge2JlZ2luOiAnXFwnXFwnJ31dXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcXXx9fFxcKS8sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgc3RhcnRzOiBUUkFOU1BPU0VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnXCInLCBlbmQ6ICdcIicsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICAgIHtiZWdpbjogJ1wiXCInfVxuICAgICAgICBdLFxuICAgICAgICBzdGFydHM6IFRSQU5TUE9TRVxuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVCgnXlxcXFxzKlxcXFwlXFxcXHtcXFxccyokJywgJ15cXFxccypcXFxcJVxcXFx9XFxcXHMqJCcpLFxuICAgICAgaGxqcy5DT01NRU5UKCdcXFxcJScsICckJylcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWF0bGFiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==