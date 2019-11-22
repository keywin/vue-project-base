var express = require('express');
var router = express.Router();

// 本地存储的datalist
var datalist = require('../public/json/datalist.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* datalist */
router.get('/datalist', (req, res) => {
	let parmas = req.body
	let response = {
		data: datalist,
		msg: '获取成功',
		status: true
	}
	// setTimeout(() => {
		res.send(response)
	// })
})

module.exports = router;
