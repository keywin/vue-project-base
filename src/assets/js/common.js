/**
 * 获取当前时间, 默认全部显示
 * @param {number} type
 * 1 yyyy-MM-dd hh:mm:ss
 * 2 yyyy-MM-dd
 * 3 hh:mm:ss;
 * @param {date} 默认: 空获取当前时间; 设置的时间
 */
function formateDate(type = 1, whatDate) { // 
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

export { formateDate }