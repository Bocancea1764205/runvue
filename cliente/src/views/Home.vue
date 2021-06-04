<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center">Runaton - Simple run tracker</h1>
        <v-divider></v-divider>
        <br />
        <v-carousel hide-delimiters cycle show-arrows-on-hover>
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>

        <br />
        <v-divider></v-divider>
        <h2 class="text-center">
          "Runaton" è un’applicazione web per tutte le persone che vogliono
          monitorare la loro corsa e/o camminata. Con il nostro sito gli utenti
          potranno in ogni momento registrare le performance della loro attività
          fisica in modo da poter visualizzare tutti i dati statistici di ogni
          allenamento svolto.
        </h2>
        <v-divider></v-divider>
        <br />
        <v-card>
          <v-toolbar color="deep-orange" dark
            ><template>
              <v-tabs v-model="tabs" centered
                ><v-tabs-slider color="grey darken-4"></v-tabs-slider>
                <v-tab v-for="n in 4" :key="n"> Sezione {{ n }} </v-tab>
              </v-tabs>
            </template>
          </v-toolbar>

          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <v-card flat>
                <v-card-title class="text-h5">
                  Run
                </v-card-title>
                <v-card-text class="text-body-1">
                  Run!! Qui potrai metterti alla prova in ogni tuo allenamento,
                  hai a disposizione uno stopwatch e una mappa dove potrai
                  visualizzare a fine corsa il tuo tracciato, salvarlo nel tuo
                  archivio personale oppure resettarlo.
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-title class="text-h5">
                  Archivio
                </v-card-title>
                <v-card-text class="text-body-1">
                  Ecco il tuo archivo personale, confronta le tue corse
                  (ricordati di salvarle!), per ognuna di esse avrai a
                  dispozione: la data, i metri percorsi e il tempo impiegato.
                  Questa sezione è molto utile per metterti alla prova,
                  sfruttala e migliora sempre!
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-title class="text-h5">
                  Account
                </v-card-title>
                <v-card-text class="text-body-1">
                  La tua area personale, modifica i tuoi dati, sentiti libero di
                  fare cio che vuoi, cambia le tue impostazione come meglio
                  desideri.
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-title class="text-h5">
                  About
                </v-card-title>
                <v-card-text class="text-body-1">
                  Per sapere di piu su chi siamo, basta recarti in questa
                  sezione. Abbiamo lasciato i nostri principali contatti (mail e
                  profilo twitter), in caso tu voglia darci un feedback o altro
                  ancora non esitare a contattarci, sempre a vostra dispozione!
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
        <br />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      tabs: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      items: [
        {
          src: "https://wallpapercave.com/wp/wp2844161.jpg",
        },
        {
          src:
            "https://inspired365.org/wp-content/uploads/2019/03/6360950278862884161549582845_8CMMj6Q.jpg",
        },
        {
          src:
            "https://www.iowaagribusinessradionetwork.com/wp-content/uploads/2017/05/website-17.jpg",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
};
</script>
