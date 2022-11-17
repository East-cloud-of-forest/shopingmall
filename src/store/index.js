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
    },

    setMainToyData(state, data) {
      state.mainproduct = data
    },

    setCurrentProduct(state, data) {
      state.currentproduct = data
    }
  },
  actions: {
    getMainToyData({ commit }) {
      const xhr = new XMLHttpRequest();
      const apicode = "ProductSearch";
      const serchkeyword = "동물인형";
      const curl = `https://sos20l5bo8.execute-api.ap-northeast-2.amazonaws.com/default/11shop_api?apiCode=${apicode}&keyword=${serchkeyword}`;

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
            commit('setMainToyData', mainproduct)
            console.log(data);
          } else {
            console.log(xhr);
          }
        }
      };
      xhr.open("GET", curl);
      xhr.send();
    },

    getCurrentProduct({ commit }, productCode) {
      const xhr = new XMLHttpRequest();
      const apicode = "ProductInfo";
      const curl = `https://sos20l5bo8.execute-api.ap-northeast-2.amazonaws.com/default/11shop_api?apiCode=${apicode}&productCode=${productCode}`;

      xhr.onreadystatechange = function (event) {
        const { target } = event;
        if (target.readyState === XMLHttpRequest.DONE) {
          const { status } = target;
          if (status === 0 || (status >= 200 && status < 400)) {
            let data = xhr.responseXML;
            console.log(data)
            // state에 삽입될 객체
            let currentproduct = new Object
            currentproduct.name = getProductInnerHTML(data, 'ProductName')
            currentproduct.price = getProductInnerHTML(data, 'Price')
            currentproduct.ship = getProductInnerHTML(data, 'ShipFee')
            // 옵션
            if (data.getElementsByTagName('ProductOption').length > 0) {currentproduct.status = getProductInnerHTML(data, "status")=='Y'?true:false
            let listE = data.getElementsByTagName('OptionList')[0]
            let optionsE = listE.getElementsByTagName('Option')
            let options = new Array()
            for (let i of optionsE) {
              let valuelist = i.getElementsByTagName('Value')
              let value = new Array()
              for(let j of valuelist) {
                value.push({
                  order: getProductInnerHTML(j, 'Order') ,
                  name: getProductInnerHTML(j, 'ValueName') ,
                  price: getProductInnerHTML(j, 'Price')
                })
              }
              options.push({
                order: getProductInnerHTML(i, 'Order'),
                name: getProductInnerHTML(i, 'TitleName'),
                mandatorry: getProductInnerHTML(i, 'MandatoryYN')=='Y'?true:false,
                value: value
              }) 
            }
            currentproduct.options = options}
            // 추가 이미지
            let AddImageLength = Array.prototype.slice.call(data.querySelector('Product').children).filter((a)=>a.nodeName.slice(0, -1) == 'AddImage').length
            let img = new Array
            img.push(getProductInnerHTML(data, 'BasicImage'))
            for (let i = 1; i <= AddImageLength; i++) {
              img.push(getProductInnerHTML(data, 'AddImage'+[i]))
            }
            currentproduct.img = img
            // QA
            let QAsE = data.getElementsByTagName('QA')
            let QAs = new Array
            let j = 1
            for (let i of QAsE) {
              QAs.push({
                id: j,
                title: getProductInnerHTML(i, 'Title'),
                writer: getProductInnerHTML(i, 'Writer'),
                date: getProductInnerHTML(i, 'Date'),
                answer: '답변완료'
              })
              j += 1
            }
            currentproduct.qas = QAs
            // review
            let reviewE = data.getElementsByTagName('PostScript')
            let review = new Array
            let n = 1
            for (let i of reviewE) {
              review.push({
                id: n,
                title: getProductInnerHTML(i, 'Title'),
                writer: getProductInnerHTML(i, 'Writer'),
                date: getProductInnerHTML(i, 'Date'),
                star: (Math.floor((Math.random()*31) + 70)) / 20
              })
              n += 1
            }
            currentproduct.review = review
            // 데이터 삽입
            commit('setCurrentProduct', currentproduct)
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
