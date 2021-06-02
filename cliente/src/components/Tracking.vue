<template>
  <v-app>
    <v-card
      v-show="!startedStopwatch && !startedCountdown"
      elevation="2"
      id="map"
      style="width: 100% !important; height: 500px !important;"
    >
    </v-card>
    <v-btn
      v-if="authenticated && !startedStopwatch && !startedCountdown"
      v-on:click="
        saveRun($store.state.start.run);
        meters = 0;
      "
      color="success"
      >Salva corsa</v-btn
    >

    <v-btn
      v-show="!startedStopwatch && !startedCountdown && meters > 0"
      v-on:click="
        reset();
        meters = 0;
      "
      color="info"
      >Resetta</v-btn
    >
    <div>{{ realtimemeters }}</div>
  </v-app>
</template>

<script>
var coordinates = [];
let lastTwoCoordinates = [];
const geo = {
  id: undefined,
};
import { mapGetters, mapActions } from "vuex";
import mapboxgl from "mapbox-gl";
import Vue from "vue";
Vue.use(geo);
Vue.use(mapboxgl);
export default {
  name: "Tracking",
  data: () => ({
    soglia: "",
    meters: "",
    map: "",
    realtimemeters: "",
  }),
  created() {
    this.soglia = 0;
    this.meters = 0;
    this.map = "";
    this.realtimemeters = "";
  },
  mounted() {
    this.soglia = 0;
    this.meters = 0;
    this.map = "";
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
        alert(
          "Questo browser non supporta questa funzionalità. Attualmente Chrome, Edge e Opera sono i browser supportati"
        );
        return;
      }
      coordinates = [];
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
      navigator.geolocation.clearWatch(geo.id);
      this.setPath(coordinates);
      this.setMeters(this.meters);
      this.setDate(Date.now());
      console.log(this.$store.state.start.run.path);
      console.log(this.$store.state.start.run.meters);
      console.log(this.$store.state.start.run.date);
      console.log(this.$store.state.start.run);

      this.drawMap();
    },
    //********************Mapbox Draw Map******************/
    drawMap() {
      const length = coordinates.length;
      this.soglia = 0;
      if (length > 1) {
        mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_API;
        this.map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v11",
          center: coordinates[Math.floor(coordinates.length / 2)],
          zoom: 15,
        });
        this.map.on("dataloading", () => {
          window.dispatchEvent(new Event("resize"));
        });
        this.map.on("load", () => {
          this.map.addSource("route", {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates: coordinates,
              },
            },
          });
          this.map.addLayer({
            id: "route",
            type: "line",
            source: "route",
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#f26958",
              "line-width": 8,
            },
          });
        });
      }
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

<style lang="css">
#app {
  text-align: center;
}
@import "https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css";
*:focus {
  outline: none;
}
.mapboxgl-ctrl-attrib-button {
  display: none !important;
}
.mapboxgl-ctrl-bottom-left,
.mapboxgl-ctrl-bottom-right {
  display: none !important;
}
</style>
