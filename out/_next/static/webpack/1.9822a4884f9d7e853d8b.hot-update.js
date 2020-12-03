webpackHotUpdate_N_E(1,{

/***/ "./content/handling-browser-load-events-in-javascript.md":
/*!***************************************************************!*\
  !*** ./content/handling-browser-load-events-in-javascript.md ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle: Handling Browser Load Events in JavaScript\r\ndate: November 28 2020\r\n---\r\n\r\nThe browser is a very interesting playground for web developers to play around. Today i am going to talk about how you should correctly use the browser load events to ensure that all the `markup`, `stylesheet` and _javascript_ you write is loaded correctly and any data to be fetched is done correctly.\r\n\r\nBefore we go into that. I want to mention that it is very essential for a web developer (mostly frontend developers) to understand how the browser parses the code they have written. For that, i have linked a very good articles which should supossedly make you understand that into detail.\r\n\r\nHTML and CSS both have object models. That of HTML is called the DOM (`Document Object Model`) and CSS have CSSOM (`CSS Object Model`). The DOM which is our focus is a tree-like structure represnting the `nodes/elements`. Here, all the html elements are parsed and rendered in order. This holds for stylesheets and javascript code you will add. But sometimes you will want your javascript code to be run while your HTML and CSS are being rendered in order to include your animations, fetched data and manymore.\r\n\r\nLet's get to it ;)\r\n\r\nWhen the browser finished to parse the HTML and CSS code. An event is triggered. You might have come accross this event which is `DOMContentLoaded`. You will usually use it as such :\r\n\r\n```javascript\r\nwindow.addEventListener(\"DOMContentLoaded\", doSomethingCool());\r\n```\r\n");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGVudC9oYW5kbGluZy1icm93c2VyLWxvYWQtZXZlbnRzLWluLWphdmFzY3JpcHQubWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWUsc3hDQUF1dEMseVJBQXlSLFlBQVksRSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLjk4MjJhNDg4NGY5ZDdlODUzZDhiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIi0tLVxcclxcbnRpdGxlOiBIYW5kbGluZyBCcm93c2VyIExvYWQgRXZlbnRzIGluIEphdmFTY3JpcHRcXHJcXG5kYXRlOiBOb3ZlbWJlciAyOCAyMDIwXFxyXFxuLS0tXFxyXFxuXFxyXFxuVGhlIGJyb3dzZXIgaXMgYSB2ZXJ5IGludGVyZXN0aW5nIHBsYXlncm91bmQgZm9yIHdlYiBkZXZlbG9wZXJzIHRvIHBsYXkgYXJvdW5kLiBUb2RheSBpIGFtIGdvaW5nIHRvIHRhbGsgYWJvdXQgaG93IHlvdSBzaG91bGQgY29ycmVjdGx5IHVzZSB0aGUgYnJvd3NlciBsb2FkIGV2ZW50cyB0byBlbnN1cmUgdGhhdCBhbGwgdGhlIGBtYXJrdXBgLCBgc3R5bGVzaGVldGAgYW5kIF9qYXZhc2NyaXB0XyB5b3Ugd3JpdGUgaXMgbG9hZGVkIGNvcnJlY3RseSBhbmQgYW55IGRhdGEgdG8gYmUgZmV0Y2hlZCBpcyBkb25lIGNvcnJlY3RseS5cXHJcXG5cXHJcXG5CZWZvcmUgd2UgZ28gaW50byB0aGF0LiBJIHdhbnQgdG8gbWVudGlvbiB0aGF0IGl0IGlzIHZlcnkgZXNzZW50aWFsIGZvciBhIHdlYiBkZXZlbG9wZXIgKG1vc3RseSBmcm9udGVuZCBkZXZlbG9wZXJzKSB0byB1bmRlcnN0YW5kIGhvdyB0aGUgYnJvd3NlciBwYXJzZXMgdGhlIGNvZGUgdGhleSBoYXZlIHdyaXR0ZW4uIEZvciB0aGF0LCBpIGhhdmUgbGlua2VkIGEgdmVyeSBnb29kIGFydGljbGVzIHdoaWNoIHNob3VsZCBzdXBvc3NlZGx5IG1ha2UgeW91IHVuZGVyc3RhbmQgdGhhdCBpbnRvIGRldGFpbC5cXHJcXG5cXHJcXG5IVE1MIGFuZCBDU1MgYm90aCBoYXZlIG9iamVjdCBtb2RlbHMuIFRoYXQgb2YgSFRNTCBpcyBjYWxsZWQgdGhlIERPTSAoYERvY3VtZW50IE9iamVjdCBNb2RlbGApIGFuZCBDU1MgaGF2ZSBDU1NPTSAoYENTUyBPYmplY3QgTW9kZWxgKS4gVGhlIERPTSB3aGljaCBpcyBvdXIgZm9jdXMgaXMgYSB0cmVlLWxpa2Ugc3RydWN0dXJlIHJlcHJlc250aW5nIHRoZSBgbm9kZXMvZWxlbWVudHNgLiBIZXJlLCBhbGwgdGhlIGh0bWwgZWxlbWVudHMgYXJlIHBhcnNlZCBhbmQgcmVuZGVyZWQgaW4gb3JkZXIuIFRoaXMgaG9sZHMgZm9yIHN0eWxlc2hlZXRzIGFuZCBqYXZhc2NyaXB0IGNvZGUgeW91IHdpbGwgYWRkLiBCdXQgc29tZXRpbWVzIHlvdSB3aWxsIHdhbnQgeW91ciBqYXZhc2NyaXB0IGNvZGUgdG8gYmUgcnVuIHdoaWxlIHlvdXIgSFRNTCBhbmQgQ1NTIGFyZSBiZWluZyByZW5kZXJlZCBpbiBvcmRlciB0byBpbmNsdWRlIHlvdXIgYW5pbWF0aW9ucywgZmV0Y2hlZCBkYXRhIGFuZCBtYW55bW9yZS5cXHJcXG5cXHJcXG5MZXQncyBnZXQgdG8gaXQgOylcXHJcXG5cXHJcXG5XaGVuIHRoZSBicm93c2VyIGZpbmlzaGVkIHRvIHBhcnNlIHRoZSBIVE1MIGFuZCBDU1MgY29kZS4gQW4gZXZlbnQgaXMgdHJpZ2dlcmVkLiBZb3UgbWlnaHQgaGF2ZSBjb21lIGFjY3Jvc3MgdGhpcyBldmVudCB3aGljaCBpcyBgRE9NQ29udGVudExvYWRlZGAuIFlvdSB3aWxsIHVzdWFsbHkgdXNlIGl0IGFzIHN1Y2ggOlxcclxcblxcclxcbmBgYGphdmFzY3JpcHRcXHJcXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcXFwiRE9NQ29udGVudExvYWRlZFxcXCIsIGRvU29tZXRoaW5nQ29vbCgpKTtcXHJcXG5gYGBcXHJcXG5cIjsiXSwic291cmNlUm9vdCI6IiJ9