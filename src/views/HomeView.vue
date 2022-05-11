<template>
  <v-app>
    <v-row>
      <v-col cols="12" sm="10" offset="0" offset-sm="1">
        <v-carousel
          :show-arrows="false"
          hide-delimiter-background
          cycle
          delimiter-icon="mdi-minus"
        >
          <v-carousel-item v-for="a in 5" :key="a">
            <v-sheet color="orange" height="500">
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2">{{ a }} Slide</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>
