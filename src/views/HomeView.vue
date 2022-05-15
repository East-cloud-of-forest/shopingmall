<template>
  <v-app>
    <v-row>
      <v-col cols="12">
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
      <v-col
        cols="6"
        sm="3"
        lg="2"
        v-for="product in mainproduct"
        :key="product.productId"
      >
        <v-card flat @click="goProductDetail(product.productId)">
          <v-hover v-slot="{ hover }">
            <v-img height="200" class="red" :src="product.image">
              <v-scroll-y-reverse-transition>
                <v-btn
                  v-if="hover"
                  transition="scale-transition"
                  fab
                  elevation="0"
                  color="orange"
                  dark
                  dense
                  class="mx-auto"
                  style="display: block; position: relative; top: 65%"
                  @click.stop=""
                >
                  <v-icon>mdi-cart-outline</v-icon>
                </v-btn>
              </v-scroll-y-reverse-transition>
            </v-img>
          </v-hover>
          <v-card-text
            v-html="'<b>' + product.title + '</b>'"
            style="
              white-space: normal !important;
              overflow: hidden !important;
              text-overflow: ellipsis !important;
              display: -webkit-box;
              -webkit-line-clamp: 2 !important;
              -webkit-box-orient: vertical;
              height: 44px;
            "
            class="py-0 mt-4 black--text"
          ></v-card-text>
          <v-card-text> 배송 : {{ product.delivery }} </v-card-text>
          <v-card-text
            class="text-end pt-0 body-1 font-weight-medium black--text"
          >
            {{ parseInt(product.lprice).toLocaleString("ko-KR") }} 원
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    goProductDetail(id) {
      this.$router.push('/product/'+id)
    },
    aa() {
      console.log(1);
    },
  },
  computed: {
    mainproduct() {
      return this.$store.state.mainproduct;
    },
  },
  beforeCreate() {
    this.$store.dispatch("getMainToyData");
  },
};
</script>
