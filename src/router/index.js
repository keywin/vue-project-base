import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'

import ResetElmUIPack from '@/pages/components/ResetElmUIPack.vue'
import ResetElmUIStyle from '@/pages/components/ResetElmUIStyle.vue'
import MyComponents from '@/pages/components/MyComponents.vue'

import Comjs from '@/pages/package/Comjs.vue'
import Sass from '@/pages/package/Sass.vue'
import Axios from '@/pages/package/Axios.vue'
import Statemanage from '@/pages/package/Statemanage.vue'
import VuexModel from '@/pages/package/VuexModel.vue'
import ApiModel from '@/pages/package/ApiModel.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: 'comments/resetelmui_style',
    children: [
			{
        path: '/comments/resetelmui_pack',
        name: 'ResetElmUIPack',
        component: ResetElmUIPack
      },
      {
        path: '/comments/resetelmui_style',
        name: 'ResetElmUIStyle',
        component: ResetElmUIStyle
      },
      {
        path: '/comments/myComponents',
        name: 'MyComponents',
        component: MyComponents
      },
      {
        path: '/package/comjs',
        name: 'Comjs',
        component: Comjs
      },
      {
        path: '/package/sass',
        name: 'Sass',
        component: Sass
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
        path: '/package/api_model',
        name: 'ApiModel',
        component: ApiModel
      },
      {
        path: '/package/vuex_model',
        name: 'VuexModel',
        component: VuexModel
      }
    ]
  }]
})
