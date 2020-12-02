import Vue from "vue";
import "./plugins/element.js";

import App from "./App";
import router from "./router";
import store from "./store";

// 引入mockServer，为了加载里面的代码
// 里面代码一但加载，就去启动mock服务器，拦截相应的请求
import "./mock/mockServer";

import "./styles/reset.css";
import "./styles/iconfont.css";

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
