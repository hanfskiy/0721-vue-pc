import Vue from "vue";

import App from "./App";
import router from "./router";

import "./styles/reset.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
