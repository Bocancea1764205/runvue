import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Run from "../views/Run.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Archivio from "../views/Archivio.vue";
import Account from "../views/Account.vue";
import Forgot from "../views/Forgot.vue";
import Reset from "../views/Reset.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/run",
    name: "Run",
    component: Run,
  },
  {
    path: "/archivio",
    name: "Archivio",
    component: Archivio,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/forgotPassword",
    name: "Forgot",
    component: Forgot,
  },
  {
    path: "/resetPassword/:token",
    name: "Reset",
    component: Reset,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

