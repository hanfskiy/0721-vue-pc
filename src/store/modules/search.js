import { reqGetSearch } from "@api/search";

export default {
  state: {
    searchList: {
      trademarkList: [],
      attrsList: [],
      goodsList: [],
    },
  },
  getters: {
    trademarkList(state) {
      return state.searchList.trademarkList;
    },
    attrsList(state) {
      return state.searchList.attrsList;
    },
    goodsList(state) {
      return state.searchList.goodsList;
    },
  },
  actions: {
    async getSearch({ commit }, data = {}) {
      const searchList = await reqGetSearch(data);
      commit("GET_SEARCH", searchList);
    },
  },
  mutations: {
    GET_SEARCH(state, searchList) {
      state.searchList = searchList;
    },
  },
};
