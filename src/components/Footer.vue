<template>
<div class="container">
    <div class="footer">
<dl>
  <dt>动态要闻
    <div class="line"></div>
  </dt>
  <dd>通知公告</dd>
  <dd>新闻动态</dd>
  <dd>前沿资讯</dd>
  <dd>一周政策</dd>
</dl>
<dl>
  <dt>企业自评
    <div class="line"></div>
  </dt> 
  
</dl>
<dl>
 <dt>产业地图
   <div class="line"></div>
 </dt> 
</dl>
<dl>
  <dt>会员中心
    <div class="line"></div>
  </dt>
  <dd>会员动态</dd>
  <dd>问卷调查</dd>
  <dd>会员列表</dd>
  <dd>会员权益</dd>
  <dd>入会流程</dd>
</dl>
<dl>
  <dt>关于我们
    <div class="line"></div>
  </dt>
  <dd>联盟介绍</dd>
  <dd>组织架构</dd>
  <dd>大事记</dd>
  <dd>联系我们</dd>
</dl>
<dl>
  <div class="qrcode1"></div> 
   <p style="font-size:14px">订阅号</p><p>北京企业技术中心创新服务联盟</p>
</dl>
<dl>
  <div class="qrcode2"></div> 
   <p style="font-size:14px">联盟官方微信</p><p>联系人：朱赛男 18612317646</p>
</dl>
</div >
    </div>
</template>

<style lang="scss" scoped>
.container {
  height: 200px;
  background-color: #3c3c3c;
  .footer {
    width: 1200px;
    height: 200px;
    margin: 0 auto;

    dl {
      width: 14%;
      height: 200px;
      float: left;
      dt {
        color: #ffffff;
        font-weight: 400;
        padding: 30px 50px 10px;
        .line {
          width: 50%;
          margin: 5px 0 0 10px;
          border: 1px solid #ffffff;
        }
      }
      dd {
        color: #ffffff;
        font-size: 12px;
        padding: 5px 0 0;
      }
      .qrcode1 {
        width: 120px;
        height: 120px;
        margin:20px auto 0;
        background: url(../assets/image/leftcode.png);
        background-size: 100% 100%;
      }
      .qrcode2 {
        margin:20px auto 0;
        width: 120px;
        height: 120px;
        background: url(../assets/image/rightcode.png);
        background-size: 100% 100%;
      }
      p {
        font-size: 12px;
        margin: 5px 0 0;
        color: #ffffff;
      }
    }
  }
}
</style>
