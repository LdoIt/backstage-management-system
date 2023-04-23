import { createStore } from 'vuex'
import userInfo from './userInfo'
export default createStore({
  state() {
    return {
      global: 'globalState'
    }
  },
  getters: {
    globalGetters(state) {
      return state.global + 'Getters'
    }
  },
  mutations: {},
  actions: {},
  // 模块化vuex
  modules: {
    userInfo
  }
})