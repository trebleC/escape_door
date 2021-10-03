<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <home />
</template>

<script>
import home from './views/home.vue'

export default {
  name: 'App',
  components: {
    home
  }
}
</script>

<style>
@import "~@/assets/css/base.css";
@import "~@/assets/css/normalize.css";
#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
