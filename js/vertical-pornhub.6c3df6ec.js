(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vertical-pornhub"],{"70b0":function(e,t,n){(function(t){"use strict";var n=x(),r=y(),o=C(),i=P(),a={imagePlaceholder:void 0,cacheBust:!1},s={toSvg:c,toPng:l,toJpeg:f,toBlob:h,toPixelData:u,impl:{fontFaces:o,images:i,util:n,inliner:r,options:{}}};function c(e,t){return t=t||{},p(t),Promise.resolve(e).then((function(e){return g(e,t.filter,!0)})).then(m).then(v).then(r).then((function(r){return w(r,t.width||n.width(e),t.height||n.height(e))}));function r(e){return t.bgcolor&&(e.style.backgroundColor=t.bgcolor),t.width&&(e.style.width=t.width+"px"),t.height&&(e.style.height=t.height+"px"),t.style&&Object.keys(t.style).forEach((function(n){e.style[n]=t.style[n]})),e}}function u(e,t){return d(e,t||{}).then((function(t){return t.getContext("2d").getImageData(0,0,n.width(e),n.height(e)).data}))}function l(e,t){return d(e,t||{}).then((function(e){return e.toDataURL()}))}function f(e,t){return t=t||{},d(e,t).then((function(e){return e.toDataURL("image/jpeg",t.quality||1)}))}function h(e,t){return d(e,t||{}).then(n.canvasToBlob)}function p(e){"undefined"===typeof e.imagePlaceholder?s.impl.options.imagePlaceholder=a.imagePlaceholder:s.impl.options.imagePlaceholder=e.imagePlaceholder,"undefined"===typeof e.cacheBust?s.impl.options.cacheBust=a.cacheBust:s.impl.options.cacheBust=e.cacheBust}function d(e,t){return c(e,t).then(n.makeImage).then(n.delay(100)).then((function(t){var n=r(e);return n.getContext("2d").drawImage(t,0,0),n}));function r(e){var r=document.createElement("canvas");if(r.width=t.width||n.width(e),r.height=t.height||n.height(e),t.bgcolor){var o=r.getContext("2d");o.fillStyle=t.bgcolor,o.fillRect(0,0,r.width,r.height)}return r}}function g(e,t,r){return r||!t||t(e)?Promise.resolve(e).then(o).then((function(n){return i(e,n,t)})).then((function(t){return a(e,t)})):Promise.resolve();function o(e){return e instanceof HTMLCanvasElement?n.makeImage(e.toDataURL()):e.cloneNode(!1)}function i(e,t,r){var o=e.childNodes;return 0===o.length?Promise.resolve(t):i(t,n.asArray(o),r).then((function(){return t}));function i(e,t,n){var r=Promise.resolve();return t.forEach((function(t){r=r.then((function(){return g(t,n)})).then((function(t){t&&e.appendChild(t)}))})),r}}function a(e,t){return t instanceof Element?Promise.resolve().then(r).then(o).then(i).then(a).then((function(){return t})):t;function r(){function r(e,t){function r(e,t){n.asArray(e).forEach((function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))}))}e.cssText?t.cssText=e.cssText:r(e,t)}r(window.getComputedStyle(e),t.style)}function o(){function r(r){var o=window.getComputedStyle(e,r),i=o.getPropertyValue("content");if(""!==i&&"none"!==i){var a=n.uid();t.className=t.className+" "+a;var s=document.createElement("style");s.appendChild(c(a,r,o)),t.appendChild(s)}function c(e,t,r){var o="."+e+":"+t,i=r.cssText?a(r):s(r);return document.createTextNode(o+"{"+i+"}");function a(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function s(e){return n.asArray(e).map(t).join("; ")+";";function t(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}}}}[":before",":after"].forEach((function(e){r(e)}))}function i(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}function a(){t instanceof SVGElement&&(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t instanceof SVGRectElement&&["width","height"].forEach((function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)})))}}}function m(e){return o.resolveAll().then((function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e}))}function v(e){return i.inlineAll(e).then((function(){return e}))}function w(e,t,r){return Promise.resolve(e).then((function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)})).then(n.escapeXhtml).then((function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"})).then((function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+r+'">'+e+"</svg>"})).then((function(e){return"data:image/svg+xml;charset=utf-8,"+e}))}function x(){return{escape:h,parseExtension:t,mimeType:n,dataAsUrl:f,isDataUrl:r,canvasToBlob:i,resolveUrl:a,getAndEncode:l,uid:c(),delay:p,asArray:d,escapeXhtml:g,makeImage:u,width:m,height:v};function e(){var e="application/font-woff",t="image/jpeg";return{woff:e,woff2:e,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:t,jpeg:t,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function n(n){var r=t(n).toLowerCase();return e()[r]||""}function r(e){return-1!==e.search(/^(data:)/)}function o(e){return new Promise((function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);t(new Blob([o],{type:"image/png"}))}))}function i(e){return e.toBlob?new Promise((function(t){e.toBlob(t)})):o(e)}function a(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href}function c(){var e=0;return function(){return"u"+t()+e++;function t(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function u(e){return new Promise((function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=n,r.src=e}))}function l(e){var t=3e4;return s.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime()),new Promise((function(n){var r,o=new XMLHttpRequest;if(o.onreadystatechange=a,o.ontimeout=c,o.responseType="blob",o.timeout=t,o.open("GET",e,!0),o.send(),s.impl.options.imagePlaceholder){var i=s.impl.options.imagePlaceholder.split(/,/);i&&i[1]&&(r=i[1])}function a(){if(4===o.readyState)if(200===o.status){var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];n(e)},t.readAsDataURL(o.response)}else r?n(r):u("cannot fetch resource: "+e+", status: "+o.status)}function c(){r?n(r):u("timeout of "+t+"ms occured while fetching resource: "+e)}function u(e){console.error(e),n("")}}))}function f(e,t){return"data:"+t+";base64,"+e}function h(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function p(e){return function(t){return new Promise((function(n){setTimeout((function(){n(t)}),e)}))}}function d(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}function g(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")}function m(e){var t=w(e,"border-left-width"),n=w(e,"border-right-width");return e.scrollWidth+t+n}function v(e){var t=w(e,"border-top-width"),n=w(e,"border-bottom-width");return e.scrollHeight+t+n}function w(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}}function y(){var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:i,shouldProcess:t,impl:{readUrls:r,inline:o}};function t(t){return-1!==t.search(e)}function r(t){var r,o=[];while(null!==(r=e.exec(t)))o.push(r[1]);return o.filter((function(e){return!n.isDataUrl(e)}))}function o(e,t,r,o){return Promise.resolve(t).then((function(e){return r?n.resolveUrl(e,r):e})).then(o||n.getAndEncode).then((function(e){return n.dataAsUrl(e,n.mimeType(t))})).then((function(n){return e.replace(i(t),"$1"+n+"$3")}));function i(e){return new RegExp("(url\\(['\"]?)("+n.escape(e)+")(['\"]?\\))","g")}}function i(e,n,i){return a()?Promise.resolve(e):Promise.resolve(e).then(r).then((function(t){var r=Promise.resolve(e);return t.forEach((function(e){r=r.then((function(t){return o(t,e,n,i)}))})),r}));function a(){return!t(e)}}}function C(){return{resolveAll:e,impl:{readAll:t}};function e(){return t(document).then((function(e){return Promise.all(e.map((function(e){return e.resolve()})))})).then((function(e){return e.join("\n")}))}function t(){return Promise.resolve(n.asArray(document.styleSheets)).then(t).then(e).then((function(e){return e.map(o)}));function e(e){return e.filter((function(e){return e.type===CSSRule.FONT_FACE_RULE})).filter((function(e){return r.shouldProcess(e.style.getPropertyValue("src"))}))}function t(e){var t=[];return e.forEach((function(e){try{n.asArray(e.cssRules||[]).forEach(t.push.bind(t))}catch(r){console.log("Error while reading CSS rules from "+e.href,r.toString())}})),t}function o(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return r.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}}}function P(){return{inlineAll:t,impl:{newImage:e}};function e(e){return{inline:t};function t(t){return n.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(t||n.getAndEncode).then((function(t){return n.dataAsUrl(t,n.mimeType(e.src))})).then((function(t){return new Promise((function(n,r){e.onload=n,e.onerror=r,e.src=t}))}))}}function t(o){return o instanceof Element?i(o).then((function(){return o instanceof HTMLImageElement?e(o).inline():Promise.all(n.asArray(o.childNodes).map((function(e){return t(e)})))})):Promise.resolve(o);function i(e){var t=e.style.getPropertyValue("background");return t?r.inlineAll(t).then((function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))})).then((function(){return e})):Promise.resolve(e)}}}e.exports=s})()},"94da":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pornhub"},[n("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Edit the text to create your own logo",show:!0,classes:"tooltipClasses"},expression:"{content:'Edit the text to create your own logo', show: true, classes: 'tooltipClasses'}"}],staticClass:"box"},[n("div",{staticClass:"editarea",style:{"font-size":e.fontSize+"px","background-color":e.transparentBgColor},attrs:{id:"logo"}},[e.reverseHighlight?[n("p",{staticClass:"postfix",style:{color:e.suffixColor,"background-color":e.postfixBgColor},attrs:{contenteditable:""},on:{input:e.updatePrefix}},[e._v(e._s(e.prefixText))]),n("p",{staticClass:"prefix",style:{color:e.prefixColor},attrs:{contenteditable:""},on:{input:e.updateSuffix}},[e._v(e._s(e.suffixText))])]:[n("p",{staticClass:"prefix",style:{color:e.prefixColor},attrs:{contenteditable:""},on:{input:e.updatePrefix}},[e._v(e._s(e.prefixText))]),n("p",{staticClass:"postfix",style:{color:e.suffixColor,"background-color":e.postfixBgColor},attrs:{contenteditable:""},on:{input:e.updateSuffix}},[e._v(e._s(e.suffixText))])]],2)]),n("div",{staticClass:"customize"},[n("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Pick a color you like",show:!0,classes:"tooltipClasses"},expression:"{ content: 'Pick a color you like', show: true, classes: 'tooltipClasses' }"}],staticClass:"customize-color",attrs:{id:"prefixColor"}},[n("div",[e._v("Prefix Text Color: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.prefixColor,expression:"prefixColor"}],attrs:{type:"color"},domProps:{value:e.prefixColor},on:{input:function(t){t.target.composing||(e.prefixColor=t.target.value)}}})]),n("div",[e._v("Suffix Text Color: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.suffixColor,expression:"suffixColor"}],attrs:{type:"color"},domProps:{value:e.suffixColor},on:{input:function(t){t.target.composing||(e.suffixColor=t.target.value)}}})]),n("div",[e._v("Suffix Background Color: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.postfixBgColor,expression:"postfixBgColor"}],attrs:{type:"color"},domProps:{value:e.postfixBgColor},on:{input:function(t){t.target.composing||(e.postfixBgColor=t.target.value)}}})]),n("div",[e._v(" Transparent Background: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.transparentBg,expression:"transparentBg"}],attrs:{type:"checkbox",value:"transparentBg"},domProps:{checked:Array.isArray(e.transparentBg)?e._i(e.transparentBg,"transparentBg")>-1:e.transparentBg},on:{change:function(t){var n=e.transparentBg,r=t.target,o=!!r.checked;if(Array.isArray(n)){var i="transparentBg",a=e._i(n,i);r.checked?a<0&&(e.transparentBg=n.concat([i])):a>-1&&(e.transparentBg=n.slice(0,a).concat(n.slice(a+1)))}else e.transparentBg=o}}})])]),n("div",{staticClass:"customize-misc"},[n("div",[e._v(" Font Size: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.fontSize,expression:"fontSize"}],attrs:{type:"range",min:"30",max:"200"},domProps:{value:e.fontSize},on:{__r:function(t){e.fontSize=t.target.value}}}),e._v(" "+e._s(e.fontSize)+"px ")]),n("div",[e._v("Reverse Highlight: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.reverseHighlight,expression:"reverseHighlight"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.reverseHighlight)?e._i(e.reverseHighlight,null)>-1:e.reverseHighlight},on:{change:function(t){var n=e.reverseHighlight,r=t.target,o=!!r.checked;if(Array.isArray(n)){var i=null,a=e._i(n,i);r.checked?a<0&&(e.reverseHighlight=n.concat([i])):a>-1&&(e.reverseHighlight=n.slice(0,a).concat(n.slice(a+1)))}else e.reverseHighlight=o}}})])])]),n("div",{staticClass:"download-share"},[n("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Export your own logo",show:!0,classes:"tooltipClasses"},expression:"{ content: 'Export your own logo', show: true, classes: 'tooltipClasses' }"}],staticClass:"download",on:{click:e.download}},[e._v(" Export ")]),n("div",{staticClass:"share",on:{click:e.twitter}},[n("i",{staticClass:"iconfont icon-twitter"}),e._v(" Tweet")])])])},o=[],i=n("70b0"),a=n.n(i),s={name:"pornhub",data:function(){return{prefixColor:"#ffffff",suffixColor:"#000000",postfixBgColor:"#ff9900",fontSize:"60",transparentBg:!1,reverseHighlight:!1,prefixText:this.$store.state.prefix,suffixText:this.$store.state.suffix}},mounted:function(){},methods:{updatePrefix:function(e){this.$store.commit("updatePrefix",e.target.childNodes[0].nodeValue)},updateSuffix:function(e){this.$store.commit("updateSuffix",e.target.childNodes[0].nodeValue)},downloadIamge:function(e,t){var n=new Image;n.setAttribute("crossOrigin","anonymous"),n.onload=function(){var e=document.createElement("canvas");e.width=n.width,e.height=n.height;var r=e.getContext("2d");r.drawImage(n,0,0,n.width,n.height);var o=e.toDataURL("image/png"),i=document.createElement("a"),a=new MouseEvent("click");i.download=t||"photo",i.href=o,i.dispatchEvent(a)},n.src=e},download:function(){var e=this,t=document.getElementById("logo");a.a.toPng(t).then((function(t){console.log(t),e.downloadIamge(t,"logo.png")}))},twitter:function(){this.$ga.event("social","action","twitter",1);var e="https://logohub.pro",t=encodeURIComponent("Built with #LogolyPro, by @xiqingongzi ".concat(e));window.open("https://twitter.com/intent/tweet?text=".concat(t))}},computed:{transparentBgColor:function(){return this.transparentBg?"transparent":"#000000"}}},c=s,u=(n("ce2e"),n("2877")),l=Object(u["a"])(c,r,o,!1,null,"06ace183",null);t["default"]=l.exports},b58d:function(e,t,n){},ce2e:function(e,t,n){"use strict";var r=n("b58d"),o=n.n(r);o.a}}]);
//# sourceMappingURL=vertical-pornhub.6c3df6ec.js.map