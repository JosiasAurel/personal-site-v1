(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_mipsasm"],{

/***/ "./node_modules/highlight.js/lib/languages/mipsasm.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/mipsasm.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: MIPS Assembly
Author: Nebuleon Fumika <nebuleon.fumika@gmail.com>
Description: MIPS Assembly (up to MIPS32R2)
Website: https://en.wikipedia.org/wiki/MIPS_architecture
Category: assembler
*/

function mipsasm(hljs) {
    //local labels: %?[FB]?[AT]?\d{1,2}\w+
  return {
    name: 'MIPS Assembly',
    case_insensitive: true,
    aliases: ['mips'],
    keywords: {
      $pattern: '\\.?' + hljs.IDENT_RE,
      meta:
        //GNU preprocs
        '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .ltorg ',
      built_in:
        '$0 $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11 $12 $13 $14 $15 ' + // integer registers
        '$16 $17 $18 $19 $20 $21 $22 $23 $24 $25 $26 $27 $28 $29 $30 $31 ' + // integer registers
        'zero at v0 v1 a0 a1 a2 a3 a4 a5 a6 a7 ' + // integer register aliases
        't0 t1 t2 t3 t4 t5 t6 t7 t8 t9 s0 s1 s2 s3 s4 s5 s6 s7 s8 ' + // integer register aliases
        'k0 k1 gp sp fp ra ' + // integer register aliases
        '$f0 $f1 $f2 $f2 $f4 $f5 $f6 $f7 $f8 $f9 $f10 $f11 $f12 $f13 $f14 $f15 ' + // floating-point registers
        '$f16 $f17 $f18 $f19 $f20 $f21 $f22 $f23 $f24 $f25 $f26 $f27 $f28 $f29 $f30 $f31 ' + // floating-point registers
        'Context Random EntryLo0 EntryLo1 Context PageMask Wired EntryHi ' + // Coprocessor 0 registers
        'HWREna BadVAddr Count Compare SR IntCtl SRSCtl SRSMap Cause EPC PRId ' + // Coprocessor 0 registers
        'EBase Config Config1 Config2 Config3 LLAddr Debug DEPC DESAVE CacheErr ' + // Coprocessor 0 registers
        'ECC ErrorEPC TagLo DataLo TagHi DataHi WatchLo WatchHi PerfCtl PerfCnt ' // Coprocessor 0 registers
    },
    contains: [
      {
        className: 'keyword',
        begin: '\\b('+     //mnemonics
            // 32-bit integer instructions
            'addi?u?|andi?|b(al)?|beql?|bgez(al)?l?|bgtzl?|blezl?|bltz(al)?l?|' +
            'bnel?|cl[oz]|divu?|ext|ins|j(al)?|jalr(\.hb)?|jr(\.hb)?|lbu?|lhu?|' +
            'll|lui|lw[lr]?|maddu?|mfhi|mflo|movn|movz|move|msubu?|mthi|mtlo|mul|' +
            'multu?|nop|nor|ori?|rotrv?|sb|sc|se[bh]|sh|sllv?|slti?u?|srav?|' +
            'srlv?|subu?|sw[lr]?|xori?|wsbh|' +
            // floating-point instructions
            'abs\.[sd]|add\.[sd]|alnv.ps|bc1[ft]l?|' +
            'c\.(s?f|un|u?eq|[ou]lt|[ou]le|ngle?|seq|l[et]|ng[et])\.[sd]|' +
            '(ceil|floor|round|trunc)\.[lw]\.[sd]|cfc1|cvt\.d\.[lsw]|' +
            'cvt\.l\.[dsw]|cvt\.ps\.s|cvt\.s\.[dlw]|cvt\.s\.p[lu]|cvt\.w\.[dls]|' +
            'div\.[ds]|ldx?c1|luxc1|lwx?c1|madd\.[sd]|mfc1|mov[fntz]?\.[ds]|' +
            'msub\.[sd]|mth?c1|mul\.[ds]|neg\.[ds]|nmadd\.[ds]|nmsub\.[ds]|' +
            'p[lu][lu]\.ps|recip\.fmt|r?sqrt\.[ds]|sdx?c1|sub\.[ds]|suxc1|' +
            'swx?c1|' +
            // system control instructions
            'break|cache|d?eret|[de]i|ehb|mfc0|mtc0|pause|prefx?|rdhwr|' +
            'rdpgpr|sdbbp|ssnop|synci?|syscall|teqi?|tgei?u?|tlb(p|r|w[ir])|' +
            'tlti?u?|tnei?|wait|wrpgpr'+
        ')',
        end: '\\s'
      },
      // lines ending with ; or # aren't really comments, probably auto-detect fail
      hljs.COMMENT('[;#](?!\s*$)', '$'),
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'string',
        begin: '\'',
        end: '[^\\\\]\'',
        relevance: 0
      },
      {
        className: 'title',
        begin: '\\|', end: '\\|',
        illegal: '\\n',
        relevance: 0
      },
      {
        className: 'number',
        variants: [
            {begin: '0x[0-9a-f]+'}, //hex
            {begin: '\\b-?\\d+'}           //bare number
        ],
        relevance: 0
      },
      {
        className: 'symbol',
        variants: [
            {begin: '^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:'}, //GNU MIPS syntax
            {begin: '^\\s*[0-9]+:'}, // numbered local labels
            {begin: '[0-9]+[bf]' }  // number local label reference (backwards, forwards)
        ],
        relevance: 0
      }
    ],
    illegal: '\/'
  };
}

