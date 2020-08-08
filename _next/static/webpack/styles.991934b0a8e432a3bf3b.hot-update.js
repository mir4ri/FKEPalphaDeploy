webpackHotUpdate("styles",{

/***/ "./pages/index/index.scss":
/*!********************************!*\
  !*** ./pages/index/index.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"banner":"_3-A5EvFnyA0BBmmjQIbQhg","newsAndSidebar":"_23NOuuwqcCpBs9fLUC8PZo","news":"_1PGiMWrieTOVPkVRqyyww9","link":"_3bBk6t6q2uiup_VT2Z7ILk","sidebar":"_3X5W4LqsnJw3rRSEeF1fr6","events":"_3AAGqRwZ-M79DzQRSpZRps","subtitle":"JYF5SvUBSGq0YkMAEp8vv","event":"_2LMycsnqHT7wkmGb589GC3","eventTitle":"_3aVBaUo1LWVurPI-9DSKJI","eventPlace":"_3Se0PoWqcQme65n-1ob7-P","eventDate":"_1ed3MfIreCVRWHm24dnyF-","eventTime":"_35LGUBBvGyvWbskpgMON5u","feedback":"_2d6Eq5N3zFauA5VdzDchVU","feedbackLink":"_2cxadyvNYAVxk_riYBgi_2"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1596900013559");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.991934b0a8e432a3bf3b.hot-update.js.map