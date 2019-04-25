<template>
  <div class="loading" v-if="isLoading===true"></div>
  <div class="article" v-else>
    <div class="main-wrapper">
      <div class="main">
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
      <div class="reply">
        <p>{{reply.length}}回复</p>
        <ol>
          <li v-for="(value,index) in reply">
            <img :src="value.author.avatar_url" alt="avatar">
            <div class="reply-wrapper">
              <div class="replyInfo">
                <span>{{value.author.loginname}}</span>
                <span>{{index+1}}楼</span>
                <span>{{value.create_at|formatDate}}</span>
                <span>☝{{value.ups.length}}</span>
              </div>
              <div class="replyContent" v-html="value.content"></div>
            </div>
          </li>
        </ol>

      </div>
    </div>


    <div class="aside"></div>
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
            this.reply = this.post.replies
            this.isLoading = false
            console.log(this.reply);
          })
      }
    },
    beforeMount() {
      this.articleId=this.$route.params.id
      console.log(this.articleId);
      this.getArticle()
    }
  }

</script>

<style>
  @import "../assets/markdown-github.css";

  .article {
    max-width: 1400px;
    display: flex;
    margin: 15px auto;
  }

  .article .main {
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
    background: #444444;
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
  .reply>p{
    margin: 10px;
  }
  .reply li{
    display: flex;
    margin: 10px;
  }

  .reply img {
    height: 32px;
    width: 32px;
    border-radius: 4px;
  }
  .reply .reply-wrapper{
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
