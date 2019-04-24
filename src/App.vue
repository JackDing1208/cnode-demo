<template>
  <div id="app">
    <Top/>
    <!--<MainList/>-->
    <Article/>
    <Footer/>
  </div>
</template>

<script>
  import Top from './components/Top'
  import MainList from './components/MainList'
  import Article from './components/Article'
  import Footer from './components/Footer2'


  export default {
    name: 'App',
    components: {
      Top, MainList,Article,Footer
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
