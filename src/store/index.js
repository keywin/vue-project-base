import Vue from 'vue'
import Vuex from 'vuex'

import user from './user' // 用户信息
import routerList from './routerList' // 路由权限数据

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
		user,
		routerList
  }
})
