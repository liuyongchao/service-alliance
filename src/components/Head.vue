<template>
<div>
    <div class="nav">
      <div>
        <router-link tag="a" to="/">返回首页</router-link>
        <router-link tag="a" to="/register">会员注册</router-link>
        <router-link tag="a" to="/login">会员登录</router-link>
      </div>
      <div>
        <router-link tag="a" to="/allianceintroduction">联盟概况</router-link>
        <router-link to="/alliancedynamics">联盟动态</router-link>
        <router-link to="/selfassessment">企业自评</router-link>
        <router-link to="/IndustryMap">产业地图</router-link>
        <router-link to="/contactus">联系我们</router-link>
      </div>                
    </div>
    <div class="logo"></div>
    </div>
</template>
<style lang="scss" scoped>
.nav {
  background-color: #006699;
  height: 100px;
  a {
    color: #ffffff;
    text-decoration: none;
    padding: 5px;
  }
  a:hover {
    color: red;
  }
}
.logo {
  height: 150px;
  background-color: red;
  background: url("../assets/logo.png") no-repeat 0% 0%;
}
</style>
