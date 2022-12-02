const rps = require('./rps')
// A X - rock 1 - X you need to lose
// B Y - paper 2 Y means you need to draw
// C Z - scissors 3 Z means you need to win
// 0 points lose, 3 draw, 6 win
const gameArr = rps.split('\n')
let result = 0
for(let i = 0; i < gameArr.length; i++){
    let shoot = gameArr[i][2]
    switch(gameArr[i][0]){
        case 'A':
            shoot === 'X' ? result += 3:
                shoot === 'Y' ? result += 4:
                    result += 8
            break;
        case 'B':
            shoot === 'X' ? result += 1:
                shoot === 'Y' ? result += 5:
                    result += 9
            break;
        case 'C':
            shoot === 'X' ? result += 2:
                shoot === 'Y' ? result += 6:
                    result += 7
            break;
        default:
            console.log('error')
    }
}

console.log(result)