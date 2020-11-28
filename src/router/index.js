import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Register from "../views/Register";
import Search from "../views/Search";
import Login from "../views/Login";

const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

// 解决搜索重复点击报错问题
VueRouter.prototype.push = function(location, onComplate, onAbort) {
  if (onComplate && onAbort) {
    return push.call(this, location, onComplate, onAbort);
  }

  return push.call(this, location, onComplate, () => {});
};

VueRouter.prototype.replace = function(location, onComplate, onAbort) {
  if (onComplate && onAbort) {
    return replace.call(this, location, onComplate, onAbort);
  }

  return replace.call(this, location, onComplate, () => {});
};

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
      meta: {
        isFooterHide: true,
      },
    },
    {
      name: "search",
      path: "/search/:searchContent?",
      component: Search,
    },
    {
      path: "/login",
      component: Login,
      meta: {
        isFooterHide: true,
      },
    },
  ],
});
