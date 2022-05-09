<template>
  <v-app :style="{maxWidth:routerDynamicSize.bodySize, margin:'auto'}">
    <v-app-bar id="app-bar" color="white" flat :height="routerDynamicSize.size"
      :style="{display:routerDynamicSize.size==0?'none':'block'}"
    >
      <div class="d-flex align-center">
        <LogoComponenet style="width:40px;" class="mx-3" />
      </div>

      <v-text-field outlined dense id="serch" hide-details></v-text-field>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-btn icon class="mr-2" x-large>
        <v-icon x-large>mdi-shopping-outline</v-icon>
      </v-btn>
      <v-btn
        icon
        class="mr-2"
        x-large
        @click="$router.push('/login').catch(() => {})"
      >
        <v-icon x-large>mdi-account-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main min-height="100%">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import LogoComponenet from './components/LogoComponenet.vue'
export default {
  name: 'App',

  data: () => ({
  }),

  methods: {

  },

  computed: {
    routerDynamicSize() {
      let size = 120
      let bodySize = '1400px'
      switch(this.$route.name) {
        case "login" :
        case "forgot" :
          size = 80
          break
        case "unmade" :
        case "sighup" :
        case "sighupc1" :
        case "sighupc2" :
        case "sighupc3" :
          size = 0
          bodySize = '100%'
          break
      }
      return {size:size, bodySize:bodySize}
    },
  },

  components: {
    LogoComponenet
  }
}
</script>

<style>
#app-bar {
  border-bottom: 1px solid lightgrey !important;
}
</style>
