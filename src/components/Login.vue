<template>
  <div>
    <input type="text" placeholder="请输入用户名"><br />
    <input type="text" name="" placeholder="请输入密码"/><br/>
    <button @click="login" class="login">立即登录</button>
   <p>还没有账号,<router-link to="/register">立即注册</router-link></p> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  computed: {
    ...mapGetters(['loginState','title'])
  },
  created() {
    this.$store.dispatch('UPDATE_TITLE_ACTION', '登录组件');
  },
  methods: {
    login() {
      // this.bus.$emit("login", true);
      this.$store.dispatch('UPDATE_LOGINSTATE_ACTION', true);
      this.$router.push("/");
    }
  }
};
</script>
<style>
.login {
  width: 100px;
  height: 30px;
  margin-top: 10px;
}
.psw {
  margin-top: 5px;
}
</style>