// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'

import PerfectScrollbar from 'perfect-scrollbar' // 滚动条插件

import http_axios from '@/api/http_axios.js'

// 样式
import '@/assets/iconfont/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/sass/index.scss'
import 'perfect-scrollbar/css/perfect-scrollbar.css' // 滚动条插件

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$http_axios = http_axios

const perfectScroll = (el) => {
	if (el._ps_ instanceof PerfectScrollbar) {
		el._ps_.update()
	} else {
		el._ps_ = new PerfectScrollbar(el, {
			suppressScrollX: true
		})
	}
}
Vue.directive('scrollBar', {
	inserted(el, binding) {
		const { arg } = binding
		if (arg === 'table') {
			el = el.querySelector('.el-table__body-wrapper')
			if (!el) {
				return console.warn('未发现className为el-table__body-wrapper的dom')
			}
		}
		const rules = ['fixed', 'absolute', 'relative']
		if (!rules.includes(window.getComputedStyle(el, null).position)) {
			console.error(`perfect-scrollbar所在的容器的position属性必须是以下之一：${rules.join('、')}`)
		}
		perfectScroll(el)
	},
	componentUpdated(el, binding, vnode) {
		const { arg } = binding
		if (arg === 'table') {
			el = el.querySelector('.el-table__body-wrapper')
			if (!el) {
				return console.warn('未发现className为el-table__body-wrapper的dom')
			}
		}
		vnode.context.$nextTick(() => {
				try {
					perfectScroll(el)
				} catch (error) {
					console.error(error)
				}
			}
		)}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
