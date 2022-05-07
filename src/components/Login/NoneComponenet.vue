<template>
  <div>
    <v-card-subtitle class="pb-12">
      비회원 배송조회
    </v-card-subtitle>

    <v-card-actions>
      <v-row>
        <v-col cols="12" class="py-0">
          <v-text-field outlined label="주문자 이름" dense></v-text-field>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-text-field
            outlined
            label="E-mail"
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-text-field outlined label="주문 비밀번호" dense></v-text-field>
        </v-col>
      </v-row>
    </v-card-actions>

    <v-card-actions class="mt-0 pt-0 flex-column">
      <v-btn block color="deep-orange" dark large>
        배송조회
      </v-btn>
      <div class="justify-end mt-1 d-flex align-self-end">
        <v-btn text small color="grey" width="47%">
          <v-card-text class="findText"
            @click="$router.push('/forgot/none/password')"
          >주문 비밀번호 찾기</v-card-text>
        </v-btn>
        <v-btn text small color="grey" width="27%"
          @click="$router.push('/choice')"
        >
          <v-card-text class="findText">회원가입</v-card-text>
        </v-btn>
      </div>
    </v-card-actions>
  </div>
</template>
