(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78b57bfe"],{8629:function(t,o,n){"use strict";n.r(o);var s=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"product"},[n("h1",[t._v(t._s(t.goods_info[0]["goods_name"]))]),n("img",{staticClass:"goods_img",attrs:{src:"https://localhost:3000"+t.goods_info[0]["image_path"]}}),n("br"),n("h3",[t._v("商品説明")]),n("p",{staticClass:"goods_info",staticStyle:{"white-space":"pre-line"}},[t._v(t._s(t.goods_info[0]["discription"]))]),n("h3",[t._v("連絡先")]),n("p",{staticClass:"goods_info"},[t._v(t._s(t.goods_info[0]["contact"]))]),n("h3",[t._v("金額")]),"JPY"==t.goods_info[0]["currency"]?n("p",{staticClass:"goods_info"},[t._v(t._s(Math.round(t.goods_info[0]["price"]/t.mona_price*1e8)/1e8)+" MONA")]):n("p",{staticClass:"goods_info"},[t._v(t._s(t.goods_info[0]["price"])+" MONA")]),n("h3",[t._v("タイムスタンプ")]),n("p",{staticClass:"goods_info"},[t._v(t._s(t.goods_info[0]["timestamp"]))]),n("h3",[t._v("署名データ")]),n("p",{staticClass:"goods_info"},[t._v("address : "+t._s(t.goods_info[0]["address"]))]),n("p",{staticClass:"goods_info"},[t._v("message : "+t._s(t.goods_info[0]["message"]))]),n("p",{staticClass:"goods_info"},[t._v("signature : "+t._s(t.goods_info[0]["signature"]))]),n("br"),n("br"),n("button",{staticClass:"pay_button",on:{click:function(o){return t.pay_to_displayer()}}},[t._v("支払う")])])},e=[],i=(n("96cf"),n("3b8d")),a=(n("c5f6"),n("bc3a")),r=n.n(a),c=n("00d0"),_={name:"Goods",props:{id:Number},data:function(){return{mona_price:1,goods_info:[]}},created:function(){var t=this;this.get_mona_price(),c["a"].get_goods_info(this.id).then(function(o){t.goods_info=o["data"],t.$emit("updateHead")})},methods:{get_mona_price:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var o,n,s,e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o="https://public.bitbank.cc/mona_jpy/transactions",t.next=3,r.a.get(o).then(function(t){return e.info=t});case 3:n=t.sent,s=n["data"]["data"]["transactions"][0]["price"],this.mona_price=s;case 6:case"end":return t.stop()}},t,this)}));function o(){return t.apply(this,arguments)}return o}(),pay_to_displayer:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var o,n,s,e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=0,n=this.goods_info[0]["address"],o="JPY"==this.goods_info[0]["currency"]?Math.round(this.goods_info[0]["price"]/this.mona_price*1e8)/1e8:this.goods_info[0]["price"],s="purchase from mona_marche",t.next=6,window.mpurse.sendAsset(n,"MONA",o,"plain",s);case 6:e=t.sent,c["a"].save_tx_history(n,o,e),alert("送金したよ！\nTX_hash : "+e);case 9:case"end":return t.stop()}},t,this)}));function o(){return t.apply(this,arguments)}return o}()},head:{title:function(){return{inner:this.goods_info[0]["goods_name"]}},meta:function(){return[{property:"og:url",content:"https://monamarche.info/#/goods_list/"+this.goods_info[0]["id"]},{property:"og:description",content:this.goods_info[0]["discription"]},{property:"og:title",content:this.goods_info[0]["goods_name"]},{property:"og:image",content:"https://monamarche.info"+this.goods_info[0]["image_path"]},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:"@Mr_1484"},{name:"twitter:title",content:this.goods_info[0]["goods_name"]},{name:"twitter:description",content:this.goods_info[0]["discription"]},{name:"twitter:image",content:"https://monamarche.info"+this.goods_info[0]["image_path"]}]}}},d=_,p=(n("8824"),n("2877")),g=Object(p["a"])(d,s,e,!1,null,null,null);o["default"]=g.exports},8824:function(t,o,n){"use strict";var s=n("8b0e"),e=n.n(s);e.a},"8b0e":function(t,o,n){}}]);
//# sourceMappingURL=chunk-78b57bfe.34f31d99.js.map