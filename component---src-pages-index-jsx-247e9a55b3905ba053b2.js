webpackJsonp([0xc23565d713b7],{99:function(e,t,n){"use strict";function r(e){return e}function o(e,t,n){function o(e,t){var n=b.hasOwnProperty(t)?b[t]:null;w.hasOwnProperty(t)&&s("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&s("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function a(e,n){if(n){s("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),s(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=e.prototype,a=r.__reactAutoBindPairs;n.hasOwnProperty(u)&&v.mixins(e,n.mixins);for(var l in n)if(n.hasOwnProperty(l)&&l!==u){var i=n[l],c=r.hasOwnProperty(l);if(o(c,l),v.hasOwnProperty(l))v[l](e,i);else{var f=b.hasOwnProperty(l),m="function"==typeof i,h=m&&!f&&!c&&n.autobind!==!1;if(h)a.push(l,i),r[l]=i;else if(c){var y=b[l];s(f&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,l),"DEFINE_MANY_MERGED"===y?r[l]=p(r[l],i):"DEFINE_MANY"===y&&(r[l]=d(r[l],i))}else r[l]=i}}}else;}function c(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in v;s(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in e;if(a){var l=g.hasOwnProperty(n)?g[n]:null;return s("DEFINE_MANY_MERGED"===l,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=p(e[n],r))}e[n]=r}}}function f(e,t){s(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(s(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function p(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return f(o,n),f(o,r),o}}function d(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function h(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var r=t[n],o=t[n+1];e[r]=m(e,o)}}function y(e){var t=r(function(e,r,o){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=r,this.refs=i,this.updater=o||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;s("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=a});t.prototype=new M,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],E.forEach(a.bind(null,t)),a(t,_),a(t,e),a(t,N),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),s(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in b)t.prototype[o]||(t.prototype[o]=null);return t}var E=[],b={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},v={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)a(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=l({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=l({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=p(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=l({},e.propTypes,t)},statics:function(e,t){c(e,t)},autobind:function(){}},_={componentDidMount:function(){this.__isMounted=!0}},N={componentWillUnmount:function(){this.__isMounted=!1}},w={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},M=function(){};return l(M.prototype,e.prototype,w),y}var a,l=n(6),i=n(35),s=n(3),u="mixins";a={},e.exports=o},153:function(e,t){"use strict";function n(e,t,f){if("string"!=typeof t){if(c){var p=u(t);p&&p!==c&&n(e,p,f)}var d=l(t);i&&(d=d.concat(i(t)));for(var m=0;m<d.length;++m){var h=d[m];if(!(r[h]||o[h]||f&&f[h])){var y=s(t,h);try{a(e,h,y)}catch(e){}}}return e}return e}var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,l=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,c=u&&u(Object);e.exports=n},6:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,i,s=n(e),u=1;u<arguments.length;u++){r=Object(arguments[u]);for(var c in r)a.call(r,c)&&(s[c]=r[c]);if(o){i=o(r);for(var f=0;f<i.length;f++)l.call(r,i[f])&&(s[i[f]]=r[i[f]])}}return s}},52:function(e,t){"use strict";function n(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case p:case d:case i:case u:case s:case h:return e;default:switch(e=e&&e.$$typeof){case f:case m:case b:case E:case c:return e;default:return t}}case l:return t}}}function r(e){return n(e)===d}var o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,l=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.async_mode"):60111,d=o?Symbol.for("react.concurrent_mode"):60111,m=o?Symbol.for("react.forward_ref"):60112,h=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.suspense_list"):60120,E=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,g=o?Symbol.for("react.block"):60121,v=o?Symbol.for("react.fundamental"):60117,_=o?Symbol.for("react.responder"):60118,N=o?Symbol.for("react.scope"):60119;t.AsyncMode=p,t.ConcurrentMode=d,t.ContextConsumer=f,t.ContextProvider=c,t.Element=a,t.ForwardRef=m,t.Fragment=i,t.Lazy=b,t.Memo=E,t.Portal=l,t.Profiler=u,t.StrictMode=s,t.Suspense=h,t.isAsyncMode=function(e){return r(e)||n(e)===p},t.isConcurrentMode=r,t.isContextConsumer=function(e){return n(e)===f},t.isContextProvider=function(e){return n(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return n(e)===m},t.isFragment=function(e){return n(e)===i},t.isLazy=function(e){return n(e)===b},t.isMemo=function(e){return n(e)===E},t.isPortal=function(e){return n(e)===l},t.isProfiler=function(e){return n(e)===u},t.isStrictMode=function(e){return n(e)===s},t.isSuspense=function(e){return n(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===u||e===s||e===h||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===E||e.$$typeof===c||e.$$typeof===f||e.$$typeof===m||e.$$typeof===v||e.$$typeof===_||e.$$typeof===N||e.$$typeof===g)},t.typeOf=n},121:function(e,t,n){"use strict";e.exports=n(52)},189:function(e,t,n){"use strict";function r(e,t){if(!e){if(o)throw new Error(a);throw new Error(a+": "+(t||""))}}Object.defineProperty(t,"__esModule",{value:!0});var o=!0,a="Invariant failed";t.default=r},190:function(e,t,n){"use strict";function r(e,t){if(!o){if(e)return;var n="Warning: "+t;"undefined"!=typeof console&&console.warn(n);try{throw Error(n)}catch(e){}}}var o=!0;e.exports=r},198:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),l="Contact",i=function(){return a.default.createElement("div",null,a.default.createElement("a",{className:"anchor",name:l}),a.default.createElement("h3",null,l),a.default.createElement("section",null,a.default.createElement("p",null,"Applications must be submitted online"),a.default.createElement("p",null,"All required forms and transcripts should be mailed to:"),a.default.createElement("p",null,a.default.createElement("strong",null,"BP Community Scholarship Program",a.default.createElement("br",null),"PO Box 648",a.default.createElement("br",null),"Naperville, IL  60566")),a.default.createElement("br",null),a.default.createElement("p",null,"For program questions or technical support:"),a.default.createElement("p",null,a.default.createElement("strong",null,"info@bpscholarships.com",a.default.createElement("br",null),a.default.createElement("br",null),"630-428-2412",a.default.createElement("br",null),"Fax: 630-428-2695"))))};t.default=i,e.exports=t.default},199:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),l="Eligibility",i="2021 - 2022",s=function(){return a.default.createElement("div",null,a.default.createElement("a",{className:"anchor",name:l}),a.default.createElement("h3",null,l),a.default.createElement("section",null,a.default.createElement("p",null,"To be considered for a BP Community Scholarship, you must meet all of the following criteria:"),a.default.createElement("ul",null,a.default.createElement("li",null,"A current high school senior planning to enroll as a full-time student (12 semester hours or more) in an accredited two or four-year college or university in the U.S. for the ",i," academic year."),a.default.createElement("li",null,"Legally reside in New York City, Long Island, Westchester County or northern New Jersey."),a.default.createElement("li",null,"Possess at least a 2.0 cumulative grade point average on a 4.0 scale."),a.default.createElement("li",null,"Be able to demonstrate financial need."))))};t.default=s,e.exports=t.default},200:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),l="Instructions",i="March 26, 2021",s=function(){return a.default.createElement("div",null,a.default.createElement("a",{className:"anchor",name:l}),a.default.createElement("h3",null,l),a.default.createElement("section",null,a.default.createElement("p",null,"All applications must be submitted online by ",i,"."),a.default.createElement("p",null,"Applicants will be required to upload a 500 – 750 word personal statement addressing all of the following questions:"),a.default.createElement("ul",null,a.default.createElement("li",null,"What have been the most important experiences during your high school years that have prepared you for college?"),a.default.createElement("li",null,"What do you wish to achieve from your college education?"),a.default.createElement("li",null,"Why should you be considered for a BP Community Scholarship?")),a.default.createElement("p",null,"Applicants must also submit an official high school transcript."),a.default.createElement("p",null,"Applicants must submit a copy of their Student Aid Report (SAR) including the Expected Family Contribution (EFC) from the information provided on their Free Application for Federal Student Aid (FAFSA).")))};t.default=s,e.exports=t.default},201:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),l="June 2021",i=function(){return a.default.createElement("div",null,a.default.createElement("a",{className:"anchor",name:"selection-criteria"}),a.default.createElement("h3",null,"Selection Criteria"),a.default.createElement("section",null,a.default.createElement("p",null,"Awards will be based on the information provided on the application, the personal statement, academic performance, extracurricular activities, work experience, individual goals and demonstrated financial need."),a.default.createElement("p",null,"Scholarship recipients will be selected by a committee of participating station owners and operators and other representatives based on the above criteria.  All applicants will be notified in May.  Scholarship awardees may be required to attend the BP scholarship reception to be held in ",l," at Citi Field.")))};t.default=i,e.exports=t.default},707:function(e,t,n){e.exports=n.p+"static/groupPhoto.74cf1fb9.jpg"},205:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),l=n(102),i=(r(l),n(707)),s=r(i),u=n(199),c=r(u),f=n(200),p=r(f),d=n(201),m=r(d),h=n(198),y=r(h),E="34th",b="nearly $3.4 million",g="2,100",v=function(){return a.default.createElement("div",null,a.default.createElement("img",{src:s.default,className:"heroImage"}),a.default.createElement("section",null,a.default.createElement("p",null,"This year marks the ",E," year of the BP Community Scholarship Program serving the New York and northern New Jersey area.  Since its inception, the program has awarded ",b," and ",g," scholarships benefiting promising students."),a.default.createElement("p",null,"Each year our scholarship awardees are honored at a scholarship reception. This annual event provides an opportunity to recognize the scholarship awardees along with their families and also provides an opportunity for our students to meet BP representatives and other invited dignitaries."),a.default.createElement("p",null,"BP is pleased to support this initiative as a way of giving back to the communities in which we operate by encouraging local high school seniors to pursue their dreams of going to college.")),a.default.createElement(p.default,null),a.default.createElement(c.default,null),a.default.createElement(m.default,null),a.default.createElement(y.default,null))};t.default=v,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-jsx-247e9a55b3905ba053b2.js.map