<template>
  <div>
    <div class="loading" v-if="isLoading===true">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="wrapper" v-else>
      <div class="userInfo">
        <section class="basic">
          <img :src="info.avatar_url" alt="">
          <span>{{name}}</span>
          <span>{{info.score}}积分</span>
          <span>注册时间{{info.create_at|formatDate}}</span>
        </section>
        <section class="post">
          <div class="create">
            最近创建的话题
          </div>
          <div v-if="info.recent_topics.length===0" class="none">无话题</div>

          <ol v-else>
            <li v-for="value in info.recent_topics">
              <img :src="value.author.avatar_url" alt="avater">
              <router-link :to="{name:'post',params:{id:value.id}}">
                <span class="title">{{value.title}}</span>
              </router-link>
              <span class="time">{{value.last_reply_at|formatDate}}</span>
            </li>
          </ol>
        </section>

        <section class="reply">
          <div class="response">
            最近回复的话题
          </div>
          <div v-if="info.recent_replies.length===0" class="none">无话题</div>

          <ol v-else>
            <li v-for="value in info.recent_replies">
              <img :src="value.author.avatar_url" alt="avater">
              <router-link :to="{name:'post',params:{id:value.id}}">
                <span class="title">{{value.title}}</span>
              </router-link>
              <span class="time">{{value.last_reply_at|formatDate}}</span>
            </li>
          </ol>
        </section>
      </div>
      <div class="aside"></div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "UserInfo",
    data() {
      return {
        isLoading: true,
        info: {},
        name: ''
      }
    },
    methods: {
      getInfo() {
        this.$axios.get(`https://cnodejs.org/api/v1/user/${this.name}`)
          .then((response) => {
              this.info = response.data.data
              this.isLoading = false
            }
          )
      }
    },
    beforeMount: function () {
      this.name = this.$route.params.name
      this.getInfo()
    }
  }
</script>

<style scoped>
  .wrapper{
    display: flex;
    max-width: 1400px;
    margin: 10px auto ;
  }
  .userInfo {
    max-width: 1100px;
    margin: 0 auto;
    background: #ffffff;
    flex: 1;
  }
  .aside{
    height: 800px;
    width: 300px;
    background: #444444;
  }
  .basic {
    display: flex;
    align-items: center;
  }

  .basic img {
    height: 40px;
    width: 40px;
    border-radius: 4px;
    margin: 10px;
  }

  .basic span {
    margin: 10px;
  }

  .post img,.reply img {
    height: 32px;
    width: 32px;
    border-radius: 4px;
  }
  .post .create{
    margin: 10px;
  }
  .reply .response{
    margin: 10px;
  }
  .none{
    margin: 10px;
  }
  .post li,.reply li{
    display: flex;
    align-items: center;
    margin: 10px;
  }
  li .title{
    margin: 10px;
    color: #333333;
    display: inline-block;
    max-width: 800px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  li .title:hover{
    text-decoration: underline;
  }
  li .time{
    font-size: 12px;
    color: #778087;
  }


</style>
