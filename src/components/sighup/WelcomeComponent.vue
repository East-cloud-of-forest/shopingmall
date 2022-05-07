<template>
  <v-container>
    <h1 class="display-1 mb-3">회원가입이 완료되었습니다.</h1>
    <p class="body-1 mb-16">토이쇼핑몰에 가입하신걸 환영합니다.</p>
    <v-row>
      <v-col cols="4" offset="4">
        <v-btn color="orange" large dark block @click="$router.push('/login')">로그인</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>