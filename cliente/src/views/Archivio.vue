<template v-if="authenticated">
  <v-container spacing-playground pa-3>
    <div>
      <v-expansion-panels>
        <v-expansion-panel
          v-for="(item, index) in archive"
          :index="index"
          :key="item._id"
        >
          <v-expansion-panel-header>
            <v-row align="center">
              <v-col cols="6" sm="3"
                ><v-icon>mdi-calendar-range</v-icon>
                {{ new Date(item.date).toLocaleDateString("it-IT") }}</v-col
              >
              <v-col cols="6" sm="3"
                ><v-icon>mdi-shoe-print</v-icon> {{ item.meters }}</v-col
              >
              <v-col cols="6" sm="3"
                ><v-icon>mdi-timer</v-icon> {{ item.time }}
              </v-col>
              <v-col cols="6" sm="3"
                ><v-btn
                  depressed
                  v-on:click.native.stop="deleteRunAction(item._id)"
                  color="red white--text"
                >
                  <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content> v-card </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
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
      return this.$store.state.auth.archive
        ? Object.values(this.$store.state.auth.archive)
        : "";
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
