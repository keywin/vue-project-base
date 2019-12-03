import { getSessionStorage } from '@/assets/js/storage'

const getters = {
	getUserInfo: state => {
		if (state.userInfo === null) {
		  return JSON.parse(getSessionStorage('userInfo'))
		}
		return state.userInfo
	}
}

export default getters