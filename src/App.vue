<template>
  <div id="app">
    <Top/>
    <div class="main">
      <router-view name="main"></router-view>

    </div>
    <Footer/>
  </div>
</template>

<script>
  import Top from './components/Top'
  import Footer from './components/Footer'


  export default {
    name: 'App',
    components: {
      Top,Footer
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background: #e1e1e1;
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

</style>
