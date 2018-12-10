<template>
  <div class="container">
    <Head msg="Welcome to Your Vue.js App"/>
    <div class="content">
      <div class="login">
        <div class="title">会员登录</div>
        <div class="logininput">
          <div>
            <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
              <el-form-item label-width="100px" label prop="name">
                <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label-width="100px" label prop="name">
                <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
              </el-form-item>
              <div class="loginbutton">
                <el-form-item>
                  <el-button type="primary" @click.native.prevent="handleLogin">登录</el-button>
                </el-form-item>
              </div>
            </el-form>

            <div class="loginbottom" style="display: block;">
              <a href="#" class="link" id="forgetpwd" target="_blank">忘了密码？</a>
              <span class="dotted">|</span>
              <a href="#" class="link" target="_blank">注册新帐号</a>
              <span class="dotted">|</span>
              <a class="link" id="feedback_web" href="#" target="_blank">联系我们</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
import { isvalidUsername } from "@/utils/validate";
export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error("密码不能小于3位"));
      } else {
        callback();
      }
    };
    return {
      name: "login",
      loginForm: {
        username: "admin",
        password: "111111"
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [{ required: true, trigger: "blur", validator: validatePass }]
      },
      isClose: true,
      loading: false,
      pwdType: "password"
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("Login", this.loginForm)
            .then(() => {
              this.loading = false;
              console.log(123);
              this.$router.push({ path: "/" });
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
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
    padding-top: 0px;
    .login {
      height: 300px;
      //background-color: #d13838;
      width: 800px;
      margin-left: 200px;

      padding-top: 150px;

      .title {
        //height: 60px;
        line-height: 50px;
        font-size: 24px;
        margin-top: -100px;
        margin-bottom: 0px;
      }
      .logininput {
        width: 400px;
        //height: 400px;
        padding-left: 0px;
        padding-right: 80px;
        margin: 0 auto;
      }
      .loginbutton {
        width: 200px;
        padding-left: 140px;
        //margin: auto auto;
      }
      .loginbottom {
        font-size: 14px;
        padding-left: 80px;
        .link {
          color: #225592;
        }
      }
    }
  }
}
</style>
