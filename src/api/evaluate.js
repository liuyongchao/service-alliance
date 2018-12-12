import request from "@/utils/request";

//获取基础自评行业信息
export function basicTrades() {
  return request({
    url: "/evaluate/basic/trades",
    method: "get"
  });
}
//获取基础自评满足条件
export function basicCompanyMeet() {
  return request({
    url: "/evaluate/basic/company/meet",
    method: "get"
  });
}
//获取基础自评违法行为
export function basicIllegal() {
  return request({
    url: "/evaluate/basic/illegal",
    method: "get"
  });
}
//提交基础自评
export function basicEvaluate(basicEvaluateForm) {
  return request({
    url: "/evaluate/basic/evaluate",
    method: "post",
    data: basicEvaluateForm
  });
}
//获取自评行业
export function selfTrades() {
  return request({
    url: "/evaluate/self/trades",
    method: "get"
  });
}
//提交自评
export function selfEvaluate(SelfEvaluateForm) {
  return request({
    url: "/evaluate/self/evaluate",
    method: "post",
    data: SelfEvaluateForm
  });
}
