import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import start from "./start";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    start,
  },
});
