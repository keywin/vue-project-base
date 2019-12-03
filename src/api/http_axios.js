import axios from 'axios'
import {Notification, Loading,Message} from 'element-ui'

import {baseURL} from './baseURL'

import { stateCode } from './statemanage'

// 请求超时时间
axios.defaults.withCredentials = true
axios.defaults.timeout = 1000 * 60 * 8 // 2分钟
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 根据环境自动切换地址
if (process.env.NODE_ENV === 'development') {
	axios.defaults.baseURL = baseURL.url
}
if (process.env.NODE_ENV === 'production') {
	axios.defaults.baseURL = baseURL.baseURL
}

// 加载动画相关
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
			background: 'rgba(0, 0, 0, 0.7)'
		})
	}
	const token = 'test-token-sfdhiojfdiojfnjvbhsfghasfdasruweqtoprtwitnrhnwfywtqewproiprtyenbnsdjkfgbsdafghdsgha'
	token && (config.headers['token'] = token)
	config.headers['Accept'] = 'application/json'
    return config
}, err => {
    return Promise.reject(err)
})

// response拦截
axios.interceptors.response.use(response => {
	pageLoading && (pageLoading.close()); //关闭loading
	if (response.status === 200) {
		return Promise.resolve(response)
	} else {
		return Promise.reject(response)
	}
}, error => {
	pageLoading && (pageLoading.close()); //关闭loading
	if (error.response) {
		// 状态码统一管理
		Notification.error({
			duration: 3000,
			message: stateCode[error.response.status] || '服务器正在维护'
		})
		return Promise.reject(error) // 返回接口返回的错误信息
	}
})

export function http_axios (url, params = {}, method = 'post', type = 0, responseType)  {
	let options = {
		url,
		method,
		responseType, // 响应数据类型
		headers: {
			"Content-Type": ['application/json;charset=UTF-8', 'multipart/form-data'][type]
		}
	}
	options.data = (method === 'get' ? {params}: params)
	return new Promise((resolve, reject) => {
		axios(options).then(res => {
			resolve(res.data)
		}).catch(err => {
			reject(err)
		})
	})
}
