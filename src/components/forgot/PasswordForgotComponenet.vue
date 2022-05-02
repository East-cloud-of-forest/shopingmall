<template>
  <div v-if="way == 'email'">
    <v-card-title>
      이메일 인증
    </v-card-title>

    <v-card-subtitle class="grey--text mb-5" v-if="target!=='none'">
      회원정보에 입력된 이메일로 찾을 수 있습니다.
    </v-card-subtitle>

    <v-card-subtitle class="grey--text mb-5" v-else>
      주문시 입력된 이메일로 찾을 수 있습니다.
    </v-card-subtitle>

    <v-text-field outlined v-if="target!=='none'" label="아이디" dense />
    <v-text-field outlined label="이름" dense />
    <v-text-field outlined label="이메일" dense class="mb-5" />
    <v-btn block color="orange" dark>확인</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      target: this.$route.params.target,
    }
  }
}
</script>