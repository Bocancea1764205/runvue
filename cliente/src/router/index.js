import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Run from "../views/Run.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Archivio from "../views/Archivio.vue";
import Forgot from "../views/Forgot.vue";
import Reset from "../views/Reset.vue";

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
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

