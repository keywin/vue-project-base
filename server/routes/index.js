var express = require('express')
var router = express.Router()

// import shuffle from '../public/javascripts/common.js'

var comJS = require('../public/javascripts/common.js')

// 本地存储的datalist
var datalist = require('../public/json/datalist.json')
// 用户信息
var userinfo = require('../public/json/userInfo.json')
// 路由权限管理
var routerPermission = require('../public/json/routerPermission.json')

/* GET home page. */
router.get('/login', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  })
})

/* userInfo */
router.post('/userinfo', (req, res) => {
  let response = {
    data: {
      userInfo: comJS.randomArrOne(userinfo)
    },
    msg: '获取成功',
    code: 200,
    status: true
  }
  res.send(response)
})

/* datalist */
router.post('/datalist', (req, res) => {
  // 默认每次返回10条
  let params = req.body
  params.isNewData && (datalist = comJS.shuffle(datalist))
  let list = datalist.slice((params.currentPage - 1) * params.pageSize, params.currentPage * params.pageSize)
  let response = {
    data: {
      list,
      total: datalist.length
    },
    msg: '获取成功',
    status: true
  }
  setTimeout(() => {
    res.send(response)
  }, 1000)
})

/* 状态码体验 */
router.post('/statetaste', (req, res) => {
  let params = req.body
  let response = {
    data: 'testData',
    msg: params.code === 200 ? '获取成功' : '获取失败',
    code: params.code,
    status: params.code === 200
  }
  setTimeout(() => {
    res.send(response)
  }, 1000)
})

/* 动态路由 */
router.get('/getPermission', (req, res) => {
  let response = {
    data: routerPermission,
    msg: '获取成功',
    code: 200,
    status: true
  }
  res.send(response)
})
module.exports = router
