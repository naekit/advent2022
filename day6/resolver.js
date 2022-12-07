const data = require('./data')


let i = 0
let charLeng = false
do {
    let charArr = [
        data[i], 
        data[i + 1], 
        data[i + 2], 
        data[i + 3],
        data[i + 4], 
        data[i + 5], 
        data[i + 6],
        data[i + 7], 
        data[i + 8], 
        data[i + 9],
        data[i + 10], 
        data[i + 11], 
        data[i + 12],
        data[i + 13]
    ]
    let charSet = new Set(charArr)

    if([...charSet].length === 14){
        console.log(i)
        charLeng = true
    }
    i++
} while (!charLeng);