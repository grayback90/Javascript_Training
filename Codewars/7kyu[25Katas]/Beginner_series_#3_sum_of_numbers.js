/*
---ToDo---
Given two integers a and b, which can be positive or negative, 
find the sum of all the integers between and including them and return it. 
If the two numbers are equal return a or b.
---Note---
a and b are not ordered!
*/

function getSum(a,b){
    if (a == b){
      return a;
    }else if(a > b) {
      return a + getSum(a-1,b)
    }else{
      return a + getSum(a+1,b)
    }
}

// Test
/*
    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold=0;

    describe("Basic tests", () => {
        it("Testing for fixed tests", () => {         
            assert.strictEqual(getSum(0,-1),-1);
            assert.strictEqual(getSum(0,1),1);
        })
    });
*/

// Other Solutions
/*
    const GetSum = (a, b) => {
        let min = Math.min(a, b),
        max = Math.max(a, b);
        
        return (max - min + 1) * (min + max) / 2;
    }
*/