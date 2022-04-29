<template>
  <v-app>
    <v-btn-toggle
      title
      group
      mandatory
      color="orange accent-3"
      class="mx-auto mt-15"
      v-model="loginChoice"
    >
      <v-btn value="normal">
        일반회원 로그인
      </v-btn>
      <v-btn value="company">
        기업회원 로그인
      </v-btn>
      <v-btn value="none">
        비회원 배송조회
      </v-btn>
    </v-btn-toggle>

    <v-card max-width="423" class="mx-auto my-12 pa-5">
      <LoginCard
        v-if="loginChoice == 'normal' || loginChoice == 'company'"
        :loginchoice="loginChoice"
      />
      <NoneCard v-else />
    </v-card>
  </v-app>
</template>

<script>
import LoginCard from '../components/Login/LoginComponent.vue'
import NoneCard from '../components/Login/NoneComponenet.vue'

export default {
  data() {
    return {
      loginChoice: 'none',
    }
  },
  components: {
    LoginCard,
    NoneCard,
  },
}
</script>

<style>
.remember .v-label {
  font-size: 14px;
}

.findText {
  font-size: 13px !important;
}
</style>
