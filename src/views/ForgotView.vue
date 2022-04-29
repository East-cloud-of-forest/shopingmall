<template>
  <v-app>
    <div class="mx-auto mt-16 text-center">
      <h2>{{title}}</h2>

      <v-btn-toggle mandatory group width="100%" class="mt-5">
        <v-btn width="150">E-mail 인증</v-btn>
        <v-btn width="150">휴대폰번호 인증</v-btn>
      </v-btn-toggle>
    </div>
  </v-app>
</template>

<script>
export default {
  computed: {
    title() {
      let title = ''
      switch(this.$route.params.target) {
        case 'normalid':
          title = '개인회원 아이디 찾기'
          break
        case 'normalpassword':
          title = '개인회원 비밀번호 찾기'
          break
        case 'companyid':
          title = '기업회원 아이디 찾기'
          break
        case 'companypassword':
          title = '기업회원 아이디 찾기'
          break
        case 'nonepassword':
          title = '비회원 주문 비밀번호 찾기'
          break
      }
      return title
    }
  }
}
</script>