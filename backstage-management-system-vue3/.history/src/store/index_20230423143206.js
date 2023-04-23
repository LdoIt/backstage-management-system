import { createStore } from 'vuex'
import userInfo from './userInfo'
export default createStore({
  state() {
    return {
      global: 'globalState'
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  // 模块化vuex
  modules: {
    userInfo
  }
})