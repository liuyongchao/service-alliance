<template>
  <div>

    <Head msg="Welcome to Your Vue.js App" />
    <div class="container">
      <div class="left">
        <div>会员登录</div>
        <div>
          <el-form
            ref="form"
            :rules="rules"
          >
            <el-form-item
              label-width="100px"
              label="用户名"
              prop="name"
            >
              <el-input placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="密码"
              prop="password"
            >
              <el-input
                type="password"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>           
          </el-form>
        </div>
      </div>
      <div class="right">
        <div>会员注册</div>
        <div>
          <el-form
            ref="form"
            :rules="rules"
          >
            <el-form-item
              label-width="100px"
              label="用户名"
              prop="name"
            >
              <el-input placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="密码"
              prop="password"
            >
              <el-input
                type="password"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="onSubmit"
              >登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>

    <Footer msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "head",
  components: {
    Head,
    Footer
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 1200px;
  .left {
    width: 600px;
    background-color: aqua;
  }
  .right {
    width: 600px;
    background-color: purple;
  }
}
</style>
