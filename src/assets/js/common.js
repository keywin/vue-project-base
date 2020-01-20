/**
 * 获取当前时间, 默认全部显示
 * @param {number} type
 * 1 yyyy-MM-dd hh:mm:ss
 * 2 yyyy-MM-dd
 * 3 hh:mm:ss;
 * @param {date} 默认: 空获取当前时间; 设置的时间
 */
function COM_formateDate(type = 1, whatDate) {
	let nowDate = whatDate ? (new Date(whatDate)) : (new Date())

	let nowyear = nowDate.getFullYear() // 年
	let nowMonth = nowDate.getMonth() + 1 // 月
	let nowday = nowDate.getDate() // 日

	let nowhh = nowDate.getHours() // 时
	let nowmm = nowDate.getMinutes() // 分
	let nowss = nowDate.getSeconds() // 秒

	let yMd = nowyear + '-' + (nowMonth > 9 ? nowMonth : '0' + nowMonth) + '-' + (nowday > 9 ? nowday : '0' + nowday)
	let hms = (nowhh > 9 ? nowhh : '0' + nowhh) + ':' + (nowmm > 9 ? nowmm : '0' + nowmm) + ':' + (nowss > 9 ? nowss : '0' + nowss)

	return [yMd + ' ' + hms, yMd, hms][type - 1]
}

/**
 * 去重空字符串
 * 0 所有空格-默认
 * 1 前后空格
 * 2 前置空格
 * 3 后置空格
 */
function COM_trim(str, type=0) {
	let regArr = [/\s+/g, /(^\s*)|(\s*$)/g, /(^\s*)/g, /(\s*$)/g]
	return str.replace(regArr[type], '')
}

/**
 * 检测手机号格式
 */
function COM_istel(tel) {
	let reg = /^(10|11|12|13|14|15|16|17|18|19)[0-9]{9}$/
	return reg.test(tel)
}

/**
 * 数组去重一
 */
function COM_arrObjUnique(arr, para) {
	let result = [];
	let temp = {};
	
	for (let i = 0; i < objArr.length; i++) {
		let parameter = objArr[i][para];
		if (temp[parameter]) {
				continue;//不继续执行接下来的代码，跳转至循环开头
		}
		temp[parameter] = true;//为temp添加此属性（parameter）且将其值赋为true
		result.push(objArr[i]);//将这一项复制到结果数组result中去
	}
	return result;
}

export { COM_formateDate, COM_trim }