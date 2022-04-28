<template>
  <v-app>
    <v-app-bar id="app-bar"
      color="white" flat
      height="150"
    >
      <div class="d-flex align-center">
        <v-btn
          text height="100%" width="100%"
          @click="LogoClick"
        >
          <v-img
            alt="Vuetify Logo"
            class="shrink"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />
        </v-btn>
      </div>

      <v-text-field
        outlined dense
        id="serch"
      ></v-text-field>

      <v-spacer></v-spacer>

      <v-btn
        icon class="mr-2"
        x-large
      >
        <v-icon x-large>mdi-shopping-outline</v-icon>
      </v-btn>
      <v-btn
        icon class="mr-2"
        x-large
        @click="$router.push('/login').catch(()=>{})"
      >
        <v-icon x-large>mdi-account-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
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
      this.$router.push('/').catch(()=>{})
    }
  },
};
</script>

<style>
  body {
    max-width: 1400px;
    margin: auto;
  }

  #app-bar {
    border-bottom: 1px solid black !important;
  }

  #app-bar .v-text-field__details {
    display: none;
  }

  #app-bar .v-input__slot {
    margin-bottom: 0;
  }
</style>
