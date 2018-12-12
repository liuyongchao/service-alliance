import Vue from "vue";
import Vuex from "vuex";
import user from "@/store/modules/user";
import evaluate from "@/store/modules/evaluate";
import getters from "@/store/getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    evaluate
  },
  getters
});

export default store;
