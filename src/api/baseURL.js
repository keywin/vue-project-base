// 后台接口地址
let baseURL = {

}

// 测试服
if (process.env.NODE_ENV == 'development'){
  // baseURL.baseURL = "http://172.16.11.207"
  // baseURL.baseURL = "http://172.16.10.141"
//   baseURL.baseURL = "http://172.16.10.142" // 小王鹏
//   baseURL.baseURL = "http://172.16.11.46:8080"
	// baseURL.baseURL = "http://gkdevapi.lumlord.com"
//   baseURL.baseURL = "http://10.10.10.145:802" // 邵帅
baseURL.baseURL = "http://localhost"
}

// 正式服
if (process.env.NODE_ENV  == 'production'){
  developmentIP.baseURL = "" // 正式服
  developmentIP.yulanURL = "" // 预览服
}
export { baseURL }
