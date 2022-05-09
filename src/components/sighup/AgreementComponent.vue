<template>
  <v-container>
    <v-checkbox v-model="allagree" color="orange">
      <template v-slot:label>
        <div
          class="black--text text-subtitle-1"
          v-if="$route.params.kind == 'normal'"
        >
          토이쇼핑몰 이용약관, 개인정보 수집 및 이용, 프로모션 정보 수신(선택)에
          모두 동의합니다.
        </div>
        <div class="black--text text-subtitle-1" v-else>
          토이쇼핑몰 이용약관, 개인정보 수집 및 이용, 전자금융거래약관, 세금납부
          관련 유의사항 확인, 프로모션 정보 수신(선택)에 모두 동의합니다.
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
          style="max-height: 230px; overflow: auto"
          class="text-left"
        >
          <p v-html="agree.content" class="text-body-2"></p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <p class="mt-16 text-body-2 red--text" v-if="noagree">
      필수 동의 항목에 동의해주세요.
    </p>

    <div class="my-16">
      <v-btn class="mr-3" x-large width="150" @click="$router.push('/')">
        취소
      </v-btn>
      <v-btn
        class="ml-3 orange"
        dark
        x-large
        width="150"
        @click="agreecomplete"
      >
        확인
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import agreementform from "../../assets/agreement.js";

export default {
  data() {
    return {
      agreementform: "",
      agreement: {},
      necessary: {},
      open: [],
      noagree: false,
    };
  },
  methods: {
    // 동의하면 패널 닫기
    agreemethod(i) {
      if (this.agreement[i]) {
        this.open.splice(i, 1, 999);
      } else {
        this.open.splice(i, 1, parseInt(i));
      }
      if (this.necessary[i] !== undefined) {
        this.necessary[i] = this.agreement[i];
      }
    },

    // 필수 동의서 동의 시 진행
    agreecomplete() {
      let necessaryagree = Object.values(this.necessary).every(
        (agree) => agree == true
      );
      if (necessaryagree) {
        this.$emit("agreecomplete", this.agreement);
      } else {
        this.noagree = true;
      }
    },
  },
  computed: {
    // 전체 동의와 개별 동의 연결
    allagree: {
      get() {
        return Object.values(this.agreement).every((agree) => agree == true);
      },
      set(agree) {
        if (agree) {
          for (let i in this.agreement) {
            this.agreement[i] = true;
            this.agreemethod(i);
          }
        } else {
          for (let i in this.agreement) {
            this.agreement[i] = false;
            this.agreemethod(i);
          }
        }
      },
    },
  },
  created() {
    // 동의서 가입 유형에 따라 변경
    if (this.$route.params.kind == "normal") {
      this.agreementform = agreementform.filter((e) => e.kind == "normal");
    } else {
      this.agreementform = agreementform;
    }
    // 변경된 동의서에 따라 동의서 펼치는 데이터, 동의 데이터 할당
    // created 에서 배열 및 객체 추가시 $set 을 이용해야 동적 감시 가능
    for (let i in this.agreementform) {
      this.$set(this.open, i, parseInt(i))
      this.$set(this.agreement, i, false)
      // 필수 동의서 데이터 할당
      if (this.agreementform[i].necessary == true) {
        this.$set(this.necessary, i, false)
      }
    }
  },
};
</script>
