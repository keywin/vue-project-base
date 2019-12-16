// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import PerfectScrollbar from 'perfect-scrollbar' // 滚动条插件

import { http_axios } from '@/api/http_axios.js'
import { setSessionStorage, getSessionStorage } from '@/assets/js/storage.js'

import Vuex from 'vuex'
import store from './store'

// 引入自定义过滤器
import '@/assets/js/filter.js'

// 样式
import '@/assets/iconfont/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/sass/index.scss'
import 'perfect-scrollbar/css/perfect-scrollbar.css' // 滚动条插件

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)

Vue.prototype.$http_axios = http_axios
Vue.prototype.setSessionStorage = setSessionStorage
Vue.prototype.getSessionStorage = getSessionStorage

const perfectScroll = (el) => {
  if (el._ps_ instanceof PerfectScrollbar) {
    el._ps_.update()
  } else {
    el._ps_ = new PerfectScrollbar(el, {
      suppressScrollX: true
    })
  }
}
// 表格滚动条
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
    })
  }
})

/**
 * 全局引入基础组件
 * 文件名格式: /components/(或文件名)/Base***.vue
 * eg: components/BasePagination.vue
 * 则此文件夹下格式文件名格式相符的组件, 可以直接在页面中使用, 不需要再单独引用
 */
// 获取基础组件文件
const requireComponents = require.context('./components', true, /Base[a-zA-Z]+\.vue$/)
requireComponents.keys().forEach(fileName => {
  // 例 fileName: "./BasePagination.vue"
  // 组件实例
  const reqCom = requireComponents(fileName)
  // 截取文件名作为组件名
  let reqComName = fileName.split('.vue')[0].split('/')
  // 考虑到可能存在文件夹/文件名的情况, 取最底级的文件名作为组件名
  reqComName = reqComName[reqComName.length - 1]
  // 组件挂载
  Vue.component(reqComName, reqCom.default || reqCom)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
