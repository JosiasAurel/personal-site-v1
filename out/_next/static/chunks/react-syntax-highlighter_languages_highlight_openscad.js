(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_openscad"],{

/***/ "./node_modules/highlight.js/lib/languages/openscad.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/openscad.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: OpenSCAD
Author: Dan Panzarella <alsoelp@gmail.com>
Description: OpenSCAD is a language for the 3D CAD modeling software of the same name.
Website: https://www.openscad.org
Category: scientific
*/

function openscad(hljs) {
	var SPECIAL_VARS = {
		className: 'keyword',
		begin: '\\$(f[asn]|t|vp[rtd]|children)'
	},
	LITERALS = {
		className: 'literal',
		begin: 'false|true|PI|undef'
	},
	NUMBERS = {
		className: 'number',
		begin: '\\b\\d+(\\.\\d+)?(e-?\\d+)?', //adds 1e5, 1e-10
		relevance: 0
	},
	STRING = hljs.inherit(hljs.QUOTE_STRING_MODE,{illegal: null}),
	PREPRO = {
		className: 'meta',
		keywords: {'meta-keyword': 'include use'},
		begin: 'include|use <',
		end: '>'
	},
	PARAMS = {
		className: 'params',
		begin: '\\(', end: '\\)',
		contains: ['self', NUMBERS, STRING, SPECIAL_VARS, LITERALS]
	},
	MODIFIERS = {
		begin: '[*!#%]',
		relevance: 0
	},
	FUNCTIONS = {
		className: 'function',
		beginKeywords: 'module function',
		end: '\\=|\\{',
		contains: [PARAMS, hljs.UNDERSCORE_TITLE_MODE]
	};

	return {
		name: 'OpenSCAD',
		aliases: ['scad'],
		keywords: {
			keyword: 'function module include use for intersection_for if else \\%',
			literal: 'false true PI undef',
			built_in: 'circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign'
		},
		contains: [
			hljs.C_LINE_COMMENT_MODE,
			hljs.C_BLOCK_COMMENT_MODE,
			NUMBERS,
			PREPRO,
			STRING,
			SPECIAL_VARS,
			MODIFIERS,
			FUNCTIONS
		]
	}
}

module.exports = openscad;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL29wZW5zY2FkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRiwrQ0FBK0MsY0FBYztBQUM3RDtBQUNBO0FBQ0EsYUFBYSw4QkFBOEI7QUFDM0M7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfb3BlbnNjYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IE9wZW5TQ0FEXG5BdXRob3I6IERhbiBQYW56YXJlbGxhIDxhbHNvZWxwQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBPcGVuU0NBRCBpcyBhIGxhbmd1YWdlIGZvciB0aGUgM0QgQ0FEIG1vZGVsaW5nIHNvZnR3YXJlIG9mIHRoZSBzYW1lIG5hbWUuXG5XZWJzaXRlOiBodHRwczovL3d3dy5vcGVuc2NhZC5vcmdcbkNhdGVnb3J5OiBzY2llbnRpZmljXG4qL1xuXG5mdW5jdGlvbiBvcGVuc2NhZChobGpzKSB7XG5cdHZhciBTUEVDSUFMX1ZBUlMgPSB7XG5cdFx0Y2xhc3NOYW1lOiAna2V5d29yZCcsXG5cdFx0YmVnaW46ICdcXFxcJChmW2Fzbl18dHx2cFtydGRdfGNoaWxkcmVuKSdcblx0fSxcblx0TElURVJBTFMgPSB7XG5cdFx0Y2xhc3NOYW1lOiAnbGl0ZXJhbCcsXG5cdFx0YmVnaW46ICdmYWxzZXx0cnVlfFBJfHVuZGVmJ1xuXHR9LFxuXHROVU1CRVJTID0ge1xuXHRcdGNsYXNzTmFtZTogJ251bWJlcicsXG5cdFx0YmVnaW46ICdcXFxcYlxcXFxkKyhcXFxcLlxcXFxkKyk/KGUtP1xcXFxkKyk/JywgLy9hZGRzIDFlNSwgMWUtMTBcblx0XHRyZWxldmFuY2U6IDBcblx0fSxcblx0U1RSSU5HID0gaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUse2lsbGVnYWw6IG51bGx9KSxcblx0UFJFUFJPID0ge1xuXHRcdGNsYXNzTmFtZTogJ21ldGEnLFxuXHRcdGtleXdvcmRzOiB7J21ldGEta2V5d29yZCc6ICdpbmNsdWRlIHVzZSd9LFxuXHRcdGJlZ2luOiAnaW5jbHVkZXx1c2UgPCcsXG5cdFx0ZW5kOiAnPidcblx0fSxcblx0UEFSQU1TID0ge1xuXHRcdGNsYXNzTmFtZTogJ3BhcmFtcycsXG5cdFx0YmVnaW46ICdcXFxcKCcsIGVuZDogJ1xcXFwpJyxcblx0XHRjb250YWluczogWydzZWxmJywgTlVNQkVSUywgU1RSSU5HLCBTUEVDSUFMX1ZBUlMsIExJVEVSQUxTXVxuXHR9LFxuXHRNT0RJRklFUlMgPSB7XG5cdFx0YmVnaW46ICdbKiEjJV0nLFxuXHRcdHJlbGV2YW5jZTogMFxuXHR9LFxuXHRGVU5DVElPTlMgPSB7XG5cdFx0Y2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuXHRcdGJlZ2luS2V5d29yZHM6ICdtb2R1bGUgZnVuY3Rpb24nLFxuXHRcdGVuZDogJ1xcXFw9fFxcXFx7Jyxcblx0XHRjb250YWluczogW1BBUkFNUywgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVdXG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRuYW1lOiAnT3BlblNDQUQnLFxuXHRcdGFsaWFzZXM6IFsnc2NhZCddLFxuXHRcdGtleXdvcmRzOiB7XG5cdFx0XHRrZXl3b3JkOiAnZnVuY3Rpb24gbW9kdWxlIGluY2x1ZGUgdXNlIGZvciBpbnRlcnNlY3Rpb25fZm9yIGlmIGVsc2UgXFxcXCUnLFxuXHRcdFx0bGl0ZXJhbDogJ2ZhbHNlIHRydWUgUEkgdW5kZWYnLFxuXHRcdFx0YnVpbHRfaW46ICdjaXJjbGUgc3F1YXJlIHBvbHlnb24gdGV4dCBzcGhlcmUgY3ViZSBjeWxpbmRlciBwb2x5aGVkcm9uIHRyYW5zbGF0ZSByb3RhdGUgc2NhbGUgcmVzaXplIG1pcnJvciBtdWx0bWF0cml4IGNvbG9yIG9mZnNldCBodWxsIG1pbmtvd3NraSB1bmlvbiBkaWZmZXJlbmNlIGludGVyc2VjdGlvbiBhYnMgc2lnbiBzaW4gY29zIHRhbiBhY29zIGFzaW4gYXRhbiBhdGFuMiBmbG9vciByb3VuZCBjZWlsIGxuIGxvZyBwb3cgc3FydCBleHAgcmFuZHMgbWluIG1heCBjb25jYXQgbG9va3VwIHN0ciBjaHIgc2VhcmNoIHZlcnNpb24gdmVyc2lvbl9udW0gbm9ybSBjcm9zcyBwYXJlbnRfbW9kdWxlIGVjaG8gaW1wb3J0IGltcG9ydF9keGYgZHhmX2xpbmVhcl9leHRydWRlIGxpbmVhcl9leHRydWRlIHJvdGF0ZV9leHRydWRlIHN1cmZhY2UgcHJvamVjdGlvbiByZW5kZXIgY2hpbGRyZW4gZHhmX2Nyb3NzIGR4Zl9kaW0gbGV0IGFzc2lnbidcblx0XHR9LFxuXHRcdGNvbnRhaW5zOiBbXG5cdFx0XHRobGpzLkNfTElORV9DT01NRU5UX01PREUsXG5cdFx0XHRobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuXHRcdFx0TlVNQkVSUyxcblx0XHRcdFBSRVBSTyxcblx0XHRcdFNUUklORyxcblx0XHRcdFNQRUNJQUxfVkFSUyxcblx0XHRcdE1PRElGSUVSUyxcblx0XHRcdEZVTkNUSU9OU1xuXHRcdF1cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9wZW5zY2FkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==