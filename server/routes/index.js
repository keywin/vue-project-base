var express = require('express');
var router = express.Router();

// import shuffle from '../public/javascripts/common.js'

var comJS = require('../public/javascripts/common.js')

// 本地存储的datalist
var datalist = require('../public/json/datalist.json')

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* datalist */
router.post('/datalist', (req, res) => {
	// 默认每次返回10条
	let params = req.body
	// isNewData === true 重新请求数据
	params.isNewData && (datalist = comJS.shuffle(datalist))
	// currentPage 当前页
	// pageSize 每页数据条数
	// total 返回数据总条数
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
module.exports = router;
