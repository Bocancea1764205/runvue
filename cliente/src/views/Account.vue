<template>
  <v-app>
    <div v-if="authenticated">
      <h1 class="text-center">Il mio account</h1>
    </div>
    <v-divider></v-divider>
    <br />
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Account",
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
};
</script>
