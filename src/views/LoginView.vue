<template>
  <v-container>
    <v-btn-toggle
      group
      mandatory
      style="display:block;"
      color="orange accent-3"
      class="text-center mt-15"
      v-model="loginChoice"
    >
      <v-btn value="normal"> 일반회원 로그인 </v-btn>
      <v-btn value="company"> 판매자회원 로그인 </v-btn>
      <v-btn value="none"> 비회원 배송조회 </v-btn>
    </v-btn-toggle>

    <v-card
      max-width="423"
      elevation="0"
      tile
      outlined
      class="mx-auto my-12 pa-5"
    >
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
      <div class="text-center">
        <v-btn large color="white" class="my-5" @click="googleLogin">
          <v-img :src="googlelogo" alt="googlelogo" width="60" />
          <p class="grey--text text--darken-2 ma-0 subtitle-2 font-weight-medium text-capitalize">
            Google 계정으로 로그인 하기
          </p>
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import LoginCard from "../components/Login/LoginComponent.vue";
import NoneCard from "../components/Login/NoneComponenet.vue";
import googlelogo from "@/assets/googleicon.svg";

export default {
  data() {
    return {
      loginChoice: "normal",
      googlelogo: googlelogo,
    };
  },
  components: {
    LoginCard,
    NoneCard,
  },
  methods: {
    googleLogin() {},
  },
};
</script>

<style>
.remember .v-label {
  font-size: 14px;
}

.findText {
  font-size: 13px !important;
}
</style>
