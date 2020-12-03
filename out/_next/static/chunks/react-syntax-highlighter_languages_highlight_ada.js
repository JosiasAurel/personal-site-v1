(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_ada"],{

/***/ "./node_modules/highlight.js/lib/languages/ada.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/ada.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Ada
Author: Lars Schulna <kartoffelbrei.mit.muskatnuss@gmail.org>
Description: Ada is a general-purpose programming language that has great support for saftey critical and real-time applications.
             It has been developed by the DoD and thus has been used in military and safety-critical applications (like civil aviation).
             The first version appeared in the 80s, but it's still actively developed today with
             the newest standard being Ada2012.
*/

// We try to support full Ada2012
//
// We highlight all appearances of types, keywords, literals (string, char, number, bool)
// and titles (user defined function/procedure/package)
// CSS classes are set accordingly
//
// Languages causing problems for language detection:
// xml (broken by Foo : Bar type), elm (broken by Foo : Bar type), vbscript-html (broken by body keyword)
// sql (ada default.txt has a lot of sql keywords)

/** @type LanguageFn */
function ada(hljs) {
    // Regular expression for Ada numeric literals.
    // stolen form the VHDL highlighter

    // Decimal literal:
    var INTEGER_RE = '\\d(_|\\d)*';
    var EXPONENT_RE = '[eE][-+]?' + INTEGER_RE;
    var DECIMAL_LITERAL_RE = INTEGER_RE + '(\\.' + INTEGER_RE + ')?' + '(' + EXPONENT_RE + ')?';

    // Based literal:
    var BASED_INTEGER_RE = '\\w+';
    var BASED_LITERAL_RE = INTEGER_RE + '#' + BASED_INTEGER_RE + '(\\.' + BASED_INTEGER_RE + ')?' + '#' + '(' + EXPONENT_RE + ')?';

    var NUMBER_RE = '\\b(' + BASED_LITERAL_RE + '|' + DECIMAL_LITERAL_RE + ')';

    // Identifier regex
    var ID_REGEX = '[A-Za-z](_?[A-Za-z0-9.])*';

    // bad chars, only allowed in literals
    var BAD_CHARS = `[]{}%#'"`;

    // Ada doesn't have block comments, only line comments
    var COMMENTS = hljs.COMMENT('--', '$');

    // variable declarations of the form
    // Foo : Bar := Baz;
    // where only Bar will be highlighted
    var VAR_DECLS = {
        // TODO: These spaces are not required by the Ada syntax
        // however, I have yet to see handwritten Ada code where
        // someone does not put spaces around :
        begin: '\\s+:\\s+', end: '\\s*(:=|;|\\)|=>|$)',
        // endsWithParent: true,
        // returnBegin: true,
        illegal: BAD_CHARS,
        contains: [
            {
                // workaround to avoid highlighting
                // named loops and declare blocks
                beginKeywords: 'loop for declare others',
                endsParent: true,
            },
            {
                // properly highlight all modifiers
                className: 'keyword',
                beginKeywords: 'not null constant access function procedure in out aliased exception'
            },
            {
                className: 'type',
                begin: ID_REGEX,
                endsParent: true,
                relevance: 0,
            }
        ]
    };

    return {
        name: 'Ada',
        case_insensitive: true,
        keywords: {
            keyword:
                'abort else new return abs elsif not reverse abstract end ' +
                'accept entry select access exception of separate aliased exit or some ' +
                'all others subtype and for out synchronized array function overriding ' +
                'at tagged generic package task begin goto pragma terminate ' +
                'body private then if procedure type case in protected constant interface ' +
                'is raise use declare range delay limited record when delta loop rem while ' +
                'digits renames with do mod requeue xor',
            literal:
                'True False',
        },
        contains: [
            COMMENTS,
            // strings "foobar"
            {
                className: 'string',
                begin: /"/, end: /"/,
                contains: [{begin: /""/, relevance: 0}]
            },
            // characters ''
            {
                // character literals always contain one char
                className: 'string',
                begin: /'.'/
            },
            {
                // number literals
                className: 'number',
                begin: NUMBER_RE,
                relevance: 0
            },
            {
                // Attributes
                className: 'symbol',
                begin: "'" + ID_REGEX,
            },
            {
                // package definition, maybe inside generic
                className: 'title',
                begin: '(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?', end: '(is|$)',
                keywords: 'package body',
                excludeBegin: true,
                excludeEnd: true,
                illegal: BAD_CHARS
            },
            {
                // function/procedure declaration/definition
                // maybe inside generic
                begin: '(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+', end: '(\\bis|\\bwith|\\brenames|\\)\\s*;)',
                keywords: 'overriding function procedure with is renames return',
                // we need to re-match the 'function' keyword, so that
                // the title mode below matches only exactly once
                returnBegin: true,
                contains:
                [
                    COMMENTS,
                    {
                        // name of the function/procedure
                        className: 'title',
                        begin: '(\\bwith\\s+)?\\b(function|procedure)\\s+',
                        end: '(\\(|\\s+|$)',
                        excludeBegin: true,
                        excludeEnd: true,
                        illegal: BAD_CHARS
                    },
                    // 'self'
                    // // parameter types
                    VAR_DECLS,
                    {
                        // return type
                        className: 'type',
                        begin: '\\breturn\\s+', end: '(\\s+|;|$)',
                        keywords: 'return',
                        excludeBegin: true,
                        excludeEnd: true,
                        // we are done with functions
                        endsParent: true,
                        illegal: BAD_CHARS

                    },
                ]
            },
            {
                // new type declarations
                // maybe inside generic
                className: 'type',
                begin: '\\b(sub)?type\\s+', end: '\\s+',
                keywords: 'type',
                excludeBegin: true,
                illegal: BAD_CHARS
            },

            // see comment above the definition
            VAR_DECLS,

            // no markup
            // relevance boosters for small snippets
            // {begin: '\\s*=>\\s*'},
            // {begin: '\\s*:=\\s*'},
            // {begin: '\\s+:=\\s+'},
        ]
    };
}

module.exports = ada;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FkYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQkFBMEI7QUFDdEQsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlIQUF5SDtBQUN6SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLG9CQUFvQjtBQUNwQyxnQkFBZ0Isb0JBQW9CO0FBQ3BDLGdCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfYWRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBBZGFcbkF1dGhvcjogTGFycyBTY2h1bG5hIDxrYXJ0b2ZmZWxicmVpLm1pdC5tdXNrYXRudXNzQGdtYWlsLm9yZz5cbkRlc2NyaXB0aW9uOiBBZGEgaXMgYSBnZW5lcmFsLXB1cnBvc2UgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgdGhhdCBoYXMgZ3JlYXQgc3VwcG9ydCBmb3Igc2FmdGV5IGNyaXRpY2FsIGFuZCByZWFsLXRpbWUgYXBwbGljYXRpb25zLlxuICAgICAgICAgICAgIEl0IGhhcyBiZWVuIGRldmVsb3BlZCBieSB0aGUgRG9EIGFuZCB0aHVzIGhhcyBiZWVuIHVzZWQgaW4gbWlsaXRhcnkgYW5kIHNhZmV0eS1jcml0aWNhbCBhcHBsaWNhdGlvbnMgKGxpa2UgY2l2aWwgYXZpYXRpb24pLlxuICAgICAgICAgICAgIFRoZSBmaXJzdCB2ZXJzaW9uIGFwcGVhcmVkIGluIHRoZSA4MHMsIGJ1dCBpdCdzIHN0aWxsIGFjdGl2ZWx5IGRldmVsb3BlZCB0b2RheSB3aXRoXG4gICAgICAgICAgICAgdGhlIG5ld2VzdCBzdGFuZGFyZCBiZWluZyBBZGEyMDEyLlxuKi9cblxuLy8gV2UgdHJ5IHRvIHN1cHBvcnQgZnVsbCBBZGEyMDEyXG4vL1xuLy8gV2UgaGlnaGxpZ2h0IGFsbCBhcHBlYXJhbmNlcyBvZiB0eXBlcywga2V5d29yZHMsIGxpdGVyYWxzIChzdHJpbmcsIGNoYXIsIG51bWJlciwgYm9vbClcbi8vIGFuZCB0aXRsZXMgKHVzZXIgZGVmaW5lZCBmdW5jdGlvbi9wcm9jZWR1cmUvcGFja2FnZSlcbi8vIENTUyBjbGFzc2VzIGFyZSBzZXQgYWNjb3JkaW5nbHlcbi8vXG4vLyBMYW5ndWFnZXMgY2F1c2luZyBwcm9ibGVtcyBmb3IgbGFuZ3VhZ2UgZGV0ZWN0aW9uOlxuLy8geG1sIChicm9rZW4gYnkgRm9vIDogQmFyIHR5cGUpLCBlbG0gKGJyb2tlbiBieSBGb28gOiBCYXIgdHlwZSksIHZic2NyaXB0LWh0bWwgKGJyb2tlbiBieSBib2R5IGtleXdvcmQpXG4vLyBzcWwgKGFkYSBkZWZhdWx0LnR4dCBoYXMgYSBsb3Qgb2Ygc3FsIGtleXdvcmRzKVxuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gYWRhKGhsanMpIHtcbiAgICAvLyBSZWd1bGFyIGV4cHJlc3Npb24gZm9yIEFkYSBudW1lcmljIGxpdGVyYWxzLlxuICAgIC8vIHN0b2xlbiBmb3JtIHRoZSBWSERMIGhpZ2hsaWdodGVyXG5cbiAgICAvLyBEZWNpbWFsIGxpdGVyYWw6XG4gICAgdmFyIElOVEVHRVJfUkUgPSAnXFxcXGQoX3xcXFxcZCkqJztcbiAgICB2YXIgRVhQT05FTlRfUkUgPSAnW2VFXVstK10/JyArIElOVEVHRVJfUkU7XG4gICAgdmFyIERFQ0lNQUxfTElURVJBTF9SRSA9IElOVEVHRVJfUkUgKyAnKFxcXFwuJyArIElOVEVHRVJfUkUgKyAnKT8nICsgJygnICsgRVhQT05FTlRfUkUgKyAnKT8nO1xuXG4gICAgLy8gQmFzZWQgbGl0ZXJhbDpcbiAgICB2YXIgQkFTRURfSU5URUdFUl9SRSA9ICdcXFxcdysnO1xuICAgIHZhciBCQVNFRF9MSVRFUkFMX1JFID0gSU5URUdFUl9SRSArICcjJyArIEJBU0VEX0lOVEVHRVJfUkUgKyAnKFxcXFwuJyArIEJBU0VEX0lOVEVHRVJfUkUgKyAnKT8nICsgJyMnICsgJygnICsgRVhQT05FTlRfUkUgKyAnKT8nO1xuXG4gICAgdmFyIE5VTUJFUl9SRSA9ICdcXFxcYignICsgQkFTRURfTElURVJBTF9SRSArICd8JyArIERFQ0lNQUxfTElURVJBTF9SRSArICcpJztcblxuICAgIC8vIElkZW50aWZpZXIgcmVnZXhcbiAgICB2YXIgSURfUkVHRVggPSAnW0EtWmEtel0oXz9bQS1aYS16MC05Ll0pKic7XG5cbiAgICAvLyBiYWQgY2hhcnMsIG9ubHkgYWxsb3dlZCBpbiBsaXRlcmFsc1xuICAgIHZhciBCQURfQ0hBUlMgPSBgW117fSUjJ1wiYDtcblxuICAgIC8vIEFkYSBkb2Vzbid0IGhhdmUgYmxvY2sgY29tbWVudHMsIG9ubHkgbGluZSBjb21tZW50c1xuICAgIHZhciBDT01NRU5UUyA9IGhsanMuQ09NTUVOVCgnLS0nLCAnJCcpO1xuXG4gICAgLy8gdmFyaWFibGUgZGVjbGFyYXRpb25zIG9mIHRoZSBmb3JtXG4gICAgLy8gRm9vIDogQmFyIDo9IEJhejtcbiAgICAvLyB3aGVyZSBvbmx5IEJhciB3aWxsIGJlIGhpZ2hsaWdodGVkXG4gICAgdmFyIFZBUl9ERUNMUyA9IHtcbiAgICAgICAgLy8gVE9ETzogVGhlc2Ugc3BhY2VzIGFyZSBub3QgcmVxdWlyZWQgYnkgdGhlIEFkYSBzeW50YXhcbiAgICAgICAgLy8gaG93ZXZlciwgSSBoYXZlIHlldCB0byBzZWUgaGFuZHdyaXR0ZW4gQWRhIGNvZGUgd2hlcmVcbiAgICAgICAgLy8gc29tZW9uZSBkb2VzIG5vdCBwdXQgc3BhY2VzIGFyb3VuZCA6XG4gICAgICAgIGJlZ2luOiAnXFxcXHMrOlxcXFxzKycsIGVuZDogJ1xcXFxzKig6PXw7fFxcXFwpfD0+fCQpJyxcbiAgICAgICAgLy8gZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgIC8vIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiBCQURfQ0hBUlMsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gd29ya2Fyb3VuZCB0byBhdm9pZCBoaWdobGlnaHRpbmdcbiAgICAgICAgICAgICAgICAvLyBuYW1lZCBsb29wcyBhbmQgZGVjbGFyZSBibG9ja3NcbiAgICAgICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnbG9vcCBmb3IgZGVjbGFyZSBvdGhlcnMnLFxuICAgICAgICAgICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIHByb3Blcmx5IGhpZ2hsaWdodCBhbGwgbW9kaWZpZXJzXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ25vdCBudWxsIGNvbnN0YW50IGFjY2VzcyBmdW5jdGlvbiBwcm9jZWR1cmUgaW4gb3V0IGFsaWFzZWQgZXhjZXB0aW9uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogSURfUkVHRVgsXG4gICAgICAgICAgICAgICAgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ0FkYScsXG4gICAgICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgICBrZXl3b3JkOlxuICAgICAgICAgICAgICAgICdhYm9ydCBlbHNlIG5ldyByZXR1cm4gYWJzIGVsc2lmIG5vdCByZXZlcnNlIGFic3RyYWN0IGVuZCAnICtcbiAgICAgICAgICAgICAgICAnYWNjZXB0IGVudHJ5IHNlbGVjdCBhY2Nlc3MgZXhjZXB0aW9uIG9mIHNlcGFyYXRlIGFsaWFzZWQgZXhpdCBvciBzb21lICcgK1xuICAgICAgICAgICAgICAgICdhbGwgb3RoZXJzIHN1YnR5cGUgYW5kIGZvciBvdXQgc3luY2hyb25pemVkIGFycmF5IGZ1bmN0aW9uIG92ZXJyaWRpbmcgJyArXG4gICAgICAgICAgICAgICAgJ2F0IHRhZ2dlZCBnZW5lcmljIHBhY2thZ2UgdGFzayBiZWdpbiBnb3RvIHByYWdtYSB0ZXJtaW5hdGUgJyArXG4gICAgICAgICAgICAgICAgJ2JvZHkgcHJpdmF0ZSB0aGVuIGlmIHByb2NlZHVyZSB0eXBlIGNhc2UgaW4gcHJvdGVjdGVkIGNvbnN0YW50IGludGVyZmFjZSAnICtcbiAgICAgICAgICAgICAgICAnaXMgcmFpc2UgdXNlIGRlY2xhcmUgcmFuZ2UgZGVsYXkgbGltaXRlZCByZWNvcmQgd2hlbiBkZWx0YSBsb29wIHJlbSB3aGlsZSAnICtcbiAgICAgICAgICAgICAgICAnZGlnaXRzIHJlbmFtZXMgd2l0aCBkbyBtb2QgcmVxdWV1ZSB4b3InLFxuICAgICAgICAgICAgbGl0ZXJhbDpcbiAgICAgICAgICAgICAgICAnVHJ1ZSBGYWxzZScsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICBDT01NRU5UUyxcbiAgICAgICAgICAgIC8vIHN0cmluZ3MgXCJmb29iYXJcIlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgYmVnaW46IC9cIi8sIGVuZDogL1wiLyxcbiAgICAgICAgICAgICAgICBjb250YWluczogW3tiZWdpbjogL1wiXCIvLCByZWxldmFuY2U6IDB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIGNoYXJhY3RlcnMgJydcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBjaGFyYWN0ZXIgbGl0ZXJhbHMgYWx3YXlzIGNvbnRhaW4gb25lIGNoYXJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAvJy4nL1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBudW1iZXIgbGl0ZXJhbHNcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgIGJlZ2luOiBOVU1CRVJfUkUsXG4gICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIEF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiBcIidcIiArIElEX1JFR0VYLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBwYWNrYWdlIGRlZmluaXRpb24sIG1heWJlIGluc2lkZSBnZW5lcmljXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAnKFxcXFxid2l0aFxcXFxzKyk/KFxcXFxicHJpdmF0ZVxcXFxzKyk/XFxcXGJwYWNrYWdlXFxcXHMrKFxcXFxiYm9keVxcXFxzKyk/JywgZW5kOiAnKGlzfCQpJyxcbiAgICAgICAgICAgICAgICBrZXl3b3JkczogJ3BhY2thZ2UgYm9keScsXG4gICAgICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgaWxsZWdhbDogQkFEX0NIQVJTXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGZ1bmN0aW9uL3Byb2NlZHVyZSBkZWNsYXJhdGlvbi9kZWZpbml0aW9uXG4gICAgICAgICAgICAgICAgLy8gbWF5YmUgaW5zaWRlIGdlbmVyaWNcbiAgICAgICAgICAgICAgICBiZWdpbjogJyhcXFxcYih3aXRofG92ZXJyaWRpbmcpXFxcXHMrKT9cXFxcYihmdW5jdGlvbnxwcm9jZWR1cmUpXFxcXHMrJywgZW5kOiAnKFxcXFxiaXN8XFxcXGJ3aXRofFxcXFxicmVuYW1lc3xcXFxcKVxcXFxzKjspJyxcbiAgICAgICAgICAgICAgICBrZXl3b3JkczogJ292ZXJyaWRpbmcgZnVuY3Rpb24gcHJvY2VkdXJlIHdpdGggaXMgcmVuYW1lcyByZXR1cm4nLFxuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gcmUtbWF0Y2ggdGhlICdmdW5jdGlvbicga2V5d29yZCwgc28gdGhhdFxuICAgICAgICAgICAgICAgIC8vIHRoZSB0aXRsZSBtb2RlIGJlbG93IG1hdGNoZXMgb25seSBleGFjdGx5IG9uY2VcbiAgICAgICAgICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250YWluczpcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIENPTU1FTlRTLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBuYW1lIG9mIHRoZSBmdW5jdGlvbi9wcm9jZWR1cmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiAnKFxcXFxid2l0aFxcXFxzKyk/XFxcXGIoZnVuY3Rpb258cHJvY2VkdXJlKVxcXFxzKycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6ICcoXFxcXCh8XFxcXHMrfCQpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbGxlZ2FsOiBCQURfQ0hBUlNcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gJ3NlbGYnXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vIHBhcmFtZXRlciB0eXBlc1xuICAgICAgICAgICAgICAgICAgICBWQVJfREVDTFMsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGJyZXR1cm5cXFxccysnLCBlbmQ6ICcoXFxcXHMrfDt8JCknLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZHM6ICdyZXR1cm4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGFyZSBkb25lIHdpdGggZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWxsZWdhbDogQkFEX0NIQVJTXG5cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIG5ldyB0eXBlIGRlY2xhcmF0aW9uc1xuICAgICAgICAgICAgICAgIC8vIG1heWJlIGluc2lkZSBnZW5lcmljXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYihzdWIpP3R5cGVcXFxccysnLCBlbmQ6ICdcXFxccysnLFxuICAgICAgICAgICAgICAgIGtleXdvcmRzOiAndHlwZScsXG4gICAgICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlsbGVnYWw6IEJBRF9DSEFSU1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8gc2VlIGNvbW1lbnQgYWJvdmUgdGhlIGRlZmluaXRpb25cbiAgICAgICAgICAgIFZBUl9ERUNMUyxcblxuICAgICAgICAgICAgLy8gbm8gbWFya3VwXG4gICAgICAgICAgICAvLyByZWxldmFuY2UgYm9vc3RlcnMgZm9yIHNtYWxsIHNuaXBwZXRzXG4gICAgICAgICAgICAvLyB7YmVnaW46ICdcXFxccyo9PlxcXFxzKid9LFxuICAgICAgICAgICAgLy8ge2JlZ2luOiAnXFxcXHMqOj1cXFxccyonfSxcbiAgICAgICAgICAgIC8vIHtiZWdpbjogJ1xcXFxzKzo9XFxcXHMrJ30sXG4gICAgICAgIF1cbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkYTtcbiJdLCJzb3VyY2VSb290IjoiIn0=