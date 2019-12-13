import { getSessionStorage } from '@/assets/js/storage'

const getters = {
	GET_ROUTERINFO: state => {
		let routerInfo = getSessionStorage.routerInfo
		return routerInfo ? routerInfo : state.routerInfo
	}
}

export default getters
