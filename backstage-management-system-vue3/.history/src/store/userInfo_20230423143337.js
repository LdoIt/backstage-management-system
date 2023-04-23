/*
 * @Date: 2023-04-23 13:33:51
 */
export default {
  // 开启命名空间
  namespaced: true,
  state() {
    return {
      count: 0,
      username: ''
    }
  },
  getters: {
    countStr(state) {
      return state.count + 'str'
    }
  },
  mutations: {
    INCREMENT(state, value) {
      state.count += value
    },
    ADDUSERNAME(state, value) {
      state.username = value
    }
  },
  actions: {
    increment(context, value) {
      console.log(context);
      context.commit('INCREMENT', value)
    }
  }
}