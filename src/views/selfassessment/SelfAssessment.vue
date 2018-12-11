<template>
  <div>
    <div
      class="container"
      :style="{minHeight:minHeight + 'px'}"
    >

      <Head />
      <div class="main">
        <div class="content">
          <div style ="height:80px;line-height:80px;font-size:24px;">北京市企业技术中心建设管理告知承诺制相关告知</div>
          <!-- 办理流程 -->
          <div class="process">
            <div class="box">
              <p>一、办理流程</p></div>
              <el-table
                border
                style="width: 100%"
                :header-cell-style="getRowClass"
                :data="processData"
                :span-method="objectSpanMethod"
              >
                <el-table-column
                  prop="column0"
                  label="办理环节"
                  width="180"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="column1"
                  label="办理步骤"
                  width="180"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="column2"
                  label="办理时限"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="column3"
                  label="审查标准"
                  width="320"
                  header-align="center"                
                >
                </el-table-column>
                <el-table-column
                  prop="column4"
                  label="办理结果"
                  width="120"
                  align="center"
                >
                </el-table-column>
              </el-table>          
          </div>
          <!-- 二、申请材料 -->
<div class="materials">
            <div class="box">
              <p>二、申请材料</p></div>
              <el-table
                style="width: 100%"
                :header-cell-style="getRowClass"
                :data="materialsData"
              >
                <el-table-column
                  prop="column0"
                  label="序号"
                  width="180"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="column1"
                  label="材料名称"
                  align="center"
                >
                </el-table-column>             
              </el-table>            
          </div>
           <!-- 结果名称及样本 -->
          <div class="sample">
            <div class="box">
              <p>三、结果名称及样本</p></div>
              <el-table
                style="width: 100%"
                :header-cell-style="getRowClass"
                :data="sampleData"
              >
                <el-table-column
                  prop="column0"
                  width="180"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="column1"
                  label="关于公布年度北京市企业技术中心名单的通知"
                  align="center"
                >
                </el-table-column>             
              </el-table>            
          </div>
          <!-- 设定依据 -->
          <div class="setbasis1">
            <div class="box">
              <p>四、设定依据</p></div>
              <el-table
                style="width: 100%"
                :header-cell-style="getRowClass"
                :data="setbasis1Data"
              >
                <el-table-column
                  prop="column0"
                  width="100"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="column1"
                  label="【部门规章】国家发展和改革委员会科学技术部财政部海关总署国家税务总局关于发布《国家企业技术中心认定管理办法》的决定"
                  align="center"
                >
                </el-table-column>             
              </el-table>           
          </div>
          <!-- 设定依据 -->
          <div class="setbasis2">
              <el-table
                style="width: 100%"
                :header-cell-style="getRowClass"
                :data="setbasis2Data"
              >
                <el-table-column
                  prop="column0"
                  width="100"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="column1"
                  label="【部门规章】国家发展和改革委员会科学技术部财政部海关总署国家税务总局关于发布《国家企业技术中心认定管理办法》的决定"
                  align="center"
                >
                </el-table-column>             
              </el-table>            
          </div>
          <!-- 收费标准 -->
          <div class="fees">
            <div class="box">
              <p>五、收费标准</p></div>
              <el-table
                style="width: 100%"
                :header-cell-style="getRowClass"
                :data="feesData"
              >
                <el-table-column
                  prop="column0"
                  width="100"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="column1"
                  label="收费标准"
                  align="center"
                >
                </el-table-column>             
              </el-table>            
          </div>
          <div class="enterbtn">
            <el-button type="success" style="padding:15px 70px 15px 35px" ><i class="el-icon-info" style="float:left;padding:10px 10px 0 0;font-size:18px"></i>北京市企业技术中心</br>建设管理告知承诺制源文件申请入口</el-button>           
          </div>
          <div class="enterbtn">
            <el-button type="primary" style="padding:22px 20px" @click="selfAssessmentEnter"><i class="el-icon-info" style="padding:0 10px 0 0"></i>北京市企业技术中心资质企业自评通道入口</el-button>       
          </div>
          
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
  data() {
    return {
      minHeight: 0,
      processData: [
        {
          column0: "申请受理",
          column1: "申请",
          column2: "5月1日至5月31日",
          column3:
            "申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理",
          column4: "送达"
        },
        {
          column0: "申请受理",
          column1: "申请",
          column2: "5月1日至5月31日",
          column3:
            "申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理申请受理",
          column4: "接受"
        },
        {
          column0: "公示公告",
          column1: "公示（受理接过通过北京市经济和信息化局网站公示）",
          column2: "公示期为10个工作日",
          column3: "接受受社会各界监督",
          column4: "批准"
        },
        {
          column0: "公示公告",
          column1: "公示（受理接过通过北京市经济和信息化局网站公示）",
          column2: "公示期为10个工作日",
          column3: "接受受社会各界监督",
          column4: "批准"
        },
        {
          column0: "颁证与送达",
          column1: "颁证",
          column2: "9个工作日",
          column3: "结果名称",
          column4: "批准"
        },
        {
          column0: "颁证与送达",
          column1: "发证（窗口领取）",
          column2: "1个工作日",
          column3: "关于公布年度北京市企业技术中心名单的通知"
        },
        {
          column0: "核查",
          column1: "决定",
          column2: "6个月内",
          column3:
            "关于公布年度北京市企业技术中心名单的通知关于公布年度北京市企业技术中心名单的通知关于公布年度北京市企业技术中心名单的通知"
        }
      ],
      materialsData: [
        {
          column0: "一、",
          column1: "《北京市企业技术中心建设评价申报书》"
        },
        {
          column0: "二、",
          column1: "《北京市企业技术中心建设评价申报书》"
        },
        {
          column0: "三、",
          column1: "《北京市企业技术中心建设评价申报书》"
        },
        {
          column0: "四、",
          column1: "《北京市企业技术中心建设评价申报书》"
        },
        {
          column0: "五、",
          column1: "《北京市企业技术中心建设评价申报书》"
        },
        {
          column0: "申请材料总要求",
          column1: "《北京市企业技术中心建设评价申报书》"
        }
      ],
      sampleData: [
        {
          column0: "结果名称",
          column1: "关于公布年度北京市企业技术中心名单的通知"
        },
        {
          column0: "结果样本",
          column1: "关于公布年度北京市企业技术中心名单的通知结果样本PDF"
        },
        {
          column0: "有效时间",
          column1: "1年"
        }
      ],
      setbasis1Data: [
        {
          column0: "制定机关",
          column1: "北京市经济和信息化局"
        },
        {
          column0: "依据名称",
          column1: "北京市企业技术中心认定评价管理办法"
        },
        {
          column0: "发布号令",
          column1: "京经信委发（文号）号"
        },
        {
          column0: "法条内容",
          column1:
            "第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条"
        }
      ],
      setbasis2Data: [
        {
          column0: "制定机关",
          column1: "北京市经济和信息化局"
        },
        {
          column0: "依据名称",
          column1: "北京市企业技术中心认定评价管理办法"
        },
        {
          column0: "发布号令",
          column1: "京经信委发（文号）号"
        },
        {
          column0: "法条内容",
          column1:
            "第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条第四条"
        }
      ],
      feesData: [
        {
          column0: "是否收费",
          column1: "不收费"
        }
      ]
    };
  },
  mounted() {
    this.minHeight = document.documentElement.clientHeight - 200;
    var me = this;
    window.onresize = function() {
      me.minHeight = document.documentElement.clientHeight - 200;
    };
  },
  methods: {
    selfAssessmentEnter() {
      this.$router.push({ path: "/selfassessmententer" });
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex == 0) {
        return "background:#EFEFEF;color:#333333";
      } else {
        return "";
      }
    }
  },
  components: {
    Head,
    Footer
  }
};
</script>
<style lang="scss" scoped>
.main {
  width: 1200px;
  height: 2600px;
  margin: 0 auto;
}
.el-step {
  width: 200px;
}
.el-table {
  padding: 20px 0 0;
}
.content {
  width: 1200px;
  height: 600px;
  float: left;
}
.box {
  padding: 30px 0 0;
  border-bottom: 1px solid #0088d3;
  p {
    padding: 0 10px;
    text-align: center;
    height: 46px;
    width: 100px;
    line-height: 46px;
    color: #ffffff;
    background-color: #0088d3;
  }
}
.enterbtn {
  margin-top: 50px;
  width: 600px;
  float: left;
}
</style>
