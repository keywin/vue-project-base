// 后台接口地址
let baseURL = {

}

// 测试服
if (process.env.NODE_ENV == 'development') {
	//   baseURL.url = "http://gkdevapi.lumlord.com"
	//   baseURL.url = "https://py.datahoop.cn/"
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
