<template>
  <v-app>
    <Navigation />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
  import store from "./store";
  import Navigation from "@/components/Navigation";
  import Footer from "@/components/Footer";
  export default {
    store,
    name: "App",
    components: {
      Navigation,
      Footer,
    },
    data: () => ({}),
  };
</script>
