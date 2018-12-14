import axios from "axios";
import { Message, MessageBox } from "element-ui";
import store from "../store";
import router from "../router";
import { getToken } from "@/utils/auth";

// 创建axios实例
const service = axios.create({
  //baseURL: process.env.BASE_API, // api的base_url
  //baseURL: "https://easy-mock.com/mock/5b6bea2cdfe6643d4e6bb9b8/vue-rjs",
  //baseURL: "http://192.168.65.54:8081/api/backend",
  //baseURL: "http://192.168.65.54:8080/api/reception",
  baseURL: "http://api.reception.cxfwlm.org.cn",
  timeout: 15000 // 请求超时时间
});

// request拦截器
//config.headers["Content-Type"] = "Content-Type": "application/json;charset=utf-8";
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers["X-Auth-Token"] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    if (config.url === "/login") {
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    } else {
      config.headers["Content-Type"] = "application/json;charset=utf-8";
    }

    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非200是抛错 可结合自己业务进行修改
     */
    const res = response.data;
    //const res = response;
    if (response.status !== "200" && response.status !== 200) {
      if (response.status === "401" || response.status === 401) {
        MessageBox.confirm("用户名或密码错误，请重新登录", "重新登录", {
          confirmButtonText: "重新登录",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          store.dispatch("FedLogOut").then(() => {
            location.reload(); // 为了重新实例化vue-router对象 避免bug
          });
        });
      }
      if (res.code === "400" || res.code === 400) {
        MessageBox.confirm("该用户名已存在，请重新注册！", "重新注册", {
          confirmButtonText: "重新注册",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          store.dispatch("FedLogOut").then(() => {
            location.reload(); // 为了重新实例化vue-router对象 避免bug
          });
        });
      }
      return Promise.reject("error");
    } else {
      return response.data;
    }
  },
  error => {
    const resonse = error.response;
    if (resonse.status === "401" || resonse.status === 401) {
      console.log("未授权/授权失败");
      if (resonse.data.code === "2001" || resonse.data.code === 2001) {
        //格式不对
        MessageBox.confirm(resonse.data.message, "温馨提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        });
      }
      if (resonse.data.code === "3004" || resonse.data.code === 3004) {
        //密码用户名不匹配
        console.log("未授权/授权失败");
        MessageBox.confirm("您输入的用户名密码有误，请重新输入", "温馨提示！", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        });
      }
    }
    if (resonse.status === "400" || resonse.status === 400) {
      if (resonse.data.code === "2002" || resonse.data.code === 2002) {
        //密码用户名不匹配
        console.log(resonse.data.message);
        if (
          resonse.data.message === "basicId不能为空" ||
          resonse.data.message === "basicSecret不能为空"
        ) {
          MessageBox.confirm("请重新进行基础评价！", "温馨提示:", {
            showCancelButton: false,
            confirmButtonText: "确定",
            type: "warning"
          });
        } else {
          MessageBox.confirm(resonse.data.message, "温馨提示:", {
            confirmButtonText: "确定",
            type: "warning"
          });
        }
      }
    }
    // Message({
    //   message: error.message,
    //   type: "error",
    //   duration: 5 * 1000
    // });
    return Promise.reject(error);
  }
);

export default service;
