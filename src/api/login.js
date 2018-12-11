import request from "@/utils/request";

export function login(username, password) {
  return request({
    url: "/login",
    method: "post",
    data: "username=admin&password=adminadmin"
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
