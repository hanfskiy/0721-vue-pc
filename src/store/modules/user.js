import { reqRegister, reqLogin } from "@api/user";

export default {
  state: {
    name: localStorage.getItem("name") || "",
    // 读取token数据
    token: localStorage.getItem("token") || "",
  },
  getters: {},
  actions: {
    async register({ commit }, { phone, password, code }) {
      await reqRegister({ phone, password, code });
      console.log(commit);
    },
    async login({ commit }, { phone, password }) {
      const user = await reqLogin(phone, password);
      commit("LOGIN", user);
    },
  },
  mutations: {
    LOGIN(state, user) {
      state.name = user.name;
      state.token = user.token;
    },
  },
};
