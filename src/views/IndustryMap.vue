<template>
  <div class="map">
    <div class="map-up">
      <baidu-map
        :center="center"
        :zoom="zoom"
        @ready="handler"
        class="map-left"
        :mapStyle="mapStyle"
        :scroll-wheel-zoom="true"
      >
      <bm-boundary name="北京市" :strokeWeight="1" strokeColor="blue" fillOpacity="0.1"></bm-boundary>
      <bm-boundary name="北京市东城区" :strokeWeight="1" strokeColor="blue" fillColor="red" fillOpacity="0.2"></bm-boundary>
      <bm-boundary name="北京市西城区" :strokeWeight="1" strokeColor="blue" fillColor="red" fillOpacity="0.2"></bm-boundary>
      <bm-boundary name="北京市朝阳区" :strokeWeight="1" strokeColor="blue" fillColor="red" fillOpacity="0.2"></bm-boundary>
      <bm-boundary name="北京市丰台区" :strokeWeight="1" strokeColor="blue" fillColor="red" fillOpacity="0.2"></bm-boundary>
      <bm-boundary name="北京市石景山区" :strokeWeight="1" strokeColor="blue" fillColor="red" fillOpacity="0.2"></bm-boundary>
      <bm-boundary name="北京市海淀区" :strokeWeight="1" strokeColor="blue" fillColor="red" fillOpacity="0.2"></bm-boundary>
      <bm-boundary name="北京市门头沟区" :strokeWeight="1" strokeColor="blue" fillColor="red" fillOpacity="0.2"></bm-boundary>
      <bm-boundary name="北京市房山区" :strokeWeight="1" strokeColor="blue" fillColor="red" fillOpacity="0.2"></bm-boundary>
      <bm-boundary name="北京市通州区" :strokeWeight="1" strokeColor="blue" fillColor="red" fillOpacity="0.2"></bm-boundary>
      <bm-boundary name="北京市顺义区" :strokeWeight="1" strokeColor="blue" fillColor="red" fillOpacity="0.2"></bm-boundary>
      <bm-boundary name="北京市昌平区" :strokeWeight="1" strokeColor="blue" fillColor="red" fillOpacity="0.2"></bm-boundary>
      <bm-boundary name="北京市大兴区" :strokeWeight="1" strokeColor="blue" fillColor="red" fillOpacity="0.2"></bm-boundary>
      <bm-boundary name="北京市怀柔区" :strokeWeight="1" strokeColor="blue" fillColor="red" fillOpacity="0.2"></bm-boundary>
      <bm-boundary name="北京市平谷区" :strokeWeight="1" strokeColor="blue" fillColor="red" fillOpacity="0.2"></bm-boundary>
      <bm-boundary name="北京市密云区" :strokeWeight="1" strokeColor="blue" fillColor="red" fillOpacity="0.2"></bm-boundary>
      <bm-boundary name="北京市延庆区" :strokeWeight="1" strokeColor="blue" fillColor="red" fillOpacity="0.2"></bm-boundary>
      </baidu-map>
      <div class="map-right"></div>
    </div>
    <div class="map-down">
      <div class="map-left"></div>
      <div class="map-center"></div>
      <div class="map-right"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 10,
      mapStyle: {
        styleJson: [
          {
            featureType: "land",
            elementType: "geometry",
            stylers: {
              color: "#212121"
            }
          },
          {
            featureType: "building",
            elementType: "geometry",
            stylers: {
              color: "#2b2b2b"
            }
          },
          {
            featureType: "highway",
            elementType: "all",
            stylers: {
              lightness: -42,
              saturation: -91,
              visibility: "off"
            }
          },
          {
            featureType: "arterial",
            elementType: "geometry",
            stylers: {
              lightness: -77,
              saturation: -94
            }
          },
          {
            featureType: "green",
            elementType: "geometry",
            stylers: {
              color: "#1b1b1b"
            }
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: {
              color: "#181818"
            }
          },
          {
            featureType: "subway",
            elementType: "labels",
            stylers: {
              color: "#181818",
              visibility: "off"
            }
          },
          {
            featureType: "railway",
            elementType: "geometry",
            stylers: {
              lightness: -52,
              visibility: "off"
            }
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: {
              color: "#313131"
            }
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: {
              color: "#8b8787"
            }
          },
          {
            featureType: "manmade",
            elementType: "geometry",
            stylers: {
              color: "#1b1b1b"
            }
          },
          {
            featureType: "local",
            elementType: "geometry",
            stylers: {
              lightness: -75,
              saturation: -91
            }
          },
          {
            featureType: "subway",
            elementType: "geometry",
            stylers: {
              lightness: -65,
              visibility: "off"
            }
          },
          {
            featureType: "railway",
            elementType: "all",
            stylers: {
              lightness: -40
            }
          },
          {
            featureType: "district",
            elementType: "labels.icon",
            stylers: {
              color: "#ff0000ff",
              weight: "1",
              lightness: -29
            }
          },
          {
            featureType: "poilabel",
            elementType: "all",
            stylers: {
              visibility: "off"
            }
          }
        ]
      }
    };
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 116.71575;
      this.center.lat = 40.255047;
      this.zoom = 10;
    }
  }
};
</script>

<style lang="scss" scoped>
.map {
  height: 1800px;
  .map-up {
    height: 50%;
    .map-left {
      height: 100%;
      width: 70%;
      float: left;
      background-color: aquamarine;
    }
    .map-right {
      height: 100%;
      width: 30%;
      float: left;
      background-color: rebeccapurple;
    }
  }
  .map-down {
    height: 50%;
    .map-center {
      height: 100%;
      width: 40%;
      float: left;
      background-color: rebeccapurple;
    }
    .map-left {
      height: 100%;
      width: 30%;
      float: left;
      background-color: aqua;
    }
    .map-right {
      height: 100%;
      width: 30%;
      float: left;
      background-color: aquamarine;
    }
  }
}
</style>
