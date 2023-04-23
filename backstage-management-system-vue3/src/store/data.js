/*
 * @Date: 2023-04-23 13:33:51
 */
export default {
  // 开启命名空间
  namespaced: true,
  state() {
    return {
      dataCount: 0,
    }
  },
  getters: {
    countStr(state) {
      return state.dataCount + 'str'
    }
  },
  mutations: {},
  actions: {
    decrement(context) {
      console.log(context); // 根节点中的状态会被暴露出来：rootGetters、rootState，可以访问vuex全局中的数据
    }
  }
}