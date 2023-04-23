// 引入vuex
import Vue from 'vue'
import Vuex from 'vuex'
import { createStore } from 'vuex'
const store = createStore({
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

export default store