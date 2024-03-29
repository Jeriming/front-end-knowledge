import axios from "axios";

axios.defaults.withCredentials = true;
const $http = axios.create({
  baseURL: "/front-end-knowledge/",
  timeout: 1000,
});

// 添加请求拦截器
$http.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    if (config.params) {
      config.params.t = Date.now();
    } else {
      config.params = {
        t: Date.now(),
      };
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
$http.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default $http;
