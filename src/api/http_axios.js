import axios from 'axios'
import {Notification, Loading,Message} from 'element-ui'

import {baseURL} from './baseURL'
console.log(baseURL)
// import {getToken} from '@/utils/auth' // 获取token的方法

// 请求超时时间
axios.defaults.withCredentials = true
axios.defaults.timeout = 1000 * 60 * 8 // 2分钟

// 后台接口地址
if (process.env.NODE_ENV === 'development') {
	
	axios.defaults.baseURL = baseURL.baseURL
}
if (process.env.NODE_ENV === 'production') {
	axios.defaults.baseURL = baseURL.baseURL
}

let pageLoading = null;
global.loaddingText='数据加载中...'

// request拦截
axios.interceptors.request.use(config => {
	// 如需对加载等待做特殊处理
	let tagger = true;
	if (tagger) {
		// 加载loading
		pageLoading = Loading.service({
			fullscreen: true,
			text: global.loaddingText,
			spinner: 'el-icon-loading',
			background: 'rgba(0, 0, 0, 0.7)'
		})
	}
	const token = getToken() || null
	if (token !== null && token !== undefined) { // 判断是否存在token，如果存在的话，则每个http header都加上token
		config.headers['lumlord_token'] = token
	}
	config.headers['Accept'] = 'application/json'
    return config
}, err => {
    return Promise.reject(err)
})

// response拦截
axios.interceptors.response.use(response => {
	pageLoading && (pageLoading.close()); //关闭loading
	if (response.status === 200) {
		return response.data.code == 200 ? Promise.resolve(response) : Promise.reject(response)
	} else {
		return Promise.reject(response)
	}
}, error => {
	pageLoading && (pageLoading.close()); //关闭loading
	if (error.response) {
		switch (error.response.status) {
		  	case 404:
				Notification.error({
					duration: 2000,
					position: 'bottom-left',
					message: '网络请求不存在'
				})
				break
			default:
				Notification.error({
					duration: 2000,
					position: 'bottom-left',
					message: '服务器错误!'
				})
				break
		}
		return Promise.reject(error) // 返回接口返回的错误信息
	}
})

let http_axios = (url, params = {}, method = 'post', type = 0, responseType) => {
	let headers = ['application/json;charset=UTF-8', 'multipart/form-data'][type] // [json格式, 文件上传格式]
	let option = {
		url,
		method,
		responseType, // 响应数据类型
		// headers: { "Content-Type": headers }
	}
	if (method === 'get') {
		option.data = {params}
	}
	if (method === 'delete') {
		option.data = params
	}
	if (method === 'post' || method === 'patch' || method === 'put') {
		option.data = params
	}
	return new Promise((resolve, reject) => {
		axios(option).then(res => {
			resolve(res.data)
		}).catch(err => {
			console.log(err)
			// if (err.data.code == 500) {
			// 	Message.error({
			// 		duration: 2000,
			// 		message: err.data.msg
			// 	})
			// } else {
			// 	//  console.log(err.data.msg)
			// }
			reject(err.data)
		})
	})
}

export default http_axios
