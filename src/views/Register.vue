<template>
  <div class="container">

    <Head msg="Welcome to Your Vue.js App" />
    <div class="content">
      <div class="title">会员注册</div>
      <div class="register-left">
        <div>
          <el-form
            :model="registerForm"
            :rules="rules"
          >
            <el-form-item
              label-width="100px"
              label="用户名"
              prop="name"
            >
              <el-input v-model="registerForm.username" @blur="registerOccupiedUsernameCheck" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="密码"
              prop="name"
            >
              <el-input v-model="registerForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="确认密码"
              prop="name"
            >
              <el-input v-model="registerForm.password1" placeholder="请再次输入密码"></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="联系人"
              prop="name"
            >
              <el-input v-model="registerForm.contact" placeholder="请输入联系人"></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="联系电话"
              prop="name"
            >
              <el-input v-model="registerForm.phoneNum" placeholder="请输入联系电话"></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="电子邮箱"
              prop="name"
            >
              <el-input v-model="registerForm.email" placeholder="请输入电子邮箱"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="register-right">
        <div>
          <el-form
            ref="form"
            :model="registerForm"
            :rules="rules"
          >
            <el-form-item
              label-width="100px"
              label="企业名称"
              prop="name"
            >
              <el-input v-model="registerForm.companyName" @blur="registerOccupiedCompanynameCheck" placeholder="请输入企业名称"></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="通讯地址"
              prop="name"
            >
              <el-input v-model="registerForm.address" placeholder="请输入通讯地址"></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="主营业务"
              prop="name"
            >
              <el-input v-model="registerForm.business" placeholder="请输入主营业务"></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="企业负责人"
              prop="name"
            >
              <el-input v-model="registerForm.head" placeholder="请输入企业负责人"></el-input>
            </el-form-item>





 <el-form-item
              label-width="100px"
              label="是否上市"
              prop="name"
            >
    <el-select v-model="registerForm.isListed" style="width:100%" placeholder="是否上市">
      <el-option label="是" value="true"></el-option>
      <el-option label="否" value="false"></el-option>
    </el-select>
  </el-form-item>
            <el-form-item
              label-width="100px"
              label="上市代码"
              prop="name"
            >
              <el-input v-model="registerForm.listedCode" placeholder="请输入上市代码"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button
                type="primary"
                @click="registerSubmit"
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
import {
  register,
  registerOccupiedUsername,
  registerOccupiedCompanyname
} from "@/api/login";
export default {
  data() {
    return {
      registerForm: {
        username: "",
        password: "",
        contact: "",
        phoneNum: "",
        email: "",
        companyName: "",
        address: "",
        business: "",
        head: "",
        isListed: "",
        listedCode: ""
      }
    };
  },
  methods: {
    registerOccupiedUsernameCheck() {
      registerOccupiedUsername(event.currentTarget.value).then(res => {
        if (res) {
          this.$alert("用户名已经被注册！", "温馨提醒", {
            confirmButtonText: "确定"
          }).then(() => {
            this.registerForm.username = "";
          });
        }
      });
    },
    registerOccupiedCompanynameCheck() {
      registerOccupiedCompanyname(event.currentTarget.value).then(res => {
        if (res) {
          this.$alert("企业已经被注册！", "温馨提醒", {
            confirmButtonText: "确定"
          }).then(() => {
            this.registerForm.companyName = "";
          });
        }
      });
    },
    registerSubmit() {
      register(this.registerForm).then(res => {
        this.$alert(res, "温馨提醒", {
          confirmButtonText: "确定"
        }).then(() => {
          this.$router.push("/login");
        });
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
