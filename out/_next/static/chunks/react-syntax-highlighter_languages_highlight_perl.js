(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_perl"],{

/***/ "./node_modules/highlight.js/lib/languages/perl.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/perl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Perl
Author: Peter Leonov <gojpeg@yandex.ru>
Website: https://www.perl.org
Category: common
*/

function perl(hljs) {
  var PERL_KEYWORDS = {
    $pattern: /[\w.]+/,
    keyword: 'getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ' +
    'ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime ' +
    'readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qq ' +
    'fileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent ' +
    'shutdown dump chomp connect getsockname die socketpair close flock exists index shmget ' +
    'sub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr ' +
    'unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 ' +
    'getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline ' +
    'endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand ' +
    'mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink ' +
    'getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr ' +
    'untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link ' +
    'getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller ' +
    'lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and ' +
    'sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 ' +
    'chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach ' +
    'tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedir ' +
    'ioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe ' +
    'atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when'
  };
  var SUBST = {
    className: 'subst',
    begin: '[$@]\\{', end: '\\}',
    keywords: PERL_KEYWORDS
  };
  var METHOD = {
    begin: '->{', end: '}'
    // contains defined later
  };
  var VAR = {
    variants: [
      {begin: /\$\d/},
      {begin: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/},
      {begin: /[\$%@][^\s\w{]/, relevance: 0}
    ]
  };
  var STRING_CONTAINS = [hljs.BACKSLASH_ESCAPE, SUBST, VAR];
  var PERL_DEFAULT_CONTAINS = [
    VAR,
    hljs.HASH_COMMENT_MODE,
    hljs.COMMENT(
      '^\\=\\w',
      '\\=cut',
      {
        endsWithParent: true
      }
    ),
    METHOD,
    {
      className: 'string',
      contains: STRING_CONTAINS,
      variants: [
        {
          begin: 'q[qwxr]?\\s*\\(', end: '\\)',
          relevance: 5
        },
        {
          begin: 'q[qwxr]?\\s*\\[', end: '\\]',
          relevance: 5
        },
        {
          begin: 'q[qwxr]?\\s*\\{', end: '\\}',
          relevance: 5
        },
        {
          begin: 'q[qwxr]?\\s*\\|', end: '\\|',
          relevance: 5
        },
        {
          begin: 'q[qwxr]?\\s*\\<', end: '\\>',
          relevance: 5
        },
        {
          begin: 'qw\\s+q', end: 'q',
          relevance: 5
        },
        {
          begin: '\'', end: '\'',
          contains: [hljs.BACKSLASH_ESCAPE]
        },
        {
          begin: '"', end: '"'
        },
        {
          begin: '`', end: '`',
          contains: [hljs.BACKSLASH_ESCAPE]
        },
        {
          begin: '{\\w+}',
          contains: [],
          relevance: 0
        },
        {
          begin: '\-?\\w+\\s*\\=\\>',
          contains: [],
          relevance: 0
        }
      ]
    },
    {
      className: 'number',
      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
      relevance: 0
    },
    { // regexp container
      begin: '(\\/\\/|' + hljs.RE_STARTERS_RE + '|\\b(split|return|print|reverse|grep)\\b)\\s*',
      keywords: 'split return print reverse grep',
      relevance: 0,
      contains: [
        hljs.HASH_COMMENT_MODE,
        {
          className: 'regexp',
          begin: '(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*',
          relevance: 10
        },
        {
          className: 'regexp',
          begin: '(m|qr)?/', end: '/[a-z]*',
          contains: [hljs.BACKSLASH_ESCAPE],
          relevance: 0 // allows empty "//" which is a common comment delimiter in other languages
        }
      ]
    },
    {
      className: 'function',
      beginKeywords: 'sub', end: '(\\s*\\(.*?\\))?[;{]', excludeEnd: true,
      relevance: 5,
      contains: [hljs.TITLE_MODE]
    },
    {
      begin: '-\\w\\b',
      relevance: 0
    },
    {
      begin: "^__DATA__$",
      end: "^__END__$",
      subLanguage: 'mojolicious',
      contains: [
        {
            begin: "^@@.*",
            end: "$",
            className: "comment"
        }
      ]
    }
  ];
  SUBST.contains = PERL_DEFAULT_CONTAINS;
  METHOD.contains = PERL_DEFAULT_CONTAINS;

  return {
    name: 'Perl',
    aliases: ['pl', 'pm'],
    keywords: PERL_KEYWORDS,
    contains: PERL_DEFAULT_CONTAINS
  };
}

module.exports = perl;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3BlcmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sb0NBQW9DLElBQUksZUFBZTtBQUM5RCxPQUFPLHFCQUFxQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsaUNBQWlDLFlBQVk7QUFDN0M7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsbUJBQW1CLEtBQUs7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X3BlcmwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFBlcmxcbkF1dGhvcjogUGV0ZXIgTGVvbm92IDxnb2pwZWdAeWFuZGV4LnJ1PlxuV2Vic2l0ZTogaHR0cHM6Ly93d3cucGVybC5vcmdcbkNhdGVnb3J5OiBjb21tb25cbiovXG5cbmZ1bmN0aW9uIHBlcmwoaGxqcykge1xuICB2YXIgUEVSTF9LRVlXT1JEUyA9IHtcbiAgICAkcGF0dGVybjogL1tcXHcuXSsvLFxuICAgIGtleXdvcmQ6ICdnZXRwd2VudCBnZXRzZXJ2ZW50IHF1b3RlbWV0YSBtc2dyY3Ygc2NhbGFyIGtpbGwgZGJtY2xvc2UgdW5kZWYgbGMgJyArXG4gICAgJ21hIHN5c3dyaXRlIHRyIHNlbmQgdW1hc2sgc3lzb3BlbiBzaG13cml0ZSB2ZWMgcXggdXRpbWUgbG9jYWwgb2N0IHNlbWN0bCBsb2NhbHRpbWUgJyArXG4gICAgJ3JlYWRwaXBlIGRvIHJldHVybiBmb3JtYXQgcmVhZCBzcHJpbnRmIGRibW9wZW4gcG9wIGdldHBncnAgbm90IGdldHB3bmFtIHJld2luZGRpciBxcSAnICtcbiAgICAnZmlsZW5vIHF3IGVuZHByb3RvZW50IHdhaXQgc2V0aG9zdGVudCBibGVzcyBzfDAgb3BlbmRpciBjb250aW51ZSBlYWNoIHNsZWVwIGVuZGdyZW50ICcgK1xuICAgICdzaHV0ZG93biBkdW1wIGNob21wIGNvbm5lY3QgZ2V0c29ja25hbWUgZGllIHNvY2tldHBhaXIgY2xvc2UgZmxvY2sgZXhpc3RzIGluZGV4IHNobWdldCAnICtcbiAgICAnc3ViIGZvciBlbmRwd2VudCByZWRvIGxzdGF0IG1zZ2N0bCBzZXRwZ3JwIGFicyBleGl0IHNlbGVjdCBwcmludCByZWYgZ2V0aG9zdGJ5YWRkciAnICtcbiAgICAndW5zaGlmdCBmY250bCBzeXNjYWxsIGdvdG8gZ2V0bmV0YnlhZGRyIGpvaW4gZ210aW1lIHN5bWxpbmsgc2VtZ2V0IHNwbGljZSB4fDAgJyArXG4gICAgJ2dldHBlZXJuYW1lIHJlY3YgbG9nIHNldHNvY2tvcHQgY29zIGxhc3QgcmV2ZXJzZSBnZXRob3N0YnluYW1lIGdldGdybmFtIHN0dWR5IGZvcm1saW5lICcgK1xuICAgICdlbmRob3N0ZW50IHRpbWVzIGNob3AgbGVuZ3RoIGdldGhvc3RlbnQgZ2V0bmV0ZW50IHBhY2sgZ2V0cHJvdG9lbnQgZ2V0c2VydmJ5bmFtZSByYW5kICcgK1xuICAgICdta2RpciBwb3MgY2htb2QgeXwwIHN1YnN0ciBlbmRuZXRlbnQgcHJpbnRmIG5leHQgb3BlbiBtc2dzbmQgcmVhZGRpciB1c2UgdW5saW5rICcgK1xuICAgICdnZXRzb2Nrb3B0IGdldHByaW9yaXR5IHJpbmRleCB3YW50YXJyYXkgaGV4IHN5c3RlbSBnZXRzZXJ2Ynlwb3J0IGVuZHNlcnZlbnQgaW50IGNociAnICtcbiAgICAndW50aWUgcm1kaXIgcHJvdG90eXBlIHRlbGwgbGlzdGVuIGZvcmsgc2htcmVhZCB1Y2ZpcnN0IHNldHByb3RvZW50IGVsc2Ugc3lzc2VlayBsaW5rICcgK1xuICAgICdnZXRncmdpZCBzaG1jdGwgd2FpdHBpZCB1bnBhY2sgZ2V0bmV0YnluYW1lIHJlc2V0IGNoZGlyIGdyZXAgc3BsaXQgcmVxdWlyZSBjYWxsZXIgJyArXG4gICAgJ2xjZmlyc3QgdW50aWwgd2FybiB3aGlsZSB2YWx1ZXMgc2hpZnQgdGVsbGRpciBnZXRwd3VpZCBteSBnZXRwcm90b2J5bnVtYmVyIGRlbGV0ZSBhbmQgJyArXG4gICAgJ3NvcnQgdWMgZGVmaW5lZCBzcmFuZCBhY2NlcHQgcGFja2FnZSBzZWVrZGlyIGdldHByb3RvYnluYW1lIHNlbW9wIG91ciByZW5hbWUgc2VlayBpZiBxfDAgJyArXG4gICAgJ2Nocm9vdCBzeXNyZWFkIHNldHB3ZW50IG5vIGNyeXB0IGdldGMgY2hvd24gc3FydCB3cml0ZSBzZXRuZXRlbnQgc2V0cHJpb3JpdHkgZm9yZWFjaCAnICtcbiAgICAndGllIHNpbiBtc2dnZXQgbWFwIHN0YXQgZ2V0bG9naW4gdW5sZXNzIGVsc2lmIHRydW5jYXRlIGV4ZWMga2V5cyBnbG9iIHRpZWQgY2xvc2VkaXIgJyArXG4gICAgJ2lvY3RsIHNvY2tldCByZWFkbGluayBldmFsIHhvciByZWFkbGluZSBiaW5tb2RlIHNldHNlcnZlbnQgZW9mIG9yZCBiaW5kIGFsYXJtIHBpcGUgJyArXG4gICAgJ2F0YW4yIGdldGdyZW50IGV4cCB0aW1lIHB1c2ggc2V0Z3JlbnQgZ3QgbHQgb3IgbmUgbXwwIGJyZWFrIGdpdmVuIHNheSBzdGF0ZSB3aGVuJ1xuICB9O1xuICB2YXIgU1VCU1QgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIGJlZ2luOiAnWyRAXVxcXFx7JywgZW5kOiAnXFxcXH0nLFxuICAgIGtleXdvcmRzOiBQRVJMX0tFWVdPUkRTXG4gIH07XG4gIHZhciBNRVRIT0QgPSB7XG4gICAgYmVnaW46ICctPnsnLCBlbmQ6ICd9J1xuICAgIC8vIGNvbnRhaW5zIGRlZmluZWQgbGF0ZXJcbiAgfTtcbiAgdmFyIFZBUiA9IHtcbiAgICB2YXJpYW50czogW1xuICAgICAge2JlZ2luOiAvXFwkXFxkL30sXG4gICAgICB7YmVnaW46IC9bXFwkJUBdKFxcXlxcd1xcYnwjXFx3Kyg6OlxcdyspKnx7XFx3K318XFx3Kyg6OlxcdyopKikvfSxcbiAgICAgIHtiZWdpbjogL1tcXCQlQF1bXlxcc1xcd3tdLywgcmVsZXZhbmNlOiAwfVxuICAgIF1cbiAgfTtcbiAgdmFyIFNUUklOR19DT05UQUlOUyA9IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEUsIFNVQlNULCBWQVJdO1xuICB2YXIgUEVSTF9ERUZBVUxUX0NPTlRBSU5TID0gW1xuICAgIFZBUixcbiAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuQ09NTUVOVChcbiAgICAgICdeXFxcXD1cXFxcdycsXG4gICAgICAnXFxcXD1jdXQnLFxuICAgICAge1xuICAgICAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZVxuICAgICAgfVxuICAgICksXG4gICAgTUVUSE9ELFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICBjb250YWluczogU1RSSU5HX0NPTlRBSU5TLFxuICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAncVtxd3hyXT9cXFxccypcXFxcKCcsIGVuZDogJ1xcXFwpJyxcbiAgICAgICAgICByZWxldmFuY2U6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAncVtxd3hyXT9cXFxccypcXFxcWycsIGVuZDogJ1xcXFxdJyxcbiAgICAgICAgICByZWxldmFuY2U6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAncVtxd3hyXT9cXFxccypcXFxceycsIGVuZDogJ1xcXFx9JyxcbiAgICAgICAgICByZWxldmFuY2U6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAncVtxd3hyXT9cXFxccypcXFxcfCcsIGVuZDogJ1xcXFx8JyxcbiAgICAgICAgICByZWxldmFuY2U6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAncVtxd3hyXT9cXFxccypcXFxcPCcsIGVuZDogJ1xcXFw+JyxcbiAgICAgICAgICByZWxldmFuY2U6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAncXdcXFxccytxJywgZW5kOiAncScsXG4gICAgICAgICAgcmVsZXZhbmNlOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogJ1xcJycsIGVuZDogJ1xcJycsXG4gICAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogJ1wiJywgZW5kOiAnXCInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogJ2AnLCBlbmQ6ICdgJyxcbiAgICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAne1xcXFx3K30nLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXSxcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnXFwtP1xcXFx3K1xcXFxzKlxcXFw9XFxcXD4nLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXSxcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgIGJlZ2luOiAnKFxcXFxiMFswLTdfXSspfChcXFxcYjB4WzAtOWEtZkEtRl9dKyl8KFxcXFxiWzEtOV1bMC05X10qKFxcXFwuWzAtOV9dKyk/KXxbMF9dXFxcXGInLFxuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfSxcbiAgICB7IC8vIHJlZ2V4cCBjb250YWluZXJcbiAgICAgIGJlZ2luOiAnKFxcXFwvXFxcXC98JyArIGhsanMuUkVfU1RBUlRFUlNfUkUgKyAnfFxcXFxiKHNwbGl0fHJldHVybnxwcmludHxyZXZlcnNlfGdyZXApXFxcXGIpXFxcXHMqJyxcbiAgICAgIGtleXdvcmRzOiAnc3BsaXQgcmV0dXJuIHByaW50IHJldmVyc2UgZ3JlcCcsXG4gICAgICByZWxldmFuY2U6IDAsXG4gICAgICBjb250YWluczogW1xuICAgICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAncmVnZXhwJyxcbiAgICAgICAgICBiZWdpbjogJyhzfHRyfHkpLyhcXFxcXFxcXC58W14vXSkqLyhcXFxcXFxcXC58W14vXSkqL1thLXpdKicsXG4gICAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAncmVnZXhwJyxcbiAgICAgICAgICBiZWdpbjogJyhtfHFyKT8vJywgZW5kOiAnL1thLXpdKicsXG4gICAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCAvLyBhbGxvd3MgZW1wdHkgXCIvL1wiIHdoaWNoIGlzIGEgY29tbW9uIGNvbW1lbnQgZGVsaW1pdGVyIGluIG90aGVyIGxhbmd1YWdlc1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICBiZWdpbktleXdvcmRzOiAnc3ViJywgZW5kOiAnKFxcXFxzKlxcXFwoLio/XFxcXCkpP1s7e10nLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgcmVsZXZhbmNlOiA1LFxuICAgICAgY29udGFpbnM6IFtobGpzLlRJVExFX01PREVdXG4gICAgfSxcbiAgICB7XG4gICAgICBiZWdpbjogJy1cXFxcd1xcXFxiJyxcbiAgICAgIHJlbGV2YW5jZTogMFxuICAgIH0sXG4gICAge1xuICAgICAgYmVnaW46IFwiXl9fREFUQV9fJFwiLFxuICAgICAgZW5kOiBcIl5fX0VORF9fJFwiLFxuICAgICAgc3ViTGFuZ3VhZ2U6ICdtb2pvbGljaW91cycsXG4gICAgICBjb250YWluczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogXCJeQEAuKlwiLFxuICAgICAgICAgICAgZW5kOiBcIiRcIixcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJjb21tZW50XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXTtcbiAgU1VCU1QuY29udGFpbnMgPSBQRVJMX0RFRkFVTFRfQ09OVEFJTlM7XG4gIE1FVEhPRC5jb250YWlucyA9IFBFUkxfREVGQVVMVF9DT05UQUlOUztcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdQZXJsJyxcbiAgICBhbGlhc2VzOiBbJ3BsJywgJ3BtJ10sXG4gICAga2V5d29yZHM6IFBFUkxfS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFBFUkxfREVGQVVMVF9DT05UQUlOU1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBlcmw7XG4iXSwic291cmNlUm9vdCI6IiJ9