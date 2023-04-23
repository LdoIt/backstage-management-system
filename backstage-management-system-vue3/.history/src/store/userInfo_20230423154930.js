/*
 * @Date: 2023-04-23 13:33:51
 */
export default {
  // 开启命名空间
  namespaced: true,
  state() {
    return {
      count: 0,
      username: localStorage.getItem('username')
    }
  },
  getters: {
    countStr(state, getters, rootState, rootGetters) {
      console.log(state, getters, rootState, rootGetters); // rootGetters、rootState，可以访问vuex全局中的数据
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
      console.log(context); // 根节点中的状态会被暴露出来：rootGetters、rootState，可以访问vuex全局中的数据
      context.commit('INCREMENT', value)
    }
  }
}