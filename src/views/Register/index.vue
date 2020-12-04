<template>
  <div class="register">
    <div class="register-top">
      <span>注册新用户</span>
      <div>我有账户，去 <router-link to="/login">登陆</router-link></div>
    </div>
    <div class="regster-main"></div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style lang="less" scoped>
.register {
  width: 1200px;
  border: 1px solid #ccc;
  margin: 0 auto;
}
</style>
