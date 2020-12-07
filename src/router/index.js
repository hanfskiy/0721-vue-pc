import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Register from "../views/Register";
import Search from "../views/Search";
import Login from "../views/Login";
import Detail from "../views/Detail";
import AddCartSuccess from "../views/AddCartSuccess";
import ShopCart from "../views/ShopCart";
import Pay from "../views/Pay";
import PaySuccess from "../views/PaySuccess";
import Trade from "../views/Trade";
import Center from "../views/Center";

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
      name: "detail",
      path: "/detail/:id",
      component: Detail,
    },
    {
      name: "addCartSuccess",
      path: "/addCartSuccess",
      component: AddCartSuccess,
    },
    {
      name: "shopCart",
      path: "/shopCart",
      component: ShopCart,
    },
    {
      path: "/login",
      component: Login,
      meta: {
        isFooterHide: true,
      },
    },
    {
      name: "pay",
      path: "/pay",
      component: Pay,
    },
    {
      name: "paysuccess",
      path: "/paysuccess",
      component: PaySuccess,
    },
    {
      name: "trade",
      path: "/trade",
      component: Trade,
    },
    {
      name: "center",
      path: "/center/myorder",
      component: Center,
    },
  ],
  // 切换路由时，滚动条保持在页面顶部
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
