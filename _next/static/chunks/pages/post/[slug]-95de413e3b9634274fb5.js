_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{"20a2":function(t,e,r){t.exports=r("nOHt")},TSYQ:function(t,e,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var a=typeof n;if("string"===a||"number"===a)t.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&t.push(i)}else if("object"===a)for(var c in n)r.call(n,c)&&n[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},qMGL:function(t,e,r){"use strict";r.r(e),r.d(e,"__N_SSG",(function(){return K}));var n=r("rePB"),o=r("nKUr"),a=r("g4pe"),i=r.n(a),c=r("20a2"),l=r("R8uD"),s=r("vbKG"),u=r("wd/R"),d=r.n(u),h=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),f=function(t){function e(e){var r=t.call(this,e)||this;return r.name="AssertionError",r}return h(e,t),e}(Error);function p(t,e){if(!t)throw new f(e)}function w(t){var e=Object.entries(t).filter((function(t){var e=t[1];return void 0!==e&&null!==e})).map((function(t){var e=t[0],r=t[1];return encodeURIComponent(e)+"="+encodeURIComponent(String(r))}));return e.length>0?"?"+e.join("&"):""}var b=r("q1tI"),y=r.n(b),v=r("TSYQ"),g=r.n(v),j=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),O=function(){return(O=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},m=function(t,e,r,n){return new(r||(r=Promise))((function(o,a){function i(t){try{l(n.next(t))}catch(e){a(e)}}function c(t){try{l(n.throw(t))}catch(e){a(e)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,c)}l((n=n.apply(t,e||[])).next())}))},_=function(t,e){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(c){a=[6,c],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},x=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r},k=function(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then},S=function(t,e){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-t/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-e/2}},N=function(t,e){return{top:(window.screen.height-e)/2,left:(window.screen.width-t)/2}};function E(t,e,r){var n=e.height,o=e.width,a=x(e,["height","width"]),i=O({height:n,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),c=window.open(t,"",Object.keys(i).map((function(t){return t+"="+i[t]})).join(", "));if(r)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),r(c))}catch(t){console.error(t)}}),1e3);return c}var C=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.openShareDialog=function(t){var r=e.props,n=r.onShareWindowClose,o=r.windowHeight,a=void 0===o?400:o,i=r.windowPosition,c=void 0===i?"windowCenter":i,l=r.windowWidth,s=void 0===l?550:l;E(t,O({height:a,width:s},"windowCenter"===c?S(s,a):N(s,a)),n)},e.handleClick=function(t){return m(e,void 0,void 0,(function(){var e,r,n,o,a,i,c,l,s,u;return _(this,(function(d){switch(d.label){case 0:return e=this.props,r=e.beforeOnClick,n=e.disabled,o=e.networkLink,a=e.onClick,i=e.url,c=e.openShareDialogOnClick,l=e.opts,s=o(i,l),n?[2]:(t.preventDefault(),r?(u=r(),k(u)?[4,u]:[3,2]):[3,2]);case 1:d.sent(),d.label=2;case 2:return c&&this.openShareDialog(s),a&&a(t,s),[2]}}))}))},e}return j(e,t),e.prototype.render=function(){var t=this.props,e=(t.beforeOnClick,t.children),r=t.className,n=t.disabled,o=t.disabledStyle,a=t.forwardedRef,i=(t.networkLink,t.networkName),c=(t.onShareWindowClose,t.openShareDialogOnClick,t.opts,t.resetButtonStyle),l=t.style,s=(t.url,t.windowHeight,t.windowPosition,t.windowWidth,x(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),u=g()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},r),d=O(O(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},l),n&&o);return y.a.createElement("button",O({},s,{"aria-label":s["aria-label"]||i,className:u,onClick:this.handleClick,ref:a,style:d}),e)},e.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},e}(b.Component),P=function(){return(P=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};var R=function(t,e,r,n){function o(o,a){var i=r(o),c=P({},o);return Object.keys(i).forEach((function(t){delete c[t]})),y.a.createElement(C,P({},n,c,{forwardedRef:a,networkName:t,networkLink:e,opts:r(o)}))}return o.displayName="ShareButton-"+t,Object(b.forwardRef)(o)};var A=R("facebook",(function(t,e){var r=e.quote,n=e.hashtag;return p(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+w({u:t,quote:r,hashtag:n})}),(function(t){return{quote:t.quote,hashtag:t.hashtag}}),{windowWidth:550,windowHeight:400}),B=function(){return(B=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},D=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r};function T(t){var e=function(e){var r=e.bgStyle,n=e.borderRadius,o=e.iconFillColor,a=e.round,i=e.size,c=D(e,["bgStyle","borderRadius","iconFillColor","round","size"]);return y.a.createElement("svg",B({viewBox:"0 0 64 64",width:i,height:i},c),a?y.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:t.color,style:r}):y.a.createElement("rect",{width:"64",height:"64",rx:n,ry:n,fill:t.color,style:r}),y.a.createElement("path",{d:t.path,fill:o}))};return e.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},e}var z=T({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var H=R("telegram",(function(t,e){var r=e.title;return p(t,"telegram.url"),"https://telegram.me/share/url"+w({url:t,text:r})}),(function(t){return{title:t.title}}),{windowWidth:550,windowHeight:400}),I=T({color:"#37aee2",networkName:"telegram",path:"m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"});var L=R("twitter",(function(t,e){var r=e.title,n=e.via,o=e.hashtags,a=void 0===o?[]:o,i=e.related,c=void 0===i?[]:i;return p(t,"twitter.url"),p(Array.isArray(a),"twitter.hashtags is not an array"),p(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+w({url:t,text:r,via:n,hashtags:a.length>0?a.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(t){return{hashtags:t.hashtags,title:t.title,via:t.via,related:t.related}}),{windowWidth:550,windowHeight:400}),W=T({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var q=R("viber",(function(t,e){var r=e.title,n=e.separator;return p(t,"viber.url"),"viber://forward"+w({text:r?r+n+t:t})}),(function(t){return{title:t.title,separator:t.separator||" "}}),{windowWidth:660,windowHeight:460}),M=T({color:"#7C529E",networkName:"viber",path:"m31.0,12.3c9.0,0.2 16.4,6.2 18.0,15.2c0.2,1.5 0.3,3.0 0.4,4.6a1.0,1.0 0 0 1 -0.8,1.2l-0.1,0a1.1,1.1 0 0 1 -1.0,-1.2l0,0c-0.0,-1.2 -0.1,-2.5 -0.3,-3.8a16.1,16.1 0 0 0 -13.0,-13.5c-1.0,-0.1 -2.0,-0.2 -3.0,-0.3c-0.6,-0.0 -1.4,-0.1 -1.6,-0.8a1.1,1.1 0 0 1 0.9,-1.2l0.6,0l0.0,-0.0zm10.6,39.2a19.9,19.9 0 0 1 -2.1,-0.6c-6.9,-2.9 -13.2,-6.6 -18.3,-12.2a47.5,47.5 0 0 1 -7.0,-10.7c-0.8,-1.8 -1.6,-3.7 -2.4,-5.6c-0.6,-1.7 0.3,-3.4 1.4,-4.7a11.3,11.3 0 0 1 3.7,-2.8a2.4,2.4 0 0 1 3.0,0.7a39.0,39.0 0 0 1 4.7,6.5a3.1,3.1 0 0 1 -0.8,4.2c-0.3,0.2 -0.6,0.5 -1.0,0.8a3.3,3.3 0 0 0 -0.7,0.7a2.1,2.1 0 0 0 -0.1,1.9c1.7,4.9 4.7,8.7 9.7,10.8a5.0,5.0 0 0 0 2.5,0.6c1.5,-0.1 2.0,-1.8 3.1,-2.7a2.9,2.9 0 0 1 3.5,-0.1c1.1,0.7 2.2,1.4 3.3,2.2a37.8,37.8 0 0 1 3.1,2.4a2.4,2.4 0 0 1 0.7,3.0a10.4,10.4 0 0 1 -4.4,4.8a10.8,10.8 0 0 1 -1.9,0.6c-0.7,-0.2 0.6,-0.2 0,0l0.0,0l0,-0.0zm3.1,-21.4a4.2,4.2 0 0 1 -0.0,0.6a1.0,1.0 0 0 1 -1.9,0.1a2.7,2.7 0 0 1 -0.1,-0.8a10.9,10.9 0 0 0 -1.4,-5.5a10.2,10.2 0 0 0 -4.2,-4.0a12.3,12.3 0 0 0 -3.4,-1.0c-0.5,-0.0 -1.0,-0.1 -1.5,-0.2a0.9,0.9 0 0 1 -0.9,-1.0l0,-0.1a0.9,0.9 0 0 1 0.9,-0.9l0.1,0a14.1,14.1 0 0 1 5.9,1.5a11.9,11.9 0 0 1 6.5,9.3c0,0.1 0.0,0.3 0.0,0.5c0,0.4 0.0,0.9 0.0,1.5l0,0l0.0,0.0zm-5.6,-0.2a1.1,1.1 0 0 1 -1.2,-0.9l0,-0.1a11.3,11.3 0 0 0 -0.2,-1.4a4.0,4.0 0 0 0 -1.5,-2.3a3.9,3.9 0 0 0 -1.2,-0.5c-0.5,-0.1 -1.1,-0.1 -1.6,-0.2a1.0,1.0 0 0 1 -0.8,-1.1l0,0l0,0a1.0,1.0 0 0 1 1.1,-0.8c3.4,0.2 6.0,2.0 6.3,6.2a2.8,2.8 0 0 1 0,0.8a0.8,0.8 0 0 1 -0.8,0.7l0,0l0.0,-0.0z"}),V=r("tyV5"),G=r.n(V),K=!0;e.default=function(t){var e,r=t.post,a=Object(c.useRouter)(),u=r.title,h=r.postDate,f=r.categoryUa,p=r.news,w={renderNode:(e={},Object(n.a)(e,s.INLINES.EMBEDDED_ENTRY,(function(t,e){if("blogPost"===t.data.target.sys.contentType.sys.id)return Object(o.jsxs)("a",{href:"/blog/".concat(t.data.target.fields.slug),children:[" ",t.data.target.fields.title]})})),Object(n.a)(e,s.BLOCKS.EMBEDDED_ENTRY,(function(t,e){return"codeBlock"===t.data.target.sys.contentType.sys.id?Object(o.jsx)("pre",{children:Object(o.jsx)("code",{children:t.data.target.fields.code})}):"videoEmbed"===t.data.target.sys.contentType.sys.id?Object(o.jsx)("iframe",{src:t.data.target.fields.embedUrl,height:"100%",width:"100%",frameBorder:"0",scrolling:"no",title:t.data.target.fields.title,allowFullScreen:!0}):void 0})),Object(n.a)(e,s.BLOCKS.EMBEDDED_ASSET,(function(t,e){return Object(o.jsx)("img",{src:"https://".concat(t.data.target.fields.file.url),width:t.data.target.fields.file.details.image.width,alt:t.data.target.fields.description})})),e)};return Object(o.jsxs)("main",{children:[Object(o.jsx)(i.a,{children:Object(o.jsxs)("title",{children:["\u0412\u0421\u041f \u0424\u041a\u0415\u041f - ",u]})}),Object(o.jsxs)("div",{className:G.a.news,children:[Object(o.jsx)("h2",{className:G.a.title,children:u}),Object(o.jsxs)("div",{className:G.a.info,children:[Object(o.jsx)("span",{className:G.a.category,children:f}),Object(o.jsx)("span",{className:G.a.date,children:d()(h).locale("uk").format("ll")})]}),Object(o.jsx)("div",{className:G.a.text,children:Object(l.documentToReactComponents)(p,w)})]}),Object(o.jsxs)("div",{className:G.a.socialAndAnotherNews,children:[Object(o.jsx)("div",{className:G.a.shareText,children:"\u041f\u043e\u0448\u0438\u0440\u0438\u0442\u0438 \u0432 \u0441\u043e\u0446. \u043c\u0435\u0440\u0435\u0436\u0456"}),Object(o.jsxs)("div",{className:G.a.shareButtons,children:[Object(o.jsxs)(A,{url:"mir4ri.github.io".concat(a.asPath),quote:u,children:[Object(o.jsx)(z,{size:30,borderRadius:4})," Facebook"]}),Object(o.jsxs)(H,{url:"mir4ri.github.io".concat(a.asPath),children:[Object(o.jsx)(I,{size:30,borderRadius:4})," Telegram"]}),Object(o.jsxs)(L,{title:"".concat(u,":"),url:"mir4ri.github.io".concat(a.asPath),children:[Object(o.jsx)(W,{size:30,borderRadius:4})," Twitter"]}),Object(o.jsxs)(q,{title:"".concat(u,":"),url:"mir4ri.github.io".concat(a.asPath),children:[Object(o.jsx)(M,{size:30,borderRadius:4})," Viber"]})]})]})]})}},tyV5:function(t,e,r){t.exports={photo:"post_photo__gf8tI",container:"post_container__3P4Lr",news:"post_news__3mYV6",text:"post_text__1Elia",back:"post_back__2QNb7",title:"post_title__2-9NX",info:"post_info__3sAAP",category:"post_category__3ik5G",date:"post_date__2Jo38",socialAndAnotherNews:"post_socialAndAnotherNews__397z3",shareText:"post_shareText__3eXIC",shareButtons:"post_shareButtons__3O46o"}},yKj2:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[slug]",function(){return r("qMGL")}])}},[["yKj2",0,1,5,2,3,4,7,6]]]);