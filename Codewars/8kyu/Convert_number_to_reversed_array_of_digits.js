/*
---ToDo---
Given a random non-negative number, you have to return the digits 
of this number within an array in reverse order.
*/

function digitize(n) {
    let arrN = n.toString().split('');
    let arrReturn = [];
    
    for(let i = arrN.length - 1; i >= 0; --i) {
      arrReturn.push((arrN[i] | 0));
    }
    return arrReturn;
}
  
// Test
/*
    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold=0;

    describe("Basic tests", () => {
        it("Testing for fixed tests", () => {
            assert.deepEqual(digitize(35231),[1,3,2,5,3]);
            assert.deepEqual(digitize(0),[0]);
        });
    });
*/
  
// Other Solutions
/*
    function digitize(n) {
        return String(n).split('').map(Number).reverse()
    }
*/  