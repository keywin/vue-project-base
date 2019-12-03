## vue-project-base

- [ ] 兼容IE
- [x] 换肤-主题切换(不仅仅是局部)
- [x] 初始化样式、公共样式类
- [x] 按需修改Element-ui样式
- [ ] 屏幕适配 ( pc )
- [x] vuex模块化管理,支持刷新不丢数据
- [x] axios二次封装, 添加拦截器, 统一状态管理
- [x] 接口模块Api
- [ ] 常用公共方法封装, 各种缓存取存
- [ ] 常用自定义过滤器
- [x] 常用公共组件, 公共组件全局引入, 不需要再单独页面引入
- [x] 常用二次封装Element-ui组件, 对Element-ui再优化(表格滚动条等处理)
- [ ] 常用正则校验
- [ ] 常用表单验证封装(对element-ui表单验证封装处理)
- [x] 全屏
- [ ] ...

## Build Setup

``` bash
# install dependencies

# 下载前端依赖
cd vue-project-base

npm i

# express相关依赖
npm i express-generator -g

cd server

npm i

npm install -g  nodemon

# 在 /vue-project-base 下
npm run dev

# 在 /vue-project-base/server下
nodemon app
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
