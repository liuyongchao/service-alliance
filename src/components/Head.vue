<template>
<div>
  <div class="top">
    <div class="top-left"></div>
    <div class="top-right">      
      <el-button type="primary" icon="el-icon-search"><router-link tag="a" to="/">返回首页</router-link></el-button>
      <el-button type="primary" icon="el-icon-search" v-if="!token"><router-link tag="a" to="/login" >会员登录</router-link></el-button>
      <el-button type="primary" icon="el-icon-search" v-if="token" @click="logout"><router-link tag="a" to="/login" >会员退出</router-link></el-button>
    </div>
  </div>
          <ul class="nav">
            <li class="active"><router-link tag="a" to="/">动态要闻</router-link></li>
            <li><router-link tag="a" to="/selfassessment">企业自评</router-link></li>
            <li><router-link tag="a" to="/industrymap">产业地图</router-link></li>
            <li><router-link tag="a" to="/login">会员中心</router-link></li>
            <li><router-link tag="a" to="/aboutus">关于我们</router-link></li>
          </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    logout() {
      this.$store.dispatch("FedLogOut");
    }
  },
  computed: {
    ...mapGetters(["name", "authorities", "token"])
  }
};
</script>

<style lang="scss" scoped>
.top {
  height: 100px;
  width: 1200px;
  margin: 0 auto;
  .top-left {
    width: 316px;
    height: 100px;
    float: left;
    background: url(../assets/image/logo.png) no-repeat 0 20px;
  }
  .top-right {
    width: 147px;
    height: 100px;
    float: right;
    .el-button {
      margin: 5px 0 5px;
      color: red;
      border-radius: 0;
      border-color: #ebebeb;
      background-color: #ebebeb;
      a {
        color: #666666;
        text-decoration: none;
      }
    }
  }
}
.nav {
  height: 50px;
  width: 1200px;
  margin: 0 auto;
  background-color: #0088d3;
  li {
    float: left;
    padding: 0 20px;
  }
  li.active {
    background-color: #006da9;
  }
  a {
    color: #ffffff;
    font-size: 14px;
    line-height: 50px;
    text-decoration: none;
    padding: 5px;
  }
  a:hover {
    color: gold;
  }
}
</style>
