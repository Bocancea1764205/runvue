<template>
  <v-container fluid pa-0 class="align-c">
    <v-row>
      <v-col>
        <br />
        <div class="text-center headline">
          <h1 text="heading">
            <Stopwatch />
          </h1>
        </div>
        <br />
        <v-container>
          <v-row class="text-center">
            <v-col>
              <v-btn
                block
                height="30vh"
                v-show="resettato"
                depressed
                color="success"
                @click="startCountdownHandling()"
                ><v-icon dark size="150">mdi-play</v-icon></v-btn
              >

              <v-btn
                height="30vh"
                block
                depressed
                v-show="startedCountdown"
                color="error"
                @click="
                  if (startedCountdown) {
                    startCountdownHandling();
                    if (startedStopwatch) startStopwatchHandling();
                  }
                "
                ><v-icon dark size="150">mdi-stop</v-icon></v-btn
              >
            </v-col>
          </v-row>
        </v-container>

        <Countdown />

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
      resettato: "start/resettato",
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
