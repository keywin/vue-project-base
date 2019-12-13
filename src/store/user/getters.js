import { getSessionStorage } from '@/assets/js/storage'

const getters = {
  GET_USERINFO: state => {
    if (state.userInfo === null) {
      return getSessionStorage('userInfo')
    }
    return state.userInfo
  }
}

export default getters
