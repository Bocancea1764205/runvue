<template>
  <v-card
    elevation="11"
    id="map"
    style="width: 100% !important; height: 40vh !important;"
  >
  </v-card>
</template>

<script>
  import mapboxgl from "mapbox-gl";
  import Vue from "vue";
  Vue.use(mapboxgl);

  export default {
    props: {
      coord: {
        type: Array,
      },
    },
    name: "DrawMap",
    data: () => ({
      map: "",
    }),
    watch: {
      coord: function(value) {
        if (value) {
          return this.drawMap(Object.values(value));
        } else {
          return;
        }
      },
    },
    methods: {
      drawMap(coordinates) {
        console.log("ciao! vengo eseguito!");
        console.log(coordinates);
        const length = coordinates.length;
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
    },
  };
</script>

<style lang="css">
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
