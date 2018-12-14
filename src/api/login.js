import request from "@/utils/request";

export function login(username, password) {
  return request({
    url: "/login",
    method: "post",
    data: "username=" + username + "&password=" + password
  });
}
//检查⽤用户名是否被占⽤用
export function registerOccupiedUsername(username) {
  return request({
    url: "/register/occupied/username",
    method: "get",
    params: { username }
  });
}
//检查企业名称是否被占⽤用
export function registerOccupiedCompanyname(companyName) {
  return request({
    url: "/register/occupied/companyname",
    method: "get",
    params: { companyName }
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
