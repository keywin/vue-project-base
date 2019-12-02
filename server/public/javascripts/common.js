
const comJS = {
	// 数组乱序
	shuffle: (newArr) => {
		let i = newArr.length;
		while (i) {
			let j = Math.floor(Math.random() * i--);
			[newArr[j], newArr[i]] = [newArr[i], newArr[j]];
		}
		return newArr
	}
}

module.exports = comJS
