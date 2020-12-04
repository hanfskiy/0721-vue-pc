import request from "@utils/request";

export const reqGetDetail = (id) => {
  return request({
    method: "GET",
    url: `/item/${id}`,
  });
};
