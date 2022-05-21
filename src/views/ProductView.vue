<template>
  <div style="max-width: 1200px" class="mx-auto">
    <v-row class="mt-16">
      <!-- 상품 이미지 -->
      <v-col cols="6">
        <v-img :src="product.img[parseInt(imgindex)]" width="100%"></v-img>
        <v-card flat>
          <v-row v-if="product.img.length > 1">
            <v-col
              class="d-flex"
              cols="3"
              v-for="(img, i) in product.img"
              :key="i"
            >
              <v-img :src="img" @mouseover="changeImg(i)"></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- 상품 정보 -->
      <v-col cols="6">
        <v-card flat class="pa-5 pt-0">
          <!-- 판매자 정보 -->
          <v-subheader>
            <v-icon dense>mdi-home-outline</v-icon>
            <span class="text-subtitle-1 success--text">{{ sellernick }}</span>
            <span class="mx-2">|</span>
            <span>{{ sellerid }}</span>
          </v-subheader>
          <!-- 상품 이름 -->
          <v-card-text class="pt-0 black--text">
            <p class="text-h5 font-weight-bold ma-0">
              {{ product.name }}
            </p>
          </v-card-text>
          <!-- 상품 가격 -->
          <v-card-text class="pt-0">
            <table width="100%">
              <tr class="text-body-1 orange--text text--darken-3" v-if="sale">
                <td rowspan="2" width="20%" class="red--text text-h4">
                  {{ sale.discount }}%
                </td>
                <td width="20%">판매가</td>
                <td>
                  <span
                    class="text-decoration-line-through text-caption mr-2 grey--text"
                    >{{ product.price }}</span
                  >{{ sale.sprice }}원
                </td>
              </tr>
              <tr class="text-body-1 orange--text text--darken-3" v-else>
                <td width="20%">판매가</td>
                <td>{{ product.price }}</td>
              </tr>
              <tr class="text-body-2">
                <td width="20%">배송비</td>
                <td>{{ product.ship }}</td>
              </tr>
            </table>
          </v-card-text>
          <!-- 옵션 선택 부분 -->
          <v-card-actions>
            <v-select
              outlined
              dense
              v-for="option in options"
              :key="option.order"
              :label="option.name"
              :items="option.value"
              v-model="selectoption"
              item-text="name"
              return-object
              hide-details
              @change="changeoption"
            >
              <template #selection="{ item }">
                <div>
                  {{ item.name }}
                </div>
              </template>
              <template #item="{ item }">
                <div style="width: 100%">
                  <p class="blakc--text mt-3 mb-0">{{ item.name }}</p>
                  <p class="text-end text-h6 orange--text mb-3">
                    {{ item.price }}
                  </p>
                </div>
              </template>
            </v-select>
          </v-card-actions>
          <!-- 선택된 옵션 -->
          <v-card-actions>
            <v-card width="100%" outlined max-height="350" style="overflow:auto;">
              <!-- 옵션이 선택되지 않았을때 -->
              <v-card-title v-if="!selectoptions.length > 0" class="grey--text">
                옵션을 선택해주세요
              </v-card-title>
              <!-- 옵션이 선택되었을 때 -->
              <div v-else v-for="(item, i) in selectoptions" :key="i + '-' + item.order">
                <div class="d-flex align-center pr-4">
                  <v-card-title class="py-2">{{ item.name }}</v-card-title>
                  <!-- 옵션 삭제 -->
                  <v-btn icon @click="deleteoption(item.name)">
                    <v-icon color="grey lighten-1">mdi-delete-forever</v-icon>
                  </v-btn>
                </div>
                <!-- 옵션 갯수설정 -->
                <div class="d-flex">
                  <v-card-actions class="px-4 py-3">
                    <v-btn
                      tile
                      outlined
                      height="100%"
                      min-width="40"
                      class="pa-0"
                      color="success"
                      @click="selectcountchange('up', i)"
                      ><span class="text-h5">+</span>
                    </v-btn>
                    <v-text-field
                      outlined
                      dense
                      class="mx-1 d-flex text-center product-input"
                      hide-spin-buttons
                      type="number"
                      hide-details
                      style="width: 60px"
                      v-model="item.selectcount"
                      :rules="[selectoptionrule]"
                      @focus="formfocus = true"
                      @focusout="formfocus = false"
                    ></v-text-field>
                    <v-btn
                      tile
                      outlined
                      height="100%"
                      min-width="40"
                      class="pa-0"
                      color="error"
                      @click="selectcountchange('down', i)"
                      ><span class="text-h5">-</span>
                    </v-btn>
                  </v-card-actions>
                  <!-- 옵션 총 금액 -->
                  <v-card-text class="orange--text text-h6 justify-end py-2 d-flex align-center">
                    {{(item.intprice * item.selectcount).toLocaleString("ko-KR")}} 원
                  </v-card-text>
                </div>
              </div>
            </v-card>
          </v-card-actions>
          <!-- 선택된 총 금액 -->
          <v-card-text class="d-flex justify-between align-center py-2" v-if="selectoptions.length > 0">
            <p class="mr-5 mb-0">총 상품금액</p>
            <h2 class="deep-orange--text">{{allprice.toLocaleString("ko-KR")}} 원</h2>
          </v-card-text>
          <!-- 결정 부분 -->
          <v-card-actions v-if="selectoptions.length > 0" class="d-flex">
            <v-btn
              outlined
              v-for="(btn, i) in [{name: '장바구니', color: 'pink accent-3'}, {name: '구매하기', color: 'deep-orange'}]"
              :key="i"
              x-large
              width="49%"
              class="ma-0"
              :color="btn.color"
            >{{btn.name}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <h1>{{ product }}</h1>
    <h1>{{ $route.params }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgindex: 0,
      sale: this.$route.params.sale,
      sellerid: this.$route.params.currentinfo.sellerid,
      sellernick: this.$route.params.currentinfo.sellernick,
      selectoption: '',
      selectoptions: [],
      rules: {
        selectcount: (v) => {
          let value = v > 0 && v < 991 ? true : false;
          if (!value) {
            alert("수량은 1 ~ 990 만 입력 가능합니다.");
            this.selectcount = 1;
          }
          return value;
        },
      },
      formfocus: false,
    };
  },
  computed: {
    product() {
      return this.$store.state.currentproduct;
    },
    options() {
      return this.$store.state.currentproduct.options;
    },
    // iinput창 focusout 일때 rules 검사
    selectoptionrule() {
      let f = true;
      f = this.rules.selectcount;
      return this.formfocus ? true : f;
    },
    // 총금액 계산
    allprice() {
      let price = 0
      for (let i in this.selectoptions) {
        price += this.selectoptions[i].intprice * this.selectoptions[i].selectcount
      }
      return price
    }
  },
  methods: {
    changeImg(i) {
      this.imgindex = i;
    },
    // 옵션별 갯수 최소, 최대 설정
    selectcountchange(kind, i) {
      switch (kind) {
        case "up":
          if (this.selectoptions[i].selectcount < 990) {
            this.selectoptions[i].selectcount++;
          }
          break;
        case "down":
          if (this.selectoptions[i].selectcount > 1) {
            this.selectoptions[i].selectcount--;
          }
          break;
      }
    },
    // 옵션 선택해서 추가
    changeoption() {
      let addoptions = () => {
        this.$set(this.selectoption, 'intprice', parseInt(this.selectoption.price.replace(/,/g, "").replace(/원/g, "")))
        this.$set(this.selectoption, 'selectcount', 1)
        this.$set(this.selectoptions, this.selectoptions.length, this.selectoption)
      }
      // 선택한 옵션이 0개면 추가 아니라면 이미 있는지 검사 하여 이미 있으면 있는 것에 숫자를 올리고 없으면 추가
      if (this.selectoptions.length == 0) {
        addoptions()
      } else {
        let serchindex = this.selectoptions.findIndex(e => e.name == this.selectoption.name)
        if (serchindex == -1) {
          addoptions()
        } else {
          this.selectoptions[serchindex].selectcount++
        }
      }
    },
    // 옵션 삭제
    deleteoption(name) {
      this.selectoptions.splice(this.selectoptions.findIndex(e=>e.name==name), 1)
    }
  },
  beforeCreate() {
    this.$store.dispatch("getCurrentProduct", this.$route.params.productId);
  },
  destroyed() {
    this.$store.commit("resetcurrentproduct");
  },
};
</script>

<style>
.product-input input {
  text-align: center;
}
</style>
