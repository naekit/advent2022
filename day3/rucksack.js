const ruckStrings = require('./strings')
const ruckArray = ruckStrings.split('\n')

let alph = [0,"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let total = 0

function addResult(ruckCollection){
    for(let i = 0; i < ruckCollection.length; i+=3){
        let result
        let first = ruckCollection[i]
        let second = ruckCollection[i+1]
        let third = ruckCollection[i+2]
        for(let i = 0; i < first.length; i++){
            if(second.includes(first[i])){
                third.includes(first[i]) ? result = first[i]: null
            }
        }
        total += alph.indexOf(result)
    }
}
addResult(ruckArray)
console.log(total)