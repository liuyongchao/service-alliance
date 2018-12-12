import request from "@/utils/request";

//获取产业地图数据
export function mapIndustries() {
  return request({
    url: "/map/industries",
    method: "GET"
  });
}

//获取三城⼀一区企业数量量、营收、专利利数
export function mapIndustryCity() {
  return request({
    url: "/map/industry/city ",
    method: "GET"
  });
}

//获取各领域企业数量、营收、专利利数
export function mapIndustryDomain() {
  return request({
    url: "/map/industry/domain ",
    method: "GET"
  });
}

//获取营收分布企业数量
export function mapIndustryIncome() {
  return request({
    url: "/map/industry/income ",
    method: "GET"
  });
}

//获取各区域企业数量、营收、专利利数
export function mapIndustryRegion() {
  return request({
    url: "/map/industry/region",
    method: "GET"
  });
}

//获取各上市情况企业数量
export function mapListAmount() {
  return request({
    url: "/map/list/amount ",
    method: "GET"
  });
}

//获取各所有制企业数量
export function mapOwnershipAmount() {
  return request({
    url: "/map/ownership/amount  ",
    method: "GET"
  });
}

//获取各所有制企业数量
export function mapYearAmount() {
  return request({
    url: "/map/year/amount",
    method: "GET"
  });
}
