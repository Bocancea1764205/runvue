<template>
  <v-app>
    <v-container>
      <v-card elevation="11">
        <v-container>
          <h1 class="text-center">Login</h1>
          <v-divider></v-divider>
          <br />
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              type="text"
              v-model="form.username"
              :rules="nameRules"
              label="Username"
              required
            ></v-text-field>

            <v-text-field
              type="password"
              v-model="form.password"
              :rules="pwRules"
              label="Password"
              required
            ></v-text-field>

            <v-col class="text-center">
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="submit"
                ><v-icon dark left> mdi-account-arrow-left-outline </v-icon
                >Login</v-btn
              >
              <v-btn color="error" class="mr-4" @click="reset"
                ><v-icon dark left> mdi-close-box-outline </v-icon>Reset</v-btn
              >
            </v-col>
            <v-col class="text-center">
              <router-link to="/forgotPassword"
                >Password dimenticata?</router-link
              >
              <span> oppure </span>
              <router-link to="/signup"
                >Non hai un account? Registrati!</router-link
              >
            </v-col>
            {{ error }}
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Login",
  data: () => {
    return {
      valid: false,
      nameRules: (v) => !!v || "Username obbligatorio",
      pwRules: (v) => !!v || "Password obbligatoria",
      select: null,
      form: {
        username: "",
        password: "",
      },
      error: "",
    };
  },
  mounted() {
    this.valid = false;
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
    }),
  },
  methods: {
    ...mapActions({
      logIn: "auth/logIn",
    }),
    submit() {
      this.logIn(this.form).then(() => {
        if (
          this.authenticated &&
          (this.$vuetify.breakpoint.name === "sm" ||
            this.$vuetify.breakpoint.name === "xs")
        )
          this.$router.replace({ name: "Run" });
        else if (this.authenticated) this.$router.replace({ name: "Archivio" });
      });
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
