<template>
    <div>
      <div class="container" :style="{minHeight:minHeight + 'px'}">
        <Head msg="Welcome to Your Vue.js App"/>
        <div class="content">
<div class="title">基础评价</div>
<!-- <div class="basicevaluate">
<h1>1.所在行业</h1>
<el-radio-group v-model="BasicEvaluateForm.tradeId">
<el-row>
    <el-col v-for="(item,index) in basicTrades" :key = "index" :span="12"><el-radio :label="item.id">{{item.name}}</el-radio></el-col>
</el-row>
</el-radio-group>
</div> -->
<div class="basicevaluate">
<h1>1.所属行业不在现行有效的《北京市新增产业的禁止和限制目录》范围之内</h1> 
<el-radio-group v-model="BasicEvaluateForm.inScope">
<el-row>
    <el-col :span="12"><el-radio  label="true">是</el-radio></el-col>
    <el-col :span="12"><el-radio  label="false">否</el-radio></el-col>
</el-row>
</el-radio-group>
</div>
<div class="basicevaluate">
<h1>2.工艺和设备不属于现行有效的《北京市工业污染行业、生产工艺调整退出及设备淘汰目录》所列内容</h1> 
<el-radio-group v-model="BasicEvaluateForm.belongTo">
<el-row>
    <el-col :span="12"><el-radio  label="true">是</el-radio></el-col>
    <el-col :span="12"><el-radio  label="false">否</el-radio></el-col>
</el-row>
</el-radio-group>
</div>
<div class="basicevaluate">
<h1>3.企业满足<span style="color:red">(可多选)</span></h1> 
<el-checkbox-group v-model="BasicEvaluateForm.companyMeet" @change="handleCheckcompanyMeetChange">
<el-row>
    <el-col v-for="(item,index) in basicCompanyMeet" :key="index" :span="24"><el-checkbox  :label="item.id">{{item.context}}</el-checkbox></el-col>
    <el-col :span="24"><el-checkbox  label="">均不满足</el-checkbox></el-col>
</el-row>
</el-checkbox-group>
</div>
<div class="basicevaluate">
<h1>4.上一年度研究与试验发展经费支出不低于1000万元</h1> 
<el-radio-group v-model="BasicEvaluateForm.atLeast">
<el-row>
    <el-col :span="12"><el-radio  label="true">是</el-radio></el-col>
    <el-col :span="12"><el-radio  label="false">否</el-radio></el-col>
</el-row>
</el-radio-group>
</div>
<div class="basicevaluate">
<h1>5.拥有技术水平高、实践经验丰富的技术带头人，专职研究与试验发展人员数不少于60人（软件和专业技术服务业不低于80人）</h1> 
<el-radio-group v-model="BasicEvaluateForm.enoughPerson">
<el-row>
    <el-col :span="12"><el-radio  label="true">是</el-radio></el-col>
    <el-col :span="12"><el-radio  label="false">否</el-radio></el-col>
</el-row>
</el-radio-group>
</div>
<div class="basicevaluate">
<h1>6.上一年度拥有技术开发仪器设备原值不低于500万元（软件和专业技术服务业不低于300万元、建筑业不低于1000万元）</h1> 
<el-radio-group v-model="BasicEvaluateForm.enoughDeviceValue">
<el-row>
    <el-col :span="12"><el-radio  label="true">是</el-radio></el-col>
    <el-col :span="12"><el-radio  label="false">否</el-radio></el-col>
</el-row>
</el-radio-group>
</div>
<div class="basicevaluate">
<h1>7.近三年内获得的有效知识产权不少于10件，含专利（至少1件发明专利）、软件著作权、集成电路布图设计专有权</h1> 
<el-radio-group v-model="BasicEvaluateForm.enoughPatent">
<el-row>
    <el-col :span="12"><el-radio  label= "true">是</el-radio></el-col>
    <el-col :span="12"><el-radio  label= "false">否</el-radio></el-col>
