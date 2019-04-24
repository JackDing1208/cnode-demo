<template>
  <div class="mainList">
    <nav>
      <span>全部</span>
      <span>精华</span>
      <span>分享</span>
      <span>问答</span>
      <span>招聘</span>
    </nav>
    <ol>
      <li v-for="value in posts">
        <div class="left-wrapper">
          <img :src="value.author.avatar_url" alt="avatar">
          <span class="count">{{value.reply_count}}/<span class="visit">{{value.visit_count}}</span>  </span>

          <span class="tab top" v-if="value.top===true">置顶</span>
          <span class="tab" v-if="!value.top===true && value.good===true">精华</span>
          <span class="tab" v-if="!value.top===true && value.tab==='share'">分享</span>
          <span class="tab" v-if="!value.top===true && value.tab==='ask'">问答</span>
          <span class="tab" v-if="!value.top===true && value.tab==='job'">招聘</span>

          <span class="title">{{value.title}}</span>
        </div>
        <div class="right-wrapper">
          <span class="replyTime">{{value.last_reply_at|formatDate}}</span>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: "Mainlist",
    data: function () {
      return {
        posts: []
      }
    },
    methods: {
      getData() {
        this.$axios.get('https://cnodejs.org/api/v1/topics/?limit=30&page=1')
          .then((response) => {
              this.posts = response.data.data
              console.log(this.posts);
            }
          )
      }
    },
    beforeMount: function () {
      this.getData()

    }


  }
</script>


<style scoped>
  .mainList {
    max-width: 1200px;
    margin: 0 auto;
    background: #ffffff;
    padding: 10px;
  }

  nav span {
    font-size: 14px;
    color: #80bd01;
    padding: 0 5px;
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


</style>
