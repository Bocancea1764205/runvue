<template>
  <div>
    EMAIL:
    <input type="text" v-model="form.email" />
    <br />
    <button @click="submit">Invia email</button>
    <br />
    {{error}}
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Forgot",
  data: () => {
    return {
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
