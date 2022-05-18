/**
 * Minified by jsDelivr using UglifyJS v3.4.4.
 * Original file: /npm/nprogress@0.2.0/nprogress.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
 !function(e,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n():e.NProgress=n()}(this,function(){var n,t,o={version:"0.2.0"},a=o.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function u(e,n,t){return e<n?n:t<e?t:e}function c(e){return 100*(-1+e)}o.configure=function(e){var n,t;for(n in e)void 0!==(t=e[n])&&e.hasOwnProperty(n)&&(a[n]=t);return this},o.status=null,o.set=function(n){var e=o.isStarted();n=u(n,a.minimum,1),o.status=1===n?null:n;var t=o.render(!e),r=t.querySelector(a.barSelector),i=a.speed,s=a.easing;return t.offsetWidth,l(function(e){""===a.positionUsing&&(a.positionUsing=o.getPositioningCSS()),f(r,function(e,n,t){var r;r="translate3d"===a.positionUsing?{transform:"translate3d("+c(e)+"%,0,0)"}:"translate"===a.positionUsing?{transform:"translate("+c(e)+"%,0)"}:{"margin-left":c(e)+"%"};return r.transition="all "+n+"ms "+t,r}(n,i,s)),1===n?(f(t,{transition:"none",opacity:1}),t.offsetWidth,setTimeout(function(){f(t,{transition:"all "+i+"ms linear",opacity:0}),setTimeout(function(){o.remove(),e()},i)},i)):setTimeout(e,i)}),this},o.isStarted=function(){return"number"==typeof o.status},o.start=function(){o.status||o.set(0);var e=function(){setTimeout(function(){o.status&&(o.trickle(),e())},a.trickleSpeed)};return a.trickle&&e(),this},o.done=function(e){return e||o.status?o.inc(.3+.5*Math.random()).set(1):this},o.inc=function(e){var n=o.status;return n?("number"!=typeof e&&(e=(1-n)*u(Math.random()*n,.1,.95)),n=u(n+e,0,.994),o.set(n)):o.start()},o.trickle=function(){return o.inc(Math.random()*a.trickleRate)},t=n=0,o.promise=function(e){return e&&"resolved"!==e.state()&&(0===t&&o.start(),n++,t++,e.always(function(){0==--t?(n=0,o.done()):o.set((n-t)/n)})),this},o.render=function(e){if(o.isRendered())return document.getElementById("nprogress");d(document.documentElement,"nprogress-busy");var n=document.createElement("div");n.id="nprogress",n.innerHTML=a.template;var t,r=n.querySelector(a.barSelector),i=e?"-100":c(o.status||0),s=document.querySelector(a.parent);return f(r,{transition:"all 0 linear",transform:"translate3d("+i+"%,0,0)"}),a.showSpinner||(t=n.querySelector(a.spinnerSelector))&&m(t),s!=document.body&&d(s,"nprogress-custom-parent"),s.appendChild(n),n},o.remove=function(){r(document.documentElement,"nprogress-busy"),r(document.querySelector(a.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&m(e)},o.isRendered=function(){return!!document.getElementById("nprogress")},o.getPositioningCSS=function(){var e=document.body.style,n="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return n+"Perspective"in e?"translate3d":n+"Transform"in e?"translate":"margin"};var l=function(){var n=[];function t(){var e=n.shift();e&&e(t)}return function(e){n.push(e),1==n.length&&t()}}(),f=function(){var s=["Webkit","O","Moz","ms"],n={};function r(e){return e=e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,n){return n.toUpperCase()}),n[e]||(n[e]=function(e){var n=document.body.style;if(e in n)return e;for(var t,r=s.length,i=e.charAt(0).toUpperCase()+e.slice(1);r--;)if((t=s[r]+i)in n)return t;return e}(e))}function o(e,n,t){n=r(n),e.style[n]=t}return function(e,n){var t,r,i=arguments;if(2==i.length)for(t in n)void 0!==(r=n[t])&&n.hasOwnProperty(t)&&o(e,t,r);else o(e,i[1],i[2])}}();function i(e,n){return 0<=("string"==typeof e?e:s(e)).indexOf(" "+n+" ")}function d(e,n){var t=s(e),r=t+n;i(t,n)||(e.className=r.substring(1))}function r(e,n){var t,r=s(e);i(e,n)&&(t=r.replace(" "+n+" "," "),e.className=t.substring(1,t.length-1))}function s(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function m(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return o});
 