<template>
  <div>
    <v-img
      alt="Logo"
      contain
      src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
      transition="scale-transition"
      width="100%"
      :style="{ cursor: 'pointer' }"
      @click="$router.push('/').catch(() => {})"
    ></v-img>
  </div>
</template>
