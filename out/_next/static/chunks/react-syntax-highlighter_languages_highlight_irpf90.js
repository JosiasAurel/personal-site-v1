(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_irpf90"],{

/***/ "./node_modules/highlight.js/lib/languages/irpf90.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/irpf90.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: IRPF90
Author: Anthony Scemama <scemama@irsamc.ups-tlse.fr>
Description: IRPF90 is an open-source Fortran code generator
Website: http://irpf90.ups-tlse.fr
Category: scientific
*/

function irpf90(hljs) {
  var PARAMS = {
    className: 'params',
    begin: '\\(', end: '\\)'
  };

  var F_KEYWORDS = {
    literal: '.False. .True.',
    keyword: 'kind do while private call intrinsic where elsewhere ' +
      'type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then ' +
      'public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. ' +
      'goto save else use module select case ' +
      'access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit ' +
      'continue format pause cycle exit ' +
      'c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg ' +
      'synchronous nopass non_overridable pass protected volatile abstract extends import ' +
      'non_intrinsic value deferred generic final enumerator class associate bind enum ' +
      'c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t ' +
      'c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double ' +
      'c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr ' +
      'c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer ' +
      'c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor ' +
      'numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ' +
      'ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive ' +
      'pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure ' +
      'integer real character complex logical dimension allocatable|10 parameter ' +
      'external implicit|10 none double precision assign intent optional pointer ' +
      'target in out common equivalence data ' +
      // IRPF90 special keywords
      'begin_provider &begin_provider end_provider begin_shell end_shell begin_template end_template subst assert touch ' +
      'soft_touch provide no_dep free irp_if irp_else irp_endif irp_write irp_read',
    built_in: 'alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint ' +
      'dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl ' +
      'algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama ' +
      'iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod ' +
      'qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log ' +
      'log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate ' +
      'adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product ' +
      'eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul ' +
      'maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product ' +
      'radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind ' +
      'set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer ' +
      'dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ' +
      'ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode ' +
      'is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_of '  +
      'acosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 ' +
      'atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits ' +
      'bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr ' +
      'num_images parity popcnt poppar shifta shiftl shiftr this_image ' +
      // IRPF90 special built_ins
      'IRP_ALIGN irp_here'
  };
  return {
    name: 'IRPF90',
    case_insensitive: true,
    keywords: F_KEYWORDS,
    illegal: /\/\*/,
    contains: [
      hljs.inherit(hljs.APOS_STRING_MODE, {className: 'string', relevance: 0}),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {className: 'string', relevance: 0}),
      {
        className: 'function',
        beginKeywords: 'subroutine function program',
        illegal: '[${=\\n]',
        contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]
      },
      hljs.COMMENT('!', '$', {relevance: 0}),
      hljs.COMMENT('begin_doc', 'end_doc', {relevance: 10}),
      {
        className: 'number',
        // regex in both fortran and irpf90 should match
        begin: '(?=\\b|\\+|\\-|\\.)(?:\\.|\\d+\\.?)\\d*([de][+-]?\\d+)?(_[a-z_\\d]+)?',
        relevance: 0
      }
    ]
  };
}

