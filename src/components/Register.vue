<template>
  <div>注册</div>
</template>

<script>
export default {
  created() {
    var self = this;
    console.log("外面", self);
    this.bus.$on("login", function(data) {
      console.log("里面", self, data);
      self.loginStatus = true;
    });
  }
};
</script>

<style>

</style>
