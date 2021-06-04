<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card elevation="11">
          <h1 class="text-center" color="deep-orange">About</h1>
          <v-divider></v-divider>
          <br />
          <v-row>
            <v-card class="mx-auto" max-width="350" min-width="350">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                height="200px"
              ></v-img>

              <v-card-title>
                Mihai Dragos Bocancea
              </v-card-title>

              <v-card-subtitle>
                <ul>
                  <li>
                    <v-icon color="yellow">mdi-email</v-icon>
                    bocancea.1764205@studenti.uniroma1.it
                  </li>
                  <li>
                    <v-icon color="blue">mdi-twitter</v-icon
                    ><a href="https://twitter.com">@MihaiDragosBocancea</a>
                  </li>
                </ul>
              </v-card-subtitle>

              <v-btn color="deep-orange" text>
                Di più su di me:
              </v-btn>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape. I'm a thing. But, like most politicians, he promised
                more than he could deliver. You won't have time for sleeping,
                soldier, not with all the bed making you'll be doing. Then we'll
                go with that data file! Hey, you add a one and two zeros to that
                or we walk! You're going to do his laundry? I've got to find a
                way to escape.
              </v-card-text>
            </v-card>

            <v-card class="mx-auto" max-width="380">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>

              <v-card-title>
                Alessio Buccarella
              </v-card-title>

              <v-card-subtitle>
                <ul>
                  <li>
                    <v-icon color="yellow">mdi-email</v-icon>
                    buccarella.1852198@studenti.uniroma1.it
                  </li>
                  <li>
                    <v-icon color="blue">mdi-twitter</v-icon
                    ><a href="https://twitter.com/ABuccarella">@ABuccarella</a>
                  </li>
                </ul>
              </v-card-subtitle>

              <v-btn color="deep-orange" text>
                Di più su di me:
              </v-btn>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape. I'm a thing. But, like most politicians, he promised
                more than he could deliver. You won't have time for sleeping,
                soldier, not with all the bed making you'll be doing. Then we'll
                go with that data file! Hey, you add a one and two zeros to that
                or we walk! You're going to do his laundry? I've got to find a
                way to escape.
              </v-card-text>
            </v-card>
          </v-row>
          <br />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "About",
  data: () => ({
    show: false,
    show2: false,
  }),
};
</script>
