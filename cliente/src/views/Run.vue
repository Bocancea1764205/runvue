<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center">Run</h1>
        <v-divider></v-divider>
        <br />
        <div class="text-center">
          <h1>
            <strong><Stopwatch /></strong>
          </h1>
        </div>
        <br />
        <v-row class="text-center">
          <v-col cols="12">
            <v-btn
              height="100px"
              width="100px"
              v-show="!startedCountdown"
              color="success"
              elevation="11"
              x-large
              @click="startCountdownHandling()"
              ><v-icon dark size="60px">mdi-play</v-icon></v-btn
            >

            <v-btn
              height="100px"
              width="100px"
              v-show="startedCountdown"
              color="error"
              elevation="11"
              x-large
              @click="
                if (startedCountdown) {
                  startCountdownHandling();
                  if (startedStopwatch) startStopwatchHandling();
                }
              "
              ><v-icon dark size="60px">mdi-stop</v-icon></v-btn
            >
          </v-col>
        </v-row>
        <br />

        <Countdown />

        <br />
        <Tracking />
      </v-col>
    </v-row>
  </v-container>
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
