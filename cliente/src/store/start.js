import store from "../store";
import axios from "axios";
export default {
  namespaced: true,
  state: {
    startedCountdown: false,
    startedStopwatch: false,
    run: {
      meters: null,
      path: null,
      time: null,
      date: null,
    },
  },
  getters: {
    startedCountdown(state) {
      return state.startedCountdown;
    },
    resettato(state) {
      return !state.startedCountdown && !state.startedStopwatch && (state.run.meters === null || state.run.meters === 0);
    },
    startedStopwatch(state) {
      return state.startedStopwatch;
    },
  },
  mutations: {
    CHANGE_STATUS_COUNTDOWN(state) {
      state.startedCountdown = !state.startedCountdown;
    },
    RESET_STATUS_COUNTDOWN(state) {
      state.startedCountdown = false;
    },
    CHANGE_STATUS_STOPWATCH(state) {
      state.startedStopwatch = !state.startedStopwatch;
    },
    RESET_STATUS_STOPWATCH(state) {
      state.startedStopwatch = false;
    },
    RESET_STATUS_ALL(state) {
      state.startedStopwatch = false;
      state.startedCountdown = false;
      state.run.meters = null;
      state.run.path = null;
      state.run.time = null;
      state.run.date = null;
      console.log(state)
    },
    CHANGE_METERS(state, data) {
      state.run.meters = data;
    },
    CHANGE_PATH(state, data) {
      state.run.path = data;
    },
    CHANGE_TIME(state, data) {
      state.run.time = data;
    },
    CHANGE_DATE(state, data) {
      state.run.date = data;
    },
  },
  actions: {
    startCountdownHandling({ commit }) {
      commit("CHANGE_STATUS_COUNTDOWN");
    },
    startStopwatchHandling({ commit }) {
      commit("CHANGE_STATUS_STOPWATCH");
    },
    async saveRun({ commit }, data) {
      try {
        let response = await axios.post("api/archive", data)
        store.commit("auth/SET_ARCHIVE", response.data.archive)
      } catch (err) {
        alert(err.response.data.error)
      }
      commit("RESET_STATUS_ALL", null);
    },
    async reset({ commit }) {
      commit("RESET_STATUS_ALL", null);
    },
    setMeters({ commit }, data) {
      commit("CHANGE_METERS", data);
    },
    setPath({ commit }, data) {
      commit("CHANGE_PATH", data);
    },
    setTime({ commit }, data) {
      commit("CHANGE_TIME", data);
    },
    setDate({ commit }, data) {
      commit("CHANGE_DATE", data);
    },
  },
};
