<template>
  <v-app>
    <v-app-bar id="app-bar" color="white" flat :height="appberSize"
      :style="{display: this.$route.name=='unmade'?'none':'block'}"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="mx-3"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
          :style="{cursor:'pointer'}"
          @click="LogoClick"
        />
      </div>

      <v-text-field outlined dense id="serch" hide-details></v-text-field>

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

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),

  methods: {
    LogoClick() {
      this.$router.push('/').catch(() => {})
    },
  },

  computed: {
    appberSize() {
      let size = 120
      switch(this.$route.name) {
        case "login" :
        case "forgot" :
          size = 80
          break
      }
      return size
    },
  },
}
</script>

<style>
body {
  max-width: 1400px;
  margin: auto;
}

#app-bar {
  border-bottom: 1px solid lightgrey !important;
}
</style>
