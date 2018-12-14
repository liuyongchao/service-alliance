<template>
    <div class="map">
        <div class="maphead"></div>
<div class="mapcontent" :style="{fontSize: fontSize + 'px' }">
    <div class="maptophead">
      <div class="left"><h1>区域维度</h1></div>
      <div class="middle"></div>
      <div class="right"><h1>领域维度</h1></div>
    </div>
    <div class="mapcontenttop">
        <div class="left">
          <div class="button button1"  @click="regionIndustryAmountClick"><h1 :style="{color:colorBtn[0][0]}">数量</h1></div>
          <div class="button button2" @click="regionIndustryIncomeClick"><h1 :style="{color:colorBtn[0][1]}">营收</h1></div>
          <div class="button button3" @click="regionPatentAmountClick"><h1 :style="{color:colorBtn[0][2]}">专利</h1></div>
            <v-chart ref="regionBar" :options = "regionBar" :auto-resize = true style="width:100%;height:100%"></v-chart>    
          </div>
        <div class="middle">
    <baidu-map style="width:98.5%;height:98.5%;margin:0 auto;padding:3px"  :center="center" :zoom="zoom" @ready="handler" :mapStyle="mapStyle" :scroll-wheel-zoom="true">
      <bm-point-collection title="points.poi" :points="points" v-for="(points,index) in field_points" :key="index" shape="BMAP_POINT_SHAPE_CIRCLE" :color="pointColor[index]" size="BMAP_POINT_SIZE_NORMAL"  @click="clickHandler"></bm-point-collection>
      <bm-boundary name="北京市" :strokeWeight="3" strokeColor="#102749" :fillOpacity = 0.1></bm-boundary>    
      <bm-boundary name="北京市东城区" :strokeWeight="1" strokeColor="#020a17ff" fillColor="#102749" :fillOpacity = 0.2 ></bm-boundary>
      <bm-boundary name="北京市西城区" :strokeWeight="1" strokeColor="#020a17ff" fillColor="#102749" :fillOpacity = 0.2 ></bm-boundary>
      <bm-boundary name="北京市朝阳区" :strokeWeight="1" strokeColor="#020a17ff" fillColor="#102749" :fillOpacity = 0.2 ></bm-boundary>
      <bm-boundary name="北京市丰台区" :strokeWeight="1" strokeColor="#020a17ff" fillColor="#102749" :fillOpacity = 0.2></bm-boundary>
      <bm-boundary name="北京市石景山区" :strokeWeight="1" strokeColor="#020a17ff" fillColor="#102749" :fillOpacity = 0.2></bm-boundary>
      <bm-boundary name="北京市海淀区" :strokeWeight="1" strokeColor="#020a17ff" fillColor="#102749" :fillOpacity = 0.2></bm-boundary>
      <bm-boundary name="北京市门头沟区" :strokeWeight="1" strokeColor="#020a17ff" fillColor="#102749" :fillOpacity = 0.2></bm-boundary>
      <bm-boundary name="北京市房山区" :strokeWeight="1" strokeColor="#020a17ff" fillColor="#102749" :fillOpacity = 0.2></bm-boundary>
      <bm-boundary name="北京市通州区" :strokeWeight="1" strokeColor="#020a17ff" fillColor="#102749" :fillOpacity = 0.2></bm-boundary>
      <bm-boundary name="北京市顺义区" :strokeWeight="1" strokeColor="#020a17ff" fillColor="#102749" :fillOpacity = 0.2></bm-boundary>
      <bm-boundary name="北京市昌平区" :strokeWeight="1" strokeColor="#020a17ff" fillColor="#102749" :fillOpacity = 0.2></bm-boundary>
      <bm-boundary name="北京市大兴区" :strokeWeight="1" strokeColor="#020a17ff" fillColor="#102749" :fillOpacity = 0.2></bm-boundary>
      <bm-boundary name="北京市怀柔区" :strokeWeight="1" strokeColor="#020a17ff" fillColor="#102749" :fillOpacity = 0.2></bm-boundary>
      <bm-boundary name="北京市平谷区" :strokeWeight="1" strokeColor="#020a17ff" fillColor="#102749" :fillOpacity = 0.2></bm-boundary>
      <bm-boundary name="北京市密云区" :strokeWeight="1" strokeColor="#020a17ff" fillColor="#102749" :fillOpacity = 0.2></bm-boundary>
      <bm-boundary name="北京市延庆区" :strokeWeight="1" strokeColor="#020a17ff" fillColor="#102749" :fillOpacity = 0.2></bm-boundary>
      </baidu-map>
        </div>
        <div class="right">
          <div class="button button1"  @click="fieldIndustryAmountClick"><h1 :style="{color:colorBtn[1][0]}">数量</h1></div>
          <div class="button button2" @click="fieldIndustryIncomeClick"><h1 :style="{color:colorBtn[1][1]}">营收</h1></div>
          <div class="button button3" @click="fieldPatentAmountClick"><h1 :style="{color:colorBtn[1][2]}">专利</h1></div>
            <v-chart ref="fieldPie" :options = "fieldPie" :auto-resize = true style="width:100%;height:100%"></v-chart></div>
    </div>
    <div class="mapbottomhead">
      <div class="left1"><h1>三城一区</h1></div>
      <div class="left2"><h1>企业技术中心数量走势</h1></div>
      <div class="right1"><h1>企业所有制分布/上市情况</h1></div>
      <div class="right2"><h1>北京市企业技术中心发展情况</h1></div>
    </div>
    <div class="mapcontentbottom">
        <div class="left1">
          <div class="button button1"  @click="numberIndustryAmountClick"><h1 :style="{color:colorBtn[2][0]}">数量</h1></div>
          <div class="button button2" @click="numberIndustryIncomeClick"><h1 :style="{color:colorBtn[2][1]}">营收</h1></div>
          <div class="button button3" @click="numberPatentAmountClick"><h1 :style="{color:colorBtn[2][2]}">专利</h1></div>
          <v-chart ref="numberPie" :options = "numberPie" :auto-resize = true style="width:100%;height:100%"></v-chart></div>
        <div class="left2"><v-chart ref="numberLine" :options = "numberLine" :auto-resize = true style="width:100%;height:100%"></v-chart></div>
        <div class="right1"><v-chart ref="typeBar" class = "typeBar" :options = "typeBar" :auto-resize = true style="width:100%;height:100%"></v-chart></div>
        <div class="right2"><v-chart ref="revenuePie" :options = "revenuePie" :auto-resize = true style="width:100%;height:100%"></v-chart></div>
    </div>
