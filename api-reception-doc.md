# 产业地图前台


<a name="overview"></a>
## Overview
前台接口文档


### Version information
*Version* : 2019.03.06-11:06


### Contact information
*Contact* : Will  
*Contact Email* : 434224591@qq.com


### URI scheme
*Host* : localhost:8080  
*BasePath* : /


### Tags

* 产业地图相关的api : Map Controller
* 文章相关api : Article Controller
* 用户相关api : Auth Controller
* 自评相关api : Evaluate Controller


### Produces

* `application/json;charset=UTF-8`




<a name="paths"></a>
## Resources

<a name="1c8b530043b5b887dffd26c4f9f193af"></a>
### 产业地图相关的api
Map Controller


<a name="industrylistusingget"></a>
#### 获取产业地图数据
```
GET /map/industries
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< [IndustryInfoDto](#industryinfodto) > array|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


<a name="industrycityusingget"></a>
#### 获取三城一区企业数量、营收、专利数
```
GET /map/industry/city
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< [IndustryCityDto](#industrycitydto) > array|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


<a name="industrydomainusingget"></a>
#### 获取各领域企业数量、营收、专利数
```
GET /map/industry/domain
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< [IndustryDomainDto](#industrydomaindto) > array|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


<a name="incomedistributionusingget"></a>
#### 获取营收分布企业数量
```
GET /map/industry/income
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< [IncomeDistributionDto](#incomedistributiondto) > array|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


<a name="industryregionusingget"></a>
#### 获取各区域企业数量、营收、专利数
```
GET /map/industry/region
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< [IndustryRegionDto](#industryregiondto) > array|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


<a name="listamountusingget"></a>
#### 获取各上市情况企业数量
```
GET /map/list/amount
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< [ListAmountDto](#listamountdto) > array|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


<a name="ownershipamountusingget"></a>
#### 获取各所有制企业数量
```
GET /map/ownership/amount
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< [OwnershipAmountDto](#ownershipamountdto) > array|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


<a name="yearamountusingget"></a>
#### 获取各年度技术中心数量
```
GET /map/year/amount
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< [YearAmountDto](#yearamountdto) > array|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


<a name="225d7fa15fee4c1bbddd9354912a03c8"></a>
### 文章相关api
Article Controller


<a name="getarticlelistbytypeusingget"></a>
#### 获取文章列表
```
GET /article/list
```


##### Parameters

|Type|Name|Description|Schema|Default|
|---|---|---|---|---|
|**Query**|**pageNum**  <br>*optional*|当前页|integer (int32)|`1`|
|**Query**|**pageSize**  <br>*optional*|每页大小|integer (int32)|`20`|
|**Query**|**type**  <br>*required*|文章类型|integer (int32)||


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[PageInfo«ArticleResultDto»](#5c5593cc9bf47d205f46f2dbae01c545)|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


<a name="getarticlebyidusingget"></a>
#### 获取文章
```
GET /article/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|文章id|integer (int64)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ArticleResultDto](#articleresultdto)|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


<a name="getloopimagesusingget"></a>
#### 获取轮播图列表
```
GET /images
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< [ImageDto](#imagedto) > array|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


<a name="98e0cf8d443fc2c0d264c9e420837ed8"></a>
### 用户相关api
Auth Controller


<a name="loginusingpost"></a>
#### 登录
```
POST /login
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**FormData**|**password**  <br>*required*|密码|string|
|**FormData**|**username**  <br>*required*|用户名|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[LoginResultDto](#loginresultdto)|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


##### Consumes

* `application/x-www-form-urlencoded`


<a name="logoutusingpost"></a>
#### 退出登录
```
POST /logout
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Header**|**X-Auth-Token**  <br>*optional*|token|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[MessageResponse](#messageresponse)|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


##### Consumes

* `application/x-www-form-urlencoded`


<a name="registerusingpost"></a>
#### 注册
```
POST /register
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**formDto**  <br>*required*|formDto|[RegisterFormDto](#registerformdto)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|string|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


##### Consumes

* `application/json`


<a name="checkcompanynameoccupiedusingget"></a>
#### 检查企业名称是否被占用
```
GET /register/occupied/companyname
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**companyName**  <br>*required*|企业名称|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|boolean|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


<a name="checkusernameoccupiedusingget"></a>
#### 检查用户名是否被占用
```
GET /register/occupied/username
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**username**  <br>*required*|用户名|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|boolean|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


<a name="authoritylistusingget"></a>
#### 获取权限列表
```
GET /user/authorities
```


##### Description
需要登陆


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< string > array|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


##### Security

|Type|Name|
|---|---|
|**apiKey**|**[Authorization](#authorization)**|


<a name="0287a4819b541dff71d03734d22a0237"></a>
### 自评相关api
Evaluate Controller


<a name="companymeetlistusingget"></a>
#### 获取基本评价中企业满足条件列表
```
GET /evaluate/basic/company/meet
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< [CompanyMeetDto](#companymeetdto) > array|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


<a name="basicevaluateusingpost"></a>
#### 提交基础评价
```
POST /evaluate/basic/evaluate
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**formDto**  <br>*required*|formDto|[BasicEvaluateFormDto](#basicevaluateformdto)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[BasicEvaluateResultDto](#basicevaluateresultdto)|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


##### Consumes

* `application/json`


<a name="illegallistusingget"></a>
#### 获取基本评价中违法行为列表
```
GET /evaluate/basic/illegal
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< [IllegalDto](#illegaldto) > array|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


<a name="domainlistusingget"></a>
#### 自评打分中获取领域列表
```
GET /evaluate/self/domains
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< [DomainEntity](#domainentity) > array|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


<a name="selfevaluateusingpost"></a>
#### 提交自评打分
```
POST /evaluate/self/evaluate
```


##### Description
需要登录


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**formDto**  <br>*required*|formDto|[SelfEvaluateFormDto](#selfevaluateformdto)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[SelfEvaluateResultDto](#selfevaluateresultdto)|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|


##### Consumes

* `application/json`


##### Security

|Type|Name|
|---|---|
|**apiKey**|**[Authorization](#authorization)**|


<a name="tradelistusingget"></a>
#### 自评打分中获取行业列表
```
GET /evaluate/self/trades
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< [TradeEntity](#tradeentity) > array|
|**400**|请求参数错误|[MessageResponse](#messageresponse)|
|**401**|未授权/授权失败|[MessageResponse](#messageresponse)|
|**404**|路由不存在|[MessageResponse](#messageresponse)|
|**405**|不支持的请求方法|[MessageResponse](#messageresponse)|
|**500**|服务器内部错误|[MessageResponse](#messageresponse)|




<a name="definitions"></a>
## Definitions

<a name="articleresultdto"></a>
### ArticleResultDto

|Name|Schema|
|---|---|
|**classify**  <br>*optional*|string|
|**context**  <br>*optional*|string|
|**enable**  <br>*optional*|boolean|
|**id**  <br>*optional*|integer (int64)|
|**subtitle**  <br>*optional*|string|
|**title**  <br>*optional*|string|
|**uploadTime**  <br>*optional*|string (date-time)|


<a name="basicevaluateformdto"></a>
### BasicEvaluateFormDto
基础评价form表单


|Name|Description|Schema|
|---|---|---|
|**atLeast**  <br>*required*|上一年度研究与试验发展经费支出不低于1000万元|boolean|
|**belongTo**  <br>*required*|工艺和设备不属于现行有效的《北京市工业污染行业、生产工艺调整退出及设备淘汰目录》所列内容|boolean|
|**companyMeet**  <br>*required*|企业满足|< integer (int32) > array|
|**enoughDeviceValue**  <br>*required*|上一年度拥有技术开发仪器设备原值不低于500万元（软件和专业技术服务业不低于300万元、建筑业不低于1000万元）|boolean|
|**enoughPatent**  <br>*required*|近三年内获得的有效知识产权不少于10件，含专利（至少1件发明专利）、软件著作权、集成电路布图设计专有权|boolean|
|**enoughPerson**  <br>*required*|拥有技术水平高、实践经验丰富的技术带头人，专职研究与试验发展人员数不少于60人（软件和专业技术服务业不低于80人）|boolean|
|**illegal**  <br>*required*|受理截止日期前三年内|< integer (int32) > array|
|**inScope**  <br>*required*|所属行业不在现行有效的《北京市新增产业的禁止和限制目录》范围之内|boolean|


<a name="basicevaluateresultdto"></a>
### BasicEvaluateResultDto
基本评价返回信息


|Name|Description|Schema|
|---|---|---|
|**basicId**  <br>*optional*|基本评价记录id|integer (int64)|
|**basicSecret**  <br>*optional*|基本评价记录校验码|string|


<a name="companymeetdto"></a>
### CompanyMeetDto
企业满足条件


|Name|Description|Schema|
|---|---|---|
|**context**  <br>*optional*|企业满足条件内容|string|
|**id**  <br>*optional*|企业满足条件id|integer (int32)|


<a name="domainentity"></a>
### DomainEntity
领域信息


|Name|Description|Schema|
|---|---|---|
|**id**  <br>*optional*|领域id|integer (int64)|
|**name**  <br>*optional*|领域名称|string|


<a name="illegaldto"></a>
### IllegalDto
违法行为信息


|Name|Description|Schema|
|---|---|---|
|**context**  <br>*optional*|违法行为内容|string|
|**id**  <br>*optional*|违法行为id|integer (int32)|


<a name="imagedto"></a>
### ImageDto
图片信息


|Name|Description|Schema|
|---|---|---|
|**id**  <br>*optional*|图片id|integer (int64)|
|**uri**  <br>*optional*|图片uri|string|


<a name="incomedistributiondto"></a>
### IncomeDistributionDto
营收分布企业数量信息


|Name|Description|Schema|
|---|---|---|
|**id**  <br>*optional*|分布id|integer (int64)|
|**industryAmount**  <br>*optional*|企业数量|integer (int64)|
|**name**  <br>*optional*|分布名称|string|


<a name="industrycitydto"></a>
### IndustryCityDto
三城一区企业信息


|Name|Description|Schema|
|---|---|---|
|**id**  <br>*optional*|三城一区id|integer (int64)|
|**industryAmount**  <br>*optional*|企业数量|integer (int64)|
|**industryIncome**  <br>*optional*|企业营收|number (double)|
|**name**  <br>*optional*|三城一区名称|string|
|**patentAmount**  <br>*optional*|企业专利数|number (double)|


<a name="industrydomaindto"></a>
### IndustryDomainDto
领域企业信息


|Name|Description|Schema|
|---|---|---|
|**id**  <br>*optional*|领域id|integer (int64)|
|**industryAmount**  <br>*optional*|企业数量|integer (int64)|
|**industryIncome**  <br>*optional*|企业营收|number (double)|
|**name**  <br>*optional*|领域名称|string|
|**patentAmount**  <br>*optional*|企业专利数|number (double)|


<a name="industryinfodto"></a>
### IndustryInfoDto
企业信息


|Name|Description|Schema|
|---|---|---|
|**domain**  <br>*optional*|所属领域|[DomainEntity](#domainentity)|
|**id**  <br>*optional*|企业id|integer (int64)|
|**latitude**  <br>*optional*|纬度|number (double)|
|**longitude**  <br>*optional*|经度|number (double)|
|**name**  <br>*optional*|企业名称|string|


<a name="industryregiondto"></a>
### IndustryRegionDto
区域企业信息


|Name|Description|Schema|
|---|---|---|
|**id**  <br>*optional*|区域id|integer (int64)|
|**industryAmount**  <br>*optional*|企业数量|integer (int64)|
|**industryIncome**  <br>*optional*|企业营收|number (double)|
|**name**  <br>*optional*|区域名称|string|
|**patentAmount**  <br>*optional*|企业专利数|number (double)|


<a name="listamountdto"></a>
### ListAmountDto
上市情况企业数量信息


|Name|Description|Schema|
|---|---|---|
|**id**  <br>*optional*|上市情况id|integer (int64)|
|**industryAmount**  <br>*optional*|企业数量|integer (int64)|
|**name**  <br>*optional*|上市情况名称|string|


<a name="loginresultdto"></a>
### LoginResultDto
登录返回信息


|Name|Description|Schema|
|---|---|---|
|**authorities**  <br>*optional*|权限列表|< string > array|
|**token**  <br>*optional*|token|string|
|**username**  <br>*optional*|用户名|string|


<a name="messageresponse"></a>
### MessageResponse
响应消息


|Name|Description|Schema|
|---|---|---|
|**code**  <br>*optional*|消息编码|integer (int32)|
|**message**  <br>*optional*|消息内容|string|


<a name="ownershipamountdto"></a>
### OwnershipAmountDto
所有制企业数量信息


|Name|Description|Schema|
|---|---|---|
|**id**  <br>*optional*|所有制id|integer (int64)|
|**industryAmount**  <br>*optional*|企业数量|integer (int64)|
|**name**  <br>*optional*|所有制名称|string|


<a name="5c5593cc9bf47d205f46f2dbae01c545"></a>
### PageInfo«ArticleResultDto»

|Name|Schema|
|---|---|
|**endRow**  <br>*optional*|integer (int32)|
|**firstPage**  <br>*optional*|integer (int32)|
|**hasNextPage**  <br>*optional*|boolean|
|**hasPreviousPage**  <br>*optional*|boolean|
|**isFirstPage**  <br>*optional*|boolean|
|**isLastPage**  <br>*optional*|boolean|
|**lastPage**  <br>*optional*|integer (int32)|
|**list**  <br>*optional*|< [ArticleResultDto](#articleresultdto) > array|
|**navigateFirstPage**  <br>*optional*|integer (int32)|
|**navigateLastPage**  <br>*optional*|integer (int32)|
|**navigatePages**  <br>*optional*|integer (int32)|
|**navigatepageNums**  <br>*optional*|< integer (int32) > array|
|**nextPage**  <br>*optional*|integer (int32)|
|**pageNum**  <br>*optional*|integer (int32)|
|**pageSize**  <br>*optional*|integer (int32)|
|**pages**  <br>*optional*|integer (int32)|
|**prePage**  <br>*optional*|integer (int32)|
|**size**  <br>*optional*|integer (int32)|
|**startRow**  <br>*optional*|integer (int32)|
|**total**  <br>*optional*|integer (int64)|


<a name="registerformdto"></a>
### RegisterFormDto

|Name|Description|Schema|
|---|---|---|
|**address**  <br>*required*|通讯地址  <br>**Pattern** : `"^.{1,100}"`|string|
|**business**  <br>*required*|主营业务  <br>**Pattern** : `"^.{1,100}"`|string|
|**companyName**  <br>*required*|企业名称  <br>**Pattern** : `"^\\S{1,50}"`|string|
|**contact**  <br>*required*|联系人  <br>**Pattern** : `"^.{1,50}"`|string|
|**email**  <br>*required*|电子邮箱|string|
|**head**  <br>*required*|企业负责人  <br>**Pattern** : `"^.{1,50}"`|string|
|**isListed**  <br>*required*|是否上市|boolean|
|**listedCode**  <br>*optional*|上市代码|string|
|**password**  <br>*required*|密码  <br>**Pattern** : `"^\\S{8,20}$"`|string|
|**phoneNum**  <br>*required*|联系电话  <br>**Pattern** : `"^[+0-9 ]{7,17}"`|string|
|**username**  <br>*required*|用户名  <br>**Pattern** : `"^[[一-龥a-zA-Z]+[一-龥a-zA-Z0-9-_]*]{4,25}$"`|string|


<a name="selfevaluateformdto"></a>
### SelfEvaluateFormDto
自评打分form表单


|Name|Description|Schema|
|---|---|---|
|**acceptInventPatentNum**  <br>*required*|当年被受理的发明专利申请数|integer (int32)|
|**acceptPatentNum**  <br>*required*|当年被受理的专利申请数|integer (int32)|
|**basicId**  <br>*required*|基础评价记录id|integer (int64)|
|**basicSecret**  <br>*required*|基础评价记录的校验码|string|
|**bigPrizeNum**  <br>*required*|获国家自然科学、技术发明、 科技进步奖项目数|integer (int32)|
|**contributionRate**  <br>*required*|利润率（小数计数）|number (double)|
|**countryPlatformNum**  <br>*required*|国家级研发平台数|integer (int32)|
|**developerProportion**  <br>*required*|研发人员占企业职工总数的比重（小数计数）|number (double)|
|**deviceValue**  <br>*required*|企业技术开发仪器设备原值|number (double)|
|**domainId**  <br>*required*|领域id|integer (int32)|
|**expertNum**  <br>*required*|技术中心拥有的高级专家和博士人数|integer (int32)|
|**externalExpertNum**  <br>*required*|来技术中心从事研发工作的外部专家人月数|integer (int32)|
|**fundsSpend**  <br>*required*|研发人员人均研发经费支出（万元）|number (double)|
|**fundsSpendIncomeProportion**  <br>*required*|研发经费支出占主营业务收入的比重（小数计数）|number (double)|
|**income**  <br>*required*|主营业务收入（亿元）|number (double)|
|**incomeProportion**  <br>*required*|新产品销售收入占主营业务收入的比重*（小数计数）|number (double)|
|**intellectualPropertyNum**  <br>*required*|企业拥有的全部有效知识产权数|integer (int32)|
|**organizationNum**  <br>*required*|通过国家（国际组织）、省认证的实验室和检测机构数|integer (int32)|
|**patentNum**  <br>*required*|企业拥有的全部有效发明专利数|integer (int32)|
|**profitProportion**  <br>*required*|新产品销售利润占利润总额的比重*（小数计数）|number (double)|
|**projectNum**  <br>*required*|企业全部研发项目数|integer (int32)|
|**projectProportion**  <br>*required*|基础研究和应用研究项目数占全部研发项目数的比重（小数计数）|number (double)|
|**provincePlatformNum**  <br>*required*|省级研发平台数|integer (int32)|
|**smallPrizeNum**  <br>*required*|获省部级科技进步奖项目数|integer (int32)|
|**standardNum**  <br>*required*|最近三年主持和参加制定的国际、国家和行业标准数（建筑业包含近四年国家级工法）|integer (int32)|
|**tradeId**  <br>*required*|行业id|integer (int64)|


<a name="selfevaluateresultdto"></a>
### SelfEvaluateResultDto
自评打分结果


|Name|Description|Schema|
|---|---|---|
|**acceptInventPatentNum**  <br>*optional*|当年被受理的发明专利申请数|number (double)|
|**acceptPatentNum**  <br>*optional*|当年被受理的专利申请数|number (double)|
|**contributionRate**  <br>*optional*|利润率|number (double)|
|**countryPlatformNum**  <br>*optional*|国家级研发平台数|number (double)|
|**developerProportion**  <br>*optional*|研发人员占企业职工总数的比重|number (double)|
|**deviceValue**  <br>*optional*|企业技术开发仪器设备原值|number (double)|
|**expertNum**  <br>*optional*|技术中心拥有的高级专家和博士人数|number (double)|
|**externalExpertNum**  <br>*optional*|来技术中心从事研发工作的外部专家人月数|number (double)|
|**fundsSpend**  <br>*optional*|研发人员人均研发经费支出|number (double)|
|**fundsSpendIncomeProportion**  <br>*optional*|研发经费支出占主营业务收入的比重|number (double)|
|**incomeProportion**  <br>*optional*|新产品销售收入占主营业务收入的比重|number (double)|
|**intellectualPropertyNum**  <br>*optional*|企业拥有的全部有效知识产权数|number (double)|
|**organizationNum**  <br>*optional*|通过国家（国际组织）、省认证的实验室和检测机构数|number (double)|
|**patentNum**  <br>*optional*|企业拥有的全部有效发明专利数|number (double)|
|**prizeNum**  <br>*optional*|获奖情况|number (double)|
|**profitProportion**  <br>*optional*|新产品销售利润占利润总额的比重|number (double)|
|**projectNum**  <br>*optional*|企业全部研发项目数|number (double)|
|**projectProportion**  <br>*optional*|基础研究和应用研究项目数占全部研发项目数的比重|number (double)|
|**provincePlatformNum**  <br>*optional*|省级研发平台数|number (double)|
|**result**  <br>*optional*|总分|number (double)|
|**standardNum**  <br>*optional*|最近三年主持和参加制定的国际、国家和行业标准数（建筑业包含近四年国家级工法）|number (double)|


<a name="tradeentity"></a>
### TradeEntity
行业信息


|Name|Description|Schema|
|---|---|---|
|**id**  <br>*optional*|行业id|integer (int64)|
|**name**  <br>*optional*|行业名称|string|


<a name="yearamountdto"></a>
### YearAmountDto
每年技术中心数量信息


|Name|Description|Schema|
|---|---|---|
|**techCenterAmount**  <br>*optional*|技术中心总量|integer (int64)|
|**techCenterNewAmount**  <br>*optional*|技术中心新增数量|integer (int64)|
|**year**  <br>*optional*|年份|integer (int32)|




<a name="securityscheme"></a>
## Security

<a name="authorization"></a>
### Authorization
*Type* : apiKey  
*Name* : X-Auth-Token  
*In* : HEADER



