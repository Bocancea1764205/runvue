<template>
  <v-app>
    <h1 class="text-center" color="deep-orange">About</h1>
    <v-divider></v-divider>
    <br />
    <v-row dense>
      <v-card class="mx-auto" max-width="380">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>

        <v-card-title>
          Mihai Dragos Bocancea
        </v-card-title>

        <v-card-subtitle>
          <v-icon color="blue">mdi-twitter</v-icon>
          <a href="https://twitter.com/ABuccarella">@MihaiDragosBocancea</a>
        </v-card-subtitle>

        <v-btn color="deep-orange" text>
          Di più su di me:
        </v-btn>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he
          could deliver. You won't have time for sleeping, soldier, not with all
          the bed making you'll be doing. Then we'll go with that data file!
          Hey, you add a one and two zeros to that or we walk! You're going to
          do his laundry? I've got to find a way to escape. I'm a thing. But,
          like most politicians, he promised more than he could deliver. You
          won't have time for sleeping, soldier, not with all the bed making
          you'll be doing. Then we'll go with that data file! Hey, you add a one
          and two zeros to that or we walk! You're going to do his laundry? I've
          got to find a way to escape
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
          <v-icon color="blue">mdi-twitter</v-icon>
          <a href="https://twitter.com/ABuccarella">@ABuccarella</a>
        </v-card-subtitle>

        <v-btn color="deep-orange" text>
          Di più su di me:
        </v-btn>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he
          could deliver. You won't have time for sleeping, soldier, not with all
          the bed making you'll be doing. Then we'll go with that data file!
          Hey, you add a one and two zeros to that or we walk! You're going to
          do his laundry? I've got to find a way to escape. I'm a thing. But,
          like most politicians, he promised more than he could deliver. You
          won't have time for sleeping, soldier, not with all the bed making
          you'll be doing. Then we'll go with that data file! Hey, you add a one
          and two zeros to that or we walk! You're going to do his laundry? I've
          got to find a way to escape
        </v-card-text>
      </v-card>
    </v-row>
    <br />
  </v-app>
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
