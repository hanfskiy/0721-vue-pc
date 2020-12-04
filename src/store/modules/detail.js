import { reqGetDetail } from "@api/detail";

export default {
  state: {
    productDetail: {
      categoryView: {}, //分类数据
      skuInfo: {}, //商品详情数据
      spuSaleAttrList: [], //商品选择属性列表
    },
  },
  getters: {
    categoryView(state) {
      return state.productDetail.categoryView;
    },
    skuInfo(state) {
      return state.productDetail.skuInfo;
    },
    spuSaleAttrList(state) {
      return state.productDetail.spuSaleAttrList;
    },
  },
  actions: {
    async getDetail({ commit }, id) {
      const productDetail = await reqGetDetail(id);
      commit("GET_DETAIL", productDetail);
    },
  },
  mutations: {
    GET_DETAIL(state, productDetail) {
      state.productDetail = productDetail;
    },
  },
};
