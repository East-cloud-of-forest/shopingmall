<template>
  <v-container style="width: 450px;">

    <div v-if="nextSighup"></div>
    <AgreementComponent v-else @agreecomplete="agreeComplete" />


  </v-container>
</template>

<script>
import AgreementComponent from './AgreementComponent.vue'

export default {
  components: {
    AgreementComponent
  },
  data() {
    return {
      nextSighup: false,
      agreement: {},
    }
  },
  methods: {
    agreeComplete(agreement) {
      this.nextSighup = true
      this.agreement = agreement
    }
  },
}
</script>
