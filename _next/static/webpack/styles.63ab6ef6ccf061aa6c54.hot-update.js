webpackHotUpdate("styles",{

/***/ "./components/Footer/footer.scss":
/*!***************************************!*\
  !*** ./components/Footer/footer.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"footer":"_1DvilgY_RNLx9YjM_pHwv4","addr":"_2b2-sbOg-w00XJDD9j4Uvo","center":"_92qU5YbnANk2-3cMRliZV","nav":"_1bvXkKFUjxI6gqkSkAi2Pq","flex":"_1uJwzzGk407WoLJ_bySwmD","link":"_1q-815fSdh212EDa1WHp-K"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1596965485589");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.63ab6ef6ccf061aa6c54.hot-update.js.map