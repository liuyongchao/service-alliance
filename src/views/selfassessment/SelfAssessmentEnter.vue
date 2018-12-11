<template>
    <div>
      <div class="container" :style="{minHeight:minHeight + 'px'}">
        <Head msg="Welcome to Your Vue.js App"/>
        <div class="content">
<div class="title">基础评价</div>
<div class="basicevaluate">
<h1>1.所在行业</h1> 
<el-radio-group v-model="BasicEvaluateForm.tradeId">
<el-row>
    <el-col :span="12"><el-radio v-model="radio" label="1">农业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="2">农副食品加工业</el-radio></el-col>
    <el-col :span="12"> <el-radio v-model="radio" label="3">食品制造业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="4">酒、饮料制造业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="5">纺织服装、服饰业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="6">家具制造业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="7">文教、美工、体育和娱乐用品制造业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="8">医药制造业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="9">非金属矿物制造业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="10">黑色金属冶炼和压延加工业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="11">有色金属冶炼和压延加工业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="12">金属制品业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="13">通用设备制造业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="14">专用设备制造业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="15">汽车制造业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="16">电气机械和器材制造业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="17">计算机、通信和其他电子设备制造业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="18">仪器仪表制造业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="19">建筑业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="20">软件和信息技术服务业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="21">专业技术服务业</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="22">其他（包括“交通运输、仓储和邮政业”、“文化、体育和娱乐业”等行业）</el-radio></el-col>
</el-row>
</el-radio-group>
</div>
<div class="basicevaluate">
<h1>2.所属行业不在现行有效的《北京市新增产业的禁止和限制目录》范围之内</h1> 
<el-radio-group v-model="BasicEvaluateForm.inScope">
<el-row>
    <el-col :span="12"><el-radio v-model="radio" label="1">是</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="2">否</el-radio></el-col>
</el-row>
</el-radio-group>
</div>
<div class="basicevaluate">
<h1>3.工艺和设备不属于现行有效的《北京市工业污染行业、生产工艺调整退出及设备淘汰目录》所列内容</h1> 
<el-radio-group v-model="BasicEvaluateForm.belongTo">
<el-row>
    <el-col :span="12"><el-radio v-model="radio" label="1">是</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="2">否</el-radio></el-col>
</el-row>
</el-radio-group>
</div>
<div class="basicevaluate">
<h1>4.企业满足<span style="color:red">(多选)</span></h1> 
<el-radio-group v-model="BasicEvaluateForm.companyMeet">
<el-row>
    <el-col :span="24"><el-radio v-model="radio" label="1">上一年度主营业务收入不低于2亿元（建筑业不低于15亿元）</el-radio></el-col>
    <el-col :span="24"><el-radio v-model="radio" label="2">新增投资2亿元以上并承担国家、本市重点项目</el-radio></el-col>
    <el-col :span="24"><el-radio v-model="radio" label="3">均不满足</el-radio></el-col>
</el-row>
</el-radio-group>
</div>
<div class="basicevaluate">
<h1>5.上一年度研究与试验发展经费支出不低于1000万元</h1> 
<el-radio-group v-model="BasicEvaluateForm.atLeast">
<el-row>
    <el-col :span="12"><el-radio v-model="radio" label="1">是</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="2">否</el-radio></el-col>
</el-row>
</el-radio-group>
</div>
<div class="basicevaluate">
<h1>6.拥有技术水平高、实践经验丰富的技术带头人，专职研究与试验发展人员数不少于60人（软件和专业技术服务业不低于80人）</h1> 
<el-radio-group v-model="BasicEvaluateForm.enoughPerson">
<el-row>
    <el-col :span="12"><el-radio v-model="radio" label="1">是</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="2">否</el-radio></el-col>
</el-row>
</el-radio-group>
</div>
<div class="basicevaluate">
<h1>7.上一年度拥有技术开发仪器设备原值不低于500万元（软件和专业技术服务业不低于300万元、建筑业不低于1000万元）</h1> 
<el-radio-group v-model="BasicEvaluateForm.enoughDeviceValue">
<el-row>
    <el-col :span="12"><el-radio v-model="radio" label="1">是</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="2">否</el-radio></el-col>
</el-row>
</el-radio-group>
</div>
<div class="basicevaluate">
<h1>8.近三年内获得的有效知识产权不少于10件，含专利（至少1件发明专利）、软件著作权、集成电路布图设计专有权</h1> 
<el-radio-group v-model="BasicEvaluateForm.enoughPatent">
<el-row>
    <el-col :span="12"><el-radio v-model="radio" label="1">是</el-radio></el-col>
    <el-col :span="12"><el-radio v-model="radio" label="2">否</el-radio></el-col>
</el-row>
</el-radio-group>
</div>       
<div class="basicevaluate">
<h1>9.受理截止日期前三年内</h1> 
<el-radio-group v-model="BasicEvaluateForm.illegal">
<el-row>
    <el-col :span="24"><el-radio v-model="radio" label="1">因违反海关法及有关法律、行政法规，构成走私行为，受到刑事、行政处罚，或因严重违反海关监管规定受到行政处罚</el-radio></el-col>
    <el-col :span="24"><el-radio v-model="radio" label="2">因违反税收征管法及有关法律、行政法规，构成偷税、骗取出口退税等严重税收违法行为</el-radio></el-col>
    <el-col :span="24"><el-radio v-model="radio" label="3">司法、行政机关认定的严重违法失信行为</el-radio></el-col>
    <el-col :span="24"><el-radio v-model="radio" label="4" >无以上情况</el-radio></el-col>
</el-row>
</el-radio-group>
</div>  
<div class="enterbtn">
            <el-button type="success" style="padding:15px" @click="SelfEvaluate">确认并提交</el-button>           
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
export default {
  data() {
    return {
      minHeight: 0,
      BasicEvaluateForm: {
        tradeId: "",
        inScope: "",
        belongTo: "",
        companyMeet: "",
        atLeast: "",
        enoughPerson: "",
        enoughDeviceValue: "",
        enoughPatent: "",
        illegal: ""
      }
    };
  },
  methods: {
    SelfEvaluate() {
      this.$router.push({ path: "/SelfEvaluate" });
    }
  },
  mounted() {
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
