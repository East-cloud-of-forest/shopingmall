import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [],
    mainproduct: [],
  },
  getters: {},
  mutations: {
    unmade() {
      router.push('/unmade')
    },
  },
  actions: {
    getToyData({ state }) {
      const curl =
        'https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/shop.json?query=동물인형&display=12&start=1&sort=sim'
      const id = 'Lr_MtVM7Mqs67VOi9dWm'
      const pw = 'Ojw5LE6afq'
      console.log('시작')
      fetch(curl, {
        headers: {
          method: 'GET',
          'X-Naver-Client-Id': id,
          'X-Naver-Client-Secret': pw,
          Accept: 'application/json',
          Host: 'openapi.naver.com',
          'User-Agent': 'curl/7.49.1',
        },
      })
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          state.mainproduct = data.items
          console.log(data)
        }).catch(err=>console.log(err))
    },
  },
  modules: {},
})
