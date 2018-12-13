<template>
  <div>
    <div
      class="container"
      :style="{minHeight:minHeight + 'px'}"
    >

      <Head msg="Welcome to Your Vue.js App" />
      <div class="content">
        <div class="title">自评打分</div>
        <div class="tabletitle">创新条件</div>
        <!-- 所在行业 -->
        <el-table
          border
          :show-header="false"
          style="width: 100%"
          :header-cell-style="getRowClass"
          :data="SelfEvaluateForm.tradeId"
          :span-method="objectSpanMethod"
        >
          <el-table-column
            prop="column0"
            label=""
            width="200"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="column1"
            label=""
            width="600"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="column2"
            label=""
            align="center"
            width="240"
          >
            <template slot-scope="scope">
              <el-select
                v-model="scope.row.column2"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in trade"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </template>
          </el-table-column>
        </el-table>
        <!-- 创新经费 -->
        <el-table
          border
          :show-header="false"
          style="width: 100%"
          :header-cell-style="getRowClass"
          :data="SelfEvaluateForm.innovateFee"
          :span-method="objectSpanMethod"
        >
          <el-table-column
            prop="column0"
            label=""
            width="200"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="column1"
            label=""
            width="600"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="column2"
            label=""
            align="center"
            width="240"
          >
            <template slot-scope="scope">
              <el-input v-model="scope.row.column2"><template slot="append">{{scope.row.column3}}</template></el-input>
            </template>
          </el-table-column>
        </el-table>
        <!-- 创新人才 -->
        <el-table
          border
          :show-header="false"
          style="width: 100%"
          :header-cell-style="getRowClass"
          :data="SelfEvaluateForm.innovatePresion"
          :span-method="objectSpanMethod"
        >
          <el-table-column
            prop="column0"
            label=""
            width="200"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="column1"
            label=""
            width="600"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="column2"
            label=""
            align="center"
            width="240"
          >
            <template slot-scope="scope">
              <el-input v-model="scope.row.column2"><template slot="append">{{scope.row.column3}}</template></el-input>
            </template>
          </el-table-column>
        </el-table>

        
        <!-- 技术积累 -->
        <el-table
          border
          :show-header="false"
          style="width: 100%"
          :header-cell-style="getRowClass"
          :data="SelfEvaluateForm.technology"
          :span-method="objectSpanMethod"
        >
          <el-table-column
            prop="column0"
            label=""
            width="200"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="column1"
            label=""
            width="600"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="column2"
            label=""
            align="center"
            width="240"
          >
            <template slot-scope="scope">
              <el-input v-model="scope.row.column2"><template slot="append">{{scope.row.column3}}</template></el-input>
            </template>
          </el-table-column>
        </el-table>
        <!-- 创新平台 -->
        <el-table
          border
          :show-header="false"
          style="width: 100%"
          :header-cell-style="getRowClass"
          :data="SelfEvaluateForm.innovativePlatform"
          :span-method="objectSpanMethod"
        >
          <el-table-column
            prop="column0"
            label=""
            width="200"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="column1"
            label=""
            width="600"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="column2"
            label=""
            align="center"
            width="240"
          >
            <template slot-scope="scope">
              <el-input v-model="scope.row.column2"><template slot="append">{{scope.row.column3}}</template></el-input>
            </template>
          </el-table-column>
        </el-table>
        <div class="tabletitle">创新绩效</div>
        <!-- 技术产出 -->
        <el-table
          border
          :show-header="false"
          style="width: 100%"
          :header-cell-style="getRowClass"
          :data="SelfEvaluateForm.technologyOutput"
          :span-method="objectSpanMethod"
        >
          <el-table-column
            prop="column0"
            label=""
            width="200"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="column1"
            label=""
            width="600"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="column2"
            label=""
            align="center"
            width="240"
          >
            <template slot-scope="scope">
              <el-input v-model="scope.row.column2"><template slot="append">{{scope.row.column3}}</template></el-input>
            </template>
          </el-table-column>
        </el-table>

        <!-- 创新效益 -->
        <el-table
          border
          :show-header="false"
          style="width: 100%"
          :header-cell-style="getRowClass"
          :data="SelfEvaluateForm.innovationBenefit"
          :span-method="objectSpanMethod"
        >
          <el-table-column
            prop="column0"
            label=""
            width="200"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="column1"
            label=""
            width="600"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="column2"
            label=""
            align="center"
            width="240"
          >
            <template slot-scope="scope">
              <el-input v-model="scope.row.column2"><template slot="append">{{scope.row.column3}}</template></el-input>
            </template>
          </el-table-column>
        </el-table>
