<template>
  <v-app>
    <div v-if="authenticated">
      Username account: {{ user.email }}
      <br />
      Email account: {{ user.email }}
    </div>
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
