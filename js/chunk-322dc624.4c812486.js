(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-322dc624"],{"535f":function(t,e,s){"use strict";var a=s("bc63"),n=s.n(a);n.a},bc63:function(t,e,s){},f781:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"my_goods_list"}},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.page>0,expression:"page > 0"}],staticClass:"pre_button_top",on:{click:function(e){t.page-=1}}},[t._v(" ← 前へ")]),s("p",{staticClass:"page_preview_top"},[t._v("ページ "+t._s(t.page+1))]),s("button",{directives:[{name:"show",rawName:"v-show",value:t.ppc*t.page+t.ppc<t.reverseItems.length,expression:"ppc*page+ppc < reverseItems.length"}],staticClass:"next_button_top",on:{click:function(e){t.page+=1}}},[t._v("次へ →")]),s("ul",t._l(t.reverseItems.slice(t.ppc*t.page,t.ppc*t.page+t.ppc),function(e){var a=e.id,n=e.goods_name,o=e.contact,r=e.price,c=e.currency,i=e.image_path;return s("li",{key:a},[s("router-link",{staticClass:"my_goods_link",attrs:{to:"/my_goods_list/"+a}},[s("div",{staticClass:"goods_link"},[s("img",{staticClass:"my_goods_img",attrs:{src:"https://localhost:8080"+i}}),s("br"),s("br"),s("h2",{staticClass:"goods_name"},[t._v(t._s(n))]),s("br"),s("br"),s("h4",[t._v("出品者 "+t._s(o))]),s("br"),s("h4","JPY"==c?[t._v(t._s(Math.round(r/t.mona_price*1e8)/1e8)+" MONA")]:[t._v(t._s(r)+" MONA")])])])],1)}),0),s("button",{directives:[{name:"show",rawName:"v-show",value:t.page>0,expression:"page > 0"}],staticClass:"pre_button_bottom",on:{click:function(e){t.page-=1}}},[t._v(" ← 前へ")]),s("p",{staticClass:"page_preview_bottom"},[t._v("ページ "+t._s(t.page+1))]),s("button",{directives:[{name:"show",rawName:"v-show",value:t.ppc*t.page+t.ppc<t.reverseItems.length,expression:"ppc*page+ppc < reverseItems.length"}],staticClass:"next_button_bottom",on:{click:function(e){t.page+=1}}},[t._v("次へ →")])])},n=[],o=(s("96cf"),s("3b8d")),r=s("bc3a"),c=s.n(r),i=s("00d0"),p={name:"my_goods_list",data:function(){return{mona_price:1,my_goods_list:[],page:0,ppc:30}},created:function(){var t=this;this.get_mona_price(),i["a"].ask_my_goods_list().then(function(e){console.log(e["data"]),t.my_goods_list=e["data"]})},methods:{get_mona_price:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,s,a,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e="https://public.bitbank.cc/mona_jpy/transactions",t.next=3,c.a.get(e).then(function(t){return n.info=t});case 3:s=t.sent,a=s["data"]["data"]["transactions"][0]["price"],this.mona_price=a;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},computed:{reverseItems:function(){return this.my_goods_list.slice().reverse()}}},_=p,u=(s("535f"),s("2877")),l=Object(u["a"])(_,a,n,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-322dc624.4c812486.js.map