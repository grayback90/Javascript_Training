/*
---ToDo---
You get an array of numbers, return the sum of all of the positives ones.
---Note---
If there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
    let sumArr = 0;
      
    for(let i = 0; i < arr.length; ++i) {
      if(arr[i] >= 0) {
        sumArr = sumArr + arr[i];
      }
    }
    
    return sumArr;
}

// Test
/*
    const { assert } = require("chai")

    describe("Basic tests", () => {
        it("Testing for fixed tests", () => {
            assert.strictEqual(positiveSum([1,2,3,4,5]),15);
            assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
            assert.strictEqual(positiveSum([]),0);
            assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
            assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
        });
    });
*/