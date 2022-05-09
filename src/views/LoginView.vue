<template>
  <v-app>
    <v-btn-toggle
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
        판매자회원 로그인
      </v-btn>
      <v-btn value="none">
        비회원 배송조회
      </v-btn>
    </v-btn-toggle>

    <v-card max-width="423" elevation="0" tile outlined class="mx-auto my-12 pa-5">
      <LoginCard
        v-if="loginChoice == 'normal' || loginChoice == 'company'"
        :loginchoice="loginChoice"
      />
      <NoneCard v-else />

      <div class="d-flex align-center">
        <v-divider></v-divider>
        <v-card-subtitle class="orange--text">OR</v-card-subtitle>
        <v-divider></v-divider>
      </div>
      <v-img
        :src="require(`../assets/btn_google_signin_light_normal_web@2x.png`)"
        @click="googleLogin"
        :style="{ cursor: 'pointer' }"
        max-width="196"
        block
        class="mx-auto"
      ></v-img>
    </v-card>
  </v-app>
</template>

<script>
import LoginCard from '../components/Login/LoginComponent.vue'
import NoneCard from '../components/Login/NoneComponenet.vue'

export default {
  data() {
    return {
      loginChoice: 'normal',
    }
  },
  components: {
    LoginCard,
    NoneCard,
  },
  methods: {
    googleLogin() {

    }
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
