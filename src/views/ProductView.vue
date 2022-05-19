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
          <v-subheader>
            <v-icon dense>mdi-home-outline</v-icon>
            <span class="text-subtitle-1 success--text">{{ sellernick }}</span>
            <span class="mx-2">|</span>
            <span>{{ sellerid }}</span>
          </v-subheader>
          <v-card-text class="pt-0 black--text">
            <p class="text-h5 font-weight-bold ma-0">
              {{ product.name }}
            </p>
          </v-card-text>
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
            >
              <template #selection="{ item }">
                <div>
                  {{ item.name }}
                </div>
              </template>
              <template #item="{ item }">
                <div style="width:100%;">
                  <p class="blakc--text">{{ item.name }}</p>
                  <p class="text-end text-h6 orange--text">{{ item.price }}</p>
                </div>
              </template>
            </v-select>
          </v-card-actions>
          <v-card-actions>
            <v-card width="100%" outlined>
              <v-card-title v-if="!selectoption" class="grey--text"
                >옵션을 선택해주세요</v-card-title
              >
              <div v-else>
                <v-card-title>{{ selectoption.name }}</v-card-title>
                <v-card-text class="orange--text text-h6 text-end">{{
                  selectoption.price
                }}</v-card-text>
              </div>
            </v-card>
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
      selectoption: false,
    };
  },
  computed: {
    product() {
      return this.$store.state.currentproduct;
    },

    options() {
      return this.$store.state.currentproduct.options;
    },
  },
  methods: {
    changeImg(i) {
      this.imgindex = i;
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
