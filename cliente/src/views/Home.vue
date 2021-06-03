<template>
  <v-app>
    <v-container>
      <h1 class="text-center">Runaton - Simple run tracker</h1>
      <v-divider></v-divider>
    </v-container>
    <v-carousel hide-delimiters cycle show-arrows-on-hover>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "Home",
    data() {
      return {
        items: [
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          },
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          },
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          },
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          },
        ],
      };
    },
    computed: {
      ...mapGetters({
        authenticated: "auth/authenticated",
        user: "auth/user",
      }),
    },
  };
</script>
