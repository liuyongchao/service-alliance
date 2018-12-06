import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import BaiduMap from "vue-baidu-map";
import "./assets/css/index.css";

Vue.use(ElementUI);
Vue.use(BaiduMap, {
  ak: "2WGE2ADrI9wvPb0yFxXzrGAD0groO5WO"
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
