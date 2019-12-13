import { setSessionStorage } from '@/assets/js/storage'

const mutations = {
  SET_ROUTERINFO (state, data) {
		state.routerInfo = data
		setSessionStorage(routerInfo, data)
  }
}

export default mutations
