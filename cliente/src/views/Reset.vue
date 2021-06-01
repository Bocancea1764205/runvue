<template>
  <v-app>
    NUOVA PASSWORD:
    <input type="password" v-model="form.password" />
    <br />
    <button @click="submit">Resetta la password</button>
    <br />
    {{ error }}
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Reset",
  data: () => {
    return {
      form: {
        password: "",
      },
      error: "",
    };
  },
  methods: {
    ...mapActions({
      resetPassword: "auth/resetPassword",
    }),
    submit() {
      this.resetPassword(this.form.password).then(() => {
        this.$router.replace({ name: "Home" });
      });
    },
  },
};
</script>
