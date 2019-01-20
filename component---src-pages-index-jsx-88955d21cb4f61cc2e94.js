webpackJsonp([0xc23565d713b7],{82:function(e,t,n){"use strict";function a(e){return e}function r(e,t,n){function r(e,t){var n=g.hasOwnProperty(t)?g[t]:null;N.hasOwnProperty(t)&&s("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&s("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function o(e,n){if(n){s("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),s(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var a=e.prototype,o=a.__reactAutoBindPairs;n.hasOwnProperty(u)&&b.mixins(e,n.mixins);for(var l in n)if(n.hasOwnProperty(l)&&l!==u){var i=n[l],c=a.hasOwnProperty(l);if(r(c,l),b.hasOwnProperty(l))b[l](e,i);else{var p=g.hasOwnProperty(l),m="function"==typeof i,h=m&&!p&&!c&&n.autobind!==!1;if(h)o.push(l,i),a[l]=i;else if(c){var E=g[l];s(p&&("DEFINE_MANY_MERGED"===E||"DEFINE_MANY"===E),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",E,l),"DEFINE_MANY_MERGED"===E?a[l]=d(a[l],i):"DEFINE_MANY"===E&&(a[l]=f(a[l],i))}else a[l]=i}}}else;}function c(e,t){if(t)for(var n in t){var a=t[n];if(t.hasOwnProperty(n)){var r=n in b;s(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var o=n in e;s(!o,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),e[n]=a}}}function p(e,t){s(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(s(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function d(e,t){return function(){var n=e.apply(this,arguments),a=t.apply(this,arguments);if(null==n)return a;if(null==a)return n;var r={};return p(r,n),p(r,a),r}}function f(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function h(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var a=t[n],r=t[n+1];e[a]=m(e,r)}}function E(e){var t=a(function(e,a,r){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=a,this.refs=i,this.updater=r||n,this.state=null;var o=this.getInitialState?this.getInitialState():null;s("object"==typeof o&&!Array.isArray(o),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=o});t.prototype=new w,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],y.forEach(o.bind(null,t)),o(t,v),o(t,e),o(t,_),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),s(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in g)t.prototype[r]||(t.prototype[r]=null);return t}var y=[],g={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},b={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)o(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=l({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=l({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=d(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=l({},e.propTypes,t)},statics:function(e,t){c(e,t)},autobind:function(){}},v={componentDidMount:function(){this.__isMounted=!0}},_={componentWillUnmount:function(){this.__isMounted=!1}},N={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},w=function(){};return l(w.prototype,e.prototype,N),E}var o,l=n(6),i=n(31),s=n(3),u="mixins";o={},e.exports=r},139:function(e,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,o=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,u=s&&s(Object);e.exports=function e(t,c,p){if("string"!=typeof c){if(u){var d=s(c);d&&d!==u&&e(t,d,p)}var f=o(c);l&&(f=f.concat(l(c)));for(var m=0;m<f.length;++m){var h=f[m];if(!(n[h]||a[h]||p&&p[h])){var E=i(c,h);try{r(t,h,E)}catch(e){}}}return t}return t}},6:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function a(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==a.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;e.exports=a()?Object.assign:function(e,t){for(var a,i,s=n(e),u=1;u<arguments.length;u++){a=Object(arguments[u]);for(var c in a)o.call(a,c)&&(s[c]=a[c]);if(r){i=r(a);for(var p=0;p<i.length;p++)l.call(a,i[p])&&(s[i[p]]=a[i[p]])}}return s}},181:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),o=a(r),l="Contact",i=function(){return o.default.createElement("div",null,o.default.createElement("a",{className:"anchor",name:l}),o.default.createElement("h3",null,l),o.default.createElement("section",null,o.default.createElement("p",null,"Applications must be submitted online"),o.default.createElement("p",null,"All required forms and transcripts should be mailed to:"),o.default.createElement("p",null,o.default.createElement("strong",null,"BP Community Scholarship Program",o.default.createElement("br",null),"PO Box 648",o.default.createElement("br",null),"Naperville, IL  60566")),o.default.createElement("br",null),o.default.createElement("p",null,"For program questions or technical support:"),o.default.createElement("p",null,o.default.createElement("strong",null,"info@bpscholarships.com",o.default.createElement("br",null),o.default.createElement("br",null),"630-428-2412",o.default.createElement("br",null),"Fax: 630-428-2695"))))};t.default=i,e.exports=t.default},182:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),o=a(r),l="Eligibility",i=function(){return o.default.createElement("div",null,o.default.createElement("a",{className:"anchor",name:l}),o.default.createElement("h3",null,l),o.default.createElement("section",null,o.default.createElement("p",null,"To be considered for a BP Community Scholarship, you must meet all of the following criteria:"),o.default.createElement("ul",null,o.default.createElement("li",null,"A current high school senior planning to enroll as a full-time student (12 semester hours or more) in an accredited two or four-year college or university in the U.S. for the 2019 - 2020 academic year."),o.default.createElement("li",null,"Legally reside in New York City, Long Island, Westchester County or northern New Jersey."),o.default.createElement("li",null,"Possess at least a 2.0 cumulative grade point average on a 4.0 scale."),o.default.createElement("li",null,"Be able to demonstrate financial need."))))};t.default=i,e.exports=t.default},183:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),o=a(r),l="Instructions",i=function(){return o.default.createElement("div",null,o.default.createElement("a",{className:"anchor",name:l}),o.default.createElement("h3",null,l),o.default.createElement("section",null,o.default.createElement("p",null,"All applications must be submitted online by March 22, 2019."),o.default.createElement("p",null,"Applicants will be required to upload a 500 – 750 word personal statement addressing all of the following questions:"),o.default.createElement("ul",null,o.default.createElement("li",null,"What have been the most important experiences during your high school years that have prepared you for college?"),o.default.createElement("li",null,"What do you wish to achieve from your college education?"),o.default.createElement("li",null,"Why should you be considered for a BP Community Scholarship?")),o.default.createElement("p",null,"Applicants must also submit an official high school transcript."),o.default.createElement("p",null,"Applicants must submit a copy of their Student Aid Report (SAR) including the Expected Family Contribution (EFC) from the information provided on their Free Application for Federal Student Aid (FAFSA).")))};t.default=i,e.exports=t.default},184:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),o=a(r),l=function(){return o.default.createElement("div",null,o.default.createElement("a",{className:"anchor",name:"selection-criteria"}),o.default.createElement("h3",null,"Selection Criteria"),o.default.createElement("section",null,o.default.createElement("p",null,"Awards will be based on the information provided on the application, the personal statement, academic performance, extracurricular activities, work experience, individual goals and demonstrated financial need."),o.default.createElement("p",null,"Scholarship recipients will be selected by a committee of participating station owners and operators and other representatives based on the above criteria.  All applicants will be notified in May.  Scholarship awardees will be required to attend the BP scholarship reception to be held on June 20, 2019 at Citi Field.")))};t.default=l,e.exports=t.default},665:function(e,t,n){e.exports=n.p+"static/groupPhoto.8465e5a7.jpg"},188:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),o=a(r),l=n(85),i=(a(l),n(665)),s=a(i),u=n(182),c=a(u),p=n(183),d=a(p),f=n(184),m=a(f),h=n(181),E=a(h),y=function(){return o.default.createElement("div",null,o.default.createElement("img",{src:s.default,className:"heroImage"}),o.default.createElement("section",null,o.default.createElement("p",null,"This year marks the 32nd year of the BP Community Scholarship Program serving the New York and northern New Jersey area.  Since its inception, the program has awarded over $3.2 million and is approaching 2,000 scholarships benefiting promising students."),o.default.createElement("p",null,"Each year our scholarship awardees are honored at a scholarship reception. This annual event provides an opportunity to recognize the scholarship awardees along with their families and also provides an opportunity for our students to meet BP representatives and other invited dignitaries."),o.default.createElement("p",null,"BP is pleased to support this initiative as a way of giving back to the communities in which we operate by encouraging local high school seniors to pursue their dreams of going to college.")),o.default.createElement(d.default,null),o.default.createElement(c.default,null),o.default.createElement(m.default,null),o.default.createElement(E.default,null))};t.default=y,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-jsx-88955d21cb4f61cc2e94.js.map