<template>
  <v-app>
    <h1 class="text-center">Runaton - Simple run tracker</h1>
    <v-divider></v-divider>
    <br />
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
};