const elvesWith = require("./calorieCount");

let elveArr = elvesWith.split('\n\n')
let elveMap = elveArr.map(x => x.split('\n'))

let elveSum = elveMap.map(x => x.reduce((a,c) => (+a) + (+c)), 0)
let elveNum = elveSum.map(x => Number(x))
let elveSort = elveNum.sort((a,b) => b - a)

console.log(elveSort[0] + elveSort[1] + elveSort[2])