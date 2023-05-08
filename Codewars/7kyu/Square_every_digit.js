/*
---ToDo---
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
---Note---
The function accepts an integer and returns an integer
*/

function squareDigits(num){
    let arrNum = num.toString().split('');
    let arrReturn = [];
    
    for(let i = 0; i < arrNum.length; ++i) {
      let squaredNum = arrNum[i] * arrNum[i];
      arrReturn.push(squaredNum);
    }
    return parseInt(arrReturn.join(''));
}
  
// Test
/*
    const { assert } = require("chai")

    describe("Basic tests", () => {
        it("squareDigits(3212) should equal 9414", () => {
            assert.strictEqual(squareDigits(3212), 9414);
        });
        it("squareDigits(2112) should equal 4114", () => {
            assert.strictEqual(squareDigits(2112), 4114);
        });
        it("squareDigits(0) should equal 0", () => {
            assert.strictEqual(squareDigits(0), 0);
        });
    })
*/
  
// Other Solutions
/*
    function squareDigits(num){
        return Number(('' + num).split('').map(function (val) { return val * val;}).join('')); 
    }
*/