(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{300:function(t,e,r){"use strict";r.r(e);r(30),r(19),r(29),r(42),r(25),r(43);var n=r(11),c=r(3);r(24),r(41),r(55),r(36);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"Blog",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.app,c=n.i18n.locale,e.next=4,r("".concat(c)).fetch();case 4:return o=e.sent,e.abrupt("return",{posts:o.map((function(t){return l(l({},t),{},{path:t.path.replace("/".concat(c),"")})}))});case 6:case"end":return e.stop()}}),e)})))()}},d=r(23),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto blog"},[r("section",{staticClass:"grid grid-cols-3 gap-4 pt-12"},t._l(t.posts,(function(e,n){return r("article",{key:"post-"+n,staticClass:"flex flex-col max-w-sm overflow-hidden rounded shadow-lg post"},[e.media?r("img",{staticClass:"w-full",attrs:{src:e.media,alt:e.title}}):t._e(),t._v(" "),r("div",{staticClass:"px-6 py-4 flex-2"},[r("h3",[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:"text-base text-gray-700"},[t._v("\n          "+t._s(e.description)+"\n        ")])]),t._v(" "),r("footer",{staticClass:"p-4"},[r("nuxt-link",{staticClass:"mb-2 text-xl font-bold",attrs:{to:{name:"slug___"+t.$i18n.locale,params:{slug:e.slug}}}},[r("button",{staticClass:"btn btn-teal",attrs:{to:t.$i18n.locale+e.path}},[t._v("\n            "+t._s(t.$t("read-more"))+"\n          ")])])],1)])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);