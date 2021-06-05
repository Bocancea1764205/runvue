<template>
  <v-container pa-0>
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

        <Tracking />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import store from "../store";
import Stopwatch from "@/components/Stopwatch";

import Tracking from "@/components/Tracking";

export default {
  store,
  components: {
    Stopwatch,

    Tracking,
  },
  data: () => ({
    //
  }),
  name: "Run",
};
</script>
