!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports='<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 343.089 343.089" style="enable-background:new 0 0 343.089 343.089;" xml:space="preserve"><g><g><g><path d="M239.122,124.473h-125.91V72.228c-0.057-4.328-3.611-7.79-7.939-7.733c-2.146,0.028-4.186,0.935-5.645,2.509 L2.452,166.269c-2.885,2.397-3.281,6.679-0.885,9.564c0.267,0.321,0.563,0.618,0.885,0.885l97.176,99.265 c1.501,1.588,3.563,2.526,5.747,2.612h3.135c2.983-1.448,4.828-4.523,4.702-7.837v-47.02h125.91 c5.262-0.892,9.305-5.148,9.927-10.449v-83.592C249.048,125.518,243.824,124.473,239.122,124.473z"></path><path d="M272.558,121.86c-4.328,0-7.837,3.509-7.837,7.837v83.592c0,4.328,3.509,7.837,7.837,7.837s7.837-3.509,7.837-7.837 v-83.592C280.395,125.369,276.887,121.86,272.558,121.86z"></path><path d="M303.905,121.86c-4.328,0-7.837,3.509-7.837,7.837v83.592c0,4.328,3.509,7.837,7.837,7.837s7.837-3.509,7.837-7.837 v-83.592C311.742,125.369,308.233,121.86,303.905,121.86z"></path><path d="M335.252,121.86c-4.328,0-7.837,3.509-7.837,7.837v83.592c0,4.328,3.509,7.837,7.837,7.837s7.837-3.509,7.837-7.837 v-83.592C343.089,125.369,339.58,121.86,335.252,121.86z"></path></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'},function(e,t){e.exports='<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" style="enable-background:new 0 0 256 256;" xml:space="preserve"><g><g><polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093 "></polygon></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'},function(e,t,n){"use strict";n.r(t);function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var r=n(0),l=n(1);window.sliderJS=function(e,t){var n=t.width,a=void 0===n?940:n,s=t.height,o=void 0===s?270:s,c=t.timeout,d=void 0===c?3e3:c,u=t.hideControls,g=void 0!==u&&u,p=window.innerWidth>0&&window.innerWidth>=a?a:window.innerWidth,f=document.documentElement;f.style.setProperty("--checkedWidth",p+"px"),f.style.setProperty("--height",o+"px");var m=document.getElementById(e),v=m.children.length,h=document.createElement("div"),b=document.createElement("div");b.className="controlContainer",h.className="slidesContainer",b.append.apply(b,i(m.children)),h.append(b),m.append(h),m.className="slider",i(b.children).forEach((function(e){e.className="imageDefault"}));var y=!0,w=1,x=v-1,E=0,L=!1;b.children[x].className="imageDefault prevNumber",b.children[E].className="imageDefault currentNumber",b.children[w].className="imageDefault nextNumber",!g&&p>=724&&function(){var e=!0,t=document.createElement("div");t.className="buttonContainer",m.append(t);var n=document.createElement("button"),i=document.createElement("div");n.append(i),i.outerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" id="playpause" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="7,3 19,3 19,47 7,47" id="leftbar" /><polygon points="31,3 43,3 43,26 43,47 31,47" id="rightbar" /><animate to="7,3 19,3 19,47 7,47" class="lefttopause" id="lefttopause" xlink:href="#leftbar" attributeName="points" dur=".3s" begin="indefinite" fill="freeze" /><animate to="12,0 25,11.5 25,39 12,50" class="lefttoplay" id="lefttoplay" xlink:href="#leftbar" attributeName="points" dur=".3s" begin="indefinite" fill="freeze" /><animate to="31,3 43,3 43,26 43,47 31,47" class="righttopause" id="righttopause" xlink:href="#rightbar" attributeName="points" dur=".3s" begin="indefinite" fill="freeze" /><animate to="25,11.5 39.7,24.5 41.5,26 39.7,27.4 25,39" class="righttoplay" id="righttoplay" xlink:href="#rightbar" attributeName="points" dur=".3s" begin="indefinite" fill="freeze" /></svg>',n.className="playPauseBtn";var a=n.getElementsByClassName("lefttoplay")[0],s=n.getElementsByClassName("righttoplay")[0],o=n.getElementsByClassName("lefttopause")[0],c=n.getElementsByClassName("righttopause")[0],d=document.createElement("button"),u=document.createElement("div");d.append(u);var g=document.createElement("button"),p=document.createElement("div");g.append(p);var f=document.createElement("button"),v=document.createElement("div");f.append(v),d.className="btnPrev",g.className="btnNext",f.className="btnHideActionBar",u.outerHTML=r,p.outerHTML=r,v.outerHTML=l,t.append(d,n,g,f),f.addEventListener("click",(function(){e?(f.classList.toggle("hideClick"),g.classList.toggle("opacityInvisible"),d.classList.toggle("opacityInvisible"),n.classList.toggle("opacityInvisible"),n.disabled=!0,g.disabled=!0,d.disabled=!0,e=!1):(f.classList.toggle("hideClick"),g.classList.toggle("opacityInvisible"),d.classList.toggle("opacityInvisible"),n.classList.toggle("opacityInvisible"),n.disabled=!1,g.disabled=!1,d.disabled=!1,e=!0)})),n.addEventListener("click",(function(e){e.preventDefault(),y?(a.beginElement(),s.beginElement(),y=!1,clearInterval(C)):(o.beginElement(),c.beginElement(),y=!0,D())}),!1),g.addEventListener("click",(function(){L||(N(),y&&D())})),d.addEventListener("click",(function(){L||(I(),y&&D())}))}();var N=function(){b.children[x].className="imageDefault",b.classList.add("nextClick"),w===v-1?(E=w,x=w-1,w=0):E===v-1?(x=E,w=1+(E=0)):(E++,x=E-1,w=E+1),b.children[x].classList.add("zIndexDefault"),b.children[E].classList.add("zIndexActive"),b.children[w].classList.add("zIndexDefault")},I=function(){b.children[w].className="imageDefault",b.classList.add("prevClick"),x===v-1?(x=(E=x)-1,w=0):1===E?(x=v-1,w=1+(E=0)):(E--,x=E-1,w=E+1),b.children[x].classList.add("zIndexDefault"),b.children[E].classList.add("zIndexActive"),b.children[w].classList.add("zIndexDefault")};b.addEventListener("transitionstart",(function(){L=!0})),b.addEventListener("transitionend",(function(){b.children[w].className="imageDefault nextNumber",b.children[E].className="imageDefault currentNumber",b.children[x].className="imageDefault prevNumber",b.className="controlContainer",L=!1}));var k,C=setInterval((function(){N()}),d),D=function(){C&&clearInterval(C),C=setInterval((function(){N()}),d)};h.addEventListener("touchstart",(function(e){e.preventDefault(),clearInterval(C),k=e.changedTouches[0].clientX}),!1),h.addEventListener("touchend",(function(e){e.preventDefault(),e.changedTouches[0].clientX-k>0?(I(),y&&D()):(N(),y&&D())}),!1),h.addEventListener("mousedown",(function(e){e.preventDefault(),clearInterval(C),k=e.clientX}),!1),h.addEventListener("mouseup",(function(e){e.preventDefault(),e.clientX-k>0?(I(),y&&D()):(N(),y&&D())}),!1),window.addEventListener("focus",(function(){D()})),window.addEventListener("blur",(function(){clearInterval(C)}))}}]);