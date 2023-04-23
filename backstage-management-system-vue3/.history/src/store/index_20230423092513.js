import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state, value) {
      console.log(state.count, value);
    }
  }
})