<template>
  <div id="app">
    <div>组件名称： {{title}}</div>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "app",
  components: {
    
  },
  computed: mapGetters(['loginState','title'])
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
