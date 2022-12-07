const { mover } = require('./containers')
const moveArr = mover.split('\n').map((x) => x.split(' '))

const crateArr = [
    ['Q','F','M','R','L','W','C','V'],
    ['D', 'Q', 'L'],
    ['P','S','R','G','W','C','N','B'],
    ['L','C','D','H','B','Q','G'],
    ['V','G','L','F','Z','S'],
    ['D','G','N','P'],
    ['D','Z','P','V','F','C','W'],
    ['C','P','D','M','S'],
    ['Z','N','W','T','V','M','P','C']
]


for(let i = 0; i < moveArr.length; i++){
    let moveAmount = +moveArr[i][1]
    let arrFrom = crateArr[+moveArr[i][3] - 1]
    let arrTo = crateArr[+moveArr[i][5] - 1]
    let crate = arrFrom.splice(-moveAmount)
    arrTo.push(...crate)
}
console.log(crateArr)