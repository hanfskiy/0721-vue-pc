<template>
  <div class="login">
    <div class="login-image">
      <div class="login-phone">
        <div class="login-form">
          <div class="login-border">
            <ul class="login-list">
              <li>
                <a href=""> 扫描登录</a>
              </li>
              <li>
                <a href=""> 账户登录</a>
              </li>
            </ul>
            <div class="login-text">
              <form action="">
                <label for="user">
                  <input type="text" placeholder="手机号" />
                </label>
                <label for="password">
                  <input type="password" placeholder="请输入密码" />
                </label>
              </form>
            </div>
          </div>
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
.login-form {
  width: 420px;
  height: 406px;
  background-color: #fff;
  border: 1px solid #ddd;
}
.login-list {
  display: flex;
}
.login-phone {
  padding-top: 50px;
  float: right;
}
.login-border {
  border: 1px solid #ddd;
  padding: 20px;
}
</style>
