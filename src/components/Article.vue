<template>
  <div>
    <div class="loading" v-if="isLoading===true">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="article" v-else>
      <div class="main-wrapper">
        <div class="paper">
          <div class="title-wrapper">
            <span class="tab" v-if="post.good===true">精华</span>
            <span class="tab" v-if="post.top===true">置顶</span>
            <span class="title">{{post.title}}</span>
          </div>
          <ul>
            <span>•</span>
            <li> 发布于{{post.create_at|formatDate}}</li>
            <span>•</span>
            <li> 作者 {{post.author.loginname}}</li>
            <span>•</span>
            <li>{{post.visit_count}}次浏览</li>
            <span>•</span>
            <li> 来自 分享</li>
          </ul>

          <div class="content" id="content" v-html="post.content"></div>

        </div>
        <div class="reply" v-if="reply.length!==0">
          <div class="num">{{reply.length}}回复</div>
          <ol>
            <li v-for="(value,index) in reply">
              <router-link :to="{name:'user',params: {name:value.author.loginname}            }">
                <img :src="value.author.avatar_url" alt="avatar">
              </router-link>

              <div class="reply-wrapper">
                <div class="replyInfo">
                  <span class="name">{{value.author.loginname}}</span>
                  <span class="floor">{{index+1}}楼</span>
                  <span class="replyTime">{{value.create_at|formatDate}}</span>
                  <span class="likes" v-if="value.ups.length!==0">☝{{value.ups.length}}</span>
                </div>
                <div class="replyContent" v-html="value.content"></div>
              </div>
            </li>
          </ol>

        </div>
      </div>


      <div class="aside">
        <div class="author">
          <div class="title">本文作者</div>
          <router-link :to="{name:'user',params: {name:post.author.loginname}            }">
            <img :src="post.author.avatar_url" alt="avatar">
          </router-link>
          <div class="name">{{post.author.loginname}}</div>


        </div>
        <div class="link">
          <a target="_blank" href="https://www.aliyun.com/product/nodejs?ref=cnode"><img
            src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt=""></a>
          <a target="_blank"
             href="https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&utm_medium=content_pic_pc_540_130&utm_campaign=huodong&utm_content=gift&ytag=cnodejs"><img
            src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt=""></a>
          <a target="_blank" href="https://coding.net/?utm_source=cnodejs&utm_medium=banner&utm_campaign=march2019"><img
            src="//static.cnodejs.org/Ft7Ekzy3Dd-_aDGcmoEgct5uTnVZ" alt=""></a>
        </div>
        <div class="ad">
          <img src="../assets/ad.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Article",
    data() {
      return {
        post: {},
        reply: [],
        isLoading: true,
        articleId: ''
      }
    },
    methods: {
      getArticle() {
        this.$axios.get(`https://cnodejs.org/api/v1/topic/${this.articleId}`)
          .then((response) => {
            this.post = response.data.data
            console.log(this.post);
            this.reply = this.post.replies
            this.isLoading = false
          })
      }
    },
    beforeMount() {
      this.articleId = this.$route.params.id
      this.getArticle()
    }
  }

</script>

<style>
  @import "../assets/markdown-github.css";

  .article {
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    margin: 15px auto;
  }

  .article .main-wrapper {
    flex: 1;
  }

  .article .paper {
    max-width: 1100px;
    background: #ffffff;

  }

  .article .reply {
    max-width: 1100px;
    background: #ffffff;
    margin-top: 15px;
  }

  .article .aside {
    width: 300px;
    height: 800px;
    background: #ffffff;
    margin-left: 15px;
    display: flex;
    flex-direction: column;

  }

  .aside .author {
    padding: 10px;
  }

  .aside .author .title {
    text-align: center;
    font-size: 14px;
    margin: 10px;
  }

  .aside .author .name {
    text-align: center;
    font-size: 16px ;
    color: #0088cc;
  }

  .aside .author img {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 5px;
    margin: 10px auto ;
  }

  .aside .link {
    border-top: 15px solid #e1e1e1;
  }

  .aside .ad {
    border-top: 15px solid #e1e1e1;
    flex: 1;
    overflow: hidden;
  }

  .aside .link a {
    display: inline-block;
  }

  .aside .link img {
    max-width: 280px;
    margin: 10px 10px 0px 10px;
  }

  .aside .link a:nth-child(3) {
    margin-bottom: 10px;
  }

  .aside .ad img {
    max-width: 300px;
  }


  .article .title-wrapper {
    height: 50px;
    display: flex;
    align-items: center;
    padding: 20px 10px 10px 10px;
  }

  .article .tab {
    display: inline-block;
    text-align: center;
    color: #ffffff;
    background: #80bd01;
    font-size: 12px;
    line-height: 18px;
    width: 32px;
    border-radius: 3px;
  }

  .article .title {
    font-weight: bold;
    font-size: 22px;
  }

  .article ul {
    display: flex;
    font-size: 12px;
    color: #838383;
    margin: 10px 10px;
  }

  ul span {
    display: inline-block;
    margin: 0 3px;
  }

  .article #content {
    border-top: 1px solid #e5e5e5;
    padding: 20px;
  }

  .reply .num {
    font-size: 14px;
    padding: 10px;
  }

  .reply .name {
    font-size: 14px;
    color: #666666;
  }

  .reply .floor {
    color: #333;
    font-size: 14px;

  }

  .reply .replyTime {
    font-size: 14px;

    color: #0088cc
  }

  .reply li {
    display: flex;
    margin: 10px;
  }

  .reply img {
    height: 32px;
    width: 32px;
    border-radius: 4px;
  }

  .reply .replyContent {
    max-width: 1000px;
    overflow: hidden;
    font-size: 15px;
    margin-bottom: 15px;
    white-space: normal;
    text-overflow: ellipsis;
  }

  .reply .reply-wrapper {
    margin-left: 10px;
  }

  .loading {
    width: 80px;
    height: 40px;
    margin: 400px auto;
  }

  .loading span {
    display: inline-block;
    width: 8px;
    height: 100%;
    border-radius: 4px;
    background: lightgreen;
    -webkit-animation: load 1s ease infinite;
  }

  @-webkit-keyframes load {
    0%, 100% {
      height: 40px;
      background: lightgreen;
    }
    50% {
      height: 70px;
      margin: -15px 0;
      background: lightblue;
    }
  }

  .loading span:nth-child(2) {
    -webkit-animation-delay: 0.2s;
  }

  .loading span:nth-child(3) {
    -webkit-animation-delay: 0.4s;
  }

  .loading span:nth-child(4) {
    -webkit-animation-delay: 0.6s;
  }

  .loading span:nth-child(5) {
    -webkit-animation-delay: 0.8s;
  }
</style>
