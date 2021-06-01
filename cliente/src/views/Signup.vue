<template>
  <div>
    USERNAME:<input type="text" v-model="form.username" /> <br />
    EMAIL:<input type="text" v-model="form.email" /> <br />
    PASSWORD:<input type="password" v-model="form.password" /> <br />
    <button @click="submit">Signup</button><br />
    <router-link to="/forgotPassword">Password dimenticata?</router-link> <br />
    <router-link to="/login">Hai già un account? Fai il login</router-link>
    <br />
    {{ error }}
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Signup",
  data: () => {
    return {
      form: {
        username: "",
        email: "",
        password: "",
      },
      error: "",
    };
  },
  methods: {
    ...mapActions({
      signUp: "auth/signUp",
    }),
    submit() {
      this.signUp(this.form).then(() => {
        this.$router.replace({ name: "Run" });
      });
    },
  },
};
</script>
