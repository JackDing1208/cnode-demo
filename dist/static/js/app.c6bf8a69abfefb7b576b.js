webpackJsonp([1],{"0Rgs":function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),n={name:"top",methods:{alert:function(t){function s(){return t.apply(this,arguments)}return s.toString=function(){return t.toString()},s}(function(){alert("暂不支持注册和登录功能")})}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header"},[a("div",{staticClass:"header-wrapper"},[a("router-link",{attrs:{to:{name:"root"}}},[a("img",{attrs:{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg",alt:"logo"}})]),t._v(" "),a("ul",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("li",{on:{click:t.alert}},[t._v("注册")]),t._v(" "),a("li",{on:{click:t.alert}},[t._v("登录")])])],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("a",{attrs:{href:"#"}},[this._v("首页")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("a",{attrs:{href:"#"}},[this._v("新手入门")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("a",{attrs:{href:"#"}},[this._v("API")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("a",{attrs:{href:"#"}},[this._v("关于")])])}]};var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"footer"},[s("div",{staticClass:"content"},[s("p",[this._v("CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。")]),this._v(" "),s("p",[this._v("新手搭建 Node.js 服务器，推荐使用无需备案的 "),s("a",{attrs:{href:"https://www.digitalocean.com/",target:"_blank"}},[this._v("DigitalOcean")])])])])}]};var o={name:"App",components:{Top:a("VU/8")(n,i,!1,function(t){a("r35m")},"data-v-6772638e",null).exports,Footer:a("VU/8")({name:"Footer"},r,!1,function(t){a("lYq+")},"data-v-8430bb64",null).exports}},c={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("Top"),this._v(" "),s("div",{staticClass:"main"},[s("router-view",{attrs:{name:"main"}})],1),this._v(" "),s("Footer")],1)},staticRenderFns:[]};var l=a("VU/8")(o,c,!1,function(t){a("vmsw")},null,null).exports,v=a("/ocq"),_={name:"Panigation",data:function(){return{first:"首页",last:"尾页",pre:"<上一页",next:"下一页>",current:1,page:[1,2,3,4,5]}},methods:{firstClick:function(){this.current=1,this.$emit("pagechange",this.current),this.page=[1,2,3,4,5],console.log(this.page),this.windowScroll()},lastClick:function(){this.current=99,this.$emit("pagechange",this.current),this.page=[95,96,97,98,99],this.windowScroll()},nextClick:function(){this.current+=1,this.$emit("pagechange",this.current),this.pageNumChange(),this.windowScroll()},preClick:function(){this.current-=1,this.$emit("pagechange",this.current),this.pageNumChange(),this.windowScroll()},pageClick:function(t){this.current=t,this.pageNumChange(),this.$emit("pagechange",this.current),this.windowScroll()},pageNumChange:function(){var t=this.page.slice(-1)[0],s=this.page[0];this.current===t?this.page=this.page.map(function(t){return t+1}):this.current===s&&1!==this.current&&(this.page=this.page.map(function(t){return t-1}))},windowScroll:function(){window.scrollTo(0,0)}}},p={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"pagination"},[a("div",{staticClass:"pageButtons"},[a("button",{staticClass:"first",on:{click:t.firstClick}},[t._v(t._s(t.first))]),t._v(" "),a("button",{staticClass:"pre",on:{click:t.preClick}},[t._v(t._s(t.pre))]),t._v(" "),t._l(t.page,function(s){return a("button",{staticClass:"page",class:{active:t.current===s},on:{click:function(a){return t.pageClick(s)}}},[t._v(t._s(s)+"\n    ")])}),t._v(" "),a("button",{staticClass:"next",on:{click:t.nextClick}},[t._v(t._s(t.next))]),t._v(" "),a("button",{staticClass:"last",on:{click:t.lastClick}},[t._v(t._s(t.last))])],2)])},staticRenderFns:[]};var u={name:"MainList",data:function(){return{posts:[],isLoading:!0,type:"",isActive:"",currentPage:"1"}},methods:{getData:function(){var t=this;this.isActive="all",this.$axios.get("https://cnodejs.org/api/v1/topics/?limit=40&page="+this.currentPage).then(function(s){t.posts=s.data.data,t.isLoading=!1})},getType:function(t){var s=this;console.log(t),this.isActive=t,this.$axios.get("https://cnodejs.org/api/v1/topics/?limit=40&page=1&tab="+t).then(function(t){s.posts=t.data.data,s.isLoading=!1})},defaultAvatar:function(){},getPage:function(t){this.currentPage=t,this.getData()}},components:{Pagination:a("VU/8")(_,p,!1,function(t){a("rsEx")},"data-v-21cc9773",null).exports},beforeMount:function(){this.getData()}},h={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[!0===t.isLoading?a("div",{staticClass:"loading"},[a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span")]):a("div",{staticClass:"mainList"},[a("nav",[a("span",{class:{active:"all"===t.isActive},on:{click:t.getData}},[t._v("全部")]),t._v(" "),a("span",{class:{active:"good"===t.isActive},on:{click:function(s){return t.getType("good")}}},[t._v("精华")]),t._v(" "),a("span",{class:{active:"share"===t.isActive},on:{click:function(s){return t.getType("share")}}},[t._v("分享")]),t._v(" "),a("span",{class:{active:"ask"===t.isActive},on:{click:function(s){return t.getType("ask")}}},[t._v("问答")]),t._v(" "),a("span",{class:{active:"job"===t.isActive},on:{click:function(s){return t.getType("job")}}},[t._v("招聘")])]),t._v(" "),a("ol",t._l(t.posts,function(s){return a("li",[a("div",{staticClass:"left-wrapper"},[a("router-link",{attrs:{to:{name:"user",params:{name:s.author.loginname}}}},[a("img",{attrs:{src:s.author.avatar_url,alt:""},on:{error:t.defaultAvatar}})]),t._v(" "),a("span",{staticClass:"count"},[t._v(t._s(s.reply_count)+"/"),a("span",{staticClass:"visit"},[t._v(t._s(s.visit_count))])]),t._v(" "),!0===s.top?a("span",{staticClass:"tab top"},[t._v("置顶")]):t._e(),t._v(" "),1==!s.top&&!0===s.good?a("span",{staticClass:"tab good"},[t._v("精华")]):t._e(),t._v(" "),1==!s.top&&1==!s.good&&"share"===s.tab?a("span",{staticClass:"tab"},[t._v("分享")]):t._e(),t._v(" "),1==!s.top&&1==!s.good&&"ask"===s.tab?a("span",{staticClass:"tab"},[t._v("问答")]):t._e(),t._v(" "),1==!s.top&&1==!s.good&&"job"===s.tab?a("span",{staticClass:"tab"},[t._v("招聘")]):t._e(),t._v(" "),a("router-link",{attrs:{to:{name:"post",params:{id:s.id}}}},[a("span",{staticClass:"title"},[t._v(t._s(s.title))])])],1),t._v(" "),a("div",{staticClass:"right-wrapper"},[a("span",{staticClass:"replyTime"},[t._v(t._s(t._f("formatDate")(s.last_reply_at)))])])])}),0),t._v(" "),a("Pagination",{on:{pagechange:t.getPage}})],1)])},staticRenderFns:[]};var d=a("VU/8")(u,h,!1,function(t){a("0Rgs")},"data-v-5edd85a4",null).exports,f={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[!0===t.isLoading?a("div",{staticClass:"loading"},[a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span")]):a("div",{staticClass:"article"},[a("div",{staticClass:"main-wrapper"},[a("div",{staticClass:"paper"},[a("div",{staticClass:"title-wrapper"},[!0===t.post.good?a("span",{staticClass:"tab"},[t._v("精华")]):t._e(),t._v(" "),!0===t.post.top?a("span",{staticClass:"tab"},[t._v("置顶")]):t._e(),t._v(" "),a("span",{staticClass:"title"},[t._v(t._s(t.post.title))])]),t._v(" "),a("ul",[a("span",[t._v("•")]),t._v(" "),a("li",[t._v(" 发布于"+t._s(t._f("formatDate")(t.post.create_at)))]),t._v(" "),a("span",[t._v("•")]),t._v(" "),a("li",[t._v(" 作者 "+t._s(t.post.author.loginname))]),t._v(" "),a("span",[t._v("•")]),t._v(" "),a("li",[t._v(t._s(t.post.visit_count)+"次浏览")]),t._v(" "),a("span",[t._v("•")]),t._v(" "),a("li",[t._v(" 来自 分享")])]),t._v(" "),a("div",{staticClass:"content",attrs:{id:"content"},domProps:{innerHTML:t._s(t.post.content)}})]),t._v(" "),0!==t.reply.length?a("div",{staticClass:"reply"},[a("div",{staticClass:"num"},[t._v(t._s(t.reply.length)+"回复")]),t._v(" "),a("ol",t._l(t.reply,function(s,e){return a("li",[a("router-link",{attrs:{to:{name:"user",params:{name:s.author.loginname}}}},[a("img",{attrs:{src:s.author.avatar_url,alt:"avatar"}})]),t._v(" "),a("div",{staticClass:"reply-wrapper"},[a("div",{staticClass:"replyInfo"},[a("span",{staticClass:"name"},[t._v(t._s(s.author.loginname))]),t._v(" "),a("span",{staticClass:"floor"},[t._v(t._s(e+1)+"楼")]),t._v(" "),a("span",{staticClass:"replyTime"},[t._v(t._s(t._f("formatDate")(s.create_at)))]),t._v(" "),0!==s.ups.length?a("span",{staticClass:"likes"},[t._v("☝"+t._s(s.ups.length))]):t._e()]),t._v(" "),a("div",{staticClass:"replyContent",domProps:{innerHTML:t._s(s.content)}})])],1)}),0)]):t._e()]),t._v(" "),a("div",{staticClass:"aside"})])])},staticRenderFns:[]};var g=a("VU/8")({name:"Article",data:function(){return{post:{},reply:[],isLoading:!0,articleId:""}},methods:{getArticle:function(){var t=this;this.$axios.get("https://cnodejs.org/api/v1/topic/"+this.articleId).then(function(s){t.post=s.data.data,t.reply=t.post.replies,t.isLoading=!1})}},beforeMount:function(){this.articleId=this.$route.params.id,this.getArticle()}},f,!1,function(t){a("ucFQ")},null,null).exports,m={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[!0===t.isLoading?a("div",{staticClass:"loading"},[a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span")]):a("div",{staticClass:"wrapper"},[a("div",{staticClass:"userInfo"},[a("section",{staticClass:"basic"},[a("img",{attrs:{src:t.info.avatar_url,alt:""}}),t._v(" "),a("span",[t._v(t._s(t.name))]),t._v(" "),a("span",[t._v(t._s(t.info.score)+"积分")]),t._v(" "),a("span",[t._v("注册时间"+t._s(t._f("formatDate")(t.info.create_at)))])]),t._v(" "),a("section",{staticClass:"post"},[a("div",{staticClass:"create"},[t._v("\n          最近创建的话题\n        ")]),t._v(" "),0===t.info.recent_topics.length?a("div",{staticClass:"none"},[t._v("无话题")]):a("ol",t._l(t.info.recent_topics,function(s){return a("li",[a("img",{attrs:{src:s.author.avatar_url,alt:"avater"}}),t._v(" "),a("router-link",{attrs:{to:{name:"post",params:{id:s.id}}}},[a("span",{staticClass:"title"},[t._v(t._s(s.title))])]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.last_reply_at)))])],1)}),0)]),t._v(" "),a("section",{staticClass:"reply"},[a("div",{staticClass:"response"},[t._v("\n          最近回复的话题\n        ")]),t._v(" "),0===t.info.recent_replies.length?a("div",{staticClass:"none"},[t._v("无话题")]):a("ol",t._l(t.info.recent_replies,function(s){return a("li",[a("img",{attrs:{src:s.author.avatar_url,alt:"avater"}}),t._v(" "),a("router-link",{attrs:{to:{name:"post",params:{id:s.id}}}},[a("span",{staticClass:"title"},[t._v(t._s(s.title))])]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.last_reply_at)))])],1)}),0)])]),t._v(" "),a("div",{staticClass:"aside"})])])},staticRenderFns:[]};var C=a("VU/8")({name:"UserInfo",data:function(){return{isLoading:!0,info:{},name:""}},methods:{getInfo:function(){var t=this;this.$axios.get("https://cnodejs.org/api/v1/user/"+this.name).then(function(s){t.info=s.data.data,t.isLoading=!1})}},beforeMount:function(){this.name=this.$route.params.name,this.getInfo()}},m,!1,function(t){a("umBq")},"data-v-03b9893d",null).exports;e.a.use(v.a);var k=new v.a({routes:[{name:"root",path:"/",components:{main:d}},{name:"post",path:"/topic/:id",components:{main:g}},{name:"user",path:"/user/:name",components:{main:C}}]}),w=a("mtWM"),b=a.n(w);e.a.prototype.$axios=b.a,e.a.config.productionTip=!1,e.a.filter("formatDate",function(t){if(!t)return"";var s=new Date(t),a=(new Date).getTime()-s.getTime();return a<0?"":a/1e3<30?"刚刚":a/1e3<60?parseInt(a/1e3)+"秒前":a/6e4<60?parseInt(a/6e4)+"分钟前":a/36e5<24?parseInt(a/36e5)+"小时前":a/864e5<31?parseInt(a/864e5)+"天前":a/2592e6<12?parseInt(a/2592e6)+"月前":parseInt(a/31536e6)+"年前"}),new e.a({el:"#app",router:k,components:{App:l},template:"<App/>"})},"lYq+":function(t,s){},r35m:function(t,s){},rsEx:function(t,s){},ucFQ:function(t,s){},umBq:function(t,s){},vmsw:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.c6bf8a69abfefb7b576b.js.map