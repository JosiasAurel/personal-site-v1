(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_llvm"],{

/***/ "./node_modules/highlight.js/lib/languages/llvm.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/llvm.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: LLVM IR
Author: Michael Rodler <contact@f0rki.at>
Description: language used as intermediate representation in the LLVM compiler framework
Website: https://llvm.org/docs/LangRef.html
Category: assembler
*/

function llvm(hljs) {
  var identifier = '([-a-zA-Z$._][\\w\\-$.]*)';
  return {
    name: 'LLVM IR',
    keywords:
      'begin end true false declare define global ' +
      'constant private linker_private internal ' +
      'available_externally linkonce linkonce_odr weak ' +
      'weak_odr appending dllimport dllexport common ' +
      'default hidden protected extern_weak external ' +
      'thread_local zeroinitializer undef null to tail ' +
      'target triple datalayout volatile nuw nsw nnan ' +
      'ninf nsz arcp fast exact inbounds align ' +
      'addrspace section alias module asm sideeffect ' +
      'gc dbg linker_private_weak attributes blockaddress ' +
      'initialexec localdynamic localexec prefix unnamed_addr ' +
      'ccc fastcc coldcc x86_stdcallcc x86_fastcallcc ' +
      'arm_apcscc arm_aapcscc arm_aapcs_vfpcc ptx_device ' +
      'ptx_kernel intel_ocl_bicc msp430_intrcc spir_func ' +
      'spir_kernel x86_64_sysvcc x86_64_win64cc x86_thiscallcc ' +
      'cc c signext zeroext inreg sret nounwind ' +
      'noreturn noalias nocapture byval nest readnone ' +
      'readonly inlinehint noinline alwaysinline optsize ssp ' +
      'sspreq noredzone noimplicitfloat naked builtin cold ' +
      'nobuiltin noduplicate nonlazybind optnone returns_twice ' +
      'sanitize_address sanitize_memory sanitize_thread sspstrong ' +
      'uwtable returned type opaque eq ne slt sgt ' +
      'sle sge ult ugt ule uge oeq one olt ogt ' +
      'ole oge ord uno ueq une x acq_rel acquire ' +
      'alignstack atomic catch cleanup filter inteldialect ' +
      'max min monotonic nand personality release seq_cst ' +
      'singlethread umax umin unordered xchg add fadd ' +
      'sub fsub mul fmul udiv sdiv fdiv urem srem ' +
      'frem shl lshr ashr and or xor icmp fcmp ' +
      'phi call trunc zext sext fptrunc fpext uitofp ' +
      'sitofp fptoui fptosi inttoptr ptrtoint bitcast ' +
      'addrspacecast select va_arg ret br switch invoke ' +
      'unwind unreachable indirectbr landingpad resume ' +
      'malloc alloca free load store getelementptr ' +
      'extractelement insertelement shufflevector getresult ' +
      'extractvalue insertvalue atomicrmw cmpxchg fence ' +
      'argmemonly double',
    contains: [
      {
        className: 'keyword',
        begin: 'i\\d+'
      },
      hljs.COMMENT(
        ';', '\\n', {relevance: 0}
      ),
      // Double quote string
      hljs.QUOTE_STRING_MODE,
      {
        className: 'string',
        variants: [
          // Double-quoted string
          { begin: '"', end: '[^\\\\]"' },
        ],
        relevance: 0
      },
      {
        className: 'title',
        variants: [
          { begin: '@' + identifier },
          { begin: '@\\d+' },
          { begin: '!' + identifier },
          { begin: '!\\d+' + identifier }
        ]
      },
      {
        className: 'symbol',
        variants: [
          { begin: '%' + identifier },
          { begin: '%\\d+' },
          { begin: '#\\d+' },
        ]
      },
      {
        className: 'number',
        variants: [
            { begin: '0[xX][a-fA-F0-9]+' },
            { begin: '-?\\d+(?:[.]\\d+)?(?:[eE][-+]?\\d+(?:[.]\\d+)?)?' }
        ],
        relevance: 0
      },
    ]
  };
}

module.exports = llvm;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2xsdm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhCQUE4QjtBQUN6QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMEJBQTBCO0FBQ3JDLFdBQVcsaUJBQWlCO0FBQzVCLFdBQVcsMEJBQTBCO0FBQ3JDLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxXQUFXLDBCQUEwQjtBQUNyQyxXQUFXLGlCQUFpQjtBQUM1QixXQUFXLGlCQUFpQjtBQUM1QjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QjtBQUMxQyxhQUFhO0FBQ2I7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9sbHZtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBMTFZNIElSXG5BdXRob3I6IE1pY2hhZWwgUm9kbGVyIDxjb250YWN0QGYwcmtpLmF0PlxuRGVzY3JpcHRpb246IGxhbmd1YWdlIHVzZWQgYXMgaW50ZXJtZWRpYXRlIHJlcHJlc2VudGF0aW9uIGluIHRoZSBMTFZNIGNvbXBpbGVyIGZyYW1ld29ya1xuV2Vic2l0ZTogaHR0cHM6Ly9sbHZtLm9yZy9kb2NzL0xhbmdSZWYuaHRtbFxuQ2F0ZWdvcnk6IGFzc2VtYmxlclxuKi9cblxuZnVuY3Rpb24gbGx2bShobGpzKSB7XG4gIHZhciBpZGVudGlmaWVyID0gJyhbLWEtekEtWiQuX11bXFxcXHdcXFxcLSQuXSopJztcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnTExWTSBJUicsXG4gICAga2V5d29yZHM6XG4gICAgICAnYmVnaW4gZW5kIHRydWUgZmFsc2UgZGVjbGFyZSBkZWZpbmUgZ2xvYmFsICcgK1xuICAgICAgJ2NvbnN0YW50IHByaXZhdGUgbGlua2VyX3ByaXZhdGUgaW50ZXJuYWwgJyArXG4gICAgICAnYXZhaWxhYmxlX2V4dGVybmFsbHkgbGlua29uY2UgbGlua29uY2Vfb2RyIHdlYWsgJyArXG4gICAgICAnd2Vha19vZHIgYXBwZW5kaW5nIGRsbGltcG9ydCBkbGxleHBvcnQgY29tbW9uICcgK1xuICAgICAgJ2RlZmF1bHQgaGlkZGVuIHByb3RlY3RlZCBleHRlcm5fd2VhayBleHRlcm5hbCAnICtcbiAgICAgICd0aHJlYWRfbG9jYWwgemVyb2luaXRpYWxpemVyIHVuZGVmIG51bGwgdG8gdGFpbCAnICtcbiAgICAgICd0YXJnZXQgdHJpcGxlIGRhdGFsYXlvdXQgdm9sYXRpbGUgbnV3IG5zdyBubmFuICcgK1xuICAgICAgJ25pbmYgbnN6IGFyY3AgZmFzdCBleGFjdCBpbmJvdW5kcyBhbGlnbiAnICtcbiAgICAgICdhZGRyc3BhY2Ugc2VjdGlvbiBhbGlhcyBtb2R1bGUgYXNtIHNpZGVlZmZlY3QgJyArXG4gICAgICAnZ2MgZGJnIGxpbmtlcl9wcml2YXRlX3dlYWsgYXR0cmlidXRlcyBibG9ja2FkZHJlc3MgJyArXG4gICAgICAnaW5pdGlhbGV4ZWMgbG9jYWxkeW5hbWljIGxvY2FsZXhlYyBwcmVmaXggdW5uYW1lZF9hZGRyICcgK1xuICAgICAgJ2NjYyBmYXN0Y2MgY29sZGNjIHg4Nl9zdGRjYWxsY2MgeDg2X2Zhc3RjYWxsY2MgJyArXG4gICAgICAnYXJtX2FwY3NjYyBhcm1fYWFwY3NjYyBhcm1fYWFwY3NfdmZwY2MgcHR4X2RldmljZSAnICtcbiAgICAgICdwdHhfa2VybmVsIGludGVsX29jbF9iaWNjIG1zcDQzMF9pbnRyY2Mgc3Bpcl9mdW5jICcgK1xuICAgICAgJ3NwaXJfa2VybmVsIHg4Nl82NF9zeXN2Y2MgeDg2XzY0X3dpbjY0Y2MgeDg2X3RoaXNjYWxsY2MgJyArXG4gICAgICAnY2MgYyBzaWduZXh0IHplcm9leHQgaW5yZWcgc3JldCBub3Vud2luZCAnICtcbiAgICAgICdub3JldHVybiBub2FsaWFzIG5vY2FwdHVyZSBieXZhbCBuZXN0IHJlYWRub25lICcgK1xuICAgICAgJ3JlYWRvbmx5IGlubGluZWhpbnQgbm9pbmxpbmUgYWx3YXlzaW5saW5lIG9wdHNpemUgc3NwICcgK1xuICAgICAgJ3NzcHJlcSBub3JlZHpvbmUgbm9pbXBsaWNpdGZsb2F0IG5ha2VkIGJ1aWx0aW4gY29sZCAnICtcbiAgICAgICdub2J1aWx0aW4gbm9kdXBsaWNhdGUgbm9ubGF6eWJpbmQgb3B0bm9uZSByZXR1cm5zX3R3aWNlICcgK1xuICAgICAgJ3Nhbml0aXplX2FkZHJlc3Mgc2FuaXRpemVfbWVtb3J5IHNhbml0aXplX3RocmVhZCBzc3BzdHJvbmcgJyArXG4gICAgICAndXd0YWJsZSByZXR1cm5lZCB0eXBlIG9wYXF1ZSBlcSBuZSBzbHQgc2d0ICcgK1xuICAgICAgJ3NsZSBzZ2UgdWx0IHVndCB1bGUgdWdlIG9lcSBvbmUgb2x0IG9ndCAnICtcbiAgICAgICdvbGUgb2dlIG9yZCB1bm8gdWVxIHVuZSB4IGFjcV9yZWwgYWNxdWlyZSAnICtcbiAgICAgICdhbGlnbnN0YWNrIGF0b21pYyBjYXRjaCBjbGVhbnVwIGZpbHRlciBpbnRlbGRpYWxlY3QgJyArXG4gICAgICAnbWF4IG1pbiBtb25vdG9uaWMgbmFuZCBwZXJzb25hbGl0eSByZWxlYXNlIHNlcV9jc3QgJyArXG4gICAgICAnc2luZ2xldGhyZWFkIHVtYXggdW1pbiB1bm9yZGVyZWQgeGNoZyBhZGQgZmFkZCAnICtcbiAgICAgICdzdWIgZnN1YiBtdWwgZm11bCB1ZGl2IHNkaXYgZmRpdiB1cmVtIHNyZW0gJyArXG4gICAgICAnZnJlbSBzaGwgbHNociBhc2hyIGFuZCBvciB4b3IgaWNtcCBmY21wICcgK1xuICAgICAgJ3BoaSBjYWxsIHRydW5jIHpleHQgc2V4dCBmcHRydW5jIGZwZXh0IHVpdG9mcCAnICtcbiAgICAgICdzaXRvZnAgZnB0b3VpIGZwdG9zaSBpbnR0b3B0ciBwdHJ0b2ludCBiaXRjYXN0ICcgK1xuICAgICAgJ2FkZHJzcGFjZWNhc3Qgc2VsZWN0IHZhX2FyZyByZXQgYnIgc3dpdGNoIGludm9rZSAnICtcbiAgICAgICd1bndpbmQgdW5yZWFjaGFibGUgaW5kaXJlY3RiciBsYW5kaW5ncGFkIHJlc3VtZSAnICtcbiAgICAgICdtYWxsb2MgYWxsb2NhIGZyZWUgbG9hZCBzdG9yZSBnZXRlbGVtZW50cHRyICcgK1xuICAgICAgJ2V4dHJhY3RlbGVtZW50IGluc2VydGVsZW1lbnQgc2h1ZmZsZXZlY3RvciBnZXRyZXN1bHQgJyArXG4gICAgICAnZXh0cmFjdHZhbHVlIGluc2VydHZhbHVlIGF0b21pY3JtdyBjbXB4Y2hnIGZlbmNlICcgK1xuICAgICAgJ2FyZ21lbW9ubHkgZG91YmxlJyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgYmVnaW46ICdpXFxcXGQrJ1xuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJzsnLCAnXFxcXG4nLCB7cmVsZXZhbmNlOiAwfVxuICAgICAgKSxcbiAgICAgIC8vIERvdWJsZSBxdW90ZSBzdHJpbmdcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgLy8gRG91YmxlLXF1b3RlZCBzdHJpbmdcbiAgICAgICAgICB7IGJlZ2luOiAnXCInLCBlbmQ6ICdbXlxcXFxcXFxcXVwiJyB9LFxuICAgICAgICBdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7IGJlZ2luOiAnQCcgKyBpZGVudGlmaWVyIH0sXG4gICAgICAgICAgeyBiZWdpbjogJ0BcXFxcZCsnIH0sXG4gICAgICAgICAgeyBiZWdpbjogJyEnICsgaWRlbnRpZmllciB9LFxuICAgICAgICAgIHsgYmVnaW46ICchXFxcXGQrJyArIGlkZW50aWZpZXIgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHsgYmVnaW46ICclJyArIGlkZW50aWZpZXIgfSxcbiAgICAgICAgICB7IGJlZ2luOiAnJVxcXFxkKycgfSxcbiAgICAgICAgICB7IGJlZ2luOiAnI1xcXFxkKycgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46ICcwW3hYXVthLWZBLUYwLTldKycgfSxcbiAgICAgICAgICAgIHsgYmVnaW46ICctP1xcXFxkKyg/OlsuXVxcXFxkKyk/KD86W2VFXVstK10/XFxcXGQrKD86Wy5dXFxcXGQrKT8pPycgfVxuICAgICAgICBdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxsdm07XG4iXSwic291cmNlUm9vdCI6IiJ9