<template>
  <div class="loading" v-if="isLoading===true"></div>
  <div class="article" v-else>
    <div class="main">
      <div class="title-wrapper">
        <span class="tab">精华</span>
        <span class="title">{{post.title}}</span>
      <ul>
        <li>·发布于{{post.create_at|formatDate}}</li>
        <li>·作者: {{post.author.loginname}}</li>
        <li>·{{post.visit_count}}次浏览</li>
        <li>·最后一次编辑是{{}}</li>
        <li>·来自分享</li>
      </ul>
        <hr>
        <div class="content" v-html="post.content"></div>
      </div>
    </div>
    <div class="reply"></div>
    <div class="aside"></div>
  </div>
</template>

<script>
  export default {
    name: "Article",
    data() {
      return {
        post: {},
        reply:[],
        isLoading:true,
      }
    },
    methods:{
      getArticle(){
        this.$axios.get('https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312')
          .then((response)=>{
            this.post=response.data.data
            this.reply=this.post.replies
            this.isLoading=false
            console.log(this.post);
            console.log(this.reply);
            console.log(this.post.author);
          })
      }
    },
    beforeMount() {
      this.getArticle()
    }
  }

</script>

<style scoped>
  .loading{
    width: 80px;
    height: 40px;
    margin: 0 auto;
    margin-top:100px;
  }
  .loading span{
    display: inline-block;
    width: 8px;
    height: 100%;
    border-radius: 4px;
    background: lightgreen;
    -webkit-animation: load 1s ease infinite;
  }
  @-webkit-keyframes load{
    0%,100%{
      height: 40px;
      background: lightgreen;
    }
    50%{
      height: 70px;
      margin: -15px 0;
      background: lightblue;
    }
  }
  .loading span:nth-child(2){
    -webkit-animation-delay:0.2s;
  }
  .loading span:nth-child(3){
    -webkit-animation-delay:0.4s;
  }
  .loading span:nth-child(4){
    -webkit-animation-delay:0.6s;
  }
  .loading span:nth-child(5){
    -webkit-animation-delay:0.8s;
  }
</style>
