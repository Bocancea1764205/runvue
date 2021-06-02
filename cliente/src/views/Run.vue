<template>
  <v-app>
    <h1 class="text-center">Stopwatch</h1>
    <v-divider></v-divider>

    <h2 class="text-center"><Stopwatch /></h2>

    <div class="text-center">
      <v-btn
        v-show="!startedCountdown"
        color="success"
        fab
        elevation="11"
        x-large
        @click="startCountdownHandling()"
        ><v-icon dark>mdi-play</v-icon></v-btn
      >
      <v-btn
        v-show="startedCountdown"
        color="error"
        fab
        elevation="11"
        x-large
        @click="
          if (startedCountdown) {
            startCountdownHandling();
            if (startedStopwatch) startStopwatchHandling();
          }
        "
        ><v-icon dark>mdi-stop</v-icon></v-btn
      >
    </div>

    <h3 class="text-center"><Countdown /></h3>

    <br />
    <Tracking />
  </v-app>
</template>
<script>
  import store from "../store";
  import Stopwatch from "@/components/Stopwatch";
  import Countdown from "@/components/Countdown";
  import Tracking from "@/components/Tracking";
  import { mapGetters, mapActions } from "vuex";
  import Vue from "vue";
  Vue.use(Tracking);
  export default {
    store,
    components: {
      Stopwatch,
      Countdown,
      Tracking,
    },
    data: () => ({
      //
    }),
    name: "Run",
    computed: {
      ...mapGetters({
        authenticated: "auth/authenticated",
        user: "auth/user",
        startedStopwatch: "start/startedStopwatch",
        startedCountdown: "start/startedCountdown",
      }),
    },
    methods: {
      ...mapActions({
        startStopwatchHandling: "start/startStopwatchHandling", // map `this.add()` to `this.$store.commit('increment')`
        startCountdownHandling: "start/startCountdownHandling",
      }),
    },
  };
</script>
