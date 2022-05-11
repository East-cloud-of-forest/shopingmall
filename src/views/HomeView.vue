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

    <v-row class="mx-1">
      <v-col cols="6" sm="3" v-for="a in 4" :key="a">
        <v-card outlined @click="'aa'">
          <v-img height="200" class="red"></v-img>
          <v-card-title>
            상품명
          </v-card-title>
          <v-card-text>
            상품설명
          </v-card-text>
          <v-card-text class="pt-0 body-1 black--text">
            가격 원
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>
