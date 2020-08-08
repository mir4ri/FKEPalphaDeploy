webpackHotUpdate("styles",{

/***/ "./components/Layout/layout.scss":
/*!***************************************!*\
  !*** ./components/Layout/layout.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"alignContainer":"_1wiinMqfgHjqhZXq_N4OSG","layoutContainer":"_28XWpxwOMGKgE3xEP0IiFh","content":"_80TJ2kdkfoN2LDDp5D7d"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1596900560173");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.6cc0f07ba8a5d7ff6c37.hot-update.js.map