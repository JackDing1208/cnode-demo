<template>
  <div>
    <div class="loading" v-if="isLoading===true">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="mainList" v-else>
      <nav>
        <span :class="{active:isActive==='all'}" @click="getData">全部</span>
        <span :class="{active:isActive==='good'}" @click="getType('good')">精华</span>
        <span :class="{active:isActive==='share'}" @click="getType('share')">分享</span>
        <span :class="{active:isActive==='ask'}" @click="getType('ask')">问答</span>
        <span :class="{active:isActive==='job'}" @click="getType('job')">招聘</span>
      </nav>
      <ol>
        <li v-for="value in posts">
          <div class="left-wrapper">
            <router-link :to="{name:'user',params: {name:value.author.loginname}}">
              <img @error="defaultAvatar"  :src="value.author.avatar_url" alt="">
            </router-link>
            <span class="count">{{value.reply_count}}/<span class="visit">{{value.visit_count}}</span>  </span>
            <span class="tab top" v-if="value.top===true">置顶</span>
            <span class="tab good" v-if="!value.top===true &&  value.good===true">精华</span>
            <span class="tab" v-if="!value.top===true && !value.good===true && value.tab==='share'">分享</span>
            <span class="tab" v-if="!value.top===true && !value.good===true && value.tab==='ask'">问答</span>
            <span class="tab" v-if="!value.top===true && !value.good===true && value.tab==='job'">招聘</span>

            <router-link :to="{name:'post',params:{id:value.id}}">
              <span class="title">{{value.title}}</span>
            </router-link>
          </div>
          <div class="right-wrapper">
            <span class="replyTime">{{value.last_reply_at|formatDate}}</span>
          </div>
        </li>
      </ol>
        <Pagination @pagechange="getPage"></Pagination>
    </div>
  </div>
</template>

<script>
  import Pagination from './Pagination'
  export default {
    name: "MainList",
    data: function () {
      return {
        posts: [],
        isLoading: true,
        type: '',
        isActive:'',
        currentPage:'1'
      }
    },

    methods: {
      getData() {
        this.isActive='all'
        this.$axios.get(`https://cnodejs.org/api/v1/topics/?limit=40&page=${this.currentPage}`)
          .then((response) => {
              this.posts = response.data.data
              this.isLoading = false
            }
          )
      },
      getType(value) {
        console.log(value);
        this.isActive=value
        this.$axios.get(`https://cnodejs.org/api/v1/topics/?limit=40&page=1&tab=${value}`)
          .then((response) => {
              this.posts = response.data.data
              this.isLoading = false
            }
          )
      },
      defaultAvatar(){

      },
      getPage(page){
        this.currentPage=page
        this.getData()
      }
    },
    components:{
      Pagination
    },
    beforeMount: function () {
      this.getData()
    }
  }
</script>


<style scoped>
  .mainList {
    max-width: 1400px;
    margin: 10px auto;
    background: #ffffff;
    padding: 10px;

  }

  nav span {
    display: inline-block;
    font-size: 14px;
    line-height: 25px;
    color: #80bd01;
    padding: 0 5px;
    margin: 0 5px;
  }

  nav span:hover {
    cursor: pointer;
    color:#005580;
  }
  nav span.active{
    background: #80bd01;
    color: #fff;
    border-radius: 3px;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }

  .left-wrapper, .right-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .replyTime {
    color: #778087;
    font-size: 12px;
  }

  img {
    height: 32px;
    width: 32px;
    border-radius: 4px;
  }

  .count {
    display: inline-block;
    width: 70px;
    text-align: center;
    font-size: 12px;
    color: #9e78cc
  }

  .tab {
    width: 32px;
    font-size: 12px;
    line-height: 18px;
    color: #999999;
    background: #e5e5e5;
    text-align: center;
  }


  .tab.top {
    background: #80bd01;
    color: #ffffff;
  }
  .tab.good {
    background: #80bd01;
    color: #ffffff;
  }

  .visit {
    color: #b4b4b4;
  }

  .title {
    display: inline-block;
    max-width: 800px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    line-height: 30px;
    color: #333;
    padding: 0 5px;
  }

  .title:hover {
    text-decoration: underline;
    cursor: pointer;
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
