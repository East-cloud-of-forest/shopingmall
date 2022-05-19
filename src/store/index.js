import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: [],
    mainproduct: [],
    currentproduct: {
      img: []
    },
    key: "e7765a8802c849b94cee275f83404522",
  },
  getters: {},
  mutations: {
    unmade() {
      router.push("/unmade");
    },
    resetcurrentproduct(state) {
      state.currentproduct = {
        img: []
      }
    }
  },
  actions: {
    getMainToyData({ state }) {
      const xhr = new XMLHttpRequest();
      const apicode = "ProductSearch";
      const serchkeyword = "동물인형";
      const curl = `http://localhost:8080/openapi/OpenApiService.tmall?key=${state.key}&apiCode=${apicode}&keyword=${serchkeyword}&targetSearchPrd=KOR&pageSize=12&sortCd=A`;

      xhr.onreadystatechange = function (event) {
        const { target } = event;
        if (target.readyState === XMLHttpRequest.DONE) {
          const { status } = target;
          if (status === 0 || (status >= 200 && status < 400)) {
            let data = xhr.responseXML;
            let product = data.getElementsByTagName("Product");
            // state에 삽입 될 배열
            let mainproduct = [];
            // 데이터 정제
            for (let i of product) {
              let price = getProductInnerHTML(i, "ProductPrice")
              let sprice = getProductInnerHTML(i, "SalePrice")
              // 세일 여부 판단 및 세일 데이터 정제
              let sale = false
              if (price !== sprice) {
                sale = {
                  sprice: sprice,
                  discount: Math.floor(getProductInnerHTML(i, "Discount")/price * 100)
                }
              }
              // 최종 데이터 결정
              mainproduct.push({
                productId: getProductInnerHTML(i, "ProductCode"),
                image: getProductInnerHTML(i, "ProductImage300"),
                title: getProductInnerHTML(i, "ProductName"),
                price: price,
                delivery: getProductInnerHTML(i, "Delivery"),
                sale: sale,
                currentinfo: {
                  sellerid: getProductInnerHTML(i, "Seller"),
                  sellernick: getProductInnerHTML(i, "SellerNick")
                }
              });
            }
            // 데이터 삽입
            state.mainproduct = mainproduct;
            console.log(data);
          } else {
            console.log(xhr);
          }
        }
      };
      xhr.open("GET", curl);
      xhr.send();
    },

    getCurrentProduct({ state }, productCode) {
      const xhr = new XMLHttpRequest();
      const apicode = "ProductInfo";
      const curl = `http://localhost:8080/openapi/OpenApiService.tmall?key=${state.key}&apiCode=${apicode}&productCode=${productCode}&option=QAs,PostScripts,PdOption`;

      xhr.onreadystatechange = function (event) {
        const { target } = event;
        if (target.readyState === XMLHttpRequest.DONE) {
          const { status } = target;
          if (status === 0 || (status >= 200 && status < 400)) {
            let data = xhr.responseXML;
            console.log(data);
            // 상품 추가 이미지 갯수
            let AddImageLength = Array.prototype.slice.call(data.querySelector('Product').children).filter((a)=>a.nodeName.slice(0, -1) == 'AddImage').length
            // state에 삽입될 객체
            let currentproduct = new Object
            currentproduct.name = getProductInnerHTML(data, 'ProductName')
            currentproduct.price = getProductInnerHTML(data, 'Price')
            currentproduct.ship = getProductInnerHTML(data, 'ShipFee')
            let img = new Array
            img.push(getProductInnerHTML(data, 'BasicImage'))
            for (let i = 1; i <= AddImageLength; i++) {
              img.push(getProductInnerHTML(data, 'AddImage'+[i]))
            }
            currentproduct.img = img
            // 데이터 삽입
            state.currentproduct = currentproduct
          } else {
            console.log(xhr);
          }
        }
      };
      xhr.open("GET", curl);
      xhr.send();
    },
  },
  modules: {},
});

function getProductInnerHTML(xml, tagname) {
  return xml
    .getElementsByTagName(tagname)[0]
    .innerHTML.replace("<![CDATA[", "")
    .replace("]]>", "");
}
