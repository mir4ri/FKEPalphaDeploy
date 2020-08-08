webpackHotUpdate("styles",{

/***/ "./components/Header/header.scss":
/*!***************************************!*\
  !*** ./components/Header/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"_3xve6MMQ9gJLii25juVMxh","headerLink":"_1HZ2blCbhNCz5RW-S-0mq0","logo":"_2QRmQ5xzFZNaemDWclG5eE","mobNav":"noqhzRrBx13B7xK0eJj-S"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1596905137199");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.01156bc7c02d7b4efb57.hot-update.js.map