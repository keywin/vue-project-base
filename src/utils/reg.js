// 正整数
const reg1 = /^\d+$/
// 负整数
const reg2 = /^-\d+$/
// 整　数
const reg3 = /^-?\d+$/
// 正小数
const reg4 = /^\d+\.\d+$/
// 负小数
const reg5 = /^-\d+\.\d+$/
// 小　数
const reg6 = /^-?\d+\.\d+$/
// 实　数
const reg7 = /^-?\d+\.?\d*$/
// 保留1位小数
const reg8 = /^-?\d+\.?\d{0,1}$/
// 保留2位小数
const reg9 = /^-?\d+\.?\d{0,2}$/
// 保留3位小数
const reg10 = /^-?\d+\.?\d{0,3}$/
// 大于零小于十万不超过三位小数的数字
const reg11 = /^-?\d{1,5}(?:\.\d{1,3})?$/