import request from "@utils/request";

export const reqGetSearch = (data) => {
  return request({
    method: "POST",
    url: "/list",
    data,
  });
};
