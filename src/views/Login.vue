<template>
  <div class="container">
    <Head msg="Welcome to Your Vue.js App"/>
    <div class="content">
      <div class="login">
        <div class="title">会员登录</div>
        <div class="logininput">
          <div>
            <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
              <el-form-item prop="name">
                <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item prop="name">
                <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
              </el-form-item>
              <div class="loginbutton1">
                <el-form-item>
                  <el-button type="primary" @click="handleLogin" style="width:40%">登录</el-button>   
                  <el-button type="danger" @click="handleRegister" style="width:40%">注册</el-button>
                           
                </el-form-item>
              </div>
            </el-form>
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
        username: "",
        password: ""
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
    handleRegister(){
      this.$router.push("/register");
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("Login", this.loginForm)
            .then(() => {
              this.loading = false;
              console.log(123);
              let redirect = decodeURIComponent(
                this.$route.query.redirect || "/"
              );
              this.$router.push({
                //你需要接受路由的参数再跳转
                path: redirect
              });
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
  position: relative;
  min-height: 100%;
  box-sizing: border-box;
  .content {
    width: 1200px;
    height: 500px;
    margin: 50px auto;
    padding-top: 0px;
    .login {
      height: 300px;
      width: 800px;
      margin: 0 auto;
      //margin-left: 200px;

      padding-top: 150px;

      .title {
        line-height: 50px;
        font-size: 24px;
        margin-top: -100px;
        text-align: center;
        //margin-bottom: 0px;
      }
      .logininput {
        width: 300px;
        padding-left: 0px;
        //padding-right: 80px;
        margin: 0 auto;
      }
      .loginbutton {
        width: 200px;
        padding-left: 140px;
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
