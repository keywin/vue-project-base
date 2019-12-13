import { http_axios } from '@/api/http_axios.js'

const actions = {
  SET_ROUTERINFO ({ commit }) {
    return new Promise((resolve, reject) => {
      http_axios('/api/getPermission', {}, 'get').then(res => {
        commit('SET_ROUTERINFO', res.data)
        resolve(res.data)
      })
    })
  }
}

export default actions
