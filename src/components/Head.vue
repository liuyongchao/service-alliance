<template>
<div>
    <div class="nav">
      <div class="nav-whole">
        <div class="nav-login">
          <router-link tag="a" to="/">返回首页</router-link>
          <router-link tag="a" to="/register">加入联盟</router-link>
          <router-link tag="a" to="/login">会员登录</router-link>
        </div>
        <div class="nav-main">
          <router-link tag="a" to="/allianceintroduction">联盟概况</router-link>
          <router-link tag="a" to="/alliancedynamics">联盟动态</router-link>
          <router-link tag="a" to="/selfassessment">企业自评</router-link>
          <router-link tag="a" to="/IndustryMap">产业地图</router-link>
          <router-link tag="a" to="/contactus">联系我们</router-link>
        </div>
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
    color: #dddddd;
    text-decoration: none;
    padding: 5px;
  }
  a:hover {
    color: gold;
  }
}
.nav-whole {
  margin: auto;
  width: 1200px;
}

.nav .nav-login {
  padding: 10px;
  height: 40px;
  color: #999999;
  font-size: 14px;
  line-height: 40px;
  text-align: right;
}
.nav .nav-main {
  color: #eeeeee;
  font-size: 20px;
  text-align: right;
  a {
    padding: 0 10px;
  }
}
.nav .nav-main a {
}
.logo {
  height: 150px;
  background-color: gold;
  background: url("../assets/logo.png") no-repeat 0% 0%;
}
</style>
