const data = require('./data')

const dataGrid = data.split('\n')
let acc = 0

function getGrid(dataArr){
    const grid = dataArr.map(row => row.split('').map(unit => parseInt(unit)))
    const reducedVals = grid.reduce((acc, row, i, arr) => acc + row
        .reduce((acc, curr, j) => 
        acc + ((!row.slice(0, j).some(t => t >= curr) 
                || !row.slice(j + 1).some(t => t >= curr) 
                || !arr.slice(0, i).map(r => r[j]).some(t => t >= curr)
                || !arr.slice(i + 1).map(r => r[j]).some(t => t >= curr)
                ) ? 1: 0), 0), 0);
    console.log(reducedVals)
}

getGrid(dataGrid)
