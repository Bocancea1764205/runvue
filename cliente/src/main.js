import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

import store from "./store";
require("@/store/subscriber");

router.beforeEach((to, from, next) => {
  store.commit("start/RESET_STATUS_ALL");
  if (
    store.getters["auth/authenticated"] &&
    (to.name === "Login" ||
      to.name === "Signup" ||
      to.name === "Reset" ||
      to.name === "Forgot")
  ) {
    next(false);
  } else next();

  if (
    !store.getters["auth/authenticated"] &&
    to.name !== "Login" &&
    to.name !== "Signup" &&
    to.name !== "Run" &&
    to.name !== "Home" &&
    to.name !== "About" &&
    to.name !== "Reset" &&
    to.name !== "Forgot"
  ) {
    next({ name: "Home" });
  } else next();
});

Vue.config.productionTip = false;
store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
  new Vue({
    store,
    router,
    vuetify,
    render: (h) => h(App),
  }).$mount("#app");
});
