import { createStore } from 'vuex'
const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutation: {
    increment(state, value) {
      state.count++
    }
  }
})

export default store