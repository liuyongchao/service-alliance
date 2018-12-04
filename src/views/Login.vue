<template>
  <div>

    <Head msg="Welcome to Your Vue.js App" />
    <div class="container">
      <div>会员登录</div>
      <div>
        <el-form
          ref="form"
          :model="loginForm"
          :rules="rules"
        >
          <el-form-item
            label-width="100px"
            label="用户名"
            prop="name"
          >
            <el-input
              v-model="loginForm.name"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item
            label-width="100px"
            label="密码"
            prop="password"
          >
            <el-input
              type="password"
              v-model="loginForm.password"
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
    <Footer msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      loginForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  },
  components: {
    Head,
    Footer
  }
};
</script>
<style lang="scss">
.container {
  width: 600px;
  height: 600px;
  margin: 0 auto;
  background-color: pink;
}
</style>
