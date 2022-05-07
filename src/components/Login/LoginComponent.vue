<template>
  <div>
    <v-card-subtitle v-if="loginchoice == 'normal'" class="pb-12">
      일반회원 로그인
    </v-card-subtitle>
    <v-card-subtitle v-if="loginchoice == 'company'" class="pb-12">
      사업자회원 로그인
    </v-card-subtitle>

    <v-card-actions>
      <v-row>
        <v-col cols="12" class="py-0">
          <v-text-field outlined label="ID" dense></v-text-field>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-text-field outlined label="Password" dense></v-text-field>
        </v-col>
      </v-row>
    </v-card-actions>

    <v-card-actions class="mt-0 pt-0 flex-column">
      <v-checkbox
        label="ID 기억하기"
        color="orange"
        hide-details
        dense
        class="mt-0 mb-5 align-self-start remember"
      ></v-checkbox>
      <v-btn block color="orange" dark large>
        LOGIN
      </v-btn>
      <div class="justify-end mt-1 d-flex">
        <v-btn text small color="grey" width="20%">
          <v-card-text class="findText"
            @click="$router.push('/forgot/'+loginchoice+'/id')"
          >아이디 찾기</v-card-text>
        </v-btn>
        <v-btn text small color="grey" width="24%"
          @click="$router.push('/forgot/'+loginchoice+'/password')"
        >
          <v-card-text class="findText">비밀번호 찾기</v-card-text>
        </v-btn>
        <v-btn text small color="grey" width="15%"
          @click="$router.push('/choice')"
        >
          <v-card-text class="findText">회원가입</v-card-text>
        </v-btn>
      </div>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  props: {
    loginchoice: String,
  },
}
</script>
