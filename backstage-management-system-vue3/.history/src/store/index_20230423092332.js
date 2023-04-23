import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      count: 0
    }
  },
  mutation: {
    increment(state, value) {
      console.log(state, value);
    }
  }
})