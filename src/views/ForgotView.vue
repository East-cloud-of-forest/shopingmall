<template>
  <v-app>
    <div class="mx-auto mt-16 text-center">
      <h2>{{ title }}</h2>

      <v-btn-toggle mandatory group class="mt-5" v-model="way">
        <v-btn width="150" value="email">이메일 인증</v-btn>
        <v-btn value="phone" v-if="target !== 'none'" width="150">
          휴대폰번호 인증
        </v-btn>
      </v-btn-toggle>

      <v-card
        max-width="423"
        elevation="0"
        tile
        outlined
        class="mx-auto my-12 pa-5"
      >
        <IdForgotComponenet
          :way="way" v-if="kind=='id'&&way=='email'"
        />
        <PasswordForgotComponenet
          :way="way" v-else-if="kind=='password'&&way=='email'"
        />

        <div v-else>
          <v-btn block color="red" dark large
            @click="$store.commit('unmade')"
          >핸드폰 인증</v-btn>
        </div>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import IdForgotComponenet from '../components/forgot/IdForgotComponenet.vue'
import PasswordForgotComponenet from '../components/forgot/PasswordForgotComponenet.vue'

export default {
  data() {
    return {
      target: this.$route.params.target,
      kind: this.$route.params.kind,
      way: 'email',
    }
  },
  computed: {
    title() {
      let target = ''
      let kind = ''
      switch (this.target) {
        case 'normal':
          target = '개인회원'
          break
        case 'company':
          target = '기업회원'
          break
        case 'none':
          target = '비회원 주문'
          break
      }

      switch (this.kind) {
        case 'id':
          kind = '아이디 찾기'
          break
        case 'password':
          kind = '비밀번호 찾기'
          break
      }
      return target + ' ' + kind
    },
  },
  components: {
    IdForgotComponenet,
    PasswordForgotComponenet,
  },
}
</script>
