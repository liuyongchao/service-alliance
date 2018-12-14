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
                border
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
                border
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
                  label-class-name="juzhong"
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
                border
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
                border
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
                border
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
            <el-button type="success" style="padding:15px 70px 15px 35px" ><i class="el-icon-info" style="float:left;padding:10px 10px 0px 0px;font-size:18px"></i><div class="rukougreen">北京市企业技术中心</br>建设管理告知承诺制源文件申请入口</div></el-button>           
          </div>
          <div class="enterbtn">
            <el-button type="primary" style="padding:22px 20px; width:335px;" @click="selfAssessmentEnter"><i class="el-icon-info" style="float:left;padding:12px 12px 0px 0"></i><div class="rukougreen2">北京市企业技术中心资质企业自评通道入口</div></el-button>       
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
            "市级企业技术中心的认定每年组织一次，企业对照认定条件和要求，对以告知承诺方式自愿提交的申请。一、申请人应满足《北京市企业技术中心建设管理办法》（文号）条款号规定的基本条件；二、在满足基本条件后，申请人根据《北京市企业技术中心建设评价规范》（文号）条款号的要求进行自评打分，分数大于等于70分即符合企业技术中心申请条件（登陆北京企业技术中心创新服务联盟官网进行自评打分）。",
          column4: "送达"
        },
        {
          column0: "申请受理",
          column1: "受理",
          column2: "6月1日至6月30日",
          column3:
            "北京市经济和信息化局对申请材料进行审核，材料齐全的予以受理，作出行政服务决定。",
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
          column1: "公告",
          column2: "长期",
          column3: "对公示期间未收到举报的，北京市经济和信息化局在门户网站向社会公告。",
          column4: "批准" 
        },
        {
          column0: "颁证与送达",
          column1: "制证",
          column2: "9个工作日",
          column3: "结果名称",
          column4: "批准"
        },
        {
          column0: "颁证与送达",
          column1: "发证",
          column2: "1个工作日",
          column3: "关于公布年度北京市企业技术中心名单的通知"
        },
        {
          column0: "核查",
          column1: "决定",
          column2: "6个月内",
          column3:
            "北京市经济和信息化局在作出行政服务决定之日起6个月内，组织对申请人提交并承诺的有关事项内容进行核查，并从第二年起，每年5月1日至5月31日对申请人运行情况进行年度运行评价。"
        }
      ],
      materialsData: [
        {
          column0: "一、",
          column1: "《北京市企业技术中心建设评价申报书》"
        },
        {
          column0: "二、",
          column1: "《北京企业技术中资质申请告知承诺书》"
        },
        {
          column0: "三、",
          column1: "企业营业执照副本（复印件）"
        },
        {
          column0: "四、",
          column1: "经具有资质的会计师事务所审计的企业上一会计年度的财务报表（含资产负债表、利润及利润分配表、现金流量表）"
        },
        {
          column0: "五、",
          column1: "知识产权证书、标准文本、研发平台及检测机构等认证证书、科技奖励证书等其他创新绩效相关证明材料（复印件）"
        },
        {
          column0: "申请材料总要求",
          column1: "1、上述申请材料电子版需扫描原件在北京市经济和信息网线上平台上传；2、申请人以告知承诺方式申请资质，需按流程在线上平台提交申报材料，并完成《要求北京市企业技术中心资质申请告知承诺书》（以下称告知承诺书）电子签章。3、以上材料必须于申请人在线上平台提交告知承诺书时一并提交。"
          }
      ],
      sampleData: [
        {
          column0: "结果名称",
          column1: "关于公布年度北京市企业技术中心名单的通知"
        },
        {
          column0: "结果样本",
          column1: "关于公布年度北京市企业技术中心名单的通知结果样本.PDF"
        },
        {
          column0: "有效时间",
          column1: "1年"
        }
      ],
      setbasis1Data: [
        {
          column0: "制定机关",
          column1: "中华人民共和国国家发展和改革委员会、中华人民共和国科学技术部、中华人民共和国财政部、中华人民共和国海关总署、国家税务总局"
        },
        {
          column0: "依据名称",
          column1: "国家发展和改革委员会科学技术部财政部海关总署国家税务总局关于发布《国家企业技术中心认定管理办法》的决定"
        },
        {
          column0: "发布号令",
          column1: "中华人民共和国国家发展和改革委员会中华人民共和国科学技术部中华人民共和国财政部中华人民共和国海关总署国家税务总局令第34号			"
        },
        {
          column0: "法条内容",
          column1:
            "第二十七条 各地方政府主管部门可参考本办法，结合本地实际，在职责范围内依法制定相应政策，支持企业技术中心建设。"
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
            "第四条　市经济和信息化委员会（以下简称市经信委）会同发展改革、科技、财政、国税、地税等有关部门，联合成立本市企业技术中心认定工作指导小组（以下简称指导小组），负责统筹指导企业技术中心的发展，实施市级企业技术中心的认定、评价和管理，推荐申报国家级企业技术中心等工作。"
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
  height: 2700px;
  padding: 0 0 0 0 ;
  margin: 0 auto;
}
.el-step {
  width: 200px;
}
.el-table {
  padding: 20px 0 0;
}
.content {
  width: 100%;
  height: 600px;
  padding: 0 0 0 0 ;
  margin: 0 0 0 0 ;
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

  
.juzhong
{ 
  margin-left: -50px; 
}

}
.enterbtn {
  margin-top: 50px;
  width: 600px;
  float: left;
}



.rukougreen
{
//margin-top: 30px;
//padding-top: 50px;
//border: 15px;
line-height: 20px;
}

.rukougreen2
{
line-height: 20px;
margin-top: 7px;
}

</style>
