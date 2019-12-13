import { SET_TOKEN, SAVE_USER, SET_THEME } from './mutations-type'
import { setSessionStorage } from '@/assets/js/storage'

const mutations = {
  [SAVE_USER](state, userInfo) {
    state.userInfo = userInfo
    setSessionStorage('userInfo', userInfo)
  }
}

export default mutations
