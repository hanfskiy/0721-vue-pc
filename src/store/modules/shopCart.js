import {
  reqGetCartList,
  reqGetUpdateCartCount,
  reqGetCheckCart,
  reqGetDelCart,
} from "@api/shopCart";

export default {
  state: {
    cartList: [],
  },
  getters: {},
  actions: {
    async getCartList({ commit }) {
      const cartList = await reqGetCartList();
      commit("GET_CART_LIST", cartList);
    },
    async getUpdateCartCount({ commit }, { skuId, skuNum }) {
      await reqGetUpdateCartCount(skuId, skuNum);
      commit("GET_UPDATE_CARTCOUNT", { skuId, skuNum });
    },
    async getDelCart({ commit }, skuId) {
      await reqGetDelCart(skuId);
      commit("GET_DELCART", skuId);
    },
    async getCheckCart({ commit }, { skuId, isChecked }) {
      await reqGetCheckCart(skuId, isChecked);
      commit("GET_CHECK_CART", { skuId, isChecked });
    },
  },
  mutations: {
    GET_CART_LIST(state, cartList) {
      state.cartList = cartList;
    },
    GET_UPDATE_CARTCOUNT(state, { skuId, skuNum }) {
      state.cartList = state.cartList.map((cart) => {
        if (cart.skuId === skuId) {
          cart.skuNum += skuNum;
        }
        return cart;
      });
    },
    GET_DELCART(state, skuId) {
      state.cartList = state.cartList.filter((cart) => cart.skuId !== skuId);
    },
    GET_CHECK_CART(state, { skuId, isChecked }) {
      state.cartList = state.cartList.map((cart) => {
        if (cart.skuId === skuId) {
          cart.isChecked = isChecked;
        }
        return cart;
      });
    },
  },
};
