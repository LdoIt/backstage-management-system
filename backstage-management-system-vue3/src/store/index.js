import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      count: 0
    }
  },
  getters: {
    countStr(state) {
      return state.count + 'str'
    }
  },
  mutations: {
    increment(state, value) {
      state.count =  value
    }
  }
})