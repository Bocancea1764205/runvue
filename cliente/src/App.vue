<template>
  <v-app>
    <Navigation />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import store from "./store";
import Navigation from "@/components/Navigation";
export default {
  store,
  name: "App",
  components: {
    Navigation,
  },
  data: () => ({}),
};
</script>
