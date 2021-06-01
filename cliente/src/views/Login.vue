<template>
  <div>
    USERNAME:
    <input type="text" v-model="form.username" />
    <br />PASSWORD:
    <input type="password" v-model="form.password" />
    <br />
    <button @click="submit">login</button>
    <br />
    <router-link to="/forgotPassword">Password dimenticata?</router-link>
    <br />
    <router-link to="/login">Hai già un account? Fai il login</router-link>
    <br />
    {{ error }}
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data: () => {
    return {
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
  },
};
</script>
