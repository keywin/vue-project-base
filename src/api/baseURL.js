// 后台接口地址
let baseURL = {

}

// 测试服
if (process.env.NODE_ENV == 'development') {
	//   baseURL.url = "http://keywin.com"
	//   baseURL.url = "https://py.datassp.cn/"
	//   baseURL.url = "https://music.163.com"
  baseURL.url = ""
}

// 正式服
if (process.env.NODE_ENV == 'production') {
	developmentIP.baseURL = "" // 正式服
	developmentIP.yulanURL = "" // 预览服
}
export {
  	baseURL
}
