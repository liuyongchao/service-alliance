<template>
  <div class="container">

    <Head msg="Welcome to Your Vue.js App" />
    <div class="content">
      <div class="title">会员注册</div>
      <div class="register-left">
        <div>
          <el-form
            ref="form"
            :rules="rules"
          >
            <el-form-item
              label-width="100px"
              label="联系人"
              prop="name"
            >
              <el-input placeholder="请输入联系人"></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="联系电话"
              prop="name"
            >
              <el-input placeholder="请输入联系电话"></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="电子邮箱"
              prop="name"
            >
              <el-input placeholder="请输入电子邮箱"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="register-right">
        <div>
          <el-form
            ref="form"
            :rules="rules"
          >
            <el-form-item
              label-width="100px"
              label="企业名称"
              prop="name"
            >
              <el-input placeholder="请输入企业名称"></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="通讯地址"
              prop="name"
            >
              <el-input placeholder="请输入通讯地址"></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="主营业务"
              prop="name"
            >
              <el-input placeholder="请输入主营业务"></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="企业负责人"
              prop="name"
            >
              <el-input placeholder="请输入企业负责人"></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="是否上市"
              prop="name"
            >
              <el-input placeholder="是否上市"></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="上市代码"
              prop="name"
            >
              <el-input placeholder="请输入上市代码"></el-input>
            </el-form-item>
            
            <el-form-item>
              <el-button
                type="primary"
                @click="onSubmit"
              >注册</el-button>
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
  components: {
    Head,
    Footer
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 100%;
  padding-bottom: 200px;
  box-sizing: border-box;
  .content {
    width: 1200px;
    height: 500px;
    margin: 50px auto;
    .title {
      height: 50px;
      line-height: 50px;
      font-size: 24px;
    }
    .register-left {
      width: 600px;
      height: 400px;
      float: left;
    }
    .register-right {
      width: 600px;
      height: 400px;
      float: left;
    }
  }
}
</style>
