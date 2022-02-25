/*
---ToDo---
Given an array of integers, return a new array with each value doubled.
*/

function maps(x){
    let arrR = [];
    
    x.forEach((x) => arrR.push((x * 2)));
    
    return arrR;
}
  
// Test
/*
    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold=0;

    describe("Basic tests", ()=>{
        it("Fixed tests", () => {
            assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
            assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
            assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 
        });
    });
*/
  
// Other Solutions
/*
    function maps(x){
        return x.map(n => n * 2);
    }
*/