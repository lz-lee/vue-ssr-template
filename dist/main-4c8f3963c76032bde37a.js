(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{6:function(t,e,r){"use strict";r.r(e);var o=r(1),n={methods:{handleClick(){console.log("click")}}},s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1",{on:{click:t.handleClick}},[t._v("vue ssr")]),t._v(" "),r("router-link",{attrs:{to:"/bar"}},[t._v("Bar")]),r("br"),t._v(" "),r("router-link",{attrs:{to:"/baz"}},[t._v("Bar")]),r("br"),t._v(" "),r("router-link",{attrs:{to:"/foo"}},[t._v("Foo")]),r("br"),t._v(" "),r("router-link",{attrs:{to:"/item/1"}},[t._v("Item")]),r("br"),t._v(" "),r("router-view")],1)};s._withStripped=!0;var i=r(0),a=Object(i.a)(n,s,[],!1,null,null,null);a.options.__file="App.vue";var l=a.exports,u=r(4),c=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Bar")])};c._withStripped=!0;var p=Object(i.a)(null,c,[],!1,null,null,null);p.options.__file="components\\Bar.vue";var v=p.exports,m=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Baz")])};m._withStripped=!0;var _=Object(i.a)(null,m,[],!1,null,null,null);_.options.__file="components\\Baz.vue";var h=_.exports,d=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Foo")])};d._withStripped=!0;var f=Object(i.a)(null,d,[],!1,null,null,null);f.options.__file="components\\Foo.vue";var b=f.exports,w={asyncData({store:t,route:e}){console.log(e.params.id,"dddd");const r=t.dispatch("fetchItem",e.params.id);return console.log(r),r},computed:{items(){return this.$store.state.items[this.$route.params.id]}}},k=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v(this._s(this.items.title))])};k._withStripped=!0;var $=Object(i.a)(w,k,[],!1,null,null,null);$.options.__file="components\\Item.vue";var x=$.exports;o.a.use(u.a);var j=r(3);o.a.use(j.a);const B=()=>new j.a.Store({state:{items:{title:""}},actions:{fetchItem:({commit:t},e)=>(t=>new Promise((t,e)=>{setTimeout(()=>{t({title:"Vuex"})},1e3)}))().then(r=>{t("setItem",{id:e,item:r})})},mutations:{setItem(t,{id:e,item:r}){o.a.set(t.items,e,r)}}});var I=r(5);const{app:O,store:S,router:E}=(t=>{const e=(()=>new u.a({mode:"history",routes:[{path:"/item/:id",component:x},{path:"/bar",component:v},{path:"/baz",component:h},{path:"/foo",component:b}]}))(),r=B();return Object(I.sync)(r,e),{app:new o.a({router:e,store:r,ssrContext:t,render:t=>t(l)}),store:r,router:e}})();E.onReady(()=>{O.$mount("#app")})}},[[6,0,1]]]);
//# sourceMappingURL=main-4c8f3963c76032bde37a.js.map