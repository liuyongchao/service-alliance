import { login, logout } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/auth";

const user = {
  state: {
    token: getToken(),
    name: "",
    avatar: "",
    authorities: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_AUTHORITIES: (state, authorities) => {
      state.authorities = authorities;
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim();
      return new Promise((resolve, reject) => {
        login(username, userInfo.password)
          .then(response => {
            const data = response;
            setToken(data.token);
            commit("SET_TOKEN", data.token);
            debugger;
            if (data.authorities && data.authorities.length > 0) {
              // 验证返回的authorities是否是一个非空数组
              commit("SET_AUTHORITIES", data.authorities);
            } else {
              reject("getInfo: authorities must be a non-null array !");
            }

            commit("SET_NAME", data.username);
            //commit("SET_AVATAR", data.user.avatar);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token)
          .then(response => {
            const data = response.data;
            if (data.authorities && data.authorities.length > 0) {
              // 验证返回的authorities是否是一个非空数组
              commit("SET_AUTHORITIES", data.authorities);
            } else {
              reject("getInfo: authorities must be a non-null array !");
            }
            commit("SET_NAME", data.user.name);
            commit("SET_AVATAR", data.user.avatar);
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token)
          .then(() => {
            commit("SET_TOKEN", "");
            commit("SET_AUTHORITIES", []);
            removeToken();
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit("SET_TOKEN", "");
        removeToken();
        resolve();
      });
    }
  }
};

export default user;
