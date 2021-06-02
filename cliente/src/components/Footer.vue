<template>
  <v-footer dark padless>
    <v-card class="flex text-center" flat tile>
      <v-card-title class="grey darken-4">
        <strong class="subheading"
          >Connettiti con noi sui social network!</strong
        >

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="grey darken-4 white--text pt-0">
        vast-retreat-83495.herokuapp.com/ - prodotto da Mihai Dragos Bocancea e
        Alessio Buccarella - © Tutti i diritti riservati.
      </v-card-text>

      <v-card-text class="deep-orange py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Runaton</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
  }),
};
</script>
