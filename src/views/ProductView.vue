<template>
  <div>
    <v-row class="mt-16">
      <v-col cols="6">
        <v-img :src="mainimg" width="100%"></v-img>
        <v-card flat>
          <v-row v-if="product.addimg.length > 0">
            <v-col cols="3">
              <v-img
                :src="product.img"
                @mouseover="changeImg(product.img)"
              ></v-img>
            </v-col>
            <v-col
              class="d-flex"
              cols="3"
              v-for="(addimg, i) in product.addimg"
              :key="i"
            >
              <v-img :src="addimg" @mouseover="changeImg(addimg)"></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card flat>
          <v-card-text class="pt-0 black--text">
            <p class="text-h5 font-weight-bold">
              {{ product.name }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <h1>{{ product }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainimg: this.$store.state.currentproduct.img,
    }
  },
  computed: {
    product() {
      return this.$store.state.currentproduct
    },
  },
  methods: {
    changeImg(src) {
      this.mainimg = src
    },
  },
  beforeCreate() {
    this.$store.dispatch('getCurrentProduct', this.$route.params.productId)
  },
  created() {
    this.mainimg =  this.$store.state.currentproduct.img
  },
  destroyed() {
    this.$store.commit('resetcurrentproduct')
  },
}
</script>
