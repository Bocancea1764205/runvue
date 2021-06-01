<template>
  <span id="tempo" v-html="tempo"></span>
</template>
<style></style>

<script>
import { mapActions } from "vuex";
export default {
  name: "Stopwatch",
  data: () => {
    return {
      startTime: null,
      currentTime: null,
      interval: null,
    };
  },
  watch: {
    startedStopwatch: function (value) {
      if (value) {
        this.start();
      } else {
        this.stop();
      }
    },
  },
  computed: {
    startedStopwatch: function () {
      return this.$store.state.start.startedStopwatch;
    },
    startedCountdown: function () {
      return this.$store.state.start.startedCountdown;
    },
    tempo: function () {
      if (this.startedCountdown && !this.startedStopwatch) {
        this.reset();
        return `${this.ore}:${this.minuti}:${this.secondi}.${this.decimi}`;
      }
      return `${this.ore}:${this.minuti}:${this.secondi}.${this.decimi}`;
    },
    ore: function () {
      var lapsed = this.millisecondi;
      var h = Math.floor(lapsed / 3600000);
      return this.formatTime(h);
    },
    minuti: function () {
      var lapsed = this.millisecondi;
      var m = Math.floor((lapsed / 60000) % 60);
      return this.formatTime(m);
    },
    secondi: function () {
      var lapsed = this.millisecondi;
      var s = Math.floor((lapsed / 1000) % 60);
      return this.formatTime(s);
    },
    decimi: function () {
      var lapsed = this.millisecondi;
      var ds = Math.floor((lapsed % 1000) / 10);
      return this.formatTime(ds);
    },
    millisecondi: function () {
      return this.currentTime - this.startTime;
    },
  },
  methods: {
    ...mapActions({
      setTime: "start/setTime",
    }),
    start: function () {
      this.startTime = Date.now();
      this.currentTime = Date.now();
      this.interval = setInterval(this.updateCurrentTime, 20);
    },
    reset: function () {
      this.startTime = Date.now();
      this.currentTime = Date.now();
    },
    stop: function () {
      clearInterval(this.interval);
      this.setTime(`${this.ore}:${this.minuti}:${this.secondi}.${this.decimi}`);
      console.log(this.$store.state.start.runtime);
    },
    updateCurrentTime: function () {
      this.currentTime = Date.now();
    },
    formatTime: function (val) {
      return val > 9 ? val : `0${val}`;
    },
  },
};
</script>
