<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"26de":function(e,t,n){},3083:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.detail.num=t})},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},"313f":function(e,t,n){"use strict";var o=n("26de"),i=n.n(o);i.a},"4c60":function(e,t,n){"use strict";n.r(t);var o=n("3083"),i=n("b50a");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("313f");var u=n("2877"),s=Object(u["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports},9701:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("2f62");function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(){return n.e("components/index/swiper-Image").then(n.bind(null,"7784"))},c=function(){return n.e("components/detail/base-info").then(n.bind(null,"75c5"))},a=function(){return n.e("components/detail/scroll-attrs").then(n.bind(null,"cfde"))},l=function(){return n.e("components/uni-ui/uni-list-item/uni-list-item").then(n.bind(null,"de9e"))},d=function(){return Promise.all([n.e("common/vendor"),n.e("components/detail/scrolll-comments")]).then(n.bind(null,"1afa"))},m=function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-ui/uParse/src/wxParse")]).then(n.bind(null,"643d"))},f=function(){return n.e("components/common/card").then(n.bind(null,"7597"))},p=function(){return n.e("components/common/common").then(n.bind(null,"7c99"))},h=function(){return n.e("components/detail/bottom-btn").then(n.bind(null,"4023"))},v=function(){return n.e("components/common/common-popup").then(n.bind(null,"0d84"))},b=function(){return n.e("components/common/price").then(n.bind(null,"5383"))},g=function(){return Promise.all([n.e("common/vendor"),n.e("components/common/radio-group")]).then(n.bind(null,"19da"))},k=function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-ui/uni-number-box/uni-number-box")]).then(n.bind(null,"cccc"))},x={components:{swiperImage:s,uniListItem:l,baseInfo:c,scrolllComments:d,scrollAttrs:a,uParse:m,card:f,commonList:p,bottomBtn:h,commonPopup:v,price:b,zcmRradioGroup:g,uniNumberBox:k},props:{},onBackPress:function(){for(var e in this.popup)if("none"!==this.popup[e])return this.hide(e),!0},computed:r({},(0,i.mapState)({pathList:function(e){return e.path.list}}),{checkedSkus:function(){var t=this.selects.map(function(e){return e.list[e.selected].name});return console.log(e(t," at pages\\detail\\detail.vue:217")),t.join(",")},checkedSkusIndex:function(){var e=this,t=this.detail.goodsSkus.findIndex(function(t){return t.skusText===e.checkedSkus});return t},showPrice:function(){return console.log(e(this.checkedSkus," at pages\\detail\\detail.vue:229")),!this.checkedSkusIndex<0?this.detail.min_price||0:this.detail.goodsSkus[this.checkedSkusIndex].pprice},maxStock:function(){return this.detail.goodsSkus[this.checkedSkusIndex].stock||100}}),onLoad:function(t){console.log(e(t," at pages\\detail\\detail.vue:243")),t.detail&&this.__init(JSON.parse(t.detail))},data:function(){return{popup:{attr:"none",express:"none",service:"none"},context:"",selects:[],comments:[],banners:[],baseAttrs:[],detail:{id:20,title:"小米MIX3 6GB+128GB",desc:"磁动力滑盖全面屏 / 前后旗舰AI双摄 / 四曲面彩色陶瓷机身 / 高效10W无线充电",cover:"/static/images/demo/list/1.jpg",pprice:3299,num:1,max:100},hotList:[]}},methods:r({},(0,i.mapMutations)(["addGoodsToCart"]),{__init:function(t){var n=this;this.$H.get("/goods/"+t.id).then(function(t){n.banners=t.goodsBanner.map(function(e){return{src:e.url}}),n.detail=t,n.detail.num=1,o.setNavigationBarTitle({title:t.title}),n.baseAttrs=t.goodsAttrs.map(function(e){return{icon:"icon-cpu",title:e.name,desc:e.value}}),n.comments=t.hotComments.map(function(e){var t=[];for(var n in e.imglist)t.push(e.imglist[n].src);return{id:e.id,user_id:e.user.avatar,userpic:e.user.avatar,username:e.user.nickname,create_time:e.review_time,goods_num:e.goods_num,context:e.review.data,imgList:e.review.image}}),n.context=t.content,n.hotList=t.hotList.map(function(e){return{id:e.id,cover:e.cover,title:e.title,oprice:e.min_oprice,desc:e.desc,pprice:e.min_price}}),n.selects=t.goodsSkusCard.map(function(e){var t=e.goodsSkusCardValue.map(function(e){return{id:e.id,name:e.value}});return{id:e.id,title:e.name,selected:0,list:t}}),n.detail.goodsSkus.forEach(function(e){var t=[];for(var n in e.skus)t.push(e.skus[n].value);e.skusText=t.join(",")}),console.log(e(JSON.stringify(n.detail.goodsSkus)," at pages\\detail\\detail.vue:378"))})},openCreatePath:function(){o.navigateTo({url:"../user-path-edit/user-path-edit"}),this.hide("express")},addCart:function(){var e=this.detail;e["checked"]=!1,e["attrs"]=this.selects,this.addGoodsToCart(e),this.hide("attr"),o.showToast({title:"加入成功"})},hide:function(e){var t=this;this.popup[e]="hide",setTimeout(function(){t.popup[e]="none"},200)},show:function(e){this.popup[e]="show"},preview:function(t,n){console.log(e("src: "+t," at pages\\detail\\detail.vue:415"))},navigate:function(t,n){console.log(e("href: "+t," at pages\\detail\\detail.vue:419")),o.showModal({content:"点击链接为："+t,showCancel:!1})}})};t.default=x}).call(this,n("0de9")["default"],n("6e42")["default"])},b50a:function(e,t,n){"use strict";n.r(t);var o=n("9701"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=i.a},bb2c:function(e,t,n){"use strict";(function(e){n("a7fa"),n("921b");o(n("66fd"));var t=o(n("4c60"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["bb2c","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"26de":function(e,t,n){},"313f":function(e,t,n){"use strict";var i=n("26de"),c=n.n(i);c.a},3240:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.detail.num=t})},c=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c})},"4c60":function(e,t,n){"use strict";n.r(t);var i=n("3240"),c=n("b50a");for(var o in c)"default"!==o&&function(e){n.d(t,e,function(){return c[e]})}(o);n("313f");var m=n("2877"),s=Object(m["a"])(c["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports},9701:function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n("2f62");function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){m(e,t,n[t])})}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(){return n.e("components/index/swiper-Image").then(n.bind(null,"7784"))},a=function(){return n.e("components/detail/base-info").then(n.bind(null,"75c5"))},d=function(){return n.e("components/detail/scroll-attrs").then(n.bind(null,"cfde"))},r=function(){return n.e("components/uni-ui/uni-list-item/uni-list-item").then(n.bind(null,"de9e"))},u=function(){return n.e("components/detail/scrolll-comments").then(n.bind(null,"1afa"))},l=function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-ui/uParse/src/wxParse")]).then(n.bind(null,"643d"))},p=function(){return n.e("components/common/card").then(n.bind(null,"7597"))},f=function(){return n.e("components/common/common").then(n.bind(null,"7c99"))},g=function(){return n.e("components/detail/bottom-btn").then(n.bind(null,"4023"))},b=function(){return n.e("components/common/common-popup").then(n.bind(null,"0d84"))},h=function(){return n.e("components/common/price").then(n.bind(null,"5383"))},j=function(){return Promise.all([n.e("common/vendor"),n.e("components/common/radio-group")]).then(n.bind(null,"19da"))},v=function(){return n.e("components/uni-ui/uni-number-box/uni-number-box").then(n.bind(null,"cccc"))},P='\n<p>\n\t\t<img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eec2e38c06ca4747e5640a4d21332b6b.jpg">\n\t\t<img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bf8e8e88b858d3ff49436538987d4801.jpg">\n\t\t<img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eec2e38c06ca4747e5640a4d21332b6b.jpg">\n\t\t<img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ab1fa03f3eccd7a94c85838b37ea19d.jpg">\n\t\t<img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/546795e0c2f27dc9c1ab747ebd421a9a.jpg">\n\t\t<img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/19e8e24c4b1b5b65ebb18056f4d4b774.jpg">\n\t\t<img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c965d19e02c5d73f171d9df72ae8e963.jpg">\n\t\t<img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4b78bb87aab6fcc9ee522eafb7cd94c.jpg">\n\t\t<img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fc88fd153c1da1138fd621e00137d3e2.png">\n</p>\n    ',_={components:{swiperImage:s,uniListItem:r,baseInfo:a,scrolllComments:u,scrollAttrs:d,uParse:l,card:p,commonList:f,bottomBtn:g,commonPopup:b,price:h,zcmRradioGroup:j,uniNumberBox:v},props:{},onBackPress:function(){for(var e in this.popup)if("none"!==this.popup[e])return this.hide(e),!0},data:function(){return{popup:{attr:"none",express:"none",service:"none"},context:P,selects:[{title:"颜色",selected:0,list:[{name:"黄色"},{name:"黑色"},{name:"黄色"}]},{title:"容量",selected:0,list:[{name:"64GB"},{name:"128GB"}]},{title:"套餐",selected:0,list:[{name:"标配套餐一"},{name:"标配套餐二"},{name:"标配套餐三"}]}],comments:[{userpic:"/static/images/demo/demo6.jpg",username:"初棉",create_time:"2018/08/02",goods_num:"12",context:"啊啊啊",imgList:["/static/images/demo/demo6.jpg","/static/images/demo/demo6.jpg","/static/images/demo/demo6.jpg"]},{userpic:"/static/images/demo/demo6.jpg",username:"初棉",create_time:"2018/08/02",goods_num:"12",context:"啊啊啊",imgList:["/static/images/demo/demo6.jpg","/static/images/demo/demo6.jpg","/static/images/demo/demo6.jpg"]},{userpic:"/static/images/demo/demo6.jpg",username:"初棉",create_time:"2018/08/02",goods_num:"12",context:"啊啊啊",imgList:["/static/images/demo/demo6.jpg","/static/images/demo/demo6.jpg","/static/images/demo/demo6.jpg"]},{userpic:"/static/images/demo/demo6.jpg",username:"初棉",create_time:"2018/08/02",goods_num:"12",context:"啊啊啊",imgList:["/static/images/demo/demo6.jpg","/static/images/demo/demo6.jpg","/static/images/demo/demo6.jpg"]},{userpic:"/static/images/demo/demo6.jpg",username:"初棉",create_time:"2018/08/02",goods_num:"12",context:"啊啊啊",imgList:["/static/images/demo/demo6.jpg","/static/images/demo/demo6.jpg","/static/images/demo/demo6.jpg"]}],banners:[{src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/13c41ccd1bd8b38f9017c6faf569fb24.jpg"},{src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg"}],baseAttrs:[{icon:"icon-cpu",title:"CPU",desc:"蛟龙845八核"},{icon:"icon-cpu",title:"CPU",desc:"蛟龙845八核"},{icon:"icon-cpu",title:"CPU",desc:"蛟龙845八核"},{icon:"icon-cpu",title:"CPU",desc:"蛟龙845八核"},{icon:"icon-cpu",title:"CPU",desc:"蛟龙845八核"},{icon:"icon-cpu",title:"CPU",desc:"蛟龙845八核"},{icon:"icon-cpu",title:"CPU",desc:"蛟龙845八核"}],detail:{id:20,title:"小米MIX3 6GB+128GB",desc:"磁动力滑盖全面屏 / 前后旗舰AI双摄 / 四曲面彩色陶瓷机身 / 高效10W无线充电",cover:"/static/images/demo/list/1.jpg",pprice:3299,num:1,max:100},hotList:[{cover:"/static/images/demo/list/1.jpg",title:"米家空调",oprice:"2699",desc:"1.5匹变频",pprice:"1399"},{cover:"/static/images/demo/list/1.jpg",title:"米家空调",oprice:"2699",desc:"1.5匹变频",pprice:"1399"},{cover:"/static/images/demo/list/1.jpg",title:"米家空调",oprice:"2699",desc:"1.5匹变频",pprice:"1399"},{cover:"/static/images/demo/list/1.jpg",title:"米家空调",oprice:"2699",desc:"1.5匹变频",pprice:"1399"}]}},methods:o({},(0,c.mapMutations)(["addGoodsToCart"]),{addCart:function(){var t=this.detail;t["checked"]=!1,t["attrs"]=this.selects,this.addGoodsToCart(t),this.hide("attr"),e.showToast({title:"加入成功"})},hide:function(e){var t=this;this.popup[e]="hide",setTimeout(function(){t.popup[e]="none"},200)},show:function(e){this.popup[e]="show"},preview:function(e,t){console.log(i("src: "+e," at pages\\detail\\detail.vue:381"))},navigate:function(t,n){console.log(i("href: "+t," at pages\\detail\\detail.vue:385")),e.showModal({content:"点击链接为："+t,showCancel:!1})}})};t.default=_}).call(this,n("6e42")["default"],n("0de9")["default"])},b50a:function(e,t,n){"use strict";n.r(t);var i=n("9701"),c=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=c.a},bb2c:function(e,t,n){"use strict";(function(e){n("a7fa"),n("921b");i(n("66fd"));var t=i(n("4c60"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["bb2c","common/runtime","common/vendor"]]]);
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
