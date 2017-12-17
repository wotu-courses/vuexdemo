<template>
  <div class="hello">
    <h1>登录状态：{{ loginState?'已登录':'未登录' }}
      <span v-if="!loginState">
        <router-link to="/login">去登录</router-link>
      </span>
    </h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "HelloWorld",
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters(['loginState','title'])
  },
  created() {
    // var self = this;
    // this.bus.$on("login", function(data) {
    //   self.loginStatus = true;
    // });
    this.$store.dispatch('UPDATE_TITLE_ACTION', '根组件');
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>