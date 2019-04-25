<template>
  <div class="header">
    <div class="header-wrapper">
      <router-link :to="{name:'root'}">
        <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="logo">
      </router-link>
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">新手入门</a></li>
        <li><a href="#">API</a></li>
        <li><a href="#">关于</a></li>
        <li @click="alert">注册</li>
        <li @click="alert">登录</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "top",
    methods: {
      alert() {
        alert("暂不支持注册和登录功能")
      }
    }
  }
</script>

<style scoped>
  .header {
    background: #444444;
  }

  .header-wrapper {
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .header img {
    max-width: 120px;
    height: 50px;
  }

  .header ul {
    display: flex;
  }

  .header ul li {
    line-height: 50px;
    padding: 0 12px;
    color: #cccccc;
    font-size: 13px;
  }

  .header ul li:hover {
    color: #ffffff

  }

  a {
    font-size: 13px;
    color: #cccccc
  }

  a:hover {
    color: #ffffff
  }
</style>
