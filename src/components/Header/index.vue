<template>
  <div class="header">
    <div class="header-top">
      <div class="header-login">
        <p>尚品汇欢迎您！</p>
        <p>
          <span>请</span>
          <router-link to="/login">登录</router-link>
          <router-link to="/register" class="header-register">
            免费注册
          </router-link>
        </p>
      </div>
      <div class="header-list">
        <a href="">我的订单</a>
        <router-link to="/shopCart">我的购物车</router-link>
        <a href="">我的尚品汇</a>
        <a href="">尚品汇会员</a>
        <a href="">企业采购</a>
        <a href="">关注尚品汇</a>
        <a href="">合作招商</a>
        <a href="">商家后台</a>
      </div>
    </div>
    <div class="header-bottom">
      <h1 class="header-logo">
        <router-link to="/">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="header-search">
        <form @submit.prevent="search">
          <input type="text" v-model="searchContent" />
          <button>搜索</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      //搜索内容
      searchContent: "",
    };
  },
  methods: {
    //搜索功能
    /* search() {
      const { searchContent } = this;
      const params = searchContent ? `/${searchContent}` : "";
      const location = "/search" + params;
      this.$router.push(location);
    }, */
    search() {
      const { searchContent } = this;
      const location = {
        name: "search",
      };
      if (searchContent) {
        location.params = {
          searchContent,
        };
      }

      // 判断query上有没有categoryname，有就将query参数添加到路径中
      const { categoryname } = this.$route.query;
      if (categoryname) {
        location.query = this.$route.query;
      }

      if (this.$route.name === "search") {
        this.$router.replace(location);
      } else {
        this.$router.push(location);
      }
    },
  },
  mounted() {
    this.$bus.$on("getKeyword", () => {
      this.searchContent = "";
    });
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
}
.header-top {
  background-color: #eaeaea;
  height: 30px;
  line-height: 30px;
  padding: 0 35px;
  display: flex;
  justify-content: space-between;
}
.header-login {
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  p {
    margin-right: 10px;
    a {
      margin-left: 5px;
    }
  }
}
.header-register {
  border-left: 1px solid #b3aeae;
  padding: 0 5px;
}
.header-list {
  a {
    padding: 0 10px;
  }
  a + a {
    border-left: 1px solid #b3aeae;
  }
}
.header-bottom {
  height: 110px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.header-logo {
  img {
    width: 175px;
    margin: 25px 45px;
  }
}
.header-search {
  margin-top: 35px;
  form {
    input {
      box-sizing: border-box;
      width: 490px;
      height: 32px;
      padding: 0 4px;
      border: 2px solid #ea4a36;
      outline: none;
    }
    button {
      height: 32px;
      width: 68px;
      background-color: #ea4a36;
      border: none;
      color: #fff;
      cursor: pointer;
      outline: none;
    }
  }
}
</style>
