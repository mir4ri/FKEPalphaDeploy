webpackHotUpdate("styles",{

/***/ "./components/Tabs/tabs.scss":
/*!***********************************!*\
  !*** ./components/Tabs/tabs.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"tab":"_25STv-KmihsfDrWdGuQprn","inline":"_2OG451PucMW78jY-cFz9g","li":"_1TyRc64Nf0mlSu1vauq6RM","selected":"_2op15DVh_fvH-EeO8uHwws","panel":"ffCuWlS7cNPgsiKswAmAk"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1597767733177");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.df4e999528b77644bc26.hot-update.js.map