<template>
  <div class="footer">
    <div class="content">
      <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
      <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/" target="_blank">DigitalOcean</a></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }

</script>

<style scoped>
  .footer{
    background: #ffffff;
    color: #ababab;
  }
  .content{
    max-width: 1400px;
    text-align: center;
    margin:0 auto;
    font-size: 14px;
    line-height: 30px;
  }
</style>
