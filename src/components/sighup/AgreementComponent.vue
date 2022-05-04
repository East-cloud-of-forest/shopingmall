<template>
  <v-container>
    <v-checkbox v-model="allagree" color="orange">
      <template v-slot:label>
        <div class="black--text text-subtitle-1">
          토이쇼핑몰 이용약관, 개인정보 수집 및 이용, 프로모션 정보 수신(선택)에
          모두 동의합니다.
        </div>
      </template>
    </v-checkbox>

    <v-expansion-panels accordion multiple v-model="open" :readonly="true">
      <v-expansion-panel v-for="(agree, i) in agreementform" :key="i">
        <v-expansion-panel-header>
          <v-checkbox
            dense
            hide-details
            class="pa-0"
            v-model="agreement[i]"
            @click="agreemethod(i)"
            color="orange"
          >
            <template v-slot:label>
              <p v-html="agree.title" class="text-body-1 black--text ma-0"></p>
            </template>
          </v-checkbox>
        </v-expansion-panel-header>

        <v-expansion-panel-content
          style="max-height: 230px; overflow: auto;"
          class="text-left"
        >
          <p v-html="agree.content" class="text-body-2"></p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <p class="mt-16 text-body-2 red--text" v-if="noagree">토이쇼필몰 이용약관 동의와 <br> 개인정보 수집 및 이용 동의에 동의해주세요.</p>

    <div class="my-16">
      <v-btn class="mr-3" x-large width="150"
        @click="$router.push('/')"
      >취소</v-btn>
      <v-btn class="ml-3 orange" dark x-large width="150"
        @click="agreecomplete"
      >확인</v-btn>
    </div>
  </v-container>
</template>

<script>
import agreementform from '../../assets/agreement.js'

export default {
  data() {
    return {
      agreementform: agreementform,
      agreement: {
        0: false,
        1: false,
        2: false,
      },
      open: [0, 1, 2],
      noagree: false
    }
  },
  methods: {
    // 동의하면 패널 닫기
    agreemethod(i) {
      if (this.agreement[i]) {
        this.open.splice(i, 1, 999)
      } else {
        this.open.splice(i, 1, parseInt(i))
      }
    },

    agreecomplete() {
      if (this.agreement[0] && this.agreement[1]) {
        this.$emit('agreecomplete', this.agreement)
      } else {
        this.noagree = true
      }
    }
  },
  computed: {
    // 전체 동의와 개별 동의 연결
    allagree: {
      get() {
        let allagree = false
        if (this.agreement[0] && this.agreement[1] && this.agreement[2]) {
          allagree = true
        }
        return allagree
      },
      set(agree) {
        if (agree) {
          for (let i in this.agreement) {
            this.agreement[i] = true
            this.agreemethod(i)
          }
        } else {
          for (let i in this.agreement) {
            this.agreement[i] = false
            this.agreemethod(i)
          }
        }
      },
    },
  },
}
</script>