<template>
  <v-container>
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

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit"
        ><v-icon dark left> mdi-account-arrow-left-outline </v-icon>Login</v-btn
      >
      <v-btn color="error" class="mr-4" @click="reset"
        ><v-icon dark left>
          mdi-close-box-outline </v-icon
        >Reset Login</v-btn
      >
      <br />
      <br />
      <router-link to="/forgotPassword">Password dimenticata?</router-link>
      <br />
      <router-link to="/login">Non hai un account? Registrati!</router-link>
      {{ error }}
    </v-form>
  </v-container>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    name: "Login",
    data: () => {
      return {
        valid: true,
        form: {
          username: "",
          password: "",
        },
        error: "",
      };
    },
    methods: {
      ...mapActions({
        logIn: "auth/logIn",
      }),
      submit() {
        this.logIn(this.form).then(() => {
          this.$router.replace({ name: "Run" });
        });
      },
      reset() {
        this.$refs.form.reset();
      },
    },
  };
</script>
