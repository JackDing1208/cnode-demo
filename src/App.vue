<template>
  <div id="app">
    <Top/>

  </div>
</template>

<script>
  import Top from './components/Top'

  export default {
    name: 'App',
    components: {
      Top,
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    background: #e1e1e1;
  }
  ol,ul{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

</style>
