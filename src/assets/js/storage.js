// 获取token
export function getToken () {
	return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzQ2NTc2OTMsImlhdCI6MTU3NDY1NDA5MywidXNlcm5hbWUiOiJrZXl3aW43In0.DX2lD7XJfr4iJyRMOoQNRGV9Z0eLoyrDPVx3bz_upOA'
	return sessionStorage.getItem('token')
  }
  
  // 设置token
  export function setToken (token) {
	return sessionStorage.setItem('token', token)
  }
  
  // 删除token
  export function removeToken (token) {
	return sessionStorage.removeItem('token')
  }
  
  
  // 获取会话存储
  export function getSessionStorage (key) {
	return sessionStorage.getItem(key)
  }
  
  // 设置会话存储
  export function setSessionStorage (key, val) {
	return sessionStorage.setItem(key, val)
  }
  
  // 删除会话存储
  export function removeSessionStorage (key) {
	return sessionStorage.removeItem(key)
  }
  
  // 清空会话存储
  export function clearSessionStorage () {
	return sessionStorage.clear()
  }
  
  
  
  // 获取本地缓存
  export function getLocalStorage (key) {
	return localStorage.getItem(key)
  }
  
  // 设置本地缓存
  export function setLocalStorage (key, val) {
	return localStorage.setItem(key, val)
  }
  
  // 删除本地存储
  export function removeLocalStorage (key) {
	return localStorage.removeItem(key)
  }
  
  // 清空本地存储
  export function clearLocalStorage () {
	return localStorage.clear()
  }
  
  
  