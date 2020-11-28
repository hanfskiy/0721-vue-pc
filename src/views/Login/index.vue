<template>
  <div class="login">
    <el-button @click="login" type="primary">登录</el-button>
    <div class="login-image">
      <div class="login-form">
        <ul class="login-list"></ul>
        <div class="login-text">
          <form action=""></form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqLogin } from "@api/user";

export default {
  name: "Login",
  methods: {
    login() {
      reqLogin("13700000000", "11111111")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  background-color: #e93854;
}
.login-image {
  width: 1200px;
  height: 487px;
  background: url("loginbg.png") no-repeat;
}
</style>
