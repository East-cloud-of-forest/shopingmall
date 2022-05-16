<template>
  <div>
    <v-row class="mt-16">
      <v-col cols="6">
        <v-img :src="product.img" width="100%"></v-img>
      </v-col>
      <v-col cols="6">
        <v-card flat>
          <v-card-title class="pt-0 font-weight-medium">{{
            product.name
          }}</v-card-title>
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

    };
  },
  computed: {
    product() {
      return this.$store.state.currentproduct;
    },
  },
  beforeCreate() {
    this.$store.dispatch("getCurrentProduct", this.$route.params.productId);
  },
  destroyed() {
    this.$store.commit('resetcurrentproduct')
  }
};
</script>
