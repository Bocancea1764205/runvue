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
      fetch("api/run", {
        method: "POST",
        credentials: 'include',
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          meters: Math.floor(data.meters),
          path: Object.values(data.path),
          time: data.time,
          date: data.date,
        }),
      })
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
