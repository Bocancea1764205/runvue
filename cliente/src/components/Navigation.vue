<template>
  <nav>
    <v-app-bar color="deep-orange" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Runaton</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-orange--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/run" class="hidden-sm-and-up">
            <v-list-item-icon>
              <v-icon>mdi-run-fast</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Run</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="authenticated" to="/archivio">
            <v-list-item-icon>
              <v-icon>mdi-text-box-multiple-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Archivio</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>mdi-information-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="!authenticated" to="/signup">
            <v-list-item-icon>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Signup</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="!authenticated" to="/login">
            <v-list-item-icon>
              <v-icon>mdi-account-arrow-left</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="authenticated" @click.prevent="logOut">
            <v-list-item-icon>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-switch
              v-model="$vuetify.theme.dark"
              hint="Scorri a destra per abilitare la Dark Mode"
              inset
              label="Dark Mode"
              persistent-hint
            ></v-switch>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {
    ...mapActions({
      logOutAction: "auth/logOut",
      changeDarkmode: "auth/changeDarkmode",
    }),
    logOut() {
      this.logOutAction().then(() => {
        if (!(this.$route.name === "Home"))
          this.$router.replace({ name: "Home" });
      });
    },
  },
};
</script>
