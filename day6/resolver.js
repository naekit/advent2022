const data = require('./data')


let i = 0
let charLeng = false
do {
    let charArr = []
    for(let j = i; j < i + 14; j++){
        charArr.push(data[j])
    }
    let charSet = new Set(charArr)

    if([...charSet].length === 14){
        console.log(i + 14)
        charLeng = true
    }
    i++
} while (!charLeng);