import Vue from 'vue'
import Vuex from 'vuex'

import user from './user' // 用户信息

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		user
	}
})