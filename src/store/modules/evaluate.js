import { basicEvaluate } from "@/api/evaluate";
const evaluate = {
  state: {
    basicId: null,
    basicSecret: null
  },
  mutations: {
    SET_BASICID: (state, basicId) => {
      state.basicId = basicId;
    },
    SET_BASICSECRET: (state, basicSecret) => {
      state.basicSecret = basicSecret;
    }
  },
  actions: {
    BasicEvaluate({ commit }, BasicEvaluateForm) {
      return new Promise((resolve, reject) => {
        basicEvaluate(BasicEvaluateForm)
          .then(response => {
            const data = response;
            commit("SET_BASICID", data.basicId);
            commit("SET_BASICSECRET", data.basicSecret);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};
export default evaluate;
