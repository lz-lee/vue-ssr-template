(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{6:function(t,e,r){"use strict";r.r(e);var n=r(1),o={methods:{handleClick(){console.log("click")}}},s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1",{on:{click:t.handleClick}},[t._v("vue ssr")]),t._v(" "),r("router-link",{attrs:{to:"/bar"}},[t._v("Bar")]),r("br"),t._v(" "),r("router-link",{attrs:{to:"/baz"}},[t._v("Bar")]),r("br"),t._v(" "),r("router-link",{attrs:{to:"/foo"}},[t._v("Foo")]),r("br"),t._v(" "),r("router-link",{attrs:{to:"/item/1"}},[t._v("Item")]),r("br"),t._v(" "),r("router-view")],1)};s._withStripped=!0;var i=r(0),a=Object(i.a)(o,s,[],!1,null,null,null);a.options.__file="App.vue";var l=a.exports,c=r(4),u=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Bar")])};u._withStripped=!0;var p=Object(i.a)(null,u,[],!1,null,null,null);p.options.__file="components\\Bar.vue";var _=p.exports,v=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Baz")])};v._withStripped=!0;var m=Object(i.a)(null,v,[],!1,null,null,null);m.options.__file="components\\Baz.vue";var h=m.exports,d=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Foo")])};d._withStripped=!0;var f=Object(i.a)(null,d,[],!1,null,null,null);f.options.__file="components\\Foo.vue";var w=f.exports,b={asyncData:({store:t,route:e})=>t.dispatch("fetchItem",e.params.id),computed:{item(){return this.$store.state.items[this.$route.params.id]}}},I=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v(this._s(this.item.title))])};I._withStripped=!0;var k=Object(i.a)(b,I,[],!1,null,null,null);k.options.__file="components\\Item.vue";var S=k.exports;n.a.use(c.a);var $=r(3);n.a.use($.a);const x=()=>new $.a.Store({state:{items:{}},actions:{fetchItem:({commit:t},e)=>(t=>new Promise((t,e)=>{setTimeout(()=>{t({title:"Vuex"})},1e3)}))().then(r=>{t("setItem",{id:e,item:r})})},mutations:{setItem(t,{id:e,item:r}){n.a.set(t.items,e,r)}}});var E=r(5);const{app:T,store:j,router:y}=(t=>{const e=(()=>new c.a({mode:"history",routes:[{path:"/item/:id",component:S},{path:"/bar",component:_},{path:"/baz",component:h},{path:"/foo",component:w}]}))(),r=x();return Object(E.sync)(r,e),{app:new n.a({router:e,store:r,ssrContext:t,render:t=>t(l)}),store:r,router:e}})();window.__INITIAL_STATE__&&j.replaceState(window.__INITIAL_STATE__),y.onReady(()=>{y.beforeResolve((t,e,r)=>{const n=y.getMatchedComponents(t),o=y.getMatchedComponents(e);let s=!1;const i=n.filter((t,e)=>s||(s=o[e]!==t));if(!i.length)return r();Promise.all(i.map(e=>{if(e.asyncData)return e.asyncData({store:j,route:t})})).then(()=>{r()}).catch(r)}),T.$mount("#app")})}},[[6,0,1]]]);
//# sourceMappingURL=main-315d1e4da444ab50389d.js.map