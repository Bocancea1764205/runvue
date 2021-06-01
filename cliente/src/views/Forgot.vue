<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        type="email"
        v-model="form.email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit"
        >Invia email</v-btn
      >
      {{ error }}
    </v-form>
  </v-container>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    name: "Forgot",
    data: () => {
      return {
        valid: true,
        emailRules: [
          (v) => !!v || "E-mail obbligatoria",
          (v) => /.+@.+\..+/.test(v) || "E-mail deve essere valida",
        ],
        select: null,
        form: {
          email: "",
        },
        error: "",
      };
    },
    methods: {
      ...mapActions({
        forgotPassword: "auth/forgotPassword",
      }),
      submit() {
        this.forgotPassword(this.form).then(() => {
          this.$router.replace({ name: "Home" });
        });
      },
    },
  };
</script>
