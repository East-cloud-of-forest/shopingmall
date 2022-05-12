<template>
  <v-app
    :style="{
      maxWidth: $route.meta.hideAppbar ? '100%' : '1400px',
      margin: 'auto',
    }"
  >
    <v-app-bar
      id="app-bar"
      color="white"
      flat
      app
      v-if="!$route.meta.hideAppbar"
      hide-on-scroll
      max-width="1400"
      class="mx-auto"
    >
      <v-row class="my-0">
        <v-col cols="12" class="d-flex align-center">
          <div class="d-flex align-center">
            <LogoComponenet style="width: 40px;" class="mx-3" />
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
        </v-col>
      </v-row>

      <template v-slot:extension>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text class="body-2 mr-2" large v-bind="attrs" v-on="on">
              <v-icon dense class="mr-1">mdi-menu</v-icon>
              전체상품
            </v-btn>
          </template>
          <v-list-item-group class="white">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-menu</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="'aaa'"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-menu</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="'aaa'"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-menu>
        <span class="body-2 grey--text mr-1">|</span>
        <v-btn
          text
          class="body-2 mx-1"
          large
          v-for="(n, i) in navMenu"
          :key="i"
        >
          <v-icon dense class="mr-1">{{ n.icon }}</v-icon>
          {{ n.text }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text class="body-2" large>
          <v-icon dense class="mr-1">mdi-calendar-text</v-icon>
          이벤트
        </v-btn>
      </template>
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
    navMenu: [
      {
        icon: 'mdi-alarm',
        text: '타임특가',
        router: '',
      },
      {
        icon: 'mdi-new-box',
        text: '신규상품',
        router: '',
      },
    ],
  }),

  methods: {},

  computed: {},

  components: {
    LogoComponenet,
  },

  beforeCreate() {
    this.$store.dispatch('getToyData')
  },
}
</script>

<style>
#app-bar {
  border-bottom: 1px solid lightgrey !important;
}

b {
  font-weight: 500;
}
</style>
