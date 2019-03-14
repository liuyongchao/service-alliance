import request from "@/utils/request";

//获取文章列表
export function articleList(pageNum,pageSize,type) {
  return request({
    url: "/article/list",
    method: "get",
    params:{
        pageNum,
        pageSize,
        type
    }
  });
}
//获取文章
export function articleById(id) {
    return request({
      url: "/article/" + id,
      method: "get"
    });
  }
