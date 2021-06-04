<template>
  <v-container>
    <v-row>
      <v-col>
        <div v-if="authenticated">
          <h1 class="text-center">Runaton email account: {{ user.email }}</h1>
          <h1 class="text-center">Runaton user account: {{ user.username }}</h1>
          <h1 class="text-center">Runaton darkMode account: {{ darkmode }}</h1>
        </div>
        <v-divider></v-divider>
        <br />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Account",
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      darkmode: "auth/darkmode",
    }),
  },
};
</script>