</el-row>
</el-radio-group>
</div>       
<div class="basicevaluate">
<h1>8.受理截止日期前三年内</h1> 
<el-checkbox-group v-model="BasicEvaluateForm.illegal" @change="handleCheckillegalChange">
<el-row>
    <el-col v-for="(item,index) in basicIllegal" :key="index" :span="24"><el-checkbox  :label="item.id">{{item.context}}</el-checkbox></el-col>   
    <el-col :span="24"><el-checkbox  label="">无以上情况</el-checkbox></el-col>
</el-row>
</el-checkbox-group>
</div>  
<div class="enterbtn">
            <el-button type="success" style="padding:15px" @click="basicEvaluateSubmit">确认并提交</el-button>           
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
import { basicTrades, basicCompanyMeet, basicIllegal } from "@/api/evaluate";
export default {
  data() {
    return {
      minHeight: 0,
      basicTrades: "",
      basicCompanyMeet: "",
      basicIllegal: "",
      BasicEvaluateForm: {
        inScope: "",
        belongTo: "",
        companyMeet: [],
        atLeast: "",
        enoughPerson: "",
        enoughDeviceValue: "",
        enoughPatent: "",
        illegal: []
      }
    };
  },
  methods: {
    //法律展现控制
    handleCheckillegalChange() {
      if (this.BasicEvaluateForm.illegal.includes("")) {
        this.BasicEvaluateForm.illegal = [""];
      }
    },
    //企业满足
    handleCheckcompanyMeetChange() {
      if (this.BasicEvaluateForm.companyMeet.includes("")) {
        this.BasicEvaluateForm.companyMeet = [""];
      }
    },
    basicEvaluateSubmit() {
      //均不满足、无以上情况处理
      if (this.BasicEvaluateForm.companyMeet.includes("")) {
        this.BasicEvaluateForm.companyMeet = [];
      }

      if (this.BasicEvaluateForm.illegal.includes("")) {
        this.BasicEvaluateForm.illegal = [];
      }
      //基础评价提交
      this.$store
        .dispatch("BasicEvaluate", this.BasicEvaluateForm)
        .then(res => {
          if (res.basicId != null && res.basicSecret != null) {
            this.$confirm(
              "恭喜您，基础评价达标，下一步进行企业自评打分!",
              "温馨提示",
              {
                confirmButtonText: "下一步",
                cancelButtonText: "取消",
                type: "success"
              }
            ).then(() => {
              this.$router.push({ path: "/SelfEvaluate" });
            });
          } else {
            this.$confirm(
              "抱歉，基础评价未达标，无法进行下一步企业自评打分!",
              "温馨提示",
              {
                showCancelButton: false,
                confirmButtonText: "确定",
                type: "warning"
              }
            );
          }
        });
    }
  },
  mounted() {
    //行业信息
    basicTrades().then(res => {
      this.basicTrades = res;
    });
    //满足条件
    basicCompanyMeet().then(res => {
      this.basicCompanyMeet = res;
    });
    //违法行为
    basicIllegal().then(res => {
      this.basicIllegal = res;
    });
    this.minHeight = document.documentElement.clientHeight - 200;
    var me = this;
    window.onresize = function() {
      me.minHeight = document.documentElement.clientHeight - 200;
    };
  },
  components: {
    Head,
    Footer
  }
};
</script>
<style lang="scss" scoped>
.content {
  width: 1200px;
  height: 1300px;
  margin: 0 auto;
  background-color: #f5f5f5;
}
.title {
  height: 50px;
  margin: 50px 0 0;
  line-height: 50px;
  color: #ffffff;
  background-color: #0088d2;
}
.basicevaluate {
  text-align: left;
  padding: 0 30px;
  h1 {
    padding: 30px 0;
    font-weight: 500;
  }
}
.enterbtn {
  margin-top: 50px;
}
</style>
