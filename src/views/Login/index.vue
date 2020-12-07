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
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <div class="login-content">
                    <i class="el-icon-user"></i>
                    <input
                      type="text"
                      placeholder="手机号"
                      v-model="user.phone"
                    />
                    <span :style="{ color: 'red' }">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <ValidationProvider rules="required" v-slot="{ errors }">
                  <div class="login-content">
                    <i class="el-icon-lock"></i>
                    <input
                      type="password"
                      placeholder="请输入密码"
                      v-model="user.password"
                    />
                    <span :style="{ color: 'red' }">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
                <div class="login-check">
                  <label for="">
                    <input type="checkbox" v-model="isAutoLogin" />
                    自动登录
                  </label>
                  <span>
                    <a href="">忘记密码？</a>
                  </span>
                </div>
                <el-button type="danger" class="login-btn" @click="submit"
                  >登录</el-button
                >
              </form>
              <router-link to="/register" class="login-to"
                >立即注册</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", required);

export default {
  name: "Login",
  data() {
    return {
      user: {
        phone: "",
        password: "",
      },
      islogin: false, //正在登陆
      isAutoLogin: true, //自动登陆
    };
  },
  computed: {
    ...mapState({
      token: (state) => state.user.token,
      name: (state) => state.user.name,
    }),
  },

  created() {
    // 如果token存在，就不需要登陆，直接跳转到主页面
    if (this.token) {
      this.$router.replace("/");
    }
  },
  methods: {
    ...mapActions(["login"]),
    async submit() {
      try {
        if (this.islogin) return;
        this.islogin = true;
        const { phone, password } = this.user;
        await this.login({ phone, password });
        // 登陆成功且选择了自动登陆，保存token
        if (this.isAutoLogin) {
          localStorage.setItem("token", this.token);
          localStorage.setItem("name", this.name);
        }
        this.$router.replace("/");
      } catch {
        this.islogin = false;
      }
    },
  },
  components: {
    ValidationProvider,
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
  border: 1px solid #ddd;
  border-left: none;
  li {
    font-size: 20px;
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: center;
    border-left: 1px solid #ddd;
    font-weight: 700;
  }
}
.login-phone {
  padding-top: 50px;
  float: right;
}
.login-border {
  margin: 20px;
}
.login-text {
  position: relative;
  width: 100%;
  height: 316px;
  border: 1px solid #ddd;
  padding: 18px;
  box-sizing: border-box;
  border-top: none;
}
form {
  margin: 15px 0 18px 0;
}
.login-content {
  margin-bottom: 18px;
  input {
    width: 300px;
    height: 32px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    outline: none;
    border-left: none;
    padding-top: 5px;
  }
}
i {
  width: 35px;
  height: 30px;
  line-height: 32px;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 18px;
  color: red;
}
.login-btn {
  width: 100%;
  height: 36px;
  margin-top: 35px;
}
.login-check {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.login-to {
  position: absolute;
  right: 15px;
  bottom: 30px;
  font-size: 16px;
}
</style>
