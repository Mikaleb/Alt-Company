(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(t,e,r){"use strict";r.r(e);var n=r(198),o=r.n(n),c=r(199),l=r.n(c),d={components:{IconLight:o.a,IconDark:l.a},data:function(){return{colors:["light","dark"]}},methods:{getClasses:function(t){return this.$colorMode.unknown?{}:{preferred:t===this.$colorMode.preference,selected:t===this.$colorMode.value}}}},f=r(19),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",t._l(t.colors,(function(e){return r("li",{key:e},[r("icon-"+e,{tag:"component",class:t.getClasses(e),on:{click:function(r){t.$colorMode.preference=e}}})],1)})),0)])}),[],!1,null,"abd5006a",null);e.default=component.exports},130:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:r(240)}})])}],o=(r(241),r(19)),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),n,!1,null,null,null);e.default=component.exports},172:function(t,e,r){},174:function(t,e,r){},195:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(27),r(128),r(38),{data:function(){return{query:"",articles:[]}},watch:{query:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return e.articles=[],r.abrupt("return");case 3:return r.next=5,e.$content("articles").only(["title","slug"]).sortBy("createdAt","asc").limit(12).search(t).fetch();case 5:e.articles=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}}),c=r(19),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"search",autocomplete:"off"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),t.articles.length?r("ul",t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[t._v(t._s(article.title))])],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},198:function(t,e,r){r(24),r(13),r(23),r(33),r(21),r(34);var n=r(137),o=r(173);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(49),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),l=e.children,d=void 0===l?[]:l,f=data.class,v=data.staticClass,style=data.style,y=data.staticStyle,h=data.attrs,w=void 0===h?{}:h,m=o(data,["class","staticClass","style","staticStyle","attrs"]);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["feather feather-sun",f,v],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},w)},m),d.concat([r("circle",{attrs:{cx:"12",cy:"12",r:"5"}}),r("line",{attrs:{x1:"12",y1:"1",x2:"12",y2:"3"}}),r("line",{attrs:{x1:"12",y1:"21",x2:"12",y2:"23"}}),r("line",{attrs:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}}),r("line",{attrs:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}}),r("line",{attrs:{x1:"1",y1:"12",x2:"3",y2:"12"}}),r("line",{attrs:{x1:"21",y1:"12",x2:"23",y2:"12"}}),r("line",{attrs:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}}),r("line",{attrs:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}})]))}}},199:function(t,e,r){r(24),r(13),r(23),r(33),r(21),r(34);var n=r(137),o=r(173);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(49),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),l=e.children,d=void 0===l?[]:l,f=data.class,v=data.staticClass,style=data.style,y=data.staticStyle,h=data.attrs,w=void 0===h?{}:h,m=o(data,["class","staticClass","style","staticStyle","attrs"]);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["feather feather-moon",f,v],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},w)},m),d.concat([r("path",{attrs:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}})]))}}},204:function(t,e,r){"use strict";var n={name:"default",components:{HeaderContent:r(75).default}},o=r(19),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("HeaderContent"),t._v(" "),r("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{HeaderContent:r(75).default})},207:function(t,e,r){r(208),t.exports=r(209)},240:function(t,e,r){t.exports=r.p+"fd0af93acd709ec1b5b8ec557aa33a34.svg"},241:function(t,e,r){"use strict";r(174)},75:function(t,e,r){"use strict";r.r(e);var n=r(76),o=r(100),c={name:"HeaderAlt",components:{Dropdown:n.default,ThemeSwitcher:o.default},computed:{isContentPage:function(){var t;return!(null===(t=this.$route.params)||void 0===t||!t.slug)}}},l=r(19),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"p-2 bg-white border-b-2 border-gray-200 shadow dark:bg-gray-800 topnav h-54px"},[r("div",{staticClass:"container px-6 py-3 mx-auto md:flex md:justify-between md:items-center"},[r("div",{staticClass:"flex items-center justify-between"},[r("div",{staticClass:"flex items-center justify-start right"},[r("nuxt-link",{attrs:{to:"/"}},[r("Logo",{staticClass:"w-48 mr-3"})],1)],1),t._v(" "),r("div",{staticClass:"self-end left"},[t.isContentPage?t._e():r("dropdown",{scopedSlots:t._u([{key:"dropdownBtn",fn:function(){return[r("span",{staticClass:"text-black dark:text-white"},[t._v("🌐 "+t._s(t.$i18n.locale))])]},proxy:!0},{key:"content",fn:function(){return[r("ul",[t._l(t.$i18n.locales,(function(e,n){return[t.$i18n.locale!==e.code?r("li",{key:n},[r("nuxt-link",{staticClass:"capitalize text-md dark:text-white",attrs:{to:t.switchLocalePath(e.code)}},[t._v(t._s(e.code))])],1):t._e()]}))],2)]},proxy:!0}],null,!1,2384898703)}),t._v(" "),r("theme-switcher")],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:r(130).default,Dropdown:r(76).default})},76:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{dropdownOpen:!1}}},o=r(19),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative"},[r("button",{staticClass:"relative z-10 items-center justify-center inline-block bg-white rounded-md dark:bg-gray-800",on:{click:function(e){t.dropdownOpen=!t.dropdownOpen}}},[t._t("dropdownBtn"),t._v(" "),r("svg",{staticClass:"w-5 h-5 text-gray-800 dark:text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])],2),t._v(" "),r("transition",{attrs:{"enter-active-class":"transition duration-150 ease-out transform","enter-class":"scale-95 opacity-0","enter-to-class":"scale-100 opacity-100","leave-active-class":"transition duration-150 ease-in transform","leave-class":"scale-100 opacity-100","leave-to-class":"scale-95 opacity-0"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.dropdownOpen,expression:"dropdownOpen"}],staticClass:"absolute right-0 z-20 w-48 p-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800"},[t._t("content")],2)])],1)}),[],!1,null,null,null);e.default=component.exports}},[[207,5,1,6]]]);