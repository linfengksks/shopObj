<template>
  <div id="app">
    <HomePage></HomePage>
  </div>
</template>

<script>
  import HomePage from "./pages/HomePage.vue";
  export default {
    name: "App",
    components: {
      HomePage
    },
  };
</script>

<style>
  html {
    font-size: 10px;
  }
  body{
    padding: 0;
    margin:0;
  }
</style>