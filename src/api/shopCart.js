import request from "@utils/request";

// 获取购物车列表数据
export const reqGetCartList = () => {
  return request({
    method: "GET",
    url: "/cart/cartList",
  });
};

// 添加或减少购物车商品数量
export const reqGetUpdateCartCount = (skuId, skuNum) => {
  return request({
    method: "POST",
    url: `/cart/addToCart/${skuId}/${skuNum}`,
  });
};

// 切换商品选中状态
export const reqGetCheckCart = (skuId, isChecked) => {
  return request({
    method: "GET",
    url: `/cart/checkCart/${skuId}/${isChecked}`,
  });
};

// 删除购物车商品
export const reqGetDelCart = (skuId) => {
  return request({
    method: "DELETE",
    url: `/cart/deleteCart/${skuId}`,
  });
};
