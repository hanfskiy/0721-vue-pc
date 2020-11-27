import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Register from "../views/Register";
import Search from "../views/Search";
import Login from "../views/Login";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/search",
      component: Search,
    },
    {
      path: "/login",
      component: Login,
    },
  ],
});
