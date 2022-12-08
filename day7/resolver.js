const data = require('./data')

const dataArr = data.split('\n')

let template = []
template.push({ [dataArr[1]]: dataArr[2]})

let fileNames = new Set()
// a set of all possible file names
for(let i = 0; i < dataArr.length; i++){
    let command = dataArr[i].split(' ')
    if(command[1] === 'cd'){
        fileNames.add(command[2])
    }
}
let filenameArr = [...fileNames]

for(let i = 0; i < filenameArr.length; i++){
    console.log(dataArr.indexOf(filenameArr[i]))
}

// solved with gpt 3 ://