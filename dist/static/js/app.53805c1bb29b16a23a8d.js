webpackJsonp([1],{CgBA:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),n={name:"top",methods:{alert:function(t){function s(){return t.apply(this,arguments)}return s.toString=function(){return t.toString()},s}(function(){alert("暂不支持注册和登录功能")})}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header"},[a("div",{staticClass:"header-wrapper"},[a("img",{attrs:{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg",alt:"logo"}}),t._v(" "),a("ul",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("li",{on:{click:t.alert}},[t._v("注册")]),t._v(" "),a("li",{on:{click:t.alert}},[t._v("登录")])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("a",{attrs:{href:"#"}},[this._v("首页")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("a",{attrs:{href:"#"}},[this._v("新手入门")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("a",{attrs:{href:"#"}},[this._v("API")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("a",{attrs:{href:"#"}},[this._v("关于")])])}]};var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"footer"},[s("div",{staticClass:"content"},[s("p",[this._v("CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。")]),this._v(" "),s("p",[this._v("新手搭建 Node.js 服务器，推荐使用无需备案的 "),s("a",{attrs:{href:"https://www.digitalocean.com/",target:"_blank"}},[this._v("DigitalOcean")])])])])}]};var o={name:"App",components:{Top:a("VU/8")(n,i,!1,function(t){a("V9EN")},"data-v-d6edf086",null).exports,Footer:a("VU/8")({name:"Footer"},r,!1,function(t){a("uklJ")},"data-v-35fdc2bc",null).exports}},_={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("Top"),this._v(" "),s("div",{staticClass:"main"},[s("router-view",{attrs:{name:"main"}})],1),this._v(" "),s("Footer")],1)},staticRenderFns:[]};var l=a("VU/8")(o,_,!1,function(t){a("CgBA")},null,null).exports,c=a("/ocq"),v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[!0===t.isLoading?a("div",{staticClass:"loading"},[a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span")]):a("div",{staticClass:"mainList"},[t._m(0),t._v(" "),a("ol",t._l(t.posts,function(s){return a("li",[a("div",{staticClass:"left-wrapper"},[a("img",{attrs:{src:s.author.avatar_url,alt:"avatar"}}),t._v(" "),a("span",{staticClass:"count"},[t._v(t._s(s.reply_count)+"/"),a("span",{staticClass:"visit"},[t._v(t._s(s.visit_count))])]),t._v(" "),!0===s.top?a("span",{staticClass:"tab top"},[t._v("置顶")]):t._e(),t._v(" "),1==!s.top&&!0===s.good?a("span",{staticClass:"tab"},[t._v("精华")]):t._e(),t._v(" "),1==!s.top&&"share"===s.tab?a("span",{staticClass:"tab"},[t._v("分享")]):t._e(),t._v(" "),1==!s.top&&"ask"===s.tab?a("span",{staticClass:"tab"},[t._v("问答")]):t._e(),t._v(" "),1==!s.top&&"job"===s.tab?a("span",{staticClass:"tab"},[t._v("招聘")]):t._e(),t._v(" "),a("router-link",{attrs:{to:{name:"post",params:{id:s.id}}}},[a("span",{staticClass:"title"},[t._v(t._s(s.title))])])],1),t._v(" "),a("div",{staticClass:"right-wrapper"},[a("span",{staticClass:"replyTime"},[t._v(t._s(t._f("formatDate")(s.last_reply_at)))])])])}),0)])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",[a("span",[t._v("全部")]),t._v(" "),a("span",[t._v("精华")]),t._v(" "),a("span",[t._v("分享")]),t._v(" "),a("span",[t._v("问答")]),t._v(" "),a("span",[t._v("招聘")])])}]};var p=a("VU/8")({name:"MainList",data:function(){return{posts:[],isLoading:!0}},methods:{getData:function(){var t=this;this.$axios.get("https://cnodejs.org/api/v1/topics/?limit=40&page=1").then(function(s){t.posts=s.data.data,t.isLoading=!1})}},beforeMount:function(){this.getData()}},v,!1,function(t){a("nw4C")},"data-v-050d7378",null).exports,u={name:"Article",data:function(){return{post:{},reply:[],isLoading:!0,articleId:""}},methods:{getArticle:function(){var t=this;this.$axios.get("https://cnodejs.org/api/v1/topic/"+this.articleId).then(function(s){t.post=s.data.data,t.reply=t.post.replies,t.isLoading=!1,console.log(t.reply)})}},beforeMount:function(){this.articleId=this.$route.params.id,console.log(this.articleId),this.getArticle()}},d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[!0===t.isLoading?a("div",{staticClass:"loading"},[a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span")]):a("div",{staticClass:"article"},[a("div",{staticClass:"main-wrapper"},[a("div",{staticClass:"paper"},[a("div",{staticClass:"title-wrapper"},[!0===t.post.good?a("span",{staticClass:"tab"},[t._v("精华")]):t._e(),t._v(" "),!0===t.post.top?a("span",{staticClass:"tab"},[t._v("置顶")]):t._e(),t._v(" "),a("span",{staticClass:"title"},[t._v(t._s(t.post.title))])]),t._v(" "),a("ul",[a("span",[t._v("•")]),t._v(" "),a("li",[t._v(" 发布于"+t._s(t._f("formatDate")(t.post.create_at)))]),t._v(" "),a("span",[t._v("•")]),t._v(" "),a("li",[t._v(" 作者 "+t._s(t.post.author.loginname))]),t._v(" "),a("span",[t._v("•")]),t._v(" "),a("li",[t._v(t._s(t.post.visit_count)+"次浏览")]),t._v(" "),a("span",[t._v("•")]),t._v(" "),a("li",[t._v(" 来自 分享")])]),t._v(" "),a("div",{staticClass:"content",attrs:{id:"content"},domProps:{innerHTML:t._s(t.post.content)}})]),t._v(" "),a("div",{staticClass:"reply"},[a("p",[t._v(t._s(t.reply.length)+"回复")]),t._v(" "),a("ol",t._l(t.reply,function(s,e){return a("li",[a("img",{attrs:{src:s.author.avatar_url,alt:"avatar"}}),t._v(" "),a("div",{staticClass:"reply-wrapper"},[a("div",{staticClass:"replyInfo"},[a("span",[t._v(t._s(s.author.loginname))]),t._v(" "),a("span",[t._v(t._s(e+1)+"楼")]),t._v(" "),a("span",[t._v(t._s(t._f("formatDate")(s.create_at)))]),t._v(" "),a("span",[t._v("☝"+t._s(s.ups.length))])]),t._v(" "),a("div",{staticClass:"replyContent",domProps:{innerHTML:t._s(s.content)}})])])}),0)])]),t._v(" "),a("div",{staticClass:"aside"})])])},staticRenderFns:[]};var f=a("VU/8")(u,d,!1,function(t){a("Usjt")},null,null).exports;e.a.use(c.a);var h=new c.a({routes:[{name:"root",path:"/",components:{main:p}},{name:"post",path:"/topic/:id",components:{main:f}},{name:"user",path:"/user",components:f}]}),m=a("mtWM"),g=a.n(m);e.a.prototype.$axios=g.a,e.a.config.productionTip=!1,e.a.filter("formatDate",function(t){if(!t)return"";var s=new Date(t),a=(new Date).getTime()-s.getTime();return a<0?"":a/1e3<30?"刚刚":a/1e3<60?parseInt(a/1e3)+"秒前":a/6e4<60?parseInt(a/6e4)+"分钟前":a/36e5<24?parseInt(a/36e5)+"小时前":a/864e5<31?parseInt(a/864e5)+"天前":a/2592e6<12?parseInt(a/2592e6)+"月前":parseInt(a/31536e6)+"年前"}),new e.a({el:"#app",router:h,components:{App:l},template:"<App/>"})},Usjt:function(t,s){},V9EN:function(t,s){},nw4C:function(t,s){},uklJ:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.53805c1bb29b16a23a8d.js.map