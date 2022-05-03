<template>
  <v-container style="width: 450px;">
    <v-checkbox>
      <template v-slot:label>
        <div class="black--text text-subtitle-1">
          토이쇼핑몰 이용약관, 개인정보 수집 및 이용, 프로모션 정보 수신(선택)에
          모두 동의합니다.
        </div>
      </template>
    </v-checkbox>

    <v-expansion-panels
      accordion multiple
      v-model="open" :readonly="true"
    >
      <v-expansion-panel v-for="(agree, i) in agreementform" :key="i">
        <v-expansion-panel-header class="text-body-1">
          <v-checkbox
            dense hide-details
            class="pa-0" v-model="agreement[i]"
            @click="agreemethod(i)"
          >
            <template v-slot:label>
              {{ agree.title }}
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
  </v-container>
</template>

<script>
import agreementform from '../../assets/agreement.js'
export default {
  data() {
    return {
      agreementform: agreementform,
      agreement: {
        0 : false,
        1 : false
      },
      open: [0, 1]
    }
  },
  methods: {
    agreemethod(i) {
      if (this.agreement[i]) {
        this.open.splice(i, 1, 999)
      } else {
        this.open.splice(i, 1, i)
      }
    }
  },
  computed: {

  }
}
</script>
