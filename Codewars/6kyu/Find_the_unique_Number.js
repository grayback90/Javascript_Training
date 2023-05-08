/*
---ToDo---
There is an array with some numbers. All numbers are equal except for one. 
Try to find it!
---Examples---
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
---Hints---
It’s guaranteed that array contains at least 3 numbers.
The tests contain some very huge arrays, so think about performance.
*/

function findUniq(arr) {  
    const counts = {};
    
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      
      if (counts[num]) {
        counts[num]++;
      } else {
        counts[num] = 1;
      }
    }
    
    for (const num in counts) {
      if (counts[num] === 1) {
        return Number(num);
      }
    }
  }
  
// Test
/*
    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    describe("Example Tests", () => {
    it("Tests", () => {
        assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
        assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
        assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
        assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
        assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
        assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);
    });
    });
*/
  
// Other Solutions
/*
    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    describe("Example Tests", () => {
    it("Tests", () => {
        assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
        assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
        assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
        assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
        assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
        assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);
    });
    });
*/