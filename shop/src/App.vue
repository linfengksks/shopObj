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
    HomePage,
  },
};
</script>

<style>
html {
  font-size: 10px;
}
@media (max-width: 540px) {
  html {
    font-size: 8.4375px;
  }
} /*Android常用宽度*/
@media (max-width: 480px) {
  html {
    font-size: 7.5px;
  }
} /*Android常用宽度*/
@media (max-width: 414px) {
  html {
    font-size: 6.469px;
  }
} /*i6Plus,i7Plus宽度*/
@media (max-width: 375px) {
  html {
    font-size: 5.859px;
  }
} /*i6,i7宽度*/
@media (max-width: 360px) {
  html {
    font-size: 5.625px;
  }
} /*Android常用宽度*/
@media (max-width: 320px) {
  html {
    font-size: 5px;
  }
}
body {
  padding: 0;
  margin: 0;
}
</style>