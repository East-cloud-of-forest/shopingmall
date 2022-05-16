import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: [],
    mainproduct: [],
    currentproduct: {},
    key: "e7765a8802c849b94cee275f83404522",
  },
  getters: {},
  mutations: {
    unmade() {
      router.push("/unmade");
    },
    resetcurrentproduct(state) {
      state.currentproduct = {}
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
            let mainproduct = [];
            for (let i of product) {
              mainproduct.push({
                productId: getProductInnerHTML(i, "ProductCode"),
                image: getProductInnerHTML(i, "ProductImage300"),
                title: getProductInnerHTML(i, "ProductName"),
                lprice: getProductInnerHTML(i, "ProductPrice"),
                delivery: getProductInnerHTML(i, "Delivery"),
              });
            }
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
      const curl = `http://localhost:8080/openapi/OpenApiService.tmall?key=${state.key}&apiCode=${apicode}&productCode=${productCode}`;

      xhr.onreadystatechange = function (event) {
        const { target } = event;
        if (target.readyState === XMLHttpRequest.DONE) {
          const { status } = target;
          if (status === 0 || (status >= 200 && status < 400)) {
            let data = xhr.responseXML;
            console.log(data);
            let currentproduct = new Object
            currentproduct.name = getProductInnerHTML(data, 'ProductName')
            currentproduct.price = getProductInnerHTML(data, 'Price')
            currentproduct.img = getProductInnerHTML(data, 'BasicImage')
            currentproduct.ship = getProductInnerHTML(data, 'ShipFee')
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