module.exports = mipsasm;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL21pcHNhc20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsSUFBSTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsNEJBQTRCO0FBQzVCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUJBQXFCO0FBQ2xDLGFBQWEsbUJBQW1CO0FBQ2hDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsYUFBYSw0Q0FBNEM7QUFDekQsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSxxQkFBcUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9taXBzYXNtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBNSVBTIEFzc2VtYmx5XG5BdXRob3I6IE5lYnVsZW9uIEZ1bWlrYSA8bmVidWxlb24uZnVtaWthQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBNSVBTIEFzc2VtYmx5ICh1cCB0byBNSVBTMzJSMilcbldlYnNpdGU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01JUFNfYXJjaGl0ZWN0dXJlXG5DYXRlZ29yeTogYXNzZW1ibGVyXG4qL1xuXG5mdW5jdGlvbiBtaXBzYXNtKGhsanMpIHtcbiAgICAvL2xvY2FsIGxhYmVsczogJT9bRkJdP1tBVF0/XFxkezEsMn1cXHcrXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ01JUFMgQXNzZW1ibHknLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgYWxpYXNlczogWydtaXBzJ10sXG4gICAga2V5d29yZHM6IHtcbiAgICAgICRwYXR0ZXJuOiAnXFxcXC4/JyArIGhsanMuSURFTlRfUkUsXG4gICAgICBtZXRhOlxuICAgICAgICAvL0dOVSBwcmVwcm9jc1xuICAgICAgICAnLjJieXRlIC40Ynl0ZSAuYWxpZ24gLmFzY2lpIC5hc2NpeiAuYmFsaWduIC5ieXRlIC5jb2RlIC5kYXRhIC5lbHNlIC5lbmQgLmVuZGlmIC5lbmRtIC5lbmRyIC5lcXUgLmVyciAuZXhpdG0gLmV4dGVybiAuZ2xvYmFsIC5od29yZCAuaWYgLmlmZGVmIC5pZm5kZWYgLmluY2x1ZGUgLmlycCAubG9uZyAubWFjcm8gLnJlcHQgLnJlcSAuc2VjdGlvbiAuc2V0IC5za2lwIC5zcGFjZSAudGV4dCAud29yZCAubHRvcmcgJyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAnJDAgJDEgJDIgJDMgJDQgJDUgJDYgJDcgJDggJDkgJDEwICQxMSAkMTIgJDEzICQxNCAkMTUgJyArIC8vIGludGVnZXIgcmVnaXN0ZXJzXG4gICAgICAgICckMTYgJDE3ICQxOCAkMTkgJDIwICQyMSAkMjIgJDIzICQyNCAkMjUgJDI2ICQyNyAkMjggJDI5ICQzMCAkMzEgJyArIC8vIGludGVnZXIgcmVnaXN0ZXJzXG4gICAgICAgICd6ZXJvIGF0IHYwIHYxIGEwIGExIGEyIGEzIGE0IGE1IGE2IGE3ICcgKyAvLyBpbnRlZ2VyIHJlZ2lzdGVyIGFsaWFzZXNcbiAgICAgICAgJ3QwIHQxIHQyIHQzIHQ0IHQ1IHQ2IHQ3IHQ4IHQ5IHMwIHMxIHMyIHMzIHM0IHM1IHM2IHM3IHM4ICcgKyAvLyBpbnRlZ2VyIHJlZ2lzdGVyIGFsaWFzZXNcbiAgICAgICAgJ2swIGsxIGdwIHNwIGZwIHJhICcgKyAvLyBpbnRlZ2VyIHJlZ2lzdGVyIGFsaWFzZXNcbiAgICAgICAgJyRmMCAkZjEgJGYyICRmMiAkZjQgJGY1ICRmNiAkZjcgJGY4ICRmOSAkZjEwICRmMTEgJGYxMiAkZjEzICRmMTQgJGYxNSAnICsgLy8gZmxvYXRpbmctcG9pbnQgcmVnaXN0ZXJzXG4gICAgICAgICckZjE2ICRmMTcgJGYxOCAkZjE5ICRmMjAgJGYyMSAkZjIyICRmMjMgJGYyNCAkZjI1ICRmMjYgJGYyNyAkZjI4ICRmMjkgJGYzMCAkZjMxICcgKyAvLyBmbG9hdGluZy1wb2ludCByZWdpc3RlcnNcbiAgICAgICAgJ0NvbnRleHQgUmFuZG9tIEVudHJ5TG8wIEVudHJ5TG8xIENvbnRleHQgUGFnZU1hc2sgV2lyZWQgRW50cnlIaSAnICsgLy8gQ29wcm9jZXNzb3IgMCByZWdpc3RlcnNcbiAgICAgICAgJ0hXUkVuYSBCYWRWQWRkciBDb3VudCBDb21wYXJlIFNSIEludEN0bCBTUlNDdGwgU1JTTWFwIENhdXNlIEVQQyBQUklkICcgKyAvLyBDb3Byb2Nlc3NvciAwIHJlZ2lzdGVyc1xuICAgICAgICAnRUJhc2UgQ29uZmlnIENvbmZpZzEgQ29uZmlnMiBDb25maWczIExMQWRkciBEZWJ1ZyBERVBDIERFU0FWRSBDYWNoZUVyciAnICsgLy8gQ29wcm9jZXNzb3IgMCByZWdpc3RlcnNcbiAgICAgICAgJ0VDQyBFcnJvckVQQyBUYWdMbyBEYXRhTG8gVGFnSGkgRGF0YUhpIFdhdGNoTG8gV2F0Y2hIaSBQZXJmQ3RsIFBlcmZDbnQgJyAvLyBDb3Byb2Nlc3NvciAwIHJlZ2lzdGVyc1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgIGJlZ2luOiAnXFxcXGIoJysgICAgIC8vbW5lbW9uaWNzXG4gICAgICAgICAgICAvLyAzMi1iaXQgaW50ZWdlciBpbnN0cnVjdGlvbnNcbiAgICAgICAgICAgICdhZGRpP3U/fGFuZGk/fGIoYWwpP3xiZXFsP3xiZ2V6KGFsKT9sP3xiZ3R6bD98Ymxlemw/fGJsdHooYWwpP2w/fCcgK1xuICAgICAgICAgICAgJ2JuZWw/fGNsW296XXxkaXZ1P3xleHR8aW5zfGooYWwpP3xqYWxyKFxcLmhiKT98anIoXFwuaGIpP3xsYnU/fGxodT98JyArXG4gICAgICAgICAgICAnbGx8bHVpfGx3W2xyXT98bWFkZHU/fG1maGl8bWZsb3xtb3ZufG1vdnp8bW92ZXxtc3VidT98bXRoaXxtdGxvfG11bHwnICtcbiAgICAgICAgICAgICdtdWx0dT98bm9wfG5vcnxvcmk/fHJvdHJ2P3xzYnxzY3xzZVtiaF18c2h8c2xsdj98c2x0aT91P3xzcmF2P3wnICtcbiAgICAgICAgICAgICdzcmx2P3xzdWJ1P3xzd1tscl0/fHhvcmk/fHdzYmh8JyArXG4gICAgICAgICAgICAvLyBmbG9hdGluZy1wb2ludCBpbnN0cnVjdGlvbnNcbiAgICAgICAgICAgICdhYnNcXC5bc2RdfGFkZFxcLltzZF18YWxudi5wc3xiYzFbZnRdbD98JyArXG4gICAgICAgICAgICAnY1xcLihzP2Z8dW58dT9lcXxbb3VdbHR8W291XWxlfG5nbGU/fHNlcXxsW2V0XXxuZ1tldF0pXFwuW3NkXXwnICtcbiAgICAgICAgICAgICcoY2VpbHxmbG9vcnxyb3VuZHx0cnVuYylcXC5bbHddXFwuW3NkXXxjZmMxfGN2dFxcLmRcXC5bbHN3XXwnICtcbiAgICAgICAgICAgICdjdnRcXC5sXFwuW2Rzd118Y3Z0XFwucHNcXC5zfGN2dFxcLnNcXC5bZGx3XXxjdnRcXC5zXFwucFtsdV18Y3Z0XFwud1xcLltkbHNdfCcgK1xuICAgICAgICAgICAgJ2RpdlxcLltkc118bGR4P2MxfGx1eGMxfGx3eD9jMXxtYWRkXFwuW3NkXXxtZmMxfG1vdltmbnR6XT9cXC5bZHNdfCcgK1xuICAgICAgICAgICAgJ21zdWJcXC5bc2RdfG10aD9jMXxtdWxcXC5bZHNdfG5lZ1xcLltkc118bm1hZGRcXC5bZHNdfG5tc3ViXFwuW2RzXXwnICtcbiAgICAgICAgICAgICdwW2x1XVtsdV1cXC5wc3xyZWNpcFxcLmZtdHxyP3NxcnRcXC5bZHNdfHNkeD9jMXxzdWJcXC5bZHNdfHN1eGMxfCcgK1xuICAgICAgICAgICAgJ3N3eD9jMXwnICtcbiAgICAgICAgICAgIC8vIHN5c3RlbSBjb250cm9sIGluc3RydWN0aW9uc1xuICAgICAgICAgICAgJ2JyZWFrfGNhY2hlfGQ/ZXJldHxbZGVdaXxlaGJ8bWZjMHxtdGMwfHBhdXNlfHByZWZ4P3xyZGh3cnwnICtcbiAgICAgICAgICAgICdyZHBncHJ8c2RiYnB8c3Nub3B8c3luY2k/fHN5c2NhbGx8dGVxaT98dGdlaT91P3x0bGIocHxyfHdbaXJdKXwnICtcbiAgICAgICAgICAgICd0bHRpP3U/fHRuZWk/fHdhaXR8d3JwZ3ByJytcbiAgICAgICAgJyknLFxuICAgICAgICBlbmQ6ICdcXFxccydcbiAgICAgIH0sXG4gICAgICAvLyBsaW5lcyBlbmRpbmcgd2l0aCA7IG9yICMgYXJlbid0IHJlYWxseSBjb21tZW50cywgcHJvYmFibHkgYXV0by1kZXRlY3QgZmFpbFxuICAgICAgaGxqcy5DT01NRU5UKCdbOyNdKD8hXFxzKiQpJywgJyQnKSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1xcJycsXG4gICAgICAgIGVuZDogJ1teXFxcXFxcXFxdXFwnJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgIGJlZ2luOiAnXFxcXHwnLCBlbmQ6ICdcXFxcfCcsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtiZWdpbjogJzB4WzAtOWEtZl0rJ30sIC8vaGV4XG4gICAgICAgICAgICB7YmVnaW46ICdcXFxcYi0/XFxcXGQrJ30gICAgICAgICAgIC8vYmFyZSBudW1iZXJcbiAgICAgICAgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAge2JlZ2luOiAnXlxcXFxzKlthLXpfXFxcXC5cXFxcJF1bYS16MC05X1xcXFwuXFxcXCRdKzonfSwgLy9HTlUgTUlQUyBzeW50YXhcbiAgICAgICAgICAgIHtiZWdpbjogJ15cXFxccypbMC05XSs6J30sIC8vIG51bWJlcmVkIGxvY2FsIGxhYmVsc1xuICAgICAgICAgICAge2JlZ2luOiAnWzAtOV0rW2JmXScgfSAgLy8gbnVtYmVyIGxvY2FsIGxhYmVsIHJlZmVyZW5jZSAoYmFja3dhcmRzLCBmb3J3YXJkcylcbiAgICAgICAgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XG4gICAgXSxcbiAgICBpbGxlZ2FsOiAnXFwvJ1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1pcHNhc207XG4iXSwic291cmNlUm9vdCI6IiJ9