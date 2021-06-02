<template>
  <v-app>
    <div v-if="authenticated">
      Runaton username account: {{ user.username }}
      <br />
      Runaton email account: {{ user.email }}
    </div>
    <br />
    <div class="text-center">
      <strong><Stopwatch /></strong>
    </div>
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
    <div class="text-center">
      <strong><Countdown /></strong>
    </div>

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
