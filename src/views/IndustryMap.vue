<template>
  <div class="container">
    <div class="title">

    </div>

  <div class="map">
    <div class="map-top">
      <div class="map-top-left">
        <v-chart :options = "regionBar" :auto-resize = true style="width:100%;height:100%"></v-chart>
      </div>
      <baidu-map
        :center="center"
        :zoom="zoom"
        @ready="handler"
        class="map-top-center"
        :mapStyle="mapStyle"
        :scroll-wheel-zoom="true"
      >
      <bm-point-collection :points="points" v-for="(points,index) in field_points" :key="index" shape="BMAP_POINT_SHAPE_CIRCLE" :color="pointColor[index]" size="BMAP_POINT_SIZE_BIG"  @click="clickHandler"></bm-point-collection>
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
      <div class="map-top-right">
        <v-chart :options = "fieldPie" :auto-resize = true style="width:100%;height:100%"></v-chart>
      </div>
    </div>
    <div class="map-bottom">
      <div class="map-bottom-left1">
        <v-chart :options = "numberPie" :auto-resize = true style="width:100%;height:100%"></v-chart>
      </div>
      <div class="map-bottom-left2">
        <v-chart :options = "numberLine" :auto-resize = true style="width:100%;height:100%"></v-chart>
      </div>
      <div class="map-bottom-right1">
        <v-chart class = "typeBar" :options = "typeBar" :auto-resize = true style="width:100%;height:100%"></v-chart>
      </div>
      <div class="map-bottom-right2">
        <v-chart :options = "revenuePie" :auto-resize = true style="width:100%;height:100%"></v-chart>
      </div>
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

