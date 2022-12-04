const assignments = require('./assignments')

const split = assignments.split(`\n`).map(x => x.split(','))

function range(start, end) {
    const ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

let result = 0

for(let i = 0; i < split.length; i++){
    let first = split[i][0].split('-')
    let second = split[i][1].split('-')
    let rangeOne = range(+first[0], +first[1])
    let rangeTwo = range(+second[0], +second[1])
    if(rangeOne.length > rangeTwo.length){
        for(let i = 0; i < rangeTwo.length; i ++){
            rangeOne.includes(rangeTwo[i]) ? rangeTwo = rangeTwo.filter(x => x !== rangeTwo[i]): null
        }
        rangeTwo.length === 0 ? result += 1 : null
    } else if (rangeTwo.length > rangeOne.length){
        for(let i = 0; i < rangeOne.length; i ++){
            rangeTwo.includes(rangeOne[i]) ? rangeOne = rangeOne.filter(x => x !== rangeOne[i]): null
        }
        rangeOne.length === 0 ? result += 1 : null
    }
    console.log(rangeOne)
    console.log(rangeTwo)
}
console.log(result)