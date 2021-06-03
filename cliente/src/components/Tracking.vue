<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <DrawMap
            v-show="!startedStopwatch && !startedCountdown && meters > 0"
            :coord="coord"
          />
        </v-col>

        <v-col class="text-center">
          <v-btn
            class="mr-4"
            v-show="
              authenticated &&
                !startedStopwatch &&
                !startedCountdown &&
                meters > 0
            "
            v-on:click="
              saveRun($store.state.start.run);
              meters = 0;
            "
            color="success"
            >Salva corsa</v-btn
          >
          <v-btn
            class="mr-4"
            v-show="!startedStopwatch && !startedCountdown && meters > 0"
            v-on:click="
              reset();
              meters = 0;
              soglia = 0;
            "
            color="info"
            >Resetta</v-btn
          >
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-card-title class="text-h5"> </v-card-title>
            <v-card-text>
              <v-row>
                <v-col>
                  <p class="text-h6 text--primary">
                    Lunghezza:
                  </p>
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                  <p class="text-h6 text--secondary">
                    {{ realtime_meters() }}
                  </p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
var coordinates = [];
let lastTwoCoordinates = [];
const geo = {
  id: undefined,
};
import { mapGetters, mapActions } from "vuex";
import DrawMap from "@/components/DrawMap";
import Vue from "vue";
import mapboxgl from "mapbox-gl";
Vue.use(geo);
Vue.use(mapboxgl);
export default {
  name: "Tracking",
  components: {
    DrawMap,
  },
  data: () => ({
    soglia: "",
    meters: "",
    realtimemeters: "",
    auxArray: [],
    coord: [],
  }),
  created() {
    this.soglia = 0;
    this.meters = 0;
    this.realtimemeters = "";
  },
  mounted() {
    this.soglia = 0;
    this.meters = 0;
    this.realtimemeters = "";
  },
  watch: {
    startedStopwatch: function(value) {
      if (value) {
        return this.trackPosition();
      } else {
        return this.stopTracking();
      }
    },
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
    startedStopwatch: function() {
      return this.$store.state.start.startedStopwatch;
    },
    startedCountdown: function() {
      return this.$store.state.start.startedStopwatch;
    },
  },
  methods: {
    ...mapActions({
      reset: "start/reset",
      setPath: "start/setPath",
      setMeters: "start/setMeters",
      setDate: "start/setDate",
      saveRun: "start/saveRun",
    }),
    trackPosition: async function() {
      if (!navigator.geolocation) {
        alert("Localizzazione GPS non autorizzata o non supportata!");
        return;
      }
      try {
        await navigator.wakeLock.request("screen");
      } catch (err) {
        console.log(`${err.name}, ${err.message}`);
        /*alert(
          "Questo browser non supporta questa funzionalità. Attualmente Chrome, Edge e Opera sono i browser supportati"
        );
        return;*/
      }
      coordinates = [];
      this.coord = [];
      geo.id = navigator.geolocation.watchPosition(
        this.successPosition,
        this.failurePosition,
        {
          enableHighAccuracy: true,
          timeout: Infinity,
          maximumAge: 5000,
        }
      );
    },
    successPosition: function(position) {
      if (
        (this.soglia += 1) > 5 &&
        position.coords.accuracy <
          (process.env.NODE_ENV === "production" ? 20 : Infinity)
      ) {
        coordinates.push([position.coords.longitude, position.coords.latitude]);
        this.auxArray.push([
          position.coords.longitude,
          position.coords.latitude,
        ]);
        lastTwoCoordinates.push([
          position.coords.longitude,
          position.coords.latitude,
        ]);
        if (lastTwoCoordinates.length > 1) {
          this.meters += this.realtimeMeters(lastTwoCoordinates);
          this.realtimemeters = this.realtime_meters(this.meters);
          lastTwoCoordinates.shift();
          console.log(this.meters);
        }
        console.log(coordinates);
        console.log(position.coords.accuracy);
      }
    },
    failurePosition: function(err) {
      alert(
        "Codice di errore: " + err.code + "Messaggio di errore: " + err.message
      );
      navigator.geolocation.clearWatch(geo.id);
      coordinates = [];
      return;
    },
    stopTracking() {
      this.coord = this.auxArray;
      navigator.geolocation.clearWatch(geo.id);
      this.setPath(coordinates);
      this.setMeters(Math.floor(this.meters));
      this.setDate(Date.now());
      console.log(this.$store.state.start.run.path);
      console.log(this.$store.state.start.run.meters);
      console.log(this.$store.state.start.run.date);
      console.log(this.$store.state.start.run);
    },

    //**********************Realtime Meters*******************/
    realtimeMeters: function(lastTwoCoordinates) {
      if (
        lastTwoCoordinates[0][0] !== lastTwoCoordinates[1][0] &&
        lastTwoCoordinates[0][1] !== lastTwoCoordinates[1][1]
      ) {
        let puntoA = new mapboxgl.LngLat(
          lastTwoCoordinates[0][0],
          lastTwoCoordinates[0][1]
        );
        let puntoB = new mapboxgl.LngLat(
          lastTwoCoordinates[1][0],
          lastTwoCoordinates[1][1]
        );
        return puntoA.distanceTo(puntoB);
      }
      return 0;
    },
    realtime_meters: function(meters) {
      let formatted = Math.floor(meters);
      if (formatted >= 1000) {
        return `${(formatted / 1000).toFixed(3)} km`;
      } else if (formatted > 1) {
        return `${formatted} metri`;
      } else if (formatted === 1) {
        return `1 metro`;
      } else {
        return `0 metri`;
      }
    },
  },
};
</script>
