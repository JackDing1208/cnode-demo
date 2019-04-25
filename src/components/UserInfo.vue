<template>
  <div>
    <div class="loading" v-if="isLoading===true">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="userInfo" v-else>
      <section class="basic">
        <img :src="info.avatar_url" alt="">
        <span>{{info.score}}积分</span>
        <span>注册时间{{info.create_at|formatDate}}</span>
      </section>
      <section class="post">
        <div class="create">
          最近创建的话题
        </div>
        <div v-if="info.recent_topics.length===0">无话题</div>

        <ol v-else>
          <li v-for="value in info.recent_topics">
            <img :src="value.author.avatar_url" alt="avater">
            <router-link :to="{name:'post',params:{id:value.id}}">
              <span class="title">{{value.title}}</span>
            </router-link>
            <span>{{value.last_reply_at|formatDate}}</span>
          </li>
        </ol>
      </section>

      <section class="reply">
        <div class="response">
          最近回复的话题
        </div>
        <div v-if="info.recent_replies.length===0">无话题</div>

        <ol v-else>
          <li v-for="value in info.recent_replies">
            <img :src="value.author.avatar_url" alt="avater">
            <router-link :to="{name:'post',params:{id:value.id}}">
              <span class="title">{{value.title}}</span>
            </router-link>
            <span>{{value.last_reply_at|formatDate}}</span>
          </li>
        </ol>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserInfo",
    data(){
      return{
        isLoading:true,
        info:{},
        name:''
      }
    },
    methods:{
      getInfo() {
        this.$axios.get(`https://cnodejs.org/api/v1/user/${this.name}`)
          .then((response) => {
            this.info = response.data.data
            console.log(this.info);
            this.isLoading = false
            }
          )
      }
    },
    beforeMount: function () {
      this.name=this.$route.params.name
      this.getInfo()
      console.log(this.name)
    }
  }
</script>

<style scoped>
.basic img{
  height: 40px;
  width: 40px;
  border-radius: 4px;
}
  .post img{
    height: 32px;
    width: 32px;
    border-radius: 4px;
  }
.reply img{
  height: 32px;
  width: 32px;
  border-radius: 4px;
}
</style>
