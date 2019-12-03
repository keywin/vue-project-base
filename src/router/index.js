import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import ResetElmUI_style from '@/pages/components/ResetElmUI_style.vue'
import ResetElmUI_pack from '@/pages/components/ResetElmUI_pack.vue'
import Axios from '@/pages/package/Axios.vue'
import Statemanage from '@/pages/package/Statemanage.vue'
import Vuex from '@/pages/package/Vuex.vue'

Vue.use(Router)

export default new Router({
  routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			redirect: 'comments/resetelmui_style',
			children: [
				{
					path: '/comments/resetelmui_style',
					name: 'ResetElmUI_style',
					component: ResetElmUI_style
				},
				{
					path: '/comments/resetelmui_pack',
					name: 'ResetElmUI_pack',
					component: ResetElmUI_pack
				},
				{
					path: '/package/axios',
					name: 'Axios',
					component: Axios
				},
				{
					path: '/package/statemanage',
					name: 'Statemanage',
					component: Statemanage
				},
				{
					path: '/package/vuex',
					name: 'Vuex',
					component: Vuex
				}
			]
		}
  ]
})
