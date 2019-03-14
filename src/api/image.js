import request from "@/utils/request";

//获取轮播列表
export function getImages() {
  return request({
    url: "/images",
    method: "get"
  });
}