/*
 * @Date: 2023-04-23 13:33:51
 */
export default {
  state() {
    return {
      userInfo: {}
    }
  },
  getters: {},
  mutations: {
    increment(state, value) {
      state.count =  value
    }
  }
}