/*
---ToDo---
Your task is to make a function that can take any non-negative integer as an argument and 
return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.
*/

function descendingOrder(n){
    return parseInt(n.toString().split('').sort().reverse().join(''));
}
  
// Test
/*
    const { assert } = require("chai")

    describe("Basic tests", () => {
        it("Testing for fixed tests", () => {
            assert.strictEqual(descendingOrder(0), 0)
            assert.strictEqual(descendingOrder(1), 1)
            assert.strictEqual(descendingOrder(111), 111)
            assert.strictEqual(descendingOrder(15), 51)
            assert.strictEqual(descendingOrder(1021), 2110)
            assert.strictEqual(descendingOrder(123456789), 987654321)
        })
    })
*/
  
// Other Solutions
/*
    function descendingOrder(n){
        return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
    }
*/