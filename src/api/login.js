import request from "@/utils/request";

export function login(username, password) {
  return request({
    url: "/login",
    method: "post",
    data: "username=" + username + "&password=" + password
  });
}

export function register(registerForm) {
  return request({
    url: "/register",
    method: "post",
    data: registerForm
  });
}

export function getInfo(token) {
  return request({
    url: "/userinfo",
    method: "get",
    params: { token }
  });
}

export function logout() {
  return request({
    url: "/user/logout",
    method: "post"
  });
}
