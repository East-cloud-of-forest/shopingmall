<template>
  <v-app class="text-center grey lighten-4">
    <v-main>
      <LogoComponenet style="width: 100px;" class="mx-auto mt-16 mb-10" />

      <p class="text-h4 d-inline-block text-left">
        안녕하세요.
        <br />
        토이쇼핑몰 입니다.
      </p>
      <br />
      <p class="text-body-2 grey--text d-inline-block text-left">
        포트폴리오를 위한 가상 브랜드 사이트 입니다.
        <br />
        회원가입시 입력하신 정보는 저장되지 않습니다.
      </p>
      <br />

      <v-btn
        class="ma-10"
        outlined
        color="grey"
        v-for="kind in kind"
        :key="kind"
        style="background: white;"
        width="200"
        height="200"
      >
        <div>
          <h1 :class="kind == 'normal' ? 'orange--text' : 'deep-orange--text'">
            {{ kind == 'normal' ? '개인' : '사업자' }}
          </h1>
          <p class="ma-0 black--text">회원가입</p>
        </div>
      </v-btn>
    </v-main>
  </v-app>
</template>

<script>
import LogoComponenet from '../components/LogoComponenet.vue'
export default {
  name: 'SighupView',
  data() {
    return {
      kind: ['normal', 'company'],
    }
  },
  components: {
    LogoComponenet,
  },
}
</script>
