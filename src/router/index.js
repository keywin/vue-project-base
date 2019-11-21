import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Button from '@/pages/components/resetElmUI_pack/Button.vue'

Vue.use(Router)

export default new Router({
  routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			children: [
				{
					path: '/comments/resetelmui_pack/button',
					name: 'Button',
					component: Button
				}
			]
		}
  ]
})
