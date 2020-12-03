(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_purebasic"],{

/***/ "./node_modules/highlight.js/lib/languages/purebasic.js":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/purebasic.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: PureBASIC
Author: Tristano Ajmone <tajmone@gmail.com>
Description: Syntax highlighting for PureBASIC (v.5.00-5.60). No inline ASM highlighting. (v.1.2, May 2017)
Credits: I've taken inspiration from the PureBasic language file for GeSHi, created by Gustavo Julio Fiorenza (GuShH).
Website: https://www.purebasic.com
*/

// Base deafult colors in PB IDE: background: #FFFFDF; foreground: #000000;

function purebasic(hljs) {
  var STRINGS = { // PB IDE color: #0080FF (Azure Radiance)
    className: 'string',
    begin: '(~)?"', end: '"',
    illegal: '\\n'
  };
  var CONSTANTS = { // PB IDE color: #924B72 (Cannon Pink)
    //  "#" + a letter or underscore + letters, digits or underscores + (optional) "$"
    className: 'symbol',
    begin: '#[a-zA-Z_]\\w*\\$?'
  };

  return {
    name: 'PureBASIC',
    aliases: ['pb', 'pbi'],
    keywords: // PB IDE color: #006666 (Blue Stone) + Bold
      // Keywords from all version of PureBASIC 5.00 upward ...
      'Align And Array As Break CallDebugger Case CompilerCase CompilerDefault ' +
      'CompilerElse CompilerElseIf CompilerEndIf CompilerEndSelect CompilerError ' +
      'CompilerIf CompilerSelect CompilerWarning Continue Data DataSection Debug ' +
      'DebugLevel Declare DeclareC DeclareCDLL DeclareDLL DeclareModule Default ' +
      'Define Dim DisableASM DisableDebugger DisableExplicit Else ElseIf EnableASM ' +
      'EnableDebugger EnableExplicit End EndDataSection EndDeclareModule EndEnumeration ' +
      'EndIf EndImport EndInterface EndMacro EndModule EndProcedure EndSelect ' +
      'EndStructure EndStructureUnion EndWith Enumeration EnumerationBinary Extends ' +
      'FakeReturn For ForEach ForEver Global Gosub Goto If Import ImportC ' +
      'IncludeBinary IncludeFile IncludePath Interface List Macro MacroExpandedCount ' +
      'Map Module NewList NewMap Next Not Or Procedure ProcedureC ' +
      'ProcedureCDLL ProcedureDLL ProcedureReturn Protected Prototype PrototypeC ReDim ' +
      'Read Repeat Restore Return Runtime Select Shared Static Step Structure ' +
      'StructureUnion Swap Threaded To UndefineMacro Until Until  UnuseModule ' +
      'UseModule Wend While With XIncludeFile XOr',
    contains: [
      // COMMENTS | PB IDE color: #00AAAA (Persian Green)
      hljs.COMMENT(';', '$', {relevance: 0}),

      { // PROCEDURES DEFINITIONS
        className: 'function',
        begin: '\\b(Procedure|Declare)(C|CDLL|DLL)?\\b',
        end: '\\(',
        excludeEnd: true,
        returnBegin: true,
        contains: [
          { // PROCEDURE KEYWORDS | PB IDE color: #006666 (Blue Stone) + Bold
            className: 'keyword',
            begin: '(Procedure|Declare)(C|CDLL|DLL)?',
            excludeEnd: true
          },
          { // PROCEDURE RETURN TYPE SETTING | PB IDE color: #000000 (Black)
            className: 'type',
            begin: '\\.\\w*'
            // end: ' ',
          },
          hljs.UNDERSCORE_TITLE_MODE // PROCEDURE NAME | PB IDE color: #006666 (Blue Stone)
        ]
      },
      STRINGS,
      CONSTANTS
    ]
  };
}

/*  ==============================================================================
                                      CHANGELOG
    ==============================================================================
    - v.1.2 (2017-05-12)
        -- BUG-FIX: Some keywords were accidentally joyned together. Now fixed.
    - v.1.1 (2017-04-30)
        -- Updated to PureBASIC 5.60.
        -- Keywords list now built by extracting them from the PureBASIC SDK's
           "SyntaxHilighting.dll" (from each PureBASIC version). Tokens from each
           version are added to the list, and renamed or removed tokens are kept
           for the sake of covering all versions of the language from PureBASIC
           v5.00 upward. (NOTE: currently, there are no renamed or deprecated
           tokens in the keywords list). For more info, see:
           -- http://www.purebasic.fr/english/viewtopic.php?&p=506269
           -- https://github.com/tajmone/purebasic-archives/tree/master/syntax-highlighting/guidelines
    - v.1.0 (April 2016)
        -- First release
        -- Keywords list taken and adapted from GuShH's (Gustavo Julio Fiorenza)
           PureBasic language file for GeSHi:
           -- https://github.com/easybook/geshi/blob/master/geshi/purebasic.php
*/

module.exports = purebasic;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3B1cmViYXNpYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0Q7O0FBRXREO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVMsYUFBYTs7QUFFM0MsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfcHVyZWJhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBQdXJlQkFTSUNcbkF1dGhvcjogVHJpc3Rhbm8gQWptb25lIDx0YWptb25lQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBTeW50YXggaGlnaGxpZ2h0aW5nIGZvciBQdXJlQkFTSUMgKHYuNS4wMC01LjYwKS4gTm8gaW5saW5lIEFTTSBoaWdobGlnaHRpbmcuICh2LjEuMiwgTWF5IDIwMTcpXG5DcmVkaXRzOiBJJ3ZlIHRha2VuIGluc3BpcmF0aW9uIGZyb20gdGhlIFB1cmVCYXNpYyBsYW5ndWFnZSBmaWxlIGZvciBHZVNIaSwgY3JlYXRlZCBieSBHdXN0YXZvIEp1bGlvIEZpb3JlbnphIChHdVNoSCkuXG5XZWJzaXRlOiBodHRwczovL3d3dy5wdXJlYmFzaWMuY29tXG4qL1xuXG4vLyBCYXNlIGRlYWZ1bHQgY29sb3JzIGluIFBCIElERTogYmFja2dyb3VuZDogI0ZGRkZERjsgZm9yZWdyb3VuZDogIzAwMDAwMDtcblxuZnVuY3Rpb24gcHVyZWJhc2ljKGhsanMpIHtcbiAgdmFyIFNUUklOR1MgPSB7IC8vIFBCIElERSBjb2xvcjogIzAwODBGRiAoQXp1cmUgUmFkaWFuY2UpXG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJyh+KT9cIicsIGVuZDogJ1wiJyxcbiAgICBpbGxlZ2FsOiAnXFxcXG4nXG4gIH07XG4gIHZhciBDT05TVEFOVFMgPSB7IC8vIFBCIElERSBjb2xvcjogIzkyNEI3MiAoQ2Fubm9uIFBpbmspXG4gICAgLy8gIFwiI1wiICsgYSBsZXR0ZXIgb3IgdW5kZXJzY29yZSArIGxldHRlcnMsIGRpZ2l0cyBvciB1bmRlcnNjb3JlcyArIChvcHRpb25hbCkgXCIkXCJcbiAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgIGJlZ2luOiAnI1thLXpBLVpfXVxcXFx3KlxcXFwkPydcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdQdXJlQkFTSUMnLFxuICAgIGFsaWFzZXM6IFsncGInLCAncGJpJ10sXG4gICAga2V5d29yZHM6IC8vIFBCIElERSBjb2xvcjogIzAwNjY2NiAoQmx1ZSBTdG9uZSkgKyBCb2xkXG4gICAgICAvLyBLZXl3b3JkcyBmcm9tIGFsbCB2ZXJzaW9uIG9mIFB1cmVCQVNJQyA1LjAwIHVwd2FyZCAuLi5cbiAgICAgICdBbGlnbiBBbmQgQXJyYXkgQXMgQnJlYWsgQ2FsbERlYnVnZ2VyIENhc2UgQ29tcGlsZXJDYXNlIENvbXBpbGVyRGVmYXVsdCAnICtcbiAgICAgICdDb21waWxlckVsc2UgQ29tcGlsZXJFbHNlSWYgQ29tcGlsZXJFbmRJZiBDb21waWxlckVuZFNlbGVjdCBDb21waWxlckVycm9yICcgK1xuICAgICAgJ0NvbXBpbGVySWYgQ29tcGlsZXJTZWxlY3QgQ29tcGlsZXJXYXJuaW5nIENvbnRpbnVlIERhdGEgRGF0YVNlY3Rpb24gRGVidWcgJyArXG4gICAgICAnRGVidWdMZXZlbCBEZWNsYXJlIERlY2xhcmVDIERlY2xhcmVDRExMIERlY2xhcmVETEwgRGVjbGFyZU1vZHVsZSBEZWZhdWx0ICcgK1xuICAgICAgJ0RlZmluZSBEaW0gRGlzYWJsZUFTTSBEaXNhYmxlRGVidWdnZXIgRGlzYWJsZUV4cGxpY2l0IEVsc2UgRWxzZUlmIEVuYWJsZUFTTSAnICtcbiAgICAgICdFbmFibGVEZWJ1Z2dlciBFbmFibGVFeHBsaWNpdCBFbmQgRW5kRGF0YVNlY3Rpb24gRW5kRGVjbGFyZU1vZHVsZSBFbmRFbnVtZXJhdGlvbiAnICtcbiAgICAgICdFbmRJZiBFbmRJbXBvcnQgRW5kSW50ZXJmYWNlIEVuZE1hY3JvIEVuZE1vZHVsZSBFbmRQcm9jZWR1cmUgRW5kU2VsZWN0ICcgK1xuICAgICAgJ0VuZFN0cnVjdHVyZSBFbmRTdHJ1Y3R1cmVVbmlvbiBFbmRXaXRoIEVudW1lcmF0aW9uIEVudW1lcmF0aW9uQmluYXJ5IEV4dGVuZHMgJyArXG4gICAgICAnRmFrZVJldHVybiBGb3IgRm9yRWFjaCBGb3JFdmVyIEdsb2JhbCBHb3N1YiBHb3RvIElmIEltcG9ydCBJbXBvcnRDICcgK1xuICAgICAgJ0luY2x1ZGVCaW5hcnkgSW5jbHVkZUZpbGUgSW5jbHVkZVBhdGggSW50ZXJmYWNlIExpc3QgTWFjcm8gTWFjcm9FeHBhbmRlZENvdW50ICcgK1xuICAgICAgJ01hcCBNb2R1bGUgTmV3TGlzdCBOZXdNYXAgTmV4dCBOb3QgT3IgUHJvY2VkdXJlIFByb2NlZHVyZUMgJyArXG4gICAgICAnUHJvY2VkdXJlQ0RMTCBQcm9jZWR1cmVETEwgUHJvY2VkdXJlUmV0dXJuIFByb3RlY3RlZCBQcm90b3R5cGUgUHJvdG90eXBlQyBSZURpbSAnICtcbiAgICAgICdSZWFkIFJlcGVhdCBSZXN0b3JlIFJldHVybiBSdW50aW1lIFNlbGVjdCBTaGFyZWQgU3RhdGljIFN0ZXAgU3RydWN0dXJlICcgK1xuICAgICAgJ1N0cnVjdHVyZVVuaW9uIFN3YXAgVGhyZWFkZWQgVG8gVW5kZWZpbmVNYWNybyBVbnRpbCBVbnRpbCAgVW51c2VNb2R1bGUgJyArXG4gICAgICAnVXNlTW9kdWxlIFdlbmQgV2hpbGUgV2l0aCBYSW5jbHVkZUZpbGUgWE9yJyxcbiAgICBjb250YWluczogW1xuICAgICAgLy8gQ09NTUVOVFMgfCBQQiBJREUgY29sb3I6ICMwMEFBQUEgKFBlcnNpYW4gR3JlZW4pXG4gICAgICBobGpzLkNPTU1FTlQoJzsnLCAnJCcsIHtyZWxldmFuY2U6IDB9KSxcblxuICAgICAgeyAvLyBQUk9DRURVUkVTIERFRklOSVRJT05TXG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYihQcm9jZWR1cmV8RGVjbGFyZSkoQ3xDRExMfERMTCk/XFxcXGInLFxuICAgICAgICBlbmQ6ICdcXFxcKCcsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHsgLy8gUFJPQ0VEVVJFIEtFWVdPUkRTIHwgUEIgSURFIGNvbG9yOiAjMDA2NjY2IChCbHVlIFN0b25lKSArIEJvbGRcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICAgICAgYmVnaW46ICcoUHJvY2VkdXJlfERlY2xhcmUpKEN8Q0RMTHxETEwpPycsXG4gICAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IC8vIFBST0NFRFVSRSBSRVRVUk4gVFlQRSBTRVRUSU5HIHwgUEIgSURFIGNvbG9yOiAjMDAwMDAwIChCbGFjaylcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICAgICAgYmVnaW46ICdcXFxcLlxcXFx3KidcbiAgICAgICAgICAgIC8vIGVuZDogJyAnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREUgLy8gUFJPQ0VEVVJFIE5BTUUgfCBQQiBJREUgY29sb3I6ICMwMDY2NjYgKEJsdWUgU3RvbmUpXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBTVFJJTkdTLFxuICAgICAgQ09OU1RBTlRTXG4gICAgXVxuICB9O1xufVxuXG4vKiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENIQU5HRUxPR1xuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC0gdi4xLjIgKDIwMTctMDUtMTIpXG4gICAgICAgIC0tIEJVRy1GSVg6IFNvbWUga2V5d29yZHMgd2VyZSBhY2NpZGVudGFsbHkgam95bmVkIHRvZ2V0aGVyLiBOb3cgZml4ZWQuXG4gICAgLSB2LjEuMSAoMjAxNy0wNC0zMClcbiAgICAgICAgLS0gVXBkYXRlZCB0byBQdXJlQkFTSUMgNS42MC5cbiAgICAgICAgLS0gS2V5d29yZHMgbGlzdCBub3cgYnVpbHQgYnkgZXh0cmFjdGluZyB0aGVtIGZyb20gdGhlIFB1cmVCQVNJQyBTREsnc1xuICAgICAgICAgICBcIlN5bnRheEhpbGlnaHRpbmcuZGxsXCIgKGZyb20gZWFjaCBQdXJlQkFTSUMgdmVyc2lvbikuIFRva2VucyBmcm9tIGVhY2hcbiAgICAgICAgICAgdmVyc2lvbiBhcmUgYWRkZWQgdG8gdGhlIGxpc3QsIGFuZCByZW5hbWVkIG9yIHJlbW92ZWQgdG9rZW5zIGFyZSBrZXB0XG4gICAgICAgICAgIGZvciB0aGUgc2FrZSBvZiBjb3ZlcmluZyBhbGwgdmVyc2lvbnMgb2YgdGhlIGxhbmd1YWdlIGZyb20gUHVyZUJBU0lDXG4gICAgICAgICAgIHY1LjAwIHVwd2FyZC4gKE5PVEU6IGN1cnJlbnRseSwgdGhlcmUgYXJlIG5vIHJlbmFtZWQgb3IgZGVwcmVjYXRlZFxuICAgICAgICAgICB0b2tlbnMgaW4gdGhlIGtleXdvcmRzIGxpc3QpLiBGb3IgbW9yZSBpbmZvLCBzZWU6XG4gICAgICAgICAgIC0tIGh0dHA6Ly93d3cucHVyZWJhc2ljLmZyL2VuZ2xpc2gvdmlld3RvcGljLnBocD8mcD01MDYyNjlcbiAgICAgICAgICAgLS0gaHR0cHM6Ly9naXRodWIuY29tL3Rham1vbmUvcHVyZWJhc2ljLWFyY2hpdmVzL3RyZWUvbWFzdGVyL3N5bnRheC1oaWdobGlnaHRpbmcvZ3VpZGVsaW5lc1xuICAgIC0gdi4xLjAgKEFwcmlsIDIwMTYpXG4gICAgICAgIC0tIEZpcnN0IHJlbGVhc2VcbiAgICAgICAgLS0gS2V5d29yZHMgbGlzdCB0YWtlbiBhbmQgYWRhcHRlZCBmcm9tIEd1U2hIJ3MgKEd1c3Rhdm8gSnVsaW8gRmlvcmVuemEpXG4gICAgICAgICAgIFB1cmVCYXNpYyBsYW5ndWFnZSBmaWxlIGZvciBHZVNIaTpcbiAgICAgICAgICAgLS0gaHR0cHM6Ly9naXRodWIuY29tL2Vhc3lib29rL2dlc2hpL2Jsb2IvbWFzdGVyL2dlc2hpL3B1cmViYXNpYy5waHBcbiovXG5cbm1vZHVsZS5leHBvcnRzID0gcHVyZWJhc2ljO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==