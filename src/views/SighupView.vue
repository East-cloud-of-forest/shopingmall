<template>
  <v-container class="text-center grey lighten-5" style="min-width:100%; min-height:100%;">
    <v-main>
      <LogoComponenet style="width: 100px;" class="mx-auto mt-16 mb-10" />

      <router-view></router-view>
    </v-main>
  </v-container>
</template>

<script>
import LogoComponenet from '../components/LogoComponenet.vue'

export default {
  name: 'SighupView',
  data() {
    return {
    }
  },
  components: {
    LogoComponenet,
  },
}
</script>
