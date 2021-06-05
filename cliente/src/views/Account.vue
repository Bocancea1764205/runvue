<template>
  <v-container v-if="authenticated">
    <v-row justify="center" align="center">
      <v-col class="pa-10">
        <v-card elevation="11">
          <v-col>
            <h1 class="text-center">Account di {{ user.username }}</h1>
            <v-divider></v-divider>
            <br />
            <v-col cols="12">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-row>
                  <v-col cols="6">
                    <p>Email: {{ user.email }}</p>
                  </v-col>
                  <v-col cols="6" align="right">
                    <v-btn
                      icon
                      v-show="!emailchange"
                      @click="emailchange = !emailchange"
                      ><v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-show="emailchange"
                      type="email"
                      v-model="form.email"
                      :rules="emailRules"
                      label="Nuova email"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <p>
                      Password:
                      <span>••••••••</span>
                    </p>
                  </v-col>
                  <v-col cols="6" align="right">
                    <v-btn
                      icon
                      v-show="!passwordchange"
                      @click="passwordchange = !passwordchange"
                      ><v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-show="passwordchange"
                      type="password"
                      v-model="form.password"
                      :counter="15"
                      :rules="pwRules"
                      label="Nuova password"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col class="text-center">
                    <v-btn
                      v-show="passwordchange || emailchange"
                      :disabled="!valid"
                      color="success"
                      class="mr-4"
                      @click="
                        validate();
                        submit();
                        reset();
                      "
                      ><v-icon dark left> mdi-content-save-edit </v-icon>Salva
                      le modifiche</v-btn
                    >
                    <v-btn
                      v-show="emailchange || passwordchange"
                      color="error"
                      class="mr-4"
                      @click="reset()"
                      ><v-icon dark center>
                        mdi-close-box-outline
                      </v-icon></v-btn
                    >
                  </v-col>
                </v-row>

                {{ error }}
              </v-form>
            </v-col>
          </v-col>
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
      emailchange: false,
      passwordchange: false,
      modify: false,
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
      form: {
        email: "",
        password: "",
      },
      error: "",
    };
  },
  created() {
    this.form.email = this.$store.state.auth.user.email;
  },
  mounted() {
    this.form.email = this.$store.state.auth.user.email;
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {
    ...mapActions({
      updateAccount: "auth/updateAccount",
    }),
    submit() {
      this.updateAccount(this.form);
    },
    validate: function() {
      this.$refs.form.validate();
    },
    reset: function() {
      this.form.email = this.$store.state.auth.user.email;
      this.form.password = "";
      this.$refs.form.resetValidation();
      if (this.emailchange) this.emailchange = !this.emailchange;
      if (this.passwordchange) this.passwordchange = !this.passwordchange;
    },
  },
};
</script>
