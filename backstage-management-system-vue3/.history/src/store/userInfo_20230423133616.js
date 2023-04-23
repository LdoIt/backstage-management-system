/*
 * @Date: 2023-04-23 13:33:51
 */
export default {
  state() {
    return {
      userInfo: {}
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
  },
  actions: {

  }
}