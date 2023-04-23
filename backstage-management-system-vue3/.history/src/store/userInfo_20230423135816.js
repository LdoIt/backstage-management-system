/*
 * @Date: 2023-04-23 13:33:51
 */
export default {
  namespaced: true,
  state() {
    return {
      count: 0,
      userInfo: {
        username: ''
      }
    }
  },
  getters: {
    countStr(state) {
      return state.count + 'str'
    }
  },
  mutations: {
    INCREMENT(state, value) {
      state.count =  value
    },
    ADDUSERNAME(state, value) {
      state.userInfo.username = value
    }
  },
  actions: {
    increment(context, value) {
      context.commit('INCREMENT', value)
    }
  }
}