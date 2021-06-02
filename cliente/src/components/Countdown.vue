<template>
  <span id="countdown" v-html="countdown"></span>
</template>

<style></style>

<script>
import { mapActions } from "vuex";
export default {
  name: "Countdown",
  data: () => {
    return {
      countdownTime: null,
      currentTime: null,
      interval: null,
    };
  },
  watch: {
    startedCountdown: function(value) {
      if (value) {
        return this.start();
      } else {
        return this.stop();
        //this.$emit("timeData", this.tempo);
      }
    },
  },
  computed: {
    startedCountdown() {
      return this.$store.state.start.startedCountdown;
    },
    countdown: function() {
      if (!this.startedCountdown) {
        return "";
      }
      return this.secondi;
    },
    secondi: function() {
      var lapsed = this.millisecondi;
      var s = Math.floor(lapsed / 1000);
      return this.startedCountdown && this.millisecondi <= 1000
        ? `VIA!`
        : `Parti tra: ${s}`;
    },
    millisecondi: function() {
      return this.countdownTime - this.currentTime;
    },
  },
  methods: {
    ...mapActions({
      startStopwatchHandling: "start/startStopwatchHandling",
    }),
    start() {
      this.countdownTime = Date.now() + 5999;
      this.currentTime = Date.now();
      this.interval = setInterval(this.updateCurrentTime, 20);
    },
    reset: function() {
      this.$data.startTime = Date.now();
      this.$data.currentTime = Date.now();
    },
    stop() {
      clearInterval(this.interval);
    },
    updateCurrentTime() {
      this.currentTime = Date.now();
      if (this.millisecondi <= 1000) {
        this.stop();
        this.startStopwatchHandling();
      }
    },
  },
};
</script>
