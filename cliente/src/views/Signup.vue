<template>
  <v-container>
    <v-row>
      <v-col align="center" class="pa-10">
        <v-card elevation="11" max-width="600px">
          <v-container>
            <v-col sm-12 md-6 xl-6>
              <h1 class="text-center">Signup</h1>
              <v-divider></v-divider>
              <br />
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  type="text"
                  v-model="form.username"
                  :counter="10"
                  :rules="nameRules"
                  label="Username"
                  required
                ></v-text-field>

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
                  :counter="15"
                  :rules="pwRules"
                  label="Password"
                  required
                ></v-text-field>

                <v-checkbox
                  v-model="checkbox"
                  :rules="[(v) => !!v || 'Devi accettare per continuare!']"
                  label="Acconsento la conservazione dei dati su questo dominio e a dare il meglio durante le corse"
                  required
                ></v-checkbox>

                <v-col class="text-center">
                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="
                      validate();
                      submit();
                    "
                    ><v-icon dark left> mdi-account-plus-outline </v-icon
                    >Signup</v-btn
                  >
                  <v-btn color="error" class="mr-4" @click="reset"
                    ><v-icon dark left> mdi-close-box-outline </v-icon
                    >Reset</v-btn
                  >
                </v-col>
                <v-col class="text-center">
                  <router-link to="/login"
                    >Hai già un account? Fai il login!</router-link
                  >
                </v-col>
                {{ error }}
              </v-form>
            </v-col>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Signup",
  data: () => {
    return {
      valid: false,
      nameRules: [
        (v) => !!v || "Username obbligatorio",
        (v) =>
          (v && v.length <= 10) ||
          "Username deve contenere meno di 10 caratteri",
      ],
      emailRules: [
        (v) => !!v || "E-mail obbligatoria",
        (v) => /.+@.+\..+/.test(v) || "E-mail deve essere valida",
      ],
      pwRules: [
        (v) => !!v || "Password obbligatoria",
        (v) =>
          (v && v.length <= 15) ||
          "Password deve contenere meno di 15 caratteri",
        (v) =>
          /(?=.*[A-Z])/.test(v) || "Password deve avere almeno una maiuscola",
        (v) => /(?=.*\d)/.test(v) || "Password deve avere almeno un numero",
        (v) =>
          /([!@$%])/.test(v) ||
          "Password deve avere almeno un carattere speciale [!@#$%]",
      ],
      select: null,
      checkbox: false,
      form: {
        username: "",
        email: "",
        password: "",
      },
      error: "",
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
    }),
  },
  methods: {
    ...mapActions({
      signUp: "auth/signUp",
    }),
    submit() {
      this.signUp(this.form).then(() => {
        if (this.authenticated) this.$router.replace({ name: "Run" });
      });
    },
    validate: function() {
      this.$refs.form.validate();
    },
    reset: function() {
      this.$refs.form.reset();
    },
  },
};
</script>