module.exports = irpf90;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2lycGY5MC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGtDQUFrQztBQUM3RSw0Q0FBNEMsa0NBQWtDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLE9BQU87QUFDUCw4QkFBOEIsYUFBYTtBQUMzQyw0Q0FBNEMsY0FBYztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9pcnBmOTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IElSUEY5MFxuQXV0aG9yOiBBbnRob255IFNjZW1hbWEgPHNjZW1hbWFAaXJzYW1jLnVwcy10bHNlLmZyPlxuRGVzY3JpcHRpb246IElSUEY5MCBpcyBhbiBvcGVuLXNvdXJjZSBGb3J0cmFuIGNvZGUgZ2VuZXJhdG9yXG5XZWJzaXRlOiBodHRwOi8vaXJwZjkwLnVwcy10bHNlLmZyXG5DYXRlZ29yeTogc2NpZW50aWZpY1xuKi9cblxuZnVuY3Rpb24gaXJwZjkwKGhsanMpIHtcbiAgdmFyIFBBUkFNUyA9IHtcbiAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgIGJlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKSdcbiAgfTtcblxuICB2YXIgRl9LRVlXT1JEUyA9IHtcbiAgICBsaXRlcmFsOiAnLkZhbHNlLiAuVHJ1ZS4nLFxuICAgIGtleXdvcmQ6ICdraW5kIGRvIHdoaWxlIHByaXZhdGUgY2FsbCBpbnRyaW5zaWMgd2hlcmUgZWxzZXdoZXJlICcgK1xuICAgICAgJ3R5cGUgZW5kdHlwZSBlbmRtb2R1bGUgZW5kc2VsZWN0IGVuZGludGVyZmFjZSBlbmQgZW5kZG8gZW5kaWYgaWYgZm9yYWxsIGVuZGZvcmFsbCBvbmx5IGNvbnRhaW5zIGRlZmF1bHQgcmV0dXJuIHN0b3AgdGhlbiAnICtcbiAgICAgICdwdWJsaWMgc3Vicm91dGluZXwxMCBmdW5jdGlvbiBwcm9ncmFtIC5hbmQuIC5vci4gLm5vdC4gLmxlLiAuZXEuIC5nZS4gLmd0LiAubHQuICcgK1xuICAgICAgJ2dvdG8gc2F2ZSBlbHNlIHVzZSBtb2R1bGUgc2VsZWN0IGNhc2UgJyArXG4gICAgICAnYWNjZXNzIGJsYW5rIGRpcmVjdCBleGlzdCBmaWxlIGZtdCBmb3JtIGZvcm1hdHRlZCBpb3N0YXQgbmFtZSBuYW1lZCBuZXh0cmVjIG51bWJlciBvcGVuZWQgcmVjIHJlY2wgc2VxdWVudGlhbCBzdGF0dXMgdW5mb3JtYXR0ZWQgdW5pdCAnICtcbiAgICAgICdjb250aW51ZSBmb3JtYXQgcGF1c2UgY3ljbGUgZXhpdCAnICtcbiAgICAgICdjX251bGxfY2hhciBjX2FsZXJ0IGNfYmFja3NwYWNlIGNfZm9ybV9mZWVkIGZsdXNoIHdhaXQgZGVjaW1hbCByb3VuZCBpb21zZyAnICtcbiAgICAgICdzeW5jaHJvbm91cyBub3Bhc3Mgbm9uX292ZXJyaWRhYmxlIHBhc3MgcHJvdGVjdGVkIHZvbGF0aWxlIGFic3RyYWN0IGV4dGVuZHMgaW1wb3J0ICcgK1xuICAgICAgJ25vbl9pbnRyaW5zaWMgdmFsdWUgZGVmZXJyZWQgZ2VuZXJpYyBmaW5hbCBlbnVtZXJhdG9yIGNsYXNzIGFzc29jaWF0ZSBiaW5kIGVudW0gJyArXG4gICAgICAnY19pbnQgY19zaG9ydCBjX2xvbmcgY19sb25nX2xvbmcgY19zaWduZWRfY2hhciBjX3NpemVfdCBjX2ludDhfdCBjX2ludDE2X3QgY19pbnQzMl90IGNfaW50NjRfdCBjX2ludF9sZWFzdDhfdCBjX2ludF9sZWFzdDE2X3QgJyArXG4gICAgICAnY19pbnRfbGVhc3QzMl90IGNfaW50X2xlYXN0NjRfdCBjX2ludF9mYXN0OF90IGNfaW50X2Zhc3QxNl90IGNfaW50X2Zhc3QzMl90IGNfaW50X2Zhc3Q2NF90IGNfaW50bWF4X3QgQ19pbnRwdHJfdCBjX2Zsb2F0IGNfZG91YmxlICcgK1xuICAgICAgJ2NfbG9uZ19kb3VibGUgY19mbG9hdF9jb21wbGV4IGNfZG91YmxlX2NvbXBsZXggY19sb25nX2RvdWJsZV9jb21wbGV4IGNfYm9vbCBjX2NoYXIgY19udWxsX3B0ciBjX251bGxfZnVucHRyICcgK1xuICAgICAgJ2NfbmV3X2xpbmUgY19jYXJyaWFnZV9yZXR1cm4gY19ob3Jpem9udGFsX3RhYiBjX3ZlcnRpY2FsX3RhYiBpc29fY19iaW5kaW5nIGNfbG9jIGNfZnVubG9jIGNfYXNzb2NpYXRlZCAgY19mX3BvaW50ZXIgJyArXG4gICAgICAnY19wdHIgY19mdW5wdHIgaXNvX2ZvcnRyYW5fZW52IGNoYXJhY3Rlcl9zdG9yYWdlX3NpemUgZXJyb3JfdW5pdCBmaWxlX3N0b3JhZ2Vfc2l6ZSBpbnB1dF91bml0IGlvc3RhdF9lbmQgaW9zdGF0X2VvciAnICtcbiAgICAgICdudW1lcmljX3N0b3JhZ2Vfc2l6ZSBvdXRwdXRfdW5pdCBjX2ZfcHJvY3BvaW50ZXIgaWVlZV9hcml0aG1ldGljIGllZWVfc3VwcG9ydF91bmRlcmZsb3dfY29udHJvbCAnICtcbiAgICAgICdpZWVlX2dldF91bmRlcmZsb3dfbW9kZSBpZWVlX3NldF91bmRlcmZsb3dfbW9kZSBuZXd1bml0IGNvbnRpZ3VvdXMgcmVjdXJzaXZlICcgK1xuICAgICAgJ3BhZCBwb3NpdGlvbiBhY3Rpb24gZGVsaW0gcmVhZHdyaXRlIGVvciBhZHZhbmNlIG5tbCBpbnRlcmZhY2UgcHJvY2VkdXJlIG5hbWVsaXN0IGluY2x1ZGUgc2VxdWVuY2UgZWxlbWVudGFsIHB1cmUgJyArXG4gICAgICAnaW50ZWdlciByZWFsIGNoYXJhY3RlciBjb21wbGV4IGxvZ2ljYWwgZGltZW5zaW9uIGFsbG9jYXRhYmxlfDEwIHBhcmFtZXRlciAnICtcbiAgICAgICdleHRlcm5hbCBpbXBsaWNpdHwxMCBub25lIGRvdWJsZSBwcmVjaXNpb24gYXNzaWduIGludGVudCBvcHRpb25hbCBwb2ludGVyICcgK1xuICAgICAgJ3RhcmdldCBpbiBvdXQgY29tbW9uIGVxdWl2YWxlbmNlIGRhdGEgJyArXG4gICAgICAvLyBJUlBGOTAgc3BlY2lhbCBrZXl3b3Jkc1xuICAgICAgJ2JlZ2luX3Byb3ZpZGVyICZiZWdpbl9wcm92aWRlciBlbmRfcHJvdmlkZXIgYmVnaW5fc2hlbGwgZW5kX3NoZWxsIGJlZ2luX3RlbXBsYXRlIGVuZF90ZW1wbGF0ZSBzdWJzdCBhc3NlcnQgdG91Y2ggJyArXG4gICAgICAnc29mdF90b3VjaCBwcm92aWRlIG5vX2RlcCBmcmVlIGlycF9pZiBpcnBfZWxzZSBpcnBfZW5kaWYgaXJwX3dyaXRlIGlycF9yZWFkJyxcbiAgICBidWlsdF9pbjogJ2Fsb2cgYWxvZzEwIGFtYXgwIGFtYXgxIGFtaW4wIGFtaW4xIGFtb2QgY2FicyBjY29zIGNleHAgY2xvZyBjc2luIGNzcXJ0IGRhYnMgZGFjb3MgZGFzaW4gZGF0YW4gZGF0YW4yIGRjb3MgZGNvc2ggZGRpbSBkZXhwIGRpbnQgJyArXG4gICAgICAnZGxvZyBkbG9nMTAgZG1heDEgZG1pbjEgZG1vZCBkbmludCBkc2lnbiBkc2luIGRzaW5oIGRzcXJ0IGR0YW4gZHRhbmggZmxvYXQgaWFicyBpZGltIGlkaW50IGlkbmludCBpZml4IGlzaWduIG1heDAgbWF4MSBtaW4wIG1pbjEgc25nbCAnICtcbiAgICAgICdhbGdhbWEgY2RhYnMgY2Rjb3MgY2RleHAgY2Rsb2cgY2RzaW4gY2RzcXJ0IGNxYWJzIGNxY29zIGNxZXhwIGNxbG9nIGNxc2luIGNxc3FydCBkY21wbHggZGNvbmpnIGRlcmYgZGVyZmMgZGZsb2F0IGRnYW1tYSBkaW1hZyBkbGdhbWEgJyArXG4gICAgICAnaXFpbnQgcWFicyBxYWNvcyBxYXNpbiBxYXRhbiBxYXRhbjIgcWNtcGx4IHFjb25qZyBxY29zIHFjb3NoIHFkaW0gcWVyZiBxZXJmYyBxZXhwIHFnYW1tYSBxaW1hZyBxbGdhbWEgcWxvZyBxbG9nMTAgcW1heDEgcW1pbjEgcW1vZCAnICtcbiAgICAgICdxbmludCBxc2lnbiBxc2luIHFzaW5oIHFzcXJ0IHF0YW4gcXRhbmggYWJzIGFjb3MgYWltYWcgYWludCBhbmludCBhc2luIGF0YW4gYXRhbjIgY2hhciBjbXBseCBjb25qZyBjb3MgY29zaCBleHAgaWNoYXIgaW5kZXggaW50IGxvZyAnICtcbiAgICAgICdsb2cxMCBtYXggbWluIG5pbnQgc2lnbiBzaW4gc2luaCBzcXJ0IHRhbiB0YW5oIHByaW50IHdyaXRlIGRpbSBsZ2UgbGd0IGxsZSBsbHQgbW9kIG51bGxpZnkgYWxsb2NhdGUgZGVhbGxvY2F0ZSAnICtcbiAgICAgICdhZGp1c3RsIGFkanVzdHIgYWxsIGFsbG9jYXRlZCBhbnkgYXNzb2NpYXRlZCBiaXRfc2l6ZSBidGVzdCBjZWlsaW5nIGNvdW50IGNzaGlmdCBkYXRlX2FuZF90aW1lIGRpZ2l0cyBkb3RfcHJvZHVjdCAnICtcbiAgICAgICdlb3NoaWZ0IGVwc2lsb24gZXhwb25lbnQgZmxvb3IgZnJhY3Rpb24gaHVnZSBpYW5kIGliY2xyIGliaXRzIGlic2V0IGllb3IgaW9yIGlzaGZ0IGlzaGZ0YyBsYm91bmQgbGVuX3RyaW0gbWF0bXVsICcgK1xuICAgICAgJ21heGV4cG9uZW50IG1heGxvYyBtYXh2YWwgbWVyZ2UgbWluZXhwb25lbnQgbWlubG9jIG1pbnZhbCBtb2R1bG8gbXZiaXRzIG5lYXJlc3QgcGFjayBwcmVzZW50IHByb2R1Y3QgJyArXG4gICAgICAncmFkaXggcmFuZG9tX251bWJlciByYW5kb21fc2VlZCByYW5nZSByZXBlYXQgcmVzaGFwZSBycnNwYWNpbmcgc2NhbGUgc2NhbiBzZWxlY3RlZF9pbnRfa2luZCBzZWxlY3RlZF9yZWFsX2tpbmQgJyArXG4gICAgICAnc2V0X2V4cG9uZW50IHNoYXBlIHNpemUgc3BhY2luZyBzcHJlYWQgc3VtIHN5c3RlbV9jbG9jayB0aW55IHRyYW5zcG9zZSB0cmltIHVib3VuZCB1bnBhY2sgdmVyaWZ5IGFjaGFyIGlhY2hhciB0cmFuc2ZlciAnICtcbiAgICAgICdkYmxlIGVudHJ5IGRwcm9kIGNwdV90aW1lIGNvbW1hbmRfYXJndW1lbnRfY291bnQgZ2V0X2NvbW1hbmQgZ2V0X2NvbW1hbmRfYXJndW1lbnQgZ2V0X2Vudmlyb25tZW50X3ZhcmlhYmxlIGlzX2lvc3RhdF9lbmQgJyArXG4gICAgICAnaWVlZV9hcml0aG1ldGljIGllZWVfc3VwcG9ydF91bmRlcmZsb3dfY29udHJvbCBpZWVlX2dldF91bmRlcmZsb3dfbW9kZSBpZWVlX3NldF91bmRlcmZsb3dfbW9kZSAnICtcbiAgICAgICdpc19pb3N0YXRfZW9yIG1vdmVfYWxsb2MgbmV3X2xpbmUgc2VsZWN0ZWRfY2hhcl9raW5kIHNhbWVfdHlwZV9hcyBleHRlbmRzX3R5cGVfb2YgJyAgK1xuICAgICAgJ2Fjb3NoIGFzaW5oIGF0YW5oIGJlc3NlbF9qMCBiZXNzZWxfajEgYmVzc2VsX2puIGJlc3NlbF95MCBiZXNzZWxfeTEgYmVzc2VsX3luIGVyZiBlcmZjIGVyZmNfc2NhbGVkIGdhbW1hIGxvZ19nYW1tYSBoeXBvdCBub3JtMiAnICtcbiAgICAgICdhdG9taWNfZGVmaW5lIGF0b21pY19yZWYgZXhlY3V0ZV9jb21tYW5kX2xpbmUgbGVhZHogdHJhaWx6IHN0b3JhZ2Vfc2l6ZSBtZXJnZV9iaXRzICcgK1xuICAgICAgJ2JnZSBiZ3QgYmxlIGJsdCBkc2hpZnRsIGRzaGlmdHIgZmluZGxvYyBpYWxsIGlhbnkgaXBhcml0eSBpbWFnZV9pbmRleCBsY29ib3VuZCB1Y29ib3VuZCBtYXNrbCBtYXNrciAnICtcbiAgICAgICdudW1faW1hZ2VzIHBhcml0eSBwb3BjbnQgcG9wcGFyIHNoaWZ0YSBzaGlmdGwgc2hpZnRyIHRoaXNfaW1hZ2UgJyArXG4gICAgICAvLyBJUlBGOTAgc3BlY2lhbCBidWlsdF9pbnNcbiAgICAgICdJUlBfQUxJR04gaXJwX2hlcmUnXG4gIH07XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0lSUEY5MCcsXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3JkczogRl9LRVlXT1JEUyxcbiAgICBpbGxlZ2FsOiAvXFwvXFwqLyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5pbmhlcml0KGhsanMuQVBPU19TVFJJTkdfTU9ERSwge2NsYXNzTmFtZTogJ3N0cmluZycsIHJlbGV2YW5jZTogMH0pLFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtjbGFzc05hbWU6ICdzdHJpbmcnLCByZWxldmFuY2U6IDB9KSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnc3Vicm91dGluZSBmdW5jdGlvbiBwcm9ncmFtJyxcbiAgICAgICAgaWxsZWdhbDogJ1skez1cXFxcbl0nLFxuICAgICAgICBjb250YWluczogW2hsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFLCBQQVJBTVNdXG4gICAgICB9LFxuICAgICAgaGxqcy5DT01NRU5UKCchJywgJyQnLCB7cmVsZXZhbmNlOiAwfSksXG4gICAgICBobGpzLkNPTU1FTlQoJ2JlZ2luX2RvYycsICdlbmRfZG9jJywge3JlbGV2YW5jZTogMTB9KSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgLy8gcmVnZXggaW4gYm90aCBmb3J0cmFuIGFuZCBpcnBmOTAgc2hvdWxkIG1hdGNoXG4gICAgICAgIGJlZ2luOiAnKD89XFxcXGJ8XFxcXCt8XFxcXC18XFxcXC4pKD86XFxcXC58XFxcXGQrXFxcXC4/KVxcXFxkKihbZGVdWystXT9cXFxcZCspPyhfW2Etel9cXFxcZF0rKT8nLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXJwZjkwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==