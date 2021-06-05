<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">Il mio archivio</h1>
        <v-divider></v-divider>
        <br />
      </v-col>
      <v-col
        cols="12"
        class="text-center"
        v-for="(item, index) in archive"
        :index="index"
        :key="item._id"
      >
        <v-col cols="12">
          <v-card>
            <v-row>
              <v-col cols="6" md="3"
                ><v-icon>mdi-calendar-range</v-icon>
                {{ new Date(item.date).toLocaleDateString("it-IT") }}</v-col
              >
              <v-col cols="6" md="3"
                ><v-icon>mdi-shoe-print</v-icon>
                {{
                  item.meters >= 1000
                    ? `${(item.meters / 1000).toFixed(3)} km`
                    : `${item.meters} m`
                }}</v-col
              >
              <v-col cols="6" md="3"
                ><v-icon>mdi-timer</v-icon> {{ item.time }}
              </v-col>
              <v-col cols="6" md="3">
                <v-btn
                  depressed
                  v-on:click.native.stop="deleteRunAction(item._id)"
                  color="red white--text"
                  dark
                >
                  <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Archivio",
  data: () => {
    return {};
  },
  watch: {
    archive: function() {
      this.archive = this.$store.state.auth.archive
        ? Object.values(this.$store.state.auth.archive)
        : "";
      return;
    },
  },
  computed: {
    ...mapGetters({
      archive: "auth/archive",
    }),
  },
  methods: {
    ...mapActions({
      deleteRun: "auth/deleteRun",
    }),
    deleteRunAction(id) {
      this.deleteRun(id);
    },
  },
};
</script>
