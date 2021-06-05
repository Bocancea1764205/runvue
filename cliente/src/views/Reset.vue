<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card elvation="11">
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
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
                  @click="
                    validate();
                    submit();
                  "
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
import { mapActions } from "vuex";
export default {
  name: "Reset",
  data: () => {
    return {
      valid: true,
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
    validate: function() {
      this.$refs.form.validate();
    },
  },
};
</script>
