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

          <v-list-item v-if="authenticated" to="/account">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
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
              v-if="darkmode()"
              v-model="dark"
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
  beforeMount() {
    if (this.$store.state.auth.darkmode) {
      this.$vuetify.theme.dark = true;
    } else {
      this.$vuetify.theme.dark = false;
    }
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
    dark: {
      get() {
        return this.$store.state.auth.darkmode;
      },
      set(value) {
        if (value) {
          console.log(value);
          this.$vuetify.theme.dark = true;
        } else {
          console.log(value);
          this.$vuetify.theme.dark = false;
        }
        this.darkmodeAction(value);
      },
    },
  },
  methods: {
    ...mapActions({
      logOutAction: "auth/logOut",
      darkmodeAction: "auth/darkmodeAction",
    }),
    logOut() {
      this.logOutAction().then(() => {
        if (!(this.$route.name === "Home"))
          this.$router.replace({ name: "Home" });
      });
    },
    darkmode() {
      if (this.authenticated) {
        if (this.$store.state.auth.darkmode) {
          this.$vuetify.theme.dark = true;
        } else {
          this.$vuetify.theme.dark = false;
        }
        return true;
      } else {
        this.$vuetify.theme.dark = false;
        return false;
      }
    },
  },
};
</script>
