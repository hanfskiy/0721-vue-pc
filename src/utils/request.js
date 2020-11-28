import axios from "axios";

// 引入进度条插件
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { Message } from "element-ui";

const instance = axios.create({
  baseURL: "/api", //公共的基础路径
  headers: {},
});

// 设置请求拦截器
instance.interceptors.request.use((config) => {
  // 进度条开始
  NProgress.start();
  return config;
});

// 设置响应拦截器
instance.interceptors.response.use(
  // 响应成功
  (response) => {
    // 进度条结束
    NProgress.done();
    // 判断响应的code是否是200
    if (response.data.code === 200) {
      // 返回成功的响应数据
      return response.data.data;
    }

    const { message } = response.data;
    // 错误提示弹窗
    Message.error(message);
    // 功能失败 返回失败的promise
    return Promise.reject(message);
  },
  //   响应失败：当响应状态码不是2xx的时候
  (error) => {
    // 错误提示弹窗
    Message.error(message);
    const message = error.message || "网络出现问题";
    return Promise.reject(message);
  }
);

export default instance;
