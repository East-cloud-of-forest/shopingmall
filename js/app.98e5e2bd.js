(function(){"use strict";var t={6882:function(t,e,n){n.d(e,{Z:function(){return d}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-img",{style:{cursor:"pointer"},attrs:{alt:"Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"100%"},on:{click:function(e){t.$router.push("/").catch((function(){}))}}})],1)},o=[],a=n(1001),i=n(3453),s=n.n(i),c=n(5288),l={},u=(0,a.Z)(l,r,o,!1,null,null,null),d=u.exports;s()(u,{VImg:c.Z})},8645:function(t,e,n){var r=n(144),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{style:{maxWidth:t.$route.meta.hideAppbar?"100%":"1400px",margin:"auto"}},[t.$route.meta.hideAppbar?t._e():n("v-app-bar",{staticClass:"mx-auto",attrs:{id:"app-bar",color:"white",flat:"",app:"","hide-on-scroll":"","max-width":"1400"},scopedSlots:t._u([{key:"extension",fn:function(){return[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"body-2 mr-2",attrs:{text:"",large:""}},"v-btn",o,!1),r),[n("v-icon",{staticClass:"mr-1",attrs:{dense:""}},[t._v("mdi-menu")]),t._v(" 전체상품 ")],1)]}}],null,!1,2314647215)},[n("v-list-item-group",{staticClass:"white"},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-menu")])],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s("aaa")}})],1)],1),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-menu")])],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s("aaa")}})],1)],1)],1)],1),n("span",{staticClass:"body-2 grey--text mr-1"},[t._v("|")]),t._l(t.navMenu,(function(e,r){return n("v-btn",{key:r,staticClass:"body-2 mx-1",attrs:{text:"",large:""}},[n("v-icon",{staticClass:"mr-1",attrs:{dense:""}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.text)+" ")],1)})),n("v-spacer"),n("v-btn",{staticClass:"body-2",attrs:{text:"",large:""}},[n("v-icon",{staticClass:"mr-1",attrs:{dense:""}},[t._v("mdi-calendar-text")]),t._v(" 이벤트 ")],1)]},proxy:!0}],null,!1,706188266)},[n("v-row",{staticClass:"my-0"},[n("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12"}},[n("div",{staticClass:"d-flex align-center"},[n("LogoComponenet",{staticClass:"mx-3",staticStyle:{width:"40px"}})],1),n("v-text-field",{attrs:{outlined:"",dense:"",id:"serch","hide-details":""}}),n("v-spacer"),n("v-spacer"),n("v-btn",{staticClass:"mr-2",attrs:{icon:"","x-large":""}},[n("v-icon",{attrs:{"x-large":""}},[t._v("mdi-shopping-outline")])],1),n("v-btn",{staticClass:"mr-2",attrs:{icon:"","x-large":""},on:{click:function(e){t.$router.push("/login").catch((function(){}))}}},[n("v-icon",{attrs:{"x-large":""}},[t._v("mdi-account-outline")])],1)],1)],1)],1),n("v-main",{attrs:{"min-height":"100%"}},[n("router-view")],1),n("v-divider"),n("v-footer",{attrs:{color:"white"}},[n("div",{staticClass:"mt-10 mb-5"},[n("p",{staticClass:"mb-0 font-weight-bold text-body-1"},[t._v("토이쇼핑몰(portfolio)")]),n("p",{staticClass:"caption grey--text"},[t._v("© 2022. ecof. All rights reserved. code by ecof.")]),n("p",{staticClass:"text-body-2 mb-0"},[t._v("대표이사: 아무개, 주소: 부산광역시 어딘가 77, Tel:7676-7676")]),n("p",{staticClass:"text-body-2"},[t._v("사업자등록번호: 767-76-76767")]),n("p",{staticClass:"caption font-weight-bold"},[t._v("본 사이트의 상품정보는 11번가 OPEN API에서 제공받았음을 명시합니다.")])])])],1)},a=[],i=n(6882),s={name:"App",data:()=>({navMenu:[{icon:"mdi-alarm",text:"타임특가",router:""},{icon:"mdi-new-box",text:"신규상품",router:""}]}),methods:{},computed:{},components:{LogoComponenet:i.Z}},c=s,l=n(1001),u=n(3453),d=n.n(u),p=n(303),m=n(7666),f=n(6847),v=n(7024),h=n(5596),g=n(7718),y=n(4456),b=n(907),C=n(7445),x=n(3080),w=n(3560),_=n(4021),k=n(8732),Z=n(7894),P=n(2515),S=n(4980),V=(0,l.Z)(c,o,a,!1,null,null,null),A=V.exports;d()(V,{VApp:p.Z,VAppBar:m.Z,VBtn:f.Z,VCol:v.Z,VDivider:h.Z,VFooter:g.Z,VIcon:y.Z,VListItem:b.Z,VListItemContent:C.km,VListItemGroup:x.Z,VListItemIcon:w.Z,VListItemTitle:C.V9,VMain:_.Z,VMenu:k.Z,VRow:Z.Z,VSpacer:P.Z,VTextField:S.Z});var T=n(8345),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-carousel",{attrs:{"show-arrows":!1,"hide-delimiter-background":"",cycle:"","delimiter-icon":"mdi-minus"}},t._l(5,(function(e){return n("v-carousel-item",{key:e},[n("v-sheet",{attrs:{color:"orange",height:"500"}},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"text-h2"},[t._v(t._s(e)+" Slide")])])],1)],1)})),1)],1)],1),n("v-row",{staticClass:"mx-1"},t._l(t.mainproduct,(function(e){return n("v-col",{key:e.productId,attrs:{cols:"6",sm:"3",lg:"2"}},[n("v-card",{attrs:{flat:""},on:{click:function(n){return t.goProductDetail(e.productId,e.sale,e.currentinfo)}}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(r){var o=r.hover;return[n("v-img",{staticClass:"red",attrs:{height:"200",src:e.image}},[n("v-scroll-y-reverse-transition",[o?n("v-btn",{staticClass:"mx-auto",staticStyle:{display:"block",position:"relative",top:"65%"},attrs:{transition:"scale-transition",fab:"",elevation:"0",color:"orange",dark:"",dense:""},on:{click:function(t){t.stopPropagation()}}},[n("v-icon",[t._v("mdi-cart-outline")])],1):t._e()],1)],1)]}}],null,!0)}),n("v-card-text",{staticClass:"py-0 mt-4 black--text",staticStyle:{"white-space":"normal !important",overflow:"hidden !important","text-overflow":"ellipsis !important",display:"-webkit-box","-webkit-line-clamp":"2 !important","-webkit-box-orient":"vertical",height:"44px"},domProps:{innerHTML:t._s("<b>"+e.title+"</b>")}}),n("v-card-text",[t._v(" 배송 : "+t._s(e.delivery)+" ")]),e.sale?n("v-card-text",{staticClass:"pt-0 d-flex align-center"},[n("span",{staticClass:"red--text font-weight-bold body-1"},[t._v(t._s(e.sale.discount)+" %")]),n("v-spacer"),n("span",{staticClass:"text-decoration-line-through mr-1 caption"},[t._v(t._s(parseInt(e.price).toLocaleString("ko-KR"))+" 원")]),n("span",{staticClass:"body-1 orange--text"},[t._v(t._s(parseInt(e.sale.sprice).toLocaleString("ko-KR"))+" 원")])],1):n("v-card-text",{staticClass:"pt-0 body-1 font-weight-medium black--text"},[t._v(" "+t._s(parseInt(e.price).toLocaleString("ko-KR"))+" 원 ")])],1)],1)})),1)],1)},E=[],I={name:"HomeView",methods:{goProductDetail(t,e,n){this.$router.push({name:"product",params:{productId:t},query:{data:JSON.stringify({sale:e,currentinfo:n})}})},aa(){console.log(1)}},computed:{mainproduct(){return this.$store.state.mainproduct}},beforeCreate(){this.$store.dispatch("getMainToyData")}},N=I,L=n(5893),M=n(5255),$=n(2246),B=n(3700),D=n(9657),j=n(5288),R=n(6930),q=n(801),H=(0,l.Z)(N,O,E,!1,null,null,null),F=H.exports;d()(H,{VApp:p.Z,VBtn:f.Z,VCard:L.Z,VCardText:M.ZB,VCarousel:$.Z,VCarouselItem:B.Z,VCol:v.Z,VHover:D.Z,VIcon:y.Z,VImg:j.Z,VRow:Z.Z,VScrollYReverseTransition:R.g3,VSheet:q.Z,VSpacer:P.Z});var X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"text-center"},[n("p",[t._v("미구현")]),n("v-btn",{staticClass:"mx-auto",attrs:{text:"","x-large":""},on:{click:function(e){return t.$router.push("/")}}},[n("h2",[t._v("메인 화면으로 돌아가기")])])],1)},K=[],Y={name:"UnmadeView"},G=Y,W=n(1819),Q=(0,l.Z)(G,X,K,!1,null,null,null),U=Q.exports;d()(Q,{VBtn:f.Z,VContainer:W.Z}),r.Z.use(T.Z);const z=[{path:"/",name:"home",component:F},{path:"/unmade",name:"unmade",component:U},{path:"/login",name:"login",component:function(){return n.e(130).then(n.bind(n,3074))}},{path:"/sighup",name:"sighup",component:function(){return n.e(991).then(n.bind(n,5991))},meta:{hideAppbar:!0},children:[{path:"/choice",name:"sighupc1",component:function(){return n.e(91).then(n.bind(n,4091))},meta:{hideAppbar:!0}},{path:"/sighup/:kind",name:"sighupc2",component:function(){return Promise.all([n.e(90),n.e(587)]).then(n.bind(n,4067))},meta:{hideAppbar:!0}},{path:"/welcome",name:"sighupc3",component:function(){return n.e(269).then(n.bind(n,269))},meta:{hideAppbar:!0}}]},{path:"/forgot/:target/:kind",name:"forgot",component:function(){return n.e(313).then(n.bind(n,3313))}},{path:"/product/:productId",name:"product",component:function(){return Promise.all([n.e(90),n.e(639)]).then(n.bind(n,7239))}},{path:"*",name:"rf",component:F}],J=new T.Z({mode:"history",base:"/shopingmall/",routes:z,scrollBehavior(){return{x:0,y:0}}});var tt=J,et=n(629);r.Z.use(et.ZP);var nt=new et.ZP.Store({state:{user:[],mainproduct:[],currentproduct:{img:[]},key:"e7765a8802c849b94cee275f83404522"},getters:{},mutations:{unmade(){tt.push("/unmade")},resetcurrentproduct(t){t.currentproduct={img:[]}},setMainToyData(t,e){t.mainproduct=e},setCurrentProduct(t,e){t.currentproduct=e}},actions:{getMainToyData({state:t,commit:e}){const n=new XMLHttpRequest,r="ProductSearch",o="동물인형",a=`/api/openapi/OpenApiService.tmall?key=${t.key}&apiCode=${r}&keyword=${o}&targetSearchPrd=KOR&pageSize=12&sortCd=A`;n.onreadystatechange=function(t){const{target:r}=t;if(r.readyState===XMLHttpRequest.DONE){const{status:t}=r;if(0===t||t>=200&&t<400){let t=n.responseXML,r=t.getElementsByTagName("Product"),o=[];for(let e of r){let t=rt(e,"ProductPrice"),n=rt(e,"SalePrice"),r=!1;t!==n&&(r={sprice:n,discount:Math.floor(rt(e,"Discount")/t*100)}),o.push({productId:rt(e,"ProductCode"),image:rt(e,"ProductImage300"),title:rt(e,"ProductName"),price:t,delivery:rt(e,"Delivery"),sale:r,currentinfo:{sellerid:rt(e,"Seller"),sellernick:rt(e,"SellerNick")}})}e("setMainToyData",o),console.log(t)}else console.log(n)}},n.open("GET",a),n.send()},getCurrentProduct({state:t,commit:e},n){const r=new XMLHttpRequest,o="ProductInfo",a=`/api/openapi/OpenApiService.tmall?key=${t.key}&apiCode=${o}&productCode=${n}&option=QAs,PostScripts,PdOption`;r.onreadystatechange=function(t){const{target:n}=t;if(n.readyState===XMLHttpRequest.DONE){const{status:t}=n;if(0===t||t>=200&&t<400){let t=r.responseXML,n=new Object;if(n.name=rt(t,"ProductName"),n.price=rt(t,"Price"),n.ship=rt(t,"ShipFee"),t.getElementsByTagName("ProductOption").length>0){n.status="Y"==rt(t,"status");let e=t.getElementsByTagName("OptionList")[0],r=e.getElementsByTagName("Option"),o=new Array;for(let t of r){let e=t.getElementsByTagName("Value"),n=new Array;for(let t of e)n.push({order:rt(t,"Order"),name:rt(t,"ValueName"),price:rt(t,"Price")});o.push({order:rt(t,"Order"),name:rt(t,"TitleName"),mandatorry:"Y"==rt(t,"MandatoryYN"),value:n})}n.options=o}let o=Array.prototype.slice.call(t.querySelector("Product").children).filter((t=>"AddImage"==t.nodeName.slice(0,-1))).length,a=new Array;a.push(rt(t,"BasicImage"));for(let e=1;e<=o;e++)a.push(rt(t,"AddImage"+[e]));n.img=a;let i=t.getElementsByTagName("QA"),s=new Array,c=1;for(let e of i)s.push({id:c,title:rt(e,"Title"),writer:rt(e,"Writer"),date:rt(e,"Date"),answer:"답변완료"}),c+=1;n.qas=s;let l=t.getElementsByTagName("PostScript"),u=new Array,d=1;for(let e of l)u.push({id:d,title:rt(e,"Title"),writer:rt(e,"Writer"),date:rt(e,"Date"),star:Math.floor(31*Math.random()+70)/20}),d+=1;n.review=u,e("setCurrentProduct",n)}else console.log(r)}},r.open("GET",a),r.send()}},modules:{}});function rt(t,e){return t.getElementsByTagName(e)[0].innerHTML.replace("<![CDATA[","").replace("]]>","")}var ot=n(5121);r.Z.use(ot.Z);var at=new ot.Z({});r.Z.config.productionTip=!1,new r.Z({router:tt,store:nt,vuetify:at,render:function(t){return t(A)}}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],a=t[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(s=!1,a<i&&(i=a));if(s){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{90:"3e920888",91:"0f42dd61",130:"fdecb509",269:"2fc36a0b",313:"13a32c55",587:"3be1cf50",639:"63971cb9",991:"7f7ee174"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{130:"203cfd3b",313:"fa1f30f2",587:"5655fe83",639:"0ef92132"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="code:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=r),t[r]=[o];var p=function(e,n){s.onerror=s.onload=null,clearTimeout(m);var o=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/shopingmall/"}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=a,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(e(i,s))return o();t(r,s,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={130:1,313:1,587:1,639:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),s=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],s=r[1],c=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var u=c(n)}for(e&&e(r);l<i.length;l++)a=i[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},r=self["webpackChunkcode"]=self["webpackChunkcode"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8645)}));r=n.O(r)})();
//# sourceMappingURL=app.98e5e2bd.js.map