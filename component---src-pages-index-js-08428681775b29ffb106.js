(self.webpackChunkbp_community_schoarlships=self.webpackChunkbp_community_schoarlships||[]).push([[678],{4852:function(e){"use strict";e.exports=Object.assign},1739:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ae}});var r,i,u,o,a=n(7294),c=n(5697),s=n.n(c),l=n(3524),L=n.n(l),M=n(9590),y=n.n(M),j=n(4852),T=n.n(j),p="bodyAttributes",f="htmlAttributes",N="titleAttributes",m={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(m).map((function(e){return m[e]})),"charset"),d="cssText",C="href",E="http-equiv",h="innerHTML",g="itemprop",S="name",x="property",O="rel",D="src",b="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},v="defaultTitle",A="defer",k="encodeSpecialCharacters",z="onChangeClientState",Y="titleTemplate",Q=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),U=[m.NOSCRIPT,m.SCRIPT,m.STYLE],P="data-react-helmet",W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},G=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},B=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},F=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},H=function(e){var t=X(e,m.TITLE),n=X(e,Y);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,v);return t||r||void 0},K=function(e){return X(e,z)||function(){}},_=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return R({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[m.BASE]})).map((function(e){return e[m.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var u=r[i].toLowerCase();if(-1!==e.indexOf(u)&&n[u])return t.concat(n)}return t}),[])},q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,u=Object.keys(e),o=0;o<u.length;o++){var a=u[o],c=a.toLowerCase();-1===t.indexOf(c)||n===O&&"canonical"===e[n].toLowerCase()||c===O&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(a)||a!==h&&a!==d&&a!==g||(n=a)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][s]&&(i[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var u=Object.keys(i),o=0;o<u.length;o++){var a=u[o],c=T()({},r[a],i[a]);r[a]=c}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ue=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,u=e.linkTags,o=e.metaTags,a=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,L=e.title,M=e.titleAttributes;ce(m.BODY,r),ce(m.HTML,i),ae(L,M);var y={baseTag:se(m.BASE,n),linkTags:se(m.LINK,u),metaTags:se(m.META,o),noscriptTags:se(m.NOSCRIPT,a),scriptTags:se(m.SCRIPT,s),styleTags:se(m.STYLE,l)},j={},T={};Object.keys(y).forEach((function(e){var t=y[e],n=t.newTags,r=t.oldTags;n.length&&(j[e]=n),r.length&&(T[e]=y[e].oldTags)})),t&&t(),c(e,j,T)},oe=function(e){return Array.isArray(e)?e.join(""):e},ae=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(m.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(P),i=r?r.split(","):[],u=[].concat(i),o=Object.keys(t),a=0;a<o.length;a++){var c=o[a],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===i.indexOf(c)&&i.push(c);var l=u.indexOf(c);-1!==l&&u.splice(l,1)}for(var L=u.length-1;L>=0;L--)n.removeAttribute(u[L]);i.length===u.length?n.removeAttribute(P):n.getAttribute(P)!==o.join(",")&&n.setAttribute(P,o.join(","))}},se=function(e,t){var n=document.head||document.querySelector(m.HEAD),r=n.querySelectorAll(e+"["+P+"]"),i=Array.prototype.slice.call(r),u=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===h)n.innerHTML=t.innerHTML;else if(r===d)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var a=void 0===t[r]?"":t[r];n.setAttribute(r,a)}n.setAttribute(P,"true"),i.some((function(e,t){return o=t,n.isEqualNode(e)}))?i.splice(o,1):u.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),u.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:u}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},Me=function(e,t,n){switch(e){case m.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[P]=!0,i=Le(n,r),[a.createElement(m.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=le(n),u=oe(t);return i?"<"+e+" "+P+'="true" '+i+">"+F(u,r)+"</"+e+">":"<"+e+" "+P+'="true">'+F(u,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case p:case f:return{toComponent:function(){return Le(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[P]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===h||n===d){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),a.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===h||e===d)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+F(r[t],n)+'"';return e?e+" "+i:i}),""),u=r.innerHTML||r.cssText||"",o=-1===U.indexOf(e);return t+"<"+e+" "+P+'="true" '+i+(o?"/>":">"+u+"</"+e+">")}),"")}(e,t,n)}}}},ye=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,u=e.linkTags,o=e.metaTags,a=e.noscriptTags,c=e.scriptTags,s=e.styleTags,l=e.title,L=void 0===l?"":l,M=e.titleAttributes;return{base:Me(m.BASE,t,r),bodyAttributes:Me(p,n,r),htmlAttributes:Me(f,i,r),link:Me(m.LINK,u,r),meta:Me(m.META,o,r),noscript:Me(m.NOSCRIPT,a,r),script:Me(m.SCRIPT,c,r),style:Me(m.STYLE,s,r),title:Me(m.TITLE,{title:L,titleAttributes:M},r)}},je=L()((function(e){return{baseTag:V([C,b],e),bodyAttributes:_(p,e),defer:X(e,A),encode:X(e,k),htmlAttributes:_(f,e),linkTags:q(m.LINK,[O,C],e),metaTags:q(m.META,[S,w,E,x,g],e),noscriptTags:q(m.NOSCRIPT,[h],e),onChangeClientState:K(e),scriptTags:q(m.SCRIPT,[D,h],e),styleTags:q(m.STYLE,[d],e),title:H(e),titleAttributes:_(N,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){ue(e,(function(){ie=null}))})):(ue(e),ie=null)}),ye)((function(){return null})),Te=(i=je,o=u=function(e){function t(){return J(this,t),B(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!y()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case m.SCRIPT:case m.NOSCRIPT:return{innerHTML:t};case m.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,u=e.nestedChildren;return R({},r,((t={})[n.type]=[].concat(r[n.type]||[],[R({},i,this.mapNestedChildrenToProps(n,u))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,u=e.newChildProps,o=e.nestedChildren;switch(r.type){case m.TITLE:return R({},i,((t={})[r.type]=o,t.titleAttributes=R({},u),t));case m.BODY:return R({},i,{bodyAttributes:R({},u)});case m.HTML:return R({},i,{htmlAttributes:R({},u)})}return R({},i,((n={})[r.type]=R({},u),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=R({},t);return Object.keys(e).forEach((function(t){var r;n=R({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,u=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Q[n]||n]=e[n],t}),t)}(Z(i,["children"]));switch(n.warnOnInvalidChildren(e,u),e.type){case m.LINK:case m.META:case m.NOSCRIPT:case m.SCRIPT:case m.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:u});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:u})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Z(e,["children"]),r=R({},n);return t&&(r=this.mapChildrenToProps(t,r)),a.createElement(i,r)},G(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(a.Component),u.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},u.defaultProps={defer:!0,encodeSpecialCharacters:!0},u.peek=i.peek,u.rewind=function(){var e=i.rewind();return e||(e=ye({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);Te.renderStatic=Te.rewind;var pe=Te,fe=n(4578);function Ne(){return Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ne.apply(this,arguments)}function me(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var we=(0,a.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,u=void 0===i?24:i,o=me(e,["color","size"]);return a.createElement("svg",Ne({ref:t,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),a.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))}));we.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},we.displayName="Menu";var de=we;var Ce=function(e){function t(t){var n;return(n=e.call(this,t)||this).toggleMenu=()=>n.setState((e=>({menuFlag:!e.menuFlag}))),n.menuClasses=()=>n.state.menuFlag?["menuItemList","menuItemList--active"].join(" "):["menuItemList"],n.state={menuFlag:!1},n}return(0,fe.Z)(t,e),t.prototype.render=function(){return a.createElement("div",null,a.createElement("div",{className:"header"},a.createElement("div",{className:"logo"},a.createElement("a",{to:"/"},a.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMTIuNnB4IgoJIGhlaWdodD0iMjgzLjVweCIgdmlld0JveD0iMCAwIDIxMi42IDI4My41IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMTIuNiAyODMuNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnIGlkPSJMYXllcl8xIj4KCTxwYXRoIGZpbGw9IiMwMDk5MDAiIGQ9Ik0yMTEuNiwxOTQuN2MtNi44LTcuMy0xNC4zLTEzLjUtMjIuMi0xOC41YzcuOC01LDE1LjMtMTEuMywyMi4xLTE4LjZjLTguOS00LjUtMTguMS03LjgtMjcuMi05LjgKCQljNS42LTcuNCwxMC41LTE1LjksMTQuNS0yNWMtOS45LTEuMi0xOS42LTEuMS0yOC45LDAuMWMyLjgtOC45LDQuNS0xOC41LDUtMjguNWMtOS43LDIuMy0xOC45LDUuNi0yNy4xLDkuOQoJCWMtMC41LTkuMy0yLjEtMTguOS01LTI4LjVjLTguMyw1LjUtMTUuOCwxMS44LTIyLjEsMTguNmMtMy42LTguNi04LjUtMTctMTQuNS0yNWMtNiw4LTEwLjgsMTYuNS0xNC40LDI1LjEKCQlDODUuNSw4Ny42LDc4LDgxLjMsNjkuNyw3NS45bDAsMGMtMi45LDkuNS00LjUsMTkuMS01LDI4LjRjLTguMy00LjMtMTcuNC03LjYtMjcuMS05LjljMC42LDEwLDIuMywxOS42LDUuMSwyOC41CgkJYy05LjMtMS4yLTE5LTEuMi0yOSwwYzMuOSw5LjIsOC44LDE3LjYsMTQuNSwyNWMtOS4xLDIuMS0xOC4zLDUuNC0yNy4yLDkuOWM2LjgsNy4zLDE0LjMsMTMuNSwyMi4yLDE4LjUKCQljLTcuOCw1LTE1LjMsMTEuMy0yMi4xLDE4LjZjOC45LDQuNSwxOC4xLDcuOCwyNy4yLDkuOGMtNS42LDcuNC0xMC41LDE1LjktMTQuNSwyNWM5LjksMS4yLDE5LjYsMS4xLDI4LjgsMAoJCWMtMi44LDguOS00LjUsMTguNS01LDI4LjRjOS43LTIuMywxOC45LTUuNiwyNy4xLTkuOWMwLjQsOS4zLDIuMSwxOC45LDUsMjguNWM4LjMtNS41LDE1LjgtMTEuNywyMi4xLTE4LjYKCQljMy42LDguNiw4LjUsMTcuMSwxNC41LDI1LjFjNi04LDEwLjgtMTYuNSwxNC40LTI1LjFjNi4zLDYuOSwxMy44LDEzLjIsMjIuMiwxOC42YzIuOS05LjUsNC41LTE5LjEsNS0yOC41CgkJYzguMyw0LjMsMTcuNSw3LjYsMjcuMiw5LjljLTAuNi0xMC0yLjMtMTkuNS01LjEtMjguNGM5LjIsMS4yLDE5LDEuMiwyOC45LDBjLTMuOS05LjItOC44LTE3LjYtMTQuNS0yNQoJCUMxOTMuNSwyMDIuNSwyMDIuNywxOTkuMiwyMTEuNiwxOTQuN3oiLz4KCTxwYXRoIGZpbGw9IiM5OUNDMDAiIGQ9Ik0xODQuNCwyMDQuNmMtNS4yLTYuOC0xMS4xLTEyLjgtMTcuNS0xNy43YzcuNy0yLjQsMTUuMi02LjEsMjIuNS0xMC43Yy03LjMtNC42LTE0LjgtOC4yLTIyLjUtMTAuNgoJCWM2LjQtNC45LDEyLjItMTAuOSwxNy41LTE3LjhjLTguNC0xLjktMTYuNy0yLjctMjQuOC0yLjNjNC4zLTYuOCw3LjgtMTQuNCwxMC4zLTIyLjdjLTguNSwxLjEtMTYuNiwzLjItMjQuMSw2LjMKCQljMS43LTcuOSwyLjQtMTYuMiwxLjktMjQuOWMtNy42LDQtMTQuNSw4LjctMjAuNCwxNC4yYy0xLjEtOC0zLjMtMTYuMS02LjctMjRjLTUuOSw2LjQtMTAuNywxMy4yLTE0LjQsMjAuNAoJCWMtMy43LTcuMS04LjYtMTQtMTQuNS0yMC4zYy0zLjMsNy45LTUuNSwxNi02LjUsMjMuOWMtNS45LTUuNC0xMi45LTEwLjItMjAuNi0xNC4xYy0wLjQsOC42LDAuMywxNywyLDI0LjkKCQljLTcuNC0zLjEtMTUuNS01LjEtMjQuMS02LjJjMi42LDguMiw2LjEsMTUuOCwxMC40LDIyLjZjLTgtMC4zLTE2LjQsMC41LTI0LjksMi40YzUuMiw2LjgsMTEuMSwxMi44LDE3LjUsMTcuNwoJCWMtNy43LDIuNC0xNS4yLDYuMS0yMi41LDEwLjdjNy4zLDQuNiwxNC44LDguMiwyMi41LDEwLjZjLTYuNCw0LjktMTIuMiwxMC45LTE3LjUsMTcuOGM4LjQsMS45LDE2LjcsMi43LDI0LjcsMi4zCgkJYy00LjMsNi44LTcuOCwxNC40LTEwLjMsMjIuN2M4LjUtMS4xLDE2LjctMy4yLDI0LjEtNi4zYy0xLjcsNy44LTIuNCwxNi4yLTIsMjQuOGM3LjctNCwxNC42LTguNywyMC41LTE0LjFjMS4xLDgsMy4zLDE2LjEsNi42LDI0CgkJYzUuOC02LjQsMTAuNy0xMy4yLDE0LjQtMjAuM2MzLjcsNy4xLDguNiwxNCwxNC41LDIwLjNjMy4zLTcuOSw1LjUtMTYsNi42LTI0YzUuOSw1LjQsMTIuOSwxMC4yLDIwLjYsMTQuMWMwLjQtOC42LTAuMy0xNy0yLTI0LjgKCQljNy40LDMuMSwxNS42LDUuMSwyNC4xLDYuMmMtMi42LTguMi02LjEtMTUuOC0xMC40LTIyLjZDMTY3LjYsMjA3LjMsMTc2LDIwNi41LDE4NC40LDIwNC42eiIvPgoJPHBhdGggaWQ9Il94MDAzMl8iIGZpbGw9IiNGRkZGMDAiIGQ9Ik0xNDcuOCwxNzYuM2M2LjctMi41LDEzLjItNi4xLDE5LjItMTAuN2MtNy4yLTIuMy0xNC41LTMuNC0yMS42LTMuNQoJCWM1LjUtNC42LDEwLjMtMTAuMiwxNC4zLTE2LjZjLTcuNSwwLjMtMTQuOCwxLjctMjEuNSw0LjJjMy42LTYuMiw2LjItMTMuMSw3LjgtMjAuNWMtNywyLjktMTMuMyw2LjctMTguOCwxMS4zCgkJYzEuMi03LjEsMS4zLTE0LjUsMC4zLTIyYy01LjYsNS4xLTEwLjMsMTAuOS0xMy45LDE3LjFjLTEuMy03LjEtMy43LTE0LjEtNy4yLTIwLjhjLTMuNCw2LjctNS45LDEzLjYtNy4xLDIwLjYKCQljLTMuNi02LjItOC4zLTExLjktMTMuOS0xN2MtMSw3LjUtMC45LDE0LjksMC4zLDIyYy01LjUtNC42LTExLjktOC40LTE4LjktMTEuMmMxLjYsNy40LDQuMiwxNC4zLDcuOCwyMC41CgkJYy02LjctMi40LTE0LTMuOC0yMS41LTQuMWM0LjEsNi40LDguOSwxMS45LDE0LjMsMTYuNmMtNy4yLDAtMTQuNSwxLjItMjEuNywzLjVjNiw0LjYsMTIuNCw4LjIsMTkuMiwxMC42CgkJYy02LjcsMi41LTEzLjIsNi4xLTE5LjIsMTAuN2M3LjIsMi4yLDE0LjUsMy40LDIxLjYsMy41Yy01LjUsNC42LTEwLjMsMTAuMi0xNC40LDE2LjZjNy41LTAuMywxNC44LTEuNywyMS41LTQuMQoJCWMtMy42LDYuMi02LjIsMTMuMi03LjgsMjAuNWM3LTIuOSwxMy4zLTYuNywxOC44LTExLjNjLTEuMiw3LjEtMS4zLDE0LjQtMC4zLDIxLjljNS42LTUuMSwxMC4zLTEwLjgsMTMuOS0xNwoJCWMxLjMsNy4xLDMuNywxNCw3LjIsMjAuN2MzLjUtNi43LDUuOS0xMy42LDcuMi0yMC43YzMuNiw2LjIsOC4zLDExLjksMTMuOSwxN2MxLTcuNSwwLjktMTQuOS0wLjMtMjEuOWM1LjUsNC42LDExLjksOC40LDE4LjksMTEuMwoJCWMtMS42LTcuNC00LjItMTQuMy03LjgtMjAuNWM2LjgsMi40LDE0LDMuOCwyMS42LDQuMWMtNC4xLTYuNC04LjktMTEuOS0xNC40LTE2LjZjNy4yLDAsMTQuNS0xLjIsMjEuNy0zLjUKCQlDMTYwLjksMTgyLjMsMTU0LjUsMTc4LjcsMTQ3LjgsMTc2LjN6Ii8+Cgk8cGF0aCBpZD0iX3gwMDMxXyIgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNy4zLDE3OS45YzcsMCwxMy45LTEuMywyMC40LTMuN2MtNi42LTIuNC0xMy40LTMuNy0yMC40LTMuN2M2LjYtMi40LDEyLjYtNiwxNy45LTEwLjUKCQljLTcsMC0xMy45LDEuMS0yMC41LDMuNWM1LjQtNC41LDkuOC05LjksMTMuMy0xNmMtNi42LDIuNC0xMi42LDUuOC0xOCwxMC4zYzMuNS02LjEsNS44LTEyLjcsNy0xOS41Yy01LjQsNC41LTkuOSw5LjgtMTMuNSwxNS45CgkJYzEuMi02LjksMS4xLTEzLjktMC4xLTIwLjhjLTMuNSw2LTUuOSwxMi41LTcuMSwxOS4zYy0xLjItNi45LTMuNy0xMy41LTcuMi0xOS41Yy0xLjIsNi45LTEuMywxMy45LTAuMSwyMC44CgkJYy0zLjUtNi4xLTguMS0xMS40LTEzLjQtMTUuOWMxLjIsNi45LDMuNSwxMy41LDcsMTkuNWMtNS40LTQuNS0xMS41LTcuOS0xOC0xMC4zYzMuNSw2LjEsNy45LDExLjQsMTMuMywxNgoJCWMtNi42LTIuNC0xMy41LTMuNS0yMC40LTMuNWM1LjMsNC41LDExLjMsOCwxNy45LDEwLjVjLTcsMC0xMy45LDEuMy0yMC41LDMuN2M2LjYsMi40LDEzLjQsMy43LDIwLjQsMy43Yy02LjYsMi40LTEyLjYsNi0xOCwxMC41CgkJYzcsMCwxMy45LTEuMSwyMC41LTMuNWMtNS40LDQuNS05LjgsOS45LTEzLjMsMTZjNi42LTIuNCwxMi43LTUuOCwxOC0xMC4zYy0zLjUsNi4xLTUuOCwxMi43LTcsMTkuNmM1LjQtNC41LDkuOS05LjgsMTMuNC0xNS44CgkJYy0xLjIsNi45LTEuMSwxMy45LDAuMSwyMC43YzMuNS02LDYtMTIuNiw3LjItMTkuNGMxLjIsNi45LDMuNywxMy40LDcuMiwxOS41YzEuMi02LjksMS4zLTEzLjgsMC4xLTIwLjcKCQljMy41LDYuMSw4LjEsMTEuNCwxMy40LDE1LjhjLTEuMi02LjktMy41LTEzLjQtNy0xOS41YzUuNCw0LjUsMTEuNSw3LjksMTguMSwxMC4zYy0zLjUtNi4xLTcuOS0xMS40LTEzLjMtMTYKCQljNi42LDIuNCwxMy41LDMuNSwyMC41LDMuNUMxMzkuOSwxODUuOSwxMzMuOSwxODIuNCwxMjcuMywxNzkuOXoiLz4KPC9nPgo8ZyBpZD0iTGF5ZXJfMiI+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjMDA5OTAwIiBkPSJNMTYzLjYsMzMuNWMwLDYuMS0yLjIsMTQuNS0xMC44LDE0LjVjLTEwLjQsMC0xMC40LTExLjctMTAuNC0xNC4xYzAtMi40LDAtMTQuOCwxMC43LTE0LjgKCQkJQzE2Mi44LDE5LDE2My42LDI5LjgsMTYzLjYsMzMuNXogTTE0Mi42LDFoLTd2NDQuOGwtMC4yLDYuN2g2LjdsMC4yLTUuNmMwLjcsMS4xLDEuNiwyLjQsMy42LDMuOGMzLjIsMi4yLDYuNSwyLjQsOC4zLDIuNAoJCQljNS4xLDAsMTAuMS0yLjIsMTMuMS02LjRjMS45LTIuNCwzLjYtNi40LDMuNi0xMy42YzAtOC4yLTIuNS0xMS45LTQuNC0xNGMtMy40LTMuOS04LjEtNC44LTExLjgtNC44Yy04LjUsMC0xMS4yLDQuNy0xMi4yLDYuNFYxCgkJCUwxNDIuNiwxeiIvPgoJCTxwYXRoIGZpbGw9IiMwMDk5MDAiIGQ9Ik0xODIuOSwzNWMwLTMuMywwLTE1LjEsMTEuMS0xNS4xYzguMiwwLDEwLjIsNywxMC4yLDEzLjdjMCwyLjctMC40LDgtMywxMS43Yy0yLjQsMy4zLTYuMSwzLjYtNy45LDMuNgoJCQlDMTgzLjYsNDguOCwxODIuOSwzOS41LDE4Mi45LDM1eiBNMTc2LjMsNjYuOGg2LjlWNDguNGMyLDMuMyw2LDUuNiwxMS40LDUuNmM4LjksMCwxNy02LjEsMTctMjBjMC0xMy44LTcuNi0xOS4zLTE1LjYtMTkuMwoJCQljLTMsMC05LjIsMC45LTEyLjcsNi44bC0wLjEtNi4yaC03YzAuMSwzLjYsMC4yLDQuNSwwLjIsNi4xTDE3Ni4zLDY2LjhMMTc2LjMsNjYuOHoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"})," ",a.createElement("h3",null," Community Scholarship Program"))),a.createElement("div",{className:"menu"},a.createElement("div",{className:"menuIcon"},a.createElement(de,{onClick:this.toggleMenu})),a.createElement("div",{className:this.menuClasses()},a.createElement("a",{className:"menuItem",href:"https://apply.bpscholarships.com/application/login"},"apply"),a.createElement("a",{className:"menuItem",onClick:this.toggleMenu,href:"#Instructions"},"instructions"),a.createElement("a",{className:"menuItem",onClick:this.toggleMenu,href:"#Eligibility"},"eligibility"),a.createElement("a",{className:"menuItem",onClick:this.toggleMenu,href:"#selection-criteria"},"selection criteria"),a.createElement("a",{className:"menuItem",onClick:this.toggleMenu,href:"#Contact"},"contact")))))},t}(a.Component),Ee=n.p+"static/privacy_policy-d3525cbc8eea2a214afd3ffeda980ed2.pdf",he=n.p+"static/terms_of_use-ac6d2139335dead7630cf79e979c3bd4.pdf",ge=n.p+"static/groupPhoto-956f018d337e529f2db3da94e6208d18.jpg";const Se="Eligibility";var xe=()=>a.createElement("div",null,a.createElement("a",{className:"anchor",name:Se}),a.createElement("h3",null,Se),a.createElement("section",null,a.createElement("p",null,"To be considered for a BP Community Scholarship, you must meet all of the following criteria:"),a.createElement("ul",null,a.createElement("li",null,"A current high school senior planning to enroll as a full-time student (12 semester hours or more) in an accredited two or four-year college or university in the U.S. for the 2023 - 2024 academic year."),a.createElement("li",null,"Legally reside in New York City, Long Island, Westchester County or northern New Jersey."),a.createElement("li",null,"Possess at least a 2.0 cumulative grade point average on a 4.0 scale."),a.createElement("li",null,"Be able to demonstrate financial need."))));const Oe="Instructions";var De=()=>a.createElement("div",null,a.createElement("a",{className:"anchor",name:Oe}),a.createElement("h3",null,Oe),a.createElement("section",null,a.createElement("p",null,"All applications must be submitted online by March 24, 2023."),a.createElement("p",null,"Applicants will be required to upload a 500 - 750 word personal statement addressing all of the following questions:"),a.createElement("ul",null,a.createElement("li",null,"What have been the most important experiences during your high school years that have prepared you for college?"),a.createElement("li",null,"What do you wish to achieve from your college education?"),a.createElement("li",null,"Why should you be considered for a BP Community Scholarship?")),a.createElement("p",null,"Applicants must also submit an official high school transcript."),a.createElement("p",null,"Applicants must submit a copy of their Student Aid Report (SAR) including the Expected Family Contribution (EFC) from the information provided on their Free Application for Federal Student Aid (FAFSA).")));var be=()=>a.createElement("div",null,a.createElement("a",{className:"anchor",name:"selection-criteria"}),a.createElement("h3",null,"Selection Criteria"),a.createElement("section",null,a.createElement("p",null,"Awards will be based on the information provided on the application, the personal statement, academic performance, extracurricular activities, work experience, individual goals and demonstrated financial need."),a.createElement("p",null,"Scholarship recipients will be selected by a committee of participating station owners and operators and other representatives based on the above criteria.  All applicants will be notified by the end of April.  Scholarship awardees will be required to attend the BP scholarship reception to be held on May 25th, 2023 at Citi Field.")));const Ie="Contact";var ve=()=>a.createElement("div",null,a.createElement("a",{className:"anchor",name:Ie}),a.createElement("h3",null,Ie),a.createElement("section",null,a.createElement("p",null,"Applications must be submitted online"),a.createElement("p",null,"All required forms and transcripts should be mailed to:"),a.createElement("p",null,a.createElement("strong",null,"BP Community Scholarship Program",a.createElement("br",null),"PO Box 648",a.createElement("br",null),"Naperville, IL  60566")),a.createElement("br",null),a.createElement("p",null,"For program questions or technical support:"),a.createElement("p",null,a.createElement("strong",null,"info@bpscholarships.com",a.createElement("br",null),a.createElement("br",null),"630-428-2412",a.createElement("br",null),"Fax: 630-428-2695"))));var Ae=()=>a.createElement("div",null,a.createElement(pe,{title:"BP Community Scholarship",meta:[{name:"description",content:""},{name:"keywords",content:""}]}),a.createElement(Ce,null),a.createElement("div",{className:"content"},a.createElement("div",null,a.createElement("img",{src:ge,className:"heroImage"}),a.createElement("section",null,a.createElement("p",null,"This year marks the 36th year of the BP Community Scholarship Program serving the New York and northern New Jersey area.  Since its inception, the program has awarded over $3.6 million and nearly 2,200 scholarships benefiting promising students."),a.createElement("p",null,"Each year our scholarship awardees are honored at a scholarship reception. This annual event provides an opportunity to recognize the scholarship awardees along with their families and also provides an opportunity for our students to meet BP representatives and other invited dignitaries."),a.createElement("p",null,"BP is pleased to support this initiative as a way of giving back to the communities in which we operate by encouraging local high school seniors to pursue their dreams of going to college.")),a.createElement(De,null),a.createElement(xe,null),a.createElement(be,null),a.createElement(ve,null))),a.createElement("footer",{style:{borderTop:"1px solid black",padding:"0.25rem",paddingLeft:"0.5rem"}},a.createElement("a",{target:"_blank",href:Ee,style:{paddingRight:"0.5rem"}},"Privacy Policy"),a.createElement("a",{target:"_blank",href:he},"Terms of Use")))},9590:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function u(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var a,c,s,l;if(Array.isArray(e)){if((a=e.length)!=o.length)return!1;for(c=a;0!=c--;)if(!u(e[c],o[c]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!o.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!u(c.value[1],o.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((a=e.length)!=o.length)return!1;for(c=a;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((a=(s=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=a;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=a;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!u(e[s[c]],o[s[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return u(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},3524:function(e,t,n){"use strict";var r,i=n(7294),u=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function l(){c=e(s.map((function(e){return e.props}))),L.canUseDOM?t(c):n&&(c=n(c))}var L=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},o.render=function(){return u.createElement(r,this.props)},i}(i.PureComponent);return o(L,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(L,"canUseDOM",a),L}}}}]);
//# sourceMappingURL=component---src-pages-index-js-08428681775b29ffb106.js.map