export default {
  components: {
    "v-chart": ECharts
  },
  data() {
    let data = [];

    for (let i = 0; i <= 360; i++) {
      let t = (i / 180) * Math.PI;
      let r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }
    return {
      //区域分布情况
      regionBar: {
        grid: {
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
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
          interval: 20,
          axisLine: {
            lineStyle: {
              color: "#7089cb"
            }
          },
          axisLabel: {
            fontWeight: "bold",
            fontSize: 14
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
            data: [
              120,
              200,
              150,
              80,
              70,
              110,
              130,
              120,
              200,
              150,
              80,
              70,
              110,
              130,
              55,
              20
            ],
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
        grid: {
          containLabel: true
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          right: "5%",
          top: "20%",
          textStyle: {
            color: "#7089cb"
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
            name: "访问来源",
            type: "pie",
            label: {
              normal: {
                fontSize: 16,
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
                    "#d52532",
                    "#e54918",
                    "#eb7616",
                    "#21fef9",
                    "#53b0fe",
                    "#cd79d1",
                    "#fc7498",
                    "#6dff67",
                    "#fe9625",
                    "#114e87",
                    "#626463"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            },
            radius: ["30%", "40%"],
            center: ["40%", "50%"],
            avoidLabelOverlap: false,
            data: [
              { value: 335, name: "集成电路" },
              { value: 1548, name: "节能环保" },
              { value: 1548, name: "科技服务业" },
              { value: 135, name: "软件和信息服务" },
              { value: 1548, name: "新材料" },
              { value: 310, name: "新能源智能汽车" },
              { value: 1548, name: "新一代信息技术" },
              { value: 234, name: "医药健康" },
              { value: 1548, name: "智能制造" },
              { value: 1548, name: "其他" }
            ]
          }
        ]
      },
      //三城一区
      numberPie: {
        title: [
          {
            text: "数量",
            left: "35.5%",
            top: "center",
            textStyle: {
              color: "#ffffff",
              align: "center",
              fontSize: 16,
              fontFamily: "Microsoft YaHei"
            }
          },
          {
            text: "营收",
            left: "65.5%",
            top: "center",
            textStyle: {
              color: "#ffffff",
              align: "center",
              fontSize: 16,
              fontFamily: "Microsoft YaHei"
            }
          }
        ],
        grid: {
          containLabel: true
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: [
          {
            orient: "horizontal",
            bottom: "15%",
            textStyle: {
              color: "#7089cb"
            },
            data: ["中关村科学城", "怀柔科学城"]
          },
          {
            orient: "horizontal",
            bottom: "5%",
            textStyle: {
              color: "#7089cb"
            },
            data: ["北京经济技术", "未来科学城"]
          }
        ],

        series: [
          {
            name: "营收",
            type: "pie",
            label: {
              show: false,
              position: "center",
              formatter: "{a}"
            },
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = ["#fd421c", "#3c29d0", "#fd9601", "#0383de"];
                  return colorList[params.dataIndex];
                }
              }
            },
            radius: ["30%", "40%"],
            center: ["40%", "50%"],
            avoidLabelOverlap: false,
            data: [
              { value: 335, name: "中关村科学城" },
              { value: 310, name: "怀柔科学城" },
              { value: 234, name: "北京经济技术" },
              { value: 135, name: "100亿-500亿" },
              { value: 1548, name: "未来科学城" }
            ]
          },
          {
            name: "营收",
            type: "pie",
            label: {
              show: false,
              position: "center",
              formatter: "{a}"
            },
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = ["#fd421c", "#3c29d0", "#fd9601", "#0383de"];
                  return colorList[params.dataIndex];
                }
              }
            },
            radius: ["30%", "40%"],
            center: ["70%", "50%"],
            avoidLabelOverlap: false,
            data: [
              { value: 335, name: "中关村科学城" },
              { value: 310, name: "怀柔科学城" },
              { value: 234, name: "北京经济技术" },
              { value: 135, name: "100亿-500亿" },
              { value: 1548, name: "未来科学城" }
            ]
          }
        ]
      },
      //企业技术中心数量走势
      numberLine: {
        grid: {
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
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
            data: [
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016",
              "2017",
              "2018"
            ],
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
              fontSize: 14,
              fontWeight: "bold"
            },
            axisLabel: {
              formatter: "{value}",
              fontWeight: "bold",
              fontSize: 14
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
              fontSize: 14,
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
              fontSize: 14
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
            name: "新增数量",
            type: "line",
            symbol: "circle",
            symbolSize: 6,
            data: [
              61,
              79,
              106,
              132,
              179,
              223,
              303,
              340,
              381,
              446,
              499,
              541,
              609,
              672
            ]
          },
          {
            name: "增长率",
            type: "line",
            symbol: "circle",
            symbolSize: 6,
            yAxisIndex: 1,
            data: [
              0,
              17.72,
              28.3,
              28.03,
              34.08,
              24.22,
              28.05,
              12.06,
              12.34,
              17.49,
              12.63,
              10.17,
              12.32,
              11.01
            ]
          }
        ]
      },
      //企业所有制分布/上市情况
      typeBar: {
        title: {
          text: "北京市企业技术中心企业类型分布",
          left: "center",
          top: "8%",
          textStyle: {
            color: "#ffffff",
            fontSize: 14
          }
        },
        grid: {
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
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
              color: "#7089cb"
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
            fontSize: 14
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
        grid: {
          containLabel: true
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: [
          {
            orient: "horizontal",
            bottom: "15%",
            textStyle: {
              color: "#7089cb"
            },
            data: ["一亿以下", "10亿-100亿", "5亿-10亿"]
          },
          {
            orient: "horizontal",
            bottom: "5%",
            textStyle: {
              color: "#7089cb"
            },
            data: ["100亿-500亿", "500亿以上"]
          }
        ],

        series: [
          {
            name: "访问来源",
            type: "pie",
            label: {
              normal: {
                fontSize: 16,
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
                    "#d52532",
                    "#e54918",
                    "#eb7616",
                    "#21fef9",
                    "#53b0fe",
                    "#cd79d1",
                    "#fc7498",
                    "#6dff67",
                    "#fe9625",
                    "#114e87",
                    "#626463"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            },
            radius: ["30%", "40%"],
            center: ["40%", "50%"],
            avoidLabelOverlap: false,
            data: [
              { value: 335, name: "一亿以下" },
              { value: 310, name: "10亿-100亿" },
              { value: 234, name: "5亿-10亿" },
              { value: 135, name: "100亿-500亿" },
              { value: 1548, name: "500亿以上" }
            ]
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
  created() {
    // 插入 10 个随机点
    this.addPoints();
  },
  methods: {
    handler({ BMap, map }) {
      this.center.lng = 116.71575;
      this.center.lat = 40.255047;
      this.zoom = 9;
    },
    clickHandler(e) {
      alert(`单击点的坐标为：${e.point.lng}, ${e.point.lat}`);
    },
    addPoints() {
      this.axios.get("/service-alliance/mappoint").then(response => {
        const resData = response.data.data;
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
            if (resData[i].field === field[k]) {
              const bd_lat_lng = this.gaoDeToBaidu(
                resData[i].lng,
                resData[i].lat
              );
              const position = {
                lat: bd_lat_lng[1],
                lng: bd_lat_lng[0]
              };
              field_point.push(position);
            }
          }
          this.field_points.push(field_point);
        }
      });
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

<style lang="scss" scoped>
.container {
  background: url(../assets/image/background.jpg) no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: cover;
  .title {
    width: 407px;
    height: 20%;
    margin: 0 auto;
    background: url(../assets/image/title.png) no-repeat 0% 50%;
  }
  .map {
    height: 80%;
    .map-top {
      height: 60%;
      .map-top-left {
        height: 100%;
        width: 30%;
        float: left;
        background: url("../assets/image/map-top-left.png") center no-repeat;
      }
      .map-top-center {
        height: 100%;
        width: 40%;
        float: left;
        background: url("../assets/image/map-top-center.png") center no-repeat;
      }
      .map-top-right {
        height: 100%;
        width: 30%;
        float: left;
        background: url("../assets/image/map-top-right.png") center no-repeat;
      }
    }
    .map-bottom {
      height: 40%;
      .map-bottom-left1 {
        height: 100%;
        width: 25%;
        float: left;
        background: url("../assets/image/map-bottom-left1.png") center no-repeat;
      }
      .map-bottom-left2 {
        height: 100%;
        width: 25%;
        float: left;
        background: url("../assets/image/map-bottom-left2.png") center no-repeat;
      }
      .map-bottom-right1 {
        height: 100%;
        width: 25%;
        float: left;
        background: url(../assets/image/map-bottom-right1.png) center center
          no-repeat;
      }
      .map-bottom-right2 {
        height: 100%;
        width: 25%;
        float: left;
        background: url(../assets/image/map-bottom-right1.png) center center
          no-repeat;
      }
    }
  }
}
</style>
