<template>
  <v-container>
    {{id}}
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.productId
    }
  },
  beforeCreate() {

  }
}
</script>