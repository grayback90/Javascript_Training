/*
---ToDo---
Given an array of integers your solution should find the smallest integer.
*/

function findSmallestInt(args) {
    let smallNum = args[0];
    
    for(let i = 0; i < args.length; ++i) {
      if( args[i] < smallNum) {
        smallNum = args[i];
      }
    }
    return smallNum;
}

// Test
/*
    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold=0;

    describe("Smallest Integer Tests", () => {
        let sif = new SmallestIntegerFinder();
        it("Fixed Tests", () => {
            assert.strictEqual(sif.findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
            assert.strictEqual(sif.findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
            assert.strictEqual(sif.findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
            assert.strictEqual(sif.findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
            assert.strictEqual(sif.findSmallestInt([1,56,232,12,8]),1,'Should return the smallest int 1');
        });
    })
*/

// Other Solutions
/*
    function findSmallestInt(args) {
        return Math.min(...args)
    }
*/