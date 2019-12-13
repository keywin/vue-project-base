const comJS = {
  // 数组乱序
  shuffle: (newArr) => {
    let i = newArr.length
    while (i) {
      let j = Math.floor(Math.random() * i--);
      [newArr[j], newArr[i]] = [newArr[i], newArr[j]];
    }
    return newArr
  },
  randomArrOne: (arr) => {
    return arr[Math.floor((Math.random() * arr.length))]
  }
}

module.exports = comJS
