import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
  },
  getters: {
    authenticated(state) {
      return state.token && state.user;
    },
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, data) {
      state.user = data;
    },
  },
  actions: {
    async signUp({ dispatch }, credentials) {
      let response = await axios.post("api/signup", credentials);
      dispatch("attempt", response.data.jwt);
    },
    async logIn({ dispatch }, credentials) {
      let response = await axios.post("api/login", credentials);
      dispatch("attempt", response.data.jwt);
    },

    async attempt({ commit, state }, token) {
      if (token) {
        commit("SET_TOKEN", token);
      }
      if (!state.token) {
        return;
      }
      try {
        let response = await axios.get("api");
        commit("SET_USER", response.data.user);
        console.log("riuscito!!!");
      } catch (e) {
        console.log("fail");
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
      }
    },
    logOut({ commit }) {
      commit("SET_TOKEN", null);
      commit("SET_USER", null);
    },
    async forgotPassword(_, credentials) {
      axios.post("api/forgotPassword", credentials);
    },
    async resetPassword(_, password) {
      fetch(location.pathname, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
        }),
      });
    },
  },
};