</div>
    </div>
</template>
<script>
import ECharts from "vue-echarts/components/ECharts";
import "echarts/lib/component/title";
import "echarts/lib/component/polar";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import {
  mapIndustries,
  mapIndustryCity,
  mapIndustryDomain,
  mapIndustryIncome,
  mapIndustryRegion,
  mapListAmount,
  mapOwnershipAmount,
  mapYearAmount
} from "@/api/map";

export default {
  components: {
    "v-chart": ECharts
  },
  data() {
    let getDpr = (function getDpr() {
      var dpr = document.querySelector("html").scrollHeight;
      console.log(dpr);

      if (dpr >= 2490) {
        return 30;
      } else if (dpr < 2490 && dpr > 1024) {
        return 12;
      } else if (dpr <= 1024 && dpr > 876) {
        return 12;
      } else {
        return 12;
      }
    })();

    return {
      //区域分布情况
      colorBtn: [
        ["#7089cb", "#ffffff", "#ffffff"],
        ["#7089cb", "#ffffff", "#ffffff"],
        ["#7089cb", "#ffffff", "#ffffff"]
      ],
      regionData: [],
      fieldData: [],
      numberData: [],
      fontSize: getDpr + 2,
      regionBar: {
        title: {
          text: "区域分布情况",
          top: "3%",
          left: "center",
          textStyle: {
            color: "#ffffff",
            fontSize: getDpr
          }
        },
        grid: {
          top: "25%",
          bottom: "5%",
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          textStyle: {
            fontSize: getDpr
          }
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#7089cb"
            }
          },
          axisLabel: {
            interval: 0,
            rotate: 45, //倾斜度 -90 至 90 默认为0
            margin: 10,
            textStyle: {
              fontSize: getDpr,
              fontWeight: "bolder",
              color: "#7089cb"
            }
          },
          data: [
            "东城区",
            "西城区",
            "朝阳区",
            "丰台区",
            "石景山区",
            "海淀区",
            "门头沟区",
            "房山区",
            "通州区",
            "顺义区",
            "昌平区",
            "大兴区",
            "怀柔区",
            "平谷区",
            "密云区",
            "延庆区"
          ]
        },
        yAxis: {
          type: "value",
          // interval: 20,
          axisLine: {
            lineStyle: {
              color: "#7089cb"
            }
          },
          axisLabel: {
            fontWeight: "bold",
            fontSize: getDpr
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#252e4b", "#252e4b"]
            }
          }
        },
        series: [
          {
            data: [],
            type: "bar",
            itemStyle: {
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color: function(params) {
                  var colorList = [
                    "#249cf9",
                    "#fdb628",
                    "#67e0e3",
                    "#eb6f49",
                    "#249cf9",
                    "#fdb628",
                    "#67e0e3",
                    "#eb6f49",
                    "#249cf9",
                    "#fdb628",
                    "#67e0e3",
                    "#eb6f49",
                    "#249cf9",
                    "#fdb628",
                    "#67e0e3",
                    "#eb6f49"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            }
          }
        ]
      },
      //领域分布情况
      fieldPie: {
        title: {
          text: "领域分布情况",
          top: "3%",
          left: "center",
          textStyle: {
            color: "#ffffff",
            fontSize: getDpr
          }
        },
        grid: {
          top: "25%",
          containLabel: true
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          textStyle: {
            fontSize: getDpr
          }
        },
        legend: {
          //orient: "horizontal",
          orient: "vertical",
          right: "5%",
          top: "25%",
          textStyle: {
            color: "#7089cb",
            fontSize: getDpr
          },
          data: [
            "集成电路",
            "节能环保",
            "科技服务业",
            "软件和信息服务",
            "新材料",
            "新能源智能汽车",
            "新一代信息技术",
            "医药健康",
            "智能制造",
            "其他"
          ]
        },
        series: [
          {
            name: "领域分布情况",
            type: "pie",
            label: {
              normal: {
                fontSize: getDpr,
                fontWeight: "bold",
                formatter: "{c}\n",
                padding: [0, -40]
              }
            },
            labelLine: {
              length2: 50
            },
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#20fef7",
                    "#52afff",
                    "#cd7ad2",
                    "#ff7596",
                    "#ff7596 ",
                    "#ff9625",
                    "#104f88",
                    "#636363",
                    "#6eff68",
                    "#cd7ad2"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            },
            radius: ["25%", "35%"],
            center: ["35%", "50%"],
            avoidLabelOverlap: false,
            data: []
          }
        ]
      },
      //三城一区
      numberPie: {
        title: {
          text: "技术中心企业营收分布（单位：家）",
          top: "3%",
          left: "center",
          textStyle: {
            color: "#ffffff",
            fontSize: getDpr
          }
        },
        grid: {
          containLabel: true
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          textStyle: {
            fontSize: getDpr
          }
        },
        legend: [
          {
            orient: "horizontal",
            bottom: "15%",
            textStyle: {
              color: "#7089cb",
              fontSize: getDpr
            },
            data: ["北京经济技术开发区", "中关村科学城"]
          },
          {
            orient: "horizontal",
            bottom: "5%",
            textStyle: {
              color: "#7089cb",
              fontSize: getDpr
            },
            data: ["怀柔科学城", "未来科学城", "其他"]
          }
        ],

        series: [
          {
            name: "数量",
            type: "pie",
            label: {
              show: false,
              position: "center",
              formatter: "{a}"
            },
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = ["#fd9601", "#3c29d0", "#fd421c", "#0383de"];
                  return colorList[params.dataIndex];
                }
              }
            },
            radius: ["35%", "40%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            data: []
          }
        ]
      },
      //企业技术中心数量走势
      numberLine: {
        // title: {
        //   text: "企业技术中心数量走势",
        //   top: "3%",
        //   left: "center",
        //   textStyle: {
        //     color: "#ffffff",
        //     fontSize: getDpr
        //   }
        // },
        grid: {
          top: "25%",
          bottom: "5%",
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          textStyle: {
            fontSize: getDpr
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          textStyle: {
            color: "#7089cb"
          },
          data: ["新增数量", "增长率"]
        },
        xAxis: [
          {
            axisLine: {
              lineStyle: {
                color: "#7089cb"
              }
            },
            type: "category",
            axisLabel: {
              interval: 0,
              rotate: 45, //倾斜度 -90 至 90 默认为0
              margin: 10,
              textStyle: {
                fontWeight: "bolder",
                color: "#7089cb"
              }
            },
            data: [],
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "新增数量",
            //min: 0,
            //max: 250,
            interval: 100,
            axisLine: {
              lineStyle: {
                color: "#7089cb"
              }
            },
            nameTextStyle: {
              fontSize: getDpr,
              fontWeight: "bold"
            },
            axisLabel: {
              formatter: "{value}",
              fontWeight: "bold",
              fontSize: getDpr
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#252e4b", "#252e4b"]
              }
            }
          },
          {
            type: "value",
            name: "增长率%",
            min: 0,
            max: 100,
            interval: 20,
            nameTextStyle: {
              fontSize: getDpr,
              fontWeight: "bold"
            },
            axisLine: {
              lineStyle: {
                color: "#7089cb"
              }
            },
            axisLabel: {
              formatter: "{value}",
              fontWeight: "bold",
              fontSize: getDpr
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: ["#252e4b", "#252e4b"]
              }
            }
          }
        ],
        series: [
          {
            name: "技术中心总量",
            type: "line",
            symbol: "circle",
            symbolSize: 6,
            data: []
          },
          {
            name: "技术中心新增数量",
            type: "line",
            symbol: "circle",
            symbolSize: 6,
            yAxisIndex: 1,
            data: []
          }
        ]
      },
      //北京市企业技术中心企业类型分布
      typeBar: {
        title: {
          text: "企业技术中心数量走势",
          top: "3%",
          left: "center",
          textStyle: {
            color: "#ffffff",
            fontSize: getDpr
          }
        },
        grid: {
          top: "25%",
          bottom: "5%",
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          textStyle: {
            fontSize: getDpr
          }
        },
        xAxis: {
          type: "value",
          position: "top",
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#252e4b", "#252e4b"]
            }
          },
          axisLine: {
            lineStyle: {
              color: "#7089cb"
            }
          },
          axisLabel: {
            textStyle: {
              fontWeight: "bolder",
              color: "#7089cb",
              fontSize: getDpr
            }
          }
        },
        yAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#7089cb"
            }
          },
          axisLabel: {
            fontWeight: "bold",
            fontSize: getDpr
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: ["#252e4b", "#252e4b"]
            }
          },
          data: ["国有企业", "民营企业", "外资企业", "上市公司"]
        },
        series: [
          {
            name: "2012年",
            type: "bar",
            data: [193, 234, 310, 669],
            itemStyle: {
              normal: {
                barBorderRadius: [0, 5, 5, 0],
                color: function(params) {
                  //我这边就两个柱子，大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
                  var colorList = [
                    ["#86e9fc", "#07b8d9"],
                    ["#01ced3", "#11a5a9"],
                    ["#0281de", "#3d2ad1"],
                    ["#fe9b1a", "#fd431c"]
                  ];

                  var index = params.dataIndex;
                  if (params.dataIndex >= colorList.length) {
                    index = params.dataIndex - colorList.length;
                  }

                  return new ECharts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: colorList[index][0] },
                    { offset: 1, color: colorList[index][1] }
                  ]);
                }
              }
            }
          }
        ]
      },
      //北京市企业技术中心发展情况
      revenuePie: {
        title: {
          text: "技术中心企业营收分布（单位：家）",
          top: "3%",
          left: "center",
          textStyle: {
            color: "#ffffff",
            fontSize: getDpr
          }
        },
        grid: {
          top: "25%",
          containLabel: true
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          textStyle: {
            fontSize: getDpr
          }
        },
        legend: [
          {
            orient: "horizontal",
            bottom: "15%",
            textStyle: {
              color: "#7089cb",
              fontSize: getDpr
            },
            data: ["5亿以下", "5-10亿", "10-100亿"]
          },
          {
            orient: "horizontal",
            bottom: "5%",
            textStyle: {
              color: "#7089cb",
              fontSize: getDpr
            },
            data: ["100-500亿", "500亿以上"]
          }
        ],

        series: [
          {
            name: "访问来源",
            type: "pie",
            label: {
              normal: {
                fontSize: getDpr,
                fontWeight: "bold",
                formatter: "{c}\n",
                padding: [0, -25]
              }
            },
            labelLine: {
              length2: 30
            },
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#6eff68",
                    "#cd7ad2",
                    "#20fef7",
                    "#ff7596",
                    "#ee8d24"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            },
            radius: ["35%", "40%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            data: []
          }
        ]
      },
      field_points: [],
      pointColor: [
        "#dc2d32",
        "#db4425",
        "#eea640",
        "#fbed32",
        "#b4b750",
        "#40794e",
        "#44784a",
        "#527974",
        "#1d76d2",
        "#4261b4"
      ],
      center: { lng: 0, lat: 0 },
      zoom: 10,
      mapStyle: {
        styleJson: [
          {
            featureType: "water",
            elementType: "all",
            stylers: {
              color: "#021019"
            }
          },
          {
            featureType: "highway",
            elementType: "geometry.fill",
            stylers: {
              color: "#000000"
            }
          },
          {
            featureType: "highway",
            elementType: "geometry.stroke",
            stylers: {
              color: "#147a92ff",
              visibility: "off"
            }
          },
          {
            featureType: "arterial",
            elementType: "geometry.fill",
            stylers: {
              color: "#000000"
            }
          },
          {
            featureType: "arterial",
            elementType: "geometry.stroke",
            stylers: {
              color: "#0b3d51"
            }
          },
          {
            featureType: "local",
            elementType: "geometry",
            stylers: {
              color: "#000000"
            }
          },
          {
            featureType: "land",
            elementType: "all",
            stylers: {
              color: "#020a17ff"
            }
          },
          {
            featureType: "railway",
            elementType: "geometry.fill",
            stylers: {
              color: "#000000"
            }
          },
          {
            featureType: "railway",
            elementType: "geometry.stroke",
            stylers: {
              color: "#08304b"
            }
          },
          {
            featureType: "subway",
            elementType: "geometry",
            stylers: {
              lightness: -70
            }
          },
          {
            featureType: "building",
            elementType: "geometry.fill",
            stylers: {
              color: "#000000"
            }
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: {
              color: "#857f7f"
            }
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: {
              color: "#000000"
            }
          },
          {
            featureType: "building",
            elementType: "geometry",
            stylers: {
              color: "#022338"
            }
          },
          {
            featureType: "green",
            elementType: "geometry",
            stylers: {
              color: "#062032"
            }
          },
          {
            featureType: "boundary",
            elementType: "all",
            stylers: {
              color: "#1e1c1c"
            }
          },
          {
            featureType: "manmade",
            elementType: "geometry",
            stylers: {
              color: "#022338"
            }
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: {
              visibility: "off"
            }
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: {
              visibility: "off"
            }
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: {
              color: "#2da0c6",
              visibility: "on"
            }
          }
        ]
      }
    };
  },
  mounted() {
    let me = this;
    mapIndustries().then(res => {
      console.log(res);
      const resData = res;
      const field = [
        "集成电路",
        "节能环保",
        "科技服务业",
        "软件和信息服务",
        "新材料",
        "新能源智能汽车",
        "新一代信息技术",
        "医药健康",
        "智能制造",
        "其他"
      ];
      for (let k = 0; k < field.length; k++) {
        const field_point = []; //单个领域临时存储
        for (let i = 0; i < resData.length; i++) {
          if (resData[i].domain.name === field[k]) {
            const bd_lat_lng = this.gaoDeToBaidu(
              resData[i].longitude,
              resData[i].latitude
            );
            const position = {
              lat: bd_lat_lng[0],
              lng: bd_lat_lng[1],
              poi: resData[i]
            };

            field_point.push(position);
          }
        }
        this.field_points.push(field_point);
      }
    }),
      mapIndustryCity().then(res => {
        console.log("三城一区", res);
        const industryAmount = [];
        const industryIncome = [];
        const patentAmount = [];
        for (let i = 0; i < res.length; i++) {
          industryAmount.push({
            value: res[i].industryAmount,
            name: res[i].name
          });
          industryIncome.push({
            value: res[i].industryIncome,
            name: res[i].name
          });
          patentAmount.push({
            value: res[i].patentAmount,
            name: res[i].name
          });
        }
        this.numberData.push(industryAmount);
        this.numberData.push(industryIncome);
        this.numberData.push(patentAmount);
        this.numberPie.series[0].data = industryAmount;
      }),
      mapIndustryDomain().then(res => {
        console.log("领域维度", res);
        const industryAmount = [];
        const industryIncome = [];
        const patentAmount = [];
        for (let i = 0; i < res.length; i++) {
          industryAmount.push({
            value: res[i].industryAmount,
            name: res[i].name
          });
          industryIncome.push({
            value: res[i].industryIncome,
            name: res[i].name
          });
          patentAmount.push({
            value: res[i].patentAmount,
            name: res[i].name
          });
        }
        this.fieldData.push(industryAmount);
        this.fieldData.push(industryIncome);
        this.fieldData.push(patentAmount);
        this.fieldPie.series[0].data = industryAmount;
      }),
      mapIndustryRegion().then(res => {
        console.log("区域维度", res);
        const industryAmount = [];
        const industryIncome = [];
        const patentAmount = [];
        for (let i = 0; i < me.regionBar.xAxis.data.length; i++) {
          for (let k = 0; k < res.length; k++) {
            if (res[k].name === me.regionBar.xAxis.data[i]) {
              industryAmount.push(res[k].industryAmount);
              industryIncome.push(res[k].industryIncome);
              patentAmount.push(res[k].patentAmount);
            }
          }
        }
        this.regionData.push(industryAmount);
        this.regionData.push(industryIncome);
        this.regionData.push(patentAmount);
        this.regionBar.series[0].data = industryAmount;
      }),
      mapListAmount().then(res0 => {
        console.log("上市情况", res0);
        const industryAmount = [];
        industryAmount.push(res0[1].industryAmount);
        mapOwnershipAmount().then(res => {
          console.log("所有制", res);
          for (let i = 0; i < me.typeBar.yAxis.data.length; i++) {
            for (let k = 0; k < res.length; k++) {
              if (res[k].name === me.typeBar.yAxis.data[i]) {
                industryAmount.push(res[k].industryAmount);
              }
            }
          }
          this.typeBar.series[0].data = industryAmount;
        });
      }),
      mapYearAmount().then(res => {
        console.log("年度企业数量", res);
        const techCenterYear = [];
        const techCenterAmount = [];
        const techCenterNewAmount = [];
        for (let i = 0; i < res.length; i++) {
          techCenterYear.push(res[i].year);
          techCenterAmount.push(res[i].techCenterAmount);
          techCenterNewAmount.push(res[i].techCenterNewAmount);
        }
        this.numberLine.xAxis[0].data = techCenterYear;
        this.numberLine.series[0].data = techCenterAmount;
        this.numberLine.series[1].data = techCenterNewAmount;
      });
    mapIndustryIncome().then(res => {
      console.log("营收分布", res);
      const industryAmount = [];
      for (let i = 0; i < res.length; i++) {
        industryAmount.push({
          value: res[i].industryAmount,
          name: res[i].name
        });
      }
      this.revenuePie.series[0].data = industryAmount;
    });
  },
  methods: {
    regionIndustryAmountClick() {
      this.colorBtn[0].splice(0, 3, "#7089cb", "#ffffff", "#ffffff");
      console.log(this.colorBtn);

      this.regionBar.series[0].data = this.regionData[0];
    },
    regionIndustryIncomeClick() {
      this.colorBtn[0].splice(0, 3, "#ffffff", "#7089cb", "#ffffff");
      this.regionBar.series[0].data = this.regionData[1];
    },
    regionPatentAmountClick() {
      this.colorBtn[0].splice(0, 3, "#ffffff", "#ffffff", "#7089cb");
      this.regionBar.series[0].data = this.regionData[2];
    },
    fieldIndustryAmountClick() {
      this.colorBtn[1].splice(0, 3, "#7089cb", "#ffffff", "#ffffff");
      this.fieldPie.series[0].data = this.fieldData[0];
    },
    fieldIndustryIncomeClick() {
      this.colorBtn[1].splice(0, 3, "#ffffff", "#7089cb", "#ffffff");
      this.fieldPie.series[0].data = this.fieldData[1];
    },
    fieldPatentAmountClick() {
      this.colorBtn[1].splice(0, 3, "#ffffff", "#ffffff", "#7089cb");
      this.fieldPie.series[0].data = this.fieldData[2];
    },
    numberIndustryAmountClick() {
      this.colorBtn[2].splice(0, 3, "#7089cb", "#ffffff", "#ffffff");
      this.numberPie.series[0].data = this.numberData[0];
    },
    numberIndustryIncomeClick() {
      this.colorBtn[2].splice(0, 3, "#ffffff", "#7089cb", "#ffffff");
      this.numberPie.series[0].data = this.numberData[1];
    },
    numberPatentAmountClick() {
      this.colorBtn[2].splice(0, 3, "#ffffff", "#ffffff", "#7089cb");
      this.numberPie.series[0].data = this.numberData[2];
    },
    handler({ BMap, map }) {
      this.center.lng = 116.71575;
      this.center.lat = 40.255047;
      this.zoom = 9;
    },
    clickHandler(e) {
      //alert(`单击点的坐标为：${e.point.lng}, ${e.point.lat}`);
      console.log(e);
    },
    gaoDeToBaidu(gd_lng, gd_lat) {
      const PI = (3.14159265358979324 * 3000.0) / 180.0;
      const x = gd_lng;
      const y = gd_lat;
      const bd_lat_lng = [];
      const z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * PI);
      const theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * PI);
      bd_lat_lng[0] = z * Math.cos(theta) + 0.0065;
      bd_lat_lng[1] = z * Math.sin(theta) + 0.006;
      return bd_lat_lng;
    }
  }
};
</script>
<style lang="scss">
.map {
  width: 100%;
  height: 100%;
  background: url(../assets/image/background.jpg) no-repeat;
  background-size: 100% 100%;
}
.maphead {
  height: 10%;
}
.mapcontent {
  width: 95%;
  margin: 0 auto;
  height: 90%;
  .maptophead {
    position: relative;
    height: 5%;
    color: #0de8eb;
    text-align: left;
    padding: 1% 0;
    h1 {
      position: absolute;
      top: 40%;
      padding: 0 30px 0;
    }
    .left {
      height: 100%;
      width: 23%;
      float: left;
      margin-right: 2%;
      background: url(../assets/image/background-head.png) no-repeat;
      background-size: 100% 100%;
      // background: url(../assets/image/background-head.png) 0% 0% no-repeat;
    }
    .middle {
      height: 100%;
      width: 50%;
      float: left;
      // background: url(../assets/image/background-head.png) no-repeat;
      // background-size: 50% 100%;
    }
    .right {
      height: 100%;
      width: 23%;
      float: left;
      margin-left: 2%;
      background: url(../assets/image/background-head.png) no-repeat;
      background-size: 100% 100%;
    }
  }
  .mapbottomhead {
    position: relative;
    height: 5%;
    color: #0de8eb;
    text-align: left;
    padding: 1% 0;
    h1 {
      position: absolute;
      top: 40%;
      padding: 0 30px 0;
    }
    .left1 {
      height: 100%;
      width: 23%;
      float: left;
      margin-right: 2%;
      background: url(../assets/image/background-head.png) no-repeat;
      background-size: 100% 100%;
    }
    .left2 {
      height: 100%;
      width: 24%;
      float: left;
      margin-right: 2%;
      background: url(../assets/image/background-head.png) no-repeat;
      background-size: 100% 100%;
    }
    .right1 {
      height: 100%;
      width: 24%;
      float: left;
      background: url(../assets/image/background-head.png) no-repeat;
      background-size: 100% 100%;
    }
    .right2 {
      height: 100%;
      width: 23%;
      float: left;
      margin-left: 2%;
      background: url(../assets/image/background-head.png) no-repeat;
      background-size: 100% 100%;
    }
  }
  .button {
    position: absolute;
    color: #ffffff;
    cursor: pointer;
    z-index: 1;
    border: 1px solid #7089cb;
    h1 {
      padding-top: 6%;
    }
  }
  .button:hover {
    color: #7089cb;
  }
  .mapcontenttop {
    height: 50%;
    .left {
      height: 100%;
      width: 23%;
      float: left;
      margin-right: 2%;
      position: relative;
      background: url(../assets/image/map-top-left.png) no-repeat;
      background-size: 100% 100%;
      .button1 {
        height: 6%;
        width: 20%;
        top: 15%;
        left: 18%;
      }
      .button2 {
        height: 6%;
        width: 20%;
        top: 15%;
        left: 40%;
      }
      .button3 {
        height: 6%;
        width: 20%;
        top: 15%;
        right: 18%;
      }
    }
    .middle {
      height: 100%;
      width: 50%;
      float: left;
      color: #ffffff;
      background: url(../assets/image/map-top-middle.png) no-repeat;
      background-size: 100% 100%;
    }
    .right {
      height: 100%;
      width: 23%;
      float: left;
      margin-left: 2%;
      position: relative;
      background: url(../assets/image/map-top-right.png) no-repeat;
      background-size: 100% 100%;
      .button1 {
        height: 6%;
        width: 20%;
        top: 15%;
        left: 18%;
      }
      .button2 {
        height: 6%;
        width: 20%;
        top: 15%;
        left: 40%;
      }
      .button3 {
        height: 6%;
        width: 20%;
        top: 15%;
        right: 18%;
      }
    }
  }
  .mapcontentbottom {
    height: 30%;
    .left1 {
      height: 100%;
      width: 23%;
      float: left;
      margin-right: 2%;
      position: relative;
      background: url(../assets/image/map-bottom-left1.png) no-repeat;
      background-size: 100% 100%;
      .button1 {
        height: 10%;
        width: 20%;
        top: 15%;
        left: 18%;
      }
      .button2 {
        height: 10%;
        width: 20%;
        top: 15%;
        left: 40%;
      }
      .button3 {
        height: 10%;
        width: 20%;
        top: 15%;
        right: 18%;
      }
    }
    .left2 {
      height: 100%;
      width: 24%;
      float: left;
      margin-right: 2%;
      background: url(../assets/image/map-bottom-left2.png) no-repeat;
      background-size: 100% 100%;
    }
    .right1 {
      height: 100%;
      width: 24%;
      float: left;
      background: url(../assets/image/map-bottom-right1.png) no-repeat;
      background-size: 100% 100%;
    }
    .right2 {
      height: 100%;
      width: 23%;
      float: left;
      margin-left: 2%;
      background: url(../assets/image/map-bottom-right2.png) no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
