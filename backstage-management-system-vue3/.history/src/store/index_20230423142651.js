import { createStore } from 'vuex'
import userInfo from './userInfo'
export default createStore({
  // 模块化vuex
  modules: {
    userInfo
  }
})