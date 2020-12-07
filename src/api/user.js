import request from "@utils/request";

// 封装一个发送请求的功能函数
export const reqLogin = (phone, password) => {
  // 将request的返回值返回出去
  //   外面可以接收到request返回值（promise对象),通过这个promise对象可以判断请求成功还是失败
  return request({
    method: "POST", //请求方式
    url: "/user/passport/login", //接口路径
    data: {
      phone,
      password,
    },
  });
};

export const reqRegister = ({ phone, password, code }) => {
  return request({
    method: "POST",
    url: "/user/passport/register",
    data: {
      phone,
      password,
      code,
    },
  });
};
