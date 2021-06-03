import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
    archive: null,
    darkmode: false,
  },
  getters: {
    authenticated(state) {
      return state.token && state.user;
    },
    user(state) {
      return state.user;
    },
    archive(state) {
      return state.archive;
    },
    darkmode(state) {
      return state.darkmode;
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, data) {
      state.user = data;
    },
    SET_ARCHIVE(state, data) {
      state.archive = data
    },
    SET_DARKMODE(state, data) {
      state.darkmode = data
    }
  },
  actions: {
    async signUp({ dispatch }, credentials) {
      try {
        let response = await axios.post("api/signup", credentials)
        await dispatch("attempt", response.data.jwt);
      } catch (err) {
        alert(err.response.data.error)
      }
    },
    async logIn({ dispatch }, credentials) {
      try {
        let response = await axios.post("api/login", credentials)
        await dispatch("attempt", response.data.jwt);
      } catch (err) {
        alert(err.response.data.error)
      }
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
        commit("SET_ARCHIVE", response.data.archive);
        commit("SET_DARKMODE", response.data.darkmode);
        console.log("riuscito!!!");
      } catch (e) {
        console.log("fail");
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
        commit("SET_ARCHIVE", null);
        commit("SET_DARKMODE", false)
      }
    },
    logOut({ commit }) {
      commit("SET_TOKEN", null);
      commit("SET_USER", null);
      commit("SET_ARCHIVE", null);
      commit("SET_DARKMODE", false)
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
    async deleteRun({ commit }, id) {
      console.log(id)
      try {
        await axios.delete("api/archive", {
          data: {
            id: id
          }
        })
        let resp = await axios.get("api")
        console.log(resp)
        commit("SET_ARCHIVE", resp.data.archive)
        alert('Cancellato con successo!')
      } catch (e) {
        console.log(e)
        alert('La cancellazione non è andata a buon fine!')
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
        commit("SET_ARCHIVE", null);
        commit("SET_DARKMODE", false)
      }
    },
    async darkmodeAction({ commit }, value) {
      commit("SET_DARKMODE", value);
      try {
        await axios.patch("api/darkmode", { darkmode: value });
      } catch (e) {
        alert(`Sei offline, l'impostazione non risulta correttamente inviata al server`)
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
        commit("SET_ARCHIVE", null);
        commit("SET_DARKMODE", false)
      }
    }

  },
};
