<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card elvation="11">
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                type="email"
                v-model="form.email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                type="password"
                v-model="form.password"
                :counter="10"
                :rules="pwRules"
                label="Nuova password"
                required
              ></v-text-field>

              <v-col class="text-center">
                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="submit(form)"
                  >Reimposta password</v-btn
                >
              </v-col>
              {{ error }}
            </v-form>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Account",
  data: () => {
    return {
      valid: true,
      emailRules: [
        (v) => !!v || "E-mail obbligatoria",
        (v) => /.+@.+\..+/.test(v) || "E-mail deve essere valida",
      ],
      pwRules: [
        (v) => !!v || "Nuova password obbligatoria",
        (v) =>
          (v && v.length >= 5) ||
          "Nuova password deve avere almeno 5 caratteri",
        (v) =>
          /(?=.*[A-Z])/.test(v) || "Nuova password deve avere una maiuscola",
        (v) => /(?=.*\d)/.test(v) || "Nuova password deve avere un numero",
        (v) =>
          /([!@$%])/.test(v) ||
          "Nuova password deve avere un carattere speciale [!@#$%]",
      ],
      select: null,
      form: {
        password: "",
        email: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      darkmode: "auth/darkmode",
    }),
  },
  methods: {
    ...mapActions({
      submit: "auth/updateAction",
    }),
  },
  validate: function() {
    this.$refs.form.validate();
  },
  reset: function() {
    this.$refs.form.reset();
  },
};
</script>