<div class="tabletitle">加分项</div>
<!-- 获国家自然科学、技术发明、 科技进步奖项目数 -->
<el-table
          border
          :show-header="false"
          style="width: 100%"
          :header-cell-style="getRowClass"
          :data="SelfEvaluateForm.nationalPrize"
          :span-method="objectSpanMethod"
        >
          <el-table-column
            prop="column0"
            label=""
            width="200"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="column1"
            label=""
            width="600"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="column2"
            label=""
            align="center"
            width="240"
          >
            <template slot-scope="scope">
              <el-input v-model="scope.row.column2"><template slot="append">{{scope.row.column3}}</template></el-input>
            </template>
          </el-table-column>
        </el-table>
<!-- 获省部级科技进步奖项目数 -->
<el-table
          border
          :show-header="false"
          style="width: 100%"
          :header-cell-style="getRowClass"
          :data="SelfEvaluateForm.provincialPrize"
          :span-method="objectSpanMethod"
        >
          <el-table-column
            prop="column0"
            label=""
            width="200"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="column1"
            label=""
            width="600"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="column2"
            label=""
            align="center"
            width="240"
          >
            <template slot-scope="scope">
              <el-input v-model="scope.row.column2"><template slot="append">{{scope.row.column3}}</template></el-input>
            </template>
          </el-table-column>
        </el-table>



        <div class="enterbtn">
          <el-button
            type="success"
            style="padding:15px"
            @click="SelfEvaluateSubmit"
          >确认并提交</el-button>
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
import { selfEvaluate, selfTrades } from "@/api/evaluate";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      minHeight: 0,
      trade: "", //evaluate/self/trades 接口获取
      scoreColor: "",
      SelfEvaluateForm: {
        tradeId: [
          {
            column1: "所在行业",
            column2: ""
          }
        ],
        innovateFee: [
          {
            column0: "创新经费",
            column1: "主营业务收入",
            column2: "",
            column3: "亿元"
          },
          {
            column0: "创新经费",
            column1: "研发经费支出占主营业务收入的比重",
            column2: "",
            column3: "%"
          },
          {
            column0: "创新经费",
            column1: "研发人员人均研发经费支出",
            column2: "",
            column3: "万元"
          }
        ],
        innovatePresion: [
          {
            column0: "创新人才",
            column1: "研发人员占企业职工总数的比重",
            column2: "",
            column3: "%"
          },
          {
            column0: "创新人才",
            column1: "技术中心拥有的高级专家和博士人数",
            column2: "",
            column3: "人"
          },
          {
            column0: "创新人才",
            column1: "来技术中心从事研发工作的外部专家人数",
            column2: "",
            column3: "人"
          }
        ],
        technology: [
          {
            column0: "技术积累",
            column1: "企业拥有全部有效发明专利数",
            column2: "",
            column3: "项"
          },
          {
            column0: "技术积累",
            column1: "企业万人有效专利拥有数",
            column2: "",
            column3: "个/万人"
          }
        ],
        innovativePlatform: [
          {
            column0: "创新平台",
            column1: "创业技术开发仪器设备原值",
            column2: "",
            column3: "万元"
          },
          {
            column0: "创新平台",
            column1: "通过国家（国际组织）认证的实验室和监测机构数",
            column2: "",
            column3: "个"
          }
        ],
        technologyOutput: [
          {
            column0: "技术产出",
            column1: "当年被受理的专利申请数",
            column2: "",
            column3: "项"
          },
          {
            column0: "技术产出",
            column1:
              "最近三年主持和参加制定的国际、国家和行业标准数（建筑业包含工法数）",
            column2: "",
            column3: "项"
          },
          {
            column0: "技术产出",
            column1:
              "最近三年主持和参加制定的国际、国家和行业标准数（建筑业包含工法数）",
            column2: "",
            column3: "项"
          }
        ],
        innovationBenefit: [
          {
            column0: "创新效益",
            column1: "当年企业总资产贡献率",
            column2: "",
            column3: "%"
          },
          {
            column0: "创新效益",
            column1: "新产品销售收入占主营业务收入的比重*",
            column2: "",
            column3: "%"
          },
          {
            column0: "创新效益",
            column1: "新产品销售利润占利润总额的比重*",
            column2: "",
            column3: "%"
          }
        ],
        nationalPrize: [
          {
            column0: "获国家自然科学、技术发明、 科技进步奖项目数",
            column1: "特等奖",
            column2: "",
            column3: "项"
          },
          {
            column0: "获国家自然科学、技术发明、 科技进步奖项目数",
            column1: "一等奖*",
            column2: "",
            column3: "项"
          },
          {
            column0: "获省部级科技进步奖项目数",
            column1: "二等奖*",
            column2: "",
            column3: "项"
          }
        ],
        provincialPrize: [
          {
            column0: "获省部级科技进步奖项目数",
            column1: "特等奖",
            column2: "",
            column3: "项"
          },
          {
            column0: "获省部级科技进步奖项目数",
            column1: "一等奖*",
            column2: "",
            column3: "项"
          },
          {
            column0: "获省部级科技进步奖项目数",
            column1: "二等奖*",
            column2: "",
            column3: "项"
          }
        ]
      }
    };
  },
  methods: {
    SelfEvaluateSubmit() {
      const SelfEvaluateForm = {
        basicId: this.basicId,
        basicSecret: this.basicSecret,
        tradeId: this.SelfEvaluateForm.tradeId[0].column2,
        income: this.SelfEvaluateForm.innovateFee[0].column2,
        fundsSpendIncomeProportion: this.SelfEvaluateForm.innovateFee[1]
          .column2,
        fundsSpend: this.SelfEvaluateForm.innovateFee[2].column2,
        developerProportion: this.SelfEvaluateForm.innovatePresion[0].column2,
        expertNum: this.SelfEvaluateForm.innovatePresion[1].column2,
        externalExpertNum: this.SelfEvaluateForm.innovatePresion[2].column2,
        patentNum: this.SelfEvaluateForm.technology[0].column2,
        patentNumThousand: this.SelfEvaluateForm.technology[1].column2,
        deviceValue: this.SelfEvaluateForm.innovativePlatform[0].column2,
        organizationNum: this.SelfEvaluateForm.innovativePlatform[1].column2,
        acceptPatentNum: this.SelfEvaluateForm.technologyOutput[0].column2,
        acceptInventPatentNum: this.SelfEvaluateForm.technologyOutput[1]
          .column2,
        standardNum: this.SelfEvaluateForm.technologyOutput[2].column2,
        contributionRate: this.SelfEvaluateForm.innovationBenefit[0].column2,
        incomeProportion: this.SelfEvaluateForm.innovationBenefit[1].column2,
        profitProportion: this.SelfEvaluateForm.innovationBenefit[2].column2,
        bigPrize0num: this.SelfEvaluateForm.nationalPrize[0].column2,
        bigPrize1num: this.SelfEvaluateForm.nationalPrize[1].column2,
        bigPrize2num: this.SelfEvaluateForm.nationalPrize[2].column2,
        smallPrize0num: this.SelfEvaluateForm.provincialPrize[0].column2,
        smallPrize1num: this.SelfEvaluateForm.provincialPrize[1].column2,
        smallPrize2num: this.SelfEvaluateForm.provincialPrize[2].column2
      };
      console.log(SelfEvaluateForm);
      selfEvaluate(SelfEvaluateForm).then(res => {
        console.log(res);
        if (res < 60) {
          this.scoreColor = "#f78989";
        } else if (res >= 60 && res < 75) {
          this.scoreColor = "#fd4e27";
        } else {
          this.scoreColor = "teal";
        }
        const h = this.$createElement;
        this.$msgbox({
          title: "消息",
          message: h("p", null, [
            h("span", null, "内容可以是 "),
            h(
              "i",
              { style: "color:" + this.scoreColor + ";font-size:18px;" },
              res.toFixed(2) + "分"
            )
          ]),
          showCancelButton: false,
          confirmButtonText: "确定"
        });
      });
    },
    SelfEvaluate() {
      this.$router.push({ path: "/SelfEvaluate" });
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 4 === 0) {
          return {
            rowspan: 4,
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
  computed: {
    ...mapGetters(["basicId", "basicSecret"])
  },
  mounted() {
    selfTrades().then(res => {
      this.trade = res;
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
  height: 2000px;
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
.tabletitle {
  height: 50px;
  line-height: 50px;
  color: #0088d2;
}
</style>
