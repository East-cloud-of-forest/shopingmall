<template>
  <v-container>
    <v-form
      v-if="nextSighup"
      class="mx-auto"
      style="width: 400px;"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-subheader>계정 정보</v-subheader>
      <v-text-field
        outlined
        label="아이디"
        v-model="user.id"
        :rules="[rules.required]"
        class="my-2"
        dense
      />
      <v-text-field
        outlined
        :rules="[rules.required]"
        label="비밀번호"
        class="my-2"
        v-model="user.password"
        dense
        append-icon="mdi-lock-outline"
        type="password"
      />
      <v-text-field
        outlined
        @focus="focus('p')"
        @focusout="focus('p')"
        :rules="[rules.required, focusrulep]"
        label="비밀번호 재확인"
        class="my-2"
        dense
        append-icon="mdi-lock-check-outline"
        type="password"
      />

      <v-subheader>회원 정보</v-subheader>
      <v-text-field
        outlined
        label="이름"
        v-model="user.name"
        :rules="[rules.required]"
        class="my-2"
        dense
      />

      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="slide-y-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="user.date"
            label="생년월일"
            append-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            :rules="[daterules]"
            v-on="on"
            outlined
            dense
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="user.date"
          color="orange lighten-2"
          :active-picker.sync="activePicker"
          :max="
            new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
              .toISOString()
              .substr(0, 10)
          "
          min="1900-01-01"
          @change="save"
        ></v-date-picker>
      </v-menu>

      <v-text-field
        @focus="focus('e')"
        @focusout="focus('e')"
        :rules="[rules.required, focusrulee]"
        v-model="user.email"
        outlined
        label="이메일"
        class="my-2"
        dense
      />

      <v-select
        outlined
        dense
        v-model="user.gender"
        label="성별"
        :items="['남', '여', '선택안함']"
        :rules="[rules.required]"
      ></v-select>

      <v-btn @click="sighup" x-large class="my-16 orange text-h6" dark block>
        가입하기
      </v-btn>
    </v-form>

    <AgreementComponent
      v-else
      @agreecomplete="agreeComplete"
      style="width: 460px;"
    />
  </v-container>
</template>

<script>
import AgreementComponent from './AgreementComponent.vue'

export default {
  components: {
    AgreementComponent,
  },
  data() {
    return {
      // 동의 후 회원가입 폼 이동
      nextSighup: false,
      // 날짜 선택 변수
      activePicker: null,
      menu: false,
      valid: true,
      // 폼 전부 입력시 검사
      formfocus: false,
      focustarget: '',
      // 날짜 입력폼 가입하기 눌렀을때만 검사
      daterules: true,
      // 폼 룰
      rules: {
        required: (value) => !!value || '필수 정보입니다.',
        password: (value) =>
          this.user.password == value || '입력하신 비밀번호와 다릅니다.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || '이메일 주소를 다시 확인해주세요.'
        },
      },
      user: {
        id: '',
        password: '',
        name: '',
        date: null,
        email: '',
        gender: '',
        agreement: {},
      },
    }
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  methods: {
    // 동의서 작성 완료
    agreeComplete(agreement) {
      this.nextSighup = true
      this.user.agreement = agreement
    },
    // 날짜 고르면 menu를 false 로 만들어줌
    save(date) {
      this.$refs.menu.save(date)
    },
    // 폼 전부 입력시 검사
    focus(t) {
      console.log(t)
      this.focustarget = t
      this.formfocus = !this.formfocus
    },
    // 회원가입 완료
    sighup() {
      // 날짜 입력폼 가입하기 눌렀을때만 검사
      this.daterules = this.rules.required
      this.$refs.form.validate()
      if (this.valid) {
        console.log(this.user)
        this.$router.push('/welcome')
      } else {
        console.log('no')
      }
    },
  },
  computed: {
    // 폼 전부 입력시 검사
    focusrulep() {
      let f = true
      if (this.focustarget == 'p') {
        f = this.rules.password
      }
      return this.formfocus ? true : f
    },
    focusrulee() {
      let f = true
      if (this.focustarget == 'e') {
        f = this.rules.email
      }
      return this.formfocus ? true : f
    },
  },
}
</script>
