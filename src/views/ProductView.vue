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
            <v-card
              width="100%"
              outlined
              max-height="350"
              style="overflow: auto"
            >
              <!-- 옵션이 선택되지 않았을때 -->
              <v-card-title v-if="!selectoptions.length > 0" class="grey--text">
                옵션을 선택해주세요
              </v-card-title>
              <!-- 옵션이 선택되었을 때 -->
              <div
                v-else
                v-for="(item, i) in selectoptions"
                :key="i + '-' + item.order"
              >
                <div class="d-flex justify-space-between align-center pr-4">
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
                  <v-card-text
                    class="orange--text text-h6 justify-end py-2 d-flex align-center"
                  >
                    {{
                      (item.intprice * item.selectcount).toLocaleString("ko-KR")
                    }}
                    원
                  </v-card-text>
                </div>
              </div>
            </v-card>
          </v-card-actions>
          <!-- 선택된 총 금액 -->
          <v-card-text
            class="d-flex justify-end align-center py-2"
            v-if="selectoptions.length > 0"
          >
            <p class="mr-5 mb-0">총 상품금액</p>
            <h2 class="deep-orange--text">
              {{ allprice.toLocaleString("ko-KR") }} 원
            </h2>
          </v-card-text>
          <!-- 결정 부분 -->
          <v-card-actions v-if="selectoptions.length > 0" class="d-flex">
            <v-btn
              outlined
              v-for="(btn, i) in [
                { name: '장바구니', color: 'pink accent-3' },
                { name: '구매하기', color: 'deep-orange' },
              ]"
              :key="i"
              x-large
              width="49%"
              class="ma-0"
              :color="btn.color"
              >{{ btn.name }}</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- 상품 상세 탭 -->
    <v-row>
      <v-col cols="12">
        <v-tabs
          background-color="orange accent-2"
          slider-size="0"
          slider-color="white"
          grow
          dark
          color="orange"
          active-class="white text-orange"
          v-model="tab"
        >
          <v-tab class="text-h5"> 상세정보 </v-tab>
          <v-tab class="text-h5"> 상품 Q&A </v-tab>
          <v-tab class="text-h5"> 상품리뷰 </v-tab>
        </v-tabs>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-tabs-items v-model="tab">
          <!-- 상세정보 -->
          <v-tab-item class="text-center">
            <p class="display-1 mx-auto my-16" style="width: 70%">
              {{ product.name }}
            </p>
            <v-img v-for="(img, i) in product.img" :key="i" :src="img" />
          </v-tab-item>
          <!-- 상품문의 -->
          <v-tab-item class="px-2">
            <p v-if="product.qas" class="body-2">
              상품문의({{ product.qas.length }})
            </p>
            <v-divider></v-divider>
            <div v-if="product.qas">
              <v-card class="text-center" v-if="product.qas.length == 0">
                <v-card-text> 상품문의가 존재하지 않습니다 </v-card-text>
              </v-card>
              <v-data-table
                v-else
                dense
                :items-per-page="10"
                disable-sort
                :headers="[
                  {
                    text: '번호',
                    align: 'center',
                    value: 'id',
                    width: '5%',
                    cellClass: 'text-caption',
                  },
                  {
                    text: '답변상태',
                    value: 'answer',
                    width: '8%',
                    cellClass: 'text-caption ma-0 success--text',
                  },
                  { text: '문의제목', value: 'title', width: '40%' },
                  {
                    text: '작성자',
                    value: 'writer',
                    width: '5%',
                    cellClass: 'text-caption ma-0 pr-0',
                    class: 'pr-0',
                  },
                  { text: '작성일지', value: 'date', width: '10%' },
                ]"
                :items="product.qas"
                :page="tabelpage[0]"
                hide-default-footer
              >
                <template v-slot:[`item.title`]="{ item }">
                  <div style="width: 100%; cursor: pointer" @click="aa">
                    <p class="text-caption ma-0">
                      {{ item.title == "null" ? "" : item.title }}
                    </p>
                    <v-icon dense>mdi-lock-outline</v-icon>
                  </div>
                </template>
                <template v-slot:[`item.date`]="{ item }">
                  <p class="text-caption ma-0">
                    {{ item.date.substr(0, 10) }}
                  </p>
                </template>
                <template v-slot:[`footer`]>
                  <div class="text-center">
                    <v-pagination
                      v-model="tabelpage[0]"
                      :length="Math.ceil(product.qas.length / 10)"
                      :total-visible="9"
                      text
                    ></v-pagination>
                  </div>
                </template>
              </v-data-table>
            </div>
          </v-tab-item>
          <!-- 상품리뷰 -->
          <v-tab-item>
            <p v-if="product.review" class="body-2">
              상품리뷰({{ product.review.length }})
            </p>
            <div v-if="product.review">
              <v-card class="text-center" v-if="product.review.length == 0">
                <v-card-text> 상품리뷰가 존재하지 않습니다 </v-card-text>
              </v-card>
              <v-data-table
                v-else
                dense
                :items-per-page="10"
                disable-sort
                :headers="[
                  {
                    text: '번호',
                    align: 'center',
                    value: 'id',
                    width: '5%',
                    cellClass: 'text-caption',
                  },
                  {
                    text: '만족도',
                    value: 'star',
                    width: '8%',
                  },
                  { text: '문의제목', value: 'title', width: '40%' },
                  {
                    text: '작성자',
                    value: 'writer',
                    width: '5%',
                    cellClass: 'text-caption ma-0 pr-0',
                    class: 'pr-0',
                  },
                  { text: '작성일지', value: 'date', width: '10%' },
                ]"
                :items="product.review"
                :page="tabelpage[1]"
                hide-default-footer
              >
                <template v-slot:[`item.star`]="{ item }">
                  <div style="width: 100%; cursor: pointer" class="review">
                    <v-rating
                      v-model="item.star"
                      background-color="orange lighten-3"
                      color="orange"
                      large
                      readonly
                      small
                      size="10"
                      half-increments
                    ></v-rating>
                  </div>
                </template>
                <template v-slot:[`item.title`]="{ item }">
                  <div style="width: 100%; cursor: pointer" @click="aa">
                    <p class="text-caption ma-0">
                      {{ item.title == "null" ? "" : item.title }}
                    </p>
                  </div>
                </template>
                <template v-slot:[`item.date`]="{ item }">
                  <p class="text-caption ma-0">
                    {{ item.date.substr(0, 10) }}
                  </p>
                </template>
                <template v-slot:[`footer`]>
                  <div class="text-center">
                    <v-pagination
                      v-model="tabelpage[1]"
                      :length="Math.ceil(product.qas.length / 10)"
                      :total-visible="9"
                      text
                    ></v-pagination>
                  </div>
                </template>
              </v-data-table>
            </div>
            <v-divider></v-divider>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
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
      selectoption: "",
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
      tab: null,
      tabelpage: [1, 1],
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
      let price = 0;
      for (let i in this.selectoptions) {
        price +=
          this.selectoptions[i].intprice * this.selectoptions[i].selectcount;
      }
      return price;
    },
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
        this.$set(
          this.selectoption,
          "intprice",
          parseInt(this.selectoption.price.replace(/,/g, "").replace(/원/g, ""))
        );
        this.$set(this.selectoption, "selectcount", 1);
        this.$set(
          this.selectoptions,
          this.selectoptions.length,
          this.selectoption
        );
      };
      // 선택한 옵션이 0개면 추가 아니라면 이미 있는지 검사 하여 이미 있으면 있는 것에 숫자를 올리고 없으면 추가
      if (this.selectoptions.length == 0) {
        addoptions();
      } else {
        let serchindex = this.selectoptions.findIndex(
          (e) => e.name == this.selectoption.name
        );
        if (serchindex == -1) {
          addoptions();
        } else {
          this.selectoptions[serchindex].selectcount++;
        }
      }
    },
    // 옵션 삭제
    deleteoption(name) {
      this.selectoptions.splice(
        this.selectoptions.findIndex((e) => e.name == name),
        1
      );
    },
    aa() {
      console.log("aa");
    },
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
.review .v-rating .v-icon {
  padding: 0 !important;
}
</style>